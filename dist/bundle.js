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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/header.component.js":
/*!*******************************************!*\
  !*** ./src/component/header.component.js ***!
  \*******************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderComponent\", function() { return HeaderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar HeaderComponent = /*#__PURE__*/function (_Component) {\n  _inherits(HeaderComponent, _Component);\n\n  var _super = _createSuper(HeaderComponent);\n\n  function HeaderComponent(id) {\n    _classCallCheck(this, HeaderComponent);\n\n    return _super.call(this, id);\n  }\n\n  _createClass(HeaderComponent, [{\n    key: \"init\",\n    value: function init() {\n      var menu = this.$el.querySelector('.navbar__menu');\n      var btnClose = this.$el.querySelector('.navbar__close');\n      var btnOpen = this.$el.querySelector('#open-navbar__menu');\n      btnOpen.addEventListener('click', openMenu.bind(this, menu, btnOpen, btnClose));\n      btnClose.addEventListener('click', closeMenu.bind(this, menu, btnOpen, btnClose));\n    }\n  }]);\n\n  return HeaderComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction openMenu(menu, btnOpen, btnClose) {\n  menu.classList.add('navbar__menu-active');\n  btnClose.classList.add('navbar__close-active');\n  btnOpen.classList.add('navbar__btn-bars-delete');\n}\n\nfunction closeMenu(menu, btnOpen, btnClose) {\n  menu.classList.remove('navbar__menu-active');\n  btnClose.classList.remove('navbar__close-active');\n  btnOpen.classList.remove('navbar__btn-bars-delete');\n}\n\n//# sourceURL=webpack:///./src/component/header.component.js?");

/***/ }),

/***/ "./src/component/main-header.component.js":
/*!************************************************!*\
  !*** ./src/component/main-header.component.js ***!
  \************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainHeaderComponent\", function() { return MainHeaderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar MainHeaderComponent = /*#__PURE__*/function (_Component) {\n  _inherits(MainHeaderComponent, _Component);\n\n  var _super = _createSuper(MainHeaderComponent);\n\n  function MainHeaderComponent(id) {\n    _classCallCheck(this, MainHeaderComponent);\n\n    return _super.call(this, id);\n  }\n\n  _createClass(MainHeaderComponent, [{\n    key: \"init\",\n    value: function init() {\n      var anchors = document.querySelectorAll('a[href*=\"#\"]');\n      anchors.forEach(function (anchor) {\n        anchor.addEventListener('click', function (e) {\n          e.preventDefault();\n          var blockID = anchor.getAttribute('href').substr(1);\n          document.getElementById(blockID).scrollIntoView({\n            behavior: 'smooth',\n            block: 'end'\n          }); // window.scrollBy(0, -10)\n        });\n      });\n    }\n  }]);\n\n  return MainHeaderComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=webpack:///./src/component/main-header.component.js?");

/***/ }),

/***/ "./src/component/main-slider.component.js":
/*!************************************************!*\
  !*** ./src/component/main-slider.component.js ***!
  \************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderComponent\", function() { return SliderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar SliderComponent = /*#__PURE__*/function (_Component) {\n  _inherits(SliderComponent, _Component);\n\n  var _super = _createSuper(SliderComponent);\n\n  function SliderComponent(id) {\n    _classCallCheck(this, SliderComponent);\n\n    return _super.call(this, id);\n  }\n\n  _createClass(SliderComponent, [{\n    key: \"init\",\n    value: function init() {\n      var btnNext = this.$el.querySelector('.btn-next');\n      var btnPrev = this.$el.querySelector('.btn-prev');\n      var slides = this.$el.querySelectorAll('.clider__content-item');\n      var renderPoint = this.$el.querySelector('.clider__navigation');\n      renderSwitchPoint(renderPoint, slides);\n      var btnPoints = this.$el.querySelectorAll('.clider__btn-point');\n      var btnNavigation = this.$el.querySelector('.clider__navigation');\n      btnNext.addEventListener('click', switchNextOrPrevSlide.bind(this, slides, true, btnPoints));\n      btnPrev.addEventListener('click', switchNextOrPrevSlide.bind(this, slides, false, btnPoints));\n      btnNavigation.addEventListener('click', tapBtnPoints.bind(this));\n    }\n  }]);\n\n  return SliderComponent;\n}(_core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction renderSwitchPoint(renderPoint, slides) {\n  for (var count = 1; count <= slides.length; count++) {\n    if (count == 1) {\n      renderPoint.insertAdjacentHTML('afterbegin', \"<button class=\\\"clider__btn-point clider__btn-point_active\\\" data-id=\\\"\".concat(count, \"\\\"></button>\"));\n    } else {\n      renderPoint.insertAdjacentHTML('beforeend', \"<button class=\\\"clider__btn-point\\\" data-id=\\\"\".concat(count, \"\\\"></button>\"));\n    }\n  }\n}\n\nfunction switchNextOrPrevSlide(slides, nextorprev, btnPoints) {\n  var parseIdSlide = 1;\n  slides.forEach(function (slide) {\n    if (slide.classList.contains('clider__content-item_active')) {\n      slide.classList.remove('clider__content-item_active');\n      parseIdSlide = parseInt(slide.dataset.id) + (nextorprev ? 1 : -1);\n    }\n  });\n  var activeSlide = document.querySelector(\".clider__content-item[data-id=\\\"\".concat(parseIdSlide, \"\\\"]\"));\n\n  if (nextorprev ? parseIdSlide <= slides.length : parseIdSlide <= slides.length && parseIdSlide > 0) {\n    activeSlide.classList.add('clider__content-item_active');\n  } else {\n    parseIdSlide = nextorprev ? slides.length : 1;\n    activeSlide = document.querySelector(\".clider__content-item[data-id=\\\"\".concat(parseIdSlide, \"\\\"]\"));\n    activeSlide.classList.add('clider__content-item_active');\n  }\n\n  selectSwitchPoint(nextorprev, btnPoints);\n}\n\nfunction selectSwitchPoint(nextorprev, btnPoints) {\n  var parseIdPoint = 1;\n  btnPoints.forEach(function (point) {\n    if (point.classList.contains('clider__btn-point_active')) {\n      point.classList.remove('clider__btn-point_active');\n      parseIdPoint = parseInt(point.dataset.id) + (nextorprev ? 1 : -1);\n    }\n  });\n  var activePoint = document.querySelector(\".clider__btn-point[data-id=\\\"\".concat(parseIdPoint, \"\\\"]\"));\n\n  if (nextorprev ? parseIdPoint <= btnPoints.length : parseIdPoint <= btnPoints.length && parseIdPoint > 0) {\n    activePoint.classList.add('clider__btn-point_active');\n  } else {\n    parseIdPoint = nextorprev ? btnPoints.length : 1;\n    activePoint = document.querySelector(\".clider__btn-point[data-id=\\\"\".concat(parseIdPoint, \"\\\"]\"));\n    activePoint.classList.add('clider__btn-point_active');\n  }\n}\n\nfunction tapBtnPoints(event) {\n  var slides = this.$el.querySelectorAll('.clider__content-item');\n  var btnPoints = this.$el.querySelectorAll('.clider__btn-point');\n\n  if (event.target.classList.contains('clider__btn-point')) {\n    btnPoints.forEach(function (point) {\n      slides.forEach(function (slide) {\n        slide.classList.remove('clider__content-item_active');\n\n        if (point.classList.contains('clider__btn-point_active')) {\n          point.classList.remove('clider__btn-point_active');\n          slide.classList.remove('clider__content-item_active');\n        }\n\n        if (event.target.dataset.id === slide.dataset.id) {\n          event.target.classList.add('clider__btn-point_active');\n          slide.classList.add('clider__content-item_active');\n        }\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/component/main-slider.component.js?");

/***/ }),

/***/ "./src/component/polyfills.component.js":
/*!**********************************************!*\
  !*** ./src/component/polyfills.component.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (window.NodeList && !NodeList.prototype.forEach) {\n  NodeList.prototype.forEach = Array.prototype.forEach;\n}\n\n//# sourceURL=webpack:///./src/component/polyfills.component.js?");

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Component = /*#__PURE__*/function () {\n  function Component(id) {\n    _classCallCheck(this, Component);\n\n    this.$el = document.getElementById(id);\n    this.init();\n  }\n\n  _createClass(Component, [{\n    key: \"init\",\n    value: function init() {}\n  }]);\n\n  return Component;\n}();\n\n//# sourceURL=webpack:///./src/core/component.js?");

/***/ }),

/***/ "./src/img sync recursive \\.(png|svg|jpg|gif)$":
/*!*******************************************!*\
  !*** ./src/img sync \.(png|svg|jpg|gif)$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Advantage-slide1.svg\": \"./src/img/Advantage-slide1.svg\",\n\t\"./Advantage-slide2.svg\": \"./src/img/Advantage-slide2.svg\",\n\t\"./Advantage-slide3.svg\": \"./src/img/Advantage-slide3.svg\",\n\t\"./background.jpg\": \"./src/img/background.jpg\",\n\t\"./logo.svg\": \"./src/img/logo.svg\",\n\t\"./logo1.svg\": \"./src/img/logo1.svg\",\n\t\"./logo2.svg\": \"./src/img/logo2.svg\",\n\t\"./pattern.png\": \"./src/img/pattern.png\",\n\t\"./slide-img-1.jpg\": \"./src/img/slide-img-1.jpg\",\n\t\"./slide-img-2.jpg\": \"./src/img/slide-img-2.jpg\",\n\t\"./slide-img-3.jpg\": \"./src/img/slide-img-3.jpg\",\n\t\"./slide-img-4.jpg\": \"./src/img/slide-img-4.jpg\",\n\t\"./slide-img-5.jpg\": \"./src/img/slide-img-5.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync recursive \\\\.(png|svg|jpg|gif)$\";\n\n//# sourceURL=webpack:///./src/img_sync_\\.(png%7Csvg%7Cjpg%7Cgif)$?");

/***/ }),

/***/ "./src/img/Advantage-slide1.svg":
/*!**************************************!*\
  !*** ./src/img/Advantage-slide1.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Advantage-slide1.svg\");\n\n//# sourceURL=webpack:///./src/img/Advantage-slide1.svg?");

/***/ }),

/***/ "./src/img/Advantage-slide2.svg":
/*!**************************************!*\
  !*** ./src/img/Advantage-slide2.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Advantage-slide2.svg\");\n\n//# sourceURL=webpack:///./src/img/Advantage-slide2.svg?");

/***/ }),

/***/ "./src/img/Advantage-slide3.svg":
/*!**************************************!*\
  !*** ./src/img/Advantage-slide3.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Advantage-slide3.svg\");\n\n//# sourceURL=webpack:///./src/img/Advantage-slide3.svg?");

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/background.jpg\");\n\n//# sourceURL=webpack:///./src/img/background.jpg?");

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/logo.svg\");\n\n//# sourceURL=webpack:///./src/img/logo.svg?");

/***/ }),

/***/ "./src/img/logo1.svg":
/*!***************************!*\
  !*** ./src/img/logo1.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/logo1.svg\");\n\n//# sourceURL=webpack:///./src/img/logo1.svg?");

/***/ }),

/***/ "./src/img/logo2.svg":
/*!***************************!*\
  !*** ./src/img/logo2.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/logo2.svg\");\n\n//# sourceURL=webpack:///./src/img/logo2.svg?");

/***/ }),

/***/ "./src/img/pattern.png":
/*!*****************************!*\
  !*** ./src/img/pattern.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/pattern.png\");\n\n//# sourceURL=webpack:///./src/img/pattern.png?");

/***/ }),

/***/ "./src/img/slide-img-1.jpg":
/*!*********************************!*\
  !*** ./src/img/slide-img-1.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/slide-img-1.jpg\");\n\n//# sourceURL=webpack:///./src/img/slide-img-1.jpg?");

/***/ }),

/***/ "./src/img/slide-img-2.jpg":
/*!*********************************!*\
  !*** ./src/img/slide-img-2.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/slide-img-2.jpg\");\n\n//# sourceURL=webpack:///./src/img/slide-img-2.jpg?");

/***/ }),

/***/ "./src/img/slide-img-3.jpg":
/*!*********************************!*\
  !*** ./src/img/slide-img-3.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/slide-img-3.jpg\");\n\n//# sourceURL=webpack:///./src/img/slide-img-3.jpg?");

/***/ }),

/***/ "./src/img/slide-img-4.jpg":
/*!*********************************!*\
  !*** ./src/img/slide-img-4.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/slide-img-4.jpg\");\n\n//# sourceURL=webpack:///./src/img/slide-img-4.jpg?");

/***/ }),

/***/ "./src/img/slide-img-5.jpg":
/*!*********************************!*\
  !*** ./src/img/slide-img-5.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/slide-img-5.jpg\");\n\n//# sourceURL=webpack:///./src/img/slide-img-5.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_polyfills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/polyfills.component */ \"./src/component/polyfills.component.js\");\n/* harmony import */ var _component_polyfills_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_polyfills_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/header.component */ \"./src/component/header.component.js\");\n/* harmony import */ var _component_main_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/main-slider.component */ \"./src/component/main-slider.component.js\");\n/* harmony import */ var _component_main_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/main-header.component */ \"./src/component/main-header.component.js\");\n\n\n\n\n\n\nvar fileImg = __webpack_require__(\"./src/img sync recursive \\\\.(png|svg|jpg|gif)$\");\n\nvar header = new _component_header_component__WEBPACK_IMPORTED_MODULE_2__[\"HeaderComponent\"]('header');\nvar mainHeader = new _component_main_header_component__WEBPACK_IMPORTED_MODULE_4__[\"MainHeaderComponent\"]('main__header');\nvar mainSlider = new _component_main_slider_component__WEBPACK_IMPORTED_MODULE_3__[\"SliderComponent\"]('clider');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });