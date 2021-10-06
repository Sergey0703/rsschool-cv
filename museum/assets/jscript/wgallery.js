const wSliderButtonLeft=document.querySelector('.w-next-button');
const wSliderButtonRight=document.querySelector('.w-prev-button');

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
let slideIndex=1;
let transit=false;
let elW = document.getElementById('wSlider');
let slideWidth=parseInt(window.getComputedStyle(elW).width);
wSliderItem.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;


wSliderButtonLeft.addEventListener('click',()=>changeSlide('left'));
wSliderButtonRight.addEventListener('click',()=>changeSlide('right'));
wSliderItem.addEventListener("transitionend",function(){
    let slideWidth=parseInt(window.getComputedStyle(elW).width); 
    console.log('transitioned=',slideIndex);
    if(slideIndex===0){
      slideIndex=slidesCount;
      console.log('slideIndex=slidesCount-1');
   }else if (slideIndex===slidesCount){
        slideIndex=0;
        console.log('slideIndex=0');
    }
           
     
     //   slideBar.style.transition=`none`;
     wSliderItem.style.transition=`none`;

      wSliderItem.style.transform=`translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
      transit=false;
      //  mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;
       
});

function changeSlide(direction){
if(transit===true) return;
  transit=true;
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
console.log('index=',slideIndex);
wSliderItem.style.transition = 'transform .5s';
wSliderItem.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
 //transit=false;
}

export default changeSlide;
