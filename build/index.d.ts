/** Omits properties from object. */
export declare type Omit<GenericObject extends object, GenericOmissions extends string> = Pick<GenericObject, Exclude<keyof GenericObject, GenericOmissions>>;
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
