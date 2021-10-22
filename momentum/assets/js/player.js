import playList from "./playList.js";

let isPlay = false;
const playBtn=document.querySelector('#playBtn');
const audio=new Audio();
const ul=document.querySelector('.play-list');


playList.forEach(el=>{
    const li=document.createElement('li');
    li.classList.add('play-item');
    li.textContent=el.title;
    ul.append(li);
   console.log('li=',el.title);
});


function playAudio(){
    audio.src=playList[1].src;
if(!isPlay){
    isPlay=true;
    audio.currentTime=0;
    audio.play();
}else{
     isPlay=false;
     audio.pause();  
}
}

function toggleBtn() {
    console.log('tog');
    playBtn.classList.toggle('pause');
    playAudio();
  }
 

playBtn.addEventListener('click',toggleBtn);

export {toggleBtn};