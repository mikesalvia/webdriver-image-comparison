import {executeImageCompare} from '../methods/images';
import {checkIsMobile} from '../helpers/utils';
import saveFullPageScreen from './saveFullPageScreen';
import {ImageCompareResult} from '../methods/images.interfaces';
import {Methods} from '../methods/methods.interface';
import {InstanceData} from '../methods/instanceData.interfaces';
import {Folders} from '../base.interface';
import {CheckFullPageOptions, SaveFullPageOptions} from './fullPage.interfaces';
import {methodCompareOptions} from '../helpers/options';

/**
 * Compare a fullpage screenshot
 */
export default async function checkFullPageScreen(
  methods: Methods,
  instanceData: InstanceData,
  folders: Folders,
  tag: string,
  checkFullPageOptions: CheckFullPageOptions,
): Promise<ImageCompareResult | number> {

  // 1. Take the actual element screenshot and retrieve the needed data
  const saveFullPageOptions: SaveFullPageOptions = {
    wic: checkFullPageOptions.wic,
    method: {
      ...(
        'addressBarShadowPadding' in checkFullPageOptions.method
          ? {addressBarShadowPadding: checkFullPageOptions.method.addressBarShadowPadding}
          : {}
      ),
      ...(
        'disableCSSAnimation' in checkFullPageOptions.method
          ? {disableCSSAnimation: checkFullPageOptions.method.disableCSSAnimation}
          : {}
      ),
      ...(
        'fullPageScrollTimeout' in checkFullPageOptions.method
          ? {fullPageScrollTimeout: checkFullPageOptions.method.fullPageScrollTimeout}
          : {}
      ),
      ...('hideScrollBars' in checkFullPageOptions.method ? {hideScrollBars: checkFullPageOptions.method.hideScrollBars} : {}),
      ...('resizeDimensions' in checkFullPageOptions.method ? {resizeDimensions: checkFullPageOptions.method.resizeDimensions} : {}),
      ...(
        'toolBarShadowPadding' in checkFullPageOptions.method
          ? {toolBarShadowPadding: checkFullPageOptions.method.toolBarShadowPadding}
          : {}
      ),
    }
  };
  const {devicePixelRatio, fileName} = await saveFullPageScreen(methods, instanceData, folders, tag, saveFullPageOptions);

  // 2a. Determine the options
  const compareOptions = methodCompareOptions(checkFullPageOptions.method);
  const executeCompareOptions = {
    debug: checkFullPageOptions.wic.debug,
    devicePixelRatio,
    compareOptions: {
      wic: checkFullPageOptions.wic.compareOptions,
      method: compareOptions,
    },
    fileName,
    folderOptions: {
      autoSaveBaseline: checkFullPageOptions.wic.autoSaveBaseline,
      actualFolder: folders.actualFolder,
      baselineFolder: folders.baselineFolder,
      diffFolder: folders.diffFolder,
      browserName: instanceData.browserName,
      deviceName: instanceData.deviceName,
      isMobile: checkIsMobile(instanceData.platformName),
      savePerInstance: checkFullPageOptions.wic.savePerInstance,
    },
    isAndroidNativeWebScreenshot: instanceData.nativeWebScreenshot,
    platformName: instanceData.platformName,
  };

  // 2b Now execute the compare and return the data
  return executeImageCompare(methods.executor, executeCompareOptions);
}
