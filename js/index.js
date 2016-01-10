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

	__webpack_require__(1);

	__webpack_require__(191);

	__webpack_require__(192);

	var _underscoreContrib = __webpack_require__(193);

	var _underscoreContrib2 = _interopRequireDefault(_underscoreContrib);

	var _rivets = __webpack_require__(209);

	var _rivets2 = _interopRequireDefault(_rivets);

	var _stickyfill = __webpack_require__(211);

	var _stickyfill2 = _interopRequireDefault(_stickyfill);

	var _model = __webpack_require__(212);

	var _model2 = _interopRequireDefault(_model);

	var _siteDesc = __webpack_require__(213);

	var _siteDesc2 = _interopRequireDefault(_siteDesc);

	var _imageReplace = __webpack_require__(214);

	var _imageReplace2 = _interopRequireDefault(_imageReplace);

	var _hero = __webpack_require__(215);

	var _hero2 = _interopRequireDefault(_hero);

	var _util = __webpack_require__(216);

	__webpack_require__(217);

	var _photoswipe = __webpack_require__(218);

	var _photoswipe2 = _interopRequireDefault(_photoswipe);

	var _photoswipeUiDefault = __webpack_require__(219);

	var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

	var _heroes = __webpack_require__(220);

	var _heroes2 = _interopRequireDefault(_heroes);

	var _gallery = __webpack_require__(221);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _imagesloaded = __webpack_require__(224);

	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function init() {
	  (0, _hero2.default)();
	  (0, _siteDesc2.default)();
	  (0, _imageReplace2.default)();

	  var b = document.getElementsByTagName('body')[0],
	      gallery = (0, _util.$)('.pswp'),
	      width = window.innerWidth || document.documentElement.clientWidth || b.clientWidth;

	  if (width > 760) {
	    (function () {
	      var stickyfill = (0, _stickyfill2.default)();
	      (0, _util.$$)('.sticky').forEach(function (el) {
	        return stickyfill.add(el);
	      });
	    })();
	  }

	  if (gallery) {
	    (function () {
	      var thumbs = (0, _util.$$)('.pswp-thumb'),
	          div = (0, _util.$)('.thumbnails'),
	          getThumbBoundsFn = function getThumbBoundsFn(i) {
	        var thumb = thumbs[i],
	            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
	            rect = thumb.getBoundingClientRect();

	        return {
	          x: rect.left,
	          y: rect.top + pageYScroll,
	          w: rect.width
	        };
	      };

	      div.addEventListener('click', function (e) {
	        var index = thumbs.indexOf(e.target);
	        if (index >= 0) {
	          var options = { index: index, getThumbBoundsFn: getThumbBoundsFn },
	              pswp = new _photoswipe2.default(gallery, _photoswipeUiDefault2.default, _heroes2.default, options);
	          pswp.init();
	        }
	      });

	      var galleryRunner = _underscoreContrib2.default.partial(_gallery2.default, div);

	      (0, _imagesloaded2.default)(div, galleryRunner);

	      window.addEventListener('resize', _underscoreContrib2.default.throttle(galleryRunner, 100, { leading: false }));
	    })();
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

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(189);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;

	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});

	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;

	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
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
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});

	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};

	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};

	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
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
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
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
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
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
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
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
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
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
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);

	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;

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
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
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
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
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
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
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
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});

	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {fill: __webpack_require__(127)});

	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;

	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
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
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
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
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
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
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
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

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
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
	var listner = function(event){
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
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

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
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
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
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);

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
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
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
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);

	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
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
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);

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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);

	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
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
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
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
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
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
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
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
/* 191 */
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
	  if (!("classList" in document.createElement("_"))) {

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
/* 192 */
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
	            this.set(false, token, prev, this.update.bind(this))
	            this.set(true, token, current, this.update.bind(this))
	            this.objectPath[index] = current
	          }
	        } else {
	          this.set(true, token, current, this.update.bind(this))
	          this.objectPath[index] = current
	        }

	        current = this.get(token, current)
	      } else {
	        if (unreached === false) {
	          unreached = index
	        }

	        if (prev = this.objectPath[index]) {
	          this.set(false, token, prev, this.update.bind(this))
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
	        this.set(false, token, obj, this.update.bind(this))
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
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194);
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

	module.exports = __webpack_require__(195);


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.array.builders.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------
	  
	  // Create quick reference variables for speed access to core prototypes.
	  var slice   = Array.prototype.slice;

	  var existy = function(x) { return x != null; };

	  // Mixing in the array builders
	  // ----------------------------

	  _.mixin({
	    // Concatenates one or more arrays given as arguments.  If given objects and
	    // scalars as arguments `cat` will plop them down in place in the result 
	    // array.  If given an `arguments` object, `cat` will treat it like an array
	    // and concatenate it likewise.
	    cat: function() {
	      return _.flatten(arguments, true);
	    },

	    // 'Constructs' an array by putting an element at its front
	    cons: function(head, tail) {
	      return _.cat([head], tail);
	    },

	    // Takes an array and chunks it some number of times into
	    // sub-arrays of size n.  Allows and optional padding array as
	    // the third argument to fill in the tail chunk when n is
	    // not sufficient to build chunks of the same size.
	    chunk: function(array, n, pad) {
	      var p = function(array) {
	        if (array == null) return [];

	        var part = _.take(array, n);

	        if (n === _.size(part)) {
	          return _.cons(part, p(_.drop(array, n)));
	        }
	        else {
	          return pad ? [_.take(_.cat(part, pad), n)] : [];
	        }
	      };

	      return p(array);
	    },

	    // Takes an array and chunks it some number of times into
	    // sub-arrays of size n.  If the array given cannot fill the size
	    // needs of the final chunk then a smaller chunk is used
	    // for the last.
	    chunkAll: function(array, n, step) {
	      step = (step != null) ? step : n;

	      var p = function(array, n, step) {
	        if (_.isEmpty(array)) return [];

	        return _.cons(_.take(array, n),
	                      p(_.drop(array, step), n, step));
	      };

	      return p(array, n, step);
	    },

	    // Maps a function over an array and concatenates all of the results.
	    mapcat: function(array, fun) {
	      return _.flatten(_.map(array, fun), true);
	    },

	    // Returns an array with some item between each element
	    // of a given array.
	    interpose: function(array, inter) {
	      if (!_.isArray(array)) throw new TypeError;
	      var sz = _.size(array);
	      if (sz === 0) return array;
	      if (sz === 1) return array;

	      return slice.call(_.mapcat(array, function(elem) { 
	        return _.cons(elem, [inter]);
	      }), 0, -1);
	    },

	    // Weaves two or more arrays together
	    weave: function(/* args */) {
	      if (!_.some(arguments)) return [];
	      if (arguments.length == 1) return arguments[0];

	      return _.filter(_.flatten(_.zip.apply(null, arguments), true), function(elem) {
	        return elem != null;
	      });
	    },
	    interleave: _.weave,

	    // Returns an array of a value repeated a certain number of
	    // times.
	    repeat: function(t, elem) {
	      return _.times(t, function() { return elem; });
	    },

	    // Returns an array built from the contents of a given array repeated
	    // a certain number of times.
	    cycle: function(t, elems) {
	      return _.flatten(_.times(t, function() { return elems; }), true);
	    },

	    // Returns an array with two internal arrays built from
	    // taking an original array and spliting it at an index.
	    splitAt: function(array, index) {
	      return [_.take(array, index), _.drop(array, index)];
	    },

	    // Call a function recursively f(f(f(args))) until a second
	    // given function goes falsey.  Expects a seed value to start.
	    iterateUntil: function(doit, checkit, seed) {
	      var ret = [];
	      var result = doit(seed);

	      while (checkit(result)) {
	        ret.push(result);
	        result = doit(result);
	      }

	      return ret;
	    },

	    // Takes every nth item from an array, returning an array of
	    // the results.
	    takeSkipping: function(array, n) {
	      var ret = [];
	      var sz = _.size(array);

	      if (n <= 0) return [];
	      if (n === 1) return array;

	      for(var index = 0; index < sz; index += n) {
	        ret.push(array[index]);
	      }

	      return ret;
	    },

	    // Returns an array of each intermediate stage of a call to
	    // a `reduce`-like function.
	    reductions: function(array, fun, init) {
	      var ret = [];
	      var acc = init;

	      _.each(array, function(v,k) {
	        acc = fun(acc, array[k]);
	        ret.push(acc);
	      });

	      return ret;
	    },

	    // Runs its given function on the index of the elements rather than 
	    // the elements themselves, keeping all of the truthy values in the end.
	    keepIndexed: function(array, pred) {
	      return _.filter(_.map(_.range(_.size(array)), function(i) {
	        return pred(i, array[i]);
	      }),
	      existy);
	    },

	    // Accepts an array-like object (other than strings) as an argument and
	    // returns an array whose elements are in the reverse order. Unlike the
	    // built-in `Array.prototype.reverse` method, this does not mutate the
	    // original object. Note: attempting to use this method on a string will
	    // result in a `TypeError`, as it cannot properly reverse unicode strings.
	    reverseOrder: function(obj) {
	      if (typeof obj == 'string')
	        throw new TypeError('Strings cannot be reversed by _.reverseOrder');
	      return slice.call(obj).reverse();
	    },

	    // Creates an array with all possible combinations of elements from
	    // the given arrays
	    combinations: function(){
	      return _.reduce(slice.call(arguments, 1),function(ret,newarr){
	        return _.reduce(ret,function(memo,oldi){
	          return memo.concat(_.map(newarr,function(newi){
	            return oldi.concat([newi]);
	          }));
	        },[]);
	      },_.map(arguments[0],function(i){return [i];}));
	    }

	  });

	}).call(this);


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.array.selectors.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  // Create quick reference variables for speed access to core prototypes.
	  var slice   = Array.prototype.slice,
	      concat  = Array.prototype.concat;

	  var existy = function(x) { return x != null; };
	  var truthy = function(x) { return (x !== false) && existy(x); };
	  var isSeq = function(x) { return (_.isArray(x)) || (_.isArguments(x)); };

	  // Mixing in the array selectors
	  // ----------------------------

	  _.mixin({
	    // Returns the second element of an array. Passing **n** will return all but
	    // the first of the head N values in the array.  The **guard** check allows it
	    // to work with `_.map`.
	    second: function(array, n, guard) {
	      if (array == null) return void 0;
	      return (n != null) && !guard ? slice.call(array, 1, n) : array[1];
	    },

	    // Returns the third element of an array. Passing **n** will return all but
	    // the first two of the head N values in the array.  The **guard** check allows it
	    // to work with `_.map`.
	    third: function(array, n, guard) {
	      if (array == null) return void 0;
	      return (n != null) && !guard ? slice.call(array, 2, n) : array[2];
	    },

	    // A function to get at an index into an array
	    nth: function(array, index, guard) {
	      if ((index != null) && !guard) return array[index];
	    },

	    // A function to get values via indices into an array
	    nths: nths = function(array, indices) {
	      if (array == null) return void 0;

	      if (isSeq(indices))
	        return _(indices).map(function(i){return array[i];});
	      else
	        return nths(array, slice.call(arguments, 1));
	    },
	    valuesAt: nths,

	    // A function to get at "truthily" indexed values
	    // bin refers to "binary" nature of true/false values in binIndices
	    // but can also be thought of as putting array values into either "take" or "don't" bins
	    binPick: function binPick(array, binIndices) {
	      if (array == null) return void 0;

	      if (isSeq(binIndices))
	        return _.nths(array, _.range(binIndices.length).filter(function(i){return binIndices[i];}));
	      else
	        return binPick(array, slice.call(arguments, 1));
	    },

	    // Takes all items in an array while a given predicate returns truthy.
	    takeWhile: function(array, pred) {
	      if (!isSeq(array)) throw new TypeError;

	      var sz = _.size(array);

	      for (var index = 0; index < sz; index++) {
	        if(!truthy(pred(array[index]))) {
	          break;
	        }
	      }

	      return _.take(array, index);
	    },

	    // Drops all items from an array while a given predicate returns truthy.
	    dropWhile: function(array, pred) {
	      if (!isSeq(array)) throw new TypeError;

	      var sz = _.size(array);

	      for (var index = 0; index < sz; index++) {
	        if(!truthy(pred(array[index])))
	          break;
	      }

	      return _.drop(array, index);
	    },

	    // Returns an array with two internal arrays built from
	    // taking an original array and spliting it at the index
	    // where a given function goes falsey.
	    splitWith: function(array, pred) {
	      return [_.takeWhile(array, pred), _.dropWhile(array, pred)];
	    },

	    // Takes an array and partitions it as the given predicate changes
	    // truth sense.
	    partitionBy: function(array, fun){
	      if (_.isEmpty(array) || !existy(array)) return [];

	      var fst    = _.first(array);
	      var fstVal = fun(fst);
	      var run    = concat.call([fst], _.takeWhile(_.rest(array), function(e) {
	        return _.isEqual(fstVal, fun(e));
	      }));

	      return concat.call([run], _.partitionBy(_.drop(array, _.size(run)), fun));
	    },

	    // Returns the 'best' value in an array based on the result of a
	    // given function.
	    best: function(array, fun) {
	      return _.reduce(array, function(x, y) {
	        return fun(x, y) ? x : y;
	      });
	    },

	    // Returns an array of existy results of a function over an source array.
	    keep: function(array, fun) {
	      if (!isSeq(array)) throw new TypeError("expected an array as the first argument");

	      return _.filter(_.map(array, function(e) {
	        return fun(e);
	      }), existy);
	    }
	  });

	}).call(this);


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.collections.walk.js 0.3.0)
	// (c) 2013 Patrick Dubroy
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  // An internal object that can be returned from a visitor function to
	  // prevent a top-down walk from walking subtrees of a node.
	  var stopRecursion = {};

	  // An internal object that can be returned from a visitor function to
	  // cause the walk to immediately stop.
	  var stopWalk = {};

	  var notTreeError = 'Not a tree: same object found in two different branches';

	  // Implements the default traversal strategy: if `obj` is a DOM node, walk
	  // its DOM children; otherwise, walk all the objects it references.
	  function defaultTraversal(obj) {
	    return _.isElement(obj) ? obj.children : obj;
	  }

	  // Walk the tree recursively beginning with `root`, calling `beforeFunc`
	  // before visiting an objects descendents, and `afterFunc` afterwards.
	  // If `collectResults` is true, the last argument to `afterFunc` will be a
	  // collection of the results of walking the node's subtrees.
	  function walkImpl(root, traversalStrategy, beforeFunc, afterFunc, context, collectResults) {
	    var visited = [];
	    return (function _walk(value, key, parent) {
	      // Keep track of objects that have been visited, and throw an exception
	      // when trying to visit the same object twice.
	      if (_.isObject(value)) {
	        if (visited.indexOf(value) >= 0) throw new TypeError(notTreeError);
	        visited.push(value);
	      }

	      if (beforeFunc) {
	        var result = beforeFunc.call(context, value, key, parent);
	        if (result === stopWalk) return stopWalk;
	        if (result === stopRecursion) return;
	      }

	      var subResults;
	      var target = traversalStrategy(value);
	      if (_.isObject(target) && !_.isEmpty(target)) {
	        // If collecting results from subtrees, collect them in the same shape
	        // as the parent node.
	        if (collectResults) subResults = _.isArray(value) ? [] : {};

	        var stop = _.any(target, function(obj, key) {
	          var result = _walk(obj, key, value);
	          if (result === stopWalk) return true;
	          if (subResults) subResults[key] = result;
	        });
	        if (stop) return stopWalk;
	      }
	      if (afterFunc) return afterFunc.call(context, value, key, parent, subResults);
	    })(root);
	  }

	  // Internal helper providing the implementation for `pluck` and `pluckRec`.
	  function pluck(obj, propertyName, recursive) {
	    var results = [];
	    this.preorder(obj, function(value, key) {
	      if (!recursive && key == propertyName)
	        return stopRecursion;
	      if (_.has(value, propertyName))
	        results[results.length] = value[propertyName];
	    });
	    return results;
	  }

	  var exports = {
	    // Performs a preorder traversal of `obj` and returns the first value
	    // which passes a truth test.
	    find: function(obj, visitor, context) {
	      var result;
	      this.preorder(obj, function(value, key, parent) {
	        if (visitor.call(context, value, key, parent)) {
	          result = value;
	          return stopWalk;
	        }
	      }, context);
	      return result;
	    },

	    // Recursively traverses `obj` and returns all the elements that pass a
	    // truth test. `strategy` is the traversal function to use, e.g. `preorder`
	    // or `postorder`.
	    filter: function(obj, strategy, visitor, context) {
	      var results = [];
	      if (obj == null) return results;
	      strategy(obj, function(value, key, parent) {
	        if (visitor.call(context, value, key, parent)) results.push(value);
	      }, null, this._traversalStrategy);
	      return results;
	    },

	    // Recursively traverses `obj` and returns all the elements for which a
	    // truth test fails.
	    reject: function(obj, strategy, visitor, context) {
	      return this.filter(obj, strategy, function(value, key, parent) {
	        return !visitor.call(context, value, key, parent);
	      });
	    },

	    // Produces a new array of values by recursively traversing `obj` and
	    // mapping each value through the transformation function `visitor`.
	    // `strategy` is the traversal function to use, e.g. `preorder` or
	    // `postorder`.
	    map: function(obj, strategy, visitor, context) {
	      var results = [];
	      strategy(obj, function(value, key, parent) {
	        results[results.length] = visitor.call(context, value, key, parent);
	      }, null, this._traversalStrategy);
	      return results;
	    },

	    // Return the value of properties named `propertyName` reachable from the
	    // tree rooted at `obj`. Results are not recursively searched; use
	    // `pluckRec` for that.
	    pluck: function(obj, propertyName) {
	      return pluck.call(this, obj, propertyName, false);
	    },

	    // Version of `pluck` which recursively searches results for nested objects
	    // with a property named `propertyName`.
	    pluckRec: function(obj, propertyName) {
	      return pluck.call(this, obj, propertyName, true);
	    },

	    // Recursively traverses `obj` in a depth-first fashion, invoking the
	    // `visitor` function for each object only after traversing its children.
	    // `traversalStrategy` is intended for internal callers, and is not part
	    // of the public API.
	    postorder: function(obj, visitor, context, traversalStrategy) {
	      traversalStrategy = traversalStrategy || this._traversalStrategy;
	      walkImpl(obj, traversalStrategy, null, visitor, context);
	    },

	    // Recursively traverses `obj` in a depth-first fashion, invoking the
	    // `visitor` function for each object before traversing its children.
	    // `traversalStrategy` is intended for internal callers, and is not part
	    // of the public API.
	    preorder: function(obj, visitor, context, traversalStrategy) {
	      traversalStrategy = traversalStrategy || this._traversalStrategy;
	      walkImpl(obj, traversalStrategy, visitor, null, context);
	    },

	    // Builds up a single value by doing a post-order traversal of `obj` and
	    // calling the `visitor` function on each object in the tree. For leaf
	    // objects, the `memo` argument to `visitor` is the value of the `leafMemo`
	    // argument to `reduce`. For non-leaf objects, `memo` is a collection of
	    // the results of calling `reduce` on the object's children.
	    reduce: function(obj, visitor, leafMemo, context) {
	      var reducer = function(value, key, parent, subResults) {
	        return visitor(subResults || leafMemo, value, key, parent);
	      };
	      return walkImpl(obj, this._traversalStrategy, null, reducer, context, true);
	    }
	  };

	  // Set up aliases to match those in underscore.js.
	  exports.collect = exports.map;
	  exports.detect = exports.find;
	  exports.select = exports.filter;

	  // Returns an object containing the walk functions. If `traversalStrategy`
	  // is specified, it is a function determining how objects should be
	  // traversed. Given an object, it returns the object to be recursively
	  // walked. The default strategy is equivalent to `_.identity` for regular
	  // objects, and for DOM nodes it returns the node's DOM children.
	  _.walk = function(traversalStrategy) {
	    var walker = _.clone(exports);

	    // Bind all of the public functions in the walker to itself. This allows
	    // the traversal strategy to be dynamically scoped.
	    _.bindAll.apply(null, [walker].concat(_.keys(walker)));

	    walker._traversalStrategy = traversalStrategy || defaultTraversal;
	    return walker;
	  };

	  // Use `_.walk` as a namespace to hold versions of the walk functions which
	  // use the default traversal strategy.
	  _.extend(_.walk, _.walk());
	}).call(this);


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.function.arity.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  function enforcesUnary (fn) {
	    return function mustBeUnary () {
	      if (arguments.length === 1) {
	        return fn.apply(this, arguments);
	      }
	      else throw new RangeError('Only a single argument may be accepted.');

	    };
	  }

	  // Curry
	  // -------
	  var curry = (function () {
	    function collectArgs(func, that, argCount, args, newArg, reverse) {
	      if (reverse === true) {
	        args.unshift(newArg);
	      } else {
	        args.push(newArg);
	      }
	      if (args.length == argCount) {
	        return func.apply(that, args);
	      } else {
	        return enforcesUnary(function () {
	          return collectArgs(func, that, argCount, args.slice(0), arguments[0], reverse);
	        });
	      }
	    }
	    return function curry (func, reverse) {
	      var that = this;
	      return enforcesUnary(function () {
	        return collectArgs(func, that, func.length, [], arguments[0], reverse);
	      });
	    };
	  }());

	  // Enforce Arity
	  // --------------------
	  var enforce = (function () {
	    var CACHE = [];
	    return function enforce (func) {
	      if (typeof func !== 'function') {
	        throw new Error('Argument 1 must be a function.');
	      }
	      var funcLength = func.length;
	      if (CACHE[funcLength] === undefined) {
	        CACHE[funcLength] = function (enforceFunc) {
	          return function () {
	            if (arguments.length !== funcLength) {
	              throw new RangeError(funcLength + ' arguments must be applied.');
	            }
	            return enforceFunc.apply(this, arguments);
	          };
	        };
	      }
	      return CACHE[funcLength](func);
	    };
	  }());

	  // Right curry variants
	  // ---------------------
	  var curryRight = function (func) {
	    return curry.call(this, func, true);
	  };

	  var curryRight2 = function (fun) {
	    return enforcesUnary(function (last) {
	      return enforcesUnary(function (first) {
	        return fun.call(this, first, last);
	      });
	    });
	  };

	  var curryRight3 = function (fun) {
	    return enforcesUnary(function (last) {
	      return enforcesUnary(function (second) {
	        return enforcesUnary(function (first) {
	          return fun.call(this, first, second, last);
	        });
	      });
	    });
	  };

	  // Mixing in the arity functions
	  // -----------------------------

	  _.mixin({
	    // ### Fixed arguments

	    // Fixes the arguments to a function based on the parameter template defined by
	    // the presence of values and the `_` placeholder.
	    fix: function(fun) {
	      var fixArgs = _.rest(arguments);

	      var f = function() {
	        var args = fixArgs.slice();
	        var arg = 0;

	        for ( var i = 0; i < (args.length || arg < arguments.length); i++ ) {
	          if ( args[i] === _ ) {
	            args[i] = arguments[arg++];
	          }
	        }

	        return fun.apply(null, args);
	      };

	      f._original = fun;

	      return f;
	    },

	    unary: function (fun) {
	      return function unary (a) {
	        return fun.call(this, a);
	      };
	    },

	    binary: function (fun) {
	      return function binary (a, b) {
	        return fun.call(this, a, b);
	      };
	    },

	    ternary: function (fun) {
	      return function ternary (a, b, c) {
	        return fun.call(this, a, b, c);
	      };
	    },

	    quaternary: function (fun) {
	      return function quaternary (a, b, c, d) {
	        return fun.call(this, a, b, c, d);
	      };
	    },

	    // Flexible curry function with strict arity.
	    // Argument application left to right.
	    // source: https://github.com/eborden/js-curry
	    curry: curry,

	    // Flexible right to left curry with strict arity.
	    curryRight: curryRight,
	    rCurry: curryRight, // alias for backwards compatibility


	    curry2: function (fun) {
	      return enforcesUnary(function curried (first) {
	        return enforcesUnary(function (last) {
	          return fun.call(this, first, last);
	        });
	      });
	    },

	    curry3: function (fun) {
	      return enforcesUnary(function (first) {
	        return enforcesUnary(function (second) {
	          return enforcesUnary(function (last) {
	            return fun.call(this, first, second, last);
	          });
	        });
	      });
	    },

	    // reverse currying for functions taking two arguments.
	    curryRight2: curryRight2,
	    rcurry2: curryRight2, // alias for backwards compatibility

	    curryRight3: curryRight3,
	    rcurry3: curryRight3, // alias for backwards compatibility

	    // Dynamic decorator to enforce function arity and defeat varargs.
	    enforce: enforce
	  });

	  _.arity = (function () {
	    // Allow 'new Function', as that is currently the only reliable way
	    // to manipulate function.length
	    /* jshint -W054 */
	    var FUNCTIONS = {};
	    return function arity (numberOfArgs, fun) {
	      if (FUNCTIONS[numberOfArgs] == null) {
	        var parameters = new Array(numberOfArgs);
	        for (var i = 0; i < numberOfArgs; ++i) {
	          parameters[i] = "__" + i;
	        }
	        var pstr = parameters.join();
	        var code = "return function ("+pstr+") { return fun.apply(this, arguments); };";
	        FUNCTIONS[numberOfArgs] = new Function(['fun'], code);
	      }
	      if (fun == null) {
	        return function (fun) { return arity(numberOfArgs, fun); };
	      }
	      else return FUNCTIONS[numberOfArgs](fun);
	    };
	  })();

	}).call(this);


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.function.combinators.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  var existy = function(x) { return x != null; };
	  var truthy = function(x) { return (x !== false) && existy(x); };
	  var __reverse = [].reverse;
	  var __slice = [].slice;
	  var __map = [].map;
	  var curry2 = function (fun) {
	    return function curried (first, optionalLast) {
	      if (arguments.length === 1) {
	        return function (last) {
	          return fun(first, last);
	        };
	      }
	      else return fun(first, optionalLast);
	    };
	  };
	  
	  var createPredicateApplicator = function (funcToInvoke /*, preds */) {
	    var preds = _(arguments).tail();

	    return function (objToCheck) {
	      var array = _(objToCheck).cat();

	      return _[funcToInvoke](array, function (e) {
	        return _[funcToInvoke](preds, function (p) {
	          return p(e);
	        });
	      });
	    };
	  };

	  // n.b. depends on underscore.function.arity.js
	  // n.b. depends on underscore.array.builders.js
	    
	  // Takes a target function and a mapping function. Returns a function
	  // that applies the mapper to its arguments before evaluating the body.
	  function baseMapArgs (fun, mapFun) {
	    return _.arity(fun.length, function () {
	      return fun.apply(this, __map.call(arguments, mapFun));
	    });
	  }
	  
	  // Mixing in the combinator functions
	  // ----------------------------------

	  _.mixin({
	    // Provide "always" alias for backwards compatibility
	    always: _.constant,

	    // Takes some number of functions, either as an array or variadically
	    // and returns a function that takes some value as its first argument 
	    // and runs it through a pipeline of the original functions given.
	    pipeline: function(/*, funs */){
	      var funs = (_.isArray(arguments[0])) ? arguments[0] : arguments;

	      return function(seed) {
	        return _.reduce(funs,
	                        function(l,r) { return r(l); },
	                        seed);
	      };
	    },

	    // Composes a bunch of predicates into a single predicate that
	    // checks all elements of an array for conformance to all of the
	    // original predicates.
	    conjoin: _.partial(createPredicateApplicator, ('every')),

	    // Composes a bunch of predicates into a single predicate that
	    // checks all elements of an array for conformance to any of the
	    // original predicates.
	    disjoin: _.partial(createPredicateApplicator, 'some'),

	    // Takes a predicate-like and returns a comparator (-1,0,1).
	    comparator: function(fun) {
	      return function(x, y) {
	        if (truthy(fun(x, y)))
	          return -1;
	        else if (truthy(fun(y, x)))
	          return 1;
	        else
	          return 0;
	      };
	    },

	    // Returns a function that reverses the sense of a given predicate-like.
	    complement: function(pred) {
	      return function() {
	        return !pred.apply(this, arguments);
	      };
	    },

	    // Takes a function expecting varargs and
	    // returns a function that takes an array and
	    // uses its elements as the args to  the original
	    // function
	    splat: function(fun) {
	      return function(array) {
	        return fun.apply(this, array);
	      };
	    },

	    // Takes a function expecting an array and returns
	    // a function that takes varargs and wraps all
	    // in an array that is passed to the original function.
	    unsplat: function(fun) {
	      var funLength = fun.length;

	      if (funLength < 1) {
	        return fun;
	      }
	      else if (funLength === 1)  {
	        return function () {
	          return fun.call(this, __slice.call(arguments, 0));
	        };
	      }
	      else {
	        return function () {
	          var numberOfArgs = arguments.length,
	              namedArgs = __slice.call(arguments, 0, funLength - 1),
	              numberOfMissingNamedArgs = Math.max(funLength - numberOfArgs - 1, 0),
	              argPadding = new Array(numberOfMissingNamedArgs),
	              variadicArgs = __slice.call(arguments, fun.length - 1);

	          return fun.apply(this, namedArgs.concat(argPadding).concat([variadicArgs]));
	        };
	      }
	    },

	    // Same as unsplat, but the rest of the arguments are collected in the
	    // first parameter, e.g. unsplatl( function (args, callback) { ... ]})
	    unsplatl: function(fun) {
	      var funLength = fun.length;

	      if (funLength < 1) {
	        return fun;
	      }
	      else if (funLength === 1)  {
	        return function () {
	          return fun.call(this, __slice.call(arguments, 0));
	        };
	      }
	      else {
	        return function () {
	          var numberOfArgs = arguments.length,
	              namedArgs = __slice.call(arguments, Math.max(numberOfArgs - funLength + 1, 0)),
	              variadicArgs = __slice.call(arguments, 0, Math.max(numberOfArgs - funLength + 1, 0));

	          return fun.apply(this, [variadicArgs].concat(namedArgs));
	        };
	      }
	    },
	    
	    // map the arguments of a function
	    mapArgs: curry2(baseMapArgs),

	    // Returns a function that returns an array of the calls to each
	    // given function for some arguments.
	    juxt: function(/* funs */) {
	      var funs = arguments;

	      return function(/* args */) {
	        var args = arguments;
	        return _.map(funs, function(f) {
	          return f.apply(this, args);
	        }, this);
	      };
	    },

	    // Returns a function that protects a given function from receiving
	    // non-existy values.  Each subsequent value provided to `fnull` acts
	    // as the default to the original function should a call receive non-existy
	    // values in the defaulted arg slots.
	    fnull: function(fun /*, defaults */) {
	      var defaults = _.rest(arguments);

	      return function(/*args*/) {
	        var args = _.toArray(arguments);
	        var sz = _.size(defaults);

	        for(var i = 0; i < sz; i++) {
	          if (!existy(args[i]))
	            args[i] = defaults[i];
	        }

	        return fun.apply(this, args);
	      };
	    },

	    // Flips the first two args of a function
	    flip2: function(fun) {
	      return function(/* args */) {
	        var flipped = __slice.call(arguments);
	        flipped[0] = arguments[1];
	        flipped[1] = arguments[0];

	        return fun.apply(this, flipped);
	      };
	    },

	    // Flips an arbitrary number of args of a function
	    flip: function(fun) {
	      return function(/* args */) {
	        var reversed = __reverse.call(arguments);

	        return fun.apply(this, reversed);
	      };
	    },

	    // Takes a method-style function (one which uses `this`) and pushes
	    // `this` into the argument list. The returned function uses its first
	    // argument as the receiver/context of the original function, and the rest
	    // of the arguments are used as the original's entire argument list.
	    functionalize: function(method) {
	      return function(ctx /*, args */) {
	        return method.apply(ctx, _.rest(arguments));
	      };
	    },

	    // Takes a function and pulls the first argument out of the argument
	    // list and into `this` position. The returned function calls the original
	    // with its receiver (`this`) prepending the argument list. The original
	    // is called with a receiver of `null`.
	    methodize: function(func) {
	      return function(/* args */) {
	        return func.apply(null, _.cons(this, arguments));
	      };
	    },
	    
	    k: _.always,
	    t: _.pipeline
	  });
	  
	  _.unsplatr = _.unsplat;
	    
	  // map the arguments of a function, takes the mapping function
	  // first so it can be used as a combinator
	  _.mapArgsWith = curry2(_.flip(baseMapArgs));
	  
	  // Returns function property of object by name, bound to object
	  _.bound = function(obj, fname) {
	    var fn = obj[fname];
	    if (!_.isFunction(fn))
	      throw new TypeError("Expected property to be a function");
	    return _.bind(fn, obj);
	  };

	}).call(this);


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.function.dispatch.js 0.3.0)
	// (c) 2013 Justin Ridgewell
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  // Create quick reference variable for speed.
	  var slice   = Array.prototype.slice;

	  // Mixing in the attempt function
	  // ------------------------

	  _.mixin({
	    // If object is not undefined or null then invoke the named `method` function
	    // with `object` as context and arguments; otherwise, return undefined.
	    attempt: function(object, method) {
	      if (object == null) return void 0;
	      var func = object[method];
	      var args = slice.call(arguments, 2);
	      return _.isFunction(func) ? func.apply(object, args) : void 0;
	    }
	  });

	}).call(this);


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.function.iterators.js 0.3.0)
	// (c) 2013 Michael Fogus and DocumentCloud Inc.
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------
	  
	  var HASNTBEENRUN = {};
	  
	  function unary (fun) {
	    return function (first) {
	      return fun.call(this, first);
	    };
	  }
	  
	  function binary (fun) {
	    return function (first, second) {
	      return fun.call(this, first, second);
	    };
	  }
	  
	  // Mixing in the iterator functions
	  // --------------------------------

	  function foldl (iter, binaryFn, seed) {
	    var state, element;
	    if (seed !== void 0) {
	      state = seed;
	    }
	    else {
	      state = iter();
	    }
	    element = iter();
	    while (element != null) {
	      state = binaryFn.call(element, state, element);
	      element = iter();
	    }
	    return state;
	  }
	  
	  function unfold (seed, unaryFn) {
	    var state = HASNTBEENRUN;
	    return function () {
	      if (state === HASNTBEENRUN) {
	        state = seed;
	      } else if (state != null) {
	        state = unaryFn.call(state, state);
	      }

	      return state;
	    };
	  }
	  
	  // note that the unfoldWithReturn behaves differently than
	  // unfold with respect to the first value returned
	  function unfoldWithReturn (seed, unaryFn) {
	    var state = seed,
	        pair,
	        value;
	    return function () {
	      if (state != null) {
	        pair = unaryFn.call(state, state);
	        value = pair[1];
	        state = value != null ? pair[0] : void 0;
	        return value;
	      }
	      else return void 0;
	    };
	  }

	  function accumulate (iter, binaryFn, initial) {
	    var state = initial;
	    return function () {
	      var element = iter();
	      if (element == null) {
	        return element;
	      }
	      else {
	        if (state === void 0) {
	          state = element;
	        } else {
	          state = binaryFn.call(element, state, element);
	        }
	        
	        return state;
	      }
	    };
	  }
	  
	  function accumulateWithReturn (iter, binaryFn, initial) {
	    var state = initial,
	        stateAndReturnValue,
	        element;
	    return function () {
	      element = iter();
	      if (element == null) {
	        return element;
	      }
	      else {
	        if (state === void 0) {
	          state = element;
	          return state;
	        }
	        else {
	          stateAndReturnValue = binaryFn.call(element, state, element);
	          state = stateAndReturnValue[0];
	          return stateAndReturnValue[1];
	        }
	      }
	    };
	  }
	  
	  function map (iter, unaryFn) {
	    return function() {
	      var element;
	      element = iter();
	      if (element != null) {
	        return unaryFn.call(element, element);
	      } else {
	        return void 0;
	      }
	    };
	  }

	  function mapcat(iter, unaryFn) {
	    var lastIter = null;
	    return function() {
	      var element;
	      var gen;
	      if (lastIter == null) {
	        gen = iter();
	        if (gen == null) {
	          lastIter = null;
	          return void 0;
	        }
	        lastIter = unaryFn.call(gen, gen);
	      }
	      while (element == null) {
	        element = lastIter();
	        if (element == null) {
	          gen = iter();
	          if (gen == null) {
	            lastIter = null;
	            return void 0;
	          }
	          else {
	            lastIter = unaryFn.call(gen, gen);
	          }
	        }
	      }
	      return element;
	    };
	  }

	  function select (iter, unaryPredicateFn) {
	    return function() {
	      var element;
	      element = iter();
	      while (element != null) {
	        if (unaryPredicateFn.call(element, element)) {
	          return element;
	        }
	        element = iter();
	      }
	      return void 0;
	    };
	  }
	  
	  function reject (iter, unaryPredicateFn) {
	    return select(iter, function (something) {
	      return !unaryPredicateFn(something);
	    });
	  }
	  
	  function find (iter, unaryPredicateFn) {
	    return select(iter, unaryPredicateFn)();
	  }

	  function slice (iter, numberToDrop, numberToTake) {
	    var count = 0;
	    while (numberToDrop-- > 0) {
	      iter();
	    }
	    if (numberToTake != null) {
	      return function() {
	        if (++count <= numberToTake) {
	          return iter();
	        } else {
	          return void 0;
	        }
	      };
	    }
	    else return iter;
	  }
	  
	  function drop (iter, numberToDrop) {
	    return slice(iter, numberToDrop == null ? 1 : numberToDrop);
	  }

	  function take (iter, numberToTake) {
	    return slice(iter, 0, numberToTake == null ? 1 : numberToTake);
	  }

	  function List (array) {
	    var index = 0;
	    return function() {
	      return array[index++];
	    };
	  }
	  
	  function cycle(array) {
	    var index = 0,
	        length = array.length;
	    return function() {
	      return array[index++ % length];
	    };
	  }

	  function Tree (array) {
	    var index, myself, state;
	    index = 0;
	    state = [];
	    myself = function() {
	      var element, tempState;
	      element = array[index++];
	      if (element instanceof Array) {
	        state.push({
	          array: array,
	          index: index
	        });
	        array = element;
	        index = 0;
	        return myself();
	      } else if (element === void 0) {
	        if (state.length > 0) {
	          tempState = state.pop();
	          array = tempState.array;
	          index = tempState.index;
	          return myself();
	        } else {
	          return void 0;
	        }
	      } else {
	        return element;
	      }
	    };
	    return myself;
	  }
	  
	  function K (value) {
	    return function () {
	      return value;
	    };
	  }

	  function upRange (from, to, by) {
	    return function () {
	      var was;
	    
	      if (from > to) {
	        return void 0;
	      }
	      else {
	        was = from;
	        from = from + by;
	        return was;
	      }
	    };
	  }

	  function downRange (from, to, by) {
	    return function () {
	      var was;
	    
	      if (from < to) {
	        return void 0;
	      }
	      else {
	        was = from;
	        from = from - by;
	        return was;
	      }
	    };
	  }
	  
	  function range (from, to, by) {
	    if (from == null) {
	      return upRange(1, Infinity, 1);
	    }
	    else if (to == null) {
	      return upRange(from, Infinity, 1);
	    }
	    else if (by == null) {
	      if (from <= to) {
	        return upRange(from, to, 1);
	      }
	      else return downRange(from, to, 1);
	    }
	    else if (by > 0) {
	      return upRange(from, to, by);
	    }
	    else if (by < 0) {
	      return downRange(from, to, Math.abs(by));
	    }
	    else return k(from);
	  }
	  
	  var numbers = unary(range);

	  _.iterators = {
	    accumulate: accumulate,
	    accumulateWithReturn: accumulateWithReturn,
	    foldl: foldl,
	    reduce: foldl,
	    unfold: unfold,
	    unfoldWithReturn: unfoldWithReturn,
	    map: map,
	    mapcat: mapcat,
	    select: select,
	    reject: reject,
	    filter: select,
	    find: find,
	    slice: slice,
	    drop: drop,
	    take: take,
	    List: List,
	    Tree: Tree,
	    constant: K,
	    K: K,
	    numbers: numbers,
	    range: range,
	    cycle: cycle
	  };

	}).call(this, void 0);


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.function.predicates.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	// Establish the root object, `window` in the browser, or `require` it on the server.
	if (true) {
	  _ = module.exports = __webpack_require__(195);
	}

	// Helpers
	// -------


	// Mixing in the predicate functions
	// ---------------------------------

	_.mixin({
	  // A wrapper around instanceof
	  isInstanceOf: function(x, t) { return (x instanceof t); },

	  // An associative object is one where its elements are
	  // accessed via a key or index. (i.e. array and object)
	  isAssociative: function(x) { return _.isArray(x) || _.isObject(x) || _.isArguments(x); },

	  // An indexed object is anything that allows numerical index for
	  // accessing its elements (e.g. arrays and strings). NOTE: Underscore
	  // does not support cross-browser consistent use of strings as array-like
	  // objects, so be wary in IE 8 when using  String objects and IE<8.
	  // on string literals & objects.
	  isIndexed: function(x) { return _.isArray(x) || _.isString(x) || _.isArguments(x); },

	  // A seq is something considered a sequential composite type (i.e. arrays and `arguments`).
	  isSequential: function(x) { return (_.isArray(x)) || (_.isArguments(x)); },

	  // Check if an object is an object literal, since _.isObject(function() {}) === _.isObject([]) === true
	  isPlainObject: function(x) { return _.isObject(x) && x.constructor === Object; },

	  // These do what you think that they do
	  isZero: function(x) { return 0 === x; },
	  isEven: function(x) { return _.isFinite(x) && (x & 1) === 0; },
	  isOdd: function(x) { return _.isFinite(x) && !_.isEven(x); },
	  isPositive: function(x) { return x > 0; },
	  isNegative: function(x) { return x < 0; },
	  isValidDate: function(x) { return _.isDate(x) && !_.isNaN(x.getTime()); },

	  // A numeric is a variable that contains a numeric value, regardless its type
	  // It can be a String containing a numeric value, exponential notation, or a Number object
	  // See here for more discussion: http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric/1830844#1830844
	  isNumeric: function(n) {
	    return !isNaN(parseFloat(n)) && isFinite(n);
	  },

	  // An integer contains an optional minus sign to begin and only the digits 0-9
	  // Objects that can be parsed that way are also considered ints, e.g. "123"
	  // Floats that are mathematically equal to integers are considered integers, e.g. 1.0
	  // See here for more discussion: http://stackoverflow.com/questions/1019515/javascript-test-for-an-integer
	  isInteger: function(i) {
	    return _.isNumeric(i) && i % 1 === 0;
	  },

	  // A float is a numbr that is not an integer.
	  isFloat: function(n) {
	    return _.isNumeric(n) && !_.isInteger(n);
	  },

	  // checks if a string is a valid JSON
	  isJSON: function(str) {
	    try {
	      JSON.parse(str);
	    } catch (e) {
	      return false;
	    }
	    return true;
	  },

	  // Returns true if its arguments are monotonically
	  // increaing values; false otherwise.
	  isIncreasing: function() {
	    var count = _.size(arguments);
	    if (count === 1) return true;
	    if (count === 2) return arguments[0] < arguments[1];

	    for (var i = 1; i < count; i++) {
	      if (arguments[i-1] >= arguments[i]) {
	        return false;
	      }
	    }

	    return true;
	  },

	  // Returns true if its arguments are monotonically
	  // decreaing values; false otherwise.
	  isDecreasing: function() {
	    var count = _.size(arguments);
	    if (count === 1) return true;
	    if (count === 2) return arguments[0] > arguments[1];

	    for (var i = 1; i < count; i++) {
	      if (arguments[i-1] <= arguments[i]) {
	        return false;
	      }
	    }

	    return true;
	  }
	});


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.object.builders.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  // Create quick reference variables for speed access to core prototypes.
	  var slice   = Array.prototype.slice,
	      concat  = Array.prototype.concat;

	  var existy = function(x) { return x != null; };
	  var truthy = function(x) { return (x !== false) && existy(x); };
	  var isAssociative = function(x) { return _.isArray(x) || _.isObject(x); };
	  var curry2 = function(fun) {
	    return function(last) {
	      return function(first) {
	        return fun(first, last);
	      };
	    };
	  };

	  // Mixing in the object builders
	  // ----------------------------

	  _.mixin({
	    // Merges two or more objects starting with the left-most and
	    // applying the keys right-word
	    // {any:any}* -> {any:any}
	    merge: function(/* objs */){
	      var dest = _.some(arguments) ? {} : null;

	      if (truthy(dest)) {
	        _.extend.apply(null, concat.call([dest], _.toArray(arguments)));
	      }

	      return dest;
	    },

	    // Takes an object and another object of strings to strings where the second
	    // object describes the key renaming to occur in the first object.
	    renameKeys: function(obj, kobj) {
	      return _.reduce(kobj, function(o, nu, old) {
	        if (existy(obj[old])) {
	          o[nu] = obj[old];
	          return o;
	        }
	        else
	          return o;
	      },
	      _.omit.apply(null, concat.call([obj], _.keys(kobj))));
	    },

	    // Snapshots an object deeply. Based on the version by
	    // [Keith Devens](http://keithdevens.com/weblog/archive/2007/Jun/07/javascript.clone)
	    // until we can find a more efficient and robust way to do it.
	    snapshot: function(obj) {
	      if(obj == null || typeof(obj) != 'object') {
	        return obj;
	      }

	      var temp = new obj.constructor();

	      for(var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          temp[key] = _.snapshot(obj[key]);
	        }
	      }

	      return temp;
	    },

	    // Updates the value at any depth in a nested object based on the
	    // path described by the keys given.  The function provided is supplied
	    // the current value and is expected to return a value for use as the
	    // new value.  If no keys are provided, then the object itself is presented
	    // to the given function.
	    updatePath: function(obj, fun, ks, defaultValue) {
	      if (!isAssociative(obj)) throw new TypeError("Attempted to update a non-associative object.");
	      if (!existy(ks)) return fun(obj);

	      var deepness = _.isArray(ks);
	      var keys     = deepness ? ks : [ks];
	      var ret      = deepness ? _.snapshot(obj) : _.clone(obj);
	      var lastKey  = _.last(keys);
	      var target   = ret;

	      _.each(_.initial(keys), function(key) {
	        if (defaultValue && !_.has(target, key)) {
	          target[key] = _.clone(defaultValue);
	        }
	        target = target[key];
	      });

	      target[lastKey] = fun(target[lastKey]);
	      return ret;
	    },

	    // Sets the value at any depth in a nested object based on the
	    // path described by the keys given.
	    setPath: function(obj, value, ks, defaultValue) {
	      if (!existy(ks)) throw new TypeError("Attempted to set a property at a null path.");

	      return _.updatePath(obj, function() { return value; }, ks, defaultValue);
	    },

	    // Returns an object where each element of an array is keyed to
	    // the number of times that it occurred in said array.
	    frequencies: curry2(_.countBy)(_.identity)
	  });

	}).call(this);


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.object.selectors.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  // Create quick reference variables for speed access to core prototypes.
	  var concat  = Array.prototype.concat;
	  var ArrayProto = Array.prototype;
	  var slice = ArrayProto.slice;

	  // Will take a path like 'element[0][1].subElement["Hey!.What?"]["[hey]"]'
	  // and return ["element", "0", "1", "subElement", "Hey!.What?", "[hey]"]
	  function keysFromPath(path) {
	    // from http://codereview.stackexchange.com/a/63010/8176
	    /**
	     * Repeatedly capture either:
	     * - a bracketed expression, discarding optional matching quotes inside, or
	     * - an unbracketed expression, delimited by a dot or a bracket.
	     */
	    var re = /\[("|')(.+)\1\]|([^.\[\]]+)/g;

	    var elements = [];
	    var result;
	    while ((result = re.exec(path)) !== null) {
	      elements.push(result[2] || result[3]);
	    }
	    return elements;
	  }

	  // Mixing in the object selectors
	  // ------------------------------

	  _.mixin({
	    // Returns a function that will attempt to look up a named field
	    // in any object that it's given.
	    accessor: function(field) {
	      return function(obj) {
	        return (obj && obj[field]);
	      };
	    },

	    // Given an object, returns a function that will attempt to look up a field
	    // that it's given.
	    dictionary: function (obj) {
	      return function(field) {
	        return (obj && field && obj[field]);
	      };
	    },

	    // Like `_.pick` except that it takes an array of keys to pick.
	    selectKeys: function (obj, ks) {
	      return _.pick.apply(null, concat.call([obj], ks));
	    },

	    // Returns the key/value pair for a given property in an object, undefined if not found.
	    kv: function(obj, key) {
	      if (_.has(obj, key)) {
	        return [key, obj[key]];
	      }

	      return void 0;
	    },

	    // Gets the value at any depth in a nested object based on the
	    // path described by the keys given. Keys may be given as an array
	    // or as a dot-separated string.
	    getPath: function getPath (obj, ks) {
	      ks = typeof ks == "string" ? keysFromPath(ks) : ks;

	      var i = -1, length = ks.length;

	      // If the obj is null or undefined we have to break as
	      // a TypeError will result trying to access any property
	      // Otherwise keep incrementally access the next property in
	      // ks until complete
	      while (++i < length && obj != null) {
	        obj = obj[ks[i]];
	      }
	      return i === length ? obj : void 0;
	    },

	    // Returns a boolean indicating whether there is a property
	    // at the path described by the keys given
	    hasPath: function hasPath (obj, ks) {
	      ks = typeof ks == "string" ? keysFromPath(ks) : ks;

	      var i = -1, length = ks.length;
	      while (++i < length && _.isObject(obj)) {
	        if (ks[i] in obj) {
	          obj = obj[ks[i]];
	        } else {
	          return false;
	        }
	      }
	      return i === length;
	    },

	    keysFromPath: keysFromPath,

	    pickWhen: function(obj, pred) {
	      var copy = {};

	      _.each(obj, function(value, key) {
	        if (pred(obj[key])) copy[key] = obj[key];
	      });

	      return copy;
	    },

	    omitWhen: function(obj, pred) {
	      return _.pickWhen(obj, function(e) { return !pred(e); });
	    }

	  });

	}).call(this);


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.util.existential.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	// Establish the root object, `window` in the browser, or `require` it on the server.
	if (true) {
	  _ = module.exports = __webpack_require__(195);
	}
	  
	// Mixing in the truthiness
	// ------------------------

	_.mixin({
	  exists: function(x) { return x != null; },
	  truthy: function(x) { return (x !== false) && _.exists(x); },
	  falsey: function(x) { return !_.truthy(x); },
	  not:    function(b) { return !b; },
	  firstExisting: function() {
	    for (var i = 0; i < arguments.length; i++) {
	      if (arguments[i] != null) return arguments[i];
	    }
	  }
	});


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.function.arity.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Setup for variadic operators
	  // ----------------------------

	  // Turn a binary math operator into a variadic operator
	  function variadicMath(operator) {
	    return variaderize(function(numbersToOperateOn) {
	      return _.reduce(numbersToOperateOn, operator);
	    });
	  }

	  // Turn a binary comparator into a variadic comparator
	  function variadicComparator(comparator) {
	    return variaderize(function(itemsToCompare) {
	      var result;

	      for (var i = 0; i < itemsToCompare.length - 1; i++) {
	        result = comparator(itemsToCompare[i], itemsToCompare[i + 1]);
	        if (result === false) return result;
	      }

	      return result;
	    });
	  }
	  
	  // Converts a unary function that operates on an array into one that also works with a variable number of arguments
	  function variaderize(func) {
	    return function (args) {
	      var allArgs = isArrayLike(args) ? args : arguments;
	      return func(allArgs);
	    };
	  }

	  function isArrayLike(obj) {
	    return obj != null && typeof obj.length === "number";
	  }

	  // Turn a boolean-returning function into one with the opposite meaning
	  function invert(fn) {
	    return function() {
	      return !fn.apply(this, arguments);
	    };
	  }

	  // Basic math operators
	  function add(x, y) {
	    return x + y;
	  }

	  function sub(x, y) {
	    return x - y;
	  }

	  function mul(x, y) {
	    return x * y;
	  }

	  function div(x, y) {
	    return x / y;
	  }

	  function mod(x, y) {
	    return x % y;
	  }

	  function inc(x) {
	    return ++x;
	  }

	  function dec(x) {
	    return --x;
	  }

	  function neg(x) {
	    return -x;
	  }

	  // Bitwise operators
	  function bitwiseAnd(x, y) {
	    return x & y;
	  }

	  function bitwiseOr(x, y) {
	    return x | y;
	  }

	  function bitwiseXor(x, y) {
	    return x ^ y;
	  }

	  function bitwiseLeft(x, y) {
	    return x << y;
	  }

	  function bitwiseRight(x, y) {
	    return x >> y;
	  }

	  function bitwiseZ(x, y) {
	    return x >>> y;
	  }

	  function bitwiseNot(x) {
	    return ~x;
	  }

	  // Basic comparators
	  function eq(x, y) {
	    return x == y;
	  }

	  function seq(x, y) {
	    return x === y;
	  }

	  // Not
	  function not(x) {
	    return !x;
	  }

	  // Relative comparators
	  function gt(x, y) {
	    return x > y;
	  }

	  function lt(x, y) {
	    return x < y;
	  }

	  function gte(x, y) {
	    return x >= y;
	  }

	  function lte(x, y) {
	    return x <= y;
	  }

	  // Mixing in the operator functions
	  // -----------------------------

	  _.mixin({
	    add: variadicMath(add),
	    sub: variadicMath(sub),
	    mul: variadicMath(mul),
	    div: variadicMath(div),
	    mod: mod,
	    inc: inc,
	    dec: dec,
	    neg: neg,
	    eq: variadicComparator(eq),
	    seq: variadicComparator(seq),
	    neq: invert(variadicComparator(eq)),
	    sneq: invert(variadicComparator(seq)),
	    not: not,
	    gt: variadicComparator(gt),
	    lt: variadicComparator(lt),
	    gte: variadicComparator(gte),
	    lte: variadicComparator(lte),
	    bitwiseAnd: variadicMath(bitwiseAnd),
	    bitwiseOr: variadicMath(bitwiseOr),
	    bitwiseXor: variadicMath(bitwiseXor),
	    bitwiseNot: bitwiseNot,
	    bitwiseLeft: variadicMath(bitwiseLeft),
	    bitwiseRight: variadicMath(bitwiseRight),
	    bitwiseZ: variadicMath(bitwiseZ)
	  });
	}).call(this);


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.util.strings.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `require` it on the server.
	  if (true) {
	    _ = module.exports = __webpack_require__(195);
	  }

	  // Helpers
	  // -------

	  // No reason to create regex more than once
	  var plusRegex = /\+/g;
	  var spaceRegex = /\%20/g;
	  var bracketRegex = /(?:([^\[]+))|(?:\[(.*?)\])/g;

	  var urlDecode = function(s) {
	    return decodeURIComponent(s.replace(plusRegex, '%20'));
	  };
	  var urlEncode = function(s) {
	    return encodeURIComponent(s).replace(spaceRegex, '+');
	  };

	  var buildParams = function(prefix, val, top) {
	    if (_.isUndefined(top)) top = true;
	    if (_.isArray(val)) {
	      return _.map(val, function(value, key) {
	        return buildParams(top ? key : prefix + '[]', value, false);
	      }).join('&');
	    } else if (_.isObject(val)) {
	      return _.map(val, function(value, key) {
	        return buildParams(top ? key : prefix + '[' + key + ']', value, false);
	      }).join('&');
	    } else {
	      return urlEncode(prefix) + '=' + urlEncode(val);
	    }
	  };

	  // Mixing in the string utils
	  // ----------------------------

	  _.mixin({
	    // Explodes a string into an array of chars
	    explode: function(s) {
	      return s.split('');
	    },

	    // Parses a query string into a hash
	    fromQuery: function(str) {
	      var parameters = str.split('&'),
	          obj = {},
	          parameter,
	          key,
	          match,
	          lastKey,
	          subKey,
	          depth;

	      // Iterate over key/value pairs
	      _.each(parameters, function(parameter) {
	        parameter = parameter.split('=');
	        key = urlDecode(parameter[0]);
	        lastKey = key;
	        depth = obj;

	        // Reset so we don't have issues when matching the same string
	        bracketRegex.lastIndex = 0;

	        // Attempt to extract nested values
	        while ((match = bracketRegex.exec(key)) !== null) {
	          if (!_.isUndefined(match[1])) {

	            // If we're at the top nested level, no new object needed
	            subKey = match[1];

	          } else {

	            // If we're at a lower nested level, we need to step down, and make
	            // sure that there is an object to place the value into
	            subKey = match[2];
	            depth[lastKey] = depth[lastKey] || (subKey ? {} : []);
	            depth = depth[lastKey];
	          }

	          // Save the correct key as a hash or an array
	          lastKey = subKey || _.size(depth);
	        }

	        // Assign value to nested object
	        depth[lastKey] = urlDecode(parameter[1]);
	      });

	      return obj;
	    },

	    // Implodes and array of chars into a string
	    implode: function(a) {
	      return a.join('');
	    },

	    // Converts a string to camel case
	    camelCase : function( string ){
	      return  string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
	    },

	    // Converts camel case to dashed (opposite of _.camelCase)
	    toDash : function( string ){
	      string = string.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
	      // remove first dash
	      return  ( string.charAt( 0 ) == '-' ) ? string.substr(1) : string;
	    },

	    // Creates a query string from a hash
	    toQuery: function(obj) {
	      return buildParams('', obj);
	    },

	    // Reports whether a string contains a search string.
	    strContains: function(str, search) {
	      if (typeof str != 'string') throw new TypeError;
	      return (str.indexOf(search) != -1);
	    }

	  });
	}).call(this);


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// Underscore-contrib (underscore.util.trampolines.js 0.3.0)
	// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
	// Underscore-contrib may be freely distributed under the MIT license.

	// Establish the root object, `window` in the browser, or `require` it on the server.
	if (true) {
	  _ = module.exports = __webpack_require__(195);
	}

	// Mixing in the truthiness
	// ------------------------

	_.mixin({
	  done: function(value) {
	    var ret = _(value);
	    ret.stopTrampoline = true;
	    return ret;
	  },

	  trampoline: function(fun /*, args */) {
	    var result = fun.apply(fun, _.rest(arguments));

	    while (_.isFunction(result)) {
	      result = result();
	      if ((result instanceof _) && (result.stopTrampoline)) break;
	    }

	    return result.value();
	  }
	});


/***/ },
/* 209 */
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
	    module.exports = Rivets.factory(__webpack_require__(192));
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(192)], __WEBPACK_AMD_DEFINE_RESULT__ = function(sightglass) {
	      return this.rivets = Rivets.factory(sightglass);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    this.rivets = Rivets.factory(sightglass);
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(210)(module)))

/***/ },
/* 210 */
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
/* 211 */
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
/* 212 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  range: {
	    begin: '0',
	    end: '' + new Date().getFullYear()
	  }
	};

/***/ },
/* 213 */
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

	    var t = undefined;
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
/* 214 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var images = Array.from(document.querySelectorAll('img[src^="/images"], img[src*="_posts"]'));

	  console.info(images.length + ' replaced images');

	  images.forEach(function (image) {
	    image.src = ~image.src.indexOf('_posts') ? "{{site.baseurl}}" + image.src.replace(/.+_posts/g, '/images') : "{{site.baseurl}}" + image.src.replace('http://leeds-ebooks.github.io', '');
	  });
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var div = (0, _util.$)('.hero');

	  if (div) {
	    var srcs = ['{{ site.data.heroes | map: "src" | join: "', '" }}'],
	        src = _underscoreContrib2.default.sample(srcs);

	    div.style.backgroundImage = 'url("' + (src.startsWith('http') ? '' : '{{ site.baseurl }}/images/') + src + '")';
	  }
	};

	var _underscoreContrib = __webpack_require__(193);

	var _underscoreContrib2 = _interopRequireDefault(_underscoreContrib);

	var _util = __webpack_require__(216);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$$ = exports.$ = undefined;

	var _underscoreContrib = __webpack_require__(193);

	var _underscoreContrib2 = _interopRequireDefault(_underscoreContrib);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = exports.$ = document.querySelector.bind(document);
	var $$ = exports.$$ = _underscoreContrib2.default.compose(Array.from, document.querySelectorAll.bind(document));

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rivets = __webpack_require__(209);

	var _rivets2 = _interopRequireDefault(_rivets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Object.assign(_rivets2.default.formatters, {
	  matchesRange: function matchesRange(range, begin, end) {
	    var isRange = range.includes('-'),
	        min = parseInt(isRange ? range.split('-')[0] : range, 10),
	        max = parseInt(isRange ? range.split('-')[1] : range, 10),
	        b = parseInt(begin, 10),
	        e = parseInt(end, 10);

	    if (b <= min && max <= e) return true;else return false;
	  },

	  toBC: {
	    read: function read(val) {
	      var int = parseInt(val, 10);
	      return int < 0 ? Math.abs(int) + ' BC' : val + ' AD';
	    },
	    publish: function publish(val) {
	      return val.includes('BC') ? '' + (0 - parseInt(val, 10)) : '' + parseInt(val, 10);
	    }
	  }
	});

/***/ },
/* 218 */
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
/* 219 */
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
/* 220 */
/***/ function(module, exports) {

	/* eslint-disable */

	module.exports = [
	  {% for hero in site.data.heroes %}
	    {% if hero.src contains "http://" or hero.src contains "https://" %}
	    {
	      src: '{{ hero.src }}',
	      w: {{ hero.w }},
	      h: {{ hero.h }},
	      title: "{{ hero.title | replace: '"', ''' }}"
	    },
	    {% else %}
	    {
	      src: '{{ site.baseurl }}/images/{{ hero.src }}',
	      w: {{ hero.w }},
	      h: {{ hero.h }},
	      title: "{{ hero.title | replace: '"', ''' }}"
	    },
	    {% endif %}
	  {% endfor %}
	]


/***/ },
/* 221 */
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

	var _util = __webpack_require__(216);

	var _lazy = __webpack_require__(222);

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
/* 222 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(223).setImmediate, __webpack_require__(223).clearImmediate))

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(190).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(223).setImmediate, __webpack_require__(223).clearImmediate))

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {

	/*!
	 * imagesLoaded v4.0.0
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	( function( window, factory ) { 'use strict';
	  // universal module definition

	  /*global define: false, module: false, require: false */

	  if ( typeof define == 'function' && define.amd ) {
	    // AMD
	    define( [
	      'eventEmitter/EventEmitter'
	    ], function( EventEmitter ) {
	      return factory( window, EventEmitter );
	    });
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      __webpack_require__(225)
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EventEmitter
	    );
	  }

	})( window,

	// --------------------------  factory -------------------------- //

	function factory( window, EventEmitter ) {

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

	ImagesLoaded.prototype = Object.create( EventEmitter.prototype );

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
	  this.emit( 'progress', this, image, elem );
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
	  this.emit( eventName, this );
	  this.emit( 'always', this );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};

	// --------------------------  -------------------------- //

	function LoadingImage( img ) {
	  this.img = img;
	}

	LoadingImage.prototype = Object.create( EventEmitter.prototype );

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
	  this.emit( 'progress', this, this.img, message );
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
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	};

	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emit( 'progress', this, this.element, message );
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
/* 225 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {

	/*!
	 * EventEmitter v4.2.11 - git.io/ee
	 * Unlicense - http://unlicense.org/
	 * Oliver Caldwell - http://oli.me.uk/
	 * @preserve
	 */

	;(function () {
	    'use strict';

	    /**
	     * Class for managing events.
	     * Can be extended to provide event functionality in other classes.
	     *
	     * @class EventEmitter Manages event registering and emitting.
	     */
	    function EventEmitter() {}

	    // Shortcuts to improve speed and size
	    var proto = EventEmitter.prototype;
	    var exports = this;
	    var originalGlobalValue = exports.EventEmitter;

	    /**
	     * Finds the index of the listener for the event in its storage array.
	     *
	     * @param {Function[]} listeners Array of listeners to search through.
	     * @param {Function} listener Method to look for.
	     * @return {Number} Index of the specified listener, -1 if not found
	     * @api private
	     */
	    function indexOfListener(listeners, listener) {
	        var i = listeners.length;
	        while (i--) {
	            if (listeners[i].listener === listener) {
	                return i;
	            }
	        }

	        return -1;
	    }

	    /**
	     * Alias a method while keeping the context correct, to allow for overwriting of target method.
	     *
	     * @param {String} name The name of the target method.
	     * @return {Function} The aliased method
	     * @api private
	     */
	    function alias(name) {
	        return function aliasClosure() {
	            return this[name].apply(this, arguments);
	        };
	    }

	    /**
	     * Returns the listener array for the specified event.
	     * Will initialise the event object and listener arrays if required.
	     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	     * Each property in the object response is an array of listener functions.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Function[]|Object} All listener functions for the event.
	     */
	    proto.getListeners = function getListeners(evt) {
	        var events = this._getEvents();
	        var response;
	        var key;

	        // Return a concatenated array of all matching events if
	        // the selector is a regular expression.
	        if (evt instanceof RegExp) {
	            response = {};
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    response[key] = events[key];
	                }
	            }
	        }
	        else {
	            response = events[evt] || (events[evt] = []);
	        }

	        return response;
	    };

	    /**
	     * Takes a list of listener objects and flattens it into a list of listener functions.
	     *
	     * @param {Object[]} listeners Raw listener objects.
	     * @return {Function[]} Just the listener functions.
	     */
	    proto.flattenListeners = function flattenListeners(listeners) {
	        var flatListeners = [];
	        var i;

	        for (i = 0; i < listeners.length; i += 1) {
	            flatListeners.push(listeners[i].listener);
	        }

	        return flatListeners;
	    };

	    /**
	     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Object} All listener functions for an event in an object.
	     */
	    proto.getListenersAsObject = function getListenersAsObject(evt) {
	        var listeners = this.getListeners(evt);
	        var response;

	        if (listeners instanceof Array) {
	            response = {};
	            response[evt] = listeners;
	        }

	        return response || listeners;
	    };

	    /**
	     * Adds a listener function to the specified event.
	     * The listener will not be added if it is a duplicate.
	     * If the listener returns true then it will be removed after it is called.
	     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListener = function addListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var listenerIsWrapped = typeof listener === 'object';
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	                listeners[key].push(listenerIsWrapped ? listener : {
	                    listener: listener,
	                    once: false
	                });
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of addListener
	     */
	    proto.on = alias('addListener');

	    /**
	     * Semi-alias of addListener. It will add a listener that will be
	     * automatically removed after its first execution.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addOnceListener = function addOnceListener(evt, listener) {
	        return this.addListener(evt, {
	            listener: listener,
	            once: true
	        });
	    };

	    /**
	     * Alias of addOnceListener.
	     */
	    proto.once = alias('addOnceListener');

	    /**
	     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	     * You need to tell it what event names should be matched by a regex.
	     *
	     * @param {String} evt Name of the event to create.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvent = function defineEvent(evt) {
	        this.getListeners(evt);
	        return this;
	    };

	    /**
	     * Uses defineEvent to define multiple events.
	     *
	     * @param {String[]} evts An array of event names to define.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvents = function defineEvents(evts) {
	        for (var i = 0; i < evts.length; i += 1) {
	            this.defineEvent(evts[i]);
	        }
	        return this;
	    };

	    /**
	     * Removes a listener function from the specified event.
	     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to remove the listener from.
	     * @param {Function} listener Method to remove from the event.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListener = function removeListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var index;
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                index = indexOfListener(listeners[key], listener);

	                if (index !== -1) {
	                    listeners[key].splice(index, 1);
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of removeListener
	     */
	    proto.off = alias('removeListener');

	    /**
	     * Adds listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	     * You can also pass it a regular expression to add the array of listeners to all events that match it.
	     * Yeah, this function does quite a bit. That's probably a bad thing.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListeners = function addListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(false, evt, listeners);
	    };

	    /**
	     * Removes listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be removed.
	     * You can also pass it a regular expression to remove the listeners from all events that match it.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListeners = function removeListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(true, evt, listeners);
	    };

	    /**
	     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	     * The first argument will determine if the listeners are removed (true) or added (false).
	     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be added/removed.
	     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	     *
	     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	        var i;
	        var value;
	        var single = remove ? this.removeListener : this.addListener;
	        var multiple = remove ? this.removeListeners : this.addListeners;

	        // If evt is an object then pass each of its properties to this method
	        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
	            for (i in evt) {
	                if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                    // Pass the single listener straight through to the singular method
	                    if (typeof value === 'function') {
	                        single.call(this, i, value);
	                    }
	                    else {
	                        // Otherwise pass back to the multiple function
	                        multiple.call(this, i, value);
	                    }
	                }
	            }
	        }
	        else {
	            // So evt must be a string
	            // And listeners must be an array of listeners
	            // Loop over it and pass each one to the multiple method
	            i = listeners.length;
	            while (i--) {
	                single.call(this, evt, listeners[i]);
	            }
	        }

	        return this;
	    };

	    /**
	     * Removes all listeners from a specified event.
	     * If you do not specify an event then all listeners will be removed.
	     * That means every event will be emptied.
	     * You can also pass a regex to remove all events that match it.
	     *
	     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeEvent = function removeEvent(evt) {
	        var type = typeof evt;
	        var events = this._getEvents();
	        var key;

	        // Remove different things depending on the state of evt
	        if (type === 'string') {
	            // Remove all listeners for the specified event
	            delete events[evt];
	        }
	        else if (evt instanceof RegExp) {
	            // Remove all events matching the regex.
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    delete events[key];
	                }
	            }
	        }
	        else {
	            // Remove all listeners in all events
	            delete this._events;
	        }

	        return this;
	    };

	    /**
	     * Alias of removeEvent.
	     *
	     * Added to mirror the node API.
	     */
	    proto.removeAllListeners = alias('removeEvent');

	    /**
	     * Emits an event of your choice.
	     * When emitted, every listener attached to that event will be executed.
	     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	     * So they will not arrive within the array on the other side, they will be separate.
	     * You can also pass a regular expression to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {Array} [args] Optional array of arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emitEvent = function emitEvent(evt, args) {
	        var listenersMap = this.getListenersAsObject(evt);
	        var listeners;
	        var listener;
	        var i;
	        var key;
	        var response;

	        for (key in listenersMap) {
	            if (listenersMap.hasOwnProperty(key)) {
	                listeners = listenersMap[key].slice(0);
	                i = listeners.length;

	                while (i--) {
	                    // If the listener returns true then it shall be removed from the event
	                    // The function is executed either with a basic call or an apply if there is an args array
	                    listener = listeners[i];

	                    if (listener.once === true) {
	                        this.removeListener(evt, listener.listener);
	                    }

	                    response = listener.listener.apply(this, args || []);

	                    if (response === this._getOnceReturnValue()) {
	                        this.removeListener(evt, listener.listener);
	                    }
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of emitEvent
	     */
	    proto.trigger = alias('emitEvent');

	    /**
	     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {...*} Optional additional arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emit = function emit(evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        return this.emitEvent(evt, args);
	    };

	    /**
	     * Sets the current value to check against when executing listeners. If a
	     * listeners return value matches the one set here then it will be removed
	     * after execution. This value defaults to true.
	     *
	     * @param {*} value The new value to check for when executing listeners.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.setOnceReturnValue = function setOnceReturnValue(value) {
	        this._onceReturnValue = value;
	        return this;
	    };

	    /**
	     * Fetches the current value to check against when executing listeners. If
	     * the listeners return value matches this one then it should be removed
	     * automatically. It will return true by default.
	     *
	     * @return {*|Boolean} The current value to check for or the default, true.
	     * @api private
	     */
	    proto._getOnceReturnValue = function _getOnceReturnValue() {
	        if (this.hasOwnProperty('_onceReturnValue')) {
	            return this._onceReturnValue;
	        }
	        else {
	            return true;
	        }
	    };

	    /**
	     * Fetches the events object and creates one if required.
	     *
	     * @return {Object} The events storage object.
	     * @api private
	     */
	    proto._getEvents = function _getEvents() {
	        return this._events || (this._events = {});
	    };

	    /**
	     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	     *
	     * @return {Function} Non conflicting EventEmitter class.
	     */
	    EventEmitter.noConflict = function noConflict() {
	        exports.EventEmitter = originalGlobalValue;
	        return EventEmitter;
	    };

	    // Expose the class either via AMD, CommonJS or the global object
	    if (typeof define === 'function' && define.amd) {
	        define(function () {
	            return EventEmitter;
	        });
	    }
	    else if (typeof module === 'object' && module.exports){
	        module.exports = EventEmitter;
	    }
	    else {
	        exports.EventEmitter = EventEmitter;
	    }
	}.call(this));

	}.call(window));

/***/ }
/******/ ]);