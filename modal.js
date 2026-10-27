// Modal compartido (guías y productos). Usa el elemento <dialog> nativo: Esc cierra, el foco queda dentro.
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const Modal=(()=>{
  let dlg,last,onClose;
  function build(){
    dlg=document.createElement('dialog');dlg.className='modal';dlg.setAttribute('aria-labelledby','m-title');
    dlg.innerHTML='<div class="mbox"><button class="mclose" type="button" aria-label="Cerrar">✕</button><div class="mbody"></div></div>';
    document.body.appendChild(dlg);
    dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
    dlg.querySelector('.mclose').addEventListener('click',()=>dlg.close());
    dlg.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(last&&last.focus)last.focus();if(onClose)onClose()});
  }
  return{
    open(html,opener,closeCb){
      if(!dlg)build();
      last=opener||null;onClose=closeCb||null;
      dlg.querySelector('.mbody').innerHTML=html;dlg.querySelector('.mbox').scrollTop=0;
      document.body.classList.add('modal-open');
      if(typeof dlg.showModal==='function')dlg.showModal();else dlg.setAttribute('open','');
    },
    close(){if(dlg&&dlg.open)dlg.close()}
  };
})();
const IG='https://www.instagram.com/deckpoint_tcg',TT='https://www.tiktok.com/@deckpoint_tcg';
