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
var mocks_1 = require("../mocks/mocks");
var getElementPositionTopScreenNativeMobile_1 = require("./getElementPositionTopScreenNativeMobile");
describe('getElementPositionTopScreenNativeMobile', function () {
    beforeEach(function () {
        Object.defineProperty(window.screen, 'width', __assign({ value: mocks_1.IOS_DEVICES.IPHONE.width }, mocks_1.CONFIGURABLE));
        Object.defineProperty(window.screen, 'height', __assign({ value: mocks_1.IOS_DEVICES.IPHONE.height }, mocks_1.CONFIGURABLE));
        Element.prototype.getBoundingClientRect = jest.fn(function () {
            return {
                width: 120,
                height: 120,
                top: 10,
                left: 100,
                bottom: 5,
                right: 12,
            };
        });
        document.body.innerHTML =
            '<div>' +
                '  <span id="username">Hello</span>' +
                '</div>';
    });
    it('should get the element position to the top of the screen for a mobile browser', function () {
        Object.defineProperty(window, 'innerHeight', __assign({ value: mocks_1.IOS_DEVICES.IPHONE.innerHeight }, mocks_1.CONFIGURABLE));
        expect(getElementPositionTopScreenNativeMobile_1.getElementPositionTopScreenNativeMobile(94, document.querySelector('#username'))).toMatchSnapshot();
    });
    it('should get the element position to the top of the screen for an app in portrait mode', function () {
        Object.defineProperty(window, 'innerHeight', __assign({ value: mocks_1.IOS_DEVICES.IPHONE.height }, mocks_1.CONFIGURABLE));
        expect(getElementPositionTopScreenNativeMobile_1.getElementPositionTopScreenNativeMobile(94, document.querySelector('#username'))).toMatchSnapshot();
    });
    it('should get the element position to the top of the screen for an app in landscape mode', function () {
        Object.defineProperty(window, 'innerHeight', __assign({ value: mocks_1.IOS_DEVICES.IPHONE.width }, mocks_1.CONFIGURABLE));
        expect(getElementPositionTopScreenNativeMobile_1.getElementPositionTopScreenNativeMobile(94, document.querySelector('#username'))).toMatchSnapshot();
    });
});
//# sourceMappingURL=getElementPositionTopScreenNativeMobile.spec.js.map