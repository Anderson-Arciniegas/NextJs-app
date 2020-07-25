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
  var id = router.query.id;
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
  console.log(articles);
  var i = id;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcnRpY2xlcy8uanMiXSwibmFtZXMiOlsiQXJ0aWNsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYXJ0aWNsZXMiLCJ0aXRsZSIsImF1dG9yIiwidGV4dCIsImRhdGUiLCJpbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBRTlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFGOEIsTUFHdkJDLEVBSHVCLEdBR2pCRixNQUFNLENBQUNHLEtBSFUsQ0FHdkJELEVBSHVCO0FBSzlCLE1BQU1FLFFBQVEsR0FBRyxDQUNiO0FBQ0lGLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSx3QkFGWDtBQUdJQyxTQUFLLEVBQUUsT0FIWDtBQUlJQyxRQUFJLEVBQUUsc2tCQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRSxDQUFDLDJCQUFELEVBQTZCLDJCQUE3QjtBQU5aLEdBRGEsRUFTYjtBQUNJUCxNQUFFLEVBQUUsQ0FEUjtBQUVJRyxTQUFLLEVBQUUsOEJBRlg7QUFHSUMsU0FBSyxFQUFFLFFBSFg7QUFJSUMsUUFBSSxFQUFFLHdvQkFKVjtBQUtJQyxRQUFJLEVBQUUsVUFMVjtBQU1JQyxVQUFNLEVBQUUsQ0FBQyx5QkFBRCxFQUEyQix5QkFBM0I7QUFOWixHQVRhLEVBaUJiO0FBQ0lQLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSx5QkFGWDtBQUdJQyxTQUFLLEVBQUUsUUFIWDtBQUlJQyxRQUFJLEVBQUUsaWxCQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRSxDQUFDLDJCQUFELEVBQTZCLDJCQUE3QjtBQU5aLEdBakJhLEVBeUJiO0FBQ0lQLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSxzQkFGWDtBQUdJQyxTQUFLLEVBQUUsT0FIWDtBQUlJQyxRQUFJLEVBQUUseWdCQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRSxDQUFDLHdCQUFELEVBQTBCLHVCQUExQjtBQU5aLEdBekJhLENBQWpCO0FBb0NBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBWjtBQUVBLE1BQUlRLENBQUMsR0FBR1YsRUFBUjtBQUVBLFNBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQSxFQURGLENBRko7QUFRSDs7R0FyRHVCSCxRO1VBRUxFLHFEOzs7S0FGS0YsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXJ0aWNsZXNcXFtpZF0uanMuZTcyZDYwOTdhM2QyNmRlYzhmYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVzKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5OyBcclxuXHJcbiAgICBjb25zdCBhcnRpY2xlcyA9IFtcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJCbGFja3dvcmsgVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJBcmZveFwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJTdHlsaXN0aWNhbGx5IHNwZWFraW5nLCBibGFja3dvcmsgaXMgYSB2ZXJ5IGJyb2FkIGNhdGVnb3JpY2FsIHRlcm0uIEl0IGFwcGxpZXMgYWxtb3N0IGFueSBib2R5IGFydCB0aGF0J3MgY3JlYXRlZCB1c2luZyBzb2xlbHkgYmxhY2sgaW5rLCBidXQgYXMgeW91IGNhbiBpbWFnaW5lLCBhIGxvdCBjYW4gYmUgZG9uZSB3aXRoIHRoaXMgdmVyc2F0aWxlIGFuZCBzdHJpa2luZyBjb2xvci4gTG9va2luZyB0aHJvdWdoIGJsYWNrd29yayBhcnRpc3RzIHBvcnRmb2xpb3MsIHlvdSdsbCBzZWUgYWxsIGtpbmRzIG9mIHRhdHRvbyB0eXBlcyBmcm9tIGFuY2llbnQgc2FjcmVkIGdlb21ldHJ5IHRvIG1vZGVybiBhYnN0cmFjdCBvcm5hbWVudGFsIGRlc2lnbnMgdG8gZXh0cmVtZWx5IGRldGFpbGVkIGlsbHVzdHJhdGl2ZSBwaWVjZXMuIEl0IGlzIGhhbmRzIGRvd24gdGhlIHN0eWxlIHdoZXJlIHRoZSBtb3N0IGV4cGVyaW1lbnRhdGlvbiBpcyBjdXJyZW50bHkgb2NjdXJyaW5nIGluIHRoZSBpbmR1c3RyeSwgYW5kIHNvbWUgb2YgdGhlIHdvcmsgYmVpbmcgcHJvZHVjZWQgdG9kYXkgaXMgYWJzb2x1dGVseSBtaW5kLWJsb3dpbmcuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwLzA3LzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcIi9hcnRpY2xlcy9ibGFja193b3JrMi5qcGdcIixcIi9hcnRpY2xlcy9ibGFja193b3JrMS5qcGdcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5lbyBUcmFkaXRpb25hbCBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIkRlcmZveFwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJOZW8gdHJhZGl0aW9uYWwsIGFzIHRoZSBuYW1lIGltcGxpZXMsIGlzIGFuIGV2b2x1dGlvbiBvZiB0aGUgdHJhZGl0aW9uYWwgc3R5bGUuIEl0IGZlYXR1cmVzIHRoZSBjb3JlIHByb3BlcnRpZXMgb2YgaXRzIHByZWRlY2Vzc29yLCBsaWtlIHByb25vdW5jZWQgbGluZXdvcmsgYW5kIGV4dHJlbWVseSB2aWJyYW50IGNvbG9ycyBidXQgaXQgYWxzbyBoYXMgYW4gaWxsdXN0cmF0aXZlIHF1YWxpdHkgdG8gaXQuIFRoaXMgaXMgYmVjYXVzZSBOZW8gdHJhZGl0aW9uYWwgYXJ0aXN0cyBhcmUgaGlnaGx5IGluZmx1ZW5jZWQgYnkgQXJ0IE5vdXZlYXUgYW5kIEFydCBEZWNvIGFlc3RoZXRpY3MuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiB0cmFkaXRpb25hbCB0YXR0b29zIGFuZCBuZW8gdHJhZGl0aW9uYWwgdGF0dG9vcyBpcyB0aGF0IG5lbyB0cmFkaXRpb25hbCB0YXR0b29zIG9mdGVuIGhhdmUgYSBicm9hZGVyIGNvbG9yIHBhbGV0dGUgYW5kIGEgYnJvYWRlciByYW5nZSBvZiBtb3RpZnMuIFBpZWNlcyBkb25lIGluIHRoaXMgc3R5bGUgYXJlIGtub3duIGZvciB0aGVpciBsdXNoLCBkZWNvcmF0aXZlIGRldGFpbHMgYXMgd2VsbCBhcyB0aGUgdXNlIG9mIG5hdHVyYWwgaW1hZ2VyeSBzdWNoIGFzIGZsb3JhbHMgYW5kIGFuaW1hbHMuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE2LzA3LzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcIi9hcnRpY2xlcy9uZW90cmFkaTIuanBnXCIsXCIvYXJ0aWNsZXMvbmVvdHJhZGkxLmpwZ1wiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmV3IFNjaG9vbCBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIlJlZG5hclwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJEb24ndCBsZXQgdGhlIG5hbWUgZm9vbCB5b3UsIG5ldyBzY2hvb2wgaXNuJ3QgcmVhbGx5IGFsbCB0aGF0IG5ldyBhbnltb3JlLiBJdCByb3NlIHRvIHByb21pbmVuY2UgaW4gdGhlIHdlaXJkbmVzcyB0aGF0IHdhcyB0aGUgbGF0ZSAnODBzIGFuZCBlYXJseSAnOTBzLCBidXQgbGF0ZWx5IGl0IGhhcyB3YW5lZCBpbiBwb3B1bGFyaXR5LiBUaGlzIGlzIHByb2JhYmx5IGJlY2F1c2UgaXQgd2FzIHZlcnkgbXVjaCBhIHByb2R1Y3Qgb2YgaXRzIHRpbWUsIGZlYXR1cmluZyBhIGhpZ2hseSBhbmltYXRlZCBhZXN0aGV0aWMgdGhhdCB0YWtlcyBhZnRlciBwb3B1bGFyIGVudGVydGFpbm1lbnQgZnJvbSB0aGF0IHBlcmlvZCBpbiBBbWVyaWNhbiBoaXN0b3J5LiBUaGUgc3R5bGUgaXMgY2FydG9vbmlzaCBhbmQgd2Fja3ksIGZlYXR1cmluZyBjYXJpY2F0dXJlcyBhbmQgb3RoZXIgZXhhZ2dlcmF0ZWQgZmlndXJlcy4gSWYgeW91J3JlIHRoZSBzb3J0IG9mIHBlcnNvbiB3aG8gbGlrZXMgdGhlaXIgYm9keSBhcnQgaW5qZWN0ZWQgd2l0aCB0aGUgc3Bpcml0IG9mIFJlbiBhbmQgU3RpbXB5LCB0aGVuIHRoaXMgY29taWMgc3R5bGUgaXMgZm9yIHlvdS5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMDQvMDQvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogW1wiL2FydGljbGVzL25ld19zY2hvb2wxLmpwZ1wiLFwiL2FydGljbGVzL25ld19zY2hvb2wyLmpwZ1wiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiUmVhbGlzbSBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIkFuZGVyXCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRob3VnaCBjbGFzc2ljIHJlYWxpc20gaGFzIGJlZW4gYSBwYXJ0IG9mIHRoZSBmaW5lIGFydCBzaW5jZSBhcyBmYXIgYmFjayBhcyB0aGUgUmVuYWlzc2FuY2UsIGl0IG9ubHkgZm91bmQgaXRzIHdheSB0byB0aGUgd29ybGQgb2YgdGF0dG9vcyByZWNlbnRseSwgY3JvcHBpbmcgdXAgYXJvdW5kIHRoZSBsYXR0ZXIgaGFsZiBvZiB0aGUgMjB0aCBjZW50dXJ5LiBTaW5jZSB0aGVuLCB0aGlzIG5ldyB0YXR0b28gc3R5bGUgaGFzIGJlY29tZSBpbmNyZWFzaW5nbHkgcmVmaW5lZCBhbmQgZXh0cmVtZWx5IHBvcHVsYXIuIEFzIGl0IG5vdyBzdGFuZHMsIHlvdSBjYW4gZmluZCBqYXctZHJvcHBpbmcgY29sb3IgYW5kIGJsYWNrIGFuZCBncmV5IHBvcnRyYWl0cyBvZiBwcmV0dHkgbXVjaCBhbnkgY2VsZWJyaXR5IHlvdSBjYW4gdGhpbmsgb2YgYXMgd2VsbCBhcyByZWFsaXN0aWMgZGVwaWN0aW9ucyBvZiBuYXR1cmUgYW5kIGp1c3QgYWJvdXQgYW55dGhpbmcgZWxzZSBpbWFnaW5hYmxlLCBldmVuIHRoZSBzdXJyZWFsLlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIxOC8wMS8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBbXCIvYXJ0aWNsZXMvcmVhbGlzbTIuanBnXCIsXCIvYXJ0aWNsZXMvcmVhbGlzbS5qcGdcIl1cclxuICAgICAgICB9LFxyXG5cclxuICAgIF07XHJcblxyXG4gICAgY29uc29sZS5sb2coYXJ0aWNsZXMpXHJcblxyXG4gICAgdmFyIGkgPSBpZDtcclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgeyBpZFxyXG4gICAgICAgIH0gICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==