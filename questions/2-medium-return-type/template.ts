export type MyReturnType<T> = T extends (... args: any) => infer result ? result : never ;
//type constraints
//infering