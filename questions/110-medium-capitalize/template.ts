export type Capitalize<S extends string> = 
    S extends `${infer first}${infer tail}` 
    ? `${Uppercase<first> }${tail}`  
    : S;

// template literal types
// type constraints
// string constraints
