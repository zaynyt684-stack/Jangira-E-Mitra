/* =========================================
   JANGIRA E MITRA - FIREBASE CONFIG
   ========================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFkTebmxTpNnInrvYX-ffuUzQgUbRQlGw",
    authDomain: "jangira-e-mitra.firebaseapp.com",
    projectId: "jangira-e-mitra",
    storageBucket: "jangira-e-mitra.firebasestorage.app",
    messagingSenderId: "593826154587",
    appId: "1:593826154587:web:7e4d667e1ae19cf5cf977e",
    measurementId: "G-TY4H7ZZFQ7"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

/* Global lightweight UX + realtime broadcast layer. */
(() => {
  if (typeof document === "undefined" || document.documentElement.dataset.jangiraUx) return;
  document.documentElement.dataset.jangiraUx = "1";

  const css = document.createElement("style");
  css.textContent = `
    body{opacity:0;transition:opacity .22s ease;overflow-x:hidden}body.je-ready{opacity:1}
    #jeLoader{position:fixed;inset:0;z-index:999999;background:#111114;color:#fff;display:grid;place-items:center;transition:opacity .28s ease,visibility .28s ease}
    #jeLoader.hide{opacity:0;visibility:hidden;pointer-events:none}.je-loader-box{text-align:center;padding:24px}.je-logo{width:58px;height:58px;margin:auto;border-radius:17px;background:#ff8a00;color:#111114;display:grid;place-items:center;font-weight:950;font-size:18px;box-shadow:0 0 0 0 rgba(255,138,0,.4);animation:jeGlow 1.6s infinite}.je-loader-title{margin-top:15px;font-weight:900;font-size:18px}.je-loader-sub{margin-top:5px;color:#999;font-size:12px}.je-spinner{width:26px;height:26px;border:3px solid rgba(255,255,255,.15);border-top-color:#ff8a00;border-radius:50%;margin:18px auto 0;animation:jeSpin .7s linear infinite}.je-progress{width:min(260px,70vw);height:3px;background:#29292e;border-radius:99px;margin:18px auto 0;overflow:hidden}.je-progress i{display:block;height:100%;width:12%;background:#ff8a00;border-radius:99px;animation:jeProgress 1.25s ease-in-out infinite}
    .je-ripple{position:absolute;border-radius:50%;transform:scale(0);animation:jeRipple .55s ease-out;background:rgba(255,255,255,.35);pointer-events:none}.btn,.tab,.desktop-nav a,.mobile-menu a,.service-card,.info-card,.item{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease,background .2s ease,border-color .2s ease}.btn:active{transform:scale(.97)}
    #jeBroadcast{position:fixed;right:20px;bottom:20px;width:min(390px,calc(100vw - 28px));z-index:99990;display:none;background:rgba(18,18,22,.94);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid #35353c;border-left:4px solid #ff8a00;border-radius:18px;padding:15px 16px;box-shadow:0 18px 55px rgba(0,0,0,.48);animation:jeBroadcastIn .42s cubic-bezier(.2,.8,.2,1)}
    #jeBroadcast.je-hide{animation:jeBroadcastOut .25s ease forwards}.je-b-head{display:flex;align-items:center;gap:9px}.je-b-icon{width:32px;height:32px;border-radius:10px;background:#ff8a001a;display:grid;place-items:center;font-size:16px}.je-b-badge{font-size:9px;letter-spacing:.7px;text-transform:uppercase;font-weight:900;color:#ffad52}.je-b-close{margin-left:auto;width:28px;height:28px;border:0;border-radius:8px;background:#ffffff08;color:#aaa;font-size:19px;cursor:pointer}.je-b-title{margin:9px 34px 5px 0;font-size:16px;font-weight:900}.je-b-message{color:#c5c5ca;line-height:1.5;font-size:13px;white-space:pre-wrap}.je-b-link{display:none;margin-top:11px;background:#ff8a00;color:#111!important;text-decoration:none;padding:8px 12px;border-radius:9px;font-size:12px;font-weight:900}.je-b-progress{height:2px;background:#ffffff0d;border-radius:9px;margin-top:13px;overflow:hidden}.je-b-progress i{display:block;height:100%;width:100%;background:#ff8a00;transform-origin:left}.je-b-progress.timed i{animation:jeCountdown var(--je-duration,8s) linear forwards}
    #jeBroadcast.je-info{border-left-color:#ff8a00}#jeBroadcast.je-important{border-left-color:#ff4d4d}.je-important .je-b-icon{background:#ff4d4d18}.je-important .je-b-badge{color:#ff7b7b}#jeBroadcast.je-success{border-left-color:#45d483}.je-success .je-b-icon{background:#45d48318}.je-success .je-b-badge{color:#72e8a1}#jeBroadcast.je-warning{border-left-color:#ffc107}.je-warning .je-b-icon{background:#ffc10718}.je-warning .je-badge{color:#ffd75a}
    @keyframes jeSpin{to{transform:rotate(360deg)}}@keyframes jeGlow{50%{box-shadow:0 0 0 12px rgba(255,138,0,0)}}@keyframes jeProgress{0%{transform:translateX(-120%);width:25%}50%{width:65%}100%{transform:translateX(430%);width:25%}}@keyframes jeRipple{to{transform:scale(4);opacity:0}}@keyframes jeBroadcastIn{from{transform:translateY(35px) scale(.96);opacity:0}to{transform:none;opacity:1}}@keyframes jeBroadcastOut{to{transform:translateY(25px);opacity:0}}@keyframes jeCountdown{from{transform:scaleX(1)}to{transform:scaleX(0)}}
    @media(max-width:600px){#jeBroadcast{right:10px;left:10px;bottom:10px;width:auto;border-radius:15px;padding:13px 14px}.je-b-title{font-size:15px}}
    @media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition:none!important}}
  `;
  document.head.appendChild(css);

  const loader = document.createElement("div");loader.id="jeLoader";loader.innerHTML='<div class="je-loader-box"><div class="je-logo">JE</div><div class="je-loader-title">Jangira E Mitra</div><div class="je-loader-sub">Loading secure services...</div><div class="je-spinner"></div><div class="je-progress"><i></i></div></div>';
  document.body ? document.body.prepend(loader) : document.addEventListener("DOMContentLoaded",()=>document.body.prepend(loader),{once:true});

  const connection=navigator.connection||navigator.mozConnection||navigator.webkitConnection;const setNetwork=()=>{document.documentElement.dataset.network=connection?.effectiveType||"unknown";document.documentElement.dataset.saveData=connection?.saveData?"1":"0"};setNetwork();connection?.addEventListener?.("change",setNetwork);
  const finish=()=>{document.body.classList.add("je-ready");setTimeout(()=>loader.classList.add("hide"),80);setTimeout(()=>loader.remove(),450)};if(document.readyState==="complete")finish();else window.addEventListener("load",finish,{once:true});setTimeout(finish,connection?.saveData?900:2200);

  document.addEventListener("click",e=>{const el=e.target.closest(".btn,.tab,.menu-btn");if(!el||el.disabled)return;const r=el.getBoundingClientRect(),size=Math.max(r.width,r.height),ripple=document.createElement("i");if(getComputedStyle(el).position==="static")el.style.position="relative";ripple.className="je-ripple";ripple.style.width=ripple.style.height=size+"px";ripple.style.left=e.clientX-r.left-size/2+"px";ripple.style.top=e.clientY-r.top-size/2+"px";el.appendChild(ripple);setTimeout(()=>ripple.remove(),600)},{passive:true});
  document.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(!a||a.target==="_blank"||a.hasAttribute("download"))return;const href=a.getAttribute("href");if(!href||href.startsWith("#")||href.startsWith("javascript:"))return;if(new URL(a.href,location.href).origin===location.origin){document.body.classList.remove("je-ready");loader.classList.remove("hide")}}, {capture:true});

  const icons={info:"ⓘ",important:"!",success:"✓",warning:"⚠"};
  let broadcastTimer=null;
  const removeBroadcast=()=>{const el=document.getElementById("jeBroadcast");if(el){el.classList.add("je-hide");setTimeout(()=>el.remove(),260)}if(broadcastTimer)clearTimeout(broadcastTimer)};
  const showBroadcast=(x)=>{
    removeBroadcast();if(!x?.active)return;
    const now=Date.now(),start=x.start?new Date(x.start).getTime():0,end=x.end?new Date(x.end).getTime():0;if((start&&now<start)||(end&&now>end))return;
    const key=String(x.updatedAt?.seconds||x.updatedAt||x.title||"");if(localStorage.getItem("jangira_broadcast_dismissed")===key)return;
    const el=document.createElement("aside");el.id="jeBroadcast";el.className="je-"+(x.type||"info");el.innerHTML=`<div class="je-b-head"><div class="je-b-icon">${icons[x.type]||icons.info}</div><span class="je-b-badge">${x.type||"info"}</span><button class="je-b-close" aria-label="Close">×</button></div><div class="je-b-title"></div><div class="je-b-message"></div><a class="je-b-link" target="_blank" rel="noopener"></a><div class="je-b-progress"><i></i></div>`;
    el.querySelector(".je-b-title").textContent=x.title||"Important Update";el.querySelector(".je-b-message").textContent=x.message||"";const link=el.querySelector(".je-b-link");if(x.url){link.href=x.url;link.textContent=x.buttonText||"View Details";link.style.display="inline-block"}document.body.appendChild(el);
    el.querySelector(".je-b-close").onclick=()=>{localStorage.setItem("jangira_broadcast_dismissed",key);removeBroadcast()};
    const duration=Number(x.duration||0);if(duration>0){el.style.setProperty("--je-duration",duration+"ms");el.querySelector(".je-b-progress").classList.add("timed");broadcastTimer=setTimeout(()=>{localStorage.setItem("jangira_broadcast_dismissed",key);removeBroadcast()},duration)}
  };
  onSnapshot(doc(db,"content","broadcast"),s=>showBroadcast(s.exists()?s.data():null),()=>{});
})();

export { firebaseApp, auth, db };