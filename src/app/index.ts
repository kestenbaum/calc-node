import * as readline from "readline";
import { 
  toUSD, 
  questions, 
  calcTip, 
  calcAmount,
  calcPerPerson,
  checkedAnswer,
  checkedPerson
} from "../utils";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (q: string): Promise<string> => {
    return new Promise(r => rl.question(q, r))
}

(async () => {
    const check = parseFloat(await question(questions.check));
    const tipPercentage = parseFloat(await question(questions.tip));
    const total = calcTip(check, tipPercentage);
    const tipAmount = calcAmount(total, check);

    const getAnswer = await checkedAnswer(question, questions.split);
    const getCountPerson = 
      getAnswer === "yes" 
        ? await checkedPerson(question, questions.people)
        : 1;

    console.log(
    `--- Tip Calculation Summary ---
    Check Amount:${toUSD(check)}
    Tip Percentage: ${tipPercentage}%
    Tip Amount: ${toUSD(tipAmount)}
    Total Bill: ${toUSD(total)}
    Divide among people: ${getAnswer}
    Split between how many people: ${getCountPerson}
    Each person pays: ${calcPerPerson(getCountPerson, total)}
    -----------------------------
    `)

    rl.close()
})()