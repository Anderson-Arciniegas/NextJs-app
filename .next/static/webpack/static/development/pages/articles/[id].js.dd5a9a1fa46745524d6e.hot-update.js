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
var _jsxFileName = "F:\\Users\\Draco Dormiens\\Desktop\\Destruck\\Web\\NextJs\\practica\\pages\\articles\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Articles() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query;
  var articles = [{
    id: 0,
    title: "Blackwork Tattoo Style",
    autor: "Arfox",
    text: "Stylistically speaking, blackwork is a very broad categorical term. It applies almost any body art that's created using solely black ink, but as you can imagine, a lot can be done with this versatile and striking color. Looking through blackwork artists portfolios, you'll see all kinds of tattoo types from ancient sacred geometry to modern abstract ornamental designs to extremely detailed illustrative pieces. It is hands down the style where the most experimentation is currently occurring in the industry, and some of the work being produced today is absolutely mind-blowing.",
    date: "20/07/20",
    images: ["/articles/black_work2.jpg", "/articles/black_work1.jpg"]
  }, {
    id: 1,
    title: "Neo Traditional Tattoo Style",
    autor: "Derfox",
    text: "Neo traditional, as the name implies, is an evolution of the traditional style. It features the core properties of its predecessor, like pronounced linework and extremely vibrant colors but it also has an illustrative quality to it. This is because Neo traditional artists are highly influenced by Art Nouveau and Art Deco aesthetics. The main difference between traditional tattoos and neo traditional tattoos is that neo traditional tattoos often have a broader color palette and a broader range of motifs. Pieces done in this style are known for their lush, decorative details as well as the use of natural imagery such as florals and animals.",
    date: "16/07/20",
    images: ["/articles/neotradi2.jpg", "/articles/neotradi1.jpg"]
  }, {
    id: 2,
    title: "New School Tattoo Style",
    autor: "Rednar",
    text: "Don't let the name fool you, new school isn't really all that new anymore. It rose to prominence in the weirdness that was the late '80s and early '90s, but lately it has waned in popularity. This is probably because it was very much a product of its time, featuring a highly animated aesthetic that takes after popular entertainment from that period in American history. The style is cartoonish and wacky, featuring caricatures and other exaggerated figures. If you're the sort of person who likes their body art injected with the spirit of Ren and Stimpy, then this comic style is for you.",
    date: "04/04/20",
    images: ["/articles/new_school1.jpg", "/articles/new_school2.jpg"]
  }, {
    id: 3,
    title: "Realism Tattoo Style",
    autor: "Ander",
    text: "Though classic realism has been a part of the fine art since as far back as the Renaissance, it only found its way to the world of tattoos recently, cropping up around the latter half of the 20th century. Since then, this new tattoo style has become increasingly refined and extremely popular. As it now stands, you can find jaw-dropping color and black and grey portraits of pretty much any celebrity you can think of as well as realistic depictions of nature and just about anything else imaginable, even the surreal.",
    date: "18/01/20",
    images: ["/articles/realism2.jpg", "/articles/realism.jpg"]
  }];

  for (var i = 0; i <= articles.length; i++) {}

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcnRpY2xlcy8uanMiXSwibmFtZXMiOlsiQXJ0aWNsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYXJ0aWNsZXMiLCJ0aXRsZSIsImF1dG9yIiwidGV4dCIsImRhdGUiLCJpbWFnZXMiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRyxLQUFsQjtBQUVBLE1BQUlDLFFBQVEsR0FBRyxDQUNYO0FBQ0lGLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSx3QkFGWDtBQUdJQyxTQUFLLEVBQUUsT0FIWDtBQUlJQyxRQUFJLEVBQUUsc2tCQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRSxDQUFDLDJCQUFELEVBQTZCLDJCQUE3QjtBQU5aLEdBRFcsRUFTWDtBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJRyxTQUFLLEVBQUUsOEJBRlg7QUFHSUMsU0FBSyxFQUFFLFFBSFg7QUFJSUMsUUFBSSxFQUFFLHdvQkFKVjtBQUtJQyxRQUFJLEVBQUUsVUFMVjtBQU1JQyxVQUFNLEVBQUUsQ0FBQyx5QkFBRCxFQUEyQix5QkFBM0I7QUFOWixHQVRXLEVBaUJYO0FBQ0lQLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSx5QkFGWDtBQUdJQyxTQUFLLEVBQUUsUUFIWDtBQUlJQyxRQUFJLEVBQUUsaWxCQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRSxDQUFDLDJCQUFELEVBQTZCLDJCQUE3QjtBQU5aLEdBakJXLEVBeUJYO0FBQ0lQLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSxzQkFGWDtBQUdJQyxTQUFLLEVBQUUsT0FIWDtBQUlJQyxRQUFJLEVBQUUseWdCQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRSxDQUFDLHdCQUFELEVBQTBCLHVCQUExQjtBQU5aLEdBekJXLENBQWY7O0FBb0NBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxJQUFJTixRQUFRLENBQUNPLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQXlDLENBR3hDOztBQUdELFNBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1IsRUFBTCxDQURBLENBRko7QUFTSDs7R0F4RHVCSCxRO1VBRUxFLHFEOzs7S0FGS0YsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXJ0aWNsZXNcXFtpZF0uanMuZGQ1YTlhMWZhNDY3NDU1MjRkNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVzKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeTsgXHJcblxyXG4gICAgdmFyIGFydGljbGVzID0gW1xyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkJsYWNrd29yayBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIkFyZm94XCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlN0eWxpc3RpY2FsbHkgc3BlYWtpbmcsIGJsYWNrd29yayBpcyBhIHZlcnkgYnJvYWQgY2F0ZWdvcmljYWwgdGVybS4gSXQgYXBwbGllcyBhbG1vc3QgYW55IGJvZHkgYXJ0IHRoYXQncyBjcmVhdGVkIHVzaW5nIHNvbGVseSBibGFjayBpbmssIGJ1dCBhcyB5b3UgY2FuIGltYWdpbmUsIGEgbG90IGNhbiBiZSBkb25lIHdpdGggdGhpcyB2ZXJzYXRpbGUgYW5kIHN0cmlraW5nIGNvbG9yLiBMb29raW5nIHRocm91Z2ggYmxhY2t3b3JrIGFydGlzdHMgcG9ydGZvbGlvcywgeW91J2xsIHNlZSBhbGwga2luZHMgb2YgdGF0dG9vIHR5cGVzIGZyb20gYW5jaWVudCBzYWNyZWQgZ2VvbWV0cnkgdG8gbW9kZXJuIGFic3RyYWN0IG9ybmFtZW50YWwgZGVzaWducyB0byBleHRyZW1lbHkgZGV0YWlsZWQgaWxsdXN0cmF0aXZlIHBpZWNlcy4gSXQgaXMgaGFuZHMgZG93biB0aGUgc3R5bGUgd2hlcmUgdGhlIG1vc3QgZXhwZXJpbWVudGF0aW9uIGlzIGN1cnJlbnRseSBvY2N1cnJpbmcgaW4gdGhlIGluZHVzdHJ5LCBhbmQgc29tZSBvZiB0aGUgd29yayBiZWluZyBwcm9kdWNlZCB0b2RheSBpcyBhYnNvbHV0ZWx5IG1pbmQtYmxvd2luZy5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMjAvMDcvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogW1wiL2FydGljbGVzL2JsYWNrX3dvcmsyLmpwZ1wiLFwiL2FydGljbGVzL2JsYWNrX3dvcmsxLmpwZ1wiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmVvIFRyYWRpdGlvbmFsIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiRGVyZm94XCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5lbyB0cmFkaXRpb25hbCwgYXMgdGhlIG5hbWUgaW1wbGllcywgaXMgYW4gZXZvbHV0aW9uIG9mIHRoZSB0cmFkaXRpb25hbCBzdHlsZS4gSXQgZmVhdHVyZXMgdGhlIGNvcmUgcHJvcGVydGllcyBvZiBpdHMgcHJlZGVjZXNzb3IsIGxpa2UgcHJvbm91bmNlZCBsaW5ld29yayBhbmQgZXh0cmVtZWx5IHZpYnJhbnQgY29sb3JzIGJ1dCBpdCBhbHNvIGhhcyBhbiBpbGx1c3RyYXRpdmUgcXVhbGl0eSB0byBpdC4gVGhpcyBpcyBiZWNhdXNlIE5lbyB0cmFkaXRpb25hbCBhcnRpc3RzIGFyZSBoaWdobHkgaW5mbHVlbmNlZCBieSBBcnQgTm91dmVhdSBhbmQgQXJ0IERlY28gYWVzdGhldGljcy4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIHRyYWRpdGlvbmFsIHRhdHRvb3MgYW5kIG5lbyB0cmFkaXRpb25hbCB0YXR0b29zIGlzIHRoYXQgbmVvIHRyYWRpdGlvbmFsIHRhdHRvb3Mgb2Z0ZW4gaGF2ZSBhIGJyb2FkZXIgY29sb3IgcGFsZXR0ZSBhbmQgYSBicm9hZGVyIHJhbmdlIG9mIG1vdGlmcy4gUGllY2VzIGRvbmUgaW4gdGhpcyBzdHlsZSBhcmUga25vd24gZm9yIHRoZWlyIGx1c2gsIGRlY29yYXRpdmUgZGV0YWlscyBhcyB3ZWxsIGFzIHRoZSB1c2Ugb2YgbmF0dXJhbCBpbWFnZXJ5IHN1Y2ggYXMgZmxvcmFscyBhbmQgYW5pbWFscy5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTYvMDcvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogW1wiL2FydGljbGVzL25lb3RyYWRpMi5qcGdcIixcIi9hcnRpY2xlcy9uZW90cmFkaTEuanBnXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOZXcgU2Nob29sIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiUmVkbmFyXCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkRvbid0IGxldCB0aGUgbmFtZSBmb29sIHlvdSwgbmV3IHNjaG9vbCBpc24ndCByZWFsbHkgYWxsIHRoYXQgbmV3IGFueW1vcmUuIEl0IHJvc2UgdG8gcHJvbWluZW5jZSBpbiB0aGUgd2VpcmRuZXNzIHRoYXQgd2FzIHRoZSBsYXRlICc4MHMgYW5kIGVhcmx5ICc5MHMsIGJ1dCBsYXRlbHkgaXQgaGFzIHdhbmVkIGluIHBvcHVsYXJpdHkuIFRoaXMgaXMgcHJvYmFibHkgYmVjYXVzZSBpdCB3YXMgdmVyeSBtdWNoIGEgcHJvZHVjdCBvZiBpdHMgdGltZSwgZmVhdHVyaW5nIGEgaGlnaGx5IGFuaW1hdGVkIGFlc3RoZXRpYyB0aGF0IHRha2VzIGFmdGVyIHBvcHVsYXIgZW50ZXJ0YWlubWVudCBmcm9tIHRoYXQgcGVyaW9kIGluIEFtZXJpY2FuIGhpc3RvcnkuIFRoZSBzdHlsZSBpcyBjYXJ0b29uaXNoIGFuZCB3YWNreSwgZmVhdHVyaW5nIGNhcmljYXR1cmVzIGFuZCBvdGhlciBleGFnZ2VyYXRlZCBmaWd1cmVzLiBJZiB5b3UncmUgdGhlIHNvcnQgb2YgcGVyc29uIHdobyBsaWtlcyB0aGVpciBib2R5IGFydCBpbmplY3RlZCB3aXRoIHRoZSBzcGlyaXQgb2YgUmVuIGFuZCBTdGltcHksIHRoZW4gdGhpcyBjb21pYyBzdHlsZSBpcyBmb3IgeW91LlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIwNC8wNC8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBbXCIvYXJ0aWNsZXMvbmV3X3NjaG9vbDEuanBnXCIsXCIvYXJ0aWNsZXMvbmV3X3NjaG9vbDIuanBnXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJSZWFsaXNtIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiQW5kZXJcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVGhvdWdoIGNsYXNzaWMgcmVhbGlzbSBoYXMgYmVlbiBhIHBhcnQgb2YgdGhlIGZpbmUgYXJ0IHNpbmNlIGFzIGZhciBiYWNrIGFzIHRoZSBSZW5haXNzYW5jZSwgaXQgb25seSBmb3VuZCBpdHMgd2F5IHRvIHRoZSB3b3JsZCBvZiB0YXR0b29zIHJlY2VudGx5LCBjcm9wcGluZyB1cCBhcm91bmQgdGhlIGxhdHRlciBoYWxmIG9mIHRoZSAyMHRoIGNlbnR1cnkuIFNpbmNlIHRoZW4sIHRoaXMgbmV3IHRhdHRvbyBzdHlsZSBoYXMgYmVjb21lIGluY3JlYXNpbmdseSByZWZpbmVkIGFuZCBleHRyZW1lbHkgcG9wdWxhci4gQXMgaXQgbm93IHN0YW5kcywgeW91IGNhbiBmaW5kIGphdy1kcm9wcGluZyBjb2xvciBhbmQgYmxhY2sgYW5kIGdyZXkgcG9ydHJhaXRzIG9mIHByZXR0eSBtdWNoIGFueSBjZWxlYnJpdHkgeW91IGNhbiB0aGluayBvZiBhcyB3ZWxsIGFzIHJlYWxpc3RpYyBkZXBpY3Rpb25zIG9mIG5hdHVyZSBhbmQganVzdCBhYm91dCBhbnl0aGluZyBlbHNlIGltYWdpbmFibGUsIGV2ZW4gdGhlIHN1cnJlYWwuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE4LzAxLzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcIi9hcnRpY2xlcy9yZWFsaXNtMi5qcGdcIixcIi9hcnRpY2xlcy9yZWFsaXNtLmpwZ1wiXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj57aWQgfTwvaDI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=