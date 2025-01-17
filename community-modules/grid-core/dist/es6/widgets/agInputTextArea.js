/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v22.0.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
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
import { AgAbstractInputField } from "./agAbstractInputField";
var AgInputTextArea = /** @class */ (function (_super) {
    __extends(AgInputTextArea, _super);
    function AgInputTextArea(config) {
        var _this = _super.call(this) || this;
        _this.className = 'ag-text-area';
        _this.displayTag = 'textarea';
        _this.inputType = '';
        _this.setTemplate(_this.TEMPLATE.replace(/%displayField%/g, _this.displayTag));
        if (config) {
            _this.config = config;
        }
        return _this;
    }
    AgInputTextArea.prototype.setValue = function (value, silent) {
        var ret = _super.prototype.setValue.call(this, value, silent);
        this.eInput.value = value;
        return ret;
    };
    return AgInputTextArea;
}(AgAbstractInputField));
export { AgInputTextArea };
