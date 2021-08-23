const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container=document.querySelector('.container');
const slideBar=document.querySelector('.left-slide');
const mainSlide = document.querySelector('.right-slide');
const playButton= document.querySelector('.play-button');
const textPlayButton= document.querySelector('#play');

playButton.addEventListener('click', () => playSound());
const arrSound=['/assets/sounds/Tropics-sound.mp3','/assets/sounds/Sea-sound.mp3','/assets/sounds/River-sound.mp3','/assets/sounds/Waterfall-sound.mp3'];


let height=container.clientHeight;
const slidesCount=4;
let activeSlideIndex=0;
let onMove=false;

const audio = document.createElement('audio')
//audio.loop = true;
document.body.append(audio);
let play = false;

const playSound = () => {
    audio.src=arrSound[activeSlideIndex];
    play = !play
    if (play) {
        textPlayButton.className = 'fas fa-pause';
        audio.play();
        } else {
        textPlayButton.className  = 'fas fa-play';
        audio.pause();
        }
}

const onResize = () => {
    

    slideBar.style.transform = `translateY(-${activeSlideIndex*height}px)`
    mainSlide.style.transform = `translateY(${activeSlideIndex*height}px)`
}
window.addEventListener('resize', onResize)

container.addEventListener("transitionend",function(){
    
    if (activeSlideIndex===slidesCount){
        activeSlideIndex=0;
    }
           
    if(activeSlideIndex<0){
        activeSlideIndex=slidesCount-1;
    }
        slideBar.style.transition=`none`;
        mainSlide.style.transition=`none`;

        slideBar.style.transform=`translateY(${height*activeSlideIndex}px)`;
        mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;
       
      onMove=false;
     
      if(play){
       if(audio.paused){
        audio.src=arrSound[activeSlideIndex];
        audio.load();
        audio.play(); 
        }
      }
})


slideBar.style.top=`-${(slidesCount)*100}vh`;
mainSlide.style.top=`-100vh`;
upBtn.addEventListener('click',()=>{
  changeSlide('up');
});
downBtn.addEventListener('click',()=>{
  changeSlide('down');
});

function changeSlide(direction){
    if (onMove){
        return;
    }else{
        onMove=true;
    }
    if(play){
    audio.pause();
    }
  
if(direction==='up'){
    activeSlideIndex++;
    if(activeSlideIndex===slidesCount+1){
        activeSlideIndex=0;
    }

}else if(direction==='down'){
    activeSlideIndex--;
    
}

slideBar.style.transition=`transform 0.5s ease-in-out`;
mainSlide.style.transition=`transform 0.5s ease-in-out`;

slideBar.style.transform=`translateY(${height*activeSlideIndex}px)`;

if(activeSlideIndex<0){
    mainSlide.style.transform=`translateY(${height}px)`;
}else{
    mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;   
}

}

