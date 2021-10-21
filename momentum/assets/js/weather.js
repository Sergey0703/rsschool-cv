const weatherIcon=document.querySelector('.weather-icon');
const temperature=document.querySelector('.temperature');
const weatherDescription=document.querySelector('.weather-description');
const humidity=document.querySelector('.humidity');
const wind=document.querySelector('.wind');
const weatherError=document.querySelector('.weather-error');
let city='Minsk';
let cityInput=document.querySelector('.city');



async function getWeather(){
   
    //console.log('city');
    if(cityInput.value!==''){
      city=cityInput.value;  
    }else{
        if(localStorage.getItem('city')) {
            cityInput.value = localStorage.getItem('city');
          }else{
        cityInput.value=city;
          }
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=fda64f590dc732d29e589668fab412c5&units=metric`;
    const res = await fetch(url);
    if (res.ok) {
    const data=await res.json();
    weatherError.textContent='';
    console.log('d0=',data.weather[0].id, ' =',data.weather[0].description,' =',data.main.temp,' data.weather[0]=',data.weather[0]) ;
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent=`${data.main.temp}°C`;
    humidity.textContent=`Humidity: ${data.main.humidity}%`;
    wind.textContent=`Wind speed: ${data.wind.speed} m/s`;
    weatherDescription.textContent=data.weather[0].description;//data.weather[0].description;
    }else{
       // console.log(res.status);
    let err=await res.json();
    weatherError.textContent=err.message;
    //weatherIcon.classList.remove(`weather-icon owf`);
    weatherIcon.className = "weather-icon owf";
    temperature.textContent='';
    humidity.textContent='';
    wind.textContent='';
    weatherDescription.textContent='';
    }
}

function setLocalStorageCity() {
    localStorage.setItem('city', cityInput.value);
  }
window.addEventListener('beforeunload', setLocalStorageCity);

//function getLocalStorageCity() {
   // console.log('getLocalSt');
  //  if(localStorage.getItem('city')) {
  //    cityInput.value = localStorage.getItem('city');
  //  }
 // }
 // window.addEventListener('load', getLocalStorageCity)

getWeather();

cityInput.addEventListener('change',getWeather);
export default getWeather;