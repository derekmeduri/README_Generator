//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your project.",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please decribe the purpose, use and functionality of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the required steps to install this application.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please describe the use allowed for this application (i.e. personal or commericial).",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select applicable license for your project.",
    choices: [
      "Apache 2.0",
      "GNU General Public v3.0",
      "MIT",
      "BSD 2-Clause 'Simplified'",
      "BSD 3-Clause 'New' or 'Revised'",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Unniversal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General PUblic License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "none",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "name",
    message: "Please enter your full name.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email adress.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please enter any contributors to this project.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide examples on how to run tests if applicabale.",
  },
];

//write a README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating a README file...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}

//calling app
init();
