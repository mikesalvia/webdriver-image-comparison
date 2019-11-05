export interface ClassOptions {
    addressBarShadowPadding?: number;
    autoSaveBaseline?: boolean;
    baselineFolder?: any;
    clearRuntimeFolder?: boolean;
    debug?: boolean;
    formatImageName?: string;
    savePerInstance?: boolean;
    screenshotPath?: any;
    toolBarShadowPadding?: number;
    disableCSSAnimation?: boolean;
    fullPageScrollTimeout?: number;
    hideScrollBars?: boolean;
    colorToBlack?: boolean;
    blockOutStatusBar?: boolean;
    blockOutToolBar?: boolean;
    ignoreAlpha?: boolean;
    ignoreAntialiasing?: boolean;
    ignoreColors?: boolean;
    ignoreLess?: boolean;
    ignoreNothing?: boolean;
    rawMisMatchPercentage?: boolean;
    returnAllCompareData?: boolean;
    saveAboveTolerance?: number;
}
export interface DefaultOptions {
    addressBarShadowPadding: number;
    autoSaveBaseline: boolean;
    clearFolder: boolean;
    debug: boolean;
    formatImageName: string;
    savePerInstance: boolean;
    toolBarShadowPadding: number;
    disableCSSAnimation: boolean;
    fullPageScrollTimeout: number;
    hideScrollBars: boolean;
    compareOptions: CompareOptions;
    colorToBlack: boolean;
}
interface CompareOptions {
    blockOutStatusBar: boolean;
    blockOutToolBar: boolean;
    ignoreAlpha: boolean;
    ignoreAntialiasing: boolean;
    ignoreColors: boolean;
    ignoreLess: boolean;
    ignoreNothing: boolean;
    rawMisMatchPercentage: boolean;
    returnAllCompareData: boolean;
    saveAboveTolerance: number;
}
export {};