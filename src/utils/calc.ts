import { toUSD } from "./format"

const calcTip = (check: number, percentage:number): number => {
 return check + (check * percentage / 100) 
}

const calcAmount = (total:number, check:number): number => {
    return total - check
}

const calcPerPerson = (person: number, total:number): string | number => {
    if (person === 0) return 1;

    return toUSD(total / person)
};


export {
    calcTip,
    calcAmount, 
    calcPerPerson
}