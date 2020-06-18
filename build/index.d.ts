/** Returns resolution type of a promise. */
export declare type PromiseResolution<T> = T extends Promise<infer V> ? V : never;
/** Makes all properties optional in interface and subinterfaces. */
export declare type PartialDeep<T> = T extends object ? {
    [K in keyof T]?: PartialDeep<T[K]>;
} : T;
/** Converts every property value to the same type as their key. */
export declare type Mirror<GenericObject> = {
    [GenericKey in keyof GenericObject]: GenericKey;
};
/** Converts every property value to the same type. */
export declare type Uniform<GenericObject, GenericValue> = {
    [GenericKey in keyof GenericObject]: GenericValue;
};
/** Generates subset of given object, regardless of whether given keys are defined on the object or not. */
export declare type OptionalPick<T, K extends PropertyKey> = Pick<T, Extract<keyof T, K>>;
/** Requires given properties, leaving other properties unchanged as either required or optional. */
export declare type RequireSome<GenericObject extends object, GenericSome extends keyof GenericObject> = Omit<GenericObject, GenericSome> & Required<Pick<GenericObject, GenericSome>>;
/** Makes given properties optional, leaving other properties unchanged as either required or optional. */
export declare type OptionalSome<GenericObject extends object, GenericSome extends keyof GenericObject> = Omit<GenericObject, GenericSome> & Partial<Pick<GenericObject, GenericSome>>;
/** Keys in union. */
export declare type UnionKeys<T> = T extends any ? keyof T : never;
/**
    Pick union.
    Courtesy Titian Cernicova-Dragomir: https://github.com/microsoft/TypeScript/issues/28339#issuecomment-463577347
*/
export declare type DistributivePick<T, K extends UnionKeys<T>> = T extends any ? Pick<T, Extract<keyof T, K>> : never;
/**
    Omit union.
    Courtesy Titian Cernicova-Dragomir: https://github.com/microsoft/TypeScript/issues/28339#issuecomment-463577347
*/
export declare type DistributiveOmit<T, K extends UnionKeys<T>> = T extends any ? Omit<T, Extract<keyof T, K>> : never;
