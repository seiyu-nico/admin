(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('auth/logout');

              case 2:
                _this.$router.push('/login');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Index.vue?vue&type=template&id=19a9cccc&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/Index.vue?vue&type=template&id=19a9cccc& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Pro Sidebar")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "form-group col-md-12" }, [
          _c("p", [
            _vm._v(
              "This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(" You can find the complete code on "),
            _c(
              "a",
              {
                attrs: {
                  href: "https://github.com/azouaoui-med/pro-sidebar-template",
                  target: "_blank"
                }
              },
              [_vm._v("\n              Github")]
            ),
            _vm._v(", it contains more themes and background image option")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-12" }, [
          _c("iframe", {
            attrs: {
              src:
                "https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=large",
              frameborder: "0",
              scrolling: "0",
              width: "140px",
              height: "30px"
            }
          }),
          _vm._v(" "),
          _c("iframe", {
            attrs: {
              src:
                "https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=large",
              frameborder: "0",
              scrolling: "0",
              width: "140px",
              height: "30px"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("h5", [_vm._v("More templates")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-4" }, [
          _c("div", { staticClass: "card rounded-0 p-0 shadow-sm" }, [
            _c("img", {
              staticClass: "card-img-top rounded-0",
              attrs: {
                src:
                  "https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png",
                alt: "Angular pro sidebar"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body text-center" }, [
              _c("h6", { staticClass: "card-title" }, [
                _vm._v("Angular Pro Sidebar")
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: {
                    href: "https://github.com/azouaoui-med/angular-pro-sidebar",
                    target: "_blank"
                  }
                },
                [_vm._v("Github")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: {
                    href:
                      "https://azouaoui-med.github.io/angular-pro-sidebar/demo/",
                    target: "_blank"
                  }
                },
                [_vm._v("Preview")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-4" }, [
          _c("div", { staticClass: "card rounded-0 p-0 shadow-sm" }, [
            _c("img", {
              staticClass: "card-img-top rounded-0",
              attrs: {
                src:
                  "https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG",
                alt: "Angular pro sidebar"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body text-center" }, [
              _c("h6", { staticClass: "card-title" }, [
                _vm._v("Angular Dashboard")
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: {
                    href:
                      "https://github.com/azouaoui-med/lightning-admin-angular",
                    target: "_blank"
                  }
                },
                [_vm._v("Github")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: {
                    href:
                      "https://azouaoui-med.github.io/lightning-admin-angular/demo/",
                    target: "_blank"
                  }
                },
                [_vm._v("Preview")]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Index/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Index/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_19a9cccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=19a9cccc& */ "./resources/js/components/Index/Index.vue?vue&type=template&id=19a9cccc&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_19a9cccc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_19a9cccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Index/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/Index.vue?vue&type=template&id=19a9cccc&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Index/Index.vue?vue&type=template&id=19a9cccc& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19a9cccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=19a9cccc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Index.vue?vue&type=template&id=19a9cccc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19a9cccc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19a9cccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);