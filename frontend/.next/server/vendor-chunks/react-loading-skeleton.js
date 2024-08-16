"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-loading-skeleton";
exports.ids = ["vendor-chunks/react-loading-skeleton"];
exports.modules = {

/***/ "(rsc)/./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"fa4ef92f9d5e\");\nif (false) {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1za2VsZXRvbi9kaXN0L3NrZWxldG9uLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLEtBQVUsRUFBRSxFQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3M/YWYwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImZhNGVmOTJmOWQ1ZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/react-loading-skeleton/dist/skeleton.css\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-loading-skeleton/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SkeletonTheme: () => (/* binding */ SkeletonTheme),\n/* harmony export */   \"default\": () => (/* binding */ Skeleton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ SkeletonTheme,default auto */ \n/**\n * @internal\n */ const SkeletonThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({});\n/* eslint-disable react/no-array-index-key */ const defaultEnableAnimation = true;\n// For performance & cleanliness, don't add any inline styles unless we have to\nfunction styleOptionsToCssProperties({ baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation }) {\n    const style = {};\n    if (direction === \"rtl\") style[\"--animation-direction\"] = \"reverse\";\n    if (typeof duration === \"number\") style[\"--animation-duration\"] = `${duration}s`;\n    if (!enableAnimation) style[\"--pseudo-element-display\"] = \"none\";\n    if (typeof width === \"string\" || typeof width === \"number\") style.width = width;\n    if (typeof height === \"string\" || typeof height === \"number\") style.height = height;\n    if (typeof borderRadius === \"string\" || typeof borderRadius === \"number\") style.borderRadius = borderRadius;\n    if (circle) style.borderRadius = \"50%\";\n    if (typeof baseColor !== \"undefined\") style[\"--base-color\"] = baseColor;\n    if (typeof highlightColor !== \"undefined\") style[\"--highlight-color\"] = highlightColor;\n    return style;\n}\nfunction Skeleton({ count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions }) {\n    var _a, _b, _c;\n    const contextStyleOptions = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext);\n    const propsStyleOptions = {\n        ...originalPropsStyleOptions\n    };\n    // DO NOT overwrite style options from the context if `propsStyleOptions`\n    // has properties explicity set to undefined\n    for (const [key, value] of Object.entries(originalPropsStyleOptions)){\n        if (typeof value === \"undefined\") {\n            delete propsStyleOptions[key];\n        }\n    }\n    // Props take priority over context\n    const styleOptions = {\n        ...contextStyleOptions,\n        ...propsStyleOptions,\n        circle\n    };\n    // `styleProp` has the least priority out of everything\n    const style = {\n        ...styleProp,\n        ...styleOptionsToCssProperties(styleOptions)\n    };\n    let className = \"react-loading-skeleton\";\n    if (customClassName) className += ` ${customClassName}`;\n    const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;\n    const elements = [];\n    const countCeil = Math.ceil(count);\n    for(let i = 0; i < countCeil; i++){\n        let thisStyle = style;\n        if (countCeil > count && i === countCeil - 1) {\n            // count is not an integer and we've reached the last iteration of\n            // the loop, so add a \"fractional\" skeleton.\n            //\n            // For example, if count is 3.5, we've already added 3 full\n            // skeletons, so now we add one more skeleton that is 0.5 times the\n            // original width.\n            const width = (_b = thisStyle.width) !== null && _b !== void 0 ? _b : \"100%\"; // 100% is the default since that's what's in the CSS\n            const fractionalPart = count % 1;\n            const fractionalWidth = typeof width === \"number\" ? width * fractionalPart : `calc(${width} * ${fractionalPart})`;\n            thisStyle = {\n                ...thisStyle,\n                width: fractionalWidth\n            };\n        }\n        const skeletonSpan = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n            className: className,\n            style: thisStyle,\n            key: i\n        }, \"‌\");\n        if (inline) {\n            elements.push(skeletonSpan);\n        } else {\n            // Without the <br />, the skeleton lines will all run together if\n            // `width` is specified\n            elements.push(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                key: i\n            }, skeletonSpan, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null)));\n        }\n    }\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: containerClassName,\n        \"data-testid\": containerTestId,\n        \"aria-live\": \"polite\",\n        \"aria-busy\": (_c = styleOptions.enableAnimation) !== null && _c !== void 0 ? _c : defaultEnableAnimation\n    }, Wrapper ? elements.map((el, i)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, {\n            key: i\n        }, el)) : elements);\n}\nfunction SkeletonTheme({ children, ...styleOptions }) {\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SkeletonThemeContext.Provider, {\n        value: styleOptions\n    }, children);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1za2VsZXRvbi9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OzsyRUFDMEI7QUFFMUI7O0NBRUMsR0FDRCxNQUFNQyxxQ0FBdUJELGdEQUFtQixDQUFDLENBQUM7QUFFbEQsMkNBQTJDLEdBQzNDLE1BQU1HLHlCQUF5QjtBQUMvQiwrRUFBK0U7QUFDL0UsU0FBU0MsNEJBQTRCLEVBQUVDLFNBQVMsRUFBRUMsY0FBYyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0JWLHNCQUFzQixFQUFHO0lBQ25LLE1BQU1XLFFBQVEsQ0FBQztJQUNmLElBQUlILGNBQWMsT0FDZEcsS0FBSyxDQUFDLHdCQUF3QixHQUFHO0lBQ3JDLElBQUksT0FBT0YsYUFBYSxVQUNwQkUsS0FBSyxDQUFDLHVCQUF1QixHQUFHLENBQUMsRUFBRUYsU0FBUyxDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFDQyxpQkFDREMsS0FBSyxDQUFDLDJCQUEyQixHQUFHO0lBQ3hDLElBQUksT0FBT1AsVUFBVSxZQUFZLE9BQU9BLFVBQVUsVUFDOUNPLE1BQU1QLEtBQUssR0FBR0E7SUFDbEIsSUFBSSxPQUFPQyxXQUFXLFlBQVksT0FBT0EsV0FBVyxVQUNoRE0sTUFBTU4sTUFBTSxHQUFHQTtJQUNuQixJQUFJLE9BQU9DLGlCQUFpQixZQUFZLE9BQU9BLGlCQUFpQixVQUM1REssTUFBTUwsWUFBWSxHQUFHQTtJQUN6QixJQUFJQyxRQUNBSSxNQUFNTCxZQUFZLEdBQUc7SUFDekIsSUFBSSxPQUFPSixjQUFjLGFBQ3JCUyxLQUFLLENBQUMsZUFBZSxHQUFHVDtJQUM1QixJQUFJLE9BQU9DLG1CQUFtQixhQUMxQlEsS0FBSyxDQUFDLG9CQUFvQixHQUFHUjtJQUNqQyxPQUFPUTtBQUNYO0FBQ0EsU0FBU0MsU0FBUyxFQUFFQyxRQUFRLENBQUMsRUFB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QUFHaUI7QUFDeEY7QUFFOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3QvaW5kZXguanM/YTE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBTa2VsZXRvblRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmNvbnN0IGRlZmF1bHRFbmFibGVBbmltYXRpb24gPSB0cnVlO1xuLy8gRm9yIHBlcmZvcm1hbmNlICYgY2xlYW5saW5lc3MsIGRvbid0IGFkZCBhbnkgaW5saW5lIHN0eWxlcyB1bmxlc3Mgd2UgaGF2ZSB0b1xuZnVuY3Rpb24gc3R5bGVPcHRpb25zVG9Dc3NQcm9wZXJ0aWVzKHsgYmFzZUNvbG9yLCBoaWdobGlnaHRDb2xvciwgd2lkdGgsIGhlaWdodCwgYm9yZGVyUmFkaXVzLCBjaXJjbGUsIGRpcmVjdGlvbiwgZHVyYXRpb24sIGVuYWJsZUFuaW1hdGlvbiA9IGRlZmF1bHRFbmFibGVBbmltYXRpb24sIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKVxuICAgICAgICBzdHlsZVsnLS1hbmltYXRpb24tZGlyZWN0aW9uJ10gPSAncmV2ZXJzZSc7XG4gICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ251bWJlcicpXG4gICAgICAgIHN0eWxlWyctLWFuaW1hdGlvbi1kdXJhdGlvbiddID0gYCR7ZHVyYXRpb259c2A7XG4gICAgaWYgKCFlbmFibGVBbmltYXRpb24pXG4gICAgICAgIHN0eWxlWyctLXBzZXVkby1lbGVtZW50LWRpc3BsYXknXSA9ICdub25lJztcbiAgICBpZiAodHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInKVxuICAgICAgICBzdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgIGlmICh0eXBlb2YgaGVpZ2h0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJylcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGlmICh0eXBlb2YgYm9yZGVyUmFkaXVzID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYm9yZGVyUmFkaXVzID09PSAnbnVtYmVyJylcbiAgICAgICAgc3R5bGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzO1xuICAgIGlmIChjaXJjbGUpXG4gICAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuICAgIGlmICh0eXBlb2YgYmFzZUNvbG9yICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgc3R5bGVbJy0tYmFzZS1jb2xvciddID0gYmFzZUNvbG9yO1xuICAgIGlmICh0eXBlb2YgaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICBzdHlsZVsnLS1oaWdobGlnaHQtY29sb3InXSA9IGhpZ2hsaWdodENvbG9yO1xuICAgIHJldHVybiBzdHlsZTtcbn1cbmZ1bmN0aW9uIFNrZWxldG9uKHsgY291bnQgPSAxLCB3cmFwcGVyOiBXcmFwcGVyLCBjbGFzc05hbWU6IGN1c3RvbUNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3NOYW1lLCBjb250YWluZXJUZXN0SWQsIGNpcmNsZSA9IGZhbHNlLCBzdHlsZTogc3R5bGVQcm9wLCAuLi5vcmlnaW5hbFByb3BzU3R5bGVPcHRpb25zIH0pIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBjb25zdCBjb250ZXh0U3R5bGVPcHRpb25zID0gUmVhY3QudXNlQ29udGV4dChTa2VsZXRvblRoZW1lQ29udGV4dCk7XG4gICAgY29uc3QgcHJvcHNTdHlsZU9wdGlvbnMgPSB7IC4uLm9yaWdpbmFsUHJvcHNTdHlsZU9wdGlvbnMgfTtcbiAgICAvLyBETyBOT1Qgb3ZlcndyaXRlIHN0eWxlIG9wdGlvbnMgZnJvbSB0aGUgY29udGV4dCBpZiBgcHJvcHNTdHlsZU9wdGlvbnNgXG4gICAgLy8gaGFzIHByb3BlcnRpZXMgZXhwbGljaXR5IHNldCB0byB1bmRlZmluZWRcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcmlnaW5hbFByb3BzU3R5bGVPcHRpb25zKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzU3R5bGVPcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvcHMgdGFrZSBwcmlvcml0eSBvdmVyIGNvbnRleHRcbiAgICBjb25zdCBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmNvbnRleHRTdHlsZU9wdGlvbnMsXG4gICAgICAgIC4uLnByb3BzU3R5bGVPcHRpb25zLFxuICAgICAgICBjaXJjbGUsXG4gICAgfTtcbiAgICAvLyBgc3R5bGVQcm9wYCBoYXMgdGhlIGxlYXN0IHByaW9yaXR5IG91dCBvZiBldmVyeXRoaW5nXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC4uLnN0eWxlUHJvcCxcbiAgICAgICAgLi4uc3R5bGVPcHRpb25zVG9Dc3NQcm9wZXJ0aWVzKHN0eWxlT3B0aW9ucyksXG4gICAgfTtcbiAgICBsZXQgY2xhc3NOYW1lID0gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpXG4gICAgICAgIGNsYXNzTmFtZSArPSBgICR7Y3VzdG9tQ2xhc3NOYW1lfWA7XG4gICAgY29uc3QgaW5saW5lID0gKF9hID0gc3R5bGVPcHRpb25zLmlubGluZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2U7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICBjb25zdCBjb3VudENlaWwgPSBNYXRoLmNlaWwoY291bnQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRDZWlsOyBpKyspIHtcbiAgICAgICAgbGV0IHRoaXNTdHlsZSA9IHN0eWxlO1xuICAgICAgICBpZiAoY291bnRDZWlsID4gY291bnQgJiYgaSA9PT0gY291bnRDZWlsIC0gMSkge1xuICAgICAgICAgICAgLy8gY291bnQgaXMgbm90IGFuIGludGVnZXIgYW5kIHdlJ3ZlIHJlYWNoZWQgdGhlIGxhc3QgaXRlcmF0aW9uIG9mXG4gICAgICAgICAgICAvLyB0aGUgbG9vcCwgc28gYWRkIGEgXCJmcmFjdGlvbmFsXCIgc2tlbGV0b24uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIGNvdW50IGlzIDMuNSwgd2UndmUgYWxyZWFkeSBhZGRlZCAzIGZ1bGxcbiAgICAgICAgICAgIC8vIHNrZWxldG9ucywgc28gbm93IHdlIGFkZCBvbmUgbW9yZSBza2VsZXRvbiB0aGF0IGlzIDAuNSB0aW1lcyB0aGVcbiAgICAgICAgICAgIC8vIG9yaWdpbmFsIHdpZHRoLlxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSAoX2IgPSB0aGlzU3R5bGUud2lkdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcxMDAlJzsgLy8gMTAwJSBpcyB0aGUgZGVmYXVsdCBzaW5jZSB0aGF0J3Mgd2hhdCdzIGluIHRoZSBDU1NcbiAgICAgICAgICAgIGNvbnN0IGZyYWN0aW9uYWxQYXJ0ID0gY291bnQgJSAxO1xuICAgICAgICAgICAgY29uc3QgZnJhY3Rpb25hbFdpZHRoID0gdHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgID8gd2lkdGggKiBmcmFjdGlvbmFsUGFydFxuICAgICAgICAgICAgICAgIDogYGNhbGMoJHt3aWR0aH0gKiAke2ZyYWN0aW9uYWxQYXJ0fSlgO1xuICAgICAgICAgICAgdGhpc1N0eWxlID0geyAuLi50aGlzU3R5bGUsIHdpZHRoOiBmcmFjdGlvbmFsV2lkdGggfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBza2VsZXRvblNwYW4gPSAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHRoaXNTdHlsZSwga2V5OiBpIH0sIFwiXFx1MjAwQ1wiKSk7XG4gICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goc2tlbGV0b25TcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdpdGhvdXQgdGhlIDxiciAvPiwgdGhlIHNrZWxldG9uIGxpbmVzIHdpbGwgYWxsIHJ1biB0b2dldGhlciBpZlxuICAgICAgICAgICAgLy8gYHdpZHRoYCBpcyBzcGVjaWZpZWRcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgeyBrZXk6IGkgfSxcbiAgICAgICAgICAgICAgICBza2VsZXRvblNwYW4sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogY29udGFpbmVyQ2xhc3NOYW1lLCBcImRhdGEtdGVzdGlkXCI6IGNvbnRhaW5lclRlc3RJZCwgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiwgXCJhcmlhLWJ1c3lcIjogKF9jID0gc3R5bGVPcHRpb25zLmVuYWJsZUFuaW1hdGlvbikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZGVmYXVsdEVuYWJsZUFuaW1hdGlvbiB9LCBXcmFwcGVyXG4gICAgICAgID8gZWxlbWVudHMubWFwKChlbCwgaSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IGtleTogaSB9LCBlbCkpXG4gICAgICAgIDogZWxlbWVudHMpKTtcbn1cblxuZnVuY3Rpb24gU2tlbGV0b25UaGVtZSh7IGNoaWxkcmVuLCAuLi5zdHlsZU9wdGlvbnMgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTa2VsZXRvblRoZW1lQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogc3R5bGVPcHRpb25zIH0sIGNoaWxkcmVuKSk7XG59XG5cbmV4cG9ydCB7IFNrZWxldG9uVGhlbWUsIFNrZWxldG9uIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNrZWxldG9uVGhlbWVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRlZmF1bHRFbmFibGVBbmltYXRpb24iLCJzdHlsZU9wdGlvbnNUb0Nzc1Byb3BlcnRpZXMiLCJiYXNlQ29sb3IiLCJoaWdobGlnaHRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY2lyY2xlIiwiZGlyZWN0aW9uIiwiZHVyYXRpb24iLCJlbmFibGVBbmltYXRpb24iLCJzdHlsZSIsIlNrZWxldG9uIiwiY291bnQiLCJ3cmFwcGVyIiwiV3JhcHBlciIsImNsYXNzTmFtZSIsImN1c3RvbUNsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsImNvbnRhaW5lclRlc3RJZCIsInN0eWxlUHJvcCIsIm9yaWdpbmFsUHJvcHNTdHlsZU9wdGlvbnMiLCJfYSIsIl9iIiwiX2MiLCJjb250ZXh0U3R5bGVPcHRpb25zIiwidXNlQ29udGV4dCIsInByb3BzU3R5bGVPcHRpb25zIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwic3R5bGVPcHRpb25zIiwiaW5saW5lIiwiZWxlbWVudHMiLCJjb3VudENlaWwiLCJNYXRoIiwiY2VpbCIsImkiLCJ0aGlzU3R5bGUiLCJmcmFjdGlvbmFsUGFydCIsImZyYWN0aW9uYWxXaWR0aCIsInNrZWxldG9uU3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJwdXNoIiwiRnJhZ21lbnQiLCJtYXAiLCJlbCIsIlNrZWxldG9uVGhlbWUiLCJjaGlsZHJlbiIsIlByb3ZpZGVyIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-loading-skeleton/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/react-loading-skeleton/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   SkeletonTheme: () => (/* binding */ e0),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`H:\Programming\проекты\NEST\fullstack-auth\frontend\node_modules\react-loading-skeleton\dist\index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`H:\Programming\проекты\NEST\fullstack-auth\frontend\node_modules\react-loading-skeleton\dist\index.js#SkeletonTheme`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`H:\Programming\проекты\NEST\fullstack-auth\frontend\node_modules\react-loading-skeleton\dist\index.js#default`));


/***/ })

};
;