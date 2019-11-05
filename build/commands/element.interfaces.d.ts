import { DefaultOptions } from '../helpers/options.interface';
import { ResizeDimensions } from '../methods/images.interfaces';
import { CheckMethodOptions } from './check.interfaces';
export interface SaveElementOptions {
    wic: DefaultOptions;
    method: SaveElementMethodOptions;
}
export interface SaveElementMethodOptions {
    addressBarShadowPadding?: number;
    disableCSSAnimation?: boolean;
    hideScrollBars?: boolean;
    resizeDimensions?: ResizeDimensions | number;
    toolBarShadowPadding?: number;
    hideElements?: HTMLElement[];
    removeElements?: HTMLElement[];
    colorToBlack?: boolean;
}
interface CheckOptions extends SaveElementMethodOptions, CheckMethodOptions {
}
export interface CheckElementOptions {
    wic: DefaultOptions;
    method: CheckOptions;
}
export {};
