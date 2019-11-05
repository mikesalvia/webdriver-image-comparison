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
var getDocumentScrollHeight_1 = require("./getDocumentScrollHeight");
var mocks_1 = require("../mocks/mocks");
describe('getDocumentScrollHeight', function () {
    it('should return the bodyScrollHeight', function () {
        Object.defineProperty(document.documentElement, 'clientHeight', __assign({ value: 500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(window, 'innerHeight', __assign({ value: 500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(document.documentElement, 'scrollHeight', __assign({ value: 500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(document.body, 'scrollHeight', __assign({ value: 1500 }, mocks_1.CONFIGURABLE));
        expect(getDocumentScrollHeight_1.default()).toEqual(1500);
    });
    it('should return the scrollHeight', function () {
        Object.defineProperty(document.documentElement, 'clientHeight', __assign({ value: 500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(window, 'innerHeight', __assign({ value: 500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(document.documentElement, 'scrollHeight', __assign({ value: 2250 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(document.body, 'scrollHeight', __assign({ value: 1500 }, mocks_1.CONFIGURABLE));
        expect(getDocumentScrollHeight_1.default()).toEqual(2250);
    });
    it('should return the height of the largest node', function () {
        Object.defineProperty(document.documentElement, 'clientHeight', __assign({ value: 1500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(window, 'innerHeight', __assign({ value: 1500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(document.documentElement, 'scrollHeight', __assign({ value: 1500 }, mocks_1.CONFIGURABLE));
        Object.defineProperty(document.body, 'scrollHeight', __assign({ value: 1500 }, mocks_1.CONFIGURABLE));
        document.body.innerHTML =
            '<div>' +
                '  <span style="height: 200px;width: 50px"/>' +
                '  <div style="height: 500px;width: 50px" />' +
                '</div>';
        getDocumentScrollHeight_1.default();
    });
});
//# sourceMappingURL=getDocumentScrollHeight.spec.js.map