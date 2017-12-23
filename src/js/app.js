import menuFunction from './lib/responsive_menu.js';
import plusDivs from './lib/slider.js';

document.getElementById('responsive-menu').addEventListener('click', menuFunction);

var nextButtons = document.querySelectorAll('.img__btn.img__btn_next');
var prevButtons = document.querySelectorAll('.img__btn.img__btn_prev');

for(var i=0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener('click', function(e) {
    var slider = e.target.parentElement;
    plusDivs(slider, 1);
  });
}

for(var i=0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener('click', function(e) {
    var slider = e.target.parentElement;
    plusDivs(slider, -1);
  });
}

$('#aniimated-thumbnials').lightGallery({
  thumbnail:true
});
