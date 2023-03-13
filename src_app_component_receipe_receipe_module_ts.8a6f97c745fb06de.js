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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 2, vars: 0, template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } } });


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

const _c0 = ["class", "management"];
class ReceipeManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReceipeManagementComponent.ɵfac = function ReceipeManagementComponent_Factory(t) { return new (t || ReceipeManagementComponent)(); };
ReceipeManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceipeManagementComponent, selectors: [["app-receipe", 8, "management"]], attrs: _c0, decls: 2, vars: 0, template: function ReceipeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "receipe.management works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } } });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 9603);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 8012);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 8417);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 1435);
/* harmony import */ var _receipe_management_receipe_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receipe.management/receipe.management.component */ 5987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _receipe_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipe.routing */ 6653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);










class ReceipeModule {
}
ReceipeModule.ɵfac = function ReceipeModule_Factory(t) { return new (t || ReceipeModule)(); };
ReceipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ReceipeModule });
ReceipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_receipe_routing__WEBPACK_IMPORTED_MODULE_5__.recipeRoutes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ReceipeModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
        _receipe_management_receipe_management_component__WEBPACK_IMPORTED_MODULE_4__.ReceipeManagementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


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


/***/ })

}]);