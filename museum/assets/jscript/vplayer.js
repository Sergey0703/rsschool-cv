const progress=document.querySelector('.progress');
const btnVolume=document.querySelector('.progress-small');
const btnFull=document.querySelector('.btn-fullscr');
const btnPlay=document.querySelector('.btn-play');
const btnPlaySmall=document.querySelector('.btn-play-small');
const btnMute=document.querySelector('.btn-volume');

const MAX_DURATION=1000;

const video = document.querySelector('.viewer');
const videoContainer=document.querySelector('.video-container');
let videoScr=0;







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

export default setVideoProgress;
