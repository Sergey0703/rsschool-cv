const btnPlaySmall=document.querySelector('.btn-play-small');
const btnNext=document.querySelector('.btn-rewind-next');
const btnPrev=document.querySelector('.btn-rewind-prev');
const btnMute=document.querySelector('.btn-volume');
const btnVolume=document.querySelector('.progress-small');
const btnScale=document.querySelector('.progress');
const btnFull=document.querySelector('.btn-fullscr');
const MAX_DURATION=1000;

const video = document.querySelector('.viewer');
const videoContainer=document.querySelector('.video-container');
let videoScr=0;
let videoArr=["/assets/video/video1.mp4","/assets/video/video2.mp4","/assets/video/video3.mp4","/assets/video/video4.mp4"];
let posterArr=["/assets/img/vposter1.jpg","/assets/img/vposter2.jpg","/assets/img/vposter3.jpg","/assets/img/vposter4.jpg"];


function playPause() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    if (method === 'play') {
        btnPlaySmall.classList.add('pause');
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
    if(btnScale.value==MAX_DURATION){
        btnPlaySmall.classList.remove('pause');
        //console.log('btnScale.value2=',btnScale.value)
    }
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
   
    if (evt.key === 'P' || (evt.key === 'Shift' && evt.key === 'p')) {
      prevVideo();
    };
    if (evt.key === 'N' || (evt.key === 'Shift' && evt.key === 'n')) {
      nextVideo();
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


  btnPlaySmall.addEventListener('click',playPause);
  btnNext.addEventListener('click',nextVideo);
  btnPrev.addEventListener('click',prevVideo);
  btnVolume.addEventListener('change',volumeChange);
  btnScale.addEventListener('change',scaleChange);
  video.addEventListener('timeupdate', videoProgress);
  
  btnMute.addEventListener('click',muteChange);
  btnFull.addEventListener('click', toggleFullScr);
  document.addEventListener('keydown', keyPress);