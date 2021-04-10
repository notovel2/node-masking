export type MaskingFunction = (<T extends string>(str: T) => T) | (<T extends string>() => T);
export type Pair = { [key: string]: MaskingFunction | undefined };