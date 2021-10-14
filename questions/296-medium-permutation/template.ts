export type Permutation<T, K = T> = 
    [T] extends [never]
    ? []
    : K extends K
        ? [K, ...Permutation<Exclude<T,K>>]
        : never;


// Conditional Types are distributive 
// using the distributive CT, K extends K works
// like a for loop