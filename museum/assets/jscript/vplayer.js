const progress=document.querySelector('.progress');
const btnVolume=document.querySelector('.progress-small');
//progress.addEventListener('change',setVideoProgress);

//const video = document.querySelector('.viewer');

let setVideoProgress =  function (){
let value=this.value;
//console.log('v=',value);
this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
//document.documentElement.style.setProperty('--progress-position', (value) + '%');
}
//let setVolume = (value) => document.documentElement.style.setProperty('--volume-position', (value) + '%')
let setVolume =  function (){
  let value=this.value;
 // console.log('v=',value);
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  //document.documentElement.style.setProperty('--progress-position', (value) + '%');
  }
progress.addEventListener('change',setVideoProgress);
btnVolume.addEventListener('change',setVolume);
/*
function volumeChange(){
    let volume = btnVolume.value ;
    console.log('v=',volume);
    var newStyles = document.createElement('style')
//document.head.append(newStyles)
//newStyles.innerHTML = ".ps-bg2 {" +
 // "background: " + "linear-gradient(to right, #710707 0%, #710707 90%, #fff 90%, #fff 100%)"; +
 // "}"
  //  btnVolume.classList.remove('ps-bg');
  //  btnVolume.classList.add('ps-bg2');

    //btnVolume.style.background=`"linear-gradient(to right, #710707 0%, #710707 90%, #fff 90%, #fff 100%)";`;
    //video.volume = volume;
    /*if(volume==0){
        btnMute.classList.add('btn-mute');
    }else{
        btnMute.classList.remove('btn-mute');
    }
    
  }
  */

export default setVideoProgress;
