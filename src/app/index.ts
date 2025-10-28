import * as readline from "readline";
import { 
  questions, 
  calcTip, 
  calcAmount,
  checkedAnswer,
  checkedPerson,
  printResult
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

    printResult({
      check,
      tipPercentage,
      total,
      tipAmount,
      divideAmong: getAnswer,
      people: getCountPerson
    })

    rl.close()
})()