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
        this.stringified = '';
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
    constructor(title, description, dueDate, priority, partOfProject) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isComplete = false;
        this.daysLeft = null;
        this.stringified = '';
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
    newTask(title, description, dueDate, priority, partOfProject) {
        return new _class_task__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, partOfProject)
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

        // localStorage
        project.stringified = JSON.stringify(project);
        let existingProjects;
        if (localStorage.projects) {
             existingProjects = localStorage.projects;
             localStorage.projects = existingProjects + '|' + project.stringified;
        } else {
            localStorage.projects = project.stringified;
        }
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
            let correctProject = project.title;
            let task = taskCreator.newTask(title, description, dueDate, priority, correctProject);
            taskRowCreator.makeTaskRow(task, project);

            // assign color to priority column
            priorityColorer.priorityClassAssigner(task);

            // assign task to project
            assigner.assignTask(project, task);

            // localStorage
            task.stringified = JSON.stringify(task);
            let existingTasks;
            if (localStorage.tasks) {
                existingTasks = localStorage.tasks;
                localStorage.tasks = existingTasks + '|' + task.stringified;
            } else {
                localStorage.tasks = task.stringified;
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
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        taskRow.classList.add('completedTask');
        task.isComplete = true;
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[1]);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        let oldTaskIndex;
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == task.title) {
                oldTaskIndex = i;
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');

        // insert task into localStorage
        task.stringified = JSON.stringify(task);
        let existingTasks;
        if (localStorage.tasks) {
            existingTasks = localStorage.tasks;
            localStorage.tasks = existingTasks + '|' + task.stringified;
        } else {
            localStorage.tasks = task.stringified;
        }

        // add a "not done" button
        let notDoneButton = document.createElement('button');
        notDoneButton.textContent = '✗';
        buttonsCell.appendChild(notDoneButton);
        notDoneButton.addEventListener('click', () => this.unCompleteTask(task, project));
    }
    unCompleteTask(task, project) {
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");




let taskCompleter = new _ui_task_completer__WEBPACK_IMPORTED_MODULE_0__["default"]();
let tooltipOperator = new _ui_tooltip_operator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let priorityColorer = new _ui_priority_colorer__WEBPACK_IMPORTED_MODULE_2__["default"]();

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
        if (title == null || title == '') {
            alert('The new task must have a name.');
        } else if (priority == null || priority == '') {
            alert('Please assign a task priority.');
        }
        else if (titleContainsSpecialCharacters) {
            alert('Task name may only contain letters, numbers and spaces.');
        } else {
            // change task data
            task.priority = priority;
            task.title = title;
            task.description = description;
            task.dueDate = dueDate;

            // use date-fns to establish differenceInDays
            if (task.dueDate !== '' || task.dueDate !== null) {
                task.daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInDays)(
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
            this.buttonsAdder(task, project);

            // assign color to priority column
            priorityColorer.priorityClassAssigner(task);
        }
    }
    buttonsAdder(task, project) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.firstChild);

        let editButton = document.createElement('button');
        let completeButton = document.createElement('button');
        editButton.textContent = '✎';
        completeButton.textContent = '✓';
        buttonsCell.appendChild(editButton);
        buttonsCell.appendChild(completeButton);

        editButton.addEventListener('click', () => this.editButtonOperator(task, project));
        completeButton.addEventListener('click', () => taskCompleter.completeTask(task, project));

        // Call tooltip makers
        tooltipOperator.tooltipForEdit(task);
        tooltipOperator.tooltipForComplete(task);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        let oldTaskIndex;
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == task.title) {
                oldTaskIndex = i;
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');

        // insert task into localStorage
        task.stringified = JSON.stringify(task);
        let existingTasks;
        if (localStorage.tasks) {
            existingTasks = localStorage.tasks;
            localStorage.tasks = existingTasks + '|' + task.stringified;
        } else {
            localStorage.tasks = task.stringified;
        }
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");




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

        // Date cell
            // 1) understand what format is task.dueDate in. is it a string? an object?
            // answer: it's a string in the 'yyyy-mm-dd' format
            // 2) transform that string into an object data fns can use in its calculations
            // answer: from the documentation it looks like a string is fine
            // 3) establish today
        if (task.dueDate !== '' || task.dueDate !== null) {
            task.daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInDays)(
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
        completeButton.textContent = '✓';
        taskRowButtons.appendChild(editButton);
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
        completeButton.addEventListener('click', () => taskCompleter.completeTask(task, project));

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
/* harmony import */ var _sm_task_assigner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sm_task_assigner */ "./src/sm_task_assigner.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// importing








// initialize instances
let projectButtonOperator = new _ui_project_button_opr__WEBPACK_IMPORTED_MODULE_0__["default"]();
let projectCreator = new _sm_project_creator__WEBPACK_IMPORTED_MODULE_1__["default"]();
let taskCreator = new _sm_task_creator__WEBPACK_IMPORTED_MODULE_2__["default"]();
let rowCreator = new _ui_row_creator__WEBPACK_IMPORTED_MODULE_3__["default"]();
let taskRowCreator = new _ui_task_row_creator__WEBPACK_IMPORTED_MODULE_4__["default"]();
let assigner = new _sm_task_assigner__WEBPACK_IMPORTED_MODULE_5__["default"]();

// testing
let projectButton = document.querySelector('#btn_createNewProject');
projectButton.addEventListener('click', projectButtonOperator.createNewProjectWithUI);

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

// retrieve localStorage for tasks
let pastTasks = localStorage.tasks;
let pastTasksArray = pastTasks ? pastTasks.split('|') : [];
if (pastTasksArray.length > 0) {
    for (let i = 0; i < pastProjectsArray.length; i++) {
        let retrievedTaskObject = JSON.parse(pastTasksArray[i]);
        let newTaskObject = taskCreator.newTask(retrievedTaskObject.title, retrievedTaskObject.description, retrievedTaskObject.dueDate, retrievedTaskObject.priority, retrievedTaskObject.partOfProject);
        let correctProject = projectObjectsArray.find(i => i.title == newTaskObject.partOfProject);
        taskRowCreator.makeTaskRow(newTaskObject, correctProject);
    }    
}

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
    // date-fns: you enter by when it is due, but what taskRow shows is --- *HOW MANY DAYS LEFT*
    // date-fns: hard code with IFs : what to do if date is unset or it is in the past.
    // date-fns: store daysLeft in task (for sorting later)
    // date-fins: incorporate new thing everywhere
    // bug - dueDate form doesn't disappear if it's incomplete
    // if you click edit task, the form should already have the existing date entered
    // call assigner when making tasks
    // re-assign task to project after complete or edit?

    // new tools:
        // persistency: using Web Storage API --- *THIS IS NOT A REMOTE API, it is a CLIENT-SIDE API!*
        // bugs:
            // editing tasks - changing name breaks the thing
            // editing tasks - changing not the first task in a project breaks the thing
            // completing and uncompleting tasks doesn't stay

    // easy old stuff:
        // add to limits -- cannot have two tasks with the same name (loop)
        // add text - Click on add project (hand-drawn arrow to the button)
        // new project creation window - dialog?
        // responsive - right now, everything is super small!
        // delete tasks
        // delete projects (and all tasks thereof)
        // edit project name button
        // nav buttons --- only show completed / show all / only show high priority
        // sort by priority
        // sort by date ( --- *MAYBE BUTTONS ON TABLE HEADERS!* )
        // only view a single project
        // expand a single todo to see/edit its details
        // readme
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGlDQUFpQyw0QkFBNEIsNEJBQTRCLDZC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QUFVO0FBQy9CLHlCQUF5Qiw0REFBYztBQUN2QyxtQkFBbUIseURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jbGFzc19wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2xhc3NfdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Byb2plY3RfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NtX3Rhc2tfYXNzaWduZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zbV90YXNrX2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9oZWFkZXJfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3ByaW9yaXR5X2NvbG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9wcm9qZWN0X2J1dHRvbl9vcHIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV9yb3dfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Rhc2tfYnV0dG9uX29wci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpX3Rhc2tfY29tcGxldGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdGFza19lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91aV90YXNrX3Jvd19jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWlfdG9vbHRpcF9vcGVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkRheXMubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9HcmFkdWF0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1tYWluQmx1ZTogIzVDOThDMTtcclxuICAgIC0tb2ZmV2hpdGU6ICNFRkYwRjQ7XHJcbiAgICAtLWxpZ2h0R3JleTogIzlGOTI5MztcclxuICAgIC0tZGFya0dyZXk6ICM4MDZDNjQ7XHJcbiAgICAtLWJhY2tncm91bmRCbHVlOiAjMjk3NUE3O1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRCbHVlKTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDUpIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxudGQgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgIFxyXG59XHJcblxyXG50ZCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xyXG59XHJcblxyXG50ZCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5CbHVlKTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbn1cclxuXHJcbiN0YXNrc1dpbmRvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0Um93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xyXG59XHJcblxyXG4ucHJvamVjdFJvdyB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrUm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi5oZWFkZXJSb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcclxufVxyXG5cclxuLmhlYWRlclJvdyB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWRUYXNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm90dG9tOiA5MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwUGFyZW50OmhvdmVyIC50b29sdGlwIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZWRpdW1Qcmlvcml0eSB7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4uaGlnaFByaW9yaXR5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQXFEO0lBQ3JELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1tYWluQmx1ZTogIzVDOThDMTtcXHJcXG4gICAgLS1vZmZXaGl0ZTogI0VGRjBGNDtcXHJcXG4gICAgLS1saWdodEdyZXk6ICM5RjkyOTM7XFxyXFxuICAgIC0tZGFya0dyZXk6ICM4MDZDNjQ7XFxyXFxuICAgIC0tYmFja2dyb3VuZEJsdWU6ICMyOTc1QTc7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFkdWF0ZSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL0dyYWR1YXRlLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRCbHVlKTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZGFya0dyZXkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnRyIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoMSkge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZDpudGgtY2hpbGQoNCkge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCg1KSB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxudGQgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxyXFxufVxcclxcblxcclxcbnRkIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhZHVhdGUnO1xcclxcbn1cXHJcXG5cXHJcXG50ZCBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQmx1ZSk7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzV2luZG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RSb3cge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZEJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFJvdyB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tSb3cge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclJvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJSb3cgdGQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWRUYXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm90dG9tOiA5MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcFBhcmVudDpob3ZlciAudG9vbHRpcCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW1Qcmlvcml0eSB7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWdoUHJpb3JpdHkge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IG1hcm9vbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICAgICAgdGhpcy5zdHJpbmdpZmllZCA9ICcnO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwYXJ0T2ZQcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlLFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSxcclxuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRheXNMZWZ0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN0cmluZ2lmaWVkID0gJyc7XHJcbiAgICAgICAgdGhpcy5wYXJ0T2ZQcm9qZWN0ID0gcGFydE9mUHJvamVjdDtcclxuICAgIH1cclxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vY2xhc3NfcHJvamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q3JlYXRvciB7XHJcbiAgICBuZXdQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgIH1cclxuICAgIGVkaXRQcm9qZWN0KHByb2plY3QsIG5ld1RpdGxlKSB7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzaWduZXIge1xyXG4gICAgYXNzaWduVGFzayhwcm9qZWN0LCB0YXNrKSB7XHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9jbGFzc190YXNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDcmVhdG9yXHJcbntcclxuICAgIG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcGFydE9mUHJvamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwYXJ0T2ZQcm9qZWN0KVxyXG4gICAgfVxyXG4gICAgZWRpdFRhc2sodGFzaywgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRhc2sudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICAgICAgdGFzay5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgICAgICB0YXNrLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDcmVhdG9yIHtcclxuICAgIG1ha2VIZWFkZXJDZWxscygpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJSb3cnKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlclJvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgaGVhZGVyUm93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBoZWFkZXJSb3dEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbGV0IGhlYWRlclJvd0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBoZWFkZXJSb3dCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBcclxuICAgICAgICBoZWFkZXJSb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgICAgICAgaGVhZGVyUm93VGl0bGUudGV4dENvbnRlbnQgPSAnVGFzayc7XHJcbiAgICAgICAgaGVhZGVyUm93RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgICAgIGhlYWRlclJvd0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xyXG4gICAgICAgIGhlYWRlclJvd0J1dHRvbnMudGV4dENvbnRlbnQgPSAnQ29udHJvbHMnO1xyXG5cclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93UHJpb3JpdHkpO1xyXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChoZWFkZXJSb3dUaXRsZSk7XHJcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlclJvd0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyUm93RHVlRGF0ZSk7XHJcbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlclJvd0J1dHRvbnMpO1xyXG4gICAgXHJcbiAgICAgICAgdGFibGUucHJlcGVuZChoZWFkZXJSb3cpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpb3JpdHlDb2xvcmVyIHtcclxuICAgIHByaW9yaXR5Q2xhc3NBc3NpZ25lcih0YXNrKSB7XHJcbiAgICAgICAgLy8gZmluZCB0YXNrUm93XHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgY29ycmVjdCB0ZFxyXG4gICAgICAgIGxldCBwcmlvcml0eUNlbGwgPSB0YXNrUm93LmNoaWxkcmVuWzBdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgYW55IHByZXZpb3VzIGNsYXNzZXNcclxuICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaFByaW9yaXR5Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bVByaW9yaXR5Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2xvd1ByaW9yaXR5Jyk7XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBuZXcgY2xhc3NcclxuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5Q2VsbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUm93Q3JlYXRvciBmcm9tIFwiLi91aV9yb3dfY3JlYXRvclwiO1xyXG5pbXBvcnQgUHJvamVjdENyZWF0b3IgZnJvbSBcIi4vc21fcHJvamVjdF9jcmVhdG9yXCI7XHJcblxyXG5sZXQgcHJvamVjdENyZWF0b3IgPSBuZXcgUHJvamVjdENyZWF0b3IoKTtcclxubGV0IHJvd0NyZWF0b3IgPSBuZXcgUm93Q3JlYXRvcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdEJ1dHRvbk9wZXJhdG9yIHtcclxuICAgIGNyZWF0ZU5ld1Byb2plY3RXaXRoVUkoKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJQbGVhc2UgaW5wdXQgdGhlIG5hbWUgb2YgdGhlIG5ldyBwcm9qZWN0LlwiKTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RDcmVhdG9yLm5ld1Byb2plY3QocHJvamVjdFRpdGxlKTtcclxuICAgICAgICByb3dDcmVhdG9yLm1ha2VQcm9qZWN0Um93KHByb2plY3QpO1xyXG4gICAgICAgIHJvd0NyZWF0b3IubWFrZUZvcm1Sb3cocHJvamVjdCk7XHJcblxyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIHByb2plY3Quc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcclxuICAgICAgICBsZXQgZXhpc3RpbmdQcm9qZWN0cztcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XHJcbiAgICAgICAgICAgICBleGlzdGluZ1Byb2plY3RzID0gbG9jYWxTdG9yYWdlLnByb2plY3RzO1xyXG4gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnByb2plY3RzID0gZXhpc3RpbmdQcm9qZWN0cyArICd8JyArIHByb2plY3Quc3RyaW5naWZpZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnByb2plY3RzID0gcHJvamVjdC5zdHJpbmdpZmllZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFza0J1dHRvbk9wZXJhdG9yIGZyb20gXCIuL3VpX3Rhc2tfYnV0dG9uX29wclwiO1xyXG5pbXBvcnQgSGVhZGVyQ3JlYXRvciBmcm9tIFwiLi91aV9oZWFkZXJfY3JlYXRvclwiO1xyXG5cclxubGV0IHRhc2tCdXR0b25PcGVyYXRvciA9IG5ldyBUYXNrQnV0dG9uT3BlcmF0b3IoKTtcclxubGV0IGhlYWRlckNyZWF0b3IgPSBuZXcgSGVhZGVyQ3JlYXRvcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93Q3JlYXRvciB7XHJcbiAgICBtYWtlUHJvamVjdFJvdyhwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICAgICAgICBpZiAodGFibGUuY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgaGVhZGVyQ3JlYXRvci5tYWtlSGVhZGVyQ2VsbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByb2plY3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgcHJvamVjdERhdGEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgNSk7XHJcbiAgICAgICAgcHJvamVjdFJvdy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Um93Jyk7XHJcbiAgICAgICAgcHJvamVjdERhdGEudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHByb2plY3RSb3cpO1xyXG4gICAgICAgIHByb2plY3RSb3cuYXBwZW5kQ2hpbGQocHJvamVjdERhdGEpO1xyXG5cclxuICAgICAgICAvLyBHaXZlIElEXHJcbiAgICAgICAgbGV0IHBfdGl0bGVOb1NwYWNlcyA9IHByb2plY3QudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgcHJvamVjdFJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgYHJvd18ke3BfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgIH1cclxuICAgIG1ha2VGb3JtUm93KHByb2plY3QpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICAgIGxldCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcclxuICAgICAgICBsZXQgZm9ybVJvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgZm9ybVJvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgZm9ybVJvd0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgZm9ybVJvd0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCBmb3JtUm93QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgIC8vIEdpdmUgSURcclxuICAgICAgICBsZXQgdGl0bGVOb1NwYWNlcyA9IHByb2plY3QudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgZm9ybVJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgYGZvcm1fJHt0aXRsZU5vU3BhY2VzfWApO1xyXG5cclxuICAgICAgICAvLyBDb250ZW50cyBvZiBmb3JtUm93XHJcbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcclxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgMyk7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHlJbnB1dCcpO1xyXG4gICAgICAgIGZvcm1Sb3dQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlSW5wdXQnKTtcclxuICAgICAgICBmb3JtUm93VGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbklucHV0Jyk7XHJcbiAgICAgICAgZm9ybVJvd0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZUlucHV0Jyk7XHJcbiAgICAgICAgZm9ybVJvd0R1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgICAgICAgbGV0IHN1Ym1pdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgc3VibWl0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgTmV3IFRhc2snKTtcclxuICAgICAgICBzdWJtaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tCdXR0b25PcGVyYXRvci5jcmVhdGVOZXdUYXNrV2l0aGluUHJvamVjdChwcm9qZWN0KSk7XHJcbiAgICAgICAgZm9ybVJvd0J1dHRvbnMuYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmRpbmcgY29sdW1uc1xyXG4gICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZm9ybVJvd1ByaW9yaXR5KTtcclxuICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKGZvcm1Sb3dUaXRsZSk7XHJcbiAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChmb3JtUm93RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZm9ybVJvd0R1ZURhdGUpO1xyXG4gICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZm9ybVJvd0J1dHRvbnMpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgZm9ybVJvdyBhZnRlciBjb3JyZWN0IHByb2plY3RSb3dcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChmb3JtUm93KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1Sb3c7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFza0NyZWF0b3IgZnJvbSBcIi4vc21fdGFza19jcmVhdG9yXCI7XHJcbmltcG9ydCBUYXNrUm93Q3JlYXRvciBmcm9tIFwiLi91aV90YXNrX3Jvd19jcmVhdG9yXCI7XHJcbmltcG9ydCBQcmlvcml0eUNvbG9yZXIgZnJvbSBcIi4vdWlfcHJpb3JpdHlfY29sb3JlclwiO1xyXG5pbXBvcnQgQXNzaWduZXIgZnJvbSBcIi4vc21fdGFza19hc3NpZ25lclwiO1xyXG5cclxubGV0IHRhc2tDcmVhdG9yID0gbmV3IFRhc2tDcmVhdG9yKCk7XHJcbmxldCB0YXNrUm93Q3JlYXRvciA9IG5ldyBUYXNrUm93Q3JlYXRvcigpO1xyXG5sZXQgcHJpb3JpdHlDb2xvcmVyID0gbmV3IFByaW9yaXR5Q29sb3JlcigpO1xyXG5sZXQgYXNzaWduZXIgPSBuZXcgQXNzaWduZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tCdXR0b25PcGVyYXRvciB7XHJcbiAgICBjcmVhdGVOZXdUYXNrV2l0aGluUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gZmluZCBjb3JyZWN0IHByb2plY3QgYnkgZm9ybVJvdyBJRCwgdW5kZXIgZWFjaCBwcm9qZWN0XHJcbiAgICAgICAgbGV0IHBfdGl0bGVOb1NwYWNlcyA9IHByb2plY3QudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IGZvcm1Sb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZm9ybV8ke3BfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZ2F0aGVyIGRhdGFcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcmlvcml0eUlucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGl0bGVJbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uSW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImR1ZURhdGVJbnB1dFwiXWApLnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBsaW1pdHMgY2hlY2tpbmdcclxuICAgICAgICBsZXQgc3BlY2lhbENoYXJhY3RlcnMgPSAvWyFAIyQlXiYqKClfK1xcLT1cXFtcXF17fTsnOlwiXFxcXHwsLjw+XFwvP10rLztcclxuICAgICAgICBsZXQgdGl0bGVDb250YWluc1NwZWNpYWxDaGFyYWN0ZXJzID0gc3BlY2lhbENoYXJhY3RlcnMudGVzdCh0aXRsZSk7XHJcbiAgICAgICAgaWYgKHRpdGxlID09IG51bGwgfHwgdGl0bGUgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZSBuZXcgdGFzayBtdXN0IGhhdmUgYSBuYW1lLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gbnVsbCB8fCBwcmlvcml0eSA9PSAnJykge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGFzc2lnbiBhIHRhc2sgcHJpb3JpdHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRpdGxlQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVycykge1xyXG4gICAgICAgICAgICBhbGVydCgnVGFzayBuYW1lIG1heSBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycyBhbmQgc3BhY2VzLicpO1xyXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICAgICAgLy8gcmVzZXQgZGF0YVxyXG4gICAgICAgICAgICBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcmlvcml0eUlucHV0XCJdYCkudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgZm9ybVJvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGl0bGVJbnB1dFwiXWApLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGZvcm1Sb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uSW5wdXRcIl1gKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3JtUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJkdWVEYXRlSW5wdXRcIl1gKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY3JlYXRlIHRhc2sgYW5kIGRpc3BsYXkgaXRcclxuICAgICAgICAgICAgbGV0IGNvcnJlY3RQcm9qZWN0ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgbGV0IHRhc2sgPSB0YXNrQ3JlYXRvci5uZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvcnJlY3RQcm9qZWN0KTtcclxuICAgICAgICAgICAgdGFza1Jvd0NyZWF0b3IubWFrZVRhc2tSb3codGFzaywgcHJvamVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gY29sb3IgdG8gcHJpb3JpdHkgY29sdW1uXHJcbiAgICAgICAgICAgIHByaW9yaXR5Q29sb3Jlci5wcmlvcml0eUNsYXNzQXNzaWduZXIodGFzayk7XHJcblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gdGFzayB0byBwcm9qZWN0XHJcbiAgICAgICAgICAgIGFzc2lnbmVyLmFzc2lnblRhc2socHJvamVjdCwgdGFzayk7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgdGFzay5zdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHRhc2spO1xyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdUYXNrcztcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcyA9IGxvY2FsU3RvcmFnZS50YXNrcztcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGV4aXN0aW5nVGFza3MgKyAnfCcgKyB0YXNrLnN0cmluZ2lmaWVkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gdGFzay5zdHJpbmdpZmllZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBUb29sdGlwT3BlcmF0b3IgZnJvbSBcIi4vdWlfdG9vbHRpcF9vcGVyYXRvclwiO1xyXG5sZXQgdG9vbHRpcE9wZXJhdG9yID0gbmV3IFRvb2x0aXBPcGVyYXRvcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbXBsZXRlciB7XHJcbiAgICBjb21wbGV0ZVRhc2sodGFzaywgcHJvamVjdCkge1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcbiAgICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWRUYXNrJyk7XHJcbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgYnV0dG9uc0NlbGwucmVtb3ZlQ2hpbGQoYnV0dG9uc0NlbGwuY2hpbGRyZW5bMV0pO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhc2sgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbGV0IGxvY2FsVGFza3NBcnJheSA9IGxvY2FsU3RvcmFnZS50YXNrcy5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGxldCBvbGRUYXNrSW5kZXg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJldHJpZXZlZFRhc2tPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsVGFza3NBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIGlmIChyZXRyaWV2ZWRUYXNrT2JqZWN0LnRpdGxlID09IHRhc2sudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIG9sZFRhc2tJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gbG9jYWxUYXNrc0FycmF5LmpvaW4oJ3wnKTtcclxuXHJcbiAgICAgICAgLy8gaW5zZXJ0IHRhc2sgaW50byBsb2NhbFN0b3JhZ2VcclxuICAgICAgICB0YXNrLnN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkodGFzayk7XHJcbiAgICAgICAgbGV0IGV4aXN0aW5nVGFza3M7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBleGlzdGluZ1Rhc2tzICsgJ3wnICsgdGFzay5zdHJpbmdpZmllZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSB0YXNrLnN0cmluZ2lmaWVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkIGEgXCJub3QgZG9uZVwiIGJ1dHRvblxyXG4gICAgICAgIGxldCBub3REb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbm90RG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJcnO1xyXG4gICAgICAgIGJ1dHRvbnNDZWxsLmFwcGVuZENoaWxkKG5vdERvbmVCdXR0b24pO1xyXG4gICAgICAgIG5vdERvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnVuQ29tcGxldGVUYXNrKHRhc2ssIHByb2plY3QpKTtcclxuICAgIH1cclxuICAgIHVuQ29tcGxldGVUYXNrKHRhc2ssIHByb2plY3QpIHtcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrXyR7dF90aXRsZU5vU3BhY2VzfWApO1xyXG4gICAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkVGFzaycpO1xyXG4gICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBidXR0b25zQ2VsbC5yZW1vdmVDaGlsZChidXR0b25zQ2VsbC5jaGlsZHJlblsxXSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIFwiZG9uZVwiIGJ1dHRvblxyXG4gICAgICAgIGxldCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJMnO1xyXG4gICAgICAgIGJ1dHRvbnNDZWxsLmFwcGVuZENoaWxkKGRvbmVCdXR0b24pO1xyXG4gICAgICAgIGRvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNvbXBsZXRlVGFzayh0YXNrLCBwcm9qZWN0KSk7XHJcblxyXG4gICAgICAgIC8vIENhbGwgdG9vbHRpcCBtYWtlcnNcclxuICAgICAgICB0b29sdGlwT3BlcmF0b3IudG9vbHRpcEZvckNvbXBsZXRlKHRhc2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2tDb21wbGV0ZXIgZnJvbSBcIi4vdWlfdGFza19jb21wbGV0ZXJcIjtcclxuaW1wb3J0IFRvb2x0aXBPcGVyYXRvciBmcm9tIFwiLi91aV90b29sdGlwX29wZXJhdG9yXCI7XHJcbmltcG9ydCBQcmlvcml0eUNvbG9yZXIgZnJvbSBcIi4vdWlfcHJpb3JpdHlfY29sb3JlclwiO1xyXG5cclxubGV0IHRhc2tDb21wbGV0ZXIgPSBuZXcgVGFza0NvbXBsZXRlcigpO1xyXG5sZXQgdG9vbHRpcE9wZXJhdG9yID0gbmV3IFRvb2x0aXBPcGVyYXRvcigpO1xyXG5sZXQgcHJpb3JpdHlDb2xvcmVyID0gbmV3IFByaW9yaXR5Q29sb3JlcigpO1xyXG5cclxuLy8gZXh0ZXJuYWwgbGlicmFyaWVzXHJcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tFZGl0b3Ige1xyXG4gICAgZWRpdEJ1dHRvbk9wZXJhdG9yKHRhc2ssIHByb2plY3QpIHtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBlZGl0IGEgY29tcGxldGVkIHRhc2suJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0ID0gdGFza1Jvdy5jaGlsZHJlbltpXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCdtaW4nLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCdtYXgnLCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5SW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3gudmFsdWUgPSBjZWxsVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGVJbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC52YWx1ZSA9IGNlbGxUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbklucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnZhbHVlID0gY2VsbFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGVJbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEJveC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuW2ldLmFwcGVuZENoaWxkKGlucHV0Qm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByZW1vdmUgYm90aCBidXR0b25zXHJcbiAgICAgICAgICAgIHdoaWxlKHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHsgdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdLnJlbW92ZUNoaWxkKHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5jaGlsZHJlblswXSk7IH1cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRoYXQgb2theXMgdGhlIGNoYW5nZXNcclxuICAgICAgICAgICAgbGV0IGFjY2VwdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGFjY2VwdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIGFjY2VwdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FjY2VwdCBDaGFuZ2VzJyk7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZChhY2NlcHRCdXR0b24pO1xyXG4gICAgICAgICAgICAvLyB3aGljaCBjYWxscyBhY2NlcHRDaGFuZ2VzT3BlcmF0b3JcclxuICAgICAgICAgICAgYWNjZXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hY2NlcHRDaGFuZ2VzT3BlcmF0b3IodGFzaywgcHJvamVjdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFjY2VwdENoYW5nZXNPcGVyYXRvclxyXG4gICAgYWNjZXB0Q2hhbmdlc09wZXJhdG9yKHRhc2ssIHByb2plY3QpIHtcclxuICAgICAgICAvLyB0cmlnZ2VycyBvbiBjaGFuZ2VzIGJlaW5nIGFjY2VwdGVkXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZ2F0aGVyIGRhdGFcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0YXNrUm93LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcmlvcml0eUlucHV0XCJdYCkudmFsdWU7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gdGFza1Jvdy5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGl0bGVJbnB1dFwiXWApLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRhc2tSb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uSW5wdXRcIl1gKS52YWx1ZTtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IHRhc2tSb3cucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImR1ZURhdGVJbnB1dFwiXWApLnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBsaW1pdHMgY2hlY2tpbmdcclxuICAgICAgICBsZXQgc3BlY2lhbENoYXJhY3RlcnMgPSAvWyFAIyQlXiYqKClfK1xcLT1cXFtcXF17fTsnOlwiXFxcXHwsLjw+XFwvP10rLztcclxuICAgICAgICBsZXQgdGl0bGVDb250YWluc1NwZWNpYWxDaGFyYWN0ZXJzID0gc3BlY2lhbENoYXJhY3RlcnMudGVzdCh0aXRsZSk7XHJcbiAgICAgICAgaWYgKHRpdGxlID09IG51bGwgfHwgdGl0bGUgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1RoZSBuZXcgdGFzayBtdXN0IGhhdmUgYSBuYW1lLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gbnVsbCB8fCBwcmlvcml0eSA9PSAnJykge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGFzc2lnbiBhIHRhc2sgcHJpb3JpdHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRpdGxlQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVycykge1xyXG4gICAgICAgICAgICBhbGVydCgnVGFzayBuYW1lIG1heSBvbmx5IGNvbnRhaW4gbGV0dGVycywgbnVtYmVycyBhbmQgc3BhY2VzLicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0YXNrIGRhdGFcclxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVzZSBkYXRlLWZucyB0byBlc3RhYmxpc2ggZGlmZmVyZW5jZUluRGF5c1xyXG4gICAgICAgICAgICBpZiAodGFzay5kdWVEYXRlICE9PSAnJyB8fCB0YXNrLmR1ZURhdGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhc2suZGF5c0xlZnQgPSBkaWZmZXJlbmNlSW5EYXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICApICAgIFxyXG4gICAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gZW1wdHkgdGhlIGNlbGxzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0YXNrUm93LmNoaWxkcmVuW2ldLmZpcnN0Q2hpbGQpIHsgdGFza1Jvdy5jaGlsZHJlbltpXS5yZW1vdmVDaGlsZCh0YXNrUm93LmNoaWxkcmVuW2ldLmZpcnN0Q2hpbGQpIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZHVlRGF0ZSBjZWxsIGNvbnRlbnRzXHJcbiAgICAgICAgICAgIGlmICh0YXNrLmRheXNMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGBUbyBkbyBpbiAke3Rhc2suZGF5c0xlZnR9IGRheXNgO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suZGF5c0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gYCR7LXRhc2suZGF5c0xlZnR9IGRheXMgb3ZlcmR1ZWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5kYXlzTGVmdCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gYFRvZGF5YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmRheXNMZWZ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIHJlLWVzdGFibGlzaCB0aGUgdGFza1Jvd1xyXG4gICAgICAgICAgICB0YXNrUm93LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuICAgICAgICAgICAgdGFza1Jvdy5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgICAgIHRhc2tSb3cuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5ld190X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgICAgICB0YXNrUm93LmlkID0gYHRhc2tfJHtuZXdfdF90aXRsZU5vU3BhY2VzfWA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uc0FkZGVyKHRhc2ssIHByb2plY3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXNzaWduIGNvbG9yIHRvIHByaW9yaXR5IGNvbHVtblxyXG4gICAgICAgICAgICBwcmlvcml0eUNvbG9yZXIucHJpb3JpdHlDbGFzc0Fzc2lnbmVyKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbnNBZGRlcih0YXNrLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuICAgICAgICBsZXQgYnV0dG9uc0NlbGwgPSB0YXNrUm93LmNoaWxkcmVuW3Rhc2tSb3cuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgYnV0dG9uc0NlbGwucmVtb3ZlQ2hpbGQoYnV0dG9uc0NlbGwuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinI4nO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ+Kckyc7XHJcbiAgICAgICAgYnV0dG9uc0NlbGwuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uc0NlbGwuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5lZGl0QnV0dG9uT3BlcmF0b3IodGFzaywgcHJvamVjdCkpO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0NvbXBsZXRlci5jb21wbGV0ZVRhc2sodGFzaywgcHJvamVjdCkpO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRvb2x0aXAgbWFrZXJzXHJcbiAgICAgICAgdG9vbHRpcE9wZXJhdG9yLnRvb2x0aXBGb3JFZGl0KHRhc2spO1xyXG4gICAgICAgIHRvb2x0aXBPcGVyYXRvci50b29sdGlwRm9yQ29tcGxldGUodGFzayk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgdGFzayBpbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBsZXQgbG9jYWxUYXNrc0FycmF5ID0gbG9jYWxTdG9yYWdlLnRhc2tzLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgbGV0IG9sZFRhc2tJbmRleDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmV0cmlldmVkVGFza09iamVjdCA9IEpTT04ucGFyc2UobG9jYWxUYXNrc0FycmF5W2ldKTtcclxuICAgICAgICAgICAgaWYgKHJldHJpZXZlZFRhc2tPYmplY3QudGl0bGUgPT0gdGFzay50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgb2xkVGFza0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIGxvY2FsVGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBsb2NhbFRhc2tzQXJyYXkuam9pbignfCcpO1xyXG5cclxuICAgICAgICAvLyBpbnNlcnQgdGFzayBpbnRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIHRhc2suc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeSh0YXNrKTtcclxuICAgICAgICBsZXQgZXhpc3RpbmdUYXNrcztcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nVGFza3MgPSBsb2NhbFN0b3JhZ2UudGFza3M7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IGV4aXN0aW5nVGFza3MgKyAnfCcgKyB0YXNrLnN0cmluZ2lmaWVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IHRhc2suc3RyaW5naWZpZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2tFZGl0b3IgZnJvbSAnLi91aV90YXNrX2VkaXRvcic7XHJcbmltcG9ydCBUYXNrQ29tcGxldGVyIGZyb20gJy4vdWlfdGFza19jb21wbGV0ZXInO1xyXG5pbXBvcnQgVG9vbHRpcE9wZXJhdG9yIGZyb20gJy4vdWlfdG9vbHRpcF9vcGVyYXRvcic7XHJcblxyXG5sZXQgdGFza0VkaXRvciA9IG5ldyBUYXNrRWRpdG9yKCk7XHJcbmxldCB0YXNrQ29tcGxldGVyID0gbmV3IFRhc2tDb21wbGV0ZXIoKTtcclxubGV0IHRvb2x0aXBPcGVyYXRvciA9IG5ldyBUb29sdGlwT3BlcmF0b3IoKTtcclxuXHJcbi8vIGV4dGVybmFsIGxpYnJhcmllc1xyXG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrUm93Q3JlYXRvciB7XHJcbiAgICBtYWtlVGFza1Jvdyh0YXNrLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gRmluZCB0aGUgY29ycmVjdCBwcm9qZWN0IHJvd1xyXG4gICAgICAgIGxldCBwX3RpdGxlTm9TcGFjZXMgPSBwcm9qZWN0LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0Um93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jvd18ke3BfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzIG9mIHRoZSB0YXNrIHJvd1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0YXNrUm93LmNsYXNzTGlzdC5hZGQoJ3Rhc2tSb3cnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBsZXQgdGFza1Jvd0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGxldCB0YXNrUm93QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgIC8vIENlbnRlcmluZ1xyXG4gICAgICAgIHRhc2tSb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdjZW50ZXJlZCcpO1xyXG5cclxuICAgICAgICAvLyBEYXRlIGNlbGxcclxuICAgICAgICAgICAgLy8gMSkgdW5kZXJzdGFuZCB3aGF0IGZvcm1hdCBpcyB0YXNrLmR1ZURhdGUgaW4uIGlzIGl0IGEgc3RyaW5nPyBhbiBvYmplY3Q/XHJcbiAgICAgICAgICAgIC8vIGFuc3dlcjogaXQncyBhIHN0cmluZyBpbiB0aGUgJ3l5eXktbW0tZGQnIGZvcm1hdFxyXG4gICAgICAgICAgICAvLyAyKSB0cmFuc2Zvcm0gdGhhdCBzdHJpbmcgaW50byBhbiBvYmplY3QgZGF0YSBmbnMgY2FuIHVzZSBpbiBpdHMgY2FsY3VsYXRpb25zXHJcbiAgICAgICAgICAgIC8vIGFuc3dlcjogZnJvbSB0aGUgZG9jdW1lbnRhdGlvbiBpdCBsb29rcyBsaWtlIGEgc3RyaW5nIGlzIGZpbmVcclxuICAgICAgICAgICAgLy8gMykgZXN0YWJsaXNoIHRvZGF5XHJcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSAhPT0gJycgfHwgdGFzay5kdWVEYXRlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhc2suZGF5c0xlZnQgPSBkaWZmZXJlbmNlSW5EYXlzKFxyXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKVxyXG4gICAgICAgICAgICApICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGV4dCBjb250ZW50cyBvZiB0aGUgZWxlbWVudHNcclxuICAgICAgICB0YXNrUm93UHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tSb3dUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgdGFza1Jvd0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgICAgICBpZiAodGFzay5kYXlzTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgdGFza1Jvd0R1ZURhdGUudGV4dENvbnRlbnQgPSBgVG8gZG8gaW4gJHt0YXNrLmRheXNMZWZ0fSBkYXlzYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhc2suZGF5c0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRhc2tSb3dEdWVEYXRlLnRleHRDb250ZW50ID0gYCR7LXRhc2suZGF5c0xlZnR9IGRheXMgb3ZlcmR1ZWA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLmRheXNMZWZ0ID09IDApIHtcclxuICAgICAgICAgICAgdGFza1Jvd0R1ZURhdGUudGV4dENvbnRlbnQgPSBgVG9kYXlgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5kYXlzTGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhc2tSb3dEdWVEYXRlLnRleHRDb250ZW50ID0gYGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb250ZW50cyBvZiB0YXNrUm93QnV0dG9uc1xyXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinI4nO1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ+Kckyc7XHJcbiAgICAgICAgdGFza1Jvd0J1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICAgICAgdGFza1Jvd0J1dHRvbnMuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGFza1Jvd1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd1ByaW9yaXR5KTtcclxuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dUaXRsZSk7XHJcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd0R1ZURhdGUpO1xyXG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd0J1dHRvbnMpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0YXNrIGlzIGNvbXBsZXRlZFxyXG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWRUYXNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFZGl0IFRhc2tzXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tFZGl0b3IuZWRpdEJ1dHRvbk9wZXJhdG9yKHRhc2ssIHByb2plY3QpKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGxldGUgVGFza3NcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tDb21wbGV0ZXIuY29tcGxldGVUYXNrKHRhc2ssIHByb2plY3QpKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IHRhc2tSb3cgYWZ0ZXIgY29ycmVjdCBwcm9qZWN0Um93XHJcbiAgICAgICAgcHJvamVjdFJvdy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgdGFza1Jvdyk7XHJcblxyXG4gICAgICAgIC8vIGdpdmUgSUQgZm9yIGVkaXRpbmcgcHVycG9zZXNcclxuICAgICAgICBsZXQgdF90aXRsZU5vU3BhY2VzID0gdGFzay50aXRsZS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcclxuICAgICAgICB0YXNrUm93LnNldEF0dHJpYnV0ZShgaWRgLCBgdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsbCB0b29sdGlwIG1ha2Vyc1xyXG4gICAgICAgIHRvb2x0aXBPcGVyYXRvci50b29sdGlwRm9yRWRpdCh0YXNrKTtcclxuICAgICAgICB0b29sdGlwT3BlcmF0b3IudG9vbHRpcEZvckNvbXBsZXRlKHRhc2spO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcE9wZXJhdG9yIHtcclxuICAgIHRvb2x0aXBGb3JFZGl0KHRhc2spIHtcclxuICAgICAgICAvLyBjcmVhdGUgdG9vbHRpcCBub3RlXHJcbiAgICAgICAgbGV0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9ICdFZGl0IHRhc2suJ1xyXG5cclxuICAgICAgICAvLyBmaW5kIGNvcnJlY3QgdGFza1xyXG4gICAgICAgIGxldCB0X3RpdGxlTm9TcGFjZXMgPSB0YXNrLnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xyXG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfJHt0X3RpdGxlTm9TcGFjZXN9YCk7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgcGFyZW50IG5vZGUgKGVkaXQgYnV0dG9uKVxyXG4gICAgICAgIGxldCBidXR0b25zQ2VsbCA9IHRhc2tSb3cuY2hpbGRyZW5bdGFza1Jvdy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGJ1dHRvbnNDZWxsLmNoaWxkcmVuWzBdO1xyXG5cclxuICAgICAgICAvLyBhc3NpZ24gY2xhc3Nlc1xyXG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9vbHRpcFBhcmVudCcpO1xyXG4gICAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xyXG5cclxuICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246cmVsYXRpdmU7Jyk7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sdGlwKTtcclxuICAgIH1cclxuICAgIHRvb2x0aXBGb3JDb21wbGV0ZSh0YXNrKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIHRvb2x0aXAgbm90ZVxyXG4gICAgICAgIGxldCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSAnQ29tcGxldGUgdGFzay4nXHJcblxyXG4gICAgICAgIC8vIGZpbmQgY29ycmVjdCB0YXNrXHJcbiAgICAgICAgbGV0IHRfdGl0bGVOb1NwYWNlcyA9IHRhc2sudGl0bGUucmVwbGFjZUFsbCgnICcsICdfJyk7XHJcbiAgICAgICAgbGV0IHRhc2tSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza18ke3RfdGl0bGVOb1NwYWNlc31gKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBwYXJlbnQgbm9kZSAoZWRpdCBidXR0b24pXHJcbiAgICAgICAgbGV0IGJ1dHRvbnNDZWxsID0gdGFza1Jvdy5jaGlsZHJlblt0YXNrUm93LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBjb21wbGV0ZUJ1dHRvbiA9IGJ1dHRvbnNDZWxsLmNoaWxkcmVuWzFdO1xyXG5cclxuICAgICAgICAvLyBhc3NpZ24gY2xhc3Nlc1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBQYXJlbnQnKTtcclxuICAgICAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKTtcclxuXHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsnKTtcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sdGlwKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheSBwZXJpb2RzIGJldHdlZW4gdHdvIGRhdGVzLiBGcmFjdGlvbmFsIGRheXMgYXJlXG4gKiB0cnVuY2F0ZWQgdG93YXJkcyB6ZXJvLlxuICpcbiAqIE9uZSBcImZ1bGwgZGF5XCIgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBsb2NhbCB0aW1lIGluIG9uZSBkYXkgdG8gdGhlIHNhbWVcbiAqIGxvY2FsIHRpbWUgb24gdGhlIG5leHQgb3IgcHJldmlvdXMgZGF5LiBBIGZ1bGwgZGF5IGNhbiBzb21ldGltZXMgYmUgbGVzcyB0aGFuXG4gKiBvciBtb3JlIHRoYW4gMjQgaG91cnMgaWYgYSBkYXlsaWdodCBzYXZpbmdzIGNoYW5nZSBoYXBwZW5zIGJldHdlZW4gdHdvIGRhdGVzLlxuICpcbiAqIFRvIGlnbm9yZSBEU1QgYW5kIG9ubHkgbWVhc3VyZSBleGFjdCAyNC1ob3VyIHBlcmlvZHMsIHVzZSB0aGlzIGluc3RlYWQ6XG4gKiBgTWF0aC50cnVuYyhkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KS8yNCl8MGAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBmdWxsIGRheXMgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbCB0aW1lem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDEgTWFyY2ggMjAyMCAwOjAwIGFuZCAxIEp1bmUgMjAyMCAwOjAwID9cbiAqIC8vIE5vdGU6IGJlY2F1c2UgbG9jYWwgdGltZSBpcyB1c2VkLCB0aGVcbiAqIC8vIHJlc3VsdCB3aWxsIGFsd2F5cyBiZSA5MiBkYXlzLCBldmVuIGluXG4gKiAvLyB0aW1lIHpvbmVzIHdoZXJlIERTVCBzdGFydHMgYW5kIHRoZVxuICogLy8gcGVyaW9kIGhhcyBvbmx5IDkyKjI0LTEgaG91cnMuXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDIwLCA1LCAxKSxcbiAqICAgbmV3IERhdGUoMjAyMCwgMiwgMSlcbiAqIClcbiAqIC8vPT4gOTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3Qgc2lnbiA9IGNvbXBhcmVMb2NhbEFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpO1xuICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkpO1xuXG4gIF9kYXRlTGVmdC5zZXREYXRlKF9kYXRlTGVmdC5nZXREYXRlKCkgLSBzaWduICogZGlmZmVyZW5jZSk7XG5cbiAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIGRheXMgLSBkaWZmIGluIGNhbGVuZGFyIGRheXMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgZGF5IGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuICBjb25zdCBpc0xhc3REYXlOb3RGdWxsID0gTnVtYmVyKFxuICAgIGNvbXBhcmVMb2NhbEFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpID09PSAtc2lnbixcbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gaXNMYXN0RGF5Tm90RnVsbCk7XG4gIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn1cblxuLy8gTGlrZSBgY29tcGFyZUFzY2AgYnV0IHVzZXMgbG9jYWwgdGltZSBub3QgVVRDLCB3aGljaCBpcyBuZWVkZWRcbi8vIGZvciBhY2N1cmF0ZSBlcXVhbGl0eSBjb21wYXJpc29ucyBvZiBVVEMgdGltZXN0YW1wcyB0aGF0IGVuZCB1cFxuLy8gaGF2aW5nIHRoZSBzYW1lIHJlcHJlc2VudGF0aW9uIGluIGxvY2FsIHRpbWUsIGUuZy4gb25lIGhvdXIgYmVmb3JlXG4vLyBEU1QgZW5kcyB2cy4gdGhlIGluc3RhbnQgdGhhdCBEU1QgZW5kcy5cbmZ1bmN0aW9uIGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRpZmYgPVxuICAgIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKSB8fFxuICAgIGRhdGVMZWZ0LmdldERhdGUoKSAtIGRhdGVSaWdodC5nZXREYXRlKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRIb3VycygpIC0gZGF0ZVJpZ2h0LmdldEhvdXJzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaW51dGVzKCkgLSBkYXRlUmlnaHQuZ2V0TWludXRlcygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0U2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldFNlY29uZHMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluRGF5cztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0aW5nXHJcbmltcG9ydCBQcm9qZWN0QnV0dG9uT3BlcmF0b3IgZnJvbSAnLi91aV9wcm9qZWN0X2J1dHRvbl9vcHInO1xyXG5pbXBvcnQgUHJvamVjdENyZWF0b3IgZnJvbSAnLi9zbV9wcm9qZWN0X2NyZWF0b3InO1xyXG5pbXBvcnQgVGFza0NyZWF0b3IgZnJvbSAnLi9zbV90YXNrX2NyZWF0b3InO1xyXG5pbXBvcnQgUm93Q3JlYXRvciBmcm9tICcuL3VpX3Jvd19jcmVhdG9yJztcclxuaW1wb3J0IFRhc2tSb3dDcmVhdG9yIGZyb20gJy4vdWlfdGFza19yb3dfY3JlYXRvcic7XHJcbmltcG9ydCBBc3NpZ25lciBmcm9tICcuL3NtX3Rhc2tfYXNzaWduZXInO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcblxyXG4vLyBpbml0aWFsaXplIGluc3RhbmNlc1xyXG5sZXQgcHJvamVjdEJ1dHRvbk9wZXJhdG9yID0gbmV3IFByb2plY3RCdXR0b25PcGVyYXRvcigpO1xyXG5sZXQgcHJvamVjdENyZWF0b3IgPSBuZXcgUHJvamVjdENyZWF0b3IoKTtcclxubGV0IHRhc2tDcmVhdG9yID0gbmV3IFRhc2tDcmVhdG9yKCk7XHJcbmxldCByb3dDcmVhdG9yID0gbmV3IFJvd0NyZWF0b3IoKTtcclxubGV0IHRhc2tSb3dDcmVhdG9yID0gbmV3IFRhc2tSb3dDcmVhdG9yKCk7XHJcbmxldCBhc3NpZ25lciA9IG5ldyBBc3NpZ25lcigpO1xyXG5cclxuLy8gdGVzdGluZ1xyXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fY3JlYXRlTmV3UHJvamVjdCcpO1xyXG5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEJ1dHRvbk9wZXJhdG9yLmNyZWF0ZU5ld1Byb2plY3RXaXRoVUkpO1xyXG5cclxuLy8gcmV0cmlldmluZyBsb2NhbFN0b3JhZ2UgZm9yIHByb2plY3RzXHJcbmxldCBwYXN0UHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UucHJvamVjdHM7XHJcbmxldCBwYXN0UHJvamVjdHNBcnJheSA9IHBhc3RQcm9qZWN0cyA/IHBhc3RQcm9qZWN0cy5zcGxpdCgnfCcpIDogW107XHJcbmxldCBwcm9qZWN0T2JqZWN0c0FycmF5ID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcGFzdFByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCByZXRyaWV2ZWRPYmplY3QgPSBKU09OLnBhcnNlKHBhc3RQcm9qZWN0c0FycmF5W2ldKTtcclxuICAgIGxldCBuZXdQcm9qZWN0T2JqZWN0ID0gcHJvamVjdENyZWF0b3IubmV3UHJvamVjdChyZXRyaWV2ZWRPYmplY3QudGl0bGUpO1xyXG4gICAgcm93Q3JlYXRvci5tYWtlUHJvamVjdFJvdyhuZXdQcm9qZWN0T2JqZWN0KTtcclxuICAgIHJvd0NyZWF0b3IubWFrZUZvcm1Sb3cobmV3UHJvamVjdE9iamVjdCk7XHJcbiAgICBwcm9qZWN0T2JqZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdE9iamVjdCk7XHJcbn1cclxuXHJcbi8vIHJldHJpZXZlIGxvY2FsU3RvcmFnZSBmb3IgdGFza3NcclxubGV0IHBhc3RUYXNrcyA9IGxvY2FsU3RvcmFnZS50YXNrcztcclxubGV0IHBhc3RUYXNrc0FycmF5ID0gcGFzdFRhc2tzID8gcGFzdFRhc2tzLnNwbGl0KCd8JykgOiBbXTtcclxuaWYgKHBhc3RUYXNrc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzdFByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmV0cmlldmVkVGFza09iamVjdCA9IEpTT04ucGFyc2UocGFzdFRhc2tzQXJyYXlbaV0pO1xyXG4gICAgICAgIGxldCBuZXdUYXNrT2JqZWN0ID0gdGFza0NyZWF0b3IubmV3VGFzayhyZXRyaWV2ZWRUYXNrT2JqZWN0LnRpdGxlLCByZXRyaWV2ZWRUYXNrT2JqZWN0LmRlc2NyaXB0aW9uLCByZXRyaWV2ZWRUYXNrT2JqZWN0LmR1ZURhdGUsIHJldHJpZXZlZFRhc2tPYmplY3QucHJpb3JpdHksIHJldHJpZXZlZFRhc2tPYmplY3QucGFydE9mUHJvamVjdCk7XHJcbiAgICAgICAgbGV0IGNvcnJlY3RQcm9qZWN0ID0gcHJvamVjdE9iamVjdHNBcnJheS5maW5kKGkgPT4gaS50aXRsZSA9PSBuZXdUYXNrT2JqZWN0LnBhcnRPZlByb2plY3QpO1xyXG4gICAgICAgIHRhc2tSb3dDcmVhdG9yLm1ha2VUYXNrUm93KG5ld1Rhc2tPYmplY3QsIGNvcnJlY3RQcm9qZWN0KTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi8vIFRvIERvXHJcbiAgICAvLyBBIGJ1dHRvbiBcIkNyZWF0ZSBOZXcgUHJvamVjdFwiIGlzIG9uIHRoZSAqKkhFQURFUioqXHJcbiAgICAvLyBXaGVuIHlvdSBjbGljayBpdCwgaXQgY2FsbHMgdGhlIHByb2plY3QgY3JlYXRvclxyXG4gICAgLy8gKHlvdSBuYW1lIGEgcHJvamVjdCBhbmQgYSBsaW5lIHNob3dzIHVwLCBMSUtFIFwiSElHSFwiIGluIHRvb2RsZWRvKVxyXG4gICAgLy8gYnV0IGFsc28gY2FsbHMgdGhlIERPTSB0YWJsZSBtYWtlciBmdW5jdGlvbiEgW01BS0UgSVQgU0VQQVJBVEUgLS0tIFJPVyBDUkVBVE9SIG9yIHNvbWV0aGluZ11cclxuICAgIC8vIFVuZGVyIHRoZSBcIkhJR0hcIiBsaW5lLCBvbmUgcm93IC0tIGxpZ2h0IGdyZWVuIC0tIHdpdGggYSBzdWJtaXQgZm9ybSBcImFkZCBuZXcgdGFza1wiIGFuZCBmb3JtcyBpbiB0aGUgdGFibGUgIFxyXG4gICAgLy8gdGhpcyBmb3JtIGNhbGxzIHRoZSB0YXNrQ3JlYXRvciBmdW5jdGlvbiAtLS0gdG8gdGhpcyBwcm9qZWN0XHJcbiAgICAvLyB0byB0aGUgcmlnaHQgb2YgdGhlIFRBU0sgUk9XIC0tLSBlZGl0IHRhc2sgYW5kIGNvbXBsZXRlIHRhc2sgYnV0dG9ucyFcclxuXHJcbiAgICAvLyBTTywgbW9kdWxlcyB0byBtYWtlOlxyXG4gICAgLy8gMSkgcm93Q3JlYXRvciAtIG5ldyBtZXRob2RcclxuICAgIC8vIGNyZWF0ZXMgYSByb3cgb2YgZm9ybXNcclxuICAgIC8vIDIpIENyZWF0ZU5ld1Byb2plY3QgYnV0dG9uIG9wZXJhdG9yXHJcbiAgICAvLyBjYWxscyBwcm9qZWN0Q3JlYXRvclxyXG4gICAgLy8gY2FsbHMgcm93Q3JlYXRvci5wcm9qZWN0Um93XHJcbiAgICAvLyBjYWxscyByb3dDcmVhdG9yLmZvcm1Sb3dcclxuICAgIC8vIDMpIENyZWF0ZU5ld1Rhc2sgc3VibWlzc2lvbiBmb3JtcyBvcGVyYXRvclxyXG4gICAgLy8gZ2F0aGVycyBkYXRhXHJcbiAgICAvLyBjYWxscyB0YXNrQ3JlYXRvclxyXG4gICAgLy8gY2FsbHMgcm93Q3JlYXRvci50YXNrUm93XHJcbiAgICAvLyA0KSBlbXB0eSB2YWx1ZXMgb2YgaW5wdXRzIGFmdGVyIHRhc2sgaXMgYWRkZWRcclxuICAgIC8vIDUpIGVkaXQgdGFzayB1aVxyXG4gICAgLy8gNikgY29tcGxldGUgdGFzayB1aVxyXG4gICAgLy8gdGFibGUgaGVhZGVyc1xyXG4gICAgLy8gZm9udFxyXG4gICAgLy8gY29sb3JzXHJcbiAgICAvLyBidXR0b25zIHN0eWxlXHJcbiAgICAvLyBsb2dvIC0gaGVhZGVyXHJcbiAgICAvLyBubyBzbGlkaW5nIHdoZW4gZWRpdGluZyB0YXNrXHJcbiAgICAvLyBjb2x1bW4gd2lkdGhcclxuICAgIC8vIHRvb2wgdGlwc1xyXG4gICAgLy8gaG9zdCBvbiBwYWdlc1xyXG4gICAgLy8gaW5wdXRzOlxyXG4gICAgICAgICAgICAgICAgLy8gaW5wdXRzIGFyZSBpbjpcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3dfY3JlYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhc2tfZWRpdG9yXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dCByZWFkZXJzIGFyZSBpbjpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0YXNrX2J1dHRvbl9vcGVyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhc2tfZWRpdG9yXHJcbiAgICAgICAgLy8gcmV2YW1wIGlucHV0cyBvZiBkdWVEYXRlXHJcbiAgICAgICAgLy8gcmV2YW1wIGlucHV0cyBvZiBwcmlvcml0eVxyXG4gICAgICAgIC8vIHByaW9yaXR5IC0tLSBkaWZmZXJlbnQgY29sb3JzIG9mIHRhc2tSb3cgZGVwZW5kaW5nIG9uIHByaW9yaXR5IFxyXG4gICAgICAgIC8vIGNlbnRlciBwcmlvcml0eVxyXG4gICAgLy8gbGltaXQ6IG1heCBjaGFyYWN0ZXJzLCBzcGVjaWFsIGNoYXJhY3RlcnMsIHRhc2sgbmFtZSBub3QgZW1wdHkgLS0tICpUSElTIEhBUyBUTyBCRSBIQVJEQ09ERUQgV0lUSCBJRnMgQkVGT1JFIFZBTFVFUyBBUkUgU0VOVCpcclxuICAgIC8vIGRhdGUtZm5zOiB5b3UgZW50ZXIgYnkgd2hlbiBpdCBpcyBkdWUsIGJ1dCB3aGF0IHRhc2tSb3cgc2hvd3MgaXMgLS0tICpIT1cgTUFOWSBEQVlTIExFRlQqXHJcbiAgICAvLyBkYXRlLWZuczogaGFyZCBjb2RlIHdpdGggSUZzIDogd2hhdCB0byBkbyBpZiBkYXRlIGlzIHVuc2V0IG9yIGl0IGlzIGluIHRoZSBwYXN0LlxyXG4gICAgLy8gZGF0ZS1mbnM6IHN0b3JlIGRheXNMZWZ0IGluIHRhc2sgKGZvciBzb3J0aW5nIGxhdGVyKVxyXG4gICAgLy8gZGF0ZS1maW5zOiBpbmNvcnBvcmF0ZSBuZXcgdGhpbmcgZXZlcnl3aGVyZVxyXG4gICAgLy8gYnVnIC0gZHVlRGF0ZSBmb3JtIGRvZXNuJ3QgZGlzYXBwZWFyIGlmIGl0J3MgaW5jb21wbGV0ZVxyXG4gICAgLy8gaWYgeW91IGNsaWNrIGVkaXQgdGFzaywgdGhlIGZvcm0gc2hvdWxkIGFscmVhZHkgaGF2ZSB0aGUgZXhpc3RpbmcgZGF0ZSBlbnRlcmVkXHJcbiAgICAvLyBjYWxsIGFzc2lnbmVyIHdoZW4gbWFraW5nIHRhc2tzXHJcbiAgICAvLyByZS1hc3NpZ24gdGFzayB0byBwcm9qZWN0IGFmdGVyIGNvbXBsZXRlIG9yIGVkaXQ/XHJcblxyXG4gICAgLy8gbmV3IHRvb2xzOlxyXG4gICAgICAgIC8vIHBlcnNpc3RlbmN5OiB1c2luZyBXZWIgU3RvcmFnZSBBUEkgLS0tICpUSElTIElTIE5PVCBBIFJFTU9URSBBUEksIGl0IGlzIGEgQ0xJRU5ULVNJREUgQVBJISpcclxuICAgICAgICAvLyBidWdzOlxyXG4gICAgICAgICAgICAvLyBlZGl0aW5nIHRhc2tzIC0gY2hhbmdpbmcgbmFtZSBicmVha3MgdGhlIHRoaW5nXHJcbiAgICAgICAgICAgIC8vIGVkaXRpbmcgdGFza3MgLSBjaGFuZ2luZyBub3QgdGhlIGZpcnN0IHRhc2sgaW4gYSBwcm9qZWN0IGJyZWFrcyB0aGUgdGhpbmdcclxuICAgICAgICAgICAgLy8gY29tcGxldGluZyBhbmQgdW5jb21wbGV0aW5nIHRhc2tzIGRvZXNuJ3Qgc3RheVxyXG5cclxuICAgIC8vIGVhc3kgb2xkIHN0dWZmOlxyXG4gICAgICAgIC8vIGFkZCB0byBsaW1pdHMgLS0gY2Fubm90IGhhdmUgdHdvIHRhc2tzIHdpdGggdGhlIHNhbWUgbmFtZSAobG9vcClcclxuICAgICAgICAvLyBhZGQgdGV4dCAtIENsaWNrIG9uIGFkZCBwcm9qZWN0IChoYW5kLWRyYXduIGFycm93IHRvIHRoZSBidXR0b24pXHJcbiAgICAgICAgLy8gbmV3IHByb2plY3QgY3JlYXRpb24gd2luZG93IC0gZGlhbG9nP1xyXG4gICAgICAgIC8vIHJlc3BvbnNpdmUgLSByaWdodCBub3csIGV2ZXJ5dGhpbmcgaXMgc3VwZXIgc21hbGwhXHJcbiAgICAgICAgLy8gZGVsZXRlIHRhc2tzXHJcbiAgICAgICAgLy8gZGVsZXRlIHByb2plY3RzIChhbmQgYWxsIHRhc2tzIHRoZXJlb2YpXHJcbiAgICAgICAgLy8gZWRpdCBwcm9qZWN0IG5hbWUgYnV0dG9uXHJcbiAgICAgICAgLy8gbmF2IGJ1dHRvbnMgLS0tIG9ubHkgc2hvdyBjb21wbGV0ZWQgLyBzaG93IGFsbCAvIG9ubHkgc2hvdyBoaWdoIHByaW9yaXR5XHJcbiAgICAgICAgLy8gc29ydCBieSBwcmlvcml0eVxyXG4gICAgICAgIC8vIHNvcnQgYnkgZGF0ZSAoIC0tLSAqTUFZQkUgQlVUVE9OUyBPTiBUQUJMRSBIRUFERVJTISogKVxyXG4gICAgICAgIC8vIG9ubHkgdmlldyBhIHNpbmdsZSBwcm9qZWN0XHJcbiAgICAgICAgLy8gZXhwYW5kIGEgc2luZ2xlIHRvZG8gdG8gc2VlL2VkaXQgaXRzIGRldGFpbHNcclxuICAgICAgICAvLyByZWFkbWUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=