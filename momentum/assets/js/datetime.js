import {showGreeting} from './greeting.js';
const time=document.querySelector('.time');
const date=document.querySelector('.date');

let showDate =function(){
    const dat=new Date();
    let options={weekday: 'long', month: 'long', day:'numeric'};
    const currentDate= dat.toLocaleDateString('en-En',options);

    date.textContent=currentDate;
}

function showTime(){
    const date=new Date();
    const currentTime=date.toLocaleTimeString();
    time.textContent=currentTime;
   // console.log('show=',currentTime);
    showGreeting();
    showDate();
    setTimeout(showTime,1000);
}

showTime();
export default showTime;