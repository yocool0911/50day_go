const menu01 = document.querySelector('.menu01');
const menu02 = document.querySelector('.menu02');
const wrap  = document.querySelector('.wrap');
const nav  = document.querySelector('nav');

menu01.addEventListener('click',(e)=>{
    e.target.classList.add('show');
    menu02.classList.add('show');
    wrap.classList.add('show');
    nav.classList.add('show');
})

menu02.addEventListener('click',(e)=>{
    e.target.classList.remove('show');
    menu01.classList.remove('show');
    wrap.classList.remove('show');
    nav.classList.remove('show');
})