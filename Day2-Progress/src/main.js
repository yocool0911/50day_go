
const progress = document.querySelector('.progress');

//全部的圈圈
const circles = document.querySelectorAll('li');

//下一步按鈕
const next = document.querySelector('.next');
//上一步按鈕
const prev = document.querySelector('.prev');

// 設定當前圈選的進度 以判斷下一個圈選的位置
let currentActive = 1
next.addEventListener('click',()=>{
    currentActive++;
    //如果下一步到超過當前的長度時
    //避免選過頭 造成程式錯誤
    if(currentActive > circles.length){
       currentActive =  circles.length;
    }
    //執行渲染
      updata();
})

prev.addEventListener('click',()=>{
   currentActive--;
   //如果上一步到小過當前的長度時
   //避免選過頭 造成程式錯誤
   if(currentActive < 1){
      currentActive =  1;
   }
   //執行渲染
     updata();
})

//程式畫面渲染
function updata(){

    circles.forEach((item,key)=>{
         //currentActive 代表當前進度
         // 如果下一個key沒有大於進前進度就會增加選中
         if(key < currentActive){
            item.classList.add('active');
         }else{
            item.classList.remove('active');
         }
    })

//現在 選中的圈圈
//這個變數一定要放這裡 每當更新的時候才會重新渲染
const active = document.querySelectorAll('.active');
// 利用現有的選中的圈與全部圈的百分比 來當作當前進度條長度
let progress_now = (active.length-1) / (circles.length-1) *100 ;
// 進度條的寬度
progress.setAttribute('value',progress_now);

  if(currentActive == 1){
      prev.disabled = true
  }
   else if(currentActive ==  circles.length){
      next.disabled = true;
   }else{
      prev.disabled = false;
      next.disabled = false;
   }


}



updata();




