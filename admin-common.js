import { auth } from "./js/firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
const ADMIN_EMAIL="zaynyt684@gmail.com";
export function requireAdmin(onReady){onAuthStateChanged(auth,user=>{if(user?.email?.toLowerCase()===ADMIN_EMAIL){onReady(user)}else{location.href="admin.html"}})}
export const $=id=>document.getElementById(id);
export function toast(message,type="ok"){const old=document.querySelector(".admin-toast");old?.remove();const el=document.createElement("div");el.className=`admin-toast ${type}`;el.textContent=message;document.body.appendChild(el);setTimeout(()=>el.remove(),3000)}
export function busy(button,loadingText="Saving..."){if(!button)return()=>{};const original=button.innerHTML;button.disabled=true;button.innerHTML=`<span class="spinner"></span>${loadingText}`;return()=>{button.disabled=false;button.innerHTML=original}}
