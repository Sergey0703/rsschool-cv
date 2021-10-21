const date=new Date();
let hours=date.getHours();
const greetingPlace=document.querySelector('.greeting');
let timeOfDay;
let name=document.querySelector('.name');

let getTimeOfDay=(x)=>{
switch (true){
    case (0<=x )&& (x<4) :
    return 'night';
    break;
    case (4<=x) && (x <12):
    return 'morning';
    break;
    case (16<=x)&&(x<24):   
    return 'evening';
    break;
    case (12<=x) && (x<16):
    return 'afternoon';
    break;
}  
} 
timeOfDay=getTimeOfDay(hours);

function showGreeting(){
 const greetingText = `Good ${getTimeOfDay(hours)} ,`;
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


export {showGreeting, timeOfDay};
//export timeOfDay;
//export showGreeting;