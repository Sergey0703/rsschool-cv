const btnBook=document.querySelector('.btn-amount-total');
const bookOverlay=document.querySelector('.book-overlay');
const slideIn=document.querySelector('#slide_in');
const bookClose=document.querySelector('.book-close');

btnBook.addEventListener('click',()=>initBooking());
bookOverlay.addEventListener('click',()=>closeBooking());
slideIn.addEventListener('click',()=>slideBooking());
bookClose.addEventListener('click',()=>closeBooking());

let slide=0;
const slideBooking=()=>{
   console.log('slideIn'); 
   slide=1;
}
const closeBooking=()=>{
    console.log('bClose');
    if(slide===0){
    bookOverlay.classList.remove('book-overlay-init');
    bookOverlay.classList.add('book-overlay-hide');
    }else{
    slide=0;
    }
}

const initBooking=()=>{
    console.log('bInit');

    bookOverlay.classList.remove('book-overlay-hide');
    bookOverlay.classList.add('book-overlay-init');
}

export default initBooking;