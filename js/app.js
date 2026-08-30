import { db } from "./firebase-config.js";
import { doc, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const $=id=>document.getElementById(id);
  const esc=v=>String(v??"").replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
  const WA="918278674819";
  const waUrl=`https://wa.me/${WA}?text=${encodeURIComponent("Namaste, mujhe Jangira E Mitra ki service ke baare mein jankari chahiye.")}`;

  const menuBtn=$("menuBtn"),mobileMenu=$("mobileMenu");
  if(menuBtn&&mobileMenu){menuBtn.onclick=()=>mobileMenu.classList.toggle("open");mobileMenu.querySelectorAll("a").forEach(a=>a.onclick=()=>mobileMenu.classList.remove("open"));}

  const search=$("serviceSearch"),results=$("searchResults");
  if(search&&results&&typeof services!=="undefined"){
    const run=()=>{const q=search.value.trim().toLowerCase();if(!q){results.innerHTML="";results.style.display="none";return;}const list=services.filter(s=>[s.name,s.englishName,s.category,...(s.keywords||[])].join(" ").toLowerCase().includes(q)).slice(0,10);results.innerHTML=list.length?list.map(s=>`<a class="search-result-item" href="documents.html?service=${encodeURIComponent(s.id)}"><strong>${esc(s.name)}</strong><small>${esc(s.englishName||"")}</small></a>`).join(""):"<div class=search-no-result>कोई सेवा नहीं मिली</div>";results.style.display="block"};
    search.addEventListener("input",run);$("searchBtn")?.addEventListener("click",run);
  }

  const style=document.createElement("style");style.textContent=`#jeLiveBroadcast{position:fixed;right:20px;bottom:20px;width:min(410px,calc(100vw - 28px));z-index:999999;background:rgba(16,16,20,.97);color:#fff;border:1px solid #36363d;border-left:5px solid #ff8a00;border-radius:20px;padding:18px;box-shadow:0 22px 70px rgba(0,0,0,.55);backdrop-filter:blur(18px);animation:jeLiveIn .35s ease;font-family:system-ui,sans-serif}.jeLiveImportant{border-left-color:#ff4d4d!important}.jeLiveSuccess{border-left-color:#32d583!important}.jeLiveWarning{border-left-color:#ffc107!important}.je-live-head{display:flex;align-items:center;gap:9px}.je-live-icon{width:35px;height:35px;border-radius:11px;background:#ff8a001a;display:grid;place-items:center;font-weight:900}.je-live-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;font-weight:900;color:#ffad52}.je-live-close{margin-left:auto;width:30px;height:30px;border:0;border-radius:9px;background:#ffffff0a;color:#aaa;font-size:20px;cursor:pointer}.je-live-title{margin:12px 35px 5px 0;font-size:18px;font-weight:900}.je-live-message{margin:0;color:#c9c9ce;line-height:1.55;font-size:13px;white-space:pre-wrap}.je-live-btn{display:inline-block;margin-top:13px;padding:9px 13px;background:#ff8a00;color:#111!important;border-radius:10px;text-decoration:none;font-size:12px;font-weight:900}.je-live-meta{margin-top:12px;color:#777;font-size:10px}.je-live-progress{height:2px;background:#ffffff10;margin-top:10px;overflow:hidden;border-radius:9px}.je-live-progress i{display:block;height:100%;background:#ff8a00;transform-origin:left}.je-live-progress.timed i{animation:jeLiveCountdown var(--je-duration) linear forwards}@keyframes jeLiveIn{from{opacity:0;transform:translateY(25px) scale(.97)}to{opacity:1;transform:none}}@keyframes jeLiveCountdown{from{transform:scaleX(1)}to{transform:scaleX(0)}}@media(max-width:600px){#jeLiveBroadcast{right:10px;left:10px;bottom:10px;width:auto}}`;document.head.appendChild(style);

  let broadcastTimer;
  function renderBroadcast(data){
    document.getElementById("jeLiveBroadcast")?.remove();clearTimeout(broadcastTimer);
    if(!data||data.active!==true||!String(data.message||"").trim())return;
    const now=Date.now(),start=data.start?new Date(data.start).getTime():0,end=data.end?new Date(data.end).getTime():0;
    if((start&&now<start)||(end&&now>=end))return;
    const key=String(data.updatedAt?.seconds||data.updatedAt||data.message);
    if(sessionStorage.getItem("jeBroadcastDismissed")===key)return;
    const type=data.type||"info",cls=type==="important"?"jeLiveImportant":type==="success"?"jeLiveSuccess":type==="warning"?"jeLiveWarning":"";
    const icon=type==="important"?"!":type==="success"?"✓":type==="warning"?"⚠":"ⓘ";
    const el=document.createElement("aside");el.id="jeLiveBroadcast";el.className=cls;
    el.innerHTML=`<div class="je-live-head"><span class="je-live-icon">${icon}</span><span class="je-live-label">${esc(type)}</span><button class="je-live-close" aria-label="Close">×</button></div><div class="je-live-title"></div><p class="je-live-message"></p><a class="je-live-btn" target="_blank" rel="noopener noreferrer"></a><div class="je-live-meta">Live announcement • Jangira E Mitra</div><div class="je-live-progress"><i></i></div>`;
    el.querySelector(".je-live-title").textContent=data.title||"Important Update";el.querySelector(".je-live-message").textContent=data.message;
    const a=el.querySelector(".je-live-btn");if(data.url){a.href=data.url;a.textContent=data.buttonText||"View Details"}else a.remove();
    el.querySelector(".je-live-close").onclick=()=>{sessionStorage.setItem("jeBroadcastDismissed",key);el.remove()};document.body.appendChild(el);
    const duration=Number(data.duration||0);if(duration>0){el.style.setProperty("--je-duration",duration+"ms");el.querySelector(".je-live-progress").classList.add("timed");broadcastTimer=setTimeout(()=>el.remove(),duration)}
  }
  onSnapshot(doc(db,"content","broadcast"),s=>renderBroadcast(s.exists()?s.data():null),e=>console.error("Broadcast realtime error",e));

  function renderBanners(items){
    const active=items.filter(x=>x.active!==false&&x.image);let box=$("jeCmsBanners");if(!active.length){box?.remove();return}if(!box){box=document.createElement("section");box.id="jeCmsBanners";box.className="container";document.querySelector(".hero")?.insertAdjacentElement("afterend",box)}
    box.innerHTML=`<div class="je-cms-track">${active.map((b,i)=>`<article class="je-cms-slide ${i===0?"active":""}"><img src="${esc(b.image)}" alt="${esc(b.title||"Jangira E Mitra")}"><div><h2>${esc(b.title||"")}</h2><p>${esc(b.description||"")}</p>${b.url?`<a href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.buttonText||"View Details")}</a>`:""}</div></article>`).join("")}</div>${active.length>1?`<div class="je-cms-dots">${active.map((_,i)=>`<button data-i="${i}" class="${i===0?"active":""}"></button>`).join("")}</div>`:""}`;
    const slides=[...box.querySelectorAll(".je-cms-slide")],dots=[...box.querySelectorAll(".je-cms-dots button")];let i=0;const show=n=>{i=n;slides.forEach((s,j)=>s.classList.toggle("active",j===n));dots.forEach((d,j)=>d.classList.toggle("active",j===n))};dots.forEach(d=>d.onclick=()=>show(+d.dataset.i));if(slides.length>1){clearInterval(box._timer);box._timer=setInterval(()=>show((i+1)%slides.length),5000)}
  }
  const bs=document.createElement("style");bs.textContent=`#jeCmsBanners{padding:25px 0}.je-cms-track{position:relative;min-height:240px;border-radius:20px;overflow:hidden;background:#111}.je-cms-slide{display:none;position:relative;min-height:240px}.je-cms-slide.active{display:block}.je-cms-slide img{width:100%;height:300px;object-fit:cover;display:block}.je-cms-slide>div{position:absolute;left:0;right:0;bottom:0;padding:45px 24px 22px;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.88))}.je-cms-slide h2{margin:0 0 5px}.je-cms-slide p{margin:0 0 10px}.je-cms-slide a{display:inline-block;background:#ff8a00;color:#111;padding:8px 12px;border-radius:9px;text-decoration:none;font-weight:900}.je-cms-dots{text-align:center;padding:10px}.je-cms-dots button{width:8px;height:8px;border:0;border-radius:50%;margin:0 4px}.je-cms-dots button.active{transform:scale(1.4)}`;document.head.appendChild(bs);
  onSnapshot(collection(db,"banners"),s=>renderBanners(s.docs.map(d=>({id:d.id,...d.data()}))),e=>console.error("Banners realtime error",e));

  onSnapshot(doc(db,"settings","site"),s=>{if(!s.exists())return;const x=s.data();document.querySelectorAll("[data-site-shop-name]").forEach(e=>e.textContent=x.shopname||e.textContent);document.querySelectorAll("[data-site-location]").forEach(e=>e.textContent=x.location||e.textContent);document.querySelectorAll("[data-site-phone]").forEach(e=>{if(x.phone){e.textContent=x.phone;e.href=`tel:${String(x.phone).replace(/\D/g,"")}`}});document.querySelectorAll("[data-site-whatsapp]").forEach(e=>e.href=x.whatsapp?`https://wa.me/${String(x.whatsapp).replace(/\D/g,"")}`:waUrl);document.querySelectorAll("[data-site-address]").forEach(e=>e.textContent=x.address||e.textContent);document.querySelectorAll("[data-site-hours]").forEach(e=>e.textContent=x.hours||e.textContent)},e=>console.error("Settings realtime error",e));
});