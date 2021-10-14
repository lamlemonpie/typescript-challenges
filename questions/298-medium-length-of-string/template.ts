type stringToArray<S extends string> =
    S extends ''
    ? []
    : S extends `${infer first}${infer tail}`
        ? [first, ...stringToArray<tail>]
        : []

export type LengthOfString<S extends string> = stringToArray<S>['length'];


// convert string to array
// length atribute of array

// used:
// recursive types
// conditional types
// type constraints
// string constraints
