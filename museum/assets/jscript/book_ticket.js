const btnBook=document.querySelector('.btn-amount-total');
const bookOverlay=document.querySelector('.book-overlay');
const slideIn=document.querySelector('#slide_in');
const bookClose=document.querySelector('.book-close');

const btnAmountDown1=document.querySelector('#btn-amount-down1');
const btnAmountDown2=document.querySelector('#btn-amount-down2');
const btnAmountUp1=document.querySelector('#btn-amount-up1');
const btnAmountUp2=document.querySelector('#btn-amount-up2');


const btnAmountDown1B=document.querySelector('#b-btn-amount-down1');
const btnAmountDown2B=document.querySelector('#b-btn-amount-down2');
const btnAmountUp1B=document.querySelector('#b-btn-amount-up1');
const btnAmountUp2B=document.querySelector('#b-btn-amount-up2');
//const radio1=document.querySelector('radio1');
//const radio2=document.querySelector('radio2');
//const radio3=document.querySelector('radio3');
const input1B=document.getElementById('binput1');
const input2B=document.getElementById('binput2');
const sumTb=document.getElementById('sumTb');
//const quantB1=document.getElementById('row-span1::before');


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
const bookTicketType=document.getElementById('bookTicketType');

let selectPrice=bookTicketType.value;

const input1=document.getElementById('input1');
const input2=document.getElementById('input2');
const sumT=document.getElementById('sumT');
const sumTb1=document.getElementById('sumTb1');
const sumTb2=document.getElementById('sumTb2');



 
 if (localStorage.getItem('input1') !== null) {input1.value=localStorage.getItem('input1')};
 if (localStorage.getItem('input2') !== null) {input2.value=localStorage.getItem('input2')};
 if (localStorage.getItem('sum') !== null) {sumT.value=localStorage.getItem('sum')};
 if (localStorage.getItem('radio') !== null) {radio.value=localStorage.getItem('radio')};

btnAmountDown1.addEventListener('click',()=>priceTicket('Down1'));
btnAmountDown2.addEventListener('click',()=>priceTicket('Down2'));
btnAmountUp1.addEventListener('click',()=>priceTicket('Up1'));
btnAmountUp2.addEventListener('click',()=>priceTicket('Up2'));

btnAmountDown1B.addEventListener('click',()=>priceTicketB('Down1'));
btnAmountDown2B.addEventListener('click',()=>priceTicketB('Down2'));
btnAmountUp1B.addEventListener('click',()=>priceTicketB('Up1'));
btnAmountUp2B.addEventListener('click',()=>priceTicketB('Up2'));


btnBook.addEventListener('click',()=>initBooking());
bookOverlay.addEventListener('click',()=>closeBooking());
slideIn.addEventListener('click',()=>slideBooking());
bookClose.addEventListener('click',()=>closeBooking());
bookTicketType.addEventListener('click',()=>priceTicketB('Type'));



//radio1.addEventListener('change',()=>priceT());
//radio2.addEventListener('change',()=>priceT());
//radio3.addEventListener('change',()=>priceT());


export const priceT=()=>{
let sum=Number(input1.value)*radioPrice+Number(input2.value)*radioPrice/2;
sumT.innerHTML=` € ${sum} `;
sumTb.innerHTML=`${sum} €`;
sumTb1.innerHTML=`${Number(input1.value)*radioPrice} €`;
sumTb2.innerHTML=`${Number(input2.value)*radioPrice/2} €`;
//row-span::before.content="10";

//if(radioPrice===20){
    bookTicketType.value=radioPrice;
//}
localStorage.setItem('input1', input1.value);
localStorage.setItem('input2', input2.value);
localStorage.setItem('radio', radio.value);
localStorage.setItem('priceT', sum);
}

export const priceTb=()=>{
    let sum=Number(input1B.value)*selectPrice+Number(input2B.value)*selectPrice/2;
    sumT.innerHTML=` € ${sum} `;
    sumTb.innerHTML=`${sum} €`;
    sumTb1.innerHTML=`${Number(input1B.value)*selectPrice} €`;
    sumTb2.innerHTML=`${Number(input2B.value)*selectPrice/2} €`;
    //row-span::before.content="10";
    
    //if(radioPrice===20){
        bookTicketType.value=radioPrice;
    //}
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

const priceTicketB=(nameButt)=>{
    console.log('nameB=',nameButt);
    if(nameButt=='Down1'){
        input1B.value=Number(input1B.value)-1;
        input1B.value=input1B.value<0?0:input1B.value;
    }else if(nameButt=='Up1'){
        input1B.value=Number(input1B.value)+1;
    }else if(nameButt=='Down2'){
        input2B.value=Number(input2B.value)-1;
        input2B.value=input2B.value<0?0:input2B.value;
    }else if(nameButt=='Up2'){
        input2B.value=Number(input2B.value)+1;
       
    }
    priceTb();
    
    
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

    input1B.value=input1.value;
    input2B.value=input2.value;
    let pr=radio.value;
    console.log('pr=',pr);
    if(pr===20){
       
    }
   
}

export default initBooking;