(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/jscharf/career-portal/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0PS2":
    /*!**************************************************!*\
      !*** ./src/app/main-page/main-page.component.ts ***!
      \**************************************************/

    /*! exports provided: MainPageComponent */

    /***/
    function PS2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
        return MainPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../job-list/job-list.component */
      "UtLR");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      function MainPageComponent_novo_loading_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "novo-loading");
        }
      }

      function MainPageComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "ERROR_HAS_OCCURED"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          display: a0
        };
      };

      var MainPageComponent = /*#__PURE__*/function () {
        function MainPageComponent() {
          _classCallCheck(this, MainPageComponent);

          this.filterCount = 1;
          this.listFilter = {};
          this.displaySidebar = false;
          this.loading = true;
          this.error = false;
          this.sidebarCss = {};
        }

        _createClass(MainPageComponent, [{
          key: "onSidebarFilter",
          value: function onSidebarFilter(filter) {
            this.listFilter = filter;
            this.filterCount++;
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar(value) {
            this.displaySidebar = value;

            if (value) {
              this.sidebarCss = {
                position: 'absolute',
                width: '60%',
                'max-width': 'unset'
              };
            } else {
              this.sidebarCss = {};
            }
          }
        }, {
          key: "handleListLoad",
          value: function handleListLoad(loading) {
            this.loading = loading;
          }
        }, {
          key: "handleError",
          value: function handleError(showError) {
            this.error = showError;
          }
        }]);

        return MainPageComponent;
      }();

      MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
        return new (t || MainPageComponent)();
      };

      MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainPageComponent,
        selectors: [["app-main-page"]],
        decls: 6,
        vars: 10,
        consts: [[4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "frame", 3, "ngStyle"], [3, "display", "ngStyle", "newFilter", "toggleSidebar"], [1, "list"], [3, "filterCount", "filter", "sidebarVisible", "displaySidebar", "showLoading", "showError"], [1, "error-state"], [1, "bhi-caution"]],
        template: function MainPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainPageComponent_novo_loading_0_Template, 1, 0, "novo-loading", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_1_Template, 5, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidebar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newFilter", function MainPageComponent_Template_app_sidebar_newFilter_3_listener($event) {
              return ctx.onSidebarFilter($event);
            })("toggleSidebar", function MainPageComponent_Template_app_sidebar_toggleSidebar_3_listener($event) {
              return ctx.toggleSidebar($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-job-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("displaySidebar", function MainPageComponent_Template_app_job_list_displaySidebar_5_listener($event) {
              return ctx.toggleSidebar($event);
            })("showLoading", function MainPageComponent_Template_app_job_list_showLoading_5_listener($event) {
              return ctx.handleListLoad($event);
            })("showError", function MainPageComponent_Template_app_job_list_showError_5_listener($event) {
              return ctx.handleError($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.loading || ctx.error ? "none" : "flex"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.displaySidebar)("ngStyle", ctx.sidebarCss);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterCount", ctx.filterCount)("filter", ctx.listFilter)("sidebarVisible", ctx.displaySidebar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__["JobListComponent"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoLoadingElement"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: [".frame[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.frame[_ngcontent-%COMP%]   app-sidebar[_ngcontent-%COMP%] {\n  width: 30%;\n  flex-grow: 0;\n  height: calc(100vh - 55px);\n  max-width: 300px;\n  min-width: 250px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 7px 0px;\n}\n.frame[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  width: 80%;\n  flex-grow: 1000;\n  overflow-y: auto;\n  height: calc(100vh - 55px);\n}\n@media only screen and (min-width: 768px) {\n  .frame[_ngcontent-%COMP%]   app-sidebar[_ngcontent-%COMP%] {\n    position: unset !important;\n    width: 30% !important;\n    max-width: 300px !important;\n    box-shadow: unset;\n  }\n}\ndiv.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: absolute;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\ndiv.error-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 6em;\n  margin-bottom: 0.3em;\n}\ndiv.error-state[_ngcontent-%COMP%]   i.bhi-caution[_ngcontent-%COMP%] {\n  color: #DA4453;\n}\ndiv.error-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUdFO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQkFBQTtFQURKO0FBQ0Y7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBRkY7QUFHRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQURKO0FBRUk7RUFDRSxjQUFBO0FBQU47QUFHRTtFQUNFLGdCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZnJhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIGFwcC1zaWRlYmFyIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA2cHggN3B4IDBweDtcbiAgfVxuICAubGlzdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbGV4LWdyb3c6IDEwMDA7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBhcHAtc2lkZWJhciB7XG4gICAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICAgIH1cbiAgfVxuXG59XG5kaXYuZXJyb3Itc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBpIHtcbiAgICBmb250LXNpemU6IDZlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuM2VtO1xuICAgICYuYmhpLWNhdXRpb24ge1xuICAgICAgY29sb3I6ICNEQTQ0NTM7XG4gICAgfVxuICB9XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-page',
            templateUrl: './main-page.component.html',
            styleUrls: ['./main-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!**********************!*\
      !*** path (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2tb1":
    /*!**************************************************!*\
      !*** ./src/app/impressum/impressum.component.ts ***!
      \**************************************************/

    /*! exports provided: ImpressumComponent */

    /***/
    function tb1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function () {
        return ImpressumComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");

      function ImpressumComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ImpressumComponent_novo_loading_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "novo-loading");
        }
      }

      var ImpressumComponent = /*#__PURE__*/function () {
        function ImpressumComponent(http, domSanitize) {
          _classCallCheck(this, ImpressumComponent);

          this.http = http;
          this.domSanitize = domSanitize;
          this.loading = true;
        }

        _createClass(ImpressumComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.http.get('./static/impressum.html', {
              responseType: 'text'
            }).subscribe(this.handlePolicyOnSuccess.bind(this));
          }
        }, {
          key: "handlePolicyOnSuccess",
          value: function handlePolicyOnSuccess(data) {
            this.data = this.domSanitize.bypassSecurityTrustHtml(data);
            this.loading = false;
          }
        }]);

        return ImpressumComponent;
      }();

      ImpressumComponent.ɵfac = function ImpressumComponent_Factory(t) {
        return new (t || ImpressumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      ImpressumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImpressumComponent,
        selectors: [["app-impressum"]],
        decls: 2,
        vars: 2,
        consts: [[3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"]],
        template: function ImpressumComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImpressumComponent_div_0_Template, 1, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImpressumComponent_novo_loading_1_Template, 1, 0, "novo-loading", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoLoadingElement"]],
        styles: ["novo-loading[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 13px;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wcmVzc3VtL2ltcHJlc3N1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbXByZXNzdW0vaW1wcmVzc3VtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibm92by1sb2FkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImpressumComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-impressum',
            templateUrl: './impressum.component.html',
            styleUrls: ['./impressum.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/search/search.service */
      "AKuI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _sidebar_filter_sidebar_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidebar-filter/sidebar-filter.component */
      "ZkAk");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      function SidebarComponent_novo_loading_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "novo-loading");
        }
      }

      function SidebarComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sidebar-filter", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkboxFilter", function SidebarComponent_ng_container_5_Template_app_sidebar_filter_checkboxFilter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.updateFilter("publishedCategory", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-sidebar-filter", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkboxFilter", function SidebarComponent_ng_container_5_Template_app_sidebar_filter_checkboxFilter_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.updateFilter("address(city)", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "CATEGORY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", ctx_r1.filter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "CITY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", ctx_r1.filter);
        }
      }

      function SidebarComponent_ng_container_6_item_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_ng_container_6_item_6_Template_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var language_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.setPreferredLanguage(language_r8.localeCode);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r8.name, " ");
        }
      }

      function SidebarComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "novo-dropdown", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_ng_container_6_item_6_Template, 2, 1, "item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "PREFERRED_LANGUAGE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.availableLocales);
        }
      }

      function SidebarComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_a_7_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.viewPrivacyPolicy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PRIVACY_POLICY"));
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(searchService, router) {
          _classCallCheck(this, SidebarComponent);

          var _a, _b, _c;

          this.searchService = searchService;
          this.router = router;
          this.newFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.display = false;
          this.controls = [];
          this.keyword = '';
          this.loading = false;
          this.filter = {};
          this.showPrivacyPolicy = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.privacyConsent.sidebarLink;
          this.showImpressum = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.privacyConsent.sidebarLink;
          this.languageDropdownEnabled = ((_a = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.languageDropdownOptions) === null || _a === void 0 ? void 0 : _a.enabled) && !_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].isServer;
          this.availableLocales = ((_c = (_b = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings) === null || _b === void 0 ? void 0 : _b.languageDropdownOptions) === null || _c === void 0 ? void 0 : _c.choices) || [];
        }

        _createClass(SidebarComponent, [{
          key: "searchOnDelay",
          value: function searchOnDelay() {
            var _this = this;

            var keywordSearchFields = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.service.keywordSearchFields;

            if (this.timeout) {
              clearTimeout(this.timeout);
            }

            this.timeout = setTimeout(function () {
              var searchString = '';

              if (_this.keyword.trim()) {
                keywordSearchFields.forEach(function (field, index) {
                  if (index > 0) {
                    searchString += ' OR ';
                  }

                  searchString += "".concat(field, "{?^^equals}").concat(_this.keyword.trim() ? _this.keyword.trim() + '*' : '');
                });
              }

              delete _this.filter['ids'];

              if (searchString) {
                _this.filter['keyword'] = searchString;
              } else {
                delete _this.filter['keyword'];
              }

              _this.searchService.getCurrentJobIds(_this.filter, []).subscribe(_this.handleJobIdsOnSuccess.bind(_this));
            }, 250);
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(field, httpFormatedFilter) {
            delete this.filter['keyword'];
            this.filter[field] = httpFormatedFilter;
            var filter = {};
            Object.assign(filter, this.filter);
            this.filter = filter; // triggering angular change detection

            this.newFilter.emit(this.filter);
          }
        }, {
          key: "hideSidebar",
          value: function hideSidebar() {
            this.toggleSidebar.emit(false);
          }
        }, {
          key: "viewPrivacyPolicy",
          value: function viewPrivacyPolicy() {
            var url = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.privacyConsent.privacyPolicyUrl;

            if (url === '/privacy') {
              this.router.navigate([url]);
            } else {
              window.open(url);
            }
          }
        }, {
          key: "viewImpressum",
          value: function viewImpressum() {
            var url = '/impressum';
            this.router.navigate([url]);
          }
        }, {
          key: "setPreferredLanguage",
          value: function setPreferredLanguage(language) {
            localStorage.setItem('preferredLanguage', language);
            location.reload();
          }
        }, {
          key: "handleJobIdsOnSuccess",
          value: function handleJobIdsOnSuccess(res) {
            var resultIds = res.data.map(function (result) {
              return "id{?^^equals}".concat(result.id);
            });

            if (resultIds.length === 0) {
              resultIds.push("id{?^^equals}".concat(0));
            }

            this.updateFilter('ids', resultIds);
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        hostVars: 2,
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.display);
          }
        },
        inputs: {
          display: "display"
        },
        outputs: {
          newFilter: "newFilter",
          toggleSidebar: "toggleSidebar"
        },
        decls: 14,
        vars: 5,
        consts: [[1, "header"], [1, "close-filter-container"], ["theme", "icon", "icon", "times", 3, "click"], ["placeholder", "Keyword Search", "alwaysOpen", "true", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["class", "privacy-policy-link", 3, "click", 4, "ngIf"], [1, "privacy-policy-link", 3, "click"], [1, "credits"], ["target", "_blank", "href", "http://www.wematch.com/"], ["src", "assets/wematch-logo.svg", 1, "bullhorn"], [1, "filters"], ["field", "publishedCategory(id,name)", "data-automation-id", "category", 3, "title", "filter", "checkboxFilter"], ["field", "address(city)", "data-automation-id", "city", 3, "title", "filter", "checkboxFilter"], ["side", "left", "side", "above-below", 1, "preferredLanguageDropdown"], ["type", "button", "theme", "dialogue", "icon", "collapse", "inverse", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_2_listener() {
              return ctx.hideSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "novo-search", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_Template_novo_search_ngModelChange_3_listener($event) {
              return ctx.keyword = $event;
            })("ngModelChange", function SidebarComponent_Template_novo_search_ngModelChange_3_listener() {
              return ctx.searchOnDelay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_novo_loading_4_Template, 1, 0, "novo-loading", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_ng_container_5_Template, 6, 8, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_ng_container_6_Template, 7, 4, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_a_7_Template, 3, 3, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_9_listener() {
              return ctx.viewImpressum();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Impressum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageDropdownEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPrivacyPolicy);
          }
        },
        directives: [novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoButtonElement"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoSearchBoxElement"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoLoadingElement"], _sidebar_filter_sidebar_filter_component__WEBPACK_IMPORTED_MODULE_7__["SidebarFilterComponent"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoDropdownElement"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoDropdownListElement"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoItemElement"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["[_nghost-%COMP%] {\n  background-color: #f4f4f4;\n}\n[_nghost-%COMP%]::-webkit-scrollbar {\n  background-color: #fff;\n  height: 4px;\n  width: 4px;\n}\n[_nghost-%COMP%]::-webkit-scrollbar-track {\n  background-color: #fff;\n}\n[_nghost-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #babac0;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   novo-form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]    > section.credits[_ngcontent-%COMP%] {\n  padding: 27px 0 0 20px;\n}\n[_nghost-%COMP%]    > section.credits[_ngcontent-%COMP%]   span.powered-by[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 600;\n  color: #202945;\n}\n[_nghost-%COMP%]    > section.credits[_ngcontent-%COMP%]   .bullhorn[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  bottom: 20px;\n  margin: 0;\n}\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    position: absolute;\n    left: -80%;\n    transition: all 0.2s ease-in-out;\n  }\n  .active[_nghost-%COMP%] {\n    position: initial;\n    left: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .close-filter-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    color: #bb5566;\n  }\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #d9dadc;\n  }\n}\n[_nghost-%COMP%]   .close-filter-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  display: flex;\n}\n[_nghost-%COMP%]   a.privacy-policy-link[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n}\n.preferredLanguageDropdown[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUVKO0FBQUU7RUFDRSxzQkFBQTtBQUVKO0FBQUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFFO0VBQ0Usc0JBQUE7QUFFSjtBQUFJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQ0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNOO0FBRUU7RUFsQ0Y7SUFtQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7RUFDRjtFQUFFO0lBQ0UsaUJBQUE7SUFDQSxPQUFBO0VBRUo7QUFDRjtBQUFFO0VBRUk7SUFDRSxhQUFBO0VBQ047RUFDSTtJQUNFLGNBQUE7RUFDTjtFQUFNO0lBQ0UsY0FBQTtFQUVSO0FBQ0Y7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB3aWR0aDogNHB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBub3ZvLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICA+IHNlY3Rpb24uY3JlZGl0cyB7XG4gICAgcGFkZGluZzogMjdweCAwIDAgMjBweDtcblxuICAgIHNwYW4ucG93ZXJlZC1ieSB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzIwMjk0NTtcbiAgICB9XG5cbiAgICAuYnVsbGhvcm4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTgwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIC5jbG9zZS1maWx0ZXItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgID4gaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNiYjU1NjY7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBjb2xvcjogI2Q5ZGFkYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY2xvc2UtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgYS5wcml2YWN5LXBvbGljeS1saW5rIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxufVxuLnByZWZlcnJlZExhbmd1YWdlRHJvcGRvd24ge1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, {
          newFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "6SG/":
    /*!*********************************************************!*\
      !*** ./src/app/services/analytics/analytics.service.ts ***!
      \*********************************************************/

    /*! exports provided: AnalyticsService */

    /***/
    function SG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalyticsService", function () {
        return AnalyticsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../settings/settings.service */
      "LjSU");

      var AnalyticsService = /*#__PURE__*/function () {
        function AnalyticsService() {
          _classCallCheck(this, AnalyticsService);

          if (_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.integrations.googleAnalytics) {
            this.trackingId = _settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.integrations.googleAnalytics.trackingId;
          }
        }

        _createClass(AnalyticsService, [{
          key: "trackEvent",
          value: function trackEvent(action) {
            if (this.trackingId && !_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].isServer) {
              window.ga('send', {
                hitType: 'event',
                eventCategory: 'Career Portal',
                eventAction: action,
                eventLabel: action
              });
            }
          }
        }]);

        return AnalyticsService;
      }();

      AnalyticsService.ɵfac = function AnalyticsService_Factory(t) {
        return new (t || AnalyticsService)();
      };

      AnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AnalyticsService,
        factory: AnalyticsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "889k":
    /*!*************************************************!*\
      !*** ./src/app/services/apply/apply.service.ts ***!
      \*************************************************/

    /*! exports provided: ApplyService */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyService", function () {
        return ApplyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../settings/settings.service */
      "LjSU");

      var ApplyService = /*#__PURE__*/function () {
        function ApplyService(http, settings) {
          _classCallCheck(this, ApplyService);

          this.http = http;
          this.settings = settings;
        }

        _createClass(ApplyService, [{
          key: "baseUrl",
          get: function get() {
            var service = _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.service;
            var port = service.port ? service.port : 443;
            var scheme = "http".concat(port === 443 ? 's' : '');
            return "".concat(scheme, "://public-rest").concat(service.swimlane, ".bullhornstaffing.com:").concat(port, "/rest-services/").concat(service.corpToken, "/apply");
          }
        }, {
          key: "apply",
          value: function apply(id, params, formData) {
            var applyParams = this.assembleParams(params);
            return this.http.post("".concat(this.baseUrl, "/").concat(id, "/raw?").concat(applyParams), formData);
          }
        }, {
          key: "assembleParams",
          value: function assembleParams(data) {
            var params = [];
            params.push("externalID=Resume");
            params.push("type=Resume");

            for (var key in data) {
              if (!data.hasOwnProperty(key)) {
                continue;
              }

              if (!data[key]) {
                continue;
              }

              var value = data[key];
              params.push("".concat(key, "=").concat(value));
            }

            return params.join('&');
          }
        }]);

        return ApplyService;
      }();

      ApplyService.ɵfac = function ApplyService_Factory(t) {
        return new (t || ApplyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]));
      };

      ApplyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApplyService,
        factory: ApplyService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AKuI":
    /*!***************************************************!*\
      !*** ./src/app/services/search/search.service.ts ***!
      \***************************************************/

    /*! exports provided: SearchService */

    /***/
    function AKuI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchService", function () {
        return SearchService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../settings/settings.service */
      "LjSU");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var SearchService = /*#__PURE__*/function () {
        function SearchService(http, settings) {
          _classCallCheck(this, SearchService);

          this.http = http;
          this.settings = settings;
        }

        _createClass(SearchService, [{
          key: "baseUrl",
          get: function get() {
            var _a;

            var service = (_a = _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings) === null || _a === void 0 ? void 0 : _a.service;
            var port = (service === null || service === void 0 ? void 0 : service.port) ? service.port : 443;
            var scheme = "http".concat(port === 443 ? 's' : '');
            return "".concat(scheme, "://public-rest").concat(service === null || service === void 0 ? void 0 : service.swimlane, ".bullhornstaffing.com:").concat(port, "/rest-services/").concat(service === null || service === void 0 ? void 0 : service.corpToken);
          }
        }, {
          key: "getjobs",
          value: function getjobs(filter) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
            var queryArray = [];
            params.query = "(isOpen:1) AND (isDeleted:0)".concat(this.formatAdditionalCriteria(true)).concat(this.formatFilter(filter, true));
            params.fields = _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.service.fields;
            params.count = count;
            params.sort = _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.additionalJobCriteria.sort;
            params.showTotalMatched = true;

            for (var key in params) {
              queryArray.push("".concat(key, "=").concat(params[key]));
            }

            var queryString = queryArray.join('&');
            return this.http.get("".concat(this.baseUrl, "/search/JobOrder?").concat(queryString));
          }
        }, {
          key: "openJob",
          value: function openJob(id) {
            var _a, _b;

            return this.http.get("".concat(this.baseUrl, "/query/JobBoardPost?where=(id=").concat(id, ")&fields=").concat((_b = (_a = _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings) === null || _a === void 0 ? void 0 : _a.service) === null || _b === void 0 ? void 0 : _b.fields));
          }
        }, {
          key: "getCurrentJobIds",
          value: function getCurrentJobIds(filter, ignoreFields) {
            var queryArray = [];
            var params = {};
            params.query = "(isOpen:1) AND (isDeleted:0)".concat(this.formatAdditionalCriteria(true)).concat(this.formatFilter(filter, true, ignoreFields));
            params.count = "500";
            params.fields = 'id';
            params.sort = 'id';

            for (var key in params) {
              queryArray.push("".concat(key, "=").concat(params[key]));
            }

            var queryString = queryArray.join('&');
            return this.http.get("".concat(this.baseUrl, "/search/JobOrder?").concat(queryString));
          }
        }, {
          key: "getAvailableFilterOptions",
          value: function getAvailableFilterOptions(ids, field) {
            var params = {};
            var queryArray = [];

            if (ids.length > 0) {
              params.where = "id IN (".concat(ids.toString(), ")");
              params.count = "500";
              params.fields = "".concat(field, ",count(id)");
              params.groupBy = field;

              switch (field) {
                case 'publishedCategory(id,name)':
                  params.orderBy = 'publishedCategory.name';
                  break;

                case 'address(state)':
                  params.orderBy = 'address.state';
                  break;

                case 'address(city)':
                  params.orderBy = 'address.city';
                  break;

                default:
                  params.orderBy = '-count.id';
                  break;
              }

              for (var key in params) {
                queryArray.push("".concat(key, "=").concat(params[key]));
              }

              var queryString = queryArray.join('&');
              return this.http.get("".concat(this.baseUrl, "/query/JobBoardPost?").concat(queryString)); // tslint:disable-line
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
                count: 0,
                start: 0,
                data: []
              });
            }
          }
        }, {
          key: "formatAdditionalCriteria",
          value: function formatAdditionalCriteria(isSearch) {
            var field = _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.additionalJobCriteria.field;
            var values = _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.additionalJobCriteria.values;
            var query = '';
            var delimiter = isSearch ? '"' : '\'';
            var equals = isSearch ? ':' : '=';

            if (field && values.length > 0 && field !== '[ FILTER FIELD HERE ]' && values[0] !== '[ FILTER VALUE HERE ]') {
              for (var i = 0; i < values.length; i++) {
                if (i > 0) {
                  query += " OR ";
                } else {
                  query += ' AND (';
                }

                query += "".concat(field).concat(equals).concat(delimiter).concat(values[i]).concat(delimiter);
              }

              query += ')';
            }

            return query;
          }
        }, {
          key: "formatFilter",
          value: function formatFilter(filter, isSearch) {
            var ignoreFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var additionalFilter = '';

            for (var key in filter) {
              if (!ignoreFields.includes(key)) {
                var filterValue = filter[key];

                if (typeof filterValue === 'string') {
                  additionalFilter += " AND (".concat(filterValue, ")");
                } else if (filterValue.length) {
                  additionalFilter += " AND (".concat(filterValue.join(' OR '), ")");
                }
              }
            }

            return additionalFilter.replace(/{\?\^\^equals}/g, isSearch ? ':' : '=').replace(/{\?\^\^delimiter}/g, isSearch ? '"' : '\'');
          }
        }]);

        return SearchService;
      }();

      SearchService.ɵfac = function SearchService_Factory(t) {
        return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]));
      };

      SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SearchService,
        factory: SearchService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Aylj":
    /*!*************************************************!*\
      !*** ./src/app/services/localization/loader.ts ***!
      \*************************************************/

    /*! exports provided: TranslationLoader */

    /***/
    function Aylj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationLoader", function () {
        return TranslationLoader;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var TranslationLoader = /*#__PURE__*/function () {
        function TranslationLoader(http, transferState) {
          _classCallCheck(this, TranslationLoader);

          this.http = http;
          this.transferState = transferState;
        }

        _createClass(TranslationLoader, [{
          key: "getTranslation",
          value: function getTranslation(locale) {
            // Split out the language code from the locale
            var languageCode = (locale.split('-')[0] || '').toLowerCase();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.getLanguageAndLocale(languageCode, locale));
          }
        }, {
          key: "translationFetcher",
          value: function translationFetcher(locale) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.http.get("i18n/".concat(locale, ".json")).toPromise();

                    case 2:
                      return _context.abrupt("return", _context.sent);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getLanguageAndLocale",
          value: function getLanguageAndLocale(language, locale) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var languageKey, fallbackKey, fallbackTranslations, translations;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      languageKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('transfer-translate-' + language);
                      fallbackKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('transfer-translate-' + locale);
                      fallbackTranslations = {};
                      translations = {};
                      _context2.prev = 4;
                      fallbackTranslations = this.transferState.get(fallbackKey, null);

                      if (fallbackTranslations) {
                        _context2.next = 10;
                        break;
                      }

                      _context2.next = 9;
                      return this.translationFetcher(language);

                    case 9:
                      fallbackTranslations = _context2.sent;

                    case 10:
                      _context2.next = 15;
                      break;

                    case 12:
                      _context2.prev = 12;
                      _context2.t0 = _context2["catch"](4);
                      fallbackTranslations = {};

                    case 15:
                      _context2.prev = 15;
                      translations = this.transferState.get(languageKey, null);

                      if (translations) {
                        _context2.next = 21;
                        break;
                      }

                      _context2.next = 20;
                      return this.translationFetcher(locale);

                    case 20:
                      translations = _context2.sent;

                    case 21:
                      _context2.next = 26;
                      break;

                    case 23:
                      _context2.prev = 23;
                      _context2.t1 = _context2["catch"](15);
                      translations = {};

                    case 26:
                      return _context2.abrupt("return", Object.assign(Object.assign({}, fallbackTranslations), translations));

                    case 27:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[4, 12], [15, 23]]);
            }));
          }
        }]);

        return TranslationLoader;
      }();

      TranslationLoader.ɵfac = function TranslationLoader_Factory(t) {
        return new (t || TranslationLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]));
      };

      TranslationLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TranslationLoader,
        factory: TranslationLoader.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslationLoader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        useHash: true
      };
      /***/
    },

    /***/
    "HJCg":
    /*!******************************************************!*\
      !*** ./src/app/job-details/job-details.component.ts ***!
      \******************************************************/

    /*! exports provided: JobDetailsComponent */

    /***/
    function HJCg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function () {
        return JobDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/search/search.service */
      "AKuI");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/analytics/analytics.service */
      "6SG/");
      /* harmony import */


      var _apply_modal_apply_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../apply-modal/apply-modal.component */
      "HVU5");
      /* harmony import */


      var _services_share_share_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share/share.service */
      "cwaR");
      /* harmony import */


      var _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../error-modal/error-modal.component */
      "fayc");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/server-response/server-response.service */
      "Y39l");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _structured_seo_structured_seo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../structured-seo/structured-seo.component */
      "bVzh");
      /* harmony import */


      var _components_info_chips_info_chips_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../components/info-chips/info-chips.component */
      "p6oO");

      function JobDetailsComponent_novo_loading_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "novo-loading");
        }
      }

      function JobDetailsComponent_app_structured_seo_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-structured-seo", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jobData", ctx_r1.job);
        }
      }

      function JobDetailsComponent_div_2_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.job.publishedCategory == null ? null : ctx_r3.job.publishedCategory.name, " ");
        }
      }

      function JobDetailsComponent_div_2_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.apply();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "APPLY_NOW"));
        }
      }

      function JobDetailsComponent_div_2_button_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ALREADY_APPLIED"));
        }
      }

      function JobDetailsComponent_div_2_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.emailLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobDetailsComponent_div_2_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.shareTwitter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobDetailsComponent_div_2_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.shareFacebook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobDetailsComponent_div_2_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.shareLinkedin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobDetailsComponent_div_2_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.toggleShareButtons();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "SHARE_POST"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "safari-scroll": a0
        };
      };

      function JobDetailsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.goToJobList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, JobDetailsComponent_div_2_span_9_Template, 2, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-info-chips", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JobDetailsComponent_div_2_button_14_Template, 3, 3, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, JobDetailsComponent_div_2_button_15_Template, 3, 3, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JobDetailsComponent_div_2_button_16_Template, 1, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JobDetailsComponent_div_2_button_17_Template, 1, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, JobDetailsComponent_div_2_button_18_Template, 1, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, JobDetailsComponent_div_2_button_19_Template, 1, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, JobDetailsComponent_div_2_button_20_Template, 3, 3, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailsComponent_div_2_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r2.isSafariAgent));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, "BACK"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.job.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.job.publishedCategory && ctx_r2.showCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("job", ctx_r2.job);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.job.publicDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.alreadyApplied);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.alreadyApplied);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showShareButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showShareButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showShareButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showShareButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showShareButtons);
        }
      }

      var JobDetailsComponent = /*#__PURE__*/function () {
        function JobDetailsComponent(service, shareService, route, router, analytics, modalService, viewContainerRef, titleService, meta, serverResponse, translate) {
          _classCallCheck(this, JobDetailsComponent);

          this.service = service;
          this.shareService = shareService;
          this.route = route;
          this.router = router;
          this.analytics = analytics;
          this.modalService = modalService;
          this.viewContainerRef = viewContainerRef;
          this.titleService = titleService;
          this.meta = meta;
          this.serverResponse = serverResponse;
          this.translate = translate;
          this.loading = true;
          this.showShareButtons = false;
          this.alreadyApplied = false;
          this.showCategory = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].settings.service.showCategory;
          this.isSafariAgent = false;
          this.APPLIED_JOBS_KEY = 'APPLIED_JOBS_KEY';
          this.modalService.parentViewContainer = this.viewContainerRef;
        }

        _createClass(JobDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].isServer) {
              this.isSafariAgent = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
            }

            this.loading = true;
            this.id = this.route.snapshot.paramMap.get('id');
            this.source = this.route.snapshot.queryParams.source;
            this.analytics.trackEvent("Open Job: ".concat(this.id));
            this.checkSessionStorage();
            this.setJob();
          }
        }, {
          key: "checkSessionStorage",
          value: function checkSessionStorage() {
            if (!_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].isServer) {
              var alreadyAppliedJobs = sessionStorage.getItem(this.APPLIED_JOBS_KEY);

              if (alreadyAppliedJobs) {
                var alreadyAppliedJobsArray = JSON.parse(alreadyAppliedJobs);
                this.alreadyApplied = alreadyAppliedJobsArray.indexOf(parseInt(this.id)) !== -1; // tslint:disable-line
              }
            }
          }
        }, {
          key: "getRelatedJobs",
          value: function getRelatedJobs() {
            var _this2 = this;

            if (this.job && this.job.publishedCategory) {
              this.service.getjobs({
                'publishedCategory.id': [this.job.publishedCategory.id]
              }, {}, _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].settings.service.batchSize).subscribe(function (res) {
                _this2.relatedJobs = res.data;
              });
            }
          }
        }, {
          key: "apply",
          value: function apply() {
            this.analytics.trackEvent("Open Apply Form ".concat(this.job.id));
            this.modalService.open(_apply_modal_apply_modal_component__WEBPACK_IMPORTED_MODULE_6__["ApplyModalComponent"], {
              job: this.job,
              source: this.source,
              viewContainer: this.viewContainerRef
            }).onClosed.then(this.checkSessionStorage.bind(this));
          }
        }, {
          key: "toggleShareButtons",
          value: function toggleShareButtons() {
            this.showShareButtons = !this.showShareButtons;
          }
        }, {
          key: "shareFacebook",
          value: function shareFacebook() {
            this.shareService.facebook(this.job);
            this.analytics.trackEvent("Shared Job: ".concat(this.id, " via Facebook"));
          }
        }, {
          key: "shareTwitter",
          value: function shareTwitter() {
            this.shareService.twitter(this.job);
            this.analytics.trackEvent("Shared Job: ".concat(this.id, " via Twitter"));
          }
        }, {
          key: "shareLinkedin",
          value: function shareLinkedin() {
            this.shareService.linkedin(this.job);
            this.analytics.trackEvent("Shared Job: ".concat(this.id, " via LinkedIn"));
          }
        }, {
          key: "emailLink",
          value: function emailLink() {
            window.open(this.shareService.emailLink(this.job));
            this.analytics.trackEvent("Shared Job: ".concat(this.id, " via Email"));
          }
        }, {
          key: "print",
          value: function print() {
            window.print();
          }
        }, {
          key: "goToJobList",
          value: function goToJobList() {
            this.router.navigate(['/']);
          }
        }, {
          key: "setJob",
          value: function setJob() {
            var res = this.route.snapshot.data.message;

            if (res.data && res.data.length > 0) {
              this.job = res.data[0];
              this.titleService.setTitle(this.job.title);
              this.meta.updateTag({
                name: 'og:title',
                content: this.job.title
              });
              this.meta.updateTag({
                name: 'titter:title',
                content: this.job.title
              });
              this.meta.updateTag({
                name: 'og:image',
                content: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].settings.companyLogoPath
              });
              this.meta.updateTag({
                name: 'og:url',
                content: "".concat(_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].urlRoot).concat(this.router.url)
              });
              this.meta.updateTag({
                name: 'og:description',
                content: this.job.publicDescription
              });
              this.meta.updateTag({
                name: 'twitter:description',
                content: this.job.publicDescription
              });
              this.meta.updateTag({
                name: 'description',
                content: this.job.publicDescription
              });
              this.loading = false;
            } else {
              this.serverResponse.setNotFound();
              this.modalService.open(_error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_8__["ErrorModalComponent"], {
                title: this.translate.instant('ERROR'),
                message: this.translate.instant('MISSING_JOB_ERROR')
              }).onClosed.then(this.goToJobList.bind(this));
            }
          }
        }]);

        return JobDetailsComponent;
      }();

      JobDetailsComponent.ɵfac = function JobDetailsComponent_Factory(t) {
        return new (t || JobDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_share_service__WEBPACK_IMPORTED_MODULE_7__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_3__["NovoModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_10__["ServerResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]));
      };

      JobDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JobDetailsComponent,
        selectors: [["app-job-details"]],
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"], [3, "jobData", 4, "ngIf"], ["class", "background", 4, "ngIf"], [3, "jobData"], [1, "background"], [1, "job-container", 3, "ngClass"], ["theme", "dialogue", "icon", "previous", "side", "left", "data-automation-id", "back-button", 3, "click"], [1, "job-header"], [1, "job-title"], ["class", "category", 4, "ngIf"], [1, "job-info-container"], [3, "job"], [1, "job-description-text", 3, "innerHTML"], [1, "share"], ["theme", "primary", "data-automation-id", "apply-button", 3, "click", 4, "ngIf"], ["theme", "primary", "disabled", "true", "data-automation-id", "applied-button", 4, "ngIf"], ["theme", "icon", "icon", "email", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "twitter", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "facebook", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "linkedin", 3, "click", 4, "ngIf"], ["theme", "dialogue", "icon", "share", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "print", 3, "click"], [1, "category"], ["theme", "primary", "data-automation-id", "apply-button", 3, "click"], ["theme", "primary", "disabled", "true", "data-automation-id", "applied-button"], ["theme", "icon", "icon", "email", 3, "click"], ["theme", "icon", "icon", "twitter", 3, "click"], ["theme", "icon", "icon", "facebook", 3, "click"], ["theme", "icon", "icon", "linkedin", 3, "click"], ["theme", "dialogue", "icon", "share", 3, "click"]],
        template: function JobDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobDetailsComponent_novo_loading_0_Template, 1, 0, "novo-loading", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JobDetailsComponent_app_structured_seo_1_Template, 1, 1, "app-structured-seo", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JobDetailsComponent_div_2_Template, 22, 17, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], novo_elements__WEBPACK_IMPORTED_MODULE_3__["NovoLoadingElement"], _structured_seo_structured_seo_component__WEBPACK_IMPORTED_MODULE_13__["StructuredSeoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], novo_elements__WEBPACK_IMPORTED_MODULE_3__["NovoButtonElement"], _components_info_chips_info_chips_component__WEBPACK_IMPORTED_MODULE_14__["InfoChipsComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: [".background[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  background-color: #F4F4F4;\n  max-height: calc(100vh - 55px);\n  height: calc(100vh - 55px);\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%] {\n  margin: 0% 10%;\n  padding: 5%;\n  background-color: #FFFFFF;\n}\n.background[_ngcontent-%COMP%]   .job-container.safari-scroll[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]    > button[theme=dialogue][_ngcontent-%COMP%] {\n  margin: -10px -15px 20px -15px;\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]   .job-description-text[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   div.job-info-container[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 600;\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.background[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: inline-block;\n  font-size: 1.3em;\n  word-wrap: break-word;\n  overflow: hidden;\n  color: #4a89dc;\n  padding-top: 15px;\n}\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%]   .background[_ngcontent-%COMP%]    > .job-container[_ngcontent-%COMP%] {\n    margin: 0%;\n  }\n}\nnovo-loading[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: absolute;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iLWRldGFpbHMvam9iLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBR047QUFESTtFQUNFLDhCQUFBO0FBR047QUFESTtFQUNFLHNCQUFBO0FBR047QUFBTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRVI7QUFDTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFOO0FBQ007RUFDRSxrQkFBQTtBQUNSO0FBRUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQU47QUFLQTtFQUVJO0lBQ0UsVUFBQTtFQUhKO0FBQ0Y7QUFRQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFORiIsImZpbGUiOiJzcmMvYXBwL2pvYi1kZXRhaWxzL2pvYi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcbiAgLmpvYi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCUgMTAlO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgJi5zYWZhcmktc2Nyb2xsIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICB9XG4gICAgPmJ1dHRvblt0aGVtZT1cImRpYWxvZ3VlXCJdIHtcbiAgICAgIG1hcmdpbjogLTEwcHggLTE1cHggMjBweCAtMTVweDtcbiAgICB9XG4gICAgLmpvYi1kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuICAgIC5qb2ItaGVhZGVyIHtcbiAgICAgIGRpdi5qb2ItaW5mby1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICB9XG4gICAgICAuam9iLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5zaGFyZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2F0ZWdvcnkge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6ICM0YTg5ZGM7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdHtcbiAgICAuYmFja2dyb3VuZD4uam9iLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDAlO1xuICAgIH1cbiAgfVxuXG59XG5cbm5vdm8tbG9hZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-job-details',
            templateUrl: './job-details.component.html',
            styleUrls: ['./job-details.component.scss']
          }]
        }], function () {
          return [{
            type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
          }, {
            type: _services_share_share_service__WEBPACK_IMPORTED_MODULE_7__["ShareService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__["AnalyticsService"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_3__["NovoModalService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"]
          }, {
            type: _services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_10__["ServerResponseService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HVU5":
    /*!******************************************************!*\
      !*** ./src/app/apply-modal/apply-modal.component.ts ***!
      \******************************************************/

    /*! exports provided: ApplyModalComponent */

    /***/
    function HVU5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyModalComponent", function () {
        return ApplyModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/analytics/analytics.service */
      "6SG/");
      /* harmony import */


      var _services_apply_apply_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/apply/apply.service */
      "889k");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function ApplyModalComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.job.publishedCategory == null ? null : ctx_r0.job.publishedCategory.name);
        }
      }

      function ApplyModalComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ApplyModalComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ApplyModalComponent_section_12_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "novo-control", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var control_r8 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r4.form)("control", control_r8);
        }
      }

      function ApplyModalComponent_section_12_div_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "novo-control", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var control_r10 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r9.form)("control", control_r10);
        }
      }

      function ApplyModalComponent_section_12_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "novo-fieldset-header", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplyModalComponent_section_12_div_3_div_3_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "EEOC.EEOC_FORM_DESCRIPTION"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.eeocControls);
        }
      }

      function ApplyModalComponent_section_12_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "novo-control", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplyModalComponent_section_12_div_4_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.viewPrivacyPolicy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Datenschutzerkl\xE4rung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " einverstanden.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r6.form)("control", ctx_r6.consentControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "BY_CHECKING_THIS_BOX"), " ");
        }
      }

      function ApplyModalComponent_section_12_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ERROR_WHILE_APPLYING"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          ios: a0
        };
      };

      function ApplyModalComponent_section_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "novo-form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplyModalComponent_section_12_div_2_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplyModalComponent_section_12_div_3_Template, 4, 4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplyModalComponent_section_12_div_4_Template, 8, 5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplyModalComponent_section_12_span_5_Template, 3, 3, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r3.isIos));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r3.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.formControls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.eeocControls.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.consentCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hasError);
        }
      }

      var ApplyModalComponent = /*#__PURE__*/function () {
        function ApplyModalComponent(formUtils, params, modalRef, applyService, analytics, toaster, router, translate) {
          _classCallCheck(this, ApplyModalComponent);

          this.formUtils = formUtils;
          this.params = params;
          this.modalRef = modalRef;
          this.applyService = applyService;
          this.analytics = analytics;
          this.toaster = toaster;
          this.router = router;
          this.translate = translate;
          this.loading = true;
          this.hasError = false;
          this.formControls = [];
          this.eeocControls = [];
          this.applying = false;
          this.consentCheckbox = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.privacyConsent.consentCheckbox;
          this.showCategory = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.service.showCategory;
          this.isIos = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].isIos;
          this.APPLIED_JOBS_KEY = 'APPLIED_JOBS_KEY';
          this.toaster.parentViewContainer = this.params['viewContainer'];
        }

        _createClass(ApplyModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.job = this.params['job'];
            this.source = this.params['source'];
            this.setupForm();
          }
        }, {
          key: "setupForm",
          value: function setupForm() {
            this.firstName = new novo_elements__WEBPACK_IMPORTED_MODULE_1__["TextBoxControl"]({
              key: 'firstName',
              label: this.translate.instant('FIRST_NAME'),
              required: true,
              hidden: false,
              value: ''
            });
            this.lastName = new novo_elements__WEBPACK_IMPORTED_MODULE_1__["TextBoxControl"]({
              key: 'lastName',
              label: this.translate.instant('LAST_NAME'),
              required: true,
              hidden: false,
              value: ''
            });
            this.email = new novo_elements__WEBPACK_IMPORTED_MODULE_1__["TextBoxControl"]({
              key: 'email',
              label: this.translate.instant('EMAIL'),
              type: 'email',
              required: true,
              hidden: false,
              value: ''
            });
            this.phoneNumber = new novo_elements__WEBPACK_IMPORTED_MODULE_1__["TextBoxControl"]({
              key: 'phone',
              label: this.translate.instant('PHONE'),
              type: 'tel',
              required: false,
              hidden: false,
              value: ''
            });
            this.genderRaceEthnicity = [new novo_elements__WEBPACK_IMPORTED_MODULE_1__["SelectControl"]({
              key: 'gender',
              label: this.translate.instant('EEOC.GENDER_LABEL'),
              required: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.eeoc.genderRaceEthnicity,
              hidden: false,
              options: [{
                value: 'M',
                label: this.translate.instant('EEOC.GENDER_MALE')
              }, {
                value: 'F',
                label: this.translate.instant('EEOC.GENDER_FEMALE')
              }, {
                value: 'D',
                label: this.translate.instant('EEOC.GENDER_ND')
              }]
            }), new novo_elements__WEBPACK_IMPORTED_MODULE_1__["PickerControl"]({
              key: 'ethnicity',
              label: this.translate.instant('EEOC.RACE_ETHNICITY_LABEL'),
              required: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.eeoc.genderRaceEthnicity,
              hidden: false,
              multiple: true,
              placeholder: this.translate.instant('EEOC.SELECT_ALL'),
              config: {
                options: [{
                  value: 'HL',
                  label: this.translate.instant('EEOC.RACE_ETHNICITY_HL')
                }, {
                  value: 'WH',
                  label: this.translate.instant('EEOC.RACE_ETHNICITY_WH')
                }, {
                  value: 'BL',
                  label: this.translate.instant('EEOC.RACE_ETHNICITY_BL')
                }, {
                  value: 'AS',
                  label: this.translate.instant('EEOC.RACE_ETHNICITY_AS')
                }, {
                  value: 'NP',
                  label: this.translate.instant('EEOC.RACE_ETHNICITY_NP')
                }, {
                  value: 'IA',
                  label: this.translate.instant('EEOC.RACE_ETHNICITY_IA')
                }, {
                  value: 'DN',
                  label: this.translate.instant('EEOC.RACE_ETHNICITY_DN')
                }]
              }
            })];
            this.veteran = [new novo_elements__WEBPACK_IMPORTED_MODULE_1__["SelectControl"]({
              key: 'veteran',
              label: this.translate.instant('EEOC.VETERAN_LABEL'),
              description: this.translate.instant('EEOC.VETERAN_DESCRIPTION'),
              required: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.eeoc.veteran,
              hidden: false,
              options: [{
                value: 'P',
                label: this.translate.instant('EEOC.VETERAN_P')
              }, {
                value: 'V',
                label: this.translate.instant('EEOC.VETERAN_V')
              }, {
                value: 'N',
                label: this.translate.instant('EEOC.VETERAN_N')
              }, {
                value: 'D',
                label: this.translate.instant('EEOC.VETERAN_D')
              }]
            })];
            this.disability = [new novo_elements__WEBPACK_IMPORTED_MODULE_1__["SelectControl"]({
              key: 'disability',
              label: this.translate.instant('EEOC.DISABILITY_LABEL'),
              description: this.translate.instant('EEOC.DISABILITY_DESCRIPTION'),
              required: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.eeoc.disability,
              hidden: false,
              options: [{
                value: 'Y',
                label: this.translate.instant('EEOC.DISABILITY_Y')
              }, {
                value: 'N',
                label: this.translate.instant('EEOC.DISABILITY_N')
              }, {
                value: 'D',
                label: this.translate.instant('EEOC.DISABILITY_D')
              }]
            })];
            this.resume = new novo_elements__WEBPACK_IMPORTED_MODULE_1__["FileControl"]({
              key: 'resume',
              required: true,
              hidden: false,
              description: "".concat(this.translate.instant('ACCEPTED_RESUME'), " ").concat(_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.acceptedResumeTypes.toString())
            });
            this.formControls = [this.firstName, this.lastName, this.email, this.phoneNumber, this.resume];
            var eeoc = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.eeoc;

            for (var field in eeoc) {
              if (eeoc[field]) {
                var _this$eeocControls;

                (_this$eeocControls = this.eeocControls).push.apply(_this$eeocControls, _toConsumableArray(this[field]));
              }
            }

            this.consentControl = new novo_elements__WEBPACK_IMPORTED_MODULE_1__["CheckboxControl"]({
              key: 'consent',
              required: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.privacyConsent.consentCheckbox,
              hidden: false,
              interactions: [{
                event: 'change',
                script: function script(FAPI) {
                  if (!FAPI.getValue('consent')) {
                    FAPI.markAsInvalid('consent');
                  }
                }
              }]
            });
            this.form = this.formUtils.toFormGroup([].concat(_toConsumableArray(this.formControls), _toConsumableArray(this.eeocControls), [this.consentControl]));
            this.loading = false;
          }
        }, {
          key: "close",
          value: function close() {
            var applied = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (applied) {
              this.analytics.trackEvent("Success applying to job ".concat(this.job.id));
            } else {
              this.analytics.trackEvent("Close apply form without applying for job ".concat(this.job.id));
            }

            this.modalRef.close(undefined);
          }
        }, {
          key: "save",
          value: function save() {
            if (this.form.valid) {
              this.applying = true;
              this.analytics.trackEvent("Apply to Job: ".concat(this.job.id));
              var requestParams = {
                firstName: encodeURIComponent(this.form.value.firstName),
                lastName: encodeURIComponent(this.form.value.lastName),
                email: encodeURIComponent(this.form.value.email),
                phone: encodeURIComponent(this.form.value.phone || ''),
                format: this.form.value.resume[0].name.substring(this.form.value.resume[0].name.lastIndexOf('.') + 1)
              };

              if (this.form.value.gender) {
                requestParams.gender = encodeURIComponent(this.form.value.gender);
              }

              if (this.form.value.ethnicity) {
                requestParams.ethnicity = encodeURIComponent(this.form.value.ethnicity);
              }

              if (this.form.value.veteran) {
                requestParams.veteran = encodeURIComponent(this.form.value.veteran);
              }

              if (this.form.value.disability) {
                requestParams.disability = encodeURIComponent(this.form.value.disability);
              }

              if (this.source) {
                requestParams.source = this.source;
              }

              var formData = new FormData();
              formData.append('resume', this.form.value.resume[0].file);
              this.applyService.apply(this.job.id, requestParams, formData).subscribe(this.applyOnSuccess.bind(this), this.applyOnFailure.bind(this));
            }
          }
        }, {
          key: "viewPrivacyPolicy",
          value: function viewPrivacyPolicy() {
            var url = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.privacyConsent.privacyPolicyUrl;

            if (url === '/privacy') {
              this.router.navigate([url]);
            } else {
              window.open(url);
            }
          }
        }, {
          key: "applyOnSuccess",
          value: function applyOnSuccess(res) {
            var toastOptions = {
              theme: 'success',
              icon: 'check',
              title: this.translate.instant('THANK_YOU'),
              message: this.translate.instant('YOU_WILL_BE_CONTACTED'),
              position: 'growlTopRight',
              hideDelay: 3000
            };
            this.toaster.alert(toastOptions);
            var alreadyAppliedJobs = sessionStorage.getItem(this.APPLIED_JOBS_KEY);

            if (alreadyAppliedJobs) {
              var alreadyAppliedJobsArray = JSON.parse(alreadyAppliedJobs);
              alreadyAppliedJobsArray.push(this.job.id);
              sessionStorage.setItem(this.APPLIED_JOBS_KEY, JSON.stringify(alreadyAppliedJobsArray));
            } else {
              sessionStorage.setItem(this.APPLIED_JOBS_KEY, JSON.stringify([this.job.id]));
            }

            this.applying = false;
            this.close(true);
          }
        }, {
          key: "applyOnFailure",
          value: function applyOnFailure(res) {
            this.hasError = true;
            this.applying = false;
          }
        }]);

        return ApplyModalComponent;
      }();

      ApplyModalComponent.ɵfac = function ApplyModalComponent_Factory(t) {
        return new (t || ApplyModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_1__["FormUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apply_apply_service__WEBPACK_IMPORTED_MODULE_4__["ApplyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
      };

      ApplyModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ApplyModalComponent,
        selectors: [["app-apply-modal"]],
        decls: 19,
        vars: 16,
        consts: [["theme", "neutral", 1, "apply-modal-header", 3, "title"], ["icon", "times", 3, "click"], ["class", "job-details", 4, "ngIf"], [1, "job-details"], [4, "ngIf"], ["class", "separator", 4, "ngIf"], [1, "type"], [3, "ngClass", 4, "ngIf"], ["theme", "standard", "data-automation-id", "create-modal-cancel", 3, "click"], ["theme", "primary", "icon", "check", "data-automation-id", "apply-modal-save", 3, "disabled", "loading", "click"], [1, "separator"], [3, "ngClass"], ["layout", "vertical", 3, "form"], ["class", "novo-form-row", 4, "ngFor", "ngForOf"], ["class", "eeoc-form", 4, "ngIf"], ["class", "consent-form novo-form-row", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "novo-form-row"], [3, "form", "control"], [1, "eeoc-form"], [3, "title"], [1, "consent-form", "novo-form-row"], [1, "consent-checkbox-label"], [3, "click"], [1, "error"]],
        template: function ApplyModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "novo-modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "utils");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "util-action", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplyModalComponent_Template_util_action_click_3_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplyModalComponent_div_4_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplyModalComponent_span_7_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplyModalComponent_span_9_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplyModalComponent_section_12_Template, 6, 8, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplyModalComponent_Template_button_click_13_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplyModalComponent_Template_button_click_16_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.job.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.job.publishedCategory && ctx.showCategory);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.address.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.job.address == null ? null : ctx.job.address.city) && (ctx.job.address == null ? null : ctx.job.address.state));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.job.address.state, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((ctx.job.address == null ? null : ctx.job.address.city) || (ctx.job.address == null ? null : ctx.job.address.state)) && ctx.job.employmentType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.employmentType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "CANCEL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid)("loading", ctx.applying);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, "APPLY"), " ");
          }
        },
        directives: [novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalElement"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoHeaderComponent"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoUtilsComponent"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoUtilActionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoButtonElement"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoFormElement"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoControlElement"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoFieldsetHeaderElement"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: ["[_nghost-%COMP%] {\n  min-width: 600px;\n}\n[_nghost-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  padding: 0px 0px 5px 15px;\n}\n[_nghost-%COMP%]   .job-details[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n[_nghost-%COMP%]   novo-form[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n[_nghost-%COMP%]   novo-form[_ngcontent-%COMP%]   .eeoc-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n[_nghost-%COMP%]   span.error[_ngcontent-%COMP%] {\n  color: #DA4453;\n  font-weight: 800;\n}\n@media only screen and (max-width: 768px), (max-height: 700px) {\n  [_nghost-%COMP%] {\n    max-width: 100vw;\n    min-width: unset;\n    align-self: start;\n  }\n  [_nghost-%COMP%]   novo-form[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 113px);\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    height: calc(100vh - 230px);\n    width: 100vw;\n  }\n  [_nghost-%COMP%]   section.ios[_ngcontent-%COMP%] {\n    max-height: calc(100vh - (230px + 150px));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHktbW9kYWwvYXBwbHktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtBQUVKO0FBREk7RUFDRSxnQkFBQTtBQUdOO0FBQUU7RUFDRSxpQkFBQTtBQUVKO0FBQUk7RUFDRSxvQkFBQTtBQUVOO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUdBO0VBQ0U7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUFBSjtFQUNJO0lBQ0UsK0JBQUE7RUFDTjtFQUNJO0lBQ0UsMkJBQUE7SUFDQSxZQUFBO0VBQ047RUFBTTtJQUNFLHlDQUFBO0VBRVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcGx5LW1vZGFsL2FwcGx5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICAuam9iLWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDE1cHg7XG4gICAgLnNlcGFyYXRvciB7XG4gICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIH1cbiAgfVxuICBub3ZvLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuXG4gICAgLmVlb2MtZm9ybSBoMiB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbiAgc3Bhbi5lcnJvciB7XG4gICAgY29sb3I6ICNEQTQ0NTM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSwgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gIDpob3N0IHtcbiAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICBub3ZvLWZvcm0ge1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEzcHgpO1xuICAgICAgfVxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzMHB4KTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAmLmlvcyB7XG4gICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtICgyMzBweCArIDE1MHB4KSk7IFxuICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplyModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-apply-modal',
            templateUrl: './apply-modal.component.html',
            styleUrls: ['./apply-modal.component.scss']
          }]
        }], function () {
          return [{
            type: novo_elements__WEBPACK_IMPORTED_MODULE_1__["FormUtils"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalParams"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalRef"]
          }, {
            type: _services_apply_apply_service__WEBPACK_IMPORTED_MODULE_4__["ApplyService"]
          }, {
            type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoToastService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LjSU":
    /*!*******************************************************!*\
      !*** ./src/app/services/settings/settings.service.ts ***!
      \*******************************************************/

    /*! exports provided: SettingsService */

    /***/
    function LjSU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nguniversal/express-engine/tokens */
      "SBCj");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! fs */
      1);
      /* harmony import */


      var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! path */
      2);
      /* harmony import */


      var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var APP_CONFIG_URL = './app.json';
      var LANGUAGE_KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["makeStateKey"])('language');

      var SettingsService = /*#__PURE__*/function () {
        function SettingsService(http, platformId, request, transferState, translate) {
          _classCallCheck(this, SettingsService);

          this.http = http;
          this.request = request;
          this.transferState = transferState;
          this.translate = translate;
          SettingsService.isServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId);
        }

        _createClass(SettingsService, [{
          key: "load",
          value: function load() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var data, configKey, assetsFolder;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      configKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["makeStateKey"])('app-config');

                      if (!SettingsService.isServer) {
                        _context3.next = 7;
                        break;
                      }

                      assetsFolder = Object(path__WEBPACK_IMPORTED_MODULE_7__["join"])(process.cwd(), 'dist', 'career-portal', 'browser');
                      data = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_6__["readFileSync"](Object(path__WEBPACK_IMPORTED_MODULE_7__["join"])(assetsFolder, 'app.json'), 'utf8'));
                      this.transferState.set(configKey, data);
                      _context3.next = 13;
                      break;

                    case 7:
                      data = this.transferState.get(configKey, null);

                      if (data) {
                        _context3.next = 12;
                        break;
                      }

                      _context3.next = 11;
                      return this.http.get(APP_CONFIG_URL).toPromise();

                    case 11:
                      data = _context3.sent;

                    case 12:
                      this.http.get(APP_CONFIG_URL).toPromise(); // Always retrieve in console for support folks

                    case 13:
                      _context3.next = 15;
                      return this.setConfig(data);

                    case 15:
                      SettingsService.loaded = true;

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "setConfig",
          value: function setConfig(data) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var objectConfigOptions, validTokenRegex;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      SettingsService.settings = data;
                      objectConfigOptions = ['service', 'additionalJobCriteria', 'integrations', 'eeoc', 'privacyConsent'];
                      objectConfigOptions.forEach(function (option) {
                        if (!SettingsService.settings[option]) {
                          SettingsService.settings[option] = {};
                        }
                      });

                      if (!SettingsService.settings.service.fields || SettingsService.settings.service.fields.length === 0) {
                        SettingsService.settings.service.fields = ['id', 'title', 'publishedCategory(id,name)', 'address(city,state,countryName)', 'employmentType', 'dateLastPublished', 'publicDescription', 'isOpen', 'isPublic', 'isDeleted', 'publishedZip', 'salary', 'salaryUnit'];
                      }

                      if (!SettingsService.settings.service.jobInfoChips) {
                        SettingsService.settings.service.jobInfoChips = ['employmentType', {
                          type: 'mediumDate',
                          field: 'dateLastPublished'
                        }];
                      }

                      if (!SettingsService.settings.service.keywordSearchFields || SettingsService.settings.service.keywordSearchFields.length === 0) {
                        SettingsService.settings.service.keywordSearchFields = ['publicDescription', 'title'];
                      }

                      validTokenRegex = /[^A-Za-z0-9]/;

                      if (!(!SettingsService.settings.service.corpToken || validTokenRegex.test(SettingsService.settings.service.corpToken))) {
                        _context4.next = 9;
                        break;
                      }

                      throw new Error('Invalid Corp Token');

                    case 9:
                      if (SettingsService.settings.service.swimlane) {
                        _context4.next = 11;
                        break;
                      }

                      throw new Error('Invalid Swimlane');

                    case 11:
                      _context4.next = 13;
                      return this.translate.use(this.getPreferredLanguage()).toPromise();

                    case 13:
                      if (!SettingsService.isServer) {
                        SettingsService.isIos = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
                      }

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getPreferredLanguage",
          value: function getPreferredLanguage() {
            var supportedLanguages = SettingsService.settings.supportedLocales || [];
            var language = SettingsService.settings.defaultLocale;

            if (SettingsService.isServer) {
              language = this.request['acceptsLanguages'](supportedLanguages);

              if (!language) {
                language = SettingsService.settings.defaultLocale;
              }

              this.transferState.set(LANGUAGE_KEY, language);
            } else {
              language = localStorage.getItem('preferredLanguage') || this.transferState.get(LANGUAGE_KEY, undefined);

              if (!language) {
                language = SettingsService.settings.supportedLocales.filter(function (locale) {
                  return navigator.language === locale;
                })[0];
              }

              if (!language) {
                language = SettingsService.settings.defaultLocale;
              }
            }

            return language;
          }
        }]);

        return SettingsService;
      }();

      SettingsService.loaded = false;

      SettingsService.ɵfac = function SettingsService_Factory(t) {
        return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__["REQUEST"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["TransferState"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
      };

      SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SettingsService,
        factory: SettingsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__["REQUEST"]]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["TransferState"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NT6T":
    /*!*****************************************!*\
      !*** ./src/app/utils/stripHtml.pipe.ts ***!
      \*****************************************/

    /*! exports provided: StripHtmlPipe */

    /***/
    function NT6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripHtmlPipe", function () {
        return StripHtmlPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var he__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! he */
      "ktc5");
      /* harmony import */


      var he__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_1__);

      var StripHtmlPipe = /*#__PURE__*/function () {
        function StripHtmlPipe() {
          _classCallCheck(this, StripHtmlPipe);
        }

        _createClass(StripHtmlPipe, [{
          key: "transform",
          value: function transform(value, args) {
            return Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(value.replace(/<.*?>/g, ''));
          }
        }]);

        return StripHtmlPipe;
      }();

      StripHtmlPipe.ɵfac = function StripHtmlPipe_Factory(t) {
        return new (t || StripHtmlPipe)();
      };

      StripHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "stripHtml",
        type: StripHtmlPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripHtmlPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'stripHtml'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, meta, ref, toastService, modalService) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.meta = meta;
          this.ref = ref;
          this.toastService = toastService;
          this.modalService = modalService;
          this.title = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.companyName;

          if (_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.integrations.googleSiteVerification) {
            this.meta.updateTag({
              name: 'google-site-verification',
              content: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.integrations.googleSiteVerification.verificationCode
            });
          }

          var trackingId = '';

          if (_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.integrations.googleAnalytics) {
            trackingId = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].settings.integrations.googleAnalytics.trackingId;
          }

          if (trackingId && !_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"].isServer) {
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.ga('create', trackingId, 'auto');
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
              }
            });
          }
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.toastService.parentViewContainer = this.ref;
            this.modalService.parentViewContainer = this.ref;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoModalService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 1,
        consts: [["icon", "company", "theme", "neutral", "condensed", "true", 3, "title"], ["novo-title", "", 1, "entity-header"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);
          }
        },
        directives: [novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoToastService"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoModalService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UtLR":
    /*!************************************************!*\
      !*** ./src/app/job-list/job-list.component.ts ***!
      \************************************************/

    /*! exports provided: JobListComponent */

    /***/
    function UtLR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobListComponent", function () {
        return JobListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/search/search.service */
      "AKuI");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _components_info_chips_info_chips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/info-chips/info-chips.component */
      "p6oO");
      /* harmony import */


      var _utils_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../utils/stripHtml.pipe */
      "NT6T");

      function JobListComponent_novo_loading_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "novo-loading");
        }
      }

      function JobListComponent_novo_list_9_div_1_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r5.publishedCategory == null ? null : job_r5.publishedCategory.name, " ");
        }
      }

      function JobListComponent_novo_list_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_novo_list_9_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var job_r5 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.loadJob(job_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "novo-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "item-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "item-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "item-header-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-info-chips", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JobListComponent_novo_list_9_div_1_span_8_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "stripHtml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "jobs/" + job_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "jobs/" + job_r5.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("routerLink", "jobs/" + job_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("job", job_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", job_r5.publishedCategory && ctx_r4.showCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, job_r5.publicDescription), " ");
        }
      }

      function JobListComponent_novo_list_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "novo-list", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JobListComponent_novo_list_9_div_1_Template, 12, 9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.jobs);
        }
      }

      function JobListComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.loadMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Load More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobListComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "NO_MATCHING_JOBS "), "\n");
        }
      }

      var JobListComponent = /*#__PURE__*/function () {
        function JobListComponent(http, titleService, meta, router, translate) {
          _classCallCheck(this, JobListComponent);

          this.http = http;
          this.titleService = titleService;
          this.meta = meta;
          this.router = router;
          this.translate = translate;
          this.sidebarVisible = false;
          this.displaySidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.showLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.showError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.jobs = [];
          this._loading = true;
          this.moreAvailable = true;
          this.total = '...';
          this.showCategory = _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].settings.service.showCategory;
          this.start = 0;
        }

        _createClass(JobListComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var loadMore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.start = loadMore ? this.start + 30 : 0;
            this.titleService.setTitle("".concat(_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].settings.companyName, " - Careers"));
            var description = this.translate.instant('PAGE_DESCRIPTION');
            this.meta.updateTag({
              name: 'og:description',
              content: description
            });
            this.meta.updateTag({
              name: 'twitter:description',
              content: description
            });
            this.meta.updateTag({
              name: 'description',
              content: description
            });
            this.http.getjobs(this.filter, {
              start: this.start
            }).subscribe(this.onSuccess.bind(this), this.onFailure.bind(this));
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.getData(true);
          }
        }, {
          key: "openSidebar",
          value: function openSidebar() {
            this.displaySidebar.emit(true);
          }
        }, {
          key: "loadJob",
          value: function loadJob(jobId) {
            this.router.navigate(["jobs/".concat(jobId)]);
            this.loading = true;
          }
        }, {
          key: "loading",
          get: function get() {
            return this._loading;
          },
          set: function set(value) {
            this.showLoading.emit(value);
            this._loading = value;
          }
        }, {
          key: "onSuccess",
          value: function onSuccess(res) {
            if (this.start > 0) {
              this.jobs = this.jobs.concat(res.data);
            } else {
              this.jobs = res.data;
            }

            this.total = res.total;
            this.moreAvailable = res.count === 30;
            this.loading = false;
          }
        }, {
          key: "onFailure",
          value: function onFailure(res) {
            this.loading = false;
            this.jobs = [];
            this.total = 0;
            this.moreAvailable = false;
            this.showError.emit(true);
          }
        }]);

        return JobListComponent;
      }();

      JobListComponent.ɵfac = function JobListComponent_Factory(t) {
        return new (t || JobListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
      };

      JobListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JobListComponent,
        selectors: [["app-job-list"]],
        inputs: {
          filter: "filter",
          filterCount: "filterCount",
          sidebarVisible: "sidebarVisible"
        },
        outputs: {
          displaySidebar: "displaySidebar",
          showLoading: "showLoading",
          showError: "showError"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 11,
        consts: [[4, "ngIf"], [1, "mobile-filter-container"], ["theme", "secondary", "icon", "filter", "side", "left", 3, "click"], [1, "open-positions"], [1, "open-positions-text"], ["direction", "vertical", 4, "ngIf"], ["class", "load-more-button", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], ["direction", "vertical"], ["class", "job-card", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "job-card", 3, "routerLink", "click"], [3, "href", "routerLink"], [3, "job"], ["class", "category", 4, "ngIf"], [1, "description"], [1, "category"], [1, "load-more-button"], ["theme", "secondary", "inverse", "", 3, "click"], [1, "empty-list"], [1, "bhi-search-question"]],
        template: function JobListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobListComponent_novo_loading_0_Template, 1, 0, "novo-loading", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_Template_button_click_2_listener() {
              return ctx.openSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, JobListComponent_novo_list_9_Template, 2, 1, "novo-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, JobListComponent_div_10_Template, 3, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JobListComponent_div_11_Template, 4, 3, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "FILTER"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "OPEN_POSITIONS"), " (", ctx.total, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.jobs.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.moreAvailable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.jobs.length === 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], novo_elements__WEBPACK_IMPORTED_MODULE_7__["NovoButtonElement"], novo_elements__WEBPACK_IMPORTED_MODULE_7__["NovoLoadingElement"], novo_elements__WEBPACK_IMPORTED_MODULE_7__["NovoListElement"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], novo_elements__WEBPACK_IMPORTED_MODULE_7__["NovoListItemElement"], novo_elements__WEBPACK_IMPORTED_MODULE_7__["NovoItemHeaderElement"], novo_elements__WEBPACK_IMPORTED_MODULE_7__["NovoItemTitleElement"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], novo_elements__WEBPACK_IMPORTED_MODULE_7__["NovoItemDateElement"], _components_info_chips_info_chips_component__WEBPACK_IMPORTED_MODULE_8__["InfoChipsComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _utils_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_9__["StripHtmlPipe"]],
        styles: ["[_nghost-%COMP%]   div.open-positions[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.5em;\n  margin: 30px 34px 22px 35px;\n}\n[_nghost-%COMP%]   div.mobile-filter-container[_ngcontent-%COMP%] {\n  margin: 30px 34px 22px 35px;\n}\nnovo-list[_ngcontent-%COMP%] {\n  overflow: auto;\n  min-height: 61.3vh;\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  margin: 12px 35px;\n  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);\n  padding-bottom: 10px;\n  cursor: pointer;\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: inline-block;\n  word-wrap: break-word;\n  overflow: hidden;\n  max-height: 3.6em;\n  line-height: 1.8em;\n  padding: 0px 15px 15px 15px;\n  width: 100%;\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  padding: 0px 15px 10px 15px;\n  font-weight: 600;\n  display: inline-block;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n@media only screen and (max-width: 768px) {\n  novo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], novo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-content[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: rgba(67, 67, 67, 0.65);\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-content[_ngcontent-%COMP%]   .bhi-next[_ngcontent-%COMP%] {\n  color: #3399DD;\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-header[_ngcontent-%COMP%]   item-title[_ngcontent-%COMP%] {\n  color: #4a89dc;\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-header-end[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: block;\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-header-end[_ngcontent-%COMP%]   .mid-card[_ngcontent-%COMP%] {\n  color: #0B344F;\n  padding: 10px 10px;\n  margin-right: 5px;\n  background-color: #f4f4f4;\n  border-radius: 8px;\n  align-self: center;\n}\nnovo-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-header-end[_ngcontent-%COMP%]   .mid-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n@media only screen and (min-width: 768px) {\n  [_nghost-%COMP%]   .mobile-filter-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%]   div.open-positions[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 1.5em;\n    margin: 30px 34px 22px 15px;\n  }\n  [_nghost-%COMP%]   div.mobile-filter-container[_ngcontent-%COMP%] {\n    margin: 30px 34px 22px 15px;\n  }\n  [_nghost-%COMP%]   div.job-card[_ngcontent-%COMP%] {\n    margin: 12px 15px;\n  }\n  [_nghost-%COMP%]   div.job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%] {\n    flex-direction: inherit;\n  }\n  [_nghost-%COMP%]   div.job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-header-end[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  [_nghost-%COMP%]   div.job-card[_ngcontent-%COMP%]   novo-list-item[_ngcontent-%COMP%]   item-header-end[_ngcontent-%COMP%]   .mid-card[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n}\n.empty-list[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #999999;\n  font-size: 1.7em;\n}\n.empty-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.load-more-button[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  background-color: #4f5361;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iLWxpc3Qvam9iLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFETjtBQUdFO0VBQ0UsMkJBQUE7QUFESjtBQUtBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRkY7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFESjtBQUVJO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUFOO0FBRUk7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFDUTtFQU5KO0lBT00sYUFBQTtFQUVSO0FBQ0Y7QUFJUTtFQUNFLDZCQUFBO0FBRlY7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQU1RO0VBQ0ksY0FBQTtBQUpaO0FBT007RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUxSO0FBTVE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUpWO0FBS1U7RUFDRSxjQUFBO0FBSFo7QUFXQTtFQUVJO0lBQ0UsYUFBQTtFQVRKO0FBQ0Y7QUFZQTtFQUVJO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLDJCQUFBO0VBWEo7RUFhRTtJQUNFLDJCQUFBO0VBWEo7RUFhRTtJQUNFLGlCQUFBO0VBWEo7RUFZSTtJQUNFLHVCQUFBO0VBVk47RUFXTTtJQUNFLGFBQUE7RUFUUjtFQVVRO0lBQ0UsZUFBQTtFQVJWO0FBQ0Y7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFkRjtBQWVFO0VBQ0Usa0JBQUE7QUFiSjtBQWlCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBZEYiLCJmaWxlIjoic3JjL2FwcC9qb2ItbGlzdC9qb2ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICBkaXYub3Blbi1wb3NpdGlvbnMge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBtYXJnaW46IDMwcHggMzRweCAyMnB4IDM1cHhcbiAgfVxuICBkaXYubW9iaWxlLWZpbHRlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMzBweCAzNHB4IDIycHggMzVweFxuICB9XG59XG5cbm5vdm8tbGlzdCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MS4zdmg7XG4gIC5qb2ItY2FyZCB7XG4gICAgbWFyZ2luOiAxMnB4IDM1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1heC1oZWlnaHQ6IDMuNmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgICAgcGFkZGluZzogMHB4IDE1cHggMTVweCAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jYXRlZ29yeSB7XG4gICAgICBwYWRkaW5nOiAwcHggMTVweCAxMHB4IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdm8tbGlzdC1pdGVtICB7XG4gICAgICBpdGVtLWNvbnRlbnQge1xuICAgICAgICBzcGFuLCBiIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSg2NywgNjcsIDY3LCAwLjY1KTtcbiAgICAgICAgfVxuICAgICAgICAuYmhpLW5leHQge1xuICAgICAgICAgIGNvbG9yOiAjMzM5OUREO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpdGVtLWhlYWRlciB7XG4gICAgICAgIGl0ZW0tdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICM0YTg5ZGM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGl0ZW0taGVhZGVyLWVuZCB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC5taWQtY2FyZCB7XG4gICAgICAgICAgY29sb3I6ICMwQjM0NEY7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0e1xuICAgIC5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdHtcbiAgICBkaXYub3Blbi1wb3NpdGlvbnMge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBtYXJnaW46IDMwcHggMzRweCAyMnB4IDE1cHhcbiAgICB9XG4gICAgZGl2Lm1vYmlsZS1maWx0ZXItY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbjogMzBweCAzNHB4IDIycHggMTVweFxuICAgIH1cbiAgICBkaXYuam9iLWNhcmR7XG4gICAgICBtYXJnaW46IDEycHggMTVweDtcbiAgICAgIG5vdm8tbGlzdC1pdGVtIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgICAgIGl0ZW0taGVhZGVyLWVuZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAubWlkLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi5lbXB0eS1saXN0IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDEuN2VtO1xuICBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbn1cblxuLmxvYWQtbW9yZS1idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjUzNjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-job-list',
            templateUrl: './job-list.component.html',
            styleUrls: ['./job-list.component.scss']
          }]
        }], function () {
          return [{
            type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }];
        }, {
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          filterCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sidebarVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          displaySidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          showLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          showError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Y39l":
    /*!*********************************************************************!*\
      !*** ./src/app/services/server-response/server-response.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ServerResponseService */

    /***/
    function Y39l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerResponseService", function () {
        return ServerResponseService;
      });
      /* harmony import */


      var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nguniversal/express-engine/tokens */
      "SBCj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ms */
      "FGiv");
      /* harmony import */


      var ms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../settings/settings.service */
      "LjSU");

      var ServerResponseService = /*#__PURE__*/function () {
        function ServerResponseService(response) {
          _classCallCheck(this, ServerResponseService);

          this.response = response;
        }

        _createClass(ServerResponseService, [{
          key: "getHeader",
          value: function getHeader(key) {
            return this.response.getHeader(key);
          }
        }, {
          key: "setHeader",
          value: function setHeader(key, value) {
            if (this.response) {
              this.response.header(key, value);
            }

            return this;
          }
        }, {
          key: "appendHeader",
          value: function appendHeader(key, value) {
            var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';

            if (this.response) {
              var current = this.getHeader(key);

              if (!current) {
                return this.setHeader(key, value);
              }

              var newValue = [].concat(_toConsumableArray(current.split(delimiter)), [value]).filter(function (el, i, a) {
                return i === a.indexOf(el);
              }).join(delimiter);
              this.response.header(key, newValue);
            }

            return this;
          }
        }, {
          key: "setHeaders",
          value: function setHeaders(dictionary) {
            var _this3 = this;

            if (this.response) {
              Object.keys(dictionary).forEach(function (key) {
                return _this3.setHeader(key, dictionary[key]);
              });
            }

            return this;
          }
        }, {
          key: "setStatus",
          value: function setStatus(code, message) {
            if (this.response) {
              this.response.statusCode = code;

              if (message) {
                this.response.statusMessage = message;
              }
            }

            return this;
          }
        }, {
          key: "setNotFound",
          value: function setNotFound() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not found';

            if (_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].isServer) {
              this.response.status(404);
              this.response.statusMessage = message;
            }

            return this;
          }
        }, {
          key: "setUnauthorized",
          value: function setUnauthorized() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unauthorized';

            if (this.response) {
              this.response.statusCode = 401;
              this.response.statusMessage = message;
            }

            return this;
          }
        }, {
          key: "setCachePrivate",
          value: function setCachePrivate() {
            if (this.response) {
              this.setCache('private');
            }

            return this;
          }
        }, {
          key: "setCacheNone",
          value: function setCacheNone() {
            if (this.response) {
              this.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
              this.setHeader('Pragma', 'no-cache');
            }

            return this;
          }
        }, {
          key: "setCache",
          value: function setCache(directive, maxAge, smaxAge) {
            if (this.response) {
              // tslint:disable-next-line:max-line-length
              if (smaxAge) {
                this.setHeader('Cache-Control', "".concat(directive, ", max-age=").concat(maxAge ? ms__WEBPACK_IMPORTED_MODULE_2__(maxAge) / 1000 : 0, ", s-maxage=").concat(ms__WEBPACK_IMPORTED_MODULE_2__(smaxAge) / 1000));
              } else {
                this.setHeader('Cache-Control', "".concat(directive, ", max-age=").concat(maxAge ? ms__WEBPACK_IMPORTED_MODULE_2__(maxAge) / 1000 : 0));
              }

              this.setHeader('Expires', maxAge ? new Date(Date.now() + ms__WEBPACK_IMPORTED_MODULE_2__(maxAge)).toUTCString() : new Date(Date.now()).toUTCString());
            }

            return this;
          }
        }, {
          key: "setError",
          value: function setError() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'internal server error';

            if (this.response) {
              this.response.statusCode = 500;
              this.response.statusMessage = message;
            }

            return this;
          }
        }]);

        return ServerResponseService;
      }();

      ServerResponseService.ɵfac = function ServerResponseService_Factory(t) {
        return new (t || ServerResponseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__["RESPONSE"], 8));
      };

      ServerResponseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ServerResponseService,
        factory: ServerResponseService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServerResponseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__["RESPONSE"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: initSettings, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initSettings", function () {
        return initSettings;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-list/job-list.component */
      "UtLR");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/analytics/analytics.service */
      "6SG/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_search_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/search/search.service */
      "AKuI");
      /* harmony import */


      var _services_share_share_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/share/share.service */
      "cwaR");
      /* harmony import */


      var _services_apply_apply_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/apply/apply.service */
      "889k");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _sidebar_sidebar_filter_sidebar_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./sidebar/sidebar-filter/sidebar-filter.component */
      "ZkAk");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./main-page/main-page.component */
      "0PS2");
      /* harmony import */


      var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./job-details/job-details.component */
      "HJCg");
      /* harmony import */


      var _apply_modal_apply_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./apply-modal/apply-modal.component */
      "HVU5");
      /* harmony import */


      var _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./error-modal/error-modal.component */
      "fayc");
      /* harmony import */


      var _utils_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./utils/stripHtml.pipe */
      "NT6T");
      /* harmony import */


      var _structured_seo_structured_seo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./structured-seo/structured-seo.component */
      "bVzh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _job_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./job.resolver */
      "fgJk");
      /* harmony import */


      var _services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/server-response/server-response.service */
      "Y39l");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "dEEo");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _services_localization_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./services/localization/loader */
      "Aylj");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _components_info_chips_info_chips_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/info-chips/info-chips.component */
      "p6oO");
      /* harmony import */


      var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./impressum/impressum.component */
      "2tb1");

      function initSettings(settings) {
        return function () {
          return settings.load();
        };
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
          useFactory: initSettings,
          deps: [_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]],
          multi: true
        }, _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"], _services_share_share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["FieldInteractionApi"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoModalService"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoToastService"], _services_apply_apply_service__WEBPACK_IMPORTED_MODULE_10__["ApplyService"], _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__["AnalyticsService"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _job_resolver__WEBPACK_IMPORTED_MODULE_21__["JobResolver"], _services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_22__["ServerResponseService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: 'serverApp'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoElementsModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoListModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoHeaderModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoDropdownModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateLoader"],
            useClass: _services_localization_loader__WEBPACK_IMPORTED_MODULE_25__["TranslationLoader"]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__["JobListComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"], _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_15__["JobDetailsComponent"], _apply_modal_apply_modal_component__WEBPACK_IMPORTED_MODULE_16__["ApplyModalComponent"], _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_17__["ErrorModalComponent"], _utils_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_18__["StripHtmlPipe"], _sidebar_sidebar_filter_sidebar_filter_component__WEBPACK_IMPORTED_MODULE_12__["SidebarFilterComponent"], _structured_seo_structured_seo_component__WEBPACK_IMPORTED_MODULE_19__["StructuredSeoComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__["PrivacyPolicyComponent"], _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_28__["ImpressumComponent"], _components_info_chips_info_chips_component__WEBPACK_IMPORTED_MODULE_27__["InfoChipsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoElementsModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoListModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoHeaderModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoDropdownModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__["JobListComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"], _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_15__["JobDetailsComponent"], _apply_modal_apply_modal_component__WEBPACK_IMPORTED_MODULE_16__["ApplyModalComponent"], _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_17__["ErrorModalComponent"], _utils_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_18__["StripHtmlPipe"], _sidebar_sidebar_filter_sidebar_filter_component__WEBPACK_IMPORTED_MODULE_12__["SidebarFilterComponent"], _structured_seo_structured_seo_component__WEBPACK_IMPORTED_MODULE_19__["StructuredSeoComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__["PrivacyPolicyComponent"], _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_28__["ImpressumComponent"], _components_info_chips_info_chips_component__WEBPACK_IMPORTED_MODULE_27__["InfoChipsComponent"]],
            entryComponents: [_apply_modal_apply_modal_component__WEBPACK_IMPORTED_MODULE_16__["ApplyModalComponent"], _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_17__["ErrorModalComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
              appId: 'serverApp'
            }), _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoElementsModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoListModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoHeaderModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoDropdownModule"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateLoader"],
                useClass: _services_localization_loader__WEBPACK_IMPORTED_MODULE_25__["TranslationLoader"]
              }
            })],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
              useFactory: initSettings,
              deps: [_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]],
              multi: true
            }, _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"], _services_share_share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["FieldInteractionApi"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoModalService"], novo_elements__WEBPACK_IMPORTED_MODULE_13__["NovoToastService"], _services_apply_apply_service__WEBPACK_IMPORTED_MODULE_10__["ApplyService"], _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__["AnalyticsService"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _job_resolver__WEBPACK_IMPORTED_MODULE_21__["JobResolver"], _services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_22__["ServerResponseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZkAk":
    /*!********************************************************************!*\
      !*** ./src/app/sidebar/sidebar-filter/sidebar-filter.component.ts ***!
      \********************************************************************/

    /*! exports provided: SidebarFilterComponent */

    /***/
    function ZkAk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarFilterComponent", function () {
        return SidebarFilterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/search/search.service */
      "AKuI");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      function SidebarFilterComponent_novo_loading_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "novo-loading");
        }
      }

      function SidebarFilterComponent_novo_form_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "novo-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "novo-control", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1.form)("control", ctx_r1.control);
        }
      }

      var SidebarFilterComponent = /*#__PURE__*/function () {
        function SidebarFilterComponent(service, formUtils) {
          _classCallCheck(this, SidebarFilterComponent);

          this.service = service;
          this.formUtils = formUtils;
          this.checkboxFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.loading = true;
          this.viewAllOptions = false;
        }

        _createClass(SidebarFilterComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            switch (this.field) {
              case 'publishedCategory(id,name)':
                this.fieldName = 'publishedCategory';
                break;

              default:
                this.fieldName = this.field;
                break;
            }

            this.getFilterOptions();
          }
        }, {
          key: "toggleAllOptions",
          value: function toggleAllOptions() {
            this.viewAllOptions = !this.viewAllOptions;
          }
        }, {
          key: "getFilterOptions",
          value: function getFilterOptions() {
            this.loading = true;
            this.service.getCurrentJobIds(this.filter, [this.fieldName]).subscribe(this.handleJobIdsOnSuccess.bind(this));
          }
        }, {
          key: "handleJobIdsOnSuccess",
          value: function handleJobIdsOnSuccess(res) {
            var resultIds = res.data.map(function (result) {
              return result.id;
            });
            this.service.getAvailableFilterOptions(resultIds, this.field).subscribe(this.setFieldOptionsOnSuccess.bind(this));
          }
        }, {
          key: "setFieldOptionsOnSuccess",
          value: function setFieldOptionsOnSuccess(res) {
            var _this4 = this;

            var interaction;

            switch (this.field) {
              case 'address(city)':
                this.options = res.data.map(function (result) {
                  return {
                    value: result.address.city,
                    label: "".concat(result.address.city, " (").concat(result.idCount, ")")
                  };
                }).filter(function (item) {
                  return item.value;
                });

                interaction = function interaction(API) {
                  var values = [];
                  _this4.lastSetValue = API.getActiveValue();

                  if (API.getActiveValue()) {
                    values = API.getActiveValue().map(function (value) {
                      return "address.city{?^^equals}{?^^delimiter}".concat(value, "{?^^delimiter}");
                    });
                  }

                  _this4.checkboxFilter.emit(values);
                };

                break;

              case 'address(state)':
                this.options = res.data.map(function (result) {
                  return {
                    value: result.address.state,
                    label: "".concat(result.address.state, " (").concat(result.idCount, ")")
                  };
                }).filter(function (item) {
                  return item.value;
                });

                interaction = function interaction(API) {
                  var values = [];
                  _this4.lastSetValue = API.getActiveValue();

                  if (API.getActiveValue()) {
                    values = API.getActiveValue().map(function (value) {
                      return "address.state{?^^equals}{?^^delimiter}".concat(value, "{?^^delimiter}");
                    });
                  }

                  _this4.checkboxFilter.emit(values);
                };

                break;

              case 'publishedCategory(id,name)':
                this.options = res.data.filter(function (unfilteredResult) {
                  return !!unfilteredResult.publishedCategory;
                }).map(function (result) {
                  return {
                    value: result.publishedCategory.id,
                    label: "".concat(result.publishedCategory.name, " (").concat(result.idCount, ")")
                  };
                });

                interaction = function interaction(API) {
                  var values = [];
                  _this4.lastSetValue = API.getActiveValue();

                  if (API.getActiveValue()) {
                    values = API.getActiveValue().map(function (value) {
                      return "publishedCategory.id{?^^equals}".concat(value);
                    });
                  }

                  _this4.checkboxFilter.emit(values);
                };

                break;

              default:
                break;
            }

            this.control = new novo_elements__WEBPACK_IMPORTED_MODULE_2__["CheckListControl"]({
              key: 'checklist',
              options: this.options,
              interactions: [{
                event: 'change',
                script: interaction.bind(this),
                invokeOnInit: false
              }]
            });
            this.formUtils.setInitialValues([this.control], {
              'checklist': this.lastSetValue
            });
            this.form = this.formUtils.toFormGroup([this.control]);
            this.loading = false;
          }
        }]);

        return SidebarFilterComponent;
      }();

      SidebarFilterComponent.ɵfac = function SidebarFilterComponent_Factory(t) {
        return new (t || SidebarFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_2__["FormUtils"]));
      };

      SidebarFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarFilterComponent,
        selectors: [["app-sidebar-filter"]],
        inputs: {
          filter: "filter",
          field: "field",
          title: "title"
        },
        outputs: {
          checkboxFilter: "checkboxFilter"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 6,
        vars: 6,
        consts: [[1, "filter-header"], [4, "ngIf"], [3, "form", 4, "ngIf"], [3, "form"], [1, "novo-form-row"], [3, "form", "control"]],
        template: function SidebarFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarFilterComponent_novo_loading_4_Template, 1, 0, "novo-loading", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarFilterComponent_novo_form_5_Template, 3, 3, "novo-form", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "FILTER_BY"), " ", ctx.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], novo_elements__WEBPACK_IMPORTED_MODULE_2__["NovoLoadingElement"], novo_elements__WEBPACK_IMPORTED_MODULE_2__["NovoFormElement"], novo_elements__WEBPACK_IMPORTED_MODULE_2__["NovoControlElement"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["[_nghost-%COMP%]   .filter-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0px 25px;\n  color: #2f384f;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLWZpbHRlci9zaWRlYmFyLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLWZpbHRlci9zaWRlYmFyLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmZpbHRlci1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICBjb2xvcjogIzJmMzg0ZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar-filter',
            templateUrl: './sidebar-filter.component.html',
            styleUrls: ['./sidebar-filter.component.scss']
          }]
        }], function () {
          return [{
            type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_2__["FormUtils"]
          }];
        }, {
          checkboxFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "bVzh":
    /*!************************************************************!*\
      !*** ./src/app/structured-seo/structured-seo.component.ts ***!
      \************************************************************/

    /*! exports provided: StructuredSeoComponent */

    /***/
    function bVzh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StructuredSeoComponent", function () {
        return StructuredSeoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var StructuredSeoComponent = /*#__PURE__*/function () {
        function StructuredSeoComponent(_renderer2, datePipe, _document, sanitizer) {
          _classCallCheck(this, StructuredSeoComponent);

          this._renderer2 = _renderer2;
          this.datePipe = datePipe;
          this._document = _document;
          this.sanitizer = sanitizer;
        }

        _createClass(StructuredSeoComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var jsonObject = {
              '@context': 'https://schema.org/',
              '@type': 'JobPosting',
              'title': this.jobData.title,
              'description': this.jobData.publicDescription,
              'datePosted': this.datePipe.transform(this.jobData.dateLastPublished, 'long'),
              'hiringOrganization': {
                '@type': 'Organization',
                'name': _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.companyName,
                'sameAs': _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.companyUrl,
                'logo': _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.companyLogoPath
              },
              'jobLocation': {
                '@type': 'Place',
                'address': {
                  '@type': 'PostalAddress',
                  'addressLocality': this.jobData.address.city,
                  'addressRegion': this.jobData.address.state,
                  'postalCode': this.jobData.address.zip
                }
              },
              'baseSalary': {
                '@type': 'MonetaryAmount',
                'value': {
                  '@type': 'QuantitativeValue',
                  'value': this.jobData.salary,
                  'unitText': this.jobData.salaryUnit
                }
              }
            };

            var s = this._renderer2.createElement('script');

            s.type = "application/ld+json";
            s.text = JSON.stringify(jsonObject);

            if (_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].isServer) {
              this._renderer2.appendChild(this._document.body, s);
            }
          }
        }]);

        return StructuredSeoComponent;
      }();

      StructuredSeoComponent.ɵfac = function StructuredSeoComponent_Factory(t) {
        return new (t || StructuredSeoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      StructuredSeoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StructuredSeoComponent,
        selectors: [["app-structured-seo"]],
        hostVars: 1,
        hostBindings: function StructuredSeoComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("innerHTML", ctx.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        inputs: {
          jobData: "jobData"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 0,
        vars: 0,
        template: function StructuredSeoComponent_Template(rf, ctx) {},
        styles: ["[_nghost-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RydWN0dXJlZC1zZW8vc3RydWN0dXJlZC1zZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdHJ1Y3R1cmVkLXNlby9zdHJ1Y3R1cmVkLXNlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StructuredSeoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-structured-seo',
            templateUrl: './structured-seo.component.html',
            styleUrls: ['./structured-seo.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, {
          jobData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          html: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['innerHTML']
          }]
        });
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "cwaR":
    /*!*************************************************!*\
      !*** ./src/app/services/share/share.service.ts ***!
      \*************************************************/

    /*! exports provided: ShareService */

    /***/
    function cwaR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareService", function () {
        return ShareService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ShareService = /*#__PURE__*/function () {
        function ShareService() {
          var _this5 = this;

          _classCallCheck(this, ShareService);

          this.requestParams = {
            additionalEmailInfo: function additionalEmailInfo(job) {
              return '?subject=' + encodeURIComponent(job.title) + '&body=' + _this5.description(job, window.location.href) + _this5.additionalEmailInfo(job);
            },
            facebook: function facebook() {
              return '?display=popup&app_id=' + _this5.config.keys.facebook + '&href=' + encodeURIComponent(window.location.href) + '&redirect_uri=' + encodeURIComponent('https://www.facebook.com/') + '&source=facebook';
            },
            twitter: function twitter(job) {
              return '?text=' + encodeURIComponent(_this5.description(job)) + '&url=' + encodeURIComponent(window.location.href) + '&source=twitter';
            },
            linkedin: function linkedin(job) {
              return '?mini=true&source=Bullhorn%20Career%20Portal&title=' + encodeURIComponent(_this5.description(job)) + '&url=' + encodeURIComponent(window.location.href) + '&source=linkedin';
            },
            email: function email(job) {
              return '?subject=' + encodeURIComponent(job.title) + '&body=' + _this5.description(job, window.location.href);
            }
          };
        }

        _createClass(ShareService, [{
          key: "config",
          get: function get() {
            return {
              url: {
                facebook: 'https://www.facebook.com/dialog/share',
                twitter: 'https://twitter.com/intent/tweet',
                linkedin: 'https://www.linkedin.com/shareArticle'
              },
              keys: {
                facebook: '1439597326343190'
              }
            };
          }
        }, {
          key: "emailLink",
          value: function emailLink(job) {
            return 'mailto:' + this.requestParams.email(job);
          }
        }, {
          key: "facebook",
          value: function facebook(job) {
            window.open(this.config.url.facebook + this.requestParams.facebook(job));
          }
        }, {
          key: "linkedin",
          value: function linkedin(job) {
            window.open(this.config.url.linkedin + this.requestParams.linkedin(job));
          }
        }, {
          key: "sendEmailLink",
          value: function sendEmailLink(job, email) {
            email = email || '';
            return 'mailto:' + email + this.requestParams.additionalEmailInfo(job);
          }
        }, {
          key: "twitter",
          value: function twitter(job) {
            window.open(this.config.url.twitter + this.requestParams.twitter(job));
          }
        }, {
          key: "additionalEmailInfo",
          value: function additionalEmailInfo(job) {
            var body = '\n';

            if (job.title) {
              body += '\nTitle: Jobs';
            }

            if (job.publishedCategory && job.publishedCategory.name) {
              body += '\n' + 'Category: ' + job.publishedCategory.name;
            }

            if (job.address) {
              var _location = '\n' + 'Location: ';

              if (job.address.city && job.address.state) {
                body += _location + job.address.city + ', ' + job.address.state + '\n';
              } else if (job.address.city) {
                body += _location + job.address.city + '\n';
              } else if (job.address.state) {
                body += _location + job.address.state + '\n';
              }
            }

            return encodeURIComponent(body);
          }
        }, {
          key: "description",
          value: function description(job, url) {
            if (url) {
              return 'Check out this ' + encodeURIComponent(job.title) + ' job: ' + encodeURIComponent(url);
            }

            return 'Check out this ' + encodeURIComponent(job.title) + ' job!';
          }
        }]);

        return ShareService;
      }();

      ShareService.ɵfac = function ShareService_Factory(t) {
        return new (t || ShareService)();
      };

      ShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShareService,
        factory: ShareService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dEEo":
    /*!************************************************************!*\
      !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
      \************************************************************/

    /*! exports provided: PrivacyPolicyComponent */

    /***/
    function dEEo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
        return PrivacyPolicyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");

      function PrivacyPolicyComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function PrivacyPolicyComponent_novo_loading_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "novo-loading");
        }
      }

      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent(http, domSanitize) {
          _classCallCheck(this, PrivacyPolicyComponent);

          this.http = http;
          this.domSanitize = domSanitize;
          this.loading = true;
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.http.get('./static/privacy-policy.html', {
              responseType: 'text'
            }).subscribe(this.handlePolicyOnSuccess.bind(this));
          }
        }, {
          key: "handlePolicyOnSuccess",
          value: function handlePolicyOnSuccess(data) {
            this.data = this.domSanitize.bypassSecurityTrustHtml(data);
            this.loading = false;
          }
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
        return new (t || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyPolicyComponent,
        selectors: [["app-privacy-policy"]],
        decls: 2,
        vars: 2,
        consts: [[3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"]],
        template: function PrivacyPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrivacyPolicyComponent_div_0_Template, 1, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrivacyPolicyComponent_novo_loading_1_Template, 1, 0, "novo-loading", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], novo_elements__WEBPACK_IMPORTED_MODULE_4__["NovoLoadingElement"]],
        styles: ["novo-loading[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 13px;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJub3ZvLWxvYWRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-privacy-policy',
            templateUrl: './privacy-policy.component.html',
            styleUrls: ['./privacy-policy.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fayc":
    /*!******************************************************!*\
      !*** ./src/app/error-modal/error-modal.component.ts ***!
      \******************************************************/

    /*! exports provided: ErrorModalComponent */

    /***/
    function fayc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorModalComponent", function () {
        return ErrorModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var novo_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! novo-elements */
      "y4B+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      var ErrorModalComponent = /*#__PURE__*/function () {
        function ErrorModalComponent(params, modalRef) {
          _classCallCheck(this, ErrorModalComponent);

          this.params = params;
          this.modalRef = modalRef;
        }

        _createClass(ErrorModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.modalRef.close();
          }
        }]);

        return ErrorModalComponent;
      }();

      ErrorModalComponent.ɵfac = function ErrorModalComponent_Factory(t) {
        return new (t || ErrorModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalRef"]));
      };

      ErrorModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorModalComponent,
        selectors: [["error-modal"]],
        decls: 8,
        vars: 5,
        consts: [["type", "error", "data-automation-id", "error-modal"], ["theme", "primary", "data-automation-id", "error-modal-confirm", "icon", "check", 3, "click"]],
        template: function ErrorModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "novo-notification", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorModalComponent_Template_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.params["title"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.params["message"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "OKAY"));
          }
        },
        directives: [novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalNotificationElement"], novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoButtonElement"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'error-modal',
            templateUrl: './error-modal.component.html',
            styleUrls: ['./error-modal.component.scss']
          }]
        }], function () {
          return [{
            type: novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalParams"]
          }, {
            type: novo_elements__WEBPACK_IMPORTED_MODULE_1__["NovoModalRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fgJk":
    /*!*********************************!*\
      !*** ./src/app/job.resolver.ts ***!
      \*********************************/

    /*! exports provided: JobResolver */

    /***/
    function fgJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobResolver", function () {
        return JobResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/search/search.service */
      "AKuI");
      /* harmony import */


      var _services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/server-response/server-response.service */
      "Y39l");
      /* harmony import */


      var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/settings/settings.service */
      "LjSU");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var JobResolver = /*#__PURE__*/function () {
        function JobResolver(searchService, serverResponse, settingsService) {
          _classCallCheck(this, JobResolver);

          this.searchService = searchService;
          this.serverResponse = serverResponse;
          this.settingsService = settingsService;
        }

        _createClass(JobResolver, [{
          key: "resolve",
          value: function resolve(route) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var data;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"].loaded) {
                        _context5.next = 3;
                        break;
                      }

                      _context5.next = 3;
                      return this.settingsService.load();

                    case 3:
                      _context5.next = 5;
                      return this.searchService.openJob(route.paramMap.get('id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
                        _this6.serverResponse.setNotFound();

                        console.error('invalid job id'); // tslint:disable-line

                        // tslint:disable-line
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                          jobs: []
                        });
                      })).toPromise();

                    case 5:
                      data = _context5.sent;
                      return _context5.abrupt("return", data);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return JobResolver;
      }();

      JobResolver.ɵfac = function JobResolver_Factory(t) {
        return new (t || JobResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_4__["ServerResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]));
      };

      JobResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JobResolver,
        factory: JobResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
          }, {
            type: _services_server_response_server_response_service__WEBPACK_IMPORTED_MODULE_4__["ServerResponseService"]
          }, {
            type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "p6oO":
    /*!***************************************************************!*\
      !*** ./src/app/components/info-chips/info-chips.component.ts ***!
      \***************************************************************/

    /*! exports provided: InfoChipsComponent */

    /***/
    function p6oO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoChipsComponent", function () {
        return InfoChipsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/settings/settings.service */
      "LjSU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function InfoChipsComponent_span_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InfoChipsComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoChipsComponent_span_0_span_3_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.job.address.city, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.job.address == null ? null : ctx_r0.job.address.city) && (ctx_r0.job.address == null ? null : ctx_r0.job.address.state));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.job.address.state, "\n");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.job[chip_r3 == null ? null : chip_r3.field] || ctx_r5.job[chip_r3], " ");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r6.job[chip_r3 == null ? null : chip_r3.field], "mediumDate"), " ");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r7.job[chip_r3 == null ? null : chip_r3.field], "medium"), " ");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r8.job[chip_r3 == null ? null : chip_r3.field], "USD"), " ");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r9.job[chip_r3 == null ? null : chip_r3.field], "GBP"), " ");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r10.job[chip_r3 == null ? null : chip_r3.field], "EUR"), " ");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.job[chip_r3 == null ? null : chip_r3.field] || ctx_r11.job[chip_r3], " ");
        }
      }

      function InfoChipsComponent_ng_container_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoChipsComponent_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoChipsComponent_ng_container_1_span_1_ng_container_2_Template, 3, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoChipsComponent_ng_container_1_span_1_ng_container_3_Template, 3, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InfoChipsComponent_ng_container_1_span_1_ng_container_4_Template, 3, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InfoChipsComponent_ng_container_1_span_1_ng_container_5_Template, 3, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InfoChipsComponent_ng_container_1_span_1_ng_container_6_Template, 3, 4, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InfoChipsComponent_ng_container_1_span_1_ng_container_7_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automation-id", "chip-" + (chip_r3 == null ? null : chip_r3.field) || false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "mediumDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dateTime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "GBP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "EUR");
        }
      }

      function InfoChipsComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoChipsComponent_ng_container_1_span_1_Template, 8, 7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var chip_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", chip_r3.type || "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.job[chip_r3] || ctx_r1.job[chip_r3 == null ? null : chip_r3.field]);
        }
      }

      var InfoChipsComponent = function InfoChipsComponent() {
        _classCallCheck(this, InfoChipsComponent);

        this.jobInfoChips = src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"].settings.service.jobInfoChips;
      };

      InfoChipsComponent.ɵfac = function InfoChipsComponent_Factory(t) {
        return new (t || InfoChipsComponent)();
      };

      InfoChipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InfoChipsComponent,
        selectors: [["app-info-chips"]],
        inputs: {
          job: "job"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "chip", "data-automation-id", "chip-address", 4, "ngIf"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], ["data-automation-id", "chip-address", 1, "chip"], [1, "bhi-location"], [4, "ngIf"], [3, "ngSwitch"], ["class", "chip", 4, "ngIf"], [1, "chip"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
        template: function InfoChipsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfoChipsComponent_span_0_Template, 5, 3, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoChipsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.job.address.city || ctx.job.address.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobInfoChips);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: [".chip[_ngcontent-%COMP%] {\n  color: #0B344F;\n  padding: 10px 10px;\n  margin: 5px;\n  background-color: #f4f4f4;\n  border-radius: 8px;\n  align-self: center;\n}\n.chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWNoaXBzL2luZm8tY2hpcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1jaGlwcy9pbmZvLWNoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoaXAge1xuICAgIGNvbG9yOiAjMEIzNDRGO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG5cbn1cbiJdfQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoChipsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-info-chips',
            templateUrl: './info-chips.component.html',
            styleUrls: ['./info-chips.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          job: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-page/main-page.component */
      "0PS2");
      /* harmony import */


      var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-details/job-details.component */
      "HJCg");
      /* harmony import */


      var _job_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./job.resolver */
      "fgJk");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "dEEo");
      /* harmony import */


      var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./impressum/impressum.component */
      "2tb1");

      var appRoutes = [{
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
      }, {
        path: 'jobs/:id',
        component: _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_3__["JobDetailsComponent"],
        resolve: {
          message: _job_resolver__WEBPACK_IMPORTED_MODULE_4__["JobResolver"]
        }
      }, {
        path: 'jobs',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
      }, {
        path: 'privacy',
        component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyComponent"]
      }, {
        path: 'impressum',
        component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_7__["ImpressumComponent"]
      }, {
        path: '**',
        redirectTo: '/'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
          enableTracing: false,
          useHash: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].useHash,
          initialNavigation: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
              enableTracing: false,
              useHash: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].useHash,
              initialNavigation: 'enabled'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
          console.log(err); // tslint:disable-line

          var errorMsgElement = document.querySelector('novo-loading');
          var message = 'Application initialization failed, please check your app.json file';

          if (err) {
            if (err.message) {
              message = message + ': ' + err.message;
            } else {
              message = message + ': ' + err;
            }
          }

          errorMsgElement.textContent = message;
        });
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map