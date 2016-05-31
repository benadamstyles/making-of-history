---
---


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _throttle2 = __webpack_require__(1);

	var _throttle3 = _interopRequireDefault(_throttle2);

	var _partial2 = __webpack_require__(9);

	var _partial3 = _interopRequireDefault(_partial2);

	__webpack_require__(53);

	__webpack_require__(350);

	__webpack_require__(351);

	var _rivets = __webpack_require__(352);

	var _rivets2 = _interopRequireDefault(_rivets);

	var _stickyfill = __webpack_require__(353);

	var _stickyfill2 = _interopRequireDefault(_stickyfill);

	var _model = __webpack_require__(354);

	var _model2 = _interopRequireDefault(_model);

	var _hero = __webpack_require__(355);

	var _hero2 = _interopRequireDefault(_hero);

	var _siteDesc = __webpack_require__(381);

	var _siteDesc2 = _interopRequireDefault(_siteDesc);

	var _imageZoomHint = __webpack_require__(382);

	var _imageZoomHint2 = _interopRequireDefault(_imageZoomHint);

	var _footerSetup = __webpack_require__(384);

	var _footerSetup2 = _interopRequireDefault(_footerSetup);

	var _photoswipeSetup = __webpack_require__(385);

	var _photoswipeSetup2 = _interopRequireDefault(_photoswipeSetup);

	var _util = __webpack_require__(375);

	__webpack_require__(388);

	var _heroes = __webpack_require__(389);

	var _heroes2 = _interopRequireDefault(_heroes);

	var _gallery = __webpack_require__(390);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _imagesloaded = __webpack_require__(393);

	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

	var _map = __webpack_require__(395);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function init() {
	  (0, _hero2.default)();
	  (0, _siteDesc2.default)();
	  (0, _imageZoomHint2.default)();
	  (0, _footerSetup2.default)();

	  var b = document.getElementsByTagName('body')[0],
	      width = window.innerWidth || document.documentElement.clientWidth || b.clientWidth;

	  if (width > 760) {
	    (function () {
	      var stickyfill = (0, _stickyfill2.default)();
	      (0, _util.$$)('.sticky').forEach(function (el) {
	        return stickyfill.add(el);
	      });
	    })();
	  }

	  if (window.isGallery) {
	    (function () {
	      var div = (0, _util.$)('.thumbnails'),
	          thumbs = (0, _util.$$)('.pswp-thumb');

	      var galleryRunner = (0, _partial3.default)(_gallery2.default, div);
	      (0, _imagesloaded2.default)(div, function () {
	        (0, _photoswipeSetup2.default)(div, thumbs, _heroes2.default.map(function (_ref, i) {
	          var src = _ref.src;
	          var title = _ref.title;
	          return {
	            src: src,
	            title: title,
	            w: thumbs[i].naturalWidth,
	            h: thumbs[i].naturalHeight
	          };
	        }));
	        galleryRunner();
	      });
	      window.addEventListener('resize', (0, _throttle3.default)(galleryRunner, 100, { leading: false }));
	    })();
	  }

	  if (window.isArticle) {
	    (function () {
	      var div = (0, _util.$)('.post-content'),
	          thumbs = (0, _util.$$)('.post-content img');

	      (0, _imagesloaded2.default)(div, function () {
	        (0, _photoswipeSetup2.default)(div, thumbs, thumbs.map(function (_ref2) {
	          var src = _ref2.src;
	          var naturalWidth = _ref2.naturalWidth;
	          var naturalHeight = _ref2.naturalHeight;
	          return {
	            src: src,
	            w: naturalWidth,
	            h: naturalHeight
	          };
	        }));
	      });
	    })();
	  }

	  if (window.isMap) {
	    (0, _map2.default)((0, _util.$)('#map'));
	  }

	  _rivets2.default.bind(b, _model2.default);

	  // window.rivets = rivets
	  // window.model = model

	  document.removeEventListener("DOMContentLoaded", init, false);
	}

	document.addEventListener('DOMContentLoaded', init, false);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(2),
	    isObject = __webpack_require__(3);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide an options object to indicate whether
	 * `func` should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(3),
	    now = __webpack_require__(4),
	    toNumber = __webpack_require__(5);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime = 0,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (!lastCallTime || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    clearTimeout(timerId);
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastCallTime = lastInvokeTime = 0;
	    lastArgs = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred function to be invoked.
	 */
	var now = Date.now;

	module.exports = now;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(6),
	    isObject = __webpack_require__(3),
	    isSymbol = __webpack_require__(7);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(3);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(8);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var createWrapper = __webpack_require__(10),
	    getPlaceholder = __webpack_require__(45),
	    replaceHolders = __webpack_require__(48),
	    rest = __webpack_require__(52);

	/** Used to compose bitmasks for wrapper metadata. */
	var PARTIAL_FLAG = 32;

	/**
	 * Creates a function that invokes `func` with `partials` prepended to the
	 * arguments it receives. This method is like `_.bind` except it does **not**
	 * alter the `this` binding.
	 *
	 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.2.0
	 * @category Function
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new partially applied function.
	 * @example
	 *
	 * var greet = function(greeting, name) {
	 *   return greeting + ' ' + name;
	 * };
	 *
	 * var sayHelloTo = _.partial(greet, 'hello');
	 * sayHelloTo('fred');
	 * // => 'hello fred'
	 *
	 * // Partially applied with placeholders.
	 * var greetFred = _.partial(greet, _, 'fred');
	 * greetFred('hi');
	 * // => 'hi fred'
	 */
	var partial = rest(function(func, partials) {
	  var holders = replaceHolders(partials, getPlaceholder(partial));
	  return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders);
	});

	// Assign default placeholders.
	partial.placeholder = {};

	module.exports = partial;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(11),
	    createBaseWrapper = __webpack_require__(22),
	    createCurryWrapper = __webpack_require__(25),
	    createHybridWrapper = __webpack_require__(27),
	    createPartialWrapper = __webpack_require__(49),
	    getData = __webpack_require__(35),
	    mergeData = __webpack_require__(50),
	    setData = __webpack_require__(44),
	    toInteger = __webpack_require__(51);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask of wrapper flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - `_.bind`
	 *     2 - `_.bindKey`
	 *     4 - `_.curry` or `_.curryRight` of a bound function
	 *     8 - `_.curry`
	 *    16 - `_.curryRight`
	 *    32 - `_.partial`
	 *    64 - `_.partialRight`
	 *   128 - `_.rearg`
	 *   256 - `_.ary`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;

	  if (bitmask & PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;

	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func);

	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];

	  if (data) {
	    mergeData(newData, data);
	  }
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] == null
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);

	  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == BIND_FLAG) {
	    var result = createBaseWrapper(func, bitmask, thisArg);
	  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
	    result = createCurryWrapper(func, bitmask, arity);
	  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
	    result = createPartialWrapper(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybridWrapper.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setter(result, newData);
	}

	module.exports = createWrapper;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(12),
	    metaMap = __webpack_require__(13);

	/**
	 * The base implementation of `setData` without support for hot loop detection.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};

	module.exports = baseSetData;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var WeakMap = __webpack_require__(14);

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;

	module.exports = metaMap;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(15),
	    root = __webpack_require__(19);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(16);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(6),
	    isHostObject = __webpack_require__(17),
	    isObject = __webpack_require__(3),
	    toSource = __webpack_require__(18);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(21);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module), (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var createCtorWrapper = __webpack_require__(23),
	    root = __webpack_require__(19);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	 *  for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBaseWrapper(func, bitmask, thisArg) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtorWrapper(func);

	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}

	module.exports = createBaseWrapper;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(24),
	    isObject = __webpack_require__(3);

	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtorWrapper(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);

	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}

	module.exports = createCtorWrapper;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(3);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(26),
	    createCtorWrapper = __webpack_require__(23),
	    createHybridWrapper = __webpack_require__(27),
	    createRecurryWrapper = __webpack_require__(31),
	    getPlaceholder = __webpack_require__(45),
	    replaceHolders = __webpack_require__(48),
	    root = __webpack_require__(19);

	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	 *  for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurryWrapper(func, bitmask, arity) {
	  var Ctor = createCtorWrapper(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getPlaceholder(wrapper);

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);

	    length -= holders.length;
	    if (length < arity) {
	      return createRecurryWrapper(
	        func, bitmask, createHybridWrapper, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}

	module.exports = createCurryWrapper;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(28),
	    composeArgsRight = __webpack_require__(29),
	    countHolders = __webpack_require__(30),
	    createCtorWrapper = __webpack_require__(23),
	    createRecurryWrapper = __webpack_require__(31),
	    getPlaceholder = __webpack_require__(45),
	    reorder = __webpack_require__(46),
	    replaceHolders = __webpack_require__(48),
	    root = __webpack_require__(19);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    ARY_FLAG = 128,
	    FLIP_FLAG = 512;

	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	 *  for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & ARY_FLAG,
	      isBind = bitmask & BIND_FLAG,
	      isBindKey = bitmask & BIND_KEY_FLAG,
	      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
	      isFlip = bitmask & FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtorWrapper(func);

	  function wrapper() {
	    var length = arguments.length,
	        index = length,
	        args = Array(length);

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getPlaceholder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurryWrapper(
	        func, bitmask, createHybridWrapper, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;

	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtorWrapper(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}

	module.exports = createHybridWrapper;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array|Object} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;

	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}

	module.exports = composeArgs;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array|Object} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;

	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}

	module.exports = composeArgsRight;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;

	  while (length--) {
	    if (array[length] === placeholder) {
	      result++;
	    }
	  }
	  return result;
	}

	module.exports = countHolders;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isLaziable = __webpack_require__(32),
	    setData = __webpack_require__(44);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64;

	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	 *  for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurryWrapper(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;

	  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	  if (!(bitmask & CURRY_BOUND_FLAG)) {
	    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	  }
	  var newData = [
	    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	    newHoldersRight, argPos, ary, arity
	  ];

	  var result = wrapFunc.apply(undefined, newData);
	  if (isLaziable(func)) {
	    setData(result, newData);
	  }
	  result.placeholder = placeholder;
	  return result;
	}

	module.exports = createRecurryWrapper;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(33),
	    getData = __webpack_require__(35),
	    getFuncName = __webpack_require__(37),
	    lodash = __webpack_require__(39);

	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];

	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}

	module.exports = isLaziable;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(24),
	    baseLodash = __webpack_require__(34);

	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;

	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	}

	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;

	module.exports = LazyWrapper;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}

	module.exports = baseLodash;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var metaMap = __webpack_require__(13),
	    noop = __webpack_require__(36);

	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};

	module.exports = getData;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var realNames = __webpack_require__(38);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}

	module.exports = getFuncName;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/** Used to lookup unminified function names. */
	var realNames = {};

	module.exports = realNames;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(33),
	    LodashWrapper = __webpack_require__(40),
	    baseLodash = __webpack_require__(34),
	    isArray = __webpack_require__(41),
	    isObjectLike = __webpack_require__(8),
	    wrapperClone = __webpack_require__(42);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array of at least `200` elements
	 * and any iteratees accept only one argument. The heuristic for whether a
	 * section qualifies for shortcut fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `deburr`, `divide`, `each`,
	 * `eachRight`, `endsWith`, `eq`, `escape`, `escapeRegExp`, `every`, `find`,
	 * `findIndex`, `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `first`,
	 * `floor`, `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`,
	 * `forOwnRight`, `get`, `gt`, `gte`, `has`, `hasIn`, `head`, `identity`,
	 * `includes`, `indexOf`, `inRange`, `invoke`, `isArguments`, `isArray`,
	 * `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`, `isBoolean`, `isBuffer`,
	 * `isDate`, `isElement`, `isEmpty`, `isEqual`, `isEqualWith`, `isError`,
	 * `isFinite`, `isFunction`, `isInteger`, `isLength`, `isMap`, `isMatch`,
	 * `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`, `isNumber`,
	 * `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`, `isSafeInteger`,
	 * `isSet`, `isString`, `isUndefined`, `isTypedArray`, `isWeakMap`, `isWeakSet`,
	 * `join`, `kebabCase`, `last`, `lastIndexOf`, `lowerCase`, `lowerFirst`,
	 * `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`, `min`, `minBy`, `multiply`,
	 * `noConflict`, `noop`, `now`, `nth`, `pad`, `padEnd`, `padStart`, `parseInt`,
	 * `pop`, `random`, `reduce`, `reduceRight`, `repeat`, `result`, `round`,
	 * `runInContext`, `sample`, `shift`, `size`, `snakeCase`, `some`, `sortedIndex`,
	 * `sortedIndexBy`, `sortedLastIndex`, `sortedLastIndexBy`, `startCase`,
	 * `startsWith`, `subtract`, `sum`, `sumBy`, `template`, `times`, `toInteger`,
	 * `toJSON`, `toLength`, `toLower`, `toNumber`, `toSafeInteger`, `toString`,
	 * `toUpper`, `trim`, `trimEnd`, `trimStart`, `truncate`, `unescape`,
	 * `uniqueId`, `upperCase`, `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}

	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;

	module.exports = lodash;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(24),
	    baseLodash = __webpack_require__(34);

	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */
	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}

	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;

	module.exports = LodashWrapper;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(33),
	    LodashWrapper = __webpack_require__(40),
	    copyArray = __webpack_require__(43);

	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  if (wrapper instanceof LazyWrapper) {
	    return wrapper.clone();
	  }
	  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = copyArray(wrapper.__actions__);
	  result.__index__  = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}

	module.exports = wrapperClone;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(11),
	    now = __webpack_require__(4);

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 150,
	    HOT_SPAN = 16;

	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity
	 * function to avoid garbage collection pauses in V8. See
	 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var setData = (function() {
	  var count = 0,
	      lastCalled = 0;

	  return function(key, value) {
	    var stamp = now(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return key;
	      }
	    } else {
	      count = 0;
	    }
	    return baseSetData(key, value);
	  };
	}());

	module.exports = setData;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getPlaceholder(func) {
	  var object = func;
	  return object.placeholder;
	}

	module.exports = getPlaceholder;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(43),
	    isIndex = __webpack_require__(47);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);

	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}

	module.exports = reorder;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}

	module.exports = replaceHolders;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(26),
	    createCtorWrapper = __webpack_require__(23),
	    root = __webpack_require__(19);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask of wrapper flags. See `createWrapper`
	 *  for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartialWrapper(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtorWrapper(func);

	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}

	module.exports = createPartialWrapper;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(28),
	    composeArgsRight = __webpack_require__(29),
	    replaceHolders = __webpack_require__(48);

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers used to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and
	 * `_.rearg` modify function arguments, making the order in which they are
	 * executed important, preventing the merging of metadata. However, we make
	 * an exception for a safe combined case where curried functions have `_.ary`
	 * and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */
	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);

	  var isCombo =
	    ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) ||
	    ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) ||
	    ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));

	  // Exit early if metadata can't be merged.
	  if (!(isCommon || isCombo)) {
	    return data;
	  }
	  // Use source `thisArg` if available.
	  if (srcBitmask & BIND_FLAG) {
	    data[2] = source[2];
	    // Set when currying a bound function.
	    newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
	  }
	  // Compose partial arguments.
	  var value = source[3];
	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	  }
	  // Compose partial right arguments.
	  value = source[5];
	  if (value) {
	    partials = data[5];
	    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	  }
	  // Use source `argPos` if available.
	  value = source[7];
	  if (value) {
	    data[7] = value;
	  }
	  // Use source `ary` if it's smaller.
	  if (srcBitmask & ARY_FLAG) {
	    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	  }
	  // Use source `arity` if one is not provided.
	  if (data[9] == null) {
	    data[9] = source[9];
	  }
	  // Use source `func` and merge bitmasks.
	  data[0] = source[0];
	  data[1] = newBitmask;

	  return data;
	}

	module.exports = mergeData;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(5);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(26),
	    toInteger = __webpack_require__(51);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* eslint max-len: 0 */

	"use strict";

	__webpack_require__(54);

	__webpack_require__(345);

	// Should be removed in the next major release:

	__webpack_require__(347);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(196);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(209);
	__webpack_require__(210);
	__webpack_require__(212);
	__webpack_require__(213);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(240);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(246);
	__webpack_require__(248);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(263);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(322);
	__webpack_require__(323);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	__webpack_require__(328);
	__webpack_require__(329);
	__webpack_require__(331);
	__webpack_require__(332);
	__webpack_require__(333);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(336);
	__webpack_require__(337);
	__webpack_require__(338);
	__webpack_require__(339);
	__webpack_require__(340);
	__webpack_require__(343);
	__webpack_require__(344);
	module.exports = __webpack_require__(61);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(56)
	  , has            = __webpack_require__(57)
	  , DESCRIPTORS    = __webpack_require__(58)
	  , $export        = __webpack_require__(60)
	  , redefine       = __webpack_require__(70)
	  , META           = __webpack_require__(74).KEY
	  , $fails         = __webpack_require__(59)
	  , shared         = __webpack_require__(75)
	  , setToStringTag = __webpack_require__(76)
	  , uid            = __webpack_require__(71)
	  , wks            = __webpack_require__(77)
	  , wksExt         = __webpack_require__(78)
	  , wksDefine      = __webpack_require__(79)
	  , keyOf          = __webpack_require__(81)
	  , enumKeys       = __webpack_require__(94)
	  , isArray        = __webpack_require__(97)
	  , anObject       = __webpack_require__(64)
	  , toIObject      = __webpack_require__(84)
	  , toPrimitive    = __webpack_require__(68)
	  , createDesc     = __webpack_require__(69)
	  , _create        = __webpack_require__(98)
	  , gOPNExt        = __webpack_require__(101)
	  , $GOPD          = __webpack_require__(103)
	  , $DP            = __webpack_require__(63)
	  , $keys          = __webpack_require__(82)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	      configurable: true,
	      set: function(value){
	        if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	        setSymbolDesc(this, tag, createDesc(1, value));
	      }
	    });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(102).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(96).f  = $propertyIsEnumerable;
	  __webpack_require__(95).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(80)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(62)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 56 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 57 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(59)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(56)
	  , core      = __webpack_require__(61)
	  , hide      = __webpack_require__(62)
	  , redefine  = __webpack_require__(70)
	  , ctx       = __webpack_require__(72)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 61 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.3.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(63)
	  , createDesc = __webpack_require__(69);
	module.exports = __webpack_require__(58) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(64)
	  , IE8_DOM_DEFINE = __webpack_require__(66)
	  , toPrimitive    = __webpack_require__(68)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(58) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(65);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(58) && !__webpack_require__(59)(function(){
	  return Object.defineProperty(__webpack_require__(67)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(65)
	  , document = __webpack_require__(56).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(65);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(56)
	  , hide      = __webpack_require__(62)
	  , has       = __webpack_require__(57)
	  , SRC       = __webpack_require__(71)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(61).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 71 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(73);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(71)('meta')
	  , isObject = __webpack_require__(65)
	  , has      = __webpack_require__(57)
	  , setDesc  = __webpack_require__(63).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(59)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(56)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(63).f
	  , has = __webpack_require__(57)
	  , TAG = __webpack_require__(77)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(75)('wks')
	  , uid        = __webpack_require__(71)
	  , Symbol     = __webpack_require__(56).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(77);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(56)
	  , core           = __webpack_require__(61)
	  , LIBRARY        = __webpack_require__(80)
	  , wksExt         = __webpack_require__(78)
	  , defineProperty = __webpack_require__(63).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(82)
	  , toIObject = __webpack_require__(84);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(83)
	  , enumBugKeys = __webpack_require__(93);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(57)
	  , toIObject    = __webpack_require__(84)
	  , arrayIndexOf = __webpack_require__(88)(false)
	  , IE_PROTO     = __webpack_require__(92)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(85)
	  , defined = __webpack_require__(87);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(86);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(84)
	  , toLength  = __webpack_require__(89)
	  , toIndex   = __webpack_require__(91);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(90)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(90)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(75)('keys')
	  , uid    = __webpack_require__(71);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(82)
	  , gOPS    = __webpack_require__(95)
	  , pIE     = __webpack_require__(96);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 96 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(86);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(64)
	  , dPs         = __webpack_require__(99)
	  , enumBugKeys = __webpack_require__(93)
	  , IE_PROTO    = __webpack_require__(92)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(67)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(100).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(63)
	  , anObject = __webpack_require__(64)
	  , getKeys  = __webpack_require__(82);

	module.exports = __webpack_require__(58) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(56).document && document.documentElement;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(84)
	  , gOPN      = __webpack_require__(102).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(83)
	  , hiddenKeys = __webpack_require__(93).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(96)
	  , createDesc     = __webpack_require__(69)
	  , toIObject      = __webpack_require__(84)
	  , toPrimitive    = __webpack_require__(68)
	  , has            = __webpack_require__(57)
	  , IE8_DOM_DEFINE = __webpack_require__(66)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(58) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(98)});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(58), 'Object', {defineProperty: __webpack_require__(63).f});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(58), 'Object', {defineProperties: __webpack_require__(99)});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(84)
	  , $getOwnPropertyDescriptor = __webpack_require__(103).f;

	__webpack_require__(108)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(60)
	  , core    = __webpack_require__(61)
	  , fails   = __webpack_require__(59);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(110)
	  , $getPrototypeOf = __webpack_require__(111);

	__webpack_require__(108)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(87);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(57)
	  , toObject    = __webpack_require__(110)
	  , IE_PROTO    = __webpack_require__(92)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(110)
	  , $keys    = __webpack_require__(82);

	__webpack_require__(108)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(108)('getOwnPropertyNames', function(){
	  return __webpack_require__(101).f;
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(65)
	  , meta     = __webpack_require__(74).onFreeze;

	__webpack_require__(108)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(65)
	  , meta     = __webpack_require__(74).onFreeze;

	__webpack_require__(108)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(65)
	  , meta     = __webpack_require__(74).onFreeze;

	__webpack_require__(108)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(65);

	__webpack_require__(108)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(65);

	__webpack_require__(108)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(65);

	__webpack_require__(108)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(60);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(121)});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(82)
	  , gOPS     = __webpack_require__(95)
	  , pIE      = __webpack_require__(96)
	  , toObject = __webpack_require__(110)
	  , IObject  = __webpack_require__(85)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(59)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(60);
	$export($export.S, 'Object', {is: __webpack_require__(123)});

/***/ },
/* 123 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(60);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(125).set});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(65)
	  , anObject = __webpack_require__(64);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(72)(Function.call, __webpack_require__(103).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(127)
	  , test    = {};
	test[__webpack_require__(77)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(70)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(86)
	  , TAG = __webpack_require__(77)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(60);

	$export($export.P, 'Function', {bind: __webpack_require__(129)});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(73)
	  , isObject   = __webpack_require__(65)
	  , invoke     = __webpack_require__(130)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(63).f
	  , createDesc = __webpack_require__(69)
	  , has        = __webpack_require__(57)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(58) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(65)
	  , getPrototypeOf = __webpack_require__(111)
	  , HAS_INSTANCE   = __webpack_require__(77)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(63).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(60)
	  , $parseInt = __webpack_require__(134);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(56).parseInt
	  , $trim     = __webpack_require__(135).trim
	  , ws        = __webpack_require__(136)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60)
	  , defined = __webpack_require__(87)
	  , fails   = __webpack_require__(59)
	  , spaces  = __webpack_require__(136)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(60)
	  , $parseFloat = __webpack_require__(138);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(56).parseFloat
	  , $trim       = __webpack_require__(135).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(136) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(56)
	  , has               = __webpack_require__(57)
	  , cof               = __webpack_require__(86)
	  , inheritIfRequired = __webpack_require__(140)
	  , toPrimitive       = __webpack_require__(68)
	  , fails             = __webpack_require__(59)
	  , gOPN              = __webpack_require__(102).f
	  , gOPD              = __webpack_require__(103).f
	  , dP                = __webpack_require__(63).f
	  , $trim             = __webpack_require__(135).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(98)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(58) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(70)(global, NUMBER, $Number);
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(65)
	  , setPrototypeOf = __webpack_require__(125).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(60)
	  , anInstance   = __webpack_require__(142)
	  , toInteger    = __webpack_require__(90)
	  , aNumberValue = __webpack_require__(143)
	  , repeat       = __webpack_require__(144)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(59)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(86);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(90)
	  , defined   = __webpack_require__(87);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(60)
	  , $fails       = __webpack_require__(59)
	  , aNumberValue = __webpack_require__(143)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(60);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(60)
	  , _isFinite = __webpack_require__(56).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(60);

	$export($export.S, 'Number', {isInteger: __webpack_require__(149)});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(65)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(60);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(60)
	  , isInteger = __webpack_require__(149)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(60);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(60);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(60)
	  , $parseFloat = __webpack_require__(138);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(60)
	  , $parseInt = __webpack_require__(134);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(60)
	  , log1p   = __webpack_require__(157)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(60)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(60)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(60)
	  , sign    = __webpack_require__(161);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(60)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(60)
	  , $expm1  = __webpack_require__(165);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 165 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(60)
	  , sign      = __webpack_require__(161)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(60)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(60)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {log1p: __webpack_require__(157)});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {sign: __webpack_require__(161)});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(60)
	  , expm1   = __webpack_require__(165)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(60)
	  , expm1   = __webpack_require__(165)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(60)
	  , toIndex        = __webpack_require__(91)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(60)
	  , toIObject = __webpack_require__(84)
	  , toLength  = __webpack_require__(89);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(135)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(180)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(181)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(90)
	  , defined   = __webpack_require__(87);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(80)
	  , $export        = __webpack_require__(60)
	  , redefine       = __webpack_require__(70)
	  , hide           = __webpack_require__(62)
	  , has            = __webpack_require__(57)
	  , Iterators      = __webpack_require__(182)
	  , $iterCreate    = __webpack_require__(183)
	  , setToStringTag = __webpack_require__(76)
	  , getPrototypeOf = __webpack_require__(111)
	  , ITERATOR       = __webpack_require__(77)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(98)
	  , descriptor     = __webpack_require__(69)
	  , setToStringTag = __webpack_require__(76)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(62)(IteratorPrototype, __webpack_require__(77)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(60)
	  , $at     = __webpack_require__(180)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(60)
	  , toLength  = __webpack_require__(89)
	  , context   = __webpack_require__(186)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(188)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(187)
	  , defined  = __webpack_require__(87);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(65)
	  , cof      = __webpack_require__(86)
	  , MATCH    = __webpack_require__(77)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(77)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(60)
	  , context  = __webpack_require__(186)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(188)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(144)
	});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(60)
	  , toLength    = __webpack_require__(89)
	  , context     = __webpack_require__(186)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(188)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(193)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60)
	  , fails   = __webpack_require__(59)
	  , defined = __webpack_require__(87)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(193)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(193)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(193)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(193)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(193)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(193)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(193)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(193)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(193)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(193)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(193)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(193)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(60);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(60)
	  , toObject    = __webpack_require__(110)
	  , toPrimitive = __webpack_require__(68);

	$export($export.P + $export.F * __webpack_require__(59)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(60)
	  , fails   = __webpack_require__(59)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(70)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(77)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(62)(proto, TO_PRIMITIVE, __webpack_require__(211));

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(64)
	  , toPrimitive = __webpack_require__(68)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(60);

	$export($export.S, 'Array', {isArray: __webpack_require__(97)});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(72)
	  , $export        = __webpack_require__(60)
	  , toObject       = __webpack_require__(110)
	  , call           = __webpack_require__(214)
	  , isArrayIter    = __webpack_require__(215)
	  , toLength       = __webpack_require__(89)
	  , createProperty = __webpack_require__(216)
	  , getIterFn      = __webpack_require__(217);

	$export($export.S + $export.F * !__webpack_require__(218)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(64);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(182)
	  , ITERATOR   = __webpack_require__(77)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(63)
	  , createDesc      = __webpack_require__(69);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(127)
	  , ITERATOR  = __webpack_require__(77)('iterator')
	  , Iterators = __webpack_require__(182);
	module.exports = __webpack_require__(61).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(77)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(60)
	  , createProperty = __webpack_require__(216);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(60)
	  , toIObject = __webpack_require__(84)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(85) != Object || !__webpack_require__(221)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(59);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(60)
	  , html       = __webpack_require__(100)
	  , cof        = __webpack_require__(86)
	  , toIndex    = __webpack_require__(91)
	  , toLength   = __webpack_require__(89)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(59)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(60)
	  , aFunction = __webpack_require__(73)
	  , toObject  = __webpack_require__(110)
	  , fails     = __webpack_require__(59)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(221)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(60)
	  , $forEach = __webpack_require__(225)(0)
	  , STRICT   = __webpack_require__(221)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(72)
	  , IObject  = __webpack_require__(85)
	  , toObject = __webpack_require__(110)
	  , toLength = __webpack_require__(89)
	  , asc      = __webpack_require__(226);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(227);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(65)
	  , isArray  = __webpack_require__(97)
	  , SPECIES  = __webpack_require__(77)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(60)
	  , $map    = __webpack_require__(225)(1);

	$export($export.P + $export.F * !__webpack_require__(221)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(60)
	  , $filter = __webpack_require__(225)(2);

	$export($export.P + $export.F * !__webpack_require__(221)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(60)
	  , $some   = __webpack_require__(225)(3);

	$export($export.P + $export.F * !__webpack_require__(221)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(60)
	  , $every  = __webpack_require__(225)(4);

	$export($export.P + $export.F * !__webpack_require__(221)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(60)
	  , $reduce = __webpack_require__(233);

	$export($export.P + $export.F * !__webpack_require__(221)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(73)
	  , toObject  = __webpack_require__(110)
	  , IObject   = __webpack_require__(85)
	  , toLength  = __webpack_require__(89);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(60)
	  , $reduce = __webpack_require__(233);

	$export($export.P + $export.F * !__webpack_require__(221)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(60)
	  , $indexOf      = __webpack_require__(88)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(221)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(60)
	  , toIObject     = __webpack_require__(84)
	  , toInteger     = __webpack_require__(90)
	  , toLength      = __webpack_require__(89)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(221)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(60);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(238)});

	__webpack_require__(239)('copyWithin');

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(110)
	  , toIndex  = __webpack_require__(91)
	  , toLength = __webpack_require__(89);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(77)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(62)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(60);

	$export($export.P, 'Array', {fill: __webpack_require__(241)});

	__webpack_require__(239)('fill');

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(110)
	  , toIndex  = __webpack_require__(91)
	  , toLength = __webpack_require__(89);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(60)
	  , $find   = __webpack_require__(225)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(239)(KEY);

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(60)
	  , $find   = __webpack_require__(225)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(239)(KEY);

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(245)('Array');

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(56)
	  , dP          = __webpack_require__(63)
	  , DESCRIPTORS = __webpack_require__(58)
	  , SPECIES     = __webpack_require__(77)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(239)
	  , step             = __webpack_require__(247)
	  , Iterators        = __webpack_require__(182)
	  , toIObject        = __webpack_require__(84);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(181)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(56)
	  , inheritIfRequired = __webpack_require__(140)
	  , dP                = __webpack_require__(63).f
	  , gOPN              = __webpack_require__(102).f
	  , isRegExp          = __webpack_require__(187)
	  , $flags            = __webpack_require__(249)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(58) && (!CORRECT_NEW || __webpack_require__(59)(function(){
	  re2[__webpack_require__(77)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(70)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(245)('RegExp');

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(64);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(251);
	var anObject    = __webpack_require__(64)
	  , $flags      = __webpack_require__(249)
	  , DESCRIPTORS = __webpack_require__(58)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(70)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(59)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(58) && /./g.flags != 'g')__webpack_require__(63).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(249)
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(253)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(62)
	  , redefine = __webpack_require__(70)
	  , fails    = __webpack_require__(59)
	  , defined  = __webpack_require__(87)
	  , wks      = __webpack_require__(77);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(253)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(253)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(253)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(187)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(80)
	  , global             = __webpack_require__(56)
	  , ctx                = __webpack_require__(72)
	  , classof            = __webpack_require__(127)
	  , $export            = __webpack_require__(60)
	  , isObject           = __webpack_require__(65)
	  , anObject           = __webpack_require__(64)
	  , aFunction          = __webpack_require__(73)
	  , anInstance         = __webpack_require__(142)
	  , forOf              = __webpack_require__(258)
	  , setProto           = __webpack_require__(125).set
	  , speciesConstructor = __webpack_require__(259)
	  , task               = __webpack_require__(260).set
	  , microtask          = __webpack_require__(261)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(77)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(262)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(76)($Promise, PROMISE);
	__webpack_require__(245)(PROMISE);
	Wrapper = __webpack_require__(61)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(218)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(72)
	  , call        = __webpack_require__(214)
	  , isArrayIter = __webpack_require__(215)
	  , anObject    = __webpack_require__(64)
	  , toLength    = __webpack_require__(89)
	  , getIterFn   = __webpack_require__(217);
	module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(64)
	  , aFunction = __webpack_require__(73)
	  , SPECIES   = __webpack_require__(77)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(72)
	  , invoke             = __webpack_require__(130)
	  , html               = __webpack_require__(100)
	  , cel                = __webpack_require__(67)
	  , global             = __webpack_require__(56)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(86)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(56)
	  , macrotask = __webpack_require__(260).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(86)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(70);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(264);

	// 23.1 Map Objects
	module.exports = __webpack_require__(265)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(63).f
	  , create      = __webpack_require__(98)
	  , hide        = __webpack_require__(62)
	  , redefineAll = __webpack_require__(262)
	  , ctx         = __webpack_require__(72)
	  , anInstance  = __webpack_require__(142)
	  , defined     = __webpack_require__(87)
	  , forOf       = __webpack_require__(258)
	  , $iterDefine = __webpack_require__(181)
	  , step        = __webpack_require__(247)
	  , setSpecies  = __webpack_require__(245)
	  , DESCRIPTORS = __webpack_require__(58)
	  , fastKey     = __webpack_require__(74).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(56)
	  , $export           = __webpack_require__(60)
	  , redefine          = __webpack_require__(70)
	  , redefineAll       = __webpack_require__(262)
	  , meta              = __webpack_require__(74)
	  , forOf             = __webpack_require__(258)
	  , anInstance        = __webpack_require__(142)
	  , isObject          = __webpack_require__(65)
	  , fails             = __webpack_require__(59)
	  , $iterDetect       = __webpack_require__(218)
	  , setToStringTag    = __webpack_require__(76)
	  , inheritIfRequired = __webpack_require__(140);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(264);

	// 23.2 Set Objects
	module.exports = __webpack_require__(265)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(225)(0)
	  , redefine     = __webpack_require__(70)
	  , meta         = __webpack_require__(74)
	  , assign       = __webpack_require__(121)
	  , weak         = __webpack_require__(268)
	  , isObject     = __webpack_require__(65)
	  , has          = __webpack_require__(57)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(265)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(262)
	  , getWeak           = __webpack_require__(74).getWeak
	  , anObject          = __webpack_require__(64)
	  , isObject          = __webpack_require__(65)
	  , anInstance        = __webpack_require__(142)
	  , forOf             = __webpack_require__(258)
	  , createArrayMethod = __webpack_require__(225)
	  , $has              = __webpack_require__(57)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(268);

	// 23.4 WeakSet Objects
	__webpack_require__(265)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(60)
	  , $typed       = __webpack_require__(271)
	  , buffer       = __webpack_require__(272)
	  , anObject     = __webpack_require__(64)
	  , toIndex      = __webpack_require__(91)
	  , toLength     = __webpack_require__(89)
	  , isObject     = __webpack_require__(65)
	  , TYPED_ARRAY  = __webpack_require__(77)('typed_array')
	  , ArrayBuffer  = __webpack_require__(56).ArrayBuffer
	  , speciesConstructor = __webpack_require__(259)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(59)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(245)(ARRAY_BUFFER);

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(56)
	  , hide   = __webpack_require__(62)
	  , uid    = __webpack_require__(71)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(56)
	  , DESCRIPTORS    = __webpack_require__(58)
	  , LIBRARY        = __webpack_require__(80)
	  , $typed         = __webpack_require__(271)
	  , hide           = __webpack_require__(62)
	  , redefineAll    = __webpack_require__(262)
	  , fails          = __webpack_require__(59)
	  , anInstance     = __webpack_require__(142)
	  , toInteger      = __webpack_require__(90)
	  , toLength       = __webpack_require__(89)
	  , gOPN           = __webpack_require__(102).f
	  , dP             = __webpack_require__(63).f
	  , arrayFill      = __webpack_require__(241)
	  , setToStringTag = __webpack_require__(76)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , parseInt       = global.parseInt
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , min            = Math.min
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60);
	$export($export.G + $export.W + $export.F * !__webpack_require__(271).ABV, {
	  DataView: __webpack_require__(272).DataView
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(58)){
	  var LIBRARY             = __webpack_require__(80)
	    , global              = __webpack_require__(56)
	    , fails               = __webpack_require__(59)
	    , $export             = __webpack_require__(60)
	    , $typed              = __webpack_require__(271)
	    , $buffer             = __webpack_require__(272)
	    , ctx                 = __webpack_require__(72)
	    , anInstance          = __webpack_require__(142)
	    , propertyDesc        = __webpack_require__(69)
	    , hide                = __webpack_require__(62)
	    , redefineAll         = __webpack_require__(262)
	    , isInteger           = __webpack_require__(149)
	    , toInteger           = __webpack_require__(90)
	    , toLength            = __webpack_require__(89)
	    , toIndex             = __webpack_require__(91)
	    , toPrimitive         = __webpack_require__(68)
	    , has                 = __webpack_require__(57)
	    , same                = __webpack_require__(123)
	    , classof             = __webpack_require__(127)
	    , isObject            = __webpack_require__(65)
	    , toObject            = __webpack_require__(110)
	    , isArrayIter         = __webpack_require__(215)
	    , create              = __webpack_require__(98)
	    , getPrototypeOf      = __webpack_require__(111)
	    , gOPN                = __webpack_require__(102).f
	    , isIterable          = __webpack_require__(276)
	    , getIterFn           = __webpack_require__(217)
	    , uid                 = __webpack_require__(71)
	    , wks                 = __webpack_require__(77)
	    , createArrayMethod   = __webpack_require__(225)
	    , createArrayIncludes = __webpack_require__(88)
	    , speciesConstructor  = __webpack_require__(259)
	    , ArrayIterators      = __webpack_require__(246)
	    , Iterators           = __webpack_require__(182)
	    , $iterDetect         = __webpack_require__(218)
	    , setSpecies          = __webpack_require__(245)
	    , arrayFill           = __webpack_require__(241)
	    , arrayCopyWithin     = __webpack_require__(238)
	    , $DP                 = __webpack_require__(63)
	    , $GOPD               = __webpack_require__(103)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(127)
	  , ITERATOR  = __webpack_require__(77)('iterator')
	  , Iterators = __webpack_require__(182);
	module.exports = __webpack_require__(61).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(275)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(60)
	  , _apply  = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export   = __webpack_require__(60)
	  , create    = __webpack_require__(98)
	  , aFunction = __webpack_require__(73)
	  , anObject  = __webpack_require__(64)
	  , isObject  = __webpack_require__(65)
	  , bind      = __webpack_require__(129);

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(63)
	  , $export     = __webpack_require__(60)
	  , anObject    = __webpack_require__(64)
	  , toPrimitive = __webpack_require__(68);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(60)
	  , gOPD     = __webpack_require__(103).f
	  , anObject = __webpack_require__(64);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(60)
	  , anObject = __webpack_require__(64);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(183)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(103)
	  , getPrototypeOf = __webpack_require__(111)
	  , has            = __webpack_require__(57)
	  , $export        = __webpack_require__(60)
	  , isObject       = __webpack_require__(65)
	  , anObject       = __webpack_require__(64);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(103)
	  , $export  = __webpack_require__(60)
	  , anObject = __webpack_require__(64);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(60)
	  , getProto = __webpack_require__(111)
	  , anObject = __webpack_require__(64);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(60);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(60)
	  , anObject      = __webpack_require__(64)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(60);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(296)});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(102)
	  , gOPS     = __webpack_require__(95)
	  , anObject = __webpack_require__(64)
	  , Reflect  = __webpack_require__(56).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(60)
	  , anObject           = __webpack_require__(64)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(63)
	  , gOPD           = __webpack_require__(103)
	  , getPrototypeOf = __webpack_require__(111)
	  , has            = __webpack_require__(57)
	  , $export        = __webpack_require__(60)
	  , createDesc     = __webpack_require__(69)
	  , anObject       = __webpack_require__(64)
	  , isObject       = __webpack_require__(65);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(60)
	  , setProto = __webpack_require__(125);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(60)
	  , $includes = __webpack_require__(88)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(239)('includes');

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(60)
	  , $at     = __webpack_require__(180)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(60)
	  , $pad    = __webpack_require__(303);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(89)
	  , repeat   = __webpack_require__(144)
	  , defined  = __webpack_require__(87);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(60)
	  , $pad    = __webpack_require__(303);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(135)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(135)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(60)
	  , defined     = __webpack_require__(87)
	  , toLength    = __webpack_require__(89)
	  , isRegExp    = __webpack_require__(187)
	  , getFlags    = __webpack_require__(249)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(183)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79)('asyncIterator');

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79)('observable');

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(60)
	  , ownKeys        = __webpack_require__(296)
	  , toIObject      = __webpack_require__(84)
	  , gOPD           = __webpack_require__(103)
	  , createProperty = __webpack_require__(216);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(60)
	  , $values = __webpack_require__(312)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(82)
	  , toIObject = __webpack_require__(84)
	  , isEnum    = __webpack_require__(96).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(60)
	  , $entries = __webpack_require__(312)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(60)
	  , toObject        = __webpack_require__(110)
	  , aFunction       = __webpack_require__(73)
	  , $defineProperty = __webpack_require__(63);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(58) && $export($export.P + __webpack_require__(315), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(80)|| !__webpack_require__(59)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(56)[K];
	});

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(60)
	  , toObject        = __webpack_require__(110)
	  , aFunction       = __webpack_require__(73)
	  , $defineProperty = __webpack_require__(63);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(58) && $export($export.P + __webpack_require__(315), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(60)
	  , toObject                 = __webpack_require__(110)
	  , toPrimitive              = __webpack_require__(68)
	  , getPrototypeOf           = __webpack_require__(111)
	  , getOwnPropertyDescriptor = __webpack_require__(103).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(58) && $export($export.P + __webpack_require__(315), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(60)
	  , toObject                 = __webpack_require__(110)
	  , toPrimitive              = __webpack_require__(68)
	  , getPrototypeOf           = __webpack_require__(111)
	  , getOwnPropertyDescriptor = __webpack_require__(103).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(58) && $export($export.P + __webpack_require__(315), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(60);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(320)('Map')});

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(127)
	  , from    = __webpack_require__(321);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(258);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(60);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(320)('Set')});

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(60);

	$export($export.S, 'System', {global: __webpack_require__(56)});

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(60)
	  , cof     = __webpack_require__(86);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(60);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(330)
	  , anObject                  = __webpack_require__(64)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(263)
	  , $export = __webpack_require__(60)
	  , shared  = __webpack_require__(75)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(267)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(330)
	  , anObject               = __webpack_require__(64)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(330)
	  , anObject               = __webpack_require__(64)
	  , getPrototypeOf         = __webpack_require__(111)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(266)
	  , from                    = __webpack_require__(321)
	  , metadata                = __webpack_require__(330)
	  , anObject                = __webpack_require__(64)
	  , getPrototypeOf          = __webpack_require__(111)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(330)
	  , anObject               = __webpack_require__(64)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(330)
	  , anObject                = __webpack_require__(64)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(330)
	  , anObject               = __webpack_require__(64)
	  , getPrototypeOf         = __webpack_require__(111)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(330)
	  , anObject               = __webpack_require__(64)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(330)
	  , anObject                  = __webpack_require__(64)
	  , aFunction                 = __webpack_require__(73)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(60)
	  , microtask = __webpack_require__(261)()
	  , process   = __webpack_require__(56).process
	  , isNode    = __webpack_require__(86)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(56)
	  , $export    = __webpack_require__(60)
	  , invoke     = __webpack_require__(130)
	  , partial    = __webpack_require__(341)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(342)
	  , invoke    = __webpack_require__(130)
	  , aFunction = __webpack_require__(73);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(56);

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(60)
	  , $task   = __webpack_require__(260);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(246)
	  , redefine      = __webpack_require__(70)
	  , global        = __webpack_require__(56)
	  , hide          = __webpack_require__(62)
	  , Iterators     = __webpack_require__(182)
	  , wks           = __webpack_require__(77)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(346)))

/***/ },
/* 346 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(348);
	module.exports = __webpack_require__(61).RegExp.escape;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(60)
	  , $re     = __webpack_require__(349)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 349 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 350 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_"))
	    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
	  // Public sightglass interface.
	  function sightglass(obj, keypath, callback, options) {
	    return new Observer(obj, keypath, callback, options)
	  }

	  // Batteries not included.
	  sightglass.adapters = {}

	  // Constructs a new keypath observer and kicks things off.
	  function Observer(obj, keypath, callback, options) {
	    this.options = options || {}
	    this.options.adapters = this.options.adapters || {}
	    this.obj = obj
	    this.keypath = keypath
	    this.callback = callback
	    this.objectPath = []
	    this.update = this.update.bind(this)
	    this.parse()

	    if (isObject(this.target = this.realize())) {
	      this.set(true, this.key, this.target, this.callback)
	    }
	  }

	  // Tokenizes the provided keypath string into interface + path tokens for the
	  // observer to work with.
	  Observer.tokenize = function(keypath, interfaces, root) {
	    var tokens = []
	    var current = {i: root, path: ''}
	    var index, chr

	    for (index = 0; index < keypath.length; index++) {
	      chr = keypath.charAt(index)

	      if (!!~interfaces.indexOf(chr)) {
	        tokens.push(current)
	        current = {i: chr, path: ''}
	      } else {
	        current.path += chr
	      }
	    }

	    tokens.push(current)
	    return tokens
	  }

	  // Parses the keypath using the interfaces defined on the view. Sets variables
	  // for the tokenized keypath as well as the end key.
	  Observer.prototype.parse = function() {
	    var interfaces = this.interfaces()
	    var root, path

	    if (!interfaces.length) {
	      error('Must define at least one adapter interface.')
	    }

	    if (!!~interfaces.indexOf(this.keypath[0])) {
	      root = this.keypath[0]
	      path = this.keypath.substr(1)
	    } else {
	      if (typeof (root = this.options.root || sightglass.root) === 'undefined') {
	        error('Must define a default root adapter.')
	      }

	      path = this.keypath
	    }

	    this.tokens = Observer.tokenize(path, interfaces, root)
	    this.key = this.tokens.pop()
	  }

	  // Realizes the full keypath, attaching observers for every key and correcting
	  // old observers to any changed objects in the keypath.
	  Observer.prototype.realize = function() {
	    var current = this.obj
	    var unreached = false
	    var prev

	    this.tokens.forEach(function(token, index) {
	      if (isObject(current)) {
	        if (typeof this.objectPath[index] !== 'undefined') {
	          if (current !== (prev = this.objectPath[index])) {
	            this.set(false, token, prev, this.update)
	            this.set(true, token, current, this.update)
	            this.objectPath[index] = current
	          }
	        } else {
	          this.set(true, token, current, this.update)
	          this.objectPath[index] = current
	        }

	        current = this.get(token, current)
	      } else {
	        if (unreached === false) {
	          unreached = index
	        }

	        if (prev = this.objectPath[index]) {
	          this.set(false, token, prev, this.update)
	        }
	      }
	    }, this)

	    if (unreached !== false) {
	      this.objectPath.splice(unreached)
	    }

	    return current
	  }

	  // Updates the keypath. This is called when any intermediary key is changed.
	  Observer.prototype.update = function() {
	    var next, oldValue

	    if ((next = this.realize()) !== this.target) {
	      if (isObject(this.target)) {
	        this.set(false, this.key, this.target, this.callback)
	      }

	      if (isObject(next)) {
	        this.set(true, this.key, next, this.callback)
	      }

	      oldValue = this.value()
	      this.target = next

	      if (this.value() !== oldValue) this.callback()
	    }
	  }

	  // Reads the current end value of the observed keypath. Returns undefined if
	  // the full keypath is unreachable.
	  Observer.prototype.value = function() {
	    if (isObject(this.target)) {
	      return this.get(this.key, this.target)
	    }
	  }

	  // Sets the current end value of the observed keypath. Calling setValue when
	  // the full keypath is unreachable is a no-op.
	  Observer.prototype.setValue = function(value) {
	    if (isObject(this.target)) {
	      this.adapter(this.key).set(this.target, this.key.path, value)
	    }
	  }

	  // Gets the provided key on an object.
	  Observer.prototype.get = function(key, obj) {
	    return this.adapter(key).get(obj, key.path)
	  }

	  // Observes or unobserves a callback on the object using the provided key.
	  Observer.prototype.set = function(active, key, obj, callback) {
	    var action = active ? 'observe' : 'unobserve'
	    this.adapter(key)[action](obj, key.path, callback)
	  }

	  // Returns an array of all unique adapter interfaces available.
	  Observer.prototype.interfaces = function() {
	    var interfaces = Object.keys(this.options.adapters)

	    Object.keys(sightglass.adapters).forEach(function(i) {
	      if (!~interfaces.indexOf(i)) {
	        interfaces.push(i)
	      }
	    })

	    return interfaces
	  }

	  // Convenience function to grab the adapter for a specific key.
	  Observer.prototype.adapter = function(key) {
	    return this.options.adapters[key.i] ||
	      sightglass.adapters[key.i]
	  }

	  // Unobserves the entire keypath.
	  Observer.prototype.unobserve = function() {
	    var obj

	    this.tokens.forEach(function(token, index) {
	      if (obj = this.objectPath[index]) {
	        this.set(false, token, obj, this.update)
	      }
	    }, this)

	    if (isObject(this.target)) {
	      this.set(false, this.key, this.target, this.callback)
	    }
	  }

	  // Check if a value is an object than can be observed.
	  function isObject(obj) {
	    return typeof obj === 'object' && obj !== null
	  }

	  // Error thrower.
	  function error(message) {
	    throw new Error('[sightglass] ' + message)
	  }

	  // Export module for Node and the browser.
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = sightglass
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return this.sightglass = sightglass
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    this.sightglass = sightglass
	  }
	}).call(this);


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// Rivets.js
	// version: 0.8.1
	// author: Michael Richards
	// license: MIT
	(function() {
	  var Rivets, bindMethod, unbindMethod, _ref,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __slice = [].slice,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  Rivets = {
	    options: ['prefix', 'templateDelimiters', 'rootInterface', 'preloadData', 'handler'],
	    extensions: ['binders', 'formatters', 'components', 'adapters'],
	    "public": {
	      binders: {},
	      components: {},
	      formatters: {},
	      adapters: {},
	      prefix: 'rv',
	      templateDelimiters: ['{', '}'],
	      rootInterface: '.',
	      preloadData: true,
	      handler: function(context, ev, binding) {
	        return this.call(context, ev, binding.view.models);
	      },
	      configure: function(options) {
	        var descriptor, key, option, value;
	        if (options == null) {
	          options = {};
	        }
	        for (option in options) {
	          value = options[option];
	          if (option === 'binders' || option === 'components' || option === 'formatters' || option === 'adapters') {
	            for (key in value) {
	              descriptor = value[key];
	              Rivets[option][key] = descriptor;
	            }
	          } else {
	            Rivets["public"][option] = value;
	          }
	        }
	      },
	      bind: function(el, models, options) {
	        var view;
	        if (models == null) {
	          models = {};
	        }
	        if (options == null) {
	          options = {};
	        }
	        view = new Rivets.View(el, models, options);
	        view.bind();
	        return view;
	      },
	      init: function(component, el, data) {
	        var scope, view;
	        if (data == null) {
	          data = {};
	        }
	        if (el == null) {
	          el = document.createElement('div');
	        }
	        component = Rivets["public"].components[component];
	        el.innerHTML = component.template.call(this, el);
	        scope = component.initialize.call(this, el, data);
	        view = new Rivets.View(el, scope);
	        view.bind();
	        return view;
	      }
	    }
	  };

	  if (window['jQuery'] || window['$']) {
	    _ref = 'on' in jQuery.prototype ? ['on', 'off'] : ['bind', 'unbind'], bindMethod = _ref[0], unbindMethod = _ref[1];
	    Rivets.Util = {
	      bindEvent: function(el, event, handler) {
	        return jQuery(el)[bindMethod](event, handler);
	      },
	      unbindEvent: function(el, event, handler) {
	        return jQuery(el)[unbindMethod](event, handler);
	      },
	      getInputValue: function(el) {
	        var $el;
	        $el = jQuery(el);
	        if ($el.attr('type') === 'checkbox') {
	          return $el.is(':checked');
	        } else {
	          return $el.val();
	        }
	      }
	    };
	  } else {
	    Rivets.Util = {
	      bindEvent: (function() {
	        if ('addEventListener' in window) {
	          return function(el, event, handler) {
	            return el.addEventListener(event, handler, false);
	          };
	        }
	        return function(el, event, handler) {
	          return el.attachEvent('on' + event, handler);
	        };
	      })(),
	      unbindEvent: (function() {
	        if ('removeEventListener' in window) {
	          return function(el, event, handler) {
	            return el.removeEventListener(event, handler, false);
	          };
	        }
	        return function(el, event, handler) {
	          return el.detachEvent('on' + event, handler);
	        };
	      })(),
	      getInputValue: function(el) {
	        var o, _i, _len, _results;
	        if (el.type === 'checkbox') {
	          return el.checked;
	        } else if (el.type === 'select-multiple') {
	          _results = [];
	          for (_i = 0, _len = el.length; _i < _len; _i++) {
	            o = el[_i];
	            if (o.selected) {
	              _results.push(o.value);
	            }
	          }
	          return _results;
	        } else {
	          return el.value;
	        }
	      }
	    };
	  }

	  Rivets.TypeParser = (function() {
	    function TypeParser() {}

	    TypeParser.types = {
	      primitive: 0,
	      keypath: 1
	    };

	    TypeParser.parse = function(string) {
	      if (/^'.*'$|^".*"$/.test(string)) {
	        return {
	          type: this.types.primitive,
	          value: string.slice(1, -1)
	        };
	      } else if (string === 'true') {
	        return {
	          type: this.types.primitive,
	          value: true
	        };
	      } else if (string === 'false') {
	        return {
	          type: this.types.primitive,
	          value: false
	        };
	      } else if (string === 'null') {
	        return {
	          type: this.types.primitive,
	          value: null
	        };
	      } else if (string === 'undefined') {
	        return {
	          type: this.types.primitive,
	          value: void 0
	        };
	      } else if (isNaN(Number(string)) === false) {
	        return {
	          type: this.types.primitive,
	          value: Number(string)
	        };
	      } else {
	        return {
	          type: this.types.keypath,
	          value: string
	        };
	      }
	    };

	    return TypeParser;

	  })();

	  Rivets.TextTemplateParser = (function() {
	    function TextTemplateParser() {}

	    TextTemplateParser.types = {
	      text: 0,
	      binding: 1
	    };

	    TextTemplateParser.parse = function(template, delimiters) {
	      var index, lastIndex, lastToken, length, substring, tokens, value;
	      tokens = [];
	      length = template.length;
	      index = 0;
	      lastIndex = 0;
	      while (lastIndex < length) {
	        index = template.indexOf(delimiters[0], lastIndex);
	        if (index < 0) {
	          tokens.push({
	            type: this.types.text,
	            value: template.slice(lastIndex)
	          });
	          break;
	        } else {
	          if (index > 0 && lastIndex < index) {
	            tokens.push({
	              type: this.types.text,
	              value: template.slice(lastIndex, index)
	            });
	          }
	          lastIndex = index + delimiters[0].length;
	          index = template.indexOf(delimiters[1], lastIndex);
	          if (index < 0) {
	            substring = template.slice(lastIndex - delimiters[1].length);
	            lastToken = tokens[tokens.length - 1];
	            if ((lastToken != null ? lastToken.type : void 0) === this.types.text) {
	              lastToken.value += substring;
	            } else {
	              tokens.push({
	                type: this.types.text,
	                value: substring
	              });
	            }
	            break;
	          }
	          value = template.slice(lastIndex, index).trim();
	          tokens.push({
	            type: this.types.binding,
	            value: value
	          });
	          lastIndex = index + delimiters[1].length;
	        }
	      }
	      return tokens;
	    };

	    return TextTemplateParser;

	  })();

	  Rivets.View = (function() {
	    function View(els, models, options) {
	      var k, option, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5;
	      this.els = els;
	      this.models = models;
	      if (options == null) {
	        options = {};
	      }
	      this.update = __bind(this.update, this);
	      this.publish = __bind(this.publish, this);
	      this.sync = __bind(this.sync, this);
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.select = __bind(this.select, this);
	      this.traverse = __bind(this.traverse, this);
	      this.build = __bind(this.build, this);
	      this.buildBinding = __bind(this.buildBinding, this);
	      this.bindingRegExp = __bind(this.bindingRegExp, this);
	      this.options = __bind(this.options, this);
	      if (!(this.els.jquery || this.els instanceof Array)) {
	        this.els = [this.els];
	      }
	      _ref1 = Rivets.extensions;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        option = _ref1[_i];
	        this[option] = {};
	        if (options[option]) {
	          _ref2 = options[option];
	          for (k in _ref2) {
	            v = _ref2[k];
	            this[option][k] = v;
	          }
	        }
	        _ref3 = Rivets["public"][option];
	        for (k in _ref3) {
	          v = _ref3[k];
	          if ((_base = this[option])[k] == null) {
	            _base[k] = v;
	          }
	        }
	      }
	      _ref4 = Rivets.options;
	      for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
	        option = _ref4[_j];
	        this[option] = (_ref5 = options[option]) != null ? _ref5 : Rivets["public"][option];
	      }
	      this.build();
	    }

	    View.prototype.options = function() {
	      var option, options, _i, _len, _ref1;
	      options = {};
	      _ref1 = Rivets.extensions.concat(Rivets.options);
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        option = _ref1[_i];
	        options[option] = this[option];
	      }
	      return options;
	    };

	    View.prototype.bindingRegExp = function() {
	      return new RegExp("^" + this.prefix + "-");
	    };

	    View.prototype.buildBinding = function(binding, node, type, declaration) {
	      var context, ctx, dependencies, keypath, options, pipe, pipes;
	      options = {};
	      pipes = (function() {
	        var _i, _len, _ref1, _results;
	        _ref1 = declaration.split('|');
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          pipe = _ref1[_i];
	          _results.push(pipe.trim());
	        }
	        return _results;
	      })();
	      context = (function() {
	        var _i, _len, _ref1, _results;
	        _ref1 = pipes.shift().split('<');
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          ctx = _ref1[_i];
	          _results.push(ctx.trim());
	        }
	        return _results;
	      })();
	      keypath = context.shift();
	      options.formatters = pipes;
	      if (dependencies = context.shift()) {
	        options.dependencies = dependencies.split(/\s+/);
	      }
	      return this.bindings.push(new Rivets[binding](this, node, type, keypath, options));
	    };

	    View.prototype.build = function() {
	      var el, parse, _i, _len, _ref1;
	      this.bindings = [];
	      parse = (function(_this) {
	        return function(node) {
	          var block, childNode, delimiters, n, parser, text, token, tokens, _i, _j, _len, _len1, _ref1, _results;
	          if (node.nodeType === 3) {
	            parser = Rivets.TextTemplateParser;
	            if (delimiters = _this.templateDelimiters) {
	              if ((tokens = parser.parse(node.data, delimiters)).length) {
	                if (!(tokens.length === 1 && tokens[0].type === parser.types.text)) {
	                  for (_i = 0, _len = tokens.length; _i < _len; _i++) {
	                    token = tokens[_i];
	                    text = document.createTextNode(token.value);
	                    node.parentNode.insertBefore(text, node);
	                    if (token.type === 1) {
	                      _this.buildBinding('TextBinding', text, null, token.value);
	                    }
	                  }
	                  node.parentNode.removeChild(node);
	                }
	              }
	            }
	          } else if (node.nodeType === 1) {
	            block = _this.traverse(node);
	          }
	          if (!block) {
	            _ref1 = (function() {
	              var _k, _len1, _ref1, _results1;
	              _ref1 = node.childNodes;
	              _results1 = [];
	              for (_k = 0, _len1 = _ref1.length; _k < _len1; _k++) {
	                n = _ref1[_k];
	                _results1.push(n);
	              }
	              return _results1;
	            })();
	            _results = [];
	            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	              childNode = _ref1[_j];
	              _results.push(parse(childNode));
	            }
	            return _results;
	          }
	        };
	      })(this);
	      _ref1 = this.els;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        el = _ref1[_i];
	        parse(el);
	      }
	      this.bindings.sort(function(a, b) {
	        var _ref2, _ref3;
	        return (((_ref2 = b.binder) != null ? _ref2.priority : void 0) || 0) - (((_ref3 = a.binder) != null ? _ref3.priority : void 0) || 0);
	      });
	    };

	    View.prototype.traverse = function(node) {
	      var attribute, attributes, binder, bindingRegExp, block, identifier, regexp, type, value, _i, _j, _len, _len1, _ref1, _ref2, _ref3;
	      bindingRegExp = this.bindingRegExp();
	      block = node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE';
	      _ref1 = node.attributes;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        attribute = _ref1[_i];
	        if (bindingRegExp.test(attribute.name)) {
	          type = attribute.name.replace(bindingRegExp, '');
	          if (!(binder = this.binders[type])) {
	            _ref2 = this.binders;
	            for (identifier in _ref2) {
	              value = _ref2[identifier];
	              if (identifier !== '*' && identifier.indexOf('*') !== -1) {
	                regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
	                if (regexp.test(type)) {
	                  binder = value;
	                }
	              }
	            }
	          }
	          binder || (binder = this.binders['*']);
	          if (binder.block) {
	            block = true;
	            attributes = [attribute];
	          }
	        }
	      }
	      _ref3 = attributes || node.attributes;
	      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	        attribute = _ref3[_j];
	        if (bindingRegExp.test(attribute.name)) {
	          type = attribute.name.replace(bindingRegExp, '');
	          this.buildBinding('Binding', node, type, attribute.value);
	        }
	      }
	      if (!block) {
	        type = node.nodeName.toLowerCase();
	        if (this.components[type] && !node._bound) {
	          this.bindings.push(new Rivets.ComponentBinding(this, node, type));
	          block = true;
	        }
	      }
	      return block;
	    };

	    View.prototype.select = function(fn) {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        if (fn(binding)) {
	          _results.push(binding);
	        }
	      }
	      return _results;
	    };

	    View.prototype.bind = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.bind());
	      }
	      return _results;
	    };

	    View.prototype.unbind = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.unbind());
	      }
	      return _results;
	    };

	    View.prototype.sync = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(typeof binding.sync === "function" ? binding.sync() : void 0);
	      }
	      return _results;
	    };

	    View.prototype.publish = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.select(function(b) {
	        var _ref1;
	        return (_ref1 = b.binder) != null ? _ref1.publishes : void 0;
	      });
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.publish());
	      }
	      return _results;
	    };

	    View.prototype.update = function(models) {
	      var binding, key, model, _i, _len, _ref1, _results;
	      if (models == null) {
	        models = {};
	      }
	      for (key in models) {
	        model = models[key];
	        this.models[key] = model;
	      }
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(typeof binding.update === "function" ? binding.update(models) : void 0);
	      }
	      return _results;
	    };

	    return View;

	  })();

	  Rivets.Binding = (function() {
	    function Binding(view, el, type, keypath, options) {
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.keypath = keypath;
	      this.options = options != null ? options : {};
	      this.getValue = __bind(this.getValue, this);
	      this.update = __bind(this.update, this);
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.publish = __bind(this.publish, this);
	      this.sync = __bind(this.sync, this);
	      this.set = __bind(this.set, this);
	      this.eventHandler = __bind(this.eventHandler, this);
	      this.formattedValue = __bind(this.formattedValue, this);
	      this.parseTarget = __bind(this.parseTarget, this);
	      this.observe = __bind(this.observe, this);
	      this.setBinder = __bind(this.setBinder, this);
	      this.formatters = this.options.formatters || [];
	      this.dependencies = [];
	      this.formatterObservers = {};
	      this.model = void 0;
	      this.setBinder();
	    }

	    Binding.prototype.setBinder = function() {
	      var identifier, regexp, value, _ref1;
	      if (!(this.binder = this.view.binders[this.type])) {
	        _ref1 = this.view.binders;
	        for (identifier in _ref1) {
	          value = _ref1[identifier];
	          if (identifier !== '*' && identifier.indexOf('*') !== -1) {
	            regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
	            if (regexp.test(this.type)) {
	              this.binder = value;
	              this.args = new RegExp("^" + (identifier.replace(/\*/g, '(.+)')) + "$").exec(this.type);
	              this.args.shift();
	            }
	          }
	        }
	      }
	      this.binder || (this.binder = this.view.binders['*']);
	      if (this.binder instanceof Function) {
	        return this.binder = {
	          routine: this.binder
	        };
	      }
	    };

	    Binding.prototype.observe = function(obj, keypath, callback) {
	      return Rivets.sightglass(obj, keypath, callback, {
	        root: this.view.rootInterface,
	        adapters: this.view.adapters
	      });
	    };

	    Binding.prototype.parseTarget = function() {
	      var token;
	      token = Rivets.TypeParser.parse(this.keypath);
	      if (token.type === 0) {
	        return this.value = token.value;
	      } else {
	        this.observer = this.observe(this.view.models, this.keypath, this.sync);
	        return this.model = this.observer.target;
	      }
	    };

	    Binding.prototype.formattedValue = function(value) {
	      var ai, arg, args, fi, formatter, id, observer, processedArgs, _base, _i, _j, _len, _len1, _ref1;
	      _ref1 = this.formatters;
	      for (fi = _i = 0, _len = _ref1.length; _i < _len; fi = ++_i) {
	        formatter = _ref1[fi];
	        args = formatter.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g);
	        id = args.shift();
	        formatter = this.view.formatters[id];
	        args = (function() {
	          var _j, _len1, _results;
	          _results = [];
	          for (_j = 0, _len1 = args.length; _j < _len1; _j++) {
	            arg = args[_j];
	            _results.push(Rivets.TypeParser.parse(arg));
	          }
	          return _results;
	        })();
	        processedArgs = [];
	        for (ai = _j = 0, _len1 = args.length; _j < _len1; ai = ++_j) {
	          arg = args[ai];
	          processedArgs.push(arg.type === 0 ? arg.value : ((_base = this.formatterObservers)[fi] || (_base[fi] = {}), !(observer = this.formatterObservers[fi][ai]) ? (observer = this.observe(this.view.models, arg.value, this.sync), this.formatterObservers[fi][ai] = observer) : void 0, observer.value()));
	        }
	        if ((formatter != null ? formatter.read : void 0) instanceof Function) {
	          value = formatter.read.apply(formatter, [value].concat(__slice.call(processedArgs)));
	        } else if (formatter instanceof Function) {
	          value = formatter.apply(null, [value].concat(__slice.call(processedArgs)));
	        }
	      }
	      return value;
	    };

	    Binding.prototype.eventHandler = function(fn) {
	      var binding, handler;
	      handler = (binding = this).view.handler;
	      return function(ev) {
	        return handler.call(fn, this, ev, binding);
	      };
	    };

	    Binding.prototype.set = function(value) {
	      var _ref1;
	      value = value instanceof Function && !this.binder["function"] ? this.formattedValue(value.call(this.model)) : this.formattedValue(value);
	      return (_ref1 = this.binder.routine) != null ? _ref1.call(this, this.el, value) : void 0;
	    };

	    Binding.prototype.sync = function() {
	      var dependency, observer;
	      return this.set((function() {
	        var _i, _j, _len, _len1, _ref1, _ref2, _ref3;
	        if (this.observer) {
	          if (this.model !== this.observer.target) {
	            _ref1 = this.dependencies;
	            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	              observer = _ref1[_i];
	              observer.unobserve();
	            }
	            this.dependencies = [];
	            if (((this.model = this.observer.target) != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
	              _ref3 = this.options.dependencies;
	              for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	                dependency = _ref3[_j];
	                observer = this.observe(this.model, dependency, this.sync);
	                this.dependencies.push(observer);
	              }
	            }
	          }
	          return this.observer.value();
	        } else {
	          return this.value;
	        }
	      }).call(this));
	    };

	    Binding.prototype.publish = function() {
	      var args, formatter, id, value, _i, _len, _ref1, _ref2, _ref3;
	      if (this.observer) {
	        value = this.getValue(this.el);
	        _ref1 = this.formatters.slice(0).reverse();
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          formatter = _ref1[_i];
	          args = formatter.split(/\s+/);
	          id = args.shift();
	          if ((_ref2 = this.view.formatters[id]) != null ? _ref2.publish : void 0) {
	            value = (_ref3 = this.view.formatters[id]).publish.apply(_ref3, [value].concat(__slice.call(args)));
	          }
	        }
	        return this.observer.setValue(value);
	      }
	    };

	    Binding.prototype.bind = function() {
	      var dependency, observer, _i, _len, _ref1, _ref2, _ref3;
	      this.parseTarget();
	      if ((_ref1 = this.binder.bind) != null) {
	        _ref1.call(this, this.el);
	      }
	      if ((this.model != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
	        _ref3 = this.options.dependencies;
	        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	          dependency = _ref3[_i];
	          observer = this.observe(this.model, dependency, this.sync);
	          this.dependencies.push(observer);
	        }
	      }
	      if (this.view.preloadData) {
	        return this.sync();
	      }
	    };

	    Binding.prototype.unbind = function() {
	      var ai, args, fi, observer, _i, _len, _ref1, _ref2, _ref3, _ref4;
	      if ((_ref1 = this.binder.unbind) != null) {
	        _ref1.call(this, this.el);
	      }
	      if ((_ref2 = this.observer) != null) {
	        _ref2.unobserve();
	      }
	      _ref3 = this.dependencies;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        observer = _ref3[_i];
	        observer.unobserve();
	      }
	      this.dependencies = [];
	      _ref4 = this.formatterObservers;
	      for (fi in _ref4) {
	        args = _ref4[fi];
	        for (ai in args) {
	          observer = args[ai];
	          observer.unobserve();
	        }
	      }
	      return this.formatterObservers = {};
	    };

	    Binding.prototype.update = function(models) {
	      var _ref1, _ref2;
	      if (models == null) {
	        models = {};
	      }
	      this.model = (_ref1 = this.observer) != null ? _ref1.target : void 0;
	      return (_ref2 = this.binder.update) != null ? _ref2.call(this, models) : void 0;
	    };

	    Binding.prototype.getValue = function(el) {
	      if (this.binder && (this.binder.getValue != null)) {
	        return this.binder.getValue.call(this, el);
	      } else {
	        return Rivets.Util.getInputValue(el);
	      }
	    };

	    return Binding;

	  })();

	  Rivets.ComponentBinding = (function(_super) {
	    __extends(ComponentBinding, _super);

	    function ComponentBinding(view, el, type) {
	      var attribute, bindingRegExp, propertyName, _i, _len, _ref1, _ref2;
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.locals = __bind(this.locals, this);
	      this.component = this.view.components[this.type];
	      this["static"] = {};
	      this.observers = {};
	      this.upstreamObservers = {};
	      bindingRegExp = view.bindingRegExp();
	      _ref1 = this.el.attributes || [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        attribute = _ref1[_i];
	        if (!bindingRegExp.test(attribute.name)) {
	          propertyName = this.camelCase(attribute.name);
	          if (__indexOf.call((_ref2 = this.component["static"]) != null ? _ref2 : [], propertyName) >= 0) {
	            this["static"][propertyName] = attribute.value;
	          } else {
	            this.observers[propertyName] = attribute.value;
	          }
	        }
	      }
	    }

	    ComponentBinding.prototype.sync = function() {};

	    ComponentBinding.prototype.update = function() {};

	    ComponentBinding.prototype.publish = function() {};

	    ComponentBinding.prototype.locals = function() {
	      var key, observer, result, value, _ref1, _ref2;
	      result = {};
	      _ref1 = this["static"];
	      for (key in _ref1) {
	        value = _ref1[key];
	        result[key] = value;
	      }
	      _ref2 = this.observers;
	      for (key in _ref2) {
	        observer = _ref2[key];
	        result[key] = observer.value();
	      }
	      return result;
	    };

	    ComponentBinding.prototype.camelCase = function(string) {
	      return string.replace(/-([a-z])/g, function(grouped) {
	        return grouped[1].toUpperCase();
	      });
	    };

	    ComponentBinding.prototype.bind = function() {
	      var k, key, keypath, observer, option, options, scope, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _results;
	      if (!this.bound) {
	        _ref1 = this.observers;
	        for (key in _ref1) {
	          keypath = _ref1[key];
	          this.observers[key] = this.observe(this.view.models, keypath, ((function(_this) {
	            return function(key) {
	              return function() {
	                return _this.componentView.models[key] = _this.observers[key].value();
	              };
	            };
	          })(this)).call(this, key));
	        }
	        this.bound = true;
	      }
	      if (this.componentView != null) {
	        return this.componentView.bind();
	      } else {
	        this.el.innerHTML = this.component.template.call(this);
	        scope = this.component.initialize.call(this, this.el, this.locals());
	        this.el._bound = true;
	        options = {};
	        _ref2 = Rivets.extensions;
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          option = _ref2[_i];
	          options[option] = {};
	          if (this.component[option]) {
	            _ref3 = this.component[option];
	            for (k in _ref3) {
	              v = _ref3[k];
	              options[option][k] = v;
	            }
	          }
	          _ref4 = this.view[option];
	          for (k in _ref4) {
	            v = _ref4[k];
	            if ((_base = options[option])[k] == null) {
	              _base[k] = v;
	            }
	          }
	        }
	        _ref5 = Rivets.options;
	        for (_j = 0, _len1 = _ref5.length; _j < _len1; _j++) {
	          option = _ref5[_j];
	          options[option] = (_ref6 = this.component[option]) != null ? _ref6 : this.view[option];
	        }
	        this.componentView = new Rivets.View(this.el, scope, options);
	        this.componentView.bind();
	        _ref7 = this.observers;
	        _results = [];
	        for (key in _ref7) {
	          observer = _ref7[key];
	          _results.push(this.upstreamObservers[key] = this.observe(this.componentView.models, key, ((function(_this) {
	            return function(key, observer) {
	              return function() {
	                return observer.setValue(_this.componentView.models[key]);
	              };
	            };
	          })(this)).call(this, key, observer)));
	        }
	        return _results;
	      }
	    };

	    ComponentBinding.prototype.unbind = function() {
	      var key, observer, _ref1, _ref2, _ref3;
	      _ref1 = this.upstreamObservers;
	      for (key in _ref1) {
	        observer = _ref1[key];
	        observer.unobserve();
	      }
	      _ref2 = this.observers;
	      for (key in _ref2) {
	        observer = _ref2[key];
	        observer.unobserve();
	      }
	      return (_ref3 = this.componentView) != null ? _ref3.unbind.call(this) : void 0;
	    };

	    return ComponentBinding;

	  })(Rivets.Binding);

	  Rivets.TextBinding = (function(_super) {
	    __extends(TextBinding, _super);

	    function TextBinding(view, el, type, keypath, options) {
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.keypath = keypath;
	      this.options = options != null ? options : {};
	      this.sync = __bind(this.sync, this);
	      this.formatters = this.options.formatters || [];
	      this.dependencies = [];
	      this.formatterObservers = {};
	    }

	    TextBinding.prototype.binder = {
	      routine: function(node, value) {
	        return node.data = value != null ? value : '';
	      }
	    };

	    TextBinding.prototype.sync = function() {
	      return TextBinding.__super__.sync.apply(this, arguments);
	    };

	    return TextBinding;

	  })(Rivets.Binding);

	  Rivets["public"].binders.text = function(el, value) {
	    if (el.textContent != null) {
	      return el.textContent = value != null ? value : '';
	    } else {
	      return el.innerText = value != null ? value : '';
	    }
	  };

	  Rivets["public"].binders.html = function(el, value) {
	    return el.innerHTML = value != null ? value : '';
	  };

	  Rivets["public"].binders.show = function(el, value) {
	    return el.style.display = value ? '' : 'none';
	  };

	  Rivets["public"].binders.hide = function(el, value) {
	    return el.style.display = value ? 'none' : '';
	  };

	  Rivets["public"].binders.enabled = function(el, value) {
	    return el.disabled = !value;
	  };

	  Rivets["public"].binders.disabled = function(el, value) {
	    return el.disabled = !!value;
	  };

	  Rivets["public"].binders.checked = {
	    publishes: true,
	    priority: 2000,
	    bind: function(el) {
	      return Rivets.Util.bindEvent(el, 'change', this.publish);
	    },
	    unbind: function(el) {
	      return Rivets.Util.unbindEvent(el, 'change', this.publish);
	    },
	    routine: function(el, value) {
	      var _ref1;
	      if (el.type === 'radio') {
	        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) === (value != null ? value.toString() : void 0);
	      } else {
	        return el.checked = !!value;
	      }
	    }
	  };

	  Rivets["public"].binders.unchecked = {
	    publishes: true,
	    priority: 2000,
	    bind: function(el) {
	      return Rivets.Util.bindEvent(el, 'change', this.publish);
	    },
	    unbind: function(el) {
	      return Rivets.Util.unbindEvent(el, 'change', this.publish);
	    },
	    routine: function(el, value) {
	      var _ref1;
	      if (el.type === 'radio') {
	        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) !== (value != null ? value.toString() : void 0);
	      } else {
	        return el.checked = !value;
	      }
	    }
	  };

	  Rivets["public"].binders.value = {
	    publishes: true,
	    priority: 3000,
	    bind: function(el) {
	      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
	        this.event = el.tagName === 'SELECT' ? 'change' : 'input';
	        return Rivets.Util.bindEvent(el, this.event, this.publish);
	      }
	    },
	    unbind: function(el) {
	      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
	        return Rivets.Util.unbindEvent(el, this.event, this.publish);
	      }
	    },
	    routine: function(el, value) {
	      var o, _i, _len, _ref1, _ref2, _ref3, _results;
	      if (el.tagName === 'INPUT' && el.type === 'radio') {
	        return el.setAttribute('value', value);
	      } else if (window.jQuery != null) {
	        el = jQuery(el);
	        if ((value != null ? value.toString() : void 0) !== ((_ref1 = el.val()) != null ? _ref1.toString() : void 0)) {
	          return el.val(value != null ? value : '');
	        }
	      } else {
	        if (el.type === 'select-multiple') {
	          if (value != null) {
	            _results = [];
	            for (_i = 0, _len = el.length; _i < _len; _i++) {
	              o = el[_i];
	              _results.push(o.selected = (_ref2 = o.value, __indexOf.call(value, _ref2) >= 0));
	            }
	            return _results;
	          }
	        } else if ((value != null ? value.toString() : void 0) !== ((_ref3 = el.value) != null ? _ref3.toString() : void 0)) {
	          return el.value = value != null ? value : '';
	        }
	      }
	    }
	  };

	  Rivets["public"].binders["if"] = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      var attr, declaration;
	      if (this.marker == null) {
	        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
	        declaration = el.getAttribute(attr);
	        this.marker = document.createComment(" rivets: " + this.type + " " + declaration + " ");
	        this.bound = false;
	        el.removeAttribute(attr);
	        el.parentNode.insertBefore(this.marker, el);
	        return el.parentNode.removeChild(el);
	      }
	    },
	    unbind: function() {
	      var _ref1;
	      return (_ref1 = this.nested) != null ? _ref1.unbind() : void 0;
	    },
	    routine: function(el, value) {
	      var key, model, models, _ref1;
	      if (!!value === !this.bound) {
	        if (value) {
	          models = {};
	          _ref1 = this.view.models;
	          for (key in _ref1) {
	            model = _ref1[key];
	            models[key] = model;
	          }
	          (this.nested || (this.nested = new Rivets.View(el, models, this.view.options()))).bind();
	          this.marker.parentNode.insertBefore(el, this.marker.nextSibling);
	          return this.bound = true;
	        } else {
	          el.parentNode.removeChild(el);
	          this.nested.unbind();
	          return this.bound = false;
	        }
	      }
	    },
	    update: function(models) {
	      var _ref1;
	      return (_ref1 = this.nested) != null ? _ref1.update(models) : void 0;
	    }
	  };

	  Rivets["public"].binders.unless = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      return Rivets["public"].binders["if"].bind.call(this, el);
	    },
	    unbind: function() {
	      return Rivets["public"].binders["if"].unbind.call(this);
	    },
	    routine: function(el, value) {
	      return Rivets["public"].binders["if"].routine.call(this, el, !value);
	    },
	    update: function(models) {
	      return Rivets["public"].binders["if"].update.call(this, models);
	    }
	  };

	  Rivets["public"].binders['on-*'] = {
	    "function": true,
	    priority: 1000,
	    unbind: function(el) {
	      if (this.handler) {
	        return Rivets.Util.unbindEvent(el, this.args[0], this.handler);
	      }
	    },
	    routine: function(el, value) {
	      if (this.handler) {
	        Rivets.Util.unbindEvent(el, this.args[0], this.handler);
	      }
	      return Rivets.Util.bindEvent(el, this.args[0], this.handler = this.eventHandler(value));
	    }
	  };

	  Rivets["public"].binders['each-*'] = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      var attr, view, _i, _len, _ref1;
	      if (this.marker == null) {
	        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
	        this.marker = document.createComment(" rivets: " + this.type + " ");
	        this.iterated = [];
	        el.removeAttribute(attr);
	        el.parentNode.insertBefore(this.marker, el);
	        el.parentNode.removeChild(el);
	      } else {
	        _ref1 = this.iterated;
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          view = _ref1[_i];
	          view.bind();
	        }
	      }
	    },
	    unbind: function(el) {
	      var view, _i, _len, _ref1, _results;
	      if (this.iterated != null) {
	        _ref1 = this.iterated;
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          view = _ref1[_i];
	          _results.push(view.unbind());
	        }
	        return _results;
	      }
	    },
	    routine: function(el, collection) {
	      var binding, data, i, index, key, model, modelName, options, previous, template, view, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _ref3, _results;
	      modelName = this.args[0];
	      collection = collection || [];
	      if (this.iterated.length > collection.length) {
	        _ref1 = Array(this.iterated.length - collection.length);
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          i = _ref1[_i];
	          view = this.iterated.pop();
	          view.unbind();
	          this.marker.parentNode.removeChild(view.els[0]);
	        }
	      }
	      for (index = _j = 0, _len1 = collection.length; _j < _len1; index = ++_j) {
	        model = collection[index];
	        data = {
	          index: index
	        };
	        data[modelName] = model;
	        if (this.iterated[index] == null) {
	          _ref2 = this.view.models;
	          for (key in _ref2) {
	            model = _ref2[key];
	            if (data[key] == null) {
	              data[key] = model;
	            }
	          }
	          previous = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker;
	          options = this.view.options();
	          options.preloadData = true;
	          template = el.cloneNode(true);
	          view = new Rivets.View(template, data, options);
	          view.bind();
	          this.iterated.push(view);
	          this.marker.parentNode.insertBefore(template, previous.nextSibling);
	        } else if (this.iterated[index].models[modelName] !== model) {
	          this.iterated[index].update(data);
	        }
	      }
	      if (el.nodeName === 'OPTION') {
	        _ref3 = this.view.bindings;
	        _results = [];
	        for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	          binding = _ref3[_k];
	          if (binding.el === this.marker.parentNode && binding.type === 'value') {
	            _results.push(binding.sync());
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    },
	    update: function(models) {
	      var data, key, model, view, _i, _len, _ref1, _results;
	      data = {};
	      for (key in models) {
	        model = models[key];
	        if (key !== this.args[0]) {
	          data[key] = model;
	        }
	      }
	      _ref1 = this.iterated;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        view = _ref1[_i];
	        _results.push(view.update(data));
	      }
	      return _results;
	    }
	  };

	  Rivets["public"].binders['class-*'] = function(el, value) {
	    var elClass;
	    elClass = " " + el.className + " ";
	    if (!value === (elClass.indexOf(" " + this.args[0] + " ") !== -1)) {
	      return el.className = value ? "" + el.className + " " + this.args[0] : elClass.replace(" " + this.args[0] + " ", ' ').trim();
	    }
	  };

	  Rivets["public"].binders['*'] = function(el, value) {
	    if (value != null) {
	      return el.setAttribute(this.type, value);
	    } else {
	      return el.removeAttribute(this.type);
	    }
	  };

	  Rivets["public"].adapters['.'] = {
	    id: '_rv',
	    counter: 0,
	    weakmap: {},
	    weakReference: function(obj) {
	      var id, _base, _name;
	      if (!obj.hasOwnProperty(this.id)) {
	        id = this.counter++;
	        Object.defineProperty(obj, this.id, {
	          value: id
	        });
	      }
	      return (_base = this.weakmap)[_name = obj[this.id]] || (_base[_name] = {
	        callbacks: {}
	      });
	    },
	    cleanupWeakReference: function(ref, id) {
	      if (!Object.keys(ref.callbacks).length) {
	        if (!(ref.pointers && Object.keys(ref.pointers).length)) {
	          return delete this.weakmap[id];
	        }
	      }
	    },
	    stubFunction: function(obj, fn) {
	      var map, original, weakmap;
	      original = obj[fn];
	      map = this.weakReference(obj);
	      weakmap = this.weakmap;
	      return obj[fn] = function() {
	        var callback, k, r, response, _i, _len, _ref1, _ref2, _ref3, _ref4;
	        response = original.apply(obj, arguments);
	        _ref1 = map.pointers;
	        for (r in _ref1) {
	          k = _ref1[r];
	          _ref4 = (_ref2 = (_ref3 = weakmap[r]) != null ? _ref3.callbacks[k] : void 0) != null ? _ref2 : [];
	          for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
	            callback = _ref4[_i];
	            callback();
	          }
	        }
	        return response;
	      };
	    },
	    observeMutations: function(obj, ref, keypath) {
	      var fn, functions, map, _base, _i, _len;
	      if (Array.isArray(obj)) {
	        map = this.weakReference(obj);
	        if (map.pointers == null) {
	          map.pointers = {};
	          functions = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice'];
	          for (_i = 0, _len = functions.length; _i < _len; _i++) {
	            fn = functions[_i];
	            this.stubFunction(obj, fn);
	          }
	        }
	        if ((_base = map.pointers)[ref] == null) {
	          _base[ref] = [];
	        }
	        if (__indexOf.call(map.pointers[ref], keypath) < 0) {
	          return map.pointers[ref].push(keypath);
	        }
	      }
	    },
	    unobserveMutations: function(obj, ref, keypath) {
	      var idx, map, pointers;
	      if (Array.isArray(obj) && (obj[this.id] != null)) {
	        if (map = this.weakmap[obj[this.id]]) {
	          if (pointers = map.pointers[ref]) {
	            if ((idx = pointers.indexOf(keypath)) >= 0) {
	              pointers.splice(idx, 1);
	            }
	            if (!pointers.length) {
	              delete map.pointers[ref];
	            }
	            return this.cleanupWeakReference(map, obj[this.id]);
	          }
	        }
	      }
	    },
	    observe: function(obj, keypath, callback) {
	      var callbacks, desc, value;
	      callbacks = this.weakReference(obj).callbacks;
	      if (callbacks[keypath] == null) {
	        callbacks[keypath] = [];
	        desc = Object.getOwnPropertyDescriptor(obj, keypath);
	        if (!((desc != null ? desc.get : void 0) || (desc != null ? desc.set : void 0))) {
	          value = obj[keypath];
	          Object.defineProperty(obj, keypath, {
	            enumerable: true,
	            get: function() {
	              return value;
	            },
	            set: (function(_this) {
	              return function(newValue) {
	                var map, _i, _len, _ref1;
	                if (newValue !== value) {
	                  _this.unobserveMutations(value, obj[_this.id], keypath);
	                  value = newValue;
	                  if (map = _this.weakmap[obj[_this.id]]) {
	                    callbacks = map.callbacks;
	                    if (callbacks[keypath]) {
	                      _ref1 = callbacks[keypath].slice();
	                      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	                        callback = _ref1[_i];
	                        if (__indexOf.call(callbacks[keypath], callback) >= 0) {
	                          callback();
	                        }
	                      }
	                    }
	                    return _this.observeMutations(newValue, obj[_this.id], keypath);
	                  }
	                }
	              };
	            })(this)
	          });
	        }
	      }
	      if (__indexOf.call(callbacks[keypath], callback) < 0) {
	        callbacks[keypath].push(callback);
	      }
	      return this.observeMutations(obj[keypath], obj[this.id], keypath);
	    },
	    unobserve: function(obj, keypath, callback) {
	      var callbacks, idx, map;
	      if (map = this.weakmap[obj[this.id]]) {
	        if (callbacks = map.callbacks[keypath]) {
	          if ((idx = callbacks.indexOf(callback)) >= 0) {
	            callbacks.splice(idx, 1);
	            if (!callbacks.length) {
	              delete map.callbacks[keypath];
	            }
	          }
	          this.unobserveMutations(obj[keypath], obj[this.id], keypath);
	          return this.cleanupWeakReference(map, obj[this.id]);
	        }
	      }
	    },
	    get: function(obj, keypath) {
	      return obj[keypath];
	    },
	    set: function(obj, keypath, value) {
	      return obj[keypath] = value;
	    }
	  };

	  Rivets.factory = function(sightglass) {
	    Rivets.sightglass = sightglass;
	    Rivets["public"]._ = Rivets;
	    return Rivets["public"];
	  };

	  if (typeof (typeof module !== "undefined" && module !== null ? module.exports : void 0) === 'object') {
	    module.exports = Rivets.factory(__webpack_require__(351));
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(351)], __WEBPACK_AMD_DEFINE_RESULT__ = function(sightglass) {
	      return this.rivets = Rivets.factory(sightglass);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    this.rivets = Rivets.factory(sightglass);
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module)))

/***/ },
/* 353 */
/***/ function(module, exports) {

	/*!
	 * Stickyfill -- `position: sticky` polyfill
	 * v. 1.1.1 | https://github.com/wilddeer/stickyfill
	 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
	 *
	 * MIT License
	 */

	module.exports = (function(doc, win) {
	    if (!doc) {
	        doc = document;
	    }

	    if (!win) {
	        win = window;
	    }
	    
	    var watchArray = [],
	        scroll,
	        initialized = false,
	        html = doc.documentElement,
	        noop = function() {},
	        checkTimer,

	        //visibility API strings
	        hiddenPropertyName = 'hidden',
	        visibilityChangeEventName = 'visibilitychange';

	    //fallback to prefixed names in old webkit browsers
	    if (doc.webkitHidden !== undefined) {
	        hiddenPropertyName = 'webkitHidden';
	        visibilityChangeEventName = 'webkitvisibilitychange';
	    }

	    //test getComputedStyle
	    if (!win.getComputedStyle) {
	        seppuku();
	    }

	    //test for native support
	    var prefixes = ['', '-webkit-', '-moz-', '-ms-'],
	        block = document.createElement('div');

	    for (var i = prefixes.length - 1; i >= 0; i--) {
	        try {
	            block.style.position = prefixes[i] + 'sticky';
	        }
	        catch(e) {}
	        if (block.style.position != '') {
	            seppuku();
	        }
	    }

	    updateScrollPos();

	    //commit seppuku!
	    function seppuku() {
	        init = add = rebuild = pause = stop = kill = noop;
	    }

	    function mergeObjects(targetObj, sourceObject) {
	        for (key in sourceObject) {
	            if (sourceObject.hasOwnProperty(key)) {
	                targetObj[key] = sourceObject[key];
	            }
	        }
	    }

	    function parseNumeric(val) {
	        return parseFloat(val) || 0;
	    }

	    function updateScrollPos() {
	        scroll = {
	            top: win.pageYOffset,
	            left: win.pageXOffset
	        };
	    }

	    function onScroll() {
	        if (win.pageXOffset != scroll.left) {
	            updateScrollPos();
	            rebuild();
	            return;
	        }
	        
	        if (win.pageYOffset != scroll.top) {
	            updateScrollPos();
	            recalcAllPos();
	        }
	    }

	    //fixes flickering
	    function onWheel(event) {
	        setTimeout(function() {
	            if (win.pageYOffset != scroll.top) {
	                scroll.top = win.pageYOffset;
	                recalcAllPos();
	            }
	        }, 0);
	    }

	    function recalcAllPos() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            recalcElementPos(watchArray[i]);
	        }
	    }

	    function recalcElementPos(el) {
	        if (!el.inited) return;

	        var currentMode = (scroll.top <= el.limit.start? 0: scroll.top >= el.limit.end? 2: 1);

	        if (el.mode != currentMode) {
	            switchElementMode(el, currentMode);
	        }
	    }

	    //checks whether stickies start or stop positions have changed
	    function fastCheck() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (!watchArray[i].inited) continue;

	            var deltaTop = Math.abs(getDocOffsetTop(watchArray[i].clone) - watchArray[i].docOffsetTop),
	                deltaHeight = Math.abs(watchArray[i].parent.node.offsetHeight - watchArray[i].parent.height);

	            if (deltaTop >= 2 || deltaHeight >= 2) return false;
	        }
	        return true;
	    }

	    function initElement(el) {
	        if (isNaN(parseFloat(el.computed.top)) || el.isCell) return;

	        el.inited = true;

	        if (!el.clone) clone(el);
	        if (el.parent.computed.position != 'absolute' &&
	            el.parent.computed.position != 'relative') el.parent.node.style.position = 'relative';

	        recalcElementPos(el);

	        el.parent.height = el.parent.node.offsetHeight;
	        el.docOffsetTop = getDocOffsetTop(el.clone);
	    }

	    function deinitElement(el) {
	        var deinitParent = true;

	        el.clone && killClone(el);
	        mergeObjects(el.node.style, el.css);

	        //check whether element's parent is used by other stickies
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (watchArray[i].node !== el.node && watchArray[i].parent.node === el.parent.node) {
	                deinitParent = false;
	                break;
	            }
	        };

	        if (deinitParent) el.parent.node.style.position = el.parent.css.position;
	        el.mode = -1;
	    }

	    function initAll() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            initElement(watchArray[i]);
	        }
	    }

	    function deinitAll() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            deinitElement(watchArray[i]);
	        }
	    }

	    function switchElementMode(el, mode) {
	        var nodeStyle = el.node.style;

	        switch (mode) {
	            case 0:
	                nodeStyle.position = 'absolute';
	                nodeStyle.left = el.offset.left + 'px';
	                nodeStyle.right = el.offset.right + 'px';
	                nodeStyle.top = el.offset.top + 'px';
	                nodeStyle.bottom = 'auto';
	                nodeStyle.width = 'auto';
	                nodeStyle.marginLeft = 0;
	                nodeStyle.marginRight = 0;
	                nodeStyle.marginTop = 0;
	                break;

	            case 1:
	                nodeStyle.position = 'fixed';
	                nodeStyle.left = el.box.left + 'px';
	                nodeStyle.right = el.box.right + 'px';
	                nodeStyle.top = el.css.top;
	                nodeStyle.bottom = 'auto';
	                nodeStyle.width = 'auto';
	                nodeStyle.marginLeft = 0;
	                nodeStyle.marginRight = 0;
	                nodeStyle.marginTop = 0;
	                break;

	            case 2:
	                nodeStyle.position = 'absolute';
	                nodeStyle.left = el.offset.left + 'px';
	                nodeStyle.right = el.offset.right + 'px';
	                nodeStyle.top = 'auto';
	                nodeStyle.bottom = 0;
	                nodeStyle.width = 'auto';
	                nodeStyle.marginLeft = 0;
	                nodeStyle.marginRight = 0;
	                break;
	        }

	        el.mode = mode;
	    }

	    function clone(el) {
	        el.clone = document.createElement('div');

	        var refElement = el.node.nextSibling || el.node,
	            cloneStyle = el.clone.style;

	        cloneStyle.height = el.height + 'px';
	        cloneStyle.width = el.width + 'px';
	        cloneStyle.marginTop = el.computed.marginTop;
	        cloneStyle.marginBottom = el.computed.marginBottom;
	        cloneStyle.marginLeft = el.computed.marginLeft;
	        cloneStyle.marginRight = el.computed.marginRight;
	        cloneStyle.padding = cloneStyle.border = cloneStyle.borderSpacing = 0;
	        cloneStyle.fontSize = '1em';
	        cloneStyle.position = 'static';
	        cloneStyle.cssFloat = el.computed.cssFloat;

	        el.node.parentNode.insertBefore(el.clone, refElement);
	    }

	    function killClone(el) {
	        el.clone.parentNode.removeChild(el.clone);
	        el.clone = undefined;
	    }

	    function getElementParams(node) {
	        var computedStyle = getComputedStyle(node),
	            parentNode = node.parentNode,
	            parentComputedStyle = getComputedStyle(parentNode),
	            cachedPosition = node.style.position;

	        node.style.position = 'relative';

	        var computed = {
	                top: computedStyle.top,
	                marginTop: computedStyle.marginTop,
	                marginBottom: computedStyle.marginBottom,
	                marginLeft: computedStyle.marginLeft,
	                marginRight: computedStyle.marginRight,
	                cssFloat: computedStyle.cssFloat
	            },
	            numeric = {
	                top: parseNumeric(computedStyle.top),
	                marginBottom: parseNumeric(computedStyle.marginBottom),
	                paddingLeft: parseNumeric(computedStyle.paddingLeft),
	                paddingRight: parseNumeric(computedStyle.paddingRight),
	                borderLeftWidth: parseNumeric(computedStyle.borderLeftWidth),
	                borderRightWidth: parseNumeric(computedStyle.borderRightWidth)
	            };

	        node.style.position = cachedPosition;

	        var css = {
	                position: node.style.position,
	                top: node.style.top,
	                bottom: node.style.bottom,
	                left: node.style.left,
	                right: node.style.right,
	                width: node.style.width,
	                marginTop: node.style.marginTop,
	                marginLeft: node.style.marginLeft,
	                marginRight: node.style.marginRight
	            },
	            nodeOffset = getElementOffset(node),
	            parentOffset = getElementOffset(parentNode),
	            
	            parent = {
	                node: parentNode,
	                css: {
	                    position: parentNode.style.position
	                },
	                computed: {
	                    position: parentComputedStyle.position
	                },
	                numeric: {
	                    borderLeftWidth: parseNumeric(parentComputedStyle.borderLeftWidth),
	                    borderRightWidth: parseNumeric(parentComputedStyle.borderRightWidth),
	                    borderTopWidth: parseNumeric(parentComputedStyle.borderTopWidth),
	                    borderBottomWidth: parseNumeric(parentComputedStyle.borderBottomWidth)
	                }
	            },

	            el = {
	                node: node,
	                box: {
	                    left: nodeOffset.win.left,
	                    right: html.clientWidth - nodeOffset.win.right
	                },
	                offset: {
	                    top: nodeOffset.win.top - parentOffset.win.top - parent.numeric.borderTopWidth,
	                    left: nodeOffset.win.left - parentOffset.win.left - parent.numeric.borderLeftWidth,
	                    right: -nodeOffset.win.right + parentOffset.win.right - parent.numeric.borderRightWidth
	                },
	                css: css,
	                isCell: computedStyle.display == 'table-cell',
	                computed: computed,
	                numeric: numeric,
	                width: nodeOffset.win.right - nodeOffset.win.left,
	                height: nodeOffset.win.bottom - nodeOffset.win.top,
	                mode: -1,
	                inited: false,
	                parent: parent,
	                limit: {
	                    start: nodeOffset.doc.top - numeric.top,
	                    end: parentOffset.doc.top + parentNode.offsetHeight - parent.numeric.borderBottomWidth -
	                        node.offsetHeight - numeric.top - numeric.marginBottom
	                }
	            };

	        return el;
	    }

	    function getDocOffsetTop(node) {
	        var docOffsetTop = 0;

	        while (node) {
	            docOffsetTop += node.offsetTop;
	            node = node.offsetParent;
	        }

	        return docOffsetTop;
	    }

	    function getElementOffset(node) {
	        var box = node.getBoundingClientRect();

	            return {
	                doc: {
	                    top: box.top + win.pageYOffset,
	                    left: box.left + win.pageXOffset
	                },
	                win: box
	            };
	    }

	    function startFastCheckTimer() {
	        checkTimer = setInterval(function() {
	            !fastCheck() && rebuild();
	        }, 500);
	    }

	    function stopFastCheckTimer() {
	        clearInterval(checkTimer);
	    }

	    function handlePageVisibilityChange() {
	        if (!initialized) return;

	        if (document[hiddenPropertyName]) {
	            stopFastCheckTimer();
	        }
	        else {
	            startFastCheckTimer();
	        }
	    }

	    function init() {
	        if (initialized) return;

	        updateScrollPos();
	        initAll();

	        win.addEventListener('scroll', onScroll);
	        win.addEventListener('wheel', onWheel);

	        //watch for width changes
	        win.addEventListener('resize', rebuild);
	        win.addEventListener('orientationchange', rebuild);

	        //watch for page visibility
	        doc.addEventListener(visibilityChangeEventName, handlePageVisibilityChange);

	        startFastCheckTimer();

	        initialized = true;
	    }

	    function rebuild() {
	        if (!initialized) return;

	        deinitAll();
	        
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            watchArray[i] = getElementParams(watchArray[i].node);
	        }
	        
	        initAll();
	    }

	    function pause() {
	        win.removeEventListener('scroll', onScroll);
	        win.removeEventListener('wheel', onWheel);
	        win.removeEventListener('resize', rebuild);
	        win.removeEventListener('orientationchange', rebuild);
	        doc.removeEventListener(visibilityChangeEventName, handlePageVisibilityChange);

	        stopFastCheckTimer();

	        initialized = false;
	    }

	    function stop() {
	        pause();
	        deinitAll(); 
	    }

	    function kill() {
	        stop();

	        //empty the array without loosing the references,
	        //the most performant method according to http://jsperf.com/empty-javascript-array
	        while (watchArray.length) {
	            watchArray.pop();
	        }
	    }

	    function add(node) {
	        //check if Stickyfill is already applied to the node
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (watchArray[i].node === node) return;
	        };

	        var el = getElementParams(node);

	        watchArray.push(el);

	        if (!initialized) {
	            init();
	        }
	        else {
	            initElement(el);
	        }
	    }

	    function remove(node) {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (watchArray[i].node === node) {
	                deinitElement(watchArray[i]);
	                watchArray.splice(i, 1);
	            }
	        };
	    }

	    //expose Stickyfill
	    return {
	        stickies: watchArray,
	        add: add,
	        remove: remove,
	        init: init,
	        rebuild: rebuild,
	        pause: pause,
	        stop: stop,
	        kill: kill
	    };
	})

/***/ },
/* 354 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  range: {
	    begin: '-2000',
	    end: '' + new Date().getFullYear()
	  }
	};

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sample2 = __webpack_require__(356);

	var _sample3 = _interopRequireDefault(_sample2);

	exports.default = function () {
	  var div = (0, _util.$)('.hero');

	  if (div) {
	    var srcs = ['{{ site.data.heroes | map: "src" | join: "', '" }}'],
	        src = (0, _sample3.default)(srcs);

	    div.style.backgroundImage = 'url("' + (src.startsWith('http') ? '' : '{{ site.baseurl }}/images/') + src + '")';
	  }
	};

	var _util = __webpack_require__(375);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var baseRandom = __webpack_require__(357),
	    isArrayLike = __webpack_require__(358),
	    values = __webpack_require__(362);

	/**
	 * Gets a random element from `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to sample.
	 * @returns {*} Returns the random element.
	 * @example
	 *
	 * _.sample([1, 2, 3, 4]);
	 * // => 2
	 */
	function sample(collection) {
	  var array = isArrayLike(collection) ? collection : values(collection),
	      length = array.length;

	  return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
	}

	module.exports = sample;


/***/ },
/* 357 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor,
	    nativeRandom = Math.random;

	/**
	 * The base implementation of `_.random` without support for returning
	 * floating-point numbers.
	 *
	 * @private
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the random number.
	 */
	function baseRandom(lower, upper) {
	  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}

	module.exports = baseRandom;


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(359),
	    isFunction = __webpack_require__(6),
	    isLength = __webpack_require__(361);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(360);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 360 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 361 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(363),
	    keys = __webpack_require__(365);

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}

	module.exports = values;


/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(364);

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	module.exports = baseValues;


/***/ },
/* 364 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(366),
	    baseKeys = __webpack_require__(368),
	    indexKeys = __webpack_require__(369),
	    isArrayLike = __webpack_require__(358),
	    isIndex = __webpack_require__(47),
	    isPrototype = __webpack_require__(374);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(367);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 367 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 368 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(370),
	    isArguments = __webpack_require__(371),
	    isArray = __webpack_require__(41),
	    isLength = __webpack_require__(361),
	    isString = __webpack_require__(373);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 370 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(372);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(358),
	    isObjectLike = __webpack_require__(8);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(41),
	    isObjectLike = __webpack_require__(8);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 374 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$$ = exports.$ = undefined;

	var _flowRight2 = __webpack_require__(376);

	var _flowRight3 = _interopRequireDefault(_flowRight2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = exports.$ = document.querySelector.bind(document);
	var $$ = exports.$$ = (0, _flowRight3.default)(Array.from, document.querySelectorAll.bind(document));

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	var createFlow = __webpack_require__(377);

	/**
	 * This method is like `_.flow` except that it creates a function that
	 * invokes the given functions from right to left.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {...(Function|Function[])} [funcs] Functions to invoke.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flowRight(square, _.add);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flowRight = createFlow(true);

	module.exports = flowRight;


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var LodashWrapper = __webpack_require__(40),
	    baseFlatten = __webpack_require__(378),
	    getData = __webpack_require__(35),
	    getFuncName = __webpack_require__(37),
	    isArray = __webpack_require__(41),
	    isLaziable = __webpack_require__(32),
	    rest = __webpack_require__(52);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to compose bitmasks for wrapper metadata. */
	var CURRY_FLAG = 8,
	    PARTIAL_FLAG = 32,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256;

	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return rest(function(funcs) {
	    funcs = baseFlatten(funcs, 1);

	    var length = funcs.length,
	        index = length,
	        prereq = LodashWrapper.prototype.thru;

	    if (fromRight) {
	      funcs.reverse();
	    }
	    while (index--) {
	      var func = funcs[index];
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	        var wrapper = new LodashWrapper([], true);
	      }
	    }
	    index = wrapper ? index : length;
	    while (++index < length) {
	      func = funcs[index];

	      var funcName = getFuncName(func),
	          data = funcName == 'wrapper' ? getData(func) : undefined;

	      if (data && isLaziable(data[0]) &&
	            data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) &&
	            !data[4].length && data[9] == 1
	          ) {
	        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	      } else {
	        wrapper = (func.length == 1 && isLaziable(func))
	          ? wrapper[funcName]()
	          : wrapper.thru(func);
	      }
	    }
	    return function() {
	      var args = arguments,
	          value = args[0];

	      if (wrapper && args.length == 1 &&
	          isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	        return wrapper.plant(value).value();
	      }
	      var index = 0,
	          result = length ? funcs[index].apply(this, args) : value;

	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  });
	}

	module.exports = createFlow;


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(379),
	    isFlattenable = __webpack_require__(380);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 379 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(371),
	    isArray = __webpack_require__(41),
	    isArrayLikeObject = __webpack_require__(372);

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArrayLikeObject(value) && (isArray(value) || isArguments(value));
	}

	module.exports = isFlattenable;


/***/ },
/* 381 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var whichTransitionEvent = function whichTransitionEvent() {
	    var el = document.createElement('fakeelement'),
	        transitions = {
	      'transition': 'transitionend',
	      'OTransition': 'oTransitionEnd',
	      'MozTransition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd'
	    };

	    var t = void 0;
	    for (t in transitions) {
	      if (el.style[t] !== undefined) return transitions[t];
	    }
	  },
	      transitionEvent = whichTransitionEvent() || "transitionend",
	      sitedescSep = '#',
	      sitedescInt = 8000,
	      sitedesc = document.getElementById('sitedesc'),
	      sitedescArr = sitedesc.textContent.split(sitedescSep);

	  var sitedescCounter = 0;

	  function changeSitedesc(newText) {
	    function handler() {
	      sitedesc.removeEventListener(transitionEvent, handler);
	      sitedesc.textContent = newText;
	      setTimeout(function () {
	        sitedesc.style.opacity = 1;
	      }, 1);
	    }
	    sitedesc.addEventListener(transitionEvent, handler);
	    sitedesc.style.opacity = 0;
	  }

	  sitedesc.textContent = sitedescArr[sitedescCounter];

	  setInterval(function () {
	    sitedescCounter = sitedescCounter < sitedescArr.length - 1 ? sitedescCounter + 1 : 0;
	    changeSitedesc(sitedescArr[sitedescCounter]);
	  }, sitedescInt);
	};

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var imgs = Array.from(document.querySelectorAll('.post-content img'));

	  imgs.forEach(function (img) {
	    var hint = (0, _crel2.default)('div', { 'class': 'zoom-hint ion-ios-search-strong' }),
	        parent = img.parentElement;

	    if (!parent.style.position || parent.style.position === 'static') {
	      parent.style.position = 'relative';
	    }

	    Object.assign(hint.style, {
	      top: '1em',
	      left: 'auto',
	      right: '1.25em'
	    });

	    parent.appendChild(hint);
	  });
	};

	var _crel = __webpack_require__(383);

	var _crel2 = _interopRequireDefault(_crel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	//Copyright (C) 2012 Kory Nunn

	//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	/*

	    This code is not formatted for readability, but rather run-speed and to assist compilers.

	    However, the code's intention should be transparent.

	    *** IE SUPPORT ***

	    If you require this library to work in IE7, add the following after declaring crel.

	    var testDiv = document.createElement('div'),
	        testLabel = document.createElement('label');

	    testDiv.setAttribute('class', 'a');
	    testDiv['className'] !== 'a' ? crel.attrMap['class'] = 'className':undefined;
	    testDiv.setAttribute('name','a');
	    testDiv['name'] !== 'a' ? crel.attrMap['name'] = function(element, value){
	        element.id = value;
	    }:undefined;


	    testLabel.setAttribute('for', 'a');
	    testLabel['htmlFor'] !== 'a' ? crel.attrMap['for'] = 'htmlFor':undefined;



	*/

	(function (root, factory) {
	    if (true) {
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.amd) {
	        define(factory);
	    } else {
	        root.crel = factory();
	    }
	}(this, function () {
	    var fn = 'function',
	        obj = 'object',
	        nodeType = 'nodeType',
	        textContent = 'textContent',
	        setAttribute = 'setAttribute',
	        attrMapString = 'attrMap',
	        isNodeString = 'isNode',
	        isElementString = 'isElement',
	        d = typeof document === obj ? document : {},
	        isType = function(a, type){
	            return typeof a === type;
	        },
	        isNode = typeof Node === fn ? function (object) {
	            return object instanceof Node;
	        } :
	        // in IE <= 8 Node is an object, obviously..
	        function(object){
	            return object &&
	                isType(object, obj) &&
	                (nodeType in object) &&
	                isType(object.ownerDocument,obj);
	        },
	        isElement = function (object) {
	            return crel[isNodeString](object) && object[nodeType] === 1;
	        },
	        isArray = function(a){
	            return a instanceof Array;
	        },
	        appendChild = function(element, child) {
	          if(!crel[isNodeString](child)){
	              child = d.createTextNode(child);
	          }
	          element.appendChild(child);
	        };


	    function crel(){
	        var args = arguments, //Note: assigned to a variable to assist compilers. Saves about 40 bytes in closure compiler. Has negligable effect on performance.
	            element = args[0],
	            child,
	            settings = args[1],
	            childIndex = 2,
	            argumentsLength = args.length,
	            attributeMap = crel[attrMapString];

	        element = crel[isElementString](element) ? element : d.createElement(element);
	        // shortcut
	        if(argumentsLength === 1){
	            return element;
	        }

	        if(!isType(settings,obj) || crel[isNodeString](settings) || isArray(settings)) {
	            --childIndex;
	            settings = null;
	        }

	        // shortcut if there is only one child that is a string
	        if((argumentsLength - childIndex) === 1 && isType(args[childIndex], 'string') && element[textContent] !== undefined){
	            element[textContent] = args[childIndex];
	        }else{
	            for(; childIndex < argumentsLength; ++childIndex){
	                child = args[childIndex];

	                if(child == null){
	                    continue;
	                }

	                if (isArray(child)) {
	                  for (var i=0; i < child.length; ++i) {
	                    appendChild(element, child[i]);
	                  }
	                } else {
	                  appendChild(element, child);
	                }
	            }
	        }

	        for(var key in settings){
	            if(!attributeMap[key]){
	                element[setAttribute](key, settings[key]);
	            }else{
	                var attr = attributeMap[key];
	                if(typeof attr === fn){
	                    attr(element, settings[key]);
	                }else{
	                    element[setAttribute](attr, settings[key]);
	                }
	            }
	        }

	        return element;
	    }

	    // Used for mapping one kind of attribute to the supported version of that in bad browsers.
	    crel[attrMapString] = {};

	    crel[isElementString] = isElement;

	    crel[isNodeString] = isNode;

	    if(typeof Proxy !== 'undefined'){
	        crel.proxy = new Proxy(crel, {
	            get: function(target, key){
	                !(key in crel) && (crel[key] = crel.bind(null, key));
	                return crel[key];
	            }
	        });
	    }

	    return crel;
	}));


/***/ },
/* 384 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (window.isArticle) {
	    var els = Array.from(document.querySelectorAll('.post-content *')),
	        footerStart = els.find(function (_ref) {
	      var textContent = _ref.textContent;
	      return textContent.trim().toLowerCase().startsWith('more information');
	    });

	    var el = footerStart;

	    while (el.nextElementSibling) {
	      el.className += " post-footer";
	      el = el.nextElementSibling;
	    }
	  }
	};

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (div, thumbs, images) {
	  var photoswipeEl = (0, _util.$)('.pswp'),
	      getThumbBoundsFn = function getThumbBoundsFn(i) {
	    return thumbBounds(thumbs[i]);
	  };

	  div.addEventListener('click', function (event) {
	    var index = thumbs.indexOf(event.target);
	    if (index >= 0) {
	      var options = { index: index, getThumbBoundsFn: getThumbBoundsFn },
	          pswp = new _photoswipe2.default(photoswipeEl, _photoswipeUiDefault2.default, images, options);
	      pswp.init();
	    }
	  });
	};

	var _util = __webpack_require__(375);

	var _photoswipe = __webpack_require__(386);

	var _photoswipe2 = _interopRequireDefault(_photoswipe);

	var _photoswipeUiDefault = __webpack_require__(387);

	var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function thumbBounds(el) {
	  var pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
	      rect = el.getBoundingClientRect();

	  return {
	    x: rect.left,
	    y: rect.top + pageYScroll,
	    w: rect.width
	  };
	}

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.1 - 2015-12-24
	* http://photoswipe.com
	* Copyright (c) 2015 Dmitry Semenov; */
	(function (root, factory) { 
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.PhotoSwipe = factory();
		}
	})(this, function () {

		'use strict';
		var PhotoSwipe = function(template, UiClass, items, options){

	/*>>framework-bridge*/
	/**
	 *
	 * Set of generic functions used by gallery.
	 * 
	 * You're free to modify anything here as long as functionality is kept.
	 * 
	 */
	var framework = {
		features: null,
		bind: function(target, type, listener, unbind) {
			var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
			type = type.split(' ');
			for(var i = 0; i < type.length; i++) {
				if(type[i]) {
					target[methodName]( type[i], listener, false);
				}
			}
		},
		isArray: function(obj) {
			return (obj instanceof Array);
		},
		createEl: function(classes, tag) {
			var el = document.createElement(tag || 'div');
			if(classes) {
				el.className = classes;
			}
			return el;
		},
		getScrollY: function() {
			var yOffset = window.pageYOffset;
			return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
		},
		unbind: function(target, type, listener) {
			framework.bind(target,type,listener,true);
		},
		removeClass: function(el, className) {
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
			el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
		},
		addClass: function(el, className) {
			if( !framework.hasClass(el,className) ) {
				el.className += (el.className ? ' ' : '') + className;
			}
		},
		hasClass: function(el, className) {
			return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
		},
		getChildByClass: function(parentEl, childClassName) {
			var node = parentEl.firstChild;
			while(node) {
				if( framework.hasClass(node, childClassName) ) {
					return node;
				}
				node = node.nextSibling;
			}
		},
		arraySearch: function(array, value, key) {
			var i = array.length;
			while(i--) {
				if(array[i][key] === value) {
					return i;
				} 
			}
			return -1;
		},
		extend: function(o1, o2, preventOverwrite) {
			for (var prop in o2) {
				if (o2.hasOwnProperty(prop)) {
					if(preventOverwrite && o1.hasOwnProperty(prop)) {
						continue;
					}
					o1[prop] = o2[prop];
				}
			}
		},
		easing: {
			sine: {
				out: function(k) {
					return Math.sin(k * (Math.PI / 2));
				},
				inOut: function(k) {
					return - (Math.cos(Math.PI * k) - 1) / 2;
				}
			},
			cubic: {
				out: function(k) {
					return --k * k * k + 1;
				}
			}
			/*
				elastic: {
					out: function ( k ) {

						var s, a = 0.1, p = 0.4;
						if ( k === 0 ) return 0;
						if ( k === 1 ) return 1;
						if ( !a || a < 1 ) { a = 1; s = p / 4; }
						else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
						return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

					},
				},
				back: {
					out: function ( k ) {
						var s = 1.70158;
						return --k * k * ( ( s + 1 ) * k + s ) + 1;
					}
				}
			*/
		},

		/**
		 * 
		 * @return {object}
		 * 
		 * {
		 *  raf : request animation frame function
		 *  caf : cancel animation frame function
		 *  transfrom : transform property key (with vendor), or null if not supported
		 *  oldIE : IE8 or below
		 * }
		 * 
		 */
		detectFeatures: function() {
			if(framework.features) {
				return framework.features;
			}
			var helperEl = framework.createEl(),
				helperStyle = helperEl.style,
				vendor = '',
				features = {};

			// IE8 and below
			features.oldIE = document.all && !document.addEventListener;

			features.touch = 'ontouchstart' in window;

			if(window.requestAnimationFrame) {
				features.raf = window.requestAnimationFrame;
				features.caf = window.cancelAnimationFrame;
			}

			features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

			// fix false-positive detection of old Android in new IE
			// (IE11 ua string contains "Android 4.0")
			
			if(!features.pointerEvent) { 

				var ua = navigator.userAgent;

				// Detect if device is iPhone or iPod and if it's older than iOS 8
				// http://stackoverflow.com/a/14223920
				// 
				// This detection is made because of buggy top/bottom toolbars
				// that don't trigger window.resize event.
				// For more info refer to _isFixedPosition variable in core.js

				if (/iP(hone|od)/.test(navigator.platform)) {
					var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
					if(v && v.length > 0) {
						v = parseInt(v[1], 10);
						if(v >= 1 && v < 8 ) {
							features.isOldIOSPhone = true;
						}
					}
				}

				// Detect old Android (before KitKat)
				// due to bugs related to position:fixed
				// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
				
				var match = ua.match(/Android\s([0-9\.]*)/);
				var androidversion =  match ? match[1] : 0;
				androidversion = parseFloat(androidversion);
				if(androidversion >= 1 ) {
					if(androidversion < 4.4) {
						features.isOldAndroid = true; // for fixed position bug & performance
					}
					features.androidVersion = androidversion; // for touchend bug
				}	
				features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

				// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
			}
			
			var styleChecks = ['transform', 'perspective', 'animationName'],
				vendors = ['', 'webkit','Moz','ms','O'],
				styleCheckItem,
				styleName;

			for(var i = 0; i < 4; i++) {
				vendor = vendors[i];

				for(var a = 0; a < 3; a++) {
					styleCheckItem = styleChecks[a];

					// uppercase first letter of property name, if vendor is present
					styleName = vendor + (vendor ? 
											styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
											styleCheckItem);
				
					if(!features[styleCheckItem] && styleName in helperStyle ) {
						features[styleCheckItem] = styleName;
					}
				}

				if(vendor && !features.raf) {
					vendor = vendor.toLowerCase();
					features.raf = window[vendor+'RequestAnimationFrame'];
					if(features.raf) {
						features.caf = window[vendor+'CancelAnimationFrame'] || 
										window[vendor+'CancelRequestAnimationFrame'];
					}
				}
			}
				
			if(!features.raf) {
				var lastTime = 0;
				features.raf = function(fn) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
				features.caf = function(id) { clearTimeout(id); };
			}

			// Detect SVG support
			features.svg = !!document.createElementNS && 
							!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

			framework.features = features;

			return features;
		}
	};

	framework.detectFeatures();

	// Override addEventListener for old versions of IE
	if(framework.features.oldIE) {

		framework.bind = function(target, type, listener, unbind) {
			
			type = type.split(' ');

			var methodName = (unbind ? 'detach' : 'attach') + 'Event',
				evName,
				_handleEv = function() {
					listener.handleEvent.call(listener);
				};

			for(var i = 0; i < type.length; i++) {
				evName = type[i];
				if(evName) {

					if(typeof listener === 'object' && listener.handleEvent) {
						if(!unbind) {
							listener['oldIE' + evName] = _handleEv;
						} else {
							if(!listener['oldIE' + evName]) {
								return false;
							}
						}

						target[methodName]( 'on' + evName, listener['oldIE' + evName]);
					} else {
						target[methodName]( 'on' + evName, listener);
					}

				}
			}
		};
		
	}

	/*>>framework-bridge*/

	/*>>core*/
	//function(template, UiClass, items, options)

	var self = this;

	/**
	 * Static vars, don't change unless you know what you're doing.
	 */
	var DOUBLE_TAP_RADIUS = 25, 
		NUM_HOLDERS = 3;

	/**
	 * Options
	 */
	var _options = {
		allowPanToNext:true,
		spacing: 0.12,
		bgOpacity: 1,
		mouseUsed: false,
		loop: true,
		pinchToClose: true,
		closeOnScroll: true,
		closeOnVerticalDrag: true,
		verticalDragRange: 0.75,
		hideAnimationDuration: 333,
		showAnimationDuration: 333,
		showHideOpacity: false,
		focus: true,
		escKey: true,
		arrowKeys: true,
		mainScrollEndFriction: 0.35,
		panEndFriction: 0.35,
		isClickableElement: function(el) {
	        return el.tagName === 'A';
	    },
	    getDoubleTapZoom: function(isMouseClick, item) {
	    	if(isMouseClick) {
	    		return 1;
	    	} else {
	    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
	    	}
	    },
	    maxSpreadZoom: 1.33,
		modal: true,

		// not fully implemented yet
		scaleMode: 'fit' // TODO
	};
	framework.extend(_options, options);


	/**
	 * Private helper variables & functions
	 */

	var _getEmptyPoint = function() { 
			return {x:0,y:0}; 
		};

	var _isOpen,
		_isDestroying,
		_closedByScroll,
		_currentItemIndex,
		_containerStyle,
		_containerShiftIndex,
		_currPanDist = _getEmptyPoint(),
		_startPanOffset = _getEmptyPoint(),
		_panOffset = _getEmptyPoint(),
		_upMoveEvents, // drag move, drag end & drag cancel events array
		_downEvents, // drag start events array
		_globalEventHandlers,
		_viewportSize = {},
		_currZoomLevel,
		_startZoomLevel,
		_translatePrefix,
		_translateSufix,
		_updateSizeInterval,
		_itemsNeedUpdate,
		_currPositionIndex = 0,
		_offset = {},
		_slideSize = _getEmptyPoint(), // size of slide area, including spacing
		_itemHolders,
		_prevItemIndex,
		_indexDiff = 0, // difference of indexes since last content update
		_dragStartEvent,
		_dragMoveEvent,
		_dragEndEvent,
		_dragCancelEvent,
		_transformKey,
		_pointerEventEnabled,
		_isFixedPosition = true,
		_likelyTouchDevice,
		_modules = [],
		_requestAF,
		_cancelAF,
		_initalClassName,
		_initalWindowScrollY,
		_oldIE,
		_currentWindowScrollY,
		_features,
		_windowVisibleSize = {},
		_renderMaxResolution = false,

		// Registers PhotoSWipe module (History, Controller ...)
		_registerModule = function(name, module) {
			framework.extend(self, module.publicMethods);
			_modules.push(name);
		},

		_getLoopedId = function(index) {
			var numSlides = _getNumItems();
			if(index > numSlides - 1) {
				return index - numSlides;
			} else  if(index < 0) {
				return numSlides + index;
			}
			return index;
		},
		
		// Micro bind/trigger
		_listeners = {},
		_listen = function(name, fn) {
			if(!_listeners[name]) {
				_listeners[name] = [];
			}
			return _listeners[name].push(fn);
		},
		_shout = function(name) {
			var listeners = _listeners[name];

			if(listeners) {
				var args = Array.prototype.slice.call(arguments);
				args.shift();

				for(var i = 0; i < listeners.length; i++) {
					listeners[i].apply(self, args);
				}
			}
		},

		_getCurrentTime = function() {
			return new Date().getTime();
		},
		_applyBgOpacity = function(opacity) {
			_bgOpacity = opacity;
			self.bg.style.opacity = opacity * _options.bgOpacity;
		},

		_applyZoomTransform = function(styleObj,x,y,zoom,item) {
			if(!_renderMaxResolution || (item && item !== self.currItem) ) {
				zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
			}
				
			styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
		},
		_applyCurrentZoomPan = function( allowRenderResolution ) {
			if(_currZoomElementStyle) {

				if(allowRenderResolution) {
					if(_currZoomLevel > self.currItem.fitRatio) {
						if(!_renderMaxResolution) {
							_setImageSize(self.currItem, false, true);
							_renderMaxResolution = true;
						}
					} else {
						if(_renderMaxResolution) {
							_setImageSize(self.currItem);
							_renderMaxResolution = false;
						}
					}
				}
				

				_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
			}
		},
		_applyZoomPanToItem = function(item) {
			if(item.container) {

				_applyZoomTransform(item.container.style, 
									item.initialPosition.x, 
									item.initialPosition.y, 
									item.initialZoomLevel,
									item);
			}
		},
		_setTranslateX = function(x, elStyle) {
			elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
		},
		_moveMainScroll = function(x, dragging) {

			if(!_options.loop && dragging) {
				var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
					delta = Math.round(x - _mainScrollPos.x);

				if( (newSlideIndexOffset < 0 && delta > 0) || 
					(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
					x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
				} 
			}
			
			_mainScrollPos.x = x;
			_setTranslateX(x, _containerStyle);
		},
		_calculatePanOffset = function(axis, zoomLevel) {
			var m = _midZoomPoint[axis] - _offset[axis];
			return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
		},
		
		_equalizePoints = function(p1, p2) {
			p1.x = p2.x;
			p1.y = p2.y;
			if(p2.id) {
				p1.id = p2.id;
			}
		},
		_roundPoint = function(p) {
			p.x = Math.round(p.x);
			p.y = Math.round(p.y);
		},

		_mouseMoveTimeout = null,
		_onFirstMouseMove = function() {
			// Wait until mouse move event is fired at least twice during 100ms
			// We do this, because some mobile browsers trigger it on touchstart
			if(_mouseMoveTimeout ) { 
				framework.unbind(document, 'mousemove', _onFirstMouseMove);
				framework.addClass(template, 'pswp--has_mouse');
				_options.mouseUsed = true;
				_shout('mouseUsed');
			}
			_mouseMoveTimeout = setTimeout(function() {
				_mouseMoveTimeout = null;
			}, 100);
		},

		_bindEvents = function() {
			framework.bind(document, 'keydown', self);

			if(_features.transform) {
				// don't bind click event in browsers that don't support transform (mostly IE8)
				framework.bind(self.scrollWrap, 'click', self);
			}
			

			if(!_options.mouseUsed) {
				framework.bind(document, 'mousemove', _onFirstMouseMove);
			}

			framework.bind(window, 'resize scroll', self);

			_shout('bindEvents');
		},

		_unbindEvents = function() {
			framework.unbind(window, 'resize', self);
			framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
			framework.unbind(document, 'keydown', self);
			framework.unbind(document, 'mousemove', _onFirstMouseMove);

			if(_features.transform) {
				framework.unbind(self.scrollWrap, 'click', self);
			}

			if(_isDragging) {
				framework.unbind(window, _upMoveEvents, self);
			}

			_shout('unbindEvents');
		},
		
		_calculatePanBounds = function(zoomLevel, update) {
			var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
			if(update) {
				_currPanBounds = bounds;
			}
			return bounds;
		},
		
		_getMinZoomLevel = function(item) {
			if(!item) {
				item = self.currItem;
			}
			return item.initialZoomLevel;
		},
		_getMaxZoomLevel = function(item) {
			if(!item) {
				item = self.currItem;
			}
			return item.w > 0 ? _options.maxSpreadZoom : 1;
		},

		// Return true if offset is out of the bounds
		_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
			if(destZoomLevel === self.currItem.initialZoomLevel) {
				destPanOffset[axis] = self.currItem.initialPosition[axis];
				return true;
			} else {
				destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

				if(destPanOffset[axis] > destPanBounds.min[axis]) {
					destPanOffset[axis] = destPanBounds.min[axis];
					return true;
				} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
					destPanOffset[axis] = destPanBounds.max[axis];
					return true;
				}
			}
			return false;
		},

		_setupTransforms = function() {

			if(_transformKey) {
				// setup 3d transforms
				var allow3dTransform = _features.perspective && !_likelyTouchDevice;
				_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
				_translateSufix = _features.perspective ? ', 0px)' : ')';	
				return;
			}

			// Override zoom/pan/move functions in case old browser is used (most likely IE)
			// (so they use left/top/width/height, instead of CSS transform)
		
			_transformKey = 'left';
			framework.addClass(template, 'pswp--ie');

			_setTranslateX = function(x, elStyle) {
				elStyle.left = x + 'px';
			};
			_applyZoomPanToItem = function(item) {

				var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					s = item.container.style,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';
				s.left = item.initialPosition.x + 'px';
				s.top = item.initialPosition.y + 'px';

			};
			_applyCurrentZoomPan = function() {
				if(_currZoomElementStyle) {

					var s = _currZoomElementStyle,
						item = self.currItem,
						zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
						w = zoomRatio * item.w,
						h = zoomRatio * item.h;

					s.width = w + 'px';
					s.height = h + 'px';


					s.left = _panOffset.x + 'px';
					s.top = _panOffset.y + 'px';
				}
				
			};
		},

		_onKeyDown = function(e) {
			var keydownAction = '';
			if(_options.escKey && e.keyCode === 27) { 
				keydownAction = 'close';
			} else if(_options.arrowKeys) {
				if(e.keyCode === 37) {
					keydownAction = 'prev';
				} else if(e.keyCode === 39) { 
					keydownAction = 'next';
				}
			}

			if(keydownAction) {
				// don't do anything if special key pressed to prevent from overriding default browser actions
				// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
				if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
					if(e.preventDefault) {
						e.preventDefault();
					} else {
						e.returnValue = false;
					} 
					self[keydownAction]();
				}
			}
		},

		_onGlobalClick = function(e) {
			if(!e) {
				return;
			}

			// don't allow click event to pass through when triggering after drag or some other gesture
			if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
				e.preventDefault();
				e.stopPropagation();
			}
		},

		_updatePageScrollOffset = function() {
			self.setScrollOffset(0, framework.getScrollY());		
		};
		


		



	// Micro animation engine
	var _animations = {},
		_numAnimations = 0,
		_stopAnimation = function(name) {
			if(_animations[name]) {
				if(_animations[name].raf) {
					_cancelAF( _animations[name].raf );
				}
				_numAnimations--;
				delete _animations[name];
			}
		},
		_registerStartAnimation = function(name) {
			if(_animations[name]) {
				_stopAnimation(name);
			}
			if(!_animations[name]) {
				_numAnimations++;
				_animations[name] = {};
			}
		},
		_stopAllAnimations = function() {
			for (var prop in _animations) {

				if( _animations.hasOwnProperty( prop ) ) {
					_stopAnimation(prop);
				} 
				
			}
		},
		_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
			var startAnimTime = _getCurrentTime(), t;
			_registerStartAnimation(name);

			var animloop = function(){
				if ( _animations[name] ) {
					
					t = _getCurrentTime() - startAnimTime; // time diff
					//b - beginning (start prop)
					//d - anim duration

					if ( t >= d ) {
						_stopAnimation(name);
						onUpdate(endProp);
						if(onComplete) {
							onComplete();
						}
						return;
					}
					onUpdate( (endProp - b) * easingFn(t/d) + b );

					_animations[name].raf = _requestAF(animloop);
				}
			};
			animloop();
		};
		


	var publicMethods = {

		// make a few local variables and functions public
		shout: _shout,
		listen: _listen,
		viewportSize: _viewportSize,
		options: _options,

		isMainScrollAnimating: function() {
			return _mainScrollAnimating;
		},
		getZoomLevel: function() {
			return _currZoomLevel;
		},
		getCurrentIndex: function() {
			return _currentItemIndex;
		},
		isDragging: function() {
			return _isDragging;
		},	
		isZooming: function() {
			return _isZooming;
		},
		setScrollOffset: function(x,y) {
			_offset.x = x;
			_currentWindowScrollY = _offset.y = y;
			_shout('updateScrollOffset', _offset);
		},
		applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
			_panOffset.x = panX;
			_panOffset.y = panY;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan( allowRenderResolution );
		},

		init: function() {

			if(_isOpen || _isDestroying) {
				return;
			}

			var i;

			self.framework = framework; // basic functionality
			self.template = template; // root DOM element of PhotoSwipe
			self.bg = framework.getChildByClass(template, 'pswp__bg');

			_initalClassName = template.className;
			_isOpen = true;
					
			_features = framework.detectFeatures();
			_requestAF = _features.raf;
			_cancelAF = _features.caf;
			_transformKey = _features.transform;
			_oldIE = _features.oldIE;
			
			self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
			self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

			_containerStyle = self.container.style; // for fast access

			// Objects that hold slides (there are only 3 in DOM)
			self.itemHolders = _itemHolders = [
				{el:self.container.children[0] , wrap:0, index: -1},
				{el:self.container.children[1] , wrap:0, index: -1},
				{el:self.container.children[2] , wrap:0, index: -1}
			];

			// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

			_setupTransforms();

			// Setup global events
			_globalEventHandlers = {
				resize: self.updateSize,
				scroll: _updatePageScrollOffset,
				keydown: _onKeyDown,
				click: _onGlobalClick
			};

			// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
			// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
			var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
			if(!_features.animationName || !_features.transform || oldPhone) {
				_options.showAnimationDuration = _options.hideAnimationDuration = 0;
			}

			// init modules
			for(i = 0; i < _modules.length; i++) {
				self['init' + _modules[i]]();
			}
			
			// init
			if(UiClass) {
				var ui = self.ui = new UiClass(self, framework);
				ui.init();
			}

			_shout('firstUpdate');
			_currentItemIndex = _currentItemIndex || _options.index || 0;
			// validate index
			if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
				_currentItemIndex = 0;
			}
			self.currItem = _getItemAt( _currentItemIndex );

			
			if(_features.isOldIOSPhone || _features.isOldAndroid) {
				_isFixedPosition = false;
			}
			
			template.setAttribute('aria-hidden', 'false');
			if(_options.modal) {
				if(!_isFixedPosition) {
					template.style.position = 'absolute';
					template.style.top = framework.getScrollY() + 'px';
				} else {
					template.style.position = 'fixed';
				}
			}

			if(_currentWindowScrollY === undefined) {
				_shout('initialLayout');
				_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
			}
			
			// add classes to root element of PhotoSwipe
			var rootClasses = 'pswp--open ';
			if(_options.mainClass) {
				rootClasses += _options.mainClass + ' ';
			}
			if(_options.showHideOpacity) {
				rootClasses += 'pswp--animate_opacity ';
			}
			rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
			rootClasses += _features.animationName ? ' pswp--css_animation' : '';
			rootClasses += _features.svg ? ' pswp--svg' : '';
			framework.addClass(template, rootClasses);

			self.updateSize();

			// initial update
			_containerShiftIndex = -1;
			_indexDiff = null;
			for(i = 0; i < NUM_HOLDERS; i++) {
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
			}

			if(!_oldIE) {
				framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
			}	

			_listen('initialZoomInEnd', function() {
				self.setContent(_itemHolders[0], _currentItemIndex-1);
				self.setContent(_itemHolders[2], _currentItemIndex+1);

				_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

				if(_options.focus) {
					// focus causes layout, 
					// which causes lag during the animation, 
					// that's why we delay it untill the initial zoom transition ends
					template.focus();
				}
				 

				_bindEvents();
			});

			// set content for center slide (first time)
			self.setContent(_itemHolders[1], _currentItemIndex);
			
			self.updateCurrItem();

			_shout('afterInit');

			if(!_isFixedPosition) {

				// On all versions of iOS lower than 8.0, we check size of viewport every second.
				// 
				// This is done to detect when Safari top & bottom bars appear, 
				// as this action doesn't trigger any events (like resize). 
				// 
				// On iOS8 they fixed this.
				// 
				// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
				
				_updateSizeInterval = setInterval(function() {
					if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
						self.updateSize();
					}
				}, 1000);
			}

			framework.addClass(template, 'pswp--visible');
		},

		// Close the gallery, then destroy it
		close: function() {
			if(!_isOpen) {
				return;
			}

			_isOpen = false;
			_isDestroying = true;
			_shout('close');
			_unbindEvents();

			_showOrHide(self.currItem, null, true, self.destroy);
		},

		// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
		destroy: function() {
			_shout('destroy');

			if(_showOrHideTimeout) {
				clearTimeout(_showOrHideTimeout);
			}
			
			template.setAttribute('aria-hidden', 'true');
			template.className = _initalClassName;

			if(_updateSizeInterval) {
				clearInterval(_updateSizeInterval);
			}

			framework.unbind(self.scrollWrap, _downEvents, self);

			// we unbind scroll event at the end, as closing animation may depend on it
			framework.unbind(window, 'scroll', self);

			_stopDragUpdateLoop();

			_stopAllAnimations();

			_listeners = null;
		},

		/**
		 * Pan image to position
		 * @param {Number} x     
		 * @param {Number} y     
		 * @param {Boolean} force Will ignore bounds if set to true.
		 */
		panTo: function(x,y,force) {
			if(!force) {
				if(x > _currPanBounds.min.x) {
					x = _currPanBounds.min.x;
				} else if(x < _currPanBounds.max.x) {
					x = _currPanBounds.max.x;
				}

				if(y > _currPanBounds.min.y) {
					y = _currPanBounds.min.y;
				} else if(y < _currPanBounds.max.y) {
					y = _currPanBounds.max.y;
				}
			}
			
			_panOffset.x = x;
			_panOffset.y = y;
			_applyCurrentZoomPan();
		},
		
		handleEvent: function (e) {
			e = e || window.event;
			if(_globalEventHandlers[e.type]) {
				_globalEventHandlers[e.type](e);
			}
		},


		goTo: function(index) {

			index = _getLoopedId(index);

			var diff = index - _currentItemIndex;
			_indexDiff = diff;

			_currentItemIndex = index;
			self.currItem = _getItemAt( _currentItemIndex );
			_currPositionIndex -= diff;
			
			_moveMainScroll(_slideSize.x * _currPositionIndex);
			

			_stopAllAnimations();
			_mainScrollAnimating = false;

			self.updateCurrItem();
		},
		next: function() {
			self.goTo( _currentItemIndex + 1);
		},
		prev: function() {
			self.goTo( _currentItemIndex - 1);
		},

		// update current zoom/pan objects
		updateCurrZoomItem: function(emulateSetContent) {
			if(emulateSetContent) {
				_shout('beforeChange', 0);
			}

			// itemHolder[1] is middle (current) item
			if(_itemHolders[1].el.children.length) {
				var zoomElement = _itemHolders[1].el.children[0];
				if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
					_currZoomElementStyle = zoomElement.style;
				} else {
					_currZoomElementStyle = null;
				}
			} else {
				_currZoomElementStyle = null;
			}
			
			_currPanBounds = self.currItem.bounds;	
			_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;

			if(emulateSetContent) {
				_shout('afterChange');
			}
		},


		invalidateCurrItems: function() {
			_itemsNeedUpdate = true;
			for(var i = 0; i < NUM_HOLDERS; i++) {
				if( _itemHolders[i].item ) {
					_itemHolders[i].item.needsUpdate = true;
				}
			}
		},

		updateCurrItem: function(beforeAnimation) {

			if(_indexDiff === 0) {
				return;
			}

			var diffAbs = Math.abs(_indexDiff),
				tempHolder;

			if(beforeAnimation && diffAbs < 2) {
				return;
			}


			self.currItem = _getItemAt( _currentItemIndex );
			_renderMaxResolution = false;
			
			_shout('beforeChange', _indexDiff);

			if(diffAbs >= NUM_HOLDERS) {
				_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
				diffAbs = NUM_HOLDERS;
			}
			for(var i = 0; i < diffAbs; i++) {
				if(_indexDiff > 0) {
					tempHolder = _itemHolders.shift();
					_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

					_containerShiftIndex++;
					_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
					self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
				} else {
					tempHolder = _itemHolders.pop();
					_itemHolders.unshift( tempHolder ); // move last to first

					_containerShiftIndex--;
					_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
					self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
				}
				
			}

			// reset zoom/pan on previous item
			if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

				var prevItem = _getItemAt(_prevItemIndex);
				if(prevItem.initialZoomLevel !== _currZoomLevel) {
					_calculateItemSize(prevItem , _viewportSize );
					_setImageSize(prevItem);
					_applyZoomPanToItem( prevItem ); 				
				}

			}

			// reset diff after update
			_indexDiff = 0;

			self.updateCurrZoomItem();

			_prevItemIndex = _currentItemIndex;

			_shout('afterChange');
			
		},



		updateSize: function(force) {
			
			if(!_isFixedPosition && _options.modal) {
				var windowScrollY = framework.getScrollY();
				if(_currentWindowScrollY !== windowScrollY) {
					template.style.top = windowScrollY + 'px';
					_currentWindowScrollY = windowScrollY;
				}
				if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
					return;
				}
				_windowVisibleSize.x = window.innerWidth;
				_windowVisibleSize.y = window.innerHeight;

				//template.style.width = _windowVisibleSize.x + 'px';
				template.style.height = _windowVisibleSize.y + 'px';
			}



			_viewportSize.x = self.scrollWrap.clientWidth;
			_viewportSize.y = self.scrollWrap.clientHeight;

			_updatePageScrollOffset();

			_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
			_slideSize.y = _viewportSize.y;

			_moveMainScroll(_slideSize.x * _currPositionIndex);

			_shout('beforeResize'); // even may be used for example to switch image sources


			// don't re-calculate size on inital size update
			if(_containerShiftIndex !== undefined) {

				var holder,
					item,
					hIndex;

				for(var i = 0; i < NUM_HOLDERS; i++) {
					holder = _itemHolders[i];
					_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

					hIndex = _currentItemIndex+i-1;

					if(_options.loop && _getNumItems() > 2) {
						hIndex = _getLoopedId(hIndex);
					}

					// update zoom level on items and refresh source (if needsUpdate)
					item = _getItemAt( hIndex );

					// re-render gallery item if `needsUpdate`,
					// or doesn't have `bounds` (entirely new slide object)
					if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

						self.cleanSlide( item );
						
						self.setContent( holder, hIndex );

						// if "center" slide
						if(i === 1) {
							self.currItem = item;
							self.updateCurrZoomItem(true);
						}

						item.needsUpdate = false;

					} else if(holder.index === -1 && hIndex >= 0) {
						// add content first time
						self.setContent( holder, hIndex );
					}
					if(item && item.container) {
						_calculateItemSize(item, _viewportSize);
						_setImageSize(item);
						_applyZoomPanToItem( item );
					}
					
				}
				_itemsNeedUpdate = false;
			}	

			_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
			_currPanBounds = self.currItem.bounds;

			if(_currPanBounds) {
				_panOffset.x = _currPanBounds.center.x;
				_panOffset.y = _currPanBounds.center.y;
				_applyCurrentZoomPan( true );
			}
			
			_shout('resize');
		},
		
		// Zoom current item to
		zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
			/*
				if(destZoomLevel === 'fit') {
					destZoomLevel = self.currItem.fitRatio;
				} else if(destZoomLevel === 'fill') {
					destZoomLevel = self.currItem.fillRatio;
				}
			*/

			if(centerPoint) {
				_startZoomLevel = _currZoomLevel;
				_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
				_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
				_equalizePoints(_startPanOffset, _panOffset);
			}

			var destPanBounds = _calculatePanBounds(destZoomLevel, false),
				destPanOffset = {};

			_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
			_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

			var initialZoomLevel = _currZoomLevel;
			var initialPanOffset = {
				x: _panOffset.x,
				y: _panOffset.y
			};

			_roundPoint(destPanOffset);

			var onUpdate = function(now) {
				if(now === 1) {
					_currZoomLevel = destZoomLevel;
					_panOffset.x = destPanOffset.x;
					_panOffset.y = destPanOffset.y;
				} else {
					_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
					_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
					_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
				}

				if(updateFn) {
					updateFn(now);
				}

				_applyCurrentZoomPan( now === 1 );
			};

			if(speed) {
				_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
			} else {
				onUpdate(1);
			}
		}


	};


	/*>>core*/

	/*>>gestures*/
	/**
	 * Mouse/touch/pointer event handlers.
	 * 
	 * separated from @core.js for readability
	 */

	var MIN_SWIPE_DISTANCE = 30,
		DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

	var _gestureStartTime,
		_gestureCheckSpeedTime,

		// pool of objects that are used during dragging of zooming
		p = {}, // first point
		p2 = {}, // second point (for zoom gesture)
		delta = {},
		_currPoint = {},
		_startPoint = {},
		_currPointers = [],
		_startMainScrollPos = {},
		_releaseAnimData,
		_posPoints = [], // array of points during dragging, used to determine type of gesture
		_tempPoint = {},

		_isZoomingIn,
		_verticalDragInitiated,
		_oldAndroidTouchEndTimeout,
		_currZoomedItemIndex = 0,
		_centerPoint = _getEmptyPoint(),
		_lastReleaseTime = 0,
		_isDragging, // at least one pointer is down
		_isMultitouch, // at least two _pointers are down
		_zoomStarted, // zoom level changed during zoom gesture
		_moved,
		_dragAnimFrame,
		_mainScrollShifted,
		_currentPoints, // array of current touch points
		_isZooming,
		_currPointsDistance,
		_startPointsDistance,
		_currPanBounds,
		_mainScrollPos = _getEmptyPoint(),
		_currZoomElementStyle,
		_mainScrollAnimating, // true, if animation after swipe gesture is running
		_midZoomPoint = _getEmptyPoint(),
		_currCenterPoint = _getEmptyPoint(),
		_direction,
		_isFirstMove,
		_opacityChanged,
		_bgOpacity,
		_wasOverInitialZoom,

		_isEqualPoints = function(p1, p2) {
			return p1.x === p2.x && p1.y === p2.y;
		},
		_isNearbyPoints = function(touch0, touch1) {
			return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
		},
		_calculatePointsDistance = function(p1, p2) {
			_tempPoint.x = Math.abs( p1.x - p2.x );
			_tempPoint.y = Math.abs( p1.y - p2.y );
			return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
		},
		_stopDragUpdateLoop = function() {
			if(_dragAnimFrame) {
				_cancelAF(_dragAnimFrame);
				_dragAnimFrame = null;
			}
		},
		_dragUpdateLoop = function() {
			if(_isDragging) {
				_dragAnimFrame = _requestAF(_dragUpdateLoop);
				_renderMovement();
			}
		},
		_canPan = function() {
			return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
		},
		
		// find the closest parent DOM element
		_closestElement = function(el, fn) {
		  	if(!el || el === document) {
		  		return false;
		  	}

		  	// don't search elements above pswp__scroll-wrap
		  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
		  		return false;
		  	}

		  	if( fn(el) ) {
		  		return el;
		  	}

		  	return _closestElement(el.parentNode, fn);
		},

		_preventObj = {},
		_preventDefaultEventBehaviour = function(e, isDown) {
		    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

			_shout('preventDragEvent', e, isDown, _preventObj);
			return _preventObj.prevent;

		},
		_convertTouchToPoint = function(touch, p) {
			p.x = touch.pageX;
			p.y = touch.pageY;
			p.id = touch.identifier;
			return p;
		},
		_findCenterOfPoints = function(p1, p2, pCenter) {
			pCenter.x = (p1.x + p2.x) * 0.5;
			pCenter.y = (p1.y + p2.y) * 0.5;
		},
		_pushPosPoint = function(time, x, y) {
			if(time - _gestureCheckSpeedTime > 50) {
				var o = _posPoints.length > 2 ? _posPoints.shift() : {};
				o.x = x;
				o.y = y; 
				_posPoints.push(o);
				_gestureCheckSpeedTime = time;
			}
		},

		_calculateVerticalDragOpacityRatio = function() {
			var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
			return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
		},

		
		// points pool, reused during touch events
		_ePoint1 = {},
		_ePoint2 = {},
		_tempPointsArr = [],
		_tempCounter,
		_getTouchPoints = function(e) {
			// clean up previous points, without recreating array
			while(_tempPointsArr.length > 0) {
				_tempPointsArr.pop();
			}

			if(!_pointerEventEnabled) {
				if(e.type.indexOf('touch') > -1) {

					if(e.touches && e.touches.length > 0) {
						_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
						if(e.touches.length > 1) {
							_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
						}
					}
					
				} else {
					_ePoint1.x = e.pageX;
					_ePoint1.y = e.pageY;
					_ePoint1.id = '';
					_tempPointsArr[0] = _ePoint1;//_ePoint1;
				}
			} else {
				_tempCounter = 0;
				// we can use forEach, as pointer events are supported only in modern browsers
				_currPointers.forEach(function(p) {
					if(_tempCounter === 0) {
						_tempPointsArr[0] = p;
					} else if(_tempCounter === 1) {
						_tempPointsArr[1] = p;
					}
					_tempCounter++;

				});
			}
			return _tempPointsArr;
		},

		_panOrMoveMainScroll = function(axis, delta) {

			var panFriction,
				overDiff = 0,
				newOffset = _panOffset[axis] + delta[axis],
				startOverDiff,
				dir = delta[axis] > 0,
				newMainScrollPosition = _mainScrollPos.x + delta.x,
				mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
				newPanPos,
				newMainScrollPos;

			// calculate fdistance over the bounds and friction
			if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
				panFriction = _options.panEndFriction;
				// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
				// Looks not as nice as was expected. Left for history.
				// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
			} else {
				panFriction = 1;
			}
			
			newOffset = _panOffset[axis] + delta[axis] * panFriction;

			// move main scroll or start panning
			if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


				if(!_currZoomElementStyle) {
					
					newMainScrollPos = newMainScrollPosition;

				} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
					
					if(dir) {
						if(newOffset > _currPanBounds.min[axis]) {
							panFriction = _options.panEndFriction;
							overDiff = _currPanBounds.min[axis] - newOffset;
							startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
						}
						
						// drag right
						if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
							newMainScrollPos = newMainScrollPosition;
							if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
								newMainScrollPos = _startMainScrollPos.x;
							}
						} else {
							if(_currPanBounds.min.x !== _currPanBounds.max.x) {
								newPanPos = newOffset;
							}
							
						}

					} else {

						if(newOffset < _currPanBounds.max[axis] ) {
							panFriction =_options.panEndFriction;
							overDiff = newOffset - _currPanBounds.max[axis];
							startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
						}

						if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
							newMainScrollPos = newMainScrollPosition;

							if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
								newMainScrollPos = _startMainScrollPos.x;
							}

						} else {
							if(_currPanBounds.min.x !== _currPanBounds.max.x) {
								newPanPos = newOffset;
							}
						}

					}


					//
				}

				if(axis === 'x') {

					if(newMainScrollPos !== undefined) {
						_moveMainScroll(newMainScrollPos, true);
						if(newMainScrollPos === _startMainScrollPos.x) {
							_mainScrollShifted = false;
						} else {
							_mainScrollShifted = true;
						}
					}

					if(_currPanBounds.min.x !== _currPanBounds.max.x) {
						if(newPanPos !== undefined) {
							_panOffset.x = newPanPos;
						} else if(!_mainScrollShifted) {
							_panOffset.x += delta.x * panFriction;
						}
					}

					return newMainScrollPos !== undefined;
				}

			}

			if(!_mainScrollAnimating) {
				
				if(!_mainScrollShifted) {
					if(_currZoomLevel > self.currItem.fitRatio) {
						_panOffset[axis] += delta[axis] * panFriction;
					
					}
				}

				
			}
			
		},

		// Pointerdown/touchstart/mousedown handler
		_onDragStart = function(e) {

			// Allow dragging only via left mouse button.
			// As this handler is not added in IE8 - we ignore e.which
			// 
			// http://www.quirksmode.org/js/events_properties.html
			// https://developer.mozilla.org/en-US/docs/Web/API/event.button
			if(e.type === 'mousedown' && e.button > 0  ) {
				return;
			}

			if(_initialZoomRunning) {
				e.preventDefault();
				return;
			}

			if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
				return;
			}

			if(_preventDefaultEventBehaviour(e, true)) {
				e.preventDefault();
			}



			_shout('pointerDown');

			if(_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				if(pointerIndex < 0) {
					pointerIndex = _currPointers.length;
				}
				_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
			}
			


			var startPointsList = _getTouchPoints(e),
				numPoints = startPointsList.length;

			_currentPoints = null;

			_stopAllAnimations();

			// init drag
			if(!_isDragging || numPoints === 1) {

				

				_isDragging = _isFirstMove = true;
				framework.bind(window, _upMoveEvents, self);

				_isZoomingIn = 
					_wasOverInitialZoom = 
					_opacityChanged = 
					_verticalDragInitiated = 
					_mainScrollShifted = 
					_moved = 
					_isMultitouch = 
					_zoomStarted = false;

				_direction = null;

				_shout('firstTouchStart', startPointsList);

				_equalizePoints(_startPanOffset, _panOffset);

				_currPanDist.x = _currPanDist.y = 0;
				_equalizePoints(_currPoint, startPointsList[0]);
				_equalizePoints(_startPoint, _currPoint);

				//_equalizePoints(_startMainScrollPos, _mainScrollPos);
				_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

				_posPoints = [{
					x: _currPoint.x,
					y: _currPoint.y
				}];

				_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

				//_mainScrollAnimationEnd(true);
				_calculatePanBounds( _currZoomLevel, true );
				
				// Start rendering
				_stopDragUpdateLoop();
				_dragUpdateLoop();
				
			}

			// init zoom
			if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
				_startZoomLevel = _currZoomLevel;
				_zoomStarted = false; // true if zoom changed at least once

				_isZooming = _isMultitouch = true;
				_currPanDist.y = _currPanDist.x = 0;

				_equalizePoints(_startPanOffset, _panOffset);

				_equalizePoints(p, startPointsList[0]);
				_equalizePoints(p2, startPointsList[1]);

				_findCenterOfPoints(p, p2, _currCenterPoint);

				_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
				_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
				_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
			}


		},

		// Pointermove/touchmove/mousemove handler
		_onDragMove = function(e) {

			e.preventDefault();

			if(_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				if(pointerIndex > -1) {
					var p = _currPointers[pointerIndex];
					p.x = e.pageX;
					p.y = e.pageY; 
				}
			}

			if(_isDragging) {
				var touchesList = _getTouchPoints(e);
				if(!_direction && !_moved && !_isZooming) {

					if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
						// if main scroll position is shifted – direction is always horizontal
						_direction = 'h';
					} else {
						var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
						// check the direction of movement
						if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
							_direction = diff > 0 ? 'h' : 'v';
							_currentPoints = touchesList;
						}
					}
					
				} else {
					_currentPoints = touchesList;
				}
			}	
		},
		// 
		_renderMovement =  function() {

			if(!_currentPoints) {
				return;
			}

			var numPoints = _currentPoints.length;

			if(numPoints === 0) {
				return;
			}

			_equalizePoints(p, _currentPoints[0]);

			delta.x = p.x - _currPoint.x;
			delta.y = p.y - _currPoint.y;

			if(_isZooming && numPoints > 1) {
				// Handle behaviour for more than 1 point

				_currPoint.x = p.x;
				_currPoint.y = p.y;
			
				// check if one of two points changed
				if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
					return;
				}

				_equalizePoints(p2, _currentPoints[1]);


				if(!_zoomStarted) {
					_zoomStarted = true;
					_shout('zoomGestureStarted');
				}
				
				// Distance between two points
				var pointsDistance = _calculatePointsDistance(p,p2);

				var zoomLevel = _calculateZoomLevel(pointsDistance);

				// slightly over the of initial zoom level
				if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
					_wasOverInitialZoom = true;
				}

				// Apply the friction if zoom level is out of the bounds
				var zoomFriction = 1,
					minZoomLevel = _getMinZoomLevel(),
					maxZoomLevel = _getMaxZoomLevel();

				if ( zoomLevel < minZoomLevel ) {
					
					if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
						// fade out background if zooming out
						var minusDiff = minZoomLevel - zoomLevel;
						var percent = 1 - minusDiff / (minZoomLevel / 1.2);

						_applyBgOpacity(percent);
						_shout('onPinchClose', percent);
						_opacityChanged = true;
					} else {
						zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
						if(zoomFriction > 1) {
							zoomFriction = 1;
						}
						zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
					}
					
				} else if ( zoomLevel > maxZoomLevel ) {
					// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
					zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
				}

				if(zoomFriction < 0) {
					zoomFriction = 0;
				}

				// distance between touch points after friction is applied
				_currPointsDistance = pointsDistance;

				// _centerPoint - The point in the middle of two pointers
				_findCenterOfPoints(p, p2, _centerPoint);
			
				// paning with two pointers pressed
				_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
				_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
				_equalizePoints(_currCenterPoint, _centerPoint);

				_panOffset.x = _calculatePanOffset('x', zoomLevel);
				_panOffset.y = _calculatePanOffset('y', zoomLevel);

				_isZoomingIn = zoomLevel > _currZoomLevel;
				_currZoomLevel = zoomLevel;
				_applyCurrentZoomPan();

			} else {

				// handle behaviour for one point (dragging or panning)

				if(!_direction) {
					return;
				}

				if(_isFirstMove) {
					_isFirstMove = false;

					// subtract drag distance that was used during the detection direction  

					if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
						delta.x -= _currentPoints[0].x - _startPoint.x;
					}
					
					if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
						delta.y -= _currentPoints[0].y - _startPoint.y;
					}
				}

				_currPoint.x = p.x;
				_currPoint.y = p.y;

				// do nothing if pointers position hasn't changed
				if(delta.x === 0 && delta.y === 0) {
					return;
				}

				if(_direction === 'v' && _options.closeOnVerticalDrag) {
					if(!_canPan()) {
						_currPanDist.y += delta.y;
						_panOffset.y += delta.y;

						var opacityRatio = _calculateVerticalDragOpacityRatio();

						_verticalDragInitiated = true;
						_shout('onVerticalDrag', opacityRatio);

						_applyBgOpacity(opacityRatio);
						_applyCurrentZoomPan();
						return ;
					}
				}

				_pushPosPoint(_getCurrentTime(), p.x, p.y);

				_moved = true;
				_currPanBounds = self.currItem.bounds;
				
				var mainScrollChanged = _panOrMoveMainScroll('x', delta);
				if(!mainScrollChanged) {
					_panOrMoveMainScroll('y', delta);

					_roundPoint(_panOffset);
					_applyCurrentZoomPan();
				}

			}

		},
		
		// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
		_onDragRelease = function(e) {

			if(_features.isOldAndroid ) {

				if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
					return;
				}

				// on Android (v4.1, 4.2, 4.3 & possibly older) 
				// ghost mousedown/up event isn't preventable via e.preventDefault,
				// which causes fake mousedown event
				// so we block mousedown/up for 600ms
				if( e.type.indexOf('touch') > -1 ) {
					clearTimeout(_oldAndroidTouchEndTimeout);
					_oldAndroidTouchEndTimeout = setTimeout(function() {
						_oldAndroidTouchEndTimeout = 0;
					}, 600);
				}
				
			}

			_shout('pointerUp');

			if(_preventDefaultEventBehaviour(e, false)) {
				e.preventDefault();
			}

			var releasePoint;

			if(_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				
				if(pointerIndex > -1) {
					releasePoint = _currPointers.splice(pointerIndex, 1)[0];

					if(navigator.pointerEnabled) {
						releasePoint.type = e.pointerType || 'mouse';
					} else {
						var MSPOINTER_TYPES = {
							4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
							2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
							3: 'pen' // event.MSPOINTER_TYPE_PEN
						};
						releasePoint.type = MSPOINTER_TYPES[e.pointerType];

						if(!releasePoint.type) {
							releasePoint.type = e.pointerType || 'mouse';
						}
					}

				}
			}

			var touchList = _getTouchPoints(e),
				gestureType,
				numPoints = touchList.length;

			if(e.type === 'mouseup') {
				numPoints = 0;
			}

			// Do nothing if there were 3 touch points or more
			if(numPoints === 2) {
				_currentPoints = null;
				return true;
			}

			// if second pointer released
			if(numPoints === 1) {
				_equalizePoints(_startPoint, touchList[0]);
			}				


			// pointer hasn't moved, send "tap release" point
			if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
				if(!releasePoint) {
					if(e.type === 'mouseup') {
						releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
					} else if(e.changedTouches && e.changedTouches[0]) {
						releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
					}		
				}

				_shout('touchRelease', e, releasePoint);
			}

			// Difference in time between releasing of two last touch points (zoom gesture)
			var releaseTimeDiff = -1;

			// Gesture completed, no pointers left
			if(numPoints === 0) {
				_isDragging = false;
				framework.unbind(window, _upMoveEvents, self);

				_stopDragUpdateLoop();

				if(_isZooming) {
					// Two points released at the same time
					releaseTimeDiff = 0;
				} else if(_lastReleaseTime !== -1) {
					releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
				}
			}
			_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
			
			if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
				gestureType = 'zoom';
			} else {
				gestureType = 'swipe';
			}

			if(_isZooming && numPoints < 2) {
				_isZooming = false;

				// Only second point released
				if(numPoints === 1) {
					gestureType = 'zoomPointerUp';
				}
				_shout('zoomGestureEnded');
			}

			_currentPoints = null;
			if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
				// nothing to animate
				return;
			}
		
			_stopAllAnimations();

			
			if(!_releaseAnimData) {
				_releaseAnimData = _initDragReleaseAnimationData();
			}
			
			_releaseAnimData.calculateSwipeSpeed('x');


			if(_verticalDragInitiated) {

				var opacityRatio = _calculateVerticalDragOpacityRatio();

				if(opacityRatio < _options.verticalDragRange) {
					self.close();
				} else {
					var initalPanY = _panOffset.y,
						initialBgOpacity = _bgOpacity;

					_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
						
						_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

						_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
						_applyCurrentZoomPan();
					});

					_shout('onVerticalDrag', 1);
				}

				return;
			}


			// main scroll 
			if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
				var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
				if(itemChanged) {
					return;
				}
				gestureType = 'zoomPointerUp';
			}

			// prevent zoom/pan animation when main scroll animation runs
			if(_mainScrollAnimating) {
				return;
			}
			
			// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
			if(gestureType !== 'swipe') {
				_completeZoomGesture();
				return;
			}
		
			// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
			if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
				_completePanGesture(_releaseAnimData);
			}
		},


		// Returns object with data about gesture
		// It's created only once and then reused
		_initDragReleaseAnimationData  = function() {
			// temp local vars
			var lastFlickDuration,
				tempReleasePos;

			// s = this
			var s = {
				lastFlickOffset: {},
				lastFlickDist: {},
				lastFlickSpeed: {},
				slowDownRatio:  {},
				slowDownRatioReverse:  {},
				speedDecelerationRatio:  {},
				speedDecelerationRatioAbs:  {},
				distanceOffset:  {},
				backAnimDestination: {},
				backAnimStarted: {},
				calculateSwipeSpeed: function(axis) {
					

					if( _posPoints.length > 1) {
						lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
						tempReleasePos = _posPoints[_posPoints.length-2][axis];
					} else {
						lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
						tempReleasePos = _startPoint[axis];
					}
					s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
					s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
					if(s.lastFlickDist[axis] > 20) {
						s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
					} else {
						s.lastFlickSpeed[axis] = 0;
					}
					if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
						s.lastFlickSpeed[axis] = 0;
					}
					
					s.slowDownRatio[axis] = 0.95;
					s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
					s.speedDecelerationRatio[axis] = 1;
				},

				calculateOverBoundsAnimOffset: function(axis, speed) {
					if(!s.backAnimStarted[axis]) {

						if(_panOffset[axis] > _currPanBounds.min[axis]) {
							s.backAnimDestination[axis] = _currPanBounds.min[axis];
							
						} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
							s.backAnimDestination[axis] = _currPanBounds.max[axis];
						}

						if(s.backAnimDestination[axis] !== undefined) {
							s.slowDownRatio[axis] = 0.7;
							s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
							if(s.speedDecelerationRatioAbs[axis] < 0.05) {

								s.lastFlickSpeed[axis] = 0;
								s.backAnimStarted[axis] = true;

								_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
									s.backAnimDestination[axis], 
									speed || 300, 
									framework.easing.sine.out, 
									function(pos) {
										_panOffset[axis] = pos;
										_applyCurrentZoomPan();
									}
								);

							}
						}
					}
				},

				// Reduces the speed by slowDownRatio (per 10ms)
				calculateAnimOffset: function(axis) {
					if(!s.backAnimStarted[axis]) {
						s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
													s.slowDownRatioReverse[axis] - 
													s.slowDownRatioReverse[axis] * s.timeDiff / 10);

						s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
						s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
						_panOffset[axis] += s.distanceOffset[axis];

					}
				},

				panAnimLoop: function() {
					if ( _animations.zoomPan ) {
						_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

						s.now = _getCurrentTime();
						s.timeDiff = s.now - s.lastNow;
						s.lastNow = s.now;
						
						s.calculateAnimOffset('x');
						s.calculateAnimOffset('y');

						_applyCurrentZoomPan();
						
						s.calculateOverBoundsAnimOffset('x');
						s.calculateOverBoundsAnimOffset('y');


						if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

							// round pan position
							_panOffset.x = Math.round(_panOffset.x);
							_panOffset.y = Math.round(_panOffset.y);
							_applyCurrentZoomPan();
							
							_stopAnimation('zoomPan');
							return;
						}
					}

				}
			};
			return s;
		},

		_completePanGesture = function(animData) {
			// calculate swipe speed for Y axis (paanning)
			animData.calculateSwipeSpeed('y');

			_currPanBounds = self.currItem.bounds;
			
			animData.backAnimDestination = {};
			animData.backAnimStarted = {};

			// Avoid acceleration animation if speed is too low
			if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
				animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

				// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
				animData.calculateOverBoundsAnimOffset('x');
				animData.calculateOverBoundsAnimOffset('y');
				return true;
			}

			// Animation loop that controls the acceleration after pan gesture ends
			_registerStartAnimation('zoomPan');
			animData.lastNow = _getCurrentTime();
			animData.panAnimLoop();
		},


		_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
			var itemChanged;
			if(!_mainScrollAnimating) {
				_currZoomedItemIndex = _currentItemIndex;
			}


			
			var itemsDiff;

			if(gestureType === 'swipe') {
				var totalShiftDist = _currPoint.x - _startPoint.x,
					isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

				// if container is shifted for more than MIN_SWIPE_DISTANCE, 
				// and last flick gesture was in right direction
				if(totalShiftDist > MIN_SWIPE_DISTANCE && 
					(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
					// go to prev item
					itemsDiff = -1;
				} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
					(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
					// go to next item
					itemsDiff = 1;
				}
			}

			var nextCircle;

			if(itemsDiff) {
				
				_currentItemIndex += itemsDiff;

				if(_currentItemIndex < 0) {
					_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
					nextCircle = true;
				} else if(_currentItemIndex >= _getNumItems()) {
					_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
					nextCircle = true;
				}

				if(!nextCircle || _options.loop) {
					_indexDiff += itemsDiff;
					_currPositionIndex -= itemsDiff;
					itemChanged = true;
				}
				

				
			}

			var animateToX = _slideSize.x * _currPositionIndex;
			var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
			var finishAnimDuration;


			if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
				// "return to current" duration, e.g. when dragging from slide 0 to -1
				finishAnimDuration = 333; 
			} else {
				finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
										animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
										333;

				finishAnimDuration = Math.min(finishAnimDuration, 400);
				finishAnimDuration = Math.max(finishAnimDuration, 250);
			}

			if(_currZoomedItemIndex === _currentItemIndex) {
				itemChanged = false;
			}
			
			_mainScrollAnimating = true;
			
			_shout('mainScrollAnimStart');

			_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
				_moveMainScroll,
				function() {
					_stopAllAnimations();
					_mainScrollAnimating = false;
					_currZoomedItemIndex = -1;
					
					if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
						self.updateCurrItem();
					}
					
					_shout('mainScrollAnimComplete');
				}
			);

			if(itemChanged) {
				self.updateCurrItem(true);
			}

			return itemChanged;
		},

		_calculateZoomLevel = function(touchesDistance) {
			return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
		},

		// Resets zoom if it's out of bounds
		_completeZoomGesture = function() {
			var destZoomLevel = _currZoomLevel,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( _currZoomLevel < minZoomLevel ) {
				destZoomLevel = minZoomLevel;
			} else if ( _currZoomLevel > maxZoomLevel ) {
				destZoomLevel = maxZoomLevel;
			}

			var destOpacity = 1,
				onUpdate,
				initialOpacity = _bgOpacity;

			if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
				//_closedByScroll = true;
				self.close();
				return true;
			}

			if(_opacityChanged) {
				onUpdate = function(now) {
					_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
				};
			}

			self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
			return true;
		};


	_registerModule('Gestures', {
		publicMethods: {

			initGestures: function() {

				// helper function that builds touch/pointer/mouse events
				var addEventNames = function(pref, down, move, up, cancel) {
					_dragStartEvent = pref + down;
					_dragMoveEvent = pref + move;
					_dragEndEvent = pref + up;
					if(cancel) {
						_dragCancelEvent = pref + cancel;
					} else {
						_dragCancelEvent = '';
					}
				};

				_pointerEventEnabled = _features.pointerEvent;
				if(_pointerEventEnabled && _features.touch) {
					// we don't need touch events, if browser supports pointer events
					_features.touch = false;
				}

				if(_pointerEventEnabled) {
					if(navigator.pointerEnabled) {
						addEventNames('pointer', 'down', 'move', 'up', 'cancel');
					} else {
						// IE10 pointer events are case-sensitive
						addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
					}
				} else if(_features.touch) {
					addEventNames('touch', 'start', 'move', 'end', 'cancel');
					_likelyTouchDevice = true;
				} else {
					addEventNames('mouse', 'down', 'move', 'up');	
				}

				_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
				_downEvents = _dragStartEvent;

				if(_pointerEventEnabled && !_likelyTouchDevice) {
					_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
				}
				// make variable public
				self.likelyTouchDevice = _likelyTouchDevice; 
				
				_globalEventHandlers[_dragStartEvent] = _onDragStart;
				_globalEventHandlers[_dragMoveEvent] = _onDragMove;
				_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

				if(_dragCancelEvent) {
					_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
				}

				// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
				if(_features.touch) {
					_downEvents += ' mousedown';
					_upMoveEvents += ' mousemove mouseup';
					_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
					_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
					_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
				}

				if(!_likelyTouchDevice) {
					// don't allow pan to next slide from zoomed state on Desktop
					_options.allowPanToNext = false;
				}
			}

		}
	});


	/*>>gestures*/

	/*>>show-hide-transition*/
	/**
	 * show-hide-transition.js:
	 *
	 * Manages initial opening or closing transition.
	 *
	 * If you're not planning to use transition for gallery at all,
	 * you may set options hideAnimationDuration and showAnimationDuration to 0,
	 * and just delete startAnimation function.
	 * 
	 */


	var _showOrHideTimeout,
		_showOrHide = function(item, img, out, completeFn) {

			if(_showOrHideTimeout) {
				clearTimeout(_showOrHideTimeout);
			}

			_initialZoomRunning = true;
			_initialContentSet = true;
			
			// dimensions of small thumbnail {x:,y:,w:}.
			// Height is optional, as calculated based on large image.
			var thumbBounds; 
			if(item.initialLayout) {
				thumbBounds = item.initialLayout;
				item.initialLayout = null;
			} else {
				thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			}

			var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

			var onComplete = function() {
				_stopAnimation('initialZoom');
				if(!out) {
					_applyBgOpacity(1);
					if(img) {
						img.style.display = 'block';
					}
					framework.addClass(template, 'pswp--animated-in');
					_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
				} else {
					self.template.removeAttribute('style');
					self.bg.removeAttribute('style');
				}

				if(completeFn) {
					completeFn();
				}
				_initialZoomRunning = false;
			};

			// if bounds aren't provided, just open gallery without animation
			if(!duration || !thumbBounds || thumbBounds.x === undefined) {

				_shout('initialZoom' + (out ? 'Out' : 'In') );

				_currZoomLevel = item.initialZoomLevel;
				_equalizePoints(_panOffset,  item.initialPosition );
				_applyCurrentZoomPan();

				template.style.opacity = out ? 0 : 1;
				_applyBgOpacity(1);

				if(duration) {
					setTimeout(function() {
						onComplete();
					}, duration);
				} else {
					onComplete();
				}

				return;
			}

			var startAnimation = function() {
				var closeWithRaf = _closedByScroll,
					fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
				
				// apply hw-acceleration to image
				if(item.miniImg) {
					item.miniImg.style.webkitBackfaceVisibility = 'hidden';
				}

				if(!out) {
					_currZoomLevel = thumbBounds.w / item.w;
					_panOffset.x = thumbBounds.x;
					_panOffset.y = thumbBounds.y - _initalWindowScrollY;

					self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
					_applyCurrentZoomPan();
				}

				_registerStartAnimation('initialZoom');
				
				if(out && !closeWithRaf) {
					framework.removeClass(template, 'pswp--animated-in');
				}

				if(fadeEverything) {
					if(out) {
						framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
					} else {
						setTimeout(function() {
							framework.addClass(template, 'pswp--animate_opacity');
						}, 30);
					}
				}

				_showOrHideTimeout = setTimeout(function() {

					_shout('initialZoom' + (out ? 'Out' : 'In') );
					

					if(!out) {

						// "in" animation always uses CSS transitions (instead of rAF).
						// CSS transition work faster here, 
						// as developer may also want to animate other things, 
						// like ui on top of sliding area, which can be animated just via CSS
						
						_currZoomLevel = item.initialZoomLevel;
						_equalizePoints(_panOffset,  item.initialPosition );
						_applyCurrentZoomPan();
						_applyBgOpacity(1);

						if(fadeEverything) {
							template.style.opacity = 1;
						} else {
							_applyBgOpacity(1);
						}

						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					} else {

						// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
						var destZoomLevel = thumbBounds.w / item.w,
							initialPanOffset = {
								x: _panOffset.x,
								y: _panOffset.y
							},
							initialZoomLevel = _currZoomLevel,
							initalBgOpacity = _bgOpacity,
							onUpdate = function(now) {
								
								if(now === 1) {
									_currZoomLevel = destZoomLevel;
									_panOffset.x = thumbBounds.x;
									_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
								} else {
									_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
									_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
									_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
								}
								
								_applyCurrentZoomPan();
								if(fadeEverything) {
									template.style.opacity = 1 - now;
								} else {
									_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
								}
							};

						if(closeWithRaf) {
							_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
						} else {
							onUpdate(1);
							_showOrHideTimeout = setTimeout(onComplete, duration + 20);
						}
					}
				
				}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
						// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
						// Which avoids lag at the beginning of scale transition.
			};
			startAnimation();

			
		};

	/*>>show-hide-transition*/

	/*>>items-controller*/
	/**
	*
	* Controller manages gallery items, their dimensions, and their content.
	* 
	*/

	var _items,
		_tempPanAreaSize = {},
		_imagesToAppendPool = [],
		_initialContentSet,
		_initialZoomRunning,
		_controllerDefaultOptions = {
			index: 0,
			errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
			forceProgressiveLoading: false, // TODO
			preload: [1,1],
			getNumItemsFn: function() {
				return _items.length;
			}
		};


	var _getItemAt,
		_getNumItems,
		_initialIsLoop,
		_getZeroBounds = function() {
			return {
				center:{x:0,y:0}, 
				max:{x:0,y:0}, 
				min:{x:0,y:0}
			};
		},
		_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
			var bounds = item.bounds;

			// position of element when it's centered
			bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
			bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

			// maximum pan position
			bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
								Math.round(_tempPanAreaSize.x - realPanElementW) : 
								bounds.center.x;
			
			bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
								Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
								bounds.center.y;
			
			// minimum pan position
			bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
			bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
		},
		_calculateItemSize = function(item, viewportSize, zoomLevel) {

			if (item.src && !item.loadError) {
				var isInitial = !zoomLevel;
				
				if(isInitial) {
					if(!item.vGap) {
						item.vGap = {top:0,bottom:0};
					}
					// allows overriding vertical margin for individual items
					_shout('parseVerticalMargin', item);
				}


				_tempPanAreaSize.x = viewportSize.x;
				_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

				if (isInitial) {
					var hRatio = _tempPanAreaSize.x / item.w;
					var vRatio = _tempPanAreaSize.y / item.h;

					item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
					//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

					var scaleMode = _options.scaleMode;

					if (scaleMode === 'orig') {
						zoomLevel = 1;
					} else if (scaleMode === 'fit') {
						zoomLevel = item.fitRatio;
					}

					if (zoomLevel > 1) {
						zoomLevel = 1;
					}

					item.initialZoomLevel = zoomLevel;
					
					if(!item.bounds) {
						// reuse bounds object
						item.bounds = _getZeroBounds(); 
					}
				}

				if(!zoomLevel) {
					return;
				}

				_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

				if (isInitial && zoomLevel === item.initialZoomLevel) {
					item.initialPosition = item.bounds.center;
				}

				return item.bounds;
			} else {
				item.w = item.h = 0;
				item.initialZoomLevel = item.fitRatio = 1;
				item.bounds = _getZeroBounds();
				item.initialPosition = item.bounds.center;

				// if it's not image, we return zero bounds (content is not zoomable)
				return item.bounds;
			}
			
		},

		


		_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
			

			if(item.loadError) {
				return;
			}

			if(img) {

				item.imageAppended = true;
				_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
				
				baseDiv.appendChild(img);

				if(keepPlaceholder) {
					setTimeout(function() {
						if(item && item.loaded && item.placeholder) {
							item.placeholder.style.display = 'none';
							item.placeholder = null;
						}
					}, 500);
				}
			}
		},
		


		_preloadImage = function(item) {
			item.loading = true;
			item.loaded = false;
			var img = item.img = framework.createEl('pswp__img', 'img');
			var onComplete = function() {
				item.loading = false;
				item.loaded = true;

				if(item.loadComplete) {
					item.loadComplete(item);
				} else {
					item.img = null; // no need to store image object
				}
				img.onload = img.onerror = null;
				img = null;
			};
			img.onload = onComplete;
			img.onerror = function() {
				item.loadError = true;
				onComplete();
			};		

			img.src = item.src;// + '?a=' + Math.random();

			return img;
		},
		_checkForError = function(item, cleanUp) {
			if(item.src && item.loadError && item.container) {

				if(cleanUp) {
					item.container.innerHTML = '';
				}

				item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
				return true;
				
			}
		},
		_setImageSize = function(item, img, maxRes) {
			if(!item.src) {
				return;
			}

			if(!img) {
				img = item.container.lastChild;
			}

			var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
				h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
			
			if(item.placeholder && !item.loaded) {
				item.placeholder.style.width = w + 'px';
				item.placeholder.style.height = h + 'px';
			}

			img.style.width = w + 'px';
			img.style.height = h + 'px';
		},
		_appendImagesPool = function() {

			if(_imagesToAppendPool.length) {
				var poolItem;

				for(var i = 0; i < _imagesToAppendPool.length; i++) {
					poolItem = _imagesToAppendPool[i];
					if( poolItem.holder.index === poolItem.index ) {
						_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
					}
				}
				_imagesToAppendPool = [];
			}
		};
		


	_registerModule('Controller', {

		publicMethods: {

			lazyLoadItem: function(index) {
				index = _getLoopedId(index);
				var item = _getItemAt(index);

				if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
					return;
				}

				_shout('gettingData', index, item);

				if (!item.src) {
					return;
				}

				_preloadImage(item);
			},
			initController: function() {
				framework.extend(_options, _controllerDefaultOptions, true);
				self.items = _items = items;
				_getItemAt = self.getItemAt;
				_getNumItems = _options.getNumItemsFn; //self.getNumItems;



				_initialIsLoop = _options.loop;
				if(_getNumItems() < 3) {
					_options.loop = false; // disable loop if less then 3 items
				}

				_listen('beforeChange', function(diff) {

					var p = _options.preload,
						isNext = diff === null ? true : (diff >= 0),
						preloadBefore = Math.min(p[0], _getNumItems() ),
						preloadAfter = Math.min(p[1], _getNumItems() ),
						i;


					for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
						self.lazyLoadItem(_currentItemIndex+i);
					}
					for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
						self.lazyLoadItem(_currentItemIndex-i);
					}
				});

				_listen('initialLayout', function() {
					self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
				});

				_listen('mainScrollAnimComplete', _appendImagesPool);
				_listen('initialZoomInEnd', _appendImagesPool);



				_listen('destroy', function() {
					var item;
					for(var i = 0; i < _items.length; i++) {
						item = _items[i];
						// remove reference to DOM elements, for GC
						if(item.container) {
							item.container = null; 
						}
						if(item.placeholder) {
							item.placeholder = null;
						}
						if(item.img) {
							item.img = null;
						}
						if(item.preloader) {
							item.preloader = null;
						}
						if(item.loadError) {
							item.loaded = item.loadError = false;
						}
					}
					_imagesToAppendPool = null;
				});
			},


			getItemAt: function(index) {
				if (index >= 0) {
					return _items[index] !== undefined ? _items[index] : false;
				}
				return false;
			},

			allowProgressiveImg: function() {
				// 1. Progressive image loading isn't working on webkit/blink 
				//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
				//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
				//    
				// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
				//    That's why it's disabled on touch devices (mainly because of swipe transition)
				//    
				// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

				// Don't allow progressive loading on non-large touch devices
				return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
				// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
			},

			setContent: function(holder, index) {

				if(_options.loop) {
					index = _getLoopedId(index);
				}

				var prevItem = self.getItemAt(holder.index);
				if(prevItem) {
					prevItem.container = null;
				}
		
				var item = self.getItemAt(index),
					img;
				
				if(!item) {
					holder.el.innerHTML = '';
					return;
				}

				// allow to override data
				_shout('gettingData', index, item);

				holder.index = index;
				holder.item = item;

				// base container DIV is created only once for each of 3 holders
				var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

				

				if(!item.src && item.html) {
					if(item.html.tagName) {
						baseDiv.appendChild(item.html);
					} else {
						baseDiv.innerHTML = item.html;
					}
				}

				_checkForError(item);

				_calculateItemSize(item, _viewportSize);
				
				if(item.src && !item.loadError && !item.loaded) {

					item.loadComplete = function(item) {

						// gallery closed before image finished loading
						if(!_isOpen) {
							return;
						}

						// check if holder hasn't changed while image was loading
						if(holder && holder.index === index ) {
							if( _checkForError(item, true) ) {
								item.loadComplete = item.img = null;
								_calculateItemSize(item, _viewportSize);
								_applyZoomPanToItem(item);

								if(holder.index === _currentItemIndex) {
									// recalculate dimensions
									self.updateCurrZoomItem();
								}
								return;
							}
							if( !item.imageAppended ) {
								if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
									_imagesToAppendPool.push({
										item:item,
										baseDiv:baseDiv,
										img:item.img,
										index:index,
										holder:holder,
										clearPlaceholder:true
									});
								} else {
									_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
								}
							} else {
								// remove preloader & mini-img
								if(!_initialZoomRunning && item.placeholder) {
									item.placeholder.style.display = 'none';
									item.placeholder = null;
								}
							}
						}

						item.loadComplete = null;
						item.img = null; // no need to store image element after it's added

						_shout('imageLoadComplete', index, item);
					};

					if(framework.features.transform) {
						
						var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
						placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

						var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
						if(item.msrc) {
							placeholder.src = item.msrc;
						}
						
						_setImageSize(item, placeholder);

						baseDiv.appendChild(placeholder);
						item.placeholder = placeholder;

					}
					

					

					if(!item.loading) {
						_preloadImage(item);
					}


					if( self.allowProgressiveImg() ) {
						// just append image
						if(!_initialContentSet && _features.transform) {
							_imagesToAppendPool.push({
								item:item, 
								baseDiv:baseDiv, 
								img:item.img, 
								index:index, 
								holder:holder
							});
						} else {
							_appendImage(index, item, baseDiv, item.img, true, true);
						}
					}
					
				} else if(item.src && !item.loadError) {
					// image object is created every time, due to bugs of image loading & delay when switching images
					img = framework.createEl('pswp__img', 'img');
					img.style.opacity = 1;
					img.src = item.src;
					_setImageSize(item, img);
					_appendImage(index, item, baseDiv, img, true);
				}
				

				if(!_initialContentSet && index === _currentItemIndex) {
					_currZoomElementStyle = baseDiv.style;
					_showOrHide(item, (img ||item.img) );
				} else {
					_applyZoomPanToItem(item);
				}

				holder.el.innerHTML = '';
				holder.el.appendChild(baseDiv);
			},

			cleanSlide: function( item ) {
				if(item.img ) {
					item.img.onload = item.img.onerror = null;
				}
				item.loaded = item.loading = item.img = item.imageAppended = false;
			}

		}
	});

	/*>>items-controller*/

	/*>>tap*/
	/**
	 * tap.js:
	 *
	 * Displatches tap and double-tap events.
	 * 
	 */

	var tapTimer,
		tapReleasePoint = {},
		_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
			var e = document.createEvent( 'CustomEvent' ),
				eDetail = {
					origEvent:origEvent, 
					target:origEvent.target, 
					releasePoint: releasePoint, 
					pointerType:pointerType || 'touch'
				};

			e.initCustomEvent( 'pswpTap', true, true, eDetail );
			origEvent.target.dispatchEvent(e);
		};

	_registerModule('Tap', {
		publicMethods: {
			initTap: function() {
				_listen('firstTouchStart', self.onTapStart);
				_listen('touchRelease', self.onTapRelease);
				_listen('destroy', function() {
					tapReleasePoint = {};
					tapTimer = null;
				});
			},
			onTapStart: function(touchList) {
				if(touchList.length > 1) {
					clearTimeout(tapTimer);
					tapTimer = null;
				}
			},
			onTapRelease: function(e, releasePoint) {
				if(!releasePoint) {
					return;
				}

				if(!_moved && !_isMultitouch && !_numAnimations) {
					var p0 = releasePoint;
					if(tapTimer) {
						clearTimeout(tapTimer);
						tapTimer = null;

						// Check if taped on the same place
						if ( _isNearbyPoints(p0, tapReleasePoint) ) {
							_shout('doubleTap', p0);
							return;
						}
					}

					if(releasePoint.type === 'mouse') {
						_dispatchTapEvent(e, releasePoint, 'mouse');
						return;
					}

					var clickedTagName = e.target.tagName.toUpperCase();
					// avoid double tap delay on buttons and elements that have class pswp__single-tap
					if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
						_dispatchTapEvent(e, releasePoint);
						return;
					}

					_equalizePoints(tapReleasePoint, p0);

					tapTimer = setTimeout(function() {
						_dispatchTapEvent(e, releasePoint);
						tapTimer = null;
					}, 300);
				}
			}
		}
	});

	/*>>tap*/

	/*>>desktop-zoom*/
	/**
	 *
	 * desktop-zoom.js:
	 *
	 * - Binds mousewheel event for paning zoomed image.
	 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
	 *   (which are used for cursors and zoom icon)
	 * - Adds toggleDesktopZoom function.
	 * 
	 */

	var _wheelDelta;
		
	_registerModule('DesktopZoom', {

		publicMethods: {

			initDesktopZoom: function() {

				if(_oldIE) {
					// no zoom for old IE (<=8)
					return;
				}

				if(_likelyTouchDevice) {
					// if detected hardware touch support, we wait until mouse is used,
					// and only then apply desktop-zoom features
					_listen('mouseUsed', function() {
						self.setupDesktopZoom();
					});
				} else {
					self.setupDesktopZoom(true);
				}

			},

			setupDesktopZoom: function(onInit) {

				_wheelDelta = {};

				var events = 'wheel mousewheel DOMMouseScroll';
				
				_listen('bindEvents', function() {
					framework.bind(template, events,  self.handleMouseWheel);
				});

				_listen('unbindEvents', function() {
					if(_wheelDelta) {
						framework.unbind(template, events, self.handleMouseWheel);
					}
				});

				self.mouseZoomedIn = false;

				var hasDraggingClass,
					updateZoomable = function() {
						if(self.mouseZoomedIn) {
							framework.removeClass(template, 'pswp--zoomed-in');
							self.mouseZoomedIn = false;
						}
						if(_currZoomLevel < 1) {
							framework.addClass(template, 'pswp--zoom-allowed');
						} else {
							framework.removeClass(template, 'pswp--zoom-allowed');
						}
						removeDraggingClass();
					},
					removeDraggingClass = function() {
						if(hasDraggingClass) {
							framework.removeClass(template, 'pswp--dragging');
							hasDraggingClass = false;
						}
					};

				_listen('resize' , updateZoomable);
				_listen('afterChange' , updateZoomable);
				_listen('pointerDown', function() {
					if(self.mouseZoomedIn) {
						hasDraggingClass = true;
						framework.addClass(template, 'pswp--dragging');
					}
				});
				_listen('pointerUp', removeDraggingClass);

				if(!onInit) {
					updateZoomable();
				}
				
			},

			handleMouseWheel: function(e) {

				if(_currZoomLevel <= self.currItem.fitRatio) {
					if( _options.modal ) {

						if (!_options.closeOnScroll || _numAnimations || _isDragging) {
							e.preventDefault();
						} else if(_transformKey && Math.abs(e.deltaY) > 2) {
							// close PhotoSwipe
							// if browser supports transforms & scroll changed enough
							_closedByScroll = true;
							self.close();
						}

					}
					return true;
				}

				// allow just one event to fire
				e.stopPropagation();

				// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
				_wheelDelta.x = 0;

				if('deltaX' in e) {
					if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
						// 18 - average line height
						_wheelDelta.x = e.deltaX * 18;
						_wheelDelta.y = e.deltaY * 18;
					} else {
						_wheelDelta.x = e.deltaX;
						_wheelDelta.y = e.deltaY;
					}
				} else if('wheelDelta' in e) {
					if(e.wheelDeltaX) {
						_wheelDelta.x = -0.16 * e.wheelDeltaX;
					}
					if(e.wheelDeltaY) {
						_wheelDelta.y = -0.16 * e.wheelDeltaY;
					} else {
						_wheelDelta.y = -0.16 * e.wheelDelta;
					}
				} else if('detail' in e) {
					_wheelDelta.y = e.detail;
				} else {
					return;
				}

				_calculatePanBounds(_currZoomLevel, true);

				var newPanX = _panOffset.x - _wheelDelta.x,
					newPanY = _panOffset.y - _wheelDelta.y;

				// only prevent scrolling in nonmodal mode when not at edges
				if (_options.modal ||
					(
					newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
					newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
					) ) {
					e.preventDefault();
				}

				// TODO: use rAF instead of mousewheel?
				self.panTo(newPanX, newPanY);
			},

			toggleDesktopZoom: function(centerPoint) {
				centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

				var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
				var zoomOut = _currZoomLevel === doubleTapZoomLevel;
				
				self.mouseZoomedIn = !zoomOut;

				self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
				framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
			}

		}
	});


	/*>>desktop-zoom*/

	/*>>history*/
	/**
	 *
	 * history.js:
	 *
	 * - Back button to close gallery.
	 * 
	 * - Unique URL for each slide: example.com/&pid=1&gid=3
	 *   (where PID is picture index, and GID and gallery index)
	 *   
	 * - Switch URL when slides change.
	 * 
	 */


	var _historyDefaultOptions = {
		history: true,
		galleryUID: 1
	};

	var _historyUpdateTimeout,
		_hashChangeTimeout,
		_hashAnimCheckTimeout,
		_hashChangedByScript,
		_hashChangedByHistory,
		_hashReseted,
		_initialHash,
		_historyChanged,
		_closedFromURL,
		_urlChangedOnce,
		_windowLoc,

		_supportsPushState,

		_getHash = function() {
			return _windowLoc.hash.substring(1);
		},
		_cleanHistoryTimeouts = function() {

			if(_historyUpdateTimeout) {
				clearTimeout(_historyUpdateTimeout);
			}

			if(_hashAnimCheckTimeout) {
				clearTimeout(_hashAnimCheckTimeout);
			}
		},

		// pid - Picture index
		// gid - Gallery index
		_parseItemIndexFromURL = function() {
			var hash = _getHash(),
				params = {};

			if(hash.length < 5) { // pid=1
				return params;
			}

			var i, vars = hash.split('&');
			for (i = 0; i < vars.length; i++) {
				if(!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');	
				if(pair.length < 2) {
					continue;
				}
				params[pair[0]] = pair[1];
			}
			if(_options.galleryPIDs) {
				// detect custom pid in hash and search for it among the items collection
				var searchfor = params.pid;
				params.pid = 0; // if custom pid cannot be found, fallback to the first item
				for(i = 0; i < _items.length; i++) {
					if(_items[i].pid === searchfor) {
						params.pid = i;
						break;
					}
				}
			} else {
				params.pid = parseInt(params.pid,10)-1;
			}
			if( params.pid < 0 ) {
				params.pid = 0;
			}
			return params;
		},
		_updateHash = function() {

			if(_hashAnimCheckTimeout) {
				clearTimeout(_hashAnimCheckTimeout);
			}


			if(_numAnimations || _isDragging) {
				// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
				// that's why we update hash only when no animations running
				_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
				return;
			}
			
			if(_hashChangedByScript) {
				clearTimeout(_hashChangeTimeout);
			} else {
				_hashChangedByScript = true;
			}


			var pid = (_currentItemIndex + 1);
			var item = _getItemAt( _currentItemIndex );
			if(item.hasOwnProperty('pid')) {
				// carry forward any custom pid assigned to the item
				pid = item.pid;
			}
			var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

			if(!_historyChanged) {
				if(_windowLoc.hash.indexOf(newHash) === -1) {
					_urlChangedOnce = true;
				}
				// first time - add new hisory record, then just replace
			}

			var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

			if( _supportsPushState ) {

				if('#' + newHash !== window.location.hash) {
					history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
				}

			} else {
				if(_historyChanged) {
					_windowLoc.replace( newURL );
				} else {
					_windowLoc.hash = newHash;
				}
			}
			
			

			_historyChanged = true;
			_hashChangeTimeout = setTimeout(function() {
				_hashChangedByScript = false;
			}, 60);
		};



		

	_registerModule('History', {

		

		publicMethods: {
			initHistory: function() {

				framework.extend(_options, _historyDefaultOptions, true);

				if( !_options.history ) {
					return;
				}


				_windowLoc = window.location;
				_urlChangedOnce = false;
				_closedFromURL = false;
				_historyChanged = false;
				_initialHash = _getHash();
				_supportsPushState = ('pushState' in history);


				if(_initialHash.indexOf('gid=') > -1) {
					_initialHash = _initialHash.split('&gid=')[0];
					_initialHash = _initialHash.split('?gid=')[0];
				}
				

				_listen('afterChange', self.updateURL);
				_listen('unbindEvents', function() {
					framework.unbind(window, 'hashchange', self.onHashChange);
				});


				var returnToOriginal = function() {
					_hashReseted = true;
					if(!_closedFromURL) {

						if(_urlChangedOnce) {
							history.back();
						} else {

							if(_initialHash) {
								_windowLoc.hash = _initialHash;
							} else {
								if (_supportsPushState) {

									// remove hash from url without refreshing it or scrolling to top
									history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
								} else {
									_windowLoc.hash = '';
								}
							}
						}
						
					}

					_cleanHistoryTimeouts();
				};


				_listen('unbindEvents', function() {
					if(_closedByScroll) {
						// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
						// this is done to keep the scroll position
						returnToOriginal();
					}
				});
				_listen('destroy', function() {
					if(!_hashReseted) {
						returnToOriginal();
					}
				});
				_listen('firstUpdate', function() {
					_currentItemIndex = _parseItemIndexFromURL().pid;
				});

				

				
				var index = _initialHash.indexOf('pid=');
				if(index > -1) {
					_initialHash = _initialHash.substring(0, index);
					if(_initialHash.slice(-1) === '&') {
						_initialHash = _initialHash.slice(0, -1);
					}
				}
				

				setTimeout(function() {
					if(_isOpen) { // hasn't destroyed yet
						framework.bind(window, 'hashchange', self.onHashChange);
					}
				}, 40);
				
			},
			onHashChange: function() {

				if(_getHash() === _initialHash) {

					_closedFromURL = true;
					self.close();
					return;
				}
				if(!_hashChangedByScript) {

					_hashChangedByHistory = true;
					self.goTo( _parseItemIndexFromURL().pid );
					_hashChangedByHistory = false;
				}
				
			},
			updateURL: function() {

				// Delay the update of URL, to avoid lag during transition, 
				// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
				
				_cleanHistoryTimeouts();
				

				if(_hashChangedByHistory) {
					return;
				}

				if(!_historyChanged) {
					_updateHash(); // first time
				} else {
					_historyUpdateTimeout = setTimeout(_updateHash, 800);
				}
			}
		
		}
	});


	/*>>history*/
		framework.extend(self, publicMethods); };
		return PhotoSwipe;
	});

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
	* http://photoswipe.com
	* Copyright (c) 2015 Dmitry Semenov; */
	/**
	*
	* UI on top of main sliding area (caption, arrows, close button, etc.).
	* Built just using public methods/properties of PhotoSwipe.
	* 
	*/
	(function (root, factory) { 
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.PhotoSwipeUI_Default = factory();
		}
	})(this, function () {

		'use strict';



	var PhotoSwipeUI_Default =
	 function(pswp, framework) {

		var ui = this;
		var _overlayUIUpdated = false,
			_controlsVisible = true,
			_fullscrenAPI,
			_controls,
			_captionContainer,
			_fakeCaptionContainer,
			_indexIndicator,
			_shareButton,
			_shareModal,
			_shareModalHidden = true,
			_initalCloseOnScrollValue,
			_isIdle,
			_listen,

			_loadingIndicator,
			_loadingIndicatorHidden,
			_loadingIndicatorTimeout,

			_galleryHasOneSlide,

			_options,
			_defaultUIOptions = {
				barsSize: {top:44, bottom:'auto'},
				closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
				timeToIdle: 4000, 
				timeToIdleOutside: 1000,
				loadingIndicatorDelay: 1000, // 2s
				
				addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
					if(!item.title) {
						captionEl.children[0].innerHTML = '';
						return false;
					}
					captionEl.children[0].innerHTML = item.title;
					return true;
				},

				closeEl:true,
				captionEl: true,
				fullscreenEl: true,
				zoomEl: true,
				shareEl: true,
				counterEl: true,
				arrowEl: true,
				preloaderEl: true,

				tapToClose: false,
				tapToToggleControls: true,

				clickToCloseNonZoomable: true,

				shareButtons: [
					{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
					{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
					{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
														'?url={{url}}&media={{image_url}}&description={{text}}'},
					{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
				],
				getImageURLForShare: function( /* shareButtonData */ ) {
					return pswp.currItem.src || '';
				},
				getPageURLForShare: function( /* shareButtonData */ ) {
					return window.location.href;
				},
				getTextForShare: function( /* shareButtonData */ ) {
					return pswp.currItem.title || '';
				},
					
				indexIndicatorSep: ' / ',
				fitControlsWidth: 1200

			},
			_blockControlsTap,
			_blockControlsTapTimeout;



		var _onControlsTap = function(e) {
				if(_blockControlsTap) {
					return true;
				}


				e = e || window.event;

				if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
					// reset idle timer
					_onIdleMouseMove();
				}


				var target = e.target || e.srcElement,
					uiElement,
					clickedClass = target.getAttribute('class') || '',
					found;

				for(var i = 0; i < _uiElements.length; i++) {
					uiElement = _uiElements[i];
					if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
						uiElement.onTap();
						found = true;

					}
				}

				if(found) {
					if(e.stopPropagation) {
						e.stopPropagation();
					}
					_blockControlsTap = true;

					// Some versions of Android don't prevent ghost click event 
					// when preventDefault() was called on touchstart and/or touchend.
					// 
					// This happens on v4.3, 4.2, 4.1, 
					// older versions strangely work correctly, 
					// but just in case we add delay on all of them)	
					var tapDelay = framework.features.isOldAndroid ? 600 : 30;
					_blockControlsTapTimeout = setTimeout(function() {
						_blockControlsTap = false;
					}, tapDelay);
				}

			},
			_fitControlsInViewport = function() {
				return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
			},
			_togglePswpClass = function(el, cName, add) {
				framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
			},

			// add class when there is just one item in the gallery
			// (by default it hides left/right arrows and 1ofX counter)
			_countNumItems = function() {
				var hasOneSlide = (_options.getNumItemsFn() === 1);

				if(hasOneSlide !== _galleryHasOneSlide) {
					_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
					_galleryHasOneSlide = hasOneSlide;
				}
			},
			_toggleShareModalClass = function() {
				_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
			},
			_toggleShareModal = function() {

				_shareModalHidden = !_shareModalHidden;
				
				
				if(!_shareModalHidden) {
					_toggleShareModalClass();
					setTimeout(function() {
						if(!_shareModalHidden) {
							framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
						}
					}, 30);
				} else {
					framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
					setTimeout(function() {
						if(_shareModalHidden) {
							_toggleShareModalClass();
						}
					}, 300);
				}
				
				if(!_shareModalHidden) {
					_updateShareURLs();
				}
				return false;
			},

			_openWindowPopup = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;

				pswp.shout('shareLinkClick', e, target);

				if(!target.href) {
					return false;
				}

				if( target.hasAttribute('download') ) {
					return true;
				}

				window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
											'location=yes,width=550,height=420,top=100,left=' + 
											(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

				if(!_shareModalHidden) {
					_toggleShareModal();
				}
				
				return false;
			},
			_updateShareURLs = function() {
				var shareButtonOut = '',
					shareButtonData,
					shareURL,
					image_url,
					page_url,
					share_text;

				for(var i = 0; i < _options.shareButtons.length; i++) {
					shareButtonData = _options.shareButtons[i];

					image_url = _options.getImageURLForShare(shareButtonData);
					page_url = _options.getPageURLForShare(shareButtonData);
					share_text = _options.getTextForShare(shareButtonData);

					shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
										.replace('{{image_url}}', encodeURIComponent(image_url) )
										.replace('{{raw_image_url}}', image_url )
										.replace('{{text}}', encodeURIComponent(share_text) );

					shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
										'class="pswp__share--' + shareButtonData.id + '"' +
										(shareButtonData.download ? 'download' : '') + '>' + 
										shareButtonData.label + '</a>';

					if(_options.parseShareButtonOut) {
						shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
					}
				}
				_shareModal.children[0].innerHTML = shareButtonOut;
				_shareModal.children[0].onclick = _openWindowPopup;

			},
			_hasCloseClass = function(target) {
				for(var  i = 0; i < _options.closeElClasses.length; i++) {
					if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
						return true;
					}
				}
			},
			_idleInterval,
			_idleTimer,
			_idleIncrement = 0,
			_onIdleMouseMove = function() {
				clearTimeout(_idleTimer);
				_idleIncrement = 0;
				if(_isIdle) {
					ui.setIdle(false);
				}
			},
			_onMouseLeaveWindow = function(e) {
				e = e ? e : window.event;
				var from = e.relatedTarget || e.toElement;
				if (!from || from.nodeName === 'HTML') {
					clearTimeout(_idleTimer);
					_idleTimer = setTimeout(function() {
						ui.setIdle(true);
					}, _options.timeToIdleOutside);
				}
			},
			_setupFullscreenAPI = function() {
				if(_options.fullscreenEl && !framework.features.isOldAndroid) {
					if(!_fullscrenAPI) {
						_fullscrenAPI = ui.getFullscreenAPI();
					}
					if(_fullscrenAPI) {
						framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
						ui.updateFullscreen();
						framework.addClass(pswp.template, 'pswp--supports-fs');
					} else {
						framework.removeClass(pswp.template, 'pswp--supports-fs');
					}
				}
			},
			_setupLoadingIndicator = function() {
				// Setup loading indicator
				if(_options.preloaderEl) {
				
					_toggleLoadingIndicator(true);

					_listen('beforeChange', function() {

						clearTimeout(_loadingIndicatorTimeout);

						// display loading indicator with delay
						_loadingIndicatorTimeout = setTimeout(function() {

							if(pswp.currItem && pswp.currItem.loading) {

								if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
									// show preloader if progressive loading is not enabled, 
									// or image width is not defined yet (because of slow connection)
									_toggleLoadingIndicator(false); 
									// items-controller.js function allowProgressiveImg
								}
								
							} else {
								_toggleLoadingIndicator(true); // hide preloader
							}

						}, _options.loadingIndicatorDelay);
						
					});
					_listen('imageLoadComplete', function(index, item) {
						if(pswp.currItem === item) {
							_toggleLoadingIndicator(true);
						}
					});

				}
			},
			_toggleLoadingIndicator = function(hide) {
				if( _loadingIndicatorHidden !== hide ) {
					_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
					_loadingIndicatorHidden = hide;
				}
			},
			_applyNavBarGaps = function(item) {
				var gap = item.vGap;

				if( _fitControlsInViewport() ) {
					
					var bars = _options.barsSize; 
					if(_options.captionEl && bars.bottom === 'auto') {
						if(!_fakeCaptionContainer) {
							_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
							_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
							_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
							framework.addClass(_controls, 'pswp__ui--fit');
						}
						if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

							var captionSize = _fakeCaptionContainer.clientHeight;
							gap.bottom = parseInt(captionSize,10) || 44;
						} else {
							gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
						}
					} else {
						gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
					}
					
					// height of top bar is static, no need to calculate it
					gap.top = bars.top;
				} else {
					gap.top = gap.bottom = 0;
				}
			},
			_setupIdle = function() {
				// Hide controls when mouse is used
				if(_options.timeToIdle) {
					_listen('mouseUsed', function() {
						
						framework.bind(document, 'mousemove', _onIdleMouseMove);
						framework.bind(document, 'mouseout', _onMouseLeaveWindow);

						_idleInterval = setInterval(function() {
							_idleIncrement++;
							if(_idleIncrement === 2) {
								ui.setIdle(true);
							}
						}, _options.timeToIdle / 2);
					});
				}
			},
			_setupHidingControlsDuringGestures = function() {

				// Hide controls on vertical drag
				_listen('onVerticalDrag', function(now) {
					if(_controlsVisible && now < 0.95) {
						ui.hideControls();
					} else if(!_controlsVisible && now >= 0.95) {
						ui.showControls();
					}
				});

				// Hide controls when pinching to close
				var pinchControlsHidden;
				_listen('onPinchClose' , function(now) {
					if(_controlsVisible && now < 0.9) {
						ui.hideControls();
						pinchControlsHidden = true;
					} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
						ui.showControls();
					}
				});

				_listen('zoomGestureEnded', function() {
					pinchControlsHidden = false;
					if(pinchControlsHidden && !_controlsVisible) {
						ui.showControls();
					}
				});

			};



		var _uiElements = [
			{ 
				name: 'caption', 
				option: 'captionEl',
				onInit: function(el) {  
					_captionContainer = el; 
				} 
			},
			{ 
				name: 'share-modal', 
				option: 'shareEl',
				onInit: function(el) {  
					_shareModal = el;
				},
				onTap: function() {
					_toggleShareModal();
				} 
			},
			{ 
				name: 'button--share', 
				option: 'shareEl',
				onInit: function(el) { 
					_shareButton = el;
				},
				onTap: function() {
					_toggleShareModal();
				} 
			},
			{ 
				name: 'button--zoom', 
				option: 'zoomEl',
				onTap: pswp.toggleDesktopZoom
			},
			{ 
				name: 'counter', 
				option: 'counterEl',
				onInit: function(el) {  
					_indexIndicator = el;
				} 
			},
			{ 
				name: 'button--close', 
				option: 'closeEl',
				onTap: pswp.close
			},
			{ 
				name: 'button--arrow--left', 
				option: 'arrowEl',
				onTap: pswp.prev
			},
			{ 
				name: 'button--arrow--right', 
				option: 'arrowEl',
				onTap: pswp.next
			},
			{ 
				name: 'button--fs', 
				option: 'fullscreenEl',
				onTap: function() {  
					if(_fullscrenAPI.isFullscreen()) {
						_fullscrenAPI.exit();
					} else {
						_fullscrenAPI.enter();
					}
				} 
			},
			{ 
				name: 'preloader', 
				option: 'preloaderEl',
				onInit: function(el) {  
					_loadingIndicator = el;
				} 
			}

		];

		var _setupUIElements = function() {
			var item,
				classAttr,
				uiElement;

			var loopThroughChildElements = function(sChildren) {
				if(!sChildren) {
					return;
				}

				var l = sChildren.length;
				for(var i = 0; i < l; i++) {
					item = sChildren[i];
					classAttr = item.className;

					for(var a = 0; a < _uiElements.length; a++) {
						uiElement = _uiElements[a];

						if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

							if( _options[uiElement.option] ) { // if element is not disabled from options
								
								framework.removeClass(item, 'pswp__element--disabled');
								if(uiElement.onInit) {
									uiElement.onInit(item);
								}
								
								//item.style.display = 'block';
							} else {
								framework.addClass(item, 'pswp__element--disabled');
								//item.style.display = 'none';
							}
						}
					}
				}
			};
			loopThroughChildElements(_controls.children);

			var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
			if(topBar) {
				loopThroughChildElements( topBar.children );
			}
		};


		

		ui.init = function() {

			// extend options
			framework.extend(pswp.options, _defaultUIOptions, true);

			// create local link for fast access
			_options = pswp.options;

			// find pswp__ui element
			_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

			// create local link
			_listen = pswp.listen;


			_setupHidingControlsDuringGestures();

			// update controls when slides change
			_listen('beforeChange', ui.update);

			// toggle zoom on double-tap
			_listen('doubleTap', function(point) {
				var initialZoomLevel = pswp.currItem.initialZoomLevel;
				if(pswp.getZoomLevel() !== initialZoomLevel) {
					pswp.zoomTo(initialZoomLevel, point, 333);
				} else {
					pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
				}
			});

			// Allow text selection in caption
			_listen('preventDragEvent', function(e, isDown, preventObj) {
				var t = e.target || e.srcElement;
				if(
					t && 
					t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
					( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
				) {
					preventObj.prevent = false;
				}
			});

			// bind events for UI
			_listen('bindEvents', function() {
				framework.bind(_controls, 'pswpTap click', _onControlsTap);
				framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

				if(!pswp.likelyTouchDevice) {
					framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
				}
			});

			// unbind events for UI
			_listen('unbindEvents', function() {
				if(!_shareModalHidden) {
					_toggleShareModal();
				}

				if(_idleInterval) {
					clearInterval(_idleInterval);
				}
				framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
				framework.unbind(document, 'mousemove', _onIdleMouseMove);
				framework.unbind(_controls, 'pswpTap click', _onControlsTap);
				framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
				framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

				if(_fullscrenAPI) {
					framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					if(_fullscrenAPI.isFullscreen()) {
						_options.hideAnimationDuration = 0;
						_fullscrenAPI.exit();
					}
					_fullscrenAPI = null;
				}
			});


			// clean up things when gallery is destroyed
			_listen('destroy', function() {
				if(_options.captionEl) {
					if(_fakeCaptionContainer) {
						_controls.removeChild(_fakeCaptionContainer);
					}
					framework.removeClass(_captionContainer, 'pswp__caption--empty');
				}

				if(_shareModal) {
					_shareModal.children[0].onclick = null;
				}
				framework.removeClass(_controls, 'pswp__ui--over-close');
				framework.addClass( _controls, 'pswp__ui--hidden');
				ui.setIdle(false);
			});
			

			if(!_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
			_listen('initialZoomIn', function() {
				if(_options.showAnimationDuration) {
					framework.removeClass( _controls, 'pswp__ui--hidden');
				}
			});
			_listen('initialZoomOut', function() {
				framework.addClass( _controls, 'pswp__ui--hidden');
			});

			_listen('parseVerticalMargin', _applyNavBarGaps);
			
			_setupUIElements();

			if(_options.shareEl && _shareButton && _shareModal) {
				_shareModalHidden = true;
			}

			_countNumItems();

			_setupIdle();

			_setupFullscreenAPI();

			_setupLoadingIndicator();
		};

		ui.setIdle = function(isIdle) {
			_isIdle = isIdle;
			_togglePswpClass(_controls, 'ui--idle', isIdle);
		};

		ui.update = function() {
			// Don't update UI if it's hidden
			if(_controlsVisible && pswp.currItem) {
				
				ui.updateIndexIndicator();

				if(_options.captionEl) {
					_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

					_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
				}

				_overlayUIUpdated = true;

			} else {
				_overlayUIUpdated = false;
			}

			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			_countNumItems();
		};

		ui.updateFullscreen = function(e) {

			if(e) {
				// some browsers change window scroll position during the fullscreen
				// so PhotoSwipe updates it just in case
				setTimeout(function() {
					pswp.setScrollOffset( 0, framework.getScrollY() );
				}, 50);
			}
			
			// toogle pswp--fs class on root element
			framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
		};

		ui.updateIndexIndicator = function() {
			if(_options.counterEl) {
				_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
											_options.indexIndicatorSep + 
											_options.getNumItemsFn();
			}
		};
		
		ui.onGlobalTap = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			if(_blockControlsTap) {
				return;
			}

			if(e.detail && e.detail.pointerType === 'mouse') {

				// close gallery if clicked outside of the image
				if(_hasCloseClass(target)) {
					pswp.close();
					return;
				}

				if(framework.hasClass(target, 'pswp__img')) {
					if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
						if(_options.clickToCloseNonZoomable) {
							pswp.close();
						}
					} else {
						pswp.toggleDesktopZoom(e.detail.releasePoint);
					}
				}
				
			} else {

				// tap anywhere (except buttons) to toggle visibility of controls
				if(_options.tapToToggleControls) {
					if(_controlsVisible) {
						ui.hideControls();
					} else {
						ui.showControls();
					}
				}

				// tap to close gallery
				if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
					pswp.close();
					return;
				}
				
			}
		};
		ui.onMouseOver = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			// add class when mouse is over an element that should close the gallery
			_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
		};

		ui.hideControls = function() {
			framework.addClass(_controls,'pswp__ui--hidden');
			_controlsVisible = false;
		};

		ui.showControls = function() {
			_controlsVisible = true;
			if(!_overlayUIUpdated) {
				ui.update();
			}
			framework.removeClass(_controls,'pswp__ui--hidden');
		};

		ui.supportsFullscreen = function() {
			var d = document;
			return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
		};

		ui.getFullscreenAPI = function() {
			var dE = document.documentElement,
				api,
				tF = 'fullscreenchange';

			if (dE.requestFullscreen) {
				api = {
					enterK: 'requestFullscreen',
					exitK: 'exitFullscreen',
					elementK: 'fullscreenElement',
					eventK: tF
				};

			} else if(dE.mozRequestFullScreen ) {
				api = {
					enterK: 'mozRequestFullScreen',
					exitK: 'mozCancelFullScreen',
					elementK: 'mozFullScreenElement',
					eventK: 'moz' + tF
				};

				

			} else if(dE.webkitRequestFullscreen) {
				api = {
					enterK: 'webkitRequestFullscreen',
					exitK: 'webkitExitFullscreen',
					elementK: 'webkitFullscreenElement',
					eventK: 'webkit' + tF
				};

			} else if(dE.msRequestFullscreen) {
				api = {
					enterK: 'msRequestFullscreen',
					exitK: 'msExitFullscreen',
					elementK: 'msFullscreenElement',
					eventK: 'MSFullscreenChange'
				};
			}

			if(api) {
				api.enter = function() { 
					// disable close-on-scroll in fullscreen
					_initalCloseOnScrollValue = _options.closeOnScroll; 
					_options.closeOnScroll = false; 

					if(this.enterK === 'webkitRequestFullscreen') {
						pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
					} else {
						return pswp.template[this.enterK](); 
					}
				};
				api.exit = function() { 
					_options.closeOnScroll = _initalCloseOnScrollValue;

					return document[this.exitK](); 

				};
				api.isFullscreen = function() { return document[this.elementK]; };
			}

			return api;
		};



	};
	return PhotoSwipeUI_Default;


	});


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rivets = __webpack_require__(352);

	var _rivets2 = _interopRequireDefault(_rivets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function parseYear(str) {
	  return Number.parseInt(str.replace(/\D/g, '').trim(), 10) * (str.toLowerCase().includes('bc') ? -1 : 1);
	}

	Object.assign(_rivets2.default.formatters, {
	  matchesRange: function matchesRange(range, begin, end) {
	    var isRange = range.includes('-'),
	        min = parseYear(isRange ? range.split('-')[0] : range),
	        max = parseYear(isRange ? range.split('-')[1] : range),
	        b = Number.parseInt(begin, 10),
	        e = Number.parseInt(end, 10);

	    return b <= min && max <= e;
	  },


	  toBC: {
	    read: function read(val) {
	      var int = Number.parseInt(val, 10);
	      return int < 0 ? Math.abs(int) + ' BC' : (Number.isNaN(int) ? 0 : val) + ' AD';
	    },

	    publish: parseYear
	  }
	});

/***/ },
/* 389 */
/***/ function(module, exports) {

	/* eslint-disable */

	module.exports = [
	  {% for hero in site.data.heroes %}
	    {
	      {% if hero.src contains "http://" or hero.src contains "https://" %}
	      src: '{{ hero.src }}',
	      {% else %}
	      src: '{{ site.baseurl }}/images/{{ hero.src }}',
	      {% endif %}
	      title: "{{ hero.title | replace: '"', ''' }}"
	    },
	  {% endfor %}
	]


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (parent) {
	  var parentWidth = Math.floor(parent.offsetWidth),
	      rowsSeq = getSplitRowsSeq(parent, 'img');

	  rowsSeq.map(function (arr) {
	    return (0, _lazy2.default)(arr);
	  }).each(function (rowSeq) {
	    var widths = rowSeq.map(function (item) {
	      return item.offsetWidth;
	    }),
	        gap = 5,
	        totalGaps = (rowSeq.size() - 1) * gap,
	        totalWidths = Math.ceil(widths.reduce(function (x, y) {
	      return x + y;
	    })),
	        ratio = parentWidth / (totalWidths + totalGaps);

	    console.log(rowSeq.size());

	    rowSeq.each(function (item, i) {
	      item.style.height = Math.floor(item.offsetHeight * ratio) - 0.5 + 'px';
	      if (i > 0) item.style.marginLeft = gap + 'px';
	    });
	  });
	};

	var _util = __webpack_require__(375);

	var _lazy = __webpack_require__(391);

	var _lazy2 = _interopRequireDefault(_lazy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getSplitRowsSeq(parent, selector) {
	  var els = Array.from(parent.querySelectorAll(selector)),
	      bodyTop = (0, _util.$)('body').getBoundingClientRect().top;

	  return (0, _lazy2.default)(els).tap(function (el) {
	    el.style.height = '';
	    el.style.marginLeft = '';
	  }).groupBy(function (el) {
	    return String(el.getBoundingClientRect().top - bodyTop);
	  });
	}

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {/*
	 * @name Lazy.js
	 *
	 * @fileOverview
	 * Lazy.js is a lazy evaluation library for JavaScript.
	 *
	 * This has been done before. For examples see:
	 *
	 * - [wu.js](http://fitzgen.github.io/wu.js/)
	 * - [Linq.js](http://linqjs.codeplex.com/)
	 * - [from.js](https://github.com/suckgamoni/fromjs/)
	 * - [IxJS](http://rx.codeplex.com/)
	 * - [sloth.js](http://rfw.name/sloth.js/)
	 *
	 * However, at least at present, Lazy.js is faster (on average) than any of
	 * those libraries. It is also more complete, with nearly all of the
	 * functionality of [Underscore](http://underscorejs.org/) and
	 * [Lo-Dash](http://lodash.com/).
	 *
	 * Finding your way around the code
	 * --------------------------------
	 *
	 * At the heart of Lazy.js is the {@link Sequence} object. You create an initial
	 * sequence using {@link Lazy}, which can accept an array, object, or string.
	 * You can then "chain" together methods from this sequence, creating a new
	 * sequence with each call.
	 *
	 * Here's an example:
	 *
	 *     var data = getReallyBigArray();
	 *
	 *     var statistics = Lazy(data)
	 *       .map(transform)
	 *       .filter(validate)
	 *       .reduce(aggregate);
	 *
	 * {@link Sequence} is the foundation of other, more specific sequence types.
	 *
	 * An {@link ArrayLikeSequence} provides indexed access to its elements.
	 *
	 * An {@link ObjectLikeSequence} consists of key/value pairs.
	 *
	 * A {@link StringLikeSequence} is like a string (duh): actually, it is an
	 * {@link ArrayLikeSequence} whose elements happen to be characters.
	 *
	 * An {@link AsyncSequence} is special: it iterates over its elements
	 * asynchronously (so calling `each` generally begins an asynchronous loop and
	 * returns immediately).
	 *
	 * For more information
	 * --------------------
	 *
	 * I wrote a blog post that explains a little bit more about Lazy.js, which you
	 * can read [here](http://philosopherdeveloper.com/posts/introducing-lazy-js.html).
	 *
	 * You can also [create an issue on GitHub](https://github.com/dtao/lazy.js/issues)
	 * if you have any issues with the library. I work through them eventually.
	 *
	 * [@dtao](https://github.com/dtao)
	 */

	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.Lazy = factory();
	  }
	})(this, function(context) {
	  /**
	   * Wraps an object and returns a {@link Sequence}. For `null` or `undefined`,
	   * simply returns an empty sequence (see {@link Lazy.strict} for a stricter
	   * implementation).
	   *
	   * - For **arrays**, Lazy will create a sequence comprising the elements in
	   *   the array (an {@link ArrayLikeSequence}).
	   * - For **objects**, Lazy will create a sequence of key/value pairs
	   *   (an {@link ObjectLikeSequence}).
	   * - For **strings**, Lazy will create a sequence of characters (a
	   *   {@link StringLikeSequence}).
	   *
	   * @public
	   * @param {Array|Object|string} source An array, object, or string to wrap.
	   * @returns {Sequence} The wrapped lazy object.
	   *
	   * @exampleHelpers
	   * // Utility functions to provide to all examples
	   * function increment(x) { return x + 1; }
	   * function isEven(x) { return x % 2 === 0; }
	   * function isPositive(x) { return x > 0; }
	   * function isNegative(x) { return x < 0; }
	   *
	   * @examples
	   * Lazy([1, 2, 4])       // instanceof Lazy.ArrayLikeSequence
	   * Lazy({ foo: "bar" })  // instanceof Lazy.ObjectLikeSequence
	   * Lazy("hello, world!") // instanceof Lazy.StringLikeSequence
	   * Lazy()                // sequence: []
	   * Lazy(null)            // sequence: []
	   */
	  function Lazy(source) {
	    if (source instanceof Array) {
	      return new ArrayWrapper(source);

	    } else if (typeof source === "string") {
	      return new StringWrapper(source);

	    } else if (source instanceof Sequence) {
	      return source;
	    }

	    if (Lazy.extensions) {
	      var extensions = Lazy.extensions, length = extensions.length, result;
	      while (!result && length--) {
	        result = extensions[length](source);
	      }
	      if (result) {
	        return result;
	      }
	    }

	    return new ObjectWrapper(source);
	  }

	  Lazy.VERSION = '0.4.2';

	  /*** Utility methods of questionable value ***/

	  Lazy.noop = function noop() {};
	  Lazy.identity = function identity(x) { return x; };

	  /**
	   * Provides a stricter version of {@link Lazy} which throws an error when
	   * attempting to wrap `null`, `undefined`, or numeric or boolean values as a
	   * sequence.
	   *
	   * @public
	   * @returns {Function} A stricter version of the {@link Lazy} helper function.
	   *
	   * @examples
	   * var Strict = Lazy.strict();
	   *
	   * Strict()                  // throws
	   * Strict(null)              // throws
	   * Strict(true)              // throws
	   * Strict(5)                 // throws
	   * Strict([1, 2, 3])         // instanceof Lazy.ArrayLikeSequence
	   * Strict({ foo: "bar" })    // instanceof Lazy.ObjectLikeSequence
	   * Strict("hello, world!")   // instanceof Lazy.StringLikeSequence
	   *
	   * // Let's also ensure the static functions are still there.
	   * Strict.range(3)           // sequence: [0, 1, 2]
	   * Strict.generate(Date.now) // instanceof Lazy.GeneratedSequence
	   */
	  Lazy.strict = function strict() {
	    function StrictLazy(source) {
	      if (source == null) {
	        throw new Error("You cannot wrap null or undefined using Lazy.");
	      }

	      if (typeof source === "number" || typeof source === "boolean") {
	        throw new Error("You cannot wrap primitive values using Lazy.");
	      }

	      return Lazy(source);
	    };

	    Lazy(Lazy).each(function(property, name) {
	      StrictLazy[name] = property;
	    });

	    return StrictLazy;
	  };

	  /**
	   * The `Sequence` object provides a unified API encapsulating the notion of
	   * zero or more consecutive elements in a collection, stream, etc.
	   *
	   * Lazy evaluation
	   * ---------------
	   *
	   * Generally speaking, creating a sequence should not be an expensive operation,
	   * and should not iterate over an underlying source or trigger any side effects.
	   * This means that chaining together methods that return sequences incurs only
	   * the cost of creating the `Sequence` objects themselves and not the cost of
	   * iterating an underlying data source multiple times.
	   *
	   * The following code, for example, creates 4 sequences and does nothing with
	   * `source`:
	   *
	   *     var seq = Lazy(source) // 1st sequence
	   *       .map(func)           // 2nd
	   *       .filter(pred)        // 3rd
	   *       .reverse();          // 4th
	   *
	   * Lazy's convention is to hold off on iterating or otherwise *doing* anything
	   * (aside from creating `Sequence` objects) until you call `each`:
	   *
	   *     seq.each(function(x) { console.log(x); });
	   *
	   * Defining custom sequences
	   * -------------------------
	   *
	   * Defining your own type of sequence is relatively simple:
	   *
	   * 1. Pass a *method name* and an object containing *function overrides* to
	   *    {@link Sequence.define}. If the object includes a function called `init`,
	   *    this function will be called upon initialization.
	   * 2. The object should include at least either a `getIterator` method or an
	   *    `each` method. The former supports both asynchronous and synchronous
	   *    iteration, but is slightly more cumbersome to implement. The latter
	   *    supports synchronous iteration and can be automatically implemented in
	   *    terms of the former. You can also implement both if you want, e.g. to
	   *    optimize performance. For more info, see {@link Iterator} and
	   *    {@link AsyncSequence}.
	   *
	   * As a trivial example, the following code defines a new method, `sample`,
	   * which randomly may or may not include each element from its parent.
	   *
	   *     Lazy.Sequence.define("sample", {
	   *       each: function(fn) {
	   *         return this.parent.each(function(e) {
	   *           // 50/50 chance of including this element.
	   *           if (Math.random() > 0.5) {
	   *             return fn(e);
	   *           }
	   *         });
	   *       }
	   *     });
	   *
	   * (Of course, the above could also easily have been implemented using
	   * {@link #filter} instead of creating a custom sequence. But I *did* say this
	   * was a trivial example, to be fair.)
	   *
	   * Now it will be possible to create this type of sequence from any parent
	   * sequence by calling the method name you specified. In other words, you can
	   * now do this:
	   *
	   *     Lazy(arr).sample();
	   *     Lazy(arr).map(func).sample();
	   *     Lazy(arr).map(func).filter(pred).sample();
	   *
	   * Etc., etc.
	   *
	   * @public
	   * @constructor
	   */
	  function Sequence() {}

	  /**
	   * Create a new constructor function for a type inheriting from `Sequence`.
	   *
	   * @public
	   * @param {string|Array.<string>} methodName The name(s) of the method(s) to be
	   *     used for constructing the new sequence. The method will be attached to
	   *     the `Sequence` prototype so that it can be chained with any other
	   *     sequence methods, like {@link #map}, {@link #filter}, etc.
	   * @param {Object} overrides An object containing function overrides for this
	   *     new sequence type. **Must** include either `getIterator` or `each` (or
	   *     both). *May* include an `init` method as well. For these overrides,
	   *     `this` will be the new sequence, and `this.parent` will be the base
	   *     sequence from which the new sequence was constructed.
	   * @returns {Function} A constructor for a new type inheriting from `Sequence`.
	   *
	   * @examples
	   * // This sequence type logs every element to the specified logger as it
	   * // iterates over it.
	   * Lazy.Sequence.define("verbose", {
	   *   init: function(logger) {
	   *     this.logger = logger;
	   *   },
	   *
	   *   each: function(fn) {
	   *     var logger = this.logger;
	   *     return this.parent.each(function(e, i) {
	   *       logger(e);
	   *       return fn(e, i);
	   *     });
	   *   }
	   * });
	   *
	   * Lazy([1, 2, 3]).verbose(logger).each(Lazy.noop) // calls logger 3 times
	   */
	  Sequence.define = function define(methodName, overrides) {
	    if (!overrides || (!overrides.getIterator && !overrides.each)) {
	      throw new Error("A custom sequence must implement *at least* getIterator or each!");
	    }

	    return defineSequenceType(Sequence, methodName, overrides);
	  };

	  /**
	   * Gets the number of elements in the sequence. In some cases, this may
	   * require eagerly evaluating the sequence.
	   *
	   * @public
	   * @returns {number} The number of elements in the sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).size();                 // => 3
	   * Lazy([1, 2]).map(Lazy.identity).size(); // => 2
	   * Lazy([1, 2, 3]).reject(isEven).size();  // => 2
	   * Lazy([1, 2, 3]).take(1).size();         // => 1
	   * Lazy({ foo: 1, bar: 2 }).size();        // => 2
	   * Lazy('hello').size();                   // => 5
	   */
	  Sequence.prototype.size = function size() {
	    return this.getIndex().length();
	  };

	  /**
	   * Creates an {@link Iterator} object with two methods, `moveNext` -- returning
	   * true or false -- and `current` -- returning the current value.
	   *
	   * This method is used when asynchronously iterating over sequences. Any type
	   * inheriting from `Sequence` must implement this method or it can't support
	   * asynchronous iteration.
	   *
	   * Note that **this method is not intended to be used directly by application
	   * code.** Rather, it is intended as a means for implementors to potentially
	   * define custom sequence types that support either synchronous or
	   * asynchronous iteration.
	   *
	   * @public
	   * @returns {Iterator} An iterator object.
	   *
	   * @examples
	   * var iterator = Lazy([1, 2]).getIterator();
	   *
	   * iterator.moveNext(); // => true
	   * iterator.current();  // => 1
	   * iterator.moveNext(); // => true
	   * iterator.current();  // => 2
	   * iterator.moveNext(); // => false
	   */
	  Sequence.prototype.getIterator = function getIterator() {
	    return new Iterator(this);
	  };

	  /**
	   * Gets the root sequence underlying the current chain of sequences.
	   */
	  Sequence.prototype.root = function root() {
	    return this.parent.root();
	  };

	  /**
	   * Whether or not the current sequence is an asynchronous one. This is more
	   * accurate than checking `instanceof {@link AsyncSequence}` because, for
	   * example, `Lazy([1, 2, 3]).async().map(Lazy.identity)` returns a sequence
	   * that iterates asynchronously even though it's not an instance of
	   * `AsyncSequence`.
	   *
	   * @returns {boolean} Whether or not the current sequence is an asynchronous one.
	   */
	  Sequence.prototype.isAsync = function isAsync() {
	    return this.parent ? this.parent.isAsync() : false;
	  };

	  /**
	   * Evaluates the sequence and produces the appropriate value (an array in most
	   * cases, an object for {@link ObjectLikeSequence}s or a string for
	   * {@link StringLikeSequence}s).
	   *
	   * @returns {Array|string|Object} The value resulting from fully evaluating
	   *     the sequence.
	   */
	  Sequence.prototype.value = function value() {
	    return this.toArray();
	  };

	  /**
	   * Applies the current transformation chain to a given source, returning the
	   * resulting value.
	   *
	   * @examples
	   * var sequence = Lazy([])
	   *   .map(function(x) { return x * -1; })
	   *   .filter(function(x) { return x % 2 === 0; });
	   *
	   * sequence.apply([1, 2, 3, 4]); // => [-2, -4]
	   */
	  Sequence.prototype.apply = function apply(source) {
	    var root = this.root(),
	        previousSource = root.source,
	        result;

	    try {
	      root.source = source;
	      result = this.value();
	    } finally {
	      root.source = previousSource;
	    }

	    return result;
	  };

	  /**
	   * The Iterator object provides an API for iterating over a sequence.
	   *
	   * The purpose of the `Iterator` type is mainly to offer an agnostic way of
	   * iterating over a sequence -- either synchronous (i.e. with a `while` loop)
	   * or asynchronously (with recursive calls to either `setTimeout` or --- if
	   * available --- `setImmediate`). It is not intended to be used directly by
	   * application code.
	   *
	   * @public
	   * @constructor
	   * @param {Sequence} sequence The sequence to iterate over.
	   */
	  function Iterator(sequence) {
	    this.sequence = sequence;
	    this.index    = -1;
	  }

	  /**
	   * Gets the current item this iterator is pointing to.
	   *
	   * @public
	   * @returns {*} The current item.
	   */
	  Iterator.prototype.current = function current() {
	    return this.cachedIndex && this.cachedIndex.get(this.index);
	  };

	  /**
	   * Moves the iterator to the next item in a sequence, if possible.
	   *
	   * @public
	   * @returns {boolean} True if the iterator is able to move to a new item, or else
	   *     false.
	   */
	  Iterator.prototype.moveNext = function moveNext() {
	    var cachedIndex = this.cachedIndex;

	    if (!cachedIndex) {
	      cachedIndex = this.cachedIndex = this.sequence.getIndex();
	    }

	    if (this.index >= cachedIndex.length() - 1) {
	      return false;
	    }

	    ++this.index;
	    return true;
	  };

	  /**
	   * Creates an array snapshot of a sequence.
	   *
	   * Note that for indefinite sequences, this method may raise an exception or
	   * (worse) cause the environment to hang.
	   *
	   * @public
	   * @returns {Array} An array containing the current contents of the sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).toArray() // => [1, 2, 3]
	   */
	  Sequence.prototype.toArray = function toArray() {
	    return this.reduce(function(arr, element) {
	      arr.push(element);
	      return arr;
	    }, []);
	  };

	  /**
	   * Provides an indexed view into the sequence.
	   *
	   * For sequences that are already indexed, this will simply return the
	   * sequence. For non-indexed sequences, this will eagerly evaluate the
	   * sequence.
	   *
	   * @returns {ArrayLikeSequence} A sequence containing the current contents of
	   *     the sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).filter(isEven)            // instanceof Lazy.Sequence
	   * Lazy([1, 2, 3]).filter(isEven).getIndex() // instanceof Lazy.ArrayLikeSequence
	   */
	  Sequence.prototype.getIndex = function getIndex() {
	    return new ArrayWrapper(this.toArray());
	  };

	  /**
	   * Returns the element at the specified index. Note that, for sequences that
	   * are not {@link ArrayLikeSequence}s, this may require partially evaluating
	   * the sequence, iterating to reach the result. (In other words for such
	   * sequences this method is not O(1).)
	   *
	   * @public
	   * @param {number} i The index to access.
	   * @returns {*} The element.
	   *
	   */
	  Sequence.prototype.get = function get(i) {
	    var element;
	    this.each(function(e, index) {
	      if (index === i) {
	        element = e;
	        return false;
	      }
	    });
	    return element;
	  };

	  /**
	   * Provides an indexed, memoized view into the sequence. This will cache the
	   * result whenever the sequence is first iterated, so that subsequent
	   * iterations will access the same element objects.
	   *
	   * @public
	   * @returns {ArrayLikeSequence} An indexed, memoized sequence containing this
	   *     sequence's elements, cached after the first iteration.
	   *
	   * @example
	   * function createObject() { return new Object(); }
	   *
	   * var plain    = Lazy.generate(createObject, 10),
	   *     memoized = Lazy.generate(createObject, 10).memoize();
	   *
	   * plain.toArray()[0] === plain.toArray()[0];       // => false
	   * memoized.toArray()[0] === memoized.toArray()[0]; // => true
	   */
	  Sequence.prototype.memoize = function memoize() {
	    return new MemoizedSequence(this);
	  };

	  /**
	   * @constructor
	   */
	  function MemoizedSequence(parent) {
	    this.parent = parent;
	  }

	  // MemoizedSequence needs to have its prototype set up after ArrayLikeSequence

	  /**
	   * Creates an object from a sequence of key/value pairs.
	   *
	   * @public
	   * @returns {Object} An object with keys and values corresponding to the pairs
	   *     of elements in the sequence.
	   *
	   * @examples
	   * var details = [
	   *   ["first", "Dan"],
	   *   ["last", "Tao"],
	   *   ["age", 29]
	   * ];
	   *
	   * Lazy(details).toObject() // => { first: "Dan", last: "Tao", age: 29 }
	   */
	  Sequence.prototype.toObject = function toObject() {
	    return this.reduce(function(object, pair) {
	      object[pair[0]] = pair[1];
	      return object;
	    }, {});
	  };

	  /**
	   * Iterates over this sequence and executes a function for every element.
	   *
	   * @public
	   * @aka forEach
	   * @param {Function} fn The function to call on each element in the sequence.
	   *     Return false from the function to end the iteration.
	   * @returns {boolean} `true` if the iteration evaluated the entire sequence,
	   *     or `false` if iteration was ended early.
	   *
	   * @examples
	   * Lazy([1, 2, 3, 4]).each(fn) // calls fn 4 times
	   */
	  Sequence.prototype.each = function each(fn) {
	    var iterator = this.getIterator(),
	        i = -1;

	    while (iterator.moveNext()) {
	      if (fn(iterator.current(), ++i) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  Sequence.prototype.forEach = function forEach(fn) {
	    return this.each(fn);
	  };

	  /**
	   * Creates a new sequence whose values are calculated by passing this sequence's
	   * elements through some mapping function.
	   *
	   * @public
	   * @aka collect
	   * @param {Function} mapFn The mapping function used to project this sequence's
	   *     elements onto a new sequence. This function takes up to two arguments:
	   *     the element, and the current index.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * function addIndexToValue(e, i) { return e + i; }
	   *
	   * Lazy([]).map(increment)              // sequence: []
	   * Lazy([1, 2, 3]).map(increment)       // sequence: [2, 3, 4]
	   * Lazy([1, 2, 3]).map(addIndexToValue) // sequence: [1, 3, 5]
	   *
	   * @benchmarks
	   * function increment(x) { return x + 1; }
	   *
	   * var smArr = Lazy.range(10).toArray(),
	   *     lgArr = Lazy.range(100).toArray();
	   *
	   * Lazy(smArr).map(increment).each(Lazy.noop) // lazy - 10 elements
	   * Lazy(lgArr).map(increment).each(Lazy.noop) // lazy - 100 elements
	   * _.each(_.map(smArr, increment), _.noop)    // lodash - 10 elements
	   * _.each(_.map(lgArr, increment), _.noop)    // lodash - 100 elements
	   */
	  Sequence.prototype.map = function map(mapFn) {
	    return new MappedSequence(this, createCallback(mapFn));
	  };

	  Sequence.prototype.collect = function collect(mapFn) {
	    return this.map(mapFn);
	  };

	  /**
	   * @constructor
	   */
	  function MappedSequence(parent, mapFn) {
	    this.parent = parent;
	    this.mapFn  = mapFn;
	  }

	  MappedSequence.prototype = new Sequence();

	  MappedSequence.prototype.getIterator = function getIterator() {
	    return new MappingIterator(this.parent, this.mapFn);
	  };

	  MappedSequence.prototype.each = function each(fn) {
	    var mapFn = this.mapFn;
	    return this.parent.each(function(e, i) {
	      return fn(mapFn(e, i), i);
	    });
	  };

	  /**
	   * @constructor
	   */
	  function MappingIterator(sequence, mapFn) {
	    this.iterator = sequence.getIterator();
	    this.mapFn    = mapFn;
	    this.index    = -1;
	  }

	  MappingIterator.prototype.current = function current() {
	    return this.mapFn(this.iterator.current(), this.index);
	  };

	  MappingIterator.prototype.moveNext = function moveNext() {
	    if (this.iterator.moveNext()) {
	      ++this.index;
	      return true;
	    }

	    return false;
	  };

	  /**
	   * Creates a new sequence whose values are calculated by accessing the specified
	   * property from each element in this sequence.
	   *
	   * @public
	   * @param {string} propertyName The name of the property to access for every
	   *     element in this sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * var people = [
	   *   { first: "Dan", last: "Tao" },
	   *   { first: "Bob", last: "Smith" }
	   * ];
	   *
	   * Lazy(people).pluck("last") // sequence: ["Tao", "Smith"]
	   */
	  Sequence.prototype.pluck = function pluck(property) {
	    return this.map(property);
	  };

	  /**
	   * Creates a new sequence whose values are calculated by invoking the specified
	   * function on each element in this sequence.
	   *
	   * @public
	   * @param {string} methodName The name of the method to invoke for every element
	   *     in this sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * function Person(first, last) {
	   *   this.fullName = function fullName() {
	   *     return first + " " + last;
	   *   };
	   * }
	   *
	   * var people = [
	   *   new Person("Dan", "Tao"),
	   *   new Person("Bob", "Smith")
	   * ];
	   *
	   * Lazy(people).invoke("fullName") // sequence: ["Dan Tao", "Bob Smith"]
	   */
	  Sequence.prototype.invoke = function invoke(methodName) {
	    return this.map(function(e) {
	      return e[methodName]();
	    });
	  };

	  /**
	   * Creates a new sequence whose values are the elements of this sequence which
	   * satisfy the specified predicate.
	   *
	   * @public
	   * @aka select
	   * @param {Function} filterFn The predicate to call on each element in this
	   *     sequence, which returns true if the element should be included.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * var numbers = [1, 2, 3, 4, 5, 6];
	   *
	   * Lazy(numbers).filter(isEven) // sequence: [2, 4, 6]
	   *
	   * @benchmarks
	   * function isEven(x) { return x % 2 === 0; }
	   *
	   * var smArr = Lazy.range(10).toArray(),
	   *     lgArr = Lazy.range(100).toArray();
	   *
	   * Lazy(smArr).filter(isEven).each(Lazy.noop) // lazy - 10 elements
	   * Lazy(lgArr).filter(isEven).each(Lazy.noop) // lazy - 100 elements
	   * _.each(_.filter(smArr, isEven), _.noop)    // lodash - 10 elements
	   * _.each(_.filter(lgArr, isEven), _.noop)    // lodash - 100 elements
	   */
	  Sequence.prototype.filter = function filter(filterFn) {
	    return new FilteredSequence(this, createCallback(filterFn));
	  };

	  Sequence.prototype.select = function select(filterFn) {
	    return this.filter(filterFn);
	  };

	  /**
	   * @constructor
	   */
	  function FilteredSequence(parent, filterFn) {
	    this.parent   = parent;
	    this.filterFn = filterFn;
	  }

	  FilteredSequence.prototype = new Sequence();

	  FilteredSequence.prototype.getIterator = function getIterator() {
	    return new FilteringIterator(this.parent, this.filterFn);
	  };

	  FilteredSequence.prototype.each = function each(fn) {
	    var filterFn = this.filterFn,
	        j = 0;

	    return this.parent.each(function(e, i) {
	      if (filterFn(e, i)) {
	        return fn(e, j++);
	      }
	    });
	  };

	  FilteredSequence.prototype.reverse = function reverse() {
	    return this.parent.reverse().filter(this.filterFn);
	  };

	  /**
	   * @constructor
	   */
	  function FilteringIterator(sequence, filterFn) {
	    this.iterator = sequence.getIterator();
	    this.filterFn = filterFn;
	    this.index    = 0;
	  }

	  FilteringIterator.prototype.current = function current() {
	    return this.value;
	  };

	  FilteringIterator.prototype.moveNext = function moveNext() {
	    var iterator = this.iterator,
	        filterFn = this.filterFn,
	        value;

	    while (iterator.moveNext()) {
	      value = iterator.current();
	      if (filterFn(value, this.index++)) {
	        this.value = value;
	        return true;
	      }
	    }

	    this.value = undefined;
	    return false;
	  };

	  /**
	   * Creates a new sequence whose values exclude the elements of this sequence
	   * identified by the specified predicate.
	   *
	   * @public
	   * @param {Function} rejectFn The predicate to call on each element in this
	   *     sequence, which returns true if the element should be omitted.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3, 4, 5]).reject(isEven)              // sequence: [1, 3, 5]
	   * Lazy([{ foo: 1 }, { bar: 2 }]).reject('foo')      // sequence: [{ bar: 2 }]
	   * Lazy([{ foo: 1 }, { foo: 2 }]).reject({ foo: 2 }) // sequence: [{ foo: 1 }]
	   */
	  Sequence.prototype.reject = function reject(rejectFn) {
	    rejectFn = createCallback(rejectFn);
	    return this.filter(function(e) { return !rejectFn(e); });
	  };

	  /**
	   * Creates a new sequence whose values have the specified type, as determined
	   * by the `typeof` operator.
	   *
	   * @public
	   * @param {string} type The type of elements to include from the underlying
	   *     sequence, i.e. where `typeof [element] === [type]`.
	   * @returns {Sequence} The new sequence, comprising elements of the specified
	   *     type.
	   *
	   * @examples
	   * Lazy([1, 2, 'foo', 'bar']).ofType('number')  // sequence: [1, 2]
	   * Lazy([1, 2, 'foo', 'bar']).ofType('string')  // sequence: ['foo', 'bar']
	   * Lazy([1, 2, 'foo', 'bar']).ofType('boolean') // sequence: []
	   */
	  Sequence.prototype.ofType = function ofType(type) {
	    return this.filter(function(e) { return typeof e === type; });
	  };

	  /**
	   * Creates a new sequence whose values are the elements of this sequence with
	   * property names and values matching those of the specified object.
	   *
	   * @public
	   * @param {Object} properties The properties that should be found on every
	   *     element that is to be included in this sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * var people = [
	   *   { first: "Dan", last: "Tao" },
	   *   { first: "Bob", last: "Smith" }
	   * ];
	   *
	   * Lazy(people).where({ first: "Dan" }) // sequence: [{ first: "Dan", last: "Tao" }]
	   *
	   * @benchmarks
	   * var animals = ["dog", "cat", "mouse", "horse", "pig", "snake"];
	   *
	   * Lazy(animals).where({ length: 3 }).each(Lazy.noop) // lazy
	   * _.each(_.where(animals, { length: 3 }), _.noop)    // lodash
	   */
	  Sequence.prototype.where = function where(properties) {
	    return this.filter(properties);
	  };

	  /**
	   * Creates a new sequence with the same elements as this one, but to be iterated
	   * in the opposite order.
	   *
	   * Note that in some (but not all) cases, the only way to create such a sequence
	   * may require iterating the entire underlying source when `each` is called.
	   *
	   * @public
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).reverse() // sequence: [3, 2, 1]
	   * Lazy([]).reverse()        // sequence: []
	   */
	  Sequence.prototype.reverse = function reverse() {
	    return new ReversedSequence(this);
	  };

	  /**
	   * @constructor
	   */
	  function ReversedSequence(parent) {
	    this.parent = parent;
	  }

	  ReversedSequence.prototype = new Sequence();

	  ReversedSequence.prototype.getIterator = function getIterator() {
	    return new ReversedIterator(this.parent);
	  };

	  /**
	   * @constuctor
	   */
	  function ReversedIterator(sequence) {
	    this.sequence = sequence;
	  }

	  ReversedIterator.prototype.current = function current() {
	    return this.getIndex().get(this.index);
	  };

	  ReversedIterator.prototype.moveNext = function moveNext() {
	    var index  = this.getIndex(),
	        length = index.length();

	    if (typeof this.index === "undefined") {
	      this.index = length;
	    }

	    return (--this.index >= 0);
	  };

	  ReversedIterator.prototype.getIndex = function getIndex() {
	    if (!this.cachedIndex) {
	      this.cachedIndex = this.sequence.getIndex();
	    }

	    return this.cachedIndex;
	  };

	  /**
	   * Creates a new sequence with all of the elements of this one, plus those of
	   * the given array(s).
	   *
	   * @public
	   * @param {...*} var_args One or more values (or arrays of values) to use for
	   *     additional items after this sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * var left  = [1, 2, 3];
	   * var right = [4, 5, 6];
	   *
	   * Lazy(left).concat(right)         // sequence: [1, 2, 3, 4, 5, 6]
	   * Lazy(left).concat(Lazy(right))   // sequence: [1, 2, 3, 4, 5, 6]
	   * Lazy(left).concat(right, [7, 8]) // sequence: [1, 2, 3, 4, 5, 6, 7, 8]
	   */
	  Sequence.prototype.concat = function concat(var_args) {
	    return new ConcatenatedSequence(this, arraySlice.call(arguments, 0));
	  };

	  /**
	   * @constructor
	   */
	  function ConcatenatedSequence(parent, arrays) {
	    this.parent = parent;
	    this.arrays = arrays;
	  }

	  ConcatenatedSequence.prototype = new Sequence();

	  ConcatenatedSequence.prototype.each = function each(fn) {
	    var done = false,
	        i = 0;

	    this.parent.each(function(e) {
	      if (fn(e, i++) === false) {
	        done = true;
	        return false;
	      }
	    });

	    if (!done) {
	      Lazy(this.arrays).flatten().each(function(e) {
	        if (fn(e, i++) === false) {
	          return false;
	        }
	      });
	    }
	  };

	  /**
	   * Creates a new sequence comprising the first N elements from this sequence, OR
	   * (if N is `undefined`) simply returns the first element of this sequence.
	   *
	   * @public
	   * @aka head, take
	   * @param {number=} count The number of elements to take from this sequence. If
	   *     this value exceeds the length of the sequence, the resulting sequence
	   *     will be essentially the same as this one.
	   * @returns {*} The new sequence (or the first element from this sequence if
	   *     no count was given).
	   *
	   * @examples
	   * function powerOfTwo(exp) {
	   *   return Math.pow(2, exp);
	   * }
	   *
	   * Lazy.generate(powerOfTwo).first()          // => 1
	   * Lazy.generate(powerOfTwo).first(5)         // sequence: [1, 2, 4, 8, 16]
	   * Lazy.generate(powerOfTwo).skip(2).first()  // => 4
	   * Lazy.generate(powerOfTwo).skip(2).first(2) // sequence: [4, 8]
	   */
	  Sequence.prototype.first = function first(count) {
	    if (typeof count === "undefined") {
	      return getFirst(this);
	    }
	    return new TakeSequence(this, count);
	  };

	  Sequence.prototype.head =
	  Sequence.prototype.take = function (count) {
	    return this.first(count);
	  };

	  /**
	   * @constructor
	   */
	  function TakeSequence(parent, count) {
	    this.parent = parent;
	    this.count  = count;
	  }

	  TakeSequence.prototype = new Sequence();

	  TakeSequence.prototype.getIterator = function getIterator() {
	    return new TakeIterator(this.parent, this.count);
	  };

	  TakeSequence.prototype.each = function each(fn) {
	    var count = this.count,
	        i     = 0;

	    var result;
	    var handle = this.parent.each(function(e) {
	      if (i < count) { result = fn(e, i++); }
	      if (i >= count) { return false; }
	      return result;
	    });

	    if (handle instanceof AsyncHandle) {
	      return handle;
	    }

	    return i === count && result !== false;
	  };

	  /**
	   * @constructor
	   */
	  function TakeIterator(sequence, count) {
	    this.iterator = sequence.getIterator();
	    this.count    = count;
	  }

	  TakeIterator.prototype.current = function current() {
	    return this.iterator.current();
	  };

	  TakeIterator.prototype.moveNext = function moveNext() {
	    return ((--this.count >= 0) && this.iterator.moveNext());
	  };

	  /**
	   * Creates a new sequence comprising the elements from the head of this sequence
	   * that satisfy some predicate. Once an element is encountered that doesn't
	   * satisfy the predicate, iteration will stop.
	   *
	   * @public
	   * @param {Function} predicate
	   * @returns {Sequence} The new sequence
	   *
	   * @examples
	   * function lessThan(x) {
	   *   return function(y) {
	   *     return y < x;
	   *   };
	   * }
	   *
	   * Lazy([1, 2, 3, 4]).takeWhile(lessThan(3)) // sequence: [1, 2]
	   * Lazy([1, 2, 3, 4]).takeWhile(lessThan(0)) // sequence: []
	   */
	  Sequence.prototype.takeWhile = function takeWhile(predicate) {
	    return new TakeWhileSequence(this, predicate);
	  };

	  /**
	   * @constructor
	   */
	  function TakeWhileSequence(parent, predicate) {
	    this.parent    = parent;
	    this.predicate = predicate;
	  }

	  TakeWhileSequence.prototype = new Sequence();

	  TakeWhileSequence.prototype.each = function each(fn) {
	    var predicate = this.predicate,
	        finished = false,
	        j = 0;

	    var result = this.parent.each(function(e, i) {
	      if (!predicate(e, i)) {
	        finished = true;
	        return false;
	      }

	      return fn(e, j++);
	    });

	    if (result instanceof AsyncHandle) {
	      return result;
	    }

	    return finished;
	  };

	  /**
	   * Creates a new sequence comprising all but the last N elements of this
	   * sequence.
	   *
	   * @public
	   * @param {number=} count The number of items to omit from the end of the
	   *     sequence (defaults to 1).
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3, 4]).initial()                    // sequence: [1, 2, 3]
	   * Lazy([1, 2, 3, 4]).initial(2)                   // sequence: [1, 2]
	   * Lazy([1, 2, 3]).filter(Lazy.identity).initial() // sequence: [1, 2]
	   */
	  Sequence.prototype.initial = function initial(count) {
	    return new InitialSequence(this, count);
	  };

	  function InitialSequence(parent, count) {
	    this.parent = parent;
	    this.count = typeof count === "number" ? count : 1;
	  }

	  InitialSequence.prototype = new Sequence();

	  InitialSequence.prototype.each = function each(fn) {
	    var index = this.parent.getIndex();
	    return index.take(index.length() - this.count).each(fn);
	  };

	  /**
	   * Creates a new sequence comprising the last N elements of this sequence, OR
	   * (if N is `undefined`) simply returns the last element of this sequence.
	   *
	   * @public
	   * @param {number=} count The number of items to take from the end of the
	   *     sequence.
	   * @returns {*} The new sequence (or the last element from this sequence
	   *     if no count was given).
	   *
	   * @examples
	   * Lazy([1, 2, 3]).last()                 // => 3
	   * Lazy([1, 2, 3]).last(2)                // sequence: [2, 3]
	   * Lazy([1, 2, 3]).filter(isEven).last(2) // sequence: [2]
	   */
	  Sequence.prototype.last = function last(count) {
	    if (typeof count === "undefined") {
	      return this.reverse().first();
	    }
	    return this.reverse().take(count).reverse();
	  };

	  /**
	   * Returns the first element in this sequence with property names and values
	   * matching those of the specified object.
	   *
	   * @public
	   * @param {Object} properties The properties that should be found on some
	   *     element in this sequence.
	   * @returns {*} The found element, or `undefined` if none exists in this
	   *     sequence.
	   *
	   * @examples
	   * var words = ["foo", "bar"];
	   *
	   * Lazy(words).findWhere({ 0: "f" }); // => "foo"
	   * Lazy(words).findWhere({ 0: "z" }); // => undefined
	   */
	  Sequence.prototype.findWhere = function findWhere(properties) {
	    return this.where(properties).first();
	  };

	  /**
	   * Creates a new sequence comprising all but the first N elements of this
	   * sequence.
	   *
	   * @public
	   * @aka skip, tail, rest
	   * @param {number=} count The number of items to omit from the beginning of the
	   *     sequence (defaults to 1).
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3, 4]).rest()  // sequence: [2, 3, 4]
	   * Lazy([1, 2, 3, 4]).rest(0) // sequence: [1, 2, 3, 4]
	   * Lazy([1, 2, 3, 4]).rest(2) // sequence: [3, 4]
	   * Lazy([1, 2, 3, 4]).rest(5) // sequence: []
	   */
	  Sequence.prototype.rest = function rest(count) {
	    return new DropSequence(this, count);
	  };

	  Sequence.prototype.skip =
	  Sequence.prototype.tail =
	  Sequence.prototype.drop = function drop(count) {
	    return this.rest(count);
	  };

	  /**
	   * @constructor
	   */
	  function DropSequence(parent, count) {
	    this.parent = parent;
	    this.count  = typeof count === "number" ? count : 1;
	  }

	  DropSequence.prototype = new Sequence();

	  DropSequence.prototype.each = function each(fn) {
	    var count   = this.count,
	        dropped = 0,
	        i       = 0;

	    return this.parent.each(function(e) {
	      if (dropped++ < count) { return; }
	      return fn(e, i++);
	    });
	  };

	  /**
	   * Creates a new sequence comprising the elements from this sequence *after*
	   * those that satisfy some predicate. The sequence starts with the first
	   * element that does not match the predicate.
	   *
	   * @public
	   * @aka skipWhile
	   * @param {Function} predicate
	   * @returns {Sequence} The new sequence
	   */
	  Sequence.prototype.dropWhile = function dropWhile(predicate) {
	    return new DropWhileSequence(this, predicate);
	  };

	  Sequence.prototype.skipWhile = function skipWhile(predicate) {
	    return this.dropWhile(predicate);
	  };

	  /**
	   * @constructor
	   */
	  function DropWhileSequence(parent, predicate) {
	    this.parent    = parent;
	    this.predicate = predicate;
	  }

	  DropWhileSequence.prototype = new Sequence();

	  DropWhileSequence.prototype.each = function each(fn) {
	    var predicate = this.predicate,
	        done      = false;

	    return this.parent.each(function(e) {
	      if (!done) {
	        if (predicate(e)) {
	          return;
	        }

	        done = true;
	      }

	      return fn(e);
	    });
	  };

	  /**
	   * Creates a new sequence with the same elements as this one, but ordered
	   * using the specified comparison function.
	   *
	   * This has essentially the same behavior as calling
	   * [`Array#sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort),
	   * but obviously instead of modifying the collection it returns a new
	   * {@link Sequence} object.
	   *
	   * @public
	   * @param {Function=} sortFn The function used to compare elements in the
	   *     sequence. The function will be passed two elements and should return:
	   *     - 1 if the first is greater
	   *     - -1 if the second is greater
	   *     - 0 if the two values are the same
	   * @param {boolean} descending Whether or not the resulting sequence should be
	   *     in descending order (defaults to `false`).
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([5, 10, 1]).sort()                // sequence: [1, 5, 10]
	   * Lazy(['foo', 'bar']).sort()            // sequence: ['bar', 'foo']
	   * Lazy(['b', 'c', 'a']).sort(null, true) // sequence: ['c', 'b', 'a']
	   * Lazy([5, 10, 1]).sort(null, true)      // sequence: [10, 5, 1]
	   *
	   * // Sorting w/ custom comparison function
	   * Lazy(['a', 'ab', 'aa', 'ba', 'b', 'abc']).sort(function compare(x, y) {
	   *   if (x.length && (x.length !== y.length)) { return compare(x.length, y.length); }
	   *   if (x === y) { return 0; }
	   *   return x > y ? 1 : -1;
	   * });
	   * // => sequence: ['a', 'b', 'aa', 'ab', 'ba', 'abc']
	   */
	  Sequence.prototype.sort = function sort(sortFn, descending) {
	    sortFn || (sortFn = compare);
	    if (descending) { sortFn = reverseArguments(sortFn); }
	    return new SortedSequence(this, sortFn);
	  };

	  /**
	   * Creates a new sequence with the same elements as this one, but ordered by
	   * the results of the given function.
	   *
	   * You can pass:
	   *
	   * - a *string*, to sort by the named property
	   * - a function, to sort by the result of calling the function on each element
	   *
	   * @public
	   * @param {Function} sortFn The function to call on the elements in this
	   *     sequence, in order to sort them.
	   * @param {boolean} descending Whether or not the resulting sequence should be
	   *     in descending order (defaults to `false`).
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * function population(country) {
	   *   return country.pop;
	   * }
	   *
	   * function area(country) {
	   *   return country.sqkm;
	   * }
	   *
	   * var countries = [
	   *   { name: "USA", pop: 320000000, sqkm: 9600000 },
	   *   { name: "Brazil", pop: 194000000, sqkm: 8500000 },
	   *   { name: "Nigeria", pop: 174000000, sqkm: 924000 },
	   *   { name: "China", pop: 1350000000, sqkm: 9700000 },
	   *   { name: "Russia", pop: 143000000, sqkm: 17000000 },
	   *   { name: "Australia", pop: 23000000, sqkm: 7700000 }
	   * ];
	   *
	   * Lazy(countries).sortBy(population).last(3).pluck('name') // sequence: ["Brazil", "USA", "China"]
	   * Lazy(countries).sortBy(area).last(3).pluck('name')       // sequence: ["USA", "China", "Russia"]
	   * Lazy(countries).sortBy(area, true).first(3).pluck('name') // sequence: ["Russia", "China", "USA"]
	   *
	   * @benchmarks
	   * var randoms = Lazy.generate(Math.random).take(100).toArray();
	   *
	   * Lazy(randoms).sortBy(Lazy.identity).each(Lazy.noop) // lazy
	   * _.each(_.sortBy(randoms, Lazy.identity), _.noop)    // lodash
	   */
	  Sequence.prototype.sortBy = function sortBy(sortFn, descending) {
	    sortFn = createComparator(sortFn);
	    if (descending) { sortFn = reverseArguments(sortFn); }
	    return new SortedSequence(this, sortFn);
	  };

	  /**
	   * @constructor
	   */
	  function SortedSequence(parent, sortFn) {
	    this.parent = parent;
	    this.sortFn = sortFn;
	  }

	  SortedSequence.prototype = new Sequence();

	  SortedSequence.prototype.each = function each(fn) {
	    var sortFn = this.sortFn,
	        result = this.parent.toArray();

	    result.sort(sortFn);

	    return forEach(result, fn);
	  };

	  /**
	   * @examples
	   * var items = [{ a: 4 }, { a: 3 }, { a: 5 }];
	   *
	   * Lazy(items).sortBy('a').reverse();
	   * // => sequence: [{ a: 5 }, { a: 4 }, { a: 3 }]
	   *
	   * Lazy(items).sortBy('a').reverse().reverse();
	   * // => sequence: [{ a: 3 }, { a: 4 }, { a: 5 }]
	   */
	  SortedSequence.prototype.reverse = function reverse() {
	    return new SortedSequence(this.parent, reverseArguments(this.sortFn));
	  };

	  /**
	   * Creates a new {@link ObjectLikeSequence} comprising the elements in this
	   * one, grouped together according to some key. The value associated with each
	   * key in the resulting object-like sequence is an array containing all of
	   * the elements in this sequence with that key.
	   *
	   * @public
	   * @param {Function|string} keyFn The function to call on the elements in this
	   *     sequence to obtain a key by which to group them, or a string representing
	   *     a parameter to read from all the elements in this sequence.
	   * @param {Function|string} valFn (Optional) The function to call on the elements
	   *     in this sequence to assign to the value for each instance to appear in the
	   *     group, or a string representing a parameter to read from all the elements
	   *     in this sequence.
	   * @returns {ObjectLikeSequence} The new sequence.
	   *
	   * @examples
	   * function oddOrEven(x) {
	   *   return x % 2 === 0 ? 'even' : 'odd';
	   * }
	   * function square(x) {
	   *   return x*x;
	   * }
	   *
	   * var numbers = [1, 2, 3, 4, 5];
	   *
	   * Lazy(numbers).groupBy(oddOrEven)                     // sequence: { odd: [1, 3, 5], even: [2, 4] }
	   * Lazy(numbers).groupBy(oddOrEven).get("odd")          // => [1, 3, 5]
	   * Lazy(numbers).groupBy(oddOrEven).get("foo")          // => undefined
	   * Lazy(numbers).groupBy(oddOrEven, square).get("even") // => [4, 16]
	   *
	   * Lazy([
	   *   { name: 'toString' },
	   *   { name: 'toString' }
	   * ]).groupBy('name');
	   * // => sequence: {
	   *   'toString': [
	   *     { name: 'toString' },
	   *     { name: 'toString' }
	   *   ]
	   * }
	   */
	  Sequence.prototype.groupBy = function groupBy(keyFn, valFn) {
	    return new GroupedSequence(this, keyFn, valFn);
	  };

	  /**
	   * @constructor
	   */
	  function GroupedSequence(parent, keyFn, valFn) {
	    this.parent = parent;
	    this.keyFn  = keyFn;
	    this.valFn  = valFn;
	  }

	  // GroupedSequence must have its prototype set after ObjectLikeSequence has
	  // been fully initialized.

	  /**
	   * Creates a new {@link ObjectLikeSequence} comprising the elements in this
	   * one, indexed according to some key.
	   *
	   * @public
	   * @param {Function|string} keyFn The function to call on the elements in this
	   *     sequence to obtain a key by which to index them, or a string
	   *     representing a property to read from all the elements in this sequence.
	   * @param {Function|string} valFn (Optional) The function to call on the elements
	   *     in this sequence to assign to the value of the indexed object, or a string
	   *     representing a parameter to read from all the elements in this sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * var people = [
	   *   { name: 'Bob', age: 25 },
	   *   { name: 'Fred', age: 34 }
	   * ];
	   *
	   * var bob  = people[0],
	   *     fred = people[1];
	   *
	   * Lazy(people).indexBy('name')        // sequence: { 'Bob': bob, 'Fred': fred }
	   * Lazy(people).indexBy('name', 'age') // sequence: { 'Bob': 25, 'Fred': 34 }
	   */
	  Sequence.prototype.indexBy = function(keyFn, valFn) {
	    return new IndexedSequence(this, keyFn, valFn);
	  };

	  /**
	   * @constructor
	   */
	  function IndexedSequence(parent, keyFn, valFn) {
	    this.parent = parent;
	    this.keyFn  = keyFn;
	    this.valFn  = valFn;
	  }

	  // IndexedSequence must have its prototype set after ObjectLikeSequence has
	  // been fully initialized.

	  /**
	   * Creates a new {@link ObjectLikeSequence} containing the unique keys of all
	   * the elements in this sequence, each paired with the number of elements
	   * in this sequence having that key.
	   *
	   * @public
	   * @param {Function|string} keyFn The function to call on the elements in this
	   *     sequence to obtain a key by which to count them, or a string representing
	   *     a parameter to read from all the elements in this sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * function oddOrEven(x) {
	   *   return x % 2 === 0 ? 'even' : 'odd';
	   * }
	   *
	   * var numbers = [1, 2, 3, 4, 5];
	   *
	   * Lazy(numbers).countBy(oddOrEven)            // sequence: { odd: 3, even: 2 }
	   * Lazy(numbers).countBy(oddOrEven).get("odd") // => 3
	   * Lazy(numbers).countBy(oddOrEven).get("foo") // => undefined
	   */
	  Sequence.prototype.countBy = function countBy(keyFn) {
	    return new CountedSequence(this, keyFn);
	  };

	  /**
	   * @constructor
	   */
	  function CountedSequence(parent, keyFn) {
	    this.parent = parent;
	    this.keyFn  = keyFn;
	  }

	  // CountedSequence, like GroupedSequence, must have its prototype set after
	  // ObjectLikeSequence has been fully initialized.

	  /**
	   * Creates a new sequence with every unique element from this one appearing
	   * exactly once (i.e., with duplicates removed).
	   *
	   * @public
	   * @aka unique
	   * @param {Function} keyFn An optional function to produce the key for each
	   *     object. This key is then tested for uniqueness as  opposed to the
	   *     object reference.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 2, 3, 3, 3]).uniq() // sequence: [1, 2, 3]
	   * Lazy([{ name: 'mike' }, 
	   * 	{ name: 'sarah' }, 
	   * 	{ name: 'mike' }
	   * ]).uniq('name')
	   * // sequence: [{ name: 'mike' }, { name: 'sarah' }]
	   *
	   * @benchmarks
	   * function randomOf(array) {
	   *   return function() {
	   *     return array[Math.floor(Math.random() * array.length)];
	   *   };
	   * }
	   *
	   * var mostUnique = Lazy.generate(randomOf(_.range(100)), 100).toArray(),
	   *     someUnique = Lazy.generate(randomOf(_.range(50)), 100).toArray(),
	   *     mostDupes  = Lazy.generate(randomOf(_.range(5)), 100).toArray();
	   *
	   * Lazy(mostUnique).uniq().each(Lazy.noop) // lazy - mostly unique elements
	   * Lazy(someUnique).uniq().each(Lazy.noop) // lazy - some unique elements
	   * Lazy(mostDupes).uniq().each(Lazy.noop)  // lazy - mostly duplicate elements
	   * _.each(_.uniq(mostUnique), _.noop)      // lodash - mostly unique elements
	   * _.each(_.uniq(someUnique), _.noop)      // lodash - some unique elements
	   * _.each(_.uniq(mostDupes), _.noop)       // lodash - mostly duplicate elements
	   */
	  Sequence.prototype.uniq = function uniq(keyFn) {
	    return new UniqueSequence(this, keyFn);
	  };

	  Sequence.prototype.unique = function unique(keyFn) {
	    return this.uniq(keyFn);
	  };

	  /**
	   * @constructor
	   */
	  function UniqueSequence(parent, keyFn) {
	    this.parent = parent;
	    this.keyFn  = keyFn;
	  }

	  UniqueSequence.prototype = new Sequence();

	  UniqueSequence.prototype.each = function each(fn) {
	    var cache = new Set(),
	        keyFn = this.keyFn,
	        i     = 0;

	    if (keyFn) {
	      keyFn = createCallback(keyFn);
	      return this.parent.each(function(e) {
	        if (cache.add(keyFn(e))) {
	          return fn(e, i++);
	        }
	      });

	    } else {
	      return this.parent.each(function(e) {
	        if (cache.add(e)) {
	          return fn(e, i++);
	        }
	      });
	    }
	  };

	  /**
	   * Creates a new sequence by combining the elements from this sequence with
	   * corresponding elements from the specified array(s).
	   *
	   * @public
	   * @param {...Array} var_args One or more arrays of elements to combine with
	   *     those of this sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2]).zip([3, 4]) // sequence: [[1, 3], [2, 4]]
	   *
	   * @benchmarks
	   * var smArrL = Lazy.range(10).toArray(),
	   *     smArrR = Lazy.range(10, 20).toArray(),
	   *     lgArrL = Lazy.range(100).toArray(),
	   *     lgArrR = Lazy.range(100, 200).toArray();
	   *
	   * Lazy(smArrL).zip(smArrR).each(Lazy.noop) // lazy - zipping 10-element arrays
	   * Lazy(lgArrL).zip(lgArrR).each(Lazy.noop) // lazy - zipping 100-element arrays
	   * _.each(_.zip(smArrL, smArrR), _.noop)    // lodash - zipping 10-element arrays
	   * _.each(_.zip(lgArrL, lgArrR), _.noop)    // lodash - zipping 100-element arrays
	   */
	  Sequence.prototype.zip = function zip(var_args) {
	    if (arguments.length === 1) {
	      return new SimpleZippedSequence(this, (/** @type {Array} */ var_args));
	    } else {
	      return new ZippedSequence(this, arraySlice.call(arguments, 0));
	    }
	  };

	  /**
	   * @constructor
	   */
	  function ZippedSequence(parent, arrays) {
	    this.parent = parent;
	    this.arrays = arrays;
	  }

	  ZippedSequence.prototype = new Sequence();

	  ZippedSequence.prototype.each = function each(fn) {
	    var arrays = this.arrays,
	        i = 0;
	    this.parent.each(function(e) {
	      var group = [e];
	      for (var j = 0; j < arrays.length; ++j) {
	        if (arrays[j].length > i) {
	          group.push(arrays[j][i]);
	        }
	      }
	      return fn(group, i++);
	    });
	  };

	  /**
	   * Creates a new sequence with the same elements as this one, in a randomized
	   * order.
	   *
	   * @public
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3, 4, 5]).shuffle().value() // =~ [1, 2, 3, 4, 5]
	   */
	  Sequence.prototype.shuffle = function shuffle() {
	    return new ShuffledSequence(this);
	  };

	  /**
	   * @constructor
	   */
	  function ShuffledSequence(parent) {
	    this.parent = parent;
	  }

	  ShuffledSequence.prototype = new Sequence();

	  ShuffledSequence.prototype.each = function each(fn) {
	    var shuffled = this.parent.toArray(),
	        floor = Math.floor,
	        random = Math.random,
	        j = 0;

	    for (var i = shuffled.length - 1; i > 0; --i) {
	      swap(shuffled, i, floor(random() * (i + 1)));
	      if (fn(shuffled[i], j++) === false) {
	        return;
	      }
	    }
	    fn(shuffled[0], j);
	  };

	  /**
	   * Creates a new sequence with every element from this sequence, and with arrays
	   * exploded so that a sequence of arrays (of arrays) becomes a flat sequence of
	   * values.
	   *
	   * @public
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, [2, 3], [4, [5]]]).flatten() // sequence: [1, 2, 3, 4, 5]
	   * Lazy([1, Lazy([2, 3])]).flatten()     // sequence: [1, 2, 3]
	   */
	  Sequence.prototype.flatten = function flatten() {
	    return new FlattenedSequence(this);
	  };

	  /**
	   * @constructor
	   */
	  function FlattenedSequence(parent) {
	    this.parent = parent;
	  }

	  FlattenedSequence.prototype = new Sequence();

	  FlattenedSequence.prototype.each = function each(fn) {
	    var index = 0;

	    return this.parent.each(function recurseVisitor(e) {
	      if (e instanceof Array) {
	        return forEach(e, recurseVisitor);
	      }

	      if (e instanceof Sequence) {
	        return e.each(recurseVisitor);
	      }

	      return fn(e, index++);
	    });
	  };

	  /**
	   * Creates a new sequence with the same elements as this one, except for all
	   * falsy values (`false`, `0`, `""`, `null`, and `undefined`).
	   *
	   * @public
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy(["foo", null, "bar", undefined]).compact() // sequence: ["foo", "bar"]
	   */
	  Sequence.prototype.compact = function compact() {
	    return this.filter(function(e) { return !!e; });
	  };

	  /**
	   * Creates a new sequence with all the elements of this sequence that are not
	   * also among the specified arguments.
	   *
	   * @public
	   * @aka difference
	   * @param {...*} var_args The values, or array(s) of values, to be excluded from the
	   *     resulting sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3, 4, 5]).without(2, 3)   // sequence: [1, 4, 5]
	   * Lazy([1, 2, 3, 4, 5]).without([4, 5]) // sequence: [1, 2, 3]
	   */
	  Sequence.prototype.without = function without(var_args) {
	    return new WithoutSequence(this, arraySlice.call(arguments, 0));
	  };

	  Sequence.prototype.difference = function difference(var_args) {
	    return this.without.apply(this, arguments);
	  };

	  /**
	   * @constructor
	   */
	  function WithoutSequence(parent, values) {
	    this.parent = parent;
	    this.values = values;
	  }

	  WithoutSequence.prototype = new Sequence();

	  WithoutSequence.prototype.each = function each(fn) {
	    var set = createSet(this.values),
	        i = 0;
	    return this.parent.each(function(e) {
	      if (!set.contains(e)) {
	        return fn(e, i++);
	      }
	    });
	  };

	  /**
	   * Creates a new sequence with all the unique elements either in this sequence
	   * or among the specified arguments.
	   *
	   * @public
	   * @param {...*} var_args The values, or array(s) of values, to be additionally
	   *     included in the resulting sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy(["foo", "bar"]).union([])             // sequence: ["foo", "bar"]
	   * Lazy(["foo", "bar"]).union(["bar", "baz"]) // sequence: ["foo", "bar", "baz"]
	   */
	  Sequence.prototype.union = function union(var_args) {
	    return this.concat(var_args).uniq();
	  };

	  /**
	   * Creates a new sequence with all the elements of this sequence that also
	   * appear among the specified arguments.
	   *
	   * @public
	   * @param {...*} var_args The values, or array(s) of values, in which elements
	   *     from this sequence must also be included to end up in the resulting sequence.
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * Lazy(["foo", "bar"]).intersection([])             // sequence: []
	   * Lazy(["foo", "bar"]).intersection(["bar", "baz"]) // sequence: ["bar"]
	   */
	  Sequence.prototype.intersection = function intersection(var_args) {
	    if (arguments.length === 1 && arguments[0] instanceof Array) {
	      return new SimpleIntersectionSequence(this, (/** @type {Array} */ var_args));
	    } else {
	      return new IntersectionSequence(this, arraySlice.call(arguments, 0));
	    }
	  };

	  /**
	   * @constructor
	   */
	  function IntersectionSequence(parent, arrays) {
	    this.parent = parent;
	    this.arrays = arrays;
	  }

	  IntersectionSequence.prototype = new Sequence();

	  IntersectionSequence.prototype.each = function each(fn) {
	    var sets = Lazy(this.arrays).map(function(values) {
	      return new UniqueMemoizer(Lazy(values).getIterator());
	    });

	    var setIterator = new UniqueMemoizer(sets.getIterator()),
	        i = 0;

	    return this.parent.each(function(e) {
	      var includedInAll = true;
	      setIterator.each(function(set) {
	        if (!set.contains(e)) {
	          includedInAll = false;
	          return false;
	        }
	      });

	      if (includedInAll) {
	        return fn(e, i++);
	      }
	    });
	  };

	  /**
	   * @constructor
	   */
	  function UniqueMemoizer(iterator) {
	    this.iterator     = iterator;
	    this.set          = new Set();
	    this.memo         = [];
	    this.currentValue = undefined;
	  }

	  UniqueMemoizer.prototype.current = function current() {
	    return this.currentValue;
	  };

	  UniqueMemoizer.prototype.moveNext = function moveNext() {
	    var iterator = this.iterator,
	        set = this.set,
	        memo = this.memo,
	        current;

	    while (iterator.moveNext()) {
	      current = iterator.current();
	      if (set.add(current)) {
	        memo.push(current);
	        this.currentValue = current;
	        return true;
	      }
	    }
	    return false;
	  };

	  UniqueMemoizer.prototype.each = function each(fn) {
	    var memo = this.memo,
	        length = memo.length,
	        i = -1;

	    while (++i < length) {
	      if (fn(memo[i], i) === false) {
	        return false;
	      }
	    }

	    while (this.moveNext()) {
	      if (fn(this.currentValue, i++) === false) {
	        break;
	      }
	    }
	  };

	  UniqueMemoizer.prototype.contains = function contains(e) {
	    if (this.set.contains(e)) {
	      return true;
	    }

	    while (this.moveNext()) {
	      if (this.currentValue === e) {
	        return true;
	      }
	    }

	    return false;
	  };

	  /**
	   * Checks whether every element in this sequence satisfies a given predicate.
	   *
	   * @public
	   * @aka all
	   * @param {Function} predicate A function to call on (potentially) every element
	   *     in this sequence.
	   * @returns {boolean} True if `predicate` returns true for every element in the
	   *     sequence (or the sequence is empty). False if `predicate` returns false
	   *     for at least one element.
	   *
	   * @examples
	   * var numbers = [1, 2, 3, 4, 5];
	   *
	   * var objects = [{ foo: true }, { foo: false, bar: true }];
	   *
	   * Lazy(numbers).every(isEven)     // => false
	   * Lazy(numbers).every(isPositive) // => true
	   * Lazy(objects).all('foo')        // => false
	   * Lazy(objects).all('bar')        // => false
	   */
	  Sequence.prototype.every = function every(predicate) {
	    predicate = createCallback(predicate);

	    return this.each(function(e, i) {
	      return !!predicate(e, i);
	    });
	  };

	  Sequence.prototype.all = function all(predicate) {
	    return this.every(predicate);
	  };

	  /**
	   * Checks whether at least one element in this sequence satisfies a given
	   * predicate (or, if no predicate is specified, whether the sequence contains at
	   * least one element).
	   *
	   * @public
	   * @aka any
	   * @param {Function=} predicate A function to call on (potentially) every element
	   *     in this sequence.
	   * @returns {boolean} True if `predicate` returns true for at least one element
	   *     in the sequence. False if `predicate` returns false for every element (or
	   *     the sequence is empty).
	   *
	   * @examples
	   * var numbers = [1, 2, 3, 4, 5];
	   *
	   * Lazy(numbers).some()           // => true
	   * Lazy(numbers).some(isEven)     // => true
	   * Lazy(numbers).some(isNegative) // => false
	   * Lazy([]).some()                // => false
	   */
	  Sequence.prototype.some = function some(predicate) {
	    predicate = createCallback(predicate, true);

	    var success = false;
	    this.each(function(e) {
	      if (predicate(e)) {
	        success = true;
	        return false;
	      }
	    });
	    return success;
	  };

	  Sequence.prototype.any = function any(predicate) {
	    return this.some(predicate);
	  };

	  /**
	   * Checks whether NO elements in this sequence satisfy the given predicate
	   * (the opposite of {@link Sequence#all}, basically).
	   *
	   * @public
	   * @param {Function=} predicate A function to call on (potentially) every element
	   *     in this sequence.
	   * @returns {boolean} True if `predicate` does not return true for any element
	   *     in the sequence. False if `predicate` returns true for at least one
	   *     element.
	   *
	   * @examples
	   * var numbers = [1, 2, 3, 4, 5];
	   *
	   * Lazy(numbers).none()           // => false
	   * Lazy(numbers).none(isEven)     // => false
	   * Lazy(numbers).none(isNegative) // => true
	   * Lazy([]).none(isEven)          // => true
	   * Lazy([]).none(isNegative)      // => true
	   * Lazy([]).none()                // => true
	   */
	  Sequence.prototype.none = function none(predicate) {
	    return !this.any(predicate);
	  };

	  /**
	   * Checks whether the sequence has no elements.
	   *
	   * @public
	   * @returns {boolean} True if the sequence is empty, false if it contains at
	   *     least one element.
	   *
	   * @examples
	   * Lazy([]).isEmpty()        // => true
	   * Lazy([1, 2, 3]).isEmpty() // => false
	   */
	  Sequence.prototype.isEmpty = function isEmpty() {
	    return !this.any();
	  };

	  /**
	   * Performs (at worst) a linear search from the head of this sequence,
	   * returning the first index at which the specified value is found.
	   *
	   * @public
	   * @param {*} value The element to search for in the sequence.
	   * @returns {number} The index within this sequence where the given value is
	   *     located, or -1 if the sequence doesn't contain the value.
	   *
	   * @examples
	   * function reciprocal(x) { return 1 / x; }
	   *
	   * Lazy(["foo", "bar", "baz"]).indexOf("bar")   // => 1
	   * Lazy([1, 2, 3]).indexOf(4)                   // => -1
	   * Lazy([1, 2, 3]).map(reciprocal).indexOf(0.5) // => 1
	   */
	  Sequence.prototype.indexOf = function indexOf(value) {
	    var foundIndex = -1;
	    this.each(function(e, i) {
	      if (e === value) {
	        foundIndex = i;
	        return false;
	      }
	    });
	    return foundIndex;
	  };

	  /**
	   * Performs (at worst) a linear search from the tail of this sequence,
	   * returning the last index at which the specified value is found.
	   *
	   * @public
	   * @param {*} value The element to search for in the sequence.
	   * @returns {number} The last index within this sequence where the given value
	   *     is located, or -1 if the sequence doesn't contain the value.
	   *
	   * @examples
	   * Lazy(["a", "b", "c", "b", "a"]).lastIndexOf("b")    // => 3
	   * Lazy([1, 2, 3]).lastIndexOf(0)                      // => -1
	   * Lazy([2, 2, 1, 2, 4]).filter(isEven).lastIndexOf(2) // 2
	   */
	  Sequence.prototype.lastIndexOf = function lastIndexOf(value) {
	    var reversed = this.getIndex().reverse(),
	        index    = reversed.indexOf(value);
	    if (index !== -1) {
	      index = reversed.length() - index - 1;
	    }
	    return index;
	  };

	  /**
	   * Performs a binary search of this sequence, returning the lowest index where
	   * the given value is either found, or where it belongs (if it is not already
	   * in the sequence).
	   *
	   * This method assumes the sequence is in sorted order and will fail otherwise.
	   *
	   * @public
	   * @param {*} value The element to search for in the sequence.
	   * @returns {number} An index within this sequence where the given value is
	   *     located, or where it belongs in sorted order.
	   *
	   * @examples
	   * Lazy([1, 3, 6, 9]).sortedIndex(3)                    // => 1
	   * Lazy([1, 3, 6, 9]).sortedIndex(7)                    // => 3
	   * Lazy([5, 10, 15, 20]).filter(isEven).sortedIndex(10) // => 0
	   * Lazy([5, 10, 15, 20]).filter(isEven).sortedIndex(12) // => 1
	   */
	  Sequence.prototype.sortedIndex = function sortedIndex(value) {
	    var indexed = this.getIndex(),
	        lower   = 0,
	        upper   = indexed.length(),
	        i;

	    while (lower < upper) {
	      i = (lower + upper) >>> 1;
	      if (compare(indexed.get(i), value) === -1) {
	        lower = i + 1;
	      } else {
	        upper = i;
	      }
	    }
	    return lower;
	  };

	  /**
	   * Checks whether the given value is in this sequence.
	   *
	   * @public
	   * @param {*} value The element to search for in the sequence.
	   * @returns {boolean} True if the sequence contains the value, false if not.
	   *
	   * @examples
	   * var numbers = [5, 10, 15, 20];
	   *
	   * Lazy(numbers).contains(15) // => true
	   * Lazy(numbers).contains(13) // => false
	   */
	  Sequence.prototype.contains = function contains(value) {
	    return this.indexOf(value) !== -1;
	  };

	  /**
	   * Aggregates a sequence into a single value according to some accumulator
	   * function.
	   *
	   * For an asynchronous sequence, instead of immediately returning a result
	   * (which it can't, obviously), this method returns an {@link AsyncHandle}
	   * whose `onComplete` method can be called to supply a callback to handle the
	   * final result once iteration has completed.
	   *
	   * @public
	   * @aka inject, foldl
	   * @param {Function} aggregator The function through which to pass every element
	   *     in the sequence. For every element, the function will be passed the total
	   *     aggregated result thus far and the element itself, and should return a
	   *     new aggregated result.
	   * @param {*=} memo The starting value to use for the aggregated result
	   *     (defaults to the first element in the sequence).
	   * @returns {*} The result of the aggregation, or, for asynchronous sequences,
	   *     an {@link AsyncHandle} whose `onComplete` method accepts a callback to
	   *     handle the final result.
	   *
	   * @examples
	   * function multiply(x, y) { return x * y; }
	   *
	   * var numbers = [1, 2, 3, 4];
	   *
	   * Lazy(numbers).reduce(multiply)    // => 24
	   * Lazy(numbers).reduce(multiply, 5) // => 120
	   */
	  Sequence.prototype.reduce = function reduce(aggregator, memo) {
	    if (arguments.length < 2) {
	      return this.tail().reduce(aggregator, this.head());
	    }

	    var eachResult = this.each(function(e, i) {
	      memo = aggregator(memo, e, i);
	    });

	    // TODO: Think of a way more efficient solution to this problem.
	    if (eachResult instanceof AsyncHandle) {
	      return eachResult.then(function() { return memo; });
	    }

	    return memo;
	  };

	  Sequence.prototype.inject =
	  Sequence.prototype.foldl = function foldl(aggregator, memo) {
	    return this.reduce(aggregator, memo);
	  };

	  /**
	   * Aggregates a sequence, from the tail, into a single value according to some
	   * accumulator function.
	   *
	   * @public
	   * @aka foldr
	   * @param {Function} aggregator The function through which to pass every element
	   *     in the sequence. For every element, the function will be passed the total
	   *     aggregated result thus far and the element itself, and should return a
	   *     new aggregated result.
	   * @param {*} memo The starting value to use for the aggregated result.
	   * @returns {*} The result of the aggregation.
	   *
	   * @examples
	   * function append(s1, s2) {
	   *   return s1 + s2;
	   * }
	   *
	   * function isVowel(str) {
	   *   return "aeiou".indexOf(str) !== -1;
	   * }
	   *
	   * Lazy("abcde").reduceRight(append)                 // => "edcba"
	   * Lazy("abcde").filter(isVowel).reduceRight(append) // => "ea"
	   */
	  Sequence.prototype.reduceRight = function reduceRight(aggregator, memo) {
	    if (arguments.length < 2) {
	      return this.initial(1).reduceRight(aggregator, this.last());
	    }

	    // This bothers me... but frankly, calling reverse().reduce() is potentially
	    // going to eagerly evaluate the sequence anyway; so it's really not an issue.
	    var indexed = this.getIndex(),
	        i = indexed.length() - 1;
	    return indexed.reverse().reduce(function(m, e) {
	      return aggregator(m, e, i--);
	    }, memo);
	  };

	  Sequence.prototype.foldr = function foldr(aggregator, memo) {
	    return this.reduceRight(aggregator, memo);
	  };

	  /**
	   * Groups this sequence into consecutive (overlapping) segments of a specified
	   * length. If the underlying sequence has fewer elements than the specfied
	   * length, then this sequence will be empty.
	   *
	   * @public
	   * @param {number} length The length of each consecutive segment.
	   * @returns {Sequence} The resulting sequence of consecutive segments.
	   *
	   * @examples
	   * Lazy([]).consecutive(2)        // => sequence: []
	   * Lazy([1]).consecutive(2)       // => sequence: []
	   * Lazy([1, 2]).consecutive(2)    // => sequence: [[1, 2]]
	   * Lazy([1, 2, 3]).consecutive(2) // => sequence: [[1, 2], [2, 3]]
	   * Lazy([1, 2, 3]).consecutive(0) // => sequence: [[]]
	   * Lazy([1, 2, 3]).consecutive(1) // => sequence: [[1], [2], [3]]
	   */
	  Sequence.prototype.consecutive = function consecutive(count) {
	    var queue    = new Queue(count);
	    var segments = this.map(function(element) {
	      if (queue.add(element).count === count) {
	        return queue.toArray();
	      }
	    });
	    return segments.compact();
	  };

	  /**
	   * Breaks this sequence into chunks (arrays) of a specified length.
	   *
	   * @public
	   * @param {number} size The size of each chunk.
	   * @returns {Sequence} The resulting sequence of chunks.
	   *
	   * @examples
	   * Lazy([]).chunk(2)        // sequence: []
	   * Lazy([1, 2, 3]).chunk(2) // sequence: [[1, 2], [3]]
	   * Lazy([1, 2, 3]).chunk(1) // sequence: [[1], [2], [3]]
	   * Lazy([1, 2, 3]).chunk(4) // sequence: [[1, 2, 3]]
	   * Lazy([1, 2, 3]).chunk(0) // throws
	   */
	  Sequence.prototype.chunk = function chunk(size) {
	    if (size < 1) {
	      throw new Error("You must specify a positive chunk size.");
	    }

	    return new ChunkedSequence(this, size);
	  };

	  /**
	   * @constructor
	   */
	  function ChunkedSequence(parent, size) {
	    this.parent    = parent;
	    this.chunkSize = size;
	  }

	  ChunkedSequence.prototype = new Sequence();

	  ChunkedSequence.prototype.getIterator = function getIterator() {
	    return new ChunkedIterator(this.parent, this.chunkSize);
	  };

	  /**
	   * @constructor
	   */
	  function ChunkedIterator(sequence, size) {
	    this.iterator = sequence.getIterator();
	    this.size     = size;
	  }

	  ChunkedIterator.prototype.current = function current() {
	    return this.currentChunk;
	  };

	  ChunkedIterator.prototype.moveNext = function moveNext() {
	    var iterator  = this.iterator,
	        chunkSize = this.size,
	        chunk     = [];

	    while (chunk.length < chunkSize && iterator.moveNext()) {
	      chunk.push(iterator.current());
	    }

	    if (chunk.length === 0) {
	      return false;
	    }

	    this.currentChunk = chunk;
	    return true;
	  };

	  /**
	   * Passes each element in the sequence to the specified callback during
	   * iteration. This is like {@link Sequence#each}, except that it can be
	   * inserted anywhere in the middle of a chain of methods to "intercept" the
	   * values in the sequence at that point.
	   *
	   * @public
	   * @param {Function} callback A function to call on every element in the
	   *     sequence during iteration. The return value of this function does not
	   *     matter.
	   * @returns {Sequence} A sequence comprising the same elements as this one.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).tap(fn).each(Lazy.noop); // calls fn 3 times
	   */
	  Sequence.prototype.tap = function tap(callback) {
	    return new TappedSequence(this, callback);
	  };

	  /**
	   * @constructor
	   */
	  function TappedSequence(parent, callback) {
	    this.parent = parent;
	    this.callback = callback;
	  }

	  TappedSequence.prototype = new Sequence();

	  TappedSequence.prototype.each = function each(fn) {
	    var callback = this.callback;
	    return this.parent.each(function(e, i) {
	      callback(e, i);
	      return fn(e, i);
	    });
	  };

	  /**
	   * Seaches for the first element in the sequence satisfying a given predicate.
	   *
	   * @public
	   * @aka detect
	   * @param {Function} predicate A function to call on (potentially) every element
	   *     in the sequence.
	   * @returns {*} The first element in the sequence for which `predicate` returns
	   *     `true`, or `undefined` if no such element is found.
	   *
	   * @examples
	   * function divisibleBy3(x) {
	   *   return x % 3 === 0;
	   * }
	   *
	   * var numbers = [5, 6, 7, 8, 9, 10];
	   *
	   * Lazy(numbers).find(divisibleBy3) // => 6
	   * Lazy(numbers).find(isNegative)   // => undefined
	   */
	  Sequence.prototype.find = function find(predicate) {
	    return this.filter(predicate).first();
	  };

	  Sequence.prototype.detect = function detect(predicate) {
	    return this.find(predicate);
	  };

	  /**
	   * Gets the minimum value in the sequence.
	   *
	   * @public
	   * @param {Function=} valueFn The function by which the value for comparison is
	   *     calculated for each element in the sequence.
	   * @returns {*} The element with the lowest value in the sequence, or
	   *     `Infinity` if the sequence is empty.
	   *
	   * @examples
	   * function negate(x) { return x * -1; }
	   *
	   * Lazy([]).min()                       // => Infinity
	   * Lazy([6, 18, 2, 49, 34]).min()       // => 2
	   * Lazy([6, 18, 2, 49, 34]).min(negate) // => 49
	   */
	  Sequence.prototype.min = function min(valueFn) {
	    if (typeof valueFn !== "undefined") {
	      return this.minBy(valueFn);
	    }

	    return this.reduce(function(x, y) { return y < x ? y : x; }, Infinity);
	  };

	  Sequence.prototype.minBy = function minBy(valueFn) {
	    valueFn = createCallback(valueFn);
	    return this.reduce(function(x, y) { return valueFn(y) < valueFn(x) ? y : x; });
	  };

	  /**
	   * Gets the maximum value in the sequence.
	   *
	   * @public
	   * @param {Function=} valueFn The function by which the value for comparison is
	   *     calculated for each element in the sequence.
	   * @returns {*} The element with the highest value in the sequence, or
	   *     `-Infinity` if the sequence is empty.
	   *
	   * @examples
	   * function reverseDigits(x) {
	   *   return Number(String(x).split('').reverse().join(''));
	   * }
	   *
	   * Lazy([]).max()                              // => -Infinity
	   * Lazy([6, 18, 2, 48, 29]).max()              // => 48
	   * Lazy([6, 18, 2, 48, 29]).max(reverseDigits) // => 29
	   */
	  Sequence.prototype.max = function max(valueFn) {
	    if (typeof valueFn !== "undefined") {
	      return this.maxBy(valueFn);
	    }

	    return this.reduce(function(x, y) { return y > x ? y : x; }, -Infinity);
	  };

	  Sequence.prototype.maxBy = function maxBy(valueFn) {
	    valueFn = createCallback(valueFn);
	    return this.reduce(function(x, y) { return valueFn(y) > valueFn(x) ? y : x; });
	  };

	  /**
	   * Gets the sum of the values in the sequence.
	   *
	   * @public
	   * @param {Function=} valueFn The function used to select the values that will
	   *     be summed up.
	   * @returns {*} The sum.
	   *
	   * @examples
	   * Lazy([]).sum()                     // => 0
	   * Lazy([1, 2, 3, 4]).sum()           // => 10
	   * Lazy([1.2, 3.4]).sum(Math.floor)   // => 4
	   * Lazy(['foo', 'bar']).sum('length') // => 6
	   */
	  Sequence.prototype.sum = function sum(valueFn) {
	    if (typeof valueFn !== "undefined") {
	      return this.sumBy(valueFn);
	    }

	    return this.reduce(function(x, y) { return x + y; }, 0);
	  };

	  Sequence.prototype.sumBy = function sumBy(valueFn) {
	    valueFn = createCallback(valueFn);
	    return this.reduce(function(x, y) { return x + valueFn(y); }, 0);
	  };

	  /**
	   * Creates a string from joining together all of the elements in this sequence,
	   * separated by the given delimiter.
	   *
	   * @public
	   * @aka toString
	   * @param {string=} delimiter The separator to insert between every element from
	   *     this sequence in the resulting string (defaults to `","`).
	   * @returns {string} The delimited string.
	   *
	   * @examples
	   * Lazy([6, 29, 1984]).join("/")  // => "6/29/1984"
	   * Lazy(["a", "b", "c"]).join()   // => "a,b,c"
	   * Lazy(["a", "b", "c"]).join("") // => "abc"
	   * Lazy([1, 2, 3]).join()         // => "1,2,3"
	   * Lazy([1, 2, 3]).join("")       // => "123"
	   * Lazy(["", "", ""]).join(",")   // => ",,"
	   */
	  Sequence.prototype.join = function join(delimiter) {
	    delimiter = typeof delimiter === "string" ? delimiter : ",";

	    return this.reduce(function(str, e, i) {
	      if (i > 0) {
	        str += delimiter;
	      }
	      return str + e;
	    }, "");
	  };

	  Sequence.prototype.toString = function toString(delimiter) {
	    return this.join(delimiter);
	  };

	  /**
	   * Creates a sequence, with the same elements as this one, that will be iterated
	   * over asynchronously when calling `each`.
	   *
	   * @public
	   * @param {number=} interval The approximate period, in milliseconds, that
	   *     should elapse between each element in the resulting sequence. Omitting
	   *     this argument will result in the fastest possible asynchronous iteration.
	   * @returns {AsyncSequence} The new asynchronous sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).async(100).each(fn) // calls fn 3 times asynchronously
	   */
	  Sequence.prototype.async = function async(interval) {
	    return new AsyncSequence(this, interval);
	  };

	  /**
	   * @constructor
	   */
	  function SimpleIntersectionSequence(parent, array) {
	    this.parent = parent;
	    this.array  = array;
	    this.each   = getEachForIntersection(array);
	  }

	  SimpleIntersectionSequence.prototype = new Sequence();

	  SimpleIntersectionSequence.prototype.eachMemoizerCache = function eachMemoizerCache(fn) {
	    var iterator = new UniqueMemoizer(Lazy(this.array).getIterator()),
	        i = 0;

	    return this.parent.each(function(e) {
	      if (iterator.contains(e)) {
	        return fn(e, i++);
	      }
	    });
	  };

	  SimpleIntersectionSequence.prototype.eachArrayCache = function eachArrayCache(fn) {
	    var array = this.array,
	        find  = arrayContains,
	        i = 0;

	    return this.parent.each(function(e) {
	      if (find(array, e)) {
	        return fn(e, i++);
	      }
	    });
	  };

	  function getEachForIntersection(source) {
	    if (source.length < 40) {
	      return SimpleIntersectionSequence.prototype.eachArrayCache;
	    } else {
	      return SimpleIntersectionSequence.prototype.eachMemoizerCache;
	    }
	  }

	  /**
	   * An optimized version of {@link ZippedSequence}, when zipping a sequence with
	   * only one array.
	   *
	   * @param {Sequence} parent The underlying sequence.
	   * @param {Array} array The array with which to zip the sequence.
	   * @constructor
	   */
	  function SimpleZippedSequence(parent, array) {
	    this.parent = parent;
	    this.array  = array;
	  }

	  SimpleZippedSequence.prototype = new Sequence();

	  SimpleZippedSequence.prototype.each = function each(fn) {
	    var array = this.array;
	    return this.parent.each(function(e, i) {
	      return fn([e, array[i]], i);
	    });
	  };

	  /**
	   * An `ArrayLikeSequence` is a {@link Sequence} that provides random access to
	   * its elements. This extends the API for iterating with the additional methods
	   * {@link #get} and {@link #length}, allowing a sequence to act as a "view" into
	   * a collection or other indexed data source.
	   *
	   * The initial sequence created by wrapping an array with `Lazy(array)` is an
	   * `ArrayLikeSequence`.
	   *
	   * All methods of `ArrayLikeSequence` that conceptually should return
	   * something like a array (with indexed access) return another
	   * `ArrayLikeSequence`, for example:
	   *
	   * - {@link Sequence#map}
	   * - {@link ArrayLikeSequence#slice}
	   * - {@link Sequence#take} and {@link Sequence#drop}
	   * - {@link Sequence#reverse}
	   *
	   * The above is not an exhaustive list. There are also certain other cases
	   * where it might be possible to return an `ArrayLikeSequence` (e.g., calling
	   * {@link Sequence#concat} with a single array argument), but this is not
	   * guaranteed by the API.
	   *
	   * Note that in many cases, it is not possible to provide indexed access
	   * without first performing at least a partial iteration of the underlying
	   * sequence. In these cases an `ArrayLikeSequence` will not be returned:
	   *
	   * - {@link Sequence#filter}
	   * - {@link Sequence#uniq}
	   * - {@link Sequence#union}
	   * - {@link Sequence#intersect}
	   *
	   * etc. The above methods only return ordinary {@link Sequence} objects.
	   *
	   * Defining custom array-like sequences
	   * ------------------------------------
	   *
	   * Creating a custom `ArrayLikeSequence` is essentially the same as creating a
	   * custom {@link Sequence}. You just have a couple more methods you need to
	   * implement: `get` and (optionally) `length`.
	   *
	   * Here's an example. Let's define a sequence type called `OffsetSequence` that
	   * offsets each of its parent's elements by a set distance, and circles back to
	   * the beginning after reaching the end. **Remember**: the initialization
	   * function you pass to {@link #define} should always accept a `parent` as its
	   * first parameter.
	   *
	   *     ArrayLikeSequence.define("offset", {
	   *       init: function(parent, offset) {
	   *         this.offset = offset;
	   *       },
	   *
	   *       get: function(i) {
	   *         return this.parent.get((i + this.offset) % this.parent.length());
	   *       }
	   *     });
	   *
	   * It's worth noting a couple of things here.
	   *
	   * First, Lazy's default implementation of `length` simply returns the parent's
	   * length. In this case, since an `OffsetSequence` will always have the same
	   * number of elements as its parent, that implementation is fine; so we don't
	   * need to override it.
	   *
	   * Second, the default implementation of `each` uses `get` and `length` to
	   * essentially create a `for` loop, which is fine here. If you want to implement
	   * `each` your own way, you can do that; but in most cases (as here), you can
	   * probably just stick with the default.
	   *
	   * So we're already done, after only implementing `get`! Pretty easy, huh?
	   *
	   * Now the `offset` method will be chainable from any `ArrayLikeSequence`. So
	   * for example:
	   *
	   *     Lazy([1, 2, 3]).map(mapFn).offset(3);
	   *
	   * ...will work, but:
	   *
	   *     Lazy([1, 2, 3]).filter(mapFn).offset(3);
	   *
	   * ...will not (because `filter` does not return an `ArrayLikeSequence`).
	   *
	   * (Also, as with the example provided for defining custom {@link Sequence}
	   * types, this example really could have been implemented using a function
	   * already available as part of Lazy.js: in this case, {@link Sequence#map}.)
	   *
	   * @public
	   * @constructor
	   *
	   * @examples
	   * Lazy([1, 2, 3])                    // instanceof Lazy.ArrayLikeSequence
	   * Lazy([1, 2, 3]).map(Lazy.identity) // instanceof Lazy.ArrayLikeSequence
	   * Lazy([1, 2, 3]).take(2)            // instanceof Lazy.ArrayLikeSequence
	   * Lazy([1, 2, 3]).drop(2)            // instanceof Lazy.ArrayLikeSequence
	   * Lazy([1, 2, 3]).reverse()          // instanceof Lazy.ArrayLikeSequence
	   * Lazy([1, 2, 3]).slice(1, 2)        // instanceof Lazy.ArrayLikeSequence
	   */
	  function ArrayLikeSequence() {}

	  ArrayLikeSequence.prototype = new Sequence();

	  /**
	   * Create a new constructor function for a type inheriting from
	   * `ArrayLikeSequence`.
	   *
	   * @public
	   * @param {string|Array.<string>} methodName The name(s) of the method(s) to be
	   *     used for constructing the new sequence. The method will be attached to
	   *     the `ArrayLikeSequence` prototype so that it can be chained with any other
	   *     methods that return array-like sequences.
	   * @param {Object} overrides An object containing function overrides for this
	   *     new sequence type. **Must** include `get`. *May* include `init`,
	   *     `length`, `getIterator`, and `each`. For each function, `this` will be
	   *     the new sequence and `this.parent` will be the source sequence.
	   * @returns {Function} A constructor for a new type inheriting from
	   *     `ArrayLikeSequence`.
	   *
	   * @examples
	   * Lazy.ArrayLikeSequence.define("offset", {
	   *   init: function(offset) {
	   *     this.offset = offset;
	   *   },
	   *
	   *   get: function(i) {
	   *     return this.parent.get((i + this.offset) % this.parent.length());
	   *   }
	   * });
	   *
	   * Lazy([1, 2, 3]).offset(1) // sequence: [2, 3, 1]
	   */
	  ArrayLikeSequence.define = function define(methodName, overrides) {
	    if (!overrides || typeof overrides.get !== 'function') {
	      throw new Error("A custom array-like sequence must implement *at least* get!");
	    }

	    return defineSequenceType(ArrayLikeSequence, methodName, overrides);
	  };

	  /**
	   * Returns the element at the specified index.
	   *
	   * @public
	   * @param {number} i The index to access.
	   * @returns {*} The element.
	   *
	   * @examples
	   * function increment(x) { return x + 1; }
	   *
	   * Lazy([1, 2, 3]).get(1)                // => 2
	   * Lazy([1, 2, 3]).get(-1)               // => undefined
	   * Lazy([1, 2, 3]).map(increment).get(1) // => 3
	   */
	  ArrayLikeSequence.prototype.get = function get(i) {
	    return this.parent.get(i);
	  };

	  /**
	   * Returns the length of the sequence.
	   *
	   * @public
	   * @returns {number} The length.
	   *
	   * @examples
	   * function increment(x) { return x + 1; }
	   *
	   * Lazy([]).length()                       // => 0
	   * Lazy([1, 2, 3]).length()                // => 3
	   * Lazy([1, 2, 3]).map(increment).length() // => 3
	   */
	  ArrayLikeSequence.prototype.length = function length() {
	    return this.parent.length();
	  };

	  /**
	   * Returns the current sequence (since it is already indexed).
	   */
	  ArrayLikeSequence.prototype.getIndex = function getIndex() {
	    return this;
	  };

	  /**
	   * An optimized version of {@link Sequence#getIterator}.
	   */
	  ArrayLikeSequence.prototype.getIterator = function getIterator() {
	    return new IndexedIterator(this);
	  };

	  /**
	   * An optimized version of {@link Iterator} meant to work with already-indexed
	   * sequences.
	   *
	   * @param {ArrayLikeSequence} sequence The sequence to iterate over.
	   * @constructor
	   */
	  function IndexedIterator(sequence) {
	    this.sequence = sequence;
	    this.index    = -1;
	  }

	  IndexedIterator.prototype.current = function current() {
	    return this.sequence.get(this.index);
	  };

	  IndexedIterator.prototype.moveNext = function moveNext() {
	    if (this.index >= this.sequence.length() - 1) {
	      return false;
	    }

	    ++this.index;
	    return true;
	  };

	  /**
	   * An optimized version of {@link Sequence#each}.
	   */
	  ArrayLikeSequence.prototype.each = function each(fn) {
	    var length = this.length(),
	        i = -1;

	    while (++i < length) {
	      if (fn(this.get(i), i) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  /**
	   * Returns a new sequence with the same elements as this one, minus the last
	   * element.
	   *
	   * @public
	   * @returns {ArrayLikeSequence} The new array-like sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).pop() // sequence: [1, 2]
	   * Lazy([]).pop()        // sequence: []
	   */
	  ArrayLikeSequence.prototype.pop = function pop() {
	    return this.initial();
	  };

	  /**
	   * Returns a new sequence with the same elements as this one, minus the first
	   * element.
	   *
	   * @public
	   * @returns {ArrayLikeSequence} The new array-like sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3]).shift() // sequence: [2, 3]
	   * Lazy([]).shift()        // sequence: []
	   */
	  ArrayLikeSequence.prototype.shift = function shift() {
	    return this.drop();
	  };

	  /**
	   * Returns a new sequence comprising the portion of this sequence starting
	   * from the specified starting index and continuing until the specified ending
	   * index or to the end of the sequence.
	   *
	   * @public
	   * @param {number} begin The index at which the new sequence should start.
	   * @param {number=} end The index at which the new sequence should end.
	   * @returns {ArrayLikeSequence} The new array-like sequence.
	   *
	   * @examples
	   * Lazy([1, 2, 3, 4, 5]).slice(0)     // sequence: [1, 2, 3, 4, 5]
	   * Lazy([1, 2, 3, 4, 5]).slice(2)     // sequence: [3, 4, 5]
	   * Lazy([1, 2, 3, 4, 5]).slice(2, 4)  // sequence: [3, 4]
	   * Lazy([1, 2, 3, 4, 5]).slice(-1)    // sequence: [5]
	   * Lazy([1, 2, 3, 4, 5]).slice(1, -1) // sequence: [2, 3, 4]
	   * Lazy([1, 2, 3, 4, 5]).slice(0, 10) // sequence: [1, 2, 3, 4, 5]
	   */
	  ArrayLikeSequence.prototype.slice = function slice(begin, end) {
	    var length = this.length();

	    if (begin < 0) {
	      begin = length + begin;
	    }

	    var result = this.drop(begin);

	    if (typeof end === "number") {
	      if (end < 0) {
	        end = length + end;
	      }
	      result = result.take(end - begin);
	    }

	    return result;
	  };

	  /**
	   * An optimized version of {@link Sequence#map}, which creates an
	   * {@link ArrayLikeSequence} so that the result still provides random access.
	   *
	   * @public
	   *
	   * @examples
	   * Lazy([1, 2, 3]).map(Lazy.identity) // instanceof Lazy.ArrayLikeSequence
	   */
	  ArrayLikeSequence.prototype.map = function map(mapFn) {
	    return new IndexedMappedSequence(this, createCallback(mapFn));
	  };

	  /**
	   * @constructor
	   */
	  function IndexedMappedSequence(parent, mapFn) {
	    this.parent = parent;
	    this.mapFn  = mapFn;
	  }

	  IndexedMappedSequence.prototype = new ArrayLikeSequence();

	  IndexedMappedSequence.prototype.get = function get(i) {
	    if (i < 0 || i >= this.parent.length()) {
	      return undefined;
	    }

	    return this.mapFn(this.parent.get(i), i);
	  };

	  /**
	   * An optimized version of {@link Sequence#filter}.
	   */
	  ArrayLikeSequence.prototype.filter = function filter(filterFn) {
	    return new IndexedFilteredSequence(this, createCallback(filterFn));
	  };

	  /**
	   * @constructor
	   */
	  function IndexedFilteredSequence(parent, filterFn) {
	    this.parent   = parent;
	    this.filterFn = filterFn;
	  }

	  IndexedFilteredSequence.prototype = new FilteredSequence();

	  IndexedFilteredSequence.prototype.each = function each(fn) {
	    var parent = this.parent,
	        filterFn = this.filterFn,
	        length = this.parent.length(),
	        i = -1,
	        j = 0,
	        e;

	    while (++i < length) {
	      e = parent.get(i);
	      if (filterFn(e, i) && fn(e, j++) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  /**
	   * An optimized version of {@link Sequence#reverse}, which creates an
	   * {@link ArrayLikeSequence} so that the result still provides random access.
	   *
	   * @public
	   *
	   * @examples
	   * Lazy([1, 2, 3]).reverse() // instanceof Lazy.ArrayLikeSequence
	   */
	  ArrayLikeSequence.prototype.reverse = function reverse() {
	    return new IndexedReversedSequence(this);
	  };

	  /**
	   * @constructor
	   */
	  function IndexedReversedSequence(parent) {
	    this.parent = parent;
	  }

	  IndexedReversedSequence.prototype = new ArrayLikeSequence();

	  IndexedReversedSequence.prototype.get = function get(i) {
	    return this.parent.get(this.length() - i - 1);
	  };

	  /**
	   * An optimized version of {@link Sequence#first}, which creates an
	   * {@link ArrayLikeSequence} so that the result still provides random access.
	   *
	   * @public
	   *
	   * @examples
	   * Lazy([1, 2, 3]).first(2) // instanceof Lazy.ArrayLikeSequence
	   */
	  ArrayLikeSequence.prototype.first = function first(count) {
	    if (typeof count === "undefined") {
	      return this.get(0);
	    }

	    return new IndexedTakeSequence(this, count);
	  };

	  /**
	   * @constructor
	   */
	  function IndexedTakeSequence(parent, count) {
	    this.parent = parent;
	    this.count  = count;
	  }

	  IndexedTakeSequence.prototype = new ArrayLikeSequence();

	  IndexedTakeSequence.prototype.length = function length() {
	    var parentLength = this.parent.length();
	    return this.count <= parentLength ? this.count : parentLength;
	  };

	  /**
	   * An optimized version of {@link Sequence#rest}, which creates an
	   * {@link ArrayLikeSequence} so that the result still provides random access.
	   *
	   * @public
	   *
	   * @examples
	   * Lazy([1, 2, 3]).rest() // instanceof Lazy.ArrayLikeSequence
	   */
	  ArrayLikeSequence.prototype.rest = function rest(count) {
	    return new IndexedDropSequence(this, count);
	  };

	  /**
	   * @constructor
	   */
	  function IndexedDropSequence(parent, count) {
	    this.parent = parent;
	    this.count  = typeof count === "number" ? count : 1;
	  }

	  IndexedDropSequence.prototype = new ArrayLikeSequence();

	  IndexedDropSequence.prototype.get = function get(i) {
	    return this.parent.get(this.count + i);
	  };

	  IndexedDropSequence.prototype.length = function length() {
	    var parentLength = this.parent.length();
	    return this.count <= parentLength ? parentLength - this.count : 0;
	  };

	  /**
	   * An optimized version of {@link Sequence#concat} that returns another
	   * {@link ArrayLikeSequence} *if* the argument is an array.
	   *
	   * @public
	   * @param {...*} var_args
	   *
	   * @examples
	   * Lazy([1, 2]).concat([3, 4]) // instanceof Lazy.ArrayLikeSequence
	   * Lazy([1, 2]).concat([3, 4]) // sequence: [1, 2, 3, 4]
	   */
	  ArrayLikeSequence.prototype.concat = function concat(var_args) {
	    if (arguments.length === 1 && arguments[0] instanceof Array) {
	      return new IndexedConcatenatedSequence(this, (/** @type {Array} */ var_args));
	    } else {
	      return Sequence.prototype.concat.apply(this, arguments);
	    }
	  };

	  /**
	   * @constructor
	   */
	  function IndexedConcatenatedSequence(parent, other) {
	    this.parent = parent;
	    this.other  = other;
	  }

	  IndexedConcatenatedSequence.prototype = new ArrayLikeSequence();

	  IndexedConcatenatedSequence.prototype.get = function get(i) {
	    var parentLength = this.parent.length();
	    if (i < parentLength) {
	      return this.parent.get(i);
	    } else {
	      return this.other[i - parentLength];
	    }
	  };

	  IndexedConcatenatedSequence.prototype.length = function length() {
	    return this.parent.length() + this.other.length;
	  };

	  /**
	   * An optimized version of {@link Sequence#uniq}.
	   */
	  ArrayLikeSequence.prototype.uniq = function uniq(keyFn) {
	    return new IndexedUniqueSequence(this, createCallback(keyFn));
	  };

	  /**
	   * @param {ArrayLikeSequence} parent
	   * @constructor
	   */
	  function IndexedUniqueSequence(parent, keyFn) {
	    this.parent = parent;
	    this.each   = getEachForParent(parent);
	    this.keyFn  = keyFn;
	  }

	  IndexedUniqueSequence.prototype = new Sequence();

	  IndexedUniqueSequence.prototype.eachArrayCache = function eachArrayCache(fn) {
	    // Basically the same implementation as w/ the set, but using an array because
	    // it's cheaper for smaller sequences.
	    var parent = this.parent,
	        keyFn  = this.keyFn,
	        length = parent.length(),
	        cache  = [],
	        find   = arrayContains,
	        key, value,
	        i = -1,
	        j = 0;

	    while (++i < length) {
	      value = parent.get(i);
	      key = keyFn(value);
	      if (!find(cache, key)) {
	        cache.push(key);
	        if (fn(value, j++) === false) {
	          return false;
	        }
	      }
	    }
	  };

	  IndexedUniqueSequence.prototype.eachSetCache = UniqueSequence.prototype.each;

	  function getEachForParent(parent) {
	    if (parent.length() < 100) {
	      return IndexedUniqueSequence.prototype.eachArrayCache;
	    } else {
	      return UniqueSequence.prototype.each;
	    }
	  }

	  // Now that we've fully initialized the ArrayLikeSequence prototype, we can
	  // set the prototype for MemoizedSequence.

	  MemoizedSequence.prototype = new ArrayLikeSequence();

	  MemoizedSequence.prototype.cache = function cache() {
	    return this.cachedResult || (this.cachedResult = this.parent.toArray());
	  };

	  MemoizedSequence.prototype.get = function get(i) {
	    return this.cache()[i];
	  };

	  MemoizedSequence.prototype.length = function length() {
	    return this.cache().length;
	  };

	  MemoizedSequence.prototype.slice = function slice(begin, end) {
	    return this.cache().slice(begin, end);
	  };

	  MemoizedSequence.prototype.toArray = function toArray() {
	    return this.cache().slice(0);
	  };

	  /**
	   * ArrayWrapper is the most basic {@link Sequence}. It directly wraps an array
	   * and implements the same methods as {@link ArrayLikeSequence}, but more
	   * efficiently.
	   *
	   * @constructor
	   */
	  function ArrayWrapper(source) {
	    this.source = source;
	  }

	  ArrayWrapper.prototype = new ArrayLikeSequence();

	  ArrayWrapper.prototype.root = function root() {
	    return this;
	  };

	  ArrayWrapper.prototype.isAsync = function isAsync() {
	    return false;
	  };

	  /**
	   * Returns the element at the specified index in the source array.
	   *
	   * @param {number} i The index to access.
	   * @returns {*} The element.
	   */
	  ArrayWrapper.prototype.get = function get(i) {
	    return this.source[i];
	  };

	  /**
	   * Returns the length of the source array.
	   *
	   * @returns {number} The length.
	   */
	  ArrayWrapper.prototype.length = function length() {
	    return this.source.length;
	  };

	  /**
	   * An optimized version of {@link Sequence#each}.
	   */
	  ArrayWrapper.prototype.each = function each(fn) {
	    return forEach(this.source, fn);
	  };

	  /**
	   * An optimized version of {@link Sequence#map}.
	   */
	  ArrayWrapper.prototype.map = function map(mapFn) {
	    return new MappedArrayWrapper(this, createCallback(mapFn));
	  };

	  /**
	   * An optimized version of {@link Sequence#filter}.
	   */
	  ArrayWrapper.prototype.filter = function filter(filterFn) {
	    return new FilteredArrayWrapper(this, createCallback(filterFn));
	  };

	  /**
	   * An optimized version of {@link Sequence#uniq}.
	   */
	  ArrayWrapper.prototype.uniq = function uniq(keyFn) {
	    return new UniqueArrayWrapper(this, keyFn);
	  };

	  /**
	   * An optimized version of {@link ArrayLikeSequence#concat}.
	   *
	   * @param {...*} var_args
	   */
	  ArrayWrapper.prototype.concat = function concat(var_args) {
	    if (arguments.length === 1 && arguments[0] instanceof Array) {
	      return new ConcatArrayWrapper(this, (/** @type {Array} */ var_args));
	    } else {
	      return ArrayLikeSequence.prototype.concat.apply(this, arguments);
	    }
	  };

	  /**
	   * An optimized version of {@link Sequence#toArray}.
	   */
	  ArrayWrapper.prototype.toArray = function toArray() {
	    return this.source.slice(0);
	  };

	  /**
	   * @constructor
	   */
	  function MappedArrayWrapper(parent, mapFn) {
	    this.parent = parent;
	    this.mapFn  = mapFn;
	  }

	  MappedArrayWrapper.prototype = new ArrayLikeSequence();

	  MappedArrayWrapper.prototype.get = function get(i) {
	    var source = this.parent.source;

	    if (i < 0 || i >= source.length) {
	      return undefined;
	    }

	    return this.mapFn(source[i]);
	  };

	  MappedArrayWrapper.prototype.length = function length() {
	    return this.parent.source.length;
	  };

	  MappedArrayWrapper.prototype.each = function each(fn) {
	    var source = this.parent.source,
	        length = source.length,
	        mapFn  = this.mapFn,
	        i = -1;

	    while (++i < length) {
	      if (fn(mapFn(source[i], i), i) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  /**
	   * @constructor
	   */
	  function FilteredArrayWrapper(parent, filterFn) {
	    this.parent   = parent;
	    this.filterFn = filterFn;
	  }

	  FilteredArrayWrapper.prototype = new FilteredSequence();

	  FilteredArrayWrapper.prototype.each = function each(fn) {
	    var source = this.parent.source,
	        filterFn = this.filterFn,
	        length = source.length,
	        i = -1,
	        j = 0,
	        e;

	    while (++i < length) {
	      e = source[i];
	      if (filterFn(e, i) && fn(e, j++) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  /**
	   * @constructor
	   */
	  function UniqueArrayWrapper(parent, keyFn) {
	    this.parent = parent;
	    this.each   = getEachForSource(parent.source);
	    this.keyFn  = keyFn;
	  }

	  UniqueArrayWrapper.prototype = new Sequence();

	  UniqueArrayWrapper.prototype.eachNoCache = function eachNoCache(fn) {
	    var source = this.parent.source,
	        keyFn  = this.keyFn,
	        length = source.length,
	        find   = arrayContainsBefore,
	        value,

	        // Yes, this is hideous.
	        // Trying to get performance first, will refactor next!
	        i = -1,
	        k = 0;

	    while (++i < length) {
	      value = source[i];
	      if (!find(source, value, i, keyFn) && fn(value, k++) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  UniqueArrayWrapper.prototype.eachArrayCache = function eachArrayCache(fn) {
	    // Basically the same implementation as w/ the set, but using an array because
	    // it's cheaper for smaller sequences.
	    var source = this.parent.source,
	        keyFn  = this.keyFn,
	        length = source.length,
	        cache  = [],
	        find   = arrayContains,
	        key, value,
	        i = -1,
	        j = 0;

	    if (keyFn) {
	      keyFn = createCallback(keyFn);
	      while (++i < length) {
	        value = source[i];
	        key = keyFn(value);
	        if (!find(cache, key)) {
	          cache.push(key);
	          if (fn(value, j++) === false) {
	            return false;
	          }
	        }
	      }

	    } else {
	      while (++i < length) {
	        value = source[i];
	        if (!find(cache, value)) {
	          cache.push(value);
	          if (fn(value, j++) === false) {
	            return false;
	          }
	        }
	      }
	    }

	    return true;
	  };

	  UniqueArrayWrapper.prototype.eachSetCache = UniqueSequence.prototype.each;

	  /**
	   * My latest findings here...
	   *
	   * So I hadn't really given the set-based approach enough credit. The main issue
	   * was that my Set implementation was totally not optimized at all. After pretty
	   * heavily optimizing it (just take a look; it's a monstrosity now!), it now
	   * becomes the fastest option for much smaller values of N.
	   */
	  function getEachForSource(source) {
	    if (source.length < 40) {
	      return UniqueArrayWrapper.prototype.eachNoCache;
	    } else if (source.length < 100) {
	      return UniqueArrayWrapper.prototype.eachArrayCache;
	    } else {
	      return UniqueArrayWrapper.prototype.eachSetCache;
	    }
	  }

	  /**
	   * @constructor
	   */
	  function ConcatArrayWrapper(parent, other) {
	    this.parent = parent;
	    this.other  = other;
	  }

	  ConcatArrayWrapper.prototype = new ArrayLikeSequence();

	  ConcatArrayWrapper.prototype.get = function get(i) {
	    var source = this.parent.source,
	        sourceLength = source.length;

	    if (i < sourceLength) {
	      return source[i];
	    } else {
	      return this.other[i - sourceLength];
	    }
	  };

	  ConcatArrayWrapper.prototype.length = function length() {
	    return this.parent.source.length + this.other.length;
	  };

	  ConcatArrayWrapper.prototype.each = function each(fn) {
	    var source = this.parent.source,
	        sourceLength = source.length,
	        other = this.other,
	        otherLength = other.length,
	        i = 0,
	        j = -1;

	    while (++j < sourceLength) {
	      if (fn(source[j], i++) === false) {
	        return false;
	      }
	    }

	    j = -1;
	    while (++j < otherLength) {
	      if (fn(other[j], i++) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  /**
	   * An `ObjectLikeSequence` object represents a sequence of key/value pairs.
	   *
	   * The initial sequence you get by wrapping an object with `Lazy(object)` is
	   * an `ObjectLikeSequence`.
	   *
	   * All methods of `ObjectLikeSequence` that conceptually should return
	   * something like an object return another `ObjectLikeSequence`.
	   *
	   * @public
	   * @constructor
	   *
	   * @examples
	   * var obj = { foo: 'bar' };
	   *
	   * Lazy(obj).assign({ bar: 'baz' })   // instanceof Lazy.ObjectLikeSequence
	   * Lazy(obj).defaults({ bar: 'baz' }) // instanceof Lazy.ObjectLikeSequence
	   * Lazy(obj).invert()                 // instanceof Lazy.ObjectLikeSequence
	   */
	  function ObjectLikeSequence() {}

	  ObjectLikeSequence.prototype = new Sequence();

	  /**
	   * Create a new constructor function for a type inheriting from
	   * `ObjectLikeSequence`.
	   *
	   * @public
	   * @param {string|Array.<string>} methodName The name(s) of the method(s) to be
	   *     used for constructing the new sequence. The method will be attached to
	   *     the `ObjectLikeSequence` prototype so that it can be chained with any other
	   *     methods that return object-like sequences.
	   * @param {Object} overrides An object containing function overrides for this
	   *     new sequence type. **Must** include `each`. *May* include `init` and
	   *     `get` (for looking up an element by key).
	   * @returns {Function} A constructor for a new type inheriting from
	   *     `ObjectLikeSequence`.
	   *
	   * @examples
	   * function downcaseKey(value, key) {
	   *   return [key.toLowerCase(), value];
	   * }
	   *
	   * Lazy.ObjectLikeSequence.define("caseInsensitive", {
	   *   init: function() {
	   *     var downcased = this.parent
	   *       .map(downcaseKey)
	   *       .toObject();
	   *     this.downcased = Lazy(downcased);
	   *   },
	   *
	   *   get: function(key) {
	   *     return this.downcased.get(key.toLowerCase());
	   *   },
	   *
	   *   each: function(fn) {
	   *     return this.downcased.each(fn);
	   *   }
	   * });
	   *
	   * Lazy({ Foo: 'bar' }).caseInsensitive()            // sequence: { foo: 'bar' }
	   * Lazy({ FOO: 'bar' }).caseInsensitive().get('foo') // => 'bar'
	   * Lazy({ FOO: 'bar' }).caseInsensitive().get('FOO') // => 'bar'
	   */
	  ObjectLikeSequence.define = function define(methodName, overrides) {
	    if (!overrides || typeof overrides.each !== 'function') {
	      throw new Error("A custom object-like sequence must implement *at least* each!");
	    }

	    return defineSequenceType(ObjectLikeSequence, methodName, overrides);
	  };

	  ObjectLikeSequence.prototype.value = function value() {
	    return this.toObject();
	  };

	  /**
	   * Gets the element at the specified key in this sequence.
	   *
	   * @public
	   * @param {string} key The key.
	   * @returns {*} The element.
	   *
	   * @examples
	   * Lazy({ foo: "bar" }).get("foo")                          // => "bar"
	   * Lazy({ foo: "bar" }).extend({ foo: "baz" }).get("foo")   // => "baz"
	   * Lazy({ foo: "bar" }).defaults({ bar: "baz" }).get("bar") // => "baz"
	   * Lazy({ foo: "bar" }).invert().get("bar")                 // => "foo"
	   * Lazy({ foo: 1, bar: 2 }).pick(["foo"]).get("foo")        // => 1
	   * Lazy({ foo: 1, bar: 2 }).pick(["foo"]).get("bar")        // => undefined
	   * Lazy({ foo: 1, bar: 2 }).omit(["foo"]).get("bar")        // => 2
	   * Lazy({ foo: 1, bar: 2 }).omit(["foo"]).get("foo")        // => undefined
	   */
	  ObjectLikeSequence.prototype.get = function get(key) {
	    var pair = this.pairs().find(function(pair) {
	      return pair[0] === key;
	    });

	    return pair ? pair[1] : undefined;
	  };

	  /**
	   * Returns a {@link Sequence} whose elements are the keys of this object-like
	   * sequence.
	   *
	   * @public
	   * @returns {Sequence} The sequence based on this sequence's keys.
	   *
	   * @examples
	   * Lazy({ hello: "hola", goodbye: "hasta luego" }).keys() // sequence: ["hello", "goodbye"]
	   */
	  ObjectLikeSequence.prototype.keys = function keys() {
	    return this.map(function(v, k) { return k; });
	  };

	  /**
	   * Returns a {@link Sequence} whose elements are the values of this object-like
	   * sequence.
	   *
	   * @public
	   * @returns {Sequence} The sequence based on this sequence's values.
	   *
	   * @examples
	   * Lazy({ hello: "hola", goodbye: "hasta luego" }).values() // sequence: ["hola", "hasta luego"]
	   */
	  ObjectLikeSequence.prototype.values = function values() {
	    return this.map(function(v, k) { return v; });
	  };

	  /**
	   * Throws an exception. Asynchronous iteration over object-like sequences is
	   * not supported.
	   *
	   * @public
	   * @examples
	   * Lazy({ foo: 'bar' }).async() // throws
	   */
	  ObjectLikeSequence.prototype.async = function async() {
	    throw new Error('An ObjectLikeSequence does not support asynchronous iteration.');
	  };

	  ObjectLikeSequence.prototype.filter = function filter(filterFn) {
	    return new FilteredObjectLikeSequence(this, createCallback(filterFn));
	  };

	  function FilteredObjectLikeSequence(parent, filterFn) {
	    this.parent = parent;
	    this.filterFn = filterFn;
	  }

	  FilteredObjectLikeSequence.prototype = new ObjectLikeSequence();

	  FilteredObjectLikeSequence.prototype.each = function each(fn) {
	    var filterFn = this.filterFn;

	    return this.parent.each(function(v, k) {
	      if (filterFn(v, k)) {
	        return fn(v, k);
	      }
	    });
	  };

	  /**
	   * Returns this same sequence. (Reversing an object-like sequence doesn't make
	   * any sense.)
	   */
	  ObjectLikeSequence.prototype.reverse = function reverse() {
	    return this;
	  };

	  /**
	   * Returns an {@link ObjectLikeSequence} whose elements are the combination of
	   * this sequence and another object. In the case of a key appearing in both this
	   * sequence and the given object, the other object's value will override the
	   * one in this sequence.
	   *
	   * @public
	   * @aka extend
	   * @param {Object} other The other object to assign to this sequence.
	   * @returns {ObjectLikeSequence} A new sequence comprising elements from this
	   *     sequence plus the contents of `other`.
	   *
	   * @examples
	   * Lazy({ "uno": 1, "dos": 2 }).assign({ "tres": 3 }) // sequence: { uno: 1, dos: 2, tres: 3 }
	   * Lazy({ foo: "bar" }).assign({ foo: "baz" });       // sequence: { foo: "baz" }
	   */
	  ObjectLikeSequence.prototype.assign = function assign(other) {
	    return new AssignSequence(this, other);
	  };

	  ObjectLikeSequence.prototype.extend = function extend(other) {
	    return this.assign(other);
	  };

	  /**
	   * @constructor
	   */
	  function AssignSequence(parent, other) {
	    this.parent = parent;
	    this.other  = other;
	  }

	  AssignSequence.prototype = new ObjectLikeSequence();

	  AssignSequence.prototype.get = function get(key) {
	    return this.other[key] || this.parent.get(key);
	  };

	  AssignSequence.prototype.each = function each(fn) {
	    var merged = new Set(),
	        done   = false;

	    Lazy(this.other).each(function(value, key) {
	      if (fn(value, key) === false) {
	        done = true;
	        return false;
	      }

	      merged.add(key);
	    });

	    if (!done) {
	      return this.parent.each(function(value, key) {
	        if (!merged.contains(key) && fn(value, key) === false) {
	          return false;
	        }
	      });
	    }
	  };

	  /**
	   * Returns an {@link ObjectLikeSequence} whose elements are the combination of
	   * this sequence and a 'default' object. In the case of a key appearing in both
	   * this sequence and the given object, this sequence's value will override the
	   * default object's.
	   *
	   * @public
	   * @param {Object} defaults The 'default' object to use for missing keys in this
	   *     sequence.
	   * @returns {ObjectLikeSequence} A new sequence comprising elements from this
	   *     sequence supplemented by the contents of `defaults`.
	   *
	   * @examples
	   * Lazy({ name: "Dan" }).defaults({ name: "User", password: "passw0rd" }) // sequence: { name: "Dan", password: "passw0rd" }
	   */
	  ObjectLikeSequence.prototype.defaults = function defaults(defaults) {
	    return new DefaultsSequence(this, defaults);
	  };

	  /**
	   * @constructor
	   */
	  function DefaultsSequence(parent, defaults) {
	    this.parent   = parent;
	    this.defaults = defaults;
	  }

	  DefaultsSequence.prototype = new ObjectLikeSequence();

	  DefaultsSequence.prototype.get = function get(key) {
	    return this.parent.get(key) || this.defaults[key];
	  };

	  DefaultsSequence.prototype.each = function each(fn) {
	    var merged = new Set(),
	        done   = false;

	    this.parent.each(function(value, key) {
	      if (fn(value, key) === false) {
	        done = true;
	        return false;
	      }

	      if (typeof value !== "undefined") {
	        merged.add(key);
	      }
	    });

	    if (!done) {
	      Lazy(this.defaults).each(function(value, key) {
	        if (!merged.contains(key) && fn(value, key) === false) {
	          return false;
	        }
	      });
	    }
	  };

	  /**
	   * Returns an {@link ObjectLikeSequence} whose values are this sequence's keys,
	   * and whose keys are this sequence's values.
	   *
	   * @public
	   * @returns {ObjectLikeSequence} A new sequence comprising the inverted keys and
	   *     values from this sequence.
	   *
	   * @examples
	   * Lazy({ first: "Dan", last: "Tao" }).invert() // sequence: { Dan: "first", Tao: "last" }
	   */
	  ObjectLikeSequence.prototype.invert = function invert() {
	    return new InvertedSequence(this);
	  };

	  /**
	   * @constructor
	   */
	  function InvertedSequence(parent) {
	    this.parent = parent;
	  }

	  InvertedSequence.prototype = new ObjectLikeSequence();

	  InvertedSequence.prototype.each = function each(fn) {
	    this.parent.each(function(value, key) {
	      return fn(key, value);
	    });
	  };

	  /**
	   * Produces an {@link ObjectLikeSequence} consisting of all the recursively
	   * merged values from this and the given object(s) or sequence(s).
	   *
	   * Note that by default this method only merges "vanilla" objects (bags of
	   * key/value pairs), not arrays or any other custom object types. To customize
	   * how merging works, you can provide the mergeFn argument, e.g. to handling
	   * merging arrays, strings, or other types of objects.
	   *
	   * @public
	   * @param {...Object|ObjectLikeSequence} others The other object(s) or
	   *     sequence(s) whose values will be merged into this one.
	   * @param {Function=} mergeFn An optional function used to customize merging
	   *     behavior. The function should take two values as parameters and return
	   *     whatever the "merged" form of those values is. If the function returns
	   *     undefined then the new value will simply replace the old one in the
	   *     final result.
	   * @returns {ObjectLikeSequence} The new sequence consisting of merged values.
	   *
	   * @examples
	   * // These examples are completely stolen from Lo-Dash's documentation:
	   * // lodash.com/docs#merge
	   *
	   * var names = {
	   *   'characters': [
	   *     { 'name': 'barney' },
	   *     { 'name': 'fred' }
	   *   ]
	   * };
	   *
	   * var ages = {
	   *   'characters': [
	   *     { 'age': 36 },
	   *     { 'age': 40 }
	   *   ]
	   * };
	   *
	   * var food = {
	   *   'fruits': ['apple'],
	   *   'vegetables': ['beet']
	   * };
	   *
	   * var otherFood = {
	   *   'fruits': ['banana'],
	   *   'vegetables': ['carrot']
	   * };
	   *
	   * function mergeArrays(a, b) {
	   *   return Array.isArray(a) ? a.concat(b) : undefined;
	   * }
	   *
	   * Lazy(names).merge(ages); // => sequence: { 'characters': [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }] }
	   * Lazy(food).merge(otherFood, mergeArrays); // => sequence: { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	   *
	   * // ----- Now for my own tests: -----
	   *
	   * // merges objects
	   * Lazy({ foo: 1 }).merge({ foo: 2 }); // => sequence: { foo: 2 }
	   * Lazy({ foo: 1 }).merge({ bar: 2 }); // => sequence: { foo: 1, bar: 2 }
	   *
	   * // goes deep
	   * Lazy({ foo: { bar: 1 } }).merge({ foo: { bar: 2 } }); // => sequence: { foo: { bar: 2 } }
	   * Lazy({ foo: { bar: 1 } }).merge({ foo: { baz: 2 } }); // => sequence: { foo: { bar: 1, baz: 2 } }
	   * Lazy({ foo: { bar: 1 } }).merge({ foo: { baz: 2 } }); // => sequence: { foo: { bar: 1, baz: 2 } }
	   *
	   * // gives precedence to later sources
	   * Lazy({ foo: 1 }).merge({ bar: 2 }, { bar: 3 }); // => sequence: { foo: 1, bar: 3 }
	   *
	   * // undefined gets passed over
	   * Lazy({ foo: 1 }).merge({ foo: undefined }); // => sequence: { foo: 1 }
	   *
	   * // null doesn't get passed over
	   * Lazy({ foo: 1 }).merge({ foo: null }); // => sequence: { foo: null }
	   *
	   * // array contents get merged as well
	   * Lazy({ foo: [{ bar: 1 }] }).merge({ foo: [{ baz: 2 }] }); // => sequence: { foo: [{ bar: 1, baz: 2}] }
	   */
	  ObjectLikeSequence.prototype.merge = function merge(var_args) {
	    var mergeFn = arguments.length > 1 && typeof arguments[arguments.length - 1] === "function" ?
	      arrayPop.call(arguments) : null;
	    return new MergedSequence(this, arraySlice.call(arguments, 0), mergeFn);
	  };

	  /**
	   * @constructor
	   */
	  function MergedSequence(parent, others, mergeFn) {
	    this.parent  = parent;
	    this.others  = others;
	    this.mergeFn = mergeFn;
	  }

	  MergedSequence.prototype = new ObjectLikeSequence();

	  MergedSequence.prototype.each = function each(fn) {
	    var others  = this.others,
	        mergeFn = this.mergeFn || mergeObjects,
	        keys    = {};

	    var iteratedFullSource = this.parent.each(function(value, key) {
	      var merged = value;

	      forEach(others, function(other) {
	        if (key in other) {
	          merged = mergeFn(merged, other[key]);
	        }
	      });

	      keys[key] = true;

	      return fn(merged, key);
	    });

	    if (iteratedFullSource === false) {
	      return false;
	    }

	    var remaining = {};

	    forEach(others, function(other) {
	      for (var k in other) {
	        if (!keys[k]) {
	          remaining[k] = mergeFn(remaining[k], other[k]);
	        }
	      }
	    });

	    return Lazy(remaining).each(fn);
	  };

	  /**
	   * @private
	   * @examples
	   * mergeObjects({ foo: 1 }, { bar: 2 }); // => { foo: 1, bar: 2 }
	   * mergeObjects({ foo: { bar: 1 } }, { foo: { baz: 2 } }); // => { foo: { bar: 1, baz: 2 } }
	   * mergeObjects({ foo: { bar: 1 } }, { foo: undefined }); // => { foo: { bar: 1 } }
	   * mergeObjects({ foo: { bar: 1 } }, { foo: null }); // => { foo: null }
	   * mergeObjects({ array: [0, 1, 2] }, { array: [3, 4, 5] }).array; // instanceof Array
	   * mergeObjects({ date: new Date() }, { date: new Date() }).date; // instanceof Date
	   * mergeObjects([{ foo: 1 }], [{ bar: 2 }]); // => [{ foo: 1, bar: 2 }]
	   */
	  function mergeObjects(a, b) {
	    var merged, prop;

	    if (typeof b === 'undefined') {
	      return a;
	    }

	    // Check that we're dealing with two objects or two arrays.
	    if (isVanillaObject(a) && isVanillaObject(b)) {
	      merged = {};
	    } else if (a instanceof Array && b instanceof Array) {
	      merged = [];
	    } else {
	      // Otherwise there's no merging to do -- just replace a w/ b.
	      return b;
	    }

	    for (prop in a) {
	      merged[prop] = mergeObjects(a[prop], b[prop]);
	    }
	    for (prop in b) {
	      if (!merged[prop]) {
	        merged[prop] = b[prop];
	      }
	    }
	    return merged;
	  }

	  /**
	   * Checks whether an object is a "vanilla" object, i.e. {'foo': 'bar'} as
	   * opposed to an array, date, etc.
	   *
	   * @private
	   * @examples
	   * isVanillaObject({foo: 'bar'}); // => true
	   * isVanillaObject(new Date());   // => false
	   * isVanillaObject([1, 2, 3]);    // => false
	   */
	  function isVanillaObject(object) {
	    return object && object.constructor === Object;
	  }

	  /**
	   * Creates a {@link Sequence} consisting of the keys from this sequence whose
	   *     values are functions.
	   *
	   * @public
	   * @aka methods
	   * @returns {Sequence} The new sequence.
	   *
	   * @examples
	   * var dog = {
	   *   name: "Fido",
	   *   breed: "Golden Retriever",
	   *   bark: function() { console.log("Woof!"); },
	   *   wagTail: function() { console.log("TODO: implement robotic dog interface"); }
	   * };
	   *
	   * Lazy(dog).functions() // sequence: ["bark", "wagTail"]
	   */
	  ObjectLikeSequence.prototype.functions = function functions() {
	    return this
	      .filter(function(v, k) { return typeof(v) === "function"; })
	      .map(function(v, k) { return k; });
	  };

	  ObjectLikeSequence.prototype.methods = function methods() {
	    return this.functions();
	  };

	  /**
	   * Creates an {@link ObjectLikeSequence} consisting of the key/value pairs from
	   * this sequence whose keys are included in the given array of property names.
	   *
	   * @public
	   * @param {Array} properties An array of the properties to "pick" from this
	   *     sequence.
	   * @returns {ObjectLikeSequence} The new sequence.
	   *
	   * @examples
	   * var players = {
	   *   "who": "first",
	   *   "what": "second",
	   *   "i don't know": "third"
	   * };
	   *
	   * Lazy(players).pick(["who", "what"]) // sequence: { who: "first", what: "second" }
	   */
	  ObjectLikeSequence.prototype.pick = function pick(properties) {
	    return new PickSequence(this, properties);
	  };

	  /**
	   * @constructor
	   */
	  function PickSequence(parent, properties) {
	    this.parent     = parent;
	    this.properties = properties;
	  }

	  PickSequence.prototype = new ObjectLikeSequence();

	  PickSequence.prototype.get = function get(key) {
	    return arrayContains(this.properties, key) ? this.parent.get(key) : undefined;
	  };

	  PickSequence.prototype.each = function each(fn) {
	    var inArray    = arrayContains,
	        properties = this.properties;

	    return this.parent.each(function(value, key) {
	      if (inArray(properties, key)) {
	        return fn(value, key);
	      }
	    });
	  };

	  /**
	   * Creates an {@link ObjectLikeSequence} consisting of the key/value pairs from
	   * this sequence excluding those with the specified keys.
	   *
	   * @public
	   * @param {Array} properties An array of the properties to *omit* from this
	   *     sequence.
	   * @returns {ObjectLikeSequence} The new sequence.
	   *
	   * @examples
	   * var players = {
	   *   "who": "first",
	   *   "what": "second",
	   *   "i don't know": "third"
	   * };
	   *
	   * Lazy(players).omit(["who", "what"]) // sequence: { "i don't know": "third" }
	   */
	  ObjectLikeSequence.prototype.omit = function omit(properties) {
	    return new OmitSequence(this, properties);
	  };

	  /**
	   * @constructor
	   */
	  function OmitSequence(parent, properties) {
	    this.parent     = parent;
	    this.properties = properties;
	  }

	  OmitSequence.prototype = new ObjectLikeSequence();

	  OmitSequence.prototype.get = function get(key) {
	    return arrayContains(this.properties, key) ? undefined : this.parent.get(key);
	  };

	  OmitSequence.prototype.each = function each(fn) {
	    var inArray    = arrayContains,
	        properties = this.properties;

	    return this.parent.each(function(value, key) {
	      if (!inArray(properties, key)) {
	        return fn(value, key);
	      }
	    });
	  };

	  /**
	   * Maps the key/value pairs in this sequence to arrays.
	   *
	   * @public
	   * @aka toArray
	   * @returns {Sequence} An sequence of `[key, value]` pairs.
	   *
	   * @examples
	   * var colorCodes = {
	   *   red: "#f00",
	   *   green: "#0f0",
	   *   blue: "#00f"
	   * };
	   *
	   * Lazy(colorCodes).pairs() // sequence: [["red", "#f00"], ["green", "#0f0"], ["blue", "#00f"]]
	   */
	  ObjectLikeSequence.prototype.pairs = function pairs() {
	    return this.map(function(v, k) { return [k, v]; });
	  };

	  /**
	   * Creates an array from the key/value pairs in this sequence.
	   *
	   * @public
	   * @returns {Array} An array of `[key, value]` elements.
	   *
	   * @examples
	   * var colorCodes = {
	   *   red: "#f00",
	   *   green: "#0f0",
	   *   blue: "#00f"
	   * };
	   *
	   * Lazy(colorCodes).toArray() // => [["red", "#f00"], ["green", "#0f0"], ["blue", "#00f"]]
	   */
	  ObjectLikeSequence.prototype.toArray = function toArray() {
	    return this.pairs().toArray();
	  };

	  /**
	   * Creates an object with the key/value pairs from this sequence.
	   *
	   * @public
	   * @returns {Object} An object with the same key/value pairs as this sequence.
	   *
	   * @examples
	   * var colorCodes = {
	   *   red: "#f00",
	   *   green: "#0f0",
	   *   blue: "#00f"
	   * };
	   *
	   * Lazy(colorCodes).toObject() // => { red: "#f00", green: "#0f0", blue: "#00f" }
	   */
	  ObjectLikeSequence.prototype.toObject = function toObject() {
	    return this.reduce(function(object, value, key) {
	      object[key] = value;
	      return object;
	    }, {});
	  };

	  // Now that we've fully initialized the ObjectLikeSequence prototype, we can
	  // actually set the prototypes for GroupedSequence, IndexedSequence, and
	  // CountedSequence.

	  GroupedSequence.prototype = new ObjectLikeSequence();

	  GroupedSequence.prototype.each = function each(fn) {
	    var keyFn   = createCallback(this.keyFn),
	        valFn   = createCallback(this.valFn),
	        result;

	    result = this.parent.reduce(function(grouped,e) {
	      var key = keyFn(e),
	          val = valFn(e);
	      if (!(grouped[key] instanceof Array)) {
	        grouped[key] = [val];
	      } else {
	        grouped[key].push(val);
	      }
	      return grouped;
	    },{});

	    return transform(function(grouped) {
	      for (var key in grouped) {
	        if (fn(grouped[key], key) === false) {
	          return false;
	        }
	      }
	    }, result);
	  };

	  IndexedSequence.prototype = new ObjectLikeSequence();

	  IndexedSequence.prototype.each = function each(fn) {
	    var keyFn   = createCallback(this.keyFn),
	        valFn   = createCallback(this.valFn),
	        indexed = {};

	    return this.parent.each(function(e) {
	      var key = keyFn(e),
	          val = valFn(e);

	      if (!indexed[key]) {
	        indexed[key] = val;
	        return fn(val, key);
	      }
	    });
	  };

	  CountedSequence.prototype = new ObjectLikeSequence();

	  CountedSequence.prototype.each = function each(fn) {
	    var keyFn   = createCallback(this.keyFn),
	        counted = {};

	    this.parent.each(function(e) {
	      var key = keyFn(e);
	      if (!counted[key]) {
	        counted[key] = 1;
	      } else {
	        counted[key] += 1;
	      }
	    });

	    for (var key in counted) {
	      if (fn(counted[key], key) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  /**
	   * Watches for all changes to a specified property (or properties) of an
	   * object and produces a sequence whose elements have the properties
	   * `{ property, value }` indicating which property changed and what it was
	   * changed to.
	   *
	   * Note that this method **only works on directly wrapped objects**; it will
	   * *not* work on any arbitrary {@link ObjectLikeSequence}.
	   *
	   * @public
	   * @param {(string|Array)=} propertyNames A property name or array of property
	   *     names to watch. If this parameter is `undefined`, all of the object's
	   *     current (enumerable) properties will be watched.
	   * @returns {Sequence} A sequence comprising `{ property, value }` objects
	   *     describing each change to the specified property/properties.
	   *
	   * @examples
	   * var obj = {},
	   *     changes = [];
	   *
	   * Lazy(obj).watch('foo').each(function(change) {
	   *   changes.push(change);
	   * });
	   *
	   * obj.foo = 1;
	   * obj.bar = 2;
	   * obj.foo = 3;
	   *
	   * obj.foo; // => 3
	   * changes; // => [{ property: 'foo', value: 1 }, { property: 'foo', value: 3 }]
	   */
	  ObjectLikeSequence.prototype.watch = function watch(propertyNames) {
	    throw new Error('You can only call #watch on a directly wrapped object.');
	  };

	  /**
	   * @constructor
	   */
	  function ObjectWrapper(source) {
	    this.source = source;
	  }

	  ObjectWrapper.prototype = new ObjectLikeSequence();

	  ObjectWrapper.prototype.root = function root() {
	    return this;
	  };

	  ObjectWrapper.prototype.isAsync = function isAsync() {
	    return false;
	  };

	  ObjectWrapper.prototype.get = function get(key) {
	    return this.source[key];
	  };

	  ObjectWrapper.prototype.each = function each(fn) {
	    var source = this.source,
	        key;

	    for (key in source) {
	      if (fn(source[key], key) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  /**
	   * A `StringLikeSequence` represents a sequence of characters.
	   *
	   * The initial sequence you get by wrapping a string with `Lazy(string)` is a
	   * `StringLikeSequence`.
	   *
	   * All methods of `StringLikeSequence` that conceptually should return
	   * something like a string return another `StringLikeSequence`.
	   *
	   * @public
	   * @constructor
	   *
	   * @examples
	   * function upcase(str) { return str.toUpperCase(); }
	   *
	   * Lazy('foo')               // instanceof Lazy.StringLikeSequence
	   * Lazy('foo').toUpperCase() // instanceof Lazy.StringLikeSequence
	   * Lazy('foo').reverse()     // instanceof Lazy.StringLikeSequence
	   * Lazy('foo').take(2)       // instanceof Lazy.StringLikeSequence
	   * Lazy('foo').drop(1)       // instanceof Lazy.StringLikeSequence
	   * Lazy('foo').substring(1)  // instanceof Lazy.StringLikeSequence
	   *
	   * // Note that `map` does not create a `StringLikeSequence` because there's
	   * // no guarantee the mapping function will return characters. In the event
	   * // you do want to map a string onto a string-like sequence, use
	   * // `mapString`:
	   * Lazy('foo').map(Lazy.identity)       // instanceof Lazy.ArrayLikeSequence
	   * Lazy('foo').mapString(Lazy.identity) // instanceof Lazy.StringLikeSequence
	   */
	  function StringLikeSequence() {}

	  StringLikeSequence.prototype = new ArrayLikeSequence();

	  /**
	   * Create a new constructor function for a type inheriting from
	   * `StringLikeSequence`.
	   *
	   * @public
	   * @param {string|Array.<string>} methodName The name(s) of the method(s) to be
	   *     used for constructing the new sequence. The method will be attached to
	   *     the `StringLikeSequence` prototype so that it can be chained with any other
	   *     methods that return string-like sequences.
	   * @param {Object} overrides An object containing function overrides for this
	   *     new sequence type. Has the same requirements as
	   *     {@link ArrayLikeSequence.define}.
	   * @returns {Function} A constructor for a new type inheriting from
	   *     `StringLikeSequence`.
	   *
	   * @examples
	   * Lazy.StringLikeSequence.define("zomg", {
	   *   length: function() {
	   *     return this.parent.length() + "!!ZOMG!!!1".length;
	   *   },
	   *
	   *   get: function(i) {
	   *     if (i < this.parent.length()) {
	   *       return this.parent.get(i);
	   *     }
	   *     return "!!ZOMG!!!1".charAt(i - this.parent.length());
	   *   }
	   * });
	   *
	   * Lazy('foo').zomg() // sequence: "foo!!ZOMG!!!1"
	   */
	  StringLikeSequence.define = function define(methodName, overrides) {
	    if (!overrides || typeof overrides.get !== 'function') {
	      throw new Error("A custom string-like sequence must implement *at least* get!");
	    }

	    return defineSequenceType(StringLikeSequence, methodName, overrides);
	  };

	  StringLikeSequence.prototype.value = function value() {
	    return this.toString();
	  };

	  /**
	   * Returns an {@link IndexedIterator} that will step over each character in this
	   * sequence one by one.
	   *
	   * @returns {IndexedIterator} The iterator.
	   */
	  StringLikeSequence.prototype.getIterator = function getIterator() {
	    return new CharIterator(this);
	  };

	  /**
	   * @constructor
	   */
	  function CharIterator(source) {
	    this.source = Lazy(source);
	    this.index = -1;
	  }

	  CharIterator.prototype.current = function current() {
	    return this.source.charAt(this.index);
	  };

	  CharIterator.prototype.moveNext = function moveNext() {
	    return (++this.index < this.source.length());
	  };

	  /**
	   * Returns the character at the given index of this sequence, or the empty
	   * string if the specified index lies outside the bounds of the sequence.
	   *
	   * @public
	   * @param {number} i The index of this sequence.
	   * @returns {string} The character at the specified index.
	   *
	   * @examples
	   * Lazy("foo").charAt(0)  // => "f"
	   * Lazy("foo").charAt(-1) // => ""
	   * Lazy("foo").charAt(10) // => ""
	   */
	  StringLikeSequence.prototype.charAt = function charAt(i) {
	    return this.get(i);
	  };

	  /**
	   * Returns the character code at the given index of this sequence, or `NaN` if
	   * the index lies outside the bounds of the sequence.
	   *
	   * @public
	   * @param {number} i The index of the character whose character code you want.
	   * @returns {number} The character code.
	   *
	   * @examples
	   * Lazy("abc").charCodeAt(0)  // => 97
	   * Lazy("abc").charCodeAt(-1) // => NaN
	   * Lazy("abc").charCodeAt(10) // => NaN
	   */
	  StringLikeSequence.prototype.charCodeAt = function charCodeAt(i) {
	    var char = this.charAt(i);
	    if (!char) { return NaN; }

	    return char.charCodeAt(0);
	  };

	  /**
	   * Returns a {@link StringLikeSequence} comprising the characters from *this*
	   * sequence starting at `start` and ending at `stop` (exclusive), or---if
	   * `stop` is `undefined`, including the rest of the sequence.
	   *
	   * @public
	   * @param {number} start The index where this sequence should begin.
	   * @param {number=} stop The index (exclusive) where this sequence should end.
	   * @returns {StringLikeSequence} The new sequence.
	   *
	   * @examples
	   * Lazy("foo").substring(1)      // sequence: "oo"
	   * Lazy("foo").substring(-1)     // sequence: "foo"
	   * Lazy("hello").substring(1, 3) // sequence: "el"
	   * Lazy("hello").substring(1, 9) // sequence: "ello"
	   */
	  StringLikeSequence.prototype.substring = function substring(start, stop) {
	    return new StringSegment(this, start, stop);
	  };

	  /**
	   * @constructor
	   */
	  function StringSegment(parent, start, stop) {
	    this.parent = parent;
	    this.start  = Math.max(0, start);
	    this.stop   = stop;
	  }

	  StringSegment.prototype = new StringLikeSequence();

	  StringSegment.prototype.get = function get(i) {
	    return this.parent.get(i + this.start);
	  };

	  StringSegment.prototype.length = function length() {
	    return (typeof this.stop === "number" ? this.stop : this.parent.length()) - this.start;
	  };

	  /**
	   * An optimized version of {@link Sequence#first} that returns another
	   * {@link StringLikeSequence} (or just the first character, if `count` is
	   * undefined).
	   *
	   * @public
	   * @examples
	   * Lazy('foo').first()                // => 'f'
	   * Lazy('fo').first(2)                // sequence: 'fo'
	   * Lazy('foo').first(10)              // sequence: 'foo'
	   * Lazy('foo').toUpperCase().first()  // => 'F'
	   * Lazy('foo').toUpperCase().first(2) // sequence: 'FO'
	   */
	  StringLikeSequence.prototype.first = function first(count) {
	    if (typeof count === "undefined") {
	      return this.charAt(0);
	    }

	    return this.substring(0, count);
	  };

	  /**
	   * An optimized version of {@link Sequence#last} that returns another
	   * {@link StringLikeSequence} (or just the last character, if `count` is
	   * undefined).
	   *
	   * @public
	   * @examples
	   * Lazy('foo').last()                // => 'o'
	   * Lazy('foo').last(2)               // sequence: 'oo'
	   * Lazy('foo').last(10)              // sequence: 'foo'
	   * Lazy('foo').toUpperCase().last()  // => 'O'
	   * Lazy('foo').toUpperCase().last(2) // sequence: 'OO'
	   */
	  StringLikeSequence.prototype.last = function last(count) {
	    if (typeof count === "undefined") {
	      return this.charAt(this.length() - 1);
	    }

	    return this.substring(this.length() - count);
	  };

	  StringLikeSequence.prototype.drop = function drop(count) {
	    return this.substring(count);
	  };

	  /**
	   * Finds the index of the first occurrence of the given substring within this
	   * sequence, starting from the specified index (or the beginning of the
	   * sequence).
	   *
	   * @public
	   * @param {string} substring The substring to search for.
	   * @param {number=} startIndex The index from which to start the search.
	   * @returns {number} The first index where the given substring is found, or
	   *     -1 if it isn't in the sequence.
	   *
	   * @examples
	   * Lazy('canal').indexOf('a')    // => 1
	   * Lazy('canal').indexOf('a', 2) // => 3
	   * Lazy('canal').indexOf('ana')  // => 1
	   * Lazy('canal').indexOf('andy') // => -1
	   * Lazy('canal').indexOf('x')    // => -1
	   */
	  StringLikeSequence.prototype.indexOf = function indexOf(substring, startIndex) {
	    return this.toString().indexOf(substring, startIndex);
	  };

	  /**
	   * Finds the index of the last occurrence of the given substring within this
	   * sequence, starting from the specified index (or the end of the sequence)
	   * and working backwards.
	   *
	   * @public
	   * @param {string} substring The substring to search for.
	   * @param {number=} startIndex The index from which to start the search.
	   * @returns {number} The last index where the given substring is found, or
	   *     -1 if it isn't in the sequence.
	   *
	   * @examples
	   * Lazy('canal').lastIndexOf('a')    // => 3
	   * Lazy('canal').lastIndexOf('a', 2) // => 1
	   * Lazy('canal').lastIndexOf('ana')  // => 1
	   * Lazy('canal').lastIndexOf('andy') // => -1
	   * Lazy('canal').lastIndexOf('x')    // => -1
	   */
	  StringLikeSequence.prototype.lastIndexOf = function lastIndexOf(substring, startIndex) {
	    return this.toString().lastIndexOf(substring, startIndex);
	  };

	  /**
	   * Checks if this sequence contains a given substring.
	   *
	   * @public
	   * @param {string} substring The substring to check for.
	   * @returns {boolean} Whether or not this sequence contains `substring`.
	   *
	   * @examples
	   * Lazy('hello').contains('ell') // => true
	   * Lazy('hello').contains('')    // => true
	   * Lazy('hello').contains('abc') // => false
	   */
	  StringLikeSequence.prototype.contains = function contains(substring) {
	    return this.indexOf(substring) !== -1;
	  };

	  /**
	   * Checks if this sequence ends with a given suffix.
	   *
	   * @public
	   * @param {string} suffix The suffix to check for.
	   * @returns {boolean} Whether or not this sequence ends with `suffix`.
	   *
	   * @examples
	   * Lazy('foo').endsWith('oo')  // => true
	   * Lazy('foo').endsWith('')    // => true
	   * Lazy('foo').endsWith('abc') // => false
	   */
	  StringLikeSequence.prototype.endsWith = function endsWith(suffix) {
	    return this.substring(this.length() - suffix.length).toString() === suffix;
	  };

	  /**
	   * Checks if this sequence starts with a given prefix.
	   *
	   * @public
	   * @param {string} prefix The prefix to check for.
	   * @returns {boolean} Whether or not this sequence starts with `prefix`.
	   *
	   * @examples
	   * Lazy('foo').startsWith('fo')  // => true
	   * Lazy('foo').startsWith('')    // => true
	   * Lazy('foo').startsWith('abc') // => false
	   */
	  StringLikeSequence.prototype.startsWith = function startsWith(prefix) {
	    return this.substring(0, prefix.length).toString() === prefix;
	  };

	  /**
	   * Converts all of the characters in this string to uppercase.
	   *
	   * @public
	   * @returns {StringLikeSequence} A new sequence with the same characters as
	   *     this sequence, all uppercase.
	   *
	   * @examples
	   * function nextLetter(a) {
	   *   return String.fromCharCode(a.charCodeAt(0) + 1);
	   * }
	   *
	   * Lazy('foo').toUpperCase()                       // sequence: 'FOO'
	   * Lazy('foo').substring(1).toUpperCase()          // sequence: 'OO'
	   * Lazy('abc').mapString(nextLetter).toUpperCase() // sequence: 'BCD'
	   */
	  StringLikeSequence.prototype.toUpperCase = function toUpperCase() {
	    return this.mapString(function(char) { return char.toUpperCase(); });
	  };

	  /**
	   * Converts all of the characters in this string to lowercase.
	   *
	   * @public
	   * @returns {StringLikeSequence} A new sequence with the same characters as
	   *     this sequence, all lowercase.
	   *
	   * @examples
	   * function nextLetter(a) {
	   *   return String.fromCharCode(a.charCodeAt(0) + 1);
	   * }
	   *
	   * Lazy('FOO').toLowerCase()                       // sequence: 'foo'
	   * Lazy('FOO').substring(1).toLowerCase()          // sequence: 'oo'
	   * Lazy('ABC').mapString(nextLetter).toLowerCase() // sequence: 'bcd'
	   */
	  StringLikeSequence.prototype.toLowerCase = function toLowerCase() {
	    return this.mapString(function(char) { return char.toLowerCase(); });
	  };

	  /**
	   * Maps the characters of this sequence onto a new {@link StringLikeSequence}.
	   *
	   * @public
	   * @param {Function} mapFn The function used to map characters from this
	   *     sequence onto the new sequence.
	   * @returns {StringLikeSequence} The new sequence.
	   *
	   * @examples
	   * function upcase(char) { return char.toUpperCase(); }
	   *
	   * Lazy("foo").mapString(upcase)               // sequence: "FOO"
	   * Lazy("foo").mapString(upcase).charAt(0)     // => "F"
	   * Lazy("foo").mapString(upcase).charCodeAt(0) // => 70
	   * Lazy("foo").mapString(upcase).substring(1)  // sequence: "OO"
	   */
	  StringLikeSequence.prototype.mapString = function mapString(mapFn) {
	    return new MappedStringLikeSequence(this, mapFn);
	  };

	  /**
	   * @constructor
	   */
	  function MappedStringLikeSequence(parent, mapFn) {
	    this.parent = parent;
	    this.mapFn  = mapFn;
	  }

	  MappedStringLikeSequence.prototype = new StringLikeSequence();
	  MappedStringLikeSequence.prototype.get = IndexedMappedSequence.prototype.get;
	  MappedStringLikeSequence.prototype.length = IndexedMappedSequence.prototype.length;

	  /**
	   * Returns a copy of this sequence that reads back to front.
	   *
	   * @public
	   *
	   * @examples
	   * Lazy("abcdefg").reverse() // sequence: "gfedcba"
	   */
	  StringLikeSequence.prototype.reverse = function reverse() {
	    return new ReversedStringLikeSequence(this);
	  };

	  /**
	   * @constructor
	   */
	  function ReversedStringLikeSequence(parent) {
	    this.parent = parent;
	  }

	  ReversedStringLikeSequence.prototype = new StringLikeSequence();
	  ReversedStringLikeSequence.prototype.get = IndexedReversedSequence.prototype.get;
	  ReversedStringLikeSequence.prototype.length = IndexedReversedSequence.prototype.length;

	  StringLikeSequence.prototype.toString = function toString() {
	    return this.join("");
	  };

	  /**
	   * Creates a {@link Sequence} comprising all of the matches for the specified
	   * pattern in the underlying string.
	   *
	   * @public
	   * @param {RegExp} pattern The pattern to match.
	   * @returns {Sequence} A sequence of all the matches.
	   *
	   * @examples
	   * Lazy("abracadabra").match(/a[bcd]/) // sequence: ["ab", "ac", "ad", "ab"]
	   * Lazy("fee fi fo fum").match(/\w+/)  // sequence: ["fee", "fi", "fo", "fum"]
	   * Lazy("hello").match(/xyz/)          // sequence: []
	   */
	  StringLikeSequence.prototype.match = function match(pattern) {
	    return new StringMatchSequence(this, pattern);
	  };

	  /**
	   * @constructor
	   */
	  function StringMatchSequence(parent, pattern) {
	    this.parent = parent;
	    this.pattern = pattern;
	  }

	  StringMatchSequence.prototype = new Sequence();

	  StringMatchSequence.prototype.getIterator = function getIterator() {
	    return new StringMatchIterator(this.parent.toString(), this.pattern);
	  };

	  /**
	   * @constructor
	   */
	  function StringMatchIterator(source, pattern) {
	    this.source  = source;
	    this.pattern = cloneRegex(pattern);
	  }

	  StringMatchIterator.prototype.current = function current() {
	    return this.match[0];
	  };

	  StringMatchIterator.prototype.moveNext = function moveNext() {
	    return !!(this.match = this.pattern.exec(this.source));
	  };

	  /**
	   * Creates a {@link Sequence} comprising all of the substrings of this string
	   * separated by the given delimiter, which can be either a string or a regular
	   * expression.
	   *
	   * @public
	   * @param {string|RegExp} delimiter The delimiter to use for recognizing
	   *     substrings.
	   * @returns {Sequence} A sequence of all the substrings separated by the given
	   *     delimiter.
	   *
	   * @examples
	   * Lazy("foo").split("")                      // sequence: ["f", "o", "o"]
	   * Lazy("yo dawg").split(" ")                 // sequence: ["yo", "dawg"]
	   * Lazy("bah bah\tblack  sheep").split(/\s+/) // sequence: ["bah", "bah", "black", "sheep"]
	   */
	  StringLikeSequence.prototype.split = function split(delimiter) {
	    return new SplitStringSequence(this, delimiter);
	  };

	  /**
	   * @constructor
	   */
	  function SplitStringSequence(parent, pattern) {
	    this.parent = parent;
	    this.pattern = pattern;
	  }

	  SplitStringSequence.prototype = new Sequence();

	  SplitStringSequence.prototype.getIterator = function getIterator() {
	    var source = this.parent.toString();

	    if (this.pattern instanceof RegExp) {
	      if (this.pattern.source === "" || this.pattern.source === "(?:)") {
	        return new CharIterator(source);
	      } else {
	        return new SplitWithRegExpIterator(source, this.pattern);
	      }
	    } else if (this.pattern === "") {
	      return new CharIterator(source);
	    } else {
	      return new SplitWithStringIterator(source, this.pattern);
	    }
	  };

	  /**
	   * @constructor
	   */
	  function SplitWithRegExpIterator(source, pattern) {
	    this.source  = source;
	    this.pattern = cloneRegex(pattern);
	  }

	  SplitWithRegExpIterator.prototype.current = function current() {
	    return this.source.substring(this.start, this.end);
	  };

	  SplitWithRegExpIterator.prototype.moveNext = function moveNext() {
	    if (!this.pattern) {
	      return false;
	    }

	    var match = this.pattern.exec(this.source);

	    if (match) {
	      this.start = this.nextStart ? this.nextStart : 0;
	      this.end = match.index;
	      this.nextStart = match.index + match[0].length;
	      return true;

	    } else if (this.pattern) {
	      this.start = this.nextStart;
	      this.end = undefined;
	      this.nextStart = undefined;
	      this.pattern = undefined;
	      return true;
	    }

	    return false;
	  };

	  /**
	   * @constructor
	   */
	  function SplitWithStringIterator(source, delimiter) {
	    this.source = source;
	    this.delimiter = delimiter;
	  }

	  SplitWithStringIterator.prototype.current = function current() {
	    return this.source.substring(this.leftIndex, this.rightIndex);
	  };

	  SplitWithStringIterator.prototype.moveNext = function moveNext() {
	    if (!this.finished) {
	      this.leftIndex = typeof this.leftIndex !== "undefined" ?
	        this.rightIndex + this.delimiter.length :
	        0;
	      this.rightIndex = this.source.indexOf(this.delimiter, this.leftIndex);
	    }

	    if (this.rightIndex === -1) {
	      this.finished = true;
	      this.rightIndex = undefined;
	      return true;
	    }

	    return !this.finished;
	  };

	  /**
	   * Wraps a string exposing {@link #match} and {@link #split} methods that return
	   * {@link Sequence} objects instead of arrays, improving on the efficiency of
	   * JavaScript's built-in `String#split` and `String.match` methods and
	   * supporting asynchronous iteration.
	   *
	   * @param {string} source The string to wrap.
	   * @constructor
	   */
	  function StringWrapper(source) {
	    this.source = source;
	  }

	  StringWrapper.prototype = new StringLikeSequence();

	  StringWrapper.prototype.root = function root() {
	    return this;
	  };

	  StringWrapper.prototype.isAsync = function isAsync() {
	    return false;
	  };

	  StringWrapper.prototype.get = function get(i) {
	    return this.source.charAt(i);
	  };

	  StringWrapper.prototype.length = function length() {
	    return this.source.length;
	  };

	  StringWrapper.prototype.toString = function toString() {
	    return this.source;
	  };

	  /**
	   * A `GeneratedSequence` does not wrap an in-memory colllection but rather
	   * determines its elements on-the-fly during iteration according to a generator
	   * function.
	   *
	   * You create a `GeneratedSequence` by calling {@link Lazy.generate}.
	   *
	   * @public
	   * @constructor
	   * @param {function(number):*} generatorFn A function which accepts an index
	   *     and returns a value for the element at that position in the sequence.
	   * @param {number=} length The length of the sequence. If this argument is
	   *     omitted, the sequence will go on forever.
	   */
	  function GeneratedSequence(generatorFn, length) {
	    this.get = generatorFn;
	    this.fixedLength = length;
	  }

	  GeneratedSequence.prototype = new Sequence();

	  GeneratedSequence.prototype.isAsync = function isAsync() {
	    return false;
	  };

	  /**
	   * Returns the length of this sequence.
	   *
	   * @public
	   * @returns {number} The length, or `undefined` if this is an indefinite
	   *     sequence.
	   */
	  GeneratedSequence.prototype.length = function length() {
	    return this.fixedLength;
	  };

	  /**
	   * Iterates over the sequence produced by invoking this sequence's generator
	   * function up to its specified length, or, if length is `undefined`,
	   * indefinitely (in which case the sequence will go on forever--you would need
	   * to call, e.g., {@link Sequence#take} to limit iteration).
	   *
	   * @public
	   * @param {Function} fn The function to call on each output from the generator
	   *     function.
	   */
	  GeneratedSequence.prototype.each = function each(fn) {
	    var generatorFn = this.get,
	        length = this.fixedLength,
	        i = 0;

	    while (typeof length === "undefined" || i < length) {
	      if (fn(generatorFn(i), i++) === false) {
	        return false;
	      }
	    }

	    return true;
	  };

	  GeneratedSequence.prototype.getIterator = function getIterator() {
	    return new GeneratedIterator(this);
	  };

	  /**
	   * Iterates over a generated sequence. (This allows generated sequences to be
	   * iterated asynchronously.)
	   *
	   * @param {GeneratedSequence} sequence The generated sequence to iterate over.
	   * @constructor
	   */
	  function GeneratedIterator(sequence) {
	    this.sequence     = sequence;
	    this.index        = 0;
	    this.currentValue = null;
	  }

	  GeneratedIterator.prototype.current = function current() {
	    return this.currentValue;
	  };

	  GeneratedIterator.prototype.moveNext = function moveNext() {
	    var sequence = this.sequence;

	    if (typeof sequence.fixedLength === "number" && this.index >= sequence.fixedLength) {
	      return false;
	    }

	    this.currentValue = sequence.get(this.index++);
	    return true;
	  };

	  /**
	   * An `AsyncSequence` iterates over its elements asynchronously when
	   * {@link #each} is called.
	   *
	   * You get an `AsyncSequence` by calling {@link Sequence#async} on any
	   * sequence. Note that some sequence types may not support asynchronous
	   * iteration.
	   *
	   * Returning values
	   * ----------------
	   *
	   * Because of its asynchronous nature, an `AsyncSequence` cannot be used in the
	   * same way as other sequences for functions that return values directly (e.g.,
	   * `reduce`, `max`, `any`, even `toArray`).
	   *
	   * Instead, these methods return an `AsyncHandle` whose `onComplete` method
	   * accepts a callback that will be called with the final result once iteration
	   * has finished.
	   *
	   * Defining custom asynchronous sequences
	   * --------------------------------------
	   *
	   * There are plenty of ways to define an asynchronous sequence. Here's one.
	   *
	   * 1. First, implement an {@link Iterator}. This is an object whose prototype
	   *    has the methods {@link Iterator#moveNext} (which returns a `boolean`) and
	   *    {@link current} (which returns the current value).
	   * 2. Next, create a simple wrapper that inherits from `AsyncSequence`, whose
	   *    `getIterator` function returns an instance of the iterator type you just
	   *    defined.
	   *
	   * The default implementation for {@link #each} on an `AsyncSequence` is to
	   * create an iterator and then asynchronously call {@link Iterator#moveNext}
	   * (using `setImmediate`, if available, otherwise `setTimeout`) until the iterator
	   * can't move ahead any more.
	   *
	   * @public
	   * @constructor
	   * @param {Sequence} parent A {@link Sequence} to wrap, to expose asynchronous
	   *     iteration.
	   * @param {number=} interval How many milliseconds should elapse between each
	   *     element when iterating over this sequence. If this argument is omitted,
	   *     asynchronous iteration will be executed as fast as possible.
	   */
	  function AsyncSequence(parent, interval) {
	    if (parent instanceof AsyncSequence) {
	      throw new Error("Sequence is already asynchronous!");
	    }

	    this.parent         = parent;
	    this.interval       = interval;
	    this.onNextCallback = getOnNextCallback(interval);
	    this.cancelCallback = getCancelCallback(interval);
	  }

	  AsyncSequence.prototype = new Sequence();

	  AsyncSequence.prototype.isAsync = function isAsync() {
	    return true;
	  };

	  /**
	   * Throws an exception. You cannot manually iterate over an asynchronous
	   * sequence.
	   *
	   * @public
	   * @example
	   * Lazy([1, 2, 3]).async().getIterator() // throws
	   */
	  AsyncSequence.prototype.getIterator = function getIterator() {
	    throw new Error('An AsyncSequence does not support synchronous iteration.');
	  };

	  /**
	   * An asynchronous version of {@link Sequence#each}.
	   *
	   * @public
	   * @param {Function} fn The function to invoke asynchronously on each element in
	   *     the sequence one by one.
	   * @returns {AsyncHandle} An {@link AsyncHandle} providing the ability to
	   *     cancel the asynchronous iteration (by calling `cancel()`) as well as
	   *     supply callback(s) for when an error is encountered (`onError`) or when
	   *     iteration is complete (`onComplete`).
	   */
	  AsyncSequence.prototype.each = function each(fn) {
	    var iterator = this.parent.getIterator(),
	        onNextCallback = this.onNextCallback,
	        cancelCallback = this.cancelCallback,
	        i = 0;

	    var handle = new AsyncHandle(function cancel() {
	      if (cancellationId) {
	        cancelCallback(cancellationId);
	      }
	    });

	    var cancellationId = onNextCallback(function iterate() {
	      cancellationId = null;

	      try {
	        if (iterator.moveNext() && fn(iterator.current(), i++) !== false) {
	          cancellationId = onNextCallback(iterate);

	        } else {
	          handle._resolve();
	        }

	      } catch (e) {
	        handle._reject(e);
	      }
	    });

	    return handle;
	  };

	  /**
	   * An `AsyncHandle` provides a [Promises/A+](http://promises-aplus.github.io/promises-spec/)
	   * compliant interface for an {@link AsyncSequence} that is currently (or was)
	   * iterating over its elements.
	   *
	   * In addition to behaving as a promise, an `AsyncHandle` provides the ability
	   * to {@link AsyncHandle#cancel} iteration (if `cancelFn` is provided)
	   * and also offers convenient {@link AsyncHandle#onComplete} and
	   * {@link AsyncHandle#onError} methods to attach listeners for when iteration
	   * is complete or an error is thrown during iteration.
	   *
	   * @public
	   * @param {Function} cancelFn A function to cancel asynchronous iteration.
	   *     This is passed in to support different cancellation mechanisms for
	   *     different forms of asynchronous sequences (e.g., timeout-based
	   *     sequences, sequences based on I/O, etc.).
	   * @constructor
	   *
	   * @example
	   * // Create a sequence of 100,000 random numbers, in chunks of 100.
	   * var sequence = Lazy.generate(Math.random)
	   *   .chunk(100)
	   *   .async()
	   *   .take(1000);
	   *
	   * // Reduce-style operations -- i.e., operations that return a *value* (as
	   * // opposed to a *sequence*) -- return an AsyncHandle for async sequences.
	   * var handle = sequence.toArray();
	   *
	   * handle.onComplete(function(array) {
	   *   // Do something w/ 1,000-element array.
	   * });
	   *
	   * // Since an AsyncHandle is a promise, you can also use it to create
	   * // subsequent promises using `then` (see the Promises/A+ spec for more
	   * // info).
	   * var flattened = handle.then(function(array) {
	   *   return Lazy(array).flatten();
	   * });
	   */
	  function AsyncHandle(cancelFn) {
	    this.resolveListeners = [];
	    this.rejectListeners = [];
	    this.state = PENDING;
	    this.cancelFn = cancelFn;
	  }

	  // Async handle states
	  var PENDING  = 1,
	      RESOLVED = 2,
	      REJECTED = 3;

	  AsyncHandle.prototype.then = function then(onFulfilled, onRejected) {
	    var promise = new AsyncHandle(this.cancelFn);

	    this.resolveListeners.push(function(value) {
	      try {
	        if (typeof onFulfilled !== 'function') {
	          resolve(promise, value);
	          return;
	        }

	        resolve(promise, onFulfilled(value));

	      } catch (e) {
	        promise._reject(e);
	      }
	    });

	    this.rejectListeners.push(function(reason) {
	      try {
	        if (typeof onRejected !== 'function') {
	          promise._reject(reason);
	          return;
	        }

	        resolve(promise, onRejected(reason));

	      } catch (e) {
	        promise._reject(e);
	      }
	    });

	    if (this.state === RESOLVED) {
	      this._resolve(this.value);
	    }

	    if (this.state === REJECTED) {
	      this._reject(this.reason);
	    }

	    return promise;
	  };

	  AsyncHandle.prototype._resolve = function _resolve(value) {
	    if (this.state === REJECTED) {
	      return;
	    }

	    if (this.state === PENDING) {
	      this.state = RESOLVED;
	      this.value = value;
	    }

	    consumeListeners(this.resolveListeners, this.value);
	  };

	  AsyncHandle.prototype._reject = function _reject(reason) {
	    if (this.state === RESOLVED) {
	      return;
	    }

	    if (this.state === PENDING) {
	      this.state = REJECTED;
	      this.reason = reason;
	    }

	    consumeListeners(this.rejectListeners, this.reason);
	  };

	  /**
	   * Cancels asynchronous iteration.
	   *
	   * @public
	   */
	  AsyncHandle.prototype.cancel = function cancel() {
	    if (this.cancelFn) {
	      this.cancelFn();
	      this.cancelFn = null;
	      this._resolve(false);
	    }
	  };

	  /**
	   * Updates the handle with a callback to execute when iteration is completed.
	   *
	   * @public
	   * @param {Function} callback The function to call when the asynchronous
	   *     iteration is completed.
	   * @return {AsyncHandle} A reference to the handle (for chaining).
	   */
	  AsyncHandle.prototype.onComplete = function onComplete(callback) {
	    this.resolveListeners.push(callback);
	    return this;
	  };

	  /**
	   * Updates the handle with a callback to execute if/when any error is
	   * encountered during asynchronous iteration.
	   *
	   * @public
	   * @param {Function} callback The function to call, with any associated error
	   *     object, when an error occurs.
	   * @return {AsyncHandle} A reference to the handle (for chaining).
	   */
	  AsyncHandle.prototype.onError = function onError(callback) {
	    this.rejectListeners.push(callback);
	    return this;
	  };

	  /**
	   * Promise resolution procedure:
	   * http://promises-aplus.github.io/promises-spec/#the_promise_resolution_procedure
	   */
	  function resolve(promise, x) {
	    if (promise === x) {
	      promise._reject(new TypeError('Cannot resolve a promise to itself'));
	      return;
	    }

	    if (x instanceof AsyncHandle) {
	      x.then(
	        function(value) { resolve(promise, value); },
	        function(reason) { promise._reject(reason); }
	      );
	      return;
	    }

	    var then;
	    try {
	      then = (/function|object/).test(typeof x) && x != null && x.then;
	    } catch (e) {
	      promise._reject(e);
	      return;
	    }

	    var thenableState = PENDING;
	    if (typeof then === 'function') {
	      try {
	        then.call(
	          x,
	          function resolvePromise(value) {
	            if (thenableState !== PENDING) {
	              return;
	            }
	            thenableState = RESOLVED;
	            resolve(promise, value);
	          },
	          function rejectPromise(reason) {
	            if (thenableState !== PENDING) {
	              return;
	            }
	            thenableState = REJECTED;
	            promise._reject(reason);
	          }
	        );
	      } catch (e) {
	        if (thenableState !== PENDING) {
	          return;
	        }

	        promise._reject(e);
	      }

	      return;
	    }

	    promise._resolve(x);
	  }

	  function consumeListeners(listeners, value, callback) {
	    callback || (callback = getOnNextCallback());

	    callback(function() {
	      if (listeners.length > 0) {
	        listeners.shift()(value);
	        consumeListeners(listeners, value, callback);
	      }
	    });
	  }

	  function getOnNextCallback(interval) {
	    if (typeof interval === "undefined") {
	      if (typeof setImmediate === "function") {
	        return setImmediate;
	      }
	    }

	    interval = interval || 0;
	    return function(fn) {
	      return setTimeout(fn, interval);
	    };
	  }

	  function getCancelCallback(interval) {
	    if (typeof interval === "undefined") {
	      if (typeof clearImmediate === "function") {
	        return clearImmediate;
	      }
	    }

	    return clearTimeout;
	  }

	  /**
	   * Transform a value, whether the value is retrieved asynchronously or directly.
	   *
	   * @private
	   * @param {Function} fn The function that transforms the value.
	   * @param {*} value The value to be transformed. This can be an {@link AsyncHandle} when the value
	   *     is retrieved asynchronously, otherwise it can be anything.
	   * @returns {*} An {@link AsyncHandle} when `value` is also an {@link AsyncHandle}, otherwise
	   *     whatever `fn` resulted in.
	   */
	  function transform(fn, value) {
	    if (value instanceof AsyncHandle) {
	      return value.then(function() { fn(value); });
	    }
	    return fn(value);
	  }

	  /**
	   * An async version of {@link Sequence#reverse}.
	   */
	  AsyncSequence.prototype.reverse = function reverse() {
	    return this.parent.reverse().async();
	  };

	  /**
	   * A version of {@link Sequence#find} which returns an {@link AsyncHandle}.
	   *
	   * @public
	   * @param {Function} predicate A function to call on (potentially) every element
	   *     in the sequence.
	   * @returns {AsyncHandle} An {@link AsyncHandle} (promise) which resolves to
	   *     the found element, once it is detected, or else `undefined`.
	   */
	  AsyncSequence.prototype.find = function find(predicate) {
	    var found;

	    var handle = this.each(function(e, i) {
	      if (predicate(e, i)) {
	        found = e;
	        return false;
	      }
	    });

	    return handle.then(function() { return found; });
	  };

	  /**
	   * A version of {@link Sequence#indexOf} which returns an {@link AsyncHandle}.
	   *
	   * @public
	   * @param {*} value The element to search for in the sequence.
	   * @returns {AsyncHandle} An {@link AsyncHandle} (promise) which resolves to
	   *     the found index, once it is detected, or -1.
	   */
	  AsyncSequence.prototype.indexOf = function indexOf(value) {
	    var foundIndex = -1;

	    var handle = this.each(function(e, i) {
	      if (e === value) {
	        foundIndex = i;
	        return false;
	      }
	    });

	    return handle.then(function() {
	      return foundIndex;
	    });
	  };

	  /**
	   * A version of {@link Sequence#contains} which returns an {@link AsyncHandle}.
	   *
	   * @public
	   * @param {*} value The element to search for in the sequence.
	   * @returns {AsyncHandle} An {@link AsyncHandle} (promise) which resolves to
	   *     either `true` or `false` to indicate whether the element was found.
	   */
	  AsyncSequence.prototype.contains = function contains(value) {
	    var found = false;

	    var handle = this.each(function(e) {
	      if (e === value) {
	        found = true;
	        return false;
	      }
	    });

	    return handle.then(function() {
	      return found;
	    });
	  };

	  /**
	   * Just return the same sequence for `AsyncSequence#async` (I see no harm in this).
	   */
	  AsyncSequence.prototype.async = function async() {
	    return this;
	  };

	  /**
	   * See {@link ObjectLikeSequence#watch} for docs.
	   */
	  ObjectWrapper.prototype.watch = function watch(propertyNames) {
	    return new WatchedPropertySequence(this.source, propertyNames);
	  };

	  function WatchedPropertySequence(object, propertyNames) {
	    this.listeners = [];

	    if (!propertyNames) {
	      propertyNames = Lazy(object).keys().toArray();
	    } else if (!(propertyNames instanceof Array)) {
	      propertyNames = [propertyNames];
	    }

	    var listeners = this.listeners,
	        index     = 0;

	    Lazy(propertyNames).each(function(propertyName) {
	      var propertyValue = object[propertyName];

	      Object.defineProperty(object, propertyName, {
	        get: function() {
	          return propertyValue;
	        },

	        set: function(value) {
	          for (var i = listeners.length - 1; i >= 0; --i) {
	            if (listeners[i]({ property: propertyName, value: value }, index) === false) {
	              listeners.splice(i, 1);
	            }
	          }
	          propertyValue = value;
	          ++index;
	        }
	      });
	    });
	  }

	  WatchedPropertySequence.prototype = new AsyncSequence();

	  WatchedPropertySequence.prototype.each = function each(fn) {
	    this.listeners.push(fn);
	  };

	  /**
	   * A StreamLikeSequence comprises a sequence of 'chunks' of data, which are
	   * typically multiline strings.
	   *
	   * @constructor
	   */
	  function StreamLikeSequence() {}

	  StreamLikeSequence.prototype = new AsyncSequence();

	  StreamLikeSequence.prototype.isAsync = function isAsync() {
	    return true;
	  };

	  StreamLikeSequence.prototype.split = function split(delimiter) {
	    return new SplitStreamSequence(this, delimiter);
	  };

	  /**
	   * @constructor
	   */
	  function SplitStreamSequence(parent, delimiter) {
	    this.parent    = parent;
	    this.delimiter = delimiter;
	    this.each      = this.getEachForDelimiter(delimiter);
	  }

	  SplitStreamSequence.prototype = new Sequence();

	  SplitStreamSequence.prototype.getEachForDelimiter = function getEachForDelimiter(delimiter) {
	    if (delimiter instanceof RegExp) {
	      return this.regexEach;
	    }

	    return this.stringEach;
	  };

	  SplitStreamSequence.prototype.regexEach = function each(fn) {
	    var delimiter = cloneRegex(this.delimiter),
	        buffer = '',
	        start = 0, end,
	        index = 0;

	    var handle = this.parent.each(function(chunk) {
	      buffer += chunk;

	      var match;
	      while (match = delimiter.exec(buffer)) {
	        end = match.index;
	        if (fn(buffer.substring(start, end), index++) === false) {
	          return false;
	        }
	        start = end + match[0].length;
	      }

	      buffer = buffer.substring(start);
	      start = 0;
	    });

	    handle.onComplete(function() {
	      if (buffer.length > 0) {
	        fn(buffer, index++);
	      }
	    });

	    return handle;
	  };

	  SplitStreamSequence.prototype.stringEach = function each(fn) {
	    var delimiter  = this.delimiter,
	        pieceIndex = 0,
	        buffer = '',
	        bufferIndex = 0;

	    var handle = this.parent.each(function(chunk) {
	      buffer += chunk;
	      var delimiterIndex;
	      while ((delimiterIndex = buffer.indexOf(delimiter)) >= 0) {
	        var piece = buffer.substr(0,delimiterIndex);
	        buffer = buffer.substr(delimiterIndex+delimiter.length);
	        if (fn(piece,pieceIndex++) === false) {
	          return false;
	        }
	      }
	      return true;
	    });

	    handle.onComplete(function() {
	      fn(buffer, pieceIndex++);
	    });

	    return handle;
	  };

	  StreamLikeSequence.prototype.lines = function lines() {
	    return this.split("\n");
	  };

	  StreamLikeSequence.prototype.match = function match(pattern) {
	    return new MatchedStreamSequence(this, pattern);
	  };

	  /**
	   * @constructor
	   */
	  function MatchedStreamSequence(parent, pattern) {
	    this.parent  = parent;
	    this.pattern = cloneRegex(pattern);
	  }

	  MatchedStreamSequence.prototype = new AsyncSequence();

	  MatchedStreamSequence.prototype.each = function each(fn) {
	    var pattern = this.pattern,
	        done      = false,
	        i         = 0;

	    return this.parent.each(function(chunk) {
	      Lazy(chunk).match(pattern).each(function(match) {
	        if (fn(match, i++) === false) {
	          done = true;
	          return false;
	        }
	      });

	      return !done;
	    });
	  };

	  /**
	   * Defines a wrapper for custom {@link StreamLikeSequence}s. This is useful
	   * if you want a way to handle a stream of events as a sequence, but you can't
	   * use Lazy's existing interface (i.e., you're wrapping an object from a
	   * library with its own custom events).
	   *
	   * This method defines a *factory*: that is, it produces a function that can
	   * be used to wrap objects and return a {@link Sequence}. Hopefully the
	   * example will make this clear.
	   *
	   * @public
	   * @param {Function} initializer An initialization function called on objects
	   *     created by this factory. `this` will be bound to the created object,
	   *     which is an instance of {@link StreamLikeSequence}. Use `emit` to
	   *     generate data for the sequence.
	   * @returns {Function} A function that creates a new {@link StreamLikeSequence},
	   *     initializes it using the specified function, and returns it.
	   *
	   * @example
	   * var factory = Lazy.createWrapper(function(eventSource) {
	   *   var sequence = this;
	   *
	   *   eventSource.handleEvent(function(data) {
	   *     sequence.emit(data);
	   *   });
	   * });
	   *
	   * var eventEmitter = {
	   *   triggerEvent: function(data) {
	   *     eventEmitter.eventHandler(data);
	   *   },
	   *   handleEvent: function(handler) {
	   *     eventEmitter.eventHandler = handler;
	   *   },
	   *   eventHandler: function() {}
	   * };
	   *
	   * var events = [];
	   *
	   * factory(eventEmitter).each(function(e) {
	   *   events.push(e);
	   * });
	   *
	   * eventEmitter.triggerEvent('foo');
	   * eventEmitter.triggerEvent('bar');
	   *
	   * events // => ['foo', 'bar']
	   */
	  Lazy.createWrapper = function createWrapper(initializer) {
	    var ctor = function() {
	      this.listeners = [];
	    };

	    ctor.prototype = new StreamLikeSequence();

	    ctor.prototype.each = function(listener) {
	      this.listeners.push(listener);
	    };

	    ctor.prototype.emit = function(data) {
	      var listeners = this.listeners;

	      for (var len = listeners.length, i = len - 1; i >= 0; --i) {
	        if (listeners[i](data) === false) {
	          listeners.splice(i, 1);
	        }
	      }
	    };

	    return function() {
	      var sequence = new ctor();
	      initializer.apply(sequence, arguments);
	      return sequence;
	    };
	  };

	  /**
	   * Creates a {@link GeneratedSequence} using the specified generator function
	   * and (optionally) length.
	   *
	   * @public
	   * @param {function(number):*} generatorFn The function used to generate the
	   *     sequence. This function accepts an index as a parameter and should return
	   *     a value for that index in the resulting sequence.
	   * @param {number=} length The length of the sequence, for sequences with a
	   *     definite length.
	   * @returns {GeneratedSequence} The generated sequence.
	   *
	   * @examples
	   * var randomNumbers = Lazy.generate(Math.random);
	   * var countingNumbers = Lazy.generate(function(i) { return i + 1; }, 5);
	   *
	   * randomNumbers          // instanceof Lazy.GeneratedSequence
	   * randomNumbers.length() // => undefined
	   * countingNumbers          // sequence: [1, 2, 3, 4, 5]
	   * countingNumbers.length() // => 5
	   */
	  Lazy.generate = function generate(generatorFn, length) {
	    return new GeneratedSequence(generatorFn, length);
	  };

	  /**
	   * Creates a sequence from a given starting value, up to a specified stopping
	   * value, incrementing by a given step. Invalid values for any of these
	   * arguments (e.g., a step of 0) result in an empty sequence.
	   *
	   * @public
	   * @returns {GeneratedSequence} The sequence defined by the given ranges.
	   *
	   * @examples
	   * Lazy.range(3)         // sequence: [0, 1, 2]
	   * Lazy.range(1, 4)      // sequence: [1, 2, 3]
	   * Lazy.range(2, 10, 2)  // sequence: [2, 4, 6, 8]
	   * Lazy.range(5, 1, 2)   // sequence: []
	   * Lazy.range(5, 15, -2) // sequence: []
	   * Lazy.range(3, 10, 3)  // sequence: [3, 6, 9]
	   * Lazy.range(5, 2)      // sequence: [5, 4, 3]
	   * Lazy.range(7, 2, -2)  // sequence: [7, 5, 3]
	   * Lazy.range(3, 5, 0)   // sequence: []
	   */
	  Lazy.range = function range() {
	    var start = arguments.length > 1 ? arguments[0] : 0,
	        stop  = arguments.length > 1 ? arguments[1] : arguments[0],
	        step  = arguments.length > 2 && arguments[2];

	    if (step === false) {
	      step = stop > start ? 1 : -1;
	    }

	    if (step === 0) {
	      return Lazy([]);
	    }

	    return Lazy.generate(function(i) { return start + (step * i); })
	      .take(Math.ceil((stop - start) / step));
	  };

	  /**
	   * Creates a sequence consisting of the given value repeated a specified number
	   * of times.
	   *
	   * @public
	   * @param {*} value The value to repeat.
	   * @param {number=} count The number of times the value should be repeated in
	   *     the sequence. If this argument is omitted, the value will repeat forever.
	   * @returns {GeneratedSequence} The sequence containing the repeated value.
	   *
	   * @examples
	   * Lazy.repeat("hi", 3)          // sequence: ["hi", "hi", "hi"]
	   * Lazy.repeat("young")          // instanceof Lazy.GeneratedSequence
	   * Lazy.repeat("young").length() // => undefined
	   * Lazy.repeat("young").take(3)  // sequence: ["young", "young", "young"]
	   */
	  Lazy.repeat = function repeat(value, count) {
	    return Lazy.generate(function() { return value; }, count);
	  };

	  Lazy.Sequence           = Sequence;
	  Lazy.ArrayLikeSequence  = ArrayLikeSequence;
	  Lazy.ObjectLikeSequence = ObjectLikeSequence;
	  Lazy.StringLikeSequence = StringLikeSequence;
	  Lazy.StreamLikeSequence = StreamLikeSequence;
	  Lazy.GeneratedSequence  = GeneratedSequence;
	  Lazy.AsyncSequence      = AsyncSequence;
	  Lazy.AsyncHandle        = AsyncHandle;

	  /*** Useful utility methods ***/

	  /**
	   * Creates a shallow copy of an array or object.
	   *
	   * @examples
	   * var array  = [1, 2, 3], clonedArray,
	   *     object = { foo: 1, bar: 2 }, clonedObject;
	   *
	   * clonedArray = Lazy.clone(array); // => [1, 2, 3]
	   * clonedArray.push(4); // clonedArray == [1, 2, 3, 4]
	   * array; // => [1, 2, 3]
	   *
	   * clonedObject = Lazy.clone(object); // => { foo: 1, bar: 2 }
	   * clonedObject.baz = 3; // clonedObject == { foo: 1, bar: 2, baz: 3 }
	   * object; // => { foo: 1, bar: 2 }
	   */
	  Lazy.clone = function clone(target) {
	    return Lazy(target).value();
	  };

	  /**
	   * Marks a method as deprecated, so calling it will issue a console warning.
	   */
	  Lazy.deprecate = function deprecate(message, fn) {
	    return function() {
	      console.warn(message);
	      return fn.apply(this, arguments);
	    };
	  };

	  var arrayPop   = Array.prototype.pop,
	      arraySlice = Array.prototype.slice;

	  /**
	   * Creates a callback... you know, Lo-Dash style.
	   *
	   * - for functions, just returns the function
	   * - for strings, returns a pluck-style callback
	   * - for objects, returns a where-style callback
	   *
	   * @private
	   * @param {Function|string|Object} callback A function, string, or object to
	   *     convert to a callback.
	   * @param {*} defaultReturn If the callback is undefined, a default return
	   *     value to use for the function.
	   * @returns {Function} The callback function.
	   *
	   * @examples
	   * createCallback(function() {})                  // instanceof Function
	   * createCallback('foo')                          // instanceof Function
	   * createCallback('foo')({ foo: 'bar'})           // => 'bar'
	   * createCallback({ foo: 'bar' })({ foo: 'bar' }) // => true
	   * createCallback({ foo: 'bar' })({ foo: 'baz' }) // => false
	   */
	  function createCallback(callback, defaultValue) {
	    switch (typeof callback) {
	      case "function":
	        return callback;

	      case "string":
	        return function(e) {
	          return e[callback];
	        };

	      case "object":
	        return function(e) {
	          return Lazy(callback).all(function(value, key) {
	            return e[key] === value;
	          });
	        };

	      case "undefined":
	        return defaultValue ?
	          function() { return defaultValue; } :
	          Lazy.identity;

	      default:
	        throw new Error("Don't know how to make a callback from a " + typeof callback + "!");
	    }
	  }

	  /**
	   * Takes a function that returns a value for one argument and produces a
	   * function that compares two arguments.
	   *
	   * @private
	   * @param {Function|string|Object} callback A function, string, or object to
	   *     convert to a callback using `createCallback`.
	   * @returns {Function} A function that accepts two values and returns 1 if
	   *     the first is greater, -1 if the second is greater, or 0 if they are
	   *     equivalent.
	   *
	   * @examples
	   * createComparator('a')({ a: 1 }, { a: 2 });       // => -1
	   * createComparator('a')({ a: 6 }, { a: 2 });       // => 1
	   * createComparator('a')({ a: 1 }, { a: 1 });       // => 0
	   * createComparator()(3, 5);                        // => -1
	   * createComparator()(7, 5);                        // => 1
	   * createComparator()(3, 3);                        // => 0
	   */
	  function createComparator(callback, descending) {
	    if (!callback) { return compare; }

	    callback = createCallback(callback);

	    return function(x, y) {
	      return compare(callback(x), callback(y));
	    };
	  }

	  /**
	   * Takes a function and returns a function with the same logic but the
	   * arguments reversed. Only applies to functions w/ arity=2 as this is private
	   * and I can do what I want.
	   *
	   * @private
	   * @param {Function} fn The function to "reverse"
	   * @returns {Function} The "reversed" function
	   *
	   * @examples
	   * reverseArguments(function(x, y) { return x + y; })('a', 'b'); // => 'ba'
	   */
	  function reverseArguments(fn) {
	    return function(x, y) { return fn(y, x); };
	  }

	  /**
	   * Creates a Set containing the specified values.
	   *
	   * @param {...Array} values One or more array(s) of values used to populate the
	   *     set.
	   * @returns {Set} A new set containing the values passed in.
	   */
	  function createSet(values) {
	    var set = new Set();
	    Lazy(values || []).flatten().each(function(e) {
	      set.add(e);
	    });
	    return set;
	  }

	  /**
	   * Compares two elements for sorting purposes.
	   *
	   * @private
	   * @param {*} x The left element to compare.
	   * @param {*} y The right element to compare.
	   * @returns {number} 1 if x > y, -1 if x < y, or 0 if x and y are equal.
	   *
	   * @examples
	   * compare(1, 2)     // => -1
	   * compare(1, 1)     // => 0
	   * compare(2, 1)     // => 1
	   * compare('a', 'b') // => -1
	   */
	  function compare(x, y) {
	    if (x === y) {
	      return 0;
	    }

	    return x > y ? 1 : -1;
	  }

	  /**
	   * Iterates over every element in an array.
	   *
	   * @param {Array} array The array.
	   * @param {Function} fn The function to call on every element, which can return
	   *     false to stop the iteration early.
	   * @returns {boolean} True if every element in the entire sequence was iterated,
	   *     otherwise false.
	   */
	  function forEach(array, fn) {
	    var i = -1,
	        len = array.length;

	    while (++i < len) {
	      if (fn(array[i], i) === false) {
	        return false;
	      }
	    }

	    return true;
	  }

	  function getFirst(sequence) {
	    var result;
	    sequence.each(function(e) {
	      result = e;
	      return false;
	    });
	    return result;
	  }

	  /**
	   * Checks if an element exists in an array.
	   *
	   * @private
	   * @param {Array} array
	   * @param {*} element
	   * @returns {boolean} Whether or not the element exists in the array.
	   *
	   * @examples
	   * arrayContains([1, 2], 2)              // => true
	   * arrayContains([1, 2], 3)              // => false
	   * arrayContains([undefined], undefined) // => true
	   * arrayContains([NaN], NaN)             // => true
	   */
	  function arrayContains(array, element) {
	    var i = -1,
	        length = array.length;

	    // Special handling for NaN
	    if (element !== element) {
	      while (++i < length) {
	        if (array[i] !== array[i]) {
	          return true;
	        }
	      }
	      return false;
	    }

	    while (++i < length) {
	      if (array[i] === element) {
	        return true;
	      }
	    }
	    return false;
	  }

	  /**
	   * Checks if an element exists in an array before a given index.
	   *
	   * @private
	   * @param {Array} array
	   * @param {*} element
	   * @param {number} index
	   * @param {Function} keyFn
	   * @returns {boolean}
	   *
	   * @examples
	   * arrayContainsBefore([1, 2, 3], 3, 2) // => false
	   * arrayContainsBefore([1, 2, 3], 3, 3) // => true
	   */
	  function arrayContainsBefore(array, element, index, keyFn) {
	    var i = -1;

	    if (keyFn) {
	      keyFn = createCallback(keyFn);
	      while (++i < index) {
	        if (keyFn(array[i]) === keyFn(element)) {
	          return true;
	        }
	      }

	    } else {
	      while (++i < index) {
	        if (array[i] === element) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  /**
	   * Swaps the elements at two specified positions of an array.
	   *
	   * @private
	   * @param {Array} array
	   * @param {number} i
	   * @param {number} j
	   *
	   * @examples
	   * var array = [1, 2, 3, 4, 5];
	   *
	   * swap(array, 2, 3) // array == [1, 2, 4, 3, 5]
	   */
	  function swap(array, i, j) {
	    var temp = array[i];
	    array[i] = array[j];
	    array[j] = temp;
	  }

	  /**
	   * "Clones" a regular expression (but makes it always global).
	   *
	   * @private
	   * @param {RegExp|string} pattern
	   * @returns {RegExp}
	   */
	  function cloneRegex(pattern) {
	    return eval("" + pattern + (!pattern.global ? "g" : ""));
	  };

	  /**
	   * A collection of unique elements.
	   *
	   * @private
	   * @constructor
	   *
	   * @examples
	   * var set  = new Set(),
	   *     obj1 = {},
	   *     obj2 = {},
	   *     fn1 = function fn1() {},
	   *     fn2 = function fn2() {};
	   *
	   * set.add('foo')            // => true
	   * set.add('foo')            // => false
	   * set.add(1)                // => true
	   * set.add(1)                // => false
	   * set.add('1')              // => true
	   * set.add('1')              // => false
	   * set.add(obj1)             // => true
	   * set.add(obj1)             // => false
	   * set.add(obj2)             // => true
	   * set.add(fn1)              // => true
	   * set.add(fn2)              // => true
	   * set.add(fn2)              // => false
	   * set.contains('__proto__') // => false
	   * set.add('__proto__')      // => true
	   * set.add('__proto__')      // => false
	   * set.contains('add')       // => false
	   * set.add('add')            // => true
	   * set.add('add')            // => false
	   * set.contains(undefined)   // => false
	   * set.add(undefined)        // => true
	   * set.contains(undefined)   // => true
	   * set.contains('undefined') // => false
	   * set.add('undefined')      // => true
	   * set.contains('undefined') // => true
	   * set.contains(NaN)         // => false
	   * set.add(NaN)              // => true
	   * set.contains(NaN)         // => true
	   * set.contains('NaN')       // => false
	   * set.add('NaN')            // => true
	   * set.contains('NaN')       // => true
	   * set.contains('@foo')      // => false
	   * set.add('@foo')           // => true
	   * set.contains('@foo')      // => true
	   */
	  function Set() {
	    this.table   = {};
	    this.objects = [];
	  }

	  /**
	   * Attempts to add a unique value to the set.
	   *
	   * @param {*} value The value to add.
	   * @returns {boolean} True if the value was added to the set (meaning an equal
	   *     value was not already present), or else false.
	   */
	  Set.prototype.add = function add(value) {
	    var table = this.table,
	        type  = typeof value,

	        // only applies for strings
	        firstChar,

	        // only applies for objects
	        objects;

	    switch (type) {
	      case "number":
	      case "boolean":
	      case "undefined":
	        if (!table[value]) {
	          table[value] = true;
	          return true;
	        }
	        return false;

	      case "string":
	        // Essentially, escape the first character if it could possibly collide
	        // with a number, boolean, or undefined (or a string that happens to start
	        // with the escape character!), OR if it could override a special property
	        // such as '__proto__' or 'constructor'.
	        switch (value.charAt(0)) {
	          case "_": // e.g., __proto__
	          case "f": // for 'false'
	          case "t": // for 'true'
	          case "c": // for 'constructor'
	          case "u": // for 'undefined'
	          case "@": // escaped
	          case "0":
	          case "1":
	          case "2":
	          case "3":
	          case "4":
	          case "5":
	          case "6":
	          case "7":
	          case "8":
	          case "9":
	          case "N": // for NaN
	            value = "@" + value;
	        }
	        if (!table[value]) {
	          table[value] = true;
	          return true;
	        }
	        return false;

	      default:
	        // For objects and functions, we can't really do anything other than store
	        // them in an array and do a linear search for reference equality.
	        objects = this.objects;
	        if (!arrayContains(objects, value)) {
	          objects.push(value);
	          return true;
	        }
	        return false;
	    }
	  };

	  /**
	   * Checks whether the set contains a value.
	   *
	   * @param {*} value The value to check for.
	   * @returns {boolean} True if the set contains the value, or else false.
	   */
	  Set.prototype.contains = function contains(value) {
	    var type = typeof value,

	        // only applies for strings
	        firstChar;

	    switch (type) {
	      case "number":
	      case "boolean":
	      case "undefined":
	        return !!this.table[value];

	      case "string":
	        // Essentially, escape the first character if it could possibly collide
	        // with a number, boolean, or undefined (or a string that happens to start
	        // with the escape character!), OR if it could override a special property
	        // such as '__proto__' or 'constructor'.
	        switch (value.charAt(0)) {
	          case "_": // e.g., __proto__
	          case "f": // for 'false'
	          case "t": // for 'true'
	          case "c": // for 'constructor'
	          case "u": // for 'undefined'
	          case "@": // escaped
	          case "0":
	          case "1":
	          case "2":
	          case "3":
	          case "4":
	          case "5":
	          case "6":
	          case "7":
	          case "8":
	          case "9":
	          case "N": // for NaN
	            value = "@" + value;
	        }
	        return !!this.table[value];

	      default:
	        // For objects and functions, we can't really do anything other than store
	        // them in an array and do a linear search for reference equality.
	        return arrayContains(this.objects, value);
	    }
	  };

	  /**
	   * A "rolling" queue, with a fixed capacity. As items are added to the head,
	   * excess items are dropped from the tail.
	   *
	   * @private
	   * @constructor
	   *
	   * @examples
	   * var queue = new Queue(3);
	   *
	   * queue.add(1).toArray()        // => [1]
	   * queue.add(2).toArray()        // => [1, 2]
	   * queue.add(3).toArray()        // => [1, 2, 3]
	   * queue.add(4).toArray()        // => [2, 3, 4]
	   * queue.add(5).add(6).toArray() // => [4, 5, 6]
	   * queue.add(7).add(8).toArray() // => [6, 7, 8]
	   *
	   * // also want to check corner cases
	   * new Queue(1).add('foo').add('bar').toArray() // => ['bar']
	   * new Queue(0).add('foo').toArray()            // => []
	   * new Queue(-1)                                // throws
	   *
	   * @benchmarks
	   * function populateQueue(count, capacity) {
	   *   var q = new Queue(capacity);
	   *   for (var i = 0; i < count; ++i) {
	   *     q.add(i);
	   *   }
	   * }
	   *
	   * function populateArray(count, capacity) {
	   *   var arr = [];
	   *   for (var i = 0; i < count; ++i) {
	   *     if (arr.length === capacity) { arr.shift(); }
	   *     arr.push(i);
	   *   }
	   * }
	   *
	   * populateQueue(100, 10); // populating a Queue
	   * populateArray(100, 10); // populating an Array
	   */
	  function Queue(capacity) {
	    this.contents = new Array(capacity);
	    this.start    = 0;
	    this.count    = 0;
	  }

	  /**
	   * Adds an item to the queue, and returns the queue.
	   */
	  Queue.prototype.add = function add(element) {
	    var contents = this.contents,
	        capacity = contents.length,
	        start    = this.start;

	    if (this.count === capacity) {
	      contents[start] = element;
	      this.start = (start + 1) % capacity;

	    } else {
	      contents[this.count++] = element;
	    }

	    return this;
	  };

	  /**
	   * Returns an array containing snapshot of the queue's contents.
	   */
	  Queue.prototype.toArray = function toArray() {
	    var contents = this.contents,
	        start    = this.start,
	        count    = this.count;

	    var snapshot = contents.slice(start, start + count);
	    if (snapshot.length < count) {
	      snapshot = snapshot.concat(contents.slice(0, count - snapshot.length));
	    }

	    return snapshot;
	  };

	  /**
	   * Shared base method for defining new sequence types.
	   */
	  function defineSequenceType(base, name, overrides) {
	    /** @constructor */
	    var ctor = function ctor() {};

	    // Make this type inherit from the specified base.
	    ctor.prototype = new base();

	    // Attach overrides to the new sequence type's prototype.
	    for (var override in overrides) {
	      ctor.prototype[override] = overrides[override];
	    }

	    // Define a factory method that sets the new sequence's parent to the caller
	    // and (optionally) applies any additional initialization logic.
	    // Expose this as a chainable method so that we can do:
	    // Lazy(...).map(...).filter(...).blah(...);
	    var factory = function factory() {
	      var sequence = new ctor();

	      // Every sequence needs a reference to its parent in order to work.
	      sequence.parent = this;

	      // If a custom init function was supplied, call it now.
	      if (sequence.init) {
	        sequence.init.apply(sequence, arguments);
	      }

	      return sequence;
	    };

	    var methodNames = typeof name === 'string' ? [name] : name;
	    for (var i = 0; i < methodNames.length; ++i) {
	      base.prototype[methodNames[i]] = factory;
	    }

	    return ctor;
	  }

	  return Lazy;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(392).setImmediate, __webpack_require__(392).clearImmediate))

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(346).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(392).setImmediate, __webpack_require__(392).clearImmediate))

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {

	/*!
	 * imagesLoaded v4.1.0
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	( function( window, factory ) { 'use strict';
	  // universal module definition

	  /*global define: false, module: false, require: false */

	  if ( typeof define == 'function' && define.amd ) {
	    // AMD
	    define( [
	      'ev-emitter/ev-emitter'
	    ], function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    });
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      __webpack_require__(394)
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }

	})( window,

	// --------------------------  factory -------------------------- //

	function factory( window, EvEmitter ) {

	'use strict';

	var $ = window.jQuery;
	var console = window.console;

	// -------------------------- helpers -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}

	// -------------------------- imagesLoaded -------------------------- //

	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelectorAll( elem );
	  }

	  this.elements = makeArray( elem );
	  this.options = extend( {}, this.options );

	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }

	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }

	  this.getImages();

	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }

	  // HACK check async to allow time to bind listeners
	  setTimeout( function() {
	    this.check();
	  }.bind( this ));
	}

	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

	ImagesLoaded.prototype.options = {};

	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];

	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};

	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }

	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }

	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};

	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};

	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};

	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};

	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};

	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }

	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }

	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};

	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }

	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};

	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};

	// --------------------------  -------------------------- //

	function LoadingImage( img ) {
	  this.img = img;
	}

	LoadingImage.prototype = Object.create( EvEmitter.prototype );

	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }

	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};

	LoadingImage.prototype.getIsImageComplete = function() {
	  return this.img.complete && this.img.naturalWidth !== undefined;
	};

	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};

	// ----- events ----- //

	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};

	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};

	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};

	// -------------------------- Background -------------------------- //

	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}

	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );

	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};

	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};

	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};

	// -------------------------- jQuery -------------------------- //

	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();

	// --------------------------  -------------------------- //

	return ImagesLoaded;

	});

	}.call(window));

/***/ },
/* 394 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {

	/**
	 * EvEmitter v1.0.2
	 * Lil' event emitter
	 * MIT License
	 */

	/* jshint unused: true, undef: true, strict: true */

	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module */
	  if ( typeof define == 'function' && define.amd ) {
	    // AMD - RequireJS
	    define( factory );
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }

	}( this, function() {

	"use strict";

	function EvEmitter() {}

	var proto = EvEmitter.prototype;

	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }

	  return this;
	};

	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;

	  return this;
	};

	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }

	  return this;
	};

	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }

	  return this;
	};

	return EvEmitter;

	}));

	}.call(window));

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n                  <h2>\n                    <a href="', '">', '</a>\n                  </h2>\n                  <p>\n                    <strong>', '</strong>\n                  </p>\n                  <p>\n                    by ', '\n                  </p>\n                '], ['\n                  <h2>\n                    <a href="', '">', '</a>\n                  </h2>\n                  <p>\n                    <strong>', '</strong>\n                  </p>\n                  <p>\n                    by ', '\n                  </p>\n                ']);

	exports.default = function (container) {
	  var _this = this;

	  _googleMaps2.default.load(function (google) {
	    var maps = google.maps,
	        geocoder = new maps.Geocoder(),
	        map = new maps.Map(container, {
	      center: new maps.LatLng(20, 0),
	      zoom: 1,
	      mapTypeId: maps.MapTypeId.TERRAIN,
	      scrollwheel: false
	    }),
	        infoWindows = [];

	    function geocode(address) {
	      return new Promise(function (resolve, reject) {
	        geocoder.geocode({ address: address }, function (res, status) {
	          if (status === maps.GeocoderStatus.OK) {
	            resolve(res[0].geometry.location);
	          } else {
	            reject(status);
	          }
	        });
	      });
	    }

	    function getHandler(infoWindow, marker) {
	      return function () {
	        infoWindows.forEach(function (infoWindow) {
	          return infoWindow.close();
	        });
	        infoWindow.open(map, marker);
	      };
	    }

	    _articles2.default.forEach(function () {
	      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(_ref) {
	        var title = _ref.title;
	        var location = _ref.location;
	        var url = _ref.url;
	        var authors = _ref.authors;
	        var period = _ref.period;
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.prev = 0;
	                return _context3.delegateYield(regeneratorRuntime.mark(function _callee2() {
	                  var infoWindow, normalizedLocations, markers;
	                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                      switch (_context2.prev = _context2.next) {
	                        case 0:
	                          infoWindow = new maps.InfoWindow({
	                            content: (0, _dedent2.default)(_templateObject, url, title, period, authors.map(function (author) {
	                              return '<a href="' + author.url + '">' + author.name + '</a>';
	                            }).join(', '))
	                          });
	                          normalizedLocations = location.split('|').map(function (loc) {
	                            return loc.trim().toLowerCase();
	                          });
	                          _context2.next = 4;
	                          return Promise.all(normalizedLocations.map(function () {
	                            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(loc) {
	                              var cachedGeocode;
	                              return regeneratorRuntime.wrap(function _callee$(_context) {
	                                while (1) {
	                                  switch (_context.prev = _context.next) {
	                                    case 0:
	                                      cachedGeocode = _geocodes2.default.find(function (_ref2) {
	                                        var address = _ref2.address;
	                                        return address === loc;
	                                      });
	                                      _context.t0 = maps.Marker;
	                                      _context.t1 = map;

	                                      if (!cachedGeocode) {
	                                        _context.next = 7;
	                                        break;
	                                      }

	                                      _context.t2 = { lat: cachedGeocode.lat, lng: cachedGeocode.lng };
	                                      _context.next = 10;
	                                      break;

	                                    case 7:
	                                      _context.next = 9;
	                                      return geocode(loc);

	                                    case 9:
	                                      _context.t2 = _context.sent;

	                                    case 10:
	                                      _context.t3 = _context.t2;
	                                      _context.t4 = {
	                                        map: _context.t1,
	                                        position: _context.t3
	                                      };
	                                      return _context.abrupt('return', new _context.t0(_context.t4));

	                                    case 13:
	                                    case 'end':
	                                      return _context.stop();
	                                  }
	                                }
	                              }, _callee, _this);
	                            }));

	                            return function (_x2) {
	                              return ref.apply(this, arguments);
	                            };
	                          }()));

	                        case 4:
	                          markers = _context2.sent;


	                          infoWindows.push(infoWindow);

	                          markers.forEach(function (marker) {
	                            marker.addListener('click', getHandler(infoWindow, marker));
	                            marker.addListener('mouseover', getHandler(infoWindow, marker));
	                          });

	                        case 7:
	                        case 'end':
	                          return _context2.stop();
	                      }
	                    }
	                  }, _callee2, _this);
	                })(), 't0', 2);

	              case 2:
	                _context3.next = 7;
	                break;

	              case 4:
	                _context3.prev = 4;
	                _context3.t1 = _context3['catch'](0);

	                console.error(_context3.t1);

	              case 7:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, _this, [[0, 4]]);
	      }));

	      return function (_x) {
	        return ref.apply(this, arguments);
	      };
	    }());
	  });
	};

	var _googleMaps = __webpack_require__(396);

	var _googleMaps2 = _interopRequireDefault(_googleMaps);

	var _dedent = __webpack_require__(397);

	var _dedent2 = _interopRequireDefault(_dedent);

	var _articles = __webpack_require__(398);

	var _articles2 = _interopRequireDefault(_articles);

	var _geocodes = __webpack_require__(399);

	var _geocodes2 = _interopRequireDefault(_geocodes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	_googleMaps2.default.KEY = 'AIzaSyAzKKPS4jEeie2IDq57BXYZILzbJhZCctE';
	_googleMaps2.default.LANGUAGE = 'en';

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

		if (root === null) {
			throw new Error('Google-maps package can be used only in browser');
		}

		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.GoogleMapsLoader = factory();
		}

	})(typeof window !== 'undefined' ? window : null, function() {


		'use strict';


		var googleVersion = '3.18';

		var script = null;

		var google = null;

		var loading = false;

		var callbacks = [];

		var onLoadEvents = [];

		var originalCreateLoaderMethod = null;


		var GoogleMapsLoader = {};


		GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

		GoogleMapsLoader.KEY = null;

		GoogleMapsLoader.LIBRARIES = [];

		GoogleMapsLoader.CLIENT = null;

		GoogleMapsLoader.CHANNEL = null;

		GoogleMapsLoader.LANGUAGE = null;

		GoogleMapsLoader.REGION = null;

		GoogleMapsLoader.VERSION = googleVersion;

		GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


		GoogleMapsLoader._googleMockApiObject = {};


		GoogleMapsLoader.load = function(fn) {
			if (google === null) {
				if (loading === true) {
					if (fn) {
						callbacks.push(fn);
					}
				} else {
					loading = true;

					window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
						ready(fn);
					};

					GoogleMapsLoader.createLoader();
				}
			} else if (fn) {
				fn(google);
			}
		};


		GoogleMapsLoader.createLoader = function() {
			script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = GoogleMapsLoader.createUrl();

			document.body.appendChild(script);
		};


		GoogleMapsLoader.isLoaded = function() {
			return google !== null;
		};


		GoogleMapsLoader.createUrl = function() {
			var url = GoogleMapsLoader.URL;

			url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

			if (GoogleMapsLoader.KEY) {
				url += '&key=' + GoogleMapsLoader.KEY;
			}

			if (GoogleMapsLoader.LIBRARIES.length > 0) {
				url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
			}

			if (GoogleMapsLoader.CLIENT) {
				url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
			}

			if (GoogleMapsLoader.CHANNEL) {
				url += '&channel=' + GoogleMapsLoader.CHANNEL;
			}

			if (GoogleMapsLoader.LANGUAGE) {
				url += '&language=' + GoogleMapsLoader.LANGUAGE;
			}

			if (GoogleMapsLoader.REGION) {
				url += '&region=' + GoogleMapsLoader.REGION;
			}

			return url;
		};


		GoogleMapsLoader.release = function(fn) {
			var release = function() {
				GoogleMapsLoader.KEY = null;
				GoogleMapsLoader.LIBRARIES = [];
				GoogleMapsLoader.CLIENT = null;
				GoogleMapsLoader.CHANNEL = null;
				GoogleMapsLoader.LANGUAGE = null;
				GoogleMapsLoader.REGION = null;
				GoogleMapsLoader.VERSION = googleVersion;

				google = null;
				loading = false;
				callbacks = [];
				onLoadEvents = [];

				if (typeof window.google !== 'undefined') {
					delete window.google;
				}

				if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
					delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
				}

				if (originalCreateLoaderMethod !== null) {
					GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
					originalCreateLoaderMethod = null;
				}

				if (script !== null) {
					script.parentElement.removeChild(script);
					script = null;
				}

				if (fn) {
					fn();
				}
			};

			if (loading) {
				GoogleMapsLoader.load(function() {
					release();
				});
			} else {
				release();
			}
		};


		GoogleMapsLoader.onLoad = function(fn) {
			onLoadEvents.push(fn);
		};


		GoogleMapsLoader.makeMock = function() {
			originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

			GoogleMapsLoader.createLoader = function() {
				window.google = GoogleMapsLoader._googleMockApiObject;
				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
			};
		};


		var ready = function(fn) {
			var i;

			loading = false;

			if (google === null) {
				google = window.google;
			}

			for (i = 0; i < onLoadEvents.length; i++) {
				onLoadEvents[i](google);
			}

			if (fn) {
				fn(google);
			}

			for (i = 0; i < callbacks.length; i++) {
				callbacks[i](google);
			}

			callbacks = [];
		};


		return GoogleMapsLoader;

	});


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function dedent(strings) {

	  var raw = undefined;
	  if (typeof strings === "string") {
	    // dedent can be used as a plain function
	    raw = [strings];
	  } else {
	    raw = strings.raw;
	  }

	  // first, perform interpolation
	  var result = "";

	  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }

	  for (var i = 0; i < raw.length; i++) {
	    result += raw[i].
	    // join lines when there is a suppressed newline
	    replace(/\\\n[ \t]*/g, "").

	    // handle escaped backticks
	    replace(/\\`/g, "`");

	    if (i < values.length) {
	      result += values[i];
	    }
	  }

	  // dedent eats leading and trailing whitespace too
	  result = result.trim();

	  // now strip indentation
	  var lines = result.split("\n");
	  var mindent = null;
	  lines.forEach(function (l) {
	    var m = l.match(/^ +/);
	    if (m) {
	      var indent = m[0].length;
	      if (!mindent) {
	        // this is the first indented line
	        mindent = indent;
	      } else {
	        mindent = Math.min(mindent, indent);
	      }
	    }
	  });

	  if (mindent !== null) {
	    result = lines.map(function (l) {
	      return l[0] === " " ? l.slice(mindent) : l;
	    }).join("\n");
	  }

	  // handle escaped newlines at the end to ensure they don't get stripped too
	  return result.replace(/\\n/g, "\n");
	}

	if (true) {
	  module.exports = dedent;
	}

/***/ },
/* 398 */
/***/ function(module, exports) {

	/* eslint-disable */

	module.exports = [
	  {% for post in site.posts %}

	    {% assign authors = '' | split: ',' %}

	    {% for author in site.authors %}
	      {% if post.author contains author.value %}
	        {% assign authors = authors | push: author %}
	      {% endif %}
	    {% endfor %}

	    {
	      title: '{{ post.title | smartify }}',
	      url: "{{ post.url }}",
	      authors: [
	        {% for author in authors %}
	          {
	            name: "{{ author.name }}",
	            url: "{{ author.value | prepend: '/authors/' | prepend: site.baseurl }}"
	          },
	        {% endfor %}
	      ],
	      period: "{{ post.period }}",
	      location: "{{ post.location }}"
	    },
	  {% endfor %}
	]


/***/ },
/* 399 */
/***/ function(module, exports) {

	/* eslint-disable */

	module.exports = [
	  {% for geocode in site.data.geocodes %}
	    {
	      address: "{{ geocode.address }}",
	      lat: {{ geocode.lat }},
	      lng: {{ geocode.lng }}
	    },
	  {% endfor %}
	]


/***/ }
/******/ ]);