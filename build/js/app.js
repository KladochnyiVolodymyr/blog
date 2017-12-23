/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction menuFunction() {\n  var menu = document.getElementById('menu');\n\n  if (menu.className === 'nav') {\n    menu.className += ' responsive';\n  } else {\n    menu.className = 'nav';\n  }\n  var btn = document.getElementById('responsive-menu');\n  btn.classList.toggle('open');\n}\nmodule.exports = menuFunction;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3Jlc3BvbnNpdmVfbWVudS5qcz9hYzBjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1lbnVGdW5jdGlvbigpIHtcclxuICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgXHJcbiAgaWYgKG1lbnUuY2xhc3NOYW1lID09PSAnbmF2Jykge1xyXG4gICAgbWVudS5jbGFzc05hbWUgKz0gJyByZXNwb25zaXZlJztcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudS5jbGFzc05hbWUgPSAnbmF2JztcclxuICB9XHJcbiAgdmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNwb25zaXZlLW1lbnUnKTtcclxuICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gbWVudUZ1bmN0aW9uO1xyXG4gIFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9yZXNwb25zaXZlX21lbnUuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar slideIndex = 1;\n\nfunction plusDivs(slider, n) {\n  showDivs(slider, slideIndex += n);\n}\n\nfunction showDivs(slider, n) {\n\n  var x = slider.getElementsByClassName('slider__img');\n  if (n > x.length) {\n    slideIndex = 1;\n  }\n  if (n < 1) {\n    slideIndex = x.length;\n  }\n\n  slider.querySelector('.slider__img.active').classList.remove('active');\n  x[slideIndex - 1].classList.add('active');\n}\n\nmodule.exports = plusDivs;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NsaWRlci5qcz8xNzZlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzbGlkZUluZGV4ID0gMTtcclxuXHJcbmZ1bmN0aW9uIHBsdXNEaXZzKHNsaWRlciwgbikge1xyXG4gIHNob3dEaXZzKHNsaWRlciwgc2xpZGVJbmRleCArPSBuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0RpdnMoc2xpZGVyLCBuKSB7XHJcblxyXG4gIHZhciB4ID0gc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlcl9faW1nJyk7XHJcbiAgaWYgKG4gPiB4Lmxlbmd0aCkge3NsaWRlSW5kZXggPSAxO30gICAgXHJcbiAgaWYgKG4gPCAxKSB7c2xpZGVJbmRleCA9IHgubGVuZ3RoO31cclxuICBcclxuICBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9faW1nLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIHhbc2xpZGVJbmRleC0xXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbHVzRGl2cztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saWIvc2xpZGVyLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _responsive_menu = __webpack_require__(0);\n\nvar _responsive_menu2 = _interopRequireDefault(_responsive_menu);\n\nvar _slider = __webpack_require__(1);\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.getElementById('responsive-menu').addEventListener('click', _responsive_menu2.default);\n\nvar nextButtons = document.querySelectorAll('.img__btn.img__btn_next');\nvar prevButtons = document.querySelectorAll('.img__btn.img__btn_prev');\n\nfor (var i = 0; i < nextButtons.length; i++) {\n  nextButtons[i].addEventListener('click', function (e) {\n    var slider = e.target.parentElement;\n    (0, _slider2.default)(slider, 1);\n  });\n}\n\nfor (var i = 0; i < prevButtons.length; i++) {\n  prevButtons[i].addEventListener('click', function (e) {\n    var slider = e.target.parentElement;\n    (0, _slider2.default)(slider, -1);\n  });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbnVGdW5jdGlvbiBmcm9tICcuL2xpYi9yZXNwb25zaXZlX21lbnUuanMnO1xyXG5pbXBvcnQgcGx1c0RpdnMgZnJvbSAnLi9saWIvc2xpZGVyLmpzJztcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNwb25zaXZlLW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVGdW5jdGlvbik7XHJcblxyXG52YXIgbmV4dEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nX19idG4uaW1nX19idG5fbmV4dCcpO1xyXG52YXIgcHJldkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nX19idG4uaW1nX19idG5fcHJldicpO1xyXG5cclxuZm9yKHZhciBpPTA7IGkgPCBuZXh0QnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gIG5leHRCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHNsaWRlciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwbHVzRGl2cyhzbGlkZXIsIDEpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mb3IodmFyIGk9MDsgaSA8IHByZXZCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgcHJldkJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgc2xpZGVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHBsdXNEaXZzKHNsaWRlciwgLTEpO1xyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);