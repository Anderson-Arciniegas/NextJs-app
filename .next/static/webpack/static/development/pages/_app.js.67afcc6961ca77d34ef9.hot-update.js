webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/global.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fuentes/Overlock/Overlock-Regular.ttf */ "./styles/fuentes/Overlock/Overlock-Regular.ttf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./fuentes/Overlock/Overlock-Bold.ttf */ "./styles/fuentes/Overlock/Overlock-Bold.ttf");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Overlock\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"OverlockBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Overlock\";\n}\n* a {\n  text-decoration: none;\n}\n\n/* Header */\n.header {\n  width: 100%;\n  height: 15vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background: #13293dff;\n  color: white;\n}\n.header a {\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.header div {\n  height: 13vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.header .search {\n  width: 300px;\n  height: 25px;\n  font-size: 20px;\n  padding: 5px;\n  border-radius: 4px;\n  border: 0;\n  padding-left: 10px;\n}\n.header .login-header {\n  color: white;\n}\n.header .logo1 {\n  width: 50px;\n  margin-right: 5px;\n}\n.header .logo2 {\n  position: absolute;\n  z-index: 10;\n  margin-left: 28%;\n  width: 25px;\n  cursor: pointer;\n}\n.header a {\n  margin-right: 30px;\n  text-decoration: none;\n}\n\n/* Index */\n.global-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n}\n\n/* Main */\n.main {\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n  padding: 15px;\n  padding-bottom: 8px;\n}\n.main .article {\n  background: #1b98e0ff;\n  height: 18vh;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  color: black;\n  padding-left: 25px;\n  transition: 400ms;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #13293dff;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n  cursor: pointer;\n}\n.main .article div {\n  width: 50%;\n  margin-top: 5px;\n}\n.main .article h2 {\n  font-size: 26px;\n}\n.main .article h3 {\n  margin-left: 10px;\n}\n.main .article h4 {\n  margin-top: 4vh;\n  margin-left: 75%;\n}\n.main .article:hover {\n  background: #247ba0ff;\n  box-shadow: 4px 4px 8px rgba(19, 41, 61, 0.6);\n}\n.main .article .container-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  margin: 0;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.main .article .container-image img {\n  height: 250px;\n  width: 100%;\n}\n\n/* Aside left */\n.aside_left {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  background: #006494ff;\n}\n.aside_left a {\n  color: white;\n  transition: 400ms;\n}\n.aside_left a:hover {\n  color: #13293dff;\n}\n.aside_left .categories ul {\n  margin-left: 30px;\n}\n.aside_left .categories li {\n  margin-bottom: 5px;\n}\n\n/* Aside Right */\n.aside_right {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n}\n.aside_right a {\n  color: black;\n  transition: 400ms;\n  margin-bottom: 10px;\n}\n.aside_right a:hover {\n  color: #006494ff;\n}\n.aside_right .button {\n  padding: 5px;\n  border-radius: 4px;\n  background: #1b98e0ff;\n  text-align: center;\n  border: 1px solid #13293dff;\n}\n.aside_right .button:hover {\n  color: #e8f1f2ff;\n  background: #13293dff;\n}\n\n/* Articles */\n.pag_article {\n  width: 100%;\n  display: flex;\n  flex: row 1;\n  display: grid;\n  height: 85vh;\n  grid-template-columns: 5fr 1fr;\n  background: #e8f1f2ff;\n}\n.pag_article .article {\n  padding-top: 20px;\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.pag_article .article div {\n  width: 70%;\n  padding-left: 30px;\n}\n.pag_article .article div div {\n  padding: 20px;\n  width: 80%;\n}\n.pag_article .article p {\n  font-size: 18px;\n  width: 80%;\n}\n.pag_article .article img {\n  margin-top: 30px;\n  width: 250px;\n  height: 350px;\n  border-radius: 4px;\n  margin-right: 20px;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n}\n.pag_article .datos {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=global.css.map */\n", "",{"version":3,"sources":["F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.scss","F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.css"],"names":[],"mappings":"AAMA;EAEI,uBAAA;EACA,4CAAA;ACNJ;ADQA;EAEI,2BAAA;EACA,4CAAA;ACPJ;ADUA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;ACRJ;ADUI;EACI,qBAAA;ACRR;;ADYA,WAAA;AACA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,qBAnCY;EAoCZ,YAAA;ACTJ;ADWI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACTR;ADYI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACVR;ADcI;EACI,YAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;ACZR;ADgBI;EAEI,YAAA;ACfR;ADkBI;EACI,WAAA;EACA,iBAAA;AChBR;ADmBI;EAEI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;AClBR;ADqBG;EACK,kBAAA;EACA,qBAAA;ACnBR;;ADuBA,UAAA;AACA;EACI,WAAA;EACA,aAAA;EACA,kCAAA;ACpBJ;;ADwBA,SAAA;AAEA;EAEI,aAAA;EACA,sBAAA;EACA,qBAnGmB;EAoGnB,aAAA;EACA,mBAAA;ACvBJ;ADyBI;EACI,qBAzGQ;EA0GR,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,6CAAA;EACA,eAAA;ACvBR;ADyBQ;EACI,UAAA;EACA,eAAA;ACvBZ;AD0BQ;EACI,eAAA;ACxBZ;AD2BQ;EACI,iBAAA;ACzBZ;AD4BQ;EACG,eAAA;EACA,gBAAA;AC1BX;AD6BQ;EAEI,qBA3IG;EA4IH,6CAAA;AC5BZ;AD+BQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,+BAAA;EACA,4BAAA;AC7BZ;AD8BY;EACI,aAAA;EACA,WAAA;AC5BhB;;ADmCA,eAAA;AAEA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAzKY;ACwIhB;ADmCI;EAEI,YAAA;EACA,iBAAA;AClCR;ADoCQ;EAEI,gBAnLI;ACgJhB;ADyCQ;EACI,iBAAA;ACvCZ;AD0CQ;EACI,kBAAA;ACxCZ;;AD6CA,gBAAA;AAEA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,qBArMmB;AC0JvB;AD6CI;EACI,YAAA;EACA,iBAAA;EACA,mBAAA;AC3CR;AD4CQ;EACI,gBA/MI;ACqKhB;AD8CI;EACI,YAAA;EACA,kBAAA;EACA,qBApNQ;EAqNR,kBAAA;EACA,2BAAA;AC5CR;AD8CQ;EACI,gBAxNW;EAyNX,qBA7NI;ACiLhB;;ADiDA,aAAA;AAEA;EACI,WAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,8BAAA;EACA,qBAvOmB;ACwLvB;ADkDI;EACI,iBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;AChDR;ADkDQ;EACI,UAAA;EACA,kBAAA;AChDZ;ADiDY;EACI,aAAA;EACA,UAAA;AC/ChB;ADoDQ;EACI,eAAA;EACA,UAAA;AClDZ;ADqDQ;EACI,gBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,6CAAA;ACnDZ;ADuDI;EAEI,aAAA;EACA,mBAAA;EACA,8BAAA;ACtDR;;AAEA,qCAAqC","file":"global.css"}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMsK0ZBQXlDO0FBQ3JGLG9DQUFvQyxtQkFBTyxDQUFDLHlGQUFzQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLDhCQUE4Qix5REFBeUQsR0FBRyxjQUFjLGtDQUFrQyx5REFBeUQsR0FBRyxLQUFLLGNBQWMsZUFBZSw4QkFBOEIsR0FBRyxPQUFPLDBCQUEwQixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0Isa0NBQWtDLHdCQUF3QiwwQkFBMEIsaUJBQWlCLEdBQUcsYUFBYSxpQkFBaUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxlQUFlLGlCQUFpQixrQkFBa0Isd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQixpQkFBaUIsaUJBQWlCLG9CQUFvQixpQkFBaUIsdUJBQXVCLGNBQWMsdUJBQXVCLEdBQUcseUJBQXlCLGlCQUFpQixHQUFHLGtCQUFrQixnQkFBZ0Isc0JBQXNCLEdBQUcsa0JBQWtCLHVCQUF1QixnQkFBZ0IscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLHVCQUF1QiwwQkFBMEIsR0FBRyxvQ0FBb0MsZ0JBQWdCLGtCQUFrQix1Q0FBdUMsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQiwwQkFBMEIsa0JBQWtCLHdCQUF3QixHQUFHLGtCQUFrQiwwQkFBMEIsaUJBQWlCLHdCQUF3Qix1QkFBdUIsaUJBQWlCLHVCQUF1QixzQkFBc0Isa0JBQWtCLHdCQUF3QixnQ0FBZ0Msa0RBQWtELG9CQUFvQixHQUFHLHNCQUFzQixlQUFlLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcscUJBQXFCLG9CQUFvQixxQkFBcUIsR0FBRyx3QkFBd0IsMEJBQTBCLGtEQUFrRCxHQUFHLG1DQUFtQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixxQkFBcUIsY0FBYyxvQ0FBb0MsaUNBQWlDLEdBQUcsdUNBQXVDLGtCQUFrQixnQkFBZ0IsR0FBRyxtQ0FBbUMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsR0FBRyxpQkFBaUIsaUJBQWlCLHNCQUFzQixHQUFHLHVCQUF1QixxQkFBcUIsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsOEJBQThCLHVCQUF1QixHQUFHLHFDQUFxQyxrQkFBa0Isa0JBQWtCLDJCQUEyQiwwQkFBMEIsR0FBRyxrQkFBa0IsaUJBQWlCLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcsd0JBQXdCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHVCQUF1QixnQ0FBZ0MsR0FBRyw4QkFBOEIscUJBQXFCLDBCQUEwQixHQUFHLGtDQUFrQyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixrQkFBa0IsaUJBQWlCLG1DQUFtQywwQkFBMEIsR0FBRyx5QkFBeUIsc0JBQXNCLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsNkJBQTZCLGVBQWUsdUJBQXVCLEdBQUcsaUNBQWlDLGtCQUFrQixlQUFlLEdBQUcsMkJBQTJCLG9CQUFvQixlQUFlLEdBQUcsNkJBQTZCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHVCQUF1Qix1QkFBdUIsa0RBQWtELEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsbURBQW1ELHVOQUF1TixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsV0FBVyxhQUFhLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxpQ0FBaUM7QUFDdGxNO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNjdhZmNjNjk2MWNhNzdkMzRlZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9mdWVudGVzL092ZXJsb2NrL092ZXJsb2NrLVJlZ3VsYXIudHRmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vZnVlbnRlcy9PdmVybG9jay9PdmVybG9jay1Cb2xkLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk92ZXJsb2NrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk92ZXJsb2NrQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3ZlcmxvY2tcXFwiO1xcbn1cXG4qIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMTMyOTNkZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgZGl2IHtcXG4gIGhlaWdodDogMTN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuc2VhcmNoIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmhlYWRlciAubG9naW4taGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlciAubG9nbzEge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmhlYWRlciAubG9nbzIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW4tbGVmdDogMjglO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXIgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEluZGV4ICovXFxuLmdsb2JhbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIHtcXG4gIGJhY2tncm91bmQ6ICMxYjk4ZTBmZjtcXG4gIGhlaWdodDogMTh2aDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMjkzZGZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgxOSwgNDEsIDYxLCAwLjYpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLm1haW4gLmFydGljbGUgaDIge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBoMyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLm1haW4gLmFydGljbGUgaDQge1xcbiAgbWFyZ2luLXRvcDogNHZoO1xcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1haW4gLmFydGljbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzI0N2JhMGZmO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgxOSwgNDEsIDYxLCAwLjYpO1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSAuY29udGFpbmVyLWltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIC5jb250YWluZXItaW1hZ2UgaW1nIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogQXNpZGUgbGVmdCAqL1xcbi5hc2lkZV9sZWZ0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMDA2NDk0ZmY7XFxufVxcbi5hc2lkZV9sZWZ0IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogNDAwbXM7XFxufVxcbi5hc2lkZV9sZWZ0IGE6aG92ZXIge1xcbiAgY29sb3I6ICMxMzI5M2RmZjtcXG59XFxuLmFzaWRlX2xlZnQgLmNhdGVnb3JpZXMgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbi5hc2lkZV9sZWZ0IC5jYXRlZ29yaWVzIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLyogQXNpZGUgUmlnaHQgKi9cXG4uYXNpZGVfcmlnaHQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbn1cXG4uYXNpZGVfcmlnaHQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hc2lkZV9yaWdodCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA2NDk0ZmY7XFxufVxcbi5hc2lkZV9yaWdodCAuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6ICMxYjk4ZTBmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzI5M2RmZjtcXG59XFxuLmFzaWRlX3JpZ2h0IC5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlOGYxZjJmZjtcXG4gIGJhY2tncm91bmQ6ICMxMzI5M2RmZjtcXG59XFxuXFxuLyogQXJ0aWNsZXMgKi9cXG4ucGFnX2FydGljbGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogcm93IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbn1cXG4ucGFnX2FydGljbGUgLmFydGljbGUge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBkaXYge1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuLnBhZ19hcnRpY2xlIC5hcnRpY2xlIGRpdiBkaXYge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBpbWcge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDE5LCA0MSwgNjEsIDAuNik7XFxufVxcbi5wYWdfYXJ0aWNsZSAuZGF0b3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbC5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRjovVXNlcnMvRHJhY28gRG9ybWllbnMvRGVza3RvcC9EZXN0cnVjay9XZWIvTmV4dEpzL3ByYWN0aWNhL3N0eWxlcy9nbG9iYWwuc2Nzc1wiLFwiRjovVXNlcnMvRHJhY28gRG9ybWllbnMvRGVza3RvcC9EZXN0cnVjay9XZWIvTmV4dEpzL3ByYWN0aWNhL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBRUksdUJBQUE7RUFDQSw0Q0FBQTtBQ05KO0FEUUE7RUFFSSwyQkFBQTtFQUNBLDRDQUFBO0FDUEo7QURVQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Es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