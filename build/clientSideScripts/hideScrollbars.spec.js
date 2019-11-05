"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hideScrollbars_1 = require("./hideScrollbars");
describe('hideScrollBars', function () {
    it('should be able to hide and show the scrollbars', function () {
        expect(document.body.style.overflow).toMatchSnapshot();
        hideScrollbars_1.default(true);
        expect(document.body.style.overflow).toMatchSnapshot();
        hideScrollbars_1.default(false);
        expect(document.body.style.overflow).toMatchSnapshot();
    });
});
//# sourceMappingURL=hideScrollbars.spec.js.map