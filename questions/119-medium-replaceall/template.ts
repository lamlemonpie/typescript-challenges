export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
    ? S
    : S extends `${infer first}${From}${infer last}`
      ? `${first}${To}${ReplaceAll<last,From,To>}`
      : S

// string = left - FROM - right
// left+To+ReplaceAll(right,...)

// template literal types
// type constraints
// string constraints
