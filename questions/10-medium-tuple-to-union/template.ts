
export type TupleToUnion<T extends any[]> = 
    T extends[first: infer x0,...tail: infer xn]
    ? xn extends any[]
        ? x0 | TupleToUnion<xn>
        : x0
    : never;
// array destructuring
// union types
// conditional types
// recursive types

//export type TupleToUnion<T> = T extends any[]? T[number] : never;
// Indexed Access Types