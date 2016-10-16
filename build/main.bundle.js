/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The Application class is used as an entry point for this ECMAScript 6
	 * application and mimics the Java programming language behavior.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-07
	 */
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _es6TexgenLib = __webpack_require__(1);
	
	var tg = _interopRequireWildcard(_es6TexgenLib);
	
	var _MyOperator = __webpack_require__(16);
	
	var APEX = _interopRequireWildcard(_MyOperator);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Application = function () {
	    function Application() {
	        _classCallCheck(this, Application);
	    }
	
	    _createClass(Application, [{
	        key: 'main',
	        value: function main() {
	            this.createAndShowCanvas();
	            this.logLibraryNameAndVersion();
	            this.logOperatorRegistry();
	        }
	    }, {
	        key: 'createAndShowCanvas',
	        value: function createAndShowCanvas() {
	            var operator = new tg.FillOperator();
	            operator.setFillColor(new tg.Color(0.4, 0.5, 0.6));
	            operator.evaluate();
	
	            var canvas = new tg.Canvas(256, 256);
	            canvas.putImageData(operator.getTexture().getImageData());
	            canvas.appendToHtmlDom();
	
	            var operator2 = new tg.SinePlasmaOperator();
	            operator2.setColor(new tg.Color(1.0, 0.4, 0.8));
	            operator2.evaluate();
	
	            var canvas2 = new tg.Canvas(256, 256);
	            canvas2.putImageData(operator2.getTexture().getImageData());
	            canvas2.appendToHtmlDom();
	
	            var operator3 = new tg.AddOperator();
	            operator3.addParent(operator);
	            operator3.addParent(operator2);
	            operator3.evaluate();
	
	            var canvas3 = new tg.Canvas(256, 256);
	            canvas3.putImageData(operator3.getTexture().getImageData());
	            canvas3.appendToHtmlDom();
	
	            var operator4 = new tg.RandomOperator();
	            operator4.evaluate();
	
	            var canvas4 = new tg.Canvas(256, 256);
	            canvas4.putImageData(operator4.getTexture().getImageData());
	            canvas4.appendToHtmlDom();
	
	            var operator5 = new tg.LogicalOperator();
	            operator5.evaluate();
	
	            var canvas5 = new tg.Canvas(256, 256);
	            canvas5.putImageData(operator5.getTexture().getImageData());
	            canvas5.appendToHtmlDom();
	
	            var operator6 = new APEX.MyOperator();
	            operator6.evaluate();
	
	            var canvas6 = new tg.Canvas(256, 256);
	            canvas6.putImageData(operator6.getTexture().getImageData());
	            canvas6.appendToHtmlDom();
	
	            var operator7 = new tg.CellOperator();
	            operator7.evaluate();
	
	            var canvas7 = new tg.Canvas(256, 256);
	            canvas7.putImageData(operator7.getTexture().getImageData());
	            canvas7.appendToHtmlDom();
	
	            var operator8 = new tg.DistortOperator();
	            operator8.addParent(operator7);
	            operator8.addParent(operator2);
	
	            operator7.setLinearCombinationType(1);
	
	            var op9 = new tg.ColorizeOperator();
	            op9.addParent(operator8);
	            op9.evaluate();
	
	            var canvas8 = new tg.Canvas(256, 256);
	            canvas8.putImageData(op9.getTexture().getImageData());
	            canvas8.appendToHtmlDom();
	        }
	    }, {
	        key: 'logLibraryNameAndVersion',
	        value: function logLibraryNameAndVersion() {
	            console.log('name      : ' + tg.distribution.baseName);
	            console.log('version   : ' + tg.distribution.version);
	            console.log('full name : ' + tg.distribution.fullName);
	        }
	    }, {
	        key: 'logOperatorRegistry',
	        value: function logOperatorRegistry() {
	            var operatorRegistry = tg.OperatorRegistry.getInstance();
	            var types = operatorRegistry.getRegisteredTypes().toString();
	            console.log('registered types: ' + types);
	        }
	    }]);
	
	    return Application;
	}();
	
	// Run the application
	
	
	new Application().main();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * This module exports all classes, methods and objects that are necessary in
	 * order to work with the texture generator library. Hence it should be
	 * sufficient to import only this single module in order to work with the
	 * library.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-07
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Texture = __webpack_require__(2);
	
	Object.defineProperty(exports, 'Texture', {
	    enumerable: true,
	    get: function get() {
	        return _Texture.Texture;
	    }
	});
	
	var _Canvas = __webpack_require__(4);
	
	Object.defineProperty(exports, 'Canvas', {
	    enumerable: true,
	    get: function get() {
	        return _Canvas.Canvas;
	    }
	});
	
	var _FillOperator = __webpack_require__(5);
	
	Object.defineProperty(exports, 'FillOperator', {
	    enumerable: true,
	    get: function get() {
	        return _FillOperator.FillOperator;
	    }
	});
	
	var _Color = __webpack_require__(3);
	
	Object.defineProperty(exports, 'Color', {
	    enumerable: true,
	    get: function get() {
	        return _Color.Color;
	    }
	});
	
	var _SinePlasmaOperator = __webpack_require__(8);
	
	Object.defineProperty(exports, 'SinePlasmaOperator', {
	    enumerable: true,
	    get: function get() {
	        return _SinePlasmaOperator.SinePlasmaOperator;
	    }
	});
	
	var _OperatorRegistry = __webpack_require__(7);
	
	Object.defineProperty(exports, 'OperatorRegistry', {
	    enumerable: true,
	    get: function get() {
	        return _OperatorRegistry.OperatorRegistry;
	    }
	});
	
	var _ColorizeOperator = __webpack_require__(9);
	
	Object.defineProperty(exports, 'ColorizeOperator', {
	    enumerable: true,
	    get: function get() {
	        return _ColorizeOperator.ColorizeOperator;
	    }
	});
	
	var _DistortOperator = __webpack_require__(10);
	
	Object.defineProperty(exports, 'DistortOperator', {
	    enumerable: true,
	    get: function get() {
	        return _DistortOperator.DistortOperator;
	    }
	});
	
	var _AddOperator = __webpack_require__(11);
	
	Object.defineProperty(exports, 'AddOperator', {
	    enumerable: true,
	    get: function get() {
	        return _AddOperator.AddOperator;
	    }
	});
	
	var _LogicalOperator = __webpack_require__(12);
	
	Object.defineProperty(exports, 'LogicalOperator', {
	    enumerable: true,
	    get: function get() {
	        return _LogicalOperator.LogicalOperator;
	    }
	});
	
	var _RandomOperator = __webpack_require__(13);
	
	Object.defineProperty(exports, 'RandomOperator', {
	    enumerable: true,
	    get: function get() {
	        return _RandomOperator.RandomOperator;
	    }
	});
	
	var _AbstractOperator = __webpack_require__(6);
	
	Object.defineProperty(exports, 'AbstractOperator', {
	    enumerable: true,
	    get: function get() {
	        return _AbstractOperator.AbstractOperator;
	    }
	});
	
	var _CellOperator = __webpack_require__(15);
	
	Object.defineProperty(exports, 'CellOperator', {
	    enumerable: true,
	    get: function get() {
	        return _CellOperator.CellOperator;
	    }
	});
	var distribution = exports.distribution = {
	    baseName: 'es6-texgen-lib',
	    version: '0.1.1',
	    fullName: 'es6-texgen-lib-v0.1.1'
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The Texture class represents a texture and basic operations on textures like
	 * clearing the texture with a solid color or setting single pixels.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-08
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Texture = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Color = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Texture = exports.Texture = function () {
	    function Texture() {
	        _classCallCheck(this, Texture);
	
	        this.texture = new Float32Array(256 * 256 * 4);
	    }
	
	    _createClass(Texture, [{
	        key: 'setPixel',
	        value: function setPixel(x, y, color) {
	            x = (x | 0) % 256;
	            y = (y | 0) % 256;
	            this.texture[(x + y * 256) * 4] = color.r;
	            this.texture[(x + y * 256) * 4 + 1] = color.g;
	            this.texture[(x + y * 256) * 4 + 2] = color.b;
	            this.texture[(x + y * 256) * 4 + 3] = color.a;
	        }
	    }, {
	        key: 'getPixel',
	        value: function getPixel(x, y) {
	            x = (x | 0) % 256;
	            y = (y | 0) % 256;
	            return new _Color.Color(this.texture[(x + y * 256) * 4], this.texture[(x + y * 256) * 4 + 1], this.texture[(x + y * 256) * 4 + 2], this.texture[(x + y * 256) * 4 + 3]);
	        }
	    }, {
	        key: 'fill',
	        value: function fill(color) {
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    this.setPixel(x, y, color);
	                }
	            }
	        }
	    }, {
	        key: 'getImageData',
	        value: function getImageData() {
	            var imageData = new ImageData(256, 256);
	            var data = imageData.data;
	
	            for (var i = 0; i < 256 * 256 * 4; i++) {
	                data[i] = this.texture[i] * 255;
	            }
	
	            return imageData;
	        }
	    }]);

	    return Texture;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * The Color class represents a RGBA color.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-08
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Color = exports.Color = function () {
	    function Color(r) {
	        var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
	        var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : r;
	        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	
	        _classCallCheck(this, Color);
	
	        this.r = r;
	        this.g = g;
	        this.b = b;
	        this.a = a;
	    }
	
	    _createClass(Color, [{
	        key: 'add',
	        value: function add(color) {
	            return new Color(this.r + color.r, this.g + color.g, this.b + color.b);
	        }
	    }, {
	        key: 'multiply',
	        value: function multiply(scalar) {
	            return new Color(this.r * scalar, this.g * scalar, this.b * scalar);
	        }
	    }, {
	        key: 'multiplyColor',
	        value: function multiplyColor(color) {
	            return new Color(this.r * color.r, this.g * color.g, this.b * color.b);
	        }
	    }, {
	        key: 'substract',
	        value: function substract(color) {
	            return new Color(this.r - color.r, this.g - color.g, this.b - color.b);
	        }
	    }]);

	    return Color;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * The Canvas class encapsulates a HTML5 canvas.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-08
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Canvas = exports.Canvas = function () {
	    function Canvas(width, height) {
	        _classCallCheck(this, Canvas);
	
	        // Create a canvas
	        this.canvas = document.createElement('canvas');
	        this.canvas.width = width;
	        this.canvas.height = height;
	
	        // Obtain a rendering context
	        this.context = this.canvas.getContext('2d');
	    }
	
	    _createClass(Canvas, [{
	        key: 'putImageData',
	        value: function putImageData(imageData) {
	            this.context.putImageData(imageData, 0, 0);
	        }
	    }, {
	        key: 'appendToHtmlDom',
	        value: function appendToHtmlDom() {
	            // Add the canvas to the html DOM
	            document.body.appendChild(this.canvas);
	        }
	    }]);

	    return Canvas;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The FillOperator class implements an operator that fills a texture with a
	 * solid color.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-08
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FillOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FillOperator = exports.FillOperator = function (_AbstractOperator) {
	    _inherits(FillOperator, _AbstractOperator);
	
	    function FillOperator() {
	        _classCallCheck(this, FillOperator);
	
	        var _this = _possibleConstructorReturn(this, (FillOperator.__proto__ || Object.getPrototypeOf(FillOperator)).call(this));
	
	        _this.fillColor = new _Color.Color(1, 0, 0);
	        return _this;
	    }
	
	    _createClass(FillOperator, [{
	        key: 'process',
	        value: function process() {
	            this.texture.fill(this.fillColor);
	        }
	    }, {
	        key: 'setFillColor',
	        value: function setFillColor(fillColor) {
	            this.fillColor = fillColor;
	        }
	    }]);

	    return FillOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The AbstractOperator class is the base class for all operators.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-08
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AbstractOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Texture = __webpack_require__(2);
	
	var _OperatorRegistry = __webpack_require__(7);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AbstractOperator = exports.AbstractOperator = function () {
	
	    /**
	     * Constructs a new Operator.
	     */
	    function AbstractOperator() {
	        _classCallCheck(this, AbstractOperator);
	
	        this.texture = new _Texture.Texture(256, 256);
	        this.parents = new Array(0);
	
	        _OperatorRegistry.OperatorRegistry.getInstance().register(this.constructor);
	    }
	
	    /**
	     * This method should be overridden in all sub classes in order to specify
	     * the operators behavior.
	     */
	
	
	    _createClass(AbstractOperator, [{
	        key: 'process',
	        value: function process() {}
	        // Do nothing in this abstract method.
	
	
	        /**
	         * This method is used to recursivly process all parents before this
	         * operator is processed.
	         */
	
	    }, {
	        key: 'evaluate',
	        value: function evaluate() {
	            for (var i in this.parents) {
	                this.parents[i].evaluate();
	            }
	            this.process();
	        }
	
	        /**
	         * Adds a parent operator to this operator. Prior to processing this
	         * operator all its parents need to be processed.
	         *
	         * @param parent The operator to be added to the list of parent operators
	         */
	
	    }, {
	        key: 'addParent',
	        value: function addParent(parent) {
	            this.parents.push(parent);
	        }
	
	        /**
	         * Returns the texture object that holds the final result of the evaluation
	         * of this operator after calling the evaluate() method.
	         */
	
	    }, {
	        key: 'getTexture',
	        value: function getTexture() {
	            return this.texture;
	        }
	    }]);

	    return AbstractOperator;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * The OperatorRegistry class is a global registry for operators. It is used for
	 * operator stack serialization and deserialization.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-08
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OperatorRegistry = exports.OperatorRegistry = function () {
	    function OperatorRegistry() {
	        _classCallCheck(this, OperatorRegistry);
	
	        this.registry = {};
	    }
	
	    _createClass(OperatorRegistry, [{
	        key: 'register',
	        value: function register(operatorClass) {
	            this.registry[operatorClass.name] = operatorClass;
	        }
	    }, {
	        key: 'getRegisteredTypes',
	        value: function getRegisteredTypes() {
	            var typeList = new Array(0);
	
	            for (var i in this.registry) {
	                typeList.push(i);
	            }
	
	            return typeList;
	        }
	    }], [{
	        key: 'getInstance',
	        value: function getInstance() {
	            if (OperatorRegistry.instance == null) {
	                OperatorRegistry.instance = new OperatorRegistry();
	            }
	            return OperatorRegistry.instance;
	        }
	    }]);
	
	    return OperatorRegistry;
	}();
	
	OperatorRegistry.instance = null;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The SinePlasmaOperator class implements an operator that fills a texture with
	 * a sine pattern.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-08
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SinePlasmaOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SinePlasmaOperator = exports.SinePlasmaOperator = function (_AbstractOperator) {
	    _inherits(SinePlasmaOperator, _AbstractOperator);
	
	    function SinePlasmaOperator() {
	        _classCallCheck(this, SinePlasmaOperator);
	
	        var _this = _possibleConstructorReturn(this, (SinePlasmaOperator.__proto__ || Object.getPrototypeOf(SinePlasmaOperator)).call(this));
	
	        _this.color = new _Color.Color(1, 0, 0);
	        _this.sinePeriods = 3;
	        _this.cosinePeriods = 3;
	        return _this;
	    }
	
	    _createClass(SinePlasmaOperator, [{
	        key: 'process',
	        value: function process() {
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var f = (Math.sin(2.0 * Math.PI / 256 * x * this.sinePeriods) + Math.cos(2.0 * Math.PI / 256 * y * this.cosinePeriods) + 2) / 4.0;
	
	                    this.texture.setPixel(x, y, new _Color.Color(f * this.color.r, f * this.color.g, f * this.color.b));
	                }
	            }
	        }
	    }, {
	        key: 'setColor',
	        value: function setColor(color) {
	            this.color = color;
	        }
	    }]);

	    return SinePlasmaOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ColorizeOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ColorizeOperator = exports.ColorizeOperator = function (_AbstractOperator) {
	    _inherits(ColorizeOperator, _AbstractOperator);
	
	    function ColorizeOperator() {
	        _classCallCheck(this, ColorizeOperator);
	
	        var _this = _possibleConstructorReturn(this, (ColorizeOperator.__proto__ || Object.getPrototypeOf(ColorizeOperator)).call(this));
	
	        _this.color1 = new _Color.Color(0.3, 0.32, 0.04);
	        _this.color2 = new _Color.Color(0.5, 1.0, 0.8);
	        return _this;
	    }
	
	    _createClass(ColorizeOperator, [{
	        key: 'process',
	        value: function process() {
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var scaleColor = this.parents[0].texture.getPixel(x, y);
	                    var finalColor = this.color2.substract(this.color1).multiplyColor(scaleColor).add(this.color1);
	                    this.texture.setPixel(x, y, finalColor);
	                }
	            }
	        }
	    }]);

	    return ColorizeOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DistortOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DistortOperator = exports.DistortOperator = function (_AbstractOperator) {
	    _inherits(DistortOperator, _AbstractOperator);
	
	    function DistortOperator() {
	        _classCallCheck(this, DistortOperator);
	
	        return _possibleConstructorReturn(this, (DistortOperator.__proto__ || Object.getPrototypeOf(DistortOperator)).apply(this, arguments));
	    }
	
	    _createClass(DistortOperator, [{
	        key: 'process',
	        value: function process() {
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var color2 = this.parents[1].texture.getPixel(x, y);
	                    var i = color2.r * 20;
	                    var color1 = this.parents[0].texture.getPixel(x + i, y + i);
	
	                    var color = color1;
	                    this.texture.setPixel(x, y, color);
	                }
	            }
	        }
	    }]);

	    return DistortOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AddOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddOperator = exports.AddOperator = function (_AbstractOperator) {
	    _inherits(AddOperator, _AbstractOperator);
	
	    function AddOperator() {
	        _classCallCheck(this, AddOperator);
	
	        return _possibleConstructorReturn(this, (AddOperator.__proto__ || Object.getPrototypeOf(AddOperator)).apply(this, arguments));
	    }
	
	    _createClass(AddOperator, [{
	        key: 'process',
	        value: function process() {
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var color1 = this.parents[0].texture.getPixel(x, y);
	                    var color2 = this.parents[1].texture.getPixel(x, y);
	                    var color = color1.add(color2).multiply(0.5);
	                    this.texture.setPixel(x, y, color);
	                }
	            }
	        }
	    }]);

	    return AddOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LogicalOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LogicalOperator = exports.LogicalOperator = function (_AbstractOperator) {
	    _inherits(LogicalOperator, _AbstractOperator);
	
	    function LogicalOperator() {
	        _classCallCheck(this, LogicalOperator);
	
	        return _possibleConstructorReturn(this, (LogicalOperator.__proto__ || Object.getPrototypeOf(LogicalOperator)).apply(this, arguments));
	    }
	
	    _createClass(LogicalOperator, [{
	        key: 'process',
	        value: function process() {
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var color = new _Color.Color((x ^ y) / 255);
	                    this.texture.setPixel(x, y, color);
	                }
	            }
	        }
	    }]);

	    return LogicalOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RandomOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	var _RandomNumberGenerator = __webpack_require__(14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RandomOperator = exports.RandomOperator = function (_AbstractOperator) {
	    _inherits(RandomOperator, _AbstractOperator);
	
	    function RandomOperator() {
	        _classCallCheck(this, RandomOperator);
	
	        return _possibleConstructorReturn(this, (RandomOperator.__proto__ || Object.getPrototypeOf(RandomOperator)).apply(this, arguments));
	    }
	
	    _createClass(RandomOperator, [{
	        key: 'process',
	        value: function process() {
	            var rng = new _RandomNumberGenerator.RandomNumberGenerator();
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var color = new _Color.Color(rng.getInteger() * 256 / 255);
	                    this.texture.setPixel(x, y, color);
	                }
	            }
	        }
	    }]);

	    return RandomOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * The RandomNumberGenerator generates random numbers.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-16
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RandomNumberGenerator = exports.RandomNumberGenerator = function () {
	    function RandomNumberGenerator() {
	        _classCallCheck(this, RandomNumberGenerator);
	
	        this.seed = 6;
	    }
	
	    _createClass(RandomNumberGenerator, [{
	        key: 'getInteger',
	        value: function getInteger() {
	            this.seed = (this.seed * 9301 + 49297) % 233280;
	            return this.seed / 233280;
	        }
	    }]);

	    return RandomNumberGenerator;
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The CellOperator class implements an operator that creates a cellular worley
	 * texture.
	 *
	 * @author jdiemke <johannes.diemke@eventim.de>
	 * @since 2016-10-13
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CellOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AbstractOperator2 = __webpack_require__(6);
	
	var _Color = __webpack_require__(3);
	
	var _RandomNumberGenerator = __webpack_require__(14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellOperator = exports.CellOperator = function (_AbstractOperator) {
	    _inherits(CellOperator, _AbstractOperator);
	
	    function CellOperator() {
	        _classCallCheck(this, CellOperator);
	
	        var _this = _possibleConstructorReturn(this, (CellOperator.__proto__ || Object.getPrototypeOf(CellOperator)).call(this));
	
	        _this.seed = 2;
	        _this.quantity = 66;
	        _this.distributiontype = 0;
	        _this.minimumdistance = 2;
	        _this.linearcombination = 2;
	        _this.metric = 0;
	        _this.mosaic = false;
	        return _this;
	    }
	
	    _createClass(CellOperator, [{
	        key: 'process',
	        value: function process() {
	            this.uniformRandom();
	            this.distBuffer = new Float32Array(256 * 256);
	            var mindist = Number.MAX_VALUE;
	            var maxdist = 0;
	
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var dist = this.distToNearestPoint(x, y, this.points, this.quantity, this.linearcombination, this.metric);
	                    this.distBuffer[x + y * 256] = dist;
	                    if (dist < mindist) mindist = dist;
	                    if (dist > maxdist) maxdist = dist;
	                }
	            }
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    var value = (this.distBuffer[x + y * 256] - mindist) / (maxdist - mindist);
	                    this.texture.setPixel(x, y, new _Color.Color(value));
	                }
	            }
	        }
	    }, {
	        key: 'distToNearestPoint',
	        value: function distToNearestPoint(x, y, points, number, version, metric) {
	            var F = [];
	            F[0] = Number.MAX_VALUE;
	            F[1] = Number.MAX_VALUE;
	            F[2] = Number.MAX_VALUE;
	
	            for (var i in points) {
	                var dist = this.wrapDist(x, y, points[i].x, points[i].y, metric);
	                if (dist < F[0]) {
	                    F[2] = F[1];
	                    F[1] = F[0];
	                    F[0] = dist;
	                } else if (dist < F[1]) {
	                    F[2] = F[1];
	                    F[1] = dist;
	                } else if (dist < F[2]) {
	                    F[2] = dist;
	                }
	            }
	
	            // TODO: different linear combinations
	            if (version == 2) {
	                return F[1];
	            } else {
	                return F[0];
	            }
	        }
	    }, {
	        key: 'wrapDist',
	        value: function wrapDist(x, y, px, py, metric) {
	            var dx = Math.abs(x - px);
	            var dy = Math.abs(y - py);
	            if (dx > 256 / 2) dx = 256 - dx;
	            if (dy > 256 / 2) dy = 256 - dy;
	
	            // TODO: different metrics here
	            return Math.sqrt(dx * dx + dy * dy);
	        }
	    }, {
	        key: 'uniformRandom',
	        value: function uniformRandom() {
	            var rng = new _RandomNumberGenerator.RandomNumberGenerator();
	            this.points = [];
	            for (var i = 0; i < this.quantity; i++) {
	                var i1 = rng.getInteger() * 256;
	                var i2 = rng.getInteger() * 256;
	
	                var point = {
	                    x: i1,
	                    y: i2
	                };
	                this.points.push(point);
	            }
	        }
	    }, {
	        key: 'setLinearCombinationType',
	        value: function setLinearCombinationType(type) {
	            this.linearcombination = type;
	        }
	    }]);

	    return CellOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MyOperator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _es6TexgenLib = __webpack_require__(1);
	
	var APEX = _interopRequireWildcard(_es6TexgenLib);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MyOperator = exports.MyOperator = function (_APEX$AbstractOperato) {
	    _inherits(MyOperator, _APEX$AbstractOperato);
	
	    function MyOperator() {
	        _classCallCheck(this, MyOperator);
	
	        return _possibleConstructorReturn(this, (MyOperator.__proto__ || Object.getPrototypeOf(MyOperator)).apply(this, arguments));
	    }
	
	    _createClass(MyOperator, [{
	        key: 'process',
	        value: function process() {
	            this.texture.fill(new APEX.Color(0.0, 1.0, 0.0));
	        }
	    }]);
	
	    return MyOperator;
	}(APEX.AbstractOperator);

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map