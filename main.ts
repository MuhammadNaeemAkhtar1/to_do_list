#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n\t Welcome to code with Naeem Akhtar-Todo-List Application\n");
// While Loop
while (conditions) {
  let addTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your New Task:",
    },
  ]);
  todoList.push(addTask.task);
  console.log(`${addTask.task} Task added in Todo-List successfully`);
  let addMoreTask = await inquirer.prompt([
    {
      name: "addmore",
      type: "confirm",
      message: "Do you want to add more task?",
      default: "false",
    },
  ]);
  conditions = addMoreTask.addmore;
}
console.log(`Your updated Todo - List: ${todoList}`);
