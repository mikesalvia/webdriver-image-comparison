export interface GetAndCreatePathOptions {
    browserName: string;
    deviceName: string;
    isMobile: boolean;
    savePerInstance: boolean;
}
export interface FormatFileNameOptions {
    browserName: string;
    browserVersion: string;
    deviceName: string;
    devicePixelRatio: number;
    formatImageName: string;
    isMobile: boolean;
    isTestInBrowser: boolean;
    logName: string;
    name: string;
    outerHeight: number;
    outerWidth: number;
    platformName: string;
    platformVersion: string;
    screenHeight: number;
    screenWidth: number;
    tag: string;
}
export interface FormatFileDefaults {
    browserName: string;
    browserVersion: string;
    deviceName: string;
    dpr: number;
    height: number;
    logName: string;
    mobile: string;
    name: string;
    platformName: string;
    platformVersion: string;
    tag: string;
    width: number;
}
export interface GetAddressBarShadowPaddingOptions {
    platformName: string;
    browserName: string;
    nativeWebScreenshot: boolean;
    addressBarShadowPadding: number;
    addShadowPadding: boolean;
}
export interface GetToolBarShadowPaddingOptions {
    platformName: string;
    browserName: string;
    toolBarShadowPadding: number;
    addShadowPadding: boolean;
}
export interface ScreenshotSize {
    height: number;
    width: number;
}
