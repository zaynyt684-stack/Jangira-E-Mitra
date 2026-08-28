/* =========================================
   JANGIRA E MITRA
   APP.JS + REALTIME CMS
========================================= */

import { db } from "./firebase-config.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {

    /* MOBILE MENU */
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () { mobileMenu.classList.toggle("open"); });
        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () { mobileMenu.classList.remove("open"); });
        });
    }

    /* CURRENT PAGE */
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".desktop-nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) link.classList.add("active");
    });

    /* ESCAPE HTML */
    window.escapeHTML = function (text) {
        if (text === null || text === undefined) return "";
        return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;")
            .replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
    };

    /* GLOBAL SERVICE SEARCH */
    const searchInput = document.getElementById("serviceSearch");
    const searchResults = document.getElementById("searchResults");
    if (searchInput && searchResults && typeof services !== "undefined") {
        function doSearch() {
            const query = searchInput.value.toLowerCase().trim();
            searchResults.innerHTML = "";
            if (!query) { searchResults.style.display = "none"; return; }
            const results = services.filter(function (service) {
                return [service.name, service.englishName, service.category, ...(service.keywords || [])]
                    .join(" ").toLowerCase().includes(query);
            });
            if (!results.length) {
                searchResults.innerHTML = `<div class="search-no-result">कोई सेवा नहीं मिली</div>`;
            } else {
                results.forEach(function (service) {
                    const item = document.createElement("a");
                    item.href = "documents.html?service=" + encodeURIComponent(service.id);
                    item.className = "search-result-item";
                    item.innerHTML = `<strong>${escapeHTML(service.name)}</strong><small>${escapeHTML(service.englishName || "")}</small>`;
                    searchResults.appendChild(item);
                });
            }
            searchResults.style.display = "block";
        }
        searchInput.addEventListener("input", doSearch);
        const searchBtn = document.getElementById("searchBtn");
        if (searchBtn) searchBtn.addEventListener("click", doSearch);
        searchInput.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); doSearch(); } });
        document.addEventListener("click", function (event) {
            if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) searchResults.style.display = "none";
        });
    }

    /* SERVICE URL HELPER */
    window.openService = function (serviceId) {
        if (serviceId) window.location.href = "documents.html?service=" + encodeURIComponent(serviceId);
    };

    /* =========================================
       FIRESTORE CMS: BROADCAST
    ========================================= */
    function setupBroadcast(data) {
        let el = document.getElementById("siteBroadcast");
        if (!data || data.active !== true || !data.message) {
            if (el) el.remove();
            return;
        }
        if (!el) {
            el = document.createElement("div");
            el.id = "siteBroadcast";
            document.body.prepend(el);
        }
        const type = data.type || "info";
        el.className = "site-broadcast broadcast-" + type;
        el.innerHTML = `<div class="broadcast-inner"><span class="broadcast-dot"></span><div class="broadcast-text">${escapeHTML(data.message)}</div>${data.buttonText && data.url ? `<a href="${escapeHTML(data.url)}" class="broadcast-btn">${escapeHTML(data.buttonText)}</a>` : ""}<button class="broadcast-close" aria-label="Close">×</button></div>`;
        const close = el.querySelector(".broadcast-close");
        if (close) close.onclick = function () { el.remove(); };
    }

    onSnapshot(doc(db, "settings", "broadcast"), function (snap) {
        if (snap.exists()) setupBroadcast(snap.data());
        else setupBroadcast(null);
    }, function () {});

    /* =========================================
       FIRESTORE CMS: BANNERS
    ========================================= */
    function setupBanners(data) {
        if (!Array.isArray(data) || !data.length) return;
        const active = data.filter(x => x && x.active !== false && x.image);
        if (!active.length) return;
        let container = document.getElementById("cmsBanners");
        if (!container) {
            container = document.createElement("section");
            container.id = "cmsBanners";
            container.className = "cms-banners container";
            const hero = document.querySelector(".hero");
            if (hero) hero.insertAdjacentElement("afterend", container);
            else document.body.prepend(container);
        }
        container.innerHTML = `<div class="cms-banner-track">${active.map((b,i)=>`<article class="cms-banner ${i===0?"active":""}"><img src="${escapeHTML(b.image)}" alt="${escapeHTML(b.title||"Jangira E Mitra")}" loading="lazy"><div class="cms-banner-content">${b.title?`<h2>${escapeHTML(b.title)}</h2>`:""}${b.description?`<p>${escapeHTML(b.description)}</p>`:""}${b.buttonText&&b.url?`<a class="btn btn-primary" href="${escapeHTML(b.url)}">${escapeHTML(b.buttonText)}</a>`:""}</div></article>`).join("")}</div>${active.length>1?`<div class="cms-banner-dots">${active.map((_,i)=>`<button class="${i===0?"active":""}" data-banner-index="${i}" aria-label="Banner ${i+1}"></button>`).join("")}</div>`:""}`;
        const slides = [...container.querySelectorAll(".cms-banner")];
        const dots = [...container.querySelectorAll("[data-banner-index]")];
        let index = 0;
        function show(i){ index=i; slides.forEach((s,n)=>s.classList.toggle("active",n===i)); dots.forEach((d,n)=>d.classList.toggle("active",n===i)); }
        dots.forEach(d=>d.onclick=()=>show(Number(d.dataset.bannerIndex)));
        if (slides.length > 1) setInterval(()=>show((index+1)%slides.length),5000);
    }

    onSnapshot(doc(db, "settings", "banners"), function (snap) {
        setupBanners(snap.exists() ? (snap.data().items || []) : []);
    }, function () {});

    /* =========================================
       FIRESTORE CMS: WEBSITE SETTINGS
    ========================================= */
    onSnapshot(doc(db, "settings", "website"), function (snap) {
        if (!snap.exists()) return;
        const s = snap.data();
        document.querySelectorAll("[data-site-shop-name]").forEach(x=>x.textContent=s.shopName||x.textContent);
        document.querySelectorAll("[data-site-location]").forEach(x=>x.textContent=s.location||x.textContent);
        document.querySelectorAll("[data-site-phone]").forEach(x=>{ if(s.phone){x.textContent=s.phone;x.href="tel:"+s.phone.replace(/\s+/g,"");} });
        document.querySelectorAll("[data-site-whatsapp]").forEach(x=>{ if(s.whatsapp){x.href="https://wa.me/"+String(s.whatsapp).replace(/\D/g,"");} });
        document.querySelectorAll("[data-site-address]").forEach(x=>x.textContent=s.address||x.textContent);
        document.querySelectorAll("[data-site-hours]").forEach(x=>x.textContent=s.hours||x.textContent);
    }, function () {});

    /* SITE-WIDE ANIMATIONS */
    if (!document.getElementById("jangiraAnimationStyle")) {
        const style = document.createElement("style");
        style.id = "jangiraAnimationStyle";
        style.textContent = `
        .je-reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}
        .je-reveal.je-visible{opacity:1;transform:none}.je-pop{transition:transform .25s ease,box-shadow .25s ease}
        .je-pop:hover{transform:translateY(-5px);box-shadow:0 18px 45px rgba(0,0,0,.10)}
        .hero h1{animation:jeHero .7s ease both}.hero p{animation:jeHero .7s .1s ease both}.hero-actions,.hero-search{animation:jeHero .7s .18s ease both}
        .search-result-item{transition:background .2s ease,transform .2s ease}.search-result-item:hover{transform:translateX(4px)}
        .site-broadcast{position:relative;z-index:9999;padding:10px 16px;background:#111;color:#fff}.broadcast-important{background:#8b1e1e}.broadcast-success{background:#166534}
        .broadcast-inner{max-width:1200px;margin:auto;display:flex;align-items:center;gap:10px}.broadcast-text{flex:1;font-weight:600}.broadcast-dot{width:8px;height:8px;border-radius:50%;background:#ff8a00;animation:jePulse 1.4s infinite}.broadcast-btn{color:inherit;text-decoration:underline;font-weight:700}.broadcast-close{background:none;border:0;color:inherit;font-size:22px;cursor:pointer}
        .cms-banners{padding-top:28px;padding-bottom:10px}.cms-banner-track{position:relative;min-height:260px;border-radius:20px;overflow:hidden;background:#111}.cms-banner{display:none;position:relative;min-height:260px}.cms-banner.active{display:flex}.cms-banner img{width:100%;height:100%;min-height:260px;object-fit:cover}.cms-banner-content{position:absolute;inset:auto 0 0;padding:60px 28px 28px;background:linear-gradient(transparent,rgba(0,0,0,.82));color:#fff}.cms-banner-content h2{margin:0 0 7px}.cms-banner-content p{margin:0 0 14px}.cms-banner-dots{text-align:center;padding:12px}.cms-banner-dots button{width:9px;height:9px;border:0;border-radius:50%;margin:0 4px;cursor:pointer}.cms-banner-dots button.active{transform:scale(1.35)}
        @keyframes jeHero{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes jePulse{50%{opacity:.35}}
        @media(max-width:600px){.broadcast-inner{flex-wrap:wrap}.broadcast-text{font-size:14px}.cms-banner,.cms-banner-track,.cms-banner img{min-height:210px}.cms-banner-content{padding:45px 18px 18px}.cms-banner-content h2{font-size:20px}}
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
        `;
        document.head.appendChild(style);
    }

    const animatedSelectors = [".info-card", ".service-card", ".step", ".notice-box", ".cta-box", ".section-heading", ".document-card", ".service-selector", ".form-card", ".link-card"];
    const animated = document.querySelectorAll(animatedSelectors.join(","));
    animated.forEach(function (element, index) { element.classList.add("je-reveal", "je-pop"); element.style.transitionDelay = Math.min(index % 8, 7) * 45 + "ms"; });
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("je-visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
        animated.forEach(function (element) { observer.observe(element); });
    } else animated.forEach(function (element) { element.classList.add("je-visible"); });
});
