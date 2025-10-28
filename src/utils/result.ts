import { calcPerPerson } from "./calc";
import { toUSD } from "./format";

interface IResult {
  getCheckedAmount: number;
  tipPercentage: number;
  total: number;
  tipAmount: number;
  divideAmong: string;
  people: number;
}

export const printResult = (props: IResult): void => {
    const header: string = "--- Tip Calculation Summary ---";
    const footer: string = "-------------------------------"
    const perPerson = calcPerPerson(props.total, props.people)

    return console.log(
        `
        ${header}
        Check Amount:${toUSD(props.getCheckedAmount)}
        Tip Percentage: ${props.tipPercentage}%
        Tip Amount: ${toUSD(props.tipAmount)}
        Total Bill: ${toUSD(props.total)}
        Divide among people: ${props.divideAmong}
        Split between how many people: ${props.people}
        Each person pays: ${perPerson}
        ${footer}
        `
    )
}