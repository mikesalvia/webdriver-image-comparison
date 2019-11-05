import beforeScreenshot from '../helpers/beforeScreenshot';
import afterScreenshot from '../helpers/afterScreenshot';
import {getBase64FullPageScreenshotsData} from '../methods/screenshots';
import {makeFullPageBase64Image} from '../methods/images';
import {ScreenshotOutput} from '../helpers/afterScreenshot.interfaces';
import {Methods} from '../methods/methods.interface';
import {InstanceData} from '../methods/instanceData.interfaces';
import {Folders} from '../base.interface';
import {SaveFullPageOptions} from './fullPage.interfaces';
import {BeforeScreenshotOptions, BeforeScreenshotResult} from '../helpers/beforeScreenshot.interface';
import {FullPageScreenshotDataOptions, FullPageScreenshotsData} from '../methods/screenshots.interfaces';

/**
 * Saves an image of the full page
 */
export default async function saveFullPageScreen(
  methods: Methods,
  instanceData: InstanceData,
  folders: Folders,
  tag: string,
  saveFullPageOptions: SaveFullPageOptions,
): Promise<ScreenshotOutput> {

  // 1a. Set some variables
  const {addressBarShadowPadding, autoSaveBaseline, formatImageName, savePerInstance, toolBarShadowPadding} = saveFullPageOptions.wic;

  // 1b. Set the method options to the right values
  const disableCSSAnimation: boolean = 'disableCSSAnimation' in saveFullPageOptions.method
    ? saveFullPageOptions.method.disableCSSAnimation
    : saveFullPageOptions.wic.disableCSSAnimation;
  const hideScrollBars: boolean = 'hideScrollBars' in saveFullPageOptions.method
    ? saveFullPageOptions.method.hideScrollBars
    : saveFullPageOptions.wic.hideScrollBars;
  const fullPageScrollTimeout: number = 'fullPageScrollTimeout' in saveFullPageOptions.method
    ? saveFullPageOptions.method.fullPageScrollTimeout
    : saveFullPageOptions.wic.fullPageScrollTimeout;
  const colorToBlack: boolean = 'colorToBlack' in saveFullPageOptions.method
    ? saveFullPageOptions.method.colorToBlack
    : saveFullPageOptions.wic.colorToBlack;
  const hideElements: HTMLElement[] = saveFullPageOptions.method.hideElements || [];
  const removeElements: HTMLElement[] = saveFullPageOptions.method.removeElements || [];
  const hideAfterFirstScroll: HTMLElement[] = saveFullPageOptions.method.hideAfterFirstScroll || [];

  // 2.  Prepare the beforeScreenshot
  const beforeOptions: BeforeScreenshotOptions = {
    instanceData,
    addressBarShadowPadding,
    disableCSSAnimation,
    hideElements,
    noScrollBars: hideScrollBars,
    removeElements,
    toolBarShadowPadding,
  };
  const enrichedInstanceData: BeforeScreenshotResult = await beforeScreenshot(methods.executor, beforeOptions, true);

  // 3.  Fullpage screenshots are taken per scrolled viewport
  const fullPageScreenshotOptions: FullPageScreenshotDataOptions = {
    addressBarShadowPadding: enrichedInstanceData.addressBarShadowPadding,
    devicePixelRatio: enrichedInstanceData.dimensions.window.devicePixelRatio,
    fullPageScrollTimeout,
    hideAfterFirstScroll,
    innerHeight: enrichedInstanceData.dimensions.window.innerHeight,
    isAndroid: enrichedInstanceData.isAndroid,
    isAndroidChromeDriverScreenshot: enrichedInstanceData.isAndroidChromeDriverScreenshot,
    isAndroidNativeWebScreenshot: enrichedInstanceData.isAndroidNativeWebScreenshot,
    isIos: enrichedInstanceData.isIos,
    toolBarShadowPadding: enrichedInstanceData.toolBarShadowPadding,
  };
  const screenshotsData: FullPageScreenshotsData = await getBase64FullPageScreenshotsData(
    methods.screenShot,
    methods.executor,
    fullPageScreenshotOptions,
  );

  // 4.  Make a fullpage base64 image
  const fullPageBase64Image: string = await makeFullPageBase64Image(screenshotsData);

  // 5.  The after the screenshot methods
  const afterOptions = {
    actualFolder: folders.actualFolder,
    base64Image: fullPageBase64Image,
    disableCSSAnimation,
    hideElements,
    hideScrollBars,
    filePath: {
      autoSaveBaseline,
      browserName: enrichedInstanceData.browserName,
      deviceName: enrichedInstanceData.deviceName,
      isMobile: enrichedInstanceData.isMobile,
      savePerInstance,
    },
    fileName: {
      browserName: enrichedInstanceData.browserName,
      browserVersion: enrichedInstanceData.browserVersion,
      deviceName: enrichedInstanceData.deviceName,
      devicePixelRatio: enrichedInstanceData.dimensions.window.devicePixelRatio,
      formatImageName,
      isMobile: enrichedInstanceData.isMobile,
      isTestInBrowser: enrichedInstanceData.isTestInBrowser,
      logName: enrichedInstanceData.logName,
      name: enrichedInstanceData.name,
      outerHeight: enrichedInstanceData.dimensions.window.outerHeight,
      outerWidth: enrichedInstanceData.dimensions.window.outerWidth,
      platformName: enrichedInstanceData.platformName,
      platformVersion: enrichedInstanceData.platformVersion,
      screenHeight: enrichedInstanceData.dimensions.window.screenHeight,
      screenWidth: enrichedInstanceData.dimensions.window.screenWidth,
      tag,
    },
    platformName: instanceData.platformName,
    removeElements,
    colorToBlack
  };

  // 6.  Return the data
  return afterScreenshot(methods.executor, afterOptions);
}
