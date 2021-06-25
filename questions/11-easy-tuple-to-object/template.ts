export type TupleToObject<T extends readonly any[]> = {
    [k in T[number]]: k
}
//Indexed Access Types
//Array's index signature is a number