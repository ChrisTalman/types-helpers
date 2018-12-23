export declare type Omit<GenericObject extends object, GenericOmissions extends string> = Pick<GenericObject, Exclude<keyof GenericObject, GenericOmissions>>;
export declare type PromiseResolution<T> = T extends Promise<infer V> ? V : never;
