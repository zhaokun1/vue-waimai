(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "../../../node_modules/babel-loader/lib/index.js?!../../../node_modules/vue-loader/lib/index.js?!./src/views/user/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** D:/peixun/下载/node_modules/babel-loader/lib??ref--0!D:/peixun/下载/node_modules/vue-loader/lib??vue-loader-options!./src/views/user/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_user_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @v/user/Create */ \"./src/views/user/Create.vue\");\n// 引入创建商品\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 局部混合\n  // mixins:[Create]\n  mixins: [_v_user_Create__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    // 重写标题\n    data: function data() {\n      return {\n        title: '编辑用户',\n        // 提交数据地址\n        submitUrl: '/admin/user/update'\n      };\n    }\n  }],\n  methods: {\n    getData: function getData() {\n      var _this = this;\n\n      // 解构路由数据\n      var params = this.$route.params; // console.log(params);\n      // 发送请求\n\n      this.$http.get('/admin/user/detail', {\n        params: params\n      }) // 监听数据返回\n      .then(function (_ref) {\n        var data = _ref.data;\n\n        if (data.errno === 0) {\n          // 存储数据\n          _this.data = data.data;\n        } else {\n          // 提示错误\n          _this.$meaasge.error(data.msg); // 返回上一个页面\n\n\n          _this.$router.go(-1);\n        }\n      });\n    }\n  },\n  // 组件创建完成\n  created: function created() {\n    this.getData();\n  },\n  // 路由改变\n  watch: {\n    $route: function $route() {\n      this.getData();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/user/Edit.vue?D:/peixun/%E4%B8%8B%E8%BD%BD/node_modules/babel-loader/lib??ref--0!D:/peixun/%E4%B8%8B%E8%BD%BD/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/user/Edit.vue":
/*!*********************************!*\
  !*** ./src/views/user/Edit.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ \"./src/views/user/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/user/Edit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/user/Edit.vue?");

/***/ }),

/***/ "./src/views/user/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/views/user/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ \"../../../node_modules/babel-loader/lib/index.js?!../../../node_modules/vue-loader/lib/index.js?!./src/views/user/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/user/Edit.vue?");

/***/ })

}]);