let animImages=[];


  
    window.addEventListener('scroll', animGallery);

    function animGallery(){
       // console.log('scroll-',animImages);
       animImages=document.querySelectorAll('.gallery-img'); //.forEach((elem) => {
      //  console.log('scroll0011=',elem);
      //    });
        if(animImages.length > 0){
    //  console.log('scroll');
        for(let i = 0; i < animImages.length; i++){
            const animImage = animImages[i];
            const animImageHeight = animImage.offsetHeight;
            const animImageOffset = offset(animImage).top;
            const animStart = 6;

            let animImagePoint = window.innerHeight - animImageHeight / animStart;
            if(animImageHeight > window.innerHeight){
                animImagePoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animImageOffset - animImagePoint) && scrollY < (animImageOffset + animImageHeight)){
                animImage.classList.add('activeim');
            }
            else{
                animImage.classList.remove('activeim');
            }
        }
    }
}
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

export default animGallery;