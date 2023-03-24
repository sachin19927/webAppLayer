"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["src_app_component_dashboard_dashboard_module_ts"],{

/***/ 7243:
/*!**************************************************************!*\
  !*** ./src/app/component/dashboard/board/board.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardComponent": () => (/* binding */ BoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


class BoardComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {}
  navigatePageTo(path) {
    this.router.navigate([path]); // absoulte path
    // this.router.navigate([path],{relativeTo: this.route});// relative path use Activated Router
  }
}

BoardComponent.ɵfac = function BoardComponent_Factory(t) {
  return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
};
BoardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BoardComponent,
  selectors: [["app-board"]],
  decls: 10,
  vars: 0,
  consts: [[3, "click"]],
  template: function BoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "board works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_2_listener() {
        return ctx.navigatePageTo("/dashboard");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_4_listener() {
        return ctx.navigatePageTo("/movie/list");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Movie");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_6_listener() {
        return ctx.navigatePageTo("/library/list");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Library");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_8_listener() {
        return ctx.navigatePageTo("/receipe/list");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Receipe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 9856:
/*!*****************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutes": () => (/* binding */ DashboardRoutes)
/* harmony export */ });
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/board.component */ 7243);

const DashboardRoutes = [{
  path: '',
  component: _board_board_component__WEBPACK_IMPORTED_MODULE_0__.BoardComponent,
  pathMatch: 'full'
}];

/***/ }),

/***/ 7465:
/*!*********************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/board.component */ 7243);
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies/movies.component */ 6463);
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/library.component */ 460);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ 7869);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ 1890);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ 9856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);










class DashboardModule {}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__.DashboardRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_0__.BoardComponent, _movies_movies_component__WEBPACK_IMPORTED_MODULE_1__.MoviesComponent, _library_library_component__WEBPACK_IMPORTED_MODULE_2__.LibraryComponent, _products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 460:
/*!******************************************************************!*\
  !*** ./src/app/component/dashboard/library/library.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryComponent": () => (/* binding */ LibraryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class LibraryComponent {
  constructor() {}
  ngOnInit() {}
}
LibraryComponent.ɵfac = function LibraryComponent_Factory(t) {
  return new (t || LibraryComponent)();
};
LibraryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LibraryComponent,
  selectors: [["app-library"]],
  decls: 2,
  vars: 0,
  template: function LibraryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "library works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 6463:
/*!****************************************************************!*\
  !*** ./src/app/component/dashboard/movies/movies.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesComponent": () => (/* binding */ MoviesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class MoviesComponent {
  constructor() {}
  ngOnInit() {}
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) {
  return new (t || MoviesComponent)();
};
MoviesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MoviesComponent,
  selectors: [["app-movies"]],
  decls: 2,
  vars: 0,
  template: function MoviesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "movies works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 7869:
/*!********************************************************************!*\
  !*** ./src/app/component/dashboard/products/products.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ProductsComponent {
  constructor() {}
  ngOnInit() {}
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)();
};
ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["app-products"]],
  decls: 2,
  vars: 0,
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "products works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ }),

/***/ 1890:
/*!**************************************************************!*\
  !*** ./src/app/component/dashboard/users/users.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class UsersComponent {
  constructor() {}
  ngOnInit() {}
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) {
  return new (t || UsersComponent)();
};
UsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UsersComponent,
  selectors: [["app-users"]],
  decls: 2,
  vars: 0,
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "users works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  }
});

/***/ })

}]);