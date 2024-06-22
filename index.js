

let close = document.querySelector('.fa-close');

close.addEventListener('click', ()=>{
  let ad = document.querySelector('#ad');
  let myNav = document.querySelector('nav');
  ad.style.display = 'none';
  myNav.style.height =  '25%'
})
