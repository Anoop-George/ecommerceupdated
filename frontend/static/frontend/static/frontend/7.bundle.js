(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/dist/cjs.js!./static/frontend/maincss.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/frontend/maincss.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"ul {\\r\\n    list-style-type: none;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    overflow: hidden;\\r\\n    background-color: #333333;\\r\\n  }\\r\\n  \\r\\n  li {\\r\\n    float: left;\\r\\n  }\\r\\n  \\r\\n  li a {\\r\\n    display: block;\\r\\n    color: white;\\r\\n    text-align: center;\\r\\n    padding: 16px;\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  li a:hover {\\r\\n    background-color: #111111;\\r\\n  }\\r\\n\\r\\n  .container {\\r\\n    position: relative;\\r\\n    text-align: center;\\r\\n    color: white;\\r\\n  }\\r\\n  .centered {\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./static/frontend/maincss.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/carousal.js":
/*!************************************!*\
  !*** ./src/components/carousal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _static_frontend_maincss_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/frontend/maincss.css */ \"./static/frontend/maincss.css\");\n/* harmony import */ var _static_frontend_maincss_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_frontend_maincss_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Carousal() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),\n      imageIndex = _React$useState2[0],\n      setImageIndex = _React$useState2[1];\n\n  var texts = [\"World of Electronics\", \"The top Brands\", \"Casual Shopping\"];\n  var images = [\"/media/images/banner1.jpg\", \"/media/images/banner2.jpg\", \"/media/images/banner3.jpg\"];\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var timeoutId = setTimeout(function () {\n      setImageIndex((imageIndex + 1) % images.length);\n    }, 2000);\n    return function () {\n      clearTimeout(timeoutId);\n    };\n  }, [imageIndex]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    spacing: 3,\n    justify: \"center\",\n    alignItems: \"center\",\n    direction: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 11,\n    sm: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: images[imageIndex],\n    alt: images[imageIndex],\n    style: {\n      width: \"100%\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"centered\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      fontFamily: \"Alfa Slab One\",\n      fontSize: \"5vw\",\n      color: \"#dae3f2\"\n    }\n  }, texts[imageIndex]))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousal);\n\n//# sourceURL=webpack:///./src/components/carousal.js?");

/***/ }),

/***/ "./static/frontend/maincss.css":
/*!*************************************!*\
  !*** ./static/frontend/maincss.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./maincss.css */ \"./node_modules/css-loader/dist/cjs.js!./static/frontend/maincss.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./static/frontend/maincss.css?");

/***/ })

}]);