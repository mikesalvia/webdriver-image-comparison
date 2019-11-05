"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var beforeScreenshot_1 = require("../helpers/beforeScreenshot");
var afterScreenshot_1 = require("../helpers/afterScreenshot");
var screenshots_1 = require("../methods/screenshots");
var images_1 = require("../methods/images");
function saveFullPageScreen(methods, instanceData, folders, tag, saveFullPageOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, addressBarShadowPadding, autoSaveBaseline, formatImageName, savePerInstance, toolBarShadowPadding, disableCSSAnimation, hideScrollBars, fullPageScrollTimeout, colorToBlack, hideElements, removeElements, hideAfterFirstScroll, beforeOptions, enrichedInstanceData, fullPageScreenshotOptions, screenshotsData, fullPageBase64Image, afterOptions;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = saveFullPageOptions.wic, addressBarShadowPadding = _a.addressBarShadowPadding, autoSaveBaseline = _a.autoSaveBaseline, formatImageName = _a.formatImageName, savePerInstance = _a.savePerInstance, toolBarShadowPadding = _a.toolBarShadowPadding;
                    disableCSSAnimation = 'disableCSSAnimation' in saveFullPageOptions.method
                        ? saveFullPageOptions.method.disableCSSAnimation
                        : saveFullPageOptions.wic.disableCSSAnimation;
                    hideScrollBars = 'hideScrollBars' in saveFullPageOptions.method
                        ? saveFullPageOptions.method.hideScrollBars
                        : saveFullPageOptions.wic.hideScrollBars;
                    fullPageScrollTimeout = 'fullPageScrollTimeout' in saveFullPageOptions.method
                        ? saveFullPageOptions.method.fullPageScrollTimeout
                        : saveFullPageOptions.wic.fullPageScrollTimeout;
                    colorToBlack = 'colorToBlack' in saveFullPageOptions.method
                        ? saveFullPageOptions.method.colorToBlack
                        : saveFullPageOptions.wic.colorToBlack;
                    hideElements = saveFullPageOptions.method.hideElements || [];
                    removeElements = saveFullPageOptions.method.removeElements || [];
                    hideAfterFirstScroll = saveFullPageOptions.method.hideAfterFirstScroll || [];
                    beforeOptions = {
                        instanceData: instanceData,
                        addressBarShadowPadding: addressBarShadowPadding,
                        disableCSSAnimation: disableCSSAnimation,
                        hideElements: hideElements,
                        noScrollBars: hideScrollBars,
                        removeElements: removeElements,
                        toolBarShadowPadding: toolBarShadowPadding,
                    };
                    return [4, beforeScreenshot_1.default(methods.executor, beforeOptions, true)];
                case 1:
                    enrichedInstanceData = _b.sent();
                    fullPageScreenshotOptions = {
                        addressBarShadowPadding: enrichedInstanceData.addressBarShadowPadding,
                        devicePixelRatio: enrichedInstanceData.dimensions.window.devicePixelRatio,
                        fullPageScrollTimeout: fullPageScrollTimeout,
                        hideAfterFirstScroll: hideAfterFirstScroll,
                        innerHeight: enrichedInstanceData.dimensions.window.innerHeight,
                        isAndroid: enrichedInstanceData.isAndroid,
                        isAndroidChromeDriverScreenshot: enrichedInstanceData.isAndroidChromeDriverScreenshot,
                        isAndroidNativeWebScreenshot: enrichedInstanceData.isAndroidNativeWebScreenshot,
                        isIos: enrichedInstanceData.isIos,
                        toolBarShadowPadding: enrichedInstanceData.toolBarShadowPadding,
                    };
                    return [4, screenshots_1.getBase64FullPageScreenshotsData(methods.screenShot, methods.executor, fullPageScreenshotOptions)];
                case 2:
                    screenshotsData = _b.sent();
                    return [4, images_1.makeFullPageBase64Image(screenshotsData)];
                case 3:
                    fullPageBase64Image = _b.sent();
                    afterOptions = {
                        actualFolder: folders.actualFolder,
                        base64Image: fullPageBase64Image,
                        disableCSSAnimation: disableCSSAnimation,
                        hideElements: hideElements,
                        hideScrollBars: hideScrollBars,
                        filePath: {
                            autoSaveBaseline: autoSaveBaseline,
                            browserName: enrichedInstanceData.browserName,
                            deviceName: enrichedInstanceData.deviceName,
                            isMobile: enrichedInstanceData.isMobile,
                            savePerInstance: savePerInstance,
                        },
                        fileName: {
                            browserName: enrichedInstanceData.browserName,
                            browserVersion: enrichedInstanceData.browserVersion,
                            deviceName: enrichedInstanceData.deviceName,
                            devicePixelRatio: enrichedInstanceData.dimensions.window.devicePixelRatio,
                            formatImageName: formatImageName,
                            isMobile: enrichedInstanceData.isMobile,
                            isTestInBrowser: enrichedInstanceData.isTestInBrowser,
                            logName: enrichedInstanceData.logName,
                            name: enrichedInstanceData.name,
                            outerHeight: enrichedInstanceData.dimensions.window.outerHeight,
                            outerWidth: enrichedInstanceData.dimensions.window.outerWidth,
                            platformName: enrichedInstanceData.platformName,
                            platformVersion: enrichedInstanceData.platformVersion,
                            screenHeight: enrichedInstanceData.dimensions.window.screenHeight,
                            screenWidth: enrichedInstanceData.dimensions.window.screenWidth,
                            tag: tag,
                        },
                        platformName: instanceData.platformName,
                        removeElements: removeElements,
                        colorToBlack: colorToBlack
                    };
                    return [2, afterScreenshot_1.default(methods.executor, afterOptions)];
            }
        });
    });
}
exports.default = saveFullPageScreen;
//# sourceMappingURL=saveFullPageScreen.js.map