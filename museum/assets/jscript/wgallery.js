const wSliderButtonLeft=document.querySelector('.w-next-button');
const wSlider=document.querySelector('w-slider');
const wSliderItem=document.querySelector(".w-slider-item");
const containerWelcome=document.querySelector('.container-welcome');
const slider1=document.querySelector('.slider1');


document.querySelector('.menu-open').addEventListener('click', function(){
  document.querySelector('.menu-open span').classList.toggle('active');
  document.querySelector('#nav').classList.toggle('active');
  document.querySelector('.welcome-area').classList.toggle('passive');
})

const slidesCount=5;
let slideIndex=0;
let elW = document.getElementById('wSlider');



wSliderButtonLeft.addEventListener('click',()=>changeSlide('left'));
wSliderItem.addEventListener("transitionend",function(){
    let slideWidth=parseInt(window.getComputedStyle(elW).width); 
    if (slideIndex===slidesCount){
        slideIndex=0;
    }
           
      if(slideIndex<0){
        activeSlideIndex=slidesCount-1;
     }
     //   slideBar.style.transition=`none`;
     wSliderItem.style.transition=`none`;

      wSliderItem.style.transform=`translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
      //  mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;
       
});

function changeSlide(direction){
//console.log('left!');
//containerWelcome.classList.remove('vcontrols_active');
let slideWidth=parseInt(window.getComputedStyle(elW).width);
//let slideWidth=1000;

//console.log('w=',slideWidth);
if(direction==='left'){
    slideIndex++;
}else if(direction==='right'){
    slideIndex--;
}
wSliderItem.style.transition = 'transform .5s';
wSliderItem.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
}

export default changeSlide;
