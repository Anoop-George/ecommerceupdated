(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/components/backend/detailofPo.js":
/*!**********************************************!*\
  !*** ./src/components/backend/detailofPo.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_csrf_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/csrf_token */ \"./src/components/common/csrf_token.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction DetailsofPO(props) {\n  var poid = parseInt(props.match.params.id.substring(1), 10);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      item = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      change = _useState4[0],\n      setChange = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      feedback = _useState6[0],\n      setFeedback = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      rej = _useState8[0],\n      setRej = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      remove = _useState10[0],\n      setRemove = _useState10[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/api/PODetails/\".concat(poid, \"/\"), {\n      headers: {\n        \"content-type\": \"application/json\",\n        \"X-CSRFTOKEN\": _common_csrf_token__WEBPACK_IMPORTED_MODULE_3__[\"CSRF_TOKEN\"]\n      }\n    }).then(function (r) {\n      setData(r.data);\n    });\n  }, [change]); //\n\n  var update = function update(data) {\n    if (data == \"accept\") {\n      item.accepted = true;\n    } else if (data == \"reject\") {\n      item.rejected = true;\n    } else if (data == \"delivered\") {\n      item.delivered = true;\n    } else if (data == \"rejected_reason\") {\n      item.rejected_reason = rej;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(\"/api/PODetails/\".concat(poid, \"/\"), item, {\n      headers: {\n        \"content-type\": \"application/json\",\n        \"X-CSRFTOKEN\": _common_csrf_token__WEBPACK_IMPORTED_MODULE_3__[\"CSRF_TOKEN\"]\n      }\n    }).then(function () {\n      setChange(!change);\n      setFeedback(\"Recorded\");\n    }).catch(function () {\n      setFeedback(\"Error happened\");\n    });\n  }; //\n\n\n  var deleteitem = function deleteitem() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(\"/api/PODetails/\".concat(poid, \"/\"), {\n      headers: {\n        \"content-type\": \"application/json\",\n        \"X-CSRFTOKEN\": _common_csrf_token__WEBPACK_IMPORTED_MODULE_3__[\"CSRF_TOKEN\"]\n      }\n    }).then(function () {\n      setData([]);\n      setFeedback(\"deleted\");\n    }).catch(function () {\n      setFeedback(\"Error happened\");\n    });\n  }; //\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    container: true,\n    direction: \"row\",\n    justify: \"center\",\n    alignItems: \"flex-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 4,\n    key: item.id,\n    style: {\n      padding: 4,\n      marginTop: 8\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    elevation: 1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n    style: {\n      textDecoration: \"none\"\n    },\n    to: {\n      pathname: \"/ProfileDetails:\".concat(item.user)\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"User Details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"PO reference number : \", item.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Product name : \", item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Product id : \", item.product), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Quantity : \", item.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Ordered user id :\", item.user), item.accepted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \" Purchase order status:Accepted\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Purchase order status:Not Accepted\"), item.cashondelivary ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \" Payment method:Cash on delivery\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Payment method: Online\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Created \", item.created, \" \"), item.delivered ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \" Delivery status:Delivered\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Delivery status:Not Delivered\"), item.rejected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \" Acceptance status:Order Rejected\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Acceptance status:Order not rejected\"), item.rejected_reason ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \" Acceptance status:\", item.rejected_reason) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    variant: \"contained\",\n    color: \"primary\",\n    style: {\n      margin: 2\n    },\n    onClick: function onClick() {\n      return update(\"accept\");\n    }\n  }, \"accept order\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    variant: \"contained\",\n    color: \"primary\",\n    style: {\n      margin: 2\n    },\n    onClick: function onClick() {\n      return update(\"reject\");\n    }\n  }, \"Reject Order\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    variant: \"contained\",\n    color: \"primary\",\n    style: {\n      margin: 2\n    },\n    onClick: function onClick() {\n      return update(\"delivered\");\n    }\n  }, \"Mark Delivered\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    id: \"outlined-basic\",\n    label: \"Reason for rejection\",\n    variant: \"outlined\",\n    value: rej,\n    onChange: function onChange(e) {\n      return setRej(e.target.value);\n    },\n    style: {\n      margin: 5\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    color: \"primary\",\n    style: {\n      margin: 4\n    },\n    onClick: function onClick() {\n      return update(\"rejected_reason\");\n    },\n    variant: \"outlined\"\n  }, \"Submit rejection reason\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    variant: \"contained\",\n    color: \"secondary\",\n    style: {\n      margin: 2\n    },\n    onClick: function onClick() {\n      return setRemove(true);\n    }\n  }, \"Delete Order\"), remove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      backgroundColor: \"lightgrey\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, \"Are you sure ? \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    variant: \"contained\",\n    color: \"secondary\",\n    style: {\n      margin: 2\n    },\n    onClick: function onClick() {\n      return deleteitem();\n    }\n  }, \"Delete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    variant: \"contained\",\n    color: \"secondary\",\n    style: {\n      margin: 2\n    },\n    onClick: function onClick() {\n      return setRemove(false);\n    }\n  }, \"cancel\")) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    item: true,\n    xs: 5,\n    sm: 5,\n    style: {\n      margin: 3\n    }\n  }, feedback ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    style: {\n      margin: 3\n    }\n  }, feedback), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    style: {\n      margin: 3\n    },\n    onClick: function onClick() {\n      return setFeedback(null);\n    }\n  }, \"dismiss\")) : null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsofPO);\n\n//# sourceURL=webpack:///./src/components/backend/detailofPo.js?");

/***/ }),

/***/ "./src/components/common/csrf_token.js":
/*!*********************************************!*\
  !*** ./src/components/common/csrf_token.js ***!
  \*********************************************/
/*! exports provided: CSRF_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSRF_TOKEN\", function() { return CSRF_TOKEN; });\n// https://docs.djangoproject.com/en/dev/ref/csrf/#acquiring-the-token-if-csrf-use-sessions-and-csrf-cookie-httponly-are-false\nfunction getCookie(name) {\n  var cookieValue = null;\n\n  if (document.cookie && document.cookie !== '') {\n    var cookies = document.cookie.split(';');\n\n    for (var i = 0; i < cookies.length; i++) {\n      var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?\n\n      if (cookie.substring(0, name.length + 1) === name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n\n  return cookieValue;\n}\n\nvar CSRF_TOKEN = getCookie('csrftoken');\n\n\n//# sourceURL=webpack:///./src/components/common/csrf_token.js?");

/***/ })

}]);