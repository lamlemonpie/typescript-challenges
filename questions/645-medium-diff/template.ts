export type Diff<O, O1> = {
    [k in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>] : 
        k extends keyof O
        ? O[k]
        : k extends keyof O1
            ? O1[k]
            : never 
}

// From O perspective, it will exclude O1 keys
// or from O1, it will exlude O keys
// if k extends and key from O, it will type O[k]
// else if k extends from O1, it will type O1[k]

// types used:
// util types (exlude)
// mapped types
// type constraints
// conditional types