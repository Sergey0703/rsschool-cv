const btnScale=document.querySelector('.progress');
const btnVolume=document.querySelector('.progress-small');
const btnFull=document.querySelector('#btn-fullscr');
const btnPlay=document.querySelector('.btn-play');
const btnPlaySmall=document.querySelector('#btn-play-small');
const btnMute=document.querySelector('#btn-volume');

const MAX_DURATION=1000;

let videoArr=["/assets/video/video1.mp4","/assets/video/video2.mp4","/assets/video/video3.mp4","/assets/video/video4.mp4"];
const video = document.querySelector('.viewer');
const videoContainer=document.querySelector('.video-container');
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
    
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      btnFull.classList.remove('btn-exit');
      btnFull.classList.add('btn-fullscr');
    }
  }
}
function scaleChange(){
      video.currentTime = video.duration * (btnScale.value / MAX_DURATION);
}

let videoProgress = () => {
  btnScale.value = Math.round(video.currentTime / video.duration * MAX_DURATION);
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
  vcontrols.classList.add('vcontrols_active');
  if(video.paused===true){
  btnPlay.classList.add('btn-play_active');
  }
  videoContainer.removeEventListener('mousemove', onActive);
  videoContainer.removeEventListener('touchmove', onActive);
  setTimeout(offActive, 3000);
}
let offActive = () => {
  vcontrols.classList.remove('vcontrols_active');

  btnPlay.classList.remove('btn-play_active');

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


btnPlaySmall.addEventListener('click',playPause);
  btnPlay.addEventListener('click',playBig);
  
  
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
