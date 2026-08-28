/* =========================================
   JANGIRA E MITRA - FIREBASE CONFIG
   ========================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

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

/* Global lightweight UX layer. It runs on every page that loads firebase-config. */
(() => {
  if (typeof document === "undefined" || document.documentElement.dataset.jangiraUx) return;
  document.documentElement.dataset.jangiraUx = "1";

  const css = document.createElement("style");
  css.textContent = `
    body{opacity:0;transition:opacity .22s ease;overflow-x:hidden}
    body.je-ready{opacity:1}
    #jeLoader{position:fixed;inset:0;z-index:999999;background:#111114;color:#fff;display:grid;place-items:center;transition:opacity .28s ease,visibility .28s ease}
    #jeLoader.hide{opacity:0;visibility:hidden;pointer-events:none}
    .je-loader-box{text-align:center;padding:24px}
    .je-logo{width:58px;height:58px;margin:auto;border-radius:17px;background:#ff8a00;color:#111114;display:grid;place-items:center;font-weight:950;font-size:18px;box-shadow:0 0 0 0 rgba(255,138,0,.4);animation:jeGlow 1.6s infinite}
    .je-loader-title{margin-top:15px;font-weight:900;font-size:18px}.je-loader-sub{margin-top:5px;color:#999;font-size:12px}
    .je-spinner{width:26px;height:26px;border:3px solid rgba(255,255,255,.15);border-top-color:#ff8a00;border-radius:50%;margin:18px auto 0;animation:jeSpin .7s linear infinite}
    .je-progress{width:min(260px,70vw);height:3px;background:#29292e;border-radius:99px;margin:18px auto 0;overflow:hidden}.je-progress i{display:block;height:100%;width:12%;background:#ff8a00;border-radius:99px;animation:jeProgress 1.25s ease-in-out infinite}
    .je-skeleton{position:relative;overflow:hidden;background:#ececee!important;color:transparent!important;border-color:transparent!important}.je-skeleton:after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);animation:jeShimmer 1.1s infinite}
    .btn,.tab,.desktop-nav a,.mobile-menu a,.service-card,.info-card,.item{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease,background .2s ease,border-color .2s ease}
    .btn:active{transform:scale(.97)}.btn.je-busy{pointer-events:none;opacity:.7}.btn.je-busy:before{content:"";width:13px;height:13px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;margin-right:8px;animation:jeSpin .7s linear infinite}
    .je-ripple{position:absolute;border-radius:50%;transform:scale(0);animation:jeRipple .55s ease-out;background:rgba(255,255,255,.35);pointer-events:none}
    @keyframes jeSpin{to{transform:rotate(360deg)}}@keyframes jeGlow{50%{box-shadow:0 0 0 12px rgba(255,138,0,0)}}@keyframes jeProgress{0%{transform:translateX(-120%);width:25%}50%{width:65%}100%{transform:translateX(430%);width:25%}}@keyframes jeShimmer{100%{transform:translateX(100%)}}@keyframes jeRipple{to{transform:scale(4);opacity:0}}
    @media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition:none!important}}
  `;
  document.head.appendChild(css);

  const loader = document.createElement("div");
  loader.id = "jeLoader";
  loader.innerHTML = '<div class="je-loader-box"><div class="je-logo">JE</div><div class="je-loader-title">Jangira E Mitra</div><div class="je-loader-sub">Loading secure services...</div><div class="je-spinner"></div><div class="je-progress"><i></i></div></div>';
  document.body ? document.body.prepend(loader) : document.addEventListener("DOMContentLoaded",()=>document.body.prepend(loader),{once:true});

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const setNetwork = () => {
    const type = connection?.effectiveType || "unknown";
    document.documentElement.dataset.network = type;
    document.documentElement.dataset.saveData = connection?.saveData ? "1" : "0";
  };
  setNetwork(); connection?.addEventListener?.("change",setNetwork);

  const finish = () => { document.body.classList.add("je-ready");setTimeout(()=>loader.classList.add("hide"),80);setTimeout(()=>loader.remove(),450); };
  if (document.readyState === "complete") finish(); else window.addEventListener("load",finish,{once:true});
  setTimeout(finish, connection?.saveData ? 900 : 2200);

  document.addEventListener("click",e=>{
    const el=e.target.closest(".btn,.tab,.menu-btn");
    if(!el || el.disabled) return;
    const r=el.getBoundingClientRect(), size=Math.max(r.width,r.height), ripple=document.createElement("i");
    if(getComputedStyle(el).position==="static") el.style.position="relative";
    ripple.className="je-ripple";ripple.style.width=ripple.style.height=size+"px";ripple.style.left=(e.clientX-r.left-size/2)+"px";ripple.style.top=(e.clientY-r.top-size/2)+"px";el.appendChild(ripple);setTimeout(()=>ripple.remove(),600);
  },{passive:true});

  document.addEventListener("submit",e=>{const b=e.target.querySelector('button[type="submit"],button.btn-primary');if(b&&!b.disabled){b.classList.add("je-busy");b.dataset.oldText=b.textContent;b.textContent="Processing...";}},true);

  document.addEventListener("click",e=>{
    const a=e.target.closest("a[href]"); if(!a||a.target==="_blank"||a.hasAttribute("download")) return;
    const href=a.getAttribute("href"); if(!href||href.startsWith("#")||href.startsWith("javascript:")) return;
    if(new URL(a.href,location.href).origin===location.origin){document.body.classList.remove("je-ready");loader.classList.remove("hide");}
  },{capture:true});

  window.JangiraUX={network:()=>connection?.effectiveType||"unknown",saveData:()=>!!connection?.saveData};
})();

export { firebaseApp, auth, db };
