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
var constants_1 = require("../helpers/constants");
var mocks_1 = require("../mocks/mocks");
var getAndroidStatusAddressToolBarHeight_1 = require("./getAndroidStatusAddressToolBarHeight");
describe('getAndroidStatusAddressToolBarHeight', function () {
    beforeAll(function () {
        Object.defineProperty(window.screen, 'width', { value: mocks_1.ANDROID_DEVICES.NEXUS_5X.width });
        Object.defineProperty(window.screen, 'height', { value: mocks_1.ANDROID_DEVICES.NEXUS_5X.height });
        Object.defineProperty(window, 'innerHeight', { value: mocks_1.ANDROID_DEVICES.NEXUS_5X.innerHeight });
    });
    it('should the the android status, address and toolbar height with only a major version in the navigator', function () {
        Object.defineProperty(navigator, 'appVersion', __assign({ value: mocks_1.NAVIGATOR_APP_VERSIONS.ANDROID['9'] }, mocks_1.CONFIGURABLE));
        expect(getAndroidStatusAddressToolBarHeight_1.default(constants_1.OFFSETS.ANDROID)).toMatchSnapshot();
    });
    it('should the the android status, address and toolbar height with major and minor version in the navigator', function () {
        Object.defineProperty(navigator, 'appVersion', __assign({ value: mocks_1.NAVIGATOR_APP_VERSIONS.ANDROID['8'] }, mocks_1.CONFIGURABLE));
        expect(getAndroidStatusAddressToolBarHeight_1.default(constants_1.OFFSETS.ANDROID)).toMatchSnapshot();
    });
    it('should the the android status, address and toolbar height with major, minor and patch version in the navigator', function () {
        Object.defineProperty(navigator, 'appVersion', __assign({ value: mocks_1.NAVIGATOR_APP_VERSIONS.ANDROID['7'] }, mocks_1.CONFIGURABLE));
        expect(getAndroidStatusAddressToolBarHeight_1.default(constants_1.OFFSETS.ANDROID)).toMatchSnapshot();
    });
});
//# sourceMappingURL=getAndroidStatusAddressToolBarHeight.spec.js.map