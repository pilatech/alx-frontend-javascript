/// <reference path="interface.ts" />
type insertType = (row: number | string) => number;
type deleteType = (row: number | string) => void;
type updateType = (rowId: number | string, row: number | string) => number | string;