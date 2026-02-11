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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset & base */\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  background: #f5f6f8;\n  color: #222;\n}\n\n#app {\n  display: flex;\n  min-height: 100vh;\n}\n\n/* Sidebar */\n#sidebar {\n  width: 260px;\n  background: white;\n  border-right: 1px solid #eee;\n  padding: 30px 20px;\n}\n\n#sidebar h2 {\n  margin-top: 0;\n}\n\n.add-project {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n\n/* Main */\n#main {\n  flex: 1;\n  padding: 40px;\n}\n\n.todo-controls {\n  margin-bottom: 20px;\n}\n\n.add-todo {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n\n.add-todo input {\n  flex: 1;\n  min-width: 150px;\n}\n\n#todos > div {\n  background: white;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 12px;\n  border: 1px solid #eee;\n  transition: all 0.2s ease;\n}\n\n#todos > div:hover {\n  box-shadow: 0 4px 12px rgba(0,0,0,0.05);\n}\n\n#projects div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 6px;\n  cursor: pointer;\n}\n#projects button {\n  background: none;\n  border: none;\n  color: #bbb;\n  cursor: pointer;\n  font-size: 14px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: 0.2s;\n}\n/* Delete button */\n#todos button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: #999;\n  cursor: pointer;\n}\n\n#todos button:hover {\n  color: #d11;\n}\ninput {\n  padding: 6px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\ninput:focus {\n  outline: none;\n  border-color: #4f7cff;\n}\n\nbutton {\n  padding: 6px 10px;\n  font-size: 14px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  background: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #f3f3f3;\n}\n.completed span {\n  text-decoration: line-through;\n  color: #888;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/todo.js */ \"./src/logic/todo.js\");\n/* harmony import */ var _logic_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/app.js */ \"./src/logic/app.js\");\n/* harmony import */ var _logic_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/storage.js */ \"./src/logic/storage.js\");\n/* harmony import */ var _logic_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/dom.js */ \"./src/logic/dom.js\");\n\n\n\n\n\n\n\nlet hideCompleted = false;\ndocument\n  .getElementById(\"hide-completed\")\n  .addEventListener(\"change\", (e) => {\n    hideCompleted = e.target.checked;\n    (0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);\n  });\n\n\nconst app = (0,_logic_app_js__WEBPACK_IMPORTED_MODULE_2__.createApp)();\n\n// state\nlet activeProject = app.getProjectByName(\"Inbox\");\n\nfunction handleProjectClick(project) {\n  activeProject = project;\n   (0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderProjects)(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);\n\n}\nfunction handleToggleTodo(todoIndex) {\n  const todo = activeProject.todos[todoIndex];\n  todo.completed = !todo.completed;\n\n  (0,_logic_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(app.getProjects());\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);\n}\n\nfunction handleDeleteProject(projectToDelete) {\n  app.removeProject(projectToDelete);\n\n  // if active project was deleted → switch to Inbox\n  if (activeProject === projectToDelete) {\n    activeProject = app.getProjectByName(\"Inbox\");\n  }\n\n  (0,_logic_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(app.getProjects());\n  (0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderProjects)(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);}\n\n\nfunction handleDeleteTodo(todoIndex) {\n  activeProject.todos.splice(todoIndex,1);\n\n  (0,_logic_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(app.getProjects());\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);\n}\n\ndocument.getElementById(\"add-project\").addEventListener(\"click\", () => {\n  const input = document.getElementById(\"project-input\");\n  const name = input.value.trim();\n\n  if (!name) return;\n\n  const project = app.addProject(name);\n  activeProject = project;\n\n  (0,_logic_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(app.getProjects());\n\n  (0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderProjects)(\n    app.getProjects(),\n    handleProjectClick,\n    activeProject,\n    handleDeleteProject\n  );\n\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);\n  input.value = \"\";\n});\n\nfunction handleEditTodo(todoIndex, newDescription, newDueDate) {\n\n    \n  const todo = activeProject.todos[todoIndex];\n\n  todo.description = newDescription;\n  todo.dueDate = newDueDate;\n\n  (0,_logic_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(app.getProjects());\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);}\n\n \ndocument.getElementById(\"add-todo\").addEventListener(\"click\", () => {\n  const titleInput = document.getElementById(\"todo-input\");\nconst descInput = document.getElementById(\"todo-description\");\nconst dateInput = document.getElementById(\"todo-date\");\n\nconst title = titleInput.value.trim();\nconst description = descInput.value.trim();\nconst dueDate = dateInput.value;\n\nif (!title) return;\n\nconst todo = (0,_logic_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, description, dueDate);\n\nactiveProject.addTodo(todo);\n(0,_logic_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(app.getProjects());\n\n  (0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderProjects)(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);\n\ntitleInput.value = \"\";\ndescInput.value = \"\";\ndateInput.value = \"\";\n});\ndocument\n  .getElementById(\"project-input\")\n  .addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Enter\") {\n      document.getElementById(\"add-project\").click();\n    }\n  });\n\ndocument\n  .getElementById(\"todo-input\")\n  .addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Enter\") {\n      document.getElementById(\"add-todo\").click();\n    }\n  });\n\n\n// initial render\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderProjects)(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);\n(0,_logic_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderTodos)(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);\n\n\n\nconst inbox = app.getProjectByName(\"Inbox\");\n\nif (inbox.todos.length === 0) {\n  const todo = (0,_logic_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\n    \"Test expand\",\n    \"This description should be visible\",\n    \"2026-03-01\",\n    \"high\"\n  );\n  inbox.addTodo(todo);\n  (0,_logic_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(app.getProjects());\n}\n\n\n\nconsole.log(app.getProjects());\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/logic/app.js"
/*!**************************!*\
  !*** ./src/logic/app.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createApp: () => (/* binding */ createApp)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/logic/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/logic/storage.js\");\n\n\nfunction createApp() {\n  \n   \n\nconst projects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadProjects)() ?? [];\n\nif (projects.length === 0) {\n  const inbox = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Inbox\");\n  projects.push(inbox);\n}\n \n\n  function getProjects() {\n    return projects;\n  }\n\n  function addProject(name) {\n    const project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\n    projects.push(project);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)(projects);\n    return project;\n  }\n  function removeProject(projectToRemove) {\n  const index = projects.indexOf(projectToRemove);\n  if (index !== -1) {\n    projects.splice(index, 1);\n  }\n}\n\n\n  function getProjectByName(name) {\n    return projects.find(project => project.name === name);\n  }\n\n  return {\n    getProjects,\n    removeProject,\n    addProject,\n    getProjectByName,\n  };\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/app.js?\n}");

/***/ },

/***/ "./src/logic/dom.js"
/*!**************************!*\
  !*** ./src/logic/dom.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\n\nfunction renderProjects(projects, onProjectClick, activeProject, onDeleteProject) {\n  const container = document.getElementById(\"projects\");\n  container.innerHTML = \"\";\n\n \n\n\n  projects.forEach(project => {\n  const wrapper = document.createElement(\"div\");\n\n  const name = document.createElement(\"span\");\n  name.textContent = project.name;\n  name.style.cursor = \"pointer\";\n\n  if (project === activeProject) {\n    name.style.fontWeight = \"bold\";\n  }\n\n  name.addEventListener(\"click\", () => {\n    onProjectClick(project);\n  });\n\n  wrapper.appendChild(name);\n\n  // ❌ do NOT allow deleting Inbox\n  if (project.name !== \"Inbox\") {\n    const deleteBtn = document.createElement(\"button\");\n    deleteBtn.textContent = \"✕\";\n\n    deleteBtn.addEventListener(\"click\", () => {\n      onDeleteProject(project);\n    });\n\n    wrapper.appendChild(deleteBtn);\n  }\n\n  container.appendChild(wrapper);\n});\n\n\n}\nfunction renderTodos(project, onToggleTodo, onDeleteTodo, hideCompleted, onEditTodo) {\n  const container = document.getElementById(\"todos\");\n  container.innerHTML = \"\";\n \n\n    const activeTodos = project.todos\n    .map((todo, index) => ({ todo, index }))\n    .filter(item => !item.todo.completed);\n\n  const completedTodos = hideCompleted\n    ? []\n  : project.todos\n    .map((todo, index) => ({ todo, index }))\n    .filter(item => item.todo.completed);\n\n\n\n  [...activeTodos, ...completedTodos].forEach(({todo, index}) => {\n    const wrapper = document.createElement(\"div\");\n    const checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\"\n    checkbox.checked = todo.completed; \n\n    checkbox.addEventListener(\"change\", () => {\n      onToggleTodo(index);\n\n    });\n    const title = document.createElement(\"span\");\ntitle.textContent = todo.title;\n title.style.cursor = \"pointer\";\n    title.style.marginLeft = \"6px\";\n\nif (todo.completed) {\n  title.style.textDecoration = \"line-through\";\n  title.style.color = \"#888\"\n}\n\n  const deleteBtn = document.createElement(\"button\");\ndeleteBtn.textContent = \"✕\";\n\ndeleteBtn.addEventListener(\"click\", () => {\n  onDeleteTodo(index);\n});\n\n\n  // 🔽 DETAILS (hidden by default)\n    const details = document.createElement(\"div\");\n    details.style.display = \"none\";\n    details.style.marginLeft = \"24px\";\n\n    const descInput = document.createElement(\"input\");\ndescInput.value = todo.description || \"\";\ndescInput.placeholder = \"Description\";\n\nconst dateInput = document.createElement(\"input\");\ndateInput.type = \"date\";\ndateInput.value = todo.dueDate || \"\";\n\nconst saveBtn = document.createElement(\"button\");\nsaveBtn.textContent = \"Save\";\n\nsaveBtn.addEventListener(\"click\" , () => {\n\n  onEditTodo(index, descInput.value.trim(), dateInput.value);\n});\nfunction saveAndClose() {\n  onEditTodo(index, descInput.value.trim(), dateInput.value);\n  details.style.display = \"none\";\n}\n\nsaveBtn.addEventListener(\"click\", saveAndClose);\n[descInput, dateInput].forEach(input => {\n  input.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Enter\") {\n      saveAndClose();\n    }\n\n    if (e.key === \"Escape\") {\n      details.style.display = \"none\";\n    }\n  });\n});\n\n\ndetails.appendChild(descInput);\ndetails.appendChild(dateInput);\ndetails.appendChild(saveBtn);\n\n    // 🔁 toggle details\n    title.addEventListener(\"click\", () => {\n      details.style.display =\n        details.style.display === \"none\" ? \"block\" : \"none\";\n    });\n\n\n   wrapper.appendChild(checkbox);\n    wrapper.appendChild(title);\n    wrapper.appendChild(deleteBtn);\n    wrapper.appendChild(details);\n\n\n      container.appendChild(wrapper);\n\n  });\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/dom.js?\n}");

/***/ },

/***/ "./src/logic/project.js"
/*!******************************!*\
  !*** ./src/logic/project.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(name) {\n  const todos = [];\n\n  function addTodo(todo) {\n    todos.push(todo);\n  }\n\n  function removeTodo(index) {\n    todos.splice(index, 1);\n  }\n\n  return {\n    name,\n    todos,\n    addTodo,\n    removeTodo,\n  };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/logic/project.js?\n}");

/***/ },

/***/ "./src/logic/storage.js"
/*!******************************!*\
  !*** ./src/logic/storage.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/logic/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/logic/project.js\");\n\n\n\nconst STORAGE_KEY = \"todoAppData\";\n\nfunction saveProjects(projects) {\n  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));\n}\n\nfunction loadProjects() {\n  const data = localStorage.getItem(STORAGE_KEY);\n\n  if (!data) {\n    return null;\n  }\n\n  const parsedProjects = JSON.parse(data);\n\n  return parsedProjects.map(projectData => {\n    const project = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectData.name);\n\n    projectData.todos.forEach(todoData => {\n      const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\n        todoData.title,\n        todoData.description,\n        todoData.dueDate,\n        todoData.priority\n      );\n\n      todo.completed = todoData.completed;\n      project.addTodo(todo);\n    });\n\n    return project;\n  });\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/storage.js?\n}");

/***/ },

/***/ "./src/logic/todo.js"
/*!***************************!*\
  !*** ./src/logic/todo.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(\n  title,\n  description = \"\",\n  dueDate = \"\",\n  priority = null\n) {\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n    completed: false,\n  };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/logic/todo.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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