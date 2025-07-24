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
      x: '45rem',
      loop: true,
      alternate: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1Q0FBdUMsZ0JBQWdCO0FBQzdELGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLGdCQUFnQjtBQUM5QixjQUFjLGdCQUFnQjtB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QWUsMENBQUs7QUFDcEIsb0JBQW9CLDBDQUFLO0FBQ3pCLG1CQUFtQiwwQ0FBSztBQUN4QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxFQUFFLGdEQUFPO0FBQ1QsT0FBTyxnREFBTztBQUNkLGNBQWMsTUFBTSxnREFBTyxlQUFlO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFXLEdBQUcsMkJBQTJCO0FBQzNDLElBQUksZ0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9hbmltZWpzL2xpYi9hbmltZS5lc20uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFuaW1lLmpzIC0gRVNNXG4gKiBAdmVyc2lvbiB2NC4wLjJcbiAqIEBhdXRob3IgSnVsaWFuIEdhcm5pZXJcbiAqIEBsaWNlbnNlIE1JVFxuICogQGNvcHlyaWdodCAoYykgMjAyNSBKdWxpYW4gR2FybmllclxuICogQHNlZSBodHRwczovL2FuaW1lanMuY29tXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEZWZhdWx0c1BhcmFtc1xuICogQHByb3BlcnR5IHtOdW1iZXJ8U3RyaW5nfSBbaWRdXG4gKiBAcHJvcGVydHkge1BlcmNlbnRhZ2VLZXlmcmFtZXN8RHVyYXRpb25LZXlmcmFtZXN9IFtrZXlmcmFtZXNdXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbcGxheWJhY2tFYXNlXVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtwbGF5YmFja1JhdGVdXG4gKiBAcHJvcGVydHkge051bWJlcn0gW2ZyYW1lUmF0ZV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfEJvb2xlYW59IFtsb29wXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbcmV2ZXJzZWRdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFthbHRlcm5hdGVdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58U2Nyb2xsT2JzZXJ2ZXJ9IFthdXRvcGxheV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfEZ1bmN0aW9uVmFsdWV9IFtkdXJhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfEZ1bmN0aW9uVmFsdWV9IFtkZWxheV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbbG9vcERlbGF5XVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKiBAcHJvcGVydHkgeydub25lJ3wncmVwbGFjZSd8J2JsZW5kJ3xjb21wb3NpdGlvblR5cGVzfSBbY29tcG9zaXRpb25dXG4gKiBAcHJvcGVydHkgeyh2OiBhbnkpID0+IGFueX0gW21vZGlmaWVyXVxuICogQHByb3BlcnR5IHsodGlja2FibGU6IFRpY2thYmxlKSA9PiB2b2lkfSBbb25CZWdpbl1cbiAqIEBwcm9wZXJ0eSB7KHRpY2thYmxlOiBUaWNrYWJsZSkgPT4gdm9pZH0gW29uQmVmb3JlVXBkYXRlXVxuICogQHByb3BlcnR5IHsodGlja2FibGU6IFRpY2thYmxlKSA9PiB2b2lkfSBbb25VcGRhdGVdXG4gKiBAcHJvcGVydHkgeyh0aWNrYWJsZTogVGlja2FibGUpID0+IHZvaWR9IFtvbkxvb3BdXG4gKiBAcHJvcGVydHkgeyh0aWNrYWJsZTogVGlja2FibGUpID0+IHZvaWR9IFtvblBhdXNlXVxuICogQHByb3BlcnR5IHsodGlja2FibGU6IFRpY2thYmxlKSA9PiB2b2lkfSBbb25Db21wbGV0ZV1cbiAqIEBwcm9wZXJ0eSB7KHJlbmRlcmFibGU6IFJlbmRlcmFibGUpID0+IHZvaWR9IFtvblJlbmRlcl1cbiAqL1xuXG4vKiogQHR5cGVkZWYge0pTQW5pbWF0aW9ufFRpbWVsaW5lfSBSZW5kZXJhYmxlICovXG4vKiogQHR5cGVkZWYge1RpbWVyfFJlbmRlcmFibGV9IFRpY2thYmxlICovXG4vKiogQHR5cGVkZWYge1RpbWVyJkpTQW5pbWF0aW9uJlRpbWVsaW5lfSBDYWxsYmFja0FyZ3VtZW50ICovXG4vKiogQHR5cGVkZWYge0FuaW1hdGFibGV8VGlja2FibGV8RHJhZ2dhYmxlfFNjcm9sbE9ic2VydmVyfFNjb3BlfSBSZXZlcnRpYmxlICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRHJhZ2dhYmxlQXhpc1BhcmFtXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW21hcFRvXVxuICogQHByb3BlcnR5IHtUd2Vlbk1vZGlmaWVyfSBbbW9kaWZpZXJdXG4gKiBAcHJvcGVydHkge1R3ZWVuQ29tcG9zaXRpb259IFtjb21wb3NpdGlvbl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfEFycmF5PE51bWJlcj58KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyfEFycmF5PE51bWJlcj4pfSBbc25hcF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERyYWdnYWJsZUN1cnNvclBhcmFtc1xuICogQHByb3BlcnR5IHtTdHJpbmd9IFtvbkhvdmVyXVxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtvbkdyYWJdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEcmFnZ2FibGVQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7RE9NVGFyZ2V0U2VsZWN0b3J9IFt0cmlnZ2VyXVxuICogQHByb3BlcnR5IHtET01UYXJnZXRTZWxlY3RvcnxBcnJheTxOdW1iZXI+fCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IERPTVRhcmdldFNlbGVjdG9yfEFycmF5PE51bWJlcj4pfSBbY29udGFpbmVyXVxuICogQHByb3BlcnR5IHtCb29sZWFufERyYWdnYWJsZUF4aXNQYXJhbX0gW3hdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58RHJhZ2dhYmxlQXhpc1BhcmFtfSBbeV1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Nb2RpZmllcn0gW21vZGlmaWVyXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8QXJyYXk8TnVtYmVyPnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXJ8QXJyYXk8TnVtYmVyPil9IFtzbmFwXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8QXJyYXk8TnVtYmVyPnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXJ8QXJyYXk8TnVtYmVyPil9IFtjb250YWluZXJQYWRkaW5nXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW2NvbnRhaW5lckZyaWN0aW9uXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW3JlbGVhc2VDb250YWluZXJGcmljdGlvbl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFtkcmFnU3BlZWRdXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbc2Nyb2xsU3BlZWRdXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbc2Nyb2xsVGhyZXNob2xkXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW21pblZlbG9jaXR5XVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW21heFZlbG9jaXR5XVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW3ZlbG9jaXR5TXVsdGlwbGllcl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbcmVsZWFzZU1hc3NdXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3JlbGVhc2VTdGlmZm5lc3NdXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3JlbGVhc2VEYW1waW5nXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbcmVsZWFzZURhbXBpbmddXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbcmVsZWFzZUVhc2VdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58RHJhZ2dhYmxlQ3Vyc29yUGFyYW1zfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IEJvb2xlYW58RHJhZ2dhYmxlQ3Vyc29yUGFyYW1zKX0gW2N1cnNvcl1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uR3JhYl1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uRHJhZ11cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uUmVsZWFzZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uVXBkYXRlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25TZXR0bGVdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvblNuYXBdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvblJlc2l6ZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uQWZ0ZXJSZXNpemVdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7U1ZHR2VvbWV0cnlFbGVtZW50ICYge1xuICogICBzZXRBdHRyaWJ1dGUobmFtZTogJ2RyYXcnLCB2YWx1ZTogYCR7bnVtYmVyfSAke251bWJlcn1gKTogdm9pZDtcbiAqICAgZHJhdzogYCR7bnVtYmVyfSAke251bWJlcn1gO1xuICogfX0gRHJhd2FibGVTVkdHZW9tZXRyeVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEVhc2luZ0Z1bmN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeygnbGluZWFyJ3wnbGluZWFyKHgxLCB4MiAyNSUsIHgzKSd8J2luJ3wnb3V0J3wnaW5PdXQnfCdpblF1YWQnfCdvdXRRdWFkJ3wnaW5PdXRRdWFkJ3wnaW5DdWJpYyd8J291dEN1YmljJ3wnaW5PdXRDdWJpYyd8J2luUXVhcnQnfCdvdXRRdWFydCd8J2luT3V0UXVhcnQnfCdpblF1aW50J3wnb3V0UXVpbnQnfCdpbk91dFF1aW50J3wnaW5TaW5lJ3wnb3V0U2luZSd8J2luT3V0U2luZSd8J2luQ2lyYyd8J291dENpcmMnfCdpbk91dENpcmMnfCdpbkV4cG8nfCdvdXRFeHBvJ3wnaW5PdXRFeHBvJ3wnaW5Cb3VuY2UnfCdvdXRCb3VuY2UnfCdpbk91dEJvdW5jZSd8J2luQmFjayd8J291dEJhY2snfCdpbk91dEJhY2snfCdpbkVsYXN0aWMnfCdvdXRFbGFzdGljJ3wnaW5PdXRFbGFzdGljJ3wnaXJyZWd1bGFyJ3wnY3ViaWNCZXppZXInfCdzdGVwcyd8J2luKHAgPSAxLjY3NSknfCdvdXQocCA9IDEuNjc1KSd8J2luT3V0KHAgPSAxLjY3NSknfCdpbkJhY2sob3ZlcnNob290ID0gMS43MDE1OCknfCdvdXRCYWNrKG92ZXJzaG9vdCA9IDEuNzAxNTgpJ3wnaW5PdXRCYWNrKG92ZXJzaG9vdCA9IDEuNzAxNTgpJ3wnaW5FbGFzdGljKGFtcGxpdHVkZSA9IDEsIHBlcmlvZCA9IC4zKSd8J291dEVsYXN0aWMoYW1wbGl0dWRlID0gMSwgcGVyaW9kID0gLjMpJ3wnaW5PdXRFbGFzdGljKGFtcGxpdHVkZSA9IDEsIHBlcmlvZCA9IC4zKSd8J2lycmVndWxhcihsZW5ndGggPSAxMCwgcmFuZG9tbmVzcyA9IDEpJ3wnY3ViaWNCZXppZXIoeDEsIHkxLCB4MiwgeTIpJ3wnc3RlcHMoc3RlcHMgPSAxMCknKX0gRWFzZVN0cmluZ1BhcmFtTmFtZXNcbiAqL1xuXG4vLyBBIGhhY2sgdG8gZ2V0IGJvdGggZWFzZSBuYW1lcyBzdWdnZXN0aW9ucyBBTkQgYWxsb3cgYW55IHN0cmluZ3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjk3MjkjaXNzdWVjb21tZW50LTQ2MDM0NjQyMVxuLyoqIEB0eXBlZGVmIHsoU3RyaW5nICYge30pfEVhc2VTdHJpbmdQYXJhbU5hbWVzfEVhc2luZ0Z1bmN0aW9ufFNwcmluZ30gRWFzaW5nUGFyYW0gKi9cblxuLyoqIEB0eXBlZGVmIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBET01UYXJnZXQgKi9cbi8qKiBAdHlwZWRlZiB7UmVjb3JkPFN0cmluZywgYW55Pn0gSlNUYXJnZXQgKi9cbi8qKiBAdHlwZWRlZiB7RE9NVGFyZ2V0fEpTVGFyZ2V0fSBUYXJnZXQgKi9cbi8qKiBAdHlwZWRlZiB7VGFyZ2V0fE5vZGVMaXN0fFN0cmluZ30gVGFyZ2V0U2VsZWN0b3IgKi9cbi8qKiBAdHlwZWRlZiB7RE9NVGFyZ2V0fE5vZGVMaXN0fFN0cmluZ30gRE9NVGFyZ2V0U2VsZWN0b3IgKi9cbi8qKiBAdHlwZWRlZiB7QXJyYXkuPERPTVRhcmdldFNlbGVjdG9yPnxET01UYXJnZXRTZWxlY3Rvcn0gRE9NVGFyZ2V0c1BhcmFtICovXG4vKiogQHR5cGVkZWYge0FycmF5LjxET01UYXJnZXQ+fSBET01UYXJnZXRzQXJyYXkgKi9cbi8qKiBAdHlwZWRlZiB7QXJyYXkuPEpTVGFyZ2V0PnxKU1RhcmdldH0gSlNUYXJnZXRzUGFyYW0gKi9cbi8qKiBAdHlwZWRlZiB7QXJyYXkuPEpTVGFyZ2V0Pn0gSlNUYXJnZXRzQXJyYXkgKi9cbi8qKiBAdHlwZWRlZiB7QXJyYXkuPFRhcmdldFNlbGVjdG9yPnxUYXJnZXRTZWxlY3Rvcn0gVGFyZ2V0c1BhcmFtICovXG4vKiogQHR5cGVkZWYge0FycmF5LjxUYXJnZXQ+fSBUYXJnZXRzQXJyYXkgKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgRnVuY3Rpb25WYWx1ZVxuICogQHBhcmFtIHtUYXJnZXR9IHRhcmdldCAtIFRoZSBhbmltYXRlZCB0YXJnZXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIFRoZSB0YXJnZXQgaW5kZXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggLSBUaGUgdG90YWwgbnVtYmVyIG9mIGFuaW1hdGVkIHRhcmdldHNcbiAqIEByZXR1cm4ge051bWJlcnxTdHJpbmd8VHdlZW5PYmplY3RWYWx1ZXxBcnJheS48TnVtYmVyfFN0cmluZ3xUd2Vlbk9iamVjdFZhbHVlPn1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBUd2Vlbk1vZGlmaWVyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSBUaGUgYW5pbWF0ZWQgdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9XG4gKi9cblxuLyoqIEB0eXBlZGVmIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gQ29sb3JBcnJheSAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAY2FsbGJhY2sgQ2FsbGJhY2tcbiAqIEBwYXJhbSB7VH0gc2VsZiAtIFJldHVybnMgaXRzZWxmXG4gKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gW2VdXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtvYmplY3R9IFRcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRpY2thYmxlQ2FsbGJhY2tzXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFQ+fSBbb25CZWdpbl1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8VD59IFtvbkJlZm9yZVVwZGF0ZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8VD59IFtvblVwZGF0ZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8VD59IFtvbkxvb3BdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFQ+fSBbb25QYXVzZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8VD59IFtvbkNvbXBsZXRlXVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtvYmplY3R9IFRcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlbmRlcmFibGVDYWxsYmFja3NcbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8VD59IFtvblJlbmRlcl1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFR3ZWVuXG4gKiBAcHJvcGVydHkge051bWJlcn0gaWRcbiAqIEBwcm9wZXJ0eSB7SlNBbmltYXRpb259IHBhcmVudFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcHJvcGVydHkge1RhcmdldH0gdGFyZ2V0XG4gKiBAcHJvcGVydHkge1N0cmluZ3xOdW1iZXJ9IF92YWx1ZVxuICogQHByb3BlcnR5IHtGdW5jdGlvbnxudWxsfSBfZnVuY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gX2Vhc2VcbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPE51bWJlcj59IF9mcm9tTnVtYmVyc1xuICogQHByb3BlcnR5IHtBcnJheS48TnVtYmVyPn0gX3RvTnVtYmVyc1xuICogQHByb3BlcnR5IHtBcnJheS48U3RyaW5nPn0gX3N0cmluZ3NcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfZnJvbU51bWJlclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF90b051bWJlclxuICogQHByb3BlcnR5IHtBcnJheS48TnVtYmVyPn0gX251bWJlcnNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfbnVtYmVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gX3VuaXRcbiAqIEBwcm9wZXJ0eSB7VHdlZW5Nb2RpZmllcn0gX21vZGlmaWVyXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2N1cnJlbnRUaW1lXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2RlbGF5XG4gKiBAcHJvcGVydHkge051bWJlcn0gX3VwZGF0ZUR1cmF0aW9uXG4gKiBAcHJvcGVydHkge051bWJlcn0gX3N0YXJ0VGltZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9jaGFuZ2VEdXJhdGlvblxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9hYnNvbHV0ZVN0YXJ0VGltZVxuICogQHByb3BlcnR5IHt0d2VlblR5cGVzfSBfdHdlZW5UeXBlXG4gKiBAcHJvcGVydHkge3ZhbHVlVHlwZXN9IF92YWx1ZVR5cGVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfY29tcG9zaXRpb25cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfaXNPdmVybGFwcGVkXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2lzT3ZlcnJpZGRlblxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9yZW5kZXJUcmFuc2Zvcm1zXG4gKiBAcHJvcGVydHkge1R3ZWVufSBfcHJldlJlcFxuICogQHByb3BlcnR5IHtUd2Vlbn0gX25leHRSZXBcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF9wcmV2QWRkXG4gKiBAcHJvcGVydHkge1R3ZWVufSBfbmV4dEFkZFxuICogQHByb3BlcnR5IHtUd2Vlbn0gX3ByZXZcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF9uZXh0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBUd2VlbkRlY29tcG9zZWRWYWx1ZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHQgLSBUeXBlXG4gKiBAcHJvcGVydHkge051bWJlcn0gbiAtIFNpbmdsZSBudW1iZXIgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB1IC0gVmFsdWUgdW5pdFxuICogQHByb3BlcnR5IHtTdHJpbmd9IG8gLSBWYWx1ZSBvcGVyYXRvclxuICogQHByb3BlcnR5IHtBcnJheS48TnVtYmVyPn0gZCAtIEFycmF5IG9mIE51bWJlcnMgKGluIGNhc2Ugb2YgY29tcGxleCB2YWx1ZSB0eXBlKVxuICogQHByb3BlcnR5IHtBcnJheS48U3RyaW5nPn0gcyAtIFN0cmluZ3MgKGluIGNhc2Ugb2YgY29tcGxleCB2YWx1ZSB0eXBlKVxuICovXG5cbi8qKiBAdHlwZWRlZiB7e19oZWFkOiBudWxsfFR3ZWVuLCBfdGFpbDogbnVsbHxUd2Vlbn19IFR3ZWVuUHJvcGVydHlTaWJsaW5ncyAqL1xuLyoqIEB0eXBlZGVmIHtSZWNvcmQ8U3RyaW5nLCBUd2VlblByb3BlcnR5U2libGluZ3M+fSBUd2Vlbkxvb2t1cHMgKi9cbi8qKiBAdHlwZWRlZiB7V2Vha01hcC48VGFyZ2V0LCBUd2Vlbkxvb2t1cHM+fSBUd2VlblJlcGxhY2VMb29rdXBzICovXG4vKiogQHR5cGVkZWYge01hcC48VGFyZ2V0LCBUd2Vlbkxvb2t1cHM+fSBUd2VlbkFkZGl0aXZlTG9va3VwcyAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRpbWVyT3B0aW9uc1xuICogQHByb3BlcnR5IHtOdW1iZXJ8U3RyaW5nfSBbaWRdXG4gKiBAcHJvcGVydHkge1R3ZWVuUGFyYW1WYWx1ZX0gW2R1cmF0aW9uXVxuICogQHByb3BlcnR5IHtUd2VlblBhcmFtVmFsdWV9IFtkZWxheV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbbG9vcERlbGF5XVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbcmV2ZXJzZWRdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFthbHRlcm5hdGVdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58TnVtYmVyfSBbbG9vcF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxTY3JvbGxPYnNlcnZlcn0gW2F1dG9wbGF5XVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtmcmFtZVJhdGVdXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3BsYXliYWNrUmF0ZV1cbiAqL1xuXG4vKipcblxuLyoqXG4gKiBAdHlwZWRlZiB7VGltZXJPcHRpb25zICYgVGlja2FibGVDYWxsYmFja3M8VGltZXI+fSBUaW1lclBhcmFtc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge051bWJlcnxTdHJpbmd8RnVuY3Rpb25WYWx1ZX0gVHdlZW5QYXJhbVZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7VHdlZW5QYXJhbVZhbHVlfFtUd2VlblBhcmFtVmFsdWUsIFR3ZWVuUGFyYW1WYWx1ZV19IFR3ZWVuUHJvcFZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFN0cmluZyAmIHt9KXwnbm9uZSd8J3JlcGxhY2UnfCdibGVuZCd8Y29tcG9zaXRpb25UeXBlc30gVHdlZW5Db21wb3NpdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVHdlZW5QYXJhbXNPcHRpb25zXG4gKiBAcHJvcGVydHkge1R3ZWVuUGFyYW1WYWx1ZX0gW2R1cmF0aW9uXVxuICogQHByb3BlcnR5IHtUd2VlblBhcmFtVmFsdWV9IFtkZWxheV1cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICogQHByb3BlcnR5IHtUd2Vlbk1vZGlmaWVyfSBbbW9kaWZpZXJdXG4gKiBAcHJvcGVydHkge1R3ZWVuQ29tcG9zaXRpb259IFtjb21wb3NpdGlvbl1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFR3ZWVuVmFsdWVzXG4gKiBAcHJvcGVydHkge1R3ZWVuUGFyYW1WYWx1ZX0gW2Zyb21dXG4gKiBAcHJvcGVydHkge1R3ZWVuUHJvcFZhbHVlfSBbdG9dXG4gKiBAcHJvcGVydHkge1R3ZWVuUHJvcFZhbHVlfSBbZnJvbVRvXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1R3ZWVuUGFyYW1zT3B0aW9ucyAmIFR3ZWVuVmFsdWVzfSBUd2VlbktleVZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7QXJyYXkuPFR3ZWVuS2V5VmFsdWV8VHdlZW5Qcm9wVmFsdWU+fSBBcnJheVN5bnRheFZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7VHdlZW5QYXJhbVZhbHVlfEFycmF5U3ludGF4VmFsdWV8VHdlZW5LZXlWYWx1ZX0gVHdlZW5PcHRpb25zXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UGFydGlhbDx7dG86IFR3ZWVuUGFyYW1WYWx1ZXxBcnJheS48VHdlZW5QYXJhbVZhbHVlPjsgZnJvbTogVHdlZW5QYXJhbVZhbHVlfEFycmF5LjxUd2VlblBhcmFtVmFsdWU+OyBmcm9tVG86IFR3ZWVuUGFyYW1WYWx1ZXxBcnJheS48VHdlZW5QYXJhbVZhbHVlPjt9Pn0gVHdlZW5PYmplY3RWYWx1ZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUGVyY2VudGFnZUtleWZyYW1lT3B0aW9uc1xuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPFN0cmluZywgVHdlZW5QYXJhbVZhbHVlPn0gUGVyY2VudGFnZUtleWZyYW1lUGFyYW1zXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPFN0cmluZywgUGVyY2VudGFnZUtleWZyYW1lUGFyYW1zICYgUGVyY2VudGFnZUtleWZyYW1lT3B0aW9ucz59IFBlcmNlbnRhZ2VLZXlmcmFtZXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheTxSZWNvcmQ8U3RyaW5nLCBUd2Vlbk9wdGlvbnMgfCBUd2Vlbk1vZGlmaWVyIHwgYm9vbGVhbj4gJiBUd2VlblBhcmFtc09wdGlvbnM+fSBEdXJhdGlvbktleWZyYW1lc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQW5pbWF0aW9uT3B0aW9uc1xuICogQHByb3BlcnR5IHtQZXJjZW50YWdlS2V5ZnJhbWVzfER1cmF0aW9uS2V5ZnJhbWVzfSBba2V5ZnJhbWVzXVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW3BsYXliYWNrRWFzZV1cbiAqL1xuXG4vLyBUT0RPOiBDdXJyZW50bHkgc2V0dGluZyBUd2Vlbk1vZGlmaWVyIHRvIHRoZSBpbnRlcnNlY3RlZCBSZWNvcmQ8PiBtYWtlcyB0aGUgRnVuY3Rpb25WYWx1ZSB0eXBlIHRhcmdldCBwYXJhbSBhbnkgaWYgb25seSBvbmUgcGFyYW1ldGVyIGlzIHNldFxuLyoqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPFN0cmluZywgVHdlZW5PcHRpb25zIHwgQ2FsbGJhY2s8SlNBbmltYXRpb24+IHwgVHdlZW5Nb2RpZmllciB8IGJvb2xlYW4gfCBQZXJjZW50YWdlS2V5ZnJhbWVzIHwgRHVyYXRpb25LZXlmcmFtZXMgfCBTY3JvbGxPYnNlcnZlcj4gJiBUaW1lck9wdGlvbnMgJiBBbmltYXRpb25PcHRpb25zICYgVHdlZW5QYXJhbXNPcHRpb25zICYgVGlja2FibGVDYWxsYmFja3M8SlNBbmltYXRpb24+ICYgUmVuZGVyYWJsZUNhbGxiYWNrczxKU0FuaW1hdGlvbj59IEFuaW1hdGlvblBhcmFtc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVGltZWxpbmVPcHRpb25zXG4gKiBAcHJvcGVydHkge0RlZmF1bHRzUGFyYW1zfSBbZGVmYXVsdHNdXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbcGxheWJhY2tFYXNlXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1RpbWVyT3B0aW9ucyAmIFRpbWVsaW5lT3B0aW9ucyAmIFRpY2thYmxlQ2FsbGJhY2tzPFRpbWVsaW5lPiAmIFJlbmRlcmFibGVDYWxsYmFja3M8VGltZWxpbmU+fSBUaW1lbGluZVBhcmFtc1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEFuaW1hdGFibGVQcm9wZXJ0eVNldHRlclxuICogQHBhcmFtICB7TnVtYmVyfEFycmF5LjxOdW1iZXI+fSB0b1xuICogQHBhcmFtICB7TnVtYmVyfSBbZHVyYXRpb25dXG4gKiBAcGFyYW0gIHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKiBAcmV0dXJuIHtBbmltYXRhYmxlT2JqZWN0fVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEFuaW1hdGFibGVQcm9wZXJ0eUdldHRlclxuICogQHJldHVybiB7TnVtYmVyfEFycmF5LjxOdW1iZXI+fVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0FuaW1hdGFibGVQcm9wZXJ0eVNldHRlciAmIEFuaW1hdGFibGVQcm9wZXJ0eUdldHRlcn0gQW5pbWF0YWJsZVByb3BlcnR5XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7QW5pbWF0YWJsZSAmIFJlY29yZDxTdHJpbmcsIEFuaW1hdGFibGVQcm9wZXJ0eT59IEFuaW1hdGFibGVPYmplY3RcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEFuaW1hdGFibGVQcm9wZXJ0eVBhcmFtc09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbdW5pdF1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5QYXJhbVZhbHVlfSBbZHVyYXRpb25dXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Nb2RpZmllcn0gW21vZGlmaWVyXVxuICogQHByb3BlcnR5IHtUd2VlbkNvbXBvc2l0aW9ufSBbY29tcG9zaXRpb25dXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPFN0cmluZywgVHdlZW5QYXJhbVZhbHVlIHwgRWFzaW5nUGFyYW0gfCBUd2Vlbk1vZGlmaWVyIHwgVHdlZW5Db21wb3NpdGlvbiB8IEFuaW1hdGFibGVQcm9wZXJ0eVBhcmFtc09wdGlvbnM+ICYgQW5pbWF0YWJsZVByb3BlcnR5UGFyYW1zT3B0aW9uc30gQW5pbWF0YWJsZVBhcmFtc1xuICovXG5cblxuLy8gRW52aXJvbm1lbnRzXG5cbi8vIFRPRE86IERvIHdlIG5lZWQgdG8gY2hlY2sgaWYgd2UncmUgcnVubmluZyBpbnNpZGUgYSB3b3JrZXIgP1xuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qKiBAdHlwZSB7T2JqZWN0fE51bGx9ICovXG5jb25zdCB3aW4gPSBpc0Jyb3dzZXIgPyB3aW5kb3cgOiBudWxsO1xuXG4vKiogQHR5cGUge0RvY3VtZW50fSAqL1xuY29uc3QgZG9jID0gaXNCcm93c2VyID8gZG9jdW1lbnQgOiBudWxsO1xuXG4vLyBFbnVtc1xuXG4vKiogQGVudW0ge051bWJlcn0gKi9cbmNvbnN0IHR3ZWVuVHlwZXMgPSB7XG4gIE9CSkVDVDogMCxcbiAgQVRUUklCVVRFOiAxLFxuICBDU1M6IDIsXG4gIFRSQU5TRk9STTogMyxcbiAgQ1NTX1ZBUjogNCxcbn07XG5cbi8qKiBAZW51bSB7TnVtYmVyfSAqL1xuY29uc3QgdmFsdWVUeXBlcyA9IHtcbiAgTlVNQkVSOiAwLFxuICBVTklUOiAxLFxuICBDT0xPUjogMixcbiAgQ09NUExFWDogMyxcbn07XG5cbi8qKiBAZW51bSB7TnVtYmVyfSAqL1xuY29uc3QgdGlja01vZGVzID0ge1xuICBOT05FOiAwLFxuICBBVVRPOiAxLFxuICBGT1JDRTogMixcbn07XG5cbi8qKiBAZW51bSB7TnVtYmVyfSAqL1xuY29uc3QgY29tcG9zaXRpb25UeXBlcyA9IHtcbiAgcmVwbGFjZTogMCxcbiAgbm9uZTogMSxcbiAgYmxlbmQ6IDIsXG59O1xuXG4vLyBDYWNoZSBzeW1ib2xzXG5cbmNvbnN0IGlzUmVnaXN0ZXJlZFRhcmdldFN5bWJvbCA9IFN5bWJvbCgpO1xuY29uc3QgaXNEb21TeW1ib2wgPSBTeW1ib2woKTtcbmNvbnN0IGlzU3ZnU3ltYm9sID0gU3ltYm9sKCk7XG5jb25zdCB0cmFuc2Zvcm1zU3ltYm9sID0gU3ltYm9sKCk7XG5jb25zdCBtb3JwaFBvaW50c1N5bWJvbCA9IFN5bWJvbCgpO1xuY29uc3QgcHJveHlUYXJnZXRTeW1ib2wgPSBTeW1ib2woKTtcblxuLy8gTnVtYmVyc1xuXG5jb25zdCBtaW5WYWx1ZSA9IDFlLTExO1xuY29uc3QgbWF4VmFsdWUgPSAxZTEyO1xuY29uc3QgSyA9IDFlMztcbmNvbnN0IG1heEZwcyA9IDEyMDtcblxuLy8gU3RyaW5nc1xuXG5jb25zdCBlbXB0eVN0cmluZyA9ICcnO1xuY29uc3Qgc2hvcnRUcmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuXG5zaG9ydFRyYW5zZm9ybXMuc2V0KCd4JywgJ3RyYW5zbGF0ZVgnKTtcbnNob3J0VHJhbnNmb3Jtcy5zZXQoJ3knLCAndHJhbnNsYXRlWScpO1xuc2hvcnRUcmFuc2Zvcm1zLnNldCgneicsICd0cmFuc2xhdGVaJyk7XG5cbmNvbnN0IHZhbGlkVHJhbnNmb3JtcyA9IFtcbiAgJ3RyYW5zbGF0ZVgnLFxuICAndHJhbnNsYXRlWScsXG4gICd0cmFuc2xhdGVaJyxcbiAgJ3JvdGF0ZScsXG4gICdyb3RhdGVYJyxcbiAgJ3JvdGF0ZVknLFxuICAncm90YXRlWicsXG4gICdzY2FsZScsXG4gICdzY2FsZVgnLFxuICAnc2NhbGVZJyxcbiAgJ3NjYWxlWicsXG4gICdza2V3JyxcbiAgJ3NrZXdYJyxcbiAgJ3NrZXdZJyxcbiAgJ3BlcnNwZWN0aXZlJyxcbiAgJ21hdHJpeCcsXG4gICdtYXRyaXgzZCcsXG5dO1xuXG5jb25zdCB0cmFuc2Zvcm1zRnJhZ21lbnRTdHJpbmdzID0gdmFsaWRUcmFuc2Zvcm1zLnJlZHVjZSgoYSwgdikgPT4gKHsuLi5hLCBbdl06IHYgKyAnKCd9KSwge30pO1xuXG4vLyBGdW5jdGlvbnNcblxuLyoqIEByZXR1cm4ge3ZvaWR9ICovXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8vIFJlZ2V4XG5cbmNvbnN0IGhleFRlc3RSZ3ggPSAvKF4jKFtcXGRhLWZdezN9KXsxLDJ9JCl8KF4jKFtcXGRhLWZdezR9KXsxLDJ9JCkvaTtcbmNvbnN0IHJnYkV4ZWNSZ3ggPSAvcmdiXFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccypcXCkvaTtcbmNvbnN0IHJnYmFFeGVjUmd4ID0gL3JnYmFcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKC0/XFxkK3wtP1xcZCouXFxkKylcXHMqXFwpL2k7XG5jb25zdCBoc2xFeGVjUmd4ID0gL2hzbFxcKFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKVxccyosXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspJVxccyosXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspJVxccypcXCkvaTtcbmNvbnN0IGhzbGFFeGVjUmd4ID0gL2hzbGFcXChcXHMqKC0/XFxkK3wtP1xcZCouXFxkKylcXHMqLFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKSVcXHMqLFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKSVcXHMqLFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKVxccypcXCkvaTtcbi8vIGV4cG9ydCBjb25zdCBkaWdpdFdpdGhFeHBvbmVudFJneCA9IC9bLStdP1xcZCpcXC4/XFxkKyg/OltlRV1bLStdP1xcZCspPy9nO1xuY29uc3QgZGlnaXRXaXRoRXhwb25lbnRSZ3ggPSAvWy0rXT9cXGQqXFwuP1xcZCsoPzplWy0rXT9cXGQpPy9naTtcbi8vIGV4cG9ydCBjb25zdCB1bml0c0V4ZWNSZ3ggPSAvXihbLStdP1xcZCpcXC4/XFxkKyg/OltlRV1bLStdP1xcZCspPykrKFthLXpdK3wlKSQvaTtcbmNvbnN0IHVuaXRzRXhlY1JneCA9IC9eKFstK10/XFxkKlxcLj9cXGQrKD86ZVstK10/XFxkKyk/KShbYS16XSt8JSkkL2k7XG5jb25zdCBsb3dlckNhc2VSZ3ggPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IHRyYW5zZm9ybXNFeGVjUmd4ID0gLyhcXHcrKShcXChbXildK1xcKSspL2c7IC8vIE1hdGNoIGlubGluZSB0cmFuc2Zvcm1zIHdpdGggY2FjbCgpIHZhbHVlcywgcmV0dXJucyB0aGUgdmFsdWUgd3JhcHBlZCBpbiAoKVxuY29uc3QgcmVsYXRpdmVWYWx1ZXNFeGVjUmd4ID0gLyhcXCo9fFxcKz18LT0pLztcblxuXG5cblxuLyoqIEB0eXBlIHtEZWZhdWx0c1BhcmFtc30gKi9cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBpZDogbnVsbCxcbiAga2V5ZnJhbWVzOiBudWxsLFxuICBwbGF5YmFja0Vhc2U6IG51bGwsXG4gIHBsYXliYWNrUmF0ZTogMSxcbiAgZnJhbWVSYXRlOiBtYXhGcHMsXG4gIGxvb3A6IDAsXG4gIHJldmVyc2VkOiBmYWxzZSxcbiAgYWx0ZXJuYXRlOiBmYWxzZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGR1cmF0aW9uOiBLLFxuICBkZWxheTogMCxcbiAgbG9vcERlbGF5OiAwLFxuICBlYXNlOiAnb3V0KDIpJyxcbiAgY29tcG9zaXRpb246IGNvbXBvc2l0aW9uVHlwZXMucmVwbGFjZSxcbiAgbW9kaWZpZXI6IHYgPT4gdixcbiAgb25CZWdpbjogbm9vcCxcbiAgb25CZWZvcmVVcGRhdGU6IG5vb3AsXG4gIG9uVXBkYXRlOiBub29wLFxuICBvbkxvb3A6IG5vb3AsXG4gIG9uUGF1c2U6IG5vb3AsXG4gIG9uQ29tcGxldGU6IG5vb3AsXG4gIG9uUmVuZGVyOiBub29wLFxufTtcblxuY29uc3QgZ2xvYmFscyA9IHtcbiAgLyoqIEB0eXBlIHtEZWZhdWx0c1BhcmFtc30gKi9cbiAgZGVmYXVsdHMsXG4gIC8qKiBAdHlwZSB7RG9jdW1lbnR8RE9NVGFyZ2V0fSAqL1xuICByb290OiBkb2MsXG4gIC8qKiBAdHlwZSB7U2NvcGV9ICovXG4gIHNjb3BlOiBudWxsLFxuICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgcHJlY2lzaW9uOiA0LFxuICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgdGltZVNjYWxlOiAxLFxuICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgdGlja1RocmVzaG9sZDogMjAwLFxufTtcblxuY29uc3QgZ2xvYmFsVmVyc2lvbnMgPSB7IHZlcnNpb246ICc0LjAuMicsIGVuZ2luZTogbnVsbCB9O1xuXG5pZiAoaXNCcm93c2VyKSB7XG4gIGlmICghd2luLkFuaW1lSlMpIHdpbi5BbmltZUpTID0gW107XG4gIHdpbi5BbmltZUpTLnB1c2goZ2xvYmFsVmVyc2lvbnMpO1xufVxuXG4vLyBTdHJpbmdzXG5cbi8qKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgdG9Mb3dlckNhc2UgPSBzdHIgPT4gc3RyLnJlcGxhY2UobG93ZXJDYXNlUmd4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuXG4vKipcbiAqIFByaW9yaXRpemUgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiByZWdleCB3aGVuIHBvc3NpYmxlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHBhcmFtICB7U3RyaW5nfSBzdWJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IHN0cmluZ1N0YXJ0c1dpdGggPSAoc3RyLCBzdWIpID0+IHN0ci5pbmRleE9mKHN1YikgPT09IDA7XG5cbi8vIFRpbWVcbi8vIE5vdGU6IERhdGUubm93IGlzIHVzZWQgaW5zdGVhZCBvZiBwZXJmb3JtYW5jZS5ub3cgc2luY2UgaXQgaXMgcHJlY2lzZSBlbm91Z2ggZm9yIHRpbWluZ3MgY2FsY3VsYXRpb25zLCBwZXJmb3JtcyBzbGlnaHRseSBmYXN0ZXIgYW5kIHdvcmtzIGluIE5vZGUuanMgZW52aXJvbmVtZW50LlxuY29uc3Qgbm93ID0gRGF0ZS5ub3c7XG5cbi8vIFR5cGVzIGNoZWNrZXJzXG5cbmNvbnN0IGlzQXJyID0gQXJyYXkuaXNBcnJheTtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge2EgaXMgUmVjb3JkPFN0cmluZywgYW55Pn0gKi9cbmNvbnN0IGlzT2JqID0gYSA9PiBhICYmIGEuY29uc3RydWN0b3IgPT09IE9iamVjdDtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge2EgaXMgTnVtYmVyfSAqL1xuY29uc3QgaXNOdW0gPSBhID0+IHR5cGVvZiBhID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oYSk7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHthIGlzIFN0cmluZ30gKi9cbmNvbnN0IGlzU3RyID0gYSA9PiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHthIGlzIEZ1bmN0aW9ufSAqL1xuY29uc3QgaXNGbmMgPSBhID0+IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7YSBpcyB1bmRlZmluZWR9ICovXG5jb25zdCBpc1VuZCA9IGEgPT4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7YSBpcyBudWxsIHwgdW5kZWZpbmVkfSAqL1xuY29uc3QgaXNOaWwgPSBhID0+IGlzVW5kKGEpIHx8IGEgPT09IG51bGw7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHthIGlzIFNWR0VsZW1lbnR9ICovXG5jb25zdCBpc1N2ZyA9IGEgPT4gaXNCcm93c2VyICYmIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7Qm9vbGVhbn0gKi9cbmNvbnN0IGlzSGV4ID0gYSA9PiBoZXhUZXN0Umd4LnRlc3QoYSk7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHtCb29sZWFufSAqL1xuY29uc3QgaXNSZ2IgPSBhID0+IHN0cmluZ1N0YXJ0c1dpdGgoYSwgJ3JnYicpO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7Qm9vbGVhbn0gKi9cbmNvbnN0IGlzSHNsID0gYSA9PiBzdHJpbmdTdGFydHNXaXRoKGEsICdoc2wnKTtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge0Jvb2xlYW59ICovXG5jb25zdCBpc0NvbCA9IGEgPT4gaXNIZXgoYSkgfHwgaXNSZ2IoYSkgfHwgaXNIc2woYSk7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHtCb29sZWFufSAqL1xuY29uc3QgaXNLZXkgPSBhID0+ICFnbG9iYWxzLmRlZmF1bHRzLmhhc093blByb3BlcnR5KGEpO1xuXG4vLyBOdW1iZXJcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgcGFyc2VOdW1iZXIgPSBzdHIgPT4gaXNTdHIoc3RyKSA/XG4gIHBhcnNlRmxvYXQoLyoqIEB0eXBlIHtTdHJpbmd9ICovKHN0cikpIDpcbiAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHN0cik7XG5cbi8vIE1hdGhcblxuY29uc3QgcG93ID0gTWF0aC5wb3c7XG5jb25zdCBzcXJ0ID0gTWF0aC5zcXJ0O1xuY29uc3Qgc2luID0gTWF0aC5zaW47XG5jb25zdCBjb3MgPSBNYXRoLmNvcztcbmNvbnN0IGFicyA9IE1hdGguYWJzO1xuY29uc3QgZXhwID0gTWF0aC5leHA7XG5jb25zdCBjZWlsID0gTWF0aC5jZWlsO1xuY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuY29uc3QgYXNpbiA9IE1hdGguYXNpbjtcbmNvbnN0IG1heCA9IE1hdGgubWF4O1xuY29uc3QgYXRhbjIgPSBNYXRoLmF0YW4yO1xuY29uc3QgUEkgPSBNYXRoLlBJO1xuY29uc3QgX3JvdW5kID0gTWF0aC5yb3VuZDtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBjbGFtcCA9ICh2LCBtaW4sIG1heCkgPT4gdiA8IG1pbiA/IG1pbiA6IHYgPiBtYXggPyBtYXggOiB2O1xuXG5jb25zdCBwb3dDYWNoZSA9IHt9O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWNpbWFsTGVuZ3RoXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHJvdW5kID0gKHYsIGRlY2ltYWxMZW5ndGgpID0+IHtcbiAgaWYgKGRlY2ltYWxMZW5ndGggPCAwKSByZXR1cm4gdjtcbiAgaWYgKCFkZWNpbWFsTGVuZ3RoKSByZXR1cm4gX3JvdW5kKHYpO1xuICBsZXQgcCA9IHBvd0NhY2hlW2RlY2ltYWxMZW5ndGhdO1xuICBpZiAoIXApIHAgPSBwb3dDYWNoZVtkZWNpbWFsTGVuZ3RoXSA9IDEwICoqIGRlY2ltYWxMZW5ndGg7XG4gIHJldHVybiBfcm91bmQodiAqIHApIC8gcDtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcGFyYW0gIHtOdW1iZXJ8QXJyYXk8TnVtYmVyPn0gaW5jcmVtZW50XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHNuYXAgPSAodiwgaW5jcmVtZW50KSA9PiBpc0FycihpbmNyZW1lbnQpID8gaW5jcmVtZW50LnJlZHVjZSgoY2xvc2VzdCwgY3YpID0+IChhYnMoY3YgLSB2KSA8IGFicyhjbG9zZXN0IC0gdikgPyBjdiA6IGNsb3Nlc3QpKSA6IGluY3JlbWVudCA/IF9yb3VuZCh2IC8gaW5jcmVtZW50KSAqIGluY3JlbWVudCA6IHY7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFxuICogQHBhcmFtICB7TnVtYmVyfSBlbmRcbiAqIEBwYXJhbSAge051bWJlcn0gcHJvZ3Jlc3NcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgaW50ZXJwb2xhdGUgPSAoc3RhcnQsIGVuZCwgcHJvZ3Jlc3MpID0+IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHByb2dyZXNzO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBjbGFtcEluZmluaXR5ID0gdiA9PiB2ID09PSBJbmZpbml0eSA/IG1heFZhbHVlIDogdiA9PT0gLUluZmluaXR5ID8gLTFlMTIgOiB2O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBub3JtYWxpemVUaW1lID0gdiA9PiB2IDw9IG1pblZhbHVlID8gbWluVmFsdWUgOiBjbGFtcEluZmluaXR5KHJvdW5kKHYsIDExKSk7XG5cbi8vIEFycmF5c1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1RbXX0gYVxuICogQHJldHVybiB7VFtdfVxuICovXG5jb25zdCBjbG9uZUFycmF5ID0gYSA9PiBpc0FycihhKSA/IFsgLi4uYSBdIDogYTtcblxuLy8gT2JqZWN0c1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdGVtcGxhdGUgVVxuICogQHBhcmFtIHtUfSBvMVxuICogQHBhcmFtIHtVfSBvMlxuICogQHJldHVybiB7VCAmIFV9XG4gKi9cbmNvbnN0IG1lcmdlT2JqZWN0cyA9IChvMSwgbzIpID0+IHtcbiAgY29uc3QgbWVyZ2VkID0gLyoqIEB0eXBlIHtUICYgVX0gKi8oeyAuLi5vMSB9KTtcbiAgZm9yIChsZXQgcCBpbiBvMikge1xuICAgIGNvbnN0IG8xcCA9IC8qKiBAdHlwZSB7VCAmIFV9ICovKG8xKVtwXTtcbiAgICBtZXJnZWRbcF0gPSBpc1VuZChvMXApID8gLyoqIEB0eXBlIHtUICYgVX0gKi8obzIpW3BdIDogbzFwO1xuICB9ICByZXR1cm4gbWVyZ2VkO1xufTtcblxuLy8gTGlua2VkIGxpc3RzXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JldmVyc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ByZXZQcm9wXVxuICogQHBhcmFtIHtTdHJpbmd9IFtuZXh0UHJvcF1cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmNvbnN0IGZvckVhY2hDaGlsZHJlbiA9IChwYXJlbnQsIGNhbGxiYWNrLCByZXZlcnNlLCBwcmV2UHJvcCA9ICdfcHJldicsIG5leHRQcm9wID0gJ19uZXh0JykgPT4ge1xuICBsZXQgbmV4dCA9IHBhcmVudC5faGVhZDtcbiAgbGV0IGFkanVzdGVkTmV4dFByb3AgPSBuZXh0UHJvcDtcbiAgaWYgKHJldmVyc2UpIHtcbiAgICBuZXh0ID0gcGFyZW50Ll90YWlsO1xuICAgIGFkanVzdGVkTmV4dFByb3AgPSBwcmV2UHJvcDtcbiAgfVxuICB3aGlsZSAobmV4dCkge1xuICAgIGNvbnN0IGN1cnJlbnROZXh0ID0gbmV4dFthZGp1c3RlZE5leHRQcm9wXTtcbiAgICBjYWxsYmFjayhuZXh0KTtcbiAgICBuZXh0ID0gY3VycmVudE5leHQ7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtICB7T2JqZWN0fSBwYXJlbnRcbiAqIEBwYXJhbSAge09iamVjdH0gY2hpbGRcbiAqIEBwYXJhbSAge1N0cmluZ30gW3ByZXZQcm9wXVxuICogQHBhcmFtICB7U3RyaW5nfSBbbmV4dFByb3BdXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5jb25zdCByZW1vdmVDaGlsZCA9IChwYXJlbnQsIGNoaWxkLCBwcmV2UHJvcCA9ICdfcHJldicsIG5leHRQcm9wID0gJ19uZXh0JykgPT4ge1xuICBjb25zdCBwcmV2ID0gY2hpbGRbcHJldlByb3BdO1xuICBjb25zdCBuZXh0ID0gY2hpbGRbbmV4dFByb3BdO1xuICBwcmV2ID8gcHJldltuZXh0UHJvcF0gPSBuZXh0IDogcGFyZW50Ll9oZWFkID0gbmV4dDtcbiAgbmV4dCA/IG5leHRbcHJldlByb3BdID0gcHJldiA6IHBhcmVudC5fdGFpbCA9IHByZXY7XG4gIGNoaWxkW3ByZXZQcm9wXSA9IG51bGw7XG4gIGNoaWxkW25leHRQcm9wXSA9IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge09iamVjdH0gcGFyZW50XG4gKiBAcGFyYW0gIHtPYmplY3R9IGNoaWxkXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gW3NvcnRNZXRob2RdXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByZXZQcm9wXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5leHRQcm9wXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5jb25zdCBhZGRDaGlsZCA9IChwYXJlbnQsIGNoaWxkLCBzb3J0TWV0aG9kLCBwcmV2UHJvcCA9ICdfcHJldicsIG5leHRQcm9wID0gJ19uZXh0JykgPT4ge1xuICBsZXQgcHJldiA9IHBhcmVudC5fdGFpbDtcbiAgd2hpbGUgKHByZXYgJiYgc29ydE1ldGhvZCAmJiBzb3J0TWV0aG9kKHByZXYsIGNoaWxkKSkgcHJldiA9IHByZXZbcHJldlByb3BdO1xuICBjb25zdCBuZXh0ID0gcHJldiA/IHByZXZbbmV4dFByb3BdIDogcGFyZW50Ll9oZWFkO1xuICBwcmV2ID8gcHJldltuZXh0UHJvcF0gPSBjaGlsZCA6IHBhcmVudC5faGVhZCA9IGNoaWxkO1xuICBuZXh0ID8gbmV4dFtwcmV2UHJvcF0gPSBjaGlsZCA6IHBhcmVudC5fdGFpbCA9IGNoaWxkO1xuICBjaGlsZFtwcmV2UHJvcF0gPSBwcmV2O1xuICBjaGlsZFtuZXh0UHJvcF0gPSBuZXh0O1xufTtcblxuLypcbiAqIEJhc2UgY2xhc3MgdG8gY29udHJvbCBmcmFtZXJhdGUgYW5kIHBsYXliYWNrIHJhdGUuXG4gKiBJbmhlcml0ZWQgYnkgRW5naW5lLCBUaW1lciwgQW5pbWF0aW9uIGFuZCBUaW1lbGluZS5cbiAqL1xuY2xhc3MgQ2xvY2sge1xuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gW2luaXRUaW1lXSAqL1xuICBjb25zdHJ1Y3Rvcihpbml0VGltZSA9IDApIHtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmRlbHRhVGltZSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fY3VycmVudFRpbWUgPSBpbml0VGltZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9lbGFwc2VkVGltZSA9IGluaXRUaW1lO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IGluaXRUaW1lO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2xhc3RUaW1lID0gaW5pdFRpbWU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fc2NoZWR1bGVkVGltZSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fZnJhbWVEdXJhdGlvbiA9IHJvdW5kKEsgLyBtYXhGcHMsIDApO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2ZwcyA9IG1heEZwcztcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9zcGVlZCA9IDE7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuX2hhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtUaWNrYWJsZXxUd2Vlbn0gKi9cbiAgICB0aGlzLl9oZWFkID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1RpY2thYmxlfFR3ZWVufSAqL1xuICAgIHRoaXMuX3RhaWwgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGZwcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZnBzO1xuICB9XG5cbiAgc2V0IGZwcyhmcmFtZVJhdGUpIHtcbiAgICBjb25zdCBwcmV2aW91c0ZyYW1lRHVyYXRpb24gPSB0aGlzLl9mcmFtZUR1cmF0aW9uO1xuICAgIGNvbnN0IGZyID0gK2ZyYW1lUmF0ZTtcbiAgICBjb25zdCBmcHMgPSBmciA8IG1pblZhbHVlID8gbWluVmFsdWUgOiBmcjtcbiAgICBjb25zdCBmcmFtZUR1cmF0aW9uID0gcm91bmQoSyAvIGZwcywgMCk7XG4gICAgdGhpcy5fZnBzID0gZnBzO1xuICAgIHRoaXMuX2ZyYW1lRHVyYXRpb24gPSBmcmFtZUR1cmF0aW9uO1xuICAgIHRoaXMuX3NjaGVkdWxlZFRpbWUgKz0gZnJhbWVEdXJhdGlvbiAtIHByZXZpb3VzRnJhbWVEdXJhdGlvbjtcbiAgfVxuXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gIH1cblxuICBzZXQgc3BlZWQocGxheWJhY2tSYXRlKSB7XG4gICAgY29uc3QgcGJyID0gK3BsYXliYWNrUmF0ZTtcbiAgICB0aGlzLl9zcGVlZCA9IHBiciA8IG1pblZhbHVlID8gbWluVmFsdWUgOiBwYnI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lXG4gICAqIEByZXR1cm4ge3RpY2tNb2Rlc31cbiAgICovXG4gIHJlcXVlc3RUaWNrKHRpbWUpIHtcbiAgICBjb25zdCBzY2hlZHVsZWRUaW1lID0gdGhpcy5fc2NoZWR1bGVkVGltZTtcbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IHRoaXMuX2VsYXBzZWRUaW1lO1xuICAgIHRoaXMuX2VsYXBzZWRUaW1lICs9ICh0aW1lIC0gZWxhcHNlZFRpbWUpO1xuICAgIC8vIElmIHRoZSBlbGFwc2VkIHRpbWUgaXMgbG93ZXIgdGhhbiB0aGUgc2NoZWR1bGVkIHRpbWVcbiAgICAvLyB0aGlzIG1lYW5zIG5vdCBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIHRvIGhpdCBvbmUgZnJhbWVEdXJhdGlvblxuICAgIC8vIHNvIHNraXAgdGhhdCBmcmFtZVxuICAgIGlmIChlbGFwc2VkVGltZSA8IHNjaGVkdWxlZFRpbWUpIHJldHVybiB0aWNrTW9kZXMuTk9ORTtcbiAgICBjb25zdCBmcmFtZUR1cmF0aW9uID0gdGhpcy5fZnJhbWVEdXJhdGlvbjtcbiAgICBjb25zdCBmcmFtZURlbHRhID0gZWxhcHNlZFRpbWUgLSBzY2hlZHVsZWRUaW1lO1xuICAgIC8vIEVuc3VyZXMgdGhhdCBfc2NoZWR1bGVkVGltZSBwcm9ncmVzc2VzIGluIHN0ZXBzIG9mIGF0IGxlYXN0IDEgZnJhbWVEdXJhdGlvbi5cbiAgICAvLyBTa2lwcyBhaGVhZCBpZiB0aGUgYWN0dWFsIGVsYXBzZWQgdGltZSBpcyBoaWdoZXIuXG4gICAgdGhpcy5fc2NoZWR1bGVkVGltZSArPSBmcmFtZURlbHRhIDwgZnJhbWVEdXJhdGlvbiA/IGZyYW1lRHVyYXRpb24gOiBmcmFtZURlbHRhO1xuICAgIHJldHVybiB0aWNrTW9kZXMuQVVUTztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgY29tcHV0ZURlbHRhVGltZSh0aW1lKSB7XG4gICAgY29uc3QgZGVsdGEgPSB0aW1lIC0gdGhpcy5fbGFzdFRpbWU7XG4gICAgdGhpcy5kZWx0YVRpbWUgPSBkZWx0YTtcbiAgICB0aGlzLl9sYXN0VGltZSA9IHRpbWU7XG4gICAgcmV0dXJuIGRlbHRhO1xuICB9XG5cbn1cblxuXG5cblxuLyoqXG4gKiBAcGFyYW0gIHtUaWNrYWJsZX0gdGlja2FibGVcbiAqIEBwYXJhbSAge051bWJlcn0gdGltZVxuICogQHBhcmFtICB7TnVtYmVyfSBtdXRlQ2FsbGJhY2tzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGludGVybmFsUmVuZGVyXG4gKiBAcGFyYW0gIHt0aWNrTW9kZXN9IHRpY2tNb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHJlbmRlciA9ICh0aWNrYWJsZSwgdGltZSwgbXV0ZUNhbGxiYWNrcywgaW50ZXJuYWxSZW5kZXIsIHRpY2tNb2RlKSA9PiB7XG5cbiAgY29uc3QgcGFyZW50ID0gdGlja2FibGUucGFyZW50O1xuICBjb25zdCBkdXJhdGlvbiA9IHRpY2thYmxlLmR1cmF0aW9uO1xuICBjb25zdCBjb21wbGV0ZWQgPSB0aWNrYWJsZS5jb21wbGV0ZWQ7XG4gIGNvbnN0IGl0ZXJhdGlvbkR1cmF0aW9uID0gdGlja2FibGUuaXRlcmF0aW9uRHVyYXRpb247XG4gIGNvbnN0IGl0ZXJhdGlvbkNvdW50ID0gdGlja2FibGUuaXRlcmF0aW9uQ291bnQ7XG4gIGNvbnN0IF9jdXJyZW50SXRlcmF0aW9uID0gdGlja2FibGUuX2N1cnJlbnRJdGVyYXRpb247XG4gIGNvbnN0IF9sb29wRGVsYXkgPSB0aWNrYWJsZS5fbG9vcERlbGF5O1xuICBjb25zdCBfcmV2ZXJzZWQgPSB0aWNrYWJsZS5fcmV2ZXJzZWQ7XG4gIGNvbnN0IF9hbHRlcm5hdGUgPSB0aWNrYWJsZS5fYWx0ZXJuYXRlO1xuICBjb25zdCBfaGFzQ2hpbGRyZW4gPSB0aWNrYWJsZS5faGFzQ2hpbGRyZW47XG4gIGNvbnN0IHRpY2thYmxlRGVsYXkgPSB0aWNrYWJsZS5fZGVsYXk7XG4gIGNvbnN0IHRpY2thYmxlUHJldkFic29sdXRlVGltZSA9IHRpY2thYmxlLl9jdXJyZW50VGltZTsgLy8gVE9ETzogcmVuYW1lIC5fY3VycmVudFRpbWUgdG8gLl9hYnNvbHV0ZUN1cnJlbnRUaW1lXG5cbiAgY29uc3QgdGlja2FibGVFbmRUaW1lID0gdGlja2FibGVEZWxheSArIGl0ZXJhdGlvbkR1cmF0aW9uO1xuICBjb25zdCB0aWNrYWJsZUFic29sdXRlVGltZSA9IHRpbWUgLSB0aWNrYWJsZURlbGF5O1xuICBjb25zdCB0aWNrYWJsZVByZXZUaW1lID0gY2xhbXAodGlja2FibGVQcmV2QWJzb2x1dGVUaW1lLCAtdGlja2FibGVEZWxheSwgZHVyYXRpb24pO1xuICBjb25zdCB0aWNrYWJsZUN1cnJlbnRUaW1lID0gY2xhbXAodGlja2FibGVBYnNvbHV0ZVRpbWUsIC10aWNrYWJsZURlbGF5LCBkdXJhdGlvbik7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHRpY2thYmxlQWJzb2x1dGVUaW1lIC0gdGlja2FibGVQcmV2QWJzb2x1dGVUaW1lO1xuICBjb25zdCBpc0N1cnJlbnRUaW1lQWJvdmVaZXJvID0gdGlja2FibGVDdXJyZW50VGltZSA+IDA7XG4gIGNvbnN0IGlzQ3VycmVudFRpbWVFcXVhbE9yQWJvdmVEdXJhdGlvbiA9IHRpY2thYmxlQ3VycmVudFRpbWUgPj0gZHVyYXRpb247XG4gIGNvbnN0IGlzU2V0dGVyID0gZHVyYXRpb24gPD0gbWluVmFsdWU7XG4gIGNvbnN0IGZvcmNlZFRpY2sgPSB0aWNrTW9kZSA9PT0gdGlja01vZGVzLkZPUkNFO1xuXG4gIGxldCBpc09kZCA9IDA7XG4gIGxldCBpdGVyYXRpb25FbGFwc2VkVGltZSA9IHRpY2thYmxlQWJzb2x1dGVUaW1lO1xuICAvLyBSZW5kZXIgY2hlY2tzXG4gIC8vIFVzZWQgdG8gYWxzbyBjaGVjayBpZiB0aGUgY2hpbGRyZW4gaGF2ZSByZW5kZXJlZCBpbiBvcmRlciB0byB0cmlnZ2VyIHRoZSBvblJlbmRlciBjYWxsYmFjayBvbiB0aGUgcGFyZW50IHRpbWVyXG4gIGxldCBoYXNSZW5kZXJlZCA9IDA7XG5cbiAgLy8gRXhlY3V0ZSB0aGUgXCJleHBlbnNpdmVcIiBpdGVyYXRpb25zIGNhbGN1bGF0aW9ucyBvbmx5IHdoZW4gbmVjZXNzYXJ5XG4gIGlmIChpdGVyYXRpb25Db3VudCA+IDEpIHtcbiAgICAvLyBiaXR3aXNlIE5PVCBvcGVyYXRvciBzZWVtcyB0byBiZSBnZW5lcmFsbHkgZmFzdGVyIHRoYW4gTWF0aC5mbG9vcigpIGFjcm9zcyBicm93c2Vyc1xuICAgIGNvbnN0IGN1cnJlbnRJdGVyYXRpb24gPSB+fih0aWNrYWJsZUN1cnJlbnRUaW1lIC8gKGl0ZXJhdGlvbkR1cmF0aW9uICsgKGlzQ3VycmVudFRpbWVFcXVhbE9yQWJvdmVEdXJhdGlvbiA/IDAgOiBfbG9vcERlbGF5KSkpO1xuICAgIHRpY2thYmxlLl9jdXJyZW50SXRlcmF0aW9uID0gY2xhbXAoY3VycmVudEl0ZXJhdGlvbiwgMCwgaXRlcmF0aW9uQ291bnQpO1xuICAgIC8vIFByZXZlbnQgdGhlIGl0ZXJhdGlvbiBjb3VudCB0byBnbyBhYm92ZSB0aGUgbWF4IGl0ZXJhdGlvbnMgd2hlbiByZWFjaGluZyB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb25cbiAgICBpZiAoaXNDdXJyZW50VGltZUVxdWFsT3JBYm92ZUR1cmF0aW9uKSB0aWNrYWJsZS5fY3VycmVudEl0ZXJhdGlvbi0tO1xuICAgIGlzT2RkID0gdGlja2FibGUuX2N1cnJlbnRJdGVyYXRpb24gJSAyO1xuICAgIGl0ZXJhdGlvbkVsYXBzZWRUaW1lID0gdGlja2FibGVDdXJyZW50VGltZSAlIChpdGVyYXRpb25EdXJhdGlvbiArIF9sb29wRGVsYXkpIHx8IDA7XG4gIH1cblxuICAvLyBDaGVja3MgaWYgZXhhY3RseSBvbmUgb2YgX3JldmVyc2VkIGFuZCAoX2FsdGVybmF0ZSAmJiBpc09kZCkgaXMgdHJ1ZVxuICBjb25zdCBpc1JldmVyc2VkID0gX3JldmVyc2VkIF4gKF9hbHRlcm5hdGUgJiYgaXNPZGQpO1xuICBjb25zdCBfZWFzZSA9IC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi8odGlja2FibGUpLl9lYXNlO1xuICBsZXQgaXRlcmF0aW9uVGltZSA9IGlzQ3VycmVudFRpbWVFcXVhbE9yQWJvdmVEdXJhdGlvbiA/IGlzUmV2ZXJzZWQgPyAwIDogZHVyYXRpb24gOiBpc1JldmVyc2VkID8gaXRlcmF0aW9uRHVyYXRpb24gLSBpdGVyYXRpb25FbGFwc2VkVGltZSA6IGl0ZXJhdGlvbkVsYXBzZWRUaW1lO1xuICBpZiAoX2Vhc2UpIGl0ZXJhdGlvblRpbWUgPSBpdGVyYXRpb25EdXJhdGlvbiAqIF9lYXNlKGl0ZXJhdGlvblRpbWUgLyBpdGVyYXRpb25EdXJhdGlvbikgfHwgMDtcbiAgY29uc3QgaXNSdW5uaW5nQmFja3dhcmRzID0gKHBhcmVudCA/IHBhcmVudC5iYWNrd2FyZHMgOiB0aWNrYWJsZUFic29sdXRlVGltZSA8IHRpY2thYmxlUHJldkFic29sdXRlVGltZSkgPyAhaXNSZXZlcnNlZCA6ICEhaXNSZXZlcnNlZDtcblxuICB0aWNrYWJsZS5fY3VycmVudFRpbWUgPSB0aWNrYWJsZUFic29sdXRlVGltZTtcbiAgdGlja2FibGUuX2l0ZXJhdGlvblRpbWUgPSBpdGVyYXRpb25UaW1lO1xuICB0aWNrYWJsZS5iYWNrd2FyZHMgPSBpc1J1bm5pbmdCYWNrd2FyZHM7XG5cbiAgaWYgKGlzQ3VycmVudFRpbWVBYm92ZVplcm8gJiYgIXRpY2thYmxlLmJlZ2FuKSB7XG4gICAgdGlja2FibGUuYmVnYW4gPSB0cnVlO1xuICAgIGlmICghbXV0ZUNhbGxiYWNrcyAmJiAhKHBhcmVudCAmJiAoaXNSdW5uaW5nQmFja3dhcmRzIHx8ICFwYXJlbnQuYmVnYW4pKSkge1xuICAgICAgdGlja2FibGUub25CZWdpbigvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRpY2thYmxlKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRpY2thYmxlQWJzb2x1dGVUaW1lIDw9IDApIHtcbiAgICB0aWNrYWJsZS5iZWdhbiA9IGZhbHNlO1xuICB9XG5cbiAgLy8gT25seSB0cmlnZ2VycyBvbkxvb3AgZm9yIHRpY2thYmxlIHdpdGhvdXQgY2hpbGRyZW4sIG90aGVyd2lzZSBjYWxsIHRoZSB0aGUgb25Mb29wIGNhbGxiYWNrIGluIHRoZSB0aWNrIGZ1bmN0aW9uXG4gIC8vIE1ha2Ugc3VyZSB0byB0cmlnZ2VyIHRoZSBvbkxvb3AgYmVmb3JlIHJlbmRlcmluZyB0byBhbGxvdyAucmVmcmVzaCgpIHRvIHBpY2t1cCB0aGUgY3VycmVudCB2YWx1ZXNcbiAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmICFfaGFzQ2hpbGRyZW4gJiYgaXNDdXJyZW50VGltZUFib3ZlWmVybyAmJiB0aWNrYWJsZS5fY3VycmVudEl0ZXJhdGlvbiAhPT0gX2N1cnJlbnRJdGVyYXRpb24pIHtcbiAgICB0aWNrYWJsZS5vbkxvb3AoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0aWNrYWJsZSkpO1xuICB9XG5cbiAgaWYgKFxuICAgIGZvcmNlZFRpY2sgfHxcbiAgICB0aWNrTW9kZSA9PT0gdGlja01vZGVzLkFVVE8gJiYgKFxuICAgICAgdGltZSA+PSB0aWNrYWJsZURlbGF5ICYmIHRpbWUgPD0gdGlja2FibGVFbmRUaW1lIHx8IC8vIE5vcm1hbCByZW5kZXJcbiAgICAgIHRpbWUgPD0gdGlja2FibGVEZWxheSAmJiB0aWNrYWJsZVByZXZUaW1lID4gdGlja2FibGVEZWxheSB8fCAvLyBQbGF5aGVhZCBpcyBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydCB0aW1lIHNvIG1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uIGlzIGF0IGl0cyBpbml0aWFsIHN0YXRlXG4gICAgICB0aW1lID49IHRpY2thYmxlRW5kVGltZSAmJiB0aWNrYWJsZVByZXZUaW1lICE9PSBkdXJhdGlvbiAvLyBQbGF5aGVhZCBpcyBhZnRlciB0aGUgYW5pbWF0aW9uIGVuZCB0aW1lIHNvIG1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uIGlzIGF0IGl0cyBlbmQgc3RhdGVcbiAgICApIHx8XG4gICAgaXRlcmF0aW9uVGltZSA+PSB0aWNrYWJsZUVuZFRpbWUgJiYgdGlja2FibGVQcmV2VGltZSAhPT0gZHVyYXRpb24gfHxcbiAgICBpdGVyYXRpb25UaW1lIDw9IHRpY2thYmxlRGVsYXkgJiYgdGlja2FibGVQcmV2VGltZSA+IDAgfHxcbiAgICB0aW1lIDw9IHRpY2thYmxlUHJldlRpbWUgJiYgdGlja2FibGVQcmV2VGltZSA9PT0gZHVyYXRpb24gJiYgY29tcGxldGVkIHx8IC8vIEZvcmNlIGEgcmVuZGVyIGlmIGEgc2VlayBvY2N1cnMgb24gYW4gY29tcGxldGVkIGFuaW1hdGlvblxuICAgIGlzQ3VycmVudFRpbWVFcXVhbE9yQWJvdmVEdXJhdGlvbiAmJiAhY29tcGxldGVkICYmIGlzU2V0dGVyIC8vIFRoaXMgcHJldmVudHMgMCBkdXJhdGlvbiB0aWNrYWJsZXMgdG8gYmUgc2tpcHBlZFxuICApIHtcblxuICAgIGlmIChpc0N1cnJlbnRUaW1lQWJvdmVaZXJvKSB7XG4gICAgICAvLyBUcmlnZ2VyIG9uVXBkYXRlIGNhbGxiYWNrIGJlZm9yZSByZW5kZXJpbmdcbiAgICAgIHRpY2thYmxlLmNvbXB1dGVEZWx0YVRpbWUodGlja2FibGVQcmV2VGltZSk7XG4gICAgICBpZiAoIW11dGVDYWxsYmFja3MpIHRpY2thYmxlLm9uQmVmb3JlVXBkYXRlKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGlja2FibGUpKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0d2VlbnMgcmVuZGVyaW5nXG4gICAgaWYgKCFfaGFzQ2hpbGRyZW4pIHtcblxuICAgICAgLy8gVGltZSBoYXMganVtcGVkIG1vcmUgdGhhbiBnbG9iYWxzLnRpY2tUaHJlc2hvbGQgc28gY29uc2lkZXIgdGhpcyB0aWNrIG1hbnVhbFxuICAgICAgY29uc3QgZm9yY2VkUmVuZGVyID0gZm9yY2VkVGljayB8fCAoaXNSdW5uaW5nQmFja3dhcmRzID8gZGVsdGFUaW1lICogLTEgOiBkZWx0YVRpbWUpID49IGdsb2JhbHMudGlja1RocmVzaG9sZDtcbiAgICAgIGNvbnN0IGFic29sdXRlVGltZSA9IHRpY2thYmxlLl9vZmZzZXQgKyAocGFyZW50ID8gcGFyZW50Ll9vZmZzZXQgOiAwKSArIHRpY2thYmxlRGVsYXkgKyBpdGVyYXRpb25UaW1lO1xuXG4gICAgICAvLyBPbmx5IEFuaW1hdGlvbiBjYW4gaGF2ZSB0d2VlbnMsIFRpbWVyIHJldHVybnMgdW5kZWZpbmVkXG4gICAgICBsZXQgdHdlZW4gPSAvKiogQHR5cGUge1R3ZWVufSAqLygvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyh0aWNrYWJsZSkuX2hlYWQpO1xuICAgICAgbGV0IHR3ZWVuVGFyZ2V0O1xuICAgICAgbGV0IHR3ZWVuU3R5bGU7XG4gICAgICBsZXQgdHdlZW5UYXJnZXRUcmFuc2Zvcm1zO1xuICAgICAgbGV0IHR3ZWVuVGFyZ2V0VHJhbnNmb3Jtc1Byb3BlcnRpZXM7XG4gICAgICBsZXQgdHdlZW5UcmFuc2Zvcm1zTmVlZFVwZGF0ZSA9IDA7XG5cbiAgICAgIHdoaWxlICh0d2Vlbikge1xuXG4gICAgICAgIGNvbnN0IHR3ZWVuQ29tcG9zaXRpb24gPSB0d2Vlbi5fY29tcG9zaXRpb247XG4gICAgICAgIGNvbnN0IHR3ZWVuQ3VycmVudFRpbWUgPSB0d2Vlbi5fY3VycmVudFRpbWU7XG4gICAgICAgIGNvbnN0IHR3ZWVuQ2hhbmdlRHVyYXRpb24gPSB0d2Vlbi5fY2hhbmdlRHVyYXRpb247XG4gICAgICAgIGNvbnN0IHR3ZWVuQWJzRW5kVGltZSA9IHR3ZWVuLl9hYnNvbHV0ZVN0YXJ0VGltZSArIHR3ZWVuLl9jaGFuZ2VEdXJhdGlvbjtcbiAgICAgICAgY29uc3QgdHdlZW5OZXh0UmVwID0gdHdlZW4uX25leHRSZXA7XG4gICAgICAgIGNvbnN0IHR3ZWVuUHJldlJlcCA9IHR3ZWVuLl9wcmV2UmVwO1xuICAgICAgICBjb25zdCB0d2Vlbkhhc0NvbXBvc2l0aW9uID0gdHdlZW5Db21wb3NpdGlvbiAhPT0gY29tcG9zaXRpb25UeXBlcy5ub25lO1xuXG4gICAgICAgIGlmICgoZm9yY2VkUmVuZGVyIHx8IChcbiAgICAgICAgICAgICh0d2VlbkN1cnJlbnRUaW1lICE9PSB0d2VlbkNoYW5nZUR1cmF0aW9uIHx8IGFic29sdXRlVGltZSA8PSB0d2VlbkFic0VuZFRpbWUgKyAodHdlZW5OZXh0UmVwID8gdHdlZW5OZXh0UmVwLl9kZWxheSA6IDApKSAmJlxuICAgICAgICAgICAgKHR3ZWVuQ3VycmVudFRpbWUgIT09IDAgfHwgYWJzb2x1dGVUaW1lID49IHR3ZWVuLl9hYnNvbHV0ZVN0YXJ0VGltZSlcbiAgICAgICAgICApKSAmJiAoIXR3ZWVuSGFzQ29tcG9zaXRpb24gfHwgKFxuICAgICAgICAgICAgIXR3ZWVuLl9pc092ZXJyaWRkZW4gJiZcbiAgICAgICAgICAgICghdHdlZW4uX2lzT3ZlcmxhcHBlZCB8fCBhYnNvbHV0ZVRpbWUgPD0gdHdlZW5BYnNFbmRUaW1lKSAmJlxuICAgICAgICAgICAgKCF0d2Vlbk5leHRSZXAgfHwgKHR3ZWVuTmV4dFJlcC5faXNPdmVycmlkZGVuIHx8IGFic29sdXRlVGltZSA8PSB0d2Vlbk5leHRSZXAuX2Fic29sdXRlU3RhcnRUaW1lKSkgJiZcbiAgICAgICAgICAgICghdHdlZW5QcmV2UmVwIHx8ICh0d2VlblByZXZSZXAuX2lzT3ZlcnJpZGRlbiB8fCAoYWJzb2x1dGVUaW1lID49ICh0d2VlblByZXZSZXAuX2Fic29sdXRlU3RhcnRUaW1lICsgdHdlZW5QcmV2UmVwLl9jaGFuZ2VEdXJhdGlvbikgKyB0d2Vlbi5fZGVsYXkpKSlcbiAgICAgICAgICApKVxuICAgICAgICApIHtcblxuICAgICAgICAgIGNvbnN0IHR3ZWVuTmV3VGltZSA9IHR3ZWVuLl9jdXJyZW50VGltZSA9IGNsYW1wKGl0ZXJhdGlvblRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lLCAwLCB0d2VlbkNoYW5nZUR1cmF0aW9uKTtcbiAgICAgICAgICBjb25zdCB0d2VlblByb2dyZXNzID0gdHdlZW4uX2Vhc2UodHdlZW5OZXdUaW1lIC8gdHdlZW4uX3VwZGF0ZUR1cmF0aW9uKTtcbiAgICAgICAgICBjb25zdCB0d2Vlbk1vZGlmaWVyID0gdHdlZW4uX21vZGlmaWVyO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuVmFsdWVUeXBlID0gdHdlZW4uX3ZhbHVlVHlwZTtcbiAgICAgICAgICBjb25zdCB0d2VlblR5cGUgPSB0d2Vlbi5fdHdlZW5UeXBlO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuSXNPYmplY3QgPSB0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuT0JKRUNUO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuSXNOdW1iZXIgPSB0d2VlblZhbHVlVHlwZSA9PT0gdmFsdWVUeXBlcy5OVU1CRVI7XG4gICAgICAgICAgLy8gT25seSByb3VuZCB0aGUgaW4tYmV0d2VlbiBmcmFtZXMgdmFsdWVzIGlmIHRoZSBmaW5hbCB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgICAgICAgIGNvbnN0IHR3ZWVuUHJlY2lzaW9uID0gKHR3ZWVuSXNOdW1iZXIgJiYgdHdlZW5Jc09iamVjdCkgfHwgdHdlZW5Qcm9ncmVzcyA9PT0gMCB8fCB0d2VlblByb2dyZXNzID09PSAxID8gLTEgOiBnbG9iYWxzLnByZWNpc2lvbjtcblxuICAgICAgICAgIC8vIFJlY29tcG9zZSB0d2VlbiB2YWx1ZVxuICAgICAgICAgIC8qKiBAdHlwZSB7U3RyaW5nfE51bWJlcn0gKi9cbiAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgICAgICAgbGV0IG51bWJlcjtcblxuICAgICAgICAgIGlmICh0d2VlbklzTnVtYmVyKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bWJlciA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbk1vZGlmaWVyKHJvdW5kKGludGVycG9sYXRlKHR3ZWVuLl9mcm9tTnVtYmVyLCB0d2Vlbi5fdG9OdW1iZXIsICB0d2VlblByb2dyZXNzKSwgdHdlZW5QcmVjaXNpb24gKSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5WYWx1ZVR5cGUgPT09IHZhbHVlVHlwZXMuVU5JVCkge1xuICAgICAgICAgICAgLy8gUm91bmRpbmcgdGhlIHZhbHVlcyBzcGVlZCB1cCBzdHJpbmcgY29tcG9zaXRpb25cbiAgICAgICAgICAgIG51bWJlciA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbk1vZGlmaWVyKHJvdW5kKGludGVycG9sYXRlKHR3ZWVuLl9mcm9tTnVtYmVyLCB0d2Vlbi5fdG9OdW1iZXIsICB0d2VlblByb2dyZXNzKSwgdHdlZW5QcmVjaXNpb24pKSk7XG4gICAgICAgICAgICB2YWx1ZSA9IGAke251bWJlcn0ke3R3ZWVuLl91bml0fWA7XG4gICAgICAgICAgfSBlbHNlIGlmICh0d2VlblZhbHVlVHlwZSA9PT0gdmFsdWVUeXBlcy5DT0xPUikge1xuICAgICAgICAgICAgY29uc3QgZm4gPSB0d2Vlbi5fZnJvbU51bWJlcnM7XG4gICAgICAgICAgICBjb25zdCB0biA9IHR3ZWVuLl90b051bWJlcnM7XG4gICAgICAgICAgICBjb25zdCByID0gcm91bmQoY2xhbXAoLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuTW9kaWZpZXIoaW50ZXJwb2xhdGUoZm5bMF0sIHRuWzBdLCB0d2VlblByb2dyZXNzKSkpLCAwLCAyNTUpLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGcgPSByb3VuZChjbGFtcCgvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW5Nb2RpZmllcihpbnRlcnBvbGF0ZShmblsxXSwgdG5bMV0sIHR3ZWVuUHJvZ3Jlc3MpKSksIDAsIDI1NSksIDApO1xuICAgICAgICAgICAgY29uc3QgYiA9IHJvdW5kKGNsYW1wKC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbk1vZGlmaWVyKGludGVycG9sYXRlKGZuWzJdLCB0blsyXSwgdHdlZW5Qcm9ncmVzcykpKSwgMCwgMjU1KSwgMCk7XG4gICAgICAgICAgICBjb25zdCBhID0gY2xhbXAoLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuTW9kaWZpZXIocm91bmQoaW50ZXJwb2xhdGUoZm5bM10sIHRuWzNdLCB0d2VlblByb2dyZXNzKSwgdHdlZW5QcmVjaXNpb24pKSksIDAsIDEpO1xuICAgICAgICAgICAgdmFsdWUgPSBgcmdiYSgke3J9LCR7Z30sJHtifSwke2F9KWA7XG4gICAgICAgICAgICBpZiAodHdlZW5IYXNDb21wb3NpdGlvbikge1xuICAgICAgICAgICAgICBjb25zdCBucyA9IHR3ZWVuLl9udW1iZXJzO1xuICAgICAgICAgICAgICBuc1swXSA9IHI7XG4gICAgICAgICAgICAgIG5zWzFdID0gZztcbiAgICAgICAgICAgICAgbnNbMl0gPSBiO1xuICAgICAgICAgICAgICBuc1szXSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0d2VlblZhbHVlVHlwZSA9PT0gdmFsdWVUeXBlcy5DT01QTEVYKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHR3ZWVuLl9zdHJpbmdzWzBdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGwgPSB0d2Vlbi5fdG9OdW1iZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBjb25zdCBuID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuTW9kaWZpZXIocm91bmQoaW50ZXJwb2xhdGUodHdlZW4uX2Zyb21OdW1iZXJzW2pdLCB0d2Vlbi5fdG9OdW1iZXJzW2pdLCB0d2VlblByb2dyZXNzKSwgdHdlZW5QcmVjaXNpb24pKSk7XG4gICAgICAgICAgICAgIGNvbnN0IHMgPSB0d2Vlbi5fc3RyaW5nc1tqICsgMV07XG4gICAgICAgICAgICAgIHZhbHVlICs9IGAke3MgPyBuICsgcyA6IG59YDtcbiAgICAgICAgICAgICAgaWYgKHR3ZWVuSGFzQ29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0d2Vlbi5fbnVtYmVyc1tqXSA9IG47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGb3IgYWRkaXRpdmUgdHdlZW5zIGFuZCBBbmltYXRhYmxlc1xuICAgICAgICAgIGlmICh0d2Vlbkhhc0NvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0d2Vlbi5fbnVtYmVyID0gbnVtYmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaW50ZXJuYWxSZW5kZXIgJiYgdHdlZW5Db21wb3NpdGlvbiAhPT0gY29tcG9zaXRpb25UeXBlcy5ibGVuZCkge1xuXG4gICAgICAgICAgICBjb25zdCB0d2VlblByb3BlcnR5ID0gdHdlZW4ucHJvcGVydHk7XG4gICAgICAgICAgICB0d2VlblRhcmdldCA9IHR3ZWVuLnRhcmdldDtcblxuICAgICAgICAgICAgaWYgKHR3ZWVuSXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgdHdlZW5UYXJnZXRbdHdlZW5Qcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5UeXBlID09PSB0d2VlblR5cGVzLkFUVFJJQlVURSkge1xuICAgICAgICAgICAgICAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odHdlZW5UYXJnZXQpLnNldEF0dHJpYnV0ZSh0d2VlblByb3BlcnR5LCAvKiogQHR5cGUge1N0cmluZ30gKi8odmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR3ZWVuU3R5bGUgPSAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odHdlZW5UYXJnZXQpLnN0eWxlO1xuICAgICAgICAgICAgICBpZiAodHdlZW5UeXBlID09PSB0d2VlblR5cGVzLlRSQU5TRk9STSkge1xuICAgICAgICAgICAgICAgIGlmICh0d2VlblRhcmdldCAhPT0gdHdlZW5UYXJnZXRUcmFuc2Zvcm1zKSB7XG4gICAgICAgICAgICAgICAgICB0d2VlblRhcmdldFRyYW5zZm9ybXMgPSB0d2VlblRhcmdldDtcbiAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IFJlZmVyZW5jaW5nIHRoZSBjYWNoZWRUcmFuc2Zvcm1zIGluIHRoZSB0d2VlbiBwcm9wZXJ0eSBkaXJlY3RseSBjYW4gYmUgYSBsaXR0bGUgYml0IGZhc3RlciBidXQgYXBwZWFycyB0byBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuXG4gICAgICAgICAgICAgICAgICB0d2VlblRhcmdldFRyYW5zZm9ybXNQcm9wZXJ0aWVzID0gdHdlZW5UYXJnZXRbdHJhbnNmb3Jtc1N5bWJvbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHR3ZWVuVGFyZ2V0VHJhbnNmb3Jtc1Byb3BlcnRpZXNbdHdlZW5Qcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0d2VlblRyYW5zZm9ybXNOZWVkVXBkYXRlID0gMTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuQ1NTKSB7XG4gICAgICAgICAgICAgICAgdHdlZW5TdHlsZVt0d2VlblByb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5DU1NfVkFSKSB7XG4gICAgICAgICAgICAgICAgdHdlZW5TdHlsZS5zZXRQcm9wZXJ0eSh0d2VlblByb3BlcnR5LC8qKiBAdHlwZSB7U3RyaW5nfSAqLyh2YWx1ZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0N1cnJlbnRUaW1lQWJvdmVaZXJvKSBoYXNSZW5kZXJlZCA9IDE7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlZCBmb3IgY29tcG9zaW5nIHRpbWVsaW5lIHR3ZWVucyB3aXRob3V0IGhhdmluZyB0byBkbyBhIHJlYWwgcmVuZGVyXG4gICAgICAgICAgICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVEU6IFBvc3NpYmxlIGltcHJvdmVtZW50OiBVc2UgdHJhbnNsYXRlKHgseSkgLyB0cmFuc2xhdGUzZCh4LHkseikgc3ludGF4XG4gICAgICAgIC8vIHRvIHJlZHVjZSBtZW1vcnkgdXNhZ2Ugb24gc3RyaW5nIGNvbXBvc2l0aW9uXG4gICAgICAgIGlmICh0d2VlblRyYW5zZm9ybXNOZWVkVXBkYXRlICYmIHR3ZWVuLl9yZW5kZXJUcmFuc2Zvcm1zKSB7XG4gICAgICAgICAgbGV0IHN0ciA9IGVtcHR5U3RyaW5nO1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0d2VlblRhcmdldFRyYW5zZm9ybXNQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCR7dHJhbnNmb3Jtc0ZyYWdtZW50U3RyaW5nc1trZXldfSR7dHdlZW5UYXJnZXRUcmFuc2Zvcm1zUHJvcGVydGllc1trZXldfSkgYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdHdlZW5TdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgICAgICAgdHdlZW5UcmFuc2Zvcm1zTmVlZFVwZGF0ZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0d2VlbiA9IHR3ZWVuLl9uZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIW11dGVDYWxsYmFja3MgJiYgaGFzUmVuZGVyZWQpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8odGlja2FibGUpLm9uUmVuZGVyKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKHRpY2thYmxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmIGlzQ3VycmVudFRpbWVBYm92ZVplcm8pIHtcbiAgICAgIHRpY2thYmxlLm9uVXBkYXRlKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGlja2FibGUpKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIEVuZCB0d2VlbnMgcmVuZGVyaW5nXG5cbiAgLy8gSGFuZGxlIHNldHRlcnMgb24gdGltZWxpbmUgZGlmZmVyZW50bHkgYW5kIGFsbG93IHJlLXRyaWdlcmluZyB0aGUgb25Db21wbGV0ZSBjYWxsYmFjayB3aGVuIHNlZWtpbmcgYmFja3dhcmRzXG4gIGlmIChwYXJlbnQgJiYgaXNTZXR0ZXIpIHtcbiAgICBpZiAoIW11dGVDYWxsYmFja3MgJiYgKFxuICAgICAgKHBhcmVudC5iZWdhbiAmJiAhaXNSdW5uaW5nQmFja3dhcmRzICYmIHRpY2thYmxlQWJzb2x1dGVUaW1lID49IGR1cmF0aW9uICYmICFjb21wbGV0ZWQpIHx8XG4gICAgICAoaXNSdW5uaW5nQmFja3dhcmRzICYmIHRpY2thYmxlQWJzb2x1dGVUaW1lIDw9IG1pblZhbHVlICYmIGNvbXBsZXRlZClcbiAgICApKSB7XG4gICAgICB0aWNrYWJsZS5vbkNvbXBsZXRlKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGlja2FibGUpKTtcbiAgICAgIHRpY2thYmxlLmNvbXBsZXRlZCA9ICFpc1J1bm5pbmdCYWNrd2FyZHM7XG4gICAgfVxuICAvLyBJZiBjdXJyZW50VGltZSBpcyBib3RoIGFib3ZlIDAgYW5kIGF0IGxlYXN0IGVxdWFscyB0byBkdXJhdGlvbiwgaGFuZGxlcyBub3JtYWwgb25Db21wbGV0ZSBvciBpbmZpbml0ZSBsb29wc1xuICB9IGVsc2UgaWYgKGlzQ3VycmVudFRpbWVBYm92ZVplcm8gJiYgaXNDdXJyZW50VGltZUVxdWFsT3JBYm92ZUR1cmF0aW9uKSB7XG4gICAgaWYgKGl0ZXJhdGlvbkNvdW50ID09PSBJbmZpbml0eSkge1xuICAgICAgLy8gT2Zmc2V0IHRoZSB0aWNrYWJsZSBfc3RhcnRUaW1lIHdpdGggaXRzIGR1cmF0aW9uIHRvIHJlc2V0IF9jdXJyZW50VGltZSB0byAwIGFuZCBjb250aW51ZSB0aGUgaW5maW5pdGUgdGltZXJcbiAgICAgIHRpY2thYmxlLl9zdGFydFRpbWUgKz0gdGlja2FibGUuZHVyYXRpb247XG4gICAgfSBlbHNlIGlmICh0aWNrYWJsZS5fY3VycmVudEl0ZXJhdGlvbiA+PSBpdGVyYXRpb25Db3VudCAtIDEpIHtcbiAgICAgIC8vIEJ5IHNldHRpbmcgcGF1c2VkIHRvIHRydWUsIHdlIHRlbGwgdGhlIGVuZ2luZSBsb29wIHRvIG5vdCByZW5kZXIgdGhpcyB0aWNrYWJsZSBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZSBsaXN0IG9uIHRoZSBuZXh0IHRpY2tcbiAgICAgIHRpY2thYmxlLnBhdXNlZCA9IHRydWU7XG4gICAgICBpZiAoIWNvbXBsZXRlZCAmJiAhX2hhc0NoaWxkcmVuKSB7XG4gICAgICAgIC8vIElmIHRoZSB0aWNrYWJsZSBoYXMgY2hpbGRyZW4sIHRyaWdnZXJzIG9uQ29tcGxldGUoKSBvbmx5IHdoZW4gYWxsIGNoaWxkcmVuIGhhdmUgY29tcGxldGVkIGluIHRoZSB0aWNrIGZ1bmN0aW9uXG4gICAgICAgIHRpY2thYmxlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICghbXV0ZUNhbGxiYWNrcyAmJiAhKHBhcmVudCAmJiAoaXNSdW5uaW5nQmFja3dhcmRzIHx8ICFwYXJlbnQuYmVnYW4pKSkge1xuICAgICAgICAgIHRpY2thYmxlLm9uQ29tcGxldGUoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0aWNrYWJsZSkpO1xuICAgICAgICAgIHRpY2thYmxlLl9yZXNvbHZlKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGlja2FibGUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgLy8gT3RoZXJ3aXNlIHNldCB0aGUgY29tcGxldGVkIGZsYWcgdG8gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICB0aWNrYWJsZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIE5PVEU6IGhhc1JlbmRlcmVkICogZGlyZWN0aW9uIChuZWdhdGl2ZSBmb3IgYmFja3dhcmRzKSB0aGlzIHdheSB3ZSBjYW4gcmVtb3ZlIHRoZSB0aWNrYWJsZS5iYWNrd2FyZHMgcHJvcGVydHkgY29tcGxldGx5ID9cbiAgcmV0dXJuIGhhc1JlbmRlcmVkO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUaWNrYWJsZX0gdGlja2FibGVcbiAqIEBwYXJhbSAge051bWJlcn0gdGltZVxuICogQHBhcmFtICB7TnVtYmVyfSBtdXRlQ2FsbGJhY2tzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGludGVybmFsUmVuZGVyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRpY2tNb2RlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5jb25zdCB0aWNrID0gKHRpY2thYmxlLCB0aW1lLCBtdXRlQ2FsbGJhY2tzLCBpbnRlcm5hbFJlbmRlciwgdGlja01vZGUpID0+IHtcbiAgY29uc3QgX2N1cnJlbnRJdGVyYXRpb24gPSB0aWNrYWJsZS5fY3VycmVudEl0ZXJhdGlvbjtcbiAgcmVuZGVyKHRpY2thYmxlLCB0aW1lLCBtdXRlQ2FsbGJhY2tzLCBpbnRlcm5hbFJlbmRlciwgdGlja01vZGUpO1xuICBpZiAodGlja2FibGUuX2hhc0NoaWxkcmVuKSB7XG4gICAgY29uc3QgdGwgPSAvKiogQHR5cGUge1RpbWVsaW5lfSAqLyh0aWNrYWJsZSk7XG4gICAgY29uc3QgdGxJc1J1bm5pbmdCYWNrd2FyZHMgPSB0bC5iYWNrd2FyZHM7XG4gICAgY29uc3QgdGxDaGlsZHJlblRpbWUgPSBpbnRlcm5hbFJlbmRlciA/IHRpbWUgOiB0bC5faXRlcmF0aW9uVGltZTtcbiAgICBjb25zdCB0bENpbGRyZW5UaWNrVGltZSA9IG5vdygpO1xuXG4gICAgbGV0IHRsQ2hpbGRyZW5IYXNSZW5kZXJlZCA9IDA7XG4gICAgbGV0IHRsQ2hpbGRyZW5IYXZlQ29tcGxldGVkID0gdHJ1ZTtcblxuICAgIC8vIElmIHRoZSB0aW1lbGluZSBoYXMgbG9vcGVkIGZvcndhcmQsIHdlIG5lZWQgdG8gbWFudWFsbHkgdHJpZ2dlcnMgY2hpbGRyZW4gc2tpcHBlZCBjYWxsYmFja3NcbiAgICBpZiAoIWludGVybmFsUmVuZGVyICYmIHRsLl9jdXJyZW50SXRlcmF0aW9uICE9PSBfY3VycmVudEl0ZXJhdGlvbikge1xuICAgICAgY29uc3QgdGxJdGVyYXRpb25EdXJhdGlvbiA9IHRsLml0ZXJhdGlvbkR1cmF0aW9uO1xuICAgICAgZm9yRWFjaENoaWxkcmVuKHRsLCAoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9jaGlsZCkgPT4ge1xuICAgICAgICBpZiAoIXRsSXNSdW5uaW5nQmFja3dhcmRzKSB7XG4gICAgICAgICAgLy8gRm9yY2UgYW4gaW50ZXJuYWwgcmVuZGVyIHRvIHRyaWdnZXIgdGhlIGNhbGxiYWNrcyBpZiB0aGUgY2hpbGQgaGFzIG5vdCBjb21wbGV0ZWQgb24gbG9vcFxuICAgICAgICAgIGlmICghY2hpbGQuY29tcGxldGVkICYmICFjaGlsZC5iYWNrd2FyZHMgJiYgY2hpbGQuX2N1cnJlbnRUaW1lIDwgY2hpbGQuaXRlcmF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJlbmRlcihjaGlsZCwgdGxJdGVyYXRpb25EdXJhdGlvbiwgbXV0ZUNhbGxiYWNrcywgMSwgdGlja01vZGVzLkZPUkNFKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVzZXQgdGhlaXIgYmVnYW4gYW5kIGNvbXBsZXRlZCBmbGFncyB0byBhbGxvdyByZXRyaWdlcmluZyBjYWxsYmFja3Mgb24gdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgY2hpbGQuYmVnYW4gPSBmYWxzZTtcbiAgICAgICAgICBjaGlsZC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZER1cmF0aW9uID0gY2hpbGQuZHVyYXRpb247XG4gICAgICAgICAgY29uc3QgY2hpbGRTdGFydFRpbWUgPSBjaGlsZC5fb2Zmc2V0ICsgY2hpbGQuX2RlbGF5O1xuICAgICAgICAgIGNvbnN0IGNoaWxkRW5kVGltZSA9IGNoaWxkU3RhcnRUaW1lICsgY2hpbGREdXJhdGlvbjtcbiAgICAgICAgICAvLyBUcmlnZ2VycyB0aGUgb25Db21wbGV0ZSBjYWxsYmFjayBvbiByZXZlcnNlIGZvciBjaGlsZHJlbiBvbiB0aGUgZWRnZXMgb2YgdGhlIHRpbWVsaW5lXG4gICAgICAgICAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmIGNoaWxkRHVyYXRpb24gPD0gbWluVmFsdWUgJiYgKCFjaGlsZFN0YXJ0VGltZSB8fCBjaGlsZEVuZFRpbWUgPT09IHRsSXRlcmF0aW9uRHVyYXRpb24pKSB7XG4gICAgICAgICAgICBjaGlsZC5vbkNvbXBsZXRlKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFtdXRlQ2FsbGJhY2tzKSB0bC5vbkxvb3AoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0bCkpO1xuICAgIH1cblxuICAgIGZvckVhY2hDaGlsZHJlbih0bCwgKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkVGltZSA9IHJvdW5kKCh0bENoaWxkcmVuVGltZSAtIGNoaWxkLl9vZmZzZXQpICogY2hpbGQuX3NwZWVkLCAxMik7IC8vIFJvdW5kaW5nIGlzIG5lZWRlZCB3aGVuIHVzaW5nIHNlY29uZHNcbiAgICAgIGNvbnN0IGNoaWxkVGlja01vZGUgPSBjaGlsZC5fZnBzIDwgdGwuX2ZwcyA/IGNoaWxkLnJlcXVlc3RUaWNrKHRsQ2lsZHJlblRpY2tUaW1lKSA6IHRpY2tNb2RlO1xuICAgICAgdGxDaGlsZHJlbkhhc1JlbmRlcmVkICs9IHJlbmRlcihjaGlsZCwgY2hpbGRUaW1lLCBtdXRlQ2FsbGJhY2tzLCBpbnRlcm5hbFJlbmRlciwgY2hpbGRUaWNrTW9kZSk7XG4gICAgICBpZiAoIWNoaWxkLmNvbXBsZXRlZCAmJiB0bENoaWxkcmVuSGF2ZUNvbXBsZXRlZCkgdGxDaGlsZHJlbkhhdmVDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9LCB0bElzUnVubmluZ0JhY2t3YXJkcyk7XG5cbiAgICAvLyBSZW5kZXJzIG9uIHRpbWVsaW5lIGFyZSB0cmlnZ2VyZWQgYnkgaXRzIGNoaWxkcmVuIHNvIGl0IG5lZWRzIHRvIGJlIHNldCBhZnRlciByZW5kZXJpbmcgdGhlIGNoaWxkcmVuXG4gICAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmIHRsQ2hpbGRyZW5IYXNSZW5kZXJlZCkgdGwub25SZW5kZXIoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0bCkpO1xuXG4gICAgLy8gVHJpZ2dlcnMgdGhlIHRpbWVsaW5lIG9uQ29tcGxldGUoKSBvbmNlIGFsbCBjaGluZHJlbiBhbGwgY29tcGxldGVkIGFuZCB0aGUgY3VycmVudCB0aW1lIGhhcyByZWFjaGVkIHRoZSBlbmRcbiAgICBpZiAodGxDaGlsZHJlbkhhdmVDb21wbGV0ZWQgJiYgdGwuX2N1cnJlbnRUaW1lID49IHRsLmR1cmF0aW9uKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHBhdXNlZCBmbGFnIGlzIGZhbHNlIGluIGNhc2UgaXQgaGFzIGJlZW4gc2tpcHBlZCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICB0bC5wYXVzZWQgPSB0cnVlO1xuICAgICAgaWYgKCF0bC5jb21wbGV0ZWQpIHtcbiAgICAgICAgdGwuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFtdXRlQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgdGwub25Db21wbGV0ZSgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRsKSk7XG4gICAgICAgICAgdGwuX3Jlc29sdmUoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0bCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cblxuXG5jb25zdCBhZGRpdGl2ZSA9IHtcbiAgYW5pbWF0aW9uOiBudWxsLFxuICB1cGRhdGU6IG5vb3AsXG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIEFkZGl0aXZlQW5pbWF0aW9uXG4gKiBAcHJvcGVydHkge051bWJlcn0gZHVyYXRpb25cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfb2Zmc2V0XG4gKiBAcHJvcGVydHkge051bWJlcn0gX2RlbGF5XG4gKiBAcHJvcGVydHkge1R3ZWVufSBfaGVhZFxuICogQHByb3BlcnR5IHtUd2Vlbn0gX3RhaWxcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSAge1R3ZWVuQWRkaXRpdmVMb29rdXBzfSBsb29rdXBzXG4gKiBAcmV0dXJuIHtBZGRpdGl2ZUFuaW1hdGlvbn1cbiAqL1xuY29uc3QgYWRkQWRkaXRpdmVBbmltYXRpb24gPSBsb29rdXBzID0+IHtcbiAgbGV0IGFuaW1hdGlvbiA9IGFkZGl0aXZlLmFuaW1hdGlvbjtcbiAgaWYgKCFhbmltYXRpb24pIHtcbiAgICBhbmltYXRpb24gPSB7XG4gICAgICBkdXJhdGlvbjogbWluVmFsdWUsXG4gICAgICBjb21wdXRlRGVsdGFUaW1lOiBub29wLFxuICAgICAgX29mZnNldDogMCxcbiAgICAgIF9kZWxheTogMCxcbiAgICAgIF9oZWFkOiBudWxsLFxuICAgICAgX3RhaWw6IG51bGwsXG4gICAgfTtcbiAgICBhZGRpdGl2ZS5hbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgYWRkaXRpdmUudXBkYXRlID0gKCkgPT4ge1xuICAgICAgbG9va3Vwcy5mb3JFYWNoKHByb3BlcnR5QW5pbWF0aW9uID0+IHtcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHByb3BlcnR5QW5pbWF0aW9uKSB7XG4gICAgICAgICAgY29uc3QgdHdlZW5zID0gcHJvcGVydHlBbmltYXRpb25bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICBjb25zdCBsb29rdXBUd2VlbiA9IHR3ZWVucy5faGVhZDtcbiAgICAgICAgICBpZiAobG9va3VwVHdlZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGxvb2t1cFR3ZWVuLl92YWx1ZVR5cGU7XG4gICAgICAgICAgICBjb25zdCBhZGRpdGl2ZVZhbHVlcyA9IHZhbHVlVHlwZSA9PT0gdmFsdWVUeXBlcy5DT01QTEVYIHx8IHZhbHVlVHlwZSA9PT0gdmFsdWVUeXBlcy5DT0xPUiA/IGNsb25lQXJyYXkobG9va3VwVHdlZW4uX2Zyb21OdW1iZXJzKSA6IG51bGw7XG4gICAgICAgICAgICBsZXQgYWRkaXRpdmVWYWx1ZSA9IGxvb2t1cFR3ZWVuLl9mcm9tTnVtYmVyO1xuICAgICAgICAgICAgbGV0IHR3ZWVuID0gdHdlZW5zLl90YWlsO1xuICAgICAgICAgICAgd2hpbGUgKHR3ZWVuICYmIHR3ZWVuICE9PSBsb29rdXBUd2Vlbikge1xuICAgICAgICAgICAgICBpZiAoYWRkaXRpdmVWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHR3ZWVuLl9udW1iZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykgYWRkaXRpdmVWYWx1ZXNbaV0gKz0gdHdlZW4uX251bWJlcnNbaV07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkaXRpdmVWYWx1ZSArPSB0d2Vlbi5fbnVtYmVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR3ZWVuID0gdHdlZW4uX3ByZXZBZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb29rdXBUd2Vlbi5fdG9OdW1iZXIgPSBhZGRpdGl2ZVZhbHVlO1xuICAgICAgICAgICAgbG9va3VwVHdlZW4uX3RvTnVtYmVycyA9IGFkZGl0aXZlVmFsdWVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBUT0RPOiBBdm9pZCBwb2x5bW9ycGhpc20gaGVyZSwgaWRlYWx5IHRoZSBhZGRpdGl2ZSBhbmltYXRpb24gc2hvdWxkIGJlIGEgcmVndWxhciBhbmltYXRpb24gd2l0aCBhIGhpZ2hlciBwcmlvcml0eSBpbiB0aGUgcmVuZGVyIGxvb3BcbiAgICAgIHJlbmRlcihhbmltYXRpb24sIDEsIDEsIDAsIHRpY2tNb2Rlcy5GT1JDRSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uO1xufTtcblxuY29uc3QgZW5naW5lVGlja01ldGhvZCA9IGlzQnJvd3NlciA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSA6IHNldEltbWVkaWF0ZTtcbmNvbnN0IGVuZ2luZUNhbmNlbE1ldGhvZCA9IGlzQnJvd3NlciA/IGNhbmNlbEFuaW1hdGlvbkZyYW1lIDogY2xlYXJJbW1lZGlhdGU7XG5cbmNsYXNzIEVuZ2luZSBleHRlbmRzIENsb2NrIHtcblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IFtpbml0VGltZV0gKi9cbiAgY29uc3RydWN0b3IoaW5pdFRpbWUpIHtcbiAgICBzdXBlcihpbml0VGltZSk7XG4gICAgdGhpcy51c2VEZWZhdWx0TWFpbkxvb3AgPSB0cnVlO1xuICAgIHRoaXMucGF1c2VPbkRvY3VtZW50SGlkZGVuID0gdHJ1ZTtcbiAgICAvKiogQHR5cGUge0RlZmF1bHRzUGFyYW1zfSAqL1xuICAgIHRoaXMuZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICB0aGlzLnBhdXNlZCA9IGlzQnJvd3NlciAmJiBkb2MuaGlkZGVuID8gdHJ1ZSAgOiBmYWxzZTtcbiAgICAvKiogQHR5cGUge051bWJlcnxOb2RlSlMuSW1tZWRpYXRlfSAqL1xuICAgIHRoaXMucmVxSWQgPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHRpbWUgPSB0aGlzLl9jdXJyZW50VGltZSA9IG5vdygpO1xuICAgIGlmICh0aGlzLnJlcXVlc3RUaWNrKHRpbWUpKSB7XG4gICAgICB0aGlzLmNvbXB1dGVEZWx0YVRpbWUodGltZSk7XG4gICAgICBjb25zdCBlbmdpbmVTcGVlZCA9IHRoaXMuX3NwZWVkO1xuICAgICAgY29uc3QgZW5naW5lRnBzID0gdGhpcy5fZnBzO1xuICAgICAgbGV0IGFjdGl2ZVRpY2thYmxlID0gLyoqIEB0eXBlIHtUaWNrYWJsZX0gKi8odGhpcy5faGVhZCk7XG4gICAgICB3aGlsZSAoYWN0aXZlVGlja2FibGUpIHtcbiAgICAgICAgY29uc3QgbmV4dFRpY2thYmxlID0gYWN0aXZlVGlja2FibGUuX25leHQ7XG4gICAgICAgIGlmICghYWN0aXZlVGlja2FibGUucGF1c2VkKSB7XG4gICAgICAgICAgdGljayhcbiAgICAgICAgICAgIGFjdGl2ZVRpY2thYmxlLFxuICAgICAgICAgICAgKHRpbWUgLSBhY3RpdmVUaWNrYWJsZS5fc3RhcnRUaW1lKSAqIGFjdGl2ZVRpY2thYmxlLl9zcGVlZCAqIGVuZ2luZVNwZWVkLFxuICAgICAgICAgICAgMCwgLy8gIW11dGVDYWxsYmFja3NcbiAgICAgICAgICAgIDAsIC8vICFpbnRlcm5hbFJlbmRlclxuICAgICAgICAgICAgYWN0aXZlVGlja2FibGUuX2ZwcyA8IGVuZ2luZUZwcyA/IGFjdGl2ZVRpY2thYmxlLnJlcXVlc3RUaWNrKHRpbWUpIDogdGlja01vZGVzLkFVVE9cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbW92ZUNoaWxkKHRoaXMsIGFjdGl2ZVRpY2thYmxlKTtcbiAgICAgICAgICB0aGlzLl9oYXNDaGlsZHJlbiA9ICEhdGhpcy5fdGFpbDtcbiAgICAgICAgICBhY3RpdmVUaWNrYWJsZS5fcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChhY3RpdmVUaWNrYWJsZS5jb21wbGV0ZWQgJiYgIWFjdGl2ZVRpY2thYmxlLl9jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRpY2thYmxlLmNhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVUaWNrYWJsZSA9IG5leHRUaWNrYWJsZTtcbiAgICAgIH1cbiAgICAgIGFkZGl0aXZlLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHdha2UoKSB7XG4gICAgaWYgKHRoaXMudXNlRGVmYXVsdE1haW5Mb29wICYmICF0aGlzLnJlcUlkICYmICF0aGlzLnBhdXNlZCkge1xuICAgICAgdGhpcy5yZXFJZCA9IGVuZ2luZVRpY2tNZXRob2QodGlja0VuZ2luZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIHJldHVybiBraWxsRW5naW5lKCk7XG4gIH1cblxuICByZXN1bWUoKSB7XG4gICAgaWYgKCF0aGlzLnBhdXNlZCkgcmV0dXJuO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1RpY2thYmxlfSAqL2NoaWxkKSA9PiBjaGlsZC5yZXNldFRpbWUoKSk7XG4gICAgcmV0dXJuIHRoaXMud2FrZSgpO1xuICB9XG5cbiAgLy8gR2V0dGVyIGFuZCBzZXR0ZXIgZm9yIHNwZWVkXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWQgKiAoZ2xvYmFscy50aW1lU2NhbGUgPT09IDEgPyAxIDogSyk7XG4gIH1cblxuICBzZXQgc3BlZWQocGxheWJhY2tSYXRlKSB7XG4gICAgdGhpcy5fc3BlZWQgPSBwbGF5YmFja1JhdGUgKiBnbG9iYWxzLnRpbWVTY2FsZTtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7VGlja2FibGV9ICovY2hpbGQpID0+IGNoaWxkLnNwZWVkID0gY2hpbGQuX3NwZWVkKTtcbiAgfVxuXG4gIC8vIEdldHRlciBhbmQgc2V0dGVyIGZvciB0aW1lVW5pdFxuICBnZXQgdGltZVVuaXQoKSB7XG4gICAgcmV0dXJuIGdsb2JhbHMudGltZVNjYWxlID09PSAxID8gJ21zJyA6ICdzJztcbiAgfTtcblxuICBzZXQgdGltZVVuaXQodW5pdCkge1xuICAgIGNvbnN0IHNlY29uZHNTY2FsZSA9IDAuMDAxO1xuICAgIGNvbnN0IGlzU2Vjb25kID0gdW5pdCA9PT0gJ3MnO1xuICAgIGNvbnN0IG5ld1NjYWxlID0gaXNTZWNvbmQgPyBzZWNvbmRzU2NhbGUgOiAxO1xuICAgIGlmIChnbG9iYWxzLnRpbWVTY2FsZSAhPT0gbmV3U2NhbGUpIHtcbiAgICAgIGdsb2JhbHMudGltZVNjYWxlID0gbmV3U2NhbGU7XG4gICAgICBnbG9iYWxzLnRpY2tUaHJlc2hvbGQgPSAyMDAgKiBuZXdTY2FsZTtcbiAgICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gaXNTZWNvbmQgPyBzZWNvbmRzU2NhbGUgOiBLO1xuICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgICAodGhpcy5kZWZhdWx0cy5kdXJhdGlvbikgKj0gc2NhbGVGYWN0b3I7XG4gICAgICB0aGlzLl9zcGVlZCAqPSBzY2FsZUZhY3RvcjtcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXIgYW5kIHNldHRlciBmb3IgcHJlY2lzaW9uXG4gIGdldCBwcmVjaXNpb24oKSB7XG4gICAgcmV0dXJuIGdsb2JhbHMucHJlY2lzaW9uO1xuICB9XG5cbiAgc2V0IHByZWNpc2lvbihwcmVjaXNpb24pIHtcbiAgICBnbG9iYWxzLnByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgfVxuXG59XG5jb25zdCBlbmdpbmUgPSAvKiNfX1BVUkVfXyovKCgpID0+IHtcbiAgY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZShub3coKSk7XG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICBnbG9iYWxWZXJzaW9ucy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoIWVuZ2luZS5wYXVzZU9uRG9jdW1lbnRIaWRkZW4pIHJldHVybjtcbiAgICAgIGRvYy5oaWRkZW4gPyBlbmdpbmUucGF1c2UoKSA6IGVuZ2luZS5yZXN1bWUoKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZW5naW5lO1xufSkoKTtcblxuXG5jb25zdCB0aWNrRW5naW5lID0gKCkgPT4ge1xuICBpZiAoZW5naW5lLl9oZWFkKSB7XG4gICAgZW5naW5lLnJlcUlkID0gZW5naW5lVGlja01ldGhvZCh0aWNrRW5naW5lKTtcbiAgICBlbmdpbmUudXBkYXRlKCk7XG4gIH0gZWxzZSB7XG4gICAgZW5naW5lLnJlcUlkID0gMDtcbiAgfVxufTtcblxuY29uc3Qga2lsbEVuZ2luZSA9ICgpID0+IHtcbiAgZW5naW5lQ2FuY2VsTWV0aG9kKC8qKiBAdHlwZSB7Tm9kZUpTLkltbWVkaWF0ZSAmIE51bWJlcn0gKi8oZW5naW5lLnJlcUlkKSk7XG4gIGVuZ2luZS5yZXFJZCA9IDA7XG4gIHJldHVybiBlbmdpbmU7XG59O1xuXG5cblxuXG4vKipcbiAqIEBwYXJhbSAge0RPTVRhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BOYW1lXG4gKiBAcGFyYW0gIHtPYmplY3R9IGFuaW1hdGlvbklubGluZVN0eWxlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCBwYXJzZUlubGluZVRyYW5zZm9ybXMgPSAodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0aW9uSW5saW5lU3R5bGVzKSA9PiB7XG4gIGNvbnN0IGlubGluZVRyYW5zZm9ybXMgPSB0YXJnZXQuc3R5bGUudHJhbnNmb3JtO1xuICBsZXQgaW5saW5lZFN0eWxlc1Byb3BlcnR5VmFsdWU7XG4gIGlmIChpbmxpbmVUcmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgY2FjaGVkVHJhbnNmb3JtcyA9IHRhcmdldFt0cmFuc2Zvcm1zU3ltYm9sXTtcbiAgICBsZXQgdDsgd2hpbGUgKHQgPSB0cmFuc2Zvcm1zRXhlY1JneC5leGVjKGlubGluZVRyYW5zZm9ybXMpKSB7XG4gICAgICBjb25zdCBpbmxpbmVQcm9wZXJ0eU5hbWUgPSB0WzFdO1xuICAgICAgLy8gY29uc3QgaW5saW5lUHJvcGVydHlWYWx1ZSA9IHRbMl07XG4gICAgICBjb25zdCBpbmxpbmVQcm9wZXJ0eVZhbHVlID0gdFsyXS5zbGljZSgxLCAtMSk7XG4gICAgICBjYWNoZWRUcmFuc2Zvcm1zW2lubGluZVByb3BlcnR5TmFtZV0gPSBpbmxpbmVQcm9wZXJ0eVZhbHVlO1xuICAgICAgaWYgKGlubGluZVByb3BlcnR5TmFtZSA9PT0gcHJvcE5hbWUpIHtcbiAgICAgICAgaW5saW5lZFN0eWxlc1Byb3BlcnR5VmFsdWUgPSBpbmxpbmVQcm9wZXJ0eVZhbHVlO1xuICAgICAgICAvLyBTdG9yZSB0aGUgbmV3IHBhcnNlZCBpbmxpbmUgc3R5bGVzIGlmIGFuaW1hdGlvbklubGluZVN0eWxlcyBpcyBwcm92aWRlZFxuICAgICAgICBpZiAoYW5pbWF0aW9uSW5saW5lU3R5bGVzKSB7XG4gICAgICAgICAgYW5pbWF0aW9uSW5saW5lU3R5bGVzW3Byb3BOYW1lXSA9IGlubGluZVByb3BlcnR5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlubGluZVRyYW5zZm9ybXMgJiYgIWlzVW5kKGlubGluZWRTdHlsZXNQcm9wZXJ0eVZhbHVlKSA/IGlubGluZWRTdHlsZXNQcm9wZXJ0eVZhbHVlIDpcbiAgICBzdHJpbmdTdGFydHNXaXRoKHByb3BOYW1lLCAnc2NhbGUnKSA/ICcxJyA6XG4gICAgc3RyaW5nU3RhcnRzV2l0aChwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ1N0YXJ0c1dpdGgocHJvcE5hbWUsICdza2V3JykgPyAnMGRlZycgOiAnMHB4Jztcbn07XG5cblxuXG5cbi8qKlxuICogQHBhcmFtICB7RE9NVGFyZ2V0c1BhcmFtfFRhcmdldHNQYXJhbX0gdlxuICogQHJldHVybiB7Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVMaXN0KHYpIHtcbiAgY29uc3QgbiA9IGlzU3RyKHYpID8gZ2xvYmFscy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwodikgOiB2O1xuICBpZiAobiBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG4gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgcmV0dXJuIG47XG59XG5cbi8qKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtET01UYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEByZXR1cm4ge0RPTVRhcmdldHNBcnJheX1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0pTVGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcmV0dXJuIHtKU1RhcmdldHNBcnJheX1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHJldHVybiB7VGFyZ2V0c0FycmF5fVxuICpcbiAqIEBwYXJhbSAge0RPTVRhcmdldHNQYXJhbXxKU1RhcmdldHNQYXJhbXxUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqL1xuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcbiAgaWYgKGlzTmlsKHRhcmdldHMpKSByZXR1cm4gLyoqIEB0eXBlIHtUYXJnZXRzQXJyYXl9ICovKFtdKTtcbiAgaWYgKGlzQXJyKHRhcmdldHMpKSB7XG4gICAgY29uc3QgZmxhdHRlbmVkID0gdGFyZ2V0cy5mbGF0KEluZmluaXR5KTtcbiAgICAvKiogQHR5cGUge1RhcmdldHNBcnJheX0gKi9cbiAgICBjb25zdCBwYXJzZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZsYXR0ZW5lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBmbGF0dGVuZWRbaV07XG4gICAgICBpZiAoIWlzTmlsKGl0ZW0pKSB7XG4gICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gZ2V0Tm9kZUxpc3QoaXRlbSk7XG4gICAgICAgIGlmIChub2RlTGlzdCkge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwLCBqbCA9IG5vZGVMaXN0Lmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ykl0ZW0gPSBub2RlTGlzdFtqXTtcbiAgICAgICAgICAgIGlmICghaXNOaWwoc3ViSXRlbSkpIHtcbiAgICAgICAgICAgICAgbGV0IGlzRHVwbGljYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBrbCA9IHBhcnNlZC5sZW5ndGg7IGsgPCBrbDsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZFtrXSA9PT0gc3ViSXRlbSkge1xuICAgICAgICAgICAgICAgICAgaXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghaXNEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucHVzaChzdWJJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgaXNEdXBsaWNhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMCwgamwgPSBwYXJzZWQubGVuZ3RoOyBqIDwgamw7IGorKykge1xuICAgICAgICAgICAgaWYgKHBhcnNlZFtqXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICBpc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICBwYXJzZWQucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuIC8qKiBAdHlwZSB7SlNUYXJnZXRzQXJyYXl9ICovKFt0YXJnZXRzXSk7XG4gIGNvbnN0IG5vZGVMaXN0ID0gZ2V0Tm9kZUxpc3QodGFyZ2V0cyk7XG4gIGlmIChub2RlTGlzdCkgcmV0dXJuIC8qKiBAdHlwZSB7RE9NVGFyZ2V0c0FycmF5fSAqLyhBcnJheS5mcm9tKG5vZGVMaXN0KSk7XG4gIHJldHVybiAvKiogQHR5cGUge1RhcmdldHNBcnJheX0gKi8oW3RhcmdldHNdKTtcbn1cblxuLyoqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0RPTVRhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHJldHVybiB7RE9NVGFyZ2V0c0FycmF5fVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7SlNUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEByZXR1cm4ge0pTVGFyZ2V0c0FycmF5fVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcmV0dXJuIHtUYXJnZXRzQXJyYXl9XG4gKlxuICogQHBhcmFtICB7RE9NVGFyZ2V0c1BhcmFtfEpTVGFyZ2V0c1BhcmFtfFRhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICovXG5mdW5jdGlvbiByZWdpc3RlclRhcmdldHModGFyZ2V0cykge1xuICBjb25zdCBwYXJzZWRUYXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGNvbnN0IHBhcnNlZFRhcmdldHNMZW5ndGggPSBwYXJzZWRUYXJnZXRzQXJyYXkubGVuZ3RoO1xuICBpZiAocGFyc2VkVGFyZ2V0c0xlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkVGFyZ2V0c0xlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBwYXJzZWRUYXJnZXRzQXJyYXlbaV07XG4gICAgICBpZiAoIXRhcmdldFtpc1JlZ2lzdGVyZWRUYXJnZXRTeW1ib2xdKSB7XG4gICAgICAgIHRhcmdldFtpc1JlZ2lzdGVyZWRUYXJnZXRTeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaXNTdmdUeXBlID0gaXNTdmcodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaXNEb20gPSAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KS5ub2RlVHlwZSB8fCBpc1N2Z1R5cGU7XG4gICAgICAgIGlmIChpc0RvbSkge1xuICAgICAgICAgIHRhcmdldFtpc0RvbVN5bWJvbF0gPSB0cnVlO1xuICAgICAgICAgIHRhcmdldFtpc1N2Z1N5bWJvbF0gPSBpc1N2Z1R5cGU7XG4gICAgICAgICAgdGFyZ2V0W3RyYW5zZm9ybXNTeW1ib2xdID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcnNlZFRhcmdldHNBcnJheTtcbn1cblxuXG5cblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHBhdGhcbiAqIEByZXR1cm4ge1NWR0dlb21ldHJ5RWxlbWVudHx1bmRlZmluZWR9XG4gKi9cbmNvbnN0IGdldFBhdGggPSBwYXRoID0+IHtcbiAgY29uc3QgcGFyc2VkVGFyZ2V0cyA9IHBhcnNlVGFyZ2V0cyhwYXRoKTtcbiAgY29uc3QgJHBhcnNlZFN2ZyA9IC8qKiBAdHlwZSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAqLyhwYXJzZWRUYXJnZXRzWzBdKTtcbiAgaWYgKCEkcGFyc2VkU3ZnIHx8ICFpc1N2ZygkcGFyc2VkU3ZnKSkgcmV0dXJuO1xuICByZXR1cm4gJHBhcnNlZFN2Zztcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSBwYXRoMlxuICogQHBhcmFtICB7TnVtYmVyfSBbcHJlY2lzaW9uXVxuICogQHJldHVybiB7RnVuY3Rpb25WYWx1ZX1cbiAqL1xuY29uc3QgbW9ycGhUbyA9IChwYXRoMiwgcHJlY2lzaW9uID0gLjMzKSA9PiAoJHBhdGgxKSA9PiB7XG4gIGNvbnN0ICRwYXRoMiA9IC8qKiBAdHlwZSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAqLyhnZXRQYXRoKHBhdGgyKSk7XG4gIGlmICghJHBhdGgyKSByZXR1cm47XG4gIGNvbnN0IGlzUGF0aCA9ICRwYXRoMS50YWdOYW1lID09PSAncGF0aCc7XG4gIGNvbnN0IHNlcGFyYXRvciA9IGlzUGF0aCA/ICcgJyA6ICcsJztcbiAgY29uc3QgcHJldmlvdXNQb2ludHMgPSAkcGF0aDFbbW9ycGhQb2ludHNTeW1ib2xdO1xuICBpZiAocHJldmlvdXNQb2ludHMpICRwYXRoMS5zZXRBdHRyaWJ1dGUoaXNQYXRoID8gJ2QnIDogJ3BvaW50cycsIHByZXZpb3VzUG9pbnRzKTtcblxuICBsZXQgdjEgPSAnJywgdjIgPSAnJztcblxuICBpZiAoIXByZWNpc2lvbikge1xuICAgIHYxID0gJHBhdGgxLmdldEF0dHJpYnV0ZShpc1BhdGggPyAnZCcgOiAncG9pbnRzJyk7XG4gICAgdjIgPSAkcGF0aDIuZ2V0QXR0cmlidXRlKGlzUGF0aCA/ICdkJyA6ICdwb2ludHMnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsZW5ndGgxID0gLyoqIEB0eXBlIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICovKCRwYXRoMSkuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICBjb25zdCBsZW5ndGgyID0gJHBhdGgyLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgY29uc3QgbWF4UG9pbnRzID0gTWF0aC5tYXgoTWF0aC5jZWlsKGxlbmd0aDEgKiBwcmVjaXNpb24pLCBNYXRoLmNlaWwobGVuZ3RoMiAqIHByZWNpc2lvbikpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4UG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gKG1heFBvaW50cyAtIDEpO1xuICAgICAgY29uc3QgcG9pbnRPblBhdGgxID0gLyoqIEB0eXBlIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICovKCRwYXRoMSkuZ2V0UG9pbnRBdExlbmd0aChsZW5ndGgxICogdCk7XG4gICAgICBjb25zdCBwb2ludE9uUGF0aDIgPSAkcGF0aDIuZ2V0UG9pbnRBdExlbmd0aChsZW5ndGgyICogdCk7XG4gICAgICBjb25zdCBwcmVmaXggPSBpc1BhdGggPyAoaSA9PT0gMCA/ICdNJyA6ICdMJykgOiAnJztcbiAgICAgIHYxICs9IHByZWZpeCArIHJvdW5kKHBvaW50T25QYXRoMS54LCAzKSArIHNlcGFyYXRvciArIHBvaW50T25QYXRoMS55ICsgJyAnO1xuICAgICAgdjIgKz0gcHJlZml4ICsgcm91bmQocG9pbnRPblBhdGgyLngsIDMpICsgc2VwYXJhdG9yICsgcG9pbnRPblBhdGgyLnkgKyAnICc7XG4gICAgfVxuICB9XG5cbiAgJHBhdGgxW21vcnBoUG9pbnRzU3ltYm9sXSA9IHYyO1xuXG4gIHJldHVybiBbdjEsIHYyXTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTVkdHZW9tZXRyeUVsZW1lbnR9IFskZWxdXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGdldFNjYWxlRmFjdG9yID0gJGVsID0+IHtcbiAgbGV0IHNjYWxlRmFjdG9yID0gMTtcbiAgaWYgKCRlbCAmJiAkZWwuZ2V0Q1RNKSB7XG4gICAgY29uc3QgY3RtID0gJGVsLmdldENUTSgpO1xuICAgIGlmIChjdG0pIHtcbiAgICAgIGNvbnN0IHNjYWxlWCA9IHNxcnQoY3RtLmEgKiBjdG0uYSArIGN0bS5iICogY3RtLmIpO1xuICAgICAgY29uc3Qgc2NhbGVZID0gc3FydChjdG0uYyAqIGN0bS5jICsgY3RtLmQgKiBjdG0uZCk7XG4gICAgICBzY2FsZUZhY3RvciA9IChzY2FsZVggKyBzY2FsZVkpIC8gMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjYWxlRmFjdG9yO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcHJveHkgdGhhdCB3cmFwcyBhbiBTVkdHZW9tZXRyeUVsZW1lbnQgYW5kIGFkZHMgZHJhd2luZyBmdW5jdGlvbmFsaXR5LlxuICogQHBhcmFtIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICRlbCAtIFRoZSBTVkcgZWxlbWVudCB0byB0cmFuc2Zvcm0gaW50byBhIGRyYXdhYmxlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSBTdGFydGluZyBwb3NpdGlvbiAoMC0xKVxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCAtIEVuZGluZyBwb3NpdGlvbiAoMC0xKVxuICogQHJldHVybiB7RHJhd2FibGVTVkdHZW9tZXRyeX0gLSBSZXR1cm5zIGEgcHJveHkgdGhhdCBwcmVzZXJ2ZXMgdGhlIG9yaWdpbmFsIGVsZW1lbnQncyB0eXBlIHdpdGggYWRkaXRpb25hbCAnZHJhdycgYXR0cmlidXRlIGZ1bmN0aW9uYWxpdHlcbiAqL1xuY29uc3QgY3JlYXRlRHJhd2FibGVQcm94eSA9ICgkZWwsIHN0YXJ0LCBlbmQpID0+IHtcbiAgY29uc3QgcGF0aExlbmd0aCA9IEs7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSgkZWwpO1xuICBjb25zdCBzdHJva2VMaW5lQ2FwID0gY29tcHV0ZWRTdHlsZXMuc3Ryb2tlTGluZWNhcDtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCAkc2NhbGxlZCA9IGNvbXB1dGVkU3R5bGVzLnZlY3RvckVmZmVjdCA9PT0gJ25vbi1zY2FsaW5nLXN0cm9rZScgPyAkZWwgOiBudWxsO1xuICBsZXQgY3VycmVudENhcCA9IHN0cm9rZUxpbmVDYXA7XG5cbiAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoJGVsLCB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gcHJveHlUYXJnZXRTeW1ib2wpIHJldHVybiB0YXJnZXQ7XG4gICAgICBpZiAocHJvcGVydHkgPT09ICdzZXRBdHRyaWJ1dGUnKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIGlmIChhcmdzWzBdID09PSAnZHJhdycpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXJnc1sxXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBjb25zdCB2MSA9ICt2YWx1ZXNbMF07XG4gICAgICAgICAgICBjb25zdCB2MiA9ICt2YWx1ZXNbMV07XG4gICAgICAgICAgICAvLyBUT1RPOiBCZW5jaG1hcmsgaWYgcGVyZm9ybWluZyB0d28gc2xpY2VzIGlzIG1vcmUgcGVyZm9ybWFudCB0aGFuIG9uZSBzcGxpdFxuICAgICAgICAgICAgLy8gY29uc3Qgc3BhY2VJbmRleCA9IHZhbHVlLmluZGV4T2YoJyAnKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHYxID0gcm91bmQoK3ZhbHVlLnNsaWNlKDAsIHNwYWNlSW5kZXgpLCBwcmVjaXNpb24pO1xuICAgICAgICAgICAgLy8gY29uc3QgdjIgPSByb3VuZCgrdmFsdWUuc2xpY2Uoc3BhY2VJbmRleCArIDEpLCBwcmVjaXNpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVGYWN0b3IgPSBnZXRTY2FsZUZhY3Rvcigkc2NhbGxlZCk7XG4gICAgICAgICAgICBjb25zdCBvcyA9IHYxICogLTFlMyAqIHNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgY29uc3QgZDEgPSAodjIgKiBwYXRoTGVuZ3RoICogc2NhbGVGYWN0b3IpICsgb3M7XG4gICAgICAgICAgICBjb25zdCBkMiA9IChwYXRoTGVuZ3RoICogc2NhbGVGYWN0b3IgK1xuICAgICAgICAgICAgICAgICAgICAgICgodjEgPT09IDAgJiYgdjIgPT09IDEpIHx8ICh2MSA9PT0gMSAmJiB2MiA9PT0gMCkgPyAwIDogMTAgKiBzY2FsZUZhY3RvcikgLSBkMSk7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlTGluZUNhcCAhPT0gJ2J1dHQnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0NhcCA9IHYxID09PSB2MiA/ICdidXR0JyA6IHN0cm9rZUxpbmVDYXA7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50Q2FwICE9PSBuZXdDYXApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuc3Ryb2tlTGluZWNhcCA9IGAke25ld0NhcH1gO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDYXAgPSBuZXdDYXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgYCR7b3N9YCk7XG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgYCR7ZDF9ICR7ZDJ9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KHZhbHVlLCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGbmModmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4gUmVmbGVjdC5hcHBseSh2YWx1ZSwgdGFyZ2V0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmICgkZWwuZ2V0QXR0cmlidXRlKCdwYXRoTGVuZ3RoJykgIT09IGAke3BhdGhMZW5ndGh9YCkge1xuICAgICRlbC5zZXRBdHRyaWJ1dGUoJ3BhdGhMZW5ndGgnLCBgJHtwYXRoTGVuZ3RofWApO1xuICAgIHByb3h5LnNldEF0dHJpYnV0ZSgnZHJhdycsIGAke3N0YXJ0fSAke2VuZH1gKTtcbiAgfVxuXG4gIHJldHVybiAvKiogQHR5cGUge0RyYXdhYmxlU1ZHR2VvbWV0cnl9ICovKHByb3h5KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBkcmF3YWJsZSBwcm94aWVzIGZvciBtdWx0aXBsZSBTVkcgZWxlbWVudHMuXG4gKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gc2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3IsIFNWRyBlbGVtZW50LCBvciBhcnJheSBvZiBlbGVtZW50cyBhbmQgc2VsZWN0b3JzXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIC0gU3RhcnRpbmcgcG9zaXRpb24gKDAtMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPTBdIC0gRW5kaW5nIHBvc2l0aW9uICgwLTEpXG4gKiBAcmV0dXJuIHtBcnJheTxEcmF3YWJsZVNWR0dlb21ldHJ5Pn0gLSBBcnJheSBvZiBwcm94aWVkIGVsZW1lbnRzIHdpdGggZHJhd2luZyBmdW5jdGlvbmFsaXR5XG4gKi9cbmNvbnN0IGNyZWF0ZURyYXdhYmxlID0gKHNlbGVjdG9yLCBzdGFydCA9IDAsIGVuZCA9IDApID0+IHtcbiAgY29uc3QgZWxzID0gcGFyc2VUYXJnZXRzKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGVscy5tYXAoJGVsID0+IGNyZWF0ZURyYXdhYmxlUHJveHkoXG4gICAgLyoqIEB0eXBlIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICovKCRlbCksXG4gICAgc3RhcnQsXG4gICAgZW5kXG4gICkpO1xufTtcblxuLy8gTW90aW9uIHBhdGggYW5pbWF0aW9uXG5cbi8qKlxuICogQHBhcmFtIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICRwYXRoXG4gKiBAcGFyYW0ge051bWJlcn0gcHJvZ3Jlc3NcbiAqIEBwYXJhbSB7TnVtYmVyfWxvb2t1cFxuICogQHJldHVybiB7RE9NUG9pbnR9XG4gKi9cbmNvbnN0IGdldFBhdGhQb2ludCA9ICgkcGF0aCwgcHJvZ3Jlc3MsIGxvb2t1cCA9IDApID0+IHtcbiAgcmV0dXJuICRwYXRoLmdldFBvaW50QXRMZW5ndGgocHJvZ3Jlc3MgKyBsb29rdXAgPj0gMSA/IHByb2dyZXNzICsgbG9va3VwIDogMCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAkcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhQcm9wZXJ0eVxuICogQHJldHVybiB7RnVuY3Rpb25WYWx1ZX1cbiAqL1xuY29uc3QgZ2V0UGF0aFByb2dlc3MgPSAoJHBhdGgsIHBhdGhQcm9wZXJ0eSkgPT4ge1xuICByZXR1cm4gJGVsID0+IHtcbiAgICBjb25zdCB0b3RhbExlbmd0aCA9ICsoJHBhdGguZ2V0VG90YWxMZW5ndGgoKSk7XG4gICAgY29uc3QgaW5TdmcgPSAkZWxbaXNTdmdTeW1ib2xdO1xuICAgIGNvbnN0IGN0bSA9ICRwYXRoLmdldENUTSgpO1xuICAgIC8qKiBAdHlwZSB7VHdlZW5PYmplY3RWYWx1ZX0gKi9cbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogMCxcbiAgICAgIHRvOiB0b3RhbExlbmd0aCxcbiAgICAgIC8qKiBAdHlwZSB7VHdlZW5Nb2RpZmllcn0gKi9cbiAgICAgIG1vZGlmaWVyOiBwcm9ncmVzcyA9PiB7XG4gICAgICAgIGlmIChwYXRoUHJvcGVydHkgPT09ICdhJykge1xuICAgICAgICAgIGNvbnN0IHAwID0gZ2V0UGF0aFBvaW50KCRwYXRoLCBwcm9ncmVzcywgLTEpO1xuICAgICAgICAgIGNvbnN0IHAxID0gZ2V0UGF0aFBvaW50KCRwYXRoLCBwcm9ncmVzcywgMSk7XG4gICAgICAgICAgcmV0dXJuIGF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBQSTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwID0gZ2V0UGF0aFBvaW50KCRwYXRoLCBwcm9ncmVzcywgMCk7XG4gICAgICAgICAgcmV0dXJuIHBhdGhQcm9wZXJ0eSA9PT0gJ3gnID9cbiAgICAgICAgICAgIGluU3ZnIHx8ICFjdG0gPyBwLnggOiBwLnggKiBjdG0uYSArIHAueSAqIGN0bS5jICsgY3RtLmUgOlxuICAgICAgICAgICAgaW5TdmcgfHwgIWN0bSA/IHAueSA6IHAueCAqIGN0bS5iICsgcC55ICogY3RtLmQgKyBjdG0uZlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSBwYXRoXG4gKi9cbmNvbnN0IGNyZWF0ZU1vdGlvblBhdGggPSBwYXRoID0+IHtcbiAgY29uc3QgJHBhdGggPSBnZXRQYXRoKHBhdGgpO1xuICBpZiAoISRwYXRoKSByZXR1cm47XG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlWDogZ2V0UGF0aFByb2dlc3MoJHBhdGgsICd4JyksXG4gICAgdHJhbnNsYXRlWTogZ2V0UGF0aFByb2dlc3MoJHBhdGgsICd5JyksXG4gICAgcm90YXRlOiBnZXRQYXRoUHJvZ2VzcygkcGF0aCwgJ2EnKSxcbiAgfVxufTtcblxuLy8gQ2hlY2sgZm9yIHZhbGlkIFNWRyBhdHRyaWJ1dGVcblxuY29uc3QgY3NzUmVzZXJ2ZWRQcm9wZXJ0aWVzID0gWydvcGFjaXR5JywgJ3JvdGF0ZScsICdvdmVyZmxvdycsICdjb2xvciddO1xuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldH0gZWxcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBpc1ZhbGlkU1ZHQXR0cmlidXRlID0gKGVsLCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgLy8gUmV0dXJuIGVhcmx5IGFuZCB1c2UgQ1NTIG9wYWNpdHkgYW5pbWF0aW9uIGluc3RlYWQgKGFscmVhZHkgYmV0dGVyIGRlZmF1bHQgdmFsdWVzIChvcGFjaXR5OiAxIGluc3RlYWQgb2YgMCkpIGFuZCByb3RhdGUgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYSB0cmFuc2Zvcm1cbiAgaWYgKGNzc1Jlc2VydmVkUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUocHJvcGVydHlOYW1lKSB8fCBwcm9wZXJ0eU5hbWUgaW4gZWwpIHtcbiAgICBpZiAocHJvcGVydHlOYW1lID09PSAnc2NhbGUnKSB7IC8vIFNjYWxlXG4gICAgICBjb25zdCBlbFBhcmVudE5vZGUgPSAvKiogQHR5cGUge1NWR0dlb21ldHJ5RWxlbWVudH0gKi8oLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKGVsKS5wYXJlbnROb2RlKTtcbiAgICAgIC8vIE9ubHkgY29uc2lkZXIgc2NhbGUgYXMgYSB2YWxpZCBTVkcgYXR0cmlidXRlIG9uIGZpbHRlciBlbGVtZW50XG4gICAgICByZXR1cm4gZWxQYXJlbnROb2RlICYmIGVsUGFyZW50Tm9kZS50YWdOYW1lID09PSAnZmlsdGVyJztcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IHN2ZyA9IHtcbiAgbW9ycGhUbyxcbiAgY3JlYXRlTW90aW9uUGF0aCxcbiAgY3JlYXRlRHJhd2FibGUsXG59O1xuXG5cblxuXG4vKipcbiAqIFJHQiAvIFJHQkEgQ29sb3IgdmFsdWUgc3RyaW5nIC0+IFJHQkEgdmFsdWVzIGFycmF5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHJnYlZhbHVlXG4gKiBAcmV0dXJuIHtDb2xvckFycmF5fVxuICovXG5jb25zdCByZ2JUb1JnYmEgPSByZ2JWYWx1ZSA9PiB7XG4gIGNvbnN0IHJnYmEgPSByZ2JFeGVjUmd4LmV4ZWMocmdiVmFsdWUpIHx8IHJnYmFFeGVjUmd4LmV4ZWMocmdiVmFsdWUpO1xuICBjb25zdCBhID0gIWlzVW5kKHJnYmFbNF0pID8gK3JnYmFbNF0gOiAxO1xuICByZXR1cm4gW1xuICAgICtyZ2JhWzFdLFxuICAgICtyZ2JhWzJdLFxuICAgICtyZ2JhWzNdLFxuICAgIGFcbiAgXVxufTtcblxuLyoqXG4gKiBIRVgzIC8gSEVYM0EgLyBIRVg2IC8gSEVYNkEgQ29sb3IgdmFsdWUgc3RyaW5nIC0+IFJHQkEgdmFsdWVzIGFycmF5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGhleFZhbHVlXG4gKiBAcmV0dXJuIHtDb2xvckFycmF5fVxuICovXG5jb25zdCBoZXhUb1JnYmEgPSBoZXhWYWx1ZSA9PiB7XG4gIGNvbnN0IGhleExlbmd0aCA9IGhleFZhbHVlLmxlbmd0aDtcbiAgY29uc3QgaXNTaG9ydCA9IGhleExlbmd0aCA9PT0gNCB8fCBoZXhMZW5ndGggPT09IDU7XG4gIHJldHVybiBbXG4gICAgKygnMHgnICsgaGV4VmFsdWVbMV0gKyBoZXhWYWx1ZVtpc1Nob3J0ID8gMSA6IDJdKSxcbiAgICArKCcweCcgKyBoZXhWYWx1ZVtpc1Nob3J0ID8gMiA6IDNdICsgaGV4VmFsdWVbaXNTaG9ydCA/IDIgOiA0XSksXG4gICAgKygnMHgnICsgaGV4VmFsdWVbaXNTaG9ydCA/IDMgOiA1XSArIGhleFZhbHVlW2lzU2hvcnQgPyAzIDogNl0pLFxuICAgICgoaGV4TGVuZ3RoID09PSA1IHx8IGhleExlbmd0aCA9PT0gOSkgPyArKCsoJzB4JyArIGhleFZhbHVlW2lzU2hvcnQgPyA0IDogN10gKyBoZXhWYWx1ZVtpc1Nob3J0ID8gNCA6IDhdKSAvIDI1NSkudG9GaXhlZCgzKSA6IDEpXG4gIF1cbn07XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSBwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHFcbiAqIEBwYXJhbSAge051bWJlcn0gdFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBodWUycmdiID0gKHAsIHEsIHQpID0+IHtcbiAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gIGlmICh0ID4gMSkgdCAtPSAxO1xuICByZXR1cm4gdCA8IDEgLyA2ID8gcCArIChxIC0gcCkgKiA2ICogdCA6XG4gICAgICAgICB0IDwgMSAvIDIgPyBxIDpcbiAgICAgICAgIHQgPCAyIC8gMyA/IHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2IDpcbiAgICAgICAgIHA7XG59O1xuXG4vKipcbiAqIEhTTCAvIEhTTEEgQ29sb3IgdmFsdWUgc3RyaW5nIC0+IFJHQkEgdmFsdWVzIGFycmF5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGhzbFZhbHVlXG4gKiBAcmV0dXJuIHtDb2xvckFycmF5fVxuICovXG5jb25zdCBoc2xUb1JnYmEgPSBoc2xWYWx1ZSA9PiB7XG4gIGNvbnN0IGhzbGEgPSBoc2xFeGVjUmd4LmV4ZWMoaHNsVmFsdWUpIHx8IGhzbGFFeGVjUmd4LmV4ZWMoaHNsVmFsdWUpO1xuICBjb25zdCBoID0gK2hzbGFbMV0gLyAzNjA7XG4gIGNvbnN0IHMgPSAraHNsYVsyXSAvIDEwMDtcbiAgY29uc3QgbCA9ICtoc2xhWzNdIC8gMTAwO1xuICBjb25zdCBhID0gIWlzVW5kKGhzbGFbNF0pID8gK2hzbGFbNF0gOiAxO1xuICBsZXQgciwgZywgYjtcbiAgaWYgKHMgPT09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHEgPSBsIDwgLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gcm91bmQoaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpICogMjU1LCAwKTtcbiAgICBnID0gcm91bmQoaHVlMnJnYihwLCBxLCBoKSAqIDI1NSwgMCk7XG4gICAgYiA9IHJvdW5kKGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKSAqIDI1NSwgMCk7XG4gIH1cbiAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbn07XG5cbi8qKlxuICogQWxsIGluIG9uZSBjb2xvciBjb252ZXJ0ZXIgdGhhdCBjb252ZXJ0cyBhIGNvbG9yIHN0cmluZyB2YWx1ZSBpbnRvIGFuIGFycmF5IG9mIFJHQkEgdmFsdWVzXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbG9yU3RyaW5nXG4gKiBAcmV0dXJuIHtDb2xvckFycmF5fVxuICovXG5jb25zdCBjb252ZXJ0Q29sb3JTdHJpbmdWYWx1ZXNUb1JnYmFBcnJheSA9IGNvbG9yU3RyaW5nID0+IHtcbiAgcmV0dXJuIGlzUmdiKGNvbG9yU3RyaW5nKSA/IHJnYlRvUmdiYShjb2xvclN0cmluZykgOlxuICAgICAgICAgaXNIZXgoY29sb3JTdHJpbmcpID8gaGV4VG9SZ2JhKGNvbG9yU3RyaW5nKSA6XG4gICAgICAgICBpc0hzbChjb2xvclN0cmluZykgPyBoc2xUb1JnYmEoY29sb3JTdHJpbmcpIDpcbiAgICAgICAgIFswLCAwLCAwLCAxXTtcbn07XG5cblxuXG5cbi8qKlxuICogQHRlbXBsYXRlIFQsIERcbiAqIEBwYXJhbSB7VHx1bmRlZmluZWR9IHRhcmdldFZhbHVlXG4gKiBAcGFyYW0ge0R9IGRlZmF1bHRWYWx1ZVxuICogQHJldHVybiB7VHxEfVxuICovXG5jb25zdCBzZXRWYWx1ZSA9ICh0YXJnZXRWYWx1ZSwgZGVmYXVsdFZhbHVlKSA9PiB7XG4gIHJldHVybiBpc1VuZCh0YXJnZXRWYWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB0YXJnZXRWYWx1ZTtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VHdlZW5Qcm9wVmFsdWV9IHZhbHVlXG4gKiBAcGFyYW0gIHtUYXJnZXR9IHRhcmdldFxuICogQHBhcmFtICB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtICB7TnVtYmVyfSB0b3RhbFxuICogQHBhcmFtICB7T2JqZWN0fSBbc3RvcmVdXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmNvbnN0IGdldEZ1bmN0aW9uVmFsdWUgPSAodmFsdWUsIHRhcmdldCwgaW5kZXgsIHRvdGFsLCBzdG9yZSkgPT4ge1xuICBpZiAoaXNGbmModmFsdWUpKSB7XG4gICAgY29uc3QgZnVuYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkID0gLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi8odmFsdWUpKHRhcmdldCwgaW5kZXgsIHRvdGFsKTtcbiAgICAgIC8vIEZhbGxiYWNrIHRvIDAgaWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgdW5kZWZpbmVkIC8gTmFOIC8gbnVsbCAvIGZhbHNlIC8gMFxuICAgICAgcmV0dXJuICFpc05hTigrY29tcHV0ZWQpID8gK2NvbXB1dGVkIDogY29tcHV0ZWQgfHwgMDtcbiAgICB9O1xuICAgIGlmIChzdG9yZSkge1xuICAgICAgc3RvcmUuZnVuYyA9IGZ1bmM7XG4gICAgfVxuICAgIHJldHVybiBmdW5jKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BcbiAqIEByZXR1cm4ge3R3ZWVuVHlwZXN9XG4gKi9cbmNvbnN0IGdldFR3ZWVuVHlwZSA9ICh0YXJnZXQsIHByb3ApID0+IHtcbiAgcmV0dXJuICF0YXJnZXRbaXNEb21TeW1ib2xdID8gdHdlZW5UeXBlcy5PQkpFQ1QgOlxuICAgIC8vIEhhbmRsZSBTVkcgYXR0cmlidXRlc1xuICAgIHRhcmdldFtpc1N2Z1N5bWJvbF0gJiYgaXNWYWxpZFNWR0F0dHJpYnV0ZSh0YXJnZXQsIHByb3ApID8gdHdlZW5UeXBlcy5BVFRSSUJVVEUgOlxuICAgIC8vIEhhbmRsZSBDU1MgVHJhbnNmb3JtIHByb3BlcnRpZXMgZGlmZmVyZW50bHkgdGhhbiBDU1MgdG8gYWxsb3cgaW5kaXZpZHVhbCBhbmltYXRpb25zXG4gICAgdmFsaWRUcmFuc2Zvcm1zLmluY2x1ZGVzKHByb3ApIHx8IHNob3J0VHJhbnNmb3Jtcy5nZXQocHJvcCkgPyB0d2VlblR5cGVzLlRSQU5TRk9STSA6XG4gICAgLy8gQ1NTIHZhcmlhYmxlc1xuICAgIHN0cmluZ1N0YXJ0c1dpdGgocHJvcCwgJy0tJykgPyB0d2VlblR5cGVzLkNTU19WQVIgOlxuICAgIC8vIEFsbCBvdGhlciBDU1MgcHJvcGVydGllc1xuICAgIHByb3AgaW4gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCkuc3R5bGUgPyB0d2VlblR5cGVzLkNTUyA6XG4gICAgLy8gSGFuZGxlIG90aGVyIERPTSBBdHRyaWJ1dGVzXG4gICAgcHJvcCBpbiB0YXJnZXQgPyB0d2VlblR5cGVzLk9CSkVDVCA6XG4gICAgdHdlZW5UeXBlcy5BVFRSSUJVVEU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge0RPTVRhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BOYW1lXG4gKiBAcGFyYW0gIHtPYmplY3R9IGFuaW1hdGlvbklubGluZVN0eWxlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCBnZXRDU1NWYWx1ZSA9ICh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRpb25JbmxpbmVTdHlsZXMpID0+IHtcbiAgY29uc3QgaW5saW5lU3R5bGVzID0gdGFyZ2V0LnN0eWxlW3Byb3BOYW1lXTtcbiAgaWYgKGlubGluZVN0eWxlcyAmJiBhbmltYXRpb25JbmxpbmVTdHlsZXMpIHtcbiAgICBhbmltYXRpb25JbmxpbmVTdHlsZXNbcHJvcE5hbWVdID0gaW5saW5lU3R5bGVzO1xuICB9XG4gIGNvbnN0IHZhbHVlID0gaW5saW5lU3R5bGVzIHx8IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0W3Byb3h5VGFyZ2V0U3ltYm9sXSB8fCB0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuICByZXR1cm4gdmFsdWUgPT09ICdhdXRvJyA/ICcwJyA6IHZhbHVlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1RhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcE5hbWVcbiAqIEBwYXJhbSB7dHdlZW5UeXBlc30gW3R3ZWVuVHlwZV1cbiAqIEBwYXJhbSB7T2JqZWN0fHZvaWR9IFthbmltYXRpb25JbmxpbmVTdHlsZXNdXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICovXG5jb25zdCBnZXRPcmlnaW5hbEFuaW1hdGFibGVWYWx1ZSA9ICh0YXJnZXQsIHByb3BOYW1lLCB0d2VlblR5cGUsIGFuaW1hdGlvbklubGluZVN0eWxlcykgPT4ge1xuICBjb25zdCB0eXBlID0gIWlzVW5kKHR3ZWVuVHlwZSkgPyB0d2VlblR5cGUgOiBnZXRUd2VlblR5cGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gIHJldHVybiB0eXBlID09PSB0d2VlblR5cGVzLk9CSkVDVCA/IHRhcmdldFtwcm9wTmFtZV0gfHwgMCA6XG4gICAgICAgICB0eXBlID09PSB0d2VlblR5cGVzLkFUVFJJQlVURSA/IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLmdldEF0dHJpYnV0ZShwcm9wTmFtZSkgOlxuICAgICAgICAgdHlwZSA9PT0gdHdlZW5UeXBlcy5UUkFOU0ZPUk0gPyBwYXJzZUlubGluZVRyYW5zZm9ybXMoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCksIHByb3BOYW1lLCBhbmltYXRpb25JbmxpbmVTdHlsZXMpIDpcbiAgICAgICAgIHR5cGUgPT09IHR3ZWVuVHlwZXMuQ1NTX1ZBUiA/IGdldENTU1ZhbHVlKC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLCBwcm9wTmFtZSwgYW5pbWF0aW9uSW5saW5lU3R5bGVzKS50cmltU3RhcnQoKSA6XG4gICAgICAgICBnZXRDU1NWYWx1ZSgvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KSwgcHJvcE5hbWUsIGFuaW1hdGlvbklubGluZVN0eWxlcyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0geFxuICogQHBhcmFtICB7TnVtYmVyfSB5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IG9wZXJhdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGdldFJlbGF0aXZlVmFsdWUgPSAoeCwgeSwgb3BlcmF0b3IpID0+IHtcbiAgcmV0dXJuIG9wZXJhdG9yID09PSAnLScgPyB4IC0geSA6XG4gICAgICAgICBvcGVyYXRvciA9PT0gJysnID8geCArIHkgOlxuICAgICAgICAgeCAqIHk7XG59O1xuXG4vKiogQHJldHVybiB7VHdlZW5EZWNvbXBvc2VkVmFsdWV9ICovXG5jb25zdCBjcmVhdGVEZWNvbXBvc2VkVmFsdWVUYXJnZXRPYmplY3QgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLyoqIEB0eXBlIHt2YWx1ZVR5cGVzfSAqL1xuICAgIHQ6IHZhbHVlVHlwZXMuTlVNQkVSLFxuICAgIG46IDAsXG4gICAgdTogbnVsbCxcbiAgICBvOiBudWxsLFxuICAgIGQ6IG51bGwsXG4gICAgczogbnVsbCxcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtTdHJpbmd8TnVtYmVyfSByYXdWYWx1ZVxuICogQHBhcmFtICB7VHdlZW5EZWNvbXBvc2VkVmFsdWV9IHRhcmdldE9iamVjdFxuICogQHJldHVybiB7VHdlZW5EZWNvbXBvc2VkVmFsdWV9XG4gKi9cbmNvbnN0IGRlY29tcG9zZVJhd1ZhbHVlID0gKHJhd1ZhbHVlLCB0YXJnZXRPYmplY3QpID0+IHtcbiAgLyoqIEB0eXBlIHt2YWx1ZVR5cGVzfSAqL1xuICB0YXJnZXRPYmplY3QudCA9IHZhbHVlVHlwZXMuTlVNQkVSO1xuICB0YXJnZXRPYmplY3QubiA9IDA7XG4gIHRhcmdldE9iamVjdC51ID0gbnVsbDtcbiAgdGFyZ2V0T2JqZWN0Lm8gPSBudWxsO1xuICB0YXJnZXRPYmplY3QuZCA9IG51bGw7XG4gIHRhcmdldE9iamVjdC5zID0gbnVsbDtcbiAgaWYgKCFyYXdWYWx1ZSkgcmV0dXJuIHRhcmdldE9iamVjdDtcbiAgY29uc3QgbnVtID0gK3Jhd1ZhbHVlO1xuICBpZiAoIWlzTmFOKG51bSkpIHtcbiAgICAvLyBJdCdzIGEgbnVtYmVyXG4gICAgdGFyZ2V0T2JqZWN0Lm4gPSBudW07XG4gICAgcmV0dXJuIHRhcmdldE9iamVjdDtcbiAgfSBlbHNlIHtcbiAgICAvLyBsZXQgc3RyID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKHJhd1ZhbHVlKS50cmltKCk7XG4gICAgbGV0IHN0ciA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhyYXdWYWx1ZSk7XG4gICAgLy8gUGFyc2luZyBvcGVyYXRvcnMgKCs9LCAtPSwgKj0pIG1hbnVhbGx5IGlzIG11Y2ggZmFzdGVyIHRoYW4gdXNpbmcgcmVnZXggaGVyZVxuICAgIGlmIChzdHJbMV0gPT09ICc9Jykge1xuICAgICAgdGFyZ2V0T2JqZWN0Lm8gPSBzdHJbMF07XG4gICAgICBzdHIgPSBzdHIuc2xpY2UoMik7XG4gICAgfVxuICAgIC8vIFNraXAgZXhlYyByZWdleCBpZiB0aGUgdmFsdWUgdHlwZSBpcyBjb21wbGV4IG9yIGNvbG9yIHRvIGF2b2lkIGxvbmcgcmVnZXggYmFja3RyYWNraW5nXG4gICAgY29uc3QgdW5pdE1hdGNoID0gc3RyLmluY2x1ZGVzKCcgJykgPyBmYWxzZSA6IHVuaXRzRXhlY1JneC5leGVjKHN0cik7XG4gICAgaWYgKHVuaXRNYXRjaCkge1xuICAgICAgLy8gSGFzIGEgbnVtYmVyIGFuZCBhIHVuaXRcbiAgICAgIHRhcmdldE9iamVjdC50ID0gdmFsdWVUeXBlcy5VTklUO1xuICAgICAgdGFyZ2V0T2JqZWN0Lm4gPSArdW5pdE1hdGNoWzFdO1xuICAgICAgdGFyZ2V0T2JqZWN0LnUgPSB1bml0TWF0Y2hbMl07XG4gICAgICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0T2JqZWN0Lm8pIHtcbiAgICAgIC8vIEhhcyBhbiBvcGVyYXRvciAoKz0sIC09LCAqPSlcbiAgICAgIHRhcmdldE9iamVjdC5uID0gK3N0cjtcbiAgICAgIHJldHVybiB0YXJnZXRPYmplY3Q7XG4gICAgfSBlbHNlIGlmIChpc0NvbChzdHIpKSB7XG4gICAgICAvLyBJcyBhIGNvbG9yXG4gICAgICB0YXJnZXRPYmplY3QudCA9IHZhbHVlVHlwZXMuQ09MT1I7XG4gICAgICB0YXJnZXRPYmplY3QuZCA9IGNvbnZlcnRDb2xvclN0cmluZ1ZhbHVlc1RvUmdiYUFycmF5KHN0cik7XG4gICAgICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJcyBhIG1vcmUgY29tcGxleCBzdHJpbmcgKGdlbmVyYWxseSBzdmcgY29vcmRzLCBjYWxjKCkgb3IgZmlsdGVycyBDU1MgdmFsdWVzKVxuICAgICAgY29uc3QgbWF0Y2hlZE51bWJlcnMgPSBzdHIubWF0Y2goZGlnaXRXaXRoRXhwb25lbnRSZ3gpO1xuICAgICAgdGFyZ2V0T2JqZWN0LnQgPSB2YWx1ZVR5cGVzLkNPTVBMRVg7XG4gICAgICB0YXJnZXRPYmplY3QuZCA9IG1hdGNoZWROdW1iZXJzID8gbWF0Y2hlZE51bWJlcnMubWFwKE51bWJlcikgOiBbXTtcbiAgICAgIHRhcmdldE9iamVjdC5zID0gc3RyLnNwbGl0KGRpZ2l0V2l0aEV4cG9uZW50Umd4KSB8fCBbXTtcbiAgICAgIHJldHVybiB0YXJnZXRPYmplY3Q7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1R3ZWVufSB0d2VlblxuICogQHBhcmFtICB7VHdlZW5EZWNvbXBvc2VkVmFsdWV9IHRhcmdldE9iamVjdFxuICogQHJldHVybiB7VHdlZW5EZWNvbXBvc2VkVmFsdWV9XG4gKi9cbmNvbnN0IGRlY29tcG9zZVR3ZWVuVmFsdWUgPSAodHdlZW4sIHRhcmdldE9iamVjdCkgPT4ge1xuICB0YXJnZXRPYmplY3QudCA9IHR3ZWVuLl92YWx1ZVR5cGU7XG4gIHRhcmdldE9iamVjdC5uID0gdHdlZW4uX3RvTnVtYmVyO1xuICB0YXJnZXRPYmplY3QudSA9IHR3ZWVuLl91bml0O1xuICB0YXJnZXRPYmplY3QubyA9IG51bGw7XG4gIHRhcmdldE9iamVjdC5kID0gY2xvbmVBcnJheSh0d2Vlbi5fdG9OdW1iZXJzKTtcbiAgdGFyZ2V0T2JqZWN0LnMgPSBjbG9uZUFycmF5KHR3ZWVuLl9zdHJpbmdzKTtcbiAgcmV0dXJuIHRhcmdldE9iamVjdDtcbn07XG5cbmNvbnN0IGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlID0gY3JlYXRlRGVjb21wb3NlZFZhbHVlVGFyZ2V0T2JqZWN0KCk7XG5cblxuXG5cbmNvbnN0IGxvb2t1cHMgPSB7XG4gIC8qKiBAdHlwZSB7VHdlZW5SZXBsYWNlTG9va3Vwc30gKi9cbiAgX3JlcDogbmV3IFdlYWtNYXAoKSxcbiAgLyoqIEB0eXBlIHtUd2VlbkFkZGl0aXZlTG9va3Vwc30gKi9cbiAgX2FkZDogbmV3IE1hcCgpLFxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXR9IHRhcmdldFxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHBhcmFtICB7U3RyaW5nfSBsb29rdXBcbiAqIEByZXR1cm4ge1R3ZWVuUHJvcGVydHlTaWJsaW5nc31cbiAqL1xuY29uc3QgZ2V0VHdlZW5TaWJsaW5ncyA9ICh0YXJnZXQsIHByb3BlcnR5LCBsb29rdXAgPSAnX3JlcCcpID0+IHtcbiAgY29uc3QgbG9va3VwTWFwID0gbG9va3Vwc1tsb29rdXBdO1xuICBsZXQgdGFyZ2V0TG9va3VwID0gbG9va3VwTWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIXRhcmdldExvb2t1cCkge1xuICAgIHRhcmdldExvb2t1cCA9IHt9O1xuICAgIGxvb2t1cE1hcC5zZXQodGFyZ2V0LCB0YXJnZXRMb29rdXApO1xuICB9XG4gIHJldHVybiB0YXJnZXRMb29rdXBbcHJvcGVydHldID8gdGFyZ2V0TG9va3VwW3Byb3BlcnR5XSA6IHRhcmdldExvb2t1cFtwcm9wZXJ0eV0gPSB7XG4gICAgX2hlYWQ6IG51bGwsXG4gICAgX3RhaWw6IG51bGwsXG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtICB7VHdlZW59IHBcbiAqIEBwYXJhbSAge1R3ZWVufSBjXG4gKiBAcmV0dXJuIHtOdW1iZXJ8Qm9vbGVhbn1cbiAqL1xuY29uc3QgYWRkVHdlZW5Tb3J0TWV0aG9kID0gKHAsIGMpID0+IHtcbiAgcmV0dXJuIHAuX2lzT3ZlcnJpZGRlbiB8fCBwLl9hYnNvbHV0ZVN0YXJ0VGltZSA+IGMuX2Fic29sdXRlU3RhcnRUaW1lO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1R3ZWVufSB0d2VlblxuICovXG5jb25zdCBvdmVycmlkZVR3ZWVuID0gdHdlZW4gPT4ge1xuICB0d2Vlbi5faXNPdmVybGFwcGVkID0gMTtcbiAgdHdlZW4uX2lzT3ZlcnJpZGRlbiA9IDE7XG4gIHR3ZWVuLl9jaGFuZ2VEdXJhdGlvbiA9IG1pblZhbHVlO1xuICB0d2Vlbi5fY3VycmVudFRpbWUgPSBtaW5WYWx1ZTtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VHdlZW59IHR3ZWVuXG4gKiBAcGFyYW0gIHtUd2VlblByb3BlcnR5U2libGluZ3N9IHNpYmxpbmdzXG4gKiBAcmV0dXJuIHtUd2Vlbn1cbiAqL1xuY29uc3QgY29tcG9zZVR3ZWVuID0gKHR3ZWVuLCBzaWJsaW5ncykgPT4ge1xuXG4gIGNvbnN0IHR3ZWVuQ29tcG9zaXRpb25UeXBlID0gdHdlZW4uX2NvbXBvc2l0aW9uO1xuXG4gIC8vIEhhbmRsZSByZXBsYWNlZCB0d2VlbnNcblxuICBpZiAodHdlZW5Db21wb3NpdGlvblR5cGUgPT09IGNvbXBvc2l0aW9uVHlwZXMucmVwbGFjZSkge1xuXG4gICAgY29uc3QgdHdlZW5BYnNTdGFydFRpbWUgPSB0d2Vlbi5fYWJzb2x1dGVTdGFydFRpbWU7XG5cbiAgICBhZGRDaGlsZChzaWJsaW5ncywgdHdlZW4sIGFkZFR3ZWVuU29ydE1ldGhvZCwgJ19wcmV2UmVwJywgJ19uZXh0UmVwJyk7XG5cbiAgICBjb25zdCBwcmV2U2libGluZyA9IHR3ZWVuLl9wcmV2UmVwO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBwcmV2aW91cyBzaWJsaW5ncyBmb3IgY29tcG9zaXRpb24gcmVwbGFjZSB0d2VlbnNcblxuICAgIGlmIChwcmV2U2libGluZykge1xuXG4gICAgICBjb25zdCBwcmV2UGFyZW50ID0gcHJldlNpYmxpbmcucGFyZW50O1xuICAgICAgY29uc3QgcHJldkFic0VuZFRpbWUgPSBwcmV2U2libGluZy5fYWJzb2x1dGVTdGFydFRpbWUgKyBwcmV2U2libGluZy5fY2hhbmdlRHVyYXRpb247XG5cbiAgICAgIC8vIEhhbmRsZSBsb29wZWQgYW5pbWF0aW9ucyB0d2VlblxuXG4gICAgICBpZiAoXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcmV2aW91cyB0d2VlbiBpcyBmcm9tIGEgZGlmZmVyZW50IGFuaW1hdGlvblxuICAgICAgICB0d2Vlbi5wYXJlbnQuaWQgIT09IHByZXZQYXJlbnQuaWQgJiZcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGFuaW1hdGlvbiBoYXMgbG9vcHNcbiAgICAgICAgcHJldlBhcmVudC5pdGVyYXRpb25Db3VudD4gMSAmJlxuICAgICAgICAvLyBDaGVjayBpZiBfYWJzb2x1dGVDaGFuZ2VFbmRUaW1lIG9mIGxhc3QgbG9vcCBvdmVybGFwcyB0aGUgY3VycmVudCB0d2VlblxuICAgICAgICBwcmV2QWJzRW5kVGltZSArIChwcmV2UGFyZW50LmR1cmF0aW9uIC0gcHJldlBhcmVudC5pdGVyYXRpb25EdXJhdGlvbikgPiB0d2VlbkFic1N0YXJ0VGltZVxuICAgICAgKSB7XG5cbiAgICAgICAgLy8gVE9ETzogRmluZCBhIHdheSB0byBvbmx5IG92ZXJyaWRlIHRoZSBpdGVyYXRpb25zIG92ZXJsYXBwaW5nIHdpdGggdGhlIHR3ZWVuXG4gICAgICAgIG92ZXJyaWRlVHdlZW4ocHJldlNpYmxpbmcpO1xuXG4gICAgICAgIGxldCBwcmV2UHJldlNpYmxpbmcgPSBwcmV2U2libGluZy5fcHJldlJlcDtcblxuICAgICAgICAvLyBJZiB0aGUgdHdlZW4gd2FzIHBhcnQgb2YgYSBzZXQgb2Yga2V5ZnJhbWVzLCBvdmVycmlkZSBpdHMgc2libGluZ3NcbiAgICAgICAgd2hpbGUgKHByZXZQcmV2U2libGluZyAmJiBwcmV2UHJldlNpYmxpbmcucGFyZW50LmlkID09PSBwcmV2UGFyZW50LmlkKSB7XG4gICAgICAgICAgb3ZlcnJpZGVUd2VlbihwcmV2UHJldlNpYmxpbmcpO1xuICAgICAgICAgIHByZXZQcmV2U2libGluZyA9IHByZXZQcmV2U2libGluZy5fcHJldlJlcDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFic29sdXRlVXBkYXRlU3RhcnRUaW1lID0gdHdlZW5BYnNTdGFydFRpbWUgLSB0d2Vlbi5fZGVsYXk7XG5cbiAgICAgIGlmIChwcmV2QWJzRW5kVGltZSA+IGFic29sdXRlVXBkYXRlU3RhcnRUaW1lKSB7XG5cbiAgICAgICAgY29uc3QgcHJldkNoYW5nZVN0YXJ0VGltZSA9IHByZXZTaWJsaW5nLl9zdGFydFRpbWU7XG4gICAgICAgIGNvbnN0IHByZXZUTE9mZnNldCA9IHByZXZBYnNFbmRUaW1lIC0gKHByZXZDaGFuZ2VTdGFydFRpbWUgKyBwcmV2U2libGluZy5fdXBkYXRlRHVyYXRpb24pO1xuXG4gICAgICAgIHByZXZTaWJsaW5nLl9jaGFuZ2VEdXJhdGlvbiA9IGFic29sdXRlVXBkYXRlU3RhcnRUaW1lIC0gcHJldlRMT2Zmc2V0IC0gcHJldkNoYW5nZVN0YXJ0VGltZTtcbiAgICAgICAgcHJldlNpYmxpbmcuX2N1cnJlbnRUaW1lID0gcHJldlNpYmxpbmcuX2NoYW5nZUR1cmF0aW9uO1xuICAgICAgICBwcmV2U2libGluZy5faXNPdmVybGFwcGVkID0gMTtcblxuICAgICAgICBpZiAocHJldlNpYmxpbmcuX2NoYW5nZUR1cmF0aW9uIDwgbWluVmFsdWUpIHtcbiAgICAgICAgICBvdmVycmlkZVR3ZWVuKHByZXZTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQYXVzZSAoYW5kIGNhbmNlbCkgdGhlIHBhcmVudCBpZiBpdCBvbmx5IGNvbnRhaW5zIG92ZXJsYXBwZWQgdHdlZW5zXG5cbiAgICAgIGxldCBwYXVzZVByZXZQYXJlbnRBbmltYXRpb24gPSB0cnVlO1xuXG4gICAgICBmb3JFYWNoQ2hpbGRyZW4ocHJldlBhcmVudCwgKC8qKiBAdHlwZSBUd2VlbiAqL3QpID0+IHtcbiAgICAgICAgaWYgKCF0Ll9pc092ZXJsYXBwZWQpIHBhdXNlUHJldlBhcmVudEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXVzZVByZXZQYXJlbnRBbmltYXRpb24pIHtcbiAgICAgICAgY29uc3QgcHJldlBhcmVudFRMID0gcHJldlBhcmVudC5wYXJlbnQ7XG4gICAgICAgIGlmIChwcmV2UGFyZW50VEwpIHtcbiAgICAgICAgICBsZXQgcGF1c2VQcmV2UGFyZW50VEwgPSB0cnVlO1xuICAgICAgICAgIGZvckVhY2hDaGlsZHJlbihwcmV2UGFyZW50VEwsICgvKiogQHR5cGUgSlNBbmltYXRpb24gKi9hKSA9PiB7XG4gICAgICAgICAgICBpZiAoYSAhPT0gcHJldlBhcmVudCkge1xuICAgICAgICAgICAgICBmb3JFYWNoQ2hpbGRyZW4oYSwgKC8qKiBAdHlwZSBUd2VlbiAqL3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXQuX2lzT3ZlcmxhcHBlZCkgcGF1c2VQcmV2UGFyZW50VEwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHBhdXNlUHJldlBhcmVudFRMKSB7XG4gICAgICAgICAgICBwcmV2UGFyZW50VEwuY2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZQYXJlbnQuY2FuY2VsKCk7XG4gICAgICAgICAgLy8gUHJldmlvdXNseSwgY2FsbGluZyAuY2FuY2VsKCkgb24gYSB0aW1lbGluZSBjaGlsZCB3b3VsZCBhZmZlY3QgdGhlIHJlbmRlciBvcmRlciBvZiBvdGhlciBjaGlsZHJlblxuICAgICAgICAgIC8vIFdvcmtlZCBhcm91bmQgdGhpcyBieSBtYXJraW5nIGl0IGFzIC5jb21wbGV0ZWQgYW5kIHVzaW5nIC5wYXVzZSgpIGZvciBzYWZlIHJlbW92YWwgaW4gdGhlIGVuZ2luZSBsb29wXG4gICAgICAgICAgLy8gVGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIHNpbmNlIHRpbWVsaW5lIHR3ZWVuIGNvbXBvc2l0aW9uIGlzIG5vdyBoYW5kbGVkIHNlcGFyYXRseVxuICAgICAgICAgIC8vIEtlZXBpbmcgdGhpcyBoZXJlIGZvciByZWZlcmVuY2VcbiAgICAgICAgICAvLyBwcmV2UGFyZW50LmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgLy8gcHJldlBhcmVudC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBsZXQgbmV4dFNpYmxpbmcgPSB0d2Vlbi5fbmV4dFJlcDtcblxuICAgIC8vIC8vIEFsbCB0aGUgbmV4dCBzaWJsaW5ncyBhcmUgYXV0b21hdGljYWxseSBvdmVycmlkZGVuXG5cbiAgICAvLyBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcuX2Fic29sdXRlU3RhcnRUaW1lID49IHR3ZWVuQWJzU3RhcnRUaW1lKSB7XG4gICAgLy8gICB3aGlsZSAobmV4dFNpYmxpbmcpIHtcbiAgICAvLyAgICAgb3ZlcnJpZGVUd2VlbihuZXh0U2libGluZyk7XG4gICAgLy8gICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcuX25leHRSZXA7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLl9hYnNvbHV0ZVN0YXJ0VGltZSA8IHR3ZWVuQWJzU3RhcnRUaW1lKSB7XG4gICAgLy8gICB3aGlsZSAobmV4dFNpYmxpbmcpIHtcbiAgICAvLyAgICAgb3ZlcnJpZGVUd2VlbihuZXh0U2libGluZyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHR3ZWVuLmlkLCBuZXh0U2libGluZy5pZCk7XG4gICAgLy8gICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcuX25leHRSZXA7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gIC8vIEhhbmRsZSBhZGRpdGl2ZSB0d2VlbnMgY29tcG9zaXRpb25cblxuICB9IGVsc2UgaWYgKHR3ZWVuQ29tcG9zaXRpb25UeXBlID09PSBjb21wb3NpdGlvblR5cGVzLmJsZW5kKSB7XG5cbiAgICBjb25zdCBhZGRpdGl2ZVR3ZWVuU2libGluZ3MgPSBnZXRUd2VlblNpYmxpbmdzKHR3ZWVuLnRhcmdldCwgdHdlZW4ucHJvcGVydHksICdfYWRkJyk7XG4gICAgY29uc3QgYWRkaXRpdmVBbmltYXRpb24gPSBhZGRBZGRpdGl2ZUFuaW1hdGlvbihsb29rdXBzLl9hZGQpO1xuXG4gICAgbGV0IGxvb2t1cFR3ZWVuID0gYWRkaXRpdmVUd2VlblNpYmxpbmdzLl9oZWFkO1xuXG4gICAgaWYgKCFsb29rdXBUd2Vlbikge1xuICAgICAgbG9va3VwVHdlZW4gPSB7IC4uLnR3ZWVuIH07XG4gICAgICBsb29rdXBUd2Vlbi5fY29tcG9zaXRpb24gPSBjb21wb3NpdGlvblR5cGVzLnJlcGxhY2U7XG4gICAgICBsb29rdXBUd2Vlbi5fdXBkYXRlRHVyYXRpb24gPSBtaW5WYWx1ZTtcbiAgICAgIGxvb2t1cFR3ZWVuLl9zdGFydFRpbWUgPSAwO1xuICAgICAgbG9va3VwVHdlZW4uX251bWJlcnMgPSBjbG9uZUFycmF5KHR3ZWVuLl9mcm9tTnVtYmVycyk7XG4gICAgICBsb29rdXBUd2Vlbi5fbnVtYmVyID0gMDtcbiAgICAgIGxvb2t1cFR3ZWVuLl9uZXh0ID0gbnVsbDtcbiAgICAgIGxvb2t1cFR3ZWVuLl9wcmV2ID0gbnVsbDtcbiAgICAgIGFkZENoaWxkKGFkZGl0aXZlVHdlZW5TaWJsaW5ncywgbG9va3VwVHdlZW4pO1xuICAgICAgYWRkQ2hpbGQoYWRkaXRpdmVBbmltYXRpb24sIGxvb2t1cFR3ZWVuKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgb2YgVE8gdG8gRlJPTSBhbmQgc2V0IFRPIHRvIDBcblxuICAgIGNvbnN0IHRvTnVtYmVyID0gdHdlZW4uX3RvTnVtYmVyO1xuICAgIHR3ZWVuLl9mcm9tTnVtYmVyID0gbG9va3VwVHdlZW4uX2Zyb21OdW1iZXIgLSB0b051bWJlcjtcbiAgICB0d2Vlbi5fdG9OdW1iZXIgPSAwO1xuICAgIHR3ZWVuLl9udW1iZXJzID0gY2xvbmVBcnJheSh0d2Vlbi5fZnJvbU51bWJlcnMpO1xuICAgIHR3ZWVuLl9udW1iZXIgPSAwO1xuICAgIGxvb2t1cFR3ZWVuLl9mcm9tTnVtYmVyID0gdG9OdW1iZXI7XG5cbiAgICBpZiAodHdlZW4uX3RvTnVtYmVycykge1xuICAgICAgY29uc3QgdG9OdW1iZXJzID0gY2xvbmVBcnJheSh0d2Vlbi5fdG9OdW1iZXJzKTtcbiAgICAgIGlmICh0b051bWJlcnMpIHtcbiAgICAgICAgdG9OdW1iZXJzLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgdHdlZW4uX2Zyb21OdW1iZXJzW2ldID0gbG9va3VwVHdlZW4uX2Zyb21OdW1iZXJzW2ldIC0gdmFsdWU7XG4gICAgICAgICAgdHdlZW4uX3RvTnVtYmVyc1tpXSA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbG9va3VwVHdlZW4uX2Zyb21OdW1iZXJzID0gdG9OdW1iZXJzO1xuICAgIH1cblxuICAgIGFkZENoaWxkKGFkZGl0aXZlVHdlZW5TaWJsaW5ncywgdHdlZW4sIG51bGwsICdfcHJldkFkZCcsICdfbmV4dEFkZCcpO1xuXG4gIH1cblxuICByZXR1cm4gdHdlZW47XG5cbn07XG5cbi8qKlxuICogQHBhcmFtICB7VHdlZW59IHR3ZWVuXG4gKiBAcmV0dXJuIHtUd2Vlbn1cbiAqL1xuY29uc3QgcmVtb3ZlVHdlZW5TbGlibGluZ3MgPSB0d2VlbiA9PiB7XG4gIGNvbnN0IHR3ZWVuQ29tcG9zaXRpb24gPSB0d2Vlbi5fY29tcG9zaXRpb247XG4gIGlmICh0d2VlbkNvbXBvc2l0aW9uICE9PSBjb21wb3NpdGlvblR5cGVzLm5vbmUpIHtcbiAgICBjb25zdCB0d2VlblRhcmdldCA9IHR3ZWVuLnRhcmdldDtcbiAgICBjb25zdCB0d2VlblByb3BlcnR5ID0gdHdlZW4ucHJvcGVydHk7XG4gICAgY29uc3QgcmVwbGFjZVR3ZWVuc0xvb2t1cCA9IGxvb2t1cHMuX3JlcDtcbiAgICBjb25zdCByZXBsYWNlVGFyZ2V0UHJvcHMgPSByZXBsYWNlVHdlZW5zTG9va3VwLmdldCh0d2VlblRhcmdldCk7XG4gICAgY29uc3QgdHdlZW5SZXBsYWNlU2libGluZ3MgPSByZXBsYWNlVGFyZ2V0UHJvcHNbdHdlZW5Qcm9wZXJ0eV07XG4gICAgcmVtb3ZlQ2hpbGQodHdlZW5SZXBsYWNlU2libGluZ3MsIHR3ZWVuLCAnX3ByZXZSZXAnLCAnX25leHRSZXAnKTtcbiAgICBpZiAodHdlZW5Db21wb3NpdGlvbiA9PT0gY29tcG9zaXRpb25UeXBlcy5ibGVuZCkge1xuICAgICAgY29uc3QgYWRkVHdlZW5zTG9va3VwID0gbG9va3Vwcy5fYWRkO1xuICAgICAgY29uc3QgYWRkVGFyZ2V0UHJvcHMgPSBhZGRUd2VlbnNMb29rdXAuZ2V0KHR3ZWVuVGFyZ2V0KTtcbiAgICAgIGlmICghYWRkVGFyZ2V0UHJvcHMpIHJldHVybjtcbiAgICAgIGNvbnN0IGFkZGl0aXZlVHdlZW5TaWJsaW5ncyA9IGFkZFRhcmdldFByb3BzW3R3ZWVuUHJvcGVydHldO1xuICAgICAgY29uc3QgYWRkaXRpdmVBbmltYXRpb24gPSBhZGRpdGl2ZS5hbmltYXRpb247XG4gICAgICByZW1vdmVDaGlsZChhZGRpdGl2ZVR3ZWVuU2libGluZ3MsIHR3ZWVuLCAnX3ByZXZBZGQnLCAnX25leHRBZGQnKTtcbiAgICAgIC8vIElmIG9ubHkgb25lIHR3ZWVuIGlzIGxlZnQgaW4gdGhlIGFkZGl0aXZlIGxvb2t1cCwgaXQncyB0aGUgdHdlZW4gbG9va3VwXG4gICAgICBjb25zdCBsb29rdXBUd2VlbiA9IGFkZGl0aXZlVHdlZW5TaWJsaW5ncy5faGVhZDtcbiAgICAgIGlmIChsb29rdXBUd2VlbiAmJiBsb29rdXBUd2VlbiA9PT0gYWRkaXRpdmVUd2VlblNpYmxpbmdzLl90YWlsKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkKGFkZGl0aXZlVHdlZW5TaWJsaW5ncywgbG9va3VwVHdlZW4sICdfcHJldkFkZCcsICdfbmV4dEFkZCcpO1xuICAgICAgICByZW1vdmVDaGlsZChhZGRpdGl2ZUFuaW1hdGlvbiwgbG9va3VwVHdlZW4pO1xuICAgICAgICBsZXQgc2hvdWxkQ2xlYW4gPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIGFkZFRhcmdldFByb3BzKSB7XG4gICAgICAgICAgaWYgKGFkZFRhcmdldFByb3BzW3Byb3BdLl9oZWFkKSB7XG4gICAgICAgICAgICBzaG91bGRDbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRDbGVhbikge1xuICAgICAgICAgIGFkZFR3ZWVuc0xvb2t1cC5kZWxldGUodHdlZW5UYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0d2Vlbjtcbn07XG5cblxuXG5cbi8qKlxuICogQHBhcmFtICB7VGltZXJ9IHRpbWVyXG4gKiBAcmV0dXJuIHtUaW1lcn1cbiAqL1xuY29uc3QgcmVzZXRUaW1lclByb3BlcnRpZXMgPSB0aW1lciA9PiB7XG4gIHRpbWVyLnBhdXNlZCA9IHRydWU7XG4gIHRpbWVyLmJlZ2FuID0gZmFsc2U7XG4gIHRpbWVyLmNvbXBsZXRlZCA9IGZhbHNlO1xuICByZXR1cm4gdGltZXI7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RpbWVyfSB0aW1lclxuICogQHJldHVybiB7VGltZXJ9XG4gKi9cbmNvbnN0IHJldml2ZVRpbWVyID0gdGltZXIgPT4ge1xuICBpZiAoIXRpbWVyLl9jYW5jZWxsZWQpIHJldHVybiB0aW1lcjtcbiAgaWYgKHRpbWVyLl9oYXNDaGlsZHJlbikge1xuICAgIGZvckVhY2hDaGlsZHJlbih0aW1lciwgcmV2aXZlVGltZXIpO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2hDaGlsZHJlbih0aW1lciwgKC8qKiBAdHlwZSB7VHdlZW59IHR3ZWVuKi90d2VlbikgPT4ge1xuICAgICAgaWYgKHR3ZWVuLl9jb21wb3NpdGlvbiAhPT0gY29tcG9zaXRpb25UeXBlcy5ub25lKSB7XG4gICAgICAgIGNvbXBvc2VUd2Vlbih0d2VlbiwgZ2V0VHdlZW5TaWJsaW5ncyh0d2Vlbi50YXJnZXQsIHR3ZWVuLnByb3BlcnR5KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdGltZXIuX2NhbmNlbGxlZCA9IDA7XG4gIHJldHVybiB0aW1lcjtcbn07XG5cbmxldCB0aW1lcklkID0gMDtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIHVzZWQgdG8gY3JlYXRlIFRpbWVycywgQW5pbWF0aW9ucyBhbmQgVGltZWxpbmVzXG4gKi9cbmNsYXNzIFRpbWVyIGV4dGVuZHMgQ2xvY2sge1xuICAvKipcbiAgICogQHBhcmFtIHtUaW1lclBhcmFtc30gW3BhcmFtZXRlcnNdXG4gICAqIEBwYXJhbSB7VGltZWxpbmV9IFtwYXJlbnRdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcGFyZW50UG9zaXRpb25dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30sIHBhcmVudCA9IG51bGwsIHBhcmVudFBvc2l0aW9uID0gMCkge1xuXG4gICAgc3VwZXIoMCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGRlbGF5LFxuICAgICAgZHVyYXRpb24sXG4gICAgICByZXZlcnNlZCxcbiAgICAgIGFsdGVybmF0ZSxcbiAgICAgIGxvb3AsXG4gICAgICBsb29wRGVsYXksXG4gICAgICBhdXRvcGxheSxcbiAgICAgIGZyYW1lUmF0ZSxcbiAgICAgIHBsYXliYWNrUmF0ZSxcbiAgICAgIG9uQ29tcGxldGUsXG4gICAgICBvbkxvb3AsXG4gICAgICBvblBhdXNlLFxuICAgICAgb25CZWdpbixcbiAgICAgIG9uQmVmb3JlVXBkYXRlLFxuICAgICAgb25VcGRhdGUsXG4gICAgfSA9IHBhcmFtZXRlcnM7XG5cbiAgICBpZiAoZ2xvYmFscy5zY29wZSkgZ2xvYmFscy5zY29wZS5yZXZlcnRpYmxlcy5wdXNoKHRoaXMpO1xuXG4gICAgY29uc3QgdGltZXJJbml0VGltZSA9IHBhcmVudCA/IDAgOiBlbmdpbmUuX2VsYXBzZWRUaW1lO1xuICAgIGNvbnN0IHRpbWVyRGVmYXVsdHMgPSBwYXJlbnQgPyBwYXJlbnQuZGVmYXVsdHMgOiBnbG9iYWxzLmRlZmF1bHRzO1xuICAgIGNvbnN0IHRpbWVyRGVsYXkgPSAvKiogQHR5cGUge051bWJlcn0gKi8oaXNGbmMoZGVsYXkpIHx8IGlzVW5kKGRlbGF5KSA/IHRpbWVyRGVmYXVsdHMuZGVsYXkgOiArZGVsYXkpO1xuICAgIGNvbnN0IHRpbWVyRHVyYXRpb24gPSBpc0ZuYyhkdXJhdGlvbikgfHwgaXNVbmQoZHVyYXRpb24pID8gSW5maW5pdHkgOiArZHVyYXRpb247XG4gICAgY29uc3QgdGltZXJMb29wID0gc2V0VmFsdWUobG9vcCwgdGltZXJEZWZhdWx0cy5sb29wKTtcbiAgICBjb25zdCB0aW1lckxvb3BEZWxheSA9IHNldFZhbHVlKGxvb3BEZWxheSwgdGltZXJEZWZhdWx0cy5sb29wRGVsYXkpO1xuICAgIGNvbnN0IHRpbWVySXRlcmF0aW9uQ291bnQgPSB0aW1lckxvb3AgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJMb29wID09PSBJbmZpbml0eSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUge051bWJlcn0gKi8odGltZXJMb29wKSA8IDAgPyBJbmZpbml0eSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0aW1lckxvb3ApICsgMTtcblxuICAgIGxldCBvZmZzZXRQb3NpdGlvbiA9IDA7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBvZmZzZXRQb3NpdGlvbiA9IHBhcmVudFBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RhcnRUaW1lID0gbm93KCk7XG4gICAgICAvLyBNYWtlIHN1cmUgdG8gdGljayB0aGUgZW5naW5lIG9uY2UgaWYgc3VzcGVuZGVkIHRvIGF2b2lkIGJpZyBnYXBzIHdpdGggdGhlIGZvbGxvd2luZyBvZmZzZXRQb3NpdGlvbiBjYWxjdWxhdGlvblxuICAgICAgaWYgKGVuZ2luZS5wYXVzZWQpIHtcbiAgICAgICAgZW5naW5lLnJlcXVlc3RUaWNrKHN0YXJ0VGltZSk7XG4gICAgICAgIHN0YXJ0VGltZSA9IGVuZ2luZS5fZWxhcHNlZFRpbWU7XG4gICAgICB9XG4gICAgICBvZmZzZXRQb3NpdGlvbiA9IHN0YXJ0VGltZSAtIGVuZ2luZS5fc3RhcnRUaW1lO1xuICAgIH1cblxuICAgIC8vIFRpbWVyJ3MgcGFyYW1ldGVyc1xuICAgIHRoaXMuaWQgPSAhaXNVbmQoaWQpID8gaWQgOiArK3RpbWVySWQ7XG4gICAgLyoqIEB0eXBlIHtUaW1lbGluZX0gKi9cbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAvLyBUb3RhbCBkdXJhdGlvbiBvZiB0aGUgdGltZXJcbiAgICB0aGlzLmR1cmF0aW9uID0gY2xhbXBJbmZpbml0eSgoKHRpbWVyRHVyYXRpb24gKyB0aW1lckxvb3BEZWxheSkgKiB0aW1lckl0ZXJhdGlvbkNvdW50KSAtIHRpbWVyTG9vcERlbGF5KSB8fCBtaW5WYWx1ZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5iYWNrd2FyZHMgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmJlZ2FuID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uQmVnaW4gPSBvbkJlZ2luIHx8IHRpbWVyRGVmYXVsdHMub25CZWdpbjtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25CZWZvcmVVcGRhdGUgPSBvbkJlZm9yZVVwZGF0ZSB8fCB0aW1lckRlZmF1bHRzLm9uQmVmb3JlVXBkYXRlO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IG9uVXBkYXRlIHx8IHRpbWVyRGVmYXVsdHMub25VcGRhdGU7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uTG9vcCA9IG9uTG9vcCB8fCB0aW1lckRlZmF1bHRzLm9uTG9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25QYXVzZSA9IG9uUGF1c2UgfHwgdGltZXJEZWZhdWx0cy5vblBhdXNlO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZSB8fCB0aW1lckRlZmF1bHRzLm9uQ29tcGxldGU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5pdGVyYXRpb25EdXJhdGlvbiA9IHRpbWVyRHVyYXRpb247IC8vIER1cmF0aW9uIG9mIG9uZSBsb29wXG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5pdGVyYXRpb25Db3VudCA9IHRpbWVySXRlcmF0aW9uQ291bnQ7IC8vIE51bWJlciBvZiBsb29wc1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbnxTY3JvbGxPYnNlcnZlcn0gKi9cbiAgICB0aGlzLl9hdXRvcGxheSA9IHBhcmVudCA/IGZhbHNlIDogc2V0VmFsdWUoYXV0b3BsYXksIHRpbWVyRGVmYXVsdHMuYXV0b3BsYXkpO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX29mZnNldCA9IG9mZnNldFBvc2l0aW9uO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2RlbGF5ID0gdGltZXJEZWxheTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9sb29wRGVsYXkgPSB0aW1lckxvb3BEZWxheTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9pdGVyYXRpb25UaW1lID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9jdXJyZW50SXRlcmF0aW9uID0gMDsgLy8gQ3VycmVudCBsb29wIGluZGV4XG4gICAgLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi9cbiAgICB0aGlzLl9yZXNvbHZlID0gbm9vcDsgLy8gVXNlZCBieSAudGhlbigpXG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9yZXZlcnNlZCA9ICtzZXRWYWx1ZShyZXZlcnNlZCwgdGltZXJEZWZhdWx0cy5yZXZlcnNlZCk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fcmV2ZXJzZSA9IHRoaXMuX3JldmVyc2VkO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2NhbmNlbGxlZCA9IDA7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuX2FsdGVybmF0ZSA9IHNldFZhbHVlKGFsdGVybmF0ZSwgdGltZXJEZWZhdWx0cy5hbHRlcm5hdGUpO1xuICAgIC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi9cbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1JlbmRlcmFibGV9ICovXG4gICAgdGhpcy5fbmV4dCA9IG51bGw7XG5cbiAgICAvLyBDbG9jaydzIHBhcmFtZXRlcnNcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9lbGFwc2VkVGltZSA9IHRpbWVySW5pdFRpbWU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fc3RhcnRUaW1lID0gdGltZXJJbml0VGltZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9sYXN0VGltZSA9IHRpbWVySW5pdFRpbWU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fZnBzID0gc2V0VmFsdWUoZnJhbWVSYXRlLCB0aW1lckRlZmF1bHRzLmZyYW1lUmF0ZSk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fc3BlZWQgPSBzZXRWYWx1ZShwbGF5YmFja1JhdGUsIHRpbWVyRGVmYXVsdHMucGxheWJhY2tSYXRlKTtcbiAgfVxuXG4gIGdldCBjYW5jZWxsZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fY2FuY2VsbGVkO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Qm9vbGVhbn0gY2FuY2VsbGVkICAqL1xuICBzZXQgY2FuY2VsbGVkKGNhbmNlbGxlZCkge1xuICAgIGNhbmNlbGxlZCA/IHRoaXMuY2FuY2VsKCkgOiB0aGlzLnJlc2V0KDEpLnBsYXkoKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gY2xhbXAocm91bmQodGhpcy5fY3VycmVudFRpbWUsIGdsb2JhbHMucHJlY2lzaW9uKSwgLXRoaXMuX2RlbGF5LCB0aGlzLmR1cmF0aW9uKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gdGltZSAgKi9cbiAgc2V0IGN1cnJlbnRUaW1lKHRpbWUpIHtcbiAgICBjb25zdCBwYXVzZWQgPSB0aGlzLnBhdXNlZDtcbiAgICAvLyBQYXVzaW5nIHRoZSB0aW1lciBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgdGltZSBqdW1wcyBvbiBhIHJ1bm5pbmcgaW5zdGFuY2VcbiAgICB0aGlzLnBhdXNlKCkuc2VlaygrdGltZSk7XG4gICAgaWYgKCFwYXVzZWQpIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICBnZXQgaXRlcmF0aW9uQ3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIHJvdW5kKHRoaXMuX2l0ZXJhdGlvblRpbWUsIGdsb2JhbHMucHJlY2lzaW9uKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gdGltZSAgKi9cbiAgc2V0IGl0ZXJhdGlvbkN1cnJlbnRUaW1lKHRpbWUpIHtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gKHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gKiB0aGlzLl9jdXJyZW50SXRlcmF0aW9uKSArIHRpbWU7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIGNsYW1wKHJvdW5kKHRoaXMuX2N1cnJlbnRUaW1lIC8gdGhpcy5kdXJhdGlvbiwgNSksIDAsIDEpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBwcm9ncmVzcyAgKi9cbiAgc2V0IHByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcztcbiAgfVxuXG4gIGdldCBpdGVyYXRpb25Qcm9ncmVzcygpIHtcbiAgICByZXR1cm4gY2xhbXAocm91bmQodGhpcy5faXRlcmF0aW9uVGltZSAvIHRoaXMuaXRlcmF0aW9uRHVyYXRpb24sIDUpLCAwLCAxKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gcHJvZ3Jlc3MgICovXG4gIHNldCBpdGVyYXRpb25Qcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIGNvbnN0IGl0ZXJhdGlvbkR1cmF0aW9uID0gdGhpcy5pdGVyYXRpb25EdXJhdGlvbjtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gKGl0ZXJhdGlvbkR1cmF0aW9uICogdGhpcy5fY3VycmVudEl0ZXJhdGlvbikgKyAoaXRlcmF0aW9uRHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gIH1cblxuICBnZXQgY3VycmVudEl0ZXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEl0ZXJhdGlvbjtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gaXRlcmF0aW9uQ291bnQgICovXG4gIHNldCBjdXJyZW50SXRlcmF0aW9uKGl0ZXJhdGlvbkNvdW50KSB7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9ICh0aGlzLml0ZXJhdGlvbkR1cmF0aW9uICogY2xhbXAoK2l0ZXJhdGlvbkNvdW50LCAwLCB0aGlzLml0ZXJhdGlvbkNvdW50IC0gMSkpO1xuICB9XG5cbiAgZ2V0IHJldmVyc2VkKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3JldmVyc2VkO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Qm9vbGVhbn0gcmV2ZXJzZSAgKi9cbiAgc2V0IHJldmVyc2VkKHJldmVyc2UpIHtcbiAgICByZXZlcnNlID8gdGhpcy5yZXZlcnNlKCkgOiB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc3BlZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHBsYXliYWNrUmF0ZSAgKi9cbiAgc2V0IHNwZWVkKHBsYXliYWNrUmF0ZSkge1xuICAgIHN1cGVyLnNwZWVkID0gcGxheWJhY2tSYXRlO1xuICAgIHRoaXMucmVzZXRUaW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSBpbnRlcm5hbFJlbmRlclxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVzZXQoaW50ZXJuYWxSZW5kZXIgPSAwKSB7XG4gICAgLy8gSWYgY2FuY2VsbGVkLCByZXZpdmUgdGhlIHRpbWVyIGJlZm9yZSByZW5kZXJpbmcgaW4gb3JkZXIgdG8gaGF2ZSBwcm9wZXJ0bHkgY29tcG9zZWQgdHdlZW5zIHNpYmxpbmdzXG4gICAgcmV2aXZlVGltZXIodGhpcyk7XG4gICAgaWYgKHRoaXMuX3JldmVyc2VkICYmICF0aGlzLl9yZXZlcnNlKSB0aGlzLnJldmVyc2VkID0gZmFsc2U7XG4gICAgLy8gUmVuZGVyaW5nIGJlZm9yZSB1cGRhdGluZyB0aGUgY29tcGxldGVkIGZsYWcgdG8gcHJldmVudCBza2lwcyBhbmQgdG8gbWFrZSBzdXJlIHRoZSBwcm9wZXJ0aWVzIGFyZSBub3Qgb3ZlcnJpZGRlblxuICAgIC8vIFNldHRpbmcgdGhlIGl0ZXJhdGlvblRpbWUgYXQgdGhlIGVuZCB0byBmb3JjZSB0aGUgcmVuZGVyaW5nIHRvIGhhcHBlbmQgYmFja3dhcmRzLCBvdGhlcndpc2UgY2FsbGluZyAucmVzZXQoKSBvbiBUaW1lbGluZXMgbWlnaHQgbm90IHJlbmRlciBjaGlsZHJlbiBpbiB0aGUgcmlnaHQgb3JkZXJcbiAgICAvLyBOT1RFOiBUaGlzIGlzIG9ubHkgcmVxdWlyZWQgZm9yIFRpbWVsaW5lcyBhbmQgbWlnaHQgYmUgYmV0dGVyIHRvIG1vdmUgdG8gdGhlIFRpbWVsaW5lIGNsYXNzP1xuICAgIHRoaXMuX2l0ZXJhdGlvblRpbWUgPSB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uO1xuICAgIC8vIFNldCB0aWNrTW9kZSB0byB0aWNrTW9kZXMuRk9SQ0UgdG8gZm9yY2UgcmVuZGVyaW5nXG4gICAgdGljayh0aGlzLCAwLCAxLCBpbnRlcm5hbFJlbmRlciwgdGlja01vZGVzLkZPUkNFKTtcbiAgICAvLyBSZXNldCB0aW1lciBwcm9wZXJ0aWVzIGFmdGVyIHJldml2ZSAvIHJlbmRlciB0byBtYWtlIHN1cmUgdGhlIHByb3BzIGFyZSBub3QgdXBkYXRlZCBhZ2FpblxuICAgIHJlc2V0VGltZXJQcm9wZXJ0aWVzKHRoaXMpO1xuICAgIC8vIEFsc28gcmVzZXQgY2hpbGRyZW4gcHJvcGVydGllc1xuICAgIGlmICh0aGlzLl9oYXNDaGlsZHJlbikge1xuICAgICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsIHJlc2V0VGltZXJQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSBpbnRlcm5hbFJlbmRlclxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgaW5pdChpbnRlcm5hbFJlbmRlciA9IDApIHtcbiAgICB0aGlzLmZwcyA9IHRoaXMuX2ZwcztcbiAgICB0aGlzLnNwZWVkID0gdGhpcy5fc3BlZWQ7XG4gICAgLy8gTWFudWFsbHkgY2FsbGluZyAuaW5pdCgpIG9uIHRpbWVsaW5lcyBzaG91bGQgcmVuZGVyIGFsbCBjaGlsZHJlbiBpbnRpYWwgc3RhdGVcbiAgICAvLyBGb3JjZXMgYWxsIGNoaWxkcmVuIHRvIHJlbmRlciBvbmNlIHRoZW4gcmVuZGVyIHRvIDAgd2hlbiByZXNldGVkXG4gICAgaWYgKCFpbnRlcm5hbFJlbmRlciAmJiB0aGlzLl9oYXNDaGlsZHJlbikge1xuICAgICAgdGljayh0aGlzLCB0aGlzLmR1cmF0aW9uLCAxLCBpbnRlcm5hbFJlbmRlciwgdGlja01vZGVzLkZPUkNFKTtcbiAgICB9XG4gICAgdGhpcy5yZXNldChpbnRlcm5hbFJlbmRlcik7XG4gICAgLy8gTWFrZSBzdXJlIHRvIHNldCBhdXRvcGxheSB0byBmYWxzZSB0byBjaGlsZCB0aW1lcnMgc28gaXQgZG9lc24ndCBhdHRlbXB0IHRvIGF1dG9wbGF5IC8gbGlua1xuICAgIGNvbnN0IGF1dG9wbGF5ID0gdGhpcy5fYXV0b3BsYXk7XG4gICAgaWYgKGF1dG9wbGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnJlc3VtZSgpO1xuICAgIH0gZWxzZSBpZiAoYXV0b3BsYXkgJiYgIWlzVW5kKC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovKGF1dG9wbGF5KS5saW5rZWQpKSB7XG4gICAgICAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqLyhhdXRvcGxheSkubGluayh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgcmVzZXRUaW1lKCkge1xuICAgIGNvbnN0IHRpbWVTY2FsZSA9IDEgLyAodGhpcy5fc3BlZWQgKiBlbmdpbmUuX3NwZWVkKTtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBub3coKSAtICh0aGlzLl9jdXJyZW50VGltZSArIHRoaXMuX2RlbGF5KSAqIHRpbWVTY2FsZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLm9uUGF1c2UodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgcmVzdW1lKCkge1xuICAgIGlmICghdGhpcy5wYXVzZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgLy8gV2UgY2FuIHNhZmVseSBpbWVkaWF0bHkgcmVuZGVyIGEgdGltZXIgdGhhdCBoYXMgbm8gZHVyYXRpb24gYW5kIG5vIGNoaWxkcmVuXG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPD0gbWluVmFsdWUgJiYgIXRoaXMuX2hhc0NoaWxkcmVuKSB7XG4gICAgICB0aWNrKHRoaXMsIG1pblZhbHVlLCAwLCAwLCB0aWNrTW9kZXMuRk9SQ0UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX3J1bm5pbmcpIHtcbiAgICAgICAgYWRkQ2hpbGQoZW5naW5lLCB0aGlzKTtcbiAgICAgICAgZW5naW5lLl9oYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNldFRpbWUoKTtcbiAgICAgIC8vIEZvcmNlcyB0aGUgdGltZXIgdG8gYWR2YW5jZSBieSBhdCBsZWFzdCBvbmUgZnJhbWUgd2hlbiB0aGUgbmV4dCB0aWNrIG9jY3Vyc1xuICAgICAgdGhpcy5fc3RhcnRUaW1lIC09IDEyO1xuICAgICAgZW5naW5lLndha2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgcmVzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNldCgwKS5yZXN1bWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVcbiAgICogQHBhcmFtICB7Qm9vbGVhbnxOdW1iZXJ9IFttdXRlQ2FsbGJhY2tzXVxuICAgKiBAcGFyYW0gIHtCb29sZWFufE51bWJlcn0gW2ludGVybmFsUmVuZGVyXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc2Vlayh0aW1lLCBtdXRlQ2FsbGJhY2tzID0gMCwgaW50ZXJuYWxSZW5kZXIgPSAwKSB7XG4gICAgLy8gUmVjb21wb3NlIHRoZSB0d2VlbiBzaWJsaW5ncyBpbiBjYXNlIHRoZSB0aW1lciBoYXMgYmVlbiBjYW5jZWxsZWRcbiAgICByZXZpdmVUaW1lcih0aGlzKTtcbiAgICAvLyBJZiB5b3Ugc2VlayBhIGNvbXBsZXRlZCBhbmltYXRpb24sIG90aGVyd2lzZSB0aGUgbmV4dCBwbGF5IHdpbGwgc3RhcnRzIGF0IDBcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGlzUGF1c2VkID0gdGhpcy5wYXVzZWQ7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIC8vIHRpbWVyLCB0aW1lLCBtdXRlQ2FsbGJhY2tzLCBpbnRlcm5hbFJlbmRlciwgdGlja01vZGVcbiAgICB0aWNrKHRoaXMsIHRpbWUgKyB0aGlzLl9kZWxheSwgfn5tdXRlQ2FsbGJhY2tzLCB+fmludGVybmFsUmVuZGVyLCB0aWNrTW9kZXMuQVVUTyk7XG4gICAgcmV0dXJuIGlzUGF1c2VkID8gdGhpcyA6IHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgYWx0ZXJuYXRlKCkge1xuICAgIGNvbnN0IHJldmVyc2VkID0gdGhpcy5fcmV2ZXJzZWQ7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLml0ZXJhdGlvbkNvdW50O1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5pdGVyYXRpb25EdXJhdGlvbjtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIG1heGltdW0gaXRlcmF0aW9ucyBwb3NzaWJsZSBnaXZlbiB0aGUgaXRlcmF0aW9uIGR1cmF0aW9uXG4gICAgY29uc3QgaXRlcmF0aW9ucyA9IGNvdW50ID09PSBJbmZpbml0eSA/IGZsb29yKG1heFZhbHVlIC8gZHVyYXRpb24pIDogY291bnQ7XG4gICAgdGhpcy5fcmV2ZXJzZWQgPSArKHRoaXMuX2FsdGVybmF0ZSAmJiAhKGl0ZXJhdGlvbnMgJSAyKSA/IHJldmVyc2VkIDogIXJldmVyc2VkKTtcbiAgICBpZiAoY291bnQgPT09IEluZmluaXR5KSB7XG4gICAgICAvLyBIYW5kbGUgaW5maW5pdGUgbG9vcHMgdG8gbG9vcCBvbiB0aGVtc2VsZlxuICAgICAgdGhpcy5pdGVyYXRpb25Qcm9ncmVzcyA9IHRoaXMuX3JldmVyc2VkID8gMSAtIHRoaXMuaXRlcmF0aW9uUHJvZ3Jlc3MgOiB0aGlzLml0ZXJhdGlvblByb2dyZXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlZWsoKGR1cmF0aW9uICogaXRlcmF0aW9ucykgLSB0aGlzLl9jdXJyZW50VGltZSk7XG4gICAgfVxuICAgIHRoaXMucmVzZXRUaW1lKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgcGxheSgpIHtcbiAgICBpZiAodGhpcy5fcmV2ZXJzZWQpIHRoaXMuYWx0ZXJuYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7dGhpc30gKi9cbiAgcmV2ZXJzZSgpIHtcbiAgICBpZiAoIXRoaXMuX3JldmVyc2VkKSB0aGlzLmFsdGVybmF0ZSgpO1xuICAgIHJldHVybiB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgLy8gVE9ETzogTW92ZSBhbGwgdGhlIGFuaW1hdGlvbiAvIHR3ZWVucyAvIGNoaWxkcmVuIHJlbGF0ZWQgY29kZSB0byBBbmltYXRpb24gLyBUaW1lbGluZVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0NoaWxkcmVuKSB7XG4gICAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi9jaGlsZCkgPT4gY2hpbGQuY2FuY2VsKCksIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgcmVtb3ZlVHdlZW5TbGlibGluZ3MpO1xuICAgIH1cbiAgICB0aGlzLl9jYW5jZWxsZWQgPSAxO1xuICAgIC8vIFBhdXNpbmcgdGhlIHRpbWVyIHJlbW92ZXMgaXQgZnJvbSB0aGUgZW5naW5lXG4gICAgcmV0dXJuIHRoaXMucGF1c2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG5ld0R1cmF0aW9uXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzdHJldGNoKG5ld0R1cmF0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudER1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBub3JtbGl6ZWREdXJhdGlvbiA9IG5vcm1hbGl6ZVRpbWUobmV3RHVyYXRpb24pO1xuICAgIGlmIChjdXJyZW50RHVyYXRpb24gPT09IG5vcm1saXplZER1cmF0aW9uKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB0aW1lU2NhbGUgPSBuZXdEdXJhdGlvbiAvIGN1cnJlbnREdXJhdGlvbjtcbiAgICBjb25zdCBpc1NldHRlciA9IG5ld0R1cmF0aW9uIDw9IG1pblZhbHVlO1xuICAgIHRoaXMuZHVyYXRpb24gPSBpc1NldHRlciA/IG1pblZhbHVlIDogbm9ybWxpemVkRHVyYXRpb247XG4gICAgdGhpcy5pdGVyYXRpb25EdXJhdGlvbiA9IGlzU2V0dGVyID8gbWluVmFsdWUgOiBub3JtYWxpemVUaW1lKHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gKiB0aW1lU2NhbGUpO1xuICAgIHRoaXMuX29mZnNldCAqPSB0aW1lU2NhbGU7XG4gICAgdGhpcy5fZGVsYXkgKj0gdGltZVNjYWxlO1xuICAgIHRoaXMuX2xvb3BEZWxheSAqPSB0aW1lU2NhbGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuIC8qKlxuICAgKiBDYW5jZWxzIHRoZSB0aW1lciBieSBzZWVraW5nIGl0IGJhY2sgdG8gMCBhbmQgcmV2ZXJ0aW5nIHRoZSBhdHRhY2hlZCBzY3JvbGxlciBpZiBuZWNlc3NhcnlcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJldmVydCgpIHtcbiAgICB0aWNrKHRoaXMsIDAsIDEsIDAsIHRpY2tNb2Rlcy5BVVRPKTtcbiAgICBjb25zdCBhcCA9IC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovKHRoaXMuX2F1dG9wbGF5KTtcbiAgICBpZiAoYXAgJiYgYXAubGlua2VkICYmIGFwLmxpbmtlZCA9PT0gdGhpcykgYXAucmV2ZXJ0KCk7XG4gICAgcmV0dXJuIHRoaXMuY2FuY2VsKCk7XG4gIH1cblxuIC8qKlxuICAgKiBJbWVkaWF0bHkgY29tcGxldGVzIHRoZSB0aW1lciwgY2FuY2VscyBpdCBhbmQgdHJpZ2dlcnMgdGhlIG9uQ29tcGxldGUgY2FsbGJhY2tcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIGNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLnNlZWsodGhpcy5kdXJhdGlvbikuY2FuY2VsKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7Q2FsbGJhY2s8dGhpcz59IFtjYWxsYmFja11cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHRoZW4oY2FsbGJhY2sgPSBub29wKSB7XG4gICAgY29uc3QgdGhlbiA9IHRoaXMudGhlbjtcbiAgICBjb25zdCBvblJlc29sdmUgPSAoKSA9PiB7XG4gICAgICAvLyB0aGlzLnRoZW4gPSBudWxsIHByZXZlbnRzIGluZmluaXRlIHJlY3Vyc2lvbiBpZiByZXR1cm5lZCBieSBhbiBhc3luYyBmdW5jdGlvblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2p1bGlhbmdhcm5pZXJvcmcvYW5pbWUtYmV0YS9pc3N1ZXMvMjZcbiAgICAgIHRoaXMudGhlbiA9IG51bGw7XG4gICAgICBjYWxsYmFjayh0aGlzKTtcbiAgICAgIHRoaXMudGhlbiA9IHRoZW47XG4gICAgICB0aGlzLl9yZXNvbHZlID0gbm9vcDtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSAoKSA9PiByKG9uUmVzb2x2ZSgpKTtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byByZXNvbHZlIGltZWRpYXRseSBpZiB0aGUgdGltZXIgaGFzIGFscmVhZHkgY29tcGxldGVkXG4gICAgICBpZiAodGhpcy5jb21wbGV0ZWQpIHRoaXMuX3Jlc29sdmUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7VGltZXJQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICogQHJldHVybiB7VGltZXJ9XG4gKi9cbmNvbnN0IGNyZWF0ZVRpbWVyID0gcGFyYW1ldGVycyA9PiBuZXcgVGltZXIocGFyYW1ldGVycywgbnVsbCwgMCkuaW5pdCgpO1xuXG5cblxuXG4vKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuY29uc3Qgbm9uZSA9IHQgPT4gdDtcblxuLy8gQ3ViaWMgQmV6aWVyIHNvbHZlciBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzZSDCqSBHYcOrdGFuIFJlbmF1ZGVhdVxuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gYVRcbiAqIEBwYXJhbSAge051bWJlcn0gYUExXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFBMlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBjYWxjQmV6aWVyID0gKGFULCBhQTEsIGFBMikgPT4gKCgoMSAtIDMgKiBhQTIgKyAzICogYUExKSAqIGFUICsgKDMgKiBhQTIgLSA2ICogYUExKSkgKiBhVCArICgzICogYUExKSkgKiBhVDtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFYXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1YMVxuICogQHBhcmFtICB7TnVtYmVyfSBtWDJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgYmluYXJ5U3ViZGl2aWRlID0gKGFYLCBtWDEsIG1YMikgPT4ge1xuICBsZXQgYUEgPSAwLCBhQiA9IDEsIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gIGRvIHtcbiAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMjtcbiAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgIGlmIChjdXJyZW50WCA+IDApIHtcbiAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgfVxuICB9IHdoaWxlIChhYnMoY3VycmVudFgpID4gLjAwMDAwMDEgJiYgKytpIDwgMTAwKTtcbiAgcmV0dXJuIGN1cnJlbnRUO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFttWDFdXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFttWTFdXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFttWDJdXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFttWTJdXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuXG5jb25zdCBjdWJpY0JlemllciA9IChtWDEgPSAwLjUsIG1ZMSA9IDAuMCwgbVgyID0gMC41LCBtWTIgPSAxLjApID0+IChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikgPyBub25lIDpcbiAgdCA9PiB0ID09PSAwIHx8IHQgPT09IDEgPyB0IDpcbiAgY2FsY0JlemllcihiaW5hcnlTdWJkaXZpZGUodCwgbVgxLCBtWDIpLCBtWTEsIG1ZMik7XG5cbi8qKlxuICogU3RlcHMgZWFzZSBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cbiAqIE9ubHkgY292ZXJzICdlbmQnIGFuZCAnc3RhcnQnIGp1bXB0ZXJtc1xuICogQHBhcmFtICB7TnVtYmVyfSBzdGVwc1xuICogQHBhcmFtICB7Qm9vbGVhbn0gW2Zyb21TdGFydF1cbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5jb25zdCBzdGVwcyA9IChzdGVwcyA9IDEwLCBmcm9tU3RhcnQpID0+IHtcbiAgY29uc3Qgcm91bmRNZXRob2QgPSBmcm9tU3RhcnQgPyBjZWlsIDogZmxvb3I7XG4gIHJldHVybiB0ID0+IHJvdW5kTWV0aG9kKGNsYW1wKHQsIDAsIDEpICogc3RlcHMpICogKDEgLyBzdGVwcyk7XG59O1xuXG4vKipcbiAqIFdpdGhvdXQgcGFyYW1ldGVycywgdGhlIGxpbmVhciBmdW5jdGlvbiBjcmVhdGVzIGEgbm9uLWVhc2VkIHRyYW5zaXRpb24uXG4gKiBQYXJhbWV0ZXJzLCBpZiB1c2VkLCBjcmVhdGVzIGEgcGllY2V3aXNlIGxpbmVhciBlYXNpbmcgYnkgaW50ZXJwb2xhdGluZyBsaW5lYXJseSBiZXR3ZWVuIHRoZSBzcGVjaWZpZWQgcG9pbnRzLlxuICogQHBhcmFtICB7Li4uU3RyaW5nfE51bWJlcn0gW2FyZ3NdIC0gUG9pbnRzXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuY29uc3QgbGluZWFyID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICBpZiAoIWFyZ3NMZW5ndGgpIHJldHVybiBub25lO1xuICBjb25zdCB0b3RhbFBvaW50cyA9IGFyZ3NMZW5ndGggLSAxO1xuICBjb25zdCBmaXJzdEFyZyA9IGFyZ3NbMF07XG4gIGNvbnN0IGxhc3RBcmcgPSBhcmdzW3RvdGFsUG9pbnRzXTtcbiAgY29uc3QgeFBvaW50cyA9IFswXTtcbiAgY29uc3QgeVBvaW50cyA9IFtwYXJzZU51bWJlcihmaXJzdEFyZyldO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUG9pbnRzOyBpKyspIHtcbiAgICBjb25zdCBhcmcgPSBhcmdzW2ldO1xuICAgIGNvbnN0IHNwbGl0VmFsdWUgPSBpc1N0cihhcmcpID9cbiAgICAvKiogQHR5cGUge1N0cmluZ30gKi8oYXJnKS50cmltKCkuc3BsaXQoJyAnKSA6XG4gICAgW2FyZ107XG4gICAgY29uc3QgdmFsdWUgPSBzcGxpdFZhbHVlWzBdO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBzcGxpdFZhbHVlWzFdO1xuICAgIHhQb2ludHMucHVzaCghaXNVbmQocGVyY2VudCkgPyBwYXJzZU51bWJlcihwZXJjZW50KSAvIDEwMCA6IGkgLyB0b3RhbFBvaW50cyk7XG4gICAgeVBvaW50cy5wdXNoKHBhcnNlTnVtYmVyKHZhbHVlKSk7XG4gIH1cbiAgeVBvaW50cy5wdXNoKHBhcnNlTnVtYmVyKGxhc3RBcmcpKTtcbiAgeFBvaW50cy5wdXNoKDEpO1xuICByZXR1cm4gZnVuY3Rpb24gZWFzZUxpbmVhcih0KSB7XG4gICAgZm9yIChsZXQgaSA9IDEsIGwgPSB4UG9pbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudFggPSB4UG9pbnRzW2ldO1xuICAgICAgaWYgKHQgPD0gY3VycmVudFgpIHtcbiAgICAgICAgY29uc3QgcHJldlggPSB4UG9pbnRzW2kgLSAxXTtcbiAgICAgICAgY29uc3QgcHJldlkgPSB5UG9pbnRzW2kgLSAxXTtcbiAgICAgICAgcmV0dXJuIHByZXZZICsgKHlQb2ludHNbaV0gLSBwcmV2WSkgKiAodCAtIHByZXZYKSAvIChjdXJyZW50WCAtIHByZXZYKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHlQb2ludHNbeVBvaW50cy5sZW5ndGggLSAxXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RlcHNcbiAqIEBwYXJhbSAge051bWJlcn0gW2xlbmd0aF0gLSBUaGUgbnVtYmVyIG9mIHN0ZXBzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtyYW5kb21uZXNzXSAtIEhvdyBzdHJvbmcgdGhlIHJhbmRvbW5lc3MgaXNcbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5jb25zdCBpcnJlZ3VsYXIgPSAobGVuZ3RoID0gMTAsIHJhbmRvbW5lc3MgPSAxKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IFswXTtcbiAgY29uc3QgdG90YWwgPSBsZW5ndGggLSAxO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdmFsdWVzW2kgLSAxXTtcbiAgICBjb25zdCBzcGFjaW5nID0gaSAvIHRvdGFsO1xuICAgIGNvbnN0IHNlZ21lbnRFbmQgPSAoaSArIDEpIC8gdG90YWw7XG4gICAgY29uc3QgcmFuZG9tVmFyaWF0aW9uID0gc3BhY2luZyArIChzZWdtZW50RW5kIC0gc3BhY2luZykgKiBNYXRoLnJhbmRvbSgpO1xuICAgIC8vIE1peCB0aGUgZXZlbiBzcGFjaW5nIGFuZCByYW5kb20gdmFyaWF0aW9uIGJhc2VkIG9uIHRoZSByYW5kb21uZXNzIHBhcmFtZXRlclxuICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gc3BhY2luZyAqICgxIC0gcmFuZG9tbmVzcykgKyByYW5kb21WYXJpYXRpb24gKiByYW5kb21uZXNzO1xuICAgIHZhbHVlcy5wdXNoKGNsYW1wKHJhbmRvbVZhbHVlLCBwcmV2aW91c1ZhbHVlLCAxKSk7XG4gIH1cbiAgdmFsdWVzLnB1c2goMSk7XG4gIHJldHVybiBsaW5lYXIoLi4udmFsdWVzKTtcbn07XG5cbi8vIEVhc2luZyBmdW5jdGlvbnMgYWRhcHRlZCBmcm9tIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNlIMKpIFJvYmVydCBQZW5uZXJcblxuLyoqXG4gKiBAY2FsbGJhY2sgUG93ZXJFYXNpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3Bvd2VyPTEuNjc1XVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQmFja0Vhc2luZ1xuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbb3ZlcnNob290PTEuNzAxNThdXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBFbGFzdGljRWFzaW5nXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFthbXBsaXR1ZGU9MV1cbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3BlcmlvZD0uM11cbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEVhc2VGYWN0b3J5XG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtwYXJhbUFdXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtwYXJhbUJdXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbnxOdW1iZXJ9XG4gKi9cblxuLyoqIEB0eXBlZGVmIHtQb3dlckVhc2luZ3xCYWNrRWFzaW5nfEVsYXN0aWNFYXNpbmd9IEVhc2VzRmFjdG9yeSAqL1xuXG5jb25zdCBoYWxmUEkgPSBQSSAvIDI7XG5jb25zdCBkb3VibGVQSSA9IFBJICogMjtcbi8qKiBAdHlwZSB7UG93ZXJFYXNpbmd9ICovXG5jb25zdCBlYXNlSW5Qb3dlciA9IChwID0gMS42OCkgPT4gdCA9PiBwb3codCwgK3ApO1xuXG4vKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIEVhc2VzRmFjdG9yeXxFYXNpbmdGdW5jdGlvbj59ICovXG5jb25zdCBlYXNlSW5GdW5jdGlvbnMgPSB7XG4gIFtlbXB0eVN0cmluZ106IGVhc2VJblBvd2VyLFxuICBRdWFkOiBlYXNlSW5Qb3dlcigyKSxcbiAgQ3ViaWM6IGVhc2VJblBvd2VyKDMpLFxuICBRdWFydDogZWFzZUluUG93ZXIoNCksXG4gIFF1aW50OiBlYXNlSW5Qb3dlcig1KSxcbiAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgU2luZTogdCA9PiAxIC0gY29zKHQgKiBoYWxmUEkpLFxuICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICBDaXJjOiB0ID0+IDEgLSBzcXJ0KDEgLSB0ICogdCksXG4gIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gIEV4cG86IHQgPT4gdCA/IHBvdygyLCAxMCAqIHQgLSAxMCkgOiAwLFxuICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICBCb3VuY2U6IHQgPT4ge1xuICAgIGxldCBwb3cyLCBiID0gNDtcbiAgICB3aGlsZSAodCA8ICgocG93MiA9IHBvdygyLCAtLWIpKSAtIDEpIC8gMTEpO1xuICAgIHJldHVybiAxIC8gcG93KDQsIDMgLSBiKSAtIDcuNTYyNSAqIHBvdygocG93MiAqIDMgLSAyKSAvIDIyIC0gdCwgMik7XG4gIH0sXG4gIC8qKiBAdHlwZSB7QmFja0Vhc2luZ30gKi9cbiAgQmFjazogKG92ZXJzaG9vdCA9IDEuNzAxNTgpID0+IHQgPT4gKCtvdmVyc2hvb3QgKyAxKSAqIHQgKiB0ICogdCAtICtvdmVyc2hvb3QgKiB0ICogdCxcbiAgLyoqIEB0eXBlIHtFbGFzdGljRWFzaW5nfSAqL1xuICBFbGFzdGljOiAoYW1wbGl0dWRlID0gMSwgcGVyaW9kID0gLjMpID0+IHtcbiAgICBjb25zdCBhID0gY2xhbXAoK2FtcGxpdHVkZSwgMSwgMTApO1xuICAgIGNvbnN0IHAgPSBjbGFtcCgrcGVyaW9kLCBtaW5WYWx1ZSwgMik7XG4gICAgY29uc3QgcyA9IChwIC8gZG91YmxlUEkpICogYXNpbigxIC8gYSk7XG4gICAgY29uc3QgZSA9IGRvdWJsZVBJIC8gcDtcbiAgICByZXR1cm4gdCA9PiB0ID09PSAwIHx8IHQgPT09IDEgPyB0IDogLWEgKiBwb3coMiwgLTEwICogKDEgLSB0KSkgKiBzaW4oKCgxIC0gdCkgLSBzKSAqIGUpO1xuICB9XG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBFYXNlVHlwZVxuICogQHBhcmFtIHtFYXNpbmdGdW5jdGlvbn0gRWFzZVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cblxuLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBFYXNlVHlwZT59ICovXG5jb25zdCBlYXNlVHlwZXMgPSB7XG4gIGluOiBlYXNlSW4gPT4gdCA9PiBlYXNlSW4odCksXG4gIG91dDogZWFzZUluID0+IHQgPT4gMSAtIGVhc2VJbigxIC0gdCksXG4gIGluT3V0OiBlYXNlSW4gPT4gdCA9PiB0IDwgLjUgPyBlYXNlSW4odCAqIDIpIC8gMiA6IDEgLSBlYXNlSW4odCAqIC0yICsgMikgLyAyLFxuICBvdXRJbjogZWFzZUluID0+IHQgPT4gdCA8IC41ID8gKDEgLSBlYXNlSW4oMSAtIHQgKiAyKSkgLyAyIDogKGVhc2VJbih0ICogMiAtIDEpICsgMSkgLyAyLFxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtICB7UmVjb3JkPFN0cmluZywgRWFzZXNGYWN0b3J5fEVhc2luZ0Z1bmN0aW9uPn0gZWFzZXNGdW5jdGlvbnNcbiAqIEBwYXJhbSAge09iamVjdH0gZWFzZXNMb29rdXBzXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuY29uc3QgcGFyc2VFYXNlU3RyaW5nID0gKHN0cmluZywgZWFzZXNGdW5jdGlvbnMsIGVhc2VzTG9va3VwcykgPT4ge1xuICBpZiAoZWFzZXNMb29rdXBzW3N0cmluZ10pIHJldHVybiBlYXNlc0xvb2t1cHNbc3RyaW5nXTtcbiAgaWYgKHN0cmluZy5pbmRleE9mKCcoJykgPD0gLTEpIHtcbiAgICBjb25zdCBoYXNQYXJhbXMgPSBlYXNlVHlwZXNbc3RyaW5nXSB8fCBzdHJpbmcuaW5jbHVkZXMoJ0JhY2snKSB8fCBzdHJpbmcuaW5jbHVkZXMoJ0VsYXN0aWMnKTtcbiAgICBjb25zdCBwYXJzZWRGbiA9IC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovKGhhc1BhcmFtcyA/IC8qKiBAdHlwZSB7RWFzZXNGYWN0b3J5fSAqLyhlYXNlc0Z1bmN0aW9uc1tzdHJpbmddKSgpIDogZWFzZXNGdW5jdGlvbnNbc3RyaW5nXSk7XG4gICAgcmV0dXJuIHBhcnNlZEZuID8gZWFzZXNMb29rdXBzW3N0cmluZ10gPSBwYXJzZWRGbiA6IG5vbmU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3BsaXQgPSBzdHJpbmcuc2xpY2UoMCwgLTEpLnNwbGl0KCcoJyk7XG4gICAgY29uc3QgcGFyc2VkRm4gPSAvKiogQHR5cGUge0Vhc2VzRmFjdG9yeX0gKi8oZWFzZXNGdW5jdGlvbnNbc3BsaXRbMF1dKTtcbiAgICByZXR1cm4gcGFyc2VkRm4gPyBlYXNlc0xvb2t1cHNbc3RyaW5nXSA9IHBhcnNlZEZuKC4uLnNwbGl0WzFdLnNwbGl0KCcsJykpIDogbm9uZTtcbiAgfVxufTtcblxuLyoqXG4gKiBAdHlwZWRlZiAge09iamVjdH0gRWFzZXNGdW5jdGlvbnNcbiAqIEBwcm9wZXJ0eSB7dHlwZW9mIGxpbmVhcn0gbGluZWFyXG4gKiBAcHJvcGVydHkge3R5cGVvZiBpcnJlZ3VsYXJ9IGlycmVndWxhclxuICogQHByb3BlcnR5IHt0eXBlb2Ygc3RlcHN9IHN0ZXBzXG4gKiBAcHJvcGVydHkge3R5cGVvZiBjdWJpY0Jlemllcn0gY3ViaWNCZXppZXJcbiAqIEBwcm9wZXJ0eSB7UG93ZXJFYXNpbmd9IGluXG4gKiBAcHJvcGVydHkge1Bvd2VyRWFzaW5nfSBvdXRcbiAqIEBwcm9wZXJ0eSB7UG93ZXJFYXNpbmd9IGluT3V0XG4gKiBAcHJvcGVydHkge1Bvd2VyRWFzaW5nfSBvdXRJblxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5RdWFkXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRRdWFkXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dFF1YWRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluUXVhZFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5DdWJpY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0Q3ViaWNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0Q3ViaWNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluQ3ViaWNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluUXVhcnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dFF1YXJ0XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dFF1YXJ0XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJblF1YXJ0XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpblF1aW50XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRRdWludFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRRdWludFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5RdWludFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5TaW5lXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRTaW5lXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dFNpbmVcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluU2luZVxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5DaXJjXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRDaXJjXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dENpcmNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluQ2lyY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5FeHBvXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRFeHBvXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dEV4cG9cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluRXhwb1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5Cb3VuY2VcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEJvdW5jZVxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRCb3VuY2VcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluQm91bmNlXG4gKiBAcHJvcGVydHkge0JhY2tFYXNpbmd9IGluQmFja1xuICogQHByb3BlcnR5IHtCYWNrRWFzaW5nfSBvdXRCYWNrXG4gKiBAcHJvcGVydHkge0JhY2tFYXNpbmd9IGluT3V0QmFja1xuICogQHByb3BlcnR5IHtCYWNrRWFzaW5nfSBvdXRJbkJhY2tcbiAqIEBwcm9wZXJ0eSB7RWxhc3RpY0Vhc2luZ30gaW5FbGFzdGljXG4gKiBAcHJvcGVydHkge0VsYXN0aWNFYXNpbmd9IG91dEVsYXN0aWNcbiAqIEBwcm9wZXJ0eSB7RWxhc3RpY0Vhc2luZ30gaW5PdXRFbGFzdGljXG4gKiBAcHJvcGVydHkge0VsYXN0aWNFYXNpbmd9IG91dEluRWxhc3RpY1xuICovXG5cbmNvbnN0IGVhc2VzID0gKC8qI19fUFVSRV9fKi8gKCgpID0+IHtcbiAgY29uc3QgbGlzdCA9IHsgbGluZWFyLCBpcnJlZ3VsYXIsIHN0ZXBzLCBjdWJpY0JlemllciB9O1xuICBmb3IgKGxldCB0eXBlIGluIGVhc2VUeXBlcykge1xuICAgIGZvciAobGV0IG5hbWUgaW4gZWFzZUluRnVuY3Rpb25zKSB7XG4gICAgICBjb25zdCBlYXNlSW4gPSBlYXNlSW5GdW5jdGlvbnNbbmFtZV07XG4gICAgICBjb25zdCBlYXNlVHlwZSA9IGVhc2VUeXBlc1t0eXBlXTtcbiAgICAgIGxpc3RbdHlwZSArIG5hbWVdID0gLyoqIEB0eXBlIHtFYXNlc0ZhY3Rvcnl8RWFzaW5nRnVuY3Rpb259ICovKFxuICAgICAgICBuYW1lID09PSBlbXB0eVN0cmluZyB8fCBuYW1lID09PSAnQmFjaycgfHwgbmFtZSA9PT0gJ0VsYXN0aWMnID9cbiAgICAgICAgKGEsIGIpID0+IGVhc2VUeXBlKC8qKiBAdHlwZSB7RWFzZXNGYWN0b3J5fSAqLyhlYXNlSW4pKGEsIGIpKSA6XG4gICAgICAgIGVhc2VUeXBlKC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovKGVhc2VJbikpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLyoqIEB0eXBlIHtFYXNlc0Z1bmN0aW9uc30gKi8obGlzdCk7XG59KSgpKTtcblxuLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBFYXNpbmdGdW5jdGlvbj59ICovXG5jb25zdCBKU0Vhc2VzTG9va3VwcyA9IHsgbGluZWFyOiBub25lIH07XG5cbi8qKlxuICogQHBhcmFtICB7RWFzaW5nUGFyYW19IGVhc2VcbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5jb25zdCBwYXJzZUVhc2luZ3MgPSBlYXNlID0+IGlzRm5jKGVhc2UpID8gZWFzZSA6XG4gIGlzU3RyKGVhc2UpID8gcGFyc2VFYXNlU3RyaW5nKC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhlYXNlKSwgZWFzZXMsIEpTRWFzZXNMb29rdXBzKSA6XG4gIG5vbmU7XG5cblxuXG5cbmNvbnN0IHByb3BlcnR5TmFtZXNDYWNoZSA9IHt9O1xuXG4vKipcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gKiBAcGFyYW0gIHtUYXJnZXR9IHRhcmdldFxuICogQHBhcmFtICB7dHdlZW5UeXBlc30gdHdlZW5UeXBlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHNhbml0aXplUHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSwgdGFyZ2V0LCB0d2VlblR5cGUpID0+IHtcbiAgaWYgKHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5UUkFOU0ZPUk0pIHtcbiAgICBjb25zdCB0ID0gc2hvcnRUcmFuc2Zvcm1zLmdldChwcm9wZXJ0eU5hbWUpO1xuICAgIHJldHVybiB0ID8gdCA6IHByb3BlcnR5TmFtZTtcbiAgfSBlbHNlIGlmIChcbiAgICB0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuQ1NTIHx8XG4gICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZXMgd2hlcmUgcHJvcGVydGllcyBsaWtlIFwic3Ryb2tlRGFzaG9mZnNldFwiIG5lZWRzIHRvIGJlIHNldCBhcyBcInN0cm9rZS1kYXNob2Zmc2V0XCJcbiAgICAvLyBidXQgcHJvcGVydGllcyBsaWtlIFwiYmFzZUZyZXF1ZW5jeVwiIHNob3VsZCBzdGF5IGluIGxvd2VyQ2FtZWxDYXNlXG4gICAgKHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5BVFRSSUJVVEUgJiYgKGlzU3ZnKHRhcmdldCkgJiYgcHJvcGVydHlOYW1lIGluIC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLnN0eWxlKSlcbiAgKSB7XG4gICAgY29uc3QgY2FjaGVkUHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lc0NhY2hlW3Byb3BlcnR5TmFtZV07XG4gICAgaWYgKGNhY2hlZFByb3BlcnR5TmFtZSkge1xuICAgICAgcmV0dXJuIGNhY2hlZFByb3BlcnR5TmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IHByb3BlcnR5TmFtZSA/IHRvTG93ZXJDYXNlKHByb3BlcnR5TmFtZSkgOiBwcm9wZXJ0eU5hbWU7XG4gICAgICBwcm9wZXJ0eU5hbWVzQ2FjaGVbcHJvcGVydHlOYW1lXSA9IGxvd2VyQ2FzZU5hbWU7XG4gICAgICByZXR1cm4gbG93ZXJDYXNlTmFtZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgfVxufTtcblxuXG5cblxuY29uc3QgYW5nbGVVbml0c01hcCA9IHsgJ2RlZyc6IDEsICdyYWQnOiAxODAgLyBQSSwgJ3R1cm4nOiAzNjAgfTtcbmNvbnN0IGNvbnZlcnRlZFZhbHVlc0NhY2hlID0ge307XG5cbi8qKlxuICogQHBhcmFtICB7RE9NVGFyZ2V0fSBlbFxuICogQHBhcmFtICB7VHdlZW5EZWNvbXBvc2VkVmFsdWV9IGRlY29tcG9zZWRWYWx1ZVxuICogQHBhcmFtICB7U3RyaW5nfSB1bml0XG4gKiBAcGFyYW0gIHtCb29sZWFufSBbZm9yY2VdXG4gKiBAcmV0dXJuIHtUd2VlbkRlY29tcG9zZWRWYWx1ZX1cbiAqL1xuY29uc3QgY29udmVydFZhbHVlVW5pdCA9IChlbCwgZGVjb21wb3NlZFZhbHVlLCB1bml0LCBmb3JjZSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRVbml0ID0gZGVjb21wb3NlZFZhbHVlLnU7XG4gIGNvbnN0IGN1cnJlbnROdW1iZXIgPSBkZWNvbXBvc2VkVmFsdWUubjtcbiAgaWYgKGRlY29tcG9zZWRWYWx1ZS50ID09PSB2YWx1ZVR5cGVzLlVOSVQgJiYgY3VycmVudFVuaXQgPT09IHVuaXQpIHsgLy8gVE9ETzogQ2hlY2sgaWYgY2hlY2tpbmcgYWdhaW5zdCB0aGUgc2FtZSB1bml0IHN0cmluZyBpcyBuZWNlc3NhcnlcbiAgICByZXR1cm4gZGVjb21wb3NlZFZhbHVlO1xuICB9XG4gIGNvbnN0IGNhY2hlZEtleSA9IGN1cnJlbnROdW1iZXIgKyBjdXJyZW50VW5pdCArIHVuaXQ7XG4gIGNvbnN0IGNhY2hlZCA9IGNvbnZlcnRlZFZhbHVlc0NhY2hlW2NhY2hlZEtleV07XG4gIGlmICghaXNVbmQoY2FjaGVkKSAmJiAhZm9yY2UpIHtcbiAgICBkZWNvbXBvc2VkVmFsdWUubiA9IGNhY2hlZDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY29udmVydGVkVmFsdWU7XG4gICAgaWYgKGN1cnJlbnRVbml0IGluIGFuZ2xlVW5pdHNNYXApIHtcbiAgICAgIGNvbnZlcnRlZFZhbHVlID0gY3VycmVudE51bWJlciAqIGFuZ2xlVW5pdHNNYXBbY3VycmVudFVuaXRdIC8gYW5nbGVVbml0c01hcFt1bml0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYmFzZWxpbmUgPSAxMDA7XG4gICAgICBjb25zdCB0ZW1wRWwgPSAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8oZWwuY2xvbmVOb2RlKCkpO1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGVsLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBwYXJlbnRFbCA9IChwYXJlbnROb2RlICYmIChwYXJlbnROb2RlICE9PSBkb2MpKSA/IHBhcmVudE5vZGUgOiBkb2MuYm9keTtcbiAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRlbXBFbCk7XG4gICAgICBjb25zdCBlbFN0eWxlID0gdGVtcEVsLnN0eWxlO1xuICAgICAgZWxTdHlsZS53aWR0aCA9IGJhc2VsaW5lICsgY3VycmVudFVuaXQ7XG4gICAgICBjb25zdCBjdXJyZW50VW5pdFdpZHRoID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8odGVtcEVsKS5vZmZzZXRXaWR0aCB8fCBiYXNlbGluZTtcbiAgICAgIGVsU3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gICAgICBjb25zdCBuZXdVbml0V2lkdGggPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyh0ZW1wRWwpLm9mZnNldFdpZHRoIHx8IGJhc2VsaW5lO1xuICAgICAgY29uc3QgZmFjdG9yID0gY3VycmVudFVuaXRXaWR0aCAvIG5ld1VuaXRXaWR0aDtcbiAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBFbCk7XG4gICAgICBjb252ZXJ0ZWRWYWx1ZSA9IGZhY3RvciAqIGN1cnJlbnROdW1iZXI7XG4gICAgfVxuICAgIGRlY29tcG9zZWRWYWx1ZS5uID0gY29udmVydGVkVmFsdWU7XG4gICAgY29udmVydGVkVmFsdWVzQ2FjaGVbY2FjaGVkS2V5XSA9IGNvbnZlcnRlZFZhbHVlO1xuICB9XG4gIGRlY29tcG9zZWRWYWx1ZS50ID09PSB2YWx1ZVR5cGVzLlVOSVQ7XG4gIGRlY29tcG9zZWRWYWx1ZS51ID0gdW5pdDtcbiAgcmV0dXJuIGRlY29tcG9zZWRWYWx1ZTtcbn07XG5cblxuXG5cbi8qKlxuICogQHRlbXBsYXRlIHtSZW5kZXJhYmxlfSBUXG4gKiBAcGFyYW0ge1R9IHJlbmRlcmFibGVcbiAqIEByZXR1cm4ge1R9XG4gKi9cbmNvbnN0IGNsZWFuSW5saW5lU3R5bGVzID0gcmVuZGVyYWJsZSA9PiB7XG4gIC8vIEFsbG93IGNsZWFuSW5saW5lU3R5bGVzKCkgdG8gYmUgY2FsbGVkIG9uIHRpbWVsaW5lc1xuICBpZiAocmVuZGVyYWJsZS5faGFzQ2hpbGRyZW4pIHtcbiAgICBmb3JFYWNoQ2hpbGRyZW4ocmVuZGVyYWJsZSwgY2xlYW5JbmxpbmVTdHlsZXMsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKHJlbmRlcmFibGUpO1xuICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIGZvckVhY2hDaGlsZHJlbihhbmltYXRpb24sICgvKiogQHR5cGUge1R3ZWVufSAqL3R3ZWVuKSA9PiB7XG4gICAgICBjb25zdCB0d2VlblByb3BlcnR5ID0gdHdlZW4ucHJvcGVydHk7XG4gICAgICBjb25zdCB0d2VlblRhcmdldCA9IHR3ZWVuLnRhcmdldDtcbiAgICAgIGlmICh0d2VlblRhcmdldFtpc0RvbVN5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3R5bGUgPSAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odHdlZW5UYXJnZXQpLnN0eWxlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbElubGluZWRWYWx1ZSA9IGFuaW1hdGlvbi5faW5saW5lU3R5bGVzW3R3ZWVuUHJvcGVydHldO1xuICAgICAgICBpZiAodHdlZW4uX3R3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5UUkFOU0ZPUk0pIHtcbiAgICAgICAgICBjb25zdCBjYWNoZWRUcmFuc2Zvcm1zID0gdHdlZW5UYXJnZXRbdHJhbnNmb3Jtc1N5bWJvbF07XG4gICAgICAgICAgaWYgKGlzVW5kKG9yaWdpbmFsSW5saW5lZFZhbHVlKSB8fCBvcmlnaW5hbElubGluZWRWYWx1ZSA9PT0gZW1wdHlTdHJpbmcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjYWNoZWRUcmFuc2Zvcm1zW3R3ZWVuUHJvcGVydHldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRUcmFuc2Zvcm1zW3R3ZWVuUHJvcGVydHldID0gb3JpZ2luYWxJbmxpbmVkVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0d2Vlbi5fcmVuZGVyVHJhbnNmb3Jtcykge1xuICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhjYWNoZWRUcmFuc2Zvcm1zKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0U3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IHN0ciA9IGVtcHR5U3RyaW5nO1xuICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY2FjaGVkVHJhbnNmb3Jtcykge1xuICAgICAgICAgICAgICAgIHN0ciArPSB0cmFuc2Zvcm1zRnJhZ21lbnRTdHJpbmdzW2tleV0gKyBjYWNoZWRUcmFuc2Zvcm1zW2tleV0gKyAnKSAnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhcmdldFN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzVW5kKG9yaWdpbmFsSW5saW5lZFZhbHVlKSB8fCBvcmlnaW5hbElubGluZWRWYWx1ZSA9PT0gZW1wdHlTdHJpbmcpIHtcbiAgICAgICAgICAgIHRhcmdldFN0eWxlLnJlbW92ZVByb3BlcnR5KHR3ZWVuUHJvcGVydHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRTdHlsZVt0d2VlblByb3BlcnR5XSA9IG9yaWdpbmFsSW5saW5lZFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5pbWF0aW9uLl90YWlsID09PSB0d2Vlbikge1xuICAgICAgICAgIGFuaW1hdGlvbi50YXJnZXRzLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBpZiAodC5nZXRBdHRyaWJ1dGUgJiYgdC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgPT09IGVtcHR5U3RyaW5nKSB7XG4gICAgICAgICAgICAgIHQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgfSAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZW5kZXJhYmxlO1xufTtcblxuLy8gRGVmaW5lcyBkZWNvbXBvc2VkIHZhbHVlcyB0YXJnZXQgb2JqZWN0cyBvbmx5IG9uY2UgYW5kIG11dGF0ZSB0aGVpciBwcm9wZXJ0aWVzIGxhdGVyIHRvIGF2b2lkIEdDXG4vLyBUT0RPOiBNYXliZSBtb3ZlIHRoZSBvYmplY3RzIGNyZWF0aW9uIHRvIHZhbHVlcy5qcyBhbmQgdXNlIHRoZSBkZWNvbXBvc2UgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBiYXNlIG9iamVjdFxuY29uc3QgZnJvbVRhcmdldE9iamVjdCA9IGNyZWF0ZURlY29tcG9zZWRWYWx1ZVRhcmdldE9iamVjdCgpO1xuY29uc3QgdG9UYXJnZXRPYmplY3QgPSBjcmVhdGVEZWNvbXBvc2VkVmFsdWVUYXJnZXRPYmplY3QoKTtcbmNvbnN0IHRvRnVuY3Rpb25TdG9yZSA9IHsgZnVuYzogbnVsbCB9O1xuY29uc3Qga2V5ZnJhbWVzVGFyZ2V0QXJyYXkgPSBbbnVsbF07XG5jb25zdCBmYXN0U2V0VmFsdWVzQXJyYXkgPSBbbnVsbCwgbnVsbF07XG4vKiogQHR5cGUge1R3ZWVuS2V5VmFsdWV9ICovXG5jb25zdCBrZXlPYmplY3RUYXJnZXQgPSB7IHRvOiBudWxsIH07XG5cbmxldCB0d2VlbklkID0gMDtcbmxldCBrZXlmcmFtZXM7XG4vKiogQHR5cGUge1R3ZWVuUGFyYW1zT3B0aW9ucyAmIFR3ZWVuVmFsdWVzfSAqL1xubGV0IGtleTtcblxuLyoqXG4gKiBAcGFyYW0ge0R1cmF0aW9uS2V5ZnJhbWVzIHwgUGVyY2VudGFnZUtleWZyYW1lc30ga2V5ZnJhbWVzXG4gKiBAcGFyYW0ge0FuaW1hdGlvblBhcmFtc30gcGFyYW1ldGVyc1xuICogQHJldHVybiB7QW5pbWF0aW9uUGFyYW1zfVxuICovXG5jb25zdCBnZW5lcmF0ZUtleWZyYW1lcyA9IChrZXlmcmFtZXMsIHBhcmFtZXRlcnMpID0+IHtcbiAgLyoqIEB0eXBlIHtBbmltYXRpb25QYXJhbXN9ICovXG4gIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgaWYgKGlzQXJyKGtleWZyYW1lcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gW10uY29uY2F0KC4uLi8qKiBAdHlwZSB7RHVyYXRpb25LZXlmcmFtZXN9ICovKGtleWZyYW1lcykubWFwKGtleSA9PiBPYmplY3Qua2V5cyhrZXkpKSkuZmlsdGVyKGlzS2V5KTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICBjb25zdCBwcm9wQXJyYXkgPSAvKiogQHR5cGUge0R1cmF0aW9uS2V5ZnJhbWVzfSAqLyhrZXlmcmFtZXMpLm1hcChrZXkgPT4ge1xuICAgICAgICAvKiogQHR5cGUge1R3ZWVuS2V5VmFsdWV9ICovXG4gICAgICAgIGNvbnN0IG5ld0tleSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBwIGluIGtleSkge1xuICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gLyoqIEB0eXBlIHtUd2VlblByb3BWYWx1ZX0gKi8oa2V5W3BdKTtcbiAgICAgICAgICBpZiAoaXNLZXkocCkpIHtcbiAgICAgICAgICAgIGlmIChwID09PSBwcm9wTmFtZSkge1xuICAgICAgICAgICAgICBuZXdLZXkudG8gPSBrZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3S2V5W3BdID0ga2V5VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgICB9KTtcbiAgICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0gLyoqIEB0eXBlIHtBcnJheVN5bnRheFZhbHVlfSAqLyhwcm9wQXJyYXkpO1xuICAgIH1cblxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRvdGFsRHVyYXRpb24gPSAvKiogQHR5cGUge051bWJlcn0gKi8oc2V0VmFsdWUocGFyYW1ldGVycy5kdXJhdGlvbiwgZ2xvYmFscy5kZWZhdWx0cy5kdXJhdGlvbikpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhrZXlmcmFtZXMpXG4gICAgLm1hcChrZXkgPT4geyByZXR1cm4ge286IHBhcnNlRmxvYXQoa2V5KSAvIDEwMCwgcDoga2V5ZnJhbWVzW2tleV19IH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IGEubyAtIGIubyk7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBrZXkubztcbiAgICAgIGNvbnN0IHByb3AgPSBrZXkucDtcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gcHJvcCkge1xuICAgICAgICBpZiAoaXNLZXkobmFtZSkpIHtcbiAgICAgICAgICBsZXQgcHJvcEFycmF5ID0gLyoqIEB0eXBlIHtBcnJheX0gKi8ocHJvcGVydGllc1tuYW1lXSk7XG4gICAgICAgICAgaWYgKCFwcm9wQXJyYXkpIHByb3BBcnJheSA9IHByb3BlcnRpZXNbbmFtZV0gPSBbXTtcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IG9mZnNldCAqIHRvdGFsRHVyYXRpb247XG4gICAgICAgICAgbGV0IGxlbmd0aCA9IHByb3BBcnJheS5sZW5ndGg7XG4gICAgICAgICAgbGV0IHByZXZLZXkgPSBwcm9wQXJyYXlbbGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3Qga2V5T2JqID0geyB0bzogcHJvcFtuYW1lXSB9O1xuICAgICAgICAgIGxldCBkdXJQcm9ncmVzcyA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZHVyUHJvZ3Jlc3MgKz0gcHJvcEFycmF5W2ldLmR1cmF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBrZXlPYmouZnJvbSA9IHByZXZLZXkudG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwcm9wLmVhc2UpIHtcbiAgICAgICAgICAgIGtleU9iai5lYXNlID0gcHJvcC5lYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXlPYmouZHVyYXRpb24gPSBkdXJhdGlvbiAtIChsZW5ndGggPyBkdXJQcm9ncmVzcyA6IDApO1xuICAgICAgICAgIHByb3BBcnJheS5wdXNoKGtleU9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBrZXk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BBcnJheSA9IC8qKiBAdHlwZSB7QXJyYXl9ICovKHByb3BlcnRpZXNbbmFtZV0pO1xuICAgICAgbGV0IHByZXZFYXNlO1xuICAgICAgLy8gbGV0IGR1clByb2dyZXNzID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wQXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSBwcm9wQXJyYXlbaV07XG4gICAgICAgIC8vIEVtdWxhdGUgV0FQUEkgZWFzaW5nIHBhcmFtZXRlciBwb3NpdGlvblxuICAgICAgICBjb25zdCBjdXJyZW50RWFzZSA9IHByb3AuZWFzZTtcbiAgICAgICAgcHJvcC5lYXNlID0gcHJldkVhc2UgPyBwcmV2RWFzZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgcHJldkVhc2UgPSBjdXJyZW50RWFzZTtcbiAgICAgICAgLy8gZHVyUHJvZ3Jlc3MgKz0gcHJvcC5kdXJhdGlvbjtcbiAgICAgICAgLy8gaWYgKGkgPT09IGwgLSAxICYmIGR1clByb2dyZXNzICE9PSB0b3RhbER1cmF0aW9uKSB7XG4gICAgICAgIC8vICAgcHJvcEFycmF5LnB1c2goeyBmcm9tOiBwcm9wLnRvLCBlYXNlOiBwcm9wLmVhc2UsIGR1cmF0aW9uOiB0b3RhbER1cmF0aW9uIC0gZHVyUHJvZ3Jlc3MgfSlcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgaWYgKCFwcm9wQXJyYXlbMF0uZHVyYXRpb24pIHtcbiAgICAgICAgcHJvcEFycmF5LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gcHJvcGVydGllcztcbn07XG5cbmNsYXNzIEpTQW5pbWF0aW9uIGV4dGVuZHMgVGltZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAgICogQHBhcmFtIHtBbmltYXRpb25QYXJhbXN9IHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHtUaW1lbGluZX0gW3BhcmVudF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtwYXJlbnRQb3NpdGlvbl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbZmFzdFNldD1mYWxzZV1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleD0wXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbmd0aD0wXVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgdGFyZ2V0cyxcbiAgICBwYXJhbWV0ZXJzLFxuICAgIHBhcmVudCxcbiAgICBwYXJlbnRQb3NpdGlvbixcbiAgICBmYXN0U2V0ID0gZmFsc2UsXG4gICAgaW5kZXggPSAwLFxuICAgIGxlbmd0aCA9IDBcbiAgKSB7XG5cbiAgICBzdXBlcigvKiogQHR5cGUge1RpbWVyUGFyYW1zJkFuaW1hdGlvblBhcmFtc30gKi8ocGFyYW1ldGVycyksIHBhcmVudCwgcGFyZW50UG9zaXRpb24pO1xuXG4gICAgY29uc3QgcGFyc2VkVGFyZ2V0cyA9IHJlZ2lzdGVyVGFyZ2V0cyh0YXJnZXRzKTtcbiAgICBjb25zdCB0YXJnZXRzTGVuZ3RoID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG5cbiAgICAvLyBJZiB0aGUgcGFyYW1ldGVycyBvYmplY3QgY29udGFpbnMgYSBcImtleWZyYW1lc1wiIHByb3BlcnR5LCBjb252ZXJ0IGFsbCB0aGUga2V5ZnJhbWVzIHZhbHVlcyB0byByZWd1bGFyIHByb3BlcnRpZXNcblxuICAgIGNvbnN0IGtmUGFyYW1zID0gLyoqIEB0eXBlIHtBbmltYXRpb25QYXJhbXN9ICovKHBhcmFtZXRlcnMpLmtleWZyYW1lcztcbiAgICBjb25zdCBwYXJhbXMgPSAvKiogQHR5cGUge0FuaW1hdGlvblBhcmFtc30gKi8oa2ZQYXJhbXMgPyBtZXJnZU9iamVjdHMoZ2VuZXJhdGVLZXlmcmFtZXMoLyoqIEB0eXBlIHtEdXJhdGlvbktleWZyYW1lc30gKi8oa2ZQYXJhbXMpLCBwYXJhbWV0ZXJzKSwgcGFyYW1ldGVycykgOiBwYXJhbWV0ZXJzKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGRlbGF5LFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlLFxuICAgICAgcGxheWJhY2tFYXNlLFxuICAgICAgbW9kaWZpZXIsXG4gICAgICBjb21wb3NpdGlvbixcbiAgICAgIG9uUmVuZGVyLFxuICAgIH0gPSBwYXJhbXM7XG5cbiAgICBjb25zdCBhbmltRGVmYXVsdHMgPSBwYXJlbnQgPyBwYXJlbnQuZGVmYXVsdHMgOiBnbG9iYWxzLmRlZmF1bHRzO1xuICAgIGNvbnN0IGFuaW1hUGxheWJhY2tFYXNlID0gc2V0VmFsdWUocGxheWJhY2tFYXNlLCBhbmltRGVmYXVsdHMucGxheWJhY2tFYXNlKTtcbiAgICBjb25zdCBhbmltRWFzZSA9IGFuaW1hUGxheWJhY2tFYXNlID8gcGFyc2VFYXNpbmdzKGFuaW1hUGxheWJhY2tFYXNlKSA6IG51bGw7XG4gICAgY29uc3QgaGFzU3ByaW5nID0gIWlzVW5kKGVhc2UpICYmICFpc1VuZCgvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSk7XG4gICAgY29uc3QgdEVhc2luZyA9IGhhc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlIDogc2V0VmFsdWUoZWFzZSwgYW5pbUVhc2UgPyAnbGluZWFyJyA6IGFuaW1EZWZhdWx0cy5lYXNlKTtcbiAgICBjb25zdCB0RHVyYXRpb24gPSBoYXNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZHVyYXRpb24gOiBzZXRWYWx1ZShkdXJhdGlvbiwgYW5pbURlZmF1bHRzLmR1cmF0aW9uKTtcbiAgICBjb25zdCB0RGVsYXkgPSBzZXRWYWx1ZShkZWxheSwgYW5pbURlZmF1bHRzLmRlbGF5KTtcbiAgICBjb25zdCB0TW9kaWZpZXIgPSBtb2RpZmllciB8fCBhbmltRGVmYXVsdHMubW9kaWZpZXI7XG4gICAgLy8gSWYgbm8gY29tcG9zaXRpb24gaXMgZGVmaW5lZCBhbmQgdGhlIHRhcmdldHMgbGVuZ3RoIGlzIGhpZ2ggKD49IDEwMDApIHNldCB0aGUgY29tcG9zaXRpb24gdG8gJ25vbmUnICgwKSBmb3IgZmFzdGVyIHR3ZWVuIGNyZWF0aW9uXG4gICAgY29uc3QgdENvbXBvc2l0aW9uID0gaXNVbmQoY29tcG9zaXRpb24pICYmIHRhcmdldHNMZW5ndGggPj0gSyA/IGNvbXBvc2l0aW9uVHlwZXMubm9uZSA6ICFpc1VuZChjb21wb3NpdGlvbikgPyBjb21wb3NpdGlvbiA6IGFuaW1EZWZhdWx0cy5jb21wb3NpdGlvbjtcbiAgICAvLyBUT0RPOiBEbyBub3QgY3JlYXRlIGFuIGVtcHR5IG9iamVjdCB1bnRpbCB3ZSBrbm93IHRoZSBhbmltYXRpb24gd2lsbCBnZW5lcmF0ZSBpbmxpbmUgc3R5bGVzXG4gICAgY29uc3QgYW5pbUlubGluZVN0eWxlcyA9IHt9O1xuICAgIC8vIGNvbnN0IGFic29sdXRlT2Zmc2V0VGltZSA9IHRoaXMuX29mZnNldDtcbiAgICBjb25zdCBhYnNvbHV0ZU9mZnNldFRpbWUgPSB0aGlzLl9vZmZzZXQgKyAocGFyZW50ID8gcGFyZW50Ll9vZmZzZXQgOiAwKTtcblxuICAgIGxldCBpdGVyYXRpb25EdXJhdGlvbiA9IE5hTjtcbiAgICBsZXQgaXRlcmF0aW9uRGVsYXkgPSBOYU47XG4gICAgbGV0IGFuaW1hdGlvbkFuaW1hdGlvbkxlbmd0aCA9IDA7XG4gICAgbGV0IHNob3VsZFRyaWdnZXJSZW5kZXIgPSAwO1xuXG4gICAgZm9yIChsZXQgdGFyZ2V0SW5kZXggPSAwOyB0YXJnZXRJbmRleCA8IHRhcmdldHNMZW5ndGg7IHRhcmdldEluZGV4KyspIHtcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1t0YXJnZXRJbmRleF07XG4gICAgICBjb25zdCB0aSA9IGluZGV4IHx8IHRhcmdldEluZGV4O1xuICAgICAgY29uc3QgdGwgPSBsZW5ndGggfHwgdGFyZ2V0c0xlbmd0aDtcblxuICAgICAgbGV0IGxhc3RUcmFuc2Zvcm1Hcm91cEluZGV4ID0gTmFOO1xuICAgICAgbGV0IGxhc3RUcmFuc2Zvcm1Hcm91cExlbmd0aCA9IE5hTjtcblxuICAgICAgZm9yIChsZXQgcCBpbiBwYXJhbXMpIHtcblxuICAgICAgICBpZiAoaXNLZXkocCkpIHtcblxuICAgICAgICAgIGNvbnN0IHR3ZWVuVHlwZSA9IGdldFR3ZWVuVHlwZSh0YXJnZXQsIHApO1xuXG4gICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBzYW5pdGl6ZVByb3BlcnR5TmFtZShwLCB0YXJnZXQsIHR3ZWVuVHlwZSk7XG5cbiAgICAgICAgICBsZXQgcHJvcFZhbHVlID0gcGFyYW1zW3BdO1xuXG4gICAgICAgICAgY29uc3QgaXNQcm9wVmFsdWVBcnJheSA9IGlzQXJyKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoZmFzdFNldCAmJiAhaXNQcm9wVmFsdWVBcnJheSkge1xuICAgICAgICAgICAgZmFzdFNldFZhbHVlc0FycmF5WzBdID0gcHJvcFZhbHVlO1xuICAgICAgICAgICAgZmFzdFNldFZhbHVlc0FycmF5WzFdID0gcHJvcFZhbHVlO1xuICAgICAgICAgICAgcHJvcFZhbHVlID0gZmFzdFNldFZhbHVlc0FycmF5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRPRE86IEFsbG93IG5lc3RlZCBrZXlmcmFtZXMgaW5zaWRlIE9iamVjdFZhbHVlIHZhbHVlIChwcm9wOiB7IHRvOiBbLjUsIDEsIC43NSwgMiwgM10gfSlcbiAgICAgICAgICAvLyBOb3JtYWxpemUgcHJvcGVydHkgdmFsdWVzIHRvIHZhbGlkIGtleWZyYW1lIHN5bnRheDpcbiAgICAgICAgICAvLyBbeCwgeV0gdG8gW3t0bzogW3gsIHldfV0gb3Ige3RvOiB4fSB0byBbe3RvOiB4fV0gb3Iga2VlcCBrZXlzIHN5bnRheCBbe30sIHt9LCB7fS4uLl1cbiAgICAgICAgICAvLyBjb25zdCBrZXlmcmFtZXMgPSBpc0Fycihwcm9wVmFsdWUpID8gcHJvcFZhbHVlLmxlbmd0aCA9PT0gMiAmJiAhaXNPYmoocHJvcFZhbHVlWzBdKSA/IFt7IHRvOiBwcm9wVmFsdWUgfV0gOiBwcm9wVmFsdWUgOiBbcHJvcFZhbHVlXTtcbiAgICAgICAgICBpZiAoaXNQcm9wVmFsdWVBcnJheSkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSAvKiogQHR5cGUge0FycmF5fSAqLyhwcm9wVmFsdWUpLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlzTm90T2JqZWN0VmFsdWUgPSAhaXNPYmoocHJvcFZhbHVlWzBdKTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgW3gsIHldIHRvIFt7dG86IFt4LCB5XX1dXG4gICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPT09IDIgJiYgaXNOb3RPYmplY3RWYWx1ZSkge1xuICAgICAgICAgICAgICBrZXlPYmplY3RUYXJnZXQudG8gPSAvKiogQHR5cGUge1R3ZWVuUGFyYW1WYWx1ZX0gKi8oLyoqIEB0eXBlIHt1bmtub3dufSAqLyhwcm9wVmFsdWUpKTtcbiAgICAgICAgICAgICAga2V5ZnJhbWVzVGFyZ2V0QXJyYXlbMF0gPSBrZXlPYmplY3RUYXJnZXQ7XG4gICAgICAgICAgICAgIGtleWZyYW1lcyA9IGtleWZyYW1lc1RhcmdldEFycmF5O1xuICAgICAgICAgICAgLy8gQ29udmVydCBbeCwgeSwgel0gdG8gW1t4LCB5XSwgel1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXlMZW5ndGggPiAyICYmIGlzTm90T2JqZWN0VmFsdWUpIHtcbiAgICAgICAgICAgICAga2V5ZnJhbWVzID0gW107XG4gICAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPE51bWJlcj59ICovKHByb3BWYWx1ZSkuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaSkge1xuICAgICAgICAgICAgICAgICAgZmFzdFNldFZhbHVlc0FycmF5WzBdID0gdjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIGZhc3RTZXRWYWx1ZXNBcnJheVsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICBrZXlmcmFtZXMucHVzaChmYXN0U2V0VmFsdWVzQXJyYXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBrZXlmcmFtZXMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAga2V5ZnJhbWVzID0gLyoqIEB0eXBlIHtBcnJheS48VHdlZW5LZXlWYWx1ZT59ICovKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleWZyYW1lc1RhcmdldEFycmF5WzBdID0gcHJvcFZhbHVlO1xuICAgICAgICAgICAga2V5ZnJhbWVzID0ga2V5ZnJhbWVzVGFyZ2V0QXJyYXk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHNpYmxpbmdzID0gbnVsbDtcbiAgICAgICAgICBsZXQgcHJldlR3ZWVuID0gbnVsbDtcbiAgICAgICAgICBsZXQgZmlyc3RUd2VlbkNoYW5nZVN0YXJ0VGltZSA9IE5hTjtcbiAgICAgICAgICBsZXQgbGFzdFR3ZWVuQ2hhbmdlRW5kVGltZSA9IDA7XG4gICAgICAgICAgbGV0IHR3ZWVuSW5kZXggPSAwO1xuXG4gICAgICAgICAgZm9yIChsZXQgbCA9IGtleWZyYW1lcy5sZW5ndGg7IHR3ZWVuSW5kZXggPCBsOyB0d2VlbkluZGV4KyspIHtcblxuICAgICAgICAgICAgY29uc3Qga2V5ZnJhbWUgPSBrZXlmcmFtZXNbdHdlZW5JbmRleF07XG5cbiAgICAgICAgICAgIGlmIChpc09iaihrZXlmcmFtZSkpIHtcbiAgICAgICAgICAgICAga2V5ID0ga2V5ZnJhbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBrZXlPYmplY3RUYXJnZXQudG8gPSAvKiogQHR5cGUge1R3ZWVuUGFyYW1WYWx1ZX0gKi8oa2V5ZnJhbWUpO1xuICAgICAgICAgICAgICBrZXkgPSBrZXlPYmplY3RUYXJnZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvRnVuY3Rpb25TdG9yZS5mdW5jID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRUb1ZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShrZXkudG8sIHRhcmdldCwgdGksIHRsLCB0b0Z1bmN0aW9uU3RvcmUpO1xuXG4gICAgICAgICAgICBsZXQgdHdlZW5Ub1ZhbHVlO1xuICAgICAgICAgICAgLy8gQWxsb3dzIGZ1bmN0aW9uIGJhc2VkIHZhbHVlcyB0byByZXR1cm4gYW4gb2JqZWN0IHN5bnRheCB2YWx1ZSAoe3RvOiB2fSlcbiAgICAgICAgICAgIGlmIChpc09iaihjb21wdXRlZFRvVmFsdWUpICYmICFpc1VuZChjb21wdXRlZFRvVmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgIGtleSA9IGNvbXB1dGVkVG9WYWx1ZTtcbiAgICAgICAgICAgICAgdHdlZW5Ub1ZhbHVlID0gY29tcHV0ZWRUb1ZhbHVlLnRvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHdlZW5Ub1ZhbHVlID0gY29tcHV0ZWRUb1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHdlZW5Gcm9tVmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKGtleS5mcm9tLCB0YXJnZXQsIHRpLCB0bCk7XG4gICAgICAgICAgICBjb25zdCBrZXlFYXNpbmcgPSBrZXkuZWFzZTtcbiAgICAgICAgICAgIGNvbnN0IGhhc1NwcmluZyA9ICFpc1VuZChrZXlFYXNpbmcpICYmICFpc1VuZCgvKiogQHR5cGUge1NwcmluZ30gKi8oa2V5RWFzaW5nKS5lYXNlKTtcbiAgICAgICAgICAgIC8vIEVhc2luZyBhcmUgdHJlYXRlZCBkaWZmZXJlbnRseSBhbmQgZG9uJ3QgYWNjZXB0IGZ1bmN0aW9uIGJhc2VkIHZhbHVlIHRvIHByZXZlbnQgaGF2aW5nIHRvIHBhc3MgYSBmdW5jdGlvbiB3cmFwcGVyIHRoYXQgcmV0dXJucyBhbiBvdGhlciBmdW5jdGlvbiBhbGwgdGhlIHRpbWVcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuRWFzaW5nID0gaGFzU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGtleUVhc2luZykuZWFzZSA6IGtleUVhc2luZyB8fCB0RWFzaW5nO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGRlZmF1bHQgaW5kaXZpZHVhbCBrZXlmcmFtZSBkdXJhdGlvbiBieSBkaXZpZGluZyB0aGUgdGwgb2Yga2V5ZnJhbWVzXG4gICAgICAgICAgICBjb25zdCB0d2VlbkR1cmF0aW9uID0gaGFzU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGtleUVhc2luZykuZHVyYXRpb24gOiBnZXRGdW5jdGlvblZhbHVlKHNldFZhbHVlKGtleS5kdXJhdGlvbiwgKGwgPiAxID8gZ2V0RnVuY3Rpb25WYWx1ZSh0RHVyYXRpb24sIHRhcmdldCwgdGksIHRsKSAvIGwgOiB0RHVyYXRpb24pKSwgdGFyZ2V0LCB0aSwgdGwpO1xuICAgICAgICAgICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxuICAgICAgICAgICAgY29uc3QgdHdlZW5EZWxheSA9IGdldEZ1bmN0aW9uVmFsdWUoc2V0VmFsdWUoa2V5LmRlbGF5LCAoIXR3ZWVuSW5kZXggPyB0RGVsYXkgOiAwKSksIHRhcmdldCwgdGksIHRsKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkQ29tcG9zaXRpb24gPSBnZXRGdW5jdGlvblZhbHVlKHNldFZhbHVlKGtleS5jb21wb3NpdGlvbiwgdENvbXBvc2l0aW9uKSwgdGFyZ2V0LCB0aSwgdGwpO1xuICAgICAgICAgICAgY29uc3QgdHdlZW5Db21wb3NpdGlvbiA9IGlzTnVtKGNvbXB1dGVkQ29tcG9zaXRpb24pID8gY29tcHV0ZWRDb21wb3NpdGlvbiA6IGNvbXBvc2l0aW9uVHlwZXNbY29tcHV0ZWRDb21wb3NpdGlvbl07XG4gICAgICAgICAgICAvLyBNb2RpZmllcnMgYXJlIHRyZWF0ZWQgZGlmZmVyZW50bHkgYW5kIGRvbid0IGFjY2VwdCBmdW5jdGlvbiBiYXNlZCB2YWx1ZSB0byBwcmV2ZW50IGhhdmluZyB0byBwYXNzIGEgZnVuY3Rpb24gd3JhcHBlclxuICAgICAgICAgICAgY29uc3QgdHdlZW5Nb2RpZmllciA9IGtleS5tb2RpZmllciB8fCB0TW9kaWZpZXI7XG4gICAgICAgICAgICBjb25zdCBoYXNGcm9tdmFsdWUgPSAhaXNVbmQodHdlZW5Gcm9tVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgaGFzVG9WYWx1ZSA9ICFpc1VuZCh0d2VlblRvVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgaXNGcm9tVG9BcnJheSA9IGlzQXJyKHR3ZWVuVG9WYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBpc0Zyb21Ub1ZhbHVlID0gaXNGcm9tVG9BcnJheSB8fCAoaGFzRnJvbXZhbHVlICYmIGhhc1RvVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgdHdlZW5TdGFydFRpbWUgPSBwcmV2VHdlZW4gPyBsYXN0VHdlZW5DaGFuZ2VFbmRUaW1lICsgdHdlZW5EZWxheSA6IHR3ZWVuRGVsYXk7XG4gICAgICAgICAgICBjb25zdCBhYnNvbHV0ZVN0YXJ0VGltZSA9IGFic29sdXRlT2Zmc2V0VGltZSArIHR3ZWVuU3RhcnRUaW1lO1xuXG4gICAgICAgICAgICAvLyBGb3JjZSBhIG9uUmVuZGVyIGNhbGxiYWNrIGlmIHRoZSBhbmltYXRpb24gY29udGFpbnMgYXQgbGVhc3Qgb25lIGZyb20gdmFsdWUgYW5kIGF1dG9wbGF5IGlzIHNldCB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKCFzaG91bGRUcmlnZ2VyUmVuZGVyICYmIChoYXNGcm9tdmFsdWUgfHwgaXNGcm9tVG9BcnJheSkpIHNob3VsZFRyaWdnZXJSZW5kZXIgPSAxO1xuXG4gICAgICAgICAgICBsZXQgcHJldlNpYmxpbmcgPSBwcmV2VHdlZW47XG5cbiAgICAgICAgICAgIGlmICh0d2VlbkNvbXBvc2l0aW9uICE9PSBjb21wb3NpdGlvblR5cGVzLm5vbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFzaWJsaW5ncykgc2libGluZ3MgPSBnZXRUd2VlblNpYmxpbmdzKHRhcmdldCwgcHJvcE5hbWUpO1xuICAgICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBzaWJsaW5ncy5faGVhZDtcbiAgICAgICAgICAgICAgLy8gSXRlcmF0ZSB0cm91Z2ggYWxsIHRoZSBuZXh0IHNpYmxpbmdzIHVudGlsIHdlIGZpbmQgYSBzaWJsaW5nIHdpdGggYW4gZXF1YWwgb3IgaW5mZXJpb3Igc3RhcnQgdGltZVxuICAgICAgICAgICAgICB3aGlsZSAobmV4dFNpYmxpbmcgJiYgIW5leHRTaWJsaW5nLl9pc092ZXJyaWRkZW4gJiYgbmV4dFNpYmxpbmcuX2Fic29sdXRlU3RhcnRUaW1lIDw9IGFic29sdXRlU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgcHJldlNpYmxpbmcgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLl9uZXh0UmVwO1xuICAgICAgICAgICAgICAgIC8vIE92ZXJyaWRlcyBhbGwgdGhlIG5leHQgc2libGluZ3MgaWYgdGhlIG5leHQgc2libGluZyBzdGFydHMgYXQgdGhlIHNhbWUgdGltZSBvZiBhZnRlciBhcyB0aGUgbmV3IHR3ZWVuIHN0YXJ0IHRpbWVcbiAgICAgICAgICAgICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcuX2Fic29sdXRlU3RhcnRUaW1lID49IGFic29sdXRlU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAobmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVUd2VlbihuZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBlbmRzIGJvdGggdGhlIGN1cnJlbnQgd2hpbGUgbG9vcCBhbmQgdGhlIHVwcGVyIG9uZSBvbmNlIGFsbCB0aGUgbmV4dCBzaWJsbGluZ3MgaGF2ZSBiZWVuIG92ZXJyaWRlblxuICAgICAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLl9uZXh0UmVwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWNvbXBvc2UgdmFsdWVzXG4gICAgICAgICAgICBpZiAoaXNGcm9tVG9WYWx1ZSkge1xuICAgICAgICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZShpc0Zyb21Ub0FycmF5ID8gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlblRvVmFsdWVbMF0sIHRhcmdldCwgdGksIHRsKSA6IHR3ZWVuRnJvbVZhbHVlLCBmcm9tVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUoaXNGcm9tVG9BcnJheSA/IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5Ub1ZhbHVlWzFdLCB0YXJnZXQsIHRpLCB0bCwgdG9GdW5jdGlvblN0b3JlKSA6IHR3ZWVuVG9WYWx1ZSwgdG9UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICBpZiAoZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLk5VTUJFUikge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZykge1xuICAgICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLl92YWx1ZVR5cGUgPT09IHZhbHVlVHlwZXMuVU5JVCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVGFyZ2V0T2JqZWN0LnQgPSB2YWx1ZVR5cGVzLlVOSVQ7XG4gICAgICAgICAgICAgICAgICAgIGZyb21UYXJnZXRPYmplY3QudSA9IHByZXZTaWJsaW5nLl91bml0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3JpZ2luYWxBbmltYXRhYmxlVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdHdlZW5UeXBlLCBhbmltSW5saW5lU3R5bGVzKSxcbiAgICAgICAgICAgICAgICAgICAgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWVcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAoZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUudCA9PT0gdmFsdWVUeXBlcy5VTklUKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21UYXJnZXRPYmplY3QudCA9IHZhbHVlVHlwZXMuVU5JVDtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVRhcmdldE9iamVjdC51ID0gZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUudTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChoYXNUb1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUodHdlZW5Ub1ZhbHVlLCB0b1RhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZUd2Vlbikge1xuICAgICAgICAgICAgICAgICAgZGVjb21wb3NlVHdlZW5WYWx1ZShwcmV2VHdlZW4sIHRvVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBnZXQgYW5kIHBhcnNlIHRoZSBvcmlnaW5hbCB2YWx1ZSBpZiB0aGUgdHdlZW4gaXMgcGFydCBvZiBhIHRpbWVsaW5lIGFuZCBoYXMgYSBwcmV2aW91cyBzaWJsaW5nIHBhcnQgb2YgdGhlIHNhbWUgdGltZWxpbmVcbiAgICAgICAgICAgICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKHBhcmVudCAmJiBwcmV2U2libGluZyAmJiBwcmV2U2libGluZy5wYXJlbnQucGFyZW50ID09PSBwYXJlbnQgPyBwcmV2U2libGluZy5fdmFsdWUgOlxuICAgICAgICAgICAgICAgICAgZ2V0T3JpZ2luYWxBbmltYXRhYmxlVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdHdlZW5UeXBlLCBhbmltSW5saW5lU3R5bGVzKSwgdG9UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaGFzRnJvbXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUodHdlZW5Gcm9tVmFsdWUsIGZyb21UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2VHdlZW4pIHtcbiAgICAgICAgICAgICAgICAgIGRlY29tcG9zZVR3ZWVuVmFsdWUocHJldlR3ZWVuLCBmcm9tVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUocGFyZW50ICYmIHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLnBhcmVudC5wYXJlbnQgPT09IHBhcmVudCA/IHByZXZTaWJsaW5nLl92YWx1ZSA6XG4gICAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIGdldCBhbmQgcGFyc2UgdGhlIG9yaWdpbmFsIHZhbHVlIGlmIHRoZSB0d2VlbiBpcyBwYXJ0IG9mIGEgdGltZWxpbmUgYW5kIGhhcyBhIHByZXZpb3VzIHNpYmxpbmcgcGFydCBvZiB0aGUgc2FtZSB0aW1lbGluZVxuICAgICAgICAgICAgICAgICAgZ2V0T3JpZ2luYWxBbmltYXRhYmxlVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdHdlZW5UeXBlLCBhbmltSW5saW5lU3R5bGVzKSwgZnJvbVRhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IG9wZXJhdG9yc1xuICAgICAgICAgICAgaWYgKGZyb21UYXJnZXRPYmplY3Qubykge1xuICAgICAgICAgICAgICBmcm9tVGFyZ2V0T2JqZWN0Lm4gPSBnZXRSZWxhdGl2ZVZhbHVlKFxuICAgICAgICAgICAgICAgICFwcmV2U2libGluZyA/IGRlY29tcG9zZVJhd1ZhbHVlKFxuICAgICAgICAgICAgICAgICAgZ2V0T3JpZ2luYWxBbmltYXRhYmxlVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdHdlZW5UeXBlLCBhbmltSW5saW5lU3R5bGVzKSxcbiAgICAgICAgICAgICAgICAgIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlXG4gICAgICAgICAgICAgICAgKS5uIDogcHJldlNpYmxpbmcuX3RvTnVtYmVyLFxuICAgICAgICAgICAgICAgIGZyb21UYXJnZXRPYmplY3QubixcbiAgICAgICAgICAgICAgICBmcm9tVGFyZ2V0T2JqZWN0Lm9cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvVGFyZ2V0T2JqZWN0Lm8pIHtcbiAgICAgICAgICAgICAgdG9UYXJnZXRPYmplY3QubiA9IGdldFJlbGF0aXZlVmFsdWUoZnJvbVRhcmdldE9iamVjdC5uLCB0b1RhcmdldE9iamVjdC5uLCB0b1RhcmdldE9iamVjdC5vKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVmFsdWVzIG9tb2dlbmlzYXRpb24gaW4gY2FzZXMgb2YgdHlwZSBkaWZmZXJlbmNlIGJldHdlZW4gXCJmcm9tXCIgYW5kIFwidG9cIlxuICAgICAgICAgICAgaWYgKGZyb21UYXJnZXRPYmplY3QudCAhPT0gdG9UYXJnZXRPYmplY3QudCkge1xuICAgICAgICAgICAgICBpZiAoZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTVBMRVggfHwgdG9UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT01QTEVYKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxleFZhbHVlID0gZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTVBMRVggPyBmcm9tVGFyZ2V0T2JqZWN0IDogdG9UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm90Q29tcGxleFZhbHVlID0gZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTVBMRVggPyB0b1RhcmdldE9iamVjdCA6IGZyb21UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgbm90Q29tcGxleFZhbHVlLnQgPSB2YWx1ZVR5cGVzLkNPTVBMRVg7XG4gICAgICAgICAgICAgICAgbm90Q29tcGxleFZhbHVlLnMgPSBjbG9uZUFycmF5KGNvbXBsZXhWYWx1ZS5zKTtcbiAgICAgICAgICAgICAgICBub3RDb21wbGV4VmFsdWUuZCA9IGNvbXBsZXhWYWx1ZS5kLm1hcCgoKSA9PiBub3RDb21wbGV4VmFsdWUubik7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLlVOSVQgfHwgdG9UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5VTklUKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdFZhbHVlID0gZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLlVOSVQgPyBmcm9tVGFyZ2V0T2JqZWN0IDogdG9UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm90VW5pdFZhbHVlID0gZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLlVOSVQgPyB0b1RhcmdldE9iamVjdCA6IGZyb21UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgbm90VW5pdFZhbHVlLnQgPSB2YWx1ZVR5cGVzLlVOSVQ7XG4gICAgICAgICAgICAgICAgbm90VW5pdFZhbHVlLnUgPSB1bml0VmFsdWUudTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09MT1IgfHwgdG9UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT0xPUikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yVmFsdWUgPSBmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09MT1IgPyBmcm9tVGFyZ2V0T2JqZWN0IDogdG9UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm90Q29sb3JWYWx1ZSA9IGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT0xPUiA/IHRvVGFyZ2V0T2JqZWN0IDogZnJvbVRhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgICBub3RDb2xvclZhbHVlLnQgPSB2YWx1ZVR5cGVzLkNPTE9SO1xuICAgICAgICAgICAgICAgIG5vdENvbG9yVmFsdWUucyA9IGNvbG9yVmFsdWUucztcbiAgICAgICAgICAgICAgICBub3RDb2xvclZhbHVlLmQgPSBbMCwgMCwgMCwgMV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVW5pdCBjb252ZXJzaW9uXG4gICAgICAgICAgICBpZiAoZnJvbVRhcmdldE9iamVjdC51ICE9PSB0b1RhcmdldE9iamVjdC51KSB7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZVRvQ29udmVydCA9IHRvVGFyZ2V0T2JqZWN0LnUgPyBmcm9tVGFyZ2V0T2JqZWN0IDogdG9UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgIHZhbHVlVG9Db252ZXJ0ID0gY29udmVydFZhbHVlVW5pdCgvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KSwgdmFsdWVUb0NvbnZlcnQsIHRvVGFyZ2V0T2JqZWN0LnUgPyB0b1RhcmdldE9iamVjdC51IDogZnJvbVRhcmdldE9iamVjdC51LCBmYWxzZSk7XG4gICAgICAgICAgICAgIC8vIFRPRE86XG4gICAgICAgICAgICAgIC8vIGNvbnZlcnRWYWx1ZVVuaXQodGFyZ2V0LCB0by51ID8gZnJvbSA6IHRvLCB0by51ID8gdG8udSA6IGZyb20udSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpbGwgaW4gbm9uIGV4aXN0aW5nIGNvbXBsZXggdmFsdWVzXG4gICAgICAgICAgICBpZiAodG9UYXJnZXRPYmplY3QuZCAmJiBmcm9tVGFyZ2V0T2JqZWN0LmQgJiYgKHRvVGFyZ2V0T2JqZWN0LmQubGVuZ3RoICE9PSBmcm9tVGFyZ2V0T2JqZWN0LmQubGVuZ3RoKSkge1xuICAgICAgICAgICAgICBjb25zdCBsb25nZXN0VmFsdWUgPSBmcm9tVGFyZ2V0T2JqZWN0LmQubGVuZ3RoID4gdG9UYXJnZXRPYmplY3QuZC5sZW5ndGggPyBmcm9tVGFyZ2V0T2JqZWN0IDogdG9UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgIGNvbnN0IHNob3J0ZXN0VmFsdWUgPSBsb25nZXN0VmFsdWUgPT09IGZyb21UYXJnZXRPYmplY3QgPyB0b1RhcmdldE9iamVjdCA6IGZyb21UYXJnZXRPYmplY3Q7XG4gICAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIGlmIG4gc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiAwIGZvciBkZWZhdWx0IGNvbXBsZXggdmFsdWVzXG4gICAgICAgICAgICAgIHNob3J0ZXN0VmFsdWUuZCA9IGxvbmdlc3RWYWx1ZS5kLm1hcCgoXywgaSkgPT4gaXNVbmQoc2hvcnRlc3RWYWx1ZS5kW2ldKSA/IDAgOiBzaG9ydGVzdFZhbHVlLmRbaV0pO1xuICAgICAgICAgICAgICBzaG9ydGVzdFZhbHVlLnMgPSBjbG9uZUFycmF5KGxvbmdlc3RWYWx1ZS5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVHdlZW4gZmFjdG9yeVxuXG4gICAgICAgICAgICAvLyBSb3VuZGluZyBpcyBuZWNlc3NhcnkgaGVyZSB0byBtaW5pbWl6ZSBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuVXBkYXRlRHVyYXRpb24gPSByb3VuZCgrdHdlZW5EdXJhdGlvbiB8fCBtaW5WYWx1ZSwgMTIpO1xuXG4gICAgICAgICAgICAvKiogQHR5cGUge1R3ZWVufSAqL1xuICAgICAgICAgICAgY29uc3QgdHdlZW4gPSB7XG4gICAgICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICAgICAgaWQ6IHR3ZWVuSWQrKyxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BOYW1lLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgX3ZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBfZnVuYzogdG9GdW5jdGlvblN0b3JlLmZ1bmMsXG4gICAgICAgICAgICAgIF9lYXNlOiBwYXJzZUVhc2luZ3ModHdlZW5FYXNpbmcpLFxuICAgICAgICAgICAgICBfZnJvbU51bWJlcnM6IGNsb25lQXJyYXkoZnJvbVRhcmdldE9iamVjdC5kKSxcbiAgICAgICAgICAgICAgX3RvTnVtYmVyczogY2xvbmVBcnJheSh0b1RhcmdldE9iamVjdC5kKSxcbiAgICAgICAgICAgICAgX3N0cmluZ3M6IGNsb25lQXJyYXkodG9UYXJnZXRPYmplY3QucyksXG4gICAgICAgICAgICAgIF9mcm9tTnVtYmVyOiBmcm9tVGFyZ2V0T2JqZWN0Lm4sXG4gICAgICAgICAgICAgIF90b051bWJlcjogdG9UYXJnZXRPYmplY3QubixcbiAgICAgICAgICAgICAgX251bWJlcnM6IGNsb25lQXJyYXkoZnJvbVRhcmdldE9iamVjdC5kKSwgLy8gRm9yIGFkZGl0aXZlIHR3ZWVuIGFuZCBhbmltYXRhYmxlc1xuICAgICAgICAgICAgICBfbnVtYmVyOiBmcm9tVGFyZ2V0T2JqZWN0Lm4sIC8vIEZvciBhZGRpdGl2ZSB0d2VlbiBhbmQgYW5pbWF0YWJsZXNcbiAgICAgICAgICAgICAgX3VuaXQ6IHRvVGFyZ2V0T2JqZWN0LnUsXG4gICAgICAgICAgICAgIF9tb2RpZmllcjogdHdlZW5Nb2RpZmllcixcbiAgICAgICAgICAgICAgX2N1cnJlbnRUaW1lOiAwLFxuICAgICAgICAgICAgICBfc3RhcnRUaW1lOiB0d2VlblN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgX2RlbGF5OiArdHdlZW5EZWxheSxcbiAgICAgICAgICAgICAgX3VwZGF0ZUR1cmF0aW9uOiB0d2VlblVwZGF0ZUR1cmF0aW9uLFxuICAgICAgICAgICAgICBfY2hhbmdlRHVyYXRpb246IHR3ZWVuVXBkYXRlRHVyYXRpb24sXG4gICAgICAgICAgICAgIF9hYnNvbHV0ZVN0YXJ0VGltZTogYWJzb2x1dGVTdGFydFRpbWUsXG4gICAgICAgICAgICAgIC8vIE5PVEU6IEludmVzdGlnYXRlIGJpdCBwYWNraW5nIHRvIHN0b3JlcyBFTlVNIC8gQk9PTFxuICAgICAgICAgICAgICBfdHdlZW5UeXBlOiB0d2VlblR5cGUsXG4gICAgICAgICAgICAgIF92YWx1ZVR5cGU6IHRvVGFyZ2V0T2JqZWN0LnQsXG4gICAgICAgICAgICAgIF9jb21wb3NpdGlvbjogdHdlZW5Db21wb3NpdGlvbixcbiAgICAgICAgICAgICAgX2lzT3ZlcmxhcHBlZDogMCxcbiAgICAgICAgICAgICAgX2lzT3ZlcnJpZGRlbjogMCxcbiAgICAgICAgICAgICAgX3JlbmRlclRyYW5zZm9ybXM6IDAsXG4gICAgICAgICAgICAgIF9wcmV2UmVwOiBudWxsLCAvLyBGb3IgcmVwbGFjZWQgdHdlZW5cbiAgICAgICAgICAgICAgX25leHRSZXA6IG51bGwsIC8vIEZvciByZXBsYWNlZCB0d2VlblxuICAgICAgICAgICAgICBfcHJldkFkZDogbnVsbCwgLy8gRm9yIGFkZGl0aXZlIHR3ZWVuXG4gICAgICAgICAgICAgIF9uZXh0QWRkOiBudWxsLCAvLyBGb3IgYWRkaXRpdmUgdHdlZW5cbiAgICAgICAgICAgICAgX3ByZXY6IG51bGwsXG4gICAgICAgICAgICAgIF9uZXh0OiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHR3ZWVuQ29tcG9zaXRpb24gIT09IGNvbXBvc2l0aW9uVHlwZXMubm9uZSkge1xuICAgICAgICAgICAgICBjb21wb3NlVHdlZW4odHdlZW4sIHNpYmxpbmdzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTmFOKGZpcnN0VHdlZW5DaGFuZ2VTdGFydFRpbWUpKSB7XG4gICAgICAgICAgICAgIGZpcnN0VHdlZW5DaGFuZ2VTdGFydFRpbWUgPSB0d2Vlbi5fc3RhcnRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUm91bmRpbmcgaXMgbmVjZXNzYXJ5IGhlcmUgdG8gbWluaW1pemUgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXG4gICAgICAgICAgICBsYXN0VHdlZW5DaGFuZ2VFbmRUaW1lID0gcm91bmQodHdlZW5TdGFydFRpbWUgKyB0d2VlblVwZGF0ZUR1cmF0aW9uLCAxMik7XG4gICAgICAgICAgICBwcmV2VHdlZW4gPSB0d2VlbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbkFuaW1hdGlvbkxlbmd0aCsrO1xuXG4gICAgICAgICAgICBhZGRDaGlsZCh0aGlzLCB0d2Vlbik7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBVcGRhdGUgYW5pbWF0aW9uIHRpbWluZ3Mgd2l0aCB0aGUgYWRkZWQgdHdlZW5zIHByb3BlcnRpZXNcblxuICAgICAgICAgIGlmIChpc05hTihpdGVyYXRpb25EZWxheSkgfHwgZmlyc3RUd2VlbkNoYW5nZVN0YXJ0VGltZSA8IGl0ZXJhdGlvbkRlbGF5KSB7XG4gICAgICAgICAgICBpdGVyYXRpb25EZWxheSA9IGZpcnN0VHdlZW5DaGFuZ2VTdGFydFRpbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzTmFOKGl0ZXJhdGlvbkR1cmF0aW9uKSB8fCBsYXN0VHdlZW5DaGFuZ2VFbmRUaW1lID4gaXRlcmF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAgIGl0ZXJhdGlvbkR1cmF0aW9uID0gbGFzdFR3ZWVuQ2hhbmdlRW5kVGltZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUT0RPOiBGaW5kIGEgd2F5IHRvIGlubGluZSB0d2Vlbi5fcmVuZGVyVHJhbnNmb3JtcyA9IDEgaGVyZVxuICAgICAgICAgIGlmICh0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuVFJBTlNGT1JNKSB7XG4gICAgICAgICAgICBsYXN0VHJhbnNmb3JtR3JvdXBJbmRleCA9IGFuaW1hdGlvbkFuaW1hdGlvbkxlbmd0aCAtIHR3ZWVuSW5kZXg7XG4gICAgICAgICAgICBsYXN0VHJhbnNmb3JtR3JvdXBMZW5ndGggPSBhbmltYXRpb25BbmltYXRpb25MZW5ndGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgX3JlbmRlclRyYW5zZm9ybXMgdG8gbGFzdCB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gY29ycmVjdGx5IHJlbmRlciB0aGUgdHJhbnNmb3JtcyBsaXN0XG4gICAgICBpZiAoIWlzTmFOKGxhc3RUcmFuc2Zvcm1Hcm91cEluZGV4KSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtUd2Vlbn0gKi90d2VlbikgPT4ge1xuICAgICAgICAgIGlmIChpID49IGxhc3RUcmFuc2Zvcm1Hcm91cEluZGV4ICYmIGkgPCBsYXN0VHJhbnNmb3JtR3JvdXBMZW5ndGgpIHtcbiAgICAgICAgICAgIHR3ZWVuLl9yZW5kZXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICAgIGlmICh0d2Vlbi5fY29tcG9zaXRpb24gPT09IGNvbXBvc2l0aW9uVHlwZXMuYmxlbmQpIHtcbiAgICAgICAgICAgICAgZm9yRWFjaENoaWxkcmVuKGFkZGl0aXZlLmFuaW1hdGlvbiwgKC8qKiBAdHlwZSB7VHdlZW59ICovYWRkaXRpdmVUd2VlbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhZGRpdGl2ZVR3ZWVuLmlkID09PSB0d2Vlbi5pZCkge1xuICAgICAgICAgICAgICAgICAgYWRkaXRpdmVUd2Vlbi5fcmVuZGVyVHJhbnNmb3JtcyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmICghdGFyZ2V0c0xlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKGBObyB0YXJnZXQgZm91bmQuIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCB5b3UncmUgdHJ5aW5nIHRvIGFuaW1hdGUgaXMgYWNjZXNzaWJsZSBiZWZvcmUgY3JlYXRpbmcgeW91ciBhbmltYXRpb24uYCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZXJhdGlvbkRlbGF5KSB7XG4gICAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7VHdlZW59ICovdHdlZW4pID0+IHtcbiAgICAgICAgLy8gSWYgKHN0YXJ0VGltZSAtIGRlbGF5KSBlcXVhbHMgMCwgdGhpcyBtZWFucyB0aGUgdHdlZW4gaXMgYXQgdGhlIGJlZ2luaW5nIG9mIHRoZSBhbmltYXRpb24gc28gd2UgbmVlZCB0byB0cmltIHRoZSBkZWxheSB0b29cbiAgICAgICAgaWYgKCEodHdlZW4uX3N0YXJ0VGltZSAtIHR3ZWVuLl9kZWxheSkpIHtcbiAgICAgICAgICB0d2Vlbi5fZGVsYXkgLT0gaXRlcmF0aW9uRGVsYXk7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW4uX3N0YXJ0VGltZSAtPSBpdGVyYXRpb25EZWxheTtcbiAgICAgIH0pO1xuICAgICAgaXRlcmF0aW9uRHVyYXRpb24gLT0gaXRlcmF0aW9uRGVsYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGlvbkRlbGF5ID0gMDtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50cyBpdGVyYXRpb25EdXJhdGlvbiB0byBiZSBOYU4gaWYgbm8gdmFsaWQgYW5pbWF0YWJsZSBwcm9wcyBoYXZlIGJlZW4gcHJvdmlkZWRcbiAgICAvLyBQcmV2ZW50cyBfaXRlcmF0aW9uQ291bnQgdG8gYmUgTmFOIGlmIG5vIHZhbGlkIGFuaW1hdGFibGUgcHJvcHMgaGF2ZSBiZWVuIHByb3ZpZGVkXG4gICAgaWYgKCFpdGVyYXRpb25EdXJhdGlvbikge1xuICAgICAgaXRlcmF0aW9uRHVyYXRpb24gPSBtaW5WYWx1ZTtcbiAgICAgIHRoaXMuaXRlcmF0aW9uQ291bnQgPSAwO1xuICAgIH1cbiAgICAvKiogQHR5cGUge1RhcmdldHNBcnJheX0gKi9cbiAgICB0aGlzLnRhcmdldHMgPSBwYXJzZWRUYXJnZXRzO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuZHVyYXRpb24gPSBpdGVyYXRpb25EdXJhdGlvbiA9PT0gbWluVmFsdWUgPyBtaW5WYWx1ZSA6IGNsYW1wSW5maW5pdHkoKChpdGVyYXRpb25EdXJhdGlvbiArIHRoaXMuX2xvb3BEZWxheSkgKiB0aGlzLml0ZXJhdGlvbkNvdW50KSAtIHRoaXMuX2xvb3BEZWxheSkgfHwgbWluVmFsdWU7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uUmVuZGVyID0gb25SZW5kZXIgfHwgYW5pbURlZmF1bHRzLm9uUmVuZGVyO1xuICAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gICAgdGhpcy5fZWFzZSA9IGFuaW1FYXNlO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2RlbGF5ID0gaXRlcmF0aW9uRGVsYXk7XG4gICAgLy8gTk9URTogSSdtIGtlZXBpbmcgZGVsYXkgdmFsdWVzIHNlcGFyYXRlZCBmcm9tIG9mZnNldHMgaW4gdGltZWxpbmVzIGJlY2F1c2UgZGVsYXlzIGNhbiBvdmVycmlkZSBwcmV2aW91cyB0d2VlbnMgYW5kIGl0IGNvdWxkIGJlIGNvbmZ1c2luZyB0byBkZWJ1ZyBhIHRpbWVsaW5lIHdpdGggb3ZlcnJpZGRlbiB0d2VlbnMgYW5kIG5vIGFzc29jaWF0ZWQgdmlzaWJsZSBkZWxheXMuXG4gICAgLy8gdGhpcy5fZGVsYXkgPSBwYXJlbnQgPyAwIDogaXRlcmF0aW9uRGVsYXk7XG4gICAgLy8gdGhpcy5fb2Zmc2V0ICs9IHBhcmVudCA/IGl0ZXJhdGlvbkRlbGF5IDogMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uID0gaXRlcmF0aW9uRHVyYXRpb247XG4gICAgLyoqIEB0eXBlIHt7fX0gKi9cbiAgICB0aGlzLl9pbmxpbmVTdHlsZXMgPSBhbmltSW5saW5lU3R5bGVzO1xuXG4gICAgaWYgKCF0aGlzLl9hdXRvcGxheSAmJiBzaG91bGRUcmlnZ2VyUmVuZGVyKSB0aGlzLm9uUmVuZGVyKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gbmV3RHVyYXRpb25cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHN0cmV0Y2gobmV3RHVyYXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50RHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgIGlmIChjdXJyZW50RHVyYXRpb24gPT09IG5vcm1hbGl6ZVRpbWUobmV3RHVyYXRpb24pKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB0aW1lU2NhbGUgPSBuZXdEdXJhdGlvbiAvIGN1cnJlbnREdXJhdGlvbjtcbiAgICAvLyBOT1RFOiBGaW5kIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhlIHN0cmV0Y2ggb2YgYW4gYW5pbWF0aW9uIGFmdGVyIHN0cmV0Y2ggPSAwXG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1R3ZWVufSAqL3R3ZWVuKSA9PiB7XG4gICAgICAvLyBSb3VuZGluZyBpcyBuZWNlc3NhcnkgaGVyZSB0byBtaW5pbWl6ZSBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgICAgIHR3ZWVuLl91cGRhdGVEdXJhdGlvbiA9IG5vcm1hbGl6ZVRpbWUodHdlZW4uX3VwZGF0ZUR1cmF0aW9uICogdGltZVNjYWxlKTtcbiAgICAgIHR3ZWVuLl9jaGFuZ2VEdXJhdGlvbiA9IG5vcm1hbGl6ZVRpbWUodHdlZW4uX2NoYW5nZUR1cmF0aW9uICogdGltZVNjYWxlKTtcbiAgICAgIHR3ZWVuLl9jdXJyZW50VGltZSAqPSB0aW1lU2NhbGU7XG4gICAgICB0d2Vlbi5fc3RhcnRUaW1lICo9IHRpbWVTY2FsZTtcbiAgICAgIHR3ZWVuLl9hYnNvbHV0ZVN0YXJ0VGltZSAqPSB0aW1lU2NhbGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1cGVyLnN0cmV0Y2gobmV3RHVyYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtUd2Vlbn0gKi90d2VlbikgPT4ge1xuICAgICAgY29uc3Qgb2dWYWx1ZSA9IGdldE9yaWdpbmFsQW5pbWF0YWJsZVZhbHVlKHR3ZWVuLnRhcmdldCwgdHdlZW4ucHJvcGVydHksIHR3ZWVuLl90d2VlblR5cGUpO1xuICAgICAgZGVjb21wb3NlUmF3VmFsdWUob2dWYWx1ZSwgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUpO1xuICAgICAgdHdlZW4uX2Zyb21OdW1iZXJzID0gY2xvbmVBcnJheShkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZS5kKTtcbiAgICAgIHR3ZWVuLl9mcm9tTnVtYmVyID0gZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUubjtcbiAgICAgIGlmICh0d2Vlbi5fZnVuYykge1xuICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZSh0d2Vlbi5fZnVuYygpLCB0b1RhcmdldE9iamVjdCk7XG4gICAgICAgIHR3ZWVuLl90b051bWJlcnMgPSBjbG9uZUFycmF5KHRvVGFyZ2V0T2JqZWN0LmQpO1xuICAgICAgICB0d2Vlbi5fc3RyaW5ncyA9IGNsb25lQXJyYXkodG9UYXJnZXRPYmplY3Qucyk7XG4gICAgICAgIHR3ZWVuLl90b051bWJlciA9IHRvVGFyZ2V0T2JqZWN0Lm47XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHRoZSBhbmltYXRpb24gYW5kIHJldmVydCBhbGwgdGhlIHZhbHVlcyBhZmZlY3RlZCBieSB0aGlzIGFuaW1hdGlvbiB0byB0aGVpciBvcmlnaW5hbCBzdGF0ZVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmV2ZXJ0KCkge1xuICAgIHN1cGVyLnJldmVydCgpO1xuICAgIHJldHVybiBjbGVhbklubGluZVN0eWxlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtDYWxsYmFjazx0aGlzPn0gW2NhbGxiYWNrXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgdGhlbihjYWxsYmFjaykge1xuICAgIHJldHVybiBzdXBlci50aGVuKGNhbGxiYWNrKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEBwYXJhbSB7QW5pbWF0aW9uUGFyYW1zfSBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtKU0FuaW1hdGlvbn1cbiAqL1xuY29uc3QgYW5pbWF0ZSA9ICh0YXJnZXRzLCBwYXJhbWV0ZXJzKSA9PiBuZXcgSlNBbmltYXRpb24odGFyZ2V0cywgcGFyYW1ldGVycywgbnVsbCwgMCwgZmFsc2UpLmluaXQoKTtcblxuXG5cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBlYXNpbmcgZnVuY3Rpb24gaW50byBhIHZhbGlkIENTUyBsaW5lYXIoKSB0aW1pbmcgZnVuY3Rpb24gc3RyaW5nXG4gKiBAcGFyYW0ge0Vhc2luZ0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTEwMF1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IENTUyBsaW5lYXIoKSB0aW1pbmcgZnVuY3Rpb25cbiAqL1xuY29uc3QgZWFzaW5nVG9MaW5lYXIgPSAoZm4sIHNhbXBsZXMgPSAxMDApID0+IHtcbiAgY29uc3QgcG9pbnRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHNhbXBsZXM7IGkrKykgcG9pbnRzLnB1c2goZm4oaSAvIHNhbXBsZXMpKTtcbiAgcmV0dXJuIGBsaW5lYXIoJHtwb2ludHMuam9pbignLCAnKX0pYDtcbn07XG5cbmNvbnN0IFdBQVBJRWFzZXNMb29rdXBzID0ge1xuICBpbjogJ2Vhc2UtaW4nLFxuICBvdXQ6ICdlYXNlLW91dCcsXG4gIGluT3V0OiAnZWFzZS1pbi1vdXQnLFxufTtcblxuY29uc3QgV0FBUEllYXNlcyA9IC8qI19fUFVSRV9fKi8oKCkgPT4ge1xuICBjb25zdCBsaXN0ID0ge307XG4gIGZvciAobGV0IHR5cGUgaW4gZWFzZVR5cGVzKSBsaXN0W3R5cGVdID0gYSA9PiBlYXNlVHlwZXNbdHlwZV0oZWFzZUluUG93ZXIoYSkpO1xuICByZXR1cm4gLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBFYXNpbmdGdW5jdGlvbj59ICovKGxpc3QpO1xufSkoKTtcblxuLyoqXG4gKiBAcGFyYW0gIHtFYXNpbmdQYXJhbX0gZWFzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCBwYXJzZVdBQVBJRWFzaW5nID0gKGVhc2UpID0+IHtcbiAgbGV0IHBhcnNlZEVhc2UgPSBXQUFQSUVhc2VzTG9va3Vwc1tlYXNlXTtcbiAgaWYgKHBhcnNlZEVhc2UpIHJldHVybiBwYXJzZWRFYXNlO1xuICBwYXJzZWRFYXNlID0gJ2xpbmVhcic7XG4gIGlmIChpc1N0cihlYXNlKSkge1xuICAgIGlmIChcbiAgICAgIHN0cmluZ1N0YXJ0c1dpdGgoZWFzZSwgJ2xpbmVhcicpIHx8XG4gICAgICBzdHJpbmdTdGFydHNXaXRoKGVhc2UsICdjdWJpYy0nKSB8fFxuICAgICAgc3RyaW5nU3RhcnRzV2l0aChlYXNlLCAnc3RlcHMnKSB8fFxuICAgICAgc3RyaW5nU3RhcnRzV2l0aChlYXNlLCAnZWFzZScpXG4gICAgKSB7XG4gICAgICBwYXJzZWRFYXNlID0gZWFzZTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZ1N0YXJ0c1dpdGgoZWFzZSwgJ2N1YmljQicpKSB7XG4gICAgICBwYXJzZWRFYXNlID0gdG9Mb3dlckNhc2UoZWFzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlRWFzZVN0cmluZyhlYXNlLCBXQUFQSWVhc2VzLCBXQUFQSUVhc2VzTG9va3Vwcyk7XG4gICAgICBpZiAoaXNGbmMocGFyc2VkKSkgcGFyc2VkRWFzZSA9IHBhcnNlZCA9PT0gbm9uZSA/ICdsaW5lYXInIDogZWFzaW5nVG9MaW5lYXIocGFyc2VkKTtcbiAgICB9XG4gICAgV0FBUElFYXNlc0xvb2t1cHNbZWFzZV0gPSBwYXJzZWRFYXNlO1xuICB9IGVsc2UgaWYgKGlzRm5jKGVhc2UpKSB7XG4gICAgY29uc3QgZWFzaW5nID0gZWFzaW5nVG9MaW5lYXIoZWFzZSk7XG4gICAgaWYgKGVhc2luZykgcGFyc2VkRWFzZSA9IGVhc2luZztcbiAgfSBlbHNlIGlmICgvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSkge1xuICAgIHBhcnNlZEVhc2UgPSBlYXNpbmdUb0xpbmVhcigvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSk7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZEVhc2U7XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtTdHJpbmd8TnVtYmVyfEFycmF5PFN0cmluZz58QXJyYXk8TnVtYmVyPn0gV0FBUElUd2VlblZhbHVlXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgV0FBUElGdW5jdGlvbnZhbHVlXG4gKiBAcGFyYW0ge0RPTVRhcmdldH0gdGFyZ2V0IC0gVGhlIGFuaW1hdGVkIHRhcmdldFxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gVGhlIHRhcmdldCBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgYW5pbWF0ZWQgdGFyZ2V0c1xuICogQHJldHVybiB7V0FBUElUd2VlblZhbHVlfVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1dBQVBJVHdlZW5WYWx1ZXxXQUFQSUZ1bmN0aW9udmFsdWV8QXJyYXk8U3RyaW5nfE51bWJlcnxXQUFQSUZ1bmN0aW9udmFsdWU+fSBXQUFQSUtleWZyYW1lVmFsdWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoYW5pbWF0aW9uOiBXQUFQSUFuaW1hdGlvbikgPT4gdm9pZH0gV0FBUElDYWxsYmFja1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV0FBUElUd2Vlbk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7V0FBUElLZXlmcmFtZVZhbHVlfSBbdG9dXG4gKiBAcHJvcGVydHkge1dBQVBJS2V5ZnJhbWVWYWx1ZX0gW2Zyb21dXG4gKiBAcHJvcGVydHkge051bWJlcnxXQUFQSUZ1bmN0aW9udmFsdWV9IFtkdXJhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFdBQVBJRnVuY3Rpb252YWx1ZX0gW2RlbGF5XVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKiBAcHJvcGVydHkge0NvbXBvc2l0ZU9wZXJhdGlvbn0gW2NvbXBvc2l0aW9uXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV0FBUElBbmltYXRpb25PcHRpb25zXG4gKiBAcHJvcGVydHkge051bWJlcnxCb29sZWFufSBbbG9vcF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW1JldmVyc2VkXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbQWx0ZXJuYXRlXVxuICogQHByb3BlcnR5IHtCb29sZWFufFNjcm9sbE9ic2VydmVyfSBbYXV0b3BsYXldXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3BsYXliYWNrUmF0ZV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFdBQVBJRnVuY3Rpb252YWx1ZX0gW2R1cmF0aW9uXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8V0FBUElGdW5jdGlvbnZhbHVlfSBbZGVsYXldXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqIEBwcm9wZXJ0eSB7Q29tcG9zaXRlT3BlcmF0aW9ufSBbY29tcG9zaXRpb25dXG4gKiBAcHJvcGVydHkge1dBQVBJQ2FsbGJhY2t9IFtvbkNvbXBsZXRlXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1JlY29yZDxTdHJpbmcsIFdBQVBJS2V5ZnJhbWVWYWx1ZSB8IFdBQVBJQW5pbWF0aW9uT3B0aW9ucyB8IEJvb2xlYW4gfCBTY3JvbGxPYnNlcnZlciB8IFdBQVBJQ2FsbGJhY2sgfCBFYXNpbmdQYXJhbSB8IFdBQVBJVHdlZW5PcHRpb25zPiAmIFdBQVBJQW5pbWF0aW9uT3B0aW9uc30gV0FBUElBbmltYXRpb25QYXJhbXNcbiAqL1xuXG5jb25zdCB0cmFuc2Zvcm1zU2hvcnRoYW5kcyA9IFsneCcsICd5JywgJ3onXTtcbmNvbnN0IGNvbW1vbkRlZmF1bHRQWFByb3BlcnRpZXMgPSBbXG4gICdwZXJzcGVjdGl2ZScsXG4gICd3aWR0aCcsXG4gICdoZWlnaHQnLFxuICAnbWFyZ2luJyxcbiAgJ3BhZGRpbmcnLFxuICAndG9wJyxcbiAgJ3JpZ2h0JyxcbiAgJ2JvdHRvbScsXG4gICdsZWZ0JyxcbiAgJ2JvcmRlcldpZHRoJyxcbiAgJ2ZvbnRTaXplJyxcbiAgJ2JvcmRlclJhZGl1cycsXG4gIC4uLnRyYW5zZm9ybXNTaG9ydGhhbmRzXG5dO1xuXG5jb25zdCB2YWxpZEluZGl2aWR1YWxUcmFuc2Zvcm1zID0gWy4uLnRyYW5zZm9ybXNTaG9ydGhhbmRzLCAuLi52YWxpZFRyYW5zZm9ybXMuZmlsdGVyKHQgPT4gWydYJywgJ1knLCAnWiddLnNvbWUoYXhpcyA9PiB0LmVuZHNXaXRoKGF4aXMpKSldO1xuXG4vLyBTZXR0aW5nIGl0IHRvIHRydWUgaW4gY2FzZSBDU1MucmVnaXN0ZXJQcm9wZXJ0eSBpcyBub3Qgc3VwcG9ydGVkIHdpbGwgYXV0b21hdGljYWxseSBza2lwIHRoZSByZWdpc3RyYXRpb24gYW5kIGZhbGxiYWNrIHRvIG5vIGFuaW1hdGlvblxubGV0IHRyYW5zZm9ybXNQcm9wZXJ0aWVzUmVnaXN0ZXJlZCA9IGlzQnJvd3NlciAmJiAoaXNVbmQoQ1NTKSB8fCAhT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoQ1NTLCAncmVnaXN0ZXJQcm9wZXJ0eScpKTtcblxuY29uc3QgcmVnaXN0ZXJUcmFuc2Zvcm1zUHJvcGVydGllcyA9ICgpID0+IHtcbiAgaWYgKHRyYW5zZm9ybXNQcm9wZXJ0aWVzUmVnaXN0ZXJlZCkgcmV0dXJuO1xuICB2YWxpZFRyYW5zZm9ybXMuZm9yRWFjaCh0ID0+IHtcbiAgICBjb25zdCBpc1NrZXcgPSBzdHJpbmdTdGFydHNXaXRoKHQsICdza2V3Jyk7XG4gICAgY29uc3QgaXNTY2FsZSA9IHN0cmluZ1N0YXJ0c1dpdGgodCwgJ3NjYWxlJyk7XG4gICAgY29uc3QgaXNSb3RhdGUgPSBzdHJpbmdTdGFydHNXaXRoKHQsICdyb3RhdGUnKTtcbiAgICBjb25zdCBpc1RyYW5zbGF0ZSA9IHN0cmluZ1N0YXJ0c1dpdGgodCwgJ3RyYW5zbGF0ZScpO1xuICAgIGNvbnN0IGlzQW5nbGUgPSBpc1JvdGF0ZSB8fCBpc1NrZXc7XG4gICAgY29uc3Qgc3ludGF4ID0gaXNBbmdsZSA/ICc8YW5nbGU+JyA6IGlzU2NhbGUgPyBcIjxudW1iZXI+XCIgOiBpc1RyYW5zbGF0ZSA/IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiIDogXCIqXCI7XG4gICAgdHJ5IHtcbiAgICAgIENTUy5yZWdpc3RlclByb3BlcnR5KHtcbiAgICAgICAgbmFtZTogJy0tJyArIHQsXG4gICAgICAgIHN5bnRheCxcbiAgICAgICAgaW5oZXJpdHM6IGZhbHNlLFxuICAgICAgICBpbml0aWFsVmFsdWU6IGlzVHJhbnNsYXRlID8gJzBweCcgOiBpc0FuZ2xlID8gJzBkZWcnIDogaXNTY2FsZSA/ICcxJyA6ICcwJyxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge30gIH0pO1xuICB0cmFuc2Zvcm1zUHJvcGVydGllc1JlZ2lzdGVyZWQgPSB0cnVlO1xufTtcblxuY29uc3QgV0FBUElBbmltYXRpb25zTG9va3VwcyA9IHtcbiAgX2hlYWQ6IG51bGwsXG4gIF90YWlsOiBudWxsLFxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0RPTVRhcmdldH0gJGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BlcnR5XVxuICogQHBhcmFtIHtXQUFQSUFuaW1hdGlvbn0gW3BhcmVudF1cbiAqL1xuY29uc3QgcmVtb3ZlV0FBUElBbmltYXRpb24gPSAoJGVsLCBwcm9wZXJ0eSwgcGFyZW50KSA9PiB7XG4gIGxldCBuZXh0TG9va3VwID0gV0FBUElBbmltYXRpb25zTG9va3Vwcy5faGVhZDtcbiAgd2hpbGUgKG5leHRMb29rdXApIHtcbiAgICBjb25zdCBuZXh0ID0gbmV4dExvb2t1cC5fbmV4dDtcbiAgICBjb25zdCBtYXRjaFRhcmdldCA9IG5leHRMb29rdXAuJGVsID09PSAkZWw7XG4gICAgY29uc3QgbWF0Y2hQcm9wZXJ0eSA9ICFwcm9wZXJ0eSB8fCBuZXh0TG9va3VwLnByb3BlcnR5ID09PSBwcm9wZXJ0eTtcbiAgICBjb25zdCBtYXRjaFBhcmVudCA9ICFwYXJlbnQgfHwgbmV4dExvb2t1cC5wYXJlbnQgPT09IHBhcmVudDtcbiAgICBpZiAobWF0Y2hUYXJnZXQgJiYgbWF0Y2hQcm9wZXJ0eSAmJiBtYXRjaFBhcmVudCkge1xuICAgICAgY29uc3QgYW5pbSA9IG5leHRMb29rdXAuYW5pbWF0aW9uO1xuICAgICAgdHJ5IHsgYW5pbS5jb21taXRTdHlsZXMoKTsgfSBjYXRjaCB7fSAgICAgIGFuaW0uY2FuY2VsKCk7XG4gICAgICByZW1vdmVDaGlsZChXQUFQSUFuaW1hdGlvbnNMb29rdXBzLCBuZXh0TG9va3VwKTtcbiAgICAgIGNvbnN0IGxvb2t1cFBhcmVudCA9IG5leHRMb29rdXAucGFyZW50O1xuICAgICAgaWYgKGxvb2t1cFBhcmVudCkge1xuICAgICAgICBsb29rdXBQYXJlbnQuX2NvbXBsZXRlZCsrO1xuICAgICAgICBpZiAobG9va3VwUGFyZW50LmFuaW1hdGlvbnMubGVuZ3RoID09PSBsb29rdXBQYXJlbnQuX2NvbXBsZXRlZCkge1xuICAgICAgICAgIGxvb2t1cFBhcmVudC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghbG9va3VwUGFyZW50Lm11dGVDYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGxvb2t1cFBhcmVudC5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgbG9va3VwUGFyZW50Lm9uQ29tcGxldGUobG9va3VwUGFyZW50KTtcbiAgICAgICAgICAgIGxvb2t1cFBhcmVudC5fcmVzb2x2ZShsb29rdXBQYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBuZXh0TG9va3VwID0gbmV4dDtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1dBQVBJQW5pbWF0aW9ufSBwYXJlbnRcbiAqIEBwYXJhbSB7RE9NVGFyZ2V0fSAkZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHBhcmFtIHtQcm9wZXJ0eUluZGV4ZWRLZXlmcmFtZXN9IGtleWZyYW1lc1xuICogQHBhcmFtIHtLZXlmcmFtZUFuaW1hdGlvbk9wdGlvbnN9IHBhcmFtc1xuICogQHJldHVuIHtBbmltYXRpb259XG4gKi9cbmNvbnN0IGFkZFdBQVBJQW5pbWF0aW9uID0gKHBhcmVudCwgJGVsLCBwcm9wZXJ0eSwga2V5ZnJhbWVzLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgYW5pbWF0aW9uID0gJGVsLmFuaW1hdGUoa2V5ZnJhbWVzLCBwYXJhbXMpO1xuICBjb25zdCBhbmltVG90YWxEdXJhdGlvbiA9IHBhcmFtcy5kZWxheSArICgrcGFyYW1zLmR1cmF0aW9uICogcGFyYW1zLml0ZXJhdGlvbnMpO1xuICBhbmltYXRpb24ucGxheWJhY2tSYXRlID0gcGFyZW50Ll9zcGVlZDtcbiAgaWYgKHBhcmVudC5wYXVzZWQpIGFuaW1hdGlvbi5wYXVzZSgpO1xuICBpZiAocGFyZW50LmR1cmF0aW9uIDwgYW5pbVRvdGFsRHVyYXRpb24pIHtcbiAgICBwYXJlbnQuZHVyYXRpb24gPSBhbmltVG90YWxEdXJhdGlvbjtcbiAgICBwYXJlbnQuY29udHJvbEFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgfVxuICBwYXJlbnQuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gIHJlbW92ZVdBQVBJQW5pbWF0aW9uKCRlbCwgcHJvcGVydHkpO1xuICBhZGRDaGlsZChXQUFQSUFuaW1hdGlvbnNMb29rdXBzLCB7IHBhcmVudCwgYW5pbWF0aW9uLCAkZWwsIHByb3BlcnR5LCBfbmV4dDogbnVsbCwgX3ByZXY6IG51bGwgfSk7XG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHsgcmVtb3ZlV0FBUElBbmltYXRpb24oJGVsLCBwcm9wZXJ0eSwgcGFyZW50KTsgfTtcbiAgYW5pbWF0aW9uLm9ucmVtb3ZlID0gaGFuZGxlUmVtb3ZlO1xuICBhbmltYXRpb24ub25maW5pc2ggPSBoYW5kbGVSZW1vdmU7XG4gIHJldHVybiBhbmltYXRpb247XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcE5hbWVcbiAqIEBwYXJhbSAge1dBQVBJS2V5ZnJhbWVWYWx1ZX0gdmFsdWVcbiAqIEBwYXJhbSAge0RPTVRhcmdldH0gJGVsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGlcbiAqIEBwYXJhbSAge051bWJlcn0gdGFyZ2V0c0xlbmd0aFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCBub3JtYWxpemVUd2VlblZhbHVlID0gKHByb3BOYW1lLCB2YWx1ZSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSA9PiB7XG4gIGxldCB2ID0gZ2V0RnVuY3Rpb25WYWx1ZSgvKiogQHR5cGUge2FueX0gKi8odmFsdWUpLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpO1xuICBpZiAoIWlzTnVtKHYpKSByZXR1cm4gdjtcbiAgaWYgKGNvbW1vbkRlZmF1bHRQWFByb3BlcnRpZXMuaW5jbHVkZXMocHJvcE5hbWUpIHx8IHN0cmluZ1N0YXJ0c1dpdGgocHJvcE5hbWUsICd0cmFuc2xhdGUnKSkgcmV0dXJuIGAke3Z9cHhgO1xuICBpZiAoc3RyaW5nU3RhcnRzV2l0aChwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ1N0YXJ0c1dpdGgocHJvcE5hbWUsICdza2V3JykpIHJldHVybiBgJHt2fWRlZ2A7XG4gIHJldHVybiBgJHt2fWA7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge0RPTVRhcmdldH0gJGVsXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BOYW1lXG4gKiBAcGFyYW0gIHtXQUFQSUtleWZyYW1lVmFsdWV9IGZyb21cbiAqIEBwYXJhbSAge1dBQVBJS2V5ZnJhbWVWYWx1ZX0gdG9cbiAqIEBwYXJhbSAge051bWJlcn0gaVxuICogQHBhcmFtICB7TnVtYmVyfSB0YXJnZXRzTGVuZ3RoXG4gKiBAcmV0dXJuIHtXQUFQSVR3ZWVuVmFsdWV9XG4gKi9cbmNvbnN0IHBhcnNlSW5kaXZpZHVhbFR3ZWVuVmFsdWUgPSAoJGVsLCBwcm9wTmFtZSwgZnJvbSwgdG8sIGksIHRhcmdldHNMZW5ndGgpID0+IHtcbiAgLyoqIEB0eXBlIHtXQUFQSVR3ZWVuVmFsdWV9ICovXG4gIGxldCB0d2VlblZhbHVlID0gJzAnO1xuICBjb25zdCBjb21wdXRlZFRvID0gIWlzVW5kKHRvKSA/IG5vcm1hbGl6ZVR3ZWVuVmFsdWUocHJvcE5hbWUsIHRvLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpIDogZ2V0Q29tcHV0ZWRTdHlsZSgkZWwpW3Byb3BOYW1lXTtcbiAgaWYgKCFpc1VuZChmcm9tKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkRnJvbSA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWUocHJvcE5hbWUsIGZyb20sICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCk7XG4gICAgdHdlZW5WYWx1ZSA9IFtjb21wdXRlZEZyb20sIGNvbXB1dGVkVG9dO1xuICB9IGVsc2Uge1xuICAgIHR3ZWVuVmFsdWUgPSBpc0Fycih0bykgPyB0by5tYXAoKC8qKiBAdHlwZSB7YW55fSAqL3YpID0+IG5vcm1hbGl6ZVR3ZWVuVmFsdWUocHJvcE5hbWUsIHYsICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkpIDogY29tcHV0ZWRUbztcbiAgfVxuICByZXR1cm4gdHdlZW5WYWx1ZTtcbn07XG5cbmNsYXNzIFdBQVBJQW5pbWF0aW9uIHtcbi8qKlxuICogQHBhcmFtIHtET01UYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEBwYXJhbSB7V0FBUElBbmltYXRpb25QYXJhbXN9IHBhcmFtc1xuICovXG4gIGNvbnN0cnVjdG9yKHRhcmdldHMsIHBhcmFtcykge1xuXG4gICAgaWYgKGdsb2JhbHMuc2NvcGUpIGdsb2JhbHMuc2NvcGUucmV2ZXJ0aWJsZXMucHVzaCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyVHJhbnNmb3Jtc1Byb3BlcnRpZXMoKTtcblxuICAgIGNvbnN0IHBhcnNlZFRhcmdldHMgPSByZWdpc3RlclRhcmdldHModGFyZ2V0cyk7XG4gICAgY29uc3QgdGFyZ2V0c0xlbmd0aCA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgaWYgKCF0YXJnZXRzTGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHRhcmdldCBmb3VuZC4gTWFrZSBzdXJlIHRoZSBlbGVtZW50IHlvdSdyZSB0cnlpbmcgdG8gYW5pbWF0ZSBpcyBhY2Nlc3NpYmxlIGJlZm9yZSBjcmVhdGluZyB5b3VyIGFuaW1hdGlvbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBlYXNlID0gc2V0VmFsdWUocGFyYW1zLmVhc2UsIHBhcnNlV0FBUElFYXNpbmcoZ2xvYmFscy5kZWZhdWx0cy5lYXNlKSk7XG4gICAgY29uc3Qgc3ByaW5nID0gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UgJiYgZWFzZTtcbiAgICBjb25zdCBhdXRvcGxheSA9IHNldFZhbHVlKHBhcmFtcy5hdXRvcGxheSwgZ2xvYmFscy5kZWZhdWx0cy5hdXRvcGxheSk7XG4gICAgY29uc3Qgc2Nyb2xsID0gYXV0b3BsYXkgJiYgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi8oYXV0b3BsYXkpLmxpbmsgPyBhdXRvcGxheSA6IGZhbHNlO1xuICAgIGNvbnN0IGFsdGVybmF0ZSA9IHBhcmFtcy5hbHRlcm5hdGUgJiYgLyoqIEB0eXBlIHtCb29sZWFufSAqLyhwYXJhbXMuYWx0ZXJuYXRlKSA9PT0gdHJ1ZTtcbiAgICBjb25zdCByZXZlcnNlZCA9IHBhcmFtcy5yZXZlcnNlZCAmJiAvKiogQHR5cGUge0Jvb2xlYW59ICovKHBhcmFtcy5yZXZlcnNlZCkgPT09IHRydWU7XG4gICAgY29uc3QgbG9vcCA9IHNldFZhbHVlKHBhcmFtcy5sb29wLCBnbG9iYWxzLmRlZmF1bHRzLmxvb3ApO1xuICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSAvKiogQHR5cGUge051bWJlcn0gKi8oKGxvb3AgPT09IHRydWUgfHwgbG9vcCA9PT0gSW5maW5pdHkpID8gSW5maW5pdHkgOiBpc051bShsb29wKSA/IGxvb3AgKyAxIDogMSk7XG4gICAgLyoqIEB0eXBlIHtQbGF5YmFja0RpcmVjdGlvbn0gKi9cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhbHRlcm5hdGUgPyByZXZlcnNlZCA/ICdhbHRlcm5hdGUtcmV2ZXJzZScgOiAnYWx0ZXJuYXRlJyA6IHJldmVyc2VkID8gJ3JldmVyc2UnIDogJ25vcm1hbCc7XG4gICAgLyoqIEB0eXBlIHtGaWxsTW9kZX0gKi9cbiAgICBjb25zdCBmaWxsID0gJ2ZvcndhcmRzJztcbiAgICAvKiogQHR5cGUge1N0cmluZ30gKi9cbiAgICBjb25zdCBlYXNpbmcgPSBwYXJzZVdBQVBJRWFzaW5nKGVhc2UpO1xuICAgIGNvbnN0IHRpbWVTY2FsZSA9IChnbG9iYWxzLnRpbWVTY2FsZSA9PT0gMSA/IDEgOiBLKTtcblxuICAgIC8qKiBAdHlwZSB7RE9NVGFyZ2V0c0FycmF5fV0gKi9cbiAgICB0aGlzLnRhcmdldHMgPSBwYXJzZWRUYXJnZXRzO1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8Z2xvYmFsVGhpcy5BbmltYXRpb24+fV0gKi9cbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICAvKiogQHR5cGUge2dsb2JhbFRoaXMuQW5pbWF0aW9ufV0gKi9cbiAgICB0aGlzLmNvbnRyb2xBbmltYXRpb24gPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkNvbXBsZXRlID0gcGFyYW1zLm9uQ29tcGxldGUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5tdXRlQ2FsbGJhY2tzID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMucGF1c2VkID0gIWF1dG9wbGF5IHx8IHNjcm9sbCAhPT0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMucmV2ZXJzZWQgPSByZXZlcnNlZDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW58U2Nyb2xsT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy5hdXRvcGxheSA9IGF1dG9wbGF5O1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3NwZWVkID0gc2V0VmFsdWUocGFyYW1zLnBsYXliYWNrUmF0ZSwgZ2xvYmFscy5kZWZhdWx0cy5wbGF5YmFja1JhdGUpO1xuICAgIC8qKiBAdHlwZSB7RnVuY3Rpb259ICovXG4gICAgdGhpcy5fcmVzb2x2ZSA9IG5vb3A7IC8vIFVzZWQgYnkgLnRoZW4oKVxuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2NvbXBsZXRlZCA9IDA7XG4gICAgLyoqIEB0eXBlIHtBcnJheTxPYmplY3Q+fV0gKi9cbiAgICB0aGlzLl9pbmxpbmVTdHlsZXMgPSBwYXJzZWRUYXJnZXRzLm1hcCgkZWwgPT4gJGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSk7XG5cbiAgICBwYXJzZWRUYXJnZXRzLmZvckVhY2goKCRlbCwgaSkgPT4ge1xuXG4gICAgICBjb25zdCBjYWNoZWRUcmFuc2Zvcm1zID0gJGVsW3RyYW5zZm9ybXNTeW1ib2xdO1xuXG4gICAgICBjb25zdCBoYXNJbmRpdmlkdWFsVHJhbnNmb3JtcyA9IHZhbGlkSW5kaXZpZHVhbFRyYW5zZm9ybXMuc29tZSh0ID0+IHBhcmFtcy5oYXNPd25Qcm9wZXJ0eSh0KSk7XG5cbiAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgICAgY29uc3QgZHVyYXRpb24gPSAoc3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKHNwcmluZykuZHVyYXRpb24gOiBnZXRGdW5jdGlvblZhbHVlKHNldFZhbHVlKHBhcmFtcy5kdXJhdGlvbiwgZ2xvYmFscy5kZWZhdWx0cy5kdXJhdGlvbiksICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkpICogdGltZVNjYWxlO1xuICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgICBjb25zdCBkZWxheSA9IGdldEZ1bmN0aW9uVmFsdWUoc2V0VmFsdWUocGFyYW1zLmRlbGF5LCBnbG9iYWxzLmRlZmF1bHRzLmRlbGF5KSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSAqIHRpbWVTY2FsZTtcbiAgICAgIC8qKiBAdHlwZSB7Q29tcG9zaXRlT3BlcmF0aW9ufSAqL1xuICAgICAgY29uc3QgY29tcG9zaXRlID0gLyoqIEB0eXBlIHtDb21wb3NpdGVPcGVyYXRpb259ICovKHNldFZhbHVlKHBhcmFtcy5jb21wb3NpdGlvbiwgJ3JlcGxhY2UnKSk7XG5cbiAgICAgIGZvciAobGV0IG5hbWUgaW4gcGFyYW1zKSB7XG4gICAgICAgIGlmICghaXNLZXkobmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAvKiogQHR5cGUge1Byb3BlcnR5SW5kZXhlZEtleWZyYW1lc30gKi9cbiAgICAgICAgY29uc3Qga2V5ZnJhbWVzID0ge307XG4gICAgICAgIC8qKiBAdHlwZSB7S2V5ZnJhbWVBbmltYXRpb25PcHRpb25zfSAqL1xuICAgICAgICBjb25zdCB0d2VlblBhcmFtcyA9IHsgaXRlcmF0aW9ucywgZGlyZWN0aW9uLCBmaWxsLCBlYXNpbmcsIGR1cmF0aW9uLCBkZWxheSwgY29tcG9zaXRlIH07XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBwYXJhbXNbbmFtZV07XG4gICAgICAgIGNvbnN0IGluZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eSA9IGhhc0luZGl2aWR1YWxUcmFuc2Zvcm1zID8gdmFsaWRUcmFuc2Zvcm1zLmluY2x1ZGVzKG5hbWUpID8gbmFtZSA6IHNob3J0VHJhbnNmb3Jtcy5nZXQobmFtZSkgOiBmYWxzZTtcbiAgICAgICAgbGV0IHBhcnNlZFByb3BlcnR5VmFsdWU7XG4gICAgICAgIGlmIChpc09iaihwcm9wZXJ0eVZhbHVlKSkge1xuICAgICAgICAgIGNvbnN0IHR3ZWVuT3B0aW9ucyA9IC8qKiBAdHlwZSB7V0FBUElUd2Vlbk9wdGlvbnN9ICovKHByb3BlcnR5VmFsdWUpO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuT3B0aW9uc0Vhc2UgPSBzZXRWYWx1ZSh0d2Vlbk9wdGlvbnMuZWFzZSwgZWFzZSk7XG4gICAgICAgICAgY29uc3QgdHdlZW5PcHRpb25zU3ByaW5nID0gLyoqIEB0eXBlIHtTcHJpbmd9ICovKHR3ZWVuT3B0aW9uc0Vhc2UpLmVhc2UgJiYgdHdlZW5PcHRpb25zRWFzZTtcbiAgICAgICAgICBjb25zdCB0byA9IC8qKiBAdHlwZSB7V0FBUElUd2Vlbk9wdGlvbnN9ICovKHR3ZWVuT3B0aW9ucykudG87XG4gICAgICAgICAgY29uc3QgZnJvbSA9IC8qKiBAdHlwZSB7V0FBUElUd2Vlbk9wdGlvbnN9ICovKHR3ZWVuT3B0aW9ucykuZnJvbTtcbiAgICAgICAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICAgICAgICB0d2VlblBhcmFtcy5kdXJhdGlvbiA9ICh0d2Vlbk9wdGlvbnNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8odHdlZW5PcHRpb25zU3ByaW5nKS5kdXJhdGlvbiA6IGdldEZ1bmN0aW9uVmFsdWUoc2V0VmFsdWUodHdlZW5PcHRpb25zLmR1cmF0aW9uLCBkdXJhdGlvbiksICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkpICogdGltZVNjYWxlO1xuICAgICAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgICAgICAgIHR3ZWVuUGFyYW1zLmRlbGF5ID0gZ2V0RnVuY3Rpb25WYWx1ZShzZXRWYWx1ZSh0d2Vlbk9wdGlvbnMuZGVsYXksIGRlbGF5KSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSAqIHRpbWVTY2FsZTtcbiAgICAgICAgICAvKiogQHR5cGUge0NvbXBvc2l0ZU9wZXJhdGlvbn0gKi9cbiAgICAgICAgICB0d2VlblBhcmFtcy5jb21wb3NpdGUgPSAvKiogQHR5cGUge0NvbXBvc2l0ZU9wZXJhdGlvbn0gKi8oc2V0VmFsdWUodHdlZW5PcHRpb25zLmNvbXBvc2l0aW9uLCBjb21wb3NpdGUpKTtcbiAgICAgICAgICAvKiogQHR5cGUge1N0cmluZ30gKi9cbiAgICAgICAgICB0d2VlblBhcmFtcy5lYXNpbmcgPSBwYXJzZVdBQVBJRWFzaW5nKHR3ZWVuT3B0aW9uc0Vhc2UpO1xuICAgICAgICAgIHBhcnNlZFByb3BlcnR5VmFsdWUgPSBwYXJzZUluZGl2aWR1YWxUd2VlblZhbHVlKCRlbCwgbmFtZSwgZnJvbSwgdG8sIGksIHRhcmdldHNMZW5ndGgpO1xuICAgICAgICAgIGlmIChpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGtleWZyYW1lc1tgLS0ke2luZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eX1gXSA9IHBhcnNlZFByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICBjYWNoZWRUcmFuc2Zvcm1zW2luZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eV0gPSBwYXJzZWRQcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXlmcmFtZXNbbmFtZV0gPSBwYXJzZUluZGl2aWR1YWxUd2VlblZhbHVlKCRlbCwgbmFtZSwgZnJvbSwgdG8sIGksIHRhcmdldHNMZW5ndGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRXQUFQSUFuaW1hdGlvbih0aGlzLCAkZWwsIG5hbWUsIGtleWZyYW1lcywgdHdlZW5QYXJhbXMpO1xuICAgICAgICAgIGlmICghaXNVbmQoZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghaW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICRlbC5zdHlsZVtuYW1lXSA9IGtleWZyYW1lc1tuYW1lXVswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAtLSR7aW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5fWA7XG4gICAgICAgICAgICAgICRlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIGtleWZyYW1lc1trZXldWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyc2VkUHJvcGVydHlWYWx1ZSA9IGlzQXJyKHByb3BlcnR5VmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZS5tYXAoKC8qKiBAdHlwZSB7YW55fSAqL3YpID0+IG5vcm1hbGl6ZVR3ZWVuVmFsdWUobmFtZSwgdiwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVUd2VlblZhbHVlKG5hbWUsIC8qKiBAdHlwZSB7YW55fSAqLyhwcm9wZXJ0eVZhbHVlKSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKTtcbiAgICAgICAgICBpZiAoaW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5KSB7XG4gICAgICAgICAgICBrZXlmcmFtZXNbYC0tJHtpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHl9YF0gPSBwYXJzZWRQcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgY2FjaGVkVHJhbnNmb3Jtc1tpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHldID0gcGFyc2VkUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ZnJhbWVzW25hbWVdID0gcGFyc2VkUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkV0FBUElBbmltYXRpb24odGhpcywgJGVsLCBuYW1lLCBrZXlmcmFtZXMsIHR3ZWVuUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGhhc0luZGl2aWR1YWxUcmFuc2Zvcm1zKSB7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1zID0gZW1wdHlTdHJpbmc7XG4gICAgICAgIGZvciAobGV0IHQgaW4gY2FjaGVkVHJhbnNmb3Jtcykge1xuICAgICAgICAgIHRyYW5zZm9ybXMgKz0gYCR7dHJhbnNmb3Jtc0ZyYWdtZW50U3RyaW5nc1t0XX12YXIoLS0ke3R9KSkgYDtcbiAgICAgICAgfVxuICAgICAgICAkZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovKHRoaXMuYXV0b3BsYXkpLmxpbmsodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBjYWxsYmFjayBmb3JFYWNoQ2FsbGJhY2tcbiAgICogQHBhcmFtIHtnbG9iYWxUaGlzLkFuaW1hdGlvbn0gYW5pbWF0aW9uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtmb3JFYWNoQ2FsbGJhY2t8U3RyaW5nfSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IGNiID0gaXNTdHIoY2FsbGJhY2spID8gYSA9PiBhW2NhbGxiYWNrXSgpIDogY2FsbGJhY2s7XG4gICAgdGhpcy5hbmltYXRpb25zLmZvckVhY2goY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gc3BlZWQgKi9cbiAgc2V0IHNwZWVkKHNwZWVkKSB7XG4gICAgdGhpcy5fc3BlZWQgPSArc3BlZWQ7XG4gICAgdGhpcy5mb3JFYWNoKGFuaW0gPT4gYW5pbS5wbGF5YmFja1JhdGUgPSBzcGVlZCk7XG4gIH1cblxuICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgY29uc3QgY29udHJvbEFuaW1hdGlvbiA9IHRoaXMuY29udHJvbEFuaW1hdGlvbjtcbiAgICBjb25zdCB0aW1lU2NhbGUgPSBnbG9iYWxzLnRpbWVTY2FsZTtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQgPyB0aGlzLmR1cmF0aW9uIDogY29udHJvbEFuaW1hdGlvbiA/ICtjb250cm9sQW5pbWF0aW9uLmN1cnJlbnRUaW1lICogKHRpbWVTY2FsZSA9PT0gMSA/IDEgOiB0aW1lU2NhbGUpIDogMDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gdGltZSAqL1xuICBzZXQgY3VycmVudFRpbWUodGltZSkge1xuICAgIGNvbnN0IHQgPSB0aW1lICogKGdsb2JhbHMudGltZVNjYWxlID09PSAxID8gMSA6IEspO1xuICAgIHRoaXMuZm9yRWFjaChhbmltID0+IHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uIHBsYXlTdGF0ZSBpcyBub3QgJ3BhdXNlZCcgaW4gb3JkZXIgdG8gcHJvcGVybHkgdHJpZ2dlciBhbiBvbmZpbmlzaCBjYWxsYmFjay5cbiAgICAgIC8vIFRoZSBcInBhdXNlZFwiIHBsYXkgc3RhdGUgc3VwZXJzZWRlcyB0aGUgXCJmaW5pc2hlZFwiIHBsYXkgc3RhdGU7IGlmIHRoZSBhbmltYXRpb24gaXMgYm90aCBwYXVzZWQgYW5kIGZpbmlzaGVkLCB0aGUgXCJwYXVzZWRcIiBzdGF0ZSBpcyB0aGUgb25lIHRoYXQgd2lsbCBiZSByZXBvcnRlZC5cbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9BbmltYXRpb24vZmluaXNoX2V2ZW50XG4gICAgICBpZiAodCA+PSB0aGlzLmR1cmF0aW9uKSBhbmltLnBsYXkoKTtcbiAgICAgIGFuaW0uY3VycmVudFRpbWUgPSB0O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lIC8gdGhpcy5kdXJhdGlvbjtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gcHJvZ3Jlc3MgKi9cbiAgc2V0IHByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgdGhpcy5mb3JFYWNoKGFuaW0gPT4gYW5pbS5jdXJyZW50VGltZSA9IHByb2dyZXNzICogdGhpcy5kdXJhdGlvbiB8fCAwKTtcbiAgfVxuXG4gIHJlc3VtZSgpIHtcbiAgICBpZiAoIXRoaXMucGF1c2VkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIC8vIFRPRE86IFN0b3JlIHRoZSBjdXJyZW50IHRpbWUsIGFuZCBzZWVrIGJhY2sgdG8gdGhlIGxhc3QgcG9zaXRpb25cbiAgICByZXR1cm4gdGhpcy5mb3JFYWNoKCdwbGF5Jyk7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5mb3JFYWNoKCdwYXVzZScpO1xuICB9XG5cbiAgYWx0ZXJuYXRlKCkge1xuICAgIHRoaXMucmV2ZXJzZWQgPSAhdGhpcy5yZXZlcnNlZDtcbiAgICB0aGlzLmZvckVhY2goJ3JldmVyc2UnKTtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHRoaXMuZm9yRWFjaCgncGF1c2UnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgaWYgKHRoaXMucmV2ZXJzZWQpIHRoaXMuYWx0ZXJuYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICByZXZlcnNlKCkge1xuICAgIGlmICghdGhpcy5yZXZlcnNlZCkgdGhpcy5hbHRlcm5hdGUoKTtcbiAgICByZXR1cm4gdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gLyoqXG4gICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVcbiAgKiBAcGFyYW0ge0Jvb2xlYW59IG11dGVDYWxsYmFja3NcbiAgKi9cbiAgc2Vlayh0aW1lLCBtdXRlQ2FsbGJhY2tzID0gZmFsc2UpIHtcbiAgICBpZiAobXV0ZUNhbGxiYWNrcykgdGhpcy5tdXRlQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICBpZiAodGltZSA8IHRoaXMuZHVyYXRpb24pIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgdGhpcy5tdXRlQ2FsbGJhY2tzID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucGF1c2VkKSB0aGlzLnBhdXNlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMuc2VlaygwLCB0cnVlKS5yZXN1bWUoKTtcbiAgfVxuXG4gIGNvbW1pdFN0eWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JFYWNoKCdjb21taXRTdHlsZXMnKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLnNlZWsodGhpcy5kdXJhdGlvbik7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5mb3JFYWNoKCdjYW5jZWwnKTtcbiAgICByZXR1cm4gdGhpcy5wYXVzZSgpO1xuICB9XG5cbiAgcmV2ZXJ0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKCRlbCwgaSkgPT4gJGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCB0aGlzLl9pbmxpbmVTdHlsZXNbaV0pICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7V0FBUElDYWxsYmFja30gW2NhbGxiYWNrXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgdGhlbihjYWxsYmFjayA9IG5vb3ApIHtcbiAgICBjb25zdCB0aGVuID0gdGhpcy50aGVuO1xuICAgIGNvbnN0IG9uUmVzb2x2ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMudGhlbiA9IG51bGw7XG4gICAgICBjYWxsYmFjayh0aGlzKTtcbiAgICAgIHRoaXMudGhlbiA9IHRoZW47XG4gICAgICB0aGlzLl9yZXNvbHZlID0gbm9vcDtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSAoKSA9PiByKG9uUmVzb2x2ZSgpKTtcbiAgICAgIGlmICh0aGlzLmNvbXBsZXRlZCkgdGhpcy5fcmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3Qgd2FhcGkgPSB7XG4vKipcbiAqIEBwYXJhbSB7RE9NVGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcGFyYW0ge1dBQVBJQW5pbWF0aW9uUGFyYW1zfSBwYXJhbXNcbiAqIEByZXR1cm4ge1dBQVBJQW5pbWF0aW9ufVxuICovXG4gIGFuaW1hdGU6ICh0YXJnZXRzLCBwYXJhbXMpID0+IG5ldyBXQUFQSUFuaW1hdGlvbih0YXJnZXRzLCBwYXJhbXMpLFxuICBjb252ZXJ0RWFzZTogZWFzaW5nVG9MaW5lYXJcbn07XG5cblxuXG5cbi8qKlxuICogQHBhcmFtICB7Q2FsbGJhY2s8VGltZXI+fSBbY2FsbGJhY2tdXG4gKiBAcmV0dXJuIHtUaW1lcn1cbiAqL1xuY29uc3Qgc3luYyA9IChjYWxsYmFjayA9IG5vb3ApID0+IHtcbiAgcmV0dXJuIG5ldyBUaW1lcih7IGR1cmF0aW9uOiAxICogZ2xvYmFscy50aW1lU2NhbGUsIG9uQ29tcGxldGU6IGNhbGxiYWNrIH0sIG51bGwsIDApLnJlc3VtZSgpO1xufTtcblxuLyoqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0RPTVRhcmdldFNlbGVjdG9yfSB0YXJnZXRTZWxlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgIHByb3BOYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtKU1RhcmdldHNQYXJhbX0gdGFyZ2V0U2VsZWN0b3JcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICBwcm9wTmFtZVxuICogQHJldHVybiB7TnVtYmVyfFN0cmluZ31cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0RPTVRhcmdldHNQYXJhbX0gdGFyZ2V0U2VsZWN0b3JcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgcHJvcE5hbWVcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgdW5pdFxuICogQHJldHVybiB7U3RyaW5nfVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRTZWxlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwcm9wTmFtZVxuICogQHBhcmFtICB7Qm9vbGVhbn0gICAgICB1bml0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKlxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSAgIHRhcmdldFNlbGVjdG9yXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgcHJvcE5hbWVcbiAqIEBwYXJhbSAge1N0cmluZ3xCb29sZWFufSBbdW5pdF1cbiAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0VmFsdWUodGFyZ2V0U2VsZWN0b3IsIHByb3BOYW1lLCB1bml0KSB7XG4gIGNvbnN0IHRhcmdldHMgPSByZWdpc3RlclRhcmdldHModGFyZ2V0U2VsZWN0b3IpO1xuICBpZiAoIXRhcmdldHMubGVuZ3RoKSByZXR1cm47XG4gIGNvbnN0IFsgdGFyZ2V0IF0gPSB0YXJnZXRzO1xuICBjb25zdCB0d2VlblR5cGUgPSBnZXRUd2VlblR5cGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gIGNvbnN0IG5vcm1hbGl6ZVByb3BOYW1lID0gc2FuaXRpemVQcm9wZXJ0eU5hbWUocHJvcE5hbWUsIHRhcmdldCwgdHdlZW5UeXBlKTtcbiAgbGV0IG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbEFuaW1hdGFibGVWYWx1ZSh0YXJnZXQsIG5vcm1hbGl6ZVByb3BOYW1lKTtcbiAgaWYgKGlzVW5kKHVuaXQpKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgZGVjb21wb3NlUmF3VmFsdWUob3JpZ2luYWxWYWx1ZSwgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUpO1xuICAgIGlmIChkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZS50ID09PSB2YWx1ZVR5cGVzLk5VTUJFUiB8fCBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZS50ID09PSB2YWx1ZVR5cGVzLlVOSVQpIHtcbiAgICAgIGlmICh1bml0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUubjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFZhbHVlID0gY29udmVydFZhbHVlVW5pdCgvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KSwgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUsIC8qKiBAdHlwZSB7U3RyaW5nfSAqLyh1bml0KSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gYCR7cm91bmQoY29udmVydGVkVmFsdWUubiwgZ2xvYmFscy5wcmVjaXNpb24pfSR7Y29udmVydGVkVmFsdWUudX1gO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gICAgdGFyZ2V0c1xuICogQHBhcmFtICB7QW5pbWF0aW9uUGFyYW1zfSBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtKU0FuaW1hdGlvbn1cbiAqL1xuY29uc3Qgc2V0VGFyZ2V0VmFsdWVzID0gKHRhcmdldHMsIHBhcmFtZXRlcnMpID0+IHtcbiAgaWYgKGlzVW5kKHBhcmFtZXRlcnMpKSByZXR1cm47XG4gIHBhcmFtZXRlcnMuZHVyYXRpb24gPSBtaW5WYWx1ZTtcbiAgLy8gRG8gbm90IG92ZXJyaWRlcyBjdXJyZW50bHkgYWN0aXZlIHR3ZWVucyBieSBkZWZhdWx0XG4gIHBhcmFtZXRlcnMuY29tcG9zaXRpb24gPSBzZXRWYWx1ZShwYXJhbWV0ZXJzLmNvbXBvc2l0aW9uLCBjb21wb3NpdGlvblR5cGVzLm5vbmUpO1xuICAvLyBTa2lwIGluaXQoKSBhbmQgZm9yY2UgcmVuZGVyaW5nIGJ5IHBsYXlpbmcgdGhlIGFuaW1hdGlvblxuICByZXR1cm4gbmV3IEpTQW5pbWF0aW9uKHRhcmdldHMsIHBhcmFtZXRlcnMsIG51bGwsIDAsIHRydWUpLnJlc3VtZSgpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXRzQXJyYXl9IHRhcmdldHNBcnJheVxuICogQHBhcmFtICB7SlNBbmltYXRpb259ICAgIGFuaW1hdGlvblxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBbcHJvcGVydHlOYW1lXVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb24gPSAodGFyZ2V0c0FycmF5LCBhbmltYXRpb24sIHByb3BlcnR5TmFtZSkgPT4ge1xuICBsZXQgdHdlZW5zTWF0Y2hlc1RhcmdldHMgPSBmYWxzZTtcbiAgZm9yRWFjaENoaWxkcmVuKGFuaW1hdGlvbiwgKC8qKkB0eXBlIHtUd2Vlbn0gKi90d2VlbikgPT4ge1xuICAgIGNvbnN0IHR3ZWVuVGFyZ2V0ID0gdHdlZW4udGFyZ2V0O1xuICAgIGlmICh0YXJnZXRzQXJyYXkuaW5jbHVkZXModHdlZW5UYXJnZXQpKSB7XG4gICAgICBjb25zdCB0d2Vlbk5hbWUgPSB0d2Vlbi5wcm9wZXJ0eTtcbiAgICAgIGNvbnN0IHR3ZWVuVHlwZSA9IHR3ZWVuLl90d2VlblR5cGU7XG4gICAgICBjb25zdCBub3JtYWxpemVQcm9wTmFtZSA9IHNhbml0aXplUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSwgdHdlZW5UYXJnZXQsIHR3ZWVuVHlwZSk7XG4gICAgICBpZiAoIW5vcm1hbGl6ZVByb3BOYW1lIHx8IG5vcm1hbGl6ZVByb3BOYW1lICYmIG5vcm1hbGl6ZVByb3BOYW1lID09PSB0d2Vlbk5hbWUpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRvIGZsYWcgdGhlIHByZXZpb3VzIENTUyB0cmFuc2Zvcm0gdHdlZW4gdG8gcmVuZGVyVHJhbnNmb3JtXG4gICAgICAgIGlmICh0d2Vlbi5wYXJlbnQuX3RhaWwgPT09IHR3ZWVuICYmXG4gICAgICAgICAgICB0d2Vlbi5fdHdlZW5UeXBlID09PSB0d2VlblR5cGVzLlRSQU5TRk9STSAmJlxuICAgICAgICAgICAgdHdlZW4uX3ByZXYgJiZcbiAgICAgICAgICAgIHR3ZWVuLl9wcmV2Ll90d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuVFJBTlNGT1JNXG4gICAgICAgICkge1xuICAgICAgICAgIHR3ZWVuLl9wcmV2Ll9yZW5kZXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmVzIHRoZSB0d2VlbiBmcm9tIHRoZSBzZWxlY3RlZCBhbmltYXRpb25cbiAgICAgICAgcmVtb3ZlQ2hpbGQoYW5pbWF0aW9uLCB0d2Vlbik7XG4gICAgICAgIC8vIERldGFjaCB0aGUgdHdlZW4gZnJvbSBpdHMgc2libGluZ3MgdG8gbWFrZSBzdXJlIGJsZW5kZWQgdHdlZW5zIGFyZSBjb3JyZWN0bGx5IHJlbW92ZWRcbiAgICAgICAgcmVtb3ZlVHdlZW5TbGlibGluZ3ModHdlZW4pO1xuICAgICAgICB0d2VlbnNNYXRjaGVzVGFyZ2V0cyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB0cnVlKTtcbiAgcmV0dXJuIHR3ZWVuc01hdGNoZXNUYXJnZXRzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEBwYXJhbSAge1JlbmRlcmFibGV8V0FBUElBbmltYXRpb259IFtyZW5kZXJhYmxlXVxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgW3Byb3BlcnR5TmFtZV1cbiAqIEByZXR1cm4ge1RhcmdldHNBcnJheX1cbiAqL1xuY29uc3QgcmVtb3ZlID0gKHRhcmdldHMsIHJlbmRlcmFibGUsIHByb3BlcnR5TmFtZSkgPT4ge1xuICBjb25zdCB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGNvbnN0IHBhcmVudCA9IC8qKiBAdHlwZSB7UmVuZGVyYWJsZXx0eXBlb2YgZW5naW5lfSAqKi8ocmVuZGVyYWJsZSA/IHJlbmRlcmFibGUgOiBlbmdpbmUpO1xuICBjb25zdCB3YWFwaUFuaW1hdGlvbiA9IHJlbmRlcmFibGUgJiYgLyoqIEB0eXBlIHtXQUFQSUFuaW1hdGlvbn0gKi8ocmVuZGVyYWJsZSkuY29udHJvbEFuaW1hdGlvbiAmJiAvKiogQHR5cGUge1dBQVBJQW5pbWF0aW9ufSAqLyhyZW5kZXJhYmxlKTtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YXJnZXRzQXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgJGVsID0gLyoqIEB0eXBlIHtET01UYXJnZXR9ICAqLyh0YXJnZXRzQXJyYXlbaV0pO1xuICAgIHJlbW92ZVdBQVBJQW5pbWF0aW9uKCRlbCwgcHJvcGVydHlOYW1lLCB3YWFwaUFuaW1hdGlvbik7XG4gIH1cbiAgbGV0IHJlbW92ZU1hdGNoZXM7XG4gIGlmIChwYXJlbnQuX2hhc0NoaWxkcmVuKSB7XG4gICAgbGV0IGl0ZXJhdGlvbkR1cmF0aW9uID0gMDtcbiAgICBmb3JFYWNoQ2hpbGRyZW4ocGFyZW50LCAoLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqL2NoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkLl9oYXNDaGlsZHJlbikge1xuICAgICAgICByZW1vdmVNYXRjaGVzID0gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb24odGFyZ2V0c0FycmF5LCAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyhjaGlsZCksIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2hpbGQgZnJvbSBpdHMgcGFyZW50IGlmIG5vIHR3ZWVucyBhbmQgbm8gY2hpbGRyZW4gbGVmdCBhZnRlciB0aGUgcmVtb3ZhbFxuICAgICAgICBpZiAocmVtb3ZlTWF0Y2hlcyAmJiAhY2hpbGQuX2hlYWQpIHtcbiAgICAgICAgICBjaGlsZC5jYW5jZWwoKTtcbiAgICAgICAgICByZW1vdmVDaGlsZChwYXJlbnQsIGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG5ldyBpdGVyYXRpb25EdXJhdGlvbiB2YWx1ZSB0byBoYW5kbGUgb25Db21wbGV0ZSB3aXRoIGxhc3QgY2hpbGQgaW4gcmVuZGVyKClcbiAgICAgICAgICBjb25zdCBjaGlsZFRMT2Zmc2V0ID0gY2hpbGQuX29mZnNldCArIGNoaWxkLl9kZWxheTtcbiAgICAgICAgICBjb25zdCBjaGlsZER1ciA9IGNoaWxkVExPZmZzZXQgKyBjaGlsZC5kdXJhdGlvbjtcbiAgICAgICAgICBpZiAoY2hpbGREdXIgPiBpdGVyYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgaXRlcmF0aW9uRHVyYXRpb24gPSBjaGlsZER1cjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIE1ha2Ugc3VyZSB0byBhbHNvIHJlbW92ZSBlbmdpbmUncyBjaGlsZHJlbiB0YXJnZXRzXG4gICAgICAvLyBOT1RFOiBBdm9pZCByZWN1cnNpb24/XG4gICAgICBpZiAoY2hpbGQuX2hlYWQpIHtcbiAgICAgICAgcmVtb3ZlKHRhcmdldHMsIGNoaWxkLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuX2hhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgdHJ1ZSk7XG4gICAgLy8gVXBkYXRlIGl0ZXJhdGlvbkR1cmF0aW9uIHZhbHVlIHRvIGhhbmRsZSBvbkNvbXBsZXRlIHdpdGggbGFzdCBjaGlsZCBpbiByZW5kZXIoKVxuICAgIGlmICghaXNVbmQoLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqLyhwYXJlbnQpLml0ZXJhdGlvbkR1cmF0aW9uKSkge1xuICAgICAgLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqLyhwYXJlbnQpLml0ZXJhdGlvbkR1cmF0aW9uID0gaXRlcmF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbW92ZU1hdGNoZXMgPSByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbihcbiAgICAgIHRhcmdldHNBcnJheSxcbiAgICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKHBhcmVudCksXG4gICAgICBwcm9wZXJ0eU5hbWVcbiAgICApO1xuICB9XG5cbiAgaWYgKHJlbW92ZU1hdGNoZXMgJiYgIXBhcmVudC5faGVhZCkge1xuICAgIHBhcmVudC5faGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAvLyBDYW5jZWwgdGhlIHBhcmVudCBpZiB0aGVyZSBhcmUgbm8gdHdlZW5zIGFuZCBubyBjaGlsZHJlbiBsZWZ0IGFmdGVyIHRoZSByZW1vdmFsXG4gICAgLy8gV2UgaGF2ZSB0byBjaGVjayBpZiB0aGUgLmNhbmNlbCgpIG1ldGhvZCBleGlzdCB0byBoYW5kbGUgY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyB0aGUgZW5naW5lIGl0c2VsZlxuICAgIGlmICgvKiogQHR5cGUge1JlbmRlcmFibGV9ICovKHBhcmVudCkuY2FuY2VsKSAvKiogQHR5cGUge1JlbmRlcmFibGV9ICovKHBhcmVudCkuY2FuY2VsKCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0c0FycmF5O1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEBwYXJhbSAge051bWJlcn0gW2RlY2ltYWxMZW5ndGhdXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHJhbmRvbSA9IChtaW4sIG1heCwgZGVjaW1hbExlbmd0aCkgPT4geyBjb25zdCBtID0gMTAgKiogKGRlY2ltYWxMZW5ndGggfHwgMCk7IHJldHVybiBmbG9vcigoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAoMSAvIG0pKSArIG1pbikgKiBtKSAvIG0gfTtcblxuLyoqXG4gKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGl0ZW1zXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmNvbnN0IHJhbmRvbVBpY2sgPSBpdGVtcyA9PiBpdGVtc1tyYW5kb20oMCwgaXRlbXMubGVuZ3RoIC0gMSldO1xuXG4vKipcbiAqIEFkYXB0ZWQgZnJvbSBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9zaHVmZmxlL1xuICogQHBhcmFtICB7QXJyYXl9IGl0ZW1zXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuY29uc3Qgc2h1ZmZsZSA9IGl0ZW1zID0+IHtcbiAgbGV0IG0gPSBpdGVtcy5sZW5ndGgsIHQsIGk7XG4gIHdoaWxlIChtKSB7IGkgPSByYW5kb20oMCwgLS1tKTsgdCA9IGl0ZW1zW21dOyBpdGVtc1ttXSA9IGl0ZW1zW2ldOyBpdGVtc1tpXSA9IHQ7IH1cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlY2ltYWxMZW5ndGhcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3Qgcm91bmRQYWQgPSAodiwgZGVjaW1hbExlbmd0aCkgPT4gKCt2KS50b0ZpeGVkKGRlY2ltYWxMZW5ndGgpO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHBhcmFtICB7TnVtYmVyfSB0b3RhbExlbmd0aFxuICogQHBhcmFtICB7U3RyaW5nfSBwYWRTdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgcGFkU3RhcnQgPSAodiwgdG90YWxMZW5ndGgsIHBhZFN0cmluZykgPT4gYCR7dn1gLnBhZFN0YXJ0KHRvdGFsTGVuZ3RoLCBwYWRTdHJpbmcpO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHBhcmFtICB7TnVtYmVyfSB0b3RhbExlbmd0aFxuICogQHBhcmFtICB7U3RyaW5nfSBwYWRTdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgcGFkRW5kID0gKHYsIHRvdGFsTGVuZ3RoLCBwYWRTdHJpbmcpID0+IGAke3Z9YC5wYWRFbmQodG90YWxMZW5ndGgsIHBhZFN0cmluZyk7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3Qgd3JhcCA9ICh2LCBtaW4sIG1heCkgPT4gKCgodiAtIG1pbikgJSAobWF4IC0gbWluKSArIChtYXggLSBtaW4pKSAlIChtYXggLSBtaW4pKSArIG1pbjtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGluTG93XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGluSGlnaFxuICogQHBhcmFtICB7TnVtYmVyfSBvdXRMb3dcbiAqIEBwYXJhbSAge051bWJlcn0gb3V0SGlnaFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBtYXBSYW5nZSA9ICh2YWx1ZSwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSA9PiBvdXRMb3cgKyAoKHZhbHVlIC0gaW5Mb3cpIC8gKGluSGlnaCAtIGluTG93KSkgKiAob3V0SGlnaCAtIG91dExvdyk7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWVzXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGRlZ1RvUmFkID0gZGVncmVlcyA9PiBkZWdyZWVzICogUEkgLyAxODA7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSByYWRpYW5zXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHJhZFRvRGVnID0gcmFkaWFucyA9PiByYWRpYW5zICogMTgwIC8gUEk7XG5cbi8qKlxuICogaHR0cHM6Ly93d3cucm9yeWRyaXNjb2xsLmNvbS8yMDE2LzAzLzA3L2ZyYW1lLXJhdGUtaW5kZXBlbmRlbnQtZGFtcGluZy11c2luZy1sZXJwL1xuICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFxuICogQHBhcmFtICB7TnVtYmVyfSBlbmRcbiAqIEBwYXJhbSAge051bWJlcn0gYW1vdW50XG4gKiBAcGFyYW0gIHtSZW5kZXJhYmxlfEJvb2xlYW59IFtyZW5kZXJhYmxlXVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBsZXJwID0gKHN0YXJ0LCBlbmQsIGFtb3VudCwgcmVuZGVyYWJsZSkgPT4ge1xuICBsZXQgZHQgPSBLIC8gZ2xvYmFscy5kZWZhdWx0cy5mcmFtZVJhdGU7XG4gIGlmIChyZW5kZXJhYmxlICE9PSBmYWxzZSkge1xuICAgIGNvbnN0IHRpY2tlciA9IC8qKiBAdHlwZSBSZW5kZXJhYmxlICovXG4gICAgICAgICAgICAgICAgICAgKHJlbmRlcmFibGUpIHx8XG4gICAgICAgICAgICAgICAgICAgKGVuZ2luZS5faGFzQ2hpbGRyZW4gJiYgZW5naW5lKTtcbiAgICBpZiAodGlja2VyICYmIHRpY2tlci5kZWx0YVRpbWUpIHtcbiAgICAgIGR0ID0gdGlja2VyLmRlbHRhVGltZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdCA9IDEgLSBNYXRoLmV4cCgtYW1vdW50ICogZHQgKiAuMSk7XG4gIHJldHVybiAhYW1vdW50ID8gc3RhcnQgOiBhbW91bnQgPT09IDEgPyBlbmQgOiAoMSAtIHQpICogc3RhcnQgKyB0ICogZW5kO1xufTtcblxuLy8gQ2hhaW4tYWJsZSB1dGlsaXRpZXNcblxuLyoqXG4gKiBAY2FsbGJhY2sgVXRpbGl0eUZ1bmN0aW9uXG4gKiBAcGFyYW0gey4uLip9IGFyZ3NcbiAqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9XG4gKlxuICogQHBhcmFtIHtVdGlsaXR5RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gW2xhc3Q9MF1cbiAqIEByZXR1cm4ge2Z1bmN0aW9uKC4uLihOdW1iZXJ8U3RyaW5nKSk6IGZ1bmN0aW9uKE51bWJlcnxTdHJpbmcpOiAoTnVtYmVyfFN0cmluZyl9XG4gKi9cbmNvbnN0IGN1cnJ5ID0gKGZuLCBsYXN0ID0gMCkgPT4gKC4uLmFyZ3MpID0+IGxhc3QgPyB2ID0+IGZuKC4uLmFyZ3MsIHYpIDogdiA9PiBmbih2LCAuLi5hcmdzKTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uKE51bWJlcnxTdHJpbmcpKX1cbiAqL1xuY29uc3QgY2hhaW4gPSBmbiA9PiB7XG4gICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICByZXR1cm4gbmV3IFByb3h5KG5vb3AsIHtcbiAgICAgIGFwcGx5OiAoXywgX18sIFt2XSkgPT4gcmVzdWx0KHYpLFxuICAgICAgZ2V0OiAoXywgcHJvcCkgPT4gY2hhaW4oLyoqQHBhcmFtIHsuLi5OdW1iZXJ8U3RyaW5nfSBuZXh0QXJncyAqLyguLi5uZXh0QXJncykgPT4ge1xuICAgICAgICBjb25zdCBuZXh0UmVzdWx0ID0gdXRpbHNbcHJvcF0oLi4ubmV4dEFyZ3MpO1xuICAgICAgICByZXR1cm4gKC8qKkB0eXBlIHtOdW1iZXJ8U3RyaW5nfSAqL3YpID0+IG5leHRSZXN1bHQocmVzdWx0KHYpKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtVdGlsaXR5RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gW3JpZ2h0XVxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uKE51bWJlcnxTdHJpbmcpKTogVXRpbGl0eUZ1bmN0aW9ufVxuICovXG5jb25zdCBtYWtlQ2hhaW5hYmxlID0gKGZuLCByaWdodCA9IDApID0+ICguLi5hcmdzKSA9PiAoYXJncy5sZW5ndGggPCBmbi5sZW5ndGggPyBjaGFpbihjdXJyeShmbiwgcmlnaHQpKSA6IGZuKSguLi5hcmdzKTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFV0aWxzUmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDaGFpbmFibGVVdGlsc1xuICogQHByb3BlcnR5IHtDaGFpbmVkQ2xhbXB9IGNsYW1wXG4gKiBAcHJvcGVydHkge0NoYWluZWRSb3VuZH0gcm91bmRcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZFNuYXB9IHNuYXBcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZFdyYXB9IHdyYXBcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZEludGVycG9sYXRlfSBpbnRlcnBvbGF0ZVxuICogQHByb3BlcnR5IHtDaGFpbmVkTWFwUmFuZ2V9IG1hcFJhbmdlXG4gKiBAcHJvcGVydHkge0NoYWluZWRSb3VuZFBhZH0gcm91bmRQYWRcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZFBhZFN0YXJ0fSBwYWRTdGFydFxuICogQHByb3BlcnR5IHtDaGFpbmVkUGFkRW5kfSBwYWRFbmRcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZERlZ1RvUmFkfSBkZWdUb1JhZFxuICogQHByb3BlcnR5IHtDaGFpbmVkUmFkVG9EZWd9IHJhZFRvRGVnXG4gKlxuICogQHR5cGVkZWYge0NoYWluYWJsZVV0aWxzICYgQ2hhaW5lZFV0aWxzUmVzdWx0fSBDaGFpbmFibGVVdGlsXG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRDbGFtcFxuICogQHBhcmFtIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFJvdW5kXG4gKiBAcGFyYW0ge051bWJlcn0gZGVjaW1hbExlbmd0aFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFNuYXBcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmNyZW1lbnRcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRXcmFwXG4gKiBAcGFyYW0ge051bWJlcn0gbWluXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkSW50ZXJwb2xhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydFxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZE1hcFJhbmdlXG4gKiBAcGFyYW0ge051bWJlcn0gaW5Mb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbkhpZ2hcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdXRMb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdXRIaWdoXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkUm91bmRQYWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWNpbWFsTGVuZ3RoXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkUGFkU3RhcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbExlbmd0aFxuICogQHBhcmFtIHtTdHJpbmd9IHBhZFN0cmluZ1xuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFBhZEVuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFkU3RyaW5nXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkRGVnVG9SYWRcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRSYWRUb0RlZ1xuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqL1xuXG5jb25zdCB1dGlscyA9IHtcbiAgJDogcmVnaXN0ZXJUYXJnZXRzLFxuICBnZXQ6IGdldFRhcmdldFZhbHVlLFxuICBzZXQ6IHNldFRhcmdldFZhbHVlcyxcbiAgcmVtb3ZlLFxuICBjbGVhbklubGluZVN0eWxlcyxcbiAgcmFuZG9tLFxuICByYW5kb21QaWNrLFxuICBzaHVmZmxlLFxuICBsZXJwLFxuICBzeW5jLFxuICBjbGFtcDogLyoqIEB0eXBlIHt0eXBlb2YgY2xhbXAgJiBDaGFpbmVkQ2xhbXB9ICovKG1ha2VDaGFpbmFibGUoY2xhbXApKSxcbiAgcm91bmQ6IC8qKiBAdHlwZSB7dHlwZW9mIHJvdW5kICYgQ2hhaW5lZFJvdW5kfSAqLyhtYWtlQ2hhaW5hYmxlKHJvdW5kKSksXG4gIHNuYXA6IC8qKiBAdHlwZSB7dHlwZW9mIHNuYXAgJiBDaGFpbmVkU25hcH0gKi8obWFrZUNoYWluYWJsZShzbmFwKSksXG4gIHdyYXA6IC8qKiBAdHlwZSB7dHlwZW9mIHdyYXAgJiBDaGFpbmVkV3JhcH0gKi8obWFrZUNoYWluYWJsZSh3cmFwKSksXG4gIGludGVycG9sYXRlOiAvKiogQHR5cGUge3R5cGVvZiBpbnRlcnBvbGF0ZSAmIENoYWluZWRJbnRlcnBvbGF0ZX0gKi8obWFrZUNoYWluYWJsZShpbnRlcnBvbGF0ZSwgMSkpLFxuICBtYXBSYW5nZTogLyoqIEB0eXBlIHt0eXBlb2YgbWFwUmFuZ2UgJiBDaGFpbmVkTWFwUmFuZ2V9ICovKG1ha2VDaGFpbmFibGUobWFwUmFuZ2UpKSxcbiAgcm91bmRQYWQ6IC8qKiBAdHlwZSB7dHlwZW9mIHJvdW5kUGFkICYgQ2hhaW5lZFJvdW5kUGFkfSAqLyhtYWtlQ2hhaW5hYmxlKHJvdW5kUGFkKSksXG4gIHBhZFN0YXJ0OiAvKiogQHR5cGUge3R5cGVvZiBwYWRTdGFydCAmIENoYWluZWRQYWRTdGFydH0gKi8obWFrZUNoYWluYWJsZShwYWRTdGFydCkpLFxuICBwYWRFbmQ6IC8qKiBAdHlwZSB7dHlwZW9mIHBhZEVuZCAmIENoYWluZWRQYWRFbmR9ICovKG1ha2VDaGFpbmFibGUocGFkRW5kKSksXG4gIGRlZ1RvUmFkOiAvKiogQHR5cGUge3R5cGVvZiBkZWdUb1JhZCAmIENoYWluZWREZWdUb1JhZH0gKi8obWFrZUNoYWluYWJsZShkZWdUb1JhZCkpLFxuICByYWRUb0RlZzogLyoqIEB0eXBlIHt0eXBlb2YgcmFkVG9EZWcgJiBDaGFpbmVkUmFkVG9EZWd9ICovKG1ha2VDaGFpbmFibGUocmFkVG9EZWcpKSxcbn07XG5cblxuXG5cbi8qKlxuICogQHR5cGVkZWYge051bWJlcnxTdHJpbmd8RnVuY3Rpb259IFRpbWVQb3NpdGlvblxuICovXG5cbi8qKlxuICogVGltZWxpbmUncyBjaGlsZHJlbiBvZmZzZXRzIHBvc2l0aW9ucyBwYXJzZXJcbiAqIEBwYXJhbSAge1RpbWVsaW5lfSB0aW1lbGluZVxuICogQHBhcmFtICB7U3RyaW5nfSB0aW1lUG9zaXRpb25cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgZ2V0UHJldkNoaWxkT2Zmc2V0ID0gKHRpbWVsaW5lLCB0aW1lUG9zaXRpb24pID0+IHtcbiAgaWYgKHN0cmluZ1N0YXJ0c1dpdGgodGltZVBvc2l0aW9uLCAnPCcpKSB7XG4gICAgY29uc3QgZ29Ub1ByZXZBbmltYXRpb25PZmZzZXQgPSB0aW1lUG9zaXRpb25bMV0gPT09ICc8JztcbiAgICBjb25zdCBwcmV2QW5pbWF0aW9uID0gLyoqIEB0eXBlIHtUaWNrYWJsZX0gKi8odGltZWxpbmUuX3RhaWwpO1xuICAgIGNvbnN0IHByZXZPZmZzZXQgPSBwcmV2QW5pbWF0aW9uID8gcHJldkFuaW1hdGlvbi5fb2Zmc2V0ICsgcHJldkFuaW1hdGlvbi5fZGVsYXkgOiAwO1xuICAgIHJldHVybiBnb1RvUHJldkFuaW1hdGlvbk9mZnNldCA/IHByZXZPZmZzZXQgOiBwcmV2T2Zmc2V0ICsgcHJldkFuaW1hdGlvbi5kdXJhdGlvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUaW1lbGluZX0gdGltZWxpbmVcbiAqIEBwYXJhbSAge1RpbWVQb3NpdGlvbn0gW3RpbWVQb3NpdGlvbl1cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgcGFyc2VUaW1lbGluZVBvc2l0aW9uID0gKHRpbWVsaW5lLCB0aW1lUG9zaXRpb24pID0+IHtcbiAgbGV0IHRsRHVyYXRpb24gPSB0aW1lbGluZS5pdGVyYXRpb25EdXJhdGlvbjtcbiAgaWYgKHRsRHVyYXRpb24gPT09IG1pblZhbHVlKSB0bER1cmF0aW9uID0gMDtcbiAgaWYgKGlzVW5kKHRpbWVQb3NpdGlvbikpIHJldHVybiB0bER1cmF0aW9uO1xuICBpZiAoaXNOdW0oK3RpbWVQb3NpdGlvbikpIHJldHVybiArdGltZVBvc2l0aW9uO1xuICBjb25zdCB0aW1lUG9zU3RyID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKHRpbWVQb3NpdGlvbik7XG4gIGNvbnN0IHRsTGFiZWxzID0gdGltZWxpbmUgPyB0aW1lbGluZS5sYWJlbHMgOiBudWxsO1xuICBjb25zdCBoYXNMYWJlbHMgPSAhaXNOaWwodGxMYWJlbHMpO1xuICBjb25zdCBwcmV2T2Zmc2V0ID0gZ2V0UHJldkNoaWxkT2Zmc2V0KHRpbWVsaW5lLCB0aW1lUG9zU3RyKTtcbiAgY29uc3QgaGFzU2libGluZyA9ICFpc1VuZChwcmV2T2Zmc2V0KTtcbiAgY29uc3QgbWF0Y2hlZFJlbGF0aXZlT3BlcmF0b3IgPSByZWxhdGl2ZVZhbHVlc0V4ZWNSZ3guZXhlYyh0aW1lUG9zU3RyKTtcbiAgaWYgKG1hdGNoZWRSZWxhdGl2ZU9wZXJhdG9yKSB7XG4gICAgY29uc3QgZnVsbE9wZXJhdG9yID0gbWF0Y2hlZFJlbGF0aXZlT3BlcmF0b3JbMF07XG4gICAgY29uc3Qgc3BsaXQgPSB0aW1lUG9zU3RyLnNwbGl0KGZ1bGxPcGVyYXRvcik7XG4gICAgY29uc3QgbGFiZWxPZmZzZXQgPSBoYXNMYWJlbHMgJiYgc3BsaXRbMF0gPyB0bExhYmVsc1tzcGxpdFswXV0gOiB0bER1cmF0aW9uO1xuICAgIGNvbnN0IHBhcnNlZE9mZnNldCA9IGhhc1NpYmxpbmcgPyBwcmV2T2Zmc2V0IDogaGFzTGFiZWxzID8gbGFiZWxPZmZzZXQgOiB0bER1cmF0aW9uO1xuICAgIGNvbnN0IHBhcnNlZE51bWVyaWNhbE9mZnNldCA9ICtzcGxpdFsxXTtcbiAgICByZXR1cm4gZ2V0UmVsYXRpdmVWYWx1ZShwYXJzZWRPZmZzZXQsIHBhcnNlZE51bWVyaWNhbE9mZnNldCwgZnVsbE9wZXJhdG9yWzBdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaGFzU2libGluZyA/IHByZXZPZmZzZXQgOlxuICAgICAgICAgICBoYXNMYWJlbHMgPyAhaXNVbmQodGxMYWJlbHNbdGltZVBvc1N0cl0pID8gdGxMYWJlbHNbdGltZVBvc1N0cl0gOlxuICAgICAgICAgICB0bER1cmF0aW9uIDogdGxEdXJhdGlvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1RpbWVsaW5lfSB0bFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRUaW1lbGluZVRvdGFsRHVyYXRpb24odGwpIHtcbiAgcmV0dXJuIGNsYW1wSW5maW5pdHkoKCh0bC5pdGVyYXRpb25EdXJhdGlvbiArIHRsLl9sb29wRGVsYXkpICogdGwuaXRlcmF0aW9uQ291bnQpIC0gdGwuX2xvb3BEZWxheSkgfHwgbWluVmFsdWU7XG59XG5cbi8qKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtUaW1lclBhcmFtc30gY2hpbGRQYXJhbXNcbiAqIEBwYXJhbSAge1RpbWVsaW5lfSB0bFxuICogQHBhcmFtICB7TnVtYmVyfSB0aW1lUG9zaXRpb25cbiAqIEByZXR1cm4ge1RpbWVsaW5lfVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7QW5pbWF0aW9uUGFyYW1zfSBjaGlsZFBhcmFtc1xuICogQHBhcmFtICB7VGltZWxpbmV9IHRsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVQb3NpdGlvblxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtpbmRleF1cbiAqIEBwYXJhbSAge051bWJlcn0gW2xlbmd0aF1cbiAqIEByZXR1cm4ge1RpbWVsaW5lfVxuICpcbiAqIEBwYXJhbSAge1RpbWVyUGFyYW1zfEFuaW1hdGlvblBhcmFtc30gY2hpbGRQYXJhbXNcbiAqIEBwYXJhbSAge1RpbWVsaW5lfSB0bFxuICogQHBhcmFtICB7TnVtYmVyfSB0aW1lUG9zaXRpb25cbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gW3RhcmdldHNdXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtpbmRleF1cbiAqIEBwYXJhbSAge051bWJlcn0gW2xlbmd0aF1cbiAqL1xuZnVuY3Rpb24gYWRkVGxDaGlsZChjaGlsZFBhcmFtcywgdGwsIHRpbWVQb3NpdGlvbiwgdGFyZ2V0cywgaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCBpc1NldHRlciA9IGlzTnVtKGNoaWxkUGFyYW1zLmR1cmF0aW9uKSAmJiAvKiogQHR5cGUge051bWJlcn0gKi8oY2hpbGRQYXJhbXMuZHVyYXRpb24pIDw9IG1pblZhbHVlO1xuICAvLyBPZmZzZXQgdGhlIHRsIHBvc2l0aW9uIHdpdGggLW1pblZhbHVlIGZvciAwIGR1cmF0aW9uIGFuaW1hdGlvbnMgb3IgLnNldCgpIGNhbGxzIGluIG9yZGVyIHRvIGFsaWduIHRoZWlyIGVuZCB2YWx1ZSB3aXRoIHRoZSBkZWZpbmVkIHBvc2l0aW9uXG4gIGNvbnN0IGFkanVzdGVkUG9zaXRpb24gPSBpc1NldHRlciA/IHRpbWVQb3NpdGlvbiAtIG1pblZhbHVlIDogdGltZVBvc2l0aW9uO1xuICB0aWNrKHRsLCBhZGp1c3RlZFBvc2l0aW9uLCAxLCAxLCB0aWNrTW9kZXMuQVVUTyk7XG4gIGNvbnN0IHRsQ2hpbGQgPSB0YXJnZXRzID9cbiAgICBuZXcgSlNBbmltYXRpb24odGFyZ2V0cywvKiogQHR5cGUge0FuaW1hdGlvblBhcmFtc30gKi8oY2hpbGRQYXJhbXMpLCB0bCwgYWRqdXN0ZWRQb3NpdGlvbiwgZmFsc2UsIGluZGV4LCBsZW5ndGgpIDpcbiAgICBuZXcgVGltZXIoLyoqIEB0eXBlIHtUaW1lclBhcmFtc30gKi8oY2hpbGRQYXJhbXMpLCB0bCwgYWRqdXN0ZWRQb3NpdGlvbik7XG4gIHRsQ2hpbGQuaW5pdCgxKTtcbiAgLy8gVE9ETzogTWlnaHQgYmUgYmV0dGVyIHRvIGluc2VydCBhdCBhIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHN0YXJ0VGltZT9cbiAgYWRkQ2hpbGQodGwsIHRsQ2hpbGQpO1xuICBmb3JFYWNoQ2hpbGRyZW4odGwsICgvKiogQHR5cGUge1JlbmRlcmFibGV9ICovY2hpbGQpID0+IHtcbiAgICBjb25zdCBjaGlsZFRMT2Zmc2V0ID0gY2hpbGQuX29mZnNldCArIGNoaWxkLl9kZWxheTtcbiAgICBjb25zdCBjaGlsZER1ciA9IGNoaWxkVExPZmZzZXQgKyBjaGlsZC5kdXJhdGlvbjtcbiAgICBpZiAoY2hpbGREdXIgPiB0bC5pdGVyYXRpb25EdXJhdGlvbikgdGwuaXRlcmF0aW9uRHVyYXRpb24gPSBjaGlsZER1cjtcbiAgfSk7XG4gIHRsLmR1cmF0aW9uID0gZ2V0VGltZWxpbmVUb3RhbER1cmF0aW9uKHRsKTtcbiAgcmV0dXJuIHRsO1xufVxuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIFRpbWVyIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtUaW1lbGluZVBhcmFtc30gW3BhcmFtZXRlcnNdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICBzdXBlcigvKiogQHR5cGUge1RpbWVyUGFyYW1zJlRpbWVsaW5lUGFyYW1zfSAqLyhwYXJhbWV0ZXJzKSwgbnVsbCwgMCk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7IC8vIFRMIGR1cmF0aW9uIHN0YXJ0cyBhdCAwIGFuZCBncm93cyB3aGVuIGFkZGluZyBjaGlsZHJlblxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgTnVtYmVyPn0gKi9cbiAgICB0aGlzLmxhYmVscyA9IHt9O1xuICAgIGNvbnN0IGRlZmF1bHRzUGFyYW1zID0gcGFyYW1ldGVycy5kZWZhdWx0cztcbiAgICBjb25zdCBnbG9iYWxEZWZhdWx0cyA9IGdsb2JhbHMuZGVmYXVsdHM7XG4gICAgLyoqIEB0eXBlIHtEZWZhdWx0c1BhcmFtc30gKi9cbiAgICB0aGlzLmRlZmF1bHRzID0gZGVmYXVsdHNQYXJhbXMgPyBtZXJnZU9iamVjdHMoZGVmYXVsdHNQYXJhbXMsIGdsb2JhbERlZmF1bHRzKSA6IGdsb2JhbERlZmF1bHRzO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblJlbmRlciA9IHBhcmFtZXRlcnMub25SZW5kZXIgfHwgZ2xvYmFsRGVmYXVsdHMub25SZW5kZXI7XG4gICAgY29uc3QgdGxQbGF5YmFja0Vhc2UgPSBzZXRWYWx1ZShwYXJhbWV0ZXJzLnBsYXliYWNrRWFzZSwgZ2xvYmFsRGVmYXVsdHMucGxheWJhY2tFYXNlKTtcbiAgICB0aGlzLl9lYXNlID0gdGxQbGF5YmFja0Vhc2UgPyBwYXJzZUVhc2luZ3ModGxQbGF5YmFja0Vhc2UpIDogbnVsbDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IGExXG4gICAqIEBwYXJhbSB7QW5pbWF0aW9uUGFyYW1zfSBhMlxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW2EzXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtUaW1lclBhcmFtc30gYTFcbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFthMl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICogQHBhcmFtIHtUYXJnZXRzUGFyYW18VGltZXJQYXJhbXN9IGExXG4gICAqIEBwYXJhbSB7QW5pbWF0aW9uUGFyYW1zfFRpbWVQb3NpdGlvbn0gYTJcbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFthM11cbiAgICovXG4gIGFkZChhMSwgYTIsIGEzKSB7XG4gICAgY29uc3QgaXNBbmltID0gaXNPYmooYTIpO1xuICAgIGNvbnN0IGlzVGltZXIgPSBpc09iaihhMSk7XG4gICAgaWYgKGlzQW5pbSB8fCBpc1RpbWVyKSB7XG4gICAgICB0aGlzLl9oYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICBpZiAoaXNBbmltKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkUGFyYW1zID0gLyoqIEB0eXBlIHtBbmltYXRpb25QYXJhbXN9ICovKGEyKTtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGZ1bmN0aW9uIGZvciBjaGlsZHJlbiBzdGFnZ2VyIHBvc2l0aW9uc1xuICAgICAgICBpZiAoaXNGbmMoYTMpKSB7XG4gICAgICAgICAgY29uc3Qgc3RhZ2dlcmVkUG9zaXRpb24gPSAvKiogQHR5cGUge0Z1bmN0aW9ufSAqLyhhMyk7XG4gICAgICAgICAgY29uc3QgcGFyc2VkVGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKC8qKiBAdHlwZSB7VGFyZ2V0c1BhcmFtfSAqLyhhMSkpO1xuICAgICAgICAgIC8vIFN0b3JlIGluaXRpYWwgZHVyYXRpb24gYmVmb3JlIGFkZGluZyBuZXcgY2hpbGRyZW4gdGhhdCB3aWxsIGNoYW5nZSB0aGUgZHVyYXRpb25cbiAgICAgICAgICBjb25zdCB0bER1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAvLyBTdG9yZSBpbml0aWFsIF9pdGVyYXRpb25EdXJhdGlvbiBiZWZvcmUgYWRkaW5nIG5ldyBjaGlsZHJlbiB0aGF0IHdpbGwgY2hhbmdlIHRoZSBkdXJhdGlvblxuICAgICAgICAgIGNvbnN0IHRsSXRlcmF0aW9uRHVyYXRpb24gPSB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uO1xuICAgICAgICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBpZCBpbiBvcmRlciB0byBhZGQgc3BlY2lmaWMgaW5kZXhlcyB0byB0aGUgbmV3IGFuaW1hdGlvbnMgaWRzXG4gICAgICAgICAgY29uc3QgaWQgPSBjaGlsZFBhcmFtcy5pZDtcbiAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgY29uc3QgcGFyc2VkTGVuZ3RoID0gcGFyc2VkVGFyZ2V0c0FycmF5Lmxlbmd0aDtcbiAgICAgICAgICBwYXJzZWRUYXJnZXRzQXJyYXkuZm9yRWFjaCgoLyoqIEB0eXBlIHtUYXJnZXR9ICovdGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFyYW1ldGVyIG9iamVjdCBmb3IgZWFjaCBzdGFnZ2VyZWQgY2hpbGRyZW5cbiAgICAgICAgICAgIGNvbnN0IHN0YWdnZXJlZENoaWxkUGFyYW1zID0geyAuLi5jaGlsZFBhcmFtcyB9O1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGR1cmF0aW9uIG9mIHRoZSB0aW1lbGluZSBpdGVyYXRpb24gYmVmb3JlIGVhY2ggc3RhZ2dlciB0byBwcmV2ZW50IHdyb25nIHN0YXJ0IHZhbHVlIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGxEdXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gPSB0bEl0ZXJhdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgaWYgKCFpc1VuZChpZCkpIHN0YWdnZXJlZENoaWxkUGFyYW1zLmlkID0gaWQgKyAnLScgKyBpO1xuICAgICAgICAgICAgYWRkVGxDaGlsZChcbiAgICAgICAgICAgICAgc3RhZ2dlcmVkQ2hpbGRQYXJhbXMsXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIHN0YWdnZXJlZFBvc2l0aW9uKHRhcmdldCwgaSwgcGFyc2VkTGVuZ3RoLCB0aGlzKSxcbiAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICBwYXJzZWRMZW5ndGhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkVGxDaGlsZChcbiAgICAgICAgICAgIGNoaWxkUGFyYW1zLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHBhcnNlVGltZWxpbmVQb3NpdGlvbih0aGlzLCBhMyksXG4gICAgICAgICAgICAvKiogQHR5cGUge1RhcmdldHNQYXJhbX0gKi8oYTEpLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEl0J3MgYSBUaW1lclxuICAgICAgICBhZGRUbENoaWxkKFxuICAgICAgICAgIC8qKiBAdHlwZSBUaW1lclBhcmFtcyAqLyhhMSksXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBwYXJzZVRpbWVsaW5lUG9zaXRpb24odGhpcywvKiogQHR5cGUgVGltZVBvc2l0aW9uICovKGEyKSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pbml0KDEpOyAvLyAxID0gaW50ZXJuYWxSZW5kZXJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7VGlja2FibGV9IFtzeW5jZWRdXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbcG9zaXRpb25dXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge2dsb2JhbFRoaXMuQW5pbWF0aW9ufSBbc3luY2VkXVxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW3Bvc2l0aW9uXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtXQUFQSUFuaW1hdGlvbn0gW3N5bmNlZF1cbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFtwb3NpdGlvbl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICogQHBhcmFtIHtUaWNrYWJsZXxXQUFQSUFuaW1hdGlvbnxnbG9iYWxUaGlzLkFuaW1hdGlvbn0gW3N5bmNlZF1cbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFtwb3NpdGlvbl1cbiAgICovXG4gIHN5bmMoc3luY2VkLCBwb3NpdGlvbikge1xuICAgIGlmIChpc1VuZChzeW5jZWQpIHx8IHN5bmNlZCAmJiBpc1VuZChzeW5jZWQucGF1c2UpKSByZXR1cm4gdGhpcztcbiAgICBzeW5jZWQucGF1c2UoKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9ICsoLyoqIEB0eXBlIHtnbG9iYWxUaGlzLkFuaW1hdGlvbn0gKi8oc3luY2VkKS5lZmZlY3QgPyAvKiogQHR5cGUge2dsb2JhbFRoaXMuQW5pbWF0aW9ufSAqLyhzeW5jZWQpLmVmZmVjdC5nZXRUaW1pbmcoKS5kdXJhdGlvbiA6IC8qKiBAdHlwZSB7VGlja2FibGV9ICovKHN5bmNlZCkuZHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmFkZChzeW5jZWQsIHsgY3VycmVudFRpbWU6IFswLCBkdXJhdGlvbl0sIGR1cmF0aW9uLCBlYXNlOiAnbGluZWFyJyB9LCBwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gICAqIEBwYXJhbSAge0FuaW1hdGlvblBhcmFtc30gcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gIHtUaW1lUG9zaXRpb259IFtwb3NpdGlvbl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHNldCh0YXJnZXRzLCBwYXJhbWV0ZXJzLCBwb3NpdGlvbikge1xuICAgIGlmIChpc1VuZChwYXJhbWV0ZXJzKSkgcmV0dXJuIHRoaXM7XG4gICAgcGFyYW1ldGVycy5kdXJhdGlvbiA9IG1pblZhbHVlO1xuICAgIHBhcmFtZXRlcnMuY29tcG9zaXRpb24gPSBjb21wb3NpdGlvblR5cGVzLnJlcGxhY2U7XG4gICAgcmV0dXJuIHRoaXMuYWRkKHRhcmdldHMsIHBhcmFtZXRlcnMsIHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0NhbGxiYWNrPFRpbWVyPn0gY2FsbGJhY2tcbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFtwb3NpdGlvbl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIGNhbGwoY2FsbGJhY2ssIHBvc2l0aW9uKSB7XG4gICAgaWYgKGlzVW5kKGNhbGxiYWNrKSB8fCBjYWxsYmFjayAmJiAhaXNGbmMoY2FsbGJhY2spKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gdGhpcy5hZGQoeyBkdXJhdGlvbjogMCwgb25Db21wbGV0ZTogKCkgPT4gY2FsbGJhY2sodGhpcykgfSwgcG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbE5hbWVcbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFtwb3NpdGlvbl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICovXG4gIGxhYmVsKGxhYmVsTmFtZSwgcG9zaXRpb24pIHtcbiAgICBpZiAoaXNVbmQobGFiZWxOYW1lKSB8fCBsYWJlbE5hbWUgJiYgIWlzU3RyKGxhYmVsTmFtZSkpIHJldHVybiB0aGlzO1xuICAgIHRoaXMubGFiZWxzW2xhYmVsTmFtZV0gPSBwYXJzZVRpbWVsaW5lUG9zaXRpb24odGhpcywvKiogQHR5cGUgVGltZVBvc2l0aW9uICovKHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW3Byb3BlcnR5TmFtZV1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJlbW92ZSh0YXJnZXRzLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICByZW1vdmUodGFyZ2V0cywgdGhpcywgcHJvcGVydHlOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG5ld0R1cmF0aW9uXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzdHJldGNoKG5ld0R1cmF0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudER1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBpZiAoY3VycmVudER1cmF0aW9uID09PSBub3JtYWxpemVUaW1lKG5ld0R1cmF0aW9uKSkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdGltZVNjYWxlID0gbmV3RHVyYXRpb24gLyBjdXJyZW50RHVyYXRpb247XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5sYWJlbHM7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL2NoaWxkKSA9PiBjaGlsZC5zdHJldGNoKGNoaWxkLmR1cmF0aW9uICogdGltZVNjYWxlKSk7XG4gICAgZm9yIChsZXQgbGFiZWxOYW1lIGluIGxhYmVscykgbGFiZWxzW2xhYmVsTmFtZV0gKj0gdGltZVNjYWxlO1xuICAgIHJldHVybiBzdXBlci5zdHJldGNoKG5ld0R1cmF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5yZWZyZXNoKSBjaGlsZC5yZWZyZXNoKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJldmVydCgpIHtcbiAgICBzdXBlci5yZXZlcnQoKTtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovY2hpbGQpID0+IGNoaWxkLnJldmVydCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGNsZWFuSW5saW5lU3R5bGVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge0NhbGxiYWNrPHRoaXM+fSBbY2FsbGJhY2tdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICB0aGVuKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRoZW4oY2FsbGJhY2spO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUaW1lbGluZVBhcmFtc30gW3BhcmFtZXRlcnNdXG4gKiBAcmV0dXJuIHtUaW1lbGluZX1cbiAqL1xuY29uc3QgY3JlYXRlVGltZWxpbmUgPSBwYXJhbWV0ZXJzID0+IG5ldyBUaW1lbGluZShwYXJhbWV0ZXJzKS5pbml0KCk7XG5cblxuXG5cbmNsYXNzIEFuaW1hdGFibGUge1xuICAvKipcbiAgICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAgICogQHBhcmFtIHtBbmltYXRhYmxlUGFyYW1zfSBwYXJhbWV0ZXJzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXRzLCBwYXJhbWV0ZXJzKSB7XG4gICAgaWYgKGdsb2JhbHMuc2NvcGUpIGdsb2JhbHMuc2NvcGUucmV2ZXJ0aWJsZXMucHVzaCh0aGlzKTtcbiAgICAvKiogQHR5cGUge0FuaW1hdGlvblBhcmFtc30gKi9cbiAgICBjb25zdCBnbG9iYWxQYXJhbXMgPSB7fTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG4gICAgdGhpcy50YXJnZXRzID0gW107XG4gICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgaWYgKGlzVW5kKHRhcmdldHMpIHx8IGlzVW5kKHBhcmFtZXRlcnMpKSByZXR1cm47XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gcGFyYW1ldGVycykge1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IHBhcmFtZXRlcnNbcHJvcE5hbWVdO1xuICAgICAgaWYgKGlzS2V5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IHBhcmFtVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbG9iYWxQYXJhbXNbcHJvcE5hbWVdID0gcGFyYW1WYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gcHJvcGVydGllcykge1xuICAgICAgY29uc3QgcHJvcFZhbHVlID0gcHJvcGVydGllc1twcm9wTmFtZV07XG4gICAgICBjb25zdCBpc09ialZhbHVlID0gaXNPYmoocHJvcFZhbHVlKTtcbiAgICAgIC8qKiBAdHlwZSB7VHdlZW5QYXJhbXNPcHRpb25zfSAqL1xuICAgICAgbGV0IHByb3BQYXJhbXMgPSB7fTtcbiAgICAgIGxldCB0byA9ICcrPTAnO1xuICAgICAgaWYgKGlzT2JqVmFsdWUpIHtcbiAgICAgICAgY29uc3QgdW5pdCA9IHByb3BWYWx1ZS51bml0O1xuICAgICAgICBpZiAoaXNTdHIodW5pdCkpIHRvICs9IHVuaXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wUGFyYW1zLmR1cmF0aW9uID0gcHJvcFZhbHVlO1xuICAgICAgfVxuICAgICAgcHJvcFBhcmFtc1twcm9wTmFtZV0gPSBpc09ialZhbHVlID8gbWVyZ2VPYmplY3RzKHsgdG8gfSwgcHJvcFZhbHVlKSA6IHRvO1xuICAgICAgY29uc3QgYW5pbVBhcmFtcyA9IG1lcmdlT2JqZWN0cyhnbG9iYWxQYXJhbXMsIHByb3BQYXJhbXMpO1xuICAgICAgYW5pbVBhcmFtcy5jb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uVHlwZXMucmVwbGFjZTtcbiAgICAgIGFuaW1QYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1twcm9wTmFtZV0gPSBuZXcgSlNBbmltYXRpb24odGFyZ2V0cywgYW5pbVBhcmFtcywgbnVsbCwgMCwgZmFsc2UpLmluaXQoKTtcbiAgICAgIGlmICghdGhpcy50YXJnZXRzLmxlbmd0aCkgdGhpcy50YXJnZXRzLnB1c2goLi4uYW5pbWF0aW9uLnRhcmdldHMpO1xuICAgICAgLyoqIEB0eXBlIHtBbmltYXRhYmxlUHJvcGVydHl9ICovXG4gICAgICB0aGlzW3Byb3BOYW1lXSA9ICh0bywgZHVyYXRpb24sIGVhc2UpID0+IHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSAvKiogQHR5cGUge1R3ZWVufSAqLyhhbmltYXRpb24uX2hlYWQpO1xuICAgICAgICBpZiAoaXNVbmQodG8pICYmIHR3ZWVuKSB7XG4gICAgICAgICAgY29uc3QgbnVtYmVycyA9IHR3ZWVuLl9udW1iZXJzO1xuICAgICAgICAgIGlmIChudW1iZXJzICYmIG51bWJlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR3ZWVuLl9tb2RpZmllcih0d2Vlbi5fbnVtYmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yRWFjaENoaWxkcmVuKGFuaW1hdGlvbiwgKC8qKiBAdHlwZSB7VHdlZW59ICovdHdlZW4pID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fycih0bykpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSAvKiogQHR5cGUge0FycmF5fSAqLyh0bykubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1VuZCh0d2Vlbi5fbnVtYmVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHR3ZWVuLl9mcm9tTnVtYmVyc1tpXSA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbi5fbW9kaWZpZXIodHdlZW4uX251bWJlcnNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIHR3ZWVuLl90b051bWJlcnNbaV0gPSB0b1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR3ZWVuLl9mcm9tTnVtYmVyID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuLl9tb2RpZmllcih0d2Vlbi5fbnVtYmVyKSk7XG4gICAgICAgICAgICAgIHR3ZWVuLl90b051bWJlciA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzVW5kKGVhc2UpKSB0d2Vlbi5fZWFzZSA9IHBhcnNlRWFzaW5ncyhlYXNlKTtcbiAgICAgICAgICAgIHR3ZWVuLl9jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFpc1VuZChkdXJhdGlvbikpIGFuaW1hdGlvbi5zdHJldGNoKGR1cmF0aW9uKTtcbiAgICAgICAgICBhbmltYXRpb24ucmVzZXQoMSkucmVzdW1lKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV2ZXJ0KCkge1xuICAgIGZvciAobGV0IHByb3BOYW1lIGluIHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgdGhpc1twcm9wTmFtZV0gPSBub29wO1xuICAgICAgdGhpcy5hbmltYXRpb25zW3Byb3BOYW1lXS5yZXZlcnQoKTtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgdGhpcy50YXJnZXRzLmxlbmd0aCA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHBhcmFtIHtBbmltYXRhYmxlUGFyYW1zfSBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtBbmltYXRhYmxlT2JqZWN0fVxuICovXG5jb25zdCBjcmVhdGVBbmltYXRhYmxlID0gKHRhcmdldHMsIHBhcmFtZXRlcnMpID0+IC8qKiBAdHlwZSB7QW5pbWF0YWJsZU9iamVjdH0gKi8obmV3IEFuaW1hdGFibGUodGFyZ2V0cywgcGFyYW1ldGVycykpO1xuXG5cblxuXG4vKlxuICogU3ByaW5nIGVhc2Ugc29sdmVyIGFkYXB0ZWQgZnJvbSBodHRwczovL3dlYmtpdC5vcmcvZGVtb3Mvc3ByaW5nL3NwcmluZy5qc1xuICogV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluY1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3ByaW5nUGFyYW1zXG4gKiBAcHJvcGVydHkge051bWJlcn0gW21hc3M9MV0gLSBNYXNzLCBkZWZhdWx0IDFcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbc3RpZmZuZXNzPTEwMF0gLSBTdGlmZm5lc3MsIGRlZmF1bHQgMTAwXG4gKiBAcHJvcGVydHkge051bWJlcn0gW2RhbXBpbmc9MTBdIC0gRGFtcGluZywgZGVmYXVsdCAxMFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFt2ZWxvY2l0eT0wXSAtIEluaXRpYWwgdmVsb2NpdHksIGRlZmF1bHQgMFxuICovXG5cbmNsYXNzIFNwcmluZyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1NwcmluZ1BhcmFtc30gW3BhcmFtZXRlcnNdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICB0aGlzLnRpbWVTdGVwID0gLjAyOyAvLyBJbnRlcnZhbCBmZWQgdG8gdGhlIHNvbHZlciB0byBjYWxjdWxhdGUgZHVyYXRpb25cbiAgICB0aGlzLnJlc3RUaHJlc2hvbGQgPSAuMDAwNTsgLy8gVmFsdWVzIGJlbG93IHRoaXMgdGhyZXNob2xkIGFyZSBjb25zaWRlcmVkIHJlc3RpbmcgcG9zaXRpb25cbiAgICB0aGlzLnJlc3REdXJhdGlvbiA9IDIwMDsgLy8gRHVyYXRpb24gaW4gbXMgdXNlZCB0byBjaGVjayBpZiB0aGUgc3ByaW5nIGlzIHJlc3RpbmcgYWZ0ZXIgcmVhY2hpbmcgcmVzdFRocmVzaG9sZFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA2MDAwMDsgLy8gVGhlIG1heGltdW0gYWxsb3dlZCBzcHJpbmcgZHVyYXRpb24gaW4gbXMgKGRlZmF1bHQgMSBtaW4pXG4gICAgdGhpcy5tYXhSZXN0U3RlcHMgPSB0aGlzLnJlc3REdXJhdGlvbiAvIHRoaXMudGltZVN0ZXAgLyBLOyAvLyBIb3cgbWFueSBzdGVwcyBhbGxvd2VkIGFmdGVyIHJlYWNoaW5nIHJlc3RUaHJlc2hvbGQgYmVmb3JlIHN0b3BwaW5nIHRoZSBkdXJhdGlvbiBjYWxjdWxhdGlvblxuICAgIHRoaXMubWF4SXRlcmF0aW9ucyA9IHRoaXMubWF4RHVyYXRpb24gLyB0aGlzLnRpbWVTdGVwIC8gSzsgLy8gQ2FsY3VsYXRlIHRoZSBtYXhpbXVtIGl0ZXJhdGlvbnMgYWxsb3dlZCBiYXNlZCBvbiBtYXhEdXJhdGlvblxuICAgIHRoaXMubSA9IGNsYW1wKHNldFZhbHVlKHBhcmFtZXRlcnMubWFzcywgMSksIDAsIEspO1xuICAgIHRoaXMucyA9IGNsYW1wKHNldFZhbHVlKHBhcmFtZXRlcnMuc3RpZmZuZXNzLCAxMDApLCAxLCBLKTtcbiAgICB0aGlzLmQgPSBjbGFtcChzZXRWYWx1ZShwYXJhbWV0ZXJzLmRhbXBpbmcsIDEwKSwgLjEsIEspO1xuICAgIHRoaXMudiA9IGNsYW1wKHNldFZhbHVlKHBhcmFtZXRlcnMudmVsb2NpdHksIDApLCAtMWUzLCBLKTtcbiAgICB0aGlzLncwID0gMDtcbiAgICB0aGlzLnpldGEgPSAwO1xuICAgIHRoaXMud2QgPSAwO1xuICAgIHRoaXMuYiA9IDA7XG4gICAgdGhpcy5zb2x2ZXJEdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5jb21wdXRlKCk7XG4gICAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmVhc2UgPSB0ID0+IHQgPT09IDAgfHwgdCA9PT0gMSA/IHQgOiB0aGlzLnNvbHZlKHQgKiB0aGlzLnNvbHZlckR1cmF0aW9uKTtcbiAgfVxuXG4gIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gIHNvbHZlKHRpbWUpIHtcbiAgICBjb25zdCB7IHpldGEsIHcwLCB3ZCwgYiB9ID0gdGhpcztcbiAgICBsZXQgdCA9IHRpbWU7XG4gICAgaWYgKHpldGEgPCAxKSB7XG4gICAgICB0ID0gZXhwKC10ICogemV0YSAqIHcwKSAqICgxICogY29zKHdkICogdCkgKyBiICogc2luKHdkICogdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gKDEgKyBiICogdCkgKiBleHAoLXQgKiB3MCk7XG4gICAgfVxuICAgIHJldHVybiAxIC0gdDtcbiAgfVxuXG4gIGNvbXB1dGUoKSB7XG4gICAgY29uc3QgeyBtYXhSZXN0U3RlcHMsIG1heEl0ZXJhdGlvbnMsIHJlc3RUaHJlc2hvbGQsIHRpbWVTdGVwLCBtLCBkLCBzLCB2IH0gPSB0aGlzO1xuICAgIGNvbnN0IHcwID0gdGhpcy53MCA9IGNsYW1wKHNxcnQocyAvIG0pLCBtaW5WYWx1ZSwgSyk7XG4gICAgY29uc3QgemV0YSA9IHRoaXMuemV0YSA9IGQgLyAoMiAqIHNxcnQocyAqIG0pKTtcbiAgICBjb25zdCB3ZCA9IHRoaXMud2QgPSB6ZXRhIDwgMSA/IHcwICogc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgICB0aGlzLmIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdikgLyB3ZCA6IC12ICsgdzA7XG4gICAgbGV0IHNvbHZlclRpbWUgPSAwO1xuICAgIGxldCByZXN0U3RlcHMgPSAwO1xuICAgIGxldCBpdGVyYXRpb25zID0gMDtcbiAgICB3aGlsZSAocmVzdFN0ZXBzIDwgbWF4UmVzdFN0ZXBzICYmIGl0ZXJhdGlvbnMgPCBtYXhJdGVyYXRpb25zKSB7XG4gICAgICBpZiAoYWJzKDEgLSB0aGlzLnNvbHZlKHNvbHZlclRpbWUpKSA8IHJlc3RUaHJlc2hvbGQpIHtcbiAgICAgICAgcmVzdFN0ZXBzKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN0U3RlcHMgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5zb2x2ZXJEdXJhdGlvbiA9IHNvbHZlclRpbWU7XG4gICAgICBzb2x2ZXJUaW1lICs9IHRpbWVTdGVwO1xuICAgICAgaXRlcmF0aW9ucysrO1xuICAgIH1cbiAgICB0aGlzLmR1cmF0aW9uID0gcm91bmQodGhpcy5zb2x2ZXJEdXJhdGlvbiAqIEssIDApICogZ2xvYmFscy50aW1lU2NhbGU7XG4gIH1cblxuICBnZXQgbWFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5tO1xuICB9XG5cbiAgc2V0IG1hc3Modikge1xuICAgIHRoaXMubSA9IGNsYW1wKHNldFZhbHVlKHYsIDEpLCAwLCBLKTtcbiAgICB0aGlzLmNvbXB1dGUoKTtcbiAgfVxuXG4gIGdldCBzdGlmZm5lc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucztcbiAgfVxuXG4gIHNldCBzdGlmZm5lc3Modikge1xuICAgIHRoaXMucyA9IGNsYW1wKHNldFZhbHVlKHYsIDEwMCksIDEsIEspO1xuICAgIHRoaXMuY29tcHV0ZSgpO1xuICB9XG5cbiAgZ2V0IGRhbXBpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZDtcbiAgfVxuXG4gIHNldCBkYW1waW5nKHYpIHtcbiAgICB0aGlzLmQgPSBjbGFtcChzZXRWYWx1ZSh2LCAxMCksIC4xLCBLKTtcbiAgICB0aGlzLmNvbXB1dGUoKTtcbiAgfVxuXG4gIGdldCB2ZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy52O1xuICB9XG5cbiAgc2V0IHZlbG9jaXR5KHYpIHtcbiAgICB0aGlzLnYgPSBjbGFtcChzZXRWYWx1ZSh2LCAwKSwgLTFlMywgSyk7XG4gICAgdGhpcy5jb21wdXRlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NwcmluZ1BhcmFtc30gW3BhcmFtZXRlcnNdXG4gKiBAcmV0dXJucyB7U3ByaW5nfVxuICovXG5jb25zdCBjcmVhdGVTcHJpbmcgPSAocGFyYW1ldGVycykgPT4gbmV3IFNwcmluZyhwYXJhbWV0ZXJzKTtcblxuXG5cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50fSBlXG4gKi9cbmNvbnN0IHByZXZlbnREZWZhdWx0ID0gZSA9PiB7XG4gIGlmIChlLmNhbmNlbGFibGUpIGUucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmNsYXNzIERPTVByb3h5IHtcbiAgLyoqIEBwYXJhbSB7T2JqZWN0fSBlbCAqL1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnpJbmRleCA9IDA7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmNsYXNzTGlzdCA9IHtcbiAgICAgIGFkZDogbm9vcCxcbiAgICAgIHJlbW92ZTogbm9vcCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHgoKSB7IHJldHVybiB0aGlzLmVsLnggfHwgMCB9O1xuICBzZXQgeCh2KSB7IHRoaXMuZWwueCA9IHY7IH07XG5cbiAgZ2V0IHkoKSB7IHJldHVybiB0aGlzLmVsLnkgfHwgMCB9O1xuICBzZXQgeSh2KSB7IHRoaXMuZWwueSA9IHY7IH07XG5cbiAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5lbC53aWR0aCB8fCAwIH07XG4gIHNldCB3aWR0aCh2KSB7IHRoaXMuZWwud2lkdGggPSB2OyB9O1xuXG4gIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLmVsLmhlaWdodCB8fCAwIH07XG4gIHNldCBoZWlnaHQodikgeyB0aGlzLmVsLmhlaWdodCA9IHY7IH07XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMueSxcbiAgICAgIHJpZ2h0OiB0aGlzLngsXG4gICAgICBib3R0b206IHRoaXMueSArIHRoaXMuaGVpZ2h0LFxuICAgICAgbGVmdDogdGhpcy54ICsgdGhpcy53aWR0aCxcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgVHJhbnNmb3JtcyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0RPTVRhcmdldHxET01Qcm94eX0gJGVsXG4gICAqL1xuICBjb25zdHJ1Y3RvcigkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmlubGluZVRyYW5zZm9ybXMgPSBbXTtcbiAgICB0aGlzLnBvaW50ID0gbmV3IERPTVBvaW50KCk7XG4gICAgdGhpcy5pbnZlcnNlZE1hdHJpeCA9IHRoaXMuZ2V0TWF0cml4KCkuaW52ZXJzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAqIEByZXR1cm4ge0RPTVBvaW50fVxuICAgKi9cbiAgbm9ybWFsaXplUG9pbnQoeCwgeSkge1xuICAgIHRoaXMucG9pbnQueCA9IHg7XG4gICAgdGhpcy5wb2ludC55ID0geTtcbiAgICByZXR1cm4gdGhpcy5wb2ludC5tYXRyaXhUcmFuc2Zvcm0odGhpcy5pbnZlcnNlZE1hdHJpeCk7XG4gIH1cblxuICAvKipcbiAgICogQGNhbGxiYWNrIFRyYXZlcnNlUGFyZW50c0NhbGxiYWNrXG4gICAqIEBwYXJhbSB7RE9NVGFyZ2V0fSAkZWxcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlcbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhdmVyc2VQYXJlbnRzQ2FsbGJhY2t9IGNiXG4gICAqL1xuICB0cmF2ZXJzZVVwKGNiKSB7XG4gICAgbGV0ICRlbCA9IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fERvY3VtZW50fSAqLyh0aGlzLiRlbC5wYXJlbnRFbGVtZW50KSwgaSA9IDA7XG4gICAgd2hpbGUgKCRlbCAmJiAkZWwgIT09IGRvYykge1xuICAgICAgY2IoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKCRlbCksIGkpO1xuICAgICAgJGVsID0gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKCRlbC5wYXJlbnRFbGVtZW50KTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cblxuICBnZXRNYXRyaXgoKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbmV3IERPTU1hdHJpeCgpO1xuICAgIHRoaXMudHJhdmVyc2VVcCgkZWwgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtVmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKCRlbCkudHJhbnNmb3JtO1xuICAgICAgaWYgKHRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVsTWF0cml4ID0gbmV3IERPTU1hdHJpeCh0cmFuc2Zvcm1WYWx1ZSk7XG4gICAgICAgIG1hdHJpeC5wcmVNdWx0aXBseVNlbGYoZWxNYXRyaXgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy50cmF2ZXJzZVVwKCgkZWwsIGkpID0+IHtcbiAgICAgIHRoaXMuaW5saW5lVHJhbnNmb3Jtc1tpXSA9ICRlbC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAkZWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgIH0pO1xuICB9XG5cbiAgcmV2ZXJ0KCkge1xuICAgIHRoaXMudHJhdmVyc2VVcCgoJGVsLCBpKSA9PiB7XG4gICAgICBjb25zdCBjdCA9IHRoaXMuaW5saW5lVHJhbnNmb3Jtc1tpXTtcbiAgICAgIGlmIChjdCA9PT0gJycpIHtcbiAgICAgICAgJGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbC5zdHlsZS50cmFuc2Zvcm0gPSBjdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7QXJyYXk8TnVtYmVyPnxET01UYXJnZXRTZWxlY3RvcnxTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258RHJhZ2dhYmxlQ3Vyc29yUGFyYW1zfSBUXG4gKiBAcGFyYW0ge1QgfCAoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBUKX0gdmFsdWVcbiAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGVcbiAqIEByZXR1cm4ge1R9XG4gKi9cbmNvbnN0IHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIgPSAodmFsdWUsIGRyYWdnYWJsZSkgPT4gdmFsdWUgJiYgaXNGbmModmFsdWUpID8gLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi8odmFsdWUpKGRyYWdnYWJsZSkgOiB2YWx1ZTtcblxubGV0IHpJbmRleCA9IDA7XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgcGFyYW1ldGVycyA9IHt9KSB7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBpZiAoZ2xvYmFscy5zY29wZSkgZ2xvYmFscy5zY29wZS5yZXZlcnRpYmxlcy5wdXNoKHRoaXMpO1xuICAgIGNvbnN0IHBhcmFtWCA9IHBhcmFtZXRlcnMueDtcbiAgICBjb25zdCBwYXJhbVkgPSBwYXJhbWV0ZXJzLnk7XG4gICAgY29uc3QgdHJpZ2dlciA9IHBhcmFtZXRlcnMudHJpZ2dlcjtcbiAgICBjb25zdCBtb2RpZmllciA9IHBhcmFtZXRlcnMubW9kaWZpZXI7XG4gICAgY29uc3QgZWFzZSA9IHBhcmFtZXRlcnMucmVsZWFzZUVhc2U7XG4gICAgY29uc3QgY3VzdG9tRWFzZSA9IGVhc2UgJiYgcGFyc2VFYXNpbmdzKGVhc2UpO1xuICAgIGNvbnN0IGhhc1NwcmluZyA9ICFpc1VuZChlYXNlKSAmJiAhaXNVbmQoLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UpO1xuICAgIGNvbnN0IHhQcm9wID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKGlzT2JqKHBhcmFtWCkgJiYgIWlzVW5kKC8qKiBAdHlwZSB7T2JqZWN0fSAqLyhwYXJhbVgpLm1hcFRvKSA/IC8qKiBAdHlwZSB7T2JqZWN0fSAqLyhwYXJhbVgpLm1hcFRvIDogJ3RyYW5zbGF0ZVgnKTtcbiAgICBjb25zdCB5UHJvcCA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhpc09iaihwYXJhbVkpICYmICFpc1VuZCgvKiogQHR5cGUge09iamVjdH0gKi8ocGFyYW1ZKS5tYXBUbykgPyAvKiogQHR5cGUge09iamVjdH0gKi8ocGFyYW1ZKS5tYXBUbyA6ICd0cmFuc2xhdGVZJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gcGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbWV0ZXJzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgdGhpcy5jb250YWluZXJBcnJheSA9IGlzQXJyKGNvbnRhaW5lcikgPyBjb250YWluZXIgOiBudWxsO1xuICAgIHRoaXMuJGNvbnRhaW5lciA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKGNvbnRhaW5lciAmJiAhdGhpcy5jb250YWluZXJBcnJheSA/IHBhcnNlVGFyZ2V0cygvKiogQHR5cGUge0RPTVRhcmdldH0gKi8oY29udGFpbmVyKSlbMF0gOiBkb2MuYm9keSk7XG4gICAgdGhpcy51c2VXaW4gPSB0aGlzLiRjb250YWluZXIgPT09IGRvYy5ib2R5O1xuICAgIC8qKiBAdHlwZSB7V2luZG93IHwgSFRNTEVsZW1lbnR9ICovXG4gICAgdGhpcy4kc2Nyb2xsQ29udGFpbmVyID0gdGhpcy51c2VXaW4gPyB3aW4gOiB0aGlzLiRjb250YWluZXI7XG4gICAgdGhpcy4kdGFyZ2V0ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oaXNPYmoodGFyZ2V0KSA/IG5ldyBET01Qcm94eSh0YXJnZXQpIDogcGFyc2VUYXJnZXRzKHRhcmdldClbMF0pO1xuICAgIHRoaXMuJHRyaWdnZXIgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhwYXJzZVRhcmdldHModHJpZ2dlciA/IHRyaWdnZXIgOiB0YXJnZXQpWzBdKTtcbiAgICB0aGlzLmZpeGVkID0gZ2V0VGFyZ2V0VmFsdWUodGhpcy4kdGFyZ2V0LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJztcbiAgICAvLyBSZWZyZXNoYWJsZSBwYXJhbWV0ZXJzXG4gICAgdGhpcy5pc0ZpbmVQb2ludGVyID0gdHJ1ZTtcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuY29udGFpbmVyUGFkZGluZyA9IFswLCAwLCAwLCAwXTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmNvbnRhaW5lckZyaWN0aW9uID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnJlbGVhc2VDb250YWluZXJGcmljdGlvbiA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ8QXJyYXk8TnVtYmVyPn0gKi9cbiAgICB0aGlzLnNuYXBYID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcnxBcnJheTxOdW1iZXI+fSAqL1xuICAgIHRoaXMuc25hcFkgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuc2Nyb2xsU3BlZWQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuc2Nyb2xsVGhyZXNob2xkID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmRyYWdTcGVlZCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5tYXhWZWxvY2l0eSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5taW5WZWxvY2l0eSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy52ZWxvY2l0eU11bHRpcGxpZXIgPSAwO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbnxEcmFnZ2FibGVDdXJzb3JQYXJhbXN9ICovXG4gICAgdGhpcy5jdXJzb3IgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge1NwcmluZ30gKi9cbiAgICB0aGlzLnJlbGVhc2VYU3ByaW5nID0gaGFzU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpIDogY3JlYXRlU3ByaW5nKHtcbiAgICAgIG1hc3M6IHNldFZhbHVlKHBhcmFtZXRlcnMucmVsZWFzZU1hc3MsIDEpLFxuICAgICAgc3RpZmZuZXNzOiBzZXRWYWx1ZShwYXJhbWV0ZXJzLnJlbGVhc2VTdGlmZm5lc3MsIDgwKSxcbiAgICAgIGRhbXBpbmc6IHNldFZhbHVlKHBhcmFtZXRlcnMucmVsZWFzZURhbXBpbmcsIDIwKSxcbiAgICB9KTtcbiAgICAvKiogQHR5cGUge1NwcmluZ30gKi9cbiAgICB0aGlzLnJlbGVhc2VZU3ByaW5nID0gaGFzU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpIDogY3JlYXRlU3ByaW5nKHtcbiAgICAgIG1hc3M6IHNldFZhbHVlKHBhcmFtZXRlcnMucmVsZWFzZU1hc3MsIDEpLFxuICAgICAgc3RpZmZuZXNzOiBzZXRWYWx1ZShwYXJhbWV0ZXJzLnJlbGVhc2VTdGlmZm5lc3MsIDgwKSxcbiAgICAgIGRhbXBpbmc6IHNldFZhbHVlKHBhcmFtZXRlcnMucmVsZWFzZURhbXBpbmcsIDIwKSxcbiAgICB9KTtcbiAgICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVsZWFzZUVhc2UgPSBjdXN0b21FYXNlIHx8IGVhc2VzLm91dFF1aW50O1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmhhc1JlbGVhc2VTcHJpbmcgPSBoYXNTcHJpbmc7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uR3JhYiA9IHBhcmFtZXRlcnMub25HcmFiIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uRHJhZyA9IHBhcmFtZXRlcnMub25EcmFnIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uUmVsZWFzZSA9IHBhcmFtZXRlcnMub25SZWxlYXNlIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gcGFyYW1ldGVycy5vblVwZGF0ZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblNldHRsZSA9IHBhcmFtZXRlcnMub25TZXR0bGUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25TbmFwID0gcGFyYW1ldGVycy5vblNuYXAgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25SZXNpemUgPSBwYXJhbWV0ZXJzLm9uUmVzaXplIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uQWZ0ZXJSZXNpemUgPSBwYXJhbWV0ZXJzLm9uQWZ0ZXJSZXNpemUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IFswLCAwXTtcbiAgICAvKiogQHR5cGUge0FuaW1hdGFibGVQYXJhbXN9ICovXG4gICAgY29uc3QgYW5pbWF0YWJsZVBhcmFtcyA9IHt9O1xuICAgIGlmIChtb2RpZmllcikgYW5pbWF0YWJsZVBhcmFtcy5tb2RpZmllciA9IG1vZGlmaWVyO1xuICAgIGlmIChpc1VuZChwYXJhbVgpIHx8IHBhcmFtWCA9PT0gdHJ1ZSkge1xuICAgICAgYW5pbWF0YWJsZVBhcmFtc1t4UHJvcF0gPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNPYmoocGFyYW1YKSkge1xuICAgICAgY29uc3QgcGFyYW1YT2JqZWN0ID0gLyoqIEB0eXBlIHtEcmFnZ2FibGVBeGlzUGFyYW19ICovKHBhcmFtWCk7XG4gICAgICBjb25zdCBhbmltYXRhYmxlWFBhcmFtcyA9IHt9O1xuICAgICAgaWYgKHBhcmFtWE9iamVjdC5tb2RpZmllcikgYW5pbWF0YWJsZVhQYXJhbXMubW9kaWZpZXIgPSBwYXJhbVhPYmplY3QubW9kaWZpZXI7XG4gICAgICBpZiAocGFyYW1YT2JqZWN0LmNvbXBvc2l0aW9uKSBhbmltYXRhYmxlWFBhcmFtcy5jb21wb3NpdGlvbiA9IHBhcmFtWE9iamVjdC5jb21wb3NpdGlvbjtcbiAgICAgIGFuaW1hdGFibGVQYXJhbXNbeFByb3BdID0gYW5pbWF0YWJsZVhQYXJhbXM7XG4gICAgfSBlbHNlIGlmIChwYXJhbVggPT09IGZhbHNlKSB7XG4gICAgICBhbmltYXRhYmxlUGFyYW1zW3hQcm9wXSA9IDA7XG4gICAgICB0aGlzLmRpc2FibGVkWzBdID0gMTtcbiAgICB9XG4gICAgaWYgKGlzVW5kKHBhcmFtWSkgfHwgcGFyYW1ZID09PSB0cnVlKSB7XG4gICAgICBhbmltYXRhYmxlUGFyYW1zW3lQcm9wXSA9IDA7XG4gICAgfSBlbHNlIGlmIChpc09iaihwYXJhbVkpKSB7XG4gICAgICBjb25zdCBwYXJhbVlPYmplY3QgPSAvKiogQHR5cGUge0RyYWdnYWJsZUF4aXNQYXJhbX0gKi8ocGFyYW1ZKTtcbiAgICAgIGNvbnN0IGFuaW1hdGFibGVZUGFyYW1zID0ge307XG4gICAgICBpZiAocGFyYW1ZT2JqZWN0Lm1vZGlmaWVyKSBhbmltYXRhYmxlWVBhcmFtcy5tb2RpZmllciA9IHBhcmFtWU9iamVjdC5tb2RpZmllcjtcbiAgICAgIGlmIChwYXJhbVlPYmplY3QuY29tcG9zaXRpb24pIGFuaW1hdGFibGVZUGFyYW1zLmNvbXBvc2l0aW9uID0gcGFyYW1ZT2JqZWN0LmNvbXBvc2l0aW9uO1xuICAgICAgYW5pbWF0YWJsZVBhcmFtc1t5UHJvcF0gPSBhbmltYXRhYmxlWVBhcmFtcztcbiAgICB9IGVsc2UgaWYgKHBhcmFtWSA9PT0gZmFsc2UpIHtcbiAgICAgIGFuaW1hdGFibGVQYXJhbXNbeVByb3BdID0gMDtcbiAgICAgIHRoaXMuZGlzYWJsZWRbMV0gPSAxO1xuICAgIH1cbiAgICAvKiogQHR5cGUge0FuaW1hdGFibGVPYmplY3R9ICovXG4gICAgdGhpcy5hbmltYXRlID0gLyoqIEB0eXBlIHtBbmltYXRhYmxlT2JqZWN0fSAqLyhuZXcgQW5pbWF0YWJsZSh0aGlzLiR0YXJnZXQsIGFuaW1hdGFibGVQYXJhbXMpKTtcbiAgICAvLyBJbnRlcm5hbCBwcm9wc1xuICAgIHRoaXMueFByb3AgPSB4UHJvcDtcbiAgICB0aGlzLnlQcm9wID0geVByb3A7XG4gICAgdGhpcy5kZXN0WCA9IDA7XG4gICAgdGhpcy5kZXN0WSA9IDA7XG4gICAgdGhpcy5kZWx0YVggPSAwO1xuICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICB0aGlzLnNjcm9sbCA9IHt4OiAwLCB5OiAwfTtcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuY29vcmRzID0gW3RoaXMueCwgdGhpcy55LCAwLCAwXTsgLy8geCwgeSwgdGVtcCB4LCB0ZW1wIHlcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5zbmFwcGVkID0gWzAsIDBdOyAvLyB4LCB5XG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMucG9pbnRlciA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTsgLy8geDEsIHkxLCB4MiwgeTIsIHRlbXAgeDEsIHRlbXAgeTEsIHRlbXAgeDIsIHRlbXAgeTJcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5zY3JvbGxWaWV3ID0gWzAsIDBdOyAvLyB3LCBoXG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLmRyYWdBcmVhID0gWzAsIDAsIDAsIDBdOyAvLyB4LCB5LCB3LCBoXG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLmNvbnRhaW5lckJvdW5kcyA9IFstMWUxMiwgbWF4VmFsdWUsIG1heFZhbHVlLCAtMWUxMl07IC8vIHQsIHIsIGIsIGxcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuc2Nyb2xsQm91bmRzID0gWzAsIDAsIDAsIDBdOyAvLyB0LCByLCBiLCBsXG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLnRhcmdldEJvdW5kcyA9IFswLCAwLCAwLCAwXTsgLy8gdCwgciwgYiwgbFxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLndpbmRvdyA9IFswLCAwXTsgLy8gdywgaFxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMudmVsb2NpdHlTdGFjayA9IFswLCAwLCAwXTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tJbmRleCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy52ZWxvY2l0eVRpbWUgPSBub3coKTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL1xuICAgIHRoaXMuY3Vyc29yU3R5bGVzID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL1xuICAgIHRoaXMudHJpZ2dlclN0eWxlcyA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9cbiAgICB0aGlzLmJvZHlTdHlsZXMgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovXG4gICAgdGhpcy50YXJnZXRTdHlsZXMgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovXG4gICAgdGhpcy50b3VjaEFjdGlvblN0eWxlcyA9IG51bGw7XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gbmV3IFRyYW5zZm9ybXModGhpcy4kdGFyZ2V0KTtcbiAgICB0aGlzLm92ZXJzaG9vdENvb3JkcyA9IHsgeDogMCwgeTogMCB9O1xuICAgIHRoaXMub3ZlcnNob290WFRpY2tlciA9IG5ldyBUaW1lcih7IGF1dG9wbGF5OiBmYWxzZSB9LCBudWxsLCAwKS5pbml0KCk7XG4gICAgdGhpcy5vdmVyc2hvb3RZVGlja2VyID0gbmV3IFRpbWVyKHsgYXV0b3BsYXk6IGZhbHNlIH0sIG51bGwsIDApLmluaXQoKTtcbiAgICB0aGlzLnVwZGF0ZVRpY2tlciA9IG5ldyBUaW1lcih7IGF1dG9wbGF5OiBmYWxzZSB9LCBudWxsLCAwKS5pbml0KCk7XG4gICAgdGhpcy5vdmVyc2hvb3RYVGlja2VyLm9uVXBkYXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWRbMF0pIHJldHVybjtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGVbdGhpcy54UHJvcF0odGhpcy5vdmVyc2hvb3RDb29yZHMueCwgMCk7XG4gICAgfTtcbiAgICB0aGlzLm92ZXJzaG9vdFhUaWNrZXIub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkWzBdKSByZXR1cm47XG4gICAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICAgICAgdGhpcy5hbmltYXRlW3RoaXMueFByb3BdKHRoaXMub3ZlcnNob290Q29vcmRzLngsIDApO1xuICAgIH07XG4gICAgdGhpcy5vdmVyc2hvb3RZVGlja2VyLm9uVXBkYXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWRbMV0pIHJldHVybjtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGVbdGhpcy55UHJvcF0odGhpcy5vdmVyc2hvb3RDb29yZHMueSwgMCk7XG4gICAgfTtcbiAgICB0aGlzLm92ZXJzaG9vdFlUaWNrZXIub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkWzFdKSByZXR1cm47XG4gICAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICAgICAgdGhpcy5hbmltYXRlW3RoaXMueVByb3BdKHRoaXMub3ZlcnNob290Q29vcmRzLnksIDApO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVUaWNrZXIub25VcGRhdGUgPSAoKSA9PiB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuY29udGFpbmVkID0gIWlzVW5kKGNvbnRhaW5lcik7XG4gICAgdGhpcy5tYW51YWwgPSBmYWxzZTtcbiAgICB0aGlzLmdyYWJiZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbGVhc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5TY3JvbGwgPSBmYWxzZTtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmVQcm9wID0gdGhpcy5kaXNhYmxlZFsxXSA/IHhQcm9wIDogeVByb3A7XG4gICAgdGhpcy5hbmltYXRlLmFuaW1hdGlvbnNbdGhpcy5hY3RpdmVQcm9wXS5vblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhc1VwZGF0ZWQgPSB0aGlzLnVwZGF0ZWQ7XG4gICAgICBjb25zdCBoYXNNb3ZlZCA9IHRoaXMuZ3JhYmJlZCAmJiBoYXNVcGRhdGVkO1xuICAgICAgY29uc3QgaGFzUmVsZWFzZWQgPSAhaGFzTW92ZWQgJiYgdGhpcy5yZWxlYXNlZDtcbiAgICAgIGNvbnN0IHggPSB0aGlzLng7XG4gICAgICBjb25zdCB5ID0gdGhpcy55O1xuICAgICAgY29uc3QgZHggPSB4IC0gdGhpcy5jb29yZHNbMl07XG4gICAgICBjb25zdCBkeSA9IHkgLSB0aGlzLmNvb3Jkc1szXTtcbiAgICAgIHRoaXMuZGVsdGFYID0gZHg7XG4gICAgICB0aGlzLmRlbHRhWSA9IGR5O1xuICAgICAgdGhpcy5jb29yZHNbMl0gPSB4O1xuICAgICAgdGhpcy5jb29yZHNbM10gPSB5O1xuICAgICAgaWYgKGhhc1VwZGF0ZWQpIHtcbiAgICAgICAgdGhpcy5vblVwZGF0ZSh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFzUmVsZWFzZWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXB1dGVWZWxvY2l0eShkeCwgZHkpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYXRhbjIoZHksIGR4KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYW5pbWF0ZS5hbmltYXRpb25zW3RoaXMuYWN0aXZlUHJvcF0ub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICgoIXRoaXMuZ3JhYmJlZCAmJiB0aGlzLnJlbGVhc2VkKSkge1xuICAgICAgICAvLyBTZXQgZWxlYXNlZCB0byBmYWxzZSBiZWZvcmUgY2FsbGluZyBvblNldHRsZSB0byBhdm9pZCByZWN1cnNpb25cbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm1hbnVhbCkge1xuICAgICAgICB0aGlzLmRlbHRhWCA9IDA7XG4gICAgICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMudmVsb2NpdHlTdGFja1swXSA9IDA7XG4gICAgICAgIHRoaXMudmVsb2NpdHlTdGFja1sxXSA9IDA7XG4gICAgICAgIHRoaXMudmVsb2NpdHlTdGFja1syXSA9IDA7XG4gICAgICAgIHRoaXMudmVsb2NpdHlTdGFja0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5vblNldHRsZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVzaXplVGlja2VyID0gbmV3IFRpbWVyKHtcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAxNTAgKiBnbG9iYWxzLnRpbWVTY2FsZSxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIHRoaXMub25BZnRlclJlc2l6ZSh0aGlzKTtcbiAgICAgIH0sXG4gICAgfSkuaW5pdCgpO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLnJlc2l6ZVRpY2tlci5yZXN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmVuYWJsZSgpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRjb250YWluZXIpO1xuICAgIGlmICghaXNPYmoodGFyZ2V0KSkgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuJHRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkeFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGR5XG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGNvbXB1dGVWZWxvY2l0eShkeCwgZHkpIHtcbiAgICBjb25zdCBwcmV2VGltZSA9IHRoaXMudmVsb2NpdHlUaW1lO1xuICAgIGNvbnN0IGN1clRpbWUgPSBub3coKTtcbiAgICBjb25zdCBlbGFwc2VkID0gY3VyVGltZSAtIHByZXZUaW1lO1xuICAgIGlmIChlbGFwc2VkIDwgMTcpIHJldHVybiB0aGlzLnZlbG9jaXR5O1xuICAgIHRoaXMudmVsb2NpdHlUaW1lID0gY3VyVGltZTtcbiAgICBjb25zdCB2ZWxvY2l0eVN0YWNrID0gdGhpcy52ZWxvY2l0eVN0YWNrO1xuICAgIGNvbnN0IHZNdWwgPSB0aGlzLnZlbG9jaXR5TXVsdGlwbGllcjtcbiAgICBjb25zdCBtaW5WID0gdGhpcy5taW5WZWxvY2l0eTtcbiAgICBjb25zdCBtYXhWID0gdGhpcy5tYXhWZWxvY2l0eTtcbiAgICBjb25zdCB2aSA9IHRoaXMudmVsb2NpdHlTdGFja0luZGV4O1xuICAgIHZlbG9jaXR5U3RhY2tbdmldID0gcm91bmQoY2xhbXAoKHNxcnQoZHggKiBkeCArIGR5ICogZHkpIC8gZWxhcHNlZCkgKiB2TXVsLCBtaW5WLCBtYXhWKSwgNSk7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBtYXgodmVsb2NpdHlTdGFja1swXSwgdmVsb2NpdHlTdGFja1sxXSwgdmVsb2NpdHlTdGFja1syXSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHRoaXMudmVsb2NpdHlTdGFja0luZGV4ID0gKHZpICsgMSkgJSAzO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge051bWJlcn0gIHhcbiAgICogQHBhcmFtIHtCb29sZWFufSBbbXV0ZVVwZGF0ZUNhbGxiYWNrXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc2V0WCh4LCBtdXRlVXBkYXRlQ2FsbGJhY2sgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkWzBdKSByZXR1cm47XG4gICAgY29uc3QgdiA9IHJvdW5kKHgsIDUpO1xuICAgIHRoaXMub3ZlcnNob290WFRpY2tlci5wYXVzZSgpO1xuICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZWQgPSAhbXV0ZVVwZGF0ZUNhbGxiYWNrO1xuICAgIHRoaXMuZGVzdFggPSB2O1xuICAgIHRoaXMuc25hcHBlZFswXSA9IHNuYXAodiwgdGhpcy5zbmFwWCk7XG4gICAgdGhpcy5hbmltYXRlW3RoaXMueFByb3BdKHYsIDApO1xuICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOdW1iZXJ9ICB5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW211dGVVcGRhdGVDYWxsYmFja11cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHNldFkoeSwgbXV0ZVVwZGF0ZUNhbGxiYWNrID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZFsxXSkgcmV0dXJuO1xuICAgIGNvbnN0IHYgPSByb3VuZCh5LCA1KTtcbiAgICB0aGlzLm92ZXJzaG9vdFlUaWNrZXIucGF1c2UoKTtcbiAgICB0aGlzLm1hbnVhbCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVkID0gIW11dGVVcGRhdGVDYWxsYmFjaztcbiAgICB0aGlzLmRlc3RZID0gdjtcbiAgICB0aGlzLnNuYXBwZWRbMV0gPSBzbmFwKHYsIHRoaXMuc25hcFkpO1xuICAgIHRoaXMuYW5pbWF0ZVt0aGlzLnlQcm9wXSh2LCAwKTtcbiAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHJvdW5kKC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0aGlzLmFuaW1hdGVbdGhpcy54UHJvcF0oKSksIGdsb2JhbHMucHJlY2lzaW9uKTtcbiAgfVxuXG4gIHNldCB4KHgpIHtcbiAgICB0aGlzLnNldFgoeCwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHJvdW5kKC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0aGlzLmFuaW1hdGVbdGhpcy55UHJvcF0oKSksIGdsb2JhbHMucHJlY2lzaW9uKTtcbiAgfVxuXG4gIHNldCB5KHkpIHtcbiAgICB0aGlzLnNldFkoeSwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzWCgpIHtcbiAgICByZXR1cm4gbWFwUmFuZ2UodGhpcy54LCB0aGlzLmNvbnRhaW5lckJvdW5kc1szXSwgdGhpcy5jb250YWluZXJCb3VuZHNbMV0sIDAsIDEpO1xuICB9XG5cbiAgc2V0IHByb2dyZXNzWCh4KSB7XG4gICAgdGhpcy5zZXRYKG1hcFJhbmdlKHgsIDAsIDEsIHRoaXMuY29udGFpbmVyQm91bmRzWzNdLCB0aGlzLmNvbnRhaW5lckJvdW5kc1sxXSksIGZhbHNlKTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzc1koKSB7XG4gICAgcmV0dXJuIG1hcFJhbmdlKHRoaXMueSwgdGhpcy5jb250YWluZXJCb3VuZHNbMF0sIHRoaXMuY29udGFpbmVyQm91bmRzWzJdLCAwLCAxKTtcbiAgfVxuXG4gIHNldCBwcm9ncmVzc1koeSkge1xuICAgIHRoaXMuc2V0WShtYXBSYW5nZSh5LCAwLCAxLCB0aGlzLmNvbnRhaW5lckJvdW5kc1swXSwgdGhpcy5jb250YWluZXJCb3VuZHNbMl0pLCBmYWxzZSk7XG4gIH1cblxuICB1cGRhdGVTY3JvbGxDb29yZHMoKSB7XG4gICAgY29uc3Qgc3ggPSByb3VuZCh0aGlzLnVzZVdpbiA/IHdpbi5zY3JvbGxYIDogdGhpcy4kY29udGFpbmVyLnNjcm9sbExlZnQsIDApO1xuICAgIGNvbnN0IHN5ID0gcm91bmQodGhpcy51c2VXaW4gPyB3aW4uc2Nyb2xsWSA6IHRoaXMuJGNvbnRhaW5lci5zY3JvbGxUb3AsIDApO1xuICAgIGNvbnN0IFsgY3B0LCBjcHIsIGNwYiwgY3BsIF0gPSB0aGlzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5zY3JvbGxUaHJlc2hvbGQ7XG4gICAgdGhpcy5zY3JvbGwueCA9IHN4O1xuICAgIHRoaXMuc2Nyb2xsLnkgPSBzeTtcbiAgICB0aGlzLnNjcm9sbEJvdW5kc1swXSA9IHN5IC0gdGhpcy50YXJnZXRCb3VuZHNbMF0gKyBjcHQgLSB0aHJlc2hvbGQ7XG4gICAgdGhpcy5zY3JvbGxCb3VuZHNbMV0gPSBzeCAtIHRoaXMudGFyZ2V0Qm91bmRzWzFdIC0gY3ByICsgdGhyZXNob2xkO1xuICAgIHRoaXMuc2Nyb2xsQm91bmRzWzJdID0gc3kgLSB0aGlzLnRhcmdldEJvdW5kc1syXSAtIGNwYiArIHRocmVzaG9sZDtcbiAgICB0aGlzLnNjcm9sbEJvdW5kc1szXSA9IHN4IC0gdGhpcy50YXJnZXRCb3VuZHNbM10gKyBjcGwgLSB0aHJlc2hvbGQ7XG4gIH1cblxuICB1cGRhdGVCb3VuZGluZ1ZhbHVlcygpIHtcbiAgICBjb25zdCAkY29udGFpbmVyID0gdGhpcy4kY29udGFpbmVyO1xuICAgIGNvbnN0IGN4ID0gdGhpcy54O1xuICAgIGNvbnN0IGN5ID0gdGhpcy55O1xuICAgIGNvbnN0IGN4MiA9IHRoaXMuY29vcmRzWzJdO1xuICAgIGNvbnN0IGN5MiA9ICB0aGlzLmNvb3Jkc1szXTtcbiAgICAvLyBQcmV2ZW50cyBpbnRlcmZlcmluZyB3aXRoIHRoZSBzY3JvbGwgYXJlYSBpbiBjYXNlcyB0aGUgdGFyZ2V0IGlzIG91dHNpZGUgb2YgdGhlIGNvbnRhaW5lclxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGVtcCBjb29yZHMgYXJlIGFsc28gYWRqdXNldCB0byBwcmV2ZW50cyB3cm9uZyBkZWx0YSBjYWxjdWxhdGlvbiBvbiB1cGRhdGVzXG4gICAgdGhpcy5jb29yZHNbMl0gPSAwO1xuICAgIHRoaXMuY29vcmRzWzNdID0gMDtcbiAgICB0aGlzLnNldFgoMCwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRZKDAsIHRydWUpO1xuICAgIHRoaXMudHJhbnNmb3Jtcy5yZW1vdmUoKTtcbiAgICBjb25zdCBpdyA9IHRoaXMud2luZG93WzBdID0gd2luLmlubmVyV2lkdGg7XG4gICAgY29uc3QgaWggPSB0aGlzLndpbmRvd1sxXSA9IHdpbi5pbm5lckhlaWdodDtcbiAgICBjb25zdCB1dyA9IHRoaXMudXNlV2luO1xuICAgIGNvbnN0IHN3ID0gJGNvbnRhaW5lci5zY3JvbGxXaWR0aDtcbiAgICBjb25zdCBzaCA9ICRjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgIGNvbnN0IGZ4ID0gdGhpcy5maXhlZDtcbiAgICBjb25zdCB0cmFuc2Zvcm1Db250YWluZXJSZWN0ID0gJGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBbIGNwdCwgY3ByLCBjcGIsIGNwbCBdID0gdGhpcy5jb250YWluZXJQYWRkaW5nO1xuICAgIHRoaXMuZHJhZ0FyZWFbMF0gPSB1dyA/IDAgOiB0cmFuc2Zvcm1Db250YWluZXJSZWN0LmxlZnQ7XG4gICAgdGhpcy5kcmFnQXJlYVsxXSA9IHV3ID8gMCA6IHRyYW5zZm9ybUNvbnRhaW5lclJlY3QudG9wO1xuICAgIHRoaXMuc2Nyb2xsVmlld1swXSA9IHV3ID8gY2xhbXAoc3csIGl3LCBzdykgOiBzdztcbiAgICB0aGlzLnNjcm9sbFZpZXdbMV0gPSB1dyA/IGNsYW1wKHNoLCBpaCwgc2gpIDogc2g7XG4gICAgdGhpcy51cGRhdGVTY3JvbGxDb29yZHMoKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSB9ID0gJGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLmRyYWdBcmVhWzJdID0gcm91bmQodXcgPyBjbGFtcCh3aWR0aCwgaXcsIGl3KSA6IHdpZHRoLCAwKTtcbiAgICB0aGlzLmRyYWdBcmVhWzNdID0gcm91bmQodXcgPyBjbGFtcChoZWlnaHQsIGloLCBpaCkgOiBoZWlnaHQsIDApO1xuICAgIGNvbnN0IGNvbnRhaW5lck92ZXJmbG93ID0gZ2V0VGFyZ2V0VmFsdWUoJGNvbnRhaW5lciwgJ292ZXJmbG93Jyk7XG4gICAgY29uc3QgdmlzaWJsZU92ZXJmbG93ID0gY29udGFpbmVyT3ZlcmZsb3cgPT09ICd2aXNpYmxlJztcbiAgICBjb25zdCBoaWRkZW5PdmVyZmxvdyA9IGNvbnRhaW5lck92ZXJmbG93ID09PSAnaGlkZGVuJztcbiAgICB0aGlzLmNhblNjcm9sbCA9IGZ4ID8gZmFsc2UgOlxuICAgICAgdGhpcy5jb250YWluZWQgJiZcbiAgICAgICgoJGNvbnRhaW5lciA9PT0gZG9jLmJvZHkgJiYgdmlzaWJsZU92ZXJmbG93KSB8fCAoIWhpZGRlbk92ZXJmbG93ICYmICF2aXNpYmxlT3ZlcmZsb3cpKSAmJlxuICAgICAgKHN3ID4gdGhpcy5kcmFnQXJlYVsyXSArIGNwbCAtIGNwciB8fCBzaCA+IHRoaXMuZHJhZ0FyZWFbM10gKyBjcHQgLSBjcGIpICYmXG4gICAgICAoIXRoaXMuY29udGFpbmVyQXJyYXkgfHwgKHRoaXMuY29udGFpbmVyQXJyYXkgJiYgIWlzQXJyKHRoaXMuY29udGFpbmVyQXJyYXkpKSk7XG4gICAgaWYgKHRoaXMuY29udGFpbmVkKSB7XG4gICAgICBjb25zdCBzeCA9IHRoaXMuc2Nyb2xsLng7XG4gICAgICBjb25zdCBzeSA9IHRoaXMuc2Nyb2xsLnk7XG4gICAgICBjb25zdCBjYW5TY3JvbGwgPSB0aGlzLmNhblNjcm9sbDtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLiR0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBoaWRkZW5MZWZ0ID0gY2FuU2Nyb2xsID8gdXcgPyAwIDogJGNvbnRhaW5lci5zY3JvbGxMZWZ0IDogMDtcbiAgICAgIGNvbnN0IGhpZGRlblRvcCA9IGNhblNjcm9sbCA/IHV3ID8gMCA6ICRjb250YWluZXIuc2Nyb2xsVG9wIDogMDtcbiAgICAgIGNvbnN0IGhpZGRlblJpZ2h0ID0gY2FuU2Nyb2xsID8gdGhpcy5zY3JvbGxWaWV3WzBdIC0gaGlkZGVuTGVmdCAtIHdpZHRoIDogMDtcbiAgICAgIGNvbnN0IGhpZGRlbkJvdHRvbSA9IGNhblNjcm9sbCA/IHRoaXMuc2Nyb2xsVmlld1sxXSAtIGhpZGRlblRvcCAtIGhlaWdodCA6IDA7XG4gICAgICB0aGlzLnRhcmdldEJvdW5kc1swXSA9IHJvdW5kKCh0YXJnZXRSZWN0LnRvcCArIHN5KSAtICh1dyA/IDAgOiB0b3ApLCAwKTtcbiAgICAgIHRoaXMudGFyZ2V0Qm91bmRzWzFdID0gcm91bmQoKHRhcmdldFJlY3QucmlnaHQgKyBzeCkgLSAodXcgPyBpdyA6IHJpZ2h0KSwgMCk7XG4gICAgICB0aGlzLnRhcmdldEJvdW5kc1syXSA9IHJvdW5kKCh0YXJnZXRSZWN0LmJvdHRvbSArIHN5KSAtICh1dyA/IGloIDogYm90dG9tKSwgMCk7XG4gICAgICB0aGlzLnRhcmdldEJvdW5kc1szXSA9IHJvdW5kKCh0YXJnZXRSZWN0LmxlZnQgKyBzeCkgLSAodXcgPyAwIDogbGVmdCksIDApO1xuICAgICAgaWYgKHRoaXMuY29udGFpbmVyQXJyYXkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbMF0gPSB0aGlzLmNvbnRhaW5lckFycmF5WzBdICsgY3B0O1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1sxXSA9IHRoaXMuY29udGFpbmVyQXJyYXlbMV0gLSBjcHI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzJdID0gdGhpcy5jb250YWluZXJBcnJheVsyXSAtIGNwYjtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbM10gPSB0aGlzLmNvbnRhaW5lckFycmF5WzNdICsgY3BsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbMF0gPSAtcm91bmQodGFyZ2V0UmVjdC50b3AgLSAoZnggPyBjbGFtcCh0b3AsIDAsIGloKSA6IHRvcCkgKyBoaWRkZW5Ub3AgLSBjcHQsIDApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1sxXSA9IC1yb3VuZCh0YXJnZXRSZWN0LnJpZ2h0IC0gKGZ4ID8gY2xhbXAocmlnaHQsIDAsIGl3KSA6IHJpZ2h0KSAtIGhpZGRlblJpZ2h0ICsgY3ByLCAwKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbMl0gPSAtcm91bmQodGFyZ2V0UmVjdC5ib3R0b20gLSAoZnggPyBjbGFtcChib3R0b20sIDAsIGloKSA6IGJvdHRvbSkgLSBoaWRkZW5Cb3R0b20gKyBjcGIsIDApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1szXSA9IC1yb3VuZCh0YXJnZXRSZWN0LmxlZnQgLSAoZnggPyBjbGFtcChsZWZ0LCAwLCBpdykgOiBsZWZ0KSArIGhpZGRlbkxlZnQgLSBjcGwsIDApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRyYW5zZm9ybXMucmV2ZXJ0KCk7XG4gICAgLy8gUmVzdG9yZSBjb29yZGluYXRlc1xuICAgIHRoaXMuY29vcmRzWzJdID0gY3gyO1xuICAgIHRoaXMuY29vcmRzWzNdID0gY3kyO1xuICAgIHRoaXMuc2V0WChjeCwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRZKGN5LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIDAgaWYgbm90IE9CLCAxIGlmIHggaXMgT0IsIDIgaWYgeSBpcyBPQiwgMyBpZiBib3RoIHggYW5kIHkgYXJlIE9CXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBib3VuZHNcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4XG4gICAqIEBwYXJhbSAge051bWJlcn0geVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBpc091dE9mQm91bmRzKGJvdW5kcywgeCwgeSkge1xuICAgIGlmICghdGhpcy5jb250YWluZWQpIHJldHVybiAwO1xuICAgIGNvbnN0IFsgYnQsIGJyLCBiYiwgYmwgXSA9IGJvdW5kcztcbiAgICBjb25zdCBbIGR4LCBkeSBdID0gdGhpcy5kaXNhYmxlZDtcbiAgICBjb25zdCBvYnggPSAhZHggJiYgeCA8IGJsIHx8ICFkeCAmJiB4ID4gYnI7XG4gICAgY29uc3Qgb2J5ID0gIWR5ICYmIHkgPCBidCB8fCAhZHkgJiYgeSA+IGJiO1xuICAgIHJldHVybiBvYnggJiYgIW9ieSA/IDEgOiAhb2J4ICYmIG9ieSA/IDIgOiBvYnggJiYgb2J5ID8gMyA6IDA7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMucGFyYW1ldGVycztcbiAgICBjb25zdCBwYXJhbVggPSBwYXJhbXMueDtcbiAgICBjb25zdCBwYXJhbVkgPSBwYXJhbXMueTtcbiAgICBjb25zdCBjb250YWluZXIgPSBwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5jb250YWluZXIsIHRoaXMpO1xuICAgIGNvbnN0IGNwID0gcGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuY29udGFpbmVyUGFkZGluZywgdGhpcykgfHwgMDtcbiAgICBjb25zdCBjb250YWluZXJQYWRkaW5nID0gLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi8oaXNBcnIoY3ApID8gY3AgOiBbY3AsIGNwLCBjcCwgY3BdKTtcbiAgICBjb25zdCBjeCA9IHRoaXMueDtcbiAgICBjb25zdCBjeSA9IHRoaXMueTtcbiAgICBjb25zdCBwYXJzZWRDdXJzb3JTdHlsZXMgPSBwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5jdXJzb3IsIHRoaXMpO1xuICAgIGNvbnN0IGN1cnNvclN0eWxlcyA9IHsgb25Ib3ZlcjogJ2dyYWInLCBvbkdyYWI6ICdncmFiYmluZycgfTtcbiAgICBpZiAocGFyc2VkQ3Vyc29yU3R5bGVzKSB7XG4gICAgICBjb25zdCB7IG9uSG92ZXIsIG9uR3JhYiB9ID0gLyoqIEB0eXBlIHtEcmFnZ2FibGVDdXJzb3JQYXJhbXN9ICovKHBhcnNlZEN1cnNvclN0eWxlcyk7XG4gICAgICBpZiAob25Ib3ZlcikgY3Vyc29yU3R5bGVzLm9uSG92ZXIgPSBvbkhvdmVyO1xuICAgICAgaWYgKG9uR3JhYikgY3Vyc29yU3R5bGVzLm9uR3JhYiA9IG9uR3JhYjtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXJBcnJheSA9IGlzQXJyKGNvbnRhaW5lcikgPyBjb250YWluZXIgOiBudWxsO1xuICAgIHRoaXMuJGNvbnRhaW5lciA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKGNvbnRhaW5lciAmJiAhdGhpcy5jb250YWluZXJBcnJheSA/IHBhcnNlVGFyZ2V0cygvKiogQHR5cGUge0RPTVRhcmdldH0gKi8oY29udGFpbmVyKSlbMF0gOiBkb2MuYm9keSk7XG4gICAgdGhpcy51c2VXaW4gPSB0aGlzLiRjb250YWluZXIgPT09IGRvYy5ib2R5O1xuICAgIC8qKiBAdHlwZSB7V2luZG93IHwgSFRNTEVsZW1lbnR9ICovXG4gICAgdGhpcy4kc2Nyb2xsQ29udGFpbmVyID0gdGhpcy51c2VXaW4gPyB3aW4gOiB0aGlzLiRjb250YWluZXI7XG4gICAgdGhpcy5pc0ZpbmVQb2ludGVyID0gbWF0Y2hNZWRpYSgnKHBvaW50ZXI6ZmluZSknKS5tYXRjaGVzO1xuICAgIHRoaXMuY29udGFpbmVyUGFkZGluZyA9IHNldFZhbHVlKGNvbnRhaW5lclBhZGRpbmcsIFswLCAwLCAwLCAwXSk7XG4gICAgdGhpcy5jb250YWluZXJGcmljdGlvbiA9IGNsYW1wKHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmNvbnRhaW5lckZyaWN0aW9uLCB0aGlzKSwgLjgpLCAwLCAxKTtcbiAgICB0aGlzLnJlbGVhc2VDb250YWluZXJGcmljdGlvbiA9IGNsYW1wKHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLnJlbGVhc2VDb250YWluZXJGcmljdGlvbiwgdGhpcyksIHRoaXMuY29udGFpbmVyRnJpY3Rpb24pLCAwLCAxKTtcbiAgICB0aGlzLnNuYXBYID0gcGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihpc09iaihwYXJhbVgpICYmICFpc1VuZChwYXJhbVguc25hcCkgPyBwYXJhbVguc25hcCA6IHBhcmFtcy5zbmFwLCB0aGlzKTtcbiAgICB0aGlzLnNuYXBZID0gcGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihpc09iaihwYXJhbVkpICYmICFpc1VuZChwYXJhbVkuc25hcCkgPyBwYXJhbVkuc25hcCA6IHBhcmFtcy5zbmFwLCB0aGlzKTtcbiAgICB0aGlzLnNjcm9sbFNwZWVkID0gc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuc2Nyb2xsU3BlZWQsIHRoaXMpLCAxLjUpO1xuICAgIHRoaXMuc2Nyb2xsVGhyZXNob2xkID0gc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuc2Nyb2xsVGhyZXNob2xkLCB0aGlzKSwgMjApO1xuICAgIHRoaXMuZHJhZ1NwZWVkID0gc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuZHJhZ1NwZWVkLCB0aGlzKSwgMSk7XG4gICAgdGhpcy5taW5WZWxvY2l0eSA9IHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLm1pblZlbG9jaXR5LCB0aGlzKSwgMCk7XG4gICAgdGhpcy5tYXhWZWxvY2l0eSA9IHNldFZhbHVlKHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLm1heFZlbG9jaXR5LCB0aGlzKSwgNTApO1xuICAgIHRoaXMudmVsb2NpdHlNdWx0aXBsaWVyID0gc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMudmVsb2NpdHlNdWx0aXBsaWVyLCB0aGlzKSwgMSk7XG4gICAgdGhpcy5jdXJzb3IgPSBwYXJzZWRDdXJzb3JTdHlsZXMgPT09IGZhbHNlID8gZmFsc2UgOiBjdXJzb3JTdHlsZXM7XG4gICAgdGhpcy51cGRhdGVCb3VuZGluZ1ZhbHVlcygpO1xuXG4gICAgLy8gY29uc3Qgb2IgPSB0aGlzLmlzT3V0T2ZCb3VuZHModGhpcy5jb250YWluZXJCb3VuZHMsIHRoaXMueCwgdGhpcy55KTtcbiAgICAvLyBpZiAob2IgPT09IDEgfHwgb2IgPT09IDMpIHRoaXMucHJvZ3Jlc3NYID0gcHg7XG4gICAgLy8gaWYgKG9iID09PSAyIHx8IG9iID09PSAzKSB0aGlzLnByb2dyZXNzWSA9IHB5O1xuXG4gICAgLy8gaWYgKHRoaXMuaW5pdGlhbGl6ZWQgJiYgdGhpcy5jb250YWluZWQpIHtcbiAgICAvLyAgIGlmICh0aGlzLnByb2dyZXNzWCAhPT0gcHgpIHRoaXMucHJvZ3Jlc3NYID0gcHg7XG4gICAgLy8gICBpZiAodGhpcy5wcm9ncmVzc1kgIT09IHB5KSB0aGlzLnByb2dyZXNzWSA9IHB5O1xuICAgIC8vIH1cblxuICAgIGNvbnN0IFsgYnQsIGJyLCBiYiwgYmwgXSA9IHRoaXMuY29udGFpbmVyQm91bmRzO1xuICAgIHRoaXMuc2V0WChjbGFtcChjeCwgYmwsIGJyKSwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRZKGNsYW1wKGN5LCBidCwgYmIpLCB0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbENvb3JkcygpO1xuICAgIGlmICh0aGlzLmNhblNjcm9sbCkge1xuICAgICAgY29uc3QgWyBjcHQsIGNwciwgY3BiLCBjcGwgXSA9IHRoaXMuY29udGFpbmVyUGFkZGluZztcbiAgICAgIGNvbnN0IFsgc3csIHNoIF0gPSB0aGlzLnNjcm9sbFZpZXc7XG4gICAgICBjb25zdCBkYXcgPSB0aGlzLmRyYWdBcmVhWzJdO1xuICAgICAgY29uc3QgZGFoID0gdGhpcy5kcmFnQXJlYVszXTtcbiAgICAgIGNvbnN0IGNzeCA9IHRoaXMuc2Nyb2xsLng7XG4gICAgICBjb25zdCBjc3kgPSB0aGlzLnNjcm9sbC55O1xuICAgICAgY29uc3QgbnN3ID0gdGhpcy4kY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuICAgICAgY29uc3QgbnNoID0gdGhpcy4kY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgIGNvbnN0IGNzdyA9IHRoaXMudXNlV2luID8gY2xhbXAobnN3LCB0aGlzLndpbmRvd1swXSwgbnN3KSA6IG5zdztcbiAgICAgIGNvbnN0IGNzaCA9IHRoaXMudXNlV2luID8gY2xhbXAobnNoLCB0aGlzLndpbmRvd1sxXSwgbnNoKSA6IG5zaDtcbiAgICAgIGNvbnN0IHN3ZCA9IHN3IC0gY3N3O1xuICAgICAgY29uc3Qgc2hkID0gc2ggLSBjc2g7XG4gICAgICAvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdGhlIHNjcm9sbGFyZWEgZGltZW5zaW9ucyBjaGFuZ2VzIGR1cmluZyBkcmFnXG4gICAgICBpZiAodGhpcy5kcmFnZ2VkICYmIHN3ZCA+IDApIHtcbiAgICAgICAgdGhpcy5jb29yZHNbMF0gLT0gc3dkO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXdbMF0gPSBjc3c7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kcmFnZ2VkICYmIHNoZCA+IDApIHtcbiAgICAgICAgdGhpcy5jb29yZHNbMV0gLT0gc2hkO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXdbMV0gPSBjc2g7XG4gICAgICB9XG4gICAgICAvLyBIYW5kbGUgYXV0b3Njcm9sbCB3aGVuIHRhcmdldCBpcyBhdCB0aGUgZWRnZXMgb2YgdGhlIHNjcm9sbCBib3VuZHNcbiAgICAgIGNvbnN0IHMgPSB0aGlzLnNjcm9sbFNwZWVkICogMTA7XG4gICAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnNjcm9sbFRocmVzaG9sZDtcbiAgICAgIGNvbnN0IFsgeCwgeSBdID0gdGhpcy5jb29yZHM7XG4gICAgICBjb25zdCBbIHN0LCBzciwgc2IsIHNsIF0gPSB0aGlzLnNjcm9sbEJvdW5kcztcbiAgICAgIGNvbnN0IHQgPSByb3VuZChjbGFtcCgoeSAtIHN0ICsgY3B0KSAvIHRocmVzaG9sZCwgLTEsIDApICogcywgMCk7XG4gICAgICBjb25zdCByID0gcm91bmQoY2xhbXAoKHggLSBzciAtIGNwcikgLyB0aHJlc2hvbGQsIDAsIDEpICogcywgMCk7XG4gICAgICBjb25zdCBiID0gcm91bmQoY2xhbXAoKHkgLSBzYiAtIGNwYikgLyB0aHJlc2hvbGQsIDAsIDEpICogcywgMCk7XG4gICAgICBjb25zdCBsID0gcm91bmQoY2xhbXAoKHggLSBzbCArIGNwbCkgLyB0aHJlc2hvbGQsIC0xLCAwKSAqIHMsIDApO1xuICAgICAgaWYgKHQgfHwgYiB8fCBsIHx8IHIpIHtcbiAgICAgICAgY29uc3QgW254LCBueV0gPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICBsZXQgc2Nyb2xsWCA9IGNzeDtcbiAgICAgICAgbGV0IHNjcm9sbFkgPSBjc3k7XG4gICAgICAgIGlmICghbngpIHtcbiAgICAgICAgICBzY3JvbGxYID0gcm91bmQoY2xhbXAoY3N4ICsgKGwgfHwgciksIDAsIHN3IC0gZGF3KSwgMCk7XG4gICAgICAgICAgdGhpcy5jb29yZHNbMF0gLT0gY3N4IC0gc2Nyb2xsWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW55KSB7XG4gICAgICAgICAgc2Nyb2xsWSA9IHJvdW5kKGNsYW1wKGNzeSArICh0IHx8IGIpLCAwLCBzaCAtIGRhaCksIDApO1xuICAgICAgICAgIHRoaXMuY29vcmRzWzFdIC09IGNzeSAtIHNjcm9sbFk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZTogU2FmYXJpIG1vYmlsZSByZXF1aXJlcyB0byB1c2UgZGlmZmVyZW50IHNjcm9sbCBtZXRob2RzIGRlcGVuZGluZyBpZiB1c2luZyB0aGUgd2luZG93IG9yIG5vdFxuICAgICAgICBpZiAodGhpcy51c2VXaW4pIHtcbiAgICAgICAgICB0aGlzLiRzY3JvbGxDb250YWluZXIuc2Nyb2xsQnkoLShjc3ggLSBzY3JvbGxYKSwgLShjc3kgLSBzY3JvbGxZKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFsgY3QsIGNyLCBjYiwgY2wgXSA9IHRoaXMuY29udGFpbmVyQm91bmRzO1xuICAgIGNvbnN0IFsgcHgxLCBweTEsIHB4MiwgcHkyLCBweDMsIHB5MyBdID0gdGhpcy5wb2ludGVyO1xuICAgIHRoaXMuY29vcmRzWzBdICs9IChweDEgLSBweDMpICogdGhpcy5kcmFnU3BlZWQ7XG4gICAgdGhpcy5jb29yZHNbMV0gKz0gKHB5MSAtIHB5MykgKiB0aGlzLmRyYWdTcGVlZDtcbiAgICB0aGlzLnBvaW50ZXJbNF0gPSBweDE7XG4gICAgdGhpcy5wb2ludGVyWzVdID0gcHkxO1xuICAgIGNvbnN0IFsgY3gsIGN5IF0gPSB0aGlzLmNvb3JkcztcbiAgICBjb25zdCBbIHN4LCBzeSBdID0gdGhpcy5zbmFwcGVkO1xuICAgIGNvbnN0IGNmID0gKDEgLSB0aGlzLmNvbnRhaW5lckZyaWN0aW9uKSAqIHRoaXMuZHJhZ1NwZWVkO1xuICAgIHRoaXMuc2V0WChjeCA+IGNyID8gY3IgKyAoY3ggLSBjcikgKiBjZiA6IGN4IDwgY2wgPyBjbCArIChjeCAtIGNsKSAqIGNmIDogY3gsIGZhbHNlKTtcbiAgICB0aGlzLnNldFkoY3kgPiBjYiA/IGNiICsgKGN5IC0gY2IpICogY2YgOiBjeSA8IGN0ID8gY3QgKyAoY3kgLSBjdCkgKiBjZiA6IGN5LCBmYWxzZSk7XG4gICAgdGhpcy5jb21wdXRlVmVsb2NpdHkocHgxIC0gcHgzLCBweTEgLSBweTMpO1xuICAgIHRoaXMuYW5nbGUgPSBhdGFuMihweTEgLSBweTIsIHB4MSAtIHB4Mik7XG4gICAgY29uc3QgWyBuc3gsIG5zeSBdID0gdGhpcy5zbmFwcGVkO1xuICAgIGlmIChuc3ggIT09IHN4ICYmIHRoaXMuc25hcFggfHwgbnN5ICE9PSBzeSAmJiB0aGlzLnNuYXBZKSB7XG4gICAgICB0aGlzLm9uU25hcCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudXBkYXRlVGlja2VyLnBhdXNlKCk7XG4gICAgdGhpcy5vdmVyc2hvb3RYVGlja2VyLnBhdXNlKCk7XG4gICAgdGhpcy5vdmVyc2hvb3RZVGlja2VyLnBhdXNlKCk7XG4gICAgLy8gUGF1c2VzIHRoZSBpbiBib3VuZHMgb25SZWxlYXNlIGFuaW1hdGlvbnNcbiAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuYW5pbWF0ZS5hbmltYXRpb25zKSB0aGlzLmFuaW1hdGUuYW5pbWF0aW9uc1twcm9wXS5wYXVzZSgpO1xuICAgIHJlbW92ZSh0aGlzLCBudWxsLCAneCcpO1xuICAgIHJlbW92ZSh0aGlzLCBudWxsLCAneScpO1xuICAgIHJlbW92ZSh0aGlzLCBudWxsLCAncHJvZ3Jlc3NYJyk7XG4gICAgcmVtb3ZlKHRoaXMsIG51bGwsICdwcm9ncmVzc1knKTtcbiAgICByZW1vdmUodGhpcy5zY3JvbGwpOyAvLyBSZW1vdmVzIGFueSBhY3RpdmUgYW5pbWF0aW9ucyBvbiB0aGUgY29udGFpbmVyIHNjcm9sbFxuICAgIHJlbW92ZSh0aGlzLm92ZXJzaG9vdENvb3Jkcyk7IC8vIFJlbW92ZXMgYWN0aXZlIG92ZXJzaG9vdCBhbmltYXRpb25zXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtkdXJhdGlvbl1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtnYXBdXG4gICAqIEBwYXJhbSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc2Nyb2xsSW5WaWV3KGR1cmF0aW9uLCBnYXAgPSAwLCBlYXNlID0gZWFzZXMuaW5PdXRRdWFkKSB7XG4gICAgdGhpcy51cGRhdGVTY3JvbGxDb29yZHMoKTtcbiAgICBjb25zdCB4ID0gdGhpcy5kZXN0WDtcbiAgICBjb25zdCB5ID0gdGhpcy5kZXN0WTtcbiAgICBjb25zdCBzY3JvbGwgPSB0aGlzLnNjcm9sbDtcbiAgICBjb25zdCBzY3JvbGxCb3VuZHMgPSB0aGlzLnNjcm9sbEJvdW5kcztcbiAgICBjb25zdCBjYW5TY3JvbGwgPSB0aGlzLmNhblNjcm9sbDtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyQXJyYXkgJiYgdGhpcy5pc091dE9mQm91bmRzKHNjcm9sbEJvdW5kcywgeCwgeSkpIHtcbiAgICAgIGNvbnN0IFsgc3QsIHNyLCBzYiwgc2wgXSA9IHNjcm9sbEJvdW5kcztcbiAgICAgIGNvbnN0IHQgPSByb3VuZChjbGFtcCh5IC0gc3QsIC0xZTEyLCAwKSwgMCk7XG4gICAgICBjb25zdCByID0gcm91bmQoY2xhbXAoeCAtIHNyLCAwLCBtYXhWYWx1ZSksIDApO1xuICAgICAgY29uc3QgYiA9IHJvdW5kKGNsYW1wKHkgLSBzYiwgMCwgbWF4VmFsdWUpLCAwKTtcbiAgICAgIGNvbnN0IGwgPSByb3VuZChjbGFtcCh4IC0gc2wsIC0xZTEyLCAwKSwgMCk7XG4gICAgICBuZXcgSlNBbmltYXRpb24oc2Nyb2xsLCB7XG4gICAgICAgIHg6IHJvdW5kKHNjcm9sbC54ICsgKGwgPyBsIC0gZ2FwIDogciA/IHIgKyBnYXAgOiAwKSwgMCksXG4gICAgICAgIHk6IHJvdW5kKHNjcm9sbC55ICsgKHQgPyB0IC0gZ2FwIDogYiA/IGIgKyBnYXAgOiAwKSwgMCksXG4gICAgICAgIGR1cmF0aW9uOiBpc1VuZChkdXJhdGlvbikgPyAzNTAgKiBnbG9iYWxzLnRpbWVTY2FsZSA6IGR1cmF0aW9uLFxuICAgICAgICBlYXNlLFxuICAgICAgICBvblVwZGF0ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FuU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy4kc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKHNjcm9sbC54LCBzY3JvbGwueSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jYW5TY3JvbGwgPSBjYW5TY3JvbGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoYW5kbGVIb3ZlcigpIHtcbiAgICBpZiAodGhpcy5pc0ZpbmVQb2ludGVyICYmIHRoaXMuY3Vyc29yICYmICF0aGlzLmN1cnNvclN0eWxlcykge1xuICAgICAgdGhpcy5jdXJzb3JTdHlsZXMgPSBzZXRUYXJnZXRWYWx1ZXModGhpcy4kdHJpZ2dlciwge1xuICAgICAgICBjdXJzb3I6IC8qKiBAdHlwZSB7RHJhZ2dhYmxlQ3Vyc29yUGFyYW1zfSAqLyh0aGlzLmN1cnNvcikub25Ib3ZlclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gW2R1cmF0aW9uXVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtnYXBdXG4gICAqIEBwYXJhbSAge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIGFuaW1hdGVJblZpZXcoZHVyYXRpb24sIGdhcCA9IDAsIGVhc2UgPSBlYXNlcy5pbk91dFF1YWQpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLnVwZGF0ZUJvdW5kaW5nVmFsdWVzKCk7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBjb25zdCB5ID0gdGhpcy55O1xuICAgIGNvbnN0IFsgY3B0LCBjcHIsIGNwYiwgY3BsIF0gPSB0aGlzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgY29uc3QgYnQgPSB0aGlzLnNjcm9sbC55IC0gdGhpcy50YXJnZXRCb3VuZHNbMF0gKyBjcHQgKyBnYXA7XG4gICAgY29uc3QgYnIgPSB0aGlzLnNjcm9sbC54IC0gdGhpcy50YXJnZXRCb3VuZHNbMV0gLSBjcHIgLSBnYXA7XG4gICAgY29uc3QgYmIgPSB0aGlzLnNjcm9sbC55IC0gdGhpcy50YXJnZXRCb3VuZHNbMl0gLSBjcGIgLSBnYXA7XG4gICAgY29uc3QgYmwgPSB0aGlzLnNjcm9sbC54IC0gdGhpcy50YXJnZXRCb3VuZHNbM10gKyBjcGwgKyBnYXA7XG4gICAgY29uc3Qgb2IgPSB0aGlzLmlzT3V0T2ZCb3VuZHMoW2J0LCBiciwgYmIsIGJsXSwgeCwgeSk7XG4gICAgaWYgKG9iKSB7XG4gICAgICBjb25zdCBbIGRpc2FibGVkWCwgZGlzYWJsZWRZIF0gPSB0aGlzLmRpc2FibGVkO1xuICAgICAgY29uc3QgZGVzdFggPSBjbGFtcChzbmFwKHgsIHRoaXMuc25hcFgpLCBibCwgYnIpO1xuICAgICAgY29uc3QgZGVzdFkgPSBjbGFtcChzbmFwKHksIHRoaXMuc25hcFkpLCBidCwgYmIpO1xuICAgICAgY29uc3QgZHVyID0gaXNVbmQoZHVyYXRpb24pID8gMzUwICogZ2xvYmFscy50aW1lU2NhbGUgOiBkdXJhdGlvbjtcbiAgICAgIGlmICghZGlzYWJsZWRYICYmIChvYiA9PT0gMSB8fCBvYiA9PT0gMykpIHRoaXMuYW5pbWF0ZVt0aGlzLnhQcm9wXShkZXN0WCwgZHVyLCBlYXNlKTtcbiAgICAgIGlmICghZGlzYWJsZWRZICYmIChvYiA9PT0gMiB8fCBvYiA9PT0gMykpIHRoaXMuYW5pbWF0ZVt0aGlzLnlQcm9wXShkZXN0WSwgZHVyLCBlYXNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGVcbiAgICovXG4gIGhhbmRsZURvd24oZSkge1xuICAgIGNvbnN0ICRlVGFyZ2V0ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oZS50YXJnZXQpO1xuICAgIGlmICh0aGlzLmdyYWJiZWQgfHwgLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAgKi8oJGVUYXJnZXQpLnR5cGUgPT09ICdyYW5nZScpIHJldHVybjtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmdyYWJiZWQgPSB0cnVlO1xuICAgIHRoaXMucmVsZWFzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLnVwZGF0ZUJvdW5kaW5nVmFsdWVzKCk7XG4gICAgY29uc3QgdG91Y2hlcyA9IC8qKiBAdHlwZSB7VG91Y2hFdmVudH0gKi8oZSkuY2hhbmdlZFRvdWNoZXM7XG4gICAgY29uc3QgZXZlbnRYID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0uY2xpZW50WCA6IC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8oZSkuY2xpZW50WDtcbiAgICBjb25zdCBldmVudFkgPSB0b3VjaGVzID8gdG91Y2hlc1swXS5jbGllbnRZIDogLyoqIEB0eXBlIHtNb3VzZUV2ZW50fSAqLyhlKS5jbGllbnRZO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy50cmFuc2Zvcm1zLm5vcm1hbGl6ZVBvaW50KGV2ZW50WCwgZXZlbnRZKTtcbiAgICBjb25zdCBbIGN0LCBjciwgY2IsIGNsIF0gPSB0aGlzLmNvbnRhaW5lckJvdW5kcztcbiAgICBjb25zdCBjZiA9ICgxIC0gdGhpcy5jb250YWluZXJGcmljdGlvbikgKiB0aGlzLmRyYWdTcGVlZDtcbiAgICBjb25zdCBjeCA9IHRoaXMueDtcbiAgICBjb25zdCBjeSA9IHRoaXMueTtcbiAgICB0aGlzLmNvb3Jkc1swXSA9IHRoaXMuY29vcmRzWzJdID0gIWNmID8gY3ggOiBjeCA+IGNyID8gY3IgKyAoY3ggLSBjcikgLyBjZiA6IGN4IDwgY2wgPyBjbCArIChjeCAtIGNsKSAvIGNmIDogY3g7XG4gICAgdGhpcy5jb29yZHNbMV0gPSB0aGlzLmNvb3Jkc1szXSA9ICFjZiA/IGN5IDogY3kgPiBjYiA/IGNiICsgKGN5IC0gY2IpIC8gY2YgOiBjeSA8IGN0ID8gY3QgKyAoY3kgLSBjdCkgLyBjZiA6IGN5O1xuICAgIHRoaXMucG9pbnRlclswXSA9IHg7XG4gICAgdGhpcy5wb2ludGVyWzFdID0geTtcbiAgICB0aGlzLnBvaW50ZXJbMl0gPSB4O1xuICAgIHRoaXMucG9pbnRlclszXSA9IHk7XG4gICAgdGhpcy5wb2ludGVyWzRdID0geDtcbiAgICB0aGlzLnBvaW50ZXJbNV0gPSB5O1xuICAgIHRoaXMucG9pbnRlcls2XSA9IHg7XG4gICAgdGhpcy5wb2ludGVyWzddID0geTtcbiAgICB0aGlzLmRlbHRhWCA9IDA7XG4gICAgdGhpcy5kZWx0YVkgPSAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja1swXSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrWzFdID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMl0gPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja0luZGV4ID0gMDtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICBpZiAodGhpcy50YXJnZXRTdHlsZXMpIHtcbiAgICAgIHRoaXMudGFyZ2V0U3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy50YXJnZXRTdHlsZXMgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCB6ID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKGdldFRhcmdldFZhbHVlKHRoaXMuJHRhcmdldCwgJ3pJbmRleCcsIGZhbHNlKSk7XG4gICAgekluZGV4ID0gKHogPiB6SW5kZXggPyB6IDogekluZGV4KSArIDE7XG4gICAgdGhpcy50YXJnZXRTdHlsZXMgPSBzZXRUYXJnZXRWYWx1ZXModGhpcy4kdGFyZ2V0LCB7IHpJbmRleCB9KTtcbiAgICBpZiAodGhpcy50cmlnZ2VyU3R5bGVzKSB7XG4gICAgICB0aGlzLnRyaWdnZXJTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLnRyaWdnZXJTdHlsZXMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJzb3JTdHlsZXMpIHtcbiAgICAgIHRoaXMuY3Vyc29yU3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy5jdXJzb3JTdHlsZXMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZpbmVQb2ludGVyICYmIHRoaXMuY3Vyc29yKSB7XG4gICAgICB0aGlzLmJvZHlTdHlsZXMgPSBzZXRUYXJnZXRWYWx1ZXMoZG9jLmJvZHksIHtcbiAgICAgICAgY3Vyc29yOiAvKiogQHR5cGUge0RyYWdnYWJsZUN1cnNvclBhcmFtc30gKi8odGhpcy5jdXJzb3IpLm9uR3JhYlxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsSW5WaWV3KDEwMCwgMCwgZWFzZXMub3V0KDMpKTtcbiAgICB0aGlzLm9uR3JhYih0aGlzKTtcblxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR8VG91Y2hFdmVudH0gZVxuICAgKi9cbiAgaGFuZGxlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLmdyYWJiZWQpIHJldHVybjtcbiAgICBjb25zdCB0b3VjaGVzID0gLyoqIEB0eXBlIHtUb3VjaEV2ZW50fSAqLyhlKS5jaGFuZ2VkVG91Y2hlcztcbiAgICBjb25zdCBldmVudFggPSB0b3VjaGVzID8gdG91Y2hlc1swXS5jbGllbnRYIDogLyoqIEB0eXBlIHtNb3VzZUV2ZW50fSAqLyhlKS5jbGllbnRYO1xuICAgIGNvbnN0IGV2ZW50WSA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdLmNsaWVudFkgOiAvKiogQHR5cGUge01vdXNlRXZlbnR9ICovKGUpLmNsaWVudFk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnRyYW5zZm9ybXMubm9ybWFsaXplUG9pbnQoZXZlbnRYLCBldmVudFkpO1xuICAgIGNvbnN0IG1vdmVkWCA9IHggLSB0aGlzLnBvaW50ZXJbNl07XG4gICAgY29uc3QgbW92ZWRZID0geSAtIHRoaXMucG9pbnRlcls3XTtcblxuICAgIGxldCAkcGFyZW50ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oZS50YXJnZXQpO1xuICAgIGxldCBpc0F0VG9wID0gZmFsc2U7XG4gICAgbGV0IGlzQXRCb3R0b20gPSBmYWxzZTtcbiAgICBsZXQgY2FuVG91Y2hTY3JvbGwgPSBmYWxzZTtcblxuICAgIHdoaWxlICh0b3VjaGVzICYmICRwYXJlbnQgJiYgJHBhcmVudCAhPT0gdGhpcy4kdHJpZ2dlcikge1xuICAgICAgY29uc3Qgb3ZlcmZsb3dZID0gZ2V0VGFyZ2V0VmFsdWUoJHBhcmVudCwgJ292ZXJmbG93LXknKTtcbiAgICAgIGlmIChvdmVyZmxvd1kgIT09ICdoaWRkZW4nICYmIG92ZXJmbG93WSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9ID0gJHBhcmVudDtcbiAgICAgICAgaWYgKHNjcm9sbEhlaWdodCA+IGNsaWVudEhlaWdodCkge1xuICAgICAgICAgIGNhblRvdWNoU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgICBpc0F0VG9wID0gc2Nyb2xsVG9wIDw9IDM7XG4gICAgICAgICAgaXNBdEJvdHRvbSA9IHNjcm9sbFRvcCA+PSAoc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0KSAtIDM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRwYXJlbnQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLygkcGFyZW50LnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIGlmIChjYW5Ub3VjaFNjcm9sbCAmJiAoKCFpc0F0VG9wICYmICFpc0F0Qm90dG9tKSB8fCAoaXNBdFRvcCAmJiBtb3ZlZFkgPCAwKSB8fCAoaXNBdEJvdHRvbSAmJiBtb3ZlZFkgPiAwKSkpIHtcblxuICAgICAgdGhpcy5wb2ludGVyWzBdID0geDtcbiAgICAgIHRoaXMucG9pbnRlclsxXSA9IHk7XG4gICAgICB0aGlzLnBvaW50ZXJbMl0gPSB4O1xuICAgICAgdGhpcy5wb2ludGVyWzNdID0geTtcbiAgICAgIHRoaXMucG9pbnRlcls0XSA9IHg7XG4gICAgICB0aGlzLnBvaW50ZXJbNV0gPSB5O1xuICAgICAgdGhpcy5wb2ludGVyWzZdID0geDtcbiAgICAgIHRoaXMucG9pbnRlcls3XSA9IHk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBwcmV2ZW50RGVmYXVsdChlKTtcblxuICAgICAgLy8gTmVlZGVkIHRvIHByZXZlbnRzIGNsaWNrIG9uIGhhbmRsZVVwXG4gICAgICBpZiAoIXRoaXMudHJpZ2dlclN0eWxlcykgdGhpcy50cmlnZ2VyU3R5bGVzID0gc2V0VGFyZ2V0VmFsdWVzKHRoaXMuJHRyaWdnZXIsIHsgcG9pbnRlckV2ZW50czogJ25vbmUnIH0pO1xuICAgICAgLy8gTmVlZGVkIHRvIHByZXZlbnQgcGFnZSBzY3JvbGwgd2hpbGUgZHJhZ2dpbmcgb24gdG91Y2ggZGV2dmljZVxuICAgICAgdGhpcy4kdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICB0aGlzLiR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgdGhpcy4kdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHByZXZlbnREZWZhdWx0KTtcblxuXG4gICAgICBpZiAoKCF0aGlzLmRpc2FibGVkWzBdICYmIGFicyhtb3ZlZFgpID4gMykgfHwgKCF0aGlzLmRpc2FibGVkWzFdICYmIGFicyhtb3ZlZFkpID4gMykpIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRpY2tlci5yZXN1bWUoKTtcbiAgICAgICAgdGhpcy5wb2ludGVyWzJdID0gdGhpcy5wb2ludGVyWzBdO1xuICAgICAgICB0aGlzLnBvaW50ZXJbM10gPSB0aGlzLnBvaW50ZXJbMV07XG4gICAgICAgIHRoaXMucG9pbnRlclswXSA9IHg7XG4gICAgICAgIHRoaXMucG9pbnRlclsxXSA9IHk7XG4gICAgICAgIHRoaXMuZHJhZ2dlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVsZWFzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkRyYWcodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVXAoKSB7XG5cbiAgICBpZiAoIXRoaXMuZ3JhYmJlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy51cGRhdGVUaWNrZXIucGF1c2UoKTtcblxuICAgIGlmICh0aGlzLnRyaWdnZXJTdHlsZXMpIHtcbiAgICAgIHRoaXMudHJpZ2dlclN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMudHJpZ2dlclN0eWxlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm9keVN0eWxlcykge1xuICAgICAgdGhpcy5ib2R5U3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy5ib2R5U3R5bGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBbIGRpc2FibGVkWCwgZGlzYWJsZWRZIF0gPSB0aGlzLmRpc2FibGVkO1xuICAgIGNvbnN0IFsgcHgxLCBweTEsIHB4MiwgcHkyLCBweDMsIHB5MyBdID0gdGhpcy5wb2ludGVyO1xuICAgIGNvbnN0IFsgY3QsIGNyLCBjYiwgY2wgXSA9IHRoaXMuY29udGFpbmVyQm91bmRzO1xuICAgIGNvbnN0IFsgc3gsIHN5IF0gPSB0aGlzLnNuYXBwZWQ7XG4gICAgY29uc3Qgc3ByaW5nWCA9IHRoaXMucmVsZWFzZVhTcHJpbmc7XG4gICAgY29uc3Qgc3ByaW5nWSA9IHRoaXMucmVsZWFzZVlTcHJpbmc7XG4gICAgY29uc3QgcmVsZWFzZUVhc2UgPSB0aGlzLnJlbGVhc2VFYXNlO1xuICAgIGNvbnN0IGhhc1JlbGVhc2VTcHJpbmcgPSB0aGlzLmhhc1JlbGVhc2VTcHJpbmc7XG4gICAgY29uc3Qgb3ZlcnNob290Q29vcmRzID0gdGhpcy5vdmVyc2hvb3RDb29yZHM7XG4gICAgY29uc3QgY3ggPSB0aGlzLng7XG4gICAgY29uc3QgY3kgPSB0aGlzLnk7XG4gICAgY29uc3QgcHYgPSB0aGlzLmNvbXB1dGVWZWxvY2l0eShweDEgLSBweDMsIHB5MSAtIHB5Myk7XG4gICAgY29uc3QgcGEgPSB0aGlzLmFuZ2xlID0gYXRhbjIocHkxIC0gcHkyLCBweDEgLSBweDIpO1xuICAgIGNvbnN0IGRzID0gcHYgKiAxNTA7XG4gICAgY29uc3QgY2YgPSAoMSAtIHRoaXMucmVsZWFzZUNvbnRhaW5lckZyaWN0aW9uKSAqIHRoaXMuZHJhZ1NwZWVkO1xuICAgIGNvbnN0IG54ID0gY3ggKyAoY29zKHBhKSAqIGRzKTtcbiAgICBjb25zdCBueSA9IGN5ICsgKHNpbihwYSkgKiBkcyk7XG4gICAgY29uc3QgYnggPSBueCA+IGNyID8gY3IgKyAobnggLSBjcikgKiBjZiA6IG54IDwgY2wgPyBjbCArIChueCAtIGNsKSAqIGNmIDogbng7XG4gICAgY29uc3QgYnkgPSBueSA+IGNiID8gY2IgKyAobnkgLSBjYikgKiBjZiA6IG55IDwgY3QgPyBjdCArIChueSAtIGN0KSAqIGNmIDogbnk7XG4gICAgY29uc3QgZHggPSB0aGlzLmRlc3RYID0gY2xhbXAocm91bmQoc25hcChieCwgdGhpcy5zbmFwWCksIDUpLCBjbCwgY3IpO1xuICAgIGNvbnN0IGR5ID0gdGhpcy5kZXN0WSA9IGNsYW1wKHJvdW5kKHNuYXAoYnksIHRoaXMuc25hcFkpLCA1KSwgY3QsIGNiKTtcbiAgICBjb25zdCBvYiA9IHRoaXMuaXNPdXRPZkJvdW5kcyh0aGlzLmNvbnRhaW5lckJvdW5kcywgbngsIG55KTtcblxuICAgIGxldCBkdXJhdGlvblggPSAwO1xuICAgIGxldCBkdXJhdGlvblkgPSAwO1xuICAgIGxldCBlYXNlWCA9IHJlbGVhc2VFYXNlO1xuICAgIGxldCBlYXNlWSA9IHJlbGVhc2VFYXNlO1xuICAgIGxldCBsb25nZXN0UmVsZWFzZUR1cmF0aW9uID0gMDtcblxuICAgIG92ZXJzaG9vdENvb3Jkcy54ID0gY3g7XG4gICAgb3ZlcnNob290Q29vcmRzLnkgPSBjeTtcblxuICAgIGlmICghZGlzYWJsZWRYKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb25YID0gZHggPT09IGNyID8gY3ggPiBjciA/IC0xIDogMSA6IGN4IDwgY2wgPyAtMSA6IDE7XG4gICAgICBjb25zdCBkaXN0YW5jZVggPSByb3VuZChjeCAtIGR4LCAwKTtcbiAgICAgIHNwcmluZ1gudmVsb2NpdHkgPSBkaXNhYmxlZFkgJiYgaGFzUmVsZWFzZVNwcmluZyA/IGRpc3RhbmNlWCA/IChkcyAqIGRpcmVjdGlvblgpIC8gYWJzKGRpc3RhbmNlWCkgOiAwIDogcHY7XG4gICAgICBjb25zdCB7IGVhc2UsIGR1cmF0aW9uLCByZXN0RHVyYXRpb24gfSA9IHNwcmluZ1g7XG4gICAgICBkdXJhdGlvblggPSBjeCA9PT0gZHggPyAwIDogaGFzUmVsZWFzZVNwcmluZyA/IGR1cmF0aW9uIDogZHVyYXRpb24gLSAocmVzdER1cmF0aW9uICogZ2xvYmFscy50aW1lU2NhbGUpO1xuICAgICAgaWYgKGhhc1JlbGVhc2VTcHJpbmcpIGVhc2VYID0gZWFzZTtcbiAgICAgIGlmIChkdXJhdGlvblggPiBsb25nZXN0UmVsZWFzZUR1cmF0aW9uKSBsb25nZXN0UmVsZWFzZUR1cmF0aW9uID0gZHVyYXRpb25YO1xuICAgIH1cblxuICAgIGlmICghZGlzYWJsZWRZKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb25ZID0gZHkgPT09IGNiID8gY3kgPiBjYiA/IC0xIDogMSA6IGN5IDwgY3QgPyAtMSA6IDE7XG4gICAgICBjb25zdCBkaXN0YW5jZVkgPSByb3VuZChjeSAtIGR5LCAwKTtcbiAgICAgIHNwcmluZ1kudmVsb2NpdHkgPSBkaXNhYmxlZFggJiYgaGFzUmVsZWFzZVNwcmluZyA/IGRpc3RhbmNlWSA/IChkcyAqIGRpcmVjdGlvblkpIC8gYWJzKGRpc3RhbmNlWSkgOiAwIDogcHY7XG4gICAgICBjb25zdCB7IGVhc2UsIGR1cmF0aW9uLCByZXN0RHVyYXRpb24gfSA9IHNwcmluZ1k7XG4gICAgICBkdXJhdGlvblkgPSBjeSA9PT0gZHkgPyAwIDogaGFzUmVsZWFzZVNwcmluZyA/IGR1cmF0aW9uIDogZHVyYXRpb24gLSAocmVzdER1cmF0aW9uICogZ2xvYmFscy50aW1lU2NhbGUpO1xuICAgICAgaWYgKGhhc1JlbGVhc2VTcHJpbmcpIGVhc2VZID0gZWFzZTtcbiAgICAgIGlmIChkdXJhdGlvblkgPiBsb25nZXN0UmVsZWFzZUR1cmF0aW9uKSBsb25nZXN0UmVsZWFzZUR1cmF0aW9uID0gZHVyYXRpb25ZO1xuICAgIH1cblxuICAgIGlmICghaGFzUmVsZWFzZVNwcmluZyAmJiBvYiAmJiBjZiAmJiAoZHVyYXRpb25YIHx8IGR1cmF0aW9uWSkpIHtcblxuICAgICAgICBjb25zdCBjb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uVHlwZXMuYmxlbmQ7XG5cbiAgICAgICAgbmV3IEpTQW5pbWF0aW9uKG92ZXJzaG9vdENvb3Jkcywge1xuICAgICAgICAgIHg6IHsgdG86IGJ4LCBkdXJhdGlvbjogZHVyYXRpb25YICogLjY1IH0sXG4gICAgICAgICAgeTogeyB0bzogYnksIGR1cmF0aW9uOiBkdXJhdGlvblkgKiAuNjUgfSxcbiAgICAgICAgICBlYXNlOiByZWxlYXNlRWFzZSxcbiAgICAgICAgICBjb21wb3NpdGlvbixcbiAgICAgICAgfSkuaW5pdCgpO1xuXG4gICAgICAgIG5ldyBKU0FuaW1hdGlvbihvdmVyc2hvb3RDb29yZHMsIHtcbiAgICAgICAgICB4OiB7IHRvOiBkeCwgZHVyYXRpb246IGR1cmF0aW9uWCB9LFxuICAgICAgICAgIHk6IHsgdG86IGR5LCBkdXJhdGlvbjogZHVyYXRpb25ZIH0sXG4gICAgICAgICAgZWFzZTogcmVsZWFzZUVhc2UsXG4gICAgICAgICAgY29tcG9zaXRpb24sXG4gICAgICAgIH0pLmluaXQoKTtcblxuICAgICAgICB0aGlzLm92ZXJzaG9vdFhUaWNrZXIuc3RyZXRjaChkdXJhdGlvblgpLnJlc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vdmVyc2hvb3RZVGlja2VyLnN0cmV0Y2goZHVyYXRpb25ZKS5yZXN0YXJ0KCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAoIWRpc2FibGVkWCkgdGhpcy5hbmltYXRlW3RoaXMueFByb3BdKGR4LCBkdXJhdGlvblgsIGVhc2VYKTtcbiAgICAgIGlmICghZGlzYWJsZWRZKSB0aGlzLmFuaW1hdGVbdGhpcy55UHJvcF0oZHksIGR1cmF0aW9uWSwgZWFzZVkpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxJblZpZXcobG9uZ2VzdFJlbGVhc2VEdXJhdGlvbiwgdGhpcy5zY3JvbGxUaHJlc2hvbGQsIHJlbGVhc2VFYXNlKTtcblxuICAgIGxldCBoYXNTbmFwcGVkID0gZmFsc2U7XG5cbiAgICBpZiAoZHggIT09IHN4KSB7XG4gICAgICB0aGlzLnNuYXBwZWRbMF0gPSBkeDtcbiAgICAgIGlmICh0aGlzLnNuYXBYKSBoYXNTbmFwcGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZHkgIT09IHN5ICYmIHRoaXMuc25hcFkpIHtcbiAgICAgIHRoaXMuc25hcHBlZFsxXSA9IGR5O1xuICAgICAgaWYgKHRoaXMuc25hcFkpIGhhc1NuYXBwZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChoYXNTbmFwcGVkKSB0aGlzLm9uU25hcCh0aGlzKTtcblxuICAgIHRoaXMuZ3JhYmJlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHRydWU7XG5cbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byB0cmlnZ2VyIHRoZSBjYWxsYmFjayBhZnRlciB0aGUgcmVsZWFzZSBhbmltYXRpb25zIHRvIGJlIGFibGUgdG8gY2FuY2VsIHRoZW1cbiAgICB0aGlzLm9uUmVsZWFzZSh0aGlzKTtcblxuICAgIHRoaXMuJHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnREZWZhdWx0KTtcbiAgICB0aGlzLiR0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0KTtcbiAgICB0aGlzLiR0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcHJldmVudERlZmF1bHQpO1xuXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RzdGFydCcsIHRoaXMpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5yZXNpemVUaWNrZXIucGF1c2UoKTtcbiAgICB0aGlzLmdyYWJiZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbGVhc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5TY3JvbGwgPSBmYWxzZTtcbiAgICB0aGlzLnNldFgoMCwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRZKDAsIHRydWUpO1xuICAgIHRoaXMuY29vcmRzWzBdID0gMDtcbiAgICB0aGlzLmNvb3Jkc1sxXSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzBdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbMV0gPSAwO1xuICAgIHRoaXMucG9pbnRlclsyXSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzNdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbNF0gPSAwO1xuICAgIHRoaXMucG9pbnRlcls1XSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzZdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbN10gPSAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja1swXSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrWzFdID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMl0gPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja0luZGV4ID0gMDtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgdGhpcy50b3VjaEFjdGlvblN0eWxlcyA9IHNldFRhcmdldFZhbHVlcyh0aGlzLiR0cmlnZ2VyLCB7XG4gICAgICAgIHRvdWNoQWN0aW9uOiB0aGlzLmRpc2FibGVkWzBdID8gJ3Bhbi14JyA6IHRoaXMuZGlzYWJsZWRbMV0gPyAncGFuLXknIDogJ25vbmUnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuJHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuJHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgdGhpcy4kdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdyYWJiZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbGVhc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5TY3JvbGwgPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoQWN0aW9uU3R5bGVzLnJldmVydCgpO1xuICAgIGlmICh0aGlzLmN1cnNvclN0eWxlcykge1xuICAgICAgdGhpcy5jdXJzb3JTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLmN1cnNvclN0eWxlcyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyaWdnZXJTdHlsZXMpIHtcbiAgICAgIHRoaXMudHJpZ2dlclN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMudHJpZ2dlclN0eWxlcyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvZHlTdHlsZXMpIHtcbiAgICAgIHRoaXMuYm9keVN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMuYm9keVN0eWxlcyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldFN0eWxlcykge1xuICAgICAgdGhpcy50YXJnZXRTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLnRhcmdldFN0eWxlcyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuJHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1kaXNhYmxlZCcpO1xuICAgIHRoaXMuJHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMpO1xuICAgIHRoaXMuJHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgdGhpcy4kdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RzdGFydCcsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV2ZXJ0KCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB0aGlzLiR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGlzYWJsZWQnKTtcbiAgICB0aGlzLnVwZGF0ZVRpY2tlci5yZXZlcnQoKTtcbiAgICB0aGlzLm92ZXJzaG9vdFhUaWNrZXIucmV2ZXJ0KCk7XG4gICAgdGhpcy5vdmVyc2hvb3RZVGlja2VyLnJldmVydCgpO1xuICAgIHRoaXMucmVzaXplVGlja2VyLnJldmVydCgpO1xuICAgIHRoaXMuYW5pbWF0ZS5yZXZlcnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqL1xuICBoYW5kbGVFdmVudChlKSB7XG4gICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgIHRoaXMuaGFuZGxlRG93bigvKiogQHR5cGUge01vdXNlRXZlbnR9ICovKGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3VjaHN0YXJ0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVEb3duKC8qKiBAdHlwZSB7VG91Y2hFdmVudH0gKi8oZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNlbW92ZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZSgvKiogQHR5cGUge01vdXNlRXZlbnR9ICovKGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICB0aGlzLmhhbmRsZU1vdmUoLyoqIEB0eXBlIHtUb3VjaEV2ZW50fSAqLyhlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3VjaGVuZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3VjaGNhbmNlbCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgdGhpcy5oYW5kbGVIb3ZlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdHN0YXJ0JzpcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRcbiAqIEBwYXJhbSB7RHJhZ2dhYmxlUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAqIEByZXR1cm4ge0RyYWdnYWJsZX1cbiAqL1xuY29uc3QgY3JlYXRlRHJhZ2dhYmxlID0gKHRhcmdldCwgcGFyYW1ldGVycykgPT4gbmV3IERyYWdnYWJsZSh0YXJnZXQsIHBhcmFtZXRlcnMpO1xuXG5cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0UmVmXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR8bnVsbH0gW2N1cnJlbnRdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBbmd1bGFyUmVmXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR9IFtuYXRpdmVFbGVtZW50XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2NvcGVQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7RE9NVGFyZ2V0U2VsZWN0b3J8UmVhY3RSZWZ8QW5ndWxhclJlZn0gW3Jvb3RdXG4gKiBAcHJvcGVydHkge0RlZmF1bHRzUGFyYW1zfSBbZGVmYXVsdHNdXG4gKiBAcHJvcGVydHkge1JlY29yZDxTdHJpbmcsIFN0cmluZz59IFttZWRpYVF1ZXJpZXNdXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2NvcGVDbGVhbnVwXG4gKiBAcGFyYW0ge1Njb3BlfSBbc2NvcGVdXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2NvcGVDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTY29wZX0gW3Njb3BlXVxuICogQHJldHVybiB7U2NvcGVDbGVhbnVwfHZvaWR9XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2NvcGVNZXRob2RcbiAqIEBwYXJhbSB7Li4uKn0gYXJnc1xuICogQHJldHVybiB7U2NvcGVDbGVhbnVwfHZvaWR9XG4gKi9cblxuY2xhc3MgU2NvcGUge1xuICAvKiogQHBhcmFtIHtTY29wZVBhcmFtc30gW3BhcmFtZXRlcnNdICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgIGlmIChnbG9iYWxzLnNjb3BlKSBnbG9iYWxzLnNjb3BlLnJldmVydGlibGVzLnB1c2godGhpcyk7XG4gICAgY29uc3Qgcm9vdFBhcmFtID0gcGFyYW1ldGVycy5yb290O1xuICAgIC8qKiBAdHlwZSB7RG9jdW1lbnR8RE9NVGFyZ2V0fSAqL1xuICAgIGxldCByb290ID0gZG9jO1xuICAgIGlmIChyb290UGFyYW0pIHtcbiAgICAgIHJvb3QgPSAvKiogQHR5cGUge1JlYWN0UmVmfSAqLyhyb290UGFyYW0pLmN1cnJlbnQgfHxcbiAgICAgICAgICAgICAvKiogQHR5cGUge0FuZ3VsYXJSZWZ9ICovKHJvb3RQYXJhbSkubmF0aXZlRWxlbWVudCB8fFxuICAgICAgICAgICAgIHBhcnNlVGFyZ2V0cygvKiogQHR5cGUge0RPTVRhcmdldFNlbGVjdG9yfSAqLyhyb290UGFyYW0pKVswXSB8fFxuICAgICAgICAgICAgIGRvYztcbiAgICB9XG4gICAgY29uc3Qgc2NvcGVEZWZhdWx0cyA9IHBhcmFtZXRlcnMuZGVmYXVsdHM7XG4gICAgY29uc3QgZ2xvYmFsRGVmYXVsdCA9IGdsb2JhbHMuZGVmYXVsdHM7XG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gcGFyYW1ldGVycy5tZWRpYVF1ZXJpZXM7XG4gICAgLyoqIEB0eXBlIHtEZWZhdWx0c1BhcmFtc30gKi9cbiAgICB0aGlzLmRlZmF1bHRzID0gc2NvcGVEZWZhdWx0cyA/IG1lcmdlT2JqZWN0cyhzY29wZURlZmF1bHRzLCBnbG9iYWxEZWZhdWx0KSA6IGdsb2JhbERlZmF1bHQ7XG4gICAgLyoqIEB0eXBlIHtEb2N1bWVudHxET01UYXJnZXR9ICovXG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAvKiogQHR5cGUge0FycmF5PFNjb3BlQ29uc3RydWN0b3I+fSAqL1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gW107XG4gICAgLyoqIEB0eXBlIHtBcnJheTxGdW5jdGlvbj59ICovXG4gICAgdGhpcy5yZXZlcnRDb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICAvKiogQHR5cGUge0FycmF5PFJldmVydGlibGU+fSAqL1xuICAgIHRoaXMucmV2ZXJ0aWJsZXMgPSBbXTtcbiAgICAvKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIEZ1bmN0aW9uPn0gKi9cbiAgICB0aGlzLm1ldGhvZHMgPSB7fTtcbiAgICAvKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIEJvb2xlYW4+fSAqL1xuICAgIHRoaXMubWF0Y2hlcyA9IHt9O1xuICAgIC8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgTWVkaWFRdWVyeUxpc3Q+fSAqL1xuICAgIHRoaXMubWVkaWFRdWVyeUxpc3RzID0ge307XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBhbnk+fSAqL1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIGlmIChtZWRpYVF1ZXJpZXMpIHtcbiAgICAgIGZvciAobGV0IG1xIGluIG1lZGlhUXVlcmllcykge1xuICAgICAgICBjb25zdCBfbXEgPSB3aW4ubWF0Y2hNZWRpYShtZWRpYVF1ZXJpZXNbbXFdKTtcbiAgICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdHNbbXFdID0gX21xO1xuICAgICAgICBfbXEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBjYWxsYmFjayBTY29wcGVkQ2FsbGJhY2tcbiAgICogQHBhcmFtIHt0aGlzfSBzY29wZVxuICAgKiBAcmV0dXJuIHthbnl9XG4gICAqXG4gICAqIEBwYXJhbSB7U2NvcHBlZENhbGxiYWNrfSBjYlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgZXhlY3V0ZShjYikge1xuICAgIGxldCBhY3RpdmVTY29wZSA9IGdsb2JhbHMuc2NvcGU7XG4gICAgbGV0IGFjdGl2ZVJvb3QgPSBnbG9iYWxzLnJvb3Q7XG4gICAgbGV0IGFjdGl2ZURlZmF1bHRzID0gZ2xvYmFscy5kZWZhdWx0cztcbiAgICBnbG9iYWxzLnNjb3BlID0gdGhpcztcbiAgICBnbG9iYWxzLnJvb3QgPSB0aGlzLnJvb3Q7XG4gICAgZ2xvYmFscy5kZWZhdWx0cyA9IHRoaXMuZGVmYXVsdHM7XG4gICAgY29uc3QgbXFzID0gdGhpcy5tZWRpYVF1ZXJ5TGlzdHM7XG4gICAgZm9yIChsZXQgbXEgaW4gbXFzKSB0aGlzLm1hdGNoZXNbbXFdID0gbXFzW21xXS5tYXRjaGVzO1xuICAgIGNvbnN0IHJldHVybmVkID0gY2IodGhpcyk7XG4gICAgZ2xvYmFscy5zY29wZSA9IGFjdGl2ZVNjb3BlO1xuICAgIGdsb2JhbHMucm9vdCA9IGFjdGl2ZVJvb3Q7XG4gICAgZ2xvYmFscy5kZWZhdWx0cyA9IGFjdGl2ZURlZmF1bHRzO1xuICAgIHJldHVybiByZXR1cm5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgbGV0IGkgPSB0aGlzLnJldmVydGlibGVzLmxlbmd0aDtcbiAgICAgIGxldCB5ID0gdGhpcy5yZXZlcnRDb25zdHJ1Y3RvcnMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkgdGhpcy5yZXZlcnRpYmxlc1tpXS5yZXZlcnQoKTtcbiAgICAgIHdoaWxlICh5LS0pIHRoaXMucmV2ZXJ0Q29uc3RydWN0b3JzW3ldKHRoaXMpO1xuICAgICAgdGhpcy5yZXZlcnRpYmxlcy5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5yZXZlcnRDb25zdHJ1Y3RvcnMubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLmZvckVhY2goIGNvbnN0cnVjdG9yID0+IHtcbiAgICAgICAgY29uc3QgcmV2ZXJ0Q29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgaWYgKHJldmVydENvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgdGhpcy5yZXZlcnRDb25zdHJ1Y3RvcnMucHVzaChyZXZlcnRDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBjYWxsYmFjayBjb250cnVjdG9yQ2FsbGJhY2tcbiAgICogQHBhcmFtIHt0aGlzfSBzZWxmXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYTFcbiAgICogQHBhcmFtIHtTY29wZU1ldGhvZH0gYTJcbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7Y29udHJ1Y3RvckNhbGxiYWNrfSBhMVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xjb250cnVjdG9yQ2FsbGJhY2t9IGExXG4gICAqIEBwYXJhbSB7U2NvcGVNZXRob2R9IFthMl1cbiAgICovXG4gIGFkZChhMSwgYTIpIHtcbiAgICBpZiAoaXNGbmMoYTEpKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IC8qKiBAdHlwZSB7Y29udHJ1Y3RvckNhbGxiYWNrfSAqLyhhMSk7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldmVydENvbnN0cnVjdG9yID0gY29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIGlmIChyZXZlcnRDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgIHRoaXMucmV2ZXJ0Q29uc3RydWN0b3JzLnB1c2gocmV2ZXJ0Q29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRob2RzWy8qKiBAdHlwZSB7U3RyaW5nfSAqLyhhMSldID0gKC8qKiBAdHlwZSB7YW55fSAqLy4uLmFyZ3MpID0+IHRoaXMuZXhlY3V0ZSgoKSA9PiBhMiguLi5hcmdzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICovXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgY2FzZSAnY2hhbmdlJzpcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldmVydCgpIHtcbiAgICBjb25zdCByZXZlcnRpYmxlcyA9IHRoaXMucmV2ZXJ0aWJsZXM7XG4gICAgY29uc3QgcmV2ZXJ0Q29uc3RydWN0b3JzID0gdGhpcy5yZXZlcnRDb25zdHJ1Y3RvcnM7XG4gICAgY29uc3QgbXFzID0gdGhpcy5tZWRpYVF1ZXJ5TGlzdHM7XG4gICAgbGV0IGkgPSByZXZlcnRpYmxlcy5sZW5ndGg7XG4gICAgbGV0IHkgPSByZXZlcnRDb25zdHJ1Y3RvcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHJldmVydGlibGVzW2ldLnJldmVydCgpO1xuICAgIHdoaWxlICh5LS0pIHJldmVydENvbnN0cnVjdG9yc1t5XSh0aGlzKTtcbiAgICBmb3IgKGxldCBtcSBpbiBtcXMpIG1xc1ttcV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcyk7XG4gICAgcmV2ZXJ0aWJsZXMubGVuZ3RoID0gMDtcbiAgICByZXZlcnRDb25zdHJ1Y3RvcnMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5sZW5ndGggPSAwO1xuICAgIHRoaXMubWF0Y2hlcyA9IHt9O1xuICAgIHRoaXMubWV0aG9kcyA9IHt9O1xuICAgIHRoaXMubWVkaWFRdWVyeUxpc3RzID0ge307XG4gICAgdGhpcy5kYXRhID0ge307XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1Njb3BlUGFyYW1zfSBbcGFyYW1zXVxuICogQHJldHVybiB7U2NvcGV9XG4gKi9cbmNvbnN0IGNyZWF0ZVNjb3BlID0gcGFyYW1zID0+IG5ldyBTY29wZShwYXJhbXMpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtTdHJpbmd8TnVtYmVyfSBTY3JvbGxUaHJlc2hvbGRWYWx1ZVxuICovXG5cbi8qKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBnZXRNYXhWaWV3SGVpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCAkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoJGVsKTtcbiAgJGVsLnN0eWxlLmhlaWdodCA9ICcxMDBsdmgnO1xuICBjb25zdCBoZWlnaHQgPSAkZWwub2Zmc2V0SGVpZ2h0O1xuICBkb2MuYm9keS5yZW1vdmVDaGlsZCgkZWwpO1xuICByZXR1cm4gaGVpZ2h0O1xufTtcblxuLyoqXG4gKiBAdGVtcGxhdGUge1Njcm9sbFRocmVzaG9sZFZhbHVlfFN0cmluZ3xOdW1iZXJ8Qm9vbGVhbnxGdW5jdGlvbnxPYmplY3R9IFRcbiAqIEBwYXJhbSB7VCB8ICgob2JzZXJ2ZXI6IFNjcm9sbE9ic2VydmVyKSA9PiBUKX0gdmFsdWVcbiAqIEBwYXJhbSB7U2Nyb2xsT2JzZXJ2ZXJ9IHNjcm9sbGVyXG4gKiBAcmV0dXJuIHtUfVxuICovXG5jb25zdCBwYXJzZVNjcm9sbE9ic2VydmVyRnVuY3Rpb25QYXJhbWV0ZXIgPSAodmFsdWUsIHNjcm9sbGVyKSA9PiB2YWx1ZSAmJiBpc0ZuYyh2YWx1ZSkgPyAvKiogQHR5cGUge0Z1bmN0aW9ufSAqLyh2YWx1ZSkoc2Nyb2xsZXIpIDogdmFsdWU7XG5cbmNvbnN0IHNjcm9sbENvbnRhaW5lcnMgPSBuZXcgTWFwKCk7XG5cbmNsYXNzIFNjcm9sbENvbnRhaW5lciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAkZWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgdGhpcy5lbGVtZW50ID0gJGVsO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZVdpbiA9IHRoaXMuZWxlbWVudCA9PT0gZG9jLmJvZHk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy53aW5XaWR0aCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy53aW5IZWlnaHQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMud2lkdGggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmxlZnQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMudG9wID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnpJbmRleCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnNjcm9sbFkgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMucHJldlNjcm9sbFggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMucHJldlNjcm9sbFkgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuc2Nyb2xsV2lkdGggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5iYWNrd2FyZFggPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5iYWNrd2FyZFkgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge1RpbWVyfSAqL1xuICAgIHRoaXMuc2Nyb2xsVGlja2VyID0gbmV3IFRpbWVyKHtcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIG9uQmVnaW46ICgpID0+IHRoaXMuZGF0YVRpbWVyLnJlc3VtZSgpLFxuICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFja3dhcmRzID0gdGhpcy5iYWNrd2FyZFggfHwgdGhpcy5iYWNrd2FyZFk7XG4gICAgICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi9jaGlsZCkgPT4gY2hpbGQuaGFuZGxlU2Nyb2xsKCksIGJhY2t3YXJkcyk7XG4gICAgICB9LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4gdGhpcy5kYXRhVGltZXIucGF1c2UoKVxuICAgIH0pLmluaXQoKTtcbiAgICAvKiogQHR5cGUge1RpbWVyfSAqL1xuICAgIHRoaXMuZGF0YVRpbWVyID0gbmV3IFRpbWVyKHtcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGZyYW1lUmF0ZTogMzAsXG4gICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XG4gICAgICAgIGNvbnN0IGR0ID0gc2VsZi5kZWx0YVRpbWU7XG4gICAgICAgIGNvbnN0IHB4ID0gdGhpcy5wcmV2U2Nyb2xsWDtcbiAgICAgICAgY29uc3QgcHkgPSB0aGlzLnByZXZTY3JvbGxZO1xuICAgICAgICBjb25zdCBueCA9IHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgY29uc3QgbnkgPSB0aGlzLnNjcm9sbFk7XG4gICAgICAgIGNvbnN0IGR4ID0gcHggLSBueDtcbiAgICAgICAgY29uc3QgZHkgPSBweSAtIG55O1xuICAgICAgICB0aGlzLnByZXZTY3JvbGxYID0gbng7XG4gICAgICAgIHRoaXMucHJldlNjcm9sbFkgPSBueTtcbiAgICAgICAgaWYgKGR4KSB0aGlzLmJhY2t3YXJkWCA9IHB4ID4gbng7XG4gICAgICAgIGlmIChkeSkgdGhpcy5iYWNrd2FyZFkgPSBweSA+IG55O1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gcm91bmQoZHQgPiAwID8gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSAvIGR0IDogMCwgNSk7XG4gICAgICB9XG4gICAgfSkuaW5pdCgpO1xuICAgIC8qKiBAdHlwZSB7VGltZXJ9ICovXG4gICAgdGhpcy5yZXNpemVUaWNrZXIgPSBuZXcgVGltZXIoe1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDI1MCAqIGdsb2JhbHMudGltZVNjYWxlLFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd0JvdW5kcygpO1xuICAgICAgICB0aGlzLnJlZnJlc2hTY3JvbGxPYnNlcnZlcnMoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9KS5pbml0KCk7XG4gICAgLyoqIEB0eXBlIHtUaW1lcn0gKi9cbiAgICB0aGlzLndha2VUaWNrZXIgPSBuZXcgVGltZXIoe1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDUwMCAqIGdsb2JhbHMudGltZVNjYWxlLFxuICAgICAgb25CZWdpbjogKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbFRpY2tlci5yZXN1bWUoKTtcbiAgICAgIH0sXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGlja2VyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfSkuaW5pdCgpO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy5faGVhZCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi9cbiAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbENvb3JkcygpO1xuICAgIHRoaXMudXBkYXRlV2luZG93Qm91bmRzKCk7XG4gICAgdGhpcy51cGRhdGVCb3VuZHMoKTtcbiAgICB0aGlzLnJlZnJlc2hTY3JvbGxPYnNlcnZlcnMoKTtcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gdGhpcy5yZXNpemVUaWNrZXIucmVzdGFydCgpKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50KTtcbiAgICAodGhpcy51c2VXaW4gPyB3aW4gOiB0aGlzLmVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMsIGZhbHNlKTtcbiAgfVxuXG4gIHVwZGF0ZVNjcm9sbENvb3JkcygpIHtcbiAgICBjb25zdCB1c2VXaW4gPSB0aGlzLnVzZVdpbjtcbiAgICBjb25zdCAkZWwgPSB0aGlzLmVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxYID0gcm91bmQodXNlV2luID8gd2luLnNjcm9sbFggOiAkZWwuc2Nyb2xsTGVmdCwgMCk7XG4gICAgdGhpcy5zY3JvbGxZID0gcm91bmQodXNlV2luID8gd2luLnNjcm9sbFkgOiAkZWwuc2Nyb2xsVG9wLCAwKTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0JvdW5kcygpIHtcbiAgICB0aGlzLndpbldpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgdGhpcy53aW5IZWlnaHQgPSBnZXRNYXhWaWV3SGVpZ2h0KCk7XG4gIH1cblxuICB1cGRhdGVCb3VuZHMoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3QgJGVsID0gdGhpcy5lbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsV2lkdGggPSAkZWwuc2Nyb2xsV2lkdGggKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkxlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5SaWdodCk7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSAkZWwuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgIHRoaXMudXBkYXRlV2luZG93Qm91bmRzKCk7XG4gICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG4gICAgaWYgKHRoaXMudXNlV2luKSB7XG4gICAgICB3aWR0aCA9IHRoaXMud2luV2lkdGg7XG4gICAgICBoZWlnaHQgPSB0aGlzLndpbkhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWxSZWN0ID0gJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0O1xuICAgICAgdGhpcy50b3AgPSBlbFJlY3QudG9wO1xuICAgICAgdGhpcy5sZWZ0ID0gZWxSZWN0LmxlZnQ7XG4gICAgfVxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIHJlZnJlc2hTY3JvbGxPYnNlcnZlcnMoKSB7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqL2NoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuX2RlYnVnKSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZURlYnVnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVCb3VuZHMoKTtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnJlZnJlc2goKTtcbiAgICAgIGlmIChjaGlsZC5fZGVidWcpIHtcbiAgICAgICAgY2hpbGQuZGVidWcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dCb3VuZHMoKTtcbiAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgIHRoaXMucmVmcmVzaFNjcm9sbE9ic2VydmVycygpO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgdGhpcy51cGRhdGVTY3JvbGxDb29yZHMoKTtcbiAgICB0aGlzLndha2VUaWNrZXIucmVzdGFydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICovXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV2ZXJ0KCkge1xuICAgIHRoaXMuc2Nyb2xsVGlja2VyLmNhbmNlbCgpO1xuICAgIHRoaXMuZGF0YVRpbWVyLmNhbmNlbCgpO1xuICAgIHRoaXMucmVzaXplVGlja2VyLmNhbmNlbCgpO1xuICAgIHRoaXMud2FrZVRpY2tlci5jYW5jZWwoKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmVsZW1lbnQpO1xuICAgICh0aGlzLnVzZVdpbiA/IHdpbiA6IHRoaXMuZWxlbWVudCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcyk7XG4gICAgc2Nyb2xsQ29udGFpbmVycy5kZWxldGUodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRcbiAqIEByZXR1cm4ge1Njcm9sbENvbnRhaW5lcn1cbiAqL1xuY29uc3QgcmVnaXN0ZXJBbmRHZXRTY3JvbGxDb250YWluZXIgPSB0YXJnZXQgPT4ge1xuICBjb25zdCAkZWwgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyh0YXJnZXQgPyBwYXJzZVRhcmdldHModGFyZ2V0KVswXSB8fCBkb2MuYm9keSA6IGRvYy5ib2R5KTtcbiAgbGV0IHNjcm9sbENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lcnMuZ2V0KCRlbCk7XG4gIGlmICghc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgc2Nyb2xsQ29udGFpbmVyID0gbmV3IFNjcm9sbENvbnRhaW5lcigkZWwpO1xuICAgIHNjcm9sbENvbnRhaW5lcnMuc2V0KCRlbCwgc2Nyb2xsQ29udGFpbmVyKTtcbiAgfVxuICByZXR1cm4gc2Nyb2xsQ29udGFpbmVyO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAkZWxcbiAqIEBwYXJhbSB7TnVtYmVyfHN0cmluZ30gdlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdW5kZXJdXG4gKiBAcGFyYW0ge051bWJlcn0gW292ZXJdXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGNvbnZlcnRWYWx1ZVRvUHggPSAoJGVsLCB2LCBzaXplLCB1bmRlciwgb3ZlcikgPT4ge1xuICBjb25zdCBjbGFtcE1pbiA9IHYgPT09ICdtaW4nO1xuICBjb25zdCBjbGFtcE1heCA9IHYgPT09ICdtYXgnO1xuICBjb25zdCB2YWx1ZSA9IHYgPT09ICd0b3AnIHx8IHYgPT09ICdsZWZ0JyB8fCB2ID09PSAnc3RhcnQnIHx8IGNsYW1wTWluID8gMCA6XG4gICAgICAgICAgICAgICAgdiA9PT0gJ2JvdHRvbScgfHwgdiA9PT0gJ3JpZ2h0JyB8fCB2ID09PSAnZW5kJyB8fCBjbGFtcE1heCA/ICcxMDAlJyA6XG4gICAgICAgICAgICAgICAgdiA9PT0gJ2NlbnRlcicgPyAnNTAlJyA6XG4gICAgICAgICAgICAgICAgdjtcbiAgY29uc3QgeyBuLCB1IH0gPSBkZWNvbXBvc2VSYXdWYWx1ZSh2YWx1ZSwgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUpO1xuICBsZXQgcHggPSBuO1xuICBpZiAodSA9PT0gJyUnKSB7XG4gICAgcHggPSAobiAvIDEwMCkgKiBzaXplO1xuICB9IGVsc2UgaWYgKHUpIHtcbiAgICBweCA9IGNvbnZlcnRWYWx1ZVVuaXQoJGVsLCBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZSwgJ3B4JywgdHJ1ZSkubjtcbiAgfVxuICBpZiAoY2xhbXBNYXggJiYgdW5kZXIgPCAwKSBweCArPSB1bmRlcjtcbiAgaWYgKGNsYW1wTWluICYmIG92ZXIgPiAwKSBweCArPSBvdmVyO1xuICByZXR1cm4gcHg7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICRlbFxuICogQHBhcmFtIHtTY3JvbGxUaHJlc2hvbGRWYWx1ZX0gdlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdW5kZXJdXG4gKiBAcGFyYW0ge051bWJlcn0gW292ZXJdXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IHBhcnNlQm91bmRWYWx1ZSA9ICgkZWwsIHYsIHNpemUsIHVuZGVyLCBvdmVyKSA9PiB7XG4gIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICBsZXQgdmFsdWU7XG4gIGlmIChpc1N0cih2KSkge1xuICAgIGNvbnN0IG1hdGNoZWRPcGVyYXRvciA9IHJlbGF0aXZlVmFsdWVzRXhlY1JneC5leGVjKC8qKiBAdHlwZSB7U3RyaW5nfSAqLyh2KSk7XG4gICAgaWYgKG1hdGNoZWRPcGVyYXRvcikge1xuICAgICAgY29uc3Qgc3BsaXR0ZXIgPSBtYXRjaGVkT3BlcmF0b3JbMF07XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHNwbGl0dGVyWzBdO1xuICAgICAgY29uc3Qgc3BsaXR0ZWQgPSAvKiogQHR5cGUge1N0cmluZ30gKi8odikuc3BsaXQoc3BsaXR0ZXIpO1xuICAgICAgY29uc3QgY2xhbXBNaW4gPSBzcGxpdHRlZFswXSA9PT0gJ21pbic7XG4gICAgICBjb25zdCBjbGFtcE1heCA9IHNwbGl0dGVkWzBdID09PSAnbWF4JztcbiAgICAgIGNvbnN0IHZhbHVlQVB4ID0gY29udmVydFZhbHVlVG9QeCgkZWwsIHNwbGl0dGVkWzBdLCBzaXplLCB1bmRlciwgb3Zlcik7XG4gICAgICBjb25zdCB2YWx1ZUJQeCA9IGNvbnZlcnRWYWx1ZVRvUHgoJGVsLCBzcGxpdHRlZFsxXSwgc2l6ZSwgdW5kZXIsIG92ZXIpO1xuICAgICAgaWYgKGNsYW1wTWluKSB7XG4gICAgICAgIGNvbnN0IG1pbiA9IGdldFJlbGF0aXZlVmFsdWUoY29udmVydFZhbHVlVG9QeCgkZWwsICdtaW4nLCBzaXplKSwgdmFsdWVCUHgsIG9wZXJhdG9yKTtcbiAgICAgICAgdmFsdWUgPSBtaW4gPCB2YWx1ZUFQeCA/IHZhbHVlQVB4IDogbWluO1xuICAgICAgfSBlbHNlIGlmIChjbGFtcE1heCkge1xuICAgICAgICBjb25zdCBtYXggPSBnZXRSZWxhdGl2ZVZhbHVlKGNvbnZlcnRWYWx1ZVRvUHgoJGVsLCAnbWF4Jywgc2l6ZSksIHZhbHVlQlB4LCBvcGVyYXRvcik7XG4gICAgICAgIHZhbHVlID0gbWF4ID4gdmFsdWVBUHggPyB2YWx1ZUFQeCA6IG1heDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWx1ZUFQeCwgdmFsdWVCUHgsIG9wZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBjb252ZXJ0VmFsdWVUb1B4KCRlbCwgdiwgc2l6ZSwgdW5kZXIsIG92ZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh2KTtcbiAgfVxuICByZXR1cm4gcm91bmQodmFsdWUsIDApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0pTQW5pbWF0aW9ufSBsaW5rZWRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5jb25zdCBnZXRBbmltYXRpb25Eb21UYXJnZXQgPSBsaW5rZWQgPT4ge1xuICBsZXQgJGxpbmtlZFRhcmdldDtcbiAgY29uc3QgbGlua2VkVGFyZ2V0cyA9IGxpbmtlZC50YXJnZXRzO1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtlZFRhcmdldHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gbGlua2VkVGFyZ2V0c1tpXTtcbiAgICBpZiAodGFyZ2V0W2lzRG9tU3ltYm9sXSkge1xuICAgICAgJGxpbmtlZFRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKHRhcmdldCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICRsaW5rZWRUYXJnZXQ7XG59O1xuXG5sZXQgc2Nyb2xsZXJJbmRleCA9IDA7XG5cbmNvbnN0IGRlYnVnQ29sb3JzID0gWycjRkY0QjRCJywnI0ZGOTcxQicsJyNGRkM3MzAnLCcjRjlGNjQwJywnIzdBRkY1QScsJyMxOEZGNzQnLCcjMTdFMDlCJywnIzNDRkZFQycsJyMwNURCRTknLCcjMzNCM0YxJywnIzYzOENGOScsJyNDNTYzRkUnLCcjRkY0RkNGJywnI0Y5M0Y4QSddO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNjcm9sbFRocmVzaG9sZFBhcmFtXG4gKiBAcHJvcGVydHkge1Njcm9sbFRocmVzaG9sZFZhbHVlfSBbdGFyZ2V0XVxuICogQHByb3BlcnR5IHtTY3JvbGxUaHJlc2hvbGRWYWx1ZX0gW2NvbnRhaW5lcl1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBTY3JvbGxPYnNlcnZlckF4aXNDYWxsYmFja1xuICogQHBhcmFtIHtTY3JvbGxPYnNlcnZlcn0gc2VsZlxuICogQHJldHVybiB7J3gnfCd5J31cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBTY3JvbGxUaHJlc2hvbGRDYWxsYmFja1xuICogQHBhcmFtIHtTY3JvbGxPYnNlcnZlcn0gc2VsZlxuICogQHJldHVybiB7U2Nyb2xsVGhyZXNob2xkVmFsdWV8U2Nyb2xsVGhyZXNob2xkUGFyYW19XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTY3JvbGxPYnNlcnZlclBhcmFtc1xuICogQHByb3BlcnR5IHtOdW1iZXJ8U3RyaW5nfSBbaWRdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58TnVtYmVyfFN0cmluZ3xFYXNpbmdQYXJhbX0gW3N5bmNdXG4gKiBAcHJvcGVydHkge1RhcmdldHNQYXJhbX0gW2NvbnRhaW5lcl1cbiAqIEBwcm9wZXJ0eSB7VGFyZ2V0c1BhcmFtfSBbdGFyZ2V0XVxuICogQHByb3BlcnR5IHsneCd8J3knfFNjcm9sbE9ic2VydmVyQXhpc0NhbGxiYWNrfCgob2JzZXJ2ZXI6IFNjcm9sbE9ic2VydmVyKSA9PiAneCd8J3knfFNjcm9sbE9ic2VydmVyQXhpc0NhbGxiYWNrKX0gW2F4aXNdXG4gKiBAcHJvcGVydHkge1Njcm9sbFRocmVzaG9sZFZhbHVlfFNjcm9sbFRocmVzaG9sZFBhcmFtfFNjcm9sbFRocmVzaG9sZENhbGxiYWNrfCgob2JzZXJ2ZXI6IFNjcm9sbE9ic2VydmVyKSA9PiBTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTY3JvbGxUaHJlc2hvbGRQYXJhbXxTY3JvbGxUaHJlc2hvbGRDYWxsYmFjayl9IFtlbnRlcl1cbiAqIEBwcm9wZXJ0eSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV8U2Nyb2xsVGhyZXNob2xkUGFyYW18U2Nyb2xsVGhyZXNob2xkQ2FsbGJhY2t8KChvYnNlcnZlcjogU2Nyb2xsT2JzZXJ2ZXIpID0+IFNjcm9sbFRocmVzaG9sZFZhbHVlfFNjcm9sbFRocmVzaG9sZFBhcmFtfFNjcm9sbFRocmVzaG9sZENhbGxiYWNrKX0gW2xlYXZlXVxuICogQHByb3BlcnR5IHtCb29sZWFufCgob2JzZXJ2ZXI6IFNjcm9sbE9ic2VydmVyKSA9PiBCb29sZWFuKX0gW3JlcGVhdF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW2RlYnVnXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvbkVudGVyXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvbkxlYXZlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvbkVudGVyRm9yd2FyZF1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25MZWF2ZUZvcndhcmRdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uRW50ZXJCYWNrd2FyZF1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25MZWF2ZUJhY2t3YXJkXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvblVwZGF0ZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25TeW5jQ29tcGxldGVdXG4gKi9cblxuY2xhc3MgU2Nyb2xsT2JzZXJ2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtTY3JvbGxPYnNlcnZlclBhcmFtc30gcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgaWYgKGdsb2JhbHMuc2NvcGUpIGdsb2JhbHMuc2NvcGUucmV2ZXJ0aWJsZXMucHVzaCh0aGlzKTtcbiAgICBjb25zdCBzeW5jTW9kZSA9IHNldFZhbHVlKHBhcmFtZXRlcnMuc3luYywgJ3BsYXkgcGF1c2UnKTtcbiAgICBjb25zdCBlYXNlID0gc3luY01vZGUgPyBwYXJzZUVhc2luZ3MoLyoqIEB0eXBlIHtFYXNpbmdQYXJhbX0gKi8oc3luY01vZGUpKSA6IG51bGw7XG4gICAgY29uc3QgaXNMaW5lYXIgPSBzeW5jTW9kZSAmJiAoc3luY01vZGUgPT09ICdsaW5lYXInIHx8IHN5bmNNb2RlID09PSBub25lKTtcbiAgICBjb25zdCBpc0Vhc2UgPSBzeW5jTW9kZSAmJiAhKGVhc2UgPT09IG5vbmUgJiYgIWlzTGluZWFyKTtcbiAgICBjb25zdCBpc1Ntb290aCA9IHN5bmNNb2RlICYmIChpc051bShzeW5jTW9kZSkgfHwgc3luY01vZGUgPT09IHRydWUgfHwgaXNMaW5lYXIpO1xuICAgIGNvbnN0IGlzTWV0aG9kcyA9IHN5bmNNb2RlICYmIChpc1N0cihzeW5jTW9kZSkgJiYgIWlzRWFzZSAmJiAhaXNTbW9vdGgpO1xuICAgIGNvbnN0IHN5bmNNZXRob2RzID0gaXNNZXRob2RzID8gLyoqIEB0eXBlIHtTdHJpbmd9ICovKHN5bmNNb2RlKS5zcGxpdCgnICcpLm1hcChcbiAgICAgICgvKiogQHR5cGUge1N0cmluZ30gKi9tKSA9PiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmtlZCA9IHRoaXMubGlua2VkO1xuICAgICAgICByZXR1cm4gbGlua2VkICYmIGxpbmtlZFttXSA/IGxpbmtlZFttXSgpIDogbnVsbDtcbiAgICAgIH1cbiAgICApIDogbnVsbDtcbiAgICBjb25zdCBiaURpclN5bmMgPSBpc01ldGhvZHMgJiYgc3luY01ldGhvZHMubGVuZ3RoID4gMjtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmluZGV4ID0gc2Nyb2xsZXJJbmRleCsrO1xuICAgIC8qKiBAdHlwZSB7U3RyaW5nfE51bWJlcn0gKi9cbiAgICB0aGlzLmlkID0gIWlzVW5kKHBhcmFtZXRlcnMuaWQpID8gcGFyYW1ldGVycy5pZCA6IHRoaXMuaW5kZXg7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxDb250YWluZXJ9ICovXG4gICAgdGhpcy5jb250YWluZXIgPSByZWdpc3RlckFuZEdldFNjcm9sbENvbnRhaW5lcihwYXJhbWV0ZXJzLmNvbnRhaW5lcik7XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtUaWNrYWJsZXxXQUFQSUFuaW1hdGlvbn0gKi9cbiAgICB0aGlzLmxpbmtlZCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMucmVwZWF0ID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5ob3Jpem9udGFsID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFBhcmFtfFNjcm9sbFRocmVzaG9sZFZhbHVlfFNjcm9sbFRocmVzaG9sZENhbGxiYWNrfSAqL1xuICAgIHRoaXMuZW50ZXIgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkUGFyYW18U2Nyb2xsVGhyZXNob2xkVmFsdWV8U2Nyb2xsVGhyZXNob2xkQ2FsbGJhY2t9ICovXG4gICAgdGhpcy5sZWF2ZSA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuc3luYyA9IGlzRWFzZSB8fCBpc1Ntb290aCB8fCAhIXN5bmNNZXRob2RzO1xuICAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gICAgdGhpcy5zeW5jRWFzZSA9IGlzRWFzZSA/IGVhc2UgOiBudWxsO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuc3luY1Ntb290aCA9IGlzU21vb3RoID8gc3luY01vZGUgPT09IHRydWUgfHwgaXNMaW5lYXIgPyAxIDogLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHN5bmNNb2RlKSA6IG51bGw7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblN5bmNFbnRlciA9IHN5bmNNZXRob2RzICYmICFiaURpclN5bmMgJiYgc3luY01ldGhvZHNbMF0gPyBzeW5jTWV0aG9kc1swXSA6IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblN5bmNMZWF2ZSA9IHN5bmNNZXRob2RzICYmICFiaURpclN5bmMgJiYgc3luY01ldGhvZHNbMV0gPyBzeW5jTWV0aG9kc1sxXSA6IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblN5bmNFbnRlckZvcndhcmQgPSBzeW5jTWV0aG9kcyAmJiBiaURpclN5bmMgJiYgc3luY01ldGhvZHNbMF0gPyBzeW5jTWV0aG9kc1swXSA6IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblN5bmNMZWF2ZUZvcndhcmQgPSBzeW5jTWV0aG9kcyAmJiBiaURpclN5bmMgJiYgc3luY01ldGhvZHNbMV0gPyBzeW5jTWV0aG9kc1sxXSA6IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblN5bmNFbnRlckJhY2t3YXJkID0gc3luY01ldGhvZHMgJiYgYmlEaXJTeW5jICYmIHN5bmNNZXRob2RzWzJdID8gc3luY01ldGhvZHNbMl0gOiBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25TeW5jTGVhdmVCYWNrd2FyZCA9IHN5bmNNZXRob2RzICYmIGJpRGlyU3luYyAmJiBzeW5jTWV0aG9kc1szXSA/IHN5bmNNZXRob2RzWzNdIDogbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uRW50ZXIgPSBwYXJhbWV0ZXJzLm9uRW50ZXIgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uTGVhdmUgPSBwYXJhbWV0ZXJzLm9uTGVhdmUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uRW50ZXJGb3J3YXJkID0gcGFyYW1ldGVycy5vbkVudGVyRm9yd2FyZCB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25MZWF2ZUZvcndhcmQgPSBwYXJhbWV0ZXJzLm9uTGVhdmVGb3J3YXJkIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vbkVudGVyQmFja3dhcmQgPSBwYXJhbWV0ZXJzLm9uRW50ZXJCYWNrd2FyZCB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25MZWF2ZUJhY2t3YXJkID0gcGFyYW1ldGVycy5vbkxlYXZlQmFja3dhcmQgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gcGFyYW1ldGVycy5vblVwZGF0ZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25TeW5jQ29tcGxldGUgPSBwYXJhbWV0ZXJzLm9uU3luY0NvbXBsZXRlIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMucmV2ZXJ0ZWQgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5iZWdhbiA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmlzSW5WaWV3ID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuZm9yY2VFbnRlciA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmhhc0VudGVyZWQgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0FycmF5LjxOdW1iZXI+fSAqL1xuICAgIHRoaXMub2Zmc2V0cyA9IFtdO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLm9mZnNldFN0YXJ0ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLm9mZnNldEVuZCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5kaXN0YW5jZSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5wcmV2UHJvZ3Jlc3MgPSAwO1xuICAgIC8qKiBAdHlwZSB7QXJyYXl9ICovXG4gICAgdGhpcy50aHJlc2hvbGRzID0gWydzdGFydCcsICdlbmQnLCAnZW5kJywgJ3N0YXJ0J107XG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLmNvb3JkcyA9IFswLCAwLCAwLCAwXTtcbiAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL1xuICAgIHRoaXMuZGVidWdTdHlsZXMgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgdGhpcy4kZGVidWcgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJQYXJhbXN9ICovXG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1ldGVycztcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5fZGVidWcgPSBzZXRWYWx1ZShwYXJhbWV0ZXJzLmRlYnVnLCBmYWxzZSk7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi9cbiAgICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqL1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICAgIGFkZENoaWxkKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICAvLyBXYWl0IGZvciB0aGUgbmV4dCBmcmFtZSB0byBhZGQgdG8gdGhlIGNvbnRhaW5lciBpbiBvcmRlciB0byBoYW5kbGUgY2FsbHMgdG8gbGluaygpXG4gICAgc3luYygoKSA9PiB7XG4gICAgICBpZiAodGhpcy5yZXZlcnRlZCkgcmV0dXJuO1xuICAgICAgaWYgKCF0aGlzLnRhcmdldCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhwYXJzZVRhcmdldHMocGFyYW1ldGVycy50YXJnZXQpWzBdKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQgfHwgZG9jLmJvZHk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2RlYnVnKSB0aGlzLmRlYnVnKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUaWNrYWJsZXxXQUFQSUFuaW1hdGlvbn0gbGlua2VkXG4gICAqL1xuICBsaW5rKGxpbmtlZCkge1xuICAgIGlmIChsaW5rZWQpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byBwYXVzZSB0aGUgbGlua2VkIG9iamVjdCBpbiBjYXNlIGl0J3MgYWRkZWQgbGF0ZXJcbiAgICAgIGxpbmtlZC5wYXVzZSgpO1xuICAgICAgdGhpcy5saW5rZWQgPSBsaW5rZWQ7XG4gICAgICAvLyBUcnkgdG8gdXNlIGEgdGFyZ2V0IG9mIHRoZSBsaW5rZWQgb2JqZWN0IGlmIG5vIHRhcmdldCBwYXJhbWV0ZXJzIHNwZWNpZmllZFxuICAgICAgaWYgKCF0aGlzLl9wYXJhbXMudGFyZ2V0KSB7XG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgICAgIGxldCAkbGlua2VkVGFyZ2V0O1xuICAgICAgICBpZiAoIWlzVW5kKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKGxpbmtlZCkudGFyZ2V0cykpIHtcbiAgICAgICAgICAkbGlua2VkVGFyZ2V0ID0gZ2V0QW5pbWF0aW9uRG9tVGFyZ2V0KC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKGxpbmtlZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvckVhY2hDaGlsZHJlbigvKiogQHR5cGUge1RpbWVsaW5lfSAqLyhsaW5rZWQpLCAoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9jaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnRhcmdldHMgJiYgISRsaW5rZWRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgJGxpbmtlZFRhcmdldCA9IGdldEFuaW1hdGlvbkRvbVRhcmdldCgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyhjaGlsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIGJvZHkgaWYgbm8gdGFyZ2V0IGZvdW5kXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gJGxpbmtlZFRhcmdldCB8fCBkb2MuYm9keTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IHZlbG9jaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci52ZWxvY2l0eTtcbiAgfVxuXG4gIGdldCBiYWNrd2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsID8gdGhpcy5jb250YWluZXIuYmFja3dhcmRYIDogdGhpcy5jb250YWluZXIuYmFja3dhcmRZO1xuICB9XG5cbiAgZ2V0IHNjcm9sbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsID8gdGhpcy5jb250YWluZXIuc2Nyb2xsWCA6IHRoaXMuY29udGFpbmVyLnNjcm9sbFk7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgY29uc3QgcCA9ICh0aGlzLnNjcm9sbCAtIHRoaXMub2Zmc2V0U3RhcnQpIC8gdGhpcy5kaXN0YW5jZTtcbiAgICByZXR1cm4gcCA9PT0gSW5maW5pdHkgfHwgaXNOYU4ocCkgPyAwIDogcm91bmQoY2xhbXAocCwgMCwgMSksIDYpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnJldmVydGVkID0gZmFsc2U7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5fcGFyYW1zO1xuICAgIHRoaXMucmVwZWF0ID0gc2V0VmFsdWUocGFyc2VTY3JvbGxPYnNlcnZlckZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5yZXBlYXQsIHRoaXMpLCB0cnVlKTtcbiAgICB0aGlzLmhvcml6b250YWwgPSBzZXRWYWx1ZShwYXJzZVNjcm9sbE9ic2VydmVyRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmF4aXMsIHRoaXMpLCAneScpID09PSAneCc7XG4gICAgdGhpcy5lbnRlciA9IHNldFZhbHVlKHBhcnNlU2Nyb2xsT2JzZXJ2ZXJGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuZW50ZXIsIHRoaXMpLCAnZW5kIHN0YXJ0Jyk7XG4gICAgdGhpcy5sZWF2ZSA9IHNldFZhbHVlKHBhcnNlU2Nyb2xsT2JzZXJ2ZXJGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMubGVhdmUsIHRoaXMpLCAnc3RhcnQgZW5kJyk7XG4gICAgdGhpcy51cGRhdGVCb3VuZHMoKTtcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlRGVidWcoKSB7XG4gICAgaWYgKHRoaXMuJGRlYnVnKSB7XG4gICAgICB0aGlzLiRkZWJ1Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJGRlYnVnKTtcbiAgICAgIHRoaXMuJGRlYnVnID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVidWdTdHlsZXMpIHtcbiAgICAgIHRoaXMuZGVidWdTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLiRkZWJ1ZyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVidWcoKSB7XG4gICAgdGhpcy5yZW1vdmVEZWJ1ZygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgIGNvbnN0IGlzSG9yaSA9IHRoaXMuaG9yaXpvbnRhbDtcbiAgICBjb25zdCAkZXhpc3RpbmdEZWJ1ZyA9IGNvbnRhaW5lci5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5hbmltZWpzLW9uc2Nyb2xsLWRlYnVnJyk7XG4gICAgY29uc3QgJGRlYnVnID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0ICR0aHJlc2hvbGRzID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0ICR0cmlnZ2VycyA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb2xvciA9IGRlYnVnQ29sb3JzW3RoaXMuaW5kZXggJSBkZWJ1Z0NvbG9ycy5sZW5ndGhdO1xuICAgIGNvbnN0IHVzZVdpbiA9IGNvbnRhaW5lci51c2VXaW47XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB1c2VXaW4gPyBjb250YWluZXIud2luV2lkdGggOiBjb250YWluZXIud2lkdGg7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gdXNlV2luID8gY29udGFpbmVyLndpbkhlaWdodCA6IGNvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBjb250YWluZXIuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICBjb25zdCBzaXplID0gdGhpcy5jb250YWluZXIud2lkdGggPiAzNjAgPyAzMjAgOiAyNjA7XG4gICAgY29uc3Qgb2ZmTGVmdCA9IGlzSG9yaSA/IDAgOiAxMDtcbiAgICBjb25zdCBvZmZUb3AgPSBpc0hvcmkgPyAxMCA6IDA7XG4gICAgY29uc3QgaGFsZiA9IGlzSG9yaSA/IDI0IDogc2l6ZSAvIDI7XG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSBpc0hvcmkgPyBoYWxmIDogMTU7XG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IGlzSG9yaSA/IDYwIDogaGFsZjtcbiAgICBjb25zdCBsYWJlbFNpemUgPSBpc0hvcmkgPyBsYWJlbFdpZHRoIDogbGFiZWxIZWlnaHQ7XG4gICAgY29uc3QgcmVwZWF0ID0gaXNIb3JpID8gJ3JlcGVhdC14JyA6ICdyZXBlYXQteSc7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29uc3QgZ3JhZGllbnRPZmZzZXQgPSB2ID0+IGlzSG9yaSA/ICcwcHggJysodikrJ3B4JyA6ICh2KSsncHgnKycgMnB4JztcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBjb25zdCBsaW5lQ1NTID0gKGMpID0+IGBsaW5lYXItZ3JhZGllbnQoJHtpc0hvcmkgPyA5MCA6IDB9ZGVnLCAke2N9IDJweCwgdHJhbnNwYXJlbnQgMXB4KWA7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaFxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBjb25zdCBiYXNlQ1NTID0gKHAsIGwsIHQsIHcsIGgpID0+IGBwb3NpdGlvbjoke3B9O2xlZnQ6JHtsfXB4O3RvcDoke3R9cHg7d2lkdGg6JHt3fXB4O2hlaWdodDoke2h9cHg7YDtcbiAgICAkZGVidWcuc3R5bGUuY3NzVGV4dCA9IGAke2Jhc2VDU1MoJ2Fic29sdXRlJywgb2ZmTGVmdCwgb2ZmVG9wLCBpc0hvcmkgPyBzY3JvbGxXaWR0aCA6IHNpemUsIGlzSG9yaSA/IHNpemUgOiBzY3JvbGxIZWlnaHQpfVxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB6LWluZGV4OiAke3RoaXMuY29udGFpbmVyLnpJbmRleCsrfTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogJHtpc0hvcmkgPyAnY29sdW1uJyA6ICdyb3cnfTtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAwcHggcmdiYSgwLDAsMCwuNzUpKTtcbiAgICBgO1xuICAgICR0aHJlc2hvbGRzLnN0eWxlLmNzc1RleHQgPSBgJHtiYXNlQ1NTKCdzdGlja3knLCAwLCAwLCBpc0hvcmkgPyBjb250YWluZXJXaWR0aCA6IGhhbGYsIGlzSG9yaSA/IGhhbGYgOiBjb250YWluZXJIZWlnaHQpfWA7XG4gICAgaWYgKCEkZXhpc3RpbmdEZWJ1Zykge1xuICAgICAgJHRocmVzaG9sZHMuc3R5bGUuY3NzVGV4dCArPSBgYmFja2dyb3VuZDpcbiAgICAgICAgJHtsaW5lQ1NTKCcjRkZGRicpfSR7Z3JhZGllbnRPZmZzZXQoaGFsZi0xMCl9IC8gJHtpc0hvcmkgPyAnMTAwcHggMTAwcHgnIDogJzEwMHB4IDEwMHB4J30gJHtyZXBlYXR9LFxuICAgICAgICAke2xpbmVDU1MoJyNGRkY4Jyl9JHtncmFkaWVudE9mZnNldChoYWxmLTEwKX0gLyAke2lzSG9yaSA/ICcxMHB4IDEwcHgnIDogJzEwcHggMTBweCd9ICR7cmVwZWF0fTtcbiAgICAgIGA7XG4gICAgfVxuICAgICR0cmlnZ2Vycy5zdHlsZS5jc3NUZXh0ID0gYCR7YmFzZUNTUygncmVsYXRpdmUnLCAwLCAwLCBpc0hvcmkgPyBzY3JvbGxXaWR0aCA6IGhhbGYsIGlzSG9yaSA/IGhhbGYgOiBzY3JvbGxIZWlnaHQpfWA7XG4gICAgaWYgKCEkZXhpc3RpbmdEZWJ1Zykge1xuICAgICAgJHRyaWdnZXJzLnN0eWxlLmNzc1RleHQgKz0gYGJhY2tncm91bmQ6XG4gICAgICAgICR7bGluZUNTUygnI0ZGRkYnKX0ke2dyYWRpZW50T2Zmc2V0KDApfSAvICR7aXNIb3JpID8gJzEwMHB4IDEwcHgnIDogJzEwcHggMTAwcHgnfSAke3JlcGVhdH0sXG4gICAgICAgICR7bGluZUNTUygnI0ZGRjgnKX0ke2dyYWRpZW50T2Zmc2V0KDApfSAvICR7aXNIb3JpID8gJzEwcHggMHB4JyA6ICcwcHggMTBweCd9ICR7cmVwZWF0fTtcbiAgICAgIGA7XG4gICAgfVxuICAgIGNvbnN0IGxhYmVscyA9IFsnIGVudGVyOiAnLCAnIGxlYXZlOiAnXTtcbiAgICB0aGlzLmNvb3Jkcy5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICBjb25zdCBpc1ZpZXcgPSBpID4gMTtcbiAgICAgIGNvbnN0IHZhbHVlID0gKGlzVmlldyA/IDAgOiB0aGlzLm9mZnNldCkgKyB2O1xuICAgICAgY29uc3QgaXNUYWlsID0gaSAlIDI7XG4gICAgICBjb25zdCBpc0ZpcnN0ID0gdmFsdWUgPCBsYWJlbFNpemU7XG4gICAgICBjb25zdCBpc092ZXIgPSB2YWx1ZSA+IChpc1ZpZXcgPyBpc0hvcmkgPyBjb250YWluZXJXaWR0aCA6IGNvbnRhaW5lckhlaWdodCA6IGlzSG9yaSA/IHNjcm9sbFdpZHRoIDogc2Nyb2xsSGVpZ2h0KSAtIGxhYmVsU2l6ZTtcbiAgICAgIGNvbnN0IGlzRmxpcCA9IChpc1ZpZXcgPyBpc1RhaWwgJiYgIWlzRmlyc3QgOiAhaXNUYWlsICYmICFpc0ZpcnN0KSB8fCBpc092ZXI7XG4gICAgICBjb25zdCAkbGFiZWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCAkdGV4dCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGRpclByb3AgPSBpc0hvcmkgPyBpc0ZsaXAgPyAncmlnaHQnIDogJ2xlZnQnIDogaXNGbGlwID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICAgIGNvbnN0IGZsaXBPZmZzZXQgPSBpc0ZsaXAgPyAoaXNIb3JpID8gbGFiZWxXaWR0aCA6IGxhYmVsSGVpZ2h0KSArICghaXNWaWV3ID8gaXNIb3JpID8gLTEgOiAtMiA6IGlzSG9yaSA/IC0xIDogaXNPdmVyID8gMCA6IC0yKSA6ICFpc1ZpZXcgPyBpc0hvcmkgPyAxIDogMCA6IGlzSG9yaSA/IDEgOiAwO1xuICAgICAgLy8gJHRleHQuaW5uZXJIVE1MID0gYCR7IWlzVmlldyA/ICcnIDogbGFiZWxzW2lzVGFpbF0gKyAnICd9JHt0aGlzLmlkfTogJHt0aGlzLnRocmVzaG9sZHNbaV19ICR7aXNWaWV3ID8gJycgOiBsYWJlbHNbaXNUYWlsXX1gO1xuICAgICAgJHRleHQuaW5uZXJIVE1MID0gYCR7dGhpcy5pZH0ke2xhYmVsc1tpc1RhaWxdfSR7dGhpcy50aHJlc2hvbGRzW2ldfWA7XG4gICAgICAkbGFiZWwuc3R5bGUuY3NzVGV4dCA9IGAke2Jhc2VDU1MoJ2Fic29sdXRlJywgMCwgMCwgbGFiZWxXaWR0aCwgbGFiZWxIZWlnaHQpfVxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJHtpc0hvcmkgPyAnY29sdW1uJyA6ICdyb3cnfTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LSR7aXNWaWV3ID8gJ3N0YXJ0JyA6ICdlbmQnfTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtJHtpc0ZsaXAgPyAnZW5kJyA6ICdzdGFydCd9O1xuICAgICAgICBib3JkZXItJHtkaXJQcm9wfTogMnB4ICR7aXNUYWlsID8gJ3NvbGlkJyA6ICdzb2xpZCd9ICR7Y29sb3J9O1xuICAgICAgYDtcbiAgICAgICR0ZXh0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC13aWR0aDogJHsoc2l6ZSAvIDIpIC0gMTB9cHg7XG4gICAgICAgIGhlaWdodDogJHtsYWJlbEhlaWdodH07XG4gICAgICAgIG1hcmdpbi0ke2lzSG9yaSA/IGlzRmxpcCA/ICdyaWdodCcgOiAnbGVmdCcgOiBpc0ZsaXAgPyAnYm90dG9tJyA6ICd0b3AnfTogLTJweDtcbiAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDI1ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtYWxpZ246ICR7aXNIb3JpICYmIGlzRmxpcCB8fCAhaXNIb3JpICYmICFpc1ZpZXcgPyAncmlnaHQnIDogJ2xlZnQnfTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGNvbG9yOiAke2lzVGFpbCA/IGNvbG9yIDogJ3JnYmEoMCwwLDAsLjc1KSd9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2lzVGFpbCA/ICdyZ2JhKDAsMCwwLC42NSknIDogY29sb3J9O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2lzVGFpbCA/IGNvbG9yIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgIGJvcmRlci0ke2lzSG9yaSA/IGlzRmxpcCA/ICd0b3AtbGVmdCcgOiAndG9wLXJpZ2h0JyA6IGlzRmxpcCA/ICd0b3AtbGVmdCcgOiAnYm90dG9tLWxlZnQnfS1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLSR7aXNIb3JpID8gaXNGbGlwID8gJ2JvdHRvbS1sZWZ0JyA6ICdib3R0b20tcmlnaHQnIDogaXNGbGlwID8gJ3RvcC1yaWdodCcgOiAnYm90dG9tLXJpZ2h0J30tcmFkaXVzOiA1cHg7XG4gICAgICBgO1xuICAgICAgJGxhYmVsLmFwcGVuZENoaWxkKCR0ZXh0KTtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHZhbHVlIC0gZmxpcE9mZnNldCArIChpc0hvcmkgPyAxIDogMCk7XG4gICAgICAkbGFiZWwuc3R5bGVbaXNIb3JpID8gJ2xlZnQnIDogJ3RvcCddID0gYCR7cG9zaXRpb259cHhgO1xuICAgICAgLy8gJGxhYmVsLnN0eWxlW2lzSG9yaSA/ICdsZWZ0JyA6ICd0b3AnXSA9IHZhbHVlIC0gZmxpcE9mZnNldCArICghaXNGbGlwICYmIGlzRmlyc3QgJiYgIWlzVmlldyA/IDEgOiBpc0ZsaXAgPyAwIDogLTIpICsgJ3B4JztcbiAgICAgIChpc1ZpZXcgPyAkdGhyZXNob2xkcyA6ICR0cmlnZ2VycykuYXBwZW5kQ2hpbGQoJGxhYmVsKTtcbiAgICB9KTtcblxuICAgICRkZWJ1Zy5hcHBlbmRDaGlsZCgkdGhyZXNob2xkcyk7XG4gICAgJGRlYnVnLmFwcGVuZENoaWxkKCR0cmlnZ2Vycyk7XG4gICAgY29udGFpbmVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQoJGRlYnVnKTtcblxuICAgIGlmICghJGV4aXN0aW5nRGVidWcpICRkZWJ1Zy5jbGFzc0xpc3QuYWRkKCdhbmltZWpzLW9uc2Nyb2xsLWRlYnVnJyk7XG4gICAgdGhpcy4kZGVidWcgPSAkZGVidWc7XG4gICAgY29uc3QgY29udGFpbmVyUG9zaXRpb24gPSBnZXRUYXJnZXRWYWx1ZShjb250YWluZXIuZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKGNvbnRhaW5lclBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgdGhpcy5kZWJ1Z1N0eWxlcyA9IHNldFRhcmdldFZhbHVlcyhjb250YWluZXIuZWxlbWVudCwgeyBwb3NpdGlvbjogJ3JlbGF0aXZlICd9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5fZGVidWcpIHtcbiAgICAgIHRoaXMucmVtb3ZlRGVidWcoKTtcbiAgICB9XG4gICAgbGV0IHN0aWNreXM7XG4gICAgY29uc3QgJHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgIGNvbnN0IGlzSG9yaSA9IHRoaXMuaG9yaXpvbnRhbDtcbiAgICBjb25zdCBsaW5rZWQgPSB0aGlzLmxpbmtlZDtcbiAgICBsZXQgbGlua2VkVGltZTtcbiAgICBsZXQgJGVsID0gJHRhcmdldDtcbiAgICBsZXQgb2Zmc2V0WCA9IDA7XG4gICAgbGV0IG9mZnNldFkgPSAwO1xuICAgIC8qKiBAdHlwZSB7RWxlbWVudH0gKi9cbiAgICBsZXQgJG9mZnNldFBhcmVudCA9ICRlbDtcbiAgICBpZiAobGlua2VkKSB7XG4gICAgICBsaW5rZWRUaW1lID0gbGlua2VkLmN1cnJlbnRUaW1lO1xuICAgICAgbGlua2VkLnNlZWsoMCwgdHJ1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGlzQ29udGFpbmVyU3RhdGljID0gZ2V0VGFyZ2V0VmFsdWUoY29udGFpbmVyLmVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJyA/IHNldFRhcmdldFZhbHVlcyhjb250YWluZXIuZWxlbWVudCwgeyBwb3NpdGlvbjogJ3JlbGF0aXZlICd9KSA6IGZhbHNlO1xuICAgIHdoaWxlICgkZWwgJiYgJGVsICE9PSBjb250YWluZXIuZWxlbWVudCAmJiAkZWwgIT09IGRvYy5ib2R5KSB7XG4gICAgICBjb25zdCBpc1N0aWNreSA9IGdldFRhcmdldFZhbHVlKCRlbCwgJ3Bvc2l0aW9uJykgPT09ICdzdGlja3knID9cbiAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0VmFsdWVzKCRlbCwgeyBwb3NpdGlvbjogJ3N0YXRpYycgfSkgOlxuICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcbiAgICAgIGlmICgkZWwgPT09ICRvZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgb2Zmc2V0WCArPSAkZWwub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgICBvZmZzZXRZICs9ICRlbC5vZmZzZXRUb3AgfHwgMDtcbiAgICAgICAgJG9mZnNldFBhcmVudCA9ICRlbC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG4gICAgICAkZWwgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLygkZWwucGFyZW50RWxlbWVudCk7XG4gICAgICBpZiAoaXNTdGlja3kpIHtcbiAgICAgICAgaWYgKCFzdGlja3lzKSBzdGlja3lzID0gW107XG4gICAgICAgIHN0aWNreXMucHVzaChpc1N0aWNreSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0NvbnRhaW5lclN0YXRpYykgaXNDb250YWluZXJTdGF0aWMucmV2ZXJ0KCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaXNIb3JpID8gb2Zmc2V0WCA6IG9mZnNldFk7XG4gICAgY29uc3QgdGFyZ2V0U2l6ZSA9IGlzSG9yaSA/ICR0YXJnZXQub2Zmc2V0V2lkdGggOiAkdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJTaXplID0gaXNIb3JpID8gY29udGFpbmVyLndpZHRoIDogY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBzY3JvbGxTaXplID0gaXNIb3JpID8gY29udGFpbmVyLnNjcm9sbFdpZHRoIDogY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICBjb25zdCBtYXhTY3JvbGwgPSBzY3JvbGxTaXplIC0gY29udGFpbmVyU2l6ZTtcbiAgICBjb25zdCBlbnRlciA9IHRoaXMuZW50ZXI7XG4gICAgY29uc3QgbGVhdmUgPSB0aGlzLmxlYXZlO1xuXG4gICAgLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRWYWx1ZX0gKi9cbiAgICBsZXQgZW50ZXJUYXJnZXQgPSAnc3RhcnQnO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV9ICovXG4gICAgbGV0IGxlYXZlVGFyZ2V0ID0gJ2VuZCc7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRWYWx1ZX0gKi9cbiAgICBsZXQgZW50ZXJDb250YWluZXIgPSAnZW5kJztcbiAgICAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFZhbHVlfSAqL1xuICAgIGxldCBsZWF2ZUNvbnRhaW5lciA9ICdzdGFydCc7XG5cbiAgICBpZiAoaXNTdHIoZW50ZXIpKSB7XG4gICAgICBjb25zdCBzcGxpdHRlZCA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhlbnRlcikuc3BsaXQoJyAnKTtcbiAgICAgIGVudGVyQ29udGFpbmVyID0gc3BsaXR0ZWRbMF07XG4gICAgICBlbnRlclRhcmdldCA9IHNwbGl0dGVkLmxlbmd0aCA+IDEgPyBzcGxpdHRlZFsxXSA6IGVudGVyVGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoaXNPYmooZW50ZXIpKSB7XG4gICAgICBjb25zdCBlID0gLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRQYXJhbX0gKi8oZW50ZXIpO1xuICAgICAgaWYgKCFpc1VuZChlLmNvbnRhaW5lcikpIGVudGVyQ29udGFpbmVyID0gZS5jb250YWluZXI7XG4gICAgICBpZiAoIWlzVW5kKGUudGFyZ2V0KSkgZW50ZXJUYXJnZXQgPSBlLnRhcmdldDtcbiAgICB9IGVsc2UgaWYgKGlzTnVtKGVudGVyKSkge1xuICAgICAgZW50ZXJDb250YWluZXIgPSAvKiogQHR5cGUge051bWJlcn0gKi8oZW50ZXIpO1xuICAgIH1cblxuICAgIGlmIChpc1N0cihsZWF2ZSkpIHtcbiAgICAgIGNvbnN0IHNwbGl0dGVkID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKGxlYXZlKS5zcGxpdCgnICcpO1xuICAgICAgbGVhdmVDb250YWluZXIgPSBzcGxpdHRlZFswXTtcbiAgICAgIGxlYXZlVGFyZ2V0ID0gc3BsaXR0ZWQubGVuZ3RoID4gMSA/IHNwbGl0dGVkWzFdIDogbGVhdmVUYXJnZXQ7XG4gICAgfSBlbHNlIGlmIChpc09iaihsZWF2ZSkpIHtcbiAgICAgIGNvbnN0IHQgPSAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFBhcmFtfSAqLyhsZWF2ZSk7XG4gICAgICBpZiAoIWlzVW5kKHQuY29udGFpbmVyKSkgbGVhdmVDb250YWluZXIgPSB0LmNvbnRhaW5lcjtcbiAgICAgIGlmICghaXNVbmQodC50YXJnZXQpKSBsZWF2ZVRhcmdldCA9IHQudGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoaXNOdW0obGVhdmUpKSB7XG4gICAgICBsZWF2ZUNvbnRhaW5lciA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhsZWF2ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkRW50ZXJUYXJnZXQgPSBwYXJzZUJvdW5kVmFsdWUoJHRhcmdldCwgZW50ZXJUYXJnZXQsIHRhcmdldFNpemUpO1xuICAgIGNvbnN0IHBhcnNlZExlYXZlVGFyZ2V0ID0gcGFyc2VCb3VuZFZhbHVlKCR0YXJnZXQsIGxlYXZlVGFyZ2V0LCB0YXJnZXRTaXplKTtcbiAgICBjb25zdCB1bmRlciA9IChwYXJzZWRFbnRlclRhcmdldCArIG9mZnNldCkgLSBjb250YWluZXJTaXplO1xuICAgIGNvbnN0IG92ZXIgPSAocGFyc2VkTGVhdmVUYXJnZXQgKyBvZmZzZXQpIC0gbWF4U2Nyb2xsO1xuICAgIGNvbnN0IHBhcnNlZEVudGVyQ29udGFpbmVyID0gcGFyc2VCb3VuZFZhbHVlKCR0YXJnZXQsIGVudGVyQ29udGFpbmVyLCBjb250YWluZXJTaXplLCB1bmRlciwgb3Zlcik7XG4gICAgY29uc3QgcGFyc2VkTGVhdmVDb250YWluZXIgPSBwYXJzZUJvdW5kVmFsdWUoJHRhcmdldCwgbGVhdmVDb250YWluZXIsIGNvbnRhaW5lclNpemUsIHVuZGVyLCBvdmVyKTtcbiAgICBjb25zdCBvZmZzZXRTdGFydCA9IHBhcnNlZEVudGVyVGFyZ2V0ICsgb2Zmc2V0IC0gcGFyc2VkRW50ZXJDb250YWluZXI7XG4gICAgY29uc3Qgb2Zmc2V0RW5kID0gcGFyc2VkTGVhdmVUYXJnZXQgKyBvZmZzZXQgLSBwYXJzZWRMZWF2ZUNvbnRhaW5lcjtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IG9mZnNldEVuZCAtIG9mZnNldFN0YXJ0O1xuICAgIHRoaXMub2Zmc2V0c1swXSA9IG9mZnNldFg7XG4gICAgdGhpcy5vZmZzZXRzWzFdID0gb2Zmc2V0WTtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLm9mZnNldFN0YXJ0ID0gb2Zmc2V0U3RhcnQ7XG4gICAgdGhpcy5vZmZzZXRFbmQgPSBvZmZzZXRFbmQ7XG4gICAgdGhpcy5kaXN0YW5jZSA9IHNjcm9sbERlbHRhIDw9IDAgPyAwIDogc2Nyb2xsRGVsdGE7XG4gICAgdGhpcy50aHJlc2hvbGRzID0gW2VudGVyVGFyZ2V0LCBsZWF2ZVRhcmdldCwgZW50ZXJDb250YWluZXIsIGxlYXZlQ29udGFpbmVyXTtcbiAgICB0aGlzLmNvb3JkcyA9IFtwYXJzZWRFbnRlclRhcmdldCwgcGFyc2VkTGVhdmVUYXJnZXQsIHBhcnNlZEVudGVyQ29udGFpbmVyLCBwYXJzZWRMZWF2ZUNvbnRhaW5lcl07XG4gICAgaWYgKHN0aWNreXMpIHtcbiAgICAgIHN0aWNreXMuZm9yRWFjaChzdGlja3kgPT4gc3RpY2t5LnJldmVydCgpKTtcbiAgICB9XG4gICAgaWYgKGxpbmtlZCkge1xuICAgICAgbGlua2VkLnNlZWsobGlua2VkVGltZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWJ1Zykge1xuICAgICAgdGhpcy5kZWJ1ZygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCgpIHtcbiAgICBjb25zdCBsaW5rZWQgPSB0aGlzLmxpbmtlZDtcbiAgICBjb25zdCBzeW5jID0gdGhpcy5zeW5jO1xuICAgIGNvbnN0IHN5bmNFYXNlID0gdGhpcy5zeW5jRWFzZTtcbiAgICBjb25zdCBzeW5jU21vb3RoID0gdGhpcy5zeW5jU21vb3RoO1xuICAgIGNvbnN0IHNob3VsZFNlZWsgPSBsaW5rZWQgJiYgKHN5bmNFYXNlIHx8IHN5bmNTbW9vdGgpO1xuICAgIGNvbnN0IGlzSG9yaSA9IHRoaXMuaG9yaXpvbnRhbDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICBjb25zdCBzY3JvbGwgPSB0aGlzLnNjcm9sbDtcbiAgICBjb25zdCBpc0JlZm9yZSA9IHNjcm9sbCA8PSB0aGlzLm9mZnNldFN0YXJ0O1xuICAgIGNvbnN0IGlzQWZ0ZXIgPSBzY3JvbGwgPj0gdGhpcy5vZmZzZXRFbmQ7XG4gICAgY29uc3QgaXNJblZpZXcgPSAhaXNCZWZvcmUgJiYgIWlzQWZ0ZXI7XG4gICAgY29uc3QgaXNPblRoZUVkZ2UgPSBzY3JvbGwgPT09IHRoaXMub2Zmc2V0U3RhcnQgfHwgc2Nyb2xsID09PSB0aGlzLm9mZnNldEVuZDtcbiAgICBjb25zdCBmb3JjZUVudGVyID0gIXRoaXMuaGFzRW50ZXJlZCAmJiBpc09uVGhlRWRnZTtcbiAgICBjb25zdCAkZGVidWcgPSB0aGlzLl9kZWJ1ZyAmJiB0aGlzLiRkZWJ1ZztcbiAgICBsZXQgaGFzVXBkYXRlZCA9IGZhbHNlO1xuICAgIGxldCBzeW5jQ29tcGxldGVkID0gZmFsc2U7XG4gICAgbGV0IHAgPSB0aGlzLnByb2dyZXNzO1xuXG4gICAgaWYgKGlzQmVmb3JlICYmIHRoaXMuYmVnYW4pIHtcbiAgICAgIHRoaXMuYmVnYW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocCA+IDAgJiYgIXRoaXMuYmVnYW4pIHtcbiAgICAgIHRoaXMuYmVnYW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRTZWVrKSB7XG4gICAgICBjb25zdCBscCA9IGxpbmtlZC5wcm9ncmVzcztcbiAgICAgIGlmIChzeW5jU21vb3RoICYmIGlzTnVtKHN5bmNTbW9vdGgpKSB7XG4gICAgICAgIGlmICgvKiogQHR5cGUge051bWJlcn0gKi8oc3luY1Ntb290aCkgPCAxKSB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IDAuMDAwMTtcbiAgICAgICAgICBjb25zdCBzbmFwID0gbHAgPCBwICYmIHAgPT09IDEgPyBzdGVwIDogbHAgPiBwICYmICFwID8gLTFlLTQgOiAwO1xuICAgICAgICAgIHAgPSByb3VuZChsZXJwKGxwLCBwLCBpbnRlcnBvbGF0ZSguMDEsIC4yLCAvKiogQHR5cGUge051bWJlcn0gKi8oc3luY1Ntb290aCkpLCBmYWxzZSkgKyBzbmFwLCA2KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzeW5jRWFzZSkge1xuICAgICAgICBwID0gc3luY0Vhc2UocCk7XG4gICAgICB9XG4gICAgICBoYXNVcGRhdGVkID0gcCAhPT0gdGhpcy5wcmV2UHJvZ3Jlc3M7XG4gICAgICBzeW5jQ29tcGxldGVkID0gbHAgPT09IDE7XG4gICAgICBpZiAoaGFzVXBkYXRlZCAmJiAhc3luY0NvbXBsZXRlZCAmJiAoc3luY1Ntb290aCAmJiBscCkpIHtcbiAgICAgICAgY29udGFpbmVyLndha2VUaWNrZXIucmVzdGFydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkZGVidWcpIHtcbiAgICAgIGNvbnN0IHN0aWNreSA9IGlzSG9yaSA/IGNvbnRhaW5lci5zY3JvbGxZIDogY29udGFpbmVyLnNjcm9sbFg7XG4gICAgICAkZGVidWcuc3R5bGVbaXNIb3JpID8gJ3RvcCcgOiAnbGVmdCddID0gc3RpY2t5ICsgMTAgKyAncHgnO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgZW50ZXIgY2FsbGJhY2tzIGlmIGFscmVhZHkgaW4gdmlldyBvciB3aGVuIGVudGVyaW5nIHRoZSB2aWV3XG4gICAgaWYgKChpc0luVmlldyAmJiAhdGhpcy5pc0luVmlldykgfHwgKGZvcmNlRW50ZXIgJiYgIXRoaXMuZm9yY2VFbnRlciAmJiAhdGhpcy5oYXNFbnRlcmVkKSkge1xuICAgICAgaWYgKGlzSW5WaWV3KSB0aGlzLmlzSW5WaWV3ID0gdHJ1ZTtcbiAgICAgIGlmICghdGhpcy5mb3JjZUVudGVyIHx8ICF0aGlzLmhhc0VudGVyZWQpIHtcbiAgICAgICAgaWYgKCRkZWJ1ZyAmJiBpc0luVmlldykgJGRlYnVnLnN0eWxlLnpJbmRleCA9IGAke3RoaXMuY29udGFpbmVyLnpJbmRleCsrfWA7XG4gICAgICAgIHRoaXMub25TeW5jRW50ZXIodGhpcyk7XG4gICAgICAgIHRoaXMub25FbnRlcih0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuYmFja3dhcmQpIHtcbiAgICAgICAgICB0aGlzLm9uU3luY0VudGVyQmFja3dhcmQodGhpcyk7XG4gICAgICAgICAgdGhpcy5vbkVudGVyQmFja3dhcmQodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vblN5bmNFbnRlckZvcndhcmQodGhpcyk7XG4gICAgICAgICAgdGhpcy5vbkVudGVyRm9yd2FyZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhc0VudGVyZWQgPSB0cnVlO1xuICAgICAgICBpZiAoZm9yY2VFbnRlcikgdGhpcy5mb3JjZUVudGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNJblZpZXcpIHtcbiAgICAgICAgdGhpcy5mb3JjZUVudGVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzSW5WaWV3IHx8ICFpc0luVmlldyAmJiB0aGlzLmlzSW5WaWV3KSB7XG4gICAgICBoYXNVcGRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVXBkYXRlZCkge1xuICAgICAgaWYgKHNob3VsZFNlZWspIGxpbmtlZC5zZWVrKGxpbmtlZC5kdXJhdGlvbiAqIHApO1xuICAgICAgdGhpcy5vblVwZGF0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzSW5WaWV3ICYmIHRoaXMuaXNJblZpZXcpIHtcbiAgICAgIHRoaXMuaXNJblZpZXcgPSBmYWxzZTtcbiAgICAgIHRoaXMub25TeW5jTGVhdmUodGhpcyk7XG4gICAgICB0aGlzLm9uTGVhdmUodGhpcyk7XG4gICAgICBpZiAodGhpcy5iYWNrd2FyZCkge1xuICAgICAgICB0aGlzLm9uU3luY0xlYXZlQmFja3dhcmQodGhpcyk7XG4gICAgICAgIHRoaXMub25MZWF2ZUJhY2t3YXJkKHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vblN5bmNMZWF2ZUZvcndhcmQodGhpcyk7XG4gICAgICAgIHRoaXMub25MZWF2ZUZvcndhcmQodGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAoc3luYyAmJiAhc3luY1Ntb290aCkge1xuICAgICAgICBzeW5jQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocCA+PSAxICYmIHRoaXMuYmVnYW4gJiYgIXRoaXMuY29tcGxldGVkICYmIChzeW5jICYmIHN5bmNDb21wbGV0ZWQgfHwgIXN5bmMpKSB7XG4gICAgICBpZiAoc3luYykge1xuICAgICAgICB0aGlzLm9uU3luY0NvbXBsZXRlKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgaWYgKCghdGhpcy5yZXBlYXQgJiYgIWxpbmtlZCkgfHwgKCF0aGlzLnJlcGVhdCAmJiBsaW5rZWQgJiYgbGlua2VkLmNvbXBsZXRlZCkpIHtcbiAgICAgICAgdGhpcy5yZXZlcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocCA8IDEgJiYgdGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2UHJvZ3Jlc3MgPSBwO1xuICB9XG5cbiAgcmV2ZXJ0KCkge1xuICAgIGlmICh0aGlzLnJldmVydGVkKSByZXR1cm47XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgcmVtb3ZlQ2hpbGQoY29udGFpbmVyLCB0aGlzKTtcbiAgICBpZiAoIWNvbnRhaW5lci5faGVhZCkge1xuICAgICAgY29udGFpbmVyLnJldmVydCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVidWcpIHtcbiAgICAgIHRoaXMucmVtb3ZlRGVidWcoKTtcbiAgICB9XG4gICAgdGhpcy5yZXZlcnRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG4vKipcbiAqIEBwYXJhbSB7U2Nyb2xsT2JzZXJ2ZXJQYXJhbXN9IFtwYXJhbWV0ZXJzPXt9XVxuICogQHJldHVybiB7U2Nyb2xsT2JzZXJ2ZXJ9XG4gKi9cbmNvbnN0IG9uU2Nyb2xsID0gKHBhcmFtZXRlcnMgPSB7fSkgPT4gbmV3IFNjcm9sbE9ic2VydmVyKHBhcmFtZXRlcnMpO1xuXG5cblxuXG4vKipcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBTdGFnZ2VyUGFyYW1ldGVyc1xuICogQHByb3BlcnR5IHtOdW1iZXJ8U3RyaW5nfSBbc3RhcnRdXG4gKiBAcHJvcGVydHkge051bWJlcnwnZmlyc3QnfCdjZW50ZXInfCdsYXN0J30gW2Zyb21dXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtyZXZlcnNlZF1cbiAqIEBwcm9wZXJ0eSB7QXJyYXkuPE51bWJlcj59IFtncmlkXVxuICogQHByb3BlcnR5IHsoJ3gnfCd5Jyl9IFtheGlzXVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKiBAcHJvcGVydHkge1R3ZWVuTW9kaWZpZXJ9IFttb2RpZmllcl1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBTdGFnZ2VyRnVuY3Rpb25cbiAqIEBwYXJhbSB7VGFyZ2V0fSBbdGFyZ2V0XVxuICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuZ3RoXVxuICogQHBhcmFtIHtUaW1lbGluZX0gW3RsXVxuICogQHJldHVybiB7TnVtYmVyfFN0cmluZ31cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd8W051bWJlcnxTdHJpbmcsTnVtYmVyfFN0cmluZ119IHZhbFxuICogQHBhcmFtICB7U3RhZ2dlclBhcmFtZXRlcnN9IHBhcmFtc1xuICogQHJldHVybiB7U3RhZ2dlckZ1bmN0aW9ufVxuICovXG5jb25zdCBzdGFnZ2VyID0gKHZhbCwgcGFyYW1zID0ge30pID0+IHtcbiAgbGV0IHZhbHVlcyA9IFtdO1xuICBsZXQgbWF4VmFsdWUgPSAwO1xuICBjb25zdCBmcm9tID0gcGFyYW1zLmZyb207XG4gIGNvbnN0IHJldmVyc2VkID0gcGFyYW1zLnJldmVyc2VkO1xuICBjb25zdCBlYXNlID0gcGFyYW1zLmVhc2U7XG4gIGNvbnN0IGhhc0Vhc2luZyA9ICFpc1VuZChlYXNlKTtcbiAgY29uc3QgaGFzU3ByaW5nID0gaGFzRWFzaW5nICYmICFpc1VuZCgvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSk7XG4gIGNvbnN0IHN0YWdnZXJFYXNlID0gaGFzU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UgOiBoYXNFYXNpbmcgPyBwYXJzZUVhc2luZ3MoZWFzZSkgOiBudWxsO1xuICBjb25zdCBncmlkID0gcGFyYW1zLmdyaWQ7XG4gIGNvbnN0IGF4aXMgPSBwYXJhbXMuYXhpcztcbiAgY29uc3QgZnJvbUZpcnN0ID0gaXNVbmQoZnJvbSkgfHwgZnJvbSA9PT0gMCB8fCBmcm9tID09PSAnZmlyc3QnO1xuICBjb25zdCBmcm9tQ2VudGVyID0gZnJvbSA9PT0gJ2NlbnRlcic7XG4gIGNvbnN0IGZyb21MYXN0ID0gZnJvbSA9PT0gJ2xhc3QnO1xuICBjb25zdCBpc1JhbmdlID0gaXNBcnIodmFsKTtcbiAgY29uc3QgdmFsMSA9IGlzUmFuZ2UgPyBwYXJzZU51bWJlcih2YWxbMF0pIDogcGFyc2VOdW1iZXIodmFsKTtcbiAgY29uc3QgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZU51bWJlcih2YWxbMV0pIDogMDtcbiAgY29uc3QgdW5pdE1hdGNoID0gdW5pdHNFeGVjUmd4LmV4ZWMoKGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpICsgZW1wdHlTdHJpbmcpO1xuICBjb25zdCBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XG4gIGxldCBmcm9tSW5kZXggPSBmcm9tRmlyc3QgPyAwIDogaXNOdW0oZnJvbSkgPyBmcm9tIDogMDtcbiAgcmV0dXJuIChfLCBpLCB0LCB0bCkgPT4ge1xuICAgIGlmIChmcm9tQ2VudGVyKSBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjtcbiAgICBpZiAoZnJvbUxhc3QpIGZyb21JbmRleCA9IHQgLSAxO1xuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCFncmlkKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZnJvbVggPSAhZnJvbUNlbnRlciA/IGZyb21JbmRleCAlIGdyaWRbMF0gOiAoZ3JpZFswXSAtIDEpIC8gMjtcbiAgICAgICAgICBjb25zdCBmcm9tWSA9ICFmcm9tQ2VudGVyID8gZmxvb3IoZnJvbUluZGV4IC8gZ3JpZFswXSkgOiAoZ3JpZFsxXSAtIDEpIC8gMjtcbiAgICAgICAgICBjb25zdCB0b1ggPSBpbmRleCAlIGdyaWRbMF07XG4gICAgICAgICAgY29uc3QgdG9ZID0gZmxvb3IoaW5kZXggLyBncmlkWzBdKTtcbiAgICAgICAgICBjb25zdCBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcbiAgICAgICAgICBjb25zdCBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBzcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd4JykgdmFsdWUgPSAtZGlzdGFuY2VYO1xuICAgICAgICAgIGlmIChheGlzID09PSAneScpIHZhbHVlID0gLWRpc3RhbmNlWTtcbiAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFsdWUgPSBtYXgoLi4udmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGFnZ2VyRWFzZSkgdmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4gc3RhZ2dlckVhc2UodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWUpO1xuICAgICAgaWYgKHJldmVyc2VkKSB2YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbCA9PiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogYWJzKG1heFZhbHVlIC0gdmFsKSk7XG4gICAgfVxuICAgIGNvbnN0IHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcbiAgICBjb25zdCBvZmZzZXQgPSB0bCA/IHBhcnNlVGltZWxpbmVQb3NpdGlvbih0bCwgaXNVbmQocGFyYW1zLnN0YXJ0KSA/IHRsLml0ZXJhdGlvbkR1cmF0aW9uIDogc3RhcnQpIDogLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHN0YXJ0KTtcbiAgICAvKiogQHR5cGUge1N0cmluZ3xOdW1iZXJ9ICovXG4gICAgbGV0IG91dHB1dCA9IG9mZnNldCArICgoc3BhY2luZyAqIHJvdW5kKHZhbHVlc1tpXSwgMikpIHx8IDApO1xuICAgIGlmIChwYXJhbXMubW9kaWZpZXIpIG91dHB1dCA9IHBhcmFtcy5tb2RpZmllcihvdXRwdXQpO1xuICAgIGlmICh1bml0TWF0Y2gpIG91dHB1dCA9IGAke291dHB1dH0ke3VuaXRNYXRjaFsyXX1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn07XG5cbmV4cG9ydCB7IEFuaW1hdGFibGUsIERyYWdnYWJsZSwgSlNBbmltYXRpb24sIFNjb3BlLCBTY3JvbGxPYnNlcnZlciwgU3ByaW5nLCBUaW1lbGluZSwgVGltZXIsIFdBQVBJQW5pbWF0aW9uLCBhbmltYXRlLCBjcmVhdGVBbmltYXRhYmxlLCBjcmVhdGVEcmFnZ2FibGUsIGNyZWF0ZVNjb3BlLCBjcmVhdGVTcHJpbmcsIGNyZWF0ZVRpbWVsaW5lLCBjcmVhdGVUaW1lciwgZWFzZXMsIGVuZ2luZSwgb25TY3JvbGwsIHNjcm9sbENvbnRhaW5lcnMsIHN0YWdnZXIsIHN2ZywgdXRpbHMsIHdhYXBpIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFuaW1hdGUsIHdhYXBpLCBzdGFnZ2VyLCB1dGlscywgY3JlYXRlU2NvcGUgfSBmcm9tICdhbmltZWpzJztcblxuZnVuY3Rpb24gYWRkSXRlbSgpIHtcbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfYXJlYScpO1xuICBsZXQgdmFsdWUgPSBhcmVhLnZhbHVlO1xuXG4gIGlmICh2YWx1ZSA9PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHZhbHVlICsgJyAgMScpO1xuXG4gIGxldCBhbmltZV9hcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1lX2FyZWEnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSAnb25lJztcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdmFsdWVbaV07XG4gICAgYW5pbWVfYXJlYS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxuXG4gIGFuaW1hdGUoJ3NwYW4nLCB7XG4gICAgeTogW1xuICAgICAgeyB0bzogJy0yLjc1cmVtJywgZWFzZTogJ291dEV4cG8nLCBkdXJhdGlvbjogNjAwIH0sXG4gICAgICB7IHRvOiAwLCBlYXNlOiAnb3V0Qm91bmNlJywgZHVyYXRpb246IDgwMCwgZGVsYXk6IDEwMCB9LFxuICAgIF0sXG4gICAgLy8gUHJvcGVydHkgc3BlY2lmaWMgcGFyYW1ldGVyc1xuICAgIHJvdGF0ZToge1xuICAgICAgZnJvbTogJy0xdHVybicsXG4gICAgICBkZWxheTogMCxcbiAgICB9LFxuICAgIGRlbGF5OiAoXywgaSkgPT4gaSAqIDUwLCAvLyBGdW5jdGlvbiBiYXNlZCB2YWx1ZVxuICAgIGVhc2U6ICdpbk91dENpcmMnLFxuICAgIGxvb3BEZWxheTogMTAwMCxcbiAgICBsb29wOiB0cnVlLFxuICB9KTtcblxuICB3YWFwaS5hbmltYXRlKCcub25lJywge1xuICAgIHRyYW5zbGF0ZTogYDAgLTJyZW1gLFxuICAgIGRlbGF5OiBzdGFnZ2VyKDEwMCksXG4gICAgZHVyYXRpb246IDYwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgICBlYXNlOiAnaW5PdXQoMiknLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSXRlbTIoKSB7XG4gIGxldCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X2FyZWEnKTtcbiAgbGV0IHZhbHVlID0gYXJlYS52YWx1ZTtcblxuICBpZiAodmFsdWUgPT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyh2YWx1ZSArICcgIDInKTtcblxuICBsZXQgYW5pbWVfYXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltZV9hcmVhJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3R3byc7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgYW5pbWVfYXJlYS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbiAgd2FhcGkuYW5pbWF0ZSgnLnR3bycsIHtcbiAgICB0cmFuc2xhdGU6ICcxN3JlbScsXG4gICAgZGVsYXk6IHN0YWdnZXIoMTAwKSxcbiAgICBsb29wOiB0cnVlLFxuICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgfSk7XG59XG5cbmxldCBhbmltZV9qdWRnbWVudCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBhZGRJdGVtMygpIHtcbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfYXJlYScpO1xuICBsZXQgdmFsdWUgPSBhcmVhLnZhbHVlO1xuXG4gIGlmICh2YWx1ZSA9PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHZhbHVlICsgJyAgMycpO1xuXG4gIGxldCBhbmltZV9hcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1lX2FyZWEnKTtcblxuICBpZiAoYW5pbWVfanVkZ21lbnQgPT0gZmFsc2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NOYW1lID0gJ3RocmVlJztcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgYW5pbWVfYXJlYS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICBhbmltZV9qdWRnbWVudCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoYW5pbWVfanVkZ21lbnQgPT0gdHJ1ZSkge1xuICAgIHV0aWxzLnNldCgnLnRocmVlJywge1xuICAgICAgeDogKCkgPT4gdXRpbHMucmFuZG9tKDAsIDIwKSArICdyZW0nLFxuICAgICAgcm90YXRlOiAoKSA9PiB1dGlscy5yYW5kb20oMCwgMTgwKSxcbiAgICAgIHNjYWxlOiAoKSA9PiB1dGlscy5yYW5kb20oMC4yNSwgMSwgMyksXG4gICAgfSk7XG5cbiAgICBhbmltZV9qdWRnbWVudCA9IGZhbHNlO1xuICB9XG4gIGFuaW1hdGUoJy50aHJlZScsIHtcbiAgICB5OiBzdGFnZ2VyKFsnLTEuMjNyZW0nLCAnMXJlbSddKSxcbiAgICByb3RhdGU6IHsgZnJvbTogc3RhZ2dlcignLS4xMjV0dXJuJykgfSxcbiAgICBsb29wOiAxLFxuICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW00KCkge1xuICBsZXQgYXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9hcmVhJyk7XG4gIGxldCB2YWx1ZSA9IGFyZWEudmFsdWU7XG5cbiAgaWYgKHZhbHVlID09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2codmFsdWUgKyAnICA0Jyk7XG5cbiAgbGV0IGFuaW1lX2FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWVfYXJlYScpO1xuXG4gIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSAnZm91cic7XG4gIGRpdi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICBzcXVhcmUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgYW5pbWVfYXJlYS5hcHBlbmRDaGlsZChzcXVhcmUpO1xuXG4gIGNyZWF0ZVNjb3BlKHsgcm9vdDogJy5yb3c6bnRoLWNoaWxkKDIpJyB9KS5hZGQoKCkgPT4ge1xuICAgIGFuaW1hdGUoJy5zcXVhcmUnLCB7XG4gICAgICB4OiAnNDVyZW0nLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIOODnOOCv+ODs++8kVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEl0ZW0pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24yJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRJdGVtMik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ1dHRvbjMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEl0ZW0zKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uNCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkSXRlbTQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9