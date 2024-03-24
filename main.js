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

@media screen and (max-width:651px) {
    .formRow td {
        background-color: var(--lightGrey);
    }
    .formRow input {
        border: none;
    }
    .formRow button:hover {
        background-color: var(--lightGrey);
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --mainBlue: #5C98C1;\r\n    --offWhite: #EFF0F4;\r\n    --lightGrey: #9F9293;\r\n    --darkGrey: #806C64;\r\n    --backgroundBlue: #2975A7;\r\n}\r\n\r\ninput {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    /* Add any other styles you want to reset */\r\n    border: none;\r\n    outline: none;\r\n    /* Additional styles to match your design */\r\n    background-color: transparent; /* or any other desired color */\r\n    color: inherit; /* or any other desired color */\r\n    /* Add more styles as needed */\r\n  }\r\n\r\n@font-face {\r\n    font-family: 'Graduate';\r\n    src: url('./Graduate-Regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Graduate';\r\n}\r\n\r\n.unicode {\r\n    font-family: 'Segoe UI Symbol', sans-serif;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n    font-family: 'Graduate';\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    height: 100%;\r\n    font-family: 'Graduate';\r\n    overflow-y: hidden;\r\n}\r\n\r\n#container {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 80px auto;\r\n    grid-template-rows: 80px auto;\r\n}\r\n\r\nheader {\r\n    background-color: var(--backgroundBlue);\r\n    grid-column: 1 / 3;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\nbutton {\r\n    background-color: var(--darkGrey);\r\n    border: 3px solid var(--darkGrey);\r\n    color: var(--offWhite);\r\n}\r\n\r\nbutton:hover {\r\n    background-color: var(--lightGrey);\r\n    border: 3px solid var(--lightGrey);\r\n}\r\n\r\nh1 {\r\n    color: var(--offWhite);\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\ntr {\r\n    height: 30px;\r\n}\r\n\r\ntd:nth-child(1) {\r\n    width: 70px;\r\n}\r\n\r\ntd:nth-child(2) {\r\n    width: 120px;\r\n}\r\n\r\ntd:nth-child(4) {\r\n    width: 100px;\r\n}\r\n\r\ntd:nth-child(5) {\r\n    width: 150px;\r\n}\r\n\r\ntd button {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: black;\r\n    height: 100%;   \r\n}\r\n\r\ninput, input[type=\"date\"], textarea, select {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n    outline: none;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n    color: inherit;\r\n    background-color: transparent;\r\n    appearance: none;\r\n}\r\n\r\ntd input, input[type=\"date\"], input[type=\"submit\"] {\r\n    box-sizing: border-box;\r\n    height: 20px;\r\n    width: 100%;\r\n    font-family: 'Graduate';\r\n    border: 1px solid var(--darkGrey);\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 2px;\r\n}\r\n\r\ntd input:focus {\r\n    border: 1px solid black;\r\n    border-radius: none;\r\n    background-color: var(--mainBlue);\r\n}\r\n\r\ntd input[type=\"submit\"]:hover {\r\n    background-color: var(--mainBlue);\r\n    border-color: var(--mainBlue);\r\n}\r\n\r\ntd button:hover {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\nnav {\r\n    background-color: var(--mainBlue);\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n}\r\n\r\n#tasksWindow {\r\n    background-color: var(--offWhite);\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 5px;\r\n    position: relative;\r\n}\r\n\r\n.projectRow {\r\n    width: 100%;\r\n    background-color: var(--backgroundBlue);\r\n    height:35px;\r\n}\r\n\r\n.projectRow td {\r\n    padding: 5px;\r\n}\r\n\r\n.taskRow {\r\n    width: 100%;\r\n    background-color: var(--offWhite);\r\n    font-size: 80%;\r\n}\r\n\r\n.headerRow {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\n.headerRow td {\r\n    padding: 5px;\r\n}\r\n\r\n.completedTask {\r\n    background-color: var(--darkGrey);\r\n    text-decoration: line-through;\r\n}\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    opacity: 0.8;\r\n    background-color: var(--darkGrey);\r\n    color: var(--offWhite);\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    z-index: 1;\r\n    width: 100px;\r\n    bottom: 90%;\r\n    left: 50%;\r\n    margin-left: -50px;\r\n}\r\n\r\n.tooltipParent:hover .tooltip {\r\n    visibility: visible;\r\n}\r\n\r\n.mediumPriority {\r\n    color: orangered;\r\n}\r\n\r\n.highPriority {\r\n    font-weight: bold;\r\n    color: maroon;\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\n.backgroundImage {\r\n    height: 200px;\r\n    margin-top: -20px;\r\n}\r\n\r\n.popup_project {\r\n    position: absolute;\r\n    background-color: var(--offWhite);\r\n    border: 6px solid var(--backgroundBlue);\r\n    border-radius: 6px;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 300px;\r\n}\r\n\r\n.popup_project p {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.popup_project input {\r\n    background-color: var(--mainBlue);\r\n    border: none;\r\n    font-size: 150%;\r\n    height: 100%;\r\n}\r\n\r\n.popup_project input[type=\"submit\"]:hover {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\n@media screen and (max-width:651px) {\r\n    .formRow td {\r\n        background-color: var(--lightGrey);\r\n    }\r\n    .formRow input {\r\n        border: none;\r\n    }\r\n    .formRow button:hover {\r\n        background-color: var(--lightGrey);\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSx5QkFBeUIsdUJBQXVCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEJBQThCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jbGFzc19wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2xhc3NfdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Byb2plY3RfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Byb2plY3RfZGVsZXRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Rhc2tfYXNzaWduZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zbV90YXNrX2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zbV90YXNrX2RlbGV0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9iZ19kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9kaWFsb2dfbWFrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9oZWFkZXJfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3ByaW9yaXR5X2NvbG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9wcm9qZWN0X2J1dHRvbl9vcHIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9yb3dfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Rhc2tfYnV0dG9uX29wci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Rhc2tfY29tcGxldGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdGFza19lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV90YXNrX3Jvd19jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdG9vbHRpcF9vcGVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkRheXMubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9HcmFkdWF0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1tYWluQmx1ZTogIzVDOThDMTtcclxuICAgIC0tb2ZmV2hpdGU6ICNFRkYwRjQ7XHJcbiAgICAtLWxpZ2h0R3JleTogIzlGOTI5MztcclxuICAgIC0tZGFya0dyZXk6ICM4MDZDNjQ7XHJcbiAgICAtLWJhY2tncm91bmRCbHVlOiAjMjk3NUE3O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLyogQWRkIGFueSBvdGhlciBzdHlsZXMgeW91IHdhbnQgdG8gcmVzZXQgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAvKiBBZGRpdGlvbmFsIHN0eWxlcyB0byBtYXRjaCB5b3VyIGRlc2lnbiAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIG9yIGFueSBvdGhlciBkZXNpcmVkIGNvbG9yICovXHJcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogb3IgYW55IG90aGVyIGRlc2lyZWQgY29sb3IgKi9cclxuICAgIC8qIEFkZCBtb3JlIHN0eWxlcyBhcyBuZWVkZWQgKi9cclxuICB9XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xyXG59XHJcblxyXG4udW5pY29kZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFN5bWJvbCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQmx1ZSk7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZGFya0dyZXkpO1xyXG4gICAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHIge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG50ZDpudGgtY2hpbGQoMSkge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCg0KSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCg1KSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbnRkIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTsgICBcclxufVxyXG5cclxuaW5wdXQsIGlucHV0W3R5cGU9XCJkYXRlXCJdLCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG50ZCBpbnB1dCwgaW5wdXRbdHlwZT1cImRhdGVcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbnRkIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcclxufVxyXG5cclxudGQgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5CbHVlKTtcclxufVxyXG5cclxudGQgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4jdGFza3NXaW5kb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdFJvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRCbHVlKTtcclxuICAgIGhlaWdodDozNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdFJvdyB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrUm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5oZWFkZXJSb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxufVxyXG5cclxuLmhlYWRlclJvdyB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWRUYXNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm90dG9tOiA5MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwUGFyZW50OmhvdmVyIC50b29sdGlwIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZWRpdW1Qcmlvcml0eSB7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4uaGlnaFByaW9yaXR5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi5wb3B1cF9wcm9qZWN0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmRCbHVlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wb3B1cF9wcm9qZWN0IHAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnBvcHVwX3Byb2plY3QgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkJsdWUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucG9wdXBfcHJvamVjdCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjUxcHgpIHtcclxuICAgIC5mb3JtUm93IHRkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xyXG4gICAgfVxyXG4gICAgLmZvcm1Sb3cgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5mb3JtUm93IGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztB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Q3ZDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSxrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtDQUFrQztJQUN0QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1tYWluQmx1ZTogIzVDOThDMTtcXHJcXG4gICAgLS1vZmZXaGl0ZTogI0VGRjBGNDtcXHJcXG4gICAgLS1saWdodEdyZXk6ICM5RjkyOTM7XFxyXFxuICAgIC0tZGFya0dyZXk6ICM4MDZDNjQ7XFxyXFxuICAgIC0tYmFja2dyb3VuZEJsdWU6ICMyOTc1QTc7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC8qIEFkZCBhbnkgb3RoZXIgc3R5bGVzIHlvdSB3YW50IHRvIHJlc2V0ICovXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgLyogQWRkaXRpb25hbCBzdHlsZXMgdG8gbWF0Y2ggeW91ciBkZXNpZ24gKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIG9yIGFueSBvdGhlciBkZXNpcmVkIGNvbG9yICovXFxyXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiBvciBhbnkgb3RoZXIgZGVzaXJlZCBjb2xvciAqL1xcclxcbiAgICAvKiBBZGQgbW9yZSBzdHlsZXMgYXMgbmVlZGVkICovXFxyXFxuICB9XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbiAgICBzcmM6IHVybCgnLi9HcmFkdWF0ZS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ0dyYWR1YXRlJztcXHJcXG59XFxyXFxuXFxyXFxuLnVuaWNvZGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFN5bWJvbCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQmx1ZSk7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWRhcmtHcmV5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG50ciB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoNSkge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbnRkIGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRkIGlucHV0LCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtHcmV5KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxudGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG50ZCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XFxyXFxufVxcclxcblxcclxcbnRkIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NXaW5kb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Um93IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRCbHVlKTtcXHJcXG4gICAgaGVpZ2h0OjM1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Um93IHRkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1JvdyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyUm93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclJvdyB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZFRhc2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3R0b206IDkwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwUGFyZW50OmhvdmVyIC50b29sdGlwIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bVByaW9yaXR5IHtcXHJcXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hQcmlvcml0eSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogbWFyb29uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyZWQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kSW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX3Byb2plY3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXHJcXG4gICAgYm9yZGVyOiA2cHggc29saWQgdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX3Byb2plY3QgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX3Byb2plY3QgaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9wcm9qZWN0IGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NTFweCkge1xcclxcbiAgICAuZm9ybVJvdyB0ZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtUm93IGlucHV0IHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybVJvdyBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUsIHBhcnRPZlByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUsXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxyXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5kYXlzTGVmdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJ0T2ZQcm9qZWN0ID0gcGFydE9mUHJvamVjdDtcclxuICAgIH1cclxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vY2xhc3NfcHJvamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q3JlYXRvciB7XHJcbiAgICBuZXdQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgIH1cclxuICAgIGVkaXRQcm9qZWN0KHByb2plY3QsIG5ld1RpdGxlKSB7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdERlbGV0ZXIge1xyXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gZmluZCB0aGUgcHJvamVjdFJvd1xyXG4gICAgICAgIGxldCBwX3RpdGxlTm9TcGFjZXMgPSBwcm9qZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0Um93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jvd18ke3BfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0YWJsZVxyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBwcm9qZWN0IHJvd1xyXG4gICAgICAgIHRhYmxlLnJlbW92ZUNoaWxkKHByb2plY3RSb3cpO1xyXG5cclxuICAgICAgICAvLyBzYXZlIHByb2plY3QgdGl0bGVcclxuICAgICAgICBsZXQgbXlQcm9qZWN0VGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnSGVyZSBhcmUgdGhlIHByb2plY3QgdGFza3M6Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrcyk7XHJcblxyXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcHJvamVjdCdzIHRhc2tzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHByb2plY3QudGFza3NbaV0udGl0bGU7XHJcbiAgICAgICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICAgICAgdGFibGUucmVtb3ZlQ2hpbGQodGFza1Jvdyk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIHRhc2sgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgbGV0IGxvY2FsVGFza3NBcnJheSA9IGxvY2FsU3RvcmFnZS50YXNrcy5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsVGFza3NBcnJheVtpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkVGFza09iamVjdC50aXRsZSA9PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsVGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gbG9jYWxUYXNrc0FycmF5LmpvaW4oJ3wnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gbG9jYWxTdG9yYWVcclxuICAgICAgICBsZXQgbG9jYWxQcm9qZWN0c0FycmF5ID0gbG9jYWxTdG9yYWdlLnByb2plY3RzLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFByb2plY3RPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsUHJvamVjdHNBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRQcm9qZWN0T2JqZWN0LnRpdGxlID09IG15UHJvamVjdFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFByb2plY3RzQXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnByb2plY3RzID0gbG9jYWxQcm9qZWN0c0FycmF5LmpvaW4oJ3wnKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHJlbGV2YW50IGZvcm1Sb3dcclxuICAgICAgICBsZXQgZm9ybVJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmb3JtXyR7cF90aXRsZU5vU3BhY2VzfWApO1xyXG4gICAgICAgIHRhYmxlLnJlbW92ZUNoaWxkKGZvcm1Sb3cpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzaWduZXIge1xyXG4gICAgYXNzaWduVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9jbGFzc190YXNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDcmVhdG9yXHJcbntcclxuICAgIG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSwgcGFydE9mUHJvamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlLCBwYXJ0T2ZQcm9qZWN0KVxyXG4gICAgfVxyXG4gICAgZWRpdFRhc2sodGFzaywgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRhc2sudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICAgICAgdGFzay5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgICAgICB0YXNrLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrRGVsZXRlciB7XHJcbiAgICBkZWxldGVUYXNrKHRhc2spIHtcclxuICAgICAgICAvLyBzdG9yZSB0aXRsZVxyXG4gICAgICAgIGxldCBvbGRUaXRsZSA9IHRhc2sudGl0bGU7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGFza1Jvd1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGFibGVcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmVDaGlsZFxyXG4gICAgICAgIHRhYmxlLnJlbW92ZUNoaWxkKHRhc2tSb3cpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhc2sgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbGV0IGxvY2FsVGFza3NBcnJheSA9IGxvY2FsU3RvcmFnZS50YXNrcy5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByZXRyaWV2ZWRUYXNrT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFRhc2tzQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICBpZiAocmV0cmlldmVkVGFza09iamVjdC50aXRsZSA9PSBvbGRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxUYXNrc0FycmF5LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGxvY2FsVGFza3NBcnJheS5qb2luKCd8Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgYXJyb3cgZnJvbSAnLi9hcnJvdy5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZERyYXdlciAge1xyXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XHJcbiAgICAgICAgLy8gZmluZCB0YXNrc1dpbmRvd1xyXG4gICAgICAgIGxldCB0YXNrc1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrc1dpbmRvdycpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBkaXYgZm9yIHRoZSBkcmF3aW5nXHJcbiAgICAgICAgbGV0IGJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmRDb250YWluZXInKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIG9mIGJhY2tncm91bmRDb250YWluZXJcclxuICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLnNldEF0dHJpYnV0ZShgc3JjYCwgYCR7YXJyb3d9YCk7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmRJbWFnZScpO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGhpbmdzIHRvIHRoaW5nc1xyXG4gICAgICAgIGJhY2tncm91bmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltYWdlKTtcclxuICAgICAgICB0YXNrc1dpbmRvdy5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUJhY2tncm91bmQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ01ha2VyIHtcclxuICAgIGNyZWF0ZVByb2plY3REaWFsb2coKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGRpdlxyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAvLyBhc3NpZ24gY2xhc3NcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9wcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCB0byB0YXNrV2luZG93XHJcbiAgICAgICAgbGV0IHRhc2tzV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzV2luZG93Jyk7XHJcbiAgICAgICAgdGFza3NXaW5kb3cuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG5cclxuICAgICAgICAvLyBoaWRlIGJ5IGRlZmF1bHRcclxuICAgICAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIHRleHRcclxuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgdGhlIG5hbWUgb2YgeW91ciBuZXcgcHJvamVjdDpcIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cclxuICAgICAgICAvLyBmb3JtXHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGZvcm0udHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBmb3JtLm5hbWUgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgICAgIGZvcm0uaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgICAvLyBzdWJtaXRcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgIGJ1dHRvbi52YWx1ZSA9IFwiQ3JlYXRlXCI7XHJcbiAgICAgICAgYnV0dG9uLmlkID0gJ3BvcHVwX3Byb2plY3RfYnV0dG9uJztcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgfVxyXG4gICAgc2hvd1Byb2plY3REaWFsb2coKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3Byb2plY3QnKTtcclxuICAgICAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG4gICAgaGlkZVByb2plY3REaWFsb2coKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3Byb2plY3QnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwicHJvamVjdE5hbWVcIl1gKS52YWx1ZSA9IGBgO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNyZWF0b3Ige1xyXG4gICAgbWFrZUhlYWRlckNlbGxzKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgaGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ2hlYWRlclJvdycpO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyUm93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBoZWFkZXJSb3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlclJvd0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgaGVhZGVyUm93RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlclJvd0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlYWRlclJvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICAgICAgICBoZWFkZXJSb3dUaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrJztcclxuICAgICAgICBoZWFkZXJSb3dEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICAgICAgaGVhZGVyUm93RHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XHJcbiAgICAgICAgaGVhZGVyUm93QnV0dG9ucy50ZXh0Q29udGVudCA9ICdDb250cm9scyc7XHJcblxyXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXJSb3dQcmlvcml0eSk7XHJcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlclJvd1RpdGxlKTtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXJSb3dEdWVEYXRlKTtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93QnV0dG9ucyk7XHJcbiAgICBcclxuICAgICAgICB0YWJsZS5wcmVwZW5kKGhlYWRlclJvdyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmlvcml0eUNvbG9yZXIge1xyXG4gICAgcHJpb3JpdHlDbGFzc0Fzc2lnbmVyKHRhc2spIHtcclxuICAgICAgICAvLyBmaW5kIHRhc2tSb3dcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBjb3JyZWN0IHRkXHJcbiAgICAgICAgbGV0IHByaW9yaXR5Q2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBhbnkgcHJldmlvdXMgY2xhc3Nlc1xyXG4gICAgICAgIHByaW9yaXR5Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoUHJpb3JpdHknKTtcclxuICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtUHJpb3JpdHknKTtcclxuICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnbG93UHJpb3JpdHknKTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIG5ldyBjbGFzc1xyXG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHlDZWxsLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBSb3dDcmVhdG9yIGZyb20gXCIuL3VpX3Jvd19jcmVhdG9yXCI7XHJcbmltcG9ydCBQcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9zbV9wcm9qZWN0X2NyZWF0b3JcIjtcclxuaW1wb3J0IERpYWxvZ01ha2VyIGZyb20gXCIuL3VpX2RpYWxvZ19tYWtlclwiO1xyXG5cclxubGV0IHByb2plY3RDcmVhdG9yID0gbmV3IFByb2plY3RDcmVhdG9yKCk7XHJcbmxldCByb3dDcmVhdG9yID0gbmV3IFJvd0NyZWF0b3IoKTtcclxubGV0IGRpYWxvZ01ha2VyID0gbmV3IERpYWxvZ01ha2VyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0QnV0dG9uT3BlcmF0b3Ige1xyXG4gICAgY3JlYXRlTmV3UHJvamVjdFdpdGhVSSgpIHtcclxuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gd2luZG93LnByb21wdChcIlBsZWFzZSBpbnB1dCB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3QuXCIpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdENyZWF0b3IubmV3UHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgIHJvd0NyZWF0b3IubWFrZVByb2plY3RSb3cocHJvamVjdCk7XHJcbiAgICAgICAgcm93Q3JlYXRvci5tYWtlRm9ybVJvdyhwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbGV0IGV4aXN0aW5nUHJvamVjdHM7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5wcm9qZWN0cykge1xyXG4gICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5wcm9qZWN0cztcclxuICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IGV4aXN0aW5nUHJvamVjdHMgKyAnfCcgKyBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVOZXdQcm9qZWN0V2l0aERpYWxvZygpIHtcclxuICAgICAgICAvLyBtYWtlIGEgcG9wdXAgZGl2XHJcbiAgICAgICAgZGlhbG9nTWFrZXIuc2hvd1Byb2plY3REaWFsb2coKTtcclxuXHJcbiAgICAgICAgLy8gZ2F0aGVyIGRhdGFcclxuICAgICAgICBsZXQgcHJvamVjdDtcclxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0TmFtZWApO1xyXG5cclxuICAgICAgICAvLyBkZWZpbmluZyBmdW5jdGlvblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGZvcm0udmFsdWU7XHJcbiAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0Q3JlYXRvci5uZXdQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICAgIGxldCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGJnLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgcm93Q3JlYXRvci5tYWtlUHJvamVjdFJvdyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgcm93Q3JlYXRvci5tYWtlRm9ybVJvdyhwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdQcm9qZWN0cztcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5wcm9qZWN0cykge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5wcm9qZWN0cztcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IGV4aXN0aW5nUHJvamVjdHMgKyAnfCcgKyBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaWFsb2dNYWtlci5oaWRlUHJvamVjdERpYWxvZygpO1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBldmVudHNcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwX3Byb2plY3RfYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCBUYXNrQnV0dG9uT3BlcmF0b3IgZnJvbSBcIi4vdWlfdGFza19idXR0b25fb3ByXCI7XHJcbmltcG9ydCBIZWFkZXJDcmVhdG9yIGZyb20gXCIuL3VpX2hlYWRlcl9jcmVhdG9yXCI7XHJcbmltcG9ydCBQcm9qZWN0RGVsZXRlciBmcm9tIFwiLi9zbV9wcm9qZWN0X2RlbGV0ZXJcIjtcclxuXHJcbmxldCB0YXNrQnV0dG9uT3BlcmF0b3IgPSBuZXcgVGFza0J1dHRvbk9wZXJhdG9yKCk7XHJcbmxldCBoZWFkZXJDcmVhdG9yID0gbmV3IEhlYWRlckNyZWF0b3IoKTtcclxubGV0IHByb2plY3REZWxldGVyID0gbmV3IFByb2plY3REZWxldGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dDcmVhdG9yIHtcclxuICAgIG1ha2VQcm9qZWN0Um93KHByb2plY3QpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICAgIGlmICh0YWJsZS5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBoZWFkZXJDcmVhdG9yLm1ha2VIZWFkZXJDZWxscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHJvamVjdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBwcm9qZWN0RGF0YS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCA0KTtcclxuICAgICAgICBwcm9qZWN0Um93LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RSb3cnKTtcclxuICAgICAgICBwcm9qZWN0RGF0YS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocHJvamVjdFJvdyk7XHJcbiAgICAgICAgcHJvamVjdFJvdy5hcHBlbmRDaGlsZChwcm9qZWN0RGF0YSk7XHJcblxyXG4gICAgICAgIC8vIGRlbGV0ZSBidXR0b25cclxuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIHByb2plY3RSb3cuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbkNlbGwpO1xyXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBg8J+XkWA7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbkNlbGwuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8gZGVsZXRpb24gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwcm9qZWN0RGVsZXRlci5kZWxldGVQcm9qZWN0KHByb2plY3QpKTtcclxuXHJcbiAgICAgICAgLy8gR2l2ZSBJRFxyXG4gICAgICAgIGxldCBwX3RpdGxlTm9TcGFjZXMgPSBwcm9qZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIHByb2plY3RSb3cuc2V0QXR0cmlidXRlKCdpZCcsIGByb3dfJHtwX3RpdGxlTm9TcGFjZXN9YCk7XHJcbiAgICB9XHJcbiAgICBtYWtlRm9ybVJvdyhwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICAgICAgICBsZXQgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3dEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3dEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgZm9ybVJvd0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG5cclxuICAgICAgICAvLyBHaXZlIElEXHJcbiAgICAgICAgbGV0IHRpdGxlTm9TcGFjZXMgPSBwcm9qZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGZvcm1Sb3cuc2V0QXR0cmlidXRlKCdpZCcsIGBmb3JtXyR7dGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gQ29udGVudHMgb2YgZm9ybVJvd1xyXG4gICAgICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgMSk7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsIDMpO1xyXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5SW5wdXQnKTtcclxuICAgICAgICBmb3JtUm93UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZUlucHV0Jyk7XHJcbiAgICAgICAgZm9ybVJvd1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb25JbnB1dCcpO1xyXG4gICAgICAgIGZvcm1Sb3dEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGVJbnB1dCcpO1xyXG4gICAgICAgIGZvcm1Sb3dEdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgc3VibWl0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgICAgIHN1Ym1pdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkIE5ldyBUYXNrJyk7XHJcbiAgICAgICAgc3VibWl0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrQnV0dG9uT3BlcmF0b3IuY3JlYXRlTmV3VGFza1dpdGhpblByb2plY3QocHJvamVjdCkpO1xyXG4gICAgICAgIGZvcm1Sb3dCdXR0b25zLmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcclxuXHJcbiAgICAgICAgLy8gYXBwZW5kaW5nIGNvbHVtbnNcclxuICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKGZvcm1Sb3dQcmlvcml0eSk7XHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93VGl0bGUpO1xyXG4gICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZm9ybVJvd0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKGZvcm1Sb3dEdWVEYXRlKTtcclxuICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKGZvcm1Sb3dCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IGZvcm1Sb3cgYWZ0ZXIgY29ycmVjdCBwcm9qZWN0Um93XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtUm93O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2tDcmVhdG9yIGZyb20gXCIuL3NtX3Rhc2tfY3JlYXRvclwiO1xyXG5pbXBvcnQgVGFza1Jvd0NyZWF0b3IgZnJvbSBcIi4vdWlfdGFza19yb3dfY3JlYXRvclwiO1xyXG5pbXBvcnQgUHJpb3JpdHlDb2xvcmVyIGZyb20gXCIuL3VpX3ByaW9yaXR5X2NvbG9yZXJcIjtcclxuaW1wb3J0IEFzc2lnbmVyIGZyb20gXCIuL3NtX3Rhc2tfYXNzaWduZXJcIjtcclxuXHJcbmxldCB0YXNrQ3JlYXRvciA9IG5ldyBUYXNrQ3JlYXRvcigpO1xyXG5sZXQgdGFza1Jvd0NyZWF0b3IgPSBuZXcgVGFza1Jvd0NyZWF0b3IoKTtcclxubGV0IHByaW9yaXR5Q29sb3JlciA9IG5ldyBQcmlvcml0eUNvbG9yZXIoKTtcclxubGV0IGFzc2lnbmVyID0gbmV3IEFzc2lnbmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQnV0dG9uT3BlcmF0b3Ige1xyXG4gICAgY3JlYXRlTmV3VGFza1dpdGhpblByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIC8vIGZpbmQgY29ycmVjdCBwcm9qZWN0IGJ5IGZvcm1Sb3cgSUQsIHVuZGVyIGVhY2ggcHJvamVjdFxyXG4gICAgICAgIGxldCBwX3RpdGxlTm9TcGFjZXMgPSBwcm9qZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCBmb3JtUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Zvcm1fJHtwX3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGdhdGhlciBkYXRhXHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwicHJpb3JpdHlJbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRpdGxlSW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkZXNjcmlwdGlvbklucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkdWVEYXRlSW5wdXRcIl1gKS52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gbGltaXRzIGNoZWNraW5nXHJcbiAgICAgICAgbGV0IHNwZWNpYWxDaGFyYWN0ZXJzID0gL1shQCMkJV4mKigpXytcXC09XFxbXFxde307JzpcIlxcXFx8LC48PlxcLz9dKy87XHJcbiAgICAgICAgbGV0IHRpdGxlQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVycyA9IHNwZWNpYWxDaGFyYWN0ZXJzLnRlc3QodGl0bGUpO1xyXG4gICAgICAgIGxldCBwYXN0VGFza3MgPSBsb2NhbFN0b3JhZ2UudGFza3M7XHJcbiAgICAgICAgbGV0IHBhc3RUYXNrc0FycmF5ID0gcGFzdFRhc2tzID8gcGFzdFRhc2tzLnNwbGl0KCd8JykgOiBbXTtcclxuICAgICAgICBsZXQgdGl0bGVUYWtlbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzdFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKHBhc3RUYXNrc0FycmF5W2ldKTtcclxuICAgICAgICAgICAgaWYgKHRpdGxlID09IHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlVGFrZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpdGxlVGFrZW4pIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBoYXZlIHR3byB0YXNrcyB3aXRoIHRoZSBzYW1lIHRpdGxlLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGl0bGUgPT0gbnVsbCB8fCB0aXRsZSA9PSAnJyB8fCB0aXRsZS5sZW5ndGggPiAyNSkge1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIG5ldyB0YXNrIG11c3QgaGF2ZSBhIG5hbWUgdW5kZXIgMjUgY2hhcmFjdGVycy4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09IG51bGwgfHwgcHJpb3JpdHkgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBhc3NpZ24gYSB0YXNrIHByaW9yaXR5LicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGl0bGVDb250YWluc1NwZWNpYWxDaGFyYWN0ZXJzKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUYXNrIG5hbWUgbWF5IG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzIGFuZCBzcGFjZXMuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA8IDEgfHwgcHJpb3JpdHkgPiAzKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQcmlvcml0eSBsZXZlbCBtdXN0IGJlIHNldCBiZXR3ZWVuIDEgYW5kIDMuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiA2NSkge1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgdW5kZXIgNjUgY2hhcmFjdGVycy4nKVxyXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICAgICAgLy8gcmVzZXQgZGF0YVxyXG4gICAgICAgICAgICBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcmlvcml0eUlucHV0XCJdYCkudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGl0bGVJbnB1dFwiXWApLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uSW5wdXRcIl1gKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkdWVEYXRlSW5wdXRcIl1gKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY3JlYXRlIHRhc2sgYW5kIGRpc3BsYXkgaXRcclxuICAgICAgICAgICAgbGV0IGNvcnJlY3RQcm9qZWN0ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgbGV0IHRhc2sgPSB0YXNrQ3JlYXRvci5uZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZhbHNlLCBjb3JyZWN0UHJvamVjdCk7XHJcbiAgICAgICAgICAgIHRhc2tSb3dDcmVhdG9yLm1ha2VUYXNrUm93KHRhc2ssIHByb2plY3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXNzaWduIGNvbG9yIHRvIHByaW9yaXR5IGNvbHVtblxyXG4gICAgICAgICAgICBwcmlvcml0eUNvbG9yZXIucHJpb3JpdHlDbGFzc0Fzc2lnbmVyKHRhc2spO1xyXG5cclxuICAgICAgICAgICAgLy8gYXNzaWduIHRhc2sgdG8gcHJvamVjdFxyXG4gICAgICAgICAgICBhc3NpZ25lci5hc3NpZ25UYXNrKHByb2plY3QsIHRhc2spO1xyXG5cclxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ1Rhc2tzO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gZXhpc3RpbmdUYXNrcyArICd8JyArIEpTT04uc3RyaW5naWZ5KHRhc2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkodGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVG9vbHRpcE9wZXJhdG9yIGZyb20gXCIuL3VpX3Rvb2x0aXBfb3BlcmF0b3JcIjtcclxubGV0IHRvb2x0aXBPcGVyYXRvciA9IG5ldyBUb29sdGlwT3BlcmF0b3IoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDb21wbGV0ZXIge1xyXG4gICAgY29tcGxldGVUYXNrKHRhc2ssIHByb2plY3QpIHtcclxuICAgICAgICAvLyBzdG9yZSBvbGRUYXNrIGRhdGEgKGJlZm9yZSBhbnkgY2hhbmdlcylcclxuICAgICAgICBsZXQgb2xkVGFzayA9IHRhc2s7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGNvcnJlY3QgdGFza1Jvd1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzcyBmb3IgY3NzIHB1cnBvc2VzXHJcbiAgICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWRUYXNrJyk7XHJcblxyXG4gICAgICAgIC8vIGNoYW5nZSB0aGUgdGFzayBvYmplY3QgZGF0YVxyXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgY29tcGxldGVUYXNrIGJ1dHRvblxyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBidXR0b25zQ2VsbC5yZW1vdmVDaGlsZChidXR0b25zQ2VsbC5jaGlsZHJlblsyXSk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgdGFzayBpbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBsZXQgbG9jYWxUYXNrc0FycmF5ID0gbG9jYWxTdG9yYWdlLnRhc2tzLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsVGFza3NBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRUYXNrT2JqZWN0LnRpdGxlID09IG9sZFRhc2sudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsVGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBsb2NhbFRhc2tzQXJyYXkuam9pbignfCcpO1xyXG5cclxuICAgICAgICAvLyBpbnNlcnQgbmV3IHRhc2sgaW50byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBsZXQgZXhpc3RpbmdUYXNrcztcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nVGFza3MgPSBsb2NhbFN0b3JhZ2UudGFza3M7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGV4aXN0aW5nVGFza3MgKyAnfCcgKyBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIFwibm90IGRvbmVcIiBidXR0b25cclxuICAgICAgICBsZXQgbm90RG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5vdERvbmVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyXJztcclxuICAgICAgICBidXR0b25zQ2VsbC5hcHBlbmRDaGlsZChub3REb25lQnV0dG9uKTtcclxuICAgICAgICBub3REb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy51bkNvbXBsZXRlVGFzayh0YXNrLCBwcm9qZWN0KSk7XHJcbiAgICB9XHJcbiAgICB1bkNvbXBsZXRlVGFzayh0YXNrLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IG9sZFRhc2sgPSB0YXNrO1xyXG5cclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG4gICAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkVGFzaycpO1xyXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBidXR0b25zQ2VsbC5yZW1vdmVDaGlsZChidXR0b25zQ2VsbC5jaGlsZHJlblsyXSk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgdGFzayBpbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBsZXQgbG9jYWxUYXNrc0FycmF5ID0gbG9jYWxTdG9yYWdlLnRhc2tzLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsVGFza3NBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRUYXNrT2JqZWN0LnRpdGxlID09IG9sZFRhc2sudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsVGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBsb2NhbFRhc2tzQXJyYXkuam9pbignfCcpO1xyXG5cclxuICAgICAgICAvLyBpbnNlcnQgbmV3IHRhc2sgaW50byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBsZXQgZXhpc3RpbmdUYXNrcztcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nVGFza3MgPSBsb2NhbFN0b3JhZ2UudGFza3M7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGV4aXN0aW5nVGFza3MgKyAnfCcgKyBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gYWRkIGEgXCJkb25lXCIgYnV0dG9uXHJcbiAgICAgICAgbGV0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkb25lQnV0dG9uLnRleHRDb250ZW50ID0gJ+Kckyc7XHJcbiAgICAgICAgYnV0dG9uc0NlbGwuYXBwZW5kQ2hpbGQoZG9uZUJ1dHRvbik7XHJcbiAgICAgICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY29tcGxldGVUYXNrKHRhc2ssIHByb2plY3QpKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsbCB0b29sdGlwIG1ha2Vyc1xyXG4gICAgICAgIHRvb2x0aXBPcGVyYXRvci50b29sdGlwRm9yQ29tcGxldGUodGFzayk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFza0NvbXBsZXRlciBmcm9tIFwiLi91aV90YXNrX2NvbXBsZXRlclwiO1xyXG5pbXBvcnQgVG9vbHRpcE9wZXJhdG9yIGZyb20gXCIuL3VpX3Rvb2x0aXBfb3BlcmF0b3JcIjtcclxuaW1wb3J0IFByaW9yaXR5Q29sb3JlciBmcm9tIFwiLi91aV9wcmlvcml0eV9jb2xvcmVyXCI7XHJcbmltcG9ydCBUYXNrRGVsZXRlciBmcm9tIFwiLi9zbV90YXNrX2RlbGV0ZXJcIjtcclxuXHJcbmxldCB0YXNrQ29tcGxldGVyID0gbmV3IFRhc2tDb21wbGV0ZXIoKTtcclxubGV0IHRvb2x0aXBPcGVyYXRvciA9IG5ldyBUb29sdGlwT3BlcmF0b3IoKTtcclxubGV0IHByaW9yaXR5Q29sb3JlciA9IG5ldyBQcmlvcml0eUNvbG9yZXIoKTtcclxubGV0IHRhc2tEZWxldGVyID0gbmV3IFRhc2tEZWxldGVyKCk7XHJcblxyXG4vLyBleHRlcm5hbCBsaWJyYXJpZXNcclxuaW1wb3J0IHsgZGlmZmVyZW5jZUluRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0VkaXRvciB7XHJcbiAgICBlZGl0QnV0dG9uT3BlcmF0b3IodGFzaywgcHJvamVjdCkge1xyXG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnQ2Fubm90IGVkaXQgYSBjb21wbGV0ZWQgdGFzay4nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbFRleHQgPSB0YXNrUm93LmNoaWxkcmVuW2ldLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlbltpXS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ21pbicsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ21heCcsIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHlJbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC52YWx1ZSA9IGNlbGxUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZUlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnZhbHVlID0gY2VsbFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uSW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3gudmFsdWUgPSBjZWxsVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZUlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnZhbHVlID0gdGFzay5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5baV0uYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBib3RoIGJ1dHRvbnNcclxuICAgICAgICAgICAgd2hpbGUodGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkgeyB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV0ucmVtb3ZlQ2hpbGQodGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdLmNoaWxkcmVuWzBdKTsgfVxyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gdGhhdCBva2F5cyB0aGUgY2hhbmdlc1xyXG4gICAgICAgICAgICBsZXQgYWNjZXB0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgYWNjZXB0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgICAgICAgICAgYWNjZXB0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWNjZXB0IENoYW5nZXMnKTtcclxuICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdLmFwcGVuZENoaWxkKGFjY2VwdEJ1dHRvbik7XHJcbiAgICAgICAgICAgIC8vIHdoaWNoIGNhbGxzIGFjY2VwdENoYW5nZXNPcGVyYXRvclxyXG4gICAgICAgICAgICBhY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFjY2VwdENoYW5nZXNPcGVyYXRvcih0YXNrLCBwcm9qZWN0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYWNjZXB0Q2hhbmdlc09wZXJhdG9yXHJcbiAgICBhY2NlcHRDaGFuZ2VzT3BlcmF0b3IodGFzaywgcHJvamVjdCkge1xyXG4gICAgICAgIC8vIHRyaWdnZXJzIG9uIGNoYW5nZXMgYmVpbmcgYWNjZXB0ZWRcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBnYXRoZXIgZGF0YVxyXG4gICAgICAgIGxldCBwcmlvcml0eSA9IHRhc2tSb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInByaW9yaXR5SW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgdGl0bGUgPSB0YXNrUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJ0aXRsZUlucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdGFza1Jvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25JbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlID0gdGFza1Jvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZHVlRGF0ZUlucHV0XCJdYCkudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGxpbWl0cyBjaGVja2luZ1xyXG4gICAgICAgIGxldCBzcGVjaWFsQ2hhcmFjdGVycyA9IC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XSsvO1xyXG4gICAgICAgIGxldCB0aXRsZUNvbnRhaW5zU3BlY2lhbENoYXJhY3RlcnMgPSBzcGVjaWFsQ2hhcmFjdGVycy50ZXN0KHRpdGxlKTtcclxuICAgICAgICBsZXQgcGFzdFRhc2tzID0gbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgICAgIGxldCBwYXN0VGFza3NBcnJheSA9IHBhc3RUYXNrcyA/IHBhc3RUYXNrcy5zcGxpdCgnfCcpIDogW107XHJcbiAgICAgICAgbGV0IHRpdGxlVGFrZW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgb2xkVGl0bGUgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFzdFRhc2tzQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKHBhc3RUYXNrc0FycmF5W2pdKTtcclxuICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT0gcmV0cmlldmVkVGFza09iamVjdC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcGFzdFRhc2tzQXJyYXkuc3BsaWNlKGosIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXN0VGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmV0cmlldmVkVGFza09iamVjdCA9IEpTT04ucGFyc2UocGFzdFRhc2tzQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICBpZiAodGl0bGUgPT0gcmV0cmlldmVkVGFza09iamVjdC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVUYWtlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZiAodGl0bGVUYWtlbikge1xyXG4gICAgICAgICAgICBhbGVydCgnQ2Fubm90IGhhdmUgdHdvIHRhc2tzIHdpdGggdGhlIHNhbWUgdGl0bGUuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aXRsZSA9PSBudWxsIHx8IHRpdGxlID09ICcnIHx8IHRpdGxlLmxlbmd0aCA+IDI1KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgbmV3IHRhc2sgbXVzdCBoYXZlIGEgbmFtZSB1bmRlciAyNSBjaGFyYWN0ZXJzLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gbnVsbCB8fCBwcmlvcml0eSA9PSAnJykge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGFzc2lnbiBhIHRhc2sgcHJpb3JpdHkuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aXRsZUNvbnRhaW5zU3BlY2lhbENoYXJhY3RlcnMpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSBtYXkgb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMgYW5kIHNwYWNlcy4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5IDwgMSB8fCBwcmlvcml0eSA+IDMpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1ByaW9yaXR5IGxldmVsIG11c3QgYmUgc2V0IGJldHdlZW4gMSBhbmQgMy4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA+IDY1KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSB1bmRlciA2NSBjaGFyYWN0ZXJzLicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY2hhbmdlIHRhc2sgZGF0YVxyXG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG5cclxuICAgICAgICAgICAgLy8gdXNlIGRhdGUtZm5zIHRvIGVzdGFibGlzaCBkaWZmZXJlbmNlSW5EYXlzXHJcbiAgICAgICAgICAgIGlmICh0YXNrLmR1ZURhdGUgIT09ICcnIHx8IHRhc2suZHVlRGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGFzay5kYXlzTGVmdCA9IGRpZmZlcmVuY2VJbkRheXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICkgICAgXHJcbiAgICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgICAgICAvLyBlbXB0eSB0aGUgY2VsbHNcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRhc2tSb3cuY2hpbGRyZW5baV0uZmlyc3RDaGlsZCkgeyB0YXNrUm93LmNoaWxkcmVuW2ldLnJlbW92ZUNoaWxkKHRhc2tSb3cuY2hpbGRyZW5baV0uZmlyc3RDaGlsZCkgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBkdWVEYXRlIGNlbGwgY29udGVudHNcclxuICAgICAgICAgICAgaWYgKHRhc2suZGF5c0xlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gYFRvIGRvIGluICR7dGFzay5kYXlzTGVmdH0gZGF5c2A7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5kYXlzTGVmdCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBgJHstdGFzay5kYXlzTGVmdH0gZGF5cyBvdmVyZHVlYDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmRheXNMZWZ0ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBgVG9kYXlgO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suZGF5c0xlZnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gcmUtZXN0YWJsaXNoIHRoZSB0YXNrUm93XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmV3X3RfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuaWQgPSBgdGFza18ke25ld190X3RpdGxlTm9TcGFjZXN9YDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25zQWRkZXIodGFzaywgcHJvamVjdCwgb2xkVGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXNzaWduIGNvbG9yIHRvIHByaW9yaXR5IGNvbHVtblxyXG4gICAgICAgICAgICBwcmlvcml0eUNvbG9yZXIucHJpb3JpdHlDbGFzc0Fzc2lnbmVyKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbnNBZGRlcih0YXNrLCBwcm9qZWN0LCBvbGRUaXRsZSkge1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbnNDZWxsID0gdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGJ1dHRvbnNDZWxsLnJlbW92ZUNoaWxkKGJ1dHRvbnNDZWxsLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAn4pyOJztcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJMnO1xyXG4gICAgICAgIGJ1dHRvbnNDZWxsLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG5cclxuICAgICAgICAvLyBkZWxldGUgYnV0dG9uXHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IGDwn5eRYDtcclxuICAgICAgICBidXR0b25zQ2VsbC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbnNDZWxsLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZWRpdEJ1dHRvbk9wZXJhdG9yKHRhc2ssIHByb2plY3QpKTtcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tDb21wbGV0ZXIuY29tcGxldGVUYXNrKHRhc2ssIHByb2plY3QpKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrRGVsZXRlci5kZWxldGVUYXNrKHRhc2spKTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNsYXNzXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1bmljb2RlJyk7XHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5pY29kZScpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1bmljb2RlJyk7XHJcblxyXG4gICAgICAgIC8vIENhbGwgdG9vbHRpcCBtYWtlcnNcclxuICAgICAgICB0b29sdGlwT3BlcmF0b3IudG9vbHRpcEZvckVkaXQodGFzayk7XHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JDb21wbGV0ZSh0YXNrKTtcclxuICAgICAgICB0b29sdGlwT3BlcmF0b3IudG9vbHRpcEZvckRlbGV0ZSh0YXNrKTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCB0YXNrIGluIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGxldCBsb2NhbFRhc2tzQXJyYXkgPSBsb2NhbFN0b3JhZ2UudGFza3Muc3BsaXQoJ3wnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmV0cmlldmVkVGFza09iamVjdCA9IEpTT04ucGFyc2UobG9jYWxUYXNrc0FycmF5W2ldKTtcclxuICAgICAgICAgICAgaWYgKHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUgPT0gb2xkVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsVGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBsb2NhbFRhc2tzQXJyYXkuam9pbignfCcpO1xyXG5cclxuICAgICAgICAvLyBpbnNlcnQgdGFzayBpbnRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGxldCBleGlzdGluZ1Rhc2tzO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdUYXNrcyA9IGxvY2FsU3RvcmFnZS50YXNrcztcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gZXhpc3RpbmdUYXNrcyArICd8JyArIEpTT04uc3RyaW5naWZ5KHRhc2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFza0VkaXRvciBmcm9tICcuL3VpX3Rhc2tfZWRpdG9yJztcclxuaW1wb3J0IFRhc2tDb21wbGV0ZXIgZnJvbSAnLi91aV90YXNrX2NvbXBsZXRlcic7XHJcbmltcG9ydCBUb29sdGlwT3BlcmF0b3IgZnJvbSAnLi91aV90b29sdGlwX29wZXJhdG9yJztcclxuaW1wb3J0IFRhc2tEZWxldGVyIGZyb20gJy4vc21fdGFza19kZWxldGVyJztcclxuXHJcbmxldCB0YXNrRWRpdG9yID0gbmV3IFRhc2tFZGl0b3IoKTtcclxubGV0IHRhc2tDb21wbGV0ZXIgPSBuZXcgVGFza0NvbXBsZXRlcigpO1xyXG5sZXQgdG9vbHRpcE9wZXJhdG9yID0gbmV3IFRvb2x0aXBPcGVyYXRvcigpO1xyXG5sZXQgdGFza0RlbGV0ZXIgPSBuZXcgVGFza0RlbGV0ZXIoKTtcclxuXHJcbi8vIGV4dGVybmFsIGxpYnJhcmllc1xyXG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrUm93Q3JlYXRvciB7XHJcbiAgICBtYWtlVGFza1Jvdyh0YXNrLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gRmluZCB0aGUgY29ycmVjdCBwcm9qZWN0IHJvd1xyXG4gICAgICAgIGxldCBwX3RpdGxlTm9TcGFjZXMgPSBwcm9qZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0Um93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jvd18ke3BfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzIG9mIHRoZSB0YXNrIHJvd1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0YXNrUm93LmNsYXNzTGlzdC5hZGQoJ3Rhc2tSb3cnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCB0YXNrUm93QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgIC8vIENlbnRlcmluZ1xyXG4gICAgICAgIHRhc2tSb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjZW50ZXJlZCcpO1xyXG5cclxuICAgICAgICAvLyBEYXRlIGNlbGxcclxuICAgICAgICAgICAgLy8gMSkgdW5kZXJzdGFuZCB3aGF0IGZvcm1hdCBpcyB0YXNrLmR1ZURhdGUgaW4uIGlzIGl0IGEgc3RyaW5nPyBhbiBvYmplY3Q/XHJcbiAgICAgICAgICAgIC8vIGFuc3dlcjogaXQncyBhIHN0cmluZyBpbiB0aGUgJ3l5eXktbW0tZGQnIGZvcm1hdFxyXG4gICAgICAgICAgICAvLyAyKSB0cmFuc2Zvcm0gdGhhdCBzdHJpbmcgaW50byBhbiBvYmplY3QgZGF0YSBmbnMgY2FuIHVzZSBpbiBpdHMgY2FsY3VsYXRpb25zXHJcbiAgICAgICAgICAgIC8vIGFuc3dlcjogZnJvbSB0aGUgZG9jdW1lbnRhdGlvbiBpdCBsb29rcyBsaWtlIGEgc3RyaW5nIGlzIGZpbmVcclxuICAgICAgICAgICAgLy8gMykgZXN0YWJsaXNoIHRvZGF5XHJcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSAhPT0gJycgfHwgdGFzay5kdWVEYXRlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhc2suZGF5c0xlZnQgPSBkaWZmZXJlbmNlSW5EYXlzKFxyXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKVxyXG4gICAgICAgICAgICApICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGV4dCBjb250ZW50cyBvZiB0aGUgZWxlbWVudHNcclxuICAgICAgICB0YXNrUm93UHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tSb3dUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgdGFza1Jvd0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgICAgICBpZiAodGFzay5kYXlzTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgdGFza1Jvd0R1ZURhdGUudGV4dENvbnRlbnQgPSBgVG8gZG8gaW4gJHt0YXNrLmRheXNMZWZ0fSBkYXlzYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhc2suZGF5c0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRhc2tSb3dEdWVEYXRlLnRleHRDb250ZW50ID0gYCR7LXRhc2suZGF5c0xlZnR9IGRheXMgb3ZlcmR1ZWA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLmRheXNMZWZ0ID09IDApIHtcclxuICAgICAgICAgICAgdGFza1Jvd0R1ZURhdGUudGV4dENvbnRlbnQgPSBgVG9kYXlgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5kYXlzTGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhc2tSb3dEdWVEYXRlLnRleHRDb250ZW50ID0gYGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb250ZW50cyBvZiB0YXNrUm93QnV0dG9uc1xyXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinI4nO1xyXG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyTJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXNrUm93QnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgLy8gZGVsZXRlIGJ1dHRvblxyXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBg8J+XkWA7XHJcbiAgICAgICAgdGFza1Jvd0J1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgdGFza1Jvd0J1dHRvbnMuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGFza1Jvd1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd1ByaW9yaXR5KTtcclxuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dUaXRsZSk7XHJcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd0R1ZURhdGUpO1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd0J1dHRvbnMpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0YXNrIGlzIGNvbXBsZXRlZFxyXG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWRUYXNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFZGl0IFRhc2tzXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tFZGl0b3IuZWRpdEJ1dHRvbk9wZXJhdG9yKHRhc2ssIHByb2plY3QpKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGUgVGFza3NcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0NvbXBsZXRlci5jb21wbGV0ZVRhc2sodGFzaywgcHJvamVjdCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0NvbXBsZXRlci51bkNvbXBsZXRlVGFzayh0YXNrLCBwcm9qZWN0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWxldGUgVGFza3MgZXZlbnRcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrRGVsZXRlci5kZWxldGVUYXNrKHRhc2spKTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNsYXNzXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1bmljb2RlJyk7XHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5pY29kZScpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1bmljb2RlJyk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCB0YXNrUm93IGFmdGVyIGNvcnJlY3QgcHJvamVjdFJvd1xyXG4gICAgICAgIHByb2plY3RSb3cuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHRhc2tSb3cpO1xyXG5cclxuICAgICAgICAvLyBnaXZlIElEIGZvciBlZGl0aW5nIHB1cnBvc2VzXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgdGFza1Jvdy5zZXRBdHRyaWJ1dGUoYGlkYCwgYHRhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIENhbGwgdG9vbHRpcCBtYWtlcnNcclxuICAgICAgICB0b29sdGlwT3BlcmF0b3IudG9vbHRpcEZvckVkaXQodGFzayk7XHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JDb21wbGV0ZSh0YXNrKTtcclxuICAgICAgICB0b29sdGlwT3BlcmF0b3IudG9vbHRpcEZvckRlbGV0ZSh0YXNrKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXBPcGVyYXRvciB7XHJcbiAgICB0b29sdGlwRm9yRWRpdCh0YXNrKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIHRvb2x0aXAgbm90ZVxyXG4gICAgICAgIGxldCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSAnRWRpdCB0YXNrLidcclxuXHJcbiAgICAgICAgLy8gZmluZCBjb3JyZWN0IHRhc2tcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHBhcmVudCBub2RlIChlZGl0IGJ1dHRvbilcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBidXR0b25zQ2VsbC5jaGlsZHJlblswXTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNsYXNzZXNcclxuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBQYXJlbnQnKTtcclxuICAgICAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKTtcclxuXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOnJlbGF0aXZlOycpO1xyXG4gICAgICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQodG9vbHRpcCk7XHJcbiAgICB9XHJcbiAgICB0b29sdGlwRm9yQ29tcGxldGUodGFzaykge1xyXG4gICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwIG5vdGVcclxuICAgICAgICBsZXQgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b29sdGlwLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlIHRhc2suJ1xyXG5cclxuICAgICAgICAvLyBmaW5kIGNvcnJlY3QgdGFza1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgcGFyZW50IG5vZGUgKGVkaXQgYnV0dG9uKVxyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBsZXQgY29tcGxldGVCdXR0b24gPSBidXR0b25zQ2VsbC5jaGlsZHJlblsyXTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNsYXNzZXNcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sdGlwUGFyZW50Jyk7XHJcbiAgICAgICAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJyk7XHJcblxyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7Jyk7XHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uYXBwZW5kQ2hpbGQodG9vbHRpcCk7XHJcbiAgICB9XHJcbiAgICB0b29sdGlwRm9yRGVsZXRlKHRhc2spIHtcclxuICAgICAgICAvLyBjcmVhdGUgdG9vbHRpcCBub3RlXHJcbiAgICAgICAgbGV0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9ICdEZWxldGUgdGFzay4nXHJcblxyXG4gICAgICAgIC8vIGZpbmQgY29ycmVjdCB0YXNrXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBwYXJlbnQgbm9kZSAoZWRpdCBidXR0b24pXHJcbiAgICAgICAgbGV0IGJ1dHRvbnNDZWxsID0gdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBidXR0b25zQ2VsbC5jaGlsZHJlblsxXTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNsYXNzZXNcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbHRpcFBhcmVudCcpO1xyXG4gICAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xyXG5cclxuICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsnKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQodG9vbHRpcCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXkgcGVyaW9kcyBiZXR3ZWVuIHR3byBkYXRlcy4gRnJhY3Rpb25hbCBkYXlzIGFyZVxuICogdHJ1bmNhdGVkIHRvd2FyZHMgemVyby5cbiAqXG4gKiBPbmUgXCJmdWxsIGRheVwiIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgbG9jYWwgdGltZSBpbiBvbmUgZGF5IHRvIHRoZSBzYW1lXG4gKiBsb2NhbCB0aW1lIG9uIHRoZSBuZXh0IG9yIHByZXZpb3VzIGRheS4gQSBmdWxsIGRheSBjYW4gc29tZXRpbWVzIGJlIGxlc3MgdGhhblxuICogb3IgbW9yZSB0aGFuIDI0IGhvdXJzIGlmIGEgZGF5bGlnaHQgc2F2aW5ncyBjaGFuZ2UgaGFwcGVucyBiZXR3ZWVuIHR3byBkYXRlcy5cbiAqXG4gKiBUbyBpZ25vcmUgRFNUIGFuZCBvbmx5IG1lYXN1cmUgZXhhY3QgMjQtaG91ciBwZXJpb2RzLCB1c2UgdGhpcyBpbnN0ZWFkOlxuICogYE1hdGgudHJ1bmMoZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkvMjQpfDBgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGFjY29yZGluZyB0byB0aGUgbG9jYWwgdGltZXpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4gKiAvLz0+IDkyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHNpZ24gPSBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KTtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpKTtcblxuICBfZGF0ZUxlZnQuc2V0RGF0ZShfZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBkYXlzIC0gZGlmZiBpbiBjYWxlbmRhciBkYXlzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIGRheSBpcyBub3QgZnVsbFxuICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgY29uc3QgaXNMYXN0RGF5Tm90RnVsbCA9IE51bWJlcihcbiAgICBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gLXNpZ24sXG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdERheU5vdEZ1bGwpO1xuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59XG5cbi8vIExpa2UgYGNvbXBhcmVBc2NgIGJ1dCB1c2VzIGxvY2FsIHRpbWUgbm90IFVUQywgd2hpY2ggaXMgbmVlZGVkXG4vLyBmb3IgYWNjdXJhdGUgZXF1YWxpdHkgY29tcGFyaXNvbnMgb2YgVVRDIHRpbWVzdGFtcHMgdGhhdCBlbmQgdXBcbi8vIGhhdmluZyB0aGUgc2FtZSByZXByZXNlbnRhdGlvbiBpbiBsb2NhbCB0aW1lLCBlLmcuIG9uZSBob3VyIGJlZm9yZVxuLy8gRFNUIGVuZHMgdnMuIHRoZSBpbnN0YW50IHRoYXQgRFNUIGVuZHMuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkaWZmID1cbiAgICBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHxcbiAgICBkYXRlTGVmdC5nZXREYXRlKCkgLSBkYXRlUmlnaHQuZ2V0RGF0ZSgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0SG91cnMoKSAtIGRhdGVSaWdodC5nZXRIb3VycygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldFNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRTZWNvbmRzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRNaWxsaXNlY29uZHMoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkRheXM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydGluZ1xyXG5pbXBvcnQgUHJvamVjdEJ1dHRvbk9wZXJhdG9yIGZyb20gJy4vdWlfcHJvamVjdF9idXR0b25fb3ByJztcclxuaW1wb3J0IFByb2plY3RDcmVhdG9yIGZyb20gJy4vc21fcHJvamVjdF9jcmVhdG9yJztcclxuaW1wb3J0IFRhc2tDcmVhdG9yIGZyb20gJy4vc21fdGFza19jcmVhdG9yJztcclxuaW1wb3J0IFJvd0NyZWF0b3IgZnJvbSAnLi91aV9yb3dfY3JlYXRvcic7XHJcbmltcG9ydCBUYXNrUm93Q3JlYXRvciBmcm9tICcuL3VpX3Rhc2tfcm93X2NyZWF0b3InO1xyXG5pbXBvcnQgUHJpb3JpdHlDb2xvcmVyIGZyb20gJy4vdWlfcHJpb3JpdHlfY29sb3Jlcic7XHJcbmltcG9ydCBCYWNrZ3JvdW5kRHJhd2VyIGZyb20gJy4vdWlfYmdfZHJhd2VyJztcclxuaW1wb3J0IERpYWxvZ01ha2VyIGZyb20gJy4vdWlfZGlhbG9nX21ha2VyJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuLy8gaW5pdGlhbGl6ZSBpbnN0YW5jZXNcclxubGV0IHByb2plY3RCdXR0b25PcGVyYXRvciA9IG5ldyBQcm9qZWN0QnV0dG9uT3BlcmF0b3IoKTtcclxubGV0IHByb2plY3RDcmVhdG9yID0gbmV3IFByb2plY3RDcmVhdG9yKCk7XHJcbmxldCB0YXNrQ3JlYXRvciA9IG5ldyBUYXNrQ3JlYXRvcigpO1xyXG5sZXQgcm93Q3JlYXRvciA9IG5ldyBSb3dDcmVhdG9yKCk7XHJcbmxldCB0YXNrUm93Q3JlYXRvciA9IG5ldyBUYXNrUm93Q3JlYXRvcigpO1xyXG5sZXQgcHJpb3JpdHlDb2xvcmVyID0gbmV3IFByaW9yaXR5Q29sb3JlcigpO1xyXG5sZXQgYmFja2dyb3VuZERyYXdlciA9IG5ldyBCYWNrZ3JvdW5kRHJhd2VyKCk7XHJcbmxldCBkaWFsb2dNYWtlciA9IG5ldyBEaWFsb2dNYWtlcigpO1xyXG5cclxuLy8gdGVzdGluZ1xyXG5kaWFsb2dNYWtlci5jcmVhdGVQcm9qZWN0RGlhbG9nKCk7XHJcbmxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9jcmVhdGVOZXdQcm9qZWN0Jyk7XHJcbnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0QnV0dG9uT3BlcmF0b3IuY3JlYXRlTmV3UHJvamVjdFdpdGhEaWFsb2cpO1xyXG5cclxuLy8gcmV0cmlldmluZyBsb2NhbFN0b3JhZ2UgZm9yIHByb2plY3RzXHJcbmxldCBwYXN0UHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UucHJvamVjdHM7XHJcbmxldCBwYXN0UHJvamVjdHNBcnJheSA9IHBhc3RQcm9qZWN0cyA/IHBhc3RQcm9qZWN0cy5zcGxpdCgnfCcpIDogW107XHJcbmxldCBwcm9qZWN0T2JqZWN0c0FycmF5ID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcGFzdFByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHBhc3RQcm9qZWN0c0FycmF5W2ldKTtcclxuICAgIGxldCBuZXdQcm9qZWN0T2JqZWN0ID0gcHJvamVjdENyZWF0b3IubmV3UHJvamVjdChyZXRyaWV2ZWRPYmplY3QudGl0bGUpO1xyXG4gICAgcm93Q3JlYXRvci5tYWtlUHJvamVjdFJvdyhuZXdQcm9qZWN0T2JqZWN0KTtcclxuICAgIHJvd0NyZWF0b3IubWFrZUZvcm1Sb3cobmV3UHJvamVjdE9iamVjdCk7XHJcbiAgICBwcm9qZWN0T2JqZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdE9iamVjdCk7XHJcbn1cclxuaWYgKHBhc3RQcm9qZWN0c0FycmF5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAvLyBkcmF3IGJhY2tncm91bmRcclxuICAgIGJhY2tncm91bmREcmF3ZXIuZHJhd0JhY2tncm91bmQoKTtcclxufVxyXG5cclxuLy8gcmV0cmlldmUgbG9jYWxTdG9yYWdlIGZvciB0YXNrc1xyXG5sZXQgcGFzdFRhc2tzID0gbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG5sZXQgcGFzdFRhc2tzQXJyYXkgPSBwYXN0VGFza3MgPyBwYXN0VGFza3Muc3BsaXQoJ3wnKSA6IFtdO1xyXG5pZiAocGFzdFRhc2tzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXN0VGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCByZXRyaWV2ZWRUYXNrT2JqZWN0ID0gSlNPTi5wYXJzZShwYXN0VGFza3NBcnJheVtpXSk7XHJcbiAgICAgICAgbGV0IG5ld1Rhc2tPYmplY3QgPSB0YXNrQ3JlYXRvci5uZXdUYXNrKHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUsIHJldHJpZXZlZFRhc2tPYmplY3QuZGVzY3JpcHRpb24sIHJldHJpZXZlZFRhc2tPYmplY3QuZHVlRGF0ZSwgcmV0cmlldmVkVGFza09iamVjdC5wcmlvcml0eSwgcmV0cmlldmVkVGFza09iamVjdC5pc0NvbXBsZXRlLCByZXRyaWV2ZWRUYXNrT2JqZWN0LnBhcnRPZlByb2plY3QpO1xyXG4gICAgICAgIGxldCBjb3JyZWN0UHJvamVjdCA9IHByb2plY3RPYmplY3RzQXJyYXkuZmluZChpID0+IGkudGl0bGUgPT0gbmV3VGFza09iamVjdC5wYXJ0T2ZQcm9qZWN0KTtcclxuICAgICAgICB0YXNrUm93Q3JlYXRvci5tYWtlVGFza1JvdyhuZXdUYXNrT2JqZWN0LCBjb3JyZWN0UHJvamVjdCk7XHJcbiAgICAgICAgcHJpb3JpdHlDb2xvcmVyLnByaW9yaXR5Q2xhc3NBc3NpZ25lcihuZXdUYXNrT2JqZWN0KTtcclxuICAgICAgICBpZiAobmV3VGFza09iamVjdC5pc0NvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IG5ld1Rhc2tPYmplY3QudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkVGFzaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==