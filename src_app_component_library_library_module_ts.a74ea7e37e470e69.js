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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 5367);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 3525);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 2703);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 7085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _library_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library.routing */ 1168);
/* harmony import */ var _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library.management/library.management.component */ 5803);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4650);












class LibraryModule {
}
LibraryModule.ɵfac = function LibraryModule_Factory(t) { return new (t || LibraryModule)(); };
LibraryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: LibraryModule });
LibraryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_library_routing__WEBPACK_IMPORTED_MODULE_4__.libraryRoutes),
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LibraryModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
        _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_5__.LibraryManagementComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/library-service.service */ 5287);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _shared_pipes_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/word-shortner.pipe */ 5554);
/* harmony import */ var _shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/data-filter.pipe */ 6823);






function ListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "wordShortner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate7"]("", book_r1.id, "| ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 9, book_r1.name, 12)), "| ", book_r1.category, "| ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 12, book_r1.author), "| ", book_r1.year, "|", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 14, book_r1.publishedDate, "fullDate"), "| ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 17, book_r1.price, "USD"), "");
} }
class ListComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.filterByKeyValue = '';
    }
    ngOnInit() {
        this.getBooks();
    }
    getBooks() {
        this.httpService.getResults('', null).subscribe(books => this.books = books);
    }
    addBooks() {
        this.books.push({ "id": 105, "name": "Life of Sachin", "category": "horror", "author": "sachin", "year": 2022, "publishedDate": new Date, "price": 210.34 });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__.LibraryServiceService)); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 9, vars: 6, consts: [["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngFor", "ngForOf"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_2_listener($event) { return ctx.filterByKeyValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListComponent_Template_button_click_4_listener() { return ctx.addBooks; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ListComponent_div_7_Template, 8, 20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "dataFilter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterByKeyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](8, 2, ctx.books, ctx.filterByKeyValue, "author"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _shared_pipes_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_1__.WordShortnerPipe, _shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.DataFilterPipe] });


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


/***/ }),

/***/ 583:
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/convert-date-string.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertDateStringPipe": () => (/* binding */ ConvertDateStringPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ConvertDateStringPipe {
    transform(value, ...args) {
        return null;
    }
}
ConvertDateStringPipe.ɵfac = function ConvertDateStringPipe_Factory(t) { return new (t || ConvertDateStringPipe)(); };
ConvertDateStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "convertDateString", type: ConvertDateStringPipe, pure: true });


/***/ }),

/***/ 5599:
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/convert-space-pipe.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertSpacePipePipe": () => (/* binding */ ConvertSpacePipePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ConvertSpacePipePipe {
    transform(value, ...args) {
        return null;
    }
}
ConvertSpacePipePipe.ɵfac = function ConvertSpacePipePipe_Factory(t) { return new (t || ConvertSpacePipePipe)(); };
ConvertSpacePipePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "convertSpacePipe", type: ConvertSpacePipePipe, pure: true });


/***/ }),

/***/ 6823:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/data-filter.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataFilterPipe": () => (/* binding */ DataFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class DataFilterPipe {
    transform(value, filterString, propKeyName) {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propKeyName] === filterString)
                resultArray.push(item);
        }
        return resultArray;
    }
}
DataFilterPipe.ɵfac = function DataFilterPipe_Factory(t) { return new (t || DataFilterPipe)(); };
DataFilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dataFilter", type: DataFilterPipe, pure: false });


/***/ }),

/***/ 4586:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _convert_date_string_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-date-string.pipe */ 583);
/* harmony import */ var _convert_space_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert-space-pipe.pipe */ 5599);
/* harmony import */ var _word_shortner_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word-shortner.pipe */ 5554);
/* harmony import */ var _data_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-filter.pipe */ 6823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);





class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_convert_date_string_pipe__WEBPACK_IMPORTED_MODULE_0__.ConvertDateStringPipe,
        _convert_space_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__.ConvertSpacePipePipe,
        _word_shortner_pipe__WEBPACK_IMPORTED_MODULE_2__.WordShortnerPipe,
        _data_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.DataFilterPipe], exports: [_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_2__.WordShortnerPipe,
        _data_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.DataFilterPipe] }); })();


/***/ }),

/***/ 5554:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/word-shortner.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordShortnerPipe": () => (/* binding */ WordShortnerPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class WordShortnerPipe {
    transform(value, limit) {
        if (value != null && value.length > limit) {
            return value.substring(0, limit) + "...";
        }
        return value;
    }
}
WordShortnerPipe.ɵfac = function WordShortnerPipe_Factory(t) { return new (t || WordShortnerPipe)(); };
WordShortnerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "wordShortner", type: WordShortnerPipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/pipes.module */ 4586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule], exports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule] }); })();


/***/ })

}]);