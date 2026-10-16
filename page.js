(() => {
 const dialog=document.querySelector('#purchase-dialog');
 document.querySelectorAll('[data-buy]').forEach(b=>b.addEventListener('click',()=>dialog.showModal()));
 document.querySelectorAll('[data-dismiss]').forEach(b=>b.addEventListener('click',()=>dialog.close()));
 dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
 const categories=[...document.querySelectorAll('[data-atlas]')];
 categories.forEach(b=>b.addEventListener('click',()=>{
  const selected=b.classList.contains('is-active')?null:b.dataset.atlas;
  categories.forEach(c=>{const active=c.dataset.atlas===selected;c.classList.toggle('is-active',active);c.setAttribute('aria-pressed',String(active))});
  document.querySelectorAll('[data-column]').forEach(c=>c.classList.toggle('is-active',c.dataset.column===selected));
 }));
 categories.forEach(c=>c.setAttribute('aria-pressed','false'));
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
  if(!isIntersecting)return;
  target.animate([{transform:'translateY(16px)',opacity:.72},{transform:'translateY(0)',opacity:1}],{duration:650,easing:'cubic-bezier(.16,1,.3,1)'});
  observer.unobserve(target);
 }),{threshold:.12});
 document.querySelectorAll('.lead h2,.faculty-visual img,.thesis h2,.gift-image img,.price,.lab-identity>img').forEach(e=>observer.observe(e));
})();
