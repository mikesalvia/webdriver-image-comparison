"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var base_1 = require("./base");
describe('BaseClass', function () {
    it('should be able to create BaseClass with options', function () {
        var instance = new base_1.default({
            baselineFolder: './subfolder//../baseline',
            screenshotPath: './../my_folder//screenshots'
        });
        expect(instance.folders.actualFolder).toBe('../my_folder/screenshots/actual');
        expect(instance.folders.baselineFolder).toBe('baseline');
        expect(instance.folders.diffFolder).toBe('../my_folder/screenshots/diff');
    });
    it('should be able to create baselineFolder with a function', function () {
        var options = {
            baseline: './subfolder//../baseline',
            screenshot: './../my_folder//screenshots'
        };
        var setPath = function (folderPath) {
            return folderPath;
        };
        var instance = new base_1.default({
            baselineFolder: setPath(options.baseline),
            screenshotPath: setPath(options.screenshot)
        });
        expect(instance.folders.actualFolder).toBe('../my_folder/screenshots/actual');
        expect(instance.folders.baselineFolder).toBe('baseline');
        expect(instance.folders.diffFolder).toBe('../my_folder/screenshots/diff');
    });
    it('should be able to create BaseClass with default options', function () {
        var instance = new base_1.default({});
        expect(instance.folders.actualFolder).toBe('.tmp/actual');
        expect(instance.folders.baselineFolder).toBe('wic/baseline/');
        expect(instance.folders.diffFolder).toBe('.tmp/diff');
    });
    it('should remove the actual and diff folder if this is needed', function () {
        var actual = path_1.join(process.cwd(), '/.tmp/actual');
        var diff = path_1.join(process.cwd(), '/.tmp/diff');
        fs_extra_1.ensureDirSync(actual);
        fs_extra_1.ensureDirSync(diff);
        expect(fs_extra_1.pathExistsSync(actual)).toEqual(true);
        expect(fs_extra_1.pathExistsSync(diff)).toEqual(true);
        var instance = new base_1.default({ clearRuntimeFolder: true });
        expect(fs_extra_1.pathExistsSync(actual)).toEqual(false);
        expect(fs_extra_1.pathExistsSync(diff)).toEqual(false);
    });
});
//# sourceMappingURL=base.spec.js.map