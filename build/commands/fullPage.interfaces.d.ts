import { DefaultOptions } from '../helpers/options.interface';
import { ResizeDimensions } from '../methods/images.interfaces';
import { CheckMethodOptions } from './check.interfaces';
export interface SaveFullPageOptions {
    wic: DefaultOptions;
    method: SaveFullPageMethodOptions;
}
export interface SaveFullPageMethodOptions {
    addressBarShadowPadding?: number;
    disableCSSAnimation?: boolean;
    hideScrollBars?: boolean;
    fullPageScrollTimeout?: number;
    resizeDimensions?: ResizeDimensions | number;
    toolBarShadowPadding?: number;
    hideElements?: HTMLElement[];
    removeElements?: HTMLElement[];
    hideAfterFirstScroll?: HTMLElement[];
    colorToBlack?: boolean;
}
interface CheckOptions extends SaveFullPageMethodOptions, CheckMethodOptions {
}
export interface CheckFullPageOptions {
    wic: DefaultOptions;
    method: CheckOptions;
}
export {};