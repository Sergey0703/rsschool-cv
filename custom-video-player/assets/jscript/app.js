const btnPlaySmall=document.querySelector('.btn-play-small');
const btnMute=document.querySelector('.btn-volume');
const btnVolume=document.querySelector('.progress-small');
const btnScale=document.querySelector('.progress');

const btnFull=document.querySelector('.btn-fullscr')


const video = document.querySelector('.viewer');
const videoContainer=document.querySelector('.video-container');




function playPause() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    if (method === 'play') {
        
        btnPlaySmall.classList.add('pause');
        console.log('ppppp');
      }
      if (method === 'pause') {
      
        btnPlaySmall.classList.remove('pause');
      }
  }

  
  function volumeChange(){
    let volume = btnVolume.value ;
    
    video.volume = volume;
  }


  function toggleFullScr() {
    if (!document.videoContainer) {
        videoContainer.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  function scaleChange(){
        video.currentTime = video.duration * (btnScale.value / 100);
  }

  let videoProgress = () => {
    btnScale.value = Math.round(video.currentTime / video.duration * 100);
  }
  function muteChange(){
      console.log('mute=',video.volume);
    if(video.volume == 0) {

        video.volume = btnVolume.value;
        btnMute.classList.remove('btn-mute');
       // muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_false');
        
        } else {
        btnMute.classList.add('btn-mute');
        video.volume = 0;
        
        //muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_true');
        
        }
  }

  btnPlaySmall.addEventListener('click',playPause);
  btnVolume.addEventListener('change',volumeChange);
  btnScale.addEventListener('change',scaleChange);
  video.addEventListener('timeupdate', videoProgress);
  
  btnMute.addEventListener('click',muteChange);
  btnFull.addEventListener('click', toggleFullScr);