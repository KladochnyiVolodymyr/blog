import menuFunction from './lib/responsive_menu.js';
import hideSidebarContent from './lib/sidebar_hide.js';
import 'lightgallery';
import 'lightslider';


document.getElementById('responsive-menu').addEventListener('click', menuFunction);

$('.sidebar__title_wrap').click(hideSidebarContent);

$('#aniimated-thumbnials').lightGallery({
  thumbnail:true
}); 

$('#lightSlider').lightSlider({
  item: 1,
  loop:true,
  pager: false,
  prevHtml:'<img class="slider__btn" src="././img/prev.png">',
  nextHtml:'<img class="slider__btn" src="././img/next.png">'
}); 



