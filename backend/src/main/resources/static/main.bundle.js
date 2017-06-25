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

module.exports = "<overlay>\r\n  <div class=\"overlay\">\r\n    <h4>Loading...</h4>\r\n    <img src=\"/assets/spinner48.svg\"/>\r\n  </div>\r\n</overlay>\r\n<div class=\"main-wrapper\">\r\n  <header>\r\n    <ul class=\"navigation\">\r\n      <li class=\"nav-title\">\r\n        <a [routerLink]=\"['/']\">Testiranje</a>\r\n      </li>\r\n      <ul class=\"nav-start\">\r\n        <li [routerLinkActiveOptions]=\"{ exact: true }\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/']\">Glavna</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRole.roleId == 1\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/users']\">Korisnici</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRole.roleId == 1\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/courses']\">Predmeti</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRole.roleId == 1\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/exams']\">Ispiti</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRole.roleId == 2\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/overview']\">Urađeni ispiti</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRole.roleId == 3\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/exams/available']\">Preostali ispiti</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser && currentUser.userRole.roleId == 3\" [routerLinkActive]=\"['active']\">\r\n          <a [routerLink]=\"['/exams/completed']\">Urađeni ispiti</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav-end\">\r\n        <li *ngIf=\"currentUser\">\r\n          <a>{{currentUser.username}}</a>\r\n        </li>\r\n        <li *ngIf=\"currentUser\">\r\n          <a (click)=\"logout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </ul>\r\n  </header>\r\n  <alert></alert>\r\n  <div class=\"container\">\r\n    <router-outlet style=\"flex: 0\"></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_main_panel_login_login_component__ = __webpack_require__("../../../../../src/app/pages/main-panel/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_panel_home_home_component__ = __webpack_require__("../../../../../src/app/pages/main-panel/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_rest_service__ = __webpack_require__("../../../../../src/app/services/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_nospace_validator__ = __webpack_require__("../../../../../src/app/directives/nospace.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_user_type_pipe__ = __webpack_require__("../../../../../src/app/directives/user_type.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_overlay_service__ = __webpack_require__("../../../../../src/app/services/overlay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_overlay_component__ = __webpack_require__("../../../../../src/app/directives/overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_profesor_guard__ = __webpack_require__("../../../../../src/app/guards/profesor.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_student_guard__ = __webpack_require__("../../../../../src/app/guards/student.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_student_panel_available_exams_available_exams_component__ = __webpack_require__("../../../../../src/app/pages/student-panel/available-exams/available-exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_student_panel_exam_test_exam_test_component__ = __webpack_require__("../../../../../src/app/pages/student-panel/exam-test/exam-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_md_datatable__ = __webpack_require__("../../../../ng2-md-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profesor_panel_exam_overview_exam_overview_component__ = __webpack_require__("../../../../../src/app/pages/profesor-panel/exam-overview/exam-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_student_panel_completed_exams_completed_exams_component__ = __webpack_require__("../../../../../src/app/pages/student-panel/completed-exams/completed-exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_admin_panel_course_editor_course_editor_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/course-editor/course-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_admin_panel_user_editor_user_editor_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/user-editor/user-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_admin_panel_exam_editor_exam_editor_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/exam-editor/exam-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_admin_panel_course_users_list_course_users_list_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/course-users-list/course-users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_profesor_panel_student_exams_student_exams_component__ = __webpack_require__("../../../../../src/app/pages/profesor-panel/student-exams/student-exams.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["c" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["f" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["g" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng2_md_datatable__["a" /* MdDataTableModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["i" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["j" /* MdSelectModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__directives_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_16__directives_overlay_component__["a" /* OverlayComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_main_panel_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_main_panel_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_student_panel_available_exams_available_exams_component__["a" /* AvailableExamsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_student_panel_completed_exams_completed_exams_component__["a" /* CompletedExamsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_student_panel_exam_test_exam_test_component__["a" /* ExamTestComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_profesor_panel_exam_overview_exam_overview_component__["a" /* ExamOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_34__pages_profesor_panel_student_exams_student_exams_component__["a" /* StudentExamsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__pages_admin_panel_user_editor_user_editor_component__["a" /* UserEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_29__pages_admin_panel_course_editor_course_editor_component__["a" /* CourseEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pages_admin_panel_course_users_list_course_users_list_component__["a" /* CourseUsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_32__pages_admin_panel_exam_editor_exam_editor_component__["a" /* ExamEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__directives_nospace_validator__["a" /* NospaceValidator */],
            __WEBPACK_IMPORTED_MODULE_14__directives_user_type_pipe__["a" /* UserTypePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_17__guards_admin_guard__["a" /* AdminGuard */],
            __WEBPACK_IMPORTED_MODULE_18__guards_profesor_guard__["a" /* ProfesorGuard */],
            __WEBPACK_IMPORTED_MODULE_19__guards_student_guard__["a" /* StudentGuard */],
            __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_15__services_overlay_service__["a" /* OverlayService */],
            __WEBPACK_IMPORTED_MODULE_12__services_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_20__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_28__services_admin_service__["a" /* AdminService */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_main_panel_login_login_component__ = __webpack_require__("../../../../../src/app/pages/main-panel/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_main_panel_home_home_component__ = __webpack_require__("../../../../../src/app/pages/main-panel/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_student_panel_available_exams_available_exams_component__ = __webpack_require__("../../../../../src/app/pages/student-panel/available-exams/available-exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_student_panel_exam_test_exam_test_component__ = __webpack_require__("../../../../../src/app/pages/student-panel/exam-test/exam-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profesor_panel_exam_overview_exam_overview_component__ = __webpack_require__("../../../../../src/app/pages/profesor-panel/exam-overview/exam-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_student_guard__ = __webpack_require__("../../../../../src/app/guards/student.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_profesor_guard__ = __webpack_require__("../../../../../src/app/guards/profesor.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_student_panel_completed_exams_completed_exams_component__ = __webpack_require__("../../../../../src/app/pages/student-panel/completed-exams/completed-exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_panel_course_editor_course_editor_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/course-editor/course-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_panel_user_editor_user_editor_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/user-editor/user-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_panel_exam_editor_exam_editor_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/exam-editor/exam-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_panel_course_users_list_course_users_list_component__ = __webpack_require__("../../../../../src/app/pages/admin-panel/course-users-list/course-users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profesor_panel_student_exams_student_exams_component__ = __webpack_require__("../../../../../src/app/pages/profesor-panel/student-exams/student-exams.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_main_panel_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_main_panel_login_login_component__["a" /* LoginComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_11__pages_admin_panel_user_editor_user_editor_component__["a" /* UserEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_9__pages_admin_panel_course_editor_course_editor_component__["a" /* CourseEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'courses/:id', component: __WEBPACK_IMPORTED_MODULE_13__pages_admin_panel_course_users_list_course_users_list_component__["a" /* CourseUsersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'exams', component: __WEBPACK_IMPORTED_MODULE_12__pages_admin_panel_exam_editor_exam_editor_component__["a" /* ExamEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'exams/available', component: __WEBPACK_IMPORTED_MODULE_3__pages_student_panel_available_exams_available_exams_component__["a" /* AvailableExamsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_student_guard__["a" /* StudentGuard */]] },
    { path: 'exams/available/:id', component: __WEBPACK_IMPORTED_MODULE_4__pages_student_panel_exam_test_exam_test_component__["a" /* ExamTestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_student_guard__["a" /* StudentGuard */]] },
    { path: 'exams/completed', component: __WEBPACK_IMPORTED_MODULE_8__pages_student_panel_completed_exams_completed_exams_component__["a" /* CompletedExamsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_student_guard__["a" /* StudentGuard */]] },
    { path: 'exams/completed/:id', component: __WEBPACK_IMPORTED_MODULE_5__pages_profesor_panel_exam_overview_exam_overview_component__["a" /* ExamOverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_student_guard__["a" /* StudentGuard */]] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_14__pages_profesor_panel_student_exams_student_exams_component__["a" /* StudentExamsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_profesor_guard__["a" /* ProfesorGuard */]] },
    { path: 'overview/:id', component: __WEBPACK_IMPORTED_MODULE_5__pages_profesor_panel_exam_overview_exam_overview_component__["a" /* ExamOverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_profesor_guard__["a" /* ProfesorGuard */]] },
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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
        if (!value) {
            return "";
        }
        switch (value.roleId) {
            case 1:
                return 'admin';
            case 2:
                return 'profesor';
            case 3:
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
            if (userObj.userRole.roleId == 1) {
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
        if (localStorage.getItem('user')) {
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
            if (userObj.userRole.roleId == 2) {
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
            if (userObj.userRole.roleId == 3) {
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

/***/ "../../../../../src/app/models/course.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = (function () {
    function Course() {
    }
    return Course;
}());

//# sourceMappingURL=course.js.map

/***/ }),

/***/ "../../../../../src/app/models/exam.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exam; });
var Exam = (function () {
    function Exam() {
    }
    return Exam;
}());

//# sourceMappingURL=exam.js.map

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

/***/ "../../../../../src/app/pages/admin-panel/course-editor/course-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<md-sidenav-container class=\"editor-container\">\r\n  <md-sidenav class=\"editor-sidenav\" #sidenav mode=\"side\" disableClose=\"true\" >\r\n    <h2>Predmeti</h2>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Šifra predmeta\" [(ngModel)]=\"course.courseCode\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Naziv predmeta\" [(ngModel)]=\"course.name\">\r\n    </md-input-container>\r\n    <button *ngIf=\"!working\" md-raised-button (click)=\"addCourse()\">Dodaj predmet</button>\r\n    <md-spinner *ngIf=\"working\"></md-spinner>\r\n  </md-sidenav>\r\n  <ng2-md-datatable *ngIf=\"!loading\" selectable=\"false\">\r\n    <ng2-md-datatable-header>\r\n      <ng2-md-datatable-column>Šifra predmeta</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Naziv predmeta</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Akcije</ng2-md-datatable-column>\r\n    </ng2-md-datatable-header>\r\n    <tbody>\r\n    <ng2-md-datatable-row *ngFor=\"let course of courses\" class=\"course-row\">\r\n      <td [routerLink]=\"['/courses', course.courseId]\" class=\"course-code-column\">{{course.courseCode}}</td>\r\n      <td>{{course.name}}</td>\r\n      <td><a (click)=\"deleteCourse(course)\"><md-icon>delete</md-icon></a></td>\r\n    </ng2-md-datatable-row>\r\n    </tbody>\r\n  </ng2-md-datatable>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/course-editor/course-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-container {\n  min-height: 100%; }\n\n.editor-sidenav {\n  padding: 10px; }\n\n.editor-sidenav md-input-container {\n  display: block; }\n\n.editor-sidenav md-select {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  display: block; }\n\n.course-code-column {\n  cursor: pointer; }\n\n.course-code-column:hover {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/course-editor/course-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_course__ = __webpack_require__("../../../../../src/app/models/course.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseEditorComponent = (function () {
    function CourseEditorComponent(adminService, alertService) {
        this.adminService = adminService;
        this.alertService = alertService;
        this.courses = [];
        this.course = new __WEBPACK_IMPORTED_MODULE_2__models_course__["a" /* Course */]();
    }
    CourseEditorComponent.prototype.ngOnInit = function () {
        this.loadCourses();
        this.sidenav.open();
    };
    CourseEditorComponent.prototype.loadCourses = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.getCourses()
            .subscribe(function (data) {
            console.log(data);
            _this.courses = data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CourseEditorComponent.prototype.addCourse = function () {
        var _this = this;
        this.working = true;
        this.alertService.clearMessage();
        this.adminService.createCourse(this.course)
            .subscribe(function (data) {
            console.log(data);
            _this.course.courseId = data.id;
            _this.courses.push(_this.course);
            _this.course = new __WEBPACK_IMPORTED_MODULE_2__models_course__["a" /* Course */]();
            _this.working = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.working = false;
        });
    };
    CourseEditorComponent.prototype.deleteCourse = function (course) {
        var _this = this;
        this.working = true;
        this.alertService.clearMessage();
        this.adminService.deleteCourse(course)
            .subscribe(function (data) {
            console.log(data);
            var index = _this.courses.indexOf(course);
            if (index >= 0) {
                _this.courses.splice(index, 1);
            }
            _this.working = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.working = false;
        });
    };
    return CourseEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdSidenav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdSidenav */]) === "function" && _a || Object)
], CourseEditorComponent.prototype, "sidenav", void 0);
CourseEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-course-editor',
        template: __webpack_require__("../../../../../src/app/pages/admin-panel/course-editor/course-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin-panel/course-editor/course-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], CourseEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=course-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/course-users-list/course-users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<md-sidenav-container class=\"editor-container\">\r\n  <md-sidenav class=\"editor-sidenav\" #sidenav mode=\"side\" disableClose=\"true\" >\r\n    <h2>Predmet</h2>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Šifra predmeta\" disabled [(ngModel)]=\"course.courseCode\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Naziv predmeta\" disabled [(ngModel)]=\"course.name\">\r\n    </md-input-container>\r\n    <button *ngIf=\"!loading\" md-raised-button (click)=\"updateCourse()\">Sačuvaj korisnike</button>\r\n  </md-sidenav>\r\n  <ng2-md-datatable *ngIf=\"!loading\" selectable=\"true\" (selectionChange)=\"onUserSelectionChanged($event)\">\r\n    <ng2-md-datatable-header>\r\n      <ng2-md-datatable-column>Puno ime</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Korisničko ime</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Imejl adresa</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Tip korisnika</ng2-md-datatable-column>\r\n    </ng2-md-datatable-header>\r\n    <tbody>\r\n    <ng2-md-datatable-row *ngFor=\"let user of allUsers\" [selectableValue]=\"user\">\r\n      <td>{{user.fullName}}</td>\r\n      <td>{{user.username}}</td>\r\n      <td>{{user.email}}</td>\r\n      <td>{{user.userRole | user_type}}</td>\r\n    </ng2-md-datatable-row>\r\n    </tbody>\r\n  </ng2-md-datatable>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/course-users-list/course-users-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-container {\n  min-height: 100%; }\n\n.editor-sidenav {\n  padding: 10px; }\n\n.editor-sidenav md-input-container {\n  display: block; }\n\n.editor-sidenav md-select {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/course-users-list/course-users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_course__ = __webpack_require__("../../../../../src/app/models/course.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseUsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseUsersListComponent = (function () {
    function CourseUsersListComponent(route, adminService, alertService) {
        this.route = route;
        this.adminService = adminService;
        this.alertService = alertService;
        this.course = new __WEBPACK_IMPORTED_MODULE_2__models_course__["a" /* Course */]();
        this.allUsers = [];
    }
    CourseUsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.courseId = +params['id'];
        });
        this.loadCourse();
        this.loadUsers();
    };
    CourseUsersListComponent.prototype.ngAfterViewInit = function () {
        this.sidenav.open();
    };
    CourseUsersListComponent.prototype.loadCourse = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.getCourse(this.courseId)
            .subscribe(function (data) {
            console.log(data);
            _this.course = data;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
        });
    };
    CourseUsersListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.getUsers()
            .subscribe(function (data) {
            console.log(data);
            _this.allUsers = data.filter(function (u) { return u.userRole.roleId != 1; });
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CourseUsersListComponent.prototype.updateCourse = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.updateCourse(this.course, this.selectedUsers)
            .subscribe(function (data) {
            console.log(data);
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CourseUsersListComponent.prototype.onUserSelectionChanged = function (event) {
        this.selectedUsers = event.selectedValues;
    };
    return CourseUsersListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdSidenav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdSidenav */]) === "function" && _a || Object)
], CourseUsersListComponent.prototype, "sidenav", void 0);
CourseUsersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-course-users-list',
        template: __webpack_require__("../../../../../src/app/pages/admin-panel/course-users-list/course-users-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin-panel/course-users-list/course-users-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_service__["a" /* AdminService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], CourseUsersListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course-users-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/exam-editor/exam-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<md-sidenav-container class=\"editor-container\">\r\n  <md-sidenav class=\"editor-sidenav\" #sidenav mode=\"side\" disableClose=\"true\" >\r\n    <h2>Ispiti</h2>\r\n    <md-select placeholder=\"Predmet\" [(ngModel)]=\"exam.course\">\r\n      <md-option *ngFor=\"let course of courses\" [value]=\"course\">\r\n        {{course.courseCode}}\r\n      </md-option>\r\n    </md-select>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Naziv ispita\" [(ngModel)]=\"exam.name\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <textarea mdInput placeholder=\"Opis ispita\" [(ngModel)]=\"exam.description\"></textarea>\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Broj pitanja\" [(ngModel)]=\"exam.numberOfQuestions\">\r\n    </md-input-container>\r\n    <button *ngIf=\"!working\" md-raised-button (click)=\"addExam()\">Dodaj ispit</button>\r\n    <md-spinner *ngIf=\"working\"></md-spinner>\r\n  </md-sidenav>\r\n  <ng2-md-datatable *ngIf=\"!loading\" selectable=\"false\">\r\n    <ng2-md-datatable-header>\r\n      <ng2-md-datatable-column>Predmet</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Naziv ispita</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Opis ispita</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Broj pitanja</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Akcije</ng2-md-datatable-column>\r\n    </ng2-md-datatable-header>\r\n    <tbody>\r\n    <ng2-md-datatable-row *ngFor=\"let exam of exams\">\r\n      <td>{{exam.course.courseCode}}</td>\r\n      <td>{{exam.name}}</td>\r\n      <td>{{exam.description}}</td>\r\n      <td>{{exam.numberOfQuestions}}</td>\r\n      <td><a (click)=\"deleteExam(exam)\"><md-icon>delete</md-icon></a></td>\r\n    </ng2-md-datatable-row>\r\n    </tbody>\r\n  </ng2-md-datatable>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/exam-editor/exam-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-container {\n  min-height: 100%; }\n\n.editor-sidenav {\n  padding: 10px; }\n\n.editor-sidenav md-input-container {\n  display: block; }\n\n.editor-sidenav md-select {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/exam-editor/exam-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_exam__ = __webpack_require__("../../../../../src/app/models/exam.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExamEditorComponent = (function () {
    function ExamEditorComponent(adminService, alertService) {
        this.adminService = adminService;
        this.alertService = alertService;
        this.exams = [];
        this.courses = [];
        this.exam = new __WEBPACK_IMPORTED_MODULE_4__models_exam__["a" /* Exam */]();
    }
    ExamEditorComponent.prototype.ngOnInit = function () {
        this.loadExams();
        this.loadCourses();
        this.sidenav.open();
    };
    ExamEditorComponent.prototype.loadExams = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.getExams()
            .subscribe(function (data) {
            console.log(data);
            _this.exams = data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamEditorComponent.prototype.loadCourses = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.getCourses()
            .subscribe(function (data) {
            console.log(data);
            _this.courses = data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamEditorComponent.prototype.addExam = function () {
        var _this = this;
        this.working = true;
        this.alertService.clearMessage();
        this.adminService.createExam(this.exam)
            .subscribe(function (data) {
            console.log(data);
            _this.exam.examId = data.id;
            _this.exams.push(_this.exam);
            _this.exam = new __WEBPACK_IMPORTED_MODULE_4__models_exam__["a" /* Exam */]();
            _this.working = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.working = false;
        });
    };
    ExamEditorComponent.prototype.deleteExam = function (exam) {
        var _this = this;
        this.working = true;
        this.alertService.clearMessage();
        this.adminService.deleteExam(exam)
            .subscribe(function (data) {
            console.log(data);
            var index = _this.exams.indexOf(exam);
            if (index >= 0) {
                _this.exams.splice(index, 1);
            }
            _this.working = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.working = false;
        });
    };
    return ExamEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */]) === "function" && _a || Object)
], ExamEditorComponent.prototype, "sidenav", void 0);
ExamEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-exam-editor',
        template: __webpack_require__("../../../../../src/app/pages/admin-panel/exam-editor/exam-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin-panel/exam-editor/exam-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], ExamEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=exam-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/user-editor/user-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<md-sidenav-container class=\"editor-container\">\r\n  <md-sidenav class=\"editor-sidenav\" #sidenav mode=\"side\" disableClose=\"true\" >\r\n    <h2>Korisnici</h2>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Puno ime\" [(ngModel)]=\"user.fullName\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Korisničko ime\" [(ngModel)]=\"user.username\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Imejl adresa\" [(ngModel)]=\"user.email\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Šifra\" [(ngModel)]=\"user.password\">\r\n    </md-input-container>\r\n    <md-select placeholder=\"Tip korisnika\" [(ngModel)]=\"user.userRole\">\r\n      <md-option *ngFor=\"let role of roles\" [value]=\"role\">\r\n        {{role | user_type}}\r\n      </md-option>\r\n    </md-select>\r\n    <button *ngIf=\"!working\" md-raised-button (click)=\"addUser()\">Dodaj korisnika</button>\r\n    <md-spinner *ngIf=\"working\"></md-spinner>\r\n  </md-sidenav>\r\n  <ng2-md-datatable *ngIf=\"!loading\" selectable=\"false\">\r\n    <ng2-md-datatable-header>\r\n      <ng2-md-datatable-column>Puno ime</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Korisničko ime</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Imejl adresa</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Tip korisnika</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Akcije</ng2-md-datatable-column>\r\n    </ng2-md-datatable-header>\r\n    <tbody>\r\n    <ng2-md-datatable-row *ngFor=\"let user of users\">\r\n      <td>{{user.fullName}}</td>\r\n      <td>{{user.username}}</td>\r\n      <td>{{user.email}}</td>\r\n      <td>{{user.userRole | user_type}}</td>\r\n      <td><a (click)=\"deleteUser(user)\"><md-icon>delete</md-icon></a></td>\r\n    </ng2-md-datatable-row>\r\n    </tbody>\r\n  </ng2-md-datatable>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/user-editor/user-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-container {\n  min-height: 100%; }\n\n.editor-sidenav {\n  padding: 10px; }\n\n.editor-sidenav md-input-container {\n  display: block; }\n\n.editor-sidenav md-select {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin-panel/user-editor/user-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__("../../../../../src/app/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditorComponent = (function () {
    function UserEditorComponent(adminService, alertService) {
        this.adminService = adminService;
        this.alertService = alertService;
        this.users = [];
        this.roles = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
    }
    UserEditorComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadRoles();
        this.sidenav.open();
    };
    UserEditorComponent.prototype.loadUsers = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.getUsers()
            .subscribe(function (data) {
            console.log(data);
            _this.users = data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    UserEditorComponent.prototype.loadRoles = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.adminService.getRoles()
            .subscribe(function (data) {
            console.log(data);
            _this.roles = data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    UserEditorComponent.prototype.addUser = function () {
        var _this = this;
        this.working = true;
        this.alertService.clearMessage();
        this.adminService.createUser(this.user)
            .subscribe(function (data) {
            console.log(data);
            _this.user.userId = data.id;
            _this.users.push(_this.user);
            _this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
            _this.working = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.working = false;
        });
    };
    UserEditorComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.working = true;
        this.alertService.clearMessage();
        this.adminService.deleteUser(user)
            .subscribe(function (data) {
            console.log(data);
            var index = _this.users.indexOf(user);
            if (index >= 0) {
                _this.users.splice(index, 1);
            }
            _this.working = false;
        }, function (error) {
            console.log(error);
            _this.alertService.error(error);
            _this.working = false;
        });
    };
    return UserEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */]) === "function" && _a || Object)
], UserEditorComponent.prototype, "sidenav", void 0);
UserEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-editor',
        template: __webpack_require__("../../../../../src/app/pages/admin-panel/user-editor/user-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin-panel/user-editor/user-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], UserEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=user-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-panel/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\r\n  <div *ngIf=\"currentUser\" class=\"main-panel\">\r\n    <h2>\r\n      Dobrodošli, {{currentUser.fullName}}!<br>\r\n    </h2>\r\n  </div>\r\n  <div *ngIf=\"!currentUser\">\r\n    <h2 class=\"text-center\">\r\n      Pozdrav!<br>\r\n      <small>Ulogujte se da biste pristupili stranici za testiranje.</small>\r\n    </h2>\r\n    <login></login>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/main-panel/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  font-size: 21px;\n  margin: 21px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-panel/home/home.component.ts":
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/app/pages/main-panel/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/main-panel/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-panel/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n  <form class=\"login-form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': !loading && f.submitted && !username.valid }\">\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username-field\" [disabled]=\"loading\"\r\n             [(ngModel)]=\"model.username\" #username=\"ngModel\" placeholder=\"Korisničko ime\" required/>\r\n      <p *ngIf=\"!loading && f.submitted && !model.username\" class=\"message\">Korisničko ime je obavezno.</p>\r\n      <p *ngIf=\"!loading && model.username && !username.valid\" class=\"message\">Korisničko ime sadrži nedozvoljene znakove.</p>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': !loading && f.submitted && !password.valid }\">\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password-field\" [disabled]=\"loading\"\r\n             [(ngModel)]=\"model.password\" #password=\"ngModel\" placeholder=\"Šifra\" validateNospace/>\r\n      <p *ngIf=\"!loading && model.password && !password.valid\" class=\"message\">Šifra sadrži nedozvoljene znakove.</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\" id=\"login-button\">Uloguj se</button>\r\n      <img *ngIf=\"loading\" src=\"/assets/spinner32.svg\"/>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/main-panel/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Form */\n.form {\n  position: relative;\n  z-index: 1;\n  background: #f2f2f2;\n  max-width: 300px;\n  margin: auto;\n  padding: 30px;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  text-align: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.form .thumbnail {\n  background: #333;\n  width: 150px;\n  height: 150px;\n  margin: 0 auto 15px;\n  padding: 50px 30px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  border-bottom-left-radius: 100%;\n  border-bottom-right-radius: 100%;\n  box-sizing: border-box; }\n\n.form .thumbnail img {\n  display: block;\n  width: 100%; }\n\n.form input {\n  outline: 0;\n  background: #ffffff;\n  width: 100%;\n  border: 0;\n  margin-top: 15px;\n  padding: 15px;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-sizing: border-box;\n  font-size: 14px; }\n\n.form button {\n  outline: 0;\n  background: #333;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  margin-top: 15px;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  color: #ffffff;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer; }\n\n.form button:hover {\n  color: #e3e3e3; }\n\n.form img {\n  margin-top: 15px; }\n\n.form .message {\n  margin: 5px 0 0 0;\n  color: #b3b3b3;\n  font-size: 12px; }\n\n.form .message a {\n  color: #31708f;\n  text-decoration: none; }\n\n.form .register-form {\n  display: none; }\n\n.has-error .message {\n  color: #a94442; }\n\n.has-error input {\n  border: 1px solid #a94442; }\n\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto; }\n\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.container .info {\n  margin: 50px auto;\n  text-align: center; }\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a; }\n\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px; }\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n\n.container .info span .fa {\n  color: #a70532; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-panel/login/login.component.ts":
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
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/pages/main-panel/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/main-panel/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/profesor-panel/exam-overview/exam-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<div *ngIf=\"!loading\" class=\"exam-wrapper\">\r\n  <div *ngIf=\"studentExam\" class=\"exam-details\">\r\n    <h2>{{studentExam.exam.name}}</h2>\r\n    <div class=\"exam-description\">{{studentExam.exam.description}}</div>\r\n    <div class=\"student-name\">Student: {{studentExam.student.fullName}} <small>({{studentExam.student.email}})</small></div>\r\n    <div class=\"exam-points\">Bodovi: {{studentExam.points}}/{{studentExam.exam.numberOfQuestions}}</div>\r\n    <div class=\"exam-time\">Ispit započet: {{studentExam.startTime | date:'dd.MM.yyyy. hh:mm:ss'}}</div>\r\n    <div class=\"exam-time\">Ispit završen: {{studentExam.endTime | date:'dd.MM.yyyy. hh:mm:ss'}}</div>\r\n  </div>\r\n  <div *ngIf=\"studentExam.questions\">\r\n    <div class=\"exam-test\">\r\n      <div *ngFor=\"let examQuestion of studentExam.questions\" class=\"exam-question\">\r\n        <h4>{{examQuestion.question.text}}</h4>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'truefalse'\">\r\n          <md-radio-group [(ngModel)]=\"examQuestion.answerStatement\">\r\n            <md-radio-button #rdbTrue disabled [value]=\"true\"\r\n                             [ngClass]=\"{\r\n                             'exam-answer-correct': rdbTrue.checked && examQuestion.answerStatement === examQuestion.question.correctStatement,\r\n                             'exam-answer-incorrect': rdbTrue.checked && examQuestion.answerStatement !== examQuestion.question.correctStatement,\r\n                             'exam-answer-missed': examQuestion.answerStatement == null && examQuestion.question.correctStatement\r\n                             }\">\r\n              Tačno\r\n            </md-radio-button>\r\n            <md-radio-button #rdbFalse disabled [value]=\"false\"\r\n                             [ngClass]=\"{\r\n                             'exam-answer-correct': rdbFalse.checked && examQuestion.answerStatement === examQuestion.question.correctStatement,\r\n                             'exam-answer-incorrect': rdbFalse.checked && examQuestion.answerStatement !== examQuestion.question.correctStatement,\r\n                             'exam-answer-missed': examQuestion.answerStatement == null && !examQuestion.question.correctStatement\r\n                             }\">\r\n              Netačno\r\n            </md-radio-button>\r\n          </md-radio-group>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'numerical'\"\r\n                             [ngClass]=\"{\r\n                             'exam-answer-correct': examQuestion.answerValue === examQuestion.question.correctValue,\r\n                             'exam-answer-incorrect': examQuestion.answerValue != null && examQuestion.answerValue !== examQuestion.question.correctValue,\r\n                             'exam-answer-missed': examQuestion.answerValue == null\r\n                             }\">\r\n          <md-input-container>\r\n            <input mdInput disabled placeholder=\"Odgovor\" [(ngModel)]=\"examQuestion.answerValue\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'single'\">\r\n          <md-radio-group [(ngModel)]=\"examQuestion.singleChoiceAnswerId\">\r\n            <md-radio-button #rdbSingle *ngFor=\"let answer of examQuestion.question.singleChoiceAnswers\" disabled [value]=\"answer.singleChoiceAnswerId\"\r\n                             [ngClass]=\"{\r\n                             'exam-answer-correct': rdbSingle.checked && examQuestion.singleChoiceAnswerId === examQuestion.question.singleChoiceCorrectAnswerId,\r\n                             'exam-answer-incorrect': rdbSingle.checked && examQuestion.singleChoiceAnswerId !== examQuestion.question.singleChoiceCorrectAnswerId,\r\n                             'exam-answer-missed': examQuestion.singleChoiceAnswerId == null && answer.singleChoiceAnswerId === examQuestion.question.singleChoiceCorrectAnswerId\r\n                             }\">\r\n              {{answer.text}}\r\n            </md-radio-button>\r\n          </md-radio-group>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'multiple'\">\r\n          <md-checkbox #chbMultiple *ngFor=\"let answer of examQuestion.question.multipleChoiceAnswers; let i = index\" disabled [(ngModel)]=\"examQuestion.multipleChoiceAnswerMap[answer.multipleChoiceAnswerId]\"\r\n                             [ngClass]=\"{\r\n                             'exam-answer-correct': chbMultiple.checked && examQuestion.question.multipleChoiceAnswers[i].answerCorrect,\r\n                             'exam-answer-incorrect': chbMultiple.checked && !examQuestion.question.multipleChoiceAnswers[i].answerCorrect,\r\n                             'exam-answer-missed': !chbMultiple.checked && examQuestion.question.multipleChoiceAnswers[i].answerCorrect\r\n                             }\">\r\n            {{answer.text}}\r\n          </md-checkbox>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType !== 'numerical'\" class=\"exam-question-margin\"></div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/profesor-panel/exam-overview/exam-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exam-wrapper {\n  padding: 20px; }\n\n.exam-wrapper p {\n  margin-bottom: 10px; }\n\n.exam-wrapper a {\n  color: #31708f; }\n\n.exam-details {\n  margin-bottom: 20px; }\n\n.exam-details h2 {\n  font-size: 30px; }\n\n.exam-description {\n  font-style: italic;\n  margin-bottom: 10px; }\n\n.exam-time {\n  color: #b0b0b0;\n  font-size: 13px; }\n\n.exam-question-margin {\n  height: 20px; }\n\n.exam-question h4 {\n  font-size: 20px;\n  margin-bottom: 5px; }\n\n.material-icons, .exam-answer-correct::after, .exam-answer-missed::after, .exam-answer-incorrect::after {\n  direction: ltr;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  vertical-align: middle;\n  font-family: 'Material Icons';\n  font-size: 30px;\n  margin-left: 5px;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n.exam-answer-correct::after {\n  content: 'check';\n  color: #388e3c; }\n\n.exam-answer-missed::after {\n  content: 'label';\n  color: #fdd835; }\n\n.exam-answer-incorrect::after {\n  content: 'close';\n  color: #d32f2f; }\n\n.exam-question md-checkbox {\n  display: block;\n  margin-bottom: 2px; }\n\n.exam-question md-radio-button {\n  display: block;\n  margin-bottom: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profesor-panel/exam-overview/exam-overview.component.ts":
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
            _this.studentExamId = +params['id'];
        });
        this.loadExam();
    };
    ExamOverviewComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    ExamOverviewComponent.prototype.loadExam = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getStudentExam(this.studentExamId)
            .subscribe(function (data) {
            console.log(data);
            _this.prepareExam(data);
            _this.studentExam = data;
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamOverviewComponent.prototype.prepareExam = function (studentExam) {
        studentExam.questions.filter(function (q) { return q.question.questionType == 'multiple'; }).forEach(function (question) {
            question['multipleChoiceAnswerMap'] = {};
            if (question.multipleChoiceAnswerIds) {
                question.multipleChoiceAnswerIds.forEach(function (id) {
                    question['multipleChoiceAnswerMap'][id] = true;
                });
            }
        });
    };
    return ExamOverviewComponent;
}());
ExamOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-exam-overview',
        template: __webpack_require__("../../../../../src/app/pages/profesor-panel/exam-overview/exam-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/profesor-panel/exam-overview/exam-overview.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], ExamOverviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=exam-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/profesor-panel/student-exams/student-exams.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<md-sidenav-container class=\"editor-container\">\r\n  <md-sidenav class=\"editor-sidenav\" #sidenav mode=\"side\" disableClose=\"true\" >\r\n    <h2>Predmeti</h2>\r\n    <ul>\r\n      <li *ngFor=\"let course of courses\" class=\"course\">\r\n        <div class=\"course-name\">\r\n          <a (click)=\"selectCourse(course)\">{{course.courseCode}}</a>\r\n        </div>\r\n        <div class=\"course-description\">\r\n          {{course.name}}\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </md-sidenav>\r\n  <div *ngIf=\"selectedCourse\">\r\n    <h2>{{selectedCourse.courseCode}} - {{selectedCourse.name}}</h2>\r\n    <ng2-md-datatable selectable=\"false\">\r\n      <ng2-md-datatable-header>\r\n        <ng2-md-datatable-column>Ispit</ng2-md-datatable-column>\r\n        <ng2-md-datatable-column>Student</ng2-md-datatable-column>\r\n        <ng2-md-datatable-column>Ispit započet</ng2-md-datatable-column>\r\n        <ng2-md-datatable-column>Ispit završen</ng2-md-datatable-column>\r\n        <ng2-md-datatable-column>Bodovi</ng2-md-datatable-column>\r\n      </ng2-md-datatable-header>\r\n      <tbody>\r\n      <ng2-md-datatable-row *ngFor=\"let studentExam of selectedCourse.studentExams\" [routerLink]=\"['/overview', studentExam.studentExamId]\" class=\"exam-column\" >\r\n        <td class=\"exam-name\">{{studentExam.exam.name}}</td>\r\n        <td>{{studentExam.student.fullName}}</td>\r\n        <td>{{studentExam.startTime | date:'dd.MM.yyyy. hh:mm:ss'}}</td>\r\n        <td>{{studentExam.endTime | date:'dd.MM.yyyy. hh:mm:ss'}}</td>\r\n        <td>{{studentExam.points}}/{{studentExam.exam.numberOfQuestions}}</td>\r\n      </ng2-md-datatable-row>\r\n      </tbody>\r\n    </ng2-md-datatable>\r\n  </div>\r\n  <div *ngIf=\"!selectedCourse\">\r\n\r\n  </div>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/profesor-panel/student-exams/student-exams.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-container {\n  min-height: 100%; }\n\n.editor-sidenav {\n  padding-right: 10px;\n  min-width: 200px; }\n\n.course {\n  margin-bottom: 10px; }\n\n.course-name a {\n  font-weight: bold; }\n\n.course-description {\n  font-style: italic; }\n\n.editor-sidenav md-input-container {\n  display: block; }\n\n.editor-sidenav md-select {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  display: block; }\n\n.exam-column {\n  cursor: pointer; }\n\n.exam-column:hover .exam-name {\n  font-weight: bold; }\n\nh2 {\n  margin-top: 10px;\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profesor-panel/student-exams/student-exams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentExamsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentExamsComponent = (function () {
    function StudentExamsComponent(studentService, alertService) {
        this.studentService = studentService;
        this.alertService = alertService;
        this.courses = [];
    }
    StudentExamsComponent.prototype.ngOnInit = function () {
        this.loadStudentExams();
        this.sidenav.open();
    };
    StudentExamsComponent.prototype.ngOnDestroy = function () {
    };
    StudentExamsComponent.prototype.loadStudentExams = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getCompletedExams()
            .subscribe(function (data) {
            console.log(data);
            _this.courses = _this.processStudentExams(data);
            if (_this.courses.length > 0) {
                _this.selectCourse(_this.courses[0]);
            }
            console.log(_this.courses);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    StudentExamsComponent.prototype.processStudentExams = function (studentExams) {
        var courses = [];
        studentExams.forEach(function (studentExam) {
            var course = courses.find(function (c) { return c.courseId == studentExam.exam.course.courseId; });
            if (!course) {
                course = Object.assign(studentExam.exam.course);
                course.studentExams = [];
                courses.push(course);
            }
            course.studentExams.push(studentExam);
        });
        return courses;
    };
    StudentExamsComponent.prototype.selectCourse = function (course) {
        this.selectedCourse = course;
    };
    return StudentExamsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSidenav */]) === "function" && _a || Object)
], StudentExamsComponent.prototype, "sidenav", void 0);
StudentExamsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-student-exams',
        template: __webpack_require__("../../../../../src/app/pages/profesor-panel/student-exams/student-exams.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/profesor-panel/student-exams/student-exams.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], StudentExamsComponent);

var _a, _b, _c;
//# sourceMappingURL=student-exams.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/available-exams/available-exams.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<div *ngIf=\"!loading\" class=\"exam-list-wrapper\">\r\n  <div *ngFor=\"let course of courses\" class=\"course\">\r\n    <h2>{{course.courseCode}} - {{course.name}}</h2>\r\n    <ul>\r\n      <li *ngFor=\"let exam of course.exams\" class=\"exam\">\r\n        <div class=\"exam-name\">\r\n          <a [routerLink]=\"['/exams/available', exam.examId]\">{{exam.name}}</a>\r\n        </div>\r\n        <div class=\"exam-description\">\r\n          {{exam.description}}\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/available-exams/available-exams.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.exam-list-wrapper {\n  padding: 20px; }\n\n.course {\n  margin-bottom: 20px; }\n\n.course h2 {\n  font-size: 20px;\n  margin-bottom: 10px; }\n\n.exam {\n  margin-bottom: 10px; }\n\n.exam p b {\n  font-weight: bold; }\n\n.exam-name a {\n  font-weight: bold; }\n\n.exam-description {\n  font-style: italic; }\n\n.exam-time {\n  color: #b0b0b0;\n  font-size: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/available-exams/available-exams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableExamsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvailableExamsComponent = (function () {
    function AvailableExamsComponent(authService, studentService, alertService) {
        this.authService = authService;
        this.studentService = studentService;
        this.alertService = alertService;
        this.courses = [];
    }
    AvailableExamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.user$.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.loadExams();
    };
    AvailableExamsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AvailableExamsComponent.prototype.loadExams = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getAvailableExams()
            .subscribe(function (data) {
            console.log(data);
            _this.courses = _this.processExams(data);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    AvailableExamsComponent.prototype.processExams = function (exams) {
        var courses = [];
        exams.forEach(function (exam) {
            var course = courses.find(function (c) { return c.courseId == exam.course.courseId; });
            if (!course) {
                course = Object.assign(exam.course);
                course.exams = [];
                courses.push(course);
            }
            course.exams.push(exam);
        });
        return courses;
    };
    return AvailableExamsComponent;
}());
AvailableExamsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-available-exams',
        template: __webpack_require__("../../../../../src/app/pages/student-panel/available-exams/available-exams.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/student-panel/available-exams/available-exams.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], AvailableExamsComponent);

var _a, _b, _c;
//# sourceMappingURL=available-exams.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/completed-exams/completed-exams.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<div *ngIf=\"!loading\">\r\n  <ng2-md-datatable selectable=\"false\">\r\n    <ng2-md-datatable-header>\r\n      <ng2-md-datatable-column>Predmet</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Ispit</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Ispit započet</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Ispit završen</ng2-md-datatable-column>\r\n      <ng2-md-datatable-column>Bodovi</ng2-md-datatable-column>\r\n    </ng2-md-datatable-header>\r\n    <tbody>\r\n    <ng2-md-datatable-row *ngFor=\"let studentExam of studentExams\" [routerLink]=\"['/exams/completed', studentExam.studentExamId]\" class=\"exam-column\" >\r\n      <td>{{studentExam.exam.course.courseCode}} - {{studentExam.exam.course.name}}</td>\r\n      <td class=\"exam-name\">{{studentExam.exam.name}}</td>\r\n      <td>{{studentExam.startTime | date:'dd.MM.yyyy. hh:mm:ss'}}</td>\r\n      <td>{{studentExam.endTime | date:'dd.MM.yyyy. hh:mm:ss'}}</td>\r\n      <td>{{studentExam.points}}/{{studentExam.exam.numberOfQuestions}}</td>\r\n    </ng2-md-datatable-row>\r\n    </tbody>\r\n  </ng2-md-datatable>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/completed-exams/completed-exams.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exam-column {\n  cursor: pointer; }\n\n.exam-column:hover .exam-name {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/completed-exams/completed-exams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedExamsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompletedExamsComponent = (function () {
    function CompletedExamsComponent(authService, studentService, alertService) {
        this.authService = authService;
        this.studentService = studentService;
        this.alertService = alertService;
    }
    CompletedExamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.user$.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.loadExams();
    };
    CompletedExamsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CompletedExamsComponent.prototype.loadExams = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getCompletedExams()
            .subscribe(function (data) {
            console.log(data);
            _this.studentExams = data;
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return CompletedExamsComponent;
}());
CompletedExamsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-completed-exams',
        template: __webpack_require__("../../../../../src/app/pages/student-panel/completed-exams/completed-exams.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/student-panel/completed-exams/completed-exams.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], CompletedExamsComponent);

var _a, _b, _c;
//# sourceMappingURL=completed-exams.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/exam-test/exam-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n<div *ngIf=\"!loading\" class=\"exam-wrapper\">\r\n  <div *ngIf=\"exam\" class=\"exam-details\">\r\n    <h2>{{exam.name}}</h2>\r\n    <div class=\"exam-description\">{{exam.description}}</div>\r\n    <div class=\"exam-points\">Maksimum bodova: {{exam.numberOfQuestions}}</div>\r\n    <div *ngIf=\"studentExam\" class=\"exam-time\">Ispit započet: {{studentExam.startTime | date:'dd.MM.yyyy. hh:mm:ss'}}</div>\r\n  </div>\r\n  <div *ngIf=\"!studentExam\">\r\n    <p>\r\n      Kada počnete ispit, trenutak započinjanja ispita biće zabeležen i nećete moći da pokušate ponovo.\r\n      <br/>\r\n      U slučaju greške u sistemu molimo Vas da to što pre prijavite administratoru.\r\n    </p>\r\n    <a (click)=\"startExam()\">Kliknite ovde da počnete.</a>\r\n  </div>\r\n  <div *ngIf=\"studentExam\">\r\n    <div class=\"exam-test\">\r\n      <div *ngFor=\"let examQuestion of studentExam.questions\" class=\"exam-question\">\r\n        <h4>{{examQuestion.question.text}}</h4>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'truefalse'\">\r\n          <md-radio-group [(ngModel)]=\"answers[examQuestion.studentExamQuestionId].answerStatement\">\r\n            <md-radio-button [value]=\"true\">\r\n              Tačno\r\n            </md-radio-button>\r\n            <md-radio-button [value]=\"false\">\r\n              Netačno\r\n            </md-radio-button>\r\n          </md-radio-group>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'numerical'\">\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Odgovor\" [(ngModel)]=\"answers[examQuestion.studentExamQuestionId].answerValue\">\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'single'\">\r\n          <md-radio-group [(ngModel)]=\"answers[examQuestion.studentExamQuestionId].singleChoiceAnswerId\">\r\n            <md-radio-button *ngFor=\"let answer of examQuestion.question.singleChoiceAnswers\" [value]=\"answer.singleChoiceAnswerId\">\r\n              {{answer.text}}\r\n            </md-radio-button>\r\n          </md-radio-group>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType === 'multiple'\">\r\n          <md-checkbox *ngFor=\"let answer of examQuestion.question.multipleChoiceAnswers\" [(ngModel)]=\"answers[examQuestion.studentExamQuestionId].multipleChoiceAnswerMap[answer.multipleChoiceAnswerId]\">\r\n            {{answer.text}}\r\n          </md-checkbox>\r\n        </div>\r\n\r\n        <div *ngIf=\"examQuestion.question.questionType !== 'numerical'\" class=\"exam-question-margin\"></div>\r\n\r\n      </div>\r\n    </div>\r\n    <button md-raised-button (click)=\"finishExam()\">Završi</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/exam-test/exam-test.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exam-wrapper {\n  padding: 20px; }\n\n.exam-wrapper p {\n  margin-bottom: 10px; }\n\n.exam-details {\n  margin-bottom: 20px; }\n\n.exam-details h2 {\n  font-size: 30px; }\n\n.exam-description {\n  font-style: italic;\n  margin-bottom: 10px; }\n\n.exam-time {\n  color: #b0b0b0;\n  font-size: 13px; }\n\n.exam-question-margin {\n  height: 20px; }\n\n.exam-question h4 {\n  font-size: 20px;\n  margin-bottom: 5px; }\n\n.exam-answer-correct {\n  background: green; }\n\n.exam-answer-incorrect {\n  background: red; }\n\n.exam-question md-checkbox {\n  display: block;\n  margin-bottom: 2px; }\n\n.exam-question md-radio-button {\n  display: block;\n  margin-bottom: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/student-panel/exam-test/exam-test.component.ts":
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
        this.loadExamDetails();
    };
    ExamTestComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    ExamTestComponent.prototype.loadExamDetails = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.getExam(this.examId)
            .subscribe(function (data) {
            _this.exam = data;
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamTestComponent.prototype.startExam = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        this.studentService.startExam(this.currentUser, this.examId)
            .subscribe(function (data) {
            _this.prepareAnswers(data);
            _this.studentExam = data;
            console.log(data);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamTestComponent.prototype.prepareAnswers = function (exam) {
        var answers = {};
        exam.questions.forEach(function (examQuestion) {
            var question = examQuestion.question;
            var answer = {
                "question": question
            };
            switch (question.questionType) {
                case 'multiple':
                    answer['multipleChoiceAnswerMap'] = {};
            }
            ;
            answers[examQuestion.studentExamQuestionId] = answer;
        });
        this.answers = answers;
    };
    ExamTestComponent.prototype.finishExam = function () {
        var _this = this;
        this.loading = true;
        this.alertService.clearMessage();
        var answers = this.processAnswers();
        console.log(answers);
        this.studentService.finishExam(this.studentExam, answers)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['exams/completed', _this.studentExam.studentExamId]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamTestComponent.prototype.processAnswers = function () {
        var _this = this;
        var answers = [];
        Object.keys(this.answers).forEach(function (key) {
            var answer = _this.answers[key];
            switch (answer.question.questionType) {
                case 'truefalse':
                    if (answer.answerStatement == null) {
                        // TODO: Display confirmation
                    }
                    break;
                case 'numerical':
                    if (answer.answerValue == null) {
                        // TODO: Display confirmation
                    }
                    else {
                        answer.answerValue = +answer.answerValue;
                    }
                    break;
                case 'single':
                    if (answer.singleChoiceAnswerId == null) {
                        // TODO: Display confirmation
                    }
                    break;
                case 'multiple':
                    answer.multipleChoiceAnswerIds = Object.keys(answer['multipleChoiceAnswerMap']).filter(function (mc) { return answer['multipleChoiceAnswerMap'][mc]; });
                    break;
            }
            answers.push(answer);
        });
        return answers;
    };
    return ExamTestComponent;
}());
ExamTestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-exam-test',
        template: __webpack_require__("../../../../../src/app/pages/student-panel/exam-test/exam-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/student-panel/exam-test/exam-test.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], ExamTestComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=exam-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_service__ = __webpack_require__("../../../../../src/app/services/rest.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
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




var AdminService = (function (_super) {
    __extends(AdminService, _super);
    function AdminService(http) {
        return _super.call(this, http) || this;
    }
    AdminService.prototype.getCourses = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/courses", options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.getCourse = function (courseId) {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/courses/" + courseId, options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.createCourse = function (course) {
        var body = JSON.stringify(course);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/courses", body, options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.updateCourse = function (course, selectedUsers) {
        var body = JSON.stringify(selectedUsers);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/courses/" + course.courseId + "/users", body, options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.deleteCourse = function (course) {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/courses/" + course.courseId, options);
    };
    AdminService.prototype.getExams = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/exams", options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.createExam = function (exam) {
        var body = JSON.stringify(exam);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/exams", body, options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.deleteExam = function (exam) {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/exams/" + exam.examId, options);
    };
    AdminService.prototype.getUsers = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/users", options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.createUser = function (user) {
        var body = JSON.stringify(user);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/users", body, options).map(function (res) { return res.json(); });
    };
    AdminService.prototype.deleteUser = function (user) {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/users/" + user.userId, options);
    };
    AdminService.prototype.getRoles = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/roles", options).map(function (res) { return res.json(); });
    };
    return AdminService;
}(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]));
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_service__ = __webpack_require__("../../../../../src/app/services/rest.service.ts");
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
        var user = JSON.parse(localStorage.getItem('user'));
        _this._userSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](user);
        _this.user$ = _this._userSource.asObservable();
        _this.user$.subscribe(function (user) { return _this._user = user; });
        return _this;
    }
    AuthenticationService.prototype.handleResponse = function (res) {
        console.log(res);
        var userData = res.json();
        if (!userData) {
            return;
        }
        var user = userData.user;
        var token = userData.token;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        this._userSource.next(user);
        return user;
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
        params.username = username;
        params.password = password;
        var body = JSON.stringify(params);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/login", body, options).map(function (res) {
            return _this.handleResponse(res);
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this._userSource.next(null);
    };
    return AuthenticationService;
}(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]));
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

/***/ "../../../../../src/app/services/rest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestService = (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.options = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers, withCredentials: token != null });
    };
    return RestService;
}());
RestService._host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
RestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RestService);

var _a;
//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_service__ = __webpack_require__("../../../../../src/app/services/rest.service.ts");
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
    StudentService.prototype.getAvailableExams = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/student/exams/available", options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.getCompletedExams = function () {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/student/exams/completed", options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.getExam = function (examId) {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/exams/" + examId, options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.getStudentExam = function (studentExamId) {
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/student/exams/" + studentExamId, options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.startExam = function (user, examId) {
        var params = {
            "user": user
        };
        var body = JSON.stringify(params);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/exams/" + examId + "/start", body, options).map(function (res) { return res.json(); });
    };
    StudentService.prototype.finishExam = function (exam, answers) {
        var params = {
            "answers": answers
        };
        var body = JSON.stringify(params);
        console.log(body);
        var options = __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */].options();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]._host + "/student/exams/" + exam.studentExamId + "/finish", body, options).map(function (res) { return res.json(); });
    };
    return StudentService;
}(__WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]));
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
    apiUrl: ""
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