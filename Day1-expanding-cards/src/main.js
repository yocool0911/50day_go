const bg_all = document.querySelectorAll('section');

bg_all.forEach( item =>{

    item.addEventListener('click',()=>{
        removeClass();
           item.classList.add('active');
    },false)


})

function removeClass(){
     bg_all.forEach(item=>{
        item.classList.remove('active');
     })
}