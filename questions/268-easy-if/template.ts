export type If<C extends boolean, T, F> = C extends true ? T : F;
// conditional types
// type constraints