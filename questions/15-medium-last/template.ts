export type Last<T extends any[]> = 
    T extends [...infer first,infer last] ? last  : never;
    // array destructuring 
    // conditional types