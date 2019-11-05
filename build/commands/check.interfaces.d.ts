import { RectanglesOutput } from '../methods/rectangles.interfaces';
export interface CheckMethodOptions {
    blockOut?: RectanglesOutput[];
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
