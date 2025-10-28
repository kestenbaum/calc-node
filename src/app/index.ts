import * as readline from "readline";
import { 
  toUSD, 
  questions, 
  calcTip, 
  calcAmount,
  calcPerPerson
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
    let error:string = "You must choose yes or no."
    let answer: string = "";
    let person = 1;
    let divideAmongPeople = null;

    while (answer !== "yes" && answer !== "no") {
        answer = (await question(questions.split)).trim().toLowerCase()
        console.log(error)
    }

    if (answer === "yes") {
        person = parseFloat(await question(questions.people))
        divideAmongPeople = "yes"
    } else  {
       divideAmongPeople = "no"
    }
        
    console.log(
    `--- Tip Calculation Summary ---
    Check Amount:${toUSD(check)}
    Tip Percentage: ${tipPercentage}%
    Tip Amount: ${toUSD(tipAmount)}
    Total Bill: ${toUSD(total)}
    Divide among people: ${divideAmongPeople}
    Split between how many people: ${person}
    Each person pays: ${calcPerPerson(total, person)}
    -----------------------------
    `)

    rl.close()
})()