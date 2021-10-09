const btnScale=document.querySelector('.progress');
const btnVolume=document.querySelector('.progress-small');
const btnFull=document.querySelector('.btn-fullscr');
const btnPlay=document.querySelector('.btn-play');
const btnPlaySmall=document.querySelector('.btn-play-small');
const btnMute=document.querySelector('.btn-volume');

const MAX_DURATION=1000;

let videoArr=["/assets/video/video1.mp4","/assets/video/video2.mp4","/assets/video/video3.mp4","/assets/video/video4.mp4"];
const video = document.querySelector('.viewer');
//const videoContainer=document.querySelector('.video-container');
let videoScr=0;

function playPause() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  if (method === 'play') {
      btnPlaySmall.classList.add('pause');
      btnPlay.classList.remove('btn-play-small');
    }
    if (method === 'pause') {
      btnPlaySmall.classList.remove('pause');
      btnPlay.classList.add('btn-play-small');
    }
}

function playBig() {
  
     btnPlaySmall.classList.add('pause');
     btnPlay.classList.remove('btn-play-active');
     video['play']();
     
 }

 function volumeChange(){
  let volume = btnVolume.value ;
  
  video.volume = volume;
  if(volume==0){
      btnMute.classList.add('btn-mute');
  }else{
      btnMute.classList.remove('btn-mute');
  }
}


function toggleFullScr() {
  
  if (!document.fullscreenElement) {
      videoContainer.requestFullscreen();
      btnFull.classList.add('btn-exit');
    
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      btnFull.classList.remove('btn-exit');
      
    }
  }
}
function scaleChange(){
      video.currentTime = video.duration * (btnScale.value / MAX_DURATION);
}

let videoProgress = () => {
  btnScale.value = Math.round(video.currentTime / video.duration * MAX_DURATION);
  //console.log('btnScale.value=',btnScale.value)
  //if(btnScale.value==MAX_DURATION){
   //   btnPlaySmall.classList.remove('pause');
   //}
}
function muteChange(){
    
  if(video.volume == 0) {
      video.volume = btnVolume.value;
      btnMute.classList.remove('btn-mute');
      } else {
      btnMute.classList.add('btn-mute');
      video.volume = 0;
      }
}

function videoEnd(){
  btnPlaySmall.classList.remove('pause');
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


btnPlaySmall.addEventListener('click',playPause);
  btnPlay.addEventListener('click',playBig);
  
  
  btnVolume.addEventListener('change',volumeChange);
  btnScale.addEventListener('change',scaleChange);
  video.addEventListener('timeupdate', videoProgress);
  video.addEventListener('ended', videoEnd);
  
  btnMute.addEventListener('click',muteChange);
  btnFull.addEventListener('click', toggleFullScr);
  //document.addEventListener('keydown', keyPress);
  //videoContainer.addEventListener('mousemove', onActive);
  //videoContainer.addEventListener('touchmove', onActive);
  //window.addEventListener('onfullscreenchange',onfullscreenchange);

export default videoProgress;
