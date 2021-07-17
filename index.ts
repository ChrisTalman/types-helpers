/** Returns resolution type of a promise. */
export type PromiseResolution <T> = T extends Promise<infer V> ? V : never;

/** Makes all properties optional in interface and subinterfaces. */
export type PartialDeep <T> = T extends object ? { [K in keyof T]?: PartialDeep<T[K]> } : T;

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
export type OptionalPick <T, K extends PropertyKey> = Pick<T, Extract<keyof T, K>>;

/** Requires given properties, leaving other properties unchanged as either required or optional. */
export type RequireSome <GenericObject extends object, GenericSome extends keyof GenericObject> = Omit<GenericObject, GenericSome> & Required<Pick<GenericObject, GenericSome>>;

/** Makes given properties optional, leaving other properties unchanged as either required or optional. */
export type OptionalSome <GenericObject extends object, GenericSome extends keyof GenericObject> = Omit<GenericObject, GenericSome> & Partial<Pick<GenericObject, GenericSome>>;

/** Requires optional properties to be their defined type or `undefined`. */
export type RequireOptionalAsUndefined <GenericObject extends object> =
{
	[Key in keyof Required <GenericObject>]:
		Pick <GenericObject, Key> extends Required <Pick <GenericObject, Key>>
		?
			GenericObject[Key]
		:
			(GenericObject[Key] | undefined)
};

/** Keys in union. */
export type UnionKeys <T> = T extends any ? keyof T : never;

/** Picks literal from union. */
export type PickLiteral <GenericBase extends string | number | symbol, GenericPick extends GenericBase> = keyof Pick<{[Type in GenericBase]: true}, GenericPick>;

/** Omits literal from union. */
export type OmitLiteral <GenericBase extends string | number | symbol, GenericOmit extends string | number | symbol> = keyof Omit<{[Type in GenericBase]: true}, GenericOmit>;

/**
	Pick union.
	Courtesy Titian Cernicova-Dragomir: https://github.com/microsoft/TypeScript/issues/28339#issuecomment-463577347
*/
export type DistributivePick <T, K extends UnionKeys <T>> = T extends any ? Pick <T, Extract <keyof T, K>> : never;

/**
	Omit union.
	Courtesy Titian Cernicova-Dragomir: https://github.com/microsoft/TypeScript/issues/28339#issuecomment-463577347
*/
export type DistributiveOmit <T, K extends UnionKeys <T>> = T extends any ? Omit <T, Extract <keyof T, K>> : never;

/**
	Return value of `Object.entries()`.
	Courtesy Thomas Charlat: https://github.com/microsoft/TypeScript/issues/35101#issue-522767105
*/
export type Entries <T> = { [K in keyof T]: [K, T[K]] }[keyof T][];