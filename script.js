// Copy only the address when CA pill clicked
(function(){
  const pill = document.getElementById('caPill');
  const addressEl = pill.querySelector('.ca-addr');
  const getAddress = () => (pill.getAttribute('data-ca') || addressEl.textContent || '').trim();
  const copy = async () => {
    const addr = getAddress();
    try{
      if(navigator.clipboard && navigator.clipboard.writeText){
        await navigator.clipboard.writeText(addr);
      }else{
        const ta=document.createElement('textarea'); ta.value=addr;
        ta.style.position='fixed'; ta.style.left='-9999px'; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy'); ta.remove();
      }
    }catch(e){}
  };
  pill.addEventListener('click', copy);
  pill.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); copy(); }});
})();