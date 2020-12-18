export function calculator(string : string): number {
    const commaSeparatedStringTemp = turnCustomSeparatorsIntoCommaSeparators(string)
    const commaSeparatedString = turnJumplinesIntoCommaSeparators(commaSeparatedStringTemp)
    throwIfIsInvalidlySeparated(commaSeparatedString)
    throwIfContainingNegativesNumbers(commaSeparatedString)  
    return commaSeparatedString
                .split(',')
                .reduce((accum,current) => accum + +current, 0)
}

function turnCustomSeparatorsIntoCommaSeparators(str: string): string {
    if(!str.startsWith("//")){
        return str;
    }
    const separator = str.split("\n")[0].split("//")[1]
    return str.replace("//"+separator+"\n","").replace(new RegExp(separator,'g'),',')
}

function throwIfContainingNegativesNumbers(commaSeparatedString: string) {
    if(!commaSeparatedString.includes("-")){
        return
    }
    const stringWithoutNonNegatives = commaSeparatedString.slice(commaSeparatedString.indexOf('-')+1)
    const negative = stringWithoutNonNegatives.split("-").reduce((accum, current)=> accum + " -" + current.split(",")[0], "")
    throw new Error("negatives"+ negative + " found")
}

function turnJumplinesIntoCommaSeparators(input: string){
    return input.replace(new RegExp("\n",'g'),',')
}


function throwIfIsInvalidlySeparated(commaSeparatedString: string) {
    if(commaSeparatedString.endsWith(',') || commaSeparatedString.includes(",,") || commaSeparatedString.startsWith(",")){ 
        throw new Error('not well separated');
    }
}