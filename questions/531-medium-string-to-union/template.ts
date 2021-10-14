type stringToArray<S extends string> =
    S extends ''
    ? []
    : S extends `${infer first}${infer tail}`
        ? [first, ...stringToArray<tail>]
        : [];

type TupleToUnion<T extends any[]> = 
    T extends[first: infer x0,...tail: infer xn]
    ? xn extends any[]
        ? x0 | TupleToUnion<xn>
        : x0
    : never;

export type StringToUnion<T extends string> = 
    TupleToUnion<stringToArray<T>>

// using challenges 10 and 298

// array destructuring
// union types
// conditional types
// recursive types
// type constraints
// string constraints
