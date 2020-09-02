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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/three.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/one.js":
/*!****************************!*\
  !*** ./src/scripts/one.js ***!
  \****************************/
/*! exports provided: es_Mayor_a_Ocho, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"es_Mayor_a_Ocho\", function() { return es_Mayor_a_Ocho; });\nvar es_Mayor_a_Ocho = function es_Mayor_a_Ocho(array_numeros) {\n  var array_numeros = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];\n  var nuevoArray = [];\n\n  for (var i = 0; i < array_numeros.length; i++) {\n    if (typeof array_numeros[i] == \"number\") {\n      var numeros_por_4 = array_numeros[i] * 4;\n\n      if (numeros_por_4 > 8) {\n        nuevoArray.push(numeros_por_4);\n      }\n    }\n  }\n\n  return nuevoArray;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (es_Mayor_a_Ocho);\n\n//# sourceURL=webpack:///./src/scripts/one.js?");

/***/ }),

/***/ "./src/scripts/three.js":
/*!******************************!*\
  !*** ./src/scripts/three.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one */ \"./src/scripts/one.js\");\n/* harmony import */ var _two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two */ \"./src/scripts/two.js\");\n\n\n\nvar invocador_de_funciones = function invocador_de_funciones() {\n  return {\n    status: \"Ok\",\n    resultOne: Object(_one__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    resultTwo: Object(_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  };\n};\n\nconsole.log(invocador_de_funciones());\n\n//# sourceURL=webpack:///./src/scripts/three.js?");

/***/ }),

/***/ "./src/scripts/two.js":
/*!****************************!*\
  !*** ./src/scripts/two.js ***!
  \****************************/
/*! exports provided: convierte_objeto_a_json, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convierte_objeto_a_json\", function() { return convierte_objeto_a_json; });\nvar convierte_objeto_a_json = function convierte_objeto_a_json() {\n  var objeto = {\n    nombre: \"Rosalina\",\n    edad: 5,\n    raza: \"Yorkshire\",\n    pelo: \"negro\"\n  };\n  var myJson = JSON.stringify(objeto);\n  return myJson;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (convierte_objeto_a_json);\n/* console.log(mascota); //retorna objeto\r\nconsole.log(convierte_objeto_a_json(mascota)); //retorna objeto convertido */\n\n//# sourceURL=webpack:///./src/scripts/two.js?");

/***/ })

/******/ });