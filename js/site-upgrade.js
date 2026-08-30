const STYLE_ID='jeSiteUpgrade';
const CSS=`
:root{--je-accent:#ff8a00;--je-ink:#111114;--je-muted:#6f7075;--je-line:#e6e6e9;--je-surface:#fff;--je-soft:#f7f7f8}
body{background:var(--je-soft)}
main{animation:jePageIn .45s ease both}
.page-hero{position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.06)!important}
.page-hero:after{content:"";position:absolute;width:220px;height:220px;right:-100px;top:-100px;border:1px solid rgba(255,138,0,.18);border-radius:50%;pointer-events:none}
.page-hero>*{position:relative;z-index:1}
.service-toolbar{position:sticky;top:88px;z-index:20;padding:8px;background:rgba(247,247,248,.88);backdrop-filter:blur(12px);border:1px solid var(--je-line);border-radius:14px;box-shadow:0 8px 24px rgba(17,17,20,.05)}
.service-toolbar input,.service-toolbar select{transition:.2s ease!important}.service-toolbar input:focus,.service-toolbar select:focus{box-shadow:0 0 0 3px rgba(255,138,0,.1)!important}
.service-card,.empty,.notice-box,.info-card,.step,.form-card,.download-card,.link-card,.document-card,.contact-card{transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.service-card:hover,.form-card:hover,.download-card:hover,.link-card:hover,.document-card:hover,.contact-card:hover{transform:translateY(-4px);box-shadow:0 15px 36px rgba(17,17,20,.09);border-color:#ffc980}
.btn{position:relative;overflow:hidden}.btn:after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.25),transparent 65%);transform:translateX(-120%);transition:.55s ease}.btn:hover:after{transform:translateX(120%)}
.site-footer{margin-top:20px}.footer-links a{transition:.2s ease}.footer-links a:hover{transform:translateX(3px)}
@keyframes jePageIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@media(max-width:760px){.service-toolbar{position:relative;top:auto}.page-hero{padding-left:12px;padding-right:12px}.service-card:hover,.form-card:hover,.download-card:hover,.link-card:hover,.document-card:hover,.contact-card:hover{transform:translateY(-2px)}}
@media(prefers-reduced-motion:reduce){main{animation:none}.service-card,.form-card,.download-card,.link-card,.document-card,.contact-card,.btn,.footer-links a{transition:none!important}.btn:after{display:none}}
`;
function load(){if(document.getElementById(STYLE_ID))return;const s=document.createElement('style');s.id=STYLE_ID;s.textContent=CSS;document.head.appendChild(s);document.documentElement.classList.add('je-upgraded')}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',load,{once:true});else load();
