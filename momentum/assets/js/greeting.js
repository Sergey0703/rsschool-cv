
import {lang} from './tweak.js'
const greetingPlace=document.querySelector('.greeting');
let timeOfDay;
let greetingText;
let name=document.querySelector('.name');

let arrTime={'night':'Доброй ночи','morning':'Доброе утро','evening':'Добрый вечер','afternoon':'Добрый день'};


let getTimeOfDay=()=>{
  let date=new Date();
  let x=date.getHours();
switch (true){
    case (0<=x )&& (x<6) :
    return 'night';
    break;
    case (6<=x) && (x <12):
    return 'morning';
    break;
    case (18<=x)&&(x<24):   
    return 'evening';
    break;
    case (12<=x) && (x<18):
    return 'afternoon';
    break;
}  
} 
timeOfDay=getTimeOfDay();

function showGreeting(){
  if(lang==='en'){
    greetingText = `Good ${getTimeOfDay()} ,`;
  }else{
    greetingText = `${arrTime[getTimeOfDay()]} ,`;
  }
greetingPlace.textContent=greetingText;
}
function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)


export {showGreeting, timeOfDay, getTimeOfDay};
//export timeOfDay;
//export showGreeting;