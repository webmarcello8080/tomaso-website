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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) : undefined;
})(this, function (exports, $, Popper) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
      'default': e
    };
  }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.6.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.6.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.6.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.6.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.6.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
      $__default['default'](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default['default'](this._element).off(Util.TRANSITION_END);
      $__default['default'](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.6.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4);
        $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.6.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.6.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.6.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.6.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/components/slogan-block.js":
/*!*******************************************!*\
  !*** ./src/js/components/slogan-block.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  console.log('ddd');
  setInterval(ToggleSlogans, 5000);

  function ToggleSlogans() {
    var $first;
    var $second; //check which one is visible, to fade it out first:

    if ($(".slogan-block-first").is(":visible")) {
      $first = $(".slogan-block-first");
      $second = $(".slogan-block-second");
    } else {
      $first = $(".slogan-block-second");
      $second = $(".slogan-block-first");
    } //fade out the visible panel


    $first.fadeToggle("slow", function () {
      //fade in the invisible panel
      $second.fadeToggle("slow");
    });
  }
});

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_slogan_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slogan-block */ "./src/js/components/slogan-block.js");
/* harmony import */ var _components_slogan_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_slogan_block__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/js/scripts.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\coding\xampp\htdocs\tomaso\web\app\themes\tomaso-theme\src\js\scripts.js */"./src/js/scripts.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UmVmZXJlbmNlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzSUUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc09mZnNldENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kQ29tbW9uT2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaW5jbHVkZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEJvcmRlcnNTaXplLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNGaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRCb3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3V0ZXJTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9ydW5Nb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZXN0cm95LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0dXBFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZW5hYmxlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0U3R5bGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9hcHBseVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Um91bmRlZE9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvY29tcHV0ZVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2Fycm93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9jbG9ja3dpc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9rZWVwVG9nZXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9zaGlmdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2lubmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xvZ2FuLWJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIlRSQU5TSVRJT05fRU5EIiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwib2JqIiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCIkIiwiZXZlbnQiLCJjYWxsZWQiLCJVdGlsIiwic2V0VGltZW91dCIsImdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQiLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwiZG9jdW1lbnQiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50Iiwic2VsZWN0b3IiLCJlbGVtZW50IiwiaHJlZkF0dHIiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwicmVmbG93IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJCb29sZWFuIiwiaXNFbGVtZW50IiwidHlwZUNoZWNrQ29uZmlnIiwiT2JqZWN0IiwiZXhwZWN0ZWRUeXBlcyIsImNvbmZpZ1R5cGVzIiwidmFsdWUiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJ0b1R5cGUiLCJjb21wb25lbnROYW1lIiwiZmluZFNoYWRvd1Jvb3QiLCJyb290IiwialF1ZXJ5RGV0ZWN0aW9uIiwidmVyc2lvbiIsIm1pbk1ham9yIiwibHRNYWpvciIsIm1pbk1pbm9yIiwibWluUGF0Y2giLCJtYXhNYWpvciIsInNldFRyYW5zaXRpb25FbmRTdXBwb3J0IiwiTkFNRSIsIlZFUlNJT04iLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkRBVEFfQVBJX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsIlNFTEVDVE9SX0RJU01JU1MiLCJFVkVOVF9DTE9TRSIsIkVWRU5UX0NMT1NFRCIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9BTEVSVCIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfU0hPVyIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiZGlzcG9zZSIsIl9nZXRSb290RWxlbWVudCIsInBhcmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsIl9kZXN0cm95RWxlbWVudCIsIl9qUXVlcnlJbnRlcmZhY2UiLCIkZWxlbWVudCIsImRhdGEiLCJfaGFuZGxlRGlzbWlzcyIsImFsZXJ0SW5zdGFuY2UiLCJDTEFTU19OQU1FX0FDVElWRSIsIkNMQVNTX05BTUVfQlVUVE9OIiwiQ0xBU1NfTkFNRV9GT0NVUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVTX0JVVFRPTlMiLCJTRUxFQ1RPUl9JTlBVVCIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0JVVFRPTiIsIkVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEkiLCJFVkVOVF9MT0FEX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsImFjdGl2ZUVsZW1lbnQiLCJidXR0b24iLCJpbml0aWFsQnV0dG9uIiwiaW5wdXRCdG4iLCJidXR0b25zIiwiaSIsImxlbiIsIkFSUk9XX0xFRlRfS0VZQ09ERSIsIkFSUk9XX1JJR0hUX0tFWUNPREUiLCJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwiU1dJUEVfVEhSRVNIT0xEIiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJzbGlkZSIsInBhdXNlIiwid3JhcCIsInRvdWNoIiwiRGVmYXVsdFR5cGUiLCJESVJFQ1RJT05fTkVYVCIsIkRJUkVDVElPTl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsIkVWRU5UX0RSQUdfU1RBUlQiLCJDTEFTU19OQU1FX0NBUk9VU0VMIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfUklHSFQiLCJDTEFTU19OQU1FX0xFRlQiLCJDTEFTU19OQU1FX05FWFQiLCJDTEFTU19OQU1FX1BSRVYiLCJDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQiLCJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsIlNFTEVDVE9SX0lURU0iLCJTRUxFQ1RPUl9JVEVNX0lNRyIsIlNFTEVDVE9SX05FWFRfUFJFViIsIlNFTEVDVE9SX0lORElDQVRPUlMiLCJTRUxFQ1RPUl9EQVRBX1NMSURFIiwiU0VMRUNUT1JfREFUQV9SSURFIiwiUG9pbnRlclR5cGUiLCJUT1VDSCIsIlBFTiIsIkNhcm91c2VsIiwibmF2aWdhdG9yIiwid2luZG93IiwibmV4dCIsIm5leHRXaGVuVmlzaWJsZSIsInByZXYiLCJjbGVhckludGVydmFsIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInRvIiwiYWN0aXZlSW5kZXgiLCJpbmRleCIsImRpcmVjdGlvbiIsIl9nZXRDb25maWciLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsImUiLCJfa2V5ZG93biIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0SXRlbUJ5RGlyZWN0aW9uIiwiaXNOZXh0RGlyZWN0aW9uIiwiaXNQcmV2RGlyZWN0aW9uIiwibGFzdEl0ZW1JbmRleCIsImlzR29pbmdUb1dyYXAiLCJkZWx0YSIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4Iiwic2xpZGVFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJmcm9tIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJpbmRpY2F0b3JzIiwibmV4dEluZGljYXRvciIsIl91cGRhdGVJbnRlcnZhbCIsImVsZW1lbnRJbnRlcnZhbCIsInBhcnNlSW50IiwiX3NsaWRlIiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInNsaWRFdmVudCIsIl9jb25maWciLCJhY3Rpb24iLCJfZGF0YUFwaUNsaWNrSGFuZGxlciIsInRhcmdldCIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCIkY2Fyb3VzZWwiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiRElNRU5TSU9OX1dJRFRIIiwiRElNRU5TSU9OX0hFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJDb2xsYXBzZSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJzdGFydEV2ZW50IiwiZGltZW5zaW9uIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInNjcm9sbFNpemUiLCJoaWRlIiwidHJpZ2dlckFycmF5TGVuZ3RoIiwidHJpZ2dlciIsIiRlbGVtIiwic2V0VHJhbnNpdGlvbmluZyIsIl9nZXREaW1lbnNpb24iLCJoYXNXaWR0aCIsIl9nZXRQYXJlbnQiLCJjaGlsZHJlbiIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJpc09wZW4iLCJ0cmlnZ2VyQXJyYXkiLCJfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIkVWRU5UX0NMSUNLIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9ESVNBQkxFRCIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QUklHSFQiLCJDTEFTU19OQU1FX0RST1BMRUZUIiwiQ0xBU1NfTkFNRV9NRU5VUklHSFQiLCJDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyIsIlNFTEVDVE9SX0ZPUk1fQ0hJTEQiLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJvZmZzZXQiLCJmbGlwIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiRHJvcGRvd24iLCJpc0FjdGl2ZSIsInVzZVBvcHBlciIsIl9lbGVtZW50Iiwic2hvd0V2ZW50IiwiUG9wcGVyIiwicmVmZXJlbmNlRWxlbWVudCIsImhpZGVFdmVudCIsInVwZGF0ZSIsIl9nZXRNZW51RWxlbWVudCIsIl9nZXRQbGFjZW1lbnQiLCIkcGFyZW50RHJvcGRvd24iLCJwbGFjZW1lbnQiLCJfZGV0ZWN0TmF2YmFyIiwiX2dldE9mZnNldCIsIl9nZXRQb3BwZXJDb25maWciLCJtb2RpZmllcnMiLCJlbmFibGVkIiwicHJldmVudE92ZXJmbG93IiwiYm91bmRhcmllc0VsZW1lbnQiLCJfY2xlYXJNZW51cyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiZHJvcGRvd25NZW51IiwiX2dldFBhcmVudEZyb21FbGVtZW50IiwiX2RhdGFBcGlLZXlkb3duSGFuZGxlciIsIml0ZW1zIiwiYmFja2Ryb3AiLCJmb2N1cyIsIkVWRU5UX0hJREVfUFJFVkVOVEVEIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJFVkVOVF9NT1VTRVVQX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkNMQVNTX05BTUVfU0NST0xMQUJMRSIsIkNMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfU1RBVElDIiwiU0VMRUNUT1JfRElBTE9HIiwiU0VMRUNUT1JfTU9EQUxfQk9EWSIsIlNFTEVDVE9SX0RBVEFfRElTTUlTUyIsIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwidHJhbnNpdGlvbiIsImhhbmRsZVVwZGF0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiaGlkZUV2ZW50UHJldmVudGVkIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJOb2RlIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl9lbmZvcmNlRm9jdXMiLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfaGlkZU1vZGFsIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3Nob3dCYWNrZHJvcCIsImFuaW1hdGUiLCJjYWxsYmFjayIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYWRqdXN0RGlhbG9nIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfY2hlY2tTY3JvbGxiYXIiLCJyZWN0IiwiX3NldFNjcm9sbGJhciIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiX3Jlc2V0U2Nyb2xsYmFyIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwiX2dldFNjcm9sbGJhcldpZHRoIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYXR0ck5hbWUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGbiIsImRvbVBhcnNlciIsImNyZWF0ZWREb2N1bWVudCIsIndoaXRlbGlzdEtleXMiLCJlbCIsImVsTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJ3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMiLCJ3aGl0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlIiwiQ0xBU1NfUFJFRklYIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50IiwiY3VzdG9tQ2xhc3MiLCJzYW5pdGl6ZSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiSE9WRVJfU1RBVEVfU0hPVyIsIkhPVkVSX1NUQVRFX09VVCIsIkV2ZW50IiwiSElERSIsIkhJRERFTiIsIlNIT1ciLCJTSE9XTiIsIklOU0VSVEVEIiwiQ0xJQ0siLCJGT0NVU0lOIiwiRk9DVVNPVVQiLCJNT1VTRUVOVEVSIiwiTU9VU0VMRUFWRSIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJTRUxFQ1RPUl9BUlJPVyIsIlRSSUdHRVJfSE9WRVIiLCJUUklHR0VSX0ZPQ1VTIiwiVFJJR0dFUl9DTElDSyIsIlRSSUdHRVJfTUFOVUFMIiwiVG9vbHRpcCIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGF0YUtleSIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwidGlwIiwidGlwSWQiLCJhdHRhY2htZW50IiwicHJldkhvdmVyU3RhdGUiLCJpc1dpdGhDb250ZW50IiwiYWRkQXR0YWNobWVudENsYXNzIiwiZ2V0VGlwRWxlbWVudCIsInNldENvbnRlbnQiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJzYW5pdGl6ZUh0bWwiLCJnZXRUaXRsZSIsImRlZmF1bHRCc0NvbmZpZyIsImJlaGF2aW9yIiwiYXJyb3ciLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwiX2dldENvbnRhaW5lciIsIl9nZXRBdHRhY2htZW50IiwiX3NldExpc3RlbmVycyIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwidGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsIl9jbGVhblRpcENsYXNzIiwiJHRpcCIsInRhYkNsYXNzIiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsInBvcHBlckRhdGEiLCJfZml4VHJhbnNpdGlvbiIsImluaXRDb25maWdBbmltYXRpb24iLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX1NDUk9MTCIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfRFJPUERPV04iLCJTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIk1FVEhPRF9PRkZTRVQiLCJNRVRIT0RfUE9TSVRJT04iLCJTY3JvbGxTcHkiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJpdGVtIiwiaWQiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm1heFNjcm9sbCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsIiRsaW5rIiwiX2NsZWFyIiwibm9kZSIsInNjcm9sbFNweXMiLCJzY3JvbGxTcHlzTGVuZ3RoIiwiJHNweSIsIkNMQVNTX05BTUVfRFJPUERPV05fTUVOVSIsIlNFTEVDVE9SX0FDVElWRV9VTCIsIlNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwicHJldmlvdXMiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiaXNUcmFuc2l0aW9uaW5nIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCIkdGhpcyIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiVG9hc3QiLCJfY2xvc2UiLCJfY2xlYXJUaW1lb3V0IiwidGltZW91dER1cmF0aW9uIiwibG9uZ2VyVGltZW91dEJyb3dzZXJzIiwiaXNCcm93c2VyIiwic2NoZWR1bGVkIiwic3VwcG9ydHNNaWNyb1Rhc2tzIiwiZ2V0VHlwZSIsImZ1bmN0aW9uVG9DaGVjayIsImNzcyIsInByb3BlcnR5IiwiZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRTY3JvbGxQYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiaXNJRTExIiwiaXNJRTEwIiwibm9PZmZzZXRQYXJlbnQiLCJpc0lFIiwib2Zmc2V0UGFyZW50Iiwibm9kZU5hbWUiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRSb290IiwiZWxlbWVudDEiLCJlbGVtZW50MiIsIm9yZGVyIiwicmFuZ2UiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImlzT2Zmc2V0Q29udGFpbmVyIiwiZWxlbWVudDFyb290IiwiZmluZENvbW1vbk9mZnNldFBhcmVudCIsInNpZGUiLCJ1cHBlclNpZGUiLCJzY3JvbGxpbmdFbGVtZW50Iiwic3VidHJhY3QiLCJnZXRTY3JvbGwiLCJzY3JvbGxMZWZ0IiwibW9kaWZpZXIiLCJzaWRlQSIsImF4aXMiLCJzaWRlQiIsInN0eWxlcyIsImJvZHkiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFNpemUiLCJvZmZzZXRzIiwiaGVpZ2h0IiwicmVzdWx0IiwidG9wIiwic2l6ZXMiLCJnZXRXaW5kb3dTaXplcyIsIndpZHRoIiwiaG9yaXpTY3JvbGxiYXIiLCJ2ZXJ0U2Nyb2xsYmFyIiwiZ2V0Qm9yZGVyc1NpemUiLCJnZXRDbGllbnRSZWN0IiwiZml4ZWRQb3NpdGlvbiIsInJ1bklzSUUiLCJpc0hUTUwiLCJjaGlsZHJlblJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0Iiwic2Nyb2xsUGFyZW50IiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaW5jbHVkZVNjcm9sbCIsImV4Y2x1ZGVTY3JvbGwiLCJyZWxhdGl2ZU9mZnNldCIsImdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSIsInBhcmVudE5vZGUiLCJpc0ZpeGVkIiwiYm91bmRhcmllcyIsImxlZnQiLCJnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSIsImJvdW5kYXJpZXNOb2RlIiwicG9wcGVyIiwiaXNQYWRkaW5nTnVtYmVyIiwiZ2V0Qm91bmRhcmllcyIsInJlY3RzIiwicmVmUmVjdCIsImJvdHRvbSIsInNvcnRlZEFyZWFzIiwiZ2V0QXJlYSIsImZpbHRlcmVkQXJlYXMiLCJjb21wdXRlZFBsYWNlbWVudCIsInZhcmlhdGlvbiIsImNvbW1vbk9mZnNldFBhcmVudCIsIngiLCJ5IiwiaGFzaCIsInJpZ2h0IiwicG9wcGVyUmVjdCIsImdldE91dGVyU2l6ZXMiLCJwb3BwZXJPZmZzZXRzIiwiaXNIb3JpeiIsIm1haW5TaWRlIiwic2Vjb25kYXJ5U2lkZSIsIm1lYXN1cmVtZW50Iiwic2Vjb25kYXJ5TWVhc3VyZW1lbnQiLCJyZWZlcmVuY2VPZmZzZXRzIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJBcnJheSIsImFyciIsImN1ciIsIm1hdGNoIiwibW9kaWZpZXJzVG9SdW4iLCJlbmRzIiwiZmluZEluZGV4IiwiZm4iLCJpc0Z1bmN0aW9uIiwiZ2V0UmVmZXJlbmNlT2Zmc2V0cyIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwiZ2V0UG9wcGVyT2Zmc2V0cyIsInJ1bk1vZGlmaWVycyIsIm5hbWUiLCJwcmVmaXhlcyIsInVwcGVyUHJvcCIsInRvQ2hlY2siLCJpc01vZGlmaWVyRW5hYmxlZCIsImdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSIsIm93bmVyRG9jdW1lbnQiLCJpc0JvZHkiLCJwYXNzaXZlIiwic3RhdGUiLCJzY3JvbGxFbGVtZW50Iiwic2V0dXBFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwibiIsImlzTmFOIiwiaXNGaW5pdGUiLCJ1bml0IiwiaXNOdW1lcmljIiwiYXR0cmlidXRlcyIsIm9wdGlvbnMiLCJwb3NpdGlvbiIsInJvdW5kIiwiZmxvb3IiLCJub1JvdW5kIiwicmVmZXJlbmNlV2lkdGgiLCJwb3BwZXJXaWR0aCIsImlzVmVydGljYWwiLCJpc1ZhcmlhdGlvbiIsInNhbWVXaWR0aFBhcml0eSIsImJvdGhPZGRXaWR0aCIsImhvcml6b250YWxUb0ludGVnZXIiLCJ2ZXJ0aWNhbFRvSW50ZWdlciIsImlzRmlyZWZveCIsImxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiIsImdwdUFjY2VsZXJhdGlvbiIsIm9mZnNldFBhcmVudFJlY3QiLCJnZXRSb3VuZGVkT2Zmc2V0cyIsInByZWZpeGVkUHJvcGVydHkiLCJpbnZlcnRUb3AiLCJpbnZlcnRMZWZ0IiwicmVxdWVzdGluZyIsImlzUmVxdWlyZWQiLCJyZXF1ZXN0ZWQiLCJpc01vZGlmaWVyUmVxdWlyZWQiLCJhcnJvd0VsZW1lbnQiLCJzaWRlQ2FwaXRhbGl6ZWQiLCJhbHRTaWRlIiwib3BTaWRlIiwiYXJyb3dFbGVtZW50U2l6ZSIsImNlbnRlciIsInBvcHBlck1hcmdpblNpZGUiLCJwb3BwZXJCb3JkZXJTaWRlIiwic2lkZVZhbHVlIiwidmFsaWRQbGFjZW1lbnRzIiwicGxhY2VtZW50cyIsImNvdW50ZXIiLCJCRUhBVklPUlMiLCJwbGFjZW1lbnRPcHBvc2l0ZSIsImZsaXBPcmRlciIsImNsb2Nrd2lzZSIsInJlZk9mZnNldHMiLCJvdmVybGFwc1JlZiIsIm92ZXJmbG93c0xlZnQiLCJvdmVyZmxvd3NSaWdodCIsIm92ZXJmbG93c1RvcCIsIm92ZXJmbG93c0JvdHRvbSIsIm92ZXJmbG93c0JvdW5kYXJpZXMiLCJmbGlwcGVkVmFyaWF0aW9uQnlSZWYiLCJmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50IiwiZmxpcHBlZFZhcmlhdGlvbiIsImdldE9wcG9zaXRlVmFyaWF0aW9uIiwic3BsaXQiLCJzdHIiLCJzaXplIiwidXNlSGVpZ2h0IiwiZnJhZ21lbnRzIiwiZnJhZyIsImRpdmlkZXIiLCJzcGxpdFJlZ2V4Iiwib3BzIiwibWVyZ2VXaXRoUHJldmlvdXMiLCJ0b1ZhbHVlIiwib3AiLCJpbmRleDIiLCJiYXNlUGxhY2VtZW50IiwicGFyc2VPZmZzZXQiLCJ0cmFuc2Zvcm1Qcm9wIiwicG9wcGVyU3R5bGVzIiwidHJhbnNmb3JtIiwiY2hlY2siLCJzaGlmdHZhcmlhdGlvbiIsInNoaWZ0T2Zmc2V0cyIsImJvdW5kIiwic3VidHJhY3RMZW5ndGgiLCJzaGlmdCIsImtlZXBUb2dldGhlciIsImlubmVyIiwidW5kZWZpbmVkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVib3VuY2UiLCJtb2RpZmllck9wdGlvbnMiLCJldmVudHNFbmFibGVkIiwiZGVzdHJveSIsImVuYWJsZUV2ZW50TGlzdGVuZXJzIiwiZGlzYWJsZUV2ZW50TGlzdGVuZXJzIiwiVXRpbHMiLCJQb3BwZXJVdGlscyIsIkRlZmF1bHRzIiwiZyIsIkZ1bmN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImpRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJUb2dnbGVTbG9nYW5zIiwiJGZpcnN0IiwiJHNlY29uZCIsImlzIiwiZmFkZVRvZ2dsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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QUFHcnhCLENBQUMsQ0FBQyxzQkFBRCxDQUFWO0FBQ0FzeEIsYUFBTyxHQUFHdHhCLENBQUMsQ0FBQyxxQkFBRCxDQUFYO0FBQ0YsS0FWcUIsQ0FZdEI7OztBQUNBcXhCLFVBQU0sQ0FBQ0csVUFBUCxDQUFrQixNQUFsQixFQUEwQixZQUFZO0FBQ25DO0FBQ0FGLGFBQU8sQ0FBQ0UsVUFBUixDQUFtQixNQUFuQjtBQUNGLEtBSEQ7QUFJRjtBQUNILENBdEJLLENBQU4sQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx3QiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiB1dGlsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBgJHtvYmp9YFxuICB9XG5cbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICByZXR1cm4ge1xuICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGhhbmRsZShldmVudCkge1xuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICB9KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMpXG4gICAgfVxuICB9LCBkdXJhdGlvbilcblxuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuICAkLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFV0aWwgPSB7XG4gIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcblxuICBnZXRVSUQocHJlZml4KSB7XG4gICAgZG8ge1xuICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKSAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICAgIHJldHVybiBwcmVmaXhcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBjb25zdCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgIGxldCB0cmFuc2l0aW9uRGVsYXkgPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpXG5cbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG4gIH0sXG5cbiAgcmVmbG93KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSxcblxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICB9LFxuXG4gIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKSA/XG4gICAgICAgICAgJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICAgIH1cblxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgfSxcblxuICBqUXVlcnlEZXRlY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKVxuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJylcbiAgICBjb25zdCBtaW5NYWpvciA9IDFcbiAgICBjb25zdCBsdE1ham9yID0gMlxuICAgIGNvbnN0IG1pbk1pbm9yID0gOVxuICAgIGNvbnN0IG1pblBhdGNoID0gMVxuICAgIGNvbnN0IG1heE1ham9yID0gNFxuXG4gICAgaWYgKHZlcnNpb25bMF0gPCBsdE1ham9yICYmIHZlcnNpb25bMV0gPCBtaW5NaW5vciB8fCB2ZXJzaW9uWzBdID09PSBtaW5NYWpvciAmJiB2ZXJzaW9uWzFdID09PSBtaW5NaW5vciAmJiB2ZXJzaW9uWzJdIDwgbWluUGF0Y2ggfHwgdmVyc2lvblswXSA+PSBtYXhNYWpvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpXG4gICAgfVxuICB9XG59XG5cblV0aWwualF1ZXJ5RGV0ZWN0aW9uKClcbnNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQUxFUlQgPSAnYWxlcnQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBsZXQgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gdGhpcy5fZ2V0Um9vdEVsZW1lbnQoZWxlbWVudClcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgbGV0IHBhcmVudCA9IGZhbHNlXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9BTEVSVH1gKVswXVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9ICQuRXZlbnQoRVZFTlRfQ0xPU0UpXG5cbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICByZXR1cm4gY2xvc2VFdmVudFxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAkKGVsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGV2ZW50ID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQsIGV2ZW50KSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudClcbiAgICAgIC5kZXRhY2goKVxuICAgICAgLnRyaWdnZXIoRVZFTlRfQ0xPU0VEKVxuICAgICAgLnJlbW92ZSgpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihcbiAgRVZFTlRfQ0xJQ0tfREFUQV9BUEksXG4gIFNFTEVDVE9SX0RJU01JU1MsXG4gIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKVxuKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT04gPSAnYnRuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GT0NVUyA9ICdmb2N1cydcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9UID0gJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRVMgPSAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvblwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFU19CVVRUT05TID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0gLmJ0bidcbmNvbnN0IFNFTEVDVE9SX0lOUFVUID0gJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0JVVFRPTiA9ICcuYnRuJ1xuXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEkgPSBgZm9jdXMke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBibHVyJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5zaG91bGRBdm9pZFRyaWdnZXJDaGFuZ2UgPSBmYWxzZVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlXG4gICAgbGV0IGFkZEFyaWFQcmVzc2VkID0gdHJ1ZVxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFUylbMF1cblxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfSU5QVVQpXG5cbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkICYmIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSkge1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfQUNUSVZFKVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICAvLyBpZiBpdCdzIG5vdCBhIHJhZGlvIGJ1dHRvbiBvciBjaGVja2JveCBkb24ndCBhZGQgYSBwb2ludGxlc3MvaW52YWxpZCBjaGVja2VkIHByb3BlcnR5IHRvIHRoZSBpbnB1dFxuICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnIHx8IGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0aGlzLnNob3VsZEF2b2lkVHJpZ2dlckNoYW5nZSkge1xuICAgICAgICAgICAgJChpbnB1dCkudHJpZ2dlcignY2hhbmdlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLl9lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkpIHtcbiAgICAgIGlmIChhZGRBcmlhUHJlc3NlZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcsIGF2b2lkVHJpZ2dlckNoYW5nZSkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBkYXRhLnNob3VsZEF2b2lkVHJpZ2dlckNoYW5nZSA9IGF2b2lkVHJpZ2dlckNoYW5nZVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCwgZXZlbnQgPT4ge1xuICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBpbml0aWFsQnV0dG9uID0gYnV0dG9uXG5cbiAgICBpZiAoISQoYnV0dG9uKS5oYXNDbGFzcyhDTEFTU19OQU1FX0JVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNFTEVDVE9SX0JVVFRPTilbMF1cbiAgICB9XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCBidXR0b24uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gd29yayBhcm91bmQgRmlyZWZveCBidWcgIzE1NDA5OTVcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5wdXRCdG4gPSBidXR0b24ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9JTlBVVClcblxuICAgICAgaWYgKGlucHV0QnRuICYmIChpbnB1dEJ0bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgaW5wdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5pdGlhbEJ1dHRvbi50YWdOYW1lID09PSAnSU5QVVQnIHx8IGJ1dHRvbi50YWdOYW1lICE9PSAnTEFCRUwnKSB7XG4gICAgICAgIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChidXR0b24pLCAndG9nZ2xlJywgaW5pdGlhbEJ1dHRvbi50YWdOYW1lID09PSAnSU5QVVQnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgLm9uKEVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCwgZXZlbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNFTEVDVE9SX0JVVFRPTilbMF1cbiAgICAkKGJ1dHRvbikudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9GT0NVUywgL15mb2N1cyhpbik/JC8udGVzdChldmVudC50eXBlKSlcbiAgfSlcblxuJCh3aW5kb3cpLm9uKEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgLy8gZW5zdXJlIGNvcnJlY3QgYWN0aXZlIGNsYXNzIGlzIHNldCB0byBtYXRjaCB0aGUgY29udHJvbHMnIGFjdHVhbCB2YWx1ZXMvc3RhdGVzXG5cbiAgLy8gZmluZCBhbGwgY2hlY2tib3hlcy9yZWFkaW8gYnV0dG9ucyBpbnNpZGUgZGF0YS10b2dnbGUgZ3JvdXBzXG4gIGxldCBidXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFU19CVVRUT05TKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGJ1dHRvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBidXR0b24gPSBidXR0b25zW2ldXG4gICAgY29uc3QgaW5wdXQgPSBidXR0b24ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9JTlBVVClcbiAgICBpZiAoaW5wdXQuY2hlY2tlZCB8fCBpbnB1dC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIGZpbmQgYWxsIGJ1dHRvbiB0b2dnbGVzXG4gIGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGJ1dHRvbnNbaV1cbiAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJykgPT09ICd0cnVlJykge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQnV0dG9uXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgQVJST1dfTEVGVF9LRVlDT0RFID0gMzcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgbGVmdCBhcnJvdyBrZXlcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWUNPREUgPSAzOSAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciByaWdodCBhcnJvdyBrZXlcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNsaWRlOiBmYWxzZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHdyYXA6IHRydWUsXG4gIHRvdWNoOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzbGlkZTogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB3cmFwOiAnYm9vbGVhbicsXG4gIHRvdWNoOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRElSRUNUSU9OX05FWFQgPSAnbmV4dCdcbmNvbnN0IERJUkVDVElPTl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9SSUdIVCA9ICdjYXJvdXNlbC1pdGVtLXJpZ2h0J1xuY29uc3QgQ0xBU1NfTkFNRV9MRUZUID0gJ2Nhcm91c2VsLWl0ZW0tbGVmdCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBQb2ludGVyVHlwZSA9IHtcbiAgVE9VQ0g6ICd0b3VjaCcsXG4gIFBFTjogJ3Blbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2l0ZW1zID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IDBcbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lORElDQVRPUlMpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9ORVhUKVxuICAgIH1cbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcy5fZWxlbWVudClcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmXG4gICAgICAoJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykgJiYgJGVsZW1lbnQuY3NzKCd2aXNpYmlsaXR5JykgIT09ICdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTkVYVF9QUkVWKSkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9BQ1RJVkVfSVRFTSlcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleCA/XG4gICAgICBESVJFQ1RJT05fTkVYVCA6XG4gICAgICBESVJFQ1RJT05fUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUoZGlyZWN0aW9uLCB0aGlzLl9pdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YXggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYXG5cbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgLy8gc3dpcGUgbGVmdFxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICB0aGlzLnByZXYoKVxuICAgIH1cblxuICAgIC8vIHN3aXBlIHJpZ2h0XG4gICAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub24oRVZFTlRfTU9VU0VFTlRFUiwgZXZlbnQgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICAgIC5vbihFVkVOVF9NT1VTRUxFQVZFLCBldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAoIXRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfSVRFTV9JTUcpKVxuICAgICAgLm9uKEVWRU5UX0RSQUdfU1RBUlQsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IG1vdmUoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlID9cbiAgICAgIFtdLnNsaWNlLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfSVRFTSkpIDpcbiAgICAgIFtdXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTkVYVFxuICAgIGNvbnN0IGlzUHJldkRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX1BSRVZcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxXG4gICAgY29uc3QgaXNHb2luZ1RvV3JhcCA9IGlzUHJldkRpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleFxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fUFJFViA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTEgP1xuICAgICAgdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKSlcbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9TTElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRhcmdldEluZGV4XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkZUV2ZW50KVxuXG4gICAgcmV0dXJuIHNsaWRlRXZlbnRcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX2luZGljYXRvcnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfQUNUSVZFKSlcbiAgICAgICQoaW5kaWNhdG9ycykucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IG5leHRJbmRpY2F0b3IgPSB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5jaGlsZHJlbltcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpXG4gICAgICBdXG5cbiAgICAgIGlmIChuZXh0SW5kaWNhdG9yKSB7XG4gICAgICAgICQobmV4dEluZGljYXRvcikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9BQ1RJVkVfSVRFTSlcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEludGVydmFsID0gcGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICBpZiAoZWxlbWVudEludGVydmFsKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmXG4gICAgICB0aGlzLl9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcblxuICAgIGxldCBkaXJlY3Rpb25hbENsYXNzTmFtZVxuICAgIGxldCBvcmRlckNsYXNzTmFtZVxuICAgIGxldCBldmVudERpcmVjdGlvbk5hbWVcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTl9ORVhUKSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENMQVNTX05BTUVfTEVGVFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDTEFTU19OQU1FX05FWFRcbiAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERJUkVDVElPTl9MRUZUXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9SSUdIVFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDTEFTU19OQU1FX1BSRVZcbiAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiAkKG5leHRFbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0FDVElWRSkpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSlcbiAgICBpZiAoc2xpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3Qgc2xpZEV2ZW50ID0gJC5FdmVudChFVkVOVF9TTElELCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICB9KVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TTElERSkpIHtcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICBVdGlsLnJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpXG5cbiAgICAgICQoYWN0aXZlRWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgICAgJChuZXh0RWxlbWVudClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhgJHtkaXJlY3Rpb25hbENsYXNzTmFtZX0gJHtvcmRlckNsYXNzTmFtZX1gKVxuICAgICAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0FDVElWRX0gJHtvcmRlckNsYXNzTmFtZX0gJHtkaXJlY3Rpb25hbENsYXNzTmFtZX1gKVxuXG4gICAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCksIDApXG4gICAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHthY3Rpb259XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVthY3Rpb25dKClcbiAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnRlcnZhbCAmJiBfY29uZmlnLnJpZGUpIHtcbiAgICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICAgIGRhdGEuY3ljbGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2RhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gJChzZWxlY3RvcilbMF1cblxuICAgIGlmICghdGFyZ2V0IHx8ICEkKHRhcmdldCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKS50byhzbGlkZUluZGV4KVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBDYXJvdXNlbC5fZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuJCh3aW5kb3cpLm9uKEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfUklERSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCAkY2Fyb3VzZWwgPSAkKGNhcm91c2Vsc1tpXSlcbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcm91c2VsXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBWRVJTSU9OID0gJzQuNi4wJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlOiB0cnVlLFxuICBwYXJlbnQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGU6ICdib29sZWFuJyxcbiAgcGFyZW50OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJ1xuXG5jb25zdCBESU1FTlNJT05fV0lEVEggPSAnd2lkdGgnXG5jb25zdCBESU1FTlNJT05fSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJHtlbGVtZW50LmlkfVwiXSxgICtcbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMke2VsZW1lbnQuaWR9XCJdYFxuICAgICkpXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSlcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZWxlbSA9IHRvZ2dsZUxpc3RbaV1cbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSBlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfQUNUSVZFUykpXG4gICAgICAgIC5maWx0ZXIoZWxlbSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKVxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVylcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJylcbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIC5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgaWYgKCEkZWxlbS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgICAkKHRyaWdnZXIpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgICAudHJpZ2dlcihFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICBjb25zdCBoYXNXaWR0aCA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoRElNRU5TSU9OX1dJRFRIKVxuICAgIHJldHVybiBoYXNXaWR0aCA/IERJTUVOU0lPTl9XSURUSCA6IERJTUVOU0lPTl9IRUlHSFRcbiAgfVxuXG4gIF9nZXRQYXJlbnQoKSB7XG4gICAgbGV0IHBhcmVudFxuXG4gICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5wYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50XG5cbiAgICAgIC8vIEl0J3MgYSBqUXVlcnkgb2JqZWN0XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50WzBdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY29uZmlnLnBhcmVudClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIiR7dGhpcy5fY29uZmlnLnBhcmVudH1cIl1gXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcblxuICAgICQoY2hpbGRyZW4pLmVhY2goKGksIGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhcbiAgICAgICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLFxuICAgICAgICBbZWxlbWVudF1cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICBjb25zdCBpc09wZW4gPSAkKGVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAkKHRyaWdnZXJBcnJheSlcbiAgICAgICAgLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxuICB9XG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiRlbGVtZW50LmRhdGEoKSxcbiAgICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgX2NvbmZpZylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9ycyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG5cbiAgJChzZWxlY3RvcnMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKHRoaXMpXG4gICAgY29uc3QgZGF0YSA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSlcbiAgICBjb25zdCBjb25maWcgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKClcbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjYuMCk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBWRVJTSU9OID0gJzQuNi4wJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuY29uc3QgU1BBQ0VfS0VZQ09ERSA9IDMyIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHNwYWNlIGtleVxuY29uc3QgVEFCX0tFWUNPREUgPSA5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcbmNvbnN0IEFSUk9XX1VQX0tFWUNPREUgPSAzOCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcbmNvbnN0IEFSUk9XX0RPV05fS0VZQ09ERSA9IDQwIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggPSAzIC8vIE1vdXNlRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRoZSByaWdodCBidXR0b24gKGFzc3VtaW5nIGEgcmlnaHQtaGFuZGVkIG1vdXNlKVxuY29uc3QgUkVHRVhQX0tFWURPV04gPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWUNPREV9fCR7QVJST1dfRE9XTl9LRVlDT0RFfXwke0VTQ0FQRV9LRVlDT0RFfWApXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9ESVNBQkxFRCA9ICdkaXNhYmxlZCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QUklHSFQgPSAnZHJvcHJpZ2h0J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QTEVGVCA9ICdkcm9wbGVmdCdcbmNvbnN0IENMQVNTX05BTUVfTUVOVVJJR0hUID0gJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyA9ICdwb3NpdGlvbi1zdGF0aWMnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJ1xuY29uc3QgU0VMRUNUT1JfRk9STV9DSElMRCA9ICcuZHJvcGRvd24gZm9ybSdcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gJ2xlZnQtc3RhcnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogMCxcbiAgZmxpcDogdHJ1ZSxcbiAgYm91bmRhcnk6ICdzY3JvbGxQYXJlbnQnLFxuICByZWZlcmVuY2U6ICd0b2dnbGUnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgZmxpcDogJ2Jvb2xlYW4nLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheTogJ3N0cmluZycsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdCknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzKClcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KHRydWUpXG4gIH1cblxuICBzaG93KHVzZVBvcHBlciA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSB8fCAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRvdGFsbHkgZGlzYWJsZSBQb3BwZXIgZm9yIERyb3Bkb3ducyBpbiBOYXZiYXJcbiAgICBpZiAoIXRoaXMuX2luTmF2YmFyICYmIHVzZVBvcHBlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKENMQVNTX05BTUVfUE9TSVRJT05fU1RBVElDKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHRoaXMuX2dldFBvcHBlckNvbmZpZygpKVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAkKHBhcmVudCkuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKS5sZW5ndGggPT09IDApIHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpIHx8ICEkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9tZW51ID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX21lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9NRU5VKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9tZW51XG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0ICRwYXJlbnREcm9wZG93biA9ICQodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIGxldCBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfQk9UVE9NXG5cbiAgICAvLyBIYW5kbGUgZHJvcHVwXG4gICAgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgIHBsYWNlbWVudCA9ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9NRU5VUklHSFQpID9cbiAgICAgICAgUExBQ0VNRU5UX1RPUEVORCA6XG4gICAgICAgIFBMQUNFTUVOVF9UT1BcbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9SSUdIVFxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUExFRlQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfTEVGVFxuICAgIH0gZWxzZSBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX01FTlVSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9CT1RUT01FTkRcbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VtZW50XG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IGRhdGEgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLih0aGlzLl9jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5fZWxlbWVudCkgfHwge30pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5hcHBseVN0eWxlID0ge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5wb3BwZXJDb25maWcsXG4gICAgICAuLi50aGlzLl9jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9jbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8XG4gICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgY29uc3QgY29udGV4dCA9ICQodG9nZ2xlc1tpXSkuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnVcbiAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCA9PT0gVEFCX0tFWUNPREUpICYmXG4gICAgICAgICAgJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgY29udGV4dC5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgJChwYXJlbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcGFyZW50XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgc3RhdGljIF9kYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID9cbiAgICAgIGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSAmJlxuICAgICAgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHxcbiAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU0VMRUNUT1JfTUVOVSkubGVuZ3RoKSA6ICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LndoaWNoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJCh0aGlzKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHBhcmVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFKSkge1xuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAkKHBhcmVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSkudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TKSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAkKGl0ZW0pLmlzKCc6dmlzaWJsZScpKVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX1VQX0tFWUNPREUgJiYgaW5kZXggPiAwKSB7IC8vIFVwXG4gICAgICBpbmRleC0tXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7IC8vIERvd25cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IDBcbiAgICB9XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgLm9uKGAke0VWRU5UX0NMSUNLX0RBVEFfQVBJfSAke0VWRU5UX0tFWVVQX0RBVEFfQVBJfWAsIERyb3Bkb3duLl9jbGVhck1lbnVzKVxuICAub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpXG4gIH0pXG4gIC5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRk9STV9DSElMRCwgZSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBWRVJTSU9OID0gJzQuNi4wJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBzaG93OiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBmb2N1czogJ2Jvb2xlYW4nLFxuICBzaG93OiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0NST0xMQUJMRSA9ICdtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSdcbmNvbnN0IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJ1xuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9kaWFsb2cgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfRElBTE9HKVxuICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gMFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgIHRoaXMuX3NldFNjcm9sbGJhcigpXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICBFVkVOVF9DTElDS19ESVNNSVNTLFxuICAgICAgU0VMRUNUT1JfREFUQV9ESVNNSVNTLFxuICAgICAgZXZlbnQgPT4gdGhpcy5oaWRlKGV2ZW50KVxuICAgIClcblxuICAgICQodGhpcy5fZGlhbG9nKS5vbihFVkVOVF9NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSlcblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICQoZG9jdW1lbnQpLm9mZihFVkVOVF9GT0NVU0lOKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9DTElDS19ESVNNSVNTKVxuICAgICQodGhpcy5fZGlhbG9nKS5vZmYoRVZFTlRfTU9VU0VET1dOX0RJU01JU1MpXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZXZlbnQgPT4gdGhpcy5faGlkZU1vZGFsKGV2ZW50KSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKGh0bWxFbGVtZW50ID0+ICQoaHRtbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEVWRU5UX0ZPQ1VTSU5gIGFuZCBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgJChkb2N1bWVudCkub2ZmKEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9kaWFsb2cgPSBudWxsXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biA9IG51bGxcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IG51bGxcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IG51bGxcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IGhpZGVFdmVudFByZXZlbnRlZCA9ICQuRXZlbnQoRVZFTlRfSElERV9QUkVWRU5URUQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50UHJldmVudGVkKVxuICAgIGlmIChoaWRlRXZlbnRQcmV2ZW50ZWQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpXG5cbiAgICBjb25zdCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKFV0aWwuVFJBTlNJVElPTl9FTkQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnJ1xuICAgICAgICB9KVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gdGhpcy5fZGlhbG9nID8gdGhpcy5fZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTU9EQUxfQk9EWSkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG5cbiAgICBpZiAoJCh0aGlzLl9kaWFsb2cpLmhhc0NsYXNzKENMQVNTX05BTUVfU0NST0xMQUJMRSkgJiYgbW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd25FdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPV04sIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZylcblxuICAgICAgJCh0aGlzLl9kaWFsb2cpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgdHJhbnNpdGlvbkNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vZmYoRVZFTlRfRk9DVVNJTikgLy8gR3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgJCh3aW5kb3cpLm9uKEVWRU5UX1JFU0laRSwgZXZlbnQgPT4gdGhpcy5oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHdpbmRvdykub2ZmKEVWRU5UX1JFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpID9cbiAgICAgIENMQVNTX05BTUVfRkFERSA6ICcnXG5cbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFja1JlbW92ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgcmVjdC5yaWdodCkgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICB9XG5cbiAgX3NldFNjcm9sbGJhcigpIHtcbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIC8vIE5vdGU6IERPTU5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0IHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBvciAnJyBpZiBub3Qgc2V0XG4gICAgICAvLyAgIHdoaWxlICQoRE9NTm9kZSkuY3NzKCdwYWRkaW5nLXJpZ2h0JykgcmV0dXJucyB0aGUgY2FsY3VsYXRlZCB2YWx1ZSBvciAwIGlmIG5vdCBzZXRcbiAgICAgIGNvbnN0IGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9GSVhFRF9DT05URU5UKSlcbiAgICAgIGNvbnN0IHN0aWNreUNvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQpKVxuXG4gICAgICAvLyBBZGp1c3QgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgICAkKGZpeGVkQ29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChlbGVtZW50KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cbiAgICAgICQoc3RpY2t5Q29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsTWFyZ2luID0gZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgnbWFyZ2luLXJpZ2h0JywgYWN0dWFsTWFyZ2luKVxuICAgICAgICAgIC5jc3MoJ21hcmdpbi1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZE1hcmdpbikgLSB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG4gICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgJChkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgfVxuXG4gIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAvLyBSZXN0b3JlIGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgIGNvbnN0IGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9GSVhFRF9DT05URU5UKSlcbiAgICAkKGZpeGVkQ29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7U0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlR9YCkpXG4gICAgJChlbGVtZW50cykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG1hcmdpbiA9ICQoZWxlbWVudCkuZGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIGlmICh0eXBlb2YgbWFyZ2luICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JywgbWFyZ2luKS5yZW1vdmVEYXRhKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIGJvZHkgcGFkZGluZ1xuICAgIGNvbnN0IHBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnXG4gIH1cblxuICBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7IC8vIHRoeCBkLndhbHNoXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiQodGhpcykuZGF0YSgpLFxuICAgICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCB0YXJnZXRcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpID9cbiAgICAndG9nZ2xlJyA6IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpLm9uZShFVkVOVF9TSE9XLCBzaG93RXZlbnQgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICR0YXJnZXQub25lKEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcsIHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IE1vZGFsXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogdG9vbHMvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgdXJpQXR0cnMgPSBbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dXG5cbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFdoaXRlbGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14jJi86P10qKD86WyMvP118JCkpL2dpXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW1xcZCsvYS16XSs9KiQvaVxuXG5mdW5jdGlvbiBhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSB7XG4gIGNvbnN0IGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgIGlmICh1cmlBdHRycy5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGF0dHIubm9kZVZhbHVlLm1hdGNoKFNBRkVfVVJMX1BBVFRFUk4pIHx8IGF0dHIubm9kZVZhbHVlLm1hdGNoKERBVEFfVVJMX1BBVFRFUk4pKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0clJlZ2V4ID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhdHRyTmFtZS5tYXRjaChyZWdFeHBbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIHdoaXRlTGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAodW5zYWZlSHRtbC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudHNbaV1cbiAgICBjb25zdCBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAod2hpdGVsaXN0S2V5cy5pbmRleE9mKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgRGVmYXVsdFdoaXRlbGlzdCxcbiAgc2FuaXRpemVIdG1sXG59IGZyb20gJy4vdG9vbHMvc2FuaXRpemVyJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnQ6ICcoc3RyaW5nfGFycmF5KScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgd2hpdGVMaXN0OiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0KSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGU6ICcnLFxuICBkZWxheTogMCxcbiAgaHRtbDogZmFsc2UsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgb2Zmc2V0OiAwLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudDogJ2ZsaXAnLFxuICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHdoaXRlTGlzdDogRGVmYXVsdFdoaXRlbGlzdCxcbiAgcG9wcGVyQ29uZmlnOiBudWxsXG59XG5cbmNvbnN0IEhPVkVSX1NUQVRFX1NIT1cgPSAnc2hvdydcbmNvbnN0IEhPVkVSX1NUQVRFX09VVCA9ICdvdXQnXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcbmNvbnN0IFNFTEVDVE9SX0FSUk9XID0gJy5hcnJvdydcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgICBsZXQgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICApXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG5cbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IG51bGxcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLmNvbmZpZyA9IG51bGxcbiAgICB0aGlzLnRpcCA9IG51bGxcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBVdGlsLmZpbmRTaGFkb3dSb290KHRoaXMuZWxlbWVudClcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKFxuICAgICAgICBzaGFkb3dSb290ICE9PSBudWxsID8gc2hhZG93Um9vdCA6IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy5lbGVtZW50XG4gICAgICApXG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgICBjb25zdCB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpIDpcbiAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2dldENvbnRhaW5lcigpXG4gICAgICAkKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgICBpZiAoISQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLnRpcCkpIHtcbiAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcilcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcblxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuXG4gICAgICAkKHRpcCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgJCh0aXApLmFkZENsYXNzKHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzKVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9maXhUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy50aXApXG5cbiAgICAgICAgJCh0aGlzLnRpcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSE9WRVJfU1RBVEVfU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZVxuXG4gICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKVxuXG4gICAgICAkKHRpcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCQodGlwLnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfVE9PTFRJUF9JTk5FUikpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKGAke0NMQVNTX05BTUVfRkFERX0gJHtDTEFTU19OQU1FX1NIT1d9YClcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgIC8vIENvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKCEkKGNvbnRlbnQpLnBhcmVudCgpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLmNvbmZpZy53aGl0ZUxpc3QsIHRoaXMuY29uZmlnLnNhbml0aXplRm4pXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50Lmh0bWwoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnQudGV4dChjb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudCkgOlxuICAgICAgICB0aGlzLmNvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc0NvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgIH0sXG4gICAgICAgIGFycm93OiB7XG4gICAgICAgICAgZWxlbWVudDogU0VMRUNUT1JfQVJST1dcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkNyZWF0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6IGRhdGEgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc0NvbmZpZyxcbiAgICAgIC4uLnRoaXMuY29uZmlnLnBvcHBlckNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSBkYXRhID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi4odGhpcy5jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5lbGVtZW50KSB8fCB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICAgIH1cblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLmNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssXG4gICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgZXZlbnQgPT4gdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgLm9uKGV2ZW50SW4sIHRoaXMuY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9lbnRlcihldmVudCkpXG4gICAgICAgICAgLm9uKGV2ZW50T3V0LCB0aGlzLmNvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fbGVhdmUoZXZlbnQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8IHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdkYXRhLW9yaWdpbmFsLXRpdGxlJyxcbiAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJ1xuICAgICAgKVxuXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoJChjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX09VVFxuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKVxuICB9XG5cbiAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gJCh0aGlzLmVsZW1lbnQpLmRhdGEoKVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpXG4gICAgICAuZm9yRWFjaChkYXRhQXR0ciA9PiB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaW5kZXhPZihkYXRhQXR0cikgIT09IC0xKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLndoaXRlTGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgdGhpcy50aXAgPSBwb3BwZXJEYXRhLmluc3RhbmNlLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQocG9wcGVyRGF0YS5wbGFjZW1lbnQpKVxuICB9XG5cbiAgX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBpbml0Q29uZmlnQW5pbWF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0aW9uXG5cbiAgICBpZiAodGlwLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZVxuICAgIHRoaXMuaGlkZSgpXG4gICAgdGhpcy5zaG93KClcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdwb3BvdmVyJ1xuY29uc3QgVkVSU0lPTiA9ICc0LjYuMCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50OiAnJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBPdmVycmlkZXNcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG5cbiAgICAvLyBXZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU0VMRUNUT1JfVElUTEUpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KClcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNFTEVDVE9SX0NPTlRFTlQpLCBjb250ZW50KVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0ZBREV9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpIHx8XG4gICAgICB0aGlzLmNvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiAxMCxcbiAgbWV0aG9kOiAnYXV0bycsXG4gIHRhcmdldDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJ251bWJlcicsXG4gIG1ldGhvZDogJ3N0cmluZycsXG4gIHRhcmdldDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0NST0xMID0gYHNjcm9sbCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNUyA9ICcuZHJvcGRvd24taXRlbSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBNRVRIT0RfT0ZGU0VUID0gJ29mZnNldCdcbmNvbnN0IE1FVEhPRF9QT1NJVElPTiA9ICdwb3NpdGlvbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX05BVl9MSU5LU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTElTVF9JVEVNU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfRFJPUERPV05fSVRFTVN9YFxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSAwXG5cbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9uKEVWRU5UX1NDUk9MTCwgZXZlbnQgPT4gdGhpcy5fcHJvY2VzcyhldmVudCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvdyA/XG4gICAgICBNRVRIT0RfT0ZGU0VUIDogTUVUSE9EX1BPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgYXV0b01ldGhvZCA6IHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE1FVEhPRF9QT1NJVElPTiA/XG4gICAgICB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6IDBcblxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuXG4gICAgdGFyZ2V0c1xuICAgICAgLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IHRhcmdldFxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBUT0RPIChmYXQpOiByZW1vdmUgc2tldGNoIHJlbGlhbmNlIG9uIGpRdWVyeSBwb3NpdGlvbi9vZmZzZXRcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuX29mZnNldHMucHVzaChpdGVtWzBdKVxuICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnID0gbnVsbFxuICAgIHRoaXMuX3NlbGVjdG9yID0gbnVsbFxuICAgIHRoaXMuX29mZnNldHMgPSBudWxsXG4gICAgdGhpcy5fdGFyZ2V0cyA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnICYmIFV0aWwuaXNFbGVtZW50KGNvbmZpZy50YXJnZXQpKSB7XG4gICAgICBsZXQgaWQgPSAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJylcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgaWQgPSBVdGlsLmdldFVJRChOQU1FKVxuICAgICAgICAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJywgaWQpXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3RvclxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9W2RhdGEtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgJGxpbmsgPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyaWVzLmpvaW4oJywnKSkpKVxuXG4gICAgaWYgKCRsaW5rLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICRsaW5rLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pXG4gICAgICAgIC5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSlcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICRsaW5rLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAkbGluay5wYXJlbnRzKFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuICAgICAgICAucHJldihgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YClcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAkbGluay5wYXJlbnRzKFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuICAgICAgICAucHJldihTRUxFQ1RPUl9OQVZfSVRFTVMpXG4gICAgICAgIC5jaGlsZHJlbihTRUxFQ1RPUl9OQVZfTElOS1MpXG4gICAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9XG5cbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLnRyaWdnZXIoRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJCh3aW5kb3cpLm9uKEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsU3B5cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1NQWSkpXG4gIGNvbnN0IHNjcm9sbFNweXNMZW5ndGggPSBzY3JvbGxTcHlzLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSBzY3JvbGxTcHlzTGVuZ3RoOyBpLS07KSB7XG4gICAgY29uc3QgJHNweSA9ICQoc2Nyb2xsU3B5c1tpXSlcbiAgICBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRzcHksICRzcHkuZGF0YSgpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHlcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjYuMCk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBWRVJTSU9OID0gJzQuNi4wJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRElTQUJMRUQgPSAnZGlzYWJsZWQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX1VMID0gJz4gbGkgPiAuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgPSAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfQUNUSVZFKSB8fFxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0XG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApWzBdXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTRUxFQ1RPUl9BQ1RJVkVfVUwgOiBTRUxFQ1RPUl9BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gJC5tYWtlQXJyYXkoJChsaXN0RWxlbWVudCkuZmluZChpdGVtU2VsZWN0b3IpKVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHxcbiAgICAgICAgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoXG4gICAgICB0aGlzLl9lbGVtZW50LFxuICAgICAgbGlzdEVsZW1lbnRcbiAgICApXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhpZGRlbkV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcblxuICAgICAgY29uc3Qgc2hvd25FdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG5cbiAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgP1xuICAgICAgJChjb250YWluZXIpLmZpbmQoU0VMRUNUT1JfQUNUSVZFX1VMKSA6XG4gICAgICAkKGNvbnRhaW5lcikuY2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmICQoYWN0aXZlKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKFxuICAgICAgZWxlbWVudCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKVxuXG4gICAgICAkKGFjdGl2ZSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoXG4gICAgICAgIFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRFxuICAgICAgKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAkKGRyb3Bkb3duQ2hpbGQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJChlbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBVdGlsLnJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duVG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZHJvcGRvd25FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFKSlcblxuICAgICAgICAkKGRyb3Bkb3duVG9nZ2xlTGlzdCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcylcbiAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93JylcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgZGVsYXk6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYXV0b2hpZGU6IHRydWUsXG4gIGRlbGF5OiA1MDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX1NIT1dOKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSlcbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xvc2UoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfQ0xJQ0tfRElTTUlTUylcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi4kKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9hc3RcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9hc3QuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiZXhwb3J0IGRlZmF1bHQgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcbiIsImltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi9pc0Jyb3dzZXInO1xuXG5jb25zdCB0aW1lb3V0RHVyYXRpb24gPSAoZnVuY3Rpb24oKXtcbiAgY29uc3QgbG9uZ2VyVGltZW91dEJyb3dzZXJzID0gWydFZGdlJywgJ1RyaWRlbnQnLCAnRmlyZWZveCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvbmdlclRpbWVvdXRCcm93c2Vycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGxvbmdlclRpbWVvdXRCcm93c2Vyc1tpXSkgPj0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufSgpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pY3JvdGFza0RlYm91bmNlKGZuKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgd2luZG93LlByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FsbGVkID0gZmFsc2VcbiAgICAgIGZuKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRGVib3VuY2UoZm4pIHtcbiAgbGV0IHNjaGVkdWxlZCA9IGZhbHNlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBmbigpO1xuICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IHN1cHBvcnRzTWljcm9UYXNrcyA9IGlzQnJvd3NlciAmJiB3aW5kb3cuUHJvbWlzZVxuXG5cbi8qKlxuKiBDcmVhdGUgYSBkZWJvdW5jZWQgdmVyc2lvbiBvZiBhIG1ldGhvZCwgdGhhdCdzIGFzeW5jaHJvbm91c2x5IGRlZmVycmVkXG4qIGJ1dCBjYWxsZWQgaW4gdGhlIG1pbmltdW0gdGltZSBwb3NzaWJsZS5cbipcbiogQG1ldGhvZFxuKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4qIEBhcmd1bWVudCB7RnVuY3Rpb259IGZuXG4qIEByZXR1cm5zIHtGdW5jdGlvbn1cbiovXG5leHBvcnQgZGVmYXVsdCAoc3VwcG9ydHNNaWNyb1Rhc2tzXG4gID8gbWljcm90YXNrRGVib3VuY2VcbiAgOiB0YXNrRGVib3VuY2UpO1xuIiwiLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBbnl9IGZ1bmN0aW9uVG9DaGVjayAtIHZhcmlhYmxlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvOiBpcyBhIGZ1bmN0aW9uP1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICBjb25zdCBnZXRUeXBlID0ge307XG4gIHJldHVybiAoXG4gICAgZnVuY3Rpb25Ub0NoZWNrICYmXG4gICAgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgKTtcbn1cbiIsIi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBjc3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5XSA6IGNzcztcbn1cbiIsIi8qKlxuICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIGNhc2UgJ0hUTUwnOlxuICAgIGNhc2UgJ0JPRFknOlxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5XG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICAgIHJldHVybiBlbGVtZW50LmJvZHlcbiAgfVxuXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICBjb25zdCB7IG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSBub2RlIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0LCBvciB0aGUgcmVmZXJlbmNlIG9iamVjdCBpdHNlbGYuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkge1xuICByZXR1cm4gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlID8gcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgOiByZWZlcmVuY2U7XG59XG4iLCJpbXBvcnQgaXNCcm93c2VyIGZyb20gJy4vaXNCcm93c2VyJztcblxuY29uc3QgaXNJRTExID0gaXNCcm93c2VyICYmICEhKHdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpO1xuY29uc3QgaXNJRTEwID0gaXNCcm93c2VyICYmIC9NU0lFIDEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaXNJRVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0lFKHZlcnNpb24pIHtcbiAgaWYgKHZlcnNpb24gPT09IDExKSB7XG4gICAgcmV0dXJuIGlzSUUxMTtcbiAgfVxuICBpZiAodmVyc2lvbiA9PT0gMTApIHtcbiAgICByZXR1cm4gaXNJRTEwO1xuICB9XG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdCBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgbGV0IG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XG4gIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgPT09IG5vT2Zmc2V0UGFyZW50ICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgY29uc3Qgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXG4gIGlmIChcbiAgICBbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJlxuICAgIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJ1xuICApIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuIiwiaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZWxlbWVudDtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudFxuICApO1xufVxuIiwiLyoqXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um9vdChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iLCJpbXBvcnQgaXNPZmZzZXRDb250YWluZXIgZnJvbSAnLi9pc09mZnNldENvbnRhaW5lcic7XG5pbXBvcnQgZ2V0Um9vdCBmcm9tICcuL2dldFJvb3QnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cbiAgY29uc3Qgb3JkZXIgPVxuICAgIGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmXG4gICAgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XG4gIGNvbnN0IHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xuICBjb25zdCBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICByYW5nZS5zZXRTdGFydChzdGFydCwgMCk7XG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xuICBjb25zdCB7IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIH0gPSByYW5nZTtcblxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XG4gIGlmIChcbiAgICAoZWxlbWVudDEgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICYmXG4gICAgICBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIpIHx8XG4gICAgc3RhcnQuY29udGFpbnMoZW5kKVxuICApIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIGNvbnN0IGVsZW1lbnQxcm9vdCA9IGdldFJvb3QoZWxlbWVudDEpO1xuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MXJvb3QuaG9zdCwgZWxlbWVudDIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50LCBzaWRlID0gJ3RvcCcpIHtcbiAgY29uc3QgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cbiIsImltcG9ydCBnZXRTY3JvbGwgZnJvbSAnLi9nZXRTY3JvbGwnO1xuXG4vKlxuICogU3VtIG9yIHN1YnRyYWN0IHRoZSBlbGVtZW50IHNjcm9sbCB2YWx1ZXMgKGxlZnQgYW5kIHRvcCkgZnJvbSBhIGdpdmVuIHJlY3Qgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCAtIFJlY3Qgb2JqZWN0IHlvdSB3YW50IHRvIGNoYW5nZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGZyb20gdGhlIGZ1bmN0aW9uIHJlYWRzIHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN1YnRyYWN0IC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gc3VidHJhY3QgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjdCAtIFRoZSBtb2RpZmllciByZWN0IG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3QsIGVsZW1lbnQsIHN1YnRyYWN0ID0gZmFsc2UpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICBjb25zdCBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cbiIsIi8qXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xuICogUmVzdWx0IG9mIGBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHlgIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gYXhpcyAtIGB4YCBvciBgeWBcbiAqIEByZXR1cm4ge251bWJlcn0gYm9yZGVycyAtIFRoZSBib3JkZXJzIHNpemUgb2YgdGhlIGdpdmVuIGF4aXNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsIGF4aXMpIHtcbiAgY29uc3Qgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgY29uc3Qgc2lkZUIgPSBzaWRlQSA9PT0gJ0xlZnQnID8gJ1JpZ2h0JyA6ICdCb3R0b20nO1xuXG4gIHJldHVybiAoXG4gICAgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUF9V2lkdGhgXSkgK1xuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVCfVdpZHRoYF0pXG4gICk7XG59XG4iLCJpbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KFxuICAgIGJvZHlbYG9mZnNldCR7YXhpc31gXSxcbiAgICBib2R5W2BzY3JvbGwke2F4aXN9YF0sXG4gICAgaHRtbFtgY2xpZW50JHtheGlzfWBdLFxuICAgIGh0bWxbYG9mZnNldCR7YXhpc31gXSxcbiAgICBodG1sW2BzY3JvbGwke2F4aXN9YF0sXG4gICAgaXNJRSgxMClcbiAgICAgID8gKHBhcnNlSW50KGh0bWxbYG9mZnNldCR7YXhpc31gXSkgKyBcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnVG9wJyA6ICdMZWZ0J31gXSkgKyBcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnQm90dG9tJyA6ICdSaWdodCd9YF0pKVxuICAgIDogMCBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoZG9jdW1lbnQpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBpc0lFKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgfTtcbn1cbiIsIi8qKlxuICogR2l2ZW4gZWxlbWVudCBvZmZzZXRzLCBnZW5lcmF0ZSBhbiBvdXRwdXQgc2ltaWxhciB0byBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvZmZzZXRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDbGllbnRSZWN0IGxpa2Ugb3V0cHV0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaWVudFJlY3Qob2Zmc2V0cykge1xuICByZXR1cm4ge1xuICAgIC4uLm9mZnNldHMsXG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXG4gICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0LFxuICB9O1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0Qm9yZGVyc1NpemUgZnJvbSAnLi9nZXRCb3JkZXJzU2l6ZSc7XG5pbXBvcnQgZ2V0V2luZG93U2l6ZXMgZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XG5pbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuXG4vKipcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IGNsaWVudCByZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIGxldCByZWN0ID0ge307XG5cbiAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cbiAgLy8gVGhpcyBpc24ndCByZXByb2R1Y2libGUgaW4gSUUxMCBjb21wYXRpYmlsaXR5IG1vZGUgb2YgSUUxMVxuICB0cnkge1xuICAgIGlmIChpc0lFKDEwKSkge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9XG4gIGNhdGNoKGUpe31cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wLFxuICB9O1xuXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcbiAgY29uc3Qgc2l6ZXMgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgPyBnZXRXaW5kb3dTaXplcyhlbGVtZW50Lm93bmVyRG9jdW1lbnQpIDoge307XG4gIGNvbnN0IHdpZHRoID1cbiAgICBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC53aWR0aDtcbiAgY29uc3QgaGVpZ2h0ID1cbiAgICBzaXplcy5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQgfHwgcmVzdWx0LmhlaWdodDtcblxuICBsZXQgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gIGxldCB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XG5cbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgaW5jbHVkZVNjcm9sbCBmcm9tICcuL2luY2x1ZGVTY3JvbGwnO1xuaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gJy4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0JztcbmltcG9ydCBydW5Jc0lFIGZyb20gJy4vaXNJRSc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCwgZml4ZWRQb3NpdGlvbiA9IGZhbHNlKSB7XG4gIGNvbnN0IGlzSUUxMCA9IHJ1bklzSUUoMTApO1xuICBjb25zdCBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgY29uc3QgY2hpbGRyZW5SZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcbiAgY29uc3QgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICBjb25zdCBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xuICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKTtcbiAgY29uc3QgYm9yZGVyTGVmdFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKTtcblxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcbiAgaWYoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcbiAgICBwYXJlbnRSZWN0LnRvcCA9IE1hdGgubWF4KHBhcmVudFJlY3QudG9wLCAwKTtcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xuICB9XG4gIGxldCBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodCxcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCk7XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKFxuICAgIGlzSUUxMCAmJiAhZml4ZWRQb3NpdGlvblxuICAgICAgPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KVxuICAgICAgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJ1xuICApIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG4iLCJpbXBvcnQgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRTY3JvbGwgZnJvbSAnLi9nZXRTY3JvbGwnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQsIGV4Y2x1ZGVTY3JvbGwgPSBmYWxzZSkge1xuICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgcmVsYXRpdmVPZmZzZXQgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoZWxlbWVudCwgaHRtbCk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XG5cbiAgY29uc3Qgb2Zmc2V0ID0ge1xuICAgIHRvcDogc2Nyb2xsVG9wIC0gcmVsYXRpdmVPZmZzZXQudG9wICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wLFxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSByZWxhdGl2ZU9mZnNldC5sZWZ0ICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG8gXCJpc0ZpeGVkP1wiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICBpZiAoIXBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQocGFyZW50Tm9kZSk7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBpc0lFIGZyb20gJy4vaXNJRSc7XG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBwYXJlbnQgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBhIHRyYW5zZm9ybWVkIHByb3BlcnR5IGRlZmluZWRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IGZpcnN0IHRyYW5zZm9ybWVkIHBhcmVudCBvciBkb2N1bWVudEVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG4gIGxldCBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgd2hpbGUgKGVsICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScpIHtcbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxufVxuIiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU5vZGUgZnJvbSAnLi9nZXRSZWZlcmVuY2VOb2RlJztcbmltcG9ydCBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUgZnJvbSAnLi9nZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldFdpbmRvd1NpemVzIGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuaW1wb3J0IGlzRml4ZWQgZnJvbSAnLi9pc0ZpeGVkJztcbmltcG9ydCBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XG5cbi8qKlxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudCAtIEVsZW1lbnQgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kYXJpZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZml4ZWRQb3NpdGlvbiAtIElzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IENvb3JkaW5hdGVzIG9mIHRoZSBib3VuZGFyaWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kYXJpZXMoXG4gIHBvcHBlcixcbiAgcmVmZXJlbmNlLFxuICBwYWRkaW5nLFxuICBib3VuZGFyaWVzRWxlbWVudCxcbiAgZml4ZWRQb3NpdGlvbiA9IGZhbHNlXG4pIHtcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICBsZXQgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcblxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcgKSB7XG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9XG5cbiAgZWxzZSB7XG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgIGxldCBib3VuZGFyaWVzTm9kZTtcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKHJlZmVyZW5jZSkpO1xuICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGJvdW5kYXJpZXNFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHMgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoXG4gICAgICBib3VuZGFyaWVzTm9kZSxcbiAgICAgIG9mZnNldFBhcmVudCxcbiAgICAgIGZpeGVkUG9zaXRpb25cbiAgICApO1xuXG4gICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRXaW5kb3dTaXplcyhwb3BwZXIub3duZXJEb2N1bWVudCk7XG4gICAgICBib3VuZGFyaWVzLnRvcCArPSBvZmZzZXRzLnRvcCAtIG9mZnNldHMubWFyZ2luVG9wO1xuICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBoZWlnaHQgKyBvZmZzZXRzLnRvcDtcbiAgICAgIGJvdW5kYXJpZXMubGVmdCArPSBvZmZzZXRzLmxlZnQgLSBvZmZzZXRzLm1hcmdpbkxlZnQ7XG4gICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gd2lkdGggKyBvZmZzZXRzLmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBhbGwgdGhlIG90aGVyIERPTSBlbGVtZW50cywgdGhpcyBvbmUgaXMgZ29vZFxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHBhZGRpbmdzXG4gIHBhZGRpbmcgPSBwYWRkaW5nIHx8IDA7XG4gIGNvbnN0IGlzUGFkZGluZ051bWJlciA9IHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJztcbiAgYm91bmRhcmllcy5sZWZ0ICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmxlZnQgfHwgMDsgXG4gIGJvdW5kYXJpZXMudG9wICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLnRvcCB8fCAwOyBcbiAgYm91bmRhcmllcy5yaWdodCAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodCB8fCAwOyBcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcuYm90dG9tIHx8IDA7IFxuXG4gIHJldHVybiBib3VuZGFyaWVzO1xufVxuIiwiaW1wb3J0IGdldEJvdW5kYXJpZXMgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRhcmllcyc7XG5cbmZ1bmN0aW9uIGdldEFyZWEoeyB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICBwbGFjZW1lbnQsXG4gIHJlZlJlY3QsXG4gIHBvcHBlcixcbiAgcmVmZXJlbmNlLFxuICBib3VuZGFyaWVzRWxlbWVudCxcbiAgcGFkZGluZyA9IDBcbikge1xuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgcG9wcGVyLFxuICAgIHJlZmVyZW5jZSxcbiAgICBwYWRkaW5nLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50XG4gICk7XG5cbiAgY29uc3QgcmVjdHMgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcCxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0LFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbSxcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcbiAgICAubWFwKGtleSA9PiAoe1xuICAgICAga2V5LFxuICAgICAgLi4ucmVjdHNba2V5XSxcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSksXG4gICAgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuYXJlYSAtIGEuYXJlYSk7XG5cbiAgY29uc3QgZmlsdGVyZWRBcmVhcyA9IHNvcnRlZEFyZWFzLmZpbHRlcihcbiAgICAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+XG4gICAgICB3aWR0aCA+PSBwb3BwZXIuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHBvcHBlci5jbGllbnRIZWlnaHRcbiAgKTtcblxuICBjb25zdCBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMFxuICAgID8gZmlsdGVyZWRBcmVhc1swXS5rZXlcbiAgICA6IHNvcnRlZEFyZWFzWzBdLmtleTtcblxuICBjb25zdCB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYC0ke3ZhcmlhdGlvbn1gIDogJycpO1xufVxuIiwiaW1wb3J0IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9maW5kQ29tbW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xuaW1wb3J0IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRSZWZlcmVuY2VOb2RlIGZyb20gJy4vZ2V0UmVmZXJlbmNlTm9kZSc7XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZpeGVkUG9zaXRpb24gLSBpcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgZml4ZWRQb3NpdGlvbiA9IG51bGwpIHtcbiAgY29uc3QgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKHJlZmVyZW5jZSwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGNvbnN0IHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgMCk7XG4gIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHgsXG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICBjb25zdCBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIG1hdGNoZWQgPT4gaGFzaFttYXRjaGVkXSk7XG59XG4iLCJpbXBvcnQgZ2V0T3V0ZXJTaXplcyBmcm9tICcuL2dldE91dGVyU2l6ZXMnO1xuaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gJy4vZ2V0T3Bwb3NpdGVQbGFjZW1lbnQnO1xuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiAtIENTUyBwb3NpdGlvbiB0aGUgUG9wcGVyIHdpbGwgZ2V0IGFwcGxpZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHMgLSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlbWVudCAtIG9uZSBvZiB0aGUgdmFsaWQgcGxhY2VtZW50IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IHBvcHBlck9mZnNldHMgLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQb3BwZXJPZmZzZXRzKHBvcHBlciwgcmVmZXJlbmNlT2Zmc2V0cywgcGxhY2VtZW50KSB7XG4gIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIC8vIEdldCBwb3BwZXIgbm9kZSBzaXplc1xuICBjb25zdCBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHBvcHBlclJlY3QuaGVpZ2h0LFxuICB9O1xuXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgcG9wcGVyIHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgY29uc3QgaXNIb3JpeiA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIGNvbnN0IG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xuICBjb25zdCBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBtZWFzdXJlbWVudCA9IGlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIGNvbnN0IHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgcG9wcGVyT2Zmc2V0c1ttYWluU2lkZV0gPVxuICAgIHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICtcbiAgICByZWZlcmVuY2VPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLVxuICAgIHBvcHBlclJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcbiAgaWYgKHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZSkge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPVxuICAgICAgcmVmZXJlbmNlT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHBvcHBlclJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdO1xuICB9IGVsc2Uge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPVxuICAgICAgcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cbiIsIi8qKlxuICogTWltaWNzIHRoZSBgZmluZGAgbWV0aG9kIG9mIEFycmF5XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmQoYXJyLCBjaGVjaykge1xuICAvLyB1c2UgbmF0aXZlIGZpbmQgaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgIHJldHVybiBhcnIuZmluZChjaGVjayk7XG4gIH1cblxuICAvLyB1c2UgYGZpbHRlcmAgdG8gb2J0YWluIHRoZSBzYW1lIGJlaGF2aW9yIG9mIGBmaW5kYFxuICByZXR1cm4gYXJyLmZpbHRlcihjaGVjaylbMF07XG59XG4iLCJpbXBvcnQgZmluZCBmcm9tICcuL2ZpbmQnO1xuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG1hdGNoaW5nIG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBwcm9wLCB2YWx1ZSkge1xuICAvLyB1c2UgbmF0aXZlIGZpbmRJbmRleCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLmZpbmRJbmRleChjdXIgPT4gY3VyW3Byb3BdID09PSB2YWx1ZSk7XG4gIH1cblxuICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICBjb25zdCBtYXRjaCA9IGZpbmQoYXJyLCBvYmogPT4gb2JqW3Byb3BdID09PSB2YWx1ZSk7XG4gIHJldHVybiBhcnIuaW5kZXhPZihtYXRjaCk7XG59XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24nO1xuaW1wb3J0IGZpbmRJbmRleCBmcm9tICcuL2ZpbmRJbmRleCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcblxuLyoqXG4gKiBMb29wIHRyb3VnaCB0aGUgbGlzdCBvZiBtb2RpZmllcnMgYW5kIHJ1biB0aGVtIGluIG9yZGVyLFxuICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcyAtIE9wdGlvbmFsIG1vZGlmaWVyIG5hbWUgdXNlZCBhcyBzdG9wcGVyXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuTW9kaWZpZXJzKG1vZGlmaWVycywgZGF0YSwgZW5kcykge1xuICBjb25zdCBtb2RpZmllcnNUb1J1biA9IGVuZHMgPT09IHVuZGVmaW5lZFxuICAgID8gbW9kaWZpZXJzXG4gICAgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChtb2RpZmllciA9PiB7XG4gICAgaWYgKG1vZGlmaWVyWydmdW5jdGlvbiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICBjb25zb2xlLndhcm4oJ2Btb2RpZmllci5mdW5jdGlvbmAgaXMgZGVwcmVjYXRlZCwgdXNlIGBtb2RpZmllci5mbmAhJyk7XG4gICAgfVxuICAgIGNvbnN0IGZuID0gbW9kaWZpZXJbJ2Z1bmN0aW9uJ10gfHwgbW9kaWZpZXIuZm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgIC8vIHdlIGRvIHRoaXMgYmVmb3JlIGVhY2ggbW9kaWZpZXIgdG8gbWFrZSBzdXJlIHRoZSBwcmV2aW91cyBvbmUgZG9lc24ndFxuICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcblxuICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50JztcbmltcG9ydCBnZXRSZWZlcmVuY2VPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMnO1xuaW1wb3J0IGdldFBvcHBlck9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcnVuTW9kaWZpZXJzIGZyb20gJy4uL3V0aWxzL3J1bk1vZGlmaWVycyc7XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcHBlciwgY29tcHV0aW5nIHRoZSBuZXcgb2Zmc2V0cyBhbmQgYXBwbHlpbmdcbiAqIHRoZSBuZXcgc3R5bGUuPGJyIC8+XG4gKiBQcmVmZXIgYHNjaGVkdWxlVXBkYXRlYCBvdmVyIGB1cGRhdGVgIGJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAvLyBpZiBwb3BwZXIgaXMgZGVzdHJveWVkLCBkb24ndCBwZXJmb3JtIGFueSBmdXJ0aGVyIHVwZGF0ZVxuICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBkYXRhID0ge1xuICAgIGluc3RhbmNlOiB0aGlzLFxuICAgIHN0eWxlczoge30sXG4gICAgYXJyb3dTdHlsZXM6IHt9LFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGZsaXBwZWQ6IGZhbHNlLFxuICAgIG9mZnNldHM6IHt9LFxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhcbiAgICB0aGlzLnN0YXRlLFxuICAgIHRoaXMucG9wcGVyLFxuICAgIHRoaXMucmVmZXJlbmNlLFxuICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGRhdGEucGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCxcbiAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgIHRoaXMucG9wcGVyLFxuICAgIHRoaXMucmVmZXJlbmNlLFxuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZ1xuICApO1xuXG4gIC8vIHN0b3JlIHRoZSBjb21wdXRlZCBwbGFjZW1lbnQgaW5zaWRlIGBvcmlnaW5hbFBsYWNlbWVudGBcbiAgZGF0YS5vcmlnaW5hbFBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuXG4gIGRhdGEucG9zaXRpb25GaXhlZCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkO1xuXG4gIC8vIGNvbXB1dGUgdGhlIHBvcHBlciBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRQb3BwZXJPZmZzZXRzKFxuICAgIHRoaXMucG9wcGVyLFxuICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgZGF0YS5wbGFjZW1lbnRcbiAgKTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWRcbiAgICA/ICdmaXhlZCdcbiAgICA6ICdhYnNvbHV0ZSc7XG5cbiAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgZGF0YSA9IHJ1bk1vZGlmaWVycyh0aGlzLm1vZGlmaWVycywgZGF0YSk7XG5cbiAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gIGlmICghdGhpcy5zdGF0ZS5pc0NyZWF0ZWQpIHtcbiAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBpcyBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTW9kaWZpZXJFbmFibGVkKG1vZGlmaWVycywgbW9kaWZpZXJOYW1lKSB7XG4gIHJldHVybiBtb2RpZmllcnMuc29tZShcbiAgICAoeyBuYW1lLCBlbmFibGVkIH0pID0+IGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lXG4gICk7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgcHJlZml4ZWQgc3VwcG9ydGVkIHByb3BlcnR5IG5hbWVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eSAoY2FtZWxDYXNlKVxuICogQHJldHVybnMge1N0cmluZ30gcHJlZml4ZWQgcHJvcGVydHkgKGNhbWVsQ2FzZSBvciBQYXNjYWxDYXNlLCBkZXBlbmRpbmcgb24gdGhlIHZlbmRvciBwcmVmaXgpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICBjb25zdCBwcmVmaXhlcyA9IFtmYWxzZSwgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICBjb25zdCB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICBjb25zdCB0b0NoZWNrID0gcHJlZml4ID8gYCR7cHJlZml4fSR7dXBwZXJQcm9wfWAgOiBwcm9wZXJ0eTtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbdG9DaGVja10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdG9DaGVjaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgaXNNb2RpZmllckVuYWJsZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllckVuYWJsZWQnO1xuaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBwb3BwZXIuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gIC8vIHRvdWNoIERPTSBvbmx5IGlmIGBhcHBseVN0eWxlYCBtb2RpZmllciBpcyBlbmFibGVkXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZCh0aGlzLm1vZGlmaWVycywgJ2FwcGx5U3R5bGUnKSkge1xuICAgIHRoaXMucG9wcGVyLnJlbW92ZUF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKTtcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLndpbGxDaGFuZ2UgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZVtnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXSA9ICcnO1xuICB9XG5cbiAgdGhpcy5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAvLyByZW1vdmUgdGhlIHBvcHBlciBpZiB1c2VyIGV4cGxpY2l0bHkgYXNrZWQgZm9yIHRoZSBkZWxldGlvbiBvbiBkZXN0cm95XG4gIC8vIGRvIG5vdCB1c2UgYHJlbW92ZWAgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZU9uRGVzdHJveSkge1xuICAgIHRoaXMucG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wb3BwZXIpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIHdpbmRvdyBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge1dpbmRvd31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcbiAgY29uc3Qgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogd2luZG93O1xufVxuIiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuZnVuY3Rpb24gYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbFBhcmVudCwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKSB7XG4gIGNvbnN0IGlzQm9keSA9IHNjcm9sbFBhcmVudC5ub2RlTmFtZSA9PT0gJ0JPRFknO1xuICBjb25zdCB0YXJnZXQgPSBpc0JvZHkgPyBzY3JvbGxQYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHNjcm9sbFBhcmVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaWYgKCFpc0JvZHkpIHtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoXG4gICAgICBnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLFxuICAgICAgZXZlbnQsXG4gICAgICBjYWxsYmFjayxcbiAgICAgIHNjcm9sbFBhcmVudHNcbiAgICApO1xuICB9XG4gIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhcbiAgcmVmZXJlbmNlLFxuICBvcHRpb25zLFxuICBzdGF0ZSxcbiAgdXBkYXRlQm91bmRcbikge1xuICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgLy8gU2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKFxuICAgIHNjcm9sbEVsZW1lbnQsXG4gICAgJ3Njcm9sbCcsXG4gICAgc3RhdGUudXBkYXRlQm91bmQsXG4gICAgc3RhdGUuc2Nyb2xsUGFyZW50c1xuICApO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gc2Nyb2xsRWxlbWVudDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHNldHVwRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi4vdXRpbHMvc2V0dXBFdmVudExpc3RlbmVycyc7XG5cbi8qKlxuICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAqIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIgZWxlbWVudCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHNldHVwRXZlbnRMaXN0ZW5lcnMoXG4gICAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHRoaXMuc3RhdGUsXG4gICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2dldFdpbmRvdyc7XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIHN0YXRlKSB7XG4gIC8vIFJlbW92ZSByZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcblxuICAvLyBSZW1vdmUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHN0YXRlLnNjcm9sbFBhcmVudHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG4gIH0pO1xuXG4gIC8vIFJlc2V0IHN0YXRlXG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gbnVsbDtcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IFtdO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGZhbHNlO1xuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi4vdXRpbHMvcmVtb3ZlRXZlbnRMaXN0ZW5lcnMnO1xuXG4vKipcbiAqIEl0IHdpbGwgcmVtb3ZlIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCB3b24ndCByZWNhbGN1bGF0ZSBwb3BwZXIgcG9zaXRpb25cbiAqIHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLiBJdCBhbHNvIHdvbid0IHRyaWdnZXIgYG9uVXBkYXRlYCBjYWxsYmFjayBhbnltb3JlLFxuICogdW5sZXNzIHlvdSBjYWxsIGB1cGRhdGVgIG1ldGhvZCBtYW51YWxseS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAodGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9IHJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUZWxscyBpZiBhIGdpdmVuIGlucHV0IGlzIGEgbnVtYmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0geyp9IGlucHV0IHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gbiAhPT0gJycgJiYgIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuIiwiaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuL2lzTnVtZXJpYyc7XG5cbi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBzdHlsZSB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgbGV0IHVuaXQgPSAnJztcbiAgICAvLyBhZGQgdW5pdCBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYyBhbmQgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICBpZiAoXG4gICAgICBbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PVxuICAgICAgICAtMSAmJlxuICAgICAgaXNOdW1lcmljKHN0eWxlc1twcm9wXSlcbiAgICApIHtcbiAgICAgIHVuaXQgPSAncHgnO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdICsgdW5pdDtcbiAgfSk7XG59XG4iLCIvKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW3Byb3BdO1xuICAgIGlmICh2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJpYnV0ZXNbcHJvcF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHNldFN0eWxlcyBmcm9tICcuLi91dGlscy9zZXRTdHlsZXMnO1xuaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSAnLi4vdXRpbHMvc2V0QXR0cmlidXRlcyc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzJztcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tICcuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQoXG4gIHJlZmVyZW5jZSxcbiAgcG9wcGVyLFxuICBvcHRpb25zLFxuICBtb2RpZmllck9wdGlvbnMsXG4gIHN0YXRlXG4pIHtcbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGNvbnN0IHJlZmVyZW5jZU9mZnNldHMgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgY29uc3QgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gICAgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgcmVmZXJlbmNlT2Zmc2V0cyxcbiAgICBwb3BwZXIsXG4gICAgcmVmZXJlbmNlLFxuICAgIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nXG4gICk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xuXG4gIC8vIEFwcGx5IGBwb3NpdGlvbmAgdG8gcG9wcGVyIGJlZm9yZSBhbnl0aGluZyBlbHNlIGJlY2F1c2VcbiAgLy8gd2l0aG91dCB0aGUgcG9zaXRpb24gYXBwbGllZCB3ZSBjYW4ndCBndWFyYW50ZWUgY29ycmVjdCBjb21wdXRhdGlvbnNcbiAgc2V0U3R5bGVzKHBvcHBlciwgeyBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtCb29sZWFufSBzaG91bGRSb3VuZCAtIElmIHRoZSBvZmZzZXRzIHNob3VsZCBiZSByb3VuZGVkIGF0IGFsbFxuICogQHJldHVybnMge09iamVjdH0gVGhlIHBvcHBlcidzIHBvc2l0aW9uIG9mZnNldHMgcm91bmRlZFxuICpcbiAqIFRoZSB0YWxlIG9mIHBpeGVsLXBlcmZlY3QgcG9zaXRpb25pbmcuIEl0J3Mgc3RpbGwgbm90IDEwMCUgcGVyZmVjdCwgYnV0IGFzXG4gKiBnb29kIGFzIGl0IGNhbiBiZSB3aXRoaW4gcmVhc29uLlxuICogRGlzY3Vzc2lvbiBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9wdWxsLzcxNVxuICpcbiAqIExvdyBEUEkgc2NyZWVucyBjYXVzZSBhIHBvcHBlciB0byBiZSBibHVycnkgaWYgbm90IHVzaW5nIGZ1bGwgcGl4ZWxzIChTYWZhcmlcbiAqIGFzIHdlbGwgb24gSGlnaCBEUEkgc2NyZWVucykuXG4gKlxuICogRmlyZWZveCBwcmVmZXJzIG5vIHJvdW5kaW5nIGZvciBwb3NpdGlvbmluZyBhbmQgZG9lcyBub3QgaGF2ZSBibHVycmluZXNzIG9uXG4gKiBoaWdoIERQSSBzY3JlZW5zLlxuICpcbiAqIE9ubHkgaG9yaXpvbnRhbCBwbGFjZW1lbnQgYW5kIGxlZnQvcmlnaHQgdmFsdWVzIG5lZWQgdG8gYmUgY29uc2lkZXJlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um91bmRlZE9mZnNldHMoZGF0YSwgc2hvdWxkUm91bmQpIHtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCB7IHJvdW5kLCBmbG9vciB9ID0gTWF0aDtcbiAgY29uc3Qgbm9Sb3VuZCA9IHYgPT4gdjtcbiAgXG4gIGNvbnN0IHJlZmVyZW5jZVdpZHRoID0gcm91bmQocmVmZXJlbmNlLndpZHRoKTtcbiAgY29uc3QgcG9wcGVyV2lkdGggPSByb3VuZChwb3BwZXIud2lkdGgpO1xuICBcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoZGF0YS5wbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3QgaXNWYXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5pbmRleE9mKCctJykgIT09IC0xO1xuICBjb25zdCBzYW1lV2lkdGhQYXJpdHkgPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IHBvcHBlcldpZHRoICUgMjtcbiAgY29uc3QgYm90aE9kZFdpZHRoID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSAxICYmIHBvcHBlcldpZHRoICUgMiA9PT0gMTtcblxuICBjb25zdCBob3Jpem9udGFsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kXG4gICAgPyBub1JvdW5kXG4gICAgOiBpc1ZlcnRpY2FsIHx8IGlzVmFyaWF0aW9uIHx8IHNhbWVXaWR0aFBhcml0eVxuICAgID8gcm91bmRcbiAgICA6IGZsb29yO1xuICBjb25zdCB2ZXJ0aWNhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZCA/IG5vUm91bmQgOiByb3VuZDtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IGhvcml6b250YWxUb0ludGVnZXIoXG4gICAgICBib3RoT2RkV2lkdGggJiYgIWlzVmFyaWF0aW9uICYmIHNob3VsZFJvdW5kXG4gICAgICAgID8gcG9wcGVyLmxlZnQgLSAxXG4gICAgICAgIDogcG9wcGVyLmxlZnRcbiAgICApLFxuICAgIHRvcDogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLnRvcCksXG4gICAgYm90dG9tOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIuYm90dG9tKSxcbiAgICByaWdodDogaG9yaXpvbnRhbFRvSW50ZWdlcihwb3BwZXIucmlnaHQpLFxuICB9O1xufVxuIiwiaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4uL3V0aWxzL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0Um91bmRlZE9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0Um91bmRlZE9mZnNldHMnO1xuaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuLi91dGlscy9pc0Jyb3dzZXInO1xuXG5jb25zdCBpc0ZpcmVmb3ggPSBpc0Jyb3dzZXIgJiYgL0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3R5bGUoZGF0YSwgb3B0aW9ucykge1xuICBjb25zdCB7IHgsIHkgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgcG9wcGVyIH0gPSBkYXRhLm9mZnNldHM7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG4gIGNvbnN0IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoXG4gICAgZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsXG4gICAgbW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ2FwcGx5U3R5bGUnXG4gICkuZ3B1QWNjZWxlcmF0aW9uO1xuICBpZiAobGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnV0FSTklORzogYGdwdUFjY2VsZXJhdGlvbmAgb3B0aW9uIG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyIGFuZCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBvcHBlci5qcyEnXG4gICAgKTtcbiAgfVxuICBjb25zdCBncHVBY2NlbGVyYXRpb24gPVxuICAgIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvblxuICAgICAgOiBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbjtcblxuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICBjb25zdCBvZmZzZXRQYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG5cbiAgLy8gU3R5bGVzXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogcG9wcGVyLnBvc2l0aW9uLFxuICB9O1xuXG4gIGNvbnN0IG9mZnNldHMgPSBnZXRSb3VuZGVkT2Zmc2V0cyhcbiAgICBkYXRhLFxuICAgIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiB8fCAhaXNGaXJlZm94XG4gICk7XG5cbiAgY29uc3Qgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIGNvbnN0IHNpZGVCID0geSA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgLy8gaWYgZ3B1QWNjZWxlcmF0aW9uIGlzIHNldCB0byBgdHJ1ZWAgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHZlcnNpb24gaWYgbmVlZGVkXG4gIGNvbnN0IHByZWZpeGVkUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuXG4gIC8vIG5vdywgbGV0J3MgbWFrZSBhIHN0ZXAgYmFjayBhbmQgbG9vayBhdCB0aGlzIGNvZGUgY2xvc2VseSAod3RmPylcbiAgLy8gSWYgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcHBlciBncm93cyBvbmNlIGl0J3MgYmVlbiBwb3NpdGlvbmVkLCBpdFxuICAvLyBtYXkgaGFwcGVuIHRoYXQgdGhlIHBvcHBlciBnZXRzIG1pc3BsYWNlZCBiZWNhdXNlIG9mIHRoZSBuZXcgY29udGVudFxuICAvLyBvdmVyZmxvd2luZyBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVG8gYXZvaWQgdGhpcyBwcm9ibGVtLCB3ZSBwcm92aWRlIHR3byBvcHRpb25zICh4IGFuZCB5KSwgd2hpY2ggYWxsb3dcbiAgLy8gdGhlIGNvbnN1bWVyIHRvIGRlZmluZSB0aGUgb2Zmc2V0IG9yaWdpbi5cbiAgLy8gSWYgd2UgcG9zaXRpb24gYSBwb3BwZXIgb24gdG9wIG9mIGEgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIGNhbiBzZXRcbiAgLy8gYHhgIHRvIGB0b3BgIHRvIG1ha2UgdGhlIHBvcHBlciBncm93IHRvd2FyZHMgaXRzIHRvcCBpbnN0ZWFkIG9mXG4gIC8vIGl0cyBib3R0b20uXG4gIGxldCBsZWZ0LCB0b3A7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICAvLyB3aGVuIG9mZnNldFBhcmVudCBpcyA8aHRtbD4gdGhlIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoZXhjbHVkaW5nIHRoZSBzY3JvbGxiYXIpXG4gICAgLy8gYW5kIG5vdCB0aGUgYm90dG9tIG9mIHRoZSBodG1sIGVsZW1lbnRcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnRSZWN0LmhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVmdCA9IG9mZnNldHMubGVmdDtcbiAgfVxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSBgdHJhbnNsYXRlM2QoJHtsZWZ0fXB4LCAke3RvcH1weCwgMClgO1xuICAgIHN0eWxlc1tzaWRlQV0gPSAwO1xuICAgIHN0eWxlc1tzaWRlQl0gPSAwO1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3Rod2VyaXNlLCB3ZSB1c2UgdGhlIHN0YW5kYXJkIGB0b3BgLCBgbGVmdGAsIGBib3R0b21gIGFuZCBgcmlnaHRgIHByb3BlcnRpZXNcbiAgICBjb25zdCBpbnZlcnRUb3AgPSBzaWRlQSA9PT0gJ2JvdHRvbScgPyAtMSA6IDE7XG4gICAgY29uc3QgaW52ZXJ0TGVmdCA9IHNpZGVCID09PSAncmlnaHQnID8gLTEgOiAxO1xuICAgIHN0eWxlc1tzaWRlQV0gPSB0b3AgKiBpbnZlcnRUb3A7XG4gICAgc3R5bGVzW3NpZGVCXSA9IGxlZnQgKiBpbnZlcnRMZWZ0O1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gYCR7c2lkZUF9LCAke3NpZGVCfWA7XG4gIH1cblxuICAvLyBBdHRyaWJ1dGVzXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gICAgJ3gtcGxhY2VtZW50JzogZGF0YS5wbGFjZW1lbnQsXG4gIH07XG5cbiAgLy8gVXBkYXRlIGBkYXRhYCBhdHRyaWJ1dGVzLCBzdHlsZXMgYW5kIGFycm93U3R5bGVzXG4gIGRhdGEuYXR0cmlidXRlcyA9IHsgLi4uYXR0cmlidXRlcywgLi4uZGF0YS5hdHRyaWJ1dGVzIH07XG4gIGRhdGEuc3R5bGVzID0geyAuLi5zdHlsZXMsIC4uLmRhdGEuc3R5bGVzIH07XG4gIGRhdGEuYXJyb3dTdHlsZXMgPSB7IC4uLmRhdGEub2Zmc2V0cy5hcnJvdywgLi4uZGF0YS5hcnJvd1N0eWxlcyB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBkZXBlbmRzIGZyb20gYW5vdGhlciBvbmUuPGJyIC8+XG4gKiBJdCBjaGVja3MgaWYgdGhlIG5lZWRlZCBtb2RpZmllciBpcyBsaXN0ZWQgYW5kIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMgLSBsaXN0IG9mIG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RpbmdOYW1lIC0gbmFtZSBvZiByZXF1ZXN0aW5nIG1vZGlmaWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGVkTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGVkIG1vZGlmaWVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2RpZmllclJlcXVpcmVkKFxuICBtb2RpZmllcnMsXG4gIHJlcXVlc3RpbmdOYW1lLFxuICByZXF1ZXN0ZWROYW1lXG4pIHtcbiAgY29uc3QgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCAoeyBuYW1lIH0pID0+IG5hbWUgPT09IHJlcXVlc3RpbmdOYW1lKTtcblxuICBjb25zdCBpc1JlcXVpcmVkID1cbiAgICAhIXJlcXVlc3RpbmcgJiZcbiAgICBtb2RpZmllcnMuc29tZShtb2RpZmllciA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2RpZmllci5uYW1lID09PSByZXF1ZXN0ZWROYW1lICYmXG4gICAgICAgIG1vZGlmaWVyLmVuYWJsZWQgJiZcbiAgICAgICAgbW9kaWZpZXIub3JkZXIgPCByZXF1ZXN0aW5nLm9yZGVyXG4gICAgICApO1xuICAgIH0pO1xuXG4gIGlmICghaXNSZXF1aXJlZCkge1xuICAgIGNvbnN0IHJlcXVlc3RpbmcgPSBgXFxgJHtyZXF1ZXN0aW5nTmFtZX1cXGBgO1xuICAgIGNvbnN0IHJlcXVlc3RlZCA9IGBcXGAke3JlcXVlc3RlZE5hbWV9XFxgYDtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgJHtyZXF1ZXN0ZWR9IG1vZGlmaWVyIGlzIHJlcXVpcmVkIGJ5ICR7cmVxdWVzdGluZ30gbW9kaWZpZXIgaW4gb3JkZXIgdG8gd29yaywgYmUgc3VyZSB0byBpbmNsdWRlIGl0IGJlZm9yZSAke3JlcXVlc3Rpbmd9IWBcbiAgICApO1xuICB9XG4gIHJldHVybiBpc1JlcXVpcmVkO1xufVxuIiwiaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0T3V0ZXJTaXplcyBmcm9tICcuLi91dGlscy9nZXRPdXRlclNpemVzJztcbmltcG9ydCBpc01vZGlmaWVyUmVxdWlyZWQgZnJvbSAnLi4vdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkJztcbmltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi4vdXRpbHMvZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycm93KGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gYXJyb3cgZGVwZW5kcyBvbiBrZWVwVG9nZXRoZXIgaW4gb3JkZXIgdG8gd29ya1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2Fycm93JywgJ2tlZXBUb2dldGhlcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBsZXQgYXJyb3dFbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIHRoZSBhcnJvd0VsZW1lbnQgaXNuJ3QgYSBxdWVyeSBzZWxlY3RvciB3ZSBtdXN0IGNoZWNrIHRoYXQgdGhlXG4gICAgLy8gcHJvdmlkZWQgRE9NIG5vZGUgaXMgY2hpbGQgb2YgaXRzIHBvcHBlciBub2RlXG4gICAgaWYgKCFkYXRhLmluc3RhbmNlLnBvcHBlci5jb250YWlucyhhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3QgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICBjb25zdCBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIGNvbnN0IGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAvL1xuICAvLyBleHRlbmRzIGtlZXBUb2dldGhlciBiZWhhdmlvciBtYWtpbmcgc3VyZSB0aGUgcG9wcGVyIGFuZCBpdHNcbiAgLy8gcmVmZXJlbmNlIGhhdmUgZW5vdWdoIHBpeGVscyBpbiBjb25qdW5jdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT1cbiAgICAgIHBvcHBlcltzaWRlXSAtIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplID4gcG9wcGVyW29wU2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdICs9XG4gICAgICByZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplIC0gcG9wcGVyW29wU2lkZV07XG4gIH1cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG5cbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHBvcHBlclxuICBjb25zdCBjZW50ZXIgPSByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMjtcblxuICAvLyBDb21wdXRlIHRoZSBzaWRlVmFsdWUgdXNpbmcgdGhlIHVwZGF0ZWQgcG9wcGVyIG9mZnNldHNcbiAgLy8gdGFrZSBwb3BwZXIgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgY29uc3QgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgY29uc3QgcG9wcGVyTWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2BtYXJnaW4ke3NpZGVDYXBpdGFsaXplZH1gXSk7XG4gIGNvbnN0IHBvcHBlckJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgYm9yZGVyJHtzaWRlQ2FwaXRhbGl6ZWR9V2lkdGhgXSk7XG4gIGxldCBzaWRlVmFsdWUgPVxuICAgIGNlbnRlciAtIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLSBwb3BwZXJNYXJnaW5TaWRlIC0gcG9wcGVyQm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge1xuICAgIFtzaWRlXTogTWF0aC5yb3VuZChzaWRlVmFsdWUpLFxuICAgIFthbHRTaWRlXTogJycsIC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCB2YXJpYXRpb24gb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCB2YXJpYXRpb25cbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50IHZhcmlhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pIHtcbiAgaWYgKHZhcmlhdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gJ3N0YXJ0JztcbiAgfSBlbHNlIGlmICh2YXJpYXRpb24gPT09ICdzdGFydCcpIHtcbiAgICByZXR1cm4gJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIHZhcmlhdGlvbjtcbn1cbiIsIi8qKlxuICogTGlzdCBvZiBhY2NlcHRlZCBwbGFjZW1lbnRzIHRvIHVzZSBhcyB2YWx1ZXMgb2YgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbi48YnIgLz5cbiAqIFZhbGlkIHBsYWNlbWVudHMgYXJlOlxuICogLSBgYXV0b2BcbiAqIC0gYHRvcGBcbiAqIC0gYHJpZ2h0YFxuICogLSBgYm90dG9tYFxuICogLSBgbGVmdGBcbiAqXG4gKiBFYWNoIHBsYWNlbWVudCBjYW4gaGF2ZSBhIHZhcmlhdGlvbiBmcm9tIHRoaXMgbGlzdDpcbiAqIC0gYC1zdGFydGBcbiAqIC0gYC1lbmRgXG4gKlxuICogVmFyaWF0aW9ucyBhcmUgaW50ZXJwcmV0ZWQgZWFzaWx5IGlmIHlvdSB0aGluayBvZiB0aGVtIGFzIHRoZSBsZWZ0IHRvIHJpZ2h0XG4gKiB3cml0dGVuIGxhbmd1YWdlcy4gSG9yaXpvbnRhbGx5IChgdG9wYCBhbmQgYGJvdHRvbWApLCBgc3RhcnRgIGlzIGxlZnQgYW5kIGBlbmRgXG4gKiBpcyByaWdodC48YnIgLz5cbiAqIFZlcnRpY2FsbHkgKGBsZWZ0YCBhbmQgYHJpZ2h0YCksIGBzdGFydGAgaXMgdG9wIGFuZCBgZW5kYCBpcyBib3R0b20uXG4gKlxuICogU29tZSB2YWxpZCBleGFtcGxlcyBhcmU6XG4gKiAtIGB0b3AtZW5kYCAob24gdG9wIG9mIHJlZmVyZW5jZSwgcmlnaHQgYWxpZ25lZClcbiAqIC0gYHJpZ2h0LXN0YXJ0YCAob24gcmlnaHQgb2YgcmVmZXJlbmNlLCB0b3AgYWxpZ25lZClcbiAqIC0gYGJvdHRvbWAgKG9uIGJvdHRvbSwgY2VudGVyZWQpXG4gKiAtIGBhdXRvLWVuZGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICAnYXV0by1zdGFydCcsXG4gICdhdXRvJyxcbiAgJ2F1dG8tZW5kJyxcbiAgJ3RvcC1zdGFydCcsXG4gICd0b3AnLFxuICAndG9wLWVuZCcsXG4gICdyaWdodC1zdGFydCcsXG4gICdyaWdodCcsXG4gICdyaWdodC1lbmQnLFxuICAnYm90dG9tLWVuZCcsXG4gICdib3R0b20nLFxuICAnYm90dG9tLXN0YXJ0JyxcbiAgJ2xlZnQtZW5kJyxcbiAgJ2xlZnQnLFxuICAnbGVmdC1zdGFydCcsXG5dO1xuIiwiaW1wb3J0IHBsYWNlbWVudHMgZnJvbSAnLi4vbWV0aG9kcy9wbGFjZW1lbnRzJztcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG5jb25zdCB2YWxpZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLnNsaWNlKDMpO1xuXG4vKipcbiAqIEdpdmVuIGFuIGluaXRpYWwgcGxhY2VtZW50LCByZXR1cm5zIGFsbCB0aGUgc3Vic2VxdWVudCBwbGFjZW1lbnRzXG4gKiBjbG9ja3dpc2UgKG9yIGNvdW50ZXItY2xvY2t3aXNlKS5cbiAqXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IC0gQSB2YWxpZCBwbGFjZW1lbnQgKGl0IGFjY2VwdHMgdmFyaWF0aW9ucylcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gY291bnRlciAtIFNldCB0byB0cnVlIHRvIHdhbGsgdGhlIHBsYWNlbWVudHMgY291bnRlcmNsb2Nrd2lzZVxuICogQHJldHVybnMge0FycmF5fSBwbGFjZW1lbnRzIGluY2x1ZGluZyB0aGVpciB2YXJpYXRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb2Nrd2lzZShwbGFjZW1lbnQsIGNvdW50ZXIgPSBmYWxzZSkge1xuICBjb25zdCBpbmRleCA9IHZhbGlkUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCk7XG4gIGNvbnN0IGFyciA9IHZhbGlkUGxhY2VtZW50c1xuICAgIC5zbGljZShpbmRleCArIDEpXG4gICAgLmNvbmNhdCh2YWxpZFBsYWNlbWVudHMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgcmV0dXJuIGNvdW50ZXIgPyBhcnIucmV2ZXJzZSgpIDogYXJyO1xufVxuIiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50JztcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvbiBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvbic7XG5pbXBvcnQgZ2V0UG9wcGVyT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRQb3BwZXJPZmZzZXRzJztcbmltcG9ydCBydW5Nb2RpZmllcnMgZnJvbSAnLi4vdXRpbHMvcnVuTW9kaWZpZXJzJztcbmltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuaW1wb3J0IGlzTW9kaWZpZXJFbmFibGVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkJztcbmltcG9ydCBjbG9ja3dpc2UgZnJvbSAnLi4vdXRpbHMvY2xvY2t3aXNlJztcblxuY29uc3QgQkVIQVZJT1JTID0ge1xuICBGTElQOiAnZmxpcCcsXG4gIENMT0NLV0lTRTogJ2Nsb2Nrd2lzZScsXG4gIENPVU5URVJDTE9DS1dJU0U6ICdjb3VudGVyY2xvY2t3aXNlJyxcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmbGlwKGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gaWYgYGlubmVyYCBtb2RpZmllciBpcyBlbmFibGVkLCB3ZSBjYW4ndCB1c2UgdGhlIGBmbGlwYCBtb2RpZmllclxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdpbm5lcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGF0YS5mbGlwcGVkICYmIGRhdGEucGxhY2VtZW50ID09PSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50KSB7XG4gICAgLy8gc2VlbXMgbGlrZSBmbGlwIGlzIHRyeWluZyB0byBsb29wLCBwcm9iYWJseSB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2Ugb24gYW55IG9mIHRoZSBmbGlwcGFibGUgc2lkZXNcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIGRhdGEuaW5zdGFuY2UucG9wcGVyLFxuICAgIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLFxuICAgIG9wdGlvbnMucGFkZGluZyxcbiAgICBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIGRhdGEucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIGxldCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBsZXQgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBsZXQgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICBsZXQgZmxpcE9yZGVyID0gW107XG5cbiAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgIGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIHBsYWNlbWVudE9wcG9zaXRlXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGZsaXBPcmRlciA9IG9wdGlvbnMuYmVoYXZpb3I7XG4gIH1cblxuICBmbGlwT3JkZXIuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICBjb25zdCBwb3BwZXJPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcbiAgICBjb25zdCByZWZPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIHJlZmVyZW5jZSBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICBjb25zdCBvdmVybGFwc1JlZiA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihyZWZPZmZzZXRzLmxlZnQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IocmVmT2Zmc2V0cy5yaWdodCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihyZWZPZmZzZXRzLnRvcCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJlxuICAgICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihyZWZPZmZzZXRzLmJvdHRvbSkpO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dzTGVmdCA9IGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIGNvbnN0IG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NUb3AgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihib3VuZGFyaWVzLnRvcCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzQm90dG9tID1cbiAgICAgIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKGJvdW5kYXJpZXMuYm90dG9tKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0JvdW5kYXJpZXMgPVxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tKTtcblxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbkJ5UmVmID1cbiAgICAgICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyAmJlxuICAgICAgKChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzQm90dG9tKSk7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcG9wcGVyIGNvbnRlbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50ID1cbiAgICAgICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9uc0J5Q29udGVudCAmJlxuICAgICAgKChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0JvdHRvbSkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzVG9wKSk7XG5cbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uID0gZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIHx8IGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQ7XG5cbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAvLyB0aGlzIGJvb2xlYW4gdG8gZGV0ZWN0IGFueSBmbGlwIGxvb3BcbiAgICAgIGRhdGEuZmxpcHBlZCA9IHRydWU7XG5cbiAgICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IGZsaXBPcmRlcltpbmRleCArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgICB2YXJpYXRpb24gPSBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnBsYWNlbWVudCA9IHBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG5cbiAgICAgIC8vIHRoaXMgb2JqZWN0IGNvbnRhaW5zIGBwb3NpdGlvbmAsIHdlIHdhbnQgdG8gcHJlc2VydmUgaXQgYWxvbmcgd2l0aFxuICAgICAgLy8gYW55IGFkZGl0aW9uYWwgcHJvcGVydHkgd2UgbWF5IGFkZCBpbiB0aGUgZnV0dXJlXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0ge1xuICAgICAgICAuLi5kYXRhLm9mZnNldHMucG9wcGVyLFxuICAgICAgICAuLi5nZXRQb3BwZXJPZmZzZXRzKFxuICAgICAgICAgIGRhdGEuaW5zdGFuY2UucG9wcGVyLFxuICAgICAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgICAgICAgZGF0YS5wbGFjZW1lbnRcbiAgICAgICAgKSxcbiAgICAgIH07XG5cbiAgICAgIGRhdGEgPSBydW5Nb2RpZmllcnMoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGRhdGEsICdmbGlwJyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgaWYgKHBvcHBlcltzaWRlXSA8IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9XG4gICAgICBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkgLSBwb3BwZXJbbWVhc3VyZW1lbnRdO1xuICB9XG4gIGlmIChwb3BwZXJbb3BTaWRlXSA+IGZsb29yKHJlZmVyZW5jZVtzaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgaXNOdW1lcmljIGZyb20gJy4uL3V0aWxzL2lzTnVtZXJpYyc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpIHtcbiAgLy8gc2VwYXJhdGUgdmFsdWUgZnJvbSB1bml0XG4gIGNvbnN0IHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgY29uc3QgdmFsdWUgPSArc3BsaXRbMV07XG4gIGNvbnN0IHVuaXQgPSBzcGxpdFsyXTtcblxuICAvLyBJZiBpdCdzIG5vdCBhIG51bWJlciBpdCdzIGFuIG9wZXJhdG9yLCBJIGd1ZXNzXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgaWYgKHVuaXQuaW5kZXhPZignJScpID09PSAwKSB7XG4gICAgbGV0IGVsZW1lbnQ7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICclcCc6XG4gICAgICAgIGVsZW1lbnQgPSBwb3BwZXJPZmZzZXRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgY2FzZSAnJXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudCA9IHJlZmVyZW5jZU9mZnNldHM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIGxldCBzaXplO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggfHwgMFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9mZnNldChcbiAgb2Zmc2V0LFxuICBwb3BwZXJPZmZzZXRzLFxuICByZWZlcmVuY2VPZmZzZXRzLFxuICBiYXNlUGxhY2VtZW50XG4pIHtcbiAgY29uc3Qgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIGNvbnN0IHVzZUhlaWdodCA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIC8vIFNwbGl0IHRoZSBvZmZzZXQgc3RyaW5nIHRvIG9idGFpbiBhIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kc1xuICAvLyBUaGUgcmVnZXggYWRkcmVzc2VzIHZhbHVlcyB3aXRoIHRoZSBwbHVzIG9yIG1pbnVzIHNpZ24gaW4gZnJvbnQgKCsxMCwgLTIwLCBldGMpXG4gIGNvbnN0IGZyYWdtZW50cyA9IG9mZnNldC5zcGxpdCgvKFxcK3xcXC0pLykubWFwKGZyYWcgPT4gZnJhZy50cmltKCkpO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICBjb25zdCBkaXZpZGVyID0gZnJhZ21lbnRzLmluZGV4T2YoXG4gICAgZmluZChmcmFnbWVudHMsIGZyYWcgPT4gZnJhZy5zZWFyY2goLyx8XFxzLykgIT09IC0xKVxuICApO1xuXG4gIGlmIChmcmFnbWVudHNbZGl2aWRlcl0gJiYgZnJhZ21lbnRzW2RpdmlkZXJdLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnT2Zmc2V0cyBzZXBhcmF0ZWQgYnkgd2hpdGUgc3BhY2UocykgYXJlIGRlcHJlY2F0ZWQsIHVzZSBhIGNvbW1hICgsKSBpbnN0ZWFkLidcbiAgICApO1xuICB9XG5cbiAgLy8gSWYgZGl2aWRlciBpcyBmb3VuZCwgd2UgZGl2aWRlIHRoZSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHMgdG8gZGl2aWRlXG4gIC8vIHRoZW0gYnkgb2ZzZXQgWCBhbmQgWS5cbiAgY29uc3Qgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIGxldCBvcHMgPSBkaXZpZGVyICE9PSAtMVxuICAgID8gW1xuICAgICAgICBmcmFnbWVudHNcbiAgICAgICAgICAuc2xpY2UoMCwgZGl2aWRlcilcbiAgICAgICAgICAuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSxcbiAgICAgICAgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KFxuICAgICAgICAgIGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSlcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoKG9wLCBpbmRleCkgPT4ge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IChpbmRleCA9PT0gMSA/ICF1c2VIZWlnaHQgOiB1c2VIZWlnaHQpXG4gICAgICA/ICdoZWlnaHQnXG4gICAgICA6ICd3aWR0aCc7XG4gICAgbGV0IG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIG9wXG4gICAgICAgIC8vIFRoaXMgYWdncmVnYXRlcyBhbnkgYCtgIG9yIGAtYCBzaWduIHRoYXQgYXJlbid0IGNvbnNpZGVyZWQgb3BlcmF0b3JzXG4gICAgICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhW2EubGVuZ3RoIC0gMV0gPT09ICcnICYmIFsnKycsICctJ10uaW5kZXhPZihiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gKz0gYjtcbiAgICAgICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgICAgIC8vIEhlcmUgd2UgY29udmVydCB0aGUgc3RyaW5nIHZhbHVlcyBpbnRvIG51bWJlciB2YWx1ZXMgKGluIHB4KVxuICAgICAgICAubWFwKHN0ciA9PiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpKVxuICAgICk7XG4gIH0pO1xuXG4gIC8vIExvb3AgdHJvdWdoIHRoZSBvZmZzZXRzIGFycmF5cyBhbmQgZXhlY3V0ZSB0aGUgb3BlcmF0aW9uc1xuICBvcHMuZm9yRWFjaCgob3AsIGluZGV4KSA9PiB7XG4gICAgb3AuZm9yRWFjaCgoZnJhZywgaW5kZXgyKSA9PiB7XG4gICAgICBpZiAoaXNOdW1lcmljKGZyYWcpKSB7XG4gICAgICAgIG9mZnNldHNbaW5kZXhdICs9IGZyYWcgKiAob3BbaW5kZXgyIC0gMV0gPT09ICctJyA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAYXJndW1lbnQge051bWJlcnxTdHJpbmd9IG9wdGlvbnMub2Zmc2V0PTBcbiAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvZmZzZXQoZGF0YSwgeyBvZmZzZXQgfSkge1xuICBjb25zdCB7IHBsYWNlbWVudCwgb2Zmc2V0czogeyBwb3BwZXIsIHJlZmVyZW5jZSB9IH0gPSBkYXRhO1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgbGV0IG9mZnNldHM7XG4gIGlmIChpc051bWVyaWMoK29mZnNldCkpIHtcbiAgICBvZmZzZXRzID0gWytvZmZzZXQsIDBdO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldHMgPSBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlciwgcmVmZXJlbmNlLCBiYXNlUGxhY2VtZW50KTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzFdO1xuICB9XG5cbiAgZGF0YS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi91dGlscy9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kYXJpZXMgZnJvbSAnLi4vdXRpbHMvZ2V0Qm91bmRhcmllcyc7XG5pbXBvcnQgZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIGZyb20gJy4uL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhkYXRhLCBvcHRpb25zKSB7XG4gIGxldCBib3VuZGFyaWVzRWxlbWVudCA9XG4gICAgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuXG4gIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAvLyBhdm9pZCB0byBtYWtlIHRoaXMgbW9kaWZpZXIgY29tcGxldGVseSB1c2VsZXNzIGFuZCBsb29rIGxpa2UgYnJva2VuXG4gIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgaXRzZWxmXG4gIGNvbnN0IHRyYW5zZm9ybVByb3AgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuICBjb25zdCBwb3BwZXJTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICBjb25zdCB7IHRvcCwgbGVmdCwgW3RyYW5zZm9ybVByb3BdOiB0cmFuc2Zvcm0gfSA9IHBvcHBlclN0eWxlcztcbiAgcG9wcGVyU3R5bGVzLnRvcCA9ICcnO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9ICcnO1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSxcbiAgICBvcHRpb25zLnBhZGRpbmcsXG4gICAgYm91bmRhcmllc0VsZW1lbnQsXG4gICAgZGF0YS5wb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBvZmZzZXRzIGhhdmUgYmVlbiBjb21wdXRlZFxuICBwb3BwZXJTdHlsZXMudG9wID0gdG9wO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9IGxlZnQ7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybTtcblxuICBvcHRpb25zLmJvdW5kYXJpZXMgPSBib3VuZGFyaWVzO1xuXG4gIGNvbnN0IG9yZGVyID0gb3B0aW9ucy5wcmlvcml0eTtcbiAgbGV0IHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgY29uc3QgY2hlY2sgPSB7XG4gICAgcHJpbWFyeShwbGFjZW1lbnQpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgaWYgKFxuICAgICAgICBwb3BwZXJbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChwb3BwZXJbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFtwbGFjZW1lbnRdOiB2YWx1ZSB9O1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5KHBsYWNlbWVudCkge1xuICAgICAgY29uc3QgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIGxldCB2YWx1ZSA9IHBvcHBlclttYWluU2lkZV07XG4gICAgICBpZiAoXG4gICAgICAgIHBvcHBlcltwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKFxuICAgICAgICAgIHBvcHBlclttYWluU2lkZV0sXG4gICAgICAgICAgYm91bmRhcmllc1twbGFjZW1lbnRdIC1cbiAgICAgICAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBwb3BwZXIud2lkdGggOiBwb3BwZXIuaGVpZ2h0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgW21haW5TaWRlXTogdmFsdWUgfTtcbiAgICB9LFxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2gocGxhY2VtZW50ID0+IHtcbiAgICBjb25zdCBzaWRlID1cbiAgICAgIFsnbGVmdCcsICd0b3AnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSc7XG4gICAgcG9wcGVyID0geyAuLi5wb3BwZXIsIC4uLmNoZWNrW3NpZGVdKHBsYWNlbWVudCkgfTtcbiAgfSk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHBvcHBlcjtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaWZ0KGRhdGEpIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3Qgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICAvLyBpZiBzaGlmdCBzaGlmdHZhcmlhdGlvbiBpcyBzcGVjaWZpZWQsIHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIHBvcHBlciB9ID0gZGF0YS5vZmZzZXRzO1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICBjb25zdCBzaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIGNvbnN0IHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgIHN0YXJ0OiB7IFtzaWRlXTogcmVmZXJlbmNlW3NpZGVdIH0sXG4gICAgICBlbmQ6IHtcbiAgICAgICAgW3NpZGVdOiByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSB7IC4uLnBvcHBlciwgLi4uc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSB9O1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgaXNNb2RpZmllclJlcXVpcmVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJSZXF1aXJlZCc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHJlZlJlY3QgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuICBjb25zdCBib3VuZCA9IGZpbmQoXG4gICAgZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsXG4gICAgbW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ3ByZXZlbnRPdmVyZmxvdydcbiAgKS5ib3VuZGFyaWVzO1xuXG4gIGlmIChcbiAgICByZWZSZWN0LmJvdHRvbSA8IGJvdW5kLnRvcCB8fFxuICAgIHJlZlJlY3QubGVmdCA+IGJvdW5kLnJpZ2h0IHx8XG4gICAgcmVmUmVjdC50b3AgPiBib3VuZC5ib3R0b20gfHxcbiAgICByZWZSZWN0LnJpZ2h0IDwgYm91bmQubGVmdFxuICApIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSB0cnVlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IGZhbHNlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50JztcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5uZXIoZGF0YSkge1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IGlzSG9yaXogPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICBjb25zdCBzdWJ0cmFjdExlbmd0aCA9IFsndG9wJywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID09PSAtMTtcblxuICBwb3BwZXJbaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnXSA9XG4gICAgcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC1cbiAgICAoc3VidHJhY3RMZW5ndGggPyBwb3BwZXJbaXNIb3JpeiA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gOiAwKTtcblxuICBkYXRhLnBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KHBvcHBlcik7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgYXBwbHlTdHlsZSwgeyBhcHBseVN0eWxlT25Mb2FkIH0gZnJvbSAnLi9hcHBseVN0eWxlJztcbmltcG9ydCBjb21wdXRlU3R5bGUgZnJvbSAnLi9jb21wdXRlU3R5bGUnO1xuaW1wb3J0IGFycm93IGZyb20gJy4vYXJyb3cnO1xuaW1wb3J0IGZsaXAgZnJvbSAnLi9mbGlwJztcbmltcG9ydCBrZWVwVG9nZXRoZXIgZnJvbSAnLi9rZWVwVG9nZXRoZXInO1xuaW1wb3J0IG9mZnNldCBmcm9tICcuL29mZnNldCc7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gJy4vcHJldmVudE92ZXJmbG93JztcbmltcG9ydCBzaGlmdCBmcm9tICcuL3NoaWZ0JztcbmltcG9ydCBoaWRlIGZyb20gJy4vaGlkZSc7XG5pbXBvcnQgaW5uZXIgZnJvbSAnLi9pbm5lcic7XG5cbi8qKlxuICogTW9kaWZpZXIgZnVuY3Rpb24sIGVhY2ggbW9kaWZpZXIgY2FuIGhhdmUgYSBmdW5jdGlvbiBvZiB0aGlzIHR5cGUgYXNzaWduZWRcbiAqIHRvIGl0cyBgZm5gIHByb3BlcnR5LjxiciAvPlxuICogVGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkIG9uIGVhY2ggdXBkYXRlLCB0aGlzIG1lYW5zIHRoYXQgeW91IG11c3RcbiAqIG1ha2Ugc3VyZSB0aGV5IGFyZSBwZXJmb3JtYW50IGVub3VnaCB0byBhdm9pZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcy5cbiAqXG4gKiBAZnVuY3Rpb24gTW9kaWZpZXJGblxuICogQGFyZ3VtZW50IHtkYXRhT2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cblxuLyoqXG4gKiBNb2RpZmllcnMgYXJlIHBsdWdpbnMgdXNlZCB0byBhbHRlciB0aGUgYmVoYXZpb3Igb2YgeW91ciBwb3BwZXJzLjxiciAvPlxuICogUG9wcGVyLmpzIHVzZXMgYSBzZXQgb2YgOSBtb2RpZmllcnMgdG8gcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdGllc1xuICogbmVlZGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIFVzdWFsbHkgeW91IGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGBvcmRlcmAsIGBmbmAgYW5kIGBvbkxvYWRgIHByb3BzLlxuICogQWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIGFyZSBjb25maWd1cmF0aW9ucyB0aGF0IGNvdWxkIGJlIHR3ZWFrZWQuXG4gKiBAbmFtZXNwYWNlIG1vZGlmaWVyc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHNoaWZ0IHRoZSBwb3BwZXIgb24gdGhlIHN0YXJ0IG9yIGVuZCBvZiBpdHMgcmVmZXJlbmNlXG4gICAqIGVsZW1lbnQuPGJyIC8+XG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgdmFyaWF0aW9uIG9mIHRoZSBgcGxhY2VtZW50YCBwcm9wZXJ0eS48YnIgLz5cbiAgICogSXQgY2FuIGJlIG9uZSBlaXRoZXIgYC1lbmRgIG9yIGAtc3RhcnRgLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgc2hpZnQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAxMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBzaGlmdCxcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGBvZmZzZXRgIG1vZGlmaWVyIGNhbiBzaGlmdCB5b3VyIHBvcHBlciBvbiBib3RoIGl0cyBheGlzLlxuICAgKlxuICAgKiBJdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdW5pdHM6XG4gICAqIC0gYHB4YCBvciB1bml0LWxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgKiAtIGAlYCBvciBgJXJgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAqIC0gYHZoYCwgQ1NTIHZpZXdwb3J0IGhlaWdodCB1bml0XG4gICAqXG4gICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUgcGxhY2VtZW50IGlzIGB0b3BgIG9yIGBib3R0b21gLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlXG4gICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGBoZWlnaHRgLlxuICAgKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgdmFsdWUgKGFzIGBOdW1iZXJgIG9yIGBTdHJpbmdgKSwgb3IgYSBwYWlyIG9mIHZhbHVlc1xuICAgKiBhcyBgU3RyaW5nYCBkaXZpZGVkIGJ5IGEgY29tbWEgb3Igb25lIChvciBtb3JlKSB3aGl0ZSBzcGFjZXMuPGJyIC8+XG4gICAqIFRoZSBsYXR0ZXIgaXMgYSBkZXByZWNhdGVkIG1ldGhvZCBiZWNhdXNlIGl0IGxlYWRzIHRvIGNvbmZ1c2lvbiBhbmQgd2lsbCBiZVxuICAgKiByZW1vdmVkIGluIHYyLjxiciAvPlxuICAgKiBBZGRpdGlvbmFsbHksIGl0IGFjY2VwdHMgYWRkaXRpb25zIGFuZCBzdWJ0cmFjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCBtdWx0aXBsaWNhdGlvbnMgYW5kIGRpdmlzaW9ucyBhcmVuJ3Qgc3VwcG9ydGVkLlxuICAgKlxuICAgKiBWYWxpZCBleGFtcGxlcyBhcmU6XG4gICAqIGBgYFxuICAgKiAxMFxuICAgKiAnMTAlJ1xuICAgKiAnMTAsIDEwJ1xuICAgKiAnMTAlLCAxMCdcbiAgICogJzEwICsgMTAlJ1xuICAgKiAnMTAgLSA1dmggKyAzJSdcbiAgICogJy0xMHB4ICsgNXZoLCA1cHggLSA2JSdcbiAgICogYGBgXG4gICAqID4gKipOQioqOiBJZiB5b3UgZGVzaXJlIHRvIGFwcGx5IG9mZnNldHMgdG8geW91ciBwb3BwZXJzIGluIGEgd2F5IHRoYXQgbWF5IG1ha2UgdGhlbSBvdmVybGFwXG4gICAqID4gd2l0aCB0aGVpciByZWZlcmVuY2UgZWxlbWVudCwgdW5mb3J0dW5hdGVseSwgeW91IHdpbGwgaGF2ZSB0byBkaXNhYmxlIHRoZSBgZmxpcGAgbW9kaWZpZXIuXG4gICAqID4gWW91IGNhbiByZWFkIG1vcmUgb24gdGhpcyBhdCB0aGlzIFtpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvaXNzdWVzLzM3MykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBvZmZzZXQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAyMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBvZmZzZXQsXG4gICAgLyoqIEBwcm9wIHtOdW1iZXJ8U3RyaW5nfSBvZmZzZXQ9MFxuICAgICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIG9mZnNldDogMCxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBBIHNjZW5hcmlvIGV4aXN0cyB3aGVyZSB0aGUgcmVmZXJlbmNlIGl0c2VsZiBpcyBub3Qgd2l0aGluIHRoZSBib3VuZGFyaWVzLjxiciAvPlxuICAgKiBXZSBjYW4gc2F5IGl0IGhhcyBcImVzY2FwZWQgdGhlIGJvdW5kYXJpZXNcIiDigJQgb3IganVzdCBcImVzY2FwZWRcIi48YnIgLz5cbiAgICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHBlciBzaG91bGQgZWl0aGVyOlxuICAgKlxuICAgKiAtIGRldGFjaCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIHJlbWFpbiBcInRyYXBwZWRcIiBpbiB0aGUgYm91bmRhcmllcywgb3JcbiAgICogLSBpZiBpdCBzaG91bGQgaWdub3JlIHRoZSBib3VuZGFyeSBhbmQgXCJlc2NhcGUgd2l0aCBpdHMgcmVmZXJlbmNlXCJcbiAgICpcbiAgICogV2hlbiBgZXNjYXBlV2l0aFJlZmVyZW5jZWAgaXMgc2V0IHRvYHRydWVgIGFuZCByZWZlcmVuY2UgaXMgY29tcGxldGVseVxuICAgKiBvdXRzaWRlIGl0cyBib3VuZGFyaWVzLCB0aGUgcG9wcGVyIHdpbGwgb3ZlcmZsb3cgKG9yIGNvbXBsZXRlbHkgbGVhdmUpXG4gICAqIHRoZSBib3VuZGFyaWVzIGluIG9yZGVyIHRvIHJlbWFpbiBhdHRhY2hlZCB0byB0aGUgZWRnZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTMwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtBcnJheX0gW3ByaW9yaXR5PVsnbGVmdCcsJ3JpZ2h0JywndG9wJywnYm90dG9tJ11dXG4gICAgICogUG9wcGVyIHdpbGwgdHJ5IHRvIHByZXZlbnQgb3ZlcmZsb3cgZm9sbG93aW5nIHRoZXNlIHByaW9yaXRpZXMgYnkgZGVmYXVsdCxcbiAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcHJpb3JpdHk6IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10sXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogQW1vdW50IG9mIHBpeGVsIHVzZWQgdG8gZGVmaW5lIGEgbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3VuZGFyaWVzXG4gICAgICogYW5kIHRoZSBwb3BwZXIuIFRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGFsd2F5cyBoYXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSdzY3JvbGxQYXJlbnQnXG4gICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllci4gQ2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCcsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSBzdXJlIHRoZSByZWZlcmVuY2UgYW5kIGl0cyBwb3BwZXIgc3RheSBuZWFyIGVhY2ggb3RoZXJcbiAgICogd2l0aG91dCBsZWF2aW5nIGFueSBnYXAgYmV0d2VlbiB0aGUgdHdvLiBFc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHRoZSBhcnJvdyBpc1xuICAgKiBlbmFibGVkIGFuZCB5b3Ugd2FudCB0byBlbnN1cmUgdGhhdCBpdCBwb2ludHMgdG8gaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBJdCBjYXJlcyBvbmx5IGFib3V0IHRoZSBmaXJzdCBheGlzLiBZb3UgY2FuIHN0aWxsIGhhdmUgcG9wcGVycyB3aXRoIG1hcmdpblxuICAgKiBiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGtlZXBUb2dldGhlcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj00MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDQwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGtlZXBUb2dldGhlcixcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgKiBzdXJlIGl0IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgYW5kIGl0cyBwb3BwZXIgZWxlbWVudC5cbiAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgKiBwaXhlbHMgb2YgY29uanVuY3Rpb24gYXJlIG5lZWRlZC5cbiAgICpcbiAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFycm93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTUwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXJyb3csXG4gICAgLyoqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGVsZW1lbnQ9J1t4LWFycm93XScgLSBTZWxlY3RvciBvciBub2RlIHVzZWQgYXMgYXJyb3cgKi9cbiAgICBlbGVtZW50OiAnW3gtYXJyb3ddJyxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBmbGlwIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQgd2hlbiBpdCBzdGFydHMgdG8gb3ZlcmxhcCBpdHNcbiAgICogcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICpcbiAgICogKipOT1RFOioqIHRoaXMgbW9kaWZpZXIgd2lsbCBpbnRlcnJ1cHQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlIGFuZCB3aWxsXG4gICAqIHJlc3RhcnQgaXQgaWYgaXQgZGV0ZWN0cyB0aGUgbmVlZCB0byBmbGlwIHRoZSBwbGFjZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBmbGlwOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTYwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogZmxpcCxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEFycmF5fSBiZWhhdmlvcj0nZmxpcCdcbiAgICAgKiBUaGUgYmVoYXZpb3IgdXNlZCB0byBjaGFuZ2UgdGhlIHBvcHBlcidzIHBsYWNlbWVudC4gSXQgY2FuIGJlIG9uZSBvZlxuICAgICAqIGBmbGlwYCwgYGNsb2Nrd2lzZWAsIGBjb3VudGVyY2xvY2t3aXNlYCBvciBhbiBhcnJheSB3aXRoIGEgbGlzdCBvZiB2YWxpZFxuICAgICAqIHBsYWNlbWVudHMgKHdpdGggb3B0aW9uYWwgdmFyaWF0aW9ucylcbiAgICAgKi9cbiAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICogVGhlIGVsZW1lbnQgd2hpY2ggd2lsbCBkZWZpbmUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHBvcHBlciBwb3NpdGlvbi5cbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAqIChleGNlcHQgaWYgYGtlZXBUb2dldGhlcmAgaXMgZW5hYmxlZClcbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0JyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnM9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zQnlDb250ZW50PWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHBvcHBlciBlbGVtZW50IG92ZXJsYXBzIGl0cyByZWZlcmVuY2UgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zQnlDb250ZW50OiBmYWxzZSxcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQnkgZGVmYXVsdCwgd2hlbiB0aGlzIG1vZGlmaWVyIGlzIGRpc2FibGVkLCB0aGUgcG9wcGVyIHdpbGwgYmUgcGxhY2VkIG91dHNpZGVcbiAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaW5uZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA3MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGlubmVyLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGhpZGUgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXRzaWRlIG9mIHRoZVxuICAgKiBwb3BwZXIgYm91bmRhcmllcy4gSXQgd2lsbCBzZXQgYSBgeC1vdXQtb2YtYm91bmRhcmllc2AgYXR0cmlidXRlIHdoaWNoIGNhblxuICAgKiBiZSB1c2VkIHRvIGhpZGUgd2l0aCBhIENTUyBzZWxlY3RvciB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBpc1xuICAgKiBvdXQgb2YgYm91bmRhcmllcy5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaGlkZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDgwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGhpZGUsXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBzdHlsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgdG8gZ2V0c1xuICAgKiBwcm9wZXJseSBwb3NpdGlvbmVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBtb2RpZmllciB3aWxsIG5vdCB0b3VjaCB0aGUgRE9NLCBpdCBqdXN0IHByZXBhcmVzIHRoZSBzdHlsZXNcbiAgICogc28gdGhhdCBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgY2FuIGFwcGx5IGl0LiBUaGlzIHNlcGFyYXRpb24gaXMgdXNlZnVsXG4gICAqIGluIGNhc2UgeW91IG5lZWQgdG8gcmVwbGFjZSBgYXBwbHlTdHlsZWAgd2l0aCBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogVGhpcyBtb2RpZmllciBoYXMgYDg1MGAgYXMgYG9yZGVyYCB2YWx1ZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqIHdpdGggcHJldmlvdXMgdmVyc2lvbnMgb2YgUG9wcGVyLmpzLiBFeHBlY3QgdGhlIG1vZGlmaWVycyBvcmRlcmluZyBtZXRob2RcbiAgICogdG8gY2hhbmdlIGluIGZ1dHVyZSBtYWpvciB2ZXJzaW9ucyBvZiB0aGUgbGlicmFyeS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGNvbXB1dGVTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04NTAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDg1MCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGNvbXB1dGVTdHlsZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2JvdHRvbSddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBYIGF4aXMgKGBib3R0b21gIG9yIGB0b3BgKS4gQUtBIFggb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgYm90dG9tYFxuICAgICAqL1xuICAgIHg6ICdib3R0b20nLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdsZWZ0J11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFkgYXhpcyAoYGxlZnRgIG9yIGByaWdodGApLiBBS0EgWSBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGByaWdodGBcbiAgICAgKi9cbiAgICB5OiAncmlnaHQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBjb21wdXRlZCBzdHlsZXMgdG8gdGhlIHBvcHBlciBlbGVtZW50LlxuICAgKlxuICAgKiBBbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIGFyZSBsaW1pdGVkIHRvIHRoaXMgbW9kaWZpZXIuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VcbiAgICogeW91IHdhbnQgdG8gaW50ZWdyYXRlIFBvcHBlci5qcyBpbnNpZGUgYSBmcmFtZXdvcmsgb3IgdmlldyBsaWJyYXJ5IGFuZCB5b3VcbiAgICogd2FudCB0byBkZWxlZ2F0ZSBhbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIHRvIGl0LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91IGRpc2FibGUgdGhpcyBtb2RpZmllciwgeW91IG11c3QgbWFrZSBzdXJlIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBoYXMgaXRzIHBvc2l0aW9uIHNldCB0byBgYWJzb2x1dGVgIGJlZm9yZSBQb3BwZXIuanMgY2FuIGRvIGl0cyB3b3JrIVxuICAgKlxuICAgKiBKdXN0IGRpc2FibGUgdGhpcyBtb2RpZmllciBhbmQgZGVmaW5lIHlvdXIgb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXBwbHlTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDkwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFwcGx5U3R5bGUsXG4gICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdW5kZWZpbmVkLFxuICB9LFxufTtcblxuLyoqXG4gKiBUaGUgYGRhdGFPYmplY3RgIGlzIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW5mb3JtYXRpb24gdXNlZCBieSBQb3BwZXIuanMuXG4gKiBUaGlzIG9iamVjdCBpcyBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gKiBAbmFtZSBkYXRhT2JqZWN0XG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5pbnN0YW5jZSBUaGUgUG9wcGVyLmpzIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5mbGlwcGVkIFRydWUgaWYgcG9wcGVyIGhhcyBiZWVuIGZsaXBwZWQgYnkgZmxpcCBtb2RpZmllclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBkYXRhLmFycm93RWxlbWVudCBOb2RlIHVzZWQgYXMgYXJyb3cgYnkgYXJyb3cgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLnN0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmFycm93U3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGFycm93LiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cyBUaGUgbWVhc3VyZW1lbnRzIG9mIHBvcHBlciwgcmVmZXJlbmNlIGFuZCBhcnJvdyBlbGVtZW50c1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5wb3BwZXIgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMuYXJyb3ddIGB0b3BgIGFuZCBgbGVmdGAgb2Zmc2V0cywgb25seSBvbmUgb2YgdGhlbSB3aWxsIGJlIGRpZmZlcmVudCBmcm9tIDBcbiAqL1xuIiwiaW1wb3J0IG1vZGlmaWVycyBmcm9tICcuLi9tb2RpZmllcnMvaW5kZXgnO1xuXG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyBwcm92aWRlZCB0byBQb3BwZXIuanMgY29uc3RydWN0b3IuPGJyIC8+XG4gKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IG9mIFBvcHBlci5qcy48YnIgLz5cbiAqIFRvIG92ZXJyaWRlIGFuIG9wdGlvbiwgc2ltcGx5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWVcbiAqIHN0cnVjdHVyZSBvZiB0aGUgYG9wdGlvbnNgIG9iamVjdCwgYXMgdGhlIDNyZCBhcmd1bWVudC4gRm9yIGV4YW1wbGU6XG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmLCBwb3AsIHtcbiAqICAgbW9kaWZpZXJzOiB7XG4gKiAgICAgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAqICAgfVxuICogfSlcbiAqIGBgYFxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogUG9wcGVyJ3MgcGxhY2VtZW50LlxuICAgKiBAcHJvcCB7UG9wcGVyLnBsYWNlbWVudHN9IHBsYWNlbWVudD0nYm90dG9tJ1xuICAgKi9cbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCBwb3BwZXIgdG8gcG9zaXRpb24gaXQgc2VsZiBpbiAnZml4ZWQnIG1vZGVcbiAgICogQHByb3Age0Jvb2xlYW59IHBvc2l0aW9uRml4ZWQ9ZmFsc2VcbiAgICovXG4gIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGV2ZW50cyAocmVzaXplLCBzY3JvbGwpIGFyZSBpbml0aWFsbHkgZW5hYmxlZC5cbiAgICogQHByb3Age0Jvb2xlYW59IGV2ZW50c0VuYWJsZWQ9dHJ1ZVxuICAgKi9cbiAgZXZlbnRzRW5hYmxlZDogdHJ1ZSxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIHBvcHBlciB3aGVuXG4gICAqIHlvdSBjYWxsIHRoZSBgZGVzdHJveWAgbWV0aG9kLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcmVtb3ZlT25EZXN0cm95PWZhbHNlXG4gICAqL1xuICByZW1vdmVPbkRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWQuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uQ3JlYXRlfVxuICAgKi9cbiAgb25DcmVhdGU6ICgpID0+IHt9LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWQuIFRoaXMgY2FsbGJhY2sgaXMgbm90IGNhbGxlZFxuICAgKiBvbiB0aGUgaW5pdGlhbGl6YXRpb24vY3JlYXRpb24gb2YgdGhlIHBvcHBlciwgYnV0IG9ubHkgb24gc3Vic2VxdWVudFxuICAgKiB1cGRhdGVzLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvblVwZGF0ZX1cbiAgICovXG4gIG9uVXBkYXRlOiAoKSA9PiB7fSxcblxuICAvKipcbiAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICogVGhleSBwcm92aWRlIG1vc3Qgb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBQb3BwZXIuanMuXG4gICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAqL1xuICBtb2RpZmllcnMsXG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBvbkNyZWF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25VcGRhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG4iLCIvLyBVdGlsc1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi91dGlscy9pc0Z1bmN0aW9uJztcblxuLy8gTWV0aG9kc1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL21ldGhvZHMvdXBkYXRlJztcbmltcG9ydCBkZXN0cm95IGZyb20gJy4vbWV0aG9kcy9kZXN0cm95JztcbmltcG9ydCBlbmFibGVFdmVudExpc3RlbmVycyBmcm9tICcuL21ldGhvZHMvZW5hYmxlRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IGRpc2FibGVFdmVudExpc3RlbmVycyBmcm9tICcuL21ldGhvZHMvZGlzYWJsZUV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBEZWZhdWx0cyBmcm9tICcuL21ldGhvZHMvZGVmYXVsdHMnO1xuaW1wb3J0IHBsYWNlbWVudHMgZnJvbSAnLi9tZXRob2RzL3BsYWNlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BwZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2UuXG4gICAqIEBjbGFzcyBQb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fHJlZmVyZW5jZU9iamVjdH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIC8gWE1MIGVsZW1lbnQgdXNlZCBhcyB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gWW91ciBjdXN0b20gb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgb25lcyBkZWZpbmVkIGluIFtEZWZhdWx0c10oI2RlZmF1bHRzKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAvLyBtYWtlIHVwZGF0ZSgpIGRlYm91bmNlZCwgc28gdGhhdCBpdCBvbmx5IHJ1bnMgYXQgbW9zdCBvbmNlLXBlci10aWNrXG4gICAgdGhpcy51cGRhdGUgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIHdpdGgge30gd2UgY3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvcHRpb25zIGluc2lkZSBpdFxuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uUG9wcGVyLkRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG5cbiAgICAvLyBpbml0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICBzY3JvbGxQYXJlbnRzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSBhbmQgcG9wcGVyIGVsZW1lbnRzIChhbGxvdyBqUXVlcnkgd3JhcHBlcnMpXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLmpxdWVyeSA/IHJlZmVyZW5jZVswXSA6IHJlZmVyZW5jZTtcbiAgICB0aGlzLnBvcHBlciA9IHBvcHBlciAmJiBwb3BwZXIuanF1ZXJ5ID8gcG9wcGVyWzBdIDogcG9wcGVyO1xuXG4gICAgLy8gRGVlcCBtZXJnZSBtb2RpZmllcnMgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh7XG4gICAgICAuLi5Qb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLFxuICAgICAgLi4ub3B0aW9ucy5tb2RpZmllcnMsXG4gICAgfSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gPSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSBidWlsdC1pbiBtb2RpZmllciwgdXNlIGl0IGFzIGJhc2VcbiAgICAgICAgLi4uKFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gfHwge30pLFxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgY3VzdG9tIG9wdGlvbnMsIG92ZXJyaWRlIGFuZCBtZXJnZSB3aXRoIGRlZmF1bHQgb25lc1xuICAgICAgICAuLi4ob3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBSZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgICB0aGlzLm1vZGlmaWVycyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tb2RpZmllcnMpXG4gICAgICAubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSxcbiAgICAgIH0pKVxuICAgICAgLy8gc29ydCB0aGUgbW9kaWZpZXJzIGJ5IG9yZGVyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuXG4gICAgLy8gbW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSB3aGVuIFBvcHBlci5qcyBnZXQgaW5pdGVkXG4gICAgLy8gc3VjaCBjb2RlIGlzIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIG9mIGl0cyBtb2RpZmllclxuICAgIC8vIHRoZXkgY291bGQgYWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZWlyIG9wdGlvbnMgY29uZmlndXJhdGlvblxuICAgIC8vIEJFIEFXQVJFOiBkb24ndCBhZGQgb3B0aW9ucyB0byBgb3B0aW9ucy5tb2RpZmllcnMubmFtZWAgYnV0IHRvIGBtb2RpZmllck9wdGlvbnNgIVxuICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobW9kaWZpZXJPcHRpb25zID0+IHtcbiAgICAgIGlmIChtb2RpZmllck9wdGlvbnMuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQpKSB7XG4gICAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoXG4gICAgICAgICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgICAgICAgdGhpcy5wb3BwZXIsXG4gICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgIG1vZGlmaWVyT3B0aW9ucyxcbiAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBmaXJlIHRoZSBmaXJzdCB1cGRhdGUgdG8gcG9zaXRpb24gdGhlIHBvcHBlciBpbiB0aGUgcmlnaHQgcGxhY2VcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgY29uc3QgZXZlbnRzRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5ldmVudHNFbmFibGVkO1xuICAgIGlmIChldmVudHNFbmFibGVkKSB7XG4gICAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgICB0aGlzLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIFdlIGNhbid0IHVzZSBjbGFzcyBwcm9wZXJ0aWVzIGJlY2F1c2UgdGhleSBkb24ndCBnZXQgbGlzdGVkIGluIHRoZVxuICAvLyBjbGFzcyBwcm90b3R5cGUgYW5kIGJyZWFrIHN0dWZmIGxpa2UgU2lub24gc3R1YnNcbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgfVxuICBkZXN0cm95KCkge1xuICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbiAgZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIGVuYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gIH1cbiAgZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYW4gdXBkYXRlLiBJdCB3aWxsIHJ1biBvbiB0aGUgbmV4dCBVSSB1cGRhdGUgYXZhaWxhYmxlLlxuICAgKiBAbWV0aG9kIHNjaGVkdWxlVXBkYXRlXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIHNjaGVkdWxlVXBkYXRlID0gKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdXNlZnVsIHdoZW4gd3JpdGluZyBjdXN0b20gbW9kaWZpZXJzLlxuICAgKiBTdGFydGluZyBmcm9tIHZlcnNpb24gMS43LCB0aGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgb25seSBpZiB5b3VcbiAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAqXG4gICAqICoqREVQUkVDQVRJT04qKjogVGhpcyB3YXkgdG8gYWNjZXNzIFBvcHBlclV0aWxzIGlzIGRlcHJlY2F0ZWRcbiAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICogRHVlIHRvIHRoZSBoaWdoIGluc3RhYmlsaXR5IG9mIHRoZSBtZXRob2RzIGNvbnRhaW5lZCBpbiBVdGlscywgd2UgY2FuJ3RcbiAgICogZ3VhcmFudGVlIHRoZW0gdG8gZm9sbG93IHNlbXZlci4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzayFcbiAgICogQHN0YXRpY1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgKiBAbWVtYmVyIFV0aWxzXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG4gIHN0YXRpYyBVdGlscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkuUG9wcGVyVXRpbHM7XG5cbiAgc3RhdGljIHBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gIHN0YXRpYyBEZWZhdWx0cyA9IERlZmF1bHRzO1xufVxuXG4vKipcbiAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICogYW5kIGxldHMgeW91IHVzZSBpdCBhcyByZXBsYWNlbWVudCBvZiBhIHJlYWwgRE9NIG5vZGUuPGJyIC8+XG4gKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAqXG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAqIGBgYFxuICpcbiAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuICogQG5hbWUgcmVmZXJlbmNlT2JqZWN0XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkYXRhLmdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzZXQgb2YgY29vcmRpbmF0ZXMgY29tcGF0aWJsZSB3aXRoIHRoZSBuYXRpdmUgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgbWV0aG9kLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50V2lkdGhcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgd2lkdGggb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRIZWlnaHRcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICovXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgY29uc29sZS5sb2coJ2RkZCcpO1xyXG4gICBzZXRJbnRlcnZhbChUb2dnbGVTbG9nYW5zLCA1MDAwKTtcclxuXHJcbiAgIGZ1bmN0aW9uIFRvZ2dsZVNsb2dhbnMoKSB7XHJcbiAgICAgIHZhciAkZmlyc3Q7XHJcbiAgICAgIHZhciAkc2Vjb25kO1xyXG4gICAgICAvL2NoZWNrIHdoaWNoIG9uZSBpcyB2aXNpYmxlLCB0byBmYWRlIGl0IG91dCBmaXJzdDpcclxuICAgICAgaWYgKCQoXCIuc2xvZ2FuLWJsb2NrLWZpcnN0XCIpLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgJGZpcnN0ID0gJChcIi5zbG9nYW4tYmxvY2stZmlyc3RcIik7XHJcbiAgICAgICAgICRzZWNvbmQgPSAkKFwiLnNsb2dhbi1ibG9jay1zZWNvbmRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICRmaXJzdCA9ICQoXCIuc2xvZ2FuLWJsb2NrLXNlY29uZFwiKTtcclxuICAgICAgICAgJHNlY29uZCA9ICQoXCIuc2xvZ2FuLWJsb2NrLWZpcnN0XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2ZhZGUgb3V0IHRoZSB2aXNpYmxlIHBhbmVsXHJcbiAgICAgICRmaXJzdC5mYWRlVG9nZ2xlKFwic2xvd1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIC8vZmFkZSBpbiB0aGUgaW52aXNpYmxlIHBhbmVsXHJcbiAgICAgICAgICRzZWNvbmQuZmFkZVRvZ2dsZShcInNsb3dcIik7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Nsb2dhbi1ibG9jayc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=