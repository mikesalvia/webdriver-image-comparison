export interface AndroidOffsets {
    [key: number]: {
        STATUS_BAR: number;
        ADDRESS_BAR: number;
    };
}
export interface IosOffsets {
    [key: number]: {
        STATUS_BAR: number;
        STATUS_BAR_PRO: number;
        STATUS_BAR_X: number;
        ADDRESS_BAR: number;
        HOME_BAR: {
            DEFAULT: {
                height: number;
                width: number;
                x: number;
                y: number;
            };
            LARGE: {
                height: number;
                width: number;
                x: number;
                y: number;
            };
        };
    };
}