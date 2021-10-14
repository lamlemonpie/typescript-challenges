export type Chainable<obj = {}> = {
  option<key extends string, value>(k: key, v: value): 
    Chainable<obj & {[k in key]: value}>;
  get(): obj;
}

// mapped types