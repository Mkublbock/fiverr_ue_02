webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards__ = __webpack_require__("./src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_detail_device_details_component__ = __webpack_require__("./src/app/components/detail/device-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components__["h" /* LoginComponent */] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_2__components__["k" /* OverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["a" /* AuthGuard */]] },
    { path: 'options', component: __WEBPACK_IMPORTED_MODULE_2__components__["j" /* OptionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["a" /* AuthGuard */]] },
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_detail_device_details_component__["a" /* DeviceDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["a" /* AuthGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export check_token_expired */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("./src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards__ = __webpack_require__("./src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rest__ = __webpack_require__("./src/app/rest/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__validators__ = __webpack_require__("./src/app/validators/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_app_load_service__ = __webpack_require__("./src/app/services/app-load.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_token_interceptor_service__ = __webpack_require__("./src/app/services/token-interceptor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function check_token_expired(appLoadService) {
    return function () { return appLoadService.checkTokenExpiration(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["b" /* AvailableDeviceComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["f" /* DiagramComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["i" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["h" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["k" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["j" /* OptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["e" /* DeviceDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["c" /* BooleanControlComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["d" /* ContinuousControlComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components__["g" /* EnumControlComponent */],
                __WEBPACK_IMPORTED_MODULE_11__validators__["a" /* ConfirmValidator */],
                __WEBPACK_IMPORTED_MODULE_11__validators__["b" /* MaxValidator */],
                __WEBPACK_IMPORTED_MODULE_11__validators__["c" /* MinValidator */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_app_load_service__["a" /* AppLoadService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"], useFactory: check_token_expired, deps: [__WEBPACK_IMPORTED_MODULE_12__services_app_load_service__["a" /* AppLoadService */]], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_13__services_token_interceptor_service__["a" /* TokenInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_8__guards__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__rest__["a" /* AuthenticationClient */],
                __WEBPACK_IMPORTED_MODULE_9__rest__["b" /* DeviceClient */],
                __WEBPACK_IMPORTED_MODULE_9__rest__["c" /* PasswordClient */],
                __WEBPACK_IMPORTED_MODULE_10__services__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["b" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["c" /* DiagramService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["d" /* SessionStorageService */],
                __WEBPACK_IMPORTED_MODULE_10__services__["e" /* UserService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__components__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div role=\"navigation\" aria-label=\"jumplinks\">\n  <a href=\"javascript:void(0)\" (click)=\"jumpTo('content')\" class=\"accessibility\">Zum Inhalt springen</a>\n</div>\n\n<app-navigation [component]=\"component\"></app-navigation>\n\n<router-outlet (activate)=\"component = $event\" id=\"content\" class=\"main-container\"></router-outlet>\n\n<footer>\n  © 2018 <abbr title=\"Business Informatics Group\">BIG</abbr> Smart Production\n</footer>\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.component = null;
    }
    AppComponent.prototype.jumpTo = function (id) {
        var content = document.getElementById(id);
        if (content) {
            content.scrollIntoView();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/available-device/available-device.component.html":
/***/ (function(module, exports) {

module.exports = "<dl class=\"device-properties\">\n  <dt class=\"accessibility\">Maschinentyp</dt>\n  <dd [id]=\"'available-title-' + data.type\" class=\"device-type\">{{data.title}}</dd>\n</dl>\n<div class=\"device-image\">\n  <img width=\"100\" src=\"data:\" [src]=\"data.image\" [attr.alt]=\"data.title\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/available-device/available-device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableDeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvailableDeviceComponent = /** @class */ (function () {
    function AvailableDeviceComponent(el) {
        this.$el = $(el.nativeElement);
    }
    AvailableDeviceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$el.data('device', JSON.stringify(this.data));
        this.$el.draggable({
            cursor: 'move',
            containment: 'document',
            revert: 'invalid',
            helper: function () { return _this.$el.find('.device-image').first().clone(); },
            zIndex: 50
        });
    };
    AvailableDeviceComponent.prototype.ngOnDestroy = function () {
        this.$el.draggable('destroy');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], AvailableDeviceComponent.prototype, "data", void 0);
    AvailableDeviceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-available-device]',
            template: __webpack_require__("./src/app/components/available-device/available-device.component.html"),
            host: {
                'class': 'device',
                'tabindex': '0',
                '[attr.aria-labelledby]': '"available-title-" + data.type',
                '[attr.title]': 'data.title'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AvailableDeviceComponent);
    return AvailableDeviceComponent;
}());



/***/ }),

/***/ "./src/app/components/detail/base-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__models_device_model__);

var BaseControlComponent = /** @class */ (function () {
    function BaseControlComponent(deviceService) {
        this.deviceService = deviceService;
    }
    BaseControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.value = this.device.control.current;
        this.log = this.device.control.log.map(function (entry) { return _this.formatLogEntry(entry); }).join('');
        this.addToChart.apply(this, this.device.control.log);
        this.subscription = this.deviceService.getLogUpdates().subscribe(function (update) {
            if (update.device === _this.device) {
                _this.log += _this.formatLogEntry(update.logEntry);
                _this.addToChart(update.logEntry);
            }
        });
    };
    BaseControlComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    BaseControlComponent.prototype.onSubmit = function () {
        this.deviceService.updateDevice(this.device, this.value);
    };
    BaseControlComponent.prototype.formatLogEntry = function (entry) {
        return entry.date.toLocaleString() + ": " + this.valueToString(entry.oldValue) + " -> " + this.valueToString(entry.newValue) + "\n";
    };
    return BaseControlComponent;
}());



/***/ }),

/***/ "./src/app/components/detail/boolean/boolean-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-image-container\">\n  <ngx-charts-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"data\"\n    [legend]=\"true\"\n    [labels]=\"true\"\n    [doughnut]=\"true\">\n  </ngx-charts-pie-chart>\n</div>\n<div class=\"details-control-container\">\n  <label class=\"accessibility\" for=\"details-log\">Letzte Werteänderungen</label>\n  <textarea id=\"details-log\" class=\"details-logs\" [ngModel]=\"log\" placeholder=\"Gerätelog\" readonly rows=\"6\"></textarea>\n\n  <div class=\"details-settings\">\n    <h3>{{device.control.title}}</h3>\n\n    <form (submit)=\"onSubmit()\" #form=\"ngForm\">\n      <label class=\"form-label\">derzeit: {{valueToString(device.control.current)}}</label>\n\n      <label class=\"accessibility\" for=\"value\">Bitte gewünschten Wert auswählen.</label>\n      <input type=\"checkbox\" class=\"form-input\" id=\"value\" name=\"value\" [(ngModel)]=\"value\">\n      <button class=\"button button-submit\" [disabled]=\"form.invalid\">Wert setzen</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/detail/boolean/boolean-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_control_component__ = __webpack_require__("./src/app/components/detail/base-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_device_model__);
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




var BooleanControlComponent = /** @class */ (function (_super) {
    __extends(BooleanControlComponent, _super);
    function BooleanControlComponent(deviceService) {
        var _this = _super.call(this, deviceService) || this;
        _this.data = [{
                'name': 'Aus',
                'value': 0
            }, {
                'name': 'An',
                'value': 0
            }];
        _this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        return _this;
    }
    BooleanControlComponent.prototype.addToChart = function () {
        var _this = this;
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        entries.forEach(function (entry) { return _this.data[entry.newValue ? 1 : 0].value++; });
        this.data = this.data.slice();
    };
    BooleanControlComponent.prototype.valueToString = function (value) {
        return value ? 'An' : 'Aus';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Device)
    ], BooleanControlComponent.prototype, "device", void 0);
    BooleanControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-boolean-control',
            template: __webpack_require__("./src/app/components/detail/boolean/boolean-control.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* DeviceService */]])
    ], BooleanControlComponent);
    return BooleanControlComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_control_component__["a" /* BaseControlComponent */]));



/***/ }),

/***/ "./src/app/components/detail/continuous/continuous-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-image-container\">\n  <ngx-charts-line-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"data\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [xAxis]=\"true\"\n    [yAxis]=\"true\"\n    [legend]=\"true\"\n    [tooltipDisabled]=\"true\"\n    [showXAxisLabel]=\"true\"\n    [showYAxisLabel]=\"true\"\n    [autoScale]=\"true\">\n  </ngx-charts-line-chart>\n</div>\n<div class=\"details-control-container\">\n  <label class=\"accessibility\" for=\"details-log\">Letzte Werteänderungen</label>\n  <textarea id=\"details-log\" class=\"details-logs\" [ngModel]=\"log\" placeholder=\"Gerätelog\" readonly rows=\"6\"></textarea>\n\n  <div class=\"details-settings\">\n    <h3>{{device.control.title}}</h3>\n\n    <form (submit)=\"onSubmit()\" #form=\"ngForm\">\n      <label class=\"form-label\">derzeit: {{device.control.current}}</label>\n\n      <label class=\"accessibility\" for=\"value\">Bitte gewünschten Wert eingeben.</label>\n      <input type=\"number\" class=\"form-input\" id=\"value\" name=\"value\" step=\"1\"\n             [min]=\"device.control.min\" [max]=\"device.control.max\" required [(ngModel)]=\"value\">\n      <button class=\"button button-submit\" [disabled]=\"form.invalid\">Wert setzen</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/detail/continuous/continuous-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContinuousControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_control_component__ = __webpack_require__("./src/app/components/detail/base-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_device_model__);
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




var ContinuousControlComponent = /** @class */ (function (_super) {
    __extends(ContinuousControlComponent, _super);
    function ContinuousControlComponent(deviceService) {
        var _this = _super.call(this, deviceService) || this;
        _this.data = [{
                name: '',
                series: [{ name: new Date().toLocaleString(), value: 0 }]
            }];
        _this.xAxisLabel = 'Zeit';
        _this.yAxisLabel = '';
        _this.colorScheme = {
            domain: ['#333333', '#AAAAAA']
        };
        return _this;
    }
    ContinuousControlComponent.prototype.ngOnInit = function () {
        this.data[0].name = this.device.control.yLabel;
        this.yAxisLabel = this.device.control.yLabel;
        _super.prototype.ngOnInit.call(this);
    };
    ContinuousControlComponent.prototype.addToChart = function () {
        var _this = this;
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        entries.forEach(function (entry) { return _this.data[0].series.push({ 'name': entry.date.toLocaleString(), 'value': entry.newValue }); });
        this.data = this.data.slice();
    };
    ContinuousControlComponent.prototype.valueToString = function (value) {
        return value.toString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Device)
    ], ContinuousControlComponent.prototype, "device", void 0);
    ContinuousControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-continuous-control',
            template: __webpack_require__("./src/app/components/detail/continuous/continuous-control.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* DeviceService */]])
    ], ContinuousControlComponent);
    return ContinuousControlComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_control_component__["a" /* BaseControlComponent */]));



/***/ }),

/***/ "./src/app/components/detail/device-details.component.html":
/***/ (function(module, exports) {

module.exports = "<main aria-labelledby=\"deviceheadline\" class=\"details\">\n  <ng-container *ngIf=\"device\">\n    <h2 id=\"deviceheadline\">{{device.title}}</h2>\n\n    <div class=\"details-container\" [ngSwitch]=\"device.control.type\">\n      <app-boolean-control *ngSwitchCase=\"ControlType.BOOLEAN\" [device]=\"device\"></app-boolean-control>\n      <app-continuous-control *ngSwitchCase=\"ControlType.CONTINUOUS\" [device]=\"device\"></app-continuous-control>\n      <app-enum-control *ngSwitchCase=\"ControlType.ENUM\" [device]=\"device\"></app-enum-control>\n    </div>\n  </ng-container>\n  <p *ngIf=\"!device\">Gerät nicht gefunden.</p>\n</main>\n"

/***/ }),

/***/ "./src/app/components/detail/device-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("./src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__models_device_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceDetailsComponent = /** @class */ (function () {
    function DeviceDetailsComponent(deviceService, router, route) {
        var _this = this;
        this.deviceService = deviceService;
        this.router = router;
        this.route = route;
        this.device = null;
        this.ControlType = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* ControlType */];
        this.subscription = this.route.params
            .switchMap(function (params) { return _this.deviceService.getDevice(+params['id']); })
            .subscribe(function (device) { return _this.device = device; });
    }
    DeviceDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DeviceDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-device-detail',
            template: __webpack_require__("./src/app/components/detail/device-details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services__["b" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DeviceDetailsComponent);
    return DeviceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/detail/enum/enum-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details-image-container\">\n  <ngx-charts-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"data\"\n    [legend]=\"true\"\n    [labels]=\"true\">\n  </ngx-charts-pie-chart>\n</div>\n<div class=\"details-control-container\">\n  <label class=\"accessibility\" for=\"details-log\">Letzte Werteänderungen</label>\n  <textarea id=\"details-log\" class=\"details-logs\" [ngModel]=\"log\" placeholder=\"Gerätelog\" readonly rows=\"6\"></textarea>\n\n  <div class=\"details-settings\">\n    <h3>{{device.control.title}}</h3>\n\n    <form (submit)=\"onSubmit()\" #form=\"ngForm\">\n      <label class=\"form-label\">derzeit: {{valueToString(device.control.current)}}</label>\n\n      <label class=\"accessibility\" for=\"value\">Bitte gewünschten Wert aus Menü auswählen.</label>\n      <select class=\"form-input\" id=\"value\" name=\"value\" required [(ngModel)]=\"value\">\n        <option *ngFor=\"let val of device.control.values, index as i\" [value]=\"i\">{{val}}</option>\n      </select>\n      <button class=\"button button-submit\" [disabled]=\"form.invalid\">Wert setzen</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/detail/enum/enum-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_control_component__ = __webpack_require__("./src/app/components/detail/base-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_device_model__);
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




var EnumControlComponent = /** @class */ (function (_super) {
    __extends(EnumControlComponent, _super);
    function EnumControlComponent(deviceService) {
        var _this = _super.call(this, deviceService) || this;
        _this.data = [];
        _this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        return _this;
    }
    EnumControlComponent.prototype.ngOnInit = function () {
        this.data = this.device.control.values.map(function (name) {
            return { name: name, value: 0 };
        });
        _super.prototype.ngOnInit.call(this);
    };
    EnumControlComponent.prototype.onSubmit = function () {
        // Transform string value from html select to a number
        this.value = +this.value;
        _super.prototype.onSubmit.call(this);
    };
    EnumControlComponent.prototype.addToChart = function () {
        var _this = this;
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        entries.forEach(function (entry) { return _this.data[entry.newValue].value++; });
        this.data = this.data.slice();
    };
    EnumControlComponent.prototype.valueToString = function (value) {
        return this.device.control.values[value];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Device)
    ], EnumControlComponent.prototype, "device", void 0);
    EnumControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-enum-control',
            template: __webpack_require__("./src/app/components/detail/enum/enum-control.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* DeviceService */]])
    ], EnumControlComponent);
    return EnumControlComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_control_component__["a" /* BaseControlComponent */]));



/***/ }),

/***/ "./src/app/components/diagram/diagram.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"diagram\" #diagram>\n  <div class=\"arrows\">\n    <svg>\n      <defs>\n        <marker id=\"arrow-marker\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"4\"\n                orient=\"auto\">\n          <path d=\"M0,0 L0,8 L8,4 z\" class=\"arrow-marker\"></path>\n        </marker>\n        <marker id=\"arrow-marker-active\" markerWidth=\"10\" markerHeight=\"10\" refX=\"7\" refY=\"4\"\n                orient=\"auto\">\n          <path d=\"M0,0 L0,8 L8,4 z\" class=\"arrow-marker-active\"></path>\n        </marker>\n      </defs>\n    </svg>\n  </div>\n  <ul class=\"devices device-list\"></ul>\n</div>\n\n<div class=\"arrow-device-add\" #arrowReference>\n  <svg width=\"18px\" height=\"8px\">\n    <defs>\n      <marker id=\"arrow-marker-add\" markerWidth=\"10\" markerHeight=\"10\" refY=\"4\" orient=\"auto\">\n        <path d=\"M0,0 L0,8 L8,4 z\" class=\"arrow-marker\"></path>\n      </marker>\n    </defs>\n    <path d=\"M0,4 L16,4\" class=\"arrow-path\" marker-end=\"url(#arrow-marker-add)\" style=\"stroke-width: 1px\"></path>\n  </svg>\n</div>\n\n<div class=\"contextMenu\" #contextMenu>\n  <ul>\n    <li><a href=\"#\" class=\"contextView\">\n      <img class=\"device-edit\" src=\"images/edit.png\" alt=\"Gerät anzeigen\"> Detailseite\n    </a></li>\n    <li><a href=\"#\" class=\"contextDelete\">\n      <img class=\"device-remove\" src=\"images/remove.png\" alt=\"Gerät löschen\"/> Löschen\n    </a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/diagram/diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_diagram_model__ = __webpack_require__("./src/app/models/diagram.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_diagram_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_diagram_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiagramComponent = /** @class */ (function () {
    function DiagramComponent(diagramService) {
        this.diagramService = diagramService;
    }
    DiagramComponent.prototype.ngAfterViewInit = function () {
        this.diagram = new Diagram(this.diagramService, this.el.nativeElement, this.arrowAdd, this.context.nativeElement, this.arrowReference.nativeElement);
    };
    DiagramComponent.prototype.ngOnDestroy = function () {
        if (this.diagram) {
            this.diagram.destroy();
            this.diagram = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('arrowAdd'),
        __metadata("design:type", Object)
    ], DiagramComponent.prototype, "arrowAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('diagram'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DiagramComponent.prototype, "el", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contextMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DiagramComponent.prototype, "context", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('arrowReference'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DiagramComponent.prototype, "arrowReference", void 0);
    DiagramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-diagram',
            template: __webpack_require__("./src/app/components/diagram/diagram.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["c" /* DiagramService */]])
    ], DiagramComponent);
    return DiagramComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__("./src/app/components/app/app.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_navigation_component__ = __webpack_require__("./src/app/components/navigation/navigation.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_navigation_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__ = __webpack_require__("./src/app/components/overview/overview.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options_options_component__ = __webpack_require__("./src/app/components/options/options.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__options_options_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__available_device_available_device_component__ = __webpack_require__("./src/app/components/available-device/available-device.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__available_device_available_device_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__diagram_diagram_component__ = __webpack_require__("./src/app/components/diagram/diagram.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__diagram_diagram_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_device_details_component__ = __webpack_require__("./src/app/components/detail/device-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__detail_device_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detail_boolean_boolean_control_component__ = __webpack_require__("./src/app/components/detail/boolean/boolean-control.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__detail_boolean_boolean_control_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_continuous_continuous_control_component__ = __webpack_require__("./src/app/components/detail/continuous/continuous-control.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__detail_continuous_continuous_control_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__detail_enum_enum_control_component__ = __webpack_require__("./src/app/components/detail/enum/enum-control.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__detail_enum_enum_control_component__["a"]; });













/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<main aria-labelledby=\"formheadline\">\n  <form class=\"form form-horizontal\" #form=\"ngForm\" (submit)=\"login(form)\">\n    <h2 id=\"formheadline\" class=\"login-headline\">Anmelden</h2>\n\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"username-input\">Benutzername</label>\n      <input type=\"text\" class=\"form-input\" id=\"username-input\" name=\"username\"\n             placeholder=\"Benutzername\" autocomplete=\"username\" required\n             #username=\"ngModel\" ngModel>\n    </div>\n    <ul *ngIf=\"username.invalid && username.touched\" class=\"error-text\">\n      <li *ngIf=\"username.errors?.required\">Der Benutzername muss angegeben werden.</li>\n    </ul>\n\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"password-input\">Passwort</label>\n      <input type=\"password\" class=\"form-input\" id=\"password-input\" name=\"password\"\n             placeholder=\"Passwort\" autocomplete=\"current-password\" required minlength=\"4\" maxlength=\"12\"\n             #password=\"ngModel\" ngModel>\n    </div>\n    <ul *ngIf=\"password.invalid && password.touched\" class=\"error-text\">\n      <li *ngIf=\"password.errors?.required\">Das Passwort muss angegeben werden.</li>\n    </ul>\n\n    <ul *ngIf=\"serverErrors\" class=\"error-text\">\n      <li *ngIf=\"serverErrors.credentials\">Die Zugangsdaten waren ungültig</li>\n    </ul>\n\n    <div class=\"form-row form-row-center\">\n      <button class=\"button button-submit\" [disabled]=\"form.invalid\">Anmelden</button>\n    </div>\n\n    <div *ngIf=\"errorMessage\" class=\"form-row form-row-center\">Fehler: {{errorMessage}}</div>\n  </form>\n</main>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.errorMessage = null;
        this.serverErrors = {};
        if (this.authenticationService.isLoggedIn) {
            // noinspection JSIgnoredPromiseFromCall
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.authenticationService
            .login(form.value.username, form.value.password)
            .subscribe(function () {
            // noinspection JSIgnoredPromiseFromCall
            _this.router.navigate(['/']);
        }, function (response) {
            _this.errorMessage = response.message;
            _this.serverErrors = response.errors || null;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"bannerheader\" aria-labelledby=\"bannerheadline\">\n  <a [routerLink]=\"loggedIn ? '/overview' : '/login'\">\n    <img class=\"title-image\" src=\"/images/big-logo-small.png\" title=\"BIG Smart Production Logo\"\n         alt=\"BIG Smart Production Logo\">\n  </a>\n  <h1 class=\"header-title\" id=\"bannerheadline\">\n    BIG Smart Production\n  </h1>\n  <nav aria-labelledby=\"navigationheadline\">\n    <h2 class=\"accessibility\" id=\"navigationheadline\">Navigation</h2>\n    <ul class=\"navigation-list\">\n      <li class=\"overflow-icon\">\n        <a href=\"#\" class=\"button\" accesskey=\"1\">☰</a>\n      </li>\n      <li class=\"nav-items\">\n        <ul>\n          <li *ngIf=\"showOverviewLink\">\n            <a routerLink=\"/overview\" class=\"button\" accesskey=\"1\">Übersicht</a>\n          </li>\n          <li *ngIf=\"showOptionsLink\">\n            <a routerLink=\"/options\" class=\"button\" accesskey=\"2\">Optionen</a>\n          </li>\n          <li *ngIf=\"loggedIn\">\n            <button (click)=\"logout()\" class=\"button\" accesskey=\"3\">Abmelden</button>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options_options_component__ = __webpack_require__("./src/app/components/options/options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_overview_component__ = __webpack_require__("./src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.component = null;
    }
    NavigationComponent.prototype.logout = function () {
        this.authenticationService.logout();
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigate(['/login']);
    };
    Object.defineProperty(NavigationComponent.prototype, "showOverviewLink", {
        get: function () {
            return this.loggedIn && !(this.component instanceof __WEBPACK_IMPORTED_MODULE_4__overview_overview_component__["a" /* OverviewComponent */]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "showOptionsLink", {
        get: function () {
            return this.loggedIn && !(this.component instanceof __WEBPACK_IMPORTED_MODULE_3__options_options_component__["a" /* OptionsComponent */]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "loggedIn", {
        get: function () {
            return !(this.component instanceof __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "component", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/components/navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AuthenticationService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<main aria-labelledby=\"formheadline\">\n  <form class=\"form form-horizontal\" #form=\"ngForm\" (submit)=\"changePassword(form)\">\n    <h2 id=\"formheadline\" class=\"options-headline\">Passwort ändern</h2>\n\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"old-password-input\">Altes Passwort</label>\n      <input type=\"password\" class=\"form-input\" id=\"old-password-input\" name=\"oldPassword\"\n             placeholder=\"Altes Passwort\" autocomplete=\"current-password\" required\n             #oldPassword=\"ngModel\" ngModel>\n    </div>\n    <ul *ngIf=\"(oldPassword.invalid && oldPassword.touched) || serverErrors?.oldPassword\" class=\"error-text\">\n      <li *ngIf=\"oldPassword.errors?.required\">Das alte Passwort muss angegeben werden.</li>\n      <li *ngIf=\"serverErrors?.oldPassword\">Das alte Passwort war inkorrekt.</li>\n    </ul>\n\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"new-password-input\">Neues Passwort</label>\n      <input type=\"password\" class=\"form-input\" id=\"new-password-input\" name=\"newPassword\"\n             placeholder=\"Neues Passwort\" autocomplete=\"new-password\" required minlength=\"8\" maxlength=\"12\"\n             pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).*\" #newPassword=\"ngModel\" ngModel\n             title=\"8-12 Zeichen, jeweils mindestens ein Großbuchstabe, Kleinbuchstabe und eine Zahl\">\n    </div>\n    <ul *ngIf=\"newPassword.invalid && newPassword.touched\" class=\"error-text\">\n      <li *ngIf=\"newPassword.errors?.required\">Das neue Passwort muss angegeben werden.</li>\n      <li *ngIf=\"newPassword.errors?.minlength\">Das neue Passwort muss 8 bis 12 Zeichen enthalten.</li>\n      <li *ngIf=\"newPassword.errors?.pattern\">\n        Das neue Passwort muss zumindest jeweils einen Großbuchstaben, Kleinbuchstaben und eine Zahl enthalten.\n      </li>\n    </ul>\n\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"repeat-password-input\">Passwort wiederholen</label>\n      <input type=\"password\" class=\"form-input\" id=\"repeat-password-input\" name=\"repeatPassword\"\n             placeholder=\"Neues Passwort wiederholen\" autocomplete=\"new-password\" [confirm]=\"newPassword\"\n             #repeatPassword=\"ngModel\" ngModel>\n    </div>\n    <ul *ngIf=\"repeatPassword.invalid && repeatPassword.touched\" class=\"error-text\">\n      <li *ngIf=\"repeatPassword.errors?.confirm\">Die Passwörter stimmen nicht überein.</li>\n    </ul>\n\n    <div class=\"form-row form-row-center\">\n      <button class=\"button button-submit\" [disabled]=\"form.invalid\">Änderung speichern</button>\n    </div>\n\n    <div *ngIf=\"success\" class=\"form-row form-row-center\">Das Passwort wurde geändert.</div>\n    <div *ngIf=\"errorMessage\" class=\"form-row form-row-center\">Fehler: {{errorMessage}}</div>\n  </form>\n</main>\n"

/***/ }),

/***/ "./src/app/components/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(userService) {
        this.userService = userService;
        this.success = false;
        this.errorMessage = null;
        this.serverErrors = {};
    }
    OptionsComponent.prototype.changePassword = function (form) {
        var _this = this;
        this.userService.changePassword(form.value.oldPassword, form.value.newPassword)
            .subscribe(function () {
            form.resetForm();
            _this.success = true;
            _this.errorMessage = null;
            _this.serverErrors = null;
        }, function (response) {
            _this.success = false;
            _this.errorMessage = response.message;
            _this.serverErrors = response.errors || null;
        });
    };
    OptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/options/options.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["e" /* UserService */]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"elements\" aria-labelledby=\"elementsheadline\" aria-hidden=\"true\">\n  <h2 id=\"arrowsheadline\">Verfügbare Verbindungen</h2>\n  <ul class=\"arrow-list\">\n    <li class=\"arrow\" aria-labelledby=\"connector\" tabindex=\"0\" title=\"Verbindung\" #arrowAdd>\n      <dl class=\"arrow-properties\">\n        <dt class=\"accessibility\">Elementtyp</dt>\n        <dd id=\"connector\" class=\"arrow-type\">Verbindung</dd>\n      </dl>\n      <div class=\"arrow-image\">\n        <svg width=\"72px\" height=\"20px\">\n          <defs>\n            <marker id=\"arrow-marker-side\" markerWidth=\"10\" markerHeight=\"10\" refY=\"4\" orient=\"auto\">\n              <path d=\"M0,0 L0,8 L8,4 z\" class=\"arrow-marker\"></path>\n            </marker>\n          </defs>\n          <path class=\"arrow-path\" d=\"M0,10 L56,10\" marker-end=\"url(#arrow-marker-side)\"></path>\n        </svg>\n      </div>\n    </li>\n  </ul>\n\n  <h2 id=\"elementsheadline\">Verfügbare Geräte</h2>\n  <ul id=\"devices\" class=\"device-list draggables\">\n    <li app-available-device *ngFor=\"let device of available | async\" [data]=\"device\"></li>\n  </ul>\n</aside>\n\n<main aria-labelledby=\"diagramheadline\">\n  <div class=\"diagram-header\">\n    <h2 class=\"main-headline\" id=\"diagramheadline\">Produktionskette</h2>\n    <div id=\"counter\" class=\"diagram-header-right\">\n      <!-- TODO Implement the product counter -->\n      {{deviceCount | async}} Elemente - {{arrowCount | async}} Pfeile - 0 Produkte\n    </div>\n  </div>\n\n  <app-diagram [arrowAdd]=\"arrowAdd\"></app-diagram>\n</main>\n"

/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(deviceService) {
        this.deviceService = deviceService;
    }
    Object.defineProperty(OverviewComponent.prototype, "deviceCount", {
        get: function () {
            return this.deviceService.getDeviceCount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "arrowCount", {
        get: function () {
            return this.deviceService.getArrowCount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "available", {
        get: function () {
            return this.deviceService.getAvailable();
        },
        enumerable: true,
        configurable: true
    });
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/overview/overview.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["b" /* DeviceService */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isLoggedIn) {
            return true;
        }
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthenticationService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./src/app/models/arrow.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__device_model__);



/***/ }),

/***/ "./src/app/models/control.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlType; });
var ControlType;
(function (ControlType) {
    ControlType["BOOLEAN"] = "boolean";
    ControlType["ENUM"] = "enum";
    ControlType["CONTINUOUS"] = "continuous";
})(ControlType || (ControlType = {}));


/***/ }),

/***/ "./src/app/models/device.model.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/diagram.model.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control__ = __webpack_require__("./src/app/models/control.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__control__["a"]; });



/***/ }),

/***/ "./src/app/rest/authentication.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_client__ = __webpack_require__("./src/app/rest/rest.client.ts");
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



var AuthenticationClient = /** @class */ (function (_super) {
    __extends(AuthenticationClient, _super);
    function AuthenticationClient(httpClient) {
        return _super.call(this, '/authentication', httpClient) || this;
    }
    AuthenticationClient.prototype.authenticate = function (authenticationRequest) {
        return this.post(null, authenticationRequest);
    };
    AuthenticationClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationClient);
    return AuthenticationClient;
}(__WEBPACK_IMPORTED_MODULE_2__rest_client__["a" /* RestClient */]));



/***/ }),

/***/ "./src/app/rest/device.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_client__ = __webpack_require__("./src/app/rest/rest.client.ts");
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



var DeviceClient = /** @class */ (function (_super) {
    __extends(DeviceClient, _super);
    function DeviceClient(httpClient) {
        return _super.call(this, '/devices', httpClient) || this;
    }
    DeviceClient.prototype.getAvailable = function () {
        return this.get('/available');
    };
    DeviceClient.prototype.getDevices = function () {
        return this.get(null);
    };
    DeviceClient.prototype.addDevice = function (device) {
        return this.post(null, device);
    };
    DeviceClient.prototype.moveDevice = function (device) {
        return this.patch("/" + device.index, { position: device.getPosition() });
    };
    DeviceClient.prototype.deleteDevice = function (device) {
        return this.delete("/" + device.index);
    };
    DeviceClient.prototype.addArrow = function (arrow) {
        return this.post("/" + arrow.startDevice.index + "/successors", { index: arrow.endDevice.index });
    };
    DeviceClient.prototype.deleteArrow = function (arrow) {
        return this.delete("/" + arrow.startDevice.index + "/successors/" + arrow.endDevice.index);
    };
    DeviceClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], DeviceClient);
    return DeviceClient;
}(__WEBPACK_IMPORTED_MODULE_2__rest_client__["a" /* RestClient */]));



/***/ }),

/***/ "./src/app/rest/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_client__ = __webpack_require__("./src/app/rest/authentication.client.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_client__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_client__ = __webpack_require__("./src/app/rest/device.client.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__device_client__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_client__ = __webpack_require__("./src/app/rest/password.client.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__password_client__["a"]; });





/***/ }),

/***/ "./src/app/rest/password.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_client__ = __webpack_require__("./src/app/rest/rest.client.ts");
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



var PasswordClient = /** @class */ (function (_super) {
    __extends(PasswordClient, _super);
    function PasswordClient(httpClient) {
        return _super.call(this, '/password', httpClient) || this;
    }
    PasswordClient.prototype.changePassword = function (changeRequest) {
        return this.put(null, changeRequest);
    };
    PasswordClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PasswordClient);
    return PasswordClient;
}(__WEBPACK_IMPORTED_MODULE_2__rest_client__["a" /* RestClient */]));



/***/ }),

/***/ "./src/app/rest/rest.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





var RestClient = /** @class */ (function () {
    function RestClient(endpointUrl, httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + endpointUrl;
    }
    RestClient.prototype.get = function (url, params) {
        return this.request('get', url, params);
    };
    RestClient.prototype.post = function (url, body, params) {
        return this.request('post', url, params, body);
    };
    RestClient.prototype.put = function (url, body, params) {
        return this.request('put', url, params, body);
    };
    RestClient.prototype.patch = function (url, body, params) {
        return this.request('patch', url, params, body);
    };
    RestClient.prototype.delete = function (url, params) {
        return this.request('delete', url, params);
    };
    RestClient.prototype.request = function (method, url, params, body) {
        var fullUrl = url ? this.baseUrl + url : this.baseUrl;
        return this.httpClient
            .request(method, fullUrl, { body: body, params: params })
            .share()
            .catch(function (response) {
            console.log("Request to " + fullUrl + " failed:", response);
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].throw(response.status && response.error ? response.error : response);
        });
    };
    return RestClient;
}());



/***/ }),

/***/ "./src/app/services/app-load.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppLoadService = /** @class */ (function () {
    function AppLoadService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
    }
    AppLoadService.prototype.checkTokenExpiration = function () {
        var token = JSON.parse(localStorage.getItem('token'));
        this.http.post('http://localhost:8081/token', { 'token': token }, this.httpOptions).subscribe(function (data) {
            console.log(data);
        }, function (response) {
            console.log(response.error);
        });
    };
    AppLoadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AppLoadService);
    return AppLoadService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest__ = __webpack_require__("./src/app/rest/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_storage_service__ = __webpack_require__("./src/app/services/session-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(restClient, sessionStorageService) {
        this.restClient = restClient;
        this.sessionStorageService = sessionStorageService;
    }
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this.sessionStorageService.loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.restClient.authenticate({
            username: username, password: password
        }).map(function (data) {
            var token = data.token;
            console.log(token);
            _this.sessionStorageService.setToken(token);
            _this.sessionStorageService.setLoggedIn(true);
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.sessionStorageService.setLoggedIn(false);
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__rest__["a" /* AuthenticationClient */], __WEBPACK_IMPORTED_MODULE_3__session_storage_service__["a" /* SessionStorageService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rest__ = __webpack_require__("./src/app/rest/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_arrow_model__ = __webpack_require__("./src/app/models/arrow.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__models_device_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeviceService = /** @class */ (function () {
    function DeviceService(deviceClient) {
        var _this = this;
        this.deviceClient = deviceClient;
        this.skip = false;
        this.devices = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.arrows = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.deviceClient.getDevices().subscribe(function (data) {
            // Transform the server device list to the device objects needed for the diagram
            var devices = data.map(function (dev) { return new Device(dev.index, dev.position, dev.type, dev.title, dev.control); });
            // Add arrows for all the successors in the server device list
            var arrows = data.reduce(function (result, dev) {
                var device = devices.find(function (d) { return d.index === dev.index; }), successors = dev.successors.map(function (index) { return new Arrow(device, devices.find(function (d) { return d.index === index; })); });
                return result.concat(successors);
            }, []);
            _this.devices.next(devices);
            _this.arrows.next(arrows);
        });
        this.logUpdates = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        // TODO Create a WebSocket and subscribe to incoming messages
        this.ws = new WebSocket('ws://localhost:40510');
        // event emmited when connected
        this.ws.onopen = function () {
            console.log('websocket is connected ...');
        };
        // event emmited when receiving message
        var self = this;
        this.ws.onmessage = function (ev) {
            if (JSON.parse(ev.data).type === "update") {
                self.skip = true;
                var device = self.getDevice(JSON.parse(ev.data).index);
                var help_1;
                device.subscribe(function (el) { return help_1 = el; });
                self.updateDevice(help_1, JSON.parse(ev.data).value);
            }
        };
    }
    DeviceService.prototype.getAvailable = function () {
        var _this = this;
        if (!this.available) {
            this.available = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
            this.deviceClient.getAvailable().subscribe(function (available) { return _this.available.next(available); });
        }
        return this.available;
    };
    DeviceService.prototype.getDevices = function () {
        return this.devices;
    };
    DeviceService.prototype.getDevice = function (index) {
        return this.devices.map(function (devices) { return devices.find(function (d) { return d.index === index; }); });
    };
    DeviceService.prototype.getDeviceCount = function () {
        return this.devices.map(function (devices) { return devices.length; });
    };
    DeviceService.prototype.addDevice = function (device) {
        var _this = this;
        this.devices.first().subscribe(function (devices) {
            devices.push(device);
            _this.devices.next(devices);
        });
        this.deviceClient.addDevice({
            index: device.index,
            type: device.type,
            title: device.title,
            control: device.control,
            position: device.getPosition()
        }).subscribe();
    };
    DeviceService.prototype.deleteDevice = function (device) {
        var _this = this;
        this.devices.first().subscribe(function (devices) {
            var index = devices.indexOf(device);
            if (index >= 0) {
                devices.splice(index, 1);
            }
            _this.devices.next(devices);
        });
        this.deviceClient.deleteDevice(device).subscribe();
    };
    DeviceService.prototype.moveDevice = function (device) {
        this.deviceClient.moveDevice(device).subscribe();
    };
    DeviceService.prototype.getLogUpdates = function () {
        return this.logUpdates;
    };
    DeviceService.prototype.updateDevice = function (device, value) {
        // TODO Send updated values to server via WebSocket
        if (!this.skip) {
            var msg = {
                type: "update",
                value: value,
                index: device.index
            };
            this.ws.send(JSON.stringify(msg));
        }
        this.setDeviceValue(device, value);
        this.skip = false;
    };
    DeviceService.prototype.setDeviceValue = function (device, value) {
        var logEntry = {
            date: new Date(),
            oldValue: device.control.current,
            newValue: value
        };
        device.control.log.push(logEntry);
        device.control.current = value;
        device.updateDevice();
        this.logUpdates.next({ device: device, logEntry: logEntry });
    };
    DeviceService.prototype.getArrows = function () {
        return this.arrows;
    };
    DeviceService.prototype.getArrowCount = function () {
        return this.arrows.map(function (arrows) { return arrows.length; });
    };
    DeviceService.prototype.addArrow = function (arrow) {
        var _this = this;
        this.arrows.first().subscribe(function (arrows) {
            arrows.push(arrow);
            _this.arrows.next(arrows);
        });
        this.deviceClient.addArrow(arrow).subscribe();
    };
    DeviceService.prototype.deleteArrow = function (arrow) {
        var _this = this;
        this.arrows.first().subscribe(function (arrows) {
            var index = arrows.indexOf(arrow);
            if (index >= 0) {
                arrows.splice(index, 1);
            }
            _this.arrows.next(arrows);
        });
        this.deviceClient.deleteArrow(arrow).subscribe();
    };
    DeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__rest__["b" /* DeviceClient */]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/services/diagram.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_service__ = __webpack_require__("./src/app/services/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_arrow_model__ = __webpack_require__("./src/app/models/arrow.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_device_model__ = __webpack_require__("./src/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_device_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__models_device_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiagramService = /** @class */ (function () {
    function DiagramService(router, zone, deviceService) {
        this.router = router;
        this.zone = zone;
        this.deviceService = deviceService;
    }
    DiagramService.prototype.initDevices = function (func) {
        this.deviceService.getDevices().first().subscribe(function (devices) { return devices.forEach(func); });
    };
    DiagramService.prototype.initArrows = function (func) {
        this.deviceService.getArrows().first().subscribe(function (arrows) { return arrows.forEach(func); });
    };
    DiagramService.prototype.afterDeviceAdd = function (device) {
        this.deviceService.addDevice(device);
    };
    DiagramService.prototype.afterDeviceDelete = function (device) {
        this.deviceService.deleteDevice(device);
    };
    DiagramService.prototype.onDeviceDetails = function (device) {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigate(['details', device.index]);
        });
    };
    DiagramService.prototype.onDeviceMove = function (device) {
        this.deviceService.moveDevice(device);
    };
    DiagramService.prototype.afterArrowAdd = function (arrow) {
        this.deviceService.addArrow(arrow);
    };
    DiagramService.prototype.afterArrowDelete = function (arrow) {
        this.deviceService.deleteArrow(arrow);
    };
    DiagramService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__device_service__["a" /* DeviceService */]])
    ], DiagramService);
    return DiagramService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__("./src/app/services/device.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__device_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagram_service__ = __webpack_require__("./src/app/services/diagram.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__diagram_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_storage_service__ = __webpack_require__("./src/app/services/session-storage.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__session_storage_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__user_service__["a"]; });







/***/ }),

/***/ "./src/app/services/session-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
        this._loggedIn = !!localStorage.getItem('loggedIn');
    }
    Object.defineProperty(SessionStorageService.prototype, "loggedIn", {
        get: function () {
            return this._loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    SessionStorageService.prototype.setLoggedIn = function (loggedIn) {
        this._loggedIn = loggedIn;
        if (loggedIn) {
            localStorage.setItem('loggedIn', 'true');
        }
        else {
            localStorage.removeItem('loggedIn');
        }
    };
    SessionStorageService.prototype.setToken = function (token) {
        localStorage.setItem('token', JSON.stringify(token));
    };
    SessionStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest__ = __webpack_require__("./src/app/rest/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(restClient) {
        this.restClient = restClient;
    }
    UserService.prototype.changePassword = function (oldPassword, newPassword) {
        return this.restClient.changePassword({ oldPassword: oldPassword, newPassword: newPassword });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest__["c" /* PasswordClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/validators/confirm.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmValidator = /** @class */ (function () {
    function ConfirmValidator() {
        this.subscription = null;
    }
    ConfirmValidator_1 = ConfirmValidator;
    ConfirmValidator.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    ConfirmValidator.prototype.validate = function (confirmation) {
        if (!this.subscription) {
            // When validating for the first time add a listener for updating the validation every time the original value changes
            this.subscription = this.original.valueChanges.subscribe(function () { return confirmation.updateValueAndValidity(); });
        }
        return confirmation.value === this.original.value ? null : {
            confirm: true
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('confirm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* AbstractControl */])
    ], ConfirmValidator.prototype, "original", void 0);
    ConfirmValidator = ConfirmValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[confirm]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: ConfirmValidator_1, multi: true }]
        })
    ], ConfirmValidator);
    return ConfirmValidator;
    var ConfirmValidator_1;
}());



/***/ }),

/***/ "./src/app/validators/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_validator__ = __webpack_require__("./src/app/validators/confirm.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__confirm_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__max_validator__ = __webpack_require__("./src/app/validators/max.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__max_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__min_validator__ = __webpack_require__("./src/app/validators/min.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__min_validator__["a"]; });





/***/ }),

/***/ "./src/app/validators/max.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaxValidator = /** @class */ (function () {
    function MaxValidator() {
    }
    MaxValidator_1 = MaxValidator;
    Object.defineProperty(MaxValidator.prototype, "validate", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].max(this.max);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MaxValidator.prototype, "max", void 0);
    MaxValidator = MaxValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[max]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: MaxValidator_1, multi: true }]
        })
    ], MaxValidator);
    return MaxValidator;
    var MaxValidator_1;
}());



/***/ }),

/***/ "./src/app/validators/min.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinValidator = /** @class */ (function () {
    function MinValidator() {
    }
    MinValidator_1 = MinValidator;
    Object.defineProperty(MinValidator.prototype, "validate", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(this.min);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MinValidator.prototype, "min", void 0);
    MinValidator = MinValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[min]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: MinValidator_1, multi: true }]
        })
    ], MinValidator);
    return MinValidator;
    var MinValidator_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // TODO Update accordingly
    apiEndpoint: "http://" + location.hostname + ":8081",
    webSocketEndpoint: "ws://" + location.hostname + ":8081"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map