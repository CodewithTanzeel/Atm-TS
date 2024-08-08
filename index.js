import inquirer from "inquirer";
const answers = await inquirer.prompt([
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
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log("Your remaining balance is", remianing);
    }
    else {
        console.log("Insufficient Balance");
    }
}
