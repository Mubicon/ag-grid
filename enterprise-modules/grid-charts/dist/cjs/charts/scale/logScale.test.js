"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logScale_1 = require("./logScale");
test('ticks', function () {
    {
        var scale = new logScale_1.LogScale();
        scale.domain = [100, 1000000];
        expect(scale.ticks()).toEqual([
            100, 200, 300, 400, 500,
            600, 700, 800, 900, 1000,
            2000, 3000, 4000, 5000, 6000,
            7000, 8000, 9000, 10000, 20000,
            30000, 40000, 50000, 60000, 70000,
            80000, 90000, 100000, 200000, 300000,
            400000, 500000, 600000, 700000, 800000,
            900000, 1000000
        ]);
        expect(scale.ticks(4)).toEqual([100, 1000, 10000, 100000, 1000000]);
    }
    {
        var scale = new logScale_1.LogScale();
        scale.domain = [-100, 10000];
        expect(scale.ticks()).toEqual([]);
    }
    {
        var scale = new logScale_1.LogScale();
        scale.domain = [-1000, -10];
        expect(scale.ticks()).toEqual([
            -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100,
            -90, -80, -70, -60, -50, -40, -30, -20, -10
        ]);
    }
});
test('convert', function () {
    {
        var scale = new logScale_1.LogScale();
        scale.domain = [10, 1000];
        expect(scale.convert(50)).toBe(0.3494850021680094);
    }
    {
        var scale = new logScale_1.LogScale();
        scale.domain = [-1000, -10];
        expect(scale.convert(-50)).toBe(0.6505149978319906);
    }
});
test('base', function () {
    var expTicks = [
        20.085536923187668,
        54.598150033144236,
        148.4131591025766,
        403.4287934927351
    ];
    var scale = new logScale_1.LogScale();
    scale.domain = [10, 1000];
    expect(scale.ticks()).not.toEqual(expTicks);
    scale.base = Math.E;
    expect(scale.ticks()).toEqual(expTicks);
});
test('nice', function () {
    {
        var scale = new logScale_1.LogScale();
        scale.domain = [57, 775];
        scale.nice();
        expect(scale.domain).toEqual([10, 1000]);
    }
    {
        var scale = new logScale_1.LogScale();
        scale.domain = [Math.E * 1.234, Math.E * 5.783];
        scale.base = Math.E;
        scale.nice();
        var domain = scale.domain;
        expect(Math.log(domain[0])).toEqual(1);
        expect(Math.log(domain[1])).toEqual(3);
    }
});
