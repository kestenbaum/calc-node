const calcPercentage = (check: number, percentage:number): number => {
    return check + (check * percentage / 100) 
}

const calcPercentageAmount = (total:number, check:number): number => {
    return total - check
}

const calcPerPerson = (person: number, total:number): number => {
    if (person === 0) return 1;

    return total / person
};


export {
    calcPercentage,
    calcPercentageAmount, 
    calcPerPerson
}