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
    this.route.params.subscribe(params => {
      this.libraryService.getById(_app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA, params['id']).subscribe(book => this.book = book);
      this.allwedTo = params['allwedTo'];
    });
    this.route.queryParams.subscribe(params => {
      this.allwedTo = params['allwedTo'];
    });
    this.route.fragment.subscribe();
    //console.log(this.route.fragment.subscribe());
  }
}

EditComponent.ɵfac = function EditComponent_Factory(t) {
  return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_1__.LibraryServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
EditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EditComponent,
  selectors: [["app-edit"]],
  decls: 1,
  vars: 5,
  template: function EditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate5"]("", ctx.book.id, "\n", ctx.book.title, "\n", ctx.book.author, "\n", ctx.allwedTo, " -- ", ctx.fragmentValue, " ");
    }
  }
});

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
  constructor() {}
  ngOnInit() {}
}
LibraryManagementComponent.ɵfac = function LibraryManagementComponent_Factory(t) {
  return new (t || LibraryManagementComponent)();
};
LibraryManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LibraryManagementComponent,
  selectors: [["app-library", 8, "management"]],
  attrs: _c0,
  decls: 1,
  vars: 0,
  template: function LibraryManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet]
});

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 5367);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 3525);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 2703);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 7085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _library_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library.routing */ 1168);
/* harmony import */ var _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library.management/library.management.component */ 5803);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/mat-module.module */ 5530);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/directives/directive.module */ 7589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4650);














class LibraryModule {}
LibraryModule.ɵfac = function LibraryModule_Factory(t) {
  return new (t || LibraryModule)();
};
LibraryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: LibraryModule
});
LibraryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(_library_routing__WEBPACK_IMPORTED_MODULE_4__.libraryRoutes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_7__.MatModule, src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LibraryModule, {
    declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent, _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_5__.LibraryManagementComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, src_app_mat_module_module__WEBPACK_IMPORTED_MODULE_7__.MatModule, src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule]
  });
})();

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





const libraryRoutes = [{
  path: '',
  component: _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_2__.LibraryManagementComponent,
  children: [{
    path: 'add',
    component: _add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent
  }, {
    path: 'view/:id/edit',
    component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent
  },
  //{path:'view/:id/:name',component:ViewComponent},
  {
    path: 'view/:id',
    component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__.ViewComponent
  }, {
    path: 'list',
    component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent
  }]
}];

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/library-service.service */ 5287);
/* harmony import */ var src_app_service_central_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/central-logger.service */ 1647);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7392);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 8255);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1572);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 3626);
/* harmony import */ var _directives_attribute_highlight_directive_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/attribute/highlight-directive.directive */ 2557);
/* harmony import */ var _directives_attribute_highlight_better_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/attribute/highlight-better.directive */ 1051);
/* harmony import */ var _shared_pipes_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/word-shortner.pipe */ 5554);
/* harmony import */ var _shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/data-filter.pipe */ 6823);















function ListComponent_mat_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 9);
  }
}
function ListComponent_ng_container_10_mat_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", column_r6, " ");
  }
}
function ListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_10_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matColumnDef", column_r6);
  }
}
function ListComponent_ng_container_11_ng_container_1_mat_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r18[key_r9], " ");
  }
}
function ListComponent_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_1_mat_cell_1_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ListComponent_ng_container_11_ng_container_2_mat_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "wordShortner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 3, element_r21[key_r9], 12)), " ");
  }
}
function ListComponent_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_2_mat_cell_1_Template, 4, 6, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ListComponent_ng_container_11_ng_container_3_mat_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r24[key_r9], " ");
  }
}
function ListComponent_ng_container_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_3_mat_cell_1_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ListComponent_ng_container_11_ng_container_4_mat_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r27[key_r9], "USD"), " ");
  }
}
function ListComponent_ng_container_11_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_4_mat_cell_1_Template, 3, 4, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ListComponent_ng_container_11_ng_container_5_mat_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r30[key_r9], " ");
  }
}
function ListComponent_ng_container_11_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_5_mat_cell_1_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ListComponent_ng_container_11_ng_container_6_mat_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    const key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r33[key_r9], "fullDate"), " ");
  }
}
function ListComponent_ng_container_11_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_6_mat_cell_1_Template, 3, 4, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ListComponent_ng_container_11_ng_container_7_mat_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell")(1, "button", 14)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", null, 15)(6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListComponent_ng_container_11_ng_container_7_mat_cell_1_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const element_r36 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.loadBookToEdit(element_r36["id"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "dialpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListComponent_ng_container_11_ng_container_7_mat_cell_1_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const element_r36 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.loadBookToEdit(element_r36["id"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "voicemail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListComponent_ng_container_11_ng_container_7_mat_cell_1_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const element_r36 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.deleteBook(element_r36["id"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "voicemail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r37);
  }
}
function ListComponent_ng_container_11_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_7_mat_cell_1_Template, 21, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function ListComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_ng_container_11_ng_container_1_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ListComponent_ng_container_11_ng_container_2_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ListComponent_ng_container_11_ng_container_3_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ListComponent_ng_container_11_ng_container_4_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ListComponent_ng_container_11_ng_container_5_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ListComponent_ng_container_11_ng_container_6_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ListComponent_ng_container_11_ng_container_7_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const key_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matColumnDef", key_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r9 === "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r9 === "title" || key_r9 === "author");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r9 === "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r9 === "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r9 === "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r9 === "insertedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r9 === "action");
  }
}
function ListComponent_mat_header_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
  }
}
function ListComponent_mat_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-row", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("defaultColor", "transparent")("highLight", "grey");
  }
}
function ListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "API call Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class ListComponent {
  constructor(httpService, logginService, router, route) {
    this.httpService = httpService;
    this.logginService = logginService;
    this.router = router;
    this.route = route;
    this.isLoading = false;
    this.filterByKeyValue = '';
    this.errorMsg = null;
    this.libraryStatus = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Online');
      }, 2000);
    });
    this.columnsToDisplay = ['No', 'Title', 'Category', 'Author', 'Year', 'Published Date', 'Price', 'Action'];
    this.KeyToDisplay = ['id', 'title', 'category', 'author', 'year', 'insertedDate', 'price', 'action'];
  }
  ngOnInit() {
    this.isLoading = true;
    this.logginService.logToConsole('log');
    this.logginService.infoToConsole('info');
    this.logginService.debugToConsole('debug');
    this.logginService.errorToConsole('error');
    this.getBooks();
    //this.isLoading = false;
  }

  getBooks() {
    this.httpService.getResults('', null).subscribe(books => {
      console.log(books);
      this.books = books;
      this.isLoading = false;
    }, error => {
      this.errorMsg = error;
    });
    this.httpService.libaryDatafor.emit(this.books);
  }
  addBooks() {
    const refreshData = this.books;
    const postData = {
      "title": "Kings Men",
      "category": "Action",
      "author": "SACHIN",
      "email": "sachin19927@gmail.com",
      "year": 2023,
      "price": 100.5
    };
    this.httpService.createData('', postData).subscribe(data => {
      refreshData.push(data);
    }, error => {
      this.errorMsg = error;
    });
    this.books = refreshData;
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
  deleteBook(id) {
    this.httpService.deleteData('', id).subscribe(() => {
      this.getBooks();
    }, error => {
      this.errorMsg = error;
    });
  }
}
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_0__.LibraryServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_central_logger_service__WEBPACK_IMPORTED_MODULE_1__.CentralLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};
ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  decls: 15,
  vars: 15,
  consts: [["class", "spinner", 4, "ngIf"], ["appHighlightDirective", ""], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], ["appHighlightBetter", "", 3, "defaultColor", "highLight", 4, "matRowDef", "matRowDefColumns"], ["class", "alert alert-danger", 4, "ngIf"], [1, "spinner"], [3, "matColumnDef"], [4, "matHeaderCellDef"], [4, "ngIf"], [4, "matCellDef"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["appHighlightBetter", "", 3, "defaultColor", "highLight"], [1, "alert", "alert-danger"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ListComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.filterByKeyValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListComponent_Template_button_click_6_listener() {
        return ctx.addBooks();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Add Book");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "dataFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ListComponent_ng_container_10_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ListComponent_ng_container_11_Template, 8, 8, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ListComponent_mat_header_row_12_Template, 1, 0, "mat-header-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ListComponent_mat_row_13_Template, 1, 2, "mat-row", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ListComponent_div_14_Template, 3, 0, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Library ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 9, ctx.libraryStatus), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterByKeyValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](9, 11, ctx.books, ctx.filterByKeyValue, "author"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.KeyToDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.KeyToDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _directives_attribute_highlight_directive_directive__WEBPACK_IMPORTED_MODULE_2__.HighlightDirectiveDirective, _directives_attribute_highlight_better_directive__WEBPACK_IMPORTED_MODULE_3__.HighlightBetterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _shared_pipes_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_4__.WordShortnerPipe, _shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__.DataFilterPipe]
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




const _c0 = function () {
  return ["/library/view", 102, "edit"];
};
class ViewComponent {
  constructor(libraryService, route, router) {
    this.libraryService = libraryService;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.libraryService.getById(_app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA, this.route.snapshot.params['id']).subscribe(book => this.book = book);
    this.paramSubscrption = this.route.params.subscribe(params => {
      this.libraryService.getById(_app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA, params['id']).subscribe(book => this.book = book);
    });
  }
  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });
  }
  ngOnDestroy() {
    this.paramSubscrption.unsubscribe();
    // even throw component got closed and recreated and visting componenet subscripton won't go
    // By default Angular handles destory of subcription
    // If u want implement only for subscrption parts
  }
}

ViewComponent.ɵfac = function ViewComponent_Factory(t) {
  return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_library_service_service__WEBPACK_IMPORTED_MODULE_1__.LibraryServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ViewComponent,
  selectors: [["app-view"]],
  decls: 5,
  vars: 5,
  consts: [[3, "click"], [3, "routerLink"]],
  template: function ViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_1_listener() {
        return ctx.onEdit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit User");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Next User");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx.book.id, " ", ctx.book.title, " ", ctx.book.author, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink]
});

/***/ }),

/***/ 1051:
/*!********************************************************************!*\
  !*** ./src/app/directives/attribute/highlight-better.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightBetterDirective": () => (/* binding */ HighlightBetterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class HighlightBetterDirective {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.defaultColor = 'transparent';
    this.highLight = 'blue';
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  mouserover(eventData) {
    //below code commented since using Host Binding is easy no need of render part
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highLight;
  }
  mouseleave(eventData) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}
HighlightBetterDirective.ɵfac = function HighlightBetterDirective_Factory(t) {
  return new (t || HighlightBetterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
HighlightBetterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: HighlightBetterDirective,
  selectors: [["", "appHighlightBetter", ""]],
  hostVars: 2,
  hostBindings: function HighlightBetterDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HighlightBetterDirective_mouseenter_HostBindingHandler() {
        return ctx.mouserover();
      })("mouseleave", function HighlightBetterDirective_mouseleave_HostBindingHandler() {
        return ctx.mouseleave();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
    }
  },
  inputs: {
    defaultColor: "defaultColor",
    highLight: "highLight"
  }
});

/***/ }),

/***/ 2557:
/*!***********************************************************************!*\
  !*** ./src/app/directives/attribute/highlight-directive.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightDirectiveDirective": () => (/* binding */ HighlightDirectiveDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class HighlightDirectiveDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnInit() {
    /**
     * directly access code like this is bad parctise use anothr Directive which is resolving this case
     */
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
HighlightDirectiveDirective.ɵfac = function HighlightDirectiveDirective_Factory(t) {
  return new (t || HighlightDirectiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
HighlightDirectiveDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: HighlightDirectiveDirective,
  selectors: [["", "appHighlightDirective", ""]]
});

/***/ }),

/***/ 7589:
/*!************************************************!*\
  !*** ./src/app/directives/directive.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveModule": () => (/* binding */ DirectiveModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _attribute_highlight_directive_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute/highlight-directive.directive */ 2557);
/* harmony import */ var _attribute_highlight_better_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute/highlight-better.directive */ 1051);
/* harmony import */ var _structure_unless_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structure/unless.directive */ 4855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);





class DirectiveModule {}
DirectiveModule.ɵfac = function DirectiveModule_Factory(t) {
  return new (t || DirectiveModule)();
};
DirectiveModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DirectiveModule
});
DirectiveModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DirectiveModule, {
    declarations: [_attribute_highlight_directive_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirectiveDirective, _attribute_highlight_better_directive__WEBPACK_IMPORTED_MODULE_1__.HighlightBetterDirective, _structure_unless_directive__WEBPACK_IMPORTED_MODULE_2__.UnlessDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_attribute_highlight_directive_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirectiveDirective, _attribute_highlight_better_directive__WEBPACK_IMPORTED_MODULE_1__.HighlightBetterDirective, _structure_unless_directive__WEBPACK_IMPORTED_MODULE_2__.UnlessDirective]
  });
})();

/***/ }),

/***/ 4855:
/*!**********************************************************!*\
  !*** ./src/app/directives/structure/unless.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlessDirective": () => (/* binding */ UnlessDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class UnlessDirective {
  // appUnless should be same as driective selector and property tag
  set appUnless(condition) {
    if (!condition) {
      this.vcrf.createEmbeddedView(this.template);
    } else {
      this.vcrf.clear;
    }
  }
  constructor(template, vcrf) {
    this.template = template;
    this.vcrf = vcrf;
  }
}
UnlessDirective.ɵfac = function UnlessDirective_Factory(t) {
  return new (t || UnlessDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
UnlessDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: UnlessDirective,
  selectors: [["", "appUnless", ""]],
  inputs: {
    appUnless: "appUnless"
  }
});

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
  logToConsole(message) {
    console.log(new Date() + ": " + message);
  }
  infoToConsole(message) {
    console.info(new Date() + ": " + message);
  }
  debugToConsole(message) {
    console.debug(new Date() + ": " + message);
  }
  errorToConsole(message) {
    console.error(new Date() + ": " + message);
  }
  constructor() {}
}
CentralLoggerService.ɵfac = function CentralLoggerService_Factory(t) {
  return new (t || CentralLoggerService)();
};
CentralLoggerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CentralLoggerService,
  factory: CentralLoggerService.ɵfac,
  providedIn: 'root'
});

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
ConvertDateStringPipe.ɵfac = function ConvertDateStringPipe_Factory(t) {
  return new (t || ConvertDateStringPipe)();
};
ConvertDateStringPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "convertDateString",
  type: ConvertDateStringPipe,
  pure: true
});

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
ConvertSpacePipePipe.ɵfac = function ConvertSpacePipePipe_Factory(t) {
  return new (t || ConvertSpacePipePipe)();
};
ConvertSpacePipePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "convertSpacePipe",
  type: ConvertSpacePipePipe,
  pure: true
});

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
      if (item[propKeyName] === filterString) resultArray.push(item);
    }
    return resultArray;
  }
}
DataFilterPipe.ɵfac = function DataFilterPipe_Factory(t) {
  return new (t || DataFilterPipe)();
};
DataFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "dataFilter",
  type: DataFilterPipe,
  pure: false
});

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





class PipesModule {}
PipesModule.ɵfac = function PipesModule_Factory(t) {
  return new (t || PipesModule)();
};
PipesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PipesModule
});
PipesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_convert_date_string_pipe__WEBPACK_IMPORTED_MODULE_0__.ConvertDateStringPipe, _convert_space_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__.ConvertSpacePipePipe, _word_shortner_pipe__WEBPACK_IMPORTED_MODULE_2__.WordShortnerPipe, _data_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.DataFilterPipe],
    exports: [_word_shortner_pipe__WEBPACK_IMPORTED_MODULE_2__.WordShortnerPipe, _data_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.DataFilterPipe]
  });
})();

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
WordShortnerPipe.ɵfac = function WordShortnerPipe_Factory(t) {
  return new (t || WordShortnerPipe)();
};
WordShortnerPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "wordShortner",
  type: WordShortnerPipe,
  pure: true
});

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



class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule],
    exports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule]
  });
})();

/***/ })

}]);