#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate random number 
// 2) user input for guessing number
// 3) campare user input with computer generative number
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userguessnumber",
        type: "number",
        messsage: "please guess a number between 1-6:",
    },
]);
if (answer.userguessnumber === randomnumber) {
    console.log("congratulation! you win");
}
else {
    console.log("you guessed wrong number");
}
