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

html, body {
    margin: 0;
    height: 100%;
    font-family: 'Graduate';
}

button {
    font-family: 'Graduate';
}

input[type="submit"] {
    font-family: 'Graduate';
}

@font-face {
    font-family: 'Graduate';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

#container {
    display: grid;
    grid-template-columns: 80px auto;
    grid-template-rows: 80px auto;
    min-height: 100%;
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

td input {
    width: 100%;
    font-family: 'Graduate';
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
}

.projectRow {
    width: 100%;
    background-color: var(--backgroundBlue);
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,+DAAqD;IACrD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;IAClC,kCAAkC;AACtC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;IACjC,cAAc;IACd,WAAW;AACf;;AAEA;IACI,iCAAiC;IACjC,cAAc;IACd,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,uCAAuC;AAC3C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,cAAc;AAClB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,iCAAiC;IACjC,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;IACd,UAAU;IACV,YAAY;IACZ,WAAW;IACX,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\r\n    --mainBlue: #5C98C1;\r\n    --offWhite: #EFF0F4;\r\n    --lightGrey: #9F9293;\r\n    --darkGrey: #806C64;\r\n    --backgroundBlue: #2975A7;\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    height: 100%;\r\n    font-family: 'Graduate';\r\n}\r\n\r\nbutton {\r\n    font-family: 'Graduate';\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n    font-family: 'Graduate';\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Graduate';\r\n    src: url('./Graduate-Regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template-columns: 80px auto;\r\n    grid-template-rows: 80px auto;\r\n    min-height: 100%;\r\n}\r\n\r\nheader {\r\n    background-color: var(--backgroundBlue);\r\n    grid-column: 1 / 3;\r\n    grid-row: 1;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\nbutton {\r\n    background-color: var(--darkGrey);\r\n    border: 3px solid var(--darkGrey);\r\n    color: var(--offWhite);\r\n}\r\n\r\nbutton:hover {\r\n    background-color: var(--lightGrey);\r\n    border: 3px solid var(--lightGrey);\r\n}\r\n\r\nh1 {\r\n    color: var(--offWhite);\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\ntr {\r\n    height: 30px;\r\n}\r\n\r\ntd:nth-child(1) {\r\n    width: 70px;\r\n}\r\n\r\ntd:nth-child(2) {\r\n    width: 120px;\r\n}\r\n\r\ntd:nth-child(4) {\r\n    width: 100px;\r\n}\r\n\r\ntd:nth-child(5) {\r\n    width: 150px;\r\n}\r\n\r\ntd button {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: black;\r\n    height: 100%;   \r\n}\r\n\r\ntd input {\r\n    width: 100%;\r\n    font-family: 'Graduate';\r\n}\r\n\r\ntd button:hover {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\nnav {\r\n    background-color: var(--mainBlue);\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n}\r\n\r\n#tasksWindow {\r\n    background-color: var(--offWhite);\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 5px;\r\n}\r\n\r\n.projectRow {\r\n    width: 100%;\r\n    background-color: var(--backgroundBlue);\r\n}\r\n\r\n.projectRow td {\r\n    padding: 5px;\r\n}\r\n\r\n.taskRow {\r\n    width: 100%;\r\n    background-color: var(--offWhite);\r\n    font-size: 80%;\r\n}\r\n\r\n.headerRow {\r\n    background-color: var(--lightGrey);\r\n}\r\n\r\n.headerRow td {\r\n    padding: 5px;\r\n}\r\n\r\n.completedTask {\r\n    background-color: var(--darkGrey);\r\n    text-decoration: line-through;\r\n}\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    opacity: 0.8;\r\n    background-color: var(--darkGrey);\r\n    color: var(--offWhite);\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    z-index: 1;\r\n    width: 100px;\r\n    bottom: 90%;\r\n    left: 50%;\r\n    margin-left: -50px;\r\n}\r\n\r\n.tooltipParent:hover .tooltip {\r\n    visibility: visible;\r\n}\r\n\r\n.mediumPriority {\r\n    color: orangered;\r\n}\r\n\r\n.highPriority {\r\n    font-weight: bold;\r\n    color: maroon;\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
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
    constructor(title, description, dueDate, priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isComplete = false;
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
    newTask(title, description, dueDate, priority) {
        return new _class_task__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority)
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



let projectCreator = new _sm_project_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let rowCreator = new _ui_row_creator__WEBPACK_IMPORTED_MODULE_0__["default"]();

class ProjectButtonOperator {
    createNewProjectWithUI() {
        let projectTitle = window.prompt("Please input the name of the new project.");
        let project = projectCreator.newProject(projectTitle);
        rowCreator.makeProjectRow(project);
        rowCreator.makeFormRow(project);
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



let taskButtonOperator = new _ui_task_button_opr__WEBPACK_IMPORTED_MODULE_0__["default"]();
let headerCreator = new _ui_header_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();

class RowCreator {
    makeProjectRow(project) {
        let table = document.querySelector('table');
        if (table.children.length == 0) {
            headerCreator.makeHeaderCells();
        }
        let projectRow = document.createElement('tr');
        let projectData = document.createElement('td');
        projectData.setAttribute('colspan', 5);
        projectRow.classList.add('projectRow');
        projectData.textContent = project.title;
        table.appendChild(projectRow);
        projectRow.appendChild(projectData);

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




let taskCreator = new _sm_task_creator__WEBPACK_IMPORTED_MODULE_0__["default"]();
let taskRowCreator = new _ui_task_row_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let priorityColorer = new _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_2__["default"]();

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
        if (title == null || title == '') {
            alert('The new task must have a name.');
        } else if (priority == null || priority == '') {
            alert('Please assign a task priority.');
        }
        else if (titleContainsSpecialCharacters) {
            alert('Task name may only contain letters, numbers and spaces.');
        } else {        
            // reset data
            formRow.querySelector(`input[name="priorityInput"]`).value = '';
            formRow.querySelector(`input[name="titleInput"]`).value = '';
            formRow.querySelector(`input[name="descriptionInput"]`).value = '';
            formRow.querySelector(`input[name="dueDateInput"]`).value = '';
            
            // create task and display it
            let task = taskCreator.newTask(title, description, dueDate, priority);
            taskRowCreator.makeTaskRow(task, project);

            // assign color to priority column
            priorityColorer.priorityClassAssigner(task);
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
    completeTask(task) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        taskRow.classList.add('completedTask');
        task.isComplete = true;
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[1]);

        // add a "not done" button
        let notDoneButton = document.createElement('button');
        notDoneButton.textContent = '✗';
        buttonsCell.appendChild(notDoneButton);
        notDoneButton.addEventListener('click', () => this.unCompleteTask(task));
    }
    unCompleteTask(task) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        taskRow.classList.remove('completedTask');
        task.isComplete = false;
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[1]);

        // add a "done" button
        let doneButton = document.createElement('button');
        doneButton.textContent = '✓';
        buttonsCell.appendChild(doneButton);
        doneButton.addEventListener('click', () => this.completeTask(task));

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




let taskCompleter = new _ui_task_completer__WEBPACK_IMPORTED_MODULE_0__["default"]();
let tooltipOperator = new _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let priorityColorer = new _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_2__["default"]();

class TaskEditor {
    editButtonOperator(task) {
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
                        break;
                    case 1:
                        inputBox.setAttribute('type', 'text');
                        inputBox.setAttribute('name', 'titleInput');
                        break;
                    case 2:
                        inputBox.setAttribute('type', 'text');
                        inputBox.setAttribute('name', 'descriptionInput');
                        break;
                    case 3:
                        inputBox.setAttribute('type', 'date');
                        inputBox.setAttribute('name', 'dueDateInput');
                        break;
                }
                inputBox.value = cellText;
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
            acceptButton.addEventListener('click', () => this.acceptChangesOperator(task));
        }
    }
    // acceptChangesOperator
    acceptChangesOperator(task) {
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
        if (title == null || title == '') {
            alert('The new task must have a name.');
        } else if (priority == null || priority == '') {
            alert('Please assign a task priority.');
        }
        else if (titleContainsSpecialCharacters) {
            alert('Task name may only contain letters, numbers and spaces.');
        } else {
            // change task around
            task.priority = priority;
            task.title = title;
            task.description = description;
            task.dueDate = dueDate;

            // re-establish the taskRow
            for (let i = 0; i < taskRow.children.length; i++) {
                taskRow.children[i].removeChild(taskRow.children[i].children[0]);
            }
            taskRow.children[0].textContent = task.priority;
            taskRow.children[1].textContent = task.title;
            taskRow.children[2].textContent = task.description;
            taskRow.children[3].textContent = task.dueDate;
            
            let new_t_titleNoSpaces = task.title.replaceAll(' ', '_');
            taskRow.id = `task_${new_t_titleNoSpaces}`;
            this.buttonsAdder(task);

            // assign color to priority column
            priorityColorer.priorityClassAssigner(task);
        }
    }
    buttonsAdder(task) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        let buttonsCell = taskRow.children[taskRow.children.length - 1];

        let editButton = document.createElement('button');
        let completeButton = document.createElement('button');
        editButton.textContent = '✎';
        completeButton.textContent = '✓';
        buttonsCell.appendChild(editButton);
        buttonsCell.appendChild(completeButton);

        editButton.addEventListener('click', () => this.editButtonOperator(task));
        completeButton.addEventListener('click', () => taskCompleter.completeTask(task));

        // Call tooltip makers
        tooltipOperator.tooltipForEdit(task);
        tooltipOperator.tooltipForComplete(task);
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




let taskEditor = new _ui_task_editor__WEBPACK_IMPORTED_MODULE_0__["default"]();
let taskCompleter = new _ui_task_completer__WEBPACK_IMPORTED_MODULE_1__["default"]();
let tooltipOperator = new _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_2__["default"]();

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

        // Text contents of the elements
        taskRowPriority.textContent = task.priority;
        taskRowTitle.textContent = task.title;
        taskRowDescription.textContent = task.description;
        taskRowDueDate.textContent = task.dueDate;

        // Date cell

        // Contents of taskRowButtons
        let editButton = document.createElement('button');
        let completeButton = document.createElement('button');
        editButton.textContent = '✎';
        completeButton.textContent = '✓';
        taskRowButtons.appendChild(editButton);
        taskRowButtons.appendChild(completeButton);

        // Append elements to taskRow
        taskRow.appendChild(taskRowPriority);
        taskRow.appendChild(taskRowTitle);
        taskRow.appendChild(taskRowDescription);
        taskRow.appendChild(taskRowDueDate);
        taskRow.appendChild(taskRowButtons);

        // Edit Tasks
        editButton.addEventListener('click', () => taskEditor.editButtonOperator(task));

        // Complete Tasks
        completeButton.addEventListener('click', () => taskCompleter.completeTask(task));

        // Insert taskRow after correct projectRow
        projectRow.insertAdjacentElement('afterend', taskRow);

        // give ID for editing purposes
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        taskRow.setAttribute(`id`, `task_${t_titleNoSpaces}`);

        // Call tooltip makers
        tooltipOperator.tooltipForEdit(task);
        tooltipOperator.tooltipForComplete(task);
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
        let completeButton = buttonsCell.children[1];

        // assign classes
        completeButton.classList.add('tooltipParent');
        tooltip.classList.add('tooltip');

        completeButton.setAttribute('style', 'position:relative;');
        completeButton.appendChild(tooltip);
    }
}

/***/ }),

/***/ "./src/Graduate-Regular.ttf":
/*!**********************************!*\
  !*** ./src/Graduate-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64e4e90410e2cf37d41c.ttf";

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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// importing



// initialize instances
let projectButtonOperator = new _ui_project_button_opr__WEBPACK_IMPORTED_MODULE_0__["default"]();

// testing
let projectButton = document.querySelector('#btn_createNewProject');
projectButton.addEventListener('click', projectButtonOperator.createNewProjectWithUI);

// To Do
    // A button "Create New Project" is on the **HEADER**
    // When you click it, it calls the project creator
    // (you name a project and a line shows up, LIKE "HIGH" in toodledo)
    // but also calls the DOM table maker function! [MAKE IT SEPARATE --- ROW CREATOR or something]
    // Under the "HIGH" line, one row -- light green -- with a submit form "add new task" and forms in the table  
    // this form calls the taskCreator function --- to this project
    // to the right of the TASK ROW --- edit task and complete task buttons!

    // SO, modules to make:
    // 1) rowCreator - new method
    // creates a row of forms
    // 2) CreateNewProject button operator
    // calls projectCreator
    // calls rowCreator.projectRow
    // calls rowCreator.formRow
    // 3) CreateNewTask submission forms operator
    // gathers data
    // calls taskCreator
    // calls rowCreator.taskRow
    // 4) empty values of inputs after task is added
    // 5) edit task ui
    // 6) complete task ui
    // table headers
    // font
    // colors
    // buttons style
    // logo - header
    // no sliding when editing task
    // column width
    // tool tips
    // host on pages
    // inputs:
                // inputs are in:
                    // row_creator
                    // task_editor
                // input readers are in:
                    // task_button_operator
                    // task_editor
        // revamp inputs of dueDate
        // revamp inputs of priority
        // priority --- different colors of taskRow depending on priority 
        // center priority
    // limit: max characters, special characters, task name not empty --- *THIS HAS TO BE HARDCODED WITH IFs BEFORE VALUES ARE SENT*

    // new tools:
        // date-fns: you enter by when it is due, but what taskRow shows is --- *HOW MANY DAYS LEFT*
        // persistency: using Web Storage API

    // easy old stuff:
        // new project creation window
        // nav buttons --- only show completed / show all / only show high priority
        // responsive
        // delete tasks
        // delete projects (and all tasks thereof! --- *finally call assigner when making tasks!*)
        // edit project
        // sort by priority
        // only view a single project
        // expand a single todo to see/edit its details
        // readme
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGlDQUFpQyw0QkFBNEIsNEJBQTRCLDZC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Q0E7QUFDQSxnQ0FBZ0MsOERBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jbGFzc19wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2xhc3NfdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Byb2plY3RfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Rhc2tfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX2hlYWRlcl9jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfcHJpb3JpdHlfY29sb3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Byb2plY3RfYnV0dG9uX29wci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Jvd19jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdGFza19idXR0b25fb3ByLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdGFza19jb21wbGV0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV90YXNrX2VkaXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Rhc2tfcm93X2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV90b29sdGlwX29wZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9HcmFkdWF0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1tYWluQmx1ZTogIzVDOThDMTtcclxuICAgIC0tb2ZmV2hpdGU6ICNFRkYwRjQ7XHJcbiAgICAtLWxpZ2h0R3JleTogIzlGOTI5MztcclxuICAgIC0tZGFya0dyZXk6ICM4MDZDNjQ7XHJcbiAgICAtLWJhY2tncm91bmRCbHVlOiAjMjk3NUE3O1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRCbHVlKTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDUpIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxudGQgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxyXG59XHJcblxyXG50ZCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xyXG59XHJcblxyXG50ZCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbn1cclxuXHJcbiN0YXNrc1dpbmRvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0Um93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xyXG59XHJcblxyXG4ucHJvamVjdFJvdyB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrUm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5oZWFkZXJSb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxufVxyXG5cclxuLmhlYWRlclJvdyB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWRUYXNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm90dG9tOiA5MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwUGFyZW50OmhvdmVyIC50b29sdGlwIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZWRpdW1Qcmlvcml0eSB7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4uaGlnaFByaW9yaXR5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQXFEO0lBQ3JELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1tYWluQmx1ZTogIzVDOThDMTtcXHJcXG4gICAgLS1vZmZXaGl0ZTogI0VGRjBGNDtcXHJcXG4gICAgLS1saWdodEdyZXk6ICM5RjkyOTM7XFxyXFxuICAgIC0tZGFya0dyZXk6ICM4MDZDNjQ7XFxyXFxuICAgIC0tYmFja2dyb3VuZEJsdWU6ICMyOTc1QTc7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL0dyYWR1YXRlLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRCbHVlKTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZGFya0dyZXkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnRyIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoMSkge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoNCkge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCg1KSB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxudGQgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxyXFxufVxcclxcblxcclxcbnRkIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbn1cXHJcXG5cXHJcXG50ZCBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzV2luZG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RSb3cge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFJvdyB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tSb3cge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclJvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJSb3cgdGQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWRUYXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm90dG9tOiA5MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcFBhcmVudDpob3ZlciAudG9vbHRpcCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW1Qcmlvcml0eSB7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWdoUHJpb3JpdHkge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IG1hcm9vbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUsXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxyXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9jbGFzc19wcm9qZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RDcmVhdG9yIHtcclxuICAgIG5ld1Byb2plY3QodGl0bGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgfVxyXG4gICAgZWRpdFByb2plY3QocHJvamVjdCwgbmV3VGl0bGUpIHtcclxuICAgICAgICBwcm9qZWN0LnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFzayBmcm9tICcuL2NsYXNzX3Rhc2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NyZWF0b3Jcclxue1xyXG4gICAgbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXHJcbiAgICB9XHJcbiAgICBlZGl0VGFzayh0YXNrLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgdGFzay50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgICAgICB0YXNrLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuICAgIGNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNyZWF0b3Ige1xyXG4gICAgbWFrZUhlYWRlckNlbGxzKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgaGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ2hlYWRlclJvdycpO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyUm93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBoZWFkZXJSb3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlclJvd0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgaGVhZGVyUm93RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlclJvd0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlYWRlclJvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICAgICAgICBoZWFkZXJSb3dUaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrJztcclxuICAgICAgICBoZWFkZXJSb3dEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICAgICAgaGVhZGVyUm93RHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XHJcbiAgICAgICAgaGVhZGVyUm93QnV0dG9ucy50ZXh0Q29udGVudCA9ICdDb250cm9scyc7XHJcblxyXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXJSb3dQcmlvcml0eSk7XHJcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlclJvd1RpdGxlKTtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXJSb3dEdWVEYXRlKTtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93QnV0dG9ucyk7XHJcbiAgICBcclxuICAgICAgICB0YWJsZS5wcmVwZW5kKGhlYWRlclJvdyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmlvcml0eUNvbG9yZXIge1xyXG4gICAgcHJpb3JpdHlDbGFzc0Fzc2lnbmVyKHRhc2spIHtcclxuICAgICAgICAvLyBmaW5kIHRhc2tSb3dcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBjb3JyZWN0IHRkXHJcbiAgICAgICAgbGV0IHByaW9yaXR5Q2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBhbnkgcHJldmlvdXMgY2xhc3Nlc1xyXG4gICAgICAgIHByaW9yaXR5Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoUHJpb3JpdHknKTtcclxuICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtUHJpb3JpdHknKTtcclxuICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnbG93UHJpb3JpdHknKTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIG5ldyBjbGFzc1xyXG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHlDZWxsLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBSb3dDcmVhdG9yIGZyb20gXCIuL3VpX3Jvd19jcmVhdG9yXCI7XHJcbmltcG9ydCBQcm9qZWN0Q3JlYXRvciBmcm9tIFwiLi9zbV9wcm9qZWN0X2NyZWF0b3JcIjtcclxuXHJcbmxldCBwcm9qZWN0Q3JlYXRvciA9IG5ldyBQcm9qZWN0Q3JlYXRvcigpO1xyXG5sZXQgcm93Q3JlYXRvciA9IG5ldyBSb3dDcmVhdG9yKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0QnV0dG9uT3BlcmF0b3Ige1xyXG4gICAgY3JlYXRlTmV3UHJvamVjdFdpdGhVSSgpIHtcclxuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gd2luZG93LnByb21wdChcIlBsZWFzZSBpbnB1dCB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3QuXCIpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdENyZWF0b3IubmV3UHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgIHJvd0NyZWF0b3IubWFrZVByb2plY3RSb3cocHJvamVjdCk7XHJcbiAgICAgICAgcm93Q3JlYXRvci5tYWtlRm9ybVJvdyhwcm9qZWN0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBUYXNrQnV0dG9uT3BlcmF0b3IgZnJvbSBcIi4vdWlfdGFza19idXR0b25fb3ByXCI7XHJcbmltcG9ydCBIZWFkZXJDcmVhdG9yIGZyb20gXCIuL3VpX2hlYWRlcl9jcmVhdG9yXCI7XHJcblxyXG5sZXQgdGFza0J1dHRvbk9wZXJhdG9yID0gbmV3IFRhc2tCdXR0b25PcGVyYXRvcigpO1xyXG5sZXQgaGVhZGVyQ3JlYXRvciA9IG5ldyBIZWFkZXJDcmVhdG9yKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3dDcmVhdG9yIHtcclxuICAgIG1ha2VQcm9qZWN0Um93KHByb2plY3QpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICAgIGlmICh0YWJsZS5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBoZWFkZXJDcmVhdG9yLm1ha2VIZWFkZXJDZWxscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcHJvamVjdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgbGV0IHByb2plY3REYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBwcm9qZWN0RGF0YS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCA1KTtcclxuICAgICAgICBwcm9qZWN0Um93LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RSb3cnKTtcclxuICAgICAgICBwcm9qZWN0RGF0YS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocHJvamVjdFJvdyk7XHJcbiAgICAgICAgcHJvamVjdFJvdy5hcHBlbmRDaGlsZChwcm9qZWN0RGF0YSk7XHJcblxyXG4gICAgICAgIC8vIEdpdmUgSURcclxuICAgICAgICBsZXQgcF90aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBwcm9qZWN0Um93LnNldEF0dHJpYnV0ZSgnaWQnLCBgcm93XyR7cF90aXRsZU5vU3BhY2VzfWApO1xyXG4gICAgfVxyXG4gICAgbWFrZUZvcm1Sb3cocHJvamVjdCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xyXG4gICAgICAgIGxldCBmb3JtUm93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBmb3JtUm93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBmb3JtUm93RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBmb3JtUm93RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3dCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgLy8gR2l2ZSBJRFxyXG4gICAgICAgIGxldCB0aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBmb3JtUm93LnNldEF0dHJpYnV0ZSgnaWQnLCBgZm9ybV8ke3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIENvbnRlbnRzIG9mIGZvcm1Sb3dcclxuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIDEpO1xyXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCAzKTtcclxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eUlucHV0Jyk7XHJcbiAgICAgICAgZm9ybVJvd1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGVJbnB1dCcpO1xyXG4gICAgICAgIGZvcm1Sb3dUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uSW5wdXQnKTtcclxuICAgICAgICBmb3JtUm93RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlSW5wdXQnKTtcclxuICAgICAgICBmb3JtUm93RHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG5cclxuICAgICAgICBsZXQgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHN1Ym1pdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgICAgICBzdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBOZXcgVGFzaycpO1xyXG4gICAgICAgIHN1Ym1pdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0J1dHRvbk9wZXJhdG9yLmNyZWF0ZU5ld1Rhc2tXaXRoaW5Qcm9qZWN0KHByb2plY3QpKTtcclxuICAgICAgICBmb3JtUm93QnV0dG9ucy5hcHBlbmRDaGlsZChzdWJtaXRJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZGluZyBjb2x1bW5zXHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93UHJpb3JpdHkpO1xyXG4gICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZm9ybVJvd1RpdGxlKTtcclxuICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKGZvcm1Sb3dEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93RHVlRGF0ZSk7XHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93QnV0dG9ucyk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBmb3JtUm93IGFmdGVyIGNvcnJlY3QgcHJvamVjdFJvd1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ybVJvdztcclxuICAgIH1cclxufSIsImltcG9ydCBUYXNrQ3JlYXRvciBmcm9tIFwiLi9zbV90YXNrX2NyZWF0b3JcIjtcclxuaW1wb3J0IFRhc2tSb3dDcmVhdG9yIGZyb20gXCIuL3VpX3Rhc2tfcm93X2NyZWF0b3JcIjtcclxuaW1wb3J0IFByaW9yaXR5Q29sb3JlciBmcm9tIFwiLi91aV9wcmlvcml0eV9jb2xvcmVyXCI7XHJcblxyXG5sZXQgdGFza0NyZWF0b3IgPSBuZXcgVGFza0NyZWF0b3IoKTtcclxubGV0IHRhc2tSb3dDcmVhdG9yID0gbmV3IFRhc2tSb3dDcmVhdG9yKCk7XHJcbmxldCBwcmlvcml0eUNvbG9yZXIgPSBuZXcgUHJpb3JpdHlDb2xvcmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQnV0dG9uT3BlcmF0b3Ige1xyXG4gICAgY3JlYXRlTmV3VGFza1dpdGhpblByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIC8vIGZpbmQgY29ycmVjdCBwcm9qZWN0IGJ5IGZvcm1Sb3cgSUQsIHVuZGVyIGVhY2ggcHJvamVjdFxyXG4gICAgICAgIGxldCBwX3RpdGxlTm9TcGFjZXMgPSBwcm9qZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCBmb3JtUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Zvcm1fJHtwX3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGdhdGhlciBkYXRhXHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwicHJpb3JpdHlJbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRpdGxlSW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkZXNjcmlwdGlvbklucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkdWVEYXRlSW5wdXRcIl1gKS52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gbGltaXRzIGNoZWNraW5nXHJcbiAgICAgICAgbGV0IHNwZWNpYWxDaGFyYWN0ZXJzID0gL1shQCMkJV4mKigpXytcXC09XFxbXFxde307JzpcIlxcXFx8LC48PlxcLz9dKy87XHJcbiAgICAgICAgbGV0IHRpdGxlQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVycyA9IHNwZWNpYWxDaGFyYWN0ZXJzLnRlc3QodGl0bGUpO1xyXG4gICAgICAgIGlmICh0aXRsZSA9PSBudWxsIHx8IHRpdGxlID09ICcnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgbmV3IHRhc2sgbXVzdCBoYXZlIGEgbmFtZS4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09IG51bGwgfHwgcHJpb3JpdHkgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBhc3NpZ24gYSB0YXNrIHByaW9yaXR5LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aXRsZUNvbnRhaW5zU3BlY2lhbENoYXJhY3RlcnMpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSBtYXkgb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMgYW5kIHNwYWNlcy4nKTtcclxuICAgICAgICB9IGVsc2UgeyAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IGRhdGFcclxuICAgICAgICAgICAgZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwicHJpb3JpdHlJbnB1dFwiXWApLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRpdGxlSW5wdXRcIl1gKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkZXNjcmlwdGlvbklucHV0XCJdYCkudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiZHVlRGF0ZUlucHV0XCJdYCkudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0YXNrIGFuZCBkaXNwbGF5IGl0XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGFza0NyZWF0b3IubmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgICAgdGFza1Jvd0NyZWF0b3IubWFrZVRhc2tSb3codGFzaywgcHJvamVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gY29sb3IgdG8gcHJpb3JpdHkgY29sdW1uXHJcbiAgICAgICAgICAgIHByaW9yaXR5Q29sb3Jlci5wcmlvcml0eUNsYXNzQXNzaWduZXIodGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRvb2x0aXBPcGVyYXRvciBmcm9tIFwiLi91aV90b29sdGlwX29wZXJhdG9yXCI7XHJcbmxldCB0b29sdGlwT3BlcmF0b3IgPSBuZXcgVG9vbHRpcE9wZXJhdG9yKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ29tcGxldGVyIHtcclxuICAgIGNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICB0YXNrUm93LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZFRhc2snKTtcclxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBidXR0b25zQ2VsbC5yZW1vdmVDaGlsZChidXR0b25zQ2VsbC5jaGlsZHJlblsxXSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIFwibm90IGRvbmVcIiBidXR0b25cclxuICAgICAgICBsZXQgbm90RG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5vdERvbmVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyXJztcclxuICAgICAgICBidXR0b25zQ2VsbC5hcHBlbmRDaGlsZChub3REb25lQnV0dG9uKTtcclxuICAgICAgICBub3REb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy51bkNvbXBsZXRlVGFzayh0YXNrKSk7XHJcbiAgICB9XHJcbiAgICB1bkNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICB0YXNrUm93LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZFRhc2snKTtcclxuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgYnV0dG9uc0NlbGwucmVtb3ZlQ2hpbGQoYnV0dG9uc0NlbGwuY2hpbGRyZW5bMV0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgYSBcImRvbmVcIiBidXR0b25cclxuICAgICAgICBsZXQgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRvbmVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyTJztcclxuICAgICAgICBidXR0b25zQ2VsbC5hcHBlbmRDaGlsZChkb25lQnV0dG9uKTtcclxuICAgICAgICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jb21wbGV0ZVRhc2sodGFzaykpO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRvb2x0aXAgbWFrZXJzXHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JDb21wbGV0ZSh0YXNrKTtcclxuICAgIH1cclxufSIsImltcG9ydCBUYXNrQ29tcGxldGVyIGZyb20gXCIuL3VpX3Rhc2tfY29tcGxldGVyXCI7XHJcbmltcG9ydCBUb29sdGlwT3BlcmF0b3IgZnJvbSBcIi4vdWlfdG9vbHRpcF9vcGVyYXRvclwiO1xyXG5pbXBvcnQgUHJpb3JpdHlDb2xvcmVyIGZyb20gXCIuL3VpX3ByaW9yaXR5X2NvbG9yZXJcIjtcclxuXHJcbmxldCB0YXNrQ29tcGxldGVyID0gbmV3IFRhc2tDb21wbGV0ZXIoKTtcclxubGV0IHRvb2x0aXBPcGVyYXRvciA9IG5ldyBUb29sdGlwT3BlcmF0b3IoKTtcclxubGV0IHByaW9yaXR5Q29sb3JlciA9IG5ldyBQcmlvcml0eUNvbG9yZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tFZGl0b3Ige1xyXG4gICAgZWRpdEJ1dHRvbk9wZXJhdG9yKHRhc2spIHtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBlZGl0IGEgY29tcGxldGVkIHRhc2suJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0ID0gdGFza1Jvdy5jaGlsZHJlbltpXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCdtYXgnLCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5SW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGVJbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbklucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGVJbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0Qm94LnZhbHVlID0gY2VsbFRleHQ7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuW2ldLmFwcGVuZENoaWxkKGlucHV0Qm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByZW1vdmUgYm90aCBidXR0b25zXHJcbiAgICAgICAgICAgIHdoaWxlKHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHsgdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdLnJlbW92ZUNoaWxkKHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5jaGlsZHJlblswXSk7IH1cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRoYXQgb2theXMgdGhlIGNoYW5nZXNcclxuICAgICAgICAgICAgbGV0IGFjY2VwdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGFjY2VwdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIGFjY2VwdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FjY2VwdCBDaGFuZ2VzJyk7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZChhY2NlcHRCdXR0b24pO1xyXG4gICAgICAgICAgICAvLyB3aGljaCBjYWxscyBhY2NlcHRDaGFuZ2VzT3BlcmF0b3JcclxuICAgICAgICAgICAgYWNjZXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hY2NlcHRDaGFuZ2VzT3BlcmF0b3IodGFzaykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFjY2VwdENoYW5nZXNPcGVyYXRvclxyXG4gICAgYWNjZXB0Q2hhbmdlc09wZXJhdG9yKHRhc2spIHtcclxuICAgICAgICAvLyB0cmlnZ2VycyBvbiBjaGFuZ2VzIGJlaW5nIGFjY2VwdGVkXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZ2F0aGVyIGRhdGFcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0YXNrUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcmlvcml0eUlucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gdGFza1Jvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGl0bGVJbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRhc2tSb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uSW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IHRhc2tSb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImR1ZURhdGVJbnB1dFwiXWApLnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBsaW1pdHMgY2hlY2tpbmdcclxuICAgICAgICBsZXQgc3BlY2lhbENoYXJhY3RlcnMgPSAvWyFAIyQlXiYqKClfK1xcLT1cXFtcXF17fTsnOlwiXFxcXHwsLjw+XFwvP10rLztcclxuICAgICAgICBsZXQgdGl0bGVDb250YWluc1NwZWNpYWxDaGFyYWN0ZXJzID0gc3BlY2lhbENoYXJhY3RlcnMudGVzdCh0aXRsZSk7XHJcbiAgICAgICAgaWYgKHRpdGxlID09IG51bGwgfHwgdGl0bGUgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZSBuZXcgdGFzayBtdXN0IGhhdmUgYSBuYW1lLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gbnVsbCB8fCBwcmlvcml0eSA9PSAnJykge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGFzc2lnbiBhIHRhc2sgcHJpb3JpdHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRpdGxlQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVycykge1xyXG4gICAgICAgICAgICBhbGVydCgnVGFzayBuYW1lIG1heSBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycyBhbmQgc3BhY2VzLicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0YXNrIGFyb3VuZFxyXG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG5cclxuICAgICAgICAgICAgLy8gcmUtZXN0YWJsaXNoIHRoZSB0YXNrUm93XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlbltpXS5yZW1vdmVDaGlsZCh0YXNrUm93LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5ld190X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgICAgICB0YXNrUm93LmlkID0gYHRhc2tfJHtuZXdfdF90aXRsZU5vU3BhY2VzfWA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uc0FkZGVyKHRhc2spO1xyXG5cclxuICAgICAgICAgICAgLy8gYXNzaWduIGNvbG9yIHRvIHByaW9yaXR5IGNvbHVtblxyXG4gICAgICAgICAgICBwcmlvcml0eUNvbG9yZXIucHJpb3JpdHlDbGFzc0Fzc2lnbmVyKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbnNBZGRlcih0YXNrKSB7XHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinI4nO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ+Kckyc7XHJcbiAgICAgICAgYnV0dG9uc0NlbGwuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uc0NlbGwuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5lZGl0QnV0dG9uT3BlcmF0b3IodGFzaykpO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0NvbXBsZXRlci5jb21wbGV0ZVRhc2sodGFzaykpO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRvb2x0aXAgbWFrZXJzXHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JFZGl0KHRhc2spO1xyXG4gICAgICAgIHRvb2x0aXBPcGVyYXRvci50b29sdGlwRm9yQ29tcGxldGUodGFzayk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFza0VkaXRvciBmcm9tICcuL3VpX3Rhc2tfZWRpdG9yJztcclxuaW1wb3J0IFRhc2tDb21wbGV0ZXIgZnJvbSAnLi91aV90YXNrX2NvbXBsZXRlcic7XHJcbmltcG9ydCBUb29sdGlwT3BlcmF0b3IgZnJvbSAnLi91aV90b29sdGlwX29wZXJhdG9yJztcclxuXHJcbmxldCB0YXNrRWRpdG9yID0gbmV3IFRhc2tFZGl0b3IoKTtcclxubGV0IHRhc2tDb21wbGV0ZXIgPSBuZXcgVGFza0NvbXBsZXRlcigpO1xyXG5sZXQgdG9vbHRpcE9wZXJhdG9yID0gbmV3IFRvb2x0aXBPcGVyYXRvcigpO1xyXG5cclxuLy8gZXh0ZXJuYWwgbGlicmFyaWVzXHJcbmltcG9ydCB7IGZvcm1hdCwgZGlmZmVyZW5jZUluRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1Jvd0NyZWF0b3Ige1xyXG4gICAgbWFrZVRhc2tSb3codGFzaywgcHJvamVjdCkge1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlY3QgcHJvamVjdCByb3dcclxuICAgICAgICBsZXQgcF90aXRsZU5vU3BhY2VzID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgcHJvamVjdFJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyb3dfJHtwX3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50cyBvZiB0aGUgdGFzayByb3dcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKCd0YXNrUm93Jyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3dEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG5cclxuICAgICAgICAvLyBDZW50ZXJpbmdcclxuICAgICAgICB0YXNrUm93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnY2VudGVyZWQnKTtcclxuXHJcbiAgICAgICAgLy8gVGV4dCBjb250ZW50cyBvZiB0aGUgZWxlbWVudHNcclxuICAgICAgICB0YXNrUm93UHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tSb3dUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgdGFza1Jvd0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0YXNrUm93RHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgLy8gRGF0ZSBjZWxsXHJcblxyXG4gICAgICAgIC8vIENvbnRlbnRzIG9mIHRhc2tSb3dCdXR0b25zXHJcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ+Kcjic7XHJcbiAgICAgICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSAn4pyTJztcclxuICAgICAgICB0YXNrUm93QnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgICAgICB0YXNrUm93QnV0dG9ucy5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0YXNrUm93XHJcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93UHJpb3JpdHkpO1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd1RpdGxlKTtcclxuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93RHVlRGF0ZSk7XHJcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93QnV0dG9ucyk7XHJcblxyXG4gICAgICAgIC8vIEVkaXQgVGFza3NcclxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0VkaXRvci5lZGl0QnV0dG9uT3BlcmF0b3IodGFzaykpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0ZSBUYXNrc1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0NvbXBsZXRlci5jb21wbGV0ZVRhc2sodGFzaykpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgdGFza1JvdyBhZnRlciBjb3JyZWN0IHByb2plY3RSb3dcclxuICAgICAgICBwcm9qZWN0Um93Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0YXNrUm93KTtcclxuXHJcbiAgICAgICAgLy8gZ2l2ZSBJRCBmb3IgZWRpdGluZyBwdXJwb3Nlc1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIHRhc2tSb3cuc2V0QXR0cmlidXRlKGBpZGAsIGB0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRvb2x0aXAgbWFrZXJzXHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JFZGl0KHRhc2spO1xyXG4gICAgICAgIHRvb2x0aXBPcGVyYXRvci50b29sdGlwRm9yQ29tcGxldGUodGFzayk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwT3BlcmF0b3Ige1xyXG4gICAgdG9vbHRpcEZvckVkaXQodGFzaykge1xyXG4gICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwIG5vdGVcclxuICAgICAgICBsZXQgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b29sdGlwLnRleHRDb250ZW50ID0gJ0VkaXQgdGFzay4nXHJcblxyXG4gICAgICAgIC8vIGZpbmQgY29ycmVjdCB0YXNrXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBwYXJlbnQgbm9kZSAoZWRpdCBidXR0b24pXHJcbiAgICAgICAgbGV0IGJ1dHRvbnNDZWxsID0gdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gYnV0dG9uc0NlbGwuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzc2VzXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b29sdGlwUGFyZW50Jyk7XHJcbiAgICAgICAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJyk7XHJcblxyXG4gICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsnKTtcclxuICAgICAgICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKHRvb2x0aXApO1xyXG4gICAgfVxyXG4gICAgdG9vbHRpcEZvckNvbXBsZXRlKHRhc2spIHtcclxuICAgICAgICAvLyBjcmVhdGUgdG9vbHRpcCBub3RlXHJcbiAgICAgICAgbGV0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSB0YXNrLidcclxuXHJcbiAgICAgICAgLy8gZmluZCBjb3JyZWN0IHRhc2tcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHBhcmVudCBub2RlIChlZGl0IGJ1dHRvbilcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gYnV0dG9uc0NlbGwuY2hpbGRyZW5bMV07XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzc2VzXHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbHRpcFBhcmVudCcpO1xyXG4gICAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xyXG5cclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOnJlbGF0aXZlOycpO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHRvb2x0aXApO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnRpbmdcclxuaW1wb3J0IFByb2plY3RCdXR0b25PcGVyYXRvciBmcm9tICcuL3VpX3Byb2plY3RfYnV0dG9uX29wcic7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbi8vIGluaXRpYWxpemUgaW5zdGFuY2VzXHJcbmxldCBwcm9qZWN0QnV0dG9uT3BlcmF0b3IgPSBuZXcgUHJvamVjdEJ1dHRvbk9wZXJhdG9yKCk7XHJcblxyXG4vLyB0ZXN0aW5nXHJcbmxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9jcmVhdGVOZXdQcm9qZWN0Jyk7XHJcbnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0QnV0dG9uT3BlcmF0b3IuY3JlYXRlTmV3UHJvamVjdFdpdGhVSSk7XHJcblxyXG4vLyBUbyBEb1xyXG4gICAgLy8gQSBidXR0b24gXCJDcmVhdGUgTmV3IFByb2plY3RcIiBpcyBvbiB0aGUgKipIRUFERVIqKlxyXG4gICAgLy8gV2hlbiB5b3UgY2xpY2sgaXQsIGl0IGNhbGxzIHRoZSBwcm9qZWN0IGNyZWF0b3JcclxuICAgIC8vICh5b3UgbmFtZSBhIHByb2plY3QgYW5kIGEgbGluZSBzaG93cyB1cCwgTElLRSBcIkhJR0hcIiBpbiB0b29kbGVkbylcclxuICAgIC8vIGJ1dCBhbHNvIGNhbGxzIHRoZSBET00gdGFibGUgbWFrZXIgZnVuY3Rpb24hIFtNQUtFIElUIFNFUEFSQVRFIC0tLSBST1cgQ1JFQVRPUiBvciBzb21ldGhpbmddXHJcbiAgICAvLyBVbmRlciB0aGUgXCJISUdIXCIgbGluZSwgb25lIHJvdyAtLSBsaWdodCBncmVlbiAtLSB3aXRoIGEgc3VibWl0IGZvcm0gXCJhZGQgbmV3IHRhc2tcIiBhbmQgZm9ybXMgaW4gdGhlIHRhYmxlICBcclxuICAgIC8vIHRoaXMgZm9ybSBjYWxscyB0aGUgdGFza0NyZWF0b3IgZnVuY3Rpb24gLS0tIHRvIHRoaXMgcHJvamVjdFxyXG4gICAgLy8gdG8gdGhlIHJpZ2h0IG9mIHRoZSBUQVNLIFJPVyAtLS0gZWRpdCB0YXNrIGFuZCBjb21wbGV0ZSB0YXNrIGJ1dHRvbnMhXHJcblxyXG4gICAgLy8gU08sIG1vZHVsZXMgdG8gbWFrZTpcclxuICAgIC8vIDEpIHJvd0NyZWF0b3IgLSBuZXcgbWV0aG9kXHJcbiAgICAvLyBjcmVhdGVzIGEgcm93IG9mIGZvcm1zXHJcbiAgICAvLyAyKSBDcmVhdGVOZXdQcm9qZWN0IGJ1dHRvbiBvcGVyYXRvclxyXG4gICAgLy8gY2FsbHMgcHJvamVjdENyZWF0b3JcclxuICAgIC8vIGNhbGxzIHJvd0NyZWF0b3IucHJvamVjdFJvd1xyXG4gICAgLy8gY2FsbHMgcm93Q3JlYXRvci5mb3JtUm93XHJcbiAgICAvLyAzKSBDcmVhdGVOZXdUYXNrIHN1Ym1pc3Npb24gZm9ybXMgb3BlcmF0b3JcclxuICAgIC8vIGdhdGhlcnMgZGF0YVxyXG4gICAgLy8gY2FsbHMgdGFza0NyZWF0b3JcclxuICAgIC8vIGNhbGxzIHJvd0NyZWF0b3IudGFza1Jvd1xyXG4gICAgLy8gNCkgZW1wdHkgdmFsdWVzIG9mIGlucHV0cyBhZnRlciB0YXNrIGlzIGFkZGVkXHJcbiAgICAvLyA1KSBlZGl0IHRhc2sgdWlcclxuICAgIC8vIDYpIGNvbXBsZXRlIHRhc2sgdWlcclxuICAgIC8vIHRhYmxlIGhlYWRlcnNcclxuICAgIC8vIGZvbnRcclxuICAgIC8vIGNvbG9yc1xyXG4gICAgLy8gYnV0dG9ucyBzdHlsZVxyXG4gICAgLy8gbG9nbyAtIGhlYWRlclxyXG4gICAgLy8gbm8gc2xpZGluZyB3aGVuIGVkaXRpbmcgdGFza1xyXG4gICAgLy8gY29sdW1uIHdpZHRoXHJcbiAgICAvLyB0b29sIHRpcHNcclxuICAgIC8vIGhvc3Qgb24gcGFnZXNcclxuICAgIC8vIGlucHV0czpcclxuICAgICAgICAgICAgICAgIC8vIGlucHV0cyBhcmUgaW46XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm93X2NyZWF0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyB0YXNrX2VkaXRvclxyXG4gICAgICAgICAgICAgICAgLy8gaW5wdXQgcmVhZGVycyBhcmUgaW46XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFza19idXR0b25fb3BlcmF0b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyB0YXNrX2VkaXRvclxyXG4gICAgICAgIC8vIHJldmFtcCBpbnB1dHMgb2YgZHVlRGF0ZVxyXG4gICAgICAgIC8vIHJldmFtcCBpbnB1dHMgb2YgcHJpb3JpdHlcclxuICAgICAgICAvLyBwcmlvcml0eSAtLS0gZGlmZmVyZW50IGNvbG9ycyBvZiB0YXNrUm93IGRlcGVuZGluZyBvbiBwcmlvcml0eSBcclxuICAgICAgICAvLyBjZW50ZXIgcHJpb3JpdHlcclxuICAgIC8vIGxpbWl0OiBtYXggY2hhcmFjdGVycywgc3BlY2lhbCBjaGFyYWN0ZXJzLCB0YXNrIG5hbWUgbm90IGVtcHR5IC0tLSAqVEhJUyBIQVMgVE8gQkUgSEFSRENPREVEIFdJVEggSUZzIEJFRk9SRSBWQUxVRVMgQVJFIFNFTlQqXHJcblxyXG4gICAgLy8gbmV3IHRvb2xzOlxyXG4gICAgICAgIC8vIGRhdGUtZm5zOiB5b3UgZW50ZXIgYnkgd2hlbiBpdCBpcyBkdWUsIGJ1dCB3aGF0IHRhc2tSb3cgc2hvd3MgaXMgLS0tICpIT1cgTUFOWSBEQVlTIExFRlQqXHJcbiAgICAgICAgLy8gcGVyc2lzdGVuY3k6IHVzaW5nIFdlYiBTdG9yYWdlIEFQSVxyXG5cclxuICAgIC8vIGVhc3kgb2xkIHN0dWZmOlxyXG4gICAgICAgIC8vIG5ldyBwcm9qZWN0IGNyZWF0aW9uIHdpbmRvd1xyXG4gICAgICAgIC8vIG5hdiBidXR0b25zIC0tLSBvbmx5IHNob3cgY29tcGxldGVkIC8gc2hvdyBhbGwgLyBvbmx5IHNob3cgaGlnaCBwcmlvcml0eVxyXG4gICAgICAgIC8vIHJlc3BvbnNpdmVcclxuICAgICAgICAvLyBkZWxldGUgdGFza3NcclxuICAgICAgICAvLyBkZWxldGUgcHJvamVjdHMgKGFuZCBhbGwgdGFza3MgdGhlcmVvZiEgLS0tICpmaW5hbGx5IGNhbGwgYXNzaWduZXIgd2hlbiBtYWtpbmcgdGFza3MhKilcclxuICAgICAgICAvLyBlZGl0IHByb2plY3RcclxuICAgICAgICAvLyBzb3J0IGJ5IHByaW9yaXR5XHJcbiAgICAgICAgLy8gb25seSB2aWV3IGEgc2luZ2xlIHByb2plY3RcclxuICAgICAgICAvLyBleHBhbmQgYSBzaW5nbGUgdG9kbyB0byBzZWUvZWRpdCBpdHMgZGV0YWlsc1xyXG4gICAgICAgIC8vIHJlYWRtZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==