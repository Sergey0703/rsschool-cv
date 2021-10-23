import playList from "./playList.js";

let isPlay = false;
let numAudio=0;
const playBtn=document.querySelector('#playBtn');
const prevBtn=document.querySelector('.play-prev');
const nextBtn=document.querySelector('.play-next');

const ul=document.querySelector('.play-list');
const btnVolume=document.querySelector('.progress-small');
const btnScale=document.querySelector('.progress');
const btnMute=document.querySelector('.mute-volume');
const audioName=document.querySelector('.audio-name');


const MAX_DURATION=100;

const audio=new Audio();
audio.src=playList[0].src;
audioName.textContent=playList[0].title;

playList.forEach(el=>{
    const li=document.createElement('li');
    li.classList.add('play-item');
    li.textContent=el.title;
    ul.append(li);
   //console.log('li=',el.title);
});
const audioBtn=document.querySelectorAll('.play-item');

function playAudio(dist='null'){
    if(dist!=='null'){
    let liCh = document.querySelector(`.play-list li:nth-child(${numAudio+1})`);
    console.log('l0=',liCh);
    liCh.classList.remove('item-active');
    }
    if(dist==='next'){
        isPlay=false;
        numAudio++;
        if(numAudio>playList.length-1){
            numAudio=0;  
        }
    } else if(dist==='prev'){
        isPlay=false;
        numAudio--;
        if(numAudio<0){
            numAudio=playList.length-1;  
        }
     }
     console.log('numAudio=',numAudio);
    audio.src=playList[numAudio].src;
    audioName.textContent=playList[numAudio].title;
if(!isPlay){
    isPlay=true;
   // audio.currentTime=0;
    audio.play();
    playBtn.classList.add('pause');
    let liCh = document.querySelector(`.play-list li:nth-child(${numAudio+1})`);
    //console.log('l=',liCh);
    liCh.classList.add('item-active');
}else{
     isPlay=false;
     audio.pause(); 
     playBtn.classList.remove('pause'); 
}
}

function toggleBtn() {
    console.log('tog');
  //  playBtn.classList.toggle('pause');
    playAudio();
  }
  function volumeChange(){
    let volume = btnVolume.value ;
   // btnVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnVolume.value*100}%, #C4C4C4 ${btnVolume.value*100}%, #C4C4C4 100%)`;
    console.log('volum=', volume);
    audio.volume = volume;
    if(volume==0){
        btnMute.classList.remove('fa-volume-up');
        btnMute.classList.add('fa-volume-mute');
    }else{
        btnMute.classList.remove('fa-volume-mute');
        btnMute.classList.add('fa-volume-up');
    }
  }

  function scaleChange(){
   // audio.currentTime = Math.round(audio.duration * (btnScale.value /MAX_DURATION));
    audio.currentTime = btnScale.value;
    console.log('btnSc=',btnScale.value,' dur=',audio.duration, ' curT=', audio.currentTime);
}

/*let audioProgress = (prog=0) => {
    if(prog===0){
      btnScale.value=0;
    }else{
      btnScale.value = Math.round(audio.currentTime / audio.duration * MAX_DURATION);
    }
    console.log('btnScale.value=',btnScale.value);
    btnScale.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnScale.value}%, #C4C4C4 ${btnScale.value}%, #C4C4C4 100%)`;
}*/
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
}
function updateProgress(){
   btnScale.max=audio.duration;
   btnScale.value=audio.currentTime;
   document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(audio.currentTime)));

    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(audio.duration)));
    }
  // btnScale.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnScale.value}%, #C4C4C4 ${btnScale.value}%, #C4C4C4 100%)`;
}
function audioEnd(){
    //btnPlaySmall.classList.remove('pause');
    playAudio('next');
  }
 function muteChange(){
    if(audio.volume == 0) {
        audio.volume = btnVolume.value;
        btnMute.classList.remove('fa-volume-mute');
        btnMute.classList.add('fa-volume-up');
        //btnVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnVolume.value*100}%, #C4C4C4 ${btnVolume.value*100}%, #C4C4C4 100%)`;
        } else {
        btnMute.classList.remove('fa-volume-up');
        btnMute.classList.add('fa-volume-mute');
        audio.volume = 0;
       // btnVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnVolume.value*100}%, #C4C4C4 ${btnVolume.value*100}%, #C4C4C4 100%)`;
        }
 } 
 function playAudioItem(){
     console.log('pl');
 }
setInterval(updateProgress, 500);
playBtn.addEventListener('click',toggleBtn);
nextBtn.addEventListener('click',()=>playAudio('next'));
prevBtn.addEventListener('click',()=>playAudio('prev'));
btnVolume.addEventListener('change',volumeChange);
btnScale.addEventListener('change',scaleChange);
playList.forEach(el=>{
//el.addEventListener('click',playAudioItem);
});
//audio.addEventListener('timeupdate', audioProgress);
audio.addEventListener('ended', audioEnd);
  
btnMute.addEventListener('click',muteChange);

export {toggleBtn};