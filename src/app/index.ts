import * as readline from "readline";
import { 
  questions, 
  calcTip, 
  calcAmount,
  checkedAnswer,
  checkedPerson,
  printResult
} from "../utils";
import { checkedAmount } from "../utils/checked";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (q: string): Promise<string> => {
    return new Promise(r => rl.question(q, r))
}

(async () => {
    const getCheckedAmount = await checkedAmount(question, questions.check);
    const getAnswer = await checkedAnswer(question, questions.split);
    const getCountPerson = 
      getAnswer === "yes" 
        ? await checkedPerson(question, questions.people)
        : 1;

        
    const tipPercentage = parseFloat(await question(questions.tip));
    const total = calcTip(getCheckedAmount, tipPercentage);
    const tipAmount = calcAmount(total, getCheckedAmount);

    printResult({
      getCheckedAmount,
      tipPercentage,
      total,
      tipAmount,
      divideAmong: getAnswer,
      people: getCountPerson
    })

    rl.close()
})()