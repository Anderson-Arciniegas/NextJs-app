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
exports.push([module.i, "@font-face {\n  font-family: \"Overlock\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"OverlockBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Overlock\";\n}\n* a {\n  text-decoration: none;\n}\n\n/* Header */\n.header {\n  width: 100%;\n  height: 15vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background: #13293dff;\n  color: white;\n}\n.header div {\n  height: 13vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.header .search {\n  width: 300px;\n  height: 25px;\n  font-size: 20px;\n  padding: 5px;\n  border-radius: 4px;\n  border: 0;\n  padding-left: 10px;\n}\n.header .login-header {\n  color: white;\n}\n.header .logo1 {\n  width: 50px;\n  margin-right: 5px;\n}\n.header .logo2 {\n  position: absolute;\n  z-index: 10;\n  margin-left: 28%;\n  width: 25px;\n  cursor: pointer;\n}\n.header a {\n  margin-right: 30px;\n  text-decoration: none;\n}\n\n/* Index */\n.global-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n}\n\n/* Main */\n.main {\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n  padding: 15px;\n  padding-bottom: 8px;\n}\n.main .article {\n  background: #1b98e0ff;\n  height: 18vh;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  color: black;\n  padding-left: 25px;\n  transition: 400ms;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #13293dff;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n  cursor: pointer;\n}\n.main .article div {\n  width: 50%;\n  margin-top: 5px;\n}\n.main .article h2 {\n  font-size: 26px;\n}\n.main .article h3 {\n  margin-left: 10px;\n}\n.main .article h4 {\n  margin-top: 4vh;\n  margin-left: 75%;\n}\n.main .article:hover {\n  background: #247ba0ff;\n  box-shadow: 4px 4px 8px rgba(19, 41, 61, 0.6);\n}\n.main .article .container-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  margin: 0;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.main .article .container-image img {\n  height: 250px;\n  width: 100%;\n}\n\n/* Aside left */\n.aside_left {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  background: #006494ff;\n}\n.aside_left a {\n  color: white;\n  transition: 400ms;\n}\n.aside_left a:hover {\n  color: #13293dff;\n}\n.aside_left .categories ul {\n  margin-left: 30px;\n}\n.aside_left .categories li {\n  margin-bottom: 5px;\n}\n\n/* Aside Right */\n.aside_right {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n}\n.aside_right a {\n  color: black;\n  transition: 400ms;\n  margin-bottom: 10px;\n}\n.aside_right a:hover {\n  color: #006494ff;\n}\n.aside_right .button {\n  padding: 5px;\n  border-radius: 4px;\n  background: #1b98e0ff;\n  text-align: center;\n  border: 1px solid #13293dff;\n}\n.aside_right .button:hover {\n  color: #e8f1f2ff;\n  background: #13293dff;\n}\n\n/* Articles */\n.pag_article {\n  width: 100%;\n  display: flex;\n  flex: row 1;\n  display: grid;\n  height: 85vh;\n  grid-template-columns: 5fr 1fr;\n  background: #e8f1f2ff;\n}\n.pag_article .article {\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.pag_article .article div {\n  width: 70%;\n}\n.pag_article .article div div {\n  padding: 20px;\n  width: 80%;\n}\n.pag_article .article p {\n  font-size: 16px;\n}\n.pag_article .article img {\n  width: 250px;\n  height: 350px;\n  border-radius: 4px;\n}\n.pag_article .datos {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=global.css.map */\n", "",{"version":3,"sources":["F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.scss","F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.css"],"names":[],"mappings":"AAMA;EAEI,uBAAA;EACA,4CAAA;ACNJ;ADQA;EAEI,2BAAA;EACA,4CAAA;ACPJ;ADUA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;ACRJ;ADUI;EACI,qBAAA;ACRR;;ADYA,WAAA;AACA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,qBAnCY;EAoCZ,YAAA;ACTJ;ADWI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACTR;ADaI;EACI,YAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;ACXR;ADeI;EAEI,YAAA;ACdR;ADiBI;EACI,WAAA;EACA,iBAAA;ACfR;ADkBI;EAEI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;ACjBR;ADoBG;EACK,kBAAA;EACA,qBAAA;AClBR;;ADsBA,UAAA;AACA;EACI,WAAA;EACA,aAAA;EACA,kCAAA;ACnBJ;;ADuBA,SAAA;AAEA;EAEI,aAAA;EACA,sBAAA;EACA,qBA5FmB;EA6FnB,aAAA;EACA,mBAAA;ACtBJ;ADwBI;EACI,qBAlGQ;EAmGR,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,6CAAA;EACA,eAAA;ACtBR;ADwBQ;EACI,UAAA;EACA,eAAA;ACtBZ;ADyBQ;EACI,eAAA;ACvBZ;AD0BQ;EACI,iBAAA;ACxBZ;AD2BQ;EACG,eAAA;EACA,gBAAA;ACzBX;AD4BQ;EAEI,qBApIG;EAqIH,6CAAA;AC3BZ;AD8BQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,+BAAA;EACA,4BAAA;AC5BZ;AD6BY;EACI,aAAA;EACA,WAAA;AC3BhB;;ADkCA,eAAA;AAEA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAlKY;ACkIhB;ADkCI;EAEI,YAAA;EACA,iBAAA;ACjCR;ADmCQ;EAEI,gBA5KI;AC0IhB;ADwCQ;EACI,iBAAA;ACtCZ;ADyCQ;EACI,kBAAA;ACvCZ;;AD4CA,gBAAA;AAEA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,qBA9LmB;ACoJvB;AD4CI;EACI,YAAA;EACA,iBAAA;EACA,mBAAA;AC1CR;AD2CQ;EACI,gBAxMI;AC+JhB;AD6CI;EACI,YAAA;EACA,kBAAA;EACA,qBA7MQ;EA8MR,kBAAA;EACA,2BAAA;AC3CR;AD6CQ;EACI,gBAjNW;EAkNX,qBAtNI;AC2KhB;;ADgDA,aAAA;AAEA;EACI,WAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,8BAAA;EACA,qBAhOmB;ACkLvB;ADiDI;EACI,aAAA;EACA,aAAA;EACA,mBAAA;AC/CR;ADiDQ;EACI,UAAA;AC/CZ;ADiDY;EACI,aAAA;EACA,UAAA;AC/ChB;ADoDQ;EACI,eAAA;AClDZ;ADqDQ;EACI,YAAA;EACA,aAAA;EACA,kBAAA;ACnDZ;ADuDI;EAEI,aAAA;EACA,mBAAA;EACA,8BAAA;ACtDR;;AAEA,qCAAqC","file":"global.css"}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMsK0ZBQXlDO0FBQ3JGLG9DQUFvQyxtQkFBTyxDQUFDLHlGQUFzQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLDhCQUE4Qix5REFBeUQsR0FBRyxjQUFjLGtDQUFrQyx5REFBeUQsR0FBRyxLQUFLLGNBQWMsZUFBZSw4QkFBOEIsR0FBRyxPQUFPLDBCQUEwQixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0Isa0NBQWtDLHdCQUF3QiwwQkFBMEIsaUJBQWlCLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxtQkFBbUIsaUJBQWlCLGlCQUFpQixvQkFBb0IsaUJBQWlCLHVCQUF1QixjQUFjLHVCQUF1QixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxrQkFBa0IsZ0JBQWdCLHNCQUFzQixHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLHFCQUFxQixnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSx1QkFBdUIsMEJBQTBCLEdBQUcsb0NBQW9DLGdCQUFnQixrQkFBa0IsdUNBQXVDLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLGtCQUFrQix3QkFBd0IsR0FBRyxrQkFBa0IsMEJBQTBCLGlCQUFpQix3QkFBd0IsdUJBQXVCLGlCQUFpQix1QkFBdUIsc0JBQXNCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLGtEQUFrRCxvQkFBb0IsR0FBRyxzQkFBc0IsZUFBZSxvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcsd0JBQXdCLDBCQUEwQixrREFBa0QsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLGNBQWMsb0NBQW9DLGlDQUFpQyxHQUFHLHVDQUF1QyxrQkFBa0IsZ0JBQWdCLEdBQUcsbUNBQW1DLGlCQUFpQixrQkFBa0IsMkJBQTJCLGtCQUFrQix3QkFBd0IsMEJBQTBCLEdBQUcsaUJBQWlCLGlCQUFpQixzQkFBc0IsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsOEJBQThCLHNCQUFzQixHQUFHLDhCQUE4Qix1QkFBdUIsR0FBRyxxQ0FBcUMsa0JBQWtCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLEdBQUcsa0JBQWtCLGlCQUFpQixzQkFBc0Isd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLHdCQUF3QixpQkFBaUIsdUJBQXVCLDBCQUEwQix1QkFBdUIsZ0NBQWdDLEdBQUcsOEJBQThCLHFCQUFxQiwwQkFBMEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixtQ0FBbUMsMEJBQTBCLEdBQUcseUJBQXlCLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsNkJBQTZCLGVBQWUsR0FBRyxpQ0FBaUMsa0JBQWtCLGVBQWUsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsNkJBQTZCLGlCQUFpQixrQkFBa0IsdUJBQXVCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsbURBQW1ELHVOQUF1TixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsV0FBVyxhQUFhLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxpQ0FBaUM7QUFDbHVMO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMzhkYTVhYjZlMzg3YjVmN2ViY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9mdWVudGVzL092ZXJsb2NrL092ZXJsb2NrLVJlZ3VsYXIudHRmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vZnVlbnRlcy9PdmVybG9jay9PdmVybG9jay1Cb2xkLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk92ZXJsb2NrXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk92ZXJsb2NrQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3ZlcmxvY2tcXFwiO1xcbn1cXG4qIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMTMyOTNkZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgZGl2IHtcXG4gIGhlaWdodDogMTN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuc2VhcmNoIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmhlYWRlciAubG9naW4taGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlciAubG9nbzEge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmhlYWRlciAubG9nbzIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW4tbGVmdDogMjglO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZWFkZXIgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEluZGV4ICovXFxuLmdsb2JhbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIHtcXG4gIGJhY2tncm91bmQ6ICMxYjk4ZTBmZjtcXG4gIGhlaWdodDogMTh2aDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMjkzZGZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgxOSwgNDEsIDYxLCAwLjYpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBkaXYge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLm1haW4gLmFydGljbGUgaDIge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBoMyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLm1haW4gLmFydGljbGUgaDQge1xcbiAgbWFyZ2luLXRvcDogNHZoO1xcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1haW4gLmFydGljbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzI0N2JhMGZmO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgxOSwgNDEsIDYxLCAwLjYpO1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSAuY29udGFpbmVyLWltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIC5jb250YWluZXItaW1hZ2UgaW1nIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogQXNpZGUgbGVmdCAqL1xcbi5hc2lkZV9sZWZ0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMDA2NDk0ZmY7XFxufVxcbi5hc2lkZV9sZWZ0IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogNDAwbXM7XFxufVxcbi5hc2lkZV9sZWZ0IGE6aG92ZXIge1xcbiAgY29sb3I6ICMxMzI5M2RmZjtcXG59XFxuLmFzaWRlX2xlZnQgLmNhdGVnb3JpZXMgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbi5hc2lkZV9sZWZ0IC5jYXRlZ29yaWVzIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLyogQXNpZGUgUmlnaHQgKi9cXG4uYXNpZGVfcmlnaHQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbn1cXG4uYXNpZGVfcmlnaHQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hc2lkZV9yaWdodCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA2NDk0ZmY7XFxufVxcbi5hc2lkZV9yaWdodCAuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6ICMxYjk4ZTBmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzI5M2RmZjtcXG59XFxuLmFzaWRlX3JpZ2h0IC5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlOGYxZjJmZjtcXG4gIGJhY2tncm91bmQ6ICMxMzI5M2RmZjtcXG59XFxuXFxuLyogQXJ0aWNsZXMgKi9cXG4ucGFnX2FydGljbGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogcm93IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgYmFja2dyb3VuZDogI2U4ZjFmMmZmO1xcbn1cXG4ucGFnX2FydGljbGUgLmFydGljbGUge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ucGFnX2FydGljbGUgLmFydGljbGUgZGl2IHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBkaXYgZGl2IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG4ucGFnX2FydGljbGUgLmFydGljbGUgcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBpbWcge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnBhZ19hcnRpY2xlIC5kYXRvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Z2xvYmFsLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJGOi9Vc2Vycy9EcmFjbyBEb3JtaWVucy9EZXNrdG9wL0Rlc3RydWNrL1dlYi9OZXh0SnMvcHJhY3RpY2Evc3R5bGVzL2dsb2JhbC5zY3NzXCIsXCJGOi9Vc2Vycy9EcmFjbyBEb3JtaWVucy9EZXNrdG9wL0Rlc3RydWNrL1dlYi9OZXh0SnMvcHJhY3RpY2Evc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7RUFFSSx1QkFBQTtFQUNBLDRDQUFBO0FDTko7QURRQTtFQUVJLDJCQUFBO0VBQ0EsNENBQUE7QUNQSjtBRFVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ1JKO0FEVUk7RUFDSSxxQkFBQTtBQ1JSOztBRFlBLFdBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQW5DWTtFQW9DWixZQUFBO0FDVEo7QURXSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEYUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNYUjtBRGVJO0VBRUksWUFBQTtBQ2RSO0FEaUJJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDZlI7QURrQkk7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDakJSO0FEb0JHO0VBQ0ssa0JBQUE7RUFDQSxxQkFBQTtBQ2xCUjs7QURzQkEsVUFBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQ25CSjs7QUR1QkEsU0FBQTtBQUVBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBNUZtQjtFQTZGbkIsYUFBQTtFQUNBLG1CQUFBO0FDdEJKO0FEd0JJO0VBQ0kscUJBbEdRO0VBbUdSLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQ3RCUjtBRHdCUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDdEJaO0FEeUJRO0VBQ0ksZUFBQTtBQ3ZCWjtBRDBCUTtFQUNJLGlCQUFBO0FDeEJaO0FEMkJRO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0FDekJYO0FENEJRO0VBRUkscUJBcElHO0VBcUlILDZDQUFBO0FDM0JaO0FEOEJRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDNUJaO0FENkJZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUMzQmhCOztBRGtDQSxlQUFBO0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBbEtZO0FDa0loQjtBRGtDSTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtBQ2pDUjtBRG1DUTtFQUVJLGdCQTVLSTtBQzBJaEI7QUR3Q1E7RUFDSSxpQkFBQTtBQ3RDWjtBRHlDUTtFQUNJLGtCQUFBO0FDdkNaOztBRDRDQSxnQkFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQTlMbUI7QUNvSnZCO0FENENJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUMxQ1I7QUQyQ1E7RUFDSSxnQkF4TUk7QUMrSmhCO0FENkNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBN01RO0VBOE1SLGtCQUFBO0VBQ0EsMkJBQUE7QUMzQ1I7QUQ2Q1E7RUFDSSxnQkFqTlc7RUFrTlgscUJBdE5JO0FDMktoQjs7QURnREEsYUFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQWhPbUI7QUNrTHZCO0FEaURJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQy9DUjtBRGlEUTtFQUNJLFVBQUE7QUMvQ1o7QURpRFk7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQy9DaEI7QURvRFE7RUFDSSxlQUFBO0FDbERaO0FEcURRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ25EWjtBRHVESTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDdERSOztBQUVBLHFDQUFxQ1wiLFwiZmlsZVwiOlwiZ2xvYmFsLmNzc1wifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==