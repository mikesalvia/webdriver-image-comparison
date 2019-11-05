"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getElementPositionTopWindow_1 = require("./getElementPositionTopWindow");
describe('getElementPositionTopWindow', function () {
    it('should the the element position to the top of the window', function () {
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
        expect(getElementPositionTopWindow_1.default(document.querySelector('#username'))).toMatchSnapshot();
    });
});
//# sourceMappingURL=getElementPositionTopWindow.spec.js.map