export type TrimLeft<S extends string> = 
    S extends `${whitespace}${infer text}`
    ? TrimLeft<text>
    : S;

type whitespace = ' ' | '\n' | '\t';
// template literal types
// recursive types
// conditional types
// type constraints
// string constraints