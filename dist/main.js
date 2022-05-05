(self["webpackChunkbanyantreeCilent"] = self["webpackChunkbanyantreeCilent"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _services_routerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/routerService */ 43512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);




class AppComponent {
    constructor(routerService) {
        this.routerService = routerService;
    }
    ngAfterViewInit() {
        this.routerService.openNonSession();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _modules_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/base.module */ 67556);
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.router */ 25285);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_router__WEBPACK_IMPORTED_MODULE_2__.AppRouting,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.NgxChartsModule,
            _modules_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_router__WEBPACK_IMPORTED_MODULE_2__.AppRouting,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.NgxChartsModule, _modules_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 25285:
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouting": () => (/* binding */ AppRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _services_constantsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/constantsService */ 12813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const appRoutes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
    },
    {
        path: _services_constantsService__WEBPACK_IMPORTED_MODULE_1__.ConstantsService.ROUTE_NON_SESSION, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_non-session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/non-session/module */ 45121)).then(m => m.NonSessionModule)
    }
];
class AppRouting {
}
AppRouting.ɵfac = function AppRouting_Factory(t) { return new (t || AppRouting)(); };
AppRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRouting });
AppRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 65192:
/*!*********************************************************!*\
  !*** ./src/app/framework-modules/cards/cardElements.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardElementsModule": () => (/* binding */ CardElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ct_edit_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ct-edit-panel/component */ 45625);
/* harmony import */ var _ct_group_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ct-group-panel/component */ 10501);
/* harmony import */ var _ct_data_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ct-data-panel/component */ 74185);
/* harmony import */ var _ct_data_panel_1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ct-data-panel-1/component */ 98537);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 66238);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 15754);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





















class CardElementsModule {
    constructor() {
    }
}
CardElementsModule.ɵfac = function CardElementsModule_Factory(t) { return new (t || CardElementsModule)(); };
CardElementsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CardElementsModule });
CardElementsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            /**
             * Material Component Imports
             */
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
            /**
             * Banyantree Compoenent  Imports
             */
            /**
             * Miscellaneous Imports
             */
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule
        ], 
        /**
         * Material Component Exports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        /**
         * Miscellaneous Exports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CardElementsModule, { declarations: [
        /**
         * Material Component Declarations
         */
        /**
         * Banyantree Compoenent Declarations
         */
        _ct_edit_panel_component__WEBPACK_IMPORTED_MODULE_0__.CtEditPanel,
        _ct_group_panel_component__WEBPACK_IMPORTED_MODULE_1__.CtGroupPanelComponent,
        _ct_data_panel_component__WEBPACK_IMPORTED_MODULE_2__.CtDataPanel,
        _ct_data_panel_1_component__WEBPACK_IMPORTED_MODULE_3__.CtDataPanel1], imports: [
        /**
         * Material Component Imports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        /**
         * Banyantree Compoenent  Imports
         */
        /**
         * Miscellaneous Imports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule], exports: [
        /**
         * Material Component Exports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        /**
         * Banyantree Compoenents Exports
         */
        _ct_edit_panel_component__WEBPACK_IMPORTED_MODULE_0__.CtEditPanel,
        _ct_group_panel_component__WEBPACK_IMPORTED_MODULE_1__.CtGroupPanelComponent,
        _ct_data_panel_component__WEBPACK_IMPORTED_MODULE_2__.CtDataPanel,
        _ct_data_panel_1_component__WEBPACK_IMPORTED_MODULE_3__.CtDataPanel1,
        /**
         * Miscellaneous Exports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule] }); })();


/***/ }),

/***/ 98537:
/*!**********************************************************************!*\
  !*** ./src/app/framework-modules/cards/ct-data-panel-1/component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtDataPanel1": () => (/* binding */ CtDataPanel1)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ 66238);


const _c0 = [[["", "data", ""]], [["", "bottomLeftPanel", ""]], [["", "bottomMidPanel", ""]], [["", "bottomRightPanel", ""]]];
const _c1 = ["[data]", "[bottomLeftPanel]", "[bottomMidPanel]", "[bottomRightPanel]"];
class CtDataPanel1 {
    ngOnInit() {
    }
}
CtDataPanel1.ɵfac = function CtDataPanel1_Factory(t) { return new (t || CtDataPanel1)(); };
CtDataPanel1.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtDataPanel1, selectors: [["ct-data-panel-1"]], ngContentSelectors: _c1, decls: 11, vars: 0, consts: [[1, "data-panel"], [1, "blue-line"], [1, "bottom-panel"], ["cols", "3", "rowHeight", "8:1"], [1, "back-panel"]], template: function CtDataPanel1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "mat-grid-list", 3)(5, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridTile], styles: [".data-panel[_ngcontent-%COMP%] {\n  min-height: 28.9375rem !important;\n  overflow: auto;\n}\n\n.bottom-panel[_ngcontent-%COMP%] {\n  padding: 0.625rem 0;\n}\n\n.blue-line[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  border-top: 1px solid #004FAA;\n}\n\n.stick-to-bottom[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.back-panel[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  margin-left: 2rem;\n}\n\n.back-panel[_ngcontent-%COMP%]     .mat-figure {\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBSUksc0NBQUE7RUFDQSxpQkFBQTtBQUhKOztBQURJO0VBQ0ksMkJBQUE7QUFHUiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhLXBhbmVse1xuICAgIG1pbi1oZWlnaHQ6IDI4LjkzNzVyZW0gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4uYm90dG9tLXBhbmVse1xuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDA7XG59XG5cbi5ibHVlLWxpbmV7XG4gICAgbWFyZ2luOiAwIDJyZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDRGQUE7XG59XG5cbi5zdGljay10by1ib3R0b217XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFjay1wYW5lbHtcbiAgICA6Om5nLWRlZXAgLm1hdC1maWd1cmV7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 74185:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/cards/ct-data-panel/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtDataPanel": () => (/* binding */ CtDataPanel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ 66238);


const _c0 = [[["", "data", ""]], [["", "bottomLeftPanel", ""]], [["", "bottomMidPanel", ""]], [["", "bottomRightPanel", ""]]];
const _c1 = ["[data]", "[bottomLeftPanel]", "[bottomMidPanel]", "[bottomRightPanel]"];
class CtDataPanel {
    ngOnInit() {
    }
}
CtDataPanel.ɵfac = function CtDataPanel_Factory(t) { return new (t || CtDataPanel)(); };
CtDataPanel.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtDataPanel, selectors: [["ct-data-panel"]], inputs: { isPanelHidden: "isPanelHidden" }, ngContentSelectors: _c1, decls: 11, vars: 2, consts: [[1, "data-panel"], [1, "blue-line", 3, "hidden"], [1, "bottom-panel", 3, "hidden"], ["cols", "3", "rowHeight", "8:1"], [1, "back-panel"]], template: function CtDataPanel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "mat-grid-list", 3)(5, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isPanelHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isPanelHidden);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__.MatGridTile], styles: [".data-panel[_ngcontent-%COMP%] {\n  height: 22.2375rem !important;\n  overflow: scroll;\n}\n\n.bottom-panel[_ngcontent-%COMP%] {\n  padding: 0.8rem 0 0.5rem 0;\n}\n\n.blue-line[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  border-top: 1px solid #004FAA;\n}\n\n.stick-to-bottom[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.back-panel[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  margin-left: 2rem;\n}\n\n.back-panel[_ngcontent-%COMP%]     .mat-figure {\n  justify-content: flex-start;\n}\n\n.data-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 0;\n}\n\n\n\n.data-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n\n\n.data-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 20px;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n.data-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 20px;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.3);\n  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksMEJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUlFLHNDQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFERTtFQUNJLDJCQUFBO0FBR047O0FBR0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBLFVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBLFdBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBGQUFBO0VBQ0Esa0dBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMEZBQUE7RUFDQSxrR0FBQTtBQURGIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGEtcGFuZWx7XG4gICAgaGVpZ2h0OiAyMi4yMzc1cmVtICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbCA7XG59XG5cblxuLmJvdHRvbS1wYW5lbHtcbiAgICBwYWRkaW5nOjAuOHJlbSAwIDAuNXJlbSAwO1xufVxuXG4uYmx1ZS1saW5le1xuICAgIG1hcmdpbjogMCAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA0RkFBO1xufVxuXG4uc3RpY2stdG8tYm90dG9te1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2stcGFuZWx7XG4gIDo6bmctZGVlcCAubWF0LWZpZ3VyZXtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5kYXRhLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDA7XG59XG4gIFxuLyogVHJhY2sgKi9cbi5kYXRhLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7IFxufVxuXG4vKiBIYW5kbGUgKi9cbi5kYXRhLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4vLyAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbi5kYXRhLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufSJdfQ== */"] });


/***/ }),

/***/ 45625:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/cards/ct-edit-panel/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtEditPanel": () => (/* binding */ CtEditPanel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class CtEditPanel {
    ngOnInit() {
    }
}
CtEditPanel.ɵfac = function CtEditPanel_Factory(t) { return new (t || CtEditPanel)(); };
CtEditPanel.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtEditPanel, selectors: [["ct-edit-panel"]], inputs: { header: "header" }, ngContentSelectors: _c0, decls: 6, vars: 1, consts: [[1, "col-md-12", 2, "padding-top", "4.2631vh"], [1, "col-4"], [1, "col-md-12", "row", 2, "padding-top", "2.2631vh"]], template: function CtEditPanel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 10501:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/cards/ct-group-panel/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtGroupPanelComponent": () => (/* binding */ CtGroupPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



const _c0 = ["*"];
class CtGroupPanelComponent {
    ngOnInit() {
    }
    valueChangeDetector($event) {
    }
}
CtGroupPanelComponent.ɵfac = function CtGroupPanelComponent_Factory(t) { return new (t || CtGroupPanelComponent)(); };
CtGroupPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtGroupPanelComponent, selectors: [["ct-group-panel"]], inputs: { cardHeader: "cardHeader" }, ngContentSelectors: _c0, decls: 6, vars: 3, consts: [[1, "group-header"], [1, "group-card", 2, "margin-top", "0", "padding-top", "0"], [1, "row"]], template: function CtGroupPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.cardHeader));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe], styles: [".group-header[_ngcontent-%COMP%] {\n  font-family: Roboto-Bold !important;\n  font-size: 0.97vw;\n  color: #545454;\n  margin-left: 2.3125rem;\n  margin-top: 3vh;\n}\n\n.group-card[_ngcontent-%COMP%] {\n  margin: 1.25rem 1.6875rem;\n  min-height: 27.8rem;\n}\n\n.sidenav-width[_ngcontent-%COMP%] {\n  width: 71.125rem;\n}\n\n.bgc[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFNBQUE7QUFBRiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cC1oZWFkZXJ7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90by1Cb2xkICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjk3dnc7XG4gICAgY29sb3I6ICM1NDU0NTQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIuMzEyNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG59XG5cbi5ncm91cC1jYXJke1xuICAgIG1hcmdpbjogMS4yNXJlbSAxLjY4NzVyZW07XG4gICAgbWluLWhlaWdodDogMjcuOHJlbTtcbiAgICAvLyBtYXgtaGVpZ2h0OiAyNy44cmVtO1xufVxuXG4uc2lkZW5hdi13aWR0aHtcbiAgICB3aWR0aDogNzEuMTI1cmVtO1xufVxuXG4uYmdje1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 12221:
/*!******************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-advanced-piechart/component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtAdvancedPieChartComponent": () => (/* binding */ CtAdvancedPieChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);



class CtAdvancedPieChartComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.defaults = {
            view: [700, 300],
            colorScheme: 'natural',
            gradient: false,
            label: "Total"
        };
    }
    set metaData(meta) {
        this._metaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._metaData;
    }
    ngOnInit() {
    }
    onSelect($event) {
        this.selected.next($event);
    }
}
CtAdvancedPieChartComponent.ɵfac = function CtAdvancedPieChartComponent_Factory(t) { return new (t || CtAdvancedPieChartComponent)(); };
CtAdvancedPieChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtAdvancedPieChartComponent, selectors: [["ct-advanced-piechart"]], inputs: { data: "data", metaData: "metaData" }, outputs: { selected: "selected" }, decls: 1, vars: 6, consts: [[2, "font-family", "Roboto-Light", 3, "hidden", "view", "results", "gradient", "scheme", "label", "select"]], template: function CtAdvancedPieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-advanced-pie-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function CtAdvancedPieChartComponent_Template_ngx_charts_advanced_pie_chart_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.data)("view", ctx._metaData.view)("results", ctx.data)("gradient", ctx._metaData.gradient)("scheme", ctx._metaData.colorScheme)("label", ctx._metaData.label);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.AdvancedPieChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 88471:
/*!************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-back-button/component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtBackButtonComponent": () => (/* binding */ CtBackButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




class CtBackButtonComponent {
    constructor() {
        this.isDisabled = false;
    }
}
CtBackButtonComponent.ɵfac = function CtBackButtonComponent_Factory(t) { return new (t || CtBackButtonComponent)(); };
CtBackButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtBackButtonComponent, selectors: [["ct-back-button"]], inputs: { name: "name", tooltip: "tooltip", isDisabled: "isDisabled" }, decls: 4, vars: 5, consts: [["mat-button", "", 3, "disabled", "matTooltip"], [1, "row", "btn-txt"]], template: function CtBackButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.name));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background: transparent;\n  font-family: Roboto-Medium !important;\n  text-align: center;\n  outline: none;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  color: #004FAA;\n  font-family: Roboto-Medium !important;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCBidXR0b257XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW0gIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bi10eHR7XG4gICAgbWFyZ2luOjAgMC41cmVtO1xuICAgIGNvbG9yOiAjMDA0RkFBO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 16078:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-badges-1/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtBadges1Component": () => (/* binding */ CtBadges1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ 68491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 72288);





function CtBadges1Component_mat_button_toggle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", option_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.name);
} }
class CtBadges1Component {
    constructor() {
        this.allSelected = false;
        this.disabled = false;
        this.selectedVal = [];
        this.options = [];
        this.select = [];
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.valueEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        if (this.badges == undefined) {
            this.options = [];
            this.selectedVal = [];
        }
        else {
            this.formInitialData();
        }
    }
    formInitialData() {
        this.options = [];
        this.selectedVal = [];
        if (typeof (this.badges[0]) == typeof ({})) {
            if (this.allSelected == true) {
                this.badges.forEach(element => {
                    this.options.push({ name: element.name, key: element.key, value: true });
                    this.selectedVal.push(String(element.name));
                });
            }
            else {
                this.badges.forEach(element => {
                    this.options.push({ name: element.name, key: element.key, value: element.value });
                });
            }
        }
        else {
            if (this.allSelected == true) {
                this.badges.forEach(element => {
                    this.options.push({ name: element, key: element, value: true });
                    this.selectedVal.push(String(element));
                });
            }
            else {
                this.badges.forEach(element => {
                    this.options.push({ name: element, key: element, value: false });
                });
            }
        }
    }
    formData() {
        this.options.forEach(element => {
        });
    }
    setSelectedValue() {
        if (typeof this.options != "undefined") {
            this.options.forEach(res => {
                if (res.value) {
                    this.selectedVal.push(String(res.key));
                }
            });
        }
    }
    onValChange(val) {
        if (val.length == 0) {
            for (var i = 0; i < this.options.length; i++) {
                this.options[i].value = false;
            }
            this.selected.emit(this.options);
        }
        else {
            this.select = val;
            this.setValues();
        }
    }
    setValues() {
        for (var i = 0; i < this.options.length; i++) {
            if (this.select.indexOf(String(this.options[i].key)) != -1) {
                this.options[i].value = true;
            }
            else {
                this.options[i].value = false;
            }
        }
        this.selected.emit(this.options);
    }
}
CtBadges1Component.ɵfac = function CtBadges1Component_Factory(t) { return new (t || CtBadges1Component)(); };
CtBadges1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtBadges1Component, selectors: [["ct-badges-1"]], inputs: { badges: "badges", allSelected: "allSelected", disabled: "disabled" }, outputs: { select: "select", selected: "selected", valueEmitter: "valueEmitter" }, decls: 3, vars: 3, consts: [["fxLayout", "row", 3, "disabled", "multiple", "change"], ["group", "matButtonToggleGroup"], ["style", "text-align: center", 3, "value", "checked", 4, "ngFor", "ngForOf"], [2, "text-align", "center", 3, "value", "checked"]], template: function CtBadges1Component_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle-group", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CtBadges1Component_Template_mat_button_toggle_group_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onValChange(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CtBadges1Component_mat_button_toggle_2_Template, 3, 3, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggleGroup, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel], styles: ["[_nghost-%COMP%]     .mat-button-toggle {\n  border: 1px solid #e7eced !important;\n  border-radius: 4px;\n  margin-left: 3px;\n  margin-right: 3px;\n  min-width: 30px;\n  font-family: Roboto-Light !important;\n  font-size: 14px;\n  outline: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-group:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-group {\n  background: transparent;\n  border: none;\n  outline: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-button:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-button {\n  outline: none !important;\n  min-width: 30px;\n  border: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-checked {\n  background: #2450a0;\n  min-width: 30px;\n  border: 1px solid #2450a0 !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-checked .mat-button-toggle-label-content {\n  color: white;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-group {\n  background: transparent;\n  border: none;\n  outline: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-disabled {\n  background-color: #2450a0;\n  color: white;\n  border: 1px solid #2450a0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2VjZWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90by1MaWdodCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogIzI0NTBhMDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI0NTBhMCAhaW1wb3J0YW50O1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICBsaW5lLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NTBhMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI0NTBhMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 62975:
/*!*************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-badges-table/component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtBadgesTableComponent": () => (/* binding */ CtBadgesTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _ct_badges_1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ct-badges-1/component */ 16078);












function CtBadgesTableComponent_div_0_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function CtBadgesTableComponent_div_0_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const value_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.remove(value_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
function CtBadgesTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 8)(3, "mat-chip-list", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CtBadgesTableComponent_div_0_mat_chip_5_Template, 4, 2, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CtBadgesTableComponent_div_0_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.applyFilter($event.target.value); })("matChipInputTokenEnd", function CtBadgesTableComponent_div_0_Template_input_matChipInputTokenEnd_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.tableData.metaData.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r4)("matChipInputSeparatorKeyCodes", ctx_r0.separatorKeysCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Items: ", ctx_r0.dataSource.filteredData.length, "");
} }
function CtBadgesTableComponent_div_3_div_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 21);
} }
function CtBadgesTableComponent_div_3_div_2_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtBadgesTableComponent_div_3_div_2_td_2_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const rowData_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.fetchRowNumberEdit(rowData_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function CtBadgesTableComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtBadgesTableComponent_div_3_div_2_th_1_Template, 1, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtBadgesTableComponent_div_3_div_2_td_2_Template, 3, 0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CtBadgesTableComponent_div_3_ng_template_3_div_0_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r26.tableData.metaData.display_names[i_r12], " ");
} }
const _c0 = function (a0) { return { "cursor": a0 }; };
const _c1 = function (a0) { return { "first-column": a0 }; };
function CtBadgesTableComponent_div_3_ng_template_3_div_0_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtBadgesTableComponent_div_3_ng_template_3_div_0_td_2_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const rowData_r30 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r31.fetchRowNumberView(rowData_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const index_r13 = ctx_r33.index;
    const i_r12 = ctx_r33.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r27.tableData.metaData.view ? "pointer" : "auto"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, index_r13 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r29[i_r12]);
} }
function CtBadgesTableComponent_div_3_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtBadgesTableComponent_div_3_ng_template_3_div_0_th_1_Template, 2, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtBadgesTableComponent_div_3_ng_template_3_div_0_td_2_Template, 2, 7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r34.tableData.metaData.display_names[i_r12], " ");
} }
function CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_td_1_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const rowData_r38 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r40.fetchRowNumberView(rowData_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ct-badges-1", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_td_1_Template_ct_badges_1_selected_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const idx_r39 = restoredCtx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r42.select($event, idx_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const index_r13 = ctx_r43.index;
    const i_r12 = ctx_r43.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r35.tableData.metaData.view ? "pointer" : "auto"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, index_r13 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("badges", element_r37[i_r12])("disabled", ctx_r35.tableData.metaData.disableBadges)("allSelected", ctx_r35.tableData.metaData.allSelected);
} }
function CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_th_0_Template, 2, 1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_td_1_Template, 2, 9, "td", 26);
} }
function CtBadgesTableComponent_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtBadgesTableComponent_div_3_ng_template_3_div_0_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtBadgesTableComponent_div_3_ng_template_3_ng_template_1_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const index_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.badgeCol != index_r13)("ngIfElse", _r24);
} }
function CtBadgesTableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtBadgesTableComponent_div_3_div_2_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CtBadgesTableComponent_div_3_ng_template_3_Template, 3, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matColumnDef", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r12 == "edit")("ngIfElse", _r15);
} }
function CtBadgesTableComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 30);
} }
function CtBadgesTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 31);
} }
class CtBadgesTableComponent {
    constructor() {
        this.editAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.viewAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.tableData = { data: [], metaData: {} };
        this.values = [];
        this.separatorKeysCodes = [13, 9, 188];
    }
    fetchRowNumberEdit(rowData) {
        this.rowNumber = this.tempDatasource.indexOf(rowData);
        this.editAction.next(this.rowNumber);
    }
    fetchRowNumberView(rowData) {
        this.rowNumber = this.tempDatasource.indexOf(rowData);
        this.viewAction.next(this.rowNumber);
    }
    update() {
        this.tableData = this.tableGridData;
        this.tempDatasource = this.tableGridData.data;
        this.editColumn();
        this.badgeColumn();
        this.tempDatasource = this.tableGridData.data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.tableData.data);
        this.dataSource.sort = this.sort;
    }
    editColumn() {
        if (this.tableData.metaData.edit) {
            this.tableData.metaData.column_names = this.tableData.metaData.column_names.concat(['edit']);
        }
    }
    badgeColumn() {
        if (this.tableData.metaData.badgesColumn != undefined) {
            this.badgeCol = this.tableData.metaData.column_names.indexOf(this.tableData.metaData.badgesColumn);
            if (typeof (this.tableData.data[0][this.tableData.metaData.badgesColumn]) != typeof ({})) {
                this.tableData.data.forEach(element => {
                    var converted = [{
                            "name": element[this.tableData.metaData.badgesColumn],
                            "key": element[this.tableData.metaData.badgesColumn],
                            "value": false
                        }];
                    element[this.tableData.metaData.badgesColumn] = converted;
                });
            }
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.values.push(value.trim());
            this.applyValues(this.values);
        }
        if (input) {
            input.value = '';
        }
    }
    remove(value) {
        const index = this.values.indexOf(value);
        if (index >= 0) {
            this.values.splice(index, 1);
            this.applyValues(this.values);
        }
        if (this.values.length == 0) {
            this.dataSource.filter = '';
        }
    }
    applyValues(value) {
        this.dataSource.data = this.tempDatasource;
        for (var i = 0; i < value.length; i++) {
            this.dataSource.filter = value[i].trim().toLowerCase();
            this.dataSource.data = this.dataSource.filteredData;
        }
    }
    select($event, index) {
        this.dataSource.data[index][this.tableData.metaData.badgesColumn] = $event;
    }
}
CtBadgesTableComponent.ɵfac = function CtBadgesTableComponent_Factory(t) { return new (t || CtBadgesTableComponent)(); };
CtBadgesTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtBadgesTableComponent, selectors: [["ct-badges-table"]], viewQuery: function CtBadgesTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { tableGridData: "tableGridData" }, outputs: { editAction: "editAction", viewAction: "viewAction" }, decls: 6, vars: 6, consts: [["style", "border-bottom:3px solid #f3f8fb; padding-bottom: 0.6125rem;", 4, "ngIf"], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "border-bottom", "3px solid #f3f8fb", "padding-bottom", "0.6125rem"], ["src", "../../../../assets/images/Serach.svg", 2, "padding-left", "2.1875rem", "margin-right", "0.9375rem"], ["appearance", "none", 2, "width", "80%"], ["aria-label", " selection "], ["chipList", ""], ["color", "primary", "selected", "true", 3, "removable", "removed", 4, "ngFor", "ngForOf"], [2, "width", "100%", "font-family", "Roboto-Light", "font-size", "0.8333vw", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "keyup", "matChipInputTokenEnd"], [2, "font-family", "Roboto-Light", "font-size", "0.8rem", "color", "rgba(0,0,0,0.6)"], ["color", "primary", "selected", "true", 3, "removable", "removed"], ["matChipRemove", ""], [3, "matColumnDef"], [4, "ngIf", "ngIfElse"], ["dataPart", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["style", "padding-right: 14px;", "mat-cell", "", "class", "edit", "align", "end", 3, "click", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", "align", "end", 1, "edit", 2, "padding-right", "14px", 3, "click"], ["mat-button", "", 2, "outline", "none"], ["badgePart", ""], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", "ngClass", "click", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngStyle", "ngClass", "click"], [3, "badges", "disabled", "allSelected", "selected"], ["mat-header-row", ""], ["mat-row", ""]], template: function CtBadgesTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtBadgesTableComponent_div_0_Template, 9, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CtBadgesTableComponent_div_3_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CtBadgesTableComponent_tr_4_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CtBadgesTableComponent_tr_5_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tableData.metaData.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableData.metaData.column_names);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.tableData.metaData.column_names)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.tableData.metaData.column_names);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ct_badges_1_component__WEBPACK_IMPORTED_MODULE_0__.CtBadges1Component, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow], styles: [".table-container[_ngcontent-%COMP%] {\n  height: 18.75rem;\n  overflow: auto;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  margin-right: 1.875rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  font-weight: bold;\n}\n\nth[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  font-family: Roboto-Medium !important;\n  font-size: 1.1vw;\n  color: rgba(150, 150, 150, 0.9);\n  border-bottom: none !important;\n}\n\ntd[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  cursor: pointer;\n  border-bottom: 1px dashed #e0e0e0 !important;\n  font-size: 0.937vw;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.edit[_ngcontent-%COMP%] {\n  font-size: 0.937;\n  font-weight: 500;\n  color: #004faa;\n}\n\n[_nghost-%COMP%]     .mat-standard-chip {\n  min-height: 26px !important;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ddd;\n  border-radius: 500px;\n  visibility: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ddd;\n  visibility: visible;\n}\n\n.first-column[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  color: #004faa;\n  font-family: Roboto-Medium !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0FBRUo7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSUo7O0FBQUU7RUFDRSwyQkFBQTtBQUdKOztBQUFFO0VBQ0UsVUFBQTtBQUdKOztBQUFFLFVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUdKOztBQUFFLFdBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUU7RUFDRSw0QkFBQTtBQUNKIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxOC43NXJlbTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6MnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbi1yaWdodDoxLjg3NXJlbTtcbiAgfVxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBcbiAgfVxuICB0ci5tYXQtaGVhZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICB0aHtcbiAgICBoZWlnaHQ6IDMuMTI1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjEuMXZ3O1xuICAgIGNvbG9yOiByZ2JhKDE1MCwxNTAsMTUwLDAuOSk7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIHRke1xuICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1ib3R0b206MXB4IGRhc2hlZCAjZTBlMGUwIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAuOTM3dnc7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICB9XG4gIFxuICAuZWRpdHtcbiAgICBmb250LXNpemU6IDAuOTM3O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDRmYWE7XG4gIH1cbiAgXG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1zdGFuZGFyZC1jaGlwe1xuICAgIG1pbi1oZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA3cHg7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIC50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyBcbiAgfVxuICAgXG4gIC8qIEhhbmRsZSAqL1xuICAudGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2RkZDsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIFxuICAvLyAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7IFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgXG4gIFxuICAuZmlyc3QtY29sdW1ue1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIGNvbG9yOiAjMDA0ZmFhO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9Il19 */"] });


/***/ }),

/***/ 74430:
/*!*******************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-badges/component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtBadgesComponent": () => (/* binding */ CtBadgesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ 68491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 72288);





function CtBadgesComponent_mat_button_toggle_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtBadgesComponent_mat_button_toggle_2_Template_mat_button_toggle_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const k_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggle(k_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const badge_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", badge_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r2.name);
} }
class CtBadgesComponent {
    constructor() {
        this.allSelected = false;
        this.disabled = false;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.selectedVal = [];
        this.options = [];
        this.selected = [];
        this.valueEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    toggle(k) {
        this.badges[k].value = !this.badges[k].value;
        this.selectionChange.next(this.badges);
    }
}
CtBadgesComponent.ɵfac = function CtBadgesComponent_Factory(t) { return new (t || CtBadgesComponent)(); };
CtBadgesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtBadgesComponent, selectors: [["ct-badges"]], inputs: { badges: "badges", allSelected: "allSelected", disabled: "disabled" }, outputs: { selectionChange: "selectionChange", selected: "selected", valueEmitter: "valueEmitter" }, decls: 3, vars: 3, consts: [["fxLayout", "row", 3, "disabled", "multiple"], ["group", "matButtonToggleGroup"], ["style", "text-align: center", "value", "badge.key", 3, "checked", "click", 4, "ngFor", "ngForOf"], ["value", "badge.key", 2, "text-align", "center", 3, "checked", "click"]], template: function CtBadgesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle-group", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CtBadgesComponent_mat_button_toggle_2_Template, 3, 2, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.badges);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggleGroup, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel], styles: ["[_nghost-%COMP%]     .mat-button-toggle {\n  border: 1px solid #e7eced !important;\n  border-radius: 4px;\n  margin-left: 3px;\n  margin-right: 3px;\n  min-width: 30px;\n  font-family: Roboto-Light !important;\n  font-size: 14px;\n  outline: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-group:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-group {\n  background: transparent;\n  border: none;\n  outline: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-button:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-button {\n  outline: none !important;\n  min-width: 30px;\n  border: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-checked {\n  background: #2450a0;\n  min-width: 30px;\n  border: 1px solid #2450a0 !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-checked .mat-button-toggle-label-content {\n  color: white;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-group {\n  background: transparent;\n  border: none;\n  outline: none !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-button-toggle-disabled {\n  background-color: #2450a0;\n  color: white;\n  border: 1px solid #2450a0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2VjZWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90by1MaWdodCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogIzI0NTBhMDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI0NTBhMCAhaW1wb3J0YW50O1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICBsaW5lLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NTBhMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI0NTBhMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 5752:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-barchart/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtBarChartComponent": () => (/* binding */ CtBarChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function CtBarChartComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().model;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getToolTip(model_r2.name), " ");
} }
function CtBarChartComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().model;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r2.value);
} }
function CtBarChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtBarChartComponent_ng_template_1_div_0_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtBarChartComponent_ng_template_1_ng_template_1_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1._chartMetaData.customToolTip)("ngIfElse", _r4);
} }
class CtBarChartComponent {
    constructor() {
        this.defaults = {
            view: [700, 300],
            gradient: false,
            showLegend: true,
            showXAxis: true,
            showXAxisLabel: true,
            showYAxis: true,
            showYAxisLabel: true,
            xAxisLabel: 'X',
            yAxisLabel: 'Y',
            scheme: {
                domain: ['#cad4f4', '#c7e5ee', '#bce7da', '#dfedcc', '#f7eac3', '#faddcb', '#f6c2bc', '#f3a7ab', '#EE958F']
            },
            legendTitle: 'Legend',
            legendPosition: 'right',
            dataLabel: true,
            customToolTip: false
        };
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    set metaData(meta) {
        this._chartMetaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._chartMetaData;
    }
    ngOnInit() {
    }
    onSelect($event) {
        this.selected.next($event);
    }
    getToolTip(name) {
        var element = this.data.find(d => d.name === name);
        return element.tooltipText || element.name + ' : ' + element.value;
    }
}
CtBarChartComponent.ɵfac = function CtBarChartComponent_Factory(t) { return new (t || CtBarChartComponent)(); };
CtBarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtBarChartComponent, selectors: [["ct-barchart"]], inputs: { data: "data", metaData: "metaData" }, outputs: { selected: "selected" }, decls: 3, vars: 12, consts: [[3, "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "showDataLabel", "select"], ["tooltipTemplate", ""], [4, "ngIf", "ngIfElse"], ["normal", ""]], template: function CtBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-bar-vertical", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function CtBarChartComponent_Template_ngx_charts_bar_vertical_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtBarChartComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("results", ctx.data)("view", ctx._chartMetaData.view)("scheme", ctx._chartMetaData.scheme)("gradient", ctx._chartMetaData.gradient)("xAxis", ctx._chartMetaData.showXAxis)("yAxis", ctx._chartMetaData.showYAxis)("legend", ctx._chartMetaData.showLegend)("showXAxisLabel", ctx._chartMetaData.showXAxisLabel)("showYAxisLabel", ctx._chartMetaData.showYAxisLabel)("xAxisLabel", ctx._chartMetaData.xAxisLabel)("yAxisLabel", ctx._chartMetaData.yAxisLabel)("showDataLabel", ctx._chartMetaData.dataLabel);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.BarVerticalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%]     .textDataLabel {\n  transform: translate(-8px, -4px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudGV4dERhdGFMYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLThweCwtNHB4KSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 30539:
/*!***************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-checkbox-table/component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtCheckboxTableComponent": () => (/* binding */ CtCheckboxTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ 72035);
/* harmony import */ var _ct_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ct-table/component */ 53489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ 66238);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);















function CtCheckboxTableComponent_div_0_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function CtCheckboxTableComponent_div_0_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const value_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.remove(value_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r9, " ");
} }
function CtCheckboxTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 12)(3, "mat-chip-list", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CtCheckboxTableComponent_div_0_mat_chip_5_Template, 4, 2, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CtCheckboxTableComponent_div_0_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.applyFilter($event.target.value); })("matChipInputTokenEnd", function CtCheckboxTableComponent_div_0_Template_input_matChipInputTokenEnd_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.tableData.metaData.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r7)("matChipInputSeparatorKeyCodes", ctx_r0.separatorKeysCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Items: ", ctx_r0.dataSource.filteredData.length, "");
} }
function CtCheckboxTableComponent_mat_grid_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-list", 20)(1, "mat-grid-tile", 21)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-grid-tile")(5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtCheckboxTableComponent_mat_grid_list_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r15.selection.clear(); return ctx_r15.selectedCount = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtCheckboxTableComponent_mat_grid_list_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.emitFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Selected ", ctx_r1.tableData.metaData.itemName, " (", ctx_r1.selectedCount, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.tableData.metaData.managerFunction);
} }
function CtCheckboxTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 26)(1, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CtCheckboxTableComponent_th_5_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); $event ? ctx_r18.masterToggle() : null; return ctx_r18.emitAllSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("aria-label", ctx_r2.checkboxLabel());
} }
function CtCheckboxTableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28)(1, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtCheckboxTableComponent_td_6_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function CtCheckboxTableComponent_td_6_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const row_r20 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); $event ? ctx_r22.selection.toggle(row_r20) : null; return ctx_r22.emitSelected(row_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r20))("aria-label", ctx_r3.checkboxLabel(row_r20));
} }
function CtCheckboxTableComponent_div_7_div_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 26);
} }
function CtCheckboxTableComponent_div_7_div_2_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtCheckboxTableComponent_div_7_div_2_td_2_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const rowData_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r33.fetchRowNumberEdit(rowData_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function CtCheckboxTableComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtCheckboxTableComponent_div_7_div_2_th_1_Template, 1, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtCheckboxTableComponent_div_7_div_2_td_2_Template, 3, 0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CtCheckboxTableComponent_div_7_ng_template_3_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r35.tableData.metaData.display_names[i_r24], " ");
} }
const _c0 = function (a0) { return { "cursor": a0 }; };
const _c1 = function (a0) { return { "first-column": a0 }; };
function CtCheckboxTableComponent_div_7_ng_template_3_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtCheckboxTableComponent_div_7_ng_template_3_td_1_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const rowData_r39 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r40.fetchRowNumberView(rowData_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const index_r25 = ctx_r42.index;
    const i_r24 = ctx_r42.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r36.tableData.metaData.view ? "pointer" : "auto"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, index_r25 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r38[i_r24]);
} }
function CtCheckboxTableComponent_div_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtCheckboxTableComponent_div_7_ng_template_3_th_0_Template, 2, 1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtCheckboxTableComponent_div_7_ng_template_3_td_1_Template, 2, 7, "td", 37);
} }
function CtCheckboxTableComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtCheckboxTableComponent_div_7_div_2_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CtCheckboxTableComponent_div_7_ng_template_3_Template, 2, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = ctx.$implicit;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matColumnDef", i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r24 == "edit")("ngIfElse", _r27);
} }
function CtCheckboxTableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 40);
} }
function CtCheckboxTableComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 41);
} }
class CtCheckboxTableComponent extends _ct_table_component__WEBPACK_IMPORTED_MODULE_0__.CtTableComponent {
    constructor() {
        super(...arguments);
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.manager = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.tableData = { data: [], metaData: {} };
        this.values = [];
        this.selectedCount = 0;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__.SelectionModel(true, []);
    }
    update(spinner) {
        this.tableData = this.tableGridData;
        if (this.tableData.metaData.column_names.indexOf("select") == -1) {
            this.tableData.metaData.column_names.unshift("select");
        }
        this.tempDatasource = this.tableGridData.data;
        this.editColumn();
        this.tempDatasource = this.tableGridData.data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.tableData.data);
        this.dataSource.sort = this.sort;
        this.defaultSelected();
        if (spinner) {
            setTimeout(() => {
                spinner.hide();
            }, 0);
        }
    }
    defaultSelected() {
        this.selectedCount = 0;
        let tempSelected = [];
        this.tableData.data.forEach((element, index) => {
            if (element[this.tableGridData.metaData.selectAttr]) {
                tempSelected.push(element);
                this.selectedCount += 1;
            }
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__.SelectionModel(true, tempSelected);
        });
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.filteredData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.selectedCount = 0;
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.dataSource.filteredData.forEach(row => { this.selection.select(row); this.selectedCount += 1; });
        }
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    emitSelected(row) {
        this.selection.isSelected(row) ? this.selectedCount += 1 : this.selectedCount -= 1;
        row[this.tableGridData.metaData.selectAttr] = !row[this.tableGridData.metaData.selectAttr];
        this.selected.next(this.selection.selected);
    }
    emitAllSelected() {
        this.toggleAllSelected();
        this.selected.next(this.selection.selected);
    }
    toggleAllSelected() {
        if (this.selection.selected.length != 0) {
            this.tableData.data.forEach(element => {
                element[this.tableGridData.metaData.selectAttr] = true;
            });
        }
        else {
            this.tableData.data.forEach(element => {
                element[this.tableGridData.metaData.selectAttr] = false;
            });
        }
    }
    log($event) {
    }
    emitFunction() {
        this.manager.emit(true);
    }
}
CtCheckboxTableComponent.ɵfac = /*@__PURE__*/ function () { let ɵCtCheckboxTableComponent_BaseFactory; return function CtCheckboxTableComponent_Factory(t) { return (ɵCtCheckboxTableComponent_BaseFactory || (ɵCtCheckboxTableComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CtCheckboxTableComponent)))(t || CtCheckboxTableComponent); }; }();
CtCheckboxTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtCheckboxTableComponent, selectors: [["ct-checkbox-table"]], viewQuery: function CtCheckboxTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { tableGridData: "tableGridData" }, outputs: { selected: "selected", manager: "manager" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 10, consts: [["style", "border-bottom:3px solid #ddf3fc; padding-bottom: 0.6125rem;", 4, "ngIf"], ["class", "selected-manager", "cols", "3", "rowHeight", "8:1", 4, "ngIf"], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "border-bottom", "3px solid #ddf3fc", "padding-bottom", "0.6125rem"], ["src", "../../../../assets/images/Serach.svg", 2, "padding-left", "2.1875rem", "margin-right", "0.9375rem"], ["appearance", "none", 2, "width", "80%"], ["aria-label", " selection "], ["chipList", ""], ["color", "primary", "selected", "true", 3, "removable", "removed", 4, "ngFor", "ngForOf"], [2, "width", "100%", "font-family", "Roboto-Light", "font-size", "0.8333vw", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "keyup", "matChipInputTokenEnd"], [2, "font-family", "Roboto-Light", "font-size", "0.8rem", "color", "rgba(0,0,0,0.6)"], ["color", "primary", "selected", "true", 3, "removable", "removed"], ["matChipRemove", ""], ["cols", "3", "rowHeight", "8:1", 1, "selected-manager"], ["colspan", "2", "rowspan", "1", 2, "justify-content", "flex-start !important", "margin-left", "2rem"], [2, "color", "rgba(112,112,126,1)", "font-family", "Roboto-Medium !important"], ["mat-button", "", 2, "color", "#004faa", "outline", "none", 3, "click"], [2, "font-family", "Roboto-Light !important"], [2, "font-family", "Roboto-Medium !important"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], [3, "matColumnDef"], [4, "ngIf", "ngIfElse"], ["dataPart", ""], ["style", "padding-right: 14px;", "mat-cell", "", "class", "edit", "align", "end", 3, "click", 4, "matCellDef"], ["mat-cell", "", "align", "end", 1, "edit", 2, "padding-right", "14px", 3, "click"], ["mat-button", "", 2, "outline", "none"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", "ngClass", "click", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngStyle", "ngClass", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CtCheckboxTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtCheckboxTableComponent_div_0_Template, 9, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtCheckboxTableComponent_mat_grid_list_1_Template, 11, 3, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CtCheckboxTableComponent_th_5_Template, 2, 3, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CtCheckboxTableComponent_td_6_Template, 2, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CtCheckboxTableComponent_div_7_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CtCheckboxTableComponent_tr_9_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CtCheckboxTableComponent_tr_10_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tableData.metaData.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedCount != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, ctx.tableData.metaData.column_names, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.tableData.metaData.column_names)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.tableData.metaData.column_names);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipInput, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridTile, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe], styles: [".table-container[_ngcontent-%COMP%] {\n  height: 24rem;\n  overflow: auto;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  margin-right: 1.875rem;\n  margin-top: 0.625rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.selected-manager[_ngcontent-%COMP%] {\n  background-color: #ddf3fc;\n}\n\n[_nghost-%COMP%]     .mat-grid-tile:nth-child(1) .mat-figure {\n  justify-content: flex-start;\n}\n\n[_nghost-%COMP%]     .mat-grid-tile:nth-child(2) .mat-figure {\n  margin-right: 2rem;\n  justify-content: flex-end;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 8px !important;\n  font-weight: bold;\n}\n\nth[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  font-family: Roboto-Medium !important;\n  font-size: 1.1vw;\n  color: rgba(150, 150, 150, 0.9);\n  border-bottom: none !important;\n}\n\ntd[_ngcontent-%COMP%] {\n  height: 8px !important;\n  cursor: pointer;\n  border-bottom: 1px dashed #e0e0e0 !important;\n  font-size: 0.937vw;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.edit[_ngcontent-%COMP%] {\n  font-size: 0.937;\n  font-weight: 500;\n  color: #004faa;\n}\n\n[_nghost-%COMP%]     .mat-standard-chip {\n  min-height: 26px !important;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ddd;\n  border-radius: 500px;\n  visibility: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ddd;\n  visibility: visible;\n}\n\n.first-column[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  color: #004faa;\n  font-family: Roboto-Medium !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-frame {\n  background: none;\n  border: 1px solid #8E8E8E;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background: none;\n  border: 1px solid #004FAA;\n  color: #004FAA;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checkmark-path {\n  stroke: #004FAA !important;\n}\n\n[_nghost-%COMP%]     .mat-ripple-element {\n  background: #004FAA !important;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-mixedmark {\n  background-color: white;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ddd;\n  border-radius: 500px;\n  visibility: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ddd;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUNBLFVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBLFdBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQU9BO0VBQ0UsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7QUFKRjs7QUFPQSxVQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQSxXQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBTEYiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctbGVmdDoycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6MS44NzVyZW07XG4gIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiBcbn1cblxuLnNlbGVjdGVkLW1hbmFnZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGYzZmM7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWdyaWQtdGlsZTpudGgtY2hpbGQoMSkgLm1hdC1maWd1cmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IFxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1ncmlkLXRpbGU6bnRoLWNoaWxkKDIpIC5tYXQtZmlndXJlIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnRoe1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6MS4xdnc7XG4gIGNvbG9yOiByZ2JhKDE1MCwxNTAsMTUwLDAuOSk7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbnRke1xuICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206MXB4IGRhc2hlZCAjZTBlMGUwIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjkzN3Z3O1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG59XG5cbi5lZGl0e1xuICBmb250LXNpemU6IDAuOTM3O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwNGZhYTtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zdGFuZGFyZC1jaGlwe1xuICBtaW4taGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDdweDtcbn1cblxuLyogVHJhY2sgKi9cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjsgXG59XG4gXG4vKiBIYW5kbGUgKi9cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2RkZDsgXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8vIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkOyBcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuXG4uZmlyc3QtY29sdW1ue1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgY29sb3I6ICMwMDRmYWE7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3ggLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJhY2tncm91bmQ6bm9uZTtcbiAgYm9yZGVyOjFweCBzb2xpZCAjOEU4RThFO1xufVxuXG46aG9zdCAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6bm9uZTtcbiAgYm9yZGVyOjFweCBzb2xpZCAjMDA0RkFBO1xuICBjb2xvcjogIzAwNEZBQTsgXG59XG46aG9zdCAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICBzdHJva2U6ICMwMDRGQUEhaW1wb3J0YW50O1xufVxuXG46aG9zdCAgOjpuZy1kZWVwIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjMDA0RkFBICFpbXBvcnRhbnQ7XG59XG5cbi8vIDpob3N0IDpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjpub25lICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4vLyB9XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94LW1peGVkbWFya3tcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDdweDtcbn1cblxuLyogVHJhY2sgKi9cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjsgXG59XG4gXG4vKiBIYW5kbGUgKi9cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2RkZDsgXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8vIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkOyBcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */"] });


/***/ }),

/***/ 82900:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-checkbox/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtCheckboxComponent": () => (/* binding */ CtCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);




class CtCheckboxComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.changeListener = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isChecked = false;
    }
    ngOnInit() {
        this.control = this.fd.formGroup.get(this.field.name);
        this.isChecked = this.control.value == true;
        this.control.valueChanges.subscribe(value => {
            this.changeListener.next(value);
        });
    }
    changed() {
        this.isChecked = this.control.value == true;
        this.valueChange.next(this.control.value);
    }
}
CtCheckboxComponent.ɵfac = function CtCheckboxComponent_Factory(t) { return new (t || CtCheckboxComponent)(); };
CtCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtCheckboxComponent, selectors: [["ct-checkbox"]], inputs: { field: "field", fd: "fd" }, outputs: { valueChange: "valueChange", changeListener: "changeListener" }, decls: 3, vars: 2, consts: [[1, "align-center"], [1, "align-margin", 3, "formControl", "change"]], template: function CtCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "mat-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CtCheckboxComponent_Template_mat_checkbox_change_1_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], styles: ["[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-frame {\n  background: none;\n  border: 1px solid #8E8E8E;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #004FAA;\n  color: #004FAA;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checkmark-path {\n  stroke: #004FAA !important;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent {\n  background: none !important;\n  border: 1px solid #004FAA;\n  color: #004FAA;\n}\n\n[_nghost-%COMP%]     .mat-ripple-element {\n  background: #004FAA !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZ0JBQUE7RUFDQSx5QkFBQTtBQUNIOztBQU1DO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFISDs7QUFLQztFQUNFLDBCQUFBO0FBRkg7O0FBS0M7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUZIOztBQUtDO0VBQ0UsOEJBQUE7QUFGSCIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgYmFja2dyb3VuZDpub25lO1xuICAgYm9yZGVyOjFweCBzb2xpZCAjOEU4RThFO1xuIH1cbiBcbiAvLyA6aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIFxuIC8vIH1cbiBcbiA6aG9zdCAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgIGJhY2tncm91bmQ6bm9uZTtcbiAgIGJvcmRlcjoxcHggc29saWQgIzAwNEZBQTtcbiAgIGNvbG9yOiAjMDA0RkFBOyBcbiB9XG4gOmhvc3QgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgIHN0cm9rZTogIzAwNEZBQSFpbXBvcnRhbnQ7XG4gfVxuIFxuIDpob3N0ICA6Om5nLWRlZXAgIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50e1xuICAgYmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XG4gICBib3JkZXI6MXB4IHNvbGlkICMwMDRGQUE7XG4gICBjb2xvcjogIzAwNEZBQTsgXG4gfVxuIFxuIDpob3N0ICA6Om5nLWRlZXAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICBiYWNrZ3JvdW5kOiAjMDA0RkFBICFpbXBvcnRhbnQ7XG4gfSJdfQ== */"] });


/***/ }),

/***/ 94128:
/*!**************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-danger-button/component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtDangerButtonComponent": () => (/* binding */ CtDangerButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);




const _c0 = function (a0, a1) { return { "color": a0, "border": a1 }; };
class CtDangerButtonComponent {
    constructor() {
        this.isDisabled = false;
        this.login = false;
    }
}
CtDangerButtonComponent.ɵfac = function CtDangerButtonComponent_Factory(t) { return new (t || CtDangerButtonComponent)(); };
CtDangerButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtDangerButtonComponent, selectors: [["ct-danger-button"]], inputs: { name: "name", tooltip: "tooltip", isDisabled: "isDisabled", login: "login" }, decls: 3, vars: 7, consts: [["mat-raised-button", "", 3, "disabled", "ngStyle", "matTooltip"], [1, "btn-txt"]], template: function CtDangerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.login ? "#FFFFFF" : "#E52423", ctx.login ? "1px solid #FFFFFF" : "1px solid #E52423"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  background: transparent;\n  font-family: Roboto-Medium !important;\n  text-align: center;\n  line-height: 22px;\n  outline: none;\n  margin: 0.625rem 0.625rem;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Roboto-Light !important;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgYnV0dG9ue1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjE2KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMC42MjVyZW0gMC42MjVyZW07XG59XG5cbi5idG4tdHh0e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTGlnaHQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDFyZW07XG59Il19 */"] });


/***/ }),

/***/ 37174:
/*!***********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-datepicker/component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTDatePickerComponent": () => (/* binding */ CTDatePickerComponent),
/* harmony export */   "DateFormat": () => (/* binding */ DateFormat)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);









function CTDatePickerComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DateFormat extends _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.NativeDateAdapter {
    constructor() {
        super(...arguments);
        this.useUtcForDisplay = true;
    }
    parse(value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            const str = value.split('/');
            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const date = Number(str[0]);
            return new Date(year, month, date);
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    }
}
DateFormat.ɵfac = /*@__PURE__*/ function () { let ɵDateFormat_BaseFactory; return function DateFormat_Factory(t) { return (ɵDateFormat_BaseFactory || (ɵDateFormat_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DateFormat)))(t || DateFormat); }; }();
DateFormat.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DateFormat, factory: DateFormat.ɵfac });
class CTDatePickerComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.today = new Date();
        dateAdapter.setLocale('en-in');
    }
    ngOnInit() {
        this.control = this.fd.formGroup.get(this.field.name);
        this.control.setValue(this.today);
    }
    dateChange($event) {
        this.control.setValue(moment__WEBPACK_IMPORTED_MODULE_0__(this.control.value).format("YYYY-MM-DD"));
    }
}
CTDatePickerComponent.ɵfac = function CTDatePickerComponent_Factory(t) { return new (t || CTDatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.DateAdapter)); };
CTDatePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CTDatePickerComponent, selectors: [["ct-date"]], inputs: { field: "field", fd: "fd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.DateAdapter, useClass: DateFormat },
        ])], decls: 8, vars: 6, consts: [["appearance", "fill", 1, "col-md-12"], ["class", "optional", 4, "ngIf"], ["matInput", "", 3, "matDatepicker", "required", "formControl", "dateChange"], ["matSuffix", "", 2, "outline", "none", 3, "for"], [2, "outline", "none"], ["picker", ""], [1, "optional"]], template: function CTDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CTDatePickerComponent_span_3_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function CTDatePickerComponent_Template_input_dateChange_4_listener($event) { return ctx.dateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 3)(6, "mat-datepicker", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.field.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("required", ctx.field.isRequired)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepicker], styles: ["[_nghost-%COMP%]     .mat-form-field .mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular !important;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  letter-spacing: 0;\n  padding: 0;\n  height: 4.8vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #F8F8F8 !important;\n  padding: 0px 4px 8px 14px !important;\n  height: 5.5vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label {\n  font-family: Roboto-Regular !important;\n  font-size: 12px;\n  color: black;\n  letter-spacing: 0;\n  opacity: 0.54;\n  padding-bottom: 2px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field .mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular !important;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-input-element::-moz-placeholder {\n  opacity: 0.34;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  opacity: 0.34;\n}\n\n.optional[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n[_nghost-%COMP%]     .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button {\n  display: block;\n  font-size: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUNEOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNELFVBQUE7RUFDQSxhQUFBO0FBQUQ7O0FBR0E7RUFDQyw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQUFEOztBQUdBO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDQyxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQUQ7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBREE7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FBQUQiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhciAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRjb2xvcjogIzAwNEZBQTtcclxuXHRsZXR0ZXItc3BhY2luZzogMDtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0cGFkZGluZzowO1xyXG5cdGhlaWdodDogNC44dmg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcblx0YmFja2dyb3VuZDogI0Y4RjhGOCAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6MHB4IDRweCA4cHggMTRweCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogNS41dmg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgb3BhY2l0eTogMC41NDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcblx0Zm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGNvbG9yOiAjMDA0RkFBO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye1xyXG4gIG9wYWNpdHk6IDAuMzQ7XHJcbn1cclxuXHJcbi5vcHRpb25hbHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQ6bm90KC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSkgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IGluaGVyaXQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 87179:
/*!*******************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-dialog/component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtDialogComponent": () => (/* binding */ CtDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _ct_primary_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ct-primary-button/component */ 94654);
/* harmony import */ var _ct_secondary_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ct-secondary-button/component */ 41396);





class CtDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.primary = 'save';
    }
    doPrimary() {
        this.save.next();
    }
    close() {
        this.dialogRef.close();
    }
}
CtDialogComponent.ɵfac = function CtDialogComponent_Factory(t) { return new (t || CtDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
CtDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CtDialogComponent, selectors: [["ct-dialog"]], inputs: { title: "title", content: "content", primary: "primary" }, outputs: { save: "save" }, decls: 7, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "name", "click"], ["name", "Cancel", 3, "click"]], template: function CtDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "ct-primary-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CtDialogComponent_Template_ct_primary_button_click_5_listener() { return ctx.doPrimary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ct-secondary-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CtDialogComponent_Template_ct_secondary_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n", ctx.content, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", ctx.primary);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _ct_primary_button_component__WEBPACK_IMPORTED_MODULE_0__.CTPrimaryButtonComponent, _ct_secondary_button_component__WEBPACK_IMPORTED_MODULE_1__.CTSecondaryyButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35325:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-dropdown/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTDropDownComponent": () => (/* binding */ CTDropDownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 84369);







function CTDropDownComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CTDropDownComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CTDropDownComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CTDropDownComponent_mat_option_6_Template_mat_option_valueChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const list_r4 = restoredCtx.$implicit; return list_r4.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", list_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r4.text, " ");
} }
function CTDropDownComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.field.errorId, " ");
} }
class CTDropDownComponent {
    constructor() {
        this.multiselect = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.textChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.changeListener = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.control = this.fd.formGroup.get(this.field.name);
        this.control.valueChanges.subscribe(value => {
            this.changeListener.next(value);
        });
    }
    currentValue(value) {
        this.valueChange.next(value);
    }
    currentText($event) {
        this.textChange.next($event.source.selected.viewValue);
    }
}
CTDropDownComponent.ɵfac = function CTDropDownComponent_Factory(t) { return new (t || CTDropDownComponent)(); };
CTDropDownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTDropDownComponent, selectors: [["ct-dropdown"]], inputs: { field: "field", fd: "fd", multiselect: "multiselect" }, outputs: { valueChange: "valueChange", textChange: "textChange", changeListener: "changeListener" }, decls: 9, vars: 9, consts: [["appearance", "fill", 1, "col-md-12"], ["class", "optional", 4, "ngIf"], ["disableOptionCentering", "true", 3, "multiple", "required", "placeholder", "formControl", "selectionChange"], [4, "ngIf"], [3, "value", "valueChange", 4, "ngFor", "ngForOf"], [1, "optional"], [3, "value", "valueChange"]], template: function CTDropDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CTDropDownComponent_span_3_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CTDropDownComponent_Template_mat_select_selectionChange_4_listener($event) { ctx.currentValue($event.value); return ctx.currentText($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CTDropDownComponent_mat_option_5_Template, 2, 0, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CTDropDownComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CTDropDownComponent_div_8_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.field.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.field.placeHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", ctx.multiselect)("required", ctx.field.isRequired)("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.field.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fd.lists[ctx.field.name]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError], styles: ["[_nghost-%COMP%]     .mat-form-field-infix {\n  font-family: Roboto-Medium !important;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  letter-spacing: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #F8F8F8;\n  padding: 8px 4px 8px 14px !important;\n  height: 5.5vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label {\n  font-family: Roboto-Regular !important;\n  font-size: 12px;\n  color: black;\n  letter-spacing: 0;\n  opacity: 0.54;\n  padding-bottom: 2px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular !important;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-select-value {\n  font-family: Roboto-Medium !important;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n[_nghost-%COMP%]     .mat-select-value-text span {\n  font-family: Roboto-Medium !important;\n}\n\n[_nghost-%COMP%]     .mat-input-element::-moz-placeholder {\n  opacity: 0.34;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  opacity: 0.34;\n}\n\n.optional[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFLRTtFQUNFLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFPQTtFQUNFLHFDQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFRRTtFQUNFLHFDQUFBO0FBTEo7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBS0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU0KTtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBwYWRkaW5nOjA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICBwYWRkaW5nOjhweCA0cHggOHB4IDE0cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUuNXZoO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIG9wYWNpdHk6IDAuNTQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcclxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwNEZBQTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye1xyXG4gIG9wYWNpdHk6IDAuMzQ7XHJcbn1cclxuXHJcbi5vcHRpb25hbHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 89652:
/*!***************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-editable-table/component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtEditableTableComponent": () => (/* binding */ CtEditableTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _ct_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ct-table/component */ 53489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 65342);














function CtEditableTableComponent_div_0_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function CtEditableTableComponent_div_0_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const value_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.remove(value_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r6, " ");
} }
function CtEditableTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 8)(3, "mat-chip-list", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CtEditableTableComponent_div_0_mat_chip_5_Template, 4, 2, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CtEditableTableComponent_div_0_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.applyFilter($event.target.value); })("matChipInputTokenEnd", function CtEditableTableComponent_div_0_Template_input_matChipInputTokenEnd_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.tableData.metaData.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r4)("matChipInputSeparatorKeyCodes", ctx_r0.separatorKeysCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Items: ", ctx_r0.dataSource.filteredData.length, "");
} }
function CtEditableTableComponent_div_3_div_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 21);
} }
function CtEditableTableComponent_div_3_div_2_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CtEditableTableComponent_div_3_div_2_td_2_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const rowData_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.fetchRowNumberEdit(rowData_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function CtEditableTableComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtEditableTableComponent_div_3_div_2_th_1_Template, 1, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtEditableTableComponent_div_3_div_2_td_2_Template, 3, 0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CtEditableTableComponent_div_3_ng_template_3_div_0_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r26.tableData.metaData.display_names[i_r12], " ");
} }
function CtEditableTableComponent_div_3_ng_template_3_div_0_td_2_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r32.tableData.metaData.error, " ");
} }
const _c0 = function (a0) { return { "cursor": a0 }; };
const _c1 = function (a0) { return { "first-column": a0 }; };
function CtEditableTableComponent_div_3_ng_template_3_div_0_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26)(1, "mat-form-field", 27)(2, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CtEditableTableComponent_div_3_ng_template_3_div_0_td_2_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const element_r29 = restoredCtx.$implicit; const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; return (element_r29[i_r12] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CtEditableTableComponent_div_3_ng_template_3_div_0_td_2_mat_error_3_Template, 2, 1, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const rowData_r30 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const index_r13 = ctx_r36.index;
    const i_r12 = ctx_r36.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r27.tableData.metaData.view ? "pointer" : "auto"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, index_r13 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", true)("formControl", ctx_r27.controls[rowData_r30["idx"]][i_r12])("ngModel", element_r29[i_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.controls[rowData_r30["idx"]][i_r12].errors);
} }
function CtEditableTableComponent_div_3_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtEditableTableComponent_div_3_ng_template_3_div_0_th_1_Template, 2, 1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtEditableTableComponent_div_3_ng_template_3_div_0_td_2_Template, 4, 10, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CtEditableTableComponent_div_3_ng_template_3_ng_template_1_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r37.tableData.metaData.display_names[i_r12], " ");
} }
function CtEditableTableComponent_div_3_ng_template_3_ng_template_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const index_r13 = ctx_r42.index;
    const i_r12 = ctx_r42.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r38.tableData.metaData.view ? "pointer" : "auto"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, index_r13 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r40[i_r12], " ");
} }
function CtEditableTableComponent_div_3_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtEditableTableComponent_div_3_ng_template_3_ng_template_1_th_0_Template, 2, 1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtEditableTableComponent_div_3_ng_template_3_ng_template_1_td_1_Template, 2, 7, "td", 25);
} }
function CtEditableTableComponent_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtEditableTableComponent_div_3_ng_template_3_div_0_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtEditableTableComponent_div_3_ng_template_3_ng_template_1_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const index_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.editable[index_r13])("ngIfElse", _r24);
} }
function CtEditableTableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CtEditableTableComponent_div_3_div_2_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CtEditableTableComponent_div_3_ng_template_3_Template, 3, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matColumnDef", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r12 == "edit")("ngIfElse", _r15);
} }
function CtEditableTableComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 32);
} }
function CtEditableTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 33);
} }
const _c2 = function (a0, a1) { return { "table-container": a0, "table-container-fullscreen": a1 }; };
class CtEditableTableComponent extends _ct_table_component__WEBPACK_IMPORTED_MODULE_0__.CtTableComponent {
    constructor() {
        super(...arguments);
        this.fullscreen = false;
        this.tableData = { data: [], metaData: {
                editable_columns: [],
                column_names: [],
                display_names: {}
            } };
        this.controls = [];
        this.separatorKeysCodes = [13, 9, 188];
    }
    update(spinner) {
        this.tableGridData.data.forEach((element, idx) => {
            element['idx'] = idx;
        });
        this.tableData = this.tableGridData;
        this.tempDatasource = this.tableGridData.data;
        this.setEditableColumn();
        this.tempDatasource = this.tableGridData.data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.tableData.data);
        this.initFormControlArray();
        this.dataSource.sort = this.sort;
        if (spinner) {
            setTimeout(() => {
                spinner.hide();
            }, 0);
        }
    }
    setEditableColumn() {
        this.editable = [];
        this.tableData.metaData.column_names.forEach(element => {
            if (this.tableData.metaData.editable_columns.indexOf(element) > -1) {
                this.editable.push(true);
            }
            else {
                this.editable.push(false);
            }
        });
        this.tableData.metaData.editable_columns;
    }
    initFormControlArray() {
        this.tableData.data.forEach(element => {
            let controller = {};
            this.tableData.metaData.editable_columns.forEach(col => {
                var validations = [];
                if (this.tableData.metaData.validations[col] != undefined) {
                    if (this.tableData.metaData.validations[col].maxLength != undefined) {
                        validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(this.tableData.metaData.validations[col].maxLength));
                    }
                    if (this.tableData.metaData.validations[col].pattern != undefined) {
                        validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.tableData.metaData.validations[col].pattern));
                    }
                    if (this.tableData.metaData.validations[col].minLength != undefined) {
                        validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(this.tableData.metaData.validations[col].minLength));
                    }
                    if (this.tableData.metaData.validations[col].maxValue != undefined) {
                        validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(this.tableData.metaData.validations[col].maxValue));
                    }
                    if (this.tableData.metaData.validations[col].minValue != undefined) {
                        validations.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(this.tableData.metaData.validations[col].minValue));
                    }
                }
                controller[col] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', validations);
                controller[col].markAsTouched();
                controller[col].value = (controller[col].value).trim();
            });
            this.controls.push(controller);
        });
    }
}
CtEditableTableComponent.ɵfac = /*@__PURE__*/ function () { let ɵCtEditableTableComponent_BaseFactory; return function CtEditableTableComponent_Factory(t) { return (ɵCtEditableTableComponent_BaseFactory || (ɵCtEditableTableComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CtEditableTableComponent)))(t || CtEditableTableComponent); }; }();
CtEditableTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtEditableTableComponent, selectors: [["ct-editable-table"]], viewQuery: function CtEditableTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { tableGridData: "tableGridData", fullscreen: "fullscreen" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 10, consts: [["style", "border-bottom:3px solid #f3f8fb; padding-bottom: 0.6125rem;", 4, "ngIf"], [3, "ngClass"], ["mat-table", "", "matSort", "", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "border-bottom", "3px solid #f3f8fb", "padding-bottom", "0.6125rem"], ["src", "../../../../assets/images/Serach.svg", 2, "padding-left", "2.1875rem", "margin-right", "0.9375rem"], ["appearance", "none", 2, "width", "80%"], ["aria-label", " selection "], ["chipList", ""], ["color", "primary", "selected", "true", 3, "removable", "removed", 4, "ngFor", "ngForOf"], [2, "font-family", "Roboto-Light", "font-size", "0.8333vw", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "keyup", "matChipInputTokenEnd"], [2, "font-family", "Roboto-Light", "font-size", "0.8rem", "color", "rgba(0,0,0,0.6)"], ["color", "primary", "selected", "true", 3, "removable", "removed"], ["matChipRemove", ""], [3, "matColumnDef"], [4, "ngIf", "ngIfElse"], ["dataPart", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["style", "padding-right: 14px;", "mat-cell", "", "class", "edit", "align", "end", 3, "click", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", "align", "end", 1, "edit", 2, "padding-right", "14px", 3, "click"], ["mat-button", "", 2, "outline", "none"], ["nonEditable", ""], ["mat-cell", "", 3, "ngStyle", "ngClass", 4, "matCellDef"], ["mat-cell", "", 3, "ngStyle", "ngClass"], ["appearance", "none"], ["matInput", "", 2, "border-bottom", "1px dashed rgba(0,0,0,0.6)", "margin-bottom", "0.8rem", 3, "required", "formControl", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function CtEditableTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtEditableTableComponent_div_0_Template, 9, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CtEditableTableComponent_div_3_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CtEditableTableComponent_tr_4_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CtEditableTableComponent_tr_5_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tableData.metaData.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c2, ctx.fullscreen == false, ctx.fullscreen == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableData.metaData.column_names);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.tableData.metaData.column_names)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.tableData.metaData.column_names);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipInput, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow], styles: [".table-container[_ngcontent-%COMP%] {\n  height: 24rem;\n  overflow: auto;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  margin-right: 1.875rem;\n}\n\n.table-container-fullscreen[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  margin-right: 1.875rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  font-weight: bold;\n}\n\nth[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  font-family: Roboto-Medium !important;\n  font-size: 1.1vw;\n  color: rgba(150, 150, 150, 0.9);\n  border-bottom: none !important;\n}\n\ntd[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  cursor: pointer;\n  border-bottom: 1px dashed #e0e0e0 !important;\n  font-size: 0.937vw;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.edit[_ngcontent-%COMP%] {\n  font-size: 0.937;\n  font-weight: 500;\n  color: #004faa;\n}\n\n[_nghost-%COMP%]     .mat-standard-chip {\n  min-height: 26px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  width: auto;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ddd;\n  border-radius: 500px;\n  visibility: hidden;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ddd;\n  visibility: visible;\n}\n\n.first-column[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  color: #004faa;\n  font-family: Roboto-Medium !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUFBLFVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUdGOztBQUFBLFdBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjRyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6MnJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OjEuODc1cmVtO1xufVxuXG4udGFibGUtY29udGFpbmVyLWZ1bGxzY3JlZW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6MnJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OjEuODc1cmVtO1xufVxuXG5cbnRhYmxlIHsgXG4gIHdpZHRoOiAxMDAlO1xuIFxufVxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnRoe1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6MS4xdnc7XG4gIGNvbG9yOiByZ2JhKDE1MCwxNTAsMTUwLDAuOSk7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbnRke1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206MXB4IGRhc2hlZCAjZTBlMGUwIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjkzN3Z3O1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG59XG5cbi5lZGl0e1xuICBmb250LXNpemU6IDAuOTM3O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwNGZhYTtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zdGFuZGFyZC1jaGlwe1xuICBtaW4taGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgd2lkdGg6YXV0bztcbn1cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDdweDtcbn1cblxuLyogVHJhY2sgKi9cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjsgXG59XG4gXG4vKiBIYW5kbGUgKi9cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2RkZDsgXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8vIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkOyBcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuXG4uZmlyc3QtY29sdW1ue1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgY29sb3I6ICMwMDRmYWE7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 28975:
/*!*****************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-grouped-barchart/component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtGroupedBarChartComponent": () => (/* binding */ CtGroupedBarChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function CtGroupedBarChartComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().model;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getToolTip(model_r2.name), " ");
} }
function CtGroupedBarChartComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().model;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r2.value);
} }
function CtGroupedBarChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtGroupedBarChartComponent_ng_template_1_div_0_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtGroupedBarChartComponent_ng_template_1_ng_template_1_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1._chartMetaData.customToolTip)("ngIfElse", _r4);
} }
class CtGroupedBarChartComponent {
    constructor() {
        this.defaults = {
            view: [700, 300],
            gradient: false,
            showLegend: true,
            showXAxis: true,
            showXAxisLabel: true,
            showYAxis: true,
            showYAxisLabel: true,
            xAxisLabel: 'X',
            yAxisLabel: 'Y',
            scheme: {
                domain: ['#cad4f4', '#c7e5ee', '#bce7da', '#dfedcc', '#f7eac3', '#faddcb', '#f6c2bc', '#f3a7ab', '#EE958F']
            },
            legendTitle: 'Legend',
            legendPosition: 'right',
            dataLabel: true,
            customToolTip: false
        };
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    set metaData(meta) {
        this._chartMetaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._chartMetaData;
    }
    ngOnInit() {
    }
    onSelect($event) {
        this.selected.next($event);
    }
    getToolTip(name) {
        var element = this.data.find(d => d.name === name);
        return element.tooltipText || element.name + ' : ' + element.value;
    }
}
CtGroupedBarChartComponent.ɵfac = function CtGroupedBarChartComponent_Factory(t) { return new (t || CtGroupedBarChartComponent)(); };
CtGroupedBarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtGroupedBarChartComponent, selectors: [["ct-grouped-barchart"]], inputs: { data: "data", metaData: "metaData" }, outputs: { selected: "selected" }, decls: 3, vars: 12, consts: [[3, "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "showDataLabel", "select"], ["tooltipTemplate", ""], [4, "ngIf", "ngIfElse"], ["normal", ""]], template: function CtGroupedBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-bar-vertical-2d", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function CtGroupedBarChartComponent_Template_ngx_charts_bar_vertical_2d_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtGroupedBarChartComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("results", ctx.data)("view", ctx._chartMetaData.view)("scheme", ctx._chartMetaData.scheme)("gradient", ctx._chartMetaData.gradient)("xAxis", ctx._chartMetaData.showXAxis)("yAxis", ctx._chartMetaData.showYAxis)("legend", ctx._chartMetaData.showLegend)("showXAxisLabel", ctx._chartMetaData.showXAxisLabel)("showYAxisLabel", ctx._chartMetaData.showYAxisLabel)("xAxisLabel", ctx._chartMetaData.xAxisLabel)("yAxisLabel", ctx._chartMetaData.yAxisLabel)("showDataLabel", ctx._chartMetaData.dataLabel);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.BarVertical2DComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%]     .textDataLabel {\n  transform: translate(-8px, -4px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudGV4dERhdGFMYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLThweCwtNHB4KSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 6244:
/*!********************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-horizontal-barchart/component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtHorizontalBarChartComponent": () => (/* binding */ CtHorizontalBarChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function CtHorizontalBarChartComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().model;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getToolTip(model_r2.name), " ");
} }
function CtHorizontalBarChartComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().model;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](model_r2.value);
} }
function CtHorizontalBarChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CtHorizontalBarChartComponent_ng_template_1_div_0_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtHorizontalBarChartComponent_ng_template_1_ng_template_1_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1._chartMetaData.customToolTip)("ngIfElse", _r4);
} }
class CtHorizontalBarChartComponent {
    constructor() {
        this.defaults = {
            view: [700, 300],
            gradient: false,
            showLegend: true,
            showXAxis: true,
            showXAxisLabel: true,
            showYAxis: true,
            showYAxisLabel: true,
            xAxisLabel: 'X',
            yAxisLabel: 'Y',
            scheme: {
                domain: ['#cad4f4', '#c7e5ee', '#bce7da', '#dfedcc', '#f7eac3', '#faddcb', '#f6c2bc', '#f3a7ab', '#EE958F']
            },
            legendTitle: 'Legend',
            legendPosition: 'right',
            dataLabel: true,
            customToolTip: false,
            xScaleMax: 0
        };
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    set metaData(meta) {
        this._chartMetaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._chartMetaData;
    }
    ngOnInit() {
    }
    onSelect($event) {
        this.selected.next($event);
    }
    getToolTip(name) {
        var element = this.data.find(d => d.name === name);
        return element.tooltipText || element.name + ' : ' + element.value;
    }
}
CtHorizontalBarChartComponent.ɵfac = function CtHorizontalBarChartComponent_Factory(t) { return new (t || CtHorizontalBarChartComponent)(); };
CtHorizontalBarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtHorizontalBarChartComponent, selectors: [["ct-horizontal-barchart"]], inputs: { data: "data", metaData: "metaData" }, outputs: { selected: "selected" }, decls: 3, vars: 13, consts: [[3, "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "showDataLabel", "xScaleMax", "select"], ["tooltipTemplate", ""], [4, "ngIf", "ngIfElse"], ["normal", ""]], template: function CtHorizontalBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-bar-horizontal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function CtHorizontalBarChartComponent_Template_ngx_charts_bar_horizontal_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtHorizontalBarChartComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("results", ctx.data)("view", ctx._chartMetaData.view)("scheme", ctx._chartMetaData.scheme)("gradient", ctx._chartMetaData.gradient)("xAxis", ctx._chartMetaData.showXAxis)("yAxis", ctx._chartMetaData.showYAxis)("legend", ctx._chartMetaData.showLegend)("showXAxisLabel", ctx._chartMetaData.showXAxisLabel)("showYAxisLabel", ctx._chartMetaData.showYAxisLabel)("xAxisLabel", ctx._chartMetaData.xAxisLabel)("yAxisLabel", ctx._chartMetaData.yAxisLabel)("showDataLabel", ctx._chartMetaData.dataLabel)("xScaleMax", ctx._chartMetaData.xScaleMax);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.BarHorizontalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%]     .textDataLabel {\n  font-weight: 700;\n}\n\n[_nghost-%COMP%]     .tick {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudGV4dERhdGFMYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50aWNrIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59Il19 */"] });


/***/ }),

/***/ 52839:
/*!*************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-linear-gauge/component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtLinearGaugeComponent": () => (/* binding */ CtLinearGaugeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);



class CtLinearGaugeComponent {
    constructor() {
        this.defaults = {
            view: undefined,
            format: this.format,
            units: 'Completed',
            value: 69,
            scheme: {
                domain: ['#004FAA']
            }
        };
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    set metaData(meta) {
        this._chartMetaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._chartMetaData;
    }
    ngOnInit() {
    }
    onSelect($event) {
        this.selected.next($event);
    }
    format(data) {
        return data + '%';
    }
}
CtLinearGaugeComponent.ɵfac = function CtLinearGaugeComponent_Factory(t) { return new (t || CtLinearGaugeComponent)(); };
CtLinearGaugeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtLinearGaugeComponent, selectors: [["ct-linear-gauge"]], inputs: { metaData: "metaData" }, outputs: { selected: "selected" }, decls: 1, vars: 5, consts: [[3, "view", "scheme", "value", "units", "valueFormatting", "select"]], template: function CtLinearGaugeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-linear-gauge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function CtLinearGaugeComponent_Template_ngx_charts_linear_gauge_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("view", ctx._chartMetaData.view)("scheme", ctx._chartMetaData.scheme)("value", ctx._chartMetaData.value)("units", ctx._chartMetaData.units)("valueFormatting", ctx._chartMetaData.format);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.LinearGaugeComponent], styles: ["[_nghost-%COMP%]     .textDataLabel {\n  transform: translate(-8px, -4px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudGV4dERhdGFMYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLThweCwtNHB4KSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 66538:
/*!**********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-linechart/component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtLineChartComponent": () => (/* binding */ CtLineChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);



class CtLineChartComponent {
    constructor() {
        this.defaults = {
            view: [700, 300],
            gradient: false,
            showLegend: true,
            showXAxis: true,
            showXAxisLabel: true,
            showYAxis: true,
            showYAxisLabel: true,
            xAxisLabel: 'X',
            yAxisLabel: 'Y',
            scheme: {
                domain: ['#004FAA', '#ec8026', '#d6ff79', '#89aae6', '#AC808A', '#1b998b', '#5cc8f']
            },
            legendTitle: 'Legend',
            legendPosition: 'right',
            customToolTip: false,
            yScaleMax: undefined
        };
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    set metaData(meta) {
        this._chartMetaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._chartMetaData;
    }
    ngOnInit() {
    }
    onSelect($event) {
        this.selected.next($event);
    }
    getToolTip(name) {
        var element = this.data.find(d => d.name === name);
        return element.tooltipText || element.name + ' : ' + element.value;
    }
}
CtLineChartComponent.ɵfac = function CtLineChartComponent_Factory(t) { return new (t || CtLineChartComponent)(); };
CtLineChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtLineChartComponent, selectors: [["ct-linechart"]], inputs: { data: "data", metaData: "metaData" }, outputs: { selected: "selected" }, decls: 1, vars: 12, consts: [["legendPosition", "below", 3, "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "yScaleMax", "select"]], template: function CtLineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-line-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function CtLineChartComponent_Template_ngx_charts_line_chart_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("results", ctx.data)("view", ctx._chartMetaData.view)("scheme", ctx._chartMetaData.scheme)("gradient", ctx._chartMetaData.gradient)("xAxis", ctx._chartMetaData.showXAxis)("yAxis", ctx._chartMetaData.showYAxis)("legend", ctx._chartMetaData.showLegend)("showXAxisLabel", ctx._chartMetaData.showXAxisLabel)("showYAxisLabel", ctx._chartMetaData.showYAxisLabel)("xAxisLabel", ctx._chartMetaData.xAxisLabel)("yAxisLabel", ctx._chartMetaData.yAxisLabel)("yScaleMax", ctx._chartMetaData.yScaleMax);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.LineChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 88145:
/*!**************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-login-textbox/component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTLoginTextboxComponent": () => (/* binding */ CTLoginTextboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 62544);






class CTLoginTextboxComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.control = this.fd.formGroup.get(this.field.name);
    }
    valueChangeDetector($event) {
        this.valueChange.next($event.value);
    }
}
CTLoginTextboxComponent.ɵfac = function CTLoginTextboxComponent_Factory(t) { return new (t || CTLoginTextboxComponent)(); };
CTLoginTextboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTLoginTextboxComponent, selectors: [["ct-login-textbox"]], inputs: { field: "field", fd: "fd", type: "type" }, outputs: { valueChange: "valueChange" }, decls: 12, vars: 10, consts: [["appearance", "fill", 1, "col"], ["matPrefix", ""], ["matInput", "", 3, "type", "formControl", "required", "readonly", "placeholder", "input"], ["matSuffix", ""]], template: function CTLoginTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CTLoginTextboxComponent_Template_input_input_5_listener($event) { return ctx.valueChangeDetector($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.field.placeHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.control)("required", ctx.field.isRequired)("readonly", ctx.field.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.hint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.errorId);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError], styles: ["[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  height: 5.5vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  font-family: Roboto-Medium !important;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  letter-spacing: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #ffffff;\n  padding: 8px 4px 8px 14px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label {\n  font-family: Roboto-Regular !important;\n  font-size: 12px;\n  color: black;\n  letter-spacing: 0;\n  opacity: 0.54;\n  padding-bottom: 2px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field.mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular !important;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-input-element::-moz-placeholder {\n  opacity: 0.34;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  opacity: 0.34;\n}\n\n.optional[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7QUFERjs7QUFJQTtFQUNFLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQURGOztBQUtFO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQVNBO0VBQ0UsYUFBQTtBQU5GOztBQUtBO0VBQ0UsYUFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7QUFORiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcblxuOmhvc3QgbWF0LWZvcm0tZmllbGR7XG4gIGhlaWdodDogNS41dmg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXh7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOjA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6OHB4IDRweCA4cHggMTRweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgb3BhY2l0eTogMC41NDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDRGQUE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBcbiAgfVxuXG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDAuMzQ7XG59XG5cbi5vcHRpb25hbHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"] });


/***/ }),

/***/ 73176:
/*!****************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-navigation-tile/component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTNavigationTileComponent": () => (/* binding */ CTNavigationTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function CTNavigationTileComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.imageSelected, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CTNavigationTileComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.imageUnselected, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "color": a0 }; };
class CTNavigationTileComponent {
    ngOnInit() {
    }
}
CTNavigationTileComponent.ɵfac = function CTNavigationTileComponent_Factory(t) { return new (t || CTNavigationTileComponent)(); };
CTNavigationTileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTNavigationTileComponent, selectors: [["ct-navigation-tile"]], inputs: { imageSelected: "imageSelected", imageUnselected: "imageUnselected", name: "name", selected: "selected" }, decls: 5, vars: 6, consts: [[1, "tile-unselected", 3, "ngStyle"], ["style", "margin-top:0.625rem", 3, "src", 4, "ngIf"], [1, "name"], [2, "margin-top", "0.625rem", 3, "src"]], template: function CTNavigationTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CTNavigationTileComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CTNavigationTileComponent_img_2_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.selected ? "#084fa9" : "#545454"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["img[_ngcontent-%COMP%] {\n  height: 1.5625rem;\n}\n\n.tile-unselected[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICBoZWlnaHQ6IDEuNTYyNXJlbTtcbn1cblxuXG4udGlsZS11bnNlbGVjdGVke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hbWV7XG4gICAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 39485:
/*!************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-number-card/component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtNumberCardComponent": () => (/* binding */ CtNumberCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);



class CtNumberCardComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.colorScheme = {
            domain: ['#cad4f4', '#c7e5ee', '#bce7da']
        };
        this.cardColor = 'rgba(199, 229, 238, 0.4)';
        this.defaults = {
            view: [200, 300],
            colorScheme: 'natural',
            gradient: false,
            label: "Total"
        };
    }
    set metaData(meta) {
        this._metaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._metaData;
    }
    ngOnInit() {
    }
    onSelect($event) {
        this.selected.next($event);
    }
}
CtNumberCardComponent.ɵfac = function CtNumberCardComponent_Factory(t) { return new (t || CtNumberCardComponent)(); };
CtNumberCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtNumberCardComponent, selectors: [["ct-number-card"]], inputs: { data: "data", metaData: "metaData" }, outputs: { selected: "selected" }, decls: 1, vars: 5, consts: [[2, "font-family", "Roboto-Light", 3, "hidden", "view", "results", "scheme", "cardColor", "select"]], template: function CtNumberCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-number-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function CtNumberCardComponent_Template_ngx_charts_number_card_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.data)("view", ctx._metaData.view)("results", ctx.data)("scheme", ctx.colorScheme)("cardColor", ctx.cardColor);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.NumberCardComponent], styles: [".ngx-charts text {\n  fill: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUF3QjtFQUFPLHNCQUFBO0FBRS9CIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5uZ3gtY2hhcnRzIHsgdGV4dCB7IGZpbGw6IGJsYWNrICFpbXBvcnRhbnQ7IH0gfVxuIl19 */"] });


/***/ }),

/***/ 49127:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-output-3/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTOutput3Component": () => (/* binding */ CTOutput3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CTOutput3Component {
}
CTOutput3Component.ɵfac = function CTOutput3Component_Factory(t) { return new (t || CTOutput3Component)(); };
CTOutput3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTOutput3Component, selectors: [["ct-output-3"]], inputs: { label: "label", value: "value" }, decls: 5, vars: 2, consts: [[1, "col-md-3"], [2, "font-size", "0.8rem"], [2, "color", "#004faa", "font-family", "Roboto-Regular"]], template: function CTOutput3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, " ");
    } }, styles: ["[_nghost-%COMP%]     .mat-form-field-infix {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  letter-spacing: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #F8F8F8 !important;\n  padding: 8px 4px 3px 14px !important;\n  height: 5.5vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: black;\n  letter-spacing: 0;\n  opacity: 0.54;\n  padding-bottom: 2px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field .mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-input-element::-moz-placeholder {\n  opacity: 0.34;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  opacity: 0.34;\n}\n\n.optional[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFDQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOjA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjggIWltcG9ydGFudDtcbiAgcGFkZGluZzo4cHggNHB4IDNweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNS41dmg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgb3BhY2l0eTogMC41NDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDRGQUE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDAuMzQ7XG59XG5cbi5vcHRpb25hbHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"] });


/***/ }),

/***/ 54125:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-output-4/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTOutput4Component": () => (/* binding */ CTOutput4Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CTOutput4Component {
}
CTOutput4Component.ɵfac = function CTOutput4Component_Factory(t) { return new (t || CTOutput4Component)(); };
CTOutput4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTOutput4Component, selectors: [["ct-output-4"]], inputs: { label: "label", value: "value" }, decls: 4, vars: 2, consts: [[2, "font-size", "0.8rem"], [2, "color", "#004faa", "font-family", "Roboto-Regular"]], template: function CTOutput4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, " ");
    } }, styles: ["[_nghost-%COMP%]     .mat-form-field-infix {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  letter-spacing: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #F8F8F8 !important;\n  padding: 8px 4px 3px 14px !important;\n  height: 5.5vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: black;\n  letter-spacing: 0;\n  opacity: 0.54;\n  padding-bottom: 2px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field .mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-input-element::-moz-placeholder {\n  opacity: 0.34;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  opacity: 0.34;\n}\n\n.optional[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFDQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOjA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjggIWltcG9ydGFudDtcbiAgcGFkZGluZzo4cHggNHB4IDNweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNS41dmg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgb3BhY2l0eTogMC41NDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDRGQUE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDAuMzQ7XG59XG5cbi5vcHRpb25hbHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"] });


/***/ }),

/***/ 24856:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-piechart/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtPieChartComponent": () => (/* binding */ CtPieChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);


class CtPieChartComponent {
    constructor() {
        this.pieChartMetaData = {
            view: [],
            showLabels: true,
            isDoughnut: false,
            colorScheme: '',
            legendPosition: '',
            gradient: true,
            showLegend: true
        };
    }
}
CtPieChartComponent.ɵfac = function CtPieChartComponent_Factory(t) { return new (t || CtPieChartComponent)(); };
CtPieChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtPieChartComponent, selectors: [["ct-piechart"]], inputs: { pieChartData: "pieChartData", pieChartMetaData: "pieChartMetaData" }, decls: 1, vars: 9, consts: [[3, "hidden", "view", "results", "gradient", "legend", "legendPosition", "labels", "doughnut", "scheme"]], template: function CtPieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-charts-pie-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.pieChartData)("view", ctx.pieChartMetaData.view)("results", ctx.pieChartData)("gradient", ctx.pieChartMetaData.gradient)("legend", ctx.pieChartMetaData.showLegend)("legendPosition", ctx.pieChartMetaData.legendPosition)("labels", ctx.pieChartMetaData.showLabels)("doughnut", ctx.pieChartMetaData.isDoughnut)("scheme", ctx.pieChartMetaData.colorScheme);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.PieChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 31142:
/*!*************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-piegridchart/component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtPieGridChartComponent": () => (/* binding */ CtPieGridChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);


class CtPieGridChartComponent {
    constructor() {
        this.defaults = {
            view: [500, 300],
            colorScheme: {
                domain: ['#cad4f4', '#c7e5ee', '#bce7da', '#dfedcc', '#f7eac3', '#faddcb', '#f6c2bc', '#f3a7ab', '#EE958F']
            },
            label: "Total",
            designatedTotal: undefined
        };
    }
    set metaData(meta) {
        this._metaData = Object.assign({}, this.defaults, meta);
    }
    get chartMetaData() {
        return this._metaData;
    }
}
CtPieGridChartComponent.ɵfac = function CtPieGridChartComponent_Factory(t) { return new (t || CtPieGridChartComponent)(); };
CtPieGridChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtPieGridChartComponent, selectors: [["ct-piegridchart"]], inputs: { data: "data", metaData: "metaData" }, decls: 1, vars: 6, consts: [[3, "hidden", "view", "scheme", "label", "designatedTotal", "results"]], template: function CtPieGridChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-charts-pie-grid", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.data)("view", ctx._metaData.view)("scheme", ctx._metaData.colorScheme)("label", ctx._metaData.label)("designatedTotal", ctx._metaData.designatedTotal)("results", ctx.data);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_0__.PieGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94654:
/*!***************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-primary-button/component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTPrimaryButtonComponent": () => (/* binding */ CTPrimaryButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);



class CTPrimaryButtonComponent {
    constructor() {
        this.isDisabled = false;
    }
}
CTPrimaryButtonComponent.ɵfac = function CTPrimaryButtonComponent_Factory(t) { return new (t || CTPrimaryButtonComponent)(); };
CTPrimaryButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTPrimaryButtonComponent, selectors: [["ct-primary-button"]], inputs: { name: "name", tooltip: "tooltip", isDisabled: "isDisabled" }, decls: 3, vars: 3, consts: [["mat-raised-button", "", 3, "disabled", "matTooltip"], [1, "btn-txt"]], template: function CTPrimaryButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.4375rem 0.75rem;\n  background: #EC8026;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  font-family: Roboto-Medium !important;\n  font-size: 1.11vw;\n  color: #FFFFFF;\n  line-height: 22px;\n  outline: none;\n  margin: 0.625rem 0.625rem;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Roboto-Medium !important;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQ0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IGJ1dHRvbntcbiAgICBwYWRkaW5nOiAwLjQzNzVyZW0gMC43NXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjRUM4MDI2O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xNik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxLjExdnc7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDAuNjI1cmVtIDAuNjI1cmVtO1xufVxuXG4uYnRuLXR4dHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 53784:
/*!*******************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-primary-navigation/component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTPrimaryNavigationComponent": () => (/* binding */ CTPrimaryNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_menuService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/menuService */ 45790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _ct_navigation_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ct-navigation-tile/component */ 73176);






const _c0 = function (a0) { return { "tile-selected": a0 }; };
function CTPrimaryNavigationComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CTPrimaryNavigationComponent_mat_card_4_Template_mat_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const module_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.navigationEmitter(module_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ct-navigation-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const module_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r0.selected == module_r1.moduleName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("imageSelected", module_r1.moduleIconSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("imageUnselected", module_r1.moduleIconUnselected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", module_r1.moduleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx_r0.selected == module_r1.moduleName);
} }
class CTPrimaryNavigationComponent {
    constructor(ms) {
        this.ms = ms;
        this.modules = [];
        this.numberOfModules = 0;
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.formDisplayArray();
        this.numberOfModules = this.modules.length;
        this.selected = this.defaultSelected;
    }
    formDisplayArray() {
        var displayArr = [];
        var pScreens = this.ms.getPermittedScreens();
        Object.keys(this.tiles).forEach(key => {
            if (pScreens.indexOf(this.tiles[key].pageId) > -1) {
                displayArr.push(this.tiles[key].displayName);
            }
        });
        this.formTiles(displayArr);
    }
    formTiles(array) {
        array.forEach(element => {
            this.modules.push({ 'moduleIconUnselected': '../../../../assets/images/' + element + '_unselected.svg', 'moduleIconSelected': '../../../../assets/images/' + element + '_selected.svg', 'moduleName': element });
        });
    }
    /**
     * Function to navigate to selected Module
     * @param moduleName: name of module seleted
     */
    navigationEmitter(moduleName) {
        this.selected = moduleName;
        this.navigate.next(moduleName);
    }
}
CTPrimaryNavigationComponent.ɵfac = function CTPrimaryNavigationComponent_Factory(t) { return new (t || CTPrimaryNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_menuService__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
CTPrimaryNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CTPrimaryNavigationComponent, selectors: [["ct-primary-navigation"]], inputs: { defaultSelected: "defaultSelected", tiles: "tiles" }, outputs: { navigate: "navigate" }, decls: 5, vars: 1, consts: [[1, "browse"], [1, "navigation-card"], [1, "d-flex", "flex-row"], ["class", "p-2 tile-card", "style", "margin: 0 0.5rem; width: 6rem;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "p-2", "tile-card", 2, "margin", "0 0.5rem", "width", "6rem", 3, "ngClass", "click"], [1, "tile-unselected"], [3, "selected", "imageSelected", "imageUnselected", "name"]], template: function CTPrimaryNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "BROWSE BY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CTPrimaryNavigationComponent_mat_card_4_Template, 3, 7, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.modules);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ct_navigation_tile_component__WEBPACK_IMPORTED_MODULE_1__.CTNavigationTileComponent], styles: [".browse[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-family: Roboto-Bold !important;\n  color: #545454;\n  padding-top: 1.5rem;\n  margin-left: 2.3125rem;\n}\n\n.navigation-card[_ngcontent-%COMP%] {\n  margin: 0.513125rem 1.6875rem 0.513125rem 1.6875rem;\n}\n\n.tile-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.tile-selected[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.5) 2px 3px 7px -1.5px;\n}\n\n.tile-unselected[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.triangle-with-shadow[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  left: 50%;\n  margin-left: -1.25rem;\n  margin-top: 0.95rem;\n  position: absolute;\n  transform: rotate(180deg);\n  overflow: hidden;\n  cursor: default;\n}\n\n.triangle-with-shadow[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 1.25rem;\n  height: 1.25rem;\n  background: #fff;\n  transform: rotate(45deg);\n  top: 1.875rem;\n  left: 0.625rem;\n  box-shadow: -1px -1px 10px -2px rgba(99, 84, 84, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtREFBQTtBQUNKOztBQUdBO0VBQ0ksNEVBQUE7QUFBSjs7QUFHQTtFQUNJLGlEQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFKSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icm93c2V7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzU0NTQ1NDtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjMxMjVyZW07XG59XG5cbi5uYXZpZ2F0aW9uLWNhcmR7XG4gICAgbWFyZ2luOiAwLjUxMzEyNXJlbSAxLjY4NzVyZW0gMC41MTMxMjVyZW0gMS42ODc1cmVtO1xuICAgIC8vIHBhZGRpbmc6IDAuMnJlbSAwLjg3NXJlbSAwIDAuODc1cmVtOyAgIC8vLy8vLy8vLy8vIHBhZGRpbmcgY2hhbmdlIG11c3QgYmUgY29tcGFuc2F0ZWQgaW4gbWFyayAjMVxufVxuXG4udGlsZS1jYXJkOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMilcbn1cblxuLnRpbGUtc2VsZWN0ZWR7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDJweCAzcHggN3B4IC0xLjVweDtcbn1cblxuXG4udGlsZS11bnNlbGVjdGVke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbn1cblxuXG4udHJpYW5nbGUtd2l0aC1zaGFkb3cge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMS4yNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjk1cmVtOyAgICAvLy8vLy8vLy8vLyAjMVxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gYm94LXNoYWRvdzogM3B4IDE2cHggMHB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi50cmlhbmdsZS13aXRoLXNoYWRvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEuMjVyZW07XG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRvcDogMS44NzVyZW07XG4gICAgbGVmdDogMC42MjVyZW07XG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDEwcHggLTJweCByZ2JhKDk5LCA4NCwgODQsIDAuNSk7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 53912:
/*!*************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-reset-button/component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTResetButtonComponent": () => (/* binding */ CTResetButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 76246);


class CTResetButtonComponent {
}
CTResetButtonComponent.ɵfac = function CTResetButtonComponent_Factory(t) { return new (t || CTResetButtonComponent)(); };
CTResetButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTResetButtonComponent, selectors: [["ct-reset-button"]], decls: 3, vars: 0, consts: [["mat-raised-button", ""], [1, "btn-txt"]], template: function CTResetButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.4375rem 0.75rem;\n  border: 1px solid #FFFFFF;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  background: transparent;\n  font-family: Roboto-Medium !important;\n  font-size: 1.111vw;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 22px;\n  margin: 0.625rem;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Roboto-Medium !important;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQ0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IGJ1dHRvbntcbiAgICBwYWRkaW5nOiAwLjQzNzVyZW0gMC43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xNik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuMTExdnc7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1hcmdpbjogMC42MjVyZW07XG59XG5cbi5idG4tdHh0e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ 21385:
/*!*************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-searchbar-fd/component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtSearchBarFdComponent": () => (/* binding */ CtSearchBarFdComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 62544);








function CtSearchBarFdComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function CtSearchBarFdComponent_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const value_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.remove(value_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r2, " ");
} }
class CtSearchBarFdComponent {
    constructor() {
        this.fdArray = [];
        this.fdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.filtered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.cumulativeData = [];
        this.values = [];
        this.separatorKeysCodes = [13, 9, 188];
    }
    get fd() {
        return this.fdArray;
    }
    set fd(value) {
        this.fdArray = value;
        this.cumulativeData = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.formData(this.fdArray));
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.cumulativeData);
        this.fdChange.emit(this.fdArray);
    }
    formData(fdArray) {
        var voArray = [];
        fdArray.forEach(element => {
            voArray.push(element.getRawData());
        });
        return voArray;
    }
    applyFilter(filterValue) {
        this.cumulativeData = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.formData(this.fdArray));
        this.dataSource.data = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.cumulativeData);
        this.dataSource.filter = filterValue.trim().toLowerCase();
        var filtered = [];
        this.dataSource.filteredData.forEach(element => {
            filtered.push(this.fdArray[this.dataSource.data.indexOf(element)]);
        });
        this.filtered.emit(filtered);
    }
    add(event) {
    }
    remove(value) {
        const index = this.values.indexOf(value);
        if (index >= 0) {
            this.values.splice(index, 1);
            this.applyValues(this.values);
        }
        if (this.values.length == 0) {
            this.dataSource.filter = '';
        }
    }
    applyValues(value) {
        this.cumulativeData = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.formData(this.fdArray));
        this.dataSource.data = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.cumulativeData);
        for (var i = 0; i < value.length; i++) {
            this.dataSource.filter = value[i].trim().toLowerCase();
            this.dataSource.data = this.dataSource.filteredData;
            var filtered = [];
            this.dataSource.filteredData.forEach(element => {
                filtered.push(this.fdArray[this.cumulativeData.indexOf(element)]);
            });
            this.filtered.emit(filtered);
        }
    }
}
CtSearchBarFdComponent.ɵfac = function CtSearchBarFdComponent_Factory(t) { return new (t || CtSearchBarFdComponent)(); };
CtSearchBarFdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtSearchBarFdComponent, selectors: [["ct-searchbar-fd"]], inputs: { fd: "fd", placeholder: "placeholder" }, outputs: { fdChange: "fdChange", filtered: "filtered" }, decls: 7, vars: 4, consts: [[2, "border-bottom", "3px solid #f3f8fb", "padding-bottom", "0.6125rem", "margin-bottom", "1rem"], ["src", "../../../../assets/images/Serach.svg", 2, "padding-left", "2.1875rem", "margin-right", "0.9375rem"], ["appearance", "none", 2, "width", "80%"], ["aria-label", " selection "], ["chipList", ""], ["color", "primary", "selected", "true", 3, "removable", "removed", 4, "ngFor", "ngForOf"], [2, "width", "100%", "font-family", "Roboto-Light", "font-size", "0.8333vw", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "keyup", "matChipInputTokenEnd"], ["color", "primary", "selected", "true", 3, "removable", "removed"], ["matChipRemove", ""]], template: function CtSearchBarFdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2)(3, "mat-chip-list", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CtSearchBarFdComponent_mat_chip_5_Template, 4, 2, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CtSearchBarFdComponent_Template_input_keyup_6_listener($event) { return ctx.applyFilter($event.target.value); })("matChipInputTokenEnd", function CtSearchBarFdComponent_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__.MatChipInput], styles: ["[_nghost-%COMP%]     .mat-standard-chip {\n  min-height: 26px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0oiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1zdGFuZGFyZC1jaGlwe1xuICAgIG1pbi1oZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ 41396:
/*!*****************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-secondary-button/component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTSecondaryyButtonComponent": () => (/* binding */ CTSecondaryyButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);




const _c0 = function (a0, a1) { return { "color": a0, "border": a1 }; };
class CTSecondaryyButtonComponent {
    constructor() {
        this.isDisabled = false;
        this.login = false;
    }
}
CTSecondaryyButtonComponent.ɵfac = function CTSecondaryyButtonComponent_Factory(t) { return new (t || CTSecondaryyButtonComponent)(); };
CTSecondaryyButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTSecondaryyButtonComponent, selectors: [["ct-secondary-button"]], inputs: { name: "name", tooltip: "tooltip", isDisabled: "isDisabled", login: "login" }, decls: 3, vars: 7, consts: [["mat-raised-button", "", 3, "disabled", "ngStyle", "matTooltip"], [1, "btn-txt"]], template: function CTSecondaryyButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.login ? "#FFFFFF" : "#004FAA", ctx.login ? "1px solid #FFFFFF" : "1px solid #004FAA"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip], styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  background: transparent;\n  font-family: Roboto-Medium !important;\n  text-align: center;\n  line-height: 22px;\n  outline: none;\n  margin: 0.625rem 0.625rem;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Roboto-Light !important;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgYnV0dG9ue1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjE2KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMC42MjVyZW0gMC42MjVyZW07XG59XG5cbi5idG4tdHh0e1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTGlnaHQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDFyZW07XG59Il19 */"] });


/***/ }),

/***/ 12168:
/*!*******************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-selectable-chips-1/component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTSelectableChipsComponent1": () => (/* binding */ CTSelectableChipsComponent1)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function CTSelectableChipsComponent1_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CTSelectableChipsComponent1_mat_chip_1_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const k_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggle(k_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chip_r1 = ctx.$implicit;
    const k_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r0.isSelected(k_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getName(chip_r1), " ");
} }
class CTSelectableChipsComponent1 {
    constructor() {
        this.chips = [];
    }
    /**
     * toggle slecto status of this chip
     * @param k index of the chip to be toggled
     */
    toggle(k) {
        this.chips[k][this.selectAttr] = !this.chips[k][this.selectAttr];
    }
    /**
     * is this chip selected?
     * @param k index of the chip to be toggled
     */
    isSelected(k) {
        return this.chips[k][this.selectAttr];
    }
    getName(chip) {
        return chip[this.nameAttr];
    }
}
CTSelectableChipsComponent1.ɵfac = function CTSelectableChipsComponent1_Factory(t) { return new (t || CTSelectableChipsComponent1)(); };
CTSelectableChipsComponent1.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTSelectableChipsComponent1, selectors: [["ct-selectable-chips-1"]], inputs: { chips: "chips", selectAttr: "selectAttr", nameAttr: "nameAttr" }, decls: 2, vars: 1, consts: [["multiple", ""], ["color", "primary", "class", "mat-chip-category", "style", "font-size:16px;", "selectable", "true", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["color", "primary", "selectable", "true", 1, "mat-chip-category", 2, "font-size", "16px", 3, "selected", "click"]], template: function CTSelectableChipsComponent1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CTSelectableChipsComponent1_mat_chip_1_Template, 2, 2, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chips);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChip], styles: ["[_nghost-%COMP%]     .mat-standard-chip {\n  min-height: 22px !important;\n  font-family: Roboto-Light;\n  font-size: 10px;\n  border-radius: 0;\n}\n\n[_nghost-%COMP%]     .mat-chip {\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #e7eced !important;\n  color: black;\n}\n\n[_nghost-%COMP%]     .mat-chip-selected {\n  border: 1px solid #2450a0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LXN0YW5kYXJkLWNoaXB7XG4gIG1pbi1oZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1MaWdodDtcbiAgZm9udC1zaXplOjEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoaXB7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZWNlZCAhaW1wb3J0YW50O1xuICBjb2xvcjpibGFjaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hpcC1zZWxlY3RlZHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0NTBhMCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 99479:
/*!*****************************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-selectable-chips/component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTSelectableChipsComponent": () => (/* binding */ CTSelectableChipsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function CTSelectableChipsComponent_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CTSelectableChipsComponent_mat_chip_1_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const k_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggle(k_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const k_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r0.toggle1(k_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r1.name, " ");
} }
class CTSelectableChipsComponent {
    constructor() {
        this.chipList = [];
    }
    toggle(k) {
        this.chipList[k].value = !this.chipList[k].value;
    }
    toggle1(k) {
        return (this.chipList[k].value);
    }
}
CTSelectableChipsComponent.ɵfac = function CTSelectableChipsComponent_Factory(t) { return new (t || CTSelectableChipsComponent)(); };
CTSelectableChipsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTSelectableChipsComponent, selectors: [["ct-selectable-chips"]], inputs: { chipList: "chipList" }, decls: 2, vars: 1, consts: [["multiple", ""], ["color", "primary", "class", "mat-chip-category", "style", "font-size:16px;padding-right:5px;padding-left:5px;", "selectable", "true", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["color", "primary", "selectable", "true", 1, "mat-chip-category", 2, "font-size", "16px", "padding-right", "5px", "padding-left", "5px", 3, "selected", "click"]], template: function CTSelectableChipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CTSelectableChipsComponent_mat_chip_1_Template, 2, 2, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chipList);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChip], styles: ["[_nghost-%COMP%]     .mat-standard-chip {\n  min-height: 18px !important;\n  font-family: Roboto-Regular;\n  font-size: 10px;\n  border-radius: 0;\n}\n\n[_nghost-%COMP%]     .mat-chip {\n  background-color: transparent;\n  border: 1px solid #A8A8A8;\n  border-radius: 4px;\n  color: #A8A8A8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5tYXQtc3RhbmRhcmQtY2hpcHtcbiAgbWluLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZToxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGlwe1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBib3JkZXI6MXB4IHNvbGlkICNBOEE4QTg7XG4gIGJvcmRlci1yYWRpdXM6NHB4O1xuICBjb2xvcjojQThBOEE4XG59XG4iXX0= */"] });


/***/ }),

/***/ 97058:
/*!**********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-sidenav-1/component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtSideNavOneComponent": () => (/* binding */ CtSideNavOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_menuService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/menuService */ 45790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



const _c0 = function (a0, a1) { return { "border-left": a0, "padding-left": a1 }; };
const _c1 = function (a0, a1) { return { "item-selected": a0, "item-unselected": a1 }; };
function CtSideNavOneComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r0.defaultSelected == item_r1[0] ? "4px solid #ec8026" : "", ctx_r0.defaultSelected == item_r1[0] ? "1.25rem" : "1.5rem"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, ctx_r0.defaultSelected == item_r1[0], ctx_r0.defaultSelected != item_r1[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1[0], " ");
} }
class CtSideNavOneComponent {
    constructor(ms) {
        this.ms = ms;
    }
    ngOnInit() {
        var keys = Object.keys(this.items);
        var newItems = new Array(keys.length);
        keys.forEach(element => {
            newItems[this.items[element]["order"] - 1] = [this.items[element]["name"], this.items[element]["displayonSidenav"], element];
        });
        var filtered = newItems.filter(function (el) { return el != undefined; });
        this.items = filtered;
    }
    select(moduleName) {
        this.defaultSelected = moduleName;
    }
}
CtSideNavOneComponent.ɵfac = function CtSideNavOneComponent_Factory(t) { return new (t || CtSideNavOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_menuService__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
CtSideNavOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtSideNavOneComponent, selectors: [["ct-sidenav-1"]], inputs: { items: "items", defaultSelected: "defaultSelected", header: "header" }, decls: 5, vars: 2, consts: [[1, "main-div"], [1, "header"], ["class", "name-container", 4, "ngFor", "ngForOf"], [1, "name-container"], [3, "ngStyle", "ngClass"]], template: function CtSideNavOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CtSideNavOneComponent_div_4_Template, 3, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".main-div[_ngcontent-%COMP%] {\n  width: 12.8125rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-family: Roboto-Medium !important;\n  font-size: 1.23rem;\n  color: rgba(150, 150, 150, 0.9);\n  padding-left: 1.5rem;\n  margin-bottom: 1.25rem;\n}\n\n.item-selected[_ngcontent-%COMP%] {\n  font-family: Roboto-Medium !important;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #004faa;\n}\n\n.item-unselected[_ngcontent-%COMP%] {\n  font-family: Roboto-Light !important;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #004faa;\n}\n\n.name-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBO0VBQ0ksc0JBQUE7QUFBSiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdntcbiAgICB3aWR0aDogMTIuODEyNXJlbTtcbn1cblxuLmhlYWRlcntcbiAgICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS4yM3JlbTtcbiAgICBjb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjkpO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cbi5pdGVtLXNlbGVjdGVke1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzAwNGZhYTtcbn1cblxuLml0ZW0tdW5zZWxlY3RlZHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLUxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzAwNGZhYTtcbn1cblxuXG4ubmFtZS1jb250YWluZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 51510:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-sidenav/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtSideNavComponent": () => (/* binding */ CtSideNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_menuService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/menuService */ 45790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



const _c0 = function (a0, a1) { return { "border-left": a0, "padding-left": a1 }; };
const _c1 = function (a0, a1) { return { "item-selected": a0, "item-unselected": a1 }; };
function CtSideNavComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r3.defaultSelected == item_r1[0] ? "4px solid #ec8026" : "", ctx_r3.defaultSelected == item_r1[0] ? "1.25rem" : "1.5rem"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, ctx_r3.defaultSelected == item_r1[0], ctx_r3.defaultSelected != item_r1[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1[0], " ");
} }
function CtSideNavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtSideNavComponent_div_1_div_1_Template, 3, 9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1[1]);
} }
class CtSideNavComponent {
    constructor(ms) {
        this.ms = ms;
    }
    ngOnInit() {
        var newItem = [];
        var pScreens = this.ms.getPermittedScreens();
        Object.keys(this.items).forEach(key => {
            if (pScreens.indexOf(this.items[key].pageId) > -1) {
                newItem[key] = this.items[key];
            }
        });
        this.items = newItem;
        var keys = Object.keys(this.items);
        var newItems = new Array(keys.length);
        keys.forEach(element => {
            newItems[this.items[element]["order"] - 1] = [this.items[element]["name"], this.items[element]["displayonSidenav"], element];
        });
        var filtered = newItems.filter(function (el) { return el != undefined; });
        this.items = filtered;
    }
    select(moduleName) {
        this.defaultSelected = moduleName;
    }
}
CtSideNavComponent.ɵfac = function CtSideNavComponent_Factory(t) { return new (t || CtSideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_menuService__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
CtSideNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CtSideNavComponent, selectors: [["ct-sidenav"]], inputs: { items: "items", defaultSelected: "defaultSelected" }, decls: 2, vars: 1, consts: [[1, "main-div"], ["class", "name-container", 4, "ngFor", "ngForOf"], [1, "name-container"], [4, "ngIf"], [3, "ngStyle", "ngClass"]], template: function CtSideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CtSideNavComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".main-div[_ngcontent-%COMP%] {\n  margin-top: 4.125rem;\n  height: 17.975rem;\n  padding-top: 1.5rem;\n  width: 12.8125rem;\n  border-left: 2px solid rgba(0, 0, 0, 0.05);\n  overflow-y: scroll;\n}\n\n.item-selected[_ngcontent-%COMP%] {\n  font-family: Roboto-Medium !important;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #004faa;\n}\n\n.item-unselected[_ngcontent-%COMP%] {\n  font-family: Roboto-Light !important;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #004faa;\n}\n\n.name-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.main-div[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n}\n\n\n\n.main-div[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n\n\n.main-div[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 20px;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n.main-div[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 20px;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.3);\n  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSwwQ0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNJLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUEsVUFBQTs7QUFDQTtFQUNBLGdCQUFBO0FBREE7O0FBSUEsV0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMEZBQUE7RUFDQSxrR0FBQTtBQURKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwRkFBQTtFQUNBLGtHQUFBO0FBRkoiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXZ7XG4gICAgbWFyZ2luLXRvcDogNC4xMjVyZW07XG4gICAgaGVpZ2h0OiAxNy45NzVyZW07XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICB3aWR0aDogMTIuODEyNXJlbTtcbiAgICAvLyBoZWlnaHQ6IDE4cmVtO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5pdGVtLXNlbGVjdGVke1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzAwNGZhYTtcbn1cblxuLml0ZW0tdW5zZWxlY3RlZHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLUxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzAwNGZhYTtcbn1cblxuXG4ubmFtZS1jb250YWluZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLm1haW4tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE0cHg7XG59XG4gIFxuLyogVHJhY2sgKi9cbi5tYWluLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuYmFja2dyb3VuZDogI2ZmZjsgXG59XG5cbi8qIEhhbmRsZSAqL1xuLm1haW4tZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLy8gLyogSGFuZGxlIG9uIGhvdmVyICovXG4ubWFpbi1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufSJdfQ== */"] });


/***/ }),

/***/ 38499:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-spinner/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtSpinner": () => (/* binding */ CtSpinner)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function CtSpinner_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.spinnerText);
} }
class CtSpinner {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.isShown = false;
    }
    show(message) {
        this.spinnerText = message || CtSpinner.DEFAULT_TEXT;
        this.isShown = true;
        this.cdRef.detectChanges();
    }
    hide() {
        if (!this.isShown) {
            console.error('spinner.hide() called before a .show()');
            return;
        }
        this.isShown = false;
        this.cdRef.detectChanges();
    }
}
CtSpinner.DEFAULT_TEXT = 'Loading...';
CtSpinner.ɵfac = function CtSpinner_Factory(t) { return new (t || CtSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
CtSpinner.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtSpinner, selectors: [["ct-spinner"]], decls: 1, vars: 1, consts: [["class", "spinner-backdrop", 4, "ngIf"], [1, "spinner-backdrop"], [1, "spinner-container"], ["src", "../../../../assets/images/BookLoader.gif"], [1, "spinner-message"]], template: function CtSpinner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CtSpinner_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".spinner-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.75);\n  z-index: 999999;\n}\n.spinner-backdrop[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 10rem;\n  width: 10rem;\n  left: 41.2%;\n  top: 36%;\n  transform: translate(-50%, -50%);\n}\n.spinner-backdrop[_ngcontent-%COMP%]   .spinner-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 17.5%;\n  top: 17.5%;\n  height: 65%;\n  width: 65%;\n  border: 5px solid #ccc;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: pulsate 1s ease-out;\n          animation: pulsate 1s ease-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n.spinner-backdrop[_ngcontent-%COMP%]   .spinner-outer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  font-size: 10px;\n  text-indent: -9999em;\n  margin-left: 0;\n  border: 5px solid rgba(255, 255, 255, 0.2);\n  border-left: 5px solid #ffffff;\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n.spinner-backdrop[_ngcontent-%COMP%]   .spinner-message[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2vw;\n  position: absolute;\n  top: 61%;\n  left: 51%;\n  transform: translate(-50%, -59%);\n  width: 100%;\n  text-align: center;\n  text-shadow: 10px 10px 15px #192a56;\n}\n@media (max-width: 576px) {\n  .spinner-backdrop[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n  }\n}\n@-webkit-keyframes pulsate {\n  0% {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2);\n    opacity: 0;\n  }\n}\n@keyframes pulsate {\n  0% {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFHQSx3QkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7QUFGSjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7QUFISjtBQU1BO0VBRUk7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQUpKO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0VBTEY7RUFRQTtJQUNFLFVBQUE7RUFORjtFQVNBO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0VBUEY7QUFDRjtBQU5BO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLFVBQUE7RUFMRjtFQVFBO0lBQ0UsVUFBQTtFQU5GO0VBU0E7SUFDRSxxQkFBQTtJQUNBLFVBQUE7RUFQRjtBQUNGO0FBU0E7RUFDRTtJQUVFLHVCQUFBO0VBUEY7RUFVQTtJQUVFLHlCQUFBO0VBUkY7QUFDRjtBQVVBO0VBQ0U7SUFFRSx1QkFBQTtFQVJGO0VBV0E7SUFFRSx5QkFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zcGlubmVyLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjc1KTtcbiAgei1pbmRleDogOTk5OTk5O1xuXG4gIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTByZW07XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGxlZnQ6IDQxLjIlO1xuICAgIHRvcDogMzYlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIH1cblxuICAuc3Bpbm5lci1pbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE3LjUlO1xuICAgIHRvcDogMTcuNSU7XG4gICAgaGVpZ2h0OiA2NSU7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHB1bHNhdGUgMXMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIH1cblxuICAuc3Bpbm5lci1vdXRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmZmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cblxuICAuc3Bpbm5lci1tZXNzYWdlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6MS4ydnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjElO1xuICAgIGxlZnQ6IDUxJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01OSUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDE1cHggIzE5MmE1NjtcbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDo1NzZweCkge1xuICAuc3Bpbm5lci1iYWNrZHJvcCB7XG4gICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpO1xuICAgIG9wYWNpdHk6IDAuMDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDgge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 53489:
/*!******************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-table/component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtTableComponent": () => (/* binding */ CtTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 76246);












function CtTableComponent_div_0_mat_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CtTableComponent_div_0_mat_checkbox_3_Template_mat_checkbox_change_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const column_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.changeFilter(column_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.tableData.metaData.display_names[column_r7], " ");
} }
function CtTableComponent_div_0_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CtTableComponent_div_0_mat_chip_9_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const value_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.remove(value_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r10, " ");
} }
function CtTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtTableComponent_div_0_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CtTableComponent_div_0_mat_checkbox_3_Template, 2, 2, "mat-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtTableComponent_div_0_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 11)(7, "mat-chip-list", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CtTableComponent_div_0_mat_chip_9_Template, 4, 2, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CtTableComponent_div_0_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.applyFilter($event.target.value); })("matChipInputTokenEnd", function CtTableComponent_div_0_Template_input_matChipInputTokenEnd_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.dropdownShow == true ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.tableData.metaData.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r5)("matChipInputSeparatorKeyCodes", ctx_r0.separatorKeysCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Items: ", ctx_r0.dataSource.filteredData.length, "");
} }
function CtTableComponent_ng_container_3_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 25);
} }
function CtTableComponent_ng_container_3_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtTableComponent_ng_container_3_ng_container_1_td_2_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const rowData_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.fetchRowNumberEdit(rowData_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.tableData.metaData.buttonName);
} }
function CtTableComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CtTableComponent_ng_container_3_ng_container_1_th_1_Template, 1, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CtTableComponent_ng_container_3_ng_container_1_td_2_Template, 3, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CtTableComponent_ng_container_3_ng_template_2_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.tableData.metaData.display_names[i_r18], " ");
} }
const _c0 = function (a0) { return { "first-column": a0 }; };
function CtTableComponent_ng_container_3_ng_template_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtTableComponent_ng_container_3_ng_template_2_td_1_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const rowData_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.fetchRowNumberView(rowData_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const rowData_r33 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const i_r18 = ctx_r36.$implicit;
    const index_r19 = ctx_r36.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r30.getStyle(i_r18, element_r32[i_r18], rowData_r33))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, index_r19 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r32[i_r18]);
} }
function CtTableComponent_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CtTableComponent_ng_container_3_ng_template_2_th_0_Template, 2, 1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CtTableComponent_ng_container_3_ng_template_2_td_1_Template, 2, 5, "td", 29);
} }
function CtTableComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CtTableComponent_ng_container_3_ng_container_1_Template, 3, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CtTableComponent_ng_container_3_ng_template_2_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.$implicit;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 == "edit")("ngIfElse", _r21);
} }
function CtTableComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
function CtTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
class CtTableComponent {
    constructor() {
        this.editAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.viewAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.tableData = { data: [], metaData: {} };
        this.values = [];
        this.colored = [];
        this.separatorKeysCodes = [13, 9, 188];
        this.isView = 'auto';
        this.filters = {};
    }
    fetchRowNumberEdit(rowData) {
        this.rowNumber = this.tempDatasource.indexOf(rowData);
        this.editAction.next(this.rowNumber);
    }
    fetchRowNumberView(rowData) {
        this.rowNumber = this.tempDatasource.indexOf(rowData);
        this.viewAction.next(this.rowNumber);
    }
    update(spinner) {
        this.isView = this.tableData.metaData.view ? 'pointer' : 'auto';
        this.tableData = this.tableGridData;
        this.columns = this.tableData.metaData.column_names;
        this.columns.forEach(key => {
            this.filters[key] = true;
        });
        if (this.tableData.metaData.buttonName == undefined) {
            this.tableData.metaData.buttonName = "EDIT";
        }
        if (this.tableData.metaData.styleAttribute != undefined) {
            this.colored = Object.keys(this.tableData.metaData.styleAttribute);
        }
        this.tempDatasource = this.tableGridData.data;
        this.editColumn();
        this.tempDatasource = this.tableGridData.data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.tableData.data);
        this.dataSource.sort = this.sort;
        if (spinner) {
            setTimeout(() => {
                spinner.hide();
            }, 0);
        }
    }
    editColumn() {
        this.tableData.metaData.column_names;
        if (this.tableData.metaData.edit && this.tableData.metaData.column_names[this.tableData.metaData.column_names.length - 1] != 'edit') {
            this.tableData.metaData.column_names = this.tableData.metaData.column_names.concat(['edit']);
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.values.push(value.trim());
            this.applyValues(this.values);
        }
        if (input) {
            input.value = '';
        }
    }
    remove(value) {
        const index = this.values.indexOf(value);
        if (index >= 0) {
            this.values.splice(index, 1);
            this.applyValues(this.values);
        }
        if (this.values.length == 0) {
            this.dataSource.filter = '';
        }
    }
    applyValues(value) {
        this.dataSource.data = this.tempDatasource;
        for (var i = 0; i < value.length; i++) {
            this.dataSource.filter = value[i].trim().toLowerCase();
            this.dataSource.data = this.dataSource.filteredData;
        }
    }
    getStyle(colName, data, rowData) {
        if (this.colored.includes(colName)) {
            var colname = this.tableData.metaData.styleAttribute[colName];
            for (var i = 0; i < colname.length; i++) {
                var dependentCol = colname[i]['dependentCol'];
                if (dependentCol) {
                    var comp = colname[i]['comp'];
                    switch (comp) {
                        case '=': {
                            if (rowData[dependentCol] == colname[i]['value']) {
                                var style = colname[i]['style'];
                                return $.extend({ 'cursor': this.isView }, style);
                            }
                            break;
                        }
                        case '<': {
                            if (rowData[dependentCol] < colname[i]['value']) {
                                var style = colname[i]['style'];
                                return $.extend({ 'cursor': this.isView }, style);
                            }
                            break;
                        }
                        case '>': {
                            if (rowData[dependentCol] > colname[i]['value']) {
                                var style = colname[i]['style'];
                                return $.extend({ 'cursor': this.isView }, style);
                            }
                            break;
                        }
                    }
                }
                else {
                    var comp = colname[i]['comp'];
                    switch (comp) {
                        case '=': {
                            if (colname[i]['value'] == data) {
                                var style = colname[i]['style'];
                                return $.extend({ 'cursor': this.isView }, style);
                            }
                            break;
                        }
                        case '<': {
                            if (colname[i]['value'] < data) {
                                var style = colname[i]['style'];
                                return $.extend({ 'cursor': this.isView }, style);
                            }
                            break;
                        }
                        case '>': {
                            if (colname[i]['value'] > data) {
                                var style = colname[i]['style'];
                                return $.extend({ 'cursor': this.isView }, style);
                            }
                            break;
                        }
                    }
                }
            }
        }
        else {
            return { 'cursor': this.isView };
        }
    }
    toggleDropdown() {
        this.dropdownShow = !this.dropdownShow;
    }
    changeFilter(column) {
        this.filters[column] = !this.filters[column];
        this.getFilterPredicate();
    }
    getFilterPredicate() {
        var toBeFiltered = [];
        Object.keys(this.filters).forEach(c => {
            this.filters[c] ? toBeFiltered.push(c) : null;
        });
        toBeFiltered.length == 0 ? toBeFiltered = this.columns : toBeFiltered = toBeFiltered;
        this.dataSource.filterPredicate = function (data, filter) {
            return toBeFiltered.some(function (column) { return data[column] ? data[column].toString().toLowerCase().includes(filter) : false; });
        };
        this.applyValues(this.values);
    }
    gotoFullScreen() {
        var element = document.getElementById("tableContainer");
        element.setAttribute('style', "height: auto;");
    }
}
CtTableComponent.ɵfac = function CtTableComponent_Factory(t) { return new (t || CtTableComponent)(); };
CtTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtTableComponent, selectors: [["ct-table"]], viewQuery: function CtTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { tableGridData: "tableGridData" }, outputs: { editAction: "editAction", viewAction: "viewAction" }, decls: 6, vars: 6, consts: [["style", "border-bottom:3px solid #f3f8fb; padding-bottom: 0.6125rem;", 4, "ngIf"], ["id", "tableContainer", 1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "border-bottom", "3px solid #f3f8fb", "padding-bottom", "0.6125rem"], ["src", "../../../../assets/images/Serach.svg", 2, "padding-left", "2.1875rem", "margin-right", "0.9375rem", 3, "click"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdown01", 1, "dropdown-menu", "autoClose", 3, "ngClass"], ["class", "dropdown-item", 3, "checked", "change", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 2, "text-align", "center", "cursor", "pointer", "color", "#004FAA", "font-family", "Roboto-Medium !important", "font-size", "0.875rem", 3, "click"], ["appearance", "none", 2, "width", "80%"], ["aria-label", " selection "], ["chipList", ""], ["color", "primary", "selected", "true", 3, "removable", "removed", 4, "ngFor", "ngForOf"], [2, "width", "100%", "font-family", "Roboto-Light", "font-size", "0.8333vw", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "keyup", "matChipInputTokenEnd"], [2, "font-family", "Roboto-Light", "font-size", "0.8rem", "color", "rgba(0,0,0,0.6)"], [1, "dropdown-item", 3, "checked", "change"], ["color", "primary", "selected", "true", 3, "removable", "removed"], ["matChipRemove", ""], [3, "matColumnDef"], [4, "ngIf", "ngIfElse"], ["dataPart", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["style", "padding-right: 14px;", "mat-cell", "", "class", "edit", "align", "end", 3, "click", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", "align", "end", 1, "edit", 2, "padding-right", "14px", 3, "click"], ["mat-button", "", 2, "outline", "none"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", "ngClass", "click", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngStyle", "ngClass", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CtTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CtTableComponent_div_0_Template, 13, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CtTableComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CtTableComponent_tr_4_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CtTableComponent_tr_5_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableData.metaData.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData.metaData.column_names);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.tableData.metaData.column_names)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.tableData.metaData.column_names);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow], styles: [".table-container[_ngcontent-%COMP%] {\n  height: 18.75rem;\n  overflow: auto;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  margin-right: 1.875rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  font-weight: bold;\n}\n\nth[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  font-family: Roboto-Medium !important;\n  font-size: 1.1vw;\n  color: rgba(150, 150, 150, 0.9);\n  border-bottom: none !important;\n}\n\ntd[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  cursor: pointer;\n  border-bottom: 1px dashed #e0e0e0 !important;\n  font-size: 0.937vw;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.edit[_ngcontent-%COMP%] {\n  font-size: 0.937;\n  font-weight: 500;\n  color: #004faa;\n}\n\n[_nghost-%COMP%]     .mat-standard-chip {\n  min-height: 26px !important;\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 0;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 20px;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  height: 6px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 20px;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.3);\n  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n.first-column[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  color: #004faa;\n  font-family: Roboto-Medium !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n[_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: 2.5rem;\n  left: 1.6rem;\n  border: none;\n  border-radius: 0.08rem;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-frame {\n  background: none;\n  border: 1px solid #8E8E8E;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background: none;\n  border: 1px solid #004FAA;\n  color: #004FAA;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checkmark-path {\n  stroke: #004FAA !important;\n}\n\n[_nghost-%COMP%]     .mat-ripple-element {\n  background: #004FAA !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFHRjs7QUFBQSxVQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFBQSxXQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwRkFBQTtFQUNBLGtHQUFBO0FBR0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBGQUFBO0VBQ0Esa0dBQUE7QUFFRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwrR0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUY7O0FBQ0E7RUFDRSw4QkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtBQUdGIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTguNzVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6MnJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OjEuODc1cmVtO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiBcbn1cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG50aHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOjEuMXZ3O1xuICBjb2xvcjogcmdiYSgxNTAsMTUwLDE1MCwwLjkpO1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG50ZHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOjFweCBkYXNoZWQgI2UwZTBlMCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45Mzd2dztcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xufVxuXG4uZWRpdHtcbiAgZm9udC1zaXplOiAwLjkzNztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDRmYWE7XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc3RhbmRhcmQtY2hpcHtcbiAgbWluLWhlaWdodDogMjZweCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDA7XG59XG4gIFxuLyogVHJhY2sgKi9cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjsgXG59XG5cbi8qIEhhbmRsZSAqL1xuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLy8gLyogSGFuZGxlIG9uIGhvdmVyICovXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG5cbi5maXJzdC1jb2x1bW57XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBjb2xvcjogIzAwNGZhYTtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCAuZHJvcGRvd24tbWVudXtcbiAgdG9wOiAyLjVyZW07XG4gIGxlZnQ6IDEuNnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjA4cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBiYWNrZ3JvdW5kOm5vbmU7XG4gIGJvcmRlcjoxcHggc29saWQgIzhFOEU4RTtcbn1cblxuOmhvc3QgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOm5vbmU7XG4gIGJvcmRlcjoxcHggc29saWQgIzAwNEZBQTtcbiAgY29sb3I6ICMwMDRGQUE7IFxufVxuOmhvc3QgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgc3Ryb2tlOiAjMDA0RkFBIWltcG9ydGFudDtcbn1cblxuOmhvc3QgIDo6bmctZGVlcCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZDogIzAwNEZBQSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOmF1dG87XG59Il19 */"] });


/***/ }),

/***/ 53016:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-textbox/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTTextboxComponent": () => (/* binding */ CTTextboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 62544);







function CTTextboxComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CTTextboxComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.field.errorId, " ");
} }
class CTTextboxComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.control = this.fd.formGroup.get(this.field.name);
    }
    valueChangeDetector($event) {
        this.valueChange.next(this.fd.getFieldValue(this.field.name));
    }
}
CTTextboxComponent.ɵfac = function CTTextboxComponent_Factory(t) { return new (t || CTTextboxComponent)(); };
CTTextboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CTTextboxComponent, selectors: [["ct-textbox"]], inputs: { field: "field", fd: "fd", type: "type" }, outputs: { valueChange: "valueChange" }, decls: 13, vars: 11, consts: [["appearance", "fill", 1, "col"], ["class", "optional", 4, "ngIf"], ["matPrefix", ""], ["matInput", "", 3, "type", "formControl", "required", "readonly", "placeholder", "input"], ["matSuffix", ""], [4, "ngIf"], [1, "optional"]], template: function CTTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CTTextboxComponent_span_3_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CTTextboxComponent_Template_input_input_6_listener($event) { return ctx.valueChangeDetector($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CTTextboxComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.field.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.field.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.field.placeHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.control)("required", ctx.field.isRequired)("readonly", ctx.field.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.hint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError], styles: ["[_nghost-%COMP%]     .mat-form-field-infix {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  letter-spacing: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #F8F8F8 !important;\n  padding: 8px 4px 3px 14px !important;\n  height: 5.5vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: black;\n  letter-spacing: 0;\n  opacity: 0.54;\n  padding-bottom: 2px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field .mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-input-element::-moz-placeholder {\n  opacity: 0.34;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  opacity: 0.34;\n}\n\n.optional[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFDQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOjA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjggIWltcG9ydGFudDtcbiAgcGFkZGluZzo4cHggNHB4IDNweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNS41dmg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgb3BhY2l0eTogMC41NDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDRGQUE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDAuMzQ7XG59XG5cbi5vcHRpb25hbHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"] });


/***/ }),

/***/ 32039:
/*!******************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-title/component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtTitleComponent": () => (/* binding */ CtTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CtTitleComponent {
}
CtTitleComponent.ɵfac = function CtTitleComponent_Factory(t) { return new (t || CtTitleComponent)(); };
CtTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtTitleComponent, selectors: [["ct-title"]], inputs: { title: "title", subTitle: "subTitle" }, decls: 5, vars: 2, consts: [[1, "title"], [1, "sub-title"]], template: function CtTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subTitle);
    } }, styles: [".title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #004FAA;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: gray;\n  font-family: Roboto-Light;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6ImNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICBmb250LXNpemU6IDEuMjVyZW07IFxuICBjb2xvcjogIzAwNEZBQTtcbn1cblxuLnN1Yi10aXRsZXtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBncmF5O1xuICBmb250LWZhbWlseTogUm9ib3RvLUxpZ2h0O1xufSJdfQ== */"] });


/***/ }),

/***/ 70563:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/elements/ct-toolbar/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTToolbarComponent": () => (/* binding */ CTToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _formdata_form_serviceAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formdata/form/serviceAgent */ 47877);
/* harmony import */ var _formdata_form_clientContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formdata/form/clientContext */ 53594);
/* harmony import */ var src_app_services_routerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routerService */ 43512);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 62544);





class CTToolbarComponent {
    constructor(sa, ctx, routerService) {
        this.sa = sa;
        this.ctx = ctx;
        this.routerService = routerService;
        this.dropdownShow = false;
        /**
         * setting the logged in username to display in the dropdown menu
         */
        this.userName = this.ctx.getUser().userType;
        this.loginId = this.ctx.getUser().loginId;
    }
    /**
     * toggles the dropdownShow class to show and hide, true shows the dropdown, false hides the dropdown
     */
    toggleDropdown() {
        this.dropdownShow = !this.dropdownShow;
    }
    /**
     * logout function
     */
    doLogout() {
        this.ctx.logout();
        this.sa.serve('logout').subscribe();
    }
    /**
     * function to reset the password
     */
    /**
     * Call the change season screen
     */
    changeSeason() {
        this.routerService.openSeasonSelect();
        // this.groupPanel.showSeasonSelect();
    }
}
CTToolbarComponent.ɵfac = function CTToolbarComponent_Factory(t) { return new (t || CTToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_formdata_form_serviceAgent__WEBPACK_IMPORTED_MODULE_0__.ServiceAgent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_formdata_form_clientContext__WEBPACK_IMPORTED_MODULE_1__.ClientContext), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_routerService__WEBPACK_IMPORTED_MODULE_2__.RouterService)); };
CTToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CTToolbarComponent, selectors: [["ct-toolbar"]], decls: 25, vars: 2, consts: [[1, "toolbar", 2, "margin", "0", "padding", "0"], [1, "row", "col-md-12", 2, "margin", "0", "padding-right", "2rem", "padding-left", "1.35rem"], [2, "width", "25%"], [1, "row", 2, "margin", "0", "padding", "0", "margin-top", "0.39rem"], ["src", "../../../../assets/images/bms.png"], [1, "trust-heading"], ["align", "end", 1, "icons", 2, "width", "75%"], [1, "dropdown", 2, "float", "right"], [1, "action-icon", "dropbtn"], [1, "dropdown-content"], [1, "dropdown-item", 2, "font-size", "14px", "font-weight", "1000"], [1, "dropdown-item", 2, "font-size", "12px", "color", "#004faa", "font-weight", "200"], [1, "dropdown-item", 2, "font-size", "14px", "font-weight", "1000", 3, "click"]], template: function CTToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "B.M.S College Of Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "a", 10)(13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CTToolbarComponent_Template_a_click_18_listener() { return ctx.changeSeason(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Change Season");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CTToolbarComponent_Template_a_click_23_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.loginId);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".toolbar[_ngcontent-%COMP%] {\n  background-color: #004faa;\n  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.16);\n  height: 3.125rem;\n}\n\n.trust-heading[_ngcontent-%COMP%] {\n  font-family: Roboto-Bold;\n  font-size: 1rem;\n  color: #fff;\n  margin-top: 0.625rem;\n}\n\n.icons[_ngcontent-%COMP%] {\n  padding: 0.625rem 0;\n  color: #fff;\n  margin: 0;\n}\n\n[_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 2.1vw;\n}\n\n.action-icon[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n  font-size: 2vw;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 2.125rem;\n  height: 2rem;\n  padding: 0.8vh 0.7vw 0 0;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  top: 3rem;\n  left: 84%;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n[_nghost-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n[_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #fff;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n[_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n  display: block;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSx5Q0FBQTtFQUVBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUVJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUFpQyx5QkFBQTtBQUFqQzs7QUFDQTtFQUF5QyxjQUFBO0FBR3pDOztBQURBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FBSUoiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZmFhO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDlweCByZ2JhKDAsIDAsIDAsIC4xNik7XG5cbiAgICBoZWlnaHQ6IDMuMTI1cmVtO1xufVxuXG4udHJ1c3QtaGVhZGluZ3tcbiAgICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQ7XG4gICAgZm9udC1zaXplOjFyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMC42MjVyZW07XG59XG5cbi5pY29uc1xue1xuICAgIHBhZGRpbmc6MC42MjVyZW0gMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46MDtcbn1cblxuOmhvc3QgLnJvd3tcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzowIDIuMXZ3OyAgICBcbn1cblxuLmFjdGlvbi1pY29ue1xuICAgIG1hcmdpbi1sZWZ0OiAydnc7XG4gICAgZm9udC1zaXplOjJ2dztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZ3tcbiAgICB3aWR0aDogMi4xMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmc6MC44dmggMC43dncgMCAwO1xufVxuXG4uZHJvcGRvd24tbWVudXtcbiAgICB0b3A6IDNyZW07XG4gICAgbGVmdDogODQlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG46aG9zdCAuZHJvcGJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbjpob3N0IC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiAgXG46aG9zdCAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICBtYXJnaW46IDAuMTI1cmVtIDAgMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4gIFxuOmhvc3QgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuOmhvc3QgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTt9XG46aG9zdCAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cblxuOmhvc3QgLmRyb3Bkb3duLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMS41cmVtO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbn0iXX0= */"] });


/***/ }),

/***/ 78034:
/*!********************************************************!*\
  !*** ./src/app/framework-modules/elements/elements.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsModule": () => (/* binding */ ElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ct_login_textbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ct-login-textbox/component */ 88145);
/* harmony import */ var _elements_ct_primary_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/ct-primary-button/component */ 94654);
/* harmony import */ var _elements_ct_secondary_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/ct-secondary-button/component */ 41396);
/* harmony import */ var _ct_primary_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ct-primary-navigation/component */ 53784);
/* harmony import */ var _elements_ct_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/ct-dropdown/component */ 35325);
/* harmony import */ var _elements_ct_reset_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/ct-reset-button/component */ 53912);
/* harmony import */ var _ct_textbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ct-textbox/component */ 53016);
/* harmony import */ var _ct_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ct-toolbar/component */ 70563);
/* harmony import */ var _ct_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ct-table/component */ 53489);
/* harmony import */ var _ct_barchart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ct-barchart/component */ 5752);
/* harmony import */ var _ct_grouped_barchart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ct-grouped-barchart/component */ 28975);
/* harmony import */ var _ct_piechart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ct-piechart/component */ 24856);
/* harmony import */ var _ct_navigation_tile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ct-navigation-tile/component */ 73176);
/* harmony import */ var _ct_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ct-sidenav/component */ 51510);
/* harmony import */ var _ct_datepicker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ct-datepicker/component */ 37174);
/* harmony import */ var _ct_selectable_chips_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ct-selectable-chips/component */ 99479);
/* harmony import */ var _ct_selectable_chips_1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ct-selectable-chips-1/component */ 12168);
/* harmony import */ var _ct_back_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ct-back-button/component */ 88471);
/* harmony import */ var _ct_checkbox_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ct-checkbox-table/component */ 30539);
/* harmony import */ var _ct_badges_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ct-badges/component */ 74430);
/* harmony import */ var _ct_badges_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ct-badges-table/component */ 62975);
/* harmony import */ var _ct_editable_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ct-editable-table/component */ 89652);
/* harmony import */ var _ct_badges_1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ct-badges-1/component */ 16078);
/* harmony import */ var _ct_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ct-dialog/component */ 87179);
/* harmony import */ var _ct_danger_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ct-danger-button/component */ 94128);
/* harmony import */ var _ct_checkbox_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ct-checkbox/component */ 82900);
/* harmony import */ var _ct_spinner_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ct-spinner/component */ 38499);
/* harmony import */ var _ct_searchbar_fd_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ct-searchbar-fd/component */ 21385);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);
/* harmony import */ var _ct_sidenav_1_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ct-sidenav-1/component */ 97058);
/* harmony import */ var _ct_output_4_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ct-output-4/component */ 54125);
/* harmony import */ var _ct_output_3_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ct-output-3/component */ 49127);
/* harmony import */ var _ct_piegridchart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ct-piegridchart/component */ 31142);
/* harmony import */ var _ct_advanced_piechart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ct-advanced-piechart/component */ 12221);
/* harmony import */ var _ct_title_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ct-title/component */ 32039);
/* harmony import */ var _ct_linechart_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ct-linechart/component */ 66538);
/* harmony import */ var _ct_number_card_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ct-number-card/component */ 39485);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/button-toggle */ 68491);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/grid-list */ 66238);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/progress-spinner */ 88824);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/sidenav */ 15754);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _ct_linear_gauge_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ct-linear-gauge/component */ 52839);
/* harmony import */ var _ct_horizontal_barchart_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ct-horizontal-barchart/component */ 6244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ 3184);






























































class ElementsModule {
    constructor() {
    }
}
ElementsModule.ɵfac = function ElementsModule_Factory(t) { return new (t || ElementsModule)(); };
ElementsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: ElementsModule });
ElementsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ imports: [[
            /**
             * Material Component Imports
             */
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__.MatIconModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__.MatSidenavModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__.MatChipsModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_48__.MatPaginatorModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_49__.MatCheckboxModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__.NgxChartsModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__.MatTooltipModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_51__.MatCardModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatNativeDateModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__.MatSnackBarModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__.MatButtonToggleModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__.MatDialogModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_58__.MatProgressSpinnerModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__.MatGridListModule,
            /**
             * Banyantree Compoenent  Imports
             */
            /**
             * Miscellaneous Imports
             */
            _angular_forms__WEBPACK_IMPORTED_MODULE_60__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_61__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_60__.FormsModule,
        ], 
        /**
         * Material Component Exports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__.MatSidenavModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__.NgxChartsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_48__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_49__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_51__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatNativeDateModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_58__.MatProgressSpinnerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__.MatGridListModule,
        /**
         * Miscellaneous Exports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_60__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_61__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_60__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](ElementsModule, { declarations: [
        /**
         * Material Component Declarations
         */
        /**
         * Banyantree Compoenent Declarations
         */
        _ct_login_textbox_component__WEBPACK_IMPORTED_MODULE_0__.CTLoginTextboxComponent,
        _elements_ct_primary_button_component__WEBPACK_IMPORTED_MODULE_1__.CTPrimaryButtonComponent,
        _elements_ct_secondary_button_component__WEBPACK_IMPORTED_MODULE_2__.CTSecondaryyButtonComponent,
        _ct_primary_navigation_component__WEBPACK_IMPORTED_MODULE_3__.CTPrimaryNavigationComponent,
        _ct_textbox_component__WEBPACK_IMPORTED_MODULE_6__.CTTextboxComponent,
        _elements_ct_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.CTDropDownComponent,
        _elements_ct_reset_button_component__WEBPACK_IMPORTED_MODULE_5__.CTResetButtonComponent,
        _ct_table_component__WEBPACK_IMPORTED_MODULE_8__.CtTableComponent,
        _ct_barchart_component__WEBPACK_IMPORTED_MODULE_9__.CtBarChartComponent,
        _ct_grouped_barchart_component__WEBPACK_IMPORTED_MODULE_10__.CtGroupedBarChartComponent,
        _ct_piechart_component__WEBPACK_IMPORTED_MODULE_11__.CtPieChartComponent,
        _ct_piegridchart_component__WEBPACK_IMPORTED_MODULE_32__.CtPieGridChartComponent,
        _ct_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.CTToolbarComponent,
        _ct_navigation_tile_component__WEBPACK_IMPORTED_MODULE_12__.CTNavigationTileComponent,
        _ct_sidenav_component__WEBPACK_IMPORTED_MODULE_13__.CtSideNavComponent,
        _ct_datepicker_component__WEBPACK_IMPORTED_MODULE_14__.CTDatePickerComponent,
        _ct_selectable_chips_component__WEBPACK_IMPORTED_MODULE_15__.CTSelectableChipsComponent,
        _ct_selectable_chips_1_component__WEBPACK_IMPORTED_MODULE_16__.CTSelectableChipsComponent1,
        _ct_back_button_component__WEBPACK_IMPORTED_MODULE_17__.CtBackButtonComponent,
        _ct_checkbox_table_component__WEBPACK_IMPORTED_MODULE_18__.CtCheckboxTableComponent,
        _ct_badges_component__WEBPACK_IMPORTED_MODULE_19__.CtBadgesComponent,
        _ct_badges_table_component__WEBPACK_IMPORTED_MODULE_20__.CtBadgesTableComponent,
        _ct_editable_table_component__WEBPACK_IMPORTED_MODULE_21__.CtEditableTableComponent,
        _ct_badges_1_component__WEBPACK_IMPORTED_MODULE_22__.CtBadges1Component,
        _ct_dialog_component__WEBPACK_IMPORTED_MODULE_23__.CtDialogComponent,
        _ct_danger_button_component__WEBPACK_IMPORTED_MODULE_24__.CtDangerButtonComponent,
        _ct_checkbox_component__WEBPACK_IMPORTED_MODULE_25__.CtCheckboxComponent,
        _ct_spinner_component__WEBPACK_IMPORTED_MODULE_26__.CtSpinner,
        _ct_searchbar_fd_component__WEBPACK_IMPORTED_MODULE_27__.CtSearchBarFdComponent,
        _ct_sidenav_1_component__WEBPACK_IMPORTED_MODULE_29__.CtSideNavOneComponent,
        _ct_output_3_component__WEBPACK_IMPORTED_MODULE_31__.CTOutput3Component,
        _ct_output_4_component__WEBPACK_IMPORTED_MODULE_30__.CTOutput4Component,
        _ct_advanced_piechart_component__WEBPACK_IMPORTED_MODULE_33__.CtAdvancedPieChartComponent,
        _ct_title_component__WEBPACK_IMPORTED_MODULE_34__.CtTitleComponent,
        _ct_linechart_component__WEBPACK_IMPORTED_MODULE_35__.CtLineChartComponent,
        _ct_number_card_component__WEBPACK_IMPORTED_MODULE_36__.CtNumberCardComponent,
        _ct_linear_gauge_component__WEBPACK_IMPORTED_MODULE_37__.CtLinearGaugeComponent,
        _ct_horizontal_barchart_component__WEBPACK_IMPORTED_MODULE_38__.CtHorizontalBarChartComponent], imports: [
        /**
         * Material Component Imports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_48__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_49__.MatCheckboxModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__.NgxChartsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_51__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatNativeDateModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_58__.MatProgressSpinnerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__.MatGridListModule,
        /**
         * Banyantree Compoenent  Imports
         */
        /**
         * Miscellaneous Imports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_60__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_61__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_60__.FormsModule], exports: [
        /**
         * Material Component Exports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__.MatSidenavModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__.NgxChartsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_48__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_49__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_51__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatNativeDateModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_55__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_58__.MatProgressSpinnerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__.MatGridListModule,
        /**
         * Banyantree Compoenents Exports
         */
        _ct_login_textbox_component__WEBPACK_IMPORTED_MODULE_0__.CTLoginTextboxComponent,
        _elements_ct_primary_button_component__WEBPACK_IMPORTED_MODULE_1__.CTPrimaryButtonComponent,
        _elements_ct_secondary_button_component__WEBPACK_IMPORTED_MODULE_2__.CTSecondaryyButtonComponent,
        _ct_primary_navigation_component__WEBPACK_IMPORTED_MODULE_3__.CTPrimaryNavigationComponent,
        _ct_textbox_component__WEBPACK_IMPORTED_MODULE_6__.CTTextboxComponent,
        _elements_ct_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.CTDropDownComponent,
        _elements_ct_reset_button_component__WEBPACK_IMPORTED_MODULE_5__.CTResetButtonComponent,
        _ct_table_component__WEBPACK_IMPORTED_MODULE_8__.CtTableComponent,
        _ct_barchart_component__WEBPACK_IMPORTED_MODULE_9__.CtBarChartComponent,
        _ct_grouped_barchart_component__WEBPACK_IMPORTED_MODULE_10__.CtGroupedBarChartComponent,
        _ct_piechart_component__WEBPACK_IMPORTED_MODULE_11__.CtPieChartComponent,
        _ct_piegridchart_component__WEBPACK_IMPORTED_MODULE_32__.CtPieGridChartComponent,
        _ct_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.CTToolbarComponent,
        _ct_navigation_tile_component__WEBPACK_IMPORTED_MODULE_12__.CTNavigationTileComponent,
        _ct_sidenav_component__WEBPACK_IMPORTED_MODULE_13__.CtSideNavComponent,
        _ct_datepicker_component__WEBPACK_IMPORTED_MODULE_14__.CTDatePickerComponent,
        _ct_selectable_chips_component__WEBPACK_IMPORTED_MODULE_15__.CTSelectableChipsComponent,
        _ct_selectable_chips_1_component__WEBPACK_IMPORTED_MODULE_16__.CTSelectableChipsComponent1,
        _ct_back_button_component__WEBPACK_IMPORTED_MODULE_17__.CtBackButtonComponent,
        _ct_checkbox_table_component__WEBPACK_IMPORTED_MODULE_18__.CtCheckboxTableComponent,
        _ct_badges_component__WEBPACK_IMPORTED_MODULE_19__.CtBadgesComponent,
        _ct_badges_table_component__WEBPACK_IMPORTED_MODULE_20__.CtBadgesTableComponent,
        _ct_editable_table_component__WEBPACK_IMPORTED_MODULE_21__.CtEditableTableComponent,
        _ct_badges_1_component__WEBPACK_IMPORTED_MODULE_22__.CtBadges1Component,
        _ct_dialog_component__WEBPACK_IMPORTED_MODULE_23__.CtDialogComponent,
        _ct_danger_button_component__WEBPACK_IMPORTED_MODULE_24__.CtDangerButtonComponent,
        _ct_checkbox_component__WEBPACK_IMPORTED_MODULE_25__.CtCheckboxComponent,
        _ct_spinner_component__WEBPACK_IMPORTED_MODULE_26__.CtSpinner,
        _ct_searchbar_fd_component__WEBPACK_IMPORTED_MODULE_27__.CtSearchBarFdComponent,
        _ct_sidenav_1_component__WEBPACK_IMPORTED_MODULE_29__.CtSideNavOneComponent,
        _ct_output_3_component__WEBPACK_IMPORTED_MODULE_31__.CTOutput3Component,
        _ct_output_4_component__WEBPACK_IMPORTED_MODULE_30__.CTOutput4Component,
        _ct_advanced_piechart_component__WEBPACK_IMPORTED_MODULE_33__.CtAdvancedPieChartComponent,
        _ct_title_component__WEBPACK_IMPORTED_MODULE_34__.CtTitleComponent,
        _ct_linechart_component__WEBPACK_IMPORTED_MODULE_35__.CtLineChartComponent,
        _ct_number_card_component__WEBPACK_IMPORTED_MODULE_36__.CtNumberCardComponent,
        _ct_linear_gauge_component__WEBPACK_IMPORTED_MODULE_37__.CtLinearGaugeComponent,
        _ct_horizontal_barchart_component__WEBPACK_IMPORTED_MODULE_38__.CtHorizontalBarChartComponent,
        /**
         * Miscellaneous Exports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_60__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_61__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_60__.FormsModule] }); })();


/***/ }),

/***/ 86230:
/*!*****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/clientConfig.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientConfig": () => (/* binding */ ClientConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ClientConfig {
    constructor() {
        // url = 'https://java-prod-bmsc-us.herokuapp.com/a';
        // url = 'https://java-staging.herokuapp.com/a';
        this.url = 'http://localhost:8080/a';
    }
}
ClientConfig.ɵfac = function ClientConfig_Factory(t) { return new (t || ClientConfig)(); };
ClientConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientConfig, factory: ClientConfig.ɵfac, providedIn: "root" });


/***/ }),

/***/ 53594:
/*!******************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/clientContext.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientContext": () => (/* binding */ ClientContext)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_routerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/routerService */ 43512);


const USER = "_user";
const TOKEN = "_token";
const INST = "_instId";
const SEASON = "_currentSeasonId";
const ALL_PAGES = [
    { name: "D01", value: "D01" },
    { name: "D02", value: "D02" },
    { name: "D03", value: "D03" },
    { name: "D04", value: "D04" },
    { name: "D05", value: "D05" },
    { name: "D06", value: "D06" },
    { name: "D07", value: "D07" },
    { name: "D08", value: "D08" },
    { name: "D09", value: "D09" },
    { name: "D10", value: "D10" },
    { name: "D11", value: "D11" },
    { name: "D12", value: "D12" },
    { name: "D13", value: "D13" },
    { name: "D14", value: "D14" },
    { name: "D15", value: "D15" },
    { name: "D16", value: "D16" },
    { name: "D17", value: "D17" },
    { name: "D18", value: "D18" },
    { name: "D19", value: "D19" },
    { name: "D20", value: "D20" },
    { name: "D21", value: "D21" },
    { name: "D22", value: "D22" },
    { name: "D23", value: "D23" },
    { name: "D24", value: "D24" },
    { name: "D25", value: "D25" },
    { name: "D26", value: "D26" },
    { name: "D27", value: "D27" },
    { name: "D28", value: "D28" },
    { name: "D29", value: "D29" },
    { name: "D30", value: "D30" },
    { name: "D31", value: "D31" },
    { name: "D32", value: "D32" },
    { name: "D33", value: "D33" },
    { name: "D34", value: "D34" },
    { name: "D35", value: "D35" },
    { name: "D36", value: "D36" },
    { name: "D37", value: "D37" },
    { name: "D38", value: "D38" },
    { name: "D39", value: "D39" },
    { name: "D40", value: "D40" },
    { name: "D41", value: "D41" },
    { name: "D42", value: "D42" },
    { name: "D43", value: "D43" },
    { name: "D44", value: "D44" },
    { name: "D45", value: "D45" },
    { name: "D46", value: "D46" },
    { name: "D47", value: "D47" },
    { name: "D48", value: "D48" },
    { name: "D49", value: "D49" },
    { name: "D50", value: "D50" },
    { name: "D51", value: "D51" },
    { name: "D52", value: "D52" },
    { name: "D53", value: "D53" },
    { name: "D54", value: "D54" },
    { name: "D55", value: "D55" },
    { name: "D56", value: "D56" },
    { name: "D57", value: "D57" },
    { name: "D58", value: "D58" },
    { name: "D59", value: "D59" },
    { name: "D60", value: "D60" },
    { name: "D61", value: "D61" },
    { name: "D62", value: "D62" },
    { name: "D63", value: "D63" },
    { name: "D64", value: "D64" },
    { name: "D65", value: "D65" },
    { name: "D66", value: "D66" },
    { name: "D67", value: "D67" },
    { name: "D68", value: "D68" },
    { name: "D69", value: "D69" },
    { name: "D70", value: "D70" },
    { name: "D71", value: "D71" },
    { name: "D72", value: "D72" },
    { name: "D73", value: "D73" },
    { name: "D74", value: "D74" },
    { name: "D75", value: "D75" },
    { name: "D76", value: "D76" },
    { name: "D77", value: "D77" },
    { name: "D78", value: "D78" },
    { name: "D79", value: "D79" },
    { name: "D80", value: "D80" },
    { name: "D101", value: "D101" },
    { name: "D102", value: "D102" },
    { name: "D103", value: "D103" },
    { name: "D104", value: "D104" },
    { name: "D105", value: "D105" },
    { name: "D106", value: "D106" },
    { name: "D107", value: "D107" },
    { name: "D108", value: "D108" },
    { name: "D109", value: "D109" },
    { name: "D110", value: "D110" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D35", value: "D35" },
    { name: "D80", value: "D80" },
    { name: "D81", value: "D81" },
    { name: "D82", value: "D82" },
    { name: "D83", value: "D83" },
    { name: "D84", value: "D84" },
    { name: "D85", value: "D85" },
    { name: "D86", value: "D86" },
    { name: "D87", value: "D87" },
    { name: "D88", value: "D88" },
    { name: "D89", value: "D89" },
    { name: "D111", value: "D111" },
    { name: "D112", value: "D112" },
    { name: "D120", value: "D120" },
    { name: "D112", value: "D112" },
    { name: "D113", value: "D113" },
    { name: "D121", value: "D121" },
    { name: "D122", value: "D122" },
    { name: "D130", value: "D130" },
    { name: "D131", value: "D131" },
    { name: "D132", value: "D132" },
    { name: "D133", value: "D133" },
    { name: "D134", value: "D134" },
    { name: "D135", value: "D135" },
    { name: "D136", value: "D136" },
    { name: "D137", value: "D137" },
    { name: "D138", value: "D138" },
    { name: "D139", value: "D139" },
    { name: "D140", value: "D140" },
    { name: "D141", value: "D141" },
    { name: "D142", value: "D142" },
    { name: "D143", value: "D143" },
    { name: "D144", value: "D144" },
    { name: "D145", value: "D145" },
    { name: "D146", value: "D146" },
    { name: "D147", value: "D147" },
    { name: "D148", value: "D148" },
    { name: "D149", value: "D149" },
    { name: "D150", value: "D150" },
    { name: "D151", value: "D151" },
    { name: "D152", value: "D152" },
    { name: "D153", value: "D153" },
    { name: "D154", value: "D154" },
    { name: "D155", value: "D155" },
    { name: "D156", value: "D156" },
    { name: "D157", value: "D157" },
    { name: "D158", value: "D158" },
    { name: "D159", value: "D159" },
    { name: "D160", value: "D160" },
    { name: "D161", value: "D161" },
    { name: "D162", value: "D162" },
    { name: "D163", value: "D163" },
    { name: "D164", value: "D164" },
    { name: "D165", value: "D165" },
    { name: "D166", value: "D166" },
    { name: "D167", value: "D167" },
    { name: "D168", value: "D168" },
    { name: "D169", value: "D169" },
    { name: "D170", value: "D170" },
    { name: "D171", value: "D171" },
    { name: "D172", value: "D172" },
    { name: "D173", value: "D173" },
    { name: "D174", value: "D174" },
    { name: "D175", value: "D175" },
    { name: "D176", value: "D176" },
];
const permittedScreensForStudents = ["D34", "D35", "D87", "D89", "D123", "D138"];
const permittedScreens = ["D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", "D10",
    "D11", "D12", "D13", "D14",
    "D15", "D16", "D17", "D18", "D17", "D18", "D19", "D20", "D21", "D22", "D23",
    "D24", "D25", "D26", "D27", "D28", "D29", "D30", "D31",
    "D32", "D33", "D34", "D35", "D36", "D37", "D38", "D39", "D40", "D41", "D42", "D43", "D44",
    "D45", "D46", "D47", "D48", "D49", "D50", "D51", "D52", "D53", "D54", "D55", "D56", "D57", "D58",
    "D59", "D60", "D61", "D62", "D63", "D64", "D65", "D66", "D67", "D68", "D69", "D70", "D71", "D72",
    "D73", "D74", "D75", "D76", "D77", "D78", "D79", "D80", "D83", "D84", "D85", "D86", "D87", "D88", "D89",
    /* added for bhandi's sake */
    "D101", "D102", "D103", "D104", "D105", "D106", "D107", "D108", "D109", "D110", "D80", "D81", "D82", "D111", "D112", "D120", "D113",
    "D122", "D123",
    "D130", "D131",
    "D132",
    "D133", "D134",
    "D135", "D136",
    "D137",
    "D138", "D139", "D140",
    "D141",
    "D142",
    "D143",
    "D144",
    "D145",
    "D146",
    "D147",
    "D148",
    "D149",
    "D150",
    "D151",
    "D152",
    "D153",
    "D154",
    "D155",
    "D156",
    "D157",
];
class ClientContext {
    constructor(rs) {
        this.rs = rs;
        this.values = new Map();
        this.validPages = {};
        this.validPagesArray = [];
    }
    setToken(token) {
        this.setValue(TOKEN, token);
    }
    /**
     *
     * @param data vo returned by the server on a successful login
     */
    login(user) {
        this.setValue(USER, user);
        this.setValue(INST, user.instituteId);
        this.setValue(SEASON, user.currentSeasonId);
        this.validPagesArray = [];
        if (user.userType == "Student") {
            this.validPagesArray = permittedScreensForStudents;
        }
        else {
            const p = user.allowedPages;
            if (p) {
                this.validPagesArray = p.split(',');
            }
            else {
                ALL_PAGES.forEach(pair => { this.validPagesArray.push(pair.name); });
            }
        }
        /**
         * get allowed pages into an object
         */
        this.validPagesArray.forEach(pid => {
            this.validPages[pid.trim()] = true;
        });
    }
    /**
     *
     * @param data vo returned by the server on a successful login
     */
    logout() {
        this.setValue(TOKEN, null);
        this.setValue(INST, null);
        this.setValue(USER, null);
        this.validPagesArray = [];
        this.validPages = [];
        this.rs.openNonSession();
    }
    /**
     * any data that  is to be saved as part of session.
     * This will survive page reloads, but not browser closure
     *
     * @param key
     * @param value
     */
    setValue(key, value) {
        this.values.set(key, value);
        if (value == null) {
            sessionStorage.removeItem(key);
        }
        else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
    /**
     * value of a field that is session scoped
     * @param key
     */
    getValue(key) {
        let value = this.values.get(key);
        if (value) {
            return value;
        }
        const s = sessionStorage.getItem(key);
        // console.log('Session value of ' + key, s);
        if (!s) {
            return s;
        }
        value = s;
        this.values.set(key, value);
        return value;
    }
    /**
    * details of logged-in user.
    */
    getToken() {
        return this.getValue(TOKEN);
    }
    /**
      * details of logged-in user.
      */
    getUser() {
        return this.getValue(USER);
    }
    /**
    * Gets the InstituteID for context
    */
    getInstituteId() {
        return this.getValue(INST);
    }
    /**
    * Gets the SeasonId for context
    */
    setcurrentSeasonId(seasonId) {
        this.setValue(SEASON, seasonId);
    }
    /**
    * Gets the SeasonId for context
    */
    getcurrentSeasonId() {
        return this.getValue(SEASON);
    }
    /**
     *
     * @param inst instutututeId to which to switch the context to
     */
    switchInstitute(inst) {
        if (inst) {
            this.setValue(INST, inst);
        }
        // console.log("Can not switch to institute 0");
    }
    /**
     * Returns the array of permitted screens for a user.
     */
    getPermittedScreens() {
        return this.validPagesArray;
    }
    /**
     * is the logged in user allowed to use this page?
     * @param pageId
     */
    isPageValid(pageId) {
        return this.validPages[pageId];
    }
}
ClientContext.ɵfac = function ClientContext_Factory(t) { return new (t || ClientContext)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService)); };
ClientContext.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientContext, factory: ClientContext.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61852:
/*!****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/conventions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Conventions": () => (/* binding */ Conventions)
/* harmony export */ });
/**
 * constants/conventions that are used across layers.
 * These are fixed at design time. deployment-time parameters can be found in Config
 */
class Conventions {
}
/**
 * HTTP headers
 */
Conventions.HEADER_SERVICE = '_s';
Conventions.HEADER_AUTH = 'Authorization';
/**
 * tags or field names in the paylaod back-and-forth
 */
Conventions.TAG_MESSAGES = 'messages';
Conventions.TAG_ALL_OK = 'allOk';
Conventions.TAG_DATA = 'data';
Conventions.TAG_LIST = 'list';
Conventions.TAG_MAX_ROWS = 'maxRows';
Conventions.TAG_CONDITIONS = 'conditions';
Conventions.TAG_FILTER_COMP = 'comp';
Conventions.TAG_FILTER_VALUE = 'value';
Conventions.TAG_FILTER_VALUE_TO = 'toValue';
/**
* special pre-defined service to get drop-down values
*/
Conventions.SERVICE_LIST = 'list';
/*
 * form I/O service prefixes
 */
Conventions.OP_FETCH = 'get';
Conventions.OP_NEW = 'create';
Conventions.OP_UPDATE = 'update';
Conventions.OP_DELETE = 'delete';
Conventions.OP_FILTER = 'filter';
Conventions.OP_BULK = 'bulk';
/*
 * filter operators
 */
Conventions.FILTER_EQ = '=';
Conventions.FILTER_NE = '!=';
Conventions.FILTER_LE = '<=';
Conventions.FILTER_LT = '<';
Conventions.FILTER_GE = '>=';
Conventions.FILTER_GT = '>';
Conventions.FILTER_BETWEEN = '><';
Conventions.FILTER_STARTS_WITH = '^';
Conventions.FILTER_CONTAINS = '~';
/*
 * value types of fields
 */
Conventions.TYPE_TEXT = 0;
Conventions.TYPE_INTEGER = 1;
Conventions.TYPE_DECIMAL = 2;
Conventions.TYPE_BOOLEAN = 3;
Conventions.TYPE_DATE = 4;
Conventions.TYPE_TIMESTAMP = 5;


/***/ }),

/***/ 39456:
/*!*********************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/form.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _formData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formData */ 70784);

/**
 * represents the data model, both structure and run-time data
 */
class Form {
    constructor() {
        /**
         * for operations are offered to guests/unauthenticated/non-logged-in users?
         */
        this.serveGuests = false;
    }
    /**
     * create a model (data-holder) for this form
     * @param serverAgent is injectable
     */
    newFormData(serverAgent) {
        return new _formData__WEBPACK_IMPORTED_MODULE_0__.FormData(this, serverAgent);
    }
    /**
     * create a model (data-holder) for this form
     * @param serverAgent is injectable
     */
    newPanelData(serverAgent) {
        return new _formData__WEBPACK_IMPORTED_MODULE_0__.PanelData(this, serverAgent);
    }
    /**
     *
     * @param operation
     * @returns service name of the form "operation-formName", say filter-costomer
     */
    getServiceName(operation) {
        if (this.opAllowed(operation)) {
            return operation + '_' + this.getName();
        }
        console.error('Operation ' + operation + ' not allowed on form ' + this.getName());
        return null;
    }
    /**
     *
     * @param operation
     * @returns true of this operation is designed for this form
     */
    opAllowed(operation) {
        if (this.opsAllowed && this.opsAllowed[operation]) {
            return true;
        }
        console.error('Form ', this.getName(), ' is not designed for ', operation, ' operation');
        return false;
    }
}


/***/ }),

/***/ 70784:
/*!*************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/formData.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormData": () => (/* binding */ FormData),
/* harmony export */   "PanelData": () => (/* binding */ PanelData),
/* harmony export */   "TabularData": () => (/* binding */ TabularData)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _conventions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conventions */ 61852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/throw */ 83204);





class PanelData {
    constructor(form, serverAgent) {
        this.form = form;
        this.serverAgent = serverAgent;
        /**
        * data as received from the server
        */
        this.data = {};
        /**
         * data for child forms that ane non-tabular
         */
        this.childData = new Map();
        /**
        * data for child forms that are tabukar
        */
        this.childTabularData = new Map();
        /**
         * set to true when a service is requested from the server.
         * this can be used by the view-component to indicate aciton
         */
        this.waitingForServerResponse = false;
        /**
           * errors returned by the server
           */
        this.errors = [];
        /**
         * warnings returned by the server
         */
        this.warnings = [];
        /**
         * informations messages received by the server
         */
        this.info = [];
        this.hasFg = false;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        if (!form.childForms) {
            return;
        }
        form.childForms.forEach((child, key) => {
            if (child.isTabular) {
                this.childTabularData.set(key, new TabularData(child.form, serverAgent, child.isEditable));
            }
            else {
                if (child.isEditable) {
                    this.childData.set(key, new FormData(child.form, serverAgent));
                }
                else {
                    this.childData.set(key, new PanelData(child.form, serverAgent));
                }
            }
        });
    }
    /**
     * get data as a Value Object. HAs values as received from the server.
     * Any input field/control DOES not have the lates value entered by the user.
     * getFieldValue() must be used to get the current value of an input field.
     */
    getRawData() {
        return this.data;
    }
    /**
    * @override data is to be set to form group
    * @param data as received from a service request
    */
    setAll(data) {
        if (!data) {
            data = {};
        }
        this.data = data;
        if (this.hasFg) {
            this.formGroup.patchValue(data);
        }
        this.childData.forEach((fd, key) => {
            fd.setAll(data[key] || {});
        });
        this.childTabularData.forEach((table, key) => {
            table.setAll(data[key] || []);
        });
    }
    /**
     * @returns object contianing all data from form controls. as well as all child forms.
     * Note that this data will not contain fields from non-form panel
     */
    extractAll() {
        const d = this.hasFg ? this.formGroup.value : this.data;
        this.childData.forEach((fd, key) => {
            d[key] = fd.extractAll();
        });
        this.childTabularData.forEach((table, key) => {
            d[key] = table.extractAll();
        });
        return d;
    }
    /**
     * @returns object contianing all data from form controls, or raw data as recived, but no tany child-data.
     * That is why the returned type id FieldValues and not Vo
     */
    extractAllFields() {
        return this.hasFg ? this.formGroup.value : this.data;
    }
    /**
     *
     * @param name name of the field. Valid field names can be picked up from
     * static definitions in the form
     * @param value
     */
    setFieldValue(name, value) {
        const fc = this.formGroup.controls[name];
        if (fc) {
            fc.setValue(value);
        }
        this.data[name] = value;
    }
    /**
     *
     * @param values name-value pairs to be se to this data
     */
    setFieldValues(values) {
        Object.keys(values).forEach(key => {
            this.setFieldValue(key, values[key]);
        });
    }
    /**
      *
      * @param name name of the field.
      * concrete classes over-ride this method to restict name values to their valid list
      * @returns value of this field, or null/undefined if this is not a field
      */
    getFieldValue(name) {
        const fc = this.formGroup.controls[name];
        if (fc) {
            return fc.value;
        }
        return this.data[name];
    }
    /**
     * @param names to be extracted
     * @returns data-object with name-values. null if no value is found for a field
     */
    getFieldValues(names) {
        let values = {};
        names.forEach(key => {
            values[key] = this.getFieldValue(key);
        });
        return values;
    }
    /**
     *
     * @param name name of the child field.
     * Valid child names are available as static members of the form
     * @returns appropriate data for the child form. null/undefined if no such child
     */
    getChildData(name) {
        if (this.childData) {
            return this.childData.get(name);
        }
        return null;
    }
    /**
     *
     * @param name name of the child field.
     * Valid child names are available as static members of the form
     * @returns appropriate data for the child form. null/undefined if no such child
     */
    getChildTable(name) {
        if (this.childTabularData) {
            return this.childTabularData.get(name);
        }
        return null;
    }
    /**
     * extarct key fields only
     */
    extractKeyFields() {
        if (this.form.keyFields && this.form.keyFields.length) {
            return this.extractFields(this.form.keyFields);
        }
        console.info('Form has no keys. Doing a get operation with all fields');
        return this.extractAllFields();
    }
    extractFields(fields) {
        if (!fields || !fields.length) {
            return null;
        }
        const data = {};
        fields.forEach(f => {
            data[f] = this.getFieldValue(f);
        });
        return data;
    }
    /**
     * reset the messages. typically called when user dismisses them, or before a server-request is made
     */
    resetMessages() {
        this.errors = [];
        this.warnings = [];
        this.info = [];
    }
    /**
     * messages are set to this model, from where the
     * html component can pick it up for rendering
     * @param messages
     */
    setMessages(messages) {
        this.resetMessages();
        if (messages && messages.forEach) {
            messages.forEach(msg => {
                switch (msg.type) {
                    case "error":
                        this.errors.push(msg.text);
                        break;
                    case "warning":
                        this.warnings.push(msg.text);
                        break;
                    default:
                        this.info.push(msg.text);
                        break;
                }
            });
        }
        else {
            console.error('Error messages received from server', messages);
        }
    }
    /**
     * invoke a specific service with your own pay load, and receive data into this form data
     * @param serviceName service name.
     * @param data input expected by the service
     */
    callService(serviceName, data) {
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data, asQueryParams: true }, !this.form.serveGuests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            this.setAll(vo);
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
    * get data for this entity based on primary or unique key
    * caller has to enaure that either key fields, or unique fields have valid values in the model before making this call
    */
    fetchData() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH + ' operation not allowed');
        }
        const data = this.extractKeyFields();
        if (data == null) {
            const msg = 'Key values not found. Fetch request abandoned';
            console.error(msg);
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(msg);
        }
        return this.callService(serviceName, data);
    }
    /**
     * fetch data based the provided input. Use this insted of fetch() if the API
     * requires some data that is not primary key
     * @param data
     */
    fetchFor(data) {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH + ' operation not allowed');
        }
        return this.callService(serviceName, data);
    }
    /**
     * get filtered rows from the server.
     * The data received from the server is set to the child-model (PanelData/formData) before returning it to the caller
     * @param child for which data is to be fecthed from the serber
     * @param filters to be applied on the child to get data
     */
    fetchChildren(child, filters) {
        const td = this.childTabularData.get(child);
        if (!td) {
            const msg = child + ' is not a tabular child of this panel. operation abandoned';
            console.error(msg);
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(msg);
        }
        const childForm = this.form.childForms.get(child).form;
        const serviceName = childForm.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER + ' operation not allowed.');
        }
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: filters }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            const data = vo.list;
            td.setAll(data);
            this.waitingForServerResponse = false;
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * filter rows for this form and return raw-rows.
     * Note that the returned data is NOT set to any model before returning it the caller
     */
    filter(filters) {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER + ' operation is not allowed.');
        }
        const payload = filters ? { data: filters } : {};
        this.resetMessages();
        this.waitingForServerResponse = false;
        return this.serverAgent.serve(serviceName, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            return vo.list;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            console.error('catching error in filters fd', msgs);
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * filter rows for this form and return raw-rows.
     * Note that the returned data is NOT set to any model before returning it the caller
     */
    bulkUpdate(data) {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_BULK);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_BULK + ' operation is not allowed.');
        }
        this.resetMessages();
        this.waitingForServerResponse = true;
        return this.serverAgent.serve(serviceName, { data: { list: data } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * validate all editable fields in this form
     */
    validateForm() {
        this.formGroup.updateValueAndValidity();
        let ok = this.formGroup.valid;
        if (!ok) {
            console.error('Form ' + this.form.getName() + ' validation failed. Fields in error:', this.getFieldsInError());
        }
        this.childData.forEach((fd, key) => {
            const b = fd.validateForm();
            ok = ok && b;
        });
        this.childTabularData.forEach((table, key) => {
            const b = table.validateForm();
            ok = ok && b;
        });
        return ok;
    }
    /**
     * get list of invalid fields in this form.
     * if a child is in error, this does not get the actualfield in the child, but return child itsemf as a field
     */
    getFieldsInError() {
        const result = [];
        if (this.formGroup.valid) {
            return result;
        }
        Object.keys(this.formGroup.controls).forEach((key) => {
            const cntr = this.formGroup.controls[key];
            if (cntr.invalid) {
                result.push(key);
            }
        });
        return result;
    }
    /**
     * should we convert this to a promise? Or should we have some standard way of handling error and success?
     */
    saveAsNew() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_NEW);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_NEW + ' operation is not allowed.');
        }
        if (!this.validateForm()) {
            //we have to ensure that the field in error is brought to focus!!
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError('One or more fields are in error. Please edit them and re-submit');
        }
        const data = this.extractAll();
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data }, !this.form.serveGuests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.setErrorFields(msgs);
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            console.error(msgs);
            throw "Server returned with errors ";
        }));
    }
    /**
     * @param msgs fields in error sent by the server
     * Manually setting error state to the fields sent by the server
     */
    setErrorFields(msgs) {
        msgs.forEach(element => {
            this.formGroup.get(element.fieldName).setErrors({ 'Invalid': true });
            this.formGroup.markAllAsTouched();
        });
    }
    /**
     * update operation. WHat do we do after successful operation?
     */
    save() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_UPDATE);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_UPDATE + ' operation is not allowed.');
        }
        if (!this.validateForm()) {
            //we have to ensure that the field in error is brought to focus!!
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError('Fileds that have errors :' + this.getFieldsInError().join(','));
        }
        const data = this.extractAll();
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data }, !this.form.serveGuests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            //we do not set back values in updaetmode
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * delete this entity
     */
    delete() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_DELETE);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_DELETE + ' operation is not allowed.');
        }
        const data = this.extractKeyFields();
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data, asQueryParams: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            //we do not set back values into fd
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     *
     * @param voArray ~ array of Vo
     * @param form ~ form of the fd
     * @param sa ~ ServerAgent
     * @returns vo as an array of FD
     * Generally used in bulk update operations
     */
    toFdArray(voArray, form, sa) {
        let fdArray = [];
        voArray.forEach(vo => {
            const fd = form.newFormData(sa);
            fd.setAll(vo);
            fdArray.push(fd);
        });
        return fdArray;
    }
    /**
     *
     * @param fdArray ~ Array of FormData to be converted to
     * @returns an array of vo
     * Generally used in bulk update operations
     */
    toVoArray(fdArray) {
        let voArray = [];
        fdArray.forEach(fd => {
            voArray.push(fd.extractAll());
        });
        return voArray;
    }
}
/**
 * represents the data contained in a form. Manages two-way binding with input fields in the form
 */
class FormData extends PanelData {
    constructor(f, sa) {
        super(f, sa);
        this.hasFg = true;
        const ctrls = this.form.controls;
        this.form.fields.forEach((field, key) => {
            const ctrl = ctrls.get(key) || [];
            const fc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(field.defaultValue, ctrl);
            this.formGroup.addControl(key, fc);
        });
        this.handleDropDowns(f);
    }
    setAList(name, list) {
        const field = this.formGroup.get(name);
        if (!field) {
            console.error(name + ' is not a field but a drop-down is being set to it');
            return;
        }
        this.lists[name] = list;
        if (!field.value) {
            let value = '';
            if (list && list[0]) {
                value = list[0].value;
            }
            if (value) {
                field.setValue(value);
            }
        }
    }
    /**
     * set drop-down list of values for a field.
     * it may be available locally, or we my have to get it from the server
     * @param field for which drop-down list id to be fetched
     * @param key value of the key field,if this is a keyed-list
     */
    setListValues(field, key) {
        if (field.listKey && !key) {
            this.setAList(field.name, []);
            return;
        }
        if (field.keyedList) {
            /*
             * design-time list. locally avaliable
             */
            let arr = field.keyedList[key];
            if (!arr) {
                console.error('Design time list of values for drop-down not available for key=' + key);
                arr = [];
            }
            this.setAList(field.name, arr);
            return;
        }
        /**
         * we have to ask the server to get this
         */
        let data;
        if (field.listKey) {
            data = { list: field.listName, key: key };
        }
        else {
            data = { list: field.listName };
        }
        const obs = this.serverAgent.serve(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.SERVICE_LIST, { data: data });
        obs.subscribe(vo => {
            const arr = vo['list'];
            if (arr) {
                this.setAList(field.name, arr);
            }
            else {
                console.error('Server returned a respnse with no list in it. Drop downwill not work for field ' + field.name);
            }
        }, msgs => {
            console.error('Error while receiving list values for field ' + field.name + JSON.stringify(msgs));
        });
    }
    /**
     *
     * @param f form for which we are handling drop-downs.
     */
    handleDropDowns(f) {
        if (!f.listFields) {
            return null;
        }
        this.lists = {};
        f.listFields.forEach(nam => {
            const field = f.fields.get(nam);
            if (field.valueList) {
                this.setAList(nam, field.valueList);
            }
            else {
                this.setAList(nam, []);
                if (field.listKey) {
                    const fc = this.formGroup.get(field.listKey);
                    if (!fc) {
                        console.error("Unable to find form control named " + field.listKey + " drop down for field " + field.name + " will not work properly");
                    }
                    else {
                        const val = fc.value;
                        if (val) {
                            this.setListValues(field, val);
                        }
                        fc.valueChanges.subscribe((value) => this.setListValues(field, value));
                    }
                }
                else {
                    //fixed list, but we have to get it from server at run time
                    this.setListValues(field, null);
                }
            }
        });
    }
    /**
     * validate all editable fields in this form
     */
    validateForm() {
        this.formGroup.updateValueAndValidity();
        if (!this.formGroup.valid) {
            this.formGroup.setErrors({ 'err': 'Please enter a valid value' });
            this.formGroup.markAllAsTouched();
            return false;
        }
        const vals = this.form.validations;
        let allOk = true;
        if (vals) {
            for (const v of this.form.validations) {
                /**
                 * n is name, f is field, c is cntrol and v is value
                 */
                const n1 = v.f1;
                const n2 = v.f2;
                const f1 = this.form.fields.get(n1);
                const f2 = this.form.fields.get(n2);
                const v1 = this.getFieldValue(n1);
                const v2 = this.getFieldValue(n2);
                const c1 = this.formGroup.get(n1);
                const c2 = this.formGroup.get(n2);
                let isDateType = false;
                if (f1 && f2 && f1.valueType == _conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.TYPE_DATE && f2.valueType == _conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.TYPE_DATE) {
                    isDateType = true;
                }
                const valType = v.type;
                let ok;
                if (valType === 'range') {
                    ok = this.validateRange(v1, v2, v.isStrict, isDateType);
                }
                else if (valType === 'incl') {
                    ok = this.validateInclPair(v1, v2, v.value);
                }
                else if (valType === 'excl') {
                    ok = this.validateExclPair(v1, v2, v.atLeastOne);
                }
                else {
                    console.error('Form validation type ' + valType + ' is not valid. validation ignored');
                    ok = true;
                }
                if (!ok) {
                    console.error('Inter field validation failed');
                    const err = { interfield: valType, errorId: v.errorId };
                    if (c1 && f1.controlType != 'Hidden' && f1.controlType != 'Output') {
                        c1.setErrors(err);
                    }
                    if (c2 && f2.controlType != 'Hidden' && f2.controlType != 'Output') {
                        c2.setErrors(err);
                    }
                    allOk = false;
                }
            }
        }
        if (!allOk) {
            console.error('Inter-field validaiton failed');
            return false;
        }
        this.childData.forEach((fd, key) => {
            const b = fd.validateForm();
            if (!b) {
                console.error('Child validation failed');
            }
            allOk = allOk && b;
        });
        this.childTabularData.forEach((table, key) => {
            const b = table.validateForm();
            if (!b) {
                console.error('Child Table validation failed');
            }
            allOk = allOk && b;
        });
        return allOk;
    }
    /**
     * check if v1 to v2 us a range
     * @param v1
     * @param v2
     * @param useStrict if true, v2 must be > v2, v1 == v2 woudn't cut
     */
    validateRange(v1, v2, equalOk, dateType) {
        if (dateType) {
            console.error('Date comparison not yet implementd. returning true');
            return true;
        }
        const n1 = v1;
        const n2 = v2;
        if (n1 === NaN || n2 === NaN || n2 > n1) {
            return true;
        }
        if (n1 > n2) {
            return false;
        }
        //equal. is it ok?
        return equalOk;
    }
    /**
     * two fields have to be both specified or both skipped.
     * if value is specified, it means that the rule is applicable if v1 == value
     * @param v1
     * @param v2
     * @param value
     */
    validateInclPair(v1, v2, value) {
        /*
         * we assume v1 is specified when a value is given.
         * However, if value is specified, then it has to match it'
         */
        const v1Specified = v1 && (!value || value == v1);
        if (v1Specified) {
            if (v2) {
                return true;
            }
            return false;
        }
        // v1 is not specified, so v2 should not be specified
        if (v2) {
            return false;
        }
        return true;
    }
    /**
     *
     * @param errorId v1 and v2 are exclusive
     * @param primaryField
     * @param otherField
     * @param atLeastOne if true, exactly one of teh twoto be specified
     */
    validateExclPair(v1, v2, noneOk) {
        if (v1) {
            if (v2) {
                return false;
            }
            return true;
        }
        if (v2) {
            return true;
        }
        //none specifield, is it ok?
        return noneOk;
    }
    /**
     *
     * @param fieldName name of the drop-down field
     * @returns the displayed value (not the internal value) of this field
     */
    getDisplayedValueOf(fieldName) {
        const list = this.lists[fieldName];
        if (!list) {
            return '';
        }
        const val = this.getFieldValue(fieldName);
        if (!val) {
            return '';
        }
        const n = list.length;
        for (let i = 0; i < n; i++) {
            const sel = list[i];
            if (sel.value == val) {
                return sel.text;
            }
        }
        return '';
    }
}
/**
 * represents an array of panel data or form data
 */
class TabularData {
    constructor(form, serverAgent, isEditable) {
        this.form = form;
        this.serverAgent = serverAgent;
        this.isEditable = isEditable;
        this.childData = [];
    }
    /**
     * set data to this panel
     * @param data
     */
    setAll(data) {
        this.childData.length = 0;
        data.forEach(vo => {
            let fd;
            if (this.isEditable) {
                fd = new FormData(this.form, this.serverAgent);
            }
            else {
                fd = new PanelData(this.form, this.serverAgent);
            }
            fd.setAll(vo);
            this.childData.push(fd);
        });
    }
    /**
     * extract data from each of the child-panel into an array
     */
    extractAll() {
        const data = [];
        this.childData.forEach(fd => data.push(fd.extractAll()));
        return data;
    }
    /**
     * validate all the forms
     * @returns true if all ok. false if any one form-control is in error, or any custom-validaiton fails
     */
    validateForm() {
        let allOk = true;
        this.childData.forEach(fd => {
            const ok = fd.validateForm();
            allOk = allOk && ok;
        });
        return allOk;
    }
    /**
     * append a default data model to this array
     */
    appendRow() {
        let fd;
        if (this.isEditable) {
            fd = new FormData(this.form, this.serverAgent);
        }
        else {
            fd = new PanelData(this.form, this.serverAgent);
        }
        this.childData.push(fd);
        return fd;
    }
    /**
      * append a default data model to this array
      */
    removeRow(idx) {
        this.childData.splice(idx);
    }
}


/***/ }),

/***/ 47877:
/*!*****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/serviceAgent.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceAgent": () => (/* binding */ ServiceAgent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _conventions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conventions */ 61852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ 99464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/throw */ 83204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _clientConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientConfig */ 86230);
/* harmony import */ var _clientContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientContext */ 53594);
/* harmony import */ var src_app_services_messageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/messageService */ 59496);











/**
 * A wrapper on HttpClient to take care of our protocols
 * Draws heavily on Observables. If you are tounderstand/maintain this code,  you MUST be thorough with the Observables
 */
class ServiceAgent {
    constructor(http, config, ctx, ms) {
        this.http = http;
        this.config = config;
        this.ctx = ctx;
        this.ms = ms;
    }
    /**
     * serve this service. we use a strict service oriented architecture,
     * where in the only thing the client can ask the server is to serve a service.
     * There is no concept of resources or operations. Any such concepts are to be
     * implemented using the service paradigm.
     * @param serviceName  name of the service to be requested
     * @param data input data for the request
     * @param asQueryParams true if the data is just a set of name-string params, and the srver expects them in query string
     * @param headers any special headers to be communicated. Typically for additional authentication.
     * @param withAuth true if the request is to be sent with auth. If auth is not present, this wil trigger a login
     */
    serve(serviceName, options = {}, withAuth = true) {
        const token = this.ctx.getToken();
        if (withAuth && !token) {
            //not logged-in.To be re-tried after  a successful login
            return this.notLoggedIn({ serviceName: serviceName, options: options, withAuth: withAuth });
        }
        const headers = options.headers || {};
        headers[_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.HEADER_SERVICE] = serviceName;
        if (withAuth) {
            headers[_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.HEADER_AUTH] = token;
        }
        let data = options.data || null;
        let params = null;
        if (data && options.asQueryParams) {
            params = this.toParams(data);
        }
        const obs = this.http.post(this.config.url, data, { observe: "response", headers: headers, params: params });
        return obs.map(resp => {
            if (!resp.ok) {
                const msg = 'Server Error. http-status :' + resp.status + '=' + resp.statusText + (resp.body ? 'Response: ' + JSON.stringify(resp.body) : '');
                console.error(msg);
                throw { type: 'error', id: 'serverError', text: msg };
            }
            //no-news is good-news!!
            if (!resp.body || resp.body === {}) {
                return {};
            }
            const { messages, allOk, data, token } = resp.body;
            if (allOk) {
                if (token) {
                    this.ctx.setToken(token);
                }
                if (messages) {
                    if (messages[0].type == 'info') {
                        this.ms.showInfo(messages[0].text);
                        throw messages;
                    }
                }
                return data;
            }
            if (messages) {
                this.ms.showError(messages[0].text);
                console.error('Server returned with errors :', messages);
                throw messages;
            }
            const msg = 'Server Error. server reported a failure, but did not return any error message';
            console.error(msg);
            throw [{ type: 'error', id: 'serverError', text: msg }];
        });
    }
    /**
     * filter rows for a form and return raw-rows.
     * Note that the returned data is NOT set to any model before returning it the caller
     */
    filter(form, filters) {
        const serviceName = form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER + ' operation is not allowed.');
        }
        const obs = this.serve(serviceName, { data: filters });
        return obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(vo => {
            return vo.list;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(msgs => {
            console.error('catching in sa');
            throw msgs;
        }));
    }
    /**
     *
     * @param call parameters for serve that was interrupted.
     * We have to design a way to return an observable that works after a successful login.
     */
    notLoggedIn(params) {
        /**
         * what we want to do is:
         * 1. show a modal panel and accept credentials.
         * 2. call login service with these credentials.
         * 3. on successful login, make this service request again.
         * Logic would be quite tricky becaue we have t0 return an observable right now that triggers all these..
         ^ for te time being, we just throw-up our hands!!!
         */
        const msg = 'Sorry you are not logged in. Please try again after logging in';
        this.ms.showError('OOPS! Your Account was logged out! Please Login Again!');
        this.ctx.logout();
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
            const { next, error } = observer;
            error('msg');
        });
    }
    toParams(data) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams();
        for (const a in data) {
            if (data.hasOwnProperty(a)) {
                const val = data[a] || "";
                params.set(a, val.toString());
            }
        }
        return params;
    }
    /**
     * initiates a file-down load by the browser with supplied data as content
     * @param data  to be downloaded
     * @param fileName naem of the file to be downloaded as
     */
    download(data, fileName) {
        const json = JSON.stringify(data);
        const blob = new Blob([json], { type: 'octet/stream' });
        const url = window.URL.createObjectURL(blob);
        const a = window.document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.target = '_blank';
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
ServiceAgent.ɵfac = function ServiceAgent_Factory(t) { return new (t || ServiceAgent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_clientConfig__WEBPACK_IMPORTED_MODULE_3__.ClientConfig), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_clientContext__WEBPACK_IMPORTED_MODULE_4__.ClientContext), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services_messageService__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
ServiceAgent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: ServiceAgent, factory: ServiceAgent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12740:
/*!****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/customerForm.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFd": () => (/* binding */ CustomerFd),
/* harmony export */   "CustomerForm": () => (/* binding */ CustomerForm)
/* harmony export */ });
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/form */ 39456);
/* harmony import */ var _form_formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/formData */ 70784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class CustomerForm extends _form_form__WEBPACK_IMPORTED_MODULE_0__.Form {
    constructor() {
        super();
        this.name = {
            name: 'name',
            controlType: 'Input',
            label: 'Customer Name',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidName',
            maxLength: 150
        };
        this.email = {
            name: 'email',
            controlType: 'Input',
            label: 'email',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidEmail',
            maxLength: 1000
        };
        this.addressLine1 = {
            name: 'addressLine1',
            controlType: 'Input',
            label: 'Address Line 1',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.serveGuests = true;
        this.fields = new Map();
        this.controls = new Map();
        this.controls.set('name', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)]);
        this.fields.set('name', this.name);
        this.controls.set('email', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(1000)]);
        this.fields.set('email', this.email);
        this.controls.set('addressLine1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(1000)]);
        this.fields.set('addressLine1', this.addressLine1);
        this.opsAllowed = { create: true };
        this.keyFields = ["customerId"];
    }
    static getInstance() {
        return CustomerForm._instance;
    }
    getName() {
        return 'customer';
    }
}
CustomerForm._instance = new CustomerForm();
class CustomerFd extends _form_formData__WEBPACK_IMPORTED_MODULE_1__.FormData {
    constructor(form, sa) {
        super(form, sa);
    }
    setFieldValue(name, value) {
        super.setFieldValue(name, value);
    }
    getFieldValue(name) {
        return super.getFieldValue(name);
    }
}


/***/ }),

/***/ 67556:
/*!****************************************!*\
  !*** ./src/app/modules/base.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModule": () => (/* binding */ BaseModule)
/* harmony export */ });
/* harmony import */ var _services_menuService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/menuService */ 45790);
/* harmony import */ var _services_routerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/routerService */ 43512);
/* harmony import */ var _services_excelDownloadService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/excelDownloadService */ 13365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework-modules/elements/elements */ 78034);
/* harmony import */ var _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../framework-modules/cards/cardElements */ 65192);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _services_messageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/messageService */ 59496);
/* harmony import */ var _non_session_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./non-session/component */ 39342);
/* harmony import */ var _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./non-session/landing-page/component */ 16683);
/* harmony import */ var _non_session_landing_page_sample_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./non-session/landing-page/sample-page/component */ 51625);
/* harmony import */ var _services_pdfDownloadService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/pdfDownloadService */ 63680);
/* harmony import */ var _services_excelParserService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/excelParserService */ 85761);
/* harmony import */ var _services_jsPdfFontService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/jsPdfFontService */ 54566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);















/**
 * Do not import any angular material module in this file unless it it the only option
 * Material modules to be imported in '../framework-modules/elements/elements.ts'
 */
class BaseModule {
    static forRoot() {
        return {
            ngModule: BaseModule,
            providers: [
                _services_routerService__WEBPACK_IMPORTED_MODULE_1__.RouterService,
                _services_messageService__WEBPACK_IMPORTED_MODULE_5__.MessageService,
                _services_excelDownloadService__WEBPACK_IMPORTED_MODULE_2__.ExcelDownloadService,
                _services_jsPdfFontService__WEBPACK_IMPORTED_MODULE_11__.JsPDFFontService,
                _services_menuService__WEBPACK_IMPORTED_MODULE_0__.MenuService,
                _services_pdfDownloadService__WEBPACK_IMPORTED_MODULE_9__.PdfDownloadService,
                _services_excelParserService__WEBPACK_IMPORTED_MODULE_10__.ExcelParserService
            ]
        };
    }
}
BaseModule.ɵfac = function BaseModule_Factory(t) { return new (t || BaseModule)(); };
BaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: BaseModule });
BaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_3__.ElementsModule,
            _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_4__.CardElementsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        ], 
        /**
         * App Components
         */
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_3__.ElementsModule,
        _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_4__.CardElementsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](BaseModule, { declarations: [
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        _non_session_component__WEBPACK_IMPORTED_MODULE_6__.NonSessionComponent,
        _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_7__.LandingComponent,
        /**
         * Non Session Group Panels
         */
        _non_session_landing_page_sample_page_component__WEBPACK_IMPORTED_MODULE_8__.ExampleComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_3__.ElementsModule,
        _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_4__.CardElementsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule], exports: [
        /**
         * App Components
         */
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_3__.ElementsModule,
        _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_4__.CardElementsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        _non_session_component__WEBPACK_IMPORTED_MODULE_6__.NonSessionComponent,
        _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_7__.LandingComponent,
        /**
         * Non Session Group Panels
         */
        _non_session_landing_page_sample_page_component__WEBPACK_IMPORTED_MODULE_8__.ExampleComponent] }); })();


/***/ }),

/***/ 39342:
/*!**************************************************!*\
  !*** ./src/app/modules/non-session/component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonSessionComponent": () => (/* binding */ NonSessionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page/component */ 16683);



const _c0 = ["primaryContainer"];
/**
 * temp during development. will come from menuService
 */
const ROUTES = {
    Landing: _landing_page_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent,
};
class NonSessionComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.selected = false;
        this.sideNav = [];
        this.sideNavLength = 0;
    }
    ngOnInit() {
        /**
         * after we write menuService, we will use it this way.
         * this.menus = this.menuService.getMainMenu();
         */
        this.menu = ROUTES;
        this.navigate('Landing');
        // this.navigate('Maintenance');
    }
    /**
     *
     * @param panelName landing panel to be opened in the container
     * @param data any optional data t be passed to the landing panel
     */
    navigate(panelName, data) {
        this.container.clear();
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.menu[panelName]);
        const c = this.container.createComponent(factory);
        c.instance.parentPanel = this;
        c.instance.inputData = data;
        c.changeDetectorRef.detectChanges();
    }
    navigation(moduleId) {
        this.selected = true;
        this.navigate(moduleId);
    }
}
NonSessionComponent.ɵfac = function NonSessionComponent_Factory(t) { return new (t || NonSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver)); };
NonSessionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NonSessionComponent, selectors: [["non-session"]], viewQuery: function NonSessionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 2, vars: 0, consts: [["primaryContainer", ""]], template: function NonSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16683:
/*!***************************************************************!*\
  !*** ./src/app/modules/non-session/landing-page/component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-page/component */ 51625);



const _c0 = ["secondaryContainer"];
/**
 Const to map the screen-component to screen-name to rended the facotry
 */
const MENU = {
    Login: { comp: _sample_page_component__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent },
};
class LandingComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.sidenav = false;
    }
    ngOnInit() {
        this.cardHeader = "Students";
        /**
         Navigate to Student List page on app load
         */
        this.navigate("Login", {});
    }
    /**
     *
     * @param compName is the name of the component to navigate to
     * @param data is for any related data needed
     */
    navigate(compName, data) {
        this.container.clear();
        const factory = this.componentFactoryResolver.resolveComponentFactory(MENU[compName].comp);
        const c = this.container.createComponent(factory);
        c.instance.inputData = data;
        c.instance.parentPanel = this;
        c.changeDetectorRef.detectChanges();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver)); };
LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["landing-page"]], viewQuery: function LandingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { inputData: "inputData", parentPanel: "parentPanel" }, decls: 2, vars: 0, consts: [["secondaryContainer", ""]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 51625:
/*!***************************************************************************!*\
  !*** ./src/app/modules/non-session/landing-page/sample-page/component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleComponent": () => (/* binding */ ExampleComponent)
/* harmony export */ });
/* harmony import */ var src_app_framework_modules_formdata_form_formData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/framework-modules/formdata/form/formData */ 70784);
/* harmony import */ var src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/framework-modules/formdata/gen/customerForm */ 12740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_framework_modules_formdata_form_serviceAgent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework-modules/formdata/form/serviceAgent */ 47877);
/* harmony import */ var src_app_services_routerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/routerService */ 43512);
/* harmony import */ var src_app_services_messageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messageService */ 59496);
/* harmony import */ var src_app_framework_modules_formdata_form_clientContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/framework-modules/formdata/form/clientContext */ 53594);
/* harmony import */ var _framework_modules_elements_ct_textbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../framework-modules/elements/ct-textbox/component */ 53016);
/* harmony import */ var _framework_modules_elements_ct_primary_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../framework-modules/elements/ct-primary-button/component */ 94654);









const _c0 = ["CtSpinner"];
class ExampleComponent {
    constructor(sa, routerService, ms, clientContext) {
        this.sa = sa;
        this.routerService = routerService;
        this.ms = ms;
        this.clientContext = clientContext;
        this.form = src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_1__.CustomerForm.getInstance();
        this.fd = new src_app_framework_modules_formdata_form_formData__WEBPACK_IMPORTED_MODULE_0__.FormData(this.form, this.sa);
    }
    /**
     * Login Function
     */
    save() {
        this.fd.saveAsNew().subscribe(data => {
            this.ms.showSuccess("Data Saved successfully");
            this.form = src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_1__.CustomerForm.getInstance();
            this.fd = new src_app_framework_modules_formdata_form_formData__WEBPACK_IMPORTED_MODULE_0__.FormData(this.form, this.sa);
        }, err => {
            this.CtSpinner.hide();
        });
    }
    update() {
        // this.fd.setFieldValue("customerId",1);
        this.fd.save().subscribe;
    }
}
ExampleComponent.ɵfac = function ExampleComponent_Factory(t) { return new (t || ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_framework_modules_formdata_form_serviceAgent__WEBPACK_IMPORTED_MODULE_2__.ServiceAgent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_routerService__WEBPACK_IMPORTED_MODULE_3__.RouterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_messageService__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_framework_modules_formdata_form_clientContext__WEBPACK_IMPORTED_MODULE_5__.ClientContext)); };
ExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ExampleComponent, selectors: [["login"]], viewQuery: function ExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.CtSpinner = _t.first);
    } }, inputs: { inputData: "inputData", parentPanel: "parentPanel", session: "session" }, decls: 7, vars: 6, consts: [[3, "field", "fd"], ["name", "CREATE", 3, "click"], ["name", "UPDATE", 3, "click"]], template: function ExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\nhello welcome to metadev\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ct-textbox", 0)(3, "ct-textbox", 0)(4, "ct-textbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ct-primary-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExampleComponent_Template_ct_primary_button_click_5_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ct-primary-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExampleComponent_Template_ct_primary_button_click_6_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("field", ctx.form.name)("fd", ctx.fd);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("field", ctx.form.email)("fd", ctx.fd);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("field", ctx.form.addressLine1)("fd", ctx.fd);
    } }, directives: [_framework_modules_elements_ct_textbox_component__WEBPACK_IMPORTED_MODULE_6__.CTTextboxComponent, _framework_modules_elements_ct_primary_button_component__WEBPACK_IMPORTED_MODULE_7__.CTPrimaryButtonComponent], styles: [".background[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.powered[_ngcontent-%COMP%] {\n  font-family: Roboto-Light;\n  font-size: 0.78vw;\n  color: #FFFFFF;\n  padding-top: 1.6875rem;\n  padding-right: 1.875vw;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding-top: 5.625rem;\n  padding-right: 12.5vw;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 9.625rem;\n  width: 10.625vw;\n}\n\n.username[_ngcontent-%COMP%] {\n  margin-left: 70.57vw;\n  margin-right: 7.26vw;\n  padding-top: 3.74vh;\n}\n\n.password[_ngcontent-%COMP%] {\n  margin-left: 70.57vw;\n  margin-right: 7.26vw;\n  padding-top: 3vh;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  padding-top: 0.625rem;\n  cursor: pointer;\n  padding-right: 7.26vw;\n  font-family: Roboto-Regular;\n  font-size: 0.625rem;\n  color: #89E3FD;\n  line-height: 1.375rem;\n  text-decoration: underline;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  padding-top: 1.6875rem;\n  padding-left: 85.54vw;\n}\n\n.apply-admission[_ngcontent-%COMP%] {\n  border: 1px solid #EC8026;\n  border-radius: 5px 0 5px 0;\n  background: none;\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: white;\n  width: 11.95vw;\n  float: right;\n  margin-bottom: 4.58vh;\n  margin-top: 14.6vh;\n  margin-right: 7.26vw;\n  text-align: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 10vh;\n  position: fixed;\n  z-index: 1000;\n  top: 20vh;\n  padding: 1vh;\n  color: white;\n  text-align: center;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.heading-1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-family: \"Roboto-Thin\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBRUUsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0FBSEo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdDO0VBQ0MseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBSUM7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0FBREYiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cblxuICAuYmFja2dyb3VuZHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2xvZ2luX2JnLnBuZycpO1xuICAgIGhlaWdodDogMTAwdmg7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAucG93ZXJlZHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLUxpZ2h0O1xuICAgIGZvbnQtc2l6ZTowLjc4dnc7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZy10b3A6IDEuNjg3NXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjg3NXZ3O1xuICB9XG5cbi5sb2dve1xuICAgIHBhZGRpbmctdG9wOjUuNjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6MTIuNXZ3O1xufVxuLmxvZ28gaW1ne1xuICAgIGhlaWdodDogOS42MjVyZW07XG4gICAgd2lkdGg6IDEwLjYyNXZ3O1xufVxuXG4udXNlcm5hbWV7XG4gIG1hcmdpbi1sZWZ0OjcwLjU3dnc7XG4gIG1hcmdpbi1yaWdodDo3LjI2dnc7XG4gIHBhZGRpbmctdG9wOjMuNzR2aDtcbn1cbi5wYXNzd29yZHtcbiAgbWFyZ2luLWxlZnQ6NzAuNTd2dztcbiAgbWFyZ2luLXJpZ2h0OjcuMjZ2dztcbiAgcGFkZGluZy10b3A6M3ZoO1xufVxuXG4uZm9yZ290LXBhc3N3b3Jke1xuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDo3LjI2dnc7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgY29sb3I6ICM4OUUzRkQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5sb2dpbi1idXR0b257XG4gIHBhZGRpbmctdG9wOjEuNjg3NXJlbTtcbiAgcGFkZGluZy1sZWZ0Ojg1LjU0dnc7XG59XG4gLmFwcGx5LWFkbWlzc2lvbntcbiAgYm9yZGVyOiAxcHggc29saWQgI0VDODAyNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgNXB4IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMS45NXZ3O1xuICBmbG9hdDpyaWdodDtcbiAgbWFyZ2luLWJvdHRvbTo0LjU4dmg7XG4gIG1hcmdpbi10b3A6MTQuNnZoO1xuICBtYXJnaW4tcmlnaHQ6Ny4yNnZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gfVxuXG5cbiAuYmFubmVye1xuICBoZWlnaHQ6IDEwdmg7IFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7IFxuICB0b3A6IDIwdmg7IFxuICBwYWRkaW5nOjF2aDtcbiAgY29sb3I6IHdoaXRlOyBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLmhlYWRpbmctMXtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tVGhpblwiICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ 12813:
/*!**********************************************!*\
  !*** ./src/app/services/constantsService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantsService": () => (/* binding */ ConstantsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConstantsService {
}
ConstantsService.ROUTE_NON_SESSION = "non-session";
ConstantsService.ROUTE_SESSION = "session";
ConstantsService.ROUTE_SEASON_SELECTION = "season-select";
ConstantsService.ɵfac = function ConstantsService_Factory(t) { return new (t || ConstantsService)(); };
ConstantsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantsService, factory: ConstantsService.ɵfac });


/***/ }),

/***/ 13365:
/*!**************************************************!*\
  !*** ./src/app/services/excelDownloadService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelDownloadService": () => (/* binding */ ExcelDownloadService)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ 98810);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 43015);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! exceljs/dist/exceljs.min.js */ 34498);
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 66809);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsbarcode */ 12081);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_assets_fonts_Roboto_robotoBoldItallic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/fonts/Roboto/robotoBoldItallic.js */ 34401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _jsPdfFontService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jsPdfFontService */ 54566);











let jsPDF = __webpack_require__(/*! jspdf */ 66809);
__webpack_require__(/*! jspdf-autotable */ 43015);
__webpack_require__(/*! jquery */ 85139);
let fs = __webpack_require__(/*! fs */ 10568);
const NONINTEGRATED_SUBJECT = {
    TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "First Test", "Second Test", "Third Test", "CIE Total", "Classes Held", "Classes Attended", "Attendance %", "Eligibility Status", "Is Condoned"],
    TABLE_ROWS: [
        { key: '', width: 10 },
        { key: 'sl', width: 15 },
        { key: 'usn', width: 30 },
        { key: 'name', width: 30 },
        { key: 'department', width: 25 },
        { key: 'test1', width: 20 },
        { key: 'test2', width: 20 },
        { key: 'test3', width: 20 },
        { key: 'test4', width: 20 },
        { key: 'test5', width: 20 },
        { key: 'cieMarks', width: 20 },
        { key: 'classesHeld', width: 25 },
        { key: 'classesAttended', width: 25 },
        { key: 'overallAttendance', width: 25 },
        { key: 'eligibility', width: 25 },
        { key: 'isCondoned', width: 17 },
    ],
    HEADER: [
        { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16, fontName: "Cambria" },
        { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16, fontName: "Cambria" },
        { loc: "D7", value: "Course Code", align: "left", fontSize: 11, fontName: "Cambria" },
        { loc: "H7", value: "Course Title", align: "left", fontSize: 11, fontName: "Cambria" },
        { loc: "D9", value: "Semester", align: "left", fontSize: 11, fontName: "Cambria" },
        { loc: "G9", value: "Section", align: "left", fontSize: 11, fontName: "Cambria" }
    ],
    MERGES: [
        'C2:J4', 'C5:J5', "E7:F7", "I7,J7"
    ],
    HEADER_DATA: {
        "E7": "code",
        "I7": "name",
        "E9": "level",
        "H9": "section"
    },
    FOOTER: [
        { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
        { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
    ],
    FOOTER_MERGES: [
        { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
        { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
    ],
    EXPLICIT_DATA: []
};
const INTEGRATED_SUBJECT = {
    TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "Theory CIE ", "Theory Attendance ", "Lab CIE", "Lab Attendance", "Total Marks", "Eligibility Status", "Is Condoned"],
    TABLE_ROWS: [
        { key: '', width: 10 },
        { key: 'sl', width: 15 },
        { key: 'usn', width: 30 },
        { key: 'name', width: 30 },
        { key: 'department', width: 25 },
        { key: 'theoryCie', width: 20 },
        { key: 'theoryAttendance', width: 20 },
        { key: 'labCie', width: 20 },
        { key: 'labAttendance', width: 20 },
        { key: 'cieMarks', width: 25 },
        { key: 'eligibility', width: 25 },
        { key: 'isCondoned', width: 17 },
    ],
    HEADER: [
        { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16 },
        { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16 },
        { loc: "C7", value: "Course Code", align: "left", fontSize: 11 },
        { loc: "G7", value: "Course Title", align: "left", fontSize: 11 },
        { loc: "C9", value: "Semester", align: "left", fontSize: 11 },
        { loc: "F9", value: "Section", align: "left", fontSize: 11 }
    ],
    MERGES: [
        'C2:I4', 'C5:I5', "E7:F7", "I7,J7"
    ],
    HEADER_DATA: {
        "D7": "code",
        "H7": "name",
        "D9": "level",
        "G9": "section"
    },
    FOOTER: [
        { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
        { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
    ],
    FOOTER_MERGES: [
        { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
        { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
    ],
    EXPLICIT_DATA: []
};
const E_NONINTEGRATED_SUBJECT = {
    TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "First Test", "Second Test", "Third Test", "CIE Total", "Classes Held", "Classes Attended", "Attendance %", "Eligibility Status"],
    TABLE_ROWS: [
        { key: '', width: 10 },
        { key: 'sl', width: 15 },
        { key: 'usn', width: 30 },
        { key: 'name', width: 30 },
        { key: 'department', width: 25 },
        { key: 'test1', width: 20 },
        { key: 'test2', width: 20 },
        { key: 'test3', width: 20 },
        { key: 'cieMarks', width: 20 },
        { key: 'classesHeld', width: 25 },
        { key: 'classesAttended', width: 25 },
        { key: 'overallAttendance', width: 25 },
        { key: 'eligibility', width: 25 },
    ],
    HEADER: [
        { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16 },
        { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16 },
        { loc: "D7", value: "Course Code", align: "left", fontSize: 11 },
        { loc: "H7", value: "Course Title", align: "left", fontSize: 11 },
        { loc: "D9", value: "Semester", align: "left", fontSize: 11 },
        { loc: "G9", value: "Section", align: "left", fontSize: 11 }
    ],
    MERGES: [
        'C2:J4', 'C5:J5', "E7:F7", "I7,J7"
    ],
    HEADER_DATA: {
        "E7": "code",
        "I7": "name",
        "E9": "level",
        "H9": "section"
    },
    FOOTER: [
        { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
        { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
    ],
    FOOTER_MERGES: [
        { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
        { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
    ],
    EXPLICIT_DATA: []
};
const E_INTEGRATED_SUBJECT = {
    TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "Theory CIE ", "Theory Attendance ", "Lab CIE", "Lab Attendance", "Total Marks", "Eligibility Status"],
    TABLE_ROWS: [
        { key: '', width: 10 },
        { key: 'sl', width: 15 },
        { key: 'usn', width: 30 },
        { key: 'name', width: 30 },
        { key: 'department', width: 25 },
        { key: 'theoryCie', width: 20 },
        { key: 'theoryAttendance', width: 20 },
        { key: 'labCie', width: 20 },
        { key: 'labAttendance', width: 20 },
        { key: 'cieMarks', width: 25 },
        { key: 'eligibility', width: 25 }
    ],
    HEADER: [
        { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16 },
        { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16 },
        { loc: "C7", value: "Course Code", align: "left", fontSize: 11 },
        { loc: "G7", value: "Course Title", align: "left", fontSize: 11 },
        { loc: "C9", value: "Semester", align: "left", fontSize: 11 },
        { loc: "F9", value: "Section", align: "left", fontSize: 11 }
    ],
    MERGES: [
        'C2:I4', 'C5:I5', "E7:F7", "I7,J7"
    ],
    HEADER_DATA: {
        "D7": "code",
        "H7": "name",
        "D9": "level",
        "G9": "section"
    },
    FOOTER: [
        { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
        { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
    ],
    FOOTER_MERGES: [
        { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
        { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
    ],
    EXPLICIT_DATA: []
};
class ExcelDownloadService {
    constructor(jsPDFFontService) {
        this.jsPDFFontService = jsPDFFontService;
        this.blobType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        this.logo = new Image();
        this.wm = new Image();
        this.sign = new Image();
        this.vtu_logo = new Image();
        this.principal_signature = new Image();
        this.student_slno = 0;
        this.logo.src = 'assets/images/bms.png';
        this.wm.src = 'assets/images/bms_wm.png';
        this.sign.src = 'assets/images/COE_SIGN.jpg';
        this.vtu_logo.src = 'assets/images/vtu_logo.jpg';
        this.principal_signature.src = 'assets/images/principal_signature.jpg';
    }
    /**
     * @param data the data to be downloaded; required format: {'SheetName':Arrray<{}>}
     * @param filename will be the name of the downloaded excel file
     * @param extra_data any extra data to be insterted.
     */
    downloadExcel(data, filename, extra_data) {
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_new();
        Object.keys(data).forEach(element => {
            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.json_to_sheet(data[element]);
            xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_append_sheet(workBook, workSheet, element);
        });
        xlsx__WEBPACK_IMPORTED_MODULE_0__.writeFile(workBook, filename + '.xlsx');
    }
    downloadExcelBook(data, filename, extra_data) {
        var workBook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        Object.keys(data).forEach(sheet => {
            let worksheet = workBook.addWorksheet(sheet, {
                properties: {
                    defaultRowHeight: 100,
                },
            });
            var tableData = data[sheet];
            var header = Object.keys(tableData[0]);
            var headerRow = worksheet.getRow(1);
            headerRow.values = header;
            headerRow.eachCell(cell => {
                cell.style = { font: { bold: true, size: 14 }, alignment: { vertical: "middle" } };
            });
            var cols = [];
            header.forEach(h => {
                cols.push({ key: h, header: h, width: 25, style: { alignment: { vertical: "middle" } } });
            });
            worksheet.columns = cols;
            worksheet.addRows(tableData);
        });
        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: this.blobType });
            file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob, filename);
        });
    }
    downloadMarksSheet(data, program, date, level, season, isMakeUp = false, round = "Provisional") {
        const workBook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        var student_data = [];
        var sheet = workBook.addWorksheet(program + '-' + level);
        this.createHeaderSheets(sheet, data["headers"], level, program, date, round);
        this.createColumnHeaders(sheet, data["headers"], 3, data["headers"].length, 4);
        this.fillData(sheet, data["data"], 0, 11, 1, 1, level, isMakeUp);
        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: this.blobType });
            file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob, program + " - " + level + "-" + season + "-Result SHEET");
        });
    }
    fillData(sheet, data, startColumn, startRow, rowStep, columnStep, level, isMakeUp) {
        this.student_slno = 0;
        var sortedStudents = [];
        data.forEach(student => {
            student['usn'] = student['studentData'][0]["usn"];
            sortedStudents.push(student);
        });
        sortedStudents.sort(sortByProperty("usn"));
        function sortByProperty(property) {
            return function (a, b) {
                if (a[property] > b[property])
                    return 1;
                else if (a[property] < b[property])
                    return -1;
                return 0;
            };
        }
        function allBorder(cell) {
            cell.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        }
        function allBorderThickSides(cell) {
            cell.style.border = {
                top: { style: 'thin' },
                left: { style: 'medium' },
                bottom: { style: 'thin' },
                right: { style: 'medium' }
            };
        }
        function allBorderLeftThick(cell) {
            cell.style.border = {
                top: { style: 'thin' },
                left: { style: 'medium' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        }
        function allBorderRightThick(cell) {
            cell.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'medium' }
            };
        }
        sheet.getColumn(1).width = 10;
        sheet.getColumn(2).width = 25;
        sheet.getColumn(3).width = 30;
        sortedStudents.forEach(student => {
            if (student['studentData'].length == 0) {
                return;
            }
            this.student_slno = this.student_slno + 1;
            var columnSlno = this.getColumnValue(startColumn) + startRow.toString();
            let cellSlno = sheet.getCell(columnSlno);
            cellSlno.value = this.student_slno;
            cellSlno.style.alignment = { horizontal: "center", vertical: "middle" };
            cellSlno.style.font = { size: 14, name: "Cambria" };
            allBorderThickSides(cellSlno);
            sheet.getRow(10 + this.student_slno).height = 37;
            var columnUsn = this.getColumnValue((startColumn + 1)) + startRow.toString();
            let cellUsn = sheet.getCell(columnUsn);
            cellUsn.style.alignment = { horizontal: "center", vertical: "middle" };
            cellUsn.value = student['studentData'][0]["usn"];
            cellUsn.style.font = { size: 14, name: "Cambria" };
            allBorderThickSides(cellUsn);
            var columnName = this.getColumnValue((startColumn + 2)) + startRow.toString();
            let cellName = sheet.getCell(columnName);
            cellName.value = student['studentData'][0]["name"];
            cellName.style.alignment = { horizontal: "left", vertical: "middle" };
            cellName.style.font = { size: 14, name: "Cambria" };
            allBorderThickSides(cellName);
            var dataArranged = this.arrangeHeaders(student['studentData'], "slno");
            var checkedData = this.checkData(dataArranged);
            var colIndex = startColumn;
            checkedData.forEach(t => {
                var columnCie = this.getColumnValue((colIndex + 3)) + startRow.toString();
                var columnSee = this.getColumnValue((colIndex + 4)) + startRow.toString();
                var columnTotal = this.getColumnValue((colIndex + 5)) + startRow.toString();
                var columnGrade = this.getColumnValue((colIndex + 6)) + startRow.toString();
                let cellCie = sheet.getCell(columnCie);
                cellCie.value = t["cieMarks"];
                cellCie.style.alignment = { horizontal: "center", vertical: "middle" };
                cellCie.style.font = { size: 14, name: "Cambria" };
                allBorderLeftThick(cellCie);
                var total;
                if (t["cieMarks"] === '-') {
                    total = '-';
                }
                else {
                    total = t["totalMarks"];
                }
                if (t["hasAttendedMakeup"] == false && isMakeUp) {
                    if (t['grade'] !== 'I') {
                        t["examMarks"] = "AB";
                    }
                    else {
                        t["examMarks"] = '-';
                    }
                    total = t["cieMarks"];
                }
                else if (t["hasAttendedExam"] == false && !isMakeUp) {
                    if (t['grade'] !== 'I') {
                        t["examMarks"] = "AB";
                    }
                    else {
                        t["examMarks"] = '-';
                    }
                    total = t["cieMarks"];
                }
                if (t["isEligibleForExam"] == false) {
                    t["examMarks"] = "NE";
                    total = t["cieMarks"];
                }
                let cellSee = sheet.getCell(columnSee);
                cellSee.value = t["examMarks"];
                allBorder(cellSee);
                if (t["examMarks"] == "NE") {
                    cellSee.style = { font: { size: 14, bold: true, color: { argb: 'ff6961' } } };
                    cellSee.style.alignment = { horizontal: "center", vertical: "middle" };
                }
                else {
                    cellSee.style.alignment = { horizontal: "center", vertical: "middle" };
                    cellSee.style.font = { size: 14, name: "Cambria" };
                }
                let cellTotal = sheet.getCell(columnTotal);
                allBorder(cellTotal);
                cellTotal.value = total;
                cellTotal.style.alignment = { horizontal: "center", vertical: "middle" };
                cellTotal.style.font = { size: 14, name: "Cambria" };
                let cellGrade = sheet.getCell(columnGrade);
                cellGrade.value = t['grade'];
                cellGrade.style.alignment = { horizontal: "center", vertical: "middle" };
                cellGrade.style.font = { size: 14, name: "Cambria" };
                allBorderRightThick(cellGrade);
                colIndex = colIndex + 4;
            });
            startRow = startRow + rowStep;
        });
        var coe = sheet.getCell(10 + this.student_slno + 4, 3);
        coe.value = "Controller of Examinations";
        coe.style.alignment = { horizontal: "center", vertical: "middle" };
        coe.style.font = { size: 20, name: "Cambria", bold: true };
        sheet.getRow(sheet.rowCount - 3).eachCell(cell => {
            cell.style.border = {
                top: { style: 'medium' }
            };
        });
        var principal = sheet.getCell(10 + this.student_slno + 4, sheet.columnCount - 3);
        principal.value = "Principal";
        principal.style.alignment = { horizontal: "left", vertical: "middle" };
        principal.style.font = { size: 20, name: "Cambria", bold: true };
    }
    checkData(data) {
        var temp_array = [];
        for (var i = 0; i < this.columHeaders.length; i++) {
            var s = this.findSubject(data, this.columHeaders[i]["subjectCode"]);
            if (s != -1) {
                temp_array.push(data[s]);
            }
            else {
                var subject = {};
                subject['cieMarks'] = '-';
                subject['examMarks'] = '-';
                subject['total'] = '-';
                subject['grade'] = '-';
                temp_array.push(subject);
            }
        }
        return temp_array;
    }
    findSubject(data, subjectCode) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]['subjectCode'] == subjectCode) {
                return i;
            }
        }
        return -1;
    }
    createHeaderSheets(sheet, headers, level, program, date, round) {
        var headerLength = headers.length;
        var maxColumns = ((headerLength * 4) + 3) - 1;
        var maxColumnValue = this.getColumnValue(maxColumns);
        /* code cleanup required */
        this.mergeCells(sheet, 'A1', (maxColumnValue + '1'));
        this.mergeCells(sheet, 'A2', (maxColumnValue + '2'));
        this.mergeCells(sheet, 'A4', (maxColumnValue + '4'));
        this.mergeCells(sheet, 'A6', (maxColumnValue + '6'));
        this.mergeCells(sheet, 'R7', (maxColumnValue + '7'));
        this.mergeCells(sheet, 'A8', 'A10');
        this.mergeCells(sheet, 'B8', 'B10');
        this.mergeCells(sheet, 'C8', 'C10');
        var index = 3;
        for (var i = 0; i < headerLength; i++) {
            var columnValue = this.getColumnValue(index) + '8';
            var columnValue2 = this.getColumnValue(index + 3) + '8';
            var columnValue3 = this.getColumnValue(index) + '9';
            var columnValue4 = this.getColumnValue(index + 3) + '9';
            this.mergeCells(sheet, columnValue, columnValue2);
            this.mergeCells(sheet, columnValue3, columnValue4);
            index = index + 4;
        }
        /* code cleanup required */
        let cell = sheet.getCell('D1');
        cell.value = "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019";
        cell.style.alignment = { horizontal: "center", vertical: "middle" };
        cell.style.font = { size: 28, name: "Cambria", bold: true };
        let cell1 = sheet.getCell('A2');
        cell1.value = "Autonomous Institute affiliated to VTU, Belagavi";
        cell1.style.alignment = { horizontal: "center", vertical: "middle" };
        cell1.style.font = { size: 18, name: "Cambria" };
        let cell3 = sheet.getCell('A4');
        var exam_string = '';
        if (level === 'I SEM' && program.includes('BE')) {
            exam_string = " DECEMBER 2019 - JANUARY 2020";
        }
        else if (level === 'II SEM' && program.includes('BE')) {
            exam_string = " AUGUST 2020";
        }
        else if (level === 'I SEM' && program.includes('Masters')) {
            exam_string = " JANUARY 2020 ";
        }
        else if (level === 'II SEM' && program.includes('Masters')) {
            exam_string = " AUGUST 2020";
        }
        else {
            exam_string = " January & February 2021";
        }
        cell3.value = program + " " + level + " - " + exam_string;
        cell3.style.alignment = { horizontal: "center", vertical: "middle" };
        cell3.style.font = { size: 18, bold: true, name: 'Cambria' };
        let cell4 = sheet.getCell('A6');
        cell4.value = round + " Result Sheet";
        cell4.style.alignment = { horizontal: "center", vertical: "middle" };
        cell4.style.font = { size: 24, bold: true, name: 'Cambria' };
        let cell5 = sheet.getCell('A7');
        cell5.value = "Branch: " + program;
        cell5.style.alignment = { horizontal: "left" };
        cell5.style.font = { size: 18, name: "Cambria" };
        let cell6 = sheet.getCell('T7');
        cell6.value = "Date: " + moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD.MM.YYYY");
        cell6.style.alignment = { horizontal: "center", vertical: "middle" };
        cell6.style.font = { size: 18, name: "Cambria" };
        let cell7 = sheet.getCell('A8');
        cell7.value = "Sl. No.";
        cell7.style.alignment = { horizontal: "center", vertical: "middle" };
        cell7.style.font = { size: 18, name: "Cambria" };
        cell7.style.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'thin' },
            right: { style: 'medium' }
        };
        let cell8 = sheet.getCell('B8');
        cell8.value = "USN";
        cell8.style.alignment = { horizontal: "center", vertical: "middle" };
        cell8.style.font = { size: 18, name: "Cambria" };
        cell8.style.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'thin' },
            right: { style: 'medium' }
        };
        let cell9 = sheet.getCell('C8');
        cell9.value = "Student Name";
        cell9.style.alignment = { horizontal: "center", vertical: "middle" };
        cell9.style.font = { size: 18, name: "Cambria" };
        cell9.style.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'thin' },
            right: { style: 'medium' }
        };
        sheet.getRow(8).height = 40;
        sheet.getRow(9).height = 30;
        sheet.getRow(10).height = 50;
    }
    createColumnHeaders(sheet, headers, startIndex, endIndex, mutipler) {
        this.columHeaders = this.arrangeHeaders(headers, "slno");
        this.columHeaders.forEach(header => {
            var column2 = this.getColumnValue(startIndex) + '8';
            var column1 = this.getColumnValue(startIndex) + '9';
            var columnaValue1 = this.getColumnValue(startIndex) + '10';
            var columnaValue2 = this.getColumnValue(startIndex + 1) + '10';
            var columnaValue3 = this.getColumnValue(startIndex + 2) + '10';
            var columnaValue4 = this.getColumnValue(startIndex + 3) + '10';
            let cellHead3 = sheet.getCell(columnaValue1);
            let cellHead4 = sheet.getCell(columnaValue2);
            let cellHead5 = sheet.getCell(columnaValue3);
            let cellHead6 = sheet.getCell(columnaValue4);
            var cell = sheet.getCell(column2);
            cell.value = header.subjectName;
            cell.style.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
            cell.style.font = { size: 12, name: "Cambria", bold: true };
            cell.style.border = {
                top: { style: 'medium' },
                left: { style: 'medium' },
                bottom: { style: 'thin' },
                right: { style: 'medium' }
            };
            var cell1 = sheet.getCell(column1);
            cell1.value = header.subjectCode;
            cell1.style.alignment = { horizontal: "center", vertical: "middle" };
            cell1.style.font = { size: 14, name: "Cambria", bold: true };
            cell1.style.border = {
                top: { style: 'thin' },
                left: { style: 'medium' },
                bottom: { style: 'thin' },
                right: { style: 'medium' }
            };
            cellHead3.value = "CIE";
            cellHead3.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90 };
            cellHead3.style.font = { size: 14, name: "Cambria" };
            cellHead3.style.border = {
                top: { style: 'thin' },
                left: { style: 'medium' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
            cellHead4.value = "SEE";
            cellHead4.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90 };
            cellHead4.style.font = { size: 14, name: "Cambria" };
            cellHead4.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
            cellHead5.value = "TOTAL";
            cellHead5.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90 };
            cellHead5.style.font = { size: 14, name: "Cambria" };
            cellHead5.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
            cellHead6.value = "GRADE";
            cellHead6.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90 };
            cellHead6.style.font = { size: 14, name: "Cambria" };
            cellHead6.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'medium' }
            };
            startIndex = startIndex + mutipler;
        });
    }
    arrangeHeaders(headers, key) {
        function sortByProperty(property) {
            return function (a, b) {
                if (a[property] > b[property])
                    return 1;
                else if (a[property] < b[property])
                    return -1;
                return 0;
            };
        }
        return headers.sort(sortByProperty(key));
    }
    mergeCells(sheet, startIndex, endIndex) {
        sheet.mergeCells(startIndex, endIndex);
    }
    getColumnValue(number) {
        var temp, letter = '';
        var column = number + 1;
        while (column > 0) {
            temp = (column - 1) % 26;
            letter = String.fromCharCode(temp + 65) + letter;
            column = (column - temp - 1) / 26;
        }
        return letter;
    }
    getIntegratedCieSheet(subjectData) {
        var sectionsData = subjectData["sections"];
        var workBook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        function allBorder(cell) {
            cell.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        }
        sectionsData.forEach(section => {
            var sheet = workBook.addWorksheet(section.section);
            var cells = [
                { coordinate: 'A1', value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 24, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A2', value: "Autonomous Institute affiliated to VTU, Belagavi", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 12, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A3', value: "COURSEWISE CONSOLIDATED  ATTENDANCE & CIE MARKS", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 16, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A4', value: "DEPARTMENT", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C4', value: section.students[0].department, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A5', value: "COURSE CODE", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C5', value: subjectData["code"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'D5', value: "COURSE TITLE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'G5', value: subjectData["name"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A6', value: "SEMESTER", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C6', value: subjectData["level"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'D6', value: "SECTION", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'G6', value: section.section, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A7', value: "S.NO.", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { coordinate: 'B7', value: "USN", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { coordinate: 'C7', value: "NAME", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
            ];
            cells.forEach(cell => {
                let tempCell = sheet.getCell(cell.coordinate);
                tempCell.value = cell.value;
                tempCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: cell.background
                    }
                };
                tempCell.alignment = cell.alignment;
                tempCell.font = cell.font;
                allBorder(tempCell);
            });
            sheet.mergeCells('A4', 'B4');
            sheet.mergeCells('A5', 'B5');
            sheet.mergeCells('D5', 'F5');
            sheet.mergeCells('G5', 'L5');
            sheet.mergeCells('A6', 'B6');
            sheet.mergeCells('D6', 'F6');
            sheet.mergeCells('A7', 'A9');
            sheet.mergeCells('B7', 'B9');
            sheet.mergeCells('C7', 'C9');
            var assessmentLength = section["students"][0]["theoryAssessments"].length;
            section["students"][0]["theoryAssessments"].forEach(assessment => {
                let cellCount = sheet.getRow(7).cellCount;
                let tempCell = sheet.getCell(7, cellCount + 1);
                tempCell.value = assessment.assessmentName;
                tempCell.alignment = { textRotation: 90, horizontal: 'center', vertical: 'middle' };
                tempCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: 'FFFCE9D9'
                    }
                };
                tempCell.font = { bold: true, size: 14, name: "Cambria", };
                allBorder(tempCell);
                sheet.mergeCells(this.getColumnValue(cellCount) + '7', this.getColumnValue(cellCount) + '9');
            });
            var trailingCells = [
                { row: 7, value: "THEORY MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },
                { row: 7, value: "HELD", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "ATTENDED", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "% OF ATTTENDANCE", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { row: 7, value: "LAB MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },
                { row: 7, value: "HELD", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "ATTENDED", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "% OF ATTTENDANCE", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { row: 7, value: "TOTAL MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },
                { row: 7, value: "ELIGIBILITY", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "CONDONED", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
            ];
            trailingCells.forEach(cell => {
                let cellCount = sheet.getRow(8).cellCount;
                let tempCell = sheet.getCell(cell.row, cellCount + 1);
                tempCell.value = cell.value;
                tempCell.alignment = cell.alignment;
                tempCell.font = cell.font;
                tempCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: cell.background
                    }
                };
                allBorder(tempCell);
                sheet.mergeCells(this.getColumnValue(cellCount) + cell.row, this.getColumnValue(cellCount) + '9');
            });
            var rowStart = 10;
            section["students"].forEach((student, idx) => {
                var row = sheet.getRow(rowStart + idx);
                row.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
                row.font = { size: 12, name: "Cambria", };
                row.alignment = { horizontal: "center", vertical: "middle" };
                var values = [
                    idx + 1,
                    student["usn"],
                    student["name"],
                ];
                student["theoryAssessments"].forEach(assessment => {
                    values.push(assessment["marks"]);
                });
                values.push(student["theoryCie"]);
                values.push(student["theoryClassesHeld"]);
                values.push(student["theoryClassesAttended"]);
                values.push(student["theoryAttendance"]);
                values.push(student["labCie"]);
                values.push(student["labClassesHeld"]);
                values.push(student["labClassesAttended"]);
                values.push(student["labAttendance"]);
                values.push(student["cieMarks"]);
                if (student["eligibility"]) {
                    values.push("ELIGIBLE");
                }
                else {
                    values.push("NOT ELIGIBLE");
                }
                if (student["isCondoned"]) {
                    values.push("CONDONED");
                }
                else {
                    values.push("");
                }
                row.values = values;
                var eligibilityCell = row.findCell(assessmentLength + 3 + 10);
                if (student["eligibility"]) {
                    eligibilityCell.font = { size: 12, name: "Cambria", color: { argb: '00008000' }, bold: true };
                }
                else {
                    eligibilityCell.font = { size: 12, name: "Cambria", color: { argb: '00FF0000' }, bold: true };
                    if (student["hasCieShortage"]) {
                        row.findCell(assessmentLength + 3 + 9).font = { size: 12, name: "Cambria", color: { argb: '00FF0000' }, bold: true };
                    }
                    if (student["hasAttendanceShortage"]) {
                        var theoryAttendanceCell = row.findCell(assessmentLength + 3 + 4);
                        var labAttendanceCell = row.findCell(assessmentLength + 3 + 8);
                        if (student["hasAttendanceShortage"]) {
                            theoryAttendanceCell.font = { size: 12, name: "Cambria", color: { argb: '00FF0000' } };
                            labAttendanceCell.font = { size: 12, name: "Cambria", color: { argb: '00FF0000' } };
                        }
                    }
                }
                var condonedCell = row.findCell(assessmentLength + 3 + 11);
                if (student["isCondoned"]) {
                    condonedCell.font = { size: 12, name: "Cambria", color: { argb: '00FFA500' } };
                }
                row.findCell(3).alignment = { horizontal: "left", vertical: "middle" };
            });
            sheet.getColumn(2).width = 25;
            sheet.getColumn(3).width = 40;
            sheet.getRow(8).height = 20;
            sheet.getRow(9).height = 20;
            var mergeCol = this.getColumnValue(sheet.columnCount - 1);
            sheet.mergeCells('A1', mergeCol + '1');
            sheet.mergeCells('A2', mergeCol + '2');
            sheet.mergeCells('A3', mergeCol + '3');
        });
        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: this.blobType });
            file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob, subjectData['level'] + " - " + subjectData['name']);
        });
    }
    getNonIntegratedCieSheet(subjectData) {
        var sectionsData = subjectData["sections"];
        var workBook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        function allBorder(cell) {
            cell.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        }
        sectionsData.forEach(section => {
            var sheet = workBook.addWorksheet(section.section);
            var cells = [
                { coordinate: 'A1', value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 24, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A2', value: "Autonomous Institute affiliated to VTU, Belagavi", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 12, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A3', value: "COURSEWISE CONSOLIDATED  ATTENDANCE & CIE MARKS", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 16, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A4', value: "DEPARTMENT", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C4', value: section.students[0].department, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A5', value: "COURSE CODE", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C5', value: subjectData["code"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'D5', value: "COURSE TITLE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'G5', value: subjectData["name"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A6', value: "SEMESTER", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C6', value: subjectData["level"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'D6', value: "SECTION", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'G6', value: section.section, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A7', value: "S.NO.", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { coordinate: 'B7', value: "USN", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { coordinate: 'C7', value: "NAME", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
            ];
            cells.forEach(cell => {
                let tempCell = sheet.getCell(cell.coordinate);
                tempCell.value = cell.value;
                tempCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: cell.background
                    }
                };
                tempCell.alignment = cell.alignment;
                tempCell.font = cell.font;
                allBorder(tempCell);
            });
            sheet.mergeCells('A4', 'B4');
            sheet.mergeCells('A5', 'B5');
            sheet.mergeCells('D5', 'F5');
            sheet.mergeCells('G5', 'L5');
            sheet.mergeCells('A6', 'B6');
            sheet.mergeCells('D6', 'F6');
            sheet.mergeCells('A7', 'A9');
            sheet.mergeCells('B7', 'B9');
            sheet.mergeCells('C7', 'C9');
            var assessmentLength = section["students"][0]["assessments"].length;
            section["students"][0]["assessments"].forEach(assessment => {
                let cellCount = sheet.getRow(7).cellCount;
                let tempCell = sheet.getCell(7, cellCount + 1);
                tempCell.value = assessment.assessmentName;
                tempCell.alignment = { textRotation: 90, horizontal: 'center', vertical: 'middle' };
                tempCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: 'FFFCE9D9'
                    }
                };
                tempCell.font = { bold: true, size: 14, name: "Cambria", };
                allBorder(tempCell);
                sheet.mergeCells(this.getColumnValue(cellCount) + '7', this.getColumnValue(cellCount) + '9');
            });
            var trailingCells = [
                { row: 7, value: "MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },
                { row: 7, value: "HELD", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "ATTENDED", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "% OF ATTTENDANCE", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { row: 7, value: "ELIGIBILITY", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { row: 7, value: "CONDONED", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
            ];
            trailingCells.forEach(cell => {
                let cellCount = sheet.getRow(7).cellCount;
                let tempCell = sheet.getCell(cell.row, cellCount + 1);
                tempCell.value = cell.value;
                tempCell.alignment = cell.alignment;
                tempCell.font = cell.font;
                tempCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: cell.background
                    }
                };
                allBorder(tempCell);
                sheet.mergeCells(this.getColumnValue(cellCount) + cell.row, this.getColumnValue(cellCount) + '9');
            });
            var rowStart = 10;
            section["students"].forEach((student, idx) => {
                var row = sheet.getRow(rowStart + idx);
                row.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
                row.font = { size: 12, name: "Cambria", };
                row.alignment = { horizontal: "center", vertical: "middle" };
                var values = [
                    idx + 1,
                    student["usn"],
                    student["name"],
                ];
                student["assessments"].forEach(assessment => {
                    values.push(assessment["marks"]);
                });
                values.push(student["cieMarks"]);
                values.push(student["classesHeld"]);
                values.push(student["classesAttended"]);
                values.push(student["overallAttendance"]);
                if (student["eligibility"]) {
                    values.push("ELIGIBLE");
                }
                else {
                    values.push("NOT ELIGIBLE");
                }
                if (student["isCondoned"]) {
                    values.push("CONDONED");
                }
                else {
                    values.push("");
                }
                row.values = values;
                var attendanceCell = row.findCell(assessmentLength + 3 + 4);
                if (student["hasAttendanceShortage"]) {
                    attendanceCell.font = { size: 12, name: "Cambria", color: { argb: 'FF008000' } };
                }
                var eligibilityCell = row.findCell(assessmentLength + 3 + 5);
                if (student["eligibility"]) {
                    eligibilityCell.font = { size: 12, name: "Cambria", color: { argb: '00008000' }, bold: true };
                }
                else {
                    eligibilityCell.font = { size: 12, name: "Cambria", color: { argb: '00FF0000' }, bold: true };
                    if (student["hasCieShortage"]) {
                        row.findCell(assessmentLength + 3 + 1).font = { size: 12, name: "Cambria", color: { argb: '00FF0000' }, bold: true };
                    }
                    if (student["hasAttendanceShortage"] && parseInt(student["overallAttendance"]) < 85) {
                        row.findCell(assessmentLength + 3 + 4).font = { size: 12, name: "Cambria", color: { argb: '00FF0000' }, bold: true };
                    }
                }
                var condonedCell = row.findCell(assessmentLength + 3 + 6);
                if (student["isCondoned"]) {
                    condonedCell.font = { size: 12, name: "Cambria", color: { argb: '00FFA500' } };
                }
                row.findCell(3).alignment = { horizontal: "left", vertical: "middle" };
            });
            sheet.getColumn(2).width = 25;
            sheet.getColumn(3).width = 40;
            sheet.getRow(8).height = 20;
            sheet.getRow(9).height = 20;
            var mergeCol = this.getColumnValue(sheet.columnCount - 1);
            sheet.mergeCells('A1', mergeCol + '1');
            sheet.mergeCells('A2', mergeCol + '2');
            sheet.mergeCells('A3', mergeCol + '3');
        });
        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: this.blobType });
            file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob, subjectData['level'] + " - " + subjectData['name']);
        });
    }
    getPpNpSheet(subjectData, gradeMap) {
        var sectionsData = subjectData["sections"];
        var workBook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        function allBorder(cell) {
            cell.style.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        }
        sectionsData.forEach(section => {
            var sheet = workBook.addWorksheet(section.section);
            var cells = [
                { coordinate: 'A1', value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 24, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A2', value: "Autonomous Institute affiliated to VTU, Belagavi", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 12, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A3', value: "COURSEWISE CONSOLIDATED  ATTENDANCE & CIE MARKS", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 16, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
                { coordinate: 'A4', value: "DEPARTMENT", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C4', value: section.students[0].department, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A5', value: "COURSE CODE", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C5', value: subjectData["code"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'D5', value: "COURSE TITLE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'G5', value: subjectData["name"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A6', value: "SEMESTER", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'C6', value: subjectData["level"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'D6', value: "SECTION", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
                { coordinate: 'G6', value: section.section, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
                { coordinate: 'A7', value: "S.NO.", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { coordinate: 'B7', value: "USN", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { coordinate: 'C7', value: "NAME", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
                { coordinate: 'D7', value: "GRADE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
            ];
            cells.forEach(cell => {
                let tempCell = sheet.getCell(cell.coordinate);
                tempCell.value = cell.value;
                tempCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {
                        argb: cell.background
                    }
                };
                tempCell.alignment = cell.alignment;
                tempCell.font = cell.font;
                allBorder(tempCell);
            });
            sheet.mergeCells('A4', 'B4');
            sheet.mergeCells('A5', 'B5');
            sheet.mergeCells('D5', 'F5');
            sheet.mergeCells('G5', 'L5');
            sheet.mergeCells('A6', 'B6');
            sheet.mergeCells('D6', 'F6');
            sheet.mergeCells('A7', 'A9');
            sheet.mergeCells('B7', 'B9');
            sheet.mergeCells('C7', 'C9');
            sheet.mergeCells('D7', 'D9');
            var rowStart = 10;
            section["students"].forEach((student, idx) => {
                var row = sheet.getRow(rowStart + idx);
                row.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
                row.font = { size: 12, name: "Cambria", };
                row.alignment = { horizontal: "center", vertical: "middle" };
                var values = [
                    idx + 1,
                    student["usn"],
                    student["name"],
                    gradeMap[student["usn"]]
                ];
                row.values = values;
                row.findCell(3).alignment = { horizontal: "left", vertical: "middle" };
            });
            sheet.getColumn(2).width = 25;
            sheet.getColumn(3).width = 10;
            var mergeCol = this.getColumnValue(sheet.columnCount - 1);
            sheet.mergeCells('A1', mergeCol + '1');
            sheet.mergeCells('A2', mergeCol + '2');
            sheet.mergeCells('A3', mergeCol + '3');
        });
        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: this.blobType });
            file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob, subjectData['level'] + " - " + subjectData['name'] + '.xlsx');
        });
    }
    /**
     * Downloads an excel of CIE for a subject
     * @param subjectData the details of the CIE of a subject section with three level hierarchy
     * {   subjectName:"Mechanics", isIntegrated:bool  sections:[ { ....,students:[{}],.... }  ]   }
     */
    downloadCIE(subjectData) {
        var isIntegrated = subjectData.isIntegrated;
        console.log(isIntegrated);
        if (isIntegrated) {
            this.getIntegratedCieSheet(subjectData);
        }
        else {
            this.getNonIntegratedCieSheet(subjectData);
        }
    }
    /**
    * Downloads halltickets
    * @param data input data for the hallticket
    * @param filename The name of the file to be downloaded
    */
    downloadHallTicket(data, date, filename, title, view) {
        this.doc = new jsPDF('p', 'pt', 'a4');
        for (var i = 0; i < data.length; i++) {
            if (i % 2 == 0) {
                this.getHallTicket(0, data[i], date, title);
            }
            else {
                this.getHallTicket(410, data[i], date, title);
                this.doc.addPage();
            }
        }
        this.doc.setProperties({
            title: filename
        });
        this.doc.save(filename + '.pdf');
    }
    /**
     * Returns the hall ticket template
     * @param pos Position offset
     * @param data Data to be added in the hall ticket
     */
    getHallTicket(pos, data, date, title) {
        this.doc.setLineWidth(3);
        this.doc.setDrawColor(0, 0, 255);
        this.doc.rect(20, 30 + pos, 555, 350); // outer blue box
        this.doc.addImage(this.logo, 'png', 110, 35 + pos, 28, 28);
        this.doc.addImage(this.wm, 'png', 172, 105 + pos, 250, 250);
        var path = 'assets/images/portraits/' + data.usn.toString() + '.jpg';
        var person = new Image();
        try {
            person.src = path;
            this.doc.addImage(person, 'jpg', 470, 105 + pos, 40, 50);
        }
        catch (error) {
        }
        this.doc.setFontSize(14);
        this.doc.setFontType("bold");
        this.doc.setTextColor(0, 0, 0);
        this.getAlignmentValue(10, 53 + pos, "B.M.S. COLLEGE OF ENGINEERING, Bengaluru-19", { align: 'center', width: '595' });
        this.doc.setFontSize(7);
        this.doc.setFontType("normal");
        this.doc.setTextColor(0, 0, 255);
        this.doc.setFontSize(9);
        this.getAlignmentValue(0, 63 + pos, "Autonomous Institute under VTU, Belagavi", { align: 'center', width: '595' });
        this.doc.setTextColor(255, 0, 0);
        this.getAlignmentValue(0, 76 + pos, "ADMISSION TICKET FOR - B.E. /B.ARCH/M.TECH/MBA/MCA", { align: 'center', width: '595' });
        this.doc.setTextColor(0, 100, 0);
        this.getAlignmentValue(0, 86 + pos, title, { align: 'center', width: '595' });
        this.doc.setDrawColor(0, 0, 255);
        this.doc.rect(20, 30 + pos, 555, 65);
        this.doc.setTextColor(0, 50, 123);
        this.doc.setFontSize(8);
        this.doc.setFontType("bold");
        this.getAlignmentValue(45, 110 + pos, "USN: " + data.usn, { align: 'left', width: '595' });
        this.getAlignmentValue(45, 125 + pos, "Name: " + data.studentName, { align: 'left', width: '595' });
        this.getAlignmentValue(45, 140 + pos, "Semester: " + data.levelName, { align: 'left', width: '595' });
        this.getAlignmentValue(45, 155 + pos, "Program: " + data.programName, { align: 'left', width: '595' });
        this.doc.setDrawColor(0, 0, 255);
        this.doc.rect(20, 30 + pos, 555, 135);
        var row = [];
        let column = ["SL. No", "Course Code", "Course Title", "Eligibility", "Invigilator Sign"];
        for (var j = 0; j < data.subjectDetails.length; j++) {
            row.push([j + 1, data.subjectDetails[j].subjectCode, data.subjectDetails[j].subjectName, data.subjectDetails[j].isEligible]);
        }
        this.doc.setDrawColor(236, 128, 38);
        this.doc.setLineWidth(2);
        this.doc.rect(30, 172 + pos, 535, 58 + ((j - 1) * 13));
        var cellStyles = {
            fontSize: 8,
            fillColor: false,
            textColor: 0,
            halign: 'center',
            valign: 'middle',
            lineWidth: 0.3,
            lineColor: 0,
            minCellHeight: 0,
            cellPadding: 2,
        };
        var headCellStyles = {
            fontSize: 8,
            fillColor: false,
            textColor: 0,
            halign: 'center',
            valign: 'middle',
            lineWidth: 0.3,
            lineColor: 0,
            minCellHeight: 0,
            cellPadding: 12,
        };
        this.doc.autoTable(column, row, {
            startY: 177 + pos,
            headStyles: headCellStyles,
            bodyStyles: cellStyles, styles: cellStyles,
            alternateRowStyles: cellStyles,
            didParseCell: data => {
                if (data.column.dataKey === 3 && data.section === "body") {
                    if (data.row.raw[3] == "ELIGIBLE") {
                        data.cell.styles.textColor = 0;
                        data.cell.styles.fontStyle = "bold";
                    }
                    else {
                        data.cell.styles.textColor = [255, 0, 0];
                        data.cell.styles.fontStyle = "bold";
                    }
                }
                if (data.column.dataKey === 2 && data.section === "body") {
                    data.cell.styles.halign = "left";
                }
            }
        });
        this.doc.setFontSize(8);
        this.doc.setFontType("normal");
        this.getAlignmentValue(55, 370 + pos, "Candidate Signature", { align: 'left', width: '595' });
        this.getAlignmentValue(0, 370 + pos, "Date of Issue: " + date, { align: 'center', width: '595' });
        this.getAlignmentValue(-55, 370 + pos, "Controller of Examinations", { align: 'right', width: '595' });
        this.doc.addImage(this.sign, 'jpg', 470, 335 + pos, 46, 23);
    }
    /**
     * fuction used to align a text in the pdf doc
     * @param x x-position
     * @param y y-position
     * @param text the text to be added
     * @param options used for alignment: center | left | right
     */
    getAlignmentValue(x, y, text, options) {
        var options = options || {};
        var defaults = {
            align: 'left',
            width: this.doc.internal.pageSize.width
        };
        var settings = jquery__WEBPACK_IMPORTED_MODULE_2__.extend({}, defaults, options);
        var fontSize = this.doc.internal.getFontSize();
        var text_size = this.doc.getStringUnitWidth(text) * fontSize / this.doc.internal.scaleFactor;
        if (settings.align === 'center')
            x += (settings.width - text_size) / 2;
        else if (settings.align === 'right')
            x += (settings.width - text_size);
        this.doc.text(text, x, y);
    }
    downloadFormA(data, name, date, time, title) {
        var doc = new jsPDF('p', 'pt', 'a3');
        doc.setFontSize(8);
        doc.setFontStyle('bold');
        doc.setLineWidth(1.1);
        var adjuster = data.students.length;
        if (Math.floor(adjuster / 250) >= 1) {
            adjuster = 250;
        }
        var len = Math.ceil(adjuster / 6) + 1;
        var attendedX = 75, attendedY = 188, attendedCol = 0, attendedRow = 0, absentX = 75, absentY = 305 + 15 * len, absentCol = 0, absentRow = 0, totalPresent = 0, totalAbsent = 0, totalMalpractice = 0;
        this.putFormAHeader(doc, data, len, date, time, title);
        data.students.forEach(student => {
            if (totalPresent % 250 == 0 && totalPresent != 0) {
                var totalOptions = { size: 12, align: 'right' };
                this.putFormAFooter(data, len, doc, totalPresent, totalAbsent, totalMalpractice, totalOptions);
                doc.addPage();
                attendedX = 75;
                attendedY = 188;
                attendedCol = 0;
                attendedRow = 0;
                absentX = 75;
                absentY = 305 + 15 * len;
                absentCol = 0;
                absentRow = 0;
                totalMalpractice = 0;
                var adjuster = data.students.length - 250;
                if (Math.floor(adjuster / 250) >= 1) {
                    adjuster = 250;
                }
                len = Math.ceil(adjuster / 6) + 1;
                this.putFormAHeader(doc, data, len, date, time, title);
            }
            if (student.hasAttended) {
                this.putText(attendedX + attendedCol * 90, attendedY + attendedRow * 20, student.usn, { size: 11 }, doc);
                attendedCol != 0 && attendedCol % 7 == 0 ? (attendedCol = 0, attendedRow++) : attendedCol++;
                totalPresent++;
            }
            else {
                this.putText(absentX + absentCol * 90, absentY + absentRow * 16, student.usn, { size: 11 }, doc);
                absentCol != 0 && absentCol % 5 == 0 ? (absentCol = 0, absentRow++) : absentCol++;
                totalAbsent++;
            }
        });
        this.putFormAFooter(data, len, doc, totalPresent, totalAbsent, totalMalpractice, { size: 12, align: 'right' });
        doc.save(name + " Form-A.pdf");
    }
    putFormAHeader(doc, data, len, date, time, title) {
        var logo = new Image();
        logo.src = 'assets/images/bms_bw.png';
        doc.addImage(logo, 'png', 170, 35, 33, 33);
        doc.rect(65, 155, 735, 25 + 15 * len);
        doc.rect(65, 155 + 25 + 15 * len + 20, 735, 60);
        doc.rect(65, 155 + 25 + 15 * len + 90, 735, 60);
        const textArray = [
            { text: "BMS COLLEGE OF ENGINEERING", size: "11", style: "bold" },
            { text: " (AUTONOMOUS COLLEGE UNDER VTU), ", size: "8", style: "normal" },
            { text: "BANGALORE - 560 019", size: "11", style: "normal" },
        ];
        this.putMulti(-20, 40, textArray, { align: 'center' }, doc);
        this.putText(-30, 40, "Form-A", { align: 'right', size: 10, style: "bold" }, doc);
        this.putText(0, 56, "Attendance and Room Superintendent's Report", { align: 'center', size: 11 }, doc);
        this.putText(20, 70, title, { align: 'center', size: 11 }, doc);
        this.putText(45, 100, "Department: " + data.departmentName, { align: 'left', size: 11 }, doc);
        this.putText(45, 118, "Course: " + data.name, { align: 'left', size: 11 }, doc);
        this.putText(45, 136, "Date: " + moment__WEBPACK_IMPORTED_MODULE_7__(date).format("Do MMMM YYYY"), { align: 'left', size: 11 }, doc);
        this.putText(-45, 118, "Course Code:" + data.code, { align: 'right', size: 11 }, doc);
        this.putText(-45, 136, "Time: " + time, { align: 'right', size: 11 }, doc);
        this.putText(79, 168, "Seat Number of the candidates present:", { size: 12 }, doc);
        this.putText(79, 155 + 25 + 15 * len + 33, "Seat Number of the candidates booked under malpractice:", { size: 12 }, doc);
        this.putText(79, 155 + 25 + 15 * len + 103, "Seat Number of the candidates absent:", { size: 12 }, doc);
    }
    putFormAFooter(data, len, doc, totalPresent, totalAbsent, totalMalpractice, totalOptions) {
        this.putText(-54, 170 + 15 * len - 10, "Total:" + totalPresent, totalOptions, doc);
        this.putText(-54, 145 + 25 + 15 * len + 20 + 51, "Total:  ", totalOptions, doc);
        this.putText(-54, 145 + 25 + 15 * len + 90 + 51, "Total:" + totalAbsent, totalOptions, doc);
        this.putText(70, 145 + 25 + 15 * len + 90 + 92, "Total number of answer books enclosed : _________________", { size: 11 }, doc);
        this.putText(-50, 145 + 25 + 15 * len + 90 + 92, "Total number of packets : _________________", { align: 'right', size: 11 }, doc);
        var text = "Deputy Chief Superintendent";
        doc.setLineWidth(0.6);
        this.putText(300, 145 + 25 + 15 * len + 90 + 112, text, { size: 8 }, doc);
        var textWidth = doc.getTextWidth(text);
        doc.line(300, 145 + 25 + 15 * len + 90 + 113, 300 + textWidth, 145 + 25 + 15 * len + 90 + 113);
        text = "Chief Superintendent";
        this.putText(560, 145 + 25 + 15 * len + 90 + 112, text, { size: 8 }, doc);
        textWidth = doc.getTextWidth(text);
        doc.line(560, 145 + 25 + 15 * len + 90 + 113, 560 + textWidth, 145 + 25 + 15 * len + 90 + 113);
        this.putText(70, 145 + 25 + 15 * len + 90 + 144, "Signature with date:", { size: 11 }, doc);
        this.putText(70, 145 + 25 + 15 * len + 90 + 174, "Name:", { size: 11 }, doc);
        doc.line(240, 145 + 25 + 15 * len + 90 + 144, 470, 145 + 25 + 15 * len + 90 + 144);
        doc.line(500, 145 + 25 + 15 * len + 90 + 144, 720, 145 + 25 + 15 * len + 90 + 144);
        doc.line(240, 145 + 25 + 15 * len + 90 + 174, 470, 145 + 25 + 15 * len + 90 + 174);
        doc.line(500, 145 + 25 + 15 * len + 90 + 174, 720, 145 + 25 + 15 * len + 90 + 174);
    }
    /**
     * Puts a line of text in a document
     * @param x X-coordinate in a page
     * @param y Y-coordinate in a page
     * @param text String to be printed
     * @param options Styling options
     * @param doc The document in which the texts must be printed
     */
    putText(x, y, text, options, doc) {
        var options = options || {};
        var defaults = {
            align: 'left',
            width: doc.internal.pageSize.width,
            size: 8,
            style: 'normal'
        };
        var settings = jquery__WEBPACK_IMPORTED_MODULE_2__.extend({}, defaults, options);
        var fontSize = settings.size;
        doc.setFontSize(fontSize);
        doc.setFontStyle(settings.style);
        var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
        if (settings.align === 'center') {
            x += (settings.width - text_size) / 2;
        }
        else if (settings.align === 'right')
            x += (settings.width - text_size);
        doc.text(text, x, y);
    }
    /**
     * Puts A line of text with multiple styles
     * @param x X-coordinate in a page
     * @param y Y-coordinate in a page
     * @param textArray Array of strings to be printed
     * @param options Styling option
     * @param doc The document in which the texts must be printed
     */
    putMulti(x, y, textArray, options, doc) {
        // putText(x,y,doc){
        var options = options || {};
        var defaults = {
            align: 'left',
            width: doc.internal.pageSize.width
        };
        var text = "";
        textArray.forEach(e => { text += e.text; });
        var settings = jquery__WEBPACK_IMPORTED_MODULE_2__.extend({}, defaults, options);
        var fontSize = doc.internal.getFontSize();
        var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
        if (settings.align === 'center')
            x += (settings.width - text_size) / 2;
        else if (settings.align === 'right')
            x += (settings.width - text_size);
        textArray.forEach(e => {
            doc.setFontSize(e.size);
            doc.setFontStyle(e.style);
            doc.text(e.text, x, y);
            x += doc.getStringUnitWidth(e.text) * e.size / doc.internal.scaleFactor;
        });
    }
    excelFromTemplate(template, data, filename, sheetName = "Sheet 1") {
        var workBook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        let worksheet = workBook.addWorksheet(sheetName, {
            properties: {
                defaultRowHeight: 100,
            },
        });
        var tableData = data[template.tableArray];
        worksheet.columns = template.tableValues;
        var headerRow = worksheet.getRow(template.tableStart);
        headerRow.values = template.tableHeader;
        if (template.tableHeaderStyle != undefined) {
            headerRow.eachCell(cell => {
                cell.style = template.tableHeaderStyle;
            });
        }
        // Fixed Header
        template.fixedHeader.forEach(e => {
            var cell = worksheet.getCell(e.loc);
            cell.style = e.style;
            cell.value = e.value;
        });
        //Dynamic header
        template.dynamicHeader.forEach(d => {
            var cell = worksheet.getCell(d.loc);
            cell.value = d.prefix + data[d.dynamicVar] + d.suffix;
            cell.style = d.style;
        });
        // Table Data
        worksheet.addRows(tableData);
        for (var i = 1; i <= tableData.length; i++) {
            let row = worksheet.getRow(template.tableStart + i);
            for (var j = 1; j <= worksheet.columnCount; j++) {
                worksheet.getCell(row.number, j).border = { bottom: { style: 'thin' }, top: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
            }
            row.height = template.tableStyle.rowHeight;
        }
        // Merges
        template.merges.forEach(m => {
            worksheet.mergeCells(m);
        });
        // Columns
        var cols = worksheet.columns;
        template.colWidths.forEach((c, i) => {
            cols[i].width = c;
        });
        var footerStart = worksheet.rowCount;
        // Fixed Footer
        template.fixedFooter.forEach(f => {
            var cell = worksheet.getRow(f.loc[0] + footerStart).getCell(f.loc[1]);
            cell.value = f.value;
            cell.style = f.style;
        });
        // Dynamic Footer
        template.dynamicFootfer.forEach(f => {
            var cell = worksheet.getRow(f.loc[0] + footerStart).getCell(f.loc[1]);
            cell.value = f.prefix + data[f.dynamicVar] + f.suffix;
            cell.style = f.style;
        });
        // Footer Merges
        template.footerMerges.forEach(range => {
            worksheet.mergeCells(range[0] + footerStart, range[1], range[2] + footerStart, range[3]);
        });
        template.footerRowHeights.forEach((row, i) => {
            worksheet.getRow(footerStart + i + 1).height = row;
        });
        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: this.blobType });
            file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob, filename);
        });
    }
    /**
     * function used to generate and download code stickers
     * @param codes Array of codes generated for packets
     */
    downloadCodes(codes, name, code, isPacket) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__("p", "mm", 'a4');
        doc.setLineWidth(0.2);
        doc.setFontSize(11);
        doc.setFontStyle('bold');
        var x = 65;
        var y = 34;
        var col = 0;
        var row = 0;
        var pageNo = 2;
        if (isPacket) {
            doc.setFontSize(12);
            this.getAlignmentValueAny(-20, 10, code + " - Packets", { align: 'center', }, doc);
            doc.setFontSize(11);
        }
        var that = this;
        doc.setFontSize(8);
        doc.setFontStyle('normal');
        that.getAlignmentValueAny(-20, 10, "Page-1-" + code, { align: 'right', }, doc);
        doc.setFontSize(11);
        doc.setFontStyle('bold');
        function addPage(doc) {
            doc.addPage();
            doc.setFontSize(8);
            doc.setFontStyle('normal');
            that.getAlignmentValueAny(-20, 10, "Page-" + pageNo + "-" + code, { align: 'right', }, doc);
            doc.setFontSize(11);
            doc.setFontStyle('bold');
            pageNo++;
        }
        codes.forEach(element => {
            // doc.roundedRect(15 + x * col, 14 + y * row, 50, 32, 4, 4, 'S');
            this.getAlignmentValueAny(9.5 + x * col + 14, 12 + y * row + 18, element, { align: 'center', width: 34 }, doc);
            col != 0 && col % 2 == 0 ? (row++, col = 0) : col++;
            if (row != 1 && (row - 1) % 7 == 0) {
                row = 0, col = 0;
                addPage(doc);
            }
        });
        doc.save(name + ".pdf");
    }
    /**
     * fuction used to align a text in the pdf doc
     * @param x x-position
     * @param y y-position
     * @param text the text to be added
     * @param options used for alignment: center | left | right
     * @param doc the pdf variable to which the string must be appended
     */
    getAlignmentValueAny(x, y, text, options, doc) {
        var options = options || {};
        var defaults = {
            align: 'left',
            width: doc.internal.pageSize.width
        };
        var settings = jquery__WEBPACK_IMPORTED_MODULE_2__.extend({}, defaults, options);
        var fontSize = doc.internal.getFontSize();
        var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
        if (settings.align === 'center')
            x += (settings.width - text_size) / 2;
        else if (settings.align === 'right')
            x += (settings.width - text_size);
        doc.text(text, x, y);
    }
    /**
     * Downloads an excel of CIE for a subject
     * @param subjectData the details of the CIE of a subject section with three level hierarchy
     * {   subjectName:"Mechanics", isIntegrated:bool  sections:[ { ....,students:[{}],.... }  ]   }
     */
    downloadEligibility(subjectData) {
        var excelMeta;
        if (subjectData["isIntegrated"] == true) {
            excelMeta = E_INTEGRATED_SUBJECT;
        }
        else {
            excelMeta = E_NONINTEGRATED_SUBJECT;
        }
        var merges = excelMeta.MERGES;
        var workBook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        var sectionsData = subjectData["sections"];
        var hasCIEShortage = [];
        var hasAttendanceShortage = [];
        var hasTotalCIEShortage = [];
        var hasLabAttendanceShortage = [];
        var i = 0;
        var j = 0;
        var k = 0;
        var x = 0;
        var y = 0;
        sectionsData.forEach(section => {
            section["code"] = subjectData["code"];
            section["name"] = subjectData["name"];
            section["level"] = subjectData["level"];
            var workSheet = workBook.addWorksheet(section["section"]);
            merges.forEach(range => {
                workSheet.mergeCells(range);
            });
            // Header
            let headerValues = excelMeta.HEADER;
            headerValues.forEach(header => {
                let cell = workSheet.getCell(header.loc);
                cell.value = header.value;
                cell.style.alignment = { horizontal: header.align };
                cell.style.font = { size: header.fontSize };
            });
            let headerData = excelMeta.HEADER_DATA;
            Object.keys(headerData).forEach(hData => {
                let cell = workSheet.getCell(hData);
                cell.value = section[headerData[hData]];
                cell.style = { font: { bold: true } };
            });
            // Data
            let tableStart = workSheet.rowCount + 2;
            workSheet.getRow(tableStart).values = excelMeta.TABLE_HEADER_NAMES;
            workSheet.getRow(tableStart).font = { bold: true };
            workSheet.columns = excelMeta.TABLE_ROWS;
            let studentArray = section["students"];
            studentArray.forEach((student, index) => {
                student["sl"] = index + 1;
                if (student["isCondoned"]) {
                    student["isCondoned"] = "CONDONED";
                }
                else {
                    student["isCondoned"] = "NOT CONDONED";
                }
                if (student["eligibility"]) {
                    student["eligibility"] = "ELIGIBLE";
                }
                else {
                    student["eligibility"] = "NOT ELIGIBLE";
                }
                workSheet.addRow(student);
                hasCIEShortage.push(student["hasCieShortage"]);
                hasAttendanceShortage.push(student["hasAttendanceShortage"]);
                hasTotalCIEShortage.push(student["hasCieShortage"]);
                hasLabAttendanceShortage.push(student["hasAttendanceShortage"]);
            });
            if (subjectData["isIntegrated"] == true) {
                workSheet.getColumn("cieMarks").eachCell(cell => {
                    if (parseInt(cell.row) >= tableStart + 1) {
                        if (hasCIEShortage[i]) {
                            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        }
                        i++;
                    }
                });
                workSheet.getColumn("theoryCie").eachCell(cell => {
                    if (parseInt(cell.row) >= tableStart + 1) {
                        if (hasTotalCIEShortage[j]) {
                            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        }
                        j++;
                    }
                });
                workSheet.getColumn("labCie").eachCell(cell => {
                    if (parseInt(cell.row) >= tableStart + 1) {
                        if (hasTotalCIEShortage[k]) {
                            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        }
                        k++;
                    }
                });
                workSheet.getColumn("theoryAttendance").eachCell(cell => {
                    if (parseInt(cell.row) >= tableStart + 1) {
                        if (hasAttendanceShortage[x] && cell.value < 85) {
                            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        }
                        x++;
                    }
                });
                workSheet.getColumn("labAttendance").eachCell(cell => {
                    if (parseInt(cell.row) >= tableStart + 1) {
                        if (hasLabAttendanceShortage[y] && cell.value < 85) {
                            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        }
                        y++;
                    }
                });
            }
            else {
                workSheet.getColumn("cieMarks").eachCell(cell => {
                    if (parseInt(cell.row) >= tableStart + 1) {
                        if (hasCIEShortage[i]) {
                            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        }
                        i++;
                    }
                });
                workSheet.getColumn("overallAttendance").eachCell(cell => {
                    if (parseInt(cell.row) >= tableStart + 1) {
                        if (hasAttendanceShortage[j]) {
                            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        }
                        j++;
                    }
                });
            }
            workSheet.getColumn("eligibility").eachCell(cell => {
                switch (cell.value) {
                    case "NOT ELIGIBLE":
                        cell.style = { font: { bold: true, color: { argb: '00FF0000' } } };
                        break;
                    case "ELIGIBLE":
                        cell.style = { font: { bold: true, color: { argb: '00008000' } } };
                        break;
                    default:
                        break;
                }
            });
            // Footer
            let footerStart = workSheet.rowCount + 2;
            let fixedFooter = excelMeta.FOOTER;
            fixedFooter.forEach(row => {
                let rowCount = footerStart + row.row;
                let footerRow = workSheet.getRow(rowCount);
                footerRow.values = row.value;
            });
            let footerMerges = excelMeta.FOOTER_MERGES;
            footerMerges.forEach(range => {
                workSheet.mergeCells(range.rowStart + footerStart, range.colStart, range.rowEnd + footerStart, range.colEnd);
            });
        });
        // Save
        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: this.blobType });
            file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs(blob, subjectData['level'] + " - " + subjectData['name']);
        });
    }
    /**
    * Downloads halltickets
    * @param data input data for the hallticket
    * @param filename The name of the file to be downloaded
    */
    downloadGradeCard(data) {
        var gradeCard = new jsPDF('p', 'pt', 'a4');
        var filename = "Grade Card - " + data.usn;
        gradeCard.setProperties({
            title: filename
        });
        gradeCard.setLineWidth(3);
        gradeCard.setDrawColor(0, 0, 255);
        gradeCard.rect(20, 30, 555, 350); // outer blue box
        gradeCard.addImage(this.logo, 'png', 110, 35, 28, 28);
        gradeCard.addImage(this.wm, 'png', 172, 105, 250, 250);
        var path = 'assets/images/portraits/' + data.usn.toString() + '.bmp';
        var person = new Image();
        try {
            person.src = path;
            gradeCard.addImage(person, 'bmp', 470, 105, 40, 50);
        }
        catch (error) {
        }
        gradeCard.setFontSize(14);
        gradeCard.setFontType("bold");
        gradeCard.setTextColor(0, 0, 0);
        this.getAlignmentValueAny(10, 53, "B.M.S. COLLEGE OF ENGINEERING, Bengaluru-19", { align: 'center', width: '595' }, gradeCard);
        gradeCard.setFontSize(7);
        gradeCard.setFontType("normal");
        gradeCard.setTextColor(0, 0, 255);
        gradeCard.setFontSize(9);
        this.getAlignmentValueAny(0, 63, "Autonomous Institute under VTU, Belagavi", { align: 'center', width: '595' }, gradeCard);
        gradeCard.setTextColor(255, 0, 0);
        this.getAlignmentValueAny(0, 76, "ADMISSION TICKET FOR - B.E. /B.ARCH/M.TECH/MBA/MCA", { align: 'center', width: '595' }, gradeCard);
        gradeCard.setTextColor(0, 100, 0);
        this.getAlignmentValueAny(0, 86, "Semester End Examination – December -2019 /Jan-2020", { align: 'center', width: '595' }, gradeCard);
        gradeCard.setDrawColor(0, 0, 255);
        gradeCard.rect(20, 30, 555, 65);
        gradeCard.setTextColor(0, 50, 123);
        gradeCard.setFontSize(8);
        gradeCard.setFontType("bold");
        this.getAlignmentValueAny(45, 110, "USN: " + data.usn, { align: 'left', width: '595' }, gradeCard);
        this.getAlignmentValueAny(45, 125, "Name: " + data.studentName, { align: 'left', width: '595' }, gradeCard);
        this.getAlignmentValueAny(45, 140, "Semester: " + data.levelName, { align: 'left', width: '595' }, gradeCard);
        this.getAlignmentValueAny(45, 155, "Branch: " + data.departmentName, { align: 'left', width: '595' }, gradeCard);
        gradeCard.setDrawColor(0, 0, 255);
        gradeCard.rect(20, 30, 555, 135);
        var row = [];
        let column = ["Course Code", "Course Title", "Credits", "Grade", "Grade Points"];
        for (var j = 0; j < data.subjectDetails.length; j++) {
            row.push([
                data.subjectDetails[j].subjectCode,
                data.subjectDetails[j].subjectName,
                data.subjectDetails[j].credits,
                data.subjectDetails[j].grade,
                data.subjectDetails[j].gradePoints
            ]);
        }
        gradeCard.setDrawColor(236, 128, 38);
        gradeCard.setLineWidth(2);
        gradeCard.rect(30, 172, 535, 58 + ((j - 1) * 13));
        var cellStyles = {
            fontSize: 8,
            fillColor: false,
            textColor: 0,
            halign: 'center',
            valign: 'middle',
            lineWidth: 0.3,
            lineColor: 0,
            minCellHeight: 0,
            cellPadding: 2,
        };
        var headCellStyles = {
            fontSize: 8,
            fillColor: false,
            textColor: 0,
            halign: 'center',
            valign: 'middle',
            lineWidth: 0.3,
            lineColor: 0,
            minCellHeight: 0,
            cellPadding: 12,
        };
        gradeCard.autoTable(column, row, {
            startY: 177,
            headStyles: headCellStyles,
            bodyStyles: cellStyles, styles: cellStyles,
            alternateRowStyles: cellStyles,
            didParseCell: data => {
                if (data.column.dataKey === 3 && data.section === "body") {
                    if (data.row.raw[3] == "F") {
                        data.cell.styles.textColor = [255, 0, 0];
                        data.cell.styles.fontStyle = "bold";
                    }
                    else if (data.row.raw[3] == "W") {
                        data.cell.styles.textColor = [255, 0, 0];
                        data.cell.styles.fontStyle = "bold";
                    }
                    else if (data.row.raw[3] == "I") {
                        data.cell.styles.textColor = [0, 128, 0];
                        data.cell.styles.fontStyle = "bold";
                    }
                    else if (data.row.raw[3] == "X") {
                        data.cell.styles.textColor = [0, 128, 0];
                        data.cell.styles.fontStyle = "bold";
                    }
                    else {
                        data.cell.styles.textColor = 0;
                        data.cell.styles.fontStyle = "bold";
                    }
                }
            }
        });
        gradeCard.setFontSize(8);
        gradeCard.setFontType("normal");
        this.getAlignmentValueAny(55, 370, "Obtained Credits: " + data.obtainedCredits, { align: 'left', width: '595' }, gradeCard);
        this.getAlignmentValueAny(0, 370, "SGPA: " + data.sgpa, { align: 'center', width: '595' }, gradeCard);
        this.getAlignmentValueAny(-55, 370, "CGPA: " + data.cgpa, { align: 'right', width: '595' }, gradeCard);
        gradeCard.save(filename + '.pdf');
    }
    getGradeCard(students, programName, dateOfIssue, base64string) {
        console.log(students, programName, dateOfIssue);
        var date = moment__WEBPACK_IMPORTED_MODULE_7__(dateOfIssue).format('DD-MMM-YYYY');
        if (students[0].degreeId == 1) {
            this.getBEGradeCard(students, programName, date, base64string);
        }
        else if (students[0].degreeId == 2 || students[0].degreeId == 4) {
            this.getMbaMcaGradeCard(students, programName, date, base64string);
        }
        else {
            this.getMtechGradeCard(students, programName, date, base64string);
        }
    }
    getMtechGradeCard(students, programName, dateOfIssue, base64string) {
        var template = new Image();
        template.src = 'assets/images/mtechGradeCard.jpg';
        var doc = new jsPDF('l', 'mm', 'a4');
        doc.deletePage(1);
        students.forEach(student => {
            doc.addPage();
            doc.addImage(template, 'jpg', 0, 0, 297, 210);
            var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
            var person = new Image();
            if (base64string) {
                person.src = base64string;
                doc.addImage(person, 'jpg', 255, 47, 21, 25);
            }
            else {
                try {
                    person.src = path;
                    doc.addImage(person, 'jpg', 255, 47, 21, 25);
                }
                catch (error) {
                }
            }
            doc.setFontType("bold");
            doc.setFont('Times');
            doc.setFontSize(15);
            doc.setTextColor('red');
            var program = programName.split(' ').slice(2).join(' ');
            this.getAlignmentValueAny(-2, 58, program, { align: 'center', width: '297' }, doc);
            doc.setFontSize(10);
            doc.setTextColor(165, 35, 120);
            doc.text(student.studentName, 62.3, 62.1);
            student.guardianDetails.forEach(guardian => {
                if (guardian.relationType == 'Mother') {
                    doc.text(guardian.name, 62.3, 67);
                }
                else {
                    doc.text(guardian.name, 62.3, 72.3);
                }
            });
            doc.text(student['usn'], 66.8, 78);
            var levelName = student.sessionSemester;
            doc.text(levelName, 202.5, 67.55);
            /**
             * Using Hardcoded Value for now due to client requirements
             * Please change Later!
             * doc.text(student.seasonName, 202.5, 73.1);
             */
            doc.text(String(student.academicYear).split('-')[0] + ' - ' + String(student.academicYear).split('-')[1].slice(3), 202.5, 73.1);
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            doc.setFontType("normal");
            this.getAlignmentValueAny(-133.6, 170.2, student.registeredCredits + "0", { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 176.2, student.obtainedCredits + "0", { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 187.7, student.totalCredits, { align: 'right', width: '297' }, doc);
            doc.setFontType("bold");
            this.getAlignmentValueAny(-133.6, 181.6, student.sgpa, { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 193.8, student.cgpa, { align: 'right', width: '297' }, doc);
            doc.setTextColor(12, 32, 226);
            doc.setFontType("normal");
            this.getAlignmentValueAny(79.2, 193.8, dateOfIssue, { align: 'center', width: '20' }, doc);
            doc.addImage(this.principal_signature, 'jpg', 232.2, 171.5, 43.4, 17);
            doc.text(student.barcode, 34.7, 193.38);
            var row = [];
            let column = [
                { key: "sl", title: "Sl. No." },
                { key: "cc", title: "Course Code" },
                { key: "ct", title: "Course Title" },
                { key: "cd", title: "Credits" },
                { key: "g", title: "Grade Awarded" },
                { key: "gp", title: "Grade Points" },
            ];
            var subjectDetails = student.academicDetails;
            function sortByProperty(property) {
                return function (a, b) {
                    if (a[property] > b[property])
                        return 1;
                    else if (a[property] < b[property])
                        return -1;
                    return 0;
                };
            }
            subjectDetails.sort(sortByProperty("slno"));
            for (var j = 0; j < subjectDetails.length; j++) {
                row.push([
                    j + 1,
                    subjectDetails[j].subjectCode,
                    subjectDetails[j].subjectName,
                    subjectDetails[j].credits + ".00",
                    subjectDetails[j].grade,
                    subjectDetails[j].gradePoints * subjectDetails[j].credits,
                ]);
            }
            var cellStyles = {
                fontSize: 11,
                font: 'times',
                fillColor: false,
                textColor: 0,
                halign: 'left',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
                fontStyle: "bold"
            };
            var headCellStyles = {
                fontSize: 12,
                fillColor: false,
                textColor: 'red',
                font: 'Arial',
                halign: 'center',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
            };
            doc.autoTable(column, row, {
                startY: 83,
                headStyles: headCellStyles,
                bodyStyles: cellStyles, styles: cellStyles,
                tableLineColor: [12, 32, 226],
                tableLineWidth: 0.5,
                alternateRowStyles: cellStyles,
                didParseCell: data => {
                    if (data.section !== "body") {
                        data.cell.styles.font = "helvetica";
                        data.cell.styles.fontStyle = "bold";
                    }
                },
                tableWidth: 245,
                margin: { left: 26 },
                columnStyles: {
                    cc: { columnWidth: 40, halign: 'center', },
                    sl: { columnWidth: 25, halign: 'center', },
                    cd: { columnWidth: 25, halign: 'center', },
                    gp: { columnWidth: 25, halign: 'center', },
                    g: { columnWidth: 25, halign: 'center', },
                }
            });
            var barcode = document.createElement("canvas");
            barcode.setAttribute("id", "barcode");
            barcode.setAttribute("hidden", "true");
            document.body.appendChild(barcode);
            var barcodeImage = new jsbarcode__WEBPACK_IMPORTED_MODULE_6__('#barcode', student.barcode);
            var canvas = document.getElementsByTagName('canvas');
            var context = canvas[0].getContext('2d');
            var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas[0].width, canvas[0].height);
            var tempCanvas = document.createElement("canvas"), tCtx = tempCanvas.getContext("2d");
            tempCanvas.width = 200;
            tempCanvas.height = 50;
            tCtx.drawImage(canvas[0], 0, 0);
            var jpegUrl = tempCanvas.toDataURL("image/png");
            doc.addImage(jpegUrl, 'png', 21, 171);
            document.body.removeChild(document.getElementById('barcode'));
        });
        doc.save(programName + ' - ' + students[0].levelName + '.pdf');
    }
    getMtechFinalGradeCard(students, programName, dateOfIssue, base64string) {
        var template = new Image();
        template.src = 'assets/images/finalMtechGradeCard.jpg';
        var doc = new jsPDF('l', 'mm', 'a4');
        doc.deletePage(1);
        students.forEach(student => {
            doc.addPage();
            doc.addImage(template, 'jpg', 0, 0, 297, 210);
            var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
            var person = new Image();
            if (base64string) {
                person.src = base64string;
                doc.addImage(person, 'jpg', 255, 47, 21, 25);
            }
            else {
                try {
                    person.src = path;
                    doc.addImage(person, 'jpg', 255, 47, 21, 25);
                }
                catch (error) {
                }
            }
            doc.setFontType("bold");
            doc.setFont('Times');
            doc.setFontSize(15);
            doc.setTextColor('red');
            var program = programName.split(' ').slice(2).join(' ');
            this.getAlignmentValueAny(-2, 58, program, { align: 'center', width: '297' }, doc);
            doc.setFontSize(10);
            doc.setTextColor(165, 35, 120);
            doc.text(student.studentName, 62.3, 62.1);
            student.guardianDetails.forEach(guardian => {
                if (guardian.relationType == 'Mother') {
                    doc.text(guardian.name, 62.3, 67);
                }
                else {
                    doc.text(guardian.name, 62.3, 72.3);
                }
            });
            doc.text(student['usn'], 66.8, 78);
            var levelName = student.sessionSemester;
            doc.text(levelName, 202.5, 67.55);
            /**
             * Using Hardcoded Value for now due to client requirements
             * Please change Later!
             * doc.text(student.seasonName, 202.5, 73.1);
             */
            doc.text(String(student.academicYear).split('-')[0] + ' - ' + String(student.academicYear).split('-')[1].slice(3), 202.5, 73.1);
            doc.setFontSize(11);
            doc.setTextColor(12, 32, 226);
            doc.setFontType("normal");
            this.getAlignmentValueAny(79.2, 192.8, dateOfIssue, { align: 'center', width: '20' }, doc);
            doc.text(student.barcode, 34.7, 192.48);
            doc.addImage(this.principal_signature, 'jpg', 244.5, 171.5, 36.7, 17);
            var row = [];
            let column = [
                { key: "sl", title: "Sl. No." },
                { key: "cc", title: "Course Code" },
                { key: "ct", title: "Course Title" },
                { key: "cd", title: "Credits" },
                { key: "g", title: "Grade Awarded" },
                { key: "gp", title: "Grade Points" },
            ];
            var subjectDetails = student.academicDetails;
            function sortByProperty(property) {
                return function (a, b) {
                    if (a[property] > b[property])
                        return 1;
                    else if (a[property] < b[property])
                        return -1;
                    return 0;
                };
            }
            subjectDetails.sort(sortByProperty("slno"));
            for (var j = 0; j < subjectDetails.length; j++) {
                row.push([
                    j + 1,
                    subjectDetails[j].subjectCode,
                    subjectDetails[j].subjectName,
                    subjectDetails[j].credits + ".00",
                    subjectDetails[j].grade,
                    subjectDetails[j].gradePoints * subjectDetails[j].credits,
                ]);
            }
            var cellStyles = {
                fontSize: 11,
                font: 'times',
                fillColor: false,
                textColor: 0,
                halign: 'left',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
                fontStyle: "normal"
            };
            var headCellStyles = {
                fontSize: 12,
                fillColor: false,
                textColor: 'red',
                font: 'Arial',
                halign: 'center',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
            };
            doc.autoTable(column, row, {
                startY: 83,
                headStyles: headCellStyles,
                bodyStyles: cellStyles, styles: cellStyles,
                tableLineColor: [12, 32, 226],
                tableLineWidth: 0.5,
                alternateRowStyles: cellStyles,
                didParseCell: data => {
                    if (data.section !== "body") {
                        data.cell.styles.font = "helvetica";
                        data.cell.styles.fontStyle = "bold";
                    }
                },
                tableWidth: 245,
                margin: { left: 26 },
                columnStyles: {
                    cc: { columnWidth: 40, halign: 'center', },
                    sl: { columnWidth: 25, halign: 'center', },
                    cd: { columnWidth: 25, halign: 'center', },
                    gp: { columnWidth: 25, halign: 'center', },
                    g: { columnWidth: 25, halign: 'center', },
                }
            });
            let tableY = doc.lastAutoTable.finalY;
            var title = student.projectTitle;
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12);
            this.getAlignmentValueAny(26, tableY + 8, `Title of the Project : ${title}`, { align: 'left', width: '20' }, doc);
            this.getAlignmentValueAny(26, tableY + 20, `Credits Registered : ${student.registeredCredits + '0'}`, { align: 'left', width: '297' }, doc);
            this.getAlignmentValueAny(32, tableY + 27, `Credits Earned : ${student.obtainedCredits + '0'}`, { align: 'left', width: '297' }, doc);
            this.getAlignmentValueAny(120, tableY + 25, `Cumulative Credits Earned : ${student.totalCredits}`, { align: 'left', width: '297' }, doc);
            doc.setFontType('bold');
            this.getAlignmentValueAny(220, tableY + 20, `SGPA : ${student.sgpa}`, { align: 'left', width: '297' }, doc);
            this.getAlignmentValueAny(220, tableY + 25, `CGPA : ${student.cgpa}`, { align: 'left', width: '297' }, doc);
            this.getAlignmentValueAny(102, 163, `Results of I to IV Semesters :`, { align: 'left', width: '297' }, doc);
            //-------Second table----------------
            var rows = [];
            let columns = ['', '', '', '', ''];
            let tempFirstRow = ['Semester'];
            let tempSecondRow = ['SGPA'];
            let tempThirdRow = ['CGPA'];
            for (var i = 0; i < student.previousSemesterGPADetails.length; i++) {
                tempFirstRow.push(student.previousSemesterGPADetails[i].levelName.split(' ')[0]);
                tempSecondRow.push(Number(student.previousSemesterGPADetails[i].sgpa).toFixed(2));
                tempThirdRow.push(Number(student.previousSemesterGPADetails[i].cgpa).toFixed(2));
            }
            rows.push(tempFirstRow);
            rows.push(tempSecondRow);
            rows.push(tempThirdRow);
            var result = 'Pass';
            if (Number(student.cgpa) >= 7.75) {
                result = 'FCD';
            }
            else if (Number(student.cgpa) >= 6.65 && Number(student.cgpa) <= 7.74) {
                result = 'FC';
            }
            else if (Number(student.cgpa) >= 5.75 && Number(student.cgpa) <= 6.64) {
                result = 'SC';
            }
            let tempFourthRow = ['Result of the Degree', result, '', '', ''];
            rows.push(tempFourthRow);
            var cellStyle = {
                fontSize: 12,
                fillColor: false,
                textColor: 0,
                halign: 'left',
                valign: 'middle',
                lineWidth: 0.3,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1
            };
            var headCellStyle = {
                fontSize: 8,
                fillColor: false,
                textColor: 0,
                halign: 'center',
                valign: 'middle',
                lineWidth: 0.3,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1
            };
            doc.autoTable(columns, rows, {
                margin: { left: 102 },
                tableWidth: 145,
                startY: 165,
                headStyles: headCellStyle,
                bodyStyles: cellStyle,
                styles: cellStyle,
                alternateRowStyles: cellStyle,
                didParseCell: function (data) {
                    var rows = data.table.body;
                    if (data.row.index === rows.length - 1 && data.column.index == 1) {
                        data.cell.colSpan = 4;
                        data.cell.styles.halign = 'center';
                    }
                },
                columnStyles: {
                    0: { cellWidth: 41, fontStyle: 'normal' },
                    1: { cellWidth: 13, halign: 'center', fontStyle: 'normal' },
                    2: { cellWidth: 13, halign: 'center', fontStyle: 'normal' },
                    3: { cellWidth: 13, halign: 'center', fontStyle: 'normal' },
                    4: { cellWidth: 13, halign: 'center', fontStyle: 'normal' }
                }
            });
            // ------Second table end-----
            var barcode = document.createElement("canvas");
            barcode.setAttribute("id", "barcode");
            barcode.setAttribute("hidden", "true");
            document.body.appendChild(barcode);
            var barcodeImage = new jsbarcode__WEBPACK_IMPORTED_MODULE_6__('#barcode', student.barcode);
            var canvas = document.getElementsByTagName('canvas');
            var context = canvas[0].getContext('2d');
            var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas[0].width, canvas[0].height);
            var tempCanvas = document.createElement("canvas"), tCtx = tempCanvas.getContext("2d");
            tempCanvas.width = 200;
            tempCanvas.height = 50;
            tCtx.drawImage(canvas[0], 0, 0);
            var jpegUrl = tempCanvas.toDataURL("image/png");
            doc.addImage(jpegUrl, 'png', 21, 171);
            document.body.removeChild(document.getElementById('barcode'));
        });
        doc.save(programName + ' - ' + students[0].levelName + '.pdf');
    }
    getMbaMcaGradeCard(students, programName, dateOfIssue, base64string) {
        var template = new Image();
        template.src = 'assets/images/mbaMcaGradeCard.jpg';
        var doc = new jsPDF('l', 'mm', 'a4');
        doc.deletePage(1);
        students.forEach(student => {
            doc.addPage();
            doc.addImage(template, 'jpg', 0, 0, 297, 210);
            var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
            var person = new Image();
            if (base64string) {
                person.src = base64string;
                doc.addImage(person, 'jpg', 255, 47, 21, 25);
            }
            else {
                try {
                    person.src = path;
                    doc.addImage(person, 'jpg', 255, 47, 21, 25);
                }
                catch (error) {
                }
            }
            doc.setFontType("bold");
            doc.setFont('Times');
            doc.setFontSize(15);
            doc.setTextColor('red');
            this.getAlignmentValueAny(0, 52, student.departmentName, { align: 'center', width: '297' }, doc);
            doc.setFontSize(10);
            doc.setTextColor(165, 35, 120);
            doc.text(student.studentName, 62.3, 62.1);
            student.guardianDetails.forEach(guardian => {
                if (guardian.relationType == 'Mother') {
                    doc.text(guardian.name, 62.3, 67);
                }
                else {
                    doc.text(guardian.name, 62.3, 72.3);
                }
            });
            doc.text(student['usn'], 66.8, 78);
            var levelName = student.sessionSemester;
            doc.text(levelName, 202.5, 67.55);
            /**
             * Using Hardcoded Value for now due to client requirements
             * Please change Later!
             * doc.text(student.seasonName, 202.5, 73.1);
             */
            console.log(String(student.academicYear).split('-')[1].slice(3));
            doc.text(String(student.academicYear).split('-')[0] + ' - ' + String(student.academicYear).split('-')[1].slice(3), 202.5, 73.1);
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            doc.setFontType("normal");
            this.getAlignmentValueAny(-133.6, 170.2, student.registeredCredits + "0", { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 176.2, student.obtainedCredits + "0", { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 187.7, student.totalCredits, { align: 'right', width: '297' }, doc);
            doc.setFontType("bold");
            this.getAlignmentValueAny(-133.6, 181.6, student.sgpa, { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 193.8, student.cgpa, { align: 'right', width: '297' }, doc);
            doc.setTextColor(12, 32, 226);
            doc.setFontType("normal");
            this.getAlignmentValueAny(79.2, 193.8, dateOfIssue, { align: 'center', width: '20' }, doc);
            doc.addImage(this.principal_signature, 'jpg', 235.2, 171.5, 38, 17);
            doc.text(student.barcode, 34.7, 193.38);
            var row = [];
            let column = [
                { key: "sl", title: "Sl. No." },
                { key: "cc", title: "Course Code" },
                { key: "ct", title: "Course Title" },
                { key: "cd", title: "Credits" },
                { key: "g", title: "Grade Awarded" },
                { key: "gp", title: "Grade Points" },
            ];
            var subjectDetails = student.academicDetails;
            function sortByProperty(property) {
                return function (a, b) {
                    if (a[property] > b[property])
                        return 1;
                    else if (a[property] < b[property])
                        return -1;
                    return 0;
                };
            }
            subjectDetails.sort(sortByProperty("slno"));
            for (var j = 0; j < subjectDetails.length; j++) {
                row.push([
                    j + 1,
                    subjectDetails[j].subjectCode,
                    subjectDetails[j].subjectName,
                    subjectDetails[j].credits + ".00",
                    subjectDetails[j].grade,
                    subjectDetails[j].gradePoints * subjectDetails[j].credits,
                ]);
            }
            var cellStyles = {
                fontSize: 11,
                font: 'times',
                fillColor: false,
                textColor: 0,
                halign: 'left',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
                fontStyle: "bold"
            };
            var headCellStyles = {
                fontSize: 12,
                fillColor: false,
                textColor: 'red',
                font: 'Arial',
                halign: 'center',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
            };
            doc.autoTable(column, row, {
                startY: 83,
                headStyles: headCellStyles,
                bodyStyles: cellStyles, styles: cellStyles,
                tableLineColor: [12, 32, 226],
                tableLineWidth: 0.5,
                alternateRowStyles: cellStyles,
                didParseCell: data => {
                    if (data.section !== "body") {
                        data.cell.styles.font = "helvetica";
                        data.cell.styles.fontStyle = "bold";
                    }
                },
                tableWidth: 245,
                margin: { left: 26 },
                columnStyles: {
                    cc: { columnWidth: 40, halign: 'center', },
                    sl: { columnWidth: 25, halign: 'center', },
                    cd: { columnWidth: 25, halign: 'center', },
                    gp: { columnWidth: 25, halign: 'center', },
                    g: { columnWidth: 25, halign: 'center', },
                }
            });
            var barcode = document.createElement("canvas");
            barcode.setAttribute("id", "barcode");
            barcode.setAttribute("hidden", "true");
            document.body.appendChild(barcode);
            var barcodeImage = new jsbarcode__WEBPACK_IMPORTED_MODULE_6__('#barcode', student.barcode);
            var canvas = document.getElementsByTagName('canvas');
            var context = canvas[0].getContext('2d');
            var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas[0].width, canvas[0].height);
            var tempCanvas = document.createElement("canvas"), tCtx = tempCanvas.getContext("2d");
            tempCanvas.width = 200;
            tempCanvas.height = 50;
            tCtx.drawImage(canvas[0], 0, 0);
            var jpegUrl = tempCanvas.toDataURL("image/png");
            doc.addImage(jpegUrl, 'png', 21, 171);
            document.body.removeChild(document.getElementById('barcode'));
        });
        doc.save(programName + ' - ' + students[0].levelName + '.pdf');
    }
    getBEGradeCard(students, programName, dateOfIssue, base64string) {
        var template = new Image();
        template.src = 'assets/images/beGradeCard.jpg';
        var doc = new jsPDF('l', 'mm', 'a4');
        doc.deletePage(1);
        students.forEach(student => {
            doc.addPage();
            doc.addImage(template, 'jpg', 0, 0, 297, 210);
            var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
            var person = new Image();
            if (base64string) {
                person.src = base64string;
                doc.addImage(person, 'jpg', 255, 47, 21, 25);
            }
            else {
                try {
                    person.src = path;
                    doc.addImage(person, 'jpg', 255, 47, 21, 25);
                }
                catch (error) {
                }
            }
            doc.setFontType("bold");
            doc.setFont('times');
            doc.setFontSize(15);
            doc.setTextColor(0, 0, 175);
            var exp = new RegExp(/^(be)\s*(in)\s*/, "gi");
            this.getAlignmentValueAny(0, 58, (String(programName).split(exp)[String(programName).split(exp).length - 1]), { align: 'center', width: '297' }, doc);
            doc.setFontSize(10);
            doc.setTextColor(165, 35, 120);
            doc.text(student.studentName, 62.3, 62.1);
            student.guardianDetails.forEach(guardian => {
                if (guardian.relationType == 'Mother') {
                    doc.text(guardian.name, 62.3, 67);
                }
                else {
                    doc.text(guardian.name, 62.3, 72.3);
                }
            });
            doc.text(student['usn'], 66.8, 78);
            var levelName = student.sessionSemester;
            doc.text(levelName, 202.5, 67.55);
            /**
             * Using Hardcoded Value for now due to client requirements
             * Please change Later!
             * doc.text(student.seasonName, 202.5, 73.1);
             */
            doc.text(student.sessionName, 202.5, 73.1);
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            doc.setFontType("normal");
            this.getAlignmentValueAny(-133.6, 170.2, student.registeredCredits + "0", { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 176.2, student.obtainedCredits + "0", { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 187.7, student.totalCredits, { align: 'right', width: '297' }, doc);
            doc.setFontType("bold");
            this.getAlignmentValueAny(-133.6, 181.6, student.sgpa, { align: 'right', width: '297' }, doc);
            this.getAlignmentValueAny(-133.6, 193.8, student.cgpa, { align: 'right', width: '297' }, doc);
            doc.setTextColor(12, 32, 226);
            doc.setFontType("normal");
            doc.setDrawColor(0, 0, 0);
            doc.circle(89.6, 177, 6);
            doc.text('Date of Issue', 79.2, 187.7);
            this.getAlignmentValueAny(79.2, 193.8, dateOfIssue, { align: 'center', width: '20' }, doc);
            doc.addImage(this.principal_signature, 'jpg', 247.2, 172.7, 33.3, 17);
            doc.text(student.barcode, 34.7, 193.98);
            var row = [];
            let column = [
                { key: "sl", title: "Sl. No." },
                { key: "cc", title: "Course Code" },
                { key: "ct", title: "Course Title" },
                { key: "cd", title: "Credits" },
                { key: "g", title: "Grade Awarded" },
                { key: "gp", title: "Grade Points" },
            ];
            var subjectDetails = student.academicDetails;
            function sortByProperty(property) {
                return function (a, b) {
                    if (a[property] > b[property])
                        return 1;
                    else if (a[property] < b[property])
                        return -1;
                    return 0;
                };
            }
            subjectDetails.sort(sortByProperty("slno"));
            for (var j = 0; j < subjectDetails.length; j++) {
                row.push([
                    j + 1,
                    subjectDetails[j].subjectCode,
                    subjectDetails[j].subjectName,
                    subjectDetails[j].credits + ".00",
                    subjectDetails[j].grade,
                    subjectDetails[j].gradePoints * subjectDetails[j].credits,
                ]);
            }
            var cellStyles = {
                fontSize: 11,
                font: 'times',
                fillColor: false,
                textColor: 0,
                halign: 'left',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
                fontStyle: "bold"
            };
            var headCellStyles = {
                fontSize: 12,
                fillColor: false,
                textColor: [231, 120, 23],
                font: 'Arial',
                halign: 'center',
                valign: 'middle',
                lineWidth: 0.4,
                lineColor: 0,
                minCellHeight: 0,
                cellPadding: 1.3,
            };
            doc.autoTable(column, row, {
                startY: 83,
                headStyles: headCellStyles,
                bodyStyles: cellStyles, styles: cellStyles,
                tableLineColor: [12, 32, 226],
                tableLineWidth: 0.5,
                alternateRowStyles: cellStyles,
                didParseCell: data => {
                    if (data.section !== "body") {
                        data.cell.styles.font = "helvetica";
                        data.cell.styles.fontStyle = "bold";
                    }
                },
                tableWidth: 245,
                margin: { left: 26 },
                columnStyles: {
                    cc: { columnWidth: 40, halign: 'center', },
                    sl: { columnWidth: 25, halign: 'center', },
                    cd: { columnWidth: 25, halign: 'center', },
                    gp: { columnWidth: 25, halign: 'center', },
                    g: { columnWidth: 25, halign: 'center', },
                }
            });
            var barcode = document.createElement("canvas");
            barcode.setAttribute("id", "barcode");
            barcode.setAttribute("hidden", "true");
            document.body.appendChild(barcode);
            var barcodeImage = new jsbarcode__WEBPACK_IMPORTED_MODULE_6__('#barcode', student.barcode);
            var canvas = document.getElementsByTagName('canvas');
            var context = canvas[0].getContext('2d');
            var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas[0].width, canvas[0].height);
            var tempCanvas = document.createElement("canvas"), tCtx = tempCanvas.getContext("2d");
            tempCanvas.width = 200;
            tempCanvas.height = 50;
            tCtx.drawImage(canvas[0], 0, 0);
            var jpegUrl = tempCanvas.toDataURL("image/png");
            doc.addImage(jpegUrl, 'png', 21, 171);
            document.body.removeChild(document.getElementById('barcode'));
        });
        doc.save(programName + ' - ' + students[0].levelName + '.pdf');
    }
    downloadTranscript(data, issueDate, yearOfCompletion) {
        var doc = new jsPDF('p', 'mm', 'a4');
        doc.setTextColor(25, 77, 108);
        if (data.degreeId == 2) {
            var title = "Consolidated Grade Card for Master of Business Administration";
            var affiliated = "(Autonomous Institute Affiliated to Visvesvaraya Technological University, Belagavi)";
        }
        else if (data.degreeId == 3) {
            var title = "Consolidated Grade Card for Master of Technology";
            var affiliated = "(Autonomous Institute Affiliated to Visvesvaraya Technological University, Belagavi)";
        }
        else if (data.degreeId == 4) {
            var title = "Consolidated Grade Card for Master of Computer Applications";
            var affiliated = "(Autonomous Institute Affiliated to Visvesvaraya Technological University, Belagavi)";
        }
        else {
            var title = "Consolidated Grade Card for Bachelor Of Engineering";
            var affiliated = "(Autonomous College Under Visvesvaraya Technological University, Belgaum)";
        }
        this.jsPDFFontService.AddFontCambria(doc);
        doc.setFont('Lucida');
        console.log(doc.getFontList());
        this.putText(30, 9, "B.M.S. COLLEGE OF ENGINEERING,", { align: 'left', size: 15, style: 'bold' }, doc);
        this.putText(39, 9, "BENGALURU - 560 019", { align: 'center', size: 11, style: 'bold' }, doc);
        doc.setTextColor(25, 77, 108);
        this.putText(0, 14, affiliated, { align: 'center', size: 8, style: 'bold' }, doc);
        this.putText(0, 19, "Karnataka State, India.", { align: 'center', size: 9, style: 'bold' }, doc);
        doc.setTextColor(219, 124, 59);
        doc.addImage(this.logo, 'png', 9, 3, 18, 18);
        doc.addImage(this.vtu_logo, 'jpg', 178, 3, 18, 18);
        doc.setFont('Helvetica');
        this.putText(0, 25, title, { align: 'center', size: 12, style: 'bold' }, doc);
        doc.setLineWidth(0.55);
        var exp = new RegExp(/^(be)\s*(in)\s*/, "gi");
        if (data.semesterDetails.length > 4 || data.degreeId == 1) {
            this.putText(25, (data.degreeId == 2 || data.degreeId == 4 ? 64 : 71), "Course title", { align: 'left', size: 15, style: 'normal' }, doc);
            doc.setLineWidth(0.55);
            doc.rect(10, 28, 192, (data.degreeId == 2 || data.degreeId == 4 ? 23.6 : 30.6));
            doc.rect(10, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 92, 20);
            if (data.semesterDetails.length > 4) {
                doc.setTextColor(219, 124, 59);
                this.putText(125, (data.degreeId == 2 || data.degreeId == 4 ? 64 : 71), "Course Title", { align: 'left', size: 15, style: 'normal' }, doc);
                doc.rect(110, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 92, 20);
                doc.setDrawColor(0, 0, 0);
                doc.setLineWidth(0.45);
                doc.line(197, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 197, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
                doc.line(192, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 192, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
                doc.line(187, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 187, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(6);
                doc.setFontStyle('bold');
                doc.text("No. Of Credits", 190, (data.degreeId == 2 || data.degreeId == 4 ? 70 : 77), null, 90);
                doc.text("Grade Obtained", 195, (data.degreeId == 2 || data.degreeId == 4 ? 71 : 78), null, 90);
                doc.text("Result", 200, (data.degreeId == 2 || data.degreeId == 4 ? 67 : 74), null, 90);
            }
            doc.setTextColor(25, 77, 108);
            this.putText(15, 33, "Name", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 37, "University Seat Number", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 41, "Year of Entry", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 45, "Year of Completion", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 49, "Degree to be Awarded", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            doc.setDrawColor(0, 0, 0);
            doc.setLineWidth(0.45);
            doc.line(97, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 97, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
            doc.line(92, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 92, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
            doc.line(87, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 87, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(6);
            doc.setFontStyle('bold');
            doc.text("No. Of Credits", 90, (data.degreeId == 2 || data.degreeId == 4 ? 70 : 77), null, 90);
            doc.text("Grade Obtained", 95, (data.degreeId == 2 || data.degreeId == 4 ? 71 : 78), null, 90);
            doc.text("Result", 100, (data.degreeId == 2 || data.degreeId == 4 ? 67 : 74), null, 90);
            doc.setTextColor(141, 78, 119);
            this.putText(57, 33, ":  " + data.name, { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 37, ":  " + data.usn, { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 41, ":  " + (data.semesterDetails.length == 0 || data.semesterDetails.length != 0 && String(data.semesterDetails[0].seasonStartDate).trim() == "" ? '' : moment__WEBPACK_IMPORTED_MODULE_7__(data.semesterDetails[0].seasonStartDate).year()), { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 45, ":  " + (yearOfCompletion == null || yearOfCompletion == "null" ? '' : yearOfCompletion), { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 49, ":  " + data.degreeName, { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            if (data.degreeId == 1 || data.degreeId == 3) {
                doc.setTextColor(25, 77, 108);
                doc.line(12, 51.5, 97, 51.5);
                this.putText(15, 56, "Branch", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
                var branchName = (data.degreeId == 1 ? (String(data.programName).split(exp)[String(data.programName).split(exp).length - 1]) : ((String(data.programName).split('-')).length > 1 ? String(data.programName).split('-')[1].trim() : data.programName));
                this.putText(57, 56, ":  " + branchName, { align: 'left', width: '595', style: 'bold', size: 9 }, doc);
            }
            doc.setTextColor(0, 0, 0);
            this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 44 : 51), "1. Duration of Course  :   " + data.courseDuration, { align: 'left', width: '595', style: 'bold', size: 9 }, doc);
            this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 49 : 56), "2. Medium of Instruction  :   English", { align: 'left', width: '595', style: 'bold', size: 9 }, doc);
            var colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81), xPos = 0, finalBottom = 220;
            data.semesterDetails.forEach((sem, semIdx) => {
                /**
                 * Season Header
                 */
                doc.line(xPos + 10, colStart, xPos + 102, colStart);
                doc.line(xPos + 10, colStart, xPos + 10, colStart + 4.6);
                doc.line(xPos + 102, colStart, xPos + 102, colStart + 4.6);
                doc.line(xPos + 10, colStart + 4.6, xPos + 102, colStart + 4.6);
                doc.setTextColor(0, 0, 0);
                this.putText(xPos + 13, colStart + 3, "Semester : " + sem.sessionSemester, { align: 'left', width: '595', style: 'bold', size: 7 }, doc);
                doc.setTextColor(141, 78, 119);
                this.putText(xPos + 10, colStart + 3, "Academic Year : " + sem.academicYear, { align: 'right', width: '90', style: 'bold', size: 7 }, doc);
                doc.setTextColor(0, 0, 0);
                var slno = 1;
                var allPass = true;
                data.subjectDetails.forEach((sub, index) => {
                    if (sem.seasonId == sub.subjectSeasonId) {
                        var res = "P";
                        if (sub.attempts != 1) {
                            res = "P#" + sub.attempts;
                        }
                        if (!sub.isPassGrade) {
                            res = "F";
                            allPass = false;
                        }
                        this.putText(xPos + 12.2, colStart + 7.8 + 4.6 * (slno - 1), slno + "", { align: 'left', width: '90', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 17, colStart + 7.8 + 4.6 * (slno - 1), sub.subjectName, { align: 'left', width: '90', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 86, colStart + 7.7 + 4.6 * (slno - 1), sub.gradePoints.toString(), { align: 'center', width: '5.5', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 91, colStart + 7.8 + 4.6 * (slno - 1), sub.grade, { align: 'center', width: '5.5', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 96, colStart + 7.8 + 4.6 * (slno - 1), res, { align: 'center', width: '5.5', style: 'normal', size: 6.5 }, doc);
                        doc.setLineWidth(0.15);
                        doc.line(xPos + 10, colStart + 9.2 + 4.6 * (slno - 1), xPos + 102, colStart + 9.2 + 4.6 * (slno - 1));
                        slno++;
                    }
                });
                doc.setLineWidth(0.45);
                doc.line(xPos + 16, colStart + 4.6, xPos + 16, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 96, colStart + 4.6, xPos + 96, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 91, colStart + 4.6, xPos + 91, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 86, colStart + 4.6, xPos + 86, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 10, colStart, xPos + 10, colStart + 8.5 + 4.6 * (slno - 1));
                doc.line(xPos + 102, colStart, xPos + 102, colStart + 8.5 + 4.6 * (slno - 1));
                doc.line(xPos + 10, colStart + 8.5 + 4.6 * (slno - 1), xPos + 102, colStart + 8.5 + 4.6 * (slno - 1));
                this.putText(xPos + 13, colStart + 7.5 + 4.6 * (slno - 1), "SGPA : " + String(Number(sem.sgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size: 7 }, doc);
                this.putText(xPos + 43, colStart + 7.5 + 4.6 * (slno - 1), "CGPA : " + String(Number(sem.cgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size: 7 }, doc);
                this.putText(xPos + 5, colStart + 7.5 + 4.6 * (slno - 1), allPass ? "PASS" : "FAIL", { align: 'right', width: '90', style: 'bold', size: 7 }, doc);
                colStart = colStart + 9.5 + 4.6 * (slno - 1);
                if (semIdx == 3) {
                    finalBottom = colStart;
                    colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81);
                    xPos = 100;
                }
            });
            this.putText(10, finalBottom + 3, "# Cleared in Subsequent Exams", { align: 'left', width: '595', style: 'normal', size: 7 }, doc);
            this.putText(10, finalBottom + 6.5, "P- Passed in Credit Mandatory Course", { align: 'left', width: '595', style: 'normal', size: 7 }, doc);
            this.putText(10, finalBottom + 10, "PP- Passed in Non Credit Mandatory Course", { align: 'left', width: '595', style: 'normal', size: 7 }, doc);
            doc.setTextColor(25, 77, 108);
            this.putText(10, finalBottom + 35, "Issue Date: ", { align: 'left', width: '595', style: 'normal', size: 9 }, doc);
            doc.setTextColor(0, 0, 0);
            this.putText(28, finalBottom + 35, moment__WEBPACK_IMPORTED_MODULE_7__(issueDate).format('DD-MMM-YYYY'), { align: 'left', width: '595', style: 'normal', size: 8.5 }, doc);
            doc.setTextColor(25, 77, 108);
            this.putText(60, finalBottom + 35, "Checked By", { align: 'left', width: '595', style: 'normal', size: 9 }, doc);
            this.putText(-30, finalBottom + 35, "Controller of Examinations", { align: 'right', width: '200', style: 'normal', size: 9 }, doc);
            this.putText(0, finalBottom + 15, "Authentic", { align: 'right', width: '200', style: 'normal', size: 9 }, doc);
            this.putText(0, finalBottom + 35, "Principal", { align: 'right', width: '200', style: 'normal', size: 9 }, doc);
            doc.addImage(this.principal_signature, 'jpg', 180, finalBottom + 18, 23, 11);
            /**
             * Add barcode
             */
            var barcode = document.createElement("canvas");
            barcode.setAttribute("id", "barcode");
            barcode.setAttribute("hidden", "true");
            document.body.appendChild(barcode);
            var barcodeImage = new jsbarcode__WEBPACK_IMPORTED_MODULE_6__('#barcode', data.usn);
            var canvas = document.getElementsByTagName('canvas');
            var context = canvas[0].getContext('2d');
            var barDat = context.getImageData(0, 0, canvas[0].width, canvas[0].height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas[0].width, canvas[0].height);
            var tempCanvas = document.createElement("canvas"), tCtx = tempCanvas.getContext("2d");
            tempCanvas.height = 50;
            tCtx.drawImage(canvas[0], 0, 0);
            var jpegUrl = tempCanvas.toDataURL("image/png");
            doc.addImage(jpegUrl, 'png', 8, finalBottom + 15);
            document.body.removeChild(document.getElementById('barcode'));
            doc.save("Transcript" + ' - ' + data.usn + '.pdf');
        }
        if (data.semesterDetails.length <= 4 && (data.degreeId == 2 || data.degreeId == 3 || data.degreeId == 4)) {
            this.putText(75, (data.degreeId == 2 || data.degreeId == 4 ? 64 : 71), "Course Title", { align: 'left', size: 15, style: 'normal' }, doc);
            doc.rect(60, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 92, 20);
            doc.setTextColor(25, 77, 108);
            this.putText(15, 33, "Name", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 37, "University Seat Number", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 41, "Year of Entry", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 45, "Year of Completion", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            this.putText(15, 49, "Degree to be Awarded", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
            doc.setDrawColor(0, 0, 0);
            doc.setLineWidth(0.45);
            doc.rect(10, 28, 192, (data.degreeId == 2 || data.degreeId == 4 ? 23.6 : 30.6));
            doc.line(145, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 145, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
            doc.line(140, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 140, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
            doc.line(135, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 135, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(6);
            doc.setFontStyle('bold');
            doc.text("Grade Obtained", 143, (data.degreeId == 2 || data.degreeId == 4 ? 70 : 77), null, 90);
            doc.text("No. Of Credits", 138, (data.degreeId == 2 || data.degreeId == 4 ? 71 : 78), null, 90);
            doc.text("Result", 148, (data.degreeId == 2 || data.degreeId == 4 ? 67 : 74), null, 90);
            doc.setTextColor(141, 78, 119);
            this.putText(57, 33, ":  " + data.name, { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 37, ":  " + data.usn, { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 41, ":  " + (data.semesterDetails.length == 0 || data.semesterDetails.length != 0 && String(data.semesterDetails[0].seasonStartDate).trim() == "" ? '' : moment__WEBPACK_IMPORTED_MODULE_7__(data.semesterDetails[0].seasonStartDate).year()), { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 45, ":  " + (yearOfCompletion == null || yearOfCompletion == "null" ? '' : yearOfCompletion), { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            this.putText(57, 49, ":  " + data.degreeName, { align: 'left', width: '595', style: 'normal', size: 8 }, doc);
            if (data.degreeId == 1 || data.degreeId == 3) {
                doc.setTextColor(25, 77, 108);
                doc.line(12, 51.5, 97, 51.5);
                this.putText(15, 56, "Branch", { align: 'left', width: '595', style: 'bold', size: 8 }, doc);
                var branchName = (data.degreeId == 1 ? (String(data.programName).split(exp)[String(data.programName).split(exp).length - 1]) : ((String(data.programName).split('-')).length > 1 ? String(data.programName).split('-')[1].trim() : data.programName));
                this.putText(57, 56, ":  " + branchName, { align: 'left', width: '595', style: 'bold', size: 9 }, doc);
            }
            doc.setTextColor(0, 0, 0);
            this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 44 : 51), "1. Duration of Course  :   " + data.courseDuration, { align: 'left', width: '595', style: 'bold', size: 9 }, doc);
            this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 49 : 56), "2. Medium of Instruction  :   English", { align: 'left', width: '595', style: 'bold', size: 9 }, doc);
            var colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81), xPos = 50, finalBottom = 220;
            data.semesterDetails.forEach((sem, semIdx) => {
                /**
                 * Season Header
                 */
                doc.line(xPos + 10, colStart, xPos + 102, colStart);
                doc.line(xPos + 10, colStart, xPos + 10, colStart + 4.6);
                doc.line(xPos + 102, colStart, xPos + 102, colStart + 4.6);
                doc.line(xPos + 10, colStart + 4.6, xPos + 102, colStart + 4.6);
                doc.setTextColor(0, 0, 0);
                this.putText(xPos + 13, colStart + 3, "Semester : " + sem.sessionSemester, { align: 'left', width: '595', style: 'bold', size: 7 }, doc);
                doc.setTextColor(141, 78, 119);
                this.putText(xPos + 10, colStart + 3, "Academic Year : " + sem.academicYear, { align: 'right', width: '90', style: 'bold', size: 7 }, doc);
                doc.setTextColor(0, 0, 0);
                var slno = 1;
                var allPass = true;
                data.subjectDetails.forEach((sub, index) => {
                    console.log(data.subjectDetails);
                    if (sem.seasonId == sub.subjectSeasonId) {
                        var res = "P";
                        if (sub.attempts != 1) {
                            res = "P#" + sub.attempts;
                        }
                        if (!sub.isPassGrade) {
                            res = "F";
                            allPass = false;
                        }
                        this.putText(xPos + 12.2, colStart + 7.8 + 4.6 * (slno - 1), slno + "", { align: 'left', width: '90', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 17, colStart + 7.8 + 4.6 * (slno - 1), sub.subjectName, { align: 'left', width: '90', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 86, colStart + 7.7 + 4.6 * (slno - 1), sub.credits.toString(), { align: 'center', width: '5.5', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 91, colStart + 7.8 + 4.6 * (slno - 1), sub.grade, { align: 'center', width: '5.5', style: 'normal', size: 6.5 }, doc);
                        this.putText(xPos + 96, colStart + 7.8 + 4.6 * (slno - 1), res, { align: 'center', width: '5.5', style: 'normal', size: 6.5 }, doc);
                        doc.setLineWidth(0.15);
                        doc.line(xPos + 10, colStart + 9.2 + 4.6 * (slno - 1), xPos + 102, colStart + 9.2 + 4.6 * (slno - 1));
                        slno++;
                    }
                });
                doc.setLineWidth(0.45);
                doc.line(xPos + 16, colStart + 4.6, xPos + 16, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 96, colStart + 4.6, xPos + 96, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 91, colStart + 4.6, xPos + 91, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 86, colStart + 4.6, xPos + 86, colStart + 9.2 + 4.6 * (slno - 2));
                doc.line(xPos + 10, colStart, xPos + 10, colStart + 8.5 + 4.6 * (slno - 1));
                doc.line(xPos + 102, colStart, xPos + 102, colStart + 8.5 + 4.6 * (slno - 1));
                doc.line(xPos + 10, colStart + 8.5 + 4.6 * (slno - 1), xPos + 102, colStart + 8.5 + 4.6 * (slno - 1));
                this.putText(xPos + 13, colStart + 7.5 + 4.6 * (slno - 1), "SGPA : " + String(Number(sem.sgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size: 7 }, doc);
                this.putText(xPos + 43, colStart + 7.5 + 4.6 * (slno - 1), "CGPA : " + String(Number(sem.cgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size: 7 }, doc);
                this.putText(xPos + 5, colStart + 7.5 + 4.6 * (slno - 1), allPass ? "PASS" : "FAIL", { align: 'right', width: '90', style: 'bold', size: 7 }, doc);
                colStart = colStart + 9.5 + 4.6 * (slno - 1);
                if (semIdx == 3) {
                    finalBottom = colStart;
                    colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81);
                    xPos = 100;
                }
            });
            this.putText(10, finalBottom + 3, "# Cleared in Subsequent Exams", { align: 'left', width: '595', style: 'normal', size: 7 }, doc);
            this.putText(10, finalBottom + 6.5, "P- Passed in Credit Mandatory Course", { align: 'left', width: '595', style: 'normal', size: 7 }, doc);
            this.putText(10, finalBottom + 10, "PP- Passed in Non Credit Mandatory Course", { align: 'left', width: '595', style: 'normal', size: 7 }, doc);
            doc.setTextColor(25, 77, 108);
            this.putText(10, finalBottom + 35, "Issue Date: ", { align: 'left', width: '595', style: 'normal', size: 9 }, doc);
            doc.setTextColor(0, 0, 0);
            this.putText(28, finalBottom + 35, moment__WEBPACK_IMPORTED_MODULE_7__(issueDate).format('DD-MMM-YYYY'), { align: 'left', width: '595', style: 'normal', size: 8.5 }, doc);
            doc.setTextColor(25, 77, 108);
            this.putText(60, finalBottom + 35, "Checked By", { align: 'left', width: '595', style: 'normal', size: 9 }, doc);
            this.putText(-30, finalBottom + 35, "Controller of Examinations", { align: 'right', width: '200', style: 'normal', size: 9 }, doc);
            this.putText(0, finalBottom + 15, "Authentic", { align: 'right', width: '200', style: 'normal', size: 9 }, doc);
            this.putText(0, finalBottom + 35, "Principal", { align: 'right', width: '200', style: 'normal', size: 9 }, doc);
            doc.addImage(this.principal_signature, 'jpg', 180, finalBottom + 18, 23, 11);
            /**
             * Add barcode
             */
            var barcode = document.createElement("canvas");
            barcode.setAttribute("id", "barcode");
            barcode.setAttribute("hidden", "true");
            document.body.appendChild(barcode);
            var barcodeImage = new jsbarcode__WEBPACK_IMPORTED_MODULE_6__('#barcode', data.usn);
            var canvas = document.getElementsByTagName('canvas');
            var context = canvas[0].getContext('2d');
            var barDat = context.getImageData(0, 0, canvas[0].width, canvas[0].height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas[0].width, canvas[0].height);
            var tempCanvas = document.createElement("canvas"), tCtx = tempCanvas.getContext("2d");
            tempCanvas.height = 50;
            tCtx.drawImage(canvas[0], 0, 0);
            var jpegUrl = tempCanvas.toDataURL("image/png");
            doc.addImage(jpegUrl, 'png', 8, finalBottom + 15);
            document.body.removeChild(document.getElementById('barcode'));
            doc.save("Transcript" + ' - ' + data.usn + '.pdf');
        }
    }
    getPdc(Data) {
        let doc = new jsPDF({ orientation: 'portrait', unit: 'pt', lineHeight: 1.5 });
        var template = new Image();
        template.src = 'assets/images/pdcbg.png';
        doc.deletePage(1);
        Data.forEach(element => {
            doc.addPage();
            doc.addImage(template, 'png', 0, 0, 600, 860); // base64 imge as background
            doc.setLineWidth(0.5);
            doc.setFontType("normal");
            doc.setFontSize(18);
            doc.addFileToVFS('src/assets/fonts/IMPRISHA.ttf', src_assets_fonts_Roboto_robotoBoldItallic_js__WEBPACK_IMPORTED_MODULE_8__.Roboto);
            doc.addFont('src/assets/fonts/IMPRISHA.ttf', 'Roboto', 'normal');
            doc.setFont('Roboto'); //
            doc.setTextColor(6, 6, 255);
            this.getAlignmentValueAny(5, 400, element.studentName, { align: "center", width: "595" }, doc);
            doc.setFontSize(16);
            this.getAlignmentValueAny(5, 490, element.programName, { align: "center", width: "595" }, doc);
            doc.setFontSize(18);
            this.getAlignmentValueAny(5, 510, element.departmentName, { align: "center", width: "595" }, doc);
            doc.setFontSize(12);
            doc.setTextColor(255, 0, 6);
            doc.setFontType("bold");
            doc.setFont('Times');
            this.getAlignmentValueAny(202, 194, element.pdcNo, { align: "center", width: "595" }, doc);
            doc.setFontSize(13);
            doc.setTextColor(0, 0, 0);
            doc.setFontType("bold");
            doc.setFont('Times');
            this.getAlignmentValueAny(62, 430, element.usn, { align: "center", width: "595" }, doc);
            doc.setFontSize(15);
            doc.setTextColor(0, 0, 0);
            doc.setFontType("bold");
            doc.setFont('Times');
            this.getAlignmentValueAny(-5, 544, String(Number(element.cgpa).toFixed(2)), { align: "center", width: "595" }, doc);
            doc.setFontSize(12);
            doc.setTextColor(6, 6, 255);
            doc.setFontType("bold");
            doc.setFont('Times');
            this.getAlignmentValueAny(18, 762, moment__WEBPACK_IMPORTED_MODULE_7__(element.date).format("DD.MM.YYYY"), { align: "center", width: "595" }, doc);
            var studentImage = new Image();
            var image_name = element.usn + '.jpg';
            var path = 'assets/images/portraits/' + image_name;
            try {
                studentImage.src = path;
                doc.addImage(studentImage, 'png', 250, 220, 85, 105);
            }
            catch (error) {
                console.log("Image not found" + element.usn);
            }
            var barcode = document.createElement("canvas");
            barcode.setAttribute("id", "barcode");
            barcode.setAttribute("hidden", "true");
            document.body.appendChild(barcode);
            var barcodeImage = new jsbarcode__WEBPACK_IMPORTED_MODULE_6__('#barcode', element.usn);
            var canvas = document.getElementsByTagName('canvas');
            var context = canvas[0].getContext('2d');
            var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas[0].width, canvas[0].height);
            var tempCanvas = document.createElement("canvas"), tCtx = tempCanvas.getContext("2d");
            tempCanvas.width = 180;
            tempCanvas.height = 45;
            tCtx.drawImage(canvas[0], 0, 0);
            var jpegUrl = tempCanvas.toDataURL("image/png");
            doc.addImage(jpegUrl, 'png', 365, 710);
            document.body.removeChild(document.getElementById('barcode'));
        });
        doc.save('file');
    }
}
ExcelDownloadService.ɵfac = function ExcelDownloadService_Factory(t) { return new (t || ExcelDownloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_jsPdfFontService__WEBPACK_IMPORTED_MODULE_9__.JsPDFFontService)); };
ExcelDownloadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: ExcelDownloadService, factory: ExcelDownloadService.ɵfac });


/***/ }),

/***/ 85761:
/*!************************************************!*\
  !*** ./src/app/services/excelParserService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelParserService": () => (/* binding */ ExcelParserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ 98810);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ExcelParserService {
    parseMarks(ev, sheetName) {
        var marksMap = "{";
        var jsonMap;
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.readAsBinaryString(file);
        // var obs = new Observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            reader.onload = (event) => {
                const data = reader.result;
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_0__.read(data, { type: 'binary', raw: true });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(sheet, {
                        header: 1,
                        range: { s: { c: 0, r: 5 }, e: { c: 3, r: 2000 } },
                        blankrows: false
                    });
                    return initial;
                }, {});
                console.log(jsonData);
                /**
                 * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
                 * so creating a string then parsing to object.
                 */
                jsonData[sheetName].forEach((element, index) => {
                    marksMap = marksMap + '"' + element[0].toUpperCase() + '":"' + element[2] + '"';
                    if (index != jsonData[sheetName].length - 1) {
                        marksMap = marksMap + ",";
                    }
                });
                marksMap = marksMap + "}";
                /**
                 * jsonMap contains the parsed json object
                 */
                console.log(marksMap);
                jsonMap = JSON.parse(marksMap);
                observer.next(jsonMap);
                observer.complete();
            };
        });
    }
    /**
     * Parses the downloaded excel book for bulk update
     * @param ev Excel file
     * @param sheetName name of the shhet to parse
     */
    parseBulkMarks(ev, sheetName) {
        var marksMap = "{";
        var jsonMap;
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.readAsBinaryString(file);
        // var obs = new Observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            reader.onload = (event) => {
                const data = reader.result;
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_0__.read(data, { type: 'binary', raw: true });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(sheet, {
                        header: 1,
                        range: { s: { c: 0, r: 5 }, e: { c: 10, r: 1000 } },
                        blankrows: false
                    });
                    return initial;
                }, {});
                console.log(jsonData);
                /**
                 * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
                 * so creating a string then parsing to object.
                 */
                jsonData[sheetName].forEach((element, index) => {
                    marksMap = marksMap + '"' + element[0].toUpperCase() + '":{';
                    for (var i = 2; i < element.length; i++) {
                        marksMap += '"c_' + (i - 1) + '":"' + element[i] + '"';
                        i != element.length - 1 ? marksMap += "," : marksMap += "}";
                    }
                    if (index != jsonData[sheetName].length - 1) {
                        marksMap = marksMap + ",";
                    }
                });
                marksMap = marksMap + "}";
                /**
                 * jsonMap contains the parsed json object
                 */
                console.log(marksMap);
                jsonMap = JSON.parse(marksMap);
                observer.next(jsonMap);
                observer.complete();
            };
        });
    }
    /**
     * Parses the downloaded excel book for bulk update
     * @param ev Excel file
     * @param sheetName name of the shhet to parse
     */
    parseBulkPDC(ev, sheetName) {
        var marksMap = "{";
        var jsonMap;
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.readAsBinaryString(file);
        // var obs = new Observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            reader.onload = (event) => {
                const data = reader.result;
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_0__.read(data, { type: 'binary', raw: true });
                console.log(workBook.SheetNames);
                var sheet = workBook.Sheets[workBook.SheetNames[0]];
                var range = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.decode_range(sheet['!ref']);
                var C, R = range.s.r;
                console.log(C, R);
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(sheet, {
                        header: 1,
                        range: { s: { c: 0, r: 1 }, e: { c: 6, r: 2000 } },
                        blankrows: false
                    });
                    return initial;
                }, {});
                console.log(jsonData);
                observer.next(jsonData);
                observer.complete();
            };
        });
    }
    /**
     * Parses the downloaded excel book for attendance update
     * @param ev excelfile
     * @param sheetName Name of the sheet to parse
     */
    parseAttendance(ev, sheetName) {
        var marksMap = "{";
        var jsonMap;
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.readAsBinaryString(file);
        // var obs = new Observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            reader.onload = (event) => {
                const data = reader.result;
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_0__.read(data, { type: 'binary', raw: true });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(sheet, {
                        header: 1,
                        range: { s: { c: 0, r: 5 }, e: { c: 4, r: 600 } },
                        blankrows: false
                    });
                    return initial;
                }, {});
                console.log(jsonData);
                /**
                 * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
                 * so creating a string then parsing to object.
                 */
                jsonData[sheetName].forEach((element, index) => {
                    marksMap = marksMap + '"' + element[0].toUpperCase() + '":{"total":"' + element[2] + '","attended":"' + element[3] + '"}';
                    if (index != jsonData[sheetName].length - 1) {
                        marksMap = marksMap + ",";
                    }
                });
                marksMap = marksMap + "}";
                /**
                 * jsonMap contains the parsed json object
                 */
                console.log(marksMap);
                jsonMap = JSON.parse(marksMap);
                observer.next(jsonMap);
                observer.complete();
            };
        });
    }
    /**
     * Parses the downloaded excel book for attendance update
     * @param ev excelfile
     * @param sheetName Name of the sheet to parse
     */
    parseUSN(ev, sheetName) {
        var usnMap = "{";
        var jsonMap;
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.readAsBinaryString(file);
        // var obs = new Observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            reader.onload = (event) => {
                const data = reader.result;
                workBook = xlsx__WEBPACK_IMPORTED_MODULE_0__.read(data, { type: 'binary', raw: true });
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.sheet_to_json(sheet, {
                        header: 1,
                        range: { s: { c: 0, r: 5 }, e: { c: 4, r: 600 } },
                        blankrows: false
                    });
                    return initial;
                }, {});
                console.log(jsonData);
                /**
                 * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
                 * so creating a string then parsing to object.
                 */
                jsonData[sheetName].forEach((element, index) => {
                    usnMap = usnMap + '"' + element[0].toUpperCase() + '":true';
                    if (index != jsonData[sheetName].length - 1) {
                        usnMap = usnMap + ",";
                    }
                });
                usnMap = usnMap + "}";
                /**
                 * jsonMap contains the parsed json object
                 */
                console.log(usnMap);
                jsonMap = JSON.parse(usnMap);
                observer.next(jsonMap);
                observer.complete();
            };
        });
    }
}
ExcelParserService.ɵfac = function ExcelParserService_Factory(t) { return new (t || ExcelParserService)(); };
ExcelParserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExcelParserService, factory: ExcelParserService.ɵfac });


/***/ }),

/***/ 54566:
/*!**********************************************!*\
  !*** ./src/app/services/jsPdfFontService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsPDFFontService": () => (/* binding */ JsPDFFontService)
/* harmony export */ });
/* harmony import */ var src_assets_fonts_Cambria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/fonts/Cambria */ 57998);
/* harmony import */ var src_assets_fonts_Cambria_bold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/fonts/Cambria-bold */ 65607);
/* harmony import */ var src_assets_fonts_Lucida_bold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/fonts/Lucida-bold */ 85302);
/* harmony import */ var src_assets_fonts_Lucida_normal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/fonts/Lucida-normal */ 70014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class JsPDFFontService {
    AddFontCambria(doc) {
        doc.addFileToVFS('Cambria-normal.ttf', src_assets_fonts_Cambria__WEBPACK_IMPORTED_MODULE_0__.cambiraNormal);
        doc.addFont('Cambria-normal.ttf', 'Cambria', 'normal');
        doc.addFileToVFS('Cambria-bold.ttf', src_assets_fonts_Cambria_bold__WEBPACK_IMPORTED_MODULE_1__.cambriaBold);
        doc.addFont('Cambria-bold.ttf', 'Cambria', 'bold');
        doc.addFileToVFS('Lucida-bold.ttf', src_assets_fonts_Lucida_bold__WEBPACK_IMPORTED_MODULE_2__.lucidaBold);
        doc.addFont('Lucida-bold.ttf', 'Lucida', 'bold');
        doc.addFileToVFS('Lucida-normal.ttf', src_assets_fonts_Lucida_normal__WEBPACK_IMPORTED_MODULE_3__.lucidaNormal);
        doc.addFont('Lucida-normal.ttf', 'Lucida', 'normal');
        doc.setFont('Lucida');
    }
}
JsPDFFontService.ɵfac = function JsPDFFontService_Factory(t) { return new (t || JsPDFFontService)(); };
JsPDFFontService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: JsPDFFontService, factory: JsPDFFontService.ɵfac });


/***/ }),

/***/ 45790:
/*!*****************************************!*\
  !*** ./src/app/services/menuService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_framework_modules_formdata_form_clientContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/framework-modules/formdata/form/clientContext */ 53594);


const pScreensMap = {
    G01: ["D01", "D02", "D03"],
    G02: ["D04"],
    G03: ["D05", "D06", "D07", "D08", "D09", "D10", "D11", "D12", "D13", "D14", "D130", "D131", "D137", "D139", "D140"],
    G04: ["D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24", "D25", "D26", "D27", "D56", "D66", "D67", "D68", "D83", "D84", "D88", "D113", "D153", "D154"],
    G05: ["D28", "D29", "D30", "D31", "D80", "D81", "D82"],
    G06: ["D32", "D33", "D34", "D35", "D87", "D89", "D138"],
    G07: ["D15", "D36", "D37", "D38", "D39", "D40", "D41", "D42", "D43", "D44", "D143", "D144", "D145", "D146", "D147", "D148"],
    G08: ["D45", "D46", "D47", "D48", "D49", "D50", "D51", "D52", "D57", "D58", "D59", "D60", "D61", "D62", "D63", "D64", "D65", "D69", "D70", "D71", "D72", "D73", "D74", "D75", "D76", "D77", "D78", "D79", "D80", "D101", "D102", "D103", "D104", "D105", "D106", "D107", "D108", "D109", "D110", "D111", "D85", "D86", "D112", "D133", "D134", "D141", "D142", "D150", "D151", "D152", "D155", "D156", "D157", "D158", "D159", "D160", "D161", "D162", "D163", "D164"],
    G09: ["D54"],
    G10: ["D55"],
    G11: ["D120", "D121", "D122", "D123", "D149"],
    G12: ["D132"],
    G13: ["D135", "D136"],
    G14: ["D165", "D166", "D167", "D168", "D169", "D170", "D171", "D172", "D173", "D174", "D175", "D176"],
};
class MenuService {
    constructor(cc) {
        this.cc = cc;
        this.pScreens = [];
    }
    getPermittedScreens() {
        let permittedScreens = this.cc.getPermittedScreens();
        this.pScreens = [];
        this.modules = [];
        for (let i = 0; i < permittedScreens.length; i++) {
            Object.keys(pScreensMap).forEach(key => {
                pScreensMap[key].forEach(element => {
                    if (element == permittedScreens[i]) {
                        this.pScreens.push(element);
                        if (!this.pScreens.includes(key)) {
                            this.pScreens.push(key);
                            this.modules.push(key);
                        }
                    }
                });
            });
        }
        return this.pScreens;
    }
    getPermittedModules() {
        return this.modules;
    }
    getScreens() {
        return this.pScreens;
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_framework_modules_formdata_form_clientContext__WEBPACK_IMPORTED_MODULE_0__.ClientContext)); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });


/***/ }),

/***/ 59496:
/*!********************************************!*\
  !*** ./src/app/services/messageService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class MessageService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showSuccess(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['snackbar-success'];
        config.duration = 3000;
        this.snackBar.open(message, null, config);
    }
    showError(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['snackbar-error'];
        config.duration = 3000;
        this.snackBar.open(message, null, config);
    }
    showInfo(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['snackbar-info'];
        config.duration = 3000;
        this.snackBar.open(message, null, config);
    }
    showDetail(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.horizontalPosition = 'end';
        config.verticalPosition = 'bottom';
        this.snackBar.open(message, null, config);
    }
    close() {
        this.snackBar.dismiss();
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });


/***/ }),

/***/ 63680:
/*!************************************************!*\
  !*** ./src/app/services/pdfDownloadService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfDownloadService": () => (/* binding */ PdfDownloadService)
/* harmony export */ });
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf-autotable */ 43015);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let jsPDF = __webpack_require__(/*! jspdf */ 66809);
__webpack_require__(/*! jspdf-autotable */ 43015);
__webpack_require__(/*! jquery */ 85139);
class PdfDownloadService {
    constructor() { }
    /**
    * Puts a line of text in a document
    * @param x X-coordinate in a page
    * @param y Y-coordinate in a page
    * @param text String to be printed
    * @param options Styling options
    * @param doc The document in which the texts must be printed
    */
    putText(x, y, text, options, doc) {
        var options = options || {};
        var defaults = {
            align: 'left',
            width: doc.internal.pageSize.width,
            size: 8,
            style: 'normal'
        };
        var settings = jquery__WEBPACK_IMPORTED_MODULE_1__.extend({}, defaults, options);
        var fontSize = settings.size;
        doc.setFontSize(fontSize);
        doc.setFontStyle(settings.style);
        var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
        if (settings.align === 'center') {
            x += (settings.width - text_size) / 2;
        }
        else if (settings.align === 'right')
            x += (settings.width - text_size);
        doc.text(text, x, y);
    }
    /**
     * Puts A line of text with multiple styles
     * @param x X-coordinate in a page
     * @param y Y-coordinate in a page
     * @param textArray Array of strings to be printed
     * @param options Styling option
     * @param doc The document in which the texts must be printed
     */
    putMulti(x, y, textArray, options, doc) {
        // putText(x,y,doc){
        var options = options || {};
        var defaults = {
            align: 'left',
            width: doc.internal.pageSize.width
        };
        var text = "";
        textArray.forEach(e => { text += e.text; });
        var settings = jquery__WEBPACK_IMPORTED_MODULE_1__.extend({}, defaults, options);
        var fontSize = doc.internal.getFontSize();
        var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
        if (settings.align === 'center')
            x += (settings.width - text_size) / 2;
        else if (settings.align === 'right')
            x += (settings.width - text_size);
        textArray.forEach(e => {
            doc.setFontSize(e.size);
            doc.setFontStyle(e.style);
            doc.text(e.text, x, y);
            x += doc.getStringUnitWidth(e.text) * e.size / doc.internal.scaleFactor;
        });
    }
    downloadValuationSheet(data, valuationType, fileName) {
        var logo = new Image();
        var valuationText = "", valuatorText = "";
        if (valuationType == 1) {
            valuationText = "MARKS (I VALUATION)";
            valuatorText = "1ST EVALUATOR";
        }
        else if (valuationType == 2) {
            valuationText = "REVIEW/MODERATION (II VALUATION)";
            valuatorText = "2ND EVALUATOR";
        }
        else {
            valuationText = "III VALUATION";
            valuatorText = "3RD EVALUATOR";
        }
        logo.src = 'assets/images/bms.png';
        let doc = new jsPDF('l', 'pt', 'a4');
        doc.addImage(logo, 'png', 130, 30, 40, 40);
        var boxWidth = (doc.internal.pageSize.width - 230) / 4;
        doc.setFont('Helvetica');
        this.putText(0, 50, "B M S  COLLEGE OF ENGINEERING, BANGALORE - 19", { align: 'center', size: 18, style: 'bold' }, doc);
        this.putText(0, 68, "Autonomous Institute Affiliated to VTU", { align: 'center', size: 12, style: 'normal' }, doc);
        this.putText(0, 90, "SEMESTER END EXAMINATION JAN/FEB 2021", { align: 'center', size: 14, style: 'bold' }, doc);
        this.putText(40, 130, "Sl. No.", { align: 'left', size: 12, style: 'normal' }, doc);
        this.putText(0, 128, "VALUATION MARKS SHEET", { align: 'center', size: 14, style: 'bold' }, doc);
        this.putText(-40, 130, "Packet Code: " + data.packetCode, { align: 'right', size: 11, style: 'normal' }, doc);
        this.putText(40, 150, "Course Code: " + data.subjectCode, { align: 'left', size: 11, style: 'normal' }, doc);
        this.putText(260, 150, "Course Name: " + data.subjectName, { align: 'left', size: 11, style: 'normal' }, doc);
        this.putText(-40, 150, "Date: __ __   __ __   __ __ __ __", { align: 'right', size: 11, style: 'normal' }, doc);
        this.putText(80, 188, "Script Code", { align: 'left', size: 11, style: 'bold' }, doc);
        this.putText(190, 176, valuationText, { align: 'center', size: 11, style: 'bold', width: doc.internal.pageSize.width - 230 }, doc);
        this.putText(190, 201, "IN WORDS", { align: 'center', style: 'bold', width: boxWidth * 3, size: 11 }, doc);
        this.putText(190 + boxWidth * 3, 201, "IN FIGURES", { align: 'center', style: 'bold', width: boxWidth, size: 11 }, doc);
        this.putText(55, 240 + data.scriptCodes.length * 25 + 10, "CODER SIGNATURE: ____________________________", { align: 'left', style: 'normal', size: 11 }, doc);
        this.putText(400, 230 + data.scriptCodes.length * 25 + 10, valuatorText, { align: 'center', style: 'bold', size: 14, width: doc.internal.pageSize.width - 400 - 55 }, doc);
        this.putText(400, 250 + data.scriptCodes.length * 25 + 10, "Name: " + data.evaluatorName, { align: 'left', style: 'normal', size: 11 }, doc);
        this.putText(400, 270 + data.scriptCodes.length * 25 + 10, "Type: " + data.evaluatorType, { align: 'left', style: 'normal', size: 11 }, doc);
        this.putText(-55, 250 + data.scriptCodes.length * 25 + 10, "Phone: " + data.evaluatorPhoneNumber, { align: 'right', style: 'normal', size: 11 }, doc);
        this.putText(-55, 270 + data.scriptCodes.length * 25 + 10, "Email: " + data.evaluatorEmail, { align: 'right', style: 'normal', size: 11 }, doc);
        this.putText(55, 280 + data.scriptCodes.length * 25 + 10, "VALUATOR SIGNATURE: _________________________", { align: 'left', style: 'normal', size: 11 }, doc);
        doc.setLineWidth(1.2);
        doc.rect(40, 160, 150, 50);
        doc.rect(190, 160, doc.internal.pageSize.width - 230, 25);
        doc.rect(190, 185, doc.internal.pageSize.width - 230, 25);
        doc.rect(190, 185, boxWidth * 3, 25);
        data.scriptCodes.forEach((code, index) => {
            this.putText(40, 227 + 25 * index, code.paperCode, { align: 'center', size: 11, style: 'bold', width: 150 }, doc);
            doc.rect(40, 210 + 25 * index, 150, 25);
            for (var i = 0; i < 4; i++) {
                doc.rect(190 + i * boxWidth, 210 + 25 * index, boxWidth, 25);
            }
        });
        doc.save(fileName);
    }
    sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property])
                return 1;
            else if (a[property] < b[property])
                return -1;
            return 0;
        };
    }
    /**
     * Downloads a PDF for a table
     * @param title Title to be added in the PDF
     * @param tableData Table meta data
     * @param filename Downloaded File Name
     * @param sortBy Sort the table data by this attribute while downloading. If none, the first column will be sorted in ascending order
     */
    downloadTableLandscape(title, tableData, filename, sortBy = tableData.metaData.column_names[0]) {
        var _tableData = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(tableData);
        if (_tableData.metaData.column_names.includes("edit")) {
            _tableData.metaData.column_names.pop();
        }
        _tableData.data.sort(this.sortByProperty(sortBy));
        var doc = new jsPDF('l', 'pt', 'a4');
        var logo = new Image();
        logo.src = 'assets/images/bms.png';
        doc.addImage(logo, 'png', 130, 30, 40, 40);
        doc.setFont('Helvetica');
        this.putText(0, 50, "B M S  COLLEGE OF ENGINEERING, BANGALORE - 19", { align: 'center', size: 18, style: 'bold' }, doc);
        this.putText(0, 68, "Autonomous Institute Affiliated to VTU", { align: 'center', size: 12, style: 'normal' }, doc);
        this.putText(0, 110, title, { align: 'center', size: 14, style: 'bold' }, doc);
        this.putText(0, 90, "Semester End Examination Jan/Feb 2021", { align: 'center', size: 12, style: 'bold' }, doc);
        var columns = [];
        _tableData.metaData.column_names.forEach(col => {
            columns.push({ header: _tableData.metaData.display_names[col], dataKey: col });
        });
        var that = this;
        doc.autoTable({
            body: _tableData.data,
            columns: columns,
            theme: 'striped',
            didDrawPage: function (data) {
                // jsPDF 1.4+ uses getWidth, <1.4 uses .width
                let pageSize = doc.internal.pageSize;
                let pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                // Footer
                let page = "Page-" + doc.internal.getNumberOfPages();
                // Total page number plugin only available in jspdf v1.0+
                // if (typeof doc.putTotalPages === 'function') {
                //     page = page + " of " + pageCount;
                // }
                doc.setFontSize(10);
                that.putText(-50, pageHeight - 30, page, { align: 'right', style: 'normal', size: 8 }, doc);
            },
            startY: 120,
        });
        this.setiFrameForPrint(doc);
    }
    setiFrameForPrint(doc) {
        const iframe = document.createElement('iframe');
        iframe.id = "iprint";
        iframe.name = "iprint";
        iframe.src = doc.output('bloburl');
        iframe.setAttribute('style', 'display: none;');
        document.body.appendChild(iframe);
        iframe.contentWindow.print();
    }
}
PdfDownloadService.ɵfac = function PdfDownloadService_Factory(t) { return new (t || PdfDownloadService)(); };
PdfDownloadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PdfDownloadService, factory: PdfDownloadService.ɵfac });


/***/ }),

/***/ 43512:
/*!*******************************************!*\
  !*** ./src/app/services/routerService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterService": () => (/* binding */ RouterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _constantsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constantsService */ 12813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





class RouterService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.currentRoute = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
        /* ----------------------------------General Routes-------------------------------*/
        this.openNonSession = function () {
            this.doNavigation(_constantsService__WEBPACK_IMPORTED_MODULE_0__.ConstantsService.ROUTE_NON_SESSION);
        };
        this.openSession = function () {
            this.doNavigation(_constantsService__WEBPACK_IMPORTED_MODULE_0__.ConstantsService.ROUTE_SESSION);
        };
        this.openSeasonSelect = function () {
            this.doNavigateReplacement(_constantsService__WEBPACK_IMPORTED_MODULE_0__.ConstantsService.ROUTE_SEASON_SELECTION);
        };
        this.openSessionAfterSelect = function () {
            this.doNavigateReplacement(_constantsService__WEBPACK_IMPORTED_MODULE_0__.ConstantsService.ROUTE_SESSION);
        };
        this.doNavigation = function (route) {
            this.currentRoute.next(route);
            this.router.navigate([route]);
        };
        this.doNavigateReplacement = function (route) {
            this.currentRoute.next(route);
            this.router.navigate([route], { replaceUrl: true });
        };
        this.routeChangeListener = this.currentRoute.asObservable();
        this.router.navigate;
    }
}
RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location)); };
RouterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RouterService, factory: RouterService.ɵfac });
;


/***/ }),

/***/ 65607:
/*!******************************************!*\
  !*** ./src/assets/fonts/Cambria-bold.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cambriaBold": () => (/* binding */ cambriaBold)
/* harmony export */ });


/***/ }),

/***/ 57998:
/*!*************************************!*\
  !*** ./src/assets/fonts/Cambria.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cambiraNormal": () => (/* binding */ cambiraNormal)
/* harmony export */ });


/***/ }),

/***/ 85302:
/*!*****************************************!*\
  !*** ./src/assets/fonts/Lucida-bold.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lucidaBold": () => (/* binding */ lucidaBold)
/* harmony export */ });
const lucidaBold = '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AjIARAAAARYAQ9EAABawArj/qEAJKykFHSUCKhEmACs1ASs1//8ANf/nBFgGRAIyAEQAAAEWANfEAAAWsAK4//VACSksBR0lAi8RJgArNQErNf//ADX/5wRYBdUCMgBEAAABFgCOzQAAF0ANAwIAKjAFHSUDAjARJgArNTUBKzU1AP//ADX/5wRYBg0CMgBEAAABFgDYzAAAE0ALAgApMwUdJQI8ESYAKzUBKzUA//8ANf/nBFgGyQIyAEQAAAEWANzMAAAXQA0DAgAsMgUdJQMCKREmACs1NQErNTUA//8APv5QA+4EYwIyAEYAAAEWAN0GAAALtgFoGCMFFiUBKzUA//8APv/nBBwGRAIyAEgAAAEWAI3BAAATQAsCZxgaBRAlAhsRJgArNQErNQD//wA+/+cEHAZEAjIASAAAARYAQ+AAABawArj/0EAJGhgFECUCGREmACs1ASs1//8APv/nBBwGRAIyAEgAAAEWANfRAAATQAsCGxgbBRAlAh4RJgArNQErNQD//wA+/+cEHAXVAjIASAAAARYAjs0AABdADQMCGBkfBRAlAwIfESYAKzU1ASs1NQD//wAfAAACngZEAjIA1gAAARcAjf69AAAAE0ALAT0WGBUHJQEZESYAKzUBKzUA/////QAAAogGRAIyANYAAAEXAEP+7gAAABawAbj/uEAJGBYVByUBFxEmACs1ASs1////1QAAAqwGRAIyANYAAAEXANf+yQAAABawAbj/7UAJFhkVByUBHBEmACs1ASs1//8AGQAAAogF1QIyANYAAAEXAI7+1QAAABqxAgG4//pAChcdFQclAgEdESYAKzU1ASs1Nf//AB8AAAU7Bg0CMgBRAAABFgDYJQAAFrABuP/wQAkwOi4MJQFDESYAKzUBKzX//wA+/+cEswZEAjIAUgAAARYAjQEAABNACwJcFBYDCSUCFxEmACs1ASs1AP//AD7/5wSzBkQCMgBSAAABFgBDAQAAFrACuP+mQAkWFAMJJQIVESYAKzUBKzX//wA+/+cEswZEAjIAUgAAARYA1wEAABNACwIAFBcDCSUCGhEmACs1ASs1AP//AD7/5wSzBdUCMgBSAAABEgCOAAAAF0ANAwIAFRsDCSUDAhsRJgArNTUBKzU1AP//AD7/5wSzBg0CMgBSAAABEgDYAAAAE0ALAgAUHgMJJQInESYA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AA65AAIDArQqLAYaJQErNQACACsAAAYKBcwAGgAoAAA3NTc2NjU3ESM1MxEnNCYnJzUhNzcgABEQACEBESEVIREUFjMgERAAISsTYCgFoKAFJmITAeXXTwFdAXf+g/7A/rEBWv6mS5IB6P7y/rsAXQEGHT5jAZ1vAXliPxsIAVwDAf6O/qn+oP5dBWb9yG/+Y3s+ApcBTwEXAP//ACsAAASUBt4CMgAoAAABFwDZAAEBQQATQAsBGjo8DjglATwFJgArNQErNQD//wA+/+cEHAWhAjIASAAAARYA2egEABNACwIzGRsFECUCGxEmACs1ASs1AP//ACsAAASUB4UCMgAoAAABFwDaABUBQQATQAsBLjk/DjglAUIFJgArNQErNQD//wA+/+cEHAZEAjIASAAAARYA2t0AABNACwIoGB4FECUCIREmACs1ASs1AP//ACsAAASUB2wCMgAoAAABFwDbABUBQQATQAsBLjo8DjglATwFJgArNQErNQD//wA+/+cEHAYrAjIASAAAARYA290AABNACwIoGRsFECUCGxEmACs1ASs1AP//ACv+jgSUBcgCMgAoAAABFwDfAS0AAAAOuQABAUa0PjoOOCUBKzX//wA+/o4EHARjAjIASAAAARYA33AAAAu2ArsdGQUQJQErNQD//wArAAAElAeFAjIAKAAAARcA4AAVAUEAE0ALAS48OQ44JQE7BSYAKzUBKzUA//8APv/nBBwGRAIyAEgAAAEWAODdAAATQAsCKBsYBRAlAhoRJgArNQErNQD//wBP/9sF5geFAjIAKgAAARcA1wDjAUEAE0ALAUAmKQUgJQEsBSYAKzUBKzUA//8AL/5cBLkGRAIyAEoAAAEWANe+AAAWuQAD/8FACTk8JAwlAz8RJgArNQErNf//AE//2wXmB2wCMgAqAAABFwDbAOMBQQATQAsBQScpBSAlASkFJgArNQErNQD//wAv/lwEuQYrAjIASgAAARYA274AABa5AAP/wkAJOjwkDCUDPBEmACs1ASs1//8AT/0xBeYF7QIyACoAAAEXAXMA5AAAAAu2AUMsLgUgJQErNQAABAAv/lwEuQcNACUALQA4AEIAACUmNTQ3JhE0NjMyFyUHJxYVFAYjIicnBhUUMzMyFhUUBCEiJDU0ARAzMhEQIyIDBhUUFjMyNjU0IxMVBhUVMxEhNRABFnPS9vPLf2QBmT7ZX+6wJD46RKOo6sX+xf796f7ZAWarq6urHymbbnag4jRpaf7wJzxUbGJcAQCw0iginh5xhaXfBQo0Mz93jaTIhWiUAwP+2AElASX8Clk0UnR8W3wHAU4MhRz+8dIBIf//ACsAAAY4B4UCMgArAAABFwDXALoBQQATQAsBADw/FTMlAUIFJgArNQErNQD//wAfAAAFOwfPAjIASwAAARcA1wAxAYsAFrkAAf/7QAkwMy4MJQE2BSYAKzUBKzUAAgArAAAGOAXIAAMARwAAASE1IQE1NzY2NTcRIzUzNSc0JicnNSEVBwYGFQcVITUnNCYnJzUhFQcGBhUHFTMVIxEXFBYXFxUhNTc2NjU3ESERFxQWFxcVAgACY/2d/isTXykFoKAFJmITAnUSYyYFAmMFJmITAnUSYyYFoKAFKWAS/YsTXykF/Z0FKWASAz/g++FdAQYdPmMC/WkfYj8bCAFcXAEIGz9iHx9iPxsIAVxcAQgbP2Ifaf0DYz4dBgFdXQEGHT5jAbT+TGM+HQYBXQAAAQAMAAAFOwYrADgAABM1IRUhFSERNjMyFhURFxQWFxcVITU3NjY1NxE0JiMiBxEXFBYXFxUhNTc2NjU3ESM3MyY1JyYmJx8ByAFm/pqI8JSnBihgE/2XEmApBTdOhoAGKV8T/ZcTXykFswGwAQIDJl8Fz1zqY/6F57ei/jFjPh0GAV1dAQYdPmMBrXVSov4uYz4dBgFdXQEGHT5jA7xjCQQeQBsG//8ACQAAAsIHTgIyACwAAAEXANj+7QFBABNACwEAHCYOGyUBLwUmACs1ASs1AP////gAAAKxBg0CMgDWAAABFwDY/twAAAATQAsBABYgFQclASkRJgArNQErNQD//wAMAAACvwbeAjIALAAAARcA2f7tAUEAE0ALAQAdHw4bJQEfBSYAKzUBKzUA////9AAAAqcFnQIyANYAAAEXANn+1QAAABa5AAH/+kAJFxkVByUBGREmACs1ASs1//8ABgAAAsUHhQIyACwAAAEXANr+7QFBABNACwEAHCIOGyUBJQUmACs1ASs1AP///+UAAAKkBkQCMgDWAAABFwDa/swAAAAWuQAB//FACRYcFQclAR8RJgArNQErNf//ACv+jgKgBcgCMgAsAAABFwDf/ywAAAALtgE/IR0OGyUBKzUA//8AH/6OAogGKwIyAEwAAAEXAN//CgAAAAu2Ai8fGxUHJQErNQD//wAr/tgF2wXIADYALAAAARcALQJoAAAADrkAAQK2tB0vDhslASs1AAQAH/5cBJoGKwAVABkALwAzAAABERcUFhcXFSE1NzY2NTcRJzQmJyc1NxEhEQURECEiJxEzFxcWMzI2NREnNCYnJzU3ESERAecGKV8T/ZcTXykFBSlfE6ABKAKz/k9ljYgBAwdtTS4FKWASoAEoBEr82GM+HQYBXV0BBh0+YwIGYz4dBgFduQEo/ti5+8z+RikBDBNFgWesA11jPh0GAV25ASj+2P////T+2AOkB4UCMgAtAAABFwDX/8EBQQATQAsBhR4hARMlASQFJgArNQErNQD///+O/lwC2QZEAjYBeAAAARcA1/72AAAAE0ALAY4WGQYBJQEcESYAKzUBKzUA//8AK/0xBf4FyAIyAC4AAAEWAXNdAAAOuQAB/8K0RkgVNyUBKzX//wAf/TEFOwYrAjIATgAAARYBcyIAAA65AAH/7rQ4OhUvJQErNQABAB8AAAU7BEoAMQAAARUXFBYXFxUhNTc2NjU3ESc0JicnNSERMzc2NTQjJyM1IRUHBgYPAgEXFhYXFxUhAQHnBSRNEv2wE18pBQUpXxMByDLyhy0qEwGwElIzOYWSATBeLzZEE/5K/pACEvBjPR8FAV1dAQYdPmMCBmM+HQYBXf4G434lFgFdXQEFFTR3i/6DbDUcBAFdAhL//wArAAAEmgeFAjIALwAAARcAjf8MAUEAFrkAAf99QAkkJg0jJQEnBSYAKzUBKzX//wAfAAACigfPAjIATwAAARcAjf6pAYsAE0ALASkWGBUHJQEZBSYAKzUBKzUA//8AK/0xBJoFyAIyAC8AAAEWAXMOAAALtgElKiwNIyUBKzUA//8AH/0xAogGKwIyAE8AAAEXAXP+2wAAAAu2AQAcHhUHJQErNQD//wArAAAEmgXJAjIALwAAARcBhwFQ/54ADrkAAQFntCosDSMlASs1//8AHwAAA6QGKwA2AE8AAAEXAYcAowAAAA65AAEBybQcHhUHJQErNf//ACsAAASaBcgCMgAvAAABFwDbAUT9fwAOuQABAVq0JScNIyUBKzX//wAfAAADswYrADYATwAAARcA2wCn/X4ADrkAAQHMtBcZFQclASs1//8ALP/rBgIHhQIyADEAAAEXAI0AlQFBABNACwFRKCoWISUBKwUmACs1ASs1AP//AB8AAAU7BkQCMgBRAAABFgCNJQAAE0ALAUswMi4MJQEzESYAKzUBKzUA//8ALP0xBgIFyAIyADEAAAEXAXMAhgAAAA65AAH/6LQuMBYhJQErNf//AB/9MQU7BGMCMgBRAAABFgFzNAAAC7YBADY4LgwlASs1AP//ACz/6wYCB4UCMgAxAAABFwDgAJ0BQQATQAsBACsoFiElASoFJgArNQErNQD//wAfAAAFOwZEAjIAUQAAARYA4DEAABNACwEAMzAuDCUBMhEmACs1ASs1AP//ACUAAAZRBisANwBRARYAAAEXAYf+NAAAAA65AAH86rQ2OC4MJQErNQABACz+XQYCBcgANAAAJQERFxQWFxcVITU3NjY1NxEnNCYnJzUhAREnNCYnJzUhFQcGBhUHERAhIicRMxcWFxYzMhEE0fyOBSlgEv4tE18pBQUmYhMBcAM1BiZiEwHSEmEmBv6wSp+UAQIBBmmgAARM/NZjPh0GAV1dAQYdPmMDhWI/GwgBXPvqAvViPxsIAVxcAQgbP2L7Wf5dHgEKEx8ZewENAAEAH/5cBJoEYwAvAAABERcUFhcXFSE1NzY2NTcRJzQmJyc1IRU2MzIWFREQISInETMXFxYzMjY1ETQmIyIB5wYpXxP9lxNfKQUFKV8TAciI8JSn/k9ljYgBAwdtTS43ToYDDP4WYz4dBgFdXQEGHT5jAgZjPh0GAV3P6Lej/Q3+RikBDBNFgWesAxx1U///AE//2wYsBt4CMgAyAAABFwDZAMUBQQATQAsCABUXAwklAhcFJgArNQErNQD//wA+/+cEswWdAjIAUgAAARIA2QAAABNACwIAFRcDCSUCFxEmACs1ASs1AP//AE//2wYsB4UCMgAyAAABFwDaAMUBQQATQAsCABQaAwklAh0FJgArNQErNQD//wA+/+cEswZEAjIAUgAAARIA2gAAABNACwIAFBoDCSUCHREmACs1ASs1AP//AE//2wYsB4UCMgAyAAABFwDeANMBQQAXQA0DApQUGgMJJQMCGwUmACs1NQErNTUA//8APv/nBLMGRAIyAFIAAAEWAN78AAAXQA0DAoIUGgMJJQMCGxEmACs1NQErNTUA//8AKwAABcUHhQIyADUAAAEXAI3//gFBABa5AAL/2UAJLzEVJCUCMgUmACs1ASs1//8AHwAAA6MGRAIyAFUAAAEWAI3CAAATQAsBxiQmFRwlAScRJgArNQErNQD//wAr/TEFxQXPAjIANQAAARcBcwCNAAAAC7YCDjU3FSQlASs1AP//AB/9MQN/BGMCMgBVAAABFwFz/tsAAAAOuQAB/4W0KiwVHCUBKzX//wArAAAFxQeFAjIANQAAARcA4AAVAUEAFrkAAv+VQAkyLxUkJQIxBSYAKzUBKzX//wAfAAADfwZEAjIAVQAAARYA4I8AABNACwE4JyQVHCUBJhEmACs1ASs1AP//AGT/2wQzB4UCMgA2AAABFwCN/9wBQQATQAsBZCstASYlAS4FJgArNQErNQD//wBv/+cD5gZEAjIAVgAAARYAjccAABNACwFwKSsPJCUBLBEmACs1ASs1AP//AGT/2wQzB4UCMgA2AAABFwDX/8gBQQAWuQAB//RACSsuASYlATEFJgArNQErNf//AG//5wPmBkQCMgBWAAABFgDXvAAAE0ALAQkpLA8kJQEvESYAKzUBKzUA//8AKP5QBY4FyAIyADcAAAEWAN19AAALtgEaJC8JCyUBKzUA//8AOP5QAugFNwIyAFcAAAEXAN3/cQAAAAu2AVkWIQcUJQErNQD//wAoAAAFjgeFAjIANwAAARcA4ABjAUEAE0ALAQAmIwkLJQElBSYAKzUBKzUA//8AOP/nA3MG6AAyAFcAAAEXAYcAcgC9AA65AAEBW7QbHQcUJQErNQABACgAAAWOBcgAKgAAJTU3NzY2NzcRITUhESMiBhUUBwcjESERIycnNCYjIxEhFSERFxYWHwIVAYgSRDofBAb+0AEw8V0yBAGUBWaUAgMxXvEBL/7RBgQfOkQSAF0BBQQfOWMBqWMCOB45NzETATT+zB9bOh79yGP+V2M5HwQFAV0AAQA4/+cC6AU3ABwAACUVBiMgEREjNTMRIzUzNSUVMxUjETMVIxEVFDMyAuhdWf6OiIiIiAEo8/Pz85YxdGsiAW4BCGIBKGO5NO1j/thi/vFVnAD//wAT/9sF5gdOAjIAOAAAARcA2ADWAUEAE0ALAVIpMygXJQE8BSYAKzUBKzUA//8AAP/nBRwGDQIyAFgAAAEWANjqAAAWuQAB/9RACSMtDSIlATYRJgArNQErNf//ABP/2wXmBt4CMgA4AAABFwDZAMoBQQATQAsBRiosKBclASwFJgArNQErNQD//wAA/+cFHAWdAjIAWAAAARYA2REAABa5AAH/+0AJJCYNIiUBJhEmACs1ASs1//8AE//bBeYHhQIyADgAAAEXANoAzgFBABNACwFKKS8oFyUBMgUmACs1ASs1AP//AAD/5wUcBkQCMgBYAAABFgDa6gAAFrkAAf/UQAkjKQ0iJQEsESYAKzUBKzX//wAT/9sF5gfxAjIAOAAAARcA3ADOASgAF0ANAgFLLDIoFyUCASkFJgArNTUBKzU1AP//AAD/5wUcBskCMgBYAAABFgDc6QAAGrECAbj/1EAKJiwNIiUCASMRJgArNTUBKzU1//8AE//bBeYHhQIyADgAAAEXAN4AzwFBABdADQIB0SkvKBclAgEwBSYAKzU1ASs1NQD//wAA/+cFHAZEAjIAWAAAARYA3uoAABdADQIBWiMpDSIlAgEqESYAKzU1ASs1NQD//wAT/o4F5gXIAjIAOAAAARcA3wEAAAAAC7YBfC4qKBclASs1AP//AAD+jgUcBEoCMgBYAAABFwDfAb4AAAAOuQABAai0KCQNIiUBKzX//wAA/+0HoweFAjIAOgAAARcA1wGPAUEAE0ALATUoKwccJQEuBSYAKzUBKzUA//8AAP/0BwkGRAIyAFoAAAEXANcBXQAAABNACwFQKy4HIiUBMREmACs1ASs1AP////wAAAW+B4UCMgA8AAABFwDXAIwBQQATQAsBJi8yCBolATUFJgArNQErNQD//wAA/nUFOwZEAjIAXAAAARYA11EAABNACwErJCcIHiUBKhEmACs1ASs1AP//AFoAAASkB4UCMgA9AAABFwCNABkBQQATQAsBbRcZARYlARoFJgArNQErNQD//wBlAAAEQAZEAjIAXQAAARYAjfQAABNACwF1FxkBFiUBGhEmACs1ASs1AP//AFoAAASkB2wCMgA9AAABFwDbACgBQQATQAsBIRgaARYlARoFJgArNQErNQD//wBlAAAEQAYrAjIAXQAAARYA2+QAABNACwEKGBoBFiUBGhEmACs1ASs1AAABADEAAAN6BkQAHwAAEyM1MzUQITIXFSMnJyYjIgYVERcUFhcXFSE1NzY2NTfRmpoBjJmEiAEECl1PPgYpXxP9lxNfKQUD52MsAc4/6RI9enWX/EljPh0GAV1dAQYdPmMA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AGwAZAA6ACAAQgAmAEgAOgAyADAAMAAwAEwAdQBjAGkAZABhACAAQgByAGkAZwBoAHQAIABEAGUAbQBpAGIAbwBsAGQASgBhAG4AdQBhAHIAeQAgADIAOAAsACAAMgAwADAAMAA7ACAAMQAuADEAMAAgACgASgBBAFYAQQApAEwAdQBjAGkAZABhAEIAcgBpAGcAaAB0AC0ARABlAG0AaQBMAHUAYwBpAGQAYQAgAGkAcwAgAGEAIAByAGUAZwBpAHMAdABlAHIAZQBkACAAdAByAGEAZABlAG0AYQByAGsAIABvAGYAIABCAGkAZwBlAGwAbwB3ACAAJgAgAEgAbwBsAG0AZQBzACAASQBuAGMALgAAAAIAAAAAAAD/OABkAAAAAAAAAAAAAAAAAAAAAAAAAAABiAAAAAEAAgECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAG5AboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgITAhQCFQIWAhcCGAIZAhoCGwIcAh0CHgIfAiACIQIiAiMCJAIlAiYCJwIoAikCKgIrAiwCLQIuAi8CMAIxAjICMwI0AjUCNgI3AjgCOQI6AjsCPAI9Aj4CPwJAAkECQgJDAkQCRQJGAkcCSAJJAkoCSwJMAk0CTgJPAlACUQJSAlMCVAJVAlYCVwJYAlkCWgJbAlwCXQJeAl8CYAJhAmICYwJkAmUCZgJnAmgCaQJqAmsCbAJtAm4CbwJwAnECcgJzAnQCdQJ2AncCeAJ5AnoCewJ8An0CfgJ/AoACgQKCAoMChAKFAoYFc3BhY2UGZXhjbGFtCHF1b3RlZGJsCm51bWJlcnNpZ24GZG9sbGFyB3BlcmNlbnQJYW1wZXJzYW5kC3F1b3Rlc2luZ2xlCXBhcmVubGVmdApwYXJlbnJpZ2h0CGFzdGVyaXNrBHBsdXMFY29tbWEGaHlwaGVuBnBlcmlvZAVzbGFzaAR6ZXJvA29uZQN0d28FdGhyZWUEZm91cgRmaXZlA3NpeAVzZXZlbgVlaWdodARuaW5lBWNvbG9uCXNlbWljb2xvbgRsZXNzBWVxdWFsB2dyZWF0ZXIIcXVlc3Rpb24CYXQBQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaC2JyYWNrZXRsZWZ0CWJhY2tzbGFzaAxicmFja2V0cmlnaHQLYXNjaWljaXJjdW0KdW5kZXJzY29yZQVncmF2ZQFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoJYnJhY2VsZWZ0A2JhcgpicmFjZXJpZ2h0CmFzY2lpdGlsZGUJQWRpZXJlc2lzBUFyaW5nCENjZWRpbGxhBkVhY3V0ZQZOdGlsZGUJT2RpZXJlc2lzCVVkaWVyZXNpcwZhYWN1dGUGYWdyYXZlC2FjaXJjdW1mbGV4CWFkaWVyZXNpcwZhdGlsZGUFYXJpbmcIY2NlZGlsbGEGZWFjdXRlBmVncmF2ZQtlY2lyY3VtZmxleAllZGllcmVzaXMGaWFjdXRlBmlncmF2ZQtpY2lyY3VtZmxleAlpZGllcmVzaXMGbnRpbGRlBm9hY3V0ZQZvZ3JhdmULb2NpcmN1bWZsZXgJb2RpZXJlc2lzBm90aWxkZQZ1YWN1dGUGdWdyYXZlC3VjaXJjdW1mbGV4CXVkaWVyZXNpcwZkYWdnZXIGZGVncmVlBGNlbnQIc3RlcmxpbmcHc2VjdGlvbgZidWxsZXQJcGFyYWdyYXBoCmdlcm1hbmRibHMKcmVnaXN0ZXJlZAljb3B5cmlnaHQJdHJhZGVtYXJrBWFjdXRlCGRpZXJlc2lzCG5vdGVxdWFsAkFFBk9zbGFzaAhpbmZpbml0eQlwbHVzbWludXMJbGVzc2VxdWFsDGdyZWF0ZXJlcXVhbAN5ZW4FbWljcm8LcGFydGlhbGRpZmYJc3VtbWF0aW9uB3Byb2R1Y3QCcGkIaW50ZWdyYWwLb3JkZmVtaW5pbmUMb3JkbWFzY3VsaW5lA09obQJhZQZvc2xhc2gMcXVlc3Rpb25kb3duCmV4Y2xhbWRvd24KbG9naWNhbG5vdAdyYWRpY2FsBmZsb3JpbgthcHByb3hlcXVhbAlpbmNyZW1lbnQNZ3VpbGxlbW90bGVmdA5ndWlsbGVtb3RyaWdodAhlbGxpcHNpcwduYnNwYWNlBkFncmF2ZQZBdGlsZGUGT3RpbGRlAk9FAm9lBmVuZGFzaAZlbWRhc2gMcXVvdGVkYmxsZWZ0DXF1b3RlZGJscmlnaHQJcXVvdGVsZWZ0CnF1b3RlcmlnaHQGZGl2aWRlB2xvemVuZ2UJeWRpZXJlc2lzCVlkaWVyZXNpcwhjdXJyZW5jeQ1ndWlsc2luZ2xsZWZ0Dmd1aWxzaW5nbHJpZ2h0AmZpAmZsCWRhZ2dlcmRibApidWxsZXRtYXRoDnF1b3Rlc2luZ2xiYXNlDHF1b3RlZGJsYmFzZQtwZXJ0aG91c2FuZAtBY2lyY3VtZmxleAtFY2lyY3VtZmxleAZBYWN1dGUJRWRpZXJlc2lzBkVncmF2ZQZJYWN1dGULSWNpcmN1bWZsZXgJSWRpZXJlc2lzBklncmF2ZQZPYWN1dGULT2NpcmN1bWZsZXgEamF2YQZPZ3JhdmUGVWFjdXRlC1VjaXJjdW1mbGV4BlVncmF2ZQhkb3RsZXNzaQpjaXJjdW1mbGV4BXRpbGRlBm1hY3JvbgVicmV2ZQlkb3RhY2NlbnQEcmluZwdjZWRpbGxhDGh1bmdhcnVtbGF1dAZvZ29uZWsFY2Fyb24GTHNsYXNoBmxzbGFzaAZTY2Fyb24Gc2Nhcm9uBlpjYXJvbgZ6Y2Fyb24JYnJva2VuYmFyA0V0aANldGgGWWFjdXRlBnlhY3V0ZQVUaG9ybgV0aG9ybgVtaW51cwhtdWx0aXBseQtvbmVzdXBlcmlvcgt0d29zdXBlcmlvcg10aHJlZXN1cGVyaW9yB29uZWhhbGYKb25lcXVhcnRlcg10aHJlZXF1YXJ0ZXJzBkdicmV2ZQZnYnJldmUESWRvdAhTY2VkaWxsYQhzY2VkaWxsYQZDYWN1dGUGY2FjdXRlBkNjYXJvbgZjY2Fyb24HZG1hY3JvbglzZnRoeXBoZW4Jb3ZlcnNjb3JlBm1pZGRvdAdBbWFjcm9uB2FtYWNyb24GQWJyZXZlBmFicmV2ZQdBb2dvbmVrB2FvZ29uZWsLQ2NpcmN1bWZsZXgLY2NpcmN1bWZsZXgEQ2RvdARjZG90BkRjYXJvbgZkY2Fyb24HRG1hY3JvbgdFbWFjcm9uB2VtYWNyb24GRWJyZXZlBmVicmV2ZQRFZG90BGVkb3QHRW9nb25lawdlb2dvbmVrBkVjYXJvbgZlY2Fyb24LR2NpcmN1bWZsZXgLZ2NpcmN1bWZsZXgER2RvdARnZG90CEdjZWRpbGxhCGdjZWRpbGxhC0hjaXJjdW1mbGV4C2hjaXJjdW1mbGV4BEhiYXIEaGJhcgZJdGlsZGUGaXRpbGRlB0ltYWNyb24HaW1hY3JvbgZJYnJldmUGaWJyZXZlB0lvZ29uZWsHaW9nb25lawJJSgJpagtKY2lyY3VtZmxleAtqY2lyY3VtZmxleAhLY2VkaWxsYQhrY2VkaWxsYQNrcmEGTGFjdXRlBmxhY3V0ZQhMY2VkaWxsYQhsY2VkaWxsYQZMY2Fyb24GbGNhcm9uBExkb3QEbGRvdAZOYWN1dGUGbmFjdXRlCE5jZWRpbGxhCG5jZWRpbGxhBk5jYXJvbgZuY2Fyb24LbmFwb3N0cm9waGUDRW5nA2VuZwdPbWFjcm9uB29tYWNyb24GT2JyZXZlBm9icmV2ZQlPZGJsYWN1dGUJb2RibGFjdXRlBlJhY3V0ZQZyYWN1dGUIUmNlZGlsbGEIcmNlZGlsbGEGUmNhcm9uBnJjYXJvbgZTYWN1dGUGc2FjdXRlC1NjaXJjdW1mbGV4C3NjaXJjdW1mbGV4CFRjZWRpbGxhCHRjZWRpbGxhBlRjYXJvbgZ0Y2Fyb24EVGJhcgR0YmFyBlV0aWxkZQZ1dGlsZGUHVW1hY3Jv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BgYGBgYGBgICBwcHBQgHBgYHBQUHBwMEBwUIBwcGBwYFBgcHCQYGBgMFAwYFBgUGBQYFBAUGAwMGAwkGBgYGBAUEBgYIBQYFAwMDBwcHBgUHBwcFBQUFBQUFBQUFBQMDAwMGBgYGBgYGBgYGBgQGBgYGBgYGCAkGBgcJBwgHBwcGBgYICQcGBAQICAYFAgcHBgcIBQUJAwcHBwkIBQkEBAICBwYGBgUDAwYGBgYCBAoHBQcFBQMDAwMHBwkHBwcHAwYGBgYGBgYGBgYFBAUFBgUDBwYGBgYGBwcEBAQJCQkHBQMFBQYFBgUGBQUGBwUHBQcFBgUGBQcHBwUFBQUFBQUFBQUHBQcFBwUHBgcGAwMDAwMDAwMHBgQDBwYGBQMFAwUEBQQHBgcGBwYHBwYHBgcGBwYGBAYEBgQFBQUFBgQGBAYEBwYHBgcGBwYHBgcGCQgGBgYFBgUDBQUGBAYDAAQGAwYHBQcGBQMFAwcGBgQEBgAACgsIAAgDAwUHBggIAwMDBAgDBgMGBgYGBgYGBgYGBgMDCAgIBQkIBgcIBgYICAQFBwYJCAgGCAcGBwcICgcHBgMGAwYFBgYGBQYGBAYHAwQHAwoHBgYGBQUEBwcJBgcGBAQECAgIBwYICAcGBgYGBgYFBgYGBgMDAwMHBgYGBgYHBwcHBgQGBgYGBgcGCQoGBggKCAkICAgGBwcJCgcHBQUJCQYFAwgIBggJBgYKAwgICAoJBQoFBQMDCAYHBwYDAwcHBgYDBQsIBggGBgQEBAQICAoIBwcHAwYGBgYGBgYGBgYGBAYFBgYECAcHBwYGCAgFBQUKCgoIBgQGBQcFBwUHBgUGCAYIBggGBwUHBQgICAYGBgYGBgYGBgYIBggGCAYIBwgHBAMEAwQDBAMHBwUEBwcHBgMGAwYFBgUIBwgHCAcICAcIBggGCAYHBQcFBwUGBQYFBwQHBAcEBwcHBwcHBwcHBwcHCgkHBwYGBgYEBgUHBAYDAAUGBAYIBgcHBgMGAwgHBwUEBgAACw0IAAgDAwUHBwgIAwQEBQkDBgMGBwcHBwcHBwcHBwMDCQkJBgkJBwgJBwYICQQFCAYKCQkHCQgGCAgICwgIBwQGBAcGBwYHBgcGBQcHBAQHBAsHBwcHBQYEBwcKBwcGBAQECQkJCAcJCQgGBgYGBgYGBgYGBgQEBAQHBwcHBwcHBwcHBwUHBwcHBwgHCQsHBwkLCQoJCQkHCAcKCwgHBQUKCQcGAwkJBwkKBgYLAwkJCQsKBgsFBQMDCQcHCAcEBAcHBwcDBQ0JBwkHBwQEBAQJCQsJCAgIBAcHBwcHBwcHBwcGBAYGBwYECQcIBwcHCQkFBQUKCgoIBwQGBggGCAYHBgYHCQYJBgkGCAYIBgkJCQcGBwYHBgcGBwYIBwgHCAcJBwkHBAQEBAQEBAQIBwUECAcHBgQGBAYFBgUJBwkHCQcJCQcJBwkHCQcIBQgFCAUGBgYGCAQIBQgECAcIBwgHCAcIBwgHCwoIBwcGBwYEBgYIBAcDAAUHBAcIBwgHBgQGBAkHCAUEBwAADA4JAAkEAwYIBwkJAwQEBQoDBwMHBwcHBwcHBwcHBwMDCgoKBgoKCAkKBwcJCgQFCQcLCQoHCgkHCQkJCwgJCAQHBAcGBwcIBggHBQcIBAQIBAwIBwgIBgYFCAgLBwgHBAQECgoKCQcJCgkHBwcHBwcGBwcHBwQEBAQIBwcHBwcICAgIBwUHBwcHBwgHCg0HBwoMCgsKCgoHCAgKDAkIBgYLCgcGAwoKBwoLBwcMBAoKCg0LBgwGBgMDCgcICQcEBAgIBwgDBg4KBwoHBwQEBAQKCgwKCQkJBAcHBwcHBwcHBwcHBQcGCAcECggJCAcICgoGBgYLCwsJBwQHBgkGCQYIBwYHCgcKBwoHCQYJBgoJCgcHBwcHBwcHBwcJBwkHCQcKCAoIBAQEBAQEBAQJCAUECQgIBwQHBAcFBwYJCAkICQgJCQgKBwoHCgcJBgkGCQYHBgcGCQUJBQkFCQgJCAkICQgJCAkICwsJCAgHCAcFBwYJBQcDAAYHBAgJBwkIBwQHBAkICQYFBwAADQ8KAAoEAwYJCAoKAwQEBgoDCAMHCAgICAgICAgICAMDCgoKBwsKCAkKCAgKCgUGCggMCgsICwkHCQoKDAkJCAQHBAgHCAcIBwgHBQgJBAUJBA0JCAgIBgcFCQkLCAkIBQUFCgoKCQgKCwoHBwcHBwcHBwcHBwQEBAQJCAgICAgJCQkJCAYICAgICAkICw4ICAoMCwwKCgoICQgLDQoJBgYLCwgHAwoLCAoMBwcNBAoKCw4MBw0GBgMDCggJCQgEBAkJCAgDBg8KCAoICAUFBQULCw0LCgoKBAgICAgICAgICAgIBQcHCAgFCggJCQgICgoGBgYMDAwKCAUHBwkHCQcICAcICgcKBwoHCQcJBwoKCggHCAcIBwgHCAcKCAoICggKCQoJBQQFBAUEBQQKCQYFCgkJCAQIBAgGCAYKCQoJCgkKCgkLCAsICwgJBgkGCQYHBwcHCQUJBgkFCgkKCQoJCgkKCQoJDAsJCQgICAgFBwcJBQgEAAYIBQgKCAoJCAQIBAoJCQYFCAAADhALAAsEBAYJCQsLBAUFBgsECAQICQkJCQkJCQkJCQQECwsLBwwLCQoLCAgLCwUGCggNCwsJCwoICgoLDQoKCQUIBQkHCQgJCAkIBggJBQUJBQ4JCQkJBgcFCQkMCQkIBQUFCwsLCggLCwoICAgICAgICAgICAUFBQUJCQkJCQkJCQkJCQYJCQkJCQoJDA8JCQsNCw0LCwsJCgkMDgoJBwcMDAkHBAsLCQsNCAgOBAsLCw8NBw4HBwQECwkJCgkFBQkJCQkEBxALCAsICAUFBQULCw4LCgoKBQkJCQkJCQkJCQkIBQgHCQgFCwkKCQkJCwsHBwcNDQ0LCAUIBwoICggJCAcJCwgLCAsICggKCAsLCwgICAgICAgICAgLCAsICwgLCQsJBQUFBQUFBQUKCQYFCgkJCAUIBQgGCAYLCQsJCwkLCwkLCQsJCwkKBgoGCgYIBwgHCgUKBgoFCgkKCQoJCgkKCQoJDQwKCQkICQgFCAcKBQkEAQcJBQkLCAoJCAUIBQsJCgYFCQAADxELAAsFBAcKCQsLBAUFBwwECQQICQkJCQkJCQkJCQQEDAwMCA0MCgsMCQkLDAUHCwkODAwJDAsICwsLDgsLCgUIBQkICQgKCAoIBgkKBQUKBQ8KCQoKBwgGCgoNCQoJBgYGDAwMCwkMDAsICAgICAgICAgICAUFBQUKCQkJCQkKCgoKCQcJCQkJCQsJDRAJCQwODA4MDAwJCwoNDwsKBwcNDQkIBAwMCQwOCQkPBQwMDBAOCA8HBwQEDAkKCwkFBQoKCQkEBxEMCQwJCQUFBQUMDA8MCwsLBQkJCQkJCQkJCQkJBggICgkGDAoLCgkKDAwHBwcODg4LCQUICAsICwgKCQgJDAgMCAwICwgLCAwMDAkICQgJCAkICQgLCQsJCwkMCgwKBQUFBQUFBQULCgcFCwoKCQUJBQkHCQcMCgwKDAoMDAoMCQwJDAkLBwsHCwcICAgICwYLBgsGCwoLCgsKCwoLCgsKDg0LCgoJCgkGCAgLBgkEAQcJBQoLCQsKCQUJBQwKCwcGCQAAEBIMAAwFBAcLCgwMBAUFBw0ECQQJCgoKCgoKCgoKCgQEDQ0NCA4NCgsNCgkMDQYHDAkODQ0KDQwJCwwMDwsLCgUJBQoICgkKCQoJBwoKBQYKBQ8KCgoKBwgGCgsOCgoJBgYGDQ0NCwoNDQwJCQkJCQkJCQkJCQUFBQUKCgoKCgoKCgoKCgcKCgoKCgsKDhEKCg0PDQ8NDQ0KCwoOEAwLCAgODgoIBA0NCg0PCQkQBQ0NDREPCBAICAQEDQoKCwoFBQsLCgoECBINCg0KCgYGBgYNDRANDAwMBQoKCgoKCgoKCgoJBgkICgkGDQoLCgoKDQ0ICAgPDw8MCgYJCAsJCwkKCQgKDQkNCQ0JCwkLCQ0MDQoJCgkKCQoJCgkMCgwKDAoNCg0KBgUGBQYFBgUMCwcGDAoKCQUJBQkHCQcNCg0KDQoNDQoNCg0KDQoMBwwHDAcJCAkICwYLBwsGDAoMCgwKDAoMCgwKDw4LCgoJCgkGCQgLBgoFAQgKBgoMCgwKCQUJBQ0KDAcGCgAAERMNAA0FBQgLCw0NBAYGBw4FCgUJCwsLCwsLCwsLCwUFDg4OCQ8OCwwNCgoNDgYIDQoPDQ4KDgwJDA0NEAwMCwYJBgsJCwkLCQsKBwoLBgYLBhALCwsLCAkHCwsPCgsKBgYGDg4ODAoNDg0JCQkJCQkJCgoKCgYGBgYLCwsLCwsLCwsLCwcLCwsLCwwLDxILCw4QDhAODg4LDAsPEQ0LCAgPDgsJBQ4OCw4QCgoRBQ4ODhIQCREICAUFDgsLDAoGBgsLCwsFCBMOCg4KCgYGBgYODhEODQ0NBgsLCwsLCwsLCwsKBwkJCwoGDQsMCwoLDg4ICAgQEBANCgYJCQwJDAkLCgkLDgkOCQ4JDAkMCQ0NDgoKCgoKCgoKCgoNCg0KDQoOCw4LBgYGBgYGBgYNCwgGDQsLCgYKBgoICggNCw0LDQsNDQsOCw4LDgsMCAwIDAgJCQkJDAcMBwwHDQsNCw0LDQsNCw0LEA8MCwsKCwoHCQkMBwsFAQgLBgsNCg0LCgYKBg0LDAgHCwAAEhUOAA4GBQgMCw4OBQYGCA4FCgUKCwsLCwsLCwsLCwUFDg4OCRAODA0OCwsODgYIDQsQDg8LDw0KDQ0OEQ0NDAYKBgsJCwoMCgwKBwsMBgYMBhEMCwwMCAkHDAwQCwwLBwcHDg4ODQsODw0KCgoKCgoKCgoKCgYGBgYMCwsLCwsMDAwMCwgLCwsLCw0LDxMLCw4RDxEODg4LDQwQEg0MCQkQDwsJBQ4PCw4RCgoSBg4ODxMRCRIICAUFDgsMDQsGBgwMCwsFCBUOCw4LCwYGBgYPDxIPDQ0NBgsLCwsLCwsLCwsLBwoJDAsHDgwNDAsMDg4JCQkREREOCwYKCQ0KDQoMCgkLDgoOCg4KDQoNCg4ODgsKCwoLCgsKCwoOCw4LDgsODA4MBgYGBgYGBgYNDAgGDQwMCwYLBgsICwgODA4MDgwODgwPCw8LDwsNCA0IDQgKCQoJDQcNCA0HDQwNDA0MDQwNDA0MERANDAwLDAsHCgkNBwsFAQkLBgwOCw0MCwYLBg4MDQgHCwAAExYOAA4GBQkNDA4PBQYGCA8FCwULDAwMDAwMDAwMDAUFDw8PChAPDA4PCwsODwcJDgsRDw8MDw4LDg4OEg0ODAYLBgwKDAsMCgwLCAsMBgcMBhIMDAwMCQoHDAwRDAwLBwcHDw8PDgsPDw4LCwsLCwsKCwsLCwYGBgYMDAwMDAwMDAwMDAgMDAwMDA0MEBQMDA8SDxIPDw8MDQwREg4NCQkREAwKBQ8PDA8SCwsTBg8PDxQSChMJCQUFDwwMDgwGBg0NDAwFCRYPCw8LCwcHBwcPDxMPDg4OBgwMDAwMDAwMDAwLBwsKDAsHDwwODAwMDw8JCQkSEhIOCwcLCg4KDgoMCwoMDwsPCw8LDgoOCg8PDwsLCwsLCwsLCwsOCw4LDgsPDA8MBwYHBgcGBwYODAkHDgwMCwYLBgsJCwkPDA8MDwwPDwwPDA8MDwwOCQ4JDgkLCgsKDgcOCA4HDgwODA4MDgwODA4MEhEODAwLDAsHCwoOBwwGAQkMBwwOCw4MCwYLBg8MDgkHDAAAFBcPAA8GBQkNDA8PBQcHCRAFDAULDAwMDAwMDAwMDAUFEBAQChEQDQ4QDAwPEAcJDwwSEBAMEA4LDg8PEw4ODQcLBwwKDAsNCw0LCAwNBwcNBxMNDA0NCQoIDQ0SDA0MBwcHEBAQDgwQEA8LCwsLCwsLCwsLCwcHBwcNDAwMDAwNDQ0NDAkMDAwMDA4MERUMDBATEBMQEBAMDg0REw8NCgoSEQwKBRAQDBATCwsUBhAQEBUTChQJCQUFEAwNDgwHBw0NDA0FCRcQDBAMDAcHBwcQEBQQDw8PBwwMDAwMDAwMDAwMCAsKDQwHEA0ODQwNEBAKCgoTExMPDAcLCg4LDgsNDAoMEAsQCxALDgsOCxAQEAwLDAsMCwwLDAsPDA8MDwwQDRANBwcHBwcHBwcPDQkHDw0NDAcMBwwJDAkQDRANEA0QEA0QDBAMEAwOCQ4JDgkLCgsKDggOCQ4IDw0PDQ8NDw0PDQ8NExIODQ0MDQwICwoOCAwGAQoMBw0PDA8NDAcMBxANDgkIDAAAFRgQABAHBgoODRAQBQcHCREGDAYMDQ0NDQ0NDQ0NDQYGERERCxIRDQ8RDQwQEQcJEAwTERENEQ8MDxAQFA8PDQcMBw0LDQwNCw4MCQ0OBwcOBxQODQ4NCgsIDg4SDQ4MCAgIERERDw0RERAMDAwMDAwLDAwMDAcHBwcODQ0NDQ0ODg4ODQkNDQ0NDQ8NEhYNDREUERQRERENDw4SFBAOCgoSEg0LBhERDREUDAwVBxERERYUCxUKCgYGEQ0ODw0HBw4ODQ0GChgRDRENDQcHBwcRERUREBAQBw0NDQ0NDQ0NDQ0MCAwLDQwIEQ4PDg0OEREKCgoUFBQQDQcMCw8LDwsODAsNEQwRDBEMDwsPCxEQEQ0MDQwNDA0MDQwQDRANEA0RDhEOBwcHBwcHBwcQDgkHEA4ODAcMBwwKDAoRDhEOEQ4REQ4RDRENEQ0PCg8KDwoMCwwLDwgPCQ8IEA4QDhAOEA4QDhAOFBIPDg0MDQwIDAsPCA0GAQoNBw4QDRAODAcMBxEODwoIDQAAFhkRABEHBgoPDhERBgcHChIGDQYMDg4ODg4ODg4ODgYGEhESCxMSDhARDQ0REggKEA0UERIOEhAMEBARFQ8QDgcMBw4LDgwODA4MCQ0OBwgOBxUODg4OCgwJDg4TDQ4NCAgIERISEA0REhAMDAwMDAwMDAwMDAcHBwcODg4ODg4ODg4ODgoODg4ODg8OExcODhEVEhUSEhIOEA4TFRAPCwsTEw4LBhISDhIVDAwWBxISEhcVCxYKCgYGEg4OEA0HBw8PDg4GChkSDRINDQgICAgSEhYSEBAQBw4ODg4ODg4ODg4NCQwMDg0IEQ4QDg4OERILCwsVFRURDQgMDBAMEAwODQsOEgwSDBIMEAwQDBEREQ0MDQwNDA0MDQwRDRENEQ0SDhIOCAcIBwgHCAcQDgoIEA4ODQcNBw0KDQoRDhEOEQ4REQ4SDhIOEg4QChAKEAoMDAwMEAkQCRAJEA4QDhAOEA4QDhAOFRMQDg4NDg0JDAwQCQ4GAQsOCA4RDRAODQcNBxEOEAoJDgAAFxoRABEHBgsPDhESBggIChIGDQYNDg4ODg4ODg4ODgYGEhISDBQSDxASDg0REggKEQ0VEhMOExENEBERFhAQDwgNCA4MDg0PDA8NCg4PBwgPBxYPDg8PCwwJDw8UDg8NCAkIEhISEA4SExENDQ0NDQ0MDQ0NDQcHBwcPDg4ODg4PDw8PDgoODg4ODhAOFBgODhIWExYSEhIOEA8UFhEPCwsUFA4MBhITDhIWDQ0XBxISExgWDBcLCwYGEg4PEA4ICA8PDg4GCxoSDhIODggICAgTExcTERERBw4ODg4ODg4ODg4NCQ0MDw0JEg8QDw4PEhILCwsWFhYRDggNDBAMEAwPDQwOEg0SDRINEAwQDBISEg4NDg0ODQ4NDg0RDhEOEQ4SDxIPCAcIBwgHCAcRDwoIEQ8PDQcNBw0KDQsSDxIPEg8SEg8TDhMOEw4RCxELEQsNDA0MEAkQChAJEQ8RDxEPEQ8RDxEPFhQQDw8NDw0JDQwQCQ4HAQsOCA8RDhEPDQcNBxIPEQsJDgAAGBsSABIHBgsQDxISBggIChMGDgYNDw8PDw8PDw8PDwYGExMTDBUTDxETDg4SEwgLEg4WExMPExENERISFxERDwgNCA8MDw0PDQ8NCg4QCAkQCBcQDw8PCw0JEBAVDxAOCQkJExMTEQ4TExINDQ0NDQ0NDQ0NDQgICAgQDw8PDw8QEBAQDwoPDw8PDxEPFRkPDxMXExcTExMPERAVFxIQDAwVFA8MBhMTDxMWDg4YBxMTExkWDBgLCwYGEw8QEQ8ICBAQDw8GCxsTDhMODggICAgTExgTEhISCA8PDw8PDw8PDw8OCQ0NDw4JExAREA8PExMMDAwXFxcSDggNDRENEQ0QDgwPEw0TDRMNEQ0RDRMTEw4NDg0ODQ4NDg0SDhIOEg4TEBMQCAgICAgICAgSEAsJEhAQDggOCA4LDgsTEBMQExATExATDxMPEw8RCxELEQsNDQ0NEQkRChEJEhASEBIQEhASEBIQFxUREA8ODw4JDQ0RCQ8HAQwPCQ8SDhIQDggOCBMQEQsJDwAAGx8UABQIBwwSERQVBwkJDBUHEAcPEREREREREREREQcHFRUVDhcVERMVEBAUFgkMFBAYFRYRFhMPExQUGhMTEQkPCREOEQ8RDxIPCxASCQoSCRoSERIRDA4LEhIYEBIQCgoKFRUVExAVFhQPDw8PDw8PDw8PDwkJCQkSERERERESEhISEQwRERERERMRFxwRERUaFhkVFRURExIYGhQSDQ0YFxEOBxUWERUZDw8bCBUVFhwZDhsNDQcHFRESExAJCRISEREHDR8VEBUQEAkJCQkWFhsWFBQUCREREREREREREREQCw8OERAKFRITEhESFRUNDQ0aGhoUEAkPDhMPEw8SEA4RFQ8VDxUPEw8TDxUVFRAPEA8QDxAPEA8UEBQQFBAWEhYSCQkJCQkJCQkUEgwKFBISEAkQCRAMEAwVEhUSFRIVFRIWERYRFhETDBMMEwwPDg8OEwsTDBMLFBIUEhQSFBIUEhQSGhgTEhEQERAKDw4TCxEIAQ0RChIUEBQSEAkQCRUSEwwLEQAAHSEWABYJCA0TEhYWBwkJDRcIEQgQEhISEhISEhISEggIFxcXDxkXExUXEREWFwoNFhEaFxcSFxUQFRYWHBQVEwkQCRIPEhATEBMQDBETCQoTCRwTEhMTDQ8LExMaEhMRCwsLFxcXFREXFxYQEBAQEBAQEBAQEAkJCQkTEhISEhITExMTEg0SEhISEhQSGR4SEhccFxsXFxcSFBMZHBUTDg4ZGRIPCBcXEhcbEBAdCRcXFx4bDx0ODggIFxITFRIKChMTEhIIDiEXERcREQoKCgoXFx0XFhYWCRISEhISEhISEhIRCxAPExELFxMVExITFxcODg4cHBwWEQoQDxUQFRATEQ8SFxAXEBcQFRAVEBcXFxEQERAREBEQERAWERYRFhEXExcTCgkKCQoJCgkWEw0KFhMTEQkRCRENEQ0XExcTFxMXFxMXEhcSFxIVDRUNFQ0QDxAPFQsVDBULFhMWExYTFhMWExYTHBoVExMRExELEA8VCxIIAQ4SChMWERYTEQkRCRcTFQ0LEgAAICQYABgKCA8VFBgYCAoKDhkIEwgSFBQUFBQUFBQUFAgIGRkZEBwZFBcZExMYGgsOGBMdGRoUGhcSFxgYHxYXFAoSChQQFBIUERUSDRMVCgsVCh8VFBUUDxEMFRUcExUTDAwMGRkZFxMZGhgSEhISEhIREhISEgoKCgoVFBQUFBQVFRUVFA4UFBQUFBYUGyEUFBkfGh4ZGRkUFxUcHxgVEBAcGxQQCBkaFBkeEhIgChkZGiEeECAPDwgIGRQVFxMLCxYWFBQIDyQZExkTEwsLCwsaGiAaGBgYChQUFBQUFBQUFBQTDBIRFBMMGRUXFRQVGRkPDw8eHh4YEwsSERcRFxEVExAUGRIZEhkSFxEXERkZGRMSExITEhMSExIYExgTGBMaFRoVCwoLCgsKCwoYFQ4LGBUVEwoTChMPEw8ZFRkVGRUZGRUaFBoUGhQXDxcPFw8SERIRFwwXDhcMGBUYFRgVGBUYFRgVHxwXFRQTFBMMEhEXDBQJAQ8UCxUYExgVEwoTChkVFw8MFAAAISYZABkKCQ8WFRkZCAsLDhoJEwkSFRUVFRUVFRUVFQkJGhoaERwaFRcaFBMZGgwPGRMeGhsUGxgSGBkZIBcYFQsSCxURFBIVEhYTDhQWCwwWCyAWFBYVDxENFhYdFBYTDAwMGhoaFxQaGxkSEhISEhISExMTEwsLCwsWFBQUFBQWFhYWFQ4VFRUVFRcVHCIUFBogGx8aGhoVFxYdIBgWEBAdHBQRCRobFRofExMhChoaGyIfESEQEAkJGhUWGBQLCxYWFRUJECYaFBoUFAwMDAwbGyEbGRkZCxQUFBQUFBQUFBQTDRIRFRMMGhYYFhQWGhoQEBAfHx8ZFAwSERcSFxIWExEVGhIaEhoSFxIXEhoaGhQTFBMUExQTFBMZFBkUGRQaFhoWDAsMCwwLDAsZFg8MGRYWEwsTCxMPEw8aFhoWGhYaGhYbFBsUGxQYDxgPGA8SERIRGA0YDhgNGRYZFhkWGRYZFhkWIB0YFhUTFRMNEhEYDRQKARAVDBYZFBkWEwsTCxoWGA8NFAAAJSocABwMChEZFxwcCQwMEB0KFQoUFxcXFxcXFxcXFwoKHR0dEyAdGBodFhYcHg0RHBYhHR4XHhsVGhwcIxobGAwUDBcTFxUYFBgVDxYYDA0YDCQYFxgYERMOGBghFxgWDg4OHR0dGhYdHhwVFRUVFRUUFRUVFQwMDAwYFxcXFxcYGBgYFxAXFxcXFxoXICcXFx0jHiMdHR0XGhggJBsYEhIgIBcTCh0eFx0jFRUlDB0dHicjEyUREQoKHRcYGxcMDBkZFxcKESodFh0WFg0NDQ0eHiUeHBwcDBcXFxcXFxcXFxcWDhUTGBYOHRgbGBcYHR0SEhIjIyMcFg0VExoUGhQYFRMXHRUdFR0VGhQaFB0dHRYVFhUWFRYVFhUcFhwWHBYeGB4YDQwNDA0MDQwcGBENHBgYFgwWDBYRFhEdGB0YHRgdHRgeFx4XHhcbERsRGxEVExUTGg4aEBoOHBgcGBwYHBgcGBwYIyEbGBgWGBYOFRMaDhcLARIXDRgcFhwYFgwWDB0YGxEOFwAAJisdAB0MChIZGB0dCgwMEB4KFgoVGBgYGBgYGBgYGAoKHh4eEyEeGBseFxYdHg0RHBYiHh8XHxsVGxwdJBsbGAwVDBgTFxUYFRkVEBcZDA4ZDCUZFxkYEhQPGRkhFxkWDg4OHh4eGxceHxwVFRUVFRUVFRUVFQwMDAwZFxcXFxcZGRkZGBAYGBgYGBsYISgXFx4kHyQeHh4YGxkhJRwZExMhIBcTCh4fGB4kFhYmDB4eHygkEyYSEgoKHhgZGxcNDRoaGBgKEiseFx4XFw0NDQ0fHyYfHBwcDBcXFxcXFxcXFxcWDxUUGBYOHhkbGRcZHh4SEhIkJCQdFw0VFBsVGxUZFhMYHhUeFR4VGxUbFR4eHhcVFxUXFRcVFxUdFx0XHRceGR4ZDQwNDA0MDQwcGREOHBkZFgwWDBYRFhIeGR4ZHhkeHhkfFx8XHxcbEhsSGxIVFBUUGw8bEBsPHBkcGRwZHBkcGRwZJCEbGRgWGBYPFRQbDxcLARIYDhkdFxwZFgwWDB4ZGxIPFwAAKjAgACANCxMcGiAgCw4OEiELGAsXGhoaGhoaGhoaGgsLISEhFSQhGx4hGRkgIg8THxkmISIaIh4XHh8gKB0eGw4XDhoVGhcbFxsYERkbDg8bDikbGhsbExYQGxwlGhsZDxAPISEhHhkhIh8XFxcXFxcXGBgYGA4ODg4bGhoaGhobGxsbGhIaGhoaGh0aJCwaGiEoIichISEaHhslKR8cFBQlJBoVCyEiGiEnGBgqDSEhIiwnFSoUFAsLIRobHhoODhwcGhoLFDAhGSEZGQ8PDw8iIioiHx8fDhoaGhoaGhoaGhoZEBcWGxkQIRseGxobISEUFBQoKCggGQ8XFh4XHhcbGBUaIRchFyEXHhceFyEhIRkYGRgZGBkYGRggGSAZIBkiGyIbDw4PDg8ODw4fHBMPHxsbGQ4ZDhkTGRMhGyEbIRshIRsiGiIaIhoeEx4THhMXFhcWHhAeEh4QHxsfGx8bHxsfGx8bKCUeGxsZGxkQFxYeEBoMAhQaDxsgGR8bGQ4ZDiEbHhMQGgAALjQjACMODBUeHSMjDA8PFCUMGwwZHR0dHR0dHR0dHQwMJSUlFyglHSElHBsjJRAVIhsqJCUcJSEaISIjLCAhHQ8ZDx0XHBodGR4aExweDxAeDyweHB4dFRgSHh4oHB4bERERJSUlIRwkJSIaGhoaGhoZGhoaGg8PDw8eHBwcHBweHh4eHRQdHR0dHSAdJzAcHCUsJSslJSUdIB4oLSIeFhYoJxwXDCUlHSUrGhouDiUlJTArFy4WFgwMJR0eIRwQEB8fHR0MFjQlHCUcHBAQEBAlJS4lIiIiDxwcHBwcHBwcHBwbEhoYHRsRJR4hHhweJSUWFhYsLCwjHBAaGCEZIRkeGxcdJRolGiUaIRkhGSUkJRwaHBocGhwaHBojHCMcIxwlHiUeEA8QDxAPEA8iHhUQIh4eGw8bDxsVGxUkHiQeJB4kJB4lHCUcJRwhFSEVIRUaGBoYIRIhFCESIh4iHiIeIh4iHiIeLCghHh0bHRsSGhghEhwNAhYdEB4jHCIeGw8bDyQeIRUSHAAAMjkmACYQDRchHyYmDRAQFigNHQ0cHx8fHx8fHx8fHw0NKCgoGSsoICQoHh0mKBEXJR0tJykfKSQcJCUmMCMkIBAcEB8ZHxwgGyEcFR4hEBIhEDAhHyEgFxoTISEsHiEdEhMSKCgoJB4nKSUcHBwcHBwbHBwcHBAQEBAhHx8fHx8hISEhHxYfHx8fHyMfKzQfHygwKS8oKCgfIyEsMSUhGBgsKx8ZDSgoHygvHBwyECgoKTQvGTIXFw0NKB8hJB4RESIiHx8NFzkoHigeHhEREREpKTIpJSUlEB8fHx8fHx8fHx8dExwaIB0TKCEkIR8hKCgYGBgwMDAmHhEcGiQbJBshHRkfKBwoHCgcJBskGygnKB4cHhweHB4cHhwmHiYeJh4oISghERAREBEQERAlIRcSJSEhHRAdEB0XHRcnISchJyEnJyEpHykfKR8kFyQXJBccGhwaJBMkFiQTJSElISUhJSElISUhMCwkISAdIB0THBokEx8OAhgfEiEmHiUhHRAdECchJBcTHwAANj0pACkRDhkkIikpDhISFysOHw4eIiIiIiIiIiIiIg4OKysrGy4rIiYrICApKxMYKCAxKywhLCceJygpNCYnIhIeEiIbIR4jHSMeFiAjEhMjEjQjISMjGRwVIyMvISMgFBQUKysrJiArLCgeHh4eHh4dHh4eHhISEhIjISEhISEjIyMjIhciIiIiIiYiLjghISs0LDMrKysiJiMvNSgkGhovLiEbDissIiszHx82ESsrLDgzGzYZGQ4OKyIjJyESEiQkIiIOGT0rICsgIBMTExMsLDYsKCgoEiEhISEhISEhISEgFR4cIiAUKyMnIyEjKysaGhozMzMpIBMeHCYdJh0jHxsiKx4rHiseJh0mHSsqKyAeIB4gHiAeIB4pICkgKSArIysjExITEhMSExIoIxgTKCMjIBIgEiAZIBkrIysjKyMrKyMsISwhLCEnGScZJxkeHB4cJxUnFycVKCMoIygjKCMoIygjNC8nIyIgIiAVHhwnFSEQAhoiEyMpICgjIBIgEisjJxkVIQAAOkIsACwSDxsmJCwsDxMTGS4PIg8gJCQkJCQkJCQkJA8PLi4uHTIuJSkuIyIsLhQaKyI0Li8kLyogKSssNykqJRMgEyQdJCAlHyYhGCMmExUmEzgmJCYlGx4XJiYzIyYiFRYVLi4uKSMuLysgICAgICAfISEhIRMTExMmJCQkJCQmJiYmJBkkJCQkJCkkMj0kJC44LzcuLi4kKSYzOCsmHBwzMSQdDy4vJC42ISE6Ei4uLz02HTobGw8PLiQmKiMUFCcnJCQPG0IuIy4jIxQUFBQvLzovKysrEyQkJCQkJCQkJCQiFyAeJSIWLiYqJiQmLi4cHBw3NzcsIxQgHikfKR8mIh0kLiAuIC4gKR8pHy4tLiMhIyEjISMhIyEsIywjLCMuJi4mFBMUExQTFBMrJhoVKyYmIhMiEyIaIhsuJi4mLiYuLiYvJC8kLyQqGyobKhsgHiAeKRcpGSkXKyYrJismKyYrJismNzMqJiUiJSIWIB4pFyQRAhwkFSYsIysmIhMiEy4mKhsXJAAAQ0wyADIVEh8sKjMzERYWHTUSJxIlKioqKioqKioqKhISNTU1Ijo1KzA1KCcyNRceMic9NTYpNjAlMDIyQC8wKxYlFioiKSUrJCwmHCgsFhgsFkEsKSwrHyMaLCw7KSwnGRkZNTU1MCg1NjIlJSUlJSUkJiYmJhYWFhYsKSkpKSksLCws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';


/***/ }),

/***/ 70014:
/*!*******************************************!*\
  !*** ./src/assets/fonts/Lucida-normal.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lucidaNormal": () => (/* binding */ lucidaNormal)
/* harmony export */ });
const lucidaNormal = 'AAEAAAARAQAABAAQRFNJR0LhockAAP9oAAAU9ExUU0j+mfA4AAAKdAAAAPdPUy8ybZZzKAAAAZgAAABWVkRNWEmbUrMAAAtsAAAEHmNtYXALUMjRAAAFWAAAAzRjdnQgj9hjlwAAHTQAAAb0ZnBnbd/fSz0AABkwAAAEA2dseWaMERjZAABGBAAAtxhoZG14P/DdygAAJ/QAAB4QaGVhZLzfLh4AAAEcAAAANmhoZWENkQUrAAABVAAAACRobXR4YXRaxgAAJCgAAAPMbG9jYVsbiugAAAiMAAAB6G1heHAJMQI4AAABeAAAACBuYW1lIz0GxgAAAfAAAANmcG9zdESoHjsAAP0cAAACSnByZXCwT053AAAPjAAACaEAAQAAAAEBBkuoV9BfDzz1ABsIAAAAAACjo434AAAAALQ7VGb9tv5QCBwHbAAAAAkAAQAAAAAAAAABAAAHvP5QAAAIMf22/bYIHAABAAAAAAAAAAAAAAAAAAAA8wABAAAA8wBMAAcARQAEAAIAEAATADgAAAfoAZEAAgABAAED7wGQAAUACATOBCkAAAMWBM4EKQAAAxYAZAMgAgACBAYCBQUFAgMEAAAAAwAAAAAAAAAAAAAAAEImSCAAQAAg8AIGK/5cADEHbAGwIAAAAQAAAAAAAAAAABAAxgABAAAAAAAAAHoAAAABAAAAAAABAA0AegABAAAAAAACAAcAhwABAAAAAAADAA0AegABAAAAAAAEAA0AegABAAAAAAAFAAwAjgABAAAAAAAGAAwAmgABAAAAAAAHADoApgADAAEECQAAAPQA4AADAAEECQABABoB1AADAAEECQACAA4B7gADAAEECQADABoB1AADAAEECQAEABoB1AADAAEECQAFABgB/AADAAEECQAGABgCFAADAAEECQAHAHQCLKkgMTk5MSBCaWdlbG93ICYgSG9sbWVzIEluYy4gUGF0LiBEZXMuIDI4OSw0MjEuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIKkgMTk5MC0xOTkxIFR5cGUgU29sdXRpb25zLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuTHVjaWRhIEJyaWdodFJlZ3VsYXJWZXJzaW9uIDEuNjdMdWNpZGFCcmlnaHRMdWNpZGGoIGlzIGEgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2YgQmlnZWxvdyAmIEhvbG1lcyBJbmMuAKkAIAAxADkAOQAxACAAQgBpAGcAZQBsAG8AdwAgACYAIABIAG8AbABtAGUAcwAgAEkAbgBjAC4AIABQAGEAdAAuACAARABlAHMALgAgADIAOAA5ACwANAAyADEALgAgAEEAbABsACAAUgBpAGcAaAB0AHMAIABSAGUAcwBlAHIAdgBlAGQALgAgAKkAIAAxADkAOQAwAC0AMQA5ADkAMQAgAFQAeQBwAGUAIABTAG8AbAB1AHQAaQBvAG4AcwAsACAASQBuAGMALgAgAEEAbABsACAAUgBpAGcAaAB0AHMAIABSAGUAcwBlAHIAdgBlAGQALgBMAHUAYwBpAGQAYQAgAEIAcgBpAGcAaAB0AFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgA2ADcATAB1AGMAaQBkAGEAQgByAGkAZwBoAHQATAB1AGMAaQBkAGEArgAgAGkAcwAgAGEAIAByAGUAZwBpAHMAdABlAHIAZQBkACAAdAByAGEAZABlAG0AYQByAGsAIABvAGYAIABCAGkAZwBlAGwAbwB3ACAAJgAgAEgAbwBsAG0AZQBzACAASQBuAGMALgAAAAAAAgABAAAAAAAUAAMAAQAAARoAAAEGAAABAAAAAAAAAAEDAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhAGJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NEA0tPU1dbX2Nna29zd3t/gAAQCGgAAAEoAQAAFAAoAfgCuALYA/wExAVMBYQF4AZICxwLJAt0DwCAUIBogHiAiICYgMCA6IKwhIiEmIgIiBiIPIhEiFSIaIh4iKyJIImAiZSXK8AL//wAAACAAoACwALgBMQFSAWABeAGSAsYCyQLYA8AgEyAYIBwgICAmIDAgOSCsISIhJiICIgYiDyIRIhUiGSIeIisiSCJgImQlyvAB////4wAAAAAAAP+l/17/gf9D/xQAAP4QAAD82+CfAAAAAAAA4IXgluCF4BHfat953pbeot6L3ojepwAA3nTecd5f3i/eMNrvEL8AAQAAAEgAZABwAAAAAAAAAAAAAAD0AAAA9AAAAAAA+gD+AQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAKwAowCEAIUA8gCWAOMAhgCOAIsAnQCpAKQA8QCKAIMAkwDsAO0AjQCXAIgA3QDrAJ4AqgDvAO4A8ACiAK0AyQDHAK4AYgBjAJAAZADLAGUAyADKAM8AzADNAM4A5ABmANIA0ADRAK8AZwDqAJEA1QDTANQAaADmAOgAiQBqAGkAawBtAGwAbgCgAG8AcQBwAHIAcwB1AHQAdgB3AOUAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA5wDpALoA1wDgANoA2wDcAN8A2ADeALYAtwDEALQAtQDFAIIAwgCHAMMApQAAAD8APwA/AD8AiQDVAZ0CZAMoA+EECgRMBJUFIAVZBZUFsAXUBgEGdgbVB0wIAAiFCPcJmwnYCmoLEAtCC4oL0gv9DEUMoA2HDjsO0g8/D7QQTRDREWQR+hJKEr0TfhPfFKoVLxWbFgsWmRc/GCEYjBkLGbYasBu7HGcc0h0FHTQdbR22HdUd/h6BHyAfiCAvIK0hLyH7Ip4i9SNUJA0kVSVOJfEmWScGJ6soICjMKSQprSpOK0IsXC0CLXMt4y4KLn0uvi7WL6kwVjBsMIIwmjCyMMcw3DDxMQgxHTE0Mdsx8DIFMhoyMTJHMl0yczKLMqAytTLKMt8y9jMLMyAzNTNKM2EzxTQNNIk1CDWxNeA2KjbjN7U4UTkIOSw5XDnKOrM7WDvtPDQ8ijzgPbc+Kj60P0I/t0ARQIFBCkFIQdxChkMbQ4VDzUPxRGVE4EVRRaBGB0ZwRqxGrEbCRthG7kfHSGlIhkijSS5JrEnpSiNKZErPSuZK/kszS8tMBkxBTOJNbE4DTihOY07OT+ZP/FASUChQQFBWUGxQglCaULBQxlDcUPJRCFEeUTRRfFGlUepSB1I3UlxSpVMAU0dThVO6U9BT5VQeVLBVbVWDVZhWJVbZV0hXjVfxWGhZBFnDWsJa3VuMAAAA8/wBAQEwo7UB9/sw9PP90TD/MDEBAQEBAQEBAQEBMDAuLi7/9Mr/+y8BAf36we8y/fj/8s3yMQHnMjL/Ae7r/Svj///zFNL29fnkAefqAQrz/Ofi///x/wE1MjEk0cT0/vQuygH7Af/yMhQUFBQUFPb5+fn56urq6ufi4uLi4jU1NTXy8v+9/5X/5P///CjQASLyMdEuLvz8Mv/6MS4B//sB4v8wLv//Lv////kBysryzQH/AXr2AQHw/9Hu/yb///4v8rww9vPKAcoBAcHBwcHy8vIyMjLqLS3/LeWX5Pj2LQH/Mf/67tHN8gHm/gGW9zD/AQAAAAABAAEBAAAAAAwArQj9AAgACf/9AAkACv/9AAoAC//9AAsAC//9AAwADP/9ABAAEP/8ABYAFP/8ABcAFv/8ABgAF//7ABkAGP/7ABoAGf/7ABsAGv/6AB8AHf/6ACAAHv/6ACEAH//6ACQAIv/5ACUAI//5ACYAJP/5ACkAJv/4ACoAJ//4ACwAKf/2AC0AK//2ADEALv/2ADIAL//2ADMAL//2ADQAMf/2ADUAMf/2ADYAMv/2ADcAM//1ADgANP/1ADkANf/1ADoANv/1ADsAOP/0ADwAOP/0AD0AOf/0AD4AOv/0AD8AO//0AEAAO//zAEIAPv/yAEMAP//yAEQAQP/yAEUAQP/yAEoARf/xAEsARv/xAE0ASP/wAE8ASf/wAFAAS//wAFEATP/vAFMATf/vAFQATv/vAFUAT//vAFYAT//uAFcAUv/uAFgAUv/uAFkAU//uAFoAU//uAFsAVf/tAF0AV//tAF4AWP/tAF8AWf/tAGIAW//sAGMAXP/sAGQAXf/sAGUAXv/sAGYAX//rAGcAYP/rAGgAYP/rAGkAYf/rAGoAY//rAGsAZP/qAGwAZf/qAG0AZv/qAG4AZ//qAG8AZ//qAHAAaP/pAHEAaf/pAHIAav/pAHMAa//pAHQAbP/pAHUAbf/oAHYAbv/oAHcAb//oAHgAcP/oAHkAcP/oAHoAcf/nAHsAcv/nAHwAdP/nAH0AdP/nAH4Adf/nAH8Adv/mAIAAeP/mAIEAeP/mAIIAef/mAIMAev/mAIQAe//mAIUAfP/lAIYAfP/lAIcAfv/lAIgAfv/lAIkAf//lAIoAgP/kAIsAgf/kAIwAgv/kAI0Ag//kAI4Ahf/kAI8Ahf/jAJAAhv/jAJEAh//jAJIAiP/jAJMAiP/jAJQAif/iAJUAi//hAJYAjP/hAJcAjf/hAJgAjf/hAJsAkP/gAJwAkf/gAJ0Akv/gAJ4Ak//gAJ8AlP/fAKAAlf/fAKEAlf/fAKIAlv/fAKMAmP/eAKQAmf/eAKUAmf/eAKYAmv/eAKcAm//eAKkAnP/dAKoAn//dAKsAn//dAKwAoP/dAK0AoP/cAK4Aov/cAK8Aov/cALAApP/cALEApf/cALIApv/aALMApv/bALQAp//bALUAqP/bALkArP/aALoArf/aAL0AsP/YAL4AsP/ZAL8Asv/ZAMAAs//XAMMAtf/YAMgAuv/XAMkAu//WAMoAvP/VAMsAvf/VAM0Avv/WAM8Awf/UANIAw//VANcAyP/TANgAyf/SANoAy//SAOEA0v/RAOUA1f/QAOgA2P/PAOkA2f/PAOoA2v/PAOwA2//PAO0A3P/PAO4A3f/PAPIA4f/OAPMA4v/OAPYA5f/MAPcA5v/NAPgA5v/NAPwA6v/MAP0A7P/LAABAEh9wL3A/cE9wBBAYEBk/Hj8fBLkBxwFBsgcf9r8CXAAEAB8BFwFwAAgAHwFdsng4H7gBXUANeDgfAEZGAAAAEhEIQEEgAwUCpgBcAA0CkgBcAA0CAgBcAA0B8QBcAA0BzgBcAA0BmABcAA0BjgBcAA0BYgBcAA0BUABcAA0BLgBcAA0BFUASXA03XEZcVlxlXOdcBYdcllwCQSsCmABZAA0CkABZAA0CgQBZAA0CewBZAA0CaQBZAA0CXwBZAA0B5QBZAA0BpQBZAA0BogBZAA0BiQBZAA0CDwBaAA0BlwBaAA0BgABaAA0BYwBaAA0BTkAUWg3qWg3nWg3LWg25Wg2iWg2QWg1BGQKTAFcADQJ9AFcADQJ3AFcADQH5AFcADQHoAFcADQGPAFcADQETAFcADQEQAFcADQEGt1cNz1cNkVcNQRYCbwBYAA0B4wBYAA0B4gBYAA0BhwBYAA0BhABYAA0BVQBYAA0BVABYAA0BJ0ASWA2fWA12WA1nWA1VWA0ACVt9uwEAADAAFgKPsnurH7gCjLKKFR+8AosAewKrAB8CibKKFx9BEQKIALoBmgAfAoUAugQBAB8CgAJ/BAEAHwJ+An8BAQAfAnqyii0fQQ0CeQJ/AFIAHwJ2An8AQwAfAnUCfwA7AB8CdLKKOx+4AnKyil4fuAJusopiH0EJAmYAigKrAB8CYwJ/ABwAHwJcsnDkH0ENAlsAcAEBAB8CWQBmCAEAHwJWAGYEAQAfAgOyihEfuAH8sooWH7gB77KKMB9BEQHuAn8ATAAfAeYAigKrAB8B5ACKAQEAHwHfAn8AFQAfAd6yh54fQRUB3QCHAQEAHwHcAIcBmgAfAdkAcAQBAB8B2ABmCAEAHwHUAGYEAQAfAZ6yihEfuAGdsntWH7gBm7KKEx+8AZQCfwQBAB8Bk7KKJR+4AZGyii4fQQkBjQCKAgEAHwGMAn8AGgAfAWmyig4fuAFksooTH7gBYLKKHh+8AVoCfwBSAB8BV7KK5B9BEQFTAIcBAQAfAVIAhwGaAB8BTQBmAqsAHwFMAGYEAQAfATWyihAfQS8BMAJ/AFYAHwEvAn8AKAAfASsCfwAYAB8BJgBmCAEAHwESAn8AGwAfAQ8AhwQBAB8BDgCHAZoAHwENAGYIAQAfAQUAcgQBAB8BBAJ/BAEAHwECAn8AJgAfAQEAigIBsh//cLgBAbIf/ma4CAGyH+5yQRAIAQAfAO0CfwGaAB8A7AJ/CAEAHwDrAn8EAQAfAOgCf7IYH+a4An+zgBUW5bgCf7MVH+SHuAFWth/ae2wf14q4AquyH9VmuAgBtR/Ie1Ifx7kCfwgBsh/Fh7gEAbIfxGa4CAGyH8NmuAgBtR+7ihIfuEEJAn8EAQAfALcCfwGaAB8AtgJ/skMftbgCf0AQKh+uih4frIdsH6uHnh+eZrgIAbIfnWa4CAGyH5xmuAQBtR+XZrsfjLgCf7NWH4a6uAgBsh+FcLwEAQAfAIICfwFWth99ioEfdXC4BAGyH2xwuAKrsh9lZroIAQAfAWZACYoQH1UbCRsJkL4C2QAHAJAC1AAHAJABWEBRB5DcB5CmB5CSB5CIB5B8B5B5B5BtB5BpB5BkB5BiB5BhByQIIgggCB4IHAgaCBgIFggUCBIIEAgOCAwICggICAYIBAgCCAAIGAIBCAIASgB3uQMFAAEBc0uwwGMAS2IgsPZTI7gBClFasAUjQgGwEksAS1RCGLkAAQH/hY0Wdj8YPxJLU1i5ABT/4EAqAAABABQWAAABABYGEAAAAQAGBAAAAQAEEAAAAQAQAgAAAQACAAAAAQAAPhE5RkQ+ETlGRD4ROUZEPhE5RkQ+ETlGYEQ+ETlGRD4ROUZgRFkrKysrKysrKysrKysrKysrKysrGCsrKysrKysrKysrKysrAUtQeb8AHwK3AAcAHwILAAcAHwEUswcffgcrKysrS1N5vwCQArcABwCQAgsABwCQARSzB5B+BysrKysYHbCWS1NYsKodWbAyS1NYsP8dWUuwVVMgXFi5AwcDBUVEuQMGAwVFRFlYuQINAwdFUli5AwcCDURZWUuwVVMgXFi5AGgDB0VEuQByAwdFRFlYuQIKAGhFUli5AGgCCkRZWUuwVVMgXFi5AG8DBkVEuQB7AwZFRFlYuQIsAG9FUli5AG8CLERZWUu4BAFTIFxYsbpvRUSxb29FRFlYuRpAALpFUli5ALoaQERZWUu4BAFTIFxYuQJ/AGhFRLFoaEVEWVi5GKACf0VSWLkCfxigRFlZARhLsCVTWLoDcAAhA3BFi0RZS7BkU1i6A3AAYQNwRYtEWbF7b7gDcEVoI0VgREuwKFNYugNxACEDcUWLRFlLsG5TWLoDcQBhA3FFi0RZsXJouANxRWgjRWBES7AYUyBcWLFmZkVEsYpmRURZWLEsZkVSWLFmLERZWUuwPlMgXFixZmZFRLGHZkUhIVlYsXRmRVJYsWZ0ISFZWUu4AQFTIFxYsWZmRUSxcGZFISFZWLkB6ABmRVJYuQBmAeghIVlZACsBKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK2VCKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytzdCsrKysrKysrKysruQBrASKxc8BFZSNFYCNFZWAjRWCwi3ZoGLCAYiAguQBzASJFZSNFILADJmBiY2ggsAMmYWW4ASIjZUSwcyNEILFrwEVlI0UgsAMmYGJjaCCwAyZhZbDAI2VEsGsjRLEAwEVUWLHAQGVEsmtAa0UjYURZuQB4ASOxbpRFZSNFYCNFZWAjRWCwiXZoGLCAYiAguQBuASNFZSNFILADJmBiY2ggsAMmYWW4ASMjZUSwbiNEILF4lEVlI0UgsAMmYGJjaCCwAyZhZbCUI2VEsHgjRLEAlEVUWLGUQGVEsnhAeEUjYURZAUVpU0IBS1BYsQgAQllDXFixCABCWbMCCwoSQ1hgGyFZQhYQcD6wEkNYuTshGH4bugQAAagACytZsAwjQrANI0KwEkNYuS1BLUEbugQABAAACytZsA4jQrAPI0KwEkNYuRh+OyEbugGoBAAACytZsBAjQrARI0IBKysrKysAc3UAsAJFaLgDTEVosECLYLAgI0SwBkVouANNRWhgsCIjRLAARWi4A09FaGC4A04jRAAAAEA0NDMxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBACxFI0ZgILAmYLAEJiNISC0sRSNGI2EgsCZhsAQmI0hILSxFI0ZgsCBhILBGYLAEJiNISC0sRSNGI2GwIGAgsCZhsCBhsAQmI0hILSxFI0ZgsEBhILBmYLAEJiNISC0sRSNGI2GwQGAgsCZhsEBhsAQmI0hILSwBECA8ADwtLCBFIyCwzUQjILgBWlFYIyCwjUQjWSCw7VFYIyCwTUQjWSCwBCZRWCMgsA1EI1khIS0sICBFGGhEILABYCBFsEZ2aIpFYEQtLAGxCwpDI0NlCi0sALEKC0MjQwstLACwRiNwsQFGPgGwRiNwsQJGRTqxAgAIDS0sRbBKI0RFsEkjRC0sIEWwAyVFYWSwUFFYRUQbISFZLSywAUNjI2KwACNCsA8rLSwgRbAAQ2BELSwBsAZDsAdDZQotLCBpsEBhsACLILEswIqMuBAAYmArDGQjZGFcWLADYVktLEWwESuwRyNEsEd65BgtLLgBplRYsAlDuAEAVFi5AEr/gLFJgEREWVktLIoDRYqKh7ARK7BHI0SwR3rkGC0sLSxLUlghRUQbI0WMILADJUVSWEQbISFZWS0sARgvLSwgsAMlRbBJI0RFsEojREVlI0UgsAMlYGogsAkjQiNoimpgYSCwGoqwAFJ5IbIaSkC5/+AASkUgilRYIyGwPxsjWWFEHLEUAIpSebNJQCBJRSCKVFgjIbA/GyNZYUQtLLEQEUMjQwstLLEOD0MjQwstLLEMDUMjQwstLLEMDUMjQ2ULLSyxDg9DI0NlCy0ssRARQyNDZQstLEtSWEVEGyEhWS0sASCwAyUjSbBAYLAgYyCwAFJYI7ACJTgjsAIlZTgAimM4GyEhISEhWQEtLEVpsAlDYIoQOi0sAbAFJRAjIIr1ALABYCPt7C0sAbAFJRAjIIr1ALABYSPt7C0sAbAGJRD1AO3sLSwgsAFgARAgPAA8LSwgsAFhARAgPAA8LSywKyuwKiotLACwB0OwBkMLLSw+sCoqLSw1LSx2sEsjcBAgsEtFILAAUFiwAWFZOi8YLSwhIQxkI2SLuEAAYi0sIbCAUVgMZCNki7ggAGIbsgBALytZsAJgLSwhsMBRWAxkI2SLuBVVYhuyAIAvK1mwAmAtLAxkI2SLuEAAYmAjIS0stAABAAAAFbAIJrAIJrAIJrAIJg8QFhNFaDqwARYtLLQAAQAAABWwCCawCCawCCawCCYPEBYTRWhlOrABFi0sdkYjRmCKikYjIEaKYIphuP+AYiMgECMgsABQWLABYbj/wIsbsECMWWgBOhgtLLAzK7AqKi0ABisAGQXIACUFyAAmBD4AGQAA/9sAAP/nAAD/2/51/+gGKwAA/tgAAALb/+kF1gAXAtj/6QXWABcAAP/pAvwAFwZEAAAFAwAAAAAAAP///////////////////////////////wKzAoIAAAAAAAAAAAAA/lACBgIGAlAGUAAAAh8CHwJpBNL///////8AyAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPQBQAQMAPgEDALkAbgC5AAAAAACUAFAAwgDW/7ABdwA+AD0APgDFAGsEPgDkAEYCJQBjANIAQwB7ANEAaQCUAEMAbwAEAN4BQwAAAN4CKwBvAN4BAwAmAEMAvwTS/2wAQQDTAFYAYgBvAH8AlACtCAD/ngCUALMA2AFBAYv/nQAFABMAMgBpAG8AAAAGAD0APgA+AFAAUABoAI8AlwCtARwBVQGLAh//hABjAGMAaQB7AMX/1QAAAAEAKwBjAIgAlACmAMAAwwDPANIA9wKzA0cD1f9O/5gAAAAEAD4APgBWAJQAxgD3BcgAAAB6AK0AuQC/ASYBTQTe/yIAAQAZAD4AdQCCAKcA0gDxAbABvAIGAh8DeAABABIAJQAyAFAAYwBjAGkAbwCtAL8AxQDGAMoA0ADxAPcBKAFBAU0B1QJEApoESv3h/nUABgArACsANwA+AEsAbwB7AI8AoADFAM8BWAGLAh8CHwOC/8IAIgA+AFEAVgBfAHUAeAB7AIwAmAC/AWUBgwGjAcgCgQMhA2ADcgPbBLAGEv8c/0f/owAeAD4APgBKAFAAUgBvAHMAewB9AJEArQC5AN4A5AEDAQcBCwFZAXgBiwHUAiIClAL3Aw8EPgVm/e3+sv7k/y7/NP/oABYAGQAlACcAMgA9AEAARQBJAFMAVgBbAF4AaQB8AIcAiACdAKAArACxALkAuQC5AL8AxQDGANYA6gDsAPMBAwEDAQkBEgEcAR0BTAHnAgYCGQJzAuQDFgMuA1MDsAQABEoFZgX0BvD+I/8E/2b/sAANABAAFAAXACIAPgBCAFAAUABQAGwAbwB5AIIAgwCMAKQApwCsALQAtwDFAMsA0gDSANIA0gDdAOsA9AD2APoBHAEiASgBLgFBAUEBXAFkAWQBhAGLAYsBjAGXAbQBvAG+AdsB2wHoAh8CHwIfAj4CaQKaAxIDOwOCA+UEEQQrBMYE3gT3BUEFpQbMBwn+zP8v/4X/p//fAAEAAwAGABEAEwAbACUAMQA6ADsAPAA+AD4APgBDAEYATABbAF4AYwBjAGkAaQBvAG8AdwB+AIIAjACPAI8AlACgAKAApwCqAKoArQCwALkAuQDFAMkAzADPAM8A1ADYANwA3wDkAOkA6gDtAPEA9QD4AQUBCwEOASgBKAE0AUABQQFOAU4BUwFXAVkBWQFyAXIBiwGLAaABpwGwAdUB5QHnAesB7gIEAg0CEgISAhQCGQIZAiUCKwIrAlACaQJpAnICcwJ1ArMDRwNgA7YD9AQABAAEdATeBRIFGQU7BcgF1AXtBkcGeAaCCAD8Zv2X/aT91f3i/fT+Wf6R/pj+s/9w/3v/4AAAAAEAAgAHAAwAGAAmADUAOwA8AD0APgBCAEsATABbAFsAXgBlAG8AdgB7AHsAfACCAIcAiACNAJAAkgCUAJQAlACUAJQAlACVAJoAogCiAKYAqACoAKwArQCwALkAvQC9AMUAxQDGAMYAzQDNANIA0gDSANcA2gDfAOEA5ADkAOoA6gDvAO8A8AD2APgA/wEMAQ8BEQEYASUBKAEoASgBLwEyATQBQQFBAUcBTQFSAVYBWQFoAWwBbwF5AX4BfwGLAZcBowGnAbYBvAG8Ab4ByQHYAdsB6AHvAgwCHgIjAjECSgJQAlUCVgJpAm8CbwKEAo4CkgKnArMCwALAAuQC7ALxAw4DIgMkA0gDZAN4A4QDmgO2A8kDygPnBAwEDAQNBF0EZARkBHEEcQSCBLMEvwS/BNIE0wTeBO4E8QUABTQFRwVmBZcFzQXeBfoF+gYSBhMGWwa/BwkHIgcqBy4HUwdTB2YHggeFCAAIBgDIANQAxwAAAAAAAAAAAAAAAAAA/4UAtwB9AHgArAEcAHgAQwGfAJQAAgABAh8BOQU0ArAAEgFoARAAxQPLA3gA8wCDA3gAKwCPAKoBOwTFAOoAzAB5AIYBlwKzA0EAjAD3AcgAaABoAHwA9gILAl8CQACQARUA6wEoAZ8BdgElAPUAvwC4A50DIgKNAwwAfADFBo4AYwClAeICBgRWAbwAfQJUAjwCSgPiAOoC5ALkAnkBvgGgASAC5AHSAtgDNgHkARwAUgSKASkDAAAMAAwAJQGHAy4ADAAMAYUEeAQ+BL4ALQN3ARwAeAQAAIAAAAAAAAAAAAJvAAACHwCtAxYAewTe//oE3gC/BWYAFgWFACUB7QB7AogAYwKIAFYDwgBZBN4AUAIfAJQCmgBjAh8AlAQZAAQE3gBpBN4A8QTeAKAE3gC5BN4APgTeAOoE3gB7BN4AzwTeAH4E3gB1Ah8AlAIfAJQE3gBQBN4AUATeAFAD2ABZBv0AWgX0AAAE4AArBZAAaQYlACsEiAArBGMAKwXbAGkGLAArApoAKwNgAAwFqgArBHUAKwbiACsGAwArBjcAaQSVACsGOQBpBW4AKwRWAHcFTQArBcAAEAWXAAAHZgAABUEAAAVsAAAFDwByAogArQQZAAUCiABQBN4AUAQAAGME0gFvBFgAZATk/+cEEgBjBSIAbwQ9AGMDOwA+BJEAQQUPACUCdQAlAsX/tgTMACUCggAlB5EAJQUPACUE0gBjBSIAJQTxAG8DhQAlBAgAiwMiAFYFDwAABF0AAAZdAAEEdf/+BGkAAATEAIgCvwAxAe0AswK/AGME3gBQBfQAAAX0//4FkABpBIgAKwYDACsGNwBpBcAAEARYAGQEWABkBFgAZARYAGQEWABkBFgAZAQSAGMEPQBjBD0AYwQ9AGMEPQBjAnUAJQJ1ACICdf/bAnUADAUPACUE0gBjBNIAYwTSAGME0gBjBNIAYwUPAAAFDwAABQ8AAAUPAAAE3gC/AhMAXQTeAKcE3gD9BN4ArQTeAdsE3gBWBOoAJQTeAK0G2ABjBzsAHwTSAacE0gFNBN4AUAdZ//4GNwBpBr8AewTeAFAE3gBQBN4AUATe/+AFAwAABN4ApgVcAEYGLAArBm0AUQTeAPIDbABEA2wARAafAGkGoQBkBNIAYwPYAGACHwCtBN4AUAWwAGIE3gDrBN4AUAYxAGQEPgBjBD4AewgAAPME3gAABfQAAAX0AAAGNwBpCBwAaQdEAGMEAABjCAAAbwOqAJQDqgCUAh8AlAIfAJQE3gBQBN4AUARpAAAFbAAAAEr9tgTd//QCtwBjArcAewVBAD4FTQA+BN4AvwTeAgYCHwCUA6oAlAgxABYF9AAABIgAKwX0AAAEiAArBIgAKwKaACsCmgAAApoAKwKaACsGNwBpBjcAaQY3AGkFwAAQBcAAEAXAABACdQAlBNIBHATSAR0E0gFNBNIBHATSAgYE0gHIBNIB8ATSAWsE0gHrBNIBHARWAHcECACLAe0AswYlABMExQBjBWwAAARpAAAElQArBSIAJQTeAFADOwCiAzsAegM7AIgG2ACIBtgAvgbYAHACmgBjBN4AXwAAAB8AAAD4CQoEAAMDAwQGBQYGAgMDBQYDAwMFBQUFBQUFBQUFBQMDBgYGBAgGBgcHBQUHBwMEBgUIBwgFCAYFBQcGCQYHBwMFAwYFBQUGBQUFBAUFAgMGAggFBgUFAwQEBQUHBQUFBAMDBgYHBwUHCAcFBQUFBQUFBQUFBQICAgIFBgYGBgYFBQUFBQQGBgYFBwUJCAoFBgUICAgGBgYHBQYGBwgFBAQHBwYEAwYGBQYHBQUJBQYGCAkIBQkFBQICBgYFBwEFAwMGBgUGAwUJBgUGBQUDAwMDCAgIBwcHAgYHBgYGBwYIBgYFBAMHBgcFBQUFBAMECAcIAwUAAAAKCgUAAwMDBAcGCAcCAwMFBgMDAwUGBgYGBgYGBgYGAwMGBgYFCQcGCAgGBQgHAwQHBQgHCQUJBwUHBwcJBwcHAwYDCAUGBgcGBwYEBgYDAwYDCQYHBwcEBgQGBQkGBgYEAwQGBwcIBgcJBwYGBgYGBgYGBgYGAwMDAwYHBwcHBwYGBgYHBAYGBgYHBgkJCgYGBgkJCAYGBgYGBgcHCAYEBQkIBwUDBgcGBggFBQkGBwcJCgkFCgUFAwMGBgYHAQYDAwYGBwYDBQoHBgcGBgMDAwMJCQkHBwcDBgcGBgYIBwcGBgUGAwgHBwYFBwYEBAQICAkDBgAAAAsMBQADAwMEBwcICAIDAwUIAwQDBgcHBwcHBwcHBwcDAwcHBwUKCQcICQYGCAgDBAgGCQgJBgkHBgcICAkHBwgDBgMIBQYGBwcHBwUGBwMEBwMLBwcHBwQGBAcGCQYGBwQDBAcJCAgGCAkIBgYGBgYGBwcHBwcDAwMDBwcHBwcHBwcHBwcEBwYHBwgGCQkKBgcHCgkJCAcHBgcHCAgJBwUFCgkIBQMHBwcHCAUFDAcJCQkLCgULBgUDAwgGBgcABwMDBwcHBwMFCgkGCQYGAwMDAwkJCQgICAMHBwcHBwgHCAcHBgYDCQgHBgYHBwUEBAkJCQQHAAAADAwGAAQEAwQHBwgIAgQEBQgDBAMGBwcHBwcHBwcHBwMDBwcHBgoJBwkJBwcJCAMECAYKCAoGCggHCAgICwgICAMGBAgGCAcIBwgHBQcHAwQHAwsHCAgIBQcFBwcJBwYIBAMEBwkJCQcICggHBwcHBwcHBwcHBwMDAwMHCAgICAgHBwcHBwQHCAcHCAcJCgwIBwcLCgoIBwcGBwcICQoIBQUKCggGAwcICAcJBQUMBwkJCgwLBgwFBQMDCAgGCAAHAwMICAcHAwUMCQcJBwcDAwMDCgoKCAgIAwcHBwcHCAgIBwcHBwMJCAgGBggHBQUFCwsKBAcAAAANDQcABAQDBQgICQkDBAQHCAMEAwcICAgICAgICAgIAwMICAgGCwkICgoHBwoIAwUJBwoJCwcLCAcICggMCQkJBAcEBgYIBwgHCAgGBwgDBQgDCwgJCAgFBwUIBwsHBwgEAwQICQoKBwkLCgcHBwcHBwcICAgIAwMDAwgJCQkJCQgICAgHBAcIBwgJCAkLDQgHCAwLCwgICAgICAkJCwgGBgoLCQYDCAkICAoFBQwICQkLDQwGDQUFAwMICAcJAggDAwkJBwgDBQ0JBwkHBwMDAwMLCwsKCgoDCAgICAgJCAgICAcHAwoJCQcHCAgFBQULCwsECAAAAA4OBwAEBAMFCAkJCgMEBAcIAwQDBwkJCQkJCQkJCQkDAwgICAYMCwkKCwgICgsFBwoIDQsLCAsKCAoKCQwJCQkFBwUIBwgICQgKCAYICAUFCAUNCAkJCQUHBQkICwgICAQDBAgLCgoICwsKCAgICAgICAgICAgFBQUFCAkJCQkJCQkJCQgECQgJCAkICgwNCAkJDQsMCAgICAkICQoLCQYGCgwJBgMICQgICgUGDAkLCwsODQcOBQUEBAgICAkACQQECQkICAMFDgsICwgIBQUFBQsLCwoKCgUJCQkJCAkJCQkJCAcDCwkJCAgJCQYGBgwMDAQJAAAADxAIAAUFBAUICQkKAwQEBwoDBAMICQkJCQkJCQkJCQMDCQkJBw0LCgsMCQgMCwUHCwgODAwJDAsICgsJDQoJCgUIBQgHCQgJCAoJBgkJBQUJBQ0JCgkJBggGCgcMCAgJBAQECQsLCwkMDAsICAgICAgICQkJCQUFBQUJCgoKCgoKCgoKCAQJCQkJCgkKDA4JCQkNDA0KCQkICgoKCgwJBgYKDAoHBAkKCQkLBgYPCQsLDA8OBw8FBQQECAoICQAJBAQKCggJAwUQCwkLCQkFBQUFDAwMCwsLBQkJCQkJCgkLCQkICAQMCgkICQkJBgYGDQ0NBAkAAAAQEAgABQUEBQkKCwsDBAQHCgMFAwgKCgoKCgoKCgoKAwMJCQkHDgwKCw0JCQwMBQcMCQ4MDQkNCwkKCwoNCwoKBQgFCAcJCQoJCwkHCQkFBgoFDQkKCgoGCAYKBw0JCAkEBAQJDAwLCQwNCwkJCQkJCQkJCQkJBQUFBQkKCgoKCgoKCgoKBAoKCgkLCQoNDgkJCg4NDgoJCQgKCgsLDQoHBwwNCgcECQsJCQwICA8KDAwNEA8HEAUFBAQKCggKAQoFBQsLCgkDBRAMCQwJCQUFBQUNDQ0LCwsFCQkKCQkKCgsKCQkIBAwKCggJCgoGBgYNDg4FCgAAABESCAAFBQUHCgoLDAQFBQcKBAUECQoKCgoKCgoKCgoEBAoKCggODAoMDQoJDQ4GBwwJDw0NCQ0MCQsMDBALDAsGCgYKCAoJCgkLCQcKCwYGCgYSCwsLCwgJBwsKDQkKCgUFBQoMDQwKDQ0MCQkJCQkJCQkJCQkGBgYGCwsLCwsLCwsLCwsECgoKCgsMCg4QCwwKDw0OCgoKCwsKCw4NCgcHDw4LCAUKDAoKDAsLEgoMDA0RDwgRBwcFBQsKCgwBCgcHCwsLCwQHEQwKDAoKBgYGBg0NDQwMDAYLCwsLCwsLCwsLCQkFDQsMCgkLCggHBw8ODgUKAAAAEhMJAAUFBQcLCwsNBAUGCAoFBgUJCwsLCwsLCwsLCwUFCwsLCRAOCw0OCgoODgYHDQoPDQ4KDgwKDQ0NEAwMCwYKBgoJCwoLCQwKBwoMBgYLBhIMCwwMCAkHDAoOCgoLBwUHCw4NDQoNDg0KCgoKCgoJCgoKCgYGBgYMCwsLCwsMDAwMCwUKCwsLCwwLEBELDAsQDg8KCwsLDAsMDg4LCAgPDwsIBQsNCgsOCwsSCw4ODhIQCRIICAUFCwoKDAALBwcMDAsLBQgTDgoOCgoGBgYGDg4ODQ0NBgsLCwsLCwsLDAsKCQUOCwwKCgwLCAcHDw8PBgsAAAATFQkABgYFBwsMCw4EBQYKDAUGBQoMDAwMDAwMDAwMBQULCwsJEQ4LDQ4LCg4PBggNChAODwoPDQoNDg0QDA0MBgsGCgoLCwsKDAoHCwwGBwsGEgwMDAwJCQcMCg8LCgwHBQcLDg4NCw4PDgsLCwsLCwoKCgoKBgYGBgwMDAwMDAwMDAwLBQwMCwwLDAwQEgsMDBEPEAwLCwsMCw0PDwwICA8QDAgFCw4MCw8LCxUMDg4PExEKEwgIBQULDAoNAQwHBwwMCwwFCBMOCw4LCwYGBgYPDw8ODg4GCwsLCwwMDAsMCwoJBQ4MDQoKDAwICAgQEBAGDAAAABQVCgAGBgUHDAwLDgQHBwoNBQcFCgwMDAwMDAwMDAwFBQ0NDQoSDg0OEAsLDxEICg8MExAQDBAOCw0ODhINDgwGCwcLCgwLDQoNCwgLDQYHDAYUDQwNDQkKCA0LEQsLDAcFBw0ODw4LEBAOCwsLCwsLCgsLCwsGBgYGDQwMDAwMDQ0NDQwFDAwMDA0NDREUDA0MEhAQDQ0NDQ0MDg8QDQkJDxEMCgUNDwwNEAsLFQwODhAUEgoUCAgFBQ4NCw4BDAcHDg4MDAUIFA4LDgsLCAgICBAQEA4ODgYNDQ0NDAwMDA0NCwoFDwwOCwwNDAkICBEREgcMAAAAFRYLAAYGBgkNDQ8PBQcHCg0FBwULDQ0NDQ0NDQ0NDQUFDQ0NChIQDQ4RDAwPEQgKEAwTERAMEA8LDQ8PFA4ODQcMBw0KDQsNCw0LCQwNBgcNBhQNDQ0NCQoIDQwRDAwNBwYIDRAQDgwREA8LCwsLCwsLCwsLCwYGBgYNDQ0NDQ0NDQ0NDAYNDQ0NDQ0NEhUNDQ0TEBINDQ0NDQ0PDxANCQoPEQ0KBg0PDQ0QCwsVDRAQEBUTChUJCgYGDg0MDgANBwcODgwNBQoWEAwQDAwICAgIEBAQDw8PBg0NDQ0NDQ0NDQ0LCgYQDQ4MDA0NCQkIERISBw0AAAAWFgsABwcGCQ0NEQ8FBwcKDQUHBQsNDQ0NDQ0NDQ0NBQUODg4KEw8ODxEMDBASCAoQDBQREQ0RDwwPDw8UDg4OBwwHDQsNDA4LDgwJDQ4GCA0GFA4NDg4KCgkODBEMDA0HBggODxAPDBERDwwMDAwMDAsMDAwMBgYGBg4NDQ0NDQ4ODg4OBg0ODQ0ODg0TFQ0NDRQREw0ODg0ODg8REg4JChESDQoGDhANDhELCxUNDw8RFhQLFgkKBgYODQwOAA0HBw8PDg0FChYPDA8MDAgICAgREREPDw8GDQ0NDQ0NDQ4ODQwKBhENDgwNDg0JCQkTEhMHDQAAABcYDAAHBwYJDQ4SEAUHBwoNBQcFDA4ODg4ODg4ODg4FBQ4ODgsUEQ4PEg0NEBIIChENFRISDRIQDA8RERUPDw8HDAcNCw4MDgsPDAkNEAgIDggWEA4PDwsMCRANEg0NDggGCA4REQ8NEhIRDAwMDAwMCwwMDAwICAgIEA4ODg4OEBAQEA4GDQ4ODQ4PDhMVDg0OFRIUDQ4ODRAOEBETDgoKERMOCwYOEQ4OEgsLFg4RERIXFQsXCQoGBg4PDQ8BDgcHDw8ODgUKGBENEQ0NCAgICBISEhEREQgNDQ4NDg4ODg4NDAwGEQ4PDQ0PDgkJCRQUFAcOAAAAGBoMAAcHBgkPDxIRBQcHDA8FCAUMDw8PDw8PDw8PDwUFDw8PCxUSDxASDg0REggLEQ4VExIPEhENDxIRFxAQDwgNCA0MDg0PDBAMCg4QCAgOCBgQDhAQCwwJEA0TDQ0OCAYIDxISEA4TEhINDQ0NDQ0MDAwMDAgICAgQDg4ODg4QEBAQDgYODw4ODg8OFBYODw8XEhQPDw8PEA8QERQPCgsSFA4LBg8RDg8SDA0YDxISEhkWDBgJCgYGDg8NEAIPCAkPDw4OBQoaEg4SDg4ICAgIEhISEhISCA8PDw8ODw8PDw8NDAYSDhANDxAPCgkKFBQUCA8AAAAbHA0ACAgICw8QEhIGCQkMEAcIBw4QEBAQEBAQEBAQBwcQEBAMFxQRFBUPDxUVCQsTEBcUFhAWEg8SExMaEhMSCQ4JEQ0QDxANEQ4KDxIJCRAJGxIQEREMDQsSDxUPDxAJBwkQFBQUDxQWEw8PDw8PDw0ODg4OCQkJCRIQEBAQEBISEhIQBxAQEBAQEhEWGhASEBkWFxAQEBISERIVFhEMDBYWEAwIEBMQEBQODhwQFBQWHBkNGwwMBwcREQ8TARAJCRIS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ZnR3YXJlIFB1Ymxpc2hlcnMgQ0GCEAPHjzfbkijfPLsarYL6ZxAwIQYDVR0EAQH/BBcwFDAOMAwGCisGAQQBgjcCARYDAgeAADANBgNVHQoEBjAEAwIGQDCCBDYGCisGAQQBgjcCAQoBAf8EggQjMIIEH6ApgCdodHRwczovL3d3dy52ZXJpc2lnbi5jb20vcmVwb3NpdG9yeS9DUFOhggO4gYIDtFRoaXMgY2VydGlmaWNhdGUgaW5jb3Jwb3JhdGVzIGJ5IHJlZmVyZW5jZSwgYW5kIGl0cyB1c2UgaXMgc3RyaWN0bHkKc3ViamVjdCB0bywgdGhlIFZlcmlTaWduIENlcnRpZmljYXRpb24gUHJhY3RpY2UgU3RhdGVtZW50IChDUFMpCnZlcnNpb24gMS4wLCBhdmFpbGFibGUgaW4gdGhlIFZlcmlTaWduIHJlcG9zaXRvcnkgYXQ6Cmh0dHBzOi8vd3d3LnZlcmlzaWduLmNvbTsgYnkgRS1tYWlsIGF0IENQUy1yZXF1ZXN0c0B2ZXJpc2lnbi5jb207IG9yCmJ5IG1haWwgYXQgVmVyaVNpZ24sIEluYy4sIDI1OTMgQ29hc3QgQXZlLiwgTW91bnRhaW4gVmlldywgQ0EgOTQwNDMKVVNBIENvcHlyaWdodCAoYykxOTk2IFZlcmlTaWduLCBJbmMuICBBbGwgUmlnaHRzIFJlc2VydmVkLiBDRVJUQUlOCldBUlJBTlRJRVMgRElTQ0xBSU1FRCBBTkQgTElBQklMSVRZIExJTUlURUQuCgpXQVJOSU5HOiBUSEUgVVNFIE9GIFRISVMgQ0VSVElGSUNBVEUgSVMgU1RSSUNUTFkgU1VCSkVDVCBUTyBUSEUKVkVSSVNJR04gQ0VSVElGSUNBVElPTiBQUkFDVElDRSBTVEFURU1FTlQuICBUSEUgSVNTVUlORyBBVVRIT1JJVFkKRElTQ0xBSU1TIENFUlRBSU4gSU1QTElFRCBBTkQgRVhQUkVTUyBXQVJSQU5USUVTLCBJTkNMVURJTkcgV0FSUkFOVElFUwpPRiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsIEFORCBXSUxMIE5PVApCRSBMSUFCTEUgRk9SIENPTlNFUVVFTlRJQUwsIFBVTklUSVZFLCBBTkQgQ0VSVEFJTiBPVEhFUiBEQU1BR0VTLiBTRUUKVEhFIENQUyBGT1IgREVUQUlMUy4KCkNvbnRlbnRzIG9mIHRoZSBWZXJpU2lnbiByZWdpc3RlcmVkIG5vbnZlcmlmaWVkU3ViamVjdEF0dHJpYnV0ZXMKZXh0ZW5zaW9uIHZhbHVlIHNoYWxsIG5vdCBiZSBjb25zaWRlcmVkIGFzIGFjY3VyYXRlIGluZm9ybWF0aW9uCnZhbGlkYXRlZCBieSB0aGUgSUEuCqM2gDRodHRwczovL3d3dy52ZXJpc2lnbi5jb20vcmVwb3NpdG9yeS92ZXJpc2lnbmxvZ28uZ2lmMDYGA1UdAwQvMC0wK6ApoCeGJWh0dHA6Ly9zdGF0dXMudmVyaXNpZ24uY29tL2NsYXNzMS5jcmwwFgYKKwYBBAGCNwIBGwQIMAYBAf8BAf8wDQYJKoZIhvcNAQECBQADgYEAVdeYzVRK/DDttNHU+AHMqo0W9+dx8Upw+Fw4LhXkRg/2UkKup94AbXJhNGbEVcVVwdC8WwFNoxLyP5yYxGxRXjffnq1AcIg8AOqoPAwq8S5vqu/qbX+Hneyamxo4s65s5EscT+BYHM7dEbXYl/5RgvzW7OnO4ZZeIb324dyselgxggOxMIIDrQIBATB1MGExETAPBgNVBAcTCEludGVybmV0MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEzMDEGA1UECxMqVmVyaVNpZ24gQ29tbWVyY2lhbCBTb2Z0d2FyZSBQdWJsaXNoZXJzIENBAhBVDYj1P2QW1wxzANhFkhY0MAwGCCqGSIb3DQIFBQCggbwwGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARYwHwYJKoZIhvcNAQkEMRIEEKPx/KtGw/9WMC9aLj/IyIUwYAYKKwYBBAGCNwIBDDFSMFCgJoAkAEwAdQBjAGkAZABhACAAQgByAGkAZwBoAHQAIABGAG8AbgB0oSaAJGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS90eXBvZ3JhcGh5IDANBgkqhkiG9w0BAQEFAASBgJW+V93kDYF0kxFe5wB+nGUmTdnHA4Zrxl5UyV+YDyuN90k3H1dUq/A2/5svPgmi5jZY0iw2JI52vVsc8pLb1xCsuTAx9/ocCOzhVz7VjMPhc29INopUXZElSBKDMNuCY5uWVvhpWQr044VaXWm4pAcon10kk5f7p+Zdlqi4yVUHoYIB0DCCAcwGCSqGSIb3DQEJBjGCAb0wggG5AgEBMIG4MIGeMR8wHQYDVQQKExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMRcwFQYDVQQLEw5WZXJpU2lnbiwgSW5jLjEsMCoGA1UECxMjVmVyaVNpZ24gVGltZSBTdGFtcGluZyBTZXJ2aWNlIFJvb3QxNDAyBgNVBAsTK05PIExJQUJJTElUWSBBQ0NFUFRFRCwgKGMpOTcgVmVyaVNpZ24sIEluYy4CFQC9EZraQ+0h+0ZYhInKRoiQJe4UYDAMBggqhkiG9w0CBQUAoFkwGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNOTkxMDI3MTcyNjMxWjAfBgkqhkiG9w0BCQQxEgQQMgukZJYxNIrBmIEKyNhFATANBgkqhkiG9w0BAQEFAASBgH8EoMURkbH3K+asFqflfcxyEDKkOMXLYDa06AIFf7JxGYCa0i1b4X+ew2WAVlvvTC8EfqyYB210TVK6k+yMzYQLVGvlZ9duPG8o+Yqqkf8pqGJEOfxWCXI5Q8ApU6cDfFJQl2Fk2zAuytAgFVkep4ULvxPfeALJ/t/AmVDrTJzRAAA=';


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 34401:
/*!******************************************************!*\
  !*** ./src/assets/fonts/Roboto/robotoBoldItallic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Roboto": () => (/* binding */ Roboto)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 66809);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_0__);

var Roboto = 'AAEAAAAOAIAAAwBgRFNJRyLfX5gAANdYAAAU8E9TLzJH837dAAABaAAAAFZjbWFwHQ62QwAAB+wAAAMuY3Z0ICsXK9IAAA78AAAA/mZwZ21EAZeKAAANhAAAAXZnbHlmqSUhswAAE8wAAMFqaGVhZMYQQFEAAADsAAAANmhoZWEORQXpAAABJAAAACRobXR4Dow0HgAAD/wAAAPQbG9jYZLqZIwAAAscAAAB6m1heHAEPQJIAAABSAAAACBuYW1lmptERwAAAcAAAAYscG9zdOz7/kgAANU4AAACH3ByZXBvZiOqAAANCAAAAHoAAQAAAAGCjwSZoZxfDzz1AAsIAAAAAACsPovtAAAAALPe52b+h/4CCEwHbwAAAAkAAgAAAAAAAAABAAAHb/4CAAAIav6H/ogITAABAAAAAAAAAAAAAAAAAAAA9AABAAAA9ACgAAkAlgAJAAIAEAATADgAAALsAPwAAgABAAEDXgGQAAUACAV4BXgAAAEsBXgFeAAAAyAAZgIwBAMEAgYFBgMDAwICAAAAAwAAAAAAAAAAAAAAAE1UICAAQAAg8AIFnP4UAQcHbwH+IAAAAQAAAAAAAAAAACgB5gABAAAAAAAAAGAAAAABAAAAAAABABEAYAABAAAAAAACAAcAcQABAAAAAAADABwAeAABAAAAAAAEABEAlAABAAAAAAAFAAwApQABAAAAAAAGABAAsQABAAAAAAAHAD8AwQADAAEEAwACAAwBAAADAAEEBQACABABDAADAAEEBgACAAwBHAADAAEEBwACABABKAADAAEECAACABABOAADAAEECQAAAMABSAADAAEECQABACICCAADAAEECQACAA4CKgADAAEECQADADgCOAADAAEECQAEACICcAADAAEECQAFABgCkgADAAEECQAGACACqgADAAEECQAHAH4CygADAAEECgACAAwDSAADAAEECwACABADVAADAAEEDAACAAwDZAADAAEEDgACAAwDcAADAAEEEAACAA4DfAADAAEEEwACABIDigADAAEEFAACAAwDnAADAAEEFQACABADqAADAAEEFgACAAwDuAADAAEEGQACAA4DxAADAAEEGwACABAD0gADAAEEHQACAAwD4gADAAEEHwACAAwD7gADAAEEJAACAA4D+gADAAEELQACAA4ECAADAAEICgACAAwEFgADAAEIFgACAAwEIgADAAEMCgACAAwELgADAAEMDAACAAwEOkRlc2lnbiBhbmQgZGF0YSBieSBUaGUgTW9ub3R5cGUgQ29ycG9yYXRpb24uIKkgMTk5My4gTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBhbGwgcmlnaHRzIHJlc2VydmVkLkltcHJpbnQgTVQgU2hhZG93UmVndWxhck1vbm90eXBlIC0gSW1wcmludCBNVCBTaGFkb3dJbXByaW50IE1UIFNoYWRvd1ZlcnNpb24gMS41MUltcHJpbnRNVC1TaGFkb3dJbXByaW50qCBpcyBhIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mIFRoZSBNb25vdHlwZSBDb3Jwb3JhdGlvbi4ATgBvAHIAbQBhAGwAbwBiAHkBDQBlAGoAbgDpAG4AbwByAG0AYQBsAFMAdABhAG4AZABhAHIAZAOaA7EDvQO/A70DuQO6A6wARABlAHMAaQBnAG4AIABhAG4AZAAgAGQAYQB0AGEAIABiAHkAIABUAGgAZQAgAE0AbwBuAG8AdAB5AHAAZQAgAEMAbwByAHAAbwByAGEAdABpAG8AbgAuACAAqQAgADEAOQA5ADMALgAgAE0AaQBjAHIAbwBzAG8AZgB0ACAAQwBvAHIAcABvAHIAYQB0AGkAbwBuAC4AIABhAGwAbAAgAHIAaQBnAGgAdABzACAAcgBlAHMAZQByAHYAZQBkAC4ASQBtAHAAcgBpAG4AdAAgAE0AVAAgAFMAaABhAGQAbwB3AFIAZQBnAHUAbABhAHIATQBvAG4AbwB0AHkAcABlACAALQAgAEkAbQBwAHIAaQBuAHQAIABNAFQAIABTAGgAYQBkAG8AdwBJAG0AcAByAGkAbgB0ACAATQBUACAAUwBoAGEAZABvAHcAVgBlAHIAcwBpAG8AbgAgADEALgA1ADEASQBtAHAAcgBpAG4AdABNAFQALQBTAGgAYQBkAG8AdwBJAG0AcAByAGkAbgB0AK4AIABpAHMAIABhACAAcgBlAGcAaQBzAHQAZQByAGUAZAAgAHQAcgBhAGQAZQBtAGEAcgBrACAAbwBmACAAVABoAGUAIABNAG8AbgBvAHQAeQBwAGUAIABDAG8AcgBwAG8AcgBhAHQAaQBvAG4ALgBOAG8AcgBtAGEAbABOAG8AcgBtAGEAYQBsAGkATgBvAHIAbQBhAGwATgBvAHIAbQDhAGwATgBvAHIAbQBhAGwAZQBTAHQAYQBuAGQAYQBhAHIAZABOAG8AcgBtAGEAbABOAG8AcgBtAGEAbABuAHkATgBvAHIAbQBhAGwEHgQxBEsERwQ9BEsEOQBOAG8AcgBtAOEAbABuAGUATgBvAHIAbQBhAGwATgBvAHIAbQBhAGwATgBhAHYAYQBkAG4AbwBBAHIAcgB1AG4AdABhAE4AbwByAG0AYQBsAE4AbwByAG0AYQBsAE4AbwByAG0AYQBsAE4AbwByAG0AYQBsAAAAAgABAAAAAAAUAAMAAQAAARoAAAEGAAABAAAAAAAAAAECAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhAGJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NEA0tPU1dbX2Nna29zd3t/gAAQCFAAAAEgAQAAFAAgAfgC2AP8BMQFTAWEBeAGSAscCyQLdA8AgFCAaIB4gIiAmIDAgOiCsISIhJiICIgYiDyIRIhUiGiIeIisiSCJgImUlyvAC//8AAAAgAKAAuAExAVIBYAF4AZICxgLJAtgDwCATIBggHCAgICYgMCA5IKwhIiEmIgIiBiIPIhEiFSIZIh4iKyJIImAiZCXK8AH////jAAAAAP+l/17/gf9D/xQAAP4QAAD82+CfAAAAAAAA4IXgluCF4BHfat953pbeot6L3ojepwAA3nTecd5f3i/eMNrvEL8AAQAAAEYAcgAAAAAAAAAAAAAA9gAAAPYAAAAAAPwBAAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADyAAAAAAAAAAAAAAAAAAAAAACsAKMAhACFAPMAlgDjAIYAjgCLAJ0AqQCkAPEAigDyAIMAkwDsAO0AjQCXAIgA3QDrAJ4AqgDvAO4A8ACiAK0AyQDHAK4AYgBjAJAAZADLAGUAyADKAM8AzADNAM4A5ABmANIA0ADRAK8AZwDqAJEA1QDTANQAaADmAOgAiQBqAGkAawBtAGwAbgCgAG8AcQBwAHIAcwB1AHQAdgB3AOUAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA5wDpALoA1wDgANoA2wDcAN8A2ADeALYAtwDEALQAtQDFAIIAwgCHAMMApQAAAAAAFQAVABUAFQCNATwB4wLcA8IE6QVEBZYF6wbuBzQHjAetB+kH/AiBCNgJWgogCmALKgu+DBcMtQ1BDbEONg5rDpkOzg9oECQQwBF/EggSoRNHE+kUtxVeFbwWOxcDF28YGRi0GUoZ4xqtG4kcVRzBHUsdqh5HHxMfpyAMIEcgYyCpIOIg9CEVIdwibCMFI6UkLCTDJfcmlScTJ8UofSjKKa8qRiq9K2IsCCyRLTMtjS4WLnsvJi/pMI4w8zGkMcEygjLdMuky9TPBM80z2TPlM/Ez/DQHNBI0HTQoNDM1EjUdNSg1MzU+NUk1VDVfNWo1djWCNY41mjWmNbI1vjXKNdY14jbVNxA30zjwOZ85wzoROvY7lzwbPLQ81T09Pak+lz9PP9JALEB2QMFBdEHQQlVCp0L4Q3FD2kSIRPlFhUatR05H5UhpSJJIx0mjSj1KX0rRS0BL3UvdS+lL9UwBTPRN6U37Tg1Oj08+T4VP4FAzUHpQhlCSULBRYFGaUdJSo1NTU7pT9VRNVPlV3FXoVfRWAFYMVhhWJFYwVjxWSFZUVmBWbFZ4VoRWkFbeVxBXd1eYV9dYEVheWKdY1FkjWVdZY1luWZxaTFr8WwhbFFvHXG5csV0BXXNeHF6+X09gKmAyYDtgtQAAQFVAPDQ4BDMwMAQvKSwEKCQkBCMOIQQNDgUAMH5+BX11fAR0dQV0cXIEcF9tBF5fBV5ZXARYWQVYT1UETk8FTj1LBDw9BQB8AA0MCwoJCAcGCAZJADAAjbgDZIUdFgB2KhoYPysrKysrKysrKysrKxg/KysrKysrGhgAAEAQDw4NDAsKCQgHBgUEAwIBACyxAQMlQiBGIGhhZLADJUYgaGFkU1gjLyP9Gy8j7VkXORc8sAMqsAFDEBc8sAMqLSwREhc5LSwQFzwtLMEtLLBFdrABIz6wABCwAdSwACNCsAEjQrBJdrACICCwAEM+sAEQxEawAEMjRLABQ7AAQ7ABYCCwACNCU7AlZSN4LSywRXawACNCsAEjQrACICCwAEM+sAAQxEawAEMjRLABQ7AAQ7ABYCCwACNCU7AlZSN4LSwgRWhELSwrLSyxAQUlQj/tFzkXPLADKrABQxAXPLADKi0ssQEDJUI//Rc5FzywAyqwAUMQFzywAyotLCBGIGhhZLADJUYgaGFkU1gjWS8j7S0sP+0tLD/9LSwgRiBoYWSwAyVGIGhhZFNYI1kvI+0XOS0sIEYgaGFksAMlRiBoYWRTWCMvI/0bLyPtWRc8sAMqLSwgRiBoYWSwAyVGIGhhZFNYIy8j7RsvI/1ZFzywAyotAAAABgAIAA4ALwA9AEL+DP4q/+IAAANmA4QFggWgAc8A2wDPAM0AsACPAIsAgwB/AH0AewB1AHEAagBmAGQAYgBgAF4AXABaAFQAUgBQAE4ATABKAEgARgBEAEIAPwA9ADsANwAzADEALwAtACkAJwAlACMAIQAfAB0AGwWeBXMFZATRAdEBrgGYAVgA/ADnAMcAxQDBAL4AugC4ALQAsgCwAK4AqACkAKIAoACaAJgAlgCTAI8AiwCHAIMAgQB9AHkAdwBzAHEAbwBqAGgAZgBkAGAAXABaAFgAVgBUAFIAUABOAEgAQgA7ADkANwAzADEALQAnACUAIwAhAB8AFAAABAAAUgAAAAACAAAAAgAAAAHsAH8DfwBcBAAAKAQUAFIHlgAzBdUAPwHsAFwClgBQApYAMQPBABIEjwAoAewAYgMAAGoB7ACBBD8AdQQUADMDagCYBBQAUgQUAHMEFAAjBBQAdQQUAD0EFAA9BBQAXAQUACcB7ACBAewAYgSPACkEjwAoBI8AKQKWAHkGqABZBdUAFAWWAD0F1QBaBtUAaAWWAC8FagBCBlYAUgbVADsDPwBUA1YAHQZqADEFlgA9B2oAMwZqABkGgQBYBYEAOQaBAFgGKwA5BNUAcwXVACkGgQAzBewAHwhWABsGagAnBdUAHQVWAEgClgCeAjkAAgKWAC0EpgCTBAD/9AKqAIEDlgA5BGoADAOWAD0EagA/A5YAQgJWABAEFAAhBJYAIQIrADkCK/91BCsANQIrACUHAAA1BJYAMQQAAD0EagAbBGoARgMAAC0DAAAvApYAMwSWABkEAAAUBhQAGQQAABQEAAAXA5YALQKqADEBwwCfAqoALwQpAAwF1QAUBdUAFAXVAFoFlgAvBmoAGQaBAFgGgQAzA5YAOQOWADkDlgA5A5YAOQOWADkDlgA5A5YAPQOWAEIDlgBCA5YAQgOWAEICKwA5AisAOQIr/80CK/+zBJYAMQQAAD0EAAA9BAAAPQQAAD0EAAA9BJYAGQSWABkElgAZBJYAGQQUAB0DMwA7A5YAPQQUACcDpgBAAmoATgOFAAUEagBEBSsALwUrAC8G1QAKAqoAjwKq//IEZAAPCFYAGQaBAFgFtAA0BGQADwRkAA4EZAAOBdUAHQOqADUD9AA1BbQAHQaWADMEZAAUAjEABAJWABsClgAdBiUARgXBAD8EAAA9ApYATgHsAH8EjwApBGQAVAQU//4EZAANBOUADARqACkEagArCAAA2wIAAAAF1QAUBdUAFAaBAFgIagBYBisAPQQAAAwIAAAMA38AWAN/AFwB7ABaAewAXARkABAD9AAvBAAAFwXVAB0BVv6HBBQACAKBACkCgQA9BJYAKwSWACkDpgA5AewAgQHsAGIDfwBcBo8AHgXVABQFlgAvBdUAFAWWAC8FlgAvAz8AVAM/AFQDPwA8Az8AVAaBAFgGgQBYBoEAWAaBADMGgQAzBoEAMwIrADkCqgAMAqr/4wKqAD8Cqv/0AqoA1QKqAJgCqgBxAqoAUgKqAHsCqgAUBNUAcwMAAC8CFAC8BtUAaAQUADsF1QAdBAAAFwWBADkEagAbBI8AmgJqAIECagAlAmoANwasAGsGrABrBqwAIQMAAGoEAP/0BAAAFQACAFIAAAOuBVUAAwAHAAATIREhExEhEVIDXPykKQMKBVX6qwUs+v0FAwAEAH//5QF3BZ4ADQAfACwAOQBDQDUYOAgMDAc0LicJIA8CHwICFBsBJAEAAAA4NC0gFhEPDgEAClgLFAAAACoBADEDAnwbBQACByorMQAvLy8/Ly8rMAEDIwMmNTQ2MzIWFRQCAzM2NTQCNTQ3JiMiBhUUHgEXEzIeARUUBiMiJjU0NhcjIgYVFBY3LgI1NAFEMjk7HUE6NkMrXgoKHzwJFiY2BgwCRCI5Ikk0M0hGRRAgOj0tBhUMA2r+MgIn9iBjYlhWO/7w/pRIToQBiB9jGAZQMRlLVxT8uCI6IzRLTDM1SiUvKyczBggcIhQtAAAEAFwDFwMnBZ4AEwArAD4AWABjQFpUMyUYBwUeAQEAOQEATAEAHjgNDAk/FAItAQAsAQAsAQAAAgdUS0czBDBPGAEWKCUdGwcEBCEDAXA9QQo/AXxXMA0tAXxPNg1wERYKFAF8KAQNAQF8IQoNBgcqKjEAKiswEzU+ATU0JicuATU0NjMyHgEVFAY3NjU0Jy4BNTQ3IyIGFRQeARceARUUDgEFNT4BNTQmJy4BNTQ2MzIeARUQJzY1NCcuAjU0PgE3IyIGFRQeAhceARUUdzpRKykuJEozLVU2jQQ8G1IbJxYnKRUiGyctCBABATtPLCYuJEsyK1Y3iTsbMCsRDRMHFyYqCyIUDygsAxdBG2E2LEMnMDMoLUZBd0iDxllNTz4iYSIQJxcwHhQoJBsmSjARISmgQR1fNi1FJDAzKC5FQXdI/vQcSFRAIDkzGwwSFxAFMB4OHSsUDyZLMSgAAAIAKP/kA9cFaAAbAB8A4ECPFhIWHwIWAhUXDhkCFRgNEwMUFw4dAxQYDRoCFRsKAQIVAAkcAxQbCgQDFAAJEgYRFw4eBhEYDQ8HEBcODAcQGA0fBhEbCgUGEQAJCwcQGwoIBxAACRAQBwcGEREGBgIUFAMDAhUVAgIJDg4NDQoKCRcXGBgbGwAUFBAQDg4NDRgXFxgYBgYCAgoKCQkbGwAvMy8yLzMvMi8zLzIvMy8RMy8zLzMvMy8ALzMvMy8zLy8zLzMvMy8ROS8zLxEzLzMvETMvMy8RMy8zLw8PDw8PDw8PDw8PDw8PDw8xMAFdFxMjNTMTIzUzEzMDIRMzAzMVIwMzFSMDIxMhAxMhEyFaVoiiO933V4RYASdWhFiMpTzh+laFVv7dWnQBJjr+2hwBqIUBJIIBsf5PAbH+T4L+3IX+WAGo/lgCLQEkAAAGAFL/IwPHBaIANABEAEwAaABvAH0AiUCAdg0CEXRVLRIDCiQ8KQI+LAMBAQE0AXBcAmoBAC4CEQB5AQBpAQAAOHQKAEUBADgkPg9NRjUDAB0BGwEALC8eCQgEB3BNDQNKG1xVKQMdbTkBWF8DAXYHAmYXUA18Z0oKAEYSAQMAajQtAwBhGx0APDUCbW1YDXxfMAp8QSEKBgcqKjEAKiowATMVHgMVFAYjIiYnLgInER4DFRQOAQcVIzUuATU0NjMyHgIXHgEXES4BNTQ+ATcDLgI1NDYXJiMiBhUUHgEBET4CNTQmEz4BNTQuAicuATU0PgE3DgEVFB4BFx4CFRQBEQ4BFRQWAR4CMzI3DgEjIi4CAc1yVodYLjcnIzwGEBE9QmWUXjFUr4Vyr8w6KCUuHR8LCEM0t6lRn3DDHyYbKSMeJB0kKUEBYj5dMmcuR0Y6dJyhVGAbKiVJVWjMxjRKKP6gW15WAWEZGhYrOwkDFggaHCUgBaI6BjJJVisnOzIgWTs3Cv4SOW9teUBdnHAayckGm2kuOCA2XikZNgkCO2jMeFSUZQ36ySEwORwaJwQlJx4rSDYB0v4OCjtcOFh9/m8yaEtHbGVkZTacUy9RPCUvfVhglpB6IFZmMmsC8AGkEmBEQ2sBOSmCLj0BCRxOLgAJADP/yQdgBaIAAwAUACMALgA+AEwAVwBiAHEAf0B1PwFbYSQEAkIdAgEDAQBNAQBjAVswSQwJUwEALycVAwBqEAIwYUIAAC0BAAABAQgwHQkJAwc4CQMCAiQqAQACWF4CAVUEIAodFQIAfBkkDjgvAgBVKjwPfDQMClU/VQpTTQIAfFBYDmpjAgBVXm4PfGdFCggHKioxAD8qKjAFIwEzARQOASMiLgE1ND4BMzIeAiUeAhUUDgEHPgE1NC4BEzQmIyIGFRQWMzIDDgMVFB4BFy4CNTQ2ARQGIyImNTQ+ATMyHgElHgEVFAYHNjU0JgM0JiMiBhUUFjMyAw4CFRQWFy4CNTQ+AQIpbQOuaQGNZr1/gbtjZbx6ZaBqN/7DISwVFSsiUVMlSw1OVVVLTFGm+kRzTiZGiF1MZTJ1/nfivsHfZL15hMBi/sQ0Ly80olEPTlZWTFBQpvpeh0agi01lMzVkMwXV+6Bsrl9frHBurV04ZIzpHlp4VE92UyEumHVQgFv+z6yanKCgnwKTBzxedDpUlWAHH2F9ToClAcOoz8+qbatdYKnPLpl6eIsyWd56ov7cq56foJ6iApIMXpBUg8MKIGB/TVd/WgAABwA//+UFwQWeADoAQgBSAGAAewCJAJgAoUCXkHx1MR0KCAcjLooBY3oCAUkkEQwMbgEAOktZDlNDAgCBQQI8JgIAMCUjADgwAgAAAIhhAiQuYwAAlwEAAAEAejg1CQgFBxoKPCokHQQgFnUBRU+BSwJVXHABbIQEAWE7AgAAAEEBfD4gAHw4AmEWRQ0AABoBAEMBfE9VAIoKAgAAAG4AAmxcbACQDAgDXoSNDXyTBAoGByoqMQA/KiowBSIuATU0PgE3NjcmNTQ+AjMyHgIVFA4BBx4BFz4BNTQmIzUhFQ4CBxceATMyNxcOAiMiJicOAQEjFhUUBhU2ATY1NC4BIyIHHgIVFA4BBzY1NC4BIyIGFRQeAgEGIyIuAScuAzU0NwYVFB4CFx4DMzIlLgMnDgEVFB4BMzIHLgE1NDY3DgEVFB4BMzIBnmWgWixPQFZWpFCAjz02WEAjRVlqdqU9SkxRRQHiSoOBbT5ASCxOQTElXG89Tpk+afUDF89GBTr+KSk9WigaMj5qQAIClnk+WykvSB1CPAL6Ny1MeFR1WJfDSBY9SMKXUD1XVGA3VP5dFWRNdTxiV1eQT4rmmb0ZIjc8W5JNIxtfoFdAb2I7UjmzZjF+eUsuTFMjNGJIT4PiXmCVLjFENzcKcbCiXmFDeRdacTl6aGt3A3EiUQYQBlwBDDAyK1Y6FQRXbRsJCAqPWEQiZktKJRw4Szr8exdZdKqAtt5xMxU3TDswbt+1eluDYTbwIJVpkT5Uhk9Qll1rFMCNOUVEOW9MWI5PAAACAFwDFwGRBZ4AEwAoAD1ANCUYBwMeAQEeOA0MDBQBACwBAA8CBxgBFiclHRsHBAQhAgFwERYKFAF8JwQNAQF8IQoNAwcqKjEAKiswEzU+ATU0JicuATU0NjMyHgEVFAY3NjU0Jy4BNTQ3IyIGFRQeARcWFRR3Ok8sJi4kSjMtVTaNBDwbUhsnFicpFi0PUgMXQRxfNytHJjA0JS1GQXdIg8ZZTU8+ImEiECcXMB4TKTAPVkogAAIAUP4SAmQFngAXACgAHkAUIhgPDAEHIhgCAFgTJg98HQYKAgcqMQA/Py8vMAEHLgICNTQ+ATc+AzcXBgIRFBIeAQMOAxUUHgIXLgECNTQSAmQlXrCNVB89KSRTV1NJJXKqJUdsJGKSZjE0aZJcXYphrP47KTS2+QEwoG7Jw1FHdVpENCdo/hn+wZH+9fHPBrdNxez8h4Du48BQeusBRb/qAd0AAgAx/hICRgWgABcAKAAiQBggGA0MAAdVFCUKABwBIBgCAAB8DwUAAgcqMQA/Py8vMBMnNhoBNTQuAicmJzcWFx4DFRQKAQMeARIVFAIGBz4DNTQCJlQjVIBFFic8HS1WLbFbM1M6HH7iSjxfMy9lUU5uRyRAfP4SKV8BFQFWxIHduqs1UmgleIJFqLi4YtH+ev7WBr9P/v6zxrP+5P5/SbPR/ZzKAUbvAAAGABICEgOuBYsAQgBUAGMAcAB8AI0AhkB9ioJdW0QaCgdgh3dxamU+JwYAeQIBTDgSDAwGATgeYA0AAHJkMgMAfn1WVUAkBjiHAABrAQAAAC4BOHk3AAQHa2okA20VfnI+CgRJT4J3AAMPhAMBfCFdCnwrbQoAAABxAWVkVktGREMyJxoKXhVJAHxPDwo6AQB8hAMPBQcqKjEAKiowEyImNTQ2MzIeARcuAzU0NjMyFhUUDgIHPgIzMhYVFAYjLgEHHgIVFAYjIi4BJw4DIyImNTQ+ATcmIyIGNzM2NTQmNTQ3IyIGFRQeAhUXFT4DMzIXLgEjIg4BDwEeAxUHNjU0LgEvAQ4DBxYzMj4BNzUuAicGFRQWMzI2MzIeAddgZUAxN1aJLgEaKhFAJjBFDxkhCyiUWTcsPmZhNnUyK7JAPitBQEAcFDEmPzEsQkikLhYvFGjkDAYYIxccLhoXEy8qYWJKIxYZBCkhMkCXPAgXW0MwAjFMqUIIJEQtPC0dHDYzQg88yFwdDFBIGUUjGyYhA5xAPS4+MmwWJVJqPCQ2Q0I7I0BGXzUQcjQ+LDxBAgMLIYBKMChAYtUzJaJjRUAtN01vKAYENRskIKYqQScwMh9VQ04oHQoHKDAcCiAhKG0+BipkR0woCxstLUV+HAYhd1ZFEBlbzFQKGyQcKhISKDUFBwgAAAEAKACIBG0EyAALAFtAMwcLBggDCgsGCQIEAAUIAwEABQkCAwMCAggICQkLBQUAAAsGBgsGBggLCwkDAwgICQICCS8zLxEzLzMvETMvETMvAC8zLxEzLzMvETMvMy8yLzMvDw8PDzEwEyERMxEhFSERIxEhKAHhgwHh/h+D/h8C6AHg/iCE/iQB3AAAAgBi/koBfwDpABIAKAA4QC8TARUBATgLFQofAQAwAQAPAgcmAQMYAXIPIQoAAAAfARMBfB0DAAEBAHwYCA4DByorMQAqKzATNTY1NC4CNTQ2MzIeARUUDgETJiMiBhUUHgIVFAc2NTQuAjU0NmKOIUYfRC8zSCdJhVEeDSErGkkiIE0fKygb/ko3UnksQF09Jy5CRnU+VqmHAk4PLSMlLGFGMytCVFgrQjU6GBcYAAACAGoBVgKWAhcAAwAHABtAFCABBgo4BAMKAgd8AgUKfAcACgIHKjEAKjATIRUhJTUhFWoCLP3UAgv+FgIXwSM/PwACAIH/5QF5AOMADAAcACBAGTgAFQobNQcJCwIHEw0AA1gDEA18GAoKAgcqMQAqMDcyFhUUDgEjIiY1NDYXLgE1NDY3JiMiBhUUFjMy/DRJIzkhNEdGSRcUFBcIECE1NCAQ40s0IzoiSzQ1StMXIx4iIxEDNSYkNAABAHX/2wPLBZEAAwAJQAMCDAAALz8wFwEzAXUCzYn9MyUFtvpKAAQAM//lA+kFngARAB8ALQA9AEFAOQABKyQBAAAuEgIAACswBAwJNhsCAAAAACQwDQkIAgdYCTkKNi4CAHwyKA4bEgIAVCAdD3wWAAoEByoxACorMBM0EjYzMh4BEhUUAgYjIi4BAgEOAQIVFB4CFyYRNBITFBIWMzI2EjUQAiMiAgEeAhUUDgEHNhIRNC4CM3PYjnGvfUB115FssXxAAT5hfj4jSGlJ22wzKmBPUGMtbHpqaQFIOD4bFjgxcFcVNFICtucBT7Jkwf7xrOD+ta5mwAEHA0YzuP74sXzQpnQp9AGd3AFP/ezt/tOWlwEt5gFaAUX+tAFEM5n7ysD5qTpMAS4BB5PSp3cAAgCYAAAC3QWeABYAJwAwQCcAGwkCAAAABjAICQgHIgAMBwEAAAAWAVwAHwAlGxMJBAB8GA8OAgcqMQA/LyswAREUHgIXFSE1PgI9ARE0Jic1PgE3AxEUBgc+ATURNCYjIgYHHgECLQgeSEL9u0dIIVZai504kCIyYTVFOA8nB00rBZ77bkRDLhgINzcFHkI7HQM/TjgISQdJRP55/O9sRh0EVFgDUlFTBwERVwAAAwBSAAAD4QWeAB8AKwA/AEVAPSwWAhIBCQEoIgIBNCkYDAw2ATg4Eg0GAQAAACUBGwEoACI4CAkLBAcGAQAAACUHAlocMAAsAQB8PQ4OAgcqMQAqKjAlITI+ATczAyE1PgM1NC4BIyIGByMSITIeARUUDgEBByEyNjcOASMhIgYBPgI1NC4BIyIHNjMyHgIVFAYBNQFIUWhKJD2D/PR+2KRmQnJGWYofPVwBUm6uX4ve/oEgAe1qVx4uU1r+hy0YAU5OcjxJglJDRBUkQ3BMKF7REzEv/rwrjvbh7HJVhktybQFpW5pZfv36/m8nNkkfHQkBs02oqk9coFwlBjRadj964wAEAHP/5QONBZ4ANgBHAFcAZQBtQGRWSUhANCgZAAgkC1hODgNaEgIBRSEsDAwAACcBADcBODskADgLWgoAAAAAYAESLAQJCAQHSCcZDgQhXQFRMAJNAEINfEsVCgAASUA0AwBOAXw+IQBkYFg3BAAAACgBfF0IAAQHKisxACoqMAEUDgEjIi4BNTQ2MzIWFx4CMzI2NTQuASc+Azc+ATU0JiMiBgcnPgIzMh4BFRQOAQceAQE+AjMyFhUUBzY1NCYjIgYTBxYRFAYHPgE1NC4CIyIDJiMiBhUUFhcuAjU0A42D6pFTgUg9KR4zDyYlNiVUe0aAWRkqLDQLICp5UD6GRCk6lqlYSndFNGVQf5P9xQ8gKhhigytcfWAyRGMY/hoZNjZBWlUSDt8qGBgsMjcREAoBzXbkjj1bLSc/IB1GOyuki1uUaR0RIyg2CyBtNltyVFIjW4ZIQnFDNG5yQC/YArEGDQqNZURYZ3BffyD9xxZ8/v9CYjU5fVBUjV42/dMjKSElPCQeGyATQAADACP/5QP6BZ4ACgAOABEANUArABABAAoBBQEfCAMADDgCCQsCBxENBwwAAAEAAAYBXAcNAAARAXwLAg4CByoxAD8vLyowAREjESE1ATMRIRUBMxEHASERAtHl/jcCfy8BKf4SQkL+cwFtAdn+DAH0QgOD/Jtg/i8Ev139zwICAAQAdf/lA5oFngA2AEgAWQBmAHlAbzcBQjoKAQgNWlIgA1wjAwEAAQAAAEdAMi0EFS9CAAAABQEAPTgCODoIAFgUDQoMLAEAOEopDjgdXAoAAAAAYQEjLBYJCAYHCwpCLSAKBCZfAUA2AQNkElQNUgEAfFAmDmRhWko4LAsHAHxfGg8DByorMQA/KiowARUUDgEjIiYjIg8BNjMyHgIVFA4BIyIuATU0NjMyFhceATMyNjU0JiMiBgcTNjMyFjMyPgE3BRU2MzIWMzI2NwYjLgMjIgMVMzIeAhUUBzY1NC4BIyIDJiMiBhUUFy4BNTQ2A30hV08PiEJUQxU+EnbHkEyA449cjkk5Jxw7DTI/QmSP3KkfQhIrUGk0mBVCOiEB/fwtQTqTH1I/CEZZG0IzIiFZRydno207Tn171XkfPRwdGyCRLCYbBZ4XZHo/CQvrBEF8pWd/2Hw2WTAnOSQZXESfd5q/BwICuQ4ECSIjz0AHCS80HwECAgH+Gzo7aIlKcnCAk2qzZv3XFCUcWDYsOBkWIAAABAA9/+UD7gWeABoALAA7AEkASkBAAAAFAQA8ASgHOQBEAQAAACUBMjAQCQgCBxsADAEBR0ABVAxHCkQ8GwMAfEA2DiUFAgAAAB4BWC0pAHwgFAoEByorMQA/LyowARUOAgc2MzIeAhUUDgEjIiYCNTQSNz4CBw4BBwYREBceARcuAjU0EjYDFB4CMzI+ATU0JiMiBiUeAhUUDgEHPgE1NCYDQnrKiSFygFiZdEN51IKL3HtOVknC3jJ5ulmuli8/Rll1OnjixyFBVDQ6XTh9b2FsAQRNXSsbMixgW4oFnjwXlOiWTkF3qGSI2nyVAQ+yqgEHcF+QTzYlc3Df/tH+4ao1JBxApNWBqwEy8PzAbqJ0Nlm5gcPKudAcZayDY4xgKi/Bn8DIAAACAD3/5QPVBZ4AIAAuABtAFAgBABgLJg8tBgIAOCEBDgIHKhYJAD8vKjABISIOAQcjEzMeATMhDgMHBgIOASMiJjU0Njc2Ej4BJSEyPgE3IS4BIyIGBzYDMf5AUVM2IDqmOApMZgH+LkNJJiRGZzw7Jh0iIUNJiGBE/i0BkS4mHhH+FQgQCUNJHEwEbxpBRQHPNhxgn8duaMz+1pBFKRscSI6WASTanEYFGyABATA7KQAABABc/+cDywWeABsAKwBAAE8AVkBNQTocGQwABiRHAQAALAEAACQwBAwJNQEAAAAARzATCQgCB0E6HANLJwEIAWUPNw01IAwDAHwzSw4ZAQAAAEQsAmonPwAXAQB8LgAOBAcqKzEAKiswEzQ+ATMyHgEVFA4BBx4BFRQOASMiLgE1NCUuAQU+AjU0LgEjIgYVFB4CAwYVFBYEFhUUBzY1NCYnLgM1NBMOARUUFjMyPgE1NC4Ce2e1cW6wXzluS5GnedKAesFpASWEggHlOEEnQnVFXocqTmX8ZKYBTaJsnXdwe59oNO1cZp99RXhHO1+ABC1hq2VdmlVHa1kmXsORarVpYaRc1ZlerXklQ2REVXo/ZlYzWU5HAY5hjXWt4qVwcmdWoFqrS1VzZ2xCUv3lOJV8ip88akNFbFdUAAQAJ//kA9sFngAZACkANwBDAEtAQUIBNC0BAAA8JAIAADQwEAwJBQEAAAA4ASwtCAACBxoACVgVHwokBQIAfCcwDjw4GgMAAABCAQJUKjoAfD8MCgQHKjEAPy8qKzAXNT4CNw4BIyIuATU0PgEzMh4CFRQCBgQ3PgISNTQuAiceARUQAgEUFjMyNjU0LgEjIg4BEyYRNDcOARUUFhcW0YjCfig7eVFwumt61X5rs4JHguD+6F1gkmQ0GDRON1E8ov7Fe2plcj5rQjxfNkrq0YaKQDRAGzgcjummLSVvyIGO3XdbqeKLuf7L43h6KYnEAQCZYpx8VhlQx6H+3P5eAvO+x762h8NiW7r92I0BE/OoN+KNXKU0PQAEAIH/5QF5A14ADAAcACoAOgA4QDE4HTMKODklCjgAFQobNQcJCwQHACEBAC4BMSsdEw0ABlgDEAAANgEAKAEAfBgKAAIHKjEAKjA3MhYVFA4BIyImNTQ2Fy4BNTQ2NyYjIgYVFBYzMgMyHgEVFA4BIyImNTQ2Fy4BNTQ2NyYjIgYVFBYzMvw0SSM5ITRHRkkXFBQXCBAhNTQgEAogOiMiOiE0R0hHFxQVFhAIITU1HxDjSzQjOiJLNDVK0xcjHiIjEQM1JiQ0A1AfOCIiOSJJNDNG0RcjHB4kEgQ1JSMzAAQAYv5KAX8DXgASACgANwBHAD9ANTgpQAo4RjEKOAsVCgMHHwAmATtDAQ8BAAAAPjgpIR8dEwMIWC07AAAACAECABgBeUM0AAIHKisxAC8vKjATNTY1NC4CNTQ2MzIeARUUDgETJiMiBhUUHgIVFAc2NTQuAjU0NhMyHgEVFA4BIyImNTQ+ARcuATU0NjcmIyIGFRQWMzJijiFGH0QvM0gnSYVRHg0hKxpJIiBNHysoGxQhOiIiOSIzSiI6NRcUFRYUAiA0MiAO/ko3UnksQF09Jy5CRnU+VqmHAk4PLSMlLGFGMytCVFgrQjU6GBcYArAfOCIiOSJINSI4H9EXIxweJBIENCYiNAAAAQApALkEbQSLAAYAP0AcBAQDAwUGBgAABQICBQEBBQUBBAQDAwYGAAICAS8zLy8zLzIvMy8ROQAZLzMYLxEzLxEzLzMvETMvMy8xMCUBNQEVCQEEbfu8BET8swNNuQG+UQHDiv6f/qUAAAIAKAG/BG4DiAADAAcANUAYAQEAAAMCAgMDBAYGBwcEBQUEAgIGAwMHLzMvLzMvAC8zLxEzLzMvETMvMy8RMy8zLzEwEyEVIRUhFSEoBEb7ugRG+7oDiILFggAAAQApALkEbQSLAAYAP0AcBAQDAwUGBgAABQICBQEBBQUBBAQDAwYGAAICAS8zLy8zLzIvMy8ROQAZLzMYLxEzLxEzLzMvETMvMy8xMBMBFQE1CQEpBET7vANN/LMEi/5DUv49iwFgAVsAAAUAef/lAnMFpgAbACIAMwBAAEwAWEBOADkrDAsTATgxFg0hAQA4CxwPFx4ICgoBAEkBAAA4NEMABQc7CQ0KDQEQOC4LAktGAgEhAXIFEA1JQTQoJSMdCAAJWDhLDRkBfEY+DQMHKioxAD8/KjABMh4CFRQGIxEjETY3PgE1NCYjIgYjIiY1NDYTFTMyNjcGAyY1NDY3LgEjIgYVFBYzMjYDMh4BFRQGIyImNTQ2FyYjIgYVFBYXJjU0AQRBg249tq87mChNUW5MF1wONj9HRgmMqgNBt3UXHQYKCSU3NSkKLEIgOyJJNDRHRkUIDCE1ODInBaZAgLFsqq7++QHqBw8aY0RRaQo9JSo//YtDin68AcoWNhMTDQEBKCIdIAT75SM7IzVMSzY2SyQCNyYnMQIxKS8AAgBZ/lEGagXVAEAATgCFQEAOAEtEKiopKRY+NjYeHgsQEA8PC0tLCwsDLi4mJgMWFj4+A0REAw5IDyoqKSk6EBAPDxMTAAAaGjpBQQcHIiIyLzMvMy8zLy8zLzMvMy8yLzMvETMvMy8ROTkALzMvETMvMy8RMy8zLxEzLzMvETMvMy8RMy8zLxESOS8zLxESOTkxMCUOASMiJyY1NBI2MzIWFzczAwYVFBYzMjYSNTQCJCMiBAIRFBIEMzIkNzMOAQQjICQCERASJDMyBBIVEAcGIyImARQWMzI+ATU0JiMiBgIDtjqFOXhSY47CXUSCLxuUdxgiFyyibpr+8Z+9/s6/rAE/28UBK06UMeH+8LH+/f6W0eYBX+rEATm9rpOtUkX+bG1EOoxkcE89e2SjUlRthNCoAT+XXFyb/WGLEB0ljAELlbIBIKLM/m3+/fT+qrKliXndbNABlQEdAS8B7OfA/pPd/tTjwFEBZYqXdfiJjJRo/vQAAAQAFAAABbwFkQAfACIANwA/AGhAXywkDgMRIS0jFQ0EAggCARQBACIBACknAjISEQAtIQIKPQE5MxsYCwUAGgEACDAKCQgDBywpJCIUEw4HLQUBNgEAMiEbAzMeAgB8Ly0AIBIJAwA4AQA9OQ0DcgU7AAIHKisxACoqMCUDIQcGFRQWFxUhNTY3AS4BJzU3MwEeARcVITU+ATU0ASEDCQEuASMiBx4BFwEWFRQGBzMyNjU0BTMmNTQ3DgED53D+J0IaVUz+MZtfAVobPDrwXAHPKFBS/a5NTf2yAajVAbn+mxo4MR0SMDEWAWIhFiEWLzP8GcA/Ahs39gEeqkFGQ2YDNzcX9AN2LyEGMVL7Y2RHEjc3CCAuKAGfAhv8rAOJRDkEE0Q5/HdQLR0aGTIiMYUxShUMMkYAAAYAPQAABUQFgwAeAC4APgBNAFgAYwBiQFlZTj84MjAXBwwCAQAAAF87JAMADDAODAkARSwCAABTAQIwAQkIAgdbAVZRODICSS8CARMBSxpWDQAAX1lTTjUXBgBiAXxRSQAAQAFVLyAPKyQCAHwoCA4EByoqMQAqKzAhITUzMjY2NRE0JiYjNSEyHgIVFAYGBxYWFRQOAiURNCYjIxYWFREUBgczMjYTMzI3NjY1NCYnJiYjIgYVEREUHgIzMjY2NTQmJiMXFhYVFAc2NjU0Jic2NTQmJicWFhUUA2380BddURAZWGQDD2iueENUrHvK2EJ8sP2dNkkVMCQnLR1OKZm7hz86Ry0pK2dXclEYOVRJZ4dDTI1ij2RpyYGFjXHkNGlNUlg3M1NcA3ZNTSM3N2GCTFKJXRIbxZNMgV802wPsREEOQ0v8JUxAEl0CXiAej1pIfSgtGUZW/gr+GTM7IwtJi2RllVECJqCD+kYPq5SJqUM78k+DVAcio3PSAAADAFr/4wWwBZ4AKQAxAEcAO0AxRTQqFhUDBggRAQAALy0rKAQAMgEIMCMMCREkGQkLAgc9CQEMRTQCRw1CDXw5HgoCByoxAD8/KiswATMRIy4DIyIOAhUUEhYzMj4BNxcGBCMiJCYCNTQSNiQzMh4CMzIXJwYjIiceASUGBw4DFRQSBBcuAzU0Njc+AQUjUj4vbXqGTWiqeEOE7ZddrZ5EO3H+xM6g/vLEaXLJAQmVOGGGLx9PDQYvNBkWM0T9jZtjOVg9IZQBJsuF25lNQjtEjQWW/kVilWMxXa34jcX+zqs9fV0ho6VwyQEKlKABE8ZrESQLxKoVBCdJpztSMHiInUu0/s/JFyOIvt95ZNxVYXYABABoAAAGfwWDABUAJAA5AEoASkBBQhYCCgIBAABFGgI2AQAKMAwMCQA6KiIDAAAAAjABCQgCB0VCOgMxJgFLET4KfEcxClUmFwoiGgsCBAB8HgcOBAcqKzEAKiswKQE1PgI1ETQmJzUhMgQWEhUUDgEEJRE0JiceARURFA4BBzI2ExEUHgEzMjY3PgI1ECcuASMiDgEBPgESNTQuAScuAScEERQOAQOB/OdUVCNgawM6oQEPw2ptzP7j/W0sXCsbDhwcTDyZGFplbaxOXGgv0VPKiV5NDwHTgMx3OW5PLmQ7AX9RrDcDGURCA+5KNAc3asH++JiV/7xo0wOcd2EBFkFD/D4+RiQNSQOr/NlXTyctOEKZw3gBZbJHPDdn+4kNlgEUwIrkqzMfIAuX/fub8K8ABQAvAAAFewWDAC0AMgA4AD0ASwBgQFg+KBsDFyUqCwIABgIBAABJPQI6HwIAFzAZDAk0AQAzAQA2ATAlAAAvAUIuDgMAAAAGMA0JCAMHPS8CADo2AgAyKicDbik0AAABAVUkRg9JQgIAfD8TDgMHKjEAKiowAREUHgIzMj4BNzMDITU+AjURNC4BJzUhEyMuAiMiDgEVETMgNzMRIy4BIwE3DgEHAzUGBx4BEyMeARcFERQGBz4BNRE0JiceAQIGFThpW26vm1xQffsxWV0nJFZjBJ55SDqnz3NbXB7JAQcDRj4McXQBqkU7YFgfJ2c3QLm1S3RB/HMiIlMxOkolHwK6/khJUScKQ4Nt/pY3Ahs/OgPdRkAXBTf+wUl3SCdGOf5M8f3uem/9fa5APy8CQsRDHw8qAqoZRjEa/DlJRBcBVV8DyFU3AhRDAAAEAEIAAAVKBYMALgA0ADsASwBiQFkTAwIJDzwVAhoeAgEAAC8BQTEuAysBCTABDAk2AQA1AQA5ATAPGgAASSICAAAAHjAhCQgDByABNhsBLwEAOTECABUSAm8UNgAADgFVGz0PSUECAHxFKA4DByorMQAqKjATIRMjLgInJiMiDgEVETMyNjczESMuAisBERQWOwEVITU+AjURNTQmIyIGBwUnIx4CAzUOAQceAQERNC4BBx4BFREUDgEHFjZCBI17SjyUkEA6PWVVFraKjQNISAk2dW6uYXoa/TpiWB1HfAcMBwSNYrs+YEW0FT09PEP9rg08RjUaCRwiSj0Fg/68RW9ECwonY3b+qHt//ellXyH+F1dFNzcDIlFTA2owYFQBAaamFDEy/aLTKSwWDy/+FwOuZ1wqBxNGZPxYPjwjEwE7AAAEAFL/5QY7BZ4ANAA9AEwAZgBpQF9jVlBKPjUhHBsZEgIMBw8BAAA8ODYDWwFZMgIHLC8MCUIBAAAATQEPLCUJCAIHAAxbWVZQTQUVCwEcAQIAAAA2NTQCAAVYIEYASkI8GgQAfD8VDmMBSQtTDXxgKgoEByorMQA/KiswARMjLgMjIgYCFRQSFjMyNjc+ATU0LgEnNSEVDgIdAQ4CIyIkJgI1NBI2JDMyBDMyNwMnBiMiLgEnFgMVFAYHPgI1NC4BJx4BAS4BJyYCNTQSNz4BNwYHDgMVFBIXHgIFYhE2LnR8iEmK2HeD34NNhSIbEBVQYgKJY00aU7/DX6/+5sBiYbYBAJlnAQ0iXSQXDi0dFiQsCWYHQEhPVyUPPUMlJ/4WY4pIX2iFczllRUgqV5l6QGldOXZxBZb+R16UXy6q/tLDwv7QqDwwJVZAZVEhCDk5CB9RYd8rQSRwygEIkY4BDtF5OjL+87YSBQsCPvyVhD13JxE/ZFBjVzEHGz/+NSxVTGYBA4CVAS5tNTkfDhEig7vRb4z+7144RScAAwA7AAAGmgWDADQARABUAFtAUkU1AhkiAQApAQBSQionHAUAGTAbDAkoIgcKAEo6MxANBQAPAQABMAAJCAMHKBwOAQQjIQFVLz4KQjkCBgF8NiMOAAgBVSFOD1JJAgB8RhYOBAcqKzEAKiswITU+AjURIREUHgIXFSE1PgM1ETQmJzUhFQ4CFREhETQuASc1IRUOAhURFB4BNxUBERQGBzMyNjURNCYrAR4BBREUBgczMjY1ETQuAQceAQP+ZFIb/TkLJ01Q/WRITS0RWXoCnGNWFgLHIlJdApxkUxoZV2H+ViImITYwJEYdKh78PygeHTovDjhAJiA3BR5MWAG0/mJKSy0UBzc3Ag8qTEQDqmA7BTc3AShYYf6SAaRKQxgHNzcDIFhn/JhSVCcCNwSy/CFKOxc+QwPgXFgTRFH8RVdHFFtcA4FgVyoEFEUAAAIAVAAAAu4FgwAbACsANUAtAAAAJxsCAAIwAQwJACARAgAAAA4wEAkIAgcpASQcAVUJJAonIAIAfBwWDgIHKisxACowEyEVDgEHDgE1ERQeAhcVITU+AjURNC4CJxcRFAYHPgE1ETQmBxYVFAZUAppeZwQCBBkuPEz9ZllbGw8qR0/wJCxBUDhTTAEFgzcCLUQqMQP8ZjtGHgsGNzcBI01UA31QTSINB7b8HDMwGAInQgQlREQDKHAIDgAAAwAd/hQDIQWDAB8ALQA7AFFASC4VAiAYAQAAACUDAgAAMAIMCQAwATgSIA4AKwEAADYBGDAMBwgDByUBGxUBAwEAVQchDwArAXwpGw42LgEDXxU5DXwzDwoEByorMQAqKzATNSEVDgIVERQOASMiJjU0NjMyFhceATMyNRE0LgITETQmKwEeARURFAc+AScmIyIGFRQWFy4BNTQ2jQKUV0goVqBoYn02Li8/AwIQHT0RK0rpJ0wVKR0hPiX4GS0eKEhELyE1BUw3NwQTT1v7F3e0Y21KLUdLPDI6kQWQUVQmD/nWBWJ2VxNDPvorVUIbXhhAMiItTxQxLSMiFAAEADEAAAZSBYMAOgBCAFAAYAByQGlGRURDMxsXFhUJAw0BAC0BQAFVPDouKwUAAzACDAkAXUwhHhAFACABAA0wDwkIAgdGRC4fGxYVCAg3MwFPOwIAAABDAXxJEgAAADwQAQMAS0AHA3w+NwBFARgBVTNSD1xVAgB8WScOBAcqKzEAKiswATUhFQ4CDwEBHgIXFSE1MjU0JicBBxEUFhceARcVITUzMj4BNRE0LgEjNSEVIyIGFREBPgE1NCYjISMWFRQHPgEDAQcBHgEVFAczMjY1NCURNCYHHgEVERQGBzMyPgEDjQJWQ4uIVvECEjtGSTD9YKAgG/50fTFAISsQ/VYfWFQYHmFkAqoOdUoBlkRFPzoBVusvD0ROaf5rLQF5KykxGigy/L8wXDEbITMZPTQKBUw3Nwk+YUrV/WlKRCMGNzdIGTUhAe9w/oFSVgcCBQE3NypPQgOsQ0ckNzdKWP4OAWs9XSotOCcvHiA+PfvuAfwp/iA0RCErGTAgOSUDsW5JARZAcfxQSz4VJ0MAAwA9AAAFfQWDAB8AMAA1ADhAMBMBAA0BAAAALgMCAAAwAgwJMwEyJBYDAAAnAQ0wFQkIAgdVCSoKLiQCAHwhHA4CByoxACorMBM1IRUjIg4BFREUHgEzMj4CNzMDITUzMj4BNRE0LgEXERQGBzIWMzI1ETQmKwEeAQEzNw4BPQK3H05TIidmXU+EgopGXIX7RQ1aVh8bX5ojJAQaBGUfSh4pHgKmt1Y5gQVMNzccS0X8LTk/HhpCelv+mDchR0ADsktMJJr8ADE2FASSA8BlYhg4+zvFRF8ABAAzAAAHHwWDACcANgBDAEoAZkBdAAEDDAEAJwEXFAI4KyUDAAMwAgwJSAFFPDQeGw8GAB0WAgAMMA4JCAIHQUA+PDsnHAAIFBgBDQMCAAAAKwFVCCgAAAAzDwIAAQF8LxQARQEARDgCAEgBdRgiAAMHKisxACorMAkBIRUOAhURFB4BFxUhNT4CNREBIwERFBYXFSE1PgE1ES4BBzUhARE0Nw4CFREUBgczMjYBIx4BFwE2NTQnAS4BAzMuAScOAQO6AbUBsGVSDiNOVP17YFYQ/g86/hVpev4Ga3QpckQByQPFEigiCB0tI0Ui+zMlPkclAc8WFv5yJVOc0yQtCw47AVYELTcBMl5+/KBCRBsFNzcBLk1ZA8X7LwSq/M2Kmxs3NwuRgwOgLSwDN/tkA8V2KgMnRUz8PEg1GU8ExhhVWvuyKB4cNAPGX1r66xNDLSk/AAQAGf/hBkgFgwAlACsAOQBAAGJAWTQtLCMgHwsHCAAQAQAeASoKAjEnGwMEAAAwAgwJPgE7EwIJAQA1ARAwEgkIAgctLCMeEQEGIAsBJggCACcBADUqHwkEdAcgADsBADoxAgA+NAoDdAsXAAIHKisxACorMAE1IRUOAhUTIwETHgMXFSE1PgInAy4BKwE1IQEDNCYnLgEFIx4BFzYDAS4BKwEeARcBLgMFMy4BJw4BBDECF0NlOhM+/AIPAhQ0YU397WhlGAQOOWw6DAGdA4UOISccaQEv2zI/Fhdg/HscTUYtOD44BAMBAwoc+5TTLCUNDTYFTDc3AjhrS/uFBKr83UtnTCwHNzcIYI9sAzM+QTf75QK/UXEjHCUBETw0WfuvBBskOhQ5Q/tUHTcbKHAiOjQvRQAEAFj/5QYvBZ4AFwArADkASABGQD0AAScdAQAAOiwCAAAnMAkMCUEBAAAAMwEdMBMJCAIHOjMCIhgBSw5FCkEBAHw+Ig4sAQBNGDYPfC8ACgQHKisxACorMBM0PgI3PgIzMgQWEhUUAgYEIyIkJgIBFBIeATMyPgI1NAIuASMiDgITBgIVFBIWFyYCNTQ+ASUeARIVFAYHPgI1NAImWCJCZDxBlq9kqAEWw2hz0/7kpJr+9MFqARVIhrdqWqF6Q02JumtcoHE/XqascNqhxOg9ewJlcZ9QW1NTaTJjvQLHWqKSgDE1RB9yyv75kp3+8clvbcQBEgEJrv7c029NmuOWpAEXw2tQldABfmb+w8el/u/DNWQBXv5/zLWBPNP+2rCn9V4+ncd9swEsxQAEADkAAAUvBYMAIQAxAEAATABUQEsiARMzAQAARwE8AS4XAhMwFQwJQQEAMDMhDwAmCQIAAAAGMAgJCAMHFwcCNwEBUBxECkdBAgB8SzcOADIBVQEpDy4lAgB8Iw8OBAcqKzEAKiswAREUHgIXFSE1PgM1ETQuASM1ITIXHgMVFA4CIwERFAczMjURNC4CJx4CEzMyPgE1NCcuASMiDgEVAT4BNTQmJx4CFRQCFCM8bi/9KVFRLxETX3ACsC6uOH9vREWP2ZD+SUkabwMXOz0oIArZjH+oWnsxZEpVSxMBf3h2eHg5UCgCgf5YPEEbCAI3NwIOKD83A3FuXCw3EAU4YYVOV4xmOAHh/FRfIGkDk3tMNhkFEzBY/gU9kXq3WyQWMGBe/mUSmo2VlRkdXn5K7gAFAFj+dwZEBZ4AIgAxAEUAUgBhAGlAXSIhAigeAQAAU0YCAABBMBIMCVoBAAAATQE3MCgJCBMeIwo1LwEKBAcrCRsJBQkAASNXU00rKBsFBjwyAgEiAQAAXgEhAUsXIwBaAQB8VzwORgEATTJPD3xJCQoEByoqMQA/Pz8qKzABIyIuAScmJAI1ND4CNz4CMzIEFhIVFAIEBx4BMzI2NxcHIyIuAScjIiceAjMyNgEUEh4BMzI+AjU0Ai4BIyIOAhMGAhUUEhYXJBE0PgElHgESFRQGBz4CNTQCJgVvFXrp326o/vKcIkJkPEGWr2SoARbDaIn+9bhurlk/SjwnzyVPvL1NBisrW8vGWCAb/A9IhrdqWqF6Q02JumtcoHE/XqascNqh/lQ9ewJlcZ9QW1NTaTJjvf53Wah4GMEBPcFaopKAMTVEH3LK/vmSqv7Y0yxJSR8nGbw/e1QEZJVQFQR8rv7c029NmuOWpAEXw2tQldABfmb+w8el/u/DNeEB33/MtYE80/7asKf1Xj6dx32zASzFAAUAOQAABgoFgwAzAEAAUABhAG0AdkBtNAELQ19WKBwYBSwCAgEAAGgBTT4CAAswDQwJYgEAAFIBFgEwQywAADczIQMAIwFaAQIwAQkIAwcYAWVrX1EwKAAFVi0CAVoBAAAAHAFQEWUAaGIWA0gBfGtWDlIBQgFVLToPPjcCAHw1Bw4EByoqMQAqKjApATU+AjURNC4BJzUhMh4BFRQOAgcWHwEeARceAxcVIyIuAS8BLgErAREUFhceATcBERQHNjURNC4BBx4BFxEzMjY3NjU0Jy4BIyIOAQEjHgIXHgIXLgMnLgE3PgE1NCYnHgEVFAYC7v1LYV4jHl1nAxWV33E0YotcRWVjCBgTMEJBPiO8QHJpQ4xhXyNvIDYdVBX+TUWDET0/NBvXolKgKVJ/LWJMTU8ZAQVSJF+QSUNyWDI+coOLSgodPoaQgHZaWWk3AhtGSwOmUE4gAzdnq2NBe2RHD0V+dQkbFTpLPCUKNzloVbJ+Yf5YP0gQCAoBBFz8JV4jA2ID8U1PJgMXS2n+PTUoTZ67WB8UKVP9txtsuF9VWxoCHmmhsk8OI0wRpo6KoxEum4GIiAAABABz/+cEeQWeADgAQQBJAGUAbUBiYFRKRkI5Kh4NAQohBQEAAD48OgMAGQEhMxYMCVlDNQMAAAAABTAxCQgCBzgJHAwdAVtXYFQ+OioeHBsNCQglAgFwLVsKWTkCAHxXCA5GAQAASgE3AQJyJUMAAAF8TBENBAcqKjEAPz8qKzATMx4CMzI2NTQuASQnLgI1ND4CMzIWMzI3MxMjLgEjIg4BFRQWBBYXHgEVFA4BIyIuASMiByMBJwYjIiceAgERPgEXLgIDBhUUHgEXHgEEFx4BFRQHNjU0LgEkJy4BNTQmg0I3m7dkfbJ2pP70OFd6Pzhmk1pBvSs2MEwrRmLXkUh8S4gBC9M+cn500oFJSrQwUC85AxMhISEkKig8Qv0ZHTEzIR0rGBEkRiw7jgERNGBrKVJ5s/7KBI6TAQH8ntdonHpyfzMsEx5pk1RQlHJCJRj+ZbjBQ3ZHZGo2Jh44xn140H0WQD0Eg78LCxpAWvy0/vUmFgInJUkDdUwvNWtfHighLRUjkGFIUFVydodBNwEltncWHgAABAApAAAFrgWDABoAHwArADAAOUAxGgMCBwwBAAAuGwItJB0UBAAHMAEMCQApDwIAAAAMMA4JCAIHVQghCigBAHwkFA4CByoxACorMBMhEyMuAicRFB4BFxUhNT4CNREOAwcjJScjHgEBETQmJxEUBgczMjYBIwc+AW8E90hITaiVeCpgVv1DV10vbKBsR0U9BRQtvExm/cUbJR4pFkko/l6iJzNMBYP+toF4GAL7j0JFGgM3NwIXSU4EZQEpRk9Uc6AYTPwWA9c6OgP7jz5KHFwEuapDQQAAAwAz/+UGUAWDACsAOQA/AFVATCwpAAMFEQEAHAE9ATsvHRoIBQAFMAcMCQAAAAA1AREkJwkIAgcbARYNKQEsMQIBOgEAOwE9AQB1IRYANQgCAFUNLA8vAQB8MQAOAwcqKjEAKiswARE0LgEnNSEVDgIVERQeATMyPgE1ETQuASc1IRUOAhURFA4CIyAnLgE3ETQHFhURFBYXLgMBIxYXPgEBEi1TXwKmUFArY7Z5f79sLmxiAgJYWR5PltOH/r6aLyVjjkzIyE1sXjcELc1cGQwnAa4C+ktBEAg3NwUTPkT85m6hUl6+hgHNnLJTBTc3DGSjeP37a699QLU6gFQDH5QPHnL84qvBLCE/XooD/ip0OUwAAwAf/+UFywWDABwAIQAuAB5AFgANASABHhwOCwQsAQIwAQwJByMWBwkAPy8vKzABIRUOAQcBIwEuASc1IRUjIgYVNBYXCQE2NTQmIyEjFhc2BQE2NTQnAS4CJx4BA/4BzU6IQ/5iN/4CLDxYAloRQ0gNCAFsAQY4U0sBK8VQBiz8GAHrHR3+XRsoPjglLAWDNwSpqfvvBL9vNQQ3NzAqA0oT/JkCkolWUVkucGtn+2k2Fxg+A+xBRCEEDkQAAAQAG//lCDsFgwAwADcAQwBSACxAIAAiEQI1AVBCMjAjIBIPCBUBAjABDAkHRTkpGgoJCAcJAD8vPy8vLy8rMAEhFQ4BBwEjCQEjAS4CIzUhFS4BIyIVFBcJAS4DJzUhFQ4BFRQXARM+ATU0JichIx4BFz4BBQE2NTQnAS4CJxYFAT4CNTQnAS4CBx4BBnkBwklvM/6TOf5//oE1/oMzKUFAAk0GCQmHIAENARQYMDIjOAJeSFMvAQTVFBtaXAFBxjAlAxU0/JYBjR0U/qUbHTg4O/0FAYUHCwsR/rUjJzk0JC4FgzchnJH75wRM+7QETJNcLDc3AQFSK2L8+QMXUFMiBQM3NwIcLjCC/RoCZTZmKlpXCB5LNzNQoPuUPCQXOQPZSjYfATCd+54PFyMNJSsDvGVOHgQYWwAABAAnAAAGRgWDADwAQwBWAF8AdkBtTUxFRDc2NRYVCQILAQAtAUIBPjwuKwRJAQIwAQwJXAFYUSAdDgUAHwEACzANCQgCBz4FAjlPTUQ2NS4mJQcSGgIBPQEAAABUQgJ8QDkAAABRDgYABAA3AXxPEgAyHgIAVwEAXFhFA3AaWgADByoqMQAqKzABIRUOAQcDAR4CFxUhNTMyNjU0Ji8BBw4BFRQWFxUhNTMyPgE3EwEuAic1IRUjIgYVFBYXATc2NTQmJyEjFhUUBzYDAS4CJx4BFwEWFRQHFjY1NCYFMyY1NDcOAgPfAilmvYPZAWVaRW9K/S8YSUc9NsHANzFSTf3RDC6CplTi/pFPUlJAAq5IKTkaIQEAuWBSTgFa1z4COtb9fy4vRTklUTwCoEU1PD89/HL0ORAnJE0FgzcHkJz++/4ud1FCATc3MCAmYUb+40FaKjg2BTc3QZBnARAB4WlcJgE3NyMfGS8s/qzfc0ksQAMlRBIMV/xlA0w7LRgBDlFP/IFeOikpATApK2/yITsfJSkkNwAAAwAdAAAFugWDACkAMABCAFVATCoiAgMMAQAbASsBNi8pHBkFAAMwAgwJAD8PAgAAAAwwDgkIAgcBASYJHAExOwIBLgEALw0CAAcBfComACIBVQkxDT4fAgB8OxUOAwcqKjEAKiswATUhFQ4CBwERFBYXFSE1MzI+ATURAS4BBzUhFQ4BFRQXARM+ATU0JiMXFT4BNyMWCQEuASsBHgEXAREUBgczMjY1A/wBvixbYDP+2V53/V4SV1UV/lYlQlECk1piRwEhwTUzRzigGTEprzz+Of5gKDItHhokHgGqJzUrPzEFTDc3BkF8WP4G/phgMAg3Ny1GOQEjAstAPgM3NwIaNip2/h8BRVl/NzJNeRc2NiQm/PsCvEUqCzA0/TX+pjkwGD4/AAAEAEgAAAUlBYMAGAAdACYAKwAsQCYbFQ0KAQUGEgEAACkBKB4CEAEGMA8MCQAfGgIAAAQBEjADCQgCBwAqKzABMwMhNQEhIg4BBwYHIxMhFQEhMjY3PgIBMxMOARMBFjY3ATY1NCUjBz4BBNVQUPtzA5X+v2Oyexw3E0ZGBHP8ZgE1YodVLVdL/srDTjx1G/xzNC02AvAt/T2pIStdAen+FykFI0lnK1YhAYkn+tsfSCVtg/6EAQBddgTo+usCHU4EM0ETHgeqPkoAAgCe/isCaAWDAA8AGAAlQB4AAAAQAQACMAEMCQARATAMDw8CB1wIFwp8EQAKAgcqMQAqMBMhFSMiDgEVERQeATsBFSETET4BNRE9ATSeAcpuMTMTDSssgf42ICkZBYM3FCsk+eIiLRo3ByH5Fgs4RwV8SDdSAAEAAv/hAj8FawADAB1ADAEBAAMDAgEBAAMDAi8zLy8zLwAvMy8vMy8xMBMzASMCfgG/gQVr+nYAAgAt/ikB+AWDAA0AHAAtQCYAAAAaAQALMAAMCQASAQAAAAMwAgcIAgdcARYKGhICAHwPCA4CByoxACowAREhNTMyNjURNCYrATUFERQGBz4BNRE0LgEnHgEB+P41d0okJUl3AQYPHj0yDjAxHRAFg/imNzY1BhY3NDe6+hw4MxoDMkYF1T0+IAEZNQABAJMCmgQUBWgABgBHQCEFAQMDBAQGBgAAAQICAQQEAAMBAwMFBgYAAAUCAgUBAQUZLzMYLxEzLxEzLzMvETMvXTMvAC8zLxEzLzMvMy8zLxE5MTATATMBIwkBkwGbUgGUn/7Z/t4CmgLO/TICAP4AAAAB//T+TgQM/s0AAwAKQAUWAgAKBwArMAM1IRUMBBj+Tn9/AAACAIEEAgIvBTcAAwAGABpAEgQBADADBg4HAQYFBANCAAINBysxAC8rMAEjASEXJyMCL0H+kwExJ16LBAIBNfzFAAAFADn/4wNzA3sALQA9AEYAVABiAHdAblUuAAMrYU0+JwMGRTQBR1MDAQAAWzsCAAArMA0KCT8BADhhBg4WAQAAAB0XFAMoRUcAUzgfCQsyOBoJCwUHRzsCKAMBFwEAAAA0AVwRNwAAAAA/AR0BfC4oAFtYVU1CAAZSA0oNUAkCdF4iDQQHKisxACoqMAEUFhUUBiMiJjU0PgEzMh4BFREUMzI3Fw4BIyImJwYjIiY1ND4CNzU0JiMiBgURFBYzMjcuATURNCYnHgEDEQ4BFRQWMzIHIiY1NDY3DgEVFBYzMgMGJjU0NjcOARUUFjMyASMaRzUzPGWxa06HUCMVHiUxUzlCSg+Kh2BxRXHcRz4+Nj0BEDJJIRQ8MjtIJxohgGU8KD9uW201NVFZaz89PSQmIipHTCkcMAMGBDIWK0M1IzRkPzZuTv4EPSErMTI7PndkTUVhS3Mpl0RGJ6T+dXVzCAlOUwHLaE8IFEz9vAFBSHRSNzxKSkYzWzgvYkM9UQKDAyIXHzEuJEgtFCMAAAQADP/lBCcFpgAXACUANABCAFxAUDUmGANBKgEAADIDAgAAQTMGCgk7IhIDAAAAACosEAkIAgccFAkCNQEuAgFYCz4KOwEAfDguDgAnAQAAEgECXAIZAAAAHgACABMBfCEUAAQHKisxAC8/LyorMBMlMxE+ATMyHgIVFA4CIyInByMRNCcTETQmIyIHHgEVET4CExEUFjMyPgE1NC4BIyIGNx4BFRQGBz4BNTQmIyIMAUwpU4FRUY9nOjx1pWCEoZgajvIyVR0QOzUiHQWDYF5Hbj8+a0InfbB9g1BUdG+jZwUFOW39eS0vP3CgX2Gvik5dWQR1jib76gNmY1wEGk5G+7ofNT8CHf57iKVhuoNwpFA2UQzBsJ3KNyDPs7vGAAMAPf/lA3kDewAnADgASwBeQFUtKAADAysPASILAgEAADk0AgAAAzAbCgk4KyIKDgEAAABDASELRQBBOBIJCwQHQy8CMjYBDwEAAAAtDgJgHzIANCgAA3Y2JQ05AQBaB0kPfD0WCgQHKisxACoqMAE0JiMiDgEVFB4BMzI2NxcOASMiLgE1ND4CMzIeARUUBiMiJjU0NhcUFjMyNyY1NDY1NCcWFRQGJQ4CFRQeATMyNwYjIi4BNTQ2ApM4KEt6RVGJUUOTLCNP3XJqwXNGg7RtWJBTSDEtOxIPMR0JKD4JThYS/udghUZwt16JeYNQZqpkeQMEGyVXo2dfm1Y9MC9yenTHdmCuiU41XjgxQD8kB01UICAIDTMEJg03HR8aETqMJH6nVnW6Z1orXKRlddcAAAQAP//lBEoFkwAaACYANABIAGpAXzcBKzMgAUI+AgEAAAAANRYCKzAUCgkACQYCAABABwIsM0IAAAAACAEAPjgLCQgDBxwCDBsBFy8BBwEAAAABAVwCJABAHAADKAgCfB8XDjUBAAAANwFYL0cAfDoQCgQHKisxAD8vKiowASUzERQWMxUFNQYjIi4CNTQ+ATMyFzU0Jic3Ix4BFRE+ATURNCYDES4BIyIOARUUHgEzMgMGBw4BFRQeATMyNwYjIi4CNRACbQE1KTlG/p2RlVOQaDd91YNddilRTyJLIyEfNisjXTBHeEU+cEhn5FQ5V2hbpmZGNy4MQoFqPQUtZvshNSU1QHV1Rn+lW4PWeCv2UkwgDiFNQPuzDiYmA/FaVvuQAkoqLlevgm6hUwLyEiY2ynJuvW8VBDZpklYBCwAABABC/+UDagN7ABsAIwAsAD0AV0BPLQEqHQEBFBoCAQAAAAAgASosDgoJACUBLR0UDwABAAAANQEeGjgAMjgFCQsEBwABAQAANQACWBQdACABAHwjJg4tJAIAYhU7D3wvCQoEByoxACoqMCUXDgIjIi4BNTQ+AjMyFhceARchHgMzMgMzLgEnHgEVBSE1NC4BIyIGNwYVFBYzMjY3DgEjIiY1NDYDQigtfJVRbr1uQ3edWVqjMCMfCf2kBD9lcjR+SUYDVmVAOP6DAV0qSS9MagS735JVqzs9f1iVx0L4H1RsNGrIf2SwhktLQjBlR2iQWCYBtnBrEh1dXxQhOlsxh2WU8K7dRUQnMdCnaqgAAwAQAAAC+AWeACsANwBHAGVAXEVDQTo4NRMHGT8sARADAgEZMAkMDDg/EAoAHQEAHwEAASoDCgkAKQEAAC8BJTAoCQgEB0UBQToBeg1BCjgnHxYEfDoTDQAdAQAANQFcITEALykDAwEBfCwEDgQHKisxACoqMDcRIzUzNTQ+ATMyHgEVFAYjIiY1PgE1NCYjIgYVETMVIxEUHgE7ARUhNT4BExEUBzI1ETQ2Nw4BJRYXHgMzMjcGIyInLgGejo5drnRFZTFBMC07AQEmHCsxuroWOTAh/fZCQyA1dzM1VVUBZRoCAgQMHRkyGhgJJRQcFI8ClkWIg8FoKkUpLklFKAoPDh8kU07+pUX9eSgtEjc3AiUDlPykQiVnA1p2o007rPMeIRMrIBM1CCc6GQAIACH+FAQxA3sAOQBCAE4AWwB0AIEAjACfALBAp5kVAhObVkxDPzgdGgAIDiVoAXt1AwEAAAAATzoCRjADCgkwCJIKlY+NBQQ4lxMNOJsOClwBAAAAh21iMyIFDyV7AACCAQAAAHUzLQcIBgeNAZ4oGgFBPXVtYiIdBUNJhF8CWVMEAXwLngqZAXUoag0AkgEAAJV5aGYVBQZYF0EAPzoCAHw9Qw5WTwIAAHIBh4J/XDgzIAdaSVkANQF8UwANfIowCgcHKioxACoqMBM0NjMyFz4BMzIWFRQGIyIuAiMiBxYVFAYHDgEHDgEVFDM+ATMyFhUUDgIjIiY1NDY3JjU0NjcmAR4BFRQHNjU0BzQmIyIGFRQWMzI2Aw4CFRQWFy4BNTQ2Aw4BFRQWFx4CFRQHNjU0JicuAzU0NhMyPgE1NCEiDgEVFBYjJjU0NjcOARUUFgEGIyImIyIGBzYzMhcWMzI2NTRYzKe1iCVYKTlKLSMVIykcEhAXQltNMl04coB9KkM5xMM+f8mEwcpjX4F4bvABxUI7ZaRgWkBBVFVIQVHjUoRHfX9cW2wwOzyFb9+ZeQQbhoRfvGc1H/J0qVz+83iYUoJhdUpIaG1eA2gMGRNKGQoTCAgMGiwhHhcYAkKCt3MjJz4vIDIXLxcPWVlQjigZEQMIKjlJAQFvg0Z3VjFuW0BkBjlrRngpZwHVLHxktlc3x/PedoaMcH2UjwGWClF4RWKWITaPTVOY/aMlTDNAVQECCUFLBxgwJExRAwIFFDQwITn9nCxVNXUaRDpDUD5ZM0QhCU49NFMErBIpCAMCMSsgEQ0AAwAhAAAEewWaACsAOQBMAFtAUSwBDAMBAAAfAQA4AQwnIgoJPzACKxUSAwAUAQADMAIJCAIHSB4MAQEAXCY0DzgwAwMAfC0JDhMBDwEAAB0BXB5DAAAAShwVAwA+AXw7GQAEByoxAD8vKiswJRUhNT4DNRE0JiMiBxEUFhcVITU+ATURNCc1JTMRPgEzMh4BFREUHgEzAREUBgc+ATURNC4BJxYBERQGBzMyNjURNCcuASMiBx4BBHv+FicpIA9UO2OIN1D+EkM8jQFMKUioVVh/RgcvNv7NEhVAKxZMUG79ngsSGxcuEhBBJBAnSTI3NzcCBxYtIwHVXVd7/eg6KAM3NwIdNwPPiSMpaf1eP0Q+e1r+YTwyJAJr/fgmJhUBPEIBqk5XNwQpAUP8TCwrFDMwA8RGJSAoBxtVAAQAOQAAAgwFYgARAB8ALgA5AE1AQx4cEhAPBSgFATkgLwo5NSgKABUIAgAAAAUwBwkIAwcACjgBGRMBJAYCAAAANS8gEQRcABkAKx4VEAgFMgF8EwwOAgcqKzEAPyorMAERFB4BFxUhNT4BNRE0Jic1JQMRFAcyNjURNCYjIgcWEzIeARUUDgEjIiY1ND4BFyIGFRQWFy4BNTQBjRM1N/4tPjE6NQErmyk3Mz4yFw5USSZCJiZCJjlSJUE2O0A+PSAeA3v9LS4vEgI3NwIuOwHLK0oSIGf+7/4lOh4yOQHVQEUCLAKUJUAmJkEmVDklQSUgODEvPQMdLSNBAAX/df4UAaIFZAAdAC4AOgBIAFcAZ0BbKCQiHgYFBkMVLywMAAQxHAIBOFBDCjgVMQoAAAAANwEcLA8HCAMHSjsIClZQAh8oOTcvBgRGNAIBPwEAAABTSTsMBwVcCR8ALAF8KAENJAEAfE1GDnw0EgoEByoqMQA/Ly8qKjATETQuASc1JTMRFAYHDgEjIiY1NDYzMhYXHgIzMhMRNCYjIgceARURFhQGBz4BBSYjIgYVFBYXJjU0ATIeARUUDgEjIiY1NDYXIyIGFRQWMz4BMy4BNTSuCzhGAUgkEB8rrGJSYjsjIT0MCA8VEDVgLVQYD0YjAQcINBn+9BcWHiFDQEQBPyZCJiZCJjtSU0kPLj47KQYLBhwg/rgDRF1VOxknUvxcVXg7VmVNOys7LyMXKxgBDALmWmgCG1ZY/NgQMkoeInQyDisaKDUGLTYqBqAmQSYmQCVQOzpTIEQpJ0EBARMqK0IABAA1AAAECAWiADAANwBFAFMAdUBqRjs6OTgtLCsgHx4cFxQPDzICAQAANgEAADIwFgoJAEEwJiMEACUBUgECMAEJCAIHSw46OSwrJhUABxEuAUQxAgB8PygPAEE7NAMyAQA2AXwfEQAADgEAAA0BXC5HAFJLDAIEAHxPCA4EByorMQAvLyorMCkBNTMyPgE1ETQmJzUlMxE2NTQmJzUhFQ4DBwYPARMeARcVITU2NTQmLwEHFRQXASMWFRQHNgsBBxMeAhUUBz4BNTQlETQuAQceARURFAYHNgIE/jEPNy8IM0oBPifrNzoBqgokKS4cMgRBpjRVM/5WRA4VhWBqAR+wMwxQF48wkgcMCh0qLP4bFUxUQy4QHXE3JDI0A5VLWRYna/v44lskMAY5OQIKDx0cNAVU/sJhaBI3NwkmDBsl+FzBUwMC/CU1FR5p/doBCy/+5wwUGAwWGwEmHx4JA6JXWy0EHVpO/FAxMxcDAAACACUAAAIXBaQAEgAiAC9AJgAgDwIAAAALMA4JCAcYBw0BAAAABgFcBxQAIBoPBQQAfB4BDgIHKjEALy8rMDcRNCYnNSUzERQWOwEVITUzMjY3ETQuASMiBx4BFREUBz4BrDBXAUUnI0gb/g4YOzRiDT1DIRRcJSlGJJwDtExWICdr+x1OPDc3MlwDhUdVOQIaZlP8WEQnA0cABAA1AAAG3QN7AEYAVABkAHQAfEBza2VVRyQjBhAHAQAxKgJpLicDRQFaSwIQJCYKCQByPToaFwoGADwZAmFSAgcwCQkIAgcEAUIBATsBAFw1Vg9hWj0DAHxeQg4IAQAAAC4BXAFIAFJLCgMAfE8ODhgBFAEAACUBXCZmAHJrJBoEAHxvIA4GByorMQAqKzABERQWFzIWFxUhNRY2NRE0IyIGBxEUFjMVITUzMj4BNRE0Jic1JTMVPgEzMh4BFz4BMzIeARURFB4BMxUhNTMyNjURNCYjIgERNCYHHgEVERQGBz4BJRE0LgEHHgEVERQGBxY+ASURNCYjIgceARURFAYHPgED/iIoEBYN/h9PMIoziTM/Qv4UDTE1EC9OAUQhUKdQNmdSFlWpXFV+RRc3Mf4bGDgxOVBu/vlcVkcpExpLJAJgG1JPSTIOIjEzDftCQTQLJD0jDRxJJAKu/f42PAEBATc3AzRCAbjHRjX96jsmNzcWMyoBmEhKHiJniUNGIkMvSUs9gl7+OiUoFDc3LzoBrmhz/aABumNaCRZpaP5MKi0UBUVGAbw6UTABGVNU/lpOOxkBKEAkAahKSgQVW1f+rFA6FgFEAAADADEAAARxA3sAKQA4AEgAWUBROTcqKCcFFQoBAAABNAECAEYBFSQECgkAPy4gHQ0FAB8BAAowDAkIAgcLAQBcBkMPRj4NAwB8OhEOHgEAAQAAKQFcGTEANy4oIAQAfCskDgQHKjEAKiswARU+ATMgGQEUFjMVITUyNjURNC4BIyIGBxEUHgEXFSE1MjY1ETQmJzUlAxEUBgc2NRE0JiMiBiMWBREUDgEHMzI2NRE0JiceAQGTVI9jARs+P/4eQDshQC45bUIeMzD+HT1CPEMBPJwNFmJHLwUaBFoCWgMNExM0IkxgNjADe4VBRP7n/jhBIjc3KUIB4zVJJjs8/fAtMAwCNzchOwG7QlEVIWT+9P41LSgYCWQB3TJHBCk+/hMfHRsUTU0BulZaBBZTAAQAPf/nA8UDewAQACAALQA4AEFAOQABKyQBAAAzAQAYASswBAoJLgEAAAARASQwDQkIAgdYCDEKMy4CAHw2KA4YEQIAVSEUD3wcAAoEByoxACorMBM0PgEzMh4BFRQOAiMiLgEBLgE1ND4BNw4CFRQeAgMUFjMyPgE1NCYjIgYBPgE1ECceARUUBj150X98zXZHfaJdfc95AWOCgj5lTGWIQCpReBx8YzJWM29iX2oBYUtQxEY9LQGugNR5dtB/Ya19RHLP/uZP2IFilGs5JIKnXUSEalABw9XzU6N20Omv/a0psoEBPmFGzKxtkwAEABv+FwQxA3sAIgAwAD0ATwBlQF0hAU4+IxgCDRQCAQAAAQAAAE4wBAoJACcgAQM6PjwORQEAAAAPATQwDQkIAAAAAC4BFDAXBwgEB1UJSQpFAQB8QjgOPhYCMgACAAAiAVwQJAAuJyEYBAB8Kx0OBAcqMQAqKjABFT4BMzIeAhUUDgEjIicRFB4BOwEVITU+AjURNCYnNSUDETQmBx4BFREUBgc+ARMRFjMyPgE1NC4BIyI3MzIWFRQGBz4CNTQuAiMiAYVGglFOk29DfNmGaWgQNC8z/fYzMho9SAFDXEpWOCcSGUQog19VRXJFQnNHV0MYf5pMQ0ZcLzdUXysrA3ttNDlEeKpfhNR3Lf6mJy8WNzkCCiYmA7JNTxgpRPtiA4ddVAcfRUz8UigvEwZCBDf9slhUq3x5p1Qf08CUoDcaZJZdcKdgLQAEAEb+FARaA3sAHQArAEIAUQBdQFI6HgJJUAEAAAEpGwIAOAFJMBkKCQ0BADRQLA9BOBAJCwMHIggHGwEmHzoBDU0CAQcBAAAAHQFcACYALCkiCQREAXwfDQ44AQBYTTQPfD0VCgQHKioxAD8vKiswAREUHgIzFSE1MjY1EQ4BIyIuAjU0PgEzMhc2NwMRFAYHPgE1ETQmJx4BAwYuAScuAjU0PgE3BgcOARUUHgEzMiURNC4CIyIOARUUFjMyA9UPIjIi/hNPNDyfSlaPaTdx0IOUhzlKmBEYOTJERSgf4z5gXS4fKRQ9fmROK2eBWaNrIgEBITNGJUVvQoZsZQN7+0ooNBcGODgsRAGOLjc8dKBei95/ThM7/tf8cTcuEgQ3NwNrY20gKVj9egISNzgmUlg1YqqLMRMWNOSKcLNohwHLOFo5H1mwgbTHAAMALQAAAvADewAkADQAQgBSQEo/PTszMCIRAQhBOSUBChkCAQAAAQAAIwFBGQQKCRQBODkKDQApHAIAAAAZMBsJCAMHNRoCAAEAACQBXBUtADMpIxwEAHwmIA4CByoxACoqMAEVPgEzMhYVFAYjIiYnLgIjIgYHERQeATMVITUzMjURNCc1JQMRFAYHPgE1ETQmIyIGIxYlMhcWMzI3BiMiJyYjIgGgTVI6MkU+LxUyEQoWEQoTJRgdPUz95xt0jwFCkhYVOTI8QQUiBmoBBhsbPio0GBwNHh4mGRgDe5pXQ0c2OEsQDQgSCh0a/h00LAs3N1wBwXMrImf+2f45IiETBTM/AaZWTgQuGxIxQw4UHwAEAC//5QLZA3sAKAAuAEMASgBoQF9FNCogFhQMCgIAChkFAQAARDoCAEgBGTARCgkvLCkDAAAAAAUsJwkIAgcWATJCNAwKAwgcKgE4PQMBFRQCbCMyDUVELyAEfEIIDUgsAgAAADoCAnIcOAABAXw9Dg0EByoqMQAqKzA3ETMeATMyNjU0JyYnJDU0NjMyFh8BIy4BIyIGFRQeARceARUUDgEjIicVFhcuAQU+ATU0Jy4CNTQ3DgEVFBYEFhUUAycuASMeAT82TKZPM1AecWj+7aySSoBOCjFRn00wP076XjtGWZ1ii5IydD48Ab4bGpyMokgYGh+IAQx2FAlCSkdLWTEBBoeJQio3FUsoZr1wlh8d7Xh6PyYxOXA0H3BCTYJM+n0WHytEPBkpI2s/OllfRys1ID8uX3Z5TUQZAidzGxQaRQACADP/5QJ7BG8AGgAlAEFANxQAAgEQAQAAAAsBAwEBLQkKCRMBAC8QIg8gOBcJCwMHGwgiAQgBAAAHAVwNJQADAQB8HQAOAgcqMQAvLyorMDcRIzU+AjczETMVIxEUFjMyNjcXDgEjIi4BEwcRFBYzMjcGJjWea1hYTxw1+PggJiQ9LCVLfVFNViFiQkVZLy9bX/ICOTNCR1gw/vs//apCQSgqJ01LRHUDNzf9aIV5DwNbagADABn/5QRtA2oAIAAuAEAAU0BLNS8oIR4VCAAIJRwBAAIBADIBACUwFwoJCwEAAAoBPjwsCQQcIQ0JCAIHCQEAXAIiDygBAgoBfCsfDj4BAFwXLw81FgIAfDgQDgQHKjEAKiswATUhERQeATsBFQU1BiMiJjURNC4BJzUhERQeATMyNxE0ExE0JiMiBiMeARURPgElETQjIgYjHgEVERQWMzI3LgECfwFmHTUtCf6TpaOAmAo6QwFuGz8zb31iJkACGgMoHCMe/aJiAh4DKhh/biAecXcDLzv9VykoDDlGioqYiwFcTkIwCzv9sUxeL24B35j9WgIZRlMEGUs6/YYML6IBwn0EIEo4/o6ElQQJegAAAwAU/+UD6QNqABsAIAAvAC9AJQACAR8BLB0CAA8wDgoJByEWCAkAACUPAgAfHRwZFwYGRAMBAAcrMQA/Ly8rMAE1IRUOAQcBIwEuASc1IRUjIgYVFBcTNzY1NCY3IxYVNgE/ATY1NCcDLgErAR4BFwKRAVg+Uij+8lD+1yI/NQH2JSUzIaxvMTW6pDwt/qMPFAQY5hw8MRYcKBADLzs7HGBf/ZECu1A+ATs3KxwSU/5p/HI8OU0TKl9f/QECJwQXDzACIURBEkcmAAQAGf/lBfwDagAuADUARABTAE5ARktFPj02LSoiIRsYFRQTEgwJBgMAFDA4AQAaCwJQQjMDAAAwMCwKCQBHAQACAQA4NAUJCAIHAAA6GwIAMzAvJwAFRC0rAAcrMQAqKzABAyMLASMBLgEnNSEVBhUUHgEXGwEnLgEnNSEVIgYVFBYXGwE+AjU0Jic1IRUGNSMeARc+AQUBMzY1NCYnAy4CIx4BBQEzNjU0JwMuAgceAgUv9k3iz03+wiU7NwHETAwQC7l4NyE8MgHrNz8PHKpsCRgSNjIBWHOVIBgFCTL9awEjDBMWE80oLjozKDL+OAEMEA82xiAoNzMVJS4CNf2wAfD+EAKzU0IEOTkDOhEqJBb+dQElckdJFjk5HTEaKj/+lAEKFTVEJi9HCTk5HyEVNS8iQ5b9iR0ZIDUmAbxVRBkZUG79uCEVInEBskdBHQEPNFsAAAQAFAAAA+wDagA2AEsAUgBaAHdAbkNCNzEwLyMiIRYVCAcGDk0CAQAcAVEBAEcrKB0aBU0wKgoJWQFUPTYRDgUAEAEAAjABCQgCB0IBJToiIR8dFg8CBwQLAgFMAQAAAFFNQC8EfE8lADwwKSMEfDoEDQAAU0cCAFlUQxUEcgtXAAMHKioxACorMCkBNTY1NC8BBw4BFRQWFxUhNT4CPwEBLgEnNSEVBhUUHwE3NjU0Jic1IRUOAg8BEx4DFwkBFhUUBzMyNjU0JwEuAgceAyUjFhUUBzYBMy4BNTQ3BgPs/g5SKWA+FRo0MP5lLGNpOVD++is4IwHmSCViLzwoJgF3OV9OM1jqAyYoMiP82wF2MBsYGy9B/qYmJzIrER4WEAJ+mh0HRv1/uBYRC0s3CzMXOYFMGS4kIjAGNzcGOVtDYQFiOh4IMzMGLSEzhTlGQiAoAzMzCjtRPWj+wAM4KBoIAqD+AkIkHx0qGitaAdcyJAsBDB8aF1ggJxQTSv0oEx8cFBtTAAQAF/4UA+wDagArADIAPABIAGhAXjw0JyYlGBcWCAcKLRAUAUM9AgEAAQEwAQA5KyAdAgUtMB8KCTwQQwo9OgoHCwMHMwk8JiUjGBYIBwBGAQAANCAXAwAwLSwpJwcGRAIAAEE/PTkEAB4BAAB8Rg0AAgcqKzEAPyoqMAEhFQ4DBwECIyImNTQ2MzIeATMyPwEBLgMnNSEVDgEVFBcbATY1NCcXIx4BFz4BATcBLgIHHgEXEyY1NDcmIyIGFRQWApMBWTFELzcb/vNstDtVQy4WNTMVQjU1/tMMHSI0JgIIPkEcpn0ZZeqeHhUFFyz+pCH+/h0nNSsoHR8PUjEfDB8nTANqMxU9TXtG/VT+6UEuKDYWF4mQArwfQTAdATMzBB0qK0T+gQEzPEVwFQQYMzYzN/zkUAJWRDsWBCQ4SPugEzslGAknGygwAAQALQAAA3MDjwAWABsAJAAsAC5AKCEcAQMGEwEMAQAmCgIAKiUiEQQGMA8KCRkBHRgCAAAEARMwAwkIAgcAKiswATMDITUBIyIGByMTMx4BMyEVATMyPgEHMzcOAQMBPgI3AQ4BJQc+AjciJgM3PET8/gIfc2+eaDdUNyNRWwHs/etWXY1do48pHlaB/lQpNR0cAb01O/5ALxgzOSgvLwFS/q4OAyVVdAElGgsW/ONOb72mM0wCVv2DARskKwKVAyxUphkzJg8LAAADADH+EgJ7BYEAMwBJAF4AW0BTNCgCHQ8AAQ4DAgE2ATMcHQ1CAQBOAQAsASsPDgAAAAAAWAEDMwQHCAMHWDYdBAQlAQBaAUpFIAAETi80AABQAU5CLA8ECAFVOigTCwVpPxgAAgcqMQAqKjAFFBYXFS4CNTQ2NTQmJzU+AjU0LgI1ND4BMxUOARUUHgIVFAYHDgInHgEVFA4CAzQ3DgIVFB4CFRQGBz4BNTQuAhM0LgEnFhUUDgIVFBYXJjU0PgIBqmxljcViO2pnRF4vEh0MY8iJZmsUFA1+WS0uHwmpsQwfCn3jYog/ExcSMy9PUg4UEzUkSTRiEhUVlJXjCR8N7FF1DDABZp1QMOw8WoAQRApCYD0jYXM/HFefZC8MdVApaFVFIWurJRIUCgE0rYohQIo4BOjIaRdceEAaVVZlKEJvIiV7TCVITFn8njJXShhGiydmTl0cYqUkbMYjLHpEAAABAJ/+RgEhBWsAAwAfQA0CAgEDAwACAgMDAQEALzMvMi8zLwAvMy8vMy8xMBMRMxGfgv5GByX42wAAAwAv/hICewV/ADsAUQBnAGBAWAABMQM8Hw8DBBMCAVU0AjIyMQ1gAQA/AQAlIgIrAwQAAAAAAEoBEzESBwgDByIEAjcBAGM8AmBSTT8PBwAHTQwfAABYAVVKMhMEGgFdQjQuFwVrRykAAgcqMQAqKjABFBYXFQ4BFRQeAhUUBgcOAQc1PgI1NCY1ND4CNz4BNxQmJy4CNTQ+AjU0Jic1MhceARUUDgIDNDY3DgEVFB4CFRQGBz4BNTQuAhM0JiceARUUDgIVFBYXLgE1ND4CAaxsY2NsFRQOXFQ4fFBFXSsxDBwiGiSbLQUEZJRPDBgNZ2ZzSmuMDSAKfVJObHcUFA9BQmFlDxQUN2RiQkEOFBV3bE5SCh8OAs1edwxEDHdaJHNdSShPmjEgGAI0CjtXNUHvLiYuMi0kMTwKAQYBHmuFRiRHclsqUHEOMRkjtGInRZc7/XNVlzcinmUdYlNNLUdpKSWHUiFAS2AEFVSEJCdoSitGVmYhXqEkNZtTHTR+PAABAAwBggRNAsYAGgBfQD8BAQAAEBAJCQQYGAQECwwMDUAAUABgAHAAgAAFAAAQACAAMAAEAAABTwxfDG8MfwyPDAUPDB8MLww/DAQMDA0vMy9dXS8zL11dAC8zLxEzLzMvETMvMy8zLzMvMTABMw4BIyImJyYjIgYHIz4BMzIXFhcWFxYzMjYEFDkGmW41d8uSQURbEToIk2k1M2WyYDMeI0dhAsWfpCJVPVNgpJ8OHUwqDghe//8AFAAABbwHPgA2ACQAAAAXAI4BgQIj//8AFAAABbwHNQA2ACQAAAAXANwBgQIjAAQAWv4UBbAFngA7AEcATwBiAHVAalJIKgEABS84PQYCFg8CAQAATUtJJQQAUAEvMCAMCQAAPAEFAQA4JhYJCAAAAABCAQ8pDAcIAwdbCSgMBQFFPw8OAhI0AgFNAQBaCUUPAABbUEI9FQUAPBYGA3k/EgBSAUc0YA18VxsKBAcqKjEAPz8qKjABFw4CIwceARUUBiMiJzc+ATU0Jgc3LgICNTQSNiQzMh4CMzI3MxEjLgMjIg4CFRQSFjMyPgEBBxYVFAYHPgE1NCYBJwYjIiceASUGBw4DFRQSBBcuAzU0EgV1O0rB334XbGvBug47Cl9hKytamv67ZXLFAQ2VOGGGLx9PNFI+L216hk1oqnhDhOyYXquf/eEeQTEzUlo5AbgGLzQZFjNE/Y2bYzlYPSGUASbLhduZTdkBTCFrk0gxBGRIZ4kJPxQwORsmAcwHc8UBBJKfARPEbhEkCzj+RWKVYzFdrfiNxf7NrD5+/nUzFT8rOx0KTzYsRAVBqhUEJ0mnO1IweIidS7T+z8kXI4i+33nFAVsA//8ALwAABXsHWAA2ACgAAAAXAI0BRAIj//8AGf/hBkgHbwA2ADEAAAAXANgB3wIj//8AWP/lBi8HPgA2ADIAAAAXAI4B7AIj//8AM//lBlAHPgA2ADgAAAAXAI4CAAIj//8AOf/jA3MFNQA2AEQAAAAWAI11AP//ADn/4wNzBTcANgBEAAAAFgBDdQD//wA5/+MDcwVCADYARAAAABYA13UA//8AOf/jA3MFGwA2AEQAAAAWAI51AP//ADn/4wNzBUwANgBEAAAAFgDYdQD//wA5/+MDcwUSADYARAAAABYA3HUAAAQAPf4UA3kDewA6AEgAWQBtAI1AhE5JAAMDTA8BNQs8EwIkHgMBAABaVQIAAAMwLgoJOEw1Cg4BAAAAZQEhC2cAAAA7ARIBAGI6JAkIAAAAAEIBHjAaBwgFB2VXUANTSRMSAkY/WkI8IwQhBwMBDwEAAABODgJgMlMAVQACfEk4DWkWRgo7JAJ8PyENHhoCWgdrDXxeKQoGByoqMQAqKjABNCYjIg4BFRQeATMyNjcXDgEPAR4BFRQOASMuASM1PgE1NCc3LgM1ND4CMzIeARUUBiMiJjU0NgMHHgEVFAYHPgI1NCYTFBYzMjcmNTQ2NTQnFhUUBiUOAhUUHgEzMjY3BiMiLgE1NDYCkzgoS3pFUYlRQ5MsI0jEbR9ETlWfZgwhBWZpVmFHjXBAR4G0bliQU0gxLTsS0h0XHDk2NFIpLLcxHQkoPglOFhL+52CFRnC2Xz6IPINQZqpkeQMEGyVXo2dfm1Y9MC9ndwxDEl4yQGxCAQI1Bj4xOxTXBUR0mFpgsYVPNV44MUA/JAdN/F43EykcLT0ZCy07Iiw3A2ggIAgNMwQmDTcdHxoROowkfqdWdbtoMCwrXKRlddf//wBC/+UDagU1ADYASAAAABYAjXUA//8AQv/lA2oFNwA2AEgAAAAWAEN1AP//AEL/5QNqBUIANgBIAAAAFgDXdQD//wBC/+UDagUbADYASAAAABYAjnUA//8AOQAAAgwFNQA2ANYAAAAWAI3BAP//ADkAAAIMBTcANgDWAAAAFgBDwQD////NAAACXQVCADYA1gAAABYA18EA////swAAAnUFGwA2ANYAAAAWAI7BAP//ADEAAARxBUwANgBRAAAAFwDYAPYAAP//AD3/5wPFBTUANgBSAAAAFwCNAKoAAP//AD3/5wPFBTcANgBSAAAAFwBDAKoAAP//AD3/5wPFBUIANgBSAAAAFwDXAKoAAP//AD3/5wPFBRsANgBSAAAAFwCOAKoAAP//AD3/5wPFBUwANgBSAAAAFwDYAKoAAP//ABn/5QRtBTUANgBYAAAAFwCNAPYAAP//ABn/5QRtBTcANgBYAAAAFwBDAPYAAP//ABn/5QRtBUIANgBYAAAAFwDXAPYAAP//ABn/5QRtBRsANgBYAAAAFwCOAPYAAAAFAB3+AgP8BYsARgBZAGYAdgCIAHNAalIBVDArGQJeZIIHAjaAAwFUOCIMDEgBAABzARQBODBeAABrAQAAeG5oZ2JhW1o7DgkLFmQ2AAA4gAcMBAduAXBEW1cHA4R9AgF8M3AKh4J4d2hST0tIRzsrJRoJABBQRIQNHwF8fQMNAwcqKjEAKiowASImNTQ+ATcSNQ4DIyImNTQ2MzIeAhc1NC4CNTQ2MzIWFRQOAh0BPgMzMhYVFAYjIi4CBx4DFx4CFRQGAzM+ATU0LgE1NDY3JiMiBhUUEgc1LgEjIgYVFzYzMhY3FRY2MzIWFzY1NCYjIg4BByMGAg4BFRQWMzI3JjU0EjU0Agg+SwoUD0QnRnZKITtKSjUpTEl1IRouGUwxL0oYJCImY1ZTJC9QRzghU3ROIAMZDxEMCgwKR0IIAQEPDxUaChMkME80YLsYJjUCKTAF1OVCxRoWOhAEOysjSJJqCAknIRU3KyESVC/+AnxyBpDKagHnIgMVKRM8MjI9EhglAxQpcJ54M0pRUkc5fYOJKA4BIB4XQDEyQBcrFQEjuWl9cFx5jDx5eQVYChEOMnNzMj48HwJFMUj+2bIOIiwoIBQbGg8KBRoSERgGHSkUMnJk/unn2VdgXgYopTMCS8MlAAACADsCtALvBWgADQAZACNADwcHFBQODgAEBBcXEQoKES8zLxEzLzMvAC8zLzMvMy8xMAEyHgEVFAYjIiY1ND4BFyIGFRQWMzI2NTQmAZVXpl3Lj4/LXaZXWn1+WVl+fgVoWadaj8vLj1qnWYJ+WVl+fllZfgAABAA9/ucDeQR5ACYALwBAAFMAi0B/NTArAAQCMwkDAiEFEQFNSQMBAAA8AQBBKAICLRgKCTgzIQonCAIAAABLASEFTQAAAAAADgFJOAwJCAQHGwoZD0s+NxoEOjArJxgOAgUkLgIBCQEAAAA1CAJgHjoAAAAoGwIAPBkAA3wwJABBAwIAAAAREA8DWi5RAHxFFAoEByoqMQAvLz8qKjABNCcDFjMyNjcXDgEjIicDJxMuATU0PgEXNxcHHgEVFAYjIiY1NDYBEw4BBw4BFRQBFBYzMjcmNTQ2NTQnFhUUBiUOAhUUHgEzMjcGIyIuATU0NgKTMc9Sb0OTLCNP3XJISV46YmZxhOuNVDpSa4JIMS07Ev7TvxMtFERkAXkxHQkoPglOFhL+52CFRnC3Xol5g1BmqmR5AwQjFP2iSj0wL3J6Hf7lEwEjPsd0hOWCBv4T8RJrSDFAPyQHTf4cAjQIDAUTvHl7ATggIAgNMwQmDTcdHxoROowkfqdWdbpnWitcpGV11wAABQAn/+MD6QWeAEwAYQBsAIIAlQClQJuOhyYDK4xUOgJkPAIBAACDAQB4ASswGAwJOIwgCgAzAQA1AQAqEA4AQAEAAABuWAoDJAZkAGJbTUoEFzxQDQAAAABfAWosAAkIBgdFCYeFgzUoJgaRiYBubVRKBXAvWBECdXsDAUEBAAAAlI5NPwRcHZEAfIkjCng6NjMEZzhwDQAKAQAAYlsOA2MvdQAAAXx7FA0QAXRnAw0GByoqMQA/KiowFyImNTQ2MzIeARcuAicjNTMuATU0PgEzMh4CFRQGIyImNTQ2NzY1NCYjIg4BFRQeARchFSMWFRQHFjMyNjczFRQOASMiLgInDgElDgEjIi4BJy4CBx4BFx4CMzI2JSYjIgYVFBYzMjY3MzY1NC4CNTQ2Nw4BFRQeAhUUBgEWFRQHBhUUFjMyNyImNTQ2NTTTT11oZRwuNhUBGC0Q48QwKGXChVB9Vyw9Ny1AGxoGbkI4ZTwgVxIBAPMGM3FeXoUON0qPYC9FNzcmK2kCkjVTQzZrZjQfPTkmMz8sW0JbNVF8/fRIVDFEOTIyWlEQCSpYJIFulpcxaTMBAXwOGCMnJR4bIiYTHWVBSnULFAY3Y3YtRnqBY3S7ay9RZThCUTYsGzooChI1SDtnPTpv7ExGVBB/iTFcSxpRq28VJC8iRUfNNTUiOSQWKREDBiYqUTgrVUdSPC8tOUKrKTZZmeV6RHXIOB/ViU+g/Z1GCA0ECRwZIiQzHRcxFysbCEoWNAAAAgBA/lEDVwXTADgASACIQEoGMSkSAjA5QRMEIAQcHB0dGSAgGQAAAQE2BAQ2E0E5MAQ8RM8dAR0dHBwszwcBBwczMywsPDxEIyMWFhDAAQEBAQAAEN9EAUREEC8zL10RMy8zL10RMy8zLxEzLzMvMy8zL10RMy8zL10REhc5AC8zLxEzLzMvLzMvETMvMy8REhc5MTABXRc3HgEzMjY1NCYnJicmJyY1NDY3LgE1NDYzMhYXBy4BIyIGFRQWFxYXFhcWFRQHBgceARUUBiMiJgE+ATU0JicmJw4BFRQWFxZylRhmU09jExQ70pouTmVTNDWshY2yEpkSWEhGYRcWLMClMUk3JGBCQbmRkr0BzDs+VY5xN0Q2TINxRhqEZ2RKHTYYS51zQWx6ZJkePnw+h7WtrhN8Xl9CHDkdOo58QGB4bE4zMT2MUI+5uQHqJWQyOnxrVDYwXDY/c15RAAABAE4BYgIfAzEADgARQAoOAAcKB0EDCwoHKzEAKzABMhYVFA4BIyIuATU0PgEBNWCKP2w/P2k/PWoDMYhfP2s+PWtAP2k/AAABAAX+aQOPBboAEABfQC0LDg8BAQgKCg8PCAkJCAwMDQ0QEAAEBAkJCgoMCwsMDA0ODg0NEA8PEBABAQAvMy8yLzMvETMvMy8RMy8zLxEzLzMvMi8ALzMvMy8zLy8zLxEzLzMvETkvEDw8MTABES4BNTQ+ATMhFSMRIxEjEQFRlLhgqXsCBnWMtv5pBBUJ2LWFwl+t+VwGpPlcAAAFAET/7AQ1BZ4ARABOAFwAaQB4AHdAbldVSUIgHwAHJwtqEQJfLwIBAAAAbgFFAScwOQwJOAtfCgB1ZTIDBAEATxcCLzAxCQgDB08BTEcgAWdibjACCCsDAVpRPhsERQBMDXxHJAplXVdJRUIUEQhcDmcNfGIIClwragp1MgIAfHE1DgYHKioxACoqMAEUDgEjIi4BNTQ2MzIWFRQGBw4BFRQWMzI+ATU0LgEnNT4CNTQmIyIGFREUHgEXFSE1MjY1ETQ2MzIeAhUUDgEHHgEBFhUUBz4BNTQmEzY1NC4BIyIHHgEVFAYnJiMiBhUUFhcmNTQ2BRE0NjcOARURFAYHPgIENVqhZ0RuPD8yKT0OEhEOKhcrSSpJkWdBVypvU0dVDCMj/nM3HeXHUpFqPE2GVsbL/kCJYE5NYVONVZNTCyiXnCrOGBckLB4gCyj+m0ZLc2IVHjYvEgGga8t+O10yOFE9KxkZFBEYFBgZQnJIYJ1rFVo4en5CapRmYPwaMDIbBjc3QF4DI8zaLlJ0QkmBXBUW1AMuaJqcfSySUGOI+uRRuWOtZQQp0JpQaagTPiMbRyMuJDo3JQM9b6c+NLaj/NU4NAsHFjwAAAQALwDTBPoFngAcACcANwBJAGVAXAwAAhMPATgsKAwMBAE4BiYNIAsCNR4TDQAaFwIAGQEAOw8RACxAMAoFBxABRQk4KBgSBCMUGgEBPAMBcixFCgAACwEAEQwCUwkjAAAeAQUBAABYFAEAcjw0CgQHKioxACorMAERNCYnNSEyFhUUBxceARcVIwMjFRQWFxUhNTI2ExEWMzI2NTQmIyITMgQSFRQCBCMiJAI1NBIkFyIOARUUHgEzMj4CNTQuAgGWGjQBQ4+KrJUdJh632TU4MP6qPB+TEh1LX1RQBT2mARqkpf7op6b+5aalARqolP6Tk/6UcMeYU1WWxQJmAa5HKwMdZVyHL+0tIQQdAU7bNh4CHR0wAlv+zwJXRkhWARul/uamp/7mpaQBHKanARmlQpP8lJT9lFWYx3Fwy5VTAAADAC8A0wT6BZ4AHwAvAEEARkA9EQEHDgEwLCAMDAAAHgMCAAEBNRsHABABADAOEw8sOCgKBAcwIBEQAwIBAAg9CgFyJD0KUQoXCnI0LAoDByorMQAqKzABMxcjLgIjIgYVFB4BMzI3FwYjIi4BNTQ+ATMyFjMyAzIEEhUUAgQjIiQCNTQSJBciDgEVFB4BMzI+AjU0LgIDnCALIxBEYDhxiz90TZJiEXS8ba5iaLxyQoMEHfqmARqkpf7op6b+5aalARqolP6Tk/6UcMeYU1SUywS26z9ZLKuacZdKfyePX6tmbLNoKwERpf7mpqf+5qWkARympwEZpUKT/JSU/ZRVmMdxcseVVQACAAoCxwbPBYMAGABDAGlAYCcAAgIZAQApJgI/PAoGBA4BKiQCAjMIDAkAAAA+NhwDNzQdFRIFOBkUAAIHJyYZAyhACggCIQ8CATUqAgA3ATwBAE4vKAAbAQAlHQkDAAB2QCEAEwEAFQEAAE0PAQADByoqMQAqKzATESMiBgcjNyEXIy4BKwERFBYXFSE1PgIFMxUjNT4BNRE0Jgc1IRsBIRUiDgEVERQeAhcVITU+AjURASMBERQeAf4xVkYKHQoCigofCUdYLxw+/pooJQsC5RH+PyEfQQEa2dgBDiskDQISJiL+iy8oEP7vGP7xCCYDXAH4QUi4uElA/gZDLwEgIAMRLD4iIAEoSgGWSSwBH/4zAc0fEy8y/mghIR0PAyAgAhEtMQGw/b8CPf5WLCsaAAACAI8D/AInBTUAAwAGABpAEgQBADADBg4HAQYFBANDAwENBysxAC8rMBMjEyEBNyPHOHEBJ/6euHED/AE5/v7LAAAE//IEGwK0BRsACwAZACUAMgA6QDIqJhoSDAAGLRgBAAkBPB0tDyMBADwYAw4CByomAlMgKA18MBoKEgwCUgAPDXwVBgoEByoxACorMBMUBiMiJjU0NjMyFgcuATU0NjcmBhUUFjMyJTQ2MzIWFRQGIyImFyY1NDcuASMiBhUUFvROMTZNTTY1SmUfIBwbNz43KBIBL080NklHOjZLljY+BAcGLj46BJ49REc2OElHmxUpKRY3EQE3Lig7YzhJTjMyTUstJzw6KAEBPCorNwAAAQAP/twEVQVvABMAi0BTCw8KDAMODwoNAggQCQwDERAJDQIHEwYMAxITBg0CBAAFDAMBAAUNAgMDAgIMDA0NDwUFAAATBgYTExAKCg8PEAkJEAICAwMGDAwNDQ8GBgoTEw8vMy8vMy8RMy8zLxEzLzMvAC8zLxEzLzMvETMvMy8RMy8zLxEzLzMvMi8zLw8PDw8PDw8PMTATIRMzAyEVIQMhFSEDIxMhNSETIQ8CWNCGzQFl/l57Ah39ptCHz/6cAaF7/eQDXwIQ/fCd/sWc/fECD5wBOwAABwAZAAAIOwWDAEAARABKAE4AXgBnAHAAh0B+ORICAwYOTzghFAQXHAIBAABBAWRUQz8EAAYwAAwJRgFgAUUBKgFJATAOFwBuTQJpW0w0MSQGADMBABwwIwkIAwdnXzw5BFQuAU1BAgBJQwIASxQRA20TRgAADAEAAAkBVRhQAFskAmEpAnxYVA5AMgIAaAEAaTgCcC5rAAQHKisxACoqMAETIy4CIyIGFR4BFREzMjY3MxEjJisBERQeATMyPgE3MwMhNT4CNREhAw4BFRQWFxUhNT4CNwE+ATU0Jic1BScjFgM1DgEHFhMzNwYlETQuASceARURFAYHFj4BASERNCYjIgYHATMmNTQmNw4BB5h4SVOevXV7VAEBzXp7AUVFDfHFGV1jhNijNlZ9+1RjURf+PIgfIFVZ/hk9WEw1AWcgF29eBYVStJaKHT0xVkTGQmr9BRAnKRUMJjQ7Qhz99gGqGzMiJyP9WL41AQEeOAWD/rZad0JFawoRDv6JdHf9/uD+JENHKEyKXf6WNwUlUl8Bs/7rQVw2SU8ONzcJRntpAthDOSE+KwQ32aI8/XmuIyYNF/1tqm9jA9M+Qx4FEyhC/BJUQBYBIEYCYAHFTD8pRPtYMkkPEgg3SQAFAFj/4wYvBZ4AIgAtADcARQBUAGRAWy8uJCMVAQYoMgEADwFGOBIDABQBKDATDAlNIQIAIgEAPwACMjAdCQgCBxUBUUpGPy4hEgU2LAIBFBMCSxhRDU0kAgB8SjYOOC8CAAAAIgEAA00sQgB8OwYKBAcqKjEAKiswPwEuAzU0PgI3PgIzMhYXNxcHFhIVFAIGBCMiLgEnBxMBLgIjIgYCFRAJAR4BMzI2EjU0AQYCFRQSFhcmAjU0PgElHgESFRQGBz4CNTQCJsF4OFI5HiJCZDxBlq9ki9Vqe0J/cXBz0/7kpFKYijx3yQLLMHiKS3zDbQNP/ThFtm17yHX8t6ascNqh19U9ewJlcZ9QW1NTaTJjvRKONXWLnVVaopKAMTVEH0NNkDGScP77nZ3+8clvHT4qhwFjAztKaDOK/v6p/u0CFfzHbXCKARPD9QG9Zv7Dx6X+78M1hwE++3/MtYE80/7asKf1Xj6dx32zASzFAAMANAD3BZADQQAjADIAQQA4QCsSATcBAA0BABwwFwAHPycgBAA/NzMwJyQgFxINAAs7LAFmCTsKZiwbCgIHKisxAC8vLy8vKzABPgI3Nh4CFxYOAScuAycOAwcGLgE3PgMXHgIXLgEnJg4CFR4CNz4BNx4CFxY+ATc2LgEHDgEC4ktHSS1IjnhKBghLkVlGgFpVBBhBWIBIWZFLCAdKeI5HLUlHCFhrMT1jRiIBSG42UVbvREpIODduSAECP3lTMmoCYEM8LhQgCUlyQk6ZXQkHN0NVAxhAQzcHCV2ZTkNySAkgFC48hktKERYTPlElOFsmDRM/ZUNBJg0NJls4MWsxHBJLAAABAA8AiARVBMgADwB2QEEIDQwMCQcPBggDDg8GDQIEAAUIAwEABQ0CAwMCAgUFAAAPBgYPDwwJCQwMCwoKCwoKBgYIDw8LCw0DAwgIDQICDS8zLxEzLzMvETMvMy8RMy8zLwAvMy8RMy8zLxEzLzMvETMvMy8yLzMvDw8PDwcQPDwxMBMhETMRIRUhEyEVISchESEQAeGDAeH+HwEB4Pu7AQHi/h8C6AHg/iCE/qiEgwFZAAACAA7/RwRWBQEABgAKAFtAKgkJCgoHCAgHBwQEAwMFBgYAAAUCAgUBAQUFAQkJBAQDAwYGAAoKAQICAS8zLxEzLy8zLzIvMy8yLxE5ABkvMxgvETMvETMvMy8RMy8zLzIvMy8RMy8zLzEwJQE1ARUJAiEVIQRV+7oERvyOA3L7uQRI+7jcAcyNAcyq/pj+mP5cnAAAAgAO/0cEVgUBAAYACgBdQCsJCQoKBwgIBwcDBAQDAwUGBgAABQICBQEBBQUBCgoEBAMDBgYACQkBAgIBLzMvETMvLzMvMi8zLzIvETkAGS8zGC8RMy8RMy8zLxEzLzMvETMvMy8RMy8zLzEwEwEVATUJAQMhFSEPBEb7ugNx/I8BBEj7uAUB/jSN/jSqAWgBaPuNnAAAAwAdAAAFugWDADcAPgBUAGZAXUlAAgkEAQAcATwBRjkdGQwFQwEJMAsMCRIBIgEAJAFKPwIiBAIAAAABADYBACEmKAAAUTACAAAALTAvCQgEBwwBP0sBIhsCJgEAABIBVSo/AE4PBQMCAXxLNg4CByorMQAqKzATITUhNSEBLgEHNSEVDgEVFBcBEz4BNTQmKwE1IRUOAgcBIRUhFSEVIRUUFhcVITUzMj4BPQEhASMWHQE+AQkBLgEjIgYHHgEXAREUBgcWNjMyNjWyAc3+MwGW/o0lQlECk1piRwEhwTUzRzgKAb4sW2Az/u8Blv5UAaz+VF53/V4SV1UV/jMEZ688GTH97/5gJzQsCQ4HGiQeAaonNQgUDz8xAZNzWgJxQD4DNzcCGjYqdv4fAUVZfzcyTTc3BkF8WP4vWnNcaGAwCDc3LUY5VAQVJlMXNjb8+QK8RC0BAQswNP01/qY5MBgBAT4/AAEANf6DA6ADagAsADhALhAKAisBABMBFgEGGg0JCAcnCh4CCgoBAAAAEAFJAgAAAAAhAQAbFwJKJyUAAgcqMQA/Lz8rMCURMxEUFjMyNjczDgEjIiYnDgEjIiYnFRQeARUUBiMiJjU0PgE1ETMRFBYzMgI7wRckGyMGJQZtUkJKED98SysxJw0gMSsmLCUVviY8W8cCo/2OUk48N3JyTkpKThsjGzQ/jiAqPDcpI55/ZgLh/cd4YQACADX/zgO5BgIALgBCADVAKCIBACUfMg4HPioMEgQAKicfEgQFLzgBJCICSAsvDRwBAANQOBkNAgcqKzEALy8vPy8rMBMnPgEXHgEXHgIVFA4BBw4BBwYmJy4CJyY2Nz4BFx4BFzY3NiYnLgEnJg4CAS4BBwYHDgIVFBYXHgE3Njc+AdxQTMpdZq1FKiwMFDElMFdOZtVVLUYzBglIMjqMXVh2ZRIEAy0XGHlUOEMuUgH7O1RPdU8pKxMjPCxPL2c+JCsFVmYiJBYYgnlJtosqL8DbT2Z0LDgPOh9Pckhvuj5HTQMDOFBji0HPNTt1BwUEDib9AUNBAQNrOmltOkqNKRwCFC2RWMUAAAEAHf8jBY8GBAAfADNAKxsPAgMHCgEcAQAAAAAfIQcMCBoSAgARChYOAgccGw4JCAcCAQAJPg8aDQcrMQAqKzABEyMuAiMhCQEhMj4BNzMOAQcuASMhIg4BIwkBHgEzBPAMKSAleXv95QIv/aYC+FNaQCcvLRYVJ1Ik+/kOLS0OAsr9OiCSIwX2/rpmSjr9Iv1KJ11kuXiaBw8DAwMvA6ICDAAAAQAz/zEGbQYCAB8AQkA6AAENBQEAAAAAHhsCHRoNDAgAFRIIAwAUAQAzBQcAAgceBgIACAEAAEYBDAATAQAcFQIAAEYOGQACByoxACorMAERFB4BMxUhNTI2NREhERQeATMVITUyNjURNCM1IRUiBaYvV0H9jWRg/SMvV0H9i2ZhwwYvwAUI+v5FSBkvL0JkBYv6dUVIGS8vQmQFAssvLwAAAQAU/9EEPQPlAD0AM0AnGwEjAQISIhYOBzgJMSweCgg6OAADWyY9DQAACwEAFQUCTAEUAAIHKjEALz8vLz8rMAEjBgIGBw4BBwYmJyY+Ajc+AjcTIyIGDwEjPgE3PgEzIRUhBhUUFhceATc+AjczDgIHDgEnJicuATcCrucRIB4QDTIxKE8IBgYQFAsDPyAEPGEpShQrIw4qJR1iQQL8/v4ZHhYcUSoXFQYDKwEwQiAkYChCIhMFCQM1yf7/uUw7Qw0KNCQbJSAaDQRKPSUB1ScaQCdtMys/sO/yLFQWGg8hEi4qFVOFURIWCRswZzzFXgABAAT/GgJjB1UANgAeQBQjEQ4JCCoBAAAAMiAVAwRZABsABysxAC8/Ly8wAQMCBwYHDgEnLgEnJjY3NhYXFj4BJy4DNRE0PgI3PgE3PgEWFx4BBw4BJicuAQYHBhYSFgGLAgJEFSYRdS4WJwcMGCUiNR4dJxACAgQEAgQLFREKNxsaPToPGxsbDzg4ExYlFQIBBhYMA+f+Rv6U7EwxFigVCzITIzwSERgiHjRxSkyCbdlvASdazJ94PSJTERADFAoRViISFwYVFgQbFBpJ/u/VAAAFABsDbwJMBZ4AKwA5AEIASwBZAGFAWUw7OiwmDwAHKUEBAABXUTcGBAAAKTMMDAlIFgIAGgEAQzAcFxQFQSQfCggCBxcBAAAAMAFoDjMAAAAAOwE3HAJ5LCcAUU9MSEM+AAdgA0UNSgkCdFQiDQQHKjEAKiswExQWFRQGIyImNTQ2MzIdAR4BFRQzMjcXDgEjIicOASMiJjU0PgE3NTQjIgYXFRQWNy4BNRE0JiceAQM1DgEVFBYzMgcmNTQ2NwYVFBMuATU0Nw4BFRQWMzI2yRQ3JyUtl23JAQEKChclJTYsVBclWyw+VT9bmUQcJawmMh4VFycPCidDPCEWIF1jDRJDWBINEBodGB0DDgVQAyAKGy0lFzNUrGssSzcfHSkgHz0cHzsxLUQyS2JCElX+STcBEScvARA3LgEPIP6srCc6LhwjNBFBGCIkLTNbAXgKEhMLIAsaFhoJBAAEAB0DbQJ/BZ4ADwAdACkANABEQDwAASchAQAAMBgCAAAnNQQMCSoBAAAAEAEhMwwKCAIHYwgtCjAqAgB5MiQOEAEAAAAYAWIeFQB8GwAKBAcqMQAqKzATND4BMzIeARUUDgEjIi4BFy4DNTQ2Nw4BFRQWNxQWMzI2NTQmIyIGEz4BNTQmJxYVFAYdUY1VVYtPVI1SVItQ0Q85KRk1NkROWT9MOS0+RDc1QOwlKisvNhUEg06CS0mBTVGBSEWBoA85OEkrO2s7K3VLVGvoepBpan2JZ/6uIE9OVmMeSaE6RgAAAQBGAAAF4wWBAEIARkA+OjYtJCEdGhQRDQkADDgIASwXOAoqBAImAQAsAQAIEAIJCAIHPjo2Mi0sKSUkIR0aFBENCQgEAQAUPSsDDQcrMQAqKzABEyERMx4BMyEnLgInLgE2Nz4BNz4BMzIWFx4BFx4BBgcOAQ8BITI2NzMRIRM+Azc2EgInJiMiBwYCEhceAwKBIf2kHhQzQQFDBFlxZChFKyMsNG1JRcloaclFSWw1LCMrRTybfwQBQ0E1Eh79pCEZPT5CHCUVQlVqv79pVUIVJRxBQDoBN/7JAUxOLzkbNVQ7Z9vNTl9aKikxMSkqWGFOzdtnV2EnOTFM/rQBNwsbLFdBVgEDAQdUampU/vn+/VZBVi4aAAcAP//lBaADewA5AEIASwBsAH0AiQCWAK5ApYZ+NygESYR4TAsDBAiSAV1RAwEAAAFBIwIAaAFJMDQKCToBOIQtDQBEAYptAgAeAS08BAASCgIAAAB0WFUDHghdAACQAQAPAQBRPBYJCAUHAAFFBXhqEgNhTGgBeioDAQAEAQAAWAoCVgs+AABVAUEBAAB8OkUAQwEAAABkNwJgBWEAbSAeA3xMeg2SAQAAAIqIhn5xKCYHTyqVAI0wAnOBGQ0GByoqMQAqKjABMh4BFyEeATMyNxcOAiMiJicOAiMiJjU0PgI3NjU0JiMiBhUUFxYVFAYjIiY1ND4BMzIWFz4BExUzMjU0JicWBSE1NC4BIyIGAxQeAjMyPgE3PgE1DgExBiMiLgE1NDY1NC4BBxYVFAYnDgIVFBYzMj4BNyY1ND4BAQ4BFRQWMzI3JjU0Ew4BFRQWMzI3LgE1NAQZXaZxE/17ELKLknsrNY2iUGi4Q1Zwfj9LfCRn46MKV081RAcSVzouO1y0eWiEOTeM+iccU1Nj/lgBhylMMViEuj9ti0g4VC0lIz8FFnp5batdFi9SMXMTGGp4P0QtGT5DOSsEA/6hNUAnHxYZL2JjYGBMHytbVwN7U6R0ur5sJUtxPl5dPkozZUU5U1h1QyYuXF4ZEgsFFR42TTkfLGhHLzMwMv7rFiU9dRZHphRIZTOT/ulhmWo2FRgXEyMHAws+XqxzJ54lNlIpAzeCEq4dPFlWLi9QHTAqUncKKRkBRSI9JhUjCRU0NP6DOGBKPVQQCU86YwAFAD3/1wPFA5MAGAAgACkAOQBFAGxAYSIhGhkOAQYcJQEMAQBACwIAMQEcMAkKCToXAgAYAQAqASUwFAkIAgcNCgAJCwE+QyEBKB8YAS01AwEODQwDWBA+DUA6GgMAfEMoDjEqIgMAAAAXAQJVHy0AAAF8NQQNBAcqKjEAPz8qKzAzNy4BNTQ+AjMyFzcXBxYVFA4BIyImJwcTASYjIgYVFAkBHgEzMjY1NAEuATU0PgE3DgIVFB4CJT4CNRAnHgEVFAZUZDw/Rn6mX5Z2Xy1fhnnPe02ZOWLHAV47bV9qAYX+oiNXPlBp/tOCgj5lTGWIQCpReAEyO00mz0ZGLW09qFxdrX5FVGwpan/Jg9R6Mi1vAUQBkZivrn8BAP5tW1u2toj9+0/YgWKUazkkgqddRIRqUBMdY4tcAUVfO9K2cY8ABQBO/hQCTAPJABoAIwAvADsASwBVQExAPDYhHhsaAgEJQwwBSQEAODBDDgAAACQBKAkCHQwPACs8EgcLAwckHRsaBD5GKAE5BQIBSUA8MC0PAgdYMz4NfEY5CiEBcgUXDQMHKioxACorMAEzEQ4BFRQeATMyNjMyFhUUBiMiLgI1NDY3BzM1IyIGBz4BEyMiJiceATMyNy4BEzIWFRQGIyImNTQ2FyY1NDciJiMiBhUUFjM+AQGyQK61NVYwEFMWN0hQNEWDaz2xsxAQFnmlDTGIiBxGYyw3ijocGh0gGDNMTDMzSEVCISEDCAMkNDQiBAgCSv4aBmZzM1UwEjoqLTpDfq5ksasDZ0SDfVdl/ZwnJ0pQDAIdBW9IMzVISjM0R9UoMCwqBDYkJjQBAQAEAH/+FAF3A88AEAAjADEAPwBKQEAbEQIkGQE1KjoKAQEANzIkDhk4CAcLAwcQCQABHRYBLgEAAAA4NDIkIyEbEQEJWAUdAAAAJwEAPRACfBYMAAIHKisxAD8qKzATMxMWEhUUBiMiLgE1ND4BNxMDDgIVFBYzMjcmNTQSNjU0JxMiJjU0NjMyHgEVFA4BJyY1ND4BNyYjIgYVFBbZOTIGK0I3JDkeCA0ITjYBDQYyKhMMPBYJCgQ1RkY1IjkiIjkSJwwVBggOHTdAAhn+LTb+7jtWWSxWQylRXUABi/4OC2BNFzxHCBhjNgEBgnBQSAFWSjU1SiI6IyM6IiUnLRQiHAgCLykqMQABACkBvwRvA4YABQAxQBYCAgMDBQEBAAAFBAQFBAQDAwIBAQIFLy8zLxEzLzMvAC8zLxEzLzMvETMvMy8xMBMhESMRJSkERoH8OwOG/jkBRgEAAQBU/7IEZAdNAAcAO0AbBgAHBAUDAwMAAQEAAgcCAwQFBgYCBQABAQIFLxkvMxgvMxESOS8SOTkSOQAvLzMvETkvFzkSOTEwATMJAQcnJQEEGkr+yP4QxiIBLQGVB034ZQP9W0CX/MkAAAT//v4UBAgFqAA5AEgAVwBkAJZAjURCPjw6MAY2R0o5IgMtAEkcBgQEAg9YVQJaGAQBTQEsJzYNOEctCgAfAQAdAQACLQAKCTgPWgoAAAAAYAEYLAkHCAUHPgICOkRNATA5IB0CIlJVARwfBAF6KjoKAAAAJwFCMwJ9RDAASgYEAwAFTDlJDX5RIgp9UhwKABMBAABgWBYDXh9iAHxdDAoHByoqMQAqKjABMxUjAwYHDgEjIiY1NDYzMh4BFRQGFRQzMj4BNxMjNTM2Nz4DMzIWFRQGIyImNT4BNTQmIyIGByUGIyInLgInFhceATMyARM+ATcOAgcDDgEHPgEFJiMiBhUUFhcmNTQ2Ao3DwyUIGCvOgl1yRTIeLxsKHy07IQQrzc0DDwg5ZYJLYndILSc9AQEZFDAwCAFHEBIdExYTGBkVAgQYLDX+GDEIPVFKXC4FMwQfIUU+/s0UJyIuUEtaKANqP/0Msk6HnGBANEEfMRYMPwMfTJpoA4c/P59Le2Q2XkQ1QEIpCxEPGSaGiJEIHS0hEgYaF0E++wYEWIqYOylsl277mll3MjaVShgwHi1GDD4/GiQAAgANAPQEWARJABoANQCTQFYoKCcnHx8zMyskJCscHBsbKysNAQEAABAQCQkEGBgEBAsMDA0bG0AAUABgAHAABAAAEAAgADAABAAAARwcAScnTwxfDG8MAw8MHwwvDD8MBAwMDSgoDS8zLxEzL11dMy8vMy8RMy9dXTMvAC8zLxEzLzMvETMvMy8zLzMvETMvMy8zLxEzLxEzLzMvMy8zLzEwATMOASMiJicmIyIGByM+ATMyFxYXFhcWMzI2EzMOASMiJicmIyIGByM+ATMyFxYXFhcWMzI2BBk/AqF1OHvGjkFCVxJACJB4OTVkrWAwHiNEXgo/AqF0OHzGjUJCWBFACJB3OjRkrmEvHiNEXgRIo7QjVDxRYaewDhxMKQ0IXP5ao7QjUzxRYKaxDxtMKg0IXAACAAwAAATdBYEAAgAFABpAEQUdAgkLBwMABQQDA0ABAg0HKzEALy8rMAkBIQkBIQKcAkH7LwJG/kEDTAWB+n8EI/xBAAQAKf/PBEIDoAAFAA8AFQAhAFhAThUSCwoGBQIHByEBABEBABcBAAE3BwoIAAAABAEAFDghCQkCBw8JIRcUEAQFEgEPBwIAAAAKAVcCBgATEQJ6CwUNHRsCVhIWDXocFQoEByorMQA/KiswASEJASEBMxMOAQcDEx4BMwEhCQEhATMBIg4BBwMTHgE7AQM5AQn+6wEV/vf+7nH+MTkouLgkQC79pwEF/u0BE/77/uxvAQApOSACxsYgMCsJA6D+Fv4ZAecBxQNARv7E/rRBOQOw/hb+GQHnAcUtPgT+qv6gMTMAAAQAK//NBEIDngAFABEAFwAiAFJASR8eHRgXFAUCCBEIAQATASIBAAABOBEKCAAaAQAWAQAEOAgJCQIHDQsDAQQFFAFXAgwKewYFChEHAgAAAAQAAlUUHgB5GBcKBAcqKzEAKiswASEJASEBMwEzMjY3EwMuASsBJSEJASEBMwEzMjY3EwMuAQcCJwEGARX+6/76ARYj/wANLTknsqwvPCsK/csBCAET/u3++AEUJ/78ESY8JbKoLUMsA57+Fv4ZAef+PEVIATcBLVVFI/4W/hkB5/48R0QBOQEtVUkGAAYA2//lBycA4wAMABwAKAA5AEUAVQBKQEMAOh0CAE4yAgA4ABUAAFQ4AgBAIwIAGzUHCQgCBzApHQNYIC0NfDUmCkxGOgNYPUkNeVFDChMNAANYAxANfBgKCgYHKjEAKjAlMhYVFA4BIyImNTQ2Fy4BNTQ2NyYjIgYVFBYzMiUyFhUUBiMiJjU0NhcuAjU0NjcmIyIGFRQWMzIlMhYVFAYjIiY1NDYXLgE1NDY3JiMiBhUUFjMyAVY0SSI5IjRHRkkXFBQXCBAhNTQgEAVKNElLMjNGRUsMFQ0VGQkQITU0IBD9SjRJSzIzSklIFxQUFwgOIDQxIQ7jSzQjOiJLNDVK0xcjHiIjEQM1JiQ01Us0NEtKNTVK0woZIhMiHxUDNSYkNNVLNDRLSjU0S9MXIx4iIxEDNCcjNQD//wAUAAAFvAdaADYAJAAAABcAQwGBAiP//wAUAAAFvAdvADYAJAAAABcA2AGBAiP//wBY/+UGLwdvADYAMgAAABcA2AHsAiMABwBYAAAITAWDACsAMAA1ADwATQBhAHkAd0BuVlE9IAEFJSp3X04RAwUHDAIBAAAsAUsuAm5TAiUwHgwJNwEANgEAOgEwKgcAXDMCQTICAABiAQwwEwkIAwd3bmIDT1gBMywCADouAgAxAwADbQI3AAAIAVUpRw9LQQIAfD5PDlBYaQp8chgKBQcqKzEAKiowATMRIy4BKwERFB4BMzI+ATczAyEiLgECNTQSPgEzIRMjLgMjIgYVETMyEycjHgEDMzcOAQM1DgEHHgEBERQGBz4DNRE0LgEnHgEDETQnJiMiBgcGERQSFjMyNjc2NQEuAicuATU0PgI3DgECFRQeAhceAQaqRkYGf4OWFVheaLypTFx/+u2B36haXKnrjQTLckVAhoSLSG03kv39WcxfZ4++RktfaCRFPTZX/a5UZFlkMQwjW1FKQyEUN6h7qzlUaLp0P3sfN/5nN1hfL09PPHKyb6TxfS9Wdkg0SgPp/eqCbv5LVFYtRYhm/pZkvwEDm5oBBrxm/rpFZkEjU2H+YgGoqiFB+025TD8CHsEvKg4DLwFu/VZ8mSMDM1t7XwJwa4VEBiWC/PMCUaMykHd5tf7/sv7jnjUoRZT+tg8oSj1n6IBy17CMJxS5/ty1Z8CbdiYaEQAACAA9/+UGCgN7ACMAMAA4AD4ASQBWAGQAcQCZQI86OSwkIAU2JVcNAgQJUQFHWgMBAAABZUovA2A9AgA2MB4KCQAyAS0lBA8/DAIAAABFQBQDIQlHAAAAEQEAawFaMBYJCAQHQwksASgkAAEzBRQBVE0DAQAEAQAARQwCVg0oAC8BAHwkMw49MQIAAABAPzo5IAVdBVQAUUoCAHxNXQ5rZQIAVVdvD3xoGgoGByoqMQA/KiowATIeARchFB4BMzI2NxcOAiMiJicGIyIuATU0PgEzMhc+AhMVMjY1NC4BJy4BJxYFITU0JiMiBicXPgE3BgMHHgEzMjcGIyImAR4BFRQOAQc+ATU0JgEUFjMyNjU0JiMiDgITDgEVFBYXLgI1NDYEiV2mcQ39rkKAWU6LMS1DX6NrVp43hrV+yHF30n6rjCZtfOknGQUHAwxNOmL+iQFWWEtNYHApDk4fWCstNYpHrYx7g0+T/r1RQx0tLVhgbv5udmFca3ZnKkYzHj5/mJuSS2o4bwN7VqdufahTOzcnUl5OOzRtdsx7g9d9fSQ6H/7yHQwVERUTBjVLD0KtFGR8hyYzH1saGP1yNDE5fUI0AtA/yppshE45LMWOnNj+x9Tsw7HS3yxZhQEILN6QktgyK3ihZoK5AAEADAF3A/QB9gADAApABRYCAAoHACswEzUhFQwD6AF3f38AAAEADAF3B/QB9gADAApABRYCAAoHACswEzUhFQwH6AF3f38AAAQAWAMXAycFogARAB8AMwBBAEpAQgAgATQSAiEBACwAAQA9OxsZBDkBACsBADgXCwACBxkIAQMvBAE7KCEDAAAANAFyJEAAfDYvChIBcgQeDXwUDwoEByorMQAqMAEVDgEVFB4BFRQGIyIuATU0NgcGFRQWMzI3BiMiJjU0JRUOARUUHgEVFAYjIi4BNTQ+AgcGFRQWMzI3BiMiJjU0AXVBRFJRSjAtWjqbEGpjPzUYCBBIWgJcQURRUUovLVk6KUxtV2tjPzYYCBFIWQWiQhxZNzJlZjIwPkJ7S4PJUnWJV4sxBI1jWfNCHFk3NGNkNDE9QXlOQHhiUXF1iVeLMQSMZFYABABcAxcDJwWeABMAKwA+AFgAY0BaVDMlGAcFHgEBADkBAEwBAB44DQwJPxQCLQEALAEALAEAAAIHVEtHMwQwTxgBFiglHRsHBAQhAwFwPUEKPwF8VzANLQF8TzYNcBEWChQBfCgEDQEBfCEKDQYHKioxACorMBM1PgE1NCYnLgE1NDYzMh4BFRQGNzY1NCcuATU0NyMiBhUUHgEXHgEVFA4BBTU+ATU0JicuATU0NjMyHgEVECc2NTQnLgI1ND4BNyMiBhUUHgIXHgEVFHc6USspLiRKMy1VNo0EPBtSGycWJykVIhsnLQgQAQE7TywmLiRLMitWN4k7GzArEQ0TBxcmKgsiFA8oLAMXQRthNixDJzAzKC1GQXdIg8ZZTU8+ImEiECcXMB4UKCQbJkowESEpoEEdXzYtRSQwMyguRUF3SP70HEhUQCA5MxsMEhcQBTAeDh0rFA8mSzEoAAACAFoDFwGTBaIAEAAgACpAIiwAAQocGgIAOBgLDwIHERoIAQMAAAARAXIEHwB8FA4KAgcqMQAvKjABFQ4BFRQeARUUBiMiJjU0NgcOARUUHgEzMjcGIyImNTQBdUFEUlFKMEd4mAk3Ny1KKTUYCBBIWgWiQhxZNzJlZjIwPpZyhMhGQHVVPGc/MQSNY10AAgBcAxcBkQWeABMAKAA9QDQlGAcDHgEBHjgNDAwUAQAsAQAPAgcYARYnJR0bBwQEIQIBcBEWChQBfCcEDQEBfCEKDQMHKioxACorMBM1PgE1NCYnLgE1NDYzMh4BFRQGNzY1NCcuATU0NyMiBhUUHgEXFhUUdzpPLCYuJEozLVU2jQQ8G1IbJxYnKRYtD1IDF0EcXzcrRyYwNCUtRkF3SIPGWU1PPiJhIhAnFzAeEykwD1ZKIAADABAA+ARVBFwACwAPABsASUAjDwABAAAGBgwWFhAQDw0NDAwPDg4PDg4TDw8ZAwMTExkJCRkvMy8RMy8zLxEzLxEzLwAvMy8RMy8zLxEzLzMvETMvMy9xMTABMhYVFAYjIiY1NDYBIRUhBTIWFRQGIyImNTQ2AjQrPDwrKjw8/gYERfu7AiMrPDwrKj08BFw8Kio8PCoqPP6MhJ49Kis8PCsqPQAAAgAvAAADxwWOAAUACQBTQCsGBQgEAQEJCQcHBAQDBQMAAgkDAQcDBQMGBEABAQEBBgAEkAQCBAQGCAgGGS8zLxEzGC9dETMvXRESFzkRFzkALy8SOS8zLzMvMy8RORI5MTAJAiMJARcJAgIlAaL+Xm/+eQGHOf6sAVQBZwWO/Tf9OwLFAslh/Zj9mQJn//8AF/4UA+wFGwA2AFwAAAAXAI4AqgAA//8AHQAABboHPgA2ADwAAAAXAI4BqgIjAAH+h//FAs4FaAADAB1ADAAAAwEBAgMDAAEBAi8zLy8zLwAvMy8vMy8xMAkBIwECzvw9hAPDBWj6XQWjAAMACP/lBCsFngAsADQAOwCfQGEZLQEFJwgPJB8kAiAkMCRAJAMkCyMOICARLSwqHwJfAp8CA98CAQI6NjgVFRsYMR4AETAR0BEDYBEBETEtJR8hASEhJAA1GxgbGgA9JyMgA7AkwCTQJAMkLzMMBgULDgMILxczzTLd3s1dFzIQ1tbNzRDFERI5L10zOTkAL11xzTPExDkvzTMzL3FyzcQzEjkvM90y1l1dMs0yMTByAQIhIgIDIzczNTQ3IzczEhIzMhcWMzI2NzMRIyYmIyIDIQchFSEHIRYSMzITASYREDcEERABNQYjIicWBCu8/ufR+BhtFVICaRVcIPe4XWImDh0hI1I+YqVbxRgBOxT+1QE/FP7XB2KA+af9tNnZ/uMDDSgeFhU2ARL+0wE1AR9zCi0VcgERASMxExUn/kXasf4Eckxz7/7TART+9PUBnAG66JX98f4QA8uwFAYzAAACACn/zwJCA6AABQARACVAHAQ4EQkMBwcKAREHAgAAAA0LAlYCBgB6DAUKAgcqMQAvPyswASEJASEBMwEiDgEHAxMeATsBAT0BBf7tARP++/7sbwEAKTkgAsbGIDArCQOg/hb+GQHnAcUtPgT+qv6gMTMAAAIAPf/NAlgDngAFABEAJEAcBQICEQgBATgRCgsEOAgJDAIHVgIMCnoGBQoCByoxACorMBMhCQEhATMBMzI2NxMDLgErAT0BBwEU/uz++QEVJf8ACi46J7GqMD0pCgOe/hb+GQHn/jxFSAE3AS1WRAAEACsAAARxBaYAQABMAFsAagB3QG5HQTADNUtcJAItH00BHQADAWgBADAnNQ44Sy0KPQE7AQARAVIBHS0fCgkAYBkVBAQAGAFZAQAwAwkIBAcwAUU6AQIBAAAAQSoCXD1OAFlSRwQEDAF8VkUOaBcCEgFcOmQPYCQfGQQdAXxcIQ4EByorMQAqKjAlMxUhNTMyNjc0NjURNC4BKwERFBY7ARUhNTI2NREjNTM1NCYnNDYzMhYVFAYjIiYnLgMjIg4BFREhMjcRFBYDIi4BJyYnHgIzMhMRNC4BJx4BFREUBgc+AQERFAYHPgI1ETQ2Nw4BBGIP/g4QNkYBBChra3o1QRn+BD5HhYUBAfTXlqdAMig/BgIJFTIpM1s2AUuRgimaIxkgGRApDhUdKCsJF0pJQCgUIT45/V4NHjEtEFRWeXQ3NzccKgo0BgHKQEQc/W84Kzc3HjACpj+OCQ4Iw8xlUTNENScSPS0eOG5I/ukn/Rc7NgSHByo0IgcZZjH8BgHdRUgnBB5DNv34Jy0XBy4Du/yXNzEVBhszJwNGh7A+NJMAAwApAAAEbwWmADEASABWAGpAYklCPTsyGRgWCwkcAgFURAIAMAgcDgAgAQAiAQAALQIKCQBNLCgSBAArATYBDzARCQgDBxABAAA+AT0BXAs6AAAARDYiEgQAQgF8MxYAVCoCIAFcJFAPTSwCAwABfEkDDgQHKjEAKiswEyM1MzU0PgEzMhYXERQWMxUhNTI2NREmLwEuASMiBhURMxUjERQeATsBFSE1MzI+ATUBERQGBz4CNRE2NyMiLgEnJiceAwURFAYHPgE1ETQ2Nw4BroWFatOWYKxpOz7+EFU6MAcOBEUmUnLOzg4xNRv+BAo2NBECgRQhMDIXCQcQFxsdFBArEAsLGP28Dh1DK1dVgW4DKz+girhaHxr7JDIoNzcnTgPZJCxQHC5/hv8AP/2FLjEaNzcVOjsD2/v3JSwVBRYwLAQGBg4NKy0iBxk/LyCf/MFFORIEODkDTJGnPTOcAAEAOf6mA2EFpgATAIdAURICERMKAQIRAAkPAxATCgQDEAAJDgYNEwoFBg0ACQsHDBMKCAcMAAkMDAcHBg0NBgYJEBADAwIREQICCgoJExMADQ0RERMGBgICCgoTEwkJAC8zLzIvMy8yLzMvETMvMy8ALzMvLzMvMi8zLxEzLzMvETMvMy8RMy8zLw8PDw8PDw8PMTABESE1IREhNSERMxEhFSERIRUhEQGD/rYBSv62AUqTAUv+tQFL/rX+pgFyoQLVoQF3/omh/Suh/o4AAgCBAkoBeQNGAAsAGwAfQBg4ABQKOBoGCgIHEgwAA1gDDw18FwkKAgcqMQAqMBMyFhUUBiMiJjU0NhcuATU0NjcmIyIGFRQWMzL8NUhKMzRHRkkVFhQXCBAiNDMhBgNGTDM1SEk0NEvVEyceISQTAjYmJTUAAAIAYv5KAX8A6QASACgAOEAvEwEVAQE4CxUKHwEAMAEADwIHJgEDGAFyDyEKAAAAHwETAXwdAwABAQB8GAgOAwcqKzEAKiswEzU2NTQuAjU0NjMyHgEVFA4BEyYjIgYVFB4CFRQHNjU0LgI1NDZijiFGH0QvM0gnSYVRHg0hKxpJIiBNHysoG/5KN1J5LEBdPScuQkZ1PlaphwJODy0jJSxhRjMrQlRYK0I1OhgXGAAABABc/mIDJwDpABIALAA+AFcAZUBaSx4CIQEBADkBAE4BADgNIQA/EwIuAQAtAQAtAQAAAgdDCRcJQwFBVktIAjFRFwEVKR4bAgQkBAFwPUEKPwF8VjENLgF8UTYNcBEVChMBfCkEDQEBfCQJDQYHKioxAD8/KiswEzU+ATU0LgI1ND4BMzIeARUQJzY1NCcuAjU0NjcuASMiBhUUHgIVFA4BBTU+ATU0LgI1NDYzMh4BFRAnNjU0Jy4DNTQ2Ny4BIyIGFRQeAhUUdzhTKlgkIzogLFY2iTwbMycTFhEFCQgoKD09LAgSAQM7TyxVI0syLFY2iTsbGC4cChYRBgkIJyk9Oi3+YkAbYjctQlkzJCA1H0F3SP71HFFIPyI6Lx4MGRoLAQExHxtJP0kvESEtm0AdXzguRVUxJi9FQXdI/vUcTE1BIB40JhIJGRoLAQExHx1FPEsyKAAHAB7/ygZxBdMAAwAPAB0AKQA2AEIATwDdQH0QEwEAEwETEw0NBwICAQEHHxoBGhoHHzMBMzMhITofTAFMTDo6QBBGAQBGAUZGQEAnEC0BAC0BLS0nJwADAwAAAQEBAQICMCoPAwEDAwAAFxAQKgEAKgEqKh4eJDAwJCQ3EEMBAEMBQ0M3Nz1JST0XFwoKBBAQAQAQARAQBC8zL3FyETMvMy8vMy8RMy8zL3FyETMvMy8RMy8zL3FyERI5LzMvXRESOS8zL10ALzMvETMvMy9xchEzLzMvcXIRMy8zL3IRMy8zL3IvMy9yETMvMy8RMy8zL3FyMTAFATMJATQ2MzIWFRQGIyImNxQWMzI3NjU0JiMiBwYBNDYzMhYVFAYjIiY3FBYzMjY1NCYjIgcGBTQ2MzIWFRQGIyImNxQWMzI2NTQmIyIHBgEGAe1s/hP+rINmaYWCaGeGekA4LxsiQDQyGyMB2YNmaYWCaGeGej85Lz1ANTEbIwGvg2ZphYJoZ4Z6QDgvPUA0MhsjNgYJ+fcEgce1ts7Ms7nGlmwvPpeXbzE//HXItLbOzLK5xZZsbZiXbjBAkMi0ts7MsrnFlmxtmJduMED//wAUAAAFvAdlADYAJAAAABcA1wGBAiP//wAvAAAFewdlADYAKAAAABcA1wFEAiP//wAUAAAFvAdYADYAJAAAABcAjQGBAiP//wAvAAAFewc+ADYAKAAAABcAjgFEAiP//wAvAAAFewdaADYAKAAAABcAQwFEAiP//wBUAAAC7gdYADYALAAAABcAjQBKAiP//wBUAAAC7gdlADYALAAAABcA1wBKAiP//wA8AAAC/gc+ADYALAAAABcAjgBKAiP//wBUAAAC7gdaADYALAAAABcAQwBKAiP//wBY/+UGLwdYADYAMgAAABcAjQHsAiP//wBY/+UGLwdlADYAMgAAABcA1wHsAiP//wBY/+UGLwdaADYAMgAAABcAQwHsAiP//wAz/+UGUAdYADYAOAAAABcAjQIAAiP//wAz/+UGUAdlADYAOAAAABcA1wIAAiP//wAz/+UGUAdaADYAOAAAABcAQwIAAiMAAgA5AAACDAN7ABIAIQAwQCcAGAgCAAAABTAHCQgHHgAKBgEAAAASAVwAGwAgFxEIBAB8FA0OAgcqMQA/LyswAREUHgEXFSE1PgI1ETQmJzUlAxEUBgczMjURNCYjIgcWAY0TNTf+LTUuDDo1ASubFRwWXD4yFw5UA3v9LS4vEgI3NwEcMzoBrCtKEiBn/u/+Pi4sF2sB1UBFAiwAAgAMBAoCnAVCAAYACwAwQCgwAwkKCgcFAQQANgsGDgIHCwkIAwIFBQABBwEAYgQFDgoBcQABDQIHKisxACowEyMTMxMjJxcnIwc3VEj8ruZx9Oy5ZLTlBAoBOP7IpHnV3agAAAL/4wQlAskFTAAfADIAPEAzMCknIB0UDQclLgECAQAAAAABIRglAAAJATguEQ4CByABABABMAFxBQANJwEAcxAUDwIHKisxACorMAE1Mx4BFRQOASMiLgEjIgYHIzQmJzQ+ATMyHgIzMjYHIi4CIyIHNjMyHgIzMjcOAQKBRgEBPmo+O066Iyg1AToBATRlRzBnYlscJSl5K0mMRiBJJicjIkOGUitwPCQ8BTMZChMMS3U+IFc7PA4VDD9xRh8sJC+LFz4aUCAbQBtmGBcAAgA/BEICagT6AAMABwAbQBQjAQYKOAQDCgIHfAIFCnwHAAoCByoxACowEyEVISU1IRU/Aiv91QIL/hYE+rgiQkIAAv/0BAoCtAVGAA0AGQApQCAIAQIALAQRDzgYCwoCBxQODgEAeAgHDhQBAHcBAA8CByoxAC8vKjADMx4BMzI2NzMOASMiJiUOASMiJiceAjMyDDEnnGp5izEtELyUkrkCXy+VTlmHNBpTaj3BBUZDT0pIlqaiJy8xLjI3SCcAAgDVBBsB1wUbAAsAGAAkQBwAARMMATwDEwo6DAkKAgcQDAJTBg4NfBYACgIHKjEAKiswEzQ2MzIWFRQGIyImFyY1NDcuASMiBhUUFtVONTdIRzo3SpU1PgQHBi0/OgSaOElNNDJNSiwoOzwmAQE8Kis3AAADAJgDzwIMBRIADAAWACIAMEAnAAEaIAETASwJGg0OASwgAw0CBxMNAhcdAW0AEQp8FRcKfB0GCgMHKisxACorMAEUBiMiJjU0NjMyHgEHMzI2NTQnFhUUJzQmIyIGFRQWMzI2AgxwTFJmY1EyWTXbDjdCh0YhLyMgLCsjIi4EbUVZW0VGXSlLnj4xagYsREVAKzw0LCw1MwAAAgBx/hQCNwAAABEAHQAyQCgAAAAAFwELKQgHCAcSAQkBARoVAVoFGgoAABcTEQMOAQIBfBUSAAIHKisxAD8vKzAhMwceARUUBiMiJzc+ATU0Jgc3BxYVFAc+ATU0LgEBSjUham/EuQ47CmBkMCpaHj9iUlwaMUwEZUdniQk/FC86GyYBSzMVP0w3Ck82HDMkAAAEAFID/AM7BTUAAwAGAAoADQAXQBAACgELBAINAQAwAwYABwgBAC8vKzATIxMhATcjASMTIQE3I4k3cQEm/p64cAEMN3ABJ/6cunAD/AE5/v7L/v4BOf7+ywACAHv+IQJIAB0AEwAkAC1AJgo0FQkLAAAAAB0BEywDBwgCBx0KAgAAABUUCQNiDyEAfBkGCgIHKjEAKjABFQYjIiY1NDY3Mw4DFRQeATMDIw4CFRQeARcuAjU0PgECSEItqLZNSHkGFBYLO2xC/CskLyFQoHZghj8bMv5iPQR9XkaHVA8zSDokQGAzAY4wRlMtPFAoAg45TC0gTF8AAAIAFAQKAqIFPwAGAAsAMkApCQQAAwA2BQoPMAgCCgIHCwoIBwIBBQYEAQkBAGIABg4ACwFxBAMPAgcqKzEALyowAQMjAzMXNwUzNwcnAqLqqvpI4/L+22W47OEFP/7LATWjo/3Sn6j//wBz/+cEeQdiADYANgAAABcA4AEUAiP//wAv/+UC2QU/ADYAVgAAABYA4CsAAAIAvP5RAVkF0wADAAcAM0AXAQICAAMEBwcFBgABAQQEBQUDAgIHBwYvPBA8EDwzLzwQPBA8AC88My88LzwzLzwxMAERIxETESMRAVmdnZ0F0/zqAxb7lfzpAxcABABoAAAGfwWDABkAMwBCAFMAYEBXSwEIAzQBARYCAQAATjgCLQEACDAKDAkAMgEARxoCACUDAQAAQ0AhAwAAABYwFQkIAwdOS0MaBCgyAUsPRwp8UCgKABwBVTI1D0A4FgkDBQEBfDwFDgQHKisxACoqMCURIzUzETQmJzUhMgQWEhUUDgEEIyE1PgIBIREUHgIzMjY3PgI1ECcuASMiDgEVESEBETQmJx4BFREUDgEHMjYFPgESNTQuAScuAScEERQOAQEzy8tgawM6oQEPw2ptzP7jqPznVFQjAmn+kxQwT0RtrE5caC/RU8qJXk0PAW39+ixcKhwOHBxMPAJsgMx3OW5PLmQ7AX9RrNkB1VAByUo0Bzdqwf74mJX/vGg3AxlEAhf+NTVBJhAtOEKZw3gBZbJHPDdng/7T/dUDlXhhASBAUfxbPkYkDUlJDZYBFMCK5KszHyALl/37m/CvAAQAO//lA9UFogAjADcAQwBSAGRAVwEBAAAARDQiAzswHwoJLQEAAABNAUEsFgkIAgckCQgGAAkIAAM4PQIBAlFJAgFYEjEKAA4BLSILCgQANAF8KjgATUQDAwAAACUkBgUEWD1RAHxJGwoEByoqMQAvLy8vLyowAQUnJSYnNxYXNxcHHgEXHgIVFA4BIyIuAjU0PgEzMhYXJgEHHgISFRQGBz4CNTQmJy4CATQmIyIRFB4BMzI2AQ4DFRQeARcuAjUQAZH+8iEBBERfWLMexCG4Om86QGYzcdaOaqh2PXHAbzFKKVf+/Rt8uX4/Nzg6UiksJiiOrgFPeGvDNmhGXGb+rkdwTSlKkWVScTcEnLUwrkI9Xm8WhS99LHBIUMPDY4HnjEiDqV2AzncUE7wBRh1byuj+8pmCmjgpcZdlYNFUXMOo/IXU2P6ZicVougJ1F01shkxmqnYeL36bXgEUAP//AB0AAAW6B1gANgA8AAAAFwCNAaoCI///ABf+FAPsBTUANgBcAAAAFwCNAKoAAAAEADkAAAUvBYMAKgA6AEkAVwBqQGErAQUOAAEbIgIBAAAANwgCAAUwBwwJAABQAQARATAORgBKAQAAABkBMD0bAAAwJQIAAAAiMCQJCAQHIyAZEQgFQR0BUBVNClBKAgB8VEEOADwOAlUdMw83LwIAfCwBDgQHKisxACoqMAERNC4BIzUhFQ4DHQEzMhceAhUUDgEHBisBFR4BFzIXFSE1MzI+AhMRFAYHMzI1ETQuASceAhMRMzI+ATU0Jy4BIyIOAQE+ATU0JiceAhUUDgEBGxNfcALXHnFCK9UcwEqsdHSsSq4u1QNKYDsU/SkTUFYiByAqKiVvCTtQLCAI2Yx/qFp7L2ZKVUsTAXd9eXh4OVAoK1MBLwMnblwsNzcBBhY7OHgRBl+jaGmjXwYQc0lMAQI3Nx03SgN//F4zNRNpA5OQXCgFFChQ/l/+Wj2RerdbIhcwX/4GFJaPlZYZHV5+S1l5TgAABAAb/hcEMQWaACMAMQA+AE0AakBfSDMyA0Y1JAQCHQACAQAAPRECAABGMBQKCT8BAAAAHwE1MB0JCAAAAAAvAQAwAwcIAwcoEAwAATkgAVUZQQo/AQB8SzkOSAICMxACAAAPAVwgJQAvKA4EBAB8LAkOBAcqKzEAPy8qKjABMxUhNT4CNRE0LgEnNSUzET4BMzIeAhUUDgEjIicRFB4BJxE0JgceARURFAYHPgETERYzMj4BNTQuASMiEzYRNC4CIyIHHgEVFAYB+DP99jMyGho6MQFDJ0aCUU6Tb0N82YZpaBA0x0hYNygSGUQog19VRXJFQnNHV9/XM1FhMB1Bkp9I/k43OQIKJiYFzTRDLBEpSP10NDlEeKpfhNR3Lf6mJy8WjwWiXlIGHkZM+jcoLxMGQgQ3/bJYVKt8eadU/R9NASZlomc2FQHTwYSuAAEAmgD2A/wEWAALAENAIgcKBAEEAAgDAgILAAUGBgkICgcBBAQFCQIDAwYFAAsLCAkvMzMvMy8zMy8zERIXOQAvMzMvMy8zMy8zERIXOTEwEwkBFwkBBwkBJwkB9wFUAVRc/q0BVF3+rP6uXAFR/qwEWP6sAVNc/qz+rF0BVP6vXAFRAVUAAgCBArIB8gWeABMAIgAwQCccAQgBNQUHDwcVAAwGAQAAABMBbQAgAAAAHBUQCAQAFAF5GQwAAgcqMQA/LyswAREUHgEXFSE1PgE1ETQmJzU+ATcHIx4BFREUBgcWNjURNCYBiQ0sMP6PRSEpPVlYJG0MHhMTHiwsJAWe/ZMlIA4DKSkDHyoBtioVBTEEIyVvDykm/mwlJhECHS8BuCoiAAMAJQKyAloFngAeACgANABHQD8pAREBCAEmIQIBAAAVAQAvAREkFwwJBQEAAAAkATABJgA8IQcKAwcFAQAAACQGBANqGywALykAAwB5Mg0OAgcqMQAqKjATMzI2NzMHITU+AzU0LgEjIgYHIzYzMh4BFRQOAQ8BITI2NwYrASITPgE1NCYHHgEVFAbLvDxAHDtU/h9JhFw9Iz8lMUwQPjzRRGw7VIDoFwEhPCwNMULpFPcuLnJfVVcfAysXIrIfR4JuejgqQiY7OMUxUi9DgnrKFhUgDgElKEo4Vl8QB2JDK04AAAQANwKsAiUFngAoADcARwBSAGhAX0VDOTgpJxAGAAkDHUg+HwNKIgIBLzAJDAwAACoFAgAxATwzAwA8HUoKTgE1IhcNBAc8LAJAKUM5ODEnHwUHAEwCAQ0BZhNADT4lEAN8KQANUU5IAwAAAAYBfEwaAAMHKioxACoqMAE0JiMiByc+ATMyHgEVFAYHHgEVFA4BIyImNTQ2MzIXHgEzMjY1NCc2NxU2NTQmIyIHNjMyHgIPAR4BFRQHNjU0JicmIyIGAyYjIhUUFy4BNTQBcz8sSVAnNpVTMEwqPUZHVVCRWEF0LB4rFx8iGS4+sJogF0E+IRwQBh44JRRqFUxEFS8cRBwRAQWNEA0pQhUSBN8tM1gdS08iOSQsTDQZbkI+dUs+KhgkITQmVUOKMlxkHhwhLTEQBBYgJ74SIVxBMSdCKDxOKBMF/uwILxgbEBYTGwAAAwBr/8cGiAXTAAMADQAqALRAEtQk1CUClCelJgIMEQ0dTREDKLj/8EBNHBgbGx8YGB8fDikoKCoOAwACAQUIBwcICAsEBAwLKikpIigODhwbGz8cARwcIhUVMCIBIgICAQEAAwMACw0ECAcHBAy/Dc8NAg0NBQQvPDMvXTwRMy88ERI5LzMvETMvMy8vXTMvETMvXTMvETMvMxEzLzwALzwzLxEzLzMvEjkvPC88LzwzLzwRMy8zLxEzLxI5ATgxMAFxXV0XATMBAxEGBzU+ATczEQE2NzYkNzY1NCYjIgYHJz4BMzIWFRQHBgcGByEV5ARNnfuzNmZ6PpgvbAI9Bio+ASAbJUVFQkEVlx2QhZeNOy2fVCMBgjkGDPn0AxYCKlEgexRqPf0R/QQ4OVfQHykrMD0vQg9waXZVVEs4dD0jeQAABABr/8cGjgXTAAMADQAYABsAuUBeGhIRFRQUGRkbGxYXFw8PEBAOExISGA4DAAIBBQgHBwgICwQEDAsSGA4REBAbGw4VFhYTFBQXF88YAb8YARgYGhkZDw8OAgIBAQADAwALDQQIBwcEDL8Nzw0CDQ0FBC88My9dPBEzLzwREjkvMy8RMy8zLy88EDwQPDMvXV08EDwQPDMvPBEzLzMvPBESOQAvPDMvETMvMy8SOS88LzwvPDMvPBEzLzwQPBA8My88EDwQPDMSOTEwFwEzAQMRBgc1PgE3MxEBNSE1ATMRMxUjFQMRA/wETpz7s05mej6YL2wDuv6BAZV6aGiQ5jkGDPn0AxYCKlEgexRqPf0R/QSaewHa/hdsmgEGAQf++QAEACH/xwaOBdMAAwAtADgAOwD8QIMQBRAHAgUHCR4CAAUABgI6MjE1NDQ5OTs7Njc3Ly8wMC4zMjI4LgMAAgElDxESEhERKx8ECQUFKwkJKysfHBgbGx8YGB8yOC4xMDA7Oy41NjYzNDQ3N884Ab84ATg4Ojk5Ly8uAgIBAQADAwAlEhURERUVIiIoDAwoKAQbGxwcBAUFBC8zLxEzLzMvETMvMy8RMy8zLzMvEjkyLzMvETMvMy8vPBA8EDwzL11dPBA8EDwzLzwRMy8zLzwREjkALzMvETMvEjkRMy8zLxEzLxI5ERI5LzMvEjk5LzwvPC88My88ETMvPBA8EDwzLzwQPBA8MxI5MTABcXFyFwEzCQE3FhcWMzI2NTQmIwYjNxY2NTQmIyIGByc+ATMyFhUUBgceARUUBiMiJgE1ITUBMxEzFSMVAxED/ARNnfuz/oiSFCArO0dWSFQyCBZRSzw7OD8Xjyl9eJCDR0NZVJ6SjJQFX/6CAZR7aGiR5TkGDPn0A9oPPBYeTjcyPANuATwrJTQsOhdqVGtQN1YTFmVEXYpv/KeaewHa/hdsmgEGAQf++f//AGoBVgKWAhcAFgAQAAD////0BjcEDAa2ABcAQgAAB+kAAgAVAL8D7gSKAB4AKgBvQD4BGhsAGQIEHRMHGAMEHxIIEAoEJQkRDR8fHR0NJSUNCAIDAQcJBAUbEAoABCgRExgaBCISGRUoKAUFFSIiFS8zLxEzLzMvETMzEhc5ERc5Ehc5MjIALzMvETMvMy8RMzMSFzkRFzkSFzkyMjEwATcXBxYVFAcXBycGBiMiJicHJzcmNTQ2Nyc3FzYzMgciBhUUFjMyNjU0JgMLilmMV1eBXIJQcUZKdUiFWINYLCyIXYV8iYaEgre4gYK3twQDh1eMeoqHgoBbgTIjJi+BW4B1kEaMNodch1qCt4GCt7eCgbcAAAAAAgAAAAAAAP9WAGYAAAAAAAAAAAAAAAAAAAAAAAAAAAD0AAAAAAAAAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcABxAHIAcwB0AHUAdgB3AHgAeQB6AHsAfAB9AH4AfwCAAIEAggCDAIQAhQCGAIcAiACJAIoAiwCMAI0AjgCPAJAAkQCSAJMAlACVAJYAlwCYAJkAmgCbAJwAnQCeAJ8AoAChAKIAowCkAKUApgCnAQIAqQCqAKsArACtAK4ArwCwALEAsgCzALQAtQC2ALcAuAC5ALoAuwC8AQQAvgC/AMAAwQDCAMMAxADFAMYAxwDIAMkAygDLAMwAzQDOAM8A0ADRANMA1ADVANYA1wDYANkA2gDbANwA3QDeAN8A4ADhAOQA5QDoAOkA6gDrAOwA7QDuAPAA8QDyAPMA9AD1APYBAwDaAL0FRGVsdGEJc2Z0aHlwaGVuBEV1cm8AAAAAAQABAAEAAAABAAAU3AAAABQAAAAAAAAU1DCCFNAGCSqGSIb3DQEHAqCCFMEwghS9AgEBMQ4wDAYIKoZIhvcNAgUFADBgBgorBgEEAYI3AgEEoFIwUDAsBgorBgEEAYI3AgEcoh6AHAA8ADwAPABPAGIAcwBvAGwAZQB0AGUAPgA+AD4wIDAMBggqhkiG9w0CBQUABBCMkSbJpM0NCOLq+Awxo30FoIIQkTCCAkAwggGpAhADx48325Io3zy7Gq2C+mcQMA0GCSqGSIb3DQEBAgUAMGExETAPBgNVBAcTCEludGVybmV0MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEzMDEGA1UECxMqVmVyaVNpZ24gQ29tbWVyY2lhbCBTb2Z0d2FyZSBQdWJsaXNoZXJzIENBMB4XDTk2MDQwOTAwMDAwMFoXDTA0MDEwNzIzNTk1OVowYTERMA8GA1UEBxMISW50ZXJuZXQxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMTMwMQYDVQQLEypWZXJpU2lnbiBDb21tZXJjaWFsIFNvZnR3YXJlIFB1Ymxpc2hlcnMgQ0EwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMPTaWVSAZRUqyjGYhizVFXFRIdFSjvCftjT18iAho3YDPEWnMxrqSmyj3ZzksjFYqY87R4FdfATAGwUTdSYkAe+aXOBuGJOMR7R/MkM632Qv660R1Hsb85kNQLWfWcFd+KP2VHX+5cZvD7Xd4HGQ93y3d/Ko4OLy0HBPSJISKYZAgMBAAEwDQYJKoZIhvcNAQECBQADgYEAtbywdWqJooa9ZHjDpzJ1chGqJgIXYDBM40g0GblSSlEYgP5TLXvVMYzFZZlBQS/yrmN66HOZFZAaH3qLQdCOOtDNODRE0HX46nHEgRk4FzVKrsU+MuYhuAXAk+HHOFzY95M4ZJDtVM7K09PQX+8Em94Cgt2IKbHDT6XNcWQxPDwwggLAMIICKQIUE4m00Yrop8S9NcebjYjKH8pTVpEwDQYJKoZIhvcNAQEEBQAwgZ4xHzAdBgNVBAoTFlZlcmlTaWduIFRydXN0IE5ldHdvcmsxFzAVBgNVBAsTDlZlcmlTaWduLCBJbmMuMSwwKgYDVQQLEyNWZXJpU2lnbiBUaW1lIFN0YW1waW5nIFNlcnZpY2UgUm9vdDE0MDIGA1UECxMrTk8gTElBQklMSVRZIEFDQ0VQVEVELCAoYyk5NyBWZXJpU2lnbiwgSW5jLjAeFw05NzA1MTIwNzAwMDBaFw05OTEyMzEwNzAwMDBaMIGeMR8wHQYDVQQKExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMRcwFQYDVQQLEw5WZXJpU2lnbiwgSW5jLjEsMCoGA1UECxMjVmVyaVNpZ24gVGltZSBTdGFtcGluZyBTZXJ2aWNlIFJvb3QxNDAyBgNVBAsTK05PIExJQUJJTElUWSBBQ0NFUFRFRCwgKGMpOTcgVmVyaVNpZ24sIEluYy4wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBANMuIPBofCwtLoEcsQaypwu3EQ1X2lPYdePJMyqy1PYJWzTz6ZD+CQzQ2xtauc3n9oixncCHJet9WBBzanjLcRX9xlj2KatYXpYE/S1iEViBHMpxlNUiWC/VzBQFhDa6lKq0TUrp7jsirVaZfiGcbIbASkeXarSmNtX8CS3TtDmbAgMBAAEwDQYJKoZIhvcNAQEEBQADgYEAOhGchQU+0umA+3vVqfSsefwF/JU9cSOpKyjfjBNlif4shwGPWppiyhGngPS3vhS30VaZawhiRcaipdo1fwUi3nItBIYFp3wJFpMUQ/D3Fk3WB46bEGxY/go1l8qJn98EcJwqfWGOwegLcZqox2ZiQj2VlCIymCKJivpkCCT10vowggLNMIICNgIVAL0RmtpD7SH7RliEicpGiJAl7hRgMA0GCSqGSIb3DQEBBAUAMIGeMR8wHQYDVQQKExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMRcwFQYDVQQLEw5WZXJpU2lnbiwgSW5jLjEsMCoGA1UECxMjVmVyaVNpZ24gVGltZSBTdGFtcGluZyBTZXJ2aWNlIFJvb3QxNDAyBgNVBAsTK05PIExJQUJJTElUWSBBQ0NFUFRFRCwgKGMpOTcgVmVyaVNpZ24sIEluYy4wHhcNOTcwNTEyMDcwMDAwWhcNOTkxMjMxMDcwMDAwWjCBrDEnMCUGA1UECxMeVmVyaVNpZ24gVGltZSBTdGFtcGluZyBTZXJ2aWNlMR8wHQYDVQQLExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTQwMgYDVQQLEytOTyBMSUFCSUxJVFkgQUNDRVBURUQsIChjKTk3IFZlcmlTaWduLCBJbmMuMRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjERMA8GA1UEBxMISW50ZXJuZXQwgZ0wDQYJKoZIhvcNAQEBBQADgYsAMIGHAoGBAKth7bStjZBHkNy0EV5p3Ap/YpAGMc3O/4iRRtdJOpTp1AY/na2ieFrs+fxjRU+4C24w76I2qy0J3/FvJ6sNUWAFNU9/zlRP0LcsQtgL0I24Xv+2gNDjlrR/IklCEGzTmLABVqPDzy6fOvR/qFim1yJl5YyreJy82UdCaFstff21AgEDMA0GCSqGSIb3DQEBBAUAA4GBAG1g+5lfpGmz03twK2IjHkQgUa8jFcd0AvlJ8icaXKyGcTUIK/aP3uC1luiLp0vjc8hICZ2w2ovaFZLKA+UJJVYG506kR6XRV0bUOFb1Ic3DJjstJTLOm+K/QEfq2G1HduXAMKMPgM5/2Dt+oPmVKjErFfrIFO3dsOlVQXBGLSx+MIIItDCCCB2gAwIBAgIQVQ2I9T9kFtcMcwDYRZIWNDANBgkqhkiG9w0BAQIFADBhMREwDwYDVQQHEwhJbnRlcm5ldDEXMBUGA1UEChMOVmVyaVNpZ24sIEluYy4xMzAxBgNVBAsTKlZlcmlTaWduIENvbW1lcmNpYWwgU29mdHdhcmUgUHVibGlzaGVycyBDQTAeFw05OTAzMTkwMDAwMDBaFw0wMDA0MTYyMzU5NTlaMIIBXTERMA8GA1UEBxMISW50ZXJuZXQxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMTMwMQYDVQQLEypWZXJpU2lnbiBDb21tZXJjaWFsIFNvZnR3YXJlIFB1Ymxpc2hlcnMgQ0ExRjBEBgNVBAsTPXd3dy52ZXJpc2lnbi5jb20vcmVwb3NpdG9yeS9SUEEgSW5jb3JwLiBieSBSZWYuLExJQUIuTFREKGMpOTgxPjA8BgNVBAsTNURpZ2l0YWwgSUQgQ2xhc3MgMyAtIE1pY3Jvc29mdCBTb2Z0d2FyZSBWYWxpZGF0aW9uIHYyMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEAxQVTWljcm9zb2Z0IENvcnBvcmF0aW9uMR4wHAYDVQQLFBVNaWNyb3NvZnQgQ29ycG9yYXRpb24wgZ0wDQYJKoZIhvcNAQEBBQADgYsAMIGHAoGBAKQfYwNHeIyovFaZ4lZWFgdaF1DGMN7vKfT6uN50oW+uWykKRx9+0KdUwt5Hzbp0KwbUhSIxHfgGWZoLN1ue+US3P1zerZ1AYCdaGFdKGXM4djbusTkgBaAryVQ8MbgKsiL7yGWco+xHQujMjsxnP2xNInLJStbY3pK47hwI+HfnAgEDo4IFbzCCBWswCQYDVR0TBAIwADALBgNVHQ8EBAMCBaAwgZQGA1UdAQSBjDCBiYAQe5bk0UP9aJjzOMxuO/ILgqFjMGExETAPBgNVBAcTCEludGVybmV0MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEzMDEGA1UECxMqVmVyaVNpZ24gQ29tbWVyY2lhbCBTb2Z0d2FyZSBQdWJsaXNoZXJzIENBghADx48325Io3zy7Gq2C+mcQMCEGA1UdBAEB/wQXMBQwDjAMBgorBgEEAYI3AgEWAwIHgAAwDQYDVR0KBAYwBAMCBkAwggQ2BgorBgEEAYI3AgEKAQH/BIIEIzCCBB+gKYAnaHR0cHM6Ly93d3cudmVyaXNpZ24uY29tL3JlcG9zaXRvcnkvQ1BToYIDuIGCA7RUaGlzIGNlcnRpZmljYXRlIGluY29ycG9yYXRlcyBieSByZWZlcmVuY2UsIGFuZCBpdHMgdXNlIGlzIHN0cmljdGx5CnN1YmplY3QgdG8sIHRoZSBWZXJpU2lnbiBDZXJ0aWZpY2F0aW9uIFByYWN0aWNlIFN0YXRlbWVudCAoQ1BTKQp2ZXJzaW9uIDEuMCwgYXZhaWxhYmxlIGluIHRoZSBWZXJpU2lnbiByZXBvc2l0b3J5IGF0OgpodHRwczovL3d3dy52ZXJpc2lnbi5jb207IGJ5IEUtbWFpbCBhdCBDUFMtcmVxdWVzdHNAdmVyaXNpZ24uY29tOyBvcgpieSBtYWlsIGF0IFZlcmlTaWduLCBJbmMuLCAyNTkzIENvYXN0IEF2ZS4sIE1vdW50YWluIFZpZXcsIENBIDk0MDQzClVTQSBDb3B5cmlnaHQgKGMpMTk5NiBWZXJpU2lnbiwgSW5jLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQ0VSVEFJTgpXQVJSQU5USUVTIERJU0NMQUlNRUQgQU5EIExJQUJJTElUWSBMSU1JVEVELgoKV0FSTklORzogVEhFIFVTRSBPRiBUSElTIENFUlRJRklDQVRFIElTIFNUUklDVExZIFNVQkpFQ1QgVE8gVEhFClZFUklTSUdOIENFUlRJRklDQVRJT04gUFJBQ1RJQ0UgU1RBVEVNRU5ULiAgVEhFIElTU1VJTkcgQVVUSE9SSVRZCkRJU0NMQUlNUyBDRVJUQUlOIElNUExJRUQgQU5EIEVYUFJFU1MgV0FSUkFOVElFUywgSU5DTFVESU5HIFdBUlJBTlRJRVMKT0YgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLCBBTkQgV0lMTCBOT1QKQkUgTElBQkxFIEZPUiBDT05TRVFVRU5USUFMLCBQVU5JVElWRSwgQU5EIENFUlRBSU4gT1RIRVIgREFNQUdFUy4gU0VFClRIRSBDUFMgRk9SIERFVEFJTFMuCgpDb250ZW50cyBvZiB0aGUgVmVyaVNpZ24gcmVnaXN0ZXJlZCBub252ZXJpZmllZFN1YmplY3RBdHRyaWJ1dGVzCmV4dGVuc2lvbiB2YWx1ZSBzaGFsbCBub3QgYmUgY29uc2lkZXJlZCBhcyBhY2N1cmF0ZSBpbmZvcm1hdGlvbgp2YWxpZGF0ZWQgYnkgdGhlIElBLgqjNoA0aHR0cHM6Ly93d3cudmVyaXNpZ24uY29tL3JlcG9zaXRvcnkvdmVyaXNpZ25sb2dvLmdpZjA2BgNVHQMELzAtMCugKaAnhiVodHRwOi8vc3RhdHVzLnZlcmlzaWduLmNvbS9jbGFzczEuY3JsMBYGCisGAQQBgjcCARsECDAGAQH/AQH/MA0GCSqGSIb3DQEBAgUAA4GBAFXXmM1USvww7bTR1PgBzKqNFvfncfFKcPhcOC4V5EYP9lJCrqfeAG1yYTRmxFXFVcHQvFsBTaMS8j+cmMRsUV43356tQHCIPADqqDwMKvEub6rv6m1/h53smpsaOLOubORLHE/gWBzO3RG12Jf+UYL81uzpzuGWXiG99uHcrHpYMYIDrzCCA6sCAQEwdTBhMREwDwYDVQQHEwhJbnRlcm5ldDEXMBUGA1UEChMOVmVyaVNpZ24sIEluYy4xMzAxBgNVBAsTKlZlcmlTaWduIENvbW1lcmNpYWwgU29mdHdhcmUgUHVibGlzaGVycyBDQQIQVQ2I9T9kFtcMcwDYRZIWNDAMBggqhkiG9w0CBQUAoIG6MBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEWMB8GCSqGSIb3DQEJBDESBBBkY+gks4GD1rbka8txiJX3MF4GCisGAQQBgjcCAQwxUDBOoCSAIgBJAG0AcAByAGkAbgB0ACAATQBUACAAUwBoAGEAZABvAHehJoAkaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3R5cG9ncmFwaHkgMA0GCSqGSIb3DQEBAQUABIGAMIemFC7EqeNUz8psjcpmyRyXxwtGPp9oJWza2DL9dpOkN0bS+d8WQPQZmiowarkZ1yPi6Muui85+xQzfW/PkwUO3Iz5ADiCRH02I8zS/E18isowMMe42vfQAiBaHmzkHBwbAD4dSys1TO8jp3Ny4xSF9yZuQnMEGwxSSr0d+lz2hggHQMIIBzAYJKoZIhvcNAQkGMYIBvTCCAbkCAQEwgbgwgZ4xHzAdBgNVBAoTFlZlcmlTaWduIFRydXN0IE5ldHdvcmsxFzAVBgNVBAsTDlZlcmlTaWduLCBJbmMuMSwwKgYDVQQLEyNWZXJpU2lnbiBUaW1lIFN0YW1waW5nIFNlcnZpY2UgUm9vdDE0MDIGA1UECxMrTk8gTElBQklMSVRZIEFDQ0VQVEVELCAoYyk5NyBWZXJpU2lnbiwgSW5jLgIVAL0RmtpD7SH7RliEicpGiJAl7hRgMAwGCCqGSIb3DQIFBQCgWTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw05OTA4MTgxOTEzNTlaMB8GCSqGSIb3DQEJBDESBBDtduTmsdg3cvaTDwpaK8F1MA0GCSqGSIb3DQEBAQUABIGAbAtWY5TH3TICGL7M4apt95MVIPmry/HuzVnE/iRzhqWd6drvC2g0JRbqDiVE6KRz73h9m+vtpJZCUHWsKssNIaRxXtpnVAS+mFLLdCT/dbbE6IrlEpAHsmCnuxAH9DeWEw3q39FPafJuzJT3USue5zEewlZzDOtdsy38rikCU7Q=';

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 55382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 72095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 61219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 10568:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map