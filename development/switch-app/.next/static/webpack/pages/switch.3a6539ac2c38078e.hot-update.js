"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/switch",{

/***/ "../../components/switch/dist/index.esm.js":
/*!*************************************************!*\
  !*** ../../components/switch/dist/index.esm.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeadlessSwitch\": function() { return /* binding */ HeadlessSwitch; },\n/* harmony export */   \"ReuseSwitch\": function() { return /* binding */ ReuseSwitch; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ \"../../node_modules/tailwind-merge/dist/tailwind-merge.mjs\");\nvar _s = $RefreshSig$();\n\n\nconst HeadlessSwitch = (param)=>{\n    let { initialChecked =false , onChange , containerClassName =\"\" , trackClassName =\"\" , thumbClassName =\"\"  } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialChecked);\n    const toggleSwitch = ()=>{\n        const newChecked = !isChecked;\n        setIsChecked(newChecked);\n        if (onChange) {\n            onChange(newChecked);\n        }\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: typeof containerClassName === \"string\" ? containerClassName : \"\",\n        onClick: toggleSwitch,\n        role: \"button\",\n        style: typeof containerClassName === \"object\" ? containerClassName : {}\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"\".concat(typeof trackClassName === \"string\" ? trackClassName : \"\", \" \").concat(isChecked ? \"justify-end\" : \"justify-start\"),\n        style: typeof trackClassName === \"object\" ? trackClassName : {}\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: typeof thumbClassName === \"string\" ? thumbClassName : \"\",\n        style: typeof thumbClassName === \"object\" ? thumbClassName : {}\n    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        type: \"checkbox\",\n        id: \"toggle\",\n        className: \"switch-checkbox sr-only\",\n        checked: isChecked,\n        onChange: ()=>{}\n    })));\n};\n_s(HeadlessSwitch, \"FGc/CioBeHQC6P1znwC5maNeoVU=\");\n_c = HeadlessSwitch;\nconst ReuseSwitch = (param)=>{\n    let { isSwitch , onChange , containerClassName , trackClassName , thumbClassName  } = param;\n    const defaultContainerClass = \"flex w-10 h-5\";\n    const defaultTrackClass = \"flex switch-track bg-gray-400 dark:bg-gray-700 rounded-full\";\n    const defaultThumbClass = \"h-3 w-3 rounded-full bg-white m-1\";\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeadlessSwitch, {\n        initialChecked: isSwitch,\n        onChange: onChange,\n        containerClassName: typeof containerClassName === \"string\" ? (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(defaultContainerClass, containerClassName) : containerClassName,\n        trackClassName: typeof trackClassName === \"string\" ? (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(defaultTrackClass, trackClassName) : trackClassName,\n        thumbClassName: typeof thumbClassName === \"string\" ? (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(defaultThumbClass, thumbClassName) : thumbClassName\n    });\n};\n_c1 = ReuseSwitch;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"HeadlessSwitch\");\n$RefreshReg$(_c1, \"ReuseSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vY29tcG9uZW50cy9zd2l0Y2gvZGlzdC9pbmRleC5lc20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ0M7QUFFekMsTUFBTUcsaUJBQWlCLFNBQThHO1FBQTdHLEVBQUVDLGdCQUFpQixLQUFLLEdBQUVDLFNBQVEsRUFBRUMsb0JBQXFCLEdBQUUsRUFBRUMsZ0JBQWlCLEdBQUUsRUFBRUMsZ0JBQWlCLEdBQUUsRUFBRzs7SUFDNUgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDRztJQUMzQyxNQUFNTyxlQUFlLElBQU07UUFDdkIsTUFBTUMsYUFBYSxDQUFDSDtRQUNwQkMsYUFBYUU7UUFDYixJQUFJUCxVQUFVO1lBQ1ZBLFNBQVNPO1FBQ2IsQ0FBQztJQUNMO0lBQ0EscUJBQVFaLDBEQUFtQixDQUFDLE9BQU87UUFBRWMsV0FBVyxPQUFPUix1QkFBdUIsV0FBV0EscUJBQXFCLEVBQUU7UUFBRVMsU0FBU0o7UUFBY0ssTUFBTTtRQUFVQyxPQUFPLE9BQU9YLHVCQUF1QixXQUFXQSxxQkFBcUIsQ0FBQyxDQUFDO0lBQUMsaUJBQzdOTiwwREFBbUIsQ0FBQyxPQUFPO1FBQUVjLFdBQVcsR0FBK0RMLE9BQTVELE9BQU9GLG1CQUFtQixXQUFXQSxpQkFBaUIsRUFBRSxFQUFDLEtBQStDLE9BQTVDRSxZQUFZLGdCQUFnQixlQUFlO1FBQUlRLE9BQU8sT0FBT1YsbUJBQW1CLFdBQVdBLGlCQUFpQixDQUFDLENBQUM7SUFBQyxpQkFDbE5QLDBEQUFtQixDQUFDLE9BQU87UUFBRWMsV0FBVyxPQUFPTixtQkFBbUIsV0FBV0EsaUJBQWlCLEVBQUU7UUFBRVMsT0FBTyxPQUFPVCxtQkFBbUIsV0FBV0EsaUJBQWlCLENBQUMsQ0FBQztJQUFDLGtCQUNsS1IsMERBQW1CLENBQUMsU0FBUztRQUFFa0IsTUFBTTtRQUFZQyxJQUFJO1FBQVVMLFdBQVc7UUFBMkJNLFNBQVNYO1FBQVdKLFVBQVUsSUFBTSxDQUFFO0lBQUU7QUFDeko7R0FiTUY7S0FBQUE7QUFlTixNQUFNa0IsY0FBYyxTQUFpRjtRQUFoRixFQUFFQyxTQUFRLEVBQUVqQixTQUFRLEVBQUVDLG1CQUFrQixFQUFFQyxlQUFjLEVBQUVDLGVBQWMsRUFBRztJQUM1RixNQUFNZSx3QkFBd0I7SUFDOUIsTUFBTUMsb0JBQW9CO0lBQzFCLE1BQU1DLG9CQUFvQjtJQUMxQixxQkFBUXpCLDBEQUFtQixDQUFDRyxnQkFBZ0I7UUFBRUMsZ0JBQWdCa0I7UUFBVWpCLFVBQVVBO1FBQVVDLG9CQUFvQixPQUFPQSx1QkFBdUIsV0FDcElKLHVEQUFPQSxDQUFDcUIsdUJBQXVCakIsc0JBQy9CQSxrQkFBa0I7UUFBRUMsZ0JBQWdCLE9BQU9BLG1CQUFtQixXQUM5REwsdURBQU9BLENBQUNzQixtQkFBbUJqQixrQkFDM0JBLGNBQWM7UUFBRUMsZ0JBQWdCLE9BQU9BLG1CQUFtQixXQUMxRE4sdURBQU9BLENBQUN1QixtQkFBbUJqQixrQkFDM0JBLGNBQWM7SUFBQztBQUM3QjtNQVhNYTtBQWFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vLi4vY29tcG9uZW50cy9zd2l0Y2gvZGlzdC9pbmRleC5lc20uanM/OTMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSAndGFpbHdpbmQtbWVyZ2UnO1xuXG5jb25zdCBIZWFkbGVzc1N3aXRjaCA9ICh7IGluaXRpYWxDaGVja2VkID0gZmFsc2UsIG9uQ2hhbmdlLCBjb250YWluZXJDbGFzc05hbWUgPSBcIlwiLCB0cmFja0NsYXNzTmFtZSA9IFwiXCIsIHRodW1iQ2xhc3NOYW1lID0gXCJcIiwgfSkgPT4ge1xuICAgIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShpbml0aWFsQ2hlY2tlZCk7XG4gICAgY29uc3QgdG9nZ2xlU3dpdGNoID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDaGVja2VkID0gIWlzQ2hlY2tlZDtcbiAgICAgICAgc2V0SXNDaGVja2VkKG5ld0NoZWNrZWQpO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0NoZWNrZWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHR5cGVvZiBjb250YWluZXJDbGFzc05hbWUgPT09IFwic3RyaW5nXCIgPyBjb250YWluZXJDbGFzc05hbWUgOiBcIlwiLCBvbkNsaWNrOiB0b2dnbGVTd2l0Y2gsIHJvbGU6IFwiYnV0dG9uXCIsIHN0eWxlOiB0eXBlb2YgY29udGFpbmVyQ2xhc3NOYW1lID09PSBcIm9iamVjdFwiID8gY29udGFpbmVyQ2xhc3NOYW1lIDoge30gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYCR7dHlwZW9mIHRyYWNrQ2xhc3NOYW1lID09PSBcInN0cmluZ1wiID8gdHJhY2tDbGFzc05hbWUgOiBcIlwifSAke2lzQ2hlY2tlZCA/IFwianVzdGlmeS1lbmRcIiA6IFwianVzdGlmeS1zdGFydFwifWAsIHN0eWxlOiB0eXBlb2YgdHJhY2tDbGFzc05hbWUgPT09IFwib2JqZWN0XCIgPyB0cmFja0NsYXNzTmFtZSA6IHt9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB0eXBlb2YgdGh1bWJDbGFzc05hbWUgPT09IFwic3RyaW5nXCIgPyB0aHVtYkNsYXNzTmFtZSA6IFwiXCIsIHN0eWxlOiB0eXBlb2YgdGh1bWJDbGFzc05hbWUgPT09IFwib2JqZWN0XCIgPyB0aHVtYkNsYXNzTmFtZSA6IHt9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJ0b2dnbGVcIiwgY2xhc3NOYW1lOiBcInN3aXRjaC1jaGVja2JveCBzci1vbmx5XCIsIGNoZWNrZWQ6IGlzQ2hlY2tlZCwgb25DaGFuZ2U6ICgpID0+IHsgfSB9KSkpKTtcbn07XG5cbmNvbnN0IFJldXNlU3dpdGNoID0gKHsgaXNTd2l0Y2gsIG9uQ2hhbmdlLCBjb250YWluZXJDbGFzc05hbWUsIHRyYWNrQ2xhc3NOYW1lLCB0aHVtYkNsYXNzTmFtZSwgfSkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRDb250YWluZXJDbGFzcyA9IFwiZmxleCB3LTEwIGgtNVwiO1xuICAgIGNvbnN0IGRlZmF1bHRUcmFja0NsYXNzID0gXCJmbGV4IHN3aXRjaC10cmFjayBiZy1ncmF5LTQwMCBkYXJrOmJnLWdyYXktNzAwIHJvdW5kZWQtZnVsbFwiO1xuICAgIGNvbnN0IGRlZmF1bHRUaHVtYkNsYXNzID0gXCJoLTMgdy0zIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBtLTFcIjtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGxlc3NTd2l0Y2gsIHsgaW5pdGlhbENoZWNrZWQ6IGlzU3dpdGNoLCBvbkNoYW5nZTogb25DaGFuZ2UsIGNvbnRhaW5lckNsYXNzTmFtZTogdHlwZW9mIGNvbnRhaW5lckNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyB0d01lcmdlKGRlZmF1bHRDb250YWluZXJDbGFzcywgY29udGFpbmVyQ2xhc3NOYW1lKVxuICAgICAgICAgICAgOiBjb250YWluZXJDbGFzc05hbWUsIHRyYWNrQ2xhc3NOYW1lOiB0eXBlb2YgdHJhY2tDbGFzc05hbWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gdHdNZXJnZShkZWZhdWx0VHJhY2tDbGFzcywgdHJhY2tDbGFzc05hbWUpXG4gICAgICAgICAgICA6IHRyYWNrQ2xhc3NOYW1lLCB0aHVtYkNsYXNzTmFtZTogdHlwZW9mIHRodW1iQ2xhc3NOYW1lID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IHR3TWVyZ2UoZGVmYXVsdFRodW1iQ2xhc3MsIHRodW1iQ2xhc3NOYW1lKVxuICAgICAgICAgICAgOiB0aHVtYkNsYXNzTmFtZSB9KSk7XG59O1xuXG5leHBvcnQgeyBIZWFkbGVzc1N3aXRjaCwgUmV1c2VTd2l0Y2ggfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidHdNZXJnZSIsIkhlYWRsZXNzU3dpdGNoIiwiaW5pdGlhbENoZWNrZWQiLCJvbkNoYW5nZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsInRyYWNrQ2xhc3NOYW1lIiwidGh1bWJDbGFzc05hbWUiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJ0b2dnbGVTd2l0Y2giLCJuZXdDaGVja2VkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJyb2xlIiwic3R5bGUiLCJ0eXBlIiwiaWQiLCJjaGVja2VkIiwiUmV1c2VTd2l0Y2giLCJpc1N3aXRjaCIsImRlZmF1bHRDb250YWluZXJDbGFzcyIsImRlZmF1bHRUcmFja0NsYXNzIiwiZGVmYXVsdFRodW1iQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../components/switch/dist/index.esm.js\n"));

/***/ })

});