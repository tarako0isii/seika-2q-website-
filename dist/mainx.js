/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animejs/lib/anime.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/animejs/lib/anime.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animatable: () => (/* binding */ Animatable),
/* harmony export */   Draggable: () => (/* binding */ Draggable),
/* harmony export */   JSAnimation: () => (/* binding */ JSAnimation),
/* harmony export */   Scope: () => (/* binding */ Scope),
/* harmony export */   ScrollObserver: () => (/* binding */ ScrollObserver),
/* harmony export */   Spring: () => (/* binding */ Spring),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   Timer: () => (/* binding */ Timer),
/* harmony export */   WAAPIAnimation: () => (/* binding */ WAAPIAnimation),
/* harmony export */   animate: () => (/* binding */ animate),
/* harmony export */   createAnimatable: () => (/* binding */ createAnimatable),
/* harmony export */   createDraggable: () => (/* binding */ createDraggable),
/* harmony export */   createScope: () => (/* binding */ createScope),
/* harmony export */   createSpring: () => (/* binding */ createSpring),
/* harmony export */   createTimeline: () => (/* binding */ createTimeline),
/* harmony export */   createTimer: () => (/* binding */ createTimer),
/* harmony export */   eases: () => (/* binding */ eases),
/* harmony export */   engine: () => (/* binding */ engine),
/* harmony export */   onScroll: () => (/* binding */ onScroll),
/* harmony export */   scrollContainers: () => (/* binding */ scrollContainers),
/* harmony export */   stagger: () => (/* binding */ stagger),
/* harmony export */   svg: () => (/* binding */ svg),
/* harmony export */   utils: () => (/* binding */ utils),
/* harmony export */   waapi: () => (/* binding */ waapi)
/* harmony export */ });
/**
 * anime.js - ESM
 * @version v4.0.2
 * @author Julian Garnier
 * @license MIT
 * @copyright (c) 2025 Julian Garnier
 * @see https://animejs.com
 */

/**
 * @typedef {Object} DefaultsParams
 * @property {Number|String} [id]
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 * @property {Number} [playbackRate]
 * @property {Number} [frameRate]
 * @property {Number|Boolean} [loop]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number|FunctionValue} [duration]
 * @property {Number|FunctionValue} [delay]
 * @property {Number} [loopDelay]
 * @property {EasingParam} [ease]
 * @property {'none'|'replace'|'blend'|compositionTypes} [composition]
 * @property {(v: any) => any} [modifier]
 * @property {(tickable: Tickable) => void} [onBegin]
 * @property {(tickable: Tickable) => void} [onBeforeUpdate]
 * @property {(tickable: Tickable) => void} [onUpdate]
 * @property {(tickable: Tickable) => void} [onLoop]
 * @property {(tickable: Tickable) => void} [onPause]
 * @property {(tickable: Tickable) => void} [onComplete]
 * @property {(renderable: Renderable) => void} [onRender]
 */

/** @typedef {JSAnimation|Timeline} Renderable */
/** @typedef {Timer|Renderable} Tickable */
/** @typedef {Timer&JSAnimation&Timeline} CallbackArgument */
/** @typedef {Animatable|Tickable|Draggable|ScrollObserver|Scope} Revertible */

/**
 * @typedef {Object} DraggableAxisParam
 * @property {String} [mapTo]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 */

/**
 * @typedef {Object} DraggableCursorParams
 * @property {String} [onHover]
 * @property {String} [onGrab]
 */

/**
 * @typedef {Object} DraggableParams
 * @property {DOMTargetSelector} [trigger]
 * @property {DOMTargetSelector|Array<Number>|((draggable: Draggable) => DOMTargetSelector|Array<Number>)} [container]
 * @property {Boolean|DraggableAxisParam} [x]
 * @property {Boolean|DraggableAxisParam} [y]
 * @property {TweenModifier} [modifier]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [containerPadding]
 * @property {Number|((draggable: Draggable) => Number)} [containerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [releaseContainerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [dragSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollThreshold]
 * @property {Number|((draggable: Draggable) => Number)} [minVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [maxVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [velocityMultiplier]
 * @property {Number} [releaseMass]
 * @property {Number} [releaseStiffness]
 * @property {Number} [releaseDamping]
 * @property {Boolean} [releaseDamping]
 * @property {EasingParam} [releaseEase]
 * @property {Boolean|DraggableCursorParams|((draggable: Draggable) => Boolean|DraggableCursorParams)} [cursor]
 * @property {Callback<Draggable>} [onGrab]
 * @property {Callback<Draggable>} [onDrag]
 * @property {Callback<Draggable>} [onRelease]
 * @property {Callback<Draggable>} [onUpdate]
 * @property {Callback<Draggable>} [onSettle]
 * @property {Callback<Draggable>} [onSnap]
 * @property {Callback<Draggable>} [onResize]
 * @property {Callback<Draggable>} [onAfterResize]
 */

/**
 * @typedef {SVGGeometryElement & {
 *   setAttribute(name: 'draw', value: `${number} ${number}`): void;
 *   draw: `${number} ${number}`;
 * }} DrawableSVGGeometry
 */

/**
 * @callback EasingFunction
 * @param {Number} time
 * @return {Number}
 */

/**
 * @typedef {('linear'|'linear(x1, x2 25%, x3)'|'in'|'out'|'inOut'|'inQuad'|'outQuad'|'inOutQuad'|'inCubic'|'outCubic'|'inOutCubic'|'inQuart'|'outQuart'|'inOutQuart'|'inQuint'|'outQuint'|'inOutQuint'|'inSine'|'outSine'|'inOutSine'|'inCirc'|'outCirc'|'inOutCirc'|'inExpo'|'outExpo'|'inOutExpo'|'inBounce'|'outBounce'|'inOutBounce'|'inBack'|'outBack'|'inOutBack'|'inElastic'|'outElastic'|'inOutElastic'|'irregular'|'cubicBezier'|'steps'|'in(p = 1.675)'|'out(p = 1.675)'|'inOut(p = 1.675)'|'inBack(overshoot = 1.70158)'|'outBack(overshoot = 1.70158)'|'inOutBack(overshoot = 1.70158)'|'inElastic(amplitude = 1, period = .3)'|'outElastic(amplitude = 1, period = .3)'|'inOutElastic(amplitude = 1, period = .3)'|'irregular(length = 10, randomness = 1)'|'cubicBezier(x1, y1, x2, y2)'|'steps(steps = 10)')} EaseStringParamNames
 */

// A hack to get both ease names suggestions AND allow any strings
// https://github.com/microsoft/TypeScript/issues/29729#issuecomment-460346421
/** @typedef {(String & {})|EaseStringParamNames|EasingFunction|Spring} EasingParam */

/** @typedef {HTMLElement|SVGElement} DOMTarget */
/** @typedef {Record<String, any>} JSTarget */
/** @typedef {DOMTarget|JSTarget} Target */
/** @typedef {Target|NodeList|String} TargetSelector */
/** @typedef {DOMTarget|NodeList|String} DOMTargetSelector */
/** @typedef {Array.<DOMTargetSelector>|DOMTargetSelector} DOMTargetsParam */
/** @typedef {Array.<DOMTarget>} DOMTargetsArray */
/** @typedef {Array.<JSTarget>|JSTarget} JSTargetsParam */
/** @typedef {Array.<JSTarget>} JSTargetsArray */
/** @typedef {Array.<TargetSelector>|TargetSelector} TargetsParam */
/** @typedef {Array.<Target>} TargetsArray */

/**
 * @callback FunctionValue
 * @param {Target} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {Number|String|TweenObjectValue|Array.<Number|String|TweenObjectValue>}
 */

/**
 * @callback TweenModifier
 * @param {Number} value - The animated value
 * @return {Number|String}
 */

/** @typedef {[Number, Number, Number, Number]} ColorArray */

/**
 * @template T
 * @callback Callback
 * @param {T} self - Returns itself
 * @param {PointerEvent} [e]
 * @return {*}
 */

/**
 * @template {object} T
 * @typedef {Object} TickableCallbacks
 * @property {Callback<T>} [onBegin]
 * @property {Callback<T>} [onBeforeUpdate]
 * @property {Callback<T>} [onUpdate]
 * @property {Callback<T>} [onLoop]
 * @property {Callback<T>} [onPause]
 * @property {Callback<T>} [onComplete]
 */

/**
 * @template {object} T
 * @typedef {Object} RenderableCallbacks
 * @property {Callback<T>} [onRender]
 */

/**
 * @typedef {Object} Tween
 * @property {Number} id
 * @property {JSAnimation} parent
 * @property {String} property
 * @property {Target} target
 * @property {String|Number} _value
 * @property {Function|null} _func
 * @property {EasingFunction} _ease
 * @property {Array.<Number>} _fromNumbers
 * @property {Array.<Number>} _toNumbers
 * @property {Array.<String>} _strings
 * @property {Number} _fromNumber
 * @property {Number} _toNumber
 * @property {Array.<Number>} _numbers
 * @property {Number} _number
 * @property {String} _unit
 * @property {TweenModifier} _modifier
 * @property {Number} _currentTime
 * @property {Number} _delay
 * @property {Number} _updateDuration
 * @property {Number} _startTime
 * @property {Number} _changeDuration
 * @property {Number} _absoluteStartTime
 * @property {tweenTypes} _tweenType
 * @property {valueTypes} _valueType
 * @property {Number} _composition
 * @property {Number} _isOverlapped
 * @property {Number} _isOverridden
 * @property {Number} _renderTransforms
 * @property {Tween} _prevRep
 * @property {Tween} _nextRep
 * @property {Tween} _prevAdd
 * @property {Tween} _nextAdd
 * @property {Tween} _prev
 * @property {Tween} _next
 */

/**
 * @typedef TweenDecomposedValue
 * @property {Number} t - Type
 * @property {Number} n - Single number value
 * @property {String} u - Value unit
 * @property {String} o - Value operator
 * @property {Array.<Number>} d - Array of Numbers (in case of complex value type)
 * @property {Array.<String>} s - Strings (in case of complex value type)
 */

/** @typedef {{_head: null|Tween, _tail: null|Tween}} TweenPropertySiblings */
/** @typedef {Record<String, TweenPropertySiblings>} TweenLookups */
/** @typedef {WeakMap.<Target, TweenLookups>} TweenReplaceLookups */
/** @typedef {Map.<Target, TweenLookups>} TweenAdditiveLookups */

/**
 * @typedef {Object} TimerOptions
 * @property {Number|String} [id]
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {Number} [loopDelay]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|Number} [loop]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [frameRate]
 * @property {Number} [playbackRate]
 */

/**

/**
 * @typedef {TimerOptions & TickableCallbacks<Timer>} TimerParams
 */

/**
 * @typedef {Number|String|FunctionValue} TweenParamValue
 */

/**
 * @typedef {TweenParamValue|[TweenParamValue, TweenParamValue]} TweenPropValue
 */

/**
 * @typedef {(String & {})|'none'|'replace'|'blend'|compositionTypes} TweenComposition
 */

/**
 * @typedef {Object} TweenParamsOptions
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */

/**
 * @typedef {Object} TweenValues
 * @property {TweenParamValue} [from]
 * @property {TweenPropValue} [to]
 * @property {TweenPropValue} [fromTo]
 */

/**
 * @typedef {TweenParamsOptions & TweenValues} TweenKeyValue
 */

/**
 * @typedef {Array.<TweenKeyValue|TweenPropValue>} ArraySyntaxValue
 */

/**
 * @typedef {TweenParamValue|ArraySyntaxValue|TweenKeyValue} TweenOptions
 */

/**
 * @typedef {Partial<{to: TweenParamValue|Array.<TweenParamValue>; from: TweenParamValue|Array.<TweenParamValue>; fromTo: TweenParamValue|Array.<TweenParamValue>;}>} TweenObjectValue
 */

/**
 * @typedef {Object} PercentageKeyframeOptions
 * @property {EasingParam} [ease]
 */

/**
 * @typedef {Record<String, TweenParamValue>} PercentageKeyframeParams
 */

/**
 * @typedef {Record<String, PercentageKeyframeParams & PercentageKeyframeOptions>} PercentageKeyframes
 */

/**
 * @typedef {Array<Record<String, TweenOptions | TweenModifier | boolean> & TweenParamsOptions>} DurationKeyframes
 */

/**
 * @typedef {Object} AnimationOptions
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 */

// TODO: Currently setting TweenModifier to the intersected Record<> makes the FunctionValue type target param any if only one parameter is set
/**
 * @typedef {Record<String, TweenOptions | Callback<JSAnimation> | TweenModifier | boolean | PercentageKeyframes | DurationKeyframes | ScrollObserver> & TimerOptions & AnimationOptions & TweenParamsOptions & TickableCallbacks<JSAnimation> & RenderableCallbacks<JSAnimation>} AnimationParams
 */

/**
 * @typedef {Object} TimelineOptions
 * @property {DefaultsParams} [defaults]
 * @property {EasingParam} [playbackEase]
 */

/**
 * @typedef {TimerOptions & TimelineOptions & TickableCallbacks<Timeline> & RenderableCallbacks<Timeline>} TimelineParams
 */

/**
 * @callback AnimatablePropertySetter
 * @param  {Number|Array.<Number>} to
 * @param  {Number} [duration]
 * @param  {EasingParam} [ease]
 * @return {AnimatableObject}
 */

/**
 * @callback AnimatablePropertyGetter
 * @return {Number|Array.<Number>}
 */

/**
 * @typedef {AnimatablePropertySetter & AnimatablePropertyGetter} AnimatableProperty
 */

/**
 * @typedef {Animatable & Record<String, AnimatableProperty>} AnimatableObject
 */

/**
 * @typedef {Object} AnimatablePropertyParamsOptions
 * @property {String} [unit]
 * @property {TweenParamValue} [duration]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */

/**
 * @typedef {Record<String, TweenParamValue | EasingParam | TweenModifier | TweenComposition | AnimatablePropertyParamsOptions> & AnimatablePropertyParamsOptions} AnimatableParams
 */


// Environments

// TODO: Do we need to check if we're running inside a worker ?
const isBrowser = typeof window !== 'undefined';

/** @type {Object|Null} */
const win = isBrowser ? window : null;

/** @type {Document} */
const doc = isBrowser ? document : null;

// Enums

/** @enum {Number} */
const tweenTypes = {
  OBJECT: 0,
  ATTRIBUTE: 1,
  CSS: 2,
  TRANSFORM: 3,
  CSS_VAR: 4,
};

/** @enum {Number} */
const valueTypes = {
  NUMBER: 0,
  UNIT: 1,
  COLOR: 2,
  COMPLEX: 3,
};

/** @enum {Number} */
const tickModes = {
  NONE: 0,
  AUTO: 1,
  FORCE: 2,
};

/** @enum {Number} */
const compositionTypes = {
  replace: 0,
  none: 1,
  blend: 2,
};

// Cache symbols

const isRegisteredTargetSymbol = Symbol();
const isDomSymbol = Symbol();
const isSvgSymbol = Symbol();
const transformsSymbol = Symbol();
const morphPointsSymbol = Symbol();
const proxyTargetSymbol = Symbol();

// Numbers

const minValue = 1e-11;
const maxValue = 1e12;
const K = 1e3;
const maxFps = 120;

// Strings

const emptyString = '';
const shortTransforms = new Map();

shortTransforms.set('x', 'translateX');
shortTransforms.set('y', 'translateY');
shortTransforms.set('z', 'translateZ');

const validTransforms = [
  'translateX',
  'translateY',
  'translateZ',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skew',
  'skewX',
  'skewY',
  'perspective',
  'matrix',
  'matrix3d',
];

const transformsFragmentStrings = validTransforms.reduce((a, v) => ({...a, [v]: v + '('}), {});

// Functions

/** @return {void} */
const noop = () => {};

// Regex

const hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
const rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
const rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
const hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
const hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
// export const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;
const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;
// export const unitsExecRgx = /^([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)+([a-z]+|%)$/i;
const unitsExecRgx = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;
const lowerCaseRgx = /([a-z])([A-Z])/g;
const transformsExecRgx = /(\w+)(\([^)]+\)+)/g; // Match inline transforms with cacl() values, returns the value wrapped in ()
const relativeValuesExecRgx = /(\*=|\+=|-=)/;




/** @type {DefaultsParams} */
const defaults = {
  id: null,
  keyframes: null,
  playbackEase: null,
  playbackRate: 1,
  frameRate: maxFps,
  loop: 0,
  reversed: false,
  alternate: false,
  autoplay: true,
  duration: K,
  delay: 0,
  loopDelay: 0,
  ease: 'out(2)',
  composition: compositionTypes.replace,
  modifier: v => v,
  onBegin: noop,
  onBeforeUpdate: noop,
  onUpdate: noop,
  onLoop: noop,
  onPause: noop,
  onComplete: noop,
  onRender: noop,
};

const globals = {
  /** @type {DefaultsParams} */
  defaults,
  /** @type {Document|DOMTarget} */
  root: doc,
  /** @type {Scope} */
  scope: null,
  /** @type {Number} */
  precision: 4,
  /** @type {Number} */
  timeScale: 1,
  /** @type {Number} */
  tickThreshold: 200,
};

const globalVersions = { version: '4.0.2', engine: null };

if (isBrowser) {
  if (!win.AnimeJS) win.AnimeJS = [];
  win.AnimeJS.push(globalVersions);
}

// Strings

/**
 * @param  {String} str
 * @return {String}
 */
const toLowerCase = str => str.replace(lowerCaseRgx, '$1-$2').toLowerCase();

/**
 * Prioritize this method instead of regex when possible
 * @param  {String} str
 * @param  {String} sub
 * @return {Boolean}
 */
const stringStartsWith = (str, sub) => str.indexOf(sub) === 0;

// Time
// Note: Date.now is used instead of performance.now since it is precise enough for timings calculations, performs slightly faster and works in Node.js environement.
const now = Date.now;

// Types checkers

const isArr = Array.isArray;
/**@param {any} a @return {a is Record<String, any>} */
const isObj = a => a && a.constructor === Object;
/**@param {any} a @return {a is Number} */
const isNum = a => typeof a === 'number' && !isNaN(a);
/**@param {any} a @return {a is String} */
const isStr = a => typeof a === 'string';
/**@param {any} a @return {a is Function} */
const isFnc = a => typeof a === 'function';
/**@param {any} a @return {a is undefined} */
const isUnd = a => typeof a === 'undefined';
/**@param {any} a @return {a is null | undefined} */
const isNil = a => isUnd(a) || a === null;
/**@param {any} a @return {a is SVGElement} */
const isSvg = a => isBrowser && a instanceof SVGElement;
/**@param {any} a @return {Boolean} */
const isHex = a => hexTestRgx.test(a);
/**@param {any} a @return {Boolean} */
const isRgb = a => stringStartsWith(a, 'rgb');
/**@param {any} a @return {Boolean} */
const isHsl = a => stringStartsWith(a, 'hsl');
/**@param {any} a @return {Boolean} */
const isCol = a => isHex(a) || isRgb(a) || isHsl(a);
/**@param {any} a @return {Boolean} */
const isKey = a => !globals.defaults.hasOwnProperty(a);

// Number

/**
 * @param  {Number|String} str
 * @return {Number}
 */
const parseNumber = str => isStr(str) ?
  parseFloat(/** @type {String} */(str)) :
  /** @type {Number} */(str);

// Math

const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const abs = Math.abs;
const exp = Math.exp;
const ceil = Math.ceil;
const floor = Math.floor;
const asin = Math.asin;
const max = Math.max;
const atan2 = Math.atan2;
const PI = Math.PI;
const _round = Math.round;

/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
const clamp = (v, min, max) => v < min ? min : v > max ? max : v;

const powCache = {};

/**
 * @param  {Number} v
 * @param  {Number} decimalLength
 * @return {Number}
 */
const round = (v, decimalLength) => {
  if (decimalLength < 0) return v;
  if (!decimalLength) return _round(v);
  let p = powCache[decimalLength];
  if (!p) p = powCache[decimalLength] = 10 ** decimalLength;
  return _round(v * p) / p;
};

/**
 * @param  {Number} v
 * @param  {Number|Array<Number>} increment
 * @return {Number}
 */
const snap = (v, increment) => isArr(increment) ? increment.reduce((closest, cv) => (abs(cv - v) < abs(closest - v) ? cv : closest)) : increment ? _round(v / increment) * increment : v;

/**
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} progress
 * @return {Number}
 */
const interpolate = (start, end, progress) => start + (end - start) * progress;

/**
 * @param  {Number} v
 * @return {Number}
 */
const clampInfinity = v => v === Infinity ? maxValue : v === -Infinity ? -1e12 : v;

/**
 * @param  {Number} v
 * @return {Number}
 */
const normalizeTime = v => v <= minValue ? minValue : clampInfinity(round(v, 11));

// Arrays

/**
 * @template T
 * @param {T[]} a
 * @return {T[]}
 */
const cloneArray = a => isArr(a) ? [ ...a ] : a;

// Objects

/**
 * @template T
 * @template U
 * @param {T} o1
 * @param {U} o2
 * @return {T & U}
 */
const mergeObjects = (o1, o2) => {
  const merged = /** @type {T & U} */({ ...o1 });
  for (let p in o2) {
    const o1p = /** @type {T & U} */(o1)[p];
    merged[p] = isUnd(o1p) ? /** @type {T & U} */(o2)[p] : o1p;
  }  return merged;
};

// Linked lists

/**
 * @param {Object} parent
 * @param {Function} callback
 * @param {Boolean} [reverse]
 * @param {String} [prevProp]
 * @param {String} [nextProp]
 * @return {void}
 */
const forEachChildren = (parent, callback, reverse, prevProp = '_prev', nextProp = '_next') => {
  let next = parent._head;
  let adjustedNextProp = nextProp;
  if (reverse) {
    next = parent._tail;
    adjustedNextProp = prevProp;
  }
  while (next) {
    const currentNext = next[adjustedNextProp];
    callback(next);
    next = currentNext;
  }
};

/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {String} [prevProp]
 * @param  {String} [nextProp]
 * @return {void}
 */
const removeChild = (parent, child, prevProp = '_prev', nextProp = '_next') => {
  const prev = child[prevProp];
  const next = child[nextProp];
  prev ? prev[nextProp] = next : parent._head = next;
  next ? next[prevProp] = prev : parent._tail = prev;
  child[prevProp] = null;
  child[nextProp] = null;
};

/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {Function} [sortMethod]
 * @param  {String} prevProp
 * @param  {String} nextProp
 * @return {void}
 */
const addChild = (parent, child, sortMethod, prevProp = '_prev', nextProp = '_next') => {
  let prev = parent._tail;
  while (prev && sortMethod && sortMethod(prev, child)) prev = prev[prevProp];
  const next = prev ? prev[nextProp] : parent._head;
  prev ? prev[nextProp] = child : parent._head = child;
  next ? next[prevProp] = child : parent._tail = child;
  child[prevProp] = prev;
  child[nextProp] = next;
};

/*
 * Base class to control framerate and playback rate.
 * Inherited by Engine, Timer, Animation and Timeline.
 */
class Clock {

  /** @param {Number} [initTime] */
  constructor(initTime = 0) {
    /** @type {Number} */
    this.deltaTime = 0;
    /** @type {Number} */
    this._currentTime = initTime;
    /** @type {Number} */
    this._elapsedTime = initTime;
    /** @type {Number} */
    this._startTime = initTime;
    /** @type {Number} */
    this._lastTime = initTime;
    /** @type {Number} */
    this._scheduledTime = 0;
    /** @type {Number} */
    this._frameDuration = round(K / maxFps, 0);
    /** @type {Number} */
    this._fps = maxFps;
    /** @type {Number} */
    this._speed = 1;
    /** @type {Boolean} */
    this._hasChildren = false;
    /** @type {Tickable|Tween} */
    this._head = null;
    /** @type {Tickable|Tween} */
    this._tail = null;
  }

  get fps() {
    return this._fps;
  }

  set fps(frameRate) {
    const previousFrameDuration = this._frameDuration;
    const fr = +frameRate;
    const fps = fr < minValue ? minValue : fr;
    const frameDuration = round(K / fps, 0);
    this._fps = fps;
    this._frameDuration = frameDuration;
    this._scheduledTime += frameDuration - previousFrameDuration;
  }

  get speed() {
    return this._speed;
  }

  set speed(playbackRate) {
    const pbr = +playbackRate;
    this._speed = pbr < minValue ? minValue : pbr;
  }

  /**
   * @param  {Number} time
   * @return {tickModes}
   */
  requestTick(time) {
    const scheduledTime = this._scheduledTime;
    const elapsedTime = this._elapsedTime;
    this._elapsedTime += (time - elapsedTime);
    // If the elapsed time is lower than the scheduled time
    // this means not enough time has passed to hit one frameDuration
    // so skip that frame
    if (elapsedTime < scheduledTime) return tickModes.NONE;
    const frameDuration = this._frameDuration;
    const frameDelta = elapsedTime - scheduledTime;
    // Ensures that _scheduledTime progresses in steps of at least 1 frameDuration.
    // Skips ahead if the actual elapsed time is higher.
    this._scheduledTime += frameDelta < frameDuration ? frameDuration : frameDelta;
    return tickModes.AUTO;
  }

  /**
   * @param  {Number} time
   * @return {Number}
   */
  computeDeltaTime(time) {
    const delta = time - this._lastTime;
    this.deltaTime = delta;
    this._lastTime = time;
    return delta;
  }

}




/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {tickModes} tickMode
 * @return {Number}
 */
const render = (tickable, time, muteCallbacks, internalRender, tickMode) => {

  const parent = tickable.parent;
  const duration = tickable.duration;
  const completed = tickable.completed;
  const iterationDuration = tickable.iterationDuration;
  const iterationCount = tickable.iterationCount;
  const _currentIteration = tickable._currentIteration;
  const _loopDelay = tickable._loopDelay;
  const _reversed = tickable._reversed;
  const _alternate = tickable._alternate;
  const _hasChildren = tickable._hasChildren;
  const tickableDelay = tickable._delay;
  const tickablePrevAbsoluteTime = tickable._currentTime; // TODO: rename ._currentTime to ._absoluteCurrentTime

  const tickableEndTime = tickableDelay + iterationDuration;
  const tickableAbsoluteTime = time - tickableDelay;
  const tickablePrevTime = clamp(tickablePrevAbsoluteTime, -tickableDelay, duration);
  const tickableCurrentTime = clamp(tickableAbsoluteTime, -tickableDelay, duration);
  const deltaTime = tickableAbsoluteTime - tickablePrevAbsoluteTime;
  const isCurrentTimeAboveZero = tickableCurrentTime > 0;
  const isCurrentTimeEqualOrAboveDuration = tickableCurrentTime >= duration;
  const isSetter = duration <= minValue;
  const forcedTick = tickMode === tickModes.FORCE;

  let isOdd = 0;
  let iterationElapsedTime = tickableAbsoluteTime;
  // Render checks
  // Used to also check if the children have rendered in order to trigger the onRender callback on the parent timer
  let hasRendered = 0;

  // Execute the "expensive" iterations calculations only when necessary
  if (iterationCount > 1) {
    // bitwise NOT operator seems to be generally faster than Math.floor() across browsers
    const currentIteration = ~~(tickableCurrentTime / (iterationDuration + (isCurrentTimeEqualOrAboveDuration ? 0 : _loopDelay)));
    tickable._currentIteration = clamp(currentIteration, 0, iterationCount);
    // Prevent the iteration count to go above the max iterations when reaching the end of the animation
    if (isCurrentTimeEqualOrAboveDuration) tickable._currentIteration--;
    isOdd = tickable._currentIteration % 2;
    iterationElapsedTime = tickableCurrentTime % (iterationDuration + _loopDelay) || 0;
  }

  // Checks if exactly one of _reversed and (_alternate && isOdd) is true
  const isReversed = _reversed ^ (_alternate && isOdd);
  const _ease = /** @type {Renderable} */(tickable)._ease;
  let iterationTime = isCurrentTimeEqualOrAboveDuration ? isReversed ? 0 : duration : isReversed ? iterationDuration - iterationElapsedTime : iterationElapsedTime;
  if (_ease) iterationTime = iterationDuration * _ease(iterationTime / iterationDuration) || 0;
  const isRunningBackwards = (parent ? parent.backwards : tickableAbsoluteTime < tickablePrevAbsoluteTime) ? !isReversed : !!isReversed;

  tickable._currentTime = tickableAbsoluteTime;
  tickable._iterationTime = iterationTime;
  tickable.backwards = isRunningBackwards;

  if (isCurrentTimeAboveZero && !tickable.began) {
    tickable.began = true;
    if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
      tickable.onBegin(/** @type {CallbackArgument} */(tickable));
    }
  } else if (tickableAbsoluteTime <= 0) {
    tickable.began = false;
  }

  // Only triggers onLoop for tickable without children, otherwise call the the onLoop callback in the tick function
  // Make sure to trigger the onLoop before rendering to allow .refresh() to pickup the current values
  if (!muteCallbacks && !_hasChildren && isCurrentTimeAboveZero && tickable._currentIteration !== _currentIteration) {
    tickable.onLoop(/** @type {CallbackArgument} */(tickable));
  }

  if (
    forcedTick ||
    tickMode === tickModes.AUTO && (
      time >= tickableDelay && time <= tickableEndTime || // Normal render
      time <= tickableDelay && tickablePrevTime > tickableDelay || // Playhead is before the animation start time so make sure the animation is at its initial state
      time >= tickableEndTime && tickablePrevTime !== duration // Playhead is after the animation end time so make sure the animation is at its end state
    ) ||
    iterationTime >= tickableEndTime && tickablePrevTime !== duration ||
    iterationTime <= tickableDelay && tickablePrevTime > 0 ||
    time <= tickablePrevTime && tickablePrevTime === duration && completed || // Force a render if a seek occurs on an completed animation
    isCurrentTimeEqualOrAboveDuration && !completed && isSetter // This prevents 0 duration tickables to be skipped
  ) {

    if (isCurrentTimeAboveZero) {
      // Trigger onUpdate callback before rendering
      tickable.computeDeltaTime(tickablePrevTime);
      if (!muteCallbacks) tickable.onBeforeUpdate(/** @type {CallbackArgument} */(tickable));
    }

    // Start tweens rendering
    if (!_hasChildren) {

      // Time has jumped more than globals.tickThreshold so consider this tick manual
      const forcedRender = forcedTick || (isRunningBackwards ? deltaTime * -1 : deltaTime) >= globals.tickThreshold;
      const absoluteTime = tickable._offset + (parent ? parent._offset : 0) + tickableDelay + iterationTime;

      // Only Animation can have tweens, Timer returns undefined
      let tween = /** @type {Tween} */(/** @type {JSAnimation} */(tickable)._head);
      let tweenTarget;
      let tweenStyle;
      let tweenTargetTransforms;
      let tweenTargetTransformsProperties;
      let tweenTransformsNeedUpdate = 0;

      while (tween) {

        const tweenComposition = tween._composition;
        const tweenCurrentTime = tween._currentTime;
        const tweenChangeDuration = tween._changeDuration;
        const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
        const tweenNextRep = tween._nextRep;
        const tweenPrevRep = tween._prevRep;
        const tweenHasComposition = tweenComposition !== compositionTypes.none;

        if ((forcedRender || (
            (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenAbsEndTime + (tweenNextRep ? tweenNextRep._delay : 0)) &&
            (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime)
          )) && (!tweenHasComposition || (
            !tween._isOverridden &&
            (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) &&
            (!tweenNextRep || (tweenNextRep._isOverridden || absoluteTime <= tweenNextRep._absoluteStartTime)) &&
            (!tweenPrevRep || (tweenPrevRep._isOverridden || (absoluteTime >= (tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration) + tween._delay)))
          ))
        ) {

          const tweenNewTime = tween._currentTime = clamp(iterationTime - tween._startTime, 0, tweenChangeDuration);
          const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
          const tweenModifier = tween._modifier;
          const tweenValueType = tween._valueType;
          const tweenType = tween._tweenType;
          const tweenIsObject = tweenType === tweenTypes.OBJECT;
          const tweenIsNumber = tweenValueType === valueTypes.NUMBER;
          // Only round the in-between frames values if the final value is a string
          const tweenPrecision = (tweenIsNumber && tweenIsObject) || tweenProgress === 0 || tweenProgress === 1 ? -1 : globals.precision;

          // Recompose tween value
          /** @type {String|Number} */
          let value;
          /** @type {Number} */
          let number;

          if (tweenIsNumber) {
            value = number = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber,  tweenProgress), tweenPrecision )));
          } else if (tweenValueType === valueTypes.UNIT) {
            // Rounding the values speed up string composition
            number = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber,  tweenProgress), tweenPrecision)));
            value = `${number}${tween._unit}`;
          } else if (tweenValueType === valueTypes.COLOR) {
            const fn = tween._fromNumbers;
            const tn = tween._toNumbers;
            const r = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[0], tn[0], tweenProgress))), 0, 255), 0);
            const g = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[1], tn[1], tweenProgress))), 0, 255), 0);
            const b = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[2], tn[2], tweenProgress))), 0, 255), 0);
            const a = clamp(/** @type {Number} */(tweenModifier(round(interpolate(fn[3], tn[3], tweenProgress), tweenPrecision))), 0, 1);
            value = `rgba(${r},${g},${b},${a})`;
            if (tweenHasComposition) {
              const ns = tween._numbers;
              ns[0] = r;
              ns[1] = g;
              ns[2] = b;
              ns[3] = a;
            }
          } else if (tweenValueType === valueTypes.COMPLEX) {
            value = tween._strings[0];
            for (let j = 0, l = tween._toNumbers.length; j < l; j++) {
              const n = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumbers[j], tween._toNumbers[j], tweenProgress), tweenPrecision)));
              const s = tween._strings[j + 1];
              value += `${s ? n + s : n}`;
              if (tweenHasComposition) {
                tween._numbers[j] = n;
              }
            }
          }

          // For additive tweens and Animatables
          if (tweenHasComposition) {
            tween._number = number;
          }

          if (!internalRender && tweenComposition !== compositionTypes.blend) {

            const tweenProperty = tween.property;
            tweenTarget = tween.target;

            if (tweenIsObject) {
              tweenTarget[tweenProperty] = value;
            } else if (tweenType === tweenTypes.ATTRIBUTE) {
              /** @type {DOMTarget} */(tweenTarget).setAttribute(tweenProperty, /** @type {String} */(value));
            } else {
              tweenStyle = /** @type {DOMTarget} */(tweenTarget).style;
              if (tweenType === tweenTypes.TRANSFORM) {
                if (tweenTarget !== tweenTargetTransforms) {
                  tweenTargetTransforms = tweenTarget;
                  // NOTE: Referencing the cachedTransforms in the tween property directly can be a little bit faster but appears to increase memory usage.
                  tweenTargetTransformsProperties = tweenTarget[transformsSymbol];
                }
                tweenTargetTransformsProperties[tweenProperty] = value;
                tweenTransformsNeedUpdate = 1;
              } else if (tweenType === tweenTypes.CSS) {
                tweenStyle[tweenProperty] = value;
              } else if (tweenType === tweenTypes.CSS_VAR) {
                tweenStyle.setProperty(tweenProperty,/** @type {String} */(value));
              }
            }

            if (isCurrentTimeAboveZero) hasRendered = 1;

          } else {
            // Used for composing timeline tweens without having to do a real render
            tween._value = value;
          }

        }

        // NOTE: Possible improvement: Use translate(x,y) / translate3d(x,y,z) syntax
        // to reduce memory usage on string composition
        if (tweenTransformsNeedUpdate && tween._renderTransforms) {
          let str = emptyString;
          for (let key in tweenTargetTransformsProperties) {
            str += `${transformsFragmentStrings[key]}${tweenTargetTransformsProperties[key]}) `;
          }
          tweenStyle.transform = str;
          tweenTransformsNeedUpdate = 0;
        }

        tween = tween._next;
      }

      if (!muteCallbacks && hasRendered) {
        /** @type {JSAnimation} */(tickable).onRender(/** @type {JSAnimation} */(tickable));
      }
    }

    if (!muteCallbacks && isCurrentTimeAboveZero) {
      tickable.onUpdate(/** @type {CallbackArgument} */(tickable));
    }

  }

  // End tweens rendering

  // Handle setters on timeline differently and allow re-trigering the onComplete callback when seeking backwards
  if (parent && isSetter) {
    if (!muteCallbacks && (
      (parent.began && !isRunningBackwards && tickableAbsoluteTime >= duration && !completed) ||
      (isRunningBackwards && tickableAbsoluteTime <= minValue && completed)
    )) {
      tickable.onComplete(/** @type {CallbackArgument} */(tickable));
      tickable.completed = !isRunningBackwards;
    }
  // If currentTime is both above 0 and at least equals to duration, handles normal onComplete or infinite loops
  } else if (isCurrentTimeAboveZero && isCurrentTimeEqualOrAboveDuration) {
    if (iterationCount === Infinity) {
      // Offset the tickable _startTime with its duration to reset _currentTime to 0 and continue the infinite timer
      tickable._startTime += tickable.duration;
    } else if (tickable._currentIteration >= iterationCount - 1) {
      // By setting paused to true, we tell the engine loop to not render this tickable and removes it from the list on the next tick
      tickable.paused = true;
      if (!completed && !_hasChildren) {
        // If the tickable has children, triggers onComplete() only when all children have completed in the tick function
        tickable.completed = true;
        if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
          tickable.onComplete(/** @type {CallbackArgument} */(tickable));
          tickable._resolve(/** @type {CallbackArgument} */(tickable));
        }
      }
    }
  // Otherwise set the completed flag to false
  } else {
    tickable.completed = false;
  }

  // NOTE: hasRendered * direction (negative for backwards) this way we can remove the tickable.backwards property completly ?
  return hasRendered;
};

/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {Number} tickMode
 * @return {void}
 */
const tick = (tickable, time, muteCallbacks, internalRender, tickMode) => {
  const _currentIteration = tickable._currentIteration;
  render(tickable, time, muteCallbacks, internalRender, tickMode);
  if (tickable._hasChildren) {
    const tl = /** @type {Timeline} */(tickable);
    const tlIsRunningBackwards = tl.backwards;
    const tlChildrenTime = internalRender ? time : tl._iterationTime;
    const tlCildrenTickTime = now();

    let tlChildrenHasRendered = 0;
    let tlChildrenHaveCompleted = true;

    // If the timeline has looped forward, we need to manually triggers children skipped callbacks
    if (!internalRender && tl._currentIteration !== _currentIteration) {
      const tlIterationDuration = tl.iterationDuration;
      forEachChildren(tl, (/** @type {JSAnimation} */child) => {
        if (!tlIsRunningBackwards) {
          // Force an internal render to trigger the callbacks if the child has not completed on loop
          if (!child.completed && !child.backwards && child._currentTime < child.iterationDuration) {
            render(child, tlIterationDuration, muteCallbacks, 1, tickModes.FORCE);
          }
          // Reset their began and completed flags to allow retrigering callbacks on the next iteration
          child.began = false;
          child.completed = false;
        } else {
          const childDuration = child.duration;
          const childStartTime = child._offset + child._delay;
          const childEndTime = childStartTime + childDuration;
          // Triggers the onComplete callback on reverse for children on the edges of the timeline
          if (!muteCallbacks && childDuration <= minValue && (!childStartTime || childEndTime === tlIterationDuration)) {
            child.onComplete(child);
          }
        }
      });
      if (!muteCallbacks) tl.onLoop(/** @type {CallbackArgument} */(tl));
    }

    forEachChildren(tl, (/** @type {JSAnimation} */child) => {
      const childTime = round((tlChildrenTime - child._offset) * child._speed, 12); // Rounding is needed when using seconds
      const childTickMode = child._fps < tl._fps ? child.requestTick(tlCildrenTickTime) : tickMode;
      tlChildrenHasRendered += render(child, childTime, muteCallbacks, internalRender, childTickMode);
      if (!child.completed && tlChildrenHaveCompleted) tlChildrenHaveCompleted = false;
    }, tlIsRunningBackwards);

    // Renders on timeline are triggered by its children so it needs to be set after rendering the children
    if (!muteCallbacks && tlChildrenHasRendered) tl.onRender(/** @type {CallbackArgument} */(tl));

    // Triggers the timeline onComplete() once all chindren all completed and the current time has reached the end
    if (tlChildrenHaveCompleted && tl._currentTime >= tl.duration) {
      // Make sure the paused flag is false in case it has been skipped in the render function
      tl.paused = true;
      if (!tl.completed) {
        tl.completed = true;
        if (!muteCallbacks) {
          tl.onComplete(/** @type {CallbackArgument} */(tl));
          tl._resolve(/** @type {CallbackArgument} */(tl));
        }
      }
    }
  }
};




const additive = {
  animation: null,
  update: noop,
};

/**
 * @typedef AdditiveAnimation
 * @property {Number} duration
 * @property {Number} _offset
 * @property {Number} _delay
 * @property {Tween} _head
 * @property {Tween} _tail
 */

/**
 * @param  {TweenAdditiveLookups} lookups
 * @return {AdditiveAnimation}
 */
const addAdditiveAnimation = lookups => {
  let animation = additive.animation;
  if (!animation) {
    animation = {
      duration: minValue,
      computeDeltaTime: noop,
      _offset: 0,
      _delay: 0,
      _head: null,
      _tail: null,
    };
    additive.animation = animation;
    additive.update = () => {
      lookups.forEach(propertyAnimation => {
        for (let propertyName in propertyAnimation) {
          const tweens = propertyAnimation[propertyName];
          const lookupTween = tweens._head;
          if (lookupTween) {
            const valueType = lookupTween._valueType;
            const additiveValues = valueType === valueTypes.COMPLEX || valueType === valueTypes.COLOR ? cloneArray(lookupTween._fromNumbers) : null;
            let additiveValue = lookupTween._fromNumber;
            let tween = tweens._tail;
            while (tween && tween !== lookupTween) {
              if (additiveValues) {
                for (let i = 0, l = tween._numbers.length; i < l; i++) additiveValues[i] += tween._numbers[i];
              } else {
                additiveValue += tween._number;
              }
              tween = tween._prevAdd;
            }
            lookupTween._toNumber = additiveValue;
            lookupTween._toNumbers = additiveValues;
          }
        }
      });
      // TODO: Avoid polymorphism here, idealy the additive animation should be a regular animation with a higher priority in the render loop
      render(animation, 1, 1, 0, tickModes.FORCE);
    };
  }
  return animation;
};

const engineTickMethod = isBrowser ? requestAnimationFrame : setImmediate;
const engineCancelMethod = isBrowser ? cancelAnimationFrame : clearImmediate;

class Engine extends Clock {

  /** @param {Number} [initTime] */
  constructor(initTime) {
    super(initTime);
    this.useDefaultMainLoop = true;
    this.pauseOnDocumentHidden = true;
    /** @type {DefaultsParams} */
    this.defaults = defaults;
    this.paused = isBrowser && doc.hidden ? true  : false;
    /** @type {Number|NodeJS.Immediate} */
    this.reqId = null;
  }

  update() {
    const time = this._currentTime = now();
    if (this.requestTick(time)) {
      this.computeDeltaTime(time);
      const engineSpeed = this._speed;
      const engineFps = this._fps;
      let activeTickable = /** @type {Tickable} */(this._head);
      while (activeTickable) {
        const nextTickable = activeTickable._next;
        if (!activeTickable.paused) {
          tick(
            activeTickable,
            (time - activeTickable._startTime) * activeTickable._speed * engineSpeed,
            0, // !muteCallbacks
            0, // !internalRender
            activeTickable._fps < engineFps ? activeTickable.requestTick(time) : tickModes.AUTO
          );
        } else {
          removeChild(this, activeTickable);
          this._hasChildren = !!this._tail;
          activeTickable._running = false;
          if (activeTickable.completed && !activeTickable._cancelled) {
            activeTickable.cancel();
          }
        }
        activeTickable = nextTickable;
      }
      additive.update();
    }
  }

  wake() {
    if (this.useDefaultMainLoop && !this.reqId && !this.paused) {
      this.reqId = engineTickMethod(tickEngine);
    }
    return this;
  }

  pause() {
    this.paused = true;
    return killEngine();
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    forEachChildren(this, (/** @type {Tickable} */child) => child.resetTime());
    return this.wake();
  }

  // Getter and setter for speed
  get speed() {
    return this._speed * (globals.timeScale === 1 ? 1 : K);
  }

  set speed(playbackRate) {
    this._speed = playbackRate * globals.timeScale;
    forEachChildren(this, (/** @type {Tickable} */child) => child.speed = child._speed);
  }

  // Getter and setter for timeUnit
  get timeUnit() {
    return globals.timeScale === 1 ? 'ms' : 's';
  };

  set timeUnit(unit) {
    const secondsScale = 0.001;
    const isSecond = unit === 's';
    const newScale = isSecond ? secondsScale : 1;
    if (globals.timeScale !== newScale) {
      globals.timeScale = newScale;
      globals.tickThreshold = 200 * newScale;
      const scaleFactor = isSecond ? secondsScale : K;
      /** @type {Number} */
      (this.defaults.duration) *= scaleFactor;
      this._speed *= scaleFactor;
    }
  }

  // Getter and setter for precision
  get precision() {
    return globals.precision;
  }

  set precision(precision) {
    globals.precision = precision;
  }

}
const engine = /*#__PURE__*/(() => {
  const engine = new Engine(now());
  if (isBrowser) {
    globalVersions.engine = engine;
    doc.addEventListener('visibilitychange', () => {
      if (!engine.pauseOnDocumentHidden) return;
      doc.hidden ? engine.pause() : engine.resume();
    });
  }
  return engine;
})();


const tickEngine = () => {
  if (engine._head) {
    engine.reqId = engineTickMethod(tickEngine);
    engine.update();
  } else {
    engine.reqId = 0;
  }
};

const killEngine = () => {
  engineCancelMethod(/** @type {NodeJS.Immediate & Number} */(engine.reqId));
  engine.reqId = 0;
  return engine;
};




/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */
const parseInlineTransforms = (target, propName, animationInlineStyles) => {
  const inlineTransforms = target.style.transform;
  let inlinedStylesPropertyValue;
  if (inlineTransforms) {
    const cachedTransforms = target[transformsSymbol];
    let t; while (t = transformsExecRgx.exec(inlineTransforms)) {
      const inlinePropertyName = t[1];
      // const inlinePropertyValue = t[2];
      const inlinePropertyValue = t[2].slice(1, -1);
      cachedTransforms[inlinePropertyName] = inlinePropertyValue;
      if (inlinePropertyName === propName) {
        inlinedStylesPropertyValue = inlinePropertyValue;
        // Store the new parsed inline styles if animationInlineStyles is provided
        if (animationInlineStyles) {
          animationInlineStyles[propName] = inlinePropertyValue;
        }
      }
    }
  }
  return inlineTransforms && !isUnd(inlinedStylesPropertyValue) ? inlinedStylesPropertyValue :
    stringStartsWith(propName, 'scale') ? '1' :
    stringStartsWith(propName, 'rotate') || stringStartsWith(propName, 'skew') ? '0deg' : '0px';
};




/**
 * @param  {DOMTargetsParam|TargetsParam} v
 * @return {NodeList|HTMLCollection}
 */
function getNodeList(v) {
  const n = isStr(v) ? globals.root.querySelectorAll(v) : v;
  if (n instanceof NodeList || n instanceof HTMLCollection) return n;
}

/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */
function parseTargets(targets) {
  if (isNil(targets)) return /** @type {TargetsArray} */([]);
  if (isArr(targets)) {
    const flattened = targets.flat(Infinity);
    /** @type {TargetsArray} */
    const parsed = [];
    for (let i = 0, l = flattened.length; i < l; i++) {
      const item = flattened[i];
      if (!isNil(item)) {
        const nodeList = getNodeList(item);
        if (nodeList) {
          for (let j = 0, jl = nodeList.length; j < jl; j++) {
            const subItem = nodeList[j];
            if (!isNil(subItem)) {
              let isDuplicate = false;
              for (let k = 0, kl = parsed.length; k < kl; k++) {
                if (parsed[k] === subItem) {
                  isDuplicate = true;
                  break;
                }
              }
              if (!isDuplicate) {
                parsed.push(subItem);
              }
            }
          }
        } else {
          let isDuplicate = false;
          for (let j = 0, jl = parsed.length; j < jl; j++) {
            if (parsed[j] === item) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            parsed.push(item);
          }
        }
      }
    }
    return parsed;
  }
  if (!isBrowser) return /** @type {JSTargetsArray} */([targets]);
  const nodeList = getNodeList(targets);
  if (nodeList) return /** @type {DOMTargetsArray} */(Array.from(nodeList));
  return /** @type {TargetsArray} */([targets]);
}

/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */
function registerTargets(targets) {
  const parsedTargetsArray = parseTargets(targets);
  const parsedTargetsLength = parsedTargetsArray.length;
  if (parsedTargetsLength) {
    for (let i = 0; i < parsedTargetsLength; i++) {
      const target = parsedTargetsArray[i];
      if (!target[isRegisteredTargetSymbol]) {
        target[isRegisteredTargetSymbol] = true;
        const isSvgType = isSvg(target);
        const isDom = /** @type {DOMTarget} */(target).nodeType || isSvgType;
        if (isDom) {
          target[isDomSymbol] = true;
          target[isSvgSymbol] = isSvgType;
          target[transformsSymbol] = {};
        }
      }
    }
  }
  return parsedTargetsArray;
}




/**
 * @param  {TargetsParam} path
 * @return {SVGGeometryElement|undefined}
 */
const getPath = path => {
  const parsedTargets = parseTargets(path);
  const $parsedSvg = /** @type {SVGGeometryElement} */(parsedTargets[0]);
  if (!$parsedSvg || !isSvg($parsedSvg)) return;
  return $parsedSvg;
};

/**
 * @param  {TargetsParam} path2
 * @param  {Number} [precision]
 * @return {FunctionValue}
 */
const morphTo = (path2, precision = .33) => ($path1) => {
  const $path2 = /** @type {SVGGeometryElement} */(getPath(path2));
  if (!$path2) return;
  const isPath = $path1.tagName === 'path';
  const separator = isPath ? ' ' : ',';
  const previousPoints = $path1[morphPointsSymbol];
  if (previousPoints) $path1.setAttribute(isPath ? 'd' : 'points', previousPoints);

  let v1 = '', v2 = '';

  if (!precision) {
    v1 = $path1.getAttribute(isPath ? 'd' : 'points');
    v2 = $path2.getAttribute(isPath ? 'd' : 'points');
  } else {
    const length1 = /** @type {SVGGeometryElement} */($path1).getTotalLength();
    const length2 = $path2.getTotalLength();
    const maxPoints = Math.max(Math.ceil(length1 * precision), Math.ceil(length2 * precision));
    for (let i = 0; i < maxPoints; i++) {
      const t = i / (maxPoints - 1);
      const pointOnPath1 = /** @type {SVGGeometryElement} */($path1).getPointAtLength(length1 * t);
      const pointOnPath2 = $path2.getPointAtLength(length2 * t);
      const prefix = isPath ? (i === 0 ? 'M' : 'L') : '';
      v1 += prefix + round(pointOnPath1.x, 3) + separator + pointOnPath1.y + ' ';
      v2 += prefix + round(pointOnPath2.x, 3) + separator + pointOnPath2.y + ' ';
    }
  }

  $path1[morphPointsSymbol] = v2;

  return [v1, v2];
};

/**
 * @param {SVGGeometryElement} [$el]
 * @return {Number}
 */
const getScaleFactor = $el => {
  let scaleFactor = 1;
  if ($el && $el.getCTM) {
    const ctm = $el.getCTM();
    if (ctm) {
      const scaleX = sqrt(ctm.a * ctm.a + ctm.b * ctm.b);
      const scaleY = sqrt(ctm.c * ctm.c + ctm.d * ctm.d);
      scaleFactor = (scaleX + scaleY) / 2;
    }
  }
  return scaleFactor;
};

/**
 * Creates a proxy that wraps an SVGGeometryElement and adds drawing functionality.
 * @param {SVGGeometryElement} $el - The SVG element to transform into a drawable
 * @param {number} start - Starting position (0-1)
 * @param {number} end - Ending position (0-1)
 * @return {DrawableSVGGeometry} - Returns a proxy that preserves the original element's type with additional 'draw' attribute functionality
 */
const createDrawableProxy = ($el, start, end) => {
  const pathLength = K;
  const computedStyles = getComputedStyle($el);
  const strokeLineCap = computedStyles.strokeLinecap;
  // @ts-ignore
  const $scalled = computedStyles.vectorEffect === 'non-scaling-stroke' ? $el : null;
  let currentCap = strokeLineCap;

  const proxy = new Proxy($el, {
    get(target, property) {
      const value = target[property];
      if (property === proxyTargetSymbol) return target;
      if (property === 'setAttribute') {
        return (...args) => {
          if (args[0] === 'draw') {
            const value = args[1];
            const values = value.split(' ');
            const v1 = +values[0];
            const v2 = +values[1];
            // TOTO: Benchmark if performing two slices is more performant than one split
            // const spaceIndex = value.indexOf(' ');
            // const v1 = round(+value.slice(0, spaceIndex), precision);
            // const v2 = round(+value.slice(spaceIndex + 1), precision);
            const scaleFactor = getScaleFactor($scalled);
            const os = v1 * -1e3 * scaleFactor;
            const d1 = (v2 * pathLength * scaleFactor) + os;
            const d2 = (pathLength * scaleFactor +
                      ((v1 === 0 && v2 === 1) || (v1 === 1 && v2 === 0) ? 0 : 10 * scaleFactor) - d1);
            if (strokeLineCap !== 'butt') {
              const newCap = v1 === v2 ? 'butt' : strokeLineCap;
              if (currentCap !== newCap) {
                target.style.strokeLinecap = `${newCap}`;
                currentCap = newCap;
              }
            }
            target.setAttribute('stroke-dashoffset', `${os}`);
            target.setAttribute('stroke-dasharray', `${d1} ${d2}`);
          }
          return Reflect.apply(value, target, args);
        };
      }

      if (isFnc(value)) {
        return (...args) => Reflect.apply(value, target, args);
      } else {
        return value;
      }
    }
  });

  if ($el.getAttribute('pathLength') !== `${pathLength}`) {
    $el.setAttribute('pathLength', `${pathLength}`);
    proxy.setAttribute('draw', `${start} ${end}`);
  }

  return /** @type {DrawableSVGGeometry} */(proxy);
};

/**
 * Creates drawable proxies for multiple SVG elements.
 * @param {TargetsParam} selector - CSS selector, SVG element, or array of elements and selectors
 * @param {number} [start=0] - Starting position (0-1)
 * @param {number} [end=0] - Ending position (0-1)
 * @return {Array<DrawableSVGGeometry>} - Array of proxied elements with drawing functionality
 */
const createDrawable = (selector, start = 0, end = 0) => {
  const els = parseTargets(selector);
  return els.map($el => createDrawableProxy(
    /** @type {SVGGeometryElement} */($el),
    start,
    end
  ));
};

// Motion path animation

/**
 * @param {SVGGeometryElement} $path
 * @param {Number} progress
 * @param {Number}lookup
 * @return {DOMPoint}
 */
const getPathPoint = ($path, progress, lookup = 0) => {
  return $path.getPointAtLength(progress + lookup >= 1 ? progress + lookup : 0);
};

/**
 * @param {SVGGeometryElement} $path
 * @param {String} pathProperty
 * @return {FunctionValue}
 */
const getPathProgess = ($path, pathProperty) => {
  return $el => {
    const totalLength = +($path.getTotalLength());
    const inSvg = $el[isSvgSymbol];
    const ctm = $path.getCTM();
    /** @type {TweenObjectValue} */
    return {
      from: 0,
      to: totalLength,
      /** @type {TweenModifier} */
      modifier: progress => {
        if (pathProperty === 'a') {
          const p0 = getPathPoint($path, progress, -1);
          const p1 = getPathPoint($path, progress, 1);
          return atan2(p1.y - p0.y, p1.x - p0.x) * 180 / PI;
        } else {
          const p = getPathPoint($path, progress, 0);
          return pathProperty === 'x' ?
            inSvg || !ctm ? p.x : p.x * ctm.a + p.y * ctm.c + ctm.e :
            inSvg || !ctm ? p.y : p.x * ctm.b + p.y * ctm.d + ctm.f
        }
      }
    }
  }
};

/**
 * @param {TargetsParam} path
 */
const createMotionPath = path => {
  const $path = getPath(path);
  if (!$path) return;
  return {
    translateX: getPathProgess($path, 'x'),
    translateY: getPathProgess($path, 'y'),
    rotate: getPathProgess($path, 'a'),
  }
};

// Check for valid SVG attribute

const cssReservedProperties = ['opacity', 'rotate', 'overflow', 'color'];

/**
 * @param  {Target} el
 * @param  {String} propertyName
 * @return {Boolean}
 */
const isValidSVGAttribute = (el, propertyName) => {
  // Return early and use CSS opacity animation instead (already better default values (opacity: 1 instead of 0)) and rotate should be considered a transform
  if (cssReservedProperties.includes(propertyName)) return false;
  if (el.getAttribute(propertyName) || propertyName in el) {
    if (propertyName === 'scale') { // Scale
      const elParentNode = /** @type {SVGGeometryElement} */(/** @type {DOMTarget} */(el).parentNode);
      // Only consider scale as a valid SVG attribute on filter element
      return elParentNode && elParentNode.tagName === 'filter';
    }
    return true;
  }
};

const svg = {
  morphTo,
  createMotionPath,
  createDrawable,
};




/**
 * RGB / RGBA Color value string -> RGBA values array
 * @param  {String} rgbValue
 * @return {ColorArray}
 */
const rgbToRgba = rgbValue => {
  const rgba = rgbExecRgx.exec(rgbValue) || rgbaExecRgx.exec(rgbValue);
  const a = !isUnd(rgba[4]) ? +rgba[4] : 1;
  return [
    +rgba[1],
    +rgba[2],
    +rgba[3],
    a
  ]
};

/**
 * HEX3 / HEX3A / HEX6 / HEX6A Color value string -> RGBA values array
 * @param  {String} hexValue
 * @return {ColorArray}
 */
const hexToRgba = hexValue => {
  const hexLength = hexValue.length;
  const isShort = hexLength === 4 || hexLength === 5;
  return [
    +('0x' + hexValue[1] + hexValue[isShort ? 1 : 2]),
    +('0x' + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
    +('0x' + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
    ((hexLength === 5 || hexLength === 9) ? +(+('0x' + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1)
  ]
};

/**
 * @param  {Number} p
 * @param  {Number} q
 * @param  {Number} t
 * @return {Number}
 */
const hue2rgb = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  return t < 1 / 6 ? p + (q - p) * 6 * t :
         t < 1 / 2 ? q :
         t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 :
         p;
};

/**
 * HSL / HSLA Color value string -> RGBA values array
 * @param  {String} hslValue
 * @return {ColorArray}
 */
const hslToRgba = hslValue => {
  const hsla = hslExecRgx.exec(hslValue) || hslaExecRgx.exec(hslValue);
  const h = +hsla[1] / 360;
  const s = +hsla[2] / 100;
  const l = +hsla[3] / 100;
  const a = !isUnd(hsla[4]) ? +hsla[4] : 1;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < .5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
    g = round(hue2rgb(p, q, h) * 255, 0);
    b = round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
  }
  return [r, g, b, a];
};

/**
 * All in one color converter that converts a color string value into an array of RGBA values
 * @param  {String} colorString
 * @return {ColorArray}
 */
const convertColorStringValuesToRgbaArray = colorString => {
  return isRgb(colorString) ? rgbToRgba(colorString) :
         isHex(colorString) ? hexToRgba(colorString) :
         isHsl(colorString) ? hslToRgba(colorString) :
         [0, 0, 0, 1];
};




/**
 * @template T, D
 * @param {T|undefined} targetValue
 * @param {D} defaultValue
 * @return {T|D}
 */
const setValue = (targetValue, defaultValue) => {
  return isUnd(targetValue) ? defaultValue : targetValue;
};

/**
 * @param  {TweenPropValue} value
 * @param  {Target} target
 * @param  {Number} index
 * @param  {Number} total
 * @param  {Object} [store]
 * @return {any}
 */
const getFunctionValue = (value, target, index, total, store) => {
  if (isFnc(value)) {
    const func = () => {
      const computed = /** @type {Function} */(value)(target, index, total);
      // Fallback to 0 if the function returns undefined / NaN / null / false / 0
      return !isNaN(+computed) ? +computed : computed || 0;
    };
    if (store) {
      store.func = func;
    }
    return func();
  } else {
    return value;
  }
};

/**
 * @param  {Target} target
 * @param  {String} prop
 * @return {tweenTypes}
 */
const getTweenType = (target, prop) => {
  return !target[isDomSymbol] ? tweenTypes.OBJECT :
    // Handle SVG attributes
    target[isSvgSymbol] && isValidSVGAttribute(target, prop) ? tweenTypes.ATTRIBUTE :
    // Handle CSS Transform properties differently than CSS to allow individual animations
    validTransforms.includes(prop) || shortTransforms.get(prop) ? tweenTypes.TRANSFORM :
    // CSS variables
    stringStartsWith(prop, '--') ? tweenTypes.CSS_VAR :
    // All other CSS properties
    prop in /** @type {DOMTarget} */(target).style ? tweenTypes.CSS :
    // Handle other DOM Attributes
    prop in target ? tweenTypes.OBJECT :
    tweenTypes.ATTRIBUTE;
};

/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */
const getCSSValue = (target, propName, animationInlineStyles) => {
  const inlineStyles = target.style[propName];
  if (inlineStyles && animationInlineStyles) {
    animationInlineStyles[propName] = inlineStyles;
  }
  const value = inlineStyles || getComputedStyle(target[proxyTargetSymbol] || target).getPropertyValue(propName);
  return value === 'auto' ? '0' : value;
};

/**
 * @param {Target} target
 * @param {String} propName
 * @param {tweenTypes} [tweenType]
 * @param {Object|void} [animationInlineStyles]
 * @return {String|Number}
 */
const getOriginalAnimatableValue = (target, propName, tweenType, animationInlineStyles) => {
  const type = !isUnd(tweenType) ? tweenType : getTweenType(target, propName);
  return type === tweenTypes.OBJECT ? target[propName] || 0 :
         type === tweenTypes.ATTRIBUTE ? /** @type {DOMTarget} */(target).getAttribute(propName) :
         type === tweenTypes.TRANSFORM ? parseInlineTransforms(/** @type {DOMTarget} */(target), propName, animationInlineStyles) :
         type === tweenTypes.CSS_VAR ? getCSSValue(/** @type {DOMTarget} */(target), propName, animationInlineStyles).trimStart() :
         getCSSValue(/** @type {DOMTarget} */(target), propName, animationInlineStyles);
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {String} operator
 * @return {Number}
 */
const getRelativeValue = (x, y, operator) => {
  return operator === '-' ? x - y :
         operator === '+' ? x + y :
         x * y;
};

/** @return {TweenDecomposedValue} */
const createDecomposedValueTargetObject = () => {
  return {
    /** @type {valueTypes} */
    t: valueTypes.NUMBER,
    n: 0,
    u: null,
    o: null,
    d: null,
    s: null,
  }
};

/**
 * @param  {String|Number} rawValue
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */
const decomposeRawValue = (rawValue, targetObject) => {
  /** @type {valueTypes} */
  targetObject.t = valueTypes.NUMBER;
  targetObject.n = 0;
  targetObject.u = null;
  targetObject.o = null;
  targetObject.d = null;
  targetObject.s = null;
  if (!rawValue) return targetObject;
  const num = +rawValue;
  if (!isNaN(num)) {
    // It's a number
    targetObject.n = num;
    return targetObject;
  } else {
    // let str = /** @type {String} */(rawValue).trim();
    let str = /** @type {String} */(rawValue);
    // Parsing operators (+=, -=, *=) manually is much faster than using regex here
    if (str[1] === '=') {
      targetObject.o = str[0];
      str = str.slice(2);
    }
    // Skip exec regex if the value type is complex or color to avoid long regex backtracking
    const unitMatch = str.includes(' ') ? false : unitsExecRgx.exec(str);
    if (unitMatch) {
      // Has a number and a unit
      targetObject.t = valueTypes.UNIT;
      targetObject.n = +unitMatch[1];
      targetObject.u = unitMatch[2];
      return targetObject;
    } else if (targetObject.o) {
      // Has an operator (+=, -=, *=)
      targetObject.n = +str;
      return targetObject;
    } else if (isCol(str)) {
      // Is a color
      targetObject.t = valueTypes.COLOR;
      targetObject.d = convertColorStringValuesToRgbaArray(str);
      return targetObject;
    } else {
      // Is a more complex string (generally svg coords, calc() or filters CSS values)
      const matchedNumbers = str.match(digitWithExponentRgx);
      targetObject.t = valueTypes.COMPLEX;
      targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
      targetObject.s = str.split(digitWithExponentRgx) || [];
      return targetObject;
    }
  }
};

/**
 * @param  {Tween} tween
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */
const decomposeTweenValue = (tween, targetObject) => {
  targetObject.t = tween._valueType;
  targetObject.n = tween._toNumber;
  targetObject.u = tween._unit;
  targetObject.o = null;
  targetObject.d = cloneArray(tween._toNumbers);
  targetObject.s = cloneArray(tween._strings);
  return targetObject;
};

const decomposedOriginalValue = createDecomposedValueTargetObject();




const lookups = {
  /** @type {TweenReplaceLookups} */
  _rep: new WeakMap(),
  /** @type {TweenAdditiveLookups} */
  _add: new Map(),
};

/**
 * @param  {Target} target
 * @param  {String} property
 * @param  {String} lookup
 * @return {TweenPropertySiblings}
 */
const getTweenSiblings = (target, property, lookup = '_rep') => {
  const lookupMap = lookups[lookup];
  let targetLookup = lookupMap.get(target);
  if (!targetLookup) {
    targetLookup = {};
    lookupMap.set(target, targetLookup);
  }
  return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
    _head: null,
    _tail: null,
  }
};

/**
 * @param  {Tween} p
 * @param  {Tween} c
 * @return {Number|Boolean}
 */
const addTweenSortMethod = (p, c) => {
  return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
};

/**
 * @param {Tween} tween
 */
const overrideTween = tween => {
  tween._isOverlapped = 1;
  tween._isOverridden = 1;
  tween._changeDuration = minValue;
  tween._currentTime = minValue;
};

/**
 * @param  {Tween} tween
 * @param  {TweenPropertySiblings} siblings
 * @return {Tween}
 */
const composeTween = (tween, siblings) => {

  const tweenCompositionType = tween._composition;

  // Handle replaced tweens

  if (tweenCompositionType === compositionTypes.replace) {

    const tweenAbsStartTime = tween._absoluteStartTime;

    addChild(siblings, tween, addTweenSortMethod, '_prevRep', '_nextRep');

    const prevSibling = tween._prevRep;

    // Update the previous siblings for composition replace tweens

    if (prevSibling) {

      const prevParent = prevSibling.parent;
      const prevAbsEndTime = prevSibling._absoluteStartTime + prevSibling._changeDuration;

      // Handle looped animations tween

      if (
        // Check if the previous tween is from a different animation
        tween.parent.id !== prevParent.id &&
        // Check if the animation has loops
        prevParent.iterationCount> 1 &&
        // Check if _absoluteChangeEndTime of last loop overlaps the current tween
        prevAbsEndTime + (prevParent.duration - prevParent.iterationDuration) > tweenAbsStartTime
      ) {

        // TODO: Find a way to only override the iterations overlapping with the tween
        overrideTween(prevSibling);

        let prevPrevSibling = prevSibling._prevRep;

        // If the tween was part of a set of keyframes, override its siblings
        while (prevPrevSibling && prevPrevSibling.parent.id === prevParent.id) {
          overrideTween(prevPrevSibling);
          prevPrevSibling = prevPrevSibling._prevRep;
        }

      }

      const absoluteUpdateStartTime = tweenAbsStartTime - tween._delay;

      if (prevAbsEndTime > absoluteUpdateStartTime) {

        const prevChangeStartTime = prevSibling._startTime;
        const prevTLOffset = prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration);

        prevSibling._changeDuration = absoluteUpdateStartTime - prevTLOffset - prevChangeStartTime;
        prevSibling._currentTime = prevSibling._changeDuration;
        prevSibling._isOverlapped = 1;

        if (prevSibling._changeDuration < minValue) {
          overrideTween(prevSibling);
        }
      }

      // Pause (and cancel) the parent if it only contains overlapped tweens

      let pausePrevParentAnimation = true;

      forEachChildren(prevParent, (/** @type Tween */t) => {
        if (!t._isOverlapped) pausePrevParentAnimation = false;
      });

      if (pausePrevParentAnimation) {
        const prevParentTL = prevParent.parent;
        if (prevParentTL) {
          let pausePrevParentTL = true;
          forEachChildren(prevParentTL, (/** @type JSAnimation */a) => {
            if (a !== prevParent) {
              forEachChildren(a, (/** @type Tween */t) => {
                if (!t._isOverlapped) pausePrevParentTL = false;
              });
            }
          });
          if (pausePrevParentTL) {
            prevParentTL.cancel();
          }
        } else {
          prevParent.cancel();
          // Previously, calling .cancel() on a timeline child would affect the render order of other children
          // Worked around this by marking it as .completed and using .pause() for safe removal in the engine loop
          // This is no longer needed since timeline tween composition is now handled separatly
          // Keeping this here for reference
          // prevParent.completed = true;
          // prevParent.pause();
        }
      }

    }

    // let nextSibling = tween._nextRep;

    // // All the next siblings are automatically overridden

    // if (nextSibling && nextSibling._absoluteStartTime >= tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }

    // if (nextSibling && nextSibling._absoluteStartTime < tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     console.log(tween.id, nextSibling.id);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }

  // Handle additive tweens composition

  } else if (tweenCompositionType === compositionTypes.blend) {

    const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, '_add');
    const additiveAnimation = addAdditiveAnimation(lookups._add);

    let lookupTween = additiveTweenSiblings._head;

    if (!lookupTween) {
      lookupTween = { ...tween };
      lookupTween._composition = compositionTypes.replace;
      lookupTween._updateDuration = minValue;
      lookupTween._startTime = 0;
      lookupTween._numbers = cloneArray(tween._fromNumbers);
      lookupTween._number = 0;
      lookupTween._next = null;
      lookupTween._prev = null;
      addChild(additiveTweenSiblings, lookupTween);
      addChild(additiveAnimation, lookupTween);
    }

    // Convert the values of TO to FROM and set TO to 0

    const toNumber = tween._toNumber;
    tween._fromNumber = lookupTween._fromNumber - toNumber;
    tween._toNumber = 0;
    tween._numbers = cloneArray(tween._fromNumbers);
    tween._number = 0;
    lookupTween._fromNumber = toNumber;

    if (tween._toNumbers) {
      const toNumbers = cloneArray(tween._toNumbers);
      if (toNumbers) {
        toNumbers.forEach((value, i) => {
          tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
          tween._toNumbers[i] = 0;
        });
      }
      lookupTween._fromNumbers = toNumbers;
    }

    addChild(additiveTweenSiblings, tween, null, '_prevAdd', '_nextAdd');

  }

  return tween;

};

/**
 * @param  {Tween} tween
 * @return {Tween}
 */
const removeTweenSliblings = tween => {
  const tweenComposition = tween._composition;
  if (tweenComposition !== compositionTypes.none) {
    const tweenTarget = tween.target;
    const tweenProperty = tween.property;
    const replaceTweensLookup = lookups._rep;
    const replaceTargetProps = replaceTweensLookup.get(tweenTarget);
    const tweenReplaceSiblings = replaceTargetProps[tweenProperty];
    removeChild(tweenReplaceSiblings, tween, '_prevRep', '_nextRep');
    if (tweenComposition === compositionTypes.blend) {
      const addTweensLookup = lookups._add;
      const addTargetProps = addTweensLookup.get(tweenTarget);
      if (!addTargetProps) return;
      const additiveTweenSiblings = addTargetProps[tweenProperty];
      const additiveAnimation = additive.animation;
      removeChild(additiveTweenSiblings, tween, '_prevAdd', '_nextAdd');
      // If only one tween is left in the additive lookup, it's the tween lookup
      const lookupTween = additiveTweenSiblings._head;
      if (lookupTween && lookupTween === additiveTweenSiblings._tail) {
        removeChild(additiveTweenSiblings, lookupTween, '_prevAdd', '_nextAdd');
        removeChild(additiveAnimation, lookupTween);
        let shouldClean = true;
        for (let prop in addTargetProps) {
          if (addTargetProps[prop]._head) {
            shouldClean = false;
            break;
          }
        }
        if (shouldClean) {
          addTweensLookup.delete(tweenTarget);
        }
      }
    }
  }
  return tween;
};




/**
 * @param  {Timer} timer
 * @return {Timer}
 */
const resetTimerProperties = timer => {
  timer.paused = true;
  timer.began = false;
  timer.completed = false;
  return timer;
};

/**
 * @param  {Timer} timer
 * @return {Timer}
 */
const reviveTimer = timer => {
  if (!timer._cancelled) return timer;
  if (timer._hasChildren) {
    forEachChildren(timer, reviveTimer);
  } else {
    forEachChildren(timer, (/** @type {Tween} tween*/tween) => {
      if (tween._composition !== compositionTypes.none) {
        composeTween(tween, getTweenSiblings(tween.target, tween.property));
      }
    });
  }
  timer._cancelled = 0;
  return timer;
};

let timerId = 0;

/**
 * Base class used to create Timers, Animations and Timelines
 */
class Timer extends Clock {
  /**
   * @param {TimerParams} [parameters]
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   */
  constructor(parameters = {}, parent = null, parentPosition = 0) {

    super(0);

    const {
      id,
      delay,
      duration,
      reversed,
      alternate,
      loop,
      loopDelay,
      autoplay,
      frameRate,
      playbackRate,
      onComplete,
      onLoop,
      onPause,
      onBegin,
      onBeforeUpdate,
      onUpdate,
    } = parameters;

    if (globals.scope) globals.scope.revertibles.push(this);

    const timerInitTime = parent ? 0 : engine._elapsedTime;
    const timerDefaults = parent ? parent.defaults : globals.defaults;
    const timerDelay = /** @type {Number} */(isFnc(delay) || isUnd(delay) ? timerDefaults.delay : +delay);
    const timerDuration = isFnc(duration) || isUnd(duration) ? Infinity : +duration;
    const timerLoop = setValue(loop, timerDefaults.loop);
    const timerLoopDelay = setValue(loopDelay, timerDefaults.loopDelay);
    const timerIterationCount = timerLoop === true ||
                                timerLoop === Infinity ||
                                /** @type {Number} */(timerLoop) < 0 ? Infinity :
                                /** @type {Number} */(timerLoop) + 1;

    let offsetPosition = 0;

    if (parent) {
      offsetPosition = parentPosition;
    } else {
      let startTime = now();
      // Make sure to tick the engine once if suspended to avoid big gaps with the following offsetPosition calculation
      if (engine.paused) {
        engine.requestTick(startTime);
        startTime = engine._elapsedTime;
      }
      offsetPosition = startTime - engine._startTime;
    }

    // Timer's parameters
    this.id = !isUnd(id) ? id : ++timerId;
    /** @type {Timeline} */
    this.parent = parent;
    // Total duration of the timer
    this.duration = clampInfinity(((timerDuration + timerLoopDelay) * timerIterationCount) - timerLoopDelay) || minValue;
    /** @type {Boolean} */
    this.backwards = false;
    /** @type {Boolean} */
    this.paused = true;
    /** @type {Boolean} */
    this.began = false;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Callback<this>} */
    this.onBegin = onBegin || timerDefaults.onBegin;
    /** @type {Callback<this>} */
    this.onBeforeUpdate = onBeforeUpdate || timerDefaults.onBeforeUpdate;
    /** @type {Callback<this>} */
    this.onUpdate = onUpdate || timerDefaults.onUpdate;
    /** @type {Callback<this>} */
    this.onLoop = onLoop || timerDefaults.onLoop;
    /** @type {Callback<this>} */
    this.onPause = onPause || timerDefaults.onPause;
    /** @type {Callback<this>} */
    this.onComplete = onComplete || timerDefaults.onComplete;
    /** @type {Number} */
    this.iterationDuration = timerDuration; // Duration of one loop
    /** @type {Number} */
    this.iterationCount = timerIterationCount; // Number of loops
    /** @type {Boolean|ScrollObserver} */
    this._autoplay = parent ? false : setValue(autoplay, timerDefaults.autoplay);
    /** @type {Number} */
    this._offset = offsetPosition;
    /** @type {Number} */
    this._delay = timerDelay;
    /** @type {Number} */
    this._loopDelay = timerLoopDelay;
    /** @type {Number} */
    this._iterationTime = 0;
    /** @type {Number} */
    this._currentIteration = 0; // Current loop index
    /** @type {Function} */
    this._resolve = noop; // Used by .then()
    /** @type {Boolean} */
    this._running = false;
    /** @type {Number} */
    this._reversed = +setValue(reversed, timerDefaults.reversed);
    /** @type {Number} */
    this._reverse = this._reversed;
    /** @type {Number} */
    this._cancelled = 0;
    /** @type {Boolean} */
    this._alternate = setValue(alternate, timerDefaults.alternate);
    /** @type {Renderable} */
    this._prev = null;
    /** @type {Renderable} */
    this._next = null;

    // Clock's parameters
    /** @type {Number} */
    this._elapsedTime = timerInitTime;
    /** @type {Number} */
    this._startTime = timerInitTime;
    /** @type {Number} */
    this._lastTime = timerInitTime;
    /** @type {Number} */
    this._fps = setValue(frameRate, timerDefaults.frameRate);
    /** @type {Number} */
    this._speed = setValue(playbackRate, timerDefaults.playbackRate);
  }

  get cancelled() {
    return !!this._cancelled;
  }

  /** @param {Boolean} cancelled  */
  set cancelled(cancelled) {
    cancelled ? this.cancel() : this.reset(1).play();
  }

  get currentTime() {
    return clamp(round(this._currentTime, globals.precision), -this._delay, this.duration);
  }

  /** @param {Number} time  */
  set currentTime(time) {
    const paused = this.paused;
    // Pausing the timer is necessary to avoid time jumps on a running instance
    this.pause().seek(+time);
    if (!paused) this.resume();
  }

  get iterationCurrentTime() {
    return round(this._iterationTime, globals.precision);
  }

  /** @param {Number} time  */
  set iterationCurrentTime(time) {
    this.currentTime = (this.iterationDuration * this._currentIteration) + time;
  }

  get progress() {
    return clamp(round(this._currentTime / this.duration, 5), 0, 1);
  }

  /** @param {Number} progress  */
  set progress(progress) {
    this.currentTime = this.duration * progress;
  }

  get iterationProgress() {
    return clamp(round(this._iterationTime / this.iterationDuration, 5), 0, 1);
  }

  /** @param {Number} progress  */
  set iterationProgress(progress) {
    const iterationDuration = this.iterationDuration;
    this.currentTime = (iterationDuration * this._currentIteration) + (iterationDuration * progress);
  }

  get currentIteration() {
    return this._currentIteration;
  }

  /** @param {Number} iterationCount  */
  set currentIteration(iterationCount) {
    this.currentTime = (this.iterationDuration * clamp(+iterationCount, 0, this.iterationCount - 1));
  }

  get reversed() {
    return !!this._reversed;
  }

  /** @param {Boolean} reverse  */
  set reversed(reverse) {
    reverse ? this.reverse() : this.play();
  }

  get speed() {
    return super.speed;
  }

  /** @param {Number} playbackRate  */
  set speed(playbackRate) {
    super.speed = playbackRate;
    this.resetTime();
  }

  /**
   * @param  {Number} internalRender
   * @return {this}
   */
  reset(internalRender = 0) {
    // If cancelled, revive the timer before rendering in order to have propertly composed tweens siblings
    reviveTimer(this);
    if (this._reversed && !this._reverse) this.reversed = false;
    // Rendering before updating the completed flag to prevent skips and to make sure the properties are not overridden
    // Setting the iterationTime at the end to force the rendering to happend backwards, otherwise calling .reset() on Timelines might not render children in the right order
    // NOTE: This is only required for Timelines and might be better to move to the Timeline class?
    this._iterationTime = this.iterationDuration;
    // Set tickMode to tickModes.FORCE to force rendering
    tick(this, 0, 1, internalRender, tickModes.FORCE);
    // Reset timer properties after revive / render to make sure the props are not updated again
    resetTimerProperties(this);
    // Also reset children properties
    if (this._hasChildren) {
      forEachChildren(this, resetTimerProperties);
    }
    return this;
  }

  /**
   * @param  {Number} internalRender
   * @return {this}
   */
  init(internalRender = 0) {
    this.fps = this._fps;
    this.speed = this._speed;
    // Manually calling .init() on timelines should render all children intial state
    // Forces all children to render once then render to 0 when reseted
    if (!internalRender && this._hasChildren) {
      tick(this, this.duration, 1, internalRender, tickModes.FORCE);
    }
    this.reset(internalRender);
    // Make sure to set autoplay to false to child timers so it doesn't attempt to autoplay / link
    const autoplay = this._autoplay;
    if (autoplay === true) {
      this.resume();
    } else if (autoplay && !isUnd(/** @type {ScrollObserver} */(autoplay).linked)) {
      /** @type {ScrollObserver} */(autoplay).link(this);
    }
    return this;
  }

  /** @return {this} */
  resetTime() {
    const timeScale = 1 / (this._speed * engine._speed);
    this._startTime = now() - (this._currentTime + this._delay) * timeScale;
    return this;
  }

  /** @return {this} */
  pause() {
    if (this.paused) return this;
    this.paused = true;
    this.onPause(this);
    return this;
  }

  /** @return {this} */
  resume() {
    if (!this.paused) return this;
    this.paused = false;
    // We can safely imediatly render a timer that has no duration and no children
    if (this.duration <= minValue && !this._hasChildren) {
      tick(this, minValue, 0, 0, tickModes.FORCE);
    } else {
      if (!this._running) {
        addChild(engine, this);
        engine._hasChildren = true;
        this._running = true;
      }
      this.resetTime();
      // Forces the timer to advance by at least one frame when the next tick occurs
      this._startTime -= 12;
      engine.wake();
    }
    return this;
  }

  /** @return {this} */
  restart() {
    return this.reset(0).resume();
  }

  /**
   * @param  {Number} time
   * @param  {Boolean|Number} [muteCallbacks]
   * @param  {Boolean|Number} [internalRender]
   * @return {this}
   */
  seek(time, muteCallbacks = 0, internalRender = 0) {
    // Recompose the tween siblings in case the timer has been cancelled
    reviveTimer(this);
    // If you seek a completed animation, otherwise the next play will starts at 0
    this.completed = false;
    const isPaused = this.paused;
    this.paused = true;
    // timer, time, muteCallbacks, internalRender, tickMode
    tick(this, time + this._delay, ~~muteCallbacks, ~~internalRender, tickModes.AUTO);
    return isPaused ? this : this.resume();
  }

  /** @return {this} */
  alternate() {
    const reversed = this._reversed;
    const count = this.iterationCount;
    const duration = this.iterationDuration;
    // Calculate the maximum iterations possible given the iteration duration
    const iterations = count === Infinity ? floor(maxValue / duration) : count;
    this._reversed = +(this._alternate && !(iterations % 2) ? reversed : !reversed);
    if (count === Infinity) {
      // Handle infinite loops to loop on themself
      this.iterationProgress = this._reversed ? 1 - this.iterationProgress : this.iterationProgress;
    } else {
      this.seek((duration * iterations) - this._currentTime);
    }
    this.resetTime();
    return this;
  }

  /** @return {this} */
  play() {
    if (this._reversed) this.alternate();
    return this.resume();
  }

  /** @return {this} */
  reverse() {
    if (!this._reversed) this.alternate();
    return this.resume();
  }

  // TODO: Move all the animation / tweens / children related code to Animation / Timeline

  /** @return {this} */
  cancel() {
    if (this._hasChildren) {
      forEachChildren(this, (/** @type {Renderable} */child) => child.cancel(), true);
    } else {
      forEachChildren(this, removeTweenSliblings);
    }
    this._cancelled = 1;
    // Pausing the timer removes it from the engine
    return this.pause();
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    const normlizedDuration = normalizeTime(newDuration);
    if (currentDuration === normlizedDuration) return this;
    const timeScale = newDuration / currentDuration;
    const isSetter = newDuration <= minValue;
    this.duration = isSetter ? minValue : normlizedDuration;
    this.iterationDuration = isSetter ? minValue : normalizeTime(this.iterationDuration * timeScale);
    this._offset *= timeScale;
    this._delay *= timeScale;
    this._loopDelay *= timeScale;
    return this;
  }

 /**
   * Cancels the timer by seeking it back to 0 and reverting the attached scroller if necessary
   * @return {this}
   */
  revert() {
    tick(this, 0, 1, 0, tickModes.AUTO);
    const ap = /** @type {ScrollObserver} */(this._autoplay);
    if (ap && ap.linked && ap.linked === this) ap.revert();
    return this.cancel();
  }

 /**
   * Imediatly completes the timer, cancels it and triggers the onComplete callback
   * @return {this}
   */
  complete() {
    return this.seek(this.duration).cancel();
  }

  /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */
  then(callback = noop) {
    const then = this.then;
    const onResolve = () => {
      // this.then = null prevents infinite recursion if returned by an async function
      // https://github.com/juliangarnierorg/anime-beta/issues/26
      this.then = null;
      callback(this);
      this.then = then;
      this._resolve = noop;
    };
    return new Promise(r => {
      this._resolve = () => r(onResolve());
      // Make sure to resolve imediatly if the timer has already completed
      if (this.completed) this._resolve();
      return this;
    });
  }

}


/**
 * @param {TimerParams} [parameters]
 * @return {Timer}
 */
const createTimer = parameters => new Timer(parameters, null, 0).init();




/** @type {EasingFunction} */
const none = t => t;

// Cubic Bezier solver adapted from https://github.com/gre/bezier-ease © Gaëtan Renaudeau

/**
 * @param  {Number} aT
 * @param  {Number} aA1
 * @param  {Number} aA2
 * @return {Number}
 */
const calcBezier = (aT, aA1, aA2) => (((1 - 3 * aA2 + 3 * aA1) * aT + (3 * aA2 - 6 * aA1)) * aT + (3 * aA1)) * aT;

/**
 * @param  {Number} aX
 * @param  {Number} mX1
 * @param  {Number} mX2
 * @return {Number}
 */
const binarySubdivide = (aX, mX1, mX2) => {
  let aA = 0, aB = 1, currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (abs(currentX) > .0000001 && ++i < 100);
  return currentT;
};

/**
 * @param  {Number} [mX1]
 * @param  {Number} [mY1]
 * @param  {Number} [mX2]
 * @param  {Number} [mY2]
 * @return {EasingFunction}
 */

const cubicBezier = (mX1 = 0.5, mY1 = 0.0, mX2 = 0.5, mY2 = 1.0) => (mX1 === mY1 && mX2 === mY2) ? none :
  t => t === 0 || t === 1 ? t :
  calcBezier(binarySubdivide(t, mX1, mX2), mY1, mY2);

/**
 * Steps ease implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
 * Only covers 'end' and 'start' jumpterms
 * @param  {Number} steps
 * @param  {Boolean} [fromStart]
 * @return {EasingFunction}
 */
const steps = (steps = 10, fromStart) => {
  const roundMethod = fromStart ? ceil : floor;
  return t => roundMethod(clamp(t, 0, 1) * steps) * (1 / steps);
};

/**
 * Without parameters, the linear function creates a non-eased transition.
 * Parameters, if used, creates a piecewise linear easing by interpolating linearly between the specified points.
 * @param  {...String|Number} [args] - Points
 * @return {EasingFunction}
 */
const linear = (...args) => {
  const argsLength = args.length;
  if (!argsLength) return none;
  const totalPoints = argsLength - 1;
  const firstArg = args[0];
  const lastArg = args[totalPoints];
  const xPoints = [0];
  const yPoints = [parseNumber(firstArg)];
  for (let i = 1; i < totalPoints; i++) {
    const arg = args[i];
    const splitValue = isStr(arg) ?
    /** @type {String} */(arg).trim().split(' ') :
    [arg];
    const value = splitValue[0];
    const percent = splitValue[1];
    xPoints.push(!isUnd(percent) ? parseNumber(percent) / 100 : i / totalPoints);
    yPoints.push(parseNumber(value));
  }
  yPoints.push(parseNumber(lastArg));
  xPoints.push(1);
  return function easeLinear(t) {
    for (let i = 1, l = xPoints.length; i < l; i++) {
      const currentX = xPoints[i];
      if (t <= currentX) {
        const prevX = xPoints[i - 1];
        const prevY = yPoints[i - 1];
        return prevY + (yPoints[i] - prevY) * (t - prevX) / (currentX - prevX);
      }
    }
    return yPoints[yPoints.length - 1];
  }
};

/**
 * Generate random steps
 * @param  {Number} [length] - The number of steps
 * @param  {Number} [randomness] - How strong the randomness is
 * @return {EasingFunction}
 */
const irregular = (length = 10, randomness = 1) => {
  const values = [0];
  const total = length - 1;
  for (let i = 1; i < total; i++) {
    const previousValue = values[i - 1];
    const spacing = i / total;
    const segmentEnd = (i + 1) / total;
    const randomVariation = spacing + (segmentEnd - spacing) * Math.random();
    // Mix the even spacing and random variation based on the randomness parameter
    const randomValue = spacing * (1 - randomness) + randomVariation * randomness;
    values.push(clamp(randomValue, previousValue, 1));
  }
  values.push(1);
  return linear(...values);
};

// Easing functions adapted from http://www.robertpenner.com/ease © Robert Penner

/**
 * @callback PowerEasing
 * @param {Number|String} [power=1.675]
 * @return {EasingFunction}
 */

/**
 * @callback BackEasing
 * @param {Number|String} [overshoot=1.70158]
 * @return {EasingFunction}
 */

/**
 * @callback ElasticEasing
 * @param {Number|String} [amplitude=1]
 * @param {Number|String} [period=.3]
 * @return {EasingFunction}
 */

/**
 * @callback EaseFactory
 * @param {Number|String} [paramA]
 * @param {Number|String} [paramB]
 * @return {EasingFunction|Number}
 */

/** @typedef {PowerEasing|BackEasing|ElasticEasing} EasesFactory */

const halfPI = PI / 2;
const doublePI = PI * 2;
/** @type {PowerEasing} */
const easeInPower = (p = 1.68) => t => pow(t, +p);

/** @type {Record<String, EasesFactory|EasingFunction>} */
const easeInFunctions = {
  [emptyString]: easeInPower,
  Quad: easeInPower(2),
  Cubic: easeInPower(3),
  Quart: easeInPower(4),
  Quint: easeInPower(5),
  /** @type {EasingFunction} */
  Sine: t => 1 - cos(t * halfPI),
  /** @type {EasingFunction} */
  Circ: t => 1 - sqrt(1 - t * t),
  /** @type {EasingFunction} */
  Expo: t => t ? pow(2, 10 * t - 10) : 0,
  /** @type {EasingFunction} */
  Bounce: t => {
    let pow2, b = 4;
    while (t < ((pow2 = pow(2, --b)) - 1) / 11);
    return 1 / pow(4, 3 - b) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2);
  },
  /** @type {BackEasing} */
  Back: (overshoot = 1.70158) => t => (+overshoot + 1) * t * t * t - +overshoot * t * t,
  /** @type {ElasticEasing} */
  Elastic: (amplitude = 1, period = .3) => {
    const a = clamp(+amplitude, 1, 10);
    const p = clamp(+period, minValue, 2);
    const s = (p / doublePI) * asin(1 / a);
    const e = doublePI / p;
    return t => t === 0 || t === 1 ? t : -a * pow(2, -10 * (1 - t)) * sin(((1 - t) - s) * e);
  }
};

/**
 * @callback EaseType
 * @param {EasingFunction} Ease
 * @return {EasingFunction}
 */

/** @type {Record<String, EaseType>} */
const easeTypes = {
  in: easeIn => t => easeIn(t),
  out: easeIn => t => 1 - easeIn(1 - t),
  inOut: easeIn => t => t < .5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
  outIn: easeIn => t => t < .5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2,
};

/**
 * @param  {String} string
 * @param  {Record<String, EasesFactory|EasingFunction>} easesFunctions
 * @param  {Object} easesLookups
 * @return {EasingFunction}
 */
const parseEaseString = (string, easesFunctions, easesLookups) => {
  if (easesLookups[string]) return easesLookups[string];
  if (string.indexOf('(') <= -1) {
    const hasParams = easeTypes[string] || string.includes('Back') || string.includes('Elastic');
    const parsedFn = /** @type {EasingFunction} */(hasParams ? /** @type {EasesFactory} */(easesFunctions[string])() : easesFunctions[string]);
    return parsedFn ? easesLookups[string] = parsedFn : none;
  } else {
    const split = string.slice(0, -1).split('(');
    const parsedFn = /** @type {EasesFactory} */(easesFunctions[split[0]]);
    return parsedFn ? easesLookups[string] = parsedFn(...split[1].split(',')) : none;
  }
};

/**
 * @typedef  {Object} EasesFunctions
 * @property {typeof linear} linear
 * @property {typeof irregular} irregular
 * @property {typeof steps} steps
 * @property {typeof cubicBezier} cubicBezier
 * @property {PowerEasing} in
 * @property {PowerEasing} out
 * @property {PowerEasing} inOut
 * @property {PowerEasing} outIn
 * @property {EasingFunction} inQuad
 * @property {EasingFunction} outQuad
 * @property {EasingFunction} inOutQuad
 * @property {EasingFunction} outInQuad
 * @property {EasingFunction} inCubic
 * @property {EasingFunction} outCubic
 * @property {EasingFunction} inOutCubic
 * @property {EasingFunction} outInCubic
 * @property {EasingFunction} inQuart
 * @property {EasingFunction} outQuart
 * @property {EasingFunction} inOutQuart
 * @property {EasingFunction} outInQuart
 * @property {EasingFunction} inQuint
 * @property {EasingFunction} outQuint
 * @property {EasingFunction} inOutQuint
 * @property {EasingFunction} outInQuint
 * @property {EasingFunction} inSine
 * @property {EasingFunction} outSine
 * @property {EasingFunction} inOutSine
 * @property {EasingFunction} outInSine
 * @property {EasingFunction} inCirc
 * @property {EasingFunction} outCirc
 * @property {EasingFunction} inOutCirc
 * @property {EasingFunction} outInCirc
 * @property {EasingFunction} inExpo
 * @property {EasingFunction} outExpo
 * @property {EasingFunction} inOutExpo
 * @property {EasingFunction} outInExpo
 * @property {EasingFunction} inBounce
 * @property {EasingFunction} outBounce
 * @property {EasingFunction} inOutBounce
 * @property {EasingFunction} outInBounce
 * @property {BackEasing} inBack
 * @property {BackEasing} outBack
 * @property {BackEasing} inOutBack
 * @property {BackEasing} outInBack
 * @property {ElasticEasing} inElastic
 * @property {ElasticEasing} outElastic
 * @property {ElasticEasing} inOutElastic
 * @property {ElasticEasing} outInElastic
 */

const eases = (/*#__PURE__*/ (() => {
  const list = { linear, irregular, steps, cubicBezier };
  for (let type in easeTypes) {
    for (let name in easeInFunctions) {
      const easeIn = easeInFunctions[name];
      const easeType = easeTypes[type];
      list[type + name] = /** @type {EasesFactory|EasingFunction} */(
        name === emptyString || name === 'Back' || name === 'Elastic' ?
        (a, b) => easeType(/** @type {EasesFactory} */(easeIn)(a, b)) :
        easeType(/** @type {EasingFunction} */(easeIn))
      );
    }
  }
  return /** @type {EasesFunctions} */(list);
})());

/** @type {Record<String, EasingFunction>} */
const JSEasesLookups = { linear: none };

/**
 * @param  {EasingParam} ease
 * @return {EasingFunction}
 */
const parseEasings = ease => isFnc(ease) ? ease :
  isStr(ease) ? parseEaseString(/** @type {String} */(ease), eases, JSEasesLookups) :
  none;




const propertyNamesCache = {};

/**
 * @param  {String} propertyName
 * @param  {Target} target
 * @param  {tweenTypes} tweenType
 * @return {String}
 */
const sanitizePropertyName = (propertyName, target, tweenType) => {
  if (tweenType === tweenTypes.TRANSFORM) {
    const t = shortTransforms.get(propertyName);
    return t ? t : propertyName;
  } else if (
    tweenType === tweenTypes.CSS ||
    // Handle special cases where properties like "strokeDashoffset" needs to be set as "stroke-dashoffset"
    // but properties like "baseFrequency" should stay in lowerCamelCase
    (tweenType === tweenTypes.ATTRIBUTE && (isSvg(target) && propertyName in /** @type {DOMTarget} */(target).style))
  ) {
    const cachedPropertyName = propertyNamesCache[propertyName];
    if (cachedPropertyName) {
      return cachedPropertyName;
    } else {
      const lowerCaseName = propertyName ? toLowerCase(propertyName) : propertyName;
      propertyNamesCache[propertyName] = lowerCaseName;
      return lowerCaseName;
    }
  } else {
    return propertyName;
  }
};




const angleUnitsMap = { 'deg': 1, 'rad': 180 / PI, 'turn': 360 };
const convertedValuesCache = {};

/**
 * @param  {DOMTarget} el
 * @param  {TweenDecomposedValue} decomposedValue
 * @param  {String} unit
 * @param  {Boolean} [force]
 * @return {TweenDecomposedValue}
 */
const convertValueUnit = (el, decomposedValue, unit, force = false) => {
  const currentUnit = decomposedValue.u;
  const currentNumber = decomposedValue.n;
  if (decomposedValue.t === valueTypes.UNIT && currentUnit === unit) { // TODO: Check if checking against the same unit string is necessary
    return decomposedValue;
  }
  const cachedKey = currentNumber + currentUnit + unit;
  const cached = convertedValuesCache[cachedKey];
  if (!isUnd(cached) && !force) {
    decomposedValue.n = cached;
  } else {
    let convertedValue;
    if (currentUnit in angleUnitsMap) {
      convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
    } else {
      const baseline = 100;
      const tempEl = /** @type {DOMTarget} */(el.cloneNode());
      const parentNode = el.parentNode;
      const parentEl = (parentNode && (parentNode !== doc)) ? parentNode : doc.body;
      parentEl.appendChild(tempEl);
      const elStyle = tempEl.style;
      elStyle.width = baseline + currentUnit;
      const currentUnitWidth = /** @type {HTMLElement} */(tempEl).offsetWidth || baseline;
      elStyle.width = baseline + unit;
      const newUnitWidth = /** @type {HTMLElement} */(tempEl).offsetWidth || baseline;
      const factor = currentUnitWidth / newUnitWidth;
      parentEl.removeChild(tempEl);
      convertedValue = factor * currentNumber;
    }
    decomposedValue.n = convertedValue;
    convertedValuesCache[cachedKey] = convertedValue;
  }
  decomposedValue.t === valueTypes.UNIT;
  decomposedValue.u = unit;
  return decomposedValue;
};




/**
 * @template {Renderable} T
 * @param {T} renderable
 * @return {T}
 */
const cleanInlineStyles = renderable => {
  // Allow cleanInlineStyles() to be called on timelines
  if (renderable._hasChildren) {
    forEachChildren(renderable, cleanInlineStyles, true);
  } else {
    const animation = /** @type {JSAnimation} */(renderable);
    animation.pause();
    forEachChildren(animation, (/** @type {Tween} */tween) => {
      const tweenProperty = tween.property;
      const tweenTarget = tween.target;
      if (tweenTarget[isDomSymbol]) {
        const targetStyle = /** @type {DOMTarget} */(tweenTarget).style;
        const originalInlinedValue = animation._inlineStyles[tweenProperty];
        if (tween._tweenType === tweenTypes.TRANSFORM) {
          const cachedTransforms = tweenTarget[transformsSymbol];
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            delete cachedTransforms[tweenProperty];
          } else {
            cachedTransforms[tweenProperty] = originalInlinedValue;
          }
          if (tween._renderTransforms) {
            if (!Object.keys(cachedTransforms).length) {
              targetStyle.removeProperty('transform');
            } else {
              let str = emptyString;
              for (let key in cachedTransforms) {
                str += transformsFragmentStrings[key] + cachedTransforms[key] + ') ';
              }
              targetStyle.transform = str;
            }
          }
        } else {
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            targetStyle.removeProperty(tweenProperty);
          } else {
            targetStyle[tweenProperty] = originalInlinedValue;
          }
        }
        if (animation._tail === tween) {
          animation.targets.forEach(t => {
            if (t.getAttribute && t.getAttribute('style') === emptyString) {
              t.removeAttribute('style');
            }          });
        }
      }
    });
  }
  return renderable;
};

// Defines decomposed values target objects only once and mutate their properties later to avoid GC
// TODO: Maybe move the objects creation to values.js and use the decompose function to create the base object
const fromTargetObject = createDecomposedValueTargetObject();
const toTargetObject = createDecomposedValueTargetObject();
const toFunctionStore = { func: null };
const keyframesTargetArray = [null];
const fastSetValuesArray = [null, null];
/** @type {TweenKeyValue} */
const keyObjectTarget = { to: null };

let tweenId = 0;
let keyframes;
/** @type {TweenParamsOptions & TweenValues} */
let key;

/**
 * @param {DurationKeyframes | PercentageKeyframes} keyframes
 * @param {AnimationParams} parameters
 * @return {AnimationParams}
 */
const generateKeyframes = (keyframes, parameters) => {
  /** @type {AnimationParams} */
  const properties = {};
  if (isArr(keyframes)) {
    const propertyNames = [].concat(.../** @type {DurationKeyframes} */(keyframes).map(key => Object.keys(key))).filter(isKey);
    for (let i = 0, l = propertyNames.length; i < l; i++) {
      const propName = propertyNames[i];
      const propArray = /** @type {DurationKeyframes} */(keyframes).map(key => {
        /** @type {TweenKeyValue} */
        const newKey = {};
        for (let p in key) {
          const keyValue = /** @type {TweenPropValue} */(key[p]);
          if (isKey(p)) {
            if (p === propName) {
              newKey.to = keyValue;
            }
          } else {
            newKey[p] = keyValue;
          }
        }
        return newKey;
      });
      properties[propName] = /** @type {ArraySyntaxValue} */(propArray);
    }

  } else {
    const totalDuration = /** @type {Number} */(setValue(parameters.duration, globals.defaults.duration));
    const keys = Object.keys(keyframes)
    .map(key => { return {o: parseFloat(key) / 100, p: keyframes[key]} })
    .sort((a, b) => a.o - b.o);
    keys.forEach(key => {
      const offset = key.o;
      const prop = key.p;
      for (let name in prop) {
        if (isKey(name)) {
          let propArray = /** @type {Array} */(properties[name]);
          if (!propArray) propArray = properties[name] = [];
          const duration = offset * totalDuration;
          let length = propArray.length;
          let prevKey = propArray[length - 1];
          const keyObj = { to: prop[name] };
          let durProgress = 0;
          for (let i = 0; i < length; i++) {
            durProgress += propArray[i].duration;
          }
          if (length === 1) {
            keyObj.from = prevKey.to;
          }
          if (prop.ease) {
            keyObj.ease = prop.ease;
          }
          keyObj.duration = duration - (length ? durProgress : 0);
          propArray.push(keyObj);
        }
      }
      return key;
    });

    for (let name in properties) {
      const propArray = /** @type {Array} */(properties[name]);
      let prevEase;
      // let durProgress = 0
      for (let i = 0, l = propArray.length; i < l; i++) {
        const prop = propArray[i];
        // Emulate WAPPI easing parameter position
        const currentEase = prop.ease;
        prop.ease = prevEase ? prevEase : undefined;
        prevEase = currentEase;
        // durProgress += prop.duration;
        // if (i === l - 1 && durProgress !== totalDuration) {
        //   propArray.push({ from: prop.to, ease: prop.ease, duration: totalDuration - durProgress })
        // }
      }
      if (!propArray[0].duration) {
        propArray.shift();
      }
    }

  }

  return properties;
};

class JSAnimation extends Timer {
  /**
   * @param {TargetsParam} targets
   * @param {AnimationParams} parameters
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   * @param {Boolean} [fastSet=false]
   * @param {Number} [index=0]
   * @param {Number} [length=0]
   */
  constructor(
    targets,
    parameters,
    parent,
    parentPosition,
    fastSet = false,
    index = 0,
    length = 0
  ) {

    super(/** @type {TimerParams&AnimationParams} */(parameters), parent, parentPosition);

    const parsedTargets = registerTargets(targets);
    const targetsLength = parsedTargets.length;

    // If the parameters object contains a "keyframes" property, convert all the keyframes values to regular properties

    const kfParams = /** @type {AnimationParams} */(parameters).keyframes;
    const params = /** @type {AnimationParams} */(kfParams ? mergeObjects(generateKeyframes(/** @type {DurationKeyframes} */(kfParams), parameters), parameters) : parameters);

    const {
      delay,
      duration,
      ease,
      playbackEase,
      modifier,
      composition,
      onRender,
    } = params;

    const animDefaults = parent ? parent.defaults : globals.defaults;
    const animaPlaybackEase = setValue(playbackEase, animDefaults.playbackEase);
    const animEase = animaPlaybackEase ? parseEasings(animaPlaybackEase) : null;
    const hasSpring = !isUnd(ease) && !isUnd(/** @type {Spring} */(ease).ease);
    const tEasing = hasSpring ? /** @type {Spring} */(ease).ease : setValue(ease, animEase ? 'linear' : animDefaults.ease);
    const tDuration = hasSpring ? /** @type {Spring} */(ease).duration : setValue(duration, animDefaults.duration);
    const tDelay = setValue(delay, animDefaults.delay);
    const tModifier = modifier || animDefaults.modifier;
    // If no composition is defined and the targets length is high (>= 1000) set the composition to 'none' (0) for faster tween creation
    const tComposition = isUnd(composition) && targetsLength >= K ? compositionTypes.none : !isUnd(composition) ? composition : animDefaults.composition;
    // TODO: Do not create an empty object until we know the animation will generate inline styles
    const animInlineStyles = {};
    // const absoluteOffsetTime = this._offset;
    const absoluteOffsetTime = this._offset + (parent ? parent._offset : 0);

    let iterationDuration = NaN;
    let iterationDelay = NaN;
    let animationAnimationLength = 0;
    let shouldTriggerRender = 0;

    for (let targetIndex = 0; targetIndex < targetsLength; targetIndex++) {

      const target = parsedTargets[targetIndex];
      const ti = index || targetIndex;
      const tl = length || targetsLength;

      let lastTransformGroupIndex = NaN;
      let lastTransformGroupLength = NaN;

      for (let p in params) {

        if (isKey(p)) {

          const tweenType = getTweenType(target, p);

          const propName = sanitizePropertyName(p, target, tweenType);

          let propValue = params[p];

          const isPropValueArray = isArr(propValue);

          if (fastSet && !isPropValueArray) {
            fastSetValuesArray[0] = propValue;
            fastSetValuesArray[1] = propValue;
            propValue = fastSetValuesArray;
          }

          // TODO: Allow nested keyframes inside ObjectValue value (prop: { to: [.5, 1, .75, 2, 3] })
          // Normalize property values to valid keyframe syntax:
          // [x, y] to [{to: [x, y]}] or {to: x} to [{to: x}] or keep keys syntax [{}, {}, {}...]
          // const keyframes = isArr(propValue) ? propValue.length === 2 && !isObj(propValue[0]) ? [{ to: propValue }] : propValue : [propValue];
          if (isPropValueArray) {
            const arrayLength = /** @type {Array} */(propValue).length;
            const isNotObjectValue = !isObj(propValue[0]);
            // Convert [x, y] to [{to: [x, y]}]
            if (arrayLength === 2 && isNotObjectValue) {
              keyObjectTarget.to = /** @type {TweenParamValue} */(/** @type {unknown} */(propValue));
              keyframesTargetArray[0] = keyObjectTarget;
              keyframes = keyframesTargetArray;
            // Convert [x, y, z] to [[x, y], z]
            } else if (arrayLength > 2 && isNotObjectValue) {
              keyframes = [];
              /** @type {Array.<Number>} */(propValue).forEach((v, i) => {
                if (!i) {
                  fastSetValuesArray[0] = v;
                } else if (i === 1) {
                  fastSetValuesArray[1] = v;
                  keyframes.push(fastSetValuesArray);
                } else {
                  keyframes.push(v);
                }
              });
            } else {
              keyframes = /** @type {Array.<TweenKeyValue>} */(propValue);
            }
          } else {
            keyframesTargetArray[0] = propValue;
            keyframes = keyframesTargetArray;
          }

          let siblings = null;
          let prevTween = null;
          let firstTweenChangeStartTime = NaN;
          let lastTweenChangeEndTime = 0;
          let tweenIndex = 0;

          for (let l = keyframes.length; tweenIndex < l; tweenIndex++) {

            const keyframe = keyframes[tweenIndex];

            if (isObj(keyframe)) {
              key = keyframe;
            } else {
              keyObjectTarget.to = /** @type {TweenParamValue} */(keyframe);
              key = keyObjectTarget;
            }

            toFunctionStore.func = null;

            const computedToValue = getFunctionValue(key.to, target, ti, tl, toFunctionStore);

            let tweenToValue;
            // Allows function based values to return an object syntax value ({to: v})
            if (isObj(computedToValue) && !isUnd(computedToValue.to)) {
              key = computedToValue;
              tweenToValue = computedToValue.to;
            } else {
              tweenToValue = computedToValue;
            }
            const tweenFromValue = getFunctionValue(key.from, target, ti, tl);
            const keyEasing = key.ease;
            const hasSpring = !isUnd(keyEasing) && !isUnd(/** @type {Spring} */(keyEasing).ease);
            // Easing are treated differently and don't accept function based value to prevent having to pass a function wrapper that returns an other function all the time
            const tweenEasing = hasSpring ? /** @type {Spring} */(keyEasing).ease : keyEasing || tEasing;
            // Calculate default individual keyframe duration by dividing the tl of keyframes
            const tweenDuration = hasSpring ? /** @type {Spring} */(keyEasing).duration : getFunctionValue(setValue(key.duration, (l > 1 ? getFunctionValue(tDuration, target, ti, tl) / l : tDuration)), target, ti, tl);
            // Default delay value should only be applied to the first tween
            const tweenDelay = getFunctionValue(setValue(key.delay, (!tweenIndex ? tDelay : 0)), target, ti, tl);
            const computedComposition = getFunctionValue(setValue(key.composition, tComposition), target, ti, tl);
            const tweenComposition = isNum(computedComposition) ? computedComposition : compositionTypes[computedComposition];
            // Modifiers are treated differently and don't accept function based value to prevent having to pass a function wrapper
            const tweenModifier = key.modifier || tModifier;
            const hasFromvalue = !isUnd(tweenFromValue);
            const hasToValue = !isUnd(tweenToValue);
            const isFromToArray = isArr(tweenToValue);
            const isFromToValue = isFromToArray || (hasFromvalue && hasToValue);
            const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
            const absoluteStartTime = absoluteOffsetTime + tweenStartTime;

            // Force a onRender callback if the animation contains at least one from value and autoplay is set to false
            if (!shouldTriggerRender && (hasFromvalue || isFromToArray)) shouldTriggerRender = 1;

            let prevSibling = prevTween;

            if (tweenComposition !== compositionTypes.none) {
              if (!siblings) siblings = getTweenSiblings(target, propName);
              let nextSibling = siblings._head;
              // Iterate trough all the next siblings until we find a sibling with an equal or inferior start time
              while (nextSibling && !nextSibling._isOverridden && nextSibling._absoluteStartTime <= absoluteStartTime) {
                prevSibling = nextSibling;
                nextSibling = nextSibling._nextRep;
                // Overrides all the next siblings if the next sibling starts at the same time of after as the new tween start time
                if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) {
                  while (nextSibling) {
                    overrideTween(nextSibling);
                    // This will ends both the current while loop and the upper one once all the next sibllings have been overriden
                    nextSibling = nextSibling._nextRep;
                  }
                }
              }
            }

            // Decompose values
            if (isFromToValue) {
              decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[0], target, ti, tl) : tweenFromValue, fromTargetObject);
              decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[1], target, ti, tl, toFunctionStore) : tweenToValue, toTargetObject);
              if (fromTargetObject.t === valueTypes.NUMBER) {
                if (prevSibling) {
                  if (prevSibling._valueType === valueTypes.UNIT) {
                    fromTargetObject.t = valueTypes.UNIT;
                    fromTargetObject.u = prevSibling._unit;
                  }
                } else {
                  decomposeRawValue(
                    getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles),
                    decomposedOriginalValue
                  );
                  if (decomposedOriginalValue.t === valueTypes.UNIT) {
                    fromTargetObject.t = valueTypes.UNIT;
                    fromTargetObject.u = decomposedOriginalValue.u;
                  }
                }
              }
            } else {
              if (hasToValue) {
                decomposeRawValue(tweenToValue, toTargetObject);
              } else {
                if (prevTween) {
                  decomposeTweenValue(prevTween, toTargetObject);
                } else {
                  // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                  decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value :
                  getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), toTargetObject);
                }
              }
              if (hasFromvalue) {
                decomposeRawValue(tweenFromValue, fromTargetObject);
              } else {
                if (prevTween) {
                  decomposeTweenValue(prevTween, fromTargetObject);
                } else {
                  decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value :
                  // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                  getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), fromTargetObject);
                }
              }
            }

            // Apply operators
            if (fromTargetObject.o) {
              fromTargetObject.n = getRelativeValue(
                !prevSibling ? decomposeRawValue(
                  getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles),
                  decomposedOriginalValue
                ).n : prevSibling._toNumber,
                fromTargetObject.n,
                fromTargetObject.o
              );
            }

            if (toTargetObject.o) {
              toTargetObject.n = getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
            }

            // Values omogenisation in cases of type difference between "from" and "to"
            if (fromTargetObject.t !== toTargetObject.t) {
              if (fromTargetObject.t === valueTypes.COMPLEX || toTargetObject.t === valueTypes.COMPLEX) {
                const complexValue = fromTargetObject.t === valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
                const notComplexValue = fromTargetObject.t === valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
                notComplexValue.t = valueTypes.COMPLEX;
                notComplexValue.s = cloneArray(complexValue.s);
                notComplexValue.d = complexValue.d.map(() => notComplexValue.n);
              } else if (fromTargetObject.t === valueTypes.UNIT || toTargetObject.t === valueTypes.UNIT) {
                const unitValue = fromTargetObject.t === valueTypes.UNIT ? fromTargetObject : toTargetObject;
                const notUnitValue = fromTargetObject.t === valueTypes.UNIT ? toTargetObject : fromTargetObject;
                notUnitValue.t = valueTypes.UNIT;
                notUnitValue.u = unitValue.u;
              } else if (fromTargetObject.t === valueTypes.COLOR || toTargetObject.t === valueTypes.COLOR) {
                const colorValue = fromTargetObject.t === valueTypes.COLOR ? fromTargetObject : toTargetObject;
                const notColorValue = fromTargetObject.t === valueTypes.COLOR ? toTargetObject : fromTargetObject;
                notColorValue.t = valueTypes.COLOR;
                notColorValue.s = colorValue.s;
                notColorValue.d = [0, 0, 0, 1];
              }
            }

            // Unit conversion
            if (fromTargetObject.u !== toTargetObject.u) {
              let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
              valueToConvert = convertValueUnit(/** @type {DOMTarget} */(target), valueToConvert, toTargetObject.u ? toTargetObject.u : fromTargetObject.u, false);
              // TODO:
              // convertValueUnit(target, to.u ? from : to, to.u ? to.u : from.u);
            }

            // Fill in non existing complex values
            if (toTargetObject.d && fromTargetObject.d && (toTargetObject.d.length !== fromTargetObject.d.length)) {
              const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
              const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
              // TODO: Check if n should be used instead of 0 for default complex values
              shortestValue.d = longestValue.d.map((_, i) => isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
              shortestValue.s = cloneArray(longestValue.s);
            }

            // Tween factory

            // Rounding is necessary here to minimize floating point errors
            const tweenUpdateDuration = round(+tweenDuration || minValue, 12);

            /** @type {Tween} */
            const tween = {
              parent: this,
              id: tweenId++,
              property: propName,
              target: target,
              _value: null,
              _func: toFunctionStore.func,
              _ease: parseEasings(tweenEasing),
              _fromNumbers: cloneArray(fromTargetObject.d),
              _toNumbers: cloneArray(toTargetObject.d),
              _strings: cloneArray(toTargetObject.s),
              _fromNumber: fromTargetObject.n,
              _toNumber: toTargetObject.n,
              _numbers: cloneArray(fromTargetObject.d), // For additive tween and animatables
              _number: fromTargetObject.n, // For additive tween and animatables
              _unit: toTargetObject.u,
              _modifier: tweenModifier,
              _currentTime: 0,
              _startTime: tweenStartTime,
              _delay: +tweenDelay,
              _updateDuration: tweenUpdateDuration,
              _changeDuration: tweenUpdateDuration,
              _absoluteStartTime: absoluteStartTime,
              // NOTE: Investigate bit packing to stores ENUM / BOOL
              _tweenType: tweenType,
              _valueType: toTargetObject.t,
              _composition: tweenComposition,
              _isOverlapped: 0,
              _isOverridden: 0,
              _renderTransforms: 0,
              _prevRep: null, // For replaced tween
              _nextRep: null, // For replaced tween
              _prevAdd: null, // For additive tween
              _nextAdd: null, // For additive tween
              _prev: null,
              _next: null,
            };

            if (tweenComposition !== compositionTypes.none) {
              composeTween(tween, siblings);
            }

            if (isNaN(firstTweenChangeStartTime)) {
              firstTweenChangeStartTime = tween._startTime;
            }
            // Rounding is necessary here to minimize floating point errors
            lastTweenChangeEndTime = round(tweenStartTime + tweenUpdateDuration, 12);
            prevTween = tween;
            animationAnimationLength++;

            addChild(this, tween);

          }

          // Update animation timings with the added tweens properties

          if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) {
            iterationDelay = firstTweenChangeStartTime;
          }

          if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) {
            iterationDuration = lastTweenChangeEndTime;
          }

          // TODO: Find a way to inline tween._renderTransforms = 1 here
          if (tweenType === tweenTypes.TRANSFORM) {
            lastTransformGroupIndex = animationAnimationLength - tweenIndex;
            lastTransformGroupLength = animationAnimationLength;
          }

        }

      }

      // Set _renderTransforms to last transform property to correctly render the transforms list
      if (!isNaN(lastTransformGroupIndex)) {
        let i = 0;
        forEachChildren(this, (/** @type {Tween} */tween) => {
          if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
            tween._renderTransforms = 1;
            if (tween._composition === compositionTypes.blend) {
              forEachChildren(additive.animation, (/** @type {Tween} */additiveTween) => {
                if (additiveTween.id === tween.id) {
                  additiveTween._renderTransforms = 1;
                }
              });
            }
          }
          i++;
        });
      }

    }

    if (!targetsLength) {
      console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
    }

    if (iterationDelay) {
      forEachChildren(this, (/** @type {Tween} */tween) => {
        // If (startTime - delay) equals 0, this means the tween is at the begining of the animation so we need to trim the delay too
        if (!(tween._startTime - tween._delay)) {
          tween._delay -= iterationDelay;
        }
        tween._startTime -= iterationDelay;
      });
      iterationDuration -= iterationDelay;
    } else {
      iterationDelay = 0;
    }

    // Prevents iterationDuration to be NaN if no valid animatable props have been provided
    // Prevents _iterationCount to be NaN if no valid animatable props have been provided
    if (!iterationDuration) {
      iterationDuration = minValue;
      this.iterationCount = 0;
    }
    /** @type {TargetsArray} */
    this.targets = parsedTargets;
    /** @type {Number} */
    this.duration = iterationDuration === minValue ? minValue : clampInfinity(((iterationDuration + this._loopDelay) * this.iterationCount) - this._loopDelay) || minValue;
    /** @type {Callback<this>} */
    this.onRender = onRender || animDefaults.onRender;
    /** @type {EasingFunction} */
    this._ease = animEase;
    /** @type {Number} */
    this._delay = iterationDelay;
    // NOTE: I'm keeping delay values separated from offsets in timelines because delays can override previous tweens and it could be confusing to debug a timeline with overridden tweens and no associated visible delays.
    // this._delay = parent ? 0 : iterationDelay;
    // this._offset += parent ? iterationDelay : 0;
    /** @type {Number} */
    this.iterationDuration = iterationDuration;
    /** @type {{}} */
    this._inlineStyles = animInlineStyles;

    if (!this._autoplay && shouldTriggerRender) this.onRender(this);
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === normalizeTime(newDuration)) return this;
    const timeScale = newDuration / currentDuration;
    // NOTE: Find a better way to handle the stretch of an animation after stretch = 0
    forEachChildren(this, (/** @type {Tween} */tween) => {
      // Rounding is necessary here to minimize floating point errors
      tween._updateDuration = normalizeTime(tween._updateDuration * timeScale);
      tween._changeDuration = normalizeTime(tween._changeDuration * timeScale);
      tween._currentTime *= timeScale;
      tween._startTime *= timeScale;
      tween._absoluteStartTime *= timeScale;
    });
    return super.stretch(newDuration);
  }

  /**
   * @return {this}
   */
  refresh() {
    forEachChildren(this, (/** @type {Tween} */tween) => {
      const ogValue = getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType);
      decomposeRawValue(ogValue, decomposedOriginalValue);
      tween._fromNumbers = cloneArray(decomposedOriginalValue.d);
      tween._fromNumber = decomposedOriginalValue.n;
      if (tween._func) {
        decomposeRawValue(tween._func(), toTargetObject);
        tween._toNumbers = cloneArray(toTargetObject.d);
        tween._strings = cloneArray(toTargetObject.s);
        tween._toNumber = toTargetObject.n;
      }
    });
    return this;
  }

  /**
   * Cancel the animation and revert all the values affected by this animation to their original state
   * @return {this}
   */
  revert() {
    super.revert();
    return cleanInlineStyles(this);
  }

  /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */
  then(callback) {
    return super.then(callback);
  }

}

/**
 * @param {TargetsParam} targets
 * @param {AnimationParams} parameters
 * @return {JSAnimation}
 */
const animate = (targets, parameters) => new JSAnimation(targets, parameters, null, 0, false).init();




/**
 * Converts an easing function into a valid CSS linear() timing function string
 * @param {EasingFunction} fn
 * @param {number} [samples=100]
 * @returns {string} CSS linear() timing function
 */
const easingToLinear = (fn, samples = 100) => {
  const points = [];
  for (let i = 0; i <= samples; i++) points.push(fn(i / samples));
  return `linear(${points.join(', ')})`;
};

const WAAPIEasesLookups = {
  in: 'ease-in',
  out: 'ease-out',
  inOut: 'ease-in-out',
};

const WAAPIeases = /*#__PURE__*/(() => {
  const list = {};
  for (let type in easeTypes) list[type] = a => easeTypes[type](easeInPower(a));
  return /** @type {Record<String, EasingFunction>} */(list);
})();

/**
 * @param  {EasingParam} ease
 * @return {String}
 */
const parseWAAPIEasing = (ease) => {
  let parsedEase = WAAPIEasesLookups[ease];
  if (parsedEase) return parsedEase;
  parsedEase = 'linear';
  if (isStr(ease)) {
    if (
      stringStartsWith(ease, 'linear') ||
      stringStartsWith(ease, 'cubic-') ||
      stringStartsWith(ease, 'steps') ||
      stringStartsWith(ease, 'ease')
    ) {
      parsedEase = ease;
    } else if (stringStartsWith(ease, 'cubicB')) {
      parsedEase = toLowerCase(ease);
    } else {
      const parsed = parseEaseString(ease, WAAPIeases, WAAPIEasesLookups);
      if (isFnc(parsed)) parsedEase = parsed === none ? 'linear' : easingToLinear(parsed);
    }
    WAAPIEasesLookups[ease] = parsedEase;
  } else if (isFnc(ease)) {
    const easing = easingToLinear(ease);
    if (easing) parsedEase = easing;
  } else if (/** @type {Spring} */(ease).ease) {
    parsedEase = easingToLinear(/** @type {Spring} */(ease).ease);
  }
  return parsedEase;
};

/**
 * @typedef {String|Number|Array<String>|Array<Number>} WAAPITweenValue
 */

/**
 * @callback WAAPIFunctionvalue
 * @param {DOMTarget} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {WAAPITweenValue}
 */

/**
 * @typedef {WAAPITweenValue|WAAPIFunctionvalue|Array<String|Number|WAAPIFunctionvalue>} WAAPIKeyframeValue
 */

/**
 * @typedef {(animation: WAAPIAnimation) => void} WAAPICallback
 */

/**
 * @typedef {Object} WAAPITweenOptions
 * @property {WAAPIKeyframeValue} [to]
 * @property {WAAPIKeyframeValue} [from]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 */

/**
 * @typedef {Object} WAAPIAnimationOptions
 * @property {Number|Boolean} [loop]
 * @property {Boolean} [Reversed]
 * @property {Boolean} [Alternate]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [playbackRate]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 * @property {WAAPICallback} [onComplete]
 */

/**
 * @typedef {Record<String, WAAPIKeyframeValue | WAAPIAnimationOptions | Boolean | ScrollObserver | WAAPICallback | EasingParam | WAAPITweenOptions> & WAAPIAnimationOptions} WAAPIAnimationParams
 */

const transformsShorthands = ['x', 'y', 'z'];
const commonDefaultPXProperties = [
  'perspective',
  'width',
  'height',
  'margin',
  'padding',
  'top',
  'right',
  'bottom',
  'left',
  'borderWidth',
  'fontSize',
  'borderRadius',
  ...transformsShorthands
];

const validIndividualTransforms = [...transformsShorthands, ...validTransforms.filter(t => ['X', 'Y', 'Z'].some(axis => t.endsWith(axis)))];

// Setting it to true in case CSS.registerProperty is not supported will automatically skip the registration and fallback to no animation
let transformsPropertiesRegistered = isBrowser && (isUnd(CSS) || !Object.hasOwnProperty.call(CSS, 'registerProperty'));

const registerTransformsProperties = () => {
  if (transformsPropertiesRegistered) return;
  validTransforms.forEach(t => {
    const isSkew = stringStartsWith(t, 'skew');
    const isScale = stringStartsWith(t, 'scale');
    const isRotate = stringStartsWith(t, 'rotate');
    const isTranslate = stringStartsWith(t, 'translate');
    const isAngle = isRotate || isSkew;
    const syntax = isAngle ? '<angle>' : isScale ? "<number>" : isTranslate ? "<length-percentage>" : "*";
    try {
      CSS.registerProperty({
        name: '--' + t,
        syntax,
        inherits: false,
        initialValue: isTranslate ? '0px' : isAngle ? '0deg' : isScale ? '1' : '0',
      });
    } catch {}  });
  transformsPropertiesRegistered = true;
};

const WAAPIAnimationsLookups = {
  _head: null,
  _tail: null,
};

/**
 * @param {DOMTarget} $el
 * @param {String} [property]
 * @param {WAAPIAnimation} [parent]
 */
const removeWAAPIAnimation = ($el, property, parent) => {
  let nextLookup = WAAPIAnimationsLookups._head;
  while (nextLookup) {
    const next = nextLookup._next;
    const matchTarget = nextLookup.$el === $el;
    const matchProperty = !property || nextLookup.property === property;
    const matchParent = !parent || nextLookup.parent === parent;
    if (matchTarget && matchProperty && matchParent) {
      const anim = nextLookup.animation;
      try { anim.commitStyles(); } catch {}      anim.cancel();
      removeChild(WAAPIAnimationsLookups, nextLookup);
      const lookupParent = nextLookup.parent;
      if (lookupParent) {
        lookupParent._completed++;
        if (lookupParent.animations.length === lookupParent._completed) {
          lookupParent.completed = true;
          if (!lookupParent.muteCallbacks) {
            lookupParent.paused = true;
            lookupParent.onComplete(lookupParent);
            lookupParent._resolve(lookupParent);
          }
        }
      }
    }
    nextLookup = next;
  }
};

/**
 * @param {WAAPIAnimation} parent
 * @param {DOMTarget} $el
 * @param {String} property
 * @param {PropertyIndexedKeyframes} keyframes
 * @param {KeyframeAnimationOptions} params
 * @retun {Animation}
 */
const addWAAPIAnimation = (parent, $el, property, keyframes, params) => {
  const animation = $el.animate(keyframes, params);
  const animTotalDuration = params.delay + (+params.duration * params.iterations);
  animation.playbackRate = parent._speed;
  if (parent.paused) animation.pause();
  if (parent.duration < animTotalDuration) {
    parent.duration = animTotalDuration;
    parent.controlAnimation = animation;
  }
  parent.animations.push(animation);
  removeWAAPIAnimation($el, property);
  addChild(WAAPIAnimationsLookups, { parent, animation, $el, property, _next: null, _prev: null });
  const handleRemove = () => { removeWAAPIAnimation($el, property, parent); };
  animation.onremove = handleRemove;
  animation.onfinish = handleRemove;
  return animation;
};

/**
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} value
 * @param  {DOMTarget} $el
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {String}
 */
const normalizeTweenValue = (propName, value, $el, i, targetsLength) => {
  let v = getFunctionValue(/** @type {any} */(value), $el, i, targetsLength);
  if (!isNum(v)) return v;
  if (commonDefaultPXProperties.includes(propName) || stringStartsWith(propName, 'translate')) return `${v}px`;
  if (stringStartsWith(propName, 'rotate') || stringStartsWith(propName, 'skew')) return `${v}deg`;
  return `${v}`;
};

/**
 * @param  {DOMTarget} $el
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} from
 * @param  {WAAPIKeyframeValue} to
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {WAAPITweenValue}
 */
const parseIndividualTweenValue = ($el, propName, from, to, i, targetsLength) => {
  /** @type {WAAPITweenValue} */
  let tweenValue = '0';
  const computedTo = !isUnd(to) ? normalizeTweenValue(propName, to, $el, i, targetsLength) : getComputedStyle($el)[propName];
  if (!isUnd(from)) {
    const computedFrom = normalizeTweenValue(propName, from, $el, i, targetsLength);
    tweenValue = [computedFrom, computedTo];
  } else {
    tweenValue = isArr(to) ? to.map((/** @type {any} */v) => normalizeTweenValue(propName, v, $el, i, targetsLength)) : computedTo;
  }
  return tweenValue;
};

class WAAPIAnimation {
/**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 */
  constructor(targets, params) {

    if (globals.scope) globals.scope.revertibles.push(this);

    registerTransformsProperties();

    const parsedTargets = registerTargets(targets);
    const targetsLength = parsedTargets.length;

    if (!targetsLength) {
      console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
    }

    const ease = setValue(params.ease, parseWAAPIEasing(globals.defaults.ease));
    const spring = /** @type {Spring} */(ease).ease && ease;
    const autoplay = setValue(params.autoplay, globals.defaults.autoplay);
    const scroll = autoplay && /** @type {ScrollObserver} */(autoplay).link ? autoplay : false;
    const alternate = params.alternate && /** @type {Boolean} */(params.alternate) === true;
    const reversed = params.reversed && /** @type {Boolean} */(params.reversed) === true;
    const loop = setValue(params.loop, globals.defaults.loop);
    const iterations = /** @type {Number} */((loop === true || loop === Infinity) ? Infinity : isNum(loop) ? loop + 1 : 1);
    /** @type {PlaybackDirection} */
    const direction = alternate ? reversed ? 'alternate-reverse' : 'alternate' : reversed ? 'reverse' : 'normal';
    /** @type {FillMode} */
    const fill = 'forwards';
    /** @type {String} */
    const easing = parseWAAPIEasing(ease);
    const timeScale = (globals.timeScale === 1 ? 1 : K);

    /** @type {DOMTargetsArray}] */
    this.targets = parsedTargets;
    /** @type {Array<globalThis.Animation>}] */
    this.animations = [];
    /** @type {globalThis.Animation}] */
    this.controlAnimation = null;
    /** @type {Callback<this>} */
    this.onComplete = params.onComplete || noop;
    /** @type {Number} */
    this.duration = 0;
    /** @type {Boolean} */
    this.muteCallbacks = false;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Boolean} */
    this.paused = !autoplay || scroll !== false;
    /** @type {Boolean} */
    this.reversed = reversed;
    /** @type {Boolean|ScrollObserver} */
    this.autoplay = autoplay;
    /** @type {Number} */
    this._speed = setValue(params.playbackRate, globals.defaults.playbackRate);
    /** @type {Function} */
    this._resolve = noop; // Used by .then()
    /** @type {Number} */
    this._completed = 0;
    /** @type {Array<Object>}] */
    this._inlineStyles = parsedTargets.map($el => $el.getAttribute('style'));

    parsedTargets.forEach(($el, i) => {

      const cachedTransforms = $el[transformsSymbol];

      const hasIndividualTransforms = validIndividualTransforms.some(t => params.hasOwnProperty(t));

      /** @type {Number} */
      const duration = (spring ? /** @type {Spring} */(spring).duration : getFunctionValue(setValue(params.duration, globals.defaults.duration), $el, i, targetsLength)) * timeScale;
      /** @type {Number} */
      const delay = getFunctionValue(setValue(params.delay, globals.defaults.delay), $el, i, targetsLength) * timeScale;
      /** @type {CompositeOperation} */
      const composite = /** @type {CompositeOperation} */(setValue(params.composition, 'replace'));

      for (let name in params) {
        if (!isKey(name)) continue;
        /** @type {PropertyIndexedKeyframes} */
        const keyframes = {};
        /** @type {KeyframeAnimationOptions} */
        const tweenParams = { iterations, direction, fill, easing, duration, delay, composite };
        const propertyValue = params[name];
        const individualTransformProperty = hasIndividualTransforms ? validTransforms.includes(name) ? name : shortTransforms.get(name) : false;
        let parsedPropertyValue;
        if (isObj(propertyValue)) {
          const tweenOptions = /** @type {WAAPITweenOptions} */(propertyValue);
          const tweenOptionsEase = setValue(tweenOptions.ease, ease);
          const tweenOptionsSpring = /** @type {Spring} */(tweenOptionsEase).ease && tweenOptionsEase;
          const to = /** @type {WAAPITweenOptions} */(tweenOptions).to;
          const from = /** @type {WAAPITweenOptions} */(tweenOptions).from;
          /** @type {Number} */
          tweenParams.duration = (tweenOptionsSpring ? /** @type {Spring} */(tweenOptionsSpring).duration : getFunctionValue(setValue(tweenOptions.duration, duration), $el, i, targetsLength)) * timeScale;
          /** @type {Number} */
          tweenParams.delay = getFunctionValue(setValue(tweenOptions.delay, delay), $el, i, targetsLength) * timeScale;
          /** @type {CompositeOperation} */
          tweenParams.composite = /** @type {CompositeOperation} */(setValue(tweenOptions.composition, composite));
          /** @type {String} */
          tweenParams.easing = parseWAAPIEasing(tweenOptionsEase);
          parsedPropertyValue = parseIndividualTweenValue($el, name, from, to, i, targetsLength);
          if (individualTransformProperty) {
            keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
            cachedTransforms[individualTransformProperty] = parsedPropertyValue;
          } else {
            keyframes[name] = parseIndividualTweenValue($el, name, from, to, i, targetsLength);
          }
          addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
          if (!isUnd(from)) {
            if (!individualTransformProperty) {
              $el.style[name] = keyframes[name][0];
            } else {
              const key = `--${individualTransformProperty}`;
              $el.style.setProperty(key, keyframes[key][0]);
            }
          }
        } else {
          parsedPropertyValue = isArr(propertyValue) ?
                                propertyValue.map((/** @type {any} */v) => normalizeTweenValue(name, v, $el, i, targetsLength)) :
                                normalizeTweenValue(name, /** @type {any} */(propertyValue), $el, i, targetsLength);
          if (individualTransformProperty) {
            keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
            cachedTransforms[individualTransformProperty] = parsedPropertyValue;
          } else {
            keyframes[name] = parsedPropertyValue;
          }
          addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
        }
      }
      if (hasIndividualTransforms) {
        let transforms = emptyString;
        for (let t in cachedTransforms) {
          transforms += `${transformsFragmentStrings[t]}var(--${t})) `;
        }
        $el.style.transform = transforms;
      }
    });

    if (scroll) {
      /** @type {ScrollObserver} */(this.autoplay).link(this);
    }
  }

  /**
   * @callback forEachCallback
   * @param {globalThis.Animation} animation
   */

  /**
   * @param  {forEachCallback|String} callback
   * @return {this}
   */
  forEach(callback) {
    const cb = isStr(callback) ? a => a[callback]() : callback;
    this.animations.forEach(cb);
    return this;
  }

  get speed() {
    return this._speed;
  }

  /** @param {Number} speed */
  set speed(speed) {
    this._speed = +speed;
    this.forEach(anim => anim.playbackRate = speed);
  }

  get currentTime() {
    const controlAnimation = this.controlAnimation;
    const timeScale = globals.timeScale;
    return this.completed ? this.duration : controlAnimation ? +controlAnimation.currentTime * (timeScale === 1 ? 1 : timeScale) : 0;
  }

  /** @param {Number} time */
  set currentTime(time) {
    const t = time * (globals.timeScale === 1 ? 1 : K);
    this.forEach(anim => {
      // Make sure the animation playState is not 'paused' in order to properly trigger an onfinish callback.
      // The "paused" play state supersedes the "finished" play state; if the animation is both paused and finished, the "paused" state is the one that will be reported.
      // https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish_event
      if (t >= this.duration) anim.play();
      anim.currentTime = t;
    });
  }

  get progress() {
    return this.currentTime / this.duration;
  }

  /** @param {Number} progress */
  set progress(progress) {
    this.forEach(anim => anim.currentTime = progress * this.duration || 0);
  }

  resume() {
    if (!this.paused) return this;
    this.paused = false;
    // TODO: Store the current time, and seek back to the last position
    return this.forEach('play');
  }

  pause() {
    if (this.paused) return this;
    this.paused = true;
    return this.forEach('pause');
  }

  alternate() {
    this.reversed = !this.reversed;
    this.forEach('reverse');
    if (this.paused) this.forEach('pause');
    return this;
  }

  play() {
    if (this.reversed) this.alternate();
    return this.resume();
  }

  reverse() {
    if (!this.reversed) this.alternate();
    return this.resume();
  }

 /**
  * @param {Number} time
  * @param {Boolean} muteCallbacks
  */
  seek(time, muteCallbacks = false) {
    if (muteCallbacks) this.muteCallbacks = true;
    if (time < this.duration) this.completed = false;
    this.currentTime = time;
    this.muteCallbacks = false;
    if (this.paused) this.pause();
    return this;
  }

  restart() {
    this.completed = false;
    return this.seek(0, true).resume();
  }

  commitStyles() {
    return this.forEach('commitStyles');
  }

  complete() {
    return this.seek(this.duration);
  }

  cancel() {
    this.forEach('cancel');
    return this.pause();
  }

  revert() {
    this.cancel();
    this.targets.forEach(($el, i) => $el.setAttribute('style', this._inlineStyles[i]) );
    return this;
  }

  /**
   * @param  {WAAPICallback} [callback]
   * @return {Promise}
   */
  then(callback = noop) {
    const then = this.then;
    const onResolve = () => {
      this.then = null;
      callback(this);
      this.then = then;
      this._resolve = noop;
    };
    return new Promise(r => {
      this._resolve = () => r(onResolve());
      if (this.completed) this._resolve();
      return this;
    });
  }
}

const waapi = {
/**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 * @return {WAAPIAnimation}
 */
  animate: (targets, params) => new WAAPIAnimation(targets, params),
  convertEase: easingToLinear
};




/**
 * @param  {Callback<Timer>} [callback]
 * @return {Timer}
 */
const sync = (callback = noop) => {
  return new Timer({ duration: 1 * globals.timeScale, onComplete: callback }, null, 0).resume();
};

/**
 * @overload
 * @param  {DOMTargetSelector} targetSelector
 * @param  {String}            propName
 * @return {String}
 *
 * @overload
 * @param  {JSTargetsParam} targetSelector
 * @param  {String}         propName
 * @return {Number|String}
 *
 * @overload
 * @param  {DOMTargetsParam} targetSelector
 * @param  {String}          propName
 * @param  {String}          unit
 * @return {String}
 *
 * @overload
 * @param  {TargetsParam} targetSelector
 * @param  {String}       propName
 * @param  {Boolean}      unit
 * @return {Number}
 *
 * @param  {TargetsParam}   targetSelector
 * @param  {String}         propName
 * @param  {String|Boolean} [unit]
 */
function getTargetValue(targetSelector, propName, unit) {
  const targets = registerTargets(targetSelector);
  if (!targets.length) return;
  const [ target ] = targets;
  const tweenType = getTweenType(target, propName);
  const normalizePropName = sanitizePropertyName(propName, target, tweenType);
  let originalValue = getOriginalAnimatableValue(target, normalizePropName);
  if (isUnd(unit)) {
    return originalValue;
  } else {
    decomposeRawValue(originalValue, decomposedOriginalValue);
    if (decomposedOriginalValue.t === valueTypes.NUMBER || decomposedOriginalValue.t === valueTypes.UNIT) {
      if (unit === false) {
        return decomposedOriginalValue.n;
      } else {
        const convertedValue = convertValueUnit(/** @type {DOMTarget} */(target), decomposedOriginalValue, /** @type {String} */(unit), false);
        return `${round(convertedValue.n, globals.precision)}${convertedValue.u}`;
      }
    }
  }
}

/**
 * @param  {TargetsParam}    targets
 * @param  {AnimationParams} parameters
 * @return {JSAnimation}
 */
const setTargetValues = (targets, parameters) => {
  if (isUnd(parameters)) return;
  parameters.duration = minValue;
  // Do not overrides currently active tweens by default
  parameters.composition = setValue(parameters.composition, compositionTypes.none);
  // Skip init() and force rendering by playing the animation
  return new JSAnimation(targets, parameters, null, 0, true).resume();
};

/**
 * @param  {TargetsArray} targetsArray
 * @param  {JSAnimation}    animation
 * @param  {String}       [propertyName]
 * @return {Boolean}
 */
const removeTargetsFromAnimation = (targetsArray, animation, propertyName) => {
  let tweensMatchesTargets = false;
  forEachChildren(animation, (/**@type {Tween} */tween) => {
    const tweenTarget = tween.target;
    if (targetsArray.includes(tweenTarget)) {
      const tweenName = tween.property;
      const tweenType = tween._tweenType;
      const normalizePropName = sanitizePropertyName(propertyName, tweenTarget, tweenType);
      if (!normalizePropName || normalizePropName && normalizePropName === tweenName) {
        // Make sure to flag the previous CSS transform tween to renderTransform
        if (tween.parent._tail === tween &&
            tween._tweenType === tweenTypes.TRANSFORM &&
            tween._prev &&
            tween._prev._tweenType === tweenTypes.TRANSFORM
        ) {
          tween._prev._renderTransforms = 1;
        }
        // Removes the tween from the selected animation
        removeChild(animation, tween);
        // Detach the tween from its siblings to make sure blended tweens are correctlly removed
        removeTweenSliblings(tween);
        tweensMatchesTargets = true;
      }
    }
  }, true);
  return tweensMatchesTargets;
};

/**
 * @param  {TargetsParam} targets
 * @param  {Renderable|WAAPIAnimation} [renderable]
 * @param  {String}                    [propertyName]
 * @return {TargetsArray}
 */
const remove = (targets, renderable, propertyName) => {
  const targetsArray = parseTargets(targets);
  const parent = /** @type {Renderable|typeof engine} **/(renderable ? renderable : engine);
  const waapiAnimation = renderable && /** @type {WAAPIAnimation} */(renderable).controlAnimation && /** @type {WAAPIAnimation} */(renderable);
  for (let i = 0, l = targetsArray.length; i < l; i++) {
    const $el = /** @type {DOMTarget}  */(targetsArray[i]);
    removeWAAPIAnimation($el, propertyName, waapiAnimation);
  }
  let removeMatches;
  if (parent._hasChildren) {
    let iterationDuration = 0;
    forEachChildren(parent, (/** @type {Renderable} */child) => {
      if (!child._hasChildren) {
        removeMatches = removeTargetsFromAnimation(targetsArray, /** @type {JSAnimation} */(child), propertyName);
        // Remove the child from its parent if no tweens and no children left after the removal
        if (removeMatches && !child._head) {
          child.cancel();
          removeChild(parent, child);
        } else {
          // Calculate the new iterationDuration value to handle onComplete with last child in render()
          const childTLOffset = child._offset + child._delay;
          const childDur = childTLOffset + child.duration;
          if (childDur > iterationDuration) {
            iterationDuration = childDur;
          }
        }
      }
      // Make sure to also remove engine's children targets
      // NOTE: Avoid recursion?
      if (child._head) {
        remove(targets, child, propertyName);
      } else {
        child._hasChildren = false;
      }
    }, true);
    // Update iterationDuration value to handle onComplete with last child in render()
    if (!isUnd(/** @type {Renderable} */(parent).iterationDuration)) {
      /** @type {Renderable} */(parent).iterationDuration = iterationDuration;
    }
  } else {
    removeMatches = removeTargetsFromAnimation(
      targetsArray,
      /** @type {JSAnimation} */(parent),
      propertyName
    );
  }

  if (removeMatches && !parent._head) {
    parent._hasChildren = false;
    // Cancel the parent if there are no tweens and no children left after the removal
    // We have to check if the .cancel() method exist to handle cases where the parent is the engine itself
    if (/** @type {Renderable} */(parent).cancel) /** @type {Renderable} */(parent).cancel();
  }

  return targetsArray;
};

/**
 * @param  {Number} min
 * @param  {Number} max
 * @param  {Number} [decimalLength]
 * @return {Number}
 */
const random = (min, max, decimalLength) => { const m = 10 ** (decimalLength || 0); return floor((Math.random() * (max - min + (1 / m)) + min) * m) / m };

/**
 * @param  {String|Array} items
 * @return {any}
 */
const randomPick = items => items[random(0, items.length - 1)];

/**
 * Adapted from https://bost.ocks.org/mike/shuffle/
 * @param  {Array} items
 * @return {Array}
 */
const shuffle = items => {
  let m = items.length, t, i;
  while (m) { i = random(0, --m); t = items[m]; items[m] = items[i]; items[i] = t; }
  return items;
};

/**
 * @param  {Number|String} v
 * @param  {Number} decimalLength
 * @return {String}
 */
const roundPad = (v, decimalLength) => (+v).toFixed(decimalLength);

/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */
const padStart = (v, totalLength, padString) => `${v}`.padStart(totalLength, padString);

/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */
const padEnd = (v, totalLength, padString) => `${v}`.padEnd(totalLength, padString);

/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
const wrap = (v, min, max) => (((v - min) % (max - min) + (max - min)) % (max - min)) + min;

/**
 * @param  {Number} value
 * @param  {Number} inLow
 * @param  {Number} inHigh
 * @param  {Number} outLow
 * @param  {Number} outHigh
 * @return {Number}
 */
const mapRange = (value, inLow, inHigh, outLow, outHigh) => outLow + ((value - inLow) / (inHigh - inLow)) * (outHigh - outLow);

/**
 * @param  {Number} degrees
 * @return {Number}
 */
const degToRad = degrees => degrees * PI / 180;

/**
 * @param  {Number} radians
 * @return {Number}
 */
const radToDeg = radians => radians * 180 / PI;

/**
 * https://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} amount
 * @param  {Renderable|Boolean} [renderable]
 * @return {Number}
 */
const lerp = (start, end, amount, renderable) => {
  let dt = K / globals.defaults.frameRate;
  if (renderable !== false) {
    const ticker = /** @type Renderable */
                   (renderable) ||
                   (engine._hasChildren && engine);
    if (ticker && ticker.deltaTime) {
      dt = ticker.deltaTime;
    }
  }
  const t = 1 - Math.exp(-amount * dt * .1);
  return !amount ? start : amount === 1 ? end : (1 - t) * start + t * end;
};

// Chain-able utilities

/**
 * @callback UtilityFunction
 * @param {...*} args
 * @return {Number|String}
 *
 * @param {UtilityFunction} fn
 * @param {Number} [last=0]
 * @return {function(...(Number|String)): function(Number|String): (Number|String)}
 */
const curry = (fn, last = 0) => (...args) => last ? v => fn(...args, v) : v => fn(v, ...args);

/**
 * @param {Function} fn
 * @return {function(...(Number|String))}
 */
const chain = fn => {
   return (...args) => {
    const result = fn(...args);
    return new Proxy(noop, {
      apply: (_, __, [v]) => result(v),
      get: (_, prop) => chain(/**@param {...Number|String} nextArgs */(...nextArgs) => {
        const nextResult = utils[prop](...nextArgs);
        return (/**@type {Number|String} */v) => nextResult(result(v));
      })
    });
  }
};

/**
 * @param {UtilityFunction} fn
 * @param {Number} [right]
 * @return {function(...(Number|String)): UtilityFunction}
 */
const makeChainable = (fn, right = 0) => (...args) => (args.length < fn.length ? chain(curry(fn, right)) : fn)(...args);

/**
 * @callback ChainedUtilsResult
 * @param {Number} value
 * @return {Number}
 *
 * @typedef {Object} ChainableUtils
 * @property {ChainedClamp} clamp
 * @property {ChainedRound} round
 * @property {ChainedSnap} snap
 * @property {ChainedWrap} wrap
 * @property {ChainedInterpolate} interpolate
 * @property {ChainedMapRange} mapRange
 * @property {ChainedRoundPad} roundPad
 * @property {ChainedPadStart} padStart
 * @property {ChainedPadEnd} padEnd
 * @property {ChainedDegToRad} degToRad
 * @property {ChainedRadToDeg} radToDeg
 *
 * @typedef {ChainableUtils & ChainedUtilsResult} ChainableUtil
 *
 * @callback ChainedClamp
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedRound
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedSnap
 * @param {Number} increment
 * @return {ChainableUtil}
 *
 * @callback ChainedWrap
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedInterpolate
 * @param {Number} start
 * @param {Number} end
 * @return {ChainableUtil}
 *
 * @callback ChainedMapRange
 * @param {Number} inLow
 * @param {Number} inHigh
 * @param {Number} outLow
 * @param {Number} outHigh
 * @return {ChainableUtil}
 *
 * @callback ChainedRoundPad
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedPadStart
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedPadEnd
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedDegToRad
 * @return {ChainableUtil}
 *
 * @callback ChainedRadToDeg
 * @return {ChainableUtil}
 */

const utils = {
  $: registerTargets,
  get: getTargetValue,
  set: setTargetValues,
  remove,
  cleanInlineStyles,
  random,
  randomPick,
  shuffle,
  lerp,
  sync,
  clamp: /** @type {typeof clamp & ChainedClamp} */(makeChainable(clamp)),
  round: /** @type {typeof round & ChainedRound} */(makeChainable(round)),
  snap: /** @type {typeof snap & ChainedSnap} */(makeChainable(snap)),
  wrap: /** @type {typeof wrap & ChainedWrap} */(makeChainable(wrap)),
  interpolate: /** @type {typeof interpolate & ChainedInterpolate} */(makeChainable(interpolate, 1)),
  mapRange: /** @type {typeof mapRange & ChainedMapRange} */(makeChainable(mapRange)),
  roundPad: /** @type {typeof roundPad & ChainedRoundPad} */(makeChainable(roundPad)),
  padStart: /** @type {typeof padStart & ChainedPadStart} */(makeChainable(padStart)),
  padEnd: /** @type {typeof padEnd & ChainedPadEnd} */(makeChainable(padEnd)),
  degToRad: /** @type {typeof degToRad & ChainedDegToRad} */(makeChainable(degToRad)),
  radToDeg: /** @type {typeof radToDeg & ChainedRadToDeg} */(makeChainable(radToDeg)),
};




/**
 * @typedef {Number|String|Function} TimePosition
 */

/**
 * Timeline's children offsets positions parser
 * @param  {Timeline} timeline
 * @param  {String} timePosition
 * @return {Number}
 */
const getPrevChildOffset = (timeline, timePosition) => {
  if (stringStartsWith(timePosition, '<')) {
    const goToPrevAnimationOffset = timePosition[1] === '<';
    const prevAnimation = /** @type {Tickable} */(timeline._tail);
    const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
    return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
  }
};

/**
 * @param  {Timeline} timeline
 * @param  {TimePosition} [timePosition]
 * @return {Number}
 */
const parseTimelinePosition = (timeline, timePosition) => {
  let tlDuration = timeline.iterationDuration;
  if (tlDuration === minValue) tlDuration = 0;
  if (isUnd(timePosition)) return tlDuration;
  if (isNum(+timePosition)) return +timePosition;
  const timePosStr = /** @type {String} */(timePosition);
  const tlLabels = timeline ? timeline.labels : null;
  const hasLabels = !isNil(tlLabels);
  const prevOffset = getPrevChildOffset(timeline, timePosStr);
  const hasSibling = !isUnd(prevOffset);
  const matchedRelativeOperator = relativeValuesExecRgx.exec(timePosStr);
  if (matchedRelativeOperator) {
    const fullOperator = matchedRelativeOperator[0];
    const split = timePosStr.split(fullOperator);
    const labelOffset = hasLabels && split[0] ? tlLabels[split[0]] : tlDuration;
    const parsedOffset = hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration;
    const parsedNumericalOffset = +split[1];
    return getRelativeValue(parsedOffset, parsedNumericalOffset, fullOperator[0]);
  } else {
    return hasSibling ? prevOffset :
           hasLabels ? !isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] :
           tlDuration : tlDuration;
  }
};

/**
 * @param {Timeline} tl
 * @return {Number}
 */
function getTimelineTotalDuration(tl) {
  return clampInfinity(((tl.iterationDuration + tl._loopDelay) * tl.iterationCount) - tl._loopDelay) || minValue;
}

/**
 * @overload
 * @param  {TimerParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @return {Timeline}
 *
 * @overload
 * @param  {AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} targets
 * @param  {Number} [index]
 * @param  {Number} [length]
 * @return {Timeline}
 *
 * @param  {TimerParams|AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} [targets]
 * @param  {Number} [index]
 * @param  {Number} [length]
 */
function addTlChild(childParams, tl, timePosition, targets, index, length) {
  const isSetter = isNum(childParams.duration) && /** @type {Number} */(childParams.duration) <= minValue;
  // Offset the tl position with -minValue for 0 duration animations or .set() calls in order to align their end value with the defined position
  const adjustedPosition = isSetter ? timePosition - minValue : timePosition;
  tick(tl, adjustedPosition, 1, 1, tickModes.AUTO);
  const tlChild = targets ?
    new JSAnimation(targets,/** @type {AnimationParams} */(childParams), tl, adjustedPosition, false, index, length) :
    new Timer(/** @type {TimerParams} */(childParams), tl, adjustedPosition);
  tlChild.init(1);
  // TODO: Might be better to insert at a position relative to startTime?
  addChild(tl, tlChild);
  forEachChildren(tl, (/** @type {Renderable} */child) => {
    const childTLOffset = child._offset + child._delay;
    const childDur = childTLOffset + child.duration;
    if (childDur > tl.iterationDuration) tl.iterationDuration = childDur;
  });
  tl.duration = getTimelineTotalDuration(tl);
  return tl;
}

class Timeline extends Timer {

  /**
   * @param {TimelineParams} [parameters]
   */
  constructor(parameters = {}) {
    super(/** @type {TimerParams&TimelineParams} */(parameters), null, 0);
    /** @type {Number} */
    this.duration = 0; // TL duration starts at 0 and grows when adding children
    /** @type {Record<String, Number>} */
    this.labels = {};
    const defaultsParams = parameters.defaults;
    const globalDefaults = globals.defaults;
    /** @type {DefaultsParams} */
    this.defaults = defaultsParams ? mergeObjects(defaultsParams, globalDefaults) : globalDefaults;
    /** @type {Callback<this>} */
    this.onRender = parameters.onRender || globalDefaults.onRender;
    const tlPlaybackEase = setValue(parameters.playbackEase, globalDefaults.playbackEase);
    this._ease = tlPlaybackEase ? parseEasings(tlPlaybackEase) : null;
    /** @type {Number} */
    this.iterationDuration = 0;
  }

  /**
   * @overload
   * @param {TargetsParam} a1
   * @param {AnimationParams} a2
   * @param {TimePosition} [a3]
   * @return {this}
   *
   * @overload
   * @param {TimerParams} a1
   * @param {TimePosition} [a2]
   * @return {this}
   *
   * @param {TargetsParam|TimerParams} a1
   * @param {AnimationParams|TimePosition} a2
   * @param {TimePosition} [a3]
   */
  add(a1, a2, a3) {
    const isAnim = isObj(a2);
    const isTimer = isObj(a1);
    if (isAnim || isTimer) {
      this._hasChildren = true;
      if (isAnim) {
        const childParams = /** @type {AnimationParams} */(a2);
        // Check for function for children stagger positions
        if (isFnc(a3)) {
          const staggeredPosition = /** @type {Function} */(a3);
          const parsedTargetsArray = parseTargets(/** @type {TargetsParam} */(a1));
          // Store initial duration before adding new children that will change the duration
          const tlDuration = this.duration;
          // Store initial _iterationDuration before adding new children that will change the duration
          const tlIterationDuration = this.iterationDuration;
          // Store the original id in order to add specific indexes to the new animations ids
          const id = childParams.id;
          let i = 0;
          const parsedLength = parsedTargetsArray.length;
          parsedTargetsArray.forEach((/** @type {Target} */target) => {
            // Create a new parameter object for each staggered children
            const staggeredChildParams = { ...childParams };
            // Reset the duration of the timeline iteration before each stagger to prevent wrong start value calculation
            this.duration = tlDuration;
            this.iterationDuration = tlIterationDuration;
            if (!isUnd(id)) staggeredChildParams.id = id + '-' + i;
            addTlChild(
              staggeredChildParams,
              this,
              staggeredPosition(target, i, parsedLength, this),
              target,
              i,
              parsedLength
            );
            i++;
          });
        } else {
          addTlChild(
            childParams,
            this,
            parseTimelinePosition(this, a3),
            /** @type {TargetsParam} */(a1),
          );
        }
      } else {
        // It's a Timer
        addTlChild(
          /** @type TimerParams */(a1),
          this,
          parseTimelinePosition(this,/** @type TimePosition */(a2)),
        );
      }
      return this.init(1); // 1 = internalRender
    }
  }

  /**
   * @overload
   * @param {Tickable} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {WAAPIAnimation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @param {Tickable|WAAPIAnimation|globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   */
  sync(synced, position) {
    if (isUnd(synced) || synced && isUnd(synced.pause)) return this;
    synced.pause();
    const duration = +(/** @type {globalThis.Animation} */(synced).effect ? /** @type {globalThis.Animation} */(synced).effect.getTiming().duration : /** @type {Tickable} */(synced).duration);
    return this.add(synced, { currentTime: [0, duration], duration, ease: 'linear' }, position);
  }

  /**
   * @param  {TargetsParam} targets
   * @param  {AnimationParams} parameters
   * @param  {TimePosition} [position]
   * @return {this}
   */
  set(targets, parameters, position) {
    if (isUnd(parameters)) return this;
    parameters.duration = minValue;
    parameters.composition = compositionTypes.replace;
    return this.add(targets, parameters, position);
  }

  /**
   * @param {Callback<Timer>} callback
   * @param {TimePosition} [position]
   * @return {this}
   */
  call(callback, position) {
    if (isUnd(callback) || callback && !isFnc(callback)) return this;
    return this.add({ duration: 0, onComplete: () => callback(this) }, position);
  }

  /**
   * @param {String} labelName
   * @param {TimePosition} [position]
   * @return {this}
   *
   */
  label(labelName, position) {
    if (isUnd(labelName) || labelName && !isStr(labelName)) return this;
    this.labels[labelName] = parseTimelinePosition(this,/** @type TimePosition */(position));
    return this;
  }

  /**
   * @param  {TargetsParam} targets
   * @param  {String} [propertyName]
   * @return {this}
   */
  remove(targets, propertyName) {
    remove(targets, this, propertyName);
    return this;
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === normalizeTime(newDuration)) return this;
    const timeScale = newDuration / currentDuration;
    const labels = this.labels;
    forEachChildren(this, (/** @type {JSAnimation} */child) => child.stretch(child.duration * timeScale));
    for (let labelName in labels) labels[labelName] *= timeScale;
    return super.stretch(newDuration);
  }

  /**
   * @return {this}
   */
  refresh() {
    forEachChildren(this, (/** @type {JSAnimation} */child) => {
      if (child.refresh) child.refresh();
    });
    return this;
  }

  /**
   * @return {this}
   */
  revert() {
    super.revert();
    forEachChildren(this, (/** @type {JSAnimation} */child) => child.revert, true);
    return cleanInlineStyles(this);
  }

  /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */
  then(callback) {
    return super.then(callback);
  }
}

/**
 * @param {TimelineParams} [parameters]
 * @return {Timeline}
 */
const createTimeline = parameters => new Timeline(parameters).init();




class Animatable {
  /**
   * @param {TargetsParam} targets
   * @param {AnimatableParams} parameters
   */
  constructor(targets, parameters) {
    if (globals.scope) globals.scope.revertibles.push(this);
    /** @type {AnimationParams} */
    const globalParams = {};
    const properties = {};
    this.targets = [];
    this.animations = {};
    if (isUnd(targets) || isUnd(parameters)) return;
    for (let propName in parameters) {
      const paramValue = parameters[propName];
      if (isKey(propName)) {
        properties[propName] = paramValue;
      } else {
        globalParams[propName] = paramValue;
      }
    }
    for (let propName in properties) {
      const propValue = properties[propName];
      const isObjValue = isObj(propValue);
      /** @type {TweenParamsOptions} */
      let propParams = {};
      let to = '+=0';
      if (isObjValue) {
        const unit = propValue.unit;
        if (isStr(unit)) to += unit;
      } else {
        propParams.duration = propValue;
      }
      propParams[propName] = isObjValue ? mergeObjects({ to }, propValue) : to;
      const animParams = mergeObjects(globalParams, propParams);
      animParams.composition = compositionTypes.replace;
      animParams.autoplay = false;
      const animation = this.animations[propName] = new JSAnimation(targets, animParams, null, 0, false).init();
      if (!this.targets.length) this.targets.push(...animation.targets);
      /** @type {AnimatableProperty} */
      this[propName] = (to, duration, ease) => {
        const tween = /** @type {Tween} */(animation._head);
        if (isUnd(to) && tween) {
          const numbers = tween._numbers;
          if (numbers && numbers.length) {
            return numbers;
          } else {
            return tween._modifier(tween._number);
          }
        } else {
          forEachChildren(animation, (/** @type {Tween} */tween) => {
            if (isArr(to)) {
              for (let i = 0, l = /** @type {Array} */(to).length; i < l; i++) {
                if (!isUnd(tween._numbers[i])) {
                  tween._fromNumbers[i] = /** @type {Number} */(tween._modifier(tween._numbers[i]));
                  tween._toNumbers[i] = to[i];
                }
              }
            } else {
              tween._fromNumber = /** @type {Number} */(tween._modifier(tween._number));
              tween._toNumber = /** @type {Number} */(to);
            }
            if (!isUnd(ease)) tween._ease = parseEasings(ease);
            tween._currentTime = 0;
          });
          if (!isUnd(duration)) animation.stretch(duration);
          animation.reset(1).resume();
          return this;
        }
      };
    }
  }

  revert() {
    for (let propName in this.animations) {
      this[propName] = noop;
      this.animations[propName].revert();
    }
    this.animations = {};
    this.targets.length = 0;
    return this;
  }
}

/**
 * @param {TargetsParam} targets
 * @param {AnimatableParams} parameters
 * @return {AnimatableObject}
 */
const createAnimatable = (targets, parameters) => /** @type {AnimatableObject} */(new Animatable(targets, parameters));




/*
 * Spring ease solver adapted from https://webkit.org/demos/spring/spring.js
 * Webkit Copyright © 2016 Apple Inc
 */

/**
 * @typedef {Object} SpringParams
 * @property {Number} [mass=1] - Mass, default 1
 * @property {Number} [stiffness=100] - Stiffness, default 100
 * @property {Number} [damping=10] - Damping, default 10
 * @property {Number} [velocity=0] - Initial velocity, default 0
 */

class Spring {
  /**
   * @param {SpringParams} [parameters]
   */
  constructor(parameters = {}) {
    this.timeStep = .02; // Interval fed to the solver to calculate duration
    this.restThreshold = .0005; // Values below this threshold are considered resting position
    this.restDuration = 200; // Duration in ms used to check if the spring is resting after reaching restThreshold
    this.maxDuration = 60000; // The maximum allowed spring duration in ms (default 1 min)
    this.maxRestSteps = this.restDuration / this.timeStep / K; // How many steps allowed after reaching restThreshold before stopping the duration calculation
    this.maxIterations = this.maxDuration / this.timeStep / K; // Calculate the maximum iterations allowed based on maxDuration
    this.m = clamp(setValue(parameters.mass, 1), 0, K);
    this.s = clamp(setValue(parameters.stiffness, 100), 1, K);
    this.d = clamp(setValue(parameters.damping, 10), .1, K);
    this.v = clamp(setValue(parameters.velocity, 0), -1e3, K);
    this.w0 = 0;
    this.zeta = 0;
    this.wd = 0;
    this.b = 0;
    this.solverDuration = 0;
    this.duration = 0;
    this.compute();
    /** @type {EasingFunction} */
    this.ease = t => t === 0 || t === 1 ? t : this.solve(t * this.solverDuration);
  }

  /** @type {EasingFunction} */
  solve(time) {
    const { zeta, w0, wd, b } = this;
    let t = time;
    if (zeta < 1) {
      t = exp(-t * zeta * w0) * (1 * cos(wd * t) + b * sin(wd * t));
    } else {
      t = (1 + b * t) * exp(-t * w0);
    }
    return 1 - t;
  }

  compute() {
    const { maxRestSteps, maxIterations, restThreshold, timeStep, m, d, s, v } = this;
    const w0 = this.w0 = clamp(sqrt(s / m), minValue, K);
    const zeta = this.zeta = d / (2 * sqrt(s * m));
    const wd = this.wd = zeta < 1 ? w0 * sqrt(1 - zeta * zeta) : 0;
    this.b = zeta < 1 ? (zeta * w0 + -v) / wd : -v + w0;
    let solverTime = 0;
    let restSteps = 0;
    let iterations = 0;
    while (restSteps < maxRestSteps && iterations < maxIterations) {
      if (abs(1 - this.solve(solverTime)) < restThreshold) {
        restSteps++;
      } else {
        restSteps = 0;
      }
      this.solverDuration = solverTime;
      solverTime += timeStep;
      iterations++;
    }
    this.duration = round(this.solverDuration * K, 0) * globals.timeScale;
  }

  get mass() {
    return this.m;
  }

  set mass(v) {
    this.m = clamp(setValue(v, 1), 0, K);
    this.compute();
  }

  get stiffness() {
    return this.s;
  }

  set stiffness(v) {
    this.s = clamp(setValue(v, 100), 1, K);
    this.compute();
  }

  get damping() {
    return this.d;
  }

  set damping(v) {
    this.d = clamp(setValue(v, 10), .1, K);
    this.compute();
  }

  get velocity() {
    return this.v;
  }

  set velocity(v) {
    this.v = clamp(setValue(v, 0), -1e3, K);
    this.compute();
  }
}

/**
 * @param {SpringParams} [parameters]
 * @returns {Spring}
 */
const createSpring = (parameters) => new Spring(parameters);




/**
 * @param {Event} e
 */
const preventDefault = e => {
  if (e.cancelable) e.preventDefault();
};

class DOMProxy {
  /** @param {Object} el */
  constructor(el) {
    this.el = el;
    this.zIndex = 0;
    this.parentElement = null;
    this.classList = {
      add: noop,
      remove: noop,
    };
  }

  get x() { return this.el.x || 0 };
  set x(v) { this.el.x = v; };

  get y() { return this.el.y || 0 };
  set y(v) { this.el.y = v; };

  get width() { return this.el.width || 0 };
  set width(v) { this.el.width = v; };

  get height() { return this.el.height || 0 };
  set height(v) { this.el.height = v; };

  getBoundingClientRect() {
    return {
      top: this.y,
      right: this.x,
      bottom: this.y + this.height,
      left: this.x + this.width,
    }
  }
}

class Transforms {
  /**
   * @param {DOMTarget|DOMProxy} $el
   */
  constructor($el) {
    this.$el = $el;
    this.inlineTransforms = [];
    this.point = new DOMPoint();
    this.inversedMatrix = this.getMatrix().inverse();
  }

  /**
   * @param {Number} x
   * @param {Number} y
   * @return {DOMPoint}
   */
  normalizePoint(x, y) {
    this.point.x = x;
    this.point.y = y;
    return this.point.matrixTransform(this.inversedMatrix);
  }

  /**
   * @callback TraverseParentsCallback
   * @param {DOMTarget} $el
   * @param {Number} i
   */

  /**
   * @param {TraverseParentsCallback} cb
   */
  traverseUp(cb) {
    let $el = /** @type {DOMTarget|Document} */(this.$el.parentElement), i = 0;
    while ($el && $el !== doc) {
      cb(/** @type {DOMTarget} */($el), i);
      $el = /** @type {DOMTarget} */($el.parentElement);
      i++;
    }
  }

  getMatrix() {
    const matrix = new DOMMatrix();
    this.traverseUp($el => {
      const transformValue = getComputedStyle($el).transform;
      if (transformValue) {
        const elMatrix = new DOMMatrix(transformValue);
        matrix.preMultiplySelf(elMatrix);
      }
    });
    return matrix;
  }

  remove() {
    this.traverseUp(($el, i) => {
      this.inlineTransforms[i] = $el.style.transform;
      $el.style.transform = 'none';
    });
  }

  revert() {
    this.traverseUp(($el, i) => {
      const ct = this.inlineTransforms[i];
      if (ct === '') {
        $el.style.removeProperty('transform');
      } else {
        $el.style.transform = ct;
      }
    });
  }
}

/**
 * @template {Array<Number>|DOMTargetSelector|String|Number|Boolean|Function|DraggableCursorParams} T
 * @param {T | ((draggable: Draggable) => T)} value
 * @param {Draggable} draggable
 * @return {T}
 */
const parseDraggableFunctionParameter = (value, draggable) => value && isFnc(value) ? /** @type {Function} */(value)(draggable) : value;

let zIndex = 0;

class Draggable {
  /**
   * @param {TargetsParam} target
   * @param {DraggableParams} [parameters]
   */
  constructor(target, parameters = {}) {
    if (!target) return;
    if (globals.scope) globals.scope.revertibles.push(this);
    const paramX = parameters.x;
    const paramY = parameters.y;
    const trigger = parameters.trigger;
    const modifier = parameters.modifier;
    const ease = parameters.releaseEase;
    const customEase = ease && parseEasings(ease);
    const hasSpring = !isUnd(ease) && !isUnd(/** @type {Spring} */(ease).ease);
    const xProp = /** @type {String} */(isObj(paramX) && !isUnd(/** @type {Object} */(paramX).mapTo) ? /** @type {Object} */(paramX).mapTo : 'translateX');
    const yProp = /** @type {String} */(isObj(paramY) && !isUnd(/** @type {Object} */(paramY).mapTo) ? /** @type {Object} */(paramY).mapTo : 'translateY');
    const container = parseDraggableFunctionParameter(parameters.container, this);
    this.containerArray = isArr(container) ? container : null;
    this.$container = /** @type {HTMLElement} */(container && !this.containerArray ? parseTargets(/** @type {DOMTarget} */(container))[0] : doc.body);
    this.useWin = this.$container === doc.body;
    /** @type {Window | HTMLElement} */
    this.$scrollContainer = this.useWin ? win : this.$container;
    this.$target = /** @type {HTMLElement} */(isObj(target) ? new DOMProxy(target) : parseTargets(target)[0]);
    this.$trigger = /** @type {HTMLElement} */(parseTargets(trigger ? trigger : target)[0]);
    this.fixed = getTargetValue(this.$target, 'position') === 'fixed';
    // Refreshable parameters
    this.isFinePointer = true;
    /** @type {[Number, Number, Number, Number]} */
    this.containerPadding = [0, 0, 0, 0];
    /** @type {Number} */
    this.containerFriction = 0;
    /** @type {Number} */
    this.releaseContainerFriction = 0;
    /** @type {Number|Array<Number>} */
    this.snapX = 0;
    /** @type {Number|Array<Number>} */
    this.snapY = 0;
    /** @type {Number} */
    this.scrollSpeed = 0;
    /** @type {Number} */
    this.scrollThreshold = 0;
    /** @type {Number} */
    this.dragSpeed = 0;
    /** @type {Number} */
    this.maxVelocity = 0;
    /** @type {Number} */
    this.minVelocity = 0;
    /** @type {Number} */
    this.velocityMultiplier = 0;
    /** @type {Boolean|DraggableCursorParams} */
    this.cursor = false;
    /** @type {Spring} */
    this.releaseXSpring = hasSpring ? /** @type {Spring} */(ease) : createSpring({
      mass: setValue(parameters.releaseMass, 1),
      stiffness: setValue(parameters.releaseStiffness, 80),
      damping: setValue(parameters.releaseDamping, 20),
    });
    /** @type {Spring} */
    this.releaseYSpring = hasSpring ? /** @type {Spring} */(ease) : createSpring({
      mass: setValue(parameters.releaseMass, 1),
      stiffness: setValue(parameters.releaseStiffness, 80),
      damping: setValue(parameters.releaseDamping, 20),
    });
    /** @type {EasingFunction} */
    this.releaseEase = customEase || eases.outQuint;
    /** @type {Boolean} */
    this.hasReleaseSpring = hasSpring;
    /** @type {Callback<this>} */
    this.onGrab = parameters.onGrab || noop;
    /** @type {Callback<this>} */
    this.onDrag = parameters.onDrag || noop;
    /** @type {Callback<this>} */
    this.onRelease = parameters.onRelease || noop;
    /** @type {Callback<this>} */
    this.onUpdate = parameters.onUpdate || noop;
    /** @type {Callback<this>} */
    this.onSettle = parameters.onSettle || noop;
    /** @type {Callback<this>} */
    this.onSnap = parameters.onSnap || noop;
    /** @type {Callback<this>} */
    this.onResize = parameters.onResize || noop;
    /** @type {Callback<this>} */
    this.onAfterResize = parameters.onAfterResize || noop;
    /** @type {[Number, Number]} */
    this.disabled = [0, 0];
    /** @type {AnimatableParams} */
    const animatableParams = {};
    if (modifier) animatableParams.modifier = modifier;
    if (isUnd(paramX) || paramX === true) {
      animatableParams[xProp] = 0;
    } else if (isObj(paramX)) {
      const paramXObject = /** @type {DraggableAxisParam} */(paramX);
      const animatableXParams = {};
      if (paramXObject.modifier) animatableXParams.modifier = paramXObject.modifier;
      if (paramXObject.composition) animatableXParams.composition = paramXObject.composition;
      animatableParams[xProp] = animatableXParams;
    } else if (paramX === false) {
      animatableParams[xProp] = 0;
      this.disabled[0] = 1;
    }
    if (isUnd(paramY) || paramY === true) {
      animatableParams[yProp] = 0;
    } else if (isObj(paramY)) {
      const paramYObject = /** @type {DraggableAxisParam} */(paramY);
      const animatableYParams = {};
      if (paramYObject.modifier) animatableYParams.modifier = paramYObject.modifier;
      if (paramYObject.composition) animatableYParams.composition = paramYObject.composition;
      animatableParams[yProp] = animatableYParams;
    } else if (paramY === false) {
      animatableParams[yProp] = 0;
      this.disabled[1] = 1;
    }
    /** @type {AnimatableObject} */
    this.animate = /** @type {AnimatableObject} */(new Animatable(this.$target, animatableParams));
    // Internal props
    this.xProp = xProp;
    this.yProp = yProp;
    this.destX = 0;
    this.destY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.scroll = {x: 0, y: 0};
    /** @type {[Number, Number, Number, Number]} */
    this.coords = [this.x, this.y, 0, 0]; // x, y, temp x, temp y
    /** @type {[Number, Number]} */
    this.snapped = [0, 0]; // x, y
    /** @type {[Number, Number, Number, Number, Number, Number, Number, Number]} */
    this.pointer = [0, 0, 0, 0, 0, 0, 0, 0]; // x1, y1, x2, y2, temp x1, temp y1, temp x2, temp y2
    /** @type {[Number, Number]} */
    this.scrollView = [0, 0]; // w, h
    /** @type {[Number, Number, Number, Number]} */
    this.dragArea = [0, 0, 0, 0]; // x, y, w, h
    /** @type {[Number, Number, Number, Number]} */
    this.containerBounds = [-1e12, maxValue, maxValue, -1e12]; // t, r, b, l
    /** @type {[Number, Number, Number, Number]} */
    this.scrollBounds = [0, 0, 0, 0]; // t, r, b, l
    /** @type {[Number, Number, Number, Number]} */
    this.targetBounds = [0, 0, 0, 0]; // t, r, b, l
    /** @type {[Number, Number]} */
    this.window = [0, 0]; // w, h
    /** @type {[Number, Number, Number]} */
    this.velocityStack = [0, 0, 0];
    /** @type {Number} */
    this.velocityStackIndex = 0;
    /** @type {Number} */
    this.velocityTime = now();
    /** @type {Number} */
    this.velocity = 0;
    /** @type {Number} */
    this.angle = 0;
    /** @type {JSAnimation} */
    this.cursorStyles = null;
    /** @type {JSAnimation} */
    this.triggerStyles = null;
    /** @type {JSAnimation} */
    this.bodyStyles = null;
    /** @type {JSAnimation} */
    this.targetStyles = null;
    /** @type {JSAnimation} */
    this.touchActionStyles = null;
    this.transforms = new Transforms(this.$target);
    this.overshootCoords = { x: 0, y: 0 };
    this.overshootXTicker = new Timer({ autoplay: false }, null, 0).init();
    this.overshootYTicker = new Timer({ autoplay: false }, null, 0).init();
    this.updateTicker = new Timer({ autoplay: false }, null, 0).init();
    this.overshootXTicker.onUpdate = () => {
      if (this.disabled[0]) return;
      this.updated = true;
      this.manual = true;
      this.animate[this.xProp](this.overshootCoords.x, 0);
    };
    this.overshootXTicker.onComplete = () => {
      if (this.disabled[0]) return;
      this.manual = false;
      this.animate[this.xProp](this.overshootCoords.x, 0);
    };
    this.overshootYTicker.onUpdate = () => {
      if (this.disabled[1]) return;
      this.updated = true;
      this.manual = true;
      this.animate[this.yProp](this.overshootCoords.y, 0);
    };
    this.overshootYTicker.onComplete = () => {
      if (this.disabled[1]) return;
      this.manual = false;
      this.animate[this.yProp](this.overshootCoords.y, 0);
    };
    this.updateTicker.onUpdate = () => this.update();
    this.contained = !isUnd(container);
    this.manual = false;
    this.grabbed = false;
    this.dragged = false;
    this.updated = false;
    this.released = false;
    this.canScroll = false;
    this.enabled = false;
    this.initialized = false;
    this.activeProp = this.disabled[1] ? xProp : yProp;
    this.animate.animations[this.activeProp].onRender = () => {
      const hasUpdated = this.updated;
      const hasMoved = this.grabbed && hasUpdated;
      const hasReleased = !hasMoved && this.released;
      const x = this.x;
      const y = this.y;
      const dx = x - this.coords[2];
      const dy = y - this.coords[3];
      this.deltaX = dx;
      this.deltaY = dy;
      this.coords[2] = x;
      this.coords[3] = y;
      if (hasUpdated) {
        this.onUpdate(this);
      }
      if (!hasReleased) {
        this.updated = false;
      } else {
        this.computeVelocity(dx, dy);
        this.angle = atan2(dy, dx);
      }
    };
    this.animate.animations[this.activeProp].onComplete = () => {
      if ((!this.grabbed && this.released)) {
        // Set eleased to false before calling onSettle to avoid recursion
        this.released = false;
      }
      if (!this.manual) {
        this.deltaX = 0;
        this.deltaY = 0;
        this.velocity = 0;
        this.velocityStack[0] = 0;
        this.velocityStack[1] = 0;
        this.velocityStack[2] = 0;
        this.velocityStackIndex = 0;
        this.onSettle(this);
      }
    };
    this.resizeTicker = new Timer({
      autoplay: false,
      duration: 150 * globals.timeScale,
      onComplete: () => {
        this.onResize(this);
        this.refresh();
        this.onAfterResize(this);
      },
    }).init();
    this.parameters = parameters;
    this.resizeObserver = new ResizeObserver(() => {
      if (this.initialized) {
        this.resizeTicker.restart();
      } else {
        this.initialized = true;
      }
    });
    this.enable();
    this.refresh();
    this.resizeObserver.observe(this.$container);
    if (!isObj(target)) this.resizeObserver.observe(this.$target);
  }

  /**
   * @param  {Number} dx
   * @param  {Number} dy
   * @return {Number}
   */
  computeVelocity(dx, dy) {
    const prevTime = this.velocityTime;
    const curTime = now();
    const elapsed = curTime - prevTime;
    if (elapsed < 17) return this.velocity;
    this.velocityTime = curTime;
    const velocityStack = this.velocityStack;
    const vMul = this.velocityMultiplier;
    const minV = this.minVelocity;
    const maxV = this.maxVelocity;
    const vi = this.velocityStackIndex;
    velocityStack[vi] = round(clamp((sqrt(dx * dx + dy * dy) / elapsed) * vMul, minV, maxV), 5);
    const velocity = max(velocityStack[0], velocityStack[1], velocityStack[2]);
    this.velocity = velocity;
    this.velocityStackIndex = (vi + 1) % 3;
    return velocity;
  }

  /**
   * @param {Number}  x
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */
  setX(x, muteUpdateCallback = false) {
    if (this.disabled[0]) return;
    const v = round(x, 5);
    this.overshootXTicker.pause();
    this.manual = true;
    this.updated = !muteUpdateCallback;
    this.destX = v;
    this.snapped[0] = snap(v, this.snapX);
    this.animate[this.xProp](v, 0);
    this.manual = false;
    return this;
  }

  /**
   * @param {Number}  y
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */
  setY(y, muteUpdateCallback = false) {
    if (this.disabled[1]) return;
    const v = round(y, 5);
    this.overshootYTicker.pause();
    this.manual = true;
    this.updated = !muteUpdateCallback;
    this.destY = v;
    this.snapped[1] = snap(v, this.snapY);
    this.animate[this.yProp](v, 0);
    this.manual = false;
    return this;
  }

  get x() {
    return round(/** @type {Number} */(this.animate[this.xProp]()), globals.precision);
  }

  set x(x) {
    this.setX(x, false);
  }

  get y() {
    return round(/** @type {Number} */(this.animate[this.yProp]()), globals.precision);
  }

  set y(y) {
    this.setY(y, false);
  }

  get progressX() {
    return mapRange(this.x, this.containerBounds[3], this.containerBounds[1], 0, 1);
  }

  set progressX(x) {
    this.setX(mapRange(x, 0, 1, this.containerBounds[3], this.containerBounds[1]), false);
  }

  get progressY() {
    return mapRange(this.y, this.containerBounds[0], this.containerBounds[2], 0, 1);
  }

  set progressY(y) {
    this.setY(mapRange(y, 0, 1, this.containerBounds[0], this.containerBounds[2]), false);
  }

  updateScrollCoords() {
    const sx = round(this.useWin ? win.scrollX : this.$container.scrollLeft, 0);
    const sy = round(this.useWin ? win.scrollY : this.$container.scrollTop, 0);
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    const threshold = this.scrollThreshold;
    this.scroll.x = sx;
    this.scroll.y = sy;
    this.scrollBounds[0] = sy - this.targetBounds[0] + cpt - threshold;
    this.scrollBounds[1] = sx - this.targetBounds[1] - cpr + threshold;
    this.scrollBounds[2] = sy - this.targetBounds[2] - cpb + threshold;
    this.scrollBounds[3] = sx - this.targetBounds[3] + cpl - threshold;
  }

  updateBoundingValues() {
    const $container = this.$container;
    const cx = this.x;
    const cy = this.y;
    const cx2 = this.coords[2];
    const cy2 =  this.coords[3];
    // Prevents interfering with the scroll area in cases the target is outside of the container
    // Make sure the temp coords are also adjuset to prevents wrong delta calculation on updates
    this.coords[2] = 0;
    this.coords[3] = 0;
    this.setX(0, true);
    this.setY(0, true);
    this.transforms.remove();
    const iw = this.window[0] = win.innerWidth;
    const ih = this.window[1] = win.innerHeight;
    const uw = this.useWin;
    const sw = $container.scrollWidth;
    const sh = $container.scrollHeight;
    const fx = this.fixed;
    const transformContainerRect = $container.getBoundingClientRect();
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    this.dragArea[0] = uw ? 0 : transformContainerRect.left;
    this.dragArea[1] = uw ? 0 : transformContainerRect.top;
    this.scrollView[0] = uw ? clamp(sw, iw, sw) : sw;
    this.scrollView[1] = uw ? clamp(sh, ih, sh) : sh;
    this.updateScrollCoords();
    const { width, height, left, top, right, bottom } = $container.getBoundingClientRect();
    this.dragArea[2] = round(uw ? clamp(width, iw, iw) : width, 0);
    this.dragArea[3] = round(uw ? clamp(height, ih, ih) : height, 0);
    const containerOverflow = getTargetValue($container, 'overflow');
    const visibleOverflow = containerOverflow === 'visible';
    const hiddenOverflow = containerOverflow === 'hidden';
    this.canScroll = fx ? false :
      this.contained &&
      (($container === doc.body && visibleOverflow) || (!hiddenOverflow && !visibleOverflow)) &&
      (sw > this.dragArea[2] + cpl - cpr || sh > this.dragArea[3] + cpt - cpb) &&
      (!this.containerArray || (this.containerArray && !isArr(this.containerArray)));
    if (this.contained) {
      const sx = this.scroll.x;
      const sy = this.scroll.y;
      const canScroll = this.canScroll;
      const targetRect = this.$target.getBoundingClientRect();
      const hiddenLeft = canScroll ? uw ? 0 : $container.scrollLeft : 0;
      const hiddenTop = canScroll ? uw ? 0 : $container.scrollTop : 0;
      const hiddenRight = canScroll ? this.scrollView[0] - hiddenLeft - width : 0;
      const hiddenBottom = canScroll ? this.scrollView[1] - hiddenTop - height : 0;
      this.targetBounds[0] = round((targetRect.top + sy) - (uw ? 0 : top), 0);
      this.targetBounds[1] = round((targetRect.right + sx) - (uw ? iw : right), 0);
      this.targetBounds[2] = round((targetRect.bottom + sy) - (uw ? ih : bottom), 0);
      this.targetBounds[3] = round((targetRect.left + sx) - (uw ? 0 : left), 0);
      if (this.containerArray) {
        this.containerBounds[0] = this.containerArray[0] + cpt;
        this.containerBounds[1] = this.containerArray[1] - cpr;
        this.containerBounds[2] = this.containerArray[2] - cpb;
        this.containerBounds[3] = this.containerArray[3] + cpl;
      } else {
        this.containerBounds[0] = -round(targetRect.top - (fx ? clamp(top, 0, ih) : top) + hiddenTop - cpt, 0);
        this.containerBounds[1] = -round(targetRect.right - (fx ? clamp(right, 0, iw) : right) - hiddenRight + cpr, 0);
        this.containerBounds[2] = -round(targetRect.bottom - (fx ? clamp(bottom, 0, ih) : bottom) - hiddenBottom + cpb, 0);
        this.containerBounds[3] = -round(targetRect.left - (fx ? clamp(left, 0, iw) : left) + hiddenLeft - cpl, 0);
      }
    }
    this.transforms.revert();
    // Restore coordinates
    this.coords[2] = cx2;
    this.coords[3] = cy2;
    this.setX(cx, true);
    this.setY(cy, true);
  }

  /**
   * Returns 0 if not OB, 1 if x is OB, 2 if y is OB, 3 if both x and y are OB
   *
   * @param  {Array} bounds
   * @param  {Number} x
   * @param  {Number} y
   * @return {Number}
   */
  isOutOfBounds(bounds, x, y) {
    if (!this.contained) return 0;
    const [ bt, br, bb, bl ] = bounds;
    const [ dx, dy ] = this.disabled;
    const obx = !dx && x < bl || !dx && x > br;
    const oby = !dy && y < bt || !dy && y > bb;
    return obx && !oby ? 1 : !obx && oby ? 2 : obx && oby ? 3 : 0;
  }

  refresh() {
    const params = this.parameters;
    const paramX = params.x;
    const paramY = params.y;
    const container = parseDraggableFunctionParameter(params.container, this);
    const cp = parseDraggableFunctionParameter(params.containerPadding, this) || 0;
    const containerPadding = /** @type {[Number, Number, Number, Number]} */(isArr(cp) ? cp : [cp, cp, cp, cp]);
    const cx = this.x;
    const cy = this.y;
    const parsedCursorStyles = parseDraggableFunctionParameter(params.cursor, this);
    const cursorStyles = { onHover: 'grab', onGrab: 'grabbing' };
    if (parsedCursorStyles) {
      const { onHover, onGrab } = /** @type {DraggableCursorParams} */(parsedCursorStyles);
      if (onHover) cursorStyles.onHover = onHover;
      if (onGrab) cursorStyles.onGrab = onGrab;
    }
    this.containerArray = isArr(container) ? container : null;
    this.$container = /** @type {HTMLElement} */(container && !this.containerArray ? parseTargets(/** @type {DOMTarget} */(container))[0] : doc.body);
    this.useWin = this.$container === doc.body;
    /** @type {Window | HTMLElement} */
    this.$scrollContainer = this.useWin ? win : this.$container;
    this.isFinePointer = matchMedia('(pointer:fine)').matches;
    this.containerPadding = setValue(containerPadding, [0, 0, 0, 0]);
    this.containerFriction = clamp(setValue(parseDraggableFunctionParameter(params.containerFriction, this), .8), 0, 1);
    this.releaseContainerFriction = clamp(setValue(parseDraggableFunctionParameter(params.releaseContainerFriction, this), this.containerFriction), 0, 1);
    this.snapX = parseDraggableFunctionParameter(isObj(paramX) && !isUnd(paramX.snap) ? paramX.snap : params.snap, this);
    this.snapY = parseDraggableFunctionParameter(isObj(paramY) && !isUnd(paramY.snap) ? paramY.snap : params.snap, this);
    this.scrollSpeed = setValue(parseDraggableFunctionParameter(params.scrollSpeed, this), 1.5);
    this.scrollThreshold = setValue(parseDraggableFunctionParameter(params.scrollThreshold, this), 20);
    this.dragSpeed = setValue(parseDraggableFunctionParameter(params.dragSpeed, this), 1);
    this.minVelocity = setValue(parseDraggableFunctionParameter(params.minVelocity, this), 0);
    this.maxVelocity = setValue(parseDraggableFunctionParameter(params.maxVelocity, this), 50);
    this.velocityMultiplier = setValue(parseDraggableFunctionParameter(params.velocityMultiplier, this), 1);
    this.cursor = parsedCursorStyles === false ? false : cursorStyles;
    this.updateBoundingValues();

    // const ob = this.isOutOfBounds(this.containerBounds, this.x, this.y);
    // if (ob === 1 || ob === 3) this.progressX = px;
    // if (ob === 2 || ob === 3) this.progressY = py;

    // if (this.initialized && this.contained) {
    //   if (this.progressX !== px) this.progressX = px;
    //   if (this.progressY !== py) this.progressY = py;
    // }

    const [ bt, br, bb, bl ] = this.containerBounds;
    this.setX(clamp(cx, bl, br), true);
    this.setY(clamp(cy, bt, bb), true);
  }

  update() {
    this.updateScrollCoords();
    if (this.canScroll) {
      const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
      const [ sw, sh ] = this.scrollView;
      const daw = this.dragArea[2];
      const dah = this.dragArea[3];
      const csx = this.scroll.x;
      const csy = this.scroll.y;
      const nsw = this.$container.scrollWidth;
      const nsh = this.$container.scrollHeight;
      const csw = this.useWin ? clamp(nsw, this.window[0], nsw) : nsw;
      const csh = this.useWin ? clamp(nsh, this.window[1], nsh) : nsh;
      const swd = sw - csw;
      const shd = sh - csh;
      // Handle cases where the scrollarea dimensions changes during drag
      if (this.dragged && swd > 0) {
        this.coords[0] -= swd;
        this.scrollView[0] = csw;
      }
      if (this.dragged && shd > 0) {
        this.coords[1] -= shd;
        this.scrollView[1] = csh;
      }
      // Handle autoscroll when target is at the edges of the scroll bounds
      const s = this.scrollSpeed * 10;
      const threshold = this.scrollThreshold;
      const [ x, y ] = this.coords;
      const [ st, sr, sb, sl ] = this.scrollBounds;
      const t = round(clamp((y - st + cpt) / threshold, -1, 0) * s, 0);
      const r = round(clamp((x - sr - cpr) / threshold, 0, 1) * s, 0);
      const b = round(clamp((y - sb - cpb) / threshold, 0, 1) * s, 0);
      const l = round(clamp((x - sl + cpl) / threshold, -1, 0) * s, 0);
      if (t || b || l || r) {
        const [nx, ny] = this.disabled;
        let scrollX = csx;
        let scrollY = csy;
        if (!nx) {
          scrollX = round(clamp(csx + (l || r), 0, sw - daw), 0);
          this.coords[0] -= csx - scrollX;
        }
        if (!ny) {
          scrollY = round(clamp(csy + (t || b), 0, sh - dah), 0);
          this.coords[1] -= csy - scrollY;
        }
        // Note: Safari mobile requires to use different scroll methods depending if using the window or not
        if (this.useWin) {
          this.$scrollContainer.scrollBy(-(csx - scrollX), -(csy - scrollY));
        } else {
          this.$scrollContainer.scrollTo(scrollX, scrollY);
        }
      }
    }
    const [ ct, cr, cb, cl ] = this.containerBounds;
    const [ px1, py1, px2, py2, px3, py3 ] = this.pointer;
    this.coords[0] += (px1 - px3) * this.dragSpeed;
    this.coords[1] += (py1 - py3) * this.dragSpeed;
    this.pointer[4] = px1;
    this.pointer[5] = py1;
    const [ cx, cy ] = this.coords;
    const [ sx, sy ] = this.snapped;
    const cf = (1 - this.containerFriction) * this.dragSpeed;
    this.setX(cx > cr ? cr + (cx - cr) * cf : cx < cl ? cl + (cx - cl) * cf : cx, false);
    this.setY(cy > cb ? cb + (cy - cb) * cf : cy < ct ? ct + (cy - ct) * cf : cy, false);
    this.computeVelocity(px1 - px3, py1 - py3);
    this.angle = atan2(py1 - py2, px1 - px2);
    const [ nsx, nsy ] = this.snapped;
    if (nsx !== sx && this.snapX || nsy !== sy && this.snapY) {
      this.onSnap(this);
    }
  }

  stop() {
    this.updateTicker.pause();
    this.overshootXTicker.pause();
    this.overshootYTicker.pause();
    // Pauses the in bounds onRelease animations
    for (let prop in this.animate.animations) this.animate.animations[prop].pause();
    remove(this, null, 'x');
    remove(this, null, 'y');
    remove(this, null, 'progressX');
    remove(this, null, 'progressY');
    remove(this.scroll); // Removes any active animations on the container scroll
    remove(this.overshootCoords); // Removes active overshoot animations
    return this;
  }

  /**
   * @param {Number} [duration]
   * @param {Number} [gap]
   * @param {EasingParam} [ease]
   * @return {this}
   */
  scrollInView(duration, gap = 0, ease = eases.inOutQuad) {
    this.updateScrollCoords();
    const x = this.destX;
    const y = this.destY;
    const scroll = this.scroll;
    const scrollBounds = this.scrollBounds;
    const canScroll = this.canScroll;
    if (!this.containerArray && this.isOutOfBounds(scrollBounds, x, y)) {
      const [ st, sr, sb, sl ] = scrollBounds;
      const t = round(clamp(y - st, -1e12, 0), 0);
      const r = round(clamp(x - sr, 0, maxValue), 0);
      const b = round(clamp(y - sb, 0, maxValue), 0);
      const l = round(clamp(x - sl, -1e12, 0), 0);
      new JSAnimation(scroll, {
        x: round(scroll.x + (l ? l - gap : r ? r + gap : 0), 0),
        y: round(scroll.y + (t ? t - gap : b ? b + gap : 0), 0),
        duration: isUnd(duration) ? 350 * globals.timeScale : duration,
        ease,
        onUpdate: () => {
          this.canScroll = false;
          this.$scrollContainer.scrollTo(scroll.x, scroll.y);
        }
      }).init().then(() => {
        this.canScroll = canScroll;
      });
    }
    return this;
  }

  handleHover() {
    if (this.isFinePointer && this.cursor && !this.cursorStyles) {
      this.cursorStyles = setTargetValues(this.$trigger, {
        cursor: /** @type {DraggableCursorParams} */(this.cursor).onHover
      });
    }
  }

  /**
   * @param  {Number} [duration]
   * @param  {Number} [gap]
   * @param  {EasingParam} [ease]
   * @return {this}
   */
  animateInView(duration, gap = 0, ease = eases.inOutQuad) {
    this.stop();
    this.updateBoundingValues();
    const x = this.x;
    const y = this.y;
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    const bt = this.scroll.y - this.targetBounds[0] + cpt + gap;
    const br = this.scroll.x - this.targetBounds[1] - cpr - gap;
    const bb = this.scroll.y - this.targetBounds[2] - cpb - gap;
    const bl = this.scroll.x - this.targetBounds[3] + cpl + gap;
    const ob = this.isOutOfBounds([bt, br, bb, bl], x, y);
    if (ob) {
      const [ disabledX, disabledY ] = this.disabled;
      const destX = clamp(snap(x, this.snapX), bl, br);
      const destY = clamp(snap(y, this.snapY), bt, bb);
      const dur = isUnd(duration) ? 350 * globals.timeScale : duration;
      if (!disabledX && (ob === 1 || ob === 3)) this.animate[this.xProp](destX, dur, ease);
      if (!disabledY && (ob === 2 || ob === 3)) this.animate[this.yProp](destY, dur, ease);
    }
    return this;
  }

  /**
   * @param {MouseEvent|TouchEvent} e
   */
  handleDown(e) {
    const $eTarget = /** @type {HTMLElement} */(e.target);
    if (this.grabbed || /** @type {HTMLInputElement}  */($eTarget).type === 'range') return;

    e.stopPropagation();

    this.grabbed = true;
    this.released = false;
    this.stop();
    this.updateBoundingValues();
    const touches = /** @type {TouchEvent} */(e).changedTouches;
    const eventX = touches ? touches[0].clientX : /** @type {MouseEvent} */(e).clientX;
    const eventY = touches ? touches[0].clientY : /** @type {MouseEvent} */(e).clientY;
    const { x, y } = this.transforms.normalizePoint(eventX, eventY);
    const [ ct, cr, cb, cl ] = this.containerBounds;
    const cf = (1 - this.containerFriction) * this.dragSpeed;
    const cx = this.x;
    const cy = this.y;
    this.coords[0] = this.coords[2] = !cf ? cx : cx > cr ? cr + (cx - cr) / cf : cx < cl ? cl + (cx - cl) / cf : cx;
    this.coords[1] = this.coords[3] = !cf ? cy : cy > cb ? cb + (cy - cb) / cf : cy < ct ? ct + (cy - ct) / cf : cy;
    this.pointer[0] = x;
    this.pointer[1] = y;
    this.pointer[2] = x;
    this.pointer[3] = y;
    this.pointer[4] = x;
    this.pointer[5] = y;
    this.pointer[6] = x;
    this.pointer[7] = y;
    this.deltaX = 0;
    this.deltaY = 0;
    this.velocity = 0;
    this.velocityStack[0] = 0;
    this.velocityStack[1] = 0;
    this.velocityStack[2] = 0;
    this.velocityStackIndex = 0;
    this.angle = 0;
    if (this.targetStyles) {
      this.targetStyles.revert();
      this.targetStyles = null;
    }
    const z = /** @type {Number} */(getTargetValue(this.$target, 'zIndex', false));
    zIndex = (z > zIndex ? z : zIndex) + 1;
    this.targetStyles = setTargetValues(this.$target, { zIndex });
    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }
    if (this.cursorStyles) {
      this.cursorStyles.revert();
      this.cursorStyles = null;
    }
    if (this.isFinePointer && this.cursor) {
      this.bodyStyles = setTargetValues(doc.body, {
        cursor: /** @type {DraggableCursorParams} */(this.cursor).onGrab
      });
    }
    this.scrollInView(100, 0, eases.out(3));
    this.onGrab(this);

    doc.addEventListener('touchmove', this);
    doc.addEventListener('touchend', this);
    doc.addEventListener('touchcancel', this);
    doc.addEventListener('mousemove', this);
    doc.addEventListener('mouseup', this);
    doc.addEventListener('selectstart', this);
  }

  /**
   * @param {MouseEvent|TouchEvent} e
   */
  handleMove(e) {
    if (!this.grabbed) return;
    const touches = /** @type {TouchEvent} */(e).changedTouches;
    const eventX = touches ? touches[0].clientX : /** @type {MouseEvent} */(e).clientX;
    const eventY = touches ? touches[0].clientY : /** @type {MouseEvent} */(e).clientY;
    const { x, y } = this.transforms.normalizePoint(eventX, eventY);
    const movedX = x - this.pointer[6];
    const movedY = y - this.pointer[7];

    let $parent = /** @type {HTMLElement} */(e.target);
    let isAtTop = false;
    let isAtBottom = false;
    let canTouchScroll = false;

    while (touches && $parent && $parent !== this.$trigger) {
      const overflowY = getTargetValue($parent, 'overflow-y');
      if (overflowY !== 'hidden' && overflowY !== 'visible') {
        const { scrollTop, scrollHeight, clientHeight } = $parent;
        if (scrollHeight > clientHeight) {
          canTouchScroll = true;
          isAtTop = scrollTop <= 3;
          isAtBottom = scrollTop >= (scrollHeight - clientHeight) - 3;
          break;
        }
      }
      $parent = /** @type {HTMLElement} */($parent.parentNode);
    }

    if (canTouchScroll && ((!isAtTop && !isAtBottom) || (isAtTop && movedY < 0) || (isAtBottom && movedY > 0))) {

      this.pointer[0] = x;
      this.pointer[1] = y;
      this.pointer[2] = x;
      this.pointer[3] = y;
      this.pointer[4] = x;
      this.pointer[5] = y;
      this.pointer[6] = x;
      this.pointer[7] = y;

    } else {

      preventDefault(e);

      // Needed to prevents click on handleUp
      if (!this.triggerStyles) this.triggerStyles = setTargetValues(this.$trigger, { pointerEvents: 'none' });
      // Needed to prevent page scroll while dragging on touch devvice
      this.$trigger.addEventListener('touchstart', preventDefault, { passive: false });
      this.$trigger.addEventListener('touchmove', preventDefault, { passive: false });
      this.$trigger.addEventListener('touchend', preventDefault);


      if ((!this.disabled[0] && abs(movedX) > 3) || (!this.disabled[1] && abs(movedY) > 3)) {

        this.updateTicker.resume();
        this.pointer[2] = this.pointer[0];
        this.pointer[3] = this.pointer[1];
        this.pointer[0] = x;
        this.pointer[1] = y;
        this.dragged = true;
        this.released = false;
        this.onDrag(this);
      }
    }
  }

  handleUp() {

    if (!this.grabbed) return;

    this.updateTicker.pause();

    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }

    if (this.bodyStyles) {
      this.bodyStyles.revert();
      this.bodyStyles = null;
    }

    const [ disabledX, disabledY ] = this.disabled;
    const [ px1, py1, px2, py2, px3, py3 ] = this.pointer;
    const [ ct, cr, cb, cl ] = this.containerBounds;
    const [ sx, sy ] = this.snapped;
    const springX = this.releaseXSpring;
    const springY = this.releaseYSpring;
    const releaseEase = this.releaseEase;
    const hasReleaseSpring = this.hasReleaseSpring;
    const overshootCoords = this.overshootCoords;
    const cx = this.x;
    const cy = this.y;
    const pv = this.computeVelocity(px1 - px3, py1 - py3);
    const pa = this.angle = atan2(py1 - py2, px1 - px2);
    const ds = pv * 150;
    const cf = (1 - this.releaseContainerFriction) * this.dragSpeed;
    const nx = cx + (cos(pa) * ds);
    const ny = cy + (sin(pa) * ds);
    const bx = nx > cr ? cr + (nx - cr) * cf : nx < cl ? cl + (nx - cl) * cf : nx;
    const by = ny > cb ? cb + (ny - cb) * cf : ny < ct ? ct + (ny - ct) * cf : ny;
    const dx = this.destX = clamp(round(snap(bx, this.snapX), 5), cl, cr);
    const dy = this.destY = clamp(round(snap(by, this.snapY), 5), ct, cb);
    const ob = this.isOutOfBounds(this.containerBounds, nx, ny);

    let durationX = 0;
    let durationY = 0;
    let easeX = releaseEase;
    let easeY = releaseEase;
    let longestReleaseDuration = 0;

    overshootCoords.x = cx;
    overshootCoords.y = cy;

    if (!disabledX) {
      const directionX = dx === cr ? cx > cr ? -1 : 1 : cx < cl ? -1 : 1;
      const distanceX = round(cx - dx, 0);
      springX.velocity = disabledY && hasReleaseSpring ? distanceX ? (ds * directionX) / abs(distanceX) : 0 : pv;
      const { ease, duration, restDuration } = springX;
      durationX = cx === dx ? 0 : hasReleaseSpring ? duration : duration - (restDuration * globals.timeScale);
      if (hasReleaseSpring) easeX = ease;
      if (durationX > longestReleaseDuration) longestReleaseDuration = durationX;
    }

    if (!disabledY) {
      const directionY = dy === cb ? cy > cb ? -1 : 1 : cy < ct ? -1 : 1;
      const distanceY = round(cy - dy, 0);
      springY.velocity = disabledX && hasReleaseSpring ? distanceY ? (ds * directionY) / abs(distanceY) : 0 : pv;
      const { ease, duration, restDuration } = springY;
      durationY = cy === dy ? 0 : hasReleaseSpring ? duration : duration - (restDuration * globals.timeScale);
      if (hasReleaseSpring) easeY = ease;
      if (durationY > longestReleaseDuration) longestReleaseDuration = durationY;
    }

    if (!hasReleaseSpring && ob && cf && (durationX || durationY)) {

        const composition = compositionTypes.blend;

        new JSAnimation(overshootCoords, {
          x: { to: bx, duration: durationX * .65 },
          y: { to: by, duration: durationY * .65 },
          ease: releaseEase,
          composition,
        }).init();

        new JSAnimation(overshootCoords, {
          x: { to: dx, duration: durationX },
          y: { to: dy, duration: durationY },
          ease: releaseEase,
          composition,
        }).init();

        this.overshootXTicker.stretch(durationX).restart();
        this.overshootYTicker.stretch(durationY).restart();

    } else {

      if (!disabledX) this.animate[this.xProp](dx, durationX, easeX);
      if (!disabledY) this.animate[this.yProp](dy, durationY, easeY);

    }

    this.scrollInView(longestReleaseDuration, this.scrollThreshold, releaseEase);

    let hasSnapped = false;

    if (dx !== sx) {
      this.snapped[0] = dx;
      if (this.snapX) hasSnapped = true;
    }

    if (dy !== sy && this.snapY) {
      this.snapped[1] = dy;
      if (this.snapY) hasSnapped = true;
    }

    if (hasSnapped) this.onSnap(this);

    this.grabbed = false;
    this.dragged = false;
    this.updated = true;
    this.released = true;

    // It's important to trigger the callback after the release animations to be able to cancel them
    this.onRelease(this);

    this.$trigger.removeEventListener('touchstart', preventDefault);
    this.$trigger.removeEventListener('touchmove', preventDefault);
    this.$trigger.removeEventListener('touchend', preventDefault);

    doc.removeEventListener('touchmove', this);
    doc.removeEventListener('touchend', this);
    doc.removeEventListener('touchcancel', this);
    doc.removeEventListener('mousemove', this);
    doc.removeEventListener('mouseup', this);
    doc.removeEventListener('selectstart', this);
  }

  reset() {
    this.stop();
    this.resizeTicker.pause();
    this.grabbed = false;
    this.dragged = false;
    this.updated = false;
    this.released = false;
    this.canScroll = false;
    this.setX(0, true);
    this.setY(0, true);
    this.coords[0] = 0;
    this.coords[1] = 0;
    this.pointer[0] = 0;
    this.pointer[1] = 0;
    this.pointer[2] = 0;
    this.pointer[3] = 0;
    this.pointer[4] = 0;
    this.pointer[5] = 0;
    this.pointer[6] = 0;
    this.pointer[7] = 0;
    this.velocity = 0;
    this.velocityStack[0] = 0;
    this.velocityStack[1] = 0;
    this.velocityStack[2] = 0;
    this.velocityStackIndex = 0;
    this.angle = 0;
    return this;
  }

  enable() {
    if (!this.enabled) {
      this.enabled = true;
      this.$target.classList.remove('is-disabled');
      this.touchActionStyles = setTargetValues(this.$trigger, {
        touchAction: this.disabled[0] ? 'pan-x' : this.disabled[1] ? 'pan-y' : 'none'
      });
      this.$trigger.addEventListener('touchstart', this, { passive: true });
      this.$trigger.addEventListener('mousedown', this, { passive: true });
      this.$trigger.addEventListener('mouseenter', this);
    }
    return this;
  }

  disable() {
    this.enabled = false;
    this.grabbed = false;
    this.dragged = false;
    this.updated = false;
    this.released = false;
    this.canScroll = false;
    this.touchActionStyles.revert();
    if (this.cursorStyles) {
      this.cursorStyles.revert();
      this.cursorStyles = null;
    }
    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }
    if (this.bodyStyles) {
      this.bodyStyles.revert();
      this.bodyStyles = null;
    }
    if (this.targetStyles) {
      this.targetStyles.revert();
      this.targetStyles = null;
    }
    this.stop();
    this.$target.classList.add('is-disabled');
    this.$trigger.removeEventListener('touchstart', this);
    this.$trigger.removeEventListener('mousedown', this);
    this.$trigger.removeEventListener('mouseenter', this);
    doc.removeEventListener('touchmove', this);
    doc.removeEventListener('touchend', this);
    doc.removeEventListener('touchcancel', this);
    doc.removeEventListener('mousemove', this);
    doc.removeEventListener('mouseup', this);
    doc.removeEventListener('selectstart', this);
    return this;
  }

  revert() {
    this.reset();
    this.disable();
    this.$target.classList.remove('is-disabled');
    this.updateTicker.revert();
    this.overshootXTicker.revert();
    this.overshootYTicker.revert();
    this.resizeTicker.revert();
    this.animate.revert();
    return this;
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'mousedown':
        this.handleDown(/** @type {MouseEvent} */(e));
        break;
      case 'touchstart':
        this.handleDown(/** @type {TouchEvent} */(e));
        break;
      case 'mousemove':
        this.handleMove(/** @type {MouseEvent} */(e));
        break;
      case 'touchmove':
        this.handleMove(/** @type {TouchEvent} */(e));
        break;
      case 'mouseup':
        this.handleUp();
        break;
      case 'touchend':
        this.handleUp();
        break;
      case 'touchcancel':
        this.handleUp();
        break;
      case 'mouseenter':
        this.handleHover();
        break;
      case 'selectstart':
        preventDefault(e);
        break;
    }
  }
}

/**
 * @param {TargetsParam} target
 * @param {DraggableParams} [parameters]
 * @return {Draggable}
 */
const createDraggable = (target, parameters) => new Draggable(target, parameters);




/**
 * @typedef {Object} ReactRef
 * @property {HTMLElement|SVGElement|null} [current]
 */

/**
 * @typedef {Object} AngularRef
 * @property {HTMLElement|SVGElement} [nativeElement]
 */

/**
 * @typedef {Object} ScopeParams
 * @property {DOMTargetSelector|ReactRef|AngularRef} [root]
 * @property {DefaultsParams} [defaults]
 * @property {Record<String, String>} [mediaQueries]
 */

/**
 * @callback ScopeCleanup
 * @param {Scope} [scope]
 */

/**
 * @callback ScopeConstructor
 * @param {Scope} [scope]
 * @return {ScopeCleanup|void}
 */

/**
 * @callback ScopeMethod
 * @param {...*} args
 * @return {ScopeCleanup|void}
 */

class Scope {
  /** @param {ScopeParams} [parameters] */
  constructor(parameters = {}) {
    if (globals.scope) globals.scope.revertibles.push(this);
    const rootParam = parameters.root;
    /** @type {Document|DOMTarget} */
    let root = doc;
    if (rootParam) {
      root = /** @type {ReactRef} */(rootParam).current ||
             /** @type {AngularRef} */(rootParam).nativeElement ||
             parseTargets(/** @type {DOMTargetSelector} */(rootParam))[0] ||
             doc;
    }
    const scopeDefaults = parameters.defaults;
    const globalDefault = globals.defaults;
    const mediaQueries = parameters.mediaQueries;
    /** @type {DefaultsParams} */
    this.defaults = scopeDefaults ? mergeObjects(scopeDefaults, globalDefault) : globalDefault;
    /** @type {Document|DOMTarget} */
    this.root = root;
    /** @type {Array<ScopeConstructor>} */
    this.constructors = [];
    /** @type {Array<Function>} */
    this.revertConstructors = [];
    /** @type {Array<Revertible>} */
    this.revertibles = [];
    /** @type {Record<String, Function>} */
    this.methods = {};
    /** @type {Record<String, Boolean>} */
    this.matches = {};
    /** @type {Record<String, MediaQueryList>} */
    this.mediaQueryLists = {};
    /** @type {Record<String, any>} */
    this.data = {};
    if (mediaQueries) {
      for (let mq in mediaQueries) {
        const _mq = win.matchMedia(mediaQueries[mq]);
        this.mediaQueryLists[mq] = _mq;
        _mq.addEventListener('change', this);
      }
    }
  }

  /**
   * @callback ScoppedCallback
   * @param {this} scope
   * @return {any}
   *
   * @param {ScoppedCallback} cb
   * @return {this}
   */
  execute(cb) {
    let activeScope = globals.scope;
    let activeRoot = globals.root;
    let activeDefaults = globals.defaults;
    globals.scope = this;
    globals.root = this.root;
    globals.defaults = this.defaults;
    const mqs = this.mediaQueryLists;
    for (let mq in mqs) this.matches[mq] = mqs[mq].matches;
    const returned = cb(this);
    globals.scope = activeScope;
    globals.root = activeRoot;
    globals.defaults = activeDefaults;
    return returned;
  }

  /**
   * @return {this}
   */
  refresh() {
    this.execute(() => {
      let i = this.revertibles.length;
      let y = this.revertConstructors.length;
      while (i--) this.revertibles[i].revert();
      while (y--) this.revertConstructors[y](this);
      this.revertibles.length = 0;
      this.revertConstructors.length = 0;
      this.constructors.forEach( constructor => {
        const revertConstructor = constructor(this);
        if (revertConstructor) {
          this.revertConstructors.push(revertConstructor);
        }
      });
    });
    return this;
  }

  /**
   * @callback contructorCallback
   * @param {this} self
   *
   * @overload
   * @param {String} a1
   * @param {ScopeMethod} a2
   * @return {this}
   *
   * @overload
   * @param {contructorCallback} a1
   * @return {this}
   *
   * @param {String|contructorCallback} a1
   * @param {ScopeMethod} [a2]
   */
  add(a1, a2) {
    if (isFnc(a1)) {
      const constructor = /** @type {contructorCallback} */(a1);
      this.constructors.push(constructor);
      this.execute(() => {
        const revertConstructor = constructor(this);
        if (revertConstructor) {
          this.revertConstructors.push(revertConstructor);
        }
      });
    } else {
      this.methods[/** @type {String} */(a1)] = (/** @type {any} */...args) => this.execute(() => a2(...args));
    }
    return this;
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'change':
        this.refresh();
        break;
    }
  }

  revert() {
    const revertibles = this.revertibles;
    const revertConstructors = this.revertConstructors;
    const mqs = this.mediaQueryLists;
    let i = revertibles.length;
    let y = revertConstructors.length;
    while (i--) revertibles[i].revert();
    while (y--) revertConstructors[y](this);
    for (let mq in mqs) mqs[mq].removeEventListener('change', this);
    revertibles.length = 0;
    revertConstructors.length = 0;
    this.constructors.length = 0;
    this.matches = {};
    this.methods = {};
    this.mediaQueryLists = {};
    this.data = {};
  }
}

/**
 * @param {ScopeParams} [params]
 * @return {Scope}
 */
const createScope = params => new Scope(params);

/**
 * @typedef {String|Number} ScrollThresholdValue
 */

/**
 * @return {Number}
 */
const getMaxViewHeight = () => {
  const $el = document.createElement('div');
  doc.body.appendChild($el);
  $el.style.height = '100lvh';
  const height = $el.offsetHeight;
  doc.body.removeChild($el);
  return height;
};

/**
 * @template {ScrollThresholdValue|String|Number|Boolean|Function|Object} T
 * @param {T | ((observer: ScrollObserver) => T)} value
 * @param {ScrollObserver} scroller
 * @return {T}
 */
const parseScrollObserverFunctionParameter = (value, scroller) => value && isFnc(value) ? /** @type {Function} */(value)(scroller) : value;

const scrollContainers = new Map();

class ScrollContainer {
  /**
   * @param {HTMLElement} $el
   */
  constructor($el) {
    /** @type {HTMLElement} */
    this.element = $el;
    /** @type {Boolean} */
    this.useWin = this.element === doc.body;
    /** @type {Number} */
    this.winWidth = 0;
    /** @type {Number} */
    this.winHeight = 0;
    /** @type {Number} */
    this.width = 0;
    /** @type {Number} */
    this.height = 0;
    /** @type {Number} */
    this.left = 0;
    /** @type {Number} */
    this.top = 0;
    /** @type {Number} */
    this.zIndex = 0;
    /** @type {Number} */
    this.scrollX = 0;
    /** @type {Number} */
    this.scrollY = 0;
    /** @type {Number} */
    this.prevScrollX = 0;
    /** @type {Number} */
    this.prevScrollY = 0;
    /** @type {Number} */
    this.scrollWidth = 0;
    /** @type {Number} */
    this.scrollHeight = 0;
    /** @type {Number} */
    this.velocity = 0;
    /** @type {Boolean} */
    this.backwardX = false;
    /** @type {Boolean} */
    this.backwardY = false;
    /** @type {Timer} */
    this.scrollTicker = new Timer({
      autoplay: false,
      onBegin: () => this.dataTimer.resume(),
      onUpdate: () => {
        const backwards = this.backwardX || this.backwardY;
        forEachChildren(this, (/** @type {ScrollObserver} */child) => child.handleScroll(), backwards);
      },
      onComplete: () => this.dataTimer.pause()
    }).init();
    /** @type {Timer} */
    this.dataTimer = new Timer({
      autoplay: false,
      frameRate: 30,
      onUpdate: self => {
        const dt = self.deltaTime;
        const px = this.prevScrollX;
        const py = this.prevScrollY;
        const nx = this.scrollX;
        const ny = this.scrollY;
        const dx = px - nx;
        const dy = py - ny;
        this.prevScrollX = nx;
        this.prevScrollY = ny;
        if (dx) this.backwardX = px > nx;
        if (dy) this.backwardY = py > ny;
        this.velocity = round(dt > 0 ? Math.sqrt(dx * dx + dy * dy) / dt : 0, 5);
      }
    }).init();
    /** @type {Timer} */
    this.resizeTicker = new Timer({
      autoplay: false,
      duration: 250 * globals.timeScale,
      onComplete: () => {
        this.updateWindowBounds();
        this.refreshScrollObservers();
        this.handleScroll();
      }
    }).init();
    /** @type {Timer} */
    this.wakeTicker = new Timer({
      autoplay: false,
      duration: 500 * globals.timeScale,
      onBegin: () => {
        this.scrollTicker.resume();
      },
      onComplete: () => {
        this.scrollTicker.pause();
      }
    }).init();
    /** @type {ScrollObserver} */
    this._head = null;
    /** @type {ScrollObserver} */
    this._tail = null;
    this.updateScrollCoords();
    this.updateWindowBounds();
    this.updateBounds();
    this.refreshScrollObservers();
    this.handleScroll();
    this.resizeObserver = new ResizeObserver(() => this.resizeTicker.restart());
    this.resizeObserver.observe(this.element);
    (this.useWin ? win : this.element).addEventListener('scroll', this, false);
  }

  updateScrollCoords() {
    const useWin = this.useWin;
    const $el = this.element;
    this.scrollX = round(useWin ? win.scrollX : $el.scrollLeft, 0);
    this.scrollY = round(useWin ? win.scrollY : $el.scrollTop, 0);
  }

  updateWindowBounds() {
    this.winWidth = win.innerWidth;
    this.winHeight = getMaxViewHeight();
  }

  updateBounds() {
    const style = getComputedStyle(this.element);
    const $el = this.element;
    this.scrollWidth = $el.scrollWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    this.scrollHeight = $el.scrollHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    this.updateWindowBounds();
    let width, height;
    if (this.useWin) {
      width = this.winWidth;
      height = this.winHeight;
    } else {
      const elRect = $el.getBoundingClientRect();
      width = elRect.width;
      height = elRect.height;
      this.top = elRect.top;
      this.left = elRect.left;
    }
    this.width = width;
    this.height = height;
  }

  refreshScrollObservers() {
    forEachChildren(this, (/** @type {ScrollObserver} */child) => {
      if (child._debug) {
        child.removeDebug();
      }
    });
    this.updateBounds();
    forEachChildren(this, (/** @type {ScrollObserver} */child) => {
      child.refresh();
      if (child._debug) {
        child.debug();
      }
    });
  }

  refresh() {
    this.updateWindowBounds();
    this.updateBounds();
    this.refreshScrollObservers();
    this.handleScroll();
  }

  handleScroll() {
    this.updateScrollCoords();
    this.wakeTicker.restart();
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'scroll':
        this.handleScroll();
        break;
    }
  }

  revert() {
    this.scrollTicker.cancel();
    this.dataTimer.cancel();
    this.resizeTicker.cancel();
    this.wakeTicker.cancel();
    this.resizeObserver.unobserve(this.element);
    (this.useWin ? win : this.element).removeEventListener('scroll', this);
    scrollContainers.delete(this.element);
  }
}

/**
 * @param {TargetsParam} target
 * @return {ScrollContainer}
 */
const registerAndGetScrollContainer = target => {
  const $el = /** @type {HTMLElement} */(target ? parseTargets(target)[0] || doc.body : doc.body);
  let scrollContainer = scrollContainers.get($el);
  if (!scrollContainer) {
    scrollContainer = new ScrollContainer($el);
    scrollContainers.set($el, scrollContainer);
  }
  return scrollContainer;
};

/**
 * @param {HTMLElement} $el
 * @param {Number|string} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */
const convertValueToPx = ($el, v, size, under, over) => {
  const clampMin = v === 'min';
  const clampMax = v === 'max';
  const value = v === 'top' || v === 'left' || v === 'start' || clampMin ? 0 :
                v === 'bottom' || v === 'right' || v === 'end' || clampMax ? '100%' :
                v === 'center' ? '50%' :
                v;
  const { n, u } = decomposeRawValue(value, decomposedOriginalValue);
  let px = n;
  if (u === '%') {
    px = (n / 100) * size;
  } else if (u) {
    px = convertValueUnit($el, decomposedOriginalValue, 'px', true).n;
  }
  if (clampMax && under < 0) px += under;
  if (clampMin && over > 0) px += over;
  return px;
};

/**
 * @param {HTMLElement} $el
 * @param {ScrollThresholdValue} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */
const parseBoundValue = ($el, v, size, under, over) => {
  /** @type {Number} */
  let value;
  if (isStr(v)) {
    const matchedOperator = relativeValuesExecRgx.exec(/** @type {String} */(v));
    if (matchedOperator) {
      const splitter = matchedOperator[0];
      const operator = splitter[0];
      const splitted = /** @type {String} */(v).split(splitter);
      const clampMin = splitted[0] === 'min';
      const clampMax = splitted[0] === 'max';
      const valueAPx = convertValueToPx($el, splitted[0], size, under, over);
      const valueBPx = convertValueToPx($el, splitted[1], size, under, over);
      if (clampMin) {
        const min = getRelativeValue(convertValueToPx($el, 'min', size), valueBPx, operator);
        value = min < valueAPx ? valueAPx : min;
      } else if (clampMax) {
        const max = getRelativeValue(convertValueToPx($el, 'max', size), valueBPx, operator);
        value = max > valueAPx ? valueAPx : max;
      } else {
        value = getRelativeValue(valueAPx, valueBPx, operator);
      }
    } else {
      value = convertValueToPx($el, v, size, under, over);
    }
  } else {
    value = /** @type {Number} */(v);
  }
  return round(value, 0);
};

/**
 * @param {JSAnimation} linked
 * @return {HTMLElement}
 */
const getAnimationDomTarget = linked => {
  let $linkedTarget;
  const linkedTargets = linked.targets;
  for (let i = 0, l = linkedTargets.length; i < l; i++) {
    const target = linkedTargets[i];
    if (target[isDomSymbol]) {
      $linkedTarget = /** @type {HTMLElement} */(target);
      break;
    }
  }
  return $linkedTarget;
};

let scrollerIndex = 0;

const debugColors = ['#FF4B4B','#FF971B','#FFC730','#F9F640','#7AFF5A','#18FF74','#17E09B','#3CFFEC','#05DBE9','#33B3F1','#638CF9','#C563FE','#FF4FCF','#F93F8A'];

/**
 * @typedef {Object} ScrollThresholdParam
 * @property {ScrollThresholdValue} [target]
 * @property {ScrollThresholdValue} [container]
 */

/**
 * @callback ScrollObserverAxisCallback
 * @param {ScrollObserver} self
 * @return {'x'|'y'}
 */

/**
 * @callback ScrollThresholdCallback
 * @param {ScrollObserver} self
 * @return {ScrollThresholdValue|ScrollThresholdParam}
 */

/**
 * @typedef {Object} ScrollObserverParams
 * @property {Number|String} [id]
 * @property {Boolean|Number|String|EasingParam} [sync]
 * @property {TargetsParam} [container]
 * @property {TargetsParam} [target]
 * @property {'x'|'y'|ScrollObserverAxisCallback|((observer: ScrollObserver) => 'x'|'y'|ScrollObserverAxisCallback)} [axis]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [enter]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [leave]
 * @property {Boolean|((observer: ScrollObserver) => Boolean)} [repeat]
 * @property {Boolean} [debug]
 * @property {Callback<ScrollObserver>} [onEnter]
 * @property {Callback<ScrollObserver>} [onLeave]
 * @property {Callback<ScrollObserver>} [onEnterForward]
 * @property {Callback<ScrollObserver>} [onLeaveForward]
 * @property {Callback<ScrollObserver>} [onEnterBackward]
 * @property {Callback<ScrollObserver>} [onLeaveBackward]
 * @property {Callback<ScrollObserver>} [onUpdate]
 * @property {Callback<ScrollObserver>} [onSyncComplete]
 */

class ScrollObserver {
  /**
   * @param {ScrollObserverParams} parameters
   */
  constructor(parameters = {}) {
    if (globals.scope) globals.scope.revertibles.push(this);
    const syncMode = setValue(parameters.sync, 'play pause');
    const ease = syncMode ? parseEasings(/** @type {EasingParam} */(syncMode)) : null;
    const isLinear = syncMode && (syncMode === 'linear' || syncMode === none);
    const isEase = syncMode && !(ease === none && !isLinear);
    const isSmooth = syncMode && (isNum(syncMode) || syncMode === true || isLinear);
    const isMethods = syncMode && (isStr(syncMode) && !isEase && !isSmooth);
    const syncMethods = isMethods ? /** @type {String} */(syncMode).split(' ').map(
      (/** @type {String} */m) => () => {
        const linked = this.linked;
        return linked && linked[m] ? linked[m]() : null;
      }
    ) : null;
    const biDirSync = isMethods && syncMethods.length > 2;
    /** @type {Number} */
    this.index = scrollerIndex++;
    /** @type {String|Number} */
    this.id = !isUnd(parameters.id) ? parameters.id : this.index;
    /** @type {ScrollContainer} */
    this.container = registerAndGetScrollContainer(parameters.container);
    /** @type {HTMLElement} */
    this.target = null;
    /** @type {Tickable|WAAPIAnimation} */
    this.linked = null;
    /** @type {Boolean} */
    this.repeat = null;
    /** @type {Boolean} */
    this.horizontal = null;
    /** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */
    this.enter = null;
    /** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */
    this.leave = null;
    /** @type {Boolean} */
    this.sync = isEase || isSmooth || !!syncMethods;
    /** @type {EasingFunction} */
    this.syncEase = isEase ? ease : null;
    /** @type {Number} */
    this.syncSmooth = isSmooth ? syncMode === true || isLinear ? 1 : /** @type {Number} */(syncMode) : null;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncEnter = syncMethods && !biDirSync && syncMethods[0] ? syncMethods[0] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncLeave = syncMethods && !biDirSync && syncMethods[1] ? syncMethods[1] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncEnterForward = syncMethods && biDirSync && syncMethods[0] ? syncMethods[0] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncLeaveForward = syncMethods && biDirSync && syncMethods[1] ? syncMethods[1] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncEnterBackward = syncMethods && biDirSync && syncMethods[2] ? syncMethods[2] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncLeaveBackward = syncMethods && biDirSync && syncMethods[3] ? syncMethods[3] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onEnter = parameters.onEnter || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onLeave = parameters.onLeave || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onEnterForward = parameters.onEnterForward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onLeaveForward = parameters.onLeaveForward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onEnterBackward = parameters.onEnterBackward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onLeaveBackward = parameters.onLeaveBackward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onUpdate = parameters.onUpdate || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncComplete = parameters.onSyncComplete || noop;
    /** @type {Boolean} */
    this.reverted = false;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Boolean} */
    this.began = false;
    /** @type {Boolean} */
    this.isInView = false;
    /** @type {Boolean} */
    this.forceEnter = false;
    /** @type {Boolean} */
    this.hasEntered = false;
    /** @type {Array.<Number>} */
    this.offsets = [];
    /** @type {Number} */
    this.offset = 0;
    /** @type {Number} */
    this.offsetStart = 0;
    /** @type {Number} */
    this.offsetEnd = 0;
    /** @type {Number} */
    this.distance = 0;
    /** @type {Number} */
    this.prevProgress = 0;
    /** @type {Array} */
    this.thresholds = ['start', 'end', 'end', 'start'];
    /** @type {[Number, Number, Number, Number]} */
    this.coords = [0, 0, 0, 0];
    /** @type {JSAnimation} */
    this.debugStyles = null;
    /** @type {HTMLElement} */
    this.$debug = null;
    /** @type {ScrollObserverParams} */
    this._params = parameters;
    /** @type {Boolean} */
    this._debug = setValue(parameters.debug, false);
    /** @type {ScrollObserver} */
    this._next = null;
    /** @type {ScrollObserver} */
    this._prev = null;
    addChild(this.container, this);
    // Wait for the next frame to add to the container in order to handle calls to link()
    sync(() => {
      if (this.reverted) return;
      if (!this.target) {
        const target = /** @type {HTMLElement} */(parseTargets(parameters.target)[0]);
        this.target = target || doc.body;
        this.refresh();
      }
      if (this._debug) this.debug();
    });
  }

  /**
   * @param {Tickable|WAAPIAnimation} linked
   */
  link(linked) {
    if (linked) {
      // Make sure to pause the linked object in case it's added later
      linked.pause();
      this.linked = linked;
      // Try to use a target of the linked object if no target parameters specified
      if (!this._params.target) {
        /** @type {HTMLElement} */
        let $linkedTarget;
        if (!isUnd(/** @type {JSAnimation} */(linked).targets)) {
          $linkedTarget = getAnimationDomTarget(/** @type {JSAnimation} */(linked));
        } else {
          forEachChildren(/** @type {Timeline} */(linked), (/** @type {JSAnimation} */child) => {
            if (child.targets && !$linkedTarget) {
              $linkedTarget = getAnimationDomTarget(/** @type {JSAnimation} */(child));
            }
          });
        }
        // Fallback to body if no target found
        this.target = $linkedTarget || doc.body;
        this.refresh();
      }
    }
    return this;
  }

  get velocity() {
    return this.container.velocity;
  }

  get backward() {
    return this.horizontal ? this.container.backwardX : this.container.backwardY;
  }

  get scroll() {
    return this.horizontal ? this.container.scrollX : this.container.scrollY;
  }

  get progress() {
    const p = (this.scroll - this.offsetStart) / this.distance;
    return p === Infinity || isNaN(p) ? 0 : round(clamp(p, 0, 1), 6);
  }

  refresh() {
    this.reverted = false;
    const params = this._params;
    this.repeat = setValue(parseScrollObserverFunctionParameter(params.repeat, this), true);
    this.horizontal = setValue(parseScrollObserverFunctionParameter(params.axis, this), 'y') === 'x';
    this.enter = setValue(parseScrollObserverFunctionParameter(params.enter, this), 'end start');
    this.leave = setValue(parseScrollObserverFunctionParameter(params.leave, this), 'start end');
    this.updateBounds();
    this.handleScroll();
    return this;
  }

  removeDebug() {
    if (this.$debug) {
      this.$debug.parentNode.removeChild(this.$debug);
      this.$debug = null;
    }
    if (this.debugStyles) {
      this.debugStyles.revert();
      this.$debug = null;
    }
    return this;
  }

  debug() {
    this.removeDebug();
    const container = this.container;
    const isHori = this.horizontal;
    const $existingDebug = container.element.querySelector(':scope > .animejs-onscroll-debug');
    const $debug = doc.createElement('div');
    const $thresholds = doc.createElement('div');
    const $triggers = doc.createElement('div');
    const color = debugColors[this.index % debugColors.length];
    const useWin = container.useWin;
    const containerWidth = useWin ? container.winWidth : container.width;
    const containerHeight = useWin ? container.winHeight : container.height;
    const scrollWidth = container.scrollWidth;
    const scrollHeight = container.scrollHeight;
    const size = this.container.width > 360 ? 320 : 260;
    const offLeft = isHori ? 0 : 10;
    const offTop = isHori ? 10 : 0;
    const half = isHori ? 24 : size / 2;
    const labelHeight = isHori ? half : 15;
    const labelWidth = isHori ? 60 : half;
    const labelSize = isHori ? labelWidth : labelHeight;
    const repeat = isHori ? 'repeat-x' : 'repeat-y';
    /**
     * @param {Number} v
     * @return {String}
     */
    const gradientOffset = v => isHori ? '0px '+(v)+'px' : (v)+'px'+' 2px';
    /**
     * @param {String} c
     * @return {String}
     */
    const lineCSS = (c) => `linear-gradient(${isHori ? 90 : 0}deg, ${c} 2px, transparent 1px)`;
    /**
     * @param {String} p
     * @param {Number} l
     * @param {Number} t
     * @param {Number} w
     * @param {Number} h
     * @return {String}
     */
    const baseCSS = (p, l, t, w, h) => `position:${p};left:${l}px;top:${t}px;width:${w}px;height:${h}px;`;
    $debug.style.cssText = `${baseCSS('absolute', offLeft, offTop, isHori ? scrollWidth : size, isHori ? size : scrollHeight)}
      pointer-events: none;
      z-index: ${this.container.zIndex++};
      display: flex;
      flex-direction: ${isHori ? 'column' : 'row'};
      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));
    `;
    $thresholds.style.cssText = `${baseCSS('sticky', 0, 0, isHori ? containerWidth : half, isHori ? half : containerHeight)}`;
    if (!$existingDebug) {
      $thresholds.style.cssText += `background:
        ${lineCSS('#FFFF')}${gradientOffset(half-10)} / ${isHori ? '100px 100px' : '100px 100px'} ${repeat},
        ${lineCSS('#FFF8')}${gradientOffset(half-10)} / ${isHori ? '10px 10px' : '10px 10px'} ${repeat};
      `;
    }
    $triggers.style.cssText = `${baseCSS('relative', 0, 0, isHori ? scrollWidth : half, isHori ? half : scrollHeight)}`;
    if (!$existingDebug) {
      $triggers.style.cssText += `background:
        ${lineCSS('#FFFF')}${gradientOffset(0)} / ${isHori ? '100px 10px' : '10px 100px'} ${repeat},
        ${lineCSS('#FFF8')}${gradientOffset(0)} / ${isHori ? '10px 0px' : '0px 10px'} ${repeat};
      `;
    }
    const labels = [' enter: ', ' leave: '];
    this.coords.forEach((v, i) => {
      const isView = i > 1;
      const value = (isView ? 0 : this.offset) + v;
      const isTail = i % 2;
      const isFirst = value < labelSize;
      const isOver = value > (isView ? isHori ? containerWidth : containerHeight : isHori ? scrollWidth : scrollHeight) - labelSize;
      const isFlip = (isView ? isTail && !isFirst : !isTail && !isFirst) || isOver;
      const $label = doc.createElement('div');
      const $text = doc.createElement('div');
      const dirProp = isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top';
      const flipOffset = isFlip ? (isHori ? labelWidth : labelHeight) + (!isView ? isHori ? -1 : -2 : isHori ? -1 : isOver ? 0 : -2) : !isView ? isHori ? 1 : 0 : isHori ? 1 : 0;
      // $text.innerHTML = `${!isView ? '' : labels[isTail] + ' '}${this.id}: ${this.thresholds[i]} ${isView ? '' : labels[isTail]}`;
      $text.innerHTML = `${this.id}${labels[isTail]}${this.thresholds[i]}`;
      $label.style.cssText = `${baseCSS('absolute', 0, 0, labelWidth, labelHeight)}
        display: flex;
        flex-direction: ${isHori ? 'column' : 'row'};
        justify-content: flex-${isView ? 'start' : 'end'};
        align-items: flex-${isFlip ? 'end' : 'start'};
        border-${dirProp}: 2px ${isTail ? 'solid' : 'solid'} ${color};
      `;
      $text.style.cssText = `
        overflow: hidden;
        max-width: ${(size / 2) - 10}px;
        height: ${labelHeight};
        margin-${isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top'}: -2px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        letter-spacing: -.025em;
        line-height: 9px;
        font-weight: 600;
        text-align: ${isHori && isFlip || !isHori && !isView ? 'right' : 'left'};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${isTail ? color : 'rgba(0,0,0,.75)'};
        background-color: ${isTail ? 'rgba(0,0,0,.65)' : color};
        border: 2px solid ${isTail ? color : 'transparent'};
        border-${isHori ? isFlip ? 'top-left' : 'top-right' : isFlip ? 'top-left' : 'bottom-left'}-radius: 5px;
        border-${isHori ? isFlip ? 'bottom-left' : 'bottom-right' : isFlip ? 'top-right' : 'bottom-right'}-radius: 5px;
      `;
      $label.appendChild($text);
      let position = value - flipOffset + (isHori ? 1 : 0);
      $label.style[isHori ? 'left' : 'top'] = `${position}px`;
      // $label.style[isHori ? 'left' : 'top'] = value - flipOffset + (!isFlip && isFirst && !isView ? 1 : isFlip ? 0 : -2) + 'px';
      (isView ? $thresholds : $triggers).appendChild($label);
    });

    $debug.appendChild($thresholds);
    $debug.appendChild($triggers);
    container.element.appendChild($debug);

    if (!$existingDebug) $debug.classList.add('animejs-onscroll-debug');
    this.$debug = $debug;
    const containerPosition = getTargetValue(container.element, 'position');
    if (containerPosition === 'static') {
      this.debugStyles = setTargetValues(container.element, { position: 'relative '});
    }

  }

  updateBounds() {
    if (this._debug) {
      this.removeDebug();
    }
    let stickys;
    const $target = this.target;
    const container = this.container;
    const isHori = this.horizontal;
    const linked = this.linked;
    let linkedTime;
    let $el = $target;
    let offsetX = 0;
    let offsetY = 0;
    /** @type {Element} */
    let $offsetParent = $el;
    if (linked) {
      linkedTime = linked.currentTime;
      linked.seek(0, true);
    }
    const isContainerStatic = getTargetValue(container.element, 'position') === 'static' ? setTargetValues(container.element, { position: 'relative '}) : false;
    while ($el && $el !== container.element && $el !== doc.body) {
      const isSticky = getTargetValue($el, 'position') === 'sticky' ?
                       setTargetValues($el, { position: 'static' }) :
                       false;
      if ($el === $offsetParent) {
        offsetX += $el.offsetLeft || 0;
        offsetY += $el.offsetTop || 0;
        $offsetParent = $el.offsetParent;
      }
      $el = /** @type {HTMLElement} */($el.parentElement);
      if (isSticky) {
        if (!stickys) stickys = [];
        stickys.push(isSticky);
      }
    }
    if (isContainerStatic) isContainerStatic.revert();
    const offset = isHori ? offsetX : offsetY;
    const targetSize = isHori ? $target.offsetWidth : $target.offsetHeight;
    const containerSize = isHori ? container.width : container.height;
    const scrollSize = isHori ? container.scrollWidth : container.scrollHeight;
    const maxScroll = scrollSize - containerSize;
    const enter = this.enter;
    const leave = this.leave;

    /** @type {ScrollThresholdValue} */
    let enterTarget = 'start';
    /** @type {ScrollThresholdValue} */
    let leaveTarget = 'end';
    /** @type {ScrollThresholdValue} */
    let enterContainer = 'end';
    /** @type {ScrollThresholdValue} */
    let leaveContainer = 'start';

    if (isStr(enter)) {
      const splitted = /** @type {String} */(enter).split(' ');
      enterContainer = splitted[0];
      enterTarget = splitted.length > 1 ? splitted[1] : enterTarget;
    } else if (isObj(enter)) {
      const e = /** @type {ScrollThresholdParam} */(enter);
      if (!isUnd(e.container)) enterContainer = e.container;
      if (!isUnd(e.target)) enterTarget = e.target;
    } else if (isNum(enter)) {
      enterContainer = /** @type {Number} */(enter);
    }

    if (isStr(leave)) {
      const splitted = /** @type {String} */(leave).split(' ');
      leaveContainer = splitted[0];
      leaveTarget = splitted.length > 1 ? splitted[1] : leaveTarget;
    } else if (isObj(leave)) {
      const t = /** @type {ScrollThresholdParam} */(leave);
      if (!isUnd(t.container)) leaveContainer = t.container;
      if (!isUnd(t.target)) leaveTarget = t.target;
    } else if (isNum(leave)) {
      leaveContainer = /** @type {Number} */(leave);
    }

    const parsedEnterTarget = parseBoundValue($target, enterTarget, targetSize);
    const parsedLeaveTarget = parseBoundValue($target, leaveTarget, targetSize);
    const under = (parsedEnterTarget + offset) - containerSize;
    const over = (parsedLeaveTarget + offset) - maxScroll;
    const parsedEnterContainer = parseBoundValue($target, enterContainer, containerSize, under, over);
    const parsedLeaveContainer = parseBoundValue($target, leaveContainer, containerSize, under, over);
    const offsetStart = parsedEnterTarget + offset - parsedEnterContainer;
    const offsetEnd = parsedLeaveTarget + offset - parsedLeaveContainer;
    const scrollDelta = offsetEnd - offsetStart;
    this.offsets[0] = offsetX;
    this.offsets[1] = offsetY;
    this.offset = offset;
    this.offsetStart = offsetStart;
    this.offsetEnd = offsetEnd;
    this.distance = scrollDelta <= 0 ? 0 : scrollDelta;
    this.thresholds = [enterTarget, leaveTarget, enterContainer, leaveContainer];
    this.coords = [parsedEnterTarget, parsedLeaveTarget, parsedEnterContainer, parsedLeaveContainer];
    if (stickys) {
      stickys.forEach(sticky => sticky.revert());
    }
    if (linked) {
      linked.seek(linkedTime, true);
    }
    if (this._debug) {
      this.debug();
    }
  }

  handleScroll() {
    const linked = this.linked;
    const sync = this.sync;
    const syncEase = this.syncEase;
    const syncSmooth = this.syncSmooth;
    const shouldSeek = linked && (syncEase || syncSmooth);
    const isHori = this.horizontal;
    const container = this.container;
    const scroll = this.scroll;
    const isBefore = scroll <= this.offsetStart;
    const isAfter = scroll >= this.offsetEnd;
    const isInView = !isBefore && !isAfter;
    const isOnTheEdge = scroll === this.offsetStart || scroll === this.offsetEnd;
    const forceEnter = !this.hasEntered && isOnTheEdge;
    const $debug = this._debug && this.$debug;
    let hasUpdated = false;
    let syncCompleted = false;
    let p = this.progress;

    if (isBefore && this.began) {
      this.began = false;
    }

    if (p > 0 && !this.began) {
      this.began = true;
    }

    if (shouldSeek) {
      const lp = linked.progress;
      if (syncSmooth && isNum(syncSmooth)) {
        if (/** @type {Number} */(syncSmooth) < 1) {
          const step = 0.0001;
          const snap = lp < p && p === 1 ? step : lp > p && !p ? -1e-4 : 0;
          p = round(lerp(lp, p, interpolate(.01, .2, /** @type {Number} */(syncSmooth)), false) + snap, 6);
        }
      } else if (syncEase) {
        p = syncEase(p);
      }
      hasUpdated = p !== this.prevProgress;
      syncCompleted = lp === 1;
      if (hasUpdated && !syncCompleted && (syncSmooth && lp)) {
        container.wakeTicker.restart();
      }
    }

    if ($debug) {
      const sticky = isHori ? container.scrollY : container.scrollX;
      $debug.style[isHori ? 'top' : 'left'] = sticky + 10 + 'px';
    }

    // Trigger enter callbacks if already in view or when entering the view
    if ((isInView && !this.isInView) || (forceEnter && !this.forceEnter && !this.hasEntered)) {
      if (isInView) this.isInView = true;
      if (!this.forceEnter || !this.hasEntered) {
        if ($debug && isInView) $debug.style.zIndex = `${this.container.zIndex++}`;
        this.onSyncEnter(this);
        this.onEnter(this);
        if (this.backward) {
          this.onSyncEnterBackward(this);
          this.onEnterBackward(this);
        } else {
          this.onSyncEnterForward(this);
          this.onEnterForward(this);
        }
        this.hasEntered = true;
        if (forceEnter) this.forceEnter = true;
      } else if (isInView) {
        this.forceEnter = false;
      }
    }

    if (isInView || !isInView && this.isInView) {
      hasUpdated = true;
    }

    if (hasUpdated) {
      if (shouldSeek) linked.seek(linked.duration * p);
      this.onUpdate(this);
    }

    if (!isInView && this.isInView) {
      this.isInView = false;
      this.onSyncLeave(this);
      this.onLeave(this);
      if (this.backward) {
        this.onSyncLeaveBackward(this);
        this.onLeaveBackward(this);
      } else {
        this.onSyncLeaveForward(this);
        this.onLeaveForward(this);
      }
      if (sync && !syncSmooth) {
        syncCompleted = true;
      }
    }

    if (p >= 1 && this.began && !this.completed && (sync && syncCompleted || !sync)) {
      if (sync) {
        this.onSyncComplete(this);
      }
      this.completed = true;
      if ((!this.repeat && !linked) || (!this.repeat && linked && linked.completed)) {
        this.revert();
      }
    }

    if (p < 1 && this.completed) {
      this.completed = false;
    }

    this.prevProgress = p;
  }

  revert() {
    if (this.reverted) return;
    const container = this.container;
    removeChild(container, this);
    if (!container._head) {
      container.revert();
    }
    if (this._debug) {
      this.removeDebug();
    }
    this.reverted = true;
    return this;
  }

}

/**
 * @param {ScrollObserverParams} [parameters={}]
 * @return {ScrollObserver}
 */
const onScroll = (parameters = {}) => new ScrollObserver(parameters);




/**
 * @typedef  {Object} StaggerParameters
 * @property {Number|String} [start]
 * @property {Number|'first'|'center'|'last'} [from]
 * @property {Boolean} [reversed]
 * @property {Array.<Number>} [grid]
 * @property {('x'|'y')} [axis]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 */

/**
 * @callback StaggerFunction
 * @param {Target} [target]
 * @param {Number} [index]
 * @param {Number} [length]
 * @param {Timeline} [tl]
 * @return {Number|String}
 */

/**
 * @param  {Number|String|[Number|String,Number|String]} val
 * @param  {StaggerParameters} params
 * @return {StaggerFunction}
 */
const stagger = (val, params = {}) => {
  let values = [];
  let maxValue = 0;
  const from = params.from;
  const reversed = params.reversed;
  const ease = params.ease;
  const hasEasing = !isUnd(ease);
  const hasSpring = hasEasing && !isUnd(/** @type {Spring} */(ease).ease);
  const staggerEase = hasSpring ? /** @type {Spring} */(ease).ease : hasEasing ? parseEasings(ease) : null;
  const grid = params.grid;
  const axis = params.axis;
  const fromFirst = isUnd(from) || from === 0 || from === 'first';
  const fromCenter = from === 'center';
  const fromLast = from === 'last';
  const isRange = isArr(val);
  const val1 = isRange ? parseNumber(val[0]) : parseNumber(val);
  const val2 = isRange ? parseNumber(val[1]) : 0;
  const unitMatch = unitsExecRgx.exec((isRange ? val[1] : val) + emptyString);
  const start = params.start || 0 + (isRange ? val1 : 0);
  let fromIndex = fromFirst ? 0 : isNum(from) ? from : 0;
  return (_, i, t, tl) => {
    if (fromCenter) fromIndex = (t - 1) / 2;
    if (fromLast) fromIndex = t - 1;
    if (!values.length) {
      for (let index = 0; index < t; index++) {
        if (!grid) {
          values.push(abs(fromIndex - index));
        } else {
          const fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          const fromY = !fromCenter ? floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          const toX = index % grid[0];
          const toY = floor(index / grid[0]);
          const distanceX = fromX - toX;
          const distanceY = fromY - toY;
          let value = sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') value = -distanceX;
          if (axis === 'y') value = -distanceY;
          values.push(value);
        }
        maxValue = max(...values);
      }
      if (staggerEase) values = values.map(val => staggerEase(val / maxValue) * maxValue);
      if (reversed) values = values.map(val => axis ? (val < 0) ? val * -1 : -val : abs(maxValue - val));
    }
    const spacing = isRange ? (val2 - val1) / maxValue : val1;
    const offset = tl ? parseTimelinePosition(tl, isUnd(params.start) ? tl.iterationDuration : start) : /** @type {Number} */(start);
    /** @type {String|Number} */
    let output = offset + ((spacing * round(values[i], 2)) || 0);
    if (params.modifier) output = params.modifier(output);
    if (unitMatch) output = `${output}${unitMatch[2]}`;
    return output;
  }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.esm.js");


function addItem() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  1');

  let anime_area = document.getElementById('anime_area');

  for (let i = 0; i < value.length; i++) {
    let span = document.createElement('span');
    span.className = 'one';
    span.textContent = value[i];
    anime_area.appendChild(span);
  }

  (0,animejs__WEBPACK_IMPORTED_MODULE_0__.animate)('span', {
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 },
    ],
    // Property specific parameters
    rotate: {
      from: '-1turn',
      delay: 0,
    },
    delay: (_, i) => i * 50, // Function based value
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true,
  });

  animejs__WEBPACK_IMPORTED_MODULE_0__.waapi.animate('.one', {
    translate: `0 -2rem`,
    delay: (0,animejs__WEBPACK_IMPORTED_MODULE_0__.stagger)(100),
    duration: 600,
    loop: true,
    alternate: true,
    ease: 'inOut(2)',
  });
}

function addItem2() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  2');

  let anime_area = document.getElementById('anime_area');

  for (let i = 0; i < value.length; i++) {
    let div = document.createElement('div');
    div.className = 'two';
    div.textContent = value;
    anime_area.appendChild(div);
  }

  animejs__WEBPACK_IMPORTED_MODULE_0__.waapi.animate('.two', {
    translate: '17rem',
    delay: (0,animejs__WEBPACK_IMPORTED_MODULE_0__.stagger)(100),
    loop: true,
    alternate: true,
  });
}

let anime_judgment = false;

function addItem3() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  3');

  let anime_area = document.getElementById('anime_area');

  if (anime_judgment == false) {
    for (let i = 0; i < value.length; i++) {
      let div = document.createElement('div');
      div.className = 'three';
      div.textContent = value;
      anime_area.appendChild(div);
    }
    anime_judgment = true;
  } else if (anime_judgment == true) {
    animejs__WEBPACK_IMPORTED_MODULE_0__.utils.set('.three', {
      x: () => animejs__WEBPACK_IMPORTED_MODULE_0__.utils.random(0, 20) + 'rem',
      rotate: () => animejs__WEBPACK_IMPORTED_MODULE_0__.utils.random(0, 180),
      scale: () => animejs__WEBPACK_IMPORTED_MODULE_0__.utils.random(0.25, 1, 3),
    });

    anime_judgment = false;
  }
  (0,animejs__WEBPACK_IMPORTED_MODULE_0__.animate)('.three', {
    y: (0,animejs__WEBPACK_IMPORTED_MODULE_0__.stagger)(['-1.23rem', '1rem']),
    rotate: { from: (0,animejs__WEBPACK_IMPORTED_MODULE_0__.stagger)('-.125turn') },
    loop: 1,
    alternate: true,
  });
}

function addItem4() {
  let area = document.getElementById('input_area');
  let value = area.value;

  if (value == '') {
    return;
  }

  console.log(value + '  4');

  let anime_area = document.getElementById('anime_area');

  let square = document.createElement('div');
  square.className = 'square';
  let div = document.createElement('div');
  div.className = 'four';
  div.textContent = value;
  square.appendChild(div);
  anime_area.appendChild(square);

  (0,animejs__WEBPACK_IMPORTED_MODULE_0__.createScope)({ root: '.row:nth-child(2)' }).add(() => {
    (0,animejs__WEBPACK_IMPORTED_MODULE_0__.animate)('.square', {
      x: '95rem',
      loop: true,
    });
  });
}

// ボタン１
document.getElementById('add-button').addEventListener('click', addItem);
document.getElementById('add-button2').addEventListener('click', addItem2);
document.getElementById('add-button3').addEventListener('click', addItem3);
document.getElementById('add-button4').addEventListener('click', addItem4);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1Q0FBdUMsZ0JBQWdCO0FBQzdELGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLGdCQUFnQjtBQUM5QixjQUFjLGdCQUFnQjtB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QWUsMENBQUs7QUFDcEIsb0JBQW9CLDBDQUFLO0FBQ3pCLG1CQUFtQiwwQ0FBSztBQUN4QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxFQUFFLGdEQUFPO0FBQ1QsT0FBTyxnREFBTztBQUNkLGNBQWMsTUFBTSxnREFBTyxlQUFlO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFXLEdBQUcsMkJBQTJCO0FBQzNDLElBQUksZ0RBQU87QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXNtLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhbmltZS5qcyAtIEVTTVxuICogQHZlcnNpb24gdjQuMC4yXG4gKiBAYXV0aG9yIEp1bGlhbiBHYXJuaWVyXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMjUgSnVsaWFuIEdhcm5pZXJcbiAqIEBzZWUgaHR0cHM6Ly9hbmltZWpzLmNvbVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRGVmYXVsdHNQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFN0cmluZ30gW2lkXVxuICogQHByb3BlcnR5IHtQZXJjZW50YWdlS2V5ZnJhbWVzfER1cmF0aW9uS2V5ZnJhbWVzfSBba2V5ZnJhbWVzXVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW3BsYXliYWNrRWFzZV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbcGxheWJhY2tSYXRlXVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtmcmFtZVJhdGVdXG4gKiBAcHJvcGVydHkge051bWJlcnxCb29sZWFufSBbbG9vcF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3JldmVyc2VkXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbYWx0ZXJuYXRlXVxuICogQHByb3BlcnR5IHtCb29sZWFufFNjcm9sbE9ic2VydmVyfSBbYXV0b3BsYXldXG4gKiBAcHJvcGVydHkge051bWJlcnxGdW5jdGlvblZhbHVlfSBbZHVyYXRpb25dXG4gKiBAcHJvcGVydHkge051bWJlcnxGdW5jdGlvblZhbHVlfSBbZGVsYXldXG4gKiBAcHJvcGVydHkge051bWJlcn0gW2xvb3BEZWxheV1cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICogQHByb3BlcnR5IHsnbm9uZSd8J3JlcGxhY2UnfCdibGVuZCd8Y29tcG9zaXRpb25UeXBlc30gW2NvbXBvc2l0aW9uXVxuICogQHByb3BlcnR5IHsodjogYW55KSA9PiBhbnl9IFttb2RpZmllcl1cbiAqIEBwcm9wZXJ0eSB7KHRpY2thYmxlOiBUaWNrYWJsZSkgPT4gdm9pZH0gW29uQmVnaW5dXG4gKiBAcHJvcGVydHkgeyh0aWNrYWJsZTogVGlja2FibGUpID0+IHZvaWR9IFtvbkJlZm9yZVVwZGF0ZV1cbiAqIEBwcm9wZXJ0eSB7KHRpY2thYmxlOiBUaWNrYWJsZSkgPT4gdm9pZH0gW29uVXBkYXRlXVxuICogQHByb3BlcnR5IHsodGlja2FibGU6IFRpY2thYmxlKSA9PiB2b2lkfSBbb25Mb29wXVxuICogQHByb3BlcnR5IHsodGlja2FibGU6IFRpY2thYmxlKSA9PiB2b2lkfSBbb25QYXVzZV1cbiAqIEBwcm9wZXJ0eSB7KHRpY2thYmxlOiBUaWNrYWJsZSkgPT4gdm9pZH0gW29uQ29tcGxldGVdXG4gKiBAcHJvcGVydHkgeyhyZW5kZXJhYmxlOiBSZW5kZXJhYmxlKSA9PiB2b2lkfSBbb25SZW5kZXJdXG4gKi9cblxuLyoqIEB0eXBlZGVmIHtKU0FuaW1hdGlvbnxUaW1lbGluZX0gUmVuZGVyYWJsZSAqL1xuLyoqIEB0eXBlZGVmIHtUaW1lcnxSZW5kZXJhYmxlfSBUaWNrYWJsZSAqL1xuLyoqIEB0eXBlZGVmIHtUaW1lciZKU0FuaW1hdGlvbiZUaW1lbGluZX0gQ2FsbGJhY2tBcmd1bWVudCAqL1xuLyoqIEB0eXBlZGVmIHtBbmltYXRhYmxlfFRpY2thYmxlfERyYWdnYWJsZXxTY3JvbGxPYnNlcnZlcnxTY29wZX0gUmV2ZXJ0aWJsZSAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERyYWdnYWJsZUF4aXNQYXJhbVxuICogQHByb3BlcnR5IHtTdHJpbmd9IFttYXBUb11cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Nb2RpZmllcn0gW21vZGlmaWVyXVxuICogQHByb3BlcnR5IHtUd2VlbkNvbXBvc2l0aW9ufSBbY29tcG9zaXRpb25dXG4gKiBAcHJvcGVydHkge051bWJlcnxBcnJheTxOdW1iZXI+fCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcnxBcnJheTxOdW1iZXI+KX0gW3NuYXBdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEcmFnZ2FibGVDdXJzb3JQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbb25Ib3Zlcl1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbb25HcmFiXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRHJhZ2dhYmxlUGFyYW1zXG4gKiBAcHJvcGVydHkge0RPTVRhcmdldFNlbGVjdG9yfSBbdHJpZ2dlcl1cbiAqIEBwcm9wZXJ0eSB7RE9NVGFyZ2V0U2VsZWN0b3J8QXJyYXk8TnVtYmVyPnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBET01UYXJnZXRTZWxlY3RvcnxBcnJheTxOdW1iZXI+KX0gW2NvbnRhaW5lcl1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxEcmFnZ2FibGVBeGlzUGFyYW19IFt4XVxuICogQHByb3BlcnR5IHtCb29sZWFufERyYWdnYWJsZUF4aXNQYXJhbX0gW3ldXG4gKiBAcHJvcGVydHkge1R3ZWVuTW9kaWZpZXJ9IFttb2RpZmllcl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfEFycmF5PE51bWJlcj58KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyfEFycmF5PE51bWJlcj4pfSBbc25hcF1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfEFycmF5PE51bWJlcj58KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyfEFycmF5PE51bWJlcj4pfSBbY29udGFpbmVyUGFkZGluZ11cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFtjb250YWluZXJGcmljdGlvbl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFtyZWxlYXNlQ29udGFpbmVyRnJpY3Rpb25dXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbZHJhZ1NwZWVkXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW3Njcm9sbFNwZWVkXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW3Njcm9sbFRocmVzaG9sZF1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFttaW5WZWxvY2l0eV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFttYXhWZWxvY2l0eV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFt2ZWxvY2l0eU11bHRpcGxpZXJdXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3JlbGVhc2VNYXNzXVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtyZWxlYXNlU3RpZmZuZXNzXVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtyZWxlYXNlRGFtcGluZ11cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3JlbGVhc2VEYW1waW5nXVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW3JlbGVhc2VFYXNlXVxuICogQHByb3BlcnR5IHtCb29sZWFufERyYWdnYWJsZUN1cnNvclBhcmFtc3woKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBCb29sZWFufERyYWdnYWJsZUN1cnNvclBhcmFtcyl9IFtjdXJzb3JdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvbkdyYWJdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvbkRyYWddXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvblJlbGVhc2VdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvblVwZGF0ZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uU2V0dGxlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25TbmFwXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25SZXNpemVdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvbkFmdGVyUmVzaXplXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1NWR0dlb21ldHJ5RWxlbWVudCAmIHtcbiAqICAgc2V0QXR0cmlidXRlKG5hbWU6ICdkcmF3JywgdmFsdWU6IGAke251bWJlcn0gJHtudW1iZXJ9YCk6IHZvaWQ7XG4gKiAgIGRyYXc6IGAke251bWJlcn0gJHtudW1iZXJ9YDtcbiAqIH19IERyYXdhYmxlU1ZHR2VvbWV0cnlcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBFYXNpbmdGdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoJ2xpbmVhcid8J2xpbmVhcih4MSwgeDIgMjUlLCB4MyknfCdpbid8J291dCd8J2luT3V0J3wnaW5RdWFkJ3wnb3V0UXVhZCd8J2luT3V0UXVhZCd8J2luQ3ViaWMnfCdvdXRDdWJpYyd8J2luT3V0Q3ViaWMnfCdpblF1YXJ0J3wnb3V0UXVhcnQnfCdpbk91dFF1YXJ0J3wnaW5RdWludCd8J291dFF1aW50J3wnaW5PdXRRdWludCd8J2luU2luZSd8J291dFNpbmUnfCdpbk91dFNpbmUnfCdpbkNpcmMnfCdvdXRDaXJjJ3wnaW5PdXRDaXJjJ3wnaW5FeHBvJ3wnb3V0RXhwbyd8J2luT3V0RXhwbyd8J2luQm91bmNlJ3wnb3V0Qm91bmNlJ3wnaW5PdXRCb3VuY2UnfCdpbkJhY2snfCdvdXRCYWNrJ3wnaW5PdXRCYWNrJ3wnaW5FbGFzdGljJ3wnb3V0RWxhc3RpYyd8J2luT3V0RWxhc3RpYyd8J2lycmVndWxhcid8J2N1YmljQmV6aWVyJ3wnc3RlcHMnfCdpbihwID0gMS42NzUpJ3wnb3V0KHAgPSAxLjY3NSknfCdpbk91dChwID0gMS42NzUpJ3wnaW5CYWNrKG92ZXJzaG9vdCA9IDEuNzAxNTgpJ3wnb3V0QmFjayhvdmVyc2hvb3QgPSAxLjcwMTU4KSd8J2luT3V0QmFjayhvdmVyc2hvb3QgPSAxLjcwMTU4KSd8J2luRWxhc3RpYyhhbXBsaXR1ZGUgPSAxLCBwZXJpb2QgPSAuMyknfCdvdXRFbGFzdGljKGFtcGxpdHVkZSA9IDEsIHBlcmlvZCA9IC4zKSd8J2luT3V0RWxhc3RpYyhhbXBsaXR1ZGUgPSAxLCBwZXJpb2QgPSAuMyknfCdpcnJlZ3VsYXIobGVuZ3RoID0gMTAsIHJhbmRvbW5lc3MgPSAxKSd8J2N1YmljQmV6aWVyKHgxLCB5MSwgeDIsIHkyKSd8J3N0ZXBzKHN0ZXBzID0gMTApJyl9IEVhc2VTdHJpbmdQYXJhbU5hbWVzXG4gKi9cblxuLy8gQSBoYWNrIHRvIGdldCBib3RoIGVhc2UgbmFtZXMgc3VnZ2VzdGlvbnMgQU5EIGFsbG93IGFueSBzdHJpbmdzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI5NzI5I2lzc3VlY29tbWVudC00NjAzNDY0MjFcbi8qKiBAdHlwZWRlZiB7KFN0cmluZyAmIHt9KXxFYXNlU3RyaW5nUGFyYW1OYW1lc3xFYXNpbmdGdW5jdGlvbnxTcHJpbmd9IEVhc2luZ1BhcmFtICovXG5cbi8qKiBAdHlwZWRlZiB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gRE9NVGFyZ2V0ICovXG4vKiogQHR5cGVkZWYge1JlY29yZDxTdHJpbmcsIGFueT59IEpTVGFyZ2V0ICovXG4vKiogQHR5cGVkZWYge0RPTVRhcmdldHxKU1RhcmdldH0gVGFyZ2V0ICovXG4vKiogQHR5cGVkZWYge1RhcmdldHxOb2RlTGlzdHxTdHJpbmd9IFRhcmdldFNlbGVjdG9yICovXG4vKiogQHR5cGVkZWYge0RPTVRhcmdldHxOb2RlTGlzdHxTdHJpbmd9IERPTVRhcmdldFNlbGVjdG9yICovXG4vKiogQHR5cGVkZWYge0FycmF5LjxET01UYXJnZXRTZWxlY3Rvcj58RE9NVGFyZ2V0U2VsZWN0b3J9IERPTVRhcmdldHNQYXJhbSAqL1xuLyoqIEB0eXBlZGVmIHtBcnJheS48RE9NVGFyZ2V0Pn0gRE9NVGFyZ2V0c0FycmF5ICovXG4vKiogQHR5cGVkZWYge0FycmF5LjxKU1RhcmdldD58SlNUYXJnZXR9IEpTVGFyZ2V0c1BhcmFtICovXG4vKiogQHR5cGVkZWYge0FycmF5LjxKU1RhcmdldD59IEpTVGFyZ2V0c0FycmF5ICovXG4vKiogQHR5cGVkZWYge0FycmF5LjxUYXJnZXRTZWxlY3Rvcj58VGFyZ2V0U2VsZWN0b3J9IFRhcmdldHNQYXJhbSAqL1xuLyoqIEB0eXBlZGVmIHtBcnJheS48VGFyZ2V0Pn0gVGFyZ2V0c0FycmF5ICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEZ1bmN0aW9uVmFsdWVcbiAqIEBwYXJhbSB7VGFyZ2V0fSB0YXJnZXQgLSBUaGUgYW5pbWF0ZWQgdGFyZ2V0XG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBUaGUgdGFyZ2V0IGluZGV4XG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gVGhlIHRvdGFsIG51bWJlciBvZiBhbmltYXRlZCB0YXJnZXRzXG4gKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfFR3ZWVuT2JqZWN0VmFsdWV8QXJyYXkuPE51bWJlcnxTdHJpbmd8VHdlZW5PYmplY3RWYWx1ZT59XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgVHdlZW5Nb2RpZmllclxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIC0gVGhlIGFuaW1hdGVkIHZhbHVlXG4gKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfVxuICovXG5cbi8qKiBAdHlwZWRlZiB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19IENvbG9yQXJyYXkgKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQGNhbGxiYWNrIENhbGxiYWNrXG4gKiBAcGFyYW0ge1R9IHNlbGYgLSBSZXR1cm5zIGl0c2VsZlxuICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IFtlXVxuICogQHJldHVybiB7Kn1cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7b2JqZWN0fSBUXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUaWNrYWJsZUNhbGxiYWNrc1xuICogQHByb3BlcnR5IHtDYWxsYmFjazxUPn0gW29uQmVnaW5dXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFQ+fSBbb25CZWZvcmVVcGRhdGVdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFQ+fSBbb25VcGRhdGVdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFQ+fSBbb25Mb29wXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxUPn0gW29uUGF1c2VdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFQ+fSBbb25Db21wbGV0ZV1cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7b2JqZWN0fSBUXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZW5kZXJhYmxlQ2FsbGJhY2tzXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFQ+fSBbb25SZW5kZXJdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUd2VlblxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGlkXG4gKiBAcHJvcGVydHkge0pTQW5pbWF0aW9ufSBwYXJlbnRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHByb3BlcnR5IHtUYXJnZXR9IHRhcmdldFxuICogQHByb3BlcnR5IHtTdHJpbmd8TnVtYmVyfSBfdmFsdWVcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb258bnVsbH0gX2Z1bmNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IF9lYXNlXG4gKiBAcHJvcGVydHkge0FycmF5LjxOdW1iZXI+fSBfZnJvbU51bWJlcnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPE51bWJlcj59IF90b051bWJlcnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPFN0cmluZz59IF9zdHJpbmdzXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2Zyb21OdW1iZXJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfdG9OdW1iZXJcbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPE51bWJlcj59IF9udW1iZXJzXG4gKiBAcHJvcGVydHkge051bWJlcn0gX251bWJlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IF91bml0XG4gKiBAcHJvcGVydHkge1R3ZWVuTW9kaWZpZXJ9IF9tb2RpZmllclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9jdXJyZW50VGltZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9kZWxheVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF91cGRhdGVEdXJhdGlvblxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9zdGFydFRpbWVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfY2hhbmdlRHVyYXRpb25cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfYWJzb2x1dGVTdGFydFRpbWVcbiAqIEBwcm9wZXJ0eSB7dHdlZW5UeXBlc30gX3R3ZWVuVHlwZVxuICogQHByb3BlcnR5IHt2YWx1ZVR5cGVzfSBfdmFsdWVUeXBlXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2NvbXBvc2l0aW9uXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2lzT3ZlcmxhcHBlZFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9pc092ZXJyaWRkZW5cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfcmVuZGVyVHJhbnNmb3Jtc1xuICogQHByb3BlcnR5IHtUd2Vlbn0gX3ByZXZSZXBcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF9uZXh0UmVwXG4gKiBAcHJvcGVydHkge1R3ZWVufSBfcHJldkFkZFxuICogQHByb3BlcnR5IHtUd2Vlbn0gX25leHRBZGRcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF9wcmV2XG4gKiBAcHJvcGVydHkge1R3ZWVufSBfbmV4dFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgVHdlZW5EZWNvbXBvc2VkVmFsdWVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0IC0gVHlwZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG4gLSBTaW5nbGUgbnVtYmVyIHZhbHVlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdSAtIFZhbHVlIHVuaXRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBvIC0gVmFsdWUgb3BlcmF0b3JcbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPE51bWJlcj59IGQgLSBBcnJheSBvZiBOdW1iZXJzIChpbiBjYXNlIG9mIGNvbXBsZXggdmFsdWUgdHlwZSlcbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPFN0cmluZz59IHMgLSBTdHJpbmdzIChpbiBjYXNlIG9mIGNvbXBsZXggdmFsdWUgdHlwZSlcbiAqL1xuXG4vKiogQHR5cGVkZWYge3tfaGVhZDogbnVsbHxUd2VlbiwgX3RhaWw6IG51bGx8VHdlZW59fSBUd2VlblByb3BlcnR5U2libGluZ3MgKi9cbi8qKiBAdHlwZWRlZiB7UmVjb3JkPFN0cmluZywgVHdlZW5Qcm9wZXJ0eVNpYmxpbmdzPn0gVHdlZW5Mb29rdXBzICovXG4vKiogQHR5cGVkZWYge1dlYWtNYXAuPFRhcmdldCwgVHdlZW5Mb29rdXBzPn0gVHdlZW5SZXBsYWNlTG9va3VwcyAqL1xuLyoqIEB0eXBlZGVmIHtNYXAuPFRhcmdldCwgVHdlZW5Mb29rdXBzPn0gVHdlZW5BZGRpdGl2ZUxvb2t1cHMgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUaW1lck9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFN0cmluZ30gW2lkXVxuICogQHByb3BlcnR5IHtUd2VlblBhcmFtVmFsdWV9IFtkdXJhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5QYXJhbVZhbHVlfSBbZGVsYXldXG4gKiBAcHJvcGVydHkge051bWJlcn0gW2xvb3BEZWxheV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3JldmVyc2VkXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbYWx0ZXJuYXRlXVxuICogQHByb3BlcnR5IHtCb29sZWFufE51bWJlcn0gW2xvb3BdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58U2Nyb2xsT2JzZXJ2ZXJ9IFthdXRvcGxheV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbZnJhbWVSYXRlXVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtwbGF5YmFja1JhdGVdXG4gKi9cblxuLyoqXG5cbi8qKlxuICogQHR5cGVkZWYge1RpbWVyT3B0aW9ucyAmIFRpY2thYmxlQ2FsbGJhY2tzPFRpbWVyPn0gVGltZXJQYXJhbXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtOdW1iZXJ8U3RyaW5nfEZ1bmN0aW9uVmFsdWV9IFR3ZWVuUGFyYW1WYWx1ZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1R3ZWVuUGFyYW1WYWx1ZXxbVHdlZW5QYXJhbVZhbHVlLCBUd2VlblBhcmFtVmFsdWVdfSBUd2VlblByb3BWYWx1ZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhTdHJpbmcgJiB7fSl8J25vbmUnfCdyZXBsYWNlJ3wnYmxlbmQnfGNvbXBvc2l0aW9uVHlwZXN9IFR3ZWVuQ29tcG9zaXRpb25cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFR3ZWVuUGFyYW1zT3B0aW9uc1xuICogQHByb3BlcnR5IHtUd2VlblBhcmFtVmFsdWV9IFtkdXJhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5QYXJhbVZhbHVlfSBbZGVsYXldXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Nb2RpZmllcn0gW21vZGlmaWVyXVxuICogQHByb3BlcnR5IHtUd2VlbkNvbXBvc2l0aW9ufSBbY29tcG9zaXRpb25dXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUd2VlblZhbHVlc1xuICogQHByb3BlcnR5IHtUd2VlblBhcmFtVmFsdWV9IFtmcm9tXVxuICogQHByb3BlcnR5IHtUd2VlblByb3BWYWx1ZX0gW3RvXVxuICogQHByb3BlcnR5IHtUd2VlblByb3BWYWx1ZX0gW2Zyb21Ub11cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtUd2VlblBhcmFtc09wdGlvbnMgJiBUd2VlblZhbHVlc30gVHdlZW5LZXlWYWx1ZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5LjxUd2VlbktleVZhbHVlfFR3ZWVuUHJvcFZhbHVlPn0gQXJyYXlTeW50YXhWYWx1ZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1R3ZWVuUGFyYW1WYWx1ZXxBcnJheVN5bnRheFZhbHVlfFR3ZWVuS2V5VmFsdWV9IFR3ZWVuT3B0aW9uc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1BhcnRpYWw8e3RvOiBUd2VlblBhcmFtVmFsdWV8QXJyYXkuPFR3ZWVuUGFyYW1WYWx1ZT47IGZyb206IFR3ZWVuUGFyYW1WYWx1ZXxBcnJheS48VHdlZW5QYXJhbVZhbHVlPjsgZnJvbVRvOiBUd2VlblBhcmFtVmFsdWV8QXJyYXkuPFR3ZWVuUGFyYW1WYWx1ZT47fT59IFR3ZWVuT2JqZWN0VmFsdWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBlcmNlbnRhZ2VLZXlmcmFtZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1JlY29yZDxTdHJpbmcsIFR3ZWVuUGFyYW1WYWx1ZT59IFBlcmNlbnRhZ2VLZXlmcmFtZVBhcmFtc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1JlY29yZDxTdHJpbmcsIFBlcmNlbnRhZ2VLZXlmcmFtZVBhcmFtcyAmIFBlcmNlbnRhZ2VLZXlmcmFtZU9wdGlvbnM+fSBQZXJjZW50YWdlS2V5ZnJhbWVzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7QXJyYXk8UmVjb3JkPFN0cmluZywgVHdlZW5PcHRpb25zIHwgVHdlZW5Nb2RpZmllciB8IGJvb2xlYW4+ICYgVHdlZW5QYXJhbXNPcHRpb25zPn0gRHVyYXRpb25LZXlmcmFtZXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEFuaW1hdGlvbk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7UGVyY2VudGFnZUtleWZyYW1lc3xEdXJhdGlvbktleWZyYW1lc30gW2tleWZyYW1lc11cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtwbGF5YmFja0Vhc2VdXG4gKi9cblxuLy8gVE9ETzogQ3VycmVudGx5IHNldHRpbmcgVHdlZW5Nb2RpZmllciB0byB0aGUgaW50ZXJzZWN0ZWQgUmVjb3JkPD4gbWFrZXMgdGhlIEZ1bmN0aW9uVmFsdWUgdHlwZSB0YXJnZXQgcGFyYW0gYW55IGlmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBzZXRcbi8qKlxuICogQHR5cGVkZWYge1JlY29yZDxTdHJpbmcsIFR3ZWVuT3B0aW9ucyB8IENhbGxiYWNrPEpTQW5pbWF0aW9uPiB8IFR3ZWVuTW9kaWZpZXIgfCBib29sZWFuIHwgUGVyY2VudGFnZUtleWZyYW1lcyB8IER1cmF0aW9uS2V5ZnJhbWVzIHwgU2Nyb2xsT2JzZXJ2ZXI+ICYgVGltZXJPcHRpb25zICYgQW5pbWF0aW9uT3B0aW9ucyAmIFR3ZWVuUGFyYW1zT3B0aW9ucyAmIFRpY2thYmxlQ2FsbGJhY2tzPEpTQW5pbWF0aW9uPiAmIFJlbmRlcmFibGVDYWxsYmFja3M8SlNBbmltYXRpb24+fSBBbmltYXRpb25QYXJhbXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRpbWVsaW5lT3B0aW9uc1xuICogQHByb3BlcnR5IHtEZWZhdWx0c1BhcmFtc30gW2RlZmF1bHRzXVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW3BsYXliYWNrRWFzZV1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtUaW1lck9wdGlvbnMgJiBUaW1lbGluZU9wdGlvbnMgJiBUaWNrYWJsZUNhbGxiYWNrczxUaW1lbGluZT4gJiBSZW5kZXJhYmxlQ2FsbGJhY2tzPFRpbWVsaW5lPn0gVGltZWxpbmVQYXJhbXNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBBbmltYXRhYmxlUHJvcGVydHlTZXR0ZXJcbiAqIEBwYXJhbSAge051bWJlcnxBcnJheS48TnVtYmVyPn0gdG9cbiAqIEBwYXJhbSAge051bWJlcn0gW2R1cmF0aW9uXVxuICogQHBhcmFtICB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICogQHJldHVybiB7QW5pbWF0YWJsZU9iamVjdH1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBBbmltYXRhYmxlUHJvcGVydHlHZXR0ZXJcbiAqIEByZXR1cm4ge051bWJlcnxBcnJheS48TnVtYmVyPn1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBbmltYXRhYmxlUHJvcGVydHlTZXR0ZXIgJiBBbmltYXRhYmxlUHJvcGVydHlHZXR0ZXJ9IEFuaW1hdGFibGVQcm9wZXJ0eVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0FuaW1hdGFibGUgJiBSZWNvcmQ8U3RyaW5nLCBBbmltYXRhYmxlUHJvcGVydHk+fSBBbmltYXRhYmxlT2JqZWN0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBbmltYXRhYmxlUHJvcGVydHlQYXJhbXNPcHRpb25zXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW3VuaXRdXG4gKiBAcHJvcGVydHkge1R3ZWVuUGFyYW1WYWx1ZX0gW2R1cmF0aW9uXVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKiBAcHJvcGVydHkge1R3ZWVuTW9kaWZpZXJ9IFttb2RpZmllcl1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Db21wb3NpdGlvbn0gW2NvbXBvc2l0aW9uXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1JlY29yZDxTdHJpbmcsIFR3ZWVuUGFyYW1WYWx1ZSB8IEVhc2luZ1BhcmFtIHwgVHdlZW5Nb2RpZmllciB8IFR3ZWVuQ29tcG9zaXRpb24gfCBBbmltYXRhYmxlUHJvcGVydHlQYXJhbXNPcHRpb25zPiAmIEFuaW1hdGFibGVQcm9wZXJ0eVBhcmFtc09wdGlvbnN9IEFuaW1hdGFibGVQYXJhbXNcbiAqL1xuXG5cbi8vIEVudmlyb25tZW50c1xuXG4vLyBUT0RPOiBEbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHdlJ3JlIHJ1bm5pbmcgaW5zaWRlIGEgd29ya2VyID9cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG4vKiogQHR5cGUge09iamVjdHxOdWxsfSAqL1xuY29uc3Qgd2luID0gaXNCcm93c2VyID8gd2luZG93IDogbnVsbDtcblxuLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cbmNvbnN0IGRvYyA9IGlzQnJvd3NlciA/IGRvY3VtZW50IDogbnVsbDtcblxuLy8gRW51bXNcblxuLyoqIEBlbnVtIHtOdW1iZXJ9ICovXG5jb25zdCB0d2VlblR5cGVzID0ge1xuICBPQkpFQ1Q6IDAsXG4gIEFUVFJJQlVURTogMSxcbiAgQ1NTOiAyLFxuICBUUkFOU0ZPUk06IDMsXG4gIENTU19WQVI6IDQsXG59O1xuXG4vKiogQGVudW0ge051bWJlcn0gKi9cbmNvbnN0IHZhbHVlVHlwZXMgPSB7XG4gIE5VTUJFUjogMCxcbiAgVU5JVDogMSxcbiAgQ09MT1I6IDIsXG4gIENPTVBMRVg6IDMsXG59O1xuXG4vKiogQGVudW0ge051bWJlcn0gKi9cbmNvbnN0IHRpY2tNb2RlcyA9IHtcbiAgTk9ORTogMCxcbiAgQVVUTzogMSxcbiAgRk9SQ0U6IDIsXG59O1xuXG4vKiogQGVudW0ge051bWJlcn0gKi9cbmNvbnN0IGNvbXBvc2l0aW9uVHlwZXMgPSB7XG4gIHJlcGxhY2U6IDAsXG4gIG5vbmU6IDEsXG4gIGJsZW5kOiAyLFxufTtcblxuLy8gQ2FjaGUgc3ltYm9sc1xuXG5jb25zdCBpc1JlZ2lzdGVyZWRUYXJnZXRTeW1ib2wgPSBTeW1ib2woKTtcbmNvbnN0IGlzRG9tU3ltYm9sID0gU3ltYm9sKCk7XG5jb25zdCBpc1N2Z1N5bWJvbCA9IFN5bWJvbCgpO1xuY29uc3QgdHJhbnNmb3Jtc1N5bWJvbCA9IFN5bWJvbCgpO1xuY29uc3QgbW9ycGhQb2ludHNTeW1ib2wgPSBTeW1ib2woKTtcbmNvbnN0IHByb3h5VGFyZ2V0U3ltYm9sID0gU3ltYm9sKCk7XG5cbi8vIE51bWJlcnNcblxuY29uc3QgbWluVmFsdWUgPSAxZS0xMTtcbmNvbnN0IG1heFZhbHVlID0gMWUxMjtcbmNvbnN0IEsgPSAxZTM7XG5jb25zdCBtYXhGcHMgPSAxMjA7XG5cbi8vIFN0cmluZ3NcblxuY29uc3QgZW1wdHlTdHJpbmcgPSAnJztcbmNvbnN0IHNob3J0VHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcblxuc2hvcnRUcmFuc2Zvcm1zLnNldCgneCcsICd0cmFuc2xhdGVYJyk7XG5zaG9ydFRyYW5zZm9ybXMuc2V0KCd5JywgJ3RyYW5zbGF0ZVknKTtcbnNob3J0VHJhbnNmb3Jtcy5zZXQoJ3onLCAndHJhbnNsYXRlWicpO1xuXG5jb25zdCB2YWxpZFRyYW5zZm9ybXMgPSBbXG4gICd0cmFuc2xhdGVYJyxcbiAgJ3RyYW5zbGF0ZVknLFxuICAndHJhbnNsYXRlWicsXG4gICdyb3RhdGUnLFxuICAncm90YXRlWCcsXG4gICdyb3RhdGVZJyxcbiAgJ3JvdGF0ZVonLFxuICAnc2NhbGUnLFxuICAnc2NhbGVYJyxcbiAgJ3NjYWxlWScsXG4gICdzY2FsZVonLFxuICAnc2tldycsXG4gICdza2V3WCcsXG4gICdza2V3WScsXG4gICdwZXJzcGVjdGl2ZScsXG4gICdtYXRyaXgnLFxuICAnbWF0cml4M2QnLFxuXTtcblxuY29uc3QgdHJhbnNmb3Jtc0ZyYWdtZW50U3RyaW5ncyA9IHZhbGlkVHJhbnNmb3Jtcy5yZWR1Y2UoKGEsIHYpID0+ICh7Li4uYSwgW3ZdOiB2ICsgJygnfSksIHt9KTtcblxuLy8gRnVuY3Rpb25zXG5cbi8qKiBAcmV0dXJuIHt2b2lkfSAqL1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vLyBSZWdleFxuXG5jb25zdCBoZXhUZXN0Umd4ID0gLyheIyhbXFxkYS1mXXszfSl7MSwyfSQpfCheIyhbXFxkYS1mXXs0fSl7MSwyfSQpL2k7XG5jb25zdCByZ2JFeGVjUmd4ID0gL3JnYlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqXFwpL2k7XG5jb25zdCByZ2JhRXhlY1JneCA9IC9yZ2JhXFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspXFxzKlxcKS9pO1xuY29uc3QgaHNsRXhlY1JneCA9IC9oc2xcXChcXHMqKC0/XFxkK3wtP1xcZCouXFxkKylcXHMqLFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKSVcXHMqLFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKSVcXHMqXFwpL2k7XG5jb25zdCBoc2xhRXhlY1JneCA9IC9oc2xhXFwoXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspXFxzKixcXHMqKC0/XFxkK3wtP1xcZCouXFxkKyklXFxzKixcXHMqKC0/XFxkK3wtP1xcZCouXFxkKyklXFxzKixcXHMqKC0/XFxkK3wtP1xcZCouXFxkKylcXHMqXFwpL2k7XG4vLyBleHBvcnQgY29uc3QgZGlnaXRXaXRoRXhwb25lbnRSZ3ggPSAvWy0rXT9cXGQqXFwuP1xcZCsoPzpbZUVdWy0rXT9cXGQrKT8vZztcbmNvbnN0IGRpZ2l0V2l0aEV4cG9uZW50Umd4ID0gL1stK10/XFxkKlxcLj9cXGQrKD86ZVstK10/XFxkKT8vZ2k7XG4vLyBleHBvcnQgY29uc3QgdW5pdHNFeGVjUmd4ID0gL14oWy0rXT9cXGQqXFwuP1xcZCsoPzpbZUVdWy0rXT9cXGQrKT8pKyhbYS16XSt8JSkkL2k7XG5jb25zdCB1bml0c0V4ZWNSZ3ggPSAvXihbLStdP1xcZCpcXC4/XFxkKyg/OmVbLStdP1xcZCspPykoW2Etel0rfCUpJC9pO1xuY29uc3QgbG93ZXJDYXNlUmd4ID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCB0cmFuc2Zvcm1zRXhlY1JneCA9IC8oXFx3KykoXFwoW14pXStcXCkrKS9nOyAvLyBNYXRjaCBpbmxpbmUgdHJhbnNmb3JtcyB3aXRoIGNhY2woKSB2YWx1ZXMsIHJldHVybnMgdGhlIHZhbHVlIHdyYXBwZWQgaW4gKClcbmNvbnN0IHJlbGF0aXZlVmFsdWVzRXhlY1JneCA9IC8oXFwqPXxcXCs9fC09KS87XG5cblxuXG5cbi8qKiBAdHlwZSB7RGVmYXVsdHNQYXJhbXN9ICovXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgaWQ6IG51bGwsXG4gIGtleWZyYW1lczogbnVsbCxcbiAgcGxheWJhY2tFYXNlOiBudWxsLFxuICBwbGF5YmFja1JhdGU6IDEsXG4gIGZyYW1lUmF0ZTogbWF4RnBzLFxuICBsb29wOiAwLFxuICByZXZlcnNlZDogZmFsc2UsXG4gIGFsdGVybmF0ZTogZmFsc2UsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBkdXJhdGlvbjogSyxcbiAgZGVsYXk6IDAsXG4gIGxvb3BEZWxheTogMCxcbiAgZWFzZTogJ291dCgyKScsXG4gIGNvbXBvc2l0aW9uOiBjb21wb3NpdGlvblR5cGVzLnJlcGxhY2UsXG4gIG1vZGlmaWVyOiB2ID0+IHYsXG4gIG9uQmVnaW46IG5vb3AsXG4gIG9uQmVmb3JlVXBkYXRlOiBub29wLFxuICBvblVwZGF0ZTogbm9vcCxcbiAgb25Mb29wOiBub29wLFxuICBvblBhdXNlOiBub29wLFxuICBvbkNvbXBsZXRlOiBub29wLFxuICBvblJlbmRlcjogbm9vcCxcbn07XG5cbmNvbnN0IGdsb2JhbHMgPSB7XG4gIC8qKiBAdHlwZSB7RGVmYXVsdHNQYXJhbXN9ICovXG4gIGRlZmF1bHRzLFxuICAvKiogQHR5cGUge0RvY3VtZW50fERPTVRhcmdldH0gKi9cbiAgcm9vdDogZG9jLFxuICAvKiogQHR5cGUge1Njb3BlfSAqL1xuICBzY29wZTogbnVsbCxcbiAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gIHByZWNpc2lvbjogNCxcbiAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gIHRpbWVTY2FsZTogMSxcbiAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gIHRpY2tUaHJlc2hvbGQ6IDIwMCxcbn07XG5cbmNvbnN0IGdsb2JhbFZlcnNpb25zID0geyB2ZXJzaW9uOiAnNC4wLjInLCBlbmdpbmU6IG51bGwgfTtcblxuaWYgKGlzQnJvd3Nlcikge1xuICBpZiAoIXdpbi5BbmltZUpTKSB3aW4uQW5pbWVKUyA9IFtdO1xuICB3aW4uQW5pbWVKUy5wdXNoKGdsb2JhbFZlcnNpb25zKTtcbn1cblxuLy8gU3RyaW5nc1xuXG4vKipcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHRvTG93ZXJDYXNlID0gc3RyID0+IHN0ci5yZXBsYWNlKGxvd2VyQ2FzZVJneCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcblxuLyoqXG4gKiBQcmlvcml0aXplIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgcmVnZXggd2hlbiBwb3NzaWJsZVxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSAge1N0cmluZ30gc3ViXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBzdHJpbmdTdGFydHNXaXRoID0gKHN0ciwgc3ViKSA9PiBzdHIuaW5kZXhPZihzdWIpID09PSAwO1xuXG4vLyBUaW1lXG4vLyBOb3RlOiBEYXRlLm5vdyBpcyB1c2VkIGluc3RlYWQgb2YgcGVyZm9ybWFuY2Uubm93IHNpbmNlIGl0IGlzIHByZWNpc2UgZW5vdWdoIGZvciB0aW1pbmdzIGNhbGN1bGF0aW9ucywgcGVyZm9ybXMgc2xpZ2h0bHkgZmFzdGVyIGFuZCB3b3JrcyBpbiBOb2RlLmpzIGVudmlyb25lbWVudC5cbmNvbnN0IG5vdyA9IERhdGUubm93O1xuXG4vLyBUeXBlcyBjaGVja2Vyc1xuXG5jb25zdCBpc0FyciA9IEFycmF5LmlzQXJyYXk7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHthIGlzIFJlY29yZDxTdHJpbmcsIGFueT59ICovXG5jb25zdCBpc09iaiA9IGEgPT4gYSAmJiBhLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHthIGlzIE51bWJlcn0gKi9cbmNvbnN0IGlzTnVtID0gYSA9PiB0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKGEpO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7YSBpcyBTdHJpbmd9ICovXG5jb25zdCBpc1N0ciA9IGEgPT4gdHlwZW9mIGEgPT09ICdzdHJpbmcnO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7YSBpcyBGdW5jdGlvbn0gKi9cbmNvbnN0IGlzRm5jID0gYSA9PiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge2EgaXMgdW5kZWZpbmVkfSAqL1xuY29uc3QgaXNVbmQgPSBhID0+IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJztcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge2EgaXMgbnVsbCB8IHVuZGVmaW5lZH0gKi9cbmNvbnN0IGlzTmlsID0gYSA9PiBpc1VuZChhKSB8fCBhID09PSBudWxsO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7YSBpcyBTVkdFbGVtZW50fSAqL1xuY29uc3QgaXNTdmcgPSBhID0+IGlzQnJvd3NlciAmJiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge0Jvb2xlYW59ICovXG5jb25zdCBpc0hleCA9IGEgPT4gaGV4VGVzdFJneC50ZXN0KGEpO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7Qm9vbGVhbn0gKi9cbmNvbnN0IGlzUmdiID0gYSA9PiBzdHJpbmdTdGFydHNXaXRoKGEsICdyZ2InKTtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge0Jvb2xlYW59ICovXG5jb25zdCBpc0hzbCA9IGEgPT4gc3RyaW5nU3RhcnRzV2l0aChhLCAnaHNsJyk7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHtCb29sZWFufSAqL1xuY29uc3QgaXNDb2wgPSBhID0+IGlzSGV4KGEpIHx8IGlzUmdiKGEpIHx8IGlzSHNsKGEpO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7Qm9vbGVhbn0gKi9cbmNvbnN0IGlzS2V5ID0gYSA9PiAhZ2xvYmFscy5kZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShhKTtcblxuLy8gTnVtYmVyXG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHBhcnNlTnVtYmVyID0gc3RyID0+IGlzU3RyKHN0cikgP1xuICBwYXJzZUZsb2F0KC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhzdHIpKSA6XG4gIC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhzdHIpO1xuXG4vLyBNYXRoXG5cbmNvbnN0IHBvdyA9IE1hdGgucG93O1xuY29uc3Qgc3FydCA9IE1hdGguc3FydDtcbmNvbnN0IHNpbiA9IE1hdGguc2luO1xuY29uc3QgY29zID0gTWF0aC5jb3M7XG5jb25zdCBhYnMgPSBNYXRoLmFicztcbmNvbnN0IGV4cCA9IE1hdGguZXhwO1xuY29uc3QgY2VpbCA9IE1hdGguY2VpbDtcbmNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbmNvbnN0IGFzaW4gPSBNYXRoLmFzaW47XG5jb25zdCBtYXggPSBNYXRoLm1heDtcbmNvbnN0IGF0YW4yID0gTWF0aC5hdGFuMjtcbmNvbnN0IFBJID0gTWF0aC5QSTtcbmNvbnN0IF9yb3VuZCA9IE1hdGgucm91bmQ7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgY2xhbXAgPSAodiwgbWluLCBtYXgpID0+IHYgPCBtaW4gPyBtaW4gOiB2ID4gbWF4ID8gbWF4IDogdjtcblxuY29uc3QgcG93Q2FjaGUgPSB7fTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEBwYXJhbSAge051bWJlcn0gZGVjaW1hbExlbmd0aFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCByb3VuZCA9ICh2LCBkZWNpbWFsTGVuZ3RoKSA9PiB7XG4gIGlmIChkZWNpbWFsTGVuZ3RoIDwgMCkgcmV0dXJuIHY7XG4gIGlmICghZGVjaW1hbExlbmd0aCkgcmV0dXJuIF9yb3VuZCh2KTtcbiAgbGV0IHAgPSBwb3dDYWNoZVtkZWNpbWFsTGVuZ3RoXTtcbiAgaWYgKCFwKSBwID0gcG93Q2FjaGVbZGVjaW1hbExlbmd0aF0gPSAxMCAqKiBkZWNpbWFsTGVuZ3RoO1xuICByZXR1cm4gX3JvdW5kKHYgKiBwKSAvIHA7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHBhcmFtICB7TnVtYmVyfEFycmF5PE51bWJlcj59IGluY3JlbWVudFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBzbmFwID0gKHYsIGluY3JlbWVudCkgPT4gaXNBcnIoaW5jcmVtZW50KSA/IGluY3JlbWVudC5yZWR1Y2UoKGNsb3Nlc3QsIGN2KSA9PiAoYWJzKGN2IC0gdikgPCBhYnMoY2xvc2VzdCAtIHYpID8gY3YgOiBjbG9zZXN0KSkgOiBpbmNyZW1lbnQgPyBfcm91bmQodiAvIGluY3JlbWVudCkgKiBpbmNyZW1lbnQgOiB2O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSAge051bWJlcn0gZW5kXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGludGVycG9sYXRlID0gKHN0YXJ0LCBlbmQsIHByb2dyZXNzKSA9PiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBwcm9ncmVzcztcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgY2xhbXBJbmZpbml0eSA9IHYgPT4gdiA9PT0gSW5maW5pdHkgPyBtYXhWYWx1ZSA6IHYgPT09IC1JbmZpbml0eSA/IC0xZTEyIDogdjtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3Qgbm9ybWFsaXplVGltZSA9IHYgPT4gdiA8PSBtaW5WYWx1ZSA/IG1pblZhbHVlIDogY2xhbXBJbmZpbml0eShyb3VuZCh2LCAxMSkpO1xuXG4vLyBBcnJheXNcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUW119IGFcbiAqIEByZXR1cm4ge1RbXX1cbiAqL1xuY29uc3QgY2xvbmVBcnJheSA9IGEgPT4gaXNBcnIoYSkgPyBbIC4uLmEgXSA6IGE7XG5cbi8vIE9iamVjdHNcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHRlbXBsYXRlIFVcbiAqIEBwYXJhbSB7VH0gbzFcbiAqIEBwYXJhbSB7VX0gbzJcbiAqIEByZXR1cm4ge1QgJiBVfVxuICovXG5jb25zdCBtZXJnZU9iamVjdHMgPSAobzEsIG8yKSA9PiB7XG4gIGNvbnN0IG1lcmdlZCA9IC8qKiBAdHlwZSB7VCAmIFV9ICovKHsgLi4ubzEgfSk7XG4gIGZvciAobGV0IHAgaW4gbzIpIHtcbiAgICBjb25zdCBvMXAgPSAvKiogQHR5cGUge1QgJiBVfSAqLyhvMSlbcF07XG4gICAgbWVyZ2VkW3BdID0gaXNVbmQobzFwKSA/IC8qKiBAdHlwZSB7VCAmIFV9ICovKG8yKVtwXSA6IG8xcDtcbiAgfSAgcmV0dXJuIG1lcmdlZDtcbn07XG5cbi8vIExpbmtlZCBsaXN0c1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtyZXZlcnNlXVxuICogQHBhcmFtIHtTdHJpbmd9IFtwcmV2UHJvcF1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbbmV4dFByb3BdXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoQ2hpbGRyZW4gPSAocGFyZW50LCBjYWxsYmFjaywgcmV2ZXJzZSwgcHJldlByb3AgPSAnX3ByZXYnLCBuZXh0UHJvcCA9ICdfbmV4dCcpID0+IHtcbiAgbGV0IG5leHQgPSBwYXJlbnQuX2hlYWQ7XG4gIGxldCBhZGp1c3RlZE5leHRQcm9wID0gbmV4dFByb3A7XG4gIGlmIChyZXZlcnNlKSB7XG4gICAgbmV4dCA9IHBhcmVudC5fdGFpbDtcbiAgICBhZGp1c3RlZE5leHRQcm9wID0gcHJldlByb3A7XG4gIH1cbiAgd2hpbGUgKG5leHQpIHtcbiAgICBjb25zdCBjdXJyZW50TmV4dCA9IG5leHRbYWRqdXN0ZWROZXh0UHJvcF07XG4gICAgY2FsbGJhY2sobmV4dCk7XG4gICAgbmV4dCA9IGN1cnJlbnROZXh0O1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyZW50XG4gKiBAcGFyYW0gIHtPYmplY3R9IGNoaWxkXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtwcmV2UHJvcF1cbiAqIEBwYXJhbSAge1N0cmluZ30gW25leHRQcm9wXVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuY29uc3QgcmVtb3ZlQ2hpbGQgPSAocGFyZW50LCBjaGlsZCwgcHJldlByb3AgPSAnX3ByZXYnLCBuZXh0UHJvcCA9ICdfbmV4dCcpID0+IHtcbiAgY29uc3QgcHJldiA9IGNoaWxkW3ByZXZQcm9wXTtcbiAgY29uc3QgbmV4dCA9IGNoaWxkW25leHRQcm9wXTtcbiAgcHJldiA/IHByZXZbbmV4dFByb3BdID0gbmV4dCA6IHBhcmVudC5faGVhZCA9IG5leHQ7XG4gIG5leHQgPyBuZXh0W3ByZXZQcm9wXSA9IHByZXYgOiBwYXJlbnQuX3RhaWwgPSBwcmV2O1xuICBjaGlsZFtwcmV2UHJvcF0gPSBudWxsO1xuICBjaGlsZFtuZXh0UHJvcF0gPSBudWxsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBhcmVudFxuICogQHBhcmFtICB7T2JqZWN0fSBjaGlsZFxuICogQHBhcmFtICB7RnVuY3Rpb259IFtzb3J0TWV0aG9kXVxuICogQHBhcmFtICB7U3RyaW5nfSBwcmV2UHJvcFxuICogQHBhcmFtICB7U3RyaW5nfSBuZXh0UHJvcFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuY29uc3QgYWRkQ2hpbGQgPSAocGFyZW50LCBjaGlsZCwgc29ydE1ldGhvZCwgcHJldlByb3AgPSAnX3ByZXYnLCBuZXh0UHJvcCA9ICdfbmV4dCcpID0+IHtcbiAgbGV0IHByZXYgPSBwYXJlbnQuX3RhaWw7XG4gIHdoaWxlIChwcmV2ICYmIHNvcnRNZXRob2QgJiYgc29ydE1ldGhvZChwcmV2LCBjaGlsZCkpIHByZXYgPSBwcmV2W3ByZXZQcm9wXTtcbiAgY29uc3QgbmV4dCA9IHByZXYgPyBwcmV2W25leHRQcm9wXSA6IHBhcmVudC5faGVhZDtcbiAgcHJldiA/IHByZXZbbmV4dFByb3BdID0gY2hpbGQgOiBwYXJlbnQuX2hlYWQgPSBjaGlsZDtcbiAgbmV4dCA/IG5leHRbcHJldlByb3BdID0gY2hpbGQgOiBwYXJlbnQuX3RhaWwgPSBjaGlsZDtcbiAgY2hpbGRbcHJldlByb3BdID0gcHJldjtcbiAgY2hpbGRbbmV4dFByb3BdID0gbmV4dDtcbn07XG5cbi8qXG4gKiBCYXNlIGNsYXNzIHRvIGNvbnRyb2wgZnJhbWVyYXRlIGFuZCBwbGF5YmFjayByYXRlLlxuICogSW5oZXJpdGVkIGJ5IEVuZ2luZSwgVGltZXIsIEFuaW1hdGlvbiBhbmQgVGltZWxpbmUuXG4gKi9cbmNsYXNzIENsb2NrIHtcblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IFtpbml0VGltZV0gKi9cbiAgY29uc3RydWN0b3IoaW5pdFRpbWUgPSAwKSB7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5kZWx0YVRpbWUgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gaW5pdFRpbWU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fZWxhcHNlZFRpbWUgPSBpbml0VGltZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBpbml0VGltZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9sYXN0VGltZSA9IGluaXRUaW1lO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3NjaGVkdWxlZFRpbWUgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2ZyYW1lRHVyYXRpb24gPSByb3VuZChLIC8gbWF4RnBzLCAwKTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9mcHMgPSBtYXhGcHM7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fc3BlZWQgPSAxO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLl9oYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7VGlja2FibGV8VHdlZW59ICovXG4gICAgdGhpcy5faGVhZCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtUaWNrYWJsZXxUd2Vlbn0gKi9cbiAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgfVxuXG4gIGdldCBmcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZwcztcbiAgfVxuXG4gIHNldCBmcHMoZnJhbWVSYXRlKSB7XG4gICAgY29uc3QgcHJldmlvdXNGcmFtZUR1cmF0aW9uID0gdGhpcy5fZnJhbWVEdXJhdGlvbjtcbiAgICBjb25zdCBmciA9ICtmcmFtZVJhdGU7XG4gICAgY29uc3QgZnBzID0gZnIgPCBtaW5WYWx1ZSA/IG1pblZhbHVlIDogZnI7XG4gICAgY29uc3QgZnJhbWVEdXJhdGlvbiA9IHJvdW5kKEsgLyBmcHMsIDApO1xuICAgIHRoaXMuX2ZwcyA9IGZwcztcbiAgICB0aGlzLl9mcmFtZUR1cmF0aW9uID0gZnJhbWVEdXJhdGlvbjtcbiAgICB0aGlzLl9zY2hlZHVsZWRUaW1lICs9IGZyYW1lRHVyYXRpb24gLSBwcmV2aW91c0ZyYW1lRHVyYXRpb247XG4gIH1cblxuICBnZXQgc3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICB9XG5cbiAgc2V0IHNwZWVkKHBsYXliYWNrUmF0ZSkge1xuICAgIGNvbnN0IHBiciA9ICtwbGF5YmFja1JhdGU7XG4gICAgdGhpcy5fc3BlZWQgPSBwYnIgPCBtaW5WYWx1ZSA/IG1pblZhbHVlIDogcGJyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZVxuICAgKiBAcmV0dXJuIHt0aWNrTW9kZXN9XG4gICAqL1xuICByZXF1ZXN0VGljayh0aW1lKSB7XG4gICAgY29uc3Qgc2NoZWR1bGVkVGltZSA9IHRoaXMuX3NjaGVkdWxlZFRpbWU7XG4gICAgY29uc3QgZWxhcHNlZFRpbWUgPSB0aGlzLl9lbGFwc2VkVGltZTtcbiAgICB0aGlzLl9lbGFwc2VkVGltZSArPSAodGltZSAtIGVsYXBzZWRUaW1lKTtcbiAgICAvLyBJZiB0aGUgZWxhcHNlZCB0aW1lIGlzIGxvd2VyIHRoYW4gdGhlIHNjaGVkdWxlZCB0aW1lXG4gICAgLy8gdGhpcyBtZWFucyBub3QgZW5vdWdoIHRpbWUgaGFzIHBhc3NlZCB0byBoaXQgb25lIGZyYW1lRHVyYXRpb25cbiAgICAvLyBzbyBza2lwIHRoYXQgZnJhbWVcbiAgICBpZiAoZWxhcHNlZFRpbWUgPCBzY2hlZHVsZWRUaW1lKSByZXR1cm4gdGlja01vZGVzLk5PTkU7XG4gICAgY29uc3QgZnJhbWVEdXJhdGlvbiA9IHRoaXMuX2ZyYW1lRHVyYXRpb247XG4gICAgY29uc3QgZnJhbWVEZWx0YSA9IGVsYXBzZWRUaW1lIC0gc2NoZWR1bGVkVGltZTtcbiAgICAvLyBFbnN1cmVzIHRoYXQgX3NjaGVkdWxlZFRpbWUgcHJvZ3Jlc3NlcyBpbiBzdGVwcyBvZiBhdCBsZWFzdCAxIGZyYW1lRHVyYXRpb24uXG4gICAgLy8gU2tpcHMgYWhlYWQgaWYgdGhlIGFjdHVhbCBlbGFwc2VkIHRpbWUgaXMgaGlnaGVyLlxuICAgIHRoaXMuX3NjaGVkdWxlZFRpbWUgKz0gZnJhbWVEZWx0YSA8IGZyYW1lRHVyYXRpb24gPyBmcmFtZUR1cmF0aW9uIDogZnJhbWVEZWx0YTtcbiAgICByZXR1cm4gdGlja01vZGVzLkFVVE87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGNvbXB1dGVEZWx0YVRpbWUodGltZSkge1xuICAgIGNvbnN0IGRlbHRhID0gdGltZSAtIHRoaXMuX2xhc3RUaW1lO1xuICAgIHRoaXMuZGVsdGFUaW1lID0gZGVsdGE7XG4gICAgdGhpcy5fbGFzdFRpbWUgPSB0aW1lO1xuICAgIHJldHVybiBkZWx0YTtcbiAgfVxuXG59XG5cblxuXG5cbi8qKlxuICogQHBhcmFtICB7VGlja2FibGV9IHRpY2thYmxlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVcbiAqIEBwYXJhbSAge051bWJlcn0gbXV0ZUNhbGxiYWNrc1xuICogQHBhcmFtICB7TnVtYmVyfSBpbnRlcm5hbFJlbmRlclxuICogQHBhcmFtICB7dGlja01vZGVzfSB0aWNrTW9kZVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCByZW5kZXIgPSAodGlja2FibGUsIHRpbWUsIG11dGVDYWxsYmFja3MsIGludGVybmFsUmVuZGVyLCB0aWNrTW9kZSkgPT4ge1xuXG4gIGNvbnN0IHBhcmVudCA9IHRpY2thYmxlLnBhcmVudDtcbiAgY29uc3QgZHVyYXRpb24gPSB0aWNrYWJsZS5kdXJhdGlvbjtcbiAgY29uc3QgY29tcGxldGVkID0gdGlja2FibGUuY29tcGxldGVkO1xuICBjb25zdCBpdGVyYXRpb25EdXJhdGlvbiA9IHRpY2thYmxlLml0ZXJhdGlvbkR1cmF0aW9uO1xuICBjb25zdCBpdGVyYXRpb25Db3VudCA9IHRpY2thYmxlLml0ZXJhdGlvbkNvdW50O1xuICBjb25zdCBfY3VycmVudEl0ZXJhdGlvbiA9IHRpY2thYmxlLl9jdXJyZW50SXRlcmF0aW9uO1xuICBjb25zdCBfbG9vcERlbGF5ID0gdGlja2FibGUuX2xvb3BEZWxheTtcbiAgY29uc3QgX3JldmVyc2VkID0gdGlja2FibGUuX3JldmVyc2VkO1xuICBjb25zdCBfYWx0ZXJuYXRlID0gdGlja2FibGUuX2FsdGVybmF0ZTtcbiAgY29uc3QgX2hhc0NoaWxkcmVuID0gdGlja2FibGUuX2hhc0NoaWxkcmVuO1xuICBjb25zdCB0aWNrYWJsZURlbGF5ID0gdGlja2FibGUuX2RlbGF5O1xuICBjb25zdCB0aWNrYWJsZVByZXZBYnNvbHV0ZVRpbWUgPSB0aWNrYWJsZS5fY3VycmVudFRpbWU7IC8vIFRPRE86IHJlbmFtZSAuX2N1cnJlbnRUaW1lIHRvIC5fYWJzb2x1dGVDdXJyZW50VGltZVxuXG4gIGNvbnN0IHRpY2thYmxlRW5kVGltZSA9IHRpY2thYmxlRGVsYXkgKyBpdGVyYXRpb25EdXJhdGlvbjtcbiAgY29uc3QgdGlja2FibGVBYnNvbHV0ZVRpbWUgPSB0aW1lIC0gdGlja2FibGVEZWxheTtcbiAgY29uc3QgdGlja2FibGVQcmV2VGltZSA9IGNsYW1wKHRpY2thYmxlUHJldkFic29sdXRlVGltZSwgLXRpY2thYmxlRGVsYXksIGR1cmF0aW9uKTtcbiAgY29uc3QgdGlja2FibGVDdXJyZW50VGltZSA9IGNsYW1wKHRpY2thYmxlQWJzb2x1dGVUaW1lLCAtdGlja2FibGVEZWxheSwgZHVyYXRpb24pO1xuICBjb25zdCBkZWx0YVRpbWUgPSB0aWNrYWJsZUFic29sdXRlVGltZSAtIHRpY2thYmxlUHJldkFic29sdXRlVGltZTtcbiAgY29uc3QgaXNDdXJyZW50VGltZUFib3ZlWmVybyA9IHRpY2thYmxlQ3VycmVudFRpbWUgPiAwO1xuICBjb25zdCBpc0N1cnJlbnRUaW1lRXF1YWxPckFib3ZlRHVyYXRpb24gPSB0aWNrYWJsZUN1cnJlbnRUaW1lID49IGR1cmF0aW9uO1xuICBjb25zdCBpc1NldHRlciA9IGR1cmF0aW9uIDw9IG1pblZhbHVlO1xuICBjb25zdCBmb3JjZWRUaWNrID0gdGlja01vZGUgPT09IHRpY2tNb2Rlcy5GT1JDRTtcblxuICBsZXQgaXNPZGQgPSAwO1xuICBsZXQgaXRlcmF0aW9uRWxhcHNlZFRpbWUgPSB0aWNrYWJsZUFic29sdXRlVGltZTtcbiAgLy8gUmVuZGVyIGNoZWNrc1xuICAvLyBVc2VkIHRvIGFsc28gY2hlY2sgaWYgdGhlIGNoaWxkcmVuIGhhdmUgcmVuZGVyZWQgaW4gb3JkZXIgdG8gdHJpZ2dlciB0aGUgb25SZW5kZXIgY2FsbGJhY2sgb24gdGhlIHBhcmVudCB0aW1lclxuICBsZXQgaGFzUmVuZGVyZWQgPSAwO1xuXG4gIC8vIEV4ZWN1dGUgdGhlIFwiZXhwZW5zaXZlXCIgaXRlcmF0aW9ucyBjYWxjdWxhdGlvbnMgb25seSB3aGVuIG5lY2Vzc2FyeVxuICBpZiAoaXRlcmF0aW9uQ291bnQgPiAxKSB7XG4gICAgLy8gYml0d2lzZSBOT1Qgb3BlcmF0b3Igc2VlbXMgdG8gYmUgZ2VuZXJhbGx5IGZhc3RlciB0aGFuIE1hdGguZmxvb3IoKSBhY3Jvc3MgYnJvd3NlcnNcbiAgICBjb25zdCBjdXJyZW50SXRlcmF0aW9uID0gfn4odGlja2FibGVDdXJyZW50VGltZSAvIChpdGVyYXRpb25EdXJhdGlvbiArIChpc0N1cnJlbnRUaW1lRXF1YWxPckFib3ZlRHVyYXRpb24gPyAwIDogX2xvb3BEZWxheSkpKTtcbiAgICB0aWNrYWJsZS5fY3VycmVudEl0ZXJhdGlvbiA9IGNsYW1wKGN1cnJlbnRJdGVyYXRpb24sIDAsIGl0ZXJhdGlvbkNvdW50KTtcbiAgICAvLyBQcmV2ZW50IHRoZSBpdGVyYXRpb24gY291bnQgdG8gZ28gYWJvdmUgdGhlIG1heCBpdGVyYXRpb25zIHdoZW4gcmVhY2hpbmcgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uXG4gICAgaWYgKGlzQ3VycmVudFRpbWVFcXVhbE9yQWJvdmVEdXJhdGlvbikgdGlja2FibGUuX2N1cnJlbnRJdGVyYXRpb24tLTtcbiAgICBpc09kZCA9IHRpY2thYmxlLl9jdXJyZW50SXRlcmF0aW9uICUgMjtcbiAgICBpdGVyYXRpb25FbGFwc2VkVGltZSA9IHRpY2thYmxlQ3VycmVudFRpbWUgJSAoaXRlcmF0aW9uRHVyYXRpb24gKyBfbG9vcERlbGF5KSB8fCAwO1xuICB9XG5cbiAgLy8gQ2hlY2tzIGlmIGV4YWN0bHkgb25lIG9mIF9yZXZlcnNlZCBhbmQgKF9hbHRlcm5hdGUgJiYgaXNPZGQpIGlzIHRydWVcbiAgY29uc3QgaXNSZXZlcnNlZCA9IF9yZXZlcnNlZCBeIChfYWx0ZXJuYXRlICYmIGlzT2RkKTtcbiAgY29uc3QgX2Vhc2UgPSAvKiogQHR5cGUge1JlbmRlcmFibGV9ICovKHRpY2thYmxlKS5fZWFzZTtcbiAgbGV0IGl0ZXJhdGlvblRpbWUgPSBpc0N1cnJlbnRUaW1lRXF1YWxPckFib3ZlRHVyYXRpb24gPyBpc1JldmVyc2VkID8gMCA6IGR1cmF0aW9uIDogaXNSZXZlcnNlZCA/IGl0ZXJhdGlvbkR1cmF0aW9uIC0gaXRlcmF0aW9uRWxhcHNlZFRpbWUgOiBpdGVyYXRpb25FbGFwc2VkVGltZTtcbiAgaWYgKF9lYXNlKSBpdGVyYXRpb25UaW1lID0gaXRlcmF0aW9uRHVyYXRpb24gKiBfZWFzZShpdGVyYXRpb25UaW1lIC8gaXRlcmF0aW9uRHVyYXRpb24pIHx8IDA7XG4gIGNvbnN0IGlzUnVubmluZ0JhY2t3YXJkcyA9IChwYXJlbnQgPyBwYXJlbnQuYmFja3dhcmRzIDogdGlja2FibGVBYnNvbHV0ZVRpbWUgPCB0aWNrYWJsZVByZXZBYnNvbHV0ZVRpbWUpID8gIWlzUmV2ZXJzZWQgOiAhIWlzUmV2ZXJzZWQ7XG5cbiAgdGlja2FibGUuX2N1cnJlbnRUaW1lID0gdGlja2FibGVBYnNvbHV0ZVRpbWU7XG4gIHRpY2thYmxlLl9pdGVyYXRpb25UaW1lID0gaXRlcmF0aW9uVGltZTtcbiAgdGlja2FibGUuYmFja3dhcmRzID0gaXNSdW5uaW5nQmFja3dhcmRzO1xuXG4gIGlmIChpc0N1cnJlbnRUaW1lQWJvdmVaZXJvICYmICF0aWNrYWJsZS5iZWdhbikge1xuICAgIHRpY2thYmxlLmJlZ2FuID0gdHJ1ZTtcbiAgICBpZiAoIW11dGVDYWxsYmFja3MgJiYgIShwYXJlbnQgJiYgKGlzUnVubmluZ0JhY2t3YXJkcyB8fCAhcGFyZW50LmJlZ2FuKSkpIHtcbiAgICAgIHRpY2thYmxlLm9uQmVnaW4oLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0aWNrYWJsZSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aWNrYWJsZUFic29sdXRlVGltZSA8PSAwKSB7XG4gICAgdGlja2FibGUuYmVnYW4gPSBmYWxzZTtcbiAgfVxuXG4gIC8vIE9ubHkgdHJpZ2dlcnMgb25Mb29wIGZvciB0aWNrYWJsZSB3aXRob3V0IGNoaWxkcmVuLCBvdGhlcndpc2UgY2FsbCB0aGUgdGhlIG9uTG9vcCBjYWxsYmFjayBpbiB0aGUgdGljayBmdW5jdGlvblxuICAvLyBNYWtlIHN1cmUgdG8gdHJpZ2dlciB0aGUgb25Mb29wIGJlZm9yZSByZW5kZXJpbmcgdG8gYWxsb3cgLnJlZnJlc2goKSB0byBwaWNrdXAgdGhlIGN1cnJlbnQgdmFsdWVzXG4gIGlmICghbXV0ZUNhbGxiYWNrcyAmJiAhX2hhc0NoaWxkcmVuICYmIGlzQ3VycmVudFRpbWVBYm92ZVplcm8gJiYgdGlja2FibGUuX2N1cnJlbnRJdGVyYXRpb24gIT09IF9jdXJyZW50SXRlcmF0aW9uKSB7XG4gICAgdGlja2FibGUub25Mb29wKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGlja2FibGUpKTtcbiAgfVxuXG4gIGlmIChcbiAgICBmb3JjZWRUaWNrIHx8XG4gICAgdGlja01vZGUgPT09IHRpY2tNb2Rlcy5BVVRPICYmIChcbiAgICAgIHRpbWUgPj0gdGlja2FibGVEZWxheSAmJiB0aW1lIDw9IHRpY2thYmxlRW5kVGltZSB8fCAvLyBOb3JtYWwgcmVuZGVyXG4gICAgICB0aW1lIDw9IHRpY2thYmxlRGVsYXkgJiYgdGlja2FibGVQcmV2VGltZSA+IHRpY2thYmxlRGVsYXkgfHwgLy8gUGxheWhlYWQgaXMgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnQgdGltZSBzbyBtYWtlIHN1cmUgdGhlIGFuaW1hdGlvbiBpcyBhdCBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgICAgdGltZSA+PSB0aWNrYWJsZUVuZFRpbWUgJiYgdGlja2FibGVQcmV2VGltZSAhPT0gZHVyYXRpb24gLy8gUGxheWhlYWQgaXMgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBlbmQgdGltZSBzbyBtYWtlIHN1cmUgdGhlIGFuaW1hdGlvbiBpcyBhdCBpdHMgZW5kIHN0YXRlXG4gICAgKSB8fFxuICAgIGl0ZXJhdGlvblRpbWUgPj0gdGlja2FibGVFbmRUaW1lICYmIHRpY2thYmxlUHJldlRpbWUgIT09IGR1cmF0aW9uIHx8XG4gICAgaXRlcmF0aW9uVGltZSA8PSB0aWNrYWJsZURlbGF5ICYmIHRpY2thYmxlUHJldlRpbWUgPiAwIHx8XG4gICAgdGltZSA8PSB0aWNrYWJsZVByZXZUaW1lICYmIHRpY2thYmxlUHJldlRpbWUgPT09IGR1cmF0aW9uICYmIGNvbXBsZXRlZCB8fCAvLyBGb3JjZSBhIHJlbmRlciBpZiBhIHNlZWsgb2NjdXJzIG9uIGFuIGNvbXBsZXRlZCBhbmltYXRpb25cbiAgICBpc0N1cnJlbnRUaW1lRXF1YWxPckFib3ZlRHVyYXRpb24gJiYgIWNvbXBsZXRlZCAmJiBpc1NldHRlciAvLyBUaGlzIHByZXZlbnRzIDAgZHVyYXRpb24gdGlja2FibGVzIHRvIGJlIHNraXBwZWRcbiAgKSB7XG5cbiAgICBpZiAoaXNDdXJyZW50VGltZUFib3ZlWmVybykge1xuICAgICAgLy8gVHJpZ2dlciBvblVwZGF0ZSBjYWxsYmFjayBiZWZvcmUgcmVuZGVyaW5nXG4gICAgICB0aWNrYWJsZS5jb21wdXRlRGVsdGFUaW1lKHRpY2thYmxlUHJldlRpbWUpO1xuICAgICAgaWYgKCFtdXRlQ2FsbGJhY2tzKSB0aWNrYWJsZS5vbkJlZm9yZVVwZGF0ZSgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRpY2thYmxlKSk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdHdlZW5zIHJlbmRlcmluZ1xuICAgIGlmICghX2hhc0NoaWxkcmVuKSB7XG5cbiAgICAgIC8vIFRpbWUgaGFzIGp1bXBlZCBtb3JlIHRoYW4gZ2xvYmFscy50aWNrVGhyZXNob2xkIHNvIGNvbnNpZGVyIHRoaXMgdGljayBtYW51YWxcbiAgICAgIGNvbnN0IGZvcmNlZFJlbmRlciA9IGZvcmNlZFRpY2sgfHwgKGlzUnVubmluZ0JhY2t3YXJkcyA/IGRlbHRhVGltZSAqIC0xIDogZGVsdGFUaW1lKSA+PSBnbG9iYWxzLnRpY2tUaHJlc2hvbGQ7XG4gICAgICBjb25zdCBhYnNvbHV0ZVRpbWUgPSB0aWNrYWJsZS5fb2Zmc2V0ICsgKHBhcmVudCA/IHBhcmVudC5fb2Zmc2V0IDogMCkgKyB0aWNrYWJsZURlbGF5ICsgaXRlcmF0aW9uVGltZTtcblxuICAgICAgLy8gT25seSBBbmltYXRpb24gY2FuIGhhdmUgdHdlZW5zLCBUaW1lciByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAgbGV0IHR3ZWVuID0gLyoqIEB0eXBlIHtUd2Vlbn0gKi8oLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8odGlja2FibGUpLl9oZWFkKTtcbiAgICAgIGxldCB0d2VlblRhcmdldDtcbiAgICAgIGxldCB0d2VlblN0eWxlO1xuICAgICAgbGV0IHR3ZWVuVGFyZ2V0VHJhbnNmb3JtcztcbiAgICAgIGxldCB0d2VlblRhcmdldFRyYW5zZm9ybXNQcm9wZXJ0aWVzO1xuICAgICAgbGV0IHR3ZWVuVHJhbnNmb3Jtc05lZWRVcGRhdGUgPSAwO1xuXG4gICAgICB3aGlsZSAodHdlZW4pIHtcblxuICAgICAgICBjb25zdCB0d2VlbkNvbXBvc2l0aW9uID0gdHdlZW4uX2NvbXBvc2l0aW9uO1xuICAgICAgICBjb25zdCB0d2VlbkN1cnJlbnRUaW1lID0gdHdlZW4uX2N1cnJlbnRUaW1lO1xuICAgICAgICBjb25zdCB0d2VlbkNoYW5nZUR1cmF0aW9uID0gdHdlZW4uX2NoYW5nZUR1cmF0aW9uO1xuICAgICAgICBjb25zdCB0d2VlbkFic0VuZFRpbWUgPSB0d2Vlbi5fYWJzb2x1dGVTdGFydFRpbWUgKyB0d2Vlbi5fY2hhbmdlRHVyYXRpb247XG4gICAgICAgIGNvbnN0IHR3ZWVuTmV4dFJlcCA9IHR3ZWVuLl9uZXh0UmVwO1xuICAgICAgICBjb25zdCB0d2VlblByZXZSZXAgPSB0d2Vlbi5fcHJldlJlcDtcbiAgICAgICAgY29uc3QgdHdlZW5IYXNDb21wb3NpdGlvbiA9IHR3ZWVuQ29tcG9zaXRpb24gIT09IGNvbXBvc2l0aW9uVHlwZXMubm9uZTtcblxuICAgICAgICBpZiAoKGZvcmNlZFJlbmRlciB8fCAoXG4gICAgICAgICAgICAodHdlZW5DdXJyZW50VGltZSAhPT0gdHdlZW5DaGFuZ2VEdXJhdGlvbiB8fCBhYnNvbHV0ZVRpbWUgPD0gdHdlZW5BYnNFbmRUaW1lICsgKHR3ZWVuTmV4dFJlcCA/IHR3ZWVuTmV4dFJlcC5fZGVsYXkgOiAwKSkgJiZcbiAgICAgICAgICAgICh0d2VlbkN1cnJlbnRUaW1lICE9PSAwIHx8IGFic29sdXRlVGltZSA+PSB0d2Vlbi5fYWJzb2x1dGVTdGFydFRpbWUpXG4gICAgICAgICAgKSkgJiYgKCF0d2Vlbkhhc0NvbXBvc2l0aW9uIHx8IChcbiAgICAgICAgICAgICF0d2Vlbi5faXNPdmVycmlkZGVuICYmXG4gICAgICAgICAgICAoIXR3ZWVuLl9pc092ZXJsYXBwZWQgfHwgYWJzb2x1dGVUaW1lIDw9IHR3ZWVuQWJzRW5kVGltZSkgJiZcbiAgICAgICAgICAgICghdHdlZW5OZXh0UmVwIHx8ICh0d2Vlbk5leHRSZXAuX2lzT3ZlcnJpZGRlbiB8fCBhYnNvbHV0ZVRpbWUgPD0gdHdlZW5OZXh0UmVwLl9hYnNvbHV0ZVN0YXJ0VGltZSkpICYmXG4gICAgICAgICAgICAoIXR3ZWVuUHJldlJlcCB8fCAodHdlZW5QcmV2UmVwLl9pc092ZXJyaWRkZW4gfHwgKGFic29sdXRlVGltZSA+PSAodHdlZW5QcmV2UmVwLl9hYnNvbHV0ZVN0YXJ0VGltZSArIHR3ZWVuUHJldlJlcC5fY2hhbmdlRHVyYXRpb24pICsgdHdlZW4uX2RlbGF5KSkpXG4gICAgICAgICAgKSlcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICBjb25zdCB0d2Vlbk5ld1RpbWUgPSB0d2Vlbi5fY3VycmVudFRpbWUgPSBjbGFtcChpdGVyYXRpb25UaW1lIC0gdHdlZW4uX3N0YXJ0VGltZSwgMCwgdHdlZW5DaGFuZ2VEdXJhdGlvbik7XG4gICAgICAgICAgY29uc3QgdHdlZW5Qcm9ncmVzcyA9IHR3ZWVuLl9lYXNlKHR3ZWVuTmV3VGltZSAvIHR3ZWVuLl91cGRhdGVEdXJhdGlvbik7XG4gICAgICAgICAgY29uc3QgdHdlZW5Nb2RpZmllciA9IHR3ZWVuLl9tb2RpZmllcjtcbiAgICAgICAgICBjb25zdCB0d2VlblZhbHVlVHlwZSA9IHR3ZWVuLl92YWx1ZVR5cGU7XG4gICAgICAgICAgY29uc3QgdHdlZW5UeXBlID0gdHdlZW4uX3R3ZWVuVHlwZTtcbiAgICAgICAgICBjb25zdCB0d2VlbklzT2JqZWN0ID0gdHdlZW5UeXBlID09PSB0d2VlblR5cGVzLk9CSkVDVDtcbiAgICAgICAgICBjb25zdCB0d2VlbklzTnVtYmVyID0gdHdlZW5WYWx1ZVR5cGUgPT09IHZhbHVlVHlwZXMuTlVNQkVSO1xuICAgICAgICAgIC8vIE9ubHkgcm91bmQgdGhlIGluLWJldHdlZW4gZnJhbWVzIHZhbHVlcyBpZiB0aGUgZmluYWwgdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAgICAgICBjb25zdCB0d2VlblByZWNpc2lvbiA9ICh0d2VlbklzTnVtYmVyICYmIHR3ZWVuSXNPYmplY3QpIHx8IHR3ZWVuUHJvZ3Jlc3MgPT09IDAgfHwgdHdlZW5Qcm9ncmVzcyA9PT0gMSA/IC0xIDogZ2xvYmFscy5wcmVjaXNpb247XG5cbiAgICAgICAgICAvLyBSZWNvbXBvc2UgdHdlZW4gdmFsdWVcbiAgICAgICAgICAvKiogQHR5cGUge1N0cmluZ3xOdW1iZXJ9ICovXG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgICAgICAgIGxldCBudW1iZXI7XG5cbiAgICAgICAgICBpZiAodHdlZW5Jc051bWJlcikge1xuICAgICAgICAgICAgdmFsdWUgPSBudW1iZXIgPSAvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW5Nb2RpZmllcihyb3VuZChpbnRlcnBvbGF0ZSh0d2Vlbi5fZnJvbU51bWJlciwgdHdlZW4uX3RvTnVtYmVyLCAgdHdlZW5Qcm9ncmVzcyksIHR3ZWVuUHJlY2lzaW9uICkpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR3ZWVuVmFsdWVUeXBlID09PSB2YWx1ZVR5cGVzLlVOSVQpIHtcbiAgICAgICAgICAgIC8vIFJvdW5kaW5nIHRoZSB2YWx1ZXMgc3BlZWQgdXAgc3RyaW5nIGNvbXBvc2l0aW9uXG4gICAgICAgICAgICBudW1iZXIgPSAvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW5Nb2RpZmllcihyb3VuZChpbnRlcnBvbGF0ZSh0d2Vlbi5fZnJvbU51bWJlciwgdHdlZW4uX3RvTnVtYmVyLCAgdHdlZW5Qcm9ncmVzcyksIHR3ZWVuUHJlY2lzaW9uKSkpO1xuICAgICAgICAgICAgdmFsdWUgPSBgJHtudW1iZXJ9JHt0d2Vlbi5fdW5pdH1gO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5WYWx1ZVR5cGUgPT09IHZhbHVlVHlwZXMuQ09MT1IpIHtcbiAgICAgICAgICAgIGNvbnN0IGZuID0gdHdlZW4uX2Zyb21OdW1iZXJzO1xuICAgICAgICAgICAgY29uc3QgdG4gPSB0d2Vlbi5fdG9OdW1iZXJzO1xuICAgICAgICAgICAgY29uc3QgciA9IHJvdW5kKGNsYW1wKC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbk1vZGlmaWVyKGludGVycG9sYXRlKGZuWzBdLCB0blswXSwgdHdlZW5Qcm9ncmVzcykpKSwgMCwgMjU1KSwgMCk7XG4gICAgICAgICAgICBjb25zdCBnID0gcm91bmQoY2xhbXAoLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuTW9kaWZpZXIoaW50ZXJwb2xhdGUoZm5bMV0sIHRuWzFdLCB0d2VlblByb2dyZXNzKSkpLCAwLCAyNTUpLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSByb3VuZChjbGFtcCgvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW5Nb2RpZmllcihpbnRlcnBvbGF0ZShmblsyXSwgdG5bMl0sIHR3ZWVuUHJvZ3Jlc3MpKSksIDAsIDI1NSksIDApO1xuICAgICAgICAgICAgY29uc3QgYSA9IGNsYW1wKC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbk1vZGlmaWVyKHJvdW5kKGludGVycG9sYXRlKGZuWzNdLCB0blszXSwgdHdlZW5Qcm9ncmVzcyksIHR3ZWVuUHJlY2lzaW9uKSkpLCAwLCAxKTtcbiAgICAgICAgICAgIHZhbHVlID0gYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xuICAgICAgICAgICAgaWYgKHR3ZWVuSGFzQ29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgY29uc3QgbnMgPSB0d2Vlbi5fbnVtYmVycztcbiAgICAgICAgICAgICAgbnNbMF0gPSByO1xuICAgICAgICAgICAgICBuc1sxXSA9IGc7XG4gICAgICAgICAgICAgIG5zWzJdID0gYjtcbiAgICAgICAgICAgICAgbnNbM10gPSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5WYWx1ZVR5cGUgPT09IHZhbHVlVHlwZXMuQ09NUExFWCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0d2Vlbi5fc3RyaW5nc1swXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwLCBsID0gdHdlZW4uX3RvTnVtYmVycy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgbiA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbk1vZGlmaWVyKHJvdW5kKGludGVycG9sYXRlKHR3ZWVuLl9mcm9tTnVtYmVyc1tqXSwgdHdlZW4uX3RvTnVtYmVyc1tqXSwgdHdlZW5Qcm9ncmVzcyksIHR3ZWVuUHJlY2lzaW9uKSkpO1xuICAgICAgICAgICAgICBjb25zdCBzID0gdHdlZW4uX3N0cmluZ3NbaiArIDFdO1xuICAgICAgICAgICAgICB2YWx1ZSArPSBgJHtzID8gbiArIHMgOiBufWA7XG4gICAgICAgICAgICAgIGlmICh0d2Vlbkhhc0NvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHdlZW4uX251bWJlcnNbal0gPSBuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRm9yIGFkZGl0aXZlIHR3ZWVucyBhbmQgQW5pbWF0YWJsZXNcbiAgICAgICAgICBpZiAodHdlZW5IYXNDb21wb3NpdGlvbikge1xuICAgICAgICAgICAgdHdlZW4uX251bWJlciA9IG51bWJlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWludGVybmFsUmVuZGVyICYmIHR3ZWVuQ29tcG9zaXRpb24gIT09IGNvbXBvc2l0aW9uVHlwZXMuYmxlbmQpIHtcblxuICAgICAgICAgICAgY29uc3QgdHdlZW5Qcm9wZXJ0eSA9IHR3ZWVuLnByb3BlcnR5O1xuICAgICAgICAgICAgdHdlZW5UYXJnZXQgPSB0d2Vlbi50YXJnZXQ7XG5cbiAgICAgICAgICAgIGlmICh0d2VlbklzT2JqZWN0KSB7XG4gICAgICAgICAgICAgIHR3ZWVuVGFyZ2V0W3R3ZWVuUHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5BVFRSSUJVVEUpIHtcbiAgICAgICAgICAgICAgLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHR3ZWVuVGFyZ2V0KS5zZXRBdHRyaWJ1dGUodHdlZW5Qcm9wZXJ0eSwgLyoqIEB0eXBlIHtTdHJpbmd9ICovKHZhbHVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0d2VlblN0eWxlID0gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHR3ZWVuVGFyZ2V0KS5zdHlsZTtcbiAgICAgICAgICAgICAgaWYgKHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5UUkFOU0ZPUk0pIHtcbiAgICAgICAgICAgICAgICBpZiAodHdlZW5UYXJnZXQgIT09IHR3ZWVuVGFyZ2V0VHJhbnNmb3Jtcykge1xuICAgICAgICAgICAgICAgICAgdHdlZW5UYXJnZXRUcmFuc2Zvcm1zID0gdHdlZW5UYXJnZXQ7XG4gICAgICAgICAgICAgICAgICAvLyBOT1RFOiBSZWZlcmVuY2luZyB0aGUgY2FjaGVkVHJhbnNmb3JtcyBpbiB0aGUgdHdlZW4gcHJvcGVydHkgZGlyZWN0bHkgY2FuIGJlIGEgbGl0dGxlIGJpdCBmYXN0ZXIgYnV0IGFwcGVhcnMgdG8gaW5jcmVhc2UgbWVtb3J5IHVzYWdlLlxuICAgICAgICAgICAgICAgICAgdHdlZW5UYXJnZXRUcmFuc2Zvcm1zUHJvcGVydGllcyA9IHR3ZWVuVGFyZ2V0W3RyYW5zZm9ybXNTeW1ib2xdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0d2VlblRhcmdldFRyYW5zZm9ybXNQcm9wZXJ0aWVzW3R3ZWVuUHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdHdlZW5UcmFuc2Zvcm1zTmVlZFVwZGF0ZSA9IDE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5UeXBlID09PSB0d2VlblR5cGVzLkNTUykge1xuICAgICAgICAgICAgICAgIHR3ZWVuU3R5bGVbdHdlZW5Qcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuQ1NTX1ZBUikge1xuICAgICAgICAgICAgICAgIHR3ZWVuU3R5bGUuc2V0UHJvcGVydHkodHdlZW5Qcm9wZXJ0eSwvKiogQHR5cGUge1N0cmluZ30gKi8odmFsdWUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50VGltZUFib3ZlWmVybykgaGFzUmVuZGVyZWQgPSAxO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVzZWQgZm9yIGNvbXBvc2luZyB0aW1lbGluZSB0d2VlbnMgd2l0aG91dCBoYXZpbmcgdG8gZG8gYSByZWFsIHJlbmRlclxuICAgICAgICAgICAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1RFOiBQb3NzaWJsZSBpbXByb3ZlbWVudDogVXNlIHRyYW5zbGF0ZSh4LHkpIC8gdHJhbnNsYXRlM2QoeCx5LHopIHN5bnRheFxuICAgICAgICAvLyB0byByZWR1Y2UgbWVtb3J5IHVzYWdlIG9uIHN0cmluZyBjb21wb3NpdGlvblxuICAgICAgICBpZiAodHdlZW5UcmFuc2Zvcm1zTmVlZFVwZGF0ZSAmJiB0d2Vlbi5fcmVuZGVyVHJhbnNmb3Jtcykge1xuICAgICAgICAgIGxldCBzdHIgPSBlbXB0eVN0cmluZztcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdHdlZW5UYXJnZXRUcmFuc2Zvcm1zUHJvcGVydGllcykge1xuICAgICAgICAgICAgc3RyICs9IGAke3RyYW5zZm9ybXNGcmFnbWVudFN0cmluZ3Nba2V5XX0ke3R3ZWVuVGFyZ2V0VHJhbnNmb3Jtc1Byb3BlcnRpZXNba2V5XX0pIGA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHR3ZWVuU3R5bGUudHJhbnNmb3JtID0gc3RyO1xuICAgICAgICAgIHR3ZWVuVHJhbnNmb3Jtc05lZWRVcGRhdGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdHdlZW4gPSB0d2Vlbi5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmIGhhc1JlbmRlcmVkKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKHRpY2thYmxlKS5vblJlbmRlcigvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyh0aWNrYWJsZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbXV0ZUNhbGxiYWNrcyAmJiBpc0N1cnJlbnRUaW1lQWJvdmVaZXJvKSB7XG4gICAgICB0aWNrYWJsZS5vblVwZGF0ZSgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRpY2thYmxlKSk7XG4gICAgfVxuXG4gIH1cblxuICAvLyBFbmQgdHdlZW5zIHJlbmRlcmluZ1xuXG4gIC8vIEhhbmRsZSBzZXR0ZXJzIG9uIHRpbWVsaW5lIGRpZmZlcmVudGx5IGFuZCBhbGxvdyByZS10cmlnZXJpbmcgdGhlIG9uQ29tcGxldGUgY2FsbGJhY2sgd2hlbiBzZWVraW5nIGJhY2t3YXJkc1xuICBpZiAocGFyZW50ICYmIGlzU2V0dGVyKSB7XG4gICAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmIChcbiAgICAgIChwYXJlbnQuYmVnYW4gJiYgIWlzUnVubmluZ0JhY2t3YXJkcyAmJiB0aWNrYWJsZUFic29sdXRlVGltZSA+PSBkdXJhdGlvbiAmJiAhY29tcGxldGVkKSB8fFxuICAgICAgKGlzUnVubmluZ0JhY2t3YXJkcyAmJiB0aWNrYWJsZUFic29sdXRlVGltZSA8PSBtaW5WYWx1ZSAmJiBjb21wbGV0ZWQpXG4gICAgKSkge1xuICAgICAgdGlja2FibGUub25Db21wbGV0ZSgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRpY2thYmxlKSk7XG4gICAgICB0aWNrYWJsZS5jb21wbGV0ZWQgPSAhaXNSdW5uaW5nQmFja3dhcmRzO1xuICAgIH1cbiAgLy8gSWYgY3VycmVudFRpbWUgaXMgYm90aCBhYm92ZSAwIGFuZCBhdCBsZWFzdCBlcXVhbHMgdG8gZHVyYXRpb24sIGhhbmRsZXMgbm9ybWFsIG9uQ29tcGxldGUgb3IgaW5maW5pdGUgbG9vcHNcbiAgfSBlbHNlIGlmIChpc0N1cnJlbnRUaW1lQWJvdmVaZXJvICYmIGlzQ3VycmVudFRpbWVFcXVhbE9yQWJvdmVEdXJhdGlvbikge1xuICAgIGlmIChpdGVyYXRpb25Db3VudCA9PT0gSW5maW5pdHkpIHtcbiAgICAgIC8vIE9mZnNldCB0aGUgdGlja2FibGUgX3N0YXJ0VGltZSB3aXRoIGl0cyBkdXJhdGlvbiB0byByZXNldCBfY3VycmVudFRpbWUgdG8gMCBhbmQgY29udGludWUgdGhlIGluZmluaXRlIHRpbWVyXG4gICAgICB0aWNrYWJsZS5fc3RhcnRUaW1lICs9IHRpY2thYmxlLmR1cmF0aW9uO1xuICAgIH0gZWxzZSBpZiAodGlja2FibGUuX2N1cnJlbnRJdGVyYXRpb24gPj0gaXRlcmF0aW9uQ291bnQgLSAxKSB7XG4gICAgICAvLyBCeSBzZXR0aW5nIHBhdXNlZCB0byB0cnVlLCB3ZSB0ZWxsIHRoZSBlbmdpbmUgbG9vcCB0byBub3QgcmVuZGVyIHRoaXMgdGlja2FibGUgYW5kIHJlbW92ZXMgaXQgZnJvbSB0aGUgbGlzdCBvbiB0aGUgbmV4dCB0aWNrXG4gICAgICB0aWNrYWJsZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgaWYgKCFjb21wbGV0ZWQgJiYgIV9oYXNDaGlsZHJlbikge1xuICAgICAgICAvLyBJZiB0aGUgdGlja2FibGUgaGFzIGNoaWxkcmVuLCB0cmlnZ2VycyBvbkNvbXBsZXRlKCkgb25seSB3aGVuIGFsbCBjaGlsZHJlbiBoYXZlIGNvbXBsZXRlZCBpbiB0aGUgdGljayBmdW5jdGlvblxuICAgICAgICB0aWNrYWJsZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIW11dGVDYWxsYmFja3MgJiYgIShwYXJlbnQgJiYgKGlzUnVubmluZ0JhY2t3YXJkcyB8fCAhcGFyZW50LmJlZ2FuKSkpIHtcbiAgICAgICAgICB0aWNrYWJsZS5vbkNvbXBsZXRlKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGlja2FibGUpKTtcbiAgICAgICAgICB0aWNrYWJsZS5fcmVzb2x2ZSgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRpY2thYmxlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIC8vIE90aGVyd2lzZSBzZXQgdGhlIGNvbXBsZXRlZCBmbGFnIHRvIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgdGlja2FibGUuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICAvLyBOT1RFOiBoYXNSZW5kZXJlZCAqIGRpcmVjdGlvbiAobmVnYXRpdmUgZm9yIGJhY2t3YXJkcykgdGhpcyB3YXkgd2UgY2FuIHJlbW92ZSB0aGUgdGlja2FibGUuYmFja3dhcmRzIHByb3BlcnR5IGNvbXBsZXRseSA/XG4gIHJldHVybiBoYXNSZW5kZXJlZDtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGlja2FibGV9IHRpY2thYmxlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVcbiAqIEBwYXJhbSAge051bWJlcn0gbXV0ZUNhbGxiYWNrc1xuICogQHBhcmFtICB7TnVtYmVyfSBpbnRlcm5hbFJlbmRlclxuICogQHBhcmFtICB7TnVtYmVyfSB0aWNrTW9kZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuY29uc3QgdGljayA9ICh0aWNrYWJsZSwgdGltZSwgbXV0ZUNhbGxiYWNrcywgaW50ZXJuYWxSZW5kZXIsIHRpY2tNb2RlKSA9PiB7XG4gIGNvbnN0IF9jdXJyZW50SXRlcmF0aW9uID0gdGlja2FibGUuX2N1cnJlbnRJdGVyYXRpb247XG4gIHJlbmRlcih0aWNrYWJsZSwgdGltZSwgbXV0ZUNhbGxiYWNrcywgaW50ZXJuYWxSZW5kZXIsIHRpY2tNb2RlKTtcbiAgaWYgKHRpY2thYmxlLl9oYXNDaGlsZHJlbikge1xuICAgIGNvbnN0IHRsID0gLyoqIEB0eXBlIHtUaW1lbGluZX0gKi8odGlja2FibGUpO1xuICAgIGNvbnN0IHRsSXNSdW5uaW5nQmFja3dhcmRzID0gdGwuYmFja3dhcmRzO1xuICAgIGNvbnN0IHRsQ2hpbGRyZW5UaW1lID0gaW50ZXJuYWxSZW5kZXIgPyB0aW1lIDogdGwuX2l0ZXJhdGlvblRpbWU7XG4gICAgY29uc3QgdGxDaWxkcmVuVGlja1RpbWUgPSBub3coKTtcblxuICAgIGxldCB0bENoaWxkcmVuSGFzUmVuZGVyZWQgPSAwO1xuICAgIGxldCB0bENoaWxkcmVuSGF2ZUNvbXBsZXRlZCA9IHRydWU7XG5cbiAgICAvLyBJZiB0aGUgdGltZWxpbmUgaGFzIGxvb3BlZCBmb3J3YXJkLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHRyaWdnZXJzIGNoaWxkcmVuIHNraXBwZWQgY2FsbGJhY2tzXG4gICAgaWYgKCFpbnRlcm5hbFJlbmRlciAmJiB0bC5fY3VycmVudEl0ZXJhdGlvbiAhPT0gX2N1cnJlbnRJdGVyYXRpb24pIHtcbiAgICAgIGNvbnN0IHRsSXRlcmF0aW9uRHVyYXRpb24gPSB0bC5pdGVyYXRpb25EdXJhdGlvbjtcbiAgICAgIGZvckVhY2hDaGlsZHJlbih0bCwgKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKCF0bElzUnVubmluZ0JhY2t3YXJkcykge1xuICAgICAgICAgIC8vIEZvcmNlIGFuIGludGVybmFsIHJlbmRlciB0byB0cmlnZ2VyIHRoZSBjYWxsYmFja3MgaWYgdGhlIGNoaWxkIGhhcyBub3QgY29tcGxldGVkIG9uIGxvb3BcbiAgICAgICAgICBpZiAoIWNoaWxkLmNvbXBsZXRlZCAmJiAhY2hpbGQuYmFja3dhcmRzICYmIGNoaWxkLl9jdXJyZW50VGltZSA8IGNoaWxkLml0ZXJhdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZW5kZXIoY2hpbGQsIHRsSXRlcmF0aW9uRHVyYXRpb24sIG11dGVDYWxsYmFja3MsIDEsIHRpY2tNb2Rlcy5GT1JDRSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlc2V0IHRoZWlyIGJlZ2FuIGFuZCBjb21wbGV0ZWQgZmxhZ3MgdG8gYWxsb3cgcmV0cmlnZXJpbmcgY2FsbGJhY2tzIG9uIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgIGNoaWxkLmJlZ2FuID0gZmFsc2U7XG4gICAgICAgICAgY2hpbGQuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2hpbGREdXJhdGlvbiA9IGNoaWxkLmR1cmF0aW9uO1xuICAgICAgICAgIGNvbnN0IGNoaWxkU3RhcnRUaW1lID0gY2hpbGQuX29mZnNldCArIGNoaWxkLl9kZWxheTtcbiAgICAgICAgICBjb25zdCBjaGlsZEVuZFRpbWUgPSBjaGlsZFN0YXJ0VGltZSArIGNoaWxkRHVyYXRpb247XG4gICAgICAgICAgLy8gVHJpZ2dlcnMgdGhlIG9uQ29tcGxldGUgY2FsbGJhY2sgb24gcmV2ZXJzZSBmb3IgY2hpbGRyZW4gb24gdGhlIGVkZ2VzIG9mIHRoZSB0aW1lbGluZVxuICAgICAgICAgIGlmICghbXV0ZUNhbGxiYWNrcyAmJiBjaGlsZER1cmF0aW9uIDw9IG1pblZhbHVlICYmICghY2hpbGRTdGFydFRpbWUgfHwgY2hpbGRFbmRUaW1lID09PSB0bEl0ZXJhdGlvbkR1cmF0aW9uKSkge1xuICAgICAgICAgICAgY2hpbGQub25Db21wbGV0ZShjaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghbXV0ZUNhbGxiYWNrcykgdGwub25Mb29wKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGwpKTtcbiAgICB9XG5cbiAgICBmb3JFYWNoQ2hpbGRyZW4odGwsICgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL2NoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFRpbWUgPSByb3VuZCgodGxDaGlsZHJlblRpbWUgLSBjaGlsZC5fb2Zmc2V0KSAqIGNoaWxkLl9zcGVlZCwgMTIpOyAvLyBSb3VuZGluZyBpcyBuZWVkZWQgd2hlbiB1c2luZyBzZWNvbmRzXG4gICAgICBjb25zdCBjaGlsZFRpY2tNb2RlID0gY2hpbGQuX2ZwcyA8IHRsLl9mcHMgPyBjaGlsZC5yZXF1ZXN0VGljayh0bENpbGRyZW5UaWNrVGltZSkgOiB0aWNrTW9kZTtcbiAgICAgIHRsQ2hpbGRyZW5IYXNSZW5kZXJlZCArPSByZW5kZXIoY2hpbGQsIGNoaWxkVGltZSwgbXV0ZUNhbGxiYWNrcywgaW50ZXJuYWxSZW5kZXIsIGNoaWxkVGlja01vZGUpO1xuICAgICAgaWYgKCFjaGlsZC5jb21wbGV0ZWQgJiYgdGxDaGlsZHJlbkhhdmVDb21wbGV0ZWQpIHRsQ2hpbGRyZW5IYXZlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgfSwgdGxJc1J1bm5pbmdCYWNrd2FyZHMpO1xuXG4gICAgLy8gUmVuZGVycyBvbiB0aW1lbGluZSBhcmUgdHJpZ2dlcmVkIGJ5IGl0cyBjaGlsZHJlbiBzbyBpdCBuZWVkcyB0byBiZSBzZXQgYWZ0ZXIgcmVuZGVyaW5nIHRoZSBjaGlsZHJlblxuICAgIGlmICghbXV0ZUNhbGxiYWNrcyAmJiB0bENoaWxkcmVuSGFzUmVuZGVyZWQpIHRsLm9uUmVuZGVyKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGwpKTtcblxuICAgIC8vIFRyaWdnZXJzIHRoZSB0aW1lbGluZSBvbkNvbXBsZXRlKCkgb25jZSBhbGwgY2hpbmRyZW4gYWxsIGNvbXBsZXRlZCBhbmQgdGhlIGN1cnJlbnQgdGltZSBoYXMgcmVhY2hlZCB0aGUgZW5kXG4gICAgaWYgKHRsQ2hpbGRyZW5IYXZlQ29tcGxldGVkICYmIHRsLl9jdXJyZW50VGltZSA+PSB0bC5kdXJhdGlvbikge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBwYXVzZWQgZmxhZyBpcyBmYWxzZSBpbiBjYXNlIGl0IGhhcyBiZWVuIHNraXBwZWQgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgdGwucGF1c2VkID0gdHJ1ZTtcbiAgICAgIGlmICghdGwuY29tcGxldGVkKSB7XG4gICAgICAgIHRsLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICghbXV0ZUNhbGxiYWNrcykge1xuICAgICAgICAgIHRsLm9uQ29tcGxldGUoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0bCkpO1xuICAgICAgICAgIHRsLl9yZXNvbHZlKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5cblxuY29uc3QgYWRkaXRpdmUgPSB7XG4gIGFuaW1hdGlvbjogbnVsbCxcbiAgdXBkYXRlOiBub29wLFxufTtcblxuLyoqXG4gKiBAdHlwZWRlZiBBZGRpdGl2ZUFuaW1hdGlvblxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGR1cmF0aW9uXG4gKiBAcHJvcGVydHkge051bWJlcn0gX29mZnNldFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9kZWxheVxuICogQHByb3BlcnR5IHtUd2Vlbn0gX2hlYWRcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF90YWlsXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0gIHtUd2VlbkFkZGl0aXZlTG9va3Vwc30gbG9va3Vwc1xuICogQHJldHVybiB7QWRkaXRpdmVBbmltYXRpb259XG4gKi9cbmNvbnN0IGFkZEFkZGl0aXZlQW5pbWF0aW9uID0gbG9va3VwcyA9PiB7XG4gIGxldCBhbmltYXRpb24gPSBhZGRpdGl2ZS5hbmltYXRpb247XG4gIGlmICghYW5pbWF0aW9uKSB7XG4gICAgYW5pbWF0aW9uID0ge1xuICAgICAgZHVyYXRpb246IG1pblZhbHVlLFxuICAgICAgY29tcHV0ZURlbHRhVGltZTogbm9vcCxcbiAgICAgIF9vZmZzZXQ6IDAsXG4gICAgICBfZGVsYXk6IDAsXG4gICAgICBfaGVhZDogbnVsbCxcbiAgICAgIF90YWlsOiBudWxsLFxuICAgIH07XG4gICAgYWRkaXRpdmUuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgIGFkZGl0aXZlLnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIGxvb2t1cHMuZm9yRWFjaChwcm9wZXJ0eUFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0eUFuaW1hdGlvbikge1xuICAgICAgICAgIGNvbnN0IHR3ZWVucyA9IHByb3BlcnR5QW5pbWF0aW9uW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgY29uc3QgbG9va3VwVHdlZW4gPSB0d2VlbnMuX2hlYWQ7XG4gICAgICAgICAgaWYgKGxvb2t1cFR3ZWVuKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSBsb29rdXBUd2Vlbi5fdmFsdWVUeXBlO1xuICAgICAgICAgICAgY29uc3QgYWRkaXRpdmVWYWx1ZXMgPSB2YWx1ZVR5cGUgPT09IHZhbHVlVHlwZXMuQ09NUExFWCB8fCB2YWx1ZVR5cGUgPT09IHZhbHVlVHlwZXMuQ09MT1IgPyBjbG9uZUFycmF5KGxvb2t1cFR3ZWVuLl9mcm9tTnVtYmVycykgOiBudWxsO1xuICAgICAgICAgICAgbGV0IGFkZGl0aXZlVmFsdWUgPSBsb29rdXBUd2Vlbi5fZnJvbU51bWJlcjtcbiAgICAgICAgICAgIGxldCB0d2VlbiA9IHR3ZWVucy5fdGFpbDtcbiAgICAgICAgICAgIHdoaWxlICh0d2VlbiAmJiB0d2VlbiAhPT0gbG9va3VwVHdlZW4pIHtcbiAgICAgICAgICAgICAgaWYgKGFkZGl0aXZlVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0d2Vlbi5fbnVtYmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIGFkZGl0aXZlVmFsdWVzW2ldICs9IHR3ZWVuLl9udW1iZXJzW2ldO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZGl0aXZlVmFsdWUgKz0gdHdlZW4uX251bWJlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0d2VlbiA9IHR3ZWVuLl9wcmV2QWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9va3VwVHdlZW4uX3RvTnVtYmVyID0gYWRkaXRpdmVWYWx1ZTtcbiAgICAgICAgICAgIGxvb2t1cFR3ZWVuLl90b051bWJlcnMgPSBhZGRpdGl2ZVZhbHVlcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gVE9ETzogQXZvaWQgcG9seW1vcnBoaXNtIGhlcmUsIGlkZWFseSB0aGUgYWRkaXRpdmUgYW5pbWF0aW9uIHNob3VsZCBiZSBhIHJlZ3VsYXIgYW5pbWF0aW9uIHdpdGggYSBoaWdoZXIgcHJpb3JpdHkgaW4gdGhlIHJlbmRlciBsb29wXG4gICAgICByZW5kZXIoYW5pbWF0aW9uLCAxLCAxLCAwLCB0aWNrTW9kZXMuRk9SQ0UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn07XG5cbmNvbnN0IGVuZ2luZVRpY2tNZXRob2QgPSBpc0Jyb3dzZXIgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiBzZXRJbW1lZGlhdGU7XG5jb25zdCBlbmdpbmVDYW5jZWxNZXRob2QgPSBpc0Jyb3dzZXIgPyBjYW5jZWxBbmltYXRpb25GcmFtZSA6IGNsZWFySW1tZWRpYXRlO1xuXG5jbGFzcyBFbmdpbmUgZXh0ZW5kcyBDbG9jayB7XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBbaW5pdFRpbWVdICovXG4gIGNvbnN0cnVjdG9yKGluaXRUaW1lKSB7XG4gICAgc3VwZXIoaW5pdFRpbWUpO1xuICAgIHRoaXMudXNlRGVmYXVsdE1haW5Mb29wID0gdHJ1ZTtcbiAgICB0aGlzLnBhdXNlT25Eb2N1bWVudEhpZGRlbiA9IHRydWU7XG4gICAgLyoqIEB0eXBlIHtEZWZhdWx0c1BhcmFtc30gKi9cbiAgICB0aGlzLmRlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgdGhpcy5wYXVzZWQgPSBpc0Jyb3dzZXIgJiYgZG9jLmhpZGRlbiA/IHRydWUgIDogZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ8Tm9kZUpTLkltbWVkaWF0ZX0gKi9cbiAgICB0aGlzLnJlcUlkID0gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB0aW1lID0gdGhpcy5fY3VycmVudFRpbWUgPSBub3coKTtcbiAgICBpZiAodGhpcy5yZXF1ZXN0VGljayh0aW1lKSkge1xuICAgICAgdGhpcy5jb21wdXRlRGVsdGFUaW1lKHRpbWUpO1xuICAgICAgY29uc3QgZW5naW5lU3BlZWQgPSB0aGlzLl9zcGVlZDtcbiAgICAgIGNvbnN0IGVuZ2luZUZwcyA9IHRoaXMuX2ZwcztcbiAgICAgIGxldCBhY3RpdmVUaWNrYWJsZSA9IC8qKiBAdHlwZSB7VGlja2FibGV9ICovKHRoaXMuX2hlYWQpO1xuICAgICAgd2hpbGUgKGFjdGl2ZVRpY2thYmxlKSB7XG4gICAgICAgIGNvbnN0IG5leHRUaWNrYWJsZSA9IGFjdGl2ZVRpY2thYmxlLl9uZXh0O1xuICAgICAgICBpZiAoIWFjdGl2ZVRpY2thYmxlLnBhdXNlZCkge1xuICAgICAgICAgIHRpY2soXG4gICAgICAgICAgICBhY3RpdmVUaWNrYWJsZSxcbiAgICAgICAgICAgICh0aW1lIC0gYWN0aXZlVGlja2FibGUuX3N0YXJ0VGltZSkgKiBhY3RpdmVUaWNrYWJsZS5fc3BlZWQgKiBlbmdpbmVTcGVlZCxcbiAgICAgICAgICAgIDAsIC8vICFtdXRlQ2FsbGJhY2tzXG4gICAgICAgICAgICAwLCAvLyAhaW50ZXJuYWxSZW5kZXJcbiAgICAgICAgICAgIGFjdGl2ZVRpY2thYmxlLl9mcHMgPCBlbmdpbmVGcHMgPyBhY3RpdmVUaWNrYWJsZS5yZXF1ZXN0VGljayh0aW1lKSA6IHRpY2tNb2Rlcy5BVVRPXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVDaGlsZCh0aGlzLCBhY3RpdmVUaWNrYWJsZSk7XG4gICAgICAgICAgdGhpcy5faGFzQ2hpbGRyZW4gPSAhIXRoaXMuX3RhaWw7XG4gICAgICAgICAgYWN0aXZlVGlja2FibGUuX3J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoYWN0aXZlVGlja2FibGUuY29tcGxldGVkICYmICFhY3RpdmVUaWNrYWJsZS5fY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBhY3RpdmVUaWNrYWJsZS5jYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlVGlja2FibGUgPSBuZXh0VGlja2FibGU7XG4gICAgICB9XG4gICAgICBhZGRpdGl2ZS51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICB3YWtlKCkge1xuICAgIGlmICh0aGlzLnVzZURlZmF1bHRNYWluTG9vcCAmJiAhdGhpcy5yZXFJZCAmJiAhdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMucmVxSWQgPSBlbmdpbmVUaWNrTWV0aG9kKHRpY2tFbmdpbmUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICByZXR1cm4ga2lsbEVuZ2luZSgpO1xuICB9XG5cbiAgcmVzdW1lKCkge1xuICAgIGlmICghdGhpcy5wYXVzZWQpIHJldHVybjtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtUaWNrYWJsZX0gKi9jaGlsZCkgPT4gY2hpbGQucmVzZXRUaW1lKCkpO1xuICAgIHJldHVybiB0aGlzLndha2UoKTtcbiAgfVxuXG4gIC8vIEdldHRlciBhbmQgc2V0dGVyIGZvciBzcGVlZFxuICBnZXQgc3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWVkICogKGdsb2JhbHMudGltZVNjYWxlID09PSAxID8gMSA6IEspO1xuICB9XG5cbiAgc2V0IHNwZWVkKHBsYXliYWNrUmF0ZSkge1xuICAgIHRoaXMuX3NwZWVkID0gcGxheWJhY2tSYXRlICogZ2xvYmFscy50aW1lU2NhbGU7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1RpY2thYmxlfSAqL2NoaWxkKSA9PiBjaGlsZC5zcGVlZCA9IGNoaWxkLl9zcGVlZCk7XG4gIH1cblxuICAvLyBHZXR0ZXIgYW5kIHNldHRlciBmb3IgdGltZVVuaXRcbiAgZ2V0IHRpbWVVbml0KCkge1xuICAgIHJldHVybiBnbG9iYWxzLnRpbWVTY2FsZSA9PT0gMSA/ICdtcycgOiAncyc7XG4gIH07XG5cbiAgc2V0IHRpbWVVbml0KHVuaXQpIHtcbiAgICBjb25zdCBzZWNvbmRzU2NhbGUgPSAwLjAwMTtcbiAgICBjb25zdCBpc1NlY29uZCA9IHVuaXQgPT09ICdzJztcbiAgICBjb25zdCBuZXdTY2FsZSA9IGlzU2Vjb25kID8gc2Vjb25kc1NjYWxlIDogMTtcbiAgICBpZiAoZ2xvYmFscy50aW1lU2NhbGUgIT09IG5ld1NjYWxlKSB7XG4gICAgICBnbG9iYWxzLnRpbWVTY2FsZSA9IG5ld1NjYWxlO1xuICAgICAgZ2xvYmFscy50aWNrVGhyZXNob2xkID0gMjAwICogbmV3U2NhbGU7XG4gICAgICBjb25zdCBzY2FsZUZhY3RvciA9IGlzU2Vjb25kID8gc2Vjb25kc1NjYWxlIDogSztcbiAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgICAgKHRoaXMuZGVmYXVsdHMuZHVyYXRpb24pICo9IHNjYWxlRmFjdG9yO1xuICAgICAgdGhpcy5fc3BlZWQgKj0gc2NhbGVGYWN0b3I7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyIGFuZCBzZXR0ZXIgZm9yIHByZWNpc2lvblxuICBnZXQgcHJlY2lzaW9uKCkge1xuICAgIHJldHVybiBnbG9iYWxzLnByZWNpc2lvbjtcbiAgfVxuXG4gIHNldCBwcmVjaXNpb24ocHJlY2lzaW9uKSB7XG4gICAgZ2xvYmFscy5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gIH1cblxufVxuY29uc3QgZW5naW5lID0gLyojX19QVVJFX18qLygoKSA9PiB7XG4gIGNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUobm93KCkpO1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgZ2xvYmFsVmVyc2lvbnMuZW5naW5lID0gZW5naW5lO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKCFlbmdpbmUucGF1c2VPbkRvY3VtZW50SGlkZGVuKSByZXR1cm47XG4gICAgICBkb2MuaGlkZGVuID8gZW5naW5lLnBhdXNlKCkgOiBlbmdpbmUucmVzdW1lKCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVuZ2luZTtcbn0pKCk7XG5cblxuY29uc3QgdGlja0VuZ2luZSA9ICgpID0+IHtcbiAgaWYgKGVuZ2luZS5faGVhZCkge1xuICAgIGVuZ2luZS5yZXFJZCA9IGVuZ2luZVRpY2tNZXRob2QodGlja0VuZ2luZSk7XG4gICAgZW5naW5lLnVwZGF0ZSgpO1xuICB9IGVsc2Uge1xuICAgIGVuZ2luZS5yZXFJZCA9IDA7XG4gIH1cbn07XG5cbmNvbnN0IGtpbGxFbmdpbmUgPSAoKSA9PiB7XG4gIGVuZ2luZUNhbmNlbE1ldGhvZCgvKiogQHR5cGUge05vZGVKUy5JbW1lZGlhdGUgJiBOdW1iZXJ9ICovKGVuZ2luZS5yZXFJZCkpO1xuICBlbmdpbmUucmVxSWQgPSAwO1xuICByZXR1cm4gZW5naW5lO1xufTtcblxuXG5cblxuLyoqXG4gKiBAcGFyYW0gIHtET01UYXJnZXR9IHRhcmdldFxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wTmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBhbmltYXRpb25JbmxpbmVTdHlsZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgcGFyc2VJbmxpbmVUcmFuc2Zvcm1zID0gKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGlvbklubGluZVN0eWxlcykgPT4ge1xuICBjb25zdCBpbmxpbmVUcmFuc2Zvcm1zID0gdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybTtcbiAgbGV0IGlubGluZWRTdHlsZXNQcm9wZXJ0eVZhbHVlO1xuICBpZiAoaW5saW5lVHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGNhY2hlZFRyYW5zZm9ybXMgPSB0YXJnZXRbdHJhbnNmb3Jtc1N5bWJvbF07XG4gICAgbGV0IHQ7IHdoaWxlICh0ID0gdHJhbnNmb3Jtc0V4ZWNSZ3guZXhlYyhpbmxpbmVUcmFuc2Zvcm1zKSkge1xuICAgICAgY29uc3QgaW5saW5lUHJvcGVydHlOYW1lID0gdFsxXTtcbiAgICAgIC8vIGNvbnN0IGlubGluZVByb3BlcnR5VmFsdWUgPSB0WzJdO1xuICAgICAgY29uc3QgaW5saW5lUHJvcGVydHlWYWx1ZSA9IHRbMl0uc2xpY2UoMSwgLTEpO1xuICAgICAgY2FjaGVkVHJhbnNmb3Jtc1tpbmxpbmVQcm9wZXJ0eU5hbWVdID0gaW5saW5lUHJvcGVydHlWYWx1ZTtcbiAgICAgIGlmIChpbmxpbmVQcm9wZXJ0eU5hbWUgPT09IHByb3BOYW1lKSB7XG4gICAgICAgIGlubGluZWRTdHlsZXNQcm9wZXJ0eVZhbHVlID0gaW5saW5lUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgLy8gU3RvcmUgdGhlIG5ldyBwYXJzZWQgaW5saW5lIHN0eWxlcyBpZiBhbmltYXRpb25JbmxpbmVTdHlsZXMgaXMgcHJvdmlkZWRcbiAgICAgICAgaWYgKGFuaW1hdGlvbklubGluZVN0eWxlcykge1xuICAgICAgICAgIGFuaW1hdGlvbklubGluZVN0eWxlc1twcm9wTmFtZV0gPSBpbmxpbmVQcm9wZXJ0eVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmxpbmVUcmFuc2Zvcm1zICYmICFpc1VuZChpbmxpbmVkU3R5bGVzUHJvcGVydHlWYWx1ZSkgPyBpbmxpbmVkU3R5bGVzUHJvcGVydHlWYWx1ZSA6XG4gICAgc3RyaW5nU3RhcnRzV2l0aChwcm9wTmFtZSwgJ3NjYWxlJykgPyAnMScgOlxuICAgIHN0cmluZ1N0YXJ0c1dpdGgocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdTdGFydHNXaXRoKHByb3BOYW1lLCAnc2tldycpID8gJzBkZWcnIDogJzBweCc7XG59O1xuXG5cblxuXG4vKipcbiAqIEBwYXJhbSAge0RPTVRhcmdldHNQYXJhbXxUYXJnZXRzUGFyYW19IHZcbiAqIEByZXR1cm4ge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufVxuICovXG5mdW5jdGlvbiBnZXROb2RlTGlzdCh2KSB7XG4gIGNvbnN0IG4gPSBpc1N0cih2KSA/IGdsb2JhbHMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKHYpIDogdjtcbiAgaWYgKG4gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBuIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7RE9NVGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcmV0dXJuIHtET01UYXJnZXRzQXJyYXl9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtKU1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHJldHVybiB7SlNUYXJnZXRzQXJyYXl9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEByZXR1cm4ge1RhcmdldHNBcnJheX1cbiAqXG4gKiBAcGFyYW0gIHtET01UYXJnZXRzUGFyYW18SlNUYXJnZXRzUGFyYW18VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIGlmIChpc05pbCh0YXJnZXRzKSkgcmV0dXJuIC8qKiBAdHlwZSB7VGFyZ2V0c0FycmF5fSAqLyhbXSk7XG4gIGlmIChpc0Fycih0YXJnZXRzKSkge1xuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IHRhcmdldHMuZmxhdChJbmZpbml0eSk7XG4gICAgLyoqIEB0eXBlIHtUYXJnZXRzQXJyYXl9ICovXG4gICAgY29uc3QgcGFyc2VkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmbGF0dGVuZWQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gZmxhdHRlbmVkW2ldO1xuICAgICAgaWYgKCFpc05pbChpdGVtKSkge1xuICAgICAgICBjb25zdCBub2RlTGlzdCA9IGdldE5vZGVMaXN0KGl0ZW0pO1xuICAgICAgICBpZiAobm9kZUxpc3QpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMCwgamwgPSBub2RlTGlzdC5sZW5ndGg7IGogPCBqbDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJJdGVtID0gbm9kZUxpc3Rbal07XG4gICAgICAgICAgICBpZiAoIWlzTmlsKHN1Ykl0ZW0pKSB7XG4gICAgICAgICAgICAgIGxldCBpc0R1cGxpY2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwga2wgPSBwYXJzZWQubGVuZ3RoOyBrIDwga2w7IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRba10gPT09IHN1Ykl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIGlzRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWlzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goc3ViSXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGlzRHVwbGljYXRlID0gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpsID0gcGFyc2VkLmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWRbal0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgaXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgaWYgKCFpc0Jyb3dzZXIpIHJldHVybiAvKiogQHR5cGUge0pTVGFyZ2V0c0FycmF5fSAqLyhbdGFyZ2V0c10pO1xuICBjb25zdCBub2RlTGlzdCA9IGdldE5vZGVMaXN0KHRhcmdldHMpO1xuICBpZiAobm9kZUxpc3QpIHJldHVybiAvKiogQHR5cGUge0RPTVRhcmdldHNBcnJheX0gKi8oQXJyYXkuZnJvbShub2RlTGlzdCkpO1xuICByZXR1cm4gLyoqIEB0eXBlIHtUYXJnZXRzQXJyYXl9ICovKFt0YXJnZXRzXSk7XG59XG5cbi8qKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtET01UYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEByZXR1cm4ge0RPTVRhcmdldHNBcnJheX1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0pTVGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcmV0dXJuIHtKU1RhcmdldHNBcnJheX1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHJldHVybiB7VGFyZ2V0c0FycmF5fVxuICpcbiAqIEBwYXJhbSAge0RPTVRhcmdldHNQYXJhbXxKU1RhcmdldHNQYXJhbXxUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJUYXJnZXRzKHRhcmdldHMpIHtcbiAgY29uc3QgcGFyc2VkVGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBjb25zdCBwYXJzZWRUYXJnZXRzTGVuZ3RoID0gcGFyc2VkVGFyZ2V0c0FycmF5Lmxlbmd0aDtcbiAgaWYgKHBhcnNlZFRhcmdldHNMZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlZFRhcmdldHNMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c0FycmF5W2ldO1xuICAgICAgaWYgKCF0YXJnZXRbaXNSZWdpc3RlcmVkVGFyZ2V0U3ltYm9sXSkge1xuICAgICAgICB0YXJnZXRbaXNSZWdpc3RlcmVkVGFyZ2V0U3ltYm9sXSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGlzU3ZnVHlwZSA9IGlzU3ZnKHRhcmdldCk7XG4gICAgICAgIGNvbnN0IGlzRG9tID0gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCkubm9kZVR5cGUgfHwgaXNTdmdUeXBlO1xuICAgICAgICBpZiAoaXNEb20pIHtcbiAgICAgICAgICB0YXJnZXRbaXNEb21TeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgICB0YXJnZXRbaXNTdmdTeW1ib2xdID0gaXNTdmdUeXBlO1xuICAgICAgICAgIHRhcmdldFt0cmFuc2Zvcm1zU3ltYm9sXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJzZWRUYXJnZXRzQXJyYXk7XG59XG5cblxuXG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSBwYXRoXG4gKiBAcmV0dXJuIHtTVkdHZW9tZXRyeUVsZW1lbnR8dW5kZWZpbmVkfVxuICovXG5jb25zdCBnZXRQYXRoID0gcGF0aCA9PiB7XG4gIGNvbnN0IHBhcnNlZFRhcmdldHMgPSBwYXJzZVRhcmdldHMocGF0aCk7XG4gIGNvbnN0ICRwYXJzZWRTdmcgPSAvKiogQHR5cGUge1NWR0dlb21ldHJ5RWxlbWVudH0gKi8ocGFyc2VkVGFyZ2V0c1swXSk7XG4gIGlmICghJHBhcnNlZFN2ZyB8fCAhaXNTdmcoJHBhcnNlZFN2ZykpIHJldHVybjtcbiAgcmV0dXJuICRwYXJzZWRTdmc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gcGF0aDJcbiAqIEBwYXJhbSAge051bWJlcn0gW3ByZWNpc2lvbl1cbiAqIEByZXR1cm4ge0Z1bmN0aW9uVmFsdWV9XG4gKi9cbmNvbnN0IG1vcnBoVG8gPSAocGF0aDIsIHByZWNpc2lvbiA9IC4zMykgPT4gKCRwYXRoMSkgPT4ge1xuICBjb25zdCAkcGF0aDIgPSAvKiogQHR5cGUge1NWR0dlb21ldHJ5RWxlbWVudH0gKi8oZ2V0UGF0aChwYXRoMikpO1xuICBpZiAoISRwYXRoMikgcmV0dXJuO1xuICBjb25zdCBpc1BhdGggPSAkcGF0aDEudGFnTmFtZSA9PT0gJ3BhdGgnO1xuICBjb25zdCBzZXBhcmF0b3IgPSBpc1BhdGggPyAnICcgOiAnLCc7XG4gIGNvbnN0IHByZXZpb3VzUG9pbnRzID0gJHBhdGgxW21vcnBoUG9pbnRzU3ltYm9sXTtcbiAgaWYgKHByZXZpb3VzUG9pbnRzKSAkcGF0aDEuc2V0QXR0cmlidXRlKGlzUGF0aCA/ICdkJyA6ICdwb2ludHMnLCBwcmV2aW91c1BvaW50cyk7XG5cbiAgbGV0IHYxID0gJycsIHYyID0gJyc7XG5cbiAgaWYgKCFwcmVjaXNpb24pIHtcbiAgICB2MSA9ICRwYXRoMS5nZXRBdHRyaWJ1dGUoaXNQYXRoID8gJ2QnIDogJ3BvaW50cycpO1xuICAgIHYyID0gJHBhdGgyLmdldEF0dHJpYnV0ZShpc1BhdGggPyAnZCcgOiAncG9pbnRzJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGVuZ3RoMSA9IC8qKiBAdHlwZSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAqLygkcGF0aDEpLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgY29uc3QgbGVuZ3RoMiA9ICRwYXRoMi5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGNvbnN0IG1heFBvaW50cyA9IE1hdGgubWF4KE1hdGguY2VpbChsZW5ndGgxICogcHJlY2lzaW9uKSwgTWF0aC5jZWlsKGxlbmd0aDIgKiBwcmVjaXNpb24pKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gaSAvIChtYXhQb2ludHMgLSAxKTtcbiAgICAgIGNvbnN0IHBvaW50T25QYXRoMSA9IC8qKiBAdHlwZSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAqLygkcGF0aDEpLmdldFBvaW50QXRMZW5ndGgobGVuZ3RoMSAqIHQpO1xuICAgICAgY29uc3QgcG9pbnRPblBhdGgyID0gJHBhdGgyLmdldFBvaW50QXRMZW5ndGgobGVuZ3RoMiAqIHQpO1xuICAgICAgY29uc3QgcHJlZml4ID0gaXNQYXRoID8gKGkgPT09IDAgPyAnTScgOiAnTCcpIDogJyc7XG4gICAgICB2MSArPSBwcmVmaXggKyByb3VuZChwb2ludE9uUGF0aDEueCwgMykgKyBzZXBhcmF0b3IgKyBwb2ludE9uUGF0aDEueSArICcgJztcbiAgICAgIHYyICs9IHByZWZpeCArIHJvdW5kKHBvaW50T25QYXRoMi54LCAzKSArIHNlcGFyYXRvciArIHBvaW50T25QYXRoMi55ICsgJyAnO1xuICAgIH1cbiAgfVxuXG4gICRwYXRoMVttb3JwaFBvaW50c1N5bWJvbF0gPSB2MjtcblxuICByZXR1cm4gW3YxLCB2Ml07XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U1ZHR2VvbWV0cnlFbGVtZW50fSBbJGVsXVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBnZXRTY2FsZUZhY3RvciA9ICRlbCA9PiB7XG4gIGxldCBzY2FsZUZhY3RvciA9IDE7XG4gIGlmICgkZWwgJiYgJGVsLmdldENUTSkge1xuICAgIGNvbnN0IGN0bSA9ICRlbC5nZXRDVE0oKTtcbiAgICBpZiAoY3RtKSB7XG4gICAgICBjb25zdCBzY2FsZVggPSBzcXJ0KGN0bS5hICogY3RtLmEgKyBjdG0uYiAqIGN0bS5iKTtcbiAgICAgIGNvbnN0IHNjYWxlWSA9IHNxcnQoY3RtLmMgKiBjdG0uYyArIGN0bS5kICogY3RtLmQpO1xuICAgICAgc2NhbGVGYWN0b3IgPSAoc2NhbGVYICsgc2NhbGVZKSAvIDI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY2FsZUZhY3Rvcjtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHByb3h5IHRoYXQgd3JhcHMgYW4gU1ZHR2VvbWV0cnlFbGVtZW50IGFuZCBhZGRzIGRyYXdpbmcgZnVuY3Rpb25hbGl0eS5cbiAqIEBwYXJhbSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAkZWwgLSBUaGUgU1ZHIGVsZW1lbnQgdG8gdHJhbnNmb3JtIGludG8gYSBkcmF3YWJsZVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gU3RhcnRpbmcgcG9zaXRpb24gKDAtMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgLSBFbmRpbmcgcG9zaXRpb24gKDAtMSlcbiAqIEByZXR1cm4ge0RyYXdhYmxlU1ZHR2VvbWV0cnl9IC0gUmV0dXJucyBhIHByb3h5IHRoYXQgcHJlc2VydmVzIHRoZSBvcmlnaW5hbCBlbGVtZW50J3MgdHlwZSB3aXRoIGFkZGl0aW9uYWwgJ2RyYXcnIGF0dHJpYnV0ZSBmdW5jdGlvbmFsaXR5XG4gKi9cbmNvbnN0IGNyZWF0ZURyYXdhYmxlUHJveHkgPSAoJGVsLCBzdGFydCwgZW5kKSA9PiB7XG4gIGNvbnN0IHBhdGhMZW5ndGggPSBLO1xuICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoJGVsKTtcbiAgY29uc3Qgc3Ryb2tlTGluZUNhcCA9IGNvbXB1dGVkU3R5bGVzLnN0cm9rZUxpbmVjYXA7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgJHNjYWxsZWQgPSBjb21wdXRlZFN0eWxlcy52ZWN0b3JFZmZlY3QgPT09ICdub24tc2NhbGluZy1zdHJva2UnID8gJGVsIDogbnVsbDtcbiAgbGV0IGN1cnJlbnRDYXAgPSBzdHJva2VMaW5lQ2FwO1xuXG4gIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KCRlbCwge1xuICAgIGdldCh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV07XG4gICAgICBpZiAocHJvcGVydHkgPT09IHByb3h5VGFyZ2V0U3ltYm9sKSByZXR1cm4gdGFyZ2V0O1xuICAgICAgaWYgKHByb3BlcnR5ID09PSAnc2V0QXR0cmlidXRlJykge1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJnc1swXSA9PT0gJ2RyYXcnKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbMV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY29uc3QgdjEgPSArdmFsdWVzWzBdO1xuICAgICAgICAgICAgY29uc3QgdjIgPSArdmFsdWVzWzFdO1xuICAgICAgICAgICAgLy8gVE9UTzogQmVuY2htYXJrIGlmIHBlcmZvcm1pbmcgdHdvIHNsaWNlcyBpcyBtb3JlIHBlcmZvcm1hbnQgdGhhbiBvbmUgc3BsaXRcbiAgICAgICAgICAgIC8vIGNvbnN0IHNwYWNlSW5kZXggPSB2YWx1ZS5pbmRleE9mKCcgJyk7XG4gICAgICAgICAgICAvLyBjb25zdCB2MSA9IHJvdW5kKCt2YWx1ZS5zbGljZSgwLCBzcGFjZUluZGV4KSwgcHJlY2lzaW9uKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHYyID0gcm91bmQoK3ZhbHVlLnNsaWNlKHNwYWNlSW5kZXggKyAxKSwgcHJlY2lzaW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gZ2V0U2NhbGVGYWN0b3IoJHNjYWxsZWQpO1xuICAgICAgICAgICAgY29uc3Qgb3MgPSB2MSAqIC0xZTMgKiBzY2FsZUZhY3RvcjtcbiAgICAgICAgICAgIGNvbnN0IGQxID0gKHYyICogcGF0aExlbmd0aCAqIHNjYWxlRmFjdG9yKSArIG9zO1xuICAgICAgICAgICAgY29uc3QgZDIgPSAocGF0aExlbmd0aCAqIHNjYWxlRmFjdG9yICtcbiAgICAgICAgICAgICAgICAgICAgICAoKHYxID09PSAwICYmIHYyID09PSAxKSB8fCAodjEgPT09IDEgJiYgdjIgPT09IDApID8gMCA6IDEwICogc2NhbGVGYWN0b3IpIC0gZDEpO1xuICAgICAgICAgICAgaWYgKHN0cm9rZUxpbmVDYXAgIT09ICdidXR0Jykge1xuICAgICAgICAgICAgICBjb25zdCBuZXdDYXAgPSB2MSA9PT0gdjIgPyAnYnV0dCcgOiBzdHJva2VMaW5lQ2FwO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudENhcCAhPT0gbmV3Q2FwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnN0cm9rZUxpbmVjYXAgPSBgJHtuZXdDYXB9YDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FwID0gbmV3Q2FwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIGAke29zfWApO1xuICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGAke2QxfSAke2QyfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5hcHBseSh2YWx1ZSwgdGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRm5jKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IFJlZmxlY3QuYXBwbHkodmFsdWUsIHRhcmdldCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoJGVsLmdldEF0dHJpYnV0ZSgncGF0aExlbmd0aCcpICE9PSBgJHtwYXRoTGVuZ3RofWApIHtcbiAgICAkZWwuc2V0QXR0cmlidXRlKCdwYXRoTGVuZ3RoJywgYCR7cGF0aExlbmd0aH1gKTtcbiAgICBwcm94eS5zZXRBdHRyaWJ1dGUoJ2RyYXcnLCBgJHtzdGFydH0gJHtlbmR9YCk7XG4gIH1cblxuICByZXR1cm4gLyoqIEB0eXBlIHtEcmF3YWJsZVNWR0dlb21ldHJ5fSAqLyhwcm94eSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgZHJhd2FibGUgcHJveGllcyBmb3IgbXVsdGlwbGUgU1ZHIGVsZW1lbnRzLlxuICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHNlbGVjdG9yIC0gQ1NTIHNlbGVjdG9yLCBTVkcgZWxlbWVudCwgb3IgYXJyYXkgb2YgZWxlbWVudHMgYW5kIHNlbGVjdG9yc1xuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSAtIFN0YXJ0aW5nIHBvc2l0aW9uICgwLTEpXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD0wXSAtIEVuZGluZyBwb3NpdGlvbiAoMC0xKVxuICogQHJldHVybiB7QXJyYXk8RHJhd2FibGVTVkdHZW9tZXRyeT59IC0gQXJyYXkgb2YgcHJveGllZCBlbGVtZW50cyB3aXRoIGRyYXdpbmcgZnVuY3Rpb25hbGl0eVxuICovXG5jb25zdCBjcmVhdGVEcmF3YWJsZSA9IChzZWxlY3Rvciwgc3RhcnQgPSAwLCBlbmQgPSAwKSA9PiB7XG4gIGNvbnN0IGVscyA9IHBhcnNlVGFyZ2V0cyhzZWxlY3Rvcik7XG4gIHJldHVybiBlbHMubWFwKCRlbCA9PiBjcmVhdGVEcmF3YWJsZVByb3h5KFxuICAgIC8qKiBAdHlwZSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAqLygkZWwpLFxuICAgIHN0YXJ0LFxuICAgIGVuZFxuICApKTtcbn07XG5cbi8vIE1vdGlvbiBwYXRoIGFuaW1hdGlvblxuXG4vKipcbiAqIEBwYXJhbSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAkcGF0aFxuICogQHBhcmFtIHtOdW1iZXJ9IHByb2dyZXNzXG4gKiBAcGFyYW0ge051bWJlcn1sb29rdXBcbiAqIEByZXR1cm4ge0RPTVBvaW50fVxuICovXG5jb25zdCBnZXRQYXRoUG9pbnQgPSAoJHBhdGgsIHByb2dyZXNzLCBsb29rdXAgPSAwKSA9PiB7XG4gIHJldHVybiAkcGF0aC5nZXRQb2ludEF0TGVuZ3RoKHByb2dyZXNzICsgbG9va3VwID49IDEgPyBwcm9ncmVzcyArIGxvb2t1cCA6IDApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1NWR0dlb21ldHJ5RWxlbWVudH0gJHBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoUHJvcGVydHlcbiAqIEByZXR1cm4ge0Z1bmN0aW9uVmFsdWV9XG4gKi9cbmNvbnN0IGdldFBhdGhQcm9nZXNzID0gKCRwYXRoLCBwYXRoUHJvcGVydHkpID0+IHtcbiAgcmV0dXJuICRlbCA9PiB7XG4gICAgY29uc3QgdG90YWxMZW5ndGggPSArKCRwYXRoLmdldFRvdGFsTGVuZ3RoKCkpO1xuICAgIGNvbnN0IGluU3ZnID0gJGVsW2lzU3ZnU3ltYm9sXTtcbiAgICBjb25zdCBjdG0gPSAkcGF0aC5nZXRDVE0oKTtcbiAgICAvKiogQHR5cGUge1R3ZWVuT2JqZWN0VmFsdWV9ICovXG4gICAgcmV0dXJuIHtcbiAgICAgIGZyb206IDAsXG4gICAgICB0bzogdG90YWxMZW5ndGgsXG4gICAgICAvKiogQHR5cGUge1R3ZWVuTW9kaWZpZXJ9ICovXG4gICAgICBtb2RpZmllcjogcHJvZ3Jlc3MgPT4ge1xuICAgICAgICBpZiAocGF0aFByb3BlcnR5ID09PSAnYScpIHtcbiAgICAgICAgICBjb25zdCBwMCA9IGdldFBhdGhQb2ludCgkcGF0aCwgcHJvZ3Jlc3MsIC0xKTtcbiAgICAgICAgICBjb25zdCBwMSA9IGdldFBhdGhQb2ludCgkcGF0aCwgcHJvZ3Jlc3MsIDEpO1xuICAgICAgICAgIHJldHVybiBhdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gUEk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcCA9IGdldFBhdGhQb2ludCgkcGF0aCwgcHJvZ3Jlc3MsIDApO1xuICAgICAgICAgIHJldHVybiBwYXRoUHJvcGVydHkgPT09ICd4JyA/XG4gICAgICAgICAgICBpblN2ZyB8fCAhY3RtID8gcC54IDogcC54ICogY3RtLmEgKyBwLnkgKiBjdG0uYyArIGN0bS5lIDpcbiAgICAgICAgICAgIGluU3ZnIHx8ICFjdG0gPyBwLnkgOiBwLnggKiBjdG0uYiArIHAueSAqIGN0bS5kICsgY3RtLmZcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gcGF0aFxuICovXG5jb25zdCBjcmVhdGVNb3Rpb25QYXRoID0gcGF0aCA9PiB7XG4gIGNvbnN0ICRwYXRoID0gZ2V0UGF0aChwYXRoKTtcbiAgaWYgKCEkcGF0aCkgcmV0dXJuO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGdldFBhdGhQcm9nZXNzKCRwYXRoLCAneCcpLFxuICAgIHRyYW5zbGF0ZVk6IGdldFBhdGhQcm9nZXNzKCRwYXRoLCAneScpLFxuICAgIHJvdGF0ZTogZ2V0UGF0aFByb2dlc3MoJHBhdGgsICdhJyksXG4gIH1cbn07XG5cbi8vIENoZWNrIGZvciB2YWxpZCBTVkcgYXR0cmlidXRlXG5cbmNvbnN0IGNzc1Jlc2VydmVkUHJvcGVydGllcyA9IFsnb3BhY2l0eScsICdyb3RhdGUnLCAnb3ZlcmZsb3cnLCAnY29sb3InXTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXR9IGVsXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaXNWYWxpZFNWR0F0dHJpYnV0ZSA9IChlbCwgcHJvcGVydHlOYW1lKSA9PiB7XG4gIC8vIFJldHVybiBlYXJseSBhbmQgdXNlIENTUyBvcGFjaXR5IGFuaW1hdGlvbiBpbnN0ZWFkIChhbHJlYWR5IGJldHRlciBkZWZhdWx0IHZhbHVlcyAob3BhY2l0eTogMSBpbnN0ZWFkIG9mIDApKSBhbmQgcm90YXRlIHNob3VsZCBiZSBjb25zaWRlcmVkIGEgdHJhbnNmb3JtXG4gIGlmIChjc3NSZXNlcnZlZFByb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHlOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoZWwuZ2V0QXR0cmlidXRlKHByb3BlcnR5TmFtZSkgfHwgcHJvcGVydHlOYW1lIGluIGVsKSB7XG4gICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3NjYWxlJykgeyAvLyBTY2FsZVxuICAgICAgY29uc3QgZWxQYXJlbnROb2RlID0gLyoqIEB0eXBlIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICovKC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyhlbCkucGFyZW50Tm9kZSk7XG4gICAgICAvLyBPbmx5IGNvbnNpZGVyIHNjYWxlIGFzIGEgdmFsaWQgU1ZHIGF0dHJpYnV0ZSBvbiBmaWx0ZXIgZWxlbWVudFxuICAgICAgcmV0dXJuIGVsUGFyZW50Tm9kZSAmJiBlbFBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ2ZpbHRlcic7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBzdmcgPSB7XG4gIG1vcnBoVG8sXG4gIGNyZWF0ZU1vdGlvblBhdGgsXG4gIGNyZWF0ZURyYXdhYmxlLFxufTtcblxuXG5cblxuLyoqXG4gKiBSR0IgLyBSR0JBIENvbG9yIHZhbHVlIHN0cmluZyAtPiBSR0JBIHZhbHVlcyBhcnJheVxuICogQHBhcmFtICB7U3RyaW5nfSByZ2JWYWx1ZVxuICogQHJldHVybiB7Q29sb3JBcnJheX1cbiAqL1xuY29uc3QgcmdiVG9SZ2JhID0gcmdiVmFsdWUgPT4ge1xuICBjb25zdCByZ2JhID0gcmdiRXhlY1JneC5leGVjKHJnYlZhbHVlKSB8fCByZ2JhRXhlY1JneC5leGVjKHJnYlZhbHVlKTtcbiAgY29uc3QgYSA9ICFpc1VuZChyZ2JhWzRdKSA/ICtyZ2JhWzRdIDogMTtcbiAgcmV0dXJuIFtcbiAgICArcmdiYVsxXSxcbiAgICArcmdiYVsyXSxcbiAgICArcmdiYVszXSxcbiAgICBhXG4gIF1cbn07XG5cbi8qKlxuICogSEVYMyAvIEhFWDNBIC8gSEVYNiAvIEhFWDZBIENvbG9yIHZhbHVlIHN0cmluZyAtPiBSR0JBIHZhbHVlcyBhcnJheVxuICogQHBhcmFtICB7U3RyaW5nfSBoZXhWYWx1ZVxuICogQHJldHVybiB7Q29sb3JBcnJheX1cbiAqL1xuY29uc3QgaGV4VG9SZ2JhID0gaGV4VmFsdWUgPT4ge1xuICBjb25zdCBoZXhMZW5ndGggPSBoZXhWYWx1ZS5sZW5ndGg7XG4gIGNvbnN0IGlzU2hvcnQgPSBoZXhMZW5ndGggPT09IDQgfHwgaGV4TGVuZ3RoID09PSA1O1xuICByZXR1cm4gW1xuICAgICsoJzB4JyArIGhleFZhbHVlWzFdICsgaGV4VmFsdWVbaXNTaG9ydCA/IDEgOiAyXSksXG4gICAgKygnMHgnICsgaGV4VmFsdWVbaXNTaG9ydCA/IDIgOiAzXSArIGhleFZhbHVlW2lzU2hvcnQgPyAyIDogNF0pLFxuICAgICsoJzB4JyArIGhleFZhbHVlW2lzU2hvcnQgPyAzIDogNV0gKyBoZXhWYWx1ZVtpc1Nob3J0ID8gMyA6IDZdKSxcbiAgICAoKGhleExlbmd0aCA9PT0gNSB8fCBoZXhMZW5ndGggPT09IDkpID8gKygrKCcweCcgKyBoZXhWYWx1ZVtpc1Nob3J0ID8gNCA6IDddICsgaGV4VmFsdWVbaXNTaG9ydCA/IDQgOiA4XSkgLyAyNTUpLnRvRml4ZWQoMykgOiAxKVxuICBdXG59O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gcFxuICogQHBhcmFtICB7TnVtYmVyfSBxXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgaHVlMnJnYiA9IChwLCBxLCB0KSA9PiB7XG4gIGlmICh0IDwgMCkgdCArPSAxO1xuICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgcmV0dXJuIHQgPCAxIC8gNiA/IHAgKyAocSAtIHApICogNiAqIHQgOlxuICAgICAgICAgdCA8IDEgLyAyID8gcSA6XG4gICAgICAgICB0IDwgMiAvIDMgPyBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNiA6XG4gICAgICAgICBwO1xufTtcblxuLyoqXG4gKiBIU0wgLyBIU0xBIENvbG9yIHZhbHVlIHN0cmluZyAtPiBSR0JBIHZhbHVlcyBhcnJheVxuICogQHBhcmFtICB7U3RyaW5nfSBoc2xWYWx1ZVxuICogQHJldHVybiB7Q29sb3JBcnJheX1cbiAqL1xuY29uc3QgaHNsVG9SZ2JhID0gaHNsVmFsdWUgPT4ge1xuICBjb25zdCBoc2xhID0gaHNsRXhlY1JneC5leGVjKGhzbFZhbHVlKSB8fCBoc2xhRXhlY1JneC5leGVjKGhzbFZhbHVlKTtcbiAgY29uc3QgaCA9ICtoc2xhWzFdIC8gMzYwO1xuICBjb25zdCBzID0gK2hzbGFbMl0gLyAxMDA7XG4gIGNvbnN0IGwgPSAraHNsYVszXSAvIDEwMDtcbiAgY29uc3QgYSA9ICFpc1VuZChoc2xhWzRdKSA/ICtoc2xhWzRdIDogMTtcbiAgbGV0IHIsIGcsIGI7XG4gIGlmIChzID09PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBxID0gbCA8IC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XG4gICAgciA9IHJvdW5kKGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKSAqIDI1NSwgMCk7XG4gICAgZyA9IHJvdW5kKGh1ZTJyZ2IocCwgcSwgaCkgKiAyNTUsIDApO1xuICAgIGIgPSByb3VuZChodWUycmdiKHAsIHEsIGggLSAxIC8gMykgKiAyNTUsIDApO1xuICB9XG4gIHJldHVybiBbciwgZywgYiwgYV07XG59O1xuXG4vKipcbiAqIEFsbCBpbiBvbmUgY29sb3IgY29udmVydGVyIHRoYXQgY29udmVydHMgYSBjb2xvciBzdHJpbmcgdmFsdWUgaW50byBhbiBhcnJheSBvZiBSR0JBIHZhbHVlc1xuICogQHBhcmFtICB7U3RyaW5nfSBjb2xvclN0cmluZ1xuICogQHJldHVybiB7Q29sb3JBcnJheX1cbiAqL1xuY29uc3QgY29udmVydENvbG9yU3RyaW5nVmFsdWVzVG9SZ2JhQXJyYXkgPSBjb2xvclN0cmluZyA9PiB7XG4gIHJldHVybiBpc1JnYihjb2xvclN0cmluZykgPyByZ2JUb1JnYmEoY29sb3JTdHJpbmcpIDpcbiAgICAgICAgIGlzSGV4KGNvbG9yU3RyaW5nKSA/IGhleFRvUmdiYShjb2xvclN0cmluZykgOlxuICAgICAgICAgaXNIc2woY29sb3JTdHJpbmcpID8gaHNsVG9SZ2JhKGNvbG9yU3RyaW5nKSA6XG4gICAgICAgICBbMCwgMCwgMCwgMV07XG59O1xuXG5cblxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBULCBEXG4gKiBAcGFyYW0ge1R8dW5kZWZpbmVkfSB0YXJnZXRWYWx1ZVxuICogQHBhcmFtIHtEfSBkZWZhdWx0VmFsdWVcbiAqIEByZXR1cm4ge1R8RH1cbiAqL1xuY29uc3Qgc2V0VmFsdWUgPSAodGFyZ2V0VmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICByZXR1cm4gaXNVbmQodGFyZ2V0VmFsdWUpID8gZGVmYXVsdFZhbHVlIDogdGFyZ2V0VmFsdWU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1R3ZWVuUHJvcFZhbHVlfSB2YWx1ZVxuICogQHBhcmFtICB7VGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSAge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSAge051bWJlcn0gdG90YWxcbiAqIEBwYXJhbSAge09iamVjdH0gW3N0b3JlXVxuICogQHJldHVybiB7YW55fVxuICovXG5jb25zdCBnZXRGdW5jdGlvblZhbHVlID0gKHZhbHVlLCB0YXJnZXQsIGluZGV4LCB0b3RhbCwgc3RvcmUpID0+IHtcbiAgaWYgKGlzRm5jKHZhbHVlKSkge1xuICAgIGNvbnN0IGZ1bmMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb21wdXRlZCA9IC8qKiBAdHlwZSB7RnVuY3Rpb259ICovKHZhbHVlKSh0YXJnZXQsIGluZGV4LCB0b3RhbCk7XG4gICAgICAvLyBGYWxsYmFjayB0byAwIGlmIHRoZSBmdW5jdGlvbiByZXR1cm5zIHVuZGVmaW5lZCAvIE5hTiAvIG51bGwgLyBmYWxzZSAvIDBcbiAgICAgIHJldHVybiAhaXNOYU4oK2NvbXB1dGVkKSA/ICtjb21wdXRlZCA6IGNvbXB1dGVkIHx8IDA7XG4gICAgfTtcbiAgICBpZiAoc3RvcmUpIHtcbiAgICAgIHN0b3JlLmZ1bmMgPSBmdW5jO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXR9IHRhcmdldFxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wXG4gKiBAcmV0dXJuIHt0d2VlblR5cGVzfVxuICovXG5jb25zdCBnZXRUd2VlblR5cGUgPSAodGFyZ2V0LCBwcm9wKSA9PiB7XG4gIHJldHVybiAhdGFyZ2V0W2lzRG9tU3ltYm9sXSA/IHR3ZWVuVHlwZXMuT0JKRUNUIDpcbiAgICAvLyBIYW5kbGUgU1ZHIGF0dHJpYnV0ZXNcbiAgICB0YXJnZXRbaXNTdmdTeW1ib2xdICYmIGlzVmFsaWRTVkdBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wKSA/IHR3ZWVuVHlwZXMuQVRUUklCVVRFIDpcbiAgICAvLyBIYW5kbGUgQ1NTIFRyYW5zZm9ybSBwcm9wZXJ0aWVzIGRpZmZlcmVudGx5IHRoYW4gQ1NTIHRvIGFsbG93IGluZGl2aWR1YWwgYW5pbWF0aW9uc1xuICAgIHZhbGlkVHJhbnNmb3Jtcy5pbmNsdWRlcyhwcm9wKSB8fCBzaG9ydFRyYW5zZm9ybXMuZ2V0KHByb3ApID8gdHdlZW5UeXBlcy5UUkFOU0ZPUk0gOlxuICAgIC8vIENTUyB2YXJpYWJsZXNcbiAgICBzdHJpbmdTdGFydHNXaXRoKHByb3AsICctLScpID8gdHdlZW5UeXBlcy5DU1NfVkFSIDpcbiAgICAvLyBBbGwgb3RoZXIgQ1NTIHByb3BlcnRpZXNcbiAgICBwcm9wIGluIC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLnN0eWxlID8gdHdlZW5UeXBlcy5DU1MgOlxuICAgIC8vIEhhbmRsZSBvdGhlciBET00gQXR0cmlidXRlc1xuICAgIHByb3AgaW4gdGFyZ2V0ID8gdHdlZW5UeXBlcy5PQkpFQ1QgOlxuICAgIHR3ZWVuVHlwZXMuQVRUUklCVVRFO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtET01UYXJnZXR9IHRhcmdldFxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wTmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBhbmltYXRpb25JbmxpbmVTdHlsZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgZ2V0Q1NTVmFsdWUgPSAodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0aW9uSW5saW5lU3R5bGVzKSA9PiB7XG4gIGNvbnN0IGlubGluZVN0eWxlcyA9IHRhcmdldC5zdHlsZVtwcm9wTmFtZV07XG4gIGlmIChpbmxpbmVTdHlsZXMgJiYgYW5pbWF0aW9uSW5saW5lU3R5bGVzKSB7XG4gICAgYW5pbWF0aW9uSW5saW5lU3R5bGVzW3Byb3BOYW1lXSA9IGlubGluZVN0eWxlcztcbiAgfVxuICBjb25zdCB2YWx1ZSA9IGlubGluZVN0eWxlcyB8fCBnZXRDb21wdXRlZFN0eWxlKHRhcmdldFtwcm94eVRhcmdldFN5bWJvbF0gfHwgdGFyZ2V0KS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcbiAgcmV0dXJuIHZhbHVlID09PSAnYXV0bycgPyAnMCcgOiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtUYXJnZXR9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gKiBAcGFyYW0ge3R3ZWVuVHlwZXN9IFt0d2VlblR5cGVdXG4gKiBAcGFyYW0ge09iamVjdHx2b2lkfSBbYW5pbWF0aW9uSW5saW5lU3R5bGVzXVxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqL1xuY29uc3QgZ2V0T3JpZ2luYWxBbmltYXRhYmxlVmFsdWUgPSAodGFyZ2V0LCBwcm9wTmFtZSwgdHdlZW5UeXBlLCBhbmltYXRpb25JbmxpbmVTdHlsZXMpID0+IHtcbiAgY29uc3QgdHlwZSA9ICFpc1VuZCh0d2VlblR5cGUpID8gdHdlZW5UeXBlIDogZ2V0VHdlZW5UeXBlKHRhcmdldCwgcHJvcE5hbWUpO1xuICByZXR1cm4gdHlwZSA9PT0gdHdlZW5UeXBlcy5PQkpFQ1QgPyB0YXJnZXRbcHJvcE5hbWVdIHx8IDAgOlxuICAgICAgICAgdHlwZSA9PT0gdHdlZW5UeXBlcy5BVFRSSUJVVEUgPyAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KS5nZXRBdHRyaWJ1dGUocHJvcE5hbWUpIDpcbiAgICAgICAgIHR5cGUgPT09IHR3ZWVuVHlwZXMuVFJBTlNGT1JNID8gcGFyc2VJbmxpbmVUcmFuc2Zvcm1zKC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLCBwcm9wTmFtZSwgYW5pbWF0aW9uSW5saW5lU3R5bGVzKSA6XG4gICAgICAgICB0eXBlID09PSB0d2VlblR5cGVzLkNTU19WQVIgPyBnZXRDU1NWYWx1ZSgvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KSwgcHJvcE5hbWUsIGFuaW1hdGlvbklubGluZVN0eWxlcykudHJpbVN0YXJ0KCkgOlxuICAgICAgICAgZ2V0Q1NTVmFsdWUoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCksIHByb3BOYW1lLCBhbmltYXRpb25JbmxpbmVTdHlsZXMpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSAge051bWJlcn0geVxuICogQHBhcmFtICB7U3RyaW5nfSBvcGVyYXRvclxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBnZXRSZWxhdGl2ZVZhbHVlID0gKHgsIHksIG9wZXJhdG9yKSA9PiB7XG4gIHJldHVybiBvcGVyYXRvciA9PT0gJy0nID8geCAtIHkgOlxuICAgICAgICAgb3BlcmF0b3IgPT09ICcrJyA/IHggKyB5IDpcbiAgICAgICAgIHggKiB5O1xufTtcblxuLyoqIEByZXR1cm4ge1R3ZWVuRGVjb21wb3NlZFZhbHVlfSAqL1xuY29uc3QgY3JlYXRlRGVjb21wb3NlZFZhbHVlVGFyZ2V0T2JqZWN0ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8qKiBAdHlwZSB7dmFsdWVUeXBlc30gKi9cbiAgICB0OiB2YWx1ZVR5cGVzLk5VTUJFUixcbiAgICBuOiAwLFxuICAgIHU6IG51bGwsXG4gICAgbzogbnVsbCxcbiAgICBkOiBudWxsLFxuICAgIHM6IG51bGwsXG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtICB7U3RyaW5nfE51bWJlcn0gcmF3VmFsdWVcbiAqIEBwYXJhbSAge1R3ZWVuRGVjb21wb3NlZFZhbHVlfSB0YXJnZXRPYmplY3RcbiAqIEByZXR1cm4ge1R3ZWVuRGVjb21wb3NlZFZhbHVlfVxuICovXG5jb25zdCBkZWNvbXBvc2VSYXdWYWx1ZSA9IChyYXdWYWx1ZSwgdGFyZ2V0T2JqZWN0KSA9PiB7XG4gIC8qKiBAdHlwZSB7dmFsdWVUeXBlc30gKi9cbiAgdGFyZ2V0T2JqZWN0LnQgPSB2YWx1ZVR5cGVzLk5VTUJFUjtcbiAgdGFyZ2V0T2JqZWN0Lm4gPSAwO1xuICB0YXJnZXRPYmplY3QudSA9IG51bGw7XG4gIHRhcmdldE9iamVjdC5vID0gbnVsbDtcbiAgdGFyZ2V0T2JqZWN0LmQgPSBudWxsO1xuICB0YXJnZXRPYmplY3QucyA9IG51bGw7XG4gIGlmICghcmF3VmFsdWUpIHJldHVybiB0YXJnZXRPYmplY3Q7XG4gIGNvbnN0IG51bSA9ICtyYXdWYWx1ZTtcbiAgaWYgKCFpc05hTihudW0pKSB7XG4gICAgLy8gSXQncyBhIG51bWJlclxuICAgIHRhcmdldE9iamVjdC5uID0gbnVtO1xuICAgIHJldHVybiB0YXJnZXRPYmplY3Q7XG4gIH0gZWxzZSB7XG4gICAgLy8gbGV0IHN0ciA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhyYXdWYWx1ZSkudHJpbSgpO1xuICAgIGxldCBzdHIgPSAvKiogQHR5cGUge1N0cmluZ30gKi8ocmF3VmFsdWUpO1xuICAgIC8vIFBhcnNpbmcgb3BlcmF0b3JzICgrPSwgLT0sICo9KSBtYW51YWxseSBpcyBtdWNoIGZhc3RlciB0aGFuIHVzaW5nIHJlZ2V4IGhlcmVcbiAgICBpZiAoc3RyWzFdID09PSAnPScpIHtcbiAgICAgIHRhcmdldE9iamVjdC5vID0gc3RyWzBdO1xuICAgICAgc3RyID0gc3RyLnNsaWNlKDIpO1xuICAgIH1cbiAgICAvLyBTa2lwIGV4ZWMgcmVnZXggaWYgdGhlIHZhbHVlIHR5cGUgaXMgY29tcGxleCBvciBjb2xvciB0byBhdm9pZCBsb25nIHJlZ2V4IGJhY2t0cmFja2luZ1xuICAgIGNvbnN0IHVuaXRNYXRjaCA9IHN0ci5pbmNsdWRlcygnICcpID8gZmFsc2UgOiB1bml0c0V4ZWNSZ3guZXhlYyhzdHIpO1xuICAgIGlmICh1bml0TWF0Y2gpIHtcbiAgICAgIC8vIEhhcyBhIG51bWJlciBhbmQgYSB1bml0XG4gICAgICB0YXJnZXRPYmplY3QudCA9IHZhbHVlVHlwZXMuVU5JVDtcbiAgICAgIHRhcmdldE9iamVjdC5uID0gK3VuaXRNYXRjaFsxXTtcbiAgICAgIHRhcmdldE9iamVjdC51ID0gdW5pdE1hdGNoWzJdO1xuICAgICAgcmV0dXJuIHRhcmdldE9iamVjdDtcbiAgICB9IGVsc2UgaWYgKHRhcmdldE9iamVjdC5vKSB7XG4gICAgICAvLyBIYXMgYW4gb3BlcmF0b3IgKCs9LCAtPSwgKj0pXG4gICAgICB0YXJnZXRPYmplY3QubiA9ICtzdHI7XG4gICAgICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xuICAgIH0gZWxzZSBpZiAoaXNDb2woc3RyKSkge1xuICAgICAgLy8gSXMgYSBjb2xvclxuICAgICAgdGFyZ2V0T2JqZWN0LnQgPSB2YWx1ZVR5cGVzLkNPTE9SO1xuICAgICAgdGFyZ2V0T2JqZWN0LmQgPSBjb252ZXJ0Q29sb3JTdHJpbmdWYWx1ZXNUb1JnYmFBcnJheShzdHIpO1xuICAgICAgcmV0dXJuIHRhcmdldE9iamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSXMgYSBtb3JlIGNvbXBsZXggc3RyaW5nIChnZW5lcmFsbHkgc3ZnIGNvb3JkcywgY2FsYygpIG9yIGZpbHRlcnMgQ1NTIHZhbHVlcylcbiAgICAgIGNvbnN0IG1hdGNoZWROdW1iZXJzID0gc3RyLm1hdGNoKGRpZ2l0V2l0aEV4cG9uZW50Umd4KTtcbiAgICAgIHRhcmdldE9iamVjdC50ID0gdmFsdWVUeXBlcy5DT01QTEVYO1xuICAgICAgdGFyZ2V0T2JqZWN0LmQgPSBtYXRjaGVkTnVtYmVycyA/IG1hdGNoZWROdW1iZXJzLm1hcChOdW1iZXIpIDogW107XG4gICAgICB0YXJnZXRPYmplY3QucyA9IHN0ci5zcGxpdChkaWdpdFdpdGhFeHBvbmVudFJneCkgfHwgW107XG4gICAgICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUd2Vlbn0gdHdlZW5cbiAqIEBwYXJhbSAge1R3ZWVuRGVjb21wb3NlZFZhbHVlfSB0YXJnZXRPYmplY3RcbiAqIEByZXR1cm4ge1R3ZWVuRGVjb21wb3NlZFZhbHVlfVxuICovXG5jb25zdCBkZWNvbXBvc2VUd2VlblZhbHVlID0gKHR3ZWVuLCB0YXJnZXRPYmplY3QpID0+IHtcbiAgdGFyZ2V0T2JqZWN0LnQgPSB0d2Vlbi5fdmFsdWVUeXBlO1xuICB0YXJnZXRPYmplY3QubiA9IHR3ZWVuLl90b051bWJlcjtcbiAgdGFyZ2V0T2JqZWN0LnUgPSB0d2Vlbi5fdW5pdDtcbiAgdGFyZ2V0T2JqZWN0Lm8gPSBudWxsO1xuICB0YXJnZXRPYmplY3QuZCA9IGNsb25lQXJyYXkodHdlZW4uX3RvTnVtYmVycyk7XG4gIHRhcmdldE9iamVjdC5zID0gY2xvbmVBcnJheSh0d2Vlbi5fc3RyaW5ncyk7XG4gIHJldHVybiB0YXJnZXRPYmplY3Q7XG59O1xuXG5jb25zdCBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZSA9IGNyZWF0ZURlY29tcG9zZWRWYWx1ZVRhcmdldE9iamVjdCgpO1xuXG5cblxuXG5jb25zdCBsb29rdXBzID0ge1xuICAvKiogQHR5cGUge1R3ZWVuUmVwbGFjZUxvb2t1cHN9ICovXG4gIF9yZXA6IG5ldyBXZWFrTWFwKCksXG4gIC8qKiBAdHlwZSB7VHdlZW5BZGRpdGl2ZUxvb2t1cHN9ICovXG4gIF9hZGQ6IG5ldyBNYXAoKSxcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSAge1N0cmluZ30gbG9va3VwXG4gKiBAcmV0dXJuIHtUd2VlblByb3BlcnR5U2libGluZ3N9XG4gKi9cbmNvbnN0IGdldFR3ZWVuU2libGluZ3MgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgbG9va3VwID0gJ19yZXAnKSA9PiB7XG4gIGNvbnN0IGxvb2t1cE1hcCA9IGxvb2t1cHNbbG9va3VwXTtcbiAgbGV0IHRhcmdldExvb2t1cCA9IGxvb2t1cE1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCF0YXJnZXRMb29rdXApIHtcbiAgICB0YXJnZXRMb29rdXAgPSB7fTtcbiAgICBsb29rdXBNYXAuc2V0KHRhcmdldCwgdGFyZ2V0TG9va3VwKTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0TG9va3VwW3Byb3BlcnR5XSA/IHRhcmdldExvb2t1cFtwcm9wZXJ0eV0gOiB0YXJnZXRMb29rdXBbcHJvcGVydHldID0ge1xuICAgIF9oZWFkOiBudWxsLFxuICAgIF90YWlsOiBudWxsLFxuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1R3ZWVufSBwXG4gKiBAcGFyYW0gIHtUd2Vlbn0gY1xuICogQHJldHVybiB7TnVtYmVyfEJvb2xlYW59XG4gKi9cbmNvbnN0IGFkZFR3ZWVuU29ydE1ldGhvZCA9IChwLCBjKSA9PiB7XG4gIHJldHVybiBwLl9pc092ZXJyaWRkZW4gfHwgcC5fYWJzb2x1dGVTdGFydFRpbWUgPiBjLl9hYnNvbHV0ZVN0YXJ0VGltZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtUd2Vlbn0gdHdlZW5cbiAqL1xuY29uc3Qgb3ZlcnJpZGVUd2VlbiA9IHR3ZWVuID0+IHtcbiAgdHdlZW4uX2lzT3ZlcmxhcHBlZCA9IDE7XG4gIHR3ZWVuLl9pc092ZXJyaWRkZW4gPSAxO1xuICB0d2Vlbi5fY2hhbmdlRHVyYXRpb24gPSBtaW5WYWx1ZTtcbiAgdHdlZW4uX2N1cnJlbnRUaW1lID0gbWluVmFsdWU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1R3ZWVufSB0d2VlblxuICogQHBhcmFtICB7VHdlZW5Qcm9wZXJ0eVNpYmxpbmdzfSBzaWJsaW5nc1xuICogQHJldHVybiB7VHdlZW59XG4gKi9cbmNvbnN0IGNvbXBvc2VUd2VlbiA9ICh0d2Vlbiwgc2libGluZ3MpID0+IHtcblxuICBjb25zdCB0d2VlbkNvbXBvc2l0aW9uVHlwZSA9IHR3ZWVuLl9jb21wb3NpdGlvbjtcblxuICAvLyBIYW5kbGUgcmVwbGFjZWQgdHdlZW5zXG5cbiAgaWYgKHR3ZWVuQ29tcG9zaXRpb25UeXBlID09PSBjb21wb3NpdGlvblR5cGVzLnJlcGxhY2UpIHtcblxuICAgIGNvbnN0IHR3ZWVuQWJzU3RhcnRUaW1lID0gdHdlZW4uX2Fic29sdXRlU3RhcnRUaW1lO1xuXG4gICAgYWRkQ2hpbGQoc2libGluZ3MsIHR3ZWVuLCBhZGRUd2VlblNvcnRNZXRob2QsICdfcHJldlJlcCcsICdfbmV4dFJlcCcpO1xuXG4gICAgY29uc3QgcHJldlNpYmxpbmcgPSB0d2Vlbi5fcHJldlJlcDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcHJldmlvdXMgc2libGluZ3MgZm9yIGNvbXBvc2l0aW9uIHJlcGxhY2UgdHdlZW5zXG5cbiAgICBpZiAocHJldlNpYmxpbmcpIHtcblxuICAgICAgY29uc3QgcHJldlBhcmVudCA9IHByZXZTaWJsaW5nLnBhcmVudDtcbiAgICAgIGNvbnN0IHByZXZBYnNFbmRUaW1lID0gcHJldlNpYmxpbmcuX2Fic29sdXRlU3RhcnRUaW1lICsgcHJldlNpYmxpbmcuX2NoYW5nZUR1cmF0aW9uO1xuXG4gICAgICAvLyBIYW5kbGUgbG9vcGVkIGFuaW1hdGlvbnMgdHdlZW5cblxuICAgICAgaWYgKFxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJldmlvdXMgdHdlZW4gaXMgZnJvbSBhIGRpZmZlcmVudCBhbmltYXRpb25cbiAgICAgICAgdHdlZW4ucGFyZW50LmlkICE9PSBwcmV2UGFyZW50LmlkICYmXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBhbmltYXRpb24gaGFzIGxvb3BzXG4gICAgICAgIHByZXZQYXJlbnQuaXRlcmF0aW9uQ291bnQ+IDEgJiZcbiAgICAgICAgLy8gQ2hlY2sgaWYgX2Fic29sdXRlQ2hhbmdlRW5kVGltZSBvZiBsYXN0IGxvb3Agb3ZlcmxhcHMgdGhlIGN1cnJlbnQgdHdlZW5cbiAgICAgICAgcHJldkFic0VuZFRpbWUgKyAocHJldlBhcmVudC5kdXJhdGlvbiAtIHByZXZQYXJlbnQuaXRlcmF0aW9uRHVyYXRpb24pID4gdHdlZW5BYnNTdGFydFRpbWVcbiAgICAgICkge1xuXG4gICAgICAgIC8vIFRPRE86IEZpbmQgYSB3YXkgdG8gb25seSBvdmVycmlkZSB0aGUgaXRlcmF0aW9ucyBvdmVybGFwcGluZyB3aXRoIHRoZSB0d2VlblxuICAgICAgICBvdmVycmlkZVR3ZWVuKHByZXZTaWJsaW5nKTtcblxuICAgICAgICBsZXQgcHJldlByZXZTaWJsaW5nID0gcHJldlNpYmxpbmcuX3ByZXZSZXA7XG5cbiAgICAgICAgLy8gSWYgdGhlIHR3ZWVuIHdhcyBwYXJ0IG9mIGEgc2V0IG9mIGtleWZyYW1lcywgb3ZlcnJpZGUgaXRzIHNpYmxpbmdzXG4gICAgICAgIHdoaWxlIChwcmV2UHJldlNpYmxpbmcgJiYgcHJldlByZXZTaWJsaW5nLnBhcmVudC5pZCA9PT0gcHJldlBhcmVudC5pZCkge1xuICAgICAgICAgIG92ZXJyaWRlVHdlZW4ocHJldlByZXZTaWJsaW5nKTtcbiAgICAgICAgICBwcmV2UHJldlNpYmxpbmcgPSBwcmV2UHJldlNpYmxpbmcuX3ByZXZSZXA7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBjb25zdCBhYnNvbHV0ZVVwZGF0ZVN0YXJ0VGltZSA9IHR3ZWVuQWJzU3RhcnRUaW1lIC0gdHdlZW4uX2RlbGF5O1xuXG4gICAgICBpZiAocHJldkFic0VuZFRpbWUgPiBhYnNvbHV0ZVVwZGF0ZVN0YXJ0VGltZSkge1xuXG4gICAgICAgIGNvbnN0IHByZXZDaGFuZ2VTdGFydFRpbWUgPSBwcmV2U2libGluZy5fc3RhcnRUaW1lO1xuICAgICAgICBjb25zdCBwcmV2VExPZmZzZXQgPSBwcmV2QWJzRW5kVGltZSAtIChwcmV2Q2hhbmdlU3RhcnRUaW1lICsgcHJldlNpYmxpbmcuX3VwZGF0ZUR1cmF0aW9uKTtcblxuICAgICAgICBwcmV2U2libGluZy5fY2hhbmdlRHVyYXRpb24gPSBhYnNvbHV0ZVVwZGF0ZVN0YXJ0VGltZSAtIHByZXZUTE9mZnNldCAtIHByZXZDaGFuZ2VTdGFydFRpbWU7XG4gICAgICAgIHByZXZTaWJsaW5nLl9jdXJyZW50VGltZSA9IHByZXZTaWJsaW5nLl9jaGFuZ2VEdXJhdGlvbjtcbiAgICAgICAgcHJldlNpYmxpbmcuX2lzT3ZlcmxhcHBlZCA9IDE7XG5cbiAgICAgICAgaWYgKHByZXZTaWJsaW5nLl9jaGFuZ2VEdXJhdGlvbiA8IG1pblZhbHVlKSB7XG4gICAgICAgICAgb3ZlcnJpZGVUd2VlbihwcmV2U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUGF1c2UgKGFuZCBjYW5jZWwpIHRoZSBwYXJlbnQgaWYgaXQgb25seSBjb250YWlucyBvdmVybGFwcGVkIHR3ZWVuc1xuXG4gICAgICBsZXQgcGF1c2VQcmV2UGFyZW50QW5pbWF0aW9uID0gdHJ1ZTtcblxuICAgICAgZm9yRWFjaENoaWxkcmVuKHByZXZQYXJlbnQsICgvKiogQHR5cGUgVHdlZW4gKi90KSA9PiB7XG4gICAgICAgIGlmICghdC5faXNPdmVybGFwcGVkKSBwYXVzZVByZXZQYXJlbnRBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGF1c2VQcmV2UGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHByZXZQYXJlbnRUTCA9IHByZXZQYXJlbnQucGFyZW50O1xuICAgICAgICBpZiAocHJldlBhcmVudFRMKSB7XG4gICAgICAgICAgbGV0IHBhdXNlUHJldlBhcmVudFRMID0gdHJ1ZTtcbiAgICAgICAgICBmb3JFYWNoQ2hpbGRyZW4ocHJldlBhcmVudFRMLCAoLyoqIEB0eXBlIEpTQW5pbWF0aW9uICovYSkgPT4ge1xuICAgICAgICAgICAgaWYgKGEgIT09IHByZXZQYXJlbnQpIHtcbiAgICAgICAgICAgICAgZm9yRWFjaENoaWxkcmVuKGEsICgvKiogQHR5cGUgVHdlZW4gKi90KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0Ll9pc092ZXJsYXBwZWQpIHBhdXNlUHJldlBhcmVudFRMID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChwYXVzZVByZXZQYXJlbnRUTCkge1xuICAgICAgICAgICAgcHJldlBhcmVudFRMLmNhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2UGFyZW50LmNhbmNlbCgpO1xuICAgICAgICAgIC8vIFByZXZpb3VzbHksIGNhbGxpbmcgLmNhbmNlbCgpIG9uIGEgdGltZWxpbmUgY2hpbGQgd291bGQgYWZmZWN0IHRoZSByZW5kZXIgb3JkZXIgb2Ygb3RoZXIgY2hpbGRyZW5cbiAgICAgICAgICAvLyBXb3JrZWQgYXJvdW5kIHRoaXMgYnkgbWFya2luZyBpdCBhcyAuY29tcGxldGVkIGFuZCB1c2luZyAucGF1c2UoKSBmb3Igc2FmZSByZW1vdmFsIGluIHRoZSBlbmdpbmUgbG9vcFxuICAgICAgICAgIC8vIFRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCBzaW5jZSB0aW1lbGluZSB0d2VlbiBjb21wb3NpdGlvbiBpcyBub3cgaGFuZGxlZCBzZXBhcmF0bHlcbiAgICAgICAgICAvLyBLZWVwaW5nIHRoaXMgaGVyZSBmb3IgcmVmZXJlbmNlXG4gICAgICAgICAgLy8gcHJldlBhcmVudC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIC8vIHByZXZQYXJlbnQucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gbGV0IG5leHRTaWJsaW5nID0gdHdlZW4uX25leHRSZXA7XG5cbiAgICAvLyAvLyBBbGwgdGhlIG5leHQgc2libGluZ3MgYXJlIGF1dG9tYXRpY2FsbHkgb3ZlcnJpZGRlblxuXG4gICAgLy8gaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLl9hYnNvbHV0ZVN0YXJ0VGltZSA+PSB0d2VlbkFic1N0YXJ0VGltZSkge1xuICAgIC8vICAgd2hpbGUgKG5leHRTaWJsaW5nKSB7XG4gICAgLy8gICAgIG92ZXJyaWRlVHdlZW4obmV4dFNpYmxpbmcpO1xuICAgIC8vICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLl9uZXh0UmVwO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5fYWJzb2x1dGVTdGFydFRpbWUgPCB0d2VlbkFic1N0YXJ0VGltZSkge1xuICAgIC8vICAgd2hpbGUgKG5leHRTaWJsaW5nKSB7XG4gICAgLy8gICAgIG92ZXJyaWRlVHdlZW4obmV4dFNpYmxpbmcpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0d2Vlbi5pZCwgbmV4dFNpYmxpbmcuaWQpO1xuICAgIC8vICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLl9uZXh0UmVwO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAvLyBIYW5kbGUgYWRkaXRpdmUgdHdlZW5zIGNvbXBvc2l0aW9uXG5cbiAgfSBlbHNlIGlmICh0d2VlbkNvbXBvc2l0aW9uVHlwZSA9PT0gY29tcG9zaXRpb25UeXBlcy5ibGVuZCkge1xuXG4gICAgY29uc3QgYWRkaXRpdmVUd2VlblNpYmxpbmdzID0gZ2V0VHdlZW5TaWJsaW5ncyh0d2Vlbi50YXJnZXQsIHR3ZWVuLnByb3BlcnR5LCAnX2FkZCcpO1xuICAgIGNvbnN0IGFkZGl0aXZlQW5pbWF0aW9uID0gYWRkQWRkaXRpdmVBbmltYXRpb24obG9va3Vwcy5fYWRkKTtcblxuICAgIGxldCBsb29rdXBUd2VlbiA9IGFkZGl0aXZlVHdlZW5TaWJsaW5ncy5faGVhZDtcblxuICAgIGlmICghbG9va3VwVHdlZW4pIHtcbiAgICAgIGxvb2t1cFR3ZWVuID0geyAuLi50d2VlbiB9O1xuICAgICAgbG9va3VwVHdlZW4uX2NvbXBvc2l0aW9uID0gY29tcG9zaXRpb25UeXBlcy5yZXBsYWNlO1xuICAgICAgbG9va3VwVHdlZW4uX3VwZGF0ZUR1cmF0aW9uID0gbWluVmFsdWU7XG4gICAgICBsb29rdXBUd2Vlbi5fc3RhcnRUaW1lID0gMDtcbiAgICAgIGxvb2t1cFR3ZWVuLl9udW1iZXJzID0gY2xvbmVBcnJheSh0d2Vlbi5fZnJvbU51bWJlcnMpO1xuICAgICAgbG9va3VwVHdlZW4uX251bWJlciA9IDA7XG4gICAgICBsb29rdXBUd2Vlbi5fbmV4dCA9IG51bGw7XG4gICAgICBsb29rdXBUd2Vlbi5fcHJldiA9IG51bGw7XG4gICAgICBhZGRDaGlsZChhZGRpdGl2ZVR3ZWVuU2libGluZ3MsIGxvb2t1cFR3ZWVuKTtcbiAgICAgIGFkZENoaWxkKGFkZGl0aXZlQW5pbWF0aW9uLCBsb29rdXBUd2Vlbik7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB0aGUgdmFsdWVzIG9mIFRPIHRvIEZST00gYW5kIHNldCBUTyB0byAwXG5cbiAgICBjb25zdCB0b051bWJlciA9IHR3ZWVuLl90b051bWJlcjtcbiAgICB0d2Vlbi5fZnJvbU51bWJlciA9IGxvb2t1cFR3ZWVuLl9mcm9tTnVtYmVyIC0gdG9OdW1iZXI7XG4gICAgdHdlZW4uX3RvTnVtYmVyID0gMDtcbiAgICB0d2Vlbi5fbnVtYmVycyA9IGNsb25lQXJyYXkodHdlZW4uX2Zyb21OdW1iZXJzKTtcbiAgICB0d2Vlbi5fbnVtYmVyID0gMDtcbiAgICBsb29rdXBUd2Vlbi5fZnJvbU51bWJlciA9IHRvTnVtYmVyO1xuXG4gICAgaWYgKHR3ZWVuLl90b051bWJlcnMpIHtcbiAgICAgIGNvbnN0IHRvTnVtYmVycyA9IGNsb25lQXJyYXkodHdlZW4uX3RvTnVtYmVycyk7XG4gICAgICBpZiAodG9OdW1iZXJzKSB7XG4gICAgICAgIHRvTnVtYmVycy5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgIHR3ZWVuLl9mcm9tTnVtYmVyc1tpXSA9IGxvb2t1cFR3ZWVuLl9mcm9tTnVtYmVyc1tpXSAtIHZhbHVlO1xuICAgICAgICAgIHR3ZWVuLl90b051bWJlcnNbaV0gPSAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxvb2t1cFR3ZWVuLl9mcm9tTnVtYmVycyA9IHRvTnVtYmVycztcbiAgICB9XG5cbiAgICBhZGRDaGlsZChhZGRpdGl2ZVR3ZWVuU2libGluZ3MsIHR3ZWVuLCBudWxsLCAnX3ByZXZBZGQnLCAnX25leHRBZGQnKTtcblxuICB9XG5cbiAgcmV0dXJuIHR3ZWVuO1xuXG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1R3ZWVufSB0d2VlblxuICogQHJldHVybiB7VHdlZW59XG4gKi9cbmNvbnN0IHJlbW92ZVR3ZWVuU2xpYmxpbmdzID0gdHdlZW4gPT4ge1xuICBjb25zdCB0d2VlbkNvbXBvc2l0aW9uID0gdHdlZW4uX2NvbXBvc2l0aW9uO1xuICBpZiAodHdlZW5Db21wb3NpdGlvbiAhPT0gY29tcG9zaXRpb25UeXBlcy5ub25lKSB7XG4gICAgY29uc3QgdHdlZW5UYXJnZXQgPSB0d2Vlbi50YXJnZXQ7XG4gICAgY29uc3QgdHdlZW5Qcm9wZXJ0eSA9IHR3ZWVuLnByb3BlcnR5O1xuICAgIGNvbnN0IHJlcGxhY2VUd2VlbnNMb29rdXAgPSBsb29rdXBzLl9yZXA7XG4gICAgY29uc3QgcmVwbGFjZVRhcmdldFByb3BzID0gcmVwbGFjZVR3ZWVuc0xvb2t1cC5nZXQodHdlZW5UYXJnZXQpO1xuICAgIGNvbnN0IHR3ZWVuUmVwbGFjZVNpYmxpbmdzID0gcmVwbGFjZVRhcmdldFByb3BzW3R3ZWVuUHJvcGVydHldO1xuICAgIHJlbW92ZUNoaWxkKHR3ZWVuUmVwbGFjZVNpYmxpbmdzLCB0d2VlbiwgJ19wcmV2UmVwJywgJ19uZXh0UmVwJyk7XG4gICAgaWYgKHR3ZWVuQ29tcG9zaXRpb24gPT09IGNvbXBvc2l0aW9uVHlwZXMuYmxlbmQpIHtcbiAgICAgIGNvbnN0IGFkZFR3ZWVuc0xvb2t1cCA9IGxvb2t1cHMuX2FkZDtcbiAgICAgIGNvbnN0IGFkZFRhcmdldFByb3BzID0gYWRkVHdlZW5zTG9va3VwLmdldCh0d2VlblRhcmdldCk7XG4gICAgICBpZiAoIWFkZFRhcmdldFByb3BzKSByZXR1cm47XG4gICAgICBjb25zdCBhZGRpdGl2ZVR3ZWVuU2libGluZ3MgPSBhZGRUYXJnZXRQcm9wc1t0d2VlblByb3BlcnR5XTtcbiAgICAgIGNvbnN0IGFkZGl0aXZlQW5pbWF0aW9uID0gYWRkaXRpdmUuYW5pbWF0aW9uO1xuICAgICAgcmVtb3ZlQ2hpbGQoYWRkaXRpdmVUd2VlblNpYmxpbmdzLCB0d2VlbiwgJ19wcmV2QWRkJywgJ19uZXh0QWRkJyk7XG4gICAgICAvLyBJZiBvbmx5IG9uZSB0d2VlbiBpcyBsZWZ0IGluIHRoZSBhZGRpdGl2ZSBsb29rdXAsIGl0J3MgdGhlIHR3ZWVuIGxvb2t1cFxuICAgICAgY29uc3QgbG9va3VwVHdlZW4gPSBhZGRpdGl2ZVR3ZWVuU2libGluZ3MuX2hlYWQ7XG4gICAgICBpZiAobG9va3VwVHdlZW4gJiYgbG9va3VwVHdlZW4gPT09IGFkZGl0aXZlVHdlZW5TaWJsaW5ncy5fdGFpbCkge1xuICAgICAgICByZW1vdmVDaGlsZChhZGRpdGl2ZVR3ZWVuU2libGluZ3MsIGxvb2t1cFR3ZWVuLCAnX3ByZXZBZGQnLCAnX25leHRBZGQnKTtcbiAgICAgICAgcmVtb3ZlQ2hpbGQoYWRkaXRpdmVBbmltYXRpb24sIGxvb2t1cFR3ZWVuKTtcbiAgICAgICAgbGV0IHNob3VsZENsZWFuID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBhZGRUYXJnZXRQcm9wcykge1xuICAgICAgICAgIGlmIChhZGRUYXJnZXRQcm9wc1twcm9wXS5faGVhZCkge1xuICAgICAgICAgICAgc2hvdWxkQ2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQ2xlYW4pIHtcbiAgICAgICAgICBhZGRUd2VlbnNMb29rdXAuZGVsZXRlKHR3ZWVuVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHdlZW47XG59O1xuXG5cblxuXG4vKipcbiAqIEBwYXJhbSAge1RpbWVyfSB0aW1lclxuICogQHJldHVybiB7VGltZXJ9XG4gKi9cbmNvbnN0IHJlc2V0VGltZXJQcm9wZXJ0aWVzID0gdGltZXIgPT4ge1xuICB0aW1lci5wYXVzZWQgPSB0cnVlO1xuICB0aW1lci5iZWdhbiA9IGZhbHNlO1xuICB0aW1lci5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHRpbWVyO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUaW1lcn0gdGltZXJcbiAqIEByZXR1cm4ge1RpbWVyfVxuICovXG5jb25zdCByZXZpdmVUaW1lciA9IHRpbWVyID0+IHtcbiAgaWYgKCF0aW1lci5fY2FuY2VsbGVkKSByZXR1cm4gdGltZXI7XG4gIGlmICh0aW1lci5faGFzQ2hpbGRyZW4pIHtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGltZXIsIHJldml2ZVRpbWVyKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGltZXIsICgvKiogQHR5cGUge1R3ZWVufSB0d2VlbiovdHdlZW4pID0+IHtcbiAgICAgIGlmICh0d2Vlbi5fY29tcG9zaXRpb24gIT09IGNvbXBvc2l0aW9uVHlwZXMubm9uZSkge1xuICAgICAgICBjb21wb3NlVHdlZW4odHdlZW4sIGdldFR3ZWVuU2libGluZ3ModHdlZW4udGFyZ2V0LCB0d2Vlbi5wcm9wZXJ0eSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHRpbWVyLl9jYW5jZWxsZWQgPSAwO1xuICByZXR1cm4gdGltZXI7XG59O1xuXG5sZXQgdGltZXJJZCA9IDA7XG5cbi8qKlxuICogQmFzZSBjbGFzcyB1c2VkIHRvIGNyZWF0ZSBUaW1lcnMsIEFuaW1hdGlvbnMgYW5kIFRpbWVsaW5lc1xuICovXG5jbGFzcyBUaW1lciBleHRlbmRzIENsb2NrIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7VGltZXJQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICAgKiBAcGFyYW0ge1RpbWVsaW5lfSBbcGFyZW50XVxuICAgKiBAcGFyYW0ge051bWJlcn0gW3BhcmVudFBvc2l0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9LCBwYXJlbnQgPSBudWxsLCBwYXJlbnRQb3NpdGlvbiA9IDApIHtcblxuICAgIHN1cGVyKDApO1xuXG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBkZWxheSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgcmV2ZXJzZWQsXG4gICAgICBhbHRlcm5hdGUsXG4gICAgICBsb29wLFxuICAgICAgbG9vcERlbGF5LFxuICAgICAgYXV0b3BsYXksXG4gICAgICBmcmFtZVJhdGUsXG4gICAgICBwbGF5YmFja1JhdGUsXG4gICAgICBvbkNvbXBsZXRlLFxuICAgICAgb25Mb29wLFxuICAgICAgb25QYXVzZSxcbiAgICAgIG9uQmVnaW4sXG4gICAgICBvbkJlZm9yZVVwZGF0ZSxcbiAgICAgIG9uVXBkYXRlLFxuICAgIH0gPSBwYXJhbWV0ZXJzO1xuXG4gICAgaWYgKGdsb2JhbHMuc2NvcGUpIGdsb2JhbHMuc2NvcGUucmV2ZXJ0aWJsZXMucHVzaCh0aGlzKTtcblxuICAgIGNvbnN0IHRpbWVySW5pdFRpbWUgPSBwYXJlbnQgPyAwIDogZW5naW5lLl9lbGFwc2VkVGltZTtcbiAgICBjb25zdCB0aW1lckRlZmF1bHRzID0gcGFyZW50ID8gcGFyZW50LmRlZmF1bHRzIDogZ2xvYmFscy5kZWZhdWx0cztcbiAgICBjb25zdCB0aW1lckRlbGF5ID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKGlzRm5jKGRlbGF5KSB8fCBpc1VuZChkZWxheSkgPyB0aW1lckRlZmF1bHRzLmRlbGF5IDogK2RlbGF5KTtcbiAgICBjb25zdCB0aW1lckR1cmF0aW9uID0gaXNGbmMoZHVyYXRpb24pIHx8IGlzVW5kKGR1cmF0aW9uKSA/IEluZmluaXR5IDogK2R1cmF0aW9uO1xuICAgIGNvbnN0IHRpbWVyTG9vcCA9IHNldFZhbHVlKGxvb3AsIHRpbWVyRGVmYXVsdHMubG9vcCk7XG4gICAgY29uc3QgdGltZXJMb29wRGVsYXkgPSBzZXRWYWx1ZShsb29wRGVsYXksIHRpbWVyRGVmYXVsdHMubG9vcERlbGF5KTtcbiAgICBjb25zdCB0aW1lckl0ZXJhdGlvbkNvdW50ID0gdGltZXJMb29wID09PSB0cnVlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyTG9vcCA9PT0gSW5maW5pdHkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHRpbWVyTG9vcCkgPCAwID8gSW5maW5pdHkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUge051bWJlcn0gKi8odGltZXJMb29wKSArIDE7XG5cbiAgICBsZXQgb2Zmc2V0UG9zaXRpb24gPSAwO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgb2Zmc2V0UG9zaXRpb24gPSBwYXJlbnRQb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YXJ0VGltZSA9IG5vdygpO1xuICAgICAgLy8gTWFrZSBzdXJlIHRvIHRpY2sgdGhlIGVuZ2luZSBvbmNlIGlmIHN1c3BlbmRlZCB0byBhdm9pZCBiaWcgZ2FwcyB3aXRoIHRoZSBmb2xsb3dpbmcgb2Zmc2V0UG9zaXRpb24gY2FsY3VsYXRpb25cbiAgICAgIGlmIChlbmdpbmUucGF1c2VkKSB7XG4gICAgICAgIGVuZ2luZS5yZXF1ZXN0VGljayhzdGFydFRpbWUpO1xuICAgICAgICBzdGFydFRpbWUgPSBlbmdpbmUuX2VsYXBzZWRUaW1lO1xuICAgICAgfVxuICAgICAgb2Zmc2V0UG9zaXRpb24gPSBzdGFydFRpbWUgLSBlbmdpbmUuX3N0YXJ0VGltZTtcbiAgICB9XG5cbiAgICAvLyBUaW1lcidzIHBhcmFtZXRlcnNcbiAgICB0aGlzLmlkID0gIWlzVW5kKGlkKSA/IGlkIDogKyt0aW1lcklkO1xuICAgIC8qKiBAdHlwZSB7VGltZWxpbmV9ICovXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgLy8gVG90YWwgZHVyYXRpb24gb2YgdGhlIHRpbWVyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGNsYW1wSW5maW5pdHkoKCh0aW1lckR1cmF0aW9uICsgdGltZXJMb29wRGVsYXkpICogdGltZXJJdGVyYXRpb25Db3VudCkgLSB0aW1lckxvb3BEZWxheSkgfHwgbWluVmFsdWU7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuYmFja3dhcmRzID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5iZWdhbiA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkJlZ2luID0gb25CZWdpbiB8fCB0aW1lckRlZmF1bHRzLm9uQmVnaW47XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uQmVmb3JlVXBkYXRlID0gb25CZWZvcmVVcGRhdGUgfHwgdGltZXJEZWZhdWx0cy5vbkJlZm9yZVVwZGF0ZTtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBvblVwZGF0ZSB8fCB0aW1lckRlZmF1bHRzLm9uVXBkYXRlO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkxvb3AgPSBvbkxvb3AgfHwgdGltZXJEZWZhdWx0cy5vbkxvb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uUGF1c2UgPSBvblBhdXNlIHx8IHRpbWVyRGVmYXVsdHMub25QYXVzZTtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGUgfHwgdGltZXJEZWZhdWx0cy5vbkNvbXBsZXRlO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gPSB0aW1lckR1cmF0aW9uOyAvLyBEdXJhdGlvbiBvZiBvbmUgbG9vcFxuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuaXRlcmF0aW9uQ291bnQgPSB0aW1lckl0ZXJhdGlvbkNvdW50OyAvLyBOdW1iZXIgb2YgbG9vcHNcbiAgICAvKiogQHR5cGUge0Jvb2xlYW58U2Nyb2xsT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy5fYXV0b3BsYXkgPSBwYXJlbnQgPyBmYWxzZSA6IHNldFZhbHVlKGF1dG9wbGF5LCB0aW1lckRlZmF1bHRzLmF1dG9wbGF5KTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9vZmZzZXQgPSBvZmZzZXRQb3NpdGlvbjtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9kZWxheSA9IHRpbWVyRGVsYXk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fbG9vcERlbGF5ID0gdGltZXJMb29wRGVsYXk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5faXRlcmF0aW9uVGltZSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fY3VycmVudEl0ZXJhdGlvbiA9IDA7IC8vIEN1cnJlbnQgbG9vcCBpbmRleFxuICAgIC8qKiBAdHlwZSB7RnVuY3Rpb259ICovXG4gICAgdGhpcy5fcmVzb2x2ZSA9IG5vb3A7IC8vIFVzZWQgYnkgLnRoZW4oKVxuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fcmV2ZXJzZWQgPSArc2V0VmFsdWUocmV2ZXJzZWQsIHRpbWVyRGVmYXVsdHMucmV2ZXJzZWQpO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3JldmVyc2UgPSB0aGlzLl9yZXZlcnNlZDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9jYW5jZWxsZWQgPSAwO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLl9hbHRlcm5hdGUgPSBzZXRWYWx1ZShhbHRlcm5hdGUsIHRpbWVyRGVmYXVsdHMuYWx0ZXJuYXRlKTtcbiAgICAvKiogQHR5cGUge1JlbmRlcmFibGV9ICovXG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqL1xuICAgIHRoaXMuX25leHQgPSBudWxsO1xuXG4gICAgLy8gQ2xvY2sncyBwYXJhbWV0ZXJzXG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fZWxhcHNlZFRpbWUgPSB0aW1lckluaXRUaW1lO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWVySW5pdFRpbWU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fbGFzdFRpbWUgPSB0aW1lckluaXRUaW1lO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2ZwcyA9IHNldFZhbHVlKGZyYW1lUmF0ZSwgdGltZXJEZWZhdWx0cy5mcmFtZVJhdGUpO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3NwZWVkID0gc2V0VmFsdWUocGxheWJhY2tSYXRlLCB0aW1lckRlZmF1bHRzLnBsYXliYWNrUmF0ZSk7XG4gIH1cblxuICBnZXQgY2FuY2VsbGVkKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2NhbmNlbGxlZDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge0Jvb2xlYW59IGNhbmNlbGxlZCAgKi9cbiAgc2V0IGNhbmNlbGxlZChjYW5jZWxsZWQpIHtcbiAgICBjYW5jZWxsZWQgPyB0aGlzLmNhbmNlbCgpIDogdGhpcy5yZXNldCgxKS5wbGF5KCk7XG4gIH1cblxuICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIGNsYW1wKHJvdW5kKHRoaXMuX2N1cnJlbnRUaW1lLCBnbG9iYWxzLnByZWNpc2lvbiksIC10aGlzLl9kZWxheSwgdGhpcy5kdXJhdGlvbik7XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgICovXG4gIHNldCBjdXJyZW50VGltZSh0aW1lKSB7XG4gICAgY29uc3QgcGF1c2VkID0gdGhpcy5wYXVzZWQ7XG4gICAgLy8gUGF1c2luZyB0aGUgdGltZXIgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIHRpbWUganVtcHMgb24gYSBydW5uaW5nIGluc3RhbmNlXG4gICAgdGhpcy5wYXVzZSgpLnNlZWsoK3RpbWUpO1xuICAgIGlmICghcGF1c2VkKSB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgZ2V0IGl0ZXJhdGlvbkN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiByb3VuZCh0aGlzLl9pdGVyYXRpb25UaW1lLCBnbG9iYWxzLnByZWNpc2lvbik7XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgICovXG4gIHNldCBpdGVyYXRpb25DdXJyZW50VGltZSh0aW1lKSB7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9ICh0aGlzLml0ZXJhdGlvbkR1cmF0aW9uICogdGhpcy5fY3VycmVudEl0ZXJhdGlvbikgKyB0aW1lO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzKCkge1xuICAgIHJldHVybiBjbGFtcChyb3VuZCh0aGlzLl9jdXJyZW50VGltZSAvIHRoaXMuZHVyYXRpb24sIDUpLCAwLCAxKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gcHJvZ3Jlc3MgICovXG4gIHNldCBwcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG4gIH1cblxuICBnZXQgaXRlcmF0aW9uUHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIGNsYW1wKHJvdW5kKHRoaXMuX2l0ZXJhdGlvblRpbWUgLyB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uLCA1KSwgMCwgMSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHByb2dyZXNzICAqL1xuICBzZXQgaXRlcmF0aW9uUHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgICBjb25zdCBpdGVyYXRpb25EdXJhdGlvbiA9IHRoaXMuaXRlcmF0aW9uRHVyYXRpb247XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IChpdGVyYXRpb25EdXJhdGlvbiAqIHRoaXMuX2N1cnJlbnRJdGVyYXRpb24pICsgKGl0ZXJhdGlvbkR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRJdGVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJdGVyYXRpb247XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IGl0ZXJhdGlvbkNvdW50ICAqL1xuICBzZXQgY3VycmVudEl0ZXJhdGlvbihpdGVyYXRpb25Db3VudCkge1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAodGhpcy5pdGVyYXRpb25EdXJhdGlvbiAqIGNsYW1wKCtpdGVyYXRpb25Db3VudCwgMCwgdGhpcy5pdGVyYXRpb25Db3VudCAtIDEpKTtcbiAgfVxuXG4gIGdldCByZXZlcnNlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9yZXZlcnNlZDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge0Jvb2xlYW59IHJldmVyc2UgICovXG4gIHNldCByZXZlcnNlZChyZXZlcnNlKSB7XG4gICAgcmV2ZXJzZSA/IHRoaXMucmV2ZXJzZSgpIDogdGhpcy5wbGF5KCk7XG4gIH1cblxuICBnZXQgc3BlZWQoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNwZWVkO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBwbGF5YmFja1JhdGUgICovXG4gIHNldCBzcGVlZChwbGF5YmFja1JhdGUpIHtcbiAgICBzdXBlci5zcGVlZCA9IHBsYXliYWNrUmF0ZTtcbiAgICB0aGlzLnJlc2V0VGltZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gaW50ZXJuYWxSZW5kZXJcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJlc2V0KGludGVybmFsUmVuZGVyID0gMCkge1xuICAgIC8vIElmIGNhbmNlbGxlZCwgcmV2aXZlIHRoZSB0aW1lciBiZWZvcmUgcmVuZGVyaW5nIGluIG9yZGVyIHRvIGhhdmUgcHJvcGVydGx5IGNvbXBvc2VkIHR3ZWVucyBzaWJsaW5nc1xuICAgIHJldml2ZVRpbWVyKHRoaXMpO1xuICAgIGlmICh0aGlzLl9yZXZlcnNlZCAmJiAhdGhpcy5fcmV2ZXJzZSkgdGhpcy5yZXZlcnNlZCA9IGZhbHNlO1xuICAgIC8vIFJlbmRlcmluZyBiZWZvcmUgdXBkYXRpbmcgdGhlIGNvbXBsZXRlZCBmbGFnIHRvIHByZXZlbnQgc2tpcHMgYW5kIHRvIG1ha2Ugc3VyZSB0aGUgcHJvcGVydGllcyBhcmUgbm90IG92ZXJyaWRkZW5cbiAgICAvLyBTZXR0aW5nIHRoZSBpdGVyYXRpb25UaW1lIGF0IHRoZSBlbmQgdG8gZm9yY2UgdGhlIHJlbmRlcmluZyB0byBoYXBwZW5kIGJhY2t3YXJkcywgb3RoZXJ3aXNlIGNhbGxpbmcgLnJlc2V0KCkgb24gVGltZWxpbmVzIG1pZ2h0IG5vdCByZW5kZXIgY2hpbGRyZW4gaW4gdGhlIHJpZ2h0IG9yZGVyXG4gICAgLy8gTk9URTogVGhpcyBpcyBvbmx5IHJlcXVpcmVkIGZvciBUaW1lbGluZXMgYW5kIG1pZ2h0IGJlIGJldHRlciB0byBtb3ZlIHRvIHRoZSBUaW1lbGluZSBjbGFzcz9cbiAgICB0aGlzLl9pdGVyYXRpb25UaW1lID0gdGhpcy5pdGVyYXRpb25EdXJhdGlvbjtcbiAgICAvLyBTZXQgdGlja01vZGUgdG8gdGlja01vZGVzLkZPUkNFIHRvIGZvcmNlIHJlbmRlcmluZ1xuICAgIHRpY2sodGhpcywgMCwgMSwgaW50ZXJuYWxSZW5kZXIsIHRpY2tNb2Rlcy5GT1JDRSk7XG4gICAgLy8gUmVzZXQgdGltZXIgcHJvcGVydGllcyBhZnRlciByZXZpdmUgLyByZW5kZXIgdG8gbWFrZSBzdXJlIHRoZSBwcm9wcyBhcmUgbm90IHVwZGF0ZWQgYWdhaW5cbiAgICByZXNldFRpbWVyUHJvcGVydGllcyh0aGlzKTtcbiAgICAvLyBBbHNvIHJlc2V0IGNoaWxkcmVuIHByb3BlcnRpZXNcbiAgICBpZiAodGhpcy5faGFzQ2hpbGRyZW4pIHtcbiAgICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCByZXNldFRpbWVyUHJvcGVydGllcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gaW50ZXJuYWxSZW5kZXJcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIGluaXQoaW50ZXJuYWxSZW5kZXIgPSAwKSB7XG4gICAgdGhpcy5mcHMgPSB0aGlzLl9mcHM7XG4gICAgdGhpcy5zcGVlZCA9IHRoaXMuX3NwZWVkO1xuICAgIC8vIE1hbnVhbGx5IGNhbGxpbmcgLmluaXQoKSBvbiB0aW1lbGluZXMgc2hvdWxkIHJlbmRlciBhbGwgY2hpbGRyZW4gaW50aWFsIHN0YXRlXG4gICAgLy8gRm9yY2VzIGFsbCBjaGlsZHJlbiB0byByZW5kZXIgb25jZSB0aGVuIHJlbmRlciB0byAwIHdoZW4gcmVzZXRlZFxuICAgIGlmICghaW50ZXJuYWxSZW5kZXIgJiYgdGhpcy5faGFzQ2hpbGRyZW4pIHtcbiAgICAgIHRpY2sodGhpcywgdGhpcy5kdXJhdGlvbiwgMSwgaW50ZXJuYWxSZW5kZXIsIHRpY2tNb2Rlcy5GT1JDRSk7XG4gICAgfVxuICAgIHRoaXMucmVzZXQoaW50ZXJuYWxSZW5kZXIpO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBzZXQgYXV0b3BsYXkgdG8gZmFsc2UgdG8gY2hpbGQgdGltZXJzIHNvIGl0IGRvZXNuJ3QgYXR0ZW1wdCB0byBhdXRvcGxheSAvIGxpbmtcbiAgICBjb25zdCBhdXRvcGxheSA9IHRoaXMuX2F1dG9wbGF5O1xuICAgIGlmIChhdXRvcGxheSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICB9IGVsc2UgaWYgKGF1dG9wbGF5ICYmICFpc1VuZCgvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqLyhhdXRvcGxheSkubGlua2VkKSkge1xuICAgICAgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi8oYXV0b3BsYXkpLmxpbmsodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIHJlc2V0VGltZSgpIHtcbiAgICBjb25zdCB0aW1lU2NhbGUgPSAxIC8gKHRoaXMuX3NwZWVkICogZW5naW5lLl9zcGVlZCk7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gbm93KCkgLSAodGhpcy5fY3VycmVudFRpbWUgKyB0aGlzLl9kZWxheSkgKiB0aW1lU2NhbGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5vblBhdXNlKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIHJlc3VtZSgpIHtcbiAgICBpZiAoIXRoaXMucGF1c2VkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIC8vIFdlIGNhbiBzYWZlbHkgaW1lZGlhdGx5IHJlbmRlciBhIHRpbWVyIHRoYXQgaGFzIG5vIGR1cmF0aW9uIGFuZCBubyBjaGlsZHJlblxuICAgIGlmICh0aGlzLmR1cmF0aW9uIDw9IG1pblZhbHVlICYmICF0aGlzLl9oYXNDaGlsZHJlbikge1xuICAgICAgdGljayh0aGlzLCBtaW5WYWx1ZSwgMCwgMCwgdGlja01vZGVzLkZPUkNFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9ydW5uaW5nKSB7XG4gICAgICAgIGFkZENoaWxkKGVuZ2luZSwgdGhpcyk7XG4gICAgICAgIGVuZ2luZS5faGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzZXRUaW1lKCk7XG4gICAgICAvLyBGb3JjZXMgdGhlIHRpbWVyIHRvIGFkdmFuY2UgYnkgYXQgbGVhc3Qgb25lIGZyYW1lIHdoZW4gdGhlIG5leHQgdGljayBvY2N1cnNcbiAgICAgIHRoaXMuX3N0YXJ0VGltZSAtPSAxMjtcbiAgICAgIGVuZ2luZS53YWtlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIHJlc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzZXQoMCkucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lXG4gICAqIEBwYXJhbSAge0Jvb2xlYW58TnVtYmVyfSBbbXV0ZUNhbGxiYWNrc11cbiAgICogQHBhcmFtICB7Qm9vbGVhbnxOdW1iZXJ9IFtpbnRlcm5hbFJlbmRlcl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHNlZWsodGltZSwgbXV0ZUNhbGxiYWNrcyA9IDAsIGludGVybmFsUmVuZGVyID0gMCkge1xuICAgIC8vIFJlY29tcG9zZSB0aGUgdHdlZW4gc2libGluZ3MgaW4gY2FzZSB0aGUgdGltZXIgaGFzIGJlZW4gY2FuY2VsbGVkXG4gICAgcmV2aXZlVGltZXIodGhpcyk7XG4gICAgLy8gSWYgeW91IHNlZWsgYSBjb21wbGV0ZWQgYW5pbWF0aW9uLCBvdGhlcndpc2UgdGhlIG5leHQgcGxheSB3aWxsIHN0YXJ0cyBhdCAwXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpc1BhdXNlZCA9IHRoaXMucGF1c2VkO1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAvLyB0aW1lciwgdGltZSwgbXV0ZUNhbGxiYWNrcywgaW50ZXJuYWxSZW5kZXIsIHRpY2tNb2RlXG4gICAgdGljayh0aGlzLCB0aW1lICsgdGhpcy5fZGVsYXksIH5+bXV0ZUNhbGxiYWNrcywgfn5pbnRlcm5hbFJlbmRlciwgdGlja01vZGVzLkFVVE8pO1xuICAgIHJldHVybiBpc1BhdXNlZCA/IHRoaXMgOiB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIGFsdGVybmF0ZSgpIHtcbiAgICBjb25zdCByZXZlcnNlZCA9IHRoaXMuX3JldmVyc2VkO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5pdGVyYXRpb25Db3VudDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuaXRlcmF0aW9uRHVyYXRpb247XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBtYXhpbXVtIGl0ZXJhdGlvbnMgcG9zc2libGUgZ2l2ZW4gdGhlIGl0ZXJhdGlvbiBkdXJhdGlvblxuICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSBjb3VudCA9PT0gSW5maW5pdHkgPyBmbG9vcihtYXhWYWx1ZSAvIGR1cmF0aW9uKSA6IGNvdW50O1xuICAgIHRoaXMuX3JldmVyc2VkID0gKyh0aGlzLl9hbHRlcm5hdGUgJiYgIShpdGVyYXRpb25zICUgMikgPyByZXZlcnNlZCA6ICFyZXZlcnNlZCk7XG4gICAgaWYgKGNvdW50ID09PSBJbmZpbml0eSkge1xuICAgICAgLy8gSGFuZGxlIGluZmluaXRlIGxvb3BzIHRvIGxvb3Agb24gdGhlbXNlbGZcbiAgICAgIHRoaXMuaXRlcmF0aW9uUHJvZ3Jlc3MgPSB0aGlzLl9yZXZlcnNlZCA/IDEgLSB0aGlzLml0ZXJhdGlvblByb2dyZXNzIDogdGhpcy5pdGVyYXRpb25Qcm9ncmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWVrKChkdXJhdGlvbiAqIGl0ZXJhdGlvbnMpIC0gdGhpcy5fY3VycmVudFRpbWUpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0VGltZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIHBsYXkoKSB7XG4gICAgaWYgKHRoaXMuX3JldmVyc2VkKSB0aGlzLmFsdGVybmF0ZSgpO1xuICAgIHJldHVybiB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIHJldmVyc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9yZXZlcnNlZCkgdGhpcy5hbHRlcm5hdGUoKTtcbiAgICByZXR1cm4gdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIC8vIFRPRE86IE1vdmUgYWxsIHRoZSBhbmltYXRpb24gLyB0d2VlbnMgLyBjaGlsZHJlbiByZWxhdGVkIGNvZGUgdG8gQW5pbWF0aW9uIC8gVGltZWxpbmVcblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLl9oYXNDaGlsZHJlbikge1xuICAgICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1JlbmRlcmFibGV9ICovY2hpbGQpID0+IGNoaWxkLmNhbmNlbCgpLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsIHJlbW92ZVR3ZWVuU2xpYmxpbmdzKTtcbiAgICB9XG4gICAgdGhpcy5fY2FuY2VsbGVkID0gMTtcbiAgICAvLyBQYXVzaW5nIHRoZSB0aW1lciByZW1vdmVzIGl0IGZyb20gdGhlIGVuZ2luZVxuICAgIHJldHVybiB0aGlzLnBhdXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSBuZXdEdXJhdGlvblxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc3RyZXRjaChuZXdEdXJhdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnREdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgY29uc3Qgbm9ybWxpemVkRHVyYXRpb24gPSBub3JtYWxpemVUaW1lKG5ld0R1cmF0aW9uKTtcbiAgICBpZiAoY3VycmVudER1cmF0aW9uID09PSBub3JtbGl6ZWREdXJhdGlvbikgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdGltZVNjYWxlID0gbmV3RHVyYXRpb24gLyBjdXJyZW50RHVyYXRpb247XG4gICAgY29uc3QgaXNTZXR0ZXIgPSBuZXdEdXJhdGlvbiA8PSBtaW5WYWx1ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gaXNTZXR0ZXIgPyBtaW5WYWx1ZSA6IG5vcm1saXplZER1cmF0aW9uO1xuICAgIHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gPSBpc1NldHRlciA/IG1pblZhbHVlIDogbm9ybWFsaXplVGltZSh0aGlzLml0ZXJhdGlvbkR1cmF0aW9uICogdGltZVNjYWxlKTtcbiAgICB0aGlzLl9vZmZzZXQgKj0gdGltZVNjYWxlO1xuICAgIHRoaXMuX2RlbGF5ICo9IHRpbWVTY2FsZTtcbiAgICB0aGlzLl9sb29wRGVsYXkgKj0gdGltZVNjYWxlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAvKipcbiAgICogQ2FuY2VscyB0aGUgdGltZXIgYnkgc2Vla2luZyBpdCBiYWNrIHRvIDAgYW5kIHJldmVydGluZyB0aGUgYXR0YWNoZWQgc2Nyb2xsZXIgaWYgbmVjZXNzYXJ5XG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZXZlcnQoKSB7XG4gICAgdGljayh0aGlzLCAwLCAxLCAwLCB0aWNrTW9kZXMuQVVUTyk7XG4gICAgY29uc3QgYXAgPSAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqLyh0aGlzLl9hdXRvcGxheSk7XG4gICAgaWYgKGFwICYmIGFwLmxpbmtlZCAmJiBhcC5saW5rZWQgPT09IHRoaXMpIGFwLnJldmVydCgpO1xuICAgIHJldHVybiB0aGlzLmNhbmNlbCgpO1xuICB9XG5cbiAvKipcbiAgICogSW1lZGlhdGx5IGNvbXBsZXRlcyB0aGUgdGltZXIsIGNhbmNlbHMgaXQgYW5kIHRyaWdnZXJzIHRoZSBvbkNvbXBsZXRlIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBjb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWVrKHRoaXMuZHVyYXRpb24pLmNhbmNlbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge0NhbGxiYWNrPHRoaXM+fSBbY2FsbGJhY2tdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICB0aGVuKGNhbGxiYWNrID0gbm9vcCkge1xuICAgIGNvbnN0IHRoZW4gPSB0aGlzLnRoZW47XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKCkgPT4ge1xuICAgICAgLy8gdGhpcy50aGVuID0gbnVsbCBwcmV2ZW50cyBpbmZpbml0ZSByZWN1cnNpb24gaWYgcmV0dXJuZWQgYnkgYW4gYXN5bmMgZnVuY3Rpb25cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qdWxpYW5nYXJuaWVyb3JnL2FuaW1lLWJldGEvaXNzdWVzLzI2XG4gICAgICB0aGlzLnRoZW4gPSBudWxsO1xuICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICB0aGlzLnRoZW4gPSB0aGVuO1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IG5vb3A7XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UociA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gKCkgPT4gcihvblJlc29sdmUoKSk7XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gcmVzb2x2ZSBpbWVkaWF0bHkgaWYgdGhlIHRpbWVyIGhhcyBhbHJlYWR5IGNvbXBsZXRlZFxuICAgICAgaWYgKHRoaXMuY29tcGxldGVkKSB0aGlzLl9yZXNvbHZlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9KTtcbiAgfVxuXG59XG5cblxuLyoqXG4gKiBAcGFyYW0ge1RpbWVyUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAqIEByZXR1cm4ge1RpbWVyfVxuICovXG5jb25zdCBjcmVhdGVUaW1lciA9IHBhcmFtZXRlcnMgPT4gbmV3IFRpbWVyKHBhcmFtZXRlcnMsIG51bGwsIDApLmluaXQoKTtcblxuXG5cblxuLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbmNvbnN0IG5vbmUgPSB0ID0+IHQ7XG5cbi8vIEN1YmljIEJlemllciBzb2x2ZXIgYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2UgwqkgR2HDq3RhbiBSZW5hdWRlYXVcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFUXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFBMVxuICogQHBhcmFtICB7TnVtYmVyfSBhQTJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgY2FsY0JlemllciA9IChhVCwgYUExLCBhQTIpID0+ICgoKDEgLSAzICogYUEyICsgMyAqIGFBMSkgKiBhVCArICgzICogYUEyIC0gNiAqIGFBMSkpICogYVQgKyAoMyAqIGFBMSkpICogYVQ7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSBhWFxuICogQHBhcmFtICB7TnVtYmVyfSBtWDFcbiAqIEBwYXJhbSAge051bWJlcn0gbVgyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGJpbmFyeVN1YmRpdmlkZSA9IChhWCwgbVgxLCBtWDIpID0+IHtcbiAgbGV0IGFBID0gMCwgYUIgPSAxLCBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICBkbyB7XG4gICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDI7XG4gICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICBpZiAoY3VycmVudFggPiAwKSB7XG4gICAgICBhQiA9IGN1cnJlbnRUO1xuICAgIH0gZWxzZSB7XG4gICAgICBhQSA9IGN1cnJlbnRUO1xuICAgIH1cbiAgfSB3aGlsZSAoYWJzKGN1cnJlbnRYKSA+IC4wMDAwMDAxICYmICsraSA8IDEwMCk7XG4gIHJldHVybiBjdXJyZW50VDtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSBbbVgxXVxuICogQHBhcmFtICB7TnVtYmVyfSBbbVkxXVxuICogQHBhcmFtICB7TnVtYmVyfSBbbVgyXVxuICogQHBhcmFtICB7TnVtYmVyfSBbbVkyXVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cblxuY29uc3QgY3ViaWNCZXppZXIgPSAobVgxID0gMC41LCBtWTEgPSAwLjAsIG1YMiA9IDAuNSwgbVkyID0gMS4wKSA9PiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpID8gbm9uZSA6XG4gIHQgPT4gdCA9PT0gMCB8fCB0ID09PSAxID8gdCA6XG4gIGNhbGNCZXppZXIoYmluYXJ5U3ViZGl2aWRlKHQsIG1YMSwgbVgyKSwgbVkxLCBtWTIpO1xuXG4vKipcbiAqIFN0ZXBzIGVhc2UgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG4gKiBPbmx5IGNvdmVycyAnZW5kJyBhbmQgJ3N0YXJ0JyBqdW1wdGVybXNcbiAqIEBwYXJhbSAge051bWJlcn0gc3RlcHNcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFtmcm9tU3RhcnRdXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuY29uc3Qgc3RlcHMgPSAoc3RlcHMgPSAxMCwgZnJvbVN0YXJ0KSA9PiB7XG4gIGNvbnN0IHJvdW5kTWV0aG9kID0gZnJvbVN0YXJ0ID8gY2VpbCA6IGZsb29yO1xuICByZXR1cm4gdCA9PiByb3VuZE1ldGhvZChjbGFtcCh0LCAwLCAxKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpO1xufTtcblxuLyoqXG4gKiBXaXRob3V0IHBhcmFtZXRlcnMsIHRoZSBsaW5lYXIgZnVuY3Rpb24gY3JlYXRlcyBhIG5vbi1lYXNlZCB0cmFuc2l0aW9uLlxuICogUGFyYW1ldGVycywgaWYgdXNlZCwgY3JlYXRlcyBhIHBpZWNld2lzZSBsaW5lYXIgZWFzaW5nIGJ5IGludGVycG9sYXRpbmcgbGluZWFybHkgYmV0d2VlbiB0aGUgc3BlY2lmaWVkIHBvaW50cy5cbiAqIEBwYXJhbSAgey4uLlN0cmluZ3xOdW1iZXJ9IFthcmdzXSAtIFBvaW50c1xuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cbmNvbnN0IGxpbmVhciA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgaWYgKCFhcmdzTGVuZ3RoKSByZXR1cm4gbm9uZTtcbiAgY29uc3QgdG90YWxQb2ludHMgPSBhcmdzTGVuZ3RoIC0gMTtcbiAgY29uc3QgZmlyc3RBcmcgPSBhcmdzWzBdO1xuICBjb25zdCBsYXN0QXJnID0gYXJnc1t0b3RhbFBvaW50c107XG4gIGNvbnN0IHhQb2ludHMgPSBbMF07XG4gIGNvbnN0IHlQb2ludHMgPSBbcGFyc2VOdW1iZXIoZmlyc3RBcmcpXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b3RhbFBvaW50czsgaSsrKSB7XG4gICAgY29uc3QgYXJnID0gYXJnc1tpXTtcbiAgICBjb25zdCBzcGxpdFZhbHVlID0gaXNTdHIoYXJnKSA/XG4gICAgLyoqIEB0eXBlIHtTdHJpbmd9ICovKGFyZykudHJpbSgpLnNwbGl0KCcgJykgOlxuICAgIFthcmddO1xuICAgIGNvbnN0IHZhbHVlID0gc3BsaXRWYWx1ZVswXTtcbiAgICBjb25zdCBwZXJjZW50ID0gc3BsaXRWYWx1ZVsxXTtcbiAgICB4UG9pbnRzLnB1c2goIWlzVW5kKHBlcmNlbnQpID8gcGFyc2VOdW1iZXIocGVyY2VudCkgLyAxMDAgOiBpIC8gdG90YWxQb2ludHMpO1xuICAgIHlQb2ludHMucHVzaChwYXJzZU51bWJlcih2YWx1ZSkpO1xuICB9XG4gIHlQb2ludHMucHVzaChwYXJzZU51bWJlcihsYXN0QXJnKSk7XG4gIHhQb2ludHMucHVzaCgxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGVhc2VMaW5lYXIodCkge1xuICAgIGZvciAobGV0IGkgPSAxLCBsID0geFBvaW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRYID0geFBvaW50c1tpXTtcbiAgICAgIGlmICh0IDw9IGN1cnJlbnRYKSB7XG4gICAgICAgIGNvbnN0IHByZXZYID0geFBvaW50c1tpIC0gMV07XG4gICAgICAgIGNvbnN0IHByZXZZID0geVBvaW50c1tpIC0gMV07XG4gICAgICAgIHJldHVybiBwcmV2WSArICh5UG9pbnRzW2ldIC0gcHJldlkpICogKHQgLSBwcmV2WCkgLyAoY3VycmVudFggLSBwcmV2WCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB5UG9pbnRzW3lQb2ludHMubGVuZ3RoIC0gMV07XG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0ZXBzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtsZW5ndGhdIC0gVGhlIG51bWJlciBvZiBzdGVwc1xuICogQHBhcmFtICB7TnVtYmVyfSBbcmFuZG9tbmVzc10gLSBIb3cgc3Ryb25nIHRoZSByYW5kb21uZXNzIGlzXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuY29uc3QgaXJyZWd1bGFyID0gKGxlbmd0aCA9IDEwLCByYW5kb21uZXNzID0gMSkgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBbMF07XG4gIGNvbnN0IHRvdGFsID0gbGVuZ3RoIC0gMTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHZhbHVlc1tpIC0gMV07XG4gICAgY29uc3Qgc3BhY2luZyA9IGkgLyB0b3RhbDtcbiAgICBjb25zdCBzZWdtZW50RW5kID0gKGkgKyAxKSAvIHRvdGFsO1xuICAgIGNvbnN0IHJhbmRvbVZhcmlhdGlvbiA9IHNwYWNpbmcgKyAoc2VnbWVudEVuZCAtIHNwYWNpbmcpICogTWF0aC5yYW5kb20oKTtcbiAgICAvLyBNaXggdGhlIGV2ZW4gc3BhY2luZyBhbmQgcmFuZG9tIHZhcmlhdGlvbiBiYXNlZCBvbiB0aGUgcmFuZG9tbmVzcyBwYXJhbWV0ZXJcbiAgICBjb25zdCByYW5kb21WYWx1ZSA9IHNwYWNpbmcgKiAoMSAtIHJhbmRvbW5lc3MpICsgcmFuZG9tVmFyaWF0aW9uICogcmFuZG9tbmVzcztcbiAgICB2YWx1ZXMucHVzaChjbGFtcChyYW5kb21WYWx1ZSwgcHJldmlvdXNWYWx1ZSwgMSkpO1xuICB9XG4gIHZhbHVlcy5wdXNoKDEpO1xuICByZXR1cm4gbGluZWFyKC4uLnZhbHVlcyk7XG59O1xuXG4vLyBFYXNpbmcgZnVuY3Rpb25zIGFkYXB0ZWQgZnJvbSBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzZSDCqSBSb2JlcnQgUGVubmVyXG5cbi8qKlxuICogQGNhbGxiYWNrIFBvd2VyRWFzaW5nXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtwb3dlcj0xLjY3NV1cbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEJhY2tFYXNpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW292ZXJzaG9vdD0xLjcwMTU4XVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgRWxhc3RpY0Vhc2luZ1xuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbYW1wbGl0dWRlPTFdXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtwZXJpb2Q9LjNdXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBFYXNlRmFjdG9yeVxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbcGFyYW1BXVxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbcGFyYW1CXVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb258TnVtYmVyfVxuICovXG5cbi8qKiBAdHlwZWRlZiB7UG93ZXJFYXNpbmd8QmFja0Vhc2luZ3xFbGFzdGljRWFzaW5nfSBFYXNlc0ZhY3RvcnkgKi9cblxuY29uc3QgaGFsZlBJID0gUEkgLyAyO1xuY29uc3QgZG91YmxlUEkgPSBQSSAqIDI7XG4vKiogQHR5cGUge1Bvd2VyRWFzaW5nfSAqL1xuY29uc3QgZWFzZUluUG93ZXIgPSAocCA9IDEuNjgpID0+IHQgPT4gcG93KHQsICtwKTtcblxuLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBFYXNlc0ZhY3Rvcnl8RWFzaW5nRnVuY3Rpb24+fSAqL1xuY29uc3QgZWFzZUluRnVuY3Rpb25zID0ge1xuICBbZW1wdHlTdHJpbmddOiBlYXNlSW5Qb3dlcixcbiAgUXVhZDogZWFzZUluUG93ZXIoMiksXG4gIEN1YmljOiBlYXNlSW5Qb3dlcigzKSxcbiAgUXVhcnQ6IGVhc2VJblBvd2VyKDQpLFxuICBRdWludDogZWFzZUluUG93ZXIoNSksXG4gIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gIFNpbmU6IHQgPT4gMSAtIGNvcyh0ICogaGFsZlBJKSxcbiAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgQ2lyYzogdCA9PiAxIC0gc3FydCgxIC0gdCAqIHQpLFxuICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICBFeHBvOiB0ID0+IHQgPyBwb3coMiwgMTAgKiB0IC0gMTApIDogMCxcbiAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgQm91bmNlOiB0ID0+IHtcbiAgICBsZXQgcG93MiwgYiA9IDQ7XG4gICAgd2hpbGUgKHQgPCAoKHBvdzIgPSBwb3coMiwgLS1iKSkgLSAxKSAvIDExKTtcbiAgICByZXR1cm4gMSAvIHBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBwb3coKHBvdzIgKiAzIC0gMikgLyAyMiAtIHQsIDIpO1xuICB9LFxuICAvKiogQHR5cGUge0JhY2tFYXNpbmd9ICovXG4gIEJhY2s6IChvdmVyc2hvb3QgPSAxLjcwMTU4KSA9PiB0ID0+ICgrb3ZlcnNob290ICsgMSkgKiB0ICogdCAqIHQgLSArb3ZlcnNob290ICogdCAqIHQsXG4gIC8qKiBAdHlwZSB7RWxhc3RpY0Vhc2luZ30gKi9cbiAgRWxhc3RpYzogKGFtcGxpdHVkZSA9IDEsIHBlcmlvZCA9IC4zKSA9PiB7XG4gICAgY29uc3QgYSA9IGNsYW1wKCthbXBsaXR1ZGUsIDEsIDEwKTtcbiAgICBjb25zdCBwID0gY2xhbXAoK3BlcmlvZCwgbWluVmFsdWUsIDIpO1xuICAgIGNvbnN0IHMgPSAocCAvIGRvdWJsZVBJKSAqIGFzaW4oMSAvIGEpO1xuICAgIGNvbnN0IGUgPSBkb3VibGVQSSAvIHA7XG4gICAgcmV0dXJuIHQgPT4gdCA9PT0gMCB8fCB0ID09PSAxID8gdCA6IC1hICogcG93KDIsIC0xMCAqICgxIC0gdCkpICogc2luKCgoMSAtIHQpIC0gcykgKiBlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgRWFzZVR5cGVcbiAqIEBwYXJhbSB7RWFzaW5nRnVuY3Rpb259IEVhc2VcbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5cbi8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgRWFzZVR5cGU+fSAqL1xuY29uc3QgZWFzZVR5cGVzID0ge1xuICBpbjogZWFzZUluID0+IHQgPT4gZWFzZUluKHQpLFxuICBvdXQ6IGVhc2VJbiA9PiB0ID0+IDEgLSBlYXNlSW4oMSAtIHQpLFxuICBpbk91dDogZWFzZUluID0+IHQgPT4gdCA8IC41ID8gZWFzZUluKHQgKiAyKSAvIDIgOiAxIC0gZWFzZUluKHQgKiAtMiArIDIpIC8gMixcbiAgb3V0SW46IGVhc2VJbiA9PiB0ID0+IHQgPCAuNSA/ICgxIC0gZWFzZUluKDEgLSB0ICogMikpIC8gMiA6IChlYXNlSW4odCAqIDIgLSAxKSArIDEpIC8gMixcbn07XG5cbi8qKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSAge1JlY29yZDxTdHJpbmcsIEVhc2VzRmFjdG9yeXxFYXNpbmdGdW5jdGlvbj59IGVhc2VzRnVuY3Rpb25zXG4gKiBAcGFyYW0gIHtPYmplY3R9IGVhc2VzTG9va3Vwc1xuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cbmNvbnN0IHBhcnNlRWFzZVN0cmluZyA9IChzdHJpbmcsIGVhc2VzRnVuY3Rpb25zLCBlYXNlc0xvb2t1cHMpID0+IHtcbiAgaWYgKGVhc2VzTG9va3Vwc1tzdHJpbmddKSByZXR1cm4gZWFzZXNMb29rdXBzW3N0cmluZ107XG4gIGlmIChzdHJpbmcuaW5kZXhPZignKCcpIDw9IC0xKSB7XG4gICAgY29uc3QgaGFzUGFyYW1zID0gZWFzZVR5cGVzW3N0cmluZ10gfHwgc3RyaW5nLmluY2x1ZGVzKCdCYWNrJykgfHwgc3RyaW5nLmluY2x1ZGVzKCdFbGFzdGljJyk7XG4gICAgY29uc3QgcGFyc2VkRm4gPSAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqLyhoYXNQYXJhbXMgPyAvKiogQHR5cGUge0Vhc2VzRmFjdG9yeX0gKi8oZWFzZXNGdW5jdGlvbnNbc3RyaW5nXSkoKSA6IGVhc2VzRnVuY3Rpb25zW3N0cmluZ10pO1xuICAgIHJldHVybiBwYXJzZWRGbiA/IGVhc2VzTG9va3Vwc1tzdHJpbmddID0gcGFyc2VkRm4gOiBub25lO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNwbGl0ID0gc3RyaW5nLnNsaWNlKDAsIC0xKS5zcGxpdCgnKCcpO1xuICAgIGNvbnN0IHBhcnNlZEZuID0gLyoqIEB0eXBlIHtFYXNlc0ZhY3Rvcnl9ICovKGVhc2VzRnVuY3Rpb25zW3NwbGl0WzBdXSk7XG4gICAgcmV0dXJuIHBhcnNlZEZuID8gZWFzZXNMb29rdXBzW3N0cmluZ10gPSBwYXJzZWRGbiguLi5zcGxpdFsxXS5zcGxpdCgnLCcpKSA6IG5vbmU7XG4gIH1cbn07XG5cbi8qKlxuICogQHR5cGVkZWYgIHtPYmplY3R9IEVhc2VzRnVuY3Rpb25zXG4gKiBAcHJvcGVydHkge3R5cGVvZiBsaW5lYXJ9IGxpbmVhclxuICogQHByb3BlcnR5IHt0eXBlb2YgaXJyZWd1bGFyfSBpcnJlZ3VsYXJcbiAqIEBwcm9wZXJ0eSB7dHlwZW9mIHN0ZXBzfSBzdGVwc1xuICogQHByb3BlcnR5IHt0eXBlb2YgY3ViaWNCZXppZXJ9IGN1YmljQmV6aWVyXG4gKiBAcHJvcGVydHkge1Bvd2VyRWFzaW5nfSBpblxuICogQHByb3BlcnR5IHtQb3dlckVhc2luZ30gb3V0XG4gKiBAcHJvcGVydHkge1Bvd2VyRWFzaW5nfSBpbk91dFxuICogQHByb3BlcnR5IHtQb3dlckVhc2luZ30gb3V0SW5cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluUXVhZFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0UXVhZFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRRdWFkXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJblF1YWRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluQ3ViaWNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEN1YmljXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dEN1YmljXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJbkN1YmljXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpblF1YXJ0XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRRdWFydFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRRdWFydFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5RdWFydFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5RdWludFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0UXVpbnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0UXVpbnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluUXVpbnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluU2luZVxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0U2luZVxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRTaW5lXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJblNpbmVcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluQ2lyY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0Q2lyY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRDaXJjXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJbkNpcmNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluRXhwb1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0RXhwb1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRFeHBvXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJbkV4cG9cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluQm91bmNlXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRCb3VuY2VcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0Qm91bmNlXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJbkJvdW5jZVxuICogQHByb3BlcnR5IHtCYWNrRWFzaW5nfSBpbkJhY2tcbiAqIEBwcm9wZXJ0eSB7QmFja0Vhc2luZ30gb3V0QmFja1xuICogQHByb3BlcnR5IHtCYWNrRWFzaW5nfSBpbk91dEJhY2tcbiAqIEBwcm9wZXJ0eSB7QmFja0Vhc2luZ30gb3V0SW5CYWNrXG4gKiBAcHJvcGVydHkge0VsYXN0aWNFYXNpbmd9IGluRWxhc3RpY1xuICogQHByb3BlcnR5IHtFbGFzdGljRWFzaW5nfSBvdXRFbGFzdGljXG4gKiBAcHJvcGVydHkge0VsYXN0aWNFYXNpbmd9IGluT3V0RWxhc3RpY1xuICogQHByb3BlcnR5IHtFbGFzdGljRWFzaW5nfSBvdXRJbkVsYXN0aWNcbiAqL1xuXG5jb25zdCBlYXNlcyA9ICgvKiNfX1BVUkVfXyovICgoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSB7IGxpbmVhciwgaXJyZWd1bGFyLCBzdGVwcywgY3ViaWNCZXppZXIgfTtcbiAgZm9yIChsZXQgdHlwZSBpbiBlYXNlVHlwZXMpIHtcbiAgICBmb3IgKGxldCBuYW1lIGluIGVhc2VJbkZ1bmN0aW9ucykge1xuICAgICAgY29uc3QgZWFzZUluID0gZWFzZUluRnVuY3Rpb25zW25hbWVdO1xuICAgICAgY29uc3QgZWFzZVR5cGUgPSBlYXNlVHlwZXNbdHlwZV07XG4gICAgICBsaXN0W3R5cGUgKyBuYW1lXSA9IC8qKiBAdHlwZSB7RWFzZXNGYWN0b3J5fEVhc2luZ0Z1bmN0aW9ufSAqLyhcbiAgICAgICAgbmFtZSA9PT0gZW1wdHlTdHJpbmcgfHwgbmFtZSA9PT0gJ0JhY2snIHx8IG5hbWUgPT09ICdFbGFzdGljJyA/XG4gICAgICAgIChhLCBiKSA9PiBlYXNlVHlwZSgvKiogQHR5cGUge0Vhc2VzRmFjdG9yeX0gKi8oZWFzZUluKShhLCBiKSkgOlxuICAgICAgICBlYXNlVHlwZSgvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqLyhlYXNlSW4pKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC8qKiBAdHlwZSB7RWFzZXNGdW5jdGlvbnN9ICovKGxpc3QpO1xufSkoKSk7XG5cbi8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgRWFzaW5nRnVuY3Rpb24+fSAqL1xuY29uc3QgSlNFYXNlc0xvb2t1cHMgPSB7IGxpbmVhcjogbm9uZSB9O1xuXG4vKipcbiAqIEBwYXJhbSAge0Vhc2luZ1BhcmFtfSBlYXNlXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuY29uc3QgcGFyc2VFYXNpbmdzID0gZWFzZSA9PiBpc0ZuYyhlYXNlKSA/IGVhc2UgOlxuICBpc1N0cihlYXNlKSA/IHBhcnNlRWFzZVN0cmluZygvKiogQHR5cGUge1N0cmluZ30gKi8oZWFzZSksIGVhc2VzLCBKU0Vhc2VzTG9va3VwcykgOlxuICBub25lO1xuXG5cblxuXG5jb25zdCBwcm9wZXJ0eU5hbWVzQ2FjaGUgPSB7fTtcblxuLyoqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICogQHBhcmFtICB7VGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSAge3R3ZWVuVHlwZXN9IHR3ZWVuVHlwZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCBzYW5pdGl6ZVByb3BlcnR5TmFtZSA9IChwcm9wZXJ0eU5hbWUsIHRhcmdldCwgdHdlZW5UeXBlKSA9PiB7XG4gIGlmICh0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuVFJBTlNGT1JNKSB7XG4gICAgY29uc3QgdCA9IHNob3J0VHJhbnNmb3Jtcy5nZXQocHJvcGVydHlOYW1lKTtcbiAgICByZXR1cm4gdCA/IHQgOiBwcm9wZXJ0eU5hbWU7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHdlZW5UeXBlID09PSB0d2VlblR5cGVzLkNTUyB8fFxuICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2VzIHdoZXJlIHByb3BlcnRpZXMgbGlrZSBcInN0cm9rZURhc2hvZmZzZXRcIiBuZWVkcyB0byBiZSBzZXQgYXMgXCJzdHJva2UtZGFzaG9mZnNldFwiXG4gICAgLy8gYnV0IHByb3BlcnRpZXMgbGlrZSBcImJhc2VGcmVxdWVuY3lcIiBzaG91bGQgc3RheSBpbiBsb3dlckNhbWVsQ2FzZVxuICAgICh0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuQVRUUklCVVRFICYmIChpc1N2Zyh0YXJnZXQpICYmIHByb3BlcnR5TmFtZSBpbiAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KS5zdHlsZSkpXG4gICkge1xuICAgIGNvbnN0IGNhY2hlZFByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZXNDYWNoZVtwcm9wZXJ0eU5hbWVdO1xuICAgIGlmIChjYWNoZWRQcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHJldHVybiBjYWNoZWRQcm9wZXJ0eU5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBwcm9wZXJ0eU5hbWUgPyB0b0xvd2VyQ2FzZShwcm9wZXJ0eU5hbWUpIDogcHJvcGVydHlOYW1lO1xuICAgICAgcHJvcGVydHlOYW1lc0NhY2hlW3Byb3BlcnR5TmFtZV0gPSBsb3dlckNhc2VOYW1lO1xuICAgICAgcmV0dXJuIGxvd2VyQ2FzZU5hbWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcm9wZXJ0eU5hbWU7XG4gIH1cbn07XG5cblxuXG5cbmNvbnN0IGFuZ2xlVW5pdHNNYXAgPSB7ICdkZWcnOiAxLCAncmFkJzogMTgwIC8gUEksICd0dXJuJzogMzYwIH07XG5jb25zdCBjb252ZXJ0ZWRWYWx1ZXNDYWNoZSA9IHt9O1xuXG4vKipcbiAqIEBwYXJhbSAge0RPTVRhcmdldH0gZWxcbiAqIEBwYXJhbSAge1R3ZWVuRGVjb21wb3NlZFZhbHVlfSBkZWNvbXBvc2VkVmFsdWVcbiAqIEBwYXJhbSAge1N0cmluZ30gdW5pdFxuICogQHBhcmFtICB7Qm9vbGVhbn0gW2ZvcmNlXVxuICogQHJldHVybiB7VHdlZW5EZWNvbXBvc2VkVmFsdWV9XG4gKi9cbmNvbnN0IGNvbnZlcnRWYWx1ZVVuaXQgPSAoZWwsIGRlY29tcG9zZWRWYWx1ZSwgdW5pdCwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBjdXJyZW50VW5pdCA9IGRlY29tcG9zZWRWYWx1ZS51O1xuICBjb25zdCBjdXJyZW50TnVtYmVyID0gZGVjb21wb3NlZFZhbHVlLm47XG4gIGlmIChkZWNvbXBvc2VkVmFsdWUudCA9PT0gdmFsdWVUeXBlcy5VTklUICYmIGN1cnJlbnRVbml0ID09PSB1bml0KSB7IC8vIFRPRE86IENoZWNrIGlmIGNoZWNraW5nIGFnYWluc3QgdGhlIHNhbWUgdW5pdCBzdHJpbmcgaXMgbmVjZXNzYXJ5XG4gICAgcmV0dXJuIGRlY29tcG9zZWRWYWx1ZTtcbiAgfVxuICBjb25zdCBjYWNoZWRLZXkgPSBjdXJyZW50TnVtYmVyICsgY3VycmVudFVuaXQgKyB1bml0O1xuICBjb25zdCBjYWNoZWQgPSBjb252ZXJ0ZWRWYWx1ZXNDYWNoZVtjYWNoZWRLZXldO1xuICBpZiAoIWlzVW5kKGNhY2hlZCkgJiYgIWZvcmNlKSB7XG4gICAgZGVjb21wb3NlZFZhbHVlLm4gPSBjYWNoZWQ7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNvbnZlcnRlZFZhbHVlO1xuICAgIGlmIChjdXJyZW50VW5pdCBpbiBhbmdsZVVuaXRzTWFwKSB7XG4gICAgICBjb252ZXJ0ZWRWYWx1ZSA9IGN1cnJlbnROdW1iZXIgKiBhbmdsZVVuaXRzTWFwW2N1cnJlbnRVbml0XSAvIGFuZ2xlVW5pdHNNYXBbdW5pdF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJhc2VsaW5lID0gMTAwO1xuICAgICAgY29uc3QgdGVtcEVsID0gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKGVsLmNsb25lTm9kZSgpKTtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgcGFyZW50RWwgPSAocGFyZW50Tm9kZSAmJiAocGFyZW50Tm9kZSAhPT0gZG9jKSkgPyBwYXJlbnROb2RlIDogZG9jLmJvZHk7XG4gICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICAgICAgY29uc3QgZWxTdHlsZSA9IHRlbXBFbC5zdHlsZTtcbiAgICAgIGVsU3R5bGUud2lkdGggPSBiYXNlbGluZSArIGN1cnJlbnRVbml0O1xuICAgICAgY29uc3QgY3VycmVudFVuaXRXaWR0aCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKHRlbXBFbCkub2Zmc2V0V2lkdGggfHwgYmFzZWxpbmU7XG4gICAgICBlbFN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xuICAgICAgY29uc3QgbmV3VW5pdFdpZHRoID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8odGVtcEVsKS5vZmZzZXRXaWR0aCB8fCBiYXNlbGluZTtcbiAgICAgIGNvbnN0IGZhY3RvciA9IGN1cnJlbnRVbml0V2lkdGggLyBuZXdVbml0V2lkdGg7XG4gICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRWwpO1xuICAgICAgY29udmVydGVkVmFsdWUgPSBmYWN0b3IgKiBjdXJyZW50TnVtYmVyO1xuICAgIH1cbiAgICBkZWNvbXBvc2VkVmFsdWUubiA9IGNvbnZlcnRlZFZhbHVlO1xuICAgIGNvbnZlcnRlZFZhbHVlc0NhY2hlW2NhY2hlZEtleV0gPSBjb252ZXJ0ZWRWYWx1ZTtcbiAgfVxuICBkZWNvbXBvc2VkVmFsdWUudCA9PT0gdmFsdWVUeXBlcy5VTklUO1xuICBkZWNvbXBvc2VkVmFsdWUudSA9IHVuaXQ7XG4gIHJldHVybiBkZWNvbXBvc2VkVmFsdWU7XG59O1xuXG5cblxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7UmVuZGVyYWJsZX0gVFxuICogQHBhcmFtIHtUfSByZW5kZXJhYmxlXG4gKiBAcmV0dXJuIHtUfVxuICovXG5jb25zdCBjbGVhbklubGluZVN0eWxlcyA9IHJlbmRlcmFibGUgPT4ge1xuICAvLyBBbGxvdyBjbGVhbklubGluZVN0eWxlcygpIHRvIGJlIGNhbGxlZCBvbiB0aW1lbGluZXNcbiAgaWYgKHJlbmRlcmFibGUuX2hhc0NoaWxkcmVuKSB7XG4gICAgZm9yRWFjaENoaWxkcmVuKHJlbmRlcmFibGUsIGNsZWFuSW5saW5lU3R5bGVzLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyhyZW5kZXJhYmxlKTtcbiAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICBmb3JFYWNoQ2hpbGRyZW4oYW5pbWF0aW9uLCAoLyoqIEB0eXBlIHtUd2Vlbn0gKi90d2VlbikgPT4ge1xuICAgICAgY29uc3QgdHdlZW5Qcm9wZXJ0eSA9IHR3ZWVuLnByb3BlcnR5O1xuICAgICAgY29uc3QgdHdlZW5UYXJnZXQgPSB0d2Vlbi50YXJnZXQ7XG4gICAgICBpZiAodHdlZW5UYXJnZXRbaXNEb21TeW1ib2xdKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFN0eWxlID0gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHR3ZWVuVGFyZ2V0KS5zdHlsZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxJbmxpbmVkVmFsdWUgPSBhbmltYXRpb24uX2lubGluZVN0eWxlc1t0d2VlblByb3BlcnR5XTtcbiAgICAgICAgaWYgKHR3ZWVuLl90d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuVFJBTlNGT1JNKSB7XG4gICAgICAgICAgY29uc3QgY2FjaGVkVHJhbnNmb3JtcyA9IHR3ZWVuVGFyZ2V0W3RyYW5zZm9ybXNTeW1ib2xdO1xuICAgICAgICAgIGlmIChpc1VuZChvcmlnaW5hbElubGluZWRWYWx1ZSkgfHwgb3JpZ2luYWxJbmxpbmVkVmFsdWUgPT09IGVtcHR5U3RyaW5nKSB7XG4gICAgICAgICAgICBkZWxldGUgY2FjaGVkVHJhbnNmb3Jtc1t0d2VlblByb3BlcnR5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkVHJhbnNmb3Jtc1t0d2VlblByb3BlcnR5XSA9IG9yaWdpbmFsSW5saW5lZFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHdlZW4uX3JlbmRlclRyYW5zZm9ybXMpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoY2FjaGVkVHJhbnNmb3JtcykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRhcmdldFN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBzdHIgPSBlbXB0eVN0cmluZztcbiAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGNhY2hlZFRyYW5zZm9ybXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gdHJhbnNmb3Jtc0ZyYWdtZW50U3RyaW5nc1trZXldICsgY2FjaGVkVHJhbnNmb3Jtc1trZXldICsgJykgJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YXJnZXRTdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1VuZChvcmlnaW5hbElubGluZWRWYWx1ZSkgfHwgb3JpZ2luYWxJbmxpbmVkVmFsdWUgPT09IGVtcHR5U3RyaW5nKSB7XG4gICAgICAgICAgICB0YXJnZXRTdHlsZS5yZW1vdmVQcm9wZXJ0eSh0d2VlblByb3BlcnR5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0U3R5bGVbdHdlZW5Qcm9wZXJ0eV0gPSBvcmlnaW5hbElubGluZWRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFuaW1hdGlvbi5fdGFpbCA9PT0gdHdlZW4pIHtcbiAgICAgICAgICBhbmltYXRpb24udGFyZ2V0cy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgaWYgKHQuZ2V0QXR0cmlidXRlICYmIHQuZ2V0QXR0cmlidXRlKCdzdHlsZScpID09PSBlbXB0eVN0cmluZykge1xuICAgICAgICAgICAgICB0LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVuZGVyYWJsZTtcbn07XG5cbi8vIERlZmluZXMgZGVjb21wb3NlZCB2YWx1ZXMgdGFyZ2V0IG9iamVjdHMgb25seSBvbmNlIGFuZCBtdXRhdGUgdGhlaXIgcHJvcGVydGllcyBsYXRlciB0byBhdm9pZCBHQ1xuLy8gVE9ETzogTWF5YmUgbW92ZSB0aGUgb2JqZWN0cyBjcmVhdGlvbiB0byB2YWx1ZXMuanMgYW5kIHVzZSB0aGUgZGVjb21wb3NlIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgYmFzZSBvYmplY3RcbmNvbnN0IGZyb21UYXJnZXRPYmplY3QgPSBjcmVhdGVEZWNvbXBvc2VkVmFsdWVUYXJnZXRPYmplY3QoKTtcbmNvbnN0IHRvVGFyZ2V0T2JqZWN0ID0gY3JlYXRlRGVjb21wb3NlZFZhbHVlVGFyZ2V0T2JqZWN0KCk7XG5jb25zdCB0b0Z1bmN0aW9uU3RvcmUgPSB7IGZ1bmM6IG51bGwgfTtcbmNvbnN0IGtleWZyYW1lc1RhcmdldEFycmF5ID0gW251bGxdO1xuY29uc3QgZmFzdFNldFZhbHVlc0FycmF5ID0gW251bGwsIG51bGxdO1xuLyoqIEB0eXBlIHtUd2VlbktleVZhbHVlfSAqL1xuY29uc3Qga2V5T2JqZWN0VGFyZ2V0ID0geyB0bzogbnVsbCB9O1xuXG5sZXQgdHdlZW5JZCA9IDA7XG5sZXQga2V5ZnJhbWVzO1xuLyoqIEB0eXBlIHtUd2VlblBhcmFtc09wdGlvbnMgJiBUd2VlblZhbHVlc30gKi9cbmxldCBrZXk7XG5cbi8qKlxuICogQHBhcmFtIHtEdXJhdGlvbktleWZyYW1lcyB8IFBlcmNlbnRhZ2VLZXlmcmFtZXN9IGtleWZyYW1lc1xuICogQHBhcmFtIHtBbmltYXRpb25QYXJhbXN9IHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge0FuaW1hdGlvblBhcmFtc31cbiAqL1xuY29uc3QgZ2VuZXJhdGVLZXlmcmFtZXMgPSAoa2V5ZnJhbWVzLCBwYXJhbWV0ZXJzKSA9PiB7XG4gIC8qKiBAdHlwZSB7QW5pbWF0aW9uUGFyYW1zfSAqL1xuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG4gIGlmIChpc0FycihrZXlmcmFtZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lcyA9IFtdLmNvbmNhdCguLi4vKiogQHR5cGUge0R1cmF0aW9uS2V5ZnJhbWVzfSAqLyhrZXlmcmFtZXMpLm1hcChrZXkgPT4gT2JqZWN0LmtleXMoa2V5KSkpLmZpbHRlcihpc0tleSk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgY29uc3QgcHJvcEFycmF5ID0gLyoqIEB0eXBlIHtEdXJhdGlvbktleWZyYW1lc30gKi8oa2V5ZnJhbWVzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgLyoqIEB0eXBlIHtUd2VlbktleVZhbHVlfSAqL1xuICAgICAgICBjb25zdCBuZXdLZXkgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgcCBpbiBrZXkpIHtcbiAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IC8qKiBAdHlwZSB7VHdlZW5Qcm9wVmFsdWV9ICovKGtleVtwXSk7XG4gICAgICAgICAgaWYgKGlzS2V5KHApKSB7XG4gICAgICAgICAgICBpZiAocCA9PT0gcHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgbmV3S2V5LnRvID0ga2V5VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0tleVtwXSA9IGtleVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3S2V5O1xuICAgICAgfSk7XG4gICAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IC8qKiBAdHlwZSB7QXJyYXlTeW50YXhWYWx1ZX0gKi8ocHJvcEFycmF5KTtcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHNldFZhbHVlKHBhcmFtZXRlcnMuZHVyYXRpb24sIGdsb2JhbHMuZGVmYXVsdHMuZHVyYXRpb24pKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoa2V5ZnJhbWVzKVxuICAgIC5tYXAoa2V5ID0+IHsgcmV0dXJuIHtvOiBwYXJzZUZsb2F0KGtleSkgLyAxMDAsIHA6IGtleWZyYW1lc1trZXldfSB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLm8gLSBiLm8pO1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0ga2V5Lm87XG4gICAgICBjb25zdCBwcm9wID0ga2V5LnA7XG4gICAgICBmb3IgKGxldCBuYW1lIGluIHByb3ApIHtcbiAgICAgICAgaWYgKGlzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgbGV0IHByb3BBcnJheSA9IC8qKiBAdHlwZSB7QXJyYXl9ICovKHByb3BlcnRpZXNbbmFtZV0pO1xuICAgICAgICAgIGlmICghcHJvcEFycmF5KSBwcm9wQXJyYXkgPSBwcm9wZXJ0aWVzW25hbWVdID0gW107XG4gICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBvZmZzZXQgKiB0b3RhbER1cmF0aW9uO1xuICAgICAgICAgIGxldCBsZW5ndGggPSBwcm9wQXJyYXkubGVuZ3RoO1xuICAgICAgICAgIGxldCBwcmV2S2V5ID0gcHJvcEFycmF5W2xlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IGtleU9iaiA9IHsgdG86IHByb3BbbmFtZV0gfTtcbiAgICAgICAgICBsZXQgZHVyUHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGR1clByb2dyZXNzICs9IHByb3BBcnJheVtpXS5kdXJhdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAga2V5T2JqLmZyb20gPSBwcmV2S2V5LnRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocHJvcC5lYXNlKSB7XG4gICAgICAgICAgICBrZXlPYmouZWFzZSA9IHByb3AuZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAga2V5T2JqLmR1cmF0aW9uID0gZHVyYXRpb24gLSAobGVuZ3RoID8gZHVyUHJvZ3Jlc3MgOiAwKTtcbiAgICAgICAgICBwcm9wQXJyYXkucHVzaChrZXlPYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBjb25zdCBwcm9wQXJyYXkgPSAvKiogQHR5cGUge0FycmF5fSAqLyhwcm9wZXJ0aWVzW25hbWVdKTtcbiAgICAgIGxldCBwcmV2RWFzZTtcbiAgICAgIC8vIGxldCBkdXJQcm9ncmVzcyA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gcHJvcEFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9wID0gcHJvcEFycmF5W2ldO1xuICAgICAgICAvLyBFbXVsYXRlIFdBUFBJIGVhc2luZyBwYXJhbWV0ZXIgcG9zaXRpb25cbiAgICAgICAgY29uc3QgY3VycmVudEVhc2UgPSBwcm9wLmVhc2U7XG4gICAgICAgIHByb3AuZWFzZSA9IHByZXZFYXNlID8gcHJldkVhc2UgOiB1bmRlZmluZWQ7XG4gICAgICAgIHByZXZFYXNlID0gY3VycmVudEVhc2U7XG4gICAgICAgIC8vIGR1clByb2dyZXNzICs9IHByb3AuZHVyYXRpb247XG4gICAgICAgIC8vIGlmIChpID09PSBsIC0gMSAmJiBkdXJQcm9ncmVzcyAhPT0gdG90YWxEdXJhdGlvbikge1xuICAgICAgICAvLyAgIHByb3BBcnJheS5wdXNoKHsgZnJvbTogcHJvcC50bywgZWFzZTogcHJvcC5lYXNlLCBkdXJhdGlvbjogdG90YWxEdXJhdGlvbiAtIGR1clByb2dyZXNzIH0pXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICAgIGlmICghcHJvcEFycmF5WzBdLmR1cmF0aW9uKSB7XG4gICAgICAgIHByb3BBcnJheS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59O1xuXG5jbGFzcyBKU0FuaW1hdGlvbiBleHRlbmRzIFRpbWVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gICAqIEBwYXJhbSB7QW5pbWF0aW9uUGFyYW1zfSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSB7VGltZWxpbmV9IFtwYXJlbnRdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcGFyZW50UG9zaXRpb25dXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Zhc3RTZXQ9ZmFsc2VdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXg9MF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW5ndGg9MF1cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhcmdldHMsXG4gICAgcGFyYW1ldGVycyxcbiAgICBwYXJlbnQsXG4gICAgcGFyZW50UG9zaXRpb24sXG4gICAgZmFzdFNldCA9IGZhbHNlLFxuICAgIGluZGV4ID0gMCxcbiAgICBsZW5ndGggPSAwXG4gICkge1xuXG4gICAgc3VwZXIoLyoqIEB0eXBlIHtUaW1lclBhcmFtcyZBbmltYXRpb25QYXJhbXN9ICovKHBhcmFtZXRlcnMpLCBwYXJlbnQsIHBhcmVudFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IHBhcnNlZFRhcmdldHMgPSByZWdpc3RlclRhcmdldHModGFyZ2V0cyk7XG4gICAgY29uc3QgdGFyZ2V0c0xlbmd0aCA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgLy8gSWYgdGhlIHBhcmFtZXRlcnMgb2JqZWN0IGNvbnRhaW5zIGEgXCJrZXlmcmFtZXNcIiBwcm9wZXJ0eSwgY29udmVydCBhbGwgdGhlIGtleWZyYW1lcyB2YWx1ZXMgdG8gcmVndWxhciBwcm9wZXJ0aWVzXG5cbiAgICBjb25zdCBrZlBhcmFtcyA9IC8qKiBAdHlwZSB7QW5pbWF0aW9uUGFyYW1zfSAqLyhwYXJhbWV0ZXJzKS5rZXlmcmFtZXM7XG4gICAgY29uc3QgcGFyYW1zID0gLyoqIEB0eXBlIHtBbmltYXRpb25QYXJhbXN9ICovKGtmUGFyYW1zID8gbWVyZ2VPYmplY3RzKGdlbmVyYXRlS2V5ZnJhbWVzKC8qKiBAdHlwZSB7RHVyYXRpb25LZXlmcmFtZXN9ICovKGtmUGFyYW1zKSwgcGFyYW1ldGVycyksIHBhcmFtZXRlcnMpIDogcGFyYW1ldGVycyk7XG5cbiAgICBjb25zdCB7XG4gICAgICBkZWxheSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZSxcbiAgICAgIHBsYXliYWNrRWFzZSxcbiAgICAgIG1vZGlmaWVyLFxuICAgICAgY29tcG9zaXRpb24sXG4gICAgICBvblJlbmRlcixcbiAgICB9ID0gcGFyYW1zO1xuXG4gICAgY29uc3QgYW5pbURlZmF1bHRzID0gcGFyZW50ID8gcGFyZW50LmRlZmF1bHRzIDogZ2xvYmFscy5kZWZhdWx0cztcbiAgICBjb25zdCBhbmltYVBsYXliYWNrRWFzZSA9IHNldFZhbHVlKHBsYXliYWNrRWFzZSwgYW5pbURlZmF1bHRzLnBsYXliYWNrRWFzZSk7XG4gICAgY29uc3QgYW5pbUVhc2UgPSBhbmltYVBsYXliYWNrRWFzZSA/IHBhcnNlRWFzaW5ncyhhbmltYVBsYXliYWNrRWFzZSkgOiBudWxsO1xuICAgIGNvbnN0IGhhc1NwcmluZyA9ICFpc1VuZChlYXNlKSAmJiAhaXNVbmQoLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UpO1xuICAgIGNvbnN0IHRFYXNpbmcgPSBoYXNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSA6IHNldFZhbHVlKGVhc2UsIGFuaW1FYXNlID8gJ2xpbmVhcicgOiBhbmltRGVmYXVsdHMuZWFzZSk7XG4gICAgY29uc3QgdER1cmF0aW9uID0gaGFzU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmR1cmF0aW9uIDogc2V0VmFsdWUoZHVyYXRpb24sIGFuaW1EZWZhdWx0cy5kdXJhdGlvbik7XG4gICAgY29uc3QgdERlbGF5ID0gc2V0VmFsdWUoZGVsYXksIGFuaW1EZWZhdWx0cy5kZWxheSk7XG4gICAgY29uc3QgdE1vZGlmaWVyID0gbW9kaWZpZXIgfHwgYW5pbURlZmF1bHRzLm1vZGlmaWVyO1xuICAgIC8vIElmIG5vIGNvbXBvc2l0aW9uIGlzIGRlZmluZWQgYW5kIHRoZSB0YXJnZXRzIGxlbmd0aCBpcyBoaWdoICg+PSAxMDAwKSBzZXQgdGhlIGNvbXBvc2l0aW9uIHRvICdub25lJyAoMCkgZm9yIGZhc3RlciB0d2VlbiBjcmVhdGlvblxuICAgIGNvbnN0IHRDb21wb3NpdGlvbiA9IGlzVW5kKGNvbXBvc2l0aW9uKSAmJiB0YXJnZXRzTGVuZ3RoID49IEsgPyBjb21wb3NpdGlvblR5cGVzLm5vbmUgOiAhaXNVbmQoY29tcG9zaXRpb24pID8gY29tcG9zaXRpb24gOiBhbmltRGVmYXVsdHMuY29tcG9zaXRpb247XG4gICAgLy8gVE9ETzogRG8gbm90IGNyZWF0ZSBhbiBlbXB0eSBvYmplY3QgdW50aWwgd2Uga25vdyB0aGUgYW5pbWF0aW9uIHdpbGwgZ2VuZXJhdGUgaW5saW5lIHN0eWxlc1xuICAgIGNvbnN0IGFuaW1JbmxpbmVTdHlsZXMgPSB7fTtcbiAgICAvLyBjb25zdCBhYnNvbHV0ZU9mZnNldFRpbWUgPSB0aGlzLl9vZmZzZXQ7XG4gICAgY29uc3QgYWJzb2x1dGVPZmZzZXRUaW1lID0gdGhpcy5fb2Zmc2V0ICsgKHBhcmVudCA/IHBhcmVudC5fb2Zmc2V0IDogMCk7XG5cbiAgICBsZXQgaXRlcmF0aW9uRHVyYXRpb24gPSBOYU47XG4gICAgbGV0IGl0ZXJhdGlvbkRlbGF5ID0gTmFOO1xuICAgIGxldCBhbmltYXRpb25BbmltYXRpb25MZW5ndGggPSAwO1xuICAgIGxldCBzaG91bGRUcmlnZ2VyUmVuZGVyID0gMDtcblxuICAgIGZvciAobGV0IHRhcmdldEluZGV4ID0gMDsgdGFyZ2V0SW5kZXggPCB0YXJnZXRzTGVuZ3RoOyB0YXJnZXRJbmRleCsrKSB7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IHBhcnNlZFRhcmdldHNbdGFyZ2V0SW5kZXhdO1xuICAgICAgY29uc3QgdGkgPSBpbmRleCB8fCB0YXJnZXRJbmRleDtcbiAgICAgIGNvbnN0IHRsID0gbGVuZ3RoIHx8IHRhcmdldHNMZW5ndGg7XG5cbiAgICAgIGxldCBsYXN0VHJhbnNmb3JtR3JvdXBJbmRleCA9IE5hTjtcbiAgICAgIGxldCBsYXN0VHJhbnNmb3JtR3JvdXBMZW5ndGggPSBOYU47XG5cbiAgICAgIGZvciAobGV0IHAgaW4gcGFyYW1zKSB7XG5cbiAgICAgICAgaWYgKGlzS2V5KHApKSB7XG5cbiAgICAgICAgICBjb25zdCB0d2VlblR5cGUgPSBnZXRUd2VlblR5cGUodGFyZ2V0LCBwKTtcblxuICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gc2FuaXRpemVQcm9wZXJ0eU5hbWUocCwgdGFyZ2V0LCB0d2VlblR5cGUpO1xuXG4gICAgICAgICAgbGV0IHByb3BWYWx1ZSA9IHBhcmFtc1twXTtcblxuICAgICAgICAgIGNvbnN0IGlzUHJvcFZhbHVlQXJyYXkgPSBpc0Fycihwcm9wVmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGZhc3RTZXQgJiYgIWlzUHJvcFZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgIGZhc3RTZXRWYWx1ZXNBcnJheVswXSA9IHByb3BWYWx1ZTtcbiAgICAgICAgICAgIGZhc3RTZXRWYWx1ZXNBcnJheVsxXSA9IHByb3BWYWx1ZTtcbiAgICAgICAgICAgIHByb3BWYWx1ZSA9IGZhc3RTZXRWYWx1ZXNBcnJheTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUT0RPOiBBbGxvdyBuZXN0ZWQga2V5ZnJhbWVzIGluc2lkZSBPYmplY3RWYWx1ZSB2YWx1ZSAocHJvcDogeyB0bzogWy41LCAxLCAuNzUsIDIsIDNdIH0pXG4gICAgICAgICAgLy8gTm9ybWFsaXplIHByb3BlcnR5IHZhbHVlcyB0byB2YWxpZCBrZXlmcmFtZSBzeW50YXg6XG4gICAgICAgICAgLy8gW3gsIHldIHRvIFt7dG86IFt4LCB5XX1dIG9yIHt0bzogeH0gdG8gW3t0bzogeH1dIG9yIGtlZXAga2V5cyBzeW50YXggW3t9LCB7fSwge30uLi5dXG4gICAgICAgICAgLy8gY29uc3Qga2V5ZnJhbWVzID0gaXNBcnIocHJvcFZhbHVlKSA/IHByb3BWYWx1ZS5sZW5ndGggPT09IDIgJiYgIWlzT2JqKHByb3BWYWx1ZVswXSkgPyBbeyB0bzogcHJvcFZhbHVlIH1dIDogcHJvcFZhbHVlIDogW3Byb3BWYWx1ZV07XG4gICAgICAgICAgaWYgKGlzUHJvcFZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gLyoqIEB0eXBlIHtBcnJheX0gKi8ocHJvcFZhbHVlKS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBpc05vdE9iamVjdFZhbHVlID0gIWlzT2JqKHByb3BWYWx1ZVswXSk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IFt4LCB5XSB0byBbe3RvOiBbeCwgeV19XVxuICAgICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID09PSAyICYmIGlzTm90T2JqZWN0VmFsdWUpIHtcbiAgICAgICAgICAgICAga2V5T2JqZWN0VGFyZ2V0LnRvID0gLyoqIEB0eXBlIHtUd2VlblBhcmFtVmFsdWV9ICovKC8qKiBAdHlwZSB7dW5rbm93bn0gKi8ocHJvcFZhbHVlKSk7XG4gICAgICAgICAgICAgIGtleWZyYW1lc1RhcmdldEFycmF5WzBdID0ga2V5T2JqZWN0VGFyZ2V0O1xuICAgICAgICAgICAgICBrZXlmcmFtZXMgPSBrZXlmcmFtZXNUYXJnZXRBcnJheTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgW3gsIHksIHpdIHRvIFtbeCwgeV0sIHpdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5TGVuZ3RoID4gMiAmJiBpc05vdE9iamVjdFZhbHVlKSB7XG4gICAgICAgICAgICAgIGtleWZyYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAvKiogQHR5cGUge0FycmF5LjxOdW1iZXI+fSAqLyhwcm9wVmFsdWUpLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICAgICAgICAgIGZhc3RTZXRWYWx1ZXNBcnJheVswXSA9IHY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBmYXN0U2V0VmFsdWVzQXJyYXlbMV0gPSB2O1xuICAgICAgICAgICAgICAgICAga2V5ZnJhbWVzLnB1c2goZmFzdFNldFZhbHVlc0FycmF5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAga2V5ZnJhbWVzLnB1c2godik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGtleWZyYW1lcyA9IC8qKiBAdHlwZSB7QXJyYXkuPFR3ZWVuS2V5VmFsdWU+fSAqLyhwcm9wVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXlmcmFtZXNUYXJnZXRBcnJheVswXSA9IHByb3BWYWx1ZTtcbiAgICAgICAgICAgIGtleWZyYW1lcyA9IGtleWZyYW1lc1RhcmdldEFycmF5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBzaWJsaW5ncyA9IG51bGw7XG4gICAgICAgICAgbGV0IHByZXZUd2VlbiA9IG51bGw7XG4gICAgICAgICAgbGV0IGZpcnN0VHdlZW5DaGFuZ2VTdGFydFRpbWUgPSBOYU47XG4gICAgICAgICAgbGV0IGxhc3RUd2VlbkNoYW5nZUVuZFRpbWUgPSAwO1xuICAgICAgICAgIGxldCB0d2VlbkluZGV4ID0gMDtcblxuICAgICAgICAgIGZvciAobGV0IGwgPSBrZXlmcmFtZXMubGVuZ3RoOyB0d2VlbkluZGV4IDwgbDsgdHdlZW5JbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGtleWZyYW1lID0ga2V5ZnJhbWVzW3R3ZWVuSW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAoaXNPYmooa2V5ZnJhbWUpKSB7XG4gICAgICAgICAgICAgIGtleSA9IGtleWZyYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAga2V5T2JqZWN0VGFyZ2V0LnRvID0gLyoqIEB0eXBlIHtUd2VlblBhcmFtVmFsdWV9ICovKGtleWZyYW1lKTtcbiAgICAgICAgICAgICAga2V5ID0ga2V5T2JqZWN0VGFyZ2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b0Z1bmN0aW9uU3RvcmUuZnVuYyA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkVG9WYWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUoa2V5LnRvLCB0YXJnZXQsIHRpLCB0bCwgdG9GdW5jdGlvblN0b3JlKTtcblxuICAgICAgICAgICAgbGV0IHR3ZWVuVG9WYWx1ZTtcbiAgICAgICAgICAgIC8vIEFsbG93cyBmdW5jdGlvbiBiYXNlZCB2YWx1ZXMgdG8gcmV0dXJuIGFuIG9iamVjdCBzeW50YXggdmFsdWUgKHt0bzogdn0pXG4gICAgICAgICAgICBpZiAoaXNPYmooY29tcHV0ZWRUb1ZhbHVlKSAmJiAhaXNVbmQoY29tcHV0ZWRUb1ZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICBrZXkgPSBjb21wdXRlZFRvVmFsdWU7XG4gICAgICAgICAgICAgIHR3ZWVuVG9WYWx1ZSA9IGNvbXB1dGVkVG9WYWx1ZS50bztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR3ZWVuVG9WYWx1ZSA9IGNvbXB1dGVkVG9WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuRnJvbVZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShrZXkuZnJvbSwgdGFyZ2V0LCB0aSwgdGwpO1xuICAgICAgICAgICAgY29uc3Qga2V5RWFzaW5nID0ga2V5LmVhc2U7XG4gICAgICAgICAgICBjb25zdCBoYXNTcHJpbmcgPSAhaXNVbmQoa2V5RWFzaW5nKSAmJiAhaXNVbmQoLyoqIEB0eXBlIHtTcHJpbmd9ICovKGtleUVhc2luZykuZWFzZSk7XG4gICAgICAgICAgICAvLyBFYXNpbmcgYXJlIHRyZWF0ZWQgZGlmZmVyZW50bHkgYW5kIGRvbid0IGFjY2VwdCBmdW5jdGlvbiBiYXNlZCB2YWx1ZSB0byBwcmV2ZW50IGhhdmluZyB0byBwYXNzIGEgZnVuY3Rpb24gd3JhcHBlciB0aGF0IHJldHVybnMgYW4gb3RoZXIgZnVuY3Rpb24gYWxsIHRoZSB0aW1lXG4gICAgICAgICAgICBjb25zdCB0d2VlbkVhc2luZyA9IGhhc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhrZXlFYXNpbmcpLmVhc2UgOiBrZXlFYXNpbmcgfHwgdEVhc2luZztcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGluZGl2aWR1YWwga2V5ZnJhbWUgZHVyYXRpb24gYnkgZGl2aWRpbmcgdGhlIHRsIG9mIGtleWZyYW1lc1xuICAgICAgICAgICAgY29uc3QgdHdlZW5EdXJhdGlvbiA9IGhhc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhrZXlFYXNpbmcpLmR1cmF0aW9uIDogZ2V0RnVuY3Rpb25WYWx1ZShzZXRWYWx1ZShrZXkuZHVyYXRpb24sIChsID4gMSA/IGdldEZ1bmN0aW9uVmFsdWUodER1cmF0aW9uLCB0YXJnZXQsIHRpLCB0bCkgLyBsIDogdER1cmF0aW9uKSksIHRhcmdldCwgdGksIHRsKTtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuRGVsYXkgPSBnZXRGdW5jdGlvblZhbHVlKHNldFZhbHVlKGtleS5kZWxheSwgKCF0d2VlbkluZGV4ID8gdERlbGF5IDogMCkpLCB0YXJnZXQsIHRpLCB0bCk7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZENvbXBvc2l0aW9uID0gZ2V0RnVuY3Rpb25WYWx1ZShzZXRWYWx1ZShrZXkuY29tcG9zaXRpb24sIHRDb21wb3NpdGlvbiksIHRhcmdldCwgdGksIHRsKTtcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuQ29tcG9zaXRpb24gPSBpc051bShjb21wdXRlZENvbXBvc2l0aW9uKSA/IGNvbXB1dGVkQ29tcG9zaXRpb24gOiBjb21wb3NpdGlvblR5cGVzW2NvbXB1dGVkQ29tcG9zaXRpb25dO1xuICAgICAgICAgICAgLy8gTW9kaWZpZXJzIGFyZSB0cmVhdGVkIGRpZmZlcmVudGx5IGFuZCBkb24ndCBhY2NlcHQgZnVuY3Rpb24gYmFzZWQgdmFsdWUgdG8gcHJldmVudCBoYXZpbmcgdG8gcGFzcyBhIGZ1bmN0aW9uIHdyYXBwZXJcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuTW9kaWZpZXIgPSBrZXkubW9kaWZpZXIgfHwgdE1vZGlmaWVyO1xuICAgICAgICAgICAgY29uc3QgaGFzRnJvbXZhbHVlID0gIWlzVW5kKHR3ZWVuRnJvbVZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc1RvVmFsdWUgPSAhaXNVbmQodHdlZW5Ub1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGlzRnJvbVRvQXJyYXkgPSBpc0Fycih0d2VlblRvVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgaXNGcm9tVG9WYWx1ZSA9IGlzRnJvbVRvQXJyYXkgfHwgKGhhc0Zyb212YWx1ZSAmJiBoYXNUb1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuU3RhcnRUaW1lID0gcHJldlR3ZWVuID8gbGFzdFR3ZWVuQ2hhbmdlRW5kVGltZSArIHR3ZWVuRGVsYXkgOiB0d2VlbkRlbGF5O1xuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVTdGFydFRpbWUgPSBhYnNvbHV0ZU9mZnNldFRpbWUgKyB0d2VlblN0YXJ0VGltZTtcblxuICAgICAgICAgICAgLy8gRm9yY2UgYSBvblJlbmRlciBjYWxsYmFjayBpZiB0aGUgYW5pbWF0aW9uIGNvbnRhaW5zIGF0IGxlYXN0IG9uZSBmcm9tIHZhbHVlIGFuZCBhdXRvcGxheSBpcyBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICghc2hvdWxkVHJpZ2dlclJlbmRlciAmJiAoaGFzRnJvbXZhbHVlIHx8IGlzRnJvbVRvQXJyYXkpKSBzaG91bGRUcmlnZ2VyUmVuZGVyID0gMTtcblxuICAgICAgICAgICAgbGV0IHByZXZTaWJsaW5nID0gcHJldlR3ZWVuO1xuXG4gICAgICAgICAgICBpZiAodHdlZW5Db21wb3NpdGlvbiAhPT0gY29tcG9zaXRpb25UeXBlcy5ub25lKSB7XG4gICAgICAgICAgICAgIGlmICghc2libGluZ3MpIHNpYmxpbmdzID0gZ2V0VHdlZW5TaWJsaW5ncyh0YXJnZXQsIHByb3BOYW1lKTtcbiAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gc2libGluZ3MuX2hlYWQ7XG4gICAgICAgICAgICAgIC8vIEl0ZXJhdGUgdHJvdWdoIGFsbCB0aGUgbmV4dCBzaWJsaW5ncyB1bnRpbCB3ZSBmaW5kIGEgc2libGluZyB3aXRoIGFuIGVxdWFsIG9yIGluZmVyaW9yIHN0YXJ0IHRpbWVcbiAgICAgICAgICAgICAgd2hpbGUgKG5leHRTaWJsaW5nICYmICFuZXh0U2libGluZy5faXNPdmVycmlkZGVuICYmIG5leHRTaWJsaW5nLl9hYnNvbHV0ZVN0YXJ0VGltZSA8PSBhYnNvbHV0ZVN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nID0gbmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5fbmV4dFJlcDtcbiAgICAgICAgICAgICAgICAvLyBPdmVycmlkZXMgYWxsIHRoZSBuZXh0IHNpYmxpbmdzIGlmIHRoZSBuZXh0IHNpYmxpbmcgc3RhcnRzIGF0IHRoZSBzYW1lIHRpbWUgb2YgYWZ0ZXIgYXMgdGhlIG5ldyB0d2VlbiBzdGFydCB0aW1lXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLl9hYnNvbHV0ZVN0YXJ0VGltZSA+PSBhYnNvbHV0ZVN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKG5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlVHdlZW4obmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgZW5kcyBib3RoIHRoZSBjdXJyZW50IHdoaWxlIGxvb3AgYW5kIHRoZSB1cHBlciBvbmUgb25jZSBhbGwgdGhlIG5leHQgc2libGxpbmdzIGhhdmUgYmVlbiBvdmVycmlkZW5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5fbmV4dFJlcDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVjb21wb3NlIHZhbHVlc1xuICAgICAgICAgICAgaWYgKGlzRnJvbVRvVmFsdWUpIHtcbiAgICAgICAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUoaXNGcm9tVG9BcnJheSA/IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5Ub1ZhbHVlWzBdLCB0YXJnZXQsIHRpLCB0bCkgOiB0d2VlbkZyb21WYWx1ZSwgZnJvbVRhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKGlzRnJvbVRvQXJyYXkgPyBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuVG9WYWx1ZVsxXSwgdGFyZ2V0LCB0aSwgdGwsIHRvRnVuY3Rpb25TdG9yZSkgOiB0d2VlblRvVmFsdWUsIHRvVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgaWYgKGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5OVU1CRVIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5fdmFsdWVUeXBlID09PSB2YWx1ZVR5cGVzLlVOSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVRhcmdldE9iamVjdC50ID0gdmFsdWVUeXBlcy5VTklUO1xuICAgICAgICAgICAgICAgICAgICBmcm9tVGFyZ2V0T2JqZWN0LnUgPSBwcmV2U2libGluZy5fdW5pdDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgIGdldE9yaWdpbmFsQW5pbWF0YWJsZVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHR3ZWVuVHlwZSwgYW5pbUlubGluZVN0eWxlcyksXG4gICAgICAgICAgICAgICAgICAgIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgaWYgKGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLnQgPT09IHZhbHVlVHlwZXMuVU5JVCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVGFyZ2V0T2JqZWN0LnQgPSB2YWx1ZVR5cGVzLlVOSVQ7XG4gICAgICAgICAgICAgICAgICAgIGZyb21UYXJnZXRPYmplY3QudSA9IGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLnU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoaGFzVG9WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKHR3ZWVuVG9WYWx1ZSwgdG9UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2VHdlZW4pIHtcbiAgICAgICAgICAgICAgICAgIGRlY29tcG9zZVR3ZWVuVmFsdWUocHJldlR3ZWVuLCB0b1RhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gZ2V0IGFuZCBwYXJzZSB0aGUgb3JpZ2luYWwgdmFsdWUgaWYgdGhlIHR3ZWVuIGlzIHBhcnQgb2YgYSB0aW1lbGluZSBhbmQgaGFzIGEgcHJldmlvdXMgc2libGluZyBwYXJ0IG9mIHRoZSBzYW1lIHRpbWVsaW5lXG4gICAgICAgICAgICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZShwYXJlbnQgJiYgcHJldlNpYmxpbmcgJiYgcHJldlNpYmxpbmcucGFyZW50LnBhcmVudCA9PT0gcGFyZW50ID8gcHJldlNpYmxpbmcuX3ZhbHVlIDpcbiAgICAgICAgICAgICAgICAgIGdldE9yaWdpbmFsQW5pbWF0YWJsZVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHR3ZWVuVHlwZSwgYW5pbUlubGluZVN0eWxlcyksIHRvVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGhhc0Zyb212YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKHR3ZWVuRnJvbVZhbHVlLCBmcm9tVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlR3ZWVuKSB7XG4gICAgICAgICAgICAgICAgICBkZWNvbXBvc2VUd2VlblZhbHVlKHByZXZUd2VlbiwgZnJvbVRhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKHBhcmVudCAmJiBwcmV2U2libGluZyAmJiBwcmV2U2libGluZy5wYXJlbnQucGFyZW50ID09PSBwYXJlbnQgPyBwcmV2U2libGluZy5fdmFsdWUgOlxuICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBnZXQgYW5kIHBhcnNlIHRoZSBvcmlnaW5hbCB2YWx1ZSBpZiB0aGUgdHdlZW4gaXMgcGFydCBvZiBhIHRpbWVsaW5lIGFuZCBoYXMgYSBwcmV2aW91cyBzaWJsaW5nIHBhcnQgb2YgdGhlIHNhbWUgdGltZWxpbmVcbiAgICAgICAgICAgICAgICAgIGdldE9yaWdpbmFsQW5pbWF0YWJsZVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHR3ZWVuVHlwZSwgYW5pbUlubGluZVN0eWxlcyksIGZyb21UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBvcGVyYXRvcnNcbiAgICAgICAgICAgIGlmIChmcm9tVGFyZ2V0T2JqZWN0Lm8pIHtcbiAgICAgICAgICAgICAgZnJvbVRhcmdldE9iamVjdC5uID0gZ2V0UmVsYXRpdmVWYWx1ZShcbiAgICAgICAgICAgICAgICAhcHJldlNpYmxpbmcgPyBkZWNvbXBvc2VSYXdWYWx1ZShcbiAgICAgICAgICAgICAgICAgIGdldE9yaWdpbmFsQW5pbWF0YWJsZVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHR3ZWVuVHlwZSwgYW5pbUlubGluZVN0eWxlcyksXG4gICAgICAgICAgICAgICAgICBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZVxuICAgICAgICAgICAgICAgICkubiA6IHByZXZTaWJsaW5nLl90b051bWJlcixcbiAgICAgICAgICAgICAgICBmcm9tVGFyZ2V0T2JqZWN0Lm4sXG4gICAgICAgICAgICAgICAgZnJvbVRhcmdldE9iamVjdC5vXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b1RhcmdldE9iamVjdC5vKSB7XG4gICAgICAgICAgICAgIHRvVGFyZ2V0T2JqZWN0Lm4gPSBnZXRSZWxhdGl2ZVZhbHVlKGZyb21UYXJnZXRPYmplY3QubiwgdG9UYXJnZXRPYmplY3QubiwgdG9UYXJnZXRPYmplY3Qubyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFZhbHVlcyBvbW9nZW5pc2F0aW9uIGluIGNhc2VzIG9mIHR5cGUgZGlmZmVyZW5jZSBiZXR3ZWVuIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAgICAgICAgICAgIGlmIChmcm9tVGFyZ2V0T2JqZWN0LnQgIT09IHRvVGFyZ2V0T2JqZWN0LnQpIHtcbiAgICAgICAgICAgICAgaWYgKGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT01QTEVYIHx8IHRvVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09NUExFWCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXhWYWx1ZSA9IGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT01QTEVYID8gZnJvbVRhcmdldE9iamVjdCA6IHRvVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdENvbXBsZXhWYWx1ZSA9IGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT01QTEVYID8gdG9UYXJnZXRPYmplY3QgOiBmcm9tVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICAgIG5vdENvbXBsZXhWYWx1ZS50ID0gdmFsdWVUeXBlcy5DT01QTEVYO1xuICAgICAgICAgICAgICAgIG5vdENvbXBsZXhWYWx1ZS5zID0gY2xvbmVBcnJheShjb21wbGV4VmFsdWUucyk7XG4gICAgICAgICAgICAgICAgbm90Q29tcGxleFZhbHVlLmQgPSBjb21wbGV4VmFsdWUuZC5tYXAoKCkgPT4gbm90Q29tcGxleFZhbHVlLm4pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5VTklUIHx8IHRvVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuVU5JVCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXRWYWx1ZSA9IGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5VTklUID8gZnJvbVRhcmdldE9iamVjdCA6IHRvVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdFVuaXRWYWx1ZSA9IGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5VTklUID8gdG9UYXJnZXRPYmplY3QgOiBmcm9tVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICAgIG5vdFVuaXRWYWx1ZS50ID0gdmFsdWVUeXBlcy5VTklUO1xuICAgICAgICAgICAgICAgIG5vdFVuaXRWYWx1ZS51ID0gdW5pdFZhbHVlLnU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTE9SIHx8IHRvVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09MT1IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvclZhbHVlID0gZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTE9SID8gZnJvbVRhcmdldE9iamVjdCA6IHRvVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdENvbG9yVmFsdWUgPSBmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09MT1IgPyB0b1RhcmdldE9iamVjdCA6IGZyb21UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgbm90Q29sb3JWYWx1ZS50ID0gdmFsdWVUeXBlcy5DT0xPUjtcbiAgICAgICAgICAgICAgICBub3RDb2xvclZhbHVlLnMgPSBjb2xvclZhbHVlLnM7XG4gICAgICAgICAgICAgICAgbm90Q29sb3JWYWx1ZS5kID0gWzAsIDAsIDAsIDFdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVuaXQgY29udmVyc2lvblxuICAgICAgICAgICAgaWYgKGZyb21UYXJnZXRPYmplY3QudSAhPT0gdG9UYXJnZXRPYmplY3QudSkge1xuICAgICAgICAgICAgICBsZXQgdmFsdWVUb0NvbnZlcnQgPSB0b1RhcmdldE9iamVjdC51ID8gZnJvbVRhcmdldE9iamVjdCA6IHRvVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICB2YWx1ZVRvQ29udmVydCA9IGNvbnZlcnRWYWx1ZVVuaXQoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCksIHZhbHVlVG9Db252ZXJ0LCB0b1RhcmdldE9iamVjdC51ID8gdG9UYXJnZXRPYmplY3QudSA6IGZyb21UYXJnZXRPYmplY3QudSwgZmFsc2UpO1xuICAgICAgICAgICAgICAvLyBUT0RPOlxuICAgICAgICAgICAgICAvLyBjb252ZXJ0VmFsdWVVbml0KHRhcmdldCwgdG8udSA/IGZyb20gOiB0bywgdG8udSA/IHRvLnUgOiBmcm9tLnUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaWxsIGluIG5vbiBleGlzdGluZyBjb21wbGV4IHZhbHVlc1xuICAgICAgICAgICAgaWYgKHRvVGFyZ2V0T2JqZWN0LmQgJiYgZnJvbVRhcmdldE9iamVjdC5kICYmICh0b1RhcmdldE9iamVjdC5kLmxlbmd0aCAhPT0gZnJvbVRhcmdldE9iamVjdC5kLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgbG9uZ2VzdFZhbHVlID0gZnJvbVRhcmdldE9iamVjdC5kLmxlbmd0aCA+IHRvVGFyZ2V0T2JqZWN0LmQubGVuZ3RoID8gZnJvbVRhcmdldE9iamVjdCA6IHRvVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICBjb25zdCBzaG9ydGVzdFZhbHVlID0gbG9uZ2VzdFZhbHVlID09PSBmcm9tVGFyZ2V0T2JqZWN0ID8gdG9UYXJnZXRPYmplY3QgOiBmcm9tVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICAvLyBUT0RPOiBDaGVjayBpZiBuIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgMCBmb3IgZGVmYXVsdCBjb21wbGV4IHZhbHVlc1xuICAgICAgICAgICAgICBzaG9ydGVzdFZhbHVlLmQgPSBsb25nZXN0VmFsdWUuZC5tYXAoKF8sIGkpID0+IGlzVW5kKHNob3J0ZXN0VmFsdWUuZFtpXSkgPyAwIDogc2hvcnRlc3RWYWx1ZS5kW2ldKTtcbiAgICAgICAgICAgICAgc2hvcnRlc3RWYWx1ZS5zID0gY2xvbmVBcnJheShsb25nZXN0VmFsdWUucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFR3ZWVuIGZhY3RvcnlcblxuICAgICAgICAgICAgLy8gUm91bmRpbmcgaXMgbmVjZXNzYXJ5IGhlcmUgdG8gbWluaW1pemUgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXG4gICAgICAgICAgICBjb25zdCB0d2VlblVwZGF0ZUR1cmF0aW9uID0gcm91bmQoK3R3ZWVuRHVyYXRpb24gfHwgbWluVmFsdWUsIDEyKTtcblxuICAgICAgICAgICAgLyoqIEB0eXBlIHtUd2Vlbn0gKi9cbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuID0ge1xuICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgIGlkOiB0d2VlbklkKyssXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wTmFtZSxcbiAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgIF92YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgX2Z1bmM6IHRvRnVuY3Rpb25TdG9yZS5mdW5jLFxuICAgICAgICAgICAgICBfZWFzZTogcGFyc2VFYXNpbmdzKHR3ZWVuRWFzaW5nKSxcbiAgICAgICAgICAgICAgX2Zyb21OdW1iZXJzOiBjbG9uZUFycmF5KGZyb21UYXJnZXRPYmplY3QuZCksXG4gICAgICAgICAgICAgIF90b051bWJlcnM6IGNsb25lQXJyYXkodG9UYXJnZXRPYmplY3QuZCksXG4gICAgICAgICAgICAgIF9zdHJpbmdzOiBjbG9uZUFycmF5KHRvVGFyZ2V0T2JqZWN0LnMpLFxuICAgICAgICAgICAgICBfZnJvbU51bWJlcjogZnJvbVRhcmdldE9iamVjdC5uLFxuICAgICAgICAgICAgICBfdG9OdW1iZXI6IHRvVGFyZ2V0T2JqZWN0Lm4sXG4gICAgICAgICAgICAgIF9udW1iZXJzOiBjbG9uZUFycmF5KGZyb21UYXJnZXRPYmplY3QuZCksIC8vIEZvciBhZGRpdGl2ZSB0d2VlbiBhbmQgYW5pbWF0YWJsZXNcbiAgICAgICAgICAgICAgX251bWJlcjogZnJvbVRhcmdldE9iamVjdC5uLCAvLyBGb3IgYWRkaXRpdmUgdHdlZW4gYW5kIGFuaW1hdGFibGVzXG4gICAgICAgICAgICAgIF91bml0OiB0b1RhcmdldE9iamVjdC51LFxuICAgICAgICAgICAgICBfbW9kaWZpZXI6IHR3ZWVuTW9kaWZpZXIsXG4gICAgICAgICAgICAgIF9jdXJyZW50VGltZTogMCxcbiAgICAgICAgICAgICAgX3N0YXJ0VGltZTogdHdlZW5TdGFydFRpbWUsXG4gICAgICAgICAgICAgIF9kZWxheTogK3R3ZWVuRGVsYXksXG4gICAgICAgICAgICAgIF91cGRhdGVEdXJhdGlvbjogdHdlZW5VcGRhdGVEdXJhdGlvbixcbiAgICAgICAgICAgICAgX2NoYW5nZUR1cmF0aW9uOiB0d2VlblVwZGF0ZUR1cmF0aW9uLFxuICAgICAgICAgICAgICBfYWJzb2x1dGVTdGFydFRpbWU6IGFic29sdXRlU3RhcnRUaW1lLFxuICAgICAgICAgICAgICAvLyBOT1RFOiBJbnZlc3RpZ2F0ZSBiaXQgcGFja2luZyB0byBzdG9yZXMgRU5VTSAvIEJPT0xcbiAgICAgICAgICAgICAgX3R3ZWVuVHlwZTogdHdlZW5UeXBlLFxuICAgICAgICAgICAgICBfdmFsdWVUeXBlOiB0b1RhcmdldE9iamVjdC50LFxuICAgICAgICAgICAgICBfY29tcG9zaXRpb246IHR3ZWVuQ29tcG9zaXRpb24sXG4gICAgICAgICAgICAgIF9pc092ZXJsYXBwZWQ6IDAsXG4gICAgICAgICAgICAgIF9pc092ZXJyaWRkZW46IDAsXG4gICAgICAgICAgICAgIF9yZW5kZXJUcmFuc2Zvcm1zOiAwLFxuICAgICAgICAgICAgICBfcHJldlJlcDogbnVsbCwgLy8gRm9yIHJlcGxhY2VkIHR3ZWVuXG4gICAgICAgICAgICAgIF9uZXh0UmVwOiBudWxsLCAvLyBGb3IgcmVwbGFjZWQgdHdlZW5cbiAgICAgICAgICAgICAgX3ByZXZBZGQ6IG51bGwsIC8vIEZvciBhZGRpdGl2ZSB0d2VlblxuICAgICAgICAgICAgICBfbmV4dEFkZDogbnVsbCwgLy8gRm9yIGFkZGl0aXZlIHR3ZWVuXG4gICAgICAgICAgICAgIF9wcmV2OiBudWxsLFxuICAgICAgICAgICAgICBfbmV4dDogbnVsbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0d2VlbkNvbXBvc2l0aW9uICE9PSBjb21wb3NpdGlvblR5cGVzLm5vbmUpIHtcbiAgICAgICAgICAgICAgY29tcG9zZVR3ZWVuKHR3ZWVuLCBzaWJsaW5ncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTihmaXJzdFR3ZWVuQ2hhbmdlU3RhcnRUaW1lKSkge1xuICAgICAgICAgICAgICBmaXJzdFR3ZWVuQ2hhbmdlU3RhcnRUaW1lID0gdHdlZW4uX3N0YXJ0VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJvdW5kaW5nIGlzIG5lY2Vzc2FyeSBoZXJlIHRvIG1pbmltaXplIGZsb2F0aW5nIHBvaW50IGVycm9yc1xuICAgICAgICAgICAgbGFzdFR3ZWVuQ2hhbmdlRW5kVGltZSA9IHJvdW5kKHR3ZWVuU3RhcnRUaW1lICsgdHdlZW5VcGRhdGVEdXJhdGlvbiwgMTIpO1xuICAgICAgICAgICAgcHJldlR3ZWVuID0gdHdlZW47XG4gICAgICAgICAgICBhbmltYXRpb25BbmltYXRpb25MZW5ndGgrKztcblxuICAgICAgICAgICAgYWRkQ2hpbGQodGhpcywgdHdlZW4pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVXBkYXRlIGFuaW1hdGlvbiB0aW1pbmdzIHdpdGggdGhlIGFkZGVkIHR3ZWVucyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgICBpZiAoaXNOYU4oaXRlcmF0aW9uRGVsYXkpIHx8IGZpcnN0VHdlZW5DaGFuZ2VTdGFydFRpbWUgPCBpdGVyYXRpb25EZWxheSkge1xuICAgICAgICAgICAgaXRlcmF0aW9uRGVsYXkgPSBmaXJzdFR3ZWVuQ2hhbmdlU3RhcnRUaW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc05hTihpdGVyYXRpb25EdXJhdGlvbikgfHwgbGFzdFR3ZWVuQ2hhbmdlRW5kVGltZSA+IGl0ZXJhdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBpdGVyYXRpb25EdXJhdGlvbiA9IGxhc3RUd2VlbkNoYW5nZUVuZFRpbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVE9ETzogRmluZCBhIHdheSB0byBpbmxpbmUgdHdlZW4uX3JlbmRlclRyYW5zZm9ybXMgPSAxIGhlcmVcbiAgICAgICAgICBpZiAodHdlZW5UeXBlID09PSB0d2VlblR5cGVzLlRSQU5TRk9STSkge1xuICAgICAgICAgICAgbGFzdFRyYW5zZm9ybUdyb3VwSW5kZXggPSBhbmltYXRpb25BbmltYXRpb25MZW5ndGggLSB0d2VlbkluZGV4O1xuICAgICAgICAgICAgbGFzdFRyYW5zZm9ybUdyb3VwTGVuZ3RoID0gYW5pbWF0aW9uQW5pbWF0aW9uTGVuZ3RoO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLy8gU2V0IF9yZW5kZXJUcmFuc2Zvcm1zIHRvIGxhc3QgdHJhbnNmb3JtIHByb3BlcnR5IHRvIGNvcnJlY3RseSByZW5kZXIgdGhlIHRyYW5zZm9ybXMgbGlzdFxuICAgICAgaWYgKCFpc05hTihsYXN0VHJhbnNmb3JtR3JvdXBJbmRleCkpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7VHdlZW59ICovdHdlZW4pID0+IHtcbiAgICAgICAgICBpZiAoaSA+PSBsYXN0VHJhbnNmb3JtR3JvdXBJbmRleCAmJiBpIDwgbGFzdFRyYW5zZm9ybUdyb3VwTGVuZ3RoKSB7XG4gICAgICAgICAgICB0d2Vlbi5fcmVuZGVyVHJhbnNmb3JtcyA9IDE7XG4gICAgICAgICAgICBpZiAodHdlZW4uX2NvbXBvc2l0aW9uID09PSBjb21wb3NpdGlvblR5cGVzLmJsZW5kKSB7XG4gICAgICAgICAgICAgIGZvckVhY2hDaGlsZHJlbihhZGRpdGl2ZS5hbmltYXRpb24sICgvKiogQHR5cGUge1R3ZWVufSAqL2FkZGl0aXZlVHdlZW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkaXRpdmVUd2Vlbi5pZCA9PT0gdHdlZW4uaWQpIHtcbiAgICAgICAgICAgICAgICAgIGFkZGl0aXZlVHdlZW4uX3JlbmRlclRyYW5zZm9ybXMgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldHNMZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gdGFyZ2V0IGZvdW5kLiBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgeW91J3JlIHRyeWluZyB0byBhbmltYXRlIGlzIGFjY2Vzc2libGUgYmVmb3JlIGNyZWF0aW5nIHlvdXIgYW5pbWF0aW9uLmApO1xuICAgIH1cblxuICAgIGlmIChpdGVyYXRpb25EZWxheSkge1xuICAgICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1R3ZWVufSAqL3R3ZWVuKSA9PiB7XG4gICAgICAgIC8vIElmIChzdGFydFRpbWUgLSBkZWxheSkgZXF1YWxzIDAsIHRoaXMgbWVhbnMgdGhlIHR3ZWVuIGlzIGF0IHRoZSBiZWdpbmluZyBvZiB0aGUgYW5pbWF0aW9uIHNvIHdlIG5lZWQgdG8gdHJpbSB0aGUgZGVsYXkgdG9vXG4gICAgICAgIGlmICghKHR3ZWVuLl9zdGFydFRpbWUgLSB0d2Vlbi5fZGVsYXkpKSB7XG4gICAgICAgICAgdHdlZW4uX2RlbGF5IC09IGl0ZXJhdGlvbkRlbGF5O1xuICAgICAgICB9XG4gICAgICAgIHR3ZWVuLl9zdGFydFRpbWUgLT0gaXRlcmF0aW9uRGVsYXk7XG4gICAgICB9KTtcbiAgICAgIGl0ZXJhdGlvbkR1cmF0aW9uIC09IGl0ZXJhdGlvbkRlbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRpb25EZWxheSA9IDA7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudHMgaXRlcmF0aW9uRHVyYXRpb24gdG8gYmUgTmFOIGlmIG5vIHZhbGlkIGFuaW1hdGFibGUgcHJvcHMgaGF2ZSBiZWVuIHByb3ZpZGVkXG4gICAgLy8gUHJldmVudHMgX2l0ZXJhdGlvbkNvdW50IHRvIGJlIE5hTiBpZiBubyB2YWxpZCBhbmltYXRhYmxlIHByb3BzIGhhdmUgYmVlbiBwcm92aWRlZFxuICAgIGlmICghaXRlcmF0aW9uRHVyYXRpb24pIHtcbiAgICAgIGl0ZXJhdGlvbkR1cmF0aW9uID0gbWluVmFsdWU7XG4gICAgICB0aGlzLml0ZXJhdGlvbkNvdW50ID0gMDtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtUYXJnZXRzQXJyYXl9ICovXG4gICAgdGhpcy50YXJnZXRzID0gcGFyc2VkVGFyZ2V0cztcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmR1cmF0aW9uID0gaXRlcmF0aW9uRHVyYXRpb24gPT09IG1pblZhbHVlID8gbWluVmFsdWUgOiBjbGFtcEluZmluaXR5KCgoaXRlcmF0aW9uRHVyYXRpb24gKyB0aGlzLl9sb29wRGVsYXkpICogdGhpcy5pdGVyYXRpb25Db3VudCkgLSB0aGlzLl9sb29wRGVsYXkpIHx8IG1pblZhbHVlO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblJlbmRlciA9IG9uUmVuZGVyIHx8IGFuaW1EZWZhdWx0cy5vblJlbmRlcjtcbiAgICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICAgIHRoaXMuX2Vhc2UgPSBhbmltRWFzZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9kZWxheSA9IGl0ZXJhdGlvbkRlbGF5O1xuICAgIC8vIE5PVEU6IEknbSBrZWVwaW5nIGRlbGF5IHZhbHVlcyBzZXBhcmF0ZWQgZnJvbSBvZmZzZXRzIGluIHRpbWVsaW5lcyBiZWNhdXNlIGRlbGF5cyBjYW4gb3ZlcnJpZGUgcHJldmlvdXMgdHdlZW5zIGFuZCBpdCBjb3VsZCBiZSBjb25mdXNpbmcgdG8gZGVidWcgYSB0aW1lbGluZSB3aXRoIG92ZXJyaWRkZW4gdHdlZW5zIGFuZCBubyBhc3NvY2lhdGVkIHZpc2libGUgZGVsYXlzLlxuICAgIC8vIHRoaXMuX2RlbGF5ID0gcGFyZW50ID8gMCA6IGl0ZXJhdGlvbkRlbGF5O1xuICAgIC8vIHRoaXMuX29mZnNldCArPSBwYXJlbnQgPyBpdGVyYXRpb25EZWxheSA6IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5pdGVyYXRpb25EdXJhdGlvbiA9IGl0ZXJhdGlvbkR1cmF0aW9uO1xuICAgIC8qKiBAdHlwZSB7e319ICovXG4gICAgdGhpcy5faW5saW5lU3R5bGVzID0gYW5pbUlubGluZVN0eWxlcztcblxuICAgIGlmICghdGhpcy5fYXV0b3BsYXkgJiYgc2hvdWxkVHJpZ2dlclJlbmRlcikgdGhpcy5vblJlbmRlcih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG5ld0R1cmF0aW9uXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzdHJldGNoKG5ld0R1cmF0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudER1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBpZiAoY3VycmVudER1cmF0aW9uID09PSBub3JtYWxpemVUaW1lKG5ld0R1cmF0aW9uKSkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdGltZVNjYWxlID0gbmV3RHVyYXRpb24gLyBjdXJyZW50RHVyYXRpb247XG4gICAgLy8gTk9URTogRmluZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoZSBzdHJldGNoIG9mIGFuIGFuaW1hdGlvbiBhZnRlciBzdHJldGNoID0gMFxuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtUd2Vlbn0gKi90d2VlbikgPT4ge1xuICAgICAgLy8gUm91bmRpbmcgaXMgbmVjZXNzYXJ5IGhlcmUgdG8gbWluaW1pemUgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXG4gICAgICB0d2Vlbi5fdXBkYXRlRHVyYXRpb24gPSBub3JtYWxpemVUaW1lKHR3ZWVuLl91cGRhdGVEdXJhdGlvbiAqIHRpbWVTY2FsZSk7XG4gICAgICB0d2Vlbi5fY2hhbmdlRHVyYXRpb24gPSBub3JtYWxpemVUaW1lKHR3ZWVuLl9jaGFuZ2VEdXJhdGlvbiAqIHRpbWVTY2FsZSk7XG4gICAgICB0d2Vlbi5fY3VycmVudFRpbWUgKj0gdGltZVNjYWxlO1xuICAgICAgdHdlZW4uX3N0YXJ0VGltZSAqPSB0aW1lU2NhbGU7XG4gICAgICB0d2Vlbi5fYWJzb2x1dGVTdGFydFRpbWUgKj0gdGltZVNjYWxlO1xuICAgIH0pO1xuICAgIHJldHVybiBzdXBlci5zdHJldGNoKG5ld0R1cmF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7VHdlZW59ICovdHdlZW4pID0+IHtcbiAgICAgIGNvbnN0IG9nVmFsdWUgPSBnZXRPcmlnaW5hbEFuaW1hdGFibGVWYWx1ZSh0d2Vlbi50YXJnZXQsIHR3ZWVuLnByb3BlcnR5LCB0d2Vlbi5fdHdlZW5UeXBlKTtcbiAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKG9nVmFsdWUsIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlKTtcbiAgICAgIHR3ZWVuLl9mcm9tTnVtYmVycyA9IGNsb25lQXJyYXkoZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUuZCk7XG4gICAgICB0d2Vlbi5fZnJvbU51bWJlciA9IGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLm47XG4gICAgICBpZiAodHdlZW4uX2Z1bmMpIHtcbiAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUodHdlZW4uX2Z1bmMoKSwgdG9UYXJnZXRPYmplY3QpO1xuICAgICAgICB0d2Vlbi5fdG9OdW1iZXJzID0gY2xvbmVBcnJheSh0b1RhcmdldE9iamVjdC5kKTtcbiAgICAgICAgdHdlZW4uX3N0cmluZ3MgPSBjbG9uZUFycmF5KHRvVGFyZ2V0T2JqZWN0LnMpO1xuICAgICAgICB0d2Vlbi5fdG9OdW1iZXIgPSB0b1RhcmdldE9iamVjdC5uO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgYW5pbWF0aW9uIGFuZCByZXZlcnQgYWxsIHRoZSB2YWx1ZXMgYWZmZWN0ZWQgYnkgdGhpcyBhbmltYXRpb24gdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJldmVydCgpIHtcbiAgICBzdXBlci5yZXZlcnQoKTtcbiAgICByZXR1cm4gY2xlYW5JbmxpbmVTdHlsZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7Q2FsbGJhY2s8dGhpcz59IFtjYWxsYmFja11cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHRoZW4oY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc3VwZXIudGhlbihjYWxsYmFjayk7XG4gIH1cblxufVxuXG4vKipcbiAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcGFyYW0ge0FuaW1hdGlvblBhcmFtc30gcGFyYW1ldGVyc1xuICogQHJldHVybiB7SlNBbmltYXRpb259XG4gKi9cbmNvbnN0IGFuaW1hdGUgPSAodGFyZ2V0cywgcGFyYW1ldGVycykgPT4gbmV3IEpTQW5pbWF0aW9uKHRhcmdldHMsIHBhcmFtZXRlcnMsIG51bGwsIDAsIGZhbHNlKS5pbml0KCk7XG5cblxuXG5cbi8qKlxuICogQ29udmVydHMgYW4gZWFzaW5nIGZ1bmN0aW9uIGludG8gYSB2YWxpZCBDU1MgbGluZWFyKCkgdGltaW5nIGZ1bmN0aW9uIHN0cmluZ1xuICogQHBhcmFtIHtFYXNpbmdGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0xMDBdXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBDU1MgbGluZWFyKCkgdGltaW5nIGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGVhc2luZ1RvTGluZWFyID0gKGZuLCBzYW1wbGVzID0gMTAwKSA9PiB7XG4gIGNvbnN0IHBvaW50cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBzYW1wbGVzOyBpKyspIHBvaW50cy5wdXNoKGZuKGkgLyBzYW1wbGVzKSk7XG4gIHJldHVybiBgbGluZWFyKCR7cG9pbnRzLmpvaW4oJywgJyl9KWA7XG59O1xuXG5jb25zdCBXQUFQSUVhc2VzTG9va3VwcyA9IHtcbiAgaW46ICdlYXNlLWluJyxcbiAgb3V0OiAnZWFzZS1vdXQnLFxuICBpbk91dDogJ2Vhc2UtaW4tb3V0Jyxcbn07XG5cbmNvbnN0IFdBQVBJZWFzZXMgPSAvKiNfX1BVUkVfXyovKCgpID0+IHtcbiAgY29uc3QgbGlzdCA9IHt9O1xuICBmb3IgKGxldCB0eXBlIGluIGVhc2VUeXBlcykgbGlzdFt0eXBlXSA9IGEgPT4gZWFzZVR5cGVzW3R5cGVdKGVhc2VJblBvd2VyKGEpKTtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgRWFzaW5nRnVuY3Rpb24+fSAqLyhsaXN0KTtcbn0pKCk7XG5cbi8qKlxuICogQHBhcmFtICB7RWFzaW5nUGFyYW19IGVhc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgcGFyc2VXQUFQSUVhc2luZyA9IChlYXNlKSA9PiB7XG4gIGxldCBwYXJzZWRFYXNlID0gV0FBUElFYXNlc0xvb2t1cHNbZWFzZV07XG4gIGlmIChwYXJzZWRFYXNlKSByZXR1cm4gcGFyc2VkRWFzZTtcbiAgcGFyc2VkRWFzZSA9ICdsaW5lYXInO1xuICBpZiAoaXNTdHIoZWFzZSkpIHtcbiAgICBpZiAoXG4gICAgICBzdHJpbmdTdGFydHNXaXRoKGVhc2UsICdsaW5lYXInKSB8fFxuICAgICAgc3RyaW5nU3RhcnRzV2l0aChlYXNlLCAnY3ViaWMtJykgfHxcbiAgICAgIHN0cmluZ1N0YXJ0c1dpdGgoZWFzZSwgJ3N0ZXBzJykgfHxcbiAgICAgIHN0cmluZ1N0YXJ0c1dpdGgoZWFzZSwgJ2Vhc2UnKVxuICAgICkge1xuICAgICAgcGFyc2VkRWFzZSA9IGVhc2U7XG4gICAgfSBlbHNlIGlmIChzdHJpbmdTdGFydHNXaXRoKGVhc2UsICdjdWJpY0InKSkge1xuICAgICAgcGFyc2VkRWFzZSA9IHRvTG93ZXJDYXNlKGVhc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUVhc2VTdHJpbmcoZWFzZSwgV0FBUEllYXNlcywgV0FBUElFYXNlc0xvb2t1cHMpO1xuICAgICAgaWYgKGlzRm5jKHBhcnNlZCkpIHBhcnNlZEVhc2UgPSBwYXJzZWQgPT09IG5vbmUgPyAnbGluZWFyJyA6IGVhc2luZ1RvTGluZWFyKHBhcnNlZCk7XG4gICAgfVxuICAgIFdBQVBJRWFzZXNMb29rdXBzW2Vhc2VdID0gcGFyc2VkRWFzZTtcbiAgfSBlbHNlIGlmIChpc0ZuYyhlYXNlKSkge1xuICAgIGNvbnN0IGVhc2luZyA9IGVhc2luZ1RvTGluZWFyKGVhc2UpO1xuICAgIGlmIChlYXNpbmcpIHBhcnNlZEVhc2UgPSBlYXNpbmc7XG4gIH0gZWxzZSBpZiAoLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UpIHtcbiAgICBwYXJzZWRFYXNlID0gZWFzaW5nVG9MaW5lYXIoLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UpO1xuICB9XG4gIHJldHVybiBwYXJzZWRFYXNlO1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7U3RyaW5nfE51bWJlcnxBcnJheTxTdHJpbmc+fEFycmF5PE51bWJlcj59IFdBQVBJVHdlZW5WYWx1ZVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFdBQVBJRnVuY3Rpb252YWx1ZVxuICogQHBhcmFtIHtET01UYXJnZXR9IHRhcmdldCAtIFRoZSBhbmltYXRlZCB0YXJnZXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIFRoZSB0YXJnZXQgaW5kZXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggLSBUaGUgdG90YWwgbnVtYmVyIG9mIGFuaW1hdGVkIHRhcmdldHNcbiAqIEByZXR1cm4ge1dBQVBJVHdlZW5WYWx1ZX1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtXQUFQSVR3ZWVuVmFsdWV8V0FBUElGdW5jdGlvbnZhbHVlfEFycmF5PFN0cmluZ3xOdW1iZXJ8V0FBUElGdW5jdGlvbnZhbHVlPn0gV0FBUElLZXlmcmFtZVZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KGFuaW1hdGlvbjogV0FBUElBbmltYXRpb24pID0+IHZvaWR9IFdBQVBJQ2FsbGJhY2tcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdBQVBJVHdlZW5PcHRpb25zXG4gKiBAcHJvcGVydHkge1dBQVBJS2V5ZnJhbWVWYWx1ZX0gW3RvXVxuICogQHByb3BlcnR5IHtXQUFQSUtleWZyYW1lVmFsdWV9IFtmcm9tXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8V0FBUElGdW5jdGlvbnZhbHVlfSBbZHVyYXRpb25dXG4gKiBAcHJvcGVydHkge051bWJlcnxXQUFQSUZ1bmN0aW9udmFsdWV9IFtkZWxheV1cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICogQHByb3BlcnR5IHtDb21wb3NpdGVPcGVyYXRpb259IFtjb21wb3NpdGlvbl1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdBQVBJQW5pbWF0aW9uT3B0aW9uc1xuICogQHByb3BlcnR5IHtOdW1iZXJ8Qm9vbGVhbn0gW2xvb3BdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtSZXZlcnNlZF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW0FsdGVybmF0ZV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxTY3JvbGxPYnNlcnZlcn0gW2F1dG9wbGF5XVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtwbGF5YmFja1JhdGVdXG4gKiBAcHJvcGVydHkge051bWJlcnxXQUFQSUZ1bmN0aW9udmFsdWV9IFtkdXJhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFdBQVBJRnVuY3Rpb252YWx1ZX0gW2RlbGF5XVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKiBAcHJvcGVydHkge0NvbXBvc2l0ZU9wZXJhdGlvbn0gW2NvbXBvc2l0aW9uXVxuICogQHByb3BlcnR5IHtXQUFQSUNhbGxiYWNrfSBbb25Db21wbGV0ZV1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8U3RyaW5nLCBXQUFQSUtleWZyYW1lVmFsdWUgfCBXQUFQSUFuaW1hdGlvbk9wdGlvbnMgfCBCb29sZWFuIHwgU2Nyb2xsT2JzZXJ2ZXIgfCBXQUFQSUNhbGxiYWNrIHwgRWFzaW5nUGFyYW0gfCBXQUFQSVR3ZWVuT3B0aW9ucz4gJiBXQUFQSUFuaW1hdGlvbk9wdGlvbnN9IFdBQVBJQW5pbWF0aW9uUGFyYW1zXG4gKi9cblxuY29uc3QgdHJhbnNmb3Jtc1Nob3J0aGFuZHMgPSBbJ3gnLCAneScsICd6J107XG5jb25zdCBjb21tb25EZWZhdWx0UFhQcm9wZXJ0aWVzID0gW1xuICAncGVyc3BlY3RpdmUnLFxuICAnd2lkdGgnLFxuICAnaGVpZ2h0JyxcbiAgJ21hcmdpbicsXG4gICdwYWRkaW5nJyxcbiAgJ3RvcCcsXG4gICdyaWdodCcsXG4gICdib3R0b20nLFxuICAnbGVmdCcsXG4gICdib3JkZXJXaWR0aCcsXG4gICdmb250U2l6ZScsXG4gICdib3JkZXJSYWRpdXMnLFxuICAuLi50cmFuc2Zvcm1zU2hvcnRoYW5kc1xuXTtcblxuY29uc3QgdmFsaWRJbmRpdmlkdWFsVHJhbnNmb3JtcyA9IFsuLi50cmFuc2Zvcm1zU2hvcnRoYW5kcywgLi4udmFsaWRUcmFuc2Zvcm1zLmZpbHRlcih0ID0+IFsnWCcsICdZJywgJ1onXS5zb21lKGF4aXMgPT4gdC5lbmRzV2l0aChheGlzKSkpXTtcblxuLy8gU2V0dGluZyBpdCB0byB0cnVlIGluIGNhc2UgQ1NTLnJlZ2lzdGVyUHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCB3aWxsIGF1dG9tYXRpY2FsbHkgc2tpcCB0aGUgcmVnaXN0cmF0aW9uIGFuZCBmYWxsYmFjayB0byBubyBhbmltYXRpb25cbmxldCB0cmFuc2Zvcm1zUHJvcGVydGllc1JlZ2lzdGVyZWQgPSBpc0Jyb3dzZXIgJiYgKGlzVW5kKENTUykgfHwgIU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKENTUywgJ3JlZ2lzdGVyUHJvcGVydHknKSk7XG5cbmNvbnN0IHJlZ2lzdGVyVHJhbnNmb3Jtc1Byb3BlcnRpZXMgPSAoKSA9PiB7XG4gIGlmICh0cmFuc2Zvcm1zUHJvcGVydGllc1JlZ2lzdGVyZWQpIHJldHVybjtcbiAgdmFsaWRUcmFuc2Zvcm1zLmZvckVhY2godCA9PiB7XG4gICAgY29uc3QgaXNTa2V3ID0gc3RyaW5nU3RhcnRzV2l0aCh0LCAnc2tldycpO1xuICAgIGNvbnN0IGlzU2NhbGUgPSBzdHJpbmdTdGFydHNXaXRoKHQsICdzY2FsZScpO1xuICAgIGNvbnN0IGlzUm90YXRlID0gc3RyaW5nU3RhcnRzV2l0aCh0LCAncm90YXRlJyk7XG4gICAgY29uc3QgaXNUcmFuc2xhdGUgPSBzdHJpbmdTdGFydHNXaXRoKHQsICd0cmFuc2xhdGUnKTtcbiAgICBjb25zdCBpc0FuZ2xlID0gaXNSb3RhdGUgfHwgaXNTa2V3O1xuICAgIGNvbnN0IHN5bnRheCA9IGlzQW5nbGUgPyAnPGFuZ2xlPicgOiBpc1NjYWxlID8gXCI8bnVtYmVyPlwiIDogaXNUcmFuc2xhdGUgPyBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIiA6IFwiKlwiO1xuICAgIHRyeSB7XG4gICAgICBDU1MucmVnaXN0ZXJQcm9wZXJ0eSh7XG4gICAgICAgIG5hbWU6ICctLScgKyB0LFxuICAgICAgICBzeW50YXgsXG4gICAgICAgIGluaGVyaXRzOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBpc1RyYW5zbGF0ZSA/ICcwcHgnIDogaXNBbmdsZSA/ICcwZGVnJyA6IGlzU2NhbGUgPyAnMScgOiAnMCcsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHt9ICB9KTtcbiAgdHJhbnNmb3Jtc1Byb3BlcnRpZXNSZWdpc3RlcmVkID0gdHJ1ZTtcbn07XG5cbmNvbnN0IFdBQVBJQW5pbWF0aW9uc0xvb2t1cHMgPSB7XG4gIF9oZWFkOiBudWxsLFxuICBfdGFpbDogbnVsbCxcbn07XG5cbi8qKlxuICogQHBhcmFtIHtET01UYXJnZXR9ICRlbFxuICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wZXJ0eV1cbiAqIEBwYXJhbSB7V0FBUElBbmltYXRpb259IFtwYXJlbnRdXG4gKi9cbmNvbnN0IHJlbW92ZVdBQVBJQW5pbWF0aW9uID0gKCRlbCwgcHJvcGVydHksIHBhcmVudCkgPT4ge1xuICBsZXQgbmV4dExvb2t1cCA9IFdBQVBJQW5pbWF0aW9uc0xvb2t1cHMuX2hlYWQ7XG4gIHdoaWxlIChuZXh0TG9va3VwKSB7XG4gICAgY29uc3QgbmV4dCA9IG5leHRMb29rdXAuX25leHQ7XG4gICAgY29uc3QgbWF0Y2hUYXJnZXQgPSBuZXh0TG9va3VwLiRlbCA9PT0gJGVsO1xuICAgIGNvbnN0IG1hdGNoUHJvcGVydHkgPSAhcHJvcGVydHkgfHwgbmV4dExvb2t1cC5wcm9wZXJ0eSA9PT0gcHJvcGVydHk7XG4gICAgY29uc3QgbWF0Y2hQYXJlbnQgPSAhcGFyZW50IHx8IG5leHRMb29rdXAucGFyZW50ID09PSBwYXJlbnQ7XG4gICAgaWYgKG1hdGNoVGFyZ2V0ICYmIG1hdGNoUHJvcGVydHkgJiYgbWF0Y2hQYXJlbnQpIHtcbiAgICAgIGNvbnN0IGFuaW0gPSBuZXh0TG9va3VwLmFuaW1hdGlvbjtcbiAgICAgIHRyeSB7IGFuaW0uY29tbWl0U3R5bGVzKCk7IH0gY2F0Y2gge30gICAgICBhbmltLmNhbmNlbCgpO1xuICAgICAgcmVtb3ZlQ2hpbGQoV0FBUElBbmltYXRpb25zTG9va3VwcywgbmV4dExvb2t1cCk7XG4gICAgICBjb25zdCBsb29rdXBQYXJlbnQgPSBuZXh0TG9va3VwLnBhcmVudDtcbiAgICAgIGlmIChsb29rdXBQYXJlbnQpIHtcbiAgICAgICAgbG9va3VwUGFyZW50Ll9jb21wbGV0ZWQrKztcbiAgICAgICAgaWYgKGxvb2t1cFBhcmVudC5hbmltYXRpb25zLmxlbmd0aCA9PT0gbG9va3VwUGFyZW50Ll9jb21wbGV0ZWQpIHtcbiAgICAgICAgICBsb29rdXBQYXJlbnQuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoIWxvb2t1cFBhcmVudC5tdXRlQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBsb29rdXBQYXJlbnQucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvb2t1cFBhcmVudC5vbkNvbXBsZXRlKGxvb2t1cFBhcmVudCk7XG4gICAgICAgICAgICBsb29rdXBQYXJlbnQuX3Jlc29sdmUobG9va3VwUGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbmV4dExvb2t1cCA9IG5leHQ7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtXQUFQSUFuaW1hdGlvbn0gcGFyZW50XG4gKiBAcGFyYW0ge0RPTVRhcmdldH0gJGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7UHJvcGVydHlJbmRleGVkS2V5ZnJhbWVzfSBrZXlmcmFtZXNcbiAqIEBwYXJhbSB7S2V5ZnJhbWVBbmltYXRpb25PcHRpb25zfSBwYXJhbXNcbiAqIEByZXR1biB7QW5pbWF0aW9ufVxuICovXG5jb25zdCBhZGRXQUFQSUFuaW1hdGlvbiA9IChwYXJlbnQsICRlbCwgcHJvcGVydHksIGtleWZyYW1lcywgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGFuaW1hdGlvbiA9ICRlbC5hbmltYXRlKGtleWZyYW1lcywgcGFyYW1zKTtcbiAgY29uc3QgYW5pbVRvdGFsRHVyYXRpb24gPSBwYXJhbXMuZGVsYXkgKyAoK3BhcmFtcy5kdXJhdGlvbiAqIHBhcmFtcy5pdGVyYXRpb25zKTtcbiAgYW5pbWF0aW9uLnBsYXliYWNrUmF0ZSA9IHBhcmVudC5fc3BlZWQ7XG4gIGlmIChwYXJlbnQucGF1c2VkKSBhbmltYXRpb24ucGF1c2UoKTtcbiAgaWYgKHBhcmVudC5kdXJhdGlvbiA8IGFuaW1Ub3RhbER1cmF0aW9uKSB7XG4gICAgcGFyZW50LmR1cmF0aW9uID0gYW5pbVRvdGFsRHVyYXRpb247XG4gICAgcGFyZW50LmNvbnRyb2xBbmltYXRpb24gPSBhbmltYXRpb247XG4gIH1cbiAgcGFyZW50LmFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICByZW1vdmVXQUFQSUFuaW1hdGlvbigkZWwsIHByb3BlcnR5KTtcbiAgYWRkQ2hpbGQoV0FBUElBbmltYXRpb25zTG9va3VwcywgeyBwYXJlbnQsIGFuaW1hdGlvbiwgJGVsLCBwcm9wZXJ0eSwgX25leHQ6IG51bGwsIF9wcmV2OiBudWxsIH0pO1xuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7IHJlbW92ZVdBQVBJQW5pbWF0aW9uKCRlbCwgcHJvcGVydHksIHBhcmVudCk7IH07XG4gIGFuaW1hdGlvbi5vbnJlbW92ZSA9IGhhbmRsZVJlbW92ZTtcbiAgYW5pbWF0aW9uLm9uZmluaXNoID0gaGFuZGxlUmVtb3ZlO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BOYW1lXG4gKiBAcGFyYW0gIHtXQUFQSUtleWZyYW1lVmFsdWV9IHZhbHVlXG4gKiBAcGFyYW0gIHtET01UYXJnZXR9ICRlbFxuICogQHBhcmFtICB7TnVtYmVyfSBpXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRhcmdldHNMZW5ndGhcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3Qgbm9ybWFsaXplVHdlZW5WYWx1ZSA9IChwcm9wTmFtZSwgdmFsdWUsICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkgPT4ge1xuICBsZXQgdiA9IGdldEZ1bmN0aW9uVmFsdWUoLyoqIEB0eXBlIHthbnl9ICovKHZhbHVlKSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKTtcbiAgaWYgKCFpc051bSh2KSkgcmV0dXJuIHY7XG4gIGlmIChjb21tb25EZWZhdWx0UFhQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BOYW1lKSB8fCBzdHJpbmdTdGFydHNXaXRoKHByb3BOYW1lLCAndHJhbnNsYXRlJykpIHJldHVybiBgJHt2fXB4YDtcbiAgaWYgKHN0cmluZ1N0YXJ0c1dpdGgocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdTdGFydHNXaXRoKHByb3BOYW1lLCAnc2tldycpKSByZXR1cm4gYCR7dn1kZWdgO1xuICByZXR1cm4gYCR7dn1gO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtET01UYXJnZXR9ICRlbFxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wTmFtZVxuICogQHBhcmFtICB7V0FBUElLZXlmcmFtZVZhbHVlfSBmcm9tXG4gKiBAcGFyYW0gIHtXQUFQSUtleWZyYW1lVmFsdWV9IHRvXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGlcbiAqIEBwYXJhbSAge051bWJlcn0gdGFyZ2V0c0xlbmd0aFxuICogQHJldHVybiB7V0FBUElUd2VlblZhbHVlfVxuICovXG5jb25zdCBwYXJzZUluZGl2aWR1YWxUd2VlblZhbHVlID0gKCRlbCwgcHJvcE5hbWUsIGZyb20sIHRvLCBpLCB0YXJnZXRzTGVuZ3RoKSA9PiB7XG4gIC8qKiBAdHlwZSB7V0FBUElUd2VlblZhbHVlfSAqL1xuICBsZXQgdHdlZW5WYWx1ZSA9ICcwJztcbiAgY29uc3QgY29tcHV0ZWRUbyA9ICFpc1VuZCh0bykgPyBub3JtYWxpemVUd2VlblZhbHVlKHByb3BOYW1lLCB0bywgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSA6IGdldENvbXB1dGVkU3R5bGUoJGVsKVtwcm9wTmFtZV07XG4gIGlmICghaXNVbmQoZnJvbSkpIHtcbiAgICBjb25zdCBjb21wdXRlZEZyb20gPSBub3JtYWxpemVUd2VlblZhbHVlKHByb3BOYW1lLCBmcm9tLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpO1xuICAgIHR3ZWVuVmFsdWUgPSBbY29tcHV0ZWRGcm9tLCBjb21wdXRlZFRvXTtcbiAgfSBlbHNlIHtcbiAgICB0d2VlblZhbHVlID0gaXNBcnIodG8pID8gdG8ubWFwKCgvKiogQHR5cGUge2FueX0gKi92KSA9PiBub3JtYWxpemVUd2VlblZhbHVlKHByb3BOYW1lLCB2LCAkZWwsIGksIHRhcmdldHNMZW5ndGgpKSA6IGNvbXB1dGVkVG87XG4gIH1cbiAgcmV0dXJuIHR3ZWVuVmFsdWU7XG59O1xuXG5jbGFzcyBXQUFQSUFuaW1hdGlvbiB7XG4vKipcbiAqIEBwYXJhbSB7RE9NVGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcGFyYW0ge1dBQVBJQW5pbWF0aW9uUGFyYW1zfSBwYXJhbXNcbiAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXRzLCBwYXJhbXMpIHtcblxuICAgIGlmIChnbG9iYWxzLnNjb3BlKSBnbG9iYWxzLnNjb3BlLnJldmVydGlibGVzLnB1c2godGhpcyk7XG5cbiAgICByZWdpc3RlclRyYW5zZm9ybXNQcm9wZXJ0aWVzKCk7XG5cbiAgICBjb25zdCBwYXJzZWRUYXJnZXRzID0gcmVnaXN0ZXJUYXJnZXRzKHRhcmdldHMpO1xuICAgIGNvbnN0IHRhcmdldHNMZW5ndGggPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcblxuICAgIGlmICghdGFyZ2V0c0xlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKGBObyB0YXJnZXQgZm91bmQuIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCB5b3UncmUgdHJ5aW5nIHRvIGFuaW1hdGUgaXMgYWNjZXNzaWJsZSBiZWZvcmUgY3JlYXRpbmcgeW91ciBhbmltYXRpb24uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWFzZSA9IHNldFZhbHVlKHBhcmFtcy5lYXNlLCBwYXJzZVdBQVBJRWFzaW5nKGdsb2JhbHMuZGVmYXVsdHMuZWFzZSkpO1xuICAgIGNvbnN0IHNwcmluZyA9IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlICYmIGVhc2U7XG4gICAgY29uc3QgYXV0b3BsYXkgPSBzZXRWYWx1ZShwYXJhbXMuYXV0b3BsYXksIGdsb2JhbHMuZGVmYXVsdHMuYXV0b3BsYXkpO1xuICAgIGNvbnN0IHNjcm9sbCA9IGF1dG9wbGF5ICYmIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovKGF1dG9wbGF5KS5saW5rID8gYXV0b3BsYXkgOiBmYWxzZTtcbiAgICBjb25zdCBhbHRlcm5hdGUgPSBwYXJhbXMuYWx0ZXJuYXRlICYmIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi8ocGFyYW1zLmFsdGVybmF0ZSkgPT09IHRydWU7XG4gICAgY29uc3QgcmV2ZXJzZWQgPSBwYXJhbXMucmV2ZXJzZWQgJiYgLyoqIEB0eXBlIHtCb29sZWFufSAqLyhwYXJhbXMucmV2ZXJzZWQpID09PSB0cnVlO1xuICAgIGNvbnN0IGxvb3AgPSBzZXRWYWx1ZShwYXJhbXMubG9vcCwgZ2xvYmFscy5kZWZhdWx0cy5sb29wKTtcbiAgICBjb25zdCBpdGVyYXRpb25zID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKChsb29wID09PSB0cnVlIHx8IGxvb3AgPT09IEluZmluaXR5KSA/IEluZmluaXR5IDogaXNOdW0obG9vcCkgPyBsb29wICsgMSA6IDEpO1xuICAgIC8qKiBAdHlwZSB7UGxheWJhY2tEaXJlY3Rpb259ICovXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWx0ZXJuYXRlID8gcmV2ZXJzZWQgPyAnYWx0ZXJuYXRlLXJldmVyc2UnIDogJ2FsdGVybmF0ZScgOiByZXZlcnNlZCA/ICdyZXZlcnNlJyA6ICdub3JtYWwnO1xuICAgIC8qKiBAdHlwZSB7RmlsbE1vZGV9ICovXG4gICAgY29uc3QgZmlsbCA9ICdmb3J3YXJkcyc7XG4gICAgLyoqIEB0eXBlIHtTdHJpbmd9ICovXG4gICAgY29uc3QgZWFzaW5nID0gcGFyc2VXQUFQSUVhc2luZyhlYXNlKTtcbiAgICBjb25zdCB0aW1lU2NhbGUgPSAoZ2xvYmFscy50aW1lU2NhbGUgPT09IDEgPyAxIDogSyk7XG5cbiAgICAvKiogQHR5cGUge0RPTVRhcmdldHNBcnJheX1dICovXG4gICAgdGhpcy50YXJnZXRzID0gcGFyc2VkVGFyZ2V0cztcbiAgICAvKiogQHR5cGUge0FycmF5PGdsb2JhbFRoaXMuQW5pbWF0aW9uPn1dICovXG4gICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgLyoqIEB0eXBlIHtnbG9iYWxUaGlzLkFuaW1hdGlvbn1dICovXG4gICAgdGhpcy5jb250cm9sQW5pbWF0aW9uID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25Db21wbGV0ZSA9IHBhcmFtcy5vbkNvbXBsZXRlIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMubXV0ZUNhbGxiYWNrcyA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLnBhdXNlZCA9ICFhdXRvcGxheSB8fCBzY3JvbGwgIT09IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLnJldmVyc2VkID0gcmV2ZXJzZWQ7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufFNjcm9sbE9ic2VydmVyfSAqL1xuICAgIHRoaXMuYXV0b3BsYXkgPSBhdXRvcGxheTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9zcGVlZCA9IHNldFZhbHVlKHBhcmFtcy5wbGF5YmFja1JhdGUsIGdsb2JhbHMuZGVmYXVsdHMucGxheWJhY2tSYXRlKTtcbiAgICAvKiogQHR5cGUge0Z1bmN0aW9ufSAqL1xuICAgIHRoaXMuX3Jlc29sdmUgPSBub29wOyAvLyBVc2VkIGJ5IC50aGVuKClcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9jb21wbGV0ZWQgPSAwO1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1dICovXG4gICAgdGhpcy5faW5saW5lU3R5bGVzID0gcGFyc2VkVGFyZ2V0cy5tYXAoJGVsID0+ICRlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykpO1xuXG4gICAgcGFyc2VkVGFyZ2V0cy5mb3JFYWNoKCgkZWwsIGkpID0+IHtcblxuICAgICAgY29uc3QgY2FjaGVkVHJhbnNmb3JtcyA9ICRlbFt0cmFuc2Zvcm1zU3ltYm9sXTtcblxuICAgICAgY29uc3QgaGFzSW5kaXZpZHVhbFRyYW5zZm9ybXMgPSB2YWxpZEluZGl2aWR1YWxUcmFuc2Zvcm1zLnNvbWUodCA9PiBwYXJhbXMuaGFzT3duUHJvcGVydHkodCkpO1xuXG4gICAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gKHNwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhzcHJpbmcpLmR1cmF0aW9uIDogZ2V0RnVuY3Rpb25WYWx1ZShzZXRWYWx1ZShwYXJhbXMuZHVyYXRpb24sIGdsb2JhbHMuZGVmYXVsdHMuZHVyYXRpb24pLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpKSAqIHRpbWVTY2FsZTtcbiAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgICAgY29uc3QgZGVsYXkgPSBnZXRGdW5jdGlvblZhbHVlKHNldFZhbHVlKHBhcmFtcy5kZWxheSwgZ2xvYmFscy5kZWZhdWx0cy5kZWxheSksICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkgKiB0aW1lU2NhbGU7XG4gICAgICAvKiogQHR5cGUge0NvbXBvc2l0ZU9wZXJhdGlvbn0gKi9cbiAgICAgIGNvbnN0IGNvbXBvc2l0ZSA9IC8qKiBAdHlwZSB7Q29tcG9zaXRlT3BlcmF0aW9ufSAqLyhzZXRWYWx1ZShwYXJhbXMuY29tcG9zaXRpb24sICdyZXBsYWNlJykpO1xuXG4gICAgICBmb3IgKGxldCBuYW1lIGluIHBhcmFtcykge1xuICAgICAgICBpZiAoIWlzS2V5KG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgLyoqIEB0eXBlIHtQcm9wZXJ0eUluZGV4ZWRLZXlmcmFtZXN9ICovXG4gICAgICAgIGNvbnN0IGtleWZyYW1lcyA9IHt9O1xuICAgICAgICAvKiogQHR5cGUge0tleWZyYW1lQW5pbWF0aW9uT3B0aW9uc30gKi9cbiAgICAgICAgY29uc3QgdHdlZW5QYXJhbXMgPSB7IGl0ZXJhdGlvbnMsIGRpcmVjdGlvbiwgZmlsbCwgZWFzaW5nLCBkdXJhdGlvbiwgZGVsYXksIGNvbXBvc2l0ZSB9O1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gcGFyYW1zW25hbWVdO1xuICAgICAgICBjb25zdCBpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHkgPSBoYXNJbmRpdmlkdWFsVHJhbnNmb3JtcyA/IHZhbGlkVHJhbnNmb3Jtcy5pbmNsdWRlcyhuYW1lKSA/IG5hbWUgOiBzaG9ydFRyYW5zZm9ybXMuZ2V0KG5hbWUpIDogZmFsc2U7XG4gICAgICAgIGxldCBwYXJzZWRQcm9wZXJ0eVZhbHVlO1xuICAgICAgICBpZiAoaXNPYmoocHJvcGVydHlWYWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCB0d2Vlbk9wdGlvbnMgPSAvKiogQHR5cGUge1dBQVBJVHdlZW5PcHRpb25zfSAqLyhwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgICBjb25zdCB0d2Vlbk9wdGlvbnNFYXNlID0gc2V0VmFsdWUodHdlZW5PcHRpb25zLmVhc2UsIGVhc2UpO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuT3B0aW9uc1NwcmluZyA9IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyh0d2Vlbk9wdGlvbnNFYXNlKS5lYXNlICYmIHR3ZWVuT3B0aW9uc0Vhc2U7XG4gICAgICAgICAgY29uc3QgdG8gPSAvKiogQHR5cGUge1dBQVBJVHdlZW5PcHRpb25zfSAqLyh0d2Vlbk9wdGlvbnMpLnRvO1xuICAgICAgICAgIGNvbnN0IGZyb20gPSAvKiogQHR5cGUge1dBQVBJVHdlZW5PcHRpb25zfSAqLyh0d2Vlbk9wdGlvbnMpLmZyb207XG4gICAgICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgICAgICAgdHdlZW5QYXJhbXMuZHVyYXRpb24gPSAodHdlZW5PcHRpb25zU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKHR3ZWVuT3B0aW9uc1NwcmluZykuZHVyYXRpb24gOiBnZXRGdW5jdGlvblZhbHVlKHNldFZhbHVlKHR3ZWVuT3B0aW9ucy5kdXJhdGlvbiwgZHVyYXRpb24pLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpKSAqIHRpbWVTY2FsZTtcbiAgICAgICAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICAgICAgICB0d2VlblBhcmFtcy5kZWxheSA9IGdldEZ1bmN0aW9uVmFsdWUoc2V0VmFsdWUodHdlZW5PcHRpb25zLmRlbGF5LCBkZWxheSksICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkgKiB0aW1lU2NhbGU7XG4gICAgICAgICAgLyoqIEB0eXBlIHtDb21wb3NpdGVPcGVyYXRpb259ICovXG4gICAgICAgICAgdHdlZW5QYXJhbXMuY29tcG9zaXRlID0gLyoqIEB0eXBlIHtDb21wb3NpdGVPcGVyYXRpb259ICovKHNldFZhbHVlKHR3ZWVuT3B0aW9ucy5jb21wb3NpdGlvbiwgY29tcG9zaXRlKSk7XG4gICAgICAgICAgLyoqIEB0eXBlIHtTdHJpbmd9ICovXG4gICAgICAgICAgdHdlZW5QYXJhbXMuZWFzaW5nID0gcGFyc2VXQUFQSUVhc2luZyh0d2Vlbk9wdGlvbnNFYXNlKTtcbiAgICAgICAgICBwYXJzZWRQcm9wZXJ0eVZhbHVlID0gcGFyc2VJbmRpdmlkdWFsVHdlZW5WYWx1ZSgkZWwsIG5hbWUsIGZyb20sIHRvLCBpLCB0YXJnZXRzTGVuZ3RoKTtcbiAgICAgICAgICBpZiAoaW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5KSB7XG4gICAgICAgICAgICBrZXlmcmFtZXNbYC0tJHtpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHl9YF0gPSBwYXJzZWRQcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgY2FjaGVkVHJhbnNmb3Jtc1tpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHldID0gcGFyc2VkUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ZnJhbWVzW25hbWVdID0gcGFyc2VJbmRpdmlkdWFsVHdlZW5WYWx1ZSgkZWwsIG5hbWUsIGZyb20sIHRvLCBpLCB0YXJnZXRzTGVuZ3RoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkV0FBUElBbmltYXRpb24odGhpcywgJGVsLCBuYW1lLCBrZXlmcmFtZXMsIHR3ZWVuUGFyYW1zKTtcbiAgICAgICAgICBpZiAoIWlzVW5kKGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWluZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAkZWwuc3R5bGVbbmFtZV0gPSBrZXlmcmFtZXNbbmFtZV1bMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgLS0ke2luZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eX1gO1xuICAgICAgICAgICAgICAkZWwuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBrZXlmcmFtZXNba2V5XVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlZFByb3BlcnR5VmFsdWUgPSBpc0Fycihwcm9wZXJ0eVZhbHVlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUubWFwKCgvKiogQHR5cGUge2FueX0gKi92KSA9PiBub3JtYWxpemVUd2VlblZhbHVlKG5hbWUsIHYsICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplVHdlZW5WYWx1ZShuYW1lLCAvKiogQHR5cGUge2FueX0gKi8ocHJvcGVydHlWYWx1ZSksICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCk7XG4gICAgICAgICAgaWYgKGluZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eSkge1xuICAgICAgICAgICAga2V5ZnJhbWVzW2AtLSR7aW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5fWBdID0gcGFyc2VkUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICAgIGNhY2hlZFRyYW5zZm9ybXNbaW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5XSA9IHBhcnNlZFByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleWZyYW1lc1tuYW1lXSA9IHBhcnNlZFByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZFdBQVBJQW5pbWF0aW9uKHRoaXMsICRlbCwgbmFtZSwga2V5ZnJhbWVzLCB0d2VlblBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChoYXNJbmRpdmlkdWFsVHJhbnNmb3Jtcykge1xuICAgICAgICBsZXQgdHJhbnNmb3JtcyA9IGVtcHR5U3RyaW5nO1xuICAgICAgICBmb3IgKGxldCB0IGluIGNhY2hlZFRyYW5zZm9ybXMpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1zICs9IGAke3RyYW5zZm9ybXNGcmFnbWVudFN0cmluZ3NbdF19dmFyKC0tJHt0fSkpIGA7XG4gICAgICAgIH1cbiAgICAgICAgJGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybXM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqLyh0aGlzLmF1dG9wbGF5KS5saW5rKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAY2FsbGJhY2sgZm9yRWFjaENhbGxiYWNrXG4gICAqIEBwYXJhbSB7Z2xvYmFsVGhpcy5BbmltYXRpb259IGFuaW1hdGlvblxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtICB7Zm9yRWFjaENhbGxiYWNrfFN0cmluZ30gY2FsbGJhY2tcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYiA9IGlzU3RyKGNhbGxiYWNrKSA/IGEgPT4gYVtjYWxsYmFja10oKSA6IGNhbGxiYWNrO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHNwZWVkICovXG4gIHNldCBzcGVlZChzcGVlZCkge1xuICAgIHRoaXMuX3NwZWVkID0gK3NwZWVkO1xuICAgIHRoaXMuZm9yRWFjaChhbmltID0+IGFuaW0ucGxheWJhY2tSYXRlID0gc3BlZWQpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgIGNvbnN0IGNvbnRyb2xBbmltYXRpb24gPSB0aGlzLmNvbnRyb2xBbmltYXRpb247XG4gICAgY29uc3QgdGltZVNjYWxlID0gZ2xvYmFscy50aW1lU2NhbGU7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVkID8gdGhpcy5kdXJhdGlvbiA6IGNvbnRyb2xBbmltYXRpb24gPyArY29udHJvbEFuaW1hdGlvbi5jdXJyZW50VGltZSAqICh0aW1lU2NhbGUgPT09IDEgPyAxIDogdGltZVNjYWxlKSA6IDA7XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgKi9cbiAgc2V0IGN1cnJlbnRUaW1lKHRpbWUpIHtcbiAgICBjb25zdCB0ID0gdGltZSAqIChnbG9iYWxzLnRpbWVTY2FsZSA9PT0gMSA/IDEgOiBLKTtcbiAgICB0aGlzLmZvckVhY2goYW5pbSA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGFuaW1hdGlvbiBwbGF5U3RhdGUgaXMgbm90ICdwYXVzZWQnIGluIG9yZGVyIHRvIHByb3Blcmx5IHRyaWdnZXIgYW4gb25maW5pc2ggY2FsbGJhY2suXG4gICAgICAvLyBUaGUgXCJwYXVzZWRcIiBwbGF5IHN0YXRlIHN1cGVyc2VkZXMgdGhlIFwiZmluaXNoZWRcIiBwbGF5IHN0YXRlOyBpZiB0aGUgYW5pbWF0aW9uIGlzIGJvdGggcGF1c2VkIGFuZCBmaW5pc2hlZCwgdGhlIFwicGF1c2VkXCIgc3RhdGUgaXMgdGhlIG9uZSB0aGF0IHdpbGwgYmUgcmVwb3J0ZWQuXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQW5pbWF0aW9uL2ZpbmlzaF9ldmVudFxuICAgICAgaWYgKHQgPj0gdGhpcy5kdXJhdGlvbikgYW5pbS5wbGF5KCk7XG4gICAgICBhbmltLmN1cnJlbnRUaW1lID0gdDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZSAvIHRoaXMuZHVyYXRpb247XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHByb2dyZXNzICovXG4gIHNldCBwcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIHRoaXMuZm9yRWFjaChhbmltID0+IGFuaW0uY3VycmVudFRpbWUgPSBwcm9ncmVzcyAqIHRoaXMuZHVyYXRpb24gfHwgMCk7XG4gIH1cblxuICByZXN1bWUoKSB7XG4gICAgaWYgKCF0aGlzLnBhdXNlZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAvLyBUT0RPOiBTdG9yZSB0aGUgY3VycmVudCB0aW1lLCBhbmQgc2VlayBiYWNrIHRvIHRoZSBsYXN0IHBvc2l0aW9uXG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaCgncGxheScpO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaCgncGF1c2UnKTtcbiAgfVxuXG4gIGFsdGVybmF0ZSgpIHtcbiAgICB0aGlzLnJldmVyc2VkID0gIXRoaXMucmV2ZXJzZWQ7XG4gICAgdGhpcy5mb3JFYWNoKCdyZXZlcnNlJyk7XG4gICAgaWYgKHRoaXMucGF1c2VkKSB0aGlzLmZvckVhY2goJ3BhdXNlJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIGlmICh0aGlzLnJldmVyc2VkKSB0aGlzLmFsdGVybmF0ZSgpO1xuICAgIHJldHVybiB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgcmV2ZXJzZSgpIHtcbiAgICBpZiAoIXRoaXMucmV2ZXJzZWQpIHRoaXMuYWx0ZXJuYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuIC8qKlxuICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lXG4gICogQHBhcmFtIHtCb29sZWFufSBtdXRlQ2FsbGJhY2tzXG4gICovXG4gIHNlZWsodGltZSwgbXV0ZUNhbGxiYWNrcyA9IGZhbHNlKSB7XG4gICAgaWYgKG11dGVDYWxsYmFja3MpIHRoaXMubXV0ZUNhbGxiYWNrcyA9IHRydWU7XG4gICAgaWYgKHRpbWUgPCB0aGlzLmR1cmF0aW9uKSB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuICAgIHRoaXMubXV0ZUNhbGxiYWNrcyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnBhdXNlZCkgdGhpcy5wYXVzZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnNlZWsoMCwgdHJ1ZSkucmVzdW1lKCk7XG4gIH1cblxuICBjb21taXRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaCgnY29tbWl0U3R5bGVzJyk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWVrKHRoaXMuZHVyYXRpb24pO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuZm9yRWFjaCgnY2FuY2VsJyk7XG4gICAgcmV0dXJuIHRoaXMucGF1c2UoKTtcbiAgfVxuXG4gIHJldmVydCgpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCgkZWwsIGkpID0+ICRlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5faW5saW5lU3R5bGVzW2ldKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge1dBQVBJQ2FsbGJhY2t9IFtjYWxsYmFja11cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHRoZW4oY2FsbGJhY2sgPSBub29wKSB7XG4gICAgY29uc3QgdGhlbiA9IHRoaXMudGhlbjtcbiAgICBjb25zdCBvblJlc29sdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRoZW4gPSBudWxsO1xuICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICB0aGlzLnRoZW4gPSB0aGVuO1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IG5vb3A7XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UociA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gKCkgPT4gcihvblJlc29sdmUoKSk7XG4gICAgICBpZiAodGhpcy5jb21wbGV0ZWQpIHRoaXMuX3Jlc29sdmUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHdhYXBpID0ge1xuLyoqXG4gKiBAcGFyYW0ge0RPTVRhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHBhcmFtIHtXQUFQSUFuaW1hdGlvblBhcmFtc30gcGFyYW1zXG4gKiBAcmV0dXJuIHtXQUFQSUFuaW1hdGlvbn1cbiAqL1xuICBhbmltYXRlOiAodGFyZ2V0cywgcGFyYW1zKSA9PiBuZXcgV0FBUElBbmltYXRpb24odGFyZ2V0cywgcGFyYW1zKSxcbiAgY29udmVydEVhc2U6IGVhc2luZ1RvTGluZWFyXG59O1xuXG5cblxuXG4vKipcbiAqIEBwYXJhbSAge0NhbGxiYWNrPFRpbWVyPn0gW2NhbGxiYWNrXVxuICogQHJldHVybiB7VGltZXJ9XG4gKi9cbmNvbnN0IHN5bmMgPSAoY2FsbGJhY2sgPSBub29wKSA9PiB7XG4gIHJldHVybiBuZXcgVGltZXIoeyBkdXJhdGlvbjogMSAqIGdsb2JhbHMudGltZVNjYWxlLCBvbkNvbXBsZXRlOiBjYWxsYmFjayB9LCBudWxsLCAwKS5yZXN1bWUoKTtcbn07XG5cbi8qKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtET01UYXJnZXRTZWxlY3Rvcn0gdGFyZ2V0U2VsZWN0b3JcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICBwcm9wTmFtZVxuICogQHJldHVybiB7U3RyaW5nfVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7SlNUYXJnZXRzUGFyYW19IHRhcmdldFNlbGVjdG9yXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgcHJvcE5hbWVcbiAqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtET01UYXJnZXRzUGFyYW19IHRhcmdldFNlbGVjdG9yXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgIHByb3BOYW1lXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgIHVuaXRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gdGFyZ2V0U2VsZWN0b3JcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgcHJvcE5hbWVcbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgICAgdW5pdFxuICogQHJldHVybiB7TnVtYmVyfVxuICpcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gICB0YXJnZXRTZWxlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgIHByb3BOYW1lXG4gKiBAcGFyYW0gIHtTdHJpbmd8Qm9vbGVhbn0gW3VuaXRdXG4gKi9cbmZ1bmN0aW9uIGdldFRhcmdldFZhbHVlKHRhcmdldFNlbGVjdG9yLCBwcm9wTmFtZSwgdW5pdCkge1xuICBjb25zdCB0YXJnZXRzID0gcmVnaXN0ZXJUYXJnZXRzKHRhcmdldFNlbGVjdG9yKTtcbiAgaWYgKCF0YXJnZXRzLmxlbmd0aCkgcmV0dXJuO1xuICBjb25zdCBbIHRhcmdldCBdID0gdGFyZ2V0cztcbiAgY29uc3QgdHdlZW5UeXBlID0gZ2V0VHdlZW5UeXBlKHRhcmdldCwgcHJvcE5hbWUpO1xuICBjb25zdCBub3JtYWxpemVQcm9wTmFtZSA9IHNhbml0aXplUHJvcGVydHlOYW1lKHByb3BOYW1lLCB0YXJnZXQsIHR3ZWVuVHlwZSk7XG4gIGxldCBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxBbmltYXRhYmxlVmFsdWUodGFyZ2V0LCBub3JtYWxpemVQcm9wTmFtZSk7XG4gIGlmIChpc1VuZCh1bml0KSkge1xuICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGRlY29tcG9zZVJhd1ZhbHVlKG9yaWdpbmFsVmFsdWUsIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlKTtcbiAgICBpZiAoZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUudCA9PT0gdmFsdWVUeXBlcy5OVU1CRVIgfHwgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUudCA9PT0gdmFsdWVUeXBlcy5VTklUKSB7XG4gICAgICBpZiAodW5pdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRWYWx1ZSA9IGNvbnZlcnRWYWx1ZVVuaXQoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCksIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLCAvKiogQHR5cGUge1N0cmluZ30gKi8odW5pdCksIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGAke3JvdW5kKGNvbnZlcnRlZFZhbHVlLm4sIGdsb2JhbHMucHJlY2lzaW9uKX0ke2NvbnZlcnRlZFZhbHVlLnV9YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19ICAgIHRhcmdldHNcbiAqIEBwYXJhbSAge0FuaW1hdGlvblBhcmFtc30gcGFyYW1ldGVyc1xuICogQHJldHVybiB7SlNBbmltYXRpb259XG4gKi9cbmNvbnN0IHNldFRhcmdldFZhbHVlcyA9ICh0YXJnZXRzLCBwYXJhbWV0ZXJzKSA9PiB7XG4gIGlmIChpc1VuZChwYXJhbWV0ZXJzKSkgcmV0dXJuO1xuICBwYXJhbWV0ZXJzLmR1cmF0aW9uID0gbWluVmFsdWU7XG4gIC8vIERvIG5vdCBvdmVycmlkZXMgY3VycmVudGx5IGFjdGl2ZSB0d2VlbnMgYnkgZGVmYXVsdFxuICBwYXJhbWV0ZXJzLmNvbXBvc2l0aW9uID0gc2V0VmFsdWUocGFyYW1ldGVycy5jb21wb3NpdGlvbiwgY29tcG9zaXRpb25UeXBlcy5ub25lKTtcbiAgLy8gU2tpcCBpbml0KCkgYW5kIGZvcmNlIHJlbmRlcmluZyBieSBwbGF5aW5nIHRoZSBhbmltYXRpb25cbiAgcmV0dXJuIG5ldyBKU0FuaW1hdGlvbih0YXJnZXRzLCBwYXJhbWV0ZXJzLCBudWxsLCAwLCB0cnVlKS5yZXN1bWUoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0c0FycmF5fSB0YXJnZXRzQXJyYXlcbiAqIEBwYXJhbSAge0pTQW5pbWF0aW9ufSAgICBhbmltYXRpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgW3Byb3BlcnR5TmFtZV1cbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9uID0gKHRhcmdldHNBcnJheSwgYW5pbWF0aW9uLCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgbGV0IHR3ZWVuc01hdGNoZXNUYXJnZXRzID0gZmFsc2U7XG4gIGZvckVhY2hDaGlsZHJlbihhbmltYXRpb24sICgvKipAdHlwZSB7VHdlZW59ICovdHdlZW4pID0+IHtcbiAgICBjb25zdCB0d2VlblRhcmdldCA9IHR3ZWVuLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0c0FycmF5LmluY2x1ZGVzKHR3ZWVuVGFyZ2V0KSkge1xuICAgICAgY29uc3QgdHdlZW5OYW1lID0gdHdlZW4ucHJvcGVydHk7XG4gICAgICBjb25zdCB0d2VlblR5cGUgPSB0d2Vlbi5fdHdlZW5UeXBlO1xuICAgICAgY29uc3Qgbm9ybWFsaXplUHJvcE5hbWUgPSBzYW5pdGl6ZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUsIHR3ZWVuVGFyZ2V0LCB0d2VlblR5cGUpO1xuICAgICAgaWYgKCFub3JtYWxpemVQcm9wTmFtZSB8fCBub3JtYWxpemVQcm9wTmFtZSAmJiBub3JtYWxpemVQcm9wTmFtZSA9PT0gdHdlZW5OYW1lKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0byBmbGFnIHRoZSBwcmV2aW91cyBDU1MgdHJhbnNmb3JtIHR3ZWVuIHRvIHJlbmRlclRyYW5zZm9ybVxuICAgICAgICBpZiAodHdlZW4ucGFyZW50Ll90YWlsID09PSB0d2VlbiAmJlxuICAgICAgICAgICAgdHdlZW4uX3R3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5UUkFOU0ZPUk0gJiZcbiAgICAgICAgICAgIHR3ZWVuLl9wcmV2ICYmXG4gICAgICAgICAgICB0d2Vlbi5fcHJldi5fdHdlZW5UeXBlID09PSB0d2VlblR5cGVzLlRSQU5TRk9STVxuICAgICAgICApIHtcbiAgICAgICAgICB0d2Vlbi5fcHJldi5fcmVuZGVyVHJhbnNmb3JtcyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlcyB0aGUgdHdlZW4gZnJvbSB0aGUgc2VsZWN0ZWQgYW5pbWF0aW9uXG4gICAgICAgIHJlbW92ZUNoaWxkKGFuaW1hdGlvbiwgdHdlZW4pO1xuICAgICAgICAvLyBEZXRhY2ggdGhlIHR3ZWVuIGZyb20gaXRzIHNpYmxpbmdzIHRvIG1ha2Ugc3VyZSBibGVuZGVkIHR3ZWVucyBhcmUgY29ycmVjdGxseSByZW1vdmVkXG4gICAgICAgIHJlbW92ZVR3ZWVuU2xpYmxpbmdzKHR3ZWVuKTtcbiAgICAgICAgdHdlZW5zTWF0Y2hlc1RhcmdldHMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSk7XG4gIHJldHVybiB0d2VlbnNNYXRjaGVzVGFyZ2V0cztcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcGFyYW0gIHtSZW5kZXJhYmxlfFdBQVBJQW5pbWF0aW9ufSBbcmVuZGVyYWJsZV1cbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdXG4gKiBAcmV0dXJuIHtUYXJnZXRzQXJyYXl9XG4gKi9cbmNvbnN0IHJlbW92ZSA9ICh0YXJnZXRzLCByZW5kZXJhYmxlLCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgY29uc3QgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBjb25zdCBwYXJlbnQgPSAvKiogQHR5cGUge1JlbmRlcmFibGV8dHlwZW9mIGVuZ2luZX0gKiovKHJlbmRlcmFibGUgPyByZW5kZXJhYmxlIDogZW5naW5lKTtcbiAgY29uc3Qgd2FhcGlBbmltYXRpb24gPSByZW5kZXJhYmxlICYmIC8qKiBAdHlwZSB7V0FBUElBbmltYXRpb259ICovKHJlbmRlcmFibGUpLmNvbnRyb2xBbmltYXRpb24gJiYgLyoqIEB0eXBlIHtXQUFQSUFuaW1hdGlvbn0gKi8ocmVuZGVyYWJsZSk7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGFyZ2V0c0FycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0ICRlbCA9IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAgKi8odGFyZ2V0c0FycmF5W2ldKTtcbiAgICByZW1vdmVXQUFQSUFuaW1hdGlvbigkZWwsIHByb3BlcnR5TmFtZSwgd2FhcGlBbmltYXRpb24pO1xuICB9XG4gIGxldCByZW1vdmVNYXRjaGVzO1xuICBpZiAocGFyZW50Ll9oYXNDaGlsZHJlbikge1xuICAgIGxldCBpdGVyYXRpb25EdXJhdGlvbiA9IDA7XG4gICAgZm9yRWFjaENoaWxkcmVuKHBhcmVudCwgKC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi9jaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZC5faGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgcmVtb3ZlTWF0Y2hlcyA9IHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9uKHRhcmdldHNBcnJheSwgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8oY2hpbGQpLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoaWxkIGZyb20gaXRzIHBhcmVudCBpZiBubyB0d2VlbnMgYW5kIG5vIGNoaWxkcmVuIGxlZnQgYWZ0ZXIgdGhlIHJlbW92YWxcbiAgICAgICAgaWYgKHJlbW92ZU1hdGNoZXMgJiYgIWNoaWxkLl9oZWFkKSB7XG4gICAgICAgICAgY2hpbGQuY2FuY2VsKCk7XG4gICAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50LCBjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgaXRlcmF0aW9uRHVyYXRpb24gdmFsdWUgdG8gaGFuZGxlIG9uQ29tcGxldGUgd2l0aCBsYXN0IGNoaWxkIGluIHJlbmRlcigpXG4gICAgICAgICAgY29uc3QgY2hpbGRUTE9mZnNldCA9IGNoaWxkLl9vZmZzZXQgKyBjaGlsZC5fZGVsYXk7XG4gICAgICAgICAgY29uc3QgY2hpbGREdXIgPSBjaGlsZFRMT2Zmc2V0ICsgY2hpbGQuZHVyYXRpb247XG4gICAgICAgICAgaWYgKGNoaWxkRHVyID4gaXRlcmF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAgIGl0ZXJhdGlvbkR1cmF0aW9uID0gY2hpbGREdXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gYWxzbyByZW1vdmUgZW5naW5lJ3MgY2hpbGRyZW4gdGFyZ2V0c1xuICAgICAgLy8gTk9URTogQXZvaWQgcmVjdXJzaW9uP1xuICAgICAgaWYgKGNoaWxkLl9oZWFkKSB7XG4gICAgICAgIHJlbW92ZSh0YXJnZXRzLCBjaGlsZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLl9oYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRydWUpO1xuICAgIC8vIFVwZGF0ZSBpdGVyYXRpb25EdXJhdGlvbiB2YWx1ZSB0byBoYW5kbGUgb25Db21wbGV0ZSB3aXRoIGxhc3QgY2hpbGQgaW4gcmVuZGVyKClcbiAgICBpZiAoIWlzVW5kKC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi8ocGFyZW50KS5pdGVyYXRpb25EdXJhdGlvbikpIHtcbiAgICAgIC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi8ocGFyZW50KS5pdGVyYXRpb25EdXJhdGlvbiA9IGl0ZXJhdGlvbkR1cmF0aW9uO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZW1vdmVNYXRjaGVzID0gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb24oXG4gICAgICB0YXJnZXRzQXJyYXksXG4gICAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyhwYXJlbnQpLFxuICAgICAgcHJvcGVydHlOYW1lXG4gICAgKTtcbiAgfVxuXG4gIGlmIChyZW1vdmVNYXRjaGVzICYmICFwYXJlbnQuX2hlYWQpIHtcbiAgICBwYXJlbnQuX2hhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgLy8gQ2FuY2VsIHRoZSBwYXJlbnQgaWYgdGhlcmUgYXJlIG5vIHR3ZWVucyBhbmQgbm8gY2hpbGRyZW4gbGVmdCBhZnRlciB0aGUgcmVtb3ZhbFxuICAgIC8vIFdlIGhhdmUgdG8gY2hlY2sgaWYgdGhlIC5jYW5jZWwoKSBtZXRob2QgZXhpc3QgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgdGhlIGVuZ2luZSBpdHNlbGZcbiAgICBpZiAoLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqLyhwYXJlbnQpLmNhbmNlbCkgLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqLyhwYXJlbnQpLmNhbmNlbCgpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldHNBcnJheTtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtkZWNpbWFsTGVuZ3RoXVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCByYW5kb20gPSAobWluLCBtYXgsIGRlY2ltYWxMZW5ndGgpID0+IHsgY29uc3QgbSA9IDEwICoqIChkZWNpbWFsTGVuZ3RoIHx8IDApOyByZXR1cm4gZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgKDEgLyBtKSkgKyBtaW4pICogbSkgLyBtIH07XG5cbi8qKlxuICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBpdGVtc1xuICogQHJldHVybiB7YW55fVxuICovXG5jb25zdCByYW5kb21QaWNrID0gaXRlbXMgPT4gaXRlbXNbcmFuZG9tKDAsIGl0ZW1zLmxlbmd0aCAtIDEpXTtcblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9ib3N0Lm9ja3Mub3JnL21pa2Uvc2h1ZmZsZS9cbiAqIEBwYXJhbSAge0FycmF5fSBpdGVtc1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBpdGVtcyA9PiB7XG4gIGxldCBtID0gaXRlbXMubGVuZ3RoLCB0LCBpO1xuICB3aGlsZSAobSkgeyBpID0gcmFuZG9tKDAsIC0tbSk7IHQgPSBpdGVtc1ttXTsgaXRlbXNbbV0gPSBpdGVtc1tpXTsgaXRlbXNbaV0gPSB0OyB9XG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gdlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWNpbWFsTGVuZ3RoXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHJvdW5kUGFkID0gKHYsIGRlY2ltYWxMZW5ndGgpID0+ICgrdikudG9GaXhlZChkZWNpbWFsTGVuZ3RoKTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEBwYXJhbSAge051bWJlcn0gdG90YWxMZW5ndGhcbiAqIEBwYXJhbSAge1N0cmluZ30gcGFkU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHBhZFN0YXJ0ID0gKHYsIHRvdGFsTGVuZ3RoLCBwYWRTdHJpbmcpID0+IGAke3Z9YC5wYWRTdGFydCh0b3RhbExlbmd0aCwgcGFkU3RyaW5nKTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEBwYXJhbSAge051bWJlcn0gdG90YWxMZW5ndGhcbiAqIEBwYXJhbSAge1N0cmluZ30gcGFkU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHBhZEVuZCA9ICh2LCB0b3RhbExlbmd0aCwgcGFkU3RyaW5nKSA9PiBgJHt2fWAucGFkRW5kKHRvdGFsTGVuZ3RoLCBwYWRTdHJpbmcpO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHdyYXAgPSAodiwgbWluLCBtYXgpID0+ICgoKHYgLSBtaW4pICUgKG1heCAtIG1pbikgKyAobWF4IC0gbWluKSkgJSAobWF4IC0gbWluKSkgKyBtaW47XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBpbkxvd1xuICogQHBhcmFtICB7TnVtYmVyfSBpbkhpZ2hcbiAqIEBwYXJhbSAge051bWJlcn0gb3V0TG93XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG91dEhpZ2hcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgbWFwUmFuZ2UgPSAodmFsdWUsIGluTG93LCBpbkhpZ2gsIG91dExvdywgb3V0SGlnaCkgPT4gb3V0TG93ICsgKCh2YWx1ZSAtIGluTG93KSAvIChpbkhpZ2ggLSBpbkxvdykpICogKG91dEhpZ2ggLSBvdXRMb3cpO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gZGVncmVlc1xuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBkZWdUb1JhZCA9IGRlZ3JlZXMgPT4gZGVncmVlcyAqIFBJIC8gMTgwO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gcmFkaWFuc1xuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCByYWRUb0RlZyA9IHJhZGlhbnMgPT4gcmFkaWFucyAqIDE4MCAvIFBJO1xuXG4vKipcbiAqIGh0dHBzOi8vd3d3LnJvcnlkcmlzY29sbC5jb20vMjAxNi8wMy8wNy9mcmFtZS1yYXRlLWluZGVwZW5kZW50LWRhbXBpbmctdXNpbmctbGVycC9cbiAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSAge051bWJlcn0gZW5kXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFtb3VudFxuICogQHBhcmFtICB7UmVuZGVyYWJsZXxCb29sZWFufSBbcmVuZGVyYWJsZV1cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgbGVycCA9IChzdGFydCwgZW5kLCBhbW91bnQsIHJlbmRlcmFibGUpID0+IHtcbiAgbGV0IGR0ID0gSyAvIGdsb2JhbHMuZGVmYXVsdHMuZnJhbWVSYXRlO1xuICBpZiAocmVuZGVyYWJsZSAhPT0gZmFsc2UpIHtcbiAgICBjb25zdCB0aWNrZXIgPSAvKiogQHR5cGUgUmVuZGVyYWJsZSAqL1xuICAgICAgICAgICAgICAgICAgIChyZW5kZXJhYmxlKSB8fFxuICAgICAgICAgICAgICAgICAgIChlbmdpbmUuX2hhc0NoaWxkcmVuICYmIGVuZ2luZSk7XG4gICAgaWYgKHRpY2tlciAmJiB0aWNrZXIuZGVsdGFUaW1lKSB7XG4gICAgICBkdCA9IHRpY2tlci5kZWx0YVRpbWU7XG4gICAgfVxuICB9XG4gIGNvbnN0IHQgPSAxIC0gTWF0aC5leHAoLWFtb3VudCAqIGR0ICogLjEpO1xuICByZXR1cm4gIWFtb3VudCA/IHN0YXJ0IDogYW1vdW50ID09PSAxID8gZW5kIDogKDEgLSB0KSAqIHN0YXJ0ICsgdCAqIGVuZDtcbn07XG5cbi8vIENoYWluLWFibGUgdXRpbGl0aWVzXG5cbi8qKlxuICogQGNhbGxiYWNrIFV0aWxpdHlGdW5jdGlvblxuICogQHBhcmFtIHsuLi4qfSBhcmdzXG4gKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfVxuICpcbiAqIEBwYXJhbSB7VXRpbGl0eUZ1bmN0aW9ufSBmblxuICogQHBhcmFtIHtOdW1iZXJ9IFtsYXN0PTBdXG4gKiBAcmV0dXJuIHtmdW5jdGlvbiguLi4oTnVtYmVyfFN0cmluZykpOiBmdW5jdGlvbihOdW1iZXJ8U3RyaW5nKTogKE51bWJlcnxTdHJpbmcpfVxuICovXG5jb25zdCBjdXJyeSA9IChmbiwgbGFzdCA9IDApID0+ICguLi5hcmdzKSA9PiBsYXN0ID8gdiA9PiBmbiguLi5hcmdzLCB2KSA6IHYgPT4gZm4odiwgLi4uYXJncyk7XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge2Z1bmN0aW9uKC4uLihOdW1iZXJ8U3RyaW5nKSl9XG4gKi9cbmNvbnN0IGNoYWluID0gZm4gPT4ge1xuICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgcmV0dXJuIG5ldyBQcm94eShub29wLCB7XG4gICAgICBhcHBseTogKF8sIF9fLCBbdl0pID0+IHJlc3VsdCh2KSxcbiAgICAgIGdldDogKF8sIHByb3ApID0+IGNoYWluKC8qKkBwYXJhbSB7Li4uTnVtYmVyfFN0cmluZ30gbmV4dEFyZ3MgKi8oLi4ubmV4dEFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFJlc3VsdCA9IHV0aWxzW3Byb3BdKC4uLm5leHRBcmdzKTtcbiAgICAgICAgcmV0dXJuICgvKipAdHlwZSB7TnVtYmVyfFN0cmluZ30gKi92KSA9PiBuZXh0UmVzdWx0KHJlc3VsdCh2KSk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7VXRpbGl0eUZ1bmN0aW9ufSBmblxuICogQHBhcmFtIHtOdW1iZXJ9IFtyaWdodF1cbiAqIEByZXR1cm4ge2Z1bmN0aW9uKC4uLihOdW1iZXJ8U3RyaW5nKSk6IFV0aWxpdHlGdW5jdGlvbn1cbiAqL1xuY29uc3QgbWFrZUNoYWluYWJsZSA9IChmbiwgcmlnaHQgPSAwKSA9PiAoLi4uYXJncykgPT4gKGFyZ3MubGVuZ3RoIDwgZm4ubGVuZ3RoID8gY2hhaW4oY3VycnkoZm4sIHJpZ2h0KSkgOiBmbikoLi4uYXJncyk7XG5cbi8qKlxuICogQGNhbGxiYWNrIENoYWluZWRVdGlsc1Jlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gQ2hhaW5hYmxlVXRpbHNcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZENsYW1wfSBjbGFtcFxuICogQHByb3BlcnR5IHtDaGFpbmVkUm91bmR9IHJvdW5kXG4gKiBAcHJvcGVydHkge0NoYWluZWRTbmFwfSBzbmFwXG4gKiBAcHJvcGVydHkge0NoYWluZWRXcmFwfSB3cmFwXG4gKiBAcHJvcGVydHkge0NoYWluZWRJbnRlcnBvbGF0ZX0gaW50ZXJwb2xhdGVcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZE1hcFJhbmdlfSBtYXBSYW5nZVxuICogQHByb3BlcnR5IHtDaGFpbmVkUm91bmRQYWR9IHJvdW5kUGFkXG4gKiBAcHJvcGVydHkge0NoYWluZWRQYWRTdGFydH0gcGFkU3RhcnRcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZFBhZEVuZH0gcGFkRW5kXG4gKiBAcHJvcGVydHkge0NoYWluZWREZWdUb1JhZH0gZGVnVG9SYWRcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZFJhZFRvRGVnfSByYWRUb0RlZ1xuICpcbiAqIEB0eXBlZGVmIHtDaGFpbmFibGVVdGlscyAmIENoYWluZWRVdGlsc1Jlc3VsdH0gQ2hhaW5hYmxlVXRpbFxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkQ2xhbXBcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRSb3VuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxMZW5ndGhcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRTbmFwXG4gKiBAcGFyYW0ge051bWJlcn0gaW5jcmVtZW50XG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkV3JhcFxuICogQHBhcmFtIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZEludGVycG9sYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRNYXBSYW5nZVxuICogQHBhcmFtIHtOdW1iZXJ9IGluTG93XG4gKiBAcGFyYW0ge051bWJlcn0gaW5IaWdoXG4gKiBAcGFyYW0ge051bWJlcn0gb3V0TG93XG4gKiBAcGFyYW0ge051bWJlcn0gb3V0SGlnaFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFJvdW5kUGFkXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbExlbmd0aFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFBhZFN0YXJ0XG4gKiBAcGFyYW0ge051bWJlcn0gdG90YWxMZW5ndGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYWRTdHJpbmdcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRQYWRFbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbExlbmd0aFxuICogQHBhcmFtIHtTdHJpbmd9IHBhZFN0cmluZ1xuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZERlZ1RvUmFkXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkUmFkVG9EZWdcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKi9cblxuY29uc3QgdXRpbHMgPSB7XG4gICQ6IHJlZ2lzdGVyVGFyZ2V0cyxcbiAgZ2V0OiBnZXRUYXJnZXRWYWx1ZSxcbiAgc2V0OiBzZXRUYXJnZXRWYWx1ZXMsXG4gIHJlbW92ZSxcbiAgY2xlYW5JbmxpbmVTdHlsZXMsXG4gIHJhbmRvbSxcbiAgcmFuZG9tUGljayxcbiAgc2h1ZmZsZSxcbiAgbGVycCxcbiAgc3luYyxcbiAgY2xhbXA6IC8qKiBAdHlwZSB7dHlwZW9mIGNsYW1wICYgQ2hhaW5lZENsYW1wfSAqLyhtYWtlQ2hhaW5hYmxlKGNsYW1wKSksXG4gIHJvdW5kOiAvKiogQHR5cGUge3R5cGVvZiByb3VuZCAmIENoYWluZWRSb3VuZH0gKi8obWFrZUNoYWluYWJsZShyb3VuZCkpLFxuICBzbmFwOiAvKiogQHR5cGUge3R5cGVvZiBzbmFwICYgQ2hhaW5lZFNuYXB9ICovKG1ha2VDaGFpbmFibGUoc25hcCkpLFxuICB3cmFwOiAvKiogQHR5cGUge3R5cGVvZiB3cmFwICYgQ2hhaW5lZFdyYXB9ICovKG1ha2VDaGFpbmFibGUod3JhcCkpLFxuICBpbnRlcnBvbGF0ZTogLyoqIEB0eXBlIHt0eXBlb2YgaW50ZXJwb2xhdGUgJiBDaGFpbmVkSW50ZXJwb2xhdGV9ICovKG1ha2VDaGFpbmFibGUoaW50ZXJwb2xhdGUsIDEpKSxcbiAgbWFwUmFuZ2U6IC8qKiBAdHlwZSB7dHlwZW9mIG1hcFJhbmdlICYgQ2hhaW5lZE1hcFJhbmdlfSAqLyhtYWtlQ2hhaW5hYmxlKG1hcFJhbmdlKSksXG4gIHJvdW5kUGFkOiAvKiogQHR5cGUge3R5cGVvZiByb3VuZFBhZCAmIENoYWluZWRSb3VuZFBhZH0gKi8obWFrZUNoYWluYWJsZShyb3VuZFBhZCkpLFxuICBwYWRTdGFydDogLyoqIEB0eXBlIHt0eXBlb2YgcGFkU3RhcnQgJiBDaGFpbmVkUGFkU3RhcnR9ICovKG1ha2VDaGFpbmFibGUocGFkU3RhcnQpKSxcbiAgcGFkRW5kOiAvKiogQHR5cGUge3R5cGVvZiBwYWRFbmQgJiBDaGFpbmVkUGFkRW5kfSAqLyhtYWtlQ2hhaW5hYmxlKHBhZEVuZCkpLFxuICBkZWdUb1JhZDogLyoqIEB0eXBlIHt0eXBlb2YgZGVnVG9SYWQgJiBDaGFpbmVkRGVnVG9SYWR9ICovKG1ha2VDaGFpbmFibGUoZGVnVG9SYWQpKSxcbiAgcmFkVG9EZWc6IC8qKiBAdHlwZSB7dHlwZW9mIHJhZFRvRGVnICYgQ2hhaW5lZFJhZFRvRGVnfSAqLyhtYWtlQ2hhaW5hYmxlKHJhZFRvRGVnKSksXG59O1xuXG5cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtOdW1iZXJ8U3RyaW5nfEZ1bmN0aW9ufSBUaW1lUG9zaXRpb25cbiAqL1xuXG4vKipcbiAqIFRpbWVsaW5lJ3MgY2hpbGRyZW4gb2Zmc2V0cyBwb3NpdGlvbnMgcGFyc2VyXG4gKiBAcGFyYW0gIHtUaW1lbGluZX0gdGltZWxpbmVcbiAqIEBwYXJhbSAge1N0cmluZ30gdGltZVBvc2l0aW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGdldFByZXZDaGlsZE9mZnNldCA9ICh0aW1lbGluZSwgdGltZVBvc2l0aW9uKSA9PiB7XG4gIGlmIChzdHJpbmdTdGFydHNXaXRoKHRpbWVQb3NpdGlvbiwgJzwnKSkge1xuICAgIGNvbnN0IGdvVG9QcmV2QW5pbWF0aW9uT2Zmc2V0ID0gdGltZVBvc2l0aW9uWzFdID09PSAnPCc7XG4gICAgY29uc3QgcHJldkFuaW1hdGlvbiA9IC8qKiBAdHlwZSB7VGlja2FibGV9ICovKHRpbWVsaW5lLl90YWlsKTtcbiAgICBjb25zdCBwcmV2T2Zmc2V0ID0gcHJldkFuaW1hdGlvbiA/IHByZXZBbmltYXRpb24uX29mZnNldCArIHByZXZBbmltYXRpb24uX2RlbGF5IDogMDtcbiAgICByZXR1cm4gZ29Ub1ByZXZBbmltYXRpb25PZmZzZXQgPyBwcmV2T2Zmc2V0IDogcHJldk9mZnNldCArIHByZXZBbmltYXRpb24uZHVyYXRpb247XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGltZWxpbmV9IHRpbWVsaW5lXG4gKiBAcGFyYW0gIHtUaW1lUG9zaXRpb259IFt0aW1lUG9zaXRpb25dXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHBhcnNlVGltZWxpbmVQb3NpdGlvbiA9ICh0aW1lbGluZSwgdGltZVBvc2l0aW9uKSA9PiB7XG4gIGxldCB0bER1cmF0aW9uID0gdGltZWxpbmUuaXRlcmF0aW9uRHVyYXRpb247XG4gIGlmICh0bER1cmF0aW9uID09PSBtaW5WYWx1ZSkgdGxEdXJhdGlvbiA9IDA7XG4gIGlmIChpc1VuZCh0aW1lUG9zaXRpb24pKSByZXR1cm4gdGxEdXJhdGlvbjtcbiAgaWYgKGlzTnVtKCt0aW1lUG9zaXRpb24pKSByZXR1cm4gK3RpbWVQb3NpdGlvbjtcbiAgY29uc3QgdGltZVBvc1N0ciA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyh0aW1lUG9zaXRpb24pO1xuICBjb25zdCB0bExhYmVscyA9IHRpbWVsaW5lID8gdGltZWxpbmUubGFiZWxzIDogbnVsbDtcbiAgY29uc3QgaGFzTGFiZWxzID0gIWlzTmlsKHRsTGFiZWxzKTtcbiAgY29uc3QgcHJldk9mZnNldCA9IGdldFByZXZDaGlsZE9mZnNldCh0aW1lbGluZSwgdGltZVBvc1N0cik7XG4gIGNvbnN0IGhhc1NpYmxpbmcgPSAhaXNVbmQocHJldk9mZnNldCk7XG4gIGNvbnN0IG1hdGNoZWRSZWxhdGl2ZU9wZXJhdG9yID0gcmVsYXRpdmVWYWx1ZXNFeGVjUmd4LmV4ZWModGltZVBvc1N0cik7XG4gIGlmIChtYXRjaGVkUmVsYXRpdmVPcGVyYXRvcikge1xuICAgIGNvbnN0IGZ1bGxPcGVyYXRvciA9IG1hdGNoZWRSZWxhdGl2ZU9wZXJhdG9yWzBdO1xuICAgIGNvbnN0IHNwbGl0ID0gdGltZVBvc1N0ci5zcGxpdChmdWxsT3BlcmF0b3IpO1xuICAgIGNvbnN0IGxhYmVsT2Zmc2V0ID0gaGFzTGFiZWxzICYmIHNwbGl0WzBdID8gdGxMYWJlbHNbc3BsaXRbMF1dIDogdGxEdXJhdGlvbjtcbiAgICBjb25zdCBwYXJzZWRPZmZzZXQgPSBoYXNTaWJsaW5nID8gcHJldk9mZnNldCA6IGhhc0xhYmVscyA/IGxhYmVsT2Zmc2V0IDogdGxEdXJhdGlvbjtcbiAgICBjb25zdCBwYXJzZWROdW1lcmljYWxPZmZzZXQgPSArc3BsaXRbMV07XG4gICAgcmV0dXJuIGdldFJlbGF0aXZlVmFsdWUocGFyc2VkT2Zmc2V0LCBwYXJzZWROdW1lcmljYWxPZmZzZXQsIGZ1bGxPcGVyYXRvclswXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGhhc1NpYmxpbmcgPyBwcmV2T2Zmc2V0IDpcbiAgICAgICAgICAgaGFzTGFiZWxzID8gIWlzVW5kKHRsTGFiZWxzW3RpbWVQb3NTdHJdKSA/IHRsTGFiZWxzW3RpbWVQb3NTdHJdIDpcbiAgICAgICAgICAgdGxEdXJhdGlvbiA6IHRsRHVyYXRpb247XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtUaW1lbGluZX0gdGxcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0VGltZWxpbmVUb3RhbER1cmF0aW9uKHRsKSB7XG4gIHJldHVybiBjbGFtcEluZmluaXR5KCgodGwuaXRlcmF0aW9uRHVyYXRpb24gKyB0bC5fbG9vcERlbGF5KSAqIHRsLml0ZXJhdGlvbkNvdW50KSAtIHRsLl9sb29wRGVsYXkpIHx8IG1pblZhbHVlO1xufVxuXG4vKipcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7VGltZXJQYXJhbXN9IGNoaWxkUGFyYW1zXG4gKiBAcGFyYW0gIHtUaW1lbGluZX0gdGxcbiAqIEBwYXJhbSAge051bWJlcn0gdGltZVBvc2l0aW9uXG4gKiBAcmV0dXJuIHtUaW1lbGluZX1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0FuaW1hdGlvblBhcmFtc30gY2hpbGRQYXJhbXNcbiAqIEBwYXJhbSAge1RpbWVsaW5lfSB0bFxuICogQHBhcmFtICB7TnVtYmVyfSB0aW1lUG9zaXRpb25cbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHBhcmFtICB7TnVtYmVyfSBbaW5kZXhdXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtsZW5ndGhdXG4gKiBAcmV0dXJuIHtUaW1lbGluZX1cbiAqXG4gKiBAcGFyYW0gIHtUaW1lclBhcmFtc3xBbmltYXRpb25QYXJhbXN9IGNoaWxkUGFyYW1zXG4gKiBAcGFyYW0gIHtUaW1lbGluZX0gdGxcbiAqIEBwYXJhbSAge051bWJlcn0gdGltZVBvc2l0aW9uXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IFt0YXJnZXRzXVxuICogQHBhcmFtICB7TnVtYmVyfSBbaW5kZXhdXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtsZW5ndGhdXG4gKi9cbmZ1bmN0aW9uIGFkZFRsQ2hpbGQoY2hpbGRQYXJhbXMsIHRsLCB0aW1lUG9zaXRpb24sIHRhcmdldHMsIGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgaXNTZXR0ZXIgPSBpc051bShjaGlsZFBhcmFtcy5kdXJhdGlvbikgJiYgLyoqIEB0eXBlIHtOdW1iZXJ9ICovKGNoaWxkUGFyYW1zLmR1cmF0aW9uKSA8PSBtaW5WYWx1ZTtcbiAgLy8gT2Zmc2V0IHRoZSB0bCBwb3NpdGlvbiB3aXRoIC1taW5WYWx1ZSBmb3IgMCBkdXJhdGlvbiBhbmltYXRpb25zIG9yIC5zZXQoKSBjYWxscyBpbiBvcmRlciB0byBhbGlnbiB0aGVpciBlbmQgdmFsdWUgd2l0aCB0aGUgZGVmaW5lZCBwb3NpdGlvblxuICBjb25zdCBhZGp1c3RlZFBvc2l0aW9uID0gaXNTZXR0ZXIgPyB0aW1lUG9zaXRpb24gLSBtaW5WYWx1ZSA6IHRpbWVQb3NpdGlvbjtcbiAgdGljayh0bCwgYWRqdXN0ZWRQb3NpdGlvbiwgMSwgMSwgdGlja01vZGVzLkFVVE8pO1xuICBjb25zdCB0bENoaWxkID0gdGFyZ2V0cyA/XG4gICAgbmV3IEpTQW5pbWF0aW9uKHRhcmdldHMsLyoqIEB0eXBlIHtBbmltYXRpb25QYXJhbXN9ICovKGNoaWxkUGFyYW1zKSwgdGwsIGFkanVzdGVkUG9zaXRpb24sIGZhbHNlLCBpbmRleCwgbGVuZ3RoKSA6XG4gICAgbmV3IFRpbWVyKC8qKiBAdHlwZSB7VGltZXJQYXJhbXN9ICovKGNoaWxkUGFyYW1zKSwgdGwsIGFkanVzdGVkUG9zaXRpb24pO1xuICB0bENoaWxkLmluaXQoMSk7XG4gIC8vIFRPRE86IE1pZ2h0IGJlIGJldHRlciB0byBpbnNlcnQgYXQgYSBwb3NpdGlvbiByZWxhdGl2ZSB0byBzdGFydFRpbWU/XG4gIGFkZENoaWxkKHRsLCB0bENoaWxkKTtcbiAgZm9yRWFjaENoaWxkcmVuKHRsLCAoLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqL2NoaWxkKSA9PiB7XG4gICAgY29uc3QgY2hpbGRUTE9mZnNldCA9IGNoaWxkLl9vZmZzZXQgKyBjaGlsZC5fZGVsYXk7XG4gICAgY29uc3QgY2hpbGREdXIgPSBjaGlsZFRMT2Zmc2V0ICsgY2hpbGQuZHVyYXRpb247XG4gICAgaWYgKGNoaWxkRHVyID4gdGwuaXRlcmF0aW9uRHVyYXRpb24pIHRsLml0ZXJhdGlvbkR1cmF0aW9uID0gY2hpbGREdXI7XG4gIH0pO1xuICB0bC5kdXJhdGlvbiA9IGdldFRpbWVsaW5lVG90YWxEdXJhdGlvbih0bCk7XG4gIHJldHVybiB0bDtcbn1cblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBUaW1lciB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VGltZWxpbmVQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgc3VwZXIoLyoqIEB0eXBlIHtUaW1lclBhcmFtcyZUaW1lbGluZVBhcmFtc30gKi8ocGFyYW1ldGVycyksIG51bGwsIDApO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuZHVyYXRpb24gPSAwOyAvLyBUTCBkdXJhdGlvbiBzdGFydHMgYXQgMCBhbmQgZ3Jvd3Mgd2hlbiBhZGRpbmcgY2hpbGRyZW5cbiAgICAvKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIE51bWJlcj59ICovXG4gICAgdGhpcy5sYWJlbHMgPSB7fTtcbiAgICBjb25zdCBkZWZhdWx0c1BhcmFtcyA9IHBhcmFtZXRlcnMuZGVmYXVsdHM7XG4gICAgY29uc3QgZ2xvYmFsRGVmYXVsdHMgPSBnbG9iYWxzLmRlZmF1bHRzO1xuICAgIC8qKiBAdHlwZSB7RGVmYXVsdHNQYXJhbXN9ICovXG4gICAgdGhpcy5kZWZhdWx0cyA9IGRlZmF1bHRzUGFyYW1zID8gbWVyZ2VPYmplY3RzKGRlZmF1bHRzUGFyYW1zLCBnbG9iYWxEZWZhdWx0cykgOiBnbG9iYWxEZWZhdWx0cztcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25SZW5kZXIgPSBwYXJhbWV0ZXJzLm9uUmVuZGVyIHx8IGdsb2JhbERlZmF1bHRzLm9uUmVuZGVyO1xuICAgIGNvbnN0IHRsUGxheWJhY2tFYXNlID0gc2V0VmFsdWUocGFyYW1ldGVycy5wbGF5YmFja0Vhc2UsIGdsb2JhbERlZmF1bHRzLnBsYXliYWNrRWFzZSk7XG4gICAgdGhpcy5fZWFzZSA9IHRsUGxheWJhY2tFYXNlID8gcGFyc2VFYXNpbmdzKHRsUGxheWJhY2tFYXNlKSA6IG51bGw7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5pdGVyYXRpb25EdXJhdGlvbiA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSBhMVxuICAgKiBAcGFyYW0ge0FuaW1hdGlvblBhcmFtc30gYTJcbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFthM11cbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7VGltZXJQYXJhbXN9IGExXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbYTJdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfFRpbWVyUGFyYW1zfSBhMVxuICAgKiBAcGFyYW0ge0FuaW1hdGlvblBhcmFtc3xUaW1lUG9zaXRpb259IGEyXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbYTNdXG4gICAqL1xuICBhZGQoYTEsIGEyLCBhMykge1xuICAgIGNvbnN0IGlzQW5pbSA9IGlzT2JqKGEyKTtcbiAgICBjb25zdCBpc1RpbWVyID0gaXNPYmooYTEpO1xuICAgIGlmIChpc0FuaW0gfHwgaXNUaW1lcikge1xuICAgICAgdGhpcy5faGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgaWYgKGlzQW5pbSkge1xuICAgICAgICBjb25zdCBjaGlsZFBhcmFtcyA9IC8qKiBAdHlwZSB7QW5pbWF0aW9uUGFyYW1zfSAqLyhhMik7XG4gICAgICAgIC8vIENoZWNrIGZvciBmdW5jdGlvbiBmb3IgY2hpbGRyZW4gc3RhZ2dlciBwb3NpdGlvbnNcbiAgICAgICAgaWYgKGlzRm5jKGEzKSkge1xuICAgICAgICAgIGNvbnN0IHN0YWdnZXJlZFBvc2l0aW9uID0gLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi8oYTMpO1xuICAgICAgICAgIGNvbnN0IHBhcnNlZFRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cygvKiogQHR5cGUge1RhcmdldHNQYXJhbX0gKi8oYTEpKTtcbiAgICAgICAgICAvLyBTdG9yZSBpbml0aWFsIGR1cmF0aW9uIGJlZm9yZSBhZGRpbmcgbmV3IGNoaWxkcmVuIHRoYXQgd2lsbCBjaGFuZ2UgdGhlIGR1cmF0aW9uXG4gICAgICAgICAgY29uc3QgdGxEdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgICAgICAgLy8gU3RvcmUgaW5pdGlhbCBfaXRlcmF0aW9uRHVyYXRpb24gYmVmb3JlIGFkZGluZyBuZXcgY2hpbGRyZW4gdGhhdCB3aWxsIGNoYW5nZSB0aGUgZHVyYXRpb25cbiAgICAgICAgICBjb25zdCB0bEl0ZXJhdGlvbkR1cmF0aW9uID0gdGhpcy5pdGVyYXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgaWQgaW4gb3JkZXIgdG8gYWRkIHNwZWNpZmljIGluZGV4ZXMgdG8gdGhlIG5ldyBhbmltYXRpb25zIGlkc1xuICAgICAgICAgIGNvbnN0IGlkID0gY2hpbGRQYXJhbXMuaWQ7XG4gICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgIGNvbnN0IHBhcnNlZExlbmd0aCA9IHBhcnNlZFRhcmdldHNBcnJheS5sZW5ndGg7XG4gICAgICAgICAgcGFyc2VkVGFyZ2V0c0FycmF5LmZvckVhY2goKC8qKiBAdHlwZSB7VGFyZ2V0fSAqL3RhcmdldCkgPT4ge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcmFtZXRlciBvYmplY3QgZm9yIGVhY2ggc3RhZ2dlcmVkIGNoaWxkcmVuXG4gICAgICAgICAgICBjb25zdCBzdGFnZ2VyZWRDaGlsZFBhcmFtcyA9IHsgLi4uY2hpbGRQYXJhbXMgfTtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBkdXJhdGlvbiBvZiB0aGUgdGltZWxpbmUgaXRlcmF0aW9uIGJlZm9yZSBlYWNoIHN0YWdnZXIgdG8gcHJldmVudCB3cm9uZyBzdGFydCB2YWx1ZSBjYWxjdWxhdGlvblxuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRsRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uID0gdGxJdGVyYXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIGlmICghaXNVbmQoaWQpKSBzdGFnZ2VyZWRDaGlsZFBhcmFtcy5pZCA9IGlkICsgJy0nICsgaTtcbiAgICAgICAgICAgIGFkZFRsQ2hpbGQoXG4gICAgICAgICAgICAgIHN0YWdnZXJlZENoaWxkUGFyYW1zLFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICBzdGFnZ2VyZWRQb3NpdGlvbih0YXJnZXQsIGksIHBhcnNlZExlbmd0aCwgdGhpcyksXG4gICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgcGFyc2VkTGVuZ3RoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFRsQ2hpbGQoXG4gICAgICAgICAgICBjaGlsZFBhcmFtcyxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBwYXJzZVRpbWVsaW5lUG9zaXRpb24odGhpcywgYTMpLFxuICAgICAgICAgICAgLyoqIEB0eXBlIHtUYXJnZXRzUGFyYW19ICovKGExKSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJdCdzIGEgVGltZXJcbiAgICAgICAgYWRkVGxDaGlsZChcbiAgICAgICAgICAvKiogQHR5cGUgVGltZXJQYXJhbXMgKi8oYTEpLFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgcGFyc2VUaW1lbGluZVBvc2l0aW9uKHRoaXMsLyoqIEB0eXBlIFRpbWVQb3NpdGlvbiAqLyhhMikpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgxKTsgLy8gMSA9IGludGVybmFsUmVuZGVyXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge1RpY2thYmxlfSBbc3luY2VkXVxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW3Bvc2l0aW9uXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtnbG9iYWxUaGlzLkFuaW1hdGlvbn0gW3N5bmNlZF1cbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFtwb3NpdGlvbl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7V0FBUElBbmltYXRpb259IFtzeW5jZWRdXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbcG9zaXRpb25dXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqIEBwYXJhbSB7VGlja2FibGV8V0FBUElBbmltYXRpb258Z2xvYmFsVGhpcy5BbmltYXRpb259IFtzeW5jZWRdXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbcG9zaXRpb25dXG4gICAqL1xuICBzeW5jKHN5bmNlZCwgcG9zaXRpb24pIHtcbiAgICBpZiAoaXNVbmQoc3luY2VkKSB8fCBzeW5jZWQgJiYgaXNVbmQoc3luY2VkLnBhdXNlKSkgcmV0dXJuIHRoaXM7XG4gICAgc3luY2VkLnBhdXNlKCk7XG4gICAgY29uc3QgZHVyYXRpb24gPSArKC8qKiBAdHlwZSB7Z2xvYmFsVGhpcy5BbmltYXRpb259ICovKHN5bmNlZCkuZWZmZWN0ID8gLyoqIEB0eXBlIHtnbG9iYWxUaGlzLkFuaW1hdGlvbn0gKi8oc3luY2VkKS5lZmZlY3QuZ2V0VGltaW5nKCkuZHVyYXRpb24gOiAvKiogQHR5cGUge1RpY2thYmxlfSAqLyhzeW5jZWQpLmR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hZGQoc3luY2VkLCB7IGN1cnJlbnRUaW1lOiBbMCwgZHVyYXRpb25dLCBkdXJhdGlvbiwgZWFzZTogJ2xpbmVhcicgfSwgcG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICAgKiBAcGFyYW0gIHtBbmltYXRpb25QYXJhbXN9IHBhcmFtZXRlcnNcbiAgICogQHBhcmFtICB7VGltZVBvc2l0aW9ufSBbcG9zaXRpb25dXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzZXQodGFyZ2V0cywgcGFyYW1ldGVycywgcG9zaXRpb24pIHtcbiAgICBpZiAoaXNVbmQocGFyYW1ldGVycykpIHJldHVybiB0aGlzO1xuICAgIHBhcmFtZXRlcnMuZHVyYXRpb24gPSBtaW5WYWx1ZTtcbiAgICBwYXJhbWV0ZXJzLmNvbXBvc2l0aW9uID0gY29tcG9zaXRpb25UeXBlcy5yZXBsYWNlO1xuICAgIHJldHVybiB0aGlzLmFkZCh0YXJnZXRzLCBwYXJhbWV0ZXJzLCBwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtDYWxsYmFjazxUaW1lcj59IGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbcG9zaXRpb25dXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBjYWxsKGNhbGxiYWNrLCBwb3NpdGlvbikge1xuICAgIGlmIChpc1VuZChjYWxsYmFjaykgfHwgY2FsbGJhY2sgJiYgIWlzRm5jKGNhbGxiYWNrKSkgcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuYWRkKHsgZHVyYXRpb246IDAsIG9uQ29tcGxldGU6ICgpID0+IGNhbGxiYWNrKHRoaXMpIH0sIHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWxOYW1lXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbcG9zaXRpb25dXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqL1xuICBsYWJlbChsYWJlbE5hbWUsIHBvc2l0aW9uKSB7XG4gICAgaWYgKGlzVW5kKGxhYmVsTmFtZSkgfHwgbGFiZWxOYW1lICYmICFpc1N0cihsYWJlbE5hbWUpKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLmxhYmVsc1tsYWJlbE5hbWVdID0gcGFyc2VUaW1lbGluZVBvc2l0aW9uKHRoaXMsLyoqIEB0eXBlIFRpbWVQb3NpdGlvbiAqLyhwb3NpdGlvbikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtwcm9wZXJ0eU5hbWVdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZW1vdmUodGFyZ2V0cywgcHJvcGVydHlOYW1lKSB7XG4gICAgcmVtb3ZlKHRhcmdldHMsIHRoaXMsIHByb3BlcnR5TmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSBuZXdEdXJhdGlvblxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc3RyZXRjaChuZXdEdXJhdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnREdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgaWYgKGN1cnJlbnREdXJhdGlvbiA9PT0gbm9ybWFsaXplVGltZShuZXdEdXJhdGlvbikpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHRpbWVTY2FsZSA9IG5ld0R1cmF0aW9uIC8gY3VycmVudER1cmF0aW9uO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMubGFiZWxzO1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9jaGlsZCkgPT4gY2hpbGQuc3RyZXRjaChjaGlsZC5kdXJhdGlvbiAqIHRpbWVTY2FsZSkpO1xuICAgIGZvciAobGV0IGxhYmVsTmFtZSBpbiBsYWJlbHMpIGxhYmVsc1tsYWJlbE5hbWVdICo9IHRpbWVTY2FsZTtcbiAgICByZXR1cm4gc3VwZXIuc3RyZXRjaChuZXdEdXJhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL2NoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQucmVmcmVzaCkgY2hpbGQucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZXZlcnQoKSB7XG4gICAgc3VwZXIucmV2ZXJ0KCk7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL2NoaWxkKSA9PiBjaGlsZC5yZXZlcnQsIHRydWUpO1xuICAgIHJldHVybiBjbGVhbklubGluZVN0eWxlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtDYWxsYmFjazx0aGlzPn0gW2NhbGxiYWNrXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgdGhlbihjYWxsYmFjaykge1xuICAgIHJldHVybiBzdXBlci50aGVuKGNhbGxiYWNrKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VGltZWxpbmVQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICogQHJldHVybiB7VGltZWxpbmV9XG4gKi9cbmNvbnN0IGNyZWF0ZVRpbWVsaW5lID0gcGFyYW1ldGVycyA9PiBuZXcgVGltZWxpbmUocGFyYW1ldGVycykuaW5pdCgpO1xuXG5cblxuXG5jbGFzcyBBbmltYXRhYmxlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gICAqIEBwYXJhbSB7QW5pbWF0YWJsZVBhcmFtc30gcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0cywgcGFyYW1ldGVycykge1xuICAgIGlmIChnbG9iYWxzLnNjb3BlKSBnbG9iYWxzLnNjb3BlLnJldmVydGlibGVzLnB1c2godGhpcyk7XG4gICAgLyoqIEB0eXBlIHtBbmltYXRpb25QYXJhbXN9ICovXG4gICAgY29uc3QgZ2xvYmFsUGFyYW1zID0ge307XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xuICAgIGlmIChpc1VuZCh0YXJnZXRzKSB8fCBpc1VuZChwYXJhbWV0ZXJzKSkgcmV0dXJuO1xuICAgIGZvciAobGV0IHByb3BOYW1lIGluIHBhcmFtZXRlcnMpIHtcbiAgICAgIGNvbnN0IHBhcmFtVmFsdWUgPSBwYXJhbWV0ZXJzW3Byb3BOYW1lXTtcbiAgICAgIGlmIChpc0tleShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBwYXJhbVZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsUGFyYW1zW3Byb3BOYW1lXSA9IHBhcmFtVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BlcnRpZXNbcHJvcE5hbWVdO1xuICAgICAgY29uc3QgaXNPYmpWYWx1ZSA9IGlzT2JqKHByb3BWYWx1ZSk7XG4gICAgICAvKiogQHR5cGUge1R3ZWVuUGFyYW1zT3B0aW9uc30gKi9cbiAgICAgIGxldCBwcm9wUGFyYW1zID0ge307XG4gICAgICBsZXQgdG8gPSAnKz0wJztcbiAgICAgIGlmIChpc09ialZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSBwcm9wVmFsdWUudW5pdDtcbiAgICAgICAgaWYgKGlzU3RyKHVuaXQpKSB0byArPSB1bml0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcFBhcmFtcy5kdXJhdGlvbiA9IHByb3BWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHByb3BQYXJhbXNbcHJvcE5hbWVdID0gaXNPYmpWYWx1ZSA/IG1lcmdlT2JqZWN0cyh7IHRvIH0sIHByb3BWYWx1ZSkgOiB0bztcbiAgICAgIGNvbnN0IGFuaW1QYXJhbXMgPSBtZXJnZU9iamVjdHMoZ2xvYmFsUGFyYW1zLCBwcm9wUGFyYW1zKTtcbiAgICAgIGFuaW1QYXJhbXMuY29tcG9zaXRpb24gPSBjb21wb3NpdGlvblR5cGVzLnJlcGxhY2U7XG4gICAgICBhbmltUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbcHJvcE5hbWVdID0gbmV3IEpTQW5pbWF0aW9uKHRhcmdldHMsIGFuaW1QYXJhbXMsIG51bGwsIDAsIGZhbHNlKS5pbml0KCk7XG4gICAgICBpZiAoIXRoaXMudGFyZ2V0cy5sZW5ndGgpIHRoaXMudGFyZ2V0cy5wdXNoKC4uLmFuaW1hdGlvbi50YXJnZXRzKTtcbiAgICAgIC8qKiBAdHlwZSB7QW5pbWF0YWJsZVByb3BlcnR5fSAqL1xuICAgICAgdGhpc1twcm9wTmFtZV0gPSAodG8sIGR1cmF0aW9uLCBlYXNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gLyoqIEB0eXBlIHtUd2Vlbn0gKi8oYW5pbWF0aW9uLl9oZWFkKTtcbiAgICAgICAgaWYgKGlzVW5kKHRvKSAmJiB0d2Vlbikge1xuICAgICAgICAgIGNvbnN0IG51bWJlcnMgPSB0d2Vlbi5fbnVtYmVycztcbiAgICAgICAgICBpZiAobnVtYmVycyAmJiBudW1iZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0d2Vlbi5fbW9kaWZpZXIodHdlZW4uX251bWJlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvckVhY2hDaGlsZHJlbihhbmltYXRpb24sICgvKiogQHR5cGUge1R3ZWVufSAqL3R3ZWVuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNBcnIodG8pKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gLyoqIEB0eXBlIHtBcnJheX0gKi8odG8pLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmQodHdlZW4uX251bWJlcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0d2Vlbi5fZnJvbU51bWJlcnNbaV0gPSAvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW4uX21vZGlmaWVyKHR3ZWVuLl9udW1iZXJzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB0d2Vlbi5fdG9OdW1iZXJzW2ldID0gdG9baV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0d2Vlbi5fZnJvbU51bWJlciA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbi5fbW9kaWZpZXIodHdlZW4uX251bWJlcikpO1xuICAgICAgICAgICAgICB0d2Vlbi5fdG9OdW1iZXIgPSAvKiogQHR5cGUge051bWJlcn0gKi8odG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1VuZChlYXNlKSkgdHdlZW4uX2Vhc2UgPSBwYXJzZUVhc2luZ3MoZWFzZSk7XG4gICAgICAgICAgICB0d2Vlbi5fY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghaXNVbmQoZHVyYXRpb24pKSBhbmltYXRpb24uc3RyZXRjaChkdXJhdGlvbik7XG4gICAgICAgICAgYW5pbWF0aW9uLnJlc2V0KDEpLnJlc3VtZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldmVydCgpIHtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgIHRoaXNbcHJvcE5hbWVdID0gbm9vcDtcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1twcm9wTmFtZV0ucmV2ZXJ0KCk7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xuICAgIHRoaXMudGFyZ2V0cy5sZW5ndGggPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEBwYXJhbSB7QW5pbWF0YWJsZVBhcmFtc30gcGFyYW1ldGVyc1xuICogQHJldHVybiB7QW5pbWF0YWJsZU9iamVjdH1cbiAqL1xuY29uc3QgY3JlYXRlQW5pbWF0YWJsZSA9ICh0YXJnZXRzLCBwYXJhbWV0ZXJzKSA9PiAvKiogQHR5cGUge0FuaW1hdGFibGVPYmplY3R9ICovKG5ldyBBbmltYXRhYmxlKHRhcmdldHMsIHBhcmFtZXRlcnMpKTtcblxuXG5cblxuLypcbiAqIFNwcmluZyBlYXNlIHNvbHZlciBhZGFwdGVkIGZyb20gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcbiAqIFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNwcmluZ1BhcmFtc1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IFttYXNzPTFdIC0gTWFzcywgZGVmYXVsdCAxXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3N0aWZmbmVzcz0xMDBdIC0gU3RpZmZuZXNzLCBkZWZhdWx0IDEwMFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtkYW1waW5nPTEwXSAtIERhbXBpbmcsIGRlZmF1bHQgMTBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbdmVsb2NpdHk9MF0gLSBJbml0aWFsIHZlbG9jaXR5LCBkZWZhdWx0IDBcbiAqL1xuXG5jbGFzcyBTcHJpbmcge1xuICAvKipcbiAgICogQHBhcmFtIHtTcHJpbmdQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgdGhpcy50aW1lU3RlcCA9IC4wMjsgLy8gSW50ZXJ2YWwgZmVkIHRvIHRoZSBzb2x2ZXIgdG8gY2FsY3VsYXRlIGR1cmF0aW9uXG4gICAgdGhpcy5yZXN0VGhyZXNob2xkID0gLjAwMDU7IC8vIFZhbHVlcyBiZWxvdyB0aGlzIHRocmVzaG9sZCBhcmUgY29uc2lkZXJlZCByZXN0aW5nIHBvc2l0aW9uXG4gICAgdGhpcy5yZXN0RHVyYXRpb24gPSAyMDA7IC8vIER1cmF0aW9uIGluIG1zIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHNwcmluZyBpcyByZXN0aW5nIGFmdGVyIHJlYWNoaW5nIHJlc3RUaHJlc2hvbGRcbiAgICB0aGlzLm1heER1cmF0aW9uID0gNjAwMDA7IC8vIFRoZSBtYXhpbXVtIGFsbG93ZWQgc3ByaW5nIGR1cmF0aW9uIGluIG1zIChkZWZhdWx0IDEgbWluKVxuICAgIHRoaXMubWF4UmVzdFN0ZXBzID0gdGhpcy5yZXN0RHVyYXRpb24gLyB0aGlzLnRpbWVTdGVwIC8gSzsgLy8gSG93IG1hbnkgc3RlcHMgYWxsb3dlZCBhZnRlciByZWFjaGluZyByZXN0VGhyZXNob2xkIGJlZm9yZSBzdG9wcGluZyB0aGUgZHVyYXRpb24gY2FsY3VsYXRpb25cbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgPSB0aGlzLm1heER1cmF0aW9uIC8gdGhpcy50aW1lU3RlcCAvIEs7IC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBpdGVyYXRpb25zIGFsbG93ZWQgYmFzZWQgb24gbWF4RHVyYXRpb25cbiAgICB0aGlzLm0gPSBjbGFtcChzZXRWYWx1ZShwYXJhbWV0ZXJzLm1hc3MsIDEpLCAwLCBLKTtcbiAgICB0aGlzLnMgPSBjbGFtcChzZXRWYWx1ZShwYXJhbWV0ZXJzLnN0aWZmbmVzcywgMTAwKSwgMSwgSyk7XG4gICAgdGhpcy5kID0gY2xhbXAoc2V0VmFsdWUocGFyYW1ldGVycy5kYW1waW5nLCAxMCksIC4xLCBLKTtcbiAgICB0aGlzLnYgPSBjbGFtcChzZXRWYWx1ZShwYXJhbWV0ZXJzLnZlbG9jaXR5LCAwKSwgLTFlMywgSyk7XG4gICAgdGhpcy53MCA9IDA7XG4gICAgdGhpcy56ZXRhID0gMDtcbiAgICB0aGlzLndkID0gMDtcbiAgICB0aGlzLmIgPSAwO1xuICAgIHRoaXMuc29sdmVyRHVyYXRpb24gPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuY29tcHV0ZSgpO1xuICAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gICAgdGhpcy5lYXNlID0gdCA9PiB0ID09PSAwIHx8IHQgPT09IDEgPyB0IDogdGhpcy5zb2x2ZSh0ICogdGhpcy5zb2x2ZXJEdXJhdGlvbik7XG4gIH1cblxuICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICBzb2x2ZSh0aW1lKSB7XG4gICAgY29uc3QgeyB6ZXRhLCB3MCwgd2QsIGIgfSA9IHRoaXM7XG4gICAgbGV0IHQgPSB0aW1lO1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgdCA9IGV4cCgtdCAqIHpldGEgKiB3MCkgKiAoMSAqIGNvcyh3ZCAqIHQpICsgYiAqIHNpbih3ZCAqIHQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9ICgxICsgYiAqIHQpICogZXhwKC10ICogdzApO1xuICAgIH1cbiAgICByZXR1cm4gMSAtIHQ7XG4gIH1cblxuICBjb21wdXRlKCkge1xuICAgIGNvbnN0IHsgbWF4UmVzdFN0ZXBzLCBtYXhJdGVyYXRpb25zLCByZXN0VGhyZXNob2xkLCB0aW1lU3RlcCwgbSwgZCwgcywgdiB9ID0gdGhpcztcbiAgICBjb25zdCB3MCA9IHRoaXMudzAgPSBjbGFtcChzcXJ0KHMgLyBtKSwgbWluVmFsdWUsIEspO1xuICAgIGNvbnN0IHpldGEgPSB0aGlzLnpldGEgPSBkIC8gKDIgKiBzcXJ0KHMgKiBtKSk7XG4gICAgY29uc3Qgd2QgPSB0aGlzLndkID0gemV0YSA8IDEgPyB3MCAqIHNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XG4gICAgdGhpcy5iID0gemV0YSA8IDEgPyAoemV0YSAqIHcwICsgLXYpIC8gd2QgOiAtdiArIHcwO1xuICAgIGxldCBzb2x2ZXJUaW1lID0gMDtcbiAgICBsZXQgcmVzdFN0ZXBzID0gMDtcbiAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XG4gICAgd2hpbGUgKHJlc3RTdGVwcyA8IG1heFJlc3RTdGVwcyAmJiBpdGVyYXRpb25zIDwgbWF4SXRlcmF0aW9ucykge1xuICAgICAgaWYgKGFicygxIC0gdGhpcy5zb2x2ZShzb2x2ZXJUaW1lKSkgPCByZXN0VGhyZXNob2xkKSB7XG4gICAgICAgIHJlc3RTdGVwcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdFN0ZXBzID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29sdmVyRHVyYXRpb24gPSBzb2x2ZXJUaW1lO1xuICAgICAgc29sdmVyVGltZSArPSB0aW1lU3RlcDtcbiAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICB9XG4gICAgdGhpcy5kdXJhdGlvbiA9IHJvdW5kKHRoaXMuc29sdmVyRHVyYXRpb24gKiBLLCAwKSAqIGdsb2JhbHMudGltZVNjYWxlO1xuICB9XG5cbiAgZ2V0IG1hc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubTtcbiAgfVxuXG4gIHNldCBtYXNzKHYpIHtcbiAgICB0aGlzLm0gPSBjbGFtcChzZXRWYWx1ZSh2LCAxKSwgMCwgSyk7XG4gICAgdGhpcy5jb21wdXRlKCk7XG4gIH1cblxuICBnZXQgc3RpZmZuZXNzKCkge1xuICAgIHJldHVybiB0aGlzLnM7XG4gIH1cblxuICBzZXQgc3RpZmZuZXNzKHYpIHtcbiAgICB0aGlzLnMgPSBjbGFtcChzZXRWYWx1ZSh2LCAxMDApLCAxLCBLKTtcbiAgICB0aGlzLmNvbXB1dGUoKTtcbiAgfVxuXG4gIGdldCBkYW1waW5nKCkge1xuICAgIHJldHVybiB0aGlzLmQ7XG4gIH1cblxuICBzZXQgZGFtcGluZyh2KSB7XG4gICAgdGhpcy5kID0gY2xhbXAoc2V0VmFsdWUodiwgMTApLCAuMSwgSyk7XG4gICAgdGhpcy5jb21wdXRlKCk7XG4gIH1cblxuICBnZXQgdmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudjtcbiAgfVxuXG4gIHNldCB2ZWxvY2l0eSh2KSB7XG4gICAgdGhpcy52ID0gY2xhbXAoc2V0VmFsdWUodiwgMCksIC0xZTMsIEspO1xuICAgIHRoaXMuY29tcHV0ZSgpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtTcHJpbmdQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICogQHJldHVybnMge1NwcmluZ31cbiAqL1xuY29uc3QgY3JlYXRlU3ByaW5nID0gKHBhcmFtZXRlcnMpID0+IG5ldyBTcHJpbmcocGFyYW1ldGVycyk7XG5cblxuXG5cbi8qKlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBwcmV2ZW50RGVmYXVsdCA9IGUgPT4ge1xuICBpZiAoZS5jYW5jZWxhYmxlKSBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5jbGFzcyBET01Qcm94eSB7XG4gIC8qKiBAcGFyYW0ge09iamVjdH0gZWwgKi9cbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy56SW5kZXggPSAwO1xuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5jbGFzc0xpc3QgPSB7XG4gICAgICBhZGQ6IG5vb3AsXG4gICAgICByZW1vdmU6IG5vb3AsXG4gICAgfTtcbiAgfVxuXG4gIGdldCB4KCkgeyByZXR1cm4gdGhpcy5lbC54IHx8IDAgfTtcbiAgc2V0IHgodikgeyB0aGlzLmVsLnggPSB2OyB9O1xuXG4gIGdldCB5KCkgeyByZXR1cm4gdGhpcy5lbC55IHx8IDAgfTtcbiAgc2V0IHkodikgeyB0aGlzLmVsLnkgPSB2OyB9O1xuXG4gIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuZWwud2lkdGggfHwgMCB9O1xuICBzZXQgd2lkdGgodikgeyB0aGlzLmVsLndpZHRoID0gdjsgfTtcblxuICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5lbC5oZWlnaHQgfHwgMCB9O1xuICBzZXQgaGVpZ2h0KHYpIHsgdGhpcy5lbC5oZWlnaHQgPSB2OyB9O1xuXG4gIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnksXG4gICAgICByaWdodDogdGhpcy54LFxuICAgICAgYm90dG9tOiB0aGlzLnkgKyB0aGlzLmhlaWdodCxcbiAgICAgIGxlZnQ6IHRoaXMueCArIHRoaXMud2lkdGgsXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFRyYW5zZm9ybXMge1xuICAvKipcbiAgICogQHBhcmFtIHtET01UYXJnZXR8RE9NUHJveHl9ICRlbFxuICAgKi9cbiAgY29uc3RydWN0b3IoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5pbmxpbmVUcmFuc2Zvcm1zID0gW107XG4gICAgdGhpcy5wb2ludCA9IG5ldyBET01Qb2ludCgpO1xuICAgIHRoaXMuaW52ZXJzZWRNYXRyaXggPSB0aGlzLmdldE1hdHJpeCgpLmludmVyc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgKiBAcmV0dXJuIHtET01Qb2ludH1cbiAgICovXG4gIG5vcm1hbGl6ZVBvaW50KHgsIHkpIHtcbiAgICB0aGlzLnBvaW50LnggPSB4O1xuICAgIHRoaXMucG9pbnQueSA9IHk7XG4gICAgcmV0dXJuIHRoaXMucG9pbnQubWF0cml4VHJhbnNmb3JtKHRoaXMuaW52ZXJzZWRNYXRyaXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBjYWxsYmFjayBUcmF2ZXJzZVBhcmVudHNDYWxsYmFja1xuICAgKiBAcGFyYW0ge0RPTVRhcmdldH0gJGVsXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYXZlcnNlUGFyZW50c0NhbGxiYWNrfSBjYlxuICAgKi9cbiAgdHJhdmVyc2VVcChjYikge1xuICAgIGxldCAkZWwgPSAvKiogQHR5cGUge0RPTVRhcmdldHxEb2N1bWVudH0gKi8odGhpcy4kZWwucGFyZW50RWxlbWVudCksIGkgPSAwO1xuICAgIHdoaWxlICgkZWwgJiYgJGVsICE9PSBkb2MpIHtcbiAgICAgIGNiKC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLygkZWwpLCBpKTtcbiAgICAgICRlbCA9IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLygkZWwucGFyZW50RWxlbWVudCk7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgZ2V0TWF0cml4KCkge1xuICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoKTtcbiAgICB0aGlzLnRyYXZlcnNlVXAoJGVsID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybVZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZSgkZWwpLnRyYW5zZm9ybTtcbiAgICAgIGlmICh0cmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICBjb25zdCBlbE1hdHJpeCA9IG5ldyBET01NYXRyaXgodHJhbnNmb3JtVmFsdWUpO1xuICAgICAgICBtYXRyaXgucHJlTXVsdGlwbHlTZWxmKGVsTWF0cml4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMudHJhdmVyc2VVcCgoJGVsLCBpKSA9PiB7XG4gICAgICB0aGlzLmlubGluZVRyYW5zZm9ybXNbaV0gPSAkZWwuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgJGVsLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICB9KTtcbiAgfVxuXG4gIHJldmVydCgpIHtcbiAgICB0aGlzLnRyYXZlcnNlVXAoKCRlbCwgaSkgPT4ge1xuICAgICAgY29uc3QgY3QgPSB0aGlzLmlubGluZVRyYW5zZm9ybXNbaV07XG4gICAgICBpZiAoY3QgPT09ICcnKSB7XG4gICAgICAgICRlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWwuc3R5bGUudHJhbnNmb3JtID0gY3Q7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge0FycmF5PE51bWJlcj58RE9NVGFyZ2V0U2VsZWN0b3J8U3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufERyYWdnYWJsZUN1cnNvclBhcmFtc30gVFxuICogQHBhcmFtIHtUIHwgKChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gVCl9IHZhbHVlXG4gKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlXG4gKiBAcmV0dXJuIHtUfVxuICovXG5jb25zdCBwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyID0gKHZhbHVlLCBkcmFnZ2FibGUpID0+IHZhbHVlICYmIGlzRm5jKHZhbHVlKSA/IC8qKiBAdHlwZSB7RnVuY3Rpb259ICovKHZhbHVlKShkcmFnZ2FibGUpIDogdmFsdWU7XG5cbmxldCB6SW5kZXggPSAwO1xuXG5jbGFzcyBEcmFnZ2FibGUge1xuICAvKipcbiAgICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHRhcmdldFxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZVBhcmFtc30gW3BhcmFtZXRlcnNdXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHBhcmFtZXRlcnMgPSB7fSkge1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgaWYgKGdsb2JhbHMuc2NvcGUpIGdsb2JhbHMuc2NvcGUucmV2ZXJ0aWJsZXMucHVzaCh0aGlzKTtcbiAgICBjb25zdCBwYXJhbVggPSBwYXJhbWV0ZXJzLng7XG4gICAgY29uc3QgcGFyYW1ZID0gcGFyYW1ldGVycy55O1xuICAgIGNvbnN0IHRyaWdnZXIgPSBwYXJhbWV0ZXJzLnRyaWdnZXI7XG4gICAgY29uc3QgbW9kaWZpZXIgPSBwYXJhbWV0ZXJzLm1vZGlmaWVyO1xuICAgIGNvbnN0IGVhc2UgPSBwYXJhbWV0ZXJzLnJlbGVhc2VFYXNlO1xuICAgIGNvbnN0IGN1c3RvbUVhc2UgPSBlYXNlICYmIHBhcnNlRWFzaW5ncyhlYXNlKTtcbiAgICBjb25zdCBoYXNTcHJpbmcgPSAhaXNVbmQoZWFzZSkgJiYgIWlzVW5kKC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlKTtcbiAgICBjb25zdCB4UHJvcCA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhpc09iaihwYXJhbVgpICYmICFpc1VuZCgvKiogQHR5cGUge09iamVjdH0gKi8ocGFyYW1YKS5tYXBUbykgPyAvKiogQHR5cGUge09iamVjdH0gKi8ocGFyYW1YKS5tYXBUbyA6ICd0cmFuc2xhdGVYJyk7XG4gICAgY29uc3QgeVByb3AgPSAvKiogQHR5cGUge1N0cmluZ30gKi8oaXNPYmoocGFyYW1ZKSAmJiAhaXNVbmQoLyoqIEB0eXBlIHtPYmplY3R9ICovKHBhcmFtWSkubWFwVG8pID8gLyoqIEB0eXBlIHtPYmplY3R9ICovKHBhcmFtWSkubWFwVG8gOiAndHJhbnNsYXRlWScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1ldGVycy5jb250YWluZXIsIHRoaXMpO1xuICAgIHRoaXMuY29udGFpbmVyQXJyYXkgPSBpc0Fycihjb250YWluZXIpID8gY29udGFpbmVyIDogbnVsbDtcbiAgICB0aGlzLiRjb250YWluZXIgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhjb250YWluZXIgJiYgIXRoaXMuY29udGFpbmVyQXJyYXkgPyBwYXJzZVRhcmdldHMoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKGNvbnRhaW5lcikpWzBdIDogZG9jLmJvZHkpO1xuICAgIHRoaXMudXNlV2luID0gdGhpcy4kY29udGFpbmVyID09PSBkb2MuYm9keTtcbiAgICAvKiogQHR5cGUge1dpbmRvdyB8IEhUTUxFbGVtZW50fSAqL1xuICAgIHRoaXMuJHNjcm9sbENvbnRhaW5lciA9IHRoaXMudXNlV2luID8gd2luIDogdGhpcy4kY29udGFpbmVyO1xuICAgIHRoaXMuJHRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKGlzT2JqKHRhcmdldCkgPyBuZXcgRE9NUHJveHkodGFyZ2V0KSA6IHBhcnNlVGFyZ2V0cyh0YXJnZXQpWzBdKTtcbiAgICB0aGlzLiR0cmlnZ2VyID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8ocGFyc2VUYXJnZXRzKHRyaWdnZXIgPyB0cmlnZ2VyIDogdGFyZ2V0KVswXSk7XG4gICAgdGhpcy5maXhlZCA9IGdldFRhcmdldFZhbHVlKHRoaXMuJHRhcmdldCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCc7XG4gICAgLy8gUmVmcmVzaGFibGUgcGFyYW1ldGVyc1xuICAgIHRoaXMuaXNGaW5lUG9pbnRlciA9IHRydWU7XG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLmNvbnRhaW5lclBhZGRpbmcgPSBbMCwgMCwgMCwgMF07XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5jb250YWluZXJGcmljdGlvbiA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5yZWxlYXNlQ29udGFpbmVyRnJpY3Rpb24gPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfEFycmF5PE51bWJlcj59ICovXG4gICAgdGhpcy5zbmFwWCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ8QXJyYXk8TnVtYmVyPn0gKi9cbiAgICB0aGlzLnNuYXBZID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnNjcm9sbFNwZWVkID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnNjcm9sbFRocmVzaG9sZCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5kcmFnU3BlZWQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMubWF4VmVsb2NpdHkgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMubWluVmVsb2NpdHkgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMudmVsb2NpdHlNdWx0aXBsaWVyID0gMDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW58RHJhZ2dhYmxlQ3Vyc29yUGFyYW1zfSAqL1xuICAgIHRoaXMuY3Vyc29yID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtTcHJpbmd9ICovXG4gICAgdGhpcy5yZWxlYXNlWFNwcmluZyA9IGhhc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKSA6IGNyZWF0ZVNwcmluZyh7XG4gICAgICBtYXNzOiBzZXRWYWx1ZShwYXJhbWV0ZXJzLnJlbGVhc2VNYXNzLCAxKSxcbiAgICAgIHN0aWZmbmVzczogc2V0VmFsdWUocGFyYW1ldGVycy5yZWxlYXNlU3RpZmZuZXNzLCA4MCksXG4gICAgICBkYW1waW5nOiBzZXRWYWx1ZShwYXJhbWV0ZXJzLnJlbGVhc2VEYW1waW5nLCAyMCksXG4gICAgfSk7XG4gICAgLyoqIEB0eXBlIHtTcHJpbmd9ICovXG4gICAgdGhpcy5yZWxlYXNlWVNwcmluZyA9IGhhc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKSA6IGNyZWF0ZVNwcmluZyh7XG4gICAgICBtYXNzOiBzZXRWYWx1ZShwYXJhbWV0ZXJzLnJlbGVhc2VNYXNzLCAxKSxcbiAgICAgIHN0aWZmbmVzczogc2V0VmFsdWUocGFyYW1ldGVycy5yZWxlYXNlU3RpZmZuZXNzLCA4MCksXG4gICAgICBkYW1waW5nOiBzZXRWYWx1ZShwYXJhbWV0ZXJzLnJlbGVhc2VEYW1waW5nLCAyMCksXG4gICAgfSk7XG4gICAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlbGVhc2VFYXNlID0gY3VzdG9tRWFzZSB8fCBlYXNlcy5vdXRRdWludDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5oYXNSZWxlYXNlU3ByaW5nID0gaGFzU3ByaW5nO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkdyYWIgPSBwYXJhbWV0ZXJzLm9uR3JhYiB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkRyYWcgPSBwYXJhbWV0ZXJzLm9uRHJhZyB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblJlbGVhc2UgPSBwYXJhbWV0ZXJzLm9uUmVsZWFzZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IHBhcmFtZXRlcnMub25VcGRhdGUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25TZXR0bGUgPSBwYXJhbWV0ZXJzLm9uU2V0dGxlIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uU25hcCA9IHBhcmFtZXRlcnMub25TbmFwIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uUmVzaXplID0gcGFyYW1ldGVycy5vblJlc2l6ZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkFmdGVyUmVzaXplID0gcGFyYW1ldGVycy5vbkFmdGVyUmVzaXplIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBbMCwgMF07XG4gICAgLyoqIEB0eXBlIHtBbmltYXRhYmxlUGFyYW1zfSAqL1xuICAgIGNvbnN0IGFuaW1hdGFibGVQYXJhbXMgPSB7fTtcbiAgICBpZiAobW9kaWZpZXIpIGFuaW1hdGFibGVQYXJhbXMubW9kaWZpZXIgPSBtb2RpZmllcjtcbiAgICBpZiAoaXNVbmQocGFyYW1YKSB8fCBwYXJhbVggPT09IHRydWUpIHtcbiAgICAgIGFuaW1hdGFibGVQYXJhbXNbeFByb3BdID0gMDtcbiAgICB9IGVsc2UgaWYgKGlzT2JqKHBhcmFtWCkpIHtcbiAgICAgIGNvbnN0IHBhcmFtWE9iamVjdCA9IC8qKiBAdHlwZSB7RHJhZ2dhYmxlQXhpc1BhcmFtfSAqLyhwYXJhbVgpO1xuICAgICAgY29uc3QgYW5pbWF0YWJsZVhQYXJhbXMgPSB7fTtcbiAgICAgIGlmIChwYXJhbVhPYmplY3QubW9kaWZpZXIpIGFuaW1hdGFibGVYUGFyYW1zLm1vZGlmaWVyID0gcGFyYW1YT2JqZWN0Lm1vZGlmaWVyO1xuICAgICAgaWYgKHBhcmFtWE9iamVjdC5jb21wb3NpdGlvbikgYW5pbWF0YWJsZVhQYXJhbXMuY29tcG9zaXRpb24gPSBwYXJhbVhPYmplY3QuY29tcG9zaXRpb247XG4gICAgICBhbmltYXRhYmxlUGFyYW1zW3hQcm9wXSA9IGFuaW1hdGFibGVYUGFyYW1zO1xuICAgIH0gZWxzZSBpZiAocGFyYW1YID09PSBmYWxzZSkge1xuICAgICAgYW5pbWF0YWJsZVBhcmFtc1t4UHJvcF0gPSAwO1xuICAgICAgdGhpcy5kaXNhYmxlZFswXSA9IDE7XG4gICAgfVxuICAgIGlmIChpc1VuZChwYXJhbVkpIHx8IHBhcmFtWSA9PT0gdHJ1ZSkge1xuICAgICAgYW5pbWF0YWJsZVBhcmFtc1t5UHJvcF0gPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNPYmoocGFyYW1ZKSkge1xuICAgICAgY29uc3QgcGFyYW1ZT2JqZWN0ID0gLyoqIEB0eXBlIHtEcmFnZ2FibGVBeGlzUGFyYW19ICovKHBhcmFtWSk7XG4gICAgICBjb25zdCBhbmltYXRhYmxlWVBhcmFtcyA9IHt9O1xuICAgICAgaWYgKHBhcmFtWU9iamVjdC5tb2RpZmllcikgYW5pbWF0YWJsZVlQYXJhbXMubW9kaWZpZXIgPSBwYXJhbVlPYmplY3QubW9kaWZpZXI7XG4gICAgICBpZiAocGFyYW1ZT2JqZWN0LmNvbXBvc2l0aW9uKSBhbmltYXRhYmxlWVBhcmFtcy5jb21wb3NpdGlvbiA9IHBhcmFtWU9iamVjdC5jb21wb3NpdGlvbjtcbiAgICAgIGFuaW1hdGFibGVQYXJhbXNbeVByb3BdID0gYW5pbWF0YWJsZVlQYXJhbXM7XG4gICAgfSBlbHNlIGlmIChwYXJhbVkgPT09IGZhbHNlKSB7XG4gICAgICBhbmltYXRhYmxlUGFyYW1zW3lQcm9wXSA9IDA7XG4gICAgICB0aGlzLmRpc2FibGVkWzFdID0gMTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtBbmltYXRhYmxlT2JqZWN0fSAqL1xuICAgIHRoaXMuYW5pbWF0ZSA9IC8qKiBAdHlwZSB7QW5pbWF0YWJsZU9iamVjdH0gKi8obmV3IEFuaW1hdGFibGUodGhpcy4kdGFyZ2V0LCBhbmltYXRhYmxlUGFyYW1zKSk7XG4gICAgLy8gSW50ZXJuYWwgcHJvcHNcbiAgICB0aGlzLnhQcm9wID0geFByb3A7XG4gICAgdGhpcy55UHJvcCA9IHlQcm9wO1xuICAgIHRoaXMuZGVzdFggPSAwO1xuICAgIHRoaXMuZGVzdFkgPSAwO1xuICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgdGhpcy5zY3JvbGwgPSB7eDogMCwgeTogMH07XG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLmNvb3JkcyA9IFt0aGlzLngsIHRoaXMueSwgMCwgMF07IC8vIHgsIHksIHRlbXAgeCwgdGVtcCB5XG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuc25hcHBlZCA9IFswLCAwXTsgLy8geCwgeVxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLnBvaW50ZXIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHgxLCB5MSwgeDIsIHkyLCB0ZW1wIHgxLCB0ZW1wIHkxLCB0ZW1wIHgyLCB0ZW1wIHkyXG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuc2Nyb2xsVmlldyA9IFswLCAwXTsgLy8gdywgaFxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5kcmFnQXJlYSA9IFswLCAwLCAwLCAwXTsgLy8geCwgeSwgdywgaFxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5jb250YWluZXJCb3VuZHMgPSBbLTFlMTIsIG1heFZhbHVlLCBtYXhWYWx1ZSwgLTFlMTJdOyAvLyB0LCByLCBiLCBsXG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLnNjcm9sbEJvdW5kcyA9IFswLCAwLCAwLCAwXTsgLy8gdCwgciwgYiwgbFxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy50YXJnZXRCb3VuZHMgPSBbMCwgMCwgMCwgMF07IC8vIHQsIHIsIGIsIGxcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy53aW5kb3cgPSBbMCwgMF07IC8vIHcsIGhcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLnZlbG9jaXR5U3RhY2sgPSBbMCwgMCwgMF07XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrSW5kZXggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMudmVsb2NpdHlUaW1lID0gbm93KCk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9cbiAgICB0aGlzLmN1cnNvclN0eWxlcyA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9cbiAgICB0aGlzLnRyaWdnZXJTdHlsZXMgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovXG4gICAgdGhpcy5ib2R5U3R5bGVzID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL1xuICAgIHRoaXMudGFyZ2V0U3R5bGVzID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL1xuICAgIHRoaXMudG91Y2hBY3Rpb25TdHlsZXMgPSBudWxsO1xuICAgIHRoaXMudHJhbnNmb3JtcyA9IG5ldyBUcmFuc2Zvcm1zKHRoaXMuJHRhcmdldCk7XG4gICAgdGhpcy5vdmVyc2hvb3RDb29yZHMgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB0aGlzLm92ZXJzaG9vdFhUaWNrZXIgPSBuZXcgVGltZXIoeyBhdXRvcGxheTogZmFsc2UgfSwgbnVsbCwgMCkuaW5pdCgpO1xuICAgIHRoaXMub3ZlcnNob290WVRpY2tlciA9IG5ldyBUaW1lcih7IGF1dG9wbGF5OiBmYWxzZSB9LCBudWxsLCAwKS5pbml0KCk7XG4gICAgdGhpcy51cGRhdGVUaWNrZXIgPSBuZXcgVGltZXIoeyBhdXRvcGxheTogZmFsc2UgfSwgbnVsbCwgMCkuaW5pdCgpO1xuICAgIHRoaXMub3ZlcnNob290WFRpY2tlci5vblVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkWzBdKSByZXR1cm47XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5tYW51YWwgPSB0cnVlO1xuICAgICAgdGhpcy5hbmltYXRlW3RoaXMueFByb3BdKHRoaXMub3ZlcnNob290Q29vcmRzLngsIDApO1xuICAgIH07XG4gICAgdGhpcy5vdmVyc2hvb3RYVGlja2VyLm9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZFswXSkgcmV0dXJuO1xuICAgICAgdGhpcy5tYW51YWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuYW5pbWF0ZVt0aGlzLnhQcm9wXSh0aGlzLm92ZXJzaG9vdENvb3Jkcy54LCAwKTtcbiAgICB9O1xuICAgIHRoaXMub3ZlcnNob290WVRpY2tlci5vblVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkWzFdKSByZXR1cm47XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5tYW51YWwgPSB0cnVlO1xuICAgICAgdGhpcy5hbmltYXRlW3RoaXMueVByb3BdKHRoaXMub3ZlcnNob290Q29vcmRzLnksIDApO1xuICAgIH07XG4gICAgdGhpcy5vdmVyc2hvb3RZVGlja2VyLm9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZFsxXSkgcmV0dXJuO1xuICAgICAgdGhpcy5tYW51YWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuYW5pbWF0ZVt0aGlzLnlQcm9wXSh0aGlzLm92ZXJzaG9vdENvb3Jkcy55LCAwKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlVGlja2VyLm9uVXBkYXRlID0gKCkgPT4gdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmNvbnRhaW5lZCA9ICFpc1VuZChjb250YWluZXIpO1xuICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gICAgdGhpcy5ncmFiYmVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWxlYXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlUHJvcCA9IHRoaXMuZGlzYWJsZWRbMV0gPyB4UHJvcCA6IHlQcm9wO1xuICAgIHRoaXMuYW5pbWF0ZS5hbmltYXRpb25zW3RoaXMuYWN0aXZlUHJvcF0ub25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYXNVcGRhdGVkID0gdGhpcy51cGRhdGVkO1xuICAgICAgY29uc3QgaGFzTW92ZWQgPSB0aGlzLmdyYWJiZWQgJiYgaGFzVXBkYXRlZDtcbiAgICAgIGNvbnN0IGhhc1JlbGVhc2VkID0gIWhhc01vdmVkICYmIHRoaXMucmVsZWFzZWQ7XG4gICAgICBjb25zdCB4ID0gdGhpcy54O1xuICAgICAgY29uc3QgeSA9IHRoaXMueTtcbiAgICAgIGNvbnN0IGR4ID0geCAtIHRoaXMuY29vcmRzWzJdO1xuICAgICAgY29uc3QgZHkgPSB5IC0gdGhpcy5jb29yZHNbM107XG4gICAgICB0aGlzLmRlbHRhWCA9IGR4O1xuICAgICAgdGhpcy5kZWx0YVkgPSBkeTtcbiAgICAgIHRoaXMuY29vcmRzWzJdID0geDtcbiAgICAgIHRoaXMuY29vcmRzWzNdID0geTtcbiAgICAgIGlmIChoYXNVcGRhdGVkKSB7XG4gICAgICAgIHRoaXMub25VcGRhdGUodGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAoIWhhc1JlbGVhc2VkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wdXRlVmVsb2NpdHkoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGF0YW4yKGR5LCBkeCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFuaW1hdGUuYW5pbWF0aW9uc1t0aGlzLmFjdGl2ZVByb3BdLm9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoKCF0aGlzLmdyYWJiZWQgJiYgdGhpcy5yZWxlYXNlZCkpIHtcbiAgICAgICAgLy8gU2V0IGVsZWFzZWQgdG8gZmFsc2UgYmVmb3JlIGNhbGxpbmcgb25TZXR0bGUgdG8gYXZvaWQgcmVjdXJzaW9uXG4gICAgICAgIHRoaXMucmVsZWFzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5tYW51YWwpIHtcbiAgICAgICAgdGhpcy5kZWx0YVggPSAwO1xuICAgICAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMF0gPSAwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMV0gPSAwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMl0gPSAwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5U3RhY2tJbmRleCA9IDA7XG4gICAgICAgIHRoaXMub25TZXR0bGUodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZVRpY2tlciA9IG5ldyBUaW1lcih7XG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBkdXJhdGlvbjogMTUwICogZ2xvYmFscy50aW1lU2NhbGUsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMub25SZXNpemUodGhpcyk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB0aGlzLm9uQWZ0ZXJSZXNpemUodGhpcyk7XG4gICAgICB9LFxuICAgIH0pLmluaXQoKTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5yZXNpemVUaWNrZXIucmVzdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbmFibGUoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy4kY29udGFpbmVyKTtcbiAgICBpZiAoIWlzT2JqKHRhcmdldCkpIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiR0YXJnZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gZHhcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkeVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBjb21wdXRlVmVsb2NpdHkoZHgsIGR5KSB7XG4gICAgY29uc3QgcHJldlRpbWUgPSB0aGlzLnZlbG9jaXR5VGltZTtcbiAgICBjb25zdCBjdXJUaW1lID0gbm93KCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IGN1clRpbWUgLSBwcmV2VGltZTtcbiAgICBpZiAoZWxhcHNlZCA8IDE3KSByZXR1cm4gdGhpcy52ZWxvY2l0eTtcbiAgICB0aGlzLnZlbG9jaXR5VGltZSA9IGN1clRpbWU7XG4gICAgY29uc3QgdmVsb2NpdHlTdGFjayA9IHRoaXMudmVsb2NpdHlTdGFjaztcbiAgICBjb25zdCB2TXVsID0gdGhpcy52ZWxvY2l0eU11bHRpcGxpZXI7XG4gICAgY29uc3QgbWluViA9IHRoaXMubWluVmVsb2NpdHk7XG4gICAgY29uc3QgbWF4ViA9IHRoaXMubWF4VmVsb2NpdHk7XG4gICAgY29uc3QgdmkgPSB0aGlzLnZlbG9jaXR5U3RhY2tJbmRleDtcbiAgICB2ZWxvY2l0eVN0YWNrW3ZpXSA9IHJvdW5kKGNsYW1wKChzcXJ0KGR4ICogZHggKyBkeSAqIGR5KSAvIGVsYXBzZWQpICogdk11bCwgbWluViwgbWF4ViksIDUpO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gbWF4KHZlbG9jaXR5U3RhY2tbMF0sIHZlbG9jaXR5U3RhY2tbMV0sIHZlbG9jaXR5U3RhY2tbMl0pO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tJbmRleCA9ICh2aSArIDEpICUgMztcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOdW1iZXJ9ICB4XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW211dGVVcGRhdGVDYWxsYmFja11cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHNldFgoeCwgbXV0ZVVwZGF0ZUNhbGxiYWNrID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZFswXSkgcmV0dXJuO1xuICAgIGNvbnN0IHYgPSByb3VuZCh4LCA1KTtcbiAgICB0aGlzLm92ZXJzaG9vdFhUaWNrZXIucGF1c2UoKTtcbiAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVkID0gIW11dGVVcGRhdGVDYWxsYmFjaztcbiAgICB0aGlzLmRlc3RYID0gdjtcbiAgICB0aGlzLnNuYXBwZWRbMF0gPSBzbmFwKHYsIHRoaXMuc25hcFgpO1xuICAgIHRoaXMuYW5pbWF0ZVt0aGlzLnhQcm9wXSh2LCAwKTtcbiAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSAgeVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttdXRlVXBkYXRlQ2FsbGJhY2tdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzZXRZKHksIG11dGVVcGRhdGVDYWxsYmFjayA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWRbMV0pIHJldHVybjtcbiAgICBjb25zdCB2ID0gcm91bmQoeSwgNSk7XG4gICAgdGhpcy5vdmVyc2hvb3RZVGlja2VyLnBhdXNlKCk7XG4gICAgdGhpcy5tYW51YWwgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlZCA9ICFtdXRlVXBkYXRlQ2FsbGJhY2s7XG4gICAgdGhpcy5kZXN0WSA9IHY7XG4gICAgdGhpcy5zbmFwcGVkWzFdID0gc25hcCh2LCB0aGlzLnNuYXBZKTtcbiAgICB0aGlzLmFuaW1hdGVbdGhpcy55UHJvcF0odiwgMCk7XG4gICAgdGhpcy5tYW51YWwgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiByb3VuZCgvKiogQHR5cGUge051bWJlcn0gKi8odGhpcy5hbmltYXRlW3RoaXMueFByb3BdKCkpLCBnbG9iYWxzLnByZWNpc2lvbik7XG4gIH1cblxuICBzZXQgeCh4KSB7XG4gICAgdGhpcy5zZXRYKHgsIGZhbHNlKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiByb3VuZCgvKiogQHR5cGUge051bWJlcn0gKi8odGhpcy5hbmltYXRlW3RoaXMueVByb3BdKCkpLCBnbG9iYWxzLnByZWNpc2lvbik7XG4gIH1cblxuICBzZXQgeSh5KSB7XG4gICAgdGhpcy5zZXRZKHksIGZhbHNlKTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzc1goKSB7XG4gICAgcmV0dXJuIG1hcFJhbmdlKHRoaXMueCwgdGhpcy5jb250YWluZXJCb3VuZHNbM10sIHRoaXMuY29udGFpbmVyQm91bmRzWzFdLCAwLCAxKTtcbiAgfVxuXG4gIHNldCBwcm9ncmVzc1goeCkge1xuICAgIHRoaXMuc2V0WChtYXBSYW5nZSh4LCAwLCAxLCB0aGlzLmNvbnRhaW5lckJvdW5kc1szXSwgdGhpcy5jb250YWluZXJCb3VuZHNbMV0pLCBmYWxzZSk7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NZKCkge1xuICAgIHJldHVybiBtYXBSYW5nZSh0aGlzLnksIHRoaXMuY29udGFpbmVyQm91bmRzWzBdLCB0aGlzLmNvbnRhaW5lckJvdW5kc1syXSwgMCwgMSk7XG4gIH1cblxuICBzZXQgcHJvZ3Jlc3NZKHkpIHtcbiAgICB0aGlzLnNldFkobWFwUmFuZ2UoeSwgMCwgMSwgdGhpcy5jb250YWluZXJCb3VuZHNbMF0sIHRoaXMuY29udGFpbmVyQm91bmRzWzJdKSwgZmFsc2UpO1xuICB9XG5cbiAgdXBkYXRlU2Nyb2xsQ29vcmRzKCkge1xuICAgIGNvbnN0IHN4ID0gcm91bmQodGhpcy51c2VXaW4gPyB3aW4uc2Nyb2xsWCA6IHRoaXMuJGNvbnRhaW5lci5zY3JvbGxMZWZ0LCAwKTtcbiAgICBjb25zdCBzeSA9IHJvdW5kKHRoaXMudXNlV2luID8gd2luLnNjcm9sbFkgOiB0aGlzLiRjb250YWluZXIuc2Nyb2xsVG9wLCAwKTtcbiAgICBjb25zdCBbIGNwdCwgY3ByLCBjcGIsIGNwbCBdID0gdGhpcy5jb250YWluZXJQYWRkaW5nO1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMuc2Nyb2xsVGhyZXNob2xkO1xuICAgIHRoaXMuc2Nyb2xsLnggPSBzeDtcbiAgICB0aGlzLnNjcm9sbC55ID0gc3k7XG4gICAgdGhpcy5zY3JvbGxCb3VuZHNbMF0gPSBzeSAtIHRoaXMudGFyZ2V0Qm91bmRzWzBdICsgY3B0IC0gdGhyZXNob2xkO1xuICAgIHRoaXMuc2Nyb2xsQm91bmRzWzFdID0gc3ggLSB0aGlzLnRhcmdldEJvdW5kc1sxXSAtIGNwciArIHRocmVzaG9sZDtcbiAgICB0aGlzLnNjcm9sbEJvdW5kc1syXSA9IHN5IC0gdGhpcy50YXJnZXRCb3VuZHNbMl0gLSBjcGIgKyB0aHJlc2hvbGQ7XG4gICAgdGhpcy5zY3JvbGxCb3VuZHNbM10gPSBzeCAtIHRoaXMudGFyZ2V0Qm91bmRzWzNdICsgY3BsIC0gdGhyZXNob2xkO1xuICB9XG5cbiAgdXBkYXRlQm91bmRpbmdWYWx1ZXMoKSB7XG4gICAgY29uc3QgJGNvbnRhaW5lciA9IHRoaXMuJGNvbnRhaW5lcjtcbiAgICBjb25zdCBjeCA9IHRoaXMueDtcbiAgICBjb25zdCBjeSA9IHRoaXMueTtcbiAgICBjb25zdCBjeDIgPSB0aGlzLmNvb3Jkc1syXTtcbiAgICBjb25zdCBjeTIgPSAgdGhpcy5jb29yZHNbM107XG4gICAgLy8gUHJldmVudHMgaW50ZXJmZXJpbmcgd2l0aCB0aGUgc2Nyb2xsIGFyZWEgaW4gY2FzZXMgdGhlIHRhcmdldCBpcyBvdXRzaWRlIG9mIHRoZSBjb250YWluZXJcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHRlbXAgY29vcmRzIGFyZSBhbHNvIGFkanVzZXQgdG8gcHJldmVudHMgd3JvbmcgZGVsdGEgY2FsY3VsYXRpb24gb24gdXBkYXRlc1xuICAgIHRoaXMuY29vcmRzWzJdID0gMDtcbiAgICB0aGlzLmNvb3Jkc1szXSA9IDA7XG4gICAgdGhpcy5zZXRYKDAsIHRydWUpO1xuICAgIHRoaXMuc2V0WSgwLCB0cnVlKTtcbiAgICB0aGlzLnRyYW5zZm9ybXMucmVtb3ZlKCk7XG4gICAgY29uc3QgaXcgPSB0aGlzLndpbmRvd1swXSA9IHdpbi5pbm5lcldpZHRoO1xuICAgIGNvbnN0IGloID0gdGhpcy53aW5kb3dbMV0gPSB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgdXcgPSB0aGlzLnVzZVdpbjtcbiAgICBjb25zdCBzdyA9ICRjb250YWluZXIuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3Qgc2ggPSAkY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICBjb25zdCBmeCA9IHRoaXMuZml4ZWQ7XG4gICAgY29uc3QgdHJhbnNmb3JtQ29udGFpbmVyUmVjdCA9ICRjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgWyBjcHQsIGNwciwgY3BiLCBjcGwgXSA9IHRoaXMuY29udGFpbmVyUGFkZGluZztcbiAgICB0aGlzLmRyYWdBcmVhWzBdID0gdXcgPyAwIDogdHJhbnNmb3JtQ29udGFpbmVyUmVjdC5sZWZ0O1xuICAgIHRoaXMuZHJhZ0FyZWFbMV0gPSB1dyA/IDAgOiB0cmFuc2Zvcm1Db250YWluZXJSZWN0LnRvcDtcbiAgICB0aGlzLnNjcm9sbFZpZXdbMF0gPSB1dyA/IGNsYW1wKHN3LCBpdywgc3cpIDogc3c7XG4gICAgdGhpcy5zY3JvbGxWaWV3WzFdID0gdXcgPyBjbGFtcChzaCwgaWgsIHNoKSA6IHNoO1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQ29vcmRzKCk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gfSA9ICRjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5kcmFnQXJlYVsyXSA9IHJvdW5kKHV3ID8gY2xhbXAod2lkdGgsIGl3LCBpdykgOiB3aWR0aCwgMCk7XG4gICAgdGhpcy5kcmFnQXJlYVszXSA9IHJvdW5kKHV3ID8gY2xhbXAoaGVpZ2h0LCBpaCwgaWgpIDogaGVpZ2h0LCAwKTtcbiAgICBjb25zdCBjb250YWluZXJPdmVyZmxvdyA9IGdldFRhcmdldFZhbHVlKCRjb250YWluZXIsICdvdmVyZmxvdycpO1xuICAgIGNvbnN0IHZpc2libGVPdmVyZmxvdyA9IGNvbnRhaW5lck92ZXJmbG93ID09PSAndmlzaWJsZSc7XG4gICAgY29uc3QgaGlkZGVuT3ZlcmZsb3cgPSBjb250YWluZXJPdmVyZmxvdyA9PT0gJ2hpZGRlbic7XG4gICAgdGhpcy5jYW5TY3JvbGwgPSBmeCA/IGZhbHNlIDpcbiAgICAgIHRoaXMuY29udGFpbmVkICYmXG4gICAgICAoKCRjb250YWluZXIgPT09IGRvYy5ib2R5ICYmIHZpc2libGVPdmVyZmxvdykgfHwgKCFoaWRkZW5PdmVyZmxvdyAmJiAhdmlzaWJsZU92ZXJmbG93KSkgJiZcbiAgICAgIChzdyA+IHRoaXMuZHJhZ0FyZWFbMl0gKyBjcGwgLSBjcHIgfHwgc2ggPiB0aGlzLmRyYWdBcmVhWzNdICsgY3B0IC0gY3BiKSAmJlxuICAgICAgKCF0aGlzLmNvbnRhaW5lckFycmF5IHx8ICh0aGlzLmNvbnRhaW5lckFycmF5ICYmICFpc0Fycih0aGlzLmNvbnRhaW5lckFycmF5KSkpO1xuICAgIGlmICh0aGlzLmNvbnRhaW5lZCkge1xuICAgICAgY29uc3Qgc3ggPSB0aGlzLnNjcm9sbC54O1xuICAgICAgY29uc3Qgc3kgPSB0aGlzLnNjcm9sbC55O1xuICAgICAgY29uc3QgY2FuU2Nyb2xsID0gdGhpcy5jYW5TY3JvbGw7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy4kdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgaGlkZGVuTGVmdCA9IGNhblNjcm9sbCA/IHV3ID8gMCA6ICRjb250YWluZXIuc2Nyb2xsTGVmdCA6IDA7XG4gICAgICBjb25zdCBoaWRkZW5Ub3AgPSBjYW5TY3JvbGwgPyB1dyA/IDAgOiAkY29udGFpbmVyLnNjcm9sbFRvcCA6IDA7XG4gICAgICBjb25zdCBoaWRkZW5SaWdodCA9IGNhblNjcm9sbCA/IHRoaXMuc2Nyb2xsVmlld1swXSAtIGhpZGRlbkxlZnQgLSB3aWR0aCA6IDA7XG4gICAgICBjb25zdCBoaWRkZW5Cb3R0b20gPSBjYW5TY3JvbGwgPyB0aGlzLnNjcm9sbFZpZXdbMV0gLSBoaWRkZW5Ub3AgLSBoZWlnaHQgOiAwO1xuICAgICAgdGhpcy50YXJnZXRCb3VuZHNbMF0gPSByb3VuZCgodGFyZ2V0UmVjdC50b3AgKyBzeSkgLSAodXcgPyAwIDogdG9wKSwgMCk7XG4gICAgICB0aGlzLnRhcmdldEJvdW5kc1sxXSA9IHJvdW5kKCh0YXJnZXRSZWN0LnJpZ2h0ICsgc3gpIC0gKHV3ID8gaXcgOiByaWdodCksIDApO1xuICAgICAgdGhpcy50YXJnZXRCb3VuZHNbMl0gPSByb3VuZCgodGFyZ2V0UmVjdC5ib3R0b20gKyBzeSkgLSAodXcgPyBpaCA6IGJvdHRvbSksIDApO1xuICAgICAgdGhpcy50YXJnZXRCb3VuZHNbM10gPSByb3VuZCgodGFyZ2V0UmVjdC5sZWZ0ICsgc3gpIC0gKHV3ID8gMCA6IGxlZnQpLCAwKTtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lckFycmF5KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzBdID0gdGhpcy5jb250YWluZXJBcnJheVswXSArIGNwdDtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbMV0gPSB0aGlzLmNvbnRhaW5lckFycmF5WzFdIC0gY3ByO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1syXSA9IHRoaXMuY29udGFpbmVyQXJyYXlbMl0gLSBjcGI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzNdID0gdGhpcy5jb250YWluZXJBcnJheVszXSArIGNwbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzBdID0gLXJvdW5kKHRhcmdldFJlY3QudG9wIC0gKGZ4ID8gY2xhbXAodG9wLCAwLCBpaCkgOiB0b3ApICsgaGlkZGVuVG9wIC0gY3B0LCAwKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbMV0gPSAtcm91bmQodGFyZ2V0UmVjdC5yaWdodCAtIChmeCA/IGNsYW1wKHJpZ2h0LCAwLCBpdykgOiByaWdodCkgLSBoaWRkZW5SaWdodCArIGNwciwgMCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzJdID0gLXJvdW5kKHRhcmdldFJlY3QuYm90dG9tIC0gKGZ4ID8gY2xhbXAoYm90dG9tLCAwLCBpaCkgOiBib3R0b20pIC0gaGlkZGVuQm90dG9tICsgY3BiLCAwKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbM10gPSAtcm91bmQodGFyZ2V0UmVjdC5sZWZ0IC0gKGZ4ID8gY2xhbXAobGVmdCwgMCwgaXcpIDogbGVmdCkgKyBoaWRkZW5MZWZ0IC0gY3BsLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50cmFuc2Zvcm1zLnJldmVydCgpO1xuICAgIC8vIFJlc3RvcmUgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmNvb3Jkc1syXSA9IGN4MjtcbiAgICB0aGlzLmNvb3Jkc1szXSA9IGN5MjtcbiAgICB0aGlzLnNldFgoY3gsIHRydWUpO1xuICAgIHRoaXMuc2V0WShjeSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAwIGlmIG5vdCBPQiwgMSBpZiB4IGlzIE9CLCAyIGlmIHkgaXMgT0IsIDMgaWYgYm90aCB4IGFuZCB5IGFyZSBPQlxuICAgKlxuICAgKiBAcGFyYW0gIHtBcnJheX0gYm91bmRzXG4gICAqIEBwYXJhbSAge051bWJlcn0geFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgaXNPdXRPZkJvdW5kcyhib3VuZHMsIHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVkKSByZXR1cm4gMDtcbiAgICBjb25zdCBbIGJ0LCBiciwgYmIsIGJsIF0gPSBib3VuZHM7XG4gICAgY29uc3QgWyBkeCwgZHkgXSA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgY29uc3Qgb2J4ID0gIWR4ICYmIHggPCBibCB8fCAhZHggJiYgeCA+IGJyO1xuICAgIGNvbnN0IG9ieSA9ICFkeSAmJiB5IDwgYnQgfHwgIWR5ICYmIHkgPiBiYjtcbiAgICByZXR1cm4gb2J4ICYmICFvYnkgPyAxIDogIW9ieCAmJiBvYnkgPyAyIDogb2J4ICYmIG9ieSA/IDMgOiAwO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnBhcmFtZXRlcnM7XG4gICAgY29uc3QgcGFyYW1YID0gcGFyYW1zLng7XG4gICAgY29uc3QgcGFyYW1ZID0gcGFyYW1zLnk7XG4gICAgY29uc3QgY29udGFpbmVyID0gcGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICBjb25zdCBjcCA9IHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmNvbnRhaW5lclBhZGRpbmcsIHRoaXMpIHx8IDA7XG4gICAgY29uc3QgY29udGFpbmVyUGFkZGluZyA9IC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovKGlzQXJyKGNwKSA/IGNwIDogW2NwLCBjcCwgY3AsIGNwXSk7XG4gICAgY29uc3QgY3ggPSB0aGlzLng7XG4gICAgY29uc3QgY3kgPSB0aGlzLnk7XG4gICAgY29uc3QgcGFyc2VkQ3Vyc29yU3R5bGVzID0gcGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuY3Vyc29yLCB0aGlzKTtcbiAgICBjb25zdCBjdXJzb3JTdHlsZXMgPSB7IG9uSG92ZXI6ICdncmFiJywgb25HcmFiOiAnZ3JhYmJpbmcnIH07XG4gICAgaWYgKHBhcnNlZEN1cnNvclN0eWxlcykge1xuICAgICAgY29uc3QgeyBvbkhvdmVyLCBvbkdyYWIgfSA9IC8qKiBAdHlwZSB7RHJhZ2dhYmxlQ3Vyc29yUGFyYW1zfSAqLyhwYXJzZWRDdXJzb3JTdHlsZXMpO1xuICAgICAgaWYgKG9uSG92ZXIpIGN1cnNvclN0eWxlcy5vbkhvdmVyID0gb25Ib3ZlcjtcbiAgICAgIGlmIChvbkdyYWIpIGN1cnNvclN0eWxlcy5vbkdyYWIgPSBvbkdyYWI7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyQXJyYXkgPSBpc0Fycihjb250YWluZXIpID8gY29udGFpbmVyIDogbnVsbDtcbiAgICB0aGlzLiRjb250YWluZXIgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhjb250YWluZXIgJiYgIXRoaXMuY29udGFpbmVyQXJyYXkgPyBwYXJzZVRhcmdldHMoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKGNvbnRhaW5lcikpWzBdIDogZG9jLmJvZHkpO1xuICAgIHRoaXMudXNlV2luID0gdGhpcy4kY29udGFpbmVyID09PSBkb2MuYm9keTtcbiAgICAvKiogQHR5cGUge1dpbmRvdyB8IEhUTUxFbGVtZW50fSAqL1xuICAgIHRoaXMuJHNjcm9sbENvbnRhaW5lciA9IHRoaXMudXNlV2luID8gd2luIDogdGhpcy4kY29udGFpbmVyO1xuICAgIHRoaXMuaXNGaW5lUG9pbnRlciA9IG1hdGNoTWVkaWEoJyhwb2ludGVyOmZpbmUpJykubWF0Y2hlcztcbiAgICB0aGlzLmNvbnRhaW5lclBhZGRpbmcgPSBzZXRWYWx1ZShjb250YWluZXJQYWRkaW5nLCBbMCwgMCwgMCwgMF0pO1xuICAgIHRoaXMuY29udGFpbmVyRnJpY3Rpb24gPSBjbGFtcChzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5jb250YWluZXJGcmljdGlvbiwgdGhpcyksIC44KSwgMCwgMSk7XG4gICAgdGhpcy5yZWxlYXNlQ29udGFpbmVyRnJpY3Rpb24gPSBjbGFtcChzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5yZWxlYXNlQ29udGFpbmVyRnJpY3Rpb24sIHRoaXMpLCB0aGlzLmNvbnRhaW5lckZyaWN0aW9uKSwgMCwgMSk7XG4gICAgdGhpcy5zbmFwWCA9IHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIoaXNPYmoocGFyYW1YKSAmJiAhaXNVbmQocGFyYW1YLnNuYXApID8gcGFyYW1YLnNuYXAgOiBwYXJhbXMuc25hcCwgdGhpcyk7XG4gICAgdGhpcy5zbmFwWSA9IHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIoaXNPYmoocGFyYW1ZKSAmJiAhaXNVbmQocGFyYW1ZLnNuYXApID8gcGFyYW1ZLnNuYXAgOiBwYXJhbXMuc25hcCwgdGhpcyk7XG4gICAgdGhpcy5zY3JvbGxTcGVlZCA9IHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLnNjcm9sbFNwZWVkLCB0aGlzKSwgMS41KTtcbiAgICB0aGlzLnNjcm9sbFRocmVzaG9sZCA9IHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLnNjcm9sbFRocmVzaG9sZCwgdGhpcyksIDIwKTtcbiAgICB0aGlzLmRyYWdTcGVlZCA9IHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmRyYWdTcGVlZCwgdGhpcyksIDEpO1xuICAgIHRoaXMubWluVmVsb2NpdHkgPSBzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5taW5WZWxvY2l0eSwgdGhpcyksIDApO1xuICAgIHRoaXMubWF4VmVsb2NpdHkgPSBzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5tYXhWZWxvY2l0eSwgdGhpcyksIDUwKTtcbiAgICB0aGlzLnZlbG9jaXR5TXVsdGlwbGllciA9IHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLnZlbG9jaXR5TXVsdGlwbGllciwgdGhpcyksIDEpO1xuICAgIHRoaXMuY3Vyc29yID0gcGFyc2VkQ3Vyc29yU3R5bGVzID09PSBmYWxzZSA/IGZhbHNlIDogY3Vyc29yU3R5bGVzO1xuICAgIHRoaXMudXBkYXRlQm91bmRpbmdWYWx1ZXMoKTtcblxuICAgIC8vIGNvbnN0IG9iID0gdGhpcy5pc091dE9mQm91bmRzKHRoaXMuY29udGFpbmVyQm91bmRzLCB0aGlzLngsIHRoaXMueSk7XG4gICAgLy8gaWYgKG9iID09PSAxIHx8IG9iID09PSAzKSB0aGlzLnByb2dyZXNzWCA9IHB4O1xuICAgIC8vIGlmIChvYiA9PT0gMiB8fCBvYiA9PT0gMykgdGhpcy5wcm9ncmVzc1kgPSBweTtcblxuICAgIC8vIGlmICh0aGlzLmluaXRpYWxpemVkICYmIHRoaXMuY29udGFpbmVkKSB7XG4gICAgLy8gICBpZiAodGhpcy5wcm9ncmVzc1ggIT09IHB4KSB0aGlzLnByb2dyZXNzWCA9IHB4O1xuICAgIC8vICAgaWYgKHRoaXMucHJvZ3Jlc3NZICE9PSBweSkgdGhpcy5wcm9ncmVzc1kgPSBweTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBbIGJ0LCBiciwgYmIsIGJsIF0gPSB0aGlzLmNvbnRhaW5lckJvdW5kcztcbiAgICB0aGlzLnNldFgoY2xhbXAoY3gsIGJsLCBiciksIHRydWUpO1xuICAgIHRoaXMuc2V0WShjbGFtcChjeSwgYnQsIGJiKSwgdHJ1ZSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVTY3JvbGxDb29yZHMoKTtcbiAgICBpZiAodGhpcy5jYW5TY3JvbGwpIHtcbiAgICAgIGNvbnN0IFsgY3B0LCBjcHIsIGNwYiwgY3BsIF0gPSB0aGlzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgICBjb25zdCBbIHN3LCBzaCBdID0gdGhpcy5zY3JvbGxWaWV3O1xuICAgICAgY29uc3QgZGF3ID0gdGhpcy5kcmFnQXJlYVsyXTtcbiAgICAgIGNvbnN0IGRhaCA9IHRoaXMuZHJhZ0FyZWFbM107XG4gICAgICBjb25zdCBjc3ggPSB0aGlzLnNjcm9sbC54O1xuICAgICAgY29uc3QgY3N5ID0gdGhpcy5zY3JvbGwueTtcbiAgICAgIGNvbnN0IG5zdyA9IHRoaXMuJGNvbnRhaW5lci5zY3JvbGxXaWR0aDtcbiAgICAgIGNvbnN0IG5zaCA9IHRoaXMuJGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICBjb25zdCBjc3cgPSB0aGlzLnVzZVdpbiA/IGNsYW1wKG5zdywgdGhpcy53aW5kb3dbMF0sIG5zdykgOiBuc3c7XG4gICAgICBjb25zdCBjc2ggPSB0aGlzLnVzZVdpbiA/IGNsYW1wKG5zaCwgdGhpcy53aW5kb3dbMV0sIG5zaCkgOiBuc2g7XG4gICAgICBjb25zdCBzd2QgPSBzdyAtIGNzdztcbiAgICAgIGNvbnN0IHNoZCA9IHNoIC0gY3NoO1xuICAgICAgLy8gSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBzY3JvbGxhcmVhIGRpbWVuc2lvbnMgY2hhbmdlcyBkdXJpbmcgZHJhZ1xuICAgICAgaWYgKHRoaXMuZHJhZ2dlZCAmJiBzd2QgPiAwKSB7XG4gICAgICAgIHRoaXMuY29vcmRzWzBdIC09IHN3ZDtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3WzBdID0gY3N3O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZHJhZ2dlZCAmJiBzaGQgPiAwKSB7XG4gICAgICAgIHRoaXMuY29vcmRzWzFdIC09IHNoZDtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3WzFdID0gY3NoO1xuICAgICAgfVxuICAgICAgLy8gSGFuZGxlIGF1dG9zY3JvbGwgd2hlbiB0YXJnZXQgaXMgYXQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JvbGwgYm91bmRzXG4gICAgICBjb25zdCBzID0gdGhpcy5zY3JvbGxTcGVlZCAqIDEwO1xuICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5zY3JvbGxUaHJlc2hvbGQ7XG4gICAgICBjb25zdCBbIHgsIHkgXSA9IHRoaXMuY29vcmRzO1xuICAgICAgY29uc3QgWyBzdCwgc3IsIHNiLCBzbCBdID0gdGhpcy5zY3JvbGxCb3VuZHM7XG4gICAgICBjb25zdCB0ID0gcm91bmQoY2xhbXAoKHkgLSBzdCArIGNwdCkgLyB0aHJlc2hvbGQsIC0xLCAwKSAqIHMsIDApO1xuICAgICAgY29uc3QgciA9IHJvdW5kKGNsYW1wKCh4IC0gc3IgLSBjcHIpIC8gdGhyZXNob2xkLCAwLCAxKSAqIHMsIDApO1xuICAgICAgY29uc3QgYiA9IHJvdW5kKGNsYW1wKCh5IC0gc2IgLSBjcGIpIC8gdGhyZXNob2xkLCAwLCAxKSAqIHMsIDApO1xuICAgICAgY29uc3QgbCA9IHJvdW5kKGNsYW1wKCh4IC0gc2wgKyBjcGwpIC8gdGhyZXNob2xkLCAtMSwgMCkgKiBzLCAwKTtcbiAgICAgIGlmICh0IHx8IGIgfHwgbCB8fCByKSB7XG4gICAgICAgIGNvbnN0IFtueCwgbnldID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgICAgbGV0IHNjcm9sbFggPSBjc3g7XG4gICAgICAgIGxldCBzY3JvbGxZID0gY3N5O1xuICAgICAgICBpZiAoIW54KSB7XG4gICAgICAgICAgc2Nyb2xsWCA9IHJvdW5kKGNsYW1wKGNzeCArIChsIHx8IHIpLCAwLCBzdyAtIGRhdyksIDApO1xuICAgICAgICAgIHRoaXMuY29vcmRzWzBdIC09IGNzeCAtIHNjcm9sbFg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFueSkge1xuICAgICAgICAgIHNjcm9sbFkgPSByb3VuZChjbGFtcChjc3kgKyAodCB8fCBiKSwgMCwgc2ggLSBkYWgpLCAwKTtcbiAgICAgICAgICB0aGlzLmNvb3Jkc1sxXSAtPSBjc3kgLSBzY3JvbGxZO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGU6IFNhZmFyaSBtb2JpbGUgcmVxdWlyZXMgdG8gdXNlIGRpZmZlcmVudCBzY3JvbGwgbWV0aG9kcyBkZXBlbmRpbmcgaWYgdXNpbmcgdGhlIHdpbmRvdyBvciBub3RcbiAgICAgICAgaWYgKHRoaXMudXNlV2luKSB7XG4gICAgICAgICAgdGhpcy4kc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEJ5KC0oY3N4IC0gc2Nyb2xsWCksIC0oY3N5IC0gc2Nyb2xsWSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbIGN0LCBjciwgY2IsIGNsIF0gPSB0aGlzLmNvbnRhaW5lckJvdW5kcztcbiAgICBjb25zdCBbIHB4MSwgcHkxLCBweDIsIHB5MiwgcHgzLCBweTMgXSA9IHRoaXMucG9pbnRlcjtcbiAgICB0aGlzLmNvb3Jkc1swXSArPSAocHgxIC0gcHgzKSAqIHRoaXMuZHJhZ1NwZWVkO1xuICAgIHRoaXMuY29vcmRzWzFdICs9IChweTEgLSBweTMpICogdGhpcy5kcmFnU3BlZWQ7XG4gICAgdGhpcy5wb2ludGVyWzRdID0gcHgxO1xuICAgIHRoaXMucG9pbnRlcls1XSA9IHB5MTtcbiAgICBjb25zdCBbIGN4LCBjeSBdID0gdGhpcy5jb29yZHM7XG4gICAgY29uc3QgWyBzeCwgc3kgXSA9IHRoaXMuc25hcHBlZDtcbiAgICBjb25zdCBjZiA9ICgxIC0gdGhpcy5jb250YWluZXJGcmljdGlvbikgKiB0aGlzLmRyYWdTcGVlZDtcbiAgICB0aGlzLnNldFgoY3ggPiBjciA/IGNyICsgKGN4IC0gY3IpICogY2YgOiBjeCA8IGNsID8gY2wgKyAoY3ggLSBjbCkgKiBjZiA6IGN4LCBmYWxzZSk7XG4gICAgdGhpcy5zZXRZKGN5ID4gY2IgPyBjYiArIChjeSAtIGNiKSAqIGNmIDogY3kgPCBjdCA/IGN0ICsgKGN5IC0gY3QpICogY2YgOiBjeSwgZmFsc2UpO1xuICAgIHRoaXMuY29tcHV0ZVZlbG9jaXR5KHB4MSAtIHB4MywgcHkxIC0gcHkzKTtcbiAgICB0aGlzLmFuZ2xlID0gYXRhbjIocHkxIC0gcHkyLCBweDEgLSBweDIpO1xuICAgIGNvbnN0IFsgbnN4LCBuc3kgXSA9IHRoaXMuc25hcHBlZDtcbiAgICBpZiAobnN4ICE9PSBzeCAmJiB0aGlzLnNuYXBYIHx8IG5zeSAhPT0gc3kgJiYgdGhpcy5zbmFwWSkge1xuICAgICAgdGhpcy5vblNuYXAodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnVwZGF0ZVRpY2tlci5wYXVzZSgpO1xuICAgIHRoaXMub3ZlcnNob290WFRpY2tlci5wYXVzZSgpO1xuICAgIHRoaXMub3ZlcnNob290WVRpY2tlci5wYXVzZSgpO1xuICAgIC8vIFBhdXNlcyB0aGUgaW4gYm91bmRzIG9uUmVsZWFzZSBhbmltYXRpb25zXG4gICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmFuaW1hdGUuYW5pbWF0aW9ucykgdGhpcy5hbmltYXRlLmFuaW1hdGlvbnNbcHJvcF0ucGF1c2UoKTtcbiAgICByZW1vdmUodGhpcywgbnVsbCwgJ3gnKTtcbiAgICByZW1vdmUodGhpcywgbnVsbCwgJ3knKTtcbiAgICByZW1vdmUodGhpcywgbnVsbCwgJ3Byb2dyZXNzWCcpO1xuICAgIHJlbW92ZSh0aGlzLCBudWxsLCAncHJvZ3Jlc3NZJyk7XG4gICAgcmVtb3ZlKHRoaXMuc2Nyb2xsKTsgLy8gUmVtb3ZlcyBhbnkgYWN0aXZlIGFuaW1hdGlvbnMgb24gdGhlIGNvbnRhaW5lciBzY3JvbGxcbiAgICByZW1vdmUodGhpcy5vdmVyc2hvb3RDb29yZHMpOyAvLyBSZW1vdmVzIGFjdGl2ZSBvdmVyc2hvb3QgYW5pbWF0aW9uc1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbZHVyYXRpb25dXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbZ2FwXVxuICAgKiBAcGFyYW0ge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHNjcm9sbEluVmlldyhkdXJhdGlvbiwgZ2FwID0gMCwgZWFzZSA9IGVhc2VzLmluT3V0UXVhZCkge1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQ29vcmRzKCk7XG4gICAgY29uc3QgeCA9IHRoaXMuZGVzdFg7XG4gICAgY29uc3QgeSA9IHRoaXMuZGVzdFk7XG4gICAgY29uc3Qgc2Nyb2xsID0gdGhpcy5zY3JvbGw7XG4gICAgY29uc3Qgc2Nyb2xsQm91bmRzID0gdGhpcy5zY3JvbGxCb3VuZHM7XG4gICAgY29uc3QgY2FuU2Nyb2xsID0gdGhpcy5jYW5TY3JvbGw7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lckFycmF5ICYmIHRoaXMuaXNPdXRPZkJvdW5kcyhzY3JvbGxCb3VuZHMsIHgsIHkpKSB7XG4gICAgICBjb25zdCBbIHN0LCBzciwgc2IsIHNsIF0gPSBzY3JvbGxCb3VuZHM7XG4gICAgICBjb25zdCB0ID0gcm91bmQoY2xhbXAoeSAtIHN0LCAtMWUxMiwgMCksIDApO1xuICAgICAgY29uc3QgciA9IHJvdW5kKGNsYW1wKHggLSBzciwgMCwgbWF4VmFsdWUpLCAwKTtcbiAgICAgIGNvbnN0IGIgPSByb3VuZChjbGFtcCh5IC0gc2IsIDAsIG1heFZhbHVlKSwgMCk7XG4gICAgICBjb25zdCBsID0gcm91bmQoY2xhbXAoeCAtIHNsLCAtMWUxMiwgMCksIDApO1xuICAgICAgbmV3IEpTQW5pbWF0aW9uKHNjcm9sbCwge1xuICAgICAgICB4OiByb3VuZChzY3JvbGwueCArIChsID8gbCAtIGdhcCA6IHIgPyByICsgZ2FwIDogMCksIDApLFxuICAgICAgICB5OiByb3VuZChzY3JvbGwueSArICh0ID8gdCAtIGdhcCA6IGIgPyBiICsgZ2FwIDogMCksIDApLFxuICAgICAgICBkdXJhdGlvbjogaXNVbmQoZHVyYXRpb24pID8gMzUwICogZ2xvYmFscy50aW1lU2NhbGUgOiBkdXJhdGlvbixcbiAgICAgICAgZWFzZSxcbiAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhblNjcm9sbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuJHNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyhzY3JvbGwueCwgc2Nyb2xsLnkpO1xuICAgICAgICB9XG4gICAgICB9KS5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FuU2Nyb2xsID0gY2FuU2Nyb2xsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFuZGxlSG92ZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNGaW5lUG9pbnRlciAmJiB0aGlzLmN1cnNvciAmJiAhdGhpcy5jdXJzb3JTdHlsZXMpIHtcbiAgICAgIHRoaXMuY3Vyc29yU3R5bGVzID0gc2V0VGFyZ2V0VmFsdWVzKHRoaXMuJHRyaWdnZXIsIHtcbiAgICAgICAgY3Vyc29yOiAvKiogQHR5cGUge0RyYWdnYWJsZUN1cnNvclBhcmFtc30gKi8odGhpcy5jdXJzb3IpLm9uSG92ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtkdXJhdGlvbl1cbiAgICogQHBhcmFtICB7TnVtYmVyfSBbZ2FwXVxuICAgKiBAcGFyYW0gIHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBhbmltYXRlSW5WaWV3KGR1cmF0aW9uLCBnYXAgPSAwLCBlYXNlID0gZWFzZXMuaW5PdXRRdWFkKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy51cGRhdGVCb3VuZGluZ1ZhbHVlcygpO1xuICAgIGNvbnN0IHggPSB0aGlzLng7XG4gICAgY29uc3QgeSA9IHRoaXMueTtcbiAgICBjb25zdCBbIGNwdCwgY3ByLCBjcGIsIGNwbCBdID0gdGhpcy5jb250YWluZXJQYWRkaW5nO1xuICAgIGNvbnN0IGJ0ID0gdGhpcy5zY3JvbGwueSAtIHRoaXMudGFyZ2V0Qm91bmRzWzBdICsgY3B0ICsgZ2FwO1xuICAgIGNvbnN0IGJyID0gdGhpcy5zY3JvbGwueCAtIHRoaXMudGFyZ2V0Qm91bmRzWzFdIC0gY3ByIC0gZ2FwO1xuICAgIGNvbnN0IGJiID0gdGhpcy5zY3JvbGwueSAtIHRoaXMudGFyZ2V0Qm91bmRzWzJdIC0gY3BiIC0gZ2FwO1xuICAgIGNvbnN0IGJsID0gdGhpcy5zY3JvbGwueCAtIHRoaXMudGFyZ2V0Qm91bmRzWzNdICsgY3BsICsgZ2FwO1xuICAgIGNvbnN0IG9iID0gdGhpcy5pc091dE9mQm91bmRzKFtidCwgYnIsIGJiLCBibF0sIHgsIHkpO1xuICAgIGlmIChvYikge1xuICAgICAgY29uc3QgWyBkaXNhYmxlZFgsIGRpc2FibGVkWSBdID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgIGNvbnN0IGRlc3RYID0gY2xhbXAoc25hcCh4LCB0aGlzLnNuYXBYKSwgYmwsIGJyKTtcbiAgICAgIGNvbnN0IGRlc3RZID0gY2xhbXAoc25hcCh5LCB0aGlzLnNuYXBZKSwgYnQsIGJiKTtcbiAgICAgIGNvbnN0IGR1ciA9IGlzVW5kKGR1cmF0aW9uKSA/IDM1MCAqIGdsb2JhbHMudGltZVNjYWxlIDogZHVyYXRpb247XG4gICAgICBpZiAoIWRpc2FibGVkWCAmJiAob2IgPT09IDEgfHwgb2IgPT09IDMpKSB0aGlzLmFuaW1hdGVbdGhpcy54UHJvcF0oZGVzdFgsIGR1ciwgZWFzZSk7XG4gICAgICBpZiAoIWRpc2FibGVkWSAmJiAob2IgPT09IDIgfHwgb2IgPT09IDMpKSB0aGlzLmFuaW1hdGVbdGhpcy55UHJvcF0oZGVzdFksIGR1ciwgZWFzZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBlXG4gICAqL1xuICBoYW5kbGVEb3duKGUpIHtcbiAgICBjb25zdCAkZVRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKGUudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5ncmFiYmVkIHx8IC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gICovKCRlVGFyZ2V0KS50eXBlID09PSAncmFuZ2UnKSByZXR1cm47XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5ncmFiYmVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlbGVhc2VkID0gZmFsc2U7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy51cGRhdGVCb3VuZGluZ1ZhbHVlcygpO1xuICAgIGNvbnN0IHRvdWNoZXMgPSAvKiogQHR5cGUge1RvdWNoRXZlbnR9ICovKGUpLmNoYW5nZWRUb3VjaGVzO1xuICAgIGNvbnN0IGV2ZW50WCA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdLmNsaWVudFggOiAvKiogQHR5cGUge01vdXNlRXZlbnR9ICovKGUpLmNsaWVudFg7XG4gICAgY29uc3QgZXZlbnRZID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0uY2xpZW50WSA6IC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8oZSkuY2xpZW50WTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMudHJhbnNmb3Jtcy5ub3JtYWxpemVQb2ludChldmVudFgsIGV2ZW50WSk7XG4gICAgY29uc3QgWyBjdCwgY3IsIGNiLCBjbCBdID0gdGhpcy5jb250YWluZXJCb3VuZHM7XG4gICAgY29uc3QgY2YgPSAoMSAtIHRoaXMuY29udGFpbmVyRnJpY3Rpb24pICogdGhpcy5kcmFnU3BlZWQ7XG4gICAgY29uc3QgY3ggPSB0aGlzLng7XG4gICAgY29uc3QgY3kgPSB0aGlzLnk7XG4gICAgdGhpcy5jb29yZHNbMF0gPSB0aGlzLmNvb3Jkc1syXSA9ICFjZiA/IGN4IDogY3ggPiBjciA/IGNyICsgKGN4IC0gY3IpIC8gY2YgOiBjeCA8IGNsID8gY2wgKyAoY3ggLSBjbCkgLyBjZiA6IGN4O1xuICAgIHRoaXMuY29vcmRzWzFdID0gdGhpcy5jb29yZHNbM10gPSAhY2YgPyBjeSA6IGN5ID4gY2IgPyBjYiArIChjeSAtIGNiKSAvIGNmIDogY3kgPCBjdCA/IGN0ICsgKGN5IC0gY3QpIC8gY2YgOiBjeTtcbiAgICB0aGlzLnBvaW50ZXJbMF0gPSB4O1xuICAgIHRoaXMucG9pbnRlclsxXSA9IHk7XG4gICAgdGhpcy5wb2ludGVyWzJdID0geDtcbiAgICB0aGlzLnBvaW50ZXJbM10gPSB5O1xuICAgIHRoaXMucG9pbnRlcls0XSA9IHg7XG4gICAgdGhpcy5wb2ludGVyWzVdID0geTtcbiAgICB0aGlzLnBvaW50ZXJbNl0gPSB4O1xuICAgIHRoaXMucG9pbnRlcls3XSA9IHk7XG4gICAgdGhpcy5kZWx0YVggPSAwO1xuICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMF0gPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja1sxXSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrWzJdID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tJbmRleCA9IDA7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgaWYgKHRoaXMudGFyZ2V0U3R5bGVzKSB7XG4gICAgICB0aGlzLnRhcmdldFN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMudGFyZ2V0U3R5bGVzID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeiA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhnZXRUYXJnZXRWYWx1ZSh0aGlzLiR0YXJnZXQsICd6SW5kZXgnLCBmYWxzZSkpO1xuICAgIHpJbmRleCA9ICh6ID4gekluZGV4ID8geiA6IHpJbmRleCkgKyAxO1xuICAgIHRoaXMudGFyZ2V0U3R5bGVzID0gc2V0VGFyZ2V0VmFsdWVzKHRoaXMuJHRhcmdldCwgeyB6SW5kZXggfSk7XG4gICAgaWYgKHRoaXMudHJpZ2dlclN0eWxlcykge1xuICAgICAgdGhpcy50cmlnZ2VyU3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy50cmlnZ2VyU3R5bGVzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3Vyc29yU3R5bGVzKSB7XG4gICAgICB0aGlzLmN1cnNvclN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMuY3Vyc29yU3R5bGVzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNGaW5lUG9pbnRlciAmJiB0aGlzLmN1cnNvcikge1xuICAgICAgdGhpcy5ib2R5U3R5bGVzID0gc2V0VGFyZ2V0VmFsdWVzKGRvYy5ib2R5LCB7XG4gICAgICAgIGN1cnNvcjogLyoqIEB0eXBlIHtEcmFnZ2FibGVDdXJzb3JQYXJhbXN9ICovKHRoaXMuY3Vyc29yKS5vbkdyYWJcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbEluVmlldygxMDAsIDAsIGVhc2VzLm91dCgzKSk7XG4gICAgdGhpcy5vbkdyYWIodGhpcyk7XG5cbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdHN0YXJ0JywgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGVcbiAgICovXG4gIGhhbmRsZU1vdmUoZSkge1xuICAgIGlmICghdGhpcy5ncmFiYmVkKSByZXR1cm47XG4gICAgY29uc3QgdG91Y2hlcyA9IC8qKiBAdHlwZSB7VG91Y2hFdmVudH0gKi8oZSkuY2hhbmdlZFRvdWNoZXM7XG4gICAgY29uc3QgZXZlbnRYID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0uY2xpZW50WCA6IC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8oZSkuY2xpZW50WDtcbiAgICBjb25zdCBldmVudFkgPSB0b3VjaGVzID8gdG91Y2hlc1swXS5jbGllbnRZIDogLyoqIEB0eXBlIHtNb3VzZUV2ZW50fSAqLyhlKS5jbGllbnRZO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy50cmFuc2Zvcm1zLm5vcm1hbGl6ZVBvaW50KGV2ZW50WCwgZXZlbnRZKTtcbiAgICBjb25zdCBtb3ZlZFggPSB4IC0gdGhpcy5wb2ludGVyWzZdO1xuICAgIGNvbnN0IG1vdmVkWSA9IHkgLSB0aGlzLnBvaW50ZXJbN107XG5cbiAgICBsZXQgJHBhcmVudCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKGUudGFyZ2V0KTtcbiAgICBsZXQgaXNBdFRvcCA9IGZhbHNlO1xuICAgIGxldCBpc0F0Qm90dG9tID0gZmFsc2U7XG4gICAgbGV0IGNhblRvdWNoU2Nyb2xsID0gZmFsc2U7XG5cbiAgICB3aGlsZSAodG91Y2hlcyAmJiAkcGFyZW50ICYmICRwYXJlbnQgIT09IHRoaXMuJHRyaWdnZXIpIHtcbiAgICAgIGNvbnN0IG92ZXJmbG93WSA9IGdldFRhcmdldFZhbHVlKCRwYXJlbnQsICdvdmVyZmxvdy15Jyk7XG4gICAgICBpZiAob3ZlcmZsb3dZICE9PSAnaGlkZGVuJyAmJiBvdmVyZmxvd1kgIT09ICd2aXNpYmxlJykge1xuICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSA9ICRwYXJlbnQ7XG4gICAgICAgIGlmIChzY3JvbGxIZWlnaHQgPiBjbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICBjYW5Ub3VjaFNjcm9sbCA9IHRydWU7XG4gICAgICAgICAgaXNBdFRvcCA9IHNjcm9sbFRvcCA8PSAzO1xuICAgICAgICAgIGlzQXRCb3R0b20gPSBzY3JvbGxUb3AgPj0gKHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCkgLSAzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkcGFyZW50ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oJHBhcmVudC5wYXJlbnROb2RlKTtcbiAgICB9XG5cbiAgICBpZiAoY2FuVG91Y2hTY3JvbGwgJiYgKCghaXNBdFRvcCAmJiAhaXNBdEJvdHRvbSkgfHwgKGlzQXRUb3AgJiYgbW92ZWRZIDwgMCkgfHwgKGlzQXRCb3R0b20gJiYgbW92ZWRZID4gMCkpKSB7XG5cbiAgICAgIHRoaXMucG9pbnRlclswXSA9IHg7XG4gICAgICB0aGlzLnBvaW50ZXJbMV0gPSB5O1xuICAgICAgdGhpcy5wb2ludGVyWzJdID0geDtcbiAgICAgIHRoaXMucG9pbnRlclszXSA9IHk7XG4gICAgICB0aGlzLnBvaW50ZXJbNF0gPSB4O1xuICAgICAgdGhpcy5wb2ludGVyWzVdID0geTtcbiAgICAgIHRoaXMucG9pbnRlcls2XSA9IHg7XG4gICAgICB0aGlzLnBvaW50ZXJbN10gPSB5O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgcHJldmVudERlZmF1bHQoZSk7XG5cbiAgICAgIC8vIE5lZWRlZCB0byBwcmV2ZW50cyBjbGljayBvbiBoYW5kbGVVcFxuICAgICAgaWYgKCF0aGlzLnRyaWdnZXJTdHlsZXMpIHRoaXMudHJpZ2dlclN0eWxlcyA9IHNldFRhcmdldFZhbHVlcyh0aGlzLiR0cmlnZ2VyLCB7IHBvaW50ZXJFdmVudHM6ICdub25lJyB9KTtcbiAgICAgIC8vIE5lZWRlZCB0byBwcmV2ZW50IHBhZ2Ugc2Nyb2xsIHdoaWxlIGRyYWdnaW5nIG9uIHRvdWNoIGRldnZpY2VcbiAgICAgIHRoaXMuJHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgdGhpcy4kdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuJHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBwcmV2ZW50RGVmYXVsdCk7XG5cblxuICAgICAgaWYgKCghdGhpcy5kaXNhYmxlZFswXSAmJiBhYnMobW92ZWRYKSA+IDMpIHx8ICghdGhpcy5kaXNhYmxlZFsxXSAmJiBhYnMobW92ZWRZKSA+IDMpKSB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUaWNrZXIucmVzdW1lKCk7XG4gICAgICAgIHRoaXMucG9pbnRlclsyXSA9IHRoaXMucG9pbnRlclswXTtcbiAgICAgICAgdGhpcy5wb2ludGVyWzNdID0gdGhpcy5wb2ludGVyWzFdO1xuICAgICAgICB0aGlzLnBvaW50ZXJbMF0gPSB4O1xuICAgICAgICB0aGlzLnBvaW50ZXJbMV0gPSB5O1xuICAgICAgICB0aGlzLmRyYWdnZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbGVhc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25EcmFnKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVVwKCkge1xuXG4gICAgaWYgKCF0aGlzLmdyYWJiZWQpIHJldHVybjtcblxuICAgIHRoaXMudXBkYXRlVGlja2VyLnBhdXNlKCk7XG5cbiAgICBpZiAodGhpcy50cmlnZ2VyU3R5bGVzKSB7XG4gICAgICB0aGlzLnRyaWdnZXJTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLnRyaWdnZXJTdHlsZXMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvZHlTdHlsZXMpIHtcbiAgICAgIHRoaXMuYm9keVN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMuYm9keVN0eWxlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgWyBkaXNhYmxlZFgsIGRpc2FibGVkWSBdID0gdGhpcy5kaXNhYmxlZDtcbiAgICBjb25zdCBbIHB4MSwgcHkxLCBweDIsIHB5MiwgcHgzLCBweTMgXSA9IHRoaXMucG9pbnRlcjtcbiAgICBjb25zdCBbIGN0LCBjciwgY2IsIGNsIF0gPSB0aGlzLmNvbnRhaW5lckJvdW5kcztcbiAgICBjb25zdCBbIHN4LCBzeSBdID0gdGhpcy5zbmFwcGVkO1xuICAgIGNvbnN0IHNwcmluZ1ggPSB0aGlzLnJlbGVhc2VYU3ByaW5nO1xuICAgIGNvbnN0IHNwcmluZ1kgPSB0aGlzLnJlbGVhc2VZU3ByaW5nO1xuICAgIGNvbnN0IHJlbGVhc2VFYXNlID0gdGhpcy5yZWxlYXNlRWFzZTtcbiAgICBjb25zdCBoYXNSZWxlYXNlU3ByaW5nID0gdGhpcy5oYXNSZWxlYXNlU3ByaW5nO1xuICAgIGNvbnN0IG92ZXJzaG9vdENvb3JkcyA9IHRoaXMub3ZlcnNob290Q29vcmRzO1xuICAgIGNvbnN0IGN4ID0gdGhpcy54O1xuICAgIGNvbnN0IGN5ID0gdGhpcy55O1xuICAgIGNvbnN0IHB2ID0gdGhpcy5jb21wdXRlVmVsb2NpdHkocHgxIC0gcHgzLCBweTEgLSBweTMpO1xuICAgIGNvbnN0IHBhID0gdGhpcy5hbmdsZSA9IGF0YW4yKHB5MSAtIHB5MiwgcHgxIC0gcHgyKTtcbiAgICBjb25zdCBkcyA9IHB2ICogMTUwO1xuICAgIGNvbnN0IGNmID0gKDEgLSB0aGlzLnJlbGVhc2VDb250YWluZXJGcmljdGlvbikgKiB0aGlzLmRyYWdTcGVlZDtcbiAgICBjb25zdCBueCA9IGN4ICsgKGNvcyhwYSkgKiBkcyk7XG4gICAgY29uc3QgbnkgPSBjeSArIChzaW4ocGEpICogZHMpO1xuICAgIGNvbnN0IGJ4ID0gbnggPiBjciA/IGNyICsgKG54IC0gY3IpICogY2YgOiBueCA8IGNsID8gY2wgKyAobnggLSBjbCkgKiBjZiA6IG54O1xuICAgIGNvbnN0IGJ5ID0gbnkgPiBjYiA/IGNiICsgKG55IC0gY2IpICogY2YgOiBueSA8IGN0ID8gY3QgKyAobnkgLSBjdCkgKiBjZiA6IG55O1xuICAgIGNvbnN0IGR4ID0gdGhpcy5kZXN0WCA9IGNsYW1wKHJvdW5kKHNuYXAoYngsIHRoaXMuc25hcFgpLCA1KSwgY2wsIGNyKTtcbiAgICBjb25zdCBkeSA9IHRoaXMuZGVzdFkgPSBjbGFtcChyb3VuZChzbmFwKGJ5LCB0aGlzLnNuYXBZKSwgNSksIGN0LCBjYik7XG4gICAgY29uc3Qgb2IgPSB0aGlzLmlzT3V0T2ZCb3VuZHModGhpcy5jb250YWluZXJCb3VuZHMsIG54LCBueSk7XG5cbiAgICBsZXQgZHVyYXRpb25YID0gMDtcbiAgICBsZXQgZHVyYXRpb25ZID0gMDtcbiAgICBsZXQgZWFzZVggPSByZWxlYXNlRWFzZTtcbiAgICBsZXQgZWFzZVkgPSByZWxlYXNlRWFzZTtcbiAgICBsZXQgbG9uZ2VzdFJlbGVhc2VEdXJhdGlvbiA9IDA7XG5cbiAgICBvdmVyc2hvb3RDb29yZHMueCA9IGN4O1xuICAgIG92ZXJzaG9vdENvb3Jkcy55ID0gY3k7XG5cbiAgICBpZiAoIWRpc2FibGVkWCkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uWCA9IGR4ID09PSBjciA/IGN4ID4gY3IgPyAtMSA6IDEgOiBjeCA8IGNsID8gLTEgOiAxO1xuICAgICAgY29uc3QgZGlzdGFuY2VYID0gcm91bmQoY3ggLSBkeCwgMCk7XG4gICAgICBzcHJpbmdYLnZlbG9jaXR5ID0gZGlzYWJsZWRZICYmIGhhc1JlbGVhc2VTcHJpbmcgPyBkaXN0YW5jZVggPyAoZHMgKiBkaXJlY3Rpb25YKSAvIGFicyhkaXN0YW5jZVgpIDogMCA6IHB2O1xuICAgICAgY29uc3QgeyBlYXNlLCBkdXJhdGlvbiwgcmVzdER1cmF0aW9uIH0gPSBzcHJpbmdYO1xuICAgICAgZHVyYXRpb25YID0gY3ggPT09IGR4ID8gMCA6IGhhc1JlbGVhc2VTcHJpbmcgPyBkdXJhdGlvbiA6IGR1cmF0aW9uIC0gKHJlc3REdXJhdGlvbiAqIGdsb2JhbHMudGltZVNjYWxlKTtcbiAgICAgIGlmIChoYXNSZWxlYXNlU3ByaW5nKSBlYXNlWCA9IGVhc2U7XG4gICAgICBpZiAoZHVyYXRpb25YID4gbG9uZ2VzdFJlbGVhc2VEdXJhdGlvbikgbG9uZ2VzdFJlbGVhc2VEdXJhdGlvbiA9IGR1cmF0aW9uWDtcbiAgICB9XG5cbiAgICBpZiAoIWRpc2FibGVkWSkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uWSA9IGR5ID09PSBjYiA/IGN5ID4gY2IgPyAtMSA6IDEgOiBjeSA8IGN0ID8gLTEgOiAxO1xuICAgICAgY29uc3QgZGlzdGFuY2VZID0gcm91bmQoY3kgLSBkeSwgMCk7XG4gICAgICBzcHJpbmdZLnZlbG9jaXR5ID0gZGlzYWJsZWRYICYmIGhhc1JlbGVhc2VTcHJpbmcgPyBkaXN0YW5jZVkgPyAoZHMgKiBkaXJlY3Rpb25ZKSAvIGFicyhkaXN0YW5jZVkpIDogMCA6IHB2O1xuICAgICAgY29uc3QgeyBlYXNlLCBkdXJhdGlvbiwgcmVzdER1cmF0aW9uIH0gPSBzcHJpbmdZO1xuICAgICAgZHVyYXRpb25ZID0gY3kgPT09IGR5ID8gMCA6IGhhc1JlbGVhc2VTcHJpbmcgPyBkdXJhdGlvbiA6IGR1cmF0aW9uIC0gKHJlc3REdXJhdGlvbiAqIGdsb2JhbHMudGltZVNjYWxlKTtcbiAgICAgIGlmIChoYXNSZWxlYXNlU3ByaW5nKSBlYXNlWSA9IGVhc2U7XG4gICAgICBpZiAoZHVyYXRpb25ZID4gbG9uZ2VzdFJlbGVhc2VEdXJhdGlvbikgbG9uZ2VzdFJlbGVhc2VEdXJhdGlvbiA9IGR1cmF0aW9uWTtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1JlbGVhc2VTcHJpbmcgJiYgb2IgJiYgY2YgJiYgKGR1cmF0aW9uWCB8fCBkdXJhdGlvblkpKSB7XG5cbiAgICAgICAgY29uc3QgY29tcG9zaXRpb24gPSBjb21wb3NpdGlvblR5cGVzLmJsZW5kO1xuXG4gICAgICAgIG5ldyBKU0FuaW1hdGlvbihvdmVyc2hvb3RDb29yZHMsIHtcbiAgICAgICAgICB4OiB7IHRvOiBieCwgZHVyYXRpb246IGR1cmF0aW9uWCAqIC42NSB9LFxuICAgICAgICAgIHk6IHsgdG86IGJ5LCBkdXJhdGlvbjogZHVyYXRpb25ZICogLjY1IH0sXG4gICAgICAgICAgZWFzZTogcmVsZWFzZUVhc2UsXG4gICAgICAgICAgY29tcG9zaXRpb24sXG4gICAgICAgIH0pLmluaXQoKTtcblxuICAgICAgICBuZXcgSlNBbmltYXRpb24ob3ZlcnNob290Q29vcmRzLCB7XG4gICAgICAgICAgeDogeyB0bzogZHgsIGR1cmF0aW9uOiBkdXJhdGlvblggfSxcbiAgICAgICAgICB5OiB7IHRvOiBkeSwgZHVyYXRpb246IGR1cmF0aW9uWSB9LFxuICAgICAgICAgIGVhc2U6IHJlbGVhc2VFYXNlLFxuICAgICAgICAgIGNvbXBvc2l0aW9uLFxuICAgICAgICB9KS5pbml0KCk7XG5cbiAgICAgICAgdGhpcy5vdmVyc2hvb3RYVGlja2VyLnN0cmV0Y2goZHVyYXRpb25YKS5yZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMub3ZlcnNob290WVRpY2tlci5zdHJldGNoKGR1cmF0aW9uWSkucmVzdGFydCgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKCFkaXNhYmxlZFgpIHRoaXMuYW5pbWF0ZVt0aGlzLnhQcm9wXShkeCwgZHVyYXRpb25YLCBlYXNlWCk7XG4gICAgICBpZiAoIWRpc2FibGVkWSkgdGhpcy5hbmltYXRlW3RoaXMueVByb3BdKGR5LCBkdXJhdGlvblksIGVhc2VZKTtcblxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsSW5WaWV3KGxvbmdlc3RSZWxlYXNlRHVyYXRpb24sIHRoaXMuc2Nyb2xsVGhyZXNob2xkLCByZWxlYXNlRWFzZSk7XG5cbiAgICBsZXQgaGFzU25hcHBlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGR4ICE9PSBzeCkge1xuICAgICAgdGhpcy5zbmFwcGVkWzBdID0gZHg7XG4gICAgICBpZiAodGhpcy5zbmFwWCkgaGFzU25hcHBlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGR5ICE9PSBzeSAmJiB0aGlzLnNuYXBZKSB7XG4gICAgICB0aGlzLnNuYXBwZWRbMV0gPSBkeTtcbiAgICAgIGlmICh0aGlzLnNuYXBZKSBoYXNTbmFwcGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzU25hcHBlZCkgdGhpcy5vblNuYXAodGhpcyk7XG5cbiAgICB0aGlzLmdyYWJiZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVsZWFzZWQgPSB0cnVlO1xuXG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gdHJpZ2dlciB0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIHJlbGVhc2UgYW5pbWF0aW9ucyB0byBiZSBhYmxlIHRvIGNhbmNlbCB0aGVtXG4gICAgdGhpcy5vblJlbGVhc2UodGhpcyk7XG5cbiAgICB0aGlzLiR0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgdGhpcy4kdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgdGhpcy4kdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHByZXZlbnREZWZhdWx0KTtcblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMucmVzaXplVGlja2VyLnBhdXNlKCk7XG4gICAgdGhpcy5ncmFiYmVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWxlYXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5zZXRYKDAsIHRydWUpO1xuICAgIHRoaXMuc2V0WSgwLCB0cnVlKTtcbiAgICB0aGlzLmNvb3Jkc1swXSA9IDA7XG4gICAgdGhpcy5jb29yZHNbMV0gPSAwO1xuICAgIHRoaXMucG9pbnRlclswXSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzFdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbMl0gPSAwO1xuICAgIHRoaXMucG9pbnRlclszXSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzRdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbNV0gPSAwO1xuICAgIHRoaXMucG9pbnRlcls2XSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzddID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMF0gPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja1sxXSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrWzJdID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tJbmRleCA9IDA7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLiR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGlzYWJsZWQnKTtcbiAgICAgIHRoaXMudG91Y2hBY3Rpb25TdHlsZXMgPSBzZXRUYXJnZXRWYWx1ZXModGhpcy4kdHJpZ2dlciwge1xuICAgICAgICB0b3VjaEFjdGlvbjogdGhpcy5kaXNhYmxlZFswXSA/ICdwYW4teCcgOiB0aGlzLmRpc2FibGVkWzFdID8gJ3Bhbi15JyA6ICdub25lJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLiR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICB0aGlzLiR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuJHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5ncmFiYmVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWxlYXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy50b3VjaEFjdGlvblN0eWxlcy5yZXZlcnQoKTtcbiAgICBpZiAodGhpcy5jdXJzb3JTdHlsZXMpIHtcbiAgICAgIHRoaXMuY3Vyc29yU3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy5jdXJzb3JTdHlsZXMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmlnZ2VyU3R5bGVzKSB7XG4gICAgICB0aGlzLnRyaWdnZXJTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLnRyaWdnZXJTdHlsZXMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5ib2R5U3R5bGVzKSB7XG4gICAgICB0aGlzLmJvZHlTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLmJvZHlTdHlsZXMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50YXJnZXRTdHlsZXMpIHtcbiAgICAgIHRoaXMudGFyZ2V0U3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy50YXJnZXRTdHlsZXMgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLiR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtZGlzYWJsZWQnKTtcbiAgICB0aGlzLiR0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzKTtcbiAgICB0aGlzLiR0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuJHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldmVydCgpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgdGhpcy4kdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRpc2FibGVkJyk7XG4gICAgdGhpcy51cGRhdGVUaWNrZXIucmV2ZXJ0KCk7XG4gICAgdGhpcy5vdmVyc2hvb3RYVGlja2VyLnJldmVydCgpO1xuICAgIHRoaXMub3ZlcnNob290WVRpY2tlci5yZXZlcnQoKTtcbiAgICB0aGlzLnJlc2l6ZVRpY2tlci5yZXZlcnQoKTtcbiAgICB0aGlzLmFuaW1hdGUucmV2ZXJ0KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKi9cbiAgaGFuZGxlRXZlbnQoZSkge1xuICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICB0aGlzLmhhbmRsZURvd24oLyoqIEB0eXBlIHtNb3VzZUV2ZW50fSAqLyhlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG91Y2hzdGFydCc6XG4gICAgICAgIHRoaXMuaGFuZGxlRG93bigvKiogQHR5cGUge1RvdWNoRXZlbnR9ICovKGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3VzZW1vdmUnOlxuICAgICAgICB0aGlzLmhhbmRsZU1vdmUoLyoqIEB0eXBlIHtNb3VzZUV2ZW50fSAqLyhlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG91Y2htb3ZlJzpcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZlKC8qKiBAdHlwZSB7VG91Y2hFdmVudH0gKi8oZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICB0aGlzLmhhbmRsZVVwKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG91Y2hlbmQnOlxuICAgICAgICB0aGlzLmhhbmRsZVVwKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG91Y2hjYW5jZWwnOlxuICAgICAgICB0aGlzLmhhbmRsZVVwKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW91c2VlbnRlcic6XG4gICAgICAgIHRoaXMuaGFuZGxlSG92ZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3RzdGFydCc6XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gdGFyZ2V0XG4gKiBAcGFyYW0ge0RyYWdnYWJsZVBhcmFtc30gW3BhcmFtZXRlcnNdXG4gKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gKi9cbmNvbnN0IGNyZWF0ZURyYWdnYWJsZSA9ICh0YXJnZXQsIHBhcmFtZXRlcnMpID0+IG5ldyBEcmFnZ2FibGUodGFyZ2V0LCBwYXJhbWV0ZXJzKTtcblxuXG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFjdFJlZlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fG51bGx9IFtjdXJyZW50XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQW5ndWxhclJlZlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBbbmF0aXZlRWxlbWVudF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNjb3BlUGFyYW1zXG4gKiBAcHJvcGVydHkge0RPTVRhcmdldFNlbGVjdG9yfFJlYWN0UmVmfEFuZ3VsYXJSZWZ9IFtyb290XVxuICogQHByb3BlcnR5IHtEZWZhdWx0c1BhcmFtc30gW2RlZmF1bHRzXVxuICogQHByb3BlcnR5IHtSZWNvcmQ8U3RyaW5nLCBTdHJpbmc+fSBbbWVkaWFRdWVyaWVzXVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNjb3BlQ2xlYW51cFxuICogQHBhcmFtIHtTY29wZX0gW3Njb3BlXVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNjb3BlQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U2NvcGV9IFtzY29wZV1cbiAqIEByZXR1cm4ge1Njb3BlQ2xlYW51cHx2b2lkfVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNjb3BlTWV0aG9kXG4gKiBAcGFyYW0gey4uLip9IGFyZ3NcbiAqIEByZXR1cm4ge1Njb3BlQ2xlYW51cHx2b2lkfVxuICovXG5cbmNsYXNzIFNjb3BlIHtcbiAgLyoqIEBwYXJhbSB7U2NvcGVQYXJhbXN9IFtwYXJhbWV0ZXJzXSAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICBpZiAoZ2xvYmFscy5zY29wZSkgZ2xvYmFscy5zY29wZS5yZXZlcnRpYmxlcy5wdXNoKHRoaXMpO1xuICAgIGNvbnN0IHJvb3RQYXJhbSA9IHBhcmFtZXRlcnMucm9vdDtcbiAgICAvKiogQHR5cGUge0RvY3VtZW50fERPTVRhcmdldH0gKi9cbiAgICBsZXQgcm9vdCA9IGRvYztcbiAgICBpZiAocm9vdFBhcmFtKSB7XG4gICAgICByb290ID0gLyoqIEB0eXBlIHtSZWFjdFJlZn0gKi8ocm9vdFBhcmFtKS5jdXJyZW50IHx8XG4gICAgICAgICAgICAgLyoqIEB0eXBlIHtBbmd1bGFyUmVmfSAqLyhyb290UGFyYW0pLm5hdGl2ZUVsZW1lbnQgfHxcbiAgICAgICAgICAgICBwYXJzZVRhcmdldHMoLyoqIEB0eXBlIHtET01UYXJnZXRTZWxlY3Rvcn0gKi8ocm9vdFBhcmFtKSlbMF0gfHxcbiAgICAgICAgICAgICBkb2M7XG4gICAgfVxuICAgIGNvbnN0IHNjb3BlRGVmYXVsdHMgPSBwYXJhbWV0ZXJzLmRlZmF1bHRzO1xuICAgIGNvbnN0IGdsb2JhbERlZmF1bHQgPSBnbG9iYWxzLmRlZmF1bHRzO1xuICAgIGNvbnN0IG1lZGlhUXVlcmllcyA9IHBhcmFtZXRlcnMubWVkaWFRdWVyaWVzO1xuICAgIC8qKiBAdHlwZSB7RGVmYXVsdHNQYXJhbXN9ICovXG4gICAgdGhpcy5kZWZhdWx0cyA9IHNjb3BlRGVmYXVsdHMgPyBtZXJnZU9iamVjdHMoc2NvcGVEZWZhdWx0cywgZ2xvYmFsRGVmYXVsdCkgOiBnbG9iYWxEZWZhdWx0O1xuICAgIC8qKiBAdHlwZSB7RG9jdW1lbnR8RE9NVGFyZ2V0fSAqL1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgLyoqIEB0eXBlIHtBcnJheTxTY29wZUNvbnN0cnVjdG9yPn0gKi9cbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8RnVuY3Rpb24+fSAqL1xuICAgIHRoaXMucmV2ZXJ0Q29uc3RydWN0b3JzID0gW107XG4gICAgLyoqIEB0eXBlIHtBcnJheTxSZXZlcnRpYmxlPn0gKi9cbiAgICB0aGlzLnJldmVydGlibGVzID0gW107XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBGdW5jdGlvbj59ICovXG4gICAgdGhpcy5tZXRob2RzID0ge307XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBCb29sZWFuPn0gKi9cbiAgICB0aGlzLm1hdGNoZXMgPSB7fTtcbiAgICAvKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIE1lZGlhUXVlcnlMaXN0Pn0gKi9cbiAgICB0aGlzLm1lZGlhUXVlcnlMaXN0cyA9IHt9O1xuICAgIC8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgYW55Pn0gKi9cbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICBpZiAobWVkaWFRdWVyaWVzKSB7XG4gICAgICBmb3IgKGxldCBtcSBpbiBtZWRpYVF1ZXJpZXMpIHtcbiAgICAgICAgY29uc3QgX21xID0gd2luLm1hdGNoTWVkaWEobWVkaWFRdWVyaWVzW21xXSk7XG4gICAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3RzW21xXSA9IF9tcTtcbiAgICAgICAgX21xLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAY2FsbGJhY2sgU2NvcHBlZENhbGxiYWNrXG4gICAqIEBwYXJhbSB7dGhpc30gc2NvcGVcbiAgICogQHJldHVybiB7YW55fVxuICAgKlxuICAgKiBAcGFyYW0ge1Njb3BwZWRDYWxsYmFja30gY2JcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIGV4ZWN1dGUoY2IpIHtcbiAgICBsZXQgYWN0aXZlU2NvcGUgPSBnbG9iYWxzLnNjb3BlO1xuICAgIGxldCBhY3RpdmVSb290ID0gZ2xvYmFscy5yb290O1xuICAgIGxldCBhY3RpdmVEZWZhdWx0cyA9IGdsb2JhbHMuZGVmYXVsdHM7XG4gICAgZ2xvYmFscy5zY29wZSA9IHRoaXM7XG4gICAgZ2xvYmFscy5yb290ID0gdGhpcy5yb290O1xuICAgIGdsb2JhbHMuZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzO1xuICAgIGNvbnN0IG1xcyA9IHRoaXMubWVkaWFRdWVyeUxpc3RzO1xuICAgIGZvciAobGV0IG1xIGluIG1xcykgdGhpcy5tYXRjaGVzW21xXSA9IG1xc1ttcV0ubWF0Y2hlcztcbiAgICBjb25zdCByZXR1cm5lZCA9IGNiKHRoaXMpO1xuICAgIGdsb2JhbHMuc2NvcGUgPSBhY3RpdmVTY29wZTtcbiAgICBnbG9iYWxzLnJvb3QgPSBhY3RpdmVSb290O1xuICAgIGdsb2JhbHMuZGVmYXVsdHMgPSBhY3RpdmVEZWZhdWx0cztcbiAgICByZXR1cm4gcmV0dXJuZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGxldCBpID0gdGhpcy5yZXZlcnRpYmxlcy5sZW5ndGg7XG4gICAgICBsZXQgeSA9IHRoaXMucmV2ZXJ0Q29uc3RydWN0b3JzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHRoaXMucmV2ZXJ0aWJsZXNbaV0ucmV2ZXJ0KCk7XG4gICAgICB3aGlsZSAoeS0tKSB0aGlzLnJldmVydENvbnN0cnVjdG9yc1t5XSh0aGlzKTtcbiAgICAgIHRoaXMucmV2ZXJ0aWJsZXMubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucmV2ZXJ0Q29uc3RydWN0b3JzLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9ycy5mb3JFYWNoKCBjb25zdHJ1Y3RvciA9PiB7XG4gICAgICAgIGNvbnN0IHJldmVydENvbnN0cnVjdG9yID0gY29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIGlmIChyZXZlcnRDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgIHRoaXMucmV2ZXJ0Q29uc3RydWN0b3JzLnB1c2gocmV2ZXJ0Q29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAY2FsbGJhY2sgY29udHJ1Y3RvckNhbGxiYWNrXG4gICAqIEBwYXJhbSB7dGhpc30gc2VsZlxuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGExXG4gICAqIEBwYXJhbSB7U2NvcGVNZXRob2R9IGEyXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge2NvbnRydWN0b3JDYWxsYmFja30gYTFcbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8Y29udHJ1Y3RvckNhbGxiYWNrfSBhMVxuICAgKiBAcGFyYW0ge1Njb3BlTWV0aG9kfSBbYTJdXG4gICAqL1xuICBhZGQoYTEsIGEyKSB7XG4gICAgaWYgKGlzRm5jKGExKSkge1xuICAgICAgY29uc3QgY29uc3RydWN0b3IgPSAvKiogQHR5cGUge2NvbnRydWN0b3JDYWxsYmFja30gKi8oYTEpO1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXZlcnRDb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICBpZiAocmV2ZXJ0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnJldmVydENvbnN0cnVjdG9ycy5wdXNoKHJldmVydENvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0aG9kc1svKiogQHR5cGUge1N0cmluZ30gKi8oYTEpXSA9ICgvKiogQHR5cGUge2FueX0gKi8uLi5hcmdzKSA9PiB0aGlzLmV4ZWN1dGUoKCkgPT4gYTIoLi4uYXJncykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqL1xuICBoYW5kbGVFdmVudChlKSB7XG4gICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXZlcnQoKSB7XG4gICAgY29uc3QgcmV2ZXJ0aWJsZXMgPSB0aGlzLnJldmVydGlibGVzO1xuICAgIGNvbnN0IHJldmVydENvbnN0cnVjdG9ycyA9IHRoaXMucmV2ZXJ0Q29uc3RydWN0b3JzO1xuICAgIGNvbnN0IG1xcyA9IHRoaXMubWVkaWFRdWVyeUxpc3RzO1xuICAgIGxldCBpID0gcmV2ZXJ0aWJsZXMubGVuZ3RoO1xuICAgIGxldCB5ID0gcmV2ZXJ0Q29uc3RydWN0b3JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSByZXZlcnRpYmxlc1tpXS5yZXZlcnQoKTtcbiAgICB3aGlsZSAoeS0tKSByZXZlcnRDb25zdHJ1Y3RvcnNbeV0odGhpcyk7XG4gICAgZm9yIChsZXQgbXEgaW4gbXFzKSBtcXNbbXFdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMpO1xuICAgIHJldmVydGlibGVzLmxlbmd0aCA9IDA7XG4gICAgcmV2ZXJ0Q29uc3RydWN0b3JzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMubGVuZ3RoID0gMDtcbiAgICB0aGlzLm1hdGNoZXMgPSB7fTtcbiAgICB0aGlzLm1ldGhvZHMgPSB7fTtcbiAgICB0aGlzLm1lZGlhUXVlcnlMaXN0cyA9IHt9O1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtTY29wZVBhcmFtc30gW3BhcmFtc11cbiAqIEByZXR1cm4ge1Njb3BlfVxuICovXG5jb25zdCBjcmVhdGVTY29wZSA9IHBhcmFtcyA9PiBuZXcgU2NvcGUocGFyYW1zKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7U3RyaW5nfE51bWJlcn0gU2Nyb2xsVGhyZXNob2xkVmFsdWVcbiAqL1xuXG4vKipcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgZ2V0TWF4Vmlld0hlaWdodCA9ICgpID0+IHtcbiAgY29uc3QgJGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvYy5ib2R5LmFwcGVuZENoaWxkKCRlbCk7XG4gICRlbC5zdHlsZS5oZWlnaHQgPSAnMTAwbHZoJztcbiAgY29uc3QgaGVpZ2h0ID0gJGVsLm9mZnNldEhlaWdodDtcbiAgZG9jLmJvZHkucmVtb3ZlQ2hpbGQoJGVsKTtcbiAgcmV0dXJuIGhlaWdodDtcbn07XG5cbi8qKlxuICogQHRlbXBsYXRlIHtTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258T2JqZWN0fSBUXG4gKiBAcGFyYW0ge1QgfCAoKG9ic2VydmVyOiBTY3JvbGxPYnNlcnZlcikgPT4gVCl9IHZhbHVlXG4gKiBAcGFyYW0ge1Njcm9sbE9ic2VydmVyfSBzY3JvbGxlclxuICogQHJldHVybiB7VH1cbiAqL1xuY29uc3QgcGFyc2VTY3JvbGxPYnNlcnZlckZ1bmN0aW9uUGFyYW1ldGVyID0gKHZhbHVlLCBzY3JvbGxlcikgPT4gdmFsdWUgJiYgaXNGbmModmFsdWUpID8gLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi8odmFsdWUpKHNjcm9sbGVyKSA6IHZhbHVlO1xuXG5jb25zdCBzY3JvbGxDb250YWluZXJzID0gbmV3IE1hcCgpO1xuXG5jbGFzcyBTY3JvbGxDb250YWluZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gJGVsXG4gICAqL1xuICBjb25zdHJ1Y3RvcigkZWwpIHtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIHRoaXMuZWxlbWVudCA9ICRlbDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VXaW4gPSB0aGlzLmVsZW1lbnQgPT09IGRvYy5ib2R5O1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMud2luV2lkdGggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMud2luSGVpZ2h0ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLndpZHRoID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5sZWZ0ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnRvcCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy56SW5kZXggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5zY3JvbGxZID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnByZXZTY3JvbGxYID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnByZXZTY3JvbGxZID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnNjcm9sbFdpZHRoID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnNjcm9sbEhlaWdodCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuYmFja3dhcmRYID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuYmFja3dhcmRZID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtUaW1lcn0gKi9cbiAgICB0aGlzLnNjcm9sbFRpY2tlciA9IG5ldyBUaW1lcih7XG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBvbkJlZ2luOiAoKSA9PiB0aGlzLmRhdGFUaW1lci5yZXN1bWUoKSxcbiAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2t3YXJkcyA9IHRoaXMuYmFja3dhcmRYIHx8IHRoaXMuYmFja3dhcmRZO1xuICAgICAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovY2hpbGQpID0+IGNoaWxkLmhhbmRsZVNjcm9sbCgpLCBiYWNrd2FyZHMpO1xuICAgICAgfSxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHRoaXMuZGF0YVRpbWVyLnBhdXNlKClcbiAgICB9KS5pbml0KCk7XG4gICAgLyoqIEB0eXBlIHtUaW1lcn0gKi9cbiAgICB0aGlzLmRhdGFUaW1lciA9IG5ldyBUaW1lcih7XG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBmcmFtZVJhdGU6IDMwLFxuICAgICAgb25VcGRhdGU6IHNlbGYgPT4ge1xuICAgICAgICBjb25zdCBkdCA9IHNlbGYuZGVsdGFUaW1lO1xuICAgICAgICBjb25zdCBweCA9IHRoaXMucHJldlNjcm9sbFg7XG4gICAgICAgIGNvbnN0IHB5ID0gdGhpcy5wcmV2U2Nyb2xsWTtcbiAgICAgICAgY29uc3QgbnggPSB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGNvbnN0IG55ID0gdGhpcy5zY3JvbGxZO1xuICAgICAgICBjb25zdCBkeCA9IHB4IC0gbng7XG4gICAgICAgIGNvbnN0IGR5ID0gcHkgLSBueTtcbiAgICAgICAgdGhpcy5wcmV2U2Nyb2xsWCA9IG54O1xuICAgICAgICB0aGlzLnByZXZTY3JvbGxZID0gbnk7XG4gICAgICAgIGlmIChkeCkgdGhpcy5iYWNrd2FyZFggPSBweCA+IG54O1xuICAgICAgICBpZiAoZHkpIHRoaXMuYmFja3dhcmRZID0gcHkgPiBueTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHJvdW5kKGR0ID4gMCA/IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgLyBkdCA6IDAsIDUpO1xuICAgICAgfVxuICAgIH0pLmluaXQoKTtcbiAgICAvKiogQHR5cGUge1RpbWVyfSAqL1xuICAgIHRoaXMucmVzaXplVGlja2VyID0gbmV3IFRpbWVyKHtcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAyNTAgKiBnbG9iYWxzLnRpbWVTY2FsZSxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU2Nyb2xsT2JzZXJ2ZXJzKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSkuaW5pdCgpO1xuICAgIC8qKiBAdHlwZSB7VGltZXJ9ICovXG4gICAgdGhpcy53YWtlVGlja2VyID0gbmV3IFRpbWVyKHtcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiA1MDAgKiBnbG9iYWxzLnRpbWVTY2FsZSxcbiAgICAgIG9uQmVnaW46ICgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGxUaWNrZXIucmVzdW1lKCk7XG4gICAgICB9LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbFRpY2tlci5wYXVzZSgpO1xuICAgICAgfVxuICAgIH0pLmluaXQoKTtcbiAgICAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqL1xuICAgIHRoaXMuX2hlYWQgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy5fdGFpbCA9IG51bGw7XG4gICAgdGhpcy51cGRhdGVTY3JvbGxDb29yZHMoKTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0JvdW5kcygpO1xuICAgIHRoaXMudXBkYXRlQm91bmRzKCk7XG4gICAgdGhpcy5yZWZyZXNoU2Nyb2xsT2JzZXJ2ZXJzKCk7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHRoaXMucmVzaXplVGlja2VyLnJlc3RhcnQoKSk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgKHRoaXMudXNlV2luID8gd2luIDogdGhpcy5lbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLCBmYWxzZSk7XG4gIH1cblxuICB1cGRhdGVTY3JvbGxDb29yZHMoKSB7XG4gICAgY29uc3QgdXNlV2luID0gdGhpcy51c2VXaW47XG4gICAgY29uc3QgJGVsID0gdGhpcy5lbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsWCA9IHJvdW5kKHVzZVdpbiA/IHdpbi5zY3JvbGxYIDogJGVsLnNjcm9sbExlZnQsIDApO1xuICAgIHRoaXMuc2Nyb2xsWSA9IHJvdW5kKHVzZVdpbiA/IHdpbi5zY3JvbGxZIDogJGVsLnNjcm9sbFRvcCwgMCk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dCb3VuZHMoKSB7XG4gICAgdGhpcy53aW5XaWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgIHRoaXMud2luSGVpZ2h0ID0gZ2V0TWF4Vmlld0hlaWdodCgpO1xuICB9XG5cbiAgdXBkYXRlQm91bmRzKCkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvbnN0ICRlbCA9IHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLnNjcm9sbFdpZHRoID0gJGVsLnNjcm9sbFdpZHRoICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5MZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luUmlnaHQpO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gJGVsLnNjcm9sbEhlaWdodCArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luQm90dG9tKTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0JvdW5kcygpO1xuICAgIGxldCB3aWR0aCwgaGVpZ2h0O1xuICAgIGlmICh0aGlzLnVzZVdpbikge1xuICAgICAgd2lkdGggPSB0aGlzLndpbldpZHRoO1xuICAgICAgaGVpZ2h0ID0gdGhpcy53aW5IZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsUmVjdCA9ICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoO1xuICAgICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodDtcbiAgICAgIHRoaXMudG9wID0gZWxSZWN0LnRvcDtcbiAgICAgIHRoaXMubGVmdCA9IGVsUmVjdC5sZWZ0O1xuICAgIH1cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICByZWZyZXNoU2Nyb2xsT2JzZXJ2ZXJzKCkge1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi9jaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLl9kZWJ1Zykge1xuICAgICAgICBjaGlsZC5yZW1vdmVEZWJ1ZygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlQm91bmRzKCk7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqL2NoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5yZWZyZXNoKCk7XG4gICAgICBpZiAoY2hpbGQuX2RlYnVnKSB7XG4gICAgICAgIGNoaWxkLmRlYnVnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93Qm91bmRzKCk7XG4gICAgdGhpcy51cGRhdGVCb3VuZHMoKTtcbiAgICB0aGlzLnJlZnJlc2hTY3JvbGxPYnNlcnZlcnMoKTtcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQ29vcmRzKCk7XG4gICAgdGhpcy53YWtlVGlja2VyLnJlc3RhcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqL1xuICBoYW5kbGVFdmVudChlKSB7XG4gICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldmVydCgpIHtcbiAgICB0aGlzLnNjcm9sbFRpY2tlci5jYW5jZWwoKTtcbiAgICB0aGlzLmRhdGFUaW1lci5jYW5jZWwoKTtcbiAgICB0aGlzLnJlc2l6ZVRpY2tlci5jYW5jZWwoKTtcbiAgICB0aGlzLndha2VUaWNrZXIuY2FuY2VsKCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5lbGVtZW50KTtcbiAgICAodGhpcy51c2VXaW4gPyB3aW4gOiB0aGlzLmVsZW1lbnQpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMpO1xuICAgIHNjcm9sbENvbnRhaW5lcnMuZGVsZXRlKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtTY3JvbGxDb250YWluZXJ9XG4gKi9cbmNvbnN0IHJlZ2lzdGVyQW5kR2V0U2Nyb2xsQ29udGFpbmVyID0gdGFyZ2V0ID0+IHtcbiAgY29uc3QgJGVsID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8odGFyZ2V0ID8gcGFyc2VUYXJnZXRzKHRhcmdldClbMF0gfHwgZG9jLmJvZHkgOiBkb2MuYm9keSk7XG4gIGxldCBzY3JvbGxDb250YWluZXIgPSBzY3JvbGxDb250YWluZXJzLmdldCgkZWwpO1xuICBpZiAoIXNjcm9sbENvbnRhaW5lcikge1xuICAgIHNjcm9sbENvbnRhaW5lciA9IG5ldyBTY3JvbGxDb250YWluZXIoJGVsKTtcbiAgICBzY3JvbGxDb250YWluZXJzLnNldCgkZWwsIHNjcm9sbENvbnRhaW5lcik7XG4gIH1cbiAgcmV0dXJuIHNjcm9sbENvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gJGVsXG4gKiBAcGFyYW0ge051bWJlcnxzdHJpbmd9IHZcbiAqIEBwYXJhbSB7TnVtYmVyfSBzaXplXG4gKiBAcGFyYW0ge051bWJlcn0gW3VuZGVyXVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvdmVyXVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBjb252ZXJ0VmFsdWVUb1B4ID0gKCRlbCwgdiwgc2l6ZSwgdW5kZXIsIG92ZXIpID0+IHtcbiAgY29uc3QgY2xhbXBNaW4gPSB2ID09PSAnbWluJztcbiAgY29uc3QgY2xhbXBNYXggPSB2ID09PSAnbWF4JztcbiAgY29uc3QgdmFsdWUgPSB2ID09PSAndG9wJyB8fCB2ID09PSAnbGVmdCcgfHwgdiA9PT0gJ3N0YXJ0JyB8fCBjbGFtcE1pbiA/IDAgOlxuICAgICAgICAgICAgICAgIHYgPT09ICdib3R0b20nIHx8IHYgPT09ICdyaWdodCcgfHwgdiA9PT0gJ2VuZCcgfHwgY2xhbXBNYXggPyAnMTAwJScgOlxuICAgICAgICAgICAgICAgIHYgPT09ICdjZW50ZXInID8gJzUwJScgOlxuICAgICAgICAgICAgICAgIHY7XG4gIGNvbnN0IHsgbiwgdSB9ID0gZGVjb21wb3NlUmF3VmFsdWUodmFsdWUsIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlKTtcbiAgbGV0IHB4ID0gbjtcbiAgaWYgKHUgPT09ICclJykge1xuICAgIHB4ID0gKG4gLyAxMDApICogc2l6ZTtcbiAgfSBlbHNlIGlmICh1KSB7XG4gICAgcHggPSBjb252ZXJ0VmFsdWVVbml0KCRlbCwgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUsICdweCcsIHRydWUpLm47XG4gIH1cbiAgaWYgKGNsYW1wTWF4ICYmIHVuZGVyIDwgMCkgcHggKz0gdW5kZXI7XG4gIGlmIChjbGFtcE1pbiAmJiBvdmVyID4gMCkgcHggKz0gb3ZlcjtcbiAgcmV0dXJuIHB4O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAkZWxcbiAqIEBwYXJhbSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV9IHZcbiAqIEBwYXJhbSB7TnVtYmVyfSBzaXplXG4gKiBAcGFyYW0ge051bWJlcn0gW3VuZGVyXVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvdmVyXVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBwYXJzZUJvdW5kVmFsdWUgPSAoJGVsLCB2LCBzaXplLCB1bmRlciwgb3ZlcikgPT4ge1xuICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgbGV0IHZhbHVlO1xuICBpZiAoaXNTdHIodikpIHtcbiAgICBjb25zdCBtYXRjaGVkT3BlcmF0b3IgPSByZWxhdGl2ZVZhbHVlc0V4ZWNSZ3guZXhlYygvKiogQHR5cGUge1N0cmluZ30gKi8odikpO1xuICAgIGlmIChtYXRjaGVkT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IHNwbGl0dGVyID0gbWF0Y2hlZE9wZXJhdG9yWzBdO1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSBzcGxpdHRlclswXTtcbiAgICAgIGNvbnN0IHNwbGl0dGVkID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKHYpLnNwbGl0KHNwbGl0dGVyKTtcbiAgICAgIGNvbnN0IGNsYW1wTWluID0gc3BsaXR0ZWRbMF0gPT09ICdtaW4nO1xuICAgICAgY29uc3QgY2xhbXBNYXggPSBzcGxpdHRlZFswXSA9PT0gJ21heCc7XG4gICAgICBjb25zdCB2YWx1ZUFQeCA9IGNvbnZlcnRWYWx1ZVRvUHgoJGVsLCBzcGxpdHRlZFswXSwgc2l6ZSwgdW5kZXIsIG92ZXIpO1xuICAgICAgY29uc3QgdmFsdWVCUHggPSBjb252ZXJ0VmFsdWVUb1B4KCRlbCwgc3BsaXR0ZWRbMV0sIHNpemUsIHVuZGVyLCBvdmVyKTtcbiAgICAgIGlmIChjbGFtcE1pbikge1xuICAgICAgICBjb25zdCBtaW4gPSBnZXRSZWxhdGl2ZVZhbHVlKGNvbnZlcnRWYWx1ZVRvUHgoJGVsLCAnbWluJywgc2l6ZSksIHZhbHVlQlB4LCBvcGVyYXRvcik7XG4gICAgICAgIHZhbHVlID0gbWluIDwgdmFsdWVBUHggPyB2YWx1ZUFQeCA6IG1pbjtcbiAgICAgIH0gZWxzZSBpZiAoY2xhbXBNYXgpIHtcbiAgICAgICAgY29uc3QgbWF4ID0gZ2V0UmVsYXRpdmVWYWx1ZShjb252ZXJ0VmFsdWVUb1B4KCRlbCwgJ21heCcsIHNpemUpLCB2YWx1ZUJQeCwgb3BlcmF0b3IpO1xuICAgICAgICB2YWx1ZSA9IG1heCA+IHZhbHVlQVB4ID8gdmFsdWVBUHggOiBtYXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGdldFJlbGF0aXZlVmFsdWUodmFsdWVBUHgsIHZhbHVlQlB4LCBvcGVyYXRvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gY29udmVydFZhbHVlVG9QeCgkZWwsIHYsIHNpemUsIHVuZGVyLCBvdmVyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSAvKiogQHR5cGUge051bWJlcn0gKi8odik7XG4gIH1cbiAgcmV0dXJuIHJvdW5kKHZhbHVlLCAwKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtKU0FuaW1hdGlvbn0gbGlua2VkXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuY29uc3QgZ2V0QW5pbWF0aW9uRG9tVGFyZ2V0ID0gbGlua2VkID0+IHtcbiAgbGV0ICRsaW5rZWRUYXJnZXQ7XG4gIGNvbnN0IGxpbmtlZFRhcmdldHMgPSBsaW5rZWQudGFyZ2V0cztcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rZWRUYXJnZXRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHRhcmdldCA9IGxpbmtlZFRhcmdldHNbaV07XG4gICAgaWYgKHRhcmdldFtpc0RvbVN5bWJvbF0pIHtcbiAgICAgICRsaW5rZWRUYXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyh0YXJnZXQpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiAkbGlua2VkVGFyZ2V0O1xufTtcblxubGV0IHNjcm9sbGVySW5kZXggPSAwO1xuXG5jb25zdCBkZWJ1Z0NvbG9ycyA9IFsnI0ZGNEI0QicsJyNGRjk3MUInLCcjRkZDNzMwJywnI0Y5RjY0MCcsJyM3QUZGNUEnLCcjMThGRjc0JywnIzE3RTA5QicsJyMzQ0ZGRUMnLCcjMDVEQkU5JywnIzMzQjNGMScsJyM2MzhDRjknLCcjQzU2M0ZFJywnI0ZGNEZDRicsJyNGOTNGOEEnXTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTY3JvbGxUaHJlc2hvbGRQYXJhbVxuICogQHByb3BlcnR5IHtTY3JvbGxUaHJlc2hvbGRWYWx1ZX0gW3RhcmdldF1cbiAqIEBwcm9wZXJ0eSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV9IFtjb250YWluZXJdXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2Nyb2xsT2JzZXJ2ZXJBeGlzQ2FsbGJhY2tcbiAqIEBwYXJhbSB7U2Nyb2xsT2JzZXJ2ZXJ9IHNlbGZcbiAqIEByZXR1cm4geyd4J3wneSd9XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2Nyb2xsVGhyZXNob2xkQ2FsbGJhY2tcbiAqIEBwYXJhbSB7U2Nyb2xsT2JzZXJ2ZXJ9IHNlbGZcbiAqIEByZXR1cm4ge1Njcm9sbFRocmVzaG9sZFZhbHVlfFNjcm9sbFRocmVzaG9sZFBhcmFtfVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2Nyb2xsT2JzZXJ2ZXJQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFN0cmluZ30gW2lkXVxuICogQHByb3BlcnR5IHtCb29sZWFufE51bWJlcnxTdHJpbmd8RWFzaW5nUGFyYW19IFtzeW5jXVxuICogQHByb3BlcnR5IHtUYXJnZXRzUGFyYW19IFtjb250YWluZXJdXG4gKiBAcHJvcGVydHkge1RhcmdldHNQYXJhbX0gW3RhcmdldF1cbiAqIEBwcm9wZXJ0eSB7J3gnfCd5J3xTY3JvbGxPYnNlcnZlckF4aXNDYWxsYmFja3woKG9ic2VydmVyOiBTY3JvbGxPYnNlcnZlcikgPT4gJ3gnfCd5J3xTY3JvbGxPYnNlcnZlckF4aXNDYWxsYmFjayl9IFtheGlzXVxuICogQHByb3BlcnR5IHtTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTY3JvbGxUaHJlc2hvbGRQYXJhbXxTY3JvbGxUaHJlc2hvbGRDYWxsYmFja3woKG9ic2VydmVyOiBTY3JvbGxPYnNlcnZlcikgPT4gU2Nyb2xsVGhyZXNob2xkVmFsdWV8U2Nyb2xsVGhyZXNob2xkUGFyYW18U2Nyb2xsVGhyZXNob2xkQ2FsbGJhY2spfSBbZW50ZXJdXG4gKiBAcHJvcGVydHkge1Njcm9sbFRocmVzaG9sZFZhbHVlfFNjcm9sbFRocmVzaG9sZFBhcmFtfFNjcm9sbFRocmVzaG9sZENhbGxiYWNrfCgob2JzZXJ2ZXI6IFNjcm9sbE9ic2VydmVyKSA9PiBTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTY3JvbGxUaHJlc2hvbGRQYXJhbXxTY3JvbGxUaHJlc2hvbGRDYWxsYmFjayl9IFtsZWF2ZV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnwoKG9ic2VydmVyOiBTY3JvbGxPYnNlcnZlcikgPT4gQm9vbGVhbil9IFtyZXBlYXRdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtkZWJ1Z11cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25FbnRlcl1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25MZWF2ZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25FbnRlckZvcndhcmRdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uTGVhdmVGb3J3YXJkXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvbkVudGVyQmFja3dhcmRdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uTGVhdmVCYWNrd2FyZF1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25VcGRhdGVdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uU3luY0NvbXBsZXRlXVxuICovXG5cbmNsYXNzIFNjcm9sbE9ic2VydmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7U2Nyb2xsT2JzZXJ2ZXJQYXJhbXN9IHBhcmFtZXRlcnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgIGlmIChnbG9iYWxzLnNjb3BlKSBnbG9iYWxzLnNjb3BlLnJldmVydGlibGVzLnB1c2godGhpcyk7XG4gICAgY29uc3Qgc3luY01vZGUgPSBzZXRWYWx1ZShwYXJhbWV0ZXJzLnN5bmMsICdwbGF5IHBhdXNlJyk7XG4gICAgY29uc3QgZWFzZSA9IHN5bmNNb2RlID8gcGFyc2VFYXNpbmdzKC8qKiBAdHlwZSB7RWFzaW5nUGFyYW19ICovKHN5bmNNb2RlKSkgOiBudWxsO1xuICAgIGNvbnN0IGlzTGluZWFyID0gc3luY01vZGUgJiYgKHN5bmNNb2RlID09PSAnbGluZWFyJyB8fCBzeW5jTW9kZSA9PT0gbm9uZSk7XG4gICAgY29uc3QgaXNFYXNlID0gc3luY01vZGUgJiYgIShlYXNlID09PSBub25lICYmICFpc0xpbmVhcik7XG4gICAgY29uc3QgaXNTbW9vdGggPSBzeW5jTW9kZSAmJiAoaXNOdW0oc3luY01vZGUpIHx8IHN5bmNNb2RlID09PSB0cnVlIHx8IGlzTGluZWFyKTtcbiAgICBjb25zdCBpc01ldGhvZHMgPSBzeW5jTW9kZSAmJiAoaXNTdHIoc3luY01vZGUpICYmICFpc0Vhc2UgJiYgIWlzU21vb3RoKTtcbiAgICBjb25zdCBzeW5jTWV0aG9kcyA9IGlzTWV0aG9kcyA/IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhzeW5jTW9kZSkuc3BsaXQoJyAnKS5tYXAoXG4gICAgICAoLyoqIEB0eXBlIHtTdHJpbmd9ICovbSkgPT4gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rZWQgPSB0aGlzLmxpbmtlZDtcbiAgICAgICAgcmV0dXJuIGxpbmtlZCAmJiBsaW5rZWRbbV0gPyBsaW5rZWRbbV0oKSA6IG51bGw7XG4gICAgICB9XG4gICAgKSA6IG51bGw7XG4gICAgY29uc3QgYmlEaXJTeW5jID0gaXNNZXRob2RzICYmIHN5bmNNZXRob2RzLmxlbmd0aCA+IDI7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5pbmRleCA9IHNjcm9sbGVySW5kZXgrKztcbiAgICAvKiogQHR5cGUge1N0cmluZ3xOdW1iZXJ9ICovXG4gICAgdGhpcy5pZCA9ICFpc1VuZChwYXJhbWV0ZXJzLmlkKSA/IHBhcmFtZXRlcnMuaWQgOiB0aGlzLmluZGV4O1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsQ29udGFpbmVyfSAqL1xuICAgIHRoaXMuY29udGFpbmVyID0gcmVnaXN0ZXJBbmRHZXRTY3JvbGxDb250YWluZXIocGFyYW1ldGVycy5jb250YWluZXIpO1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7VGlja2FibGV8V0FBUElBbmltYXRpb259ICovXG4gICAgdGhpcy5saW5rZWQgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLnJlcGVhdCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuaG9yaXpvbnRhbCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRQYXJhbXxTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTY3JvbGxUaHJlc2hvbGRDYWxsYmFja30gKi9cbiAgICB0aGlzLmVudGVyID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFBhcmFtfFNjcm9sbFRocmVzaG9sZFZhbHVlfFNjcm9sbFRocmVzaG9sZENhbGxiYWNrfSAqL1xuICAgIHRoaXMubGVhdmUgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLnN5bmMgPSBpc0Vhc2UgfHwgaXNTbW9vdGggfHwgISFzeW5jTWV0aG9kcztcbiAgICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICAgIHRoaXMuc3luY0Vhc2UgPSBpc0Vhc2UgPyBlYXNlIDogbnVsbDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnN5bmNTbW9vdGggPSBpc1Ntb290aCA/IHN5bmNNb2RlID09PSB0cnVlIHx8IGlzTGluZWFyID8gMSA6IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhzeW5jTW9kZSkgOiBudWxsO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25TeW5jRW50ZXIgPSBzeW5jTWV0aG9kcyAmJiAhYmlEaXJTeW5jICYmIHN5bmNNZXRob2RzWzBdID8gc3luY01ldGhvZHNbMF0gOiBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25TeW5jTGVhdmUgPSBzeW5jTWV0aG9kcyAmJiAhYmlEaXJTeW5jICYmIHN5bmNNZXRob2RzWzFdID8gc3luY01ldGhvZHNbMV0gOiBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25TeW5jRW50ZXJGb3J3YXJkID0gc3luY01ldGhvZHMgJiYgYmlEaXJTeW5jICYmIHN5bmNNZXRob2RzWzBdID8gc3luY01ldGhvZHNbMF0gOiBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25TeW5jTGVhdmVGb3J3YXJkID0gc3luY01ldGhvZHMgJiYgYmlEaXJTeW5jICYmIHN5bmNNZXRob2RzWzFdID8gc3luY01ldGhvZHNbMV0gOiBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25TeW5jRW50ZXJCYWNrd2FyZCA9IHN5bmNNZXRob2RzICYmIGJpRGlyU3luYyAmJiBzeW5jTWV0aG9kc1syXSA/IHN5bmNNZXRob2RzWzJdIDogbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uU3luY0xlYXZlQmFja3dhcmQgPSBzeW5jTWV0aG9kcyAmJiBiaURpclN5bmMgJiYgc3luY01ldGhvZHNbM10gPyBzeW5jTWV0aG9kc1szXSA6IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vbkVudGVyID0gcGFyYW1ldGVycy5vbkVudGVyIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vbkxlYXZlID0gcGFyYW1ldGVycy5vbkxlYXZlIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vbkVudGVyRm9yd2FyZCA9IHBhcmFtZXRlcnMub25FbnRlckZvcndhcmQgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uTGVhdmVGb3J3YXJkID0gcGFyYW1ldGVycy5vbkxlYXZlRm9yd2FyZCB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25FbnRlckJhY2t3YXJkID0gcGFyYW1ldGVycy5vbkVudGVyQmFja3dhcmQgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uTGVhdmVCYWNrd2FyZCA9IHBhcmFtZXRlcnMub25MZWF2ZUJhY2t3YXJkIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IHBhcmFtZXRlcnMub25VcGRhdGUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uU3luY0NvbXBsZXRlID0gcGFyYW1ldGVycy5vblN5bmNDb21wbGV0ZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLnJldmVydGVkID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuYmVnYW4gPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5pc0luVmlldyA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmZvcmNlRW50ZXIgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5oYXNFbnRlcmVkID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtBcnJheS48TnVtYmVyPn0gKi9cbiAgICB0aGlzLm9mZnNldHMgPSBbXTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5vZmZzZXRTdGFydCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5vZmZzZXRFbmQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuZGlzdGFuY2UgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMucHJldlByb2dyZXNzID0gMDtcbiAgICAvKiogQHR5cGUge0FycmF5fSAqL1xuICAgIHRoaXMudGhyZXNob2xkcyA9IFsnc3RhcnQnLCAnZW5kJywgJ2VuZCcsICdzdGFydCddO1xuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5jb29yZHMgPSBbMCwgMCwgMCwgMF07XG4gICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9cbiAgICB0aGlzLmRlYnVnU3R5bGVzID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIHRoaXMuJGRlYnVnID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyUGFyYW1zfSAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtZXRlcnM7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuX2RlYnVnID0gc2V0VmFsdWUocGFyYW1ldGVycy5kZWJ1ZywgZmFsc2UpO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy5fbmV4dCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi9cbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbiAgICBhZGRDaGlsZCh0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgLy8gV2FpdCBmb3IgdGhlIG5leHQgZnJhbWUgdG8gYWRkIHRvIHRoZSBjb250YWluZXIgaW4gb3JkZXIgdG8gaGFuZGxlIGNhbGxzIHRvIGxpbmsoKVxuICAgIHN5bmMoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmV2ZXJ0ZWQpIHJldHVybjtcbiAgICAgIGlmICghdGhpcy50YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8ocGFyc2VUYXJnZXRzKHBhcmFtZXRlcnMudGFyZ2V0KVswXSk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0IHx8IGRvYy5ib2R5O1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9kZWJ1ZykgdGhpcy5kZWJ1ZygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VGlja2FibGV8V0FBUElBbmltYXRpb259IGxpbmtlZFxuICAgKi9cbiAgbGluayhsaW5rZWQpIHtcbiAgICBpZiAobGlua2VkKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gcGF1c2UgdGhlIGxpbmtlZCBvYmplY3QgaW4gY2FzZSBpdCdzIGFkZGVkIGxhdGVyXG4gICAgICBsaW5rZWQucGF1c2UoKTtcbiAgICAgIHRoaXMubGlua2VkID0gbGlua2VkO1xuICAgICAgLy8gVHJ5IHRvIHVzZSBhIHRhcmdldCBvZiB0aGUgbGlua2VkIG9iamVjdCBpZiBubyB0YXJnZXQgcGFyYW1ldGVycyBzcGVjaWZpZWRcbiAgICAgIGlmICghdGhpcy5fcGFyYW1zLnRhcmdldCkge1xuICAgICAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgICAgICBsZXQgJGxpbmtlZFRhcmdldDtcbiAgICAgICAgaWYgKCFpc1VuZCgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyhsaW5rZWQpLnRhcmdldHMpKSB7XG4gICAgICAgICAgJGxpbmtlZFRhcmdldCA9IGdldEFuaW1hdGlvbkRvbVRhcmdldCgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyhsaW5rZWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JFYWNoQ2hpbGRyZW4oLyoqIEB0eXBlIHtUaW1lbGluZX0gKi8obGlua2VkKSwgKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZC50YXJnZXRzICYmICEkbGlua2VkVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICRsaW5rZWRUYXJnZXQgPSBnZXRBbmltYXRpb25Eb21UYXJnZXQoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8oY2hpbGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGYWxsYmFjayB0byBib2R5IGlmIG5vIHRhcmdldCBmb3VuZFxuICAgICAgICB0aGlzLnRhcmdldCA9ICRsaW5rZWRUYXJnZXQgfHwgZG9jLmJvZHk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCB2ZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIudmVsb2NpdHk7XG4gIH1cblxuICBnZXQgYmFja3dhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbCA/IHRoaXMuY29udGFpbmVyLmJhY2t3YXJkWCA6IHRoaXMuY29udGFpbmVyLmJhY2t3YXJkWTtcbiAgfVxuXG4gIGdldCBzY3JvbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbCA/IHRoaXMuY29udGFpbmVyLnNjcm9sbFggOiB0aGlzLmNvbnRhaW5lci5zY3JvbGxZO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzKCkge1xuICAgIGNvbnN0IHAgPSAodGhpcy5zY3JvbGwgLSB0aGlzLm9mZnNldFN0YXJ0KSAvIHRoaXMuZGlzdGFuY2U7XG4gICAgcmV0dXJuIHAgPT09IEluZmluaXR5IHx8IGlzTmFOKHApID8gMCA6IHJvdW5kKGNsYW1wKHAsIDAsIDEpLCA2KTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5yZXZlcnRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuX3BhcmFtcztcbiAgICB0aGlzLnJlcGVhdCA9IHNldFZhbHVlKHBhcnNlU2Nyb2xsT2JzZXJ2ZXJGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMucmVwZWF0LCB0aGlzKSwgdHJ1ZSk7XG4gICAgdGhpcy5ob3Jpem9udGFsID0gc2V0VmFsdWUocGFyc2VTY3JvbGxPYnNlcnZlckZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5heGlzLCB0aGlzKSwgJ3knKSA9PT0gJ3gnO1xuICAgIHRoaXMuZW50ZXIgPSBzZXRWYWx1ZShwYXJzZVNjcm9sbE9ic2VydmVyRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmVudGVyLCB0aGlzKSwgJ2VuZCBzdGFydCcpO1xuICAgIHRoaXMubGVhdmUgPSBzZXRWYWx1ZShwYXJzZVNjcm9sbE9ic2VydmVyRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmxlYXZlLCB0aGlzKSwgJ3N0YXJ0IGVuZCcpO1xuICAgIHRoaXMudXBkYXRlQm91bmRzKCk7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZURlYnVnKCkge1xuICAgIGlmICh0aGlzLiRkZWJ1Zykge1xuICAgICAgdGhpcy4kZGVidWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRkZWJ1Zyk7XG4gICAgICB0aGlzLiRkZWJ1ZyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmRlYnVnU3R5bGVzKSB7XG4gICAgICB0aGlzLmRlYnVnU3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy4kZGVidWcgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlYnVnKCkge1xuICAgIHRoaXMucmVtb3ZlRGVidWcoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBjb25zdCBpc0hvcmkgPSB0aGlzLmhvcml6b250YWw7XG4gICAgY29uc3QgJGV4aXN0aW5nRGVidWcgPSBjb250YWluZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuYW5pbWVqcy1vbnNjcm9sbC1kZWJ1ZycpO1xuICAgIGNvbnN0ICRkZWJ1ZyA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCAkdGhyZXNob2xkcyA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCAkdHJpZ2dlcnMgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29sb3IgPSBkZWJ1Z0NvbG9yc1t0aGlzLmluZGV4ICUgZGVidWdDb2xvcnMubGVuZ3RoXTtcbiAgICBjb25zdCB1c2VXaW4gPSBjb250YWluZXIudXNlV2luO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdXNlV2luID8gY29udGFpbmVyLndpbldpZHRoIDogY29udGFpbmVyLndpZHRoO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHVzZVdpbiA/IGNvbnRhaW5lci53aW5IZWlnaHQgOiBjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY29udGFpbmVyLndpZHRoID4gMzYwID8gMzIwIDogMjYwO1xuICAgIGNvbnN0IG9mZkxlZnQgPSBpc0hvcmkgPyAwIDogMTA7XG4gICAgY29uc3Qgb2ZmVG9wID0gaXNIb3JpID8gMTAgOiAwO1xuICAgIGNvbnN0IGhhbGYgPSBpc0hvcmkgPyAyNCA6IHNpemUgLyAyO1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gaXNIb3JpID8gaGFsZiA6IDE1O1xuICAgIGNvbnN0IGxhYmVsV2lkdGggPSBpc0hvcmkgPyA2MCA6IGhhbGY7XG4gICAgY29uc3QgbGFiZWxTaXplID0gaXNIb3JpID8gbGFiZWxXaWR0aCA6IGxhYmVsSGVpZ2h0O1xuICAgIGNvbnN0IHJlcGVhdCA9IGlzSG9yaSA/ICdyZXBlYXQteCcgOiAncmVwZWF0LXknO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2XG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGNvbnN0IGdyYWRpZW50T2Zmc2V0ID0gdiA9PiBpc0hvcmkgPyAnMHB4ICcrKHYpKydweCcgOiAodikrJ3B4JysnIDJweCc7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29uc3QgbGluZUNTUyA9IChjKSA9PiBgbGluZWFyLWdyYWRpZW50KCR7aXNIb3JpID8gOTAgOiAwfWRlZywgJHtjfSAycHgsIHRyYW5zcGFyZW50IDFweClgO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGhcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29uc3QgYmFzZUNTUyA9IChwLCBsLCB0LCB3LCBoKSA9PiBgcG9zaXRpb246JHtwfTtsZWZ0OiR7bH1weDt0b3A6JHt0fXB4O3dpZHRoOiR7d31weDtoZWlnaHQ6JHtofXB4O2A7XG4gICAgJGRlYnVnLnN0eWxlLmNzc1RleHQgPSBgJHtiYXNlQ1NTKCdhYnNvbHV0ZScsIG9mZkxlZnQsIG9mZlRvcCwgaXNIb3JpID8gc2Nyb2xsV2lkdGggOiBzaXplLCBpc0hvcmkgPyBzaXplIDogc2Nyb2xsSGVpZ2h0KX1cbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgei1pbmRleDogJHt0aGlzLmNvbnRhaW5lci56SW5kZXgrK307XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246ICR7aXNIb3JpID8gJ2NvbHVtbicgOiAncm93J307XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMHB4IHJnYmEoMCwwLDAsLjc1KSk7XG4gICAgYDtcbiAgICAkdGhyZXNob2xkcy5zdHlsZS5jc3NUZXh0ID0gYCR7YmFzZUNTUygnc3RpY2t5JywgMCwgMCwgaXNIb3JpID8gY29udGFpbmVyV2lkdGggOiBoYWxmLCBpc0hvcmkgPyBoYWxmIDogY29udGFpbmVySGVpZ2h0KX1gO1xuICAgIGlmICghJGV4aXN0aW5nRGVidWcpIHtcbiAgICAgICR0aHJlc2hvbGRzLnN0eWxlLmNzc1RleHQgKz0gYGJhY2tncm91bmQ6XG4gICAgICAgICR7bGluZUNTUygnI0ZGRkYnKX0ke2dyYWRpZW50T2Zmc2V0KGhhbGYtMTApfSAvICR7aXNIb3JpID8gJzEwMHB4IDEwMHB4JyA6ICcxMDBweCAxMDBweCd9ICR7cmVwZWF0fSxcbiAgICAgICAgJHtsaW5lQ1NTKCcjRkZGOCcpfSR7Z3JhZGllbnRPZmZzZXQoaGFsZi0xMCl9IC8gJHtpc0hvcmkgPyAnMTBweCAxMHB4JyA6ICcxMHB4IDEwcHgnfSAke3JlcGVhdH07XG4gICAgICBgO1xuICAgIH1cbiAgICAkdHJpZ2dlcnMuc3R5bGUuY3NzVGV4dCA9IGAke2Jhc2VDU1MoJ3JlbGF0aXZlJywgMCwgMCwgaXNIb3JpID8gc2Nyb2xsV2lkdGggOiBoYWxmLCBpc0hvcmkgPyBoYWxmIDogc2Nyb2xsSGVpZ2h0KX1gO1xuICAgIGlmICghJGV4aXN0aW5nRGVidWcpIHtcbiAgICAgICR0cmlnZ2Vycy5zdHlsZS5jc3NUZXh0ICs9IGBiYWNrZ3JvdW5kOlxuICAgICAgICAke2xpbmVDU1MoJyNGRkZGJyl9JHtncmFkaWVudE9mZnNldCgwKX0gLyAke2lzSG9yaSA/ICcxMDBweCAxMHB4JyA6ICcxMHB4IDEwMHB4J30gJHtyZXBlYXR9LFxuICAgICAgICAke2xpbmVDU1MoJyNGRkY4Jyl9JHtncmFkaWVudE9mZnNldCgwKX0gLyAke2lzSG9yaSA/ICcxMHB4IDBweCcgOiAnMHB4IDEwcHgnfSAke3JlcGVhdH07XG4gICAgICBgO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbHMgPSBbJyBlbnRlcjogJywgJyBsZWF2ZTogJ107XG4gICAgdGhpcy5jb29yZHMuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgY29uc3QgaXNWaWV3ID0gaSA+IDE7XG4gICAgICBjb25zdCB2YWx1ZSA9IChpc1ZpZXcgPyAwIDogdGhpcy5vZmZzZXQpICsgdjtcbiAgICAgIGNvbnN0IGlzVGFpbCA9IGkgJSAyO1xuICAgICAgY29uc3QgaXNGaXJzdCA9IHZhbHVlIDwgbGFiZWxTaXplO1xuICAgICAgY29uc3QgaXNPdmVyID0gdmFsdWUgPiAoaXNWaWV3ID8gaXNIb3JpID8gY29udGFpbmVyV2lkdGggOiBjb250YWluZXJIZWlnaHQgOiBpc0hvcmkgPyBzY3JvbGxXaWR0aCA6IHNjcm9sbEhlaWdodCkgLSBsYWJlbFNpemU7XG4gICAgICBjb25zdCBpc0ZsaXAgPSAoaXNWaWV3ID8gaXNUYWlsICYmICFpc0ZpcnN0IDogIWlzVGFpbCAmJiAhaXNGaXJzdCkgfHwgaXNPdmVyO1xuICAgICAgY29uc3QgJGxhYmVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgJHRleHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBkaXJQcm9wID0gaXNIb3JpID8gaXNGbGlwID8gJ3JpZ2h0JyA6ICdsZWZ0JyA6IGlzRmxpcCA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICBjb25zdCBmbGlwT2Zmc2V0ID0gaXNGbGlwID8gKGlzSG9yaSA/IGxhYmVsV2lkdGggOiBsYWJlbEhlaWdodCkgKyAoIWlzVmlldyA/IGlzSG9yaSA/IC0xIDogLTIgOiBpc0hvcmkgPyAtMSA6IGlzT3ZlciA/IDAgOiAtMikgOiAhaXNWaWV3ID8gaXNIb3JpID8gMSA6IDAgOiBpc0hvcmkgPyAxIDogMDtcbiAgICAgIC8vICR0ZXh0LmlubmVySFRNTCA9IGAkeyFpc1ZpZXcgPyAnJyA6IGxhYmVsc1tpc1RhaWxdICsgJyAnfSR7dGhpcy5pZH06ICR7dGhpcy50aHJlc2hvbGRzW2ldfSAke2lzVmlldyA/ICcnIDogbGFiZWxzW2lzVGFpbF19YDtcbiAgICAgICR0ZXh0LmlubmVySFRNTCA9IGAke3RoaXMuaWR9JHtsYWJlbHNbaXNUYWlsXX0ke3RoaXMudGhyZXNob2xkc1tpXX1gO1xuICAgICAgJGxhYmVsLnN0eWxlLmNzc1RleHQgPSBgJHtiYXNlQ1NTKCdhYnNvbHV0ZScsIDAsIDAsIGxhYmVsV2lkdGgsIGxhYmVsSGVpZ2h0KX1cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246ICR7aXNIb3JpID8gJ2NvbHVtbicgOiAncm93J307XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC0ke2lzVmlldyA/ICdzdGFydCcgOiAnZW5kJ307XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LSR7aXNGbGlwID8gJ2VuZCcgOiAnc3RhcnQnfTtcbiAgICAgICAgYm9yZGVyLSR7ZGlyUHJvcH06IDJweCAke2lzVGFpbCA/ICdzb2xpZCcgOiAnc29saWQnfSAke2NvbG9yfTtcbiAgICAgIGA7XG4gICAgICAkdGV4dC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXgtd2lkdGg6ICR7KHNpemUgLyAyKSAtIDEwfXB4O1xuICAgICAgICBoZWlnaHQ6ICR7bGFiZWxIZWlnaHR9O1xuICAgICAgICBtYXJnaW4tJHtpc0hvcmkgPyBpc0ZsaXAgPyAncmlnaHQnIDogJ2xlZnQnIDogaXNGbGlwID8gJ2JvdHRvbScgOiAndG9wJ306IC0ycHg7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAyNWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogOXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiAke2lzSG9yaSAmJiBpc0ZsaXAgfHwgIWlzSG9yaSAmJiAhaXNWaWV3ID8gJ3JpZ2h0JyA6ICdsZWZ0J307XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBjb2xvcjogJHtpc1RhaWwgPyBjb2xvciA6ICdyZ2JhKDAsMCwwLC43NSknfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtpc1RhaWwgPyAncmdiYSgwLDAsMCwuNjUpJyA6IGNvbG9yfTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtpc1RhaWwgPyBjb2xvciA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICBib3JkZXItJHtpc0hvcmkgPyBpc0ZsaXAgPyAndG9wLWxlZnQnIDogJ3RvcC1yaWdodCcgOiBpc0ZsaXAgPyAndG9wLWxlZnQnIDogJ2JvdHRvbS1sZWZ0J30tcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci0ke2lzSG9yaSA/IGlzRmxpcCA/ICdib3R0b20tbGVmdCcgOiAnYm90dG9tLXJpZ2h0JyA6IGlzRmxpcCA/ICd0b3AtcmlnaHQnIDogJ2JvdHRvbS1yaWdodCd9LXJhZGl1czogNXB4O1xuICAgICAgYDtcbiAgICAgICRsYWJlbC5hcHBlbmRDaGlsZCgkdGV4dCk7XG4gICAgICBsZXQgcG9zaXRpb24gPSB2YWx1ZSAtIGZsaXBPZmZzZXQgKyAoaXNIb3JpID8gMSA6IDApO1xuICAgICAgJGxhYmVsLnN0eWxlW2lzSG9yaSA/ICdsZWZ0JyA6ICd0b3AnXSA9IGAke3Bvc2l0aW9ufXB4YDtcbiAgICAgIC8vICRsYWJlbC5zdHlsZVtpc0hvcmkgPyAnbGVmdCcgOiAndG9wJ10gPSB2YWx1ZSAtIGZsaXBPZmZzZXQgKyAoIWlzRmxpcCAmJiBpc0ZpcnN0ICYmICFpc1ZpZXcgPyAxIDogaXNGbGlwID8gMCA6IC0yKSArICdweCc7XG4gICAgICAoaXNWaWV3ID8gJHRocmVzaG9sZHMgOiAkdHJpZ2dlcnMpLmFwcGVuZENoaWxkKCRsYWJlbCk7XG4gICAgfSk7XG5cbiAgICAkZGVidWcuYXBwZW5kQ2hpbGQoJHRocmVzaG9sZHMpO1xuICAgICRkZWJ1Zy5hcHBlbmRDaGlsZCgkdHJpZ2dlcnMpO1xuICAgIGNvbnRhaW5lci5lbGVtZW50LmFwcGVuZENoaWxkKCRkZWJ1Zyk7XG5cbiAgICBpZiAoISRleGlzdGluZ0RlYnVnKSAkZGVidWcuY2xhc3NMaXN0LmFkZCgnYW5pbWVqcy1vbnNjcm9sbC1kZWJ1ZycpO1xuICAgIHRoaXMuJGRlYnVnID0gJGRlYnVnO1xuICAgIGNvbnN0IGNvbnRhaW5lclBvc2l0aW9uID0gZ2V0VGFyZ2V0VmFsdWUoY29udGFpbmVyLmVsZW1lbnQsICdwb3NpdGlvbicpO1xuICAgIGlmIChjb250YWluZXJQb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZGVidWdTdHlsZXMgPSBzZXRUYXJnZXRWYWx1ZXMoY29udGFpbmVyLmVsZW1lbnQsIHsgcG9zaXRpb246ICdyZWxhdGl2ZSAnfSk7XG4gICAgfVxuXG4gIH1cblxuICB1cGRhdGVCb3VuZHMoKSB7XG4gICAgaWYgKHRoaXMuX2RlYnVnKSB7XG4gICAgICB0aGlzLnJlbW92ZURlYnVnKCk7XG4gICAgfVxuICAgIGxldCBzdGlja3lzO1xuICAgIGNvbnN0ICR0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBjb25zdCBpc0hvcmkgPSB0aGlzLmhvcml6b250YWw7XG4gICAgY29uc3QgbGlua2VkID0gdGhpcy5saW5rZWQ7XG4gICAgbGV0IGxpbmtlZFRpbWU7XG4gICAgbGV0ICRlbCA9ICR0YXJnZXQ7XG4gICAgbGV0IG9mZnNldFggPSAwO1xuICAgIGxldCBvZmZzZXRZID0gMDtcbiAgICAvKiogQHR5cGUge0VsZW1lbnR9ICovXG4gICAgbGV0ICRvZmZzZXRQYXJlbnQgPSAkZWw7XG4gICAgaWYgKGxpbmtlZCkge1xuICAgICAgbGlua2VkVGltZSA9IGxpbmtlZC5jdXJyZW50VGltZTtcbiAgICAgIGxpbmtlZC5zZWVrKDAsIHRydWUpO1xuICAgIH1cbiAgICBjb25zdCBpc0NvbnRhaW5lclN0YXRpYyA9IGdldFRhcmdldFZhbHVlKGNvbnRhaW5lci5lbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgPyBzZXRUYXJnZXRWYWx1ZXMoY29udGFpbmVyLmVsZW1lbnQsIHsgcG9zaXRpb246ICdyZWxhdGl2ZSAnfSkgOiBmYWxzZTtcbiAgICB3aGlsZSAoJGVsICYmICRlbCAhPT0gY29udGFpbmVyLmVsZW1lbnQgJiYgJGVsICE9PSBkb2MuYm9keSkge1xuICAgICAgY29uc3QgaXNTdGlja3kgPSBnZXRUYXJnZXRWYWx1ZSgkZWwsICdwb3NpdGlvbicpID09PSAnc3RpY2t5JyA/XG4gICAgICAgICAgICAgICAgICAgICAgIHNldFRhcmdldFZhbHVlcygkZWwsIHsgcG9zaXRpb246ICdzdGF0aWMnIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgZmFsc2U7XG4gICAgICBpZiAoJGVsID09PSAkb2Zmc2V0UGFyZW50KSB7XG4gICAgICAgIG9mZnNldFggKz0gJGVsLm9mZnNldExlZnQgfHwgMDtcbiAgICAgICAgb2Zmc2V0WSArPSAkZWwub2Zmc2V0VG9wIHx8IDA7XG4gICAgICAgICRvZmZzZXRQYXJlbnQgPSAkZWwub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuICAgICAgJGVsID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oJGVsLnBhcmVudEVsZW1lbnQpO1xuICAgICAgaWYgKGlzU3RpY2t5KSB7XG4gICAgICAgIGlmICghc3RpY2t5cykgc3RpY2t5cyA9IFtdO1xuICAgICAgICBzdGlja3lzLnB1c2goaXNTdGlja3kpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNDb250YWluZXJTdGF0aWMpIGlzQ29udGFpbmVyU3RhdGljLnJldmVydCgpO1xuICAgIGNvbnN0IG9mZnNldCA9IGlzSG9yaSA/IG9mZnNldFggOiBvZmZzZXRZO1xuICAgIGNvbnN0IHRhcmdldFNpemUgPSBpc0hvcmkgPyAkdGFyZ2V0Lm9mZnNldFdpZHRoIDogJHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IGlzSG9yaSA/IGNvbnRhaW5lci53aWR0aCA6IGNvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGlzSG9yaSA/IGNvbnRhaW5lci5zY3JvbGxXaWR0aCA6IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgbWF4U2Nyb2xsID0gc2Nyb2xsU2l6ZSAtIGNvbnRhaW5lclNpemU7XG4gICAgY29uc3QgZW50ZXIgPSB0aGlzLmVudGVyO1xuICAgIGNvbnN0IGxlYXZlID0gdGhpcy5sZWF2ZTtcblxuICAgIC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV9ICovXG4gICAgbGV0IGVudGVyVGFyZ2V0ID0gJ3N0YXJ0JztcbiAgICAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFZhbHVlfSAqL1xuICAgIGxldCBsZWF2ZVRhcmdldCA9ICdlbmQnO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV9ICovXG4gICAgbGV0IGVudGVyQ29udGFpbmVyID0gJ2VuZCc7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRWYWx1ZX0gKi9cbiAgICBsZXQgbGVhdmVDb250YWluZXIgPSAnc3RhcnQnO1xuXG4gICAgaWYgKGlzU3RyKGVudGVyKSkge1xuICAgICAgY29uc3Qgc3BsaXR0ZWQgPSAvKiogQHR5cGUge1N0cmluZ30gKi8oZW50ZXIpLnNwbGl0KCcgJyk7XG4gICAgICBlbnRlckNvbnRhaW5lciA9IHNwbGl0dGVkWzBdO1xuICAgICAgZW50ZXJUYXJnZXQgPSBzcGxpdHRlZC5sZW5ndGggPiAxID8gc3BsaXR0ZWRbMV0gOiBlbnRlclRhcmdldDtcbiAgICB9IGVsc2UgaWYgKGlzT2JqKGVudGVyKSkge1xuICAgICAgY29uc3QgZSA9IC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkUGFyYW19ICovKGVudGVyKTtcbiAgICAgIGlmICghaXNVbmQoZS5jb250YWluZXIpKSBlbnRlckNvbnRhaW5lciA9IGUuY29udGFpbmVyO1xuICAgICAgaWYgKCFpc1VuZChlLnRhcmdldCkpIGVudGVyVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgfSBlbHNlIGlmIChpc051bShlbnRlcikpIHtcbiAgICAgIGVudGVyQ29udGFpbmVyID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKGVudGVyKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTdHIobGVhdmUpKSB7XG4gICAgICBjb25zdCBzcGxpdHRlZCA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhsZWF2ZSkuc3BsaXQoJyAnKTtcbiAgICAgIGxlYXZlQ29udGFpbmVyID0gc3BsaXR0ZWRbMF07XG4gICAgICBsZWF2ZVRhcmdldCA9IHNwbGl0dGVkLmxlbmd0aCA+IDEgPyBzcGxpdHRlZFsxXSA6IGxlYXZlVGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoaXNPYmoobGVhdmUpKSB7XG4gICAgICBjb25zdCB0ID0gLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRQYXJhbX0gKi8obGVhdmUpO1xuICAgICAgaWYgKCFpc1VuZCh0LmNvbnRhaW5lcikpIGxlYXZlQ29udGFpbmVyID0gdC5jb250YWluZXI7XG4gICAgICBpZiAoIWlzVW5kKHQudGFyZ2V0KSkgbGVhdmVUYXJnZXQgPSB0LnRhcmdldDtcbiAgICB9IGVsc2UgaWYgKGlzTnVtKGxlYXZlKSkge1xuICAgICAgbGVhdmVDb250YWluZXIgPSAvKiogQHR5cGUge051bWJlcn0gKi8obGVhdmUpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZEVudGVyVGFyZ2V0ID0gcGFyc2VCb3VuZFZhbHVlKCR0YXJnZXQsIGVudGVyVGFyZ2V0LCB0YXJnZXRTaXplKTtcbiAgICBjb25zdCBwYXJzZWRMZWF2ZVRhcmdldCA9IHBhcnNlQm91bmRWYWx1ZSgkdGFyZ2V0LCBsZWF2ZVRhcmdldCwgdGFyZ2V0U2l6ZSk7XG4gICAgY29uc3QgdW5kZXIgPSAocGFyc2VkRW50ZXJUYXJnZXQgKyBvZmZzZXQpIC0gY29udGFpbmVyU2l6ZTtcbiAgICBjb25zdCBvdmVyID0gKHBhcnNlZExlYXZlVGFyZ2V0ICsgb2Zmc2V0KSAtIG1heFNjcm9sbDtcbiAgICBjb25zdCBwYXJzZWRFbnRlckNvbnRhaW5lciA9IHBhcnNlQm91bmRWYWx1ZSgkdGFyZ2V0LCBlbnRlckNvbnRhaW5lciwgY29udGFpbmVyU2l6ZSwgdW5kZXIsIG92ZXIpO1xuICAgIGNvbnN0IHBhcnNlZExlYXZlQ29udGFpbmVyID0gcGFyc2VCb3VuZFZhbHVlKCR0YXJnZXQsIGxlYXZlQ29udGFpbmVyLCBjb250YWluZXJTaXplLCB1bmRlciwgb3Zlcik7XG4gICAgY29uc3Qgb2Zmc2V0U3RhcnQgPSBwYXJzZWRFbnRlclRhcmdldCArIG9mZnNldCAtIHBhcnNlZEVudGVyQ29udGFpbmVyO1xuICAgIGNvbnN0IG9mZnNldEVuZCA9IHBhcnNlZExlYXZlVGFyZ2V0ICsgb2Zmc2V0IC0gcGFyc2VkTGVhdmVDb250YWluZXI7XG4gICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBvZmZzZXRFbmQgLSBvZmZzZXRTdGFydDtcbiAgICB0aGlzLm9mZnNldHNbMF0gPSBvZmZzZXRYO1xuICAgIHRoaXMub2Zmc2V0c1sxXSA9IG9mZnNldFk7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5vZmZzZXRTdGFydCA9IG9mZnNldFN0YXJ0O1xuICAgIHRoaXMub2Zmc2V0RW5kID0gb2Zmc2V0RW5kO1xuICAgIHRoaXMuZGlzdGFuY2UgPSBzY3JvbGxEZWx0YSA8PSAwID8gMCA6IHNjcm9sbERlbHRhO1xuICAgIHRoaXMudGhyZXNob2xkcyA9IFtlbnRlclRhcmdldCwgbGVhdmVUYXJnZXQsIGVudGVyQ29udGFpbmVyLCBsZWF2ZUNvbnRhaW5lcl07XG4gICAgdGhpcy5jb29yZHMgPSBbcGFyc2VkRW50ZXJUYXJnZXQsIHBhcnNlZExlYXZlVGFyZ2V0LCBwYXJzZWRFbnRlckNvbnRhaW5lciwgcGFyc2VkTGVhdmVDb250YWluZXJdO1xuICAgIGlmIChzdGlja3lzKSB7XG4gICAgICBzdGlja3lzLmZvckVhY2goc3RpY2t5ID0+IHN0aWNreS5yZXZlcnQoKSk7XG4gICAgfVxuICAgIGlmIChsaW5rZWQpIHtcbiAgICAgIGxpbmtlZC5zZWVrKGxpbmtlZFRpbWUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVidWcpIHtcbiAgICAgIHRoaXMuZGVidWcoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgY29uc3QgbGlua2VkID0gdGhpcy5saW5rZWQ7XG4gICAgY29uc3Qgc3luYyA9IHRoaXMuc3luYztcbiAgICBjb25zdCBzeW5jRWFzZSA9IHRoaXMuc3luY0Vhc2U7XG4gICAgY29uc3Qgc3luY1Ntb290aCA9IHRoaXMuc3luY1Ntb290aDtcbiAgICBjb25zdCBzaG91bGRTZWVrID0gbGlua2VkICYmIChzeW5jRWFzZSB8fCBzeW5jU21vb3RoKTtcbiAgICBjb25zdCBpc0hvcmkgPSB0aGlzLmhvcml6b250YWw7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgY29uc3Qgc2Nyb2xsID0gdGhpcy5zY3JvbGw7XG4gICAgY29uc3QgaXNCZWZvcmUgPSBzY3JvbGwgPD0gdGhpcy5vZmZzZXRTdGFydDtcbiAgICBjb25zdCBpc0FmdGVyID0gc2Nyb2xsID49IHRoaXMub2Zmc2V0RW5kO1xuICAgIGNvbnN0IGlzSW5WaWV3ID0gIWlzQmVmb3JlICYmICFpc0FmdGVyO1xuICAgIGNvbnN0IGlzT25UaGVFZGdlID0gc2Nyb2xsID09PSB0aGlzLm9mZnNldFN0YXJ0IHx8IHNjcm9sbCA9PT0gdGhpcy5vZmZzZXRFbmQ7XG4gICAgY29uc3QgZm9yY2VFbnRlciA9ICF0aGlzLmhhc0VudGVyZWQgJiYgaXNPblRoZUVkZ2U7XG4gICAgY29uc3QgJGRlYnVnID0gdGhpcy5fZGVidWcgJiYgdGhpcy4kZGVidWc7XG4gICAgbGV0IGhhc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICBsZXQgc3luY0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxldCBwID0gdGhpcy5wcm9ncmVzcztcblxuICAgIGlmIChpc0JlZm9yZSAmJiB0aGlzLmJlZ2FuKSB7XG4gICAgICB0aGlzLmJlZ2FuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHAgPiAwICYmICF0aGlzLmJlZ2FuKSB7XG4gICAgICB0aGlzLmJlZ2FuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2Vlaykge1xuICAgICAgY29uc3QgbHAgPSBsaW5rZWQucHJvZ3Jlc3M7XG4gICAgICBpZiAoc3luY1Ntb290aCAmJiBpc051bShzeW5jU21vb3RoKSkge1xuICAgICAgICBpZiAoLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHN5bmNTbW9vdGgpIDwgMSkge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSAwLjAwMDE7XG4gICAgICAgICAgY29uc3Qgc25hcCA9IGxwIDwgcCAmJiBwID09PSAxID8gc3RlcCA6IGxwID4gcCAmJiAhcCA/IC0xZS00IDogMDtcbiAgICAgICAgICBwID0gcm91bmQobGVycChscCwgcCwgaW50ZXJwb2xhdGUoLjAxLCAuMiwgLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHN5bmNTbW9vdGgpKSwgZmFsc2UpICsgc25hcCwgNik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3luY0Vhc2UpIHtcbiAgICAgICAgcCA9IHN5bmNFYXNlKHApO1xuICAgICAgfVxuICAgICAgaGFzVXBkYXRlZCA9IHAgIT09IHRoaXMucHJldlByb2dyZXNzO1xuICAgICAgc3luY0NvbXBsZXRlZCA9IGxwID09PSAxO1xuICAgICAgaWYgKGhhc1VwZGF0ZWQgJiYgIXN5bmNDb21wbGV0ZWQgJiYgKHN5bmNTbW9vdGggJiYgbHApKSB7XG4gICAgICAgIGNvbnRhaW5lci53YWtlVGlja2VyLnJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJGRlYnVnKSB7XG4gICAgICBjb25zdCBzdGlja3kgPSBpc0hvcmkgPyBjb250YWluZXIuc2Nyb2xsWSA6IGNvbnRhaW5lci5zY3JvbGxYO1xuICAgICAgJGRlYnVnLnN0eWxlW2lzSG9yaSA/ICd0b3AnIDogJ2xlZnQnXSA9IHN0aWNreSArIDEwICsgJ3B4JztcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIGVudGVyIGNhbGxiYWNrcyBpZiBhbHJlYWR5IGluIHZpZXcgb3Igd2hlbiBlbnRlcmluZyB0aGUgdmlld1xuICAgIGlmICgoaXNJblZpZXcgJiYgIXRoaXMuaXNJblZpZXcpIHx8IChmb3JjZUVudGVyICYmICF0aGlzLmZvcmNlRW50ZXIgJiYgIXRoaXMuaGFzRW50ZXJlZCkpIHtcbiAgICAgIGlmIChpc0luVmlldykgdGhpcy5pc0luVmlldyA9IHRydWU7XG4gICAgICBpZiAoIXRoaXMuZm9yY2VFbnRlciB8fCAhdGhpcy5oYXNFbnRlcmVkKSB7XG4gICAgICAgIGlmICgkZGVidWcgJiYgaXNJblZpZXcpICRkZWJ1Zy5zdHlsZS56SW5kZXggPSBgJHt0aGlzLmNvbnRhaW5lci56SW5kZXgrK31gO1xuICAgICAgICB0aGlzLm9uU3luY0VudGVyKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRW50ZXIodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmJhY2t3YXJkKSB7XG4gICAgICAgICAgdGhpcy5vblN5bmNFbnRlckJhY2t3YXJkKHRoaXMpO1xuICAgICAgICAgIHRoaXMub25FbnRlckJhY2t3YXJkKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25TeW5jRW50ZXJGb3J3YXJkKHRoaXMpO1xuICAgICAgICAgIHRoaXMub25FbnRlckZvcndhcmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYXNFbnRlcmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZvcmNlRW50ZXIpIHRoaXMuZm9yY2VFbnRlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGlzSW5WaWV3KSB7XG4gICAgICAgIHRoaXMuZm9yY2VFbnRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0luVmlldyB8fCAhaXNJblZpZXcgJiYgdGhpcy5pc0luVmlldykge1xuICAgICAgaGFzVXBkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc1VwZGF0ZWQpIHtcbiAgICAgIGlmIChzaG91bGRTZWVrKSBsaW5rZWQuc2VlayhsaW5rZWQuZHVyYXRpb24gKiBwKTtcbiAgICAgIHRoaXMub25VcGRhdGUodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0luVmlldyAmJiB0aGlzLmlzSW5WaWV3KSB7XG4gICAgICB0aGlzLmlzSW5WaWV3ID0gZmFsc2U7XG4gICAgICB0aGlzLm9uU3luY0xlYXZlKHRoaXMpO1xuICAgICAgdGhpcy5vbkxlYXZlKHRoaXMpO1xuICAgICAgaWYgKHRoaXMuYmFja3dhcmQpIHtcbiAgICAgICAgdGhpcy5vblN5bmNMZWF2ZUJhY2t3YXJkKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTGVhdmVCYWNrd2FyZCh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25TeW5jTGVhdmVGb3J3YXJkKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTGVhdmVGb3J3YXJkKHRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKHN5bmMgJiYgIXN5bmNTbW9vdGgpIHtcbiAgICAgICAgc3luY0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHAgPj0gMSAmJiB0aGlzLmJlZ2FuICYmICF0aGlzLmNvbXBsZXRlZCAmJiAoc3luYyAmJiBzeW5jQ29tcGxldGVkIHx8ICFzeW5jKSkge1xuICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgdGhpcy5vblN5bmNDb21wbGV0ZSh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIGlmICgoIXRoaXMucmVwZWF0ICYmICFsaW5rZWQpIHx8ICghdGhpcy5yZXBlYXQgJiYgbGlua2VkICYmIGxpbmtlZC5jb21wbGV0ZWQpKSB7XG4gICAgICAgIHRoaXMucmV2ZXJ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHAgPCAxICYmIHRoaXMuY29tcGxldGVkKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucHJldlByb2dyZXNzID0gcDtcbiAgfVxuXG4gIHJldmVydCgpIHtcbiAgICBpZiAodGhpcy5yZXZlcnRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgIHJlbW92ZUNoaWxkKGNvbnRhaW5lciwgdGhpcyk7XG4gICAgaWYgKCFjb250YWluZXIuX2hlYWQpIHtcbiAgICAgIGNvbnRhaW5lci5yZXZlcnQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlYnVnKSB7XG4gICAgICB0aGlzLnJlbW92ZURlYnVnKCk7XG4gICAgfVxuICAgIHRoaXMucmV2ZXJ0ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1Njcm9sbE9ic2VydmVyUGFyYW1zfSBbcGFyYW1ldGVycz17fV1cbiAqIEByZXR1cm4ge1Njcm9sbE9ic2VydmVyfVxuICovXG5jb25zdCBvblNjcm9sbCA9IChwYXJhbWV0ZXJzID0ge30pID0+IG5ldyBTY3JvbGxPYnNlcnZlcihwYXJhbWV0ZXJzKTtcblxuXG5cblxuLyoqXG4gKiBAdHlwZWRlZiAge09iamVjdH0gU3RhZ2dlclBhcmFtZXRlcnNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFN0cmluZ30gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtOdW1iZXJ8J2ZpcnN0J3wnY2VudGVyJ3wnbGFzdCd9IFtmcm9tXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbcmV2ZXJzZWRdXG4gKiBAcHJvcGVydHkge0FycmF5LjxOdW1iZXI+fSBbZ3JpZF1cbiAqIEBwcm9wZXJ0eSB7KCd4J3wneScpfSBbYXhpc11cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICogQHByb3BlcnR5IHtUd2Vlbk1vZGlmaWVyfSBbbW9kaWZpZXJdXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU3RhZ2dlckZ1bmN0aW9uXG4gKiBAcGFyYW0ge1RhcmdldH0gW3RhcmdldF1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdXG4gKiBAcGFyYW0ge051bWJlcn0gW2xlbmd0aF1cbiAqIEBwYXJhbSB7VGltZWxpbmV9IFt0bF1cbiAqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfFtOdW1iZXJ8U3RyaW5nLE51bWJlcnxTdHJpbmddfSB2YWxcbiAqIEBwYXJhbSAge1N0YWdnZXJQYXJhbWV0ZXJzfSBwYXJhbXNcbiAqIEByZXR1cm4ge1N0YWdnZXJGdW5jdGlvbn1cbiAqL1xuY29uc3Qgc3RhZ2dlciA9ICh2YWwsIHBhcmFtcyA9IHt9KSA9PiB7XG4gIGxldCB2YWx1ZXMgPSBbXTtcbiAgbGV0IG1heFZhbHVlID0gMDtcbiAgY29uc3QgZnJvbSA9IHBhcmFtcy5mcm9tO1xuICBjb25zdCByZXZlcnNlZCA9IHBhcmFtcy5yZXZlcnNlZDtcbiAgY29uc3QgZWFzZSA9IHBhcmFtcy5lYXNlO1xuICBjb25zdCBoYXNFYXNpbmcgPSAhaXNVbmQoZWFzZSk7XG4gIGNvbnN0IGhhc1NwcmluZyA9IGhhc0Vhc2luZyAmJiAhaXNVbmQoLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UpO1xuICBjb25zdCBzdGFnZ2VyRWFzZSA9IGhhc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlIDogaGFzRWFzaW5nID8gcGFyc2VFYXNpbmdzKGVhc2UpIDogbnVsbDtcbiAgY29uc3QgZ3JpZCA9IHBhcmFtcy5ncmlkO1xuICBjb25zdCBheGlzID0gcGFyYW1zLmF4aXM7XG4gIGNvbnN0IGZyb21GaXJzdCA9IGlzVW5kKGZyb20pIHx8IGZyb20gPT09IDAgfHwgZnJvbSA9PT0gJ2ZpcnN0JztcbiAgY29uc3QgZnJvbUNlbnRlciA9IGZyb20gPT09ICdjZW50ZXInO1xuICBjb25zdCBmcm9tTGFzdCA9IGZyb20gPT09ICdsYXN0JztcbiAgY29uc3QgaXNSYW5nZSA9IGlzQXJyKHZhbCk7XG4gIGNvbnN0IHZhbDEgPSBpc1JhbmdlID8gcGFyc2VOdW1iZXIodmFsWzBdKSA6IHBhcnNlTnVtYmVyKHZhbCk7XG4gIGNvbnN0IHZhbDIgPSBpc1JhbmdlID8gcGFyc2VOdW1iZXIodmFsWzFdKSA6IDA7XG4gIGNvbnN0IHVuaXRNYXRjaCA9IHVuaXRzRXhlY1JneC5leGVjKChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSArIGVtcHR5U3RyaW5nKTtcbiAgY29uc3Qgc3RhcnQgPSBwYXJhbXMuc3RhcnQgfHwgMCArIChpc1JhbmdlID8gdmFsMSA6IDApO1xuICBsZXQgZnJvbUluZGV4ID0gZnJvbUZpcnN0ID8gMCA6IGlzTnVtKGZyb20pID8gZnJvbSA6IDA7XG4gIHJldHVybiAoXywgaSwgdCwgdGwpID0+IHtcbiAgICBpZiAoZnJvbUNlbnRlcikgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7XG4gICAgaWYgKGZyb21MYXN0KSBmcm9tSW5kZXggPSB0IC0gMTtcbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKGFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXggJSBncmlkWzBdIDogKGdyaWRbMF0gLSAxKSAvIDI7XG4gICAgICAgICAgY29uc3QgZnJvbVkgPSAhZnJvbUNlbnRlciA/IGZsb29yKGZyb21JbmRleCAvIGdyaWRbMF0pIDogKGdyaWRbMV0gLSAxKSAvIDI7XG4gICAgICAgICAgY29uc3QgdG9YID0gaW5kZXggJSBncmlkWzBdO1xuICAgICAgICAgIGNvbnN0IHRvWSA9IGZsb29yKGluZGV4IC8gZ3JpZFswXSk7XG4gICAgICAgICAgY29uc3QgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XG4gICAgICAgICAgY29uc3QgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XG4gICAgICAgICAgbGV0IHZhbHVlID0gc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHZhbHVlID0gLWRpc3RhbmNlWDtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB2YWx1ZSA9IC1kaXN0YW5jZVk7XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG1heFZhbHVlID0gbWF4KC4uLnZhbHVlcyk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhZ2dlckVhc2UpIHZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IHN0YWdnZXJFYXNlKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlKTtcbiAgICAgIGlmIChyZXZlcnNlZCkgdmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IGFicyhtYXhWYWx1ZSAtIHZhbCkpO1xuICAgIH1cbiAgICBjb25zdCBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGwgPyBwYXJzZVRpbWVsaW5lUG9zaXRpb24odGwsIGlzVW5kKHBhcmFtcy5zdGFydCkgPyB0bC5pdGVyYXRpb25EdXJhdGlvbiA6IHN0YXJ0KSA6IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhzdGFydCk7XG4gICAgLyoqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfSAqL1xuICAgIGxldCBvdXRwdXQgPSBvZmZzZXQgKyAoKHNwYWNpbmcgKiByb3VuZCh2YWx1ZXNbaV0sIDIpKSB8fCAwKTtcbiAgICBpZiAocGFyYW1zLm1vZGlmaWVyKSBvdXRwdXQgPSBwYXJhbXMubW9kaWZpZXIob3V0cHV0KTtcbiAgICBpZiAodW5pdE1hdGNoKSBvdXRwdXQgPSBgJHtvdXRwdXR9JHt1bml0TWF0Y2hbMl19YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59O1xuXG5leHBvcnQgeyBBbmltYXRhYmxlLCBEcmFnZ2FibGUsIEpTQW5pbWF0aW9uLCBTY29wZSwgU2Nyb2xsT2JzZXJ2ZXIsIFNwcmluZywgVGltZWxpbmUsIFRpbWVyLCBXQUFQSUFuaW1hdGlvbiwgYW5pbWF0ZSwgY3JlYXRlQW5pbWF0YWJsZSwgY3JlYXRlRHJhZ2dhYmxlLCBjcmVhdGVTY29wZSwgY3JlYXRlU3ByaW5nLCBjcmVhdGVUaW1lbGluZSwgY3JlYXRlVGltZXIsIGVhc2VzLCBlbmdpbmUsIG9uU2Nyb2xsLCBzY3JvbGxDb250YWluZXJzLCBzdGFnZ2VyLCBzdmcsIHV0aWxzLCB3YWFwaSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhbmltYXRlLCB3YWFwaSwgc3RhZ2dlciwgdXRpbHMsIGNyZWF0ZVNjb3BlIH0gZnJvbSAnYW5pbWVqcyc7XG5cbmZ1bmN0aW9uIGFkZEl0ZW0oKSB7XG4gIGxldCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X2FyZWEnKTtcbiAgbGV0IHZhbHVlID0gYXJlYS52YWx1ZTtcblxuICBpZiAodmFsdWUgPT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyh2YWx1ZSArICcgIDEnKTtcblxuICBsZXQgYW5pbWVfYXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltZV9hcmVhJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gJ29uZSc7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHZhbHVlW2ldO1xuICAgIGFuaW1lX2FyZWEuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH1cblxuICBhbmltYXRlKCdzcGFuJywge1xuICAgIHk6IFtcbiAgICAgIHsgdG86ICctMi43NXJlbScsIGVhc2U6ICdvdXRFeHBvJywgZHVyYXRpb246IDYwMCB9LFxuICAgICAgeyB0bzogMCwgZWFzZTogJ291dEJvdW5jZScsIGR1cmF0aW9uOiA4MDAsIGRlbGF5OiAxMDAgfSxcbiAgICBdLFxuICAgIC8vIFByb3BlcnR5IHNwZWNpZmljIHBhcmFtZXRlcnNcbiAgICByb3RhdGU6IHtcbiAgICAgIGZyb206ICctMXR1cm4nLFxuICAgICAgZGVsYXk6IDAsXG4gICAgfSxcbiAgICBkZWxheTogKF8sIGkpID0+IGkgKiA1MCwgLy8gRnVuY3Rpb24gYmFzZWQgdmFsdWVcbiAgICBlYXNlOiAnaW5PdXRDaXJjJyxcbiAgICBsb29wRGVsYXk6IDEwMDAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgfSk7XG5cbiAgd2FhcGkuYW5pbWF0ZSgnLm9uZScsIHtcbiAgICB0cmFuc2xhdGU6IGAwIC0ycmVtYCxcbiAgICBkZWxheTogc3RhZ2dlcigxMDApLFxuICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhbHRlcm5hdGU6IHRydWUsXG4gICAgZWFzZTogJ2luT3V0KDIpJyxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0yKCkge1xuICBsZXQgYXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9hcmVhJyk7XG4gIGxldCB2YWx1ZSA9IGFyZWEudmFsdWU7XG5cbiAgaWYgKHZhbHVlID09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2codmFsdWUgKyAnICAyJyk7XG5cbiAgbGV0IGFuaW1lX2FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWVfYXJlYScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICd0d28nO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIGFuaW1lX2FyZWEuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHdhYXBpLmFuaW1hdGUoJy50d28nLCB7XG4gICAgdHJhbnNsYXRlOiAnMTdyZW0nLFxuICAgIGRlbGF5OiBzdGFnZ2VyKDEwMCksXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhbHRlcm5hdGU6IHRydWUsXG4gIH0pO1xufVxuXG5sZXQgYW5pbWVfanVkZ21lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gYWRkSXRlbTMoKSB7XG4gIGxldCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X2FyZWEnKTtcbiAgbGV0IHZhbHVlID0gYXJlYS52YWx1ZTtcblxuICBpZiAodmFsdWUgPT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyh2YWx1ZSArICcgIDMnKTtcblxuICBsZXQgYW5pbWVfYXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltZV9hcmVhJyk7XG5cbiAgaWYgKGFuaW1lX2p1ZGdtZW50ID09IGZhbHNlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTmFtZSA9ICd0aHJlZSc7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIGFuaW1lX2FyZWEuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgYW5pbWVfanVkZ21lbnQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGFuaW1lX2p1ZGdtZW50ID09IHRydWUpIHtcbiAgICB1dGlscy5zZXQoJy50aHJlZScsIHtcbiAgICAgIHg6ICgpID0+IHV0aWxzLnJhbmRvbSgwLCAyMCkgKyAncmVtJyxcbiAgICAgIHJvdGF0ZTogKCkgPT4gdXRpbHMucmFuZG9tKDAsIDE4MCksXG4gICAgICBzY2FsZTogKCkgPT4gdXRpbHMucmFuZG9tKDAuMjUsIDEsIDMpLFxuICAgIH0pO1xuXG4gICAgYW5pbWVfanVkZ21lbnQgPSBmYWxzZTtcbiAgfVxuICBhbmltYXRlKCcudGhyZWUnLCB7XG4gICAgeTogc3RhZ2dlcihbJy0xLjIzcmVtJywgJzFyZW0nXSksXG4gICAgcm90YXRlOiB7IGZyb206IHN0YWdnZXIoJy0uMTI1dHVybicpIH0sXG4gICAgbG9vcDogMSxcbiAgICBhbHRlcm5hdGU6IHRydWUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRJdGVtNCgpIHtcbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfYXJlYScpO1xuICBsZXQgdmFsdWUgPSBhcmVhLnZhbHVlO1xuXG4gIGlmICh2YWx1ZSA9PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHZhbHVlICsgJyAgNCcpO1xuXG4gIGxldCBhbmltZV9hcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1lX2FyZWEnKTtcblxuICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ2ZvdXInO1xuICBkaXYudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgc3F1YXJlLmFwcGVuZENoaWxkKGRpdik7XG4gIGFuaW1lX2FyZWEuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcblxuICBjcmVhdGVTY29wZSh7IHJvb3Q6ICcucm93Om50aC1jaGlsZCgyKScgfSkuYWRkKCgpID0+IHtcbiAgICBhbmltYXRlKCcuc3F1YXJlJywge1xuICAgICAgeDogJzk1cmVtJyxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyDjg5zjgr/jg7PvvJFcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRJdGVtKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkSXRlbTIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRJdGVtMyk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ1dHRvbjQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEl0ZW00KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==