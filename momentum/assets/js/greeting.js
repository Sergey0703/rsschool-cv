const date=new Date();
let hours=date.getHours();
let timeOfDay;


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
    return 'day';
    break;
    
    
}  
} 
timeOfDay=getTimeOfDay(hours);
console.log('t=',timeOfDay);
export default timeOfDay;