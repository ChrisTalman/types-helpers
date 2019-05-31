/** Omits properties from object. */
export declare type Omit<GenericObject extends object, GenericOmissions extends string> = Pick<GenericObject, Exclude<keyof GenericObject, GenericOmissions>>;
/** Returns resolution type of a promise. */
export declare type PromiseResolution<T> = T extends Promise<infer V> ? V : never;
/** Makes all properties optional in interface and subinterfaces. */
export declare type PartialDeep<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] ? PartialDeep<U>[] : T[P] extends object ? PartialDeep<T[P]> : T[P];
};
/** Converts every property value to the same type as their key. */
export declare type Mirror<GenericObject> = {
    [GenericKey in keyof GenericObject]: GenericKey;
};
/** Converts every property value to the same type. */
export declare type Uniform<GenericObject, GenericValue> = {
    [GenericKey in keyof GenericObject]: GenericValue;
};
