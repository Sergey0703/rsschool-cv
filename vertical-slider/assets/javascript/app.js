const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container=document.querySelector('.container');
const slideBar=document.querySelector('.left-slide');
const mainSlide = document.querySelector('.right-slide');
let height=container.clientHeight;
const slidesCount=4;
let activeSlideIndex=0;
let onMove=false;

container.addEventListener("transitionend",function(){
    
    if (activeSlideIndex===slidesCount){
        activeSlideIndex=0;
    }
           
    if(activeSlideIndex<0){
        activeSlideIndex=slidesCount-1;
    }
        slideBar.style.transition=`none`;
        mainSlide.style.transition=`none`;

        slideBar.style.transform=`translateY(${height*activeSlideIndex}px)`;
        mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;
       
      onMove=false;
})


slideBar.style.top=`-${(slidesCount)*100}vh`;
mainSlide.style.top=`-100vh`;
upBtn.addEventListener('click',()=>{
  changeSlide('up');
});
downBtn.addEventListener('click',()=>{
  changeSlide('down');
});

function changeSlide(direction){
    if (onMove){
        return;
    }else{
        onMove=true;
    }
   
if(direction==='up'){
    activeSlideIndex++;
    if(activeSlideIndex===slidesCount+1){
        activeSlideIndex=0;
    }

}else if(direction==='down'){
    activeSlideIndex--;
    
}

slideBar.style.transition=`transform 0.5s ease-in-out`;
mainSlide.style.transition=`transform 0.5s ease-in-out`;

slideBar.style.transform=`translateY(${height*activeSlideIndex}px)`;

if(activeSlideIndex<0){
    mainSlide.style.transform=`translateY(${height}px)`;
}else{
    mainSlide.style.transform=`translateY(-${height*activeSlideIndex}px)`;   
}

}

