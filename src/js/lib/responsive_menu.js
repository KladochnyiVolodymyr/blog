function menuFunction() {
  var menu = document.getElementById('menu');
  
  if (menu.className === 'nav') {
    menu.className += ' responsive';
  } else {
    menu.className = 'nav';
  }
  var btn = document.getElementById('responsive-menu');
  btn.classList.toggle('open');
}
module.exports = menuFunction;
  
