/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v22.0.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Autowired, Bean } from "../context/context";
import { _ } from "../utils";
var StandardMenuFactory = /** @class */ (function () {
    function StandardMenuFactory() {
    }
    StandardMenuFactory.prototype.hideActiveMenu = function () {
        if (this.hidePopup) {
            this.hidePopup();
        }
    };
    StandardMenuFactory.prototype.showMenuAfterMouseEvent = function (column, mouseEvent) {
        var _this = this;
        this.showPopup(column, function (eMenu) {
            _this.popupService.positionPopupUnderMouseEvent({
                column: column,
                type: 'columnMenu',
                mouseEvent: mouseEvent,
                ePopup: eMenu
            });
        });
    };
    StandardMenuFactory.prototype.showMenuAfterButtonClick = function (column, eventSource) {
        var _this = this;
        this.showPopup(column, function (eMenu) {
            _this.popupService.positionPopupUnderComponent({
                type: 'columnMenu', eventSource: eventSource,
                ePopup: eMenu, keepWithinBounds: true, column: column
            });
        });
    };
    StandardMenuFactory.prototype.showPopup = function (column, positionCallback) {
        var _this = this;
        var filterWrapper = this.filterManager.getOrCreateFilterWrapper(column, 'COLUMN_MENU');
        var eMenu = document.createElement('div');
        _.addCssClass(eMenu, 'ag-menu');
        filterWrapper.guiPromise.promise.then(function (gui) {
            eMenu.appendChild(gui);
        });
        var hidePopup;
        var bodyScrollListener = function (event) {
            // if h scroll, popup is no longer over the column
            if (event.direction === 'horizontal') {
                hidePopup();
            }
        };
        this.eventService.addEventListener('bodyScroll', bodyScrollListener);
        var closedCallback = function () {
            _this.eventService.removeEventListener('bodyScroll', bodyScrollListener);
            column.setMenuVisible(false, "contextMenu");
        };
        // need to show filter before positioning, as only after filter
        // is visible can we find out what the width of it is
        hidePopup = this.popupService.addAsModalPopup(eMenu, true, closedCallback);
        positionCallback(eMenu);
        filterWrapper.filterPromise.then(function (filter) {
            if (filter.afterGuiAttached) {
                var params = {
                    hidePopup: hidePopup
                };
                filter.afterGuiAttached(params);
            }
        });
        this.hidePopup = hidePopup;
        column.setMenuVisible(true, "contextMenu");
    };
    StandardMenuFactory.prototype.isMenuEnabled = function (column) {
        // for standard, we show menu if filter is enabled, and he menu is not suppressed
        return column.isFilterAllowed();
    };
    __decorate([
        Autowired('eventService')
    ], StandardMenuFactory.prototype, "eventService", void 0);
    __decorate([
        Autowired('filterManager')
    ], StandardMenuFactory.prototype, "filterManager", void 0);
    __decorate([
        Autowired('popupService')
    ], StandardMenuFactory.prototype, "popupService", void 0);
    __decorate([
        Autowired('gridOptionsWrapper')
    ], StandardMenuFactory.prototype, "gridOptionsWrapper", void 0);
    StandardMenuFactory = __decorate([
        Bean('menuFactory')
    ], StandardMenuFactory);
    return StandardMenuFactory;
}());
export { StandardMenuFactory };
