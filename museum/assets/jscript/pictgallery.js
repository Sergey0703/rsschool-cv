const pictureInnerContainer = document.querySelector('.picture-inner-container');
let initArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }


initArr=shuffle(initArr);

function pictGallery(){
let img = "";
let arrPict=[];
for(let i=0; i<=14; i++){
let im=` <img class="gallery-img" src="assets/img/galery/galery${initArr[i]}.jpg" alt="galery${initArr[i]}"> `;
arrPict[i]=im;
  
}
//console.log('img=',img);
img=arrPict.join("");

pictureInnerContainer.innerHTML = img;
}
export default pictGallery;

