function isInvalidlySeparated(str: string): boolean {
    return str.endsWith(',') || str.includes(",,") || str.startsWith(",")
}

function separateWithCommas(str: string): string {
    if(!str.startsWith("//")){
        return str;
    }
    const separator = str.split("\n")[0].split("//")[1]
    return str.replace("//"+separator+"\n","").replace(new RegExp(separator,'g'),',')
}

export function calculator(string : string): number {
    const commaSeparatedString = separateWithCommas(string)
    if(commaSeparatedString.includes("-")){
        const stringWithoutNonNegatives = string.slice(commaSeparatedString.indexOf('-')+1)
        const negative = "-" + stringWithoutNonNegatives.split("-")[0].split(",")[0]
        throw new Error("negatives "+ negative + " found")
    }
    if(isInvalidlySeparated(commaSeparatedString)){ 
        throw new Error('not well separated');
    }
    return commaSeparatedString.split(',')
    .reduce((accum,current) => accum + +current, 0)
}