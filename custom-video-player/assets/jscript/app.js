const btnPlaySmall=document.querySelector('.btn-play-small');
const btnNext=document.querySelector('.btn-rewind-next');
const btnPrev=document.querySelector('.btn-rewind-prev');
const btnMute=document.querySelector('.btn-volume');
const btnVolume=document.querySelector('.progress-small');
const btnScale=document.querySelector('.progress');

const btnFull=document.querySelector('.btn-fullscr')


const video = document.querySelector('.viewer');
const videoContainer=document.querySelector('.video-container');
let videoScr=0;
let videoArr=["/assets/video/video1.mp4","/assets/video/video2.mp4","/assets/video/video3.mp4"]



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
    if(volume==0){
        btnMute.classList.add('btn-mute');
    }else{
        btnMute.classList.remove('btn-mute');
    }
  }


  function toggleFullScr() {
    console.log('tog');
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen();
        btnFull.classList.add('btn-exit');
        console.log('add');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        btnFull.classList.remove('btn-exit');
        console.log('rem');
      }
    }
  }
  function scaleChange(){
        video.currentTime = video.duration * (btnScale.value / 1000);
  }

  let videoProgress = () => {
    btnScale.value = Math.round(video.currentTime / video.duration * 1000);
  }
  function muteChange(){
      //console.log('mute=',video.volume);
    if(video.volume == 0) {

        video.volume = btnVolume.value;
        btnMute.classList.remove('btn-mute');
     
        
        } else {
        btnMute.classList.add('btn-mute');
        video.volume = 0;
        }
  }

  let keyPress = (evt) => {
    evt.preventDefault()
    if (evt.code === 'Space') playPause();
    if (evt.code === 'KeyM') muteChange();
    if (evt.code === 'KeyF') toggleFullScr();
    
    if (evt.code === 'ArrowRight') {
      video.currentTime += 5;
    };
    if (evt.code === 'ArrowLeft') {
      video.currentTime -= 5;
    };
   
    
    if (evt.key === 'P' || (evt.key === 'Shift' && evt.key === 'p')) {
      togglePrevHandler();
    };
    if (evt.key === 'N' || (evt.key === 'Shift' && evt.key === 'n')) {
      toggleNextHandler();
    };
    
  }


  function nextVideo(){
    console.log('prev=',videoScr);
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
     btnPlaySmall.classList.remove('pause');
     if(modeV===false){
     playPause();
     }
   console.log('Next',videoScr);
  }

  function prevVideo(){
      console.log('prev=',videoScr);
      let modeV=video.paused;
    if(modeV === false){
   // playPause();
    video['pause']();
    }
   if (videoScr>=1){
      videoScr--;
    }else{
      videoScr=videoArr.length-1;  
   }
   video.src=videoArr[videoScr];
   btnPlaySmall.classList.remove('pause');
   console.log('modeV=',modeV);
   if(modeV===false){
    playPause();
    console.log('playPause');
   }
   
 console.log('Next',videoScr);
}


  btnPlaySmall.addEventListener('click',playPause);
  btnNext.addEventListener('click',nextVideo);
  btnPrev.addEventListener('click',prevVideo);
  btnVolume.addEventListener('change',volumeChange);
  btnScale.addEventListener('change',scaleChange);
  video.addEventListener('timeupdate', videoProgress);
  
  btnMute.addEventListener('click',muteChange);
  btnFull.addEventListener('click', toggleFullScr);
  document.addEventListener('keydown', keyPress);