const wSliderButtonLeft=document.querySelector('.w-next-button');
const wSliderButtonRight=document.querySelector('.w-prev-button');
const quad1=document.querySelector('#quad1');
const quad2=document.querySelector('#quad2');
const quad3=document.querySelector('#quad3');
const quad4=document.querySelector('#quad4');
const quad5=document.querySelector('#quad5');


const wSlider=document.querySelector('w-slider');
const wSliderItem=document.querySelector(".w-slider-item");
const containerWelcome=document.querySelector('.container-welcome');
const slider1=document.querySelector('.slider1');


document.querySelector('.menu-open').addEventListener('click', function(){
  document.querySelector('.menu-open span').classList.toggle('active');
  document.querySelector('#nav').classList.toggle('active');
  document.querySelector('.welcome-area').classList.toggle('passive');
})

function tick(){
transit=false;
}

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
    wSliderItem.style.transition=`none`;

    if(slideIndex===slidesCount+1){
      slideIndex=1;
      console.log('slideIndex=1');
     }
    if (slideIndex===0){
        slideIndex=slidesCount;
        console.log('slideIndex=slidesCount-1');
       // wSliderItem.style.transform=`translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    }
           
     
     //   slideBar.style.transition=`none`;
     
      
     wSliderItem.style.transform=`translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
     console.log('str=',-slideIndex * slideWidth);
      setTimeout(tick, 200);
    
      //  mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;
       
});

function changeSlide(direction){
if(transit===true) return;
  transit=true;
//console.log('left!');
//containerWelcome.classList.remove('vcontrols_active');
let slideWidth=parseInt(window.getComputedStyle(elW).width);
//let slideWidth=1000;

console.log('ind=',slideIndex);

//window[`quad${oldInd}`].classList.remove('quad-g');
let oldInd=slideIndex===0?slidesCount:slideIndex;
let oldQ=`quad${oldInd}`;
//window[oldQ].classList.remove('quad-g');

if(direction==='left'){
    slideIndex++;
  //  if(slideIndex===slidesCount+1){
  //    slideIndex=0;
  //    console.log('obnul');
  //}
}else if(direction==='right'){
    slideIndex--;
}
console.log('index=',slideIndex);
let qIndex=0; //slideIndex===0?slidesCount:slideIndex;
console.log('qIndex=',qIndex);
 //   qIndex=slideIndex===-1?slidesCount:slideIndex;
 if(slideIndex===0){
  qIndex=slidesCount;
 }else if(slideIndex<0){
  qIndex=slidesCount;
 // slideIndex=5;
  //wSliderItem.style.transition=`none`;
  //wSliderItem.style.transform=`translate3d(${slideWidth}px, 0px, 0px)`;
 }else{
   qIndex=slideIndex;
 }

let wQuad=`quad${qIndex}`;
//      console.log('w=',wQuad);
//window[wQuad].classList.add('quad-g');

if(slideIndex<0){
  console.log('=<',slideIndex);
  //wSliderItem.style.transition=`none`;
  //wSliderItem.style.transform = `translate3d(-${5 *slideWidth}px, 0px, 0px)`; 
  wSliderItem.style.transition = 'transform .3s';
  wSliderItem.style.transform = `translate3d(${slideWidth}px, 0px, 0px)`; 
}else{
  console.log('=>');
  //mainSlide.style.transition=`transform 0.5s ease-in-out`;
  //mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`; 
    wSliderItem.style.transition = 'transform .3s';
    wSliderItem.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
}
 //transit=false;
}

export default changeSlide;
