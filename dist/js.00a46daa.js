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
})({"js/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bunner = void 0;
var root = document.getElementById('root');
var header = createHtmlElement('header', '', 'header');
var radius = createHtmlElement('div', '', 'radius');
var main = createHtmlElement('main', '', 'main');
var radiusEnd = createHtmlElement('div', '', 'radius-end');
var footer = createHtmlElement('footer', 'footer', 'footer');
var container = createHtmlElement('div', '', 'container');
var headerWrap = createHtmlElement('div', '', 'header-wrap');
var burgerMenu = createHtmlElement('label', '', 'burger-menu');
var burgerMenuIcon = createHtmlElement('span', '', 'burger-menu__icon');
var burgerMenuInput = createHtmlElement('input', '', 'none');
var logo = createHtmlElement('div', 'wrongberries', 'logo');
var search = createHtmlElement('div', '', 'search');
var searchIcon = createHtmlElement('div', '', 'search__icon');
var inputWrap = createHtmlElement('div', '', 'input-wrap');
var input = createHtmlElement('input', '', 'input');
var clearBtn = createHtmlElement('span', '', 'clear');
var shoppingCartWrap = createHtmlElement('div', '', 'shoping-cart');
var shoppingCartIcon = createHtmlElement('div', '', 'shoping-cart__icon');
var shoppingCartText = createHtmlElement('p', 'корзина', 'shoping-cart__p');
var aside = createHtmlElement('aside', '', 'aside');
var sectionBunner = createHtmlElement('section', '', 'section_bunner');
var bunner = createHtmlElement('div', '', 'bunner');
exports.bunner = bunner;
var sectionRecomendations = createHtmlElement('section', '', 'section_recomendations');
var recomendationsHeader = createHtmlElement('h2', 'Хит продаж', 'recomendations__h2');
var recomendationsCardsWrap = createHtmlElement('div', '', 'container');
var button = createHtmlElement('button', 'Показать ещё', 'button');
recomendationsHeader.classList.add('container');
var popupBackground = createHtmlElement('div', '', 'popup__bg');
var popup = createHtmlElement('div', '', 'popup');
var popupClose = createHtmlElement('div', 'X', 'popup__close');
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
main.append(aside);
main.append(sectionBunner, sectionRecomendations);
sectionBunner.append(bunner);
sectionRecomendations.append(recomendationsHeader, recomendationsCardsWrap, button);
function createHtmlElement(div, text, className) {
  var result = document.createElement(div);
  result.append(document.createTextNode(text));
  result.classList.add(className);
  return result;
}
function createCardTable() {
  var recomendationGoodsTable = createHtmlElement('div', '', 'recomendations__card-wrap');
  for (var i = 0; i < 15; i++) {
    var card = createHtmlElement('div', '', 'card');
    recomendationGoodsTable.append(card);
  }
  recomendationsCardsWrap.append(recomendationGoodsTable);
}

//function createCard(){
//  const card = createHtmlElement('div', '', 'card');
//  recomendationGoodsTable.append(card);
//}

function clearInput() {
  input.value = '';
  clearBtn.classList.remove('active');
}
var handleClick = function handleClick(event) {
  if (event.target.classList.contains('button')) {
    createCardTable;
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
  }
  if (event.target.classList.contains('popup__close')) {
    event.preventDefault();
    popupBackground.classList.remove('active');
    popup.classList.remove('active');
  }
  if (event.target.classList.contains('popup__bg')) {
    popupBackground.classList.remove('active');
    popup.classList.remove('active');
  }
};
createCardTable();
button.addEventListener('click', createCardTable);
//input.addEventListener('click', handleClick);
clearBtn.addEventListener('click', clearInput);
//searchIcon.addEventListener('click', handleClick)
shoppingCartWrap.addEventListener('click', handleClick);
//popupClose.addEventListener('click', handleClick)
root.addEventListener('click', handleClick);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54566" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map