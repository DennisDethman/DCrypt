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
    ApiService.prototype.getUsers = function () {
        return this.http.get('/userapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getUser = function (id) {
        return this.http.get('/userapi/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateUser = function (id, data) {
        return this.http.put('/userapi/' + id, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getSentMsg = function (msg) {
        return this.http.get('/getmsgsapi/' + msg, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getSentMsgs = function () {
        return this.http.get('/getmsgsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRecvdMsg = function (msg) {
        return this.http.get('/recvdmsgsapi/' + msg, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRecvdMsgs = function () {
        //getRecvdMsgs(id: string): Observable<any> {
        return this.http.get('/recvdmsgsapi', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postSentMsg = function (data) {
        return this.http.post('/getmsgsapi', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateSentMsg = function (id, data) {
        return this.http.put('/getmsgsapi/' + id, data, httpOptions)
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
        return this.http.get('/userapi/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getGameStats = function () {
        return this.http.get('/userapi/stats', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateGameStat = function (id, data) {
        return this.http.put('/statsapi/' + id, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.createGameStat = function (data) {
        return this.http.post('/statsapi', data, httpOptions)
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

module.exports = "\n/*MAIN CONSOLE**************************************/\n.console{width:630px;height:600px;background:#8b7867;background: linear-gradient(#3c3f41, rgb(83, 83, 83));margin:100px auto 0 auto;border-radius:50px;border-bottom-right-radius:90px;border-top:2px solid #c3bfb4;border:3px solid #c3bfb4;position:relative;}\n.console-front{width:510px;height:635px;background:#8b7867;background: linear-gradient(#222222, #3c3f41);left:25px;position:absolute;top:-60px;padding-top:30px;border-radius:70px;border-top-right-radius:70px;border-bottom-right-radius:60px;border-bottom-left-radius:60px;position:relative;z-index:0;border-top:4px solid #c3bfb4;box-shadow:5px 5px 5px 0px #3f2d21;}\n.top{width:120px;height:50px;background:#111;position:absolute;top:-15px;left:165px;z-index:-4;}\n.top:after,.top:before{content:\"\";display:block;width:45px;height:30px;background:#c3bfb4;margin-top:5px;z-index:-1;position:relative;}\n.top:after{border-top-right-radius:30px;border-top-left-radius:10px;left:-1px;}\n.top:before{position:absolute;right:-1px;border-top-right-radius:10px;border-top-left-radius:30px;}\n.top-button{width:55px;height:13px;background:#000;position:absolute;right:5px;top:3px;border-top-right-radius:20px;border-top-left-radius:20px;border-top:1px solid #444;-webkit-transform:rotate(27deg);transform:rotate(27deg)}\n.top-button:after{content:\"\";display:block;width:30px;height:7px;background:linear-gradient(to right, rgba(0,0,0,0.0),rgba(255,255,255,0.8));margin-left:13px;margin-top:-7px;border-radius:2px;border:1px solid #333;}\n/*MAIN CONSOLE**************************************/\n/*SCREEN**************************************/\n.screen-border{background:#272b2a;width:470px;height:580px;margin:auto;border-radius:50px;padding-top:5%;border-top:10px solid #5a5f5b;border-bottom:10px solid #5a5f5b;border-left: 2px solid #5a5f5b;border-right: 2px solid #5a5f5b;position:relative;z-index:-5;}\n.screen{width:420px;height:520px;position:absolute;margin-left:26px;border-radius:20px;background:#000;border:5px solid rgba(170, 170, 170, 0.78);padding:5px 5px 5px 0;;overflow:hidden;}\n.screen-reflection{width:396px;height:496px;background:linear-gradient(150deg,#fff,rgba(0,0,0,30), rgba(255, 255, 255, 0.72));position:relative;z-index:10;opacity:0.14;margin:1px 1px 1px 7px;border-radius:10px;}\n/*SCREEN**************************************/\n/*SCAN ***************************************/\n.scan{width:410px;height:150px;background:linear-gradient(rgba(0,0,0,0),#7ff12a);position:absolute;-webkit-animation:scan;animation:scan;-webkit-animation-duration:8s;animation-duration:8s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;top:-185px;z-index:100;opacity:0.25;pointer-events: none;}\n/*SCAN ***************************************/\n.logo{color: red; z-index: 1000; margin-left: -475px; padding-top: 15px;}\n/*LINKS***************************************/\n.info1:before{content:\"Agent\";}\n.info2:before{content:\"Challenge\";}\n.info3:before{content:\"Messages\";}\n.info4:before{content:\"Leader Board\";}\n.info5:before{content:\"Logout\"}\n.info6:before{content:\"Sound\"}\n/*.line2:before{content:\"line2\";}*/\n.tab-names{position:absolute;left:-40px;top:10px;}\n.tab-names li{list-style-type:none;text-align:right;padding:3.5px 0 3.5px 0;}\n/*LINKS***************************************/\n/*NAV***************************************/\nnav{height:35px;width:100%;position:absolute;top:0;left:0;border-bottom:1px solid #8df776;padding-left:10%;border-top-right-radius:20px;z-index:95;border-top-left-radius:20px; margin-top: 10px}\nnav span{color:#8df776;line-height:31px;font-size:10px;letter-spacing:0.3px;margin-left:20px;margin-top:500px;font-weight:300;}\nnav p{margin:-10px 0 0 0;height:25px;}\n.game-text{color:#8df776; z-index: 100;}\n/*NAV***************************************/\n/*DESIGN***************************************/\n.left-speakers{width:45px;position:absolute;top:137px;left:20px}\n.left-speakers:before{width:60px;height:265px;content:\"\";display:block;background: linear-gradient(#806f5d,#726350);position:absolute;left:0px;top:-30px;border-bottom-left-radius:150px;border-top-left-radius:20px;border-top:2px solid #c3bfb4;border-bottom:2px solid #4f3f32;}\n.left-speaker{content:\"\";display:block;width:80%;height:5px;background:rgba(0,0,0,0.2);margin-bottom:10px;border-bottom:2px solid #978175;border-top-right-radius:2px;border-bottom-right-radius:3px;position:relative;z-index:3;}\n.speakers{width:40px;position:absolute;top:160px;right:0;z-index:99;}\n.speaker{width:40px;height:5px;background:rgba(0,0,0,0.2);margin-bottom:8px;border-bottom:2px solid #978175;border-top-left-radius:2px;border-bottom-left-radius:3px;}\n.speaker:after{width:23px;height:5px;background:rgba(0,0,0,0.2);content:\"\";display:block;border-bottom:2px solid #978175;margin-left:-40px;border-radius:3px;}\n.wheel{width:45px;height:110px;background:#000;position:absolute;top:-2px;right:-10px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-top:2px solid #aaaaa8;border-left:2px solid #392c24;}\n.wheel-shadow{width:48px;height:8px;background:#333;border-radius:100px;margin-left:3px;margin-top:11px;background: linear-gradient(#000,#222);border: 1px solid rgba(157, 170, 163, 0.61)\n}\n.wrapper{margin:auto;}\n.bottom-switch{}\n.power{width:32px;height:31px;background:#000;position:absolute;bottom:23px;right:65px;border-radius:150px;z-index:99;}\n.power:after{content:\"\";display:block;width:50px;height:15px;background:radial-gradient(white,yellow,orange,red);border-radius:150px;margin-left:23px;margin-top:-35px;-webkit-animation: flicker;animation: flicker; -webkit-animation-duration: 3.2s; animation-duration: 3.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}\n.bottom-button{background:#000;position:absolute;right:30px;bottom:60px;width:37px;height:25px;border-top-left-radius:60px;border-top-right-radius:60px;}\n.bottom-button:after{content:\"\";display:block;width:100%;height:20px;background:#000;position:relative;margin-top:5px;z-index:0;width:37px;height:35px;border-radius:150px;border-top:1px solid #444;}\n.bottom-button:before{content:\"\";display:block;width:15px;height:15px;border-radius:150px;top:17px;left:11px;border-bottom:1px solid #555;position:absolute;z-index:3;}\n.top-right{width:140px;height:100px;background: linear-gradient(#3c3f41, #2b2b2b);position:absolute;top:-37px;right:5px;border-top-left-radius:30px;border-top-right-radius:40px;border-top:3px solid #c3bfb4;z-index:-1;}\n/*RADIO BUTTONS********************************/\n.radios{margin-top: 60px; margin-left: 0px;}\n/*#link:before{content: \"link\";margin-left: -20px;margin-top: -100px;}*/\ninput {\n  -webkit-appearance: none; /* remove default */display: block;margin: 20px;width: 14px;height: 24px;border-radius: 12px;cursor: pointer;vertical-align: middle;\n  box-shadow: hsla(0,0%,100%,.15) 0 1px 1px, inset hsla(0,0%,0%,.5) 0 0 0 1px;\n  background-color: hsla(0,0%,0%,.2);\n  background-image: -webkit-radial-gradient( hsla(200,100%,90%,1) 0%, hsla(200,100%,70%,1) 15%, hsla(200,100%,60%,.3) 28%, hsla(200,100%,30%,0) 70% );\n  background-repeat: no-repeat;\n  -webkit-transition: background-position .15s cubic-bezier(.8, 0, 1, 1),\n  -webkit-transform .25s cubic-bezier(.8, 0, 1, 1);\n  outline: none;\n}\ninput:checked {\n  -webkit-transition: background-position .2s .15s cubic-bezier(0, 0, .2, 1),\n  -webkit-transform .25s cubic-bezier(0, 0, .2, 1);\n}\ninput:active {\n  -webkit-transform: scale(1.5);\n  -webkit-transition: -webkit-transform .1s cubic-bezier(0, 0, .2, 1);\n}\n/* The up/down direction logic */\ninput,\ninput:active {\n  background-position: 0 24px;\n}\ninput:checked {\n  background-position: 0 0;\n}\ninput:checked ~ input,\ninput:checked ~ input:active {\n  background-position: 0 -24px;\n}\n/*RADIO BUTTONS********************************/\n/*SCREWS***************************************/\n#stl{margin-left: -583px; margin-top: -450px;position: absolute;}\n#str{margin-left: -30px; margin-top: -470px;position: absolute;}\n#sbr{margin-left: -30px; margin-top: 75px;position: absolute;}\n#sbl{margin-left: -570px; margin-top: 75px;position: absolute;}\n/*SCREWS***************************************/\n/*DESIGN***************************************/\n/*POWER*/\n@-webkit-keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n@keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n/*BACK GROUND SCANNER*/\n@-webkit-keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n@keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n/*PLAYGROUND*************************/\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFEQUFxRDtBQUNyRCxTQUFTLFlBQVksYUFBYSxtQkFBbUIsc0RBQXNELHlCQUF5QixtQkFBbUIsZ0NBQWdDLDZCQUE2Qix5QkFBeUIsa0JBQWtCLENBQUM7QUFDaFEsZUFBZSxZQUFZLGFBQWEsbUJBQW1CLDhDQUE4QyxVQUFVLGtCQUFrQixVQUFVLGlCQUFpQixtQkFBbUIsNkJBQTZCLGdDQUFnQywrQkFBK0Isa0JBQWtCLFVBQVUsNkJBQTZCLG1DQUFtQyxDQUFDO0FBQzVXLEtBQUssWUFBWSxZQUFZLGdCQUFnQixrQkFBa0IsVUFBVSxXQUFXLFdBQVcsQ0FBQztBQUNoRyx1QkFBdUIsV0FBVyxjQUFjLFdBQVcsWUFBWSxtQkFBbUIsZUFBZSxXQUFXLGtCQUFrQixDQUFDO0FBQ3ZJLFdBQVcsNkJBQTZCLDRCQUE0QixVQUFVLENBQUM7QUFDL0UsWUFBWSxrQkFBa0IsV0FBVyw2QkFBNkIsNEJBQTRCLENBQUM7QUFDbkcsWUFBWSxXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQixVQUFVLFFBQVEsNkJBQTZCLDRCQUE0QiwwQkFBMEIsZ0NBQXVCLEFBQXZCLHVCQUF1QixDQUFDO0FBQ2xNLGtCQUFrQixXQUFXLGNBQWMsV0FBVyxXQUFXLDRFQUE0RSxpQkFBaUIsZ0JBQWdCLGtCQUFrQixzQkFBc0IsQ0FBQztBQUN2TixxREFBcUQ7QUFFckQsK0NBQStDO0FBQy9DLGVBQWUsbUJBQW1CLFlBQVksYUFBYSxZQUFZLG1CQUFtQixlQUFlLDhCQUE4QixpQ0FBaUMsK0JBQStCLGdDQUFnQyxrQkFBa0IsV0FBVyxDQUFDO0FBQ3JRLFFBQVEsWUFBWSxhQUFhLGtCQUFrQixpQkFBaUIsbUJBQW1CLGdCQUFnQiwyQ0FBMkMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUM7QUFDMUwsbUJBQW1CLFlBQVksYUFBYSxrRkFBa0Ysa0JBQWtCLFdBQVcsYUFBYSx1QkFBdUIsbUJBQW1CLENBQUM7QUFDbk4sK0NBQStDO0FBRS9DLCtDQUErQztBQUMvQyxNQUFNLFlBQVksYUFBYSxrREFBa0Qsa0JBQWtCLHVCQUFlLEFBQWYsZUFBZSw4QkFBc0IsQUFBdEIsc0JBQXNCLDRDQUFvQyxBQUFwQyxvQ0FBb0MsV0FBVyxZQUFZLGFBQWEscUJBQXFCLENBQUM7QUFDdE8sK0NBQStDO0FBQy9DLE1BQU0sV0FBVyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUN6RSwrQ0FBK0M7QUFDL0MsY0FBYyxnQkFBZ0IsQ0FBQztBQUMvQixjQUFjLG9CQUFvQixDQUFDO0FBQ25DLGNBQWMsbUJBQW1CLENBQUM7QUFDbEMsY0FBYyx1QkFBdUIsQ0FBQztBQUN0QyxjQUFjLGdCQUFnQixDQUFDO0FBQy9CLGNBQWMsZUFBZSxDQUFDO0FBQzlCLG1DQUFtQztBQUNuQyxXQUFXLGtCQUFrQixXQUFXLFNBQVMsQ0FBQztBQUNsRCxjQUFjLHFCQUFxQixpQkFBaUIsd0JBQXdCLENBQUM7QUFDN0UsK0NBQStDO0FBRS9DLDZDQUE2QztBQUM3QyxJQUFJLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxPQUFPLGdDQUFnQyxpQkFBaUIsNkJBQTZCLFdBQVcsNEJBQTRCLENBQUMsZ0JBQWdCLENBQUM7QUFDak0sU0FBUyxjQUFjLGlCQUFpQixlQUFlLHFCQUFxQixpQkFBaUIsaUJBQWlCLGdCQUFnQixDQUFDO0FBQy9ILE1BQU0sbUJBQW1CLFlBQVksQ0FBQztBQUN0QyxXQUFXLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDeEMsNkNBQTZDO0FBRTdDLGdEQUFnRDtBQUNoRCxlQUFlLFdBQVcsa0JBQWtCLFVBQVUsU0FBUyxDQUFDO0FBQ2hFLHNCQUFzQixXQUFXLGFBQWEsV0FBVyxjQUFjLDZDQUE2QyxrQkFBa0IsU0FBUyxVQUFVLGdDQUFnQyw0QkFBNEIsNkJBQTZCLGdDQUFnQyxDQUFDO0FBQ25SLGNBQWMsV0FBVyxjQUFjLFVBQVUsV0FBVywyQkFBMkIsbUJBQW1CLGdDQUFnQyw0QkFBNEIsK0JBQStCLGtCQUFrQixVQUFVLENBQUM7QUFFbE8sVUFBVSxXQUFXLGtCQUFrQixVQUFVLFFBQVEsV0FBVyxDQUFDO0FBQ3JFLFNBQVMsV0FBVyxXQUFXLDJCQUEyQixrQkFBa0IsZ0NBQWdDLDJCQUEyQiw4QkFBOEIsQ0FBQztBQUN0SyxlQUFlLFdBQVcsV0FBVywyQkFBMkIsV0FBVyxjQUFjLGdDQUFnQyxrQkFBa0Isa0JBQWtCLENBQUM7QUFFOUosT0FBTyxXQUFXLGFBQWEsZ0JBQWdCLGtCQUFrQixTQUFTLFlBQVksNkJBQTZCLGdDQUFnQyw2QkFBNkIsOEJBQThCLENBQUM7QUFDL00sY0FBYyxXQUFXLFdBQVcsZ0JBQWdCLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLHVDQUF1QywyQ0FBMkM7Q0FDekw7QUFFRCxTQUFTLFlBQVksQ0FBQztBQUV0QixnQkFBZ0I7QUFFaEIsT0FBTyxXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQixZQUFZLFdBQVcsb0JBQW9CLFdBQVcsQ0FBQztBQUN2SCxhQUFhLFdBQVcsY0FBYyxXQUFXLFlBQVksb0RBQW9ELG9CQUFvQixpQkFBaUIsaUJBQWlCLDJCQUFtQixBQUFuQixtQkFBbUIsQ0FBQyxpQ0FBeUIsQ0FBekIseUJBQXlCLDRDQUFvQyxBQUFwQyxvQ0FBb0MsQ0FBQztBQUV6UCxlQUFlLGdCQUFnQixrQkFBa0IsV0FBVyxZQUFZLFdBQVcsWUFBWSw0QkFBNEIsNkJBQTZCLENBQUM7QUFDekoscUJBQXFCLFdBQVcsY0FBYyxXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQixlQUFlLFVBQVUsV0FBVyxZQUFZLG9CQUFvQiwwQkFBMEIsQ0FBQztBQUN0TSxzQkFBc0IsV0FBVyxjQUFjLFdBQVcsWUFBWSxvQkFBb0IsU0FBUyxVQUFVLDZCQUE2QixrQkFBa0IsVUFBVSxDQUFDO0FBRXZLLFdBQVcsWUFBWSxhQUFhLDhDQUE4QyxrQkFBa0IsVUFBVSxVQUFVLDRCQUE0Qiw2QkFBNkIsNkJBQTZCLFdBQVcsQ0FBQztBQUUxTixnREFBZ0Q7QUFDaEQsUUFBUSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztBQUM1Qyx3RUFBd0U7QUFFeEU7RUFDRSx5QkFBeUIsQ0FBQyxvQkFBb0IsZUFBZSxhQUFhLFlBQVksYUFBYSxvQkFBb0IsZ0JBQWdCLHVCQUF1QjtFQUM5Siw0RUFBNEU7RUFDNUUsbUNBQW1DO0VBQ25DLG9KQUFvSjtFQUNwSiw2QkFBNkI7RUFDN0I7bURBQ2lEO0VBQ2pELGNBQWM7Q0FDZjtBQUNEO0VBQ0U7bURBQ2lEO0NBQ2xEO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsb0VBQW9FO0NBQ3JFO0FBRUQsaUNBQWlDO0FBRWpDOztFQUVFLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UseUJBQXlCO0NBQzFCO0FBQ0Q7O0VBRUUsNkJBQTZCO0NBQzlCO0FBQ0QsZ0RBQWdEO0FBRWhELGdEQUFnRDtBQUNoRCxLQUFLLG9CQUFvQixDQUFDLG1CQUFtQixtQkFBbUIsQ0FBQztBQUNqRSxLQUFLLG1CQUFtQixDQUFDLG1CQUFtQixtQkFBbUIsQ0FBQztBQUNoRSxLQUFLLG1CQUFtQixDQUFDLGlCQUFpQixtQkFBbUIsQ0FBQztBQUM5RCxLQUFLLG9CQUFvQixDQUFDLGlCQUFpQixtQkFBbUIsQ0FBQztBQUMvRCxnREFBZ0Q7QUFFaEQsZ0RBQWdEO0FBRWhELFNBQVM7QUFDVDtFQUNFLEdBQUcsK0JBQStCLENBQUM7RUFDbkMsR0FBRyxnQ0FBZ0MsQ0FBQztFQUNwQyxJQUFJLGdDQUFnQyxDQUFDO0VBQ3JDLElBQUksbUNBQW1DLENBQUM7RUFDeEMsSUFBSSxnQ0FBZ0MsQ0FBQztFQUNyQyxLQUFLLCtCQUErQixDQUFDO0NBQ3RDO0FBUEQ7RUFDRSxHQUFHLCtCQUErQixDQUFDO0VBQ25DLEdBQUcsZ0NBQWdDLENBQUM7RUFDcEMsSUFBSSxnQ0FBZ0MsQ0FBQztFQUNyQyxJQUFJLG1DQUFtQyxDQUFDO0VBQ3hDLElBQUksZ0NBQWdDLENBQUM7RUFDckMsS0FBSywrQkFBK0IsQ0FBQztDQUN0QztBQUVELHVCQUF1QjtBQUN2QjtBQUNBLEVBQUUsVUFBVSxDQUFDO0FBQ2IsSUFBSSxVQUFVLENBQUM7QUFDZixLQUFLLFdBQVcsQ0FBQztDQUNoQjtBQUpEO0FBQ0EsRUFBRSxVQUFVLENBQUM7QUFDYixJQUFJLFVBQVUsQ0FBQztBQUNmLEtBQUssV0FBVyxDQUFDO0NBQ2hCO0FBSUQsc0NBQXNDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qTUFJTiBDT05TT0xFKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uY29uc29sZXt3aWR0aDo2MzBweDtoZWlnaHQ6NjAwcHg7YmFja2dyb3VuZDojOGI3ODY3O2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjM2MzZjQxLCByZ2IoODMsIDgzLCA4MykpO21hcmdpbjoxMDBweCBhdXRvIDAgYXV0bztib3JkZXItcmFkaXVzOjUwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6OTBweDtib3JkZXItdG9wOjJweCBzb2xpZCAjYzNiZmI0O2JvcmRlcjozcHggc29saWQgI2MzYmZiNDtwb3NpdGlvbjpyZWxhdGl2ZTt9XG4uY29uc29sZS1mcm9udHt3aWR0aDo1MTBweDtoZWlnaHQ6NjM1cHg7YmFja2dyb3VuZDojOGI3ODY3O2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjIyMjIyLCAjM2MzZjQxKTtsZWZ0OjI1cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOi02MHB4O3BhZGRpbmctdG9wOjMwcHg7Ym9yZGVyLXJhZGl1czo3MHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjcwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NjBweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjYwcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDowO2JvcmRlci10b3A6NHB4IHNvbGlkICNjM2JmYjQ7Ym94LXNoYWRvdzo1cHggNXB4IDVweCAwcHggIzNmMmQyMTt9XG4udG9we3dpZHRoOjEyMHB4O2hlaWdodDo1MHB4O2JhY2tncm91bmQ6IzExMTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTE1cHg7bGVmdDoxNjVweDt6LWluZGV4Oi00O31cbi50b3A6YWZ0ZXIsLnRvcDpiZWZvcmV7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6NDVweDtoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kOiNjM2JmYjQ7bWFyZ2luLXRvcDo1cHg7ei1pbmRleDotMTtwb3NpdGlvbjpyZWxhdGl2ZTt9XG4udG9wOmFmdGVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjMwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O2xlZnQ6LTFweDt9XG4udG9wOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O31cbi50b3AtYnV0dG9ue3dpZHRoOjU1cHg7aGVpZ2h0OjEzcHg7YmFja2dyb3VuZDojMDAwO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjVweDt0b3A6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjIwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICM0NDQ7dHJhbnNmb3JtOnJvdGF0ZSgyN2RlZyl9XG4udG9wLWJ1dHRvbjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDozMHB4O2hlaWdodDo3cHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMC4wKSxyZ2JhKDI1NSwyNTUsMjU1LDAuOCkpO21hcmdpbi1sZWZ0OjEzcHg7bWFyZ2luLXRvcDotN3B4O2JvcmRlci1yYWRpdXM6MnB4O2JvcmRlcjoxcHggc29saWQgIzMzMzt9XG4vKk1BSU4gQ09OU09MRSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKlNDUkVFTioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnNjcmVlbi1ib3JkZXJ7YmFja2dyb3VuZDojMjcyYjJhO3dpZHRoOjQ3MHB4O2hlaWdodDo1ODBweDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjUwcHg7cGFkZGluZy10b3A6NSU7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICM1YTVmNWI7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICM1YTVmNWI7Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWE1ZjViO2JvcmRlci1yaWdodDogMnB4IHNvbGlkICM1YTVmNWI7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDotNTt9XG4uc2NyZWVue3dpZHRoOjQyMHB4O2hlaWdodDo1MjBweDtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tbGVmdDoyNnB4O2JvcmRlci1yYWRpdXM6MjBweDtiYWNrZ3JvdW5kOiMwMDA7Ym9yZGVyOjVweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuNzgpO3BhZGRpbmc6NXB4IDVweCA1cHggMDs7b3ZlcmZsb3c6aGlkZGVuO31cbi5zY3JlZW4tcmVmbGVjdGlvbnt3aWR0aDozOTZweDtoZWlnaHQ6NDk2cHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCNmZmYscmdiYSgwLDAsMCwzMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MikpO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTA7b3BhY2l0eTowLjE0O21hcmdpbjoxcHggMXB4IDFweCA3cHg7Ym9yZGVyLXJhZGl1czoxMHB4O31cbi8qU0NSRUVOKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qU0NBTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uc2Nhbnt3aWR0aDo0MTBweDtoZWlnaHQ6MTUwcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwjN2ZmMTJhKTtwb3NpdGlvbjphYnNvbHV0ZTthbmltYXRpb246c2NhbjthbmltYXRpb24tZHVyYXRpb246OHM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7dG9wOi0xODVweDt6LWluZGV4OjEwMDtvcGFjaXR5OjAuMjU7cG9pbnRlci1ldmVudHM6IG5vbmU7fVxuLypTQ0FOICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5sb2dve2NvbG9yOiByZWQ7IHotaW5kZXg6IDEwMDA7IG1hcmdpbi1sZWZ0OiAtNDc1cHg7IHBhZGRpbmctdG9wOiAxNXB4O31cbi8qTElOS1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uaW5mbzE6YmVmb3Jle2NvbnRlbnQ6XCJBZ2VudFwiO31cbi5pbmZvMjpiZWZvcmV7Y29udGVudDpcIkNoYWxsZW5nZVwiO31cbi5pbmZvMzpiZWZvcmV7Y29udGVudDpcIk1lc3NhZ2VzXCI7fVxuLmluZm80OmJlZm9yZXtjb250ZW50OlwiTGVhZGVyIEJvYXJkXCI7fVxuLmluZm81OmJlZm9yZXtjb250ZW50OlwiTG9nb3V0XCJ9XG4uaW5mbzY6YmVmb3Jle2NvbnRlbnQ6XCJTb3VuZFwifVxuLyoubGluZTI6YmVmb3Jle2NvbnRlbnQ6XCJsaW5lMlwiO30qL1xuLnRhYi1uYW1lc3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00MHB4O3RvcDoxMHB4O31cbi50YWItbmFtZXMgbGl7bGlzdC1zdHlsZS10eXBlOm5vbmU7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nOjMuNXB4IDAgMy41cHggMDt9XG4vKkxJTktTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKk5BVioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbm5hdntoZWlnaHQ6MzVweDt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOGRmNzc2O3BhZGRpbmctbGVmdDoxMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweDt6LWluZGV4Ojk1O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweDsgbWFyZ2luLXRvcDogMTBweH1cbm5hdiBzcGFue2NvbG9yOiM4ZGY3NzY7bGluZS1oZWlnaHQ6MzFweDtmb250LXNpemU6MTBweDtsZXR0ZXItc3BhY2luZzowLjNweDttYXJnaW4tbGVmdDoyMHB4O21hcmdpbi10b3A6NTAwcHg7Zm9udC13ZWlnaHQ6MzAwO31cbm5hdiBwe21hcmdpbjotMTBweCAwIDAgMDtoZWlnaHQ6MjVweDt9XG4uZ2FtZS10ZXh0e2NvbG9yOiM4ZGY3NzY7IHotaW5kZXg6IDEwMDt9XG4vKk5BVioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypERVNJR04qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubGVmdC1zcGVha2Vyc3t3aWR0aDo0NXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMzdweDtsZWZ0OjIwcHh9XG4ubGVmdC1zcGVha2VyczpiZWZvcmV7d2lkdGg6NjBweDtoZWlnaHQ6MjY1cHg7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4MDZmNWQsIzcyNjM1MCk7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowcHg7dG9wOi0zMHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTUwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MnB4IHNvbGlkICNjM2JmYjQ7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzRmM2YzMjt9XG4ubGVmdC1zcGVha2Vye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjgwJTtoZWlnaHQ6NXB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO21hcmdpbi1ib3R0b206MTBweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjOTc4MTc1O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjJweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDozO31cblxuLnNwZWFrZXJze3dpZHRoOjQwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE2MHB4O3JpZ2h0OjA7ei1pbmRleDo5OTt9XG4uc3BlYWtlcnt3aWR0aDo0MHB4O2hlaWdodDo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7bWFyZ2luLWJvdHRvbTo4cHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzk3ODE3NTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjJweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDt9XG4uc3BlYWtlcjphZnRlcnt3aWR0aDoyM3B4O2hlaWdodDo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzk3ODE3NTttYXJnaW4tbGVmdDotNDBweDtib3JkZXItcmFkaXVzOjNweDt9XG5cbi53aGVlbHt3aWR0aDo0NXB4O2hlaWdodDoxMTBweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0ycHg7cmlnaHQ6LTEwcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MnB4IHNvbGlkICNhYWFhYTg7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkICMzOTJjMjQ7fVxuLndoZWVsLXNoYWRvd3t3aWR0aDo0OHB4O2hlaWdodDo4cHg7YmFja2dyb3VuZDojMzMzO2JvcmRlci1yYWRpdXM6MTAwcHg7bWFyZ2luLWxlZnQ6M3B4O21hcmdpbi10b3A6MTFweDtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMCwjMjIyKTtib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NywgMTcwLCAxNjMsIDAuNjEpXG59XG5cbi53cmFwcGVye21hcmdpbjphdXRvO31cblxuLmJvdHRvbS1zd2l0Y2h7fVxuXG4ucG93ZXJ7d2lkdGg6MzJweDtoZWlnaHQ6MzFweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjIzcHg7cmlnaHQ6NjVweDtib3JkZXItcmFkaXVzOjE1MHB4O3otaW5kZXg6OTk7fVxuLnBvd2VyOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjUwcHg7aGVpZ2h0OjE1cHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQod2hpdGUseWVsbG93LG9yYW5nZSxyZWQpO2JvcmRlci1yYWRpdXM6MTUwcHg7bWFyZ2luLWxlZnQ6MjNweDttYXJnaW4tdG9wOi0zNXB4O2FuaW1hdGlvbjogZmxpY2tlcjsgYW5pbWF0aW9uLWR1cmF0aW9uOiAzLjJzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO31cblxuLmJvdHRvbS1idXR0b257YmFja2dyb3VuZDojMDAwO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjMwcHg7Ym90dG9tOjYwcHg7d2lkdGg6MzdweDtoZWlnaHQ6MjVweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjYwcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NjBweDt9XG4uYm90dG9tLWJ1dHRvbjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoyMHB4O2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tdG9wOjVweDt6LWluZGV4OjA7d2lkdGg6MzdweDtoZWlnaHQ6MzVweDtib3JkZXItcmFkaXVzOjE1MHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICM0NDQ7fVxuLmJvdHRvbS1idXR0b246YmVmb3Jle2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7Ym9yZGVyLXJhZGl1czoxNTBweDt0b3A6MTdweDtsZWZ0OjExcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzU1NTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjM7fVxuXG4udG9wLXJpZ2h0e3dpZHRoOjE0MHB4O2hlaWdodDoxMDBweDtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzNjM2Y0MSwgIzJiMmIyYik7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0zN3B4O3JpZ2h0OjVweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjMwcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NDBweDtib3JkZXItdG9wOjNweCBzb2xpZCAjYzNiZmI0O3otaW5kZXg6LTE7fVxuXG4vKlJBRElPIEJVVFRPTlMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5yYWRpb3N7bWFyZ2luLXRvcDogNjBweDsgbWFyZ2luLWxlZnQ6IDBweDt9XG4vKiNsaW5rOmJlZm9yZXtjb250ZW50OiBcImxpbmtcIjttYXJnaW4tbGVmdDogLTIwcHg7bWFyZ2luLXRvcDogLTEwMHB4O30qL1xuXG5pbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogcmVtb3ZlIGRlZmF1bHQgKi9kaXNwbGF5OiBibG9jazttYXJnaW46IDIwcHg7d2lkdGg6IDE0cHg7aGVpZ2h0OiAyNHB4O2JvcmRlci1yYWRpdXM6IDEycHg7Y3Vyc29yOiBwb2ludGVyO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJveC1zaGFkb3c6IGhzbGEoMCwwJSwxMDAlLC4xNSkgMCAxcHggMXB4LCBpbnNldCBoc2xhKDAsMCUsMCUsLjUpIDAgMCAwIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLDAlLDAlLC4yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIGhzbGEoMjAwLDEwMCUsOTAlLDEpIDAlLCBoc2xhKDIwMCwxMDAlLDcwJSwxKSAxNSUsIGhzbGEoMjAwLDEwMCUsNjAlLC4zKSAyOCUsIGhzbGEoMjAwLDEwMCUsMzAlLDApIDcwJSApO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gLjE1cyBjdWJpYy1iZXppZXIoLjgsIDAsIDEsIDEpLFxuICAtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllciguOCwgMCwgMSwgMSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dDpjaGVja2VkIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4ycyAuMTVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSksXG4gIC13ZWJraXQtdHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTtcbn1cbmlucHV0OmFjdGl2ZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4xcyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpO1xufVxuXG4vKiBUaGUgdXAvZG93biBkaXJlY3Rpb24gbG9naWMgKi9cblxuaW5wdXQsXG5pbnB1dDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDI0cHg7XG59XG5pbnB1dDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xufVxuaW5wdXQ6Y2hlY2tlZCB+IGlucHV0LFxuaW5wdXQ6Y2hlY2tlZCB+IGlucHV0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI0cHg7XG59XG4vKlJBRElPIEJVVFRPTlMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypTQ1JFV1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4jc3Rse21hcmdpbi1sZWZ0OiAtNTgzcHg7IG1hcmdpbi10b3A6IC00NTBweDtwb3NpdGlvbjogYWJzb2x1dGU7fVxuI3N0cnttYXJnaW4tbGVmdDogLTMwcHg7IG1hcmdpbi10b3A6IC00NzBweDtwb3NpdGlvbjogYWJzb2x1dGU7fVxuI3NicnttYXJnaW4tbGVmdDogLTMwcHg7IG1hcmdpbi10b3A6IDc1cHg7cG9zaXRpb246IGFic29sdXRlO31cbiNzYmx7bWFyZ2luLWxlZnQ6IC01NzBweDsgbWFyZ2luLXRvcDogNzVweDtwb3NpdGlvbjogYWJzb2x1dGU7fVxuLypTQ1JFV1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qREVTSUdOKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKlBPV0VSKi9cbkBrZXlmcmFtZXMgZmxpY2tlcntcbiAgMCV7Ym94LXNoYWRvdzowcHggMHB4IDVweCAwcHggcmVkO31cbiAgNSV7Ym94LXNoYWRvdzowcHggMHB4IDMwcHggMnB4IHJlZDt9XG4gIDYwJXtib3gtc2hhZG93OjBweCAwcHggMzBweCAycHggcmVkO31cbiAgODAle2JveC1zaGFkb3c6MHB4IDBweCAxMHB4IDBweCBvcmFuZ2U7fVxuICA5MCV7Ym94LXNoYWRvdzowcHggMHB4IDMwcHggMnB4IHJlZDt9XG4gIDEwMCV7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmVkO31cbn1cblxuLypCQUNLIEdST1VORCBTQ0FOTkVSKi9cbkBrZXlmcmFtZXMgc2NhbntcbjB7dG9wOi04MHB4O31cbjcwJXt0b3A6NTAwcHg7fVxuMTAwJXt0b3A6MTAwMHB4O31cbn1cblxuXG5cbi8qUExBWUdST1VORCoqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"console\">\n  <div class=\"console-front\">\n    <div class=\"screen-border\">\n      <div class=\"screen-border-rim\">\n        <div class=\"screen\">\n          <div class=\"screen-reflection\"></div>\n          <div class=\"scan\"></div>\n\n          <nav>\n            <span class=\"info1\" (click)=\"buttonSound()\" routerLink=\"/profile\"></span>\n            <span class=\"info2\" (click)=\"buttonSound()\" routerLink=\"/challenge\"></span>\n            <span class=\"info3\" (click)=\"buttonSound()\" routerLink=\"/messages\"></span>\n            <span class=\"info4\" (click)=\"buttonSound()\" routerLink=\"/leaderboard\"></span>\n            <span class=\"info5\" (click)=\"buttonSound()\" routerLink=\"/login\"></span>\n            <span class=\" info6\" (click)=\"bgMusic()\"></span> \n          \n            <p>\n              <span class=\"line2\"></span>\n            </p>\n            <div class=\"game-text\">\n              <router-outlet></router-outlet>\n            </div>\n          </nav>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"wheel\">\n    <!--<div class=\"tab-names\">-->\n      <!--<li class=\"info1\"></li>-->\n      <!--<li class=\"info2\"></li>-->\n      <!--<li class=\"info3\"></li>-->\n      <!--<li class=\"info4\"></li>-->\n      <!--<li class=\"info5\"></li>-->\n    <!--</div>-->\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-plug\"></div>\n  </div>\n\n  <div class=\"speakers\">\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n\n      <div class=\"radios\">\n        <input id=\"link\" type=\"radio\" name=\"name\" checked />\n        <input type=\"radio\" name=\"name\" />\n        <input type=\"radio\" name=\"name\" />\n        <input type=\"radio\" name=\"name\" />\n        <input type=\"radio\" name=\"name\" />\n        <img src=\"./assets/img/screw.png\" id=\"stl\"><img src=\"./assets/img/screw.png\" id=\"str\"><img src=\"./assets/img/screw.png\" id=\"sbr\"><img src=\"./assets/img/screw.png\" id=\"sbl\">\n      </div>\n\n    <!-- <div class=\"logo\">LOGO</div> -->\n  </div>\n  \n  <div class=\"bottom-button\"></div>\n  <div class=\"top-right\">\n    <div class=\"power\"></div>\n  </div>\n</div>\n<app-navbar></app-navbar>\n<script src=\"/src/app/app.component.js\"></script>\n\n\n"

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
    }
    AppComponent.prototype.buttonSound = function () {
        var buttonAudio = new Audio;
        buttonAudio.src = "././assets/audio/buttonSound.mp3";
        buttonAudio.load();
        buttonAudio.play();
    };
    AppComponent.prototype.bgMusic = function () {
        var isPlaying = true;
        var bgAudio = new Audio();
        bgAudio.src = "././assets/audio/bgmusic.mp3";
        bgAudio.load();
        bgAudio.play();
        bgAudio.loop = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.bgMusic();
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
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./challenge/challenge.component */ "./src/app/challenge/challenge.component.ts");
/* harmony import */ var _solve_solve_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solve/solve.component */ "./src/app/solve/solve.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    { path: 'challenge', component: _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeComponent"] },
    { path: 'leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LeaderboardComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'solve/:id', component: _solve_solve_component__WEBPACK_IMPORTED_MODULE_8__["SolveComponent"] }
    // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LeaderboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _solve_solve_component__WEBPACK_IMPORTED_MODULE_8__["SolveComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                //BrowserAnimationsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"],
                _api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"]
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

/***/ "./src/app/challenge/challenge.component.css":
/*!***************************************************!*\
  !*** ./src/app/challenge/challenge.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; margin-bottom: 15px; margin-left: -42px}\nh2 {font-size: 15px;}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 480px}\nselect option{color: lightgreen; font-size: 12px; background-color: rgba(0,0,0,0.8);}\n.btn{margin-left: 150px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.row{margin-bottom: 15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NoYWxsZW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7QUFDakYsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixNQUFNLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0FBQ3ZJLGNBQWMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0NBQWtDLENBQUM7QUFDckYsS0FBSyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMseUVBQXlFLENBQUM7QUFDMUksS0FBSyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZS9jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtmb250LXNpemU6IDMwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMTVweDsgbWFyZ2luLWxlZnQ6IC00MnB4fVxuaDIge2ZvbnQtc2l6ZTogMTVweDt9XG4ubWVudXtjb2xvcjogbGlnaHRncmVlbjsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7IGJvcmRlcjogIzlkYWFhMyAxcHggc29saWQ7IGJvcmRlci1yYWRpdXM6IDBweDsgbWF4LXdpZHRoOiA0ODBweH1cbnNlbGVjdCBvcHRpb257Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO31cbi5idG57bWFyZ2luLWxlZnQ6IDE1MHB4OyBib3JkZXItY29sb3I6ICM5ZGFhYTM7IGNvbG9yOiAjN2ZmMTJhOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gbGlnaHRncmVlbiwgMCAwIDAuMmVtIGxpZ2h0Z3JlZW47fVxuLnJvd3ttYXJnaW4tYm90dG9tOiAxNXB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/challenge/challenge.component.html":
/*!****************************************************!*\
  !*** ./src/app/challenge/challenge.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Challenge</h1>\n\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Choose an Opponent</h2>\n      <select class=\"menu\" id=\"opponent\" #t (change)=\"getIdVal(t.value)\">\n        <option [value]=\"null\">Select Alias</option>\n        <option *ngFor=\"let user of filteredUsersList\" [value]=[user._id]>{{user.alias}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Cypher</h2>\n        <select class=\"menu\" id=\"cypher\" (click)=\"doCrypt(true)\">\n          <option [value]=\"null\">Select Cypher</option>  \n          <option value=\"cCrypt\">Caesar Cypher</option>\n          <option value=\"cCrypt2\">Reverse Caesar</option>\n        </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Message</h2>\n      <input type=\"text\" class=\"menu\" id=\"message\" [(ngModel)]=\"newMessage\" (keyup)=\"doCrypt(true)\" maxlength=\"20\">\n      <!-- <p id=\"isEng\">Valid English</p>\n      <p id=\"nonEng\">Not Valid English</p> -->\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2>Encryption Key</h2>\n        <!-- <input id=\"encryptionKey\"> -->\n        <select class=\"menu\" id=\"encryptionKey\" (click)=\"doCrypt(true)\">\n          <option value=\"0\">0</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n          <option value=\"11\">11</option>\n          <option value=\"12\">12</option>\n          <option value=\"13\">13</option>\n          <option value=\"14\">14</option>\n          <option value=\"15\">15</option>\n          <option value=\"16\">16</option>\n          <option value=\"17\">17</option>\n          <option value=\"18\">18</option>\n          <option value=\"19\">19</option>\n          <option value=\"20\">20</option>\n          <option value=\"21\">21</option>\n          <option value=\"22\">22</option>\n          <option value=\"23\">23</option>\n          <option value=\"24\">24</option>\n          <option value=\"25\">25</option>\n        </select>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div>\n        <h2>Encrypted Message</h2>\n        <p type=\"text\" id=\"encMessage\">{{encMessage}}</p>\n      </div>\n      <div>\n        <button class=\"btn btn-outline-success btn-sm\" id=\"clearButton\" (click)=\"createChallenge()\">Build Message</button>\n      </div>\n    </div>  \n  </div>\n</div>\n"

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
        this.recvdChallenge = {
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
        this.postTheSentMessage(sendChallenge);
    };
    ChallengeComponent.prototype.postTheSentMessage = function (challenge) {
        var _this = this;
        this.api.postSentMsg(challenge).subscribe(function (data) {
            _this.sentMsg_id = data._id;
            _this.recvdChallenge.SentMsg_id = _this.sentMsg_id;
            _this.postTheRecvdMessage(_this.recvdChallenge);
            //this.router.navigateByUrl('/profile');
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

module.exports = "<div class=\"container\">\n  <h1>Leaderboard</h1>\n  <br>\n  <!-- ng-repeat loops through data to build list -->\n  <div>\n    <h5>Ranking Special Agent:</h5>\n    <ul>\n      <li>\n        {{gameStats[0].alias}} : {{gameStats[0].gameScore}}\n      </li>\n    </ul>\n  </div>\n  <br>\n  <div>\n    <h5>Top Agent Listing:</h5>\n    <ul>\n      <li *ngFor=\"let stats of gameStats\">\n        {{stats.alias}} : {{stats.gameScore}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

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
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
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
    function MessagesComponent(api, auth) {
        this.api = api;
        this.auth = auth;
        this.dataSource = new MsgDataSource(this.api);
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usr = this.auth.getUserDetails;
        this.dataSource.connect(this.usr._id)
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
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
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
    MsgDataSource.prototype.connect = function (id) {
        console.log(id);
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

module.exports = "<h5>Decrypt the Message</h5>\n<ng-container *ngIf=\"!solved && !failed\">\n    <form>\n        <h6>Author: </h6>\n            <p>{{message.ReceivedFrom_Alias}}</p>\n        <h6>Encrypted Message:</h6>\n            <p id=\"encMessage\">{{message.EncryptedMsg}}</p>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <h6>Choose Cipher</h6>\n                        <select class=\"menu\" id=\"cypher\">\n                            <option value=\"null\">Select Cypher</option>\n                            <option value=\"cCrypt\">Caesar Cipher</option>\n                            <option value=\"cCrypt2\">Reverse Caesar</option>\n                        </select>\n                </div>\n                <div class=\"col-sm-6\">\n                    <h6>Choose Key</h6>\n                        <select class=\"menu\" id=\"encryptionKey\">\n                            <option value=\"0\">0</option>\n                            <option value=\"1\">1</option>\n                            <option value=\"2\">2</option>\n                            <option value=\"3\">3</option>\n                            <option value=\"4\">4</option>\n                            <option value=\"5\">5</option>\n                            <option value=\"6\">6</option>\n                            <option value=\"7\">7</option>\n                            <option value=\"8\">8</option>\n                            <option value=\"9\">9</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"11\">11</option>\n                            <option value=\"12\">12</option>\n                            <option value=\"13\">13</option>\n                            <option value=\"14\">14</option>\n                            <option value=\"15\">15</option>\n                            <option value=\"16\">16</option>\n                            <option value=\"17\">17</option>\n                            <option value=\"18\">18</option>\n                            <option value=\"19\">19</option>\n                            <option value=\"20\">20</option>\n                            <option value=\"21\">21</option>\n                            <option value=\"22\">22</option>\n                            <option value=\"23\">23</option>\n                            <option value=\"24\">24</option>\n                            <option value=\"25\">25</option>\n                        </select>\n                    </div>\n                <div class=\"col-sm-6\">\n                    <h6>Attempts: {{message.AttemptsRemaining}}</h6>\n                </div>\n            </div>\n             <br/>\n                <button class=\"btn btn-outline-success btn-sm\" id=\"runCrypt\" (click)=\"doCrypt(true)\">Decrypt</button>\n                <h6>Solution: </h6>\n                <p id=\"message\"></p>\n    \n    </form>\n\n</ng-container >\n\n<ng-container *ngIf=\"solved && !failed\">\n    <h4>Congratulations! You solved it!</h4>\n    <button class=\"btn btn-outline-success btn-sm\" (click)=\"onBack()\">\n        Back to Messages\n    </button>\n</ng-container>\n<ng-container *ngIf=\"!solved && failed\">\n    <h4>You have failed!</h4>\n    <button class=\"btn btn-outline-success btn-sm\" (click)=\"onBack()\">\n        Back to Messages\n    </button>\n</ng-container>\n\n\n\n\n"

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
    }
    SolveComponent.prototype.ngOnInit = function () {
        var _this = this;
        solution: '';
        msgScore: 0;
        gameScore: 0;
        solved: false;
        failed: false;
        this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.grabData();
    };
    SolveComponent.prototype.grabData = function () {
        var _this = this;
        this.api.getRecvdMsg(this.id)
            .subscribe(function (res) {
            _this.message = res;
            _this.api.getSentMsg(_this.message.SentMsg_id)
                .subscribe(function (res) {
                _this.sentMessage = res;
            });
            _this.api.getUser(_this.message.Receiver_id)
                .subscribe(function (res) {
                _this.usr = res;
                _this.gameScore = _this.usr.gameScore;
            });
        });
    };
    SolveComponent.prototype.ngOnChanges = function () {
    };
    SolveComponent.prototype.onBack = function () {
        this.router.navigate(['messages']);
    };
    SolveComponent.prototype.doCrypt = function (isDecrypt) {
        var chooseCypher = document.getElementById("cypher").value;
        if (chooseCypher === "cCrypt") {
            this.cCrypt(isDecrypt);
        }
        if (chooseCypher === "cCrypt2") {
            this.cCrypt2(isDecrypt);
        }
        if (this.message.AttemptsRemaining === 0) {
            this.failed = true;
        }
        if (this.solution === this.message.DecryptedMsg) {
            this.message.Solved = true;
            this.sentMessage.Solved = true;
            this.solved = true;
            this.msgScore = this.message.AttemptsRemaining * 10;
            console.log('msgScore: ');
            console.log(this.msgScore);
            this.message.MessageScore = this.msgScore;
            this.sentMessage.MessageScore = this.msgScore;
            this.gameScore += this.msgScore;
            console.log('gameScore: ');
            console.log(this.gameScore);
            this.usr.gameScore = this.gameScore;
            this.updateGameScore();
            //this.message.AttemptsRemaining = 1;
            //this.sentMessage.AttemptsRemaining = 1;
        }
        this.message.AttemptsRemaining--;
        this.sentMessage.AttemptsRemaining--;
        this.api.updateRecvdMsg(this.id, this.message)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
        this.api.updateSentMsg(this.message.SentMsg_id, this.sentMessage)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    SolveComponent.prototype.updateGameScore = function () {
        this.api.updateUser(this.usr._id, this.usr)
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

module.exports = __webpack_require__(/*! /Users/David/Documents/MyCourseWork-iMac/dCrypt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map