export function calculator(str : string): number {
    return str
    .split(',')
    .reduce((accum,current) => accum + +current, 0)
}