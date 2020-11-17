webpackHotUpdate_N_E("pages/home",{

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var cachedObserver;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

function prefetch(router, href, as, options) {
  if (false) {}
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale
  }).then(function (success) {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (true ? "\nOpen your browser's console to view the Component stack trace." : undefined));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.pathname || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var cleanup = _react["default"].useRef();

  var setRef = _react["default"].useCallback(function (el) {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      var isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, function () {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = function (e) {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "KTrcstNG+xXPZMSCSWIouwhlVnY=");

_c = Link;
var _default = Link;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\React\\next\\game\\pages\\home.js";


function TopBar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "top-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "left-content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "left-list",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fas fa-headset"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 16,
                          columnNumber: 12
                        }, this), " Support"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fas fa-envelope"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 21,
                          columnNumber: 12
                        }, this), " info@Dooplo.com"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 20,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "language-selector",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                          name: "language",
                          className: "language",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                            value: "1",
                            children: "English"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 27,
                            columnNumber: 13
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                            value: "2",
                            children: "France"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 28,
                            columnNumber: 13
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                            value: "3",
                            children: "Japan"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 29,
                            columnNumber: 13
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 26,
                          columnNumber: 12
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 25,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 10
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "right-content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "right-list",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "cart-icon tm-dropdown",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fas fa-cart-arrow-down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "cart-count",
                          children: "10"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "tm-dropdown-menu",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            className: "list",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "list-item",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "close",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-times"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 45,
                                  columnNumber: 18
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 44,
                                columnNumber: 16
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                                className: "number-list",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "24"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 48,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "25"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 49,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "26"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 50,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "27"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 51,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "28"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 52,
                                  columnNumber: 16
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 47,
                                columnNumber: 15
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 43,
                              columnNumber: 14
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "list-item",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "close",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-times"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 57,
                                  columnNumber: 18
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 56,
                                columnNumber: 16
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                                className: "number-list",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "24"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 60,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "25"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 61,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "26"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 62,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "27"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 63,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "28"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 64,
                                  columnNumber: 16
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 59,
                                columnNumber: 15
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 55,
                              columnNumber: 14
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "list-item",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "close",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-times"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 69,
                                  columnNumber: 18
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 68,
                                columnNumber: 16
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                                className: "number-list",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "24"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 72,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "25"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 73,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "26"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 74,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "27"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 75,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "28"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 76,
                                  columnNumber: 16
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 71,
                                columnNumber: 15
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 67,
                              columnNumber: 14
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              className: "list-item",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "close",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-times"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 81,
                                  columnNumber: 17
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 80,
                                columnNumber: 15
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                                className: "number-list",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "24"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 84,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "25"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 85,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "26"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 86,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "27"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 87,
                                  columnNumber: 16
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                  children: "28"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 88,
                                  columnNumber: 16
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 83,
                                columnNumber: 15
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 79,
                              columnNumber: 14
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 42,
                            columnNumber: 13
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "cart.html",
                            className: "link-btn",
                            children: "Cart Page"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 92,
                            columnNumber: 13
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "notofication tm-dropdown",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fas fa-bell"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "count",
                          children: "11"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "tm-dropdown-menu",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                            className: "list",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-bell"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 104,
                                  columnNumber: 17
                                }, this), "Invest Exchange"]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 103,
                                columnNumber: 16
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 102,
                              columnNumber: 15
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-bell"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 110,
                                  columnNumber: 17
                                }, this), "Invest Exchange"]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 109,
                                columnNumber: 16
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 108,
                              columnNumber: 15
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-bell"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 116,
                                  columnNumber: 17
                                }, this), "Invest Exchange"]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 115,
                                columnNumber: 16
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 114,
                              columnNumber: 15
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-bell"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 122,
                                  columnNumber: 17
                                }, this), "Invest Exchange"]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 121,
                                columnNumber: 16
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 120,
                              columnNumber: 15
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                href: "#",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fas fa-bell"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 128,
                                  columnNumber: 17
                                }, this), "Invest Exchange"]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 127,
                                columnNumber: 16
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 126,
                              columnNumber: 15
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 14
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        className: "sign-in",
                        "data-toggle": "modal",
                        "data-target": "#login",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fas fa-user"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 138,
                          columnNumber: 12
                        }, this), " Sign In"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 10
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mainmenu-area",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                className: "navbar navbar-expand-lg navbar-light",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "navbar-brand",
                  href: "index.html",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "assets/images/logo.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "navbar-toggler",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#main_menu",
                  "aria-controls": "main_menu",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "navbar-toggler-icon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "collapse navbar-collapse fixed-height",
                  id: "main_menu",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "navbar-nav ml-auto",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "nav-item dropdown",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link active dropdown-toggle",
                        href: "#",
                        role: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                        children: ["Home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "mr-hover-effect"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 167,
                          columnNumber: 11
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "dropdown-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "index.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 170,
                              columnNumber: 64
                            }, this), "Home 1"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 170,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 170,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "index2.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 171,
                              columnNumber: 65
                            }, this), " Home 2"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 171,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 169,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link",
                        href: "play.html",
                        children: ["Play", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "mr-hover-effect"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 13
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link",
                        href: "lottery.html",
                        children: ["lottery", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "mr-hover-effect"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 180,
                          columnNumber: 13
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link",
                        href: "tournaments.html",
                        children: ["tournaments", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "mr-hover-effect"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 13
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "nav-item dropdown",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link dropdown-toggle",
                        href: "#",
                        role: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                        children: ["Pages", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "mr-hover-effect"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "dropdown-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "about.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 193,
                              columnNumber: 64
                            }, this), "About"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "affiliate.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 194,
                              columnNumber: 68
                            }, this), "Affiliate"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 194,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 194,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "awards.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 195,
                              columnNumber: 65
                            }, this), "Awards"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 195,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 195,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "bonus.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 196,
                              columnNumber: 64
                            }, this), "Bonus"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "cart.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 197,
                              columnNumber: 63
                            }, this), "Cart"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 197,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "faq.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 198,
                              columnNumber: 62
                            }, this), "Faq"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 198,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 198,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "how-it-work.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 199,
                              columnNumber: 70
                            }, this), "How It Work"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 199,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 199,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "terms-conditions.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 200,
                              columnNumber: 75
                            }, this), "Terms & Condition"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 200,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 200,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "terms-conditions-details.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 201,
                              columnNumber: 83
                            }, this), "Condition Details"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 201,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "dropdown-item",
                            href: "404.html",
                            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "fa fa-angle-double-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 202,
                              columnNumber: 62
                            }, this), "404"]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 202,
                            columnNumber: 16
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 202,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 192,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link",
                        href: "contact.html",
                        children: ["Contact", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "mr-hover-effect"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 207,
                          columnNumber: 14
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 12
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 10
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "mybtn1",
                    "data-toggle": "modal",
                    "data-target": "#signin",
                    children: " Join us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "hero-area",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "col-lg-5 d-flex align-self-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "left-content",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  "class": "subtitle",
                  children: "New Crypto Game"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 6
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  "class": "title",
                  children: "PLay To WIN"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 6
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  "class": "text",
                  children: "Play, Invest,Exchange and Join the Contest with high rewards at Dooplo!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 6
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "links",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      "class": "mybtn1 link1",
                      children: "Get Started Now!"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 7
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 6
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 4
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "col-lg-7",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "hero-img2 d-block d-md-none",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "assets/images/heroarea.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 4
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "hero-img d-none d-md-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "img-fluid full-image",
                src: "assets/images/heroarea.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape phone",
                src: "assets/images/h-shapes/phone.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape man",
                src: "assets/images/h-shapes/man222.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape ripple",
                src: "assets/images/h-shapes/ripple.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape ripple2",
                src: "assets/images/h-shapes/ripple1.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape bitcoin1",
                src: "assets/images/h-shapes/bitcoin1.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape bitcoin2",
                src: "assets/images/h-shapes/bitcoin2.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape shape-icon",
                src: "assets/images/h-shapes/shape.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape award-bg",
                src: "assets/images/h-shapes/award/bg.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape award",
                src: "assets/images/h-shapes/award/award.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape gift-bg",
                src: "assets/images/h-shapes/giftbox/bg.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape gift",
                src: "assets/images/h-shapes/giftbox/gift.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape shield-bg",
                src: "assets/images/h-shapes/shield/bg.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                "class": "shape shield",
                src: "assets/images/h-shapes/shield/shield.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 4
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 3
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 1
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      "class": "featured-game",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "features",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "col-lg-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "feature-box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "feature-box-inner",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    "class": "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      "class": "col-lg-4 col-md-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        "class": "single-feature",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          "class": "icon one",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "assets/images/feature/icon1.png",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 279,
                            columnNumber: 13
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 278,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          "class": "content",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                            "class": "title",
                            children: "Exclusive Offer"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 282,
                            columnNumber: 13
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#",
                            "class": "link",
                            children: ["read more ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              "class": "fas fa-arrow-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 285,
                              columnNumber: 48
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 285,
                            columnNumber: 13
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 281,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 277,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      "class": "col-lg-4 col-md-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        "class": "single-feature",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          "class": "icon two",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "assets/images/feature/icon2.png",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 292,
                            columnNumber: 13
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 291,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          "class": "content",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                            "class": "title",
                            children: "Provably Fair"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 295,
                            columnNumber: 13
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#",
                            "class": "link",
                            children: ["read more ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              "class": "fas fa-arrow-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 298,
                              columnNumber: 48
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 298,
                            columnNumber: 13
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 294,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 289,
                      columnNumber: 10
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      "class": "col-lg-4 col-md-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        "class": "single-feature",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          "class": "icon three",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "assets/images/feature/icon3.png",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 305,
                            columnNumber: 13
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 304,
                          columnNumber: 12
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          "class": "content",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                            "class": "title",
                            children: "24/7 Support"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 308,
                            columnNumber: 13
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#",
                            "class": "link",
                            children: ["read more ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              "class": "fas fa-arrow-right"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 311,
                              columnNumber: 48
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 311,
                            columnNumber: 13
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 307,
                          columnNumber: 12
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 303,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 10
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "row justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "col-lg-8 col-md-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "section-heading",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "subtitle",
                children: "Try to check out our"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                "class": "title",
                children: "featured games"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "text",
                children: "Check out our latest featured game! To meet today's challenges & earn cryptocurrency. Top 10 players receive prizes every hour!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 4
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "col-lg-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "game-slider",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "single-game",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "assets/images/game/icon1.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    "class": "mybtn2",
                    children: "PLay NoW !"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "single-game",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "assets/images/game/icon2.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 10
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    "class": "mybtn2",
                    children: "PLay NoW !"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "single-game",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "assets/images/game/icon3.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 10
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    "class": "mybtn2",
                    children: "PLay NoW !"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "single-game",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "assets/images/game/icon2.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 362,
                    columnNumber: 10
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    "class": "mybtn2",
                    children: "PLay NoW !"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 363,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 1
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}
_c = TopBar;

var _c;

$RefreshReg$(_c, "TopBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic2hhbGxvdyIsImxvY2FsZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFjdHVhbCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsImNsZWFudXAiLCJzZXRSZWYiLCJlbCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJUb3BCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQVFBOztBQXVCQTtBQUNBLElBQU1B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QUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBYkQsZUFtQkM7QUFBSyx5QkFBTSxNQUFYO0FBQUEsdUNBQ0M7QUFBSywyQkFBTSxhQUFYO0FBQUEsMENBQ0U7QUFBSyx1QkFBRyxFQUFDLDhCQUFUO0FBQXdDLHVCQUFHLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUcsd0JBQUksRUFBQyxHQUFSO0FBQVksNkJBQU0sUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0UUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUFrWEg7S0FuWHVCQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuODY5OWViMmUzMzMwNmE1M2FjNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IGNsZWFudXAgPSBSZWFjdC51c2VSZWY8KCkgPT4gdm9pZD4oKVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYW51cC5jdXJyZW50KClcbiAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGVsICYmIGVsLnRhZ05hbWUgJiYgaXNMb2NhbFVSTChocmVmKSkge1xuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IGxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3AsIGNoaWxkUmVmLCBocmVmLCBhcywgcm91dGVyLCBsb2NhbGVdXG4gIClcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BCYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wLWhlYWRlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnQtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxlZnQtbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhZHNldFwiPjwvaT5cdFN1cHBvcnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT5cdGluZm9ARG9vcGxvLmNvbVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2Utc2VsZWN0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgbmFtZT1cImxhbmd1YWdlXCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5FbmdsaXNoPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCI+RnJhbmNlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIzXCI+SmFwYW48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJyaWdodC1saXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaWNvbiB0bS1kcm9wZG93blwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhcnQtYXJyb3ctZG93blwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtY291bnRcIj4xMDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG0tZHJvcGRvd24tbWVudVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJudW1iZXItbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjU8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjY8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjc8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjg8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJudW1iZXItbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjU8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjY8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjc8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjg8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJudW1iZXItbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjU8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjY8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjc8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjg8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJudW1iZXItbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjU8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+MjY8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjc8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Mjg8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiY2FydC5odG1sXCIgY2xhc3NOYW1lPVwibGluay1idG5cIj5DYXJ0IFBhZ2U8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm90b2ZpY2F0aW9uIHRtLWRyb3Bkb3duXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmVsbFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+MTE8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRtLWRyb3Bkb3duLW1lbnVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludmVzdCBFeGNoYW5nZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludmVzdCBFeGNoYW5nZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludmVzdCBFeGNoYW5nZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludmVzdCBFeGNoYW5nZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludmVzdCBFeGNoYW5nZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaWduLWluXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2xvZ2luXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT4gU2lnbiBJblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbm1lbnUtYXJlYVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPiAgICAgICAgICAgICAgICAgXHJcblx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cImluZGV4Lmh0bWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbWFpbl9tZW51XCIgYXJpYS1jb250cm9scz1cIm1haW5fbWVudVwiXHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgZml4ZWQtaGVpZ2h0XCIgaWQ9XCJtYWluX21lbnVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtci1ob3Zlci1lZmZlY3RcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJpbmRleC5odG1sXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5Ib21lIDE8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImluZGV4Mi5odG1sXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT4gSG9tZSAyPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwicGxheS5odG1sXCI+UGxheVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLWhvdmVyLWVmZmVjdFwiPjwvZGl2PjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwibG90dGVyeS5odG1sXCI+bG90dGVyeVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLWhvdmVyLWVmZmVjdFwiPjwvZGl2PjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwidG91cm5hbWVudHMuaHRtbFwiPnRvdXJuYW1lbnRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItaG92ZXItZWZmZWN0XCI+PC9kaXY+PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiICByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItaG92ZXItZWZmZWN0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiYWJvdXQuaHRtbFwiPiA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+QWJvdXQ8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImFmZmlsaWF0ZS5odG1sXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5BZmZpbGlhdGU8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImF3YXJkcy5odG1sXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5Bd2FyZHM8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImJvbnVzLmh0bWxcIj4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkJvbnVzPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJjYXJ0Lmh0bWxcIj4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkNhcnQ8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImZhcS5odG1sXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5GYXE8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImhvdy1pdC13b3JrLmh0bWxcIj4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkhvdyBJdCBXb3JrPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ0ZXJtcy1jb25kaXRpb25zLmh0bWxcIj4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPlRlcm1zICYgQ29uZGl0aW9uPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJ0ZXJtcy1jb25kaXRpb25zLWRldGFpbHMuaHRtbFwiPiA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Q29uZGl0aW9uIERldGFpbHM8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIjQwNC5odG1sXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT40MDQ8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImNvbnRhY3QuaHRtbFwiPkNvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLWhvdmVyLWVmZmVjdFwiPjwvZGl2PjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibXlidG4xXCIgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzaWduaW5cIj4gSm9pbiB1czwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2hlYWRlcj5cclxuXHJcbjxkaXYgY2xhc3M9XCJoZXJvLWFyZWFcIj5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNSBkLWZsZXggYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8aDUgY2xhc3M9XCJzdWJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHROZXcgQ3J5cHRvIEdhbWVcclxuXHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFBMYXkgVG8gV0lOXHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0UGxheSwgSW52ZXN0LEV4Y2hhbmdlIGFuZCBKb2luIHRoZVxyXG5cdFx0XHRcdFx0XHRcdENvbnRlc3Qgd2l0aCBoaWdoIHJld2FyZHMgYXQgRG9vcGxvIVx0XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlua3NcIj5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0PGEgIGNsYXNzPVwibXlidG4xIGxpbmsxXCI+R2V0IFN0YXJ0ZWQgTm93ITwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTdcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlcm8taW1nMiBkLWJsb2NrIGQtbWQtbm9uZVwiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9oZXJvYXJlYS5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVyby1pbWcgZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiaW1nLWZsdWlkIGZ1bGwtaW1hZ2VcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2hlcm9hcmVhLnBuZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwic2hhcGUgcGhvbmVcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2gtc2hhcGVzL3Bob25lLnBuZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwic2hhcGUgbWFuXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9oLXNoYXBlcy9tYW4yMjIucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJzaGFwZSByaXBwbGVcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2gtc2hhcGVzL3JpcHBsZS5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInNoYXBlIHJpcHBsZTJcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2gtc2hhcGVzL3JpcHBsZTEucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJzaGFwZSBiaXRjb2luMVwiIHNyYz1cImFzc2V0cy9pbWFnZXMvaC1zaGFwZXMvYml0Y29pbjEucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJzaGFwZSBiaXRjb2luMlwiIHNyYz1cImFzc2V0cy9pbWFnZXMvaC1zaGFwZXMvYml0Y29pbjIucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJzaGFwZSBzaGFwZS1pY29uXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9oLXNoYXBlcy9zaGFwZS5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInNoYXBlIGF3YXJkLWJnXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9oLXNoYXBlcy9hd2FyZC9iZy5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInNoYXBlIGF3YXJkXCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9oLXNoYXBlcy9hd2FyZC9hd2FyZC5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInNoYXBlIGdpZnQtYmdcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2gtc2hhcGVzL2dpZnRib3gvYmcucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJzaGFwZSBnaWZ0XCIgc3JjPVwiYXNzZXRzL2ltYWdlcy9oLXNoYXBlcy9naWZ0Ym94L2dpZnQucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJzaGFwZSBzaGllbGQtYmdcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2gtc2hhcGVzL3NoaWVsZC9iZy5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0PGltZyBjbGFzcz1cInNoYXBlIHNoaWVsZFwiIHNyYz1cImFzc2V0cy9pbWFnZXMvaC1zaGFwZXMvc2hpZWxkL3NoaWVsZC5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPHNlY3Rpb24gY2xhc3M9XCJmZWF0dXJlZC1nYW1lXCI+XHJcblx0XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZmVhdHVyZXNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZlYXR1cmUtYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZlYXR1cmUtYm94LWlubmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzaW5nbGUtZmVhdHVyZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImljb24gb25lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9mZWF0dXJlL2ljb24xLnBuZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFeGNsdXNpdmUgT2ZmZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpbmtcIj5yZWFkIG1vcmUgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIj48L2k+PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2luZ2xlLWZlYXR1cmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpY29uIHR3b1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZmVhdHVyZS9pY29uMi5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UHJvdmFibHkgRmFpclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua1wiPnJlYWQgbW9yZSA8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1yaWdodFwiPjwvaT48L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzaW5nbGUtZmVhdHVyZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImljb24gdGhyZWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZlYXR1cmUvaWNvbjMucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MjQvNyBTdXBwb3J0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaW5rXCI+cmVhZCBtb3JlIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LXJpZ2h0XCI+PC9pPjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLW1kLTEwXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+XHJcblx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cInN1YnRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRUcnkgdG8gY2hlY2sgb3V0IG91clxyXG5cdFx0XHRcdFx0XHQ8L2g1PiBcclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdGZlYXR1cmVkIGdhbWVzXHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwidGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2hlY2sgb3V0IG91ciBsYXRlc3QgZmVhdHVyZWQgZ2FtZSEgVG8gbWVldCB0b2RheSdzIGNoYWxsZW5nZXMgJiBlYXJuIGNyeXB0b2N1cnJlbmN5LiBUb3AgMTAgcGxheWVycyByZWNlaXZlIHByaXplcyBldmVyeSBob3VyIVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FtZS1zbGlkZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2luZ2xlLWdhbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9nYW1lL2ljb24xLnBuZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJteWJ0bjJcIj5QTGF5IE5vVyAhPC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2luZ2xlLWdhbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2dhbWUvaWNvbjIucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwibXlidG4yXCI+UExheSBOb1cgITwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNpbmdsZS1nYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9nYW1lL2ljb24zLnBuZ1wiIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm15YnRuMlwiPlBMYXkgTm9XICE8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzaW5nbGUtZ2FtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZ2FtZS9pY29uMi5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJteWJ0bjJcIj5QTGF5IE5vVyAhPC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvc2VjdGlvbj5cclxuPC9kaXY+XHJcblx0XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==