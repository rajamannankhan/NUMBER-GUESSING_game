#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const randomnumber= Math.floor(Math.random()*6+1);
const answers= await inquirer.prompt([{
    name:"guessednumber",
    type:"number",
    message:chalk.blue("ENTER THE NUMBER YOU'VE GUESSED"),

}
])
if (randomnumber===answers.guessednumber) {
    console.log(chalk.yellow("CONGRATS YOU HAVE GUESSED RIGHT NUMBER"));   
}else{
    console.log(chalk.red("YOU GUESSED WRONG NUMBER"));
    
}