"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setCustomCss_1 = require("./setCustomCss");
describe('setCustomCss', function () {
    it('should be able to set the custom css with the default options', function () {
        var cssOptions = {
            addressBarPadding: 6,
            disableCSSAnimation: false,
            id: 'id',
            toolBarPadding: 6,
        };
        expect(document.head.textContent).toMatchSnapshot();
        setCustomCss_1.default(cssOptions);
        expect(document.head.textContent).toMatchSnapshot();
    });
    it('should be able to set the custom css with the animations disabled', function () {
        var cssOptions = {
            addressBarPadding: 6,
            disableCSSAnimation: true,
            id: 'id',
            toolBarPadding: 6,
        };
        expect(document.head.textContent).toMatchSnapshot();
        setCustomCss_1.default(cssOptions);
        expect(document.head.textContent).toMatchSnapshot();
    });
    it('should be able to set the custom css with the with padding set to 0', function () {
        var cssOptions = {
            addressBarPadding: 0,
            disableCSSAnimation: true,
            id: 'id',
            toolBarPadding: 0,
        };
        expect(document.head.textContent).toMatchSnapshot();
        setCustomCss_1.default(cssOptions);
        expect(document.head.textContent).toMatchSnapshot();
    });
    it('should do nothing if document.head is null', function () {
        var cssOptions = {
            addressBarPadding: 6,
            disableCSSAnimation: false,
            id: 'id',
            toolBarPadding: 6,
        };
        Object.defineProperty(document, 'head', { value: null });
        setCustomCss_1.default(cssOptions);
        expect(document.head).toBe(null);
    });
});
//# sourceMappingURL=setCustomCss.spec.js.map