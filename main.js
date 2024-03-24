/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Graduate-Regular.ttf */ "./src/Graduate-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --mainBlue: #5C98C1;
    --offWhite: #EFF0F4;
    --lightGrey: #9F9293;
    --darkGrey: #806C64;
    --backgroundBlue: #2975A7;
}

input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /* Add any other styles you want to reset */
    border: none;
    outline: none;
    /* Additional styles to match your design */
    background-color: transparent; /* or any other desired color */
    color: inherit; /* or any other desired color */
    /* Add more styles as needed */
  }

@font-face {
    font-family: 'Graduate';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

button {
    font-family: 'Graduate';
}

.unicode {
    font-family: 'Segoe UI Symbol', sans-serif;
}

input[type="submit"] {
    font-family: 'Graduate';
}

html, body {
    margin: 0;
    height: 100%;
    font-family: 'Graduate';
    overflow-y: hidden;
}

#container {
    height: 100%;
    display: grid;
    grid-template-columns: 80px auto;
    grid-template-rows: 80px auto;
}

header {
    background-color: var(--backgroundBlue);
    grid-column: 1 / 3;
    grid-row: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

button {
    background-color: var(--darkGrey);
    border: 3px solid var(--darkGrey);
    color: var(--offWhite);
}

button:hover {
    background-color: var(--lightGrey);
    border: 3px solid var(--lightGrey);
}

h1 {
    color: var(--offWhite);
}

table {
    width: 100%;
}

tr {
    height: 30px;
}

td:nth-child(1) {
    width: 70px;
}

td:nth-child(2) {
    width: 120px;
}

td:nth-child(4) {
    width: 100px;
}

td:nth-child(5) {
    width: 150px;
}

td button {
    border: none;
    background-color: transparent;
    color: black;
    height: 100%;   
}

input, input[type="date"], textarea, select {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    background-color: transparent;
    appearance: none;
}

td input, input[type="date"], input[type="submit"] {
    box-sizing: border-box;
    height: 20px;
    width: 100%;
    font-family: 'Graduate';
    border: 1px solid var(--darkGrey);
    margin: 0;
    padding: 0;
    padding-left: 2px;
}

td input:focus {
    border: 1px solid black;
    border-radius: none;
    background-color: var(--mainBlue);
}

td input[type="submit"]:hover {
    background-color: var(--mainBlue);
    border-color: var(--mainBlue);
}

td button:hover {
    background-color: var(--lightGrey);
}

nav {
    background-color: var(--mainBlue);
    grid-column: 1;
    grid-row: 2;
}

#tasksWindow {
    background-color: var(--offWhite);
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    padding: 5px;
    position: relative;
}

.projectRow {
    width: 100%;
    background-color: var(--backgroundBlue);
    height:35px;
}

.projectRow td {
    padding: 5px;
}

.taskRow {
    width: 100%;
    background-color: var(--offWhite);
    font-size: 80%;
}

.headerRow {
    background-color: var(--lightGrey);
}

.headerRow td {
    padding: 5px;
}

.completedTask {
    background-color: var(--darkGrey);
    text-decoration: line-through;
}

.tooltip {
    position: absolute;
    visibility: hidden;
    opacity: 0.8;
    background-color: var(--darkGrey);
    color: var(--offWhite);
    border-radius: 6px;
    padding: 5px 0;
    z-index: 1;
    width: 100px;
    bottom: 90%;
    left: 50%;
    margin-left: -50px;
}

.tooltipParent:hover .tooltip {
    visibility: visible;
}

.mediumPriority {
    color: orangered;
}

.highPriority {
    font-weight: bold;
    color: maroon;
}

.centered {
    text-align: center;
}

.backgroundImage {
    height: 200px;
    margin-top: -20px;
}

.popup_project {
    position: absolute;
    background-color: var(--offWhite);
    border: 6px solid var(--backgroundBlue);
    border-radius: 6px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
}

.popup_project p {
    padding: 0;
    margin: 0;
}

.popup_project input {
    background-color: var(--mainBlue);
    border: none;
    font-size: 150%;
    height: 100%;
}

.popup_project input[type="submit"]:hover {
    background-color: var(--lightGrey);
}

@media screen and (min-width:651px) {
    #container {
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --mainBlue: #5C98C1;\r\n    --offWhite: #EFF0F4;\r\n    --lightGrey: #9F9293;\r\n    --darkGrey: #806C64;\r\n    --backgroundBlue: #2975A7;\r\n}\r\n\r\ninput {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    /* Add any other styles you want to reset */\r\n    border: none;\r\n    outline: none;\r\n    /* Additional styles to match your design */\r\n    background-color: transparent; /* or any other desired color */\r\n    color: inherit; /* or any other desired color */\r\n    /* Add more styles as needed */\r\n  }\r\n\r\n@font-face {\r\n    font-family: 'Graduate';\r\n    src: url('./Graduate-Regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Graduate';\r\n}\r\n\r\n.unicode {\r\n    font-family: 'Segoe UI Symbol', sans-serif;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n    font-family: 'Graduate';\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    height: 100%;\r\n    font-family: 'Graduate';\r\n    overflow-y: hidden;\r\n}\r\n\r\n#container {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 80px auto;\r\n    grid-template-rows: 80px auto;\r\n}\r\n\r\nheader {\r\n    background-color: var(--backgroundBlue);\r\n    grid-column: 1 / 3;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\nbutton {\r\n    background-color: var(--darkGrey);\r\n    border: 3px solid var(--darkGrey);\r\n    color: var(--offWhite);\r\n}\r\n\r\nbutton:hover {\r\n    background-color: var(--lightGrey);\r\n    border: 3px solid var(--lightGrey);\r\n}\r\n\r\nh1 {\r\n    color: var(--offWhite);\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\ntr {\r\n    height: 30px;\r\n}\r\n\r\ntd:nth-child(1) {\r\n    width: 70px;\r\n}\r\n\r\ntd:nth-child(2) {\r\n    width: 120px;\r\n}\r\n\r\ntd:nth-child(4) {\r\n    width: 100px;\r\n}\r\n\r\ntd:nth-child(5) {\r\n    width: 150px;\r\n}\r\n\r\ntd button {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: black;\r\n    height: 100%;   \r\n}\r\n\r\ninput, input[type=\"date\"], textarea, select {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n    outline: none;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    color: inherit;\r\n    background-color: transparent;\r\n    appearance: none;\r\n}\r\n\r\ntd input, input[type=\"date\"], input[type=\"submit\"] {\r\n    box-sizing: border-box;\r\n    height: 20px;\r\n    width: 100%;\r\n    font-family: 'Graduate';\r\n    border: 1px solid var(--darkGrey);\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 2px;\r\n}\r\n\r\ntd input:focus {\r\n    border: 1px solid black;\r\n    border-radius: none;\r\n    background-color: var(--mainBlue);\r\n}\r\n\r\ntd input[type=\"submit\"]:hover {\r\n    background-color: var(--mainBlue);\r\n    border-color: var(--mainBlue);\r\n}\r\n\r\ntd button:hover {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\nnav {\r\n    background-color: var(--mainBlue);\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n}\r\n\r\n#tasksWindow {\r\n    background-color: var(--offWhite);\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 5px;\r\n    position: relative;\r\n}\r\n\r\n.projectRow {\r\n    width: 100%;\r\n    background-color: var(--backgroundBlue);\r\n    height:35px;\r\n}\r\n\r\n.projectRow td {\r\n    padding: 5px;\r\n}\r\n\r\n.taskRow {\r\n    width: 100%;\r\n    background-color: var(--offWhite);\r\n    font-size: 80%;\r\n}\r\n\r\n.headerRow {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\n.headerRow td {\r\n    padding: 5px;\r\n}\r\n\r\n.completedTask {\r\n    background-color: var(--darkGrey);\r\n    text-decoration: line-through;\r\n}\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    opacity: 0.8;\r\n    background-color: var(--darkGrey);\r\n    color: var(--offWhite);\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    z-index: 1;\r\n    width: 100px;\r\n    bottom: 90%;\r\n    left: 50%;\r\n    margin-left: -50px;\r\n}\r\n\r\n.tooltipParent:hover .tooltip {\r\n    visibility: visible;\r\n}\r\n\r\n.mediumPriority {\r\n    color: orangered;\r\n}\r\n\r\n.highPriority {\r\n    font-weight: bold;\r\n    color: maroon;\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\n.backgroundImage {\r\n    height: 200px;\r\n    margin-top: -20px;\r\n}\r\n\r\n.popup_project {\r\n    position: absolute;\r\n    background-color: var(--offWhite);\r\n    border: 6px solid var(--backgroundBlue);\r\n    border-radius: 6px;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 300px;\r\n}\r\n\r\n.popup_project p {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.popup_project input {\r\n    background-color: var(--mainBlue);\r\n    border: none;\r\n    font-size: 150%;\r\n    height: 100%;\r\n}\r\n\r\n.popup_project input[type=\"submit\"]:hover {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\n@media screen and (min-width:651px) {\r\n    #container {\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/class_project.js":
/*!******************************!*\
  !*** ./src/class_project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}

/***/ }),

/***/ "./src/class_task.js":
/*!***************************!*\
  !*** ./src/class_task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority, isComplete, partOfProject) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isComplete = isComplete;
        this.daysLeft = null;
        this.partOfProject = partOfProject;
    }
}

/***/ }),

/***/ "./src/sm_project_creator.js":
/*!***********************************!*\
  !*** ./src/sm_project_creator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectCreator)
/* harmony export */ });
/* harmony import */ var _class_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_project */ "./src/class_project.js");


class ProjectCreator {
    newProject(title) {
        return new _class_project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
    }
    editProject(project, newTitle) {
        project.title = newTitle;
    }
}

/***/ }),

/***/ "./src/sm_project_deleter.js":
/*!***********************************!*\
  !*** ./src/sm_project_deleter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectDeleter)
/* harmony export */ });
class ProjectDeleter {
    deleteProject(project) {
        // find the projectRow
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let projectRow = document.querySelector(`#row_${p_titleNoSpaces}`);

        // initialize table
        let table = document.querySelector('table');

        // remove project row
        table.removeChild(projectRow);

        // save project title
        let myProjectTitle = project.title;

        console.log('Here are the project tasks:');
        console.log(project.tasks);

        // loop through the project's tasks
        for (let i = 0; i < project.tasks.length; i++) {
            let title = project.tasks[i].title;
            let t_titleNoSpaces = title.replaceAll(' ', '_');
            let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
            table.removeChild(taskRow);

            // remove the task from localStorage
            let localTasksArray = localStorage.tasks.split('|');
            for (let i = 0; i < localTasksArray.length; i++) {
                let retrievedTaskObject = JSON.parse(localTasksArray[i]);
                if (retrievedTaskObject.title == title) {
                    localTasksArray.splice(i, 1);
                    break;
                }
            }
            localStorage.tasks = localTasksArray.join('|');
        }
        // remove the project from localStorae
        let localProjectsArray = localStorage.projects.split('|');
        for (let i = 0; i < localProjectsArray.length; i++) {
            let retrievedProjectObject = JSON.parse(localProjectsArray[i]);
            if (retrievedProjectObject.title == myProjectTitle) {
                localProjectsArray.splice(i, 1);
                break;
            }
        }
        localStorage.projects = localProjectsArray.join('|');

        // Remove relevant formRow
        let formRow = document.querySelector(`#form_${p_titleNoSpaces}`);
        table.removeChild(formRow);
    }
}

/***/ }),

/***/ "./src/sm_task_assigner.js":
/*!*********************************!*\
  !*** ./src/sm_task_assigner.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Assigner)
/* harmony export */ });
class Assigner {
    assignTask(project, task) {
        project.tasks.push(task);
    }
}

/***/ }),

/***/ "./src/sm_task_creator.js":
/*!********************************!*\
  !*** ./src/sm_task_creator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskCreator)
/* harmony export */ });
/* harmony import */ var _class_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_task */ "./src/class_task.js");


class TaskCreator
{
    newTask(title, description, dueDate, priority, isComplete, partOfProject) {
        return new _class_task__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, isComplete, partOfProject)
    }
    editTask(task, newTitle, newDescription, newDueDate, newPriority) {
        task.title = newTitle;
        task.description = newDescription;
        task.dueDate = newDueDate;
        task.priority = newPriority;
    }
    completeTask(task) {
        task.isComplete = true;
    }
}

/***/ }),

/***/ "./src/sm_task_deleter.js":
/*!********************************!*\
  !*** ./src/sm_task_deleter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskDeleter)
/* harmony export */ });
class TaskDeleter {
    deleteTask(task) {
        // store title
        let oldTitle = task.title;

        // find taskRow
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // find table
        let table = document.querySelector('table');

        // removeChild
        table.removeChild(taskRow);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == oldTitle) {
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');
    }
}

/***/ }),

/***/ "./src/ui_bg_drawer.js":
/*!*****************************!*\
  !*** ./src/ui_bg_drawer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundDrawer)
/* harmony export */ });
/* harmony import */ var _arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.png */ "./src/arrow.png");


class BackgroundDrawer  {
    drawBackground() {
        // find tasksWindow
        let tasksWindow = document.querySelector('#tasksWindow');

        // create a div for the drawing
        let backgroundContainer = document.createElement('div');
        backgroundContainer.classList.add('backgroundContainer');

        // create elements of backgroundContainer
        let backgroundImage = document.createElement('img');
        backgroundImage.setAttribute(`src`, `${_arrow_png__WEBPACK_IMPORTED_MODULE_0__}`);
        backgroundImage.classList.add('backgroundImage');

        // append things to things
        backgroundContainer.appendChild(backgroundImage);
        tasksWindow.appendChild(backgroundContainer);
    }
    removeBackground() {

    }

}

/***/ }),

/***/ "./src/ui_dialog_maker.js":
/*!********************************!*\
  !*** ./src/ui_dialog_maker.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DialogMaker)
/* harmony export */ });
class DialogMaker {
    createProjectDialog() {
        // create div
        let popup = document.createElement('div');

        // assign class
        popup.classList.add('popup_project');

        // append to taskWindow
        let tasksWindow = document.querySelector('#tasksWindow');
        tasksWindow.appendChild(popup);

        // hide by default
        popup.style.visibility = 'hidden';
            
        // text
        let text = document.createElement('p');
        text.textContent = "Please enter the name of your new project:"
        popup.appendChild(text);

        // form
        let form = document.createElement('input');
        form.type = 'text';
        form.name = 'projectName';
        form.id = 'projectName';
        popup.appendChild(form);

        // submit
        let button = document.createElement('input');
        button.type = 'submit';
        button.value = "Create";
        button.id = 'popup_project_button';
        popup.appendChild(button);
    }
    showProjectDialog() {
        let popup = document.querySelector('.popup_project');
        popup.style.visibility = 'visible';
    }
    hideProjectDialog() {
        let popup = document.querySelector('.popup_project');
        document.querySelector(`input[name="projectName"]`).value = ``;
        popup.style.visibility = 'hidden';
    }
}

/***/ }),

/***/ "./src/ui_header_creator.js":
/*!**********************************!*\
  !*** ./src/ui_header_creator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderCreator)
/* harmony export */ });
class HeaderCreator {
    makeHeaderCells() {
        let table = document.querySelector('table');
        
        let headerRow = document.createElement('tr');
        headerRow.classList.add('headerRow');

        let headerRowPriority = document.createElement('td');
        let headerRowTitle = document.createElement('td');
        let headerRowDescription = document.createElement('td');
        let headerRowDueDate = document.createElement('td');
        let headerRowButtons = document.createElement('td');
        
        headerRowPriority.textContent = 'Priority';
        headerRowTitle.textContent = 'Task';
        headerRowDescription.textContent = 'Description';
        headerRowDueDate.textContent = 'Due Date';
        headerRowButtons.textContent = 'Controls';

        headerRow.appendChild(headerRowPriority);
        headerRow.appendChild(headerRowTitle);
        headerRow.appendChild(headerRowDescription);
        headerRow.appendChild(headerRowDueDate);
        headerRow.appendChild(headerRowButtons);
    
        table.prepend(headerRow);
    }
}

/***/ }),

/***/ "./src/ui_priority_colorer.js":
/*!************************************!*\
  !*** ./src/ui_priority_colorer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriorityColorer)
/* harmony export */ });
class PriorityColorer {
    priorityClassAssigner(task) {
        // find taskRow
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // find the correct td
        let priorityCell = taskRow.children[0];

        // remove any previous classes
        priorityCell.classList.remove('highPriority');
        priorityCell.classList.remove('mediumPriority');
        priorityCell.classList.remove('lowPriority');

        // assign new class
        switch (priorityCell.textContent) {
            case '1':
                priorityCell.classList.add('lowPriority');
                break;
            case '2':
                priorityCell.classList.add('mediumPriority');
                break;
            case '3':
                priorityCell.classList.add('highPriority');
                break;
        }
    }
}

/***/ }),

/***/ "./src/ui_project_button_opr.js":
/*!**************************************!*\
  !*** ./src/ui_project_button_opr.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectButtonOperator)
/* harmony export */ });
/* harmony import */ var _ui_row_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_row_creator */ "./src/ui_row_creator.js");
/* harmony import */ var _sm_project_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sm_project_creator */ "./src/sm_project_creator.js");
/* harmony import */ var _ui_dialog_maker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_dialog_maker */ "./src/ui_dialog_maker.js");




let projectCreator = new _sm_project_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let rowCreator = new _ui_row_creator__WEBPACK_IMPORTED_MODULE_0__["default"]();
let dialogMaker = new _ui_dialog_maker__WEBPACK_IMPORTED_MODULE_2__["default"]();

class ProjectButtonOperator {
    createNewProjectWithUI() {
        let projectTitle = window.prompt("Please input the name of the new project.");
        let project = projectCreator.newProject(projectTitle);
        rowCreator.makeProjectRow(project);
        rowCreator.makeFormRow(project);

        // localStorage
        let existingProjects;
        if (localStorage.projects) {
             existingProjects = localStorage.projects;
             localStorage.projects = existingProjects + '|' + JSON.stringify(project);
        } else {
            localStorage.projects = JSON.stringify(project);
        }
    }
    createNewProjectWithDialog() {
        // make a popup div
        dialogMaker.showProjectDialog();

        // gather data
        let project;
        let form = document.querySelector(`#projectName`);

        // defining function
        function clickHandler() {
            let projectTitle = form.value;
            project = projectCreator.newProject(projectTitle);
            console.log(projectTitle);
            let bg = document.querySelector('.backgroundContainer');
            bg.style.visibility = 'hidden';
            rowCreator.makeProjectRow(project);
            rowCreator.makeFormRow(project);

            // localStorage
            let existingProjects;
            if (localStorage.projects) {
                existingProjects = localStorage.projects;
                localStorage.projects = existingProjects + '|' + JSON.stringify(project);
            } else {
                localStorage.projects = JSON.stringify(project);
            }

            dialogMaker.hideProjectDialog();
            button.removeEventListener('click', clickHandler);
        }
        
        // events
        let button = document.querySelector('#popup_project_button');
        button.addEventListener('click', clickHandler);
    }
}

/***/ }),

/***/ "./src/ui_row_creator.js":
/*!*******************************!*\
  !*** ./src/ui_row_creator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RowCreator)
/* harmony export */ });
/* harmony import */ var _ui_task_button_opr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_task_button_opr */ "./src/ui_task_button_opr.js");
/* harmony import */ var _ui_header_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_header_creator */ "./src/ui_header_creator.js");
/* harmony import */ var _sm_project_deleter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sm_project_deleter */ "./src/sm_project_deleter.js");




let taskButtonOperator = new _ui_task_button_opr__WEBPACK_IMPORTED_MODULE_0__["default"]();
let headerCreator = new _ui_header_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let projectDeleter = new _sm_project_deleter__WEBPACK_IMPORTED_MODULE_2__["default"]();

class RowCreator {
    makeProjectRow(project) {
        let table = document.querySelector('table');
        if (table.children.length == 0) {
            headerCreator.makeHeaderCells();
        }
        let projectRow = document.createElement('tr');
        let projectData = document.createElement('td');
        projectData.setAttribute('colspan', 4);
        projectRow.classList.add('projectRow');
        projectData.textContent = project.title;
        table.appendChild(projectRow);
        projectRow.appendChild(projectData);

        // delete button
        let projectButtonCell = document.createElement('td');
        projectRow.appendChild(projectButtonCell);
        let deleteButton = document.createElement('button');
        deleteButton.textContent = `🗑`;
        projectButtonCell.appendChild(deleteButton);

        // deletion event listener
        deleteButton.addEventListener('click', () => projectDeleter.deleteProject(project));

        // Give ID
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        projectRow.setAttribute('id', `row_${p_titleNoSpaces}`);
    }
    makeFormRow(project) {
        let table = document.querySelector('table');
        let formRow = document.createElement('tr');
        formRow.classList.add('formRow');
        let formRowPriority = document.createElement('td');
        let formRowTitle = document.createElement('td');
        let formRowDescription = document.createElement('td');
        let formRowDueDate = document.createElement('td');
        let formRowButtons = document.createElement('td');

        // Give ID
        let titleNoSpaces = project.title.replaceAll(' ', '_');
        formRow.setAttribute('id', `form_${titleNoSpaces}`);

        // Contents of formRow
        let priorityInput = document.createElement('input');
        priorityInput.setAttribute('type', 'number');
        priorityInput.setAttribute('min', 1);
        priorityInput.setAttribute('max', 3);
        priorityInput.setAttribute('name', 'priorityInput');
        formRowPriority.appendChild(priorityInput);
        
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('name', 'titleInput');
        formRowTitle.appendChild(titleInput);
        
        let descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('name', 'descriptionInput');
        formRowDescription.appendChild(descriptionInput);
        
        let dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type', 'date');
        dueDateInput.setAttribute('name', 'dueDateInput');
        formRowDueDate.appendChild(dueDateInput);

        let submitInput = document.createElement('input');
        submitInput.setAttribute('type', 'submit');
        submitInput.setAttribute('value', 'Add New Task');
        submitInput.addEventListener('click', () => taskButtonOperator.createNewTaskWithinProject(project));
        formRowButtons.appendChild(submitInput);

        // appending columns
        formRow.appendChild(formRowPriority);
        formRow.appendChild(formRowTitle);
        formRow.appendChild(formRowDescription);
        formRow.appendChild(formRowDueDate);
        formRow.appendChild(formRowButtons);

        // Insert formRow after correct projectRow
        table.appendChild(formRow);

        return formRow;
    }
}

/***/ }),

/***/ "./src/ui_task_button_opr.js":
/*!***********************************!*\
  !*** ./src/ui_task_button_opr.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskButtonOperator)
/* harmony export */ });
/* harmony import */ var _sm_task_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sm_task_creator */ "./src/sm_task_creator.js");
/* harmony import */ var _ui_task_row_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_task_row_creator */ "./src/ui_task_row_creator.js");
/* harmony import */ var _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_priority_colorer */ "./src/ui_priority_colorer.js");
/* harmony import */ var _sm_task_assigner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sm_task_assigner */ "./src/sm_task_assigner.js");





let taskCreator = new _sm_task_creator__WEBPACK_IMPORTED_MODULE_0__["default"]();
let taskRowCreator = new _ui_task_row_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let priorityColorer = new _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_2__["default"]();
let assigner = new _sm_task_assigner__WEBPACK_IMPORTED_MODULE_3__["default"]();

class TaskButtonOperator {
    createNewTaskWithinProject(project) {
        // find correct project by formRow ID, under each project
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let formRow = document.querySelector(`#form_${p_titleNoSpaces}`);

        // gather data
        let priority = formRow.querySelector(`input[name="priorityInput"]`).value;
        let title = formRow.querySelector(`input[name="titleInput"]`).value;
        let description = formRow.querySelector(`input[name="descriptionInput"]`).value;
        let dueDate = formRow.querySelector(`input[name="dueDateInput"]`).value;

        // limits checking
        let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let titleContainsSpecialCharacters = specialCharacters.test(title);
        let pastTasks = localStorage.tasks;
        let pastTasksArray = pastTasks ? pastTasks.split('|') : [];
        let titleTaken = false;
        for (let i = 0; i < pastTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(pastTasksArray[i]);
            if (title == retrievedTaskObject.title) {
                titleTaken = true;
                }
            }
        if (titleTaken) {
            alert('Cannot have two tasks with the same title.');
        } else if (title == null || title == '' || title.length > 25) {
            alert('The new task must have a name under 25 characters.');
        } else if (priority == null || priority == '') {
            alert('Please assign a task priority.');
        } else if (titleContainsSpecialCharacters) {
            alert('Task name may only contain letters, numbers and spaces.');
        } else if (priority < 1 || priority > 3) {
            alert('Priority level must be set between 1 and 3.');
        } else if (description.length > 65) {
            alert('The description must be under 65 characters.')
        } else {        
            // reset data
            formRow.querySelector(`input[name="priorityInput"]`).value = '';
            formRow.querySelector(`input[name="titleInput"]`).value = '';
            formRow.querySelector(`input[name="descriptionInput"]`).value = '';
            formRow.querySelector(`input[name="dueDateInput"]`).value = '';
            
            // create task and display it
            let correctProject = project.title;
            let task = taskCreator.newTask(title, description, dueDate, priority, false, correctProject);
            taskRowCreator.makeTaskRow(task, project);

            // assign color to priority column
            priorityColorer.priorityClassAssigner(task);

            // assign task to project
            assigner.assignTask(project, task);

            // localStorage
            let existingTasks;
            if (localStorage.tasks) {
                existingTasks = localStorage.tasks;
                localStorage.tasks = existingTasks + '|' + JSON.stringify(task);
            } else {
                localStorage.tasks = JSON.stringify(task);
            }
        }
    }
}

/***/ }),

/***/ "./src/ui_task_completer.js":
/*!**********************************!*\
  !*** ./src/ui_task_completer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskCompleter)
/* harmony export */ });
/* harmony import */ var _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_tooltip_operator */ "./src/ui_tooltip_operator.js");

let tooltipOperator = new _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_0__["default"]();

class TaskCompleter {
    completeTask(task, project) {
        // store oldTask data (before any changes)
        let oldTask = task;

        // find the correct taskRow
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // assign class for css purposes
        taskRow.classList.add('completedTask');

        // change the task object data
        task.isComplete = true;

        // remove the completeTask button
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[2]);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == oldTask.title) {
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');

        // insert new task into localStorage
        let existingTasks;
        if (localStorage.tasks) {
            existingTasks = localStorage.tasks;
            localStorage.tasks = existingTasks + '|' + JSON.stringify(task);
        } else {
            localStorage.tasks = JSON.stringify(task);
        }

        // add a "not done" button
        let notDoneButton = document.createElement('button');
        notDoneButton.textContent = '✗';
        buttonsCell.appendChild(notDoneButton);
        notDoneButton.addEventListener('click', () => this.unCompleteTask(task, project));
    }
    unCompleteTask(task, project) {
        let oldTask = task;

        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        taskRow.classList.remove('completedTask');
        task.isComplete = false;
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[2]);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == oldTask.title) {
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');

        // insert new task into localStorage
        let existingTasks;
        if (localStorage.tasks) {
            existingTasks = localStorage.tasks;
            localStorage.tasks = existingTasks + '|' + JSON.stringify(task);
        } else {
            localStorage.tasks = JSON.stringify(task);
        }



        // add a "done" button
        let doneButton = document.createElement('button');
        doneButton.textContent = '✓';
        buttonsCell.appendChild(doneButton);
        doneButton.addEventListener('click', () => this.completeTask(task, project));

        // Call tooltip makers
        tooltipOperator.tooltipForComplete(task);
    }
}

/***/ }),

/***/ "./src/ui_task_editor.js":
/*!*******************************!*\
  !*** ./src/ui_task_editor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskEditor)
/* harmony export */ });
/* harmony import */ var _ui_task_completer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_task_completer */ "./src/ui_task_completer.js");
/* harmony import */ var _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_tooltip_operator */ "./src/ui_tooltip_operator.js");
/* harmony import */ var _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_priority_colorer */ "./src/ui_priority_colorer.js");
/* harmony import */ var _sm_task_deleter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sm_task_deleter */ "./src/sm_task_deleter.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");





let taskCompleter = new _ui_task_completer__WEBPACK_IMPORTED_MODULE_0__["default"]();
let tooltipOperator = new _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let priorityColorer = new _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_2__["default"]();
let taskDeleter = new _sm_task_deleter__WEBPACK_IMPORTED_MODULE_3__["default"]();

// external libraries


class TaskEditor {
    editButtonOperator(task, project) {
        if (task.isComplete == true) {
            alert('Cannot edit a completed task.')
        } else {
            let t_titleNoSpaces = task.title.replaceAll(' ', '_');
            let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
            for (let i = 0; i < taskRow.children.length - 1; i++) {
                let cellText = taskRow.children[i].textContent;
                taskRow.children[i].textContent = '';
                let inputBox = document.createElement('input');
                switch (i) {
                    case 0:
                        inputBox.setAttribute('type', 'number');
                        inputBox.setAttribute('min', 1);
                        inputBox.setAttribute('max', 3);
                        inputBox.setAttribute('name', 'priorityInput');
                        inputBox.value = cellText;
                        break;
                    case 1:
                        inputBox.setAttribute('type', 'text');
                        inputBox.setAttribute('name', 'titleInput');
                        inputBox.value = cellText;
                        break;
                    case 2:
                        inputBox.setAttribute('type', 'text');
                        inputBox.setAttribute('name', 'descriptionInput');
                        inputBox.value = cellText;
                        break;
                    case 3:
                        inputBox.setAttribute('type', 'date');
                        inputBox.setAttribute('name', 'dueDateInput');
                        inputBox.value = task.dueDate;
                        break;
                }
                taskRow.children[i].appendChild(inputBox);
            }
            // remove both buttons
            while(taskRow.children[taskRow.children.length - 1].children.length !== 0) { taskRow.children[taskRow.children.length - 1].removeChild(taskRow.children[taskRow.children.length - 1].children[0]); }
            // add a button that okays the changes
            let acceptButton = document.createElement('input');
            acceptButton.setAttribute('type', 'submit');
            acceptButton.setAttribute('value', 'Accept Changes');
            taskRow.children[taskRow.children.length - 1].appendChild(acceptButton);
            // which calls acceptChangesOperator
            acceptButton.addEventListener('click', () => this.acceptChangesOperator(task, project));
        }
    }
    // acceptChangesOperator
    acceptChangesOperator(task, project) {
        // triggers on changes being accepted
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // gather data
        let priority = taskRow.querySelector(`input[name="priorityInput"]`).value;
        let title = taskRow.querySelector(`input[name="titleInput"]`).value;
        let description = taskRow.querySelector(`input[name="descriptionInput"]`).value;
        let dueDate = taskRow.querySelector(`input[name="dueDateInput"]`).value;

        // limits checking
        let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let titleContainsSpecialCharacters = specialCharacters.test(title);
        let pastTasks = localStorage.tasks;
        let pastTasksArray = pastTasks ? pastTasks.split('|') : [];
        let titleTaken = false;
        let oldTitle = task.title;
        for (let j = 0; j < pastTasksArray.length; j++) {
            let retrievedTaskObject = JSON.parse(pastTasksArray[j]);
            if (task.title == retrievedTaskObject.title) {
                pastTasksArray.splice(j, 1)
            }
        }
        for (let i = 0; i < pastTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(pastTasksArray[i]);
            if (title == retrievedTaskObject.title) {
                titleTaken = true;
                }
            }
        if (titleTaken) {
            alert('Cannot have two tasks with the same title.');
        } else if (title == null || title == '' || title.length > 25) {
            alert('The new task must have a name under 25 characters.');
        } else if (priority == null || priority == '') {
            alert('Please assign a task priority.');
        } else if (titleContainsSpecialCharacters) {
            alert('Task name may only contain letters, numbers and spaces.');
        } else if (priority < 1 || priority > 3) {
            alert('Priority level must be set between 1 and 3.');
        } else if (description.length > 65) {
            alert('The description must be under 65 characters.')
        } else {
            // change task data
            task.priority = priority;
            task.title = title;
            task.description = description;
            task.dueDate = dueDate;

            // use date-fns to establish differenceInDays
            if (task.dueDate !== '' || task.dueDate !== null) {
                task.daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(
                    task.dueDate,
                    new Date()
                )    
            }    

            // empty the cells
            for (let i = 0; i < taskRow.children.length - 1; i++) {
                while (taskRow.children[i].firstChild) { taskRow.children[i].removeChild(taskRow.children[i].firstChild) }
            }

            // dueDate cell contents
            if (task.daysLeft > 0) {
                taskRow.children[3].textContent = `To do in ${task.daysLeft} days`;
            } else if (task.daysLeft < 0) {
                taskRow.children[3].textContent = `${-task.daysLeft} days overdue`;
            } else if (task.daysLeft == 0) {
                taskRow.children[3].textContent = `Today`;
            } else if (task.daysLeft == null) {
                taskRow.children[3].textContent = ``;
            }
    
            // re-establish the taskRow
            taskRow.children[0].textContent = task.priority;
            taskRow.children[1].textContent = task.title;
            taskRow.children[2].textContent = task.description;
            
            let new_t_titleNoSpaces = task.title.replaceAll(' ', '_');
            taskRow.id = `task_${new_t_titleNoSpaces}`;
            this.buttonsAdder(task, project, oldTitle);

            // assign color to priority column
            priorityColorer.priorityClassAssigner(task);
        }
    }
    buttonsAdder(task, project, oldTitle) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.firstChild);

        let editButton = document.createElement('button');
        let completeButton = document.createElement('button');
        editButton.textContent = '✎';
        completeButton.textContent = '✓';
        buttonsCell.appendChild(editButton);

        // delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = `🗑`;
        buttonsCell.appendChild(deleteButton);
        buttonsCell.appendChild(completeButton);

        editButton.addEventListener('click', () => this.editButtonOperator(task, project));
        completeButton.addEventListener('click', () => taskCompleter.completeTask(task, project));
        deleteButton.addEventListener('click', () => taskDeleter.deleteTask(task));

        // assign class
        editButton.classList.add('unicode');
        completeButton.classList.add('unicode');
        deleteButton.classList.add('unicode');

        // Call tooltip makers
        tooltipOperator.tooltipForEdit(task);
        tooltipOperator.tooltipForComplete(task);
        tooltipOperator.tooltipForDelete(task);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == oldTitle) {
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');

        // insert task into localStorage
        let existingTasks;
        if (localStorage.tasks) {
            existingTasks = localStorage.tasks;
            localStorage.tasks = existingTasks + '|' + JSON.stringify(task);
        } else {
            localStorage.tasks = JSON.stringify(task);
        }

        console.log(project.tasks);
    }
}

/***/ }),

/***/ "./src/ui_task_row_creator.js":
/*!************************************!*\
  !*** ./src/ui_task_row_creator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskRowCreator)
/* harmony export */ });
/* harmony import */ var _ui_task_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_task_editor */ "./src/ui_task_editor.js");
/* harmony import */ var _ui_task_completer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_task_completer */ "./src/ui_task_completer.js");
/* harmony import */ var _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_tooltip_operator */ "./src/ui_tooltip_operator.js");
/* harmony import */ var _sm_task_deleter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sm_task_deleter */ "./src/sm_task_deleter.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");





let taskEditor = new _ui_task_editor__WEBPACK_IMPORTED_MODULE_0__["default"]();
let taskCompleter = new _ui_task_completer__WEBPACK_IMPORTED_MODULE_1__["default"]();
let tooltipOperator = new _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_2__["default"]();
let taskDeleter = new _sm_task_deleter__WEBPACK_IMPORTED_MODULE_3__["default"]();

// external libraries


class TaskRowCreator {
    makeTaskRow(task, project) {
        // Find the correct project row
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let projectRow = document.querySelector(`#row_${p_titleNoSpaces}`);

        // Create elements of the task row
        let taskRow = document.createElement('tr');
        taskRow.classList.add('taskRow');
        let taskRowPriority = document.createElement('td');
        let taskRowTitle = document.createElement('td');
        let taskRowDescription = document.createElement('td');
        let taskRowDueDate = document.createElement('td');
        let taskRowButtons = document.createElement('td');

        // Centering
        taskRowPriority.classList.add('centered');

        // Date cell
            // 1) understand what format is task.dueDate in. is it a string? an object?
            // answer: it's a string in the 'yyyy-mm-dd' format
            // 2) transform that string into an object data fns can use in its calculations
            // answer: from the documentation it looks like a string is fine
            // 3) establish today
        if (task.dueDate !== '' || task.dueDate !== null) {
            task.daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(
                task.dueDate,
                new Date()
            )    
        }

        // Text contents of the elements
        taskRowPriority.textContent = task.priority;
        taskRowTitle.textContent = task.title;
        taskRowDescription.textContent = task.description;
        if (task.daysLeft > 0) {
            taskRowDueDate.textContent = `To do in ${task.daysLeft} days`;
        } else if (task.daysLeft < 0) {
            taskRowDueDate.textContent = `${-task.daysLeft} days overdue`;
        } else if (task.daysLeft == 0) {
            taskRowDueDate.textContent = `Today`;
        } else if (task.daysLeft == null) {
            taskRowDueDate.textContent = ``;
        }

        // Contents of taskRowButtons
        let editButton = document.createElement('button');
        let completeButton = document.createElement('button');
        editButton.textContent = '✎';
        if (task.isComplete == false) {
            completeButton.textContent = '✓';
        } else {
            completeButton.textContent = '✗';
        }
        taskRowButtons.appendChild(editButton);

        // delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = `🗑`;
        taskRowButtons.appendChild(deleteButton);

        taskRowButtons.appendChild(completeButton);

        // Append elements to taskRow
        taskRow.appendChild(taskRowPriority);
        taskRow.appendChild(taskRowTitle);
        taskRow.appendChild(taskRowDescription);
        taskRow.appendChild(taskRowDueDate);
        taskRow.appendChild(taskRowButtons);

        // Check if task is completed
        if (task.isComplete) {
            taskRow.classList.add('completedTask');
        }

        // Edit Tasks
        editButton.addEventListener('click', () => taskEditor.editButtonOperator(task, project));

        // Complete Tasks
        if (task.isComplete == false) {
            completeButton.addEventListener('click', () => taskCompleter.completeTask(task, project));
        } else {
            completeButton.addEventListener('click', () => taskCompleter.unCompleteTask(task, project));
        }

        // Delete Tasks event
        deleteButton.addEventListener('click', () => taskDeleter.deleteTask(task));

        // assign class
        editButton.classList.add('unicode');
        completeButton.classList.add('unicode');
        deleteButton.classList.add('unicode');

        // Insert taskRow after correct projectRow
        projectRow.insertAdjacentElement('afterend', taskRow);

        // give ID for editing purposes
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        taskRow.setAttribute(`id`, `task_${t_titleNoSpaces}`);

        // Call tooltip makers
        tooltipOperator.tooltipForEdit(task);
        tooltipOperator.tooltipForComplete(task);
        tooltipOperator.tooltipForDelete(task);
    }
}

/***/ }),

/***/ "./src/ui_tooltip_operator.js":
/*!************************************!*\
  !*** ./src/ui_tooltip_operator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooltipOperator)
/* harmony export */ });
class TooltipOperator {
    tooltipForEdit(task) {
        // create tooltip note
        let tooltip = document.createElement('span');
        tooltip.textContent = 'Edit task.'

        // find correct task
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // find parent node (edit button)
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        let editButton = buttonsCell.children[0];

        // assign classes
        editButton.classList.add('tooltipParent');
        tooltip.classList.add('tooltip');

        editButton.setAttribute('style', 'position:relative;');
        editButton.appendChild(tooltip);
    }
    tooltipForComplete(task) {
        // create tooltip note
        let tooltip = document.createElement('span');
        tooltip.textContent = 'Complete task.'

        // find correct task
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // find parent node (edit button)
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        let completeButton = buttonsCell.children[2];

        // assign classes
        completeButton.classList.add('tooltipParent');
        tooltip.classList.add('tooltip');

        completeButton.setAttribute('style', 'position:relative;');
        completeButton.appendChild(tooltip);
    }
    tooltipForDelete(task) {
        // create tooltip note
        let tooltip = document.createElement('span');
        tooltip.textContent = 'Delete task.'

        // find correct task
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // find parent node (edit button)
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        let deleteButton = buttonsCell.children[1];

        // assign classes
        deleteButton.classList.add('tooltipParent');
        tooltip.classList.add('tooltip');

        deleteButton.setAttribute('style', 'position:relative;');
        deleteButton.appendChild(tooltip);
    }
}

/***/ }),

/***/ "./src/Graduate-Regular.ttf":
/*!**********************************!*\
  !*** ./src/Graduate-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64e4e90410e2cf37d41c.ttf";

/***/ }),

/***/ "./src/arrow.png":
/*!***********************!*\
  !*** ./src/arrow.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7b086038e16bf99f544.png";

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = compareLocalAsc(_dateLeft, _dateRight);
  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));

  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_project_button_opr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_project_button_opr */ "./src/ui_project_button_opr.js");
/* harmony import */ var _sm_project_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sm_project_creator */ "./src/sm_project_creator.js");
/* harmony import */ var _sm_task_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sm_task_creator */ "./src/sm_task_creator.js");
/* harmony import */ var _ui_row_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui_row_creator */ "./src/ui_row_creator.js");
/* harmony import */ var _ui_task_row_creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui_task_row_creator */ "./src/ui_task_row_creator.js");
/* harmony import */ var _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui_priority_colorer */ "./src/ui_priority_colorer.js");
/* harmony import */ var _ui_bg_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui_bg_drawer */ "./src/ui_bg_drawer.js");
/* harmony import */ var _ui_dialog_maker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui_dialog_maker */ "./src/ui_dialog_maker.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// importing










// initialize instances
let projectButtonOperator = new _ui_project_button_opr__WEBPACK_IMPORTED_MODULE_0__["default"]();
let projectCreator = new _sm_project_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let taskCreator = new _sm_task_creator__WEBPACK_IMPORTED_MODULE_2__["default"]();
let rowCreator = new _ui_row_creator__WEBPACK_IMPORTED_MODULE_3__["default"]();
let taskRowCreator = new _ui_task_row_creator__WEBPACK_IMPORTED_MODULE_4__["default"]();
let priorityColorer = new _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_5__["default"]();
let backgroundDrawer = new _ui_bg_drawer__WEBPACK_IMPORTED_MODULE_6__["default"]();
let dialogMaker = new _ui_dialog_maker__WEBPACK_IMPORTED_MODULE_7__["default"]();

// testing
dialogMaker.createProjectDialog();
let projectButton = document.querySelector('#btn_createNewProject');
projectButton.addEventListener('click', projectButtonOperator.createNewProjectWithDialog);

// retrieving localStorage for projects
let pastProjects = localStorage.projects;
let pastProjectsArray = pastProjects ? pastProjects.split('|') : [];
let projectObjectsArray = [];
for (let i = 0; i < pastProjectsArray.length; i++) {
    let retrievedObject = JSON.parse(pastProjectsArray[i]);
    let newProjectObject = projectCreator.newProject(retrievedObject.title);
    rowCreator.makeProjectRow(newProjectObject);
    rowCreator.makeFormRow(newProjectObject);
    projectObjectsArray.push(newProjectObject);
}
if (pastProjectsArray.length == 0) {
    // draw background
    backgroundDrawer.drawBackground();
}

// retrieve localStorage for tasks
let pastTasks = localStorage.tasks;
let pastTasksArray = pastTasks ? pastTasks.split('|') : [];
if (pastTasksArray.length > 0) {
    for (let i = 0; i < pastTasksArray.length; i++) {
        let retrievedTaskObject = JSON.parse(pastTasksArray[i]);
        let newTaskObject = taskCreator.newTask(retrievedTaskObject.title, retrievedTaskObject.description, retrievedTaskObject.dueDate, retrievedTaskObject.priority, retrievedTaskObject.isComplete, retrievedTaskObject.partOfProject);
        let correctProject = projectObjectsArray.find(i => i.title == newTaskObject.partOfProject);
        taskRowCreator.makeTaskRow(newTaskObject, correctProject);
        priorityColorer.priorityClassAssigner(newTaskObject);
        if (newTaskObject.isComplete == true) {
            let t_titleNoSpaces = newTaskObject.title.replaceAll(' ', '_');
            let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);            
            taskRow.classList.add('completedTask');
        }
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVkseUJBQXlCLHVCQUF1QixhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssZ0NBQWdDLDRCQUE0Qiw0QkFBNEIsNkJBQTZCLDRCQUE0QixrQ0FBa0MsS0FBSyxl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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NsYXNzX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jbGFzc190YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc21fcHJvamVjdF9jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc21fcHJvamVjdF9kZWxldGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc21fdGFza19hc3NpZ25lci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Rhc2tfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Rhc2tfZGVsZXRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX2JnX2RyYXdlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX2RpYWxvZ19tYWtlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX2hlYWRlcl9jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfcHJpb3JpdHlfY29sb3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Byb2plY3RfYnV0dG9uX29wci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Jvd19jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdGFza19idXR0b25fb3ByLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdGFza19jb21wbGV0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV90YXNrX2VkaXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Rhc2tfcm93X2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV90b29sdGlwX29wZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0dyYWR1YXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLW1haW5CbHVlOiAjNUM5OEMxO1xyXG4gICAgLS1vZmZXaGl0ZTogI0VGRjBGNDtcclxuICAgIC0tbGlnaHRHcmV5OiAjOUY5MjkzO1xyXG4gICAgLS1kYXJrR3JleTogIzgwNkM2NDtcclxuICAgIC0tYmFja2dyb3VuZEJsdWU6ICMyOTc1QTc7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAvKiBBZGQgYW55IG90aGVyIHN0eWxlcyB5b3Ugd2FudCB0byByZXNldCAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qIEFkZGl0aW9uYWwgc3R5bGVzIHRvIG1hdGNoIHlvdXIgZGVzaWduICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogb3IgYW55IG90aGVyIGRlc2lyZWQgY29sb3IgKi9cclxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiBvciBhbnkgb3RoZXIgZGVzaXJlZCBjb2xvciAqL1xyXG4gICAgLyogQWRkIG1vcmUgc3R5bGVzIGFzIG5lZWRlZCAqL1xyXG4gIH1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbn1cclxuXHJcbi51bmljb2RlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgU3ltYm9sJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dyYWR1YXRlJztcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ0dyYWR1YXRlJztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0bztcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRCbHVlKTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDUpIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxudGQgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxyXG59XHJcblxyXG5pbnB1dCwgaW5wdXRbdHlwZT1cImRhdGVcIl0sIHRleHRhcmVhLCBzZWxlY3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbnRkIGlucHV0LCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ0dyYWR1YXRlJztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtHcmV5KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5cclxudGQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkJsdWUpO1xyXG59XHJcblxyXG50ZCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbkJsdWUpO1xyXG59XHJcblxyXG50ZCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbn1cclxuXHJcbiN0YXNrc1dpbmRvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0Um93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0Um93IHRkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnRhc2tSb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLmhlYWRlclJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xyXG59XHJcblxyXG4uaGVhZGVyUm93IHRkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNvbXBsZXRlZFRhc2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3R0b206IDkwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxufVxyXG5cclxuLnRvb2x0aXBQYXJlbnQ6aG92ZXIgLnRvb2x0aXAge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm1lZGl1bVByaW9yaXR5IHtcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbi5oaWdoUHJpb3JpdHkge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogbWFyb29uO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZEltYWdlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuLnBvcHVwX3Byb2plY3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnBvcHVwX3Byb2plY3QgcCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucG9wdXBfcHJvamVjdCBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3B1cF9wcm9qZWN0IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NTFweCkge1xyXG4gICAgI2NvbnRhaW5lciB7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osYUFBYTtJQUNiLDJDQUEyQztJQUMzQyw2QkFBNkIsRUFBRSwrQkFBK0I7SUFDOUQsY0FBYyxFQUFFLCtCQUErQjtJQUMvQyw4QkFBOEI7RUFDaEM7O0FBRUY7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQXFEO0lBQ3JELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJO0lBQ0E7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tbWFpbkJsdWU6ICM1Qzk4QzE7XFxyXFxuICAgIC0tb2ZmV2hpdGU6ICNFRkYwRjQ7XFxyXFxuICAgIC0tbGlnaHRHcmV5OiAjOUY5MjkzO1xcclxcbiAgICAtLWRhcmtHcmV5OiAjODA2QzY0O1xcclxcbiAgICAtLWJhY2tncm91bmRCbHVlOiAjMjk3NUE3O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAvKiBBZGQgYW55IG90aGVyIHN0eWxlcyB5b3Ugd2FudCB0byByZXNldCAqL1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIC8qIEFkZGl0aW9uYWwgc3R5bGVzIHRvIG1hdGNoIHlvdXIgZGVzaWduICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBvciBhbnkgb3RoZXIgZGVzaXJlZCBjb2xvciAqL1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogb3IgYW55IG90aGVyIGRlc2lyZWQgY29sb3IgKi9cXHJcXG4gICAgLyogQWRkIG1vcmUgc3R5bGVzIGFzIG5lZWRlZCAqL1xcclxcbiAgfVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0dyYWR1YXRlJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vR3JhZHVhdGUtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxufVxcclxcblxcclxcbi51bmljb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBTeW1ib2wnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrR3JleSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxudHIge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoMikge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDUpIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZCBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgICBcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSwgdGV4dGFyZWEsIHNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZCBpbnB1dCwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrR3JleSk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcblxcclxcbnRkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcXHJcXG59XFxyXFxuXFxyXFxudGQgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbkJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG50ZCBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzV2luZG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFJvdyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQmx1ZSk7XFxyXFxuICAgIGhlaWdodDozNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFJvdyB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tSb3cge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclJvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJSb3cgdGQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWRUYXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm90dG9tOiA5MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcFBhcmVudDpob3ZlciAudG9vbHRpcCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW1Qcmlvcml0eSB7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWdoUHJpb3JpdHkge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IG1hcm9vbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZEltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9wcm9qZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmRCbHVlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9wcm9qZWN0IHAge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9wcm9qZWN0IGlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkJsdWUpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfcHJvamVjdCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjUxcHgpIHtcXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlLCBwYXJ0T2ZQcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSxcclxuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMuZGF5c0xlZnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFydE9mUHJvamVjdCA9IHBhcnRPZlByb2plY3Q7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL2NsYXNzX3Byb2plY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdENyZWF0b3Ige1xyXG4gICAgbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgICB9XHJcbiAgICBlZGl0UHJvamVjdChwcm9qZWN0LCBuZXdUaXRsZSkge1xyXG4gICAgICAgIHByb2plY3QudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZWxldGVyIHtcclxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIC8vIGZpbmQgdGhlIHByb2plY3RSb3dcclxuICAgICAgICBsZXQgcF90aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgcHJvamVjdFJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyb3dfJHtwX3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGFibGVcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgcHJvamVjdCByb3dcclxuICAgICAgICB0YWJsZS5yZW1vdmVDaGlsZChwcm9qZWN0Um93KTtcclxuXHJcbiAgICAgICAgLy8gc2F2ZSBwcm9qZWN0IHRpdGxlXHJcbiAgICAgICAgbGV0IG15UHJvamVjdFRpdGxlID0gcHJvamVjdC50aXRsZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hlcmUgYXJlIHRoZSBwcm9qZWN0IHRhc2tzOicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza3MpO1xyXG5cclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHByb2plY3QncyB0YXNrc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRhc2tzW2ldLnRpdGxlO1xyXG4gICAgICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcbiAgICAgICAgICAgIHRhYmxlLnJlbW92ZUNoaWxkKHRhc2tSb3cpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB0YXNrIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICAgIGxldCBsb2NhbFRhc2tzQXJyYXkgPSBsb2NhbFN0b3JhZ2UudGFza3Muc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXRyaWV2ZWRUYXNrT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFRhc2tzQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGxvY2FsVGFza3NBcnJheS5qb2luKCd8Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgcHJvamVjdCBmcm9tIGxvY2FsU3RvcmFlXHJcbiAgICAgICAgbGV0IGxvY2FsUHJvamVjdHNBcnJheSA9IGxvY2FsU3RvcmFnZS5wcm9qZWN0cy5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXRyaWV2ZWRQcm9qZWN0T2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFByb2plY3RzQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICBpZiAocmV0cmlldmVkUHJvamVjdE9iamVjdC50aXRsZSA9PSBteVByb2plY3RUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxQcm9qZWN0c0FycmF5LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IGxvY2FsUHJvamVjdHNBcnJheS5qb2luKCd8Jyk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSByZWxldmFudCBmb3JtUm93XHJcbiAgICAgICAgbGV0IGZvcm1Sb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZm9ybV8ke3BfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICB0YWJsZS5yZW1vdmVDaGlsZChmb3JtUm93KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2lnbmVyIHtcclxuICAgIGFzc2lnblRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vY2xhc3NfdGFzayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ3JlYXRvclxyXG57XHJcbiAgICBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUsIHBhcnRPZlByb2plY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSwgcGFydE9mUHJvamVjdClcclxuICAgIH1cclxuICAgIGVkaXRUYXNrKHRhc2ssIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0YXNrLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgY29tcGxldGVUYXNrKHRhc2spIHtcclxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0RlbGV0ZXIge1xyXG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGl0bGVcclxuICAgICAgICBsZXQgb2xkVGl0bGUgPSB0YXNrLnRpdGxlO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRhc2tSb3dcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRhYmxlXHJcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlQ2hpbGRcclxuICAgICAgICB0YWJsZS5yZW1vdmVDaGlsZCh0YXNrUm93KTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCB0YXNrIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGxldCBsb2NhbFRhc2tzQXJyYXkgPSBsb2NhbFN0b3JhZ2UudGFza3Muc3BsaXQoJ3wnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmV0cmlldmVkVGFza09iamVjdCA9IEpTT04ucGFyc2UobG9jYWxUYXNrc0FycmF5W2ldKTtcclxuICAgICAgICAgICAgaWYgKHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUgPT0gb2xkVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsVGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBsb2NhbFRhc2tzQXJyYXkuam9pbignfCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGFycm93IGZyb20gJy4vYXJyb3cucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmREcmF3ZXIgIHtcclxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIC8vIGZpbmQgdGFza3NXaW5kb3dcclxuICAgICAgICBsZXQgdGFza3NXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3NXaW5kb3cnKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgZGl2IGZvciB0aGUgZHJhd2luZ1xyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kQ29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBvZiBiYWNrZ3JvdW5kQ29udGFpbmVyXHJcbiAgICAgICAgbGV0IGJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5zZXRBdHRyaWJ1dGUoYHNyY2AsIGAke2Fycm93fWApO1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kSW1hZ2UnKTtcclxuXHJcbiAgICAgICAgLy8gYXBwZW5kIHRoaW5ncyB0byB0aGluZ3NcclxuICAgICAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSk7XHJcbiAgICAgICAgdGFza3NXaW5kb3cuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZENvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVCYWNrZ3JvdW5kKCkge1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dNYWtlciB7XHJcbiAgICBjcmVhdGVQcm9qZWN0RGlhbG9nKCkge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBkaXZcclxuICAgICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNsYXNzXHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfcHJvamVjdCcpO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdG8gdGFza1dpbmRvd1xyXG4gICAgICAgIGxldCB0YXNrc1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrc1dpbmRvdycpO1xyXG4gICAgICAgIHRhc2tzV2luZG93LmFwcGVuZENoaWxkKHBvcHVwKTtcclxuXHJcbiAgICAgICAgLy8gaGlkZSBieSBkZWZhdWx0XHJcbiAgICAgICAgcG9wdXAuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyB0ZXh0XHJcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIHRoZSBuYW1lIG9mIHlvdXIgbmV3IHByb2plY3Q6XCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgICAgICAgLy8gZm9ybVxyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBmb3JtLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgZm9ybS5uYW1lID0gJ3Byb2plY3ROYW1lJztcclxuICAgICAgICBmb3JtLmlkID0gJ3Byb2plY3ROYW1lJztcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgICAgLy8gc3VibWl0XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBidXR0b24udmFsdWUgPSBcIkNyZWF0ZVwiO1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9ICdwb3B1cF9wcm9qZWN0X2J1dHRvbic7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIH1cclxuICAgIHNob3dQcm9qZWN0RGlhbG9nKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9wcm9qZWN0Jyk7XHJcbiAgICAgICAgcG9wdXAuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxuICAgIGhpZGVQcm9qZWN0RGlhbG9nKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9wcm9qZWN0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInByb2plY3ROYW1lXCJdYCkudmFsdWUgPSBgYDtcclxuICAgICAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDcmVhdG9yIHtcclxuICAgIG1ha2VIZWFkZXJDZWxscygpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJSb3cnKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlclJvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgaGVhZGVyUm93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBoZWFkZXJSb3dEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlclJvd0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBoZWFkZXJSb3dCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBcclxuICAgICAgICBoZWFkZXJSb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgICAgICAgaGVhZGVyUm93VGl0bGUudGV4dENvbnRlbnQgPSAnVGFzayc7XHJcbiAgICAgICAgaGVhZGVyUm93RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgICAgIGhlYWRlclJvd0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xyXG4gICAgICAgIGhlYWRlclJvd0J1dHRvbnMudGV4dENvbnRlbnQgPSAnQ29udHJvbHMnO1xyXG5cclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93UHJpb3JpdHkpO1xyXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXJSb3dUaXRsZSk7XHJcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlclJvd0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93RHVlRGF0ZSk7XHJcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlclJvd0J1dHRvbnMpO1xyXG4gICAgXHJcbiAgICAgICAgdGFibGUucHJlcGVuZChoZWFkZXJSb3cpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpb3JpdHlDb2xvcmVyIHtcclxuICAgIHByaW9yaXR5Q2xhc3NBc3NpZ25lcih0YXNrKSB7XHJcbiAgICAgICAgLy8gZmluZCB0YXNrUm93XHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgY29ycmVjdCB0ZFxyXG4gICAgICAgIGxldCBwcmlvcml0eUNlbGwgPSB0YXNrUm93LmNoaWxkcmVuWzBdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgYW55IHByZXZpb3VzIGNsYXNzZXNcclxuICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaFByaW9yaXR5Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bVByaW9yaXR5Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2xvd1ByaW9yaXR5Jyk7XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBuZXcgY2xhc3NcclxuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5Q2VsbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUm93Q3JlYXRvciBmcm9tIFwiLi91aV9yb3dfY3JlYXRvclwiO1xyXG5pbXBvcnQgUHJvamVjdENyZWF0b3IgZnJvbSBcIi4vc21fcHJvamVjdF9jcmVhdG9yXCI7XHJcbmltcG9ydCBEaWFsb2dNYWtlciBmcm9tIFwiLi91aV9kaWFsb2dfbWFrZXJcIjtcclxuXHJcbmxldCBwcm9qZWN0Q3JlYXRvciA9IG5ldyBQcm9qZWN0Q3JlYXRvcigpO1xyXG5sZXQgcm93Q3JlYXRvciA9IG5ldyBSb3dDcmVhdG9yKCk7XHJcbmxldCBkaWFsb2dNYWtlciA9IG5ldyBEaWFsb2dNYWtlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdEJ1dHRvbk9wZXJhdG9yIHtcclxuICAgIGNyZWF0ZU5ld1Byb2plY3RXaXRoVUkoKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJQbGVhc2UgaW5wdXQgdGhlIG5hbWUgb2YgdGhlIG5ldyBwcm9qZWN0LlwiKTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RDcmVhdG9yLm5ld1Byb2plY3QocHJvamVjdFRpdGxlKTtcclxuICAgICAgICByb3dDcmVhdG9yLm1ha2VQcm9qZWN0Um93KHByb2plY3QpO1xyXG4gICAgICAgIHJvd0NyZWF0b3IubWFrZUZvcm1Sb3cocHJvamVjdCk7XHJcblxyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGxldCBleGlzdGluZ1Byb2plY3RzO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UucHJvamVjdHMpIHtcclxuICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UucHJvamVjdHM7XHJcbiAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBleGlzdGluZ1Byb2plY3RzICsgJ3wnICsgSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlTmV3UHJvamVjdFdpdGhEaWFsb2coKSB7XHJcbiAgICAgICAgLy8gbWFrZSBhIHBvcHVwIGRpdlxyXG4gICAgICAgIGRpYWxvZ01ha2VyLnNob3dQcm9qZWN0RGlhbG9nKCk7XHJcblxyXG4gICAgICAgIC8vIGdhdGhlciBkYXRhXHJcbiAgICAgICAgbGV0IHByb2plY3Q7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdE5hbWVgKTtcclxuXHJcbiAgICAgICAgLy8gZGVmaW5pbmcgZnVuY3Rpb25cclxuICAgICAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBmb3JtLnZhbHVlO1xyXG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdENyZWF0b3IubmV3UHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgICAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZENvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBiZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIHJvd0NyZWF0b3IubWFrZVByb2plY3RSb3cocHJvamVjdCk7XHJcbiAgICAgICAgICAgIHJvd0NyZWF0b3IubWFrZUZvcm1Sb3cocHJvamVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgbGV0IGV4aXN0aW5nUHJvamVjdHM7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UucHJvamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UucHJvamVjdHM7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBleGlzdGluZ1Byb2plY3RzICsgJ3wnICsgSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGlhbG9nTWFrZXIuaGlkZVByb2plY3REaWFsb2coKTtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZXZlbnRzXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cF9wcm9qZWN0X2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFza0J1dHRvbk9wZXJhdG9yIGZyb20gXCIuL3VpX3Rhc2tfYnV0dG9uX29wclwiO1xyXG5pbXBvcnQgSGVhZGVyQ3JlYXRvciBmcm9tIFwiLi91aV9oZWFkZXJfY3JlYXRvclwiO1xyXG5pbXBvcnQgUHJvamVjdERlbGV0ZXIgZnJvbSBcIi4vc21fcHJvamVjdF9kZWxldGVyXCI7XHJcblxyXG5sZXQgdGFza0J1dHRvbk9wZXJhdG9yID0gbmV3IFRhc2tCdXR0b25PcGVyYXRvcigpO1xyXG5sZXQgaGVhZGVyQ3JlYXRvciA9IG5ldyBIZWFkZXJDcmVhdG9yKCk7XHJcbmxldCBwcm9qZWN0RGVsZXRlciA9IG5ldyBQcm9qZWN0RGVsZXRlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93Q3JlYXRvciB7XHJcbiAgICBtYWtlUHJvamVjdFJvdyhwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICAgICAgICBpZiAodGFibGUuY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgaGVhZGVyQ3JlYXRvci5tYWtlSGVhZGVyQ2VsbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByb2plY3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgcHJvamVjdERhdGEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgNCk7XHJcbiAgICAgICAgcHJvamVjdFJvdy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Um93Jyk7XHJcbiAgICAgICAgcHJvamVjdERhdGEudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHByb2plY3RSb3cpO1xyXG4gICAgICAgIHByb2plY3RSb3cuYXBwZW5kQ2hpbGQocHJvamVjdERhdGEpO1xyXG5cclxuICAgICAgICAvLyBkZWxldGUgYnV0dG9uXHJcbiAgICAgICAgbGV0IHByb2plY3RCdXR0b25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBwcm9qZWN0Um93LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25DZWxsKTtcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gYPCfl5FgO1xyXG4gICAgICAgIHByb2plY3RCdXR0b25DZWxsLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIC8vIGRlbGV0aW9uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHJvamVjdERlbGV0ZXIuZGVsZXRlUHJvamVjdChwcm9qZWN0KSk7XHJcblxyXG4gICAgICAgIC8vIEdpdmUgSURcclxuICAgICAgICBsZXQgcF90aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBwcm9qZWN0Um93LnNldEF0dHJpYnV0ZSgnaWQnLCBgcm93XyR7cF90aXRsZU5vU3BhY2VzfWApO1xyXG4gICAgfVxyXG4gICAgbWFrZUZvcm1Sb3cocHJvamVjdCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xyXG4gICAgICAgIGxldCBmb3JtUm93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBmb3JtUm93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBmb3JtUm93RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBmb3JtUm93RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3dCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgLy8gR2l2ZSBJRFxyXG4gICAgICAgIGxldCB0aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBmb3JtUm93LnNldEF0dHJpYnV0ZSgnaWQnLCBgZm9ybV8ke3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIENvbnRlbnRzIG9mIGZvcm1Sb3dcclxuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIDEpO1xyXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCAzKTtcclxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eUlucHV0Jyk7XHJcbiAgICAgICAgZm9ybVJvd1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGVJbnB1dCcpO1xyXG4gICAgICAgIGZvcm1Sb3dUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uSW5wdXQnKTtcclxuICAgICAgICBmb3JtUm93RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlSW5wdXQnKTtcclxuICAgICAgICBmb3JtUm93RHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG5cclxuICAgICAgICBsZXQgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHN1Ym1pdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgICAgICBzdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBOZXcgVGFzaycpO1xyXG4gICAgICAgIHN1Ym1pdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0J1dHRvbk9wZXJhdG9yLmNyZWF0ZU5ld1Rhc2tXaXRoaW5Qcm9qZWN0KHByb2plY3QpKTtcclxuICAgICAgICBmb3JtUm93QnV0dG9ucy5hcHBlbmRDaGlsZChzdWJtaXRJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZGluZyBjb2x1bW5zXHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93UHJpb3JpdHkpO1xyXG4gICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZm9ybVJvd1RpdGxlKTtcclxuICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKGZvcm1Sb3dEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93RHVlRGF0ZSk7XHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93QnV0dG9ucyk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBmb3JtUm93IGFmdGVyIGNvcnJlY3QgcHJvamVjdFJvd1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ybVJvdztcclxuICAgIH1cclxufSIsImltcG9ydCBUYXNrQ3JlYXRvciBmcm9tIFwiLi9zbV90YXNrX2NyZWF0b3JcIjtcclxuaW1wb3J0IFRhc2tSb3dDcmVhdG9yIGZyb20gXCIuL3VpX3Rhc2tfcm93X2NyZWF0b3JcIjtcclxuaW1wb3J0IFByaW9yaXR5Q29sb3JlciBmcm9tIFwiLi91aV9wcmlvcml0eV9jb2xvcmVyXCI7XHJcbmltcG9ydCBBc3NpZ25lciBmcm9tIFwiLi9zbV90YXNrX2Fzc2lnbmVyXCI7XHJcblxyXG5sZXQgdGFza0NyZWF0b3IgPSBuZXcgVGFza0NyZWF0b3IoKTtcclxubGV0IHRhc2tSb3dDcmVhdG9yID0gbmV3IFRhc2tSb3dDcmVhdG9yKCk7XHJcbmxldCBwcmlvcml0eUNvbG9yZXIgPSBuZXcgUHJpb3JpdHlDb2xvcmVyKCk7XHJcbmxldCBhc3NpZ25lciA9IG5ldyBBc3NpZ25lcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0J1dHRvbk9wZXJhdG9yIHtcclxuICAgIGNyZWF0ZU5ld1Rhc2tXaXRoaW5Qcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICAvLyBmaW5kIGNvcnJlY3QgcHJvamVjdCBieSBmb3JtUm93IElELCB1bmRlciBlYWNoIHByb2plY3RcclxuICAgICAgICBsZXQgcF90aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgZm9ybVJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmb3JtXyR7cF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBnYXRoZXIgZGF0YVxyXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInByaW9yaXR5SW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJ0aXRsZUlucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25JbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlID0gZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZHVlRGF0ZUlucHV0XCJdYCkudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGxpbWl0cyBjaGVja2luZ1xyXG4gICAgICAgIGxldCBzcGVjaWFsQ2hhcmFjdGVycyA9IC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XSsvO1xyXG4gICAgICAgIGxldCB0aXRsZUNvbnRhaW5zU3BlY2lhbENoYXJhY3RlcnMgPSBzcGVjaWFsQ2hhcmFjdGVycy50ZXN0KHRpdGxlKTtcclxuICAgICAgICBsZXQgcGFzdFRhc2tzID0gbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgICAgIGxldCBwYXN0VGFza3NBcnJheSA9IHBhc3RUYXNrcyA/IHBhc3RUYXNrcy5zcGxpdCgnfCcpIDogW107XHJcbiAgICAgICAgbGV0IHRpdGxlVGFrZW4gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3RUYXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXRyaWV2ZWRUYXNrT2JqZWN0ID0gSlNPTi5wYXJzZShwYXN0VGFza3NBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIGlmICh0aXRsZSA9PSByZXRyaWV2ZWRUYXNrT2JqZWN0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVRha2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aXRsZVRha2VuKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdDYW5ub3QgaGF2ZSB0d28gdGFza3Mgd2l0aCB0aGUgc2FtZSB0aXRsZS4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpdGxlID09IG51bGwgfHwgdGl0bGUgPT0gJycgfHwgdGl0bGUubGVuZ3RoID4gMjUpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZSBuZXcgdGFzayBtdXN0IGhhdmUgYSBuYW1lIHVuZGVyIDI1IGNoYXJhY3RlcnMuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PSBudWxsIHx8IHByaW9yaXR5ID09ICcnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgYXNzaWduIGEgdGFzayBwcmlvcml0eS4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpdGxlQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVycykge1xyXG4gICAgICAgICAgICBhbGVydCgnVGFzayBuYW1lIG1heSBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycyBhbmQgc3BhY2VzLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPCAxIHx8IHByaW9yaXR5ID4gMykge1xyXG4gICAgICAgICAgICBhbGVydCgnUHJpb3JpdHkgbGV2ZWwgbXVzdCBiZSBzZXQgYmV0d2VlbiAxIGFuZCAzLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoID4gNjUpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIHVuZGVyIDY1IGNoYXJhY3RlcnMuJylcclxuICAgICAgICB9IGVsc2UgeyAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IGRhdGFcclxuICAgICAgICAgICAgZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwicHJpb3JpdHlJbnB1dFwiXWApLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRpdGxlSW5wdXRcIl1gKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkZXNjcmlwdGlvbklucHV0XCJdYCkudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZHVlRGF0ZUlucHV0XCJdYCkudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0YXNrIGFuZCBkaXNwbGF5IGl0XHJcbiAgICAgICAgICAgIGxldCBjb3JyZWN0UHJvamVjdCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGFza0NyZWF0b3IubmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmYWxzZSwgY29ycmVjdFByb2plY3QpO1xyXG4gICAgICAgICAgICB0YXNrUm93Q3JlYXRvci5tYWtlVGFza1Jvdyh0YXNrLCBwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBjb2xvciB0byBwcmlvcml0eSBjb2x1bW5cclxuICAgICAgICAgICAgcHJpb3JpdHlDb2xvcmVyLnByaW9yaXR5Q2xhc3NBc3NpZ25lcih0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0YXNrIHRvIHByb2plY3RcclxuICAgICAgICAgICAgYXNzaWduZXIuYXNzaWduVGFzayhwcm9qZWN0LCB0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdUYXNrcztcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcyA9IGxvY2FsU3RvcmFnZS50YXNrcztcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGV4aXN0aW5nVGFza3MgKyAnfCcgKyBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRvb2x0aXBPcGVyYXRvciBmcm9tIFwiLi91aV90b29sdGlwX29wZXJhdG9yXCI7XHJcbmxldCB0b29sdGlwT3BlcmF0b3IgPSBuZXcgVG9vbHRpcE9wZXJhdG9yKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ29tcGxldGVyIHtcclxuICAgIGNvbXBsZXRlVGFzayh0YXNrLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gc3RvcmUgb2xkVGFzayBkYXRhIChiZWZvcmUgYW55IGNoYW5nZXMpXHJcbiAgICAgICAgbGV0IG9sZFRhc2sgPSB0YXNrO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBjb3JyZWN0IHRhc2tSb3dcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBhc3NpZ24gY2xhc3MgZm9yIGNzcyBwdXJwb3Nlc1xyXG4gICAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkVGFzaycpO1xyXG5cclxuICAgICAgICAvLyBjaGFuZ2UgdGhlIHRhc2sgb2JqZWN0IGRhdGFcclxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGNvbXBsZXRlVGFzayBidXR0b25cclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgYnV0dG9uc0NlbGwucmVtb3ZlQ2hpbGQoYnV0dG9uc0NlbGwuY2hpbGRyZW5bMl0pO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhc2sgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbGV0IGxvY2FsVGFza3NBcnJheSA9IGxvY2FsU3RvcmFnZS50YXNrcy5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXRyaWV2ZWRUYXNrT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFRhc2tzQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICBpZiAocmV0cmlldmVkVGFza09iamVjdC50aXRsZSA9PSBvbGRUYXNrLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gbG9jYWxUYXNrc0FycmF5LmpvaW4oJ3wnKTtcclxuXHJcbiAgICAgICAgLy8gaW5zZXJ0IG5ldyB0YXNrIGludG8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbGV0IGV4aXN0aW5nVGFza3M7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBleGlzdGluZ1Rhc2tzICsgJ3wnICsgSlNPTi5zdHJpbmdpZnkodGFzayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkodGFzayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGQgYSBcIm5vdCBkb25lXCIgYnV0dG9uXHJcbiAgICAgICAgbGV0IG5vdERvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBub3REb25lQnV0dG9uLnRleHRDb250ZW50ID0gJ+Kclyc7XHJcbiAgICAgICAgYnV0dG9uc0NlbGwuYXBwZW5kQ2hpbGQobm90RG9uZUJ1dHRvbik7XHJcbiAgICAgICAgbm90RG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudW5Db21wbGV0ZVRhc2sodGFzaywgcHJvamVjdCkpO1xyXG4gICAgfVxyXG4gICAgdW5Db21wbGV0ZVRhc2sodGFzaywgcHJvamVjdCkge1xyXG4gICAgICAgIGxldCBvbGRUYXNrID0gdGFzaztcclxuXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICB0YXNrUm93LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZFRhc2snKTtcclxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgYnV0dG9uc0NlbGwucmVtb3ZlQ2hpbGQoYnV0dG9uc0NlbGwuY2hpbGRyZW5bMl0pO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhc2sgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbGV0IGxvY2FsVGFza3NBcnJheSA9IGxvY2FsU3RvcmFnZS50YXNrcy5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXRyaWV2ZWRUYXNrT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFRhc2tzQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICBpZiAocmV0cmlldmVkVGFza09iamVjdC50aXRsZSA9PSBvbGRUYXNrLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gbG9jYWxUYXNrc0FycmF5LmpvaW4oJ3wnKTtcclxuXHJcbiAgICAgICAgLy8gaW5zZXJ0IG5ldyB0YXNrIGludG8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbGV0IGV4aXN0aW5nVGFza3M7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBleGlzdGluZ1Rhc2tzICsgJ3wnICsgSlNPTi5zdHJpbmdpZnkodGFzayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkodGFzayk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGFkZCBhIFwiZG9uZVwiIGJ1dHRvblxyXG4gICAgICAgIGxldCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJMnO1xyXG4gICAgICAgIGJ1dHRvbnNDZWxsLmFwcGVuZENoaWxkKGRvbmVCdXR0b24pO1xyXG4gICAgICAgIGRvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNvbXBsZXRlVGFzayh0YXNrLCBwcm9qZWN0KSk7XHJcblxyXG4gICAgICAgIC8vIENhbGwgdG9vbHRpcCBtYWtlcnNcclxuICAgICAgICB0b29sdGlwT3BlcmF0b3IudG9vbHRpcEZvckNvbXBsZXRlKHRhc2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2tDb21wbGV0ZXIgZnJvbSBcIi4vdWlfdGFza19jb21wbGV0ZXJcIjtcclxuaW1wb3J0IFRvb2x0aXBPcGVyYXRvciBmcm9tIFwiLi91aV90b29sdGlwX29wZXJhdG9yXCI7XHJcbmltcG9ydCBQcmlvcml0eUNvbG9yZXIgZnJvbSBcIi4vdWlfcHJpb3JpdHlfY29sb3JlclwiO1xyXG5pbXBvcnQgVGFza0RlbGV0ZXIgZnJvbSBcIi4vc21fdGFza19kZWxldGVyXCI7XHJcblxyXG5sZXQgdGFza0NvbXBsZXRlciA9IG5ldyBUYXNrQ29tcGxldGVyKCk7XHJcbmxldCB0b29sdGlwT3BlcmF0b3IgPSBuZXcgVG9vbHRpcE9wZXJhdG9yKCk7XHJcbmxldCBwcmlvcml0eUNvbG9yZXIgPSBuZXcgUHJpb3JpdHlDb2xvcmVyKCk7XHJcbmxldCB0YXNrRGVsZXRlciA9IG5ldyBUYXNrRGVsZXRlcigpO1xyXG5cclxuLy8gZXh0ZXJuYWwgbGlicmFyaWVzXHJcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tFZGl0b3Ige1xyXG4gICAgZWRpdEJ1dHRvbk9wZXJhdG9yKHRhc2ssIHByb2plY3QpIHtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBlZGl0IGEgY29tcGxldGVkIHRhc2suJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0ID0gdGFza1Jvdy5jaGlsZHJlbltpXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCdtYXgnLCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5SW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3gudmFsdWUgPSBjZWxsVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGVJbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC52YWx1ZSA9IGNlbGxUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbklucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnZhbHVlID0gY2VsbFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGVJbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuW2ldLmFwcGVuZENoaWxkKGlucHV0Qm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByZW1vdmUgYm90aCBidXR0b25zXHJcbiAgICAgICAgICAgIHdoaWxlKHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHsgdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdLnJlbW92ZUNoaWxkKHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5jaGlsZHJlblswXSk7IH1cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRoYXQgb2theXMgdGhlIGNoYW5nZXNcclxuICAgICAgICAgICAgbGV0IGFjY2VwdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGFjY2VwdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIGFjY2VwdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FjY2VwdCBDaGFuZ2VzJyk7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZChhY2NlcHRCdXR0b24pO1xyXG4gICAgICAgICAgICAvLyB3aGljaCBjYWxscyBhY2NlcHRDaGFuZ2VzT3BlcmF0b3JcclxuICAgICAgICAgICAgYWNjZXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hY2NlcHRDaGFuZ2VzT3BlcmF0b3IodGFzaywgcHJvamVjdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFjY2VwdENoYW5nZXNPcGVyYXRvclxyXG4gICAgYWNjZXB0Q2hhbmdlc09wZXJhdG9yKHRhc2ssIHByb2plY3QpIHtcclxuICAgICAgICAvLyB0cmlnZ2VycyBvbiBjaGFuZ2VzIGJlaW5nIGFjY2VwdGVkXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZ2F0aGVyIGRhdGFcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0YXNrUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcmlvcml0eUlucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gdGFza1Jvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGl0bGVJbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRhc2tSb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uSW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IHRhc2tSb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImR1ZURhdGVJbnB1dFwiXWApLnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBsaW1pdHMgY2hlY2tpbmdcclxuICAgICAgICBsZXQgc3BlY2lhbENoYXJhY3RlcnMgPSAvWyFAIyQlXiYqKClfK1xcLT1cXFtcXF17fTsnOlwiXFxcXHwsLjw+XFwvP10rLztcclxuICAgICAgICBsZXQgdGl0bGVDb250YWluc1NwZWNpYWxDaGFyYWN0ZXJzID0gc3BlY2lhbENoYXJhY3RlcnMudGVzdCh0aXRsZSk7XHJcbiAgICAgICAgbGV0IHBhc3RUYXNrcyA9IGxvY2FsU3RvcmFnZS50YXNrcztcclxuICAgICAgICBsZXQgcGFzdFRhc2tzQXJyYXkgPSBwYXN0VGFza3MgPyBwYXN0VGFza3Muc3BsaXQoJ3wnKSA6IFtdO1xyXG4gICAgICAgIGxldCB0aXRsZVRha2VuID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9sZFRpdGxlID0gdGFzay50aXRsZTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhc3RUYXNrc0FycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXRyaWV2ZWRUYXNrT2JqZWN0ID0gSlNPTi5wYXJzZShwYXN0VGFza3NBcnJheVtqXSk7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09IHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHBhc3RUYXNrc0FycmF5LnNwbGljZShqLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzdFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKHBhc3RUYXNrc0FycmF5W2ldKTtcclxuICAgICAgICAgICAgaWYgKHRpdGxlID09IHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlVGFrZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpdGxlVGFrZW4pIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBoYXZlIHR3byB0YXNrcyB3aXRoIHRoZSBzYW1lIHRpdGxlLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGl0bGUgPT0gbnVsbCB8fCB0aXRsZSA9PSAnJyB8fCB0aXRsZS5sZW5ndGggPiAyNSkge1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIG5ldyB0YXNrIG11c3QgaGF2ZSBhIG5hbWUgdW5kZXIgMjUgY2hhcmFjdGVycy4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09IG51bGwgfHwgcHJpb3JpdHkgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBhc3NpZ24gYSB0YXNrIHByaW9yaXR5LicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGl0bGVDb250YWluc1NwZWNpYWxDaGFyYWN0ZXJzKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUYXNrIG5hbWUgbWF5IG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzIGFuZCBzcGFjZXMuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA8IDEgfHwgcHJpb3JpdHkgPiAzKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQcmlvcml0eSBsZXZlbCBtdXN0IGJlIHNldCBiZXR3ZWVuIDEgYW5kIDMuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiA2NSkge1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgdW5kZXIgNjUgY2hhcmFjdGVycy4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0YXNrIGRhdGFcclxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVzZSBkYXRlLWZucyB0byBlc3RhYmxpc2ggZGlmZmVyZW5jZUluRGF5c1xyXG4gICAgICAgICAgICBpZiAodGFzay5kdWVEYXRlICE9PSAnJyB8fCB0YXNrLmR1ZURhdGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhc2suZGF5c0xlZnQgPSBkaWZmZXJlbmNlSW5EYXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICApICAgIFxyXG4gICAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gZW1wdHkgdGhlIGNlbGxzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0YXNrUm93LmNoaWxkcmVuW2ldLmZpcnN0Q2hpbGQpIHsgdGFza1Jvdy5jaGlsZHJlbltpXS5yZW1vdmVDaGlsZCh0YXNrUm93LmNoaWxkcmVuW2ldLmZpcnN0Q2hpbGQpIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZHVlRGF0ZSBjZWxsIGNvbnRlbnRzXHJcbiAgICAgICAgICAgIGlmICh0YXNrLmRheXNMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGBUbyBkbyBpbiAke3Rhc2suZGF5c0xlZnR9IGRheXNgO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suZGF5c0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gYCR7LXRhc2suZGF5c0xlZnR9IGRheXMgb3ZlcmR1ZWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5kYXlzTGVmdCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gYFRvZGF5YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmRheXNMZWZ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIHJlLWVzdGFibGlzaCB0aGUgdGFza1Jvd1xyXG4gICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5ld190X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgICAgICB0YXNrUm93LmlkID0gYHRhc2tfJHtuZXdfdF90aXRsZU5vU3BhY2VzfWA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uc0FkZGVyKHRhc2ssIHByb2plY3QsIG9sZFRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBjb2xvciB0byBwcmlvcml0eSBjb2x1bW5cclxuICAgICAgICAgICAgcHJpb3JpdHlDb2xvcmVyLnByaW9yaXR5Q2xhc3NBc3NpZ25lcih0YXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b25zQWRkZXIodGFzaywgcHJvamVjdCwgb2xkVGl0bGUpIHtcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBidXR0b25zQ2VsbC5yZW1vdmVDaGlsZChidXR0b25zQ2VsbC5maXJzdENoaWxkKTtcclxuXHJcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ+Kcjic7XHJcbiAgICAgICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyTJztcclxuICAgICAgICBidXR0b25zQ2VsbC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8gZGVsZXRlIGJ1dHRvblxyXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBg8J+XkWA7XHJcbiAgICAgICAgYnV0dG9uc0NlbGwuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgICAgICBidXR0b25zQ2VsbC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmVkaXRCdXR0b25PcGVyYXRvcih0YXNrLCBwcm9qZWN0KSk7XHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrQ29tcGxldGVyLmNvbXBsZXRlVGFzayh0YXNrLCBwcm9qZWN0KSk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0RlbGV0ZXIuZGVsZXRlVGFzayh0YXNrKSk7XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzc1xyXG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5pY29kZScpO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3VuaWNvZGUnKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5pY29kZScpO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRvb2x0aXAgbWFrZXJzXHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JFZGl0KHRhc2spO1xyXG4gICAgICAgIHRvb2x0aXBPcGVyYXRvci50b29sdGlwRm9yQ29tcGxldGUodGFzayk7XHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JEZWxldGUodGFzayk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgdGFzayBpbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBsZXQgbG9jYWxUYXNrc0FycmF5ID0gbG9jYWxTdG9yYWdlLnRhc2tzLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsVGFza3NBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRUYXNrT2JqZWN0LnRpdGxlID09IG9sZFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gbG9jYWxUYXNrc0FycmF5LmpvaW4oJ3wnKTtcclxuXHJcbiAgICAgICAgLy8gaW5zZXJ0IHRhc2sgaW50byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBsZXQgZXhpc3RpbmdUYXNrcztcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nVGFza3MgPSBsb2NhbFN0b3JhZ2UudGFza3M7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGV4aXN0aW5nVGFza3MgKyAnfCcgKyBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2tFZGl0b3IgZnJvbSAnLi91aV90YXNrX2VkaXRvcic7XHJcbmltcG9ydCBUYXNrQ29tcGxldGVyIGZyb20gJy4vdWlfdGFza19jb21wbGV0ZXInO1xyXG5pbXBvcnQgVG9vbHRpcE9wZXJhdG9yIGZyb20gJy4vdWlfdG9vbHRpcF9vcGVyYXRvcic7XHJcbmltcG9ydCBUYXNrRGVsZXRlciBmcm9tICcuL3NtX3Rhc2tfZGVsZXRlcic7XHJcblxyXG5sZXQgdGFza0VkaXRvciA9IG5ldyBUYXNrRWRpdG9yKCk7XHJcbmxldCB0YXNrQ29tcGxldGVyID0gbmV3IFRhc2tDb21wbGV0ZXIoKTtcclxubGV0IHRvb2x0aXBPcGVyYXRvciA9IG5ldyBUb29sdGlwT3BlcmF0b3IoKTtcclxubGV0IHRhc2tEZWxldGVyID0gbmV3IFRhc2tEZWxldGVyKCk7XHJcblxyXG4vLyBleHRlcm5hbCBsaWJyYXJpZXNcclxuaW1wb3J0IHsgZGlmZmVyZW5jZUluRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1Jvd0NyZWF0b3Ige1xyXG4gICAgbWFrZVRhc2tSb3codGFzaywgcHJvamVjdCkge1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlY3QgcHJvamVjdCByb3dcclxuICAgICAgICBsZXQgcF90aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgcHJvamVjdFJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyb3dfJHtwX3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50cyBvZiB0aGUgdGFzayByb3dcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKCd0YXNrUm93Jyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG5cclxuICAgICAgICAvLyBDZW50ZXJpbmdcclxuICAgICAgICB0YXNrUm93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnY2VudGVyZWQnKTtcclxuXHJcbiAgICAgICAgLy8gRGF0ZSBjZWxsXHJcbiAgICAgICAgICAgIC8vIDEpIHVuZGVyc3RhbmQgd2hhdCBmb3JtYXQgaXMgdGFzay5kdWVEYXRlIGluLiBpcyBpdCBhIHN0cmluZz8gYW4gb2JqZWN0P1xyXG4gICAgICAgICAgICAvLyBhbnN3ZXI6IGl0J3MgYSBzdHJpbmcgaW4gdGhlICd5eXl5LW1tLWRkJyBmb3JtYXRcclxuICAgICAgICAgICAgLy8gMikgdHJhbnNmb3JtIHRoYXQgc3RyaW5nIGludG8gYW4gb2JqZWN0IGRhdGEgZm5zIGNhbiB1c2UgaW4gaXRzIGNhbGN1bGF0aW9uc1xyXG4gICAgICAgICAgICAvLyBhbnN3ZXI6IGZyb20gdGhlIGRvY3VtZW50YXRpb24gaXQgbG9va3MgbGlrZSBhIHN0cmluZyBpcyBmaW5lXHJcbiAgICAgICAgICAgIC8vIDMpIGVzdGFibGlzaCB0b2RheVxyXG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgIT09ICcnIHx8IHRhc2suZHVlRGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXNrLmRheXNMZWZ0ID0gZGlmZmVyZW5jZUluRGF5cyhcclxuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKClcclxuICAgICAgICAgICAgKSAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRleHQgY29udGVudHMgb2YgdGhlIGVsZW1lbnRzXHJcbiAgICAgICAgdGFza1Jvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuICAgICAgICB0YXNrUm93VGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIHRhc2tSb3dEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgICAgaWYgKHRhc2suZGF5c0xlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRhc2tSb3dEdWVEYXRlLnRleHRDb250ZW50ID0gYFRvIGRvIGluICR7dGFzay5kYXlzTGVmdH0gZGF5c2A7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLmRheXNMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICB0YXNrUm93RHVlRGF0ZS50ZXh0Q29udGVudCA9IGAkey10YXNrLmRheXNMZWZ0fSBkYXlzIG92ZXJkdWVgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5kYXlzTGVmdCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRhc2tSb3dEdWVEYXRlLnRleHRDb250ZW50ID0gYFRvZGF5YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhc2suZGF5c0xlZnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXNrUm93RHVlRGF0ZS50ZXh0Q29udGVudCA9IGBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29udGVudHMgb2YgdGFza1Jvd0J1dHRvbnNcclxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAn4pyOJztcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ+Kckyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyXJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFza1Jvd0J1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIC8vIGRlbGV0ZSBidXR0b25cclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gYPCfl5FgO1xyXG4gICAgICAgIHRhc2tSb3dCdXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIHRhc2tSb3dCdXR0b25zLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRhc2tSb3dcclxuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dQcmlvcml0eSk7XHJcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93VGl0bGUpO1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dEdWVEYXRlKTtcclxuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGFzayBpcyBjb21wbGV0ZWRcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkVGFzaycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRWRpdCBUYXNrc1xyXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrRWRpdG9yLmVkaXRCdXR0b25PcGVyYXRvcih0YXNrLCBwcm9qZWN0KSk7XHJcblxyXG4gICAgICAgIC8vIENvbXBsZXRlIFRhc2tzXHJcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tDb21wbGV0ZXIuY29tcGxldGVUYXNrKHRhc2ssIHByb2plY3QpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tDb21wbGV0ZXIudW5Db21wbGV0ZVRhc2sodGFzaywgcHJvamVjdCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIFRhc2tzIGV2ZW50XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0RlbGV0ZXIuZGVsZXRlVGFzayh0YXNrKSk7XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzc1xyXG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5pY29kZScpO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3VuaWNvZGUnKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5pY29kZScpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgdGFza1JvdyBhZnRlciBjb3JyZWN0IHByb2plY3RSb3dcclxuICAgICAgICBwcm9qZWN0Um93Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0YXNrUm93KTtcclxuXHJcbiAgICAgICAgLy8gZ2l2ZSBJRCBmb3IgZWRpdGluZyBwdXJwb3Nlc1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIHRhc2tSb3cuc2V0QXR0cmlidXRlKGBpZGAsIGB0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRvb2x0aXAgbWFrZXJzXHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JFZGl0KHRhc2spO1xyXG4gICAgICAgIHRvb2x0aXBPcGVyYXRvci50b29sdGlwRm9yQ29tcGxldGUodGFzayk7XHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JEZWxldGUodGFzayk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwT3BlcmF0b3Ige1xyXG4gICAgdG9vbHRpcEZvckVkaXQodGFzaykge1xyXG4gICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwIG5vdGVcclxuICAgICAgICBsZXQgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b29sdGlwLnRleHRDb250ZW50ID0gJ0VkaXQgdGFzay4nXHJcblxyXG4gICAgICAgIC8vIGZpbmQgY29ycmVjdCB0YXNrXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBwYXJlbnQgbm9kZSAoZWRpdCBidXR0b24pXHJcbiAgICAgICAgbGV0IGJ1dHRvbnNDZWxsID0gdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gYnV0dG9uc0NlbGwuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzc2VzXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sdGlwUGFyZW50Jyk7XHJcbiAgICAgICAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJyk7XHJcblxyXG4gICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsnKTtcclxuICAgICAgICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKHRvb2x0aXApO1xyXG4gICAgfVxyXG4gICAgdG9vbHRpcEZvckNvbXBsZXRlKHRhc2spIHtcclxuICAgICAgICAvLyBjcmVhdGUgdG9vbHRpcCBub3RlXHJcbiAgICAgICAgbGV0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSB0YXNrLidcclxuXHJcbiAgICAgICAgLy8gZmluZCBjb3JyZWN0IHRhc2tcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHBhcmVudCBub2RlIChlZGl0IGJ1dHRvbilcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gYnV0dG9uc0NlbGwuY2hpbGRyZW5bMl07XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzc2VzXHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbHRpcFBhcmVudCcpO1xyXG4gICAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xyXG5cclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOnJlbGF0aXZlOycpO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHRvb2x0aXApO1xyXG4gICAgfVxyXG4gICAgdG9vbHRpcEZvckRlbGV0ZSh0YXNrKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIHRvb2x0aXAgbm90ZVxyXG4gICAgICAgIGxldCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSAnRGVsZXRlIHRhc2suJ1xyXG5cclxuICAgICAgICAvLyBmaW5kIGNvcnJlY3QgdGFza1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgcGFyZW50IG5vZGUgKGVkaXQgYnV0dG9uKVxyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gYnV0dG9uc0NlbGwuY2hpbGRyZW5bMV07XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzc2VzXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBQYXJlbnQnKTtcclxuICAgICAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKTtcclxuXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7Jyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHRvb2x0aXApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5EYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5IHBlcmlvZHMgYmV0d2VlbiB0d28gZGF0ZXMuIEZyYWN0aW9uYWwgZGF5cyBhcmVcbiAqIHRydW5jYXRlZCB0b3dhcmRzIHplcm8uXG4gKlxuICogT25lIFwiZnVsbCBkYXlcIiBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGxvY2FsIHRpbWUgaW4gb25lIGRheSB0byB0aGUgc2FtZVxuICogbG9jYWwgdGltZSBvbiB0aGUgbmV4dCBvciBwcmV2aW91cyBkYXkuIEEgZnVsbCBkYXkgY2FuIHNvbWV0aW1lcyBiZSBsZXNzIHRoYW5cbiAqIG9yIG1vcmUgdGhhbiAyNCBob3VycyBpZiBhIGRheWxpZ2h0IHNhdmluZ3MgY2hhbmdlIGhhcHBlbnMgYmV0d2VlbiB0d28gZGF0ZXMuXG4gKlxuICogVG8gaWdub3JlIERTVCBhbmQgb25seSBtZWFzdXJlIGV4YWN0IDI0LWhvdXIgcGVyaW9kcywgdXNlIHRoaXMgaW5zdGVhZDpcbiAqIGBNYXRoLnRydW5jKGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpLzI0KXwwYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMSBNYXJjaCAyMDIwIDA6MDAgYW5kIDEgSnVuZSAyMDIwIDA6MDAgP1xuICogLy8gTm90ZTogYmVjYXVzZSBsb2NhbCB0aW1lIGlzIHVzZWQsIHRoZVxuICogLy8gcmVzdWx0IHdpbGwgYWx3YXlzIGJlIDkyIGRheXMsIGV2ZW4gaW5cbiAqIC8vIHRpbWUgem9uZXMgd2hlcmUgRFNUIHN0YXJ0cyBhbmQgdGhlXG4gKiAvLyBwZXJpb2QgaGFzIG9ubHkgOTIqMjQtMSBob3Vycy5cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDUsIDEpLFxuICogICBuZXcgRGF0ZSgyMDIwLCAyLCAxKVxuICogKVxuICogLy89PiA5MlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBzaWduID0gY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCk7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSk7XG5cbiAgX2RhdGVMZWZ0LnNldERhdGUoX2RhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTtcblxuICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgZGF5cyAtIGRpZmYgaW4gY2FsZW5kYXIgZGF5cykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBkYXkgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gIGNvbnN0IGlzTGFzdERheU5vdEZ1bGwgPSBOdW1iZXIoXG4gICAgY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkgPT09IC1zaWduLFxuICApO1xuICBjb25zdCByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3REYXlOb3RGdWxsKTtcbiAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufVxuXG4vLyBMaWtlIGBjb21wYXJlQXNjYCBidXQgdXNlcyBsb2NhbCB0aW1lIG5vdCBVVEMsIHdoaWNoIGlzIG5lZWRlZFxuLy8gZm9yIGFjY3VyYXRlIGVxdWFsaXR5IGNvbXBhcmlzb25zIG9mIFVUQyB0aW1lc3RhbXBzIHRoYXQgZW5kIHVwXG4vLyBoYXZpbmcgdGhlIHNhbWUgcmVwcmVzZW50YXRpb24gaW4gbG9jYWwgdGltZSwgZS5nLiBvbmUgaG91ciBiZWZvcmVcbi8vIERTVCBlbmRzIHZzLiB0aGUgaW5zdGFudCB0aGF0IERTVCBlbmRzLlxuZnVuY3Rpb24gY29tcGFyZUxvY2FsQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gZGF0ZVJpZ2h0LmdldERhdGUoKSB8fFxuICAgIGRhdGVMZWZ0LmdldEhvdXJzKCkgLSBkYXRlUmlnaHQuZ2V0SG91cnMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1pbnV0ZXMoKSAtIGRhdGVSaWdodC5nZXRNaW51dGVzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRTZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0U2Vjb25kcygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWlsbGlzZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5EYXlzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnRpbmdcclxuaW1wb3J0IFByb2plY3RCdXR0b25PcGVyYXRvciBmcm9tICcuL3VpX3Byb2plY3RfYnV0dG9uX29wcic7XHJcbmltcG9ydCBQcm9qZWN0Q3JlYXRvciBmcm9tICcuL3NtX3Byb2plY3RfY3JlYXRvcic7XHJcbmltcG9ydCBUYXNrQ3JlYXRvciBmcm9tICcuL3NtX3Rhc2tfY3JlYXRvcic7XHJcbmltcG9ydCBSb3dDcmVhdG9yIGZyb20gJy4vdWlfcm93X2NyZWF0b3InO1xyXG5pbXBvcnQgVGFza1Jvd0NyZWF0b3IgZnJvbSAnLi91aV90YXNrX3Jvd19jcmVhdG9yJztcclxuaW1wb3J0IFByaW9yaXR5Q29sb3JlciBmcm9tICcuL3VpX3ByaW9yaXR5X2NvbG9yZXInO1xyXG5pbXBvcnQgQmFja2dyb3VuZERyYXdlciBmcm9tICcuL3VpX2JnX2RyYXdlcic7XHJcbmltcG9ydCBEaWFsb2dNYWtlciBmcm9tICcuL3VpX2RpYWxvZ19tYWtlcic7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbi8vIGluaXRpYWxpemUgaW5zdGFuY2VzXHJcbmxldCBwcm9qZWN0QnV0dG9uT3BlcmF0b3IgPSBuZXcgUHJvamVjdEJ1dHRvbk9wZXJhdG9yKCk7XHJcbmxldCBwcm9qZWN0Q3JlYXRvciA9IG5ldyBQcm9qZWN0Q3JlYXRvcigpO1xyXG5sZXQgdGFza0NyZWF0b3IgPSBuZXcgVGFza0NyZWF0b3IoKTtcclxubGV0IHJvd0NyZWF0b3IgPSBuZXcgUm93Q3JlYXRvcigpO1xyXG5sZXQgdGFza1Jvd0NyZWF0b3IgPSBuZXcgVGFza1Jvd0NyZWF0b3IoKTtcclxubGV0IHByaW9yaXR5Q29sb3JlciA9IG5ldyBQcmlvcml0eUNvbG9yZXIoKTtcclxubGV0IGJhY2tncm91bmREcmF3ZXIgPSBuZXcgQmFja2dyb3VuZERyYXdlcigpO1xyXG5sZXQgZGlhbG9nTWFrZXIgPSBuZXcgRGlhbG9nTWFrZXIoKTtcclxuXHJcbi8vIHRlc3RpbmdcclxuZGlhbG9nTWFrZXIuY3JlYXRlUHJvamVjdERpYWxvZygpO1xyXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fY3JlYXRlTmV3UHJvamVjdCcpO1xyXG5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEJ1dHRvbk9wZXJhdG9yLmNyZWF0ZU5ld1Byb2plY3RXaXRoRGlhbG9nKTtcclxuXHJcbi8vIHJldHJpZXZpbmcgbG9jYWxTdG9yYWdlIGZvciBwcm9qZWN0c1xyXG5sZXQgcGFzdFByb2plY3RzID0gbG9jYWxTdG9yYWdlLnByb2plY3RzO1xyXG5sZXQgcGFzdFByb2plY3RzQXJyYXkgPSBwYXN0UHJvamVjdHMgPyBwYXN0UHJvamVjdHMuc3BsaXQoJ3wnKSA6IFtdO1xyXG5sZXQgcHJvamVjdE9iamVjdHNBcnJheSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHBhc3RQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgcmV0cmlldmVkT2JqZWN0ID0gSlNPTi5wYXJzZShwYXN0UHJvamVjdHNBcnJheVtpXSk7XHJcbiAgICBsZXQgbmV3UHJvamVjdE9iamVjdCA9IHByb2plY3RDcmVhdG9yLm5ld1Byb2plY3QocmV0cmlldmVkT2JqZWN0LnRpdGxlKTtcclxuICAgIHJvd0NyZWF0b3IubWFrZVByb2plY3RSb3cobmV3UHJvamVjdE9iamVjdCk7XHJcbiAgICByb3dDcmVhdG9yLm1ha2VGb3JtUm93KG5ld1Byb2plY3RPYmplY3QpO1xyXG4gICAgcHJvamVjdE9iamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3RPYmplY3QpO1xyXG59XHJcbmlmIChwYXN0UHJvamVjdHNBcnJheS5sZW5ndGggPT0gMCkge1xyXG4gICAgLy8gZHJhdyBiYWNrZ3JvdW5kXHJcbiAgICBiYWNrZ3JvdW5kRHJhd2VyLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbn1cclxuXHJcbi8vIHJldHJpZXZlIGxvY2FsU3RvcmFnZSBmb3IgdGFza3NcclxubGV0IHBhc3RUYXNrcyA9IGxvY2FsU3RvcmFnZS50YXNrcztcclxubGV0IHBhc3RUYXNrc0FycmF5ID0gcGFzdFRhc2tzID8gcGFzdFRhc2tzLnNwbGl0KCd8JykgOiBbXTtcclxuaWYgKHBhc3RUYXNrc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzdFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmV0cmlldmVkVGFza09iamVjdCA9IEpTT04ucGFyc2UocGFzdFRhc2tzQXJyYXlbaV0pO1xyXG4gICAgICAgIGxldCBuZXdUYXNrT2JqZWN0ID0gdGFza0NyZWF0b3IubmV3VGFzayhyZXRyaWV2ZWRUYXNrT2JqZWN0LnRpdGxlLCByZXRyaWV2ZWRUYXNrT2JqZWN0LmRlc2NyaXB0aW9uLCByZXRyaWV2ZWRUYXNrT2JqZWN0LmR1ZURhdGUsIHJldHJpZXZlZFRhc2tPYmplY3QucHJpb3JpdHksIHJldHJpZXZlZFRhc2tPYmplY3QuaXNDb21wbGV0ZSwgcmV0cmlldmVkVGFza09iamVjdC5wYXJ0T2ZQcm9qZWN0KTtcclxuICAgICAgICBsZXQgY29ycmVjdFByb2plY3QgPSBwcm9qZWN0T2JqZWN0c0FycmF5LmZpbmQoaSA9PiBpLnRpdGxlID09IG5ld1Rhc2tPYmplY3QucGFydE9mUHJvamVjdCk7XHJcbiAgICAgICAgdGFza1Jvd0NyZWF0b3IubWFrZVRhc2tSb3cobmV3VGFza09iamVjdCwgY29ycmVjdFByb2plY3QpO1xyXG4gICAgICAgIHByaW9yaXR5Q29sb3Jlci5wcmlvcml0eUNsYXNzQXNzaWduZXIobmV3VGFza09iamVjdCk7XHJcbiAgICAgICAgaWYgKG5ld1Rhc2tPYmplY3QuaXNDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSBuZXdUYXNrT2JqZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0YXNrUm93LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZFRhc2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=