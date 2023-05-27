// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fp5lG":[function(require,module,exports) {
var Refresh = require("bd85c49f3d16afa9");
var ErrorOverlay = require("92e46ac85047e967");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"bd85c49f3d16afa9":"9Svz8","92e46ac85047e967":"9rQAZ"}],"4guCf":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "916932b22e4085ab";
module.bundle.HMR_BUNDLE_ID = "5bcb3e72eccc3ca8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"g7EVD":[function(require,module,exports) {
var _getRoomSlug = require("./utils/getRoomSlug");
var _defaultRooms = require("../api/defaultRooms");
var _socketIo = require("socket.io-client/dist/socket.io");
const roomSlug = (0, _getRoomSlug.getRoomSlug)();
if (roomSlug === false) return;
// window.addEventListener( "load", initSocket );
function initSocket() {
    console.log("initializing socket object");
    if ((0, _defaultRooms.defaultRooms).map((room)=>room.slug).includes(roomSlug)) {
        var socket = _socketIo(`/${roomSlug}`);
        console.log("socket main", socket);
        const eventSocketCreated = new CustomEvent("socketCreated", {
            detail: {
                socket: socket
            }
        });
        window.socket = socket;
        document.dispatchEvent(eventSocketCreated);
    }
}
initSocket();

},{"./utils/getRoomSlug":"gra5i","../api/defaultRooms":"ezO9N","socket.io-client/dist/socket.io":"3hHne"}],"3hHne":[function(require,module,exports) {
/*!
 * Socket.IO v4.6.1
 * (c) 2014-2023 Guillermo Rauch
 * Released under the MIT License.
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
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
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        Object.defineProperty(subClass, "prototype", {
            writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
        else _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return _construct.apply(null, arguments);
    }
    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;
            if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }
            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };
        return _wrapNativeSuper(Class);
    }
    function _assertThisInitialized(self1) {
        if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self1;
    }
    function _possibleConstructorReturn(self1, call) {
        if (call && (typeof call === "object" || typeof call === "function")) return call;
        else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return _assertThisInitialized(self1);
    }
    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result);
        };
    }
    function _superPropBase(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }
    function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get.bind();
        else _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
            return desc.value;
        };
        return _get.apply(this, arguments);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;
                var F = function() {};
                return {
                    s: F,
                    n: function() {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return {
            s: function() {
                it = it.call(o);
            },
            n: function() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function(e) {
                didErr = true;
                err = e;
            },
            f: function() {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally{
                    if (didErr) throw err;
                }
            }
        };
    }
    var PACKET_TYPES = Object.create(null); // no Map = no polyfill
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    var PACKET_TYPES_REVERSE = Object.create(null);
    Object.keys(PACKET_TYPES).forEach(function(key) {
        PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    var ERROR_PACKET = {
        type: "error",
        data: "parser error"
    };
    var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
    var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10
    var isView$1 = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    };
    var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
        var type = _ref.type, data = _ref.data;
        if (withNativeBlob$1 && data instanceof Blob) {
            if (supportsBinary) return callback(data);
            else return encodeBlobAsBase64(data, callback);
        } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
            if (supportsBinary) return callback(data);
            else return encodeBlobAsBase64(new Blob([
                data
            ]), callback);
        } // plain string
        return callback(PACKET_TYPES[type] + (data || ""));
    };
    var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
        var fileReader = new FileReader();
        fileReader.onload = function() {
            var content = fileReader.result.split(",")[1];
            callback("b" + content);
        };
        return fileReader.readAsDataURL(data);
    };
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; // Use a lookup table to find the index.
    var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for(var i$1 = 0; i$1 < chars.length; i$1++)lookup$1[chars.charCodeAt(i$1)] = i$1;
    var decode$1 = function decode(base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") bufferLength--;
        }
        var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
        for(i = 0; i < len; i += 4){
            encoded1 = lookup$1[base64.charCodeAt(i)];
            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
    };
    var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
    var decodePacket = function decodePacket(encodedPacket, binaryType) {
        if (typeof encodedPacket !== "string") return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
        var type = encodedPacket.charAt(0);
        if (type === "b") return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
        var packetType = PACKET_TYPES_REVERSE[type];
        if (!packetType) return ERROR_PACKET;
        return encodedPacket.length > 1 ? {
            type: PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1)
        } : {
            type: PACKET_TYPES_REVERSE[type]
        };
    };
    var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
        if (withNativeArrayBuffer$1) {
            var decoded = decode$1(data);
            return mapBinary(decoded, binaryType);
        } else return {
            base64: true,
            data: data
        }; // fallback for old browsers
    };
    var mapBinary = function mapBinary(data, binaryType) {
        switch(binaryType){
            case "blob":
                return data instanceof ArrayBuffer ? new Blob([
                    data
                ]) : data;
            case "arraybuffer":
            default:
                return data;
        }
    };
    var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
    var encodePayload = function encodePayload(packets, callback) {
        // some packets may be added to the array while encoding, so the initial length must be saved
        var length = packets.length;
        var encodedPackets = new Array(length);
        var count = 0;
        packets.forEach(function(packet, i) {
            // force base64 encoding for binary packets
            encodePacket(packet, false, function(encodedPacket) {
                encodedPackets[i] = encodedPacket;
                if (++count === length) callback(encodedPackets.join(SEPARATOR));
            });
        });
    };
    var decodePayload = function decodePayload(encodedPayload, binaryType) {
        var encodedPackets = encodedPayload.split(SEPARATOR);
        var packets = [];
        for(var i = 0; i < encodedPackets.length; i++){
            var decodedPacket = decodePacket(encodedPackets[i], binaryType);
            packets.push(decodedPacket);
            if (decodedPacket.type === "error") break;
        }
        return packets;
    };
    var protocol$1 = 4;
    /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */ function Emitter(obj) {
        if (obj) return mixin(obj);
    }
    /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */ function mixin(obj) {
        for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
        return obj;
    }
    /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
        return this;
    };
    /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */ Emitter.prototype.once = function(event, fn) {
        function on() {
            this.off(event, on);
            fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
    };
    /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {}; // all
        if (0 == arguments.length) {
            this._callbacks = {};
            return this;
        } // specific event
        var callbacks = this._callbacks["$" + event];
        if (!callbacks) return this; // remove all handlers
        if (1 == arguments.length) {
            delete this._callbacks["$" + event];
            return this;
        } // remove specific handler
        var cb;
        for(var i = 0; i < callbacks.length; i++){
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1);
                break;
            }
        } // Remove event specific arrays for event types that no
        // one is subscribed for to avoid memory leak.
        if (callbacks.length === 0) delete this._callbacks["$" + event];
        return this;
    };
    /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */ Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
        for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
        }
        return this;
    }; // alias used for reserved events (protected method)
    Emitter.prototype.emitReserved = Emitter.prototype.emit;
    /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */ Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + event] || [];
    };
    /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */ Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
    };
    var globalThisShim = function() {
        if (typeof self !== "undefined") return self;
        else if (typeof window !== "undefined") return window;
        else return Function("return this")();
    }();
    function pick(obj) {
        for(var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)attr[_key - 1] = arguments[_key];
        return attr.reduce(function(acc, k) {
            if (obj.hasOwnProperty(k)) acc[k] = obj[k];
            return acc;
        }, {});
    } // Keep a reference to the real timeout functions so they can be used when overridden
    var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
    var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
    function installTimerFunctions(obj, opts) {
        if (opts.useNativeTimers) {
            obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
            obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
        } else {
            obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
            obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
        }
    } // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
    var BASE64_OVERHEAD = 1.33; // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
    function byteLength(obj) {
        if (typeof obj === "string") return utf8Length(obj);
         // arraybuffer or blob
        return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
    function utf8Length(str) {
        var c = 0, length = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 0x80) length += 1;
            else if (c < 0x800) length += 2;
            else if (c < 0xd800 || c >= 0xe000) length += 3;
            else {
                i++;
                length += 4;
            }
        }
        return length;
    }
    var TransportError = /*#__PURE__*/ function(_Error) {
        _inherits(TransportError, _Error);
        var _super = _createSuper(TransportError);
        function TransportError(reason, description, context) {
            var _this;
            _classCallCheck(this, TransportError);
            _this = _super.call(this, reason);
            _this.description = description;
            _this.context = context;
            _this.type = "TransportError";
            return _this;
        }
        return _createClass(TransportError);
    }(/*#__PURE__*/ _wrapNativeSuper(Error));
    var Transport = /*#__PURE__*/ function(_Emitter) {
        _inherits(Transport, _Emitter);
        var _super2 = _createSuper(Transport);
        /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */ function Transport(opts) {
            var _this2;
            _classCallCheck(this, Transport);
            _this2 = _super2.call(this);
            _this2.writable = false;
            installTimerFunctions(_assertThisInitialized(_this2), opts);
            _this2.opts = opts;
            _this2.query = opts.query;
            _this2.socket = opts.socket;
            return _this2;
        }
        /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */ _createClass(Transport, [
            {
                key: "onError",
                value: function onError(reason, description, context) {
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "error", new TransportError(reason, description, context));
                    return this;
                }
            },
            {
                key: "open",
                value: function open() {
                    this.readyState = "opening";
                    this.doOpen();
                    return this;
                }
            },
            {
                key: "close",
                value: function close() {
                    if (this.readyState === "opening" || this.readyState === "open") {
                        this.doClose();
                        this.onClose();
                    }
                    return this;
                }
            },
            {
                key: "send",
                value: function send(packets) {
                    if (this.readyState === "open") this.write(packets);
                }
            },
            {
                key: "onOpen",
                value: function onOpen() {
                    this.readyState = "open";
                    this.writable = true;
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "open");
                }
            },
            {
                key: "onData",
                value: function onData(data) {
                    var packet = decodePacket(data, this.socket.binaryType);
                    this.onPacket(packet);
                }
            },
            {
                key: "onPacket",
                value: function onPacket(packet) {
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "packet", packet);
                }
            },
            {
                key: "onClose",
                value: function onClose(details) {
                    this.readyState = "closed";
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "close", details);
                }
            },
            {
                key: "pause",
                value: function pause(onPause) {}
            }
        ]);
        return Transport;
    }(Emitter);
    // imported from https://github.com/unshiftio/yeast
    var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
    var seed = 0, i = 0, prev;
    /**
   * Return a string representing the specified number.
   *
   * @param {Number} num The number to convert.
   * @returns {String} The string representation of the number.
   * @api public
   */ function encode$1(num) {
        var encoded = "";
        do {
            encoded = alphabet[num % length] + encoded;
            num = Math.floor(num / length);
        }while (num > 0);
        return encoded;
    }
    /**
   * Yeast: A tiny growing id generator.
   *
   * @returns {String} A unique id.
   * @api public
   */ function yeast() {
        var now = encode$1(+new Date());
        if (now !== prev) return seed = 0, prev = now;
        return now + "." + encode$1(seed++);
    } //
    // Map each character to its index.
    //
    for(; i < length; i++)map[alphabet[i]] = i;
    // imported from https://github.com/galkn/querystring
    /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */ function encode(obj) {
        var str = "";
        for(var i in obj)if (obj.hasOwnProperty(i)) {
            if (str.length) str += "&";
            str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
        }
        return str;
    }
    /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */ function decode(qs) {
        var qry = {};
        var pairs = qs.split("&");
        for(var i = 0, l = pairs.length; i < l; i++){
            var pair = pairs[i].split("=");
            qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
    }
    // imported from https://github.com/component/has-cors
    var value = false;
    try {
        value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
    // when trying to create
    }
    var hasCORS = value;
    // browser shim for xmlhttprequest module
    function XHR(opts) {
        var xdomain = opts.xdomain; // XMLHttpRequest can be disabled on IE
        try {
            if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) return new XMLHttpRequest();
        } catch (e) {}
        if (!xdomain) try {
            return new globalThisShim[[
                "Active"
            ].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function empty() {}
    var hasXHR2 = function() {
        var xhr = new XHR({
            xdomain: false
        });
        return null != xhr.responseType;
    }();
    var Polling = /*#__PURE__*/ function(_Transport) {
        _inherits(Polling, _Transport);
        var _super = _createSuper(Polling);
        /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */ function Polling(opts) {
            var _this;
            _classCallCheck(this, Polling);
            _this = _super.call(this, opts);
            _this.polling = false;
            if (typeof location !== "undefined") {
                var isSSL = "https:" === location.protocol;
                var port = location.port; // some user agents have empty `location.port`
                if (!port) port = isSSL ? "443" : "80";
                _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
                _this.xs = opts.secure !== isSSL;
            }
            /**
       * XHR supports binary
       */ var forceBase64 = opts && opts.forceBase64;
            _this.supportsBinary = hasXHR2 && !forceBase64;
            return _this;
        }
        _createClass(Polling, [
            {
                key: "name",
                get: function get() {
                    return "polling";
                }
            },
            {
                key: "doOpen",
                value: function doOpen() {
                    this.poll();
                }
            },
            {
                key: "pause",
                value: function pause(onPause) {
                    var _this2 = this;
                    this.readyState = "pausing";
                    var pause = function pause() {
                        _this2.readyState = "paused";
                        onPause();
                    };
                    if (this.polling || !this.writable) {
                        var total = 0;
                        if (this.polling) {
                            total++;
                            this.once("pollComplete", function() {
                                --total || pause();
                            });
                        }
                        if (!this.writable) {
                            total++;
                            this.once("drain", function() {
                                --total || pause();
                            });
                        }
                    } else pause();
                }
            },
            {
                key: "poll",
                value: function poll() {
                    this.polling = true;
                    this.doPoll();
                    this.emitReserved("poll");
                }
            },
            {
                key: "onData",
                value: function onData(data) {
                    var _this3 = this;
                    var callback = function callback(packet) {
                        // if its the first message we consider the transport open
                        if ("opening" === _this3.readyState && packet.type === "open") _this3.onOpen();
                         // if its a close packet, we close the ongoing requests
                        if ("close" === packet.type) {
                            _this3.onClose({
                                description: "transport closed by the server"
                            });
                            return false;
                        } // otherwise bypass onData and handle the message
                        _this3.onPacket(packet);
                    }; // decode payload
                    decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing
                    if ("closed" !== this.readyState) {
                        // if we got data we're not polling
                        this.polling = false;
                        this.emitReserved("pollComplete");
                        if ("open" === this.readyState) this.poll();
                    }
                }
            },
            {
                key: "doClose",
                value: function doClose() {
                    var _this4 = this;
                    var close = function close() {
                        _this4.write([
                            {
                                type: "close"
                            }
                        ]);
                    };
                    if ("open" === this.readyState) close();
                    else // in case we're trying to close while
                    // handshaking is in progress (GH-164)
                    this.once("open", close);
                }
            },
            {
                key: "write",
                value: function write(packets) {
                    var _this5 = this;
                    this.writable = false;
                    encodePayload(packets, function(data) {
                        _this5.doWrite(data, function() {
                            _this5.writable = true;
                            _this5.emitReserved("drain");
                        });
                    });
                }
            },
            {
                key: "uri",
                value: function uri() {
                    var query = this.query || {};
                    var schema = this.opts.secure ? "https" : "http";
                    var port = ""; // cache busting is forced
                    if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = yeast();
                    if (!this.supportsBinary && !query.sid) query.b64 = 1;
                     // avoid port if default for schema
                    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
                    var encodedQuery = encode(query);
                    var ipv6 = this.opts.hostname.indexOf(":") !== -1;
                    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
                }
            },
            {
                key: "request",
                value: function request() {
                    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    _extends(opts, {
                        xd: this.xd,
                        xs: this.xs
                    }, this.opts);
                    return new Request(this.uri(), opts);
                }
            },
            {
                key: "doWrite",
                value: function doWrite(data, fn) {
                    var _this6 = this;
                    var req = this.request({
                        method: "POST",
                        data: data
                    });
                    req.on("success", fn);
                    req.on("error", function(xhrStatus, context) {
                        _this6.onError("xhr post error", xhrStatus, context);
                    });
                }
            },
            {
                key: "doPoll",
                value: function doPoll() {
                    var _this7 = this;
                    var req = this.request();
                    req.on("data", this.onData.bind(this));
                    req.on("error", function(xhrStatus, context) {
                        _this7.onError("xhr poll error", xhrStatus, context);
                    });
                    this.pollXhr = req;
                }
            }
        ]);
        return Polling;
    }(Transport);
    var Request = /*#__PURE__*/ function(_Emitter) {
        _inherits(Request, _Emitter);
        var _super2 = _createSuper(Request);
        /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */ function Request(uri, opts) {
            var _this8;
            _classCallCheck(this, Request);
            _this8 = _super2.call(this);
            installTimerFunctions(_assertThisInitialized(_this8), opts);
            _this8.opts = opts;
            _this8.method = opts.method || "GET";
            _this8.uri = uri;
            _this8.async = false !== opts.async;
            _this8.data = undefined !== opts.data ? opts.data : null;
            _this8.create();
            return _this8;
        }
        /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */ _createClass(Request, [
            {
                key: "create",
                value: function create() {
                    var _this9 = this;
                    var opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    opts.xdomain = !!this.opts.xd;
                    opts.xscheme = !!this.opts.xs;
                    var xhr = this.xhr = new XHR(opts);
                    try {
                        xhr.open(this.method, this.uri, this.async);
                        try {
                            if (this.opts.extraHeaders) {
                                xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                                for(var i in this.opts.extraHeaders)if (this.opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                            }
                        } catch (e) {}
                        if ("POST" === this.method) try {
                            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                        } catch (e) {}
                        try {
                            xhr.setRequestHeader("Accept", "*/*");
                        } catch (e) {} // ie6 check
                        if ("withCredentials" in xhr) xhr.withCredentials = this.opts.withCredentials;
                        if (this.opts.requestTimeout) xhr.timeout = this.opts.requestTimeout;
                        xhr.onreadystatechange = function() {
                            if (4 !== xhr.readyState) return;
                            if (200 === xhr.status || 1223 === xhr.status) _this9.onLoad();
                            else // make sure the `error` event handler that's user-set
                            // does not throw in the same tick and gets caught here
                            _this9.setTimeoutFn(function() {
                                _this9.onError(typeof xhr.status === "number" ? xhr.status : 0);
                            }, 0);
                        };
                        xhr.send(this.data);
                    } catch (e) {
                        // Need to defer since .create() is called directly from the constructor
                        // and thus the 'error' event can only be only bound *after* this exception
                        // occurs.  Therefore, also, we cannot throw here at all.
                        this.setTimeoutFn(function() {
                            _this9.onError(e);
                        }, 0);
                        return;
                    }
                    if (typeof document !== "undefined") {
                        this.index = Request.requestsCount++;
                        Request.requests[this.index] = this;
                    }
                }
            },
            {
                key: "onError",
                value: function onError(err) {
                    this.emitReserved("error", err, this.xhr);
                    this.cleanup(true);
                }
            },
            {
                key: "cleanup",
                value: function cleanup(fromError) {
                    if ("undefined" === typeof this.xhr || null === this.xhr) return;
                    this.xhr.onreadystatechange = empty;
                    if (fromError) try {
                        this.xhr.abort();
                    } catch (e) {}
                    if (typeof document !== "undefined") delete Request.requests[this.index];
                    this.xhr = null;
                }
            },
            {
                key: "onLoad",
                value: function onLoad() {
                    var data = this.xhr.responseText;
                    if (data !== null) {
                        this.emitReserved("data", data);
                        this.emitReserved("success");
                        this.cleanup();
                    }
                }
            },
            {
                key: "abort",
                value: function abort() {
                    this.cleanup();
                }
            }
        ]);
        return Request;
    }(Emitter);
    Request.requestsCount = 0;
    Request.requests = {};
    /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */ if (typeof document !== "undefined") {
        // @ts-ignore
        if (typeof attachEvent === "function") // @ts-ignore
        attachEvent("onunload", unloadHandler);
        else if (typeof addEventListener === "function") {
            var terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
            addEventListener(terminationEvent, unloadHandler, false);
        }
    }
    function unloadHandler() {
        for(var i in Request.requests)if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
    }
    var nextTick = function() {
        var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (isPromiseAvailable) return function(cb) {
            return Promise.resolve().then(cb);
        };
        else return function(cb, setTimeoutFn) {
            return setTimeoutFn(cb, 0);
        };
    }();
    var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
    var usingBrowserWebSocket = true;
    var defaultBinaryType = "arraybuffer";
    var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
    var WS = /*#__PURE__*/ function(_Transport) {
        _inherits(WS, _Transport);
        var _super = _createSuper(WS);
        /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */ function WS(opts) {
            var _this;
            _classCallCheck(this, WS);
            _this = _super.call(this, opts);
            _this.supportsBinary = !opts.forceBase64;
            return _this;
        }
        _createClass(WS, [
            {
                key: "name",
                get: function get() {
                    return "websocket";
                }
            },
            {
                key: "doOpen",
                value: function doOpen() {
                    if (!this.check()) // let probe timeout
                    return;
                    var uri = this.uri();
                    var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed
                    var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                    if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
                    try {
                        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
                    } catch (err) {
                        return this.emitReserved("error", err);
                    }
                    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
                    this.addEventListeners();
                }
            },
            {
                key: "addEventListeners",
                value: function addEventListeners() {
                    var _this2 = this;
                    this.ws.onopen = function() {
                        if (_this2.opts.autoUnref) _this2.ws._socket.unref();
                        _this2.onOpen();
                    };
                    this.ws.onclose = function(closeEvent) {
                        return _this2.onClose({
                            description: "websocket connection closed",
                            context: closeEvent
                        });
                    };
                    this.ws.onmessage = function(ev) {
                        return _this2.onData(ev.data);
                    };
                    this.ws.onerror = function(e) {
                        return _this2.onError("websocket error", e);
                    };
                }
            },
            {
                key: "write",
                value: function write(packets) {
                    var _this3 = this;
                    this.writable = false; // encodePacket efficient as it uses WS framing
                    // no need for encodePayload
                    var _loop = function _loop(i) {
                        var packet = packets[i];
                        var lastPacket = i === packets.length - 1;
                        encodePacket(packet, _this3.supportsBinary, function(data) {
                            // always create a new object (GH-437)
                            var opts = {};
                            // have a chance of informing us about it yet, in that case send will
                            // throw an error
                            try {
                                if (usingBrowserWebSocket) // TypeError is thrown when passing the second argument on Safari
                                _this3.ws.send(data);
                            } catch (e) {}
                            if (lastPacket) // fake drain
                            // defer to next tick to allow Socket to clear writeBuffer
                            nextTick(function() {
                                _this3.writable = true;
                                _this3.emitReserved("drain");
                            }, _this3.setTimeoutFn);
                        });
                    };
                    for(var i = 0; i < packets.length; i++)_loop(i);
                }
            },
            {
                key: "doClose",
                value: function doClose() {
                    if (typeof this.ws !== "undefined") {
                        this.ws.close();
                        this.ws = null;
                    }
                }
            },
            {
                key: "uri",
                value: function uri() {
                    var query = this.query || {};
                    var schema = this.opts.secure ? "wss" : "ws";
                    var port = ""; // avoid port if default for schema
                    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
                     // append timestamp to URI
                    if (this.opts.timestampRequests) query[this.opts.timestampParam] = yeast();
                     // communicate binary support capabilities
                    if (!this.supportsBinary) query.b64 = 1;
                    var encodedQuery = encode(query);
                    var ipv6 = this.opts.hostname.indexOf(":") !== -1;
                    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
                }
            },
            {
                key: "check",
                value: function check() {
                    return !!WebSocket;
                }
            }
        ]);
        return WS;
    }(Transport);
    var transports = {
        websocket: WS,
        polling: Polling
    };
    // imported from https://github.com/galkn/parseuri
    /**
   * Parses a URI
   *
   * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
   *
   * See:
   * - https://developer.mozilla.org/en-US/docs/Web/API/URL
   * - https://caniuse.com/url
   * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
   *
   * History of the parse() method:
   * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
   * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
   * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */ var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor"
    ];
    function parse(str) {
        var src = str, b = str.indexOf("["), e = str.indexOf("]");
        if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
        var m = re.exec(str || ""), uri = {}, i = 14;
        while(i--)uri[parts[i]] = m[i] || "";
        if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
            uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
            uri.ipv6uri = true;
        }
        uri.pathNames = pathNames(uri, uri["path"]);
        uri.queryKey = queryKey(uri, uri["query"]);
        return uri;
    }
    function pathNames(obj, path) {
        var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
        if (path.slice(0, 1) == "/" || path.length === 0) names.splice(0, 1);
        if (path.slice(-1) == "/") names.splice(names.length - 1, 1);
        return names;
    }
    function queryKey(uri, query) {
        var data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
            if ($1) data[$1] = $2;
        });
        return data;
    }
    var Socket$1 = /*#__PURE__*/ function(_Emitter) {
        _inherits(Socket, _Emitter);
        var _super = _createSuper(Socket);
        /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */ function Socket(uri) {
            var _this;
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, Socket);
            _this = _super.call(this);
            _this.writeBuffer = [];
            if (uri && "object" === _typeof(uri)) {
                opts = uri;
                uri = null;
            }
            if (uri) {
                uri = parse(uri);
                opts.hostname = uri.host;
                opts.secure = uri.protocol === "https" || uri.protocol === "wss";
                opts.port = uri.port;
                if (uri.query) opts.query = uri.query;
            } else if (opts.host) opts.hostname = parse(opts.host).host;
            installTimerFunctions(_assertThisInitialized(_this), opts);
            _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
            if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
            opts.port = _this.secure ? "443" : "80";
            _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
            _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
            _this.transports = opts.transports || [
                "polling",
                "websocket"
            ];
            _this.writeBuffer = [];
            _this.prevBufferLen = 0;
            _this.opts = _extends({
                path: "/engine.io",
                agent: false,
                withCredentials: false,
                upgrade: true,
                timestampParam: "t",
                rememberUpgrade: false,
                addTrailingSlash: true,
                rejectUnauthorized: true,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: true
            }, opts);
            _this.opts.path = _this.opts.path.replace(/\/$/, "") + (_this.opts.addTrailingSlash ? "/" : "");
            if (typeof _this.opts.query === "string") _this.opts.query = decode(_this.opts.query);
             // set on handshake
            _this.id = null;
            _this.upgrades = null;
            _this.pingInterval = null;
            _this.pingTimeout = null; // set on heartbeat
            _this.pingTimeoutTimer = null;
            if (typeof addEventListener === "function") {
                if (_this.opts.closeOnBeforeunload) {
                    // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                    // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                    // closed/reloaded)
                    _this.beforeunloadEventListener = function() {
                        if (_this.transport) {
                            // silently close the transport
                            _this.transport.removeAllListeners();
                            _this.transport.close();
                        }
                    };
                    addEventListener("beforeunload", _this.beforeunloadEventListener, false);
                }
                if (_this.hostname !== "localhost") {
                    _this.offlineEventListener = function() {
                        _this.onClose("transport close", {
                            description: "network connection lost"
                        });
                    };
                    addEventListener("offline", _this.offlineEventListener, false);
                }
            }
            _this.open();
            return _this;
        }
        /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */ _createClass(Socket, [
            {
                key: "createTransport",
                value: function createTransport(name) {
                    var query = _extends({}, this.opts.query); // append engine.io protocol identifier
                    query.EIO = protocol$1; // transport name
                    query.transport = name; // session id if we already have one
                    if (this.id) query.sid = this.id;
                    var opts = _extends({}, this.opts.transportOptions[name], this.opts, {
                        query: query,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    });
                    return new transports[name](opts);
                }
            },
            {
                key: "open",
                value: function open() {
                    var _this2 = this;
                    var transport;
                    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) transport = "websocket";
                    else if (0 === this.transports.length) {
                        // Emit error on next tick so it can be listened to
                        this.setTimeoutFn(function() {
                            _this2.emitReserved("error", "No transports available");
                        }, 0);
                        return;
                    } else transport = this.transports[0];
                    this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)
                    try {
                        transport = this.createTransport(transport);
                    } catch (e) {
                        this.transports.shift();
                        this.open();
                        return;
                    }
                    transport.open();
                    this.setTransport(transport);
                }
            },
            {
                key: "setTransport",
                value: function setTransport(transport) {
                    var _this3 = this;
                    if (this.transport) this.transport.removeAllListeners();
                     // set up transport
                    this.transport = transport; // set up transport listeners
                    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function(reason) {
                        return _this3.onClose("transport close", reason);
                    });
                }
            },
            {
                key: "probe",
                value: function probe(name) {
                    var _this4 = this;
                    var transport = this.createTransport(name);
                    var failed = false;
                    Socket.priorWebsocketSuccess = false;
                    var onTransportOpen = function onTransportOpen() {
                        if (failed) return;
                        transport.send([
                            {
                                type: "ping",
                                data: "probe"
                            }
                        ]);
                        transport.once("packet", function(msg) {
                            if (failed) return;
                            if ("pong" === msg.type && "probe" === msg.data) {
                                _this4.upgrading = true;
                                _this4.emitReserved("upgrading", transport);
                                if (!transport) return;
                                Socket.priorWebsocketSuccess = "websocket" === transport.name;
                                _this4.transport.pause(function() {
                                    if (failed) return;
                                    if ("closed" === _this4.readyState) return;
                                    cleanup();
                                    _this4.setTransport(transport);
                                    transport.send([
                                        {
                                            type: "upgrade"
                                        }
                                    ]);
                                    _this4.emitReserved("upgrade", transport);
                                    transport = null;
                                    _this4.upgrading = false;
                                    _this4.flush();
                                });
                            } else {
                                var err = new Error("probe error"); // @ts-ignore
                                err.transport = transport.name;
                                _this4.emitReserved("upgradeError", err);
                            }
                        });
                    };
                    function freezeTransport() {
                        if (failed) return; // Any callback called by transport should be ignored since now
                        failed = true;
                        cleanup();
                        transport.close();
                        transport = null;
                    } // Handle any error that happens while probing
                    var onerror = function onerror(err) {
                        var error = new Error("probe error: " + err); // @ts-ignore
                        error.transport = transport.name;
                        freezeTransport();
                        _this4.emitReserved("upgradeError", error);
                    };
                    function onTransportClose() {
                        onerror("transport closed");
                    } // When the socket is closed while we're probing
                    function onclose() {
                        onerror("socket closed");
                    } // When the socket is upgraded while we're probing
                    function onupgrade(to) {
                        if (transport && to.name !== transport.name) freezeTransport();
                    } // Remove all listeners on the transport and on self
                    var cleanup = function cleanup() {
                        transport.removeListener("open", onTransportOpen);
                        transport.removeListener("error", onerror);
                        transport.removeListener("close", onTransportClose);
                        _this4.off("close", onclose);
                        _this4.off("upgrading", onupgrade);
                    };
                    transport.once("open", onTransportOpen);
                    transport.once("error", onerror);
                    transport.once("close", onTransportClose);
                    this.once("close", onclose);
                    this.once("upgrading", onupgrade);
                    transport.open();
                }
            },
            {
                key: "onOpen",
                value: function onOpen() {
                    this.readyState = "open";
                    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
                    this.emitReserved("open");
                    this.flush(); // we check for `readyState` in case an `open`
                    // listener already closed the socket
                    if ("open" === this.readyState && this.opts.upgrade) {
                        var i = 0;
                        var l = this.upgrades.length;
                        for(; i < l; i++)this.probe(this.upgrades[i]);
                    }
                }
            },
            {
                key: "onPacket",
                value: function onPacket(packet) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                        this.emitReserved("packet", packet); // Socket is live - any packet counts
                        this.emitReserved("heartbeat");
                        switch(packet.type){
                            case "open":
                                this.onHandshake(JSON.parse(packet.data));
                                break;
                            case "ping":
                                this.resetPingTimeout();
                                this.sendPacket("pong");
                                this.emitReserved("ping");
                                this.emitReserved("pong");
                                break;
                            case "error":
                                var err = new Error("server error"); // @ts-ignore
                                err.code = packet.data;
                                this.onError(err);
                                break;
                            case "message":
                                this.emitReserved("data", packet.data);
                                this.emitReserved("message", packet.data);
                                break;
                        }
                    }
                }
            },
            {
                key: "onHandshake",
                value: function onHandshake(data) {
                    this.emitReserved("handshake", data);
                    this.id = data.sid;
                    this.transport.query.sid = data.sid;
                    this.upgrades = this.filterUpgrades(data.upgrades);
                    this.pingInterval = data.pingInterval;
                    this.pingTimeout = data.pingTimeout;
                    this.maxPayload = data.maxPayload;
                    this.onOpen(); // In case open handler closes socket
                    if ("closed" === this.readyState) return;
                    this.resetPingTimeout();
                }
            },
            {
                key: "resetPingTimeout",
                value: function resetPingTimeout() {
                    var _this5 = this;
                    this.clearTimeoutFn(this.pingTimeoutTimer);
                    this.pingTimeoutTimer = this.setTimeoutFn(function() {
                        _this5.onClose("ping timeout");
                    }, this.pingInterval + this.pingTimeout);
                    if (this.opts.autoUnref) this.pingTimeoutTimer.unref();
                }
            },
            {
                key: "onDrain",
                value: function onDrain() {
                    this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
                    // for example, when upgrading, upgrade packet is sent over,
                    // and a nonzero prevBufferLen could cause problems on `drain`
                    this.prevBufferLen = 0;
                    if (0 === this.writeBuffer.length) this.emitReserved("drain");
                    else this.flush();
                }
            },
            {
                key: "flush",
                value: function flush() {
                    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        var packets = this.getWritablePackets();
                        this.transport.send(packets); // keep track of current length of writeBuffer
                        // splice writeBuffer and callbackBuffer on `drain`
                        this.prevBufferLen = packets.length;
                        this.emitReserved("flush");
                    }
                }
            },
            {
                key: "getWritablePackets",
                value: function getWritablePackets() {
                    var shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
                    if (!shouldCheckPayloadSize) return this.writeBuffer;
                    var payloadSize = 1; // first packet type
                    for(var i = 0; i < this.writeBuffer.length; i++){
                        var data = this.writeBuffer[i].data;
                        if (data) payloadSize += byteLength(data);
                        if (i > 0 && payloadSize > this.maxPayload) return this.writeBuffer.slice(0, i);
                        payloadSize += 2; // separator + packet type
                    }
                    return this.writeBuffer;
                }
            },
            {
                key: "write",
                value: function write(msg, options, fn) {
                    this.sendPacket("message", msg, options, fn);
                    return this;
                }
            },
            {
                key: "send",
                value: function send(msg, options, fn) {
                    this.sendPacket("message", msg, options, fn);
                    return this;
                }
            },
            {
                key: "sendPacket",
                value: function sendPacket(type, data, options, fn) {
                    if ("function" === typeof data) {
                        fn = data;
                        data = undefined;
                    }
                    if ("function" === typeof options) {
                        fn = options;
                        options = null;
                    }
                    if ("closing" === this.readyState || "closed" === this.readyState) return;
                    options = options || {};
                    options.compress = false !== options.compress;
                    var packet = {
                        type: type,
                        data: data,
                        options: options
                    };
                    this.emitReserved("packetCreate", packet);
                    this.writeBuffer.push(packet);
                    if (fn) this.once("flush", fn);
                    this.flush();
                }
            },
            {
                key: "close",
                value: function close() {
                    var _this6 = this;
                    var close = function close() {
                        _this6.onClose("forced close");
                        _this6.transport.close();
                    };
                    var cleanupAndClose = function cleanupAndClose() {
                        _this6.off("upgrade", cleanupAndClose);
                        _this6.off("upgradeError", cleanupAndClose);
                        close();
                    };
                    var waitForUpgrade = function waitForUpgrade() {
                        // wait for upgrade to finish since we can't send packets while pausing a transport
                        _this6.once("upgrade", cleanupAndClose);
                        _this6.once("upgradeError", cleanupAndClose);
                    };
                    if ("opening" === this.readyState || "open" === this.readyState) {
                        this.readyState = "closing";
                        if (this.writeBuffer.length) this.once("drain", function() {
                            if (_this6.upgrading) waitForUpgrade();
                            else close();
                        });
                        else if (this.upgrading) waitForUpgrade();
                        else close();
                    }
                    return this;
                }
            },
            {
                key: "onError",
                value: function onError(err) {
                    Socket.priorWebsocketSuccess = false;
                    this.emitReserved("error", err);
                    this.onClose("transport error", err);
                }
            },
            {
                key: "onClose",
                value: function onClose(reason, description) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                        // clear timers
                        this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport
                        this.transport.removeAllListeners("close"); // ensure transport won't stay open
                        this.transport.close(); // ignore further transport communication
                        this.transport.removeAllListeners();
                        if (typeof removeEventListener === "function") {
                            removeEventListener("beforeunload", this.beforeunloadEventListener, false);
                            removeEventListener("offline", this.offlineEventListener, false);
                        } // set ready state
                        this.readyState = "closed"; // clear session id
                        this.id = null; // emit close event
                        this.emitReserved("close", reason, description); // clean buffers after, so users can still
                        // grab the buffers on `close` event
                        this.writeBuffer = [];
                        this.prevBufferLen = 0;
                    }
                }
            },
            {
                key: "filterUpgrades",
                value: function filterUpgrades(upgrades) {
                    var filteredUpgrades = [];
                    var i = 0;
                    var j = upgrades.length;
                    for(; i < j; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
                    return filteredUpgrades;
                }
            }
        ]);
        return Socket;
    }(Emitter);
    Socket$1.protocol = protocol$1;
    Socket$1.protocol;
    /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */ function url(uri) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var loc = arguments.length > 2 ? arguments[2] : undefined;
        var obj = uri; // default to window.location
        loc = loc || typeof location !== "undefined" && location;
        if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support
        if (typeof uri === "string") {
            if ("/" === uri.charAt(0)) {
                if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
                else uri = loc.host + uri;
            }
            if (!/^(https?|wss?):\/\//.test(uri)) {
                if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
                else uri = "https://" + uri;
            } // parse
            obj = parse(uri);
        } // make sure we treat `localhost:80` and `localhost` equally
        if (!obj.port) {
            if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
            else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
        }
        obj.path = obj.path || "/";
        var ipv6 = obj.host.indexOf(":") !== -1;
        var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id
        obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href
        obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
        return obj;
    }
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };
    var toString = Object.prototype.toString;
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
    var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
    /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */ function isBinary(obj) {
        return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    function hasBinary(obj, toJSON) {
        if (!obj || _typeof(obj) !== "object") return false;
        if (Array.isArray(obj)) {
            for(var i = 0, l = obj.length; i < l; i++){
                if (hasBinary(obj[i])) return true;
            }
            return false;
        }
        if (isBinary(obj)) return true;
        if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
        for(var key in obj){
            if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
        }
        return false;
    }
    /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */ function deconstructPacket(packet) {
        var buffers = [];
        var packetData = packet.data;
        var pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length; // number of binary 'attachments'
        return {
            packet: pack,
            buffers: buffers
        };
    }
    function _deconstructPacket(data, buffers) {
        if (!data) return data;
        if (isBinary(data)) {
            var placeholder = {
                _placeholder: true,
                num: buffers.length
            };
            buffers.push(data);
            return placeholder;
        } else if (Array.isArray(data)) {
            var newData = new Array(data.length);
            for(var i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
            return newData;
        } else if (_typeof(data) === "object" && !(data instanceof Date)) {
            var _newData = {};
            for(var key in data)if (Object.prototype.hasOwnProperty.call(data, key)) _newData[key] = _deconstructPacket(data[key], buffers);
            return _newData;
        }
        return data;
    }
    /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @public
   */ function reconstructPacket(packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        delete packet.attachments; // no longer useful
        return packet;
    }
    function _reconstructPacket(data, buffers) {
        if (!data) return data;
        if (data && data._placeholder === true) {
            var isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
            if (isIndexValid) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
            else throw new Error("illegal attachments");
        } else if (Array.isArray(data)) for(var i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
        else if (_typeof(data) === "object") {
            for(var key in data)if (Object.prototype.hasOwnProperty.call(data, key)) data[key] = _reconstructPacket(data[key], buffers);
        }
        return data;
    }
    /**
   * Protocol version.
   *
   * @public
   */ var protocol = 5;
    var PacketType;
    (function(PacketType) {
        PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
        PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
        PacketType[PacketType["EVENT"] = 2] = "EVENT";
        PacketType[PacketType["ACK"] = 3] = "ACK";
        PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
        PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
        PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType || (PacketType = {}));
    /**
   * A socket.io Encoder instance
   */ var Encoder = /*#__PURE__*/ function() {
        /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */ function Encoder(replacer) {
            _classCallCheck(this, Encoder);
            this.replacer = replacer;
        }
        /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ _createClass(Encoder, [
            {
                key: "encode",
                value: function encode(obj) {
                    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
                        if (hasBinary(obj)) return this.encodeAsBinary({
                            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
                            nsp: obj.nsp,
                            data: obj.data,
                            id: obj.id
                        });
                    }
                    return [
                        this.encodeAsString(obj)
                    ];
                }
            },
            {
                key: "encodeAsString",
                value: function encodeAsString(obj) {
                    // first is type
                    var str = "" + obj.type; // attachments if we have them
                    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
                     // if we have a namespace other than `/`
                    // we append it followed by a comma `,`
                    if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
                     // immediately followed by the id
                    if (null != obj.id) str += obj.id;
                     // json data
                    if (null != obj.data) str += JSON.stringify(obj.data, this.replacer);
                    return str;
                }
            },
            {
                key: "encodeAsBinary",
                value: function encodeAsBinary(obj) {
                    var deconstruction = deconstructPacket(obj);
                    var pack = this.encodeAsString(deconstruction.packet);
                    var buffers = deconstruction.buffers;
                    buffers.unshift(pack); // add packet info to beginning of data list
                    return buffers; // write all the buffers
                }
            }
        ]);
        return Encoder;
    }();
    /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */ var Decoder = /*#__PURE__*/ function(_Emitter) {
        _inherits(Decoder, _Emitter);
        var _super = _createSuper(Decoder);
        /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */ function Decoder(reviver) {
            var _this;
            _classCallCheck(this, Decoder);
            _this = _super.call(this);
            _this.reviver = reviver;
            return _this;
        }
        /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ _createClass(Decoder, [
            {
                key: "add",
                value: function add(obj) {
                    var packet;
                    if (typeof obj === "string") {
                        if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                        packet = this.decodeString(obj);
                        var isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
                        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                            packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK; // binary packet's json
                            this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow
                            if (packet.attachments === 0) _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
                        } else // non-binary full packet
                        _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
                    } else if (isBinary(obj) || obj.base64) {
                        // raw binary data
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        else {
                            packet = this.reconstructor.takeBinaryData(obj);
                            if (packet) {
                                // received final buffer
                                this.reconstructor = null;
                                _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
                            }
                        }
                    } else throw new Error("Unknown type: " + obj);
                }
            },
            {
                key: "decodeString",
                value: function decodeString(str) {
                    var i = 0; // look up type
                    var p = {
                        type: Number(str.charAt(0))
                    };
                    if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
                     // look up attachments if type binary
                    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
                        var start = i + 1;
                        while(str.charAt(++i) !== "-" && i != str.length);
                        var buf = str.substring(start, i);
                        if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
                        p.attachments = Number(buf);
                    } // look up namespace (if any)
                    if ("/" === str.charAt(i + 1)) {
                        var _start = i + 1;
                        while(++i){
                            var c = str.charAt(i);
                            if ("," === c) break;
                            if (i === str.length) break;
                        }
                        p.nsp = str.substring(_start, i);
                    } else p.nsp = "/";
                     // look up id
                    var next = str.charAt(i + 1);
                    if ("" !== next && Number(next) == next) {
                        var _start2 = i + 1;
                        while(++i){
                            var _c = str.charAt(i);
                            if (null == _c || Number(_c) != _c) {
                                --i;
                                break;
                            }
                            if (i === str.length) break;
                        }
                        p.id = Number(str.substring(_start2, i + 1));
                    } // look up json data
                    if (str.charAt(++i)) {
                        var payload = this.tryParse(str.substr(i));
                        if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
                        else throw new Error("invalid payload");
                    }
                    return p;
                }
            },
            {
                key: "tryParse",
                value: function tryParse(str) {
                    try {
                        return JSON.parse(str, this.reviver);
                    } catch (e) {
                        return false;
                    }
                }
            },
            {
                key: "destroy",
                value: /**
       * Deallocates a parser's resources
       */ function destroy() {
                    if (this.reconstructor) {
                        this.reconstructor.finishedReconstruction();
                        this.reconstructor = null;
                    }
                }
            }
        ], [
            {
                key: "isPayloadValid",
                value: function isPayloadValid(type, payload) {
                    switch(type){
                        case PacketType.CONNECT:
                            return _typeof(payload) === "object";
                        case PacketType.DISCONNECT:
                            return payload === undefined;
                        case PacketType.CONNECT_ERROR:
                            return typeof payload === "string" || _typeof(payload) === "object";
                        case PacketType.EVENT:
                        case PacketType.BINARY_EVENT:
                            return Array.isArray(payload) && payload.length > 0;
                        case PacketType.ACK:
                        case PacketType.BINARY_ACK:
                            return Array.isArray(payload);
                    }
                }
            }
        ]);
        return Decoder;
    }(Emitter);
    /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */ var BinaryReconstructor = /*#__PURE__*/ function() {
        function BinaryReconstructor(packet) {
            _classCallCheck(this, BinaryReconstructor);
            this.packet = packet;
            this.buffers = [];
            this.reconPack = packet;
        }
        /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ _createClass(BinaryReconstructor, [
            {
                key: "takeBinaryData",
                value: function takeBinaryData(binData) {
                    this.buffers.push(binData);
                    if (this.buffers.length === this.reconPack.attachments) {
                        // done with buffer list
                        var packet = reconstructPacket(this.reconPack, this.buffers);
                        this.finishedReconstruction();
                        return packet;
                    }
                    return null;
                }
            },
            {
                key: "finishedReconstruction",
                value: function finishedReconstruction() {
                    this.reconPack = null;
                    this.buffers = [];
                }
            }
        ]);
        return BinaryReconstructor;
    }();
    var parser = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        protocol: protocol,
        get PacketType () {
            return PacketType;
        },
        Encoder: Encoder,
        Decoder: Decoder
    });
    function on(obj, ev, fn) {
        obj.on(ev, fn);
        return function subDestroy() {
            obj.off(ev, fn);
        };
    }
    /**
   * Internal events.
   * These events can't be emitted by the user.
   */ var RESERVED_EVENTS = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
        newListener: 1,
        removeListener: 1
    });
    /**
   * A Socket is the fundamental class for interacting with the server.
   *
   * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log("connected");
   * });
   *
   * // send an event to the server
   * socket.emit("foo", "bar");
   *
   * socket.on("foobar", () => {
   *   // an event was received from the server
   * });
   *
   * // upon disconnection
   * socket.on("disconnect", (reason) => {
   *   console.log(`disconnected due to ${reason}`);
   * });
   */ var Socket = /*#__PURE__*/ function(_Emitter) {
        _inherits(Socket, _Emitter);
        var _super = _createSuper(Socket);
        /**
     * `Socket` constructor.
     */ function Socket(io, nsp, opts) {
            var _this;
            _classCallCheck(this, Socket);
            _this = _super.call(this);
            /**
       * Whether the socket is currently connected to the server.
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.connected); // true
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.connected); // false
       * });
       */ _this.connected = false;
            /**
       * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
       * be transmitted by the server.
       */ _this.recovered = false;
            /**
       * Buffer for packets received before the CONNECT packet
       */ _this.receiveBuffer = [];
            /**
       * Buffer for packets that will be sent once the socket is connected
       */ _this.sendBuffer = [];
            /**
       * The queue of packets to be sent with retry in case of failure.
       *
       * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
       * @private
       */ _this._queue = [];
            /**
       * A sequence to generate the ID of the {@link QueuedPacket}.
       * @private
       */ _this._queueSeq = 0;
            _this.ids = 0;
            _this.acks = {};
            _this.flags = {};
            _this.io = io;
            _this.nsp = nsp;
            if (opts && opts.auth) _this.auth = opts.auth;
            _this._opts = _extends({}, opts);
            if (_this.io._autoConnect) _this.open();
            return _this;
        }
        /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */ _createClass(Socket, [
            {
                key: "disconnected",
                get: function get() {
                    return !this.connected;
                }
            },
            {
                key: "subEvents",
                value: function subEvents() {
                    if (this.subs) return;
                    var io = this.io;
                    this.subs = [
                        on(io, "open", this.onopen.bind(this)),
                        on(io, "packet", this.onpacket.bind(this)),
                        on(io, "error", this.onerror.bind(this)),
                        on(io, "close", this.onclose.bind(this))
                    ];
                }
            },
            {
                key: "active",
                get: function get() {
                    return !!this.subs;
                }
            },
            {
                key: "connect",
                value: function connect() {
                    if (this.connected) return this;
                    this.subEvents();
                    if (!this.io["_reconnecting"]) this.io.open(); // ensure open
                    if ("open" === this.io._readyState) this.onopen();
                    return this;
                }
            },
            {
                key: "open",
                value: function open() {
                    return this.connect();
                }
            },
            {
                key: "send",
                value: function send() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    args.unshift("message");
                    this.emit.apply(this, args);
                    return this;
                }
            },
            {
                key: "emit",
                value: function emit(ev) {
                    if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev.toString() + '" is a reserved event name');
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
                    args.unshift(ev);
                    if (this._opts.retries && !this.flags.fromQueue && !this.flags["volatile"]) {
                        this._addToQueue(args);
                        return this;
                    }
                    var packet = {
                        type: PacketType.EVENT,
                        data: args
                    };
                    packet.options = {};
                    packet.options.compress = this.flags.compress !== false; // event ack callback
                    if ("function" === typeof args[args.length - 1]) {
                        var id = this.ids++;
                        var ack = args.pop();
                        this._registerAckCallback(id, ack);
                        packet.id = id;
                    }
                    var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                    var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);
                    if (discardPacket) ;
                    else if (this.connected) {
                        this.notifyOutgoingListeners(packet);
                        this.packet(packet);
                    } else this.sendBuffer.push(packet);
                    this.flags = {};
                    return this;
                }
            },
            {
                key: "_registerAckCallback",
                value: function _registerAckCallback(id, ack) {
                    var _this2 = this;
                    var _a;
                    var timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
                    if (timeout === undefined) {
                        this.acks[id] = ack;
                        return;
                    } // @ts-ignore
                    var timer = this.io.setTimeoutFn(function() {
                        delete _this2.acks[id];
                        for(var i = 0; i < _this2.sendBuffer.length; i++)if (_this2.sendBuffer[i].id === id) _this2.sendBuffer.splice(i, 1);
                        ack.call(_this2, new Error("operation has timed out"));
                    }, timeout);
                    this.acks[id] = function() {
                        // @ts-ignore
                        _this2.io.clearTimeoutFn(timer);
                        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
                        ack.apply(_this2, [
                            null
                        ].concat(args));
                    };
                }
            },
            {
                key: "emitWithAck",
                value: function emitWithAck(ev) {
                    var _this3 = this;
                    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
                    // the timeout flag is optional
                    var withErr = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
                    return new Promise(function(resolve, reject) {
                        args.push(function(arg1, arg2) {
                            if (withErr) return arg1 ? reject(arg1) : resolve(arg2);
                            else return resolve(arg1);
                        });
                        _this3.emit.apply(_this3, [
                            ev
                        ].concat(args));
                    });
                }
            },
            {
                key: "_addToQueue",
                value: function _addToQueue(args) {
                    var _this4 = this;
                    var ack;
                    if (typeof args[args.length - 1] === "function") ack = args.pop();
                    var packet = {
                        id: this._queueSeq++,
                        tryCount: 0,
                        pending: false,
                        args: args,
                        flags: _extends({
                            fromQueue: true
                        }, this.flags)
                    };
                    args.push(function(err) {
                        if (packet !== _this4._queue[0]) // the packet has already been acknowledged
                        return;
                        var hasError = err !== null;
                        if (hasError) {
                            if (packet.tryCount > _this4._opts.retries) {
                                _this4._queue.shift();
                                if (ack) ack(err);
                            }
                        } else {
                            _this4._queue.shift();
                            if (ack) {
                                for(var _len5 = arguments.length, responseArgs = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)responseArgs[_key5 - 1] = arguments[_key5];
                                ack.apply(void 0, [
                                    null
                                ].concat(responseArgs));
                            }
                        }
                        packet.pending = false;
                        return _this4._drainQueue();
                    });
                    this._queue.push(packet);
                    this._drainQueue();
                }
            },
            {
                key: "_drainQueue",
                value: function _drainQueue() {
                    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    if (!this.connected || this._queue.length === 0) return;
                    var packet = this._queue[0];
                    if (packet.pending && !force) return;
                    packet.pending = true;
                    packet.tryCount++;
                    this.flags = packet.flags;
                    this.emit.apply(this, packet.args);
                }
            },
            {
                key: "packet",
                value: function packet(_packet) {
                    _packet.nsp = this.nsp;
                    this.io._packet(_packet);
                }
            },
            {
                key: "onopen",
                value: function onopen() {
                    var _this5 = this;
                    if (typeof this.auth == "function") this.auth(function(data) {
                        _this5._sendConnectPacket(data);
                    });
                    else this._sendConnectPacket(this.auth);
                }
            },
            {
                key: "_sendConnectPacket",
                value: function _sendConnectPacket(data) {
                    this.packet({
                        type: PacketType.CONNECT,
                        data: this._pid ? _extends({
                            pid: this._pid,
                            offset: this._lastOffset
                        }, data) : data
                    });
                }
            },
            {
                key: "onerror",
                value: function onerror(err) {
                    if (!this.connected) this.emitReserved("connect_error", err);
                }
            },
            {
                key: "onclose",
                value: function onclose(reason, description) {
                    this.connected = false;
                    delete this.id;
                    this.emitReserved("disconnect", reason, description);
                }
            },
            {
                key: "onpacket",
                value: function onpacket(packet) {
                    var sameNamespace = packet.nsp === this.nsp;
                    if (!sameNamespace) return;
                    switch(packet.type){
                        case PacketType.CONNECT:
                            if (packet.data && packet.data.sid) this.onconnect(packet.data.sid, packet.data.pid);
                            else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case PacketType.EVENT:
                        case PacketType.BINARY_EVENT:
                            this.onevent(packet);
                            break;
                        case PacketType.ACK:
                        case PacketType.BINARY_ACK:
                            this.onack(packet);
                            break;
                        case PacketType.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case PacketType.CONNECT_ERROR:
                            this.destroy();
                            var err = new Error(packet.data.message); // @ts-ignore
                            err.data = packet.data.data;
                            this.emitReserved("connect_error", err);
                            break;
                    }
                }
            },
            {
                key: "onevent",
                value: function onevent(packet) {
                    var args = packet.data || [];
                    if (null != packet.id) args.push(this.ack(packet.id));
                    if (this.connected) this.emitEvent(args);
                    else this.receiveBuffer.push(Object.freeze(args));
                }
            },
            {
                key: "emitEvent",
                value: function emitEvent(args) {
                    if (this._anyListeners && this._anyListeners.length) {
                        var listeners = this._anyListeners.slice();
                        var _iterator = _createForOfIteratorHelper(listeners), _step;
                        try {
                            for(_iterator.s(); !(_step = _iterator.n()).done;){
                                var listener = _step.value;
                                listener.apply(this, args);
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally{
                            _iterator.f();
                        }
                    }
                    _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
                    if (this._pid && args.length && typeof args[args.length - 1] === "string") this._lastOffset = args[args.length - 1];
                }
            },
            {
                key: "ack",
                value: function ack(id) {
                    var self1 = this;
                    var sent = false;
                    return function() {
                        // prevent double callbacks
                        if (sent) return;
                        sent = true;
                        for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
                        self1.packet({
                            type: PacketType.ACK,
                            id: id,
                            data: args
                        });
                    };
                }
            },
            {
                key: "onack",
                value: function onack(packet) {
                    var ack = this.acks[packet.id];
                    if ("function" === typeof ack) {
                        ack.apply(this, packet.data);
                        delete this.acks[packet.id];
                    }
                }
            },
            {
                key: "onconnect",
                value: function onconnect(id, pid) {
                    this.id = id;
                    this.recovered = pid && this._pid === pid;
                    this._pid = pid; // defined only if connection state recovery is enabled
                    this.connected = true;
                    this.emitBuffered();
                    this.emitReserved("connect");
                    this._drainQueue(true);
                }
            },
            {
                key: "emitBuffered",
                value: function emitBuffered() {
                    var _this6 = this;
                    this.receiveBuffer.forEach(function(args) {
                        return _this6.emitEvent(args);
                    });
                    this.receiveBuffer = [];
                    this.sendBuffer.forEach(function(packet) {
                        _this6.notifyOutgoingListeners(packet);
                        _this6.packet(packet);
                    });
                    this.sendBuffer = [];
                }
            },
            {
                key: "ondisconnect",
                value: function ondisconnect() {
                    this.destroy();
                    this.onclose("io server disconnect");
                }
            },
            {
                key: "destroy",
                value: function destroy() {
                    if (this.subs) {
                        // clean subscriptions to avoid reconnections
                        this.subs.forEach(function(subDestroy) {
                            return subDestroy();
                        });
                        this.subs = undefined;
                    }
                    this.io["_destroy"](this);
                }
            },
            {
                key: "disconnect",
                value: function disconnect() {
                    if (this.connected) this.packet({
                        type: PacketType.DISCONNECT
                    });
                     // remove socket from pool
                    this.destroy();
                    if (this.connected) // fire events
                    this.onclose("io client disconnect");
                    return this;
                }
            },
            {
                key: "close",
                value: function close() {
                    return this.disconnect();
                }
            },
            {
                key: "compress",
                value: function compress(_compress) {
                    this.flags.compress = _compress;
                    return this;
                }
            },
            {
                key: "volatile",
                get: function get() {
                    this.flags["volatile"] = true;
                    return this;
                }
            },
            {
                key: "timeout",
                value: function timeout(_timeout) {
                    this.flags.timeout = _timeout;
                    return this;
                }
            },
            {
                key: "onAny",
                value: function onAny(listener) {
                    this._anyListeners = this._anyListeners || [];
                    this._anyListeners.push(listener);
                    return this;
                }
            },
            {
                key: "prependAny",
                value: function prependAny(listener) {
                    this._anyListeners = this._anyListeners || [];
                    this._anyListeners.unshift(listener);
                    return this;
                }
            },
            {
                key: "offAny",
                value: function offAny(listener) {
                    if (!this._anyListeners) return this;
                    if (listener) {
                        var listeners = this._anyListeners;
                        for(var i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                            listeners.splice(i, 1);
                            return this;
                        }
                    } else this._anyListeners = [];
                    return this;
                }
            },
            {
                key: "listenersAny",
                value: function listenersAny() {
                    return this._anyListeners || [];
                }
            },
            {
                key: "onAnyOutgoing",
                value: function onAnyOutgoing(listener) {
                    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
                    this._anyOutgoingListeners.push(listener);
                    return this;
                }
            },
            {
                key: "prependAnyOutgoing",
                value: function prependAnyOutgoing(listener) {
                    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
                    this._anyOutgoingListeners.unshift(listener);
                    return this;
                }
            },
            {
                key: "offAnyOutgoing",
                value: function offAnyOutgoing(listener) {
                    if (!this._anyOutgoingListeners) return this;
                    if (listener) {
                        var listeners = this._anyOutgoingListeners;
                        for(var i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                            listeners.splice(i, 1);
                            return this;
                        }
                    } else this._anyOutgoingListeners = [];
                    return this;
                }
            },
            {
                key: "listenersAnyOutgoing",
                value: function listenersAnyOutgoing() {
                    return this._anyOutgoingListeners || [];
                }
            },
            {
                key: "notifyOutgoingListeners",
                value: function notifyOutgoingListeners(packet) {
                    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                        var listeners = this._anyOutgoingListeners.slice();
                        var _iterator2 = _createForOfIteratorHelper(listeners), _step2;
                        try {
                            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                                var listener = _step2.value;
                                listener.apply(this, packet.data);
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally{
                            _iterator2.f();
                        }
                    }
                }
            }
        ]);
        return Socket;
    }(Emitter);
    /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */ function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
    }
    /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */ Backoff.prototype.duration = function() {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var rand = Math.random();
            var deviation = Math.floor(rand * this.jitter * ms);
            ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
    };
    /**
   * Reset the number of attempts.
   *
   * @api public
   */ Backoff.prototype.reset = function() {
        this.attempts = 0;
    };
    /**
   * Set the minimum duration
   *
   * @api public
   */ Backoff.prototype.setMin = function(min) {
        this.ms = min;
    };
    /**
   * Set the maximum duration
   *
   * @api public
   */ Backoff.prototype.setMax = function(max) {
        this.max = max;
    };
    /**
   * Set the jitter
   *
   * @api public
   */ Backoff.prototype.setJitter = function(jitter) {
        this.jitter = jitter;
    };
    var Manager = /*#__PURE__*/ function(_Emitter) {
        _inherits(Manager, _Emitter);
        var _super = _createSuper(Manager);
        function Manager(uri, opts) {
            var _this;
            _classCallCheck(this, Manager);
            var _a;
            _this = _super.call(this);
            _this.nsps = {};
            _this.subs = [];
            if (uri && "object" === _typeof(uri)) {
                opts = uri;
                uri = undefined;
            }
            opts = opts || {};
            opts.path = opts.path || "/socket.io";
            _this.opts = opts;
            installTimerFunctions(_assertThisInitialized(_this), opts);
            _this.reconnection(opts.reconnection !== false);
            _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
            _this.reconnectionDelay(opts.reconnectionDelay || 1000);
            _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
            _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
            _this.backoff = new Backoff({
                min: _this.reconnectionDelay(),
                max: _this.reconnectionDelayMax(),
                jitter: _this.randomizationFactor()
            });
            _this.timeout(null == opts.timeout ? 20000 : opts.timeout);
            _this._readyState = "closed";
            _this.uri = uri;
            var _parser = opts.parser || parser;
            _this.encoder = new _parser.Encoder();
            _this.decoder = new _parser.Decoder();
            _this._autoConnect = opts.autoConnect !== false;
            if (_this._autoConnect) _this.open();
            return _this;
        }
        _createClass(Manager, [
            {
                key: "reconnection",
                value: function reconnection(v) {
                    if (!arguments.length) return this._reconnection;
                    this._reconnection = !!v;
                    return this;
                }
            },
            {
                key: "reconnectionAttempts",
                value: function reconnectionAttempts(v) {
                    if (v === undefined) return this._reconnectionAttempts;
                    this._reconnectionAttempts = v;
                    return this;
                }
            },
            {
                key: "reconnectionDelay",
                value: function reconnectionDelay(v) {
                    var _a;
                    if (v === undefined) return this._reconnectionDelay;
                    this._reconnectionDelay = v;
                    (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
                    return this;
                }
            },
            {
                key: "randomizationFactor",
                value: function randomizationFactor(v) {
                    var _a;
                    if (v === undefined) return this._randomizationFactor;
                    this._randomizationFactor = v;
                    (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
                    return this;
                }
            },
            {
                key: "reconnectionDelayMax",
                value: function reconnectionDelayMax(v) {
                    var _a;
                    if (v === undefined) return this._reconnectionDelayMax;
                    this._reconnectionDelayMax = v;
                    (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
                    return this;
                }
            },
            {
                key: "timeout",
                value: function timeout(v) {
                    if (!arguments.length) return this._timeout;
                    this._timeout = v;
                    return this;
                }
            },
            {
                key: "maybeReconnectOnOpen",
                value: function maybeReconnectOnOpen() {
                    // Only try to reconnect if it's the first time we're connecting
                    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
                    this.reconnect();
                }
            },
            {
                key: "open",
                value: function open(fn) {
                    var _this2 = this;
                    if (~this._readyState.indexOf("open")) return this;
                    this.engine = new Socket$1(this.uri, this.opts);
                    var socket = this.engine;
                    var self1 = this;
                    this._readyState = "opening";
                    this.skipReconnect = false; // emit `open`
                    var openSubDestroy = on(socket, "open", function() {
                        self1.onopen();
                        fn && fn();
                    }); // emit `error`
                    var errorSub = on(socket, "error", function(err) {
                        self1.cleanup();
                        self1._readyState = "closed";
                        _this2.emitReserved("error", err);
                        if (fn) fn(err);
                        else // Only do this if there is no fn to handle the error
                        self1.maybeReconnectOnOpen();
                    });
                    if (false !== this._timeout) {
                        var timeout = this._timeout;
                        if (timeout === 0) openSubDestroy(); // prevents a race condition with the 'open' event
                         // set timer
                        var timer = this.setTimeoutFn(function() {
                            openSubDestroy();
                            socket.close(); // @ts-ignore
                            socket.emit("error", new Error("timeout"));
                        }, timeout);
                        if (this.opts.autoUnref) timer.unref();
                        this.subs.push(function subDestroy() {
                            clearTimeout(timer);
                        });
                    }
                    this.subs.push(openSubDestroy);
                    this.subs.push(errorSub);
                    return this;
                }
            },
            {
                key: "connect",
                value: function connect(fn) {
                    return this.open(fn);
                }
            },
            {
                key: "onopen",
                value: function onopen() {
                    // clear old subs
                    this.cleanup(); // mark as open
                    this._readyState = "open";
                    this.emitReserved("open"); // add new subs
                    var socket = this.engine;
                    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
                }
            },
            {
                key: "onping",
                value: function onping() {
                    this.emitReserved("ping");
                }
            },
            {
                key: "ondata",
                value: function ondata(data) {
                    try {
                        this.decoder.add(data);
                    } catch (e) {
                        this.onclose("parse error", e);
                    }
                }
            },
            {
                key: "ondecoded",
                value: function ondecoded(packet) {
                    var _this3 = this;
                    // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
                    nextTick(function() {
                        _this3.emitReserved("packet", packet);
                    }, this.setTimeoutFn);
                }
            },
            {
                key: "onerror",
                value: function onerror(err) {
                    this.emitReserved("error", err);
                }
            },
            {
                key: "socket",
                value: function socket(nsp, opts) {
                    var socket = this.nsps[nsp];
                    if (!socket) {
                        socket = new Socket(this, nsp, opts);
                        this.nsps[nsp] = socket;
                    } else if (this._autoConnect && !socket.active) socket.connect();
                    return socket;
                }
            },
            {
                key: "_destroy",
                value: function _destroy(socket) {
                    var nsps = Object.keys(this.nsps);
                    for(var _i = 0, _nsps = nsps; _i < _nsps.length; _i++){
                        var nsp = _nsps[_i];
                        var _socket = this.nsps[nsp];
                        if (_socket.active) return;
                    }
                    this._close();
                }
            },
            {
                key: "_packet",
                value: function _packet(packet) {
                    var encodedPackets = this.encoder.encode(packet);
                    for(var i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
                }
            },
            {
                key: "cleanup",
                value: function cleanup() {
                    this.subs.forEach(function(subDestroy) {
                        return subDestroy();
                    });
                    this.subs.length = 0;
                    this.decoder.destroy();
                }
            },
            {
                key: "_close",
                value: function _close() {
                    this.skipReconnect = true;
                    this._reconnecting = false;
                    this.onclose("forced close");
                    if (this.engine) this.engine.close();
                }
            },
            {
                key: "disconnect",
                value: function disconnect() {
                    return this._close();
                }
            },
            {
                key: "onclose",
                value: function onclose(reason, description) {
                    this.cleanup();
                    this.backoff.reset();
                    this._readyState = "closed";
                    this.emitReserved("close", reason, description);
                    if (this._reconnection && !this.skipReconnect) this.reconnect();
                }
            },
            {
                key: "reconnect",
                value: function reconnect() {
                    var _this4 = this;
                    if (this._reconnecting || this.skipReconnect) return this;
                    var self1 = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) {
                        this.backoff.reset();
                        this.emitReserved("reconnect_failed");
                        this._reconnecting = false;
                    } else {
                        var delay = this.backoff.duration();
                        this._reconnecting = true;
                        var timer = this.setTimeoutFn(function() {
                            if (self1.skipReconnect) return;
                            _this4.emitReserved("reconnect_attempt", self1.backoff.attempts); // check again for the case socket closed in above events
                            if (self1.skipReconnect) return;
                            self1.open(function(err) {
                                if (err) {
                                    self1._reconnecting = false;
                                    self1.reconnect();
                                    _this4.emitReserved("reconnect_error", err);
                                } else self1.onreconnect();
                            });
                        }, delay);
                        if (this.opts.autoUnref) timer.unref();
                        this.subs.push(function subDestroy() {
                            clearTimeout(timer);
                        });
                    }
                }
            },
            {
                key: "onreconnect",
                value: function onreconnect() {
                    var attempt = this.backoff.attempts;
                    this._reconnecting = false;
                    this.backoff.reset();
                    this.emitReserved("reconnect", attempt);
                }
            }
        ]);
        return Manager;
    }(Emitter);
    /**
   * Managers cache.
   */ var cache = {};
    function lookup(uri, opts) {
        if (_typeof(uri) === "object") {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        var parsed = url(uri, opts.path || "/socket.io");
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id]["nsps"];
        var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
        var io;
        if (newConnection) io = new Manager(source, opts);
        else {
            if (!cache[id]) cache[id] = new Manager(source, opts);
            io = cache[id];
        }
        if (parsed.query && !opts.query) opts.query = parsed.queryKey;
        return io.socket(parsed.path, opts);
    } // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
    // namespace (e.g. `io.connect(...)`), for backward compatibility
    _extends(lookup, {
        Manager: Manager,
        Socket: Socket,
        io: lookup,
        connect: lookup
    });
    return lookup;
});

},{}]},["fp5lG","4guCf","g7EVD"], "g7EVD", "parcelRequire7763")

//# sourceMappingURL=index.eccc3ca8.js.map
