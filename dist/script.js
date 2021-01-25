/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function (headActive = "accordion-head--active", contentActive = "accordion-content--active", paddings = 40) {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion .accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

 //data-slide-to - позволяет ориентироваться к какому слайду перемещаться при клике на элемент

/**
 * метод carousel - работает с уже готовой html версткой.Отвечает за функциональность слайдера.
 * @param {*} auto 
 * @param {*} autoTime 
 */

_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.carousel = function (auto = false, autoTime = 3000) {
  for (let i = 0; i < this.length; i++) {
    //получаем ширину окна показа слайдов carousel-inner
    let width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
        slides = this[i].querySelectorAll('.carousel-item'),
        // сами слайды
    slidesField = this[i].querySelector('.carousel-slides'),
        // получаем блок который содержит в себе все слайды
    dots = this[i].querySelectorAll('.carousel-indicators li'); //получаем точки на странице

    slidesField.style.width = 100 * slides.length + '%'; //высчитываем ширину окна где будут распологаться слайды

    slides.forEach(slide => {
      slide.style.width = width; //устанавливаем всем слайдам одинаковую ширину
    });
    let offset = 0; //отслеживает какой слайд активный, и на сколько смещать slidesField

    let slideIndex = 0; //отслеживает точки

    let paused; //исп для автозапуска слайдера

    Object(_core__WEBPACK_IMPORTED_MODULE_1__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      //привязываем событие клика кнопке next
      e.preventDefault(); //проверяем граничные условия,
      //если текущий слайд последний то внутри offset должно хранится полная ширина блока со слайдами

      if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0; //устанавливаем offset в первый слайд
      } else {
        offset += +width.replace(/\D/g, ''); //добавляем к offset ширину одного слайда
      }

      slidesField.style.transform = `translateX(-${offset}px)`; //передвигаем слайды
      //работа с точками

      if (slideIndex == slides.length - 1) {
        //если у нас последний слайд и нажата кнопка next,переключаем слай-индекс на 1 слайд
        slideIndex = 0;
      } else {
        //показываем следующий слайд
        slideIndex++;
      } //работаем с классом active у точек


      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_1__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault(); //если у нас 1 слайд и нажата клавиша prev показываем последний слайд иначе показываем пред слайд

      if (offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`; //передвигаем слайдов
      //работа с точками 

      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      } // работа с классом active у точек


      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    }); //работа с нажатием на точки 

    let sliderId = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_1__["default"])(`#${sliderId} .carousel-indicators li`).click(e => {
      //привязываем событие клика, на точки
      let slideTo = e.target.getAttribute('data-slide-to'); //узнаем какой слайд нужно показать

      slideIndex = slideTo; //уст в слайд индекс нужный слайд

      offset = +width.replace(/\D/g, '') * slideIndex;
      slidesField.style.transform = `translateX(-${offset}px)`; //сдвигаем слайдер
      //класс активности точек

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    }); //работа с автопереключением слайдов

    let _autoPlay = () => {
      paused = setInterval(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_1__["default"])(this[i].querySelector('[data-slide="next"]')).click();
      }, autoTime);
    };

    if (auto) {
      _autoPlay(); //остановка автопереключения при наведении


      this[i].addEventListener('mouseenter', () => clearInterval(paused));
      this[i].addEventListener('mouseleave', () => _autoPlay());
    }
  }
}; // $('.carousel').carousel();

/**
 * createCarousel - метод, который создает слайдер на странице, через js;
 * @param {Object} Object с настрйоками, где sliderId - уникальный айди слайдера,
 * count - счетчик слайдов, settings матрица - содержащая в себе ссылку на картинку, и ее alt;
 * auto - нужно ли автопереключение слайдов, autoTime - время переключения слайдов.
 * {    
 *      sliderId,
 *      count: 3,
 *      auto = true,
 *      autoTime = 3000,
 *      settings[
 *          [
 *              "https://example.jpg",
 *              "img1"
 *          ],
 *          [
 *              "https://example1.jpg",
 *              "img2"
 *          ]
 *      ]
 * }
 */


_core__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.createCarousel = function ({
  sliderId,
  count,
  auto,
  autoTime,
  settings
} = {}) {
  for (let i = 0; i < this.length; i++) {
    let carousel = document.createElement('div');
    carousel.classList.add('carousel', 'mt-20');
    carousel.setAttribute(`id`, `${sliderId}`);
    carousel.innerHTML += `
                <ol class="carousel-indicators">
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-slides">
                    </div>
                </div>
                <a href="#" class="carousel-prev" data-slide="prev">
                    <span class="carousel-prev-icon">&lt;</span>
                </a>
                <a href="#" class="carousel-next" data-slide="next">
                    <span class="carousel-next-icon">&gt;</span>
                </a>
            `;
    this[i].append(carousel);

    for (let j = 0; j < count; j++) {
      let [src, alt] = settings[j]; //работа с точками

      this[i].querySelector('ol').innerHTML += `
                <li data-slide-to="${j}"></li>
            `;

      if (j == 0) {
        this[i].querySelector('ol li').classList.add('active');
      } //работа со слайдами


      this[i].querySelector('.carousel-inner .carousel-slides').innerHTML += `
                <div class="carousel-item">
                    <img src="${src}" alt="${alt}">
                </div>
            `;
    }

    Object(_core__WEBPACK_IMPORTED_MODULE_1__["default"])(carousel).carousel(auto, autoTime);
  }
};

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * dropdown - 
 * что бы не вазникло бага с двойным тоглом, нужно при создании кнопок через js, не захватывать остальные кнопки
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    let id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * методу Modal необходим триггер для вызова модального окна.
 * для этого понадобится атрибут data-toggle="modal" что бы правильно инициализировать этот триггер,
 * data-ratget="#" - необходим для указания, какое именно модальное окно нужно вызвать.
 * @param {boolean} - отвечает за то, создано ли модальное окно программно, или нет. необязательный парамет.
 * @example
 * <a href="#" class=btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  function _calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  let scroll = _calcScroll();

  for (let i = 0; i < this.length; i++) {
    let target = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target'); //target = #examplemodal

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';

      if (document.body.offsetHeight > document.documentElement.clientHeight) {
        //если полоса прокрутки есть на странице, то добавляем отступ, иначе страница будет дергаться
        document.body.style.marginRight = `${scroll}px`;
      }
    });
    let closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500, () => {
          //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;

          if (created) {
            document.querySelector(target).remove();
          }
        });
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500, () => {
          //при закрытии модалки, убираем отступ и отображаем полосу прокрутки
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;

          if (created) {
            document.querySelector(target).remove();
          }
        });
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();
/**
 * createModal это метод, который вызывается на определенных элементах,
 * и привязывает определенное модальное окно к этому триггеру.
 * Чаще всего createModal вызывается после того, как пользователь кликнул на какой то элемент.
 * @param {Object} {} - содержит в себе text{
 * text - содержит title для модального окна, и body - текст который будет расположен в модальном окне
 *  title: "some text",
 *  body:   "some text"
 * } и button {
 * содержит количество кнопок, которые мы хотим поместить и их настройки :
 * count: number,
 * settings:[
 *      [
 *          'text'- текст кнопки,
 *          ['',''] - массив содержащий классы стилей
 *          true/false - значение boolean - которая отвечает за то, будет ли кнопка закрывать модальное окно или нет
 *          ()=>{} - колбек функция при надобности
 *      ] 
 * ]
 * }
 *  
 * @example
 * $('#trigger').click(()=>$('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officiis. Provident reiciendis odio error et corrupti, pariatur adipisci eligendi magnam ullam sapiente fugit culpa laborum nulla rerum possimus sed asperiores?'
    },
    btns:{
        count: 3,
        settings:[
            [
                'close',    
                ['btn-danger','mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                ()=>{
                    alert('Данные сохранены');
                }
            ],
            [
                'another button',
                ['btn-warning','ml-10'],
                false,
                ()=>{
                    alert('Hello World');
                }
            ]
        ]
    }
}));
 * 
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  //создаем модальные окна при помощи js
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div'); //modal - оболочка для модульного окна

    modal.classList.add('modal');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).setAttr('id', Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target').slice(1)); //устанавливаем id, берем его из 
    //текущего перебераемого элемента, и вырезаем # т.к. он выглядит как #example
    //btns = {count : num, settings: [[text, classNames=[],close,cb]]}
    //обработка кнопок которые будут в модальном окне

    let buttons = []; //количество кнопок базирует на переданном атрибуте count 

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      let [text, className, close, cb] = btns.settings[j]; //стилизируем кнопки, j - определяет какую кнопку мы сейчас настраиваем, classNames - это
      //массив по этому можно использовать spread оператор для превращения его, в элементы для classList

      btn.classList.add('btn', ...className); //устанавливаем текст внутри этой кнопке, берем из переданных данных

      btn.textContent = text; //необходимо узнать будет ли эта кнопка закрывать модальное окно

      if (close) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).setAttr('data-close', 'true');
      }

      if (btns.cb && typeof cb === 'function') {
        btn.addEventListener('click', cb);
      }

      buttons.push(btn);
    } //наполняем модальное окно контентом, данные берем из переданных при вызове метода 


    modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `; //т.к. в футер просто так массив вставить нельзя, можно перебрать массив превратить каждую ноду в текст,
    //и вставить ее в качестве обычного html, этот метод выведет кнопки на экран, но потеряет коллбэк, ведь мы будем
    //трансформировать ноду в страку, а там коллбэк ищезнет, по этому лучше использовать другой способ:
    //используя метод append

    modal.querySelector(".modal-footer").append(...buttons); //получаем футер на странице, и помещаем с помощью
    //spread оператора кнопки

    document.body.appendChild(modal); //помещаем modal на страницу
    // исправление бага с кучей окон

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true); //привязываем триггер к новосозданному модальному окну

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target')).fadeIn(500); //вызываем модальное окно на странице
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * tab - метод для работы с табами на странице. У табов должны быть item или меню, на которое
 * мы будем нажимать, контекст, который содержит информацию в зависимости от нажатого item
 * data-tabpanel необходимый атрибут по которому находим итемы на странице.
 * @example
 * пример html верстки.
 * tab-item--active - отвечает за нажатый в данный момент item
 * tab-content--active - показанный в данный момент контент
 *  <div class="tab mt-20 block-center">
 *      <div class="tab-panel" data-tabpanel>
 *          <div class="tab-item tab-item--active">Content 1</div>
 *          <div class="tab-item">Content 2</div>
 *      </div>
 *      <div class="tab-content tab-content--active">
 *          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 *      </div>
 *      <div class="tab-content">
 *          Lorem ipsum dolor sit amet consectetur 
 *      </div>
 *  </div>
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    //навешиваем событие click на item
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active') //при нажатии на item делаем его активным, добавляем класс active
      .siblings() //получаем соседей без нажатого элемента
      .removeClass('tab-item--active') //удаляем у них класс активности
      .closest('.tab') //ищем общего родителя
      .find('.tab-content') //внутри родителя ищем все элементы содержащие какой-то контент
      .removeClass('tab-content--active') //убираем все классы активности у контента
      //необходимо узнать номер того элеменка в который мы кликнули в табах и эту цифру передать дальше
      .eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()) //ищем номер элемента по порядку, на котором произошло событие
      //this[i] - эл-т на который кликнул пользователь. Т.е.среди эл-то tab-content используем элемент,по 
      //опр номеру, и передаем его в метод eq
      .addClass('tab-content--active'); //добавляем класс активности нужному
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @param {selector} selector - css селектор 
 * @returns {Object} - объект, содержащий найденную колекцию
 * @example 
 * $('div');
 * //=> {0: div.container, 1: div.wrap length: 2}
 */
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //{}
  } //Необходимо проверить не является ли selector html элементом, если он является нодой, 
  //то записываем эту ноду в объект


  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this; // что бы не выполнялся дальнейший код,который работает с псевдо массивами
  } // если передан css selector, то работаем с псевдо массивом


  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype; // записываем в прототип объекта который будет возвращаться из функции init прототип главной функции

window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");
/**
 * lib добавляет в функцию $ различные методы
 */













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод html - принимает в себя какой то content, который мы хотим поместить во внутрь элемента
 * имеет двойной функционал:
 * 1. если content передан, тогда мы замещаем контент
 * 2. иначе, получаем содержимое этого элемента на странице
 * @param {*} content 
 * @returns Object или содержимое элемента на странице, если получено содержимое, то работать по цепочке,
 *  уже будет невозможно
 * @example
 * $('button').html());
 * //=> какой то текст из кнопки
 * 
 * $('button').html('hello');
 * //=> {0: button, length: 1}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};
/**
 * Метод eq - получает определенный элемент по номеру.
 * @param {*} i - номер необходимого элемента из выборки, нумерация нач с 0
 * @returns Object
 * @example
 * $('div').eq(2).addClass('active');
 * //=> {}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  return Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]); // let swap = this[i],
  //     objLength = Object.keys(this).length;
  // for(let i = 0; i < objLength; i++){
  //     delete this[i];
  // }
  // this[0] = swap;
  // this.length = 1;
  // return this;
};
/**
 * Метод index - используется на одном элементе. Получает номер элемента по
 * порядку, среди тех элементов, которые имеют общего родителя.
 * т.е. узнает какой элемент по порядку, среди своих сверстников, элементов 
 * которые подходят по тому же селектору и имеют общего родителя
 * @returns {number}
 * @example
 * $(div).click(function(){
 *      console.log($(this).index());
 * })
 * //=> 2 - номер нажатого div по порядку
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  let parent = this[0].parentNode,
      childs = [...parent.children]; //превращаем псевдо массив в массив
  //parent получает родителя
  //childs - содержит всех детей родителя

  let findMyIndex = item => {
    //в перебираемсых items ищем нужный нам
    return item == this[0];
  };

  return childs.findIndex(findMyIndex); //когда функция вернет true, то findIndex вернет номер этого эл-та 
};
/**
 * Метод find - находит определенные элементы по селектору, внутри уже найденных
 * @param {*} selector 
 * @returns Object - который сод. найд элементы по селектору
 * @example
 * $('div').eq(2).find('.active');
 * //=> {0: div.active, 1: div.active, length:2}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; //общее количество найденных элеменетов

  let copy = Object.assign({}, this); // что бы избежать багов делаем копию

  let counter = 0; //количество новых записанных элементов в this

  for (let i = 0; i < copy.length; i++) {
    let arr = copy[i].querySelectorAll(selector); //если не одного элемента arr не найдено

    if (arr.length == 0) {
      continue;
    } // если элементы найдены, то перезаписываем их в главный объект this
    //начиная с 0


    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems; // Обновляем количество элементов в главном объекте

  let objLength = Object.keys(this).length; //узнаем кол-во элементов в главном объекте
  //Необходимо удалить свойства, которые не были перезаписаны

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
/**
 * метод closest - ищет ближайший родительский элемент (или сам элемент), 
 * который соответствует заданному CSS-селектору, для всех элементов объекта из $() 
 * @param {*} selector 
 * @returns Object
 * @example
 * $('.some').closest('.find');
 * //=> {0: div.find, 1:div.find, length: 2}
 * 
 * $('.some').closest('.findqw');
 * //=>{0: empty, 1: empty, length: 2}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) === null) {
      this[i] = 'empty';
      counter++;
    } else {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }

  let objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};
/**
 * Метод siblings - получает все соседние элементы, не включая сам элемент
 * @returns Object - содержащий все соседние элементы
 * @example 
 * $('.some').eq(0).siblings());
 * //=> {0: div.some, 1: div.some length: 2}
 * 
 * $('.find').siblings());
 * //=>{0: div, 2: div.active, length: 2};
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let counter = 0,
      numbersOfItems = 0,
      copy = Object.assign({}, this);

  for (let i = 0; i < this.length; i++) {
    let arr = copy[i].parentNode.children; // получаем всех детей родителя

    for (let j = 0; j < arr.length; j++) {
      if (copy[i] === arr[j]) {
        continue; //исключаем из выборки copy[i] элемент чьих соседей мы искали
      }

      this[counter] = arr[j];
      counter++;
    }

    numbersOfItems += arr.length - 1; //- 1 т.к. мы убрали элемент из выборки
  }

  this.length = numbersOfItems;
  let objLength = Object.keys(this).length;

  for (; numbersOfItems < objLength; numbersOfItems++) {
    delete this[numbersOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод - setAttr устанавливает атрибут, каждому элементу из $()
 * @param {string} name 
 * @param {*} value 
 * @returns Object - с объектом можно работать дальше
 * @example 
 * $('button').setAttr("disabled", "disabled");
 * //=> {0: button, length: 1}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    //если перебераемый элемент, имеет свойство hasAttribute, устанавливаем ему атрибут
    if (this[i].hasAttribute) {
      this[i].setAttribute(name, value);
    }
  }

  return this;
};
/**
 * метод getAttr проверяет есть ли атрибут у элементов из $()
 * Подумать над этим методом!!!!!!!!!!!!!
 * @param {string} attrName 
 * @returns {string} - id
 * @example 
 * $('button').getAttr('disabled');
 * //=> disabled или null
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (attrName) {
  //возвращает id для одного элемента
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute) {
      return this[i].getAttribute(attrName);
    }
  }
}; // $.prototype.getAttr = function(attrName){
//     //возвращает объект с id если они имеются
//     for(let i = 0; i < this.length; i++){
//         if(this[i].hasAttribute){
//             this[i] = this[i].getAttribute(attrName);
//         }
//     }
//     return this;
// };
// результат для этого варианта//=> {0: null, 1: disabled, length: 2}

/**
 * Метод removeAttr удаляет переданный в него атрибут из всех элементов ${}
 * @param {*} attrName 
 * @returns Object с объектом можно работать дальше
 * @example
 * $('button').removeAttr('disabled');
 * //=>{0:button, 1:button, length: 2}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute) {
      this[i].removeAttribute(attrName);
    }
  }

  return this;
};
/**
 * Метод toggleAttr принимает имя атрибуда и его значение, и проверяет элементы объекта $(), если они уже содержат 
 * переданный атрибут, то удаляет его, если нет, то добавляет
 * @param {*} attrName 
 * @param {*} value 
 * @returns Object - c которым можно работать дальше
 * @example
 * $('button').toggleAttr('disabled','disabled');
 * //{0:button, 1:button, length: 2}
 */
//toggle с уст. значения value


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (attrName, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute) {
      if (this[i].hasAttribute(attrName)) {
        this[i].removeAttribute(attrName);
      } else {
        this[i].setAttribute(attrName, value);
      }
    }
  }

  return this;
}; //toggle without value
// $.prototype.toggleAttr = function (attrName){
//     for(let i = 0; i < this.length; i++){
//         if(this[i].toggleAttribute){
//             this[i].toggleAttribute(attrName);
//         }
//     }
//     return this;
// };

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод addClass добавляет классы к элементам из $()
 * @param  {...any} classes 
 * @returns Object - с уже добавленными классами к элементам 
 * @example
 * $('.btn').addClass('red','blue','green');
 * //=>{0:button.btn.red.blue.green, length: 1}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.add(...classes);
    }
  }

  return this;
};
/**
 * Метод - removeClass удаляет классы у элементов из $()
 * @param  {...any} classes 
 * @returns Object - с элементами, без удаленных классов
 * @example
 * $('.btn').removeClass('red','blue','green');
 * //=>{0:button.btn, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...classes);
    }
  }

  return this;
};
/**
 * Метод toggleClass проверяет, если переданный класс у элемента присутствует,
 * то удаляет его, иначе добавляет
 * @param {*} classes 
 * @returns Object - c элементами, без удаленных или с добавленными классами
 * @example
 * $('.btn-dark').toggleClass('red');
 * //=> {0:button.btn.red, length: 1}
 * или, если класс уже был
 * //=> {0:button.btn, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.toggle(classes);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * show - метод, который перебирает элементы в $() и отображает их на экране
 * 
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    //если, у элемента, нету свойства style, то пропускаем итерацию
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = '';
    }
  } //возвращаем this, чтобы с этим объектом, можно было работать дальше по цепочке chaining


  return this;
};
/**
 * hide - метод, который перебирает элементы в $() и скрывает их.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};
/**
 * toggle - метод, переключающий состояние элемента, из скрытого в отображаемый и наоборот
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * метод animateOverTime - техническая функция,отвечающая за анимацию
 * @param {number} dur - как долго будет выполнятся анимация
 * @param {function} cb -коллбэк функция, необязательный параметр
 * @param {*} fin - функция которая запускается после того как анимация закончилась
 * необязательный параметр
 * @returns {function} _animateOverTime;
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart; // алгоритм работы requestAnimationFrame необх создать функцию, которая будет запускаться
  //до определенного условия, если условие не выполняется, анимация прекращается,
  //вычисляем начало анимации, и сравниваем с временем переданным как аргумент

  function _animateOverTime(time) {
    //_animateOverTime - техническая функция для requestAnimationFrame
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart; // вычисляем сколько времени прошлоб(прогресс)

    let complection = Math.min(timeElapsed / dur, 1); //отвечает за изменение параметров на странице

    cb(complection); //вызываем коллбэк

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};
/**
 * метод fadeIn - добавляет элементам эффект появления
 * @param {*} dur  - обязательный аргумент, время
 * @param {*} display 
 * @param {*} fin 
 * @return Object
 * @example
 * $('.butt').fadeIn(2000);
 * //=> {0: button.butt, length : 1};
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display = 'block', fin) {
  for (let i = 0; i < this.length; i++) {
    //нужно убедится, что элемент показан на странице
    this[i].style.display = display;

    let _fadeIn = complection => {
      //техническая функция, при запуске принимает complection
      //и изменяет opacity от 0 до 1
      this[i].style.opacity = complection;
    };

    let ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};
/**
 * метод fadeOut - добавляет элементам эффект исчезновения 
 * @param {*} dur 
 * @param {*} fin 
 * @return Object
 * @example
 * $('.butt').fadeOut(2000);
 * //=> {0: button.butt, length : 1};
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    let _fadeOut = complection => {
      this[i].style.opacity = 1 - complection; //уменьшаем opacity

      if (complection === 1) {
        //если opacity - 0, скрываем элемент со страницы
        this[i].style.display = 'none';
      }
    };

    let ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};
/**
 * метод fadeToggle - определяет, нам нужно показать или скрыть элемент, и делает это.
 * @param {*} dur - обязательный параметр
 * @param {*} display 
 * @param {*} fin 
 * @returns Object
 * @example
 * $('.active').fadeToggle(1800);
 * //=> {0: button.active, 1: button.active, length: 2}
 * 
 * $('.btn-dark').on('click',function(){
 *  $(this).fadeToggle(1000);
 * });
 * //=> {0: button.btn-dark, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    //сейчас мы не можем на прямую проверить инлайн стили,т.к. в верстке обычно используются
    //не инлайн стили,а стили прописаные в css. По этому можно использовать getComputedStyle
    if (window.getComputedStyle(this[i]).display === 'none') {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(dur, display, fin);
    } else {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(dur, fin);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * Метод on - добавляет обработчики событий к элементам в $(), принимает в себя название события и callback-функцию
 * @param {*} eventName 
 * @param {*} callback 
 * @returns Object 
 * @example
 * $('.btn-dark').on('click',()=>{
 *   alert('click');
 * });
 * //=> {0:button.btn-dark, length: 1}
 * или 
 * $('button').on('click', function(){
 *      $(this).toggleClass('active');
 * //this кнопка на которую нажали
 * //метод toggleClass не может работать с обычной кнопкой, ему нужен объект из $()
 * })
 * 
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  //методу необходимо два аргумента
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};
/**
 * Метод off - убирает обработчик события с элементов, что бы убрать событие,
 *  в него нужно передать строго то же самое событие
 * @param {*} eventName 
 * @param {*} callback 
 * @returns Object
 * @example
 * $('.btn-dark').on('click',sayHello);
 * function sayHello(){alert('Hello')}
 * $('.btn-dark').off('click',sayHello);
 * функция передаётся одна и таже, по этому мы сможем убрать обработчик
 * //=> {0:button.btn-dark, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  //методу необходимо два аргумента
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};
/**
 * Метод click - имеет двойной функционал:
 * 1.когда обработчик был передан, тогда на элемент навешивается событие клика
 * с выполнением переданной функции
 * 2.когда метод используется без передачи аргументов, 
 * тогда будет произведен клик по этому элементу
 * @param {*} handler
 * @returns Object
 * @example 
 * function sayHello(){alert('Hello')}
 * $('.btn-dark').click(sayHello);
 * или
 * $('.btn-dark').click(()=>{console.log('hello')});
 * результат:
 * //=>{0:button.btn-dark, length: 1}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/**
 * метод get - посылает get запросы на сервер.
 * @param {*} url - адрес сервера
 * @param {*} dataTypeAnswer - формат ожидаемого ответа от сервера
 * @example
 * $().get('https://jsonplaceholder.typicode.com/todos/1')
 * .then(json => console.log(json));
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url, dataTypeAnswer = 'json') {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'bloob':
      return await res.blob();
  }
};
/**
 * метод post - отправляет post запросы на сервер.
 * @param {*} url - адрес сервера
 * @param {*} data - тело запроса
 * @param {*} dataTypeAnswer - тип ожидаемого ответа от сервера.
 * @example
 * $().post('https://jsonplaceholder.typicode.com/todos/1','123')
 * .then(text => console.log(text));
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data, dataTypeAnswer = 'text') {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'bloob':
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap').html(`
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action#2</a>
            <a href="#" class="dropdown-item">Action#3</a>
        </div>
    </div>
    `);
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap .dropdown-toggle').dropdown();
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').click(() => Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, officiis. Provident reiciendis odio error et corrupti, pariatur adipisci eligendi magnam ullam sapiente fugit culpa laborum nulla rerum possimus sed asperiores?'
  },
  btns: {
    count: 3,
    settings: [['close', ['btn-danger', 'mr-10'], true], ['Save changes', ['btn-success'], false, () => {
      alert('Данные сохранены');
    }], ['another button', ['btn-warning', 'ml-10'], false, () => {
      alert('Hello World');
    }]]
  }
}));
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#slider').createCarousel({
  sliderId: "example",
  count: 3,
  settings: [["https://kg-portal.ru/img/81226/main.jpg", "img"], ["https://img.gazeta.ru/files3/850/13405850/dt-pic4_zoom-1500x1500-14067.jpg", "img"], ["https://thumbs.dfs.ivi.ru/storage6/contents/5/8/445ecda81cbf9301ff8461ce755142.jpg/234x360/", "img"]]
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#slider1').createCarousel({
  sliderId: "example1",
  count: 3,
  auto: true,
  settings: [["https://kg-portal.ru/img/81226/main.jpg", "img"], ["https://img.gazeta.ru/files3/850/13405850/dt-pic4_zoom-1500x1500-14067.jpg", "img"], ["https://thumbs.dfs.ivi.ru/storage6/contents/5/8/445ecda81cbf9301ff8461ce755142.jpg/234x360/", "img"]]
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])().post('https://jsonplaceholder.typicode.com/todos/1', '123').then(json => console.log(json));
{
  /* <button class="btn btn-danger" data-close>Close</button> */
}
{
  /* <button class="btn btn-success">Save changes</button> */
} // console.log($('.btn-dark').on('click',()=>{
//     console.log(this);
//     $(this).fadeToggle(1000);
// }));
// $('#first').on('click',()=>{
//     $('div').eq(1).fadeToggle(800);
// });
// $('[data-count="second"]').on('click',()=>{
//     $('div').eq(2).fadeToggle(800);
// });
// $('button').eq(2).on('click',()=>{
//     $('.w-500').fadeToggle(800);
// });
// $('button').on('click', function(){
//     $('div').eq(1).toggleClass('active');
// });
// $('img').setAttr('src','qweqweqe');
// $('img').on('click',function(){
//     $(this).toggleAttr('src','Den');
// });
// $('div').click(function(){
//     console.log($(this).index());
// });
// console.log($('div').find('.more'));
// console.log($('.some').closest('.findmeq').addClass('qweqw'));
// console.log($('.some').siblings()); - рассмотреть вариант когда искомый объект не один на странице
// console.log($('.some').siblings());
// $('.findme').fadeOut(1800); //анимация исчезновения
// setTimeout(()=>{$('.findme').fadeIn(1800);},2000);// анимация появления

/***/ })

/******/ });
//# sourceMappingURL=script.js.map