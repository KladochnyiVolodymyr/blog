import menuFunction from './lib/responsive_menu.js';
import plusDivs from './lib/slider.js';

document.getElementById('responsive-menu').addEventListener('click', menuFunction);

var myArr = document.getElementsByClassName('img__btn');

for(var i=0; i < myArr.length; i++) {
  myArr[i].addEventListener('click', plusDivs);
}

