const btnScale=document.querySelector('.progress');
const btnVolume=document.querySelector('.progress-small');
const btnFull=document.querySelector('#btn-fullscr');
const btnPlay=document.querySelector('.btn-play');
const btnPlaySmall=document.querySelector('#btn-play-small');
const btnMute=document.querySelector('#btn-volume');
const btnN=document.querySelector('.v-rstroke');
const btnP=document.querySelector('.v-lstroke');

const vSmallC1=document.querySelector('#v-small-c1');
const vSmallC2=document.querySelector('#v-small-c2');
const vSmallC3=document.querySelector('#v-small-c3');
const vSmallC4=document.querySelector('#v-small-c4');
const vSmallC5=document.querySelector('#v-small-c5');



//console.log('v=',vSmallC2);

 
const MAX_DURATION=1000;

let videoArr=["./assets/video/video0.mp4","./assets/video/video1.mp4","./assets/video/video2.mp4","./assets/video/video3.mp4","./assets/video/video4.mp4"];
let posterArr=["./assets/img/vposter0.jpg","./assets/img/vposter1.jpg","./assets/img/vposter2.jpg","./assets/img/vposter3.jpg","./assets/img/vposter4.jpg"];

const video = document.querySelector('.viewer');
const videoContainer=document.querySelector('.video-container');
const vScreen=document.querySelector('.vscreen_video');
let videoScr=0;

video.src=videoArr[videoScr];
video.poster=posterArr[videoScr];

function playPause() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  if (method === 'play') {
      btnPlaySmall.classList.add('pause');
      btnPlay.classList.remove('btn-play-active');
    }
    if (method === 'pause') {
      btnPlaySmall.classList.remove('pause');
      btnPlay.classList.add('btn-play-active');
    }
}

function playBig() {
  
     btnPlaySmall.classList.add('pause');
     btnPlay.classList.remove('btn-play-active');
     video['play']();
     
 }

 function volumeChange(){
  let volume = btnVolume.value ;
  btnVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnVolume.value*100}%, #C4C4C4 ${btnVolume.value*100}%, #C4C4C4 100%)`;
  console.log('volum=', volume);
  video.volume = volume;
  if(volume==0){
      btnMute.classList.remove('btn-volume');
      btnMute.classList.add('btn-mute');
  }else{
      btnMute.classList.remove('btn-mute');
      btnMute.classList.add('btn-volume');
  }
}


function toggleFullScr() {
  
  if (!document.fullscreenElement) {
      videoContainer.requestFullscreen();
      btnFull.classList.remove('btn-fullscr');
      btnFull.classList.add('btn-exit');
      vScreen.classList.add('vscreen_video_full');
    
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      btnFull.classList.remove('btn-exit');
      btnFull.classList.add('btn-fullscr');
      vScreen.classList.remove('vscreen_video_full');
    }
  }
}
function scaleChange(){
      video.currentTime = video.duration * (btnScale.value / MAX_DURATION);
}

let videoProgress = (prog=0) => {
  if(prog===0){
    btnScale.value=0;
  }else{
    btnScale.value = Math.round(video.currentTime / video.duration * MAX_DURATION);
  }
  
  btnScale.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnScale.value/10}%, #C4C4C4 ${btnScale.value/10}%, #C4C4C4 100%)`;
  //console.log('btnScale.value=',btnScale.value)
  //if(btnScale.value==MAX_DURATION){
   //   btnPlaySmall.classList.remove('pause');
   //}
}
function muteChange(){
    
  if(video.volume == 0) {
      video.volume = btnVolume.value;
      btnMute.classList.remove('btn-mute');
      btnMute.classList.add('btn-volume');
      //btnVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnVolume.value*100}%, #C4C4C4 ${btnVolume.value*100}%, #C4C4C4 100%)`;
      } else {
      btnMute.classList.remove('btn-volume');
      btnMute.classList.add('btn-mute');
      video.volume = 0;
     // btnVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnVolume.value*100}%, #C4C4C4 ${btnVolume.value*100}%, #C4C4C4 100%)`;
      }
     // btnVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${btnVolume.value*100}%, #C4C4C4 ${btnVolume.value*100}%, #C4C4C4 100%)`;
}


function nextVideo(){
  console.log('next=',videoScr);
  let modeV=video.paused;
  if(modeV === false){
      // playPause();
    video['pause']();
    }
   if (videoScr<videoArr.length-1){
      videoScr++;
    }else{
      videoScr=0;  
   }
   video.src=videoArr[videoScr];
   video.poster=posterArr[videoScr];
   btnPlaySmall.classList.remove('pause');
   if(modeV===false){
   playPause();
   }
  }

function prevVideo(){
    console.log('prev=',videoScr);
    let modeV=video.paused;
  if(modeV === false){
     video['pause']();
  }
 if (videoScr>=1){
    videoScr--;
  }else{
    videoScr=videoArr.length-1;  
 }
 video.src=videoArr[videoScr];
 video.poster=posterArr[videoScr];
 btnPlaySmall.classList.remove('pause');
 //console.log('modeV=',modeV);
 if(modeV===false){
  playPause();
  }

}

function changeVideo(direction,sl=null){
  console.log('dir=',direction,' sl=',sl);
  if(sl===videoScr&&sl!==null) return;

  
  let vB=`v-small-c${videoScr+1}`;
  console.log('vB=',vB);
  window[vB].classList.remove('v-small-contrl-f');
  let modeV=video.paused;
  if(modeV === false){
      // playPause();
    video['pause']();
    }
   if(direction==='next'){ 
   if (videoScr<videoArr.length-1){
      videoScr++;
    }else{
      videoScr=0;  
   }
  }else if(direction==='prev'){
    if (videoScr>=1){
      videoScr--;
    }else{
      videoScr=videoArr.length-1;  
   }
  }else{
    videoScr=sl;
  }
  let vF=`v-small-c${videoScr+1}`;
  console.log('vF=',vF);
  window[vF].classList.add('v-small-contrl-f');

   video.src=videoArr[videoScr];
   video.poster=posterArr[videoScr];
   btnPlaySmall.classList.remove('pause');
   //videoProgress(0);
   if(modeV===false){
   //playPause();
   }
   videoProgress(0);
   video['pause']();
}

function videoEnd(){
  btnPlaySmall.classList.remove('pause');
}

let keyPress = (evt) => {
  evt.preventDefault()
  if (evt.code === 'Space') playPause();
  if (evt.code === 'KeyM') muteChange();
  if (evt.code === 'KeyF') toggleFullScr();
  
  if (evt.code === 'ArrowRight') {
    video.currentTime += 10;
  };
  if (evt.code === 'ArrowLeft') {
    video.currentTime -= 10;
  };
  //console.log();
  if (evt.key === 'P' || (evt.key === 'Shift' && evt.key === 'p')) {
   // prevVideo();
  };
  if (evt.key === 'N' || (evt.key === 'Shift' && evt.key === 'n')) {
   // nextVideo();
  };
  
}

let onActive = () => {
 // vcontrols.classList.add('vcontrols_active');
  if(video.paused===true){
 // btnPlay.classList.add('btn-play-active');
  }
  videoContainer.removeEventListener('mousemove', onActive);
  videoContainer.removeEventListener('touchmove', onActive);
  setTimeout(offActive, 3000);
}
let offActive = () => {
 // vcontrols.classList.remove('vcontrols_active');

 // btnPlay.classList.remove('btn-play-active');

  videoContainer.addEventListener('mousemove', onActive);
  videoContainer.addEventListener('touchmove', onActive);
}


/*let setVideoProgress =  function (){
  let value=this.value;
this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
}
let setVolume =  function (){
  let value=this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  }
  */
  vSmallC1.addEventListener('click',()=>changeVideo('not',0));
  vSmallC2.addEventListener('click',()=>changeVideo('not',1));
  vSmallC3.addEventListener('click',()=>changeVideo('not',2));
  vSmallC4.addEventListener('click',()=>changeVideo('not',3));
  vSmallC5.addEventListener('click',()=>changeVideo('not',4));

  btnPlaySmall.addEventListener('click',playPause);
  btnPlay.addEventListener('click',playBig);
  
  btnN.addEventListener('click',()=>changeVideo('next',null));
  btnP.addEventListener('click',()=>changeVideo('prev',null));
  
  btnVolume.addEventListener('change',volumeChange);
  btnScale.addEventListener('change',scaleChange);
  video.addEventListener('timeupdate', videoProgress);
  video.addEventListener('ended', videoEnd);
  
  btnMute.addEventListener('click',muteChange);
  btnFull.addEventListener('click', toggleFullScr);
  document.addEventListener('keydown', keyPress);
  videoContainer.addEventListener('mousemove', onActive);
  videoContainer.addEventListener('touchmove', onActive);
  //window.addEventListener('onfullscreenchange',onfullscreenchange);

export default videoProgress;
