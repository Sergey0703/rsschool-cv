import {showGreeting} from './greeting.js';
import { lang } from './tweak.js';
const time=document.querySelector('.time');
const date=document.querySelector('.date');
let langD;
let options;

let showDate =function(){
    const dat=new Date();
    console.log('langg=',lang);
    if(lang==='en'){
        langD='en-En';
        options={weekday: 'long', month: 'long', day:'numeric'};
    }else{
        langD='ru-Ru';
        options={weekday: 'long', day:'numeric', month: 'long' };
    }
   
    const currentDate= dat.toLocaleDateString(langD,options);

    date.textContent=currentDate;
}

function showTime(){
    const date=new Date();
    if(lang==='en'){
        langD='ru-Ru';
        options={weekday: 'long', month: 'long', day:'numeric'};
    }else{
        langD='ru-Ru';
        options={weekday: 'long', day:'numeric', month: 'long' };
    }
    const currentTime=date.toLocaleTimeString(langD);
    time.textContent=currentTime;
   // console.log('show=',currentTime);
    showGreeting();
    showDate();
    setTimeout(showTime,1000);
}


export {showTime};