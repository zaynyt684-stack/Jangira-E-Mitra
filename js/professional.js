document.addEventListener('DOMContentLoaded',()=>{
 const main=document.querySelector('main'); if(!main)return;
 const hero=document.querySelector('.hero');
 if(!document.querySelector('.je-tools')){
  const tools=document.createElement('section');tools.className='je-tools';
  tools.innerHTML='<div class="container"><div class="je-tools-grid"><a class="je-tool" href="services.html"><span class="je-tool-icon">S</span><span><strong>सेवाएं खोजें</strong><span>सभी उपलब्ध सेवाएं</span></span></a><a class="je-tool" href="documents.html"><span class="je-tool-icon">D</span><span><strong>दस्तावेज चेकलिस्ट</strong><span>क्या-क्या लगेगा देखें</span></span></a><a class="je-tool" href="forms.html"><span class="je-tool-icon">F</span><span><strong>ऑफलाइन फॉर्म</strong><span>फॉर्म और डाउनलोड</span></span></a><a class="je-tool" href="links.html"><span class="je-tool-icon">O</span><span><strong>ऑनलाइन सेवाएं</strong><span>Official portals</span></span></a></div></div></section>';
  if(hero)hero.insertAdjacentElement('afterend',tools);else main.prepend(tools);
 }
 if(!document.querySelector('.je-trust')){
  const trust=document.createElement('section');trust.className='je-trust';
  trust.innerHTML='<div class="container"><div class="je-trust-row"><div class="je-trust-item"><i class="je-status"></i><span><strong>Digital Services</strong> • जानकारी एक जगह</span></div><div class="je-trust-item"><span><strong>Easy Access</strong> • Mobile friendly</span></div><div class="je-trust-item"><span><strong>WhatsApp Support</strong> • Direct chat</span></div><div class="je-trust-item"><span><strong>Updated Info</strong> • Admin controlled</span></div></div></div>';
  const services=main.querySelector('.services-section');if(services)services.insertAdjacentElement('afterend',trust);else main.append(trust);
 }
 if(!document.querySelector('.je-backtop')){
  const btn=document.createElement('button');btn.className='je-backtop';btn.type='button';btn.setAttribute('aria-label','Back to top');btn.textContent='↑';document.body.append(btn);
  const sync=()=>btn.classList.toggle('show',window.scrollY>500);window.addEventListener('scroll',sync,{passive:true});sync();btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
 }
});