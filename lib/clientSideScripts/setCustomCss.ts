import {CssOptions} from './customCss.interfaces';

/**
 * Set some default css
 */
export default function setCustomCss(cssOptions: CssOptions): void {
	const disableTransformationsTransitionsAnimations = `
* {
    -o-transition-property: none !important;
    -moz-transition-property: none !important;
    -ms-transition-property: none !important;
    -webkit-transition-property: none !important;
    transition-property: none !important;
    -o-transform: none !important;
    -moz-transform: none !important;
    -ms-transform: none !important;
    -webkit-transform: none !important;
    transform: none !important;
    -webkit-animation: none !important;
    -moz-animation: none !important;
    -o-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
}`;
	const { addressBarPadding, disableCSSAnimation, id, toolBarPadding } = cssOptions;
	const bodyTopPadding = addressBarPadding === 0 ? '' : `body{padding-top:${ addressBarPadding }px !important}`;
	const bodyBottomPadding = toolBarPadding === 0 ? '' : `body{padding-bottom:${ toolBarPadding }px !important}`;
	const css = (disableCSSAnimation ? disableTransformationsTransitionsAnimations : '') + bodyTopPadding + bodyBottomPadding;
	const head = document.head || document.getElementsByTagName('head')[ 0 ];
	const style = document.createElement('style');

	style.type = 'text/css';
	style.id = id;
	style.appendChild(document.createTextNode(css));
	head.appendChild(style);
}
