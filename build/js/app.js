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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
eval("\n\nvar _responsive_menu = __webpack_require__(0);\n\nvar _responsive_menu2 = _interopRequireDefault(_responsive_menu);\n\nvar _slider = __webpack_require__(2);\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.getElementById('responsive-menu').addEventListener('click', _responsive_menu2.default);\n\nvar myArr = document.getElementsByClassName('img__btn');\n\nfor (var i = 0; i < myArr.length; i++) {\n  myArr[i].addEventListener('click', _slider2.default);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbnVGdW5jdGlvbiBmcm9tICcuL2xpYi9yZXNwb25zaXZlX21lbnUuanMnO1xyXG5pbXBvcnQgcGx1c0RpdnMgZnJvbSAnLi9saWIvc2xpZGVyLmpzJztcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNwb25zaXZlLW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVGdW5jdGlvbik7XHJcblxyXG52YXIgbXlBcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdfX2J0bicpO1xyXG5cclxuZm9yKHZhciBpPTA7IGkgPCBteUFyci5sZW5ndGg7IGkrKykge1xyXG4gIG15QXJyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGx1c0RpdnMpO1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar slideIndex = 1;\nshowDivs(slideIndex);\n\nfunction plusDivs(n) {\n  showDivs(slideIndex += n);\n}\n\nfunction showDivs(n) {\n  var i;\n  var x = document.getElementsByClassName('slider__img');\n  if (n > x.length) {\n    slideIndex = 1;\n  }\n  if (n < 1) {\n    slideIndex = x.length;\n  }\n  for (i = 0; i < x.length; i++) {\n    x[i].style.display = 'none';\n  }\n  x[slideIndex - 1].style.display = 'block';\n}\n\nmodule.exports = plusDivs;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NsaWRlci5qcz8xNzZlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzbGlkZUluZGV4ID0gMTtcclxuc2hvd0RpdnMoc2xpZGVJbmRleCk7XHJcblxyXG5mdW5jdGlvbiBwbHVzRGl2cyhuKSB7XHJcbiAgc2hvd0RpdnMoc2xpZGVJbmRleCArPSBuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0RpdnMobikge1xyXG4gIHZhciBpO1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyX19pbWcnKTtcclxuICBpZiAobiA+IHgubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDE7fSAgICBcclxuICBpZiAobiA8IDEpIHtzbGlkZUluZGV4ID0geC5sZW5ndGg7fVxyXG4gIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB4W2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICBcclxuICB9XHJcbiAgeFtzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcGx1c0RpdnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGliL3NsaWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);