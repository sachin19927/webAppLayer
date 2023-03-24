"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["src_app_component_food_food_module_ts"],{

/***/ 9450:
/*!*****************************************************!*\
  !*** ./src/app/component/food/add/add.component.ts ***!
  \*****************************************************/
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

/***/ 5401:
/*!*******************************************************!*\
  !*** ./src/app/component/food/edit/edit.component.ts ***!
  \*******************************************************/
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

/***/ 72:
/*!*****************************************************************************!*\
  !*** ./src/app/component/food/food.management/food.management.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodManagementComponent": () => (/* binding */ FoodManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

const _c0 = ["class", "management"];
class FoodManagementComponent {
  constructor() {}
  ngOnInit() {}
}
FoodManagementComponent.ɵfac = function FoodManagementComponent_Factory(t) {
  return new (t || FoodManagementComponent)();
};
FoodManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FoodManagementComponent,
  selectors: [["app-food", 8, "management"]],
  attrs: _c0,
  decls: 2,
  vars: 0,
  template: function FoodManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "food.management works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 2567:
/*!***********************************************!*\
  !*** ./src/app/component/food/food.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodModule": () => (/* binding */ FoodModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 9450);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 5401);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 8957);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 6502);
/* harmony import */ var _food_management_food_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food.management/food.management.component */ 72);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _food_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food.routing */ 2170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);










class FoodModule {}
FoodModule.ɵfac = function FoodModule_Factory(t) {
  return new (t || FoodModule)();
};
FoodModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: FoodModule
});
FoodModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_food_routing__WEBPACK_IMPORTED_MODULE_5__.foodRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FoodModule, {
    declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _food_management_food_management_component__WEBPACK_IMPORTED_MODULE_4__.FoodManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 2170:
/*!************************************************!*\
  !*** ./src/app/component/food/food.routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "foodRoutes": () => (/* binding */ foodRoutes)
/* harmony export */ });
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 9450);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 5401);
/* harmony import */ var _food_management_food_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.management/food.management.component */ 72);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 6502);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ 8957);





const foodRoutes = [{
  path: '',
  component: _food_management_food_management_component__WEBPACK_IMPORTED_MODULE_2__.FoodManagementComponent,
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
    component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent
  }]
}];

/***/ }),

/***/ 6502:
/*!*******************************************************!*\
  !*** ./src/app/component/food/list/list.component.ts ***!
  \*******************************************************/
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

/***/ 8957:
/*!*******************************************************!*\
  !*** ./src/app/component/food/view/view.component.ts ***!
  \*******************************************************/
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