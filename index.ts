/** Omits properties from object. */
export type Omit <GenericObject extends object, GenericOmissions extends string> = Pick<GenericObject, Exclude<keyof GenericObject, GenericOmissions>>;

/** Returns resolution type of a promise. */
export type PromiseResolution <T> = T extends Promise<infer V> ? V : never;