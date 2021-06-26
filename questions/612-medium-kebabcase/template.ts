// export type KebabCase<S> = 
//     S extends `${infer lower0}${infer upper}${infer lower1}`
//     ?  upper extends Uppercase<upper>
//         ? `${Lowercase<lower0>}-${Lowercase<upper>}${KebabCase<lower1>}`
//         : S
//     : S

// template literal types
// conditional types

export type KebabCase<S extends string> = 
    S extends `${infer first}${infer tail}` 
    ? tail extends Uncapitalize<tail>
        ? `${Lowercase<first>}${KebabCase<tail>}`
        : `${Lowercase<first>}-${KebabCase<tail>}`
    : S