import getQuotes from "./quotes.js";
import { setBg } from "./slider.js";
import getWeather from "./weather.js";
let radioPlus=document.querySelector('.radio-plus');
const inpName=document.querySelector('.name');
let lang;
let radioV='GitHub';
let radioVplus='TimeOfDay';

if (document.querySelector('input[name="radio"]')) {
    document.querySelectorAll('input[name="radio"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        radioV = event.target.value;
        setBg();
        setRadioPlus();
       // console.log(radio);
      });
    });
  }

  if (document.querySelector('input[name="radio-plus"]')) {
    document.querySelectorAll('input[name="radio-plus"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        radioVplus = event.target.value;
        setBg();
       // setRadioPlus();
       // console.log(radio);
      });
    });
  }

const langBtn=document.querySelector('#choose-lang-ru');
if(localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
   // console.log('storL=',lang);
    if(lang==='en'){
       
        inpName.placeholder="Enter your name";
        langBtn.textContent="Ру";
        langBtn.classList.remove('choose-lang');
        langBtn.classList.add('choose-lang-ru');
    }else{
      
        inpName.placeholder="Введите ваше имя";
        langBtn.textContent="En";
        langBtn.classList.remove('choose-lang-ru');
        langBtn.classList.add('choose-lang');
    }

}else{
    lang='en';
    console.log('NotstorL=',lang);
}  
   
   


function setRadioPlus(){
  //  console.log('setRadioPlus',radioV);
    if (radioV==='GitHub'){
        radioPlus.classList.remove('dispFlex');
        radioPlus.classList.add('dispNone');
    } else{
        radioPlus.classList.remove('dispNone');
        radioPlus.classList.add('dispFlex');
    }  
}

function chooseLang(){
    console.log('l==',lang);
    if(lang==='en'){
        lang='ru';
        inpName.placeholder="Введите ваше имя";
        langBtn.textContent="En";
        langBtn.classList.remove('choose-lang-ru');
        langBtn.classList.add('choose-lang');
    }else{
        lang='en';
        inpName.placeholder="Enter you name";
        langBtn.textContent="Ру";
        langBtn.classList.remove('choose-lang');
        langBtn.classList.add('choose-lang-ru');
    }
    console.log('lang=',lang);
    localStorage.setItem('lang', lang);
//langBtn.classList.toggle('choose-lang');


getQuotes();
getWeather();
}
//function chooseImg(){
  //  console.log('im=',radio);
  //  setBg();
//}

langBtn.addEventListener('click',chooseLang);
//radio.addEventListener('change',chooseImg);

function setLocalStorageCity() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('radioPlus', radioPlus);

    
  }
window.addEventListener('beforeunload', setLocalStorageCity);

export {chooseLang,lang,radioV,radioVplus};