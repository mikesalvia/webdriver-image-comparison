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
var utils_1 = require("../helpers/utils");
var elementPosition_1 = require("./elementPosition");
var constants_1 = require("../helpers/constants");
var getIosStatusAddressToolBarHeight_1 = require("../clientSideScripts/getIosStatusAddressToolBarHeight");
var getAndroidStatusAddressToolBarHeight_1 = require("../clientSideScripts/getAndroidStatusAddressToolBarHeight");
function determineElementRectangles(executor, screenshot, options, element) {
    return __awaiter(this, void 0, void 0, function () {
        var devicePixelRatio, innerHeight, isAndroid, isAndroidNativeWebScreenshot, isIos, height, elementPosition;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    devicePixelRatio = options.devicePixelRatio, innerHeight = options.innerHeight, isAndroid = options.isAndroid, isAndroidNativeWebScreenshot = options.isAndroidNativeWebScreenshot, isIos = options.isIos;
                    height = utils_1.getScreenshotSize(screenshot, devicePixelRatio).height;
                    if (!isIos) return [3, 2];
                    return [4, elementPosition_1.getElementPositionIos(executor, element)];
                case 1:
                    elementPosition = _a.sent();
                    return [3, 6];
                case 2:
                    if (!isAndroid) return [3, 4];
                    return [4, elementPosition_1.getElementPositionAndroid(executor, isAndroidNativeWebScreenshot, element)];
                case 3:
                    elementPosition = _a.sent();
                    return [3, 6];
                case 4: return [4, elementPosition_1.getElementPositionDesktop(executor, innerHeight, height, element)];
                case 5:
                    elementPosition = _a.sent();
                    _a.label = 6;
                case 6: return [2, utils_1.calculateDprData({
                        height: elementPosition.height,
                        width: elementPosition.width,
                        x: elementPosition.x,
                        y: elementPosition.y,
                    }, devicePixelRatio)];
            }
        });
    });
}
exports.determineElementRectangles = determineElementRectangles;
function determineScreenRectangles(screenshot, options) {
    var devicePixelRatio = options.devicePixelRatio, innerHeight = options.innerHeight, innerWidth = options.innerWidth, isIos = options.isIos, isAndroidChromeDriverScreenshot = options.isAndroidChromeDriverScreenshot, isAndroidNativeWebScreenshot = options.isAndroidNativeWebScreenshot;
    var _a = utils_1.getScreenshotSize(screenshot, devicePixelRatio), height = _a.height, width = _a.width;
    var screenshotWidth = isAndroidChromeDriverScreenshot ? width : innerWidth;
    return utils_1.calculateDprData({
        height: isIos || isAndroidNativeWebScreenshot ? height : innerHeight,
        width: screenshotWidth,
        x: 0,
        y: 0
    }, devicePixelRatio);
}
exports.determineScreenRectangles = determineScreenRectangles;
function determineStatusAddressToolBarRectangles(executor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var blockOutStatusBar, blockOutToolBar, isMobile, isViewPortScreenshot, platformName, isAndroidNativeWebScreenshot, rectangles, _a, statusAddressBar, toolBar;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    blockOutStatusBar = options.blockOutStatusBar, blockOutToolBar = options.blockOutToolBar, isMobile = options.isMobile, isViewPortScreenshot = options.isViewPortScreenshot, platformName = options.platformName, isAndroidNativeWebScreenshot = options.isAndroidNativeWebScreenshot;
                    rectangles = [];
                    if (!(isViewPortScreenshot && isMobile &&
                        (utils_1.checkAndroidNativeWebScreenshot(platformName, isAndroidNativeWebScreenshot) || utils_1.checkIsIos(platformName)))) return [3, 2];
                    return [4, (utils_1.checkIsIos(platformName) ?
                            executor(getIosStatusAddressToolBarHeight_1.default, constants_1.OFFSETS.IOS) :
                            executor(getAndroidStatusAddressToolBarHeight_1.default, constants_1.OFFSETS.ANDROID))];
                case 1:
                    _a = _b.sent(), statusAddressBar = _a.statusAddressBar, toolBar = _a.toolBar;
                    if (blockOutStatusBar) {
                        rectangles.push(statusAddressBar);
                    }
                    if (blockOutToolBar) {
                        rectangles.push(toolBar);
                    }
                    _b.label = 2;
                case 2: return [2, rectangles];
            }
        });
    });
}
exports.determineStatusAddressToolBarRectangles = determineStatusAddressToolBarRectangles;
//# sourceMappingURL=rectangles.js.map