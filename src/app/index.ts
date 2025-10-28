import * as readline from "readline";
import { 
  questions, 
  calcTip, 
  calcAmount,
  checkedAnswer,
  checkedPerson,
  checkedAmount,
  checkedPercentage,
  printResult,
} from "../utils";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (q: string): Promise<string> => {
    return new Promise(r => rl.question(q, r))
}

(async () => {
    const getCheckedAmount = await checkedAmount(question, questions.check);
    const getPercentage = await checkedPercentage(question, questions.percentage);
    const getAnswer = await checkedAnswer(question, questions.split);  
    const getCountPerson = 
      getAnswer === "yes" 
        ? await checkedPerson(question, questions.people)
        : 1;

    const total = calcTip(getCheckedAmount, getPercentage);
    const tipAmount = calcAmount(total, getCheckedAmount);

    printResult({
      getCheckedAmount,
      getPercentage,
      total,
      tipAmount,
      divideAmong: getAnswer,
      people: getCountPerson
    })

    rl.close()
})();