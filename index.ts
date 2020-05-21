/** Returns resolution type of a promise. */
export type PromiseResolution <T> = T extends Promise<infer V> ? V : never;

/** Makes all properties optional in interface and subinterfaces. */
export type PartialDeep<T> = T extends object ? { [K in keyof T]?: PartialDeep<T[K]> } : T;

/** Converts every property value to the same type as their key. */
export type Mirror <GenericObject> =
{
	[GenericKey in keyof GenericObject]: GenericKey
};

/** Converts every property value to the same type. */
export type Uniform <GenericObject, GenericValue> =
{
	[GenericKey in keyof GenericObject]: GenericValue
};

/** Generates subset of given object, regardless of whether given keys are defined on the object or not. */
export type OptionalPick<T, K extends PropertyKey> = Pick<T, Extract<keyof T, K>>;

/** Requires given properties, leaving other properties unchanged as either required or optional. */
export type RequireSome <GenericObject extends object, GenericSome extends keyof GenericObject> = Omit<GenericObject, GenericSome> & Required<Pick<GenericObject, GenericSome>>;

/** Makes given properties optional, leaving other properties unchanged as either required or optional. */
export type OptionalSome <GenericObject extends object, GenericSome extends keyof GenericObject> = Omit<GenericObject, GenericSome> & Partial<Pick<GenericObject, GenericSome>>;