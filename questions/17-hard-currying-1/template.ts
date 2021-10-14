// your answers
type Curry<Args, Result> = 
    Args extends [infer first, ...infer others]
    ? (args: first) => Curry<others, Result>
    : Result;

export declare function Currying<Function>(fn: Function): 
    Function extends (...args: infer Args) => infer Result
    ? Curry<Args, Result>
    : never;

// type constraints
// conditional types