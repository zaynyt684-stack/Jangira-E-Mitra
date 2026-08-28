/* =========================================
   JANGIRA E MITRA - FIREBASE CONFIG
   Public Firebase web config is safe to ship.
   Security is enforced by Firebase Auth + Rules.
========================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-storage.js";

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
const storage = getStorage(firebaseApp);

export { firebaseApp, auth, db, storage };
