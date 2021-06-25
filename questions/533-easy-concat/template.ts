export type Concat<T extends any[], U extends any[]> =  [...T,...U];
//export type Concat<T,U> = T extends any[] ? U extends any[] ? [...T,...U] : never : never;
//type constraints and/or conditional types