function isInvalidlySeparated(str: string): boolean {
    return str.endsWith(',') || str.includes(",,") || str.startsWith(",")
}

function separateWithCommas(str: string): string {
    const separator = str.split("\n")[0].split("//")[1]
    return str.replace("//"+separator+"\n","").replace(new RegExp(separator,'g'),',')
}

export function calculator(string : string): number {
    if(isInvalidlySeparated(string)){ 
         throw new Error('not well separated');
    }
    const commaSeparatedString = separateWithCommas(string)
    
    return commaSeparatedString.split(',')
    .reduce((accum,current) => accum + +current, 0)
}