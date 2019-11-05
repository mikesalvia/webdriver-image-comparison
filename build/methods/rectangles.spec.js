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
var rectangles_1 = require("./rectangles");
var mocks_1 = require("../mocks/mocks");
describe('rectangles', function () {
    describe('determineElementRectangles', function () {
        it('should determine them for iOS', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isAndroid: false,
                            devicePixelRatio: 2,
                            isAndroidNativeWebScreenshot: false,
                            innerHeight: 678,
                            isIos: true,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            statusAddressBar: {
                                height: 94,
                                width: 375,
                                x: 0,
                                y: 0,
                            },
                            toolBar: {
                                height: 5,
                                width: 135,
                                x: 120,
                                y: 799,
                            },
                        })
                            .mockResolvedValueOnce({
                            height: 120,
                            width: 120,
                            x: 100,
                            y: 10,
                        });
                        _a = expect;
                        return [4, rectangles_1.determineElementRectangles(MOCKED_EXECUTOR, mocks_1.IMAGE_STRING, options, 'element')];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine them for Android Native webscreenshot', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isAndroid: true,
                            devicePixelRatio: 3,
                            isAndroidNativeWebScreenshot: true,
                            innerHeight: 678,
                            isIos: false,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            statusAddressBar: {
                                height: 20,
                                width: 375,
                                x: 0,
                                y: 0,
                            },
                            toolBar: {
                                height: 5,
                                width: 135,
                                x: 120,
                                y: 799,
                            },
                        })
                            .mockResolvedValueOnce({
                            height: 120,
                            width: 120,
                            x: 100,
                            y: 10,
                        });
                        _a = expect;
                        return [4, rectangles_1.determineElementRectangles(MOCKED_EXECUTOR, mocks_1.IMAGE_STRING, options, 'element')];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine them for Android ChromeDriver', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isAndroid: true,
                            devicePixelRatio: 1,
                            isAndroidNativeWebScreenshot: false,
                            innerHeight: 678,
                            isIos: false,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            height: 20,
                            width: 375,
                            x: 0,
                            y: 0,
                        });
                        _a = expect;
                        return [4, rectangles_1.determineElementRectangles(MOCKED_EXECUTOR, mocks_1.IMAGE_STRING, options, 'element')];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine them for a desktop browser', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isAndroid: false,
                            devicePixelRatio: 2,
                            isAndroidNativeWebScreenshot: false,
                            innerHeight: 500,
                            isIos: false,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            height: 20,
                            width: 375,
                            x: 12,
                            y: 34,
                        });
                        _a = expect;
                        return [4, rectangles_1.determineElementRectangles(MOCKED_EXECUTOR, mocks_1.IMAGE_STRING, options, 'element')];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
    });
    describe('determineScreenRectangles', function () {
        it('should determine them for iOS', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            innerHeight: 553,
                            innerWidth: 375,
                            isAndroidNativeWebScreenshot: false,
                            isAndroidChromeDriverScreenshot: false,
                            isIos: true,
                            devicePixelRatio: 2,
                        };
                        _a = expect;
                        return [4, rectangles_1.determineScreenRectangles(mocks_1.IMAGE_STRING, options)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine them for Android ChromeDriver', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            innerHeight: 553,
                            innerWidth: 375,
                            isAndroidNativeWebScreenshot: false,
                            isAndroidChromeDriverScreenshot: true,
                            isIos: false,
                            devicePixelRatio: 2,
                        };
                        _a = expect;
                        return [4, rectangles_1.determineScreenRectangles(mocks_1.IMAGE_STRING, options)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine them for Android Native webscreenshot', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            innerHeight: 553,
                            innerWidth: 375,
                            isAndroidNativeWebScreenshot: true,
                            isAndroidChromeDriverScreenshot: false,
                            isIos: false,
                            devicePixelRatio: 2,
                        };
                        _a = expect;
                        return [4, rectangles_1.determineScreenRectangles(mocks_1.IMAGE_STRING, options)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
    });
    describe('determineStatusAddressToolBarRectangles', function () {
        it('should determine the rectangles for the iOS with a status and toolbar blockout', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isMobile: true,
                            isViewPortScreenshot: true,
                            platformName: 'iOS',
                            isAndroidNativeWebScreenshot: false,
                            blockOutStatusBar: true,
                            blockOutToolBar: true,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            statusAddressBar: {
                                height: 94,
                                width: 375,
                                x: 0,
                                y: 0,
                            },
                            toolBar: {
                                height: 5,
                                width: 135,
                                x: 120,
                                y: 799,
                            },
                        });
                        _a = expect;
                        return [4, rectangles_1.determineStatusAddressToolBarRectangles(MOCKED_EXECUTOR, options)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine the rectangles for the iOS without a status and toolbar blockout', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isMobile: true,
                            isViewPortScreenshot: true,
                            platformName: 'iOS',
                            isAndroidNativeWebScreenshot: false,
                            blockOutStatusBar: false,
                            blockOutToolBar: false,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            statusAddressBar: {
                                height: 94,
                                width: 375,
                                x: 0,
                                y: 0,
                            },
                            toolBar: {
                                height: 5,
                                width: 135,
                                x: 0,
                                y: 799,
                            },
                        });
                        _a = expect;
                        return [4, rectangles_1.determineStatusAddressToolBarRectangles(MOCKED_EXECUTOR, options)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine the rectangles for Android with a status and toolbar blockout', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isMobile: true,
                            isViewPortScreenshot: true,
                            platformName: 'Android',
                            isAndroidNativeWebScreenshot: true,
                            blockOutStatusBar: true,
                            blockOutToolBar: true,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            statusAddressBar: {
                                height: 40,
                                width: 320,
                                x: 0,
                                y: 0,
                            },
                            toolBar: {
                                height: 100,
                                width: 320,
                                x: 0,
                                y: 600,
                            },
                        });
                        _a = expect;
                        return [4, rectangles_1.determineStatusAddressToolBarRectangles(MOCKED_EXECUTOR, options)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
        it('should determine the rectangles that there are no rectangles for this device', function () { return __awaiter(void 0, void 0, void 0, function () {
            var options, MOCKED_EXECUTOR, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            isMobile: true,
                            isViewPortScreenshot: false,
                            platformName: 'Android',
                            isAndroidNativeWebScreenshot: false,
                            blockOutStatusBar: false,
                            blockOutToolBar: false,
                        };
                        MOCKED_EXECUTOR = jest.fn()
                            .mockResolvedValueOnce({
                            statusAddressBar: {
                                height: 40,
                                width: 320,
                                x: 0,
                                y: 0,
                            },
                            toolBar: {
                                height: 100,
                                width: 320,
                                x: 0,
                                y: 600,
                            },
                        });
                        _a = expect;
                        return [4, rectangles_1.determineStatusAddressToolBarRectangles(MOCKED_EXECUTOR, options)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toMatchSnapshot();
                        return [2];
                }
            });
        }); });
    });
});
//# sourceMappingURL=rectangles.spec.js.map