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
var getElementPositionTopWindow_1 = require("../clientSideScripts/getElementPositionTopWindow");
var getElementPositionTopDom_1 = require("../clientSideScripts/getElementPositionTopDom");
var getElementPositionTopScreenNativeMobile_1 = require("../clientSideScripts/getElementPositionTopScreenNativeMobile");
var constants_1 = require("../helpers/constants");
var getAndroidStatusAddressToolBarHeight_1 = require("../clientSideScripts/getAndroidStatusAddressToolBarHeight");
var getIosStatusAddressToolBarHeight_1 = require("../clientSideScripts/getIosStatusAddressToolBarHeight");
function getElementPositionAndroid(executor, isNativeWebScreenshot, element) {
    return __awaiter(this, void 0, void 0, function () {
        var height;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isNativeWebScreenshot) return [3, 2];
                    return [4, executor(getAndroidStatusAddressToolBarHeight_1.default, constants_1.OFFSETS.ANDROID)];
                case 1:
                    height = (_a.sent()).statusAddressBar.height;
                    return [2, executor(getElementPositionTopScreenNativeMobile_1.getElementPositionTopScreenNativeMobile, height, element)];
                case 2: return [2, executor(getElementPositionTopWindow_1.default, element)];
            }
        });
    });
}
exports.getElementPositionAndroid = getElementPositionAndroid;
function getElementPositionDesktop(executor, innerHeight, screenshotHeight, element) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (screenshotHeight > innerHeight) {
                return [2, executor(getElementPositionTopDom_1.default, element)];
            }
            return [2, executor(getElementPositionTopWindow_1.default, element)];
        });
    });
}
exports.getElementPositionDesktop = getElementPositionDesktop;
function getElementPositionIos(executor, element) {
    return __awaiter(this, void 0, void 0, function () {
        var height;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, executor(getIosStatusAddressToolBarHeight_1.default, constants_1.OFFSETS.IOS)];
                case 1:
                    height = (_a.sent()).statusAddressBar.height;
                    return [2, executor(getElementPositionTopScreenNativeMobile_1.getElementPositionTopScreenNativeMobile, height, element)];
            }
        });
    });
}
exports.getElementPositionIos = getElementPositionIos;
//# sourceMappingURL=elementPosition.js.map