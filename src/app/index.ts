import * as readline from "readline";
import { 
  questions, 
  calcPercentageAmount,
  calcPerPerson,
  checkedAnswer,
  checkedPerson,
  checkedAmount,
  checkedPercentage,
  printResult,
  calcPercentage
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
  const answer = await checkedAnswer(question, questions.split);              
  const people = answer === "yes" ? await checkedPerson(question, questions.people) : 1;
  const total = calcPercentage(getCheckedAmount, getPercentage); 
  const tipAmount = calcPercentageAmount(total, getCheckedAmount); 
  const perPerson = calcPerPerson(people, total);

    printResult({
      getCheckedAmount,
      getPercentage,
      total,
      tipAmount,
      divideAmong: answer,
      people,
      perPerson
    })

    rl.close()
})();