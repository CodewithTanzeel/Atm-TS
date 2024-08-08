import inquirer from "inquirer";
interface ansType {
  userId: string;
  userPin: number;
  accountType: string;
  transactionType: string;
  amountType: number;
  amount:number
} //The required values by the bank from the user as decleared above !!!

const answers: ansType = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "Kindly enter your Id:",
  },
  {
    type: "number",
    name: "userPin",
    message: "Kindly enter your PIN:",
  },
  {
    type: "list",
    name: "accountType",
    choices: ["Current", "Saving"],
    message: " Select Your account type:",
  },
  {
    type: "list",
    name: "transactionType",
    choices: ["Fast Cash", "Withdraw"],
    message: " Select Your Transaction ",
    when(answers) {
      return answers.accountType;
    },
  },
  {
    type: "list",
    name: "amount",
    choices: ["500", "1000", "2000", "5000"],
    message: " Select Your amount ",
    when(answers) {
      return answers.transactionType == "Fast Cash";
    },
  },
  {
    type: "number",
    name: "amount",
    message: " Enter Your amount ",
    when(answers) {
      return answers.transactionType == "Withdraw";
    },
  },
]);//Above code is multiple objects !

if (answers.userId && answers.userPin) {
  const balance = Math.floor(Math.random() * 10000000000);//Here math floor is user to get rounded off values which is further multiplied as Declared above!!!!
  console.log(balance);
  const EnteredAmount = answers.amount;
  if (balance >= EnteredAmount) {
    const remianing = balance - EnteredAmount;// If Balance less then equal to  enteramount then this if will run!!
    console.log("Your remaining balance is", remianing);
  } else {
    console.log("Insufficient Balance");//This will execute when the above conditions doesnt met!!!!
  }
}
