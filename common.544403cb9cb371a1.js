"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["common"],{

/***/ 5287:
/*!****************************************************!*\
  !*** ./src/app/service/library-service.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryServiceService": () => (/* binding */ LibraryServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _app_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/endpoints */ 8781);
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client.service */ 5772);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 529);





class LibraryServiceService extends _http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService {
  constructor() {
    super(...arguments);
    this.libaryDatafor = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.URL = _app_endpoints__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.LIBRARY_DATA;
  }
  getResults(url, params) {
    return this.getAll(this.URL, params);
  }
  getResultByReqParams(url, title) {
    const reqParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().append('title', title);
    return this.getDataByReqParams(this.URL, reqParam);
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
    return this.delete(this.URL + 'tesst', params);
  }
}
LibraryServiceService.ɵfac = /*@__PURE__*/function () {
  let ɵLibraryServiceService_BaseFactory;
  return function LibraryServiceService_Factory(t) {
    return (ɵLibraryServiceService_BaseFactory || (ɵLibraryServiceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LibraryServiceService)))(t || LibraryServiceService);
  };
}();
LibraryServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LibraryServiceService,
  factory: LibraryServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8781:
/*!***************************************!*\
  !*** ./src/environments/endpoints.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENDPOINTS": () => (/* binding */ ENDPOINTS)
/* harmony export */ });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ 2340);

const ENDPOINTS = {
  USER_DATA: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl + '',
  //LIBRARY_DATA: environment.gatewayUrl+'books',
  LIBRARY_DATA: 'http://localhost:8080/api/v1/' + 'library',
  MOVIE_DATA: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl + 'movies',
  RECEIPE_DATA: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl + 'receipes'
};

/***/ })

}]);