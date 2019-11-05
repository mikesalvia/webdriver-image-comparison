"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getElementPositionTopDom_1 = require("./getElementPositionTopDom");
describe('getElementPositionTopDom', function () {
    it('should get the element position to the top of the Dom', function () {
        document.body.innerHTML =
            '<div>' +
                '  <span id="username">Hello</span>' +
                '</div>';
        getElementPositionTopDom_1.default(document.querySelector('#username'));
    });
});
//# sourceMappingURL=getElementPositionTopDom.spec.js.map