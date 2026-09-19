const CONFIG={DISCORD_URL:"",COFFEE_URL:""};
const modal=document.getElementById("modal"), title=document.getElementById("modal-title"), text=document.getElementById("modal-text"), eyebrow=document.getElementById("modal-eyebrow");
document.getElementById("year").textContent=new Date().getFullYear();
function openModal(kind){
  const configured=kind==="discord"?CONFIG.DISCORD_URL:CONFIG.COFFEE_URL;
  if(configured){window.open(configured,"_blank","noopener,noreferrer");return}
  eyebrow.textContent=kind==="discord"?"Atlas community":"Support Atlas FS";
  title.textContent=kind==="discord"?"Discord is coming soon.":"Support is coming soon.";
  text.textContent=kind==="discord"?"The official Atlas FS Discord invite has not been configured yet. The simulator is still at the beginning of development.":"The Atlas FS Buy Me a Coffee page has not been configured yet. This support option will be enabled when the page is ready.";
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}
document.querySelectorAll("[data-action]").forEach(button=>button.addEventListener("click",()=>openModal(button.dataset.action)));
document.querySelectorAll("[data-close-modal]").forEach(el=>el.addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}});
