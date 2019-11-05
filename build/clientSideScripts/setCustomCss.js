"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setCustomCss(cssOptions) {
    if (document.head == null) {
        return;
    }
    var disableTransformationsTransitionsAnimations = "\n* {\n    -o-transition-property: none !important;\n    -moz-transition-property: none !important;\n    -ms-transition-property: none !important;\n    -webkit-transition-property: none !important;\n    transition-property: none !important;\n    -o-transform: none !important;\n    -moz-transform: none !important;\n    -ms-transform: none !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    -webkit-animation: none !important;\n    -moz-animation: none !important;\n    -o-animation: none !important;\n    -ms-animation: none !important;\n    animation: none !important;\n}";
    var addressBarPadding = cssOptions.addressBarPadding, disableCSSAnimation = cssOptions.disableCSSAnimation, id = cssOptions.id, toolBarPadding = cssOptions.toolBarPadding;
    var bodyTopPadding = addressBarPadding === 0 ? '' : "body{padding-top:" + addressBarPadding + "px !important}";
    var bodyBottomPadding = toolBarPadding === 0 ? '' : "body{padding-bottom:" + toolBarPadding + "px !important}";
    var css = (disableCSSAnimation ? disableTransformationsTransitionsAnimations : '') + bodyTopPadding + bodyBottomPadding;
    var head = document.head;
    var style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
}
exports.default = setCustomCss;
//# sourceMappingURL=setCustomCss.js.map