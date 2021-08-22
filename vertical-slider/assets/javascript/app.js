const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container=document.querySelector('.container');
const slideBar=document.querySelector('.left-slide');
const mainSlide = document.querySelector('.right-slide');
const slidesCount=mainSlide.querySelectorAll('div').length;
let activeSlideIndex=0;
const animationTime = 500;
//slideBar.style.top = `-100vh`
//mainSlide.style.top = `-200vh`


//sidebar.style.top=`-${slidesCount-1}vh`;
slideBar.style.top=`-${(slidesCount-1)*100}vh`;
upBtn.addEventListener('click',()=>{
  changeSlide('up');
});
downBtn.addEventListener('click',()=>{
  changeSlide('down');
});

function changeSlide(direction){
if(direction==='up'){
    activeSlideIndex++;
    if(activeSlideIndex===slidesCount){
        activeSlideIndex=0;
      }


}else if(direction==='down'){
    activeSlideIndex--;
    if(activeSlideIndex<0){
        activeSlideIndex=slidesCount-1;
    }
}
let height=container.clientHeight;
mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;
slideBar.style.transform=`translateY(${height*activeSlideIndex}px)`;

}

