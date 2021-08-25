const btnPlaySmall=document.querySelector('.btn-play-small');
const btnMute=document.querySelector('.btn-volume');
const btnVolume=document.querySelector('.progress-small');

const video = document.querySelector('.viewer');


btnPlaySmall.addEventListener('click',playPause);
btnVolume.addEventListener('change',volumeChange);
btnMute.addEventListener('click',muteChange);

function playPause() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  
  function volumeChange(){
    let volume = btnVolume.value / 100;
    
    video.volume = volume;
  }

  function muteChange(){
      console.log('mute');
    if(video.volume == 0) {

        video.volume = btnVolume.value / 100;
        
       // muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_false');
        
        } else {
        
        video.volume = 0;
        
        //muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_true');
        
        }
  }

