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
        return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/articles/[id]');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsImFydGljbGVzIiwiaWQiLCJ0aXRsZSIsImF1dG9yIiwidGV4dCIsImRhdGUiLCJpbWFnZXMiLCJtYXAiLCJhcnRpY2xlIiwiZSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWU7QUFBQTs7QUFFMUIsTUFBSUMsUUFBUSxHQUFHLENBQ1g7QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLHdCQUZYO0FBR0lDLFNBQUssRUFBRSxPQUhYO0FBSUlDLFFBQUksRUFBRSxza0JBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFO0FBTlosR0FEVyxFQVNYO0FBQ0lMLE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSw4QkFGWDtBQUdJQyxTQUFLLEVBQUUsUUFIWDtBQUlJQyxRQUFJLEVBQUUsd29CQUpWO0FBS0lDLFFBQUksRUFBRSxVQUxWO0FBTUlDLFVBQU0sRUFBRTtBQU5aLEdBVFcsRUFpQlg7QUFDSUwsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLHlCQUZYO0FBR0lDLFNBQUssRUFBRSxRQUhYO0FBSUlDLFFBQUksRUFBRSxpbEJBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFO0FBTlosR0FqQlcsRUF5Qlg7QUFDSUwsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLHNCQUZYO0FBR0lDLFNBQUssRUFBRSxPQUhYO0FBSUlDLFFBQUksRUFBRSx5Z0JBSlY7QUFLSUMsUUFBSSxFQUFFLFVBTFY7QUFNSUMsVUFBTSxFQUFFO0FBTlosR0F6QlcsQ0FBZjtBQXFDQSxTQUVJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFTixRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsV0FFZDtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUcsRUFBRUEsT0FBTyxDQUFDUCxFQUF0QztBQUEwQyxhQUFPLEVBQUUsaUJBQUFRLENBQUM7QUFBQSxlQUFJQyxrREFBTSxDQUFDQyxJQUFQLENBQVksZ0JBQVosQ0FBSjtBQUFBLE9BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSCxPQUFPLENBQUNOLEtBQWIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUU0sT0FBTyxDQUFDTCxLQUFoQixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSyxPQUFPLENBQUNILElBQWIsQ0FISixDQURKLEVBTUk7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssV0FBSyxFQUFDLEtBQVg7QUFBaUIsU0FBRyxFQUFFRyxPQUFPLENBQUNGLE1BQTlCO0FBQXNDLFNBQUcsRUFBQyxFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FOSixDQUZjO0FBQUEsR0FBcEIsQ0FGRixDQUZKO0FBdUJIO0tBOUR1QlAsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmQwZDU4NThhNjE3MzZlNGU1YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCl7XHJcblxyXG4gICAgdmFyIGFydGljbGVzID0gW1xyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkJsYWNrd29yayBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIkFyZm94XCIsIFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlN0eWxpc3RpY2FsbHkgc3BlYWtpbmcsIGJsYWNrd29yayBpcyBhIHZlcnkgYnJvYWQgY2F0ZWdvcmljYWwgdGVybS4gSXQgYXBwbGllcyBhbG1vc3QgYW55IGJvZHkgYXJ0IHRoYXQncyBjcmVhdGVkIHVzaW5nIHNvbGVseSBibGFjayBpbmssIGJ1dCBhcyB5b3UgY2FuIGltYWdpbmUsIGEgbG90IGNhbiBiZSBkb25lIHdpdGggdGhpcyB2ZXJzYXRpbGUgYW5kIHN0cmlraW5nIGNvbG9yLiBMb29raW5nIHRocm91Z2ggYmxhY2t3b3JrIGFydGlzdHMgcG9ydGZvbGlvcywgeW91J2xsIHNlZSBhbGwga2luZHMgb2YgdGF0dG9vIHR5cGVzIGZyb20gYW5jaWVudCBzYWNyZWQgZ2VvbWV0cnkgdG8gbW9kZXJuIGFic3RyYWN0IG9ybmFtZW50YWwgZGVzaWducyB0byBleHRyZW1lbHkgZGV0YWlsZWQgaWxsdXN0cmF0aXZlIHBpZWNlcy4gSXQgaXMgaGFuZHMgZG93biB0aGUgc3R5bGUgd2hlcmUgdGhlIG1vc3QgZXhwZXJpbWVudGF0aW9uIGlzIGN1cnJlbnRseSBvY2N1cnJpbmcgaW4gdGhlIGluZHVzdHJ5LCBhbmQgc29tZSBvZiB0aGUgd29yayBiZWluZyBwcm9kdWNlZCB0b2RheSBpcyBhYnNvbHV0ZWx5IG1pbmQtYmxvd2luZy5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMjAvMDcvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogXCIvYXJ0aWNsZXMvYmxhY2tfd29yazIuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5lbyBUcmFkaXRpb25hbCBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIkRlcmZveFwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJOZW8gdHJhZGl0aW9uYWwsIGFzIHRoZSBuYW1lIGltcGxpZXMsIGlzIGFuIGV2b2x1dGlvbiBvZiB0aGUgdHJhZGl0aW9uYWwgc3R5bGUuIEl0IGZlYXR1cmVzIHRoZSBjb3JlIHByb3BlcnRpZXMgb2YgaXRzIHByZWRlY2Vzc29yLCBsaWtlIHByb25vdW5jZWQgbGluZXdvcmsgYW5kIGV4dHJlbWVseSB2aWJyYW50IGNvbG9ycyBidXQgaXQgYWxzbyBoYXMgYW4gaWxsdXN0cmF0aXZlIHF1YWxpdHkgdG8gaXQuIFRoaXMgaXMgYmVjYXVzZSBOZW8gdHJhZGl0aW9uYWwgYXJ0aXN0cyBhcmUgaGlnaGx5IGluZmx1ZW5jZWQgYnkgQXJ0IE5vdXZlYXUgYW5kIEFydCBEZWNvIGFlc3RoZXRpY3MuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiB0cmFkaXRpb25hbCB0YXR0b29zIGFuZCBuZW8gdHJhZGl0aW9uYWwgdGF0dG9vcyBpcyB0aGF0IG5lbyB0cmFkaXRpb25hbCB0YXR0b29zIG9mdGVuIGhhdmUgYSBicm9hZGVyIGNvbG9yIHBhbGV0dGUgYW5kIGEgYnJvYWRlciByYW5nZSBvZiBtb3RpZnMuIFBpZWNlcyBkb25lIGluIHRoaXMgc3R5bGUgYXJlIGtub3duIGZvciB0aGVpciBsdXNoLCBkZWNvcmF0aXZlIGRldGFpbHMgYXMgd2VsbCBhcyB0aGUgdXNlIG9mIG5hdHVyYWwgaW1hZ2VyeSBzdWNoIGFzIGZsb3JhbHMgYW5kIGFuaW1hbHMuXCIsIFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE2LzA3LzIwXCIsIFxyXG4gICAgICAgICAgICBpbWFnZXM6IFwiL2FydGljbGVzL25lb3RyYWRpMi5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmV3IFNjaG9vbCBUYXR0b28gU3R5bGVcIiwgXHJcbiAgICAgICAgICAgIGF1dG9yOiBcIlJlZG5hclwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJEb24ndCBsZXQgdGhlIG5hbWUgZm9vbCB5b3UsIG5ldyBzY2hvb2wgaXNuJ3QgcmVhbGx5IGFsbCB0aGF0IG5ldyBhbnltb3JlLiBJdCByb3NlIHRvIHByb21pbmVuY2UgaW4gdGhlIHdlaXJkbmVzcyB0aGF0IHdhcyB0aGUgbGF0ZSAnODBzIGFuZCBlYXJseSAnOTBzLCBidXQgbGF0ZWx5IGl0IGhhcyB3YW5lZCBpbiBwb3B1bGFyaXR5LiBUaGlzIGlzIHByb2JhYmx5IGJlY2F1c2UgaXQgd2FzIHZlcnkgbXVjaCBhIHByb2R1Y3Qgb2YgaXRzIHRpbWUsIGZlYXR1cmluZyBhIGhpZ2hseSBhbmltYXRlZCBhZXN0aGV0aWMgdGhhdCB0YWtlcyBhZnRlciBwb3B1bGFyIGVudGVydGFpbm1lbnQgZnJvbSB0aGF0IHBlcmlvZCBpbiBBbWVyaWNhbiBoaXN0b3J5LiBUaGUgc3R5bGUgaXMgY2FydG9vbmlzaCBhbmQgd2Fja3ksIGZlYXR1cmluZyBjYXJpY2F0dXJlcyBhbmQgb3RoZXIgZXhhZ2dlcmF0ZWQgZmlndXJlcy4gSWYgeW91J3JlIHRoZSBzb3J0IG9mIHBlcnNvbiB3aG8gbGlrZXMgdGhlaXIgYm9keSBhcnQgaW5qZWN0ZWQgd2l0aCB0aGUgc3Bpcml0IG9mIFJlbiBhbmQgU3RpbXB5LCB0aGVuIHRoaXMgY29taWMgc3R5bGUgaXMgZm9yIHlvdS5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMDQvMDQvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogXCIvYXJ0aWNsZXMvbmV3X3NjaG9vbDEuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlYWxpc20gVGF0dG9vIFN0eWxlXCIsIFxyXG4gICAgICAgICAgICBhdXRvcjogXCJBbmRlclwiLCBcclxuICAgICAgICAgICAgdGV4dDogXCJUaG91Z2ggY2xhc3NpYyByZWFsaXNtIGhhcyBiZWVuIGEgcGFydCBvZiB0aGUgZmluZSBhcnQgc2luY2UgYXMgZmFyIGJhY2sgYXMgdGhlIFJlbmFpc3NhbmNlLCBpdCBvbmx5IGZvdW5kIGl0cyB3YXkgdG8gdGhlIHdvcmxkIG9mIHRhdHRvb3MgcmVjZW50bHksIGNyb3BwaW5nIHVwIGFyb3VuZCB0aGUgbGF0dGVyIGhhbGYgb2YgdGhlIDIwdGggY2VudHVyeS4gU2luY2UgdGhlbiwgdGhpcyBuZXcgdGF0dG9vIHN0eWxlIGhhcyBiZWNvbWUgaW5jcmVhc2luZ2x5IHJlZmluZWQgYW5kIGV4dHJlbWVseSBwb3B1bGFyLiBBcyBpdCBub3cgc3RhbmRzLCB5b3UgY2FuIGZpbmQgamF3LWRyb3BwaW5nIGNvbG9yIGFuZCBibGFjayBhbmQgZ3JleSBwb3J0cmFpdHMgb2YgcHJldHR5IG11Y2ggYW55IGNlbGVicml0eSB5b3UgY2FuIHRoaW5rIG9mIGFzIHdlbGwgYXMgcmVhbGlzdGljIGRlcGljdGlvbnMgb2YgbmF0dXJlIGFuZCBqdXN0IGFib3V0IGFueXRoaW5nIGVsc2UgaW1hZ2luYWJsZSwgZXZlbiB0aGUgc3VycmVhbC5cIiwgXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTgvMDEvMjBcIiwgXHJcbiAgICAgICAgICAgIGltYWdlczogXCIvYXJ0aWNsZXMvcmVhbGlzbTIuanBnXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgIF07XHJcblxyXG5cclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblxyXG4gICAgICAgIHsgYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIga2V5PXthcnRpY2xlLmlkfSBvbkNsaWNrPXtlID0+IFJvdXRlci5wdXNoKCcvYXJ0aWNsZXMvW2lkXScpfSAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Qnkge2FydGljbGUuYXV0b3J9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PnthcnRpY2xlLmRhdGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwXCIgc3JjPXthcnRpY2xlLmltYWdlc30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICBcclxuICAgICAgICApKSAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=