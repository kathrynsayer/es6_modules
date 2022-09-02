/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor(id, make, model, year) {\n        this.id = id;\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    }\n}\n\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\nconsole.log(\"Hello World\");\n\n// // TODO\n// Import WishList from wishlist.js\n\n\n\nlet wishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n// Select the form\nlet form = document.querySelector(\"#submitForm\");\n// Select the input for car make\nlet makeInput = document.querySelector(\"#makeInput\");\n// Select the input for car model\nlet modelInput = document.querySelector(\"#modelInput\");\n// Select the input for car year\nlet yearInput = document.querySelector(\"#yearInput\");\n// Select the paragraph element for car make\nlet carMakeP  = document.querySelector(\"#car-make\");\n// Select the paragraph element for car model\nlet carModelP = document.querySelector(\"#car-model\");\nlet carYearP = document.querySelector(\"#car-year\");\nlet removeBtn = document.querySelector(\"#removeBtn\");\nlet wishListUl = document.querySelector(\"#wishListUl\");\n\n\nform.addEventListener(\"submit\", addCar);\nremoveBtn.addEventListener(\"click\", removeCar);\n\n\n// Select the paragraph element for car year\n// Select the remove button\n// Select the wishlist unordered list element\n// Call the WishList constructor to create an instance from the WishList class\n\nfunction showCarDetails (car) {\n    carMakeP.textContent = car.make;\n    carModelP.textContent = car.model;\n    carYearP.textContent = car.year;\n    removeBtn.disabled = false;\n    removeBtn.setAttribute(\"data-carId\", car>id); \n\n}\n\nfunction updateDOMList () {\n    wishListUl.innerHTML = \"\";\n    wishlist.list.forEach((car) => {\n        const li = document.createElement(\"li\");\n        li.textContent = `${car.make} ${car.model}`;\n        li.addEventListener(\"click\", () => showCarDetails(car));\n        wishListUl.appendChild(li);\n    });\n}\n\nfunction addCar (event) {\n    event.preventDefault();\n    let make = makeInput.value;\n    let model = modelInput.value;\n    let year = yearInput.value;\n    wishlist.add(make, model, year);\n    updateDOMList();\n} \n\nfunction removeCar () {\n    let carId = Number(removeBtn.getAttribute(\"data-carId\"));\n    wishlist.remove(carId);\n    updateDOMList();\n    carMakeP.textContent = \"\";\n    carModelP.textContent = \"\";\n    carYearP.textContent = \"\";\n    removeBtn.disabled = true;\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\nclass WishList {\n    constructor() {\n        this.list = [];\n        this.nextId = 0;\n    }\n    add(make, model, year) {\n        let car = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] (this.nextId++, make, model, year);\n        this.list.push (car);\n        console.log (this.list);\n    }\n    remove (id) {\n        let idx = this.list.findIndex ((car) => car.id === id)\n        this.list.splice (idx, 1)\n    }\n}\n\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;