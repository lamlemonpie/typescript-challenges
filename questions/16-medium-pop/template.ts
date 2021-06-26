export type Pop<T extends any[]> = 
    T extends [...infer first, infer last] ? first : never;
