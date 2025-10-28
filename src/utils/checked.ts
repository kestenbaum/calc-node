const checkedAnswer = async (
  ask: (q: string) => Promise<string>,
  question: string
): Promise<string> => {
  let answer = "";
  while (answer !== "yes" && answer !== "no") {
    answer = (await ask(question)).trim().toLowerCase();
    if (answer !== "yes" && answer !== "no") {
      console.log("You must choose yes or no");
    }
  }

  return answer;
};

const checkedPerson = async (
  ask: (q: string) => Promise<string>,
  question: string
): Promise<number> => {
  let count = 1;

  while (true) {
    const input = await ask(question);
    const parsed = parseInt(input);

    if (!isNaN(parsed) && parsed >= 1) {
      count = parsed;
      break;
    } else {
      console.log("Please enter a valid number greater than or equal to 1.");
    }
  }

  return count;
}

export {
    checkedAnswer,
    checkedPerson
}