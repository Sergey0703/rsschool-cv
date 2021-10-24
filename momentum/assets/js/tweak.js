import getQuotes from "./quotes.js";
import getWeather from "./weather.js";

const langBtn=document.querySelector('#choose-lang-ru');
let lang='en';

function chooseLang(){
    if(lang==='en'){
        lang='ru';
        
    }else{
        lang='en';
    }
    console.log('lang=',lang);
langBtn.classList.toggle('choose-lang');
getQuotes(lang);
getWeather();
}

langBtn.addEventListener('click',chooseLang);

export {chooseLang,lang};