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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_movie_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/movie-service.service */ 6387);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view.component */ 629);




function ListComponent_div_0_app_view_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-view", 3);
  }
  if (rf & 2) {
    const movie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("movie", movie_r2);
  }
}
function ListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListComponent_div_0_app_view_1_Template, 1, 1, "app-view", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
  }
}
class ListComponent {
  constructor(httpService) {
    this.httpService = httpService;
    this.isLoading = true;
  }
  ngOnInit() {
    this.getMovies();
    this.isLoading = false;
  }
  getMovies() {
    this.httpService.getResults('', null).subscribe(movies => this.movies = movies);
  }
}
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_movie_service_service__WEBPACK_IMPORTED_MODULE_0__.MovieServiceService));
};
ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  decls: 1,
  vars: 1,
  consts: [["class", "outer-container", 4, "ngIf"], [1, "outer-container"], [3, "movie", 4, "ngFor", "ngForOf"], [3, "movie"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ListComponent_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _view_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent],
  styles: [".outer-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));\n  padding-top: 20px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-bottom: 20px;\n  height: calc(100% - 40px);\n  animation: _ngcontent-%COMP%_fadein 0.7s;\n}\n@media screen and (max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape) {\n  .outer-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));\n  }\n}\n@keyframes _ngcontent-%COMP%_fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n}"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 7842);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 1724);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 629);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 3713);
/* harmony import */ var _movie_management_movie_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie.management/movie.management.component */ 6330);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _movie_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie.routing */ 6552);
/* harmony import */ var src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/mat-module.module */ 5530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4650);











class MovieModule {}
MovieModule.ɵfac = function MovieModule_Factory(t) {
  return new (t || MovieModule)();
};
MovieModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MovieModule
});
MovieModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_movie_routing__WEBPACK_IMPORTED_MODULE_5__.movieRoutes), src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_6__.MatModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MovieModule, {
    declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _movie_management_movie_management_component__WEBPACK_IMPORTED_MODULE_4__.MovieManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_6__.MatModule]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7392);




function ViewComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.rank);
  }
}
class ViewComponent {
  constructor() {
    this.rank = 0;
  }
  ngOnInit() {}
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) {
  return new (t || ViewComponent)();
};
ViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewComponent,
  selectors: [["app-view"]],
  inputs: {
    movie: "movie",
    rank: "rank"
  },
  decls: 13,
  vars: 5,
  consts: [[1, "inner-container"], [1, "album-cover-container", "mat-elevation-z24", 3, "routerLink"], ["appLazyLoad", "", "src", "./assets/images/logo/FOundling.png", "alt", "album-art", 1, "album-cover"], [1, "text-outer-container"], ["class", "rank", 4, "ngIf"], [1, "album-text"], [1, "album-name-container"], [1, "album-name", 3, "title"], [1, "explicit"], [1, "artist-name"], [1, "rank"]],
  template: function ViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewComponent_span_4_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "explicit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "library-albums");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rank);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.movie.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.directors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.inner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 170px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 20px;\n}\n@media screen and (max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape) {\n  .inner-container[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n\n.album-cover-container[_ngcontent-%COMP%] {\n  background: rgb(33, 33, 33);\n  outline: none;\n  height: 170px;\n  width: 170px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  background-size: cover;\n  cursor: pointer;\n  overflow: hidden;\n}\n@media screen and (max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape) {\n  .album-cover-container[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n\n.album-cover[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.3s;\n}\n.album-cover[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.artist-name[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n}\n\n.album-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  cursor: pointer;\n  outline: none;\n  flex: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.album-text[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: default;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.album-name-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.explicit[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  padding-left: 2px;\n  color: #b3b3b3;\n}\n\n.rank[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  padding-right: 10px;\n  cursor: default;\n  padding-top: 2px;\n}\n\n.text-outer-container[_ngcontent-%COMP%] {\n  display: flex;\n}"]
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