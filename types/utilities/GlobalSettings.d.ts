/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
/**
 * Change description used for change callbacks in GlobalSettings.
 *
 * @public
 */
export interface IChangeDescription {
    key: string;
    oldValue: any;
    value: any;
}
/**
 * Change event callback.
 *
 * @public
 */
export interface IChangeEventCallback {
    __id__?: string;
    (changeDescription?: IChangeDescription): void;
}
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
export declare class GlobalSettings {
    static getValue<T>(key: string, defaultValue?: T | (() => T)): T;
    static setValue<T>(key: string, value: T): T;
    static addChangeListener(cb: IChangeEventCallback): void;
    static removeChangeListener(cb: IChangeEventCallback): void;
}