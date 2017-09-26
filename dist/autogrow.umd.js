(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.autogrow = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

var SampleComponent = (function () {
    function SampleComponent() {
    }
    return SampleComponent;
}());
SampleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sample-component',
                template: "<h1>Sample component</h1>"
            },] },
];
/**
 * @nocollapse
 */
SampleComponent.ctorParameters = function () { return []; };

var SampleDirective = (function () {
    /**
     * @param {?} el
     */
    function SampleDirective(el) {
        this.el = el;
    }
    return SampleDirective;
}());
SampleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return SamplePipe;
}());
SamplePipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
SamplePipe.ctorParameters = function () { return []; };

var SampleService = (function () {
    function SampleService() {
    }
    return SampleService;
}());
SampleService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
SampleService.ctorParameters = function () { return []; };

var SampleModule = (function () {
    function SampleModule() {
    }
    /**
     * @return {?}
     */
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    };
    return SampleModule;
}());
SampleModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ],
                exports: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ]
            },] },
];
/**
 * @nocollapse
 */
SampleModule.ctorParameters = function () { return []; };

exports.SampleModule = SampleModule;
exports.SampleComponent = SampleComponent;
exports.SampleDirective = SampleDirective;
exports.SamplePipe = SamplePipe;
exports.SampleService = SampleService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
