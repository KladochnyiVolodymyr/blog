var slideIndex = 1;

function plusDivs(slider, n) {
  showDivs(slider, slideIndex += n);
}

function showDivs(slider, n) {

  var x = slider.getElementsByClassName('slider__img');
  if (n > x.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = x.length;}
  
  slider.querySelector('.slider__img.active').classList.remove('active');
  x[slideIndex-1].classList.add('active');
}

module.exports = plusDivs;
