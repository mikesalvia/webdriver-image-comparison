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
var scrollToPosition_1 = require("../clientSideScripts/scrollToPosition");
var getDocumentScrollHeight_1 = require("../clientSideScripts/getDocumentScrollHeight");
var getAndroidStatusAddressToolBarHeight_1 = require("../clientSideScripts/getAndroidStatusAddressToolBarHeight");
var getIosStatusAddressToolBarHeight_1 = require("../clientSideScripts/getIosStatusAddressToolBarHeight");
var constants_1 = require("../helpers/constants");
var utils_1 = require("../helpers/utils");
var hideRemoveElements_1 = require("../clientSideScripts/hideRemoveElements");
var hideScrollbars_1 = require("../clientSideScripts/hideScrollbars");
function getBase64FullPageScreenshotsData(takeScreenshot, executor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var addressBarShadowPadding, devicePixelRatio, fullPageScrollTimeout, hideAfterFirstScroll, innerHeight, isAndroid, isAndroidNativeWebScreenshot, isAndroidChromeDriverScreenshot, isIos, toolBarShadowPadding, desktopOptions, nativeMobileOptions, statusAddressBarHeight, androidNativeMobileOptions, chromeDriverOptions, statusAddressBarHeight, iosNativeMobileOptions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    addressBarShadowPadding = options.addressBarShadowPadding, devicePixelRatio = options.devicePixelRatio, fullPageScrollTimeout = options.fullPageScrollTimeout, hideAfterFirstScroll = options.hideAfterFirstScroll, innerHeight = options.innerHeight, isAndroid = options.isAndroid, isAndroidNativeWebScreenshot = options.isAndroidNativeWebScreenshot, isAndroidChromeDriverScreenshot = options.isAndroidChromeDriverScreenshot, isIos = options.isIos, toolBarShadowPadding = options.toolBarShadowPadding;
                    desktopOptions = {
                        devicePixelRatio: devicePixelRatio,
                        fullPageScrollTimeout: fullPageScrollTimeout,
                        hideAfterFirstScroll: hideAfterFirstScroll,
                        innerHeight: innerHeight,
                    };
                    nativeMobileOptions = __assign(__assign({}, desktopOptions), { addressBarShadowPadding: addressBarShadowPadding,
                        toolBarShadowPadding: toolBarShadowPadding });
                    if (!(isAndroid && isAndroidNativeWebScreenshot)) return [3, 2];
                    return [4, executor(getAndroidStatusAddressToolBarHeight_1.default, constants_1.OFFSETS.ANDROID)];
                case 1:
                    statusAddressBarHeight = (_a.sent()).statusAddressBar.height;
                    androidNativeMobileOptions = __assign(__assign({}, nativeMobileOptions), { statusAddressBarHeight: statusAddressBarHeight });
                    return [2, getFullPageScreenshotsDataNativeMobile(takeScreenshot, executor, androidNativeMobileOptions)];
                case 2:
                    if (!(isAndroid && isAndroidChromeDriverScreenshot)) return [3, 3];
                    chromeDriverOptions = { devicePixelRatio: devicePixelRatio, fullPageScrollTimeout: fullPageScrollTimeout, hideAfterFirstScroll: hideAfterFirstScroll, innerHeight: innerHeight };
                    return [2, getFullPageScreenshotsDataAndroidChromeDriver(takeScreenshot, executor, chromeDriverOptions)];
                case 3:
                    if (!isIos) return [3, 5];
                    return [4, executor(getIosStatusAddressToolBarHeight_1.default, constants_1.OFFSETS.IOS)];
                case 4:
                    statusAddressBarHeight = (_a.sent()).statusAddressBar.height;
                    iosNativeMobileOptions = __assign(__assign({}, nativeMobileOptions), { statusAddressBarHeight: statusAddressBarHeight });
                    return [2, getFullPageScreenshotsDataNativeMobile(takeScreenshot, executor, iosNativeMobileOptions)];
                case 5: return [2, getFullPageScreenshotsDataDesktop(takeScreenshot, executor, desktopOptions)];
            }
        });
    });
}
exports.getBase64FullPageScreenshotsData = getBase64FullPageScreenshotsData;
function getFullPageScreenshotsDataNativeMobile(takeScreenshot, executor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var viewportScreenshots, addressBarShadowPadding, devicePixelRatio, fullPageScrollTimeout, hideAfterFirstScroll, innerHeight, statusAddressBarHeight, toolBarShadowPadding, iosViewportHeight, amountOfScrollsArray, scrollHeight, screenshotSizeWidth, i, scrollY_1, screenshot, imageHeight, imageYPosition;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    viewportScreenshots = [];
                    addressBarShadowPadding = options.addressBarShadowPadding, devicePixelRatio = options.devicePixelRatio, fullPageScrollTimeout = options.fullPageScrollTimeout, hideAfterFirstScroll = options.hideAfterFirstScroll, innerHeight = options.innerHeight, statusAddressBarHeight = options.statusAddressBarHeight, toolBarShadowPadding = options.toolBarShadowPadding;
                    iosViewportHeight = innerHeight - addressBarShadowPadding - toolBarShadowPadding;
                    amountOfScrollsArray = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i <= amountOfScrollsArray.length)) return [3, 11];
                    scrollY_1 = iosViewportHeight * i;
                    return [4, executor(scrollToPosition_1.default, scrollY_1)];
                case 2:
                    _a.sent();
                    return [4, executor(hideScrollbars_1.default, true)];
                case 3:
                    _a.sent();
                    return [4, utils_1.waitFor(fullPageScrollTimeout)];
                case 4:
                    _a.sent();
                    if (!(i === 1 && hideAfterFirstScroll.length > 0)) return [3, 6];
                    return [4, executor(hideRemoveElements_1.default, { hide: hideAfterFirstScroll, remove: [] }, true)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4, takeBase64Screenshot(takeScreenshot)];
                case 7:
                    screenshot = _a.sent();
                    screenshotSizeWidth = utils_1.getScreenshotSize(screenshot, devicePixelRatio).width;
                    return [4, executor(getDocumentScrollHeight_1.default)];
                case 8:
                    scrollHeight = _a.sent();
                    if (((scrollY_1 + iosViewportHeight) < scrollHeight)) {
                        amountOfScrollsArray.push(amountOfScrollsArray.length);
                    }
                    imageHeight = amountOfScrollsArray.length === i ? scrollHeight - scrollY_1 : iosViewportHeight;
                    imageYPosition = (amountOfScrollsArray.length === i ? innerHeight - imageHeight : 0) + statusAddressBarHeight + addressBarShadowPadding;
                    viewportScreenshots.push(__assign(__assign({}, utils_1.calculateDprData({
                        canvasWidth: screenshotSizeWidth,
                        canvasYPosition: scrollY_1,
                        imageHeight: imageHeight,
                        imageWidth: screenshotSizeWidth,
                        imageYPosition: imageYPosition,
                    }, devicePixelRatio)), { screenshot: screenshot }));
                    return [4, executor(hideScrollbars_1.default, false)];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    i++;
                    return [3, 1];
                case 11:
                    if (!(hideAfterFirstScroll.length > 0)) return [3, 13];
                    return [4, executor(hideRemoveElements_1.default, { hide: hideAfterFirstScroll, remove: [] }, false)];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13: return [2, __assign(__assign({}, utils_1.calculateDprData({
                        fullPageHeight: scrollHeight - addressBarShadowPadding - toolBarShadowPadding,
                        fullPageWidth: screenshotSizeWidth,
                    }, devicePixelRatio)), { data: viewportScreenshots })];
            }
        });
    });
}
exports.getFullPageScreenshotsDataNativeMobile = getFullPageScreenshotsDataNativeMobile;
function getFullPageScreenshotsDataAndroidChromeDriver(takeScreenshot, executor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var viewportScreenshots, devicePixelRatio, fullPageScrollTimeout, hideAfterFirstScroll, innerHeight, amountOfScrollsArray, scrollHeight, screenshotSize, i, scrollY_2, screenshot, imageHeight, imageYPosition;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    viewportScreenshots = [];
                    devicePixelRatio = options.devicePixelRatio, fullPageScrollTimeout = options.fullPageScrollTimeout, hideAfterFirstScroll = options.hideAfterFirstScroll, innerHeight = options.innerHeight;
                    amountOfScrollsArray = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i <= amountOfScrollsArray.length)) return [3, 11];
                    scrollY_2 = innerHeight * i;
                    return [4, executor(scrollToPosition_1.default, scrollY_2)];
                case 2:
                    _a.sent();
                    return [4, executor(hideScrollbars_1.default, true)];
                case 3:
                    _a.sent();
                    return [4, utils_1.waitFor(fullPageScrollTimeout)];
                case 4:
                    _a.sent();
                    if (!(i === 1 && hideAfterFirstScroll.length > 0)) return [3, 6];
                    return [4, executor(hideRemoveElements_1.default, { hide: hideAfterFirstScroll, remove: [] }, true)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4, takeBase64Screenshot(takeScreenshot)];
                case 7:
                    screenshot = _a.sent();
                    screenshotSize = utils_1.getScreenshotSize(screenshot, devicePixelRatio);
                    return [4, executor(getDocumentScrollHeight_1.default)];
                case 8:
                    scrollHeight = _a.sent();
                    if ((scrollY_2 + innerHeight) < scrollHeight) {
                        amountOfScrollsArray.push(amountOfScrollsArray.length);
                    }
                    imageHeight = amountOfScrollsArray.length === i ? scrollHeight - (innerHeight * viewportScreenshots.length) : innerHeight;
                    imageYPosition = (amountOfScrollsArray.length === i && amountOfScrollsArray.length !== 0) ? innerHeight - imageHeight : 0;
                    viewportScreenshots.push(__assign(__assign({}, utils_1.calculateDprData({
                        canvasWidth: screenshotSize.width,
                        canvasYPosition: scrollY_2,
                        imageHeight: imageHeight,
                        imageWidth: screenshotSize.width,
                        imageYPosition: imageYPosition,
                    }, devicePixelRatio)), { screenshot: screenshot }));
                    return [4, executor(hideScrollbars_1.default, false)];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    i++;
                    return [3, 1];
                case 11:
                    if (!(hideAfterFirstScroll.length > 0)) return [3, 13];
                    return [4, executor(hideRemoveElements_1.default, { hide: hideAfterFirstScroll, remove: [] }, false)];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13: return [2, __assign(__assign({}, utils_1.calculateDprData({
                        fullPageHeight: scrollHeight,
                        fullPageWidth: screenshotSize.width,
                    }, devicePixelRatio)), { data: viewportScreenshots })];
            }
        });
    });
}
exports.getFullPageScreenshotsDataAndroidChromeDriver = getFullPageScreenshotsDataAndroidChromeDriver;
function getFullPageScreenshotsDataDesktop(takeScreenshot, executor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var viewportScreenshots, devicePixelRatio, fullPageScrollTimeout, hideAfterFirstScroll, innerHeight, actualInnerHeight, amountOfScrollsArray, scrollHeight, screenshotSize, i, scrollY_3, screenshot, imageHeight, imageYPosition;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    viewportScreenshots = [];
                    devicePixelRatio = options.devicePixelRatio, fullPageScrollTimeout = options.fullPageScrollTimeout, hideAfterFirstScroll = options.hideAfterFirstScroll, innerHeight = options.innerHeight;
                    actualInnerHeight = innerHeight;
                    amountOfScrollsArray = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i <= amountOfScrollsArray.length)) return [3, 9];
                    scrollY_3 = actualInnerHeight * i;
                    return [4, executor(scrollToPosition_1.default, scrollY_3)];
                case 2:
                    _a.sent();
                    return [4, utils_1.waitFor(fullPageScrollTimeout)];
                case 3:
                    _a.sent();
                    if (!(i === 1 && hideAfterFirstScroll.length > 0)) return [3, 5];
                    return [4, executor(hideRemoveElements_1.default, { hide: hideAfterFirstScroll, remove: [] }, true)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [4, takeBase64Screenshot(takeScreenshot)];
                case 6:
                    screenshot = _a.sent();
                    screenshotSize = utils_1.getScreenshotSize(screenshot, devicePixelRatio);
                    if (i === 0 && screenshotSize.height !== actualInnerHeight) {
                        if (Math.round(screenshotSize.height) === actualInnerHeight) {
                            actualInnerHeight = screenshotSize.height;
                        }
                    }
                    return [4, executor(getDocumentScrollHeight_1.default)];
                case 7:
                    scrollHeight = _a.sent();
                    if (((scrollY_3 + actualInnerHeight) < scrollHeight && screenshotSize.height === actualInnerHeight)) {
                        amountOfScrollsArray.push(amountOfScrollsArray.length);
                    }
                    imageHeight = amountOfScrollsArray.length === i
                        ? scrollHeight - (actualInnerHeight * viewportScreenshots.length)
                        : screenshotSize.height;
                    imageYPosition = (amountOfScrollsArray.length === i && amountOfScrollsArray.length !== 0) ? actualInnerHeight - imageHeight : 0;
                    viewportScreenshots.push(__assign(__assign({}, utils_1.calculateDprData({
                        canvasWidth: screenshotSize.width,
                        canvasYPosition: scrollY_3,
                        imageHeight: imageHeight,
                        imageWidth: screenshotSize.width,
                        imageYPosition: imageYPosition,
                    }, devicePixelRatio)), { screenshot: screenshot }));
                    _a.label = 8;
                case 8:
                    i++;
                    return [3, 1];
                case 9:
                    if (!(hideAfterFirstScroll.length > 0)) return [3, 11];
                    return [4, executor(hideRemoveElements_1.default, { hide: hideAfterFirstScroll, remove: [] }, false)];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [2, __assign(__assign({}, utils_1.calculateDprData({
                        fullPageHeight: scrollHeight,
                        fullPageWidth: screenshotSize.width,
                    }, devicePixelRatio)), { data: viewportScreenshots })];
            }
        });
    });
}
exports.getFullPageScreenshotsDataDesktop = getFullPageScreenshotsDataDesktop;
function takeBase64Screenshot(takeScreenshot) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, takeScreenshot()];
        });
    });
}
exports.takeBase64Screenshot = takeBase64Screenshot;
//# sourceMappingURL=screenshots.js.map