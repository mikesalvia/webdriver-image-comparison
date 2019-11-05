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
var chalk_1 = require("chalk");
var hideScrollbars_1 = require("../clientSideScripts/hideScrollbars");
var removeCustomCss_1 = require("../clientSideScripts/removeCustomCss");
var constants_1 = require("./constants");
var utils_1 = require("./utils");
var images_1 = require("../methods/images");
var path_1 = require("path");
var hideRemoveElements_1 = require("../clientSideScripts/hideRemoveElements");
function afterScreenshot(executor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var actualFolder, base64Image, disableCSSAnimation, fileNameOptions, filePath, hideElements, noScrollBars, platformName, removeElements, colorToBlack, pathForSaving, savedImageFileName, savedImagePath, mutatableBase64Image, switchColorToBlack;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    actualFolder = options.actualFolder, base64Image = options.base64Image, disableCSSAnimation = options.disableCSSAnimation, fileNameOptions = options.fileName, filePath = options.filePath, hideElements = options.hideElements, noScrollBars = options.hideScrollBars, platformName = options.platformName, removeElements = options.removeElements, colorToBlack = options.colorToBlack;
                    pathForSaving = utils_1.getAndCreatePath(actualFolder, filePath);
                    savedImageFileName = utils_1.formatFileName(fileNameOptions);
                    savedImagePath = path_1.join(pathForSaving, savedImageFileName);
                    switchColorToBlack = function (base64Image) {
                        return new Promise(function (resolve, reject) {
                            var fs = require('fs');
                            var originalImagePath = savedImagePath.replace(".png", "-orig.png");
                            var monochromeImagePath = savedImagePath.replace(".png", "-mono.png");
                            fs.writeFileSync(originalImagePath, base64Image, { encoding: 'base64' });
                            var gm = require('gm');
                            var platformBlackThreshold = platformName.toLowerCase().includes("ios") ? "85%" : "100%";
                            gm(originalImagePath).blackThreshold(platformBlackThreshold).write(monochromeImagePath, function (error) {
                                if (error) {
                                    console.log(chalk_1.red("\n#####################################################################################\n  \u26A0\uFE0F  An error occurred while attempting to convert colors in image to black:\n  \u2757  " + error + "\n#####################################################################################\n          "));
                                    if (error.toString().indexOf("gm/convert binaries can't be found")) {
                                        console.log(chalk_1.red("\n#####################################################################################\n  \uD83D\uDCE6  Binaries are missing, install GraphicsMagick\n#####################################################################################\n            "));
                                    }
                                    resolve(base64Image);
                                }
                                else {
                                    var base64ImageConverter = require('base64-img');
                                    var base64ImageMonochrome = base64ImageConverter.base64Sync(monochromeImagePath).replace("data:image/png;base64,", "");
                                    resolve(base64ImageMonochrome);
                                }
                            });
                        });
                    };
                    if (!colorToBlack) return [3, 2];
                    return [4, switchColorToBlack(base64Image)];
                case 1:
                    mutatableBase64Image = _a.sent();
                    _a.label = 2;
                case 2: return [4, images_1.saveBase64Image(mutatableBase64Image, savedImagePath)];
                case 3:
                    _a.sent();
                    if (!noScrollBars) return [3, 5];
                    return [4, executor(hideScrollbars_1.default, !noScrollBars)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (!(hideElements.length > 0 || removeElements.length > 0)) return [3, 7];
                    return [4, executor(hideRemoveElements_1.default, { hide: hideElements, remove: removeElements }, false)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    if (!(disableCSSAnimation || utils_1.checkIsMobile(platformName))) return [3, 9];
                    return [4, executor(removeCustomCss_1.default, constants_1.CUSTOM_CSS_ID)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2, {
                        fileName: savedImageFileName,
                        path: pathForSaving,
                        devicePixelRatio: fileNameOptions.devicePixelRatio,
                    }];
            }
        });
    });
}
exports.default = afterScreenshot;
//# sourceMappingURL=afterScreenshot.js.map