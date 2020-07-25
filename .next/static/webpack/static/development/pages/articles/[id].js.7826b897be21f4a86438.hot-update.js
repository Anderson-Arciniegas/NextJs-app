webpackHotUpdate("static\\development\\pages\\articles\\[id].js",{

/***/ "./pages/articles/[id].js":
/*!********************************!*\
  !*** ./pages/articles/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Articles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "F:\\Users\\Draco Dormiens\\Desktop\\Destruck\\Web\\NextJs\\practica\\pages\\articles\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Articles() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  var articles = [{
    id: 0,
    title: "Blackwork Tattoo Style",
    autor: "Arfox",
    text: "Stylistically speaking, blackwork is a very broad categorical term. It applies almost any body art that's created using solely black ink, but as you can imagine, a lot can be done with this versatile and striking color. Looking through blackwork artists portfolios, you'll see all kinds of tattoo types from ancient sacred geometry to modern abstract ornamental designs to extremely detailed illustrative pieces. It is hands down the style where the most experimentation is currently occurring in the industry, and some of the work being produced today is absolutely mind-blowing.",
    date: "20/07/20",
    images: "/articles/black_work2.jpg"
  }, {
    id: 1,
    title: "Neo Traditional Tattoo Style",
    autor: "Derfox",
    text: "Neo traditional, as the name implies, is an evolution of the traditional style. It features the core properties of its predecessor, like pronounced linework and extremely vibrant colors but it also has an illustrative quality to it. This is because Neo traditional artists are highly influenced by Art Nouveau and Art Deco aesthetics. The main difference between traditional tattoos and neo traditional tattoos is that neo traditional tattoos often have a broader color palette and a broader range of motifs. Pieces done in this style are known for their lush, decorative details as well as the use of natural imagery such as florals and animals.",
    date: "16/07/20",
    images: "/articles/neotradi2.jpg"
  }, {
    id: 2,
    title: "New School Tattoo Style",
    autor: "Rednar",
    text: "Don't let the name fool you, new school isn't really all that new anymore. It rose to prominence in the weirdness that was the late '80s and early '90s, but lately it has waned in popularity. This is probably because it was very much a product of its time, featuring a highly animated aesthetic that takes after popular entertainment from that period in American history. The style is cartoonish and wacky, featuring caricatures and other exaggerated figures. If you're the sort of person who likes their body art injected with the spirit of Ren and Stimpy, then this comic style is for you.",
    date: "04/04/20",
    images: "/articles/new_school1.jpg"
  }, {
    id: 3,
    title: "Realism Tattoo Style",
    autor: "Ander",
    text: "Though classic realism has been a part of the fine art since as far back as the Renaissance, it only found its way to the world of tattoos recently, cropping up around the latter half of the 20th century. Since then, this new tattoo style has become increasingly refined and extremely popular. As it now stands, you can find jaw-dropping color and black and grey portraits of pretty much any celebrity you can think of as well as realistic depictions of nature and just about anything else imaginable, even the surreal.",
    date: "18/01/20",
    images: "/articles/realism2.jpg"
  }];
  var article = {};
  articles.map(function (article1) {
    if (article1.id == id) {
      article = article1;
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pag_article",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, article.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, article.text), __jsx("img", {
    width: "100",
    src: article.images,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }))));
}

_s(Articles, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Articles;

var _c;

$RefreshReg$(_c, "Articles");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcnRpY2xlcy8uanMiXSwibmFtZXMiOlsiQXJ0aWNsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYXJ0aWNsZXMiLCJ0aXRsZSIsImF1dG9yIiwidGV4dCIsImRhdGUiLCJpbWFnZXMiLCJhcnRpY2xlIiwibWFwIiwiYXJ0aWNsZTEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSWUsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUU5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRjhCLE1BR3ZCQyxFQUh1QixHQUdqQkYsTUFBTSxDQUFDRyxLQUhVLENBR3ZCRCxFQUh1QjtBQUs5QixNQUFNRSxRQUFRLEdBQUcsQ0FDYjtBQUNJRixNQUFFLEVBQUUsQ0FEUjtBQUVJRyxTQUFLLEVBQUUsd0JBRlg7QUFHSUMsU0FBSyxFQUFFLE9BSFg7QUFJSUMsUUFBSSxFQUFFLHNrQkFKVjtBQUtJQyxRQUFJLEVBQUUsVUFMVjtBQU1JQyxVQUFNLEVBQUU7QUFOWixHQURhLEVBU2I7QUFDSVAsTUFBRSxFQUFFLENBRFI7QUFFSUcsU0FBSyxFQUFFLDhCQUZYO0FBR0lDLFNBQUssRUFBRSxRQUhYO0FBSUlDLFFBQUksRUFBRSx3b0JBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFO0FBTlosR0FUYSxFQWlCYjtBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJRyxTQUFLLEVBQUUseUJBRlg7QUFHSUMsU0FBSyxFQUFFLFFBSFg7QUFJSUMsUUFBSSxFQUFFLGlsQkFKVjtBQUtJQyxRQUFJLEVBQUUsVUFMVjtBQU1JQyxVQUFNLEVBQUU7QUFOWixHQWpCYSxFQXlCYjtBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJRyxTQUFLLEVBQUUsc0JBRlg7QUFHSUMsU0FBSyxFQUFFLE9BSFg7QUFJSUMsUUFBSSxFQUFFLHlnQkFKVjtBQUtJQyxRQUFJLEVBQUUsVUFMVjtBQU1JQyxVQUFNLEVBQUU7QUFOWixHQXpCYSxDQUFqQjtBQW9DQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBTixVQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFTQyxRQUFULEVBQWtCO0FBRTdCLFFBQUdBLFFBQVEsQ0FBQ1YsRUFBVCxJQUFlQSxFQUFsQixFQUFxQjtBQUVuQlEsYUFBTyxHQUFHRSxRQUFWO0FBQ0Q7QUFFRixHQVBEO0FBU0EsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRixPQUFPLENBQUNMLEtBQWQsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0ssT0FBTyxDQUFDSCxJQUFiLENBRkosRUFHSTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQWlCLE9BQUcsRUFBRUcsT0FBTyxDQUFDRCxNQUE5QjtBQUFzQyxPQUFHLEVBQUMsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREosQ0FEQSxDQURKO0FBY0g7O0dBbEV1QlYsUTtVQUVMRSxxRDs7O0tBRktGLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFydGljbGVzXFxbaWRdLmpzLjc4MjZiODk3YmUyMWY0YTg2NDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlcygpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTsgXHJcblxyXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBbXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQmxhY2t3b3JrIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiQXJmb3hcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU3R5bGlzdGljYWxseSBzcGVha2luZywgYmxhY2t3b3JrIGlzIGEgdmVyeSBicm9hZCBjYXRlZ29yaWNhbCB0ZXJtLiBJdCBhcHBsaWVzIGFsbW9zdCBhbnkgYm9keSBhcnQgdGhhdCdzIGNyZWF0ZWQgdXNpbmcgc29sZWx5IGJsYWNrIGluaywgYnV0IGFzIHlvdSBjYW4gaW1hZ2luZSwgYSBsb3QgY2FuIGJlIGRvbmUgd2l0aCB0aGlzIHZlcnNhdGlsZSBhbmQgc3RyaWtpbmcgY29sb3IuIExvb2tpbmcgdGhyb3VnaCBibGFja3dvcmsgYXJ0aXN0cyBwb3J0Zm9saW9zLCB5b3UnbGwgc2VlIGFsbCBraW5kcyBvZiB0YXR0b28gdHlwZXMgZnJvbSBhbmNpZW50IHNhY3JlZCBnZW9tZXRyeSB0byBtb2Rlcm4gYWJzdHJhY3Qgb3JuYW1lbnRhbCBkZXNpZ25zIHRvIGV4dHJlbWVseSBkZXRhaWxlZCBpbGx1c3RyYXRpdmUgcGllY2VzLiBJdCBpcyBoYW5kcyBkb3duIHRoZSBzdHlsZSB3aGVyZSB0aGUgbW9zdCBleHBlcmltZW50YXRpb24gaXMgY3VycmVudGx5IG9jY3VycmluZyBpbiB0aGUgaW5kdXN0cnksIGFuZCBzb21lIG9mIHRoZSB3b3JrIGJlaW5nIHByb2R1Y2VkIHRvZGF5IGlzIGFic29sdXRlbHkgbWluZC1ibG93aW5nLlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIyMC8wNy8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBcIi9hcnRpY2xlcy9ibGFja193b3JrMi5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmVvIFRyYWRpdGlvbmFsIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiRGVyZm94XCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5lbyB0cmFkaXRpb25hbCwgYXMgdGhlIG5hbWUgaW1wbGllcywgaXMgYW4gZXZvbHV0aW9uIG9mIHRoZSB0cmFkaXRpb25hbCBzdHlsZS4gSXQgZmVhdHVyZXMgdGhlIGNvcmUgcHJvcGVydGllcyBvZiBpdHMgcHJlZGVjZXNzb3IsIGxpa2UgcHJvbm91bmNlZCBsaW5ld29yayBhbmQgZXh0cmVtZWx5IHZpYnJhbnQgY29sb3JzIGJ1dCBpdCBhbHNvIGhhcyBhbiBpbGx1c3RyYXRpdmUgcXVhbGl0eSB0byBpdC4gVGhpcyBpcyBiZWNhdXNlIE5lbyB0cmFkaXRpb25hbCBhcnRpc3RzIGFyZSBoaWdobHkgaW5mbHVlbmNlZCBieSBBcnQgTm91dmVhdSBhbmQgQXJ0IERlY28gYWVzdGhldGljcy4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIHRyYWRpdGlvbmFsIHRhdHRvb3MgYW5kIG5lbyB0cmFkaXRpb25hbCB0YXR0b29zIGlzIHRoYXQgbmVvIHRyYWRpdGlvbmFsIHRhdHRvb3Mgb2Z0ZW4gaGF2ZSBhIGJyb2FkZXIgY29sb3IgcGFsZXR0ZSBhbmQgYSBicm9hZGVyIHJhbmdlIG9mIG1vdGlmcy4gUGllY2VzIGRvbmUgaW4gdGhpcyBzdHlsZSBhcmUga25vd24gZm9yIHRoZWlyIGx1c2gsIGRlY29yYXRpdmUgZGV0YWlscyBhcyB3ZWxsIGFzIHRoZSB1c2Ugb2YgbmF0dXJhbCBpbWFnZXJ5IHN1Y2ggYXMgZmxvcmFscyBhbmQgYW5pbWFscy5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTYvMDcvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogXCIvYXJ0aWNsZXMvbmVvdHJhZGkyLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOZXcgU2Nob29sIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiUmVkbmFyXCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRvbid0IGxldCB0aGUgbmFtZSBmb29sIHlvdSwgbmV3IHNjaG9vbCBpc24ndCByZWFsbHkgYWxsIHRoYXQgbmV3IGFueW1vcmUuIEl0IHJvc2UgdG8gcHJvbWluZW5jZSBpbiB0aGUgd2VpcmRuZXNzIHRoYXQgd2FzIHRoZSBsYXRlICc4MHMgYW5kIGVhcmx5ICc5MHMsIGJ1dCBsYXRlbHkgaXQgaGFzIHdhbmVkIGluIHBvcHVsYXJpdHkuIFRoaXMgaXMgcHJvYmFibHkgYmVjYXVzZSBpdCB3YXMgdmVyeSBtdWNoIGEgcHJvZHVjdCBvZiBpdHMgdGltZSwgZmVhdHVyaW5nIGEgaGlnaGx5IGFuaW1hdGVkIGFlc3RoZXRpYyB0aGF0IHRha2VzIGFmdGVyIHBvcHVsYXIgZW50ZXJ0YWlubWVudCBmcm9tIHRoYXQgcGVyaW9kIGluIEFtZXJpY2FuIGhpc3RvcnkuIFRoZSBzdHlsZSBpcyBjYXJ0b29uaXNoIGFuZCB3YWNreSwgZmVhdHVyaW5nIGNhcmljYXR1cmVzIGFuZCBvdGhlciBleGFnZ2VyYXRlZCBmaWd1cmVzLiBJZiB5b3UncmUgdGhlIHNvcnQgb2YgcGVyc29uIHdobyBsaWtlcyB0aGVpciBib2R5IGFydCBpbmplY3RlZCB3aXRoIHRoZSBzcGlyaXQgb2YgUmVuIGFuZCBTdGltcHksIHRoZW4gdGhpcyBjb21pYyBzdHlsZSBpcyBmb3IgeW91LlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIwNC8wNC8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBcIi9hcnRpY2xlcy9uZXdfc2Nob29sMS5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiUmVhbGlzbSBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIkFuZGVyXCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRob3VnaCBjbGFzc2ljIHJlYWxpc20gaGFzIGJlZW4gYSBwYXJ0IG9mIHRoZSBmaW5lIGFydCBzaW5jZSBhcyBmYXIgYmFjayBhcyB0aGUgUmVuYWlzc2FuY2UsIGl0IG9ubHkgZm91bmQgaXRzIHdheSB0byB0aGUgd29ybGQgb2YgdGF0dG9vcyByZWNlbnRseSwgY3JvcHBpbmcgdXAgYXJvdW5kIHRoZSBsYXR0ZXIgaGFsZiBvZiB0aGUgMjB0aCBjZW50dXJ5LiBTaW5jZSB0aGVuLCB0aGlzIG5ldyB0YXR0b28gc3R5bGUgaGFzIGJlY29tZSBpbmNyZWFzaW5nbHkgcmVmaW5lZCBhbmQgZXh0cmVtZWx5IHBvcHVsYXIuIEFzIGl0IG5vdyBzdGFuZHMsIHlvdSBjYW4gZmluZCBqYXctZHJvcHBpbmcgY29sb3IgYW5kIGJsYWNrIGFuZCBncmV5IHBvcnRyYWl0cyBvZiBwcmV0dHkgbXVjaCBhbnkgY2VsZWJyaXR5IHlvdSBjYW4gdGhpbmsgb2YgYXMgd2VsbCBhcyByZWFsaXN0aWMgZGVwaWN0aW9ucyBvZiBuYXR1cmUgYW5kIGp1c3QgYWJvdXQgYW55dGhpbmcgZWxzZSBpbWFnaW5hYmxlLCBldmVuIHRoZSBzdXJyZWFsLlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIxOC8wMS8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBcIi9hcnRpY2xlcy9yZWFsaXNtMi5qcGdcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgYXJ0aWNsZSA9IHt9O1xyXG5cclxuICAgIGFydGljbGVzLm1hcChmdW5jdGlvbihhcnRpY2xlMSl7XHJcblxyXG4gICAgICBpZihhcnRpY2xlMS5pZCA9PSBpZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXJ0aWNsZSA9IGFydGljbGUxO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdfYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPnsgYXJ0aWNsZS50aXRsZSB9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPnsgYXJ0aWNsZS50ZXh0IH08L3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwXCIgc3JjPXthcnRpY2xlLmltYWdlc30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=