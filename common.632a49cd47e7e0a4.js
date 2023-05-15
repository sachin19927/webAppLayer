"use strict";
(self["webpackChunkwebAppLayer"] = self["webpackChunkwebAppLayer"] || []).push([["common"],{

/***/ 5772:
/*!************************************************!*\
  !*** ./src/app/service/http-client.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientService": () => (/* binding */ HttpClientService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _src_app_service_api_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/app/service/api-logger.service */ 1309);






class HttpClientService {
  constructor(httpClient, apiLogger) {
    this.httpClient = httpClient;
    this.apiLogger = apiLogger;
    this.httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  create(url, data) {
    return this.httpClient.post(url, JSON.stringify(data), {
      headers: this.httpOptions,
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
  }
  getById(url, params) {
    return this.httpClient.get(url + '/' + params, {
      headers: this.httpOptions
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
  }
  getAll(url, params) {
    return this.httpClient.get(url, {
      headers: this.httpOptions
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
  }
  update(url, params, data) {
    return this.httpClient.put(url, JSON.stringify(data), {
      headers: this.httpOptions
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
  }
  delete(url, params) {
    return this.httpClient.delete(url + '/' + params, {
      headers: this.httpOptions,
      observe: 'events',
      responseType: 'json'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpEventType.Sent) {
        console.log("tap log sent:" + event);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
HttpClientService.ɵfac = function HttpClientService_Factory(t) {
  return new (t || HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_src_app_service_api_logger_service__WEBPACK_IMPORTED_MODULE_0__.ApiLoggerService));
};
HttpClientService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: HttpClientService,
  factory: HttpClientService.ɵfac,
  providedIn: 'root'
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _app_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/endpoints */ 8781);
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client.service */ 5772);




class LibraryServiceService extends _http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService {
  constructor() {
    super(...arguments);
    this.libaryDatafor = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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

/***/ 1309:
/*!*******************************************************!*\
  !*** ./src/app/src/app/service/api-logger.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiLoggerService": () => (/* binding */ ApiLoggerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class ApiLoggerService {
  apiSuccessLog(message) {
    console.log(message);
  }
  constructor() {}
}
ApiLoggerService.ɵfac = function ApiLoggerService_Factory(t) {
  return new (t || ApiLoggerService)();
};
ApiLoggerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ApiLoggerService,
  factory: ApiLoggerService.ɵfac,
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