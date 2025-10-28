import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (q: string): Promise<string> => {
    return new Promise(r => rl.question(q, r))
}

const toUSD = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value)
}

(async () => {
    const check = parseFloat(await question("How high is the check?"));
    const tipPercentage = parseFloat(await question("What percentage of tip will you give?"));
    const total = check + (check * tipPercentage / 100);
    const tipAmount = total - check;

    let person = 0;
    let divideAmongPeople = null;

    const everyoneMustPay = (person: number):string | number => {
       if (person === 0) return 1;

       return toUSD(total / person)
    };

    let answer = "";
    while (answer !== "yes" && answer !== "no") {
        answer = (await question("Should the bill be split among multiple people? (yes/no)")).trim().toLowerCase()
    }

    if (answer === "yes") {
        person = parseFloat(await question("How many people will split the bill?"))
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