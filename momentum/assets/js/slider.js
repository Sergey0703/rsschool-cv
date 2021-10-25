import {timeOfDay,getTimeOfDay} from "./greeting.js";
import {radioV} from './tweak.js';

let randomNum;
const body=document.querySelector('body');
const prevBtn=document.querySelector('.slide-prev');
const nextBtn=document.querySelector('.slide-next');
let setBgIm=false;
//let radio=document.querySelector('#radio');
//console.log('tt=',getTimeOfDay());

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  randomNum=getRandom(1,20);
  //getRandomNum=String(getRandomNum).padStart(2, "0");



const getSlider= function(dist){
    if(setBgIm===true) return;
if(dist==='next'){
    randomNum++;
    if(randomNum>20) randomNum=1;
}else{
    randomNum--;
    if(randomNum<0) randomNum=20; 
}
//setBg('slider');

setBg();
}

async function setBg() {  
    setBgIm=true;
    const img = new Image();
    console.log('radio=',radioV);
    if (radioV==='GitHub'){
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${String(randomNum).padStart(2, "0")}.jpg`;
    }else if(radioV==='UnSplash'){
        const url = `https://api.unsplash.com/photos/random?query=${getTimeOfDay()}&client_id=D_7YNYfiG-mfgYe7FBSkQM5ImcOGy9uoGbHCHZIBwdk`;
        const res = await fetch(url);
        const data=await res.json();
        console.log(data.urls.regular); 
        img.src = data.urls.regular;
    }else if(radioV==='Flickr'){
        console.log('fff');
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3c365b91f9560c51f0f0ffe69eeb4f1f&tags=${getTimeOfDay()}&extras=url_l&format=json&nojsoncallback=1`;
        const res = await fetch(url);
        const data=await res.json();
        console.log('data=',data); 
        console.log(data.photos.photo[randomNum]); 
        img.src = data.photos.photo[randomNum].url_l;
    }

    img.addEventListener('load', ()=> {
        body.style.backgroundImage = `url(${img.src})`; 

      })
      setBgIm=false;
  }

  
prevBtn.addEventListener('click',()=>getSlider('prev'));
nextBtn.addEventListener('click',()=>getSlider('next'));
export { getRandom, setBg};
