/* =========================================
   JANGIRA E MITRA
   APP.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("open");
        });
        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("open");
            });
        });
    }

    /* =========================================
       CURRENT PAGE
    ========================================= */
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".desktop-nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) link.classList.add("active");
    });

    /* =========================================
       GLOBAL SERVICE SEARCH
    ========================================= */
    const searchInput = document.getElementById("serviceSearch");
    const searchResults = document.getElementById("searchResults");

    if (searchInput && searchResults && typeof services !== "undefined") {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase().trim();
            searchResults.innerHTML = "";
            if (!query) { searchResults.style.display = "none"; return; }

            const results = services.filter(function (service) {
                return [service.name, service.englishName, service.category, ...(service.keywords || [])]
                    .join(" ").toLowerCase().includes(query);
            });

            if (!results.length) {
                searchResults.innerHTML = `<div class="search-no-result">कोई सेवा नहीं मिली</div>`;
                searchResults.style.display = "block";
                return;
            }

            results.forEach(function (service) {
                const item = document.createElement("a");
                item.href = "documents.html?service=" + encodeURIComponent(service.id);
                item.className = "search-result-item";
                item.innerHTML = `<strong>${escapeHTML(service.name)}</strong><small>${escapeHTML(service.englishName)}</small>`;
                searchResults.appendChild(item);
            });
            searchResults.style.display = "block";
        });

        document.addEventListener("click", function (event) {
            if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
                searchResults.style.display = "none";
            }
        });
    }

    /* =========================================
       ESCAPE HTML
    ========================================= */
    window.escapeHTML = function (text) {
        if (text === null || text === undefined) return "";
        return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;")
            .replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
    };

    /* =========================================
       SERVICE URL HELPER
    ========================================= */
    window.openService = function (serviceId) {
        if (!serviceId) return;
        window.location.href = "documents.html?service=" + encodeURIComponent(serviceId);
    };

    /* =========================================
       SMOOTH SCROLL
    ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    /* =========================================
       SITE-WIDE ANIMATIONS
    ========================================= */
    if (!document.getElementById("jangiraAnimationStyle")) {
        const style = document.createElement("style");
        style.id = "jangiraAnimationStyle";
        style.textContent = `
            .je-reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}
            .je-reveal.je-visible{opacity:1;transform:none}
            .je-pop{transition:transform .25s ease,box-shadow .25s ease}
            .je-pop:hover{transform:translateY(-5px);box-shadow:0 18px 45px rgba(0,0,0,.10)}
            .hero h1{animation:jeHero .7s ease both}
            .hero p{animation:jeHero .7s .1s ease both}
            .hero-actions,.hero-search{animation:jeHero .7s .18s ease both}
            .search-result-item{transition:background .2s ease,transform .2s ease}
            .search-result-item:hover{transform:translateX(4px)}
            @keyframes jeHero{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
            @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
        `;
        document.head.appendChild(style);
    }

    const animatedSelectors = [
        ".info-card", ".service-card", ".step", ".notice-box", ".cta-box",
        ".section-heading", ".document-card", ".service-selector", ".form-card", ".link-card"
    ];
    const animated = document.querySelectorAll(animatedSelectors.join(","));
    animated.forEach(function (element, index) {
        element.classList.add("je-reveal", "je-pop");
        element.style.transitionDelay = Math.min(index % 8, 7) * 45 + "ms";
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("je-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        animated.forEach(function (element) { observer.observe(element); });
    } else {
        animated.forEach(function (element) { element.classList.add("je-visible"); });
    }
});
