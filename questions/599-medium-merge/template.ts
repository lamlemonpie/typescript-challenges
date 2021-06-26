export type Merge<F, S> = {
    [key in keyof F | keyof S] : 
        key extends keyof S
        ? S[key]
        : key extends keyof F
            ? F[key]
            : never;
}


// key will extend keys from F | S
// if key extends keyof S (key exists in S)
// return the S[key]
// else, the the key exists in F
// return the F[key]


// types used:
// mapped types
// conditional types
// type constraints 