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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);





class HttpClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    create(url, data) {
        return this.httpClient.post(url, JSON.stringify(data), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.errorHandler));
    }
    getById(url, params) {
        return this.httpClient.get(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.errorHandler));
    }
    getAll(url, params) {
        return this.httpClient.get(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.errorHandler));
    }
    update(url, params, data) {
        return this.httpClient.put(url, JSON.stringify(data), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.errorHandler));
    }
    delete(url, params) {
        return this.httpClient.delete(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMessage);
    }
}
HttpClientService.ɵfac = function HttpClientService_Factory(t) { return new (t || HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
HttpClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpClientService, factory: HttpClientService.ɵfac, providedIn: 'root' });


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
    LIBRARY_DATA: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl + 'books',
    MOVIE_DATA: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl + 'movies',
    RECEIPE_DATA: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl + 'receipes'
};


/***/ })

}]);