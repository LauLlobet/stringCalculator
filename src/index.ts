function isInvalidlySeparated(str: string): boolean {
    return str.endsWith(',') || str.includes(",,") || str.startsWith(",")
}
export function calculator(str : string): number {
    if(isInvalidlySeparated(str)){ 
         throw new Error('not well separated');
    }
    const separator = "d"
    const commaSeparatedString = str.replace("//"+separator+"\n","").replace(new RegExp(separator,'g'),',')
    return commaSeparatedString
    .split(',')
    .reduce((accum,current) => accum + +current, 0)
}