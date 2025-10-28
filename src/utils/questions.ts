interface IQuestions {
  check: string;
  tip: string;
  split: string;
  people: string;
}


export const questions:IQuestions= {
  check: "How high is the check? (e.g., 50.00): ",
  tip: "What percentage of tip will you give? (e.g., 15 for 15%): ",
  split: "Should the bill be split among multiple people? (yes/no): ",
  people: "How many people will split the bill?: "
};