import { DefaultOptions } from '../helpers/options.interface';
import { CheckMethodOptions } from './check.interfaces';
export interface SaveScreenOptions {
    wic: DefaultOptions;
    method: SaveScreenMethodOptions;
}
export interface SaveScreenMethodOptions {
    disableCSSAnimation?: boolean;
    hideScrollBars?: boolean;
    hideElements?: HTMLElement[];
    removeElements?: HTMLElement[];
    colorToBlack?: boolean;
}
interface CheckOptions extends SaveScreenMethodOptions, CheckMethodOptions {
}
export interface CheckScreenOptions {
    wic: DefaultOptions;
    method: CheckOptions;
}
export {};
