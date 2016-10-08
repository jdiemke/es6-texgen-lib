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
	        }
	    }, {
	        key: 'createAndShowCanvas',
	        value: function createAndShowCanvas() {
	            var operator = new tg.FillOperator();
	            operator.evaluate();
	
	            var canvas = new tg.Canvas(256, 256);
	            canvas.putImageData(operator.getTexture().getImageData());
	            canvas.appendToHtmlDom();
	        }
	    }, {
	        key: 'logLibraryNameAndVersion',
	        value: function logLibraryNameAndVersion() {
	            console.log('name      : ' + tg.distribution.baseName);
	            console.log('version   : ' + tg.distribution.version);
	            console.log('full name : ' + tg.distribution.fullName);
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
	
	var _Canvas = __webpack_require__(3);
	
	Object.defineProperty(exports, 'Canvas', {
	    enumerable: true,
	    get: function get() {
	        return _Canvas.Canvas;
	    }
	});
	
	var _FillOperator = __webpack_require__(4);
	
	Object.defineProperty(exports, 'FillOperator', {
	    enumerable: true,
	    get: function get() {
	        return _FillOperator.FillOperator;
	    }
	});
	var distribution = exports.distribution = {
	    baseName: 'es6-texgen-lib',
	    version: '0.1.0',
	    fullName: 'es6-texgen-lib-v0.1.0'
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Texture = exports.Texture = function () {
	    function Texture() {
	        _classCallCheck(this, Texture);
	
	        this.texture = new Float32Array(256 * 256 * 4);
	    }
	
	    _createClass(Texture, [{
	        key: 'setPixel',
	        value: function setPixel(x, y, r, g, b, a) {
	            this.texture[(x + y * 256) * 4] = r;
	            this.texture[(x + y * 256) * 4 + 1] = g;
	            this.texture[(x + y * 256) * 4 + 2] = b;
	            this.texture[(x + y * 256) * 4 + 3] = a;
	        }
	    }, {
	        key: 'fill',
	        value: function fill(r, g, b, a) {
	            for (var y = 0; y < 256; y++) {
	                for (var x = 0; x < 256; x++) {
	                    this.setPixel(x, y, r, g, b, a);
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
/* 4 */
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
	
	var _AbstractOperator2 = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FillOperator = exports.FillOperator = function (_AbstractOperator) {
	    _inherits(FillOperator, _AbstractOperator);
	
	    function FillOperator() {
	        _classCallCheck(this, FillOperator);
	
	        return _possibleConstructorReturn(this, (FillOperator.__proto__ || Object.getPrototypeOf(FillOperator)).apply(this, arguments));
	    }
	
	    _createClass(FillOperator, [{
	        key: 'process',
	        value: function process() {
	            this.texture.fill(0, 1, 0, 1);
	        }
	    }]);

	    return FillOperator;
	}(_AbstractOperator2.AbstractOperator);

/***/ },
/* 5 */
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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AbstractOperator = exports.AbstractOperator = function () {
	
	    /**
	     * Constructs a new Operator.
	     */
	    function AbstractOperator() {
	        _classCallCheck(this, AbstractOperator);
	
	        this.texture = new _Texture.Texture(256, 256);
	        this.parents = new Array(0);
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

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map