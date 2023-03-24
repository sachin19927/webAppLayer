"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["src_app_component_product_product_module_ts"],{

/***/ 8451:
/*!********************************************************!*\
  !*** ./src/app/component/product/add/add.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class AddComponent {
  constructor() {}
  ngOnInit() {}
}
AddComponent.ɵfac = function AddComponent_Factory(t) {
  return new (t || AddComponent)();
};
AddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AddComponent,
  selectors: [["app-add"]],
  decls: 2,
  vars: 0,
  template: function AddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 728:
/*!**********************************************************!*\
  !*** ./src/app/component/product/edit/edit.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class EditComponent {
  constructor() {}
  ngOnInit() {}
}
EditComponent.ɵfac = function EditComponent_Factory(t) {
  return new (t || EditComponent)();
};
EditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditComponent,
  selectors: [["app-edit"]],
  decls: 2,
  vars: 0,
  template: function EditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 6424:
/*!**********************************************************!*\
  !*** ./src/app/component/product/list/list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ListComponent {
  constructor() {}
  ngOnInit() {}
}
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)();
};
ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  decls: 2,
  vars: 0,
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 1377:
/*!****************************************************************************************!*\
  !*** ./src/app/component/product/prodduct.management/prodduct.management.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdductManagementComponent": () => (/* binding */ ProdductManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

const _c0 = ["class", "management"];
class ProdductManagementComponent {
  constructor() {}
  ngOnInit() {}
}
ProdductManagementComponent.ɵfac = function ProdductManagementComponent_Factory(t) {
  return new (t || ProdductManagementComponent)();
};
ProdductManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProdductManagementComponent,
  selectors: [["app-prodduct", 8, "management"]],
  attrs: _c0,
  decls: 2,
  vars: 0,
  template: function ProdductManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "prodduct.management works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 6733:
/*!*****************************************************!*\
  !*** ./src/app/component/product/product.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 8451);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 728);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 6642);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 6424);
/* harmony import */ var _prodduct_management_prodduct_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prodduct.management/prodduct.management.component */ 1377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _product_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.routing */ 1835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);










class ProductModule {}
ProductModule.ɵfac = function ProductModule_Factory(t) {
  return new (t || ProductModule)();
};
ProductModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ProductModule
});
ProductModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_product_routing__WEBPACK_IMPORTED_MODULE_5__.productRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductModule, {
    declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _prodduct_management_prodduct_management_component__WEBPACK_IMPORTED_MODULE_4__.ProdductManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 1835:
/*!******************************************************!*\
  !*** ./src/app/component/product/product.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productRoutes": () => (/* binding */ productRoutes)
/* harmony export */ });
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 8451);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 728);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 6424);
/* harmony import */ var _prodduct_management_prodduct_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prodduct.management/prodduct.management.component */ 1377);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ 6642);





const productRoutes = [{
  path: '',
  component: _prodduct_management_prodduct_management_component__WEBPACK_IMPORTED_MODULE_3__.ProdductManagementComponent,
  children: [{
    path: 'add',
    component: _add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent
  }, {
    path: 'edit',
    component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent
  }, {
    path: 'view',
    component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__.ViewComponent
  }, {
    path: 'list',
    component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent
  }]
}];

/***/ }),

/***/ 6642:
/*!**********************************************************!*\
  !*** ./src/app/component/product/view/view.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ViewComponent {
  constructor() {}
  ngOnInit() {}
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) {
  return new (t || ViewComponent)();
};
ViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewComponent,
  selectors: [["app-view"]],
  decls: 2,
  vars: 0,
  template: function ViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ })

}]);