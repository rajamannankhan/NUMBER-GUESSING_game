import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "guessednumber",
        type: "number",
        message: "ENTER THE NUMBER YOU'VE GUESSED",
    }
]);
if (randomnumber === answers.guessednumber) {
    console.log("CONGRATS YOU HAVE GUESSED RIGHT NUMBER");
}
else {
    console.log("YOU GUESSED WRONG NUMBER");
}
