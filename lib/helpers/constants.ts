export const DEFAULT_FORMAT_STRING = '{tag}-{browserName}-{width}x{height}-dpr-{dpr}';
export const PLATFORMS = {
	ANDROID: 'android',
	IOS: 'ios',
};
export const FOLDERS = {
	ACTUAL: 'actual',
	DIFF: 'diff',
	TEMP_FULL_SCREEN: 'tempFullScreen',
  DEFAULT:{
	  BASE: './wic/baseline/',
    SCREENSHOTS: '.tmp/',
  }
};
export const DEFAULT_SHADOW = {
	ADDRESS_BAR: 6,
	TOOL_BAR: 6,
};
export const DESKTOP = 'desktop';
export const CUSTOM_CSS_ID = 'pic-css';
export const DEFAULT_RESIZE_DIMENSIONS = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};
export const FULL_PAGE_SCROLL_TIMEOUT = 1500;
export const OFFSETS = {
	ANDROID: {
		6: {
			STATUS_BAR: 24,
			ADDRESS_BAR: 56,
			TOOL_BAR: 48,
		},
		7: {
			STATUS_BAR: 24,
			ADDRESS_BAR: 56,
			TOOL_BAR: 48,
		},
		8: {
			STATUS_BAR: 24,
			ADDRESS_BAR: 56,
			TOOL_BAR: 48,
		},
		9: {
			STATUS_BAR: 24,
			ADDRESS_BAR: 56,
			TOOL_BAR: 48,
		},
		10: {
			STATUS_BAR: 24,
			ADDRESS_BAR: 56,
			TOOL_BAR: 48,
		}
	},
	// https://ivomynttinen.com/blog/ios-design-guidelines
	IOS: {
		10: {
			STATUS_BAR: 20,
			STATUS_BAR_PRO: 20,
			STATUS_BAR_X: 20,
			ADDRESS_BAR: 44,
      HOME_BAR:{
        DEFAULT:{
          height: 0,
          width:0,
          x:0,
          y:0,
        },
        LARGE:{
          height: 0,
          width:0,
          x:0,
          y:0,
        },
      },
		},
		11: {
			STATUS_BAR: 20,
			STATUS_BAR_PRO: 24,
			STATUS_BAR_X: 44,
			ADDRESS_BAR: 50,
      HOME_BAR:{
        DEFAULT:{
          height: 5,
          width:135,
          x:120,
          y:799,
        },
        LARGE:{
          height: 5,
          width:148,
          x:133,
          y:883,
        },
      },
		},
		12: {
			STATUS_BAR: 20,
			STATUS_BAR_PRO: 24,
			STATUS_BAR_X: 44,
			ADDRESS_BAR: 50,
      HOME_BAR:{
        DEFAULT:{
          height: 5,
          width:135,
          x:120,
          y:799,
        },
        LARGE:{
          height: 5,
          width:148,
          x:133,
          y:883,
        },
      },
		},
		13: {
			STATUS_BAR: 20,
			STATUS_BAR_PRO: 24,
			STATUS_BAR_X: 44,
			ADDRESS_BAR: 50,
      HOME_BAR:{
        DEFAULT:{
          height: 5,
          width:135,
          x:120,
          y:799,
        },
        LARGE:{
          height: 5,
          width:148,
          x:133,
          y:883,
        },
      },
		},
	},
};
