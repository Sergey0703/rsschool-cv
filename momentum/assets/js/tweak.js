import getQuotes from "./quotes.js";
import { setBg } from "./slider.js";
import getWeather from "./weather.js";
let radioPlus=document.querySelector('.radio-plus');
const inpName=document.querySelector('.name');
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
let lang='en';

function setRadioPlus(){
    console.log('setRadioPlus',radioV);
    if (radioV==='GitHub'){
        radioPlus.classList.remove('dispFlex');
        radioPlus.classList.add('dispNone');
    } else{
        radioPlus.classList.remove('dispNone');
        radioPlus.classList.add('dispFlex');
    }  
}

function chooseLang(){
    if(lang==='en'){
        lang='ru';
        inpName.placeholder="Введите ваше имя";
        langBtn.textContent="En";
    }else{
        lang='en';
        inpName.placeholder="Enter you name";
        langBtn.textContent="Ру";
    }
    console.log('lang=',lang);
langBtn.classList.toggle('choose-lang');


getQuotes(lang);
getWeather();
}
//function chooseImg(){
  //  console.log('im=',radio);
  //  setBg();
//}

langBtn.addEventListener('click',chooseLang);
//radio.addEventListener('change',chooseImg);

export {chooseLang,lang,radioV,radioVplus};