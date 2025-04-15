/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/getProducts/route";
exports.ids = ["app/api/getProducts/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_julianlipari_Desktop_2022_diseno_Proyectos_2024_website_rocio_alonso_project_rocio_alonso_src_app_api_getProducts_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/getProducts/route.js */ \"(rsc)/./src/app/api/getProducts/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getProducts/route\",\n        pathname: \"/api/getProducts\",\n        filename: \"route\",\n        bundlePath: \"app/api/getProducts/route\"\n    },\n    resolvedPagePath: \"/Users/julianlipari/Desktop/2022/diseno/Proyectos/2024/website-rocio-alonso/project/rocio-alonso/src/app/api/getProducts/route.js\",\n    nextConfigOutput,\n    userland: _Users_julianlipari_Desktop_2022_diseno_Proyectos_2024_website_rocio_alonso_project_rocio_alonso_src_app_api_getProducts_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRQcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2V0UHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZXRQcm9kdWN0cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmp1bGlhbmxpcGFyaSUyRkRlc2t0b3AlMkYyMDIyJTJGZGlzZW5vJTJGUHJveWVjdG9zJTJGMjAyNCUyRndlYnNpdGUtcm9jaW8tYWxvbnNvJTJGcHJvamVjdCUyRnJvY2lvLWFsb25zbyUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZqdWxpYW5saXBhcmklMkZEZXNrdG9wJTJGMjAyMiUyRmRpc2VubyUyRlByb3llY3RvcyUyRjIwMjQlMkZ3ZWJzaXRlLXJvY2lvLWFsb25zbyUyRnByb2plY3QlMkZyb2Npby1hbG9uc28maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lGO0FBQzlKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JvY2lvLWFsb25zby8/OTM5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2p1bGlhbmxpcGFyaS9EZXNrdG9wLzIwMjIvZGlzZW5vL1Byb3llY3Rvcy8yMDI0L3dlYnNpdGUtcm9jaW8tYWxvbnNvL3Byb2plY3Qvcm9jaW8tYWxvbnNvL3NyYy9hcHAvYXBpL2dldFByb2R1Y3RzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZXRQcm9kdWN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldFByb2R1Y3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZXRQcm9kdWN0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9qdWxpYW5saXBhcmkvRGVza3RvcC8yMDIyL2Rpc2Vuby9Qcm95ZWN0b3MvMjAyNC93ZWJzaXRlLXJvY2lvLWFsb25zby9wcm9qZWN0L3JvY2lvLWFsb25zby9zcmMvYXBwL2FwaS9nZXRQcm9kdWN0cy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/actions.js":
/*!****************************!*\
  !*** ./src/app/actions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllProductsDB: () => (/* binding */ getAllProductsDB)\n/* harmony export */ });\n/* harmony import */ var _app_models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/models/Product */ \"(rsc)/./src/app/models/Product.js\");\n/* harmony import */ var _app_database_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/database/dbConnect */ \"(rsc)/./src/app/database/dbConnect.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst getAllProductsDB = async ()=>{\n    await (0,_app_database_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    try {\n        const products = await _app_models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n        return {\n            products: JSON.parse(JSON.stringify(products))\n        };\n    } catch (error) {\n        console.log(\"Error: \", error.message);\n        return {\n            products: [],\n            category: null\n        };\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FjdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDTTtBQUN2QjtBQUNNO0FBRWhDLE1BQU1JLG1CQUFtQjtJQUN2QixNQUFNSCxtRUFBU0E7SUFDZixJQUFJO1FBQ0YsTUFBTUksV0FBVyxNQUFNTCwyREFBT0EsQ0FBQ00sSUFBSTtRQUNuQyxPQUFPO1lBQUVELFVBQVVFLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDSjtRQUFXO0lBQzFELEVBQUUsT0FBT0ssT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsV0FBV0YsTUFBTUcsT0FBTztRQUNwQyxPQUFPO1lBQUVSLFVBQVUsRUFBRTtZQUFFUyxVQUFVO1FBQUs7SUFDeEM7QUFDRjtBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JvY2lvLWFsb25zby8uL3NyYy9hcHAvYWN0aW9ucy5qcz81MzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gXCJAL2FwcC9tb2RlbHMvUHJvZHVjdFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9hcHAvZGF0YWJhc2UvZGJDb25uZWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGdldEFsbFByb2R1Y3RzREIgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKCk7XG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4geyBwcm9kdWN0czogW10sIGNhdGVnb3J5OiBudWxsIH07XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldEFsbFByb2R1Y3RzREIgfTtcbiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiZGJDb25uZWN0IiwiYXhpb3MiLCJtb25nb29zZSIsImdldEFsbFByb2R1Y3RzREIiLCJwcm9kdWN0cyIsImZpbmQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/actions.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/getProducts/route.js":
/*!******************************************!*\
  !*** ./src/app/api/getProducts/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/actions */ \"(rsc)/./src/app/actions.js\");\n\n\n\n\nasync function GET(req) {\n    try {\n        const response = await (0,_app_actions__WEBPACK_IMPORTED_MODULE_3__.getAllProductsDB)(); // Fixed typo: 'reponse' -> 'response'\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            response\n        });\n    } catch (error) {\n        console.error(\"Error reading folder:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: \"Error reading folder.\",\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRQcm9kdWN0cy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ25CO0FBQ0o7QUFDNkI7QUFFMUMsZUFBZUksSUFBSUMsR0FBRztJQUMzQixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNSCw4REFBZ0JBLElBQUksc0NBQXNDO1FBRWpGLE9BQU9ILHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFDdkJEO1FBQ0Y7SUFDRixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkEsTUFBTUUsT0FBTztRQUVwRCxPQUFPVixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtZQUNFSSxTQUFTO1lBQ1RELFNBQVM7WUFDVEYsT0FBT0EsTUFBTUUsT0FBTztRQUN0QixHQUNBO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9jaW8tYWxvbnNvLy4vc3JjL2FwcC9hcGkvZ2V0UHJvZHVjdHMvcm91dGUuanM/NTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0c0RCIH0gZnJvbSBcIkAvYXBwL2FjdGlvbnNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEFsbFByb2R1Y3RzREIoKTsgLy8gRml4ZWQgdHlwbzogJ3JlcG9uc2UnIC0+ICdyZXNwb25zZSdcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICByZXNwb25zZSAvLyBOb3cgY29ycmVjdGx5IHJlZmVyZW5jaW5nICdyZXNwb25zZSdcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVhZGluZyBmb2xkZXI6XCIsIGVycm9yLm1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJFcnJvciByZWFkaW5nIGZvbGRlci5cIixcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInBhdGgiLCJmcyIsImdldEFsbFByb2R1Y3RzREIiLCJHRVQiLCJyZXEiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwic3VjY2VzcyIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/getProducts/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/database/dbConnect.js":
/*!***************************************!*\
  !*** ./src/app/database/dbConnect.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2RhdGFiYXNlL2RiQ29ubmVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxDQUFDO0FBRXBCLGVBQWVDO0lBQ2IsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNQyxLQUFLLE1BQU1KLHVEQUFnQixDQUFDTSxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDekRQLFdBQVdFLFdBQVcsR0FBR0MsR0FBR0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtBQUN2RDtBQUVBLGlFQUFlUixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9jaW8tYWxvbnNvLy4vc3JjL2FwcC9kYXRhYmFzZS9kYkNvbm5lY3QuanM/ZTBiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XG4gIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/database/dbConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/Product.js":
/*!***********************************!*\
  !*** ./src/app/models/Product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    }\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9Qcm9kdWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxnQkFBZ0IsSUFBSUQsNENBQU1BLENBQUM7SUFDL0JFLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0FBQ3ZDO0FBRUEsTUFBTUMsVUFDSlAsd0RBQWUsQ0FBQ08sT0FBTyxJQUFJUCxxREFBYyxDQUFDLFdBQVdFO0FBRXZELGlFQUFlSyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9jaW8tYWxvbnNvLy4vc3JjL2FwcC9tb2RlbHMvUHJvZHVjdC5qcz8xYjg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5jb25zdCBQcm9kdWN0ID1cbiAgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsIHByb2R1Y3RTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInByb2R1Y3RTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiUHJvZHVjdCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/Product.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjulianlipari%2FDesktop%2F2022%2Fdiseno%2FProyectos%2F2024%2Fwebsite-rocio-alonso%2Fproject%2Frocio-alonso&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();