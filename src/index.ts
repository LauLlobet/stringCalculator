export function calculator(str : string): number {
    throw new Error('missing number or extra separator');
    return str
    .split(',')
    .reduce((accum,current) => accum + +current, 0)
}