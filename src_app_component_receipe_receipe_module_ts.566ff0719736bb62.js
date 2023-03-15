"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["src_app_component_receipe_receipe_module_ts"],{

/***/ 9603:
/*!********************************************************!*\
  !*** ./src/app/component/receipe/add/add.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class AddComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 2, vars: 0, template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } } });


/***/ }),

/***/ 8012:
/*!**********************************************************!*\
  !*** ./src/app/component/receipe/edit/edit.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class EditComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 2, vars: 0, template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } } });


/***/ }),

/***/ 1435:
/*!**********************************************************!*\
  !*** ./src/app/component/receipe/list/list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_receipe_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/receipe-service.service */ 4325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 3626);





function ListComponent_ng_container_1_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", column_r5, " ");
} }
function ListComponent_ng_container_1_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r9[column_r5], " ");
} }
function ListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_ng_container_1_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_ng_container_1_mat_cell_2_Template, 2, 1, "mat-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matColumnDef", column_r5);
} }
function ListComponent_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell")(1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " -- Wikipedia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " -- Wikipedia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@detailExpand", element_r11 == ctx_r1.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.img, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.description, " ");
} }
function ListComponent_mat_header_row_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function ListComponent_mat_row_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_mat_row_5_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const element_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.expandedElement = ctx_r13.expandedElement === element_r12 ? null : element_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-expanded-row", ctx_r3.expandedElement === element_r12);
} }
function ListComponent_mat_row_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row", 17);
} }
const _c0 = function () { return ["expandedDetail"]; };
class ListComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.columnsToDisplay = ['name', 'url', 'description', 'author'];
    }
    ngOnInit() {
        this.getMReceipes();
    }
    getMReceipes() {
        this.httpService.getResults('', null).subscribe(receipes => this.receipes = receipes);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_receipe_service_service__WEBPACK_IMPORTED_MODULE_0__.ReceipeServiceService)); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 7, vars: 6, consts: [["multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], [4, "matCellDef"], [4, "matHeaderRowDef"], ["class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], [4, "matHeaderCellDef"], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-symbol"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], [1, "example-element-description-attribution"], [1, "example-element-row", 3, "click"], [1, "example-detail-row"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListComponent_mat_cell_3_Template, 17, 6, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListComponent_mat_header_row_4_Template, 1, 0, "mat-header-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListComponent_mat_row_5_Template, 1, 2, "mat-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListComponent_mat_row_6_Template, 1, 0, "mat-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.receipes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow], styles: [".mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-row.example-detail-row[_ngcontent-%COMP%] {\n  min-height: 0;\n}\n\n.mat-row.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: #777;\n}\n\n.mat-row.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ height: '*', minHeight: "*" })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 5987:
/*!**************************************************************************************!*\
  !*** ./src/app/component/receipe/receipe.management/receipe.management.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceipeManagementComponent": () => (/* binding */ ReceipeManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


const _c0 = ["class", "management"];
class ReceipeManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReceipeManagementComponent.ɵfac = function ReceipeManagementComponent_Factory(t) { return new (t || ReceipeManagementComponent)(); };
ReceipeManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceipeManagementComponent, selectors: [["app-receipe", 8, "management"]], attrs: _c0, decls: 1, vars: 0, template: function ReceipeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet] });


/***/ }),

/***/ 7369:
/*!*****************************************************!*\
  !*** ./src/app/component/receipe/receipe.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceipeModule": () => (/* binding */ ReceipeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 9603);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 8012);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 8417);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 1435);
/* harmony import */ var _receipe_management_receipe_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receipe.management/receipe.management.component */ 5987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _receipe_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipe.routing */ 6653);
/* harmony import */ var src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/mat-module.module */ 5530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4650);











class ReceipeModule {
}
ReceipeModule.ɵfac = function ReceipeModule_Factory(t) { return new (t || ReceipeModule)(); };
ReceipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ReceipeModule });
ReceipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_6__.MatModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_receipe_routing__WEBPACK_IMPORTED_MODULE_5__.recipeRoutes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReceipeModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
        _receipe_management_receipe_management_component__WEBPACK_IMPORTED_MODULE_4__.ReceipeManagementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_6__.MatModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 6653:
/*!******************************************************!*\
  !*** ./src/app/component/receipe/receipe.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recipeRoutes": () => (/* binding */ recipeRoutes)
/* harmony export */ });
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 9603);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 8012);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 1435);
/* harmony import */ var _receipe_management_receipe_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receipe.management/receipe.management.component */ 5987);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ 8417);





const recipeRoutes = [
    {
        path: '', component: _receipe_management_receipe_management_component__WEBPACK_IMPORTED_MODULE_3__.ReceipeManagementComponent,
        children: [
            { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent },
            { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent },
            { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__.ViewComponent },
            { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent }
        ]
    }
];


/***/ }),

/***/ 8417:
/*!**********************************************************!*\
  !*** ./src/app/component/receipe/view/view.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(); };
ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 2, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } } });


/***/ }),

/***/ 4325:
/*!****************************************************!*\
  !*** ./src/app/service/receipe-service.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceipeServiceService": () => (/* binding */ ReceipeServiceService)
/* harmony export */ });
/* harmony import */ var _app_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/endpoints */ 8781);
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client.service */ 5772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);



class ReceipeServiceService extends _http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService {
    constructor() {
        super(...arguments);
        this.URL = _app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.RECEIPE_DATA;
    }
    getResults(url, params) {
        return this.getAll(this.URL, params);
    }
    getResultId(url, params) {
        return this.getById(this.URL, params);
    }
    createData(url, data) {
        return this.create(this.URL, data);
    }
    updateData(url, params, data) {
        return this.update(this.URL, params, data);
    }
    deleteData(url, params) {
        return this.delete(this.URL, params);
    }
}
ReceipeServiceService.ɵfac = /*@__PURE__*/ function () { let ɵReceipeServiceService_BaseFactory; return function ReceipeServiceService_Factory(t) { return (ɵReceipeServiceService_BaseFactory || (ɵReceipeServiceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ReceipeServiceService)))(t || ReceipeServiceService); }; }();
ReceipeServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReceipeServiceService, factory: ReceipeServiceService.ɵfac, providedIn: 'root' });


/***/ })

}]);