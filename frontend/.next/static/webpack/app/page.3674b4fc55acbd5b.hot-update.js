"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/main/Main.tsx":
/*!**********************************!*\
  !*** ./components/main/Main.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/hooks/useAuth */ \"(app-pages-browser)/./components/hooks/useAuth.ts\");\n/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/Navbar */ \"(app-pages-browser)/./components/navbar/Navbar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Main = ()=>{\n    _s();\n    const isAuthenticated = (0,_components_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \" fixed top-0 left-0 p-[5%] z-50 text-2xl text-white\",\n                        children: \"Study Keeper\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 right-0 p-[5%] z-50\",\n                        children: !isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/auth/login\",\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {}, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \" p-[5%] flex-col flex h-full justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" bg-[#2C2C2C] p-2 text-[#C778DD]\",\n                        children: !isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/auth/login\",\n                            children: \"Обрати предмет\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/tasks\",\n                            children: \"Обрати предмет\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" bg-[#2C2C2C] p-2 text-[#C778DD]\",\n                        children: !isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/auth/login\",\n                            children: \"Додати завдання\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/tasks\",\n                            children: \"Додати завдання\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" bg-[#2C2C2C] p-2 text-[#C778DD]\",\n                        children: !isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/auth/login\",\n                            children: \"Календар\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/tasks\",\n                            children: \"Календар\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Programming\\\\проекты\\\\NEST\\\\fullstack-auth\\\\frontend\\\\components\\\\main\\\\Main.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Main, \"JNGTeCN0O1cSJcePuY60dgMyepM=\", false, function() {\n    return [\n        _components_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi9NYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTZCO0FBQ3dCO0FBQ0Q7QUFFcEQsTUFBTUcsT0FBTzs7SUFDWixNQUFNQyxrQkFBa0JILGtFQUFPQTtJQUUvQixxQkFDQyw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDOztrQ0FDQSw4REFBQ0M7d0JBQUdGLFdBQVU7a0NBQXNEOzs7Ozs7a0NBR3BFLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYixDQUFDRixnQ0FDRCw4REFBQ0osaURBQUlBOzRCQUFDUyxNQUFLO3NDQUFjOzs7OztzREFFekIsOERBQUNQLDZEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJViw4REFBQ1E7Z0JBQUtKLFdBQVU7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYixDQUFDRixnQ0FDRCw4REFBQ0osaURBQUlBOzRCQUFDUyxNQUFLO3NDQUFjOzs7OztzREFFekIsOERBQUNULGlEQUFJQTs0QkFBQ1MsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7a0NBR3RCLDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDYixDQUFDRixnQ0FDRCw4REFBQ0osaURBQUlBOzRCQUFDUyxNQUFLO3NDQUFjOzs7OztzREFFekIsOERBQUNULGlEQUFJQTs0QkFBQ1MsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7a0NBR3RCLDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDYixDQUFDRixnQ0FDRCw4REFBQ0osaURBQUlBOzRCQUFDUyxNQUFLO3NDQUFjOzs7OztzREFFekIsOERBQUNULGlEQUFJQTs0QkFBQ1MsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUI7R0ExQ01OOztRQUNtQkYsOERBQU9BOzs7S0FEMUJFO0FBNENOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbi9NYWluLnRzeD9hMzY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvY29tcG9uZW50cy9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhclwiO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHRjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB1c2VBdXRoKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIiBoLXNjcmVlblwiPlxyXG5cdFx0XHQ8aGVhZGVyPlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCIgZml4ZWQgdG9wLTAgbGVmdC0wIHAtWzUlXSB6LTUwIHRleHQtMnhsIHRleHQtd2hpdGVcIj5cclxuXHRcdFx0XHRcdFN0dWR5IEtlZXBlclxyXG5cdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCByaWdodC0wIHAtWzUlXSB6LTUwXCI+XHJcblx0XHRcdFx0XHR7IWlzQXV0aGVudGljYXRlZCA/IChcclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+TG9nIEluPC9MaW5rPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PE5hdmJhciAvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIiBwLVs1JV0gZmxleC1jb2wgZmxleCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgYmctWyMyQzJDMkNdIHAtMiB0ZXh0LVsjQzc3OEREXVwiPlxyXG5cdFx0XHRcdFx0eyFpc0F1dGhlbnRpY2F0ZWQgPyAoXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPtCe0LHRgNCw0YLQuCDQv9GA0LXQtNC80LXRgjwvTGluaz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdGFza3NcIj7QntCx0YDQsNGC0Lgg0L/RgNC10LTQvNC10YI8L0xpbms+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGJnLVsjMkMyQzJDXSBwLTIgdGV4dC1bI0M3NzhERF1cIj5cclxuXHRcdFx0XHRcdHshaXNBdXRoZW50aWNhdGVkID8gKFxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIj7QlNC+0LTQsNGC0Lgg0LfQsNCy0LTQsNC90L3RjzwvTGluaz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdGFza3NcIj7QlNC+0LTQsNGC0Lgg0LfQsNCy0LTQsNC90L3RjzwvTGluaz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgYmctWyMyQzJDMkNdIHAtMiB0ZXh0LVsjQzc3OEREXVwiPlxyXG5cdFx0XHRcdFx0eyFpc0F1dGhlbnRpY2F0ZWQgPyAoXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPtCa0LDQu9C10L3QtNCw0YA8L0xpbms+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Rhc2tzXCI+0JrQsNC70LXQvdC00LDRgDwvTGluaz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbWFpbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUF1dGgiLCJOYXZiYXIiLCJNYWluIiwiaXNBdXRoZW50aWNhdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJocmVmIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main/Main.tsx\n"));

/***/ })

});