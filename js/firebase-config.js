import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-check.js";

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
const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaEnterpriseProvider("6LefS6AtAAAAAFbdzxKgum06yZpiiY34cZmFAD_3"),
  isTokenAutoRefreshEnabled: true
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const mountAccountUi = user => {
  const links = document.querySelectorAll('a[href="auth.html"], .open-auth, [data-auth], [data-open-auth]');
  links.forEach(link => {
    link.textContent = user && !user.isAnonymous ? "My Account" : "Sign In";
    link.dataset.authState = user && !user.isAnonymous ? "signed-in" : "signed-out";
  });
  if (user && !user.isAnonymous) {
    let logout = document.querySelector("[data-firebase-logout]");
    if (!logout) {
      logout = document.createElement("button");
      logout.type = "button";
      logout.setAttribute("data-firebase-logout", "true");
      logout.textContent = "Logout";
      logout.className = "je-logout-btn";
      const nav = document.querySelector(".desktop-nav");
      const mobile = document.querySelector(".mobile-menu");
      if (nav) nav.appendChild(logout); else if (mobile) mobile.appendChild(logout); else document.body.appendChild(logout);
      logout.addEventListener("click", async () => {
        logout.disabled = true;
        logout.textContent = "Logging out...";
        try { await signOut(auth); location.reload(); }
        catch (e) { console.error("[Jangira E-Mitra] logout failed", e); logout.disabled = false; logout.textContent = "Logout"; alert("Logout failed. Dobara try karo."); }
      });
    }
  } else document.querySelector("[data-firebase-logout]")?.remove();
};

const accountUiStyle = document.createElement("style");
accountUiStyle.textContent = `.je-logout-btn{border:1px solid rgba(255,138,0,.35);background:rgba(255,138,0,.09);color:#ffb45e;border-radius:10px;padding:9px 14px;font-weight:800;cursor:pointer;margin-left:6px}.je-logout-btn:hover{background:rgba(255,138,0,.16);transform:translateY(-1px)}.je-logout-btn:disabled{opacity:.6;cursor:wait}`;
(document.head || document.documentElement).appendChild(accountUiStyle);

const startAccountObserver = () => onAuthStateChanged(auth, mountAccountUi);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startAccountObserver, { once: true }); else startAccountObserver();

export { firebaseApp, auth, db, appCheck };