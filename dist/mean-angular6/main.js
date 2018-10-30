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
    ApiService.prototype.getUser = function () {
        return this.http.get('/userapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getMsgs = function () {
        return this.http.get('/getmsgsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRecvdMsgs = function () {
        return this.http.get('/recvdmsgsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getStats = function () {
        return this.http.get('/statsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
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

module.exports = "\n::-moz-selection{background:lightgreen;}\n::selection{background:lightgreen;}\n/*MAIN CONSOLE**************************************/\n.console{width:630px;height:600px;background:#8b7867;background: linear-gradient(#3c3f41, rgb(83, 83, 83));margin:100px auto 0 auto;border-radius:50px;border-bottom-right-radius:90px;border-top:2px solid #c3bfb4;border:3px solid #c3bfb4;position:relative;}\n.console-front{width:510px;height:635px;background:#8b7867;background: linear-gradient(#222222, #3c3f41);left:25px;position:absolute;top:-60px;padding-top:30px;border-radius:70px;border-top-right-radius:70px;border-bottom-right-radius:60px;border-bottom-left-radius:60px;position:relative;z-index:0;border-top:4px solid #c3bfb4;box-shadow:5px 5px 5px 0px #3f2d21;}\n/*.console-front:after{content:\"\";display:block;width:310px;height:55px;background: linear-gradient(#776754, #3c3f41);margin-top:0px;margin-left:87px;border-bottom-left-radius:13px;border-bottom-right-radius:13px;box-shadow:0px 2px 4px #2b2229;}*/\n.top{width:120px;height:50px;background:#111;position:absolute;top:-15px;left:165px;z-index:-4;}\n.top:after,.top:before{content:\"\";display:block;width:45px;height:30px;background:#c3bfb4;margin-top:5px;z-index:-1;position:relative;}\n.top:after{border-top-right-radius:30px;border-top-left-radius:10px;left:-1px;}\n.top:before{position:absolute;right:-1px;border-top-right-radius:10px;border-top-left-radius:30px;}\n.top-button{width:55px;height:13px;background:#000;position:absolute;right:5px;top:3px;border-top-right-radius:20px;border-top-left-radius:20px;border-top:1px solid #444;-webkit-transform:rotate(27deg);transform:rotate(27deg)}\n.top-button:after{content:\"\";display:block;width:30px;height:7px;background:linear-gradient(to right, rgba(0,0,0,0.0),rgba(255,255,255,0.8));margin-left:13px;margin-top:-7px;border-radius:2px;border:1px solid #333;}\n/*MAIN CONSOLE**************************************/\n/*SCREEN**************************************/\n/*.screen-border-rim{background: #b5d2d6;width:470px;height:540px;margin:auto;border-radius:50px;padding-top:5%;border-top:10px solid #5a5f5b;border-bottom:5px solid #3a3e41;position:relative;z-index:-4;}*/\n.screen-border{background:#272b2a;width:470px;height:580px;margin:auto;border-radius:50px;padding-top:5%;border-top:10px solid #5a5f5b;border-bottom:10px solid #5a5f5b;border-left: 2px solid #5a5f5b;border-right: 2px solid #5a5f5b;position:relative;z-index:-5;}\n.screen{width:420px;height:465px;position:absolute;margin-left:26px;border-radius:20px;background:#000;border:5px solid rgba(170, 170, 170, 0.78);padding:5px 5px 5px 0;;overflow:hidden;}\n.screen-reflection{width:396px;height:442px;background:linear-gradient(150deg,#fff,rgba(0,0,0,30), rgba(255, 255, 255, 0.72));position:relative;z-index:10;opacity:0.14;margin:1px 1px 1px 7px;border-radius:10px;}\n/*SCREEN**************************************/\n/*SCAN ***************************************/\n.scan{width:410px;height:150px;background:linear-gradient(rgba(0,0,0,0),#7ff12a);position:absolute;-webkit-animation:scan;animation:scan;-webkit-animation-duration:8s;animation-duration:8s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;top:-185px;z-index:100;opacity:0.25;pointer-events: none;}\n/*SCAN ***************************************/\n.logo{color: red; z-index: 1000; margin-left: -475px; padding-top: 15px;}\n/*LINKS***************************************/\n.info1:before{content:\"base\";}\n.info2:before{content:\"\";}\n.info3:before{content:\"challenges\";}\n.info4:before{content:\"\";}\n.info5:before{content:\"agent\"}\n/*.line2:before{content:\"line2\";}*/\n.tab-names{position:absolute;left:-40px;top:10px;}\n.tab-names li{list-style-type:none;text-align:right;padding:3.5px 0 3.5px 0;}\n/*LINKS***************************************/\n/*NAV***************************************/\nnav{height:35px;width:100%;position:absolute;top:0;left:0;border-bottom:1px solid #8df776;padding-left:10%;border-top-right-radius:20px;z-index:95;border-top-left-radius:20px; margin-top: 10px}\nnav span{color:#8df776;line-height:31px;font-size:13pt;letter-spacing:0.3px;margin-left:20px;margin-top:500px;font-weight:300;}\n/*nav .active{background:#000;border-right:1px solid #8df776;border-left:1px solid #8df776;border-bottom:1px solid #000;border-top-left-radius:5px;border-top-right-radius:5px;padding:3px 6px 3px 6px;}*/\nnav p{margin:-10px 0 0 0;height:25px;}\n/*nav .off{color:#172f18;position:relative;left:-5px;}*/\n.game-text{color:#8df776; z-index: 100;}\n/*NAV***************************************/\n/*DESIGN***************************************/\n.left-speakers{width:45px;position:absolute;top:137px;left:20px}\n.left-speakers:before{width:60px;height:265px;content:\"\";display:block;background: linear-gradient(#806f5d,#726350);position:absolute;left:0px;top:-30px;border-bottom-left-radius:150px;border-top-left-radius:20px;border-top:2px solid #c3bfb4;border-bottom:2px solid #4f3f32;}\n.left-speaker{content:\"\";display:block;width:80%;height:5px;background:rgba(0,0,0,0.2);margin-bottom:10px;border-bottom:2px solid #978175;border-top-right-radius:2px;border-bottom-right-radius:3px;position:relative;z-index:3;}\n.speakers{width:40px;position:absolute;top:160px;right:0;z-index:99;}\n.speaker{width:40px;height:5px;background:rgba(0,0,0,0.2);margin-bottom:8px;border-bottom:2px solid #978175;border-top-left-radius:2px;border-bottom-left-radius:3px;}\n.speaker:after{width:23px;height:5px;background:rgba(0,0,0,0.2);content:\"\";display:block;border-bottom:2px solid #978175;margin-left:-40px;border-radius:3px;}\n.wheel{width:45px;height:110px;background:#000;position:absolute;top:-2px;right:-10px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-top:2px solid #aaaaa8;border-left:2px solid #392c24;}\n.wheel-shadow{width:48px;height:8px;background:#333;border-radius:100px;margin-left:3px;margin-top:11px;background: linear-gradient(#000,#222);border: 1px solid rgba(157, 170, 163, 0.61)\n}\n/*.wheel-plug{width:5px;height:25px;background:#9daaa3;border-top-right-radius:100px;border-bottom-right-radius:100px;position:absolute;top:43px;right:-5px;}*/\n.wrapper{margin:auto;}\n.bottom-switch{}\n.power{width:32px;height:31px;background:#000;position:absolute;bottom:23px;right:65px;border-radius:150px;z-index:99;}\n.power:after{content:\"\";display:block;width:50px;height:15px;background:radial-gradient(white,yellow,orange,red);border-radius:150px;margin-left:23px;margin-top:-35px;-webkit-animation: flicker;animation: flicker; -webkit-animation-duration: 3.2s; animation-duration: 3.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}\n/*.power:before{content:\"Power\";display:block;position:absolute;right:-29px;top:5px;font-size:8px;transform:rotate(5deg);}*/\n.bottom-button{background:#000;position:absolute;right:30px;bottom:60px;width:37px;height:25px;border-top-left-radius:60px;border-top-right-radius:60px;}\n.bottom-button:after{content:\"\";display:block;width:100%;height:20px;background:#000;position:relative;margin-top:5px;z-index:0;width:37px;height:35px;border-radius:150px;border-top:1px solid #444;}\n.bottom-button:before{content:\"\";display:block;width:15px;height:15px;border-radius:150px;top:17px;left:11px;border-bottom:1px solid #555;position:absolute;z-index:3;}\n.top-right{width:140px;height:100px;background: linear-gradient(#3c3f41, #2b2b2b);position:absolute;top:-35px;right:5px;border-top-left-radius:30px;border-top-right-radius:40px;border-top:3px solid #c3bfb4;z-index:-1;}\n/*RADIO BUTTONS********************************/\n.radios{margin-top: 60px; margin-left: 0px;}\n/*#link:before{content: \"link\";margin-left: -20px;margin-top: -100px;}*/\ninput {\n  -webkit-appearance: none; /* remove default */display: block;margin: 20px;width: 14px;height: 24px;border-radius: 12px;cursor: pointer;vertical-align: middle;\n  box-shadow: hsla(0,0%,100%,.15) 0 1px 1px, inset hsla(0,0%,0%,.5) 0 0 0 1px;\n  background-color: hsla(0,0%,0%,.2);\n  background-image: -webkit-radial-gradient( hsla(200,100%,90%,1) 0%, hsla(200,100%,70%,1) 15%, hsla(200,100%,60%,.3) 28%, hsla(200,100%,30%,0) 70% );\n  background-repeat: no-repeat;\n  -webkit-transition: background-position .15s cubic-bezier(.8, 0, 1, 1),\n  -webkit-transform .25s cubic-bezier(.8, 0, 1, 1);\n  outline: none;\n}\ninput:checked {\n  -webkit-transition: background-position .2s .15s cubic-bezier(0, 0, .2, 1),\n  -webkit-transform .25s cubic-bezier(0, 0, .2, 1);\n}\ninput:active {\n  -webkit-transform: scale(1.5);\n  -webkit-transition: -webkit-transform .1s cubic-bezier(0, 0, .2, 1);\n}\n/* The up/down direction logic */\ninput,\ninput:active {\n  background-position: 0 24px;\n}\ninput:checked {\n  background-position: 0 0;\n}\ninput:checked ~ input,\ninput:checked ~ input:active {\n  background-position: 0 -24px;\n}\n/*RADIO BUTTONS********************************/\n/*SCREWS***************************************/\n#stl{margin-left: -583px; margin-top: -450px;position: absolute;}\n#str{margin-left: -30px; margin-top: -470px;position: absolute;}\n#sbr{margin-left: -30px; margin-top: 75px;position: absolute;}\n#sbl{margin-left: -570px; margin-top: 75px;position: absolute;}\n/*SCREWS***************************************/\n/*DESIGN***************************************/\n/*POWER*/\n@-webkit-keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n@keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n/*BACK GROUND SCANNER*/\n@-webkit-keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n@keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n/*PLAYGROUND*************************/\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlCQUFpQixzQkFBc0IsQ0FBQztBQUN4QyxZQUFZLHNCQUFzQixDQUFDO0FBR25DLHFEQUFxRDtBQUNyRCxTQUFTLFlBQVksYUFBYSxtQkFBbUIsc0RBQXNELHlCQUF5QixtQkFBbUIsZ0NBQWdDLDZCQUE2Qix5QkFBeUIsa0JBQWtCLENBQUM7QUFDaFEsZUFBZSxZQUFZLGFBQWEsbUJBQW1CLDhDQUE4QyxVQUFVLGtCQUFrQixVQUFVLGlCQUFpQixtQkFBbUIsNkJBQTZCLGdDQUFnQywrQkFBK0Isa0JBQWtCLFVBQVUsNkJBQTZCLG1DQUFtQyxDQUFDO0FBQzVXLHVQQUF1UDtBQUN2UCxLQUFLLFlBQVksWUFBWSxnQkFBZ0Isa0JBQWtCLFVBQVUsV0FBVyxXQUFXLENBQUM7QUFDaEcsdUJBQXVCLFdBQVcsY0FBYyxXQUFXLFlBQVksbUJBQW1CLGVBQWUsV0FBVyxrQkFBa0IsQ0FBQztBQUN2SSxXQUFXLDZCQUE2Qiw0QkFBNEIsVUFBVSxDQUFDO0FBQy9FLFlBQVksa0JBQWtCLFdBQVcsNkJBQTZCLDRCQUE0QixDQUFDO0FBQ25HLFlBQVksV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsVUFBVSxRQUFRLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLGdDQUF1QixBQUF2Qix1QkFBdUIsQ0FBQztBQUNsTSxrQkFBa0IsV0FBVyxjQUFjLFdBQVcsV0FBVyw0RUFBNEUsaUJBQWlCLGdCQUFnQixrQkFBa0Isc0JBQXNCLENBQUM7QUFDdk4scURBQXFEO0FBRXJELCtDQUErQztBQUMvQyw4TUFBOE07QUFDOU0sZUFBZSxtQkFBbUIsWUFBWSxhQUFhLFlBQVksbUJBQW1CLGVBQWUsOEJBQThCLGlDQUFpQywrQkFBK0IsZ0NBQWdDLGtCQUFrQixXQUFXLENBQUM7QUFDclEsUUFBUSxZQUFZLGFBQWEsa0JBQWtCLGlCQUFpQixtQkFBbUIsZ0JBQWdCLDJDQUEyQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxTCxtQkFBbUIsWUFBWSxhQUFhLGtGQUFrRixrQkFBa0IsV0FBVyxhQUFhLHVCQUF1QixtQkFBbUIsQ0FBQztBQUNuTiwrQ0FBK0M7QUFFL0MsK0NBQStDO0FBQy9DLE1BQU0sWUFBWSxhQUFhLGtEQUFrRCxrQkFBa0IsdUJBQWUsQUFBZixlQUFlLDhCQUFzQixBQUF0QixzQkFBc0IsNENBQW9DLEFBQXBDLG9DQUFvQyxXQUFXLFlBQVksYUFBYSxxQkFBcUIsQ0FBQztBQUN0TywrQ0FBK0M7QUFDL0MsTUFBTSxXQUFXLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0FBQ3pFLCtDQUErQztBQUMvQyxjQUFjLGVBQWUsQ0FBQztBQUM5QixjQUFjLFdBQVcsQ0FBQztBQUMxQixjQUFjLHFCQUFxQixDQUFDO0FBQ3BDLGNBQWMsV0FBVyxDQUFDO0FBQzFCLGNBQWMsZUFBZSxDQUFDO0FBQzlCLG1DQUFtQztBQUNuQyxXQUFXLGtCQUFrQixXQUFXLFNBQVMsQ0FBQztBQUNsRCxjQUFjLHFCQUFxQixpQkFBaUIsd0JBQXdCLENBQUM7QUFDN0UsK0NBQStDO0FBRS9DLDZDQUE2QztBQUM3QyxJQUFJLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxPQUFPLGdDQUFnQyxpQkFBaUIsNkJBQTZCLFdBQVcsNEJBQTRCLENBQUMsZ0JBQWdCLENBQUM7QUFDak0sU0FBUyxjQUFjLGlCQUFpQixlQUFlLHFCQUFxQixpQkFBaUIsaUJBQWlCLGdCQUFnQixDQUFDO0FBQy9ILDBNQUEwTTtBQUMxTSxNQUFNLG1CQUFtQixZQUFZLENBQUM7QUFDdEMsd0RBQXdEO0FBQ3hELFdBQVcsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUN4Qyw2Q0FBNkM7QUFFN0MsZ0RBQWdEO0FBQ2hELGVBQWUsV0FBVyxrQkFBa0IsVUFBVSxTQUFTLENBQUM7QUFDaEUsc0JBQXNCLFdBQVcsYUFBYSxXQUFXLGNBQWMsNkNBQTZDLGtCQUFrQixTQUFTLFVBQVUsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsZ0NBQWdDLENBQUM7QUFDblIsY0FBYyxXQUFXLGNBQWMsVUFBVSxXQUFXLDJCQUEyQixtQkFBbUIsZ0NBQWdDLDRCQUE0QiwrQkFBK0Isa0JBQWtCLFVBQVUsQ0FBQztBQUVsTyxVQUFVLFdBQVcsa0JBQWtCLFVBQVUsUUFBUSxXQUFXLENBQUM7QUFDckUsU0FBUyxXQUFXLFdBQVcsMkJBQTJCLGtCQUFrQixnQ0FBZ0MsMkJBQTJCLDhCQUE4QixDQUFDO0FBQ3RLLGVBQWUsV0FBVyxXQUFXLDJCQUEyQixXQUFXLGNBQWMsZ0NBQWdDLGtCQUFrQixrQkFBa0IsQ0FBQztBQUU5SixPQUFPLFdBQVcsYUFBYSxnQkFBZ0Isa0JBQWtCLFNBQVMsWUFBWSw2QkFBNkIsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsQ0FBQztBQUMvTSxjQUFjLFdBQVcsV0FBVyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixnQkFBZ0IsdUNBQXVDLDJDQUEyQztDQUN6TDtBQUNELCtKQUErSjtBQUUvSixTQUFTLFlBQVksQ0FBQztBQUV0QixnQkFBZ0I7QUFFaEIsT0FBTyxXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQixZQUFZLFdBQVcsb0JBQW9CLFdBQVcsQ0FBQztBQUN2SCxhQUFhLFdBQVcsY0FBYyxXQUFXLFlBQVksb0RBQW9ELG9CQUFvQixpQkFBaUIsaUJBQWlCLDJCQUFtQixBQUFuQixtQkFBbUIsQ0FBQyxpQ0FBeUIsQ0FBekIseUJBQXlCLDRDQUFvQyxBQUFwQyxvQ0FBb0MsQ0FBQztBQUN6UCw0SEFBNEg7QUFFNUgsZUFBZSxnQkFBZ0Isa0JBQWtCLFdBQVcsWUFBWSxXQUFXLFlBQVksNEJBQTRCLDZCQUE2QixDQUFDO0FBQ3pKLHFCQUFxQixXQUFXLGNBQWMsV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsZUFBZSxVQUFVLFdBQVcsWUFBWSxvQkFBb0IsMEJBQTBCLENBQUM7QUFDdE0sc0JBQXNCLFdBQVcsY0FBYyxXQUFXLFlBQVksb0JBQW9CLFNBQVMsVUFBVSw2QkFBNkIsa0JBQWtCLFVBQVUsQ0FBQztBQUV2SyxXQUFXLFlBQVksYUFBYSw4Q0FBOEMsa0JBQWtCLFVBQVUsVUFBVSw0QkFBNEIsNkJBQTZCLDZCQUE2QixXQUFXLENBQUM7QUFFMU4sZ0RBQWdEO0FBQ2hELFFBQVEsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDNUMsd0VBQXdFO0FBRXhFO0VBQ0UseUJBQXlCLENBQUMsb0JBQW9CLGVBQWUsYUFBYSxZQUFZLGFBQWEsb0JBQW9CLGdCQUFnQix1QkFBdUI7RUFDOUosNEVBQTRFO0VBQzVFLG1DQUFtQztFQUNuQyxvSkFBb0o7RUFDcEosNkJBQTZCO0VBQzdCO21EQUNpRDtFQUNqRCxjQUFjO0NBQ2Y7QUFDRDtFQUNFO21EQUNpRDtDQUNsRDtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLG9FQUFvRTtDQUNyRTtBQUVELGlDQUFpQztBQUVqQzs7RUFFRSw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLHlCQUF5QjtDQUMxQjtBQUNEOztFQUVFLDZCQUE2QjtDQUM5QjtBQUNELGdEQUFnRDtBQUVoRCxnREFBZ0Q7QUFDaEQsS0FBSyxvQkFBb0IsQ0FBQyxtQkFBbUIsbUJBQW1CLENBQUM7QUFDakUsS0FBSyxtQkFBbUIsQ0FBQyxtQkFBbUIsbUJBQW1CLENBQUM7QUFDaEUsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsbUJBQW1CLENBQUM7QUFDOUQsS0FBSyxvQkFBb0IsQ0FBQyxpQkFBaUIsbUJBQW1CLENBQUM7QUFDL0QsZ0RBQWdEO0FBRWhELGdEQUFnRDtBQUVoRCxTQUFTO0FBQ1Q7RUFDRSxHQUFHLCtCQUErQixDQUFDO0VBQ25DLEdBQUcsZ0NBQWdDLENBQUM7RUFDcEMsSUFBSSxnQ0FBZ0MsQ0FBQztFQUNyQyxJQUFJLG1DQUFtQyxDQUFDO0VBQ3hDLElBQUksZ0NBQWdDLENBQUM7RUFDckMsS0FBSywrQkFBK0IsQ0FBQztDQUN0QztBQVBEO0VBQ0UsR0FBRywrQkFBK0IsQ0FBQztFQUNuQyxHQUFHLGdDQUFnQyxDQUFDO0VBQ3BDLElBQUksZ0NBQWdDLENBQUM7RUFDckMsSUFBSSxtQ0FBbUMsQ0FBQztFQUN4QyxJQUFJLGdDQUFnQyxDQUFDO0VBQ3JDLEtBQUssK0JBQStCLENBQUM7Q0FDdEM7QUFFRCx1QkFBdUI7QUFDdkI7QUFDQSxFQUFFLFVBQVUsQ0FBQztBQUNiLElBQUksVUFBVSxDQUFDO0FBQ2YsS0FBSyxXQUFXLENBQUM7Q0FDaEI7QUFKRDtBQUNBLEVBQUUsVUFBVSxDQUFDO0FBQ2IsSUFBSSxVQUFVLENBQUM7QUFDZixLQUFLLFdBQVcsQ0FBQztDQUNoQjtBQUlELHNDQUFzQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Oi1tb3otc2VsZWN0aW9ue2JhY2tncm91bmQ6bGlnaHRncmVlbjt9XG46OnNlbGVjdGlvbntiYWNrZ3JvdW5kOmxpZ2h0Z3JlZW47fVxuXG5cbi8qTUFJTiBDT05TT0xFKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uY29uc29sZXt3aWR0aDo2MzBweDtoZWlnaHQ6NjAwcHg7YmFja2dyb3VuZDojOGI3ODY3O2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjM2MzZjQxLCByZ2IoODMsIDgzLCA4MykpO21hcmdpbjoxMDBweCBhdXRvIDAgYXV0bztib3JkZXItcmFkaXVzOjUwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6OTBweDtib3JkZXItdG9wOjJweCBzb2xpZCAjYzNiZmI0O2JvcmRlcjozcHggc29saWQgI2MzYmZiNDtwb3NpdGlvbjpyZWxhdGl2ZTt9XG4uY29uc29sZS1mcm9udHt3aWR0aDo1MTBweDtoZWlnaHQ6NjM1cHg7YmFja2dyb3VuZDojOGI3ODY3O2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjIyMjIyLCAjM2MzZjQxKTtsZWZ0OjI1cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOi02MHB4O3BhZGRpbmctdG9wOjMwcHg7Ym9yZGVyLXJhZGl1czo3MHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjcwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NjBweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjYwcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDowO2JvcmRlci10b3A6NHB4IHNvbGlkICNjM2JmYjQ7Ym94LXNoYWRvdzo1cHggNXB4IDVweCAwcHggIzNmMmQyMTt9XG4vKi5jb25zb2xlLWZyb250OmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjMxMHB4O2hlaWdodDo1NXB4O2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNzc2NzU0LCAjM2MzZjQxKTttYXJnaW4tdG9wOjBweDttYXJnaW4tbGVmdDo4N3B4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTNweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxM3B4O2JveC1zaGFkb3c6MHB4IDJweCA0cHggIzJiMjIyOTt9Ki9cbi50b3B7d2lkdGg6MTIwcHg7aGVpZ2h0OjUwcHg7YmFja2dyb3VuZDojMTExO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMTVweDtsZWZ0OjE2NXB4O3otaW5kZXg6LTQ7fVxuLnRvcDphZnRlciwudG9wOmJlZm9yZXtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDo0NXB4O2hlaWdodDozMHB4O2JhY2tncm91bmQ6I2MzYmZiNDttYXJnaW4tdG9wOjVweDt6LWluZGV4Oi0xO3Bvc2l0aW9uOnJlbGF0aXZlO31cbi50b3A6YWZ0ZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MzBweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7bGVmdDotMXB4O31cbi50b3A6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0xcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjMwcHg7fVxuLnRvcC1idXR0b257d2lkdGg6NTVweDtoZWlnaHQ6MTNweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXB4O3RvcDozcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjIwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgIzQ0NDt0cmFuc2Zvcm06cm90YXRlKDI3ZGVnKX1cbi50b3AtYnV0dG9uOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjMwcHg7aGVpZ2h0OjdweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwwLjApLHJnYmEoMjU1LDI1NSwyNTUsMC44KSk7bWFyZ2luLWxlZnQ6MTNweDttYXJnaW4tdG9wOi03cHg7Ym9yZGVyLXJhZGl1czoycHg7Ym9yZGVyOjFweCBzb2xpZCAjMzMzO31cbi8qTUFJTiBDT05TT0xFKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qU0NSRUVOKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKi5zY3JlZW4tYm9yZGVyLXJpbXtiYWNrZ3JvdW5kOiAjYjVkMmQ2O3dpZHRoOjQ3MHB4O2hlaWdodDo1NDBweDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjUwcHg7cGFkZGluZy10b3A6NSU7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICM1YTVmNWI7Ym9yZGVyLWJvdHRvbTo1cHggc29saWQgIzNhM2U0MTtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Oi00O30qL1xuLnNjcmVlbi1ib3JkZXJ7YmFja2dyb3VuZDojMjcyYjJhO3dpZHRoOjQ3MHB4O2hlaWdodDo1ODBweDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjUwcHg7cGFkZGluZy10b3A6NSU7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICM1YTVmNWI7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICM1YTVmNWI7Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWE1ZjViO2JvcmRlci1yaWdodDogMnB4IHNvbGlkICM1YTVmNWI7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDotNTt9XG4uc2NyZWVue3dpZHRoOjQyMHB4O2hlaWdodDo0NjVweDtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tbGVmdDoyNnB4O2JvcmRlci1yYWRpdXM6MjBweDtiYWNrZ3JvdW5kOiMwMDA7Ym9yZGVyOjVweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuNzgpO3BhZGRpbmc6NXB4IDVweCA1cHggMDs7b3ZlcmZsb3c6aGlkZGVuO31cbi5zY3JlZW4tcmVmbGVjdGlvbnt3aWR0aDozOTZweDtoZWlnaHQ6NDQycHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCNmZmYscmdiYSgwLDAsMCwzMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MikpO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTA7b3BhY2l0eTowLjE0O21hcmdpbjoxcHggMXB4IDFweCA3cHg7Ym9yZGVyLXJhZGl1czoxMHB4O31cbi8qU0NSRUVOKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qU0NBTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uc2Nhbnt3aWR0aDo0MTBweDtoZWlnaHQ6MTUwcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwjN2ZmMTJhKTtwb3NpdGlvbjphYnNvbHV0ZTthbmltYXRpb246c2NhbjthbmltYXRpb24tZHVyYXRpb246OHM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7dG9wOi0xODVweDt6LWluZGV4OjEwMDtvcGFjaXR5OjAuMjU7cG9pbnRlci1ldmVudHM6IG5vbmU7fVxuLypTQ0FOICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5sb2dve2NvbG9yOiByZWQ7IHotaW5kZXg6IDEwMDA7IG1hcmdpbi1sZWZ0OiAtNDc1cHg7IHBhZGRpbmctdG9wOiAxNXB4O31cbi8qTElOS1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uaW5mbzE6YmVmb3Jle2NvbnRlbnQ6XCJiYXNlXCI7fVxuLmluZm8yOmJlZm9yZXtjb250ZW50OlwiXCI7fVxuLmluZm8zOmJlZm9yZXtjb250ZW50OlwiY2hhbGxlbmdlc1wiO31cbi5pbmZvNDpiZWZvcmV7Y29udGVudDpcIlwiO31cbi5pbmZvNTpiZWZvcmV7Y29udGVudDpcImFnZW50XCJ9XG4vKi5saW5lMjpiZWZvcmV7Y29udGVudDpcImxpbmUyXCI7fSovXG4udGFiLW5hbWVze3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTQwcHg7dG9wOjEwcHg7fVxuLnRhYi1uYW1lcyBsaXtsaXN0LXN0eWxlLXR5cGU6bm9uZTt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmc6My41cHggMCAzLjVweCAwO31cbi8qTElOS1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qTkFWKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xubmF2e2hlaWdodDozNXB4O3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM4ZGY3NzY7cGFkZGluZy1sZWZ0OjEwJTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoyMHB4O3otaW5kZXg6OTU7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4OyBtYXJnaW4tdG9wOiAxMHB4fVxubmF2IHNwYW57Y29sb3I6IzhkZjc3NjtsaW5lLWhlaWdodDozMXB4O2ZvbnQtc2l6ZToxM3B0O2xldHRlci1zcGFjaW5nOjAuM3B4O21hcmdpbi1sZWZ0OjIwcHg7bWFyZ2luLXRvcDo1MDBweDtmb250LXdlaWdodDozMDA7fVxuLypuYXYgLmFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDA7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjOGRmNzc2O2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjOGRmNzc2O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O3BhZGRpbmc6M3B4IDZweCAzcHggNnB4O30qL1xubmF2IHB7bWFyZ2luOi0xMHB4IDAgMCAwO2hlaWdodDoyNXB4O31cbi8qbmF2IC5vZmZ7Y29sb3I6IzE3MmYxODtwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0Oi01cHg7fSovXG4uZ2FtZS10ZXh0e2NvbG9yOiM4ZGY3NzY7IHotaW5kZXg6IDEwMDt9XG4vKk5BVioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypERVNJR04qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubGVmdC1zcGVha2Vyc3t3aWR0aDo0NXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMzdweDtsZWZ0OjIwcHh9XG4ubGVmdC1zcGVha2VyczpiZWZvcmV7d2lkdGg6NjBweDtoZWlnaHQ6MjY1cHg7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4MDZmNWQsIzcyNjM1MCk7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowcHg7dG9wOi0zMHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTUwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MnB4IHNvbGlkICNjM2JmYjQ7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzRmM2YzMjt9XG4ubGVmdC1zcGVha2Vye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjgwJTtoZWlnaHQ6NXB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO21hcmdpbi1ib3R0b206MTBweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjOTc4MTc1O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjJweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDozO31cblxuLnNwZWFrZXJze3dpZHRoOjQwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE2MHB4O3JpZ2h0OjA7ei1pbmRleDo5OTt9XG4uc3BlYWtlcnt3aWR0aDo0MHB4O2hlaWdodDo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7bWFyZ2luLWJvdHRvbTo4cHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzk3ODE3NTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjJweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDt9XG4uc3BlYWtlcjphZnRlcnt3aWR0aDoyM3B4O2hlaWdodDo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzk3ODE3NTttYXJnaW4tbGVmdDotNDBweDtib3JkZXItcmFkaXVzOjNweDt9XG5cbi53aGVlbHt3aWR0aDo0NXB4O2hlaWdodDoxMTBweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0ycHg7cmlnaHQ6LTEwcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MnB4IHNvbGlkICNhYWFhYTg7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkICMzOTJjMjQ7fVxuLndoZWVsLXNoYWRvd3t3aWR0aDo0OHB4O2hlaWdodDo4cHg7YmFja2dyb3VuZDojMzMzO2JvcmRlci1yYWRpdXM6MTAwcHg7bWFyZ2luLWxlZnQ6M3B4O21hcmdpbi10b3A6MTFweDtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMCwjMjIyKTtib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NywgMTcwLCAxNjMsIDAuNjEpXG59XG4vKi53aGVlbC1wbHVne3dpZHRoOjVweDtoZWlnaHQ6MjVweDtiYWNrZ3JvdW5kOiM5ZGFhYTM7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTAwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTAwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjQzcHg7cmlnaHQ6LTVweDt9Ki9cblxuLndyYXBwZXJ7bWFyZ2luOmF1dG87fVxuXG4uYm90dG9tLXN3aXRjaHt9XG5cbi5wb3dlcnt3aWR0aDozMnB4O2hlaWdodDozMXB4O2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MjNweDtyaWdodDo2NXB4O2JvcmRlci1yYWRpdXM6MTUwcHg7ei1pbmRleDo5OTt9XG4ucG93ZXI6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6NTBweDtoZWlnaHQ6MTVweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCh3aGl0ZSx5ZWxsb3csb3JhbmdlLHJlZCk7Ym9yZGVyLXJhZGl1czoxNTBweDttYXJnaW4tbGVmdDoyM3B4O21hcmdpbi10b3A6LTM1cHg7YW5pbWF0aW9uOiBmbGlja2VyOyBhbmltYXRpb24tZHVyYXRpb246IDMuMnM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7fVxuLyoucG93ZXI6YmVmb3Jle2NvbnRlbnQ6XCJQb3dlclwiO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTI5cHg7dG9wOjVweDtmb250LXNpemU6OHB4O3RyYW5zZm9ybTpyb3RhdGUoNWRlZyk7fSovXG5cbi5ib3R0b20tYnV0dG9ue2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozMHB4O2JvdHRvbTo2MHB4O3dpZHRoOjM3cHg7aGVpZ2h0OjI1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo2MHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjYwcHg7fVxuLmJvdHRvbS1idXR0b246YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MjBweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDo1cHg7ei1pbmRleDowO3dpZHRoOjM3cHg7aGVpZ2h0OjM1cHg7Ym9yZGVyLXJhZGl1czoxNTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjNDQ0O31cbi5ib3R0b20tYnV0dG9uOmJlZm9yZXtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2JvcmRlci1yYWRpdXM6MTUwcHg7dG9wOjE3cHg7bGVmdDoxMXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM1NTU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDozO31cblxuLnRvcC1yaWdodHt3aWR0aDoxNDBweDtoZWlnaHQ6MTAwcHg7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzYzNmNDEsICMyYjJiMmIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMzVweDtyaWdodDo1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjQwcHg7Ym9yZGVyLXRvcDozcHggc29saWQgI2MzYmZiNDt6LWluZGV4Oi0xO31cblxuLypSQURJTyBCVVRUT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ucmFkaW9ze21hcmdpbi10b3A6IDYwcHg7IG1hcmdpbi1sZWZ0OiAwcHg7fVxuLyojbGluazpiZWZvcmV7Y29udGVudDogXCJsaW5rXCI7bWFyZ2luLWxlZnQ6IC0yMHB4O21hcmdpbi10b3A6IC0xMDBweDt9Ki9cblxuaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIHJlbW92ZSBkZWZhdWx0ICovZGlzcGxheTogYmxvY2s7bWFyZ2luOiAyMHB4O3dpZHRoOiAxNHB4O2hlaWdodDogMjRweDtib3JkZXItcmFkaXVzOiAxMnB4O2N1cnNvcjogcG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3gtc2hhZG93OiBoc2xhKDAsMCUsMTAwJSwuMTUpIDAgMXB4IDFweCwgaW5zZXQgaHNsYSgwLDAlLDAlLC41KSAwIDAgMCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSwwJSwuMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCBoc2xhKDIwMCwxMDAlLDkwJSwxKSAwJSwgaHNsYSgyMDAsMTAwJSw3MCUsMSkgMTUlLCBoc2xhKDIwMCwxMDAlLDYwJSwuMykgMjglLCBoc2xhKDIwMCwxMDAlLDMwJSwwKSA3MCUgKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgY3ViaWMtYmV6aWVyKC44LCAwLCAxLCAxKSxcbiAgLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjgsIDAsIDEsIDEpO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQ6Y2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAuMnMgLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpLFxuICAtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7XG59XG5pbnB1dDphY3RpdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTtcbn1cblxuLyogVGhlIHVwL2Rvd24gZGlyZWN0aW9uIGxvZ2ljICovXG5cbmlucHV0LFxuaW5wdXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAyNHB4O1xufVxuaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cbmlucHV0OmNoZWNrZWQgfiBpbnB1dCxcbmlucHV0OmNoZWNrZWQgfiBpbnB1dDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yNHB4O1xufVxuLypSQURJTyBCVVRUT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qU0NSRVdTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuI3N0bHttYXJnaW4tbGVmdDogLTU4M3B4OyBtYXJnaW4tdG9wOiAtNDUwcHg7cG9zaXRpb246IGFic29sdXRlO31cbiNzdHJ7bWFyZ2luLWxlZnQ6IC0zMHB4OyBtYXJnaW4tdG9wOiAtNDcwcHg7cG9zaXRpb246IGFic29sdXRlO31cbiNzYnJ7bWFyZ2luLWxlZnQ6IC0zMHB4OyBtYXJnaW4tdG9wOiA3NXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XG4jc2Jse21hcmdpbi1sZWZ0OiAtNTcwcHg7IG1hcmdpbi10b3A6IDc1cHg7cG9zaXRpb246IGFic29sdXRlO31cbi8qU0NSRVdTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKkRFU0lHTioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypQT1dFUiovXG5Aa2V5ZnJhbWVzIGZsaWNrZXJ7XG4gIDAle2JveC1zaGFkb3c6MHB4IDBweCA1cHggMHB4IHJlZDt9XG4gIDUle2JveC1zaGFkb3c6MHB4IDBweCAzMHB4IDJweCByZWQ7fVxuICA2MCV7Ym94LXNoYWRvdzowcHggMHB4IDMwcHggMnB4IHJlZDt9XG4gIDgwJXtib3gtc2hhZG93OjBweCAwcHggMTBweCAwcHggb3JhbmdlO31cbiAgOTAle2JveC1zaGFkb3c6MHB4IDBweCAzMHB4IDJweCByZWQ7fVxuICAxMDAle2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJlZDt9XG59XG5cbi8qQkFDSyBHUk9VTkQgU0NBTk5FUiovXG5Aa2V5ZnJhbWVzIHNjYW57XG4we3RvcDotODBweDt9XG43MCV7dG9wOjUwMHB4O31cbjEwMCV7dG9wOjEwMDBweDt9XG59XG5cblxuXG4vKlBMQVlHUk9VTkQqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"console\">\n  <div class=\"console-front\">\n    <div class=\"screen-border\">\n      <div class=\"screen-border-rim\">\n        <div class=\"screen\">\n          <div class=\"screen-reflection\"></div>\n          <div class=\"scan\"></div>\n\n          <nav>\n            <span class=\"active info1\"></span>\n            <span class=\"info2\"></span>\n            <span class=\"info3\"></span>\n            <span class=\"info4\"></span>\n            <span class=\"info5\"></span>\n            <p>\n              <span class=\"line2\"></span>\n            </p>\n            <div class=\"game-text\">\n              <router-outlet></router-outlet>\n            </div>\n          </nav>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"wheel\">\n    <!--<div class=\"tab-names\">-->\n      <!--<li class=\"info1\"></li>-->\n      <!--<li class=\"info2\"></li>-->\n      <!--<li class=\"info3\"></li>-->\n      <!--<li class=\"info4\"></li>-->\n      <!--<li class=\"info5\"></li>-->\n    <!--</div>-->\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-plug\"></div>\n  </div>\n\n  <div class=\"speakers\">\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n\n      <div class=\"radios\">\n        <input id=\"link\" type=\"radio\" name=\"name\" checked />\n        <input type=\"radio\" name=\"name\" />\n        <input type=\"radio\" name=\"name\" />\n        <input type=\"radio\" name=\"name\" />\n        <input type=\"radio\" name=\"name\" />\n        <img src=\"./assets/img/screw.png\" id=\"stl\"><img src=\"./assets/img/screw.png\" id=\"str\"><img src=\"./assets/img/screw.png\" id=\"sbr\"><img src=\"./assets/img/screw.png\" id=\"sbl\">\n      </div>\n\n    <div class=\"logo\">LOGO</div>\n  </div>\n  \n  <div class=\"bottom-button\"></div>\n  <div class=\"top-right\">\n    <div class=\"power\"></div>\n  </div>\n</div>\n<app-navbar></app-navbar>\n\n\n\n"

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
        this.title = 'mean-angular6';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] }
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
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]
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
            base = this.http.post("/api" + type, user);
        }
        else {
            base = this.http.get("/api" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
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

module.exports = "h1 {font-size: 20px; }\nh2 {font-size: 15px;}\n.menu{color: #FFF; font-size: 12px; border: #333 1px solid; border-radius: 0px; max-width: 480px}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NoYWxsZW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksZ0JBQWdCLEVBQUU7QUFDdEIsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZS9jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtmb250LXNpemU6IDIwcHg7IH1cbmgyIHtmb250LXNpemU6IDE1cHg7fVxuLm1lbnV7Y29sb3I6ICNGRkY7IGZvbnQtc2l6ZTogMTJweDsgYm9yZGVyOiAjMzMzIDFweCBzb2xpZDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXgtd2lkdGg6IDQ4MHB4fVxuIl19 */"

/***/ }),

/***/ "./src/app/challenge/challenge.component.html":
/*!****************************************************!*\
  !*** ./src/app/challenge/challenge.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Challenge</h1>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Choose an Opponent</h2>\n      <select class=\"menu\" id=\"opponent\">\n        <option value=\"Patrick\">Patrick</option>\n        <option value=\"David\">David</option>\n        <option value=\"Paul\">Paul</option>\n        <option value=\"Dennis\">Dennis</option>\n      </select>\n      <h2>Message</h2>\n      <input type=\"text\" class=\"menu\" id=\"message\" [(ngModel)]=\"newMessage\" (keyup)=\"doCrypt(true)\">\n      <div>\n        <h2>Encryption Key</h2>\n        <!-- <input id=\"encryptionKey\"> -->\n        <select class=\"menu\" id=\"encryptionKey\" (click)=\"doCrypt(true)\">\n          <option value=\"0\">0</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n          <option value=\"11\">11</option>\n          <option value=\"12\">12</option>\n          <option value=\"13\">13</option>\n          <option value=\"14\">14</option>\n          <option value=\"15\">15</option>\n          <option value=\"16\">16</option>\n          <option value=\"17\">17</option>\n          <option value=\"18\">18</option>\n          <option value=\"19\">19</option>\n          <option value=\"20\">20</option>\n          <option value=\"21\">21</option>\n          <option value=\"22\">22</option>\n          <option value=\"23\">23</option>\n          <option value=\"24\">24</option>\n          <option value=\"25\">25</option>\n        </select>\n      </div>\n      \n      <div>\n        <h2>Encrypted Message</h2>\n        <p type=\"text\" id=\"encMessage\">{{encMessage}}</p>\n      </div>\n      <div>\n        <button class=\"btn btn-sm btn-success\" (click)=\"createChallenge()\">BuildMessage</button>\n      </div>\n      \n    </div>\n  </div>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    return Challenge;
}());
var ChallengeComponent = /** @class */ (function () {
    function ChallengeComponent() {
        this.newMessage = "";
    }
    ChallengeComponent.prototype.ngOnInit = function () {
    };
    ChallengeComponent.prototype.doCrypt = function (isDecrypt) {
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
    ChallengeComponent.prototype.newMessageTest = function () {
        console.log(this.newMessage);
    };
    ChallengeComponent.prototype.createChallenge = function () {
        var text = document.getElementById("message").value;
        var to = document.getElementById("opponent").value;
        var encText = document.getElementById("encMessage").textContent;
        var key = document.getElementById("encryptionKey").value;
        var newChallenge = {
            text: text,
            to: to,
            encText: encText,
            key: key,
            attempts: 10,
            solved: false
        };
        console.log(newChallenge);
    };
    ChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challenge',
            template: __webpack_require__(/*! ./challenge.component.html */ "./src/app/challenge/challenge.component.html"),
            styles: [__webpack_require__(/*! ./challenge.component.css */ "./src/app/challenge/challenge.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ".container{margin-left: -20px; margin-top: 50px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcnttYXJnaW4tbGVmdDogLTIwcHg7IG1hcmdpbi10b3A6IDUwcHg7fSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <div class=\"title text-center\">\n    <h1>Welcome to dCrypt!</h1>\n  </div>\n  <hr>\n\n  <!-- <p>Please <a routerLink=\"/login\">sign in</a> or <a routerLink=\"/register\">register</a>?</p> -->\n\n  <div class=\"login-buttons text-center\">\n\n    <button type=\"button\" class=\"btn btn-secondary btn-lg\" routerLink=\"/login\">Log-In</button>\n\n    <br>\n    <br>\n    <br>\n\n    <button type=\"button\" class=\"btn btn-secondary btn-lg\" routerLink=\"/register\">Register</button>\n\n  </div>\n  \n</div>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Leaderboard</h1>\n\n  <!-- ng-repeat loops through data to build list -->\n  <ul>\n    <li ng-repeat=\"users in user\">\n      {{user.score}}\n    </li>\n  </ul>>\n</div>\n"

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
    function LeaderboardComponent() {
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
    };
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Not a member? Please <a routerLink=\"/register\">register</a> instead.</p>\n  \n      <form (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Messages</h1>\n\n  <!-- ng-repeat loops through data to build list -->\n  <ul>\n    <li ng-repeat=\"users in user\">\n      {{messages.DecryptedMsg}}\n    </li>\n  </ul>\n</div>\n"

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
        this.api.getMsgs()
            .subscribe(function (res) {
            console.log('messages');
            console.log(res);
            _this.messages = res;
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
        return this.api.getMsgs();
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Test</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <!-- <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register <span class=\"sr-only\">(current)</span></a>\n      </li> -->\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/messages\">Messages <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/challenge\">Challenges <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/leaderboard\">Leaderboard <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li  class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <!-- <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/profile\">{{ auth.getUserDetails()?.name }}<span class=\"sr-only\">(current)</span></a>\n      </li> -->\n      <!-- <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" (click)=\"auth.logout()\" routerLink=\"/\"> Logout<span class=\"sr-only\">(current)</span></a>\n      </li> -->\n    </ul>\n\n  </div>\n</nav>\n"

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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n     <div class=\"col-md-6\">\n\n      <h1 class=\"form-signin-heading\">Your dCrypt Profile</h1>\n      <hr>\n\n      <div class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label\">Full name</label>\n          <p class=\"form-control-static\">{{ details?.name }}</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label\">Email</label>\n          <p class=\"form-control-static\">{{ details?.email }}</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

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


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(api) {
        this.api = api;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getUser()
            .subscribe(function (user) {
            console.log('user');
            console.log(user);
            _this.details = user[0];
            console.log('details');
            console.log(_this.details);
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please <a routerLink=\"/login\">log in</a> instead.</p>\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

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
            password: ''
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

module.exports = __webpack_require__(/*! /Users/dennis/Desktop/class_work/DCrypt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map