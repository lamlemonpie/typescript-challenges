export type MyOmit<T, K> = {
    [key in keyof T as key extends K ? never : key] : T[key];
}
//using the challenge 43 - exclude
//mapped types
