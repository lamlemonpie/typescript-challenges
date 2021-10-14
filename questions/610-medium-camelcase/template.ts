export type CamelCase<S> = 
    S extends `${infer letters0}-${infer lower}${infer letters1}`
    ? lower extends Uppercase<lower>
        ? `${letters0}-${CamelCase<`${lower}${letters1}`>}`
        : `${letters0}${Uppercase<lower>}${CamelCase<`${letters1}`>}`
    : S;

// Line 2 will find find the "t-lt" shape in S
// (text, - : dash, l: lowercaseLetter)
// if l is from type Upercase (line 3), will continue without deleting the dash (line 4)
// else, will continue deleting one dash and adding the l to Uppercase (line 5)
// if nothing is found, it will return the string

// used:
// string constraints
// conditional types