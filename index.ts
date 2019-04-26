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