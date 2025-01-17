"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ag-grid-community/core");
var miniChartWithAxes_1 = require("./miniChartWithAxes");
var linearScale_1 = require("../../../../../charts/scale/linearScale");
var clipRect_1 = require("../../../../../charts/scene/clipRect");
var arc_1 = require("../../../../../charts/scene/shape/arc");
var MiniBubble = /** @class */ (function (_super) {
    __extends(MiniBubble, _super);
    function MiniBubble(parent, fills, strokes) {
        var _this = _super.call(this, parent, "bubbleTooltip") || this;
        var size = _this.size;
        var padding = _this.padding;
        // [x, y, radius] triples
        var data = [
            [[0.1, 0.3, 5], [0.5, 0.4, 7], [0.2, 0.8, 7]], [[0.8, 0.7, 5], [0.7, 0.3, 9]]
        ];
        var xScale = linearScale_1.default();
        xScale.domain = [0, 1];
        xScale.range = [padding * 2, size - padding];
        var yScale = linearScale_1.default();
        yScale.domain = [0, 1];
        yScale.range = [size - padding, padding];
        var points = [];
        data.forEach(function (series) {
            series.forEach(function (_a) {
                var x = _a[0], y = _a[1], radius = _a[2];
                var arc = new arc_1.Arc();
                arc.strokeWidth = 1;
                arc.centerX = xScale.convert(x);
                arc.centerY = yScale.convert(y);
                arc.radiusX = arc.radiusY = radius;
                arc.fillOpacity = 0.7;
                points.push(arc);
            });
        });
        _this.points = points;
        _this.updateColors(fills, strokes);
        var clipRect = new clipRect_1.ClipRect();
        clipRect.x = padding;
        clipRect.y = padding;
        clipRect.width = size - padding * 2;
        clipRect.height = size - padding * 2;
        clipRect.append(_this.points);
        _this.root.append(clipRect);
        return _this;
    }
    MiniBubble.prototype.updateColors = function (fills, strokes) {
        this.points.forEach(function (line, i) {
            line.stroke = strokes[i % strokes.length];
            line.fill = fills[i % fills.length];
        });
    };
    MiniBubble.chartType = core_1.ChartType.Bubble;
    return MiniBubble;
}(miniChartWithAxes_1.MiniChartWithAxes));
exports.MiniBubble = MiniBubble;
