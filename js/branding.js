import { db } from './firebase-config.js';
import { doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';

const FALLBACK_LOGO = new URL('../assets/logo.png?v=20260831', import.meta.url).href;

const applyBranding = (data = {}) => {
  const logo = data.logoUrl?.trim() || FALLBACK_LOGO;
  document.querySelectorAll('[data-site-logo]').forEach(img => {
    img.src = logo;
    img.style.display = 'block';
    img.style.visibility = 'visible';
    img.onerror = () => {
      if (img.dataset.logoFallbackApplied !== '1') {
        img.dataset.logoFallbackApplied = '1';
        img.src = FALLBACK_LOGO;
      }
    };
  });
  let link = document.querySelector('link[data-site-favicon]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    link.dataset.siteFavicon = '1';
    document.head.appendChild(link);
  }
  link.href = data.faviconUrl?.trim() || FALLBACK_LOGO;
  if (data.shopname) document.title = `${data.shopname} | Rajasthan E-Mitra & Cyber Cafe Services`;
};

// Apply the local logo immediately, before Firestore responds.
applyBranding();

try {
  onSnapshot(doc(db, 'settings', 'site'), snap => applyBranding(snap.exists() ? snap.data() : {}), () => applyBranding());
} catch (e) {
  console.warn('[Jangira E-Mitra] branding sync unavailable:', e);
  applyBranding();
}

// Home-only awareness hub.
if (document.body?.classList.contains('home-page')) {
  const script = document.createElement('script');
  script.src = new URL('./home-awareness.js?v=20260831', import.meta.url).href;
  script.defer = true;
  document.head.appendChild(script);
}
