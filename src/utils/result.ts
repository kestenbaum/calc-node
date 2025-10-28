import { toUSD } from "./format";

interface IResult {
  getCheckedAmount: number;
  getPercentage: number;
  total: number;
  tipAmount: number;
  divideAmong: string;
  people: number;
  perPerson: number
}

export const printResult = (props: IResult): void => {
    const header: string = "--- Tip Calculation Summary ---";
    const footer: string = "-------------------------------"
    return console.log(
        `
        ${header}
        Check Amount:${toUSD(props.getCheckedAmount)}
        Tip Percentage: ${props.getPercentage}%
        Tip Amount: ${toUSD(props.tipAmount)}
        Total Bill: ${toUSD(props.total)}
        Divide among people: ${props.divideAmong}
        Split between how many people: ${props.people}
        Each person pays: ${toUSD(props.perPerson)}
        ${footer}
        `
    )
}