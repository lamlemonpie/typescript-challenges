export type AppendToObject<T, U extends string, V> = {
    [k in keyof T | U] : k extends keyof T ? T[k] : V 
}

// k will be a key of T or U
// if the value of k is in T, the type is from T[k]
// else (case U) the type is V

// union types (k in keyof T | U)
// mapped types
// conditional types