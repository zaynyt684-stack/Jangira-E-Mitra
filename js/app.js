import { db } from "./firebase-config.js";
import { doc, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  const $ = id => document.getElementById(id);
  const escapeHTML = text => String(text ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;");
  window.escapeHTML = escapeHTML;

  const menuBtn = $("menuBtn"), mobileMenu = $("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".desktop-nav a").forEach(a => {
    if (a.getAttribute("href")?.split("?")[0] === currentPage) a.classList.add("active");
  });

  const searchInput = $("serviceSearch"), searchResults = $("searchResults");
  if (searchInput && searchResults && typeof services !== "undefined") {
    const doSearch = () => {
      const q = searchInput.value.toLowerCase().trim(); searchResults.innerHTML = "";
      if (!q) { searchResults.style.display="none"; return; }
      const results = services.filter(s => [s.name,s.englishName,s.category,...(s.keywords||[])].join(" ").toLowerCase().includes(q));
      if (!results.length) searchResults.innerHTML='<div class="search-no-result">कोई सेवा नहीं मिली</div>';
      else results.forEach(s => { const a=document.createElement("a"); a.href="documents.html?service="+encodeURIComponent(s.id); a.className="search-result-item"; a.innerHTML=`<strong>${escapeHTML(s.name)}</strong><small>${escapeHTML(s.englishName||"")}</small>`; searchResults.appendChild(a); });
      searchResults.style.display="block";
    };
    searchInput.addEventListener("input",doSearch); $("searchBtn")?.addEventListener("click",doSearch); searchInput.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();doSearch();}});
    document.addEventListener("click",e=>{if(!searchInput.contains(e.target)&&!searchResults.contains(e.target))searchResults.style.display="none";});
  }

  window.openService = id => { if(id) window.location.href="documents.html?service="+encodeURIComponent(id); };

  function setupBroadcast(data) {
    let el=$("siteBroadcast");
    if(!data || data.active!==true || !data.message){el?.remove();return;}
    if(!el){el=document.createElement("div");el.id="siteBroadcast";document.body.prepend(el);}
    el.className="site-broadcast broadcast-"+(data.type||"info");
    el.innerHTML=`<div class="broadcast-inner"><span class="broadcast-dot"></span><div class="broadcast-text">${escapeHTML(data.message)}</div>${data.buttonText&&data.url?`<a href="${escapeHTML(data.url)}" class="broadcast-btn">${escapeHTML(data.buttonText)}</a>`:""}<button class="broadcast-close" aria-label="Close">×</button></div>`;
    el.querySelector(".broadcast-close")?.addEventListener("click",()=>el.remove());
  }
  onSnapshot(doc(db,"content","broadcast"), snap => setupBroadcast(snap.exists()?snap.data():null), () => {});

  function setupBanners(items) {
    let container=$("cmsBanners");
    const active=(items||[]).filter(x=>x&&x.active!==false&&x.image);
    if(!active.length){container?.remove();return;}
    if(!container){container=document.createElement("section");container.id="cmsBanners";container.className="cms-banners container";const hero=document.querySelector(".hero");hero?hero.insertAdjacentElement("afterend",container):document.body.prepend(container);}
    container.innerHTML=`<div class="cms-banner-track">${active.map((b,i)=>`<article class="cms-banner ${i===0?"active":""}"><img src="${escapeHTML(b.image)}" alt="${escapeHTML(b.title||"Jangira E Mitra")}" loading="lazy"><div class="cms-banner-content">${b.title?`<h2>${escapeHTML(b.title)}</h2>`:""}${b.description?`<p>${escapeHTML(b.description)}</p>`:""}${b.buttonText&&b.url?`<a class="btn btn-primary" href="${escapeHTML(b.url)}">${escapeHTML(b.buttonText)}</a>`:""}</div></article>`).join("")}</div>${active.length>1?`<div class="cms-banner-dots">${active.map((_,i)=>`<button class="${i===0?"active":""}" data-banner-index="${i}" aria-label="Banner ${i+1}"></button>`).join("")}</div>`:""}`;
    const slides=[...container.querySelectorAll(".cms-banner")],dots=[...container.querySelectorAll("[data-banner-index]")]; let index=0;
    const show=i=>{index=i;slides.forEach((s,n)=>s.classList.toggle("active",n===i));dots.forEach((d,n)=>d.classList.toggle("active",n===i));};
    dots.forEach(d=>d.onclick=()=>show(Number(d.dataset.bannerIndex)));
    if(slides.length>1){if(container._timer)clearInterval(container._timer);container._timer=setInterval(()=>show((index+1)%slides.length),5000);}
  }
  onSnapshot(collection(db,"banners"), snap => setupBanners(snap.docs.map(d=>({id:d.id,...d.data()}))), () => {});

  onSnapshot(doc(db,"settings","site"), snap => {
    if(!snap.exists())return; const s=snap.data();
    document.querySelectorAll("[data-site-shop-name]").forEach(x=>x.textContent=s.shopname||x.textContent);
    document.querySelectorAll("[data-site-location]").forEach(x=>x.textContent=s.location||x.textContent);
    document.querySelectorAll("[data-site-phone]").forEach(x=>{if(s.phone){x.textContent=s.phone;x.href="tel:"+s.phone.replace(/\s+/g,"");}});
    document.querySelectorAll("[data-site-whatsapp]").forEach(x=>{if(s.whatsapp)x.href="https://wa.me/"+String(s.whatsapp).replace(/\D/g,"");});
    document.querySelectorAll("[data-site-address]").forEach(x=>x.textContent=s.address||x.textContent);
    document.querySelectorAll("[data-site-hours]").forEach(x=>x.textContent=s.hours||x.textContent);
  }, () => {});

  if(!document.getElementById("jangiraAnimationStyle")){
    const style=document.createElement("style");style.id="jangiraAnimationStyle";style.textContent=`.site-broadcast{position:relative;z-index:9999;padding:10px 16px;background:#111;color:#fff}.broadcast-important{background:#8b1e1e}.broadcast-success{background:#166534}.broadcast-inner{max-width:1200px;margin:auto;display:flex;align-items:center;gap:10px}.broadcast-text{flex:1;font-weight:600}.broadcast-dot{width:8px;height:8px;border-radius:50%;background:#ff8a00;animation:jePulse 1.4s infinite}.broadcast-btn{color:inherit;text-decoration:underline;font-weight:700}.broadcast-close{background:none;border:0;color:inherit;font-size:22px;cursor:pointer}.cms-banners{padding:28px 0 10px}.cms-banner-track{position:relative;min-height:260px;border-radius:20px;overflow:hidden;background:#111}.cms-banner{display:none;position:relative;min-height:260px}.cms-banner.active{display:flex}.cms-banner img{width:100%;min-height:260px;object-fit:cover}.cms-banner-content{position:absolute;inset:auto 0 0;padding:60px 28px 28px;background:linear-gradient(transparent,rgba(0,0,0,.82));color:#fff}.cms-banner-content h2{margin:0 0 7px}.cms-banner-content p{margin:0 0 14px}.cms-banner-dots{text-align:center;padding:12px}.cms-banner-dots button{width:9px;height:9px;border:0;border-radius:50%;margin:0 4px;cursor:pointer}.cms-banner-dots button.active{transform:scale(1.35)}@keyframes jePulse{50%{opacity:.35}}`;
    document.head.appendChild(style);
  }
});
