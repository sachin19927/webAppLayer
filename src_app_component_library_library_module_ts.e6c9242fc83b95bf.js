"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["src_app_component_library_library_module_ts"],{

/***/ 5367:
/*!********************************************************!*\
  !*** ./src/app/component/library/add/add.component.ts ***!
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

/***/ 3525:
/*!**********************************************************!*\
  !*** ./src/app/component/library/edit/edit.component.ts ***!
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

/***/ 5803:
/*!**************************************************************************************!*\
  !*** ./src/app/component/library/library.management/library.management.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryManagementComponent": () => (/* binding */ LibraryManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


const _c0 = ["class", "management"];
class LibraryManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
LibraryManagementComponent.ɵfac = function LibraryManagementComponent_Factory(t) { return new (t || LibraryManagementComponent)(); };
LibraryManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibraryManagementComponent, selectors: [["app-library", 8, "management"]], attrs: _c0, decls: 1, vars: 0, template: function LibraryManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet] });


/***/ }),

/***/ 3775:
/*!*****************************************************!*\
  !*** ./src/app/component/library/library.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryModule": () => (/* binding */ LibraryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 5367);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 3525);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 2703);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 7085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _library_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library.routing */ 1168);
/* harmony import */ var _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library.management/library.management.component */ 5803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);










class LibraryModule {
}
LibraryModule.ɵfac = function LibraryModule_Factory(t) { return new (t || LibraryModule)(); };
LibraryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LibraryModule });
LibraryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_library_routing__WEBPACK_IMPORTED_MODULE_4__.libraryRoutes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LibraryModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
        _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_5__.LibraryManagementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 1168:
/*!******************************************************!*\
  !*** ./src/app/component/library/library.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "libraryRoutes": () => (/* binding */ libraryRoutes)
/* harmony export */ });
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 5367);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 3525);
/* harmony import */ var _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library.management/library.management.component */ 5803);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 7085);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ 2703);





const libraryRoutes = [
    {
        path: '', component: _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_2__.LibraryManagementComponent,
        children: [
            { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent },
            { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent },
            { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__.ViewComponent },
            { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent }
        ]
    }
];


/***/ }),

/***/ 7085:
/*!**********************************************************!*\
  !*** ./src/app/component/library/list/list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/library-service.service */ 5287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);



function ListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate7"]("", book_r1.id, "|", book_r1.name, "|", book_r1.category, "|", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, book_r1.author), "|", book_r1.year, "|", book_r1.publishedDate, "|", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 9, book_r1.price, "USD"), "");
} }
class ListComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getBooks();
    }
    getBooks() {
        this.httpService.getResults('', null).subscribe(books => this.books = books);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__.LibraryServiceService)); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_div_2_Template, 5, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe] });


/***/ }),

/***/ 2703:
/*!**********************************************************!*\
  !*** ./src/app/component/library/view/view.component.ts ***!
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

/***/ 5287:
/*!****************************************************!*\
  !*** ./src/app/service/library-service.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryServiceService": () => (/* binding */ LibraryServiceService)
/* harmony export */ });
/* harmony import */ var _app_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/endpoints */ 8781);
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client.service */ 5772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);



class LibraryServiceService extends _http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService {
    constructor() {
        super(...arguments);
        this.URL = _app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA;
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
LibraryServiceService.ɵfac = /*@__PURE__*/ function () { let ɵLibraryServiceService_BaseFactory; return function LibraryServiceService_Factory(t) { return (ɵLibraryServiceService_BaseFactory || (ɵLibraryServiceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LibraryServiceService)))(t || LibraryServiceService); }; }();
LibraryServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LibraryServiceService, factory: LibraryServiceService.ɵfac, providedIn: 'root' });


/***/ })

}]);