import {timeOfDay} from "./greeting.js";

let randomNum;
const body=document.querySelector('body');
const prevBtn=document.querySelector('.slide-prev');
const nextBtn=document.querySelector('.slide-next');
console.log(timeOfDay);

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  let getRandomNum=getRandom(1,20);
  //getRandomNum=String(getRandomNum).padStart(2, "0");



const getSlider= function(dist){
if(dist==='next'){
    getRandomNum++;
    if(getRandomNum>20) getRandomNum=1;
}else{
    getRandomNum--;
    if(getRandomNum<0) getRandomNum=20; 
}
setBg();
}

function setBg() {  
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${String(getRandomNum).padStart(2, "0")}.jpg`;
    img.addEventListener('load', ()=> {
        body.style.backgroundImage = `url(${img.src})`; 

      })
  }

prevBtn.addEventListener('click',()=>getSlider('prev'));
nextBtn.addEventListener('click',()=>getSlider('next'));
export default setBg;