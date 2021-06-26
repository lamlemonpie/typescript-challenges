export type Flatten<T> = 
    T extends [infer first, ...infer tail]
    ? first extends any[]
        ? Flatten<[...first, ...tail]>
        : [first, ...Flatten<tail>]
    : T;
    
