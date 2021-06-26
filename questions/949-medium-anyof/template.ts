export type AnyOf<T extends readonly any[]> = 
    T extends [infer first, ...infer others]
        ? first extends false | 0 | '' | [] | { [key: string]: never }
            ? AnyOf<others>
            : true
        : false;
