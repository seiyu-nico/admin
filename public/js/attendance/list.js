(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance/list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Attendance/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Attendance/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-daterange-picker */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.umd.min.js");
/* harmony import */ var vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-daterange-picker/dist/vue2-daterange-picker.css */ "./node_modules/vue2-daterange-picker/dist/vue2-daterange-picker.css");
/* harmony import */ var vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_daterange_picker_dist_vue2_daterange_picker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mixin_Attendance_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixin/Attendance/index */ "./resources/js/mixin/Attendance/index.js");
/* harmony import */ var _Spinner_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Spinner/Index */ "./resources/js/components/Spinner/Index.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//

 //you need to import the CSS manually (in case you want to override it)




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixin_Attendance_index__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    DateRangePicker: vue2_daterange_picker__WEBPACK_IMPORTED_MODULE_2___default.a,
    Spinner: _Spinner_Index__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      attendance_date_range: {
        'startDate': '',
        'endDate': ''
      }
    };
  },
  created: function created() {
    this.selectInit();
  },
  methods: {
    selectInit: function selectInit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var today;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                today = _this.$moment();
                _this.attendance_date_range.startDate = today.startOf('month').format('YYYY-MM-DD');
                _this.attendance_date_range.endDate = today.endOf('month').format('YYYY-MM-DD');

                _this.getAttendances(_this.attendance_date_range);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAttendances: function getAttendances(value) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var start, end;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                start = _this2.$moment(value.startDate, 'YYYY-MM-DD', true).format('YYYY-MM-DD');
                end = _this2.$moment(value.endDate, 'YYYY-MM-DD', true).format('YYYY-MM-DD');
                _context2.next = 4;
                return _this2.$store.dispatch('attendance/list/getAttendances', {
                  'start': start,
                  'end': end
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    workingTimes: function workingTimes() {
      var _this3 = this;

      // TODO: 一覧での勤務時間の計算から
      var minutes = this.attendances.map(function (attendance, index, array) {
        return _this3.getWorkingTime(attendance, attendance.break_time).reduce(function (sum, v) {
          return sum + v;
        }, 0);
      });
      return this.format(minutes);
    },
    breakTimes: function breakTimes() {
      var _this4 = this;

      var minutes = this.attendances.map(function (attendance, index, array) {
        return _this4.getBreakTimes(attendance.break_time).reduce(function (sum, v) {
          return sum + v;
        }, 0);
      });
      return this.format(minutes);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    attendances: function attendances(state) {
      return state.attendance.list.attendances;
    },
    spinner: function spinner(state) {
      return state.attendance.list.spinner;
    }
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Spinner/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Spinner/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Attendance/List.vue?vue&type=template&id=41925689&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Attendance/List.vue?vue&type=template&id=41925689& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h2", [_vm._v("勤怠一覧")]),
    _vm._v(" "),
    _c(
      "form",
      [
        _c("date-range-picker", {
          ref: "picker",
          attrs: {
            "locale-data": { firstDay: 1, format: "yyyy-mm-dd" },
            autoApply: true,
            "date-range": _vm.attendance_date_range,
            opens: "right"
          },
          on: { select: _vm.getAttendances }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row my-2" }, [
      _c("div", { staticClass: "col-4" }, [
        _c("p", [_vm._v("勤務時間: " + _vm._s(_vm.workingTimes()))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [
        _c("p", [_vm._v("休憩時間: " + _vm._s(_vm.breakTimes()))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" })
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-hover" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.spinner,
              expression: "spinner"
            }
          ]
        },
        _vm._l(_vm.attendances, function(attendance) {
          return _c("tr", { key: attendance.id }, [
            _c("td", [
              _vm._v(
                _vm._s(attendance.start_date) +
                  " " +
                  _vm._s(attendance.start_time)
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                _vm._s(attendance.end_date) + " " + _vm._s(attendance.end_time)
              )
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: false == _vm.spinner,
            expression: "false == spinner"
          }
        ]
      },
      [_c("Spinner")],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("td", [_vm._v("出勤時間")]),
        _vm._v(" "),
        _c("td", [_vm._v("退勤時間")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Spinner/Index.vue?vue&type=template&id=8dc7d23e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Spinner/Index.vue?vue&type=template&id=8dc7d23e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "d-flex justify-content-center my-2" }, [
      _c(
        "div",
        {
          staticClass: "spinner-border text-primary",
          staticStyle: { width: "3rem", height: "3rem" },
          attrs: { role: "status" }
        },
        [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Attendance/List.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Attendance/List.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_41925689___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=41925689& */ "./resources/js/components/Attendance/List.vue?vue&type=template&id=41925689&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/Attendance/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_41925689___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_41925689___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Attendance/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Attendance/List.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Attendance/List.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Attendance/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Attendance/List.vue?vue&type=template&id=41925689&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Attendance/List.vue?vue&type=template&id=41925689& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_41925689___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=41925689& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Attendance/List.vue?vue&type=template&id=41925689&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_41925689___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_41925689___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Spinner/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Spinner/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_8dc7d23e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=8dc7d23e& */ "./resources/js/components/Spinner/Index.vue?vue&type=template&id=8dc7d23e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Spinner/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_8dc7d23e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_8dc7d23e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Spinner/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Spinner/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Spinner/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Spinner/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Spinner/Index.vue?vue&type=template&id=8dc7d23e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Spinner/Index.vue?vue&type=template&id=8dc7d23e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8dc7d23e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=8dc7d23e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Spinner/Index.vue?vue&type=template&id=8dc7d23e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8dc7d23e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8dc7d23e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixin/Attendance/index.js":
/*!************************************************!*\
  !*** ./resources/js/mixin/Attendance/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getWorkingTime: function getWorkingTime(attendance, break_times) {
      var times = []; // 勤務時間計算

      var to = this.$moment(attendance.start_date + ' ' + attendance.start_time, 'YYYY-MM-DD HH:mm:ss', true);
      var from = this.$moment(attendance.end_date + ' ' + attendance.end_time, 'YYYY-MM-DD HH:mm:ss', true);

      if (false == to.isValid() && false == from.isValid()) {
        return times;
      }

      if (0 == break_times.length) {
        // 休憩時間がない場合
        if (to.isValid() && from.isValid()) {
          times.push(this.diff(to, from));
        }
      } else {
        // 休憩時間がある場合
        times = this.existsBreakTime(attendance, break_times);
      }

      return times;
    },
    existsBreakTime: function existsBreakTime(attendance, break_times) {
      // 休憩時間がある場合の計算
      var times = [];

      for (var i = 0; i <= break_times.length; i++) {
        if (0 == i) {
          // 最初のループbreak_time
          var to = this.$moment(attendance.start_date + ' ' + attendance.start_time, 'YYYY-MM-DD HH:mm:ss', true);
          var from = this.$moment(break_times[i].start_date + ' ' + break_times[i].start_time, 'YYYY-MM-DD HH:mm:ss', true);

          if (to.isValid() && from.isValid()) {
            times.push(this.diff(to, from));
          }
        } else if (i == break_times.length) {
          // 最後のループ
          var _to = this.$moment(break_times[i - 1].end_date + ' ' + break_times[i - 1].end_time, 'YYYY-MM-DD HH:mm:ss', true);

          var _from = this.$moment(attendance.end_date + ' ' + attendance.end_time, 'YYYY-MM-DD HH:mm:ss', true);

          if (_to.isValid() && _from.isValid()) {
            times.push(this.diff(_to, _from));
          }
        } else {
          var _to2 = this.$moment(break_times[i - 1].end_date + ' ' + break_times[i - 1].end_time, 'YYYY-MM-DD HH:mm:ss', true);

          var _from2 = this.$moment(break_times[i].start_date + ' ' + break_times[i].start_time, 'YYYY-MM-DD HH:mm:ss', true);

          if (_to2.isValid() && _from2.isValid()) {
            times.push(this.diff(_to2, _from2));
          }
        }
      }

      return times;
    },
    diff: function diff(to, from) {
      var minutes = from.diff(to, 'minutes');
      ;
      return minutes;
    },
    format: function format(minutes_array) {
      if (0 == minutes_array.length) {
        // timesがないときは計算できないので00:00を返す
        return '00:00';
      } else {
        // 分の合計
        var minutes_sum = minutes_array.reduce(function (sum, v) {
          return sum + v;
        }, 0);
        var hours = Math.floor(minutes_sum / 60);
        var minutes = Math.floor(minutes_sum % 60);
        return hours + ':' + ('00' + minutes).slice(-2);
      }
    },
    getBreakTimes: function getBreakTimes(break_times) {
      var _this = this;

      var times = break_times.map(function (break_time, index, array) {
        var to = _this.$moment(break_time.start_date + ' ' + break_time.start_time, 'YYYY-MM-DD HH:mm:ss', true);

        var from = _this.$moment(break_time.end_date + ' ' + break_time.end_time, 'YYYY-MM-DD HH:mm:ss', true);

        if (to.isValid() && from.isValid()) {
          return _this.diff(to, from);
        }

        return 0;
      });
      return times;
    }
  }
});

/***/ })

}]);