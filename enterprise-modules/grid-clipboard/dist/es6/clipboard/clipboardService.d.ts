import { CellPositionUtils, Column, GridCore, IClipboardService, RowPositionUtils } from "@ag-grid-community/core";
export declare class ClipboardService implements IClipboardService {
    private csvCreator;
    private loggerFactory;
    private selectionController;
    private rangeController;
    private rowModel;
    private valueService;
    private focusedCellController;
    private rowRenderer;
    private columnController;
    private eventService;
    private cellNavigationService;
    private gridOptionsWrapper;
    private columnApi;
    private gridApi;
    cellPositionUtils: CellPositionUtils;
    rowPositionUtils: RowPositionUtils;
    private clientSideRowModel;
    private logger;
    private gridCore;
    registerGridCore(gridCore: GridCore): void;
    private init;
    pasteFromClipboard(): void;
    private doPasteOperation;
    private pasteIntoActiveRange;
    private pasteStartingFromFocusedCell;
    private removeLastLineIfBlank;
    copyRangeDown(): void;
    private fireRowChanged;
    private pasteMultipleValues;
    private pasteSingleValue;
    private updateCellValue;
    copyToClipboard(includeHeaders: boolean): void;
    private iterateActiveRanges;
    private iterateActiveRange;
    copySelectedRangeToClipboard(includeHeaders?: boolean): void;
    private copyFocusedCellToClipboard;
    private dispatchFlashCells;
    private userProcessCell;
    private userProcessHeader;
    copySelectedRowsToClipboard(includeHeaders?: boolean, columnKeys?: (string | Column)[]): void;
    private copyDataToClipboard;
    private executeOnTempElement;
    private dataToArray;
    private rangeSize;
}
