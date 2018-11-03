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
    ApiService.prototype.getSentMsgs = function (id) {
        return this.http.get('/getmsgsapi/allforid/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteSentMsg = function (id) {
        return this.http.delete('/getmsgsapi/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteRcvdMsg = function (id) {
        return this.http.delete('/rcvdmsgsapi/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRecvdMsg = function (msg) {
        return this.http.get('/recvdmsgsapi/' + msg, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //getRecvdMsgs(): Observable<any> {
    ApiService.prototype.getRecvdMsgs = function (id) {
        return this.http.get('/recvdmsgsapi/allforid/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
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

module.exports = "\n/*MAIN CONSOLE**************************************/\n/*.left{margin-right: -10px;}*/\n.console{width:630px;height:600px;background:#8b7867;background: linear-gradient(#3c3f41, rgb(83, 83, 83));margin:100px auto 0 auto;border-radius:50px;border-bottom-right-radius:90px;border-top:2px solid #c3bfb4;border:3px solid #c3bfb4;position:relative;}\n.console-front{width:510px;height:635px;background:#8b7867;background: linear-gradient(#222222, #3c3f41);left:25px;position:absolute;top:-60px;padding-top:30px;border-radius:70px;border-top-right-radius:70px;border-bottom-right-radius:60px;border-bottom-left-radius:60px;position:relative;z-index:0;border-top:4px solid #c3bfb4;box-shadow:5px 5px 5px 0px #3f2d21;}\n.top{width:120px;height:50px;background:#111;position:absolute;top:-15px;left:165px;z-index:-4;}\n.top:after,.top:before{content:\"\";display:block;width:45px;height:30px;background:#c3bfb4;margin-top:5px;z-index:-1;position:relative;}\n.top:after{border-top-right-radius:30px;border-top-left-radius:10px;left:-1px;}\n.top:before{position:absolute;right:-1px;border-top-right-radius:10px;border-top-left-radius:30px;}\n.top-button{width:55px;height:13px;background:#000;position:absolute;right:5px;top:3px;border-top-right-radius:20px;border-top-left-radius:20px;border-top:1px solid #444;-webkit-transform:rotate(27deg);transform:rotate(27deg)}\n.top-button:after{content:\"\";display:block;width:30px;height:7px;background:linear-gradient(to right, rgba(0,0,0,0.0),rgba(255,255,255,0.8));margin-left:13px;margin-top:-7px;border-radius:2px;border:1px solid #333;}\n/*MAIN CONSOLE**************************************/\n/*SCREEN**************************************/\n.screen-border{background:#272b2a;width:470px;height:580px;margin:auto;border-radius:50px;padding-top:5%;border-top:10px solid #5a5f5b;border-bottom:10px solid #5a5f5b;border-left: 2px solid #5a5f5b;border-right: 2px solid #5a5f5b;position:relative;z-index:-5;}\n.screen{width:420px;height:520px;position:absolute;margin-left:26px;border-radius:20px;background:#000;border:5px solid rgba(170, 170, 170, 0.78);padding:5px 5px 5px 0;;overflow:hidden;}\n.screen-reflection{width:396px;height:496px;background:linear-gradient(150deg,#fff,rgba(0,0,0,30), rgba(255, 255, 255, 0.72));position:relative;z-index:10;opacity:0.14;margin:1px 1px 1px 7px;border-radius:10px;}\n/*SCREEN**************************************/\n/*SCAN ***************************************/\n.scan{width:410px;height:150px;background:linear-gradient(rgba(0,0,0,0),#7ff12a);position:absolute;-webkit-animation:scan;animation:scan;-webkit-animation-duration:8s;animation-duration:8s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;top:-185px;z-index:100;opacity:0.25;pointer-events: none;}\n/*SCAN ***************************************/\n.logo{color: red; z-index: 1000; margin-left: -475px; padding-top: 15px;}\n/*Music Buttons*******************************/\n/* .music1:before{color: red;\n  content:\"No Music\";}\n.music2:before{content:\"Track1\";}\n.music3:before{content:\"Track2\";}\n.music4:before{content:\"Track3\";}\n.music5:before{content:\"Track4\";} */\n/*Music Buttons*******************************/\n/*LINKS***************************************/\n.info0:before{content:\"Home\";}\n.info1:before{content:\"Agent\";}\n.info2:before{content:\"Challenge\";}\n.info3:before{content:\"Messages\";}\n.info4:before{content:\"Rankings\";}\n.info5:before{content:\"Logout\"}\n/* .info6:before{content:\"Sound\"} */\n/*.line2:before{content:\"line2\";}*/\n.tab-names{position:absolute;left:-40px;top:10px;}\n.tab-names li{list-style-type:none;text-align:center;padding:3.5px 0 3.5px 0;}\n/*LINKS***************************************/\n/*NAV***************************************/\nnav{height:35px;width:100%;position:absolute;top:0;left:0;border-bottom:1px solid #8df776;padding-left:0%;border-top-right-radius:20px;z-index:95;border-top-left-radius:20px; margin-top: 10px}\nnav span{text-align:center;color:#8df776;line-height:31px;font-size:10px;letter-spacing:0.3px;margin-left:15px;margin-top:500px;font-weight:300;}\nnav p{margin:-10px 0 0 0;height:25px;}\n.game-text{color:#8df776; z-index: 100;}\n/*NAV***************************************/\n/*DESIGN***************************************/\n.left-speakers{width:45px;position:absolute;top:137px;left:20px}\n.left-speakers:before{width:60px;height:265px;content:\"\";display:block;background: linear-gradient(#806f5d,#726350);position:absolute;left:0px;top:-30px;border-bottom-left-radius:150px;border-top-left-radius:20px;border-top:2px solid #c3bfb4;border-bottom:2px solid #4f3f32;}\n.left-speaker{content:\"\";display:block;width:80%;height:5px;background:rgba(0,0,0,0.2);margin-bottom:10px;border-bottom:2px solid #978175;border-top-right-radius:2px;border-bottom-right-radius:3px;position:relative;z-index:3;}\n.speakers{width:40px;position:absolute;top:160px;right:0;z-index:99;}\n.speaker{width:40px;height:5px;background:rgba(0,0,0,0.2);margin-bottom:8px;border-bottom:2px solid #978175;border-top-left-radius:2px;border-bottom-left-radius:3px;}\n.speaker:after{width:23px;height:5px;background:rgba(0,0,0,0.2);content:\"\";display:block;border-bottom:2px solid #978175;margin-left:-40px;border-radius:3px;}\n.wheel{width:45px;height:110px;background:#000;position:absolute;top:-2px;right:-10px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-top:2px solid #aaaaa8;border-left:2px solid #392c24;}\n.wheel-shadow{width:48px;height:8px;background:#333;border-radius:100px;margin-left:3px;margin-top:11px;background: linear-gradient(#000,#222);border: 1px solid rgba(157, 170, 163, 0.61)}\n.wrapper{margin:auto;}\n/* .bottom-switch{} */\n.power{width:32px;height:31px;background:#000;position:absolute;bottom:23px;right:65px;border-radius:150px;z-index:99;}\n.power:after{content:\"\";display:block;width:50px;height:15px;background:radial-gradient(white,yellow,orange,red);border-radius:150px;margin-left:23px;margin-top:-35px;-webkit-animation: flicker;animation: flicker; -webkit-animation-duration: 3.2s; animation-duration: 3.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}\n.bottom-button{background:#000;position:absolute;right:30px;bottom:68px;width:37px;height:25px;border-top-left-radius:60px;border-top-right-radius:60px;}\n.bottom-button:after{content:\"\";display:block;width:100%;height:20px;background:#000;position:relative;margin-top:5px;z-index:0;width:37px;height:35px;border-radius:150px;border-top:1px solid #444;}\n.bottom-button:before{content:\"\";display:block;width:15px;height:15px;border-radius:150px;top:17px;left:11px;border-bottom:1px solid #555;position:absolute;z-index:3;}\n.top-right{width:140px;height:100px;background: linear-gradient(#3c3f41, #2b2b2b);position:absolute;top:-37px;right:5px;border-top-left-radius:30px;border-top-right-radius:40px;border-top:3px solid #c3bfb4;z-index:-1;}\n/*RADIO BUTTONS********************************/\n.radios{margin-top: 0px; margin-left: 0px; content: \"more\"}\n/*#link:before{content: \"link\";margin-left: -20px;margin-top: -100px;}*/\n.audio{margin-left: -27px; margin-top: 10px; color: darkorange;\n    text-shadow: 2px 2px 2px black, 0 0 1em darkorange, 0 0 0.2em darkorange; text-transform:uppercase;}\n.music1:before{content:\"none\"; margin-left: -54px; font-size: 9px; margin-top: -30px; color: darkorange;\n\n  text-shadow: 2px 2px 2px black, 0 0 1em darkorange, 0 0 0.2em darkorange; text-transform:uppercase;}\n.music2:before{content:\"fallout\"; margin-left: -54px; font-size: 9px; margin-top: -20px; color: darkorange;\n  text-shadow: 2px 2px 2px black, 0 0 1em darkorange, 0 0 0.2em darkorange; text-transform:uppercase;}\n.music3:before{content:\"end of line\"; margin-left: -54px; font-size: 7px; margin-top: -20px; color: darkorange;\n  text-shadow: 2px 2px 2px black, 0 0 1em darkorange, 0 0 0.2em darkorange; text-transform:uppercase;}\n.music4:before{content:\"disc war\"; margin-left: -54px; font-size: 9px; margin-top: -20px; color: darkorange;\n  text-shadow: 2px 2px 2px black, 0 0 1em darkorange, 0 0 0.2em darkorange; text-transform:uppercase;}\n.music5:before{content:\"armory\"; margin-left: -54px; font-size: 9px; margin-top: -20px; color: darkorange;\n  text-shadow: 2px 2px 2px black, 0 0 1em darkorange, 0 0 0.2em darkorange; text-transform:uppercase;}\ninput {\n  -webkit-appearance: none; /* remove default */display: block;margin: 16px;width: 14px;height: 30px;border-radius: 12px;cursor: pointer;vertical-align: middle;\n  box-shadow: hsla(0,0%,100%,.15) 0 1px 1px, inset hsla(0,0%,0%,.5) 0 0 0 1px;\n  background-color: hsla(0,0%,0%,.2);\n  background-image: -webkit-radial-gradient( hsla(200,100%,90%,1) 0%, hsla(200,100%,70%,1) 15%, hsla(200,100%,60%,.3) 28%, hsla(200,100%,30%,0) 70% );\n  background-repeat: no-repeat;\n  -webkit-transition: background-position .15s cubic-bezier(.8, 0, 1, 1),\n  -webkit-transform .25s cubic-bezier(.8, 0, 1, 1);\n  outline: none;\n}\ninput:checked {\n  -webkit-transition: background-position .2s .15s cubic-bezier(0, 0, .2, 1),\n  -webkit-transform .25s cubic-bezier(0, 0, .2, 1);\n}\ninput:active {\n  -webkit-transform: scale(1.5);\n  -webkit-transition: -webkit-transform .1s cubic-bezier(0, 0, .2, 1);\n}\n/* The up/down direction logic */\ninput,\ninput:active {\n  background-position: 0 24px;\n}\ninput:checked {\n  background-position: 0 0;\n}\ninput:checked ~ input,\ninput:checked ~ input:active {\n  background-position: 0 -24px;\n}\n/*RADIO BUTTONS********************************/\n/*SCREWS***************************************/\n#stl{margin-left: -583px; margin-top: -460px;position: absolute;}\n#str{margin-left: -30px; margin-top: -460px;position: absolute;}\n#sbr{margin-left: -30px; margin-top: 70px;position: absolute;}\n#sbl{margin-left: -570px; margin-top: 70px;position: absolute;}\n/*SCREWS***************************************/\n/*DESIGN***************************************/\n/*POWER*/\n@-webkit-keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n@keyframes flicker{\n  0%{box-shadow:0px 0px 5px 0px red;}\n  5%{box-shadow:0px 0px 30px 2px red;}\n  60%{box-shadow:0px 0px 30px 2px red;}\n  80%{box-shadow:0px 0px 10px 0px orange;}\n  90%{box-shadow:0px 0px 30px 2px red;}\n  100%{box-shadow:0px 0px 0px 0px red;}\n}\n/*BACK GROUND SCANNER*/\n@-webkit-keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n@keyframes scan{\n0{top:-80px;}\n70%{top:500px;}\n100%{top:1000px;}\n}\n/*PLAYGROUND*************************/\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFEQUFxRDtBQUNyRCwrQkFBK0I7QUFDL0IsU0FBUyxZQUFZLGFBQWEsbUJBQW1CLHNEQUFzRCx5QkFBeUIsbUJBQW1CLGdDQUFnQyw2QkFBNkIseUJBQXlCLGtCQUFrQixDQUFDO0FBQ2hRLGVBQWUsWUFBWSxhQUFhLG1CQUFtQiw4Q0FBOEMsVUFBVSxrQkFBa0IsVUFBVSxpQkFBaUIsbUJBQW1CLDZCQUE2QixnQ0FBZ0MsK0JBQStCLGtCQUFrQixVQUFVLDZCQUE2QixtQ0FBbUMsQ0FBQztBQUM1VyxLQUFLLFlBQVksWUFBWSxnQkFBZ0Isa0JBQWtCLFVBQVUsV0FBVyxXQUFXLENBQUM7QUFDaEcsdUJBQXVCLFdBQVcsY0FBYyxXQUFXLFlBQVksbUJBQW1CLGVBQWUsV0FBVyxrQkFBa0IsQ0FBQztBQUN2SSxXQUFXLDZCQUE2Qiw0QkFBNEIsVUFBVSxDQUFDO0FBQy9FLFlBQVksa0JBQWtCLFdBQVcsNkJBQTZCLDRCQUE0QixDQUFDO0FBQ25HLFlBQVksV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsVUFBVSxRQUFRLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLGdDQUF1QixBQUF2Qix1QkFBdUIsQ0FBQztBQUNsTSxrQkFBa0IsV0FBVyxjQUFjLFdBQVcsV0FBVyw0RUFBNEUsaUJBQWlCLGdCQUFnQixrQkFBa0Isc0JBQXNCLENBQUM7QUFDdk4scURBQXFEO0FBRXJELCtDQUErQztBQUMvQyxlQUFlLG1CQUFtQixZQUFZLGFBQWEsWUFBWSxtQkFBbUIsZUFBZSw4QkFBOEIsaUNBQWlDLCtCQUErQixnQ0FBZ0Msa0JBQWtCLFdBQVcsQ0FBQztBQUNyUSxRQUFRLFlBQVksYUFBYSxrQkFBa0IsaUJBQWlCLG1CQUFtQixnQkFBZ0IsMkNBQTJDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDO0FBQzFMLG1CQUFtQixZQUFZLGFBQWEsa0ZBQWtGLGtCQUFrQixXQUFXLGFBQWEsdUJBQXVCLG1CQUFtQixDQUFDO0FBQ25OLCtDQUErQztBQUUvQywrQ0FBK0M7QUFDL0MsTUFBTSxZQUFZLGFBQWEsa0RBQWtELGtCQUFrQix1QkFBZSxBQUFmLGVBQWUsOEJBQXNCLEFBQXRCLHNCQUFzQiw0Q0FBb0MsQUFBcEMsb0NBQW9DLFdBQVcsWUFBWSxhQUFhLHFCQUFxQixDQUFDO0FBQ3RPLCtDQUErQztBQUMvQyxNQUFNLFdBQVcsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7QUFDekUsK0NBQStDO0FBQy9DOzs7OztvQ0FLb0M7QUFDcEMsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQyxjQUFjLGVBQWUsQ0FBQztBQUM5QixjQUFjLGdCQUFnQixDQUFDO0FBQy9CLGNBQWMsb0JBQW9CLENBQUM7QUFDbkMsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLG1CQUFtQixDQUFDO0FBQ2xDLGNBQWMsZ0JBQWdCLENBQUM7QUFDL0Isb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQyxXQUFXLGtCQUFrQixXQUFXLFNBQVMsQ0FBQztBQUNsRCxjQUFjLHFCQUFxQixrQkFBa0Isd0JBQXdCLENBQUM7QUFDOUUsK0NBQStDO0FBRS9DLDZDQUE2QztBQUM3QyxJQUFJLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxPQUFPLGdDQUFnQyxnQkFBZ0IsNkJBQTZCLFdBQVcsNEJBQTRCLENBQUMsZ0JBQWdCLENBQUM7QUFDaE0sU0FBUyxrQkFBa0IsY0FBYyxpQkFBaUIsZUFBZSxxQkFBcUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUNqSixNQUFNLG1CQUFtQixZQUFZLENBQUM7QUFDdEMsV0FBVyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3hDLDZDQUE2QztBQUU3QyxnREFBZ0Q7QUFDaEQsZUFBZSxXQUFXLGtCQUFrQixVQUFVLFNBQVMsQ0FBQztBQUNoRSxzQkFBc0IsV0FBVyxhQUFhLFdBQVcsY0FBYyw2Q0FBNkMsa0JBQWtCLFNBQVMsVUFBVSxnQ0FBZ0MsNEJBQTRCLDZCQUE2QixnQ0FBZ0MsQ0FBQztBQUNuUixjQUFjLFdBQVcsY0FBYyxVQUFVLFdBQVcsMkJBQTJCLG1CQUFtQixnQ0FBZ0MsNEJBQTRCLCtCQUErQixrQkFBa0IsVUFBVSxDQUFDO0FBRWxPLFVBQVUsV0FBVyxrQkFBa0IsVUFBVSxRQUFRLFdBQVcsQ0FBQztBQUNyRSxTQUFTLFdBQVcsV0FBVywyQkFBMkIsa0JBQWtCLGdDQUFnQywyQkFBMkIsOEJBQThCLENBQUM7QUFDdEssZUFBZSxXQUFXLFdBQVcsMkJBQTJCLFdBQVcsY0FBYyxnQ0FBZ0Msa0JBQWtCLGtCQUFrQixDQUFDO0FBRTlKLE9BQU8sV0FBVyxhQUFhLGdCQUFnQixrQkFBa0IsU0FBUyxZQUFZLDZCQUE2QixnQ0FBZ0MsNkJBQTZCLDhCQUE4QixDQUFDO0FBQy9NLGNBQWMsV0FBVyxXQUFXLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGdCQUFnQix1Q0FBdUMsMkNBQTJDLENBQUM7QUFFM0wsU0FBUyxZQUFZLENBQUM7QUFFdEIsc0JBQXNCO0FBRXRCLE9BQU8sV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsWUFBWSxXQUFXLG9CQUFvQixXQUFXLENBQUM7QUFDdkgsYUFBYSxXQUFXLGNBQWMsV0FBVyxZQUFZLG9EQUFvRCxvQkFBb0IsaUJBQWlCLGlCQUFpQiwyQkFBbUIsQUFBbkIsbUJBQW1CLENBQUMsaUNBQXlCLENBQXpCLHlCQUF5Qiw0Q0FBb0MsQUFBcEMsb0NBQW9DLENBQUM7QUFFelAsZUFBZSxnQkFBZ0Isa0JBQWtCLFdBQVcsWUFBWSxXQUFXLFlBQVksNEJBQTRCLDZCQUE2QixDQUFDO0FBQ3pKLHFCQUFxQixXQUFXLGNBQWMsV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsZUFBZSxVQUFVLFdBQVcsWUFBWSxvQkFBb0IsMEJBQTBCLENBQUM7QUFDdE0sc0JBQXNCLFdBQVcsY0FBYyxXQUFXLFlBQVksb0JBQW9CLFNBQVMsVUFBVSw2QkFBNkIsa0JBQWtCLFVBQVUsQ0FBQztBQUV2SyxXQUFXLFlBQVksYUFBYSw4Q0FBOEMsa0JBQWtCLFVBQVUsVUFBVSw0QkFBNEIsNkJBQTZCLDZCQUE2QixXQUFXLENBQUM7QUFFMU4sZ0RBQWdEO0FBQ2hELFFBQVEsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDO0FBQzNELHdFQUF3RTtBQUV4RSxPQUFPLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLGtCQUFrQjtJQUMzRCx5RUFBeUUsQ0FBQyx5QkFBeUIsQ0FBQztBQUV4RyxlQUFlLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCOztFQUV0Ryx5RUFBeUUsQ0FBQyx5QkFBeUIsQ0FBQztBQUV0RyxlQUFlLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0I7RUFDekcseUVBQXlFLENBQUMseUJBQXlCLENBQUM7QUFFdEcsZUFBZSxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCO0VBQzdHLHlFQUF5RSxDQUFDLHlCQUF5QixDQUFDO0FBRXRHLGVBQWUsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQjtFQUMxRyx5RUFBeUUsQ0FBQyx5QkFBeUIsQ0FBQztBQUV0RyxlQUFlLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0I7RUFDeEcseUVBQXlFLENBQUMseUJBQXlCLENBQUM7QUFFdEc7RUFDRSx5QkFBeUIsQ0FBQyxvQkFBb0IsZUFBZSxhQUFhLFlBQVksYUFBYSxvQkFBb0IsZ0JBQWdCLHVCQUF1QjtFQUM5Siw0RUFBNEU7RUFDNUUsbUNBQW1DO0VBQ25DLG9KQUFvSjtFQUNwSiw2QkFBNkI7RUFDN0I7bURBQ2lEO0VBQ2pELGNBQWM7Q0FDZjtBQUNEO0VBQ0U7bURBQ2lEO0NBQ2xEO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsb0VBQW9FO0NBQ3JFO0FBRUQsaUNBQWlDO0FBRWpDOztFQUVFLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UseUJBQXlCO0NBQzFCO0FBQ0Q7O0VBRUUsNkJBQTZCO0NBQzlCO0FBQ0QsZ0RBQWdEO0FBRWhELGdEQUFnRDtBQUNoRCxLQUFLLG9CQUFvQixDQUFDLG1CQUFtQixtQkFBbUIsQ0FBQztBQUNqRSxLQUFLLG1CQUFtQixDQUFDLG1CQUFtQixtQkFBbUIsQ0FBQztBQUNoRSxLQUFLLG1CQUFtQixDQUFDLGlCQUFpQixtQkFBbUIsQ0FBQztBQUM5RCxLQUFLLG9CQUFvQixDQUFDLGlCQUFpQixtQkFBbUIsQ0FBQztBQUMvRCxnREFBZ0Q7QUFFaEQsZ0RBQWdEO0FBRWhELFNBQVM7QUFDVDtFQUNFLEdBQUcsK0JBQStCLENBQUM7RUFDbkMsR0FBRyxnQ0FBZ0MsQ0FBQztFQUNwQyxJQUFJLGdDQUFnQyxDQUFDO0VBQ3JDLElBQUksbUNBQW1DLENBQUM7RUFDeEMsSUFBSSxnQ0FBZ0MsQ0FBQztFQUNyQyxLQUFLLCtCQUErQixDQUFDO0NBQ3RDO0FBUEQ7RUFDRSxHQUFHLCtCQUErQixDQUFDO0VBQ25DLEdBQUcsZ0NBQWdDLENBQUM7RUFDcEMsSUFBSSxnQ0FBZ0MsQ0FBQztFQUNyQyxJQUFJLG1DQUFtQyxDQUFDO0VBQ3hDLElBQUksZ0NBQWdDLENBQUM7RUFDckMsS0FBSywrQkFBK0IsQ0FBQztDQUN0QztBQUVELHVCQUF1QjtBQUN2QjtBQUNBLEVBQUUsVUFBVSxDQUFDO0FBQ2IsSUFBSSxVQUFVLENBQUM7QUFDZixLQUFLLFdBQVcsQ0FBQztDQUNoQjtBQUpEO0FBQ0EsRUFBRSxVQUFVLENBQUM7QUFDYixJQUFJLFVBQVUsQ0FBQztBQUNmLEtBQUssV0FBVyxDQUFDO0NBQ2hCO0FBSUQsc0NBQXNDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qTUFJTiBDT05TT0xFKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKi5sZWZ0e21hcmdpbi1yaWdodDogLTEwcHg7fSovXG4uY29uc29sZXt3aWR0aDo2MzBweDtoZWlnaHQ6NjAwcHg7YmFja2dyb3VuZDojOGI3ODY3O2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjM2MzZjQxLCByZ2IoODMsIDgzLCA4MykpO21hcmdpbjoxMDBweCBhdXRvIDAgYXV0bztib3JkZXItcmFkaXVzOjUwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6OTBweDtib3JkZXItdG9wOjJweCBzb2xpZCAjYzNiZmI0O2JvcmRlcjozcHggc29saWQgI2MzYmZiNDtwb3NpdGlvbjpyZWxhdGl2ZTt9XG4uY29uc29sZS1mcm9udHt3aWR0aDo1MTBweDtoZWlnaHQ6NjM1cHg7YmFja2dyb3VuZDojOGI3ODY3O2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjIyMjIyLCAjM2MzZjQxKTtsZWZ0OjI1cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOi02MHB4O3BhZGRpbmctdG9wOjMwcHg7Ym9yZGVyLXJhZGl1czo3MHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjcwcHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NjBweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjYwcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDowO2JvcmRlci10b3A6NHB4IHNvbGlkICNjM2JmYjQ7Ym94LXNoYWRvdzo1cHggNXB4IDVweCAwcHggIzNmMmQyMTt9XG4udG9we3dpZHRoOjEyMHB4O2hlaWdodDo1MHB4O2JhY2tncm91bmQ6IzExMTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTE1cHg7bGVmdDoxNjVweDt6LWluZGV4Oi00O31cbi50b3A6YWZ0ZXIsLnRvcDpiZWZvcmV7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6NDVweDtoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kOiNjM2JmYjQ7bWFyZ2luLXRvcDo1cHg7ei1pbmRleDotMTtwb3NpdGlvbjpyZWxhdGl2ZTt9XG4udG9wOmFmdGVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjMwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O2xlZnQ6LTFweDt9XG4udG9wOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O31cbi50b3AtYnV0dG9ue3dpZHRoOjU1cHg7aGVpZ2h0OjEzcHg7YmFja2dyb3VuZDojMDAwO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjVweDt0b3A6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjIwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICM0NDQ7dHJhbnNmb3JtOnJvdGF0ZSgyN2RlZyl9XG4udG9wLWJ1dHRvbjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDozMHB4O2hlaWdodDo3cHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMC4wKSxyZ2JhKDI1NSwyNTUsMjU1LDAuOCkpO21hcmdpbi1sZWZ0OjEzcHg7bWFyZ2luLXRvcDotN3B4O2JvcmRlci1yYWRpdXM6MnB4O2JvcmRlcjoxcHggc29saWQgIzMzMzt9XG4vKk1BSU4gQ09OU09MRSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKlNDUkVFTioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnNjcmVlbi1ib3JkZXJ7YmFja2dyb3VuZDojMjcyYjJhO3dpZHRoOjQ3MHB4O2hlaWdodDo1ODBweDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjUwcHg7cGFkZGluZy10b3A6NSU7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICM1YTVmNWI7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICM1YTVmNWI7Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWE1ZjViO2JvcmRlci1yaWdodDogMnB4IHNvbGlkICM1YTVmNWI7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDotNTt9XG4uc2NyZWVue3dpZHRoOjQyMHB4O2hlaWdodDo1MjBweDtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tbGVmdDoyNnB4O2JvcmRlci1yYWRpdXM6MjBweDtiYWNrZ3JvdW5kOiMwMDA7Ym9yZGVyOjVweCBzb2xpZCByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuNzgpO3BhZGRpbmc6NXB4IDVweCA1cHggMDs7b3ZlcmZsb3c6aGlkZGVuO31cbi5zY3JlZW4tcmVmbGVjdGlvbnt3aWR0aDozOTZweDtoZWlnaHQ6NDk2cHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCNmZmYscmdiYSgwLDAsMCwzMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MikpO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTA7b3BhY2l0eTowLjE0O21hcmdpbjoxcHggMXB4IDFweCA3cHg7Ym9yZGVyLXJhZGl1czoxMHB4O31cbi8qU0NSRUVOKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qU0NBTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uc2Nhbnt3aWR0aDo0MTBweDtoZWlnaHQ6MTUwcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwjN2ZmMTJhKTtwb3NpdGlvbjphYnNvbHV0ZTthbmltYXRpb246c2NhbjthbmltYXRpb24tZHVyYXRpb246OHM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7dG9wOi0xODVweDt6LWluZGV4OjEwMDtvcGFjaXR5OjAuMjU7cG9pbnRlci1ldmVudHM6IG5vbmU7fVxuLypTQ0FOICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5sb2dve2NvbG9yOiByZWQ7IHotaW5kZXg6IDEwMDA7IG1hcmdpbi1sZWZ0OiAtNDc1cHg7IHBhZGRpbmctdG9wOiAxNXB4O31cbi8qTXVzaWMgQnV0dG9ucyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiAubXVzaWMxOmJlZm9yZXtjb2xvcjogcmVkO1xuICBjb250ZW50OlwiTm8gTXVzaWNcIjt9XG4ubXVzaWMyOmJlZm9yZXtjb250ZW50OlwiVHJhY2sxXCI7fVxuLm11c2ljMzpiZWZvcmV7Y29udGVudDpcIlRyYWNrMlwiO31cbi5tdXNpYzQ6YmVmb3Jle2NvbnRlbnQ6XCJUcmFjazNcIjt9XG4ubXVzaWM1OmJlZm9yZXtjb250ZW50OlwiVHJhY2s0XCI7fSAqL1xuLypNdXNpYyBCdXR0b25zKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qTElOS1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uaW5mbzA6YmVmb3Jle2NvbnRlbnQ6XCJIb21lXCI7fVxuLmluZm8xOmJlZm9yZXtjb250ZW50OlwiQWdlbnRcIjt9XG4uaW5mbzI6YmVmb3Jle2NvbnRlbnQ6XCJDaGFsbGVuZ2VcIjt9XG4uaW5mbzM6YmVmb3Jle2NvbnRlbnQ6XCJNZXNzYWdlc1wiO31cbi5pbmZvNDpiZWZvcmV7Y29udGVudDpcIlJhbmtpbmdzXCI7fVxuLmluZm81OmJlZm9yZXtjb250ZW50OlwiTG9nb3V0XCJ9XG4vKiAuaW5mbzY6YmVmb3Jle2NvbnRlbnQ6XCJTb3VuZFwifSAqL1xuLyoubGluZTI6YmVmb3Jle2NvbnRlbnQ6XCJsaW5lMlwiO30qL1xuLnRhYi1uYW1lc3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00MHB4O3RvcDoxMHB4O31cbi50YWItbmFtZXMgbGl7bGlzdC1zdHlsZS10eXBlOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzozLjVweCAwIDMuNXB4IDA7fVxuLypMSU5LUyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypOQVYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5uYXZ7aGVpZ2h0OjM1cHg7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzhkZjc3NjtwYWRkaW5nLWxlZnQ6MCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweDt6LWluZGV4Ojk1O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweDsgbWFyZ2luLXRvcDogMTBweH1cbm5hdiBzcGFue3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM4ZGY3NzY7bGluZS1oZWlnaHQ6MzFweDtmb250LXNpemU6MTBweDtsZXR0ZXItc3BhY2luZzowLjNweDttYXJnaW4tbGVmdDoxNXB4O21hcmdpbi10b3A6NTAwcHg7Zm9udC13ZWlnaHQ6MzAwO31cbm5hdiBwe21hcmdpbjotMTBweCAwIDAgMDtoZWlnaHQ6MjVweDt9XG4uZ2FtZS10ZXh0e2NvbG9yOiM4ZGY3NzY7IHotaW5kZXg6IDEwMDt9XG4vKk5BVioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypERVNJR04qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubGVmdC1zcGVha2Vyc3t3aWR0aDo0NXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMzdweDtsZWZ0OjIwcHh9XG4ubGVmdC1zcGVha2VyczpiZWZvcmV7d2lkdGg6NjBweDtoZWlnaHQ6MjY1cHg7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4MDZmNWQsIzcyNjM1MCk7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowcHg7dG9wOi0zMHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTUwcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MnB4IHNvbGlkICNjM2JmYjQ7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzRmM2YzMjt9XG4ubGVmdC1zcGVha2Vye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjgwJTtoZWlnaHQ6NXB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO21hcmdpbi1ib3R0b206MTBweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjOTc4MTc1O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjJweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDozO31cblxuLnNwZWFrZXJze3dpZHRoOjQwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE2MHB4O3JpZ2h0OjA7ei1pbmRleDo5OTt9XG4uc3BlYWtlcnt3aWR0aDo0MHB4O2hlaWdodDo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7bWFyZ2luLWJvdHRvbTo4cHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzk3ODE3NTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjJweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDt9XG4uc3BlYWtlcjphZnRlcnt3aWR0aDoyM3B4O2hlaWdodDo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzk3ODE3NTttYXJnaW4tbGVmdDotNDBweDtib3JkZXItcmFkaXVzOjNweDt9XG5cbi53aGVlbHt3aWR0aDo0NXB4O2hlaWdodDoxMTBweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0ycHg7cmlnaHQ6LTEwcHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4O2JvcmRlci10b3A6MnB4IHNvbGlkICNhYWFhYTg7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkICMzOTJjMjQ7fVxuLndoZWVsLXNoYWRvd3t3aWR0aDo0OHB4O2hlaWdodDo4cHg7YmFja2dyb3VuZDojMzMzO2JvcmRlci1yYWRpdXM6MTAwcHg7bWFyZ2luLWxlZnQ6M3B4O21hcmdpbi10b3A6MTFweDtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMCwjMjIyKTtib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NywgMTcwLCAxNjMsIDAuNjEpfVxuXG4ud3JhcHBlcnttYXJnaW46YXV0bzt9XG5cbi8qIC5ib3R0b20tc3dpdGNoe30gKi9cblxuLnBvd2Vye3dpZHRoOjMycHg7aGVpZ2h0OjMxcHg7YmFja2dyb3VuZDojMDAwO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToyM3B4O3JpZ2h0OjY1cHg7Ym9yZGVyLXJhZGl1czoxNTBweDt6LWluZGV4Ojk5O31cbi5wb3dlcjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDo1MHB4O2hlaWdodDoxNXB4O2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KHdoaXRlLHllbGxvdyxvcmFuZ2UscmVkKTtib3JkZXItcmFkaXVzOjE1MHB4O21hcmdpbi1sZWZ0OjIzcHg7bWFyZ2luLXRvcDotMzVweDthbmltYXRpb246IGZsaWNrZXI7IGFuaW1hdGlvbi1kdXJhdGlvbjogMy4yczthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTt9XG5cbi5ib3R0b20tYnV0dG9ue2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozMHB4O2JvdHRvbTo2OHB4O3dpZHRoOjM3cHg7aGVpZ2h0OjI1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo2MHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjYwcHg7fVxuLmJvdHRvbS1idXR0b246YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MjBweDtiYWNrZ3JvdW5kOiMwMDA7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDo1cHg7ei1pbmRleDowO3dpZHRoOjM3cHg7aGVpZ2h0OjM1cHg7Ym9yZGVyLXJhZGl1czoxNTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjNDQ0O31cbi5ib3R0b20tYnV0dG9uOmJlZm9yZXtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2JvcmRlci1yYWRpdXM6MTUwcHg7dG9wOjE3cHg7bGVmdDoxMXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICM1NTU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDozO31cblxuLnRvcC1yaWdodHt3aWR0aDoxNDBweDtoZWlnaHQ6MTAwcHg7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzYzNmNDEsICMyYjJiMmIpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMzdweDtyaWdodDo1cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjQwcHg7Ym9yZGVyLXRvcDozcHggc29saWQgI2MzYmZiNDt6LWluZGV4Oi0xO31cblxuLypSQURJTyBCVVRUT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ucmFkaW9ze21hcmdpbi10b3A6IDBweDsgbWFyZ2luLWxlZnQ6IDBweDsgY29udGVudDogXCJtb3JlXCJ9XG4vKiNsaW5rOmJlZm9yZXtjb250ZW50OiBcImxpbmtcIjttYXJnaW4tbGVmdDogLTIwcHg7bWFyZ2luLXRvcDogLTEwMHB4O30qL1xuXG4uYXVkaW97bWFyZ2luLWxlZnQ6IC0yN3B4OyBtYXJnaW4tdG9wOiAxMHB4OyBjb2xvcjogZGFya29yYW5nZTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gZGFya29yYW5nZSwgMCAwIDAuMmVtIGRhcmtvcmFuZ2U7IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt9XG5cbi5tdXNpYzE6YmVmb3Jle2NvbnRlbnQ6XCJub25lXCI7IG1hcmdpbi1sZWZ0OiAtNTRweDsgZm9udC1zaXplOiA5cHg7IG1hcmdpbi10b3A6IC0zMHB4OyBjb2xvcjogZGFya29yYW5nZTtcblxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gZGFya29yYW5nZSwgMCAwIDAuMmVtIGRhcmtvcmFuZ2U7IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt9XG5cbi5tdXNpYzI6YmVmb3Jle2NvbnRlbnQ6XCJmYWxsb3V0XCI7IG1hcmdpbi1sZWZ0OiAtNTRweDsgZm9udC1zaXplOiA5cHg7IG1hcmdpbi10b3A6IC0yMHB4OyBjb2xvcjogZGFya29yYW5nZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrLCAwIDAgMWVtIGRhcmtvcmFuZ2UsIDAgMCAwLjJlbSBkYXJrb3JhbmdlOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7fVxuXG4ubXVzaWMzOmJlZm9yZXtjb250ZW50OlwiZW5kIG9mIGxpbmVcIjsgbWFyZ2luLWxlZnQ6IC01NHB4OyBmb250LXNpemU6IDdweDsgbWFyZ2luLXRvcDogLTIwcHg7IGNvbG9yOiBkYXJrb3JhbmdlO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gZGFya29yYW5nZSwgMCAwIDAuMmVtIGRhcmtvcmFuZ2U7IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt9XG5cbi5tdXNpYzQ6YmVmb3Jle2NvbnRlbnQ6XCJkaXNjIHdhclwiOyBtYXJnaW4tbGVmdDogLTU0cHg7IGZvbnQtc2l6ZTogOXB4OyBtYXJnaW4tdG9wOiAtMjBweDsgY29sb3I6IGRhcmtvcmFuZ2U7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaywgMCAwIDFlbSBkYXJrb3JhbmdlLCAwIDAgMC4yZW0gZGFya29yYW5nZTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO31cblxuLm11c2ljNTpiZWZvcmV7Y29udGVudDpcImFybW9yeVwiOyBtYXJnaW4tbGVmdDogLTU0cHg7IGZvbnQtc2l6ZTogOXB4OyBtYXJnaW4tdG9wOiAtMjBweDsgY29sb3I6IGRhcmtvcmFuZ2U7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaywgMCAwIDFlbSBkYXJrb3JhbmdlLCAwIDAgMC4yZW0gZGFya29yYW5nZTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO31cblxuaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIHJlbW92ZSBkZWZhdWx0ICovZGlzcGxheTogYmxvY2s7bWFyZ2luOiAxNnB4O3dpZHRoOiAxNHB4O2hlaWdodDogMzBweDtib3JkZXItcmFkaXVzOiAxMnB4O2N1cnNvcjogcG9pbnRlcjt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3gtc2hhZG93OiBoc2xhKDAsMCUsMTAwJSwuMTUpIDAgMXB4IDFweCwgaW5zZXQgaHNsYSgwLDAlLDAlLC41KSAwIDAgMCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSwwJSwuMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCBoc2xhKDIwMCwxMDAlLDkwJSwxKSAwJSwgaHNsYSgyMDAsMTAwJSw3MCUsMSkgMTUlLCBoc2xhKDIwMCwxMDAlLDYwJSwuMykgMjglLCBoc2xhKDIwMCwxMDAlLDMwJSwwKSA3MCUgKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgY3ViaWMtYmV6aWVyKC44LCAwLCAxLCAxKSxcbiAgLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjgsIDAsIDEsIDEpO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQ6Y2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAuMnMgLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpLFxuICAtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7XG59XG5pbnB1dDphY3RpdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTtcbn1cblxuLyogVGhlIHVwL2Rvd24gZGlyZWN0aW9uIGxvZ2ljICovXG5cbmlucHV0LFxuaW5wdXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAyNHB4O1xufVxuaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cbmlucHV0OmNoZWNrZWQgfiBpbnB1dCxcbmlucHV0OmNoZWNrZWQgfiBpbnB1dDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yNHB4O1xufVxuLypSQURJTyBCVVRUT05TKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qU0NSRVdTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuI3N0bHttYXJnaW4tbGVmdDogLTU4M3B4OyBtYXJnaW4tdG9wOiAtNDYwcHg7cG9zaXRpb246IGFic29sdXRlO31cbiNzdHJ7bWFyZ2luLWxlZnQ6IC0zMHB4OyBtYXJnaW4tdG9wOiAtNDYwcHg7cG9zaXRpb246IGFic29sdXRlO31cbiNzYnJ7bWFyZ2luLWxlZnQ6IC0zMHB4OyBtYXJnaW4tdG9wOiA3MHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XG4jc2Jse21hcmdpbi1sZWZ0OiAtNTcwcHg7IG1hcmdpbi10b3A6IDcwcHg7cG9zaXRpb246IGFic29sdXRlO31cbi8qU0NSRVdTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKkRFU0lHTioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLypQT1dFUiovXG5Aa2V5ZnJhbWVzIGZsaWNrZXJ7XG4gIDAle2JveC1zaGFkb3c6MHB4IDBweCA1cHggMHB4IHJlZDt9XG4gIDUle2JveC1zaGFkb3c6MHB4IDBweCAzMHB4IDJweCByZWQ7fVxuICA2MCV7Ym94LXNoYWRvdzowcHggMHB4IDMwcHggMnB4IHJlZDt9XG4gIDgwJXtib3gtc2hhZG93OjBweCAwcHggMTBweCAwcHggb3JhbmdlO31cbiAgOTAle2JveC1zaGFkb3c6MHB4IDBweCAzMHB4IDJweCByZWQ7fVxuICAxMDAle2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJlZDt9XG59XG5cbi8qQkFDSyBHUk9VTkQgU0NBTk5FUiovXG5Aa2V5ZnJhbWVzIHNjYW57XG4we3RvcDotODBweDt9XG43MCV7dG9wOjUwMHB4O31cbjEwMCV7dG9wOjEwMDBweDt9XG59XG5cblxuXG4vKlBMQVlHUk9VTkQqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"console\">\n  <div class=\"console-front\">\n    <div class=\"screen-border\">\n      <div class=\"screen-border-rim\">\n        <div class=\"screen\">\n          <div class=\"screen-reflection\"></div>\n          <div class=\"scan\"></div>\n\n          <nav>\n            <span class=\"info0\" (click)=\"buttonSound()\" [routerLink]=\"accessEnabled ? '/home' : '/login'\"></span>\n            <span class=\"info1\" (click)=\"buttonSound()\" [routerLink]=\"accessEnabled ? '/profile' : '/login'\"></span>\n            <span class=\"info2\" (click)=\"buttonSound()\" [routerLink]=\"accessEnabled ? '/challenge' : '/login'\"></span>\n            <span class=\"info3\" (click)=\"buttonSound()\" [routerLink]=\"accessEnabled ? '/messages' : '/login'\"></span>\n            <span class=\"info4\" (click)=\"buttonSound()\" [routerLink]=\"accessEnabled ? '/leaderboard' : '/login'\"></span>\n            <span *ngIf=\"auth.isLoggedIn()\" class=\"info5\" (click)=\"auth.logout()\"></span>\n            <span class=\"info6\" (click)=\"bgMusic()\"></span> \n          \n            <p>\n              <span class=\"line2\"></span>\n            </p>\n            <div class=\"game-text\">\n              <router-outlet></router-outlet>\n            </div>\n          </nav>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"wheel\">\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-shadow\"></div>\n    <div class=\"wheel-plug\"></div>\n  </div>\n\n  <div class=\"speakers\">\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n    <div class=\"speaker\"></div>\n\n\n      <div class=\"radios\"><p class=\"audio\">Audio</p>\n        <input id=\"link\" name=\"name\" type=\"radio\" class=\"music1\" checked (click)=\"noMusic()\"/>\n        <input type=\"radio\"  name=\"name\" class=\"music2\" (click)=\"bgMusic()\"/>\n        <input type=\"radio\"  name=\"name\" class=\"music3\" (click)=\"bgMusic2()\"/>\n        <input type=\"radio\"  name=\"name\" class=\"music4\" (click)=\"bgMusic3()\" />\n        <input type=\"radio\"  name=\"name\" class=\"music5\" (click)=\"bgMusic4()\"/>\n        <img src=\"./assets/img/screw.png\" id=\"stl\"><img src=\"./assets/img/screw.png\" id=\"str\"><img src=\"./assets/img/screw.png\" id=\"sbr\"><img src=\"./assets/img/screw.png\" id=\"sbl\">\n      </div>\n      <!-- \"start\": \"ng build && nodemon ./bin/www\", -->\n    <!-- <div class=\"logo\">LOGO</div> -->\n  </div>\n  \n  <div class=\"bottom-button\"></div>\n  <div class=\"top-right\">\n    <div class=\"power\"></div>\n  </div>\n</div>\n"

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
        this.accessEnabled = true;
        this.bgAudio = new Audio();
        this.bgAudio2 = new Audio();
        this.bgAudio3 = new Audio();
        this.bgAudio4 = new Audio();
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.isLoggedIn())
            this.accessEnabled = true;
        else
            this.accessEnabled = false;
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        if (this.auth.isLoggedIn())
            this.accessEnabled = true;
        else
            this.accessEnabled = false;
    };
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
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./challenge/challenge.component */ "./src/app/challenge/challenge.component.ts");
/* harmony import */ var _solve_solve_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solve/solve.component */ "./src/app/solve/solve.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"] },
    { path: 'challenge', component: _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeComponent"] },
    { path: 'leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LeaderboardComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'solve/:id', component: _solve_solve_component__WEBPACK_IMPORTED_MODULE_7__["SolveComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _challenge_challenge_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LeaderboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _solve_solve_component__WEBPACK_IMPORTED_MODULE_7__["SolveComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                //BrowserAnimationsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"],
                _api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"]
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

module.exports = "h1 {font-size: 30px; text-align: center; margin-bottom: 15px; margin-left: -42px}\nh2 {font-size: 15px;}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 480px}\nselect option{color: lightgreen; font-size: 12px; background-color: rgba(0,0,0,0.8);}\n.btn{margin-left: 150px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.row{margin-bottom: 15px}\n.build{margin-top: 20px; margin-left: 84px}\n.container{padding-left:20%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL2NoYWxsZW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7QUFDakYsSUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixNQUFNLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0FBQ3ZJLGNBQWMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0NBQWtDLENBQUM7QUFDckYsS0FBSyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMseUVBQXlFLENBQUM7QUFDMUksS0FBSyxtQkFBbUIsQ0FBQztBQUN6QixPQUFPLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzNDLFdBQVcsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jaGFsbGVuZ2UvY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7Zm9udC1zaXplOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDE1cHg7IG1hcmdpbi1sZWZ0OiAtNDJweH1cbmgyIHtmb250LXNpemU6IDE1cHg7fVxuLm1lbnV7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogNDgwcHh9XG5zZWxlY3Qgb3B0aW9ue2NvbG9yOiBsaWdodGdyZWVuOyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTt9XG4uYnRue21hcmdpbi1sZWZ0OiAxNTBweDsgYm9yZGVyLWNvbG9yOiAjOWRhYWEzOyBjb2xvcjogIzdmZjEyYTsgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrLCAwIDAgMWVtIGxpZ2h0Z3JlZW4sIDAgMCAwLjJlbSBsaWdodGdyZWVuO31cbi5yb3d7bWFyZ2luLWJvdHRvbTogMTVweH1cbi5idWlsZHttYXJnaW4tdG9wOiAyMHB4OyBtYXJnaW4tbGVmdDogODRweH1cbi5jb250YWluZXJ7cGFkZGluZy1sZWZ0OjIwJX0iXX0= */"

/***/ }),

/***/ "./src/app/challenge/challenge.component.html":
/*!****************************************************!*\
  !*** ./src/app/challenge/challenge.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Challenge</h1>\n\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Choose an Opponent</h2>\n      <select class=\"menu\" id=\"opponent\" #t (change)=\"getIdVal(t.value)\">\n        <option [value]=\"null\">Select Alias</option>\n        <option *ngFor=\"let user of filteredUsersList\" [value]=[user._id]>{{user.alias}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Cypher</h2>\n        <select class=\"menu\" id=\"cypher\" (click)=\"doCrypt(true)\">\n          <option [value]=\"null\">Select Cypher</option>  \n          <option value=\"cCrypt\">Caesar Cypher</option>\n          <option value=\"cCrypt2\">Reverse Caesar</option>\n        </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2>Encryption Key</h2>\n        <!-- <input id=\"encryptionKey\"> -->\n        <select class=\"menu\" id=\"encryptionKey\" (click)=\"doCrypt(true)\">\n          <option value=\"0\">0</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n          <option value=\"7\">7</option>\n          <option value=\"8\">8</option>\n          <option value=\"9\">9</option>\n          <option value=\"10\">10</option>\n          <option value=\"11\">11</option>\n          <option value=\"12\">12</option>\n          <option value=\"13\">13</option>\n          <option value=\"14\">14</option>\n          <option value=\"15\">15</option>\n          <option value=\"16\">16</option>\n          <option value=\"17\">17</option>\n          <option value=\"18\">18</option>\n          <option value=\"19\">19</option>\n          <option value=\"20\">20</option>\n          <option value=\"21\">21</option>\n          <option value=\"22\">22</option>\n          <option value=\"23\">23</option>\n          <option value=\"24\">24</option>\n          <option value=\"25\">25</option>\n        </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Message</h2>\n      <input type=\"text\" class=\"menu\" id=\"message\" [(ngModel)]=\"newMessage\" (keyup)=\"doCrypt(true)\" maxlength=\"20\">\n      <!-- <p id=\"isEng\">Valid English</p>\n      <p id=\"nonEng\">Not Valid English</p> -->\n    </div>\n  </div>\n\n  \n \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div>\n        <h2>Encrypted Message</h2>\n        <p type=\"text\" id=\"encMessage\">{{encMessage}}</p>\n      </div>\n      <div>\n        <button class=\"btn btn-outline-success btn-sm build\" id=\"clearButton\" (click)=\"createChallenge()\">Build Message</button>\n      </div>\n    </div>  \n  </div>\n</div>\n"

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
            _this.router.navigateByUrl('/home');
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

module.exports = "<div class=\"container\">\n  \n  <div class=\"title text-center\">\n    <h4>Welcome to dCrypt!</h4>\n  </div>\n  <hr>\n\n  <!-- <p>Please <a routerLink=\"/login\">sign in</a> or <a routerLink=\"/register\">register</a>?</p> -->\n\n  <div *ngIf=\"!auth.isLoggedIn()\" class=\"login-buttons text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <button class=\"btn btn-outline-success btn-sm\" id=\"clearButton\" routerLink=\"/login\">Login</button>\n      </div>\n      <div class=\"col-sm-6\">\n        <button class=\"btn btn-outline-success btn-sm\" id=\"clearButton\" routerLink=\"/register\">Register</button>\n    \n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n  <img src=\"../../assets/img/tenor.gif\">\n</div>\n"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
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

module.exports = "h1 {font-size: 30px; text-align: center; margin-left: -40px}\n.container{padding-left:20%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO0FBQzVELFdBQVcsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge2ZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDogLTQwcHh9XG4uY29udGFpbmVye3BhZGRpbmctbGVmdDoyMCV9Il19 */"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Agent Rankings</h1>\n\n<div class=\"container\">\n  <br>\n  <!-- ng-repeat loops through data to build list -->\n  <div>\n    <h5>Ranking Special Agent:</h5>\n    <ul>\n      <li>\n        {{gameStats[0].alias}} : {{gameStats[0].gameScore}}\n      </li>\n    </ul>\n  </div>\n  <br>\n  <div>\n    <h5>Top Agent Listing:</h5>\n    <ol>\n      <li *ngFor=\"let stats of gameStats\">\n        {{stats.alias}} : {{stats.gameScore}}\n      </li>\n    </ol>\n  </div>\n</div>\n"

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

module.exports = "h1 {font-size: 30px; text-align: center; margin-bottom: 30px; margin-left: -40px}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 300px; height: 25px}\n.menu1{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 300px; margin-left: 5px; margin-right: 5px}\n.btn{margin-left: 115px; margin-top: 72px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.lead{font-size: 14px}\n.container{padding-left:15%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0FBQ2pGLE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0FBQ3JKLE9BQU8sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0ssS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMseUVBQXlFLENBQUM7QUFDNUosTUFBTSxlQUFlLENBQUM7QUFDdEIsV0FBVyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7Zm9udC1zaXplOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDMwcHg7IG1hcmdpbi1sZWZ0OiAtNDBweH1cbi5tZW51e2NvbG9yOiBsaWdodGdyZWVuOyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTsgYm9yZGVyOiAjOWRhYWEzIDFweCBzb2xpZDsgYm9yZGVyLXJhZGl1czogMHB4OyBtYXgtd2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDI1cHh9XG4ubWVudTF7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogMzAwcHg7IG1hcmdpbi1sZWZ0OiA1cHg7IG1hcmdpbi1yaWdodDogNXB4fVxuLmJ0bnttYXJnaW4tbGVmdDogMTE1cHg7IG1hcmdpbi10b3A6IDcycHg7IGJvcmRlci1jb2xvcjogIzlkYWFhMzsgY29sb3I6ICM3ZmYxMmE7IHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaywgMCAwIDFlbSBsaWdodGdyZWVuLCAwIDAgMC4yZW0gbGlnaHRncmVlbjt9XG4ubGVhZHtmb250LXNpemU6IDE0cHh9XG4uY29udGFpbmVye3BhZGRpbmctbGVmdDoxNSV9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <h1 class=\"form-signin-heading\">Login</h1>\n      <p class=\"lead\">Not already a Registered Agent?</p>\n      <p class=\"lead\">Please<a routerLink=\"/register\" class=\"menu1\"> register </a> instead.</p>\n      <br>\n\n      <form ngNativeValidate (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input autofocus type=\"email\" class=\"form-control menu\" name=\"email\" placeholder=\"Enter Email\" [(ngModel)]=\"credentials.email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control menu\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required>\n        </div>\n        {{loginErrResponse}}\n        <button type=\"submit\" class=\"btn btn-outline-success btn-sm\" id=\"clearButton\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

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
            _this.loginErrResponse = err.error.message + "!";
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

module.exports = "li {color: green; font-size: 12px; background-color:black; border-color: silver; margin-top: 20px;}\nh1 {font-size: 30px; text-align: center; margin-left: -41px}\nh2 {font-size: 20px}\nul{max-width: 300px; max-height:300px; overflow: auto;}\n#solveBtn{margin-left: 100px; margin-top: 0px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n#deleteBtn{margin-left: 20px; margin-top: 0px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.d-flex{margin-left: -40px; max-width: 300px; max-height: 50px;}\np {font-size: 10px;}\nbutton {font-size: 14px;}\n.inter{margin-top: 30px; margin-left: -26px}\n.inter1{margin-top: 30px; margin-left: -13px}\n.container{padding-left:11%}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQztBQUNuRyxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO0FBQzVELElBQUksZUFBZSxDQUFDO0FBQ3BCLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDO0FBQ3ZELFVBQVUsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLHlFQUF5RSxDQUFDO0FBQ2hLLFdBQVcsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLHlFQUF5RSxDQUFDO0FBQ2hLLFFBQVEsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDaEUsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwQixRQUFRLGdCQUFnQixDQUFDO0FBQ3pCLE9BQU8saUJBQWlCLENBQUMsa0JBQWtCLENBQUM7QUFDNUMsUUFBUSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUM3QyxXQUFXLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtjb2xvcjogZ3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZC1jb2xvcjpibGFjazsgYm9yZGVyLWNvbG9yOiBzaWx2ZXI7IG1hcmdpbi10b3A6IDIwcHg7fVxuaDEge2ZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDogLTQxcHh9XG5oMiB7Zm9udC1zaXplOiAyMHB4fVxudWx7bWF4LXdpZHRoOiAzMDBweDsgbWF4LWhlaWdodDozMDBweDsgb3ZlcmZsb3c6IGF1dG87fVxuI3NvbHZlQnRue21hcmdpbi1sZWZ0OiAxMDBweDsgbWFyZ2luLXRvcDogMHB4OyBib3JkZXItY29sb3I6ICM5ZGFhYTM7IGNvbG9yOiAjN2ZmMTJhOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gbGlnaHRncmVlbiwgMCAwIDAuMmVtIGxpZ2h0Z3JlZW47fVxuI2RlbGV0ZUJ0bnttYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXRvcDogMHB4OyBib3JkZXItY29sb3I6ICM5ZGFhYTM7IGNvbG9yOiAjN2ZmMTJhOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssIDAgMCAxZW0gbGlnaHRncmVlbiwgMCAwIDAuMmVtIGxpZ2h0Z3JlZW47fVxuLmQtZmxleHttYXJnaW4tbGVmdDogLTQwcHg7IG1heC13aWR0aDogMzAwcHg7IG1heC1oZWlnaHQ6IDUwcHg7fVxucCB7Zm9udC1zaXplOiAxMHB4O31cbmJ1dHRvbiB7Zm9udC1zaXplOiAxNHB4O31cbi5pbnRlcnttYXJnaW4tdG9wOiAzMHB4OyBtYXJnaW4tbGVmdDogLTI2cHh9XG4uaW50ZXIxe21hcmdpbi10b3A6IDMwcHg7IG1hcmdpbi1sZWZ0OiAtMTNweH1cbi5jb250YWluZXJ7cGFkZGluZy1sZWZ0OjExJX1cblxuIl19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Messages</h1>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-outline-success btn-sm inter\" (click)=\"msgsReceived()\">\n        Intercepted Messages\n      </button>\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-outline-success btn-sm inter1\" (click)=\"msgsSent()\">\n        Messages Transmitted\n      </button>\n    </div>\n  </div>\n\n  <!-- ng-repeat loops through data to build list -->\n  <ul *ngIf=\"viewRcvd\">\n    <li *ngFor=\"let message of messages; index as i\" class=\"list-group-item d-flex justify-content-between align-items-center\" >\n      <p>{{i + 1 }}: </p>\n      <p>From: {{message.ReceivedFrom_Alias}}</p>\n      <button class=\"btn btn-outline-success btn-sm\" id=\"solveBtn\" [routerLink]=\"['/solve', message._id]\">Decrypt</button><br>\n    </li>\n  </ul>\n  <ul *ngIf=\"viewSent\">\n    <li *ngFor=\"let message of messages; index as i\" class=\"list-group-item d-flex vertical-center justify-content-between align-items-center\" >\n      <p>{{i + 1 }}: </p>\n      <p>Sent To: {{message.SentTo_Alias}}</p>\n      <p>Solved: {{message.Solved}}</p>\n      <p *ngIf=\"!message.Solved\">Attempts: {{10 - message.AttemptsRemaining}}</p>\n      <p *ngIf=\"message.Solved\">Score: {{message.MessageScore}}</p>\n      <button class=\"btn btn-outline-success btn-sm\" id=\"deleteBtn\" (click)=\"msgDelete(message._id)\">Delete</button><br>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent, MsgRcvdSource, MsgSentSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgRcvdSource", function() { return MsgRcvdSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgSentSource", function() { return MsgSentSource; });
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
        this.viewRcvd = true;
        this.viewSent = false;
        this.rcvdSource = new MsgRcvdSource(this.api);
        this.sentSource = new MsgSentSource(this.api);
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.usr = this.auth.getUserDetails();
        this.msgsReceived();
    };
    MessagesComponent.prototype.msgsReceived = function () {
        var _this = this;
        this.viewSent = false;
        this.viewRcvd = true;
        this.rcvdSource.connect(this.usr._id)
            .subscribe(function (res) {
            _this.messages = res;
            _this.msgRcvd_id = _this.messages.SentMsg_id;
        }, function (err) {
            console.log(err);
        });
    };
    MessagesComponent.prototype.msgsSent = function () {
        var _this = this;
        this.viewRcvd = false;
        this.viewSent = true;
        this.sentSource.connect(this.usr._id)
            .subscribe(function (res) {
            _this.messages = res;
        }, function (err) {
            console.log(err);
        });
    };
    MessagesComponent.prototype.msgDelete = function (id) {
        this.api.deleteSentMsg(id)
            .subscribe(function (res) {
            console.log('delete sent messsage');
        });
        // this.api.deleteRcvdMsg(id)
        // .subscribe(res => {
        //   console.log('delete rcvd messsage')
        // });
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

var MsgRcvdSource = /** @class */ (function (_super) {
    __extends(MsgRcvdSource, _super);
    function MsgRcvdSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    MsgRcvdSource.prototype.connect = function (id) {
        return this.api.getRecvdMsgs(id);
    };
    MsgRcvdSource.prototype.disconnect = function () {
    };
    return MsgRcvdSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));

var MsgSentSource = /** @class */ (function (_super) {
    __extends(MsgSentSource, _super);
    function MsgSentSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    MsgSentSource.prototype.connect = function (id) {
        return this.api.getSentMsgs(id);
    };
    MsgSentSource.prototype.disconnect = function () {
    };
    return MsgSentSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {font-size: 30px; text-align: center; margin-left: -34px}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 480px; margin-top: 30px}\n.top{margin-top: 20px}\n.container{padding-left:20%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1RCxNQUFNLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO0FBQ3pKLEtBQUssZ0JBQWdCLENBQUM7QUFDdEIsV0FBVyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge2ZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDogLTM0cHh9XG4ubWVudXtjb2xvcjogbGlnaHRncmVlbjsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7IGJvcmRlcjogIzlkYWFhMyAxcHggc29saWQ7IGJvcmRlci1yYWRpdXM6IDBweDsgbWF4LXdpZHRoOiA0ODBweDsgbWFyZ2luLXRvcDogMzBweH1cbi50b3B7bWFyZ2luLXRvcDogMjBweH1cbi5jb250YWluZXJ7cGFkZGluZy1sZWZ0OjIwJX0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Agent Profile</h1>\n\n<div class=\"container\">\n  <div class=\"row\">\n     <div class=\"col-md-12\">\n\n      <div class=\"form-horizontal\">\n        <div class=\"form-group top\">\n          <label class=\"col-sm-3 control-label \">Name</label>\n          <input class=\"menu\" disabled value=\"{{auth.getUserDetails()?.name}}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label\">Email</label>\n          <input class=\"menu\" disabled value=\"{{auth.getUserDetails()?.email}}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label\">Alias</label>\n          <input class=\"menu\" disabled value=\"{{auth.getUserDetails()?.alias}}\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

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

module.exports = "h1 {font-size: 30px; text-align: center; margin-bottom: 30px}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 300px; height: 25px}\n.menu1{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 160px; height: 25px; margin-left: 0px; margin-right: 0px}\n.menu2{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 117px; height: 25px; margin-left: 0px; margin-right: 0px}\n.btn{margin-left: 118px; margin-top: 0px; border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.lead{font-size: 14px}\n.container{padding-left:13%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO0FBQzdELE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0FBQ3JKLE9BQU8sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzNMLE9BQU8sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzNMLEtBQUssbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLHlFQUF5RSxDQUFDO0FBQzNKLE1BQU0sZUFBZSxDQUFDO0FBQ3RCLFdBQVcsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge2ZvbnQtc2l6ZTogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzMHB4fVxuLm1lbnV7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogMzAwcHg7IGhlaWdodDogMjVweH1cbi5tZW51MXtjb2xvcjogbGlnaHRncmVlbjsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7IGJvcmRlcjogIzlkYWFhMyAxcHggc29saWQ7IGJvcmRlci1yYWRpdXM6IDBweDsgbWF4LXdpZHRoOiAxNjBweDsgaGVpZ2h0OiAyNXB4OyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDBweH1cbi5tZW51Mntjb2xvcjogbGlnaHRncmVlbjsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7IGJvcmRlcjogIzlkYWFhMyAxcHggc29saWQ7IGJvcmRlci1yYWRpdXM6IDBweDsgbWF4LXdpZHRoOiAxMTdweDsgaGVpZ2h0OiAyNXB4OyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDBweH1cbi5idG57bWFyZ2luLWxlZnQ6IDExOHB4OyBtYXJnaW4tdG9wOiAwcHg7IGJvcmRlci1jb2xvcjogIzlkYWFhMzsgY29sb3I6ICM3ZmYxMmE7IHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaywgMCAwIDFlbSBsaWdodGdyZWVuLCAwIDAgMC4yZW0gbGlnaHRncmVlbjt9XG4ubGVhZHtmb250LXNpemU6IDE0cHh9XG4uY29udGFpbmVye3BhZGRpbmctbGVmdDoxMyV9Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already a Registered Agent?</p>\n      <p class=\"lead\">Please <a routerLink=\"/login\" class=\"menu1\"> &nbsp;Login </a> &nbsp;instead.</p>\n      <br>\n      <form ngNativeValidate (submit)=\"register()\" class=\"row\">\n        <div class=\"form-group col-6\">\n          <label for=\"name\">Name</label>\n          <input autofocus type=\"text\" class=\"form-control menu1\" name=\"name\" placeholder=\"Enter your Name\" [(ngModel)]=\"credentials.name\" required>\n        </div>\n        <div class=\"form-group col-6\">\n          <label for=\"alias\">Alias</label>\n          <input type=\"text\" class=\"form-control menu2\" name=\"alias\" placeholder=\"Enter your Alias\" [(ngModel)]=\"credentials.alias\" required>\n        </div>\n        <div class=\"form-group col-12\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control menu\" name=\"email\" placeholder=\"Enter Email\" [(ngModel)]=\"credentials.email\" required>\n        </div>\n        <div class=\"form-group col-12\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control menu\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-success btn-sm\" id=\"clearButton\">Register</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

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
        this.auth.register(this.credentials).subscribe(function (res) {
            console.log(res);
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

module.exports = "h1 {font-size: 30px; text-align: center;}\n.menu{color: lightgreen; font-size: 12px; background: rgba(0,0,0,0.8); border: #9daaa3 1px solid; border-radius: 0px; max-width: 480px}\nselect option{color: lightgreen; font-size: 12px; background-color: rgba(0,0,0,0.8);}\n.btn{text-align:center;border-color: #9daaa3; color: #7ff12a; text-shadow: 2px 2px 2px black, 0 0 1em lightgreen, 0 0 0.2em lightgreen;}\n.container{padding-left:20%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29sdmUvc29sdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0FBQ3pDLE1BQU0sa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7QUFDdkksY0FBYyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQ0FBa0MsQ0FBQztBQUNyRixLQUFLLGtCQUFrQixzQkFBc0IsQ0FBQyxlQUFlLENBQUMseUVBQXlFLENBQUM7QUFDeEksV0FBVyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3NvbHZlL3NvbHZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7Zm9udC1zaXplOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLm1lbnV7Y29sb3I6IGxpZ2h0Z3JlZW47IGZvbnQtc2l6ZTogMTJweDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpOyBib3JkZXI6ICM5ZGFhYTMgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiAwcHg7IG1heC13aWR0aDogNDgwcHh9XG5zZWxlY3Qgb3B0aW9ue2NvbG9yOiBsaWdodGdyZWVuOyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTt9XG4uYnRue3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1jb2xvcjogIzlkYWFhMzsgY29sb3I6ICM3ZmYxMmE7IHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaywgMCAwIDFlbSBsaWdodGdyZWVuLCAwIDAgMC4yZW0gbGlnaHRncmVlbjt9XG4uY29udGFpbmVye3BhZGRpbmctbGVmdDoyMCV9Il19 */"

/***/ }),

/***/ "./src/app/solve/solve.component.html":
/*!********************************************!*\
  !*** ./src/app/solve/solve.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Decrypt the Message</h1>\n\n<div class=\"container\">\n    <br>\n    <ng-container *ngIf=\"!solved && !failed\">\n        <form>\n            <h6 class=\"mb-4\">Author: {{message.ReceivedFrom_Alias}}</h6>\n\n            <h6>Encrypted Message:</h6>\n                <p class=\"mb-4\" id=\"encMessage\">{{message.EncryptedMsg}}</p>\n                <div class=\"row\">\n                    <br><br>\n                    <div class=\"col-sm-6\">\n                        <h6>Choose Cipher</h6>\n                            <select class=\"menu\" id=\"cypher\">\n                                <option value=\"null\">Select Cypher</option>\n                                <option value=\"cCrypt\">Caesar Cipher</option>\n                                <option value=\"cCrypt2\">Reverse Caesar</option>\n                            </select>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <h6>Choose Key</h6>\n                            <select class=\"menu\" id=\"encryptionKey\">\n                                <option value=\"0\">0</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                                <option value=\"7\">7</option>\n                                <option value=\"8\">8</option>\n                                <option value=\"9\">9</option>\n                                <option value=\"10\">10</option>\n                                <option value=\"11\">11</option>\n                                <option value=\"12\">12</option>\n                                <option value=\"13\">13</option>\n                                <option value=\"14\">14</option>\n                                <option value=\"15\">15</option>\n                                <option value=\"16\">16</option>\n                                <option value=\"17\">17</option>\n                                <option value=\"18\">18</option>\n                                <option value=\"19\">19</option>\n                                <option value=\"20\">20</option>\n                                <option value=\"21\">21</option>\n                                <option value=\"22\">22</option>\n                                <option value=\"23\">23</option>\n                                <option value=\"24\">24</option>\n                                <option value=\"25\">25</option>\n                            </select>\n                        </div>\n                    <div class=\"mt-4 col-sm-12\">\n                        <h6>Remaining Attempts: {{message.AttemptsRemaining}}</h6>\n                    </div>\n                </div>\n\n                <ng-container *ngIf=\"!failed\">\n                    <button class=\"mt-3 mb-4 btn btn-outline-success btn-sm\" id=\"runCrypt\" (click)=\"doCrypt()\">Decrypt</button>\n                    <h6>Solution: </h6>\n                    <p id=\"message\"></p>\n                </ng-container>\n             \n                <ng-container *ngIf=\"incorrect\">\n                    <h6>(Incorrect Decryption)</h6>\n                </ng-container>\n\n                <ng-container *ngIf=\"failed\">\n                    <h6>This intel has been deprecated.</h6>\n                    <button class=\"btn btn-sm\" (click)=\"onBack()\">Back to Messages</button>\n                </ng-container>\n        </form>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"solved && !failed\">\n        <h4 class='mb-1'>Congratulations!</h4>\n        <h4>You solved it!</h4>\n        <button class=\"mt-4 btn btn-outline-success btn-sm\" (click)=\"onBack()\">\n            Back to Messages\n        </button>\n    </ng-container>\n    <ng-container *ngIf=\"!solved && failed\">\n        <h4>You have failed!</h4>\n        <button class=\"mt-4 btn btn-outline-success btn-sm\" (click)=\"onBack()\">\n            Back to Messages\n        </button>\n    </ng-container>\n</div>\n"

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
    SolveComponent.prototype.ngOnInit = function () {
        var _this = this;
        solution: '';
        msgScore: 0;
        gameScore: 0;
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
                console.log(_this.sentMessage);
            });
            _this.api.getUser(_this.message.Receiver_id)
                .subscribe(function (res) {
                _this.usr = res;
                _this.gameScore = _this.usr.gameScore;
            });
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
    SolveComponent.prototype.greenSound = function () {
        var greenAudio = new Audio;
        greenAudio.src = "./././assets/audio/function.mp3";
        greenAudio.load();
        greenAudio.play();
    };
    SolveComponent.prototype.doCrypt = function () {
        this.keySound();
        var chooseCypher = document.getElementById("cypher").value;
        if (chooseCypher === "cCrypt") {
            this.cCrypt();
        }
        if (chooseCypher === "cCrypt2") {
            this.cCrypt2();
        }
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
    SolveComponent.prototype.cCrypt = function () {
        var shiftText = document.getElementById("encryptionKey").value;
        // if (!/^-?\d+$/.test(shiftText)) {
        //   alert("Shift is not an integer");
        //   return;
        // }
        var shift = parseInt(shiftText, 10);
        // if (shift < 0 || shift >= 26) {
        //   alert("Shift is out of range");
        //   return;
        // }
        shift = (26 + shift) % 26;
        var textElem = document.getElementById("message");
        var encMessage = document.getElementById("encMessage");
        textElem.textContent = this.caesarShift(encMessage.textContent, shift);
        this.solution = this.caesarShift(encMessage.textContent, shift);
        //console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
    };
    SolveComponent.prototype.cCrypt2 = function () {
        var shiftText = document.getElementById("encryptionKey").value;
        // if (!/^-?\d+$/.test(shiftText)) {
        //   alert("Shift is not an integer");
        //   return;
        // }
        var shift = parseInt(shiftText, 10);
        // if (shift < 0 || shift >= 26) {
        //   alert("Shift is out of range");
        //   return;
        // }
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