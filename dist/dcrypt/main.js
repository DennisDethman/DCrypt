(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/api";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    //constructor() { }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    // getUser(): Observable<any> {
    //   return this.http.get('/userapi', httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError));
    // }
    ApiService.prototype.getUsers = function () {
        return this.http.get('/userapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getSentMsgs = function () {
        return this.http.get('/getmsgsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRecvdMsg = function (msg) {
        return this.http.get('/recvdmsgsapi/' + msg, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRecvdMsgs = function () {
        return this.http.get('/recvdmsgsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postSentMsg = function (data) {
        return this.http.post('/getmsgsapi', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postRecvdMsg = function (data) {
        return this.http.post('/recvdmsgsapi', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateRecvdMsg = function (id, data) {
        return this.http.put('/recvdmsgsapi/' + id, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getGameStat = function (id) {
        return this.http.get('/statsapi/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getGameStats = function () {
        return this.http.get('/statsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateGameStat = function (id, data) {
        return this.http.put('/statsapi/' + id, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBooks = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postBook = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBook = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*MAIN CONSOLE**************************************/\n.console{width:630px;height:600px;background:#8b7867;background: linear-gradient(#3c3f41, rgb(83, 83, 83));margin:100px auto 0 auto;border-radius:50px;border-bottom-right-radius:90px;border-top:2px solid #c3bfb4;border:3px solid #c3bfb4;position:relative;}\n.console-front{width:510px;height:635px;background:#8b7867;background: linear-gradient(#222222, #3c3f41);left:25px;position:absolute;top:-60px;padding-top:30px;border-radius:70px;border-top-right-radius:70px;border-bottom-right-radius:60px;border-bottom-left-radius:60px;position:relative;z-index:0;border-top:4px solid #c3bfb4;box-shadow:5px 5px 5px 0px #3f2d21;}\n.top{width:120px;height:50px;background:#111;position:absolute;top:-15px;left:165px;z-index:-4;}\n.top:after,.top:before{content:\"\";display:block;width:45px;height:30px;background:#c3bfb4;margin-top:5px;z-index:-1;position:relative;}\n.top:after{border-top-right-radius:30px;border-top-left-radius:10px;left:-1px;}\n.top:before{position:absolute;right:-1px;border-top-right-radius:10px;border-top-left-radius:30px;}\n.top-button{width:55px;height:13px;background:#000;position:absolute;right:5px;top:3px;border-top-right-radius:20px;border-top-left-radius:20px;border-top:1px solid #444;-webkit-transform:rotate(27deg);transform:rotate(27deg)}\n.top-button:after{content:\"\";display:block;width:30px;height:7px;background:linear-gradient(to right, rgba(0,0,0,0.0),rgba(255,255,255,0.8));margin-left:13px;margin-top:-7px;border-radius:2px;border:1px solid #333;}\n/*MAIN CONSOLE**************************************/\n/*SCREEN**************************************/\n.screen-border{background:#272b2a;width:470px;height:580px;margin:auto;border-radius:50px;padding-top:5%;border-top:10px solid #5a5f5b;border-bottom:10px solid #5a5f5b;border-left: 2px solid #5a5f5b;border-right: 2px solid #5a5f5b;position:relative;z-index:-5;}\n.screen{width:420px;height:520px;position:absolute;margin-left:26px;border-radius:20px;background:#000;border:5px solid rgba(170, 170, 170, 0.78);padding:5px 5px 5px 0;;overflow:hidden;}\n.screen-reflection{width:396px;height:496px;background:linear-gradient(150deg,#fff,rgba(0,0,0,30), rgba(255, 255, 255, 0.72));position:relative;z-index:10;opacity:0.14;margin:1px 1px 1px 7px;border-radius:10px;}\n/*SCREEN**************************************/\n/*SCAN ***************************************/\n.scan{width:410px;height:150px;background:linear-gradient(rgba(0,0,0,0),#7ff12a);position:absolute;-webkit-animation:scan;animation:scan;-webkit-animation-duration:8s;animation-duration:8s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;top:-185px;z-index:100;opacity:0.25;pointer-events: none;}\n/*SCAN ***************************************/\n.logo{color: red; z-index: 1000; margin-left: -475px; padding-top: 15px;}\n/*Music Buttons*******************************/\n/* .music1:before{color: red;\n  content:\"No Music\";}\n.music2:before{content:\"Track1\";}\n.music3:before{content:\"Track2\";}\n.music4:before{content:\"Track3\";}\n.music5:before{content:\"Track4\";} */\n/*Music Buttons*******************************/\n/*LINKS***************************************/\n.info1:before{content:\"Agent\";}\n.info2:before{content:\"Challenge\";}\n.info3:before{content:\"Messages\";}\n.info4:before{content:\"Leader Board\";}\n.info5:before{content:\"Logout\"}\n.info6:before{content:\"Sound\"}\n/*.line2:before{content:\"line2\";}*/\n.tab-names{position:absolute;left:-40px;top:10px;}\n.tab-names li{list-style-type:none;text-align:right;padding:3.5px 0 3.5px 0;}\n/*LINKS***************************************/\n/*NAV***************************************/\nnav{height:35px;width:100%;position:absolute;top:0;left:0;border-bottom:1px solid #8df776;padding-left:10%;border-top-right-radius:20px;z-index:95;border-top-left-radius:20px; margin-top: 10px}\nnav span{color:#8df776;line-height:31px;font-size:10px;letter-spacing:0.3px;margin-left:20px;margin-top:500px;font-weight:300;}\nnav p{margin:-10px 0 0 0;height:25px;}\n.game-text{color:#8df776; z-index: 100;}\n/*NAV***************************************/\n/*DESIGN***************************************/\n.left-speakers{width:45px;position:absolute;top:137px;left:20px}\n.left-speakers:before{width:60px;height:265px;content:\"\";display:block;background: linear-gradient(#806f5d,#726350);position:absolute;left:0px;top:-30px;border-bottom-left-radius:150px;border-top-left-radius:20px;border-top:2px solid #c3bfb4;border-bottom:2px solid #4f3f32;}\n.left-speaker{content:\"\";display:block;width:80%;height:5px;background:rgba(0,0,0,0.2);margin-bottom:10px;border-bottom:2px solid #978175;border-top-right-radius:2px;border-bottom-right-radius:3px;position:relative;z-index:3;}\n.speakers{width:40px;position:absolute;top:160px;right:0;z-index:99;}\n.speaker{width:40px;height:5px;background:rgba(0,0,0,0.2);margin-bottom:8px;border-bottom:2px solid #978175;border-top-left-radius:2px;border-bottom-left-radius:3px;}\n.speaker:after{width:23px;height:5px;background:rgba(0,0,0,0.2);content:\"\";display:block;border-bottom:2px solid #978175;margin-left:-40px;border-radius:3px;}\n.wheel{width:45px;height:110px;background:#000;position:absolute;top:-2px;right:-10px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-top:2px solid #aaaaa8;border-left:2px solid #392c24;}\n.wheel-shadow{width:48px;height:8px;background:#333;border-radius:100px;margin-left:3px;margin-top:11px;background: linear-gradient(#000,#222);border: 1px solid rgba(157, 170, 163, 0.61)\n}\n.wrapper{margin:auto;}\n.bottom-switch{}\n.power{width:32px;height:31px;background:#000;position:absolute;bottom:23px;right:65px;border-radius:150px;z-index:99;}\n.power:after{content:\"\";display:block;width:50px;height:15px;background:radial-gradient(white,yellow,orange,red);border-radius:150px;margin-left:23px;margin-top:-35px;-webkit-animation: flicker;animation: flicker; -webkit-animation-duration: 3.2s; animation-duration: 3.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}\n.bottom-button{background:#000;position:absolute;right:30px;bottom:60px;width:37px;height:25px;border-top-left-radius:60px;border-top-right-radius:60px;}\n.bottom-button:after{content:\"\";display:block;width:100%;height:20px;background:#000;position:relative;margin-top:5px;z-index:0;width:37px;height:35px;border-radius:150px;border-top:1px solid #444;}\n.bottom-button:before{content:\"\";display:block;width:15px;height:15px;border-radius:150px;top:17px;left:11px;border-bottom:1px solid #555;position:absolute;z-index:3;}\n.top-right{width:140px;height:100px;background: linear-gradient(#3c3f41, #2b2b2b);position:absolute;top:-37px;right:5px;border-top-left-radius:30px;border-top-right-radius:40px;border-top:3px solid #c3bfb4;z-index:-1;}\n/*RADIO BUTTONS********************************/\n.radios{margin-top: 60px; margin-left: 0px;}\n/*#link:before{content: \"link\";margin-left: -20px;margin-top: -100px;}*/\ninput {\n  -webkit-appearance: none; /* remove default */display: block;margin: 20px;width: 14px;height: 24px;border-radius: 12px;cursor: pointer;vertical-align: middle;\n  box-shadow: hsla(0,0%,100%,.15) 0 1px 1px, inset hsla(0,0%,0%,.5) 0 0 0 1px;\n  background-color: hsla(0,0%,0%,.2);\n  background-image: -webkit-radial-gradient( hsla(200,100%,90%,1) 0%, hsla(200,100%,70%,1) 15%, hsla(200,100%,60%,.3) 28%, hsla(200,100%,30%,0) 70% );\n  background-repeat: no-repeat;\n  -webkit-transition: background-position .15s cubic-bezier(.8, 0, 1, 1),\n  -webkit-transform .25s cubic-bezier(.8, 0, 1, 1);\n  outline: none;\n}\ninput:checked {\n  -webkit-transition: background-position .2s .15s cubic-bezier(0, 0, .2, 1),\n  -webkit-transform .25s cubic-bezier(0, 0, .2, 1);\n}\ninput:active {\n  -webkit-transform: scale(1.5);\n  -webkit-transition: -webkit-transform .1s cubic-bezier(0, 0, .2, 1);\n}\n/* The up/down direction logic */\ninput,\ninput:active {\n  background-position: 0 24px;\n}\ninput:checked {\n  background-position: 0 0;\n}\ninput:checked ~ input,\ninput:checked ~ input:active {\n  background-position: 0 -24px;\n}\n/*RADIO BUTTONS********************************/\n/*SCREWS***************************************/\n#stl{margin-left: -583px; margin-top: -450px;position: absolute;}\n#str{margin-left: -30px; margin-top: -470px;position: absolute;}\n#sbr{margin-left: -30px; margin-top: 75px;position: absolute;}\n#sbl{margin-left: -570px; margin-top: 75px;position: absolute;}\n/*SCREWS***************************************/\n/*DESIGN***************************************/\n/*POWER*/\n@-webkit-keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n@keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n/*BACK GROUND SCANNER*/\n@-webkit-keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n@keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n/*PLAYGROUND*************************/\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFEQUFxRDtBQUNyRCxTQUFTLFlBQVksYUFBYSxtQkFBbUIsc0RBQXNELHlCQUF5QixtQkFBbUIsZ0NBQWdDLDZCQUE2Qix5QkFBeUIsa0JBQWtCLENBQUM7QUFDaFEsZUFBZSxZQUFZLGFBQWEsbUJBQW1CLDhDQUE4QyxVQUFVLGtCQUFrQixVQUFVLGlCQUFpQixtQkFBbUIsNkJBQTZCLGdDQUFnQywrQkFBK0Isa0JBQWtCLFVBQVUsNkJBQTZCLG1DQUFtQyxDQUFDO0FBQzVXLEtBQUssWUFBWSxZQUFZLGdCQUFnQixrQkFBa0IsVUFBVSxXQUFXLFdBQVcsQ0FBQztBQUNoRyx1QkFBdUIsV0FBVyxjQUFjLFdBQVcsWUFBWSxtQkFBbUIsZUFBZSxXQUFXLGtCQUFrQixDQUFDO0FBQ3ZJLFdBQVcsNkJBQTZCLDRCQUE0QixVQUFVLENBQUM7QUFDL0UsWUFBWSxrQkFBa0IsV0FBVyw2QkFBNkIsNEJBQTRCLENBQUM7QUFDbkcsWUFBWSxXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQixVQUFVLFFBQVEsNkJBQTZCLDRCQUE0QiwwQkFBMEIsZ0NBQXVCLEFBQXZCLHVCQUF1QixDQUFDO0FBQ2xNLGtCQUFrQixXQUFXLGNBQWMsV0FBVyxXQUFXLDRFQUE0RSxpQkFBaUIsZ0JBQWdCLGtCQUFrQixzQkFBc0IsQ0FBQztBQUN2TixxREFBcUQ7QUFFckQsK0NBQStDO0FBQy9DLGVBQWUsbUJBQW1CLFlBQVksYUFBYSxZQUFZLG1CQUFtQixlQUFlLDhCQUE4QixpQ0FBaUMsK0JBQStCLGdDQUFnQyxrQkFBa0IsV0FBVyxDQUFDO0FBQ3JRLFFBQVEsWUFBWSxhQUFhLGtCQUFrQixpQkFBaUIsbUJBQW1CLGdCQUFnQiwyQ0FBMkMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUM7QUFDMUwsbUJBQW1CLFlBQVksYUFBYSxrRkFBa0Ysa0JBQWtCLFdBQVcsYUFBYSx1QkFBdUIsbUJBQW1CLENBQUM7QUFDbk4sK0NBQStDO0FBRS9DLCtDQUErQztBQUMvQyxNQUFNLFlBQVksYUFBYSxrREFBa0Qsa0JBQWtCLHVCQUFlLEFBQWYsZUFBZSw4QkFBc0IsQUFBdEIsc0JBQXNCLDRDQUFvQyxBQUFwQyxvQ0FBb0MsV0FBVyxZQUFZLGFBQWEscUJBQXFCLENBQUM7QUFDdE8sK0NBQStDO0FBQy9DLE1BQU0sV0FBVyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUN6RSwrQ0FBK0M7QUFDL0M7Ozs7O29DQUtvQztBQUNwQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLGNBQWMsZ0JBQWdCLENBQUM7QUFDL0IsY0FBYyxvQkFBb0IsQ0FBQztBQUNuQyxjQUFjLG1CQUFtQixDQUFDO0FBQ2xDLGNBQWMsdUJBQXVCLENBQUM7QUFDdEMsY0FBYyxnQkFBZ0IsQ0FBQztBQUMvQixjQUFjLGVBQWUsQ0FBQztBQUM5QixtQ0FBbUM7QUFDbkMsV0FBVyxrQkFBa0IsV0FBVyxTQUFTLENBQUM7QUFDbEQsY0FBYyxxQkFBcUIsaUJBQWlCLHdCQUF3QixDQUFDO0FBQzdFLCtDQUErQztBQUUvQyw2Q0FBNkM7QUFDN0MsSUFBSSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sT0FBTyxnQ0FBZ0MsaUJBQWlCLDZCQUE2QixXQUFXLDRCQUE0QixDQUFDLGdCQUFnQixDQUFDO0FBQ2pNLFNBQVMsY0FBYyxpQkFBaUIsZUFBZSxxQkFBcUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUMvSCxNQUFNLG1CQUFtQixZQUFZLENBQUM7QUFDdEMsV0FBVyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3hDLDZDQUE2QztBQUU3QyxnREFBZ0Q7QUFDaEQsZUFBZSxXQUFXLGtCQUFrQixVQUFVLFNBQVMsQ0FBQztBQUNoRSxzQkFBc0IsV0FBVyxhQUFhLFdBQVcsY0FBYyw2Q0FBNkMsa0JBQWtCLFNBQVMsVUFBVSxnQ0FBZ0MsNEJBQTRCLDZCQUE2QixnQ0FBZ0MsQ0FBQztBQUNuUixjQUFjLFdBQVcsY0FBYyxVQUFVLFdBQVcsMkJBQTJCLG1CQUFtQixnQ0FBZ0MsNEJBQTRCLCtCQUErQixrQkFBa0IsVUFBVSxDQUFDO0FBRWxPLFVBQVUsV0FBVyxrQkFBa0IsVUFBVSxRQUFRLFdBQVcsQ0FBQztBQUNyRSxTQUFTLFdBQVcsV0FBVywyQkFBMkIsa0JBQWtCLGdDQUFnQywyQkFBMkIsOEJBQThCLENBQUM7QUFDdEssZUFBZSxXQUFXLFdBQVcsMkJBQTJCLFdBQVcsY0FBYyxnQ0FBZ0Msa0JBQWtCLGtCQUFrQixDQUFDO0FBRTlKLE9BQU8sV0FBVyxhQUFhLGdCQUFnQixrQkFBa0IsU0FBUyxZQUFZLDZCQUE2QixnQ0FBZ0MsNkJBQTZCLDhCQUE4QixDQUFDO0FBQy9NLGNBQWMsV0FBVyxXQUFXLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGdCQUFnQix1Q0FBdUMsMkNBQTJDO0NBQ3pMO0FBRUQsU0FBUyxZQUFZLENBQUM7QUFFdEIsZ0JBQWdCO0FBRWhCLE9BQU8sV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsWUFBWSxXQUFXLG9CQUFvQixXQUFXLENBQUM7QUFDdkgsYUFBYSxXQUFXLGNBQWMsV0FBVyxZQUFZLG9EQUFvRCxvQkFBb0IsaUJBQWlCLGlCQUFpQiwyQkFBbUIsQUFBbkIsbUJBQW1CLENBQUMsaUNBQXlCLENBQXpCLHlCQUF5Qiw0Q0FBb0MsQUFBcEMsb0NBQW9DLENBQUM7QUFFelAsZUFBZSxnQkFBZ0Isa0JBQWtCLFdBQVcsWUFBWSxXQUFXLFlBQVksNEJBQTRCLDZCQUE2QixDQUFDO0FBQ3pKLHFCQUFxQixXQUFXLGNBQWMsV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsZUFBZSxVQUFVLFdBQVcsWUFBWSxvQkFBb0IsMEJBQTBCLENBQUM7QUFDdE0sc0JBQXNCLFdBQVcsY0FBYyxXQUFXLFlBQVksb0JBQW9CLFNBQVMsVUFBVSw2QkFBNkIsa0JBQWtCLFVBQVUsQ0FBQztBQUV2SyxXQUFXLFlBQVksYUFBYSw4Q0FBOEMsa0JBQWtCLFVBQVUsVUFBVSw0QkFBNEIsNkJBQTZCLDZCQUE2QixXQUFXLENBQUM7QUFFMU4sZ0RBQWdEO0FBQ2hELFFBQVEsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDNUMsd0VBQXdFO0FBRXhFO0VBQ0UseUJBQXlCLENBQUMsb0JBQW9CLGVBQWUsYUFBYSxZQUFZLGFBQWEsb0JBQW9CLGdCQUFnQix1QkFBdUI7RUFDOUosNEVBQTRFO0VBQzVFLG1DQUFtQztFQUNuQyxvSkFBb0o7RUFDcEosNkJBQTZCO0VBQzdCO21EQUNpRDtFQUNqRCxjQUFjO0NBQ2Y7QUFDRDtFQUNFO21EQUNpRDtDQUNsRDtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLG9FQUFvRTtDQUNyRTtBQUVELGlDQUFpQztBQUVqQzs7RUFFRSw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLHlCQUF5QjtDQUMxQjtBQUNEOztFQUVFLDZCQUE2QjtDQUM5QjtBQUNELGdEQUFnRDtBQUVoRCxnREFBZ0Q7QUFDaEQsS0FBSyxvQkFBb0IsQ0FBQyxtQkFBbUIsbUJBQW1CLENBQUM7QUFDakUsS0FBSyxtQkFBbUIsQ0FBQyxtQkFBbUIsbUJBQW1CLENBQUM7QUFDaEUsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsbUJBQW1CLENBQUM7QUFDOUQsS0FBSyxvQkFBb0IsQ0FBQyxpQkFBaUIsbUJBQW1CLENBQUM7QUFDL0QsZ0RBQWdEO0FBRWhELGdEQUFnRDtBQUVoRCxTQUFTO0FBQ1Q7RUFDRSxHQUFHLCtCQUErQixDQUFDO0VBQ25DLEdBQUcsZ0NBQWdDLENBQUM7RUFDcEMsSUFBSSxnQ0FBZ0MsQ0FBQztFQUNyQyxJQUFJLG1DQUFtQyxDQUFDO0VBQ3hDLElBQUksZ0NBQWdDLENBQUM7RUFDckMsS0FBSywrQkFBK0IsQ0FBQztDQUN0QztBQVBEO0VBQ0UsR0FBRywrQkFBK0IsQ0FBQztFQUNuQyxHQUFHLGdDQUFnQyxDQUFDO0VBQ3BDLElBQUksZ0NBQWdDLENBQUM7RUFDckMsSUFBSSxtQ0FBbUMsQ0FBQztFQUN4QyxJQUFJLGdDQUFnQyxDQUFDO0VBQ3JDLEtBQUssK0JBQStCLENBQUM7Q0FDdEM7QUFFRCx1QkFBdUI7QUFDdkI7QUFDQSxFQUFFLFVBQVUsQ0FBQztBQUNiLElBQUksVUFBVSxDQUFDO0FBQ2YsS0FBSyxXQUFXLENBQUM7Q0FDaEI7QUFKRDtBQUNBLEVBQUUsVUFBVSxDQUFDO0FBQ2IsSUFBSSxVQUFVLENBQUM7QUFDZixLQUFLLFdBQVcsQ0FBQztDQUNoQjtBQUlELHNDQUFzQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKk1BSU4gQ09OU09MRSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNvbnNvbGV7d2lkdGg6NjMwcHg7aGVpZ2h0OjYwMHB4O2JhY2tncm91bmQ6IzhiNzg2NztiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzNjM2Y0MSwgcmdiKDgzLCA4MywgODMpKTttYXJnaW46MTAwcHggYXV0byAwIGF1dG87Ym9yZGVyLXJhZGl1czo1MHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjkwcHg7Ym9yZGVyLXRvcDoycHggc29saWQgI2MzYmZiNDtib3JkZXI6M3B4IHNvbGlkICNjM2JmYjQ7cG9zaXRpb246cmVsYXRpdmU7fVxuLmNvbnNvbGUtZnJvbnR7d2lkdGg6NTEwcHg7aGVpZ2h0OjYzNXB4O2JhY2tncm91bmQ6IzhiNzg2NztiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIyMjIyMiwgIzNjM2Y0MSk7bGVmdDoyNXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotNjBweDtwYWRkaW5nLXRvcDozMHB4O2JvcmRlci1yYWRpdXM6NzBweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo3MHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjYwcHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MDtib3JkZXItdG9wOjRweCBzb2xpZCAjYzNiZmI0O2JveC1zaGFkb3c6NXB4IDVweCA1cHggMHB4ICMzZjJkMjE7fVxuLnRvcHt3aWR0aDoxMjBweDtoZWlnaHQ6NTBweDtiYWNrZ3JvdW5kOiMxMTE7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xNXB4O2xlZnQ6MTY1cHg7ei1pbmRleDotNDt9XG4udG9wOmFmdGVyLC50b3A6YmVmb3Jle2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjQ1cHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZDojYzNiZmI0O21hcmdpbi10b3A6NXB4O3otaW5kZXg6LTE7cG9zaXRpb246cmVsYXRpdmU7fVxuLnRvcDphZnRlcntib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozMHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtsZWZ0Oi0xcHg7fVxuLnRvcDpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTFweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MzBweDt9XG4udG9wLWJ1dHRvbnt3aWR0aDo1NXB4O2hlaWdodDoxM3B4O2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1cHg7dG9wOjNweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoyMHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjNDQ0O3RyYW5zZm9ybTpyb3RhdGUoMjdkZWcpfVxuLnRvcC1idXR0b246YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MzBweDtoZWlnaHQ6N3B4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDAuMCkscmdiYSgyNTUsMjU1LDI1NSwwLjgpKTttYXJnaW4tbGVmdDoxM3B4O21hcmdpbi10b3A6LTdweDtib3JkZXItcmFkaXVzOjJweDtib3JkZXI6MXB4IHNvbGlkICMzMzM7fVxuLypNQUlOIENPTlNPTEUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypTQ1JFRU4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5zY3JlZW4tYm9yZGVye2JhY2tncm91bmQ6IzI3MmIyYTt3aWR0aDo0NzBweDtoZWlnaHQ6NTgwcHg7bWFyZ2luOmF1dG87Ym9yZGVyLXJhZGl1czo1MHB4O3BhZGRpbmctdG9wOjUlO2JvcmRlci10b3A6MTBweCBzb2xpZCAjNWE1ZjViO2JvcmRlci1ib3R0b206MTBweCBzb2xpZCAjNWE1ZjViO2JvcmRlci1sZWZ0OiAycHggc29saWQgIzVhNWY1Yjtib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNWE1ZjViO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6LTU7fVxuLnNjcmVlbnt3aWR0aDo0MjBweDtoZWlnaHQ6NTIwcHg7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luLWxlZnQ6MjZweDtib3JkZXItcmFkaXVzOjIwcHg7YmFja2dyb3VuZDojMDAwO2JvcmRlcjo1cHggc29saWQgcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjc4KTtwYWRkaW5nOjVweCA1cHggNXB4IDA7O292ZXJmbG93OmhpZGRlbjt9XG4uc2NyZWVuLXJlZmxlY3Rpb257d2lkdGg6Mzk2cHg7aGVpZ2h0OjQ5NnB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE1MGRlZywjZmZmLHJnYmEoMCwwLDAsMzApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpKTtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjEwO29wYWNpdHk6MC4xNDttYXJnaW46MXB4IDFweCAxcHggN3B4O2JvcmRlci1yYWRpdXM6MTBweDt9XG4vKlNDUkVFTioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKlNDQU4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnNjYW57d2lkdGg6NDEwcHg7aGVpZ2h0OjE1MHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIzdmZjEyYSk7cG9zaXRpb246YWJzb2x1dGU7YW5pbWF0aW9uOnNjYW47YW5pbWF0aW9uLWR1cmF0aW9uOjhzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO3RvcDotMTg1cHg7ei1pbmRleDoxMDA7b3BhY2l0eTowLjI1O3BvaW50ZXItZXZlbnRzOiBub25lO31cbi8qU0NBTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubG9nb3tjb2xvcjogcmVkOyB6LWluZGV4OiAxMDAwOyBtYXJnaW4tbGVmdDogLTQ3NXB4OyBwYWRkaW5nLXRvcDogMTVweDt9XG4vKk11c2ljIEJ1dHRvbnMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogLm11c2ljMTpiZWZvcmV7Y29sb3I6IHJlZDtcbiAgY29udGVudDpcIk5vIE11c2ljXCI7fVxuLm11c2ljMjpiZWZvcmV7Y29udGVudDpcIlRyYWNrMVwiO31cbi5tdXNpYzM6YmVmb3Jle2NvbnRlbnQ6XCJUcmFjazJcIjt9XG4ubXVzaWM0OmJlZm9yZXtjb250ZW50OlwiVHJhY2szXCI7fVxuLm11c2ljNTpiZWZvcmV7Y29udGVudDpcIlRyYWNrNFwiO30gKi9cbi8qTXVzaWMgQnV0dG9ucyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKkxJTktTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmluZm8xOmJlZm9yZXtjb250ZW50OlwiQWdlbnRcIjt9XG4uaW5mbzI6YmVmb3Jle2NvbnRlbnQ6XCJDaGFsbGVuZ2VcIjt9XG4uaW5mbzM6YmVmb3Jle2NvbnRlbnQ6XCJNZXNzYWdlc1wiO31cbi5pbmZvNDpiZWZvcmV7Y29udGVudDpcIkxlYWRlciBCb2FyZFwiO31cbi5pbmZvNTpiZWZvcmV7Y29udGVudDpcIkxvZ291dFwifVxuLmluZm82OmJlZm9yZXtjb250ZW50OlwiU291bmRcIn1cbi8qLmxpbmUyOmJlZm9yZXtjb250ZW50OlwibGluZTJcIjt9Ki9cbi50YWItbmFtZXN7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNDBweDt0b3A6MTBweDt9XG4udGFiLW5hbWVzIGxpe2xpc3Qtc3R5bGUtdHlwZTpub25lO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZzozLjVweCAwIDMuNXB4IDA7fVxuLypMSU5LUyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypOQVYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5uYXZ7aGVpZ2h0OjM1cHg7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzhkZjc3NjtwYWRkaW5nLWxlZnQ6MTAlO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjIwcHg7ei1pbmRleDo5NTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjIwcHg7IG1hcmdpbi10b3A6IDEwcHh9XG5uYXYgc3Bhbntjb2xvcjojOGRmNzc2O2xpbmUtaGVpZ2h0OjMxcHg7Zm9udC1zaXplOjEwcHg7bGV0dGVyLXNwYWNpbmc6MC4zcHg7bWFyZ2luLWxlZnQ6MjBweDttYXJnaW4tdG9wOjUwMHB4O2ZvbnQtd2VpZ2h0OjMwMDt9XG5uYXYgcHttYXJnaW46LTEwcHggMCAwIDA7aGVpZ2h0OjI1cHg7fVxuLmdhbWUtdGV4dHtjb2xvcjojOGRmNzc2OyB6LWluZGV4OiAxMDA7fVxuLypOQVYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qREVTSUdOKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmxlZnQtc3BlYWtlcnN7d2lkdGg6NDVweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTM3cHg7bGVmdDoyMHB4fVxuLmxlZnQtc3BlYWtlcnM6YmVmb3Jle3dpZHRoOjYwcHg7aGVpZ2h0OjI2NXB4O2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODA2ZjVkLCM3MjYzNTApO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MHB4O3RvcDotMzBweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1MHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweDtib3JkZXItdG9wOjJweCBzb2xpZCAjYzNiZmI0O2JvcmRlci1ib3R0b206MnB4IHNvbGlkICM0ZjNmMzI7fVxuLmxlZnQtc3BlYWtlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDo4MCU7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTttYXJnaW4tYm90dG9tOjEwcHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzk3ODE3NTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoycHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6M3B4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mzt9XG5cbi5zcGVha2Vyc3t3aWR0aDo0MHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNjBweDtyaWdodDowO3otaW5kZXg6OTk7fVxuLnNwZWFrZXJ7d2lkdGg6NDBweDtoZWlnaHQ6NXB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO21hcmdpbi1ib3R0b206OHB4O2JvcmRlci1ib3R0b206MnB4IHNvbGlkICM5NzgxNzU7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoycHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHg7fVxuLnNwZWFrZXI6YWZ0ZXJ7d2lkdGg6MjNweDtoZWlnaHQ6NXB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICM5NzgxNzU7bWFyZ2luLWxlZnQ6LTQwcHg7Ym9yZGVyLXJhZGl1czozcHg7fVxuXG4ud2hlZWx7d2lkdGg6NDVweDtoZWlnaHQ6MTEwcHg7YmFja2dyb3VuZDojMDAwO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMnB4O3JpZ2h0Oi0xMHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjIwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MjBweDtib3JkZXItdG9wOjJweCBzb2xpZCAjYWFhYWE4O2JvcmRlci1sZWZ0OjJweCBzb2xpZCAjMzkyYzI0O31cbi53aGVlbC1zaGFkb3d7d2lkdGg6NDhweDtoZWlnaHQ6OHB4O2JhY2tncm91bmQ6IzMzMztib3JkZXItcmFkaXVzOjEwMHB4O21hcmdpbi1sZWZ0OjNweDttYXJnaW4tdG9wOjExcHg7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAsIzIyMik7Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxNTcsIDE3MCwgMTYzLCAwLjYxKVxufVxuXG4ud3JhcHBlcnttYXJnaW46YXV0bzt9XG5cbi5ib3R0b20tc3dpdGNoe31cblxuLnBvd2Vye3dpZHRoOjMycHg7aGVpZ2h0OjMxcHg7YmFja2dyb3VuZDojMDAwO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToyM3B4O3JpZ2h0OjY1cHg7Ym9yZGVyLXJhZGl1czoxNTBweDt6LWluZGV4Ojk5O31cbi5wb3dlcjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDo1MHB4O2hlaWdodDoxNXB4O2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KHdoaXRlLHllbGxvdyxvcmFuZ2UscmVkKTtib3JkZXItcmFkaXVzOjE1MHB4O21hcmdpbi1sZWZ0OjIzcHg7bWFyZ2luLXRvcDotMzVweDthbmltYXRpb246IGZsaWNrZXI7IGFuaW1hdGlvbi1kdXJhdGlvbjogMy4yczthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTt9XG5cbi5ib3R0b20tYnV0dG9ue2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozMHB4O2JvdHRvbTo2MHB4O3dpZHRoOjM3cHg7aGVpZ2h0OjI1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo2MHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjYwcHg7fVxuLmJvdHRvbS1idXR0b246YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MjBweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDo1cHg7ei1pbmRleDowO3dpZHRoOjM3cHg7aGVpZ2h0OjM1cHg7Ym9yZGVyLXJhZGl1czoxNTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjNDQ0O31cbi5ib3R0b20tYnV0dG9uOmJlZm9yZXtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2JvcmRlci1yYWRpdXM6MTUwcHg7dG9wOjE3cHg7bGVmdDoxMXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM1NTU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDozO31cblxuLnRvcC1yaWdodHt3aWR0aDoxNDBweDtoZWlnaHQ6MTAwcHg7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzYzNmNDEsICMyYjJiMmIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMzdweDtyaWdodDo1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjQwcHg7Ym9yZGVyLXRvcDozcHggc29saWQgI2MzYmZiNDt6LWluZGV4Oi0xO31cblxuLypSQURJTyBCVVRUT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ucmFkaW9ze21hcmdpbi10b3A6IDYwcHg7IG1hcmdpbi1sZWZ0OiAwcHg7fVxuLyojbGluazpiZWZvcmV7Y29udGVudDogXCJsaW5rXCI7bWFyZ2luLWxlZnQ6IC0yMHB4O21hcmdpbi10b3A6IC0xMDBweDt9Ki9cblxuaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIHJlbW92ZSBkZWZhdWx0ICovZGlzcGxheTogYmxvY2s7bWFyZ2luOiAyMHB4O3dpZHRoOiAxNHB4O2hlaWdodDogMjRweDtib3JkZXItcmFkaXVzOiAxMnB4O2N1cnNvcjogcG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3gtc2hhZG93OiBoc2xhKDAsMCUsMTAwJSwuMTUpIDAgMXB4IDFweCwgaW5zZXQgaHNsYSgwLDAlLDAlLC41KSAwIDAgMCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSwwJSwuMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCBoc2xhKDIwMCwxMDAlLDkwJSwxKSAwJSwgaHNsYSgyMDAsMTAwJSw3MCUsMSkgMTUlLCBoc2xhKDIwMCwxMDAlLDYwJSwuMykgMjglLCBoc2xhKDIwMCwxMDAlLDMwJSwwKSA3MCUgKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgY3ViaWMtYmV6aWVyKC44LCAwLCAxLCAxKSxcbiAgLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjgsIDAsIDEsIDEpO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQ6Y2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAuMnMgLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpLFxuICAtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7XG59XG5pbnB1dDphY3RpdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTtcbn1cblxuLyogVGhlIHVwL2Rvd24gZGlyZWN0aW9uIGxvZ2ljICovXG5cbmlucHV0LFxuaW5wdXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAyNHB4O1xufVxuaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cbmlucHV0OmNoZWNrZWQgfiBpbnB1dCxcbmlucHV0OmNoZWNrZWQgfiBpbnB1dDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yNHB4O1xufVxuLypSQURJTyBCVVRUT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qU0NSRVdTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuI3N0bHttYXJnaW4tbGVmdDogLTU4M3B4OyBtYXJnaW4tdG9wOiAtNDUwcHg7cG9zaXRpb246IGFic29sdXRlO31cbiNzdHJ7bWFyZ2luLWxlZnQ6IC0zMHB4OyBtYXJnaW4tdG9wOiAtNDcwcHg7cG9zaXRpb246IGFic29sdXRlO31cbiNzYnJ7bWFyZ2luLWxlZnQ6IC0zMHB4OyBtYXJnaW4tdG9wOiA3NXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XG4jc2Jse21hcmdpbi1sZWZ0OiAtNTcwcHg7IG1hcmdpbi10b3A6IDc1cHg7cG9zaXRpb246IGFic29sdXRlO31cbi8qU0NSRVdTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKkRFU0lHTioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypQT1dFUiovXG5Aa2V5ZnJhbWVzIGZsaWNrZXJ7XG4gIDAle2JveC1zaGFkb3c6MHB4IDBweCA1cHggMHB4IHJlZDt9XG4gIDUle2JveC1zaGFkb3c6MHB4IDBweCAzMHB4IDJweCByZWQ7fVxuICA2MCV7Ym94LXNoYWRvdzowcHggMHB4IDMwcHggMnB4IHJlZDt9XG4gIDgwJXtib3gtc2hhZG93OjBweCAwcHggMTBweCAwcHggb3JhbmdlO31cbiAgOTAle2JveC1zaGFkb3c6MHB4IDBweCAzMHB4IDJweCByZWQ7fVxuICAxMDAle2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJlZDt9XG59XG5cbi8qQkFDSyBHUk9VTkQgU0NBTk5FUiovXG5Aa2V5ZnJhbWVzIHNjYW57XG4we3RvcDotODBweDt9XG43MCV7dG9wOjUwMHB4O31cbjEwMCV7dG9wOjEwMDBweDt9XG59XG5cblxuXG4vKlBMQVlHUk9VTkQqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"console\">\n  <div class=\"console-front\">\n    <div class=\"screen-border\">\n      <div class=\"screen-border-rim\">\n        <div class=\"screen\">\n          <div class=\"screen-reflection\"></div>\n          <div class=\"scan\"></div>\n\n          <nav>\n            <span class=\"info1\" (click)=\"buttonSound()\" routerLink=\"/profile\"></span>\n            <span class=\"info2\" (click)=\"buttonSound()\" routerLink=\"/challenge\"></span>\n            <span class=\"info3\" (click)=\"buttonSound()\" routerLink=\"/messages\"></span>\n            <span class=\"info4\" (click)=\"buttonSound()\" routerLink=\"/leaderboard\"></span>\n            <span class=\"info5\" (click)=\"buttonSound()\" routerLink=\"/login\"></span>\n            <span class=\" info6\" (click)=\"bgMusic()\"></span> \n          \n            <p>\n              <span class=\"line2\"></span>\n            </p>\n            <div class=\"game-text\">\n              <router-outlet></router-outlet>\n            </div>\n          </nav>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"wheel\">\n    <!--<div class=\"tab-names\">-->\n      <!--<li class=\"info1\"></li>-->\n      <!--<li class=\"info2\"></li>-->\n      <!--<li class=\"info3\"></li>-->\n      <!--<li class=\"info4\"></li>-->\n      <!--<li class=\"info5\"></li>-->\n    <!--</div>-->\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-plug\"></div>\n  </div>\n\n  <div class=\"speakers\">\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n\n      <div class=\"radios\">\n        <input id=\"link\" type=\"radio\" class=\"music1\" checked (click)=\"noMusic()\"/>\n        <input type=\"radio\"  class=\"music2\" (click)=\"bgMusic()\"/>\n        <input type=\"radio\"  class=\"music3\" (click)=\"bgMusic2()\"/>\n        <input type=\"radio\"  class=\"music4\" (click)=\"bgMusic3()\" />\n        <input type=\"radio\"  class=\"music5\" (click)=\"bgMusic4()\"/>\n        <img src=\"./assets/img/screw.png\" id=\"stl\"><img src=\"./assets/img/screw.png\" id=\"str\"><img src=\"./assets/img/screw.png\" id=\"sbr\"><img src=\"./assets/img/screw.png\" id=\"sbl\">\n      </div>\n      <!-- \"start\": \"ng build && nodemon ./bin/www\", -->\n    <!-- <div class=\"logo\">LOGO</div> -->\n  </div>\n  \n  <div class=\"bottom-button\"></div>\n  <div class=\"top-right\">\n    <div class=\"power\"></div>\n  </div>\n</div>\n<app-navbar></app-navbar>\n<script src=\"/src/app/app.component.js\"></script>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'dcrypt';
        this.bgAudio = new Audio();
        this.bgAudio2 = new Audio();
        this.bgAudio3 = new Audio();
        this.bgAudio4 = new Audio();
    }
    AppComponent.prototype.buttonSound = function () {
        var buttonAudio = new Audio;
        buttonAudio.src = "././assets/audio/buttonSound.mp3";
        buttonAudio.load();
        buttonAudio.play();
    };
    AppComponent.prototype.bgMusic = function () {
        this.bgAudio2.pause();
        this.bgAudio3.pause();
        this.bgAudio4.pause();
        this.bgAudio.src = "././assets/audio/bgmusica.mp3";
        this.bgAudio.load();
        this.bgAudio.play();
        this.bgAudio.loop = true;
    };
    AppComponent.prototype.bgMusic2 = function () {
        this.bgAudio.pause();
        this.bgAudio3.pause();
        this.bgAudio4.pause();
        this.bgAudio2.src = "././assets/audio/bgmusica2sm.mp3";
        this.bgAudio2.load();
        this.bgAudio2.play();
        this.bgAudio2.loop = true;
    };
    AppComponent.prototype.bgMusic3 = function () {
        this.bgAudio2.pause();
        this.bgAudio.pause();
        this.bgAudio4.pause();
        this.bgAudio3.src = "././assets/audio/bgmusica3sm.mp3";
        this.bgAudio3.load();
        this.bgAudio3.play();
        this.bgAudio3.loop = true;
    };
    AppComponent.prototype.bgMusic4 = function () {
        this.bgAudio.pause();
        this.bgAudio3.pause();
        this.bgAudio2.pause();
        this.bgAudio4.src = "././assets/audio/bgmusica4sm.mp3";
        this.bgAudio4.load();
        this.bgAudio4.play();
        this.bgAudio4.loop = true;
    };
    AppComponent.prototype.noMusic = function () {
        this.bgAudio2.pause();
        this.bgAudio3.pause();
        this.bgAudio4.pause();
        this.bgAudio.pause();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./challenge/challenge.component */ "./src/app/challenge/challenge.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/book-create/book-create.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _solve_solve_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./solve/solve.component */ "./src/app/solve/solve.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"] },
    { path: 'challenge', component: _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeComponent"] },
    { path: 'leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LeaderboardComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'solve/:id', component: _solve_solve_component__WEBPACK_IMPORTED_MODULE_22__["SolveComponent"] }
    // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_13__["BookDetailComponent"],
                _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_14__["BookCreateComponent"],
                _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_15__["BookEditComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LeaderboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _solve_solve_component__WEBPACK_IMPORTED_MODULE_22__["SolveComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                //BrowserAnimationsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('dcrypt-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('dcrypt-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/" + type + "api/" + type, user);
        }
        else {
            base = this.http.get("/" + type + "api", { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('dcrypt-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/book-create/book-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-create/book-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .example-full-width:nth-last-child() {\n    margin-bottom: 10px;\n  }\n  \n  .button-row {\n    margin: 10px 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1jcmVhdGUvYm9vay1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtHQUNiOztFQUVEO0lBQ0UsWUFBWTtHQUNiOztFQUVEO0lBQ0Usb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stY3JlYXRlL2Jvb2stY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5idXR0b24tcm93IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/book-create/book-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-create/book-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/books']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"bookForm\" (ngSubmit)=\"onFormSubmit(bookForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"ISBN\" formControlName=\"isbn\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('isbn').valid && bookForm.get('isbn').touched\">Please enter ISBN</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('title').valid && bookForm.get('title').touched\">Please enter Book Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Author\" formControlName=\"author\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('author').valid && bookForm.get('author').touched\">Please enter Book Author</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('description').valid && bookForm.get('description').touched\">Please enter Book Description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Publisher\" formControlName=\"publisher\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('publisher').valid && bookForm.get('publisher').touched\">Please enter Publisher</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Published Year\" formControlName=\"published_year\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('published_year').valid && bookForm.get('published_year').touched\">Please enter Published Year</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!bookForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/book-create/book-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-create/book-create.component.ts ***!
  \******************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.isbn = '';
        this.title = '';
        this.description = '';
        this.author = '';
        this.publisher = '';
        this.published_year = '';
    }
    BookCreateComponent.prototype.ngOnInit = function () {
        this.bookForm = this.formBuilder.group({
            'isbn': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'publisher': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'published_year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BookCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postBook(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__(/*! ./book-create.component.css */ "./src/app/book-create/book-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book-detail/book-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 500px;\n  }\n  \n  .button-row {\n    margin: 10px 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGVBQWU7R0FDaEIiLCJmaWxlIjoic3JjL2FwcC9ib29rLWRldGFpbC9ib29rLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuICBcbiAgLmJ1dHRvbi1yb3cge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/books']\"><mat-icon>list</mat-icon></a>\n</div>\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title><h2>{{book.title}}</h2></mat-card-title>\n    <mat-card-subtitle>{{book.description}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <dl>\n      <dt>ISBN:</dt>\n      <dd>{{book.isbn}}</dd>\n      <dt>Author:</dt>\n      <dd>{{book.author}}</dd>\n      <dt>Publisher:</dt>\n      <dd>{{book.publisher}}</dd>\n      <dt>Publish Year:</dt>\n      <dd>{{book.published_year}}</dd>\n      <dt>Update Date:</dt>\n      <dd>{{book.updated_date | date}}</dd>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/book-edit', book._id]\"><mat-icon>edit</mat-icon></a>\n    <a mat-raised-button color=\"warn\" (click)=\"deleteBook(book._id)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.ts ***!
  \******************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetails(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetails = function (id) {
        var _this = this;
        this.api.getBook(id)
            .subscribe(function (data) {
            console.log(data);
            _this.book = data;
        });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.api.deleteBook(id)
            .subscribe(function (res) {
            _this.router.navigate(['/books']);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-edit/book-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .example-full-width:nth-last-child() {\n    margin-bottom: 10px;\n  }\n  \n  .button-row {\n    margin: 10px 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxlQUFlO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aDpudGgtbGFzdC1jaGlsZCgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuYnV0dG9uLXJvdyB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"bookDetails()\"><mat-icon>show</mat-icon></a>\n</div>\n<form [formGroup]=\"bookForm\" (ngSubmit)=\"onFormSubmit(bookForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"ISBN\" formControlName=\"isbn\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('isbn').valid && bookForm.get('isbn').touched\">Please enter ISBN</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('title').valid && bookForm.get('title').touched\">Please enter Book Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Author\" formControlName=\"author\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('author').valid && bookForm.get('author').touched\">Please enter Book Author</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('description').valid && bookForm.get('description').touched\">Please enter Book Description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Publisher\" formControlName=\"publisher\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('publisher').valid && bookForm.get('publisher').touched\">Please enter Publisher</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Published Year\" formControlName=\"published_year\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('published_year').valid && bookForm.get('published_year').touched\">Please enter Published Year</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!bookForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.isbn = '';
        this.title = '';
        this.description = '';
        this.author = '';
        this.publisher = '';
        this.published_year = '';
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.route.snapshot.params['id']);
        this.bookForm = this.formBuilder.group({
            'isbn': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'publisher': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'published_year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.api.getBook(id).subscribe(function (data) {
            _this.id = data._id;
            _this.bookForm.setValue({
                isbn: data.isbn,
                title: data.title,
                description: data.description,
                author: data.author,
                publisher: data.publisher,
                published_year: data.published_year
            });
        });
    };
    BookEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updateBook(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent.prototype.bookDetails = function () {
        this.router.navigate(['/book-details', this.id]);
    };
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/book-edit/book-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    max-height: 500px;\n    min-width: 300px;\n    overflow: auto;\n  }\n  \n  .isbn-col {\n    flex: 0 0 100px !important;\n    white-space: unset !important;\n  }\n  \n  .button-row {\n    margin: 10px 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLDJCQUEyQjtJQUMzQiw4QkFBOEI7R0FDL0I7O0VBRUQ7SUFDRSxlQUFlO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAuaXNibi1jb2wge1xuICAgIGZsZXg6IDAgMCAxMDBweCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYnV0dG9uLXJvdyB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/book-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"isbn\">\n      <th mat-header-cell *matHeaderCellDef> ISBN </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.isbn}} </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Title </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- Author Column -->\n    <ng-container matColumnDef=\"author\">\n      <th mat-header-cell *matHeaderCellDef> Author </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/book-details/', row._id]\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent, BookDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataSource", function() { return BookDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(api) {
        this.api = api;
        this.displayedColumns = ['isbn', 'title', 'author'];
        this.dataSource = new BookDataSource(this.api);
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getBooks()
            .subscribe(function (res) {
            console.log('book');
            console.log(res);
            _this.books = res;
        }, function (err) {
            console.log(err);
        });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], BookComponent);
    return BookComponent;
}());

var BookDataSource = /** @class */ (function (_super) {
    __extends(BookDataSource, _super);
    function BookDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    BookDataSource.prototype.connect = function () {
        return this.api.getBooks();
    };
    BookDataSource.prototype.disconnect = function () {
    };
    return BookDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/challenge/challenge.component.css":
/*!***************************************************!*\
  !*** ./src/app/challenge/challenge.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; margin-bottom: 15px; margin-left: -42px}\nh2 {font-size: 15px;}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 480px}\nselect option{color: lightgreen; font-size: 12px; background-color: rgba(0,0,0,0.8);}\n.btn{margin-left: 100px; margin-top: 10px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NoYWxsZW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7QUFDakYsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixNQUFNLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0FBQ3ZJLGNBQWMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0NBQWtDLENBQUM7QUFDckYsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMseUVBQXlFLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jaGFsbGVuZ2UvY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7Zm9udC1zaXplOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDE1cHg7IG1hcmdpbi1sZWZ0OiAtNDJweH1cbmgyIHtmb250LXNpemU6IDE1cHg7fVxuLm1lbnV7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogNDgwcHh9XG5zZWxlY3Qgb3B0aW9ue2NvbG9yOiBsaWdodGdyZWVuOyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTt9XG4uYnRue21hcmdpbi1sZWZ0OiAxMDBweDsgbWFyZ2luLXRvcDogMTBweDsgYm9yZGVyLWNvbG9yOiAjOWRhYWEzOyBjb2xvcjogIzdmZjEyYTsgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrLCAwIDAgMWVtIGxpZ2h0Z3JlZW4sIDAgMCAwLjJlbSBsaWdodGdyZWVuO30iXX0= */"

/***/ }),

/***/ "./src/app/challenge/challenge.component.html":
/*!****************************************************!*\
  !*** ./src/app/challenge/challenge.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Challenge</h1>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Choose an Opponent</h2>\n      <!-- <select class=\"menu\" id=\"opponent\">\n        <option value=\"Patrick\">Patrick</option>\n        <option value=\"David\">David</option>\n        <option value=\"Paul\">Paul</option>\n        <option value=\"Dennis\">Dennis</option>\n      </select> -->\n      <select class=\"menu\" id=\"opponent\" #t (change)=\"getIdVal(t.value)\">\n        <option [value]=\"null\">Select Alias</option>\n        <option *ngFor=\"let user of filteredUsersList\" [value]=[user._id]>{{user.alias}}</option>\n      </select>\n      <h2>Cypher</h2>\n        <select class=\"menu\" id=\"cypher\" (click)=\"doCrypt(true)\">\n          <option [value]=\"null\">Select Cypher</option>  \n          <option value=\"cCrypt\">Caesar Cypher</option>\n          <option value=\"cCrypt2\">Reverse Caesar</option>\n        </select>\n      <h2>Message</h2>\n\n\n      <input type=\"text\" class=\"menu\" id=\"message\" [(ngModel)]=\"newMessage\" (keyup)=\"doCrypt(true)\" maxlength=\"20\">\n      <!-- <p id=\"isEng\">Valid English</p>\n      <p id=\"nonEng\">Not Valid English</p> -->\n\n      <div>\n        <h2>Encryption Key</h2>\n        <!-- <input id=\"encryptionKey\"> -->\n        <select class=\"menu\" id=\"encryptionKey\" (click)=\"doCrypt(true)\">\n          <option value=\"0\">0</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n          <option value=\"11\">11</option>\n          <option value=\"12\">12</option>\n          <option value=\"13\">13</option>\n          <option value=\"14\">14</option>\n          <option value=\"15\">15</option>\n          <option value=\"16\">16</option>\n          <option value=\"17\">17</option>\n          <option value=\"18\">18</option>\n          <option value=\"19\">19</option>\n          <option value=\"20\">20</option>\n          <option value=\"21\">21</option>\n          <option value=\"22\">22</option>\n          <option value=\"23\">23</option>\n          <option value=\"24\">24</option>\n          <option value=\"25\">25</option>\n        </select>\n      </div>\n      \n      <div>\n        <h2>Encrypted Message</h2>\n        <p type=\"text\" id=\"encMessage\">{{encMessage}}</p>\n      </div>\n      <div>\n        <button class=\"btn btn-outline-success btn-sm\" id=\"clearButton\" (click)=\"createChallenge()\">BuildMessage</button>\n      </div>\n      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/challenge/challenge.component.ts":
/*!**************************************************!*\
  !*** ./src/app/challenge/challenge.component.ts ***!
  \**************************************************/
/*! exports provided: ChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeComponent", function() { return ChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChallengeComponent = /** @class */ (function () {
    function ChallengeComponent(auth, api, router) {
        this.auth = auth;
        this.api = api;
        this.router = router;
    }
    ChallengeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getUsers()
            .subscribe(function (res) {
            _this.users = res;
        });
    };
    Object.defineProperty(ChallengeComponent.prototype, "filteredUsersList", {
        get: function () {
            var usr = this.auth.getUserDetails();
            return this.users.filter(function (u) {
                return u._id !== usr._id;
            });
        },
        enumerable: true,
        configurable: true
    });
    ChallengeComponent.prototype.getIdVal = function (value) {
        this.sentTo_id = value;
        var userList = this.users;
        function getTheUser(id) {
            return userList.find(function (usr) { return usr._id === id; });
        }
        this.user = getTheUser(value);
        this.sentTo_Alias = this.user.alias;
    };
    ChallengeComponent.prototype.keySound = function () {
        var keyAudio = new Audio;
        keyAudio.src = "./././assets/audio/key.mp3";
        keyAudio.load();
        keyAudio.play();
    };
    ChallengeComponent.prototype.greenSound = function () {
        var greenAudio = new Audio;
        greenAudio.src = "./././assets/audio/function.mp3";
        greenAudio.load();
        greenAudio.play();
    };
    ChallengeComponent.prototype.doCrypt = function (isDecrypt) {
        this.keySound();
        // console.log(lngDetector.detect('This is a test.'));
        var chooseCypher = document.getElementById("cypher").value;
        if (chooseCypher === "cCrypt") {
            this.cCrypt(isDecrypt);
        }
        if (chooseCypher === "cCrypt2") {
            this.cCrypt2(isDecrypt);
        }
    };
    ChallengeComponent.prototype.cCrypt = function (isDecrypt) {
        var shiftText = document.getElementById("encryptionKey").value;
        if (!/^-?\d+$/.test(shiftText)) {
            alert("Shift is not an integer");
            return;
        }
        var shift = parseInt(shiftText, 10);
        if (shift < 0 || shift >= 26) {
            alert("Shift is out of range");
            return;
        }
        if (isDecrypt)
            shift = (26 + shift) % 26;
        var textElem = document.getElementById("message");
        var encMessage = document.getElementById("encMessage");
        encMessage.textContent = this.caesarShift(textElem.value, shift);
        console.log("text element: " + textElem.value + "--> Encrypted Element: " + encMessage.textContent);
    };
    ChallengeComponent.prototype.cCrypt2 = function (isDecrypt) {
        var shiftText = document.getElementById("encryptionKey").value;
        if (!/^-?\d+$/.test(shiftText)) {
            alert("Shift is not an integer");
            return;
        }
        var shift = parseInt(shiftText, 10);
        if (shift < 0 || shift >= 26) {
            alert("Shift is out of range");
            return;
        }
        if (isDecrypt)
            shift = (26 - shift) % 26;
        var textElem = document.getElementById("message");
        var encMessage = document.getElementById("encMessage");
        encMessage.textContent = this.caesarShift(textElem.value, shift);
        console.log("text element: " + textElem.value + "--> Encrypted Element: " + encMessage.textContent);
    };
    ChallengeComponent.prototype.caesarShift = function (text, shift) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            if (65 <= c && c <= 90)
                result += String.fromCharCode((c - 65 + shift) % 26 + 65); // Uppercase
            else if (97 <= c && c <= 122)
                result += String.fromCharCode((c - 97 + shift) % 26 + 97); // Lowercase
            else
                result += text.charAt(i); // Copy
        }
        return result;
    };
    // expoCipher(text, shift){
    //   var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;
    // }
    ChallengeComponent.prototype.createChallenge = function () {
        this.greenSound();
        var text = document.getElementById("message").value;
        var to = document.getElementById("opponent").value;
        var encText = document.getElementById("encMessage").textContent;
        var key = document.getElementById("encryptionKey").value;
        var usr = this.auth.getUserDetails();
        var sendChallenge = {
            Sender_id: usr._id,
            SentTo_id: this.sentTo_id,
            SentTo_Alias: this.sentTo_Alias,
            DecryptedMsg: text,
            EncryptedMsg: encText,
            EncryptionKey: key,
            AttemptsAllowed: 10,
            AttemptsRemaining: 10,
            Solved: false,
            MessageScore: 0
        };
        console.log(sendChallenge);
        this.postTheSentMessage(sendChallenge);
        var recvdChallenge = {
            Receiver_id: this.sentTo_id,
            ReceivedFrom_id: usr._id,
            ReceivedFrom_Alias: usr.alias,
            DecryptedMsg: text,
            EncryptedMsg: encText,
            EncryptionKey: key,
            AttemptsAllowed: 10,
            AttemptsRemaining: 10,
            Solved: false,
            MessageScore: 0
        };
        this.postTheRecvdMessage(recvdChallenge);
    };
    ChallengeComponent.prototype.postTheSentMessage = function (challenge) {
        var _this = this;
        this.api.postSentMsg(challenge).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    ChallengeComponent.prototype.postTheRecvdMessage = function (challenge) {
        var _this = this;
        this.api.postRecvdMsg(challenge).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    ChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challenge',
            template: __webpack_require__(/*! ./challenge.component.html */ "./src/app/challenge/challenge.component.html"),
            styles: [__webpack_require__(/*! ./challenge.component.css */ "./src/app/challenge/challenge.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChallengeComponent);
    return ChallengeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; }\n.container{margin-left: -20px; margin-top: 50px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRTtBQUMxQyxXQUFXLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7Zm9udC1zaXplOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi5jb250YWluZXJ7bWFyZ2luLWxlZnQ6IC0yMHB4OyBtYXJnaW4tdG9wOiA1MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <div class=\"title text-center\">\n    <h4>Welcome to dCrypt!</h4>\n  </div>\n  <hr>\n\n  <!-- <p>Please <a routerLink=\"/login\">sign in</a> or <a routerLink=\"/register\">register</a>?</p> -->\n\n  <div class=\"login-buttons text-center\">\n    <br>\n    <br>\n    <br>\n    <button class=\"btn btn-outline-success btn-sm\" id=\"clearButton\"  routerLink=\"/login\">Log-In</button>\n    <br>\n    <br>\n    <br>\n    <button class=\"btn btn-outline-success btn-sm\" id=\"clearButton\"  routerLink=\"/register\">Register</button>\n\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; margin-left: -40px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtmb250LXNpemU6IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWxlZnQ6IC00MHB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Leaderboard</h1>\n  <br>\n  <!-- ng-repeat loops through data to build list -->\n  <div>\n    <h5>Special Agent:</h5>\n    <ul>\n      <li>{{gameStats[0].alias}} : {{gameStats[0].Score}}</li>\n    </ul>\n  </div>\n  <br>\n  <div>\n    <h5>Top Agent Listing:</h5>\n    <ul>\n      <li *ngFor=\"let stat of gameStats\">\n        {{stat.alias}} : {{stat.Score}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(api) {
        this.api = api;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getGameStats()
            .subscribe(function (res) {
            _this.gameStats = res;
            console.log(res);
        });
    };
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; margin-bottom: 30px; margin-left: -40px}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 300px; height: 25px}\n.menu1{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 300px; margin-left: 5px; margin-right: 5px}\n.btn{margin-left: 115px; margin-top: 72px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.lead{font-size: 14px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0FBQ2pGLE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0FBQ3JKLE9BQU8sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0ssS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMseUVBQXlFLENBQUM7QUFDNUosTUFBTSxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge2ZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzMHB4OyBtYXJnaW4tbGVmdDogLTQwcHh9XG4ubWVudXtjb2xvcjogbGlnaHRncmVlbjsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7IGJvcmRlcjogIzlkYWFhMyAxcHggc29saWQ7IGJvcmRlci1yYWRpdXM6IDBweDsgbWF4LXdpZHRoOiAzMDBweDsgaGVpZ2h0OiAyNXB4fVxuLm1lbnUxe2NvbG9yOiBsaWdodGdyZWVuOyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTsgYm9yZGVyOiAjOWRhYWEzIDFweCBzb2xpZDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXgtd2lkdGg6IDMwMHB4OyBtYXJnaW4tbGVmdDogNXB4OyBtYXJnaW4tcmlnaHQ6IDVweH1cbi5idG57bWFyZ2luLWxlZnQ6IDExNXB4OyBtYXJnaW4tdG9wOiA3MnB4OyBib3JkZXItY29sb3I6ICM5ZGFhYTM7IGNvbG9yOiAjN2ZmMTJhOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gbGlnaHRncmVlbiwgMCAwIDAuMmVtIGxpZ2h0Z3JlZW47fVxuLmxlYWR7Zm9udC1zaXplOiAxNHB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Not a member? Please<a routerLink=\"/register\" class=\"menu1\"> register </a> instead.</p>\n\n  \n      <form (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control menu\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control menu\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-success btn-sm\" id=\"clearButton\">Sign in!</button>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {color: green; font-size: 12px; background-color:black; border-color: silver; margin-top: 20px; }\nh1 {font-size: 30px; text-align: center; margin-left: -41px}\nh2 {font-size: 20px}\nul{max-width: 300px; max-height:300px; overflow: auto}\n.btn{margin-left: 100px; margin-top: 0px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.d-flex{margin-left: -40px; max-width: 300px; max-height: 50px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRTtBQUNwRyxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO0FBQzVELElBQUksZUFBZSxDQUFDO0FBQ3BCLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO0FBQ3RELEtBQUssbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLHlFQUF5RSxDQUFDO0FBQzNKLFFBQVEsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge2NvbG9yOiBncmVlbjsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyBib3JkZXItY29sb3I6IHNpbHZlcjsgbWFyZ2luLXRvcDogMjBweDsgfVxuaDEge2ZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDogLTQxcHh9XG5oMiB7Zm9udC1zaXplOiAyMHB4fVxudWx7bWF4LXdpZHRoOiAzMDBweDsgbWF4LWhlaWdodDozMDBweDsgb3ZlcmZsb3c6IGF1dG99XG4uYnRue21hcmdpbi1sZWZ0OiAxMDBweDsgbWFyZ2luLXRvcDogMHB4OyBib3JkZXItY29sb3I6ICM5ZGFhYTM7IGNvbG9yOiAjN2ZmMTJhOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gbGlnaHRncmVlbiwgMCAwIDAuMmVtIGxpZ2h0Z3JlZW47fVxuLmQtZmxleHttYXJnaW4tbGVmdDogLTQwcHg7IG1heC13aWR0aDogMzAwcHg7IG1heC1oZWlnaHQ6IDUwcHg7fSJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Messages</h1>\n\n  <!-- ng-repeat loops through data to build list -->\n  <ul>\n    <li *ngFor=\"let message of messages; index as i\" class=\"list-group-item d-flex justify-content-between align-items-center\" >\n      <p>{{i + 1 }}: </p>\n      <p>From: {{message.ReceivedFrom_Alias}}</p>\n      <button class=\"btn btn-outline-success btn-sm\" id=\"clearButton\" [routerLink]=\"['/solve', message._id]\">Solve</button><br>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent, MsgDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgDataSource", function() { return MsgDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(api) {
        this.api = api;
        this.dataSource = new MsgDataSource(this.api);
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.connect()
            .subscribe(function (res) {
            _this.messages = res;
            console.log(_this.messages);
        }, function (err) {
            console.log(err);
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());

var MsgDataSource = /** @class */ (function (_super) {
    __extends(MsgDataSource, _super);
    function MsgDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    MsgDataSource.prototype.connect = function () {
        return this.api.getRecvdMsgs();
    };
    MsgDataSource.prototype.disconnect = function () {
    };
    return MsgDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Test</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/messages\">Messages <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/challenge\">Challenges <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/leaderboard\">Leaderboard <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/profile\">{{ auth.getUserDetails()?.name }}<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" (click)=\"auth.logout()\" routerLink=\"/\"> Logout<span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    //constructor() { }
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; margin-left: -34px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge2ZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDogLTM0cHh9Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n     <div class=\"col-md-12\">\n\n\n      <h1>dCrypt Profile</h1>\n\n\n      <div class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label\">Full name</label>\n          <p class=\"form-control-static\">{{ auth.getUserDetails()?.name }}</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label\">Email</label>\n          <p class=\"form-control-static\">{{ auth.getUserDetails()?.email }}</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label\">Alias</label>\n          <p class=\"form-control-static\">{{ auth.getUserDetails()?.alias }}</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; margin-bottom: 30px}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 300px; height: 25px}\n.menu1{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 160px; height: 25px; margin-left: 0px; margin-right: 0px}\n.menu2{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 117px; height: 25px; margin-left: 0px; margin-right: 0px}\n.btn{margin-left: 118px; margin-top: 0px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.lead{font-size: 14px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO0FBQzdELE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0FBQ3JKLE9BQU8sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzNMLE9BQU8sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzNMLEtBQUssbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLHlFQUF5RSxDQUFDO0FBQzNKLE1BQU0sZUFBZSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtmb250LXNpemU6IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweH1cbi5tZW51e2NvbG9yOiBsaWdodGdyZWVuOyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTsgYm9yZGVyOiAjOWRhYWEzIDFweCBzb2xpZDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXgtd2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDI1cHh9XG4ubWVudTF7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogMTYwcHg7IGhlaWdodDogMjVweDsgbWFyZ2luLWxlZnQ6IDBweDsgbWFyZ2luLXJpZ2h0OiAwcHh9XG4ubWVudTJ7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogMTE3cHg7IGhlaWdodDogMjVweDsgbWFyZ2luLWxlZnQ6IDBweDsgbWFyZ2luLXJpZ2h0OiAwcHh9XG4uYnRue21hcmdpbi1sZWZ0OiAxMThweDsgbWFyZ2luLXRvcDogMHB4OyBib3JkZXItY29sb3I6ICM5ZGFhYTM7IGNvbG9yOiAjN2ZmMTJhOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gbGlnaHRncmVlbiwgMCAwIDAuMmVtIGxpZ2h0Z3JlZW47fVxuLmxlYWR7Zm9udC1zaXplOiAxNHB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please <a routerLink=\"/login\" class=\"menu1\"> &nbsp;Log In </a> &nbsp;instead.</p>\n      <form (submit)=\"register()\" class=\"row\">\n        <div class=\"form-group col-6\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control menu1\" name=\"name\" placeholder=\"Enter your Name\" [(ngModel)]=\"credentials.name\" required>\n        </div>\n        <div class=\"form-group col-6\">\n          <label for=\"alias\">Alias</label>\n          <input type=\"text\" class=\"form-control menu2\" name=\"alias\" placeholder=\"Enter your Alias\" [(ngModel)]=\"credentials.alias\" required>\n        </div>\n        <div class=\"form-group col-12\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control menu\" name=\"email\" placeholder=\"Enter Email\" [(ngModel)]=\"credentials.email\" required>\n        </div>\n        <div class=\"form-group col-12\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control menu\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-success btn-sm\" id=\"clearButton\">Register!</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: '',
            alias: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/solve/solve.component.css":
/*!*******************************************!*\
  !*** ./src/app/solve/solve.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 480px}\nselect option{color: lightgreen; font-size: 12px; background-color: rgba(0,0,0,0.8);}\n.btn{margin-left: 125px; margin-top: 10px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29sdmUvc29sdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0FBQ3ZJLGNBQWMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0NBQWtDLENBQUM7QUFDckYsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMseUVBQXlFLENBQUMiLCJmaWxlIjoic3JjL2FwcC9zb2x2ZS9zb2x2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogNDgwcHh9XG5zZWxlY3Qgb3B0aW9ue2NvbG9yOiBsaWdodGdyZWVuOyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTt9XG4uYnRue21hcmdpbi1sZWZ0OiAxMjVweDsgbWFyZ2luLXRvcDogMTBweDsgYm9yZGVyLWNvbG9yOiAjOWRhYWEzOyBjb2xvcjogIzdmZjEyYTsgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrLCAwIDAgMWVtIGxpZ2h0Z3JlZW4sIDAgMCAwLjJlbSBsaWdodGdyZWVuO30iXX0= */"

/***/ }),

/***/ "./src/app/solve/solve.component.html":
/*!********************************************!*\
  !*** ./src/app/solve/solve.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Decrypt the Message</h5>\n<ng-container *ngIf=\"!solved && !failed\">\n    <form>\n        <h6>Author: </h6>\n            <p>{{message.ReceivedFrom_Alias}}</p>\n        <h6>Encrypted Message:</h6>\n            <p id=\"encMessage\">{{message.EncryptedMsg}}</p>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <h6>Choose Cipher</h6>\n                        <select class=\"menu\" id=\"cypher\">\n                            <option value=\"null\">Select Cypher</option>\n                            <option value=\"cCrypt\">Caesar Cipher</option>\n                            <option value=\"cCrypt2\">Reverse Caesar</option>\n                        </select>\n                </div>\n                <div class=\"col-sm-6\">\n                    <h6>Choose Key</h6>\n                        <select class=\"menu\" id=\"encryptionKey\">\n                            <option value=\"0\">0</option>\n                            <option value=\"1\">1</option>\n                            <option value=\"2\">2</option>\n                            <option value=\"3\">3</option>\n                            <option value=\"4\">4</option>\n                            <option value=\"5\">5</option>\n                            <option value=\"6\">6</option>\n                            <option value=\"7\">7</option>\n                            <option value=\"8\">8</option>\n                            <option value=\"9\">9</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"11\">11</option>\n                            <option value=\"12\">12</option>\n                            <option value=\"13\">13</option>\n                            <option value=\"14\">14</option>\n                            <option value=\"15\">15</option>\n                            <option value=\"16\">16</option>\n                            <option value=\"17\">17</option>\n                            <option value=\"18\">18</option>\n                            <option value=\"19\">19</option>\n                            <option value=\"20\">20</option>\n                            <option value=\"21\">21</option>\n                            <option value=\"22\">22</option>\n                            <option value=\"23\">23</option>\n                            <option value=\"24\">24</option>\n                            <option value=\"25\">25</option>\n                        </select>\n                    </div>\n                <div class=\"col-sm-6\">\n                    <h6>Attempts: {{message.AttemptsRemaining}}</h6>\n                </div>\n            </div>\n             <br/>\n             <ng-container *ngIf=\"!failed\">\n                <button class=\"btn btn-outline-success btn-sm\" id=\"runCrypt\" (click)=\"doCrypt(true)\">Decrypt</button>\n                <h6>Solution: </h6>\n                <p id=\"message\"></p>\n             </ng-container>\n             <ng-container *ngIf=\"failed\">\n                 <h6>This intel has been deprecated.</h6>\n                 <button class=\"btn btn-sm\" (click)=\"onBack()\">Back to Messages</button>\n             </ng-container>\n               \n            <ng-container *ngIf=\"incorrect\">\n                <h6>(Incorrect Decryption)</h6>\n            </ng-container>\n    \n    </form>\n\n</ng-container >\n\n<ng-container *ngIf=\"solved && !failed\">\n    <h4>Congratulations! You solved it!</h4>\n    <button class=\"btn btn-sm\" (click)=\"onBack()\">\n        Back to Messages\n    </button>\n</ng-container>\n<ng-container *ngIf=\"!solved && failed\">\n    <h4>You have failed!</h4>\n    <button class=\"btn btn-sm\" (click)=\"onBack()\">\n        Back to Messages\n    </button>\n</ng-container>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/solve/solve.component.ts":
/*!******************************************!*\
  !*** ./src/app/solve/solve.component.ts ***!
  \******************************************/
/*! exports provided: SolveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolveComponent", function() { return SolveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolveComponent = /** @class */ (function () {
    function SolveComponent(activeRoute, auth, router, api) {
        this.activeRoute = activeRoute;
        this.auth = auth;
        this.router = router;
        this.api = api;
        this.solved = false;
        this.failed = false;
        this.incorrect = null;
    }
    SolveComponent.prototype.greenSound = function () {
        var greenAudio = new Audio;
        greenAudio.src = "./././assets/audio/function.mp3";
        greenAudio.load();
        greenAudio.play();
    };
    SolveComponent.prototype.ngOnInit = function () {
        var _this = this;
        var usr = this.auth.getUserDetails();
        this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.api.getRecvdMsg(this.id)
            .subscribe(function (res) {
            _this.message = res;
            //console.log(this.message)
        });
        this.api.getGameStat(this.id)
            .subscribe(function (res) {
            console.log('gamestat');
            console.log(res);
            _this.gameStats = res;
            if (_this.gameStats)
                _this.userScore = res.Score;
            else
                //this.gameStats = new GameStats();
                _this.userScore = 0;
            _this.gameStats.alias = usr.alias;
        });
    };
    SolveComponent.prototype.onBack = function () {
        this.router.navigate(['messages']);
    };
    SolveComponent.prototype.keySound = function () {
        var keyAudio = new Audio;
        keyAudio.src = "./././assets/audio/key.mp3";
        keyAudio.load();
        keyAudio.play();
    };
    SolveComponent.prototype.doCrypt = function (isDecrypt) {
        this.keySound();
        var chooseCypher = document.getElementById("cypher").value;
        if (chooseCypher === "cCrypt") {
            this.cCrypt(isDecrypt);
        }
        if (chooseCypher === "cCrypt2") {
            this.cCrypt2(isDecrypt);
        }
        this.message.AttemptsRemaining--;
        if (this.message.AttemptsRemaining < 1) {
            this.failed = true;
        }
        if (this.solution !== this.message.DecryptedMsg) {
            this.incorrect = true;
            this.greenSound();
        }
        if (this.solution === this.message.DecryptedMsg) {
            this.incorrect = false;
            this.message.Solved = true;
            this.solved = true;
            this.msgScore = this.message.AttemptsRemaining * 10;
            this.message.MessageScore = this.msgScore;
            this.gameStats.Score = this.msgScore + this.userScore;
            console.log(this.gameStats);
            this.updateGameStat();
        }
        this.api.updateRecvdMsg(this.id, this.message)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    SolveComponent.prototype.updateGameStat = function () {
        this.api.updateGameStat(this.id, this.gameStats)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    SolveComponent.prototype.cCrypt = function (isDecrypt) {
        var shiftText = document.getElementById("encryptionKey").value;
        if (!/^-?\d+$/.test(shiftText)) {
            alert("Shift is not an integer");
            return;
        }
        var shift = parseInt(shiftText, 10);
        if (shift < 0 || shift >= 26) {
            alert("Shift is out of range");
            return;
        }
        if (isDecrypt)
            shift = (26 + shift) % 26;
        var textElem = document.getElementById("message");
        var encMessage = document.getElementById("encMessage");
        textElem.textContent = this.caesarShift(encMessage.textContent, shift);
        this.solution = this.caesarShift(encMessage.textContent, shift);
        //console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
    };
    SolveComponent.prototype.cCrypt2 = function (isDecrypt) {
        var shiftText = document.getElementById("encryptionKey").value;
        if (!/^-?\d+$/.test(shiftText)) {
            alert("Shift is not an integer");
            return;
        }
        var shift = parseInt(shiftText, 10);
        if (shift < 0 || shift >= 26) {
            alert("Shift is out of range");
            return;
        }
        if (isDecrypt)
            shift = (26 - shift) % 26;
        var textElem = document.getElementById("message");
        var encMessage = document.getElementById("encMessage");
        textElem.textContent = this.caesarShift(encMessage.textContent, shift);
        this.solution = this.caesarShift(encMessage.textContent, shift);
        //console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
    };
    SolveComponent.prototype.caesarShift = function (text, shift) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            if (65 <= c && c <= 90)
                result += String.fromCharCode((c - 65 + shift) % 26 + 65); // Uppercase
            else if (97 <= c && c <= 122)
                result += String.fromCharCode((c - 97 + shift) % 26 + 97); // Lowercase
            else
                result += text.charAt(i); // Copy
        }
        return result;
    };
    SolveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solve',
            template: __webpack_require__(/*! ./solve.component.html */ "./src/app/solve/solve.component.html"),
            styles: [__webpack_require__(/*! ./solve.component.css */ "./src/app/solve/solve.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SolveComponent);
    return SolveComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\miran\Desktop\project3\DCrypt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map