import {getRandom} from "./slider.js";

const quotePlace=document.querySelector('.quote');
const authorPlace=document.querySelector('.author');
const changeQuote=document.querySelector('.change-quote');


async function getQuotes(){
    let randomQuote=getRandom(0,3);
    const quotes='./data.json';
    const res= await fetch(quotes);
    const data= await res.json();
    console.log('data=',data);
    quotePlace.textContent=data[randomQuote].text;
    authorPlace.textContent=data[randomQuote].author;

}
getQuotes();
changeQuote.addEventListener('click',getQuotes);

export default getQuotes;