import { db } from './firebase-config.js';
import { doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';

const applyBranding = (data = {}) => {
  const logo = data.logoUrl?.trim();
  document.querySelectorAll('[data-site-logo]').forEach(img => {
    if (logo) { img.src = logo; img.style.display = ''; }
    else { img.removeAttribute('src'); img.style.display = 'none'; }
  });
  if (logo) {
    let link = document.querySelector('link[data-site-favicon]');
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; link.dataset.siteFavicon = '1'; document.head.appendChild(link); }
    link.href = data.faviconUrl?.trim() || logo;
  }
  if (data.shopname) document.title = `${data.shopname} | Rajasthan E-Mitra & Cyber Cafe Services`;
};

onSnapshot(doc(db, 'settings', 'site'), snap => applyBranding(snap.exists() ? snap.data() : {}), () => {});
