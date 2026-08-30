import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
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

// Firebase App Check with reCAPTCHA Enterprise.
// This key is configured in Firebase Console for the Jangira E-Mitra web app.
const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaEnterpriseProvider("6LefS6AtAAAAAFbdzxKgum06yZpiiY34cZmFAD_3"),
  isTokenAutoRefreshEnabled: true
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db, appCheck };