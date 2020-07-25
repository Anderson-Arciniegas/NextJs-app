webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Users\\Draco Dormiens\\Desktop\\Destruck\\Web\\NextJs\\practica\\components\\Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Main() {
  var _this = this;

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
  return __jsx("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, articles.map(function (article) {
    return __jsx("div", {
      className: "article",
      key: article.id,
      onClick: function onClick(e) {
        return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/articles/[id]', '/articles/${article.id}');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, article.title), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, "By ", article.autor), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, article.date)), __jsx("div", {
      className: "container-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx("img", {
      width: "100",
      src: article.images,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    })));
  }));
}
_c = Main;

var _c;

$RefreshReg$(_c, "Main");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsImFydGljbGVzIiwiaWQiLCJ0aXRsZSIsImF1dG9yIiwidGV4dCIsImRhdGUiLCJpbWFnZXMiLCJtYXAiLCJhcnRpY2xlIiwiZSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWU7QUFBQTs7QUFFMUIsTUFBSUMsUUFBUSxHQUFHLENBQ1g7QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLHdCQUZYO0FBR0lDLFNBQUssRUFBRSxPQUhYO0FBSUlDLFFBQUksRUFBRSxza0JBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFO0FBTlosR0FEVyxFQVNYO0FBQ0lMLE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSw4QkFGWDtBQUdJQyxTQUFLLEVBQUUsUUFIWDtBQUlJQyxRQUFJLEVBQUUsd29CQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRTtBQU5aLEdBVFcsRUFpQlg7QUFDSUwsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLHlCQUZYO0FBR0lDLFNBQUssRUFBRSxRQUhYO0FBSUlDLFFBQUksRUFBRSxpbEJBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFO0FBTlosR0FqQlcsRUF5Qlg7QUFDSUwsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLHNCQUZYO0FBR0lDLFNBQUssRUFBRSxPQUhYO0FBSUlDLFFBQUksRUFBRSx5Z0JBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFO0FBTlosR0F6QlcsQ0FBZjtBQXFDQSxTQUVJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFTixRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsV0FFZDtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUcsRUFBRUEsT0FBTyxDQUFDUCxFQUF0QztBQUEwQyxhQUFPLEVBQUUsaUJBQUFRLENBQUM7QUFBQSxlQUFJQyxrREFBTSxDQUFDQyxJQUFQLENBQVksZ0JBQVosRUFBOEIseUJBQTlCLENBQUo7QUFBQSxPQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsT0FBTyxDQUFDTixLQUFiLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVFNLE9BQU8sQ0FBQ0wsS0FBaEIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0ssT0FBTyxDQUFDSCxJQUFiLENBSEosQ0FESixFQU1JO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFdBQUssRUFBQyxLQUFYO0FBQWlCLFNBQUcsRUFBRUcsT0FBTyxDQUFDRixNQUE5QjtBQUFzQyxTQUFHLEVBQUMsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTkosQ0FGYztBQUFBLEdBQXBCLENBRkYsQ0FGSjtBQXVCSDtLQTlEdUJQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY0MTQ0MjM0ZTNkMzMwZTY2NWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpe1xyXG5cclxuICAgIHZhciBhcnRpY2xlcyA9IFtcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJCbGFja3dvcmsgVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJBcmZveFwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJTdHlsaXN0aWNhbGx5IHNwZWFraW5nLCBibGFja3dvcmsgaXMgYSB2ZXJ5IGJyb2FkIGNhdGVnb3JpY2FsIHRlcm0uIEl0IGFwcGxpZXMgYWxtb3N0IGFueSBib2R5IGFydCB0aGF0J3MgY3JlYXRlZCB1c2luZyBzb2xlbHkgYmxhY2sgaW5rLCBidXQgYXMgeW91IGNhbiBpbWFnaW5lLCBhIGxvdCBjYW4gYmUgZG9uZSB3aXRoIHRoaXMgdmVyc2F0aWxlIGFuZCBzdHJpa2luZyBjb2xvci4gTG9va2luZyB0aHJvdWdoIGJsYWNrd29yayBhcnRpc3RzIHBvcnRmb2xpb3MsIHlvdSdsbCBzZWUgYWxsIGtpbmRzIG9mIHRhdHRvbyB0eXBlcyBmcm9tIGFuY2llbnQgc2FjcmVkIGdlb21ldHJ5IHRvIG1vZGVybiBhYnN0cmFjdCBvcm5hbWVudGFsIGRlc2lnbnMgdG8gZXh0cmVtZWx5IGRldGFpbGVkIGlsbHVzdHJhdGl2ZSBwaWVjZXMuIEl0IGlzIGhhbmRzIGRvd24gdGhlIHN0eWxlIHdoZXJlIHRoZSBtb3N0IGV4cGVyaW1lbnRhdGlvbiBpcyBjdXJyZW50bHkgb2NjdXJyaW5nIGluIHRoZSBpbmR1c3RyeSwgYW5kIHNvbWUgb2YgdGhlIHdvcmsgYmVpbmcgcHJvZHVjZWQgdG9kYXkgaXMgYWJzb2x1dGVseSBtaW5kLWJsb3dpbmcuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwLzA3LzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFwiL2FydGljbGVzL2JsYWNrX3dvcmsyLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOZW8gVHJhZGl0aW9uYWwgVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJEZXJmb3hcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTmVvIHRyYWRpdGlvbmFsLCBhcyB0aGUgbmFtZSBpbXBsaWVzLCBpcyBhbiBldm9sdXRpb24gb2YgdGhlIHRyYWRpdGlvbmFsIHN0eWxlLiBJdCBmZWF0dXJlcyB0aGUgY29yZSBwcm9wZXJ0aWVzIG9mIGl0cyBwcmVkZWNlc3NvciwgbGlrZSBwcm9ub3VuY2VkIGxpbmV3b3JrIGFuZCBleHRyZW1lbHkgdmlicmFudCBjb2xvcnMgYnV0IGl0IGFsc28gaGFzIGFuIGlsbHVzdHJhdGl2ZSBxdWFsaXR5IHRvIGl0LiBUaGlzIGlzIGJlY2F1c2UgTmVvIHRyYWRpdGlvbmFsIGFydGlzdHMgYXJlIGhpZ2hseSBpbmZsdWVuY2VkIGJ5IEFydCBOb3V2ZWF1IGFuZCBBcnQgRGVjbyBhZXN0aGV0aWNzLiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gdHJhZGl0aW9uYWwgdGF0dG9vcyBhbmQgbmVvIHRyYWRpdGlvbmFsIHRhdHRvb3MgaXMgdGhhdCBuZW8gdHJhZGl0aW9uYWwgdGF0dG9vcyBvZnRlbiBoYXZlIGEgYnJvYWRlciBjb2xvciBwYWxldHRlIGFuZCBhIGJyb2FkZXIgcmFuZ2Ugb2YgbW90aWZzLiBQaWVjZXMgZG9uZSBpbiB0aGlzIHN0eWxlIGFyZSBrbm93biBmb3IgdGhlaXIgbHVzaCwgZGVjb3JhdGl2ZSBkZXRhaWxzIGFzIHdlbGwgYXMgdGhlIHVzZSBvZiBuYXR1cmFsIGltYWdlcnkgc3VjaCBhcyBmbG9yYWxzIGFuZCBhbmltYWxzLlwiLCBcclxuICAgICAgICAgICAgZGF0ZTogXCIxNi8wNy8yMFwiLCBcclxuICAgICAgICAgICAgaW1hZ2VzOiBcIi9hcnRpY2xlcy9uZW90cmFkaTIuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBTY2hvb2wgVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJSZWRuYXJcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiRG9uJ3QgbGV0IHRoZSBuYW1lIGZvb2wgeW91LCBuZXcgc2Nob29sIGlzbid0IHJlYWxseSBhbGwgdGhhdCBuZXcgYW55bW9yZS4gSXQgcm9zZSB0byBwcm9taW5lbmNlIGluIHRoZSB3ZWlyZG5lc3MgdGhhdCB3YXMgdGhlIGxhdGUgJzgwcyBhbmQgZWFybHkgJzkwcywgYnV0IGxhdGVseSBpdCBoYXMgd2FuZWQgaW4gcG9wdWxhcml0eS4gVGhpcyBpcyBwcm9iYWJseSBiZWNhdXNlIGl0IHdhcyB2ZXJ5IG11Y2ggYSBwcm9kdWN0IG9mIGl0cyB0aW1lLCBmZWF0dXJpbmcgYSBoaWdobHkgYW5pbWF0ZWQgYWVzdGhldGljIHRoYXQgdGFrZXMgYWZ0ZXIgcG9wdWxhciBlbnRlcnRhaW5tZW50IGZyb20gdGhhdCBwZXJpb2QgaW4gQW1lcmljYW4gaGlzdG9yeS4gVGhlIHN0eWxlIGlzIGNhcnRvb25pc2ggYW5kIHdhY2t5LCBmZWF0dXJpbmcgY2FyaWNhdHVyZXMgYW5kIG90aGVyIGV4YWdnZXJhdGVkIGZpZ3VyZXMuIElmIHlvdSdyZSB0aGUgc29ydCBvZiBwZXJzb24gd2hvIGxpa2VzIHRoZWlyIGJvZHkgYXJ0IGluamVjdGVkIHdpdGggdGhlIHNwaXJpdCBvZiBSZW4gYW5kIFN0aW1weSwgdGhlbiB0aGlzIGNvbWljIHN0eWxlIGlzIGZvciB5b3UuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjA0LzA0LzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFwiL2FydGljbGVzL25ld19zY2hvb2wxLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJSZWFsaXNtIFRhdHRvbyBTdHlsZVwiLCBcclxuICAgICAgICAgICAgYXV0b3I6IFwiQW5kZXJcIiwgXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVGhvdWdoIGNsYXNzaWMgcmVhbGlzbSBoYXMgYmVlbiBhIHBhcnQgb2YgdGhlIGZpbmUgYXJ0IHNpbmNlIGFzIGZhciBiYWNrIGFzIHRoZSBSZW5haXNzYW5jZSwgaXQgb25seSBmb3VuZCBpdHMgd2F5IHRvIHRoZSB3b3JsZCBvZiB0YXR0b29zIHJlY2VudGx5LCBjcm9wcGluZyB1cCBhcm91bmQgdGhlIGxhdHRlciBoYWxmIG9mIHRoZSAyMHRoIGNlbnR1cnkuIFNpbmNlIHRoZW4sIHRoaXMgbmV3IHRhdHRvbyBzdHlsZSBoYXMgYmVjb21lIGluY3JlYXNpbmdseSByZWZpbmVkIGFuZCBleHRyZW1lbHkgcG9wdWxhci4gQXMgaXQgbm93IHN0YW5kcywgeW91IGNhbiBmaW5kIGphdy1kcm9wcGluZyBjb2xvciBhbmQgYmxhY2sgYW5kIGdyZXkgcG9ydHJhaXRzIG9mIHByZXR0eSBtdWNoIGFueSBjZWxlYnJpdHkgeW91IGNhbiB0aGluayBvZiBhcyB3ZWxsIGFzIHJlYWxpc3RpYyBkZXBpY3Rpb25zIG9mIG5hdHVyZSBhbmQganVzdCBhYm91dCBhbnl0aGluZyBlbHNlIGltYWdpbmFibGUsIGV2ZW4gdGhlIHN1cnJlYWwuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE4LzAxLzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFwiL2FydGljbGVzL3JlYWxpc20yLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cclxuICAgICAgICB7IGFydGljbGVzLm1hcChhcnRpY2xlID0+IChcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiIGtleT17YXJ0aWNsZS5pZH0gb25DbGljaz17ZSA9PiBSb3V0ZXIucHVzaCgnL2FydGljbGVzL1tpZF0nLCAnL2FydGljbGVzLyR7YXJ0aWNsZS5pZH0nKX0gID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJ5IHthcnRpY2xlLmF1dG9yfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57YXJ0aWNsZS5kYXRlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMFwiIHNyYz17YXJ0aWNsZS5pbWFnZXN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgXHJcbiAgICAgICAgKSkgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9