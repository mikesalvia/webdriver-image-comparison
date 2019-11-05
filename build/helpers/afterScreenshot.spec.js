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
var afterScreenshot_1 = require("./afterScreenshot");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
describe('afterScreenshot', function () {
    var folder = path_1.join(process.cwd(), '/.tmp/afterScreenshot');
    afterEach(function () { return fs_extra_1.removeSync(folder); });
    it('should be able to return the ScreenshotOutput with default options', function () { return __awaiter(void 0, void 0, void 0, function () {
        var MOCKED_EXECUTOR, options, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    MOCKED_EXECUTOR = jest.fn().mockReturnValue('');
                    options = {
                        actualFolder: folder,
                        base64Image: 'string',
                        disableCSSAnimation: false,
                        hideScrollBars: true,
                        filePath: {
                            browserName: 'browserName',
                            deviceName: 'deviceName',
                            isMobile: false,
                            savePerInstance: true,
                        },
                        fileName: {
                            browserName: 'browserName',
                            browserVersion: 'browserVersion',
                            deviceName: 'deviceName',
                            devicePixelRatio: 2,
                            formatImageName: '{tag}-{browserName}-{width}x{height}-dpr-{dpr}',
                            isMobile: false,
                            isTestInBrowser: true,
                            logName: 'logName',
                            name: 'name',
                            outerHeight: 850,
                            outerWidth: 1400,
                            platformName: 'platformName',
                            platformVersion: 'platformVersion',
                            screenHeight: 900,
                            screenWidth: 1440,
                            tag: 'tag',
                        },
                        hideElements: ['<div></div>'],
                        platformName: '',
                        removeElements: ['<div></div>'],
                    };
                    _a = expect;
                    return [4, afterScreenshot_1.default(MOCKED_EXECUTOR, options)];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toEqual({
                        'devicePixelRatio': 2,
                        'fileName': 'tag-browserName-1400x850-dpr-2.png',
                        'path': process.cwd() + "/.tmp/afterScreenshot/desktop_browserName",
                    });
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=afterScreenshot.spec.js.map