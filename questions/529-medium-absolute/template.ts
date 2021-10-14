export type Absolute<T extends number | string | bigint> = 
    T extends `${infer negative}${infer num}`
    ? negative extends '-'
        ? num
        : T
    : Absolute<`${T}`>    

// suppose T is string, split in head and tail
// if the head is a negative ('-') char, return the tail (num)
// else, return T 
//(we suppose it's not needed to apply absolute)
// case T is not string (splitable)
// transform into string and call again

// applied:
// conditional types
// recursive types
// template literal types