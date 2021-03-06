'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var i = _interopDefault(require('@firebase/app'));
var util = require('@firebase/util');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays$1() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
    };
    return Logger;
}());

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g,goog=goog||{},k=commonjsGlobal;function m(a){return "string"==typeof a}function aa(a){return "number"==typeof a}function n(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function ba(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return "array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return "object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return "array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return "function"}else return "null";
else if("function"==b&&"undefined"==typeof a.call)return "object";return b}function q(a){return "array"==p(a)}function ca(a){var b=p(a);return "array"==b||"object"==b&&"number"==typeof a.length}function r(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}var t="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=ea:u=fa;return u.apply(null,arguments)}
function v(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var w=Date.now||function(){return +new Date};function x(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yb=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)};}function y(){this.j=this.j;this.i=this.i;}var ha=0;y.prototype.j=!1;y.prototype.la=function(){if(!this.j&&(this.j=!0,this.G(),0!=ha)){var a=this[t]||(this[t]=++da);}};y.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()();};var ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
function ma(a){a:{var b=na;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:m(a)?a.charAt(b):a[b]}function oa(a){return Array.prototype.concat.apply([],arguments)}function pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return []}function qa(a){return /^[\s\xa0]*$/.test(a)}var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function z(a,b){return -1!=a.indexOf(b)}function sa(a,b){return a<b?-1:a>b?1:0}var A;a:{var ta=k.navigator;if(ta){var ua=ta.userAgent;if(ua){A=ua;break a}}A="";}function va(a,b,c){for(var d in a)b.call(c,a[d],d,a);}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function za(a){za[" "](a);return a}za[" "]=ba;function Aa(a,b){var c=Ba;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var Ca=z(A,"Opera"),B=z(A,"Trident")||z(A,"MSIE"),Da=z(A,"Edge"),Ea=Da||B,Fa=z(A,"Gecko")&&!(z(A.toLowerCase(),"webkit")&&!z(A,"Edge"))&&!(z(A,"Trident")||z(A,"MSIE"))&&!z(A,"Edge"),Ga=z(A.toLowerCase(),"webkit")&&!z(A,"Edge");function Ha(){var a=k.document;return a?a.documentMode:void 0}var Ia;
a:{var Ja="",Ka=function(){var a=A;if(Fa)return /rv:([^\);]+)(\)|;)/.exec(a);if(Da)return /Edge\/([\d\.]+)/.exec(a);if(B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ga)return /WebKit\/(\S+)/.exec(a);if(Ca)return /(?:Version)[ \/]?(\S+)/.exec(a)}();Ka&&(Ja=Ka?Ka[1]:"");if(B){var La=Ha();if(null!=La&&La>parseFloat(Ja)){Ia=String(La);break a}}Ia=Ja;}var Ba={};
function Ma(a){return Aa(a,function(){for(var b=0,c=ra(String(Ia)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=sa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||sa(0==h[2].length,0==l[2].length)||sa(h[2],l[2]);h=h[3];l=l[3];}while(0==b)}return 0<=b})}var Na;var Oa=k.document;
Na=Oa&&B?Ha()||("CSS1Compat"==Oa.compatMode?parseInt(Ia,10):5):void 0;var Pa=!B||9<=Number(Na),Qa=B&&!Ma("9"),Ra=function(){if(!k.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{k.addEventListener("test",ba,b),k.removeEventListener("test",ba,b);}catch(c){}return a}();function C(a,b){this.type=a;this.a=this.target=b;this.Ia=!0;}C.prototype.b=function(){this.Ia=!1;};function D(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Fa){a:{try{za(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else "mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:Sa[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b();}}x(D,C);var Sa={2:"touch",3:"pen",4:"mouse"};D.prototype.b=function(){D.N.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};var F="closure_listenable_"+(1E6*Math.random()|0),Ta=0;function Ua(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Ta;this.X=this.Z=!1;}function Va(a){a.X=!0;a.listener=null;a.proxy=null;a.src=null;a.da=null;}function Wa(a){this.src=a;this.a={};this.b=0;}Wa.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=Xa(a,b,d,e);-1<h?(b=a[h],c||(b.Z=!1)):(b=new Ua(b,this.src,f,!!d,e),b.Z=c,a.push(b));return b};function Ya(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Va(b),0==a.a[c].length&&(delete a.a[c],a.b--));}}
function Xa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return -1}var Za="closure_lm_"+(1E6*Math.random()|0),$a={};function bb(a,b,c,d,e){if(d&&d.once)return cb(a,b,c,d,e);if(q(b)){for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.za(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!1,d,e)}
function eb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=r(e)?!!e.capture:!!e;if(h&&!Pa)return null;var l=fb(a);l||(a[Za]=l=new Wa(a));c=l.add(b,c,d,h,f);if(c.proxy)return c;d=gb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ra||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(hb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function gb(){var a=ib,b=Pa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function cb(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)cb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.Aa(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!0,d,e)}
function jb(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else (d=r(d)?!!d.capture:!!d,c=db(c),a&&a[F])?(a=a.c,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Xa(f,c,d,e),-1<c&&(Va(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=fb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Xa(b,c,d,e)),(c=-1<a?b[a]:null)&&kb(c));}
function kb(a){if(!aa(a)&&a&&!a.X){var b=a.src;if(b&&b[F])Ya(b.c,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(hb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=fb(b))?(Ya(c,a),0==c.b&&(c.src=null,b[Za]=null)):Va(a);}}}function hb(a){return a in $a?$a[a]:$a[a]="on"+a}function lb(a,b){var c=a.listener,d=a.da||a.src;a.Z&&kb(a);return c.call(d,b)}
function ib(a,b){return a.X?!0:Pa?lb(a,new D(b,this)):(b=new D(b||n("window.event"),this),lb(a,b))}function fb(a){a=a[Za];return a instanceof Wa?a:null}var mb="__closure_events_fn_"+(1E9*Math.random()>>>0);function db(a){if("function"==p(a))return a;a[mb]||(a[mb]=function(b){return a.handleEvent(b)});return a[mb]}function G(){y.call(this);this.c=new Wa(this);this.J=this;this.B=null;}x(G,y);G.prototype[F]=!0;g=G.prototype;g.addEventListener=function(a,b,c,d){bb(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){jb(this,a,b,c,d);};
g.dispatchEvent=function(a){var b,c=this.B;if(c)for(b=[];c;c=c.B)b.push(c);c=this.J;var d=a.type||a;if(m(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else {var e=a;a=new C(d,c);ya(a,e);}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.a=b[f];e=nb(h,d,!0,a)&&e;}h=a.a=c;e=nb(h,d,!0,a)&&e;e=nb(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.a=b[f],e=nb(h,d,!1,a)&&e;return e};
g.G=function(){G.N.G.call(this);if(this.c){var a=this.c,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)Va(d[e]);delete a.a[c];a.b--;}}this.B=null;};g.za=function(a,b,c,d){return this.c.add(String(a),b,!1,c,d)};g.Aa=function(a,b,c,d){return this.c.add(String(a),b,!0,c,d)};
function nb(a,b,c,d){b=a.c.a[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.X&&h.capture==c){var l=h.listener,E=h.da||h.src;h.Z&&Ya(a.c,h);e=!1!==l.call(E,d)&&e;}}return e&&0!=d.Ia}var ob=k.JSON.stringify;function pb(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}pb.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};function qb(){this.b=this.a=null;}var sb=new pb(function(){return new rb},function(a){a.reset();});qb.prototype.add=function(a,b){var c=sb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};function tb(){var a=ub,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function rb(){this.next=this.b=this.a=null;}rb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};rb.prototype.reset=function(){this.next=this.b=this.a=null;};function vb(a){k.setTimeout(function(){throw a;},0);}function wb(a,b){xb||yb();zb||(xb(),zb=!0);ub.add(a,b);}var xb;function yb(){var a=k.Promise.resolve(void 0);xb=function(){a.then(Ab);};}var zb=!1,ub=new qb;function Ab(){for(var a;a=tb();){try{a.a.call(a.b);}catch(c){vb(c);}var b=sb;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a);}zb=!1;}function Cb(a,b){G.call(this);this.b=a||1;this.a=b||k;this.f=u(this.gb,this);this.g=w();}x(Cb,G);g=Cb.prototype;g.ba=!1;g.L=null;g.gb=function(){if(this.ba){var a=w()-this.g;0<a&&a<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-a):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(Db(this),this.start()));}};g.start=function(){this.ba=!0;this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=w());};function Db(a){a.ba=!1;a.L&&(a.a.clearTimeout(a.L),a.L=null);}
g.G=function(){Cb.N.G.call(this);Db(this);delete this.a;};function Eb(a,b,c){if("function"==p(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Fb(a,b,c){y.call(this);this.f=null!=c?u(a,c):a;this.c=b;this.b=u(this.$a,this);this.a=[];}x(Fb,y);g=Fb.prototype;g.ea=!1;g.U=null;g.Ta=function(a){this.a=arguments;this.U?this.ea=!0:Gb(this);};g.G=function(){Fb.N.G.call(this);this.U&&(k.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[]);};g.$a=function(){this.U=null;this.ea&&(this.ea=!1,Gb(this));};function Gb(a){a.U=Eb(a.b,a.c);a.f.apply(null,a.a);}function H(a){y.call(this);this.b=a;this.a={};}x(H,y);var Hb=[];function Ib(a,b,c,d){q(c)||(c&&(Hb[0]=c.toString()),c=Hb);for(var e=0;e<c.length;e++){var f=bb(b,c[e],d||a.handleEvent,!1,a.b||a);if(!f)break;a.a[f.key]=f;}}function Jb(a){va(a.a,function(b,c){this.a.hasOwnProperty(c)&&kb(b);},a);a.a={};}H.prototype.G=function(){H.N.G.call(this);Jb(this);};H.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kb(){}var I=new G;function Lb(a){C.call(this,"serverreachability",a);}x(Lb,C);function J(a){I.dispatchEvent(new Lb(I,a));}function Mb(a){C.call(this,"statevent",a);}x(Mb,C);function K(a){I.dispatchEvent(new Mb(I,a));}function Nb(a){C.call(this,"timingevent",a);}x(Nb,C);function Ob(a,b){if("function"!=p(a))throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){a();},b)}var Pb={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,La:7,TIMEOUT:8,sb:9};var Qb={jb:"complete",wb:"success",Ma:"error",La:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"};function Rb(){}Rb.prototype.a=null;function Sb(a){var b;(b=a.a)||(b=a.a={});return b}function Tb(){}var L={OPEN:"a",ib:"b",Ma:"c",rb:"d"};function Ub(){C.call(this,"d");}x(Ub,C);function Vb(){C.call(this,"c");}x(Vb,C);var Wb;function Xb(){}x(Xb,Rb);Wb=new Xb;function M(a,b,c){this.g=a;this.W=b;this.V=c||1;this.I=new H(this);this.O=Yb;a=Ea?125:void 0;this.P=new Cb(a);this.h=null;this.b=!1;this.l=this.D=this.f=this.F=this.v=this.R=this.i=null;this.j=[];this.a=null;this.A=0;this.c=this.w=null;this.o=-1;this.m=!1;this.J=0;this.B=null;this.s=this.S=this.H=!1;}var Yb=45E3,Zb={},$b={};g=M.prototype;g.setTimeout=function(a){this.O=a;};function ac(a,b,c){a.F=1;a.f=bc(N(b));a.l=c;a.H=!0;cc(a,null);}function dc(a,b,c,d){a.F=1;a.f=bc(N(b));a.l=null;a.H=c;cc(a,d);}
function cc(a,b){a.v=w();ec(a);a.D=N(a.f);fc(a.D,"t",a.V);a.A=0;a.a=a.g.$(a.g.Y()?b:null);0<a.J&&(a.B=new Fb(u(a.Ja,a,a.a),a.J));Ib(a.I,a.a,"readystatechange",a.cb);b=a.h?wa(a.h):{};a.l?(a.w||(a.w="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.a.ca(a.D,a.w,a.l,b)):(a.w="GET",a.a.ca(a.D,a.w,null,b));J(1);}g.cb=function(a){a=a.target;var b=this.B;b&&3==O(a)?b.Ta():this.Ja(a);};
g.Ja=function(a){try{if(a==this.a)a:{var b=O(this.a),c=this.a.ya(),d=this.a.T();if(!(3>b||3==b&&!Ea&&!this.a.aa())){this.m||4!=b||7==c||(8==c||0>=d?J(3):J(2));gc(this);var e=this.a.T();this.o=e;var f=this.a.aa();if(this.b=200==e){if(this.S&&!this.s){b:{if(this.a){var h=hc(this.a,"X-HTTP-Initial-Response");if(h&&!qa(h)){var l=h;break b}}l=null;}if(l)this.s=!0,ic(this,l);else {this.b=!1;this.c=3;K(12);P(this);jc(this);break a}}this.H?(kc(this,b,f),Ea&&this.b&&3==b&&(Ib(this.I,this.P,"tick",this.bb),this.P.start())):
ic(this,f);4==b&&P(this);this.b&&!this.m&&(4==b?this.g.na(this):(this.b=!1,ec(this)));}else 400==e&&0<f.indexOf("Unknown SID")?(this.c=3,K(12)):(this.c=0,K(13)),P(this),jc(this);}}}catch(E){}finally{}};function kc(a,b,c){for(var d=!0;!a.m&&a.A<c.length;){var e=lc(a,c);if(e==$b){4==b&&(a.c=4,K(14),d=!1);break}else if(e==Zb){a.c=4;K(15);d=!1;break}else ic(a,e);}4==b&&0==c.length&&(a.c=1,K(16),d=!1);a.b=a.b&&d;d||(P(a),jc(a));}
g.bb=function(){if(this.a){var a=O(this.a),b=this.a.aa();this.A<b.length&&(gc(this),kc(this,a,b),this.b&&4!=a&&ec(this));}};function lc(a,b){var c=a.A,d=b.indexOf("\n",c);if(-1==d)return $b;c=Number(b.substring(c,d));if(isNaN(c))return Zb;d+=1;if(d+c>b.length)return $b;b=b.substr(d,c);a.A=d+c;return b}g.cancel=function(){this.m=!0;P(this);};function ec(a){a.R=w()+a.O;mc(a,a.O);}function mc(a,b){if(null!=a.i)throw Error("WatchDog timer not null");a.i=Ob(u(a.ab,a),b);}
function gc(a){a.i&&(k.clearTimeout(a.i),a.i=null);}g.ab=function(){this.i=null;var a=w();0<=a-this.R?(2!=this.F&&(J(3),K(17)),P(this),this.c=2,jc(this)):mc(this,this.R-a);};function jc(a){a.g.Ca()||a.m||a.g.na(a);}function P(a){gc(a);var b=a.B;b&&"function"==typeof b.la&&b.la();a.B=null;Db(a.P);Jb(a.I);a.a&&(b=a.a,a.a=null,b.abort(),b.la());}function ic(a,b){try{a.g.Fa(a,b),J(4);}catch(c){}}function nc(a){if(a.C&&"function"==typeof a.C)return a.C();if(m(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function oc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||m(a))la(a,b,void 0);else {if(a.K&&"function"==typeof a.K)var c=a.K();else if(a.C&&"function"==typeof a.C)c=void 0;else if(ca(a)||m(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e);}else for(e in c=[],d=0,a)c[d++]=e;d=nc(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}}function Q(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof Q)for(c=a.K(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}g=Q.prototype;g.C=function(){pc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.K=function(){pc(this);return this.a.concat()};
function qc(a){a.b={};a.a.length=0;a.c=0;}function rc(a,b){R(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&pc(a));}function pc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];R(a.b,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],R(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}}g.get=function(a,b){return R(this.b,a)?this.b[a]:b};g.set=function(a,b){R(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b;};
g.forEach=function(a,b){for(var c=this.K(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};function R(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var sc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function S(a,b){this.b=this.j=this.f="";this.i=null;this.g=this.a="";this.h=!1;var c;a instanceof S?(this.h=void 0!==b?b:a.h,uc(this,a.f),this.j=a.j,vc(this,a.b),wc(this,a.i),this.a=a.a,xc(this,yc(a.c)),this.g=a.g):a&&(c=String(a).match(sc))?(this.h=!!b,uc(this,c[1]||"",!0),this.j=zc(c[2]||""),vc(this,c[3]||"",!0),wc(this,c[4]),this.a=zc(c[5]||"",!0),xc(this,c[6]||"",!0),this.g=zc(c[7]||"")):(this.h=!!b,this.c=new Ac(null,this.h));}
S.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Bc(b,Cc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(Bc(b,Cc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.a)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Bc(c,"/"==c.charAt(0)?Dc:Ec,!0));(c=this.c.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Bc(c,Fc));return a.join("")};
S.prototype.resolve=function(a){var b=N(this),c=!!a.f;c?uc(b,a.f):c=!!a.j;c?b.j=a.j:c=!!a.b;c?vc(b,a.b):c=null!=a.i;var d=a.a;if(c)wc(b,a.i);else if(c=!!a.a){if("/"!=d.charAt(0))if(this.b&&!this.a)d="/"+d;else {var e=b.a.lastIndexOf("/");-1!=e&&(d=b.a.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(z(e,"./")||z(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var l=e[h++];"."==l?d&&h==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&
h==e.length&&f.push("")):(f.push(l),d=!0);}d=f.join("/");}else d=e;}c?b.a=d:c=""!==a.c.toString();c?xc(b,yc(a.c)):c=!!a.g;c&&(b.g=a.g);return b};function N(a){return new S(a)}function uc(a,b,c){a.f=c?zc(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""));}function vc(a,b,c){a.b=c?zc(b,!0):b;}function wc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b;}else a.i=null;}function xc(a,b,c){b instanceof Ac?(a.c=b,Gc(a.c,a.h)):(c||(b=Bc(b,Hc)),a.c=new Ac(b,a.h));}
function T(a,b,c){a.c.set(b,c);}function fc(a,b,c){q(c)||(c=[String(c)]);Ic(a.c,b,c);}function bc(a){T(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}function Jc(a){return a instanceof S?N(a):new S(a,void 0)}function Kc(a,b,c,d){var e=new S(null,void 0);a&&uc(e,a);b&&vc(e,b);c&&wc(e,c);d&&(e.a=d);return e}function zc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Bc(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Lc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lc(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cc=/[#\/\?@]/g,Ec=/[#\?:]/g,Dc=/[#\?]/g,Hc=/[#\?@]/g,Fc=/#/g;function Ac(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b;}function U(a){a.a||(a.a=new Q,a.b=0,a.c&&tc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}g=Ac.prototype;
g.add=function(a,b){U(this);this.c=null;a=V(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Mc(a,b){U(a);b=V(a,b);R(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,rc(a.a,b));}function Nc(a,b){U(a);b=V(a,b);return R(a.a.b,b)}g.forEach=function(a,b){U(this);this.a.forEach(function(c,d){la(c,function(e){a.call(b,e,d,this);},this);},this);};
g.K=function(){U(this);for(var a=this.a.C(),b=this.a.K(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.C=function(a){U(this);var b=[];if(m(a))Nc(this,a)&&(b=oa(b,this.a.get(V(this,a))));else {a=this.a.C();for(var c=0;c<a.length;c++)b=oa(b,a[c]);}return b};g.set=function(a,b){U(this);this.c=null;a=V(this,a);Nc(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
g.get=function(a,b){if(!a)return b;a=this.C(a);return 0<a.length?String(a[0]):b};function Ic(a,b,c){Mc(a,b);0<c.length&&(a.c=null,a.a.set(V(a,b),pa(c)),a.b+=c.length);}g.toString=function(){if(this.c)return this.c;if(!this.a)return "";for(var a=[],b=this.a.K(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.C(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h);}}return this.c=a.join("&")};
function yc(a){var b=new Ac;b.c=a.c;a.a&&(b.a=new Q(a.a),b.b=a.b);return b}function V(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Gc(a,b){b&&!a.f&&(U(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Mc(this,d),Ic(this,e,c));},a));a.f=b;}function Qc(){}function Rc(){}x(Rc,Qc);function Sc(a){this.a=a;this.b=this.h=null;this.g=!1;this.i=null;this.c=-1;this.l=this.f=null;}g=Sc.prototype;g.M=null;function Uc(a){var b=a.a.F.a;if(null!=b)K(4),b?(K(10),Vc(a.a,a,!1)):(K(11),Vc(a.a,a,!0));else {a.b=new M(a,void 0,void 0);a.b.h=a.h;b=a.a;b=Wc(b,b.Y()?a.f:null,a.i);K(4);fc(b,"TYPE","xmlhttp");var c=a.a.j,d=a.a.I;c&&d&&T(b,c,d);dc(a.b,b,!1,a.f);}}g.$=function(a){return this.a.$(a)};g.abort=function(){this.b&&(this.b.cancel(),this.b=null);this.c=-1;};g.Ca=function(){return !1};
g.Fa=function(a,b){this.c=a.o;if(0==this.M){if(!this.a.o&&(a=a.a)){var c=hc(a,"X-Client-Wire-Protocol");this.l=c?c:null;this.a.j&&(a=hc(a,"X-HTTP-Session-Id"))&&(this.a.I=a);}if(b){try{var d=this.a.ja.a.parse(b);}catch(e){b=this.a;b.m=this.c;W(b,2);return}this.f=d[0];}else b=this.a,b.m=this.c,W(b,2);}else if(1==this.M)if(this.g)K(6);else if("11111"==b){if(K(5),this.g=!0,!B||10<=Number(Na))this.c=200,this.b.cancel(),K(11),Vc(this.a,this,!0);}else K(7),this.g=!1;};
g.na=function(){this.c=this.b.o;if(this.b.b)0==this.M?(this.M=1,Uc(this)):1==this.M&&(this.g?(K(11),Vc(this.a,this,!0)):(K(10),Vc(this.a,this,!1)));else {0==this.M?K(8):1==this.M&&K(9);var a=this.a;a.m=this.c;W(a,2);}};g.Y=function(){return this.a.Y()};g.ma=function(){return this.a.ma()};function Xc(){this.a=this.b=null;}function Yc(){this.a=new Q;}function Zc(a){var b=typeof a;return "object"==b&&a||"function"==b?"o"+(a[t]||(a[t]=++da)):b.charAt(0)+a}Yc.prototype.add=function(a){this.a.set(Zc(a),a);};Yc.prototype.C=function(){return this.a.C()};function $c(a,b){this.b=a;this.a=b;}function ad(a){this.g=a||bd;k.PerformanceNavigationTiming?(a=k.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(k.ka&&k.ka.Da&&k.ka.Da()&&k.ka.Da().zb);this.f=a?this.g:1;this.a=null;1<this.f&&(this.a=new Yc);this.b=null;this.c=[];}var bd=10;function cd(a,b){!a.a&&(z(b,"spdy")||z(b,"quic")||z(b,"h2"))&&(a.f=a.g,a.a=new Yc,a.b&&(dd(a,a.b),a.b=null));}function ed(a){return a.b?!0:a.a?a.a.a.c>=a.f:!1}
function fd(a){return a.b?1:a.a?a.a.a.c:0}function gd(a,b){a.b?a=a.b==b:a.a?(b=Zc(b),a=R(a.a.a.b,b)):a=!1;return a}function dd(a,b){a.a?a.a.add(b):a.b=b;}function hd(a,b){if(a.b&&a.b==b)a.b=null;else {var c;if(c=a.a)c=Zc(b),c=R(a.a.a.b,c);c&&rc(a.a.a,Zc(b));}}ad.prototype.cancel=function(){this.c=id(this);this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(la(this.a.C(),function(a){a.cancel();}),qc(this.a.a));};
function id(a){if(null!=a.b)return a.c.concat(a.b.j);if(null!=a.a&&0!=a.a.a.c){var b=a.c;la(a.a.C(),function(c){b=b.concat(c.j);});return b}return pa(a.c)}function jd(){}jd.prototype.stringify=function(a){return k.JSON.stringify(a,void 0)};jd.prototype.parse=function(a){return k.JSON.parse(a,void 0)};function kd(){this.a=new jd;}function ld(a,b,c){var d=c||"";try{oc(a,function(e,f){var h=e;r(e)&&(h=ob(e));b.push(d+f+"="+encodeURIComponent(h));});}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;}}function md(a,b){var c=new Kb;if(k.Image){var d=new Image;d.onload=v(nd,c,d,"TestLoadImage: loaded",!0,b);d.onerror=v(nd,c,d,"TestLoadImage: error",!1,b);d.onabort=v(nd,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=v(nd,c,d,"TestLoadImage: timeout",!1,b);k.setTimeout(function(){if(d.ontimeout)d.ontimeout();},1E4);d.src=a;}else b(!1);}function nd(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d);}catch(f){}}var od=k.JSON.parse;function X(a){G.call(this);this.headers=new Q;this.H=a||null;this.b=!1;this.s=this.a=null;this.A="";this.h=0;this.f="";this.g=this.w=this.l=this.v=!1;this.o=0;this.m=null;this.I=pd;this.D=this.F=!1;}x(X,G);var pd="",qd=/^https?$/i,rd=["POST","PUT"];g=X.prototype;
g.ca=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+a);b=b?b.toUpperCase():"GET";this.A=a;this.f="";this.h=0;this.v=!1;this.b=!0;this.a=new XMLHttpRequest;this.s=this.H?Sb(this.H):Sb(Wb);this.a.onreadystatechange=u(this.Ea,this);try{this.w=!0,this.a.open(b,String(a),!0),this.w=!1;}catch(f){sd(this,f);return}a=c||"";var e=new Q(this.headers);d&&oc(d,function(f,h){e.set(h,f);});d=ma(e.K());c=k.FormData&&a instanceof k.FormData;!(0<=
ja(rd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.a.setRequestHeader(h,f);},this);this.I&&(this.a.responseType=this.I);"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{td(this),0<this.o&&((this.D=ud(this.a))?(this.a.timeout=this.o,this.a.ontimeout=u(this.Ba,this)):this.m=Eb(this.Ba,this.o,this)),this.l=!0,this.a.send(a),this.l=!1;}catch(f){sd(this,f);}};
function ud(a){return B&&Ma(9)&&aa(a.timeout)&&void 0!==a.ontimeout}function na(a){return "content-type"==a.toLowerCase()}g.Ba=function(){"undefined"!=typeof goog&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8));};function sd(a,b){a.b=!1;a.a&&(a.g=!0,a.a.abort(),a.g=!1);a.f=b;a.h=5;vd(a);wd(a);}function vd(a){a.v||(a.v=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));}
g.abort=function(a){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),wd(this));};g.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),wd(this,!0));X.N.G.call(this);};g.Ea=function(){this.j||(this.w||this.l||this.g?xd(this):this.Za());};g.Za=function(){xd(this);};
function xd(a){if(a.b&&"undefined"!=typeof goog&&(!a.s[1]||4!=O(a)||2!=a.T()))if(a.l&&4==O(a))Eb(a.Ea,0,a);else if(a.dispatchEvent("readystatechange"),4==O(a)){a.b=!1;try{var b=a.T();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.A).match(sc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;f=h.substr(0,h.length-1);}e=!qd.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),
a.dispatchEvent("success");else {a.h=6;try{var l=2<O(a)?a.a.statusText:"";}catch(E){l="";}a.f=l+" ["+a.T()+"]";vd(a);}}finally{wd(a);}}}function wd(a,b){if(a.a){td(a);var c=a.a,d=a.s[0]?ba:null;a.a=null;a.s=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){}}}function td(a){a.a&&a.D&&(a.a.ontimeout=null);a.m&&(k.clearTimeout(a.m),a.m=null);}function O(a){return a.a?a.a.readyState:0}g.T=function(){try{return 2<O(this)?this.a.status:-1}catch(a){return -1}};
g.aa=function(){try{return this.a?this.a.responseText:""}catch(a){return ""}};g.Ua=function(a){if(this.a){var b=this.a.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return od(b)}};function hc(a,b){return a.a?a.a.getResponseHeader(b):null}g.ya=function(){return this.h};g.Xa=function(){return m(this.f)?this.f:String(this.f)};function yd(a){var b="";va(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n";});return b}function zd(a,b,c){a:{for(d in c){var d=!1;break a}d=!0;}if(d)return a;c=yd(c);if(m(a)){b=encodeURIComponent(String(b));c=null!=c?"="+encodeURIComponent(String(c)):"";if(b+=c){c=a.indexOf("#");0>c&&(c=a.length);d=a.indexOf("?");if(0>d||d>c){d=c;var e="";}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2];}return a}T(a,b,c);return a}function Ad(a){this.f=[];this.F=new Xc;this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null;this.Qa=this.P=0;this.Oa=!!n("internalChannelParams.failFast",a);this.ia=this.w=this.s=this.l=this.h=this.c=null;this.oa=!0;this.m=this.ra=this.O=-1;this.S=this.v=this.A=0;this.Na=n("internalChannelParams.baseRetryDelayMs",a)||5E3;this.Ra=n("internalChannelParams.retryDelaySeedMs",a)||1E4;this.Pa=n("internalChannelParams.forwardChannelMaxRetries",a)||2;this.qa=n("internalChannelParams.forwardChannelRequestTimeoutMs",
a)||2E4;this.Ka=a&&a.Ab||void 0;this.D=void 0;this.R=a&&a.supportsCrossDomainXhr||!1;this.H="";this.b=new ad(a&&a.concurrentRequestLimit);this.ja=new kd;this.o=a&&void 0!==a.backgroundChannelTest?a.backgroundChannelTest:!0;(this.W=a&&a.fastHandshake||!1)&&!this.o&&(this.o=!0);a&&a.forceLongPolling&&(this.oa=!1);this.fa=void 0;}g=Ad.prototype;g.wa=8;g.u=1;
function Bd(a){Cd(a);if(3==a.u){var b=a.P++,c=N(a.B);T(c,"SID",a.H);T(c,"RID",b);T(c,"TYPE","terminate");Dd(a,c);b=new M(a,b,void 0);b.F=2;b.f=bc(N(c));c=!1;k.navigator&&k.navigator.sendBeacon&&(c=k.navigator.sendBeacon(b.f.toString(),""));!c&&k.Image&&((new Image).src=b.f,c=!0);c||(b.a=b.g.$(null),b.a.ca(b.f));b.v=w();ec(b);}Ed(a);}
function Cd(a){a.w&&(a.w.abort(),a.w=null);a.a&&(a.a.cancel(),a.a=null);a.l&&(k.clearTimeout(a.l),a.l=null);Fd(a);a.b.cancel();a.h&&(aa(a.h)&&k.clearTimeout(a.h),a.h=null);}function Gd(a,b){a.f.push(new $c(a.Qa++,b));3==a.u&&Hd(a);}g.Ca=function(){return 0==this.u};function Hd(a){ed(a.b)||a.h||(a.h=!0,wb(a.Ha,a),a.A=0);}
function Id(a,b){if(fd(a.b)>=a.b.f-(a.h?1:0))return !1;if(a.h)return a.f=b.j.concat(a.f),!0;if(1==a.u||2==a.u||a.A>=(a.Oa?0:a.Pa))return !1;a.h=Ob(u(a.Ha,a,b),Jd(a,a.A));a.A++;return !0}
g.Ha=function(a){if(this.h)if(this.h=null,1==this.u){if(!a){this.P=Math.floor(1E5*Math.random());a=this.P++;var b=new M(this,a,void 0),c=this.i;this.J&&(c?(c=wa(c),ya(c,this.J)):c=this.J);null===this.g&&(b.h=c);var d;if(this.W)a:{for(var e=d=0;e<this.f.length;e++){b:{var f=this.f[e];if("__data__"in f.a&&(f=f.a.__data__,m(f))){f=f.length;break b}f=void 0;}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.f.length-1){d=e+1;break a}}d=1E3;}else d=1E3;d=Kd(this,b,d);e=N(this.B);T(e,
"RID",a);T(e,"CVER",22);this.o&&this.j&&T(e,"X-HTTP-Session-Id",this.j);Dd(this,e);this.g&&c&&zd(e,this.g,c);dd(this.b,b);this.W?(T(e,"$req",d),T(e,"SID","null"),b.S=!0,ac(b,e,null)):ac(b,e,d);this.u=2;}}else 3==this.u&&(a?Ld(this,a):0==this.f.length||ed(this.b)||Ld(this));};
function Ld(a,b){var c;b?c=b.W:c=a.P++;var d=N(a.B);T(d,"SID",a.H);T(d,"RID",c);T(d,"AID",a.O);Dd(a,d);a.g&&a.i&&zd(d,a.g,a.i);c=new M(a,c,a.A+1);null===a.g&&(c.h=a.i);b&&(a.f=b.j.concat(a.f));b=Kd(a,c,1E3);c.setTimeout(Math.round(.5*a.qa)+Math.round(.5*a.qa*Math.random()));dd(a.b,c);ac(c,d,b);}function Dd(a,b){a.c&&oc({},function(c,d){T(b,d,c);});}
function Kd(a,b,c){c=Math.min(a.f.length,c);var d=a.c?u(a.c.Sa,a.c,a):null;a:for(var e=a.f,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].b,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,E=0;E<c;E++){var Bb=e[E].b,Tc=e[E].a;Bb-=f;if(0>Bb)f=Math.max(0,e[E].b-100),l=!1;else try{ld(Tc,h,"req"+Bb+"_");}catch(Ud){d&&d(Tc);}}if(l){d=h.join("&");break a}}a=a.f.splice(0,c);b.j=a;return d}function Md(a){a.a||a.l||(a.S=1,wb(a.Ga,a),a.v=0);}
function Nd(a){if(a.a||a.l||3<=a.v)return !1;a.S++;a.l=Ob(u(a.Ga,a),Jd(a,a.v));a.v++;return !0}g.Ga=function(){this.l=null;this.a=new M(this,"rpc",this.S);null===this.g&&(this.a.h=this.i);this.a.J=0;var a=N(this.pa);T(a,"RID","rpc");T(a,"SID",this.H);T(a,"CI",this.ia?"0":"1");T(a,"AID",this.O);Dd(this,a);T(a,"TYPE","xmlhttp");this.g&&this.i&&zd(a,this.g,this.i);this.D&&this.a.setTimeout(this.D);dc(this.a,a,!0,this.ga);};
function Vc(a,b,c){var d=b.l;d&&cd(a.b,d);a.ia=a.oa&&c;a.m=b.c;a.B=Wc(a,null,a.ha);Hd(a);}
g.Fa=function(a,b){if(0!=this.u&&(this.a==a||gd(this.b,a)))if(this.m=a.o,!a.s&&gd(this.b,a)&&3==this.u){try{var c=this.ja.a.parse(b);}catch(f){c=null;}if(q(c)&&3==c.length){b=c;if(0==b[0])a:{if(!this.l){if(this.a)if(this.a.v+3E3<a.v)Fd(this),this.a.cancel(),this.a=null;else break a;Nd(this);K(18);}}else this.ra=b[1],0<this.ra-this.O&&37500>b[2]&&this.ia&&0==this.v&&!this.s&&(this.s=Ob(u(this.Ya,this),6E3));if(1>=fd(this.b)&&this.fa){try{this.fa();}catch(f){}this.fa=void 0;}}else W(this,11);}else if((a.s||
this.a==a)&&Fd(this),!qa(b))for(b=c=this.ja.a.parse(b),c=0;c<b.length;c++){var d=b[c];this.O=d[0];d=d[1];if(2==this.u)if("c"==d[0]){this.H=d[1];this.ga=d[2];var e=d[3];null!=e&&(this.wa=e);d=d[5];null!=d&&aa(d)&&0<d&&(this.D=1.5*d);this.o&&(d=a.a)&&((e=hc(d,"X-Client-Wire-Protocol"))&&cd(this.b,e),this.j&&(d=hc(d,"X-HTTP-Session-Id")))&&(this.I=d,T(this.B,this.j,d));this.u=3;this.c&&this.c.va();d=a;this.pa=Wc(this,this.Y()?this.ga:null,this.ha);d.s?(hd(this.b,d),(e=this.D)&&d.setTimeout(e),d.i&&(gc(d),
ec(d)),this.a=d):Md(this);0<this.f.length&&Hd(this);}else "stop"!=d[0]&&"close"!=d[0]||W(this,7);else 3==this.u&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?W(this,7):Bd(this):"noop"!=d[0]&&this.c&&this.c.ua(d),this.v=0);}};g.Ya=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,Nd(this),K(19));};function Fd(a){null!=a.s&&(k.clearTimeout(a.s),a.s=null);}
g.na=function(a){var b=null;if(this.a==a){Fd(this);this.a=null;var c=2;}else if(gd(this.b,a))b=a.j,hd(this.b,a),c=1;else return;this.m=a.o;if(0!=this.u)if(a.b)1==c?(b=w()-a.v,I.dispatchEvent(new Nb(I,a.l?a.l.length:0,b,this.A)),Hd(this)):Md(this);else {var d=a.c;if(3==d||0==d&&0<this.m||!(1==c&&Id(this,a)||2==c&&Nd(this)))switch(b&&0<b.length&&(a=this.b,a.c=a.c.concat(b)),d){case 1:W(this,5);break;case 4:W(this,10);break;case 3:W(this,6);break;default:W(this,2);}}};
function Jd(a,b){var c=a.Na+Math.floor(Math.random()*a.Ra);a.ma()||(c*=2);return c*b}function W(a,b){if(2==b){var c=null;a.c&&(c=null);var d=u(a.eb,a);c||(c=new S("//www.google.com/images/cleardot.gif"),k.location&&"http"==k.location.protocol||uc(c,"https"),bc(c));md(c.toString(),d);}else K(2);a.u=0;a.c&&a.c.ta(b);Ed(a);Cd(a);}g.eb=function(a){a?K(2):K(1);};function Ed(a){a.u=0;a.m=-1;if(a.c){if(0!=id(a.b).length||0!=a.f.length)a.b.c.length=0,pa(a.f),a.f.length=0;a.c.sa();}}
function Wc(a,b,c){var d=Jc(c);if(""!=d.b)b&&vc(d,b+"."+d.b),wc(d,d.i);else {var e=k.location,f;b?f=b+"."+e.hostname:f=e.hostname;d=Kc(e.protocol,f,+e.port,c);}a.V&&va(a.V,function(h,l){T(d,l,h);});b=a.j;c=a.I;b&&c&&T(d,b,c);T(d,"VER",a.wa);Dd(a,d);return d}g.$=function(a){if(a&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.");a=new X(this.Ka);a.F=this.R;return a};g.ma=function(){return !!this.c&&!0};g.Y=function(){return this.R};function Od(){}g=Od.prototype;g.va=function(){};
g.ua=function(){};g.ta=function(){};g.sa=function(){};g.Sa=function(){};function Pd(a){for(var b=arguments[0],c=1;c<arguments.length;c++){var d=arguments[c];if(0==d.lastIndexOf("/",0))b=d;else {var e;(e=""==b)||(e=b.length-1,e=0<=e&&b.indexOf("/",e)==e);e?b+=d:b+="/"+d;}}return b}function Qd(){if(B&&!(10<=Number(Na)))throw Error("Environmental error: no available transport.");}Qd.prototype.a=function(a,b){return new Y(a,b)};
function Y(a,b){G.call(this);this.a=new Ad(b);this.g=a;this.m=b&&b.fb?b.fb:Pd(this.g,"test");this.b=b&&b.messageUrlParams||null;a=b&&b.messageHeaders||null;b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.a.i=a;a=b&&b.initMessageHeaders||null;b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType});b&&b.xa&&(a?a["X-WebChannel-Client-Profile"]=b.xa:a={"X-WebChannel-Client-Profile":b.xa});
this.a.J=a;(a=b&&b.httpHeadersOverwriteParam)&&!qa(a)&&(this.a.g=a);this.l=b&&b.supportsCrossDomainXhr||!1;this.h=b&&b.sendRawJson||!1;(b=b&&b.httpSessionIdParam)&&!qa(b)&&(this.a.j=b,a=this.b,null!==a&&b in a&&(a=this.b,b in a&&delete a[b]));this.f=new Z(this);}x(Y,G);g=Y.prototype;g.addEventListener=function(a,b,c,d){Y.N.addEventListener.call(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){Y.N.removeEventListener.call(this,a,b,c,d);};
g.Va=function(){this.a.c=this.f;this.l&&(this.a.R=!0);var a=this.a,b=this.m,c=this.g,d=this.b||void 0;K(0);a.ha=c;a.V=d||{};a.o&&(a.F.b=[],a.F.a=!1);a.w=new Sc(a);null===a.g&&(a.w.h=a.i);c=b;a.g&&a.i&&(c=zd(b,a.g,a.i));a=a.w;a.i=c;b=Wc(a.a,null,a.i);K(3);c=a.a.F.b;null!=c?(a.f=c[0],a.M=1,Uc(a)):(fc(b,"MODE","init"),!a.a.o&&a.a.j&&fc(b,"X-HTTP-Session-Id",a.a.j),a.b=new M(a,void 0,void 0),a.b.h=a.h,dc(a.b,b,!1,null),a.M=0);};g.close=function(){Bd(this.a);};
g.Wa=function(a){if(m(a)){var b={};b.__data__=a;Gd(this.a,b);}else this.h?(b={},b.__data__=ob(a),Gd(this.a,b)):Gd(this.a,a);};g.G=function(){this.a.c=null;delete this.f;Bd(this.a);delete this.a;Y.N.G.call(this);};function Rd(a){Ub.call(this);var b=a.__sm__;if(b){a:{for(var c in b){a=c;break a}a=void 0;}(this.c=a)?(a=this.c,this.data=null!==b&&a in b?b[a]:void 0):this.data=b;}else this.data=a;}x(Rd,Ub);function Sd(){Vb.call(this);this.status=1;}x(Sd,Vb);function Z(a){this.a=a;}x(Z,Od);Z.prototype.va=function(){this.a.dispatchEvent("a");};
Z.prototype.ua=function(a){this.a.dispatchEvent(new Rd(a));};Z.prototype.ta=function(a){this.a.dispatchEvent(new Sd(a));};Z.prototype.sa=function(){this.a.dispatchEvent("b");};var Td=v(function(a,b){function c(){}c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Qd);/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Qd.prototype.createWebChannel=Qd.prototype.a;Y.prototype.send=Y.prototype.Wa;Y.prototype.open=Y.prototype.Va;Y.prototype.close=Y.prototype.close;Pb.NO_ERROR=0;Pb.TIMEOUT=8;Pb.HTTP_ERROR=6;Qb.COMPLETE="complete";Tb.EventType=L;L.OPEN="a";L.CLOSE="b";L.ERROR="c";L.MESSAGE="d";G.prototype.listen=G.prototype.za;X.prototype.listenOnce=X.prototype.Aa;X.prototype.getLastError=X.prototype.Xa;X.prototype.getLastErrorCode=X.prototype.ya;X.prototype.getStatus=X.prototype.T;X.prototype.getResponseJson=X.prototype.Ua;
X.prototype.getResponseText=X.prototype.aa;X.prototype.send=X.prototype.ca;var tmp={createWebChannelTransport:Td,ErrorCode:Pb,EventType:Qb,WebChannel:Tb,XhrIo:X};
var tmp_1 = tmp.createWebChannelTransport;
var tmp_2 = tmp.ErrorCode;
var tmp_3 = tmp.EventType;
var tmp_4 = tmp.WebChannel;
var tmp_5 = tmp.XhrIo;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The semver (www.semver.org) version of the SDK. */ var w$1 = i.SDK_VERSION, E = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.t = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.s = function() {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
/** A user with a null UID. */ E.UNAUTHENTICATED = new E(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
E.i = new E("google-credentials-uid"), E.h = new E("first-party-uid");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, A$1 = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return __extends(n, e), n;
}(Error), N$1 = function(t, e) {
    this.user = e, this.type = "OAuth", this.o = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.o.Authorization = "Bearer " + t;
}, I$1 = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.u = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.l = function() {}, t.prototype._ = function(t) {
        this.u = t, 
        // Fire with initial user.
        t(E.UNAUTHENTICATED);
    }, t.prototype.T = function() {
        this.u = null;
    }, t;
}(), T$1 = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.m = null, 
        /** Tracks the current User. */
        this.currentUser = E.UNAUTHENTICATED, this.R = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.I = 0, 
        /** The listener registered with setChangeListener(). */
        this.u = null, this.forceRefresh = !1, this.m = function() {
            e.I++, e.currentUser = e.A(), e.R = !0, e.u && e.u(e.currentUser);
        }, this.I = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.m) : (
        // if auth is not available, invoke tokenListener once with null token
        this.m(null), t.get().then((function(t) {
            e.auth = t, e.m && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.m);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.I, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            if (t.I !== e) throw new A$1(b.ABORTED, "getToken aborted due to token change.");
            return n ? (Le("string" == typeof n.accessToken, "Invalid tokenData returned from getToken():" + n), 
            new N$1(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.l = function() {
        this.forceRefresh = !0;
    }, t.prototype._ = function(t) {
        this.u = t, 
        // Fire the initial event
        this.R && t(this.currentUser);
    }, t.prototype.T = function() {
        this.auth && this.auth.removeAuthTokenListener(this.m), this.m = null, this.u = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.A = function() {
        var t = this.auth && this.auth.getUid();
        return Le(null === t || "string" == typeof t, "Received invalid UID: " + t), new E(t);
    }, t;
}(), _ = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e, this.type = "FirstParty", this.user = E.h;
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.V
            }, e = this.P.auth.p([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), k$1 = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new _(this.P, this.V));
    }, t.prototype._ = function(t) {
        // Fire with initial uid.
        t(E.h);
    }, t.prototype.T = function() {}, t.prototype.l = function() {}, t;
}(), S$1 = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new A$1(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new A$1(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new A$1(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new A$1(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.g = function(t) {
        return this.seconds === t.seconds ? Ue(this.nanoseconds, t.nanoseconds) : Ue(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), R$1 = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.v = function(e) {
        return new t(e);
    }, t.S = function() {
        return t.MIN;
    }, t.prototype.C = function(t) {
        return this.timestamp.g(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.D = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.F = function() {
        return this.timestamp;
    }, t;
}();

/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */ R$1.MIN = new R$1(new S$1(0, 0));

/**
 * Path represents an ordered sequence of string segments.
 */
var D$1 = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && Ve("offset " + e + " out of range " + t.length), 
        void 0 === n ? n = t.length - e : n > t.length - e && Ve("length " + n + " out of range " + (t.length - e)), 
        this.segments = t, this.offset = e, this.N = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.N;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.k(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.L(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.$ = function(t) {
        return t = void 0 === t ? 1 : t, this.L(this.segments, this.offset + t, this.length - t);
    }, t.prototype.O = function() {
        return this.L(this.segments, this.offset, this.length - 1);
    }, t.prototype.M = function() {
        return this.segments[this.offset];
    }, t.prototype.U = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.q = function() {
        return 0 === this.length;
    }, t.prototype.B = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.W = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.j = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.k = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), V$1 = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.L = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.G = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.j().join("/");
    }, n.prototype.toString = function() {
        return this.G();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.K = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new A$1(b.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n;
}(D$1);

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ V$1.H = new V$1([]);

var L$1 = /^[_a-zA-Z][_a-zA-Z0-9]*$/, O$1 = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.L = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.J = function(t) {
        return L$1.test(t);
    }, n.prototype.G = function() {
        return this.j().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.J(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.G();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.Y = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.X = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.Z = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new A$1(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new A$1(b.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new A$1(b.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new A$1(b.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n;
}(D$1);

/** A dot-separated path for navigating sub-objects within a document. */ O$1.H = new O$1([]);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U$1 = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.tt = function(e) {
        return new t(V$1.K(e).$(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.et = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === V$1.k(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.k = function(t, e) {
        return V$1.k(t.path, e.path);
    }, t.st = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.it = function(e) {
        return new t(new V$1(e.slice()));
    }, t;
}();

U$1.EMPTY = new U$1(new V$1([]));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var C$1 = /** @class */ function() {
    function t(t, e) {
        this.k = t, this.root = e || M$1.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.nt = function(e, n) {
        return new t(this.k, this.root.nt(e, n, this.k).rt(null, null, M$1.ht, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.k, this.root.remove(e, this.k).rt(null, null, M$1.ht, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.q(); ) {
            var n = this.k(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.q(); ) {
            var r = this.k(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.q = function() {
        return this.root.q();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.ot = function() {
        return this.root.ot();
    }, 
    // Returns the maximum key in the map.
    t.prototype.at = function() {
        return this.root.at();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.root.ut(t);
    }, t.prototype.forEach = function(t) {
        this.ut((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ut((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ct = function(t) {
        return this.root.ct(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.lt = function() {
        return new q$1(this.root, null, this.k, !1);
    }, t.prototype._t = function(t) {
        return new q$1(this.root, t, this.k, !1);
    }, t.prototype.dt = function() {
        return new q$1(this.root, null, this.k, !0);
    }, t.prototype.ft = function(t) {
        return new q$1(this.root, t, this.k, !0);
    }, t;
}(), q$1 = /** @class */ function() {
    function t(t, e, n, r) {
        this.wt = r, this.Tt = [];
        for (var i = 1; !t.q(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.wt ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Tt.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.Tt.push(t), t = this.wt ? t.right : t.left;
        }
    }
    return t.prototype.Et = function() {
        var t = this.Tt.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.wt) for (t = t.left; !t.q(); ) this.Tt.push(t), t = t.right; else for (t = t.right; !t.q(); ) this.Tt.push(t), 
        t = t.left;
        return e;
    }, t.prototype.Rt = function() {
        return this.Tt.length > 0;
    }, t.prototype.It = function() {
        if (0 === this.Tt.length) return null;
        var t = this.Tt[this.Tt.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), M$1 = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.rt = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.q = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.left.ut(t) || t(this.key, this.value) || this.right.ut(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ct = function(t) {
        return this.right.ct(t) || t(this.key, this.value) || this.left.ct(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.q() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.ot = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.at = function() {
        return this.right.q() ? this.key : this.right.at();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.nt = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.rt(null, null, null, r.left.nt(t, e, n), null) : 0 === i ? r.rt(null, e, null, null, null) : r.rt(null, null, null, null, r.right.nt(t, e, n))).At();
    }, t.prototype.Pt = function() {
        if (this.left.q()) return t.EMPTY;
        var e = this;
        return e.left.Vt() || e.left.left.Vt() || (e = e.pt()), (e = e.rt(null, null, null, e.left.Pt(), null)).At();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.q() || i.left.Vt() || i.left.left.Vt() || (i = i.pt()), 
        i = i.rt(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.Vt() && (i = i.gt()), i.right.q() || i.right.Vt() || i.right.left.Vt() || (i = i.yt()), 
            0 === n(e, i.key)) {
                if (i.right.q()) return t.EMPTY;
                r = i.right.min(), i = i.rt(r.key, r.value, null, null, i.right.Pt());
            }
            i = i.rt(null, null, null, null, i.right.remove(e, n));
        }
        return i.At();
    }, t.prototype.Vt = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.At = function() {
        var t = this;
        return t.right.Vt() && !t.left.Vt() && (t = t.bt()), t.left.Vt() && t.left.left.Vt() && (t = t.gt()), 
        t.left.Vt() && t.right.Vt() && (t = t.vt()), t;
    }, t.prototype.pt = function() {
        var t = this.vt();
        return t.right.left.Vt() && (t = (t = (t = t.rt(null, null, null, null, t.right.gt())).bt()).vt()), 
        t;
    }, t.prototype.yt = function() {
        var t = this.vt();
        return t.left.left.Vt() && (t = (t = t.gt()).vt()), t;
    }, t.prototype.bt = function() {
        var e = this.rt(null, null, t.RED, null, this.right.left);
        return this.right.rt(null, null, this.color, e, null);
    }, t.prototype.gt = function() {
        var e = this.rt(null, null, t.RED, this.left.right, null);
        return this.left.rt(null, null, this.color, null, e);
    }, t.prototype.vt = function() {
        var t = this.left.rt(null, null, !this.left.color, null, null), e = this.right.rt(null, null, !this.right.color, null, null);
        return this.rt(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.St = function() {
        var t = this.Ct();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Ct = function() {
        if (this.Vt() && this.left.Vt()) throw Ve("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.Vt()) throw Ve("Right child of (" + this.key + "," + this.value + ") is red");
        var t = this.left.Ct();
        if (t !== this.right.Ct()) throw Ve("Black depths differ");
        return t + (this.Vt() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
M$1.EMPTY = null, M$1.RED = !0, M$1.ht = !1, 
// end LLRBEmptyNode
M$1.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw Ve("LLRBEmptyNode has no key.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw Ve("LLRBEmptyNode has no value.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw Ve("LLRBEmptyNode has no color.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw Ve("LLRBEmptyNode has no left child.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw Ve("LLRBEmptyNode has no right child.");
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.rt = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.nt = function(t, e, n) {
        return new M$1(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.q = function() {
        return !0;
    }, t.prototype.ut = function(t) {
        return !1;
    }, t.prototype.ct = function(t) {
        return !1;
    }, t.prototype.ot = function() {
        return null;
    }, t.prototype.at = function() {
        return null;
    }, t.prototype.Vt = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.St = function() {
        return !0;
    }, t.prototype.Ct = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var P$1 = /** @class */ function() {
    function t(t) {
        this.k = t, this.data = new C$1(this.k);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.ot();
    }, t.prototype.last = function() {
        return this.data.at();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.Dt = function(t, e) {
        for (var n = this.data._t(t[0]); n.Rt(); ) {
            var r = n.Et();
            if (this.k(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.Ft = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data._t(e) : this.data.lt(); n.Rt(); ) if (!t(n.Et().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Nt = function(t) {
        var e = this.data._t(t);
        return e.Rt() ? e.Et().key : null;
    }, t.prototype.lt = function() {
        return new x$1(this.data.lt());
    }, t.prototype._t = function(t) {
        return new x$1(this.data._t(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.rt(this.data.remove(t).nt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.rt(this.data.remove(t)) : this;
    }, t.prototype.q = function() {
        return this.data.q();
    }, t.prototype.kt = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.lt(), r = e.data.lt(); n.Rt(); ) {
            var i = n.Et().key, o = r.Et().key;
            if (0 !== this.k(i, o)) return !1;
        }
        return !0;
    }, t.prototype.j = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.rt = function(e) {
        var n = new t(this.k);
        return n.data = e, n;
    }, t;
}(), x$1 = /** @class */ function() {
    function t(t) {
        this.Lt = t;
    }
    return t.prototype.Et = function() {
        return this.Lt.Et().key;
    }, t.prototype.Rt = function() {
        return this.Lt.Rt();
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G$1(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function F$1(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function j(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var B$1 = /** @class */ function() {
    function t(t) {
        this.$t = t;
    }
    return t.fromBase64String = function(e) {
        return new t(Ie.Ot().atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return Ie.Ot().btoa(this.$t);
    }, t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.$t);
    }, t.prototype.Mt = function() {
        return 2 * this.$t.length;
    }, t.prototype.C = function(t) {
        return Ue(this.$t, t.$t);
    }, t.prototype.isEqual = function(t) {
        return this.$t === t.$t;
    }, t;
}();

function z$1(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function Q$1(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function H$1(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function Y$1(t) {
    var e = et(t.mapValue.fields.__local_write_time__.timestampValue);
    return new S$1(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
B$1.Ut = new B$1("");

var W$1 = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function J$1(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? H$1(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : Ve("Invalid value type: " + JSON.stringify(t));
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function X$1(t, e) {
    var n = J$1(t);
    if (n !== J$1(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Y$1(t).isEqual(Y$1(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = et(t.timestampValue), r = et(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return rt(t.bytesValue).isEqual(rt(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return nt(t.geoPointValue.latitude) === nt(e.geoPointValue.latitude) && nt(t.geoPointValue.longitude) === nt(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return nt(t.integerValue) === nt(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = nt(t.doubleValue), r = nt(e.doubleValue);
                return n === r ? Q$1(n) === Q$1(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return Ce(t.arrayValue.values || [], e.arrayValue.values || [], X$1);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (G$1(n) !== G$1(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !X$1(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return Ve("Unexpected value type: " + JSON.stringify(t));
    }
}

function K$1(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return X$1(t, e);
    }));
}

function Z$1(t, e) {
    var n = J$1(t), r = J$1(e);
    if (n !== r) return Ue(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return Ue(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = nt(t.integerValue || t.doubleValue), r = nt(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return $(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return $(Y$1(t), Y$1(e));

      case 5 /* StringValue */ :
        return Ue(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = rt(t), r = rt(e);
            return n.C(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = Ue(n[i], r[i]);
                if (0 !== o) return o;
            }
            return Ue(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = Ue(nt(t.latitude), nt(e.latitude));
            return 0 !== n ? n : Ue(nt(t.longitude), nt(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = Z$1(n[i], r[i]);
                if (o) return o;
            }
            return Ue(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Ue(r[s], o[s]);
                if (0 !== u) return u;
                var a = Z$1(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return Ue(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw Ve("Invalid value type: " + n);
    }
}

function $(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return Ue(t, e);
    var n = et(t), r = et(e), i = Ue(n.seconds, r.seconds);
    return 0 !== i ? i : Ue(n.nanos, r.nanos);
}

function tt(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = et(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? rt(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        U$1.tt(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : Ve("Invalid value type: " + JSON.stringify(e));
        var n, r;
    }(t);
}

function et(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (Le(!!t, "Cannot normalize null or undefined timestamp."), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = W$1.exec(t);
        if (Le(!!n, "invalid timestamp: " + t), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: nt(t.seconds),
        nanos: nt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function nt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function rt(t) {
    return "string" == typeof t ? B$1.fromBase64String(t) : B$1.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function it(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.G()
    };
}

/** Returns true if `value` is an IntegerValue . */ function ot(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function st(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function ut(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function at(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function ht(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Transforms a value into a server-generated timestamp. */ var ct = /** @class */ function() {
    function t() {}
    return t.prototype.qt = function(t, e) {
        return function(t, e) {
            var n = {
                fields: {
                    __type__: {
                        stringValue: "server_timestamp"
                    },
                    __local_write_time__: {
                        timestampValue: {
                            seconds: t.seconds,
                            nanos: t.nanoseconds
                        }
                    }
                }
            };
            return e && (n.fields.__previous_value__ = e), {
                mapValue: n
            };
        }(e, t);
    }, t.prototype.Bt = function(t, e) {
        return e;
    }, t.prototype.xt = function(t) {
        return null;
        // Server timestamps are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t;
    }, t;
}();

ct.instance = new ct;

/** Transforms an array value via a union operation. */
var ft = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.qt = function(t, e) {
        return this.apply(t);
    }, t.prototype.Bt = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = dt(t), n = function(t) {
            e.some((function(e) {
                return X$1(e, t);
            })) || e.push(t);
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.xt = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Ce(this.elements, e.elements, X$1);
    }, t;
}(), lt = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.qt = function(t, e) {
        return this.apply(t);
    }, t.prototype.Bt = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = dt(t), n = function(t) {
            e = e.filter((function(e) {
                return !X$1(e, t);
            }));
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.xt = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Ce(this.elements, e.elements, X$1);
    }, t;
}(), pt = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.Qt = e;
    }
    return t.prototype.qt = function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = this.xt(t), r = this.asNumber(n) + this.asNumber(this.Qt);
        return ot(n) && ot(this.Qt) ? this.serializer.Wt(r) : this.serializer.jt(r);
    }, t.prototype.Bt = function(t, e) {
        return e;
    }, 
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced value of 0.
     */
    t.prototype.xt = function(t) {
        return ot(e = t) || function(t) {
            return !!t && "doubleValue" in t;
        }(e) ? t : {
            integerValue: 0
        };
        var e;
    }, t.prototype.isEqual = function(e) {
        return e instanceof t && X$1(this.Qt, e.Qt);
    }, t.prototype.asNumber = function(t) {
        return nt(t.integerValue || t.doubleValue);
    }, t;
}();

/** Transforms an array value via a remove operation. */ function dt(t) {
    return st(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var yt = /** @class */ function() {
    function t(t) {
        this.fields = t;
        // TODO(dimond): validation of FieldMask
        }
    return t.Gt = function(e) {
        return new t(e);
    }, t.zt = function(e) {
        var n = new P$1(O$1.k);
        return e.forEach((function(t) {
            return n = n.add(t);
        })), new t(n);
    }, 
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    t.prototype.Kt = function(t) {
        var e = !1;
        return this.fields.forEach((function(n) {
            n.B(t) && (e = !0);
        })), e;
    }, t.prototype.isEqual = function(t) {
        return this.fields.isEqual(t.fields);
    }, t;
}(), vt = /** @class */ function() {
    function t(t, e) {
        this.field = t, this.transform = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
    }, t;
}(), mt = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, gt = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new Precondition with an exists flag. */;
    }
    return t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Ht", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    t.prototype.Jt = function(t) {
        return void 0 !== this.updateTime ? t instanceof St && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof St;
    }, t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/** A field path and the TransformOperation to perform upon it. */ gt.NONE = new gt;

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */
var wt = /** @class */ function() {
    function t() {}
    return t.prototype.Yt = function(t) {}, 
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.MIN.
     */
    t.Xt = function(t) {
        return t instanceof St ? t.version : R$1.MIN;
    }, t;
}(), Et = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.Zt = r, i.type = 0 /* Set */ , 
        i;
    }
    return __extends(n, e), n.prototype.Bt = function(t, e) {
        this.Yt(t);
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var n = e.version;
        return new St(this.key, n, this.value, {
            hasCommittedMutations: !0
        });
    }, n.prototype.qt = function(t, e, n) {
        if (this.Yt(t), !this.Zt.Jt(t)) return t;
        var r = wt.Xt(t);
        return new St(this.key, r, this.value, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Zt.isEqual(t.Zt);
    }, n;
}(wt), bt = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.se = r, o.Zt = i, o.type = 1 /* Patch */ , 
        o;
    }
    return __extends(n, e), n.prototype.Bt = function(t, e) {
        if (this.Yt(t), !this.Zt.Jt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Dt(this.key, e.version);
        var n = this.ie(t);
        return new St(this.key, e.version, n, {
            hasCommittedMutations: !0
        });
    }, n.prototype.qt = function(t, e, n) {
        if (this.Yt(t), !this.Zt.Jt(t)) return t;
        var r = wt.Xt(t), i = this.ie(t);
        return new St(this.key, r, i, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.se.isEqual(t.se) && this.Zt.isEqual(t.Zt);
    }, 
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    n.prototype.ie = function(t) {
        var e;
        return e = t instanceof St ? t.data() : Tt.EMPTY, this.ne(e);
    }, n.prototype.ne = function(t) {
        var e = this, n = t.re();
        return this.se.fields.forEach((function(t) {
            if (!t.q()) {
                var r = e.data.field(t);
                null !== r ? n.set(t, r) : n.delete(t);
            }
        })), n.he();
    }, n;
}(wt), At = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Zt = gt.exists(!0), r;
    }
    return __extends(n, e), n.prototype.Bt = function(t, e) {
        if (this.Yt(t), Le(null != e.transformResults, "Transform results missing for TransformMutation."), 
        !this.Zt.Jt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Dt(this.key, e.version);
        var n = this.oe(t), r = this.ae(t, e.transformResults), i = e.version, o = this.ue(n.data(), r);
        return new St(this.key, i, o, {
            hasCommittedMutations: !0
        });
    }, n.prototype.qt = function(t, e, n) {
        if (this.Yt(t), !this.Zt.Jt(t)) return t;
        var r = this.oe(t), i = this.ce(n, t, e), o = this.ue(r.data(), i);
        return new St(this.key, r.version, o, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
            var i = r[n], o = t instanceof St ? t.field(i.field) : void 0, s = i.transform.xt(o || null);
            null != s && (e = null == e ? Tt.le().set(i.field, s) : e.set(i.field, s));
        }
        return e ? e.he() : null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && Ce(this.fieldTransforms, t.fieldTransforms, (function(t, e) {
            return t.isEqual(e);
        })) && this.Zt.isEqual(t.Zt);
    }, 
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    n.prototype.oe = function(t) {
        return t;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    n.prototype.ae = function(t, e) {
        var n = [];
        Le(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
        for (var r = 0; r < e.length; r++) {
            var i = this.fieldTransforms[r], o = i.transform, s = null;
            t instanceof St && (s = t.field(i.field)), n.push(o.Bt(s, e[r]));
        }
        return n;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    n.prototype.ce = function(t, e, n) {
        for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
            var s = o[i], u = s.transform, a = null;
            e instanceof St && (a = e.field(s.field)), null === a && n instanceof St && (
            // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            a = n.field(s.field)), r.push(u.qt(a, t));
        }
        return r;
    }, n.prototype.ue = function(t, e) {
        for (var n = t.re(), r = 0; r < this.fieldTransforms.length; r++) {
            var i = this.fieldTransforms[r].field;
            n.set(i, e[r]);
        }
        return n.he();
    }, n;
}(wt), Nt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Zt = n, r.type = 3 /* Delete */ , r;
    }
    return __extends(n, e), n.prototype.Bt = function(t, e) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.Yt(t), new Rt(this.key, e.version, {
            hasCommittedMutations: !0
        });
    }, n.prototype.qt = function(t, e, n) {
        return this.Yt(t), this.Zt.Jt(t) ? new Rt(this.key, R$1.S()) : t;
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Zt.isEqual(t.Zt);
    }, n;
}(wt), It = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Zt = n, r.type = 4 /* Verify */ , r;
    }
    return __extends(n, e), n.prototype.Bt = function(t, e) {
        Ve("VerifyMutation should only be used in Transactions.");
    }, n.prototype.qt = function(t, e, n) {
        Ve("VerifyMutation should only be used in Transactions.");
    }, n.prototype.ee = function(t) {
        Ve("VerifyMutation should only be used in Transactions.");
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Zt.isEqual(t.Zt);
    }, n;
}(wt), Tt = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    /** Returns a new Builder instance that is based on an empty object. */    return t.le = function() {
        return t.EMPTY.re();
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.q()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!ht(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.U()]) || null;
    }, 
    /**
     * Returns a FieldMask built from all FieldPaths starting from this
     * ObjectValue, including paths from nested objects.
     */
    t.prototype.se = function() {
        return this._e(this.proto.mapValue);
    }, t.prototype._e = function(t) {
        var e = this, n = new P$1(O$1.k);
        return F$1(t.fields || {}, (function(t, r) {
            var i = new O$1([ t ]);
            if (10 /* ObjectValue */ === J$1(r)) {
                var o = e._e(r.mapValue).fields;
                o.q() ? 
                // Preserve the empty map by adding it to the FieldMask.
                n = n.add(i) : 
                // For nested and non-empty ObjectValues, add the FieldPath of the
                // leaf nodes.
                o.forEach((function(t) {
                    n = n.add(i.child(t));
                }));
            } else 
            // For nested and non-empty ObjectValues, add the FieldPath of the leaf
            // nodes.
            n = n.add(i);
        })), yt.Gt(n);
    }, t.prototype.isEqual = function(t) {
        return X$1(this.proto, t.proto);
    }, 
    /** Creates a ObjectValueBuilder instance that is based on the current value. */ t.prototype.re = function() {
        return new _t(this);
    }, t;
}();

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ Tt.EMPTY = new Tt({
    mapValue: {}
});

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */
var _t = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        this.de = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.fe = new Map
        /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */;
    }
    return t.prototype.set = function(t, e) {
        return this.we(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.we(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.we = function(t, e) {
        for (var n = this.fe, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === J$1(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.U(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.he = function() {
        var t = this.Te(O$1.H, this.fe);
        return null != t ? new Tt(t) : this.de;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.EMPTY_PATH to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.Te = function(t, e) {
        var n = this, r = !1, i = this.de.field(t), o = ht(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.Te(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}(), kt = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.version = e;
    }
    return t.me = function(t, e) {
        return U$1.k(t.key, e.key);
    }, t;
}(), St = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).Ee = r, o.te = !!i.te, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return __extends(n, e), n.prototype.field = function(t) {
        return this.Ee.field(t);
    }, n.prototype.data = function() {
        return this.Ee;
    }, n.prototype.Re = function() {
        return this.Ee.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.te === t.te && this.hasCommittedMutations === t.hasCommittedMutations && this.Ee.isEqual(t.Ee);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.Ee.toString() + ", {hasLocalMutations: " + this.te + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.te || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.Ie = function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? Z$1(r, i) : Ve("Trying to compare documents on fields that don't exist");
    }, n;
}(kt), Rt = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(kt), Dt = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(kt), Vt = /** @class */ function() {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function t(t, e, n, r, i, o, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
        this.startAt = o, this.endAt = s, this.Ae = null;
    }
    return t.prototype.canonicalId = function() {
        if (null === this.Ae) {
            var t = this.path.G();
            null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:", 
            t += this.filters.map((function(t) {
                return t.canonicalId();
            })).join(","), t += "|ob:", t += this.orderBy.map((function(t) {
                return t.canonicalId();
            })).join(","), z$1(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", 
            t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), 
            this.Ae = t;
        }
        return this.Ae;
    }, t.prototype.toString = function() {
        var t = this.path.G();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 
        this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), 
        z$1(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), 
        this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), 
        "Target(" + t + ")";
    }, t.prototype.isEqual = function(t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var e = 0; e < this.orderBy.length; e++) if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (var n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
        return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt);
    }, t.prototype.Pe = function() {
        return U$1.st(this.path) && null === this.collectionGroup && 0 === this.filters.length;
    }, t;
}(), Lt = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.Ve = n, 
        this.filters = r, this.limit = i, this.pe = o, this.startAt = s, this.endAt = u, 
        this.ge = null, 
        // The corresponding `Target` of this `Query` instance.
        this.ye = null, this.startAt && this.be(this.startAt), this.endAt && this.be(this.endAt);
    }
    return t.ve = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.ge) {
                var t = this.Se(), e = this.Ce();
                if (null !== t && null === e) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.Y() ? this.ge = [ Qt ] : this.ge = [ new zt(t), Qt ]; else {
                    this.ge = [];
                    for (var n = !1, r = 0, i = this.Ve; r < i.length; r++) {
                        var o = i[r];
                        this.ge.push(o), o.field.Y() && (n = !0);
                    }
                    if (!n) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.Ve.length > 0 ? this.Ve[this.Ve.length - 1].dir : Gt.ASCENDING;
                        this.ge.push(s === Gt.ASCENDING ? Qt : Ht);
                    }
                }
            }
            return this.ge;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.De = function(e) {
        var n = this.filters.concat([ e ]);
        return new t(this.path, this.collectionGroup, this.Ve.slice(), n, this.limit, this.pe, this.startAt, this.endAt);
    }, t.prototype.Fe = function(e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.Ve.concat([ e ]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.pe, this.startAt, this.endAt);
    }, t.prototype.Ne = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), e, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype.ke = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), e, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.Le = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), this.limit, this.pe, e, this.endAt);
    }, t.prototype.$e = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), this.limit, this.pe, this.startAt, e);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.Oe = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.Ve.slice(), this.filters.slice(), this.limit, this.pe, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.Me = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.Ve.length || 1 === this.Ve.length && this.Ve[0].field.Y());
    }, 
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    t.prototype.canonicalId = function() {
        return this.Ue().canonicalId() + "|lt:" + this.pe;
    }, t.prototype.toString = function() {
        return "Query(target=" + this.Ue().toString() + "; limitType=" + this.pe + ")";
    }, t.prototype.isEqual = function(t) {
        return this.Ue().isEqual(t.Ue()) && this.pe === t.pe;
    }, t.prototype.qe = function(t, e) {
        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
            var o = i[r], s = o.compare(t, e);
            if (0 !== s) return s;
            n = n || o.field.Y();
        }
        return 0;
    }, t.prototype.matches = function(t) {
        return this.Be(t) && this.xe(t) && this.Qe(t) && this.We(t);
    }, t.prototype.je = function() {
        return !z$1(this.limit) && "F" /* First */ === this.pe;
    }, t.prototype.Ge = function() {
        return !z$1(this.limit) && "L" /* Last */ === this.pe;
    }, t.prototype.Ce = function() {
        return this.Ve.length > 0 ? this.Ve[0].field : null;
    }, t.prototype.Se = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n instanceof Ut && n.ze()) return n.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.Ke = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (r instanceof Ut && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t.prototype.Pe = function() {
        return this.Ue().Pe();
    }, t.prototype.He = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.Ue = function() {
        if (!this.ye) if ("F" /* First */ === this.pe) this.ye = new Vt(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                var r = n[e], i = r.dir === Gt.DESCENDING ? Gt.ASCENDING : Gt.DESCENDING;
                t.push(new zt(r.field, i));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var o = this.endAt ? new Bt(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new Bt(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
                        this.ye = new Vt(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.ye;
    }, t.prototype.Be = function(t) {
        var e = t.key.path;
        return null !== this.collectionGroup ? t.key.et(this.collectionGroup) && this.path.B(e) : U$1.st(this.path) ? this.path.isEqual(e) : this.path.W(e);
    }, 
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    t.prototype.xe = function(t) {
        for (var e = 0, n = this.Ve; e < n.length; e++) {
            var r = n[e];
            // order by key always matches
                        if (!r.field.Y() && null === t.field(r.field)) return !1;
        }
        return !0;
    }, t.prototype.Qe = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            if (!n[e].matches(t)) return !1;
        }
        return !0;
    }, 
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    t.prototype.We = function(t) {
        return !(this.startAt && !this.startAt.Je(this.orderBy, t) || this.endAt && this.endAt.Je(this.orderBy, t));
    }, t.prototype.be = function(t) {}, t;
}(), Ot = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.K = function(e) {
        switch (e) {
          case "<":
            return t.LESS_THAN;

          case "<=":
            return t.LESS_THAN_OR_EQUAL;

          case "==":
            return t.EQUAL;

          case ">=":
            return t.GREATER_THAN_OR_EQUAL;

          case ">":
            return t.GREATER_THAN;

          case "array-contains":
            return t.ARRAY_CONTAINS;

          case "in":
            return t.IN;

          case "array-contains-any":
            return t.ARRAY_CONTAINS_ANY;

          default:
            return Ve("Unknown FieldFilter operator: " + e);
        }
    }, t.prototype.toString = function() {
        return this.name;
    }, t.prototype.isEqual = function(t) {
        return this.name === t.name;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */ Ot.LESS_THAN = new Ot("<"), Ot.LESS_THAN_OR_EQUAL = new Ot("<="), Ot.EQUAL = new Ot("=="), 
Ot.GREATER_THAN = new Ot(">"), Ot.GREATER_THAN_OR_EQUAL = new Ot(">="), Ot.ARRAY_CONTAINS = new Ot("array-contains"), 
Ot.IN = new Ot("in"), Ot.ARRAY_CONTAINS_ANY = new Ot("array-contains-any");

var Ut = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return __extends(n, e), n.create = function(t, e, r) {
        if (t.Y()) return e === Ot.IN ? new qt(t, r) : new Ct(t, e, r);
        if (ut(r)) {
            if (e !== Ot.EQUAL) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (at(r)) {
            if (e !== Ot.EQUAL) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return e === Ot.ARRAY_CONTAINS ? new Mt(t, r) : e === Ot.IN ? new Pt(t, r) : e === Ot.ARRAY_CONTAINS_ANY ? new xt(t, r) : new n(t, e, r);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && J$1(this.value) === J$1(e) && this.Ye(Z$1(e, this.value));
    }, n.prototype.Ye = function(t) {
        switch (this.op) {
          case Ot.LESS_THAN:
            return t < 0;

          case Ot.LESS_THAN_OR_EQUAL:
            return t <= 0;

          case Ot.EQUAL:
            return 0 === t;

          case Ot.GREATER_THAN:
            return t > 0;

          case Ot.GREATER_THAN_OR_EQUAL:
            return t >= 0;

          default:
            return Ve("Unknown FieldFilter operator: " + this.op);
        }
    }, n.prototype.ze = function() {
        return [ Ot.LESS_THAN, Ot.LESS_THAN_OR_EQUAL, Ot.GREATER_THAN, Ot.GREATER_THAN_OR_EQUAL ].indexOf(this.op) >= 0;
    }, n.prototype.canonicalId = function() {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.G() + this.op.toString() + tt(this.value);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.op.isEqual(t.op) && this.field.isEqual(t.field) && X$1(this.value, t.value);
    }, n.prototype.toString = function() {
        return this.field.G() + " " + this.op + " " + tt(this.value);
    }, n;
}((function() {})), Ct = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = U$1.tt(r.referenceValue), i;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = U$1.k(t.key, this.key);
        return this.Ye(e);
    }, n;
}(Ut), qt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, Ot.IN, n) || this).keys = (n.arrayValue.values || []).map((function(t) {
            return U$1.tt(t.referenceValue);
        })), r;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(Ut), Mt = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, Ot.ARRAY_CONTAINS, n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return st(e) && K$1(e.arrayValue, this.value);
    }, n;
}(Ut), Pt = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, Ot.IN, n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && K$1(this.value.arrayValue, e);
    }, n;
}(Ut), xt = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, Ot.ARRAY_CONTAINS_ANY, n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!st(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return K$1(e.value.arrayValue, t);
        }));
    }, n;
}(Ut), Gt = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.prototype.toString = function() {
        return this.name;
    }, t;
}();

/** Filter that matches on key fields (i.e. '__name__'). */ Gt.ASCENDING = new Gt("asc"), 
Gt.DESCENDING = new Gt("desc");

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */
var Ft, jt, Bt = /** @class */ function() {
    function t(t, e) {
        this.position = t, this.before = e;
    }
    return t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return (this.before ? "b" : "a") + ":" + this.position.map((function(t) {
            return tt(t);
        })).join(",");
    }, 
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    t.prototype.Je = function(t, e) {
        for (var n = 0, r = 0; r < this.position.length; r++) {
            var i = t[r], o = this.position[r];
            if (n = i.field.Y() ? U$1.k(U$1.tt(o.referenceValue), e.key) : Z$1(o, e.field(i.field)), 
            i.dir === Gt.DESCENDING && (n *= -1), 0 !== n) break;
        }
        return this.before ? n <= 0 : n < 0;
    }, t.prototype.isEqual = function(t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
        for (var e = 0; e < this.position.length; e++) if (!X$1(this.position[e], t.position[e])) return !1;
        return !0;
    }, t;
}(), zt = /** @class */ function() {
    function t(t, e) {
        this.field = t, void 0 === e && (e = Gt.ASCENDING), this.dir = e, this.Xe = t.Y();
    }
    return t.prototype.compare = function(t, e) {
        var n = this.Xe ? St.me(t, e) : St.Ie(this.field, t, e);
        switch (this.dir) {
          case Gt.ASCENDING:
            return n;

          case Gt.DESCENDING:
            return -1 * n;

          default:
            return Ve("Unknown direction: " + this.dir);
        }
    }, t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return this.field.G() + this.dir.toString();
    }, t.prototype.toString = function() {
        return this.field.G() + " (" + this.dir + ")";
    }, t.prototype.isEqual = function(t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
    }, t;
}(), Qt = new zt(O$1.X(), Gt.ASCENDING), Ht = new zt(O$1.X(), Gt.DESCENDING), Yt = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = R$1.MIN), void 0 === o && (o = R$1.MIN), void 0 === s && (s = B$1.Ut), 
        this.target = t, this.targetId = e, this.Ze = n, this.sequenceNumber = r, this.ts = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.es = function(e) {
        return new t(this.target, this.targetId, this.Ze, e, this.ts, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.ss = function(e, n) {
        return new t(this.target, this.targetId, this.Ze, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.ns = function(e) {
        return new t(this.target, this.targetId, this.Ze, this.sequenceNumber, this.ts, e, this.resumeToken);
    }, t;
}(), Wt = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function Jt(t) {
    switch (t) {
      case b.OK:
        return Ve("Treated status OK as error");

      case b.CANCELLED:
      case b.UNKNOWN:
      case b.DEADLINE_EXCEEDED:
      case b.RESOURCE_EXHAUSTED:
      case b.INTERNAL:
      case b.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case b.UNAUTHENTICATED:
        return !1;

      case b.INVALID_ARGUMENT:
      case b.NOT_FOUND:
      case b.ALREADY_EXISTS:
      case b.PERMISSION_DENIED:
      case b.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case b.ABORTED:
      case b.OUT_OF_RANGE:
      case b.UNIMPLEMENTED:
      case b.DATA_LOSS:
        return !0;

      default:
        return Ve("Unknown status code: " + t);
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function Xt(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return Re("GRPC error has no .code"), b.UNKNOWN;
    switch (t) {
      case Ft.OK:
        return b.OK;

      case Ft.CANCELLED:
        return b.CANCELLED;

      case Ft.UNKNOWN:
        return b.UNKNOWN;

      case Ft.DEADLINE_EXCEEDED:
        return b.DEADLINE_EXCEEDED;

      case Ft.RESOURCE_EXHAUSTED:
        return b.RESOURCE_EXHAUSTED;

      case Ft.INTERNAL:
        return b.INTERNAL;

      case Ft.UNAVAILABLE:
        return b.UNAVAILABLE;

      case Ft.UNAUTHENTICATED:
        return b.UNAUTHENTICATED;

      case Ft.INVALID_ARGUMENT:
        return b.INVALID_ARGUMENT;

      case Ft.NOT_FOUND:
        return b.NOT_FOUND;

      case Ft.ALREADY_EXISTS:
        return b.ALREADY_EXISTS;

      case Ft.PERMISSION_DENIED:
        return b.PERMISSION_DENIED;

      case Ft.FAILED_PRECONDITION:
        return b.FAILED_PRECONDITION;

      case Ft.ABORTED:
        return b.ABORTED;

      case Ft.OUT_OF_RANGE:
        return b.OUT_OF_RANGE;

      case Ft.UNIMPLEMENTED:
        return b.UNIMPLEMENTED;

      case Ft.DATA_LOSS:
        return b.DATA_LOSS;

      default:
        return Ve("Unknown status code: " + t);
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (jt = Ft || (Ft = {}))[jt.OK = 0] = "OK", jt[jt.CANCELLED = 1] = "CANCELLED", 
jt[jt.UNKNOWN = 2] = "UNKNOWN", jt[jt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
jt[jt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", jt[jt.NOT_FOUND = 5] = "NOT_FOUND", 
jt[jt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", jt[jt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
jt[jt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", jt[jt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
jt[jt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", jt[jt.ABORTED = 10] = "ABORTED", 
jt[jt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", jt[jt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
jt[jt.INTERNAL = 13] = "INTERNAL", jt[jt.UNAVAILABLE = 14] = "UNAVAILABLE", jt[jt.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kt = new C$1(U$1.k);

function Zt() {
    return Kt;
}

function $t() {
    return Zt();
}

var te = new C$1(U$1.k);

function ee() {
    return te;
}

var ne = new C$1(U$1.k);

function re() {
    return ne;
}

var ie = new P$1(U$1.k);

function oe() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = ie, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var se = new P$1(Ue);

function ue() {
    return se;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var ae = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.k = t ? function(e, n) {
            return t(e, n) || U$1.k(e.key, n.key);
        } : function(t, e) {
            return U$1.k(t.key, e.key);
        }, this.rs = ee(), this.hs = new C$1(this.k)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.os = function(e) {
        return new t(e.k);
    }, t.prototype.has = function(t) {
        return null != this.rs.get(t);
    }, t.prototype.get = function(t) {
        return this.rs.get(t);
    }, t.prototype.first = function() {
        return this.hs.ot();
    }, t.prototype.last = function() {
        return this.hs.at();
    }, t.prototype.q = function() {
        return this.hs.q();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.rs.get(t);
        return e ? this.hs.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.hs.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.hs.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.rt(e.rs.nt(t.key, t), e.hs.nt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.rt(this.rs.remove(t), this.hs.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.hs.lt(), r = e.hs.lt(); n.Rt(); ) {
            var i = n.Et().key, o = r.Et().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.rt = function(e, n) {
        var r = new t;
        return r.k = this.k, r.rs = e, r.hs = n, r;
    }, t;
}(), he = /** @class */ function() {
    function t() {
        this.as = new C$1(U$1.k);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.as.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.as = this.as.nt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.as = this.as.nt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.as = this.as.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.as = this.as.nt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.as = this.as.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.as = this.as.nt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.as = this.as.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        Ve("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.as = this.as.nt(e, t);
    }, t.prototype.us = function() {
        var t = [];
        return this.as.ut((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), ce = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.cs = n, this.docChanges = r, this.ls = i, this.fromCache = o, 
        this._s = s, this.ds = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.fs = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, ae.os(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.ls.q();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this._s === t._s && this.ls.isEqual(t.ls) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.cs.isEqual(t.cs))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), fe = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.ts = t, this.ws = e, this.Ts = n, this.ms = r, this.Es = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Rs = function(e, n) {
        var r = new Map;
        return r.set(e, le.Is(e, n)), new t(R$1.MIN, r, ue(), Zt(), oe());
    }, t;
}(), le = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.As = e, this.Ps = n, this.Vs = r, this.ps = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.Is = function(e, n) {
        return new t(B$1.Ut, n, oe(), oe(), oe());
    }, t;
}(), pe = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.gs = t, this.removedTargetIds = e, this.key = n, this.ys = r;
}, de = function(t, e) {
    this.targetId = t, this.bs = e;
}, ye = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = B$1.Ut), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, ve = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.vs = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.Ss = we(), 
        /** See public getters for explanations of these fields. */
        this.Cs = B$1.Ut, this.Ds = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.Fs = !0;
    }
    return Object.defineProperty(t.prototype, "As", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.Ds;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.Cs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Ns", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.vs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ks", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.Fs;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.Ls = function(t) {
        t.Mt() > 0 && (this.Fs = !0, this.Cs = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.$s = function() {
        var t = oe(), e = oe(), n = oe();
        return this.Ss.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                Ve("Encountered invalid change type: " + i);
            }
        })), new le(this.Cs, this.Ds, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.Os = function() {
        this.Fs = !1, this.Ss = we();
    }, t.prototype.Ms = function(t, e) {
        this.Fs = !0, this.Ss = this.Ss.nt(t, e);
    }, t.prototype.Us = function(t) {
        this.Fs = !0, this.Ss = this.Ss.remove(t);
    }, t.prototype.qs = function() {
        this.vs += 1;
    }, t.prototype.Bs = function() {
        this.vs -= 1;
    }, t.prototype.xs = function() {
        this.Fs = !0, this.Ds = !0;
    }, t;
}(), me = /** @class */ function() {
    function t(t) {
        this.Qs = t, 
        /** The internal state of all tracked targets. */
        this.Ws = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.js = Zt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Gs = ge(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.zs = new P$1(Ue)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.Ks = function(t) {
        for (var e = 0, n = t.gs; e < n.length; e++) {
            var r = n[e];
            t.ys instanceof St ? this.Hs(r, t.ys) : t.ys instanceof Rt && this.Js(r, t.key, t.ys);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.Js(s, t.key, t.ys);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Ys = function(t) {
        var e = this;
        this.Xs(t, (function(n) {
            var r = e.Zs(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.ti(n) && r.Ls(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Bs(), r.Ns || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.Os(), r.Ls(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Bs(), r.Ns || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.ti(n) && (r.xs(), r.Ls(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.ti(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.ei(n), r.Ls(t.resumeToken));
                break;

              default:
                Ve("Unknown target watch change state: " + t.state);
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.Xs = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ws.forEach((function(t, r) {
            n.ti(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.si = function(t) {
        var e = t.targetId, n = t.bs.count, r = this.ii(e);
        if (r) {
            var i = r.target;
            if (i.Pe()) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new U$1(i.path);
                this.Js(e, o, new Rt(o, R$1.S()));
            } else Le(1 === n, "Single document existence filter with count: " + n); else this.ni(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.ei(e), this.zs = this.zs.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.ri = function(t) {
        var e = this, n = new Map;
        this.Ws.forEach((function(r, i) {
            var o = e.ii(i);
            if (o) {
                if (r.As && o.target.Pe()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new U$1(o.target.path);
                    null !== e.js.get(s) || e.hi(i, s) || e.Js(i, s, new Rt(s, t));
                }
                r.ks && (n.set(i, r.$s()), r.Os());
            }
        }));
        var r = oe();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Gs.forEach((function(t, n) {
            var i = !0;
            n.Ft((function(t) {
                var n = e.ii(t);
                return !n || 2 /* LimboResolution */ === n.Ze || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new fe(t, n, this.zs, this.js, r);
        return this.js = Zt(), this.Gs = ge(), this.zs = new P$1(Ue), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Hs = function(t, e) {
        if (this.ti(t)) {
            var n = this.hi(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.Zs(t).Ms(e.key, n), this.js = this.js.nt(e.key, e), this.Gs = this.Gs.nt(e.key, this.oi(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.Js = function(t, e, n) {
        if (this.ti(t)) {
            var r = this.Zs(t);
            this.hi(t, e) ? r.Ms(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Us(e), this.Gs = this.Gs.nt(e, this.oi(e).delete(t)), n && (this.js = this.js.nt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Ws.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.ni = function(t) {
        var e = this.Zs(t).$s();
        return this.Qs.ai(t).size + e.Ps.size - e.ps.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.qs = function(t) {
        this.Zs(t).qs();
    }, t.prototype.Zs = function(t) {
        var e = this.Ws.get(t);
        return e || (e = new ve, this.Ws.set(t, e)), e;
    }, t.prototype.oi = function(t) {
        var e = this.Gs.get(t);
        return e || (e = new P$1(Ue), this.Gs = this.Gs.nt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.ti = function(t) {
        var e = null !== this.ii(t);
        return e || Se("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.ii = function(t) {
        var e = this.Ws.get(t);
        return e && e.Ns ? null : this.Qs.ui(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.ei = function(t) {
        var e = this;
        this.Ws.set(t, new ve), this.Qs.ai(t).forEach((function(n) {
            e.Js(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.hi = function(t, e) {
        return this.Qs.ai(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function ge() {
    return new C$1(U$1.k);
}

function we() {
    return new C$1(U$1.k);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ee = function() {
    var t = {};
    return t[Gt.ASCENDING.name] = "ASCENDING", t[Gt.DESCENDING.name] = "DESCENDING", 
    t;
}(), be = function() {
    var t = {};
    return t[Ot.LESS_THAN.name] = "LESS_THAN", t[Ot.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", 
    t[Ot.GREATER_THAN.name] = "GREATER_THAN", t[Ot.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", 
    t[Ot.EQUAL.name] = "EQUAL", t[Ot.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", t[Ot.IN.name] = "IN", 
    t[Ot.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", t;
}(), Ae = /** @class */ function() {
    function t(t, e) {
        this.ci = t, this.options = e;
    }
    return t.prototype.li = function(t) {
        var e = void 0 === t.code ? b.UNKNOWN : Xt(t.code);
        return new A$1(e, t.message || "");
    }, 
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    t.prototype._i = function(t) {
        return this.options.di || z$1(t) ? t : {
            value: t
        };
    }, 
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */
    t.prototype.fi = function(t) {
        var e;
        return z$1(e = "object" == typeof t ? t.value : t) ? null : e;
    }, 
    /**
     * Returns an IntegerValue for `value`.
     */
    t.prototype.Wt = function(t) {
        return {
            integerValue: "" + t
        };
    }, 
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */
    t.prototype.jt = function(t) {
        if (this.options.di) {
            if (isNaN(t)) return {
                doubleValue: "NaN"
            };
            if (t === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (t === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: Q$1(t) ? "-0" : t
        };
    }, 
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */
    t.prototype.wi = function(t) {
        return function(t) {
            return "number" == typeof t && Number.isInteger(t) && !Q$1(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
        }(t) ? this.Wt(t) : this.jt(t);
    }, 
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    t.prototype.F = function(t) {
        return this.options.di ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
            seconds: "" + t.seconds,
            nanos: t.nanoseconds
        };
    }, t.prototype.v = function(t) {
        var e = et(t);
        return new S$1(e.seconds, e.nanos);
    }, 
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    t.prototype.Ti = function(t) {
        return this.options.di ? t.toBase64() : t.toUint8Array();
    }, 
    /**
     * Returns a ByteString based on the proto string value.
     */
    t.prototype.mi = function(t) {
        return this.options.di ? (Le(void 0 === t || "string" == typeof t, "value must be undefined or a string when using proto3 Json"), 
        B$1.fromBase64String(t || "")) : (Le(void 0 === t || t instanceof Uint8Array, "value must be undefined or Uint8Array"), 
        B$1.fromUint8Array(t || new Uint8Array));
    }, t.prototype.toVersion = function(t) {
        return this.F(t.F());
    }, t.prototype.fromVersion = function(t) {
        return Le(!!t, "Trying to deserialize version that isn't set"), R$1.v(this.v(t));
    }, t.prototype.Ei = function(t, e) {
        return this.Ri(e || this.ci).child("documents").child(t).G();
    }, t.prototype.Ii = function(t) {
        var e = V$1.K(t);
        return Le(Ne(e), "Tried to deserialize invalid key " + e.toString()), e;
    }, t.prototype.Ai = function(t) {
        return this.Ei(t.path);
    }, t.prototype.tt = function(t) {
        var e = this.Ii(t);
        return Le(e.get(1) === this.ci.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.ci.projectId), 
        Le(!e.get(3) && !this.ci.database || e.get(3) === this.ci.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.ci.database), 
        new U$1(this.Pi(e));
    }, t.prototype.Vi = function(t) {
        return this.Ei(t);
    }, t.prototype.pi = function(t) {
        var e = this.Ii(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === e.length ? V$1.H : this.Pi(e);
    }, Object.defineProperty(t.prototype, "gi", {
        get: function() {
            return new V$1([ "projects", this.ci.projectId, "databases", this.ci.database ]).G();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ri = function(t) {
        return new V$1([ "projects", t.projectId, "databases", t.database ]);
    }, t.prototype.Pi = function(t) {
        return Le(t.length > 4 && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), 
        t.$(5);
    }, 
    /** Creates an api.Document from key and fields (but no create/update time) */ t.prototype.yi = function(t, e) {
        return {
            name: this.Ai(t),
            fields: e.proto.mapValue.fields
        };
    }, t.prototype.bi = function(t) {
        return {
            name: this.Ai(t.key),
            fields: t.Re().mapValue.fields,
            updateTime: this.F(t.version.F())
        };
    }, t.prototype.vi = function(t, e) {
        var n = this.tt(t.name), r = this.fromVersion(t.updateTime), i = new Tt({
            mapValue: {
                fields: t.fields
            }
        });
        return new St(n, r, i, {
            hasCommittedMutations: !!e
        });
    }, t.prototype.Si = function(t) {
        Le(!!t.found, "Tried to deserialize a found document from a missing document."), 
        t.found.name, t.found.updateTime;
        var e = this.tt(t.found.name), n = this.fromVersion(t.found.updateTime), r = new Tt({
            mapValue: {
                fields: t.found.fields
            }
        });
        return new St(e, n, r, {});
    }, t.prototype.Ci = function(t) {
        Le(!!t.missing, "Tried to deserialize a missing document from a found document."), 
        Le(!!t.readTime, "Tried to deserialize a missing document without a read time.");
        var e = this.tt(t.missing), n = this.fromVersion(t.readTime);
        return new Rt(e, n);
    }, t.prototype.Di = function(t) {
        return "found" in t ? this.Si(t) : "missing" in t ? this.Ci(t) : Ve("invalid batch get response: " + JSON.stringify(t));
    }, t.prototype.Fi = function(t) {
        var e;
        if ("targetChange" in t) {
            t.targetChange;
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var n = this.Ni(t.targetChange.targetChangeType || "NO_CHANGE"), r = t.targetChange.targetIds || [], i = this.mi(t.targetChange.resumeToken), o = t.targetChange.cause, s = o && this.li(o);
            e = new ye(n, r, i, s || null);
        } else if ("documentChange" in t) {
            t.documentChange;
            var u = t.documentChange;
            u.document, u.document.name, u.document.updateTime;
            var a = this.tt(u.document.name), h = this.fromVersion(u.document.updateTime), c = new Tt({
                mapValue: {
                    fields: u.document.fields
                }
            }), f = new St(a, h, c, {}), l = u.targetIds || [], p = u.removedTargetIds || [];
            e = new pe(l, p, f.key, f);
        } else if ("documentDelete" in t) {
            t.documentDelete;
            var d = t.documentDelete;
            d.document;
            var y = this.tt(d.document), v = d.readTime ? this.fromVersion(d.readTime) : R$1.S(), m = new Rt(y, v), g = d.removedTargetIds || [];
            e = new pe([], g, m.key, m);
        } else if ("documentRemove" in t) {
            t.documentRemove;
            var w = t.documentRemove;
            w.document;
            var E = this.tt(w.document), b = w.removedTargetIds || [];
            e = new pe([], b, E, null);
        } else {
            if (!("filter" in t)) return Ve("Unknown change type " + JSON.stringify(t));
            t.filter;
            var A = t.filter;
            A.targetId;
            var N = A.count || 0, I = new Wt(N), T = A.targetId;
            e = new de(T, I);
        }
        return e;
    }, t.prototype.Ni = function(t) {
        return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : Ve("Got unexpected TargetChange.state: " + t);
    }, t.prototype.ki = function(t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return R$1.MIN;
        var e = t.targetChange;
        return e.targetIds && e.targetIds.length ? R$1.MIN : e.readTime ? this.fromVersion(e.readTime) : R$1.MIN;
    }, t.prototype.Li = function(t) {
        var e, n = this;
        if (t instanceof Et) e = {
            update: this.yi(t.key, t.value)
        }; else if (t instanceof Nt) e = {
            delete: this.Ai(t.key)
        }; else if (t instanceof bt) e = {
            update: this.yi(t.key, t.data),
            updateMask: this.$i(t.se)
        }; else if (t instanceof At) e = {
            transform: {
                document: this.Ai(t.key),
                fieldTransforms: t.fieldTransforms.map((function(t) {
                    return n.Oi(t);
                }))
            }
        }; else {
            if (!(t instanceof It)) return Ve("Unknown mutation type " + t.type);
            e = {
                verify: this.Ai(t.key)
            };
        }
        return t.Zt.Ht || (e.currentDocument = this.Mi(t.Zt)), e;
    }, t.prototype.Ui = function(t) {
        var e = this, n = t.currentDocument ? this.qi(t.currentDocument) : gt.NONE;
        if (t.update) {
            t.update.name;
            var r = this.tt(t.update.name), i = new Tt({
                mapValue: {
                    fields: t.update.fields
                }
            });
            if (t.updateMask) {
                var o = this.Bi(t.updateMask);
                return new bt(r, i, o, n);
            }
            return new Et(r, i, n);
        }
        if (t.delete) {
            var s = this.tt(t.delete);
            return new Nt(s, n);
        }
        if (t.transform) {
            var u = this.tt(t.transform.document), a = t.transform.fieldTransforms.map((function(t) {
                return e.xi(t);
            }));
            return Le(!0 === n.exists, 'Transforms only support precondition "exists == true"'), 
            new At(u, a);
        }
        if (t.verify) {
            var h = this.tt(t.verify);
            return new It(h, n);
        }
        return Ve("unknown mutation proto: " + JSON.stringify(t));
    }, t.prototype.Mi = function(t) {
        return void 0 !== t.updateTime ? {
            updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
            exists: t.exists
        } : Ve("Unknown precondition");
    }, t.prototype.qi = function(t) {
        return void 0 !== t.updateTime ? gt.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? gt.exists(t.exists) : gt.NONE;
    }, t.prototype.Qi = function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
        n.isEqual(R$1.MIN) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = this.fromVersion(e));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
        new mt(n, r);
    }, t.prototype.Wi = function(t, e) {
        var n = this;
        return t && t.length > 0 ? (Le(void 0 !== e, "Received a write result without a commit time"), 
        t.map((function(t) {
            return n.Qi(t, e);
        }))) : [];
    }, t.prototype.Oi = function(t) {
        var e = t.transform;
        if (e instanceof ct) return {
            fieldPath: t.field.G(),
            setToServerValue: "REQUEST_TIME"
        };
        if (e instanceof ft) return {
            fieldPath: t.field.G(),
            appendMissingElements: {
                values: e.elements
            }
        };
        if (e instanceof lt) return {
            fieldPath: t.field.G(),
            removeAllFromArray: {
                values: e.elements
            }
        };
        if (e instanceof pt) return {
            fieldPath: t.field.G(),
            increment: e.Qt
        };
        throw Ve("Unknown transform: " + t.transform);
    }, t.prototype.xi = function(t) {
        var e = null;
        if ("setToServerValue" in t) Le("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), 
        e = ct.instance; else if ("appendMissingElements" in t) {
            var n = t.appendMissingElements.values || [];
            e = new ft(n);
        } else if ("removeAllFromArray" in t) {
            var r = t.removeAllFromArray.values || [];
            e = new lt(r);
        } else "increment" in t ? e = new pt(this, t.increment) : Ve("Unknown transform proto: " + JSON.stringify(t));
        var i = O$1.Z(t.fieldPath);
        return new vt(i, e);
    }, t.prototype.ji = function(t) {
        return {
            documents: [ this.Vi(t.path) ]
        };
    }, t.prototype.Gi = function(t) {
        var e = t.documents.length;
        Le(1 === e, "DocumentsTarget contained other than 1 document: " + e);
        var n = t.documents[0];
        return Lt.ve(this.pi(n)).Ue();
    }, t.prototype.zi = function(t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var e = {
            structuredQuery: {}
        }, n = t.path;
        null !== t.collectionGroup ? (e.parent = this.Vi(n), e.structuredQuery.from = [ {
            collectionId: t.collectionGroup,
            allDescendants: !0
        } ]) : (e.parent = this.Vi(n.O()), e.structuredQuery.from = [ {
            collectionId: n.U()
        } ]);
        var r = this.Ki(t.filters);
        r && (e.structuredQuery.where = r);
        var i = this.Hi(t.orderBy);
        i && (e.structuredQuery.orderBy = i);
        var o = this._i(t.limit);
        return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Ji(t.startAt)), 
        t.endAt && (e.structuredQuery.endAt = this.Ji(t.endAt)), e;
    }, t.prototype.Yi = function(t) {
        var e = this.pi(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            Le(1 === r, "StructuredQuery.from with more than one collection is not supported.");
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = this.Xi(n.where));
        var u = [];
        n.orderBy && (u = this.Zi(n.orderBy));
        var a = null;
        n.limit && (a = this.fi(n.limit));
        var h = null;
        n.startAt && (h = this.tn(n.startAt));
        var c = null;
        return n.endAt && (c = this.tn(n.endAt)), new Lt(e, i, u, s, a, "F" /* First */ , h, c).Ue();
    }, t.prototype.en = function(t) {
        var e = this.sn(t.Ze);
        return null == e ? null : {
            "goog-listen-tags": e
        };
    }, t.prototype.sn = function(t) {
        switch (t) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return Ve("Unrecognized query purpose: " + t);
        }
    }, t.prototype.Ue = function(t) {
        var e, n = t.target;
        return (e = n.Pe() ? {
            documents: this.ji(n)
        } : {
            query: this.zi(n)
        }).targetId = t.targetId, t.resumeToken.Mt() > 0 && (e.resumeToken = this.Ti(t.resumeToken)), 
        e;
    }, t.prototype.Ki = function(t) {
        var e = this;
        if (0 !== t.length) {
            var n = t.map((function(t) {
                return t instanceof Ut ? e.in(t) : Ve("Unrecognized filter: " + JSON.stringify(t));
            }));
            return 1 === n.length ? n[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: n
                }
            };
        }
    }, t.prototype.Xi = function(t) {
        var e = this;
        return t ? void 0 !== t.unaryFilter ? [ this.nn(t) ] : void 0 !== t.fieldFilter ? [ this.rn(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
            return e.Xi(t);
        })).reduce((function(t, e) {
            return t.concat(e);
        })) : Ve("Unknown filter: " + JSON.stringify(t)) : [];
    }, t.prototype.Hi = function(t) {
        var e = this;
        if (0 !== t.length) return t.map((function(t) {
            return e.hn(t);
        }));
    }, t.prototype.Zi = function(t) {
        var e = this;
        return t.map((function(t) {
            return e.on(t);
        }));
    }, t.prototype.Ji = function(t) {
        return {
            before: t.before,
            values: t.position
        };
    }, t.prototype.tn = function(t) {
        var e = !!t.before, n = t.values || [];
        return new Bt(n, e);
    }, 
    // visible for testing
    t.prototype.an = function(t) {
        return Ee[t.name];
    }, 
    // visible for testing
    t.prototype.un = function(t) {
        switch (t) {
          case "ASCENDING":
            return Gt.ASCENDING;

          case "DESCENDING":
            return Gt.DESCENDING;

          default:
            return;
        }
    }, 
    // visible for testing
    t.prototype.cn = function(t) {
        return be[t.name];
    }, t.prototype.ln = function(t) {
        switch (t) {
          case "EQUAL":
            return Ot.EQUAL;

          case "GREATER_THAN":
            return Ot.GREATER_THAN;

          case "GREATER_THAN_OR_EQUAL":
            return Ot.GREATER_THAN_OR_EQUAL;

          case "LESS_THAN":
            return Ot.LESS_THAN;

          case "LESS_THAN_OR_EQUAL":
            return Ot.LESS_THAN_OR_EQUAL;

          case "ARRAY_CONTAINS":
            return Ot.ARRAY_CONTAINS;

          case "IN":
            return Ot.IN;

          case "ARRAY_CONTAINS_ANY":
            return Ot.ARRAY_CONTAINS_ANY;

          case "OPERATOR_UNSPECIFIED":
            return Ve("Unspecified operator");

          default:
            return Ve("Unknown operator");
        }
    }, t.prototype._n = function(t) {
        return {
            fieldPath: t.G()
        };
    }, t.prototype.dn = function(t) {
        return O$1.Z(t.fieldPath);
    }, 
    // visible for testing
    t.prototype.hn = function(t) {
        return {
            field: this._n(t.field),
            direction: this.an(t.dir)
        };
    }, t.prototype.on = function(t) {
        return new zt(this.dn(t.field), this.un(t.direction));
    }, t.prototype.rn = function(t) {
        return Ut.create(this.dn(t.fieldFilter.field), this.ln(t.fieldFilter.op), t.fieldFilter.value);
    }, 
    // visible for testing
    t.prototype.in = function(t) {
        if (t.op === Ot.EQUAL) {
            if (at(t.value)) return {
                unaryFilter: {
                    field: this._n(t.field),
                    op: "IS_NAN"
                }
            };
            if (ut(t.value)) return {
                unaryFilter: {
                    field: this._n(t.field),
                    op: "IS_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: this._n(t.field),
                op: this.cn(t.op),
                value: t.value
            }
        };
    }, t.prototype.nn = function(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = this.dn(t.unaryFilter.field);
            return Ut.create(e, Ot.EQUAL, {
                doubleValue: NaN
            });

          case "IS_NULL":
            var n = this.dn(t.unaryFilter.field);
            return Ut.create(n, Ot.EQUAL, {
                nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
            return Ve("Unspecified filter");

          default:
            return Ve("Unknown filter");
        }
    }, t.prototype.$i = function(t) {
        var e = [];
        return t.fields.forEach((function(t) {
            return e.push(t.G());
        })), {
            fieldPaths: e
        };
    }, t.prototype.Bi = function(t) {
        var e = (t.fieldPaths || []).map((function(t) {
            return O$1.Z(t);
        }));
        return yt.zt(e);
    }, t;
}();

/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */ function Ne(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */ var Ie = /** @class */ function() {
    function t() {}
    return t.fn = function(e) {
        t.platform && Ve("Platform already defined"), t.platform = e;
    }, t.Ot = function() {
        return t.platform || Ve("Platform not set"), t.platform;
    }, t;
}(), Te = new Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function _e() {
    return Te.logLevel;
}

function ke(t) {
    Te.logLevel = t;
}

function Se(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Te.logLevel <= LogLevel.DEBUG) {
        var i = e.map(De);
        Te.debug.apply(Te, __spreadArrays([ "Firestore (" + w$1 + "): " + t ], i));
    }
}

function Re(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Te.logLevel <= LogLevel.ERROR) {
        var i = e.map(De);
        Te.error.apply(Te, __spreadArrays([ "Firestore (" + w$1 + "): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function De(t) {
    if ("string" == typeof t) return t;
    var e = Ie.Ot();
    try {
        return e.wn(t);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function Ve(t) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    var e = "FIRESTORE (" + w$1 + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw Re(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 */;
}

function Le(t, e) {
    t || Ve(e);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Oe = /** @class */ function() {
    function t() {}
    return t.Tn = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
        return e;
    }, t;
}();

function Ue(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function Ce(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var qe = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.ci = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, Me = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "mn", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.C = function(t) {
        return Ue(this.projectId, t.projectId) || Ue(this.database, t.database);
    }, t;
}(), Pe = /** @class */ function() {
    function t(t) {
        this.En = t, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.Rn = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.En(t), n = this.Rn[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (s.isEqual(t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.En(t), r = this.Rn[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (r[i][0].isEqual(t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.Rn[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.En(t), n = this.Rn[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.Rn[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        F$1(this.Rn, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.q = function() {
        return j(this.Rn);
    }, t;
}(), xe = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.In = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.Bt = function(t, e, n) {
        for (var r = n.An, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            if (o.key.isEqual(t)) {
                var s = r[i];
                e = o.Bt(e, s);
            }
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.qt = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = i.qt(e, e, this.In));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = a.qt(e, o, this.In));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.Pn = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.qt(r.key, t.get(r.key));
            i && (n = n.nt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), oe());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && Ce(this.mutations, t.mutations, (function(t, e) {
            return t.isEqual(e);
        })) && Ce(this.baseMutations, t.baseMutations, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), Ge = /** @class */ function() {
    function t(t, e, n, r, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    i) {
        this.batch = t, this.Vn = e, this.An = n, this.streamToken = r, this.pn = i
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r, i) {
        Le(e.mutations.length === r.length, "Mutations sent " + e.mutations.length + " must equal results received " + r.length);
        for (var o = re(), s = e.mutations, u = 0; u < s.length; u++) o = o.nt(s[u].key, r[u].version);
        return new t(e, n, r, i, o);
    }, t;
}(), Fe = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.gn = new P$1(je.me), 
        // A set of outstanding references to a document sorted by target id.
        this.yn = new P$1(je.bn)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.q = function() {
        return this.gn.q();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.vn = function(t, e) {
        var n = new je(t, e);
        this.gn = this.gn.add(n), this.yn = this.yn.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Sn = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.vn(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.Cn = function(t, e) {
        this.Dn(new je(t, e));
    }, t.prototype.Fn = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Cn(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Nn = function(t) {
        var e = this, n = U$1.EMPTY, r = new je(n, t), i = new je(n, t + 1), o = [];
        return this.yn.Dt([ r, i ], (function(t) {
            e.Dn(t), o.push(t.key);
        })), o;
    }, t.prototype.kn = function() {
        var t = this;
        this.gn.forEach((function(e) {
            return t.Dn(e);
        }));
    }, t.prototype.Dn = function(t) {
        this.gn = this.gn.delete(t), this.yn = this.yn.delete(t);
    }, t.prototype.Ln = function(t) {
        var e = U$1.EMPTY, n = new je(e, t), r = new je(e, t + 1), i = oe();
        return this.yn.Dt([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.$n = function(t) {
        var e = new je(t, 0), n = this.gn.Nt(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), je = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.On = e
        /** Compare by key then by ID */;
    }
    return t.me = function(t, e) {
        return U$1.k(t.key, e.key) || Ue(t.On, e.On);
    }, 
    /** Compare by ID then by key */ t.bn = function(t, e) {
        return Ue(t.On, e.On) || U$1.k(t.key, e.key);
    }, t;
}(), Be = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Mn = null, this.Un = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.qn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Bn = !1, t((function(t) {
            e.qn = !0, e.result = t, e.Mn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Mn(t);
        }), (function(t) {
            e.qn = !0, e.error = t, e.Un && e.Un(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Bn && Ve("Called next() or catch() twice for PersistencePromise"), this.Bn = !0, 
        this.qn ? this.error ? this.xn(n, this.error) : this.Qn(e, this.result) : new t((function(t, i) {
            r.Mn = function(n) {
                r.Qn(e, n).next(t, i);
            }, r.Un = function(e) {
                r.xn(n, e).next(t, i);
            };
        }));
    }, t.prototype.Wn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.jn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.Qn = function(e, n) {
        return e ? this.jn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.xn = function(e, n) {
        return e ? this.jn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.Gn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.zn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.Gn(r);
    }, t;
}(), ze = /** @class */ function() {
    function t(t, e, n) {
        this.Kn = t, this.Hn = e, this.Jn = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Yn = function(t, e) {
        var n = this;
        return this.Hn.Xn(t, e).next((function(r) {
            return n.Zn(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Zn = function(t, e, n) {
        return this.Kn.tr(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].qt(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.er = function(t, e, n) {
        var r = $t();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].qt(t, e);
            }
            r = r.nt(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.sr = function(t, e) {
        var n = this;
        return this.Kn.getEntries(t, e).next((function(e) {
            return n.ir(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.ir = function(t, e) {
        var n = this;
        return this.Hn.nr(t, e).next((function(r) {
            var i = n.er(t, e, r), o = Zt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Rt(t, R$1.S())), o = o.nt(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.MIN, return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.rr = function(t, e, n) {
        return e.Pe() ? this.hr(t, e.path) : e.He() ? this.or(t, e, n) : this.ar(t, e, n);
    }, t.prototype.hr = function(t, e) {
        // Just do a simple document lookup.
        return this.Yn(t, new U$1(e)).next((function(t) {
            var e = ee();
            return t instanceof St && (e = e.nt(t.key, t)), e;
        }));
    }, t.prototype.or = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = ee();
        return this.Jn.ur(t, i).next((function(s) {
            return Be.forEach(s, (function(s) {
                var u = e.Oe(s.child(i));
                return r.ar(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.nt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.ar = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Kn.rr(t, e, n).next((function(n) {
            return r = n, o.Hn.cr(t, e);
        })).next((function(e) {
            return i = e, o.lr(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], h = a.key, c = r.get(h), f = a.qt(c, c, o.In);
                    r = f instanceof St ? r.nt(h, f) : r.remove(h);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                e.matches(n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.lr = function(t, e, n) {
        for (var r = oe(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof bt && null === n.get(a.key) && (r = r.add(a.key));
        }
        var h = n;
        return this.Kn.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof St && (h = h.nt(t, e));
            })), h;
        }));
    }, t;
}(), Qe = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this._r = n, this.dr = r;
    }
    return t.wr = function(e, n) {
        for (var r = oe(), i = oe(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), He = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.Tr = function(t) {
            return n.mr(t);
        }, this.Er = function(t) {
            return e.Rr(t);
        });
    }
    return t.prototype.mr = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.Er && this.Er(t), t;
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */ He.Ir = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ye = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, We = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.Ar = t, this.Pr = e, this.Vr = n, this.op = r, this.pr = i, this.gr = new Ye, 
        this.then = this.gr.promise.then.bind(this.gr.promise), this.catch = this.gr.promise.catch.bind(this.gr.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.gr.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.yr = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.br = setTimeout((function() {
            return e.vr();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Sr = function() {
        return this.vr();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.br && (this.clearTimeout(), this.gr.reject(new A$1(b.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.vr = function() {
        var t = this;
        this.Ar.Cr((function() {
            return null !== t.br ? (t.clearTimeout(), t.op().then((function(e) {
                return t.gr.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.br && (this.pr(this), clearTimeout(this.br), this.br = null);
    }, t;
}(), Je = /** @class */ function() {
    function t() {
        // The last promise in the queue.
        this.Dr = Promise.resolve(), 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Fr = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Nr = [], 
        // visible for testing
        this.kr = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Lr = !1, 
        // List of TimerIds to fast-forward delays for.
        this.$r = [];
    }
    return Object.defineProperty(t.prototype, "Or", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Fr;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.Cr = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.Mr = function(t) {
        this.Ur(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.qr(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.Br = function(t) {
        return this.Ur(), this.qr(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.xr = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Ur(), this.Fr ? [ 3 /*break*/ , 2 ] : (this.Fr = !0, [ 4 /*yield*/ , this.Br(t) ]);

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.Ur(), this.Fr ? new Promise((function(t) {})) : this.qr(t);
    }, t.prototype.qr = function(t) {
        var e = this, n = this.Dr.then((function() {
            return e.Lr = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.kr = t, e.Lr = !1, Re("INTERNAL UNHANDLED ERROR: ", t.stack || t.message || ""), 
                t;
            })).then((function(t) {
                return e.Lr = !1, t;
            }));
        }));
        return this.Dr = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned CancelablePromise can be used to cancel
     * the operation prior to its running.
     */
    t.prototype.Qr = function(t, e, n) {
        var r = this;
        this.Ur(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.$r.indexOf(t) > -1 && (e = 0);
        var i = We.yr(this, t, e, n, (function(t) {
            return r.Wr(t);
        }));
        return this.Nr.push(i), i;
    }, t.prototype.Ur = function() {
        this.kr && Ve("AsyncQueue is already failed: " + (this.kr.stack || this.kr.message));
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.jr = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Gr = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Dr ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Dr) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.zr = function(t) {
        for (var e = 0, n = this.Nr; e < n.length; e++) {
            if (n[e].Pr === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Throws if no such operation exists. Pass TimerId.All to run
     *  all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.Kr = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Gr().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Nr.sort((function(t, e) {
                return t.Vr - e.Vr;
            }));
            for (var n = 0, r = e.Nr; n < r.length; n++) {
                var i = r[n];
                if (i.Sr(), "all" /* All */ !== t && i.Pr === t) break;
            }
            return e.Gr();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Hr = function(t) {
        this.$r.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.Wr = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Nr.indexOf(t);
        this.Nr.splice(e, 1);
    }, t;
}(), Xe = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.Jr = t, this.Yr = e, this.Xr = n;
    }
    return t.Zr = function(e) {
        return new t(e, t.th, t.eh);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 */ Xe.sh = -1, Xe.ih = 1048576, Xe.nh = 41943040, Xe.th = 10, Xe.eh = 1e3, Xe.rh = new Xe(Xe.nh, Xe.th, Xe.eh), 
Xe.DISABLED = new Xe(Xe.sh, 0, 0);

/**
 * Local storage in the Firestore client. Coordinates persistence components
 * like the mutation queue and remote document cache to present a
 * latency-compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine.
 * Writes from the client are put into a queue as provisional Mutations until
 * they are processed by the RemoteStore and confirmed as having been written
 * to the server.
 *
 * The local store provides the local version of documents that have been
 * modified locally. It maintains the constraint:
 *
 *   LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously
 * acknowledged or rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the
 * applyChangeBatch method. It will be some version of a server-provided
 * document OR will be a server-provided document PLUS acknowledged mutations:
 *
 *   RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a
 * server base version, since it has LocalMutations added to it pending getting
 * an authoritative copy from the server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to
 * revert a LocalMutation that has already been applied to the LocalDocument
 * (typically done by replaying all remaining LocalMutations to the
 * RemoteDocument to re-apply).
 *
 * The LocalStore is responsible for the garbage collection of the documents it
 * contains. For now, it every doc referenced by a view, the mutation queue, or
 * the RemoteStore.
 *
 * It also maintains the persistence of mapping queries to resume tokens and
 * target ids. It needs to know this data about queries to properly know what
 * docs it would be allowed to garbage collect.
 *
 * The LocalStore must be able to efficiently execute queries against its local
 * cache of the documents, to provide the initial set of results before any
 * remote changes have been received.
 *
 * Note: In TypeScript, most methods return Promises since the implementation
 * may rely on fetching data from IndexedDB which is async.
 * These Promises will only be rejected on an I/O error or other internal
 * (unexpected) failure (e.g. failed assert) and always represent an
 * unrecoverable error (should be caught / reported by the async_queue).
 */
var Ke = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.hh = e, 
        /**
             * The set of document references maintained by any local views.
             */
        this.oh = new Fe, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.ah = new C$1(Ue), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.uh = new Pe((function(t) {
            return t.canonicalId();
        })), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.lh = R$1.MIN, this.persistence.dh._h(this.oh), this.Hn = t.fh(n), this.wh = t.Th(), 
        this.mh = t.Eh(), this.Rh = new ze(this.wh, this.Hn, this.persistence.Ih()), this.hh.Ah(this.Rh)
        /** Starts the LocalStore. */;
    }
    return t.prototype.start = function() {
        return this.Ph();
    }, 
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    t.prototype.Vh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this.Hn, r = this.Rh, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(n) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var i;
                        return o.Hn.ph(n).next((function(s) {
                            return i = s, e = o.persistence.fh(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            r = new ze(o.wh, e, o.persistence.Ih()), e.ph(n);
                        })).next((function(t) {
                            for (var e = [], o = [], s = oe(), u = 0, a = i
                            // Union the old/new changed keys.
                            ; u < a.length; u++) {
                                var h = a[u];
                                e.push(h.batchId);
                                for (var c = 0, f = h.mutations; c < f.length; c++) {
                                    var l = f[c];
                                    s = s.add(l.key);
                                }
                            }
                            for (var p = 0, d = t; p < d.length; p++) {
                                var y = d[p];
                                o.push(y.batchId);
                                for (var v = 0, m = y.mutations; v < m.length; v++) {
                                    var g = m[v];
                                    s = s.add(g.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return r.sr(n, s).next((function(t) {
                                return {
                                    gh: t,
                                    yh: e,
                                    bh: o
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return i = n.sent(), [ 2 /*return*/ , (this.Hn = e, this.Rh = r, this.hh.Ah(this.Rh), 
                    i) ];
                }
            }));
        }));
    }, 
    /* Accept locally generated Mutations and commit them to storage. */ t.prototype.vh = function(t) {
        var e, n = this, r = S$1.now(), i = t.reduce((function(t, e) {
            return t.add(e.key);
        }), oe());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(o) {
            return n.Rh.sr(o, i).next((function(i) {
                e = i;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = t; u < a.length; u++) {
                    var h = a[u], c = h.ee(e.get(h.key));
                    null != c && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new bt(h.key, c, c.se(), gt.exists(!0)));
                }
                return n.Hn.Sh(o, r, s, t);
            }));
        })).then((function(t) {
            var n = t.Pn(e);
            return {
                batchId: t.batchId,
                Ch: n
            };
        }));
    }, 
    /** Returns the local view of the documents affected by a mutation batch. */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Dh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", (function(n) {
            return e.Hn.Fh(n, t).next((function(t) {
                return t ? e.Rh.sr(n, t) : Be.resolve(null);
            }));
        }));
    }, 
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    t.prototype.Nh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(n) {
            var r = t.batch.keys(), i = e.wh.kh({
                Lh: !0
            });
            return e.Hn.Nh(n, t.batch, t.streamToken).next((function() {
                return e.$h(n, t, i);
            })).next((function() {
                return i.apply(n);
            })).next((function() {
                return e.Hn.Oh(n);
            })).next((function() {
                return e.Rh.sr(n, r);
            }));
        }));
    }, 
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    t.prototype.Mh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(n) {
            var r;
            return e.Hn.Uh(n, t).next((function(t) {
                return Le(null !== t, "Attempt to reject nonexistent batch!"), r = t.keys(), e.Hn.qh(n, t);
            })).next((function() {
                return e.Hn.Oh(n);
            })).next((function() {
                return e.Rh.sr(n, r);
            }));
        }));
    }, 
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    t.prototype.Bh = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
            return t.Hn.Bh(e);
        }));
    }, 
    /** Returns the last recorded stream token for the current user. */ t.prototype.xh = function() {
        var t = this;
        return this.persistence.runTransaction("Get last stream token", "readonly", (function(e) {
            return t.Hn.xh(e);
        }));
    }, 
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    t.prototype.Qh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", (function(n) {
            return e.Hn.Qh(n, t);
        }));
    }, 
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    t.prototype.Wh = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
            return t.mh.Wh(e);
        }));
    }, 
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    t.prototype.jh = function(e) {
        var n = this, r = e.ts, i = this.ah;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(o) {
            var s = n.wh.kh({
                Lh: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        i = n.ah;
            var u = [];
            e.ws.forEach((function(e, s) {
                var a = i.get(s);
                if (a) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    u.push(n.mh.Gh(o, e.ps, s).next((function() {
                        return n.mh.zh(o, e.Ps, s);
                    })));
                    var h = e.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (h.Mt() > 0) {
                        var c = a.ss(h, r).es(o.Kh);
                        i = i.nt(s, c), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.Hh(a, c, e) && u.push(n.mh.Jh(o, c));
                    }
                }
            }));
            var a = Zt(), h = oe();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
                        if (e.ms.forEach((function(t, e) {
                h = h.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            u.push(s.getEntries(o, h).next((function(t) {
                e.ms.forEach((function(i, h) {
                    var c = t.get(i);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.MIN) never add documents to
                    // cache.
                                        h instanceof Rt && h.version.isEqual(R$1.MIN) ? (
                    // NoDocuments with SnapshotVersion.MIN are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.Yh(i, r), a = a.nt(i, h)) : null == c || h.version.C(c.version) > 0 || 0 === h.version.C(c.version) && c.hasPendingWrites ? (s.Xh(h, r), 
                    a = a.nt(i, h)) : Se("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", c.version, " Watch version:", h.version), 
                    e.Es.has(i) && u.push(n.persistence.dh.Zh(o, i));
                }));
            }))), !r.isEqual(R$1.MIN)) {
                var c = n.mh.Wh(o).next((function(t) {
                    return n.mh.to(o, o.Kh, r);
                }));
                u.push(c);
            }
            return Be.Gn(u).next((function() {
                return s.apply(o);
            })).next((function() {
                return n.Rh.ir(o, a);
            }));
        })).then((function(t) {
            return n.ah = i, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.Hh = function(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return Le(e.resumeToken.Mt() > 0, "Attempted to persist target data with no resume token"), 
        0 === t.resumeToken.Mt() || (e.ts.D() - t.ts.D() >= this.eo || n.Ps.size + n.Vs.size + n.ps.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, 
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    t.prototype.so = function(t) {
        for (var e = this, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.targetId;
            if (this.oh.Sn(i._r, o), this.oh.Fn(i.dr, o), !i.fromCache) {
                var s = this.ah.get(o), u = s.ts, a = s.ns(u);
                // Advance the last limbo free snapshot version
                                this.ah = this.ah.nt(o, a);
            }
        }
        return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(n) {
            return Be.forEach(t, (function(t) {
                return Be.forEach(t.dr, (function(t) {
                    return e.persistence.dh.Cn(n, t);
                }));
            }));
        }));
    }, 
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    t.prototype.io = function(t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(n) {
            return void 0 === t && (t = -1), e.Hn.no(n, t);
        }));
    }, 
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    t.prototype.ro = function(t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", (function(n) {
            return e.Rh.Yn(n, t);
        }));
    }, 
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    t.prototype.ho = function(t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(n) {
            var r;
            return e.mh.oo(n, t).next((function(i) {
                return i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                r = i, Be.resolve(r)) : e.mh.ao(n).next((function(i) {
                    return r = new Yt(t, i, 0 /* Listen */ , n.Kh), e.mh.uo(n, r).next((function() {
                        return r;
                    }));
                }));
            }));
        })).then((function(n) {
            return null === e.ah.get(n.targetId) && (e.ah = e.ah.nt(n.targetId, n), e.uh.set(t, n.targetId)), 
            n;
        }));
    }, 
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    t.prototype.oo = function(t, e) {
        var n = this.uh.get(e);
        return void 0 !== n ? Be.resolve(this.ah.get(n)) : this.mh.oo(t, e);
    }, 
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    t.prototype.co = function(t, e) {
        var n = this, r = this.ah.get(t), i = e ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", i, (function(i) {
            // References for documents sent via Watch are automatically removed
            // when we delete a target's data from the reference delegate.
            // Since this does not remove references for locally mutated documents,
            // we have to remove the target associations for these documents
            // manually.
            // This operation needs to be run inside the transaction since EagerGC
            // uses the local view references during the transaction's commit.
            // Fortunately, the operation is safe to be re-run in case the
            // transaction fails since there are no side effects if the target has
            // already been removed.
            var o = n.oh.Nn(t);
            return e ? Be.resolve() : Be.forEach(o, (function(t) {
                return n.persistence.dh.Cn(i, t);
            })).next((function() {
                n.persistence.dh.removeTarget(i, r);
            }));
        })).then((function() {
            n.ah = n.ah.remove(t), n.uh.delete(r.target);
        }));
    }, 
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    t.prototype.lo = function(t, e) {
        var n = this, r = R$1.MIN, i = oe();
        return this.persistence.runTransaction("Execute query", "readonly", (function(o) {
            return n.oo(o, t.Ue()).next((function(t) {
                if (t) return r = t.lastLimboFreeSnapshotVersion, n.mh._o(o, t.targetId).next((function(t) {
                    i = t;
                }));
            })).next((function() {
                return n.hh.rr(o, t, e ? r : R$1.MIN, e ? i : oe());
            })).next((function(t) {
                return {
                    documents: t,
                    do: i
                };
            }));
        }));
    }, 
    /**
     * Returns the keys of the documents that are associated with the given
     * target id in the remote table.
     */
    t.prototype.fo = function(t) {
        var e = this;
        return this.persistence.runTransaction("Remote document keys", "readonly", (function(n) {
            return e.mh._o(n, t);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.wo = function() {
        return this.persistence.wo();
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.To = function(t) {
        this.Hn.mo(t);
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Eo = function(t) {
        this.persistence.Eo(t);
    }, t.prototype.$h = function(t, e, n) {
        var r = this, i = e.batch, o = i.keys(), s = Be.resolve();
        return o.forEach((function(r) {
            s = s.next((function() {
                return n.tr(t, r);
            })).next((function(t) {
                var o = t, s = e.pn.get(r);
                Le(null !== s, "ackVersions should contain every doc in the write."), (!o || o.version.C(s) < 0) && ((o = i.Bt(r, o, e)) && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.Xh(o, e.Vn));
            }));
        })), s.next((function() {
            return r.Hn.qh(t, i);
        }));
    }, t.prototype.Ro = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.Io(n, e.ah);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ao = function(t) {
        var e = this, n = this.ah.get(t);
        return n ? Promise.resolve(n.target) : this.persistence.runTransaction("Get target data", "readonly", (function(n) {
            return e.mh.ui(n, t).next((function(t) {
                return t ? t.target : null;
            }));
        }));
    }, 
    /**
     * Returns the set of documents that have been updated since the last call.
     * If this is the first call, returns the set of changes since client
     * initialization. Further invocations will return document changes since
     * the point of rejection.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Po = function() {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly", (function(e) {
            return t.wh.Po(e, t.lh);
        })).then((function(e) {
            var n = e.Vo, r = e.readTime;
            return t.lh = r, n;
        }));
    }, 
    /**
     * Reads the newest document change from persistence and forwards the internal
     * synchronization marker so that calls to `getNewDocumentChanges()`
     * only return changes that happened after client initialization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ph = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return t = this, [ 4 /*yield*/ , this.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                        return e.wh.po(t);
                    })) ];

                  case 1:
                    return t.lh = n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}();

/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function Ze(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            if (t.code !== b.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t.message) throw t;
            return Se("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */ function $e(t, e) {
    if (0 !== e.length) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + mn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function tn(t, e, n) {
    if (e.length !== n) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires " + mn(n, "argument") + ", but was called with " + mn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function en(t, e, n) {
    if (e.length < n) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires at least " + mn(n, "argument") + ", but was called with " + mn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function nn(t, e, n, r) {
    if (e.length < n || e.length > r) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + mn(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function rn(t, e, n, r) {
    hn(t, e, vn(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function on(t, e, n, r) {
    void 0 !== r && rn(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function sn(t, e, n, r) {
    hn(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function un(t, e, n, r) {
    void 0 !== r && sn(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function an(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(fn(a));
        }
        var h = fn(r);
        throw new A$1(b.INVALID_ARGUMENT, "Invalid value " + h + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Arugment to validate.
 */
/** Helper to validate the type of a provided input. */ function hn(t, e, n, r) {
    if (!("object" === e ? cn(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = fn(r);
        throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function cn(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function fn(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : Ve("Unknown wrong type: " + typeof t);
}

function ln(t, e, n) {
    if (void 0 === n) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + vn(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function pn(t, e, n) {
    F$1(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new A$1(b.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function dn(t, e, n, r) {
    var i = fn(r);
    return new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + vn(n) + " argument to be a " + e + ", but it was: " + i);
}

function yn(t, e, n) {
    if (n <= 0) throw new A$1(b.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + vn(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function vn(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function mn(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */ function gn(t, e) {
    function n() {
        var t = "This constructor is private.";
        throw e && (t += " ", t += e), new A$1(b.INVALID_ARGUMENT, t);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return n.prototype = t.prototype, 
    // Copy any static methods/members
    Object.assign(n, t), n
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Helper function to assert Uint8Array is available at runtime. */;
}

function wn() {
    if ("undefined" == typeof Uint8Array) throw new A$1(b.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function En() {
    if (!Ie.Ot().yo) throw new A$1(b.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ Ke.eo = 3e8;

var bn = /** @class */ function() {
    function t(t) {
        En(), this.bo = t;
    }
    return t.fromBase64String = function(e) {
        tn("Blob.fromBase64String", arguments, 1), rn("Blob.fromBase64String", "string", 1, e), 
        En();
        try {
            return new t(B$1.fromBase64String(e));
        } catch (e) {
            throw new A$1(b.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (tn("Blob.fromUint8Array", arguments, 1), wn(), !(e instanceof Uint8Array)) throw dn("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(B$1.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return tn("Blob.toBase64", arguments, 0), En(), this.bo.toBase64();
    }, t.prototype.toUint8Array = function() {
        return tn("Blob.toUint8Array", arguments, 0), wn(), this.bo.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.bo.isEqual(t.bo);
    }, t;
}(), An = gn(bn, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), Nn = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        !function(t, e, n, r) {
            if (!(e instanceof Array) || e.length < 1) throw new A$1(b.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + mn(1, "element") + ".");
        }(0, t);
        for (var n = 0; n < t.length; ++n) if (rn("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new A$1(b.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.vo = new O$1(t);
    }
    return t.documentId = function() {
        return t.So;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw dn("isEqual", "FieldPath", 1, e);
        return this.vo.isEqual(e.vo);
    }, t;
}();

// Public instance that disallows construction at runtime. This constructor is
// used when exporting Blob on firebase.firestore.Blob and will be called Blob
// publicly. Internally we still use Blob which has a type checked private
// constructor. Note that Blob and PublicBlob can be used interchangeably in
// instanceof checks.
// For our internal TypeScript code PublicBlob doesn't exist as a type, and so
// we need to use Blob as type and export it too.
/**
 * Internal Note: The backend doesn't technically support querying by
 * document ID. Instead it queries by the entire document name (full path
 * included), but in the cases we currently support documentId(), the net
 * effect is the same.
 */
Nn.So = new Nn(O$1.X().G());

/**
 * Matches any characters in a field path string that are reserved.
 */
var In = new RegExp("[~\\*/\\[\\]]"), Tn = /** @class */ function() {
    function t(t) {
        this.Co = t;
    }
    return t.delete = function() {
        return $e("FieldValue.delete", arguments), _n.instance;
    }, t.serverTimestamp = function() {
        return $e("FieldValue.serverTimestamp", arguments), kn.instance;
    }, t.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return en("FieldValue.arrayUnion", arguments, 1), new Sn(t);
    }, t.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return en("FieldValue.arrayRemove", arguments, 1), new Rn(t);
    }, t.increment = function(t) {
        return rn("FieldValue.increment", "number", 1, t), tn("FieldValue.increment", arguments, 1), 
        new Dn(t);
    }, t.prototype.isEqual = function(t) {
        return this === t;
    }, t;
}(), _n = /** @class */ function(e) {
    function n() {
        return e.call(this, "FieldValue.delete") || this;
    }
    return __extends(n, e), n;
}(Tn);

/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
/** Singleton instance. */ _n.instance = new _n;

var kn = /** @class */ function(e) {
    function n() {
        return e.call(this, "FieldValue.serverTimestamp") || this;
    }
    return __extends(n, e), n;
}(Tn);

/** Singleton instance. */ kn.instance = new kn;

var Sn = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, "FieldValue.arrayUnion") || this).Do = t, n;
    }
    return __extends(n, e), n;
}(Tn), Rn = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, "FieldValue.arrayRemove") || this).Do = t, n;
    }
    return __extends(n, e), n;
}(Tn), Dn = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, "FieldValue.increment") || this).Fo = t, n;
    }
    return __extends(n, e), n;
}(Tn), Vn = gn(Tn, "Use FieldValue.<field>() instead."), Ln = /** @class */ function() {
    function t(t, e) {
        if (tn("GeoPoint", arguments, 2), rn("GeoPoint", "number", 1, t), rn("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new A$1(b.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new A$1(b.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.No = t, this.ko = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.No;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.ko;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.No === t.No && this.ko === t.ko;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.g = function(t) {
        return Ue(this.No, t.No) || Ue(this.ko, t.ko);
    }, t;
}(), On = /^__.*__$/, Un = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.se = e, this.fieldTransforms = n;
    }
    return t.prototype.Lo = function(t, e) {
        var n = [];
        return null !== this.se ? n.push(new bt(t, this.data, this.se, e)) : n.push(new Et(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new At(t, this.fieldTransforms)), n;
    }, t;
}(), Cn = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.se = e, this.fieldTransforms = n;
    }
    return t.prototype.Lo = function(t, e) {
        var n = [ new bt(t, this.data, this.se, e) ];
        return this.fieldTransforms.length > 0 && n.push(new At(t, this.fieldTransforms)), 
        n;
    }, t;
}();

function qn(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw Ve("Unexpected case for UserDataSource: " + t);
    }
}

/** A "context" object passed around while parsing user data. */ var Mn = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param dataSource Indicates what kind of API method this data came from.
     * @param methodName The name of the method the user called to create this
     *     ParseContext.
     * @param path A path within the object being parsed. This could be an empty
     *     path (in which case the context represents the root of the data being
     *     parsed), or a nonempty path (indicating the context represents a nested
     *     location within the data).
     * @param arrayElement Whether or not this context corresponds to an element
     *     of an array.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.$o = t, this.methodName = e, this.path = n, this.Oo = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.Mo(), this.Oo = void 0 !== r && r, this.fieldTransforms = i || [], 
        this.se = o || [];
    }
    return t.prototype.Uo = function(e) {
        var n = null == this.path ? null : this.path.child(e), r = new t(this.$o, this.methodName, n, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.se);
        return r.qo(e), r;
    }, t.prototype.Bo = function(e) {
        var n = null == this.path ? null : this.path.child(e), r = new t(this.$o, this.methodName, n, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.se);
        return r.Mo(), r;
    }, t.prototype.xo = function(e) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // null.
        return new t(this.$o, this.methodName, 
        /*path=*/ null, 
        /*arrayElement=*/ !0, this.fieldTransforms, this.se);
    }, t.prototype.Qo = function(t) {
        var e = null === this.path || this.path.q() ? "" : " (found in field " + this.path.toString() + ")";
        return new A$1(b.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.se.find((function(e) {
            return t.B(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.B(e.field);
        }));
    }, t.prototype.Mo = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (null !== this.path) for (var t = 0; t < this.path.length; t++) this.qo(this.path.get(t));
    }, t.prototype.qo = function(t) {
        if (0 === t.length) throw this.Qo("Document fields must not be empty");
        if (qn(this.$o) && On.test(t)) throw this.Qo('Document fields cannot begin and end with "__"');
    }, t;
}(), Pn = function(t, e) {
    this.ci = t, this.key = e;
}, xn = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.Wo = e
        /** Parse document data from a non-merge set() call. */;
    }
    return t.prototype.jo = function(t, e) {
        var n = new Mn(0 /* Set */ , t, O$1.H);
        Fn("Data must be an object, but it was:", n, e);
        var r = this.Go(e, n);
        return new Un(new Tt(r), 
        /* fieldMask= */ null, n.fieldTransforms);
    }, 
    /** Parse document data from a set() call with '{merge:true}'. */ t.prototype.zo = function(t, e, n) {
        var r = new Mn(2 /* MergeSet */ , t, O$1.H);
        Fn("Data must be an object, but it was:", r, e);
        var i, o, s = this.Go(e, r);
        if (n) {
            for (var u = new P$1(O$1.k), a = 0, h = n; a < h.length; a++) {
                var c = h[a], f = void 0;
                if (c instanceof Nn) f = c.vo; else {
                    if ("string" != typeof c) throw Ve("Expected stringOrFieldPath to be a string or a FieldPath");
                    f = Bn(t, c);
                }
                if (!r.contains(f)) throw new A$1(b.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                u = u.add(f);
            }
            i = yt.Gt(u), o = r.fieldTransforms.filter((function(t) {
                return i.Kt(t.field);
            }));
        } else i = yt.zt(r.se), o = r.fieldTransforms;
        return new Un(new Tt(s), i, o);
    }, 
    /** Parse update data from an update() call. */ t.prototype.Ko = function(t, e) {
        var n = this, r = new Mn(1 /* Update */ , t, O$1.H);
        Fn("Data must be an object, but it was:", r, e);
        var i = new P$1(O$1.k), o = Tt.le();
        F$1(e, (function(e, s) {
            var u = Bn(t, e), a = r.Bo(u);
            if ((s = n.Ho(s, a)) instanceof _n) 
            // Add it to the field mask, but don't add anything to updateData.
            i = i.add(u); else {
                var h = n.Jo(s, a);
                null != h && (i = i.add(u), o.set(u, h));
            }
        }));
        var s = yt.Gt(i);
        return new Cn(o.he(), s, r.fieldTransforms);
    }, 
    /** Parse update data from a list of field/value arguments. */ t.prototype.Yo = function(t, e, n, r) {
        var i = new Mn(1 /* Update */ , t, O$1.H), o = [ jn(t, e) ], s = [ n ];
        if (r.length % 2 != 0) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var u = 0; u < r.length; u += 2) o.push(jn(t, r[u])), s.push(r[u + 1]);
        for (var a = new P$1(O$1.k), h = Tt.le(), c = 0; c < o.length; ++c) {
            var f = o[c], l = i.Bo(f), p = this.Ho(s[c], l);
            if (p instanceof _n) 
            // Add it to the field mask, but don't add anything to updateData.
            a = a.add(f); else {
                var d = this.Jo(p, l);
                null != d && (a = a.add(f), h.set(f, d));
            }
        }
        var y = yt.Gt(a);
        return new Cn(h.he(), y, i.fieldTransforms);
    }, 
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    t.prototype.Xo = function(t, e, n) {
        void 0 === n && (n = !1);
        var r = new Mn(n ? 4 /* ArrayArgument */ : 3 /* Argument */ , t, O$1.H);
        return this.Jo(e, r);
    }, 
    /** Sends data through this.preConverter, handling any thrown errors. */ t.prototype.Ho = function(t, e) {
        try {
            return this.Wo(t);
        } catch (t) {
            var n = zn(t);
            throw e.Qo(n);
        }
    }, 
    /**
     * Internal helper for parsing user data.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */
    t.prototype.Jo = function(t, e) {
        if (Gn(t = this.Ho(t, e))) return Fn("Unsupported field value:", e, t), this.Go(t, e);
        if (t instanceof Tn) 
        // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.
        return this.Zo(t, e), null;
        if (
        // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        e.path && e.se.push(e.path), t instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (e.Oo && 4 /* ArrayArgument */ !== e.$o) throw e.Qo("Nested arrays are not supported");
            return this.ta(t, e);
        }
        return this.ea(t, e);
    }, t.prototype.Go = function(t, e) {
        var n = this, r = {};
        return j(t) ? 
        // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        e.path && e.path.length > 0 && e.se.push(e.path) : F$1(t, (function(t, i) {
            var o = n.Jo(i, e.Uo(t));
            null != o && (r[t] = o);
        })), {
            mapValue: {
                fields: r
            }
        };
    }, t.prototype.ta = function(t, e) {
        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
            var s = o[i], u = this.Jo(s, e.xo(r));
            null == u && (
            // Just include nulls in the array for fields being replaced with a
            // sentinel.
            u = {
                nullValue: "NULL_VALUE"
            }), n.push(u), r++;
        }
        return {
            arrayValue: {
                values: n
            }
        };
    }, 
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    t.prototype.Zo = function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!qn(e.$o)) throw e.Qo(t.Co + "() can only be used with update() and set()");
        if (null === e.path) throw e.Qo(t.Co + "() is not currently supported inside arrays");
        if (t instanceof _n) {
            if (2 /* MergeSet */ !== e.$o) throw 1 /* Update */ === e.$o ? e.Qo("FieldValue.delete() can only appear at the top level of your update data") : e.Qo("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
                        e.se.push(e.path);
        } else if (t instanceof kn) e.fieldTransforms.push(new vt(e.path, ct.instance)); else if (t instanceof Sn) {
            var n = this.sa(t.Co, t.Do), r = new ft(n);
            e.fieldTransforms.push(new vt(e.path, r));
        } else if (t instanceof Rn) {
            var i = this.sa(t.Co, t.Do), o = new lt(i);
            e.fieldTransforms.push(new vt(e.path, o));
        } else if (t instanceof Dn) {
            var s = this.Xo("FieldValue.increment", t.Fo), u = new pt(this.serializer, s);
            e.fieldTransforms.push(new vt(e.path, u));
        } else Ve("Unknown FieldValue type: " + t);
    }, 
    /**
     * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
     *
     * @return The parsed value
     */
    t.prototype.ea = function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return this.serializer.wi(t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = S$1.fromDate(t);
            return {
                timestampValue: this.serializer.F(n)
            };
        }
        if (t instanceof S$1) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new S$1(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: this.serializer.F(r)
            };
        }
        if (t instanceof Ln) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof bn) return {
            bytesValue: this.serializer.Ti(t)
        };
        if (t instanceof Pn) return {
            referenceValue: this.serializer.Ei(t.key.path, t.ci)
        };
        throw e.Qo("Unsupported field value: " + fn(t));
    }, t.prototype.sa = function(t, e) {
        var n = this;
        return e.map((function(e, r) {
            // Although array transforms are used with writes, the actual elements
            // being unioned or removed are not considered writes since they cannot
            // contain any FieldValue sentinels, etc.
            var i = new Mn(3 /* Argument */ , t, O$1.H);
            return n.Jo(e, i.xo(r));
        }));
    }, t;
}();

/**
 * A placeholder object for DocumentReferences in this file, in order to
 * avoid a circular dependency. See the comments for `DataPreConverter` for
 * the full context.
 */
/**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */
function Gn(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof S$1 || t instanceof Ln || t instanceof bn || t instanceof Pn || t instanceof Tn);
}

function Fn(t, e, n) {
    if (!Gn(n) || !cn(n)) {
        var r = fn(n);
        throw "an object" === r ? e.Qo(t + " a custom object") : e.Qo(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function jn(t, e) {
    if (e instanceof Nn) return e.vo;
    if ("string" == typeof e) return Bn(t, e);
    throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */ function Bn(t, e) {
    try {
        return function(t) {
            if (t.search(In) >= 0) throw new A$1(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (Nn.bind.apply(Nn, __spreadArrays([ void 0 ], t.split("."))));
            } catch (e) {
                throw new A$1(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(e).vo;
    } catch (e) {
        var n = zn(e);
        throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n);
    }
}

/**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */ function zn(t) {
    return t instanceof Error ? t.message : t.toString();
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ var Qn = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.ia = t, this.Pr = e, this.na = n, this.ra = r, this.ha = i, this.oa = 0, this.aa = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.ua = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.oa = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.ca = function() {
        this.oa = this.ha;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.la = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.oa + this._a()), r = Math.max(0, Date.now() - this.ua), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                this.oa > 0 && Se("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.oa + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.aa = this.ia.Qr(this.Pr, i, (function() {
            return e.ua = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.oa *= this.ra, this.oa < this.na && (this.oa = this.na), this.oa > this.ha && (this.oa = this.ha);
    }, t.prototype.cancel = function() {
        null !== this.aa && (this.aa.cancel(), this.aa = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype._a = function() {
        return (Math.random() - .5) * this.oa;
    }, t;
}(), Hn = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.ia = t, this.da = n, this.fa = r, this.wa = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.Ta = 0, this.ma = null, this.stream = null, this.Ea = new Qn(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.Ra = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.Ia = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.Aa();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Ra() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.Pa = function() {
        this.state = 0 /* Initial */ , this.Ea.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.Va = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.Ia() && null === this.ma && (this.ma = this.ia.Qr(this.da, 6e4, (function() {
            return t.pa();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.ga = function(t) {
        this.ya(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.pa = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.Ia() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.ya = function() {
        this.ma && (this.ma.cancel(), this.ma = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.ya(), this.Ea.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Ta++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.Ea.reset() : r && r.code === b.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    Re(r.toString()), Re("Using maximum backoff delay to prevent overloading the backend."), 
                    this.Ea.ca()) : r && r.code === b.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.wa.l(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.ba(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.va(r) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.ba = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Sa(this.Ta), n = this.Ta;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.wa.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Ta === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Ca(e);
        }), (function(n) {
            e((function() {
                var e = new A$1(b.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.Da(e);
            }));
        }));
    }, t.prototype.Ca = function(t) {
        var e = this, n = this.Sa(this.Ta);
        this.stream = this.Fa(t), this.stream.Na((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Na();
            }));
        })), this.stream.va((function(t) {
            n((function() {
                return e.Da(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.Aa = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.Ea.la((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.Da = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return Se("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Sa = function(t) {
        var e = this;
        return function(n) {
            e.ia.Cr((function() {
                return e.Ta === t ? n() : (Se("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Yn = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return __extends(n, e), n.prototype.Fa = function(t) {
        return this.fa.ka("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.Ea.reset();
        var e = this.serializer.Fi(t), n = this.serializer.ki(t);
        return this.listener.La(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.$a = function(t) {
        var e = {};
        e.database = this.serializer.gi, e.addTarget = this.serializer.Ue(t);
        var n = this.serializer.en(t);
        n && (e.labels = n), this.ga(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.Oa = function(t) {
        var e = {};
        e.database = this.serializer.gi, e.removeTarget = t, this.ga(e);
    }, n;
}(Hn), Wn = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.Ma = !1, 
        /**
             * The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             *
             * PersistentWriteStream manages propagating this value from responses to the
             * next request.
             */
        s.lastStreamToken = B$1.Ut, s;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "Ua", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.Ma;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.Ma = !1, e.prototype.start.call(this);
    }, n.prototype.ba = function() {
        this.Ma && this.qa([]);
    }, n.prototype.Fa = function(t) {
        return this.fa.ka("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        Le(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = this.serializer.mi(t.streamToken), 
        this.Ma) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Ea.reset();
            var e = this.serializer.Wi(t.writeResults, t.commitTime), n = this.serializer.fromVersion(t.commitTime);
            return this.listener.Ba(n, e);
        }
        // The first response is always the handshake response
                return Le(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), 
        this.Ma = !0, this.listener.xa();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.Qa = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.gi, this.ga(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.qa = function(t) {
        var e = this, n = {
            streamToken: this.serializer.Ti(this.lastStreamToken),
            writes: t.map((function(t) {
                return e.serializer.Li(t);
            }))
        };
        this.ga(n);
    }, n;
}(Hn), Jn = /** @class */ function() {
    function t(t, e, n, r) {
        this.ia = t, this.fa = e, this.credentials = n, this.serializer = r;
    }
    return t.prototype.Wa = function(t) {
        return new Wn(this.ia, this.fa, this.credentials, this.serializer, t);
    }, t.prototype.ja = function(t) {
        return new Yn(this.ia, this.fa, this.credentials, this.serializer, t);
    }, t.prototype.commit = function(t) {
        var e = this, n = {
            database: this.serializer.gi,
            writes: t.map((function(t) {
                return e.serializer.Li(t);
            }))
        };
        return this.Ga("Commit", n).then((function(t) {
            return e.serializer.Wi(t.writeResults, t.commitTime);
        }));
    }, t.prototype.za = function(t) {
        var e = this, n = {
            database: this.serializer.gi,
            documents: t.map((function(t) {
                return e.serializer.Ai(t);
            }))
        };
        return this.Ka("BatchGetDocuments", n).then((function(n) {
            var r = Zt();
            n.forEach((function(t) {
                var n = e.serializer.Di(t);
                r = r.nt(n.key, n);
            }));
            var i = [];
            return t.forEach((function(t) {
                var e = r.get(t);
                Le(!!e, "Missing entity in write response for " + t), i.push(e);
            })), i;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC. */ t.prototype.Ga = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.fa.Ga(t, e, r);
        })).catch((function(t) {
            throw t.code === b.UNAUTHENTICATED && n.credentials.l(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ t.prototype.Ka = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.fa.Ka(t, e, r);
        })).catch((function(t) {
            throw t.code === b.UNAUTHENTICATED && n.credentials.l(), t;
        }));
    }, t;
}(), Xn = /** @class */ function() {
    function t(t) {
        this.Ha = t, 
        // The version of each document that was read during this transaction.
        this.Ja = re(), this.mutations = [], this.Ya = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Xa = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.Za = new Set;
    }
    return t.prototype.za = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.tu(), this.mutations.length > 0) throw new A$1(b.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , this.Ha.za(t) ];

                  case 1:
                    return [ 2 /*return*/ , ((e = n.sent()).forEach((function(t) {
                        t instanceof Rt || t instanceof St ? r.eu(t) : Ve("Document in a transaction was a " + t.constructor.name);
                    })), e) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.Lo(t, this.Zt(t))), this.Za.add(t);
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.Lo(t, this.su(t)));
        } catch (t) {
            this.Xa = t;
        }
        this.Za.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new Nt(t, this.Zt(t)) ]), this.Za.add(t);
    }, t.prototype.commit = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.tu(), this.Xa) throw this.Xa;
                    return t = this.Ja, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t = t.remove(e.key);
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, n) {
                        e.mutations.push(new It(t, e.Zt(t)));
                    })), [ 4 /*yield*/ , this.Ha.commit(this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return n.sent(), this.Ya = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.eu = function(t) {
        var e;
        if (t instanceof St) e = t.version; else {
            if (!(t instanceof Rt)) throw Ve("Document in a transaction was a " + t.constructor.name);
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = R$1.S();
        }
        var n = this.Ja.get(t.key);
        if (null !== n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new A$1(b.ABORTED, "Document version changed between two reads.");
        } else this.Ja = this.Ja.nt(t.key, e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Zt = function(t) {
        var e = this.Ja.get(t);
        return !this.Za.has(t) && e ? gt.updateTime(e) : gt.NONE;
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.su = function(t) {
        var e = this.Ja.get(t);
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.Za.has(t) && e) {
            if (e.isEqual(R$1.S())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new A$1(b.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return gt.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return gt.exists(!0);
    }, t.prototype.write = function(t) {
        this.tu(), this.mutations = this.mutations.concat(t);
    }, t.prototype.tu = function() {}, t;
}(), Kn = /** @class */ function() {
    function t(t, e) {
        this.Ar = t, this.iu = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.nu = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.ru = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.hu = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.ou = function() {
        var t = this;
        0 === this.nu && (this.au("Unknown" /* Unknown */), this.ru = this.Ar.Qr("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.ru = null, t.uu("Backend didn't respond within 10 seconds."), t.au("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.cu = function(t) {
        "Online" /* Online */ === this.state ? this.au("Unknown" /* Unknown */) : (this.nu++, 
        this.nu >= 1 && (this.lu(), this.uu("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.au("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.lu(), this.nu = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.hu = !1), this.au(t);
    }, t.prototype.au = function(t) {
        t !== this.state && (this.state = t, this.iu(t));
    }, t.prototype.uu = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.hu ? (Re(e), this.hu = !1) : Se("OnlineStateTracker", e);
    }, t.prototype.lu = function() {
        null !== this.ru && (this.ru.cancel(), this.ru = null);
    }, t;
}(), Zn = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    r, i, o, s) {
        var u = this;
        this._u = t, this.Ha = r, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.du = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.fu = new Map, this.wu = null, 
        /**
             * Set to true by enableNetwork() and false by disableNetwork() and indicates
             * the user-preferred network state.
             */
        this.networkEnabled = !1, this.isPrimary = !1, this.Tu = s, this.Tu.mu((function(t) {
            i.Cr((function() {
                return __awaiter(u, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.Eu() ? (Se("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.Ru() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.Iu = new Kn(i, o), 
        // Create streams (but note they're not started yet).
        this.Au = this.Ha.ja({
            Na: this.Pu.bind(this),
            va: this.Vu.bind(this),
            La: this.pu.bind(this)
        }), this.gu = this.Ha.Wa({
            Na: this.yu.bind(this),
            va: this.bu.bind(this),
            xa: this.vu.bind(this),
            Ba: this.Ba.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.networkEnabled = !0, this.Eu() ? (t = this.gu, [ 4 /*yield*/ , this._u.xh() ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return t.lastStreamToken = e.sent(), this.Su() ? this.Cu() : this.Iu.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.Du() ];

                  case 2:
                    // This will start the write stream if necessary.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Fu() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.Iu.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Fu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.gu.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.Au.stop() ];

                  case 2:
                    return t.sent(), this.du.length > 0 && (Se("RemoteStore", "Stopping write stream with " + this.du.length + " pending writes"), 
                    this.du = []), this.Nu(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ku = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return Se("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, 
                    [ 4 /*yield*/ , this.Fu() ];

                  case 1:
                    return t.sent(), this.Tu.ku(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.Iu.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.fu.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.fu.set(t.targetId, t), this.Su() ? 
        // The listen will be sent in onWatchStreamOpen
        this.Cu() : this.Au.Ia() && this.Lu(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.$u = function(t) {
        this.fu.delete(t), this.Au.Ia() && this.Ou(t), 0 === this.fu.size && (this.Au.Ia() ? this.Au.Va() : this.Eu() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.Iu.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.ui = function(t) {
        return this.fu.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.ai = function(t) {
        return this.Mu.ai(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.Lu = function(t) {
        this.wu.qs(t.targetId), this.Au.$a(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.Ou = function(t) {
        this.wu.qs(t), this.Au.Oa(t);
    }, t.prototype.Cu = function() {
        this.wu = new me(this), this.Au.start(), this.Iu.ou();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.Su = function() {
        return this.Eu() && !this.Au.Ra() && this.fu.size > 0;
    }, t.prototype.Eu = function() {
        return this.isPrimary && this.networkEnabled;
    }, t.prototype.Nu = function() {
        this.wu = null;
    }, t.prototype.Pu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t = this;
            return __generator(this, (function(e) {
                return this.fu.forEach((function(e, n) {
                    t.Lu(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Vu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return this.Nu(), 
                // If we still need the watch stream, retry the connection.
                this.Su() ? (this.Iu.cu(t), this.Cu()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.Iu.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.pu = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Mark the client as online since we got a message from the server
                    return this.Iu.set("Online" /* Online */), t instanceof ye && 2 /* Removed */ === t.state && t.cause ? [ 2 /*return*/ , this.Uu(t) ] : (t instanceof pe ? this.wu.Ks(t) : t instanceof de ? this.wu.si(t) : this.wu.Ys(t), 
                    r.isEqual(R$1.MIN) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this._u.Wh() ]);

                  case 1:
                    return e = n.sent(), r.C(e) >= 0 ? [ 4 /*yield*/ , this.qu(r) ] : [ 3 /*break*/ , 3 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                                      case 2:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                    n.sent(), n.label = 3;

                  case 3:
                    n.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.qu = function(t) {
        var e = this, n = this.wu.ri(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.ws.forEach((function(n, r) {
            if (n.resumeToken.Mt() > 0) {
                var i = e.fu.get(r);
                // A watched target might have been removed already.
                                i && e.fu.set(r, i.ss(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.Ts.forEach((function(t) {
            var n = e.fu.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.fu.set(t, n.ss(B$1.Ut, n.ts)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.Ou(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new Yt(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.Lu(r);
            }
        })), this.Mu.jh(n);
    }, 
    /** Handles an error on a target */ t.prototype.Uu = function(t) {
        var r = this, i = t.cause, o = Promise.resolve();
        return t.targetIds.forEach((function(t) {
            o = o.then((function() {
                return __awaiter(r, void 0, void 0, (function() {
                    return __generator(this, (function(e) {
                        // A watched target might have been removed already.
                        return this.fu.has(t) ? [ 2 /*return*/ , (this.fu.delete(t), this.wu.removeTarget(t), 
                        this.Mu.Bu(t, i)) ] : [ 2 /*return*/ ];
                    }));
                }));
            }));
        })), o;
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.Du = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.xu() ? (t = this.du.length > 0 ? this.du[this.du.length - 1].batchId : -1, 
                    [ 4 /*yield*/ , this._u.io(t) ]) : [ 3 /*break*/ , 5 ];

                  case 1:
                    return null !== (e = n.sent()) ? [ 3 /*break*/ , 2 ] : (0 === this.du.length && this.gu.Va(), 
                    [ 3 /*break*/ , 4 ]);

                  case 2:
                    return this.Qu(e), [ 4 /*yield*/ , this.Du() ];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    n.label = 5;

                  case 5:
                    return this.Wu() && this.ju(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.xu = function() {
        return this.Eu() && this.du.length < 10;
    }, 
    // For testing
    t.prototype.Gu = function() {
        return this.du.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.Qu = function(t) {
        this.du.push(t), this.gu.Ia() && this.gu.Ua && this.gu.qa(t.mutations);
    }, t.prototype.Wu = function() {
        return this.Eu() && !this.gu.Ra() && this.du.length > 0;
    }, t.prototype.ju = function() {
        this.gu.start();
    }, t.prototype.yu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.gu.Qa(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.vu = function() {
        var t = this;
        // Record the stream token.
                return this._u.Qh(this.gu.lastStreamToken).then((function() {
            // Send the write pipeline now that the stream is established.
            for (var e = 0, n = t.du; e < n.length; e++) {
                var r = n[e];
                t.gu.qa(r.mutations);
            }
        })).catch(Ze);
    }, t.prototype.Ba = function(t, e) {
        var n = this, r = this.du.shift(), i = Ge.from(r, t, e, this.gu.lastStreamToken);
        return this.Mu.zu(i).then((function() {
            return n.Du();
        }));
    }, t.prototype.bu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r = this;
            return __generator(this, (function(n) {
                // If the write stream closed due to an error, invoke the error callbacks if
                // there are pending writes.
                return t && this.du.length > 0 ? [ 2 /*return*/ , (e = this.gu.Ua ? this.Ku(t) : this.Hu(t), 
                e.then((function() {
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    r.Wu() && r.ju();
                }))) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Hu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                // Reset the token if it's a permanent error, signaling the write stream is
                // no longer valid. Note that the handshake does not count as a write: see
                // comments on isPermanentWriteError for details.
                return Jt(t.code) ? [ 2 /*return*/ , (Se("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.gu.lastStreamToken), 
                this.gu.lastStreamToken = B$1.Ut, this._u.Qh(B$1.Ut).catch(Ze)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Ku = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                // Only handle permanent errors here. If it's transient, just let the retry
                // logic kick in.
                return Jt(r = t.code) && r !== b.ABORTED ? (e = this.du.shift(), [ 2 /*return*/ , (this.gu.Pa(), 
                this.Mu.Ju(e.batchId, t).then((function() {
                    return i.Du();
                }))) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Yu = function() {
        return new Xn(this.Ha);
    }, t.prototype.Ru = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Fu() ];

                  case 1:
                    return t.sent(), this.Iu.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.enableNetwork() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Xu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Eu() ? (
                    // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                    // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                    // (since mutations are per-user).
                    Se("RemoteStore", "RemoteStore restarting streams for new credential"), [ 4 /*yield*/ , this.Ru() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.Zu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.isPrimary = t, t && this.networkEnabled ? [ 4 /*yield*/ , this.enableNetwork() ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (e = t) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.Fu() ];

                  case 3:
                    n.sent(), e = this.Iu.set("Unknown" /* Unknown */), n.label = 4;

                  case 4:
                    n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), $n = /** @class */ function() {
    function t() {
        this.activeTargetIds = ue();
    }
    return t.prototype.tc = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.ec = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.sc = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.j(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), tr = /** @class */ function() {
    function t() {
        this.ic = new $n, this.nc = {}, this.Mu = null, this.iu = null, this.Tr = null;
    }
    return t.prototype.rc = function(t) {
        // No op.
    }, t.prototype.hc = function(t, e, n) {
        // No op.
    }, t.prototype.oc = function(t) {
        return this.ic.tc(t), this.nc[t] || "not-current";
    }, t.prototype.ac = function(t, e, n) {
        this.nc[t] = e;
    }, t.prototype.uc = function(t) {
        this.ic.ec(t);
    }, t.prototype.cc = function(t) {
        return this.ic.activeTargetIds.has(t);
    }, t.prototype.lc = function(t) {
        delete this.nc[t];
    }, t.prototype._c = function() {
        return this.ic.activeTargetIds;
    }, t.prototype.dc = function(t) {
        return this.ic.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.ic = new $n, Promise.resolve();
    }, t.prototype.Vh = function(t, e, n) {
        // No op.
    }, t.prototype.fc = function(t) {
        // No op.
    }, t.prototype.ku = function() {}, t.prototype.Rr = function(t) {}, t;
}(), er = /** @class */ function() {
    function t(t) {
        this.wc = t;
    }
    return t.prototype.next = function() {
        return this.wc += 2, this.wc;
    }, t.Tc = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.mc = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), nr = function(t) {
    this.key = t;
}, rr = function(t) {
    this.key = t;
}, ir = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.Ec = e, this.Rc = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.As = !1, 
        /** Documents in the view but not in the remote target */
        this.Ic = oe(), 
        /** Document Keys that have local changes */
        this.ls = oe(), this.Ac = new ae(t.qe.bind(t));
    }
    return Object.defineProperty(t.prototype, "Pc", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.Ec;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.Vc = function(t, e) {
        var n = this, r = e ? e.pc : new he, i = e ? e.Ac : this.Ac, o = e ? e.ls : this.ls, s = i, u = !1, a = this.query.je() && i.size === this.query.limit ? i.last() : null, h = this.query.Ge() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ut((function(t, e) {
            var c = i.get(t), f = e instanceof St ? e : null;
            f && (f = n.query.matches(f) ? f : null);
            var l = !!c && n.ls.has(c.key), p = !!f && (f.te || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.ls.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            c && f ? c.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.gc(c, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.query.qe(f, a) > 0 || h && n.query.qe(f, h) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !c && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : c && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: c
            }), d = !0, (a || h) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.je() || this.query.Ge()) for (;s.size > this.query.limit; ) {
            var c = this.query.je() ? s.last() : s.first();
            s = s.delete(c.key), o = o.delete(c.key), r.track({
                type: 1 /* Removed */ ,
                doc: c
            });
        }
        return {
            Ac: s,
            pc: r,
            yc: u,
            ls: o
        };
    }, t.prototype.gc = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.te && e.hasCommittedMutations && !e.te;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.bc = function(t, e, n) {
        var r = this, i = this.Ac;
        this.Ac = t.Ac, this.ls = t.ls;
        // Sort changes based on type and query comparator
        var o = t.pc.us();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return Ve("Unknown ChangeType: " + t);
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.query.qe(t.doc, e.doc);
        })), this.vc(n);
        var s = e ? this.Sc() : [], u = 0 === this.Ic.size && this.As ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.Rc;
        return this.Rc = u, 0 !== o.length || a ? {
            snapshot: new ce(this.query, t.Ac, i, o, t.ls, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            Cc: s
        } : {
            Cc: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Dc = function(t) {
        return this.As && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.As = !1, this.bc({
            Ac: this.Ac,
            pc: new he,
            ls: this.ls,
            yc: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Cc: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Fc = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Ec.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.Ac.has(t) && !this.Ac.get(t).te;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.vc = function(t) {
        var e = this;
        t && (t.Ps.forEach((function(t) {
            return e.Ec = e.Ec.add(t);
        })), t.Vs.forEach((function(t) {})), t.ps.forEach((function(t) {
            return e.Ec = e.Ec.delete(t);
        })), this.As = t.As);
    }, t.prototype.Sc = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.As) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.Ic;
        this.Ic = oe(), this.Ac.forEach((function(e) {
            t.Fc(e.key) && (t.Ic = t.Ic.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.Ic.has(e) || n.push(new rr(e));
        })), this.Ic.forEach((function(t) {
            e.has(t) || n.push(new nr(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Nc = function(t) {
        this.Ec = t.do, this.Ic = oe();
        var e = this.Vc(t.documents);
        return this.bc(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.kc = function() {
        return ce.fs(this.query, this.Ac, this.ls, 0 /* Local */ === this.Rc);
    }, t;
}(), or = /** @class */ function() {
    function t(t, e, n, r) {
        this.Ar = t, this.Lc = e, this.updateFunction = n, this.gr = r, this.$c = 5, this.Ea = new Qn(this.Ar, "retry_transaction" /* RetryTransaction */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.Oc = function() {
        this.Mc();
    }, t.prototype.Mc = function() {
        var t = this;
        this.Ea.la((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, e, r = this;
                return __generator(this, (function(n) {
                    return t = this.Lc.Yu(), (e = this.Uc(t)) && e.then((function(e) {
                        r.Ar.Cr((function() {
                            return t.commit().then((function() {
                                r.gr.resolve(e);
                            })).catch((function(t) {
                                r.qc(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.qc(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.Uc = function(t) {
        try {
            var e = this.updateFunction(t);
            return !z$1(e) && e.catch && e.then ? e : (this.gr.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.gr.reject(t), null;
        }
    }, t.prototype.qc = function(t) {
        var e = this;
        this.$c > 0 && this.Bc(t) ? (this.$c -= 1, this.Ar.Cr((function() {
            return e.Mc(), Promise.resolve();
        }))) : this.gr.reject(t);
    }, t.prototype.Bc = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !Jt(e);
        }
        return !1;
    }, t;
}(), sr = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, ur = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.xc = !1;
}, ar = /** @class */ function() {
    function t(t, e, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    n, r, i) {
        this._u = t, this.Lc = e, this.Qc = n, this.currentUser = r, this.Wc = i, this.jc = null, 
        this.Gc = new Pe((function(t) {
            return t.canonicalId();
        })), this.zc = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.Kc = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Hc = new C$1(U$1.k), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Jc = new Map, this.Yc = new Fe, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Xc = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Zc = new Map, this.tl = er.mc(), 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.isPrimary = void 0, this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "el", {
        // Only used for testing.
        get: function() {
            return !0 === this.isPrimary;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */ t.prototype.subscribe = function(t) {
        this.jc = t;
    }, 
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the targetId of the query.
     */
    t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.sl("listen()"), (i = this.Gc.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    e = i.targetId, this.Qc.oc(e), r = i.view.kc(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this._u.ho(t.Ue()) ];

                  case 2:
                    return o = n.sent(), s = this.Qc.oc(o.targetId), e = o.targetId, [ 4 /*yield*/ , this.il(t, e, "current" === s) ];

                  case 3:
                    r = n.sent(), this.isPrimary && this.Lc.listen(o), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ , (this.jc.La([ r ]), e) ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.il = function(t, r, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, o, s, u, a, h;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this._u.lo(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = n.sent(), o = new ir(t, e.do), s = o.Vc(e.documents), u = le.Is(r, i && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.bc(s, 
                    /* updateLimboDocuments= */ !0 === this.isPrimary, u), h = new sr(t, r, o), [ 2 /*return*/ , (this.Gc.set(t, h), 
                    this.zc.has(r) ? this.zc.get(r).push(t) : this.zc.set(r, [ t ]), a.snapshot) ];
                }
            }));
        }));
    }, 
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.nl = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this._u.lo(t.query, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = n.sent(), r = t.view.Nc(e), [ 2 /*return*/ , (this.isPrimary && this.rl(t.targetId, r.Cc), 
                    r) ];
                }
            }));
        }));
    }, 
    /** Stops listening to the query. */ t.prototype.$u = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this.sl("unlisten()"), e = this.Gc.get(t), (r = this.zc.get(e.targetId)).length > 1 ? [ 2 /*return*/ , (this.zc.set(e.targetId, r.filter((function(e) {
                        return !e.isEqual(t);
                    }))), void this.Gc.delete(t)) ] : this.isPrimary ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.Qc.uc(e.targetId), this.Qc.dc(e.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this._u.co(e.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        i.Qc.lc(e.targetId), i.Lc.$u(e.targetId), i.hl(e.targetId);
                    })).catch(Ze) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.hl(e.targetId), [ 4 /*yield*/ , this._u.co(e.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    n.sent(), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    t.prototype.write = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.sl("write()"), [ 4 /*yield*/ , this._u.vh(t) ];

                  case 1:
                    return e = n.sent(), this.Qc.rc(e.batchId), this.ol(e.batchId, r), [ 4 /*yield*/ , this.al(e.Ch) ];

                  case 2:
                    return n.sent(), [ 4 /*yield*/ , this.Lc.Du() ];

                  case 3:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    t.prototype.runTransaction = function(t, e, n) {
        new or(t, this.Lc, e, n).Oc();
    }, t.prototype.jh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.sl("applyRemoteEvent()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this._u.jh(t) ];

                  case 2:
                    return e = n.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.ws.forEach((function(t, e) {
                        var n = r.Jc.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        Le(t.Ps.size + t.Vs.size + t.ps.size <= 1, "Limbo resolution for single document contains multiple changes."), 
                        t.Ps.size > 0 ? n.xc = !0 : t.Vs.size > 0 ? Le(n.xc, "Received change for limbo target document without add.") : t.ps.size > 0 && (Le(n.xc, "Received remove for limbo target document without add."), 
                        n.xc = !1));
                    })), [ 4 /*yield*/ , this.al(e, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Ze(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    t.prototype.Dc = function(t, e) {
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        if (this.isPrimary && 0 /* RemoteStore */ === e || !this.isPrimary && 1 /* SharedClientState */ === e) {
            this.sl("applyOnlineStateChange()");
            var n = [];
            this.Gc.forEach((function(e, r) {
                var i = r.view.Dc(t);
                i.snapshot && n.push(i.snapshot);
            })), this.jc.ul(t), this.jc.La(n), this.onlineState = t, this.isPrimary && this.Qc.fc(t);
        }
    }, t.prototype.Bu = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s, u, a = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.sl("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.Qc.ac(t, "rejected", r), e = this.Jc.get(t), (i = e && e.key) ? (
                    // Since this query failed, we won't want to manually unlisten to it.
                    // So go ahead and remove it from bookkeeping.
                    this.Hc = this.Hc.remove(i), this.Jc.delete(t), this.cl(), o = (o = new C$1(U$1.k)).nt(i, new Rt(i, R$1.S())), 
                    s = oe().add(i), u = new fe(R$1.MIN, 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new P$1(Ue), o, s), [ 2 /*return*/ , this.jh(u) ]) : [ 4 /*yield*/ , this._u.co(t, /* keepPersistedTargetData */ !1).then((function() {
                        return a.hl(t, r);
                    })).catch(Ze) ];

                  case 1:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.ll = function(t, r, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.sl("applyBatchState()"), [ 4 /*yield*/ , this._u.Dh(t) ];

                  case 1:
                    return null === (e = n.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== r ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.Lc.Du() ];

                  case 2:
                    // If we are the primary client, we need to send this write to the
                    // backend. Secondary clients will ignore these writes since their remote
                    // connection is disabled.
                    return n.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    "acknowledged" === r || "rejected" === r ? (
                    // NOTE: Both these methods are no-ops for batches that originated from
                    // other clients.
                    this._l(t, i || null), this._u.To(t)) : Ve("Unknown batchState: " + r), n.label = 4;

                  case 4:
                    return [ 4 /*yield*/ , this.al(e) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 7 ];

                  case 6:
                    // A throttled tab may not have seen the mutation before it was completed
                    // and removed from the mutation queue, in which case we won't have cached
                    // the affected documents. In this case we can safely ignore the update
                    // since that means we didn't apply the mutation locally at all (if we
                    // had, we would have cached the affected documents), and so we will just
                    // see any resulting document changes via normal remote document updates
                    // as applicable.
                    Se("SyncEngine", "Cannot apply mutation batch with id: " + t), n.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.zu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.sl("applySuccessfulWrite()"), e = t.batch.batchId, 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this._l(e, /*error=*/ null), this.dl(e), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this._u.Nh(t) ];

                  case 2:
                    return r = n.sent(), this.Qc.hc(e, "acknowledged"), [ 4 /*yield*/ , this.al(r) ];

                  case 3:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Ze(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Ju = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.sl("rejectFailedWrite()"), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this._l(t, r), this.dl(t), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this._u.Mh(t) ];

                  case 2:
                    return e = n.sent(), this.Qc.hc(t, "rejected", r), [ 4 /*yield*/ , this.al(e) ];

                  case 3:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Ze(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    t.prototype.fl = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Lc.Eu() || Se("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    [ 4 /*yield*/ , this._u.Bh() ];

                  case 1:
                    return -1 === (e = n.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.Zc.get(e) || []).push(t), 
                    this.Zc.set(e, r), [ 2 /*return*/ ]);
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.dl = function(t) {
        (this.Zc.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.Zc.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.wl = function(t) {
        this.Zc.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new A$1(b.CANCELLED, t));
            }));
        })), this.Zc.clear();
    }, t.prototype.ol = function(t, e) {
        var n = this.Xc[this.currentUser.s()];
        n || (n = new C$1(Ue)), n = n.nt(t, e), this.Xc[this.currentUser.s()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype._l = function(t, e) {
        var n = this.Xc[this.currentUser.s()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.Xc[this.currentUser.s()] = n;
        }
    }, t.prototype.hl = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.Qc.uc(t);
        for (var r = 0, i = this.zc.get(t); r < i.length; r++) {
            var o = i[r];
            this.Gc.delete(o), e && this.jc.Tl(o, e);
        }
        if (this.zc.delete(t), this.isPrimary) {
            var s = this.Yc.Ln(t);
            this.Yc.Nn(t), s.forEach((function(t) {
                n.Yc.$n(t) || 
                // We removed the last reference for this key
                n.ml(t);
            }));
        }
    }, t.prototype.ml = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.Hc.get(t);
        null !== e && (this.Lc.$u(e), this.Hc = this.Hc.remove(t), this.Jc.delete(e), this.cl());
    }, t.prototype.rl = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof nr ? (this.Yc.vn(i.key, t), this.El(i)) : i instanceof rr ? (Se("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.Yc.Cn(i.key, t), this.Yc.$n(i.key) || 
            // We removed the last reference for this key
            this.ml(i.key)) : Ve("Unknown limbo change: " + JSON.stringify(i));
        }
    }, t.prototype.El = function(t) {
        var e = t.key;
        this.Hc.get(e) || (Se("SyncEngine", "New document in limbo: " + e), this.Kc.push(e), 
        this.cl());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.cl = function() {
        for (;this.Kc.length > 0 && this.Hc.size < this.Wc; ) {
            var t = this.Kc.shift(), e = this.tl.next();
            this.Jc.set(e, new ur(t)), this.Hc = this.Hc.nt(t, e), this.Lc.listen(new Yt(Lt.ve(t.path).Ue(), e, 2 /* LimboResolution */ , He.Ir));
        }
    }, 
    // Visible for testing
    t.prototype.Rl = function() {
        return this.Hc;
    }, 
    // Visible for testing
    t.prototype.Il = function() {
        return this.Kc;
    }, t.prototype.al = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = [], i = [], o = [], this.Gc.forEach((function(n, u) {
                        o.push(Promise.resolve().then((function() {
                            var e = u.view.Vc(t);
                            return e.yc ? s._u.lo(u.query, /* usePreviousResults= */ !1).then((function(t) {
                                var n = t.documents;
                                return u.view.Vc(n, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var n = r && r.ws.get(u.targetId), o = u.view.bc(t, 
                            /* updateLimboDocuments= */ !0 === s.isPrimary, n);
                            if (s.rl(u.targetId, o.Cc), o.snapshot) {
                                s.isPrimary && s.Qc.ac(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), 
                                e.push(o.snapshot);
                                var a = Qe.wr(u.targetId, o.snapshot);
                                i.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(o) ];

                  case 1:
                    return n.sent(), this.jc.La(e), [ 4 /*yield*/ , this._u.so(i) ];

                  case 2:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.sl = function(t) {}, t.prototype.Xu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = !this.currentUser.isEqual(t), this.currentUser = t, e ? (
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.wl("'waitForPendingWrites' promise is rejected due to a user change."), [ 4 /*yield*/ , this._u.Vh(t) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    return r = n.sent(), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.Qc.Vh(t, r.yh, r.bh), [ 4 /*yield*/ , this.al(r.gh) ];

                  case 2:
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 4 /*yield*/ , this.Lc.Xu() ];

                  case 4:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.Zu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s, u, a, h = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return !0 !== t || !0 === this.isPrimary ? [ 3 /*break*/ , 3 ] : (this.isPrimary = !0, 
                    [ 4 /*yield*/ , this.Lc.Zu(!0) ]);

                  case 1:
                    return n.sent(), e = this.Qc._c(), [ 4 /*yield*/ , this.Al(e.j()) ];

                  case 2:
                    for (r = n.sent(), i = 0, o = r; i < o.length; i++) s = o[i], this.Lc.listen(s);
                    return [ 3 /*break*/ , 7 ];

                  case 3:
                    return !1 !== t || !1 === this.isPrimary ? [ 3 /*break*/ , 7 ] : (this.isPrimary = !1, 
                    u = [], a = Promise.resolve(), this.zc.forEach((function(t, e) {
                        h.Qc.cc(e) ? u.push(e) : a = a.then((function() {
                            return h.hl(e), h._u.co(e, 
                            /*keepPersistedTargetData=*/ !0);
                        })), h.Lc.$u(e);
                    })), [ 4 /*yield*/ , a ]);

                  case 4:
                    return n.sent(), [ 4 /*yield*/ , this.Al(u) ];

                  case 5:
                    return n.sent(), this.Pl(), [ 4 /*yield*/ , this.Lc.Zu(!1) ];

                  case 6:
                    n.sent(), n.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.Pl = function() {
        var t = this;
        this.Jc.forEach((function(e, n) {
            t.Lc.$u(n);
        })), this.Yc.kn(), this.Jc = new Map, this.Hc = new C$1(U$1.k);
    }, 
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Al = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s, u, a, h, c, f, l, p, d;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    e = [], r = [], i = 0, o = t, n.label = 1;

                  case 1:
                    return i < o.length ? (s = o[i], u = void 0, (a = this.zc.get(s)) && 0 !== a.length ? [ 4 /*yield*/ , this._u.co(s, 
                    /*keepPersistedTargetData=*/ !0) ] : [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 14 ];

                  case 2:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    return n.sent(), [ 4 /*yield*/ , this._u.ho(a[0].Ue()) ];

                  case 3:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    u = n.sent(), h = 0, c = a, n.label = 4;

                  case 4:
                    return h < c.length ? (f = c[h], l = this.Gc.get(f), [ 4 /*yield*/ , this.nl(l) ]) : [ 3 /*break*/ , 7 ];

                  case 5:
                    (p = n.sent()).snapshot && r.push(p.snapshot), n.label = 6;

                  case 6:
                    return h++, [ 3 /*break*/ , 4 ];

                  case 7:
                    return [ 3 /*break*/ , 12 ];

                  case 8:
                    return [ 4 /*yield*/ , this._u.Ao(s) ];

                  case 9:
                    return d = n.sent(), [ 4 /*yield*/ , this._u.ho(d) ];

                  case 10:
                    return u = n.sent(), [ 4 /*yield*/ , this.il(this.Vl(d), s, 
                    /*current=*/ !1) ];

                  case 11:
                    n.sent(), n.label = 12;

                  case 12:
                    e.push(u), n.label = 13;

                  case 13:
                    return i++, [ 3 /*break*/ , 1 ];

                  case 14:
                    return [ 2 /*return*/ , (this.jc.La(r), e) ];
                }
            }));
        }));
    }, 
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.Vl = function(t) {
        return new Lt(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.wo = function() {
        return this._u.wo();
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.pl = function(t, r, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.isPrimary ? (
                    // If we receive a target state notification via WebStorage, we are
                    // either already secondary or another tab has taken the primary lease.
                    Se("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    if (!this.zc.has(t)) return [ 3 /*break*/ , 8 ];
                    switch (r) {
                      case "current":
                      case "not-current":
                        return [ 3 /*break*/ , 2 ];

                      case "rejected":
                        return [ 3 /*break*/ , 5 ];
                    }
                    return [ 3 /*break*/ , 7 ];

                  case 2:
                    return [ 4 /*yield*/ , this._u.Po() ];

                  case 3:
                    return e = n.sent(), o = fe.Rs(t, "current" === r), [ 4 /*yield*/ , this.al(e, o) ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 8 ];

                  case 5:
                    return [ 4 /*yield*/ , this._u.co(t, 
                    /* keepPersistedTargetData */ !0) ];

                  case 6:
                    return n.sent(), this.hl(t, i), [ 3 /*break*/ , 8 ];

                  case 7:
                    Ve("Unexpected target state: " + r), n.label = 8;

                  case 8:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.gl = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s, u, a, h, c, f, l, p = this;
            return __generator(this, (function(d) {
                switch (d.label) {
                  case 0:
                    if (!this.isPrimary) return [ 3 /*break*/ , 10 ];
                    e = 0, i = t, d.label = 1;

                  case 1:
                    return e < i.length ? (o = i[e], [ 4 /*yield*/ , this._u.Ao(o) ]) : [ 3 /*break*/ , 6 ];

                  case 2:
                    return s = d.sent(), [ 4 /*yield*/ , this._u.ho(s) ];

                  case 3:
                    return u = d.sent(), [ 4 /*yield*/ , this.il(this.Vl(s), u.targetId, 
                    /*current=*/ !1) ];

                  case 4:
                    d.sent(), this.Lc.listen(u), d.label = 5;

                  case 5:
                    return e++, [ 3 /*break*/ , 1 ];

                  case 6:
                    a = function(t) {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return h.zc.has(t) ? [ 4 /*yield*/ , h._u.co(t, /* keepPersistedTargetData */ !1).then((function() {
                                    p.Lc.$u(t), p.hl(t);
                                })).catch(Ze) ] : [ 3 /*break*/ , 2 ];

                                // Release queries that are still active.
                                                              case 1:
                                // Release queries that are still active.
                                e.sent(), e.label = 2;

                              case 2:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, h = this, c = 0, f = r, d.label = 7;

                  case 7:
                    return c < f.length ? (l = f[c], [ 5 /*yield**/ , a(l) ]) : [ 3 /*break*/ , 10 ];

                  case 8:
                    d.sent(), d.label = 9;

                  case 9:
                    return c++, [ 3 /*break*/ , 7 ];

                  case 10:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.enableNetwork = function() {
        return this._u.Eo(!0), this.Lc.enableNetwork();
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.disableNetwork = function() {
        return this._u.Eo(!1), this.Lc.disableNetwork();
    }, t.prototype.ai = function(t) {
        var e = this.Jc.get(t);
        if (e && e.xc) return oe().add(e.key);
        var n = oe(), r = this.zc.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.Gc.get(s);
            n = n.kt(u.view.Pc);
        }
        return n;
    }, t;
}(), hr = function() {
    this.yl = null, this.targetId = 0, this.bl = [];
}, cr = /** @class */ function() {
    function t(t) {
        this.Mu = t, this.vl = new Pe((function(t) {
            return t.canonicalId();
        })), this.onlineState = "Unknown" /* Unknown */ , this.Sl = new Set, this.Mu.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        var e = t.query, n = !1, r = this.vl.get(e);
        return r || (n = !0, r = new hr, this.vl.set(e, r)), r.bl.push(t), 
        // Run global snapshot listeners if a consistent snapshot has been emitted.
        t.Dc(this.onlineState), r.yl && t.Cl(r.yl) && this.Dl(), n ? this.Mu.listen(e).then((function(t) {
            return r.targetId = t, t;
        })) : Promise.resolve(r.targetId);
    }, t.prototype.$u = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                return e = t.query, r = !1, (i = this.vl.get(e)) && (o = i.bl.indexOf(t)) >= 0 && (i.bl.splice(o, 1), 
                r = 0 === i.bl.length), r ? [ 2 /*return*/ , (this.vl.delete(e), this.Mu.$u(e)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.La = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.vl.get(o);
            if (s) {
                for (var u = 0, a = s.bl; u < a.length; u++) {
                    a[u].Cl(i) && (e = !0);
                }
                s.yl = i;
            }
        }
        e && this.Dl();
    }, t.prototype.Tl = function(t, e) {
        var n = this.vl.get(t);
        if (n) for (var r = 0, i = n.bl; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.vl.delete(t);
    }, t.prototype.ul = function(t) {
        this.onlineState = t;
        var e = !1;
        this.vl.forEach((function(n, r) {
            for (var i = 0, o = r.bl; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Dc(t) && (e = !0);
            }
        })), e && this.Dl();
    }, t.prototype.Fl = function(t) {
        this.Sl.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.Nl = function(t) {
        this.Sl.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.Dl = function() {
        this.Sl.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), fr = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.kl = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Ll = !1, this.$l = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.Cl = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new ce(t.query, t.docs, t.cs, e, t.ls, t.fromCache, t._s, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Ll ? this.Ol(t) && (this.kl.next(t), o = !0) : this.Ml(t, this.onlineState) && (this.Ul(t), 
        o = !0), this.$l = t, o;
    }, t.prototype.onError = function(t) {
        this.kl.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Dc = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.$l && !this.Ll && this.Ml(this.$l, t) && (this.Ul(this.$l), e = !0), 
        e;
    }, t.prototype.Ml = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.ql && n || t.docs.q() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Ol = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.$l && this.$l.hasPendingWrites !== t.hasPendingWrites;
        return !(!t._s && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Ul = function(t) {
        t = ce.fs(t.query, t.docs, t.ls, t.fromCache), this.Ll = !0, this.kl.next(t);
    }, t;
}(), lr = /** @class */ function() {
    function t() {}
    return t.prototype.Ah = function(t) {
        this.Bl = t;
    }, t.prototype.rr = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.Me() || n.isEqual(R$1.MIN) ? this.xl(t, e) : this.Bl.sr(t, r).next((function(o) {
            var u = i.Ql(e, o);
            return (e.je() || e.Ge()) && i.yc(e.pe, u, r, n) ? i.xl(t, e) : (_e() <= LogLevel.DEBUG && Se("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), e.toString()), 
            i.Bl.rr(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.nt(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Ql = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new P$1((function(e, n) {
            return t.qe(e, n);
        }));
        return e.forEach((function(e, r) {
            r instanceof St && t.matches(r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.yc = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.C(r) > 0);
    }, t.prototype.xl = function(t, e) {
        return _e() <= LogLevel.DEBUG && Se("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", e.toString()), 
        this.Bl.rr(t, e, R$1.MIN);
    }, t;
}(), pr = /** @class */ function() {
    function t() {
        this.Wl = new dr;
    }
    return t.prototype.jl = function(t, e) {
        return this.Wl.add(e), Be.resolve();
    }, t.prototype.ur = function(t, e) {
        return Be.resolve(this.Wl.getEntries(e));
    }, t;
}(), dr = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.U(), n = t.O(), r = this.index[e] || new P$1(V$1.k), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.U(), n = t.O(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new P$1(V$1.k)).j();
    }, t;
}(), yr = /** @class */ function() {
    function t(t, e) {
        this.Jn = t, this.dh = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.Hn = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Gl = 1, 
        /** The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             */
        this.lastStreamToken = B$1.Ut, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.zl = new P$1(je.me);
    }
    return t.prototype.Kl = function(t) {
        return Be.resolve(0 === this.Hn.length);
    }, t.prototype.Nh = function(t, e, n) {
        var r = e.batchId, i = this.Hl(r, "acknowledged");
        return Le(0 === i, "Can only acknowledge the first batch in the mutation queue"), 
        // Verify that the batch in the queue is the one to be acknowledged.
        this.Hn[i], this.lastStreamToken = n, Be.resolve();
    }, t.prototype.xh = function(t) {
        return Be.resolve(this.lastStreamToken);
    }, t.prototype.Qh = function(t, e) {
        return this.lastStreamToken = e, Be.resolve();
    }, t.prototype.Sh = function(t, e, n, r) {
        var i = this.Gl;
        this.Gl++, this.Hn.length > 0 && this.Hn[this.Hn.length - 1];
        var o = new xe(i, e, n, r);
        this.Hn.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.zl = this.zl.add(new je(a.key, i)), this.Jn.jl(t, a.key.path.O());
        }
        return Be.resolve(o);
    }, t.prototype.Uh = function(t, e) {
        return Be.resolve(this.Jl(e));
    }, t.prototype.Fh = function(t, e) {
        var n = this.Jl(e);
        return Be.resolve(n.keys());
    }, t.prototype.no = function(t, e) {
        var n = e + 1, r = this.Yl(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Be.resolve(this.Hn.length > i ? this.Hn[i] : null);
    }, t.prototype.Bh = function() {
        return Be.resolve(0 === this.Hn.length ? -1 : this.Gl - 1);
    }, t.prototype.ph = function(t) {
        return Be.resolve(this.Hn.slice());
    }, t.prototype.Xn = function(t, e) {
        var n = this, r = new je(e, 0), i = new je(e, Number.POSITIVE_INFINITY), o = [];
        return this.zl.Dt([ r, i ], (function(t) {
            var e = n.Jl(t.On);
            o.push(e);
        })), Be.resolve(o);
    }, t.prototype.nr = function(t, e) {
        var n = this, r = new P$1(Ue);
        return e.forEach((function(t) {
            var e = new je(t, 0), i = new je(t, Number.POSITIVE_INFINITY);
            n.zl.Dt([ e, i ], (function(t) {
                r = r.add(t.On);
            }));
        })), Be.resolve(this.Xl(r));
    }, t.prototype.cr = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                U$1.st(i) || (i = i.child(""));
        var o = new je(new U$1(i), 0), s = new P$1(Ue);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.zl.Ft((function(t) {
            var e = t.key.path;
            return !!n.B(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.On)), !0);
        }), o), Be.resolve(this.Xl(s));
    }, t.prototype.Xl = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Jl(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.qh = function(t, e) {
        var n = this;
        Le(0 === this.Hl(e.batchId, "removed"), "Can only remove the first entry of the mutation queue"), 
        this.Hn.shift();
        var r = this.zl;
        return Be.forEach(e.mutations, (function(i) {
            var o = new je(i.key, e.batchId);
            return r = r.delete(o), n.dh.Zl(t, i.key);
        })).next((function() {
            n.zl = r;
        }));
    }, t.prototype.mo = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.$n = function(t, e) {
        var n = new je(e, 0), r = this.zl.Nt(n);
        return Be.resolve(e.isEqual(r && r.key));
    }, t.prototype.Oh = function(t) {
        return this.Hn.length, Be.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Hl = function(t, e) {
        return this.Yl(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Yl = function(t) {
        return 0 === this.Hn.length ? 0 : t - this.Hn[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Jl = function(t) {
        var e = this.Yl(t);
        return e < 0 || e >= this.Hn.length ? null : this.Hn[e];
    }, t;
}(), vr = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.Jn = t, this.t_ = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new C$1(U$1.k), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Xh = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.t_(e);
        return this.docs = this.docs.nt(r, {
            e_: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.Jn.jl(t, r.path.O());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Yh = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.tr = function(t, e) {
        var n = this.docs.get(e);
        return Be.resolve(n ? n.e_ : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = $t();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.nt(t, e ? e.e_ : null);
        })), Be.resolve(r);
    }, t.prototype.rr = function(t, e, n) {
        for (var r = ee(), i = new U$1(e.path.child("")), o = this.docs._t(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.Rt(); ) {
            var s = o.Et(), u = s.key, a = s.value, h = a.e_, c = a.readTime;
            if (!e.path.B(u.path)) break;
            c.C(n) <= 0 || h instanceof St && e.matches(h) && (r = r.nt(h.key, h));
        }
        return Be.resolve(r);
    }, t.prototype.s_ = function(t, e) {
        return Be.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.Po = function(t, e) {
        throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence");
    }, t.prototype.po = function(t) {
        return Be.resolve(R$1.MIN);
    }, t.prototype.kh = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.i_(this);
    }, t.prototype.n_ = function(t) {
        return Be.resolve(this.size);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
vr.i_ = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).c_ = t, n;
    }
    return __extends(n, e), n.prototype.bc = function(t) {
        var e = this, n = [];
        return this.Ch.forEach((function(r, i) {
            i ? n.push(e.c_.Xh(t, i, e.readTime)) : e.c_.Yh(r);
        })), Be.Gn(n);
    }, n.prototype.a_ = function(t, e) {
        return this.c_.tr(t, e);
    }, n.prototype.u_ = function(t, e) {
        return this.c_.getEntries(t, e);
    }, n;
}(/** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Ch = new Pe((function(t) {
            return t.toString();
        })), this.r_ = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.h_;
        },
        set: function(t) {
            this.h_ = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Xh = function(t, e) {
        this.o_(), this.readTime = e, this.Ch.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Yh = function(t, e) {
        this.o_(), e && (this.readTime = e), this.Ch.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.tr = function(t, e) {
        this.o_();
        var n = this.Ch.get(e);
        return void 0 !== n ? Be.resolve(n) : this.a_(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.u_(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.o_(), this.r_ = !0, this.bc(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.o_ = function() {}, 
    t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mr = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.l_ = new Pe((function(t) {
            return t.canonicalId();
        })), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = R$1.MIN, 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.__ = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.d_ = new Fe, this.targetCount = 0, this.f_ = er.Tc();
    }
    return t.prototype.Xs = function(t, e) {
        return this.l_.forEach((function(t, n) {
            return e(n);
        })), Be.resolve();
    }, t.prototype.Wh = function(t) {
        return Be.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.w_ = function(t) {
        return Be.resolve(this.__);
    }, t.prototype.ao = function(t) {
        return this.highestTargetId = this.f_.next(), Be.resolve(this.highestTargetId);
    }, t.prototype.to = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.__ && (this.__ = e), 
        Be.resolve();
    }, t.prototype.T_ = function(t) {
        this.l_.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.f_ = new er(e), this.highestTargetId = e), t.sequenceNumber > this.__ && (this.__ = t.sequenceNumber);
    }, t.prototype.uo = function(t, e) {
        return this.T_(e), this.targetCount += 1, Be.resolve();
    }, t.prototype.Jh = function(t, e) {
        return this.T_(e), Be.resolve();
    }, t.prototype.m_ = function(t, e) {
        return this.l_.delete(e.target), this.d_.Nn(e.targetId), this.targetCount -= 1, 
        Be.resolve();
    }, t.prototype.E_ = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.l_.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.l_.delete(s), o.push(r.R_(t, u.targetId)), 
            i++);
        })), Be.Gn(o).next((function() {
            return i;
        }));
    }, t.prototype.I_ = function(t) {
        return Be.resolve(this.targetCount);
    }, t.prototype.oo = function(t, e) {
        var n = this.l_.get(e) || null;
        return Be.resolve(n);
    }, t.prototype.ui = function(t, e) {
        // This method is only needed for multi-tab and we can't implement it
        // efficiently without additional data structures.
        return Ve("Not yet implemented.");
    }, t.prototype.zh = function(t, e, n) {
        this.d_.Sn(e, n);
        var r = this.persistence.dh, i = [];
        return r && e.forEach((function(e) {
            i.push(r.vn(t, e));
        })), Be.Gn(i);
    }, t.prototype.Gh = function(t, e, n) {
        this.d_.Fn(e, n);
        var r = this.persistence.dh, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Cn(t, e));
        })), Be.Gn(i);
    }, t.prototype.R_ = function(t, e) {
        return this.d_.Nn(e), Be.resolve();
    }, t.prototype._o = function(t, e) {
        var n = this.d_.Ln(e);
        return Be.resolve(n);
    }, t.prototype.$n = function(t, e) {
        return Be.resolve(this.d_.$n(e));
    }, t;
}(), gr = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, e) {
        var n = this;
        this.clientId = t, this.A_ = {}, this.P_ = new He(0), this.V_ = !1, this.V_ = !0, 
        this.dh = e(this), this.mh = new mr(this), this.Jn = new pr, this.Kn = new vr(this.Jn, (function(t) {
            return n.dh.p_(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.ku = function() {
        // No durable state to ensure is closed on shutdown.
        return this.V_ = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "g_", {
        get: function() {
            return this.V_;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.wo = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return [ 2 /*return*/ , [ this.clientId ] ];
            }));
        }));
    }, t.prototype.y_ = function(t) {
        // All clients using memory persistence act as primary.
        return t(!0);
    }, t.prototype.b_ = function() {
        // No op.
    }, t.prototype.Eo = function(t) {
        // No op.
    }, t.prototype.Ih = function() {
        return this.Jn;
    }, t.prototype.fh = function(t) {
        var e = this.A_[t.s()];
        return e || (e = new yr(this.Jn, this.dh), this.A_[t.s()] = e), e;
    }, t.prototype.Eh = function() {
        return this.mh;
    }, t.prototype.Th = function() {
        return this.Kn;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        Se("MemoryPersistence", "Starting transaction:", t);
        var i = new wr(this.P_.next());
        return this.dh.v_(), n(i).next((function(t) {
            return r.dh.S_(i).next((function() {
                return t;
            }));
        })).Wn().then((function(t) {
            return i.C_(), t;
        }));
    }, t.prototype.D_ = function(t, e) {
        return Be.zn(Object.values(this.A_).map((function(n) {
            return function() {
                return n.$n(t, e);
            };
        })));
    }, t;
}(), wr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Kh = t, n;
    }
    /**
     * A base class representing a persistence transaction, encapsulating both the
     * transaction's sequence numbers as well as a list of onCommitted listeners.
     *
     * When you call Persistence.runTransaction(), it will create a transaction and
     * pass it to your callback. You then pass it to any method that operates
     * on persistence.
     */
    return __extends(n, e), n;
}(/** @class */ function() {
    function t() {
        this.F_ = [];
    }
    return t.prototype.N_ = function(t) {
        this.F_.push(t);
    }, t.prototype.C_ = function() {
        this.F_.forEach((function(t) {
            return t();
        }));
    }, t;
}()), Er = /** @class */ function() {
    function t(t) {
        this.persistence = t, this.k_ = null, this.L_ = null;
    }
    return t.O_ = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "M_", {
        get: function() {
            if (this.L_) return this.L_;
            throw Ve("orphanedDocuments is only valid during a transaction.");
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype._h = function(t) {
        this.k_ = t;
    }, t.prototype.vn = function(t, e) {
        return this.M_.delete(e), Be.resolve();
    }, t.prototype.Cn = function(t, e) {
        return this.M_.add(e), Be.resolve();
    }, t.prototype.Zl = function(t, e) {
        return this.M_.add(e), Be.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this, r = this.persistence.Eh();
        return r._o(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.M_.add(t);
            }));
        })).next((function() {
            return r.m_(t, e);
        }));
    }, t.prototype.v_ = function() {
        this.L_ = new Set;
    }, t.prototype.S_ = function(t) {
        var e = this, n = this.persistence.Th().kh();
        // Remove newly orphaned documents.
                return Be.forEach(this.M_, (function(r) {
            return e.U_(t, r).next((function(t) {
                t || n.Yh(r);
            }));
        })).next((function() {
            return e.L_ = null, n.apply(t);
        }));
    }, t.prototype.Zh = function(t, e) {
        var n = this;
        return this.U_(t, e).next((function(t) {
            t ? n.M_.delete(e) : n.M_.add(e);
        }));
    }, t.prototype.p_ = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.U_ = function(t, e) {
        var n = this;
        return Be.zn([ function() {
            return n.persistence.Eh().$n(t, e);
        }, function() {
            return n.persistence.D_(t, e);
        }, function() {
            return Be.resolve(n.k_.$n(e));
        } ]);
    }, t;
}(), br = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.Qc = this.q_(t), this.persistence = this.B_(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return i.sent(), this.x_ = this.Q_(t), this._u = this.W_(t), this.Lc = this.j_(t), 
                    this.Mu = this.G_(t), this.z_ = this.K_(t), this.Qc.iu = function(t) {
                        return r.Mu.Dc(t, 1 /* SharedClientState */);
                    }, this.Lc.Mu = this.Mu, this.Qc.Mu = this.Mu, [ 4 /*yield*/ , this.Qc.start() ];

                  case 2:
                    return i.sent(), [ 4 /*yield*/ , this.Lc.start() ];

                  case 3:
                    return i.sent(), [ 4 /*yield*/ , this._u.start() ];

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 4 /*yield*/ , this.persistence.y_((function(t) {
                        return __awaiter(r, void 0, void 0, (function() {
                            return __generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.Mu.Zu(t) ];

                                  case 1:
                                    return e.sent(), this.x_ && (t && !this.x_.g_ ? this.x_.start(this._u) : t || this.x_.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 5:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.K_ = function(t) {
        return new cr(this.Mu);
    }, t.prototype.Q_ = function(t) {
        return null;
    }, t.prototype.W_ = function(t) {
        return new Ke(this.persistence, new lr, t.H_);
    }, t.prototype.B_ = function(t) {
        return new gr(t.clientId, Er.O_);
    }, t.prototype.j_ = function(t) {
        var e = this;
        return new Zn(this._u, t.Ha, t.Ar, (function(t) {
            return e.Mu.Dc(t, 0 /* RemoteStore */);
        }), t.platform.J_());
    }, t.prototype.q_ = function(t) {
        return new tr;
    }, t.prototype.G_ = function(t) {
        return new ar(this._u, this.Lc, this.Qc, t.H_, t.Wc);
    }, t.prototype.clearPersistence = function(t) {
        throw new A$1(b.FAILED_PRECONDITION, "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.");
    }, t;
}(), Ar = /** @class */ function() {
    function t(t, e, n, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    r) {
        this.platform = t, this.Y_ = e, this.credentials = n, this.Ar = r, this.clientId = Oe.Tn()
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return t.prototype.start = function(t, e) {
        var n = this;
        this.X_();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var r = new Ye, i = new Ye, o = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials._((function(s) {
            if (!o) return o = !0, Se("FirestoreClient", "Initializing. user=", s.uid), n.Z_(t, e, s, i).then(r.resolve, r.reject);
            n.Ar.Cr((function() {
                return n.Xu(s);
            }));
        })), 
        // Block the async queue until initialization is done
        this.Ar.Cr((function() {
            return r.promise;
        })), i.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.X_(), this.Ar.enqueue((function() {
            return t.Mu.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.Z_ = function(t, r, i, o) {
        return __awaiter(this, void 0, void 0, (function() {
            var s, u, a, h, c = this;
            return __generator(this, (function(f) {
                switch (f.label) {
                  case 0:
                    return f.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , this.platform.td(this.Y_) ];

                  case 1:
                    return s = f.sent(), u = this.platform.ed(this.Y_.ci), a = new Jn(this.Ar, s, this.credentials, u), 
                    [ 4 /*yield*/ , t.initialize({
                        Ar: this.Ar,
                        Y_: this.Y_,
                        platform: this.platform,
                        Ha: a,
                        clientId: this.clientId,
                        H_: i,
                        Wc: 100,
                        sd: r
                    }) ];

                  case 2:
                    return f.sent(), this.persistence = t.persistence, this.Qc = t.Qc, this._u = t._u, 
                    this.Lc = t.Lc, this.Mu = t.Mu, this.x_ = t.x_, this.nd = t.z_, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.b_((function() {
                        return __awaiter(c, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), o.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (h = f.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    o.reject(h), !this.rd(h)) throw h;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + h), 
                    this.Z_(new br, {
                        hd: !1
                    }, i, o)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.rd = function(t) {
        return "FirebaseError" === t.name ? t.code === b.FAILED_PRECONDITION || t.code === b.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.X_ = function() {
        if (this.Ar.Or) throw new A$1(b.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.Xu = function(t) {
        return this.Ar.jr(), Se("FirestoreClient", "Credential Changed. Current user: " + t.uid), 
        this.Mu.Xu(t);
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.X_(), this.Ar.enqueue((function() {
            return t.Mu.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.Ar.xr((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.x_ && this.x_.stop(), [ 4 /*yield*/ , this.Lc.ku() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.Qc.ku() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.ku() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.T(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.X_();
        var e = new Ye;
        return this.Ar.Cr((function() {
            return t.Mu.fl(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.X_();
        var i = new fr(t, e, n);
        return this.Ar.Cr((function() {
            return r.nd.listen(i);
        })), i;
    }, t.prototype.$u = function(t) {
        var e = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.od || this.Ar.Cr((function() {
            return e.nd.$u(t);
        }));
    }, t.prototype.ad = function(t) {
        var e = this;
        return this.X_(), this.Ar.enqueue((function() {
            return e._u.ro(t);
        })).then((function(t) {
            if (t instanceof St) return t;
            if (t instanceof Rt) return null;
            throw new A$1(b.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)");
        }));
    }, t.prototype.ud = function(t) {
        var r = this;
        return this.X_(), this.Ar.enqueue((function() {
            return __awaiter(r, void 0, void 0, (function() {
                var e, r, i;
                return __generator(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return [ 4 /*yield*/ , this._u.lo(t, 
                        /* usePreviousResults= */ !0) ];

                      case 1:
                        return e = n.sent(), r = new ir(t, e.do), i = r.Vc(e.documents), [ 2 /*return*/ , r.bc(i, 
                        /* updateLimboDocuments= */ !1).snapshot ];
                    }
                }));
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.X_();
        var n = new Ye;
        return this.Ar.Cr((function() {
            return e.Mu.write(t, n);
        })), n.promise;
    }, t.prototype.ci = function() {
        return this.Y_.ci;
    }, t.prototype.Fl = function(t) {
        var e = this;
        this.X_(), this.Ar.Cr((function() {
            return e.nd.Fl(t), Promise.resolve();
        }));
    }, t.prototype.Nl = function(t) {
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
        this.od || this.nd.Nl(t);
    }, Object.defineProperty(t.prototype, "od", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.Ar.Or;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var e = this;
        this.X_();
        var n = new Ye;
        return this.Ar.Cr((function() {
            return e.Mu.runTransaction(e.Ar, t, n), Promise.resolve();
        })), n.promise;
    }, t;
}(), Nr = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.ld(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.ld(this.observer.error, t);
    }, t.prototype._d = function() {
        this.muted = !0;
    }, t.prototype.ld = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ir(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Tr = /** @class */ function() {
    function t(t, e, n, r) {
        this.firestore = t, this.timestampsInSnapshots = e, this.dd = n, this.converter = r;
    }
    return t.prototype.fd = function(t) {
        switch (J$1(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return nt(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.wd(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.Td(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new bn(rt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.md(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return new Ln(t.geoPointValue.latitude, t.geoPointValue.longitude);

          case 9 /* ArrayValue */ :
            return this.Ed(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.Rd(t.mapValue);

          default:
            throw Ve("Invalid value type: " + JSON.stringify(t));
        }
    }, t.prototype.Rd = function(t) {
        var e = this, n = {};
        return F$1(t.fields || {}, (function(t, r) {
            n[t] = e.fd(r);
        })), n;
    }, t.prototype.Ed = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.fd(t);
        }));
    }, t.prototype.Td = function(t) {
        switch (this.dd) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return H$1(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.fd(e);

          case "estimate":
            return this.wd(Y$1(t));

          default:
            return null;
        }
    }, t.prototype.wd = function(t) {
        var e = et(t), n = new S$1(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.md = function(t) {
        var e = V$1.K(t);
        Le(Ne(e), "ReferenceValue is not valid " + t);
        var n = new Me(e.get(1), e.get(3)), r = new U$1(e.$(5));
        return n.isEqual(this.firestore.Id) || 
        // TODO(b/64130202): Somehow support foreign references.
        Re("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.firestore.Id.projectId + "/" + this.firestore.Id.database + ") instead."), 
        new Vr(r, this.firestore, this.converter);
    }, t;
}(), _r = Xe.sh, kr = /** @class */ function() {
    function t(t) {
        var e, n;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new A$1(b.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else sn("settings", "non-empty string", "host", t.host), this.host = t.host, un("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (pn("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling" ]), 
        un("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        un("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? Re("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && Re("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        un("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Xe.nh; else {
            if (t.cacheSizeBytes !== _r && t.cacheSizeBytes < Xe.ih) throw new A$1(b.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Xe.ih);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        un("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling;
    }, t;
}(), Sr = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(r, i, o) {
        var s = this;
        if (void 0 === o && (o = new br), this.Ad = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.Pd = new Je, this.INTERNAL = {
            delete: function() {
                return __awaiter(s, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.Vd(), [ 4 /*yield*/ , this.pd.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof r.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var u = r;
            this.Ad = u, this.Id = t.gd(u), this.yd = u.name, this.bd = new T$1(i);
        } else {
            var a = r;
            if (!a.projectId) throw new A$1(b.INVALID_ARGUMENT, "Must provide projectId");
            this.Id = new Me(a.projectId, a.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.yd = "[DEFAULT]", this.bd = new I$1;
        }
        this.vd = o, this.Sd = new kr({}), this.Cd = this.Dd(this.Id);
    }
    return t.prototype.settings = function(t) {
        tn("Firestore.settings", arguments, 1), rn("Firestore.settings", "object", 1, t);
        var e = new kr(t);
        if (this.pd && !this.Sd.isEqual(e)) throw new A$1(b.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.Sd = e, void 0 !== e.credentials && (this.bd = function(t) {
            if (!t) return new I$1;
            switch (t.type) {
              case "gapi":
                var e = t.Fd;
                // Make sure this really is a Gapi client.
                                return Le(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), 
                new k$1(e, t.V || "0");

              case "provider":
                return t.Fd;

              default:
                throw new A$1(b.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.Vd(), this.pd.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.Vd(), this.pd.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.pd) throw new A$1(b.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1;
        return t && (void 0 !== t.experimentalTabSynchronization && Re("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n), 
        this.Nd(this.vd, {
            hd: !0,
            cacheSizeBytes: this.Sd.cacheSizeBytes,
            synchronizeTabs: r
        });
    }, t.prototype.clearPersistence = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, r = this;
            return __generator(this, (function(i) {
                if (void 0 !== this.pd && !this.pd.od) throw new A$1(b.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                return t = new Ye, [ 2 /*return*/ , (this.Pd.Mr((function() {
                    return __awaiter(r, void 0, void 0, (function() {
                        var e, r;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([ 0, 2, , 3 ]), e = this.kd(), [ 4 /*yield*/ , this.vd.clearPersistence(e) ];

                              case 1:
                                return n.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return r = n.sent(), t.reject(r), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), t.promise) ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "Ld", {
        get: function() {
            return this.Vd(), this.pd.od;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.Vd(), this.pd.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.Vd(), Ir(t)) return this.$d(t);
        rn("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.$d(e);
    }, t.prototype.$d = function(t) {
        var e = this, n = new Nr({
            next: function() {
                t.next && t.next();
            },
            error: function(t) {
                throw Ve("Uncaught Error in onSnapshotsInSync");
            }
        });
        return this.pd.Fl(n), function() {
            n._d(), e.pd.Nl(n);
        };
    }, t.prototype.Vd = function() {
        return this.pd || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Nd(new br, {
            hd: !1
        }), this.pd;
    }, t.prototype.kd = function() {
        return new qe(this.Id, this.yd, this.Sd.host, this.Sd.ssl, this.Sd.forceLongPolling);
    }, t.prototype.Nd = function(t, e) {
        var n = this.kd();
        return this.pd = new Ar(Ie.Ot(), n, this.bd, this.Pd), this.pd.start(t, e);
    }, t.prototype.Dd = function(t) {
        var e = new Ae(t, {
            di: Ie.Ot().di
        });
        return new xn(e, (function(e) {
            if (e instanceof Vr) {
                var n = t, r = e.firestore.Id;
                if (!r.isEqual(n)) throw new A$1(b.INVALID_ARGUMENT, "Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                return new Pn(t, e.Od);
            }
            return e;
        }));
    }, t.gd = function(t) {
        if (e = t.options, !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new A$1(b.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        // Export the classes with a private constructor (it will fail if invoked
        // at runtime). Note that this still allows instanceof checks.
        // We're treating the variables as class names, so disable checking for lower
        // case variable names.
                if (!n || "string" != typeof n) throw new A$1(b.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new Me(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.Ad) throw new A$1(b.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Ad;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return tn("Firestore.collection", arguments, 1), rn("Firestore.collection", "non-empty string", 1, t), 
        this.Vd(), new Mr(V$1.K(t), this);
    }, t.prototype.doc = function(t) {
        return tn("Firestore.doc", arguments, 1), rn("Firestore.doc", "non-empty string", 1, t), 
        this.Vd(), Vr.Md(V$1.K(t), this);
    }, t.prototype.collectionGroup = function(t) {
        if (tn("Firestore.collectionGroup", arguments, 1), rn("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new A$1(b.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.Vd(), new Cr(new Lt(V$1.H, t), this);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return tn("Firestore.runTransaction", arguments, 1), rn("Firestore.runTransaction", "function", 1, t), 
        this.Vd().transaction((function(n) {
            return t(new Rr(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.Vd(), new Dr(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (_e()) {
              case LogLevel.DEBUG:
                return "debug";

              case LogLevel.SILENT:
                return "silent";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.setLogLevel = function(t) {
        switch (tn("Firestore.setLogLevel", arguments, 1), rn("Firestore.setLogLevel", "non-empty string", 1, t), 
        t) {
          case "debug":
            ke(LogLevel.DEBUG);
            break;

          case "error":
            ke(LogLevel.ERROR);
            break;

          case "silent":
            ke(LogLevel.SILENT);
            break;

          default:
            throw new A$1(b.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.Ud = function() {
        return this.Sd.timestampsInSnapshots;
    }, t;
}(), Rr = /** @class */ function() {
    function t(t, e) {
        this.qd = t, this.Bd = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        tn("Transaction.get", arguments, 1);
        var n = Fr("Transaction.get", t, this.qd);
        return this.Bd.za([ n.Od ]).then((function(t) {
            if (!t || 1 !== t.length) return Ve("Mismatch in docs returned from document lookup.");
            var r = t[0];
            if (r instanceof Rt) return new Or(e.qd, n.Od, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.xd);
            if (r instanceof St) return new Or(e.qd, n.Od, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.xd);
            throw Ve("BatchGetDocumentsRequest returned unexpected document type: " + r.constructor.name);
        }));
    }, t.prototype.set = function(t, e, n) {
        nn("Transaction.set", arguments, 2, 3);
        var r = Fr("Transaction.set", t, this.qd);
        n = Pr("Transaction.set", n);
        var i = Br(r.xd, e, "Transaction.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.qd.Cd.zo(s, o, n.mergeFields) : this.qd.Cd.jo(s, o);
        return this.Bd.set(r.Od, u), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof Nn ? (en("Transaction.update", arguments, 3), 
        r = Fr("Transaction.update", t, this.qd), i = this.qd.Cd.Yo("Transaction.update", e, n, o)) : (tn("Transaction.update", arguments, 2), 
        r = Fr("Transaction.update", t, this.qd), i = this.qd.Cd.Ko("Transaction.update", e)), 
        this.Bd.update(r.Od, i), this;
    }, t.prototype.delete = function(t) {
        tn("Transaction.delete", arguments, 1);
        var e = Fr("Transaction.delete", t, this.qd);
        return this.Bd.delete(e.Od), this;
    }, t;
}(), Dr = /** @class */ function() {
    function t(t) {
        this.qd = t, this.Qd = [], this.Wd = !1;
    }
    return t.prototype.set = function(t, e, n) {
        nn("WriteBatch.set", arguments, 2, 3), this.jd();
        var r = Fr("WriteBatch.set", t, this.qd);
        n = Pr("WriteBatch.set", n);
        var i = Br(r.xd, e, "WriteBatch.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.qd.Cd.zo(s, o, n.mergeFields) : this.qd.Cd.jo(s, o);
        return this.Qd = this.Qd.concat(u.Lo(r.Od, gt.NONE)), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.jd(), "string" == typeof e || e instanceof Nn ? (en("WriteBatch.update", arguments, 3), 
        r = Fr("WriteBatch.update", t, this.qd), i = this.qd.Cd.Yo("WriteBatch.update", e, n, o)) : (tn("WriteBatch.update", arguments, 2), 
        r = Fr("WriteBatch.update", t, this.qd), i = this.qd.Cd.Ko("WriteBatch.update", e)), 
        this.Qd = this.Qd.concat(i.Lo(r.Od, gt.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        tn("WriteBatch.delete", arguments, 1), this.jd();
        var e = Fr("WriteBatch.delete", t, this.qd);
        return this.Qd = this.Qd.concat(new Nt(e.Od, gt.NONE)), this;
    }, t.prototype.commit = function() {
        return this.jd(), this.Wd = !0, this.Qd.length > 0 ? this.qd.Vd().write(this.Qd) : Promise.resolve();
    }, t.prototype.jd = function() {
        if (this.Wd) throw new A$1(b.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), Vr = /** @class */ function() {
    function t(t, e, n) {
        this.Od = t, this.firestore = e, this.xd = n, this.pd = this.firestore.Vd();
    }
    return t.Md = function(e, n, r) {
        if (e.length % 2 != 0) throw new A$1(b.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.G() + " has " + e.length);
        return new t(new U$1(e), n, r);
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Od.path.U();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return new Mr(this.Od.path.O(), this.firestore, this.xd);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.Od.path.G();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        if (tn("DocumentReference.collection", arguments, 1), rn("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new A$1(b.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = V$1.K(t);
        return new Mr(this.Od.path.child(e), this.firestore);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw dn("isEqual", "DocumentReference", 1, e);
        return this.firestore === e.firestore && this.Od.isEqual(e.Od) && this.xd === e.xd;
    }, t.prototype.set = function(t, e) {
        nn("DocumentReference.set", arguments, 1, 2), e = Pr("DocumentReference.set", e);
        var n = Br(this.xd, t, "DocumentReference.set"), r = n[0], i = n[1], o = e.merge || e.mergeFields ? this.firestore.Cd.zo(i, r, e.mergeFields) : this.firestore.Cd.jo(i, r);
        return this.pd.write(o.Lo(this.Od, gt.NONE));
    }, t.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof Nn ? (en("DocumentReference.update", arguments, 2), 
        n = this.firestore.Cd.Yo("DocumentReference.update", t, e, r)) : (tn("DocumentReference.update", arguments, 1), 
        n = this.firestore.Cd.Ko("DocumentReference.update", t)), this.pd.write(n.Lo(this.Od, gt.exists(!0)));
    }, t.prototype.delete = function() {
        return tn("DocumentReference.delete", arguments, 0), this.pd.write([ new Nt(this.Od, gt.NONE) ]);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        nn("DocumentReference.onSnapshot", arguments, 1, 4);
        var n, r = {
            includeMetadataChanges: !1
        }, i = 0;
        "object" != typeof t[i] || Ir(t[i]) || (pn("DocumentReference.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        un("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++);
        var o = {
            includeMetadataChanges: r.includeMetadataChanges
        };
        return Ir(t[i]) ? n = t[i] : (rn("DocumentReference.onSnapshot", "function", i, t[i]), 
        on("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), on("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), 
        n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.Gd(o, n);
    }, t.prototype.Gd = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Nr({
            next: function(t) {
                if (e.next) {
                    var r = t.docs.get(n.Od);
                    e.next(new Or(n.firestore, n.Od, r, t.fromCache, t.hasPendingWrites, n.xd));
                }
            },
            error: r
        }), o = this.pd.listen(Lt.ve(this.Od.path), i, t);
        return function() {
            i._d(), n.pd.$u(o);
        };
    }, t.prototype.get = function(t) {
        var e = this;
        return nn("DocumentReference.get", arguments, 0, 1), Gr("DocumentReference.get", t), 
        new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.Vd().ad(e.Od).then((function(t) {
                n(new Or(e.firestore, e.Od, t, 
                /*fromCache=*/ !0, t instanceof St && t.te, e.xd));
            }), r) : e.zd(n, r, t);
        }));
    }, t.prototype.zd = function(t, e, n) {
        var r = this.Gd({
            includeMetadataChanges: !0,
            ql: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), !i.exists && i.metadata.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                e(new A$1(b.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? e(new A$1(b.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(i);
            },
            error: e
        });
    }, t.prototype.withConverter = function(e) {
        return new t(this.Od, this.firestore, e);
    }, t;
}(), Lr = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Or = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.qd = t, this.Od = e, this.Kd = n, this.Hd = r, this.Jd = i, this.xd = o;
    }
    return t.prototype.data = function(t) {
        if (nn("DocumentSnapshot.data", arguments, 0, 1), t = xr("DocumentSnapshot.data", t), 
        this.Kd) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.xd) {
                var e = new Ur(this.qd, this.Od, this.Kd, this.Hd, this.Jd);
                return this.xd.fromFirestore(e, t);
            }
            return new Tr(this.qd, this.qd.Ud(), t.serverTimestamps, 
            /* converter= */ void 0).fd(this.Kd.Re());
        }
    }, t.prototype.get = function(t, e) {
        if (nn("DocumentSnapshot.get", arguments, 1, 2), e = xr("DocumentSnapshot.get", e), 
        this.Kd) {
            var n = this.Kd.data().field(jn("DocumentSnapshot.get", t));
            if (null !== n) return new Tr(this.qd, this.qd.Ud(), e.serverTimestamps, this.xd).fd(n);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Od.path.U();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new Vr(this.Od, this.qd, this.xd);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.Kd;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Lr(this.Jd, this.Hd);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw dn("isEqual", "DocumentSnapshot", 1, e);
        return this.qd === e.qd && this.Hd === e.Hd && this.Od.isEqual(e.Od) && (null === this.Kd ? null === e.Kd : this.Kd.isEqual(e.Kd)) && this.xd === e.xd;
    }, t;
}(), Ur = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.data = function(t) {
        return e.prototype.data.call(this, t);
    }, n;
}(Or), Cr = /** @class */ function() {
    function t(t, e, n) {
        this.Yd = t, this.firestore = e, this.xd = n;
    }
    return t.prototype.where = function(e, n, r) {
        var i;
        tn("Query.where", arguments, 3), ln("Query.where", 3, r), function(t, e, n, r) {
            if (!e.some((function(t) {
                return t === r;
            }))) throw new A$1(b.INVALID_ARGUMENT, "Invalid value " + fn(r) + " provided to function Query.where() for its " + vn(2) + " argument. Acceptable values: " + e.join(", "));
        }(0, [ "<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any" ], 0, n);
        var o = jn("Query.where", e), s = Ot.K(n);
        if (o.Y()) {
            if (s === Ot.ARRAY_CONTAINS || s === Ot.ARRAY_CONTAINS_ANY) throw new A$1(b.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + s.toString() + "' queries on FieldPath.documentId().");
            if (s === Ot.IN) {
                this.Xd(r, s);
                for (var u = [], a = 0, h = r; a < h.length; a++) {
                    var c = h[a];
                    u.push(this.Zd(c));
                }
                i = {
                    arrayValue: {
                        values: u
                    }
                };
            } else i = this.Zd(r);
        } else s !== Ot.IN && s !== Ot.ARRAY_CONTAINS_ANY || this.Xd(r, s), i = this.firestore.Cd.Xo("Query.where", r, 
        // We only allow nested arrays for IN queries.
        /** allowArrays = */ s === Ot.IN);
        var f = Ut.create(o, s, i);
        return this.tf(f), new t(this.Yd.De(f), this.firestore, this.xd);
    }, t.prototype.orderBy = function(e, n) {
        var r;
        if (nn("Query.orderBy", arguments, 1, 2), on("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = Gt.ASCENDING; else {
            if ("desc" !== n) throw new A$1(b.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = Gt.DESCENDING;
        }
        if (null !== this.Yd.startAt) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.Yd.endAt) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var i = jn("Query.orderBy", e), o = new zt(i, r);
        return this.ef(o), new t(this.Yd.Fe(o), this.firestore, this.xd);
    }, t.prototype.limit = function(e) {
        return tn("Query.limit", arguments, 1), rn("Query.limit", "number", 1, e), yn("Query.limit", 1, e), 
        new t(this.Yd.Ne(e), this.firestore, this.xd);
    }, t.prototype.limitToLast = function(e) {
        return tn("Query.limitToLast", arguments, 1), rn("Query.limitToLast", "number", 1, e), 
        yn("Query.limitToLast", 1, e), new t(this.Yd.ke(e), this.firestore, this.xd);
    }, t.prototype.startAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        en("Query.startAt", arguments, 1);
        var i = this.sf("Query.startAt", e, n, 
        /*before=*/ !0);
        return new t(this.Yd.Le(i), this.firestore, this.xd);
    }, t.prototype.startAfter = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        en("Query.startAfter", arguments, 1);
        var i = this.sf("Query.startAfter", e, n, 
        /*before=*/ !1);
        return new t(this.Yd.Le(i), this.firestore, this.xd);
    }, t.prototype.endBefore = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        en("Query.endBefore", arguments, 1);
        var i = this.sf("Query.endBefore", e, n, 
        /*before=*/ !0);
        return new t(this.Yd.$e(i), this.firestore, this.xd);
    }, t.prototype.endAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        en("Query.endAt", arguments, 1);
        var i = this.sf("Query.endAt", e, n, 
        /*before=*/ !1);
        return new t(this.Yd.$e(i), this.firestore, this.xd);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw dn("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && this.Yd.isEqual(e.Yd);
    }, t.prototype.withConverter = function(e) {
        return new t(this.Yd, this.firestore, e);
    }, 
    /** Helper function to create a bound from a document or fields */ t.prototype.sf = function(t, e, n, r) {
        if (ln(t, 1, e), e instanceof Or) {
            if (n.length > 0) throw new A$1(b.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
            var i = e;
            if (!i.exists) throw new A$1(b.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
            return this.if(i.Kd, r);
        }
        var o = [ e ].concat(n);
        return this.nf(t, o, r);
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype.if = function(t, e) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var n = [], r = 0, i = this.Yd.orderBy; r < i.length; r++) {
            var o = i[r];
            if (o.field.Y()) n.push(it(this.firestore.Id, t.key)); else {
                var s = t.field(o.field);
                if (H$1(s)) throw new A$1(b.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + o.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === s) {
                    var u = o.field.G();
                    throw new A$1(b.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.");
                }
                n.push(s);
            }
        }
        return new Bt(n, e);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.nf = function(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.Yd.Ve;
        if (e.length > r.length) throw new A$1(b.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (r[o].field.Y()) {
                if ("string" != typeof s) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.Yd.He() && -1 !== s.indexOf("/")) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var u = this.Yd.path.child(V$1.K(s));
                if (!U$1.st(u)) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                var a = new U$1(u);
                i.push(it(this.firestore.Id, a));
            } else {
                var h = this.firestore.Cd.Xo(t, s);
                i.push(h);
            }
        }
        return new Bt(i, n);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        nn("Query.onSnapshot", arguments, 1, 4);
        var n, r = {}, i = 0;
        return "object" != typeof t[i] || Ir(t[i]) || (pn("Query.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        un("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++), Ir(t[i]) ? n = t[i] : (rn("Query.onSnapshot", "function", i, t[i]), on("Query.onSnapshot", "function", i + 1, t[i + 1]), 
        on("Query.onSnapshot", "function", i + 2, t[i + 2]), n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.rf(this.Yd), this.Gd(r, n);
    }, t.prototype.Gd = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Nr({
            next: function(t) {
                e.next && e.next(new qr(n.firestore, n.Yd, t, n.xd));
            },
            error: r
        }), o = this.firestore.Vd(), s = o.listen(this.Yd, i, t);
        return function() {
            i._d(), o.$u(s);
        };
    }, t.prototype.rf = function(t) {
        if (t.Ge() && 0 === t.Ve.length) throw new A$1(b.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }, t.prototype.get = function(t) {
        var e = this;
        return nn("Query.get", arguments, 0, 1), Gr("Query.get", t), this.rf(this.Yd), new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.Vd().ud(e.Yd).then((function(t) {
                n(new qr(e.firestore, e.Yd, t, e.xd));
            }), r) : e.zd(n, r, t);
        }));
    }, t.prototype.zd = function(t, e, n) {
        var r = this.Gd({
            includeMetadataChanges: !0,
            ql: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), i.metadata.fromCache && n && "server" === n.source ? e(new A$1(b.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(i);
            },
            error: e
        });
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.Zd = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.Yd.He() && -1 !== t.indexOf("/")) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var e = this.Yd.path.child(V$1.K(t));
            if (!U$1.st(e)) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
            return it(this.firestore.Id, new U$1(e));
        }
        if (t instanceof Vr) {
            var n = t;
            return it(this.firestore.Id, n.Od);
        }
        throw new A$1(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + fn(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.Xd = function(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new A$1(b.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new A$1(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new A$1(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new A$1(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.tf = function(t) {
        if (t instanceof Ut) {
            var e = [ Ot.ARRAY_CONTAINS, Ot.ARRAY_CONTAINS_ANY ], n = [ Ot.IN, Ot.ARRAY_CONTAINS_ANY ], r = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.ze()) {
                var o = this.Yd.Se();
                if (null !== o && !o.isEqual(t.field)) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                var s = this.Yd.Ce();
                null !== s && this.hf(t.field, s);
            } else if (i || r) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var u = null;
                if (i && (u = this.Yd.Ke(n)), null === u && r && (u = this.Yd.Ke(e)), null != u) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw u === t.op ? new A$1(b.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new A$1(b.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
            }
        }
    }, t.prototype.ef = function(t) {
        if (null === this.Yd.Ce()) {
            // This is the first order by. It must match any inequality.
            var e = this.Yd.Se();
            null !== e && this.hf(e, t.field);
        }
    }, t.prototype.hf = function(t, e) {
        if (!e.isEqual(t)) throw new A$1(b.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
    }, t;
}(), qr = /** @class */ function() {
    function t(t, e, n, r) {
        this.qd = t, this.af = e, this.uf = n, this.xd = r, this.cf = null, this.lf = null, 
        this.metadata = new Lr(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.uf.docs.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.uf.docs.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        nn("QuerySnapshot.forEach", arguments, 1, 2), rn("QuerySnapshot.forEach", "function", 1, t), 
        this.uf.docs.forEach((function(r) {
            t.call(e, n._f(r));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new Cr(this.af, this.qd, this.xd);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (pn("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), un("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.uf.ds) throw new A$1(b.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.cf && this.lf === e || (this.cf = 
        /**
     * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
     *
     * Exported for testing.
     */
        function(t, e, n, r) {
            if (n.cs.q()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var i = 0;
                return n.docChanges.map((function(e) {
                    var o = new Ur(t, e.doc.key, e.doc, n.fromCache, n.ls.has(e.doc.key), r);
                    return e.doc, {
                        type: "added",
                        doc: o,
                        oldIndex: -1,
                        newIndex: i++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var o = n.cs;
            return n.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var i = new Ur(t, e.doc.key, e.doc, n.fromCache, n.ls.has(e.doc.key), r), s = -1, u = -1;
                return 0 /* Added */ !== e.type && (s = o.indexOf(e.doc.key), o = o.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (u = (o = o.add(e.doc)).indexOf(e.doc.key)), {
                    type: jr(e.type),
                    doc: i,
                    oldIndex: s,
                    newIndex: u
                };
            }));
        }(this.qd, e, this.uf, this.xd), this.lf = e), this.cf;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw dn("isEqual", "QuerySnapshot", 1, e);
        return this.qd === e.qd && this.af.isEqual(e.af) && this.uf.isEqual(e.uf) && this.xd === e.xd;
    }, t.prototype._f = function(t) {
        return new Ur(this.qd, t.key, t, this.metadata.fromCache, this.uf.ls.has(t.key), this.xd);
    }, t;
}(), Mr = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, Lt.ve(t), n, r) || this).df = t, t.length % 2 != 1) throw new A$1(b.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.G() + " has " + t.length);
        return i;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Yd.path.U();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.Yd.path.O();
            return t.q() ? null : new Vr(new U$1(t), this.firestore);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Yd.path.G();
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.doc = function(t) {
        if (nn("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = Oe.Tn()), rn("CollectionReference.doc", "non-empty string", 1, t), 
        "" === t) throw new A$1(b.INVALID_ARGUMENT, "Document path must be a non-empty string");
        var e = V$1.K(t);
        return Vr.Md(this.Yd.path.child(e), this.firestore, this.xd);
    }, n.prototype.add = function(t) {
        tn("CollectionReference.add", arguments, 1), rn("CollectionReference.add", "object", 1, this.xd ? this.xd.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.df, this.firestore, t);
    }, n;
}(Cr);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function Pr(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (pn(t, e, [ "merge", "mergeFields" ]), un(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + fn(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new A$1(b.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + fn(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof Nn;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new A$1(b.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function xr(t, e) {
    return void 0 === e ? {} : (pn(t, e, [ "serverTimestamps" ]), an(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Gr(t, e) {
    on(t, "object", 1, e), e && (pn(t, e, [ "source" ]), an(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function Fr(t, e, n) {
    if (e instanceof Vr) {
        if (e.firestore !== n) throw new A$1(b.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw dn(t, "DocumentReference", 1, e);
}

function jr(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return Ve("Unknown change type: " + t);
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function Br(t, e, n) {
    var r;
    return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [ r, n ];
}

var zr = gn(Sr, "Use firebase.firestore() instead."), Qr = gn(Rr, "Use firebase.firestore().runTransaction() instead."), Hr = gn(Dr, "Use firebase.firestore().batch() instead."), Yr = gn(Vr, "Use firebase.firestore().doc() instead."), Wr = gn(Or), Jr = gn(Ur), Xr = gn(Cr), Kr = gn(qr), Zr = gn(Mr, "Use firebase.firestore().collection() instead."), $r = {
    Firestore: zr,
    GeoPoint: Ln,
    Timestamp: S$1,
    Blob: An,
    Transaction: Qr,
    WriteBatch: Hr,
    DocumentReference: Yr,
    DocumentSnapshot: Wr,
    Query: Xr,
    QueryDocumentSnapshot: Jr,
    QuerySnapshot: Kr,
    CollectionReference: Zr,
    FieldPath: Nn,
    FieldValue: Vn,
    setLogLevel: Sr.setLogLevel,
    CACHE_SIZE_UNLIMITED: _r
}, ti = /** @class */ function() {
    function t() {}
    return t.prototype.mu = function(t) {
        // No-op.
    }, t.prototype.ku = function() {
        // No-op.
    }, t;
}(), ei = /** @class */ function() {
    function t() {
        var t = this;
        this.ff = function() {
            return t.wf();
        }, this.Tf = function() {
            return t.mf();
        }, this.Ef = [], this.Rf();
    }
    return t.prototype.mu = function(t) {
        this.Ef.push(t);
    }, t.prototype.ku = function() {
        window.removeEventListener("online", this.ff), window.removeEventListener("offline", this.Tf);
    }, t.prototype.Rf = function() {
        window.addEventListener("online", this.ff), window.addEventListener("offline", this.Tf);
    }, t.prototype.wf = function() {
        Se("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.Ef; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.mf = function() {
        Se("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.Ef; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.If = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), ni = /** @class */ function() {
    function t(t) {
        this.Af = t.Af, this.Pf = t.Pf;
    }
    return t.prototype.Na = function(t) {
        this.Vf = t;
    }, t.prototype.va = function(t) {
        this.pf = t;
    }, t.prototype.onMessage = function(t) {
        this.gf = t;
    }, t.prototype.close = function() {
        this.Pf();
    }, t.prototype.send = function(t) {
        this.Af(t);
    }, t.prototype.yf = function() {
        this.Vf();
    }, t.prototype.bf = function(t) {
        this.pf(t);
    }, t.prototype.vf = function(t) {
        this.gf(t);
    }, t;
}(), ri = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, ii = "gl-js/ fire/" + w$1, oi = /** @class */ function() {
    function t(t) {
        this.ci = t.ci;
        var e = t.ssl ? "https" : "http";
        this.Sf = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.Cf = function(t, e) {
        if (e) for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
        t["X-Goog-Api-Client"] = ii;
    }, t.prototype.Ga = function(t, e, n) {
        var r = this, i = this.Df(t);
        return new Promise((function(o, s) {
            var u = new tmp_5;
            u.listenOnce(tmp_3.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case tmp_2.NO_ERROR:
                        var e = u.getResponseJson();
                        Se("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case tmp_2.TIMEOUT:
                        Se("Connection", 'RPC "' + t + '" timed out'), s(new A$1(b.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case tmp_2.HTTP_ERROR:
                        var n = u.getStatus();
                        if (Se("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var i = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(b).indexOf(e) >= 0 ? e : b.UNKNOWN;
                                }(r.status);
                                s(new A$1(i, r.message));
                            } else s(new A$1(b.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        Se("Connection", 'RPC "' + t + '" failed'), s(new A$1(b.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        Ve('RPC "' + t + '" failed with unanticipated webchannel error ' + u.getLastErrorCode() + ": " + u.getLastError() + ", giving up.");
                    }
                } finally {
                    Se("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var a = Object.assign({}, e);
            delete a.database;
            var h = JSON.stringify(a);
            Se("Connection", "XHR sending: ", i + " " + h);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var c = {
                "Content-Type": "text/plain"
            };
            r.Cf(c, n), u.send(i, "POST", h, c, 15);
        }));
    }, t.prototype.Ka = function(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Ga(t, e, n);
    }, t.prototype.ka = function(t, e) {
        var n = [ this.Sf, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], r = tmp_1(), i = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.ci.projectId + "/databases/" + this.ci.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.Cf(i.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        util.isMobileCordova() || util.isReactNative() || util.isElectron() || util.isIE() || util.isUWP() || util.isBrowserExtension() || (i.httpHeadersOverwriteParam = "$httpHeaders");
        var o = n.join("");
        Se("Connection", "Creating WebChannel: " + o + " " + i);
        var s = r.createWebChannel(o, i), p = !1, d = !1, y = new ni({
            Af: function(t) {
                d ? Se("Connection", "Not sending because WebChannel is closed:", t) : (p || (Se("Connection", "Opening WebChannel transport."), 
                s.open(), p = !0), Se("Connection", "WebChannel sending:", t), s.send(t));
            },
            Pf: function() {
                return s.close();
            }
        }), v = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            s.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return v(tmp_4.EventType.OPEN, (function() {
            d || Se("Connection", "WebChannel transport opened.");
        })), v(tmp_4.EventType.CLOSE, (function() {
            d || (d = !0, Se("Connection", "WebChannel transport closed"), y.bf());
        })), v(tmp_4.EventType.ERROR, (function(t) {
            d || (d = !0, Se("Connection", "WebChannel transport errored:", t), y.bf(new A$1(b.UNAVAILABLE, "The operation could not be completed")));
        })), v(tmp_4.EventType.MESSAGE, (function(t) {
            var e;
            if (!d) {
                var n = t.data[0];
                Le(!!n, "Got a webchannel message without data.");
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    Se("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, u = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = Ft[t];
                        if (void 0 !== e) return Xt(e);
                    }(o), a = i.message;
                    void 0 === u && (u = b.INTERNAL, a = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    d = !0, y.bf(new A$1(u, a)), s.close();
                } else Se("Connection", "WebChannel received:", n), y.vf(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            y.yf();
        }), 0), y;
    }, 
    // visible for testing
    t.prototype.Df = function(t) {
        var e = ri[t];
        return this.Sf + "/v1/projects/" + this.ci.projectId + "/databases/" + this.ci.database + "/documents:" + e;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the memory-only Firestore build with the components framework.
 */
function si(t) {
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
    !function(t, e) {
        t.INTERNAL.registerComponent(new Component("firestore", (function(t) {
            return function(t, e) {
                return new Sr(t, e, new br);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, $r)));
    }(t), t.registerVersion("@firebase/firestore", "1.14.1");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */
Ie.fn(new (/** @class */ function() {
    function t() {
        this.di = !0, this.yo = "undefined" != typeof atob;
    }
    return Object.defineProperty(t.prototype, "document", {
        get: function() {
            return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
        get: function() {
            return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.td = function(t) {
        return Promise.resolve(new oi(t));
    }, t.prototype.J_ = function() {
        return ei.If() ? new ei : new ti;
    }, t.prototype.ed = function(t) {
        return new Ae(t, {
            di: !0
        });
    }, t.prototype.wn = function(t) {
        return JSON.stringify(t);
    }, t.prototype.atob = function(t) {
        return atob(t);
    }, t.prototype.btoa = function(t) {
        return btoa(t);
    }, t;
}())), si(i);
//# sourceMappingURL=index.node.cjs.js.map
