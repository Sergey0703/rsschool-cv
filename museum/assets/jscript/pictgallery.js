const pictureInnerContainer = document.querySelector('.picture-inner-container');
let initArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }


initArr=shuffle(initArr);
let arrPict=[];
function pictGallery(){
let img = "";

for(let i=0; i<=14; i++){
let im=` <img class="gallery-img" name="gal-img" src="assets/img/galery/galery${initArr[i]}.jpg" alt="galery${initArr[i]}"> `;
arrPict[i]=im;
  
}
console.log('img=',img);
img=arrPict.join("");

pictureInnerContainer.innerHTML = img;
}


/*
let checkGallery = ev => {
  arrPict.forEach(img => {
      let elem = img.getBoundingClientRect()
      if (elem.top < window.innerHeight) {
          img.animate({ opacity: 1, marginTop: 0 }, 500).onfinish = _ => {
              img.className = ''
          }
      } else {
          img.className = 'gallery-hidden'
      }
  })
}
window.addEventListener('scroll', debounce(checkGallery))

function debounce(func, wait = 20, immediate = false) {
  let timeout;
  return function executedFunction() {
      const context = this;
      const args = arguments;

      const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
  };
};
*/
export default pictGallery;

