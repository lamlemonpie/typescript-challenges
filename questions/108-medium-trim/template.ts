export type Trim<S extends string> = 
    S extends `${whitespace}${infer text}` | `${infer text}${whitespace}`
    ? Trim<text>
    : S;

type whitespace = ' ' | '\n' | '\t';

// union types
// recursive types
// conditional types
// type constraints
// string constraints