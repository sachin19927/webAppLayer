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
/* harmony import */ var _app_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/endpoints */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/library-service.service */ 5287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);





class EditComponent {
    constructor(libraryService, route) {
        this.libraryService = libraryService;
        this.route = route;
        this.allwedTo = false;
        this.fragmentValue = '';
    }
    ngOnInit() {
        //  console.log(this.route.snapshot.queryParams)
        this.libraryService.getById(_app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA, this.route.snapshot.params['id']).subscribe(book => this.book = book);
        this.route.params.subscribe((params) => {
            this.libraryService.getById(_app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA, params['id']).subscribe(book => this.book = book);
            this.allwedTo = params['allwedTo'];
        });
        this.route.queryParams.subscribe((params) => {
            this.allwedTo = params['allwedTo'];
        });
        fragmentValue: this.route.fragment.subscribe();
        //console.log(this.route.fragment.subscribe());
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_1__.LibraryServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 1, vars: 5, template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate5"]("", ctx.book.id, "\n", ctx.book.name, "\n", ctx.book.author, "\n", ctx.allwedTo, " -- ", ctx.fragmentValue, " ");
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
            { path: 'view/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent },
            //{path:'view/:id/:name',component:ViewComponent},
            { path: 'view/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__.ViewComponent },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/library-service.service */ 5287);
/* harmony import */ var src_app_service_central_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/central-logger.service */ 1647);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _shared_pipes_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/word-shortner.pipe */ 5554);
/* harmony import */ var _shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/data-filter.pipe */ 6823);









const _c0 = function (a1) {
  return ["/library/view", a1];
};

const _c1 = function () {
  return {
    "allwedTo": true
  };
};

function ListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "wordShortner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_div_8_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const book_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.loadBookToEdit(book_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate7"]("", book_r1.id, "-- ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 11, book_r1.name, 12)), " -- ", book_r1.category, " -- ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 14, book_r1.author), " -- ", book_r1.year, "|", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 16, book_r1.publishedDate, "fullDate"), " -- ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 19, book_r1.price, "USD"), " -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c0, book_r1.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c1));
  }
}

class ListComponent {
  constructor(httpService, logginService, router, route) {
    this.httpService = httpService;
    this.logginService = logginService;
    this.router = router;
    this.route = route;
    this.filterByKeyValue = '';
    this.libraryStatus = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Online');
      }, 2000);
    });
  }

  ngOnInit() {
    this.logginService.logToConsole('log');
    this.logginService.infoToConsole('info');
    this.logginService.debugToConsole('debug');
    this.logginService.errorToConsole('error');
    this.getBooks();
  }

  getBooks() {
    this.httpService.getResults('', null).subscribe(books => this.books = books);
    this.httpService.libaryDatafor.emit(this.books);
  }

  addBooks() {
    this.books.push({
      "id": 105,
      "name": "Life of Sachin",
      "category": "horror",
      "author": "sachin",
      "year": 2022,
      "publishedDate": new Date(),
      "price": 210.34
    });
  }

  loadBookToEdit(id) {
    //this.router.navigate(['/library/view',id,'edit'],{queryParams:{'allwedTo':true},fragment:'loading'});
    this.router.navigate(['/library/view', id, 'edit'], {
      queryParams: {
        'allwedTo': true
      },
      fragment: 'loading'
    });
  }

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__.LibraryServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_central_logger_service__WEBPACK_IMPORTED_MODULE_1__.CentralLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  decls: 10,
  vars: 9,
  consts: [["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngFor", "ngForOf"], ["fragment", "loading", 3, "routerLink", "queryParams"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.filterByKeyValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_Template_button_click_5_listener() {
        return ctx.addBooks();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Add Book");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ListComponent_div_8_Template, 12, 25, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "dataFilter");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Library ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx.libraryStatus), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filterByKeyValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](9, 5, ctx.books, ctx.filterByKeyValue, "author"));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _shared_pipes_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_2__.WordShortnerPipe, _shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.DataFilterPipe]
});

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
/* harmony import */ var _app_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/endpoints */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/library-service.service */ 5287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);




const _c0 = function () { return ["/library/view", 102, "edit"]; };
class ViewComponent {
    constructor(libraryService, route, router) {
        this.libraryService = libraryService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.libraryService.getById(_app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA, this.route.snapshot.params['id']).subscribe(book => this.book = book);
        this.paramSubscrption = this.route.params.subscribe((params) => {
            this.libraryService.getById(_app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA, params['id']).subscribe(book => this.book = book);
        });
    }
    onEdit() {
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    }
    ngOnDestroy() {
        this.paramSubscrption.unsubscribe();
        // even throw component got closed and recreated and visting componenet subscripton won't go
        // By default Angular handles destory of subcription
        // If u want implement only for subscrption parts
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_1__.LibraryServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 5, vars: 5, consts: [[3, "click"], [3, "routerLink"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_1_listener() { return ctx.onEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Next User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx.book.id, " ", ctx.book.name, " ", ctx.book.author, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref] });


/***/ }),

/***/ 1647:
/*!***************************************************!*\
  !*** ./src/app/service/central-logger.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralLoggerService": () => (/* binding */ CentralLoggerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class CentralLoggerService {
    constructor() { }
    logToConsole(message) {
        console.log(new Date + ": " + message);
    }
    infoToConsole(message) {
        console.info(new Date + ": " + message);
    }
    debugToConsole(message) {
        console.debug(new Date + ": " + message);
    }
    errorToConsole(message) {
        console.error(new Date + ": " + message);
    }
}
CentralLoggerService.ɵfac = function CentralLoggerService_Factory(t) { return new (t || CentralLoggerService)(); };
CentralLoggerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CentralLoggerService, factory: CentralLoggerService.ɵfac, providedIn: 'root' });


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
        if (filterString === '' || value.length === 0) {
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