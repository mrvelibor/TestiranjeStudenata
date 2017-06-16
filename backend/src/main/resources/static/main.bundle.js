webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<overlay>\r\n  <div class=\"overlay\">\r\n    <h4>Loading...</h4>\r\n    <img src=\"/assets/spinner48.svg\"/>\r\n  </div>\r\n</overlay>\r\n<div class=\"main-wrapper\">\r\n  <header>\r\n    <ul class=\"navigation\">\r\n      <li class=\"nav-title\">\r\n        <a [routerLink]=\"['/']\">Testiranje</a>\r\n      </li>\r\n      <ul class=\"nav-start\">\r\n        <li [routerLinkActiveOptions]=\"{ exact: true }\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/']\">Home</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRoleList[0].roleId == 2\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/overview']\">Pregled</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRoleList[0].roleId == 3\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/exams']\">Ispiti</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav-end\">\r\n        <li *ngIf=\"currentUser\">\r\n          <a>{{currentUser.username}}</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser\">\r\n          <a (click)=\"logout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </ul>\r\n  </header>\r\n  <alert></alert>\r\n  <div class=\"container\">\r\n    <router-outlet style=\"flex: 0\"></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.user$.subscribe(function (user) { return _this.currentUser = user; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_alert_component__ = __webpack_require__("../../../../../src/app/directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_php_service__ = __webpack_require__("../../../../../src/app/services/php.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_nospace_validator__ = __webpack_require__("../../../../../src/app/directives/nospace.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_user_type_pipe__ = __webpack_require__("../../../../../src/app/directives/user_type.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_overlay_service__ = __webpack_require__("../../../../../src/app/services/overlay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_overlay_component__ = __webpack_require__("../../../../../src/app/directives/overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_announcements_announcements_component__ = __webpack_require__("../../../../../src/app/pages/announcements/announcements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_profesor_guard__ = __webpack_require__("../../../../../src/app/guards/profesor.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_student_guard__ = __webpack_require__("../../../../../src/app/guards/student.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_studentpanel_examselector_examselector_component__ = __webpack_require__("../../../../../src/app/pages/studentpanel/examselector/examselector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_studentpanel_examtest_examtest_component__ = __webpack_require__("../../../../../src/app/pages/studentpanel/examtest/examtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profesorpanel_examoverview_examoverview_component__ = __webpack_require__("../../../../../src/app/pages/profesorpanel/examoverview/examoverview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profesorpanel_completedexamselector_completedexamselector_component__ = __webpack_require__("../../../../../src/app/pages/profesorpanel/completedexamselector/completedexamselector.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_material__["b" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_material__["d" /* MdInputModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__directives_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_16__directives_overlay_component__["a" /* OverlayComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_announcements_announcements_component__["a" /* AnnouncementsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_studentpanel_examselector_examselector_component__["a" /* ExamSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_studentpanel_examtest_examtest_component__["a" /* ExamTestComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_profesorpanel_examoverview_examoverview_component__["a" /* ExamOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_profesorpanel_completedexamselector_completedexamselector_component__["a" /* CompletedExamSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__directives_nospace_validator__["a" /* NospaceValidator */],
            __WEBPACK_IMPORTED_MODULE_14__directives_user_type_pipe__["a" /* UserTypePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_18__guards_admin_guard__["a" /* AdminGuard */],
            __WEBPACK_IMPORTED_MODULE_19__guards_profesor_guard__["a" /* ProfesorGuard */],
            __WEBPACK_IMPORTED_MODULE_20__guards_student_guard__["a" /* StudentGuard */],
            __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_15__services_overlay_service__["a" /* OverlayService */],
            __WEBPACK_IMPORTED_MODULE_12__services_php_service__["a" /* PhpService */],
            __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_21__services_student_service__["a" /* StudentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_studentpanel_examselector_examselector_component__ = __webpack_require__("../../../../../src/app/pages/studentpanel/examselector/examselector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_studentpanel_examtest_examtest_component__ = __webpack_require__("../../../../../src/app/pages/studentpanel/examtest/examtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profesorpanel_examoverview_examoverview_component__ = __webpack_require__("../../../../../src/app/pages/profesorpanel/examoverview/examoverview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profesorpanel_completedexamselector_completedexamselector_component__ = __webpack_require__("../../../../../src/app/pages/profesorpanel/completedexamselector/completedexamselector.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'exams', component: __WEBPACK_IMPORTED_MODULE_4__pages_studentpanel_examselector_examselector_component__["a" /* ExamSelectorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'exams/:id', component: __WEBPACK_IMPORTED_MODULE_5__pages_studentpanel_examtest_examtest_component__["a" /* ExamTestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_7__pages_profesorpanel_completedexamselector_completedexamselector_component__["a" /* CompletedExamSelectorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'overview/:id', component: __WEBPACK_IMPORTED_MODULE_6__pages_profesorpanel_examoverview_examoverview_component__["a" /* ExamOverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\"\r\n     class=\"alert\"\r\n     [ngClass]=\"{\r\n         'alert-success': message.type === 'success',\r\n         'alert-danger': message.type === 'error'\r\n     }\"\r\n>\r\n  — {{message.text}} —\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/directives/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/nospace.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NospaceValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NospaceValidator = NospaceValidator_1 = (function () {
    function NospaceValidator() {
        this.validator = function (c) {
            var regexp = /^\S*$/;
            return regexp.test(c.value) ? null : {
                validateNospace: {
                    valid: false
                }
            };
        };
        ;
    }
    NospaceValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return NospaceValidator;
}());
NospaceValidator = NospaceValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[validateNospace][ngModel],[validateNospace][formControl]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* forwardRef */])(function () { return NospaceValidator_1; }), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], NospaceValidator);

var NospaceValidator_1;
//# sourceMappingURL=nospace.validator.js.map

/***/ }),

/***/ "../../../../../src/app/directives/overlay.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"overlay\">\r\n  <h4>{{message.text}}</h4>\r\n  <img src=\"/assets/spinner48.svg\"/>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/directives/overlay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_overlay_service__ = __webpack_require__("../../../../../src/app/services/overlay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverlayComponent = (function () {
    function OverlayComponent(overlayService) {
        this.overlayService = overlayService;
    }
    OverlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.overlayService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    return OverlayComponent;
}());
OverlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'overlay',
        template: __webpack_require__("../../../../../src/app/directives/overlay.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_overlay_service__["a" /* OverlayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_overlay_service__["a" /* OverlayService */]) === "function" && _a || Object])
], OverlayComponent);

var _a;
//# sourceMappingURL=overlay.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/user_type.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserTypePipe = (function () {
    function UserTypePipe() {
    }
    UserTypePipe.prototype.transform = function (value, args) {
        switch (value) {
            case '1':
                return 'admin';
            case '2':
                return 'profesor';
            case '3':
                return 'student';
        }
        return value;
    };
    return UserTypePipe;
}());
UserTypePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'user_type' })
], UserTypePipe);

//# sourceMappingURL=user_type.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        var user = localStorage.getItem('user');
        if (user) {
            var userObj = JSON.parse(user);
            if (userObj.type == 1) {
                return true;
            }
        }
        this.router.navigate(['/']);
        return false;
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AdminGuard);

var _a;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('userdata')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/profesor.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfesorGuard = (function () {
    function ProfesorGuard(router) {
        this.router = router;
    }
    ProfesorGuard.prototype.canActivate = function () {
        var user = localStorage.getItem('user');
        if (user) {
            var userObj = JSON.parse(user);
            if (userObj.type == 2) {
                return true;
            }
        }
        this.router.navigate(['/']);
        return false;
    };
    return ProfesorGuard;
}());
ProfesorGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ProfesorGuard);

var _a;
//# sourceMappingURL=profesor.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/student.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentGuard = (function () {
    function StudentGuard(router) {
        this.router = router;
    }
    StudentGuard.prototype.canActivate = function () {
        var user = localStorage.getItem('user');
        if (user) {
            var userObj = JSON.parse(user);
            if (userObj.type == 3) {
                return true;
            }
        }
        this.router.navigate(['/']);
        return false;
    };
    return StudentGuard;
}());
StudentGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], StudentGuard);

var _a;
//# sourceMappingURL=student.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/pages/announcements/announcements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".announcement-panel {\r\n  text-align: left;\r\n  outline: 0;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: auto;\r\n  max-width: 720px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.announcement-panel h1 {\r\n  font-size: 21px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.announcement-message {\r\n  padding: 5px;\r\n  margin-top: 3px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  background: #f2f2f2;\r\n  color: #333;\r\n  font-size: 17px;\r\n}\r\n\r\n.announcement-nav {\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.nav-disabled {\r\n  color: #b3b3b3;\r\n  cursor: default;\r\n}\r\n\r\n.announcement-text {\r\n  font-size: 17px;\r\n}\r\n\r\n.action-link {\r\n  font-size: 14px;\r\n  color: #31708f;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/announcements/announcements.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"announcements && announcements.length > 0\" class=\"announcement-panel\">\r\n  <h1 (click)=\"displayAsList = !displayAsList\">Announcements ({{announcements.length}})</h1>\r\n  <div *ngIf=\"displayAsList\">\r\n    <ul>\r\n      <li *ngFor=\"let announcement of announcements\" class=\"announcement-message\">\r\n        <a (click)=\"openActionLink(announcement.actionLink)\">{{announcement.message}}</a>\r\n        <div class=\"announcement-nav\">\r\n          <a></a>\r\n          <a (click)=\"dismissAnnouncement(announcements[currentAnnouncementIndex])\">dismiss</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"!displayAsList\" class=\"announcement-message\">\r\n    <p class=\"announcement-text\">{{announcements[currentAnnouncementIndex].message}}</p>\r\n    <p class=\"action-link\" (click)=\"openActionLink(announcements[currentAnnouncementIndex].actionLink)\"><a>{{announcements[currentAnnouncementIndex].actionLink}}</a>\r\n    </p>\r\n    <div class=\"announcement-nav\">\r\n      <div style=\"display: inline\">\r\n        <a [ngClass]=\"{'nav-disabled': currentAnnouncementIndex <= 0}\" (click)=\"previousAnnouncement()\">previous</a>\r\n        <a [ngClass]=\"{'nav-disabled': currentAnnouncementIndex >= announcements.length - 1}\"\r\n           (click)=\"nextAnnouncement()\">next</a>\r\n      </div>\r\n      <a (click)=\"dismissAnnouncement(announcements[currentAnnouncementIndex])\">dismiss</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/announcements/announcements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementsComponent = (function () {
    function AnnouncementsComponent(alertService) {
        this.alertService = alertService;
        this.currentAnnouncementIndex = 0;
        this.displayAsList = true;
    }
    AnnouncementsComponent.prototype.openActionLink = function (actionLink) {
        if (!this.selectedCompany.id) {
            this.alertService.fail("Company not selected.");
            return;
        }
        this.alertService.success("Link clicked: " + actionLink);
        window.location.href = actionLink;
    };
    AnnouncementsComponent.prototype.previousAnnouncement = function () {
        if (this.currentAnnouncementIndex > 0) {
            --this.currentAnnouncementIndex;
        }
    };
    AnnouncementsComponent.prototype.nextAnnouncement = function () {
        if (this.currentAnnouncementIndex < this.announcements.length - 1) {
            ++this.currentAnnouncementIndex;
        }
    };
    AnnouncementsComponent.prototype.dismissAnnouncement = function (announcement) {
        var index = this.announcements.indexOf(announcement);
        if (index == -1) {
            return;
        }
        if (this.currentAnnouncementIndex == this.announcements.length - 1) {
            --this.currentAnnouncementIndex;
        }
        this.announcements.splice(index, 1);
    };
    return AnnouncementsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('announcements'),
    __metadata("design:type", Array)
], AnnouncementsComponent.prototype, "announcements", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('selectedCompany'),
    __metadata("design:type", Object)
], AnnouncementsComponent.prototype, "selectedCompany", void 0);
AnnouncementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'announcements',
        template: __webpack_require__("../../../../../src/app/pages/announcements/announcements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/announcements/announcements.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AnnouncementsComponent);

var _a;
//# sourceMappingURL=announcements.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  font-size: 21px;\r\n  margin: 21px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\r\n  <div *ngIf=\"currentUser\" class=\"main-panel\">\r\n    <h2>\r\n      Welcome back, {{currentUser.fullName}}!<br>\r\n    </h2>\r\n  </div>\r\n  <div *ngIf=\"!currentUser\">\r\n    <h2 class=\"text-center\">\r\n      Welcome!<br>\r\n      <small>Please log in.</small>\r\n    </h2>\r\n    <login></login>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.user$.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Form */\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #f2f2f2;\r\n  max-width: 300px;\r\n  margin: auto;\r\n  padding: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  text-align: center;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n\r\n.form .thumbnail {\r\n  background: #333;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto 15px;\r\n  padding: 50px 30px;\r\n  border-top-left-radius: 100%;\r\n  border-top-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  border-bottom-right-radius: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form .thumbnail img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.form input {\r\n  outline: 0;\r\n  background: #ffffff;\r\n  width: 100%;\r\n  border: 0;\r\n  margin-top: 15px;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n\r\n  outline: 0;\r\n  background: #333;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  margin-top: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form button:hover {\r\n  color: #e3e3e3;\r\n}\r\n\r\n.form img {\r\n  margin-top: 15px;\r\n}\r\n\r\n.form .message {\r\n  margin: 5px 0 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #31708f;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.has-error .message {\r\n  color: #a94442;\r\n}\r\n\r\n.has-error input {\r\n  border: 1px solid #a94442;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #a70532;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n  <form class=\"login-form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': !loading && f.submitted && !username.valid }\">\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username-field\" [disabled]=\"loading\"\r\n             [(ngModel)]=\"model.username\" #username=\"ngModel\" placeholder=\"username\" required/>\r\n      <p *ngIf=\"!loading && f.submitted && !model.username\" class=\"message\">Username is required.</p>\r\n      <p *ngIf=\"!loading && model.username && !username.valid\" class=\"message\">Username contains illegal characters.</p>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': !loading && f.submitted && !password.valid }\">\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password-field\" [disabled]=\"loading\"\r\n             [(ngModel)]=\"model.password\" #password=\"ngModel\" placeholder=\"password\" validateNospace/>\r\n      <p *ngIf=\"!loading && model.password && !password.valid\" class=\"message\">Password contains illegal characters.</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\" id=\"login-button\">Login</button>\r\n      <img *ngIf=\"loading\" src=\"/assets/spinner32.svg\"/>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, loginService, alertService) {
        this.router = router;
        this.loginService = loginService;
        this.alertService = alertService;
        this.model = {};
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.success('Login successful!', true);
            var user = data.user;
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/profesorpanel/completedexamselector/completedexamselector.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li *ngFor=\"let exam of exams\">\r\n    <a [routerLink]=\"['/overview', exam.studentExamId]\">{{exam.examId.name}}</a> - {{exam.userId.fullName}} ({{exam.userId.email}})\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/profesorpanel/completedexamselector/completedexamselector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 20px; }\n\nli {\n  font-size: 20px;\n  margin-bottom: 5px; }\n\nli a {\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profesorpanel/completedexamselector/completedexamselector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedExamSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompletedExamSelectorComponent = (function () {
    function CompletedExamSelectorComponent(authService, studentService, alertService) {
        this.authService = authService;
        this.studentService = studentService;
        this.alertService = alertService;
        this.exams = [];
    }
    CompletedExamSelectorComponent.prototype.ngOnInit = function () {
        this.loadExams();
    };
    CompletedExamSelectorComponent.prototype.loadExams = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getStudentExams()
            .subscribe(function (data) {
            console.log(data);
            _this.exams = data;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return CompletedExamSelectorComponent;
}());
CompletedExamSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'completed-exam-selector',
        template: __webpack_require__("../../../../../src/app/pages/profesorpanel/completedexamselector/completedexamselector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/profesorpanel/completedexamselector/completedexamselector.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], CompletedExamSelectorComponent);

var _a, _b, _c;
//# sourceMappingURL=completedexamselector.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/profesorpanel/examoverview/examoverview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!exam\" class=\"exam-wrapper\">\r\n  Učitava se...\r\n</div>\r\n<div *ngIf=\"exam\" class=\"exam-wrapper\">\r\n  <div class=\"exam-details\">\r\n    <h2>Ispit: {{exam.examId.name}} - <small>{{exam.examId.description}}</small></h2>\r\n    <h2>Student: {{exam.userId.fullName}} <small>({{exam.userId.email}})</small></h2>\r\n    <h3>Bodovi: {{exam.points}}</h3>\r\n    <p>Ispit započet: {{exam.startTime | date:'medium'}}</p>\r\n    <p>Ispit završen: {{exam.endTime | date:'medium'}}</p>\r\n  </div>\r\n  <div *ngIf=\"currentUser && currentUser.userRoleList[0].roleId == 2\" class=\"exam-test\">\r\n    <div *ngFor=\"let question of exam.studentExamQuestionList\" class=\"exam-question\">\r\n      <h4>{{question.questionId.text}}</h4>\r\n      <div *ngIf=\"question.questionId.questionType === 'truefalse'\">\r\n        <md-radio-group class=\"example-radio-group\" [(ngModel)]=\"question.selectedStatement\">\r\n          <md-radio-button disabled class=\"example-radio-button\" [value]=\"true\">\r\n            Tačno\r\n          </md-radio-button>\r\n          <md-radio-button disabled class=\"example-radio-button\" [value]=\"false\">\r\n            Netačno\r\n          </md-radio-button>\r\n        </md-radio-group>\r\n      </div>\r\n      <div *ngIf=\"question.questionId.questionType === 'numerical'\">\r\n        <md-input-container class=\"example-full-width\">\r\n          <input disabled mdInput placeholder=\"Odgovor\" [(ngModel)]=\"question.selectedValue\">\r\n        </md-input-container>\r\n      </div>\r\n      <div *ngIf=\"question.questionId.questionType === 'single'\">\r\n        <md-radio-group class=\"example-radio-group\" [(ngModel)]=\"question.singleChoiceAnswerId.singleChoiceAnswerId\">\r\n          <md-radio-button disabled *ngFor=\"let answer of question.questionId.singleChoiceAnswerList\" class=\"example-radio-button\" [value]=\"answer.singleChoiceAnswerId\">\r\n            {{answer.text}}\r\n          </md-radio-button>\r\n        </md-radio-group>\r\n      </div>\r\n      <div *ngIf=\"question.questionId.questionType === 'multiple'\">\r\n        <md-checkbox disabled *ngFor=\"let answer of question.questionId.multipleChoiceAnswerList\" class=\"example-radio-button\" [value]=\"answer.multipleChoiceAnswerId\" [(ngModel)]=\"question.multipleChoiceAnswers[answer.multipleChoiceAnswerId]\">\r\n          {{answer.text}}\r\n        </md-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/profesorpanel/examoverview/examoverview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exam-wrapper {\n  padding: 20px; }\n\n.exam-details {\n  margin-bottom: 20px; }\n\n.exam-details h2 {\n  font-size: 30px; }\n\n.exam-details h2 small {\n  font-size: 25px; }\n\n.exam-details h3 {\n  font-size: 25px; }\n\n.exam-question {\n  margin-bottom: 20px; }\n\n.exam-question h4 {\n  font-size: 20px;\n  margin-bottom: 5px; }\n\nmd-checkbox {\n  display: block; }\n\nmd-radio-button {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profesorpanel/examoverview/examoverview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExamOverviewComponent = (function () {
    function ExamOverviewComponent(route, authService, studentService, alertService) {
        this.route = route;
        this.authService = authService;
        this.studentService = studentService;
        this.alertService = alertService;
    }
    ExamOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.user$.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.examId = +params['id'];
        });
        this.loadExam();
    };
    ExamOverviewComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    ExamOverviewComponent.prototype.prepareExam = function (exam) {
        exam.studentExamQuestionList.filter(function (q) { return q.questionId.questionType == 'multiple'; }).forEach(function (question) {
            question.multipleChoiceAnswers = {};
            if (question.multipleChoiceAnswerList) {
                question.multipleChoiceAnswerList.forEach(function (answer) {
                    question.multipleChoiceAnswers[answer.multipleChoiceAnswerId] = true;
                });
            }
            console.log(question);
        });
    };
    ExamOverviewComponent.prototype.loadExam = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getStudentExam(this.examId)
            .subscribe(function (data) {
            console.log(data);
            _this.prepareExam(data);
            _this.exam = data;
        }, function (error) {
            var data = JSON.parse('{    "examId": {        "description": "AA001 ispitivanje",        "examId": 7,        "name": "Ispit 1",        "numberOfQuestions": 5    },    "startTime": "2017-06-14T10:54:21.511+02:00",    "studentExamId": 51,    "studentExamQuestionList": [        {            "questionId": {                "correctStatement": true,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 10,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 1?"            },            "studenExamQuestionId": 52        },        {            "questionId": {                "correctValue": 10,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 11,                "questionType": "numerical",                "singleChoiceAnswerList": [],                "text": "Pitanje 2?"            },            "studenExamQuestionId": 53        },        {            "questionId": {                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 12,                "questionType": "single",                "singleChoiceAnswerId": {                    "singleChoiceAnswerId": 15,                    "text": "Odgovor 3"                },                "singleChoiceAnswerList": [                    {                        "singleChoiceAnswerId": 13,                        "text": "Odgovor 1"                    },                    {                        "singleChoiceAnswerId": 14,                        "text": "Odgovor 2"                    },                    {                        "singleChoiceAnswerId": 15,                        "text": "Odgovor 3"                    }                ],                "text": "Pitanje 3?"            },            "studenExamQuestionId": 54        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 20,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 5?"            },            "studenExamQuestionId": 55        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 21,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 6?"            },            "studenExamQuestionId": 56        }    ],    "userId": {        "email": "student@localhost",        "fullName": "Student",        "userId": 3,        "userRoleList": [            {                "roleId": 3,                "roleName": "ROLE_STUDENT"            }        ],        "username": "student"    }}');
            _this.prepareExam(data);
            _this.exam = data;
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return ExamOverviewComponent;
}());
ExamOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'exam-overview',
        template: __webpack_require__("../../../../../src/app/pages/profesorpanel/examoverview/examoverview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/profesorpanel/examoverview/examoverview.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], ExamOverviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=examoverview.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/studentpanel/examselector/examselector.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li *ngFor=\"let exam of exams\">\r\n    <a [routerLink]=\"['/exams', exam.examId]\">{{exam.name}}</a> - {{exam.description}}\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/studentpanel/examselector/examselector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 20px; }\n\nli {\n  font-size: 20px;\n  margin-bottom: 5px; }\n\nli a {\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/studentpanel/examselector/examselector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExamSelectorComponent = (function () {
    function ExamSelectorComponent(authService, studentService, alertService) {
        this.authService = authService;
        this.studentService = studentService;
        this.alertService = alertService;
        this.exams = [];
    }
    ExamSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.user$.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.loadExams();
    };
    ExamSelectorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ExamSelectorComponent.prototype.loadExams = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getExams()
            .subscribe(function (data) {
            console.log(data);
            _this.exams = data;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return ExamSelectorComponent;
}());
ExamSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'exam-selector',
        template: __webpack_require__("../../../../../src/app/pages/studentpanel/examselector/examselector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/studentpanel/examselector/examselector.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], ExamSelectorComponent);

var _a, _b, _c;
//# sourceMappingURL=examselector.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/studentpanel/examtest/examtest.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!exam\" class=\"exam-wrapper\">\r\n  <p>\r\n    Kada počnete ispit, trenutak započinjanja ispita biće zabeležen i nećete moći da pokušate ponovo.\r\n    <br/>\r\n    U slučaju greške u sistemu molimo vas da to što pre prijavite administratoru.\r\n  </p>\r\n  <a (click)=\"startExam()\">Kliknite ovde da počnete.</a>\r\n</div>\r\n<div *ngIf=\"exam\" class=\"exam-wrapper\">\r\n  <div class=\"exam-details\">\r\n    <h2>Ispit: {{exam.examId.name}} - <small>{{exam.examId.description}}</small></h2>\r\n    <p>Ispit započet: {{exam.startTime | date:'medium'}}</p>\r\n  </div>\r\n  <div class=\"exam-test\">\r\n    <div *ngFor=\"let question of exam.studentExamQuestionList\" class=\"exam-question\">\r\n      <h4>{{question.questionId.text}}</h4>\r\n      <div *ngIf=\"question.questionId.questionType === 'truefalse'\">\r\n        <md-radio-group class=\"example-radio-group\" [(ngModel)]=\"answers[question.questionId.questionId].answerStatement\">\r\n          <md-radio-button class=\"example-radio-button\" [value]=\"true\">\r\n            Tačno\r\n          </md-radio-button>\r\n          <md-radio-button class=\"example-radio-button\" [value]=\"false\">\r\n            Netačno\r\n          </md-radio-button>\r\n        </md-radio-group>\r\n      </div>\r\n      <div *ngIf=\"question.questionId.questionType === 'numerical'\">\r\n        <md-input-container class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Odgovor\" [(ngModel)]=\"answers[question.questionId.questionId].answerValue\">\r\n        </md-input-container>\r\n      </div>\r\n      <div *ngIf=\"question.questionId.questionType === 'single'\">\r\n        <md-radio-group class=\"example-radio-group\" [(ngModel)]=\"answers[question.questionId.questionId].singleChoiceAnswerId\">\r\n          <md-radio-button *ngFor=\"let answer of question.questionId.singleChoiceAnswerList\" class=\"example-radio-button\" [value]=\"answer.singleChoiceAnswerId\">\r\n            {{answer.text}}\r\n          </md-radio-button>\r\n        </md-radio-group>\r\n      </div>\r\n      <div *ngIf=\"question.questionId.questionType === 'multiple'\">\r\n        <md-checkbox *ngFor=\"let answer of question.questionId.multipleChoiceAnswerList\" class=\"example-radio-button\" [value]=\"answer.multipleChoiceAnswerId\" [(ngModel)]=\"answers[question.questionId.questionId].multipleChoiceAnswers[answer.multipleChoiceAnswerId]\">\r\n          {{answer.text}}\r\n        </md-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button md-raised-button (click)=\"finishExam()\">Završi</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/studentpanel/examtest/examtest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exam-wrapper {\n  padding: 20px; }\n\n.exam-wrapper p {\n  margin-bottom: 10px; }\n\n.exam-wrapper a {\n  color: #31708f; }\n\n.exam-details {\n  margin-bottom: 20px; }\n\n.exam-details h2 {\n  font-size: 30px; }\n\n.exam-details h2 small {\n  font-size: 25px; }\n\n.exam-details h3 {\n  font-size: 25px; }\n\n.exam-question {\n  margin-bottom: 20px; }\n\n.exam-question h4 {\n  font-size: 20px;\n  margin-bottom: 5px; }\n\n.exam-answer-correct {\n  background: green; }\n\n.exam-answer-incorrect {\n  background: red; }\n\nmd-checkbox {\n  display: block; }\n\nmd-radio-button {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/studentpanel/examtest/examtest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExamTestComponent = (function () {
    function ExamTestComponent(router, route, authService, studentService, alertService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.studentService = studentService;
        this.alertService = alertService;
    }
    ExamTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.examId = +params['id'];
        });
        this.userSubscription = this.authService.user$.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    ExamTestComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    ExamTestComponent.prototype.prepareAnswers = function (exam) {
        var answers = {};
        exam.studentExamQuestionList.forEach(function (question) {
            console.log(question);
            var answer = {
                "question": question.questionId
            };
            switch (question.questionId.questionType) {
                case 'multiple':
                    answer['multipleChoiceAnswers'] = {};
            }
            ;
            console.log(answer);
            answers[question.questionId.questionId] = answer;
        });
        this.answers = answers;
    };
    ExamTestComponent.prototype.startExam = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.startExam(this.currentUser, this.examId)
            .subscribe(function (data) {
            _this.prepareAnswers(data);
            _this.exam = data;
        }, function (error) {
            _this.exam = JSON.parse('{    "examId": {        "description": "AA001 ispitivanje",        "examId": 7,        "name": "Ispit 1",        "numberOfQuestions": 5    },    "startTime": "2017-06-14T10:54:21.511+02:00",    "studentExamId": 51,    "studentExamQuestionList": [        {            "questionId": {                "correctStatement": true,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 10,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 1?"            },            "studenExamQuestionId": 52        },        {            "questionId": {                "correctValue": 10,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 11,                "questionType": "numerical",                "singleChoiceAnswerList": [],                "text": "Pitanje 2?"            },            "studenExamQuestionId": 53        },        {            "questionId": {                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 12,                "questionType": "single",                "singleChoiceAnswerId": {                    "singleChoiceAnswerId": 15,                    "text": "Odgovor 3"                },                "singleChoiceAnswerList": [                    {                        "singleChoiceAnswerId": 13,                        "text": "Odgovor 1"                    },                    {                        "singleChoiceAnswerId": 14,                        "text": "Odgovor 2"                    },                    {                        "singleChoiceAnswerId": 15,                        "text": "Odgovor 3"                    }                ],                "text": "Pitanje 3?"            },            "studenExamQuestionId": 54        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 20,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 5?"            },            "studenExamQuestionId": 55        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 21,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 6?"            },            "studenExamQuestionId": 56        }    ],    "userId": {        "email": "student@localhost",        "fullName": "Student",        "userId": 3,        "userRoleList": [            {                "roleId": 3,                "roleName": "ROLE_STUDENT"            }        ],        "username": "student"    }}');
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamTestComponent.prototype.finishExam = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        var answers = [];
        Object.keys(this.answers).forEach(function (key) {
            var answer = _this.answers[key];
            switch (answer.question.questionType) {
                case 'numerical':
                    answer.answerValue = +answer.answerValue;
                    break;
                case 'multiple':
                    var answerIds_1 = [];
                    Object.keys(answer.multipleChoiceAnswers).forEach(function (mc) {
                        if (answer.multipleChoiceAnswers[mc]) {
                            answerIds_1.push(mc);
                        }
                    });
                    answer['multipleChoiceAnswerIds'] = answerIds_1;
                    break;
            }
            answers.push(answer);
        });
        console.log(this.answers);
        this.studentService.finishExam(this.exam, answers)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['overview', _this.exam.studentExamId]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return ExamTestComponent;
}());
ExamTestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'exam-test',
        template: __webpack_require__("../../../../../src/app/pages/studentpanel/examtest/examtest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/studentpanel/examtest/examtest.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], ExamTestComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=examtest.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.fail = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.error = function (error, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        var message = error.status;
        try {
            var body = JSON.parse(error._body);
            if (body.error) {
                message += ' ' + body.error;
            }
            if (body.message) {
                message += ': ' + body.message;
            }
        }
        catch (Error) {
            message += ': Unknown error.';
        }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clearMessage = function () {
        this.subject.next();
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__php_service__ = __webpack_require__("../../../../../src/app/services/php.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService(http) {
        var _this = _super.call(this, http) || this;
        var userdata = JSON.parse(localStorage.getItem('userdata'));
        var user = null;
        if (userdata) {
            user = userdata.user;
        }
        _this._userSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](user);
        _this.user$ = _this._userSource.asObservable();
        _this.user$.subscribe(function (user) { return _this._user = user; });
        return _this;
    }
    AuthenticationService.prototype.handleResponse = function (res) {
        var user = res.json();
        console.log(res);
        if (!user) {
            return;
        }
        localStorage.setItem('userdata', JSON.stringify(user));
        this._userSource.next(user.user);
        return user;
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
        params.username = username;
        params.password = password;
        var body = JSON.stringify(params);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */].createOptions();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]._host + "/auth", body, options).map(function (res) {
            return _this.handleResponse(res);
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('userdata');
        this._userSource.next(null);
    };
    return AuthenticationService;
}(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]));
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/overlay.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverlayService = (function () {
    function OverlayService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    OverlayService.prototype.showMessage = function (message) {
        this.subject.next({ text: message });
    };
    OverlayService.prototype.clearMessage = function () {
        this.subject.next();
    };
    OverlayService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return OverlayService;
}());
OverlayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], OverlayService);

//# sourceMappingURL=overlay.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/php.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhpService = (function () {
    function PhpService(http) {
        this.http = http;
    }
    PhpService.createOptions = function (token) {
        if (token === void 0) { token = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('X-Auth-Token', token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers, withCredentials: true });
    };
    return PhpService;
}());
PhpService._host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
PhpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PhpService);

var _a;
//# sourceMappingURL=php.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__php_service__ = __webpack_require__("../../../../../src/app/services/php.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentService = (function (_super) {
    __extends(StudentService, _super);
    function StudentService(http) {
        return _super.call(this, http) || this;
    }
    StudentService.prototype.getExams = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */].createOptions();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]._host + "/exams", options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.getStudentExams = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */].createOptions();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]._host + "/studentexam", options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.getStudentExam = function (studentExamId) {
        var options = __WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */].createOptions();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]._host + "/studentexam/" + studentExamId, options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.startExam = function (user, examId) {
        var params = {
            "user": user
        };
        var body = JSON.stringify(params);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */].createOptions();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]._host + "/testing/" + examId + "/start", body, options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.finishExam = function (exam, answers) {
        var params = {
            "answers": answers
        };
        var body = JSON.stringify(params);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */].createOptions();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]._host + "/testing/" + exam.studentExamId + "/finish", body, options).map(function (res) { return res.json(); });
    };
    return StudentService;
}(__WEBPACK_IMPORTED_MODULE_3__php_service__["a" /* PhpService */]));
StudentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: "api"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map