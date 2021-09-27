const progress=document.querySelector('.progress');
const btnVolume=document.querySelector('.progress-small');
//progress.addEventListener('change',scaleChange);
btnVolume.addEventListener('change',volumeChange);
const video = document.querySelector('.viewer');

function volumeChange(){
    let volume = btnVolume.value ;
    console.log('v=',volume);
    var newStyles = document.createElement('style')
//document.head.append(newStyles)
newStyles.innerHTML = ".ps-bg2 {" +
  "background: " + "linear-gradient(to right, #710707 0%, #710707 90%, #fff 90%, #fff 100%)"; +
  "}"
  //  btnVolume.classList.remove('ps-bg');
  //  btnVolume.classList.add('ps-bg2');

    //btnVolume.style.background=`"linear-gradient(to right, #710707 0%, #710707 90%, #fff 90%, #fff 100%)";`;
    //video.volume = volume;
    /*if(volume==0){
        btnMute.classList.add('btn-mute');
    }else{
        btnMute.classList.remove('btn-mute');
    }
    */
  }

export default volumeChange;
