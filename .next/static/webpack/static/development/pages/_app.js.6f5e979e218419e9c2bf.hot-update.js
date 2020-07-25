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
exports.push([module.i, "@font-face {\n  font-family: \"Overlock\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"OverlockBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Overlock\";\n}\n* a {\n  text-decoration: none;\n}\n\n/* Header */\n.header {\n  width: 100%;\n  height: 15vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background: #13293dff;\n  color: white;\n}\n.header div {\n  height: 13vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.header .search {\n  width: 300px;\n  height: 25px;\n  font-size: 20px;\n  padding: 5px;\n  border-radius: 4px;\n  border: 0;\n  padding-left: 10px;\n}\n.header .login-header {\n  color: white;\n}\n.header .logo1 {\n  width: 50px;\n  margin-right: 5px;\n}\n.header .logo2 {\n  position: absolute;\n  z-index: 10;\n  margin-left: 28%;\n  width: 25px;\n  cursor: pointer;\n}\n.header a {\n  margin-right: 30px;\n  text-decoration: none;\n}\n\n/* Index */\n.global-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n}\n\n/* Main */\n.main {\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n  padding: 15px;\n  padding-bottom: 8px;\n}\n.main .article {\n  background: #1b98e0ff;\n  height: 18vh;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  color: black;\n  padding-left: 25px;\n  transition: 400ms;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #13293dff;\n  box-shadow: 2px 2px 4px rgba(19, 41, 61, 0.6);\n  cursor: pointer;\n}\n.main .article div {\n  width: 50%;\n  margin-top: 5px;\n}\n.main .article h2 {\n  font-size: 26px;\n}\n.main .article h3 {\n  margin-left: 10px;\n}\n.main .article h4 {\n  margin-top: 4vh;\n  margin-left: 75%;\n}\n.main .article:hover {\n  background: #247ba0ff;\n  box-shadow: 4px 4px 8px rgba(19, 41, 61, 0.6);\n}\n.main .article .container-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  margin: 0;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.main .article .container-image img {\n  height: 250px;\n  width: 100%;\n}\n\n/* Aside left */\n.aside_left {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  background: #006494ff;\n}\n.aside_left a {\n  color: white;\n  transition: 400ms;\n}\n.aside_left a:hover {\n  color: #13293dff;\n}\n.aside_left .categories ul {\n  margin-left: 30px;\n}\n.aside_left .categories li {\n  margin-bottom: 5px;\n}\n\n/* Aside Right */\n.aside_right {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  background: #e8f1f2ff;\n}\n.aside_right a {\n  color: black;\n  transition: 400ms;\n  margin-bottom: 10px;\n}\n.aside_right a:hover {\n  color: #006494ff;\n}\n.aside_right .button {\n  padding: 5px;\n  border-radius: 4px;\n  background: #1b98e0ff;\n  text-align: center;\n  border: 1px solid #13293dff;\n}\n.aside_right .button:hover {\n  color: #e8f1f2ff;\n  background: #13293dff;\n}\n\n/* Articles */\n.pag_article {\n  width: 100%;\n  display: flex;\n  flex: row 1;\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n  background: #e8f1f2ff;\n}\n.pag_article .article {\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.pag_article .article div {\n  width: 70%;\n}\n.pag_article .article div div {\n  padding: 20px;\n  width: 80%;\n}\n.pag_article .article img {\n  width: 250px;\n  border-radius: 4px;\n}\n.pag_article .datos {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=global.css.map */\n", "",{"version":3,"sources":["F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.scss","F:/Users/Draco Dormiens/Desktop/Destruck/Web/NextJs/practica/styles/global.css"],"names":[],"mappings":"AAMA;EAEI,uBAAA;EACA,4CAAA;ACNJ;ADQA;EAEI,2BAAA;EACA,4CAAA;ACPJ;ADUA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;ACRJ;ADUI;EACI,qBAAA;ACRR;;ADYA,WAAA;AACA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,qBAnCY;EAoCZ,YAAA;ACTJ;ADWI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACTR;ADaI;EACI,YAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;ACXR;ADeI;EAEI,YAAA;ACdR;ADiBI;EACI,WAAA;EACA,iBAAA;ACfR;ADkBI;EAEI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;ACjBR;ADoBG;EACK,kBAAA;EACA,qBAAA;AClBR;;ADsBA,UAAA;AACA;EACI,WAAA;EACA,aAAA;EACA,kCAAA;ACnBJ;;ADuBA,SAAA;AAEA;EAEI,aAAA;EACA,sBAAA;EACA,qBA5FmB;EA6FnB,aAAA;EACA,mBAAA;ACtBJ;ADwBI;EACI,qBAlGQ;EAmGR,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,6CAAA;EACA,eAAA;ACtBR;ADwBQ;EACI,UAAA;EACA,eAAA;ACtBZ;ADyBQ;EACI,eAAA;ACvBZ;AD0BQ;EACI,iBAAA;ACxBZ;AD2BQ;EACG,eAAA;EACA,gBAAA;ACzBX;AD4BQ;EAEI,qBApIG;EAqIH,6CAAA;AC3BZ;AD8BQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,+BAAA;EACA,4BAAA;AC5BZ;AD6BY;EACI,aAAA;EACA,WAAA;AC3BhB;;ADkCA,eAAA;AAEA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAlKY;ACkIhB;ADkCI;EAEI,YAAA;EACA,iBAAA;ACjCR;ADmCQ;EAEI,gBA5KI;AC0IhB;ADwCQ;EACI,iBAAA;ACtCZ;ADyCQ;EACI,kBAAA;ACvCZ;;AD4CA,gBAAA;AAEA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,qBA9LmB;ACoJvB;AD4CI;EACI,YAAA;EACA,iBAAA;EACA,mBAAA;AC1CR;AD2CQ;EACI,gBAxMI;AC+JhB;AD6CI;EACI,YAAA;EACA,kBAAA;EACA,qBA7MQ;EA8MR,kBAAA;EACA,2BAAA;AC3CR;AD6CQ;EACI,gBAjNW;EAkNX,qBAtNI;AC2KhB;;ADgDA,aAAA;AAEA;EACI,WAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;EAEA,8BAAA;EACA,qBAhOmB;ACiLvB;ADkDI;EACI,aAAA;EACA,aAAA;EACA,mBAAA;AChDR;ADkDQ;EACI,UAAA;AChDZ;ADkDY;EACI,aAAA;EACA,UAAA;AChDhB;ADqDQ;EACI,YAAA;EACA,kBAAA;ACnDZ;ADuDI;EAEI,aAAA;EACA,mBAAA;EACA,8BAAA;ACtDR;;AAEA,qCAAqC","file":"global.css"}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMsK0ZBQXlDO0FBQ3JGLG9DQUFvQyxtQkFBTyxDQUFDLHlGQUFzQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLDhCQUE4Qix5REFBeUQsR0FBRyxjQUFjLGtDQUFrQyx5REFBeUQsR0FBRyxLQUFLLGNBQWMsZUFBZSw4QkFBOEIsR0FBRyxPQUFPLDBCQUEwQixHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0Isa0NBQWtDLHdCQUF3QiwwQkFBMEIsaUJBQWlCLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxtQkFBbUIsaUJBQWlCLGlCQUFpQixvQkFBb0IsaUJBQWlCLHVCQUF1QixjQUFjLHVCQUF1QixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxrQkFBa0IsZ0JBQWdCLHNCQUFzQixHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLHFCQUFxQixnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSx1QkFBdUIsMEJBQTBCLEdBQUcsb0NBQW9DLGdCQUFnQixrQkFBa0IsdUNBQXVDLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLGtCQUFrQix3QkFBd0IsR0FBRyxrQkFBa0IsMEJBQTBCLGlCQUFpQix3QkFBd0IsdUJBQXVCLGlCQUFpQix1QkFBdUIsc0JBQXNCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLGtEQUFrRCxvQkFBb0IsR0FBRyxzQkFBc0IsZUFBZSxvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcsd0JBQXdCLDBCQUEwQixrREFBa0QsR0FBRyxtQ0FBbUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLGNBQWMsb0NBQW9DLGlDQUFpQyxHQUFHLHVDQUF1QyxrQkFBa0IsZ0JBQWdCLEdBQUcsbUNBQW1DLGlCQUFpQixrQkFBa0IsMkJBQTJCLGtCQUFrQix3QkFBd0IsMEJBQTBCLEdBQUcsaUJBQWlCLGlCQUFpQixzQkFBc0IsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsOEJBQThCLHNCQUFzQixHQUFHLDhCQUE4Qix1QkFBdUIsR0FBRyxxQ0FBcUMsa0JBQWtCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLEdBQUcsa0JBQWtCLGlCQUFpQixzQkFBc0Isd0JBQXdCLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLHdCQUF3QixpQkFBaUIsdUJBQXVCLDBCQUEwQix1QkFBdUIsZ0NBQWdDLEdBQUcsOEJBQThCLHFCQUFxQiwwQkFBMEIsR0FBRyxrQ0FBa0MsZ0JBQWdCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLG1DQUFtQywwQkFBMEIsR0FBRyx5QkFBeUIsa0JBQWtCLGtCQUFrQix3QkFBd0IsR0FBRyw2QkFBNkIsZUFBZSxHQUFHLGlDQUFpQyxrQkFBa0IsZUFBZSxHQUFHLDZCQUE2QixpQkFBaUIsdUJBQXVCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsbURBQW1ELHVOQUF1TixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sV0FBVyxLQUFLLFVBQVUsV0FBVyxhQUFhLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLGlDQUFpQztBQUNubUw7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42ZjVlOTc5ZTIxODQxOWU5YzJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2Z1ZW50ZXMvT3ZlcmxvY2svT3ZlcmxvY2stUmVndWxhci50dGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9mdWVudGVzL092ZXJsb2NrL092ZXJsb2NrLUJvbGQudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3ZlcmxvY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3ZlcmxvY2tCb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdmVybG9ja1xcXCI7XFxufVxcbiogYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxMzI5M2RmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlciBkaXYge1xcbiAgaGVpZ2h0OiAxM3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5zZWFyY2gge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uaGVhZGVyIC5sb2dpbi1oZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyIC5sb2dvMSB7XFxuICB3aWR0aDogNTBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uaGVhZGVyIC5sb2dvMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1hcmdpbi1sZWZ0OiAyOCU7XFxuICB3aWR0aDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlciBhIHtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSW5kZXggKi9cXG4uZ2xvYmFsLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbn1cXG5cXG4vKiBNYWluICovXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiAjZThmMWYyZmY7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuLm1haW4gLmFydGljbGUge1xcbiAgYmFja2dyb3VuZDogIzFiOThlMGZmO1xcbiAgaGVpZ2h0OiAxOHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHRyYW5zaXRpb246IDQwMG1zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTMyOTNkZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDE5LCA0MSwgNjEsIDAuNik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYWluIC5hcnRpY2xlIGRpdiB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBoMiB7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcbi5tYWluIC5hcnRpY2xlIGgzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ubWFpbiAuYXJ0aWNsZSBoNCB7XFxuICBtYXJnaW4tdG9wOiA0dmg7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWFpbiAuYXJ0aWNsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjQ3YmEwZmY7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDE5LCA0MSwgNjEsIDAuNik7XFxufVxcbi5tYWluIC5hcnRpY2xlIC5jb250YWluZXItaW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG59XFxuLm1haW4gLmFydGljbGUgLmNvbnRhaW5lci1pbWFnZSBpbWcge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBBc2lkZSBsZWZ0ICovXFxuLmFzaWRlX2xlZnQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMwMDY0OTRmZjtcXG59XFxuLmFzaWRlX2xlZnQgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiA0MDBtcztcXG59XFxuLmFzaWRlX2xlZnQgYTpob3ZlciB7XFxuICBjb2xvcjogIzEzMjkzZGZmO1xcbn1cXG4uYXNpZGVfbGVmdCAuY2F0ZWdvcmllcyB1bCB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLmFzaWRlX2xlZnQgLmNhdGVnb3JpZXMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKiBBc2lkZSBSaWdodCAqL1xcbi5hc2lkZV9yaWdodCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiAjZThmMWYyZmY7XFxufVxcbi5hc2lkZV9yaWdodCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IDQwMG1zO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFzaWRlX3JpZ2h0IGE6aG92ZXIge1xcbiAgY29sb3I6ICMwMDY0OTRmZjtcXG59XFxuLmFzaWRlX3JpZ2h0IC5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogIzFiOThlMGZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMjkzZGZmO1xcbn1cXG4uYXNpZGVfcmlnaHQgLmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2U4ZjFmMmZmO1xcbiAgYmFja2dyb3VuZDogIzEzMjkzZGZmO1xcbn1cXG5cXG4vKiBBcnRpY2xlcyAqL1xcbi5wYWdfYXJ0aWNsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiByb3cgMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICBiYWNrZ3JvdW5kOiAjZThmMWYyZmY7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBkaXYge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuLnBhZ19hcnRpY2xlIC5hcnRpY2xlIGRpdiBkaXYge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5wYWdfYXJ0aWNsZSAuYXJ0aWNsZSBpbWcge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ucGFnX2FydGljbGUgLmRhdG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWwuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkY6L1VzZXJzL0RyYWNvIERvcm1pZW5zL0Rlc2t0b3AvRGVzdHJ1Y2svV2ViL05leHRKcy9wcmFjdGljYS9zdHlsZXMvZ2xvYmFsLnNjc3NcIixcIkY6L1VzZXJzL0RyYWNvIERvcm1pZW5zL0Rlc2t0b3AvRGVzdHJ1Y2svV2ViL05leHRKcy9wcmFjdGljYS9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUVJLHVCQUFBO0VBQ0EsNENBQUE7QUNOSjtBRFFBO0VBRUksMkJBQUE7RUFDQSw0Q0FBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDUko7QURVSTtFQUNJLHFCQUFBO0FDUlI7O0FEWUEsV0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBbkNZO0VBb0NaLFlBQUE7QUNUSjtBRFdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDVFI7QURhSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEZUk7RUFFSSxZQUFBO0FDZFI7QURpQkk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNmUjtBRGtCSTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNqQlI7QURvQkc7RUFDSyxrQkFBQTtFQUNBLHFCQUFBO0FDbEJSOztBRHNCQSxVQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FDbkJKOztBRHVCQSxTQUFBO0FBRUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkE1Rm1CO0VBNkZuQixhQUFBO0VBQ0EsbUJBQUE7QUN0Qko7QUR3Qkk7RUFDSSxxQkFsR1E7RUFtR1IsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FDdEJSO0FEd0JRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUN0Qlo7QUR5QlE7RUFDSSxlQUFBO0FDdkJaO0FEMEJRO0VBQ0ksaUJBQUE7QUN4Qlo7QUQyQlE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7QUN6Qlg7QUQ0QlE7RUFFSSxxQkFwSUc7RUFxSUgsNkNBQUE7QUMzQlo7QUQ4QlE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUM1Qlo7QUQ2Qlk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQzNCaEI7O0FEa0NBLGVBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFsS1k7QUNrSWhCO0FEa0NJO0VBRUksWUFBQTtFQUNBLGlCQUFBO0FDakNSO0FEbUNRO0VBRUksZ0JBNUtJO0FDMEloQjtBRHdDUTtFQUNJLGlCQUFBO0FDdENaO0FEeUNRO0VBQ0ksa0JBQUE7QUN2Q1o7O0FENENBLGdCQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBOUxtQjtBQ29KdkI7QUQ0Q0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQzFDUjtBRDJDUTtFQUNJLGdCQXhNSTtBQytKaEI7QUQ2Q0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkE3TVE7RUE4TVIsa0JBQUE7RUFDQSwyQkFBQTtBQzNDUjtBRDZDUTtFQUNJLGdCQWpOVztFQWtOWCxxQkF0Tkk7QUMyS2hCOztBRGdEQSxhQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsOEJBQUE7RUFDQSxxQkFoT21CO0FDaUx2QjtBRGtESTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNoRFI7QURrRFE7RUFDSSxVQUFBO0FDaERaO0FEa0RZO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNoRGhCO0FEcURRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDbkRaO0FEdURJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUN0RFI7O0FBRUEscUNBQXFDXCIsXCJmaWxlXCI6XCJnbG9iYWwuY3NzXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9