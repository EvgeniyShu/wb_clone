// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"EMKo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCardTable = createCardTable;
exports.createHtmlElement = createHtmlElement;
var _index = require("./index.js");
function createHtmlElement(div, text, className) {
  var result = document.createElement(div);
  result.append(document.createTextNode(text));
  result.classList.add(className);
  return result;
}
function createCardTable() {
  var recomendationGoodsTable = createHtmlElement('div', '', 'recomendations__card-wrap');
  for (var i = 0; i < 15; i++) {
    (0, _index.createCard)(recomendationGoodsTable);
  }
  _index.recomendationsCardsWrap.append(recomendationGoodsTable);
}
},{"./index.js":"QvaY"}],"NcgF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardInPopup = cardInPopup;
exports.createShopingCart = createShopingCart;
var _index = require("./index.js");
var _helper = require("./helper.js");
function createShopingCart(popup, arr) {
  var header = (0, _helper.createHtmlElement)('h2', 'Корзина', 'h2');
  var container = (0, _helper.createHtmlElement)('div', '', 'cart_wrap');
  var sum = 0;
  arr.forEach(function (elem) {
    var count = 1;
    var id = elem.id,
      img = elem.image,
      name = elem.name,
      price = elem.price;
    var goodsWrap = (0, _helper.createHtmlElement)('div', '', 'goods_wrap');
    var image = (0, _helper.createHtmlElement)('img', "", 'image_small');
    image.src = "".concat(img);
    var idOfGoods = (0, _helper.createHtmlElement)('div', "\u043D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(id), 'div');
    var nameOfGood = (0, _helper.createHtmlElement)('div', "".concat(name), 'cart__name');
    var priceOfGood = (0, _helper.createHtmlElement)('div', "".concat(price), 'cart__price');
    var amount = (0, _helper.createHtmlElement)('div', '', 'buttons_wrap');
    var buttonMinus = (0, _helper.createHtmlElement)('button', '-', 'button');
    var numberOfGoods = (0, _helper.createHtmlElement)('div', '', 'div');
    var buttonPlus = (0, _helper.createHtmlElement)('button', '+', 'button');
    numberOfGoods.innerText = count;
    amount.append(buttonMinus, numberOfGoods, buttonPlus);
    goodsWrap.append(image, idOfGoods, nameOfGood, amount, priceOfGood);
    container.append(goodsWrap);
    sum += Number(price.slice(0, -7));
    buttonMinus.addEventListener('click', function () {
      if (count > 1) {
        count--;
        numberOfGoods.innerText = count;
        priceOfGood.innerText = count * Number(price.slice(0, -7)) + '.00 руб';
        countAllAmount(totalAmount, -Number(price.slice(0, -7)));
      }
    });
    buttonPlus.addEventListener('click', function () {
      if (count < 10) {
        count++;
        numberOfGoods.innerText = count;
        priceOfGood.innerText = count * Number(price.slice(0, -7)) + '.00 руб';
        countAllAmount(totalAmount, Number(price.slice(0, -7)));
      }
    });
  });
  var totalAmount = (0, _helper.createHtmlElement)('div', 'Итого: 0.00 руб', 'div');
  function countAllAmount(elem, amount) {
    sum += amount;
    elem.innerText = "\u0418\u0442\u043E\u0433\u043E: ".concat(sum, ".00 \u0440\u0443\u0431");
  }
  totalAmount.innerText = "\u0418\u0442\u043E\u0433\u043E: ".concat(sum, ".00 \u0440\u0443\u0431");
  var button = (0, _helper.createHtmlElement)('button', 'убрать все товары', 'button');
  popup.append(header, container, totalAmount, button);
  button.addEventListener('click', function (shoppingCartArr) {
    container.innerHTML = '';
    shoppingCartArr = [];
    localStorage.setItem('shopingCart', JSON.stringify(shoppingCartArr));
  });
}
function cardInPopup(popup, id) {
  (0, _index.promise)(id).then(function (_ref) {
    var name = _ref.name,
      price = _ref.price,
      image = _ref.image,
      id = _ref.id;
    return createPopupText(name, price, image, id, popup);
  });
  function createPopupText(name, price, image, id, parrent) {
    var popupWrap = (0, _helper.createHtmlElement)('div', '', 'popup_wrap');
    var img = (0, _helper.createHtmlElement)('img', '', 'image-popup');
    var namediv = (0, _helper.createHtmlElement)('div', "".concat(name), 'name');
    var pricediv = (0, _helper.createHtmlElement)('div', "".concat(price, " \u0440\u0443\u0431"), 'price');
    var shoppingCartButton = (0, _helper.createHtmlElement)('button', 'В корзину', 'button-blue');
    var productDescription = (0, _helper.createHtmlElement)('div', 'Коротко о товаре: Продукт является самой важной инновацией и имеет лучшее качество. Преимущество этого продукта в том, что он предлагает лучшее из лучшего с точки зрения качества и инноваций.', 'div');
    img.src = "".concat(image);
    img.id = id + 'img';
    namediv.id = id + 'n';
    pricediv.id = id + 'pr';
    shoppingCartButton.id = id;
    shoppingCartButton.addEventListener('click', _index.clickOnCartButton);
    popupWrap.append(img, namediv, pricediv, shoppingCartButton, productDescription);
    parrent.append(popupWrap);
  }
}
},{"./index.js":"QvaY","./helper.js":"EMKo"}],"wzuc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.slider = void 0;
var _helper = require("./helper.js");
var slider = (0, _helper.createHtmlElement)('div', '', 'slider');
exports.slider = slider;
var sliderLine = (0, _helper.createHtmlElement)('div', '', 'slider-line');
var bunnerImg1 = (0, _helper.createHtmlElement)('img', '', 'bunner__img');
var bunnerImg2 = (0, _helper.createHtmlElement)('img', '', 'bunner__img');
var bunnerImg3 = (0, _helper.createHtmlElement)('img', '', 'bunner__img');
var sliderPrev = (0, _helper.createHtmlElement)('button', '«', 'button__prev');
var sliderNext = (0, _helper.createHtmlElement)('button', '»', 'button__next');
var linkWrap = (0, _helper.createHtmlElement)('div', '', 'link-wrap');
var link1 = (0, _helper.createHtmlElement)('div', '', 'point');
var link2 = (0, _helper.createHtmlElement)('div', '', 'point');
var link3 = (0, _helper.createHtmlElement)('div', '', 'point');
link1.classList.add('active');
bunnerImg1.src = 'https://loremflickr.com/640/480/abstract';
bunnerImg2.src = 'https://loremflickr.com/640/480/city';
bunnerImg3.src = 'https://loremflickr.com/640/480/technics';
slider.append(sliderLine, sliderPrev, sliderNext, linkWrap);
sliderLine.append(bunnerImg1, bunnerImg2, bunnerImg3);
linkWrap.append(link1, link2, link3);
var count = 0;
var width;
function activePoint(count) {
  switch (count) {
    case 0:
      link1.classList.add('active');
      link2.classList.remove('active');
      link3.classList.remove('active');
      break;
    case 1:
      link1.classList.remove('active');
      link2.classList.add('active');
      link3.classList.remove('active');
      break;
    case 2:
      link1.classList.remove('active');
      link2.classList.remove('active');
      link3.classList.add('active');
      break;
  }
}
function init() {
  width = slider.offsetWidth;
  sliderLine.style.width = width * 3 + 'px';
  bunnerImg1.style.width = width + 'px';
  bunnerImg1.style.height = '400px';
  bunnerImg2.style.width = width + 'px';
  bunnerImg2.style.height = '400px';
  bunnerImg3.style.width = width + 'px';
  bunnerImg3.style.height = '400px';
  rollSlider();
}
sliderPrev.addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = 2;
  }
  rollSlider();
  activePoint(count);
});
sliderNext.addEventListener('click', function () {
  count++;
  console.log(count);
  if (count >= 3) {
    count = 0;
  }
  rollSlider();
  activePoint(count);
});
function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
},{"./helper.js":"EMKo"}],"Z9mi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aside = void 0;
var _helper = require("./helper.js");
var aside = (0, _helper.createHtmlElement)('aside', '', 'aside');
exports.aside = aside;
var link1 = (0, _helper.createHtmlElement)('p', 'Женщинам', 'aside__p');
var link2 = (0, _helper.createHtmlElement)('p', 'Обувь', 'aside__p');
var link3 = (0, _helper.createHtmlElement)('p', 'Детям', 'aside__p');
var link4 = (0, _helper.createHtmlElement)('p', 'Дом', 'aside__p');
var link5 = (0, _helper.createHtmlElement)('p', 'Красота', 'aside__p');
var link6 = (0, _helper.createHtmlElement)('p', 'Аксессуары', 'aside__p');
var link7 = (0, _helper.createHtmlElement)('p', 'Электроника', 'aside__p');
var link8 = (0, _helper.createHtmlElement)('p', 'Игрушки', 'aside__p');
var link9 = (0, _helper.createHtmlElement)('p', 'Мебель', 'aside__p');
var link10 = (0, _helper.createHtmlElement)('p', 'Товары для взрослых', 'aside__p');
var link11 = (0, _helper.createHtmlElement)('p', 'Продукты', 'aside__p');
var link12 = (0, _helper.createHtmlElement)('p', 'Бытовая техника', 'aside__p');
var link13 = (0, _helper.createHtmlElement)('p', 'Зоотовары', 'aside__p');
var link14 = (0, _helper.createHtmlElement)('p', 'Спорт', 'aside__p');
var link15 = (0, _helper.createHtmlElement)('p', 'Автотовары', 'aside__p');
var link16 = (0, _helper.createHtmlElement)('p', 'Книги', 'aside__p');
var link17 = (0, _helper.createHtmlElement)('p', 'Для ремонта', 'aside__p');
var link18 = (0, _helper.createHtmlElement)('p', 'Сад и дача', 'aside__p');
var link19 = (0, _helper.createHtmlElement)('p', 'Здоровье', 'aside__p');
var link20 = (0, _helper.createHtmlElement)('p', 'Канцтовары', 'aside__p');
aside.append(link1, link2, link3, link4, link5, link6, link7, link8, link9, link10, link11, link1, link13, link14, link15, link16, link17, link18, link19, link20);
},{"./helper.js":"EMKo"}],"QvaY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clickOnCartButton = clickOnCartButton;
exports.shoppingCartArr = exports.recomendationsCardsWrap = exports.promise = exports.popup = exports.createCard = void 0;
var _helper = require("./helper.js");
var _popup = require("./popup.js");
var _slider = require("./slider.js");
var _aside = require("./aside.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var root = document.getElementById('root');
var header = (0, _helper.createHtmlElement)('header', '', 'header');
var radius = (0, _helper.createHtmlElement)('div', '', 'radius');
var main = (0, _helper.createHtmlElement)('main', '', 'main');
var radiusEnd = (0, _helper.createHtmlElement)('div', '', 'radius-end');
var footer = (0, _helper.createHtmlElement)('footer', 'картинки не соответствуют товару', 'footer');
var container = (0, _helper.createHtmlElement)('div', '', 'container');
var headerWrap = (0, _helper.createHtmlElement)('div', '', 'header-wrap');
var burgerMenu = (0, _helper.createHtmlElement)('label', '', 'burger-menu');
var burgerMenuIcon = (0, _helper.createHtmlElement)('span', '', 'burger-menu__icon');
var burgerMenuInput = (0, _helper.createHtmlElement)('input', '', 'none');
var logo = (0, _helper.createHtmlElement)('div', 'wrongberries', 'logo');
var search = (0, _helper.createHtmlElement)('div', '', 'search');
var searchIcon = (0, _helper.createHtmlElement)('div', '', 'search__icon');
var inputWrap = (0, _helper.createHtmlElement)('div', '', 'input-wrap');
var input = (0, _helper.createHtmlElement)('input', '', 'input');
var clearBtn = (0, _helper.createHtmlElement)('span', '', 'clear');
var shoppingCartWrap = (0, _helper.createHtmlElement)('div', '', 'shoping-cart');
var shoppingCartIcon = (0, _helper.createHtmlElement)('div', '', 'shoping-cart__icon');
var shoppingCartText = (0, _helper.createHtmlElement)('p', 'корзина', 'shoping-cart__p');
var sectionBunner = (0, _helper.createHtmlElement)('section', '', 'section_bunner');
var sectionRecomendations = (0, _helper.createHtmlElement)('section', '', 'section_recomendations');
var recomendationsHeader = (0, _helper.createHtmlElement)('h2', 'Хит продаж', 'recomendations__h2');
var recomendationsCardsWrap = (0, _helper.createHtmlElement)('div', '', 'container');
exports.recomendationsCardsWrap = recomendationsCardsWrap;
var button = (0, _helper.createHtmlElement)('button', 'Показать ещё', 'button');
recomendationsHeader.classList.add('container');
var popupBackground = (0, _helper.createHtmlElement)('div', '', 'popup__bg');
var popup = (0, _helper.createHtmlElement)('div', '', 'popup');
exports.popup = popup;
var popupClose = (0, _helper.createHtmlElement)('div', 'X', 'popup__close');
popup.append(popupClose);
popupBackground.append(popup);
input.type = 'text';
input.placeholder = " Я ищу...";
root.append(header, radius, main, radiusEnd, footer, popupBackground);
header.append(container);
container.append(headerWrap);
headerWrap.append(burgerMenu, logo, search, shoppingCartWrap);
burgerMenu.append(burgerMenuIcon);
search.append(searchIcon, inputWrap, clearBtn);
inputWrap.append(input);
shoppingCartWrap.append(shoppingCartIcon, shoppingCartText);
burgerMenuInput.type = 'checkbox';
burgerMenu.htmlFor = 'menu';
burgerMenuInput.id = 'menu';
main.append(burgerMenuInput);
main.append(_aside.aside);
main.append(sectionBunner, sectionRecomendations);
sectionBunner.append(_slider.slider);
sectionRecomendations.append(recomendationsHeader, recomendationsCardsWrap, button);
var shoppingCartArr = [];
exports.shoppingCartArr = shoppingCartArr;
var shoppingCartFromStorage = localStorage.getItem('shopingCart');
if (!shoppingCartFromStorage) {
  exports.shoppingCartArr = shoppingCartArr = [];
} else {
  exports.shoppingCartArr = shoppingCartArr = JSON.parse(shoppingCartFromStorage);
}
var promise = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
    var response, goods;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://643266bbd0127730d2d1b9f0.mockapi.io/market/".concat(id));
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          goods = _context.sent;
          return _context.abrupt("return", goods);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function promise(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.promise = promise;
var createCard = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(parent) {
    var card, id;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          card = (0, _helper.createHtmlElement)('div', '', 'card');
          id = Math.floor(Math.random() * 37 + 1);
          _context2.next = 4;
          return promise(id).then(function (_ref3) {
            var name = _ref3.name,
              price = _ref3.price,
              image = _ref3.image,
              id = _ref3.id;
            return createText(name, price, image, id, card);
          });
        case 4:
          //namediv.innerText = name;
          parent.append(card);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createCard(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createCard = createCard;
function createText(name, price, image, id, parrent) {
  var cardWrap = (0, _helper.createHtmlElement)('div', '', 'card-wrap');
  var img = (0, _helper.createHtmlElement)('img', '', 'image');
  var namediv = (0, _helper.createHtmlElement)('div', "".concat(name), 'name');
  var pricediv = (0, _helper.createHtmlElement)('div', "".concat(price, " \u0440\u0443\u0431"), 'price');
  var shoppingCartButton = (0, _helper.createHtmlElement)('button', 'В корзину', 'button-blue');
  img.src = "".concat(image);
  img.id = id + 'img';
  namediv.id = id + 'n';
  pricediv.id = id + 'pr';
  shoppingCartButton.id = id;
  shoppingCartButton.addEventListener('click', clickOnCartButton);
  cardWrap.append(img, namediv, pricediv, shoppingCartButton);
  cardWrap.addEventListener('click', handleClick);
  parrent.append(cardWrap);
}
function clickOnCartButton(event) {
  if (event.target.classList.contains('button-blue')) {
    var id = event.target.id;
    var image = document.getElementById("".concat(id, "img")).currentSrc;
    var name = document.getElementById("".concat(id, "n")).textContent;
    var price = document.getElementById("".concat(id, "pr")).textContent;
    shoppingCartArr.push({
      id: id,
      image: image,
      name: name,
      price: price
    });
    localStorage.setItem('shopingCart', JSON.stringify(shoppingCartArr));
  }
}
function clearInput() {
  input.value = '';
  clearBtn.classList.remove('active');
}
var handleClick = function handleClick(event) {
  if (event.target.classList.contains('button')) {
    _helper.createCardTable;
    return;
  }
  if (event.target.type === 'text') {
    console.log(event.target.nextElementSibling);
    event.target.parentElement.nextElementSibling.classList.add('active');
  }
  if (event.target.classList === 'clear') {
    clearInput;
  }
  if (event.target.classList.contains('search__icon')) {
    if (window.screen.width <= 770 || document.documentElement.scrollWidth <= 770) {
      logo.classList.toggle('none');
      search.classList.toggle('visible');
    } else {
      logo.classList.remove('none');
      search.classList.remove('visible');
    }
  }
  if (event.currentTarget.classList.contains('shoping-cart')) {
    event.preventDefault();
    popupBackground.classList.add('active');
    popup.classList.add('active');
    (0, _popup.createShopingCart)(popup, shoppingCartArr);
  }
  if (event.target.classList.contains('popup__close')) {
    event.preventDefault();
    popupBackground.classList.remove('active');
    popup.classList.remove('active');
    popup.innerText = '';
    popup.append(popupClose);
  }
  if (event.target.classList.contains('popup__bg')) {
    popupBackground.classList.remove('active');
    popup.classList.remove('active');
    popup.innerText = '';
    popup.append(popupClose);
  }
  if (event.currentTarget.classList.contains('card-wrap')) {
    event.preventDefault();
    console.log(event.target);
    var id = event.currentTarget.lastChild.id;
    popupBackground.classList.add('active');
    popup.classList.add('active');
    (0, _popup.cardInPopup)(popup, id);
  }
};
window.addEventListener('resize', _slider.init);
(0, _slider.init)();
(0, _helper.createCardTable)();
button.addEventListener('click', _helper.createCardTable);
clearBtn.addEventListener('click', clearInput);
shoppingCartWrap.addEventListener('click', handleClick);
root.addEventListener('click', handleClick);
},{"./helper.js":"EMKo","./popup.js":"NcgF","./slider.js":"wzuc","./aside.js":"Z9mi"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.5fa85035.js.map