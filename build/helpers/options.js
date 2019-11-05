"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function defaultOptions(options) {
    return {
        addressBarShadowPadding: options.addressBarShadowPadding || constants_1.DEFAULT_SHADOW.ADDRESS_BAR,
        autoSaveBaseline: options.autoSaveBaseline || false,
        clearFolder: options.clearRuntimeFolder || false,
        debug: options.debug || false,
        formatImageName: options.formatImageName || constants_1.DEFAULT_FORMAT_STRING,
        savePerInstance: options.savePerInstance || false,
        toolBarShadowPadding: options.toolBarShadowPadding || constants_1.DEFAULT_SHADOW.TOOL_BAR,
        disableCSSAnimation: options.disableCSSAnimation || false,
        colorToBlack: options.colorToBlack || false,
        fullPageScrollTimeout: options.fullPageScrollTimeout || constants_1.FULL_PAGE_SCROLL_TIMEOUT,
        hideScrollBars: options.hasOwnProperty('hideScrollBars') ? options.hideScrollBars : true,
        compareOptions: {
            blockOutStatusBar: !!options.blockOutStatusBar,
            blockOutToolBar: !!options.blockOutToolBar,
            ignoreAlpha: options.ignoreAlpha || false,
            ignoreAntialiasing: options.ignoreAntialiasing || false,
            ignoreColors: options.ignoreColors || false,
            ignoreLess: options.ignoreLess || false,
            ignoreNothing: options.ignoreNothing || false,
            rawMisMatchPercentage: options.rawMisMatchPercentage || false,
            returnAllCompareData: options.returnAllCompareData || false,
            saveAboveTolerance: options.saveAboveTolerance || 0,
        },
    };
}
exports.defaultOptions = defaultOptions;
function screenMethodCompareOptions(options) {
    return __assign(__assign(__assign({}, ('blockOutStatusBar' in options ? { blockOutStatusBar: options.blockOutStatusBar } : {})), ('blockOutToolBar' in options ? { blockOutToolBar: options.blockOutToolBar } : {})), methodCompareOptions(options));
}
exports.screenMethodCompareOptions = screenMethodCompareOptions;
function methodCompareOptions(options) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, ('blockOut' in options ? { blockOut: options.blockOut } : {})), ('ignoreAlpha' in options ? { ignoreAlpha: options.ignoreAlpha } : {})), ('ignoreAntialiasing' in options ? { ignoreAntialiasing: options.ignoreAntialiasing } : {})), ('ignoreColors' in options ? { ignoreColors: options.ignoreColors } : {})), ('ignoreLess' in options ? { ignoreLess: options.ignoreLess } : {})), ('ignoreNothing' in options ? { ignoreNothing: options.ignoreNothing } : {})), ('rawMisMatchPercentage' in options ? { rawMisMatchPercentage: options.rawMisMatchPercentage } : {})), ('returnAllCompareData' in options ? { returnAllCompareData: options.returnAllCompareData } : {})), ('saveAboveTolerance' in options ? { saveAboveTolerance: options.saveAboveTolerance } : {}));
}
exports.methodCompareOptions = methodCompareOptions;
//# sourceMappingURL=options.js.map