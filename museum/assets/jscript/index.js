import initComparisons from './comparisons.js';
import changeSlide from './wgallery.js';
import pictGallery from './pictgallery.js';
import initBooking from './book_ticket.js';
import setVideoProgress from './vplayer.js';

//setVideoProgress(50);
pictGallery();
initComparisons();
console.log(`1)Вёрстка соответствует макету. Ширина экрана 1024px +40`);
console.log(`2)Вёрстка соответствует макету. Ширина экрана 768px +40`);
console.log(`3)Вёрстка соответствует макету. Ширина экрана 320px +40`);
console.log(`4)Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +3`);
console.log(`5)Совмещается адаптивная и респонсивная (резиновая) вёрстка +14 При изменении ширины экрана плавно изменяются размеры:+7`);
console.log(`6)На ширине экрана 1024рх и меньше реализовано адаптивное меню +9`);
console.log(`7)Оптимизация скорости загрузки страницы +0`);
console.log('Всего 139 балла');


