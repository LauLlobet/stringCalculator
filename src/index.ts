function isInvalidlySeparated(str: string): boolean {
    return str.endsWith(',') || str.includes(",,") || str.startsWith(",")
}

function separateWithCommas(str: string): string {
    const separator = str.split("\n")[0].split("//")[1]
    return str.replace("//"+separator+"\n","").replace(new RegExp(separator,'g'),',')
}

export function calculator(string : string): number {
    const commaSeparatedString = separateWithCommas(string)
    if(isInvalidlySeparated(commaSeparatedString)){ 
        throw new Error('not well separated');
    }
    return commaSeparatedString.split(',')
    .reduce((accum,current) => accum + +current, 0)
}