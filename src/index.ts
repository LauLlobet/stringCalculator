function isInvalidlySeparated(str: string): boolean {
    return str.endsWith(',') || str.includes(",,") || str.startsWith(",")
}
export function calculator(str : string): number {
    if(isInvalidlySeparated(str)){ 
         throw new Error('not well separated');
    }
    const commaSeparatedString = str.replace("//d\n","").replace(new RegExp("d",'g'),',')
    return commaSeparatedString
    .split(',')
    .reduce((accum,current) => accum + +current, 0)
}