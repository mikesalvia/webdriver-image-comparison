export interface ScreenshotOutput {
    devicePixelRatio: number;
    fileName: string;
    path: string;
}
export interface AfterScreenshotOptions {
    actualFolder: string;
    base64Image: string;
    disableCSSAnimation: boolean;
    hideScrollBars: boolean;
    filePath: ScreenshotFilePathOptions;
    fileName: ScreenshotFileNameOptions;
    hideElements: (HTMLElement | HTMLElement[])[];
    platformName: string;
    removeElements: (HTMLElement | HTMLElement[])[];
    colorToBlack?: boolean;
}
export interface ScreenshotFilePathOptions {
    browserName: string;
    deviceName: string;
    isMobile: boolean;
    savePerInstance: boolean;
}
export interface ScreenshotFileNameOptions {
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
