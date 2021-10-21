const quotePlace=document.querySelector('.quote');
const authorPlace=document.querySelector('.author');

async function getQuotes(){
    const quotes='./data.json';
    const res= await fetch(quotes);
    const data= await res.json();
    console.log('data=',data);
    quotePlace.textContent=data[0].text;
    authorPlace.textContent=data[0].author;

}
getQuotes();

export default getQuotes;