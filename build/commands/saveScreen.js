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
var screenshots_1 = require("../methods/screenshots");
var images_1 = require("../methods/images");
var beforeScreenshot_1 = require("../helpers/beforeScreenshot");
var afterScreenshot_1 = require("../helpers/afterScreenshot");
var rectangles_1 = require("../methods/rectangles");
function saveScreen(methods, instanceData, folders, tag, saveScreenOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, addressBarShadowPadding, formatImageName, savePerInstance, toolBarShadowPadding, disableCSSAnimation, hideScrollBars, colorToBlack, hideElements, removeElements, beforeOptions, enrichedInstanceData, screenshot, screenRectangleOptions, rectangles, croppedBase64Image, afterOptions;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = saveScreenOptions.wic, addressBarShadowPadding = _a.addressBarShadowPadding, formatImageName = _a.formatImageName, savePerInstance = _a.savePerInstance, toolBarShadowPadding = _a.toolBarShadowPadding;
                    disableCSSAnimation = 'disableCSSAnimation' in saveScreenOptions.method
                        ? saveScreenOptions.method.disableCSSAnimation
                        : saveScreenOptions.wic.disableCSSAnimation;
                    hideScrollBars = 'hideScrollBars' in saveScreenOptions.method
                        ? saveScreenOptions.method.hideScrollBars
                        : saveScreenOptions.wic.hideScrollBars;
                    colorToBlack = 'colorToBlack' in saveScreenOptions.method
                        ? saveScreenOptions.method.colorToBlack
                        : saveScreenOptions.wic.colorToBlack;
                    hideElements = saveScreenOptions.method.hideElements || [];
                    removeElements = saveScreenOptions.method.removeElements || [];
                    beforeOptions = {
                        instanceData: instanceData,
                        addressBarShadowPadding: addressBarShadowPadding,
                        disableCSSAnimation: disableCSSAnimation,
                        hideElements: hideElements,
                        noScrollBars: hideScrollBars,
                        removeElements: removeElements,
                        toolBarShadowPadding: toolBarShadowPadding,
                    };
                    return [4, beforeScreenshot_1.default(methods.executor, beforeOptions)];
                case 1:
                    enrichedInstanceData = _b.sent();
                    return [4, screenshots_1.takeBase64Screenshot(methods.screenShot)];
                case 2:
                    screenshot = _b.sent();
                    screenRectangleOptions = {
                        devicePixelRatio: enrichedInstanceData.dimensions.window.devicePixelRatio,
                        innerHeight: enrichedInstanceData.dimensions.window.innerHeight,
                        innerWidth: enrichedInstanceData.dimensions.window.innerWidth,
                        isAndroidChromeDriverScreenshot: enrichedInstanceData.isAndroidChromeDriverScreenshot,
                        isAndroidNativeWebScreenshot: enrichedInstanceData.isAndroidNativeWebScreenshot,
                        isIos: enrichedInstanceData.isIos,
                    };
                    rectangles = rectangles_1.determineScreenRectangles(screenshot, screenRectangleOptions);
                    return [4, images_1.makeCroppedBase64Image(screenshot, rectangles)];
                case 3:
                    croppedBase64Image = _b.sent();
                    afterOptions = {
                        actualFolder: folders.actualFolder,
                        base64Image: croppedBase64Image,
                        disableCSSAnimation: disableCSSAnimation,
                        hideElements: hideElements,
                        hideScrollBars: hideScrollBars,
                        filePath: {
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
exports.default = saveScreen;
//# sourceMappingURL=saveScreen.js.map