import getQuotes from "./quotes.js";
import getWeather from "./weather.js";
const inpName=document.querySelector('.name');

const langBtn=document.querySelector('#choose-lang-ru');
let lang='en';

function chooseLang(){
    if(lang==='en'){
        lang='ru';
        inpName.placeholder="Введите ваше имя";
    }else{
        lang='en';
        inpName.placeholder="Enter you name";
    }
    console.log('lang=',lang);
langBtn.classList.toggle('choose-lang');

getQuotes(lang);
getWeather();
}

langBtn.addEventListener('click',chooseLang);

export {chooseLang,lang};