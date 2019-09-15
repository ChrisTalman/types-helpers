/** Omits properties from object. */
export type Omit <GenericObject extends object, GenericOmissions extends string> = Pick<GenericObject, Exclude<keyof GenericObject, GenericOmissions>>;

/** Returns resolution type of a promise. */
export type PromiseResolution <T> = T extends Promise<infer V> ? V : never;

/** Makes all properties optional in interface and subinterfaces. */
export type PartialDeep <T> =
{
	[P in keyof T]?:
		T[P] extends (infer U)[] ? PartialDeep<U>[] :
		T[P] extends object ? PartialDeep<T[P]> :
		T[P];
};

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