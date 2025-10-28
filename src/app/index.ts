import * as readline from "readline";
import { toUSD, questions } from "../utils";

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
    const total = check + (check * tipPercentage / 100);
    const tipAmount = total - check;

    let person = 1;
    let divideAmongPeople = null;

    const everyoneMustPay = (person: number):string | number => {
       if (person === 0) return 1;

       return toUSD(total / person)
    };

    let answer = "";
    while (answer !== "yes" && answer !== "no") {
        answer = (await question(questions.split)).trim().toLowerCase()
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
    Each person pays: ${everyoneMustPay(person)}
    -----------------------------
    `)

    rl.close()
})()