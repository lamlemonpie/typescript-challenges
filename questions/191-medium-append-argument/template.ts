export type AppendArgument<Fn, A> = 
    Fn extends (...args: infer args) => infer anyReturnType
    ? (...args: [...args, A] ) => anyReturnType
    : never;

// type constraints
// function constraints
// conditional types
// array destructuring 
