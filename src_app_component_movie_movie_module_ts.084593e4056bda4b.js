"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["src_app_component_movie_movie_module_ts"],{

/***/ 7842:
/*!******************************************************!*\
  !*** ./src/app/component/movie/add/add.component.ts ***!
  \******************************************************/
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

/***/ 1724:
/*!********************************************************!*\
  !*** ./src/app/component/movie/edit/edit.component.ts ***!
  \********************************************************/
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

/***/ 3713:
/*!********************************************************!*\
  !*** ./src/app/component/movie/list/list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_movie_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/movie-service.service */ 6387);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);



function ListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r1.name);
  }
}
class ListComponent {
  constructor(httpService) {
    this.httpService = httpService;
  }
  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.httpService.getResults('', null).subscribe(movies => this.movies = movies);
  }
}
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_movie_service_service__WEBPACK_IMPORTED_MODULE_0__.MovieServiceService));
};
ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ListComponent_div_0_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.movies);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf]
});

/***/ }),

/***/ 6330:
/*!********************************************************************************!*\
  !*** ./src/app/component/movie/movie.management/movie.management.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieManagementComponent": () => (/* binding */ MovieManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


const _c0 = ["class", "management"];
class MovieManagementComponent {
  constructor() {}
  ngOnInit() {}
}
MovieManagementComponent.ɵfac = function MovieManagementComponent_Factory(t) {
  return new (t || MovieManagementComponent)();
};
MovieManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MovieManagementComponent,
  selectors: [["app-movie", 8, "management"]],
  attrs: _c0,
  decls: 1,
  vars: 0,
  template: function MovieManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet]
});

/***/ }),

/***/ 5362:
/*!*************************************************!*\
  !*** ./src/app/component/movie/movie.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieModule": () => (/* binding */ MovieModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 7842);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 1724);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 629);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 3713);
/* harmony import */ var _movie_management_movie_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie.management/movie.management.component */ 6330);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _movie_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie.routing */ 6552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);










class MovieModule {}
MovieModule.ɵfac = function MovieModule_Factory(t) {
  return new (t || MovieModule)();
};
MovieModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MovieModule
});
MovieModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_movie_routing__WEBPACK_IMPORTED_MODULE_5__.movieRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MovieModule, {
    declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _movie_management_movie_management_component__WEBPACK_IMPORTED_MODULE_4__.MovieManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6552:
/*!**************************************************!*\
  !*** ./src/app/component/movie/movie.routing.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "movieRoutes": () => (/* binding */ movieRoutes)
/* harmony export */ });
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 7842);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 1724);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 3713);
/* harmony import */ var _movie_management_movie_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.management/movie.management.component */ 6330);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ 629);





const movieRoutes = [{
  path: '',
  component: _movie_management_movie_management_component__WEBPACK_IMPORTED_MODULE_3__.MovieManagementComponent,
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

/***/ 629:
/*!********************************************************!*\
  !*** ./src/app/component/movie/view/view.component.ts ***!
  \********************************************************/
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

/***/ }),

/***/ 6387:
/*!**************************************************!*\
  !*** ./src/app/service/movie-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieServiceService": () => (/* binding */ MovieServiceService)
/* harmony export */ });
/* harmony import */ var _app_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/endpoints */ 8781);
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client.service */ 5772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);



class MovieServiceService extends _http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService {
  constructor() {
    super(...arguments);
    this.URL = _app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.MOVIE_DATA;
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
MovieServiceService.ɵfac = /*@__PURE__*/function () {
  let ɵMovieServiceService_BaseFactory;
  return function MovieServiceService_Factory(t) {
    return (ɵMovieServiceService_BaseFactory || (ɵMovieServiceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MovieServiceService)))(t || MovieServiceService);
  };
}();
MovieServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MovieServiceService,
  factory: MovieServiceService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);