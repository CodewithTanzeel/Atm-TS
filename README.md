# Bank Transaction Application

This Node.js application simulates a basic banking transaction system. It allows users to perform transactions such as Fast Cash or Withdraw from their account. The application uses the `inquirer` package to prompt users for input and process their requests.

## Features

- **User Authentication**: Users enter their ID and PIN.
- **Account Selection**: Choose between Current or Saving accounts.
- **Transaction Types**: Select between Fast Cash or Withdraw.
- **Amount Selection**: Enter or select an amount based on the transaction type.
- **Balance Check**: Simulates balance and checks if the transaction can be processed.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/bank-transaction-app.git
   cd bank-transaction-app
   ```

2. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

## Usage

1. **Run the Application:**

   Execute the script using Node.js:

   ```bash
   node app.js
   ```

2. **Provide Input:**

   The application will prompt you to enter your ID, PIN, account type, transaction type, and amount. Based on your inputs, it will simulate a balance check and display the remaining balance or an error message.

## Code Overview

- **User Input:**

  ```typescript
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
      message: "Select Your account type:",
    },
    {
      type: "list",
      name: "transactionType",
      choices: ["Fast Cash", "Withdraw"],
      message: "Select Your Transaction",
      when(answers) {
        return answers.accountType;
      },
    },
    {
      type: "list",
      name: "amount",
      choices: ["500", "1000", "2000", "5000"],
      message: "Select Your amount",
      when(answers) {
        return answers.transactionType == "Fast Cash";
      },
    },
    {
      type: "number",
      name: "amount",
      message: "Enter Your amount",
      when(answers) {
        return answers.transactionType == "Withdraw";
      },
    },
  ]);
  ```

  Prompts the user to input required details and select options for the transaction.

- **Balance Check:**

  ```typescript
  if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
      const remaining = balance - EnteredAmount;
      console.log("Your remaining balance is", remaining);
    } else {
      console.log("Insufficient Balance");
    }
  }
  ```

  Simulates a balance check and processes the transaction based on the user's inputs.

## Example

**Sample Interaction:**

```bash
Kindly enter your Id: 12345
Kindly enter your PIN: 6789
Select Your account type: Saving
Select Your Transaction: Fast Cash
Select Your amount: 1000
```

**Output:**

```
Your remaining balance is 9999000
```

## Error Handling

- **Insufficient Balance**: If the balance is less than the entered amount, an error message is displayed.
- **Invalid Inputs**: The application assumes valid input types and values. Incorrect inputs may lead to unexpected behavior.

## Contributing

1. **Fork the Repository:**

   Click the "Fork" button at the top right of this repository's page.

2. **Create a New Branch:**

   ```bash
   git checkout -b feature/new-feature
   ```

3. **Commit Your Changes:**

   ```bash
   git add .
   git commit -m "Add new feature or fix"
   ```

4. **Push to Your Fork:**

   ```bash
   git push origin feature/new-feature
   ```

5. **Submit a Pull Request:**

   Go to the original repository and submit a pull request from your forked repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, please reach out to [your-email@example.com](mailto:your-email@example.com).
```

