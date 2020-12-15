export function calculator(str : string): number {
    if(str.endsWith(',') || str.includes(",,") || str.startsWith(",")){
        throw new Error('not well separated');
    }
    return str
    .split(',')
    .reduce((accum,current) => accum + +current, 0)
}