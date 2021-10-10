const btnBook=document.querySelector('.btn-amount-total');
const bookOverlay=document.querySelector('.book-overlay');
const slideIn=document.querySelector('#slide_in');
const bookClose=document.querySelector('.book-close');

const btnAmountDown1=document.querySelector('#btn-amount-down1');
const btnAmountDown2=document.querySelector('#btn-amount-down2');
const btnAmountUp1=document.querySelector('#btn-amount-up1');
const btnAmountUp2=document.querySelector('#btn-amount-up2');
//const radio1=document.querySelector('radio1');
//const radio2=document.querySelector('radio2');
//const radio3=document.querySelector('radio3');

if (document.querySelector('input[name="radio"]')) {
    document.querySelectorAll('input[name="radio"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        radioPrice = event.target.value;
        priceT();
        console.log(radioPrice);
      });
    });
  }

const radio=document.getElementById('radio');
let radioPrice=radio.value;

const input1=document.getElementById('input1');
const input2=document.getElementById('input2');
const sumT=document.getElementById('sumT');

 
 if (localStorage.getItem('input1') !== null) {input1.value=localStorage.getItem('input1')};
 if (localStorage.getItem('input2') !== null) {input2.value=localStorage.getItem('input2')};
 if (localStorage.getItem('sum') !== null) {sumT.value=localStorage.getItem('sum')};
 if (localStorage.getItem('radio') !== null) {radio.value=localStorage.getItem('radio')};

btnAmountDown1.addEventListener('click',()=>priceTicket('Down1'));
btnAmountDown2.addEventListener('click',()=>priceTicket('Down2'));
btnAmountUp1.addEventListener('click',()=>priceTicket('Up1'));
btnAmountUp2.addEventListener('click',()=>priceTicket('Up2'));

btnBook.addEventListener('click',()=>initBooking());
bookOverlay.addEventListener('click',()=>closeBooking());
slideIn.addEventListener('click',()=>slideBooking());
bookClose.addEventListener('click',()=>closeBooking());

//radio1.addEventListener('change',()=>priceT());
//radio2.addEventListener('change',()=>priceT());
//radio3.addEventListener('change',()=>priceT());

export const priceT=()=>{



let sum=Number(input1.value)*radioPrice+Number(input2.value)*radioPrice/2;
sumT.innerHTML=sum;
localStorage.setItem('input1', input1.value);
localStorage.setItem('input2', input2.value);
localStorage.setItem('radio', radio.value);
localStorage.setItem('priceT', sum);
}

const priceTicket=(nameButt)=>{
console.log('nameB=',nameButt);
if(nameButt=='Down1'){
    input1.value=Number(input1.value)-1;
    input1.value=input1.value<0?0:input1.value;
}else if(nameButt=='Up1'){
    input1.value=Number(input1.value)+1;
}else if(nameButt=='Down2'){
    input2.value=Number(input2.value)-1;
    input2.value=input2.value<0?0:input2.value;
}else if(nameButt=='Up2'){
    input2.value=Number(input2.value)+1;
   
}
priceT();


}


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