// TODO: Include packages needed for this applicationno
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require( "util");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usefaq',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributefaq',
        message: 'What does the user need to know about contributing to the repo?'
    },
];

// TODO: Create a function to write README file
// fs application
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        // If there is an error, will report an error.
        // If there is no error, will utput a message to indicate the markdown file has been successfully created.
        err ? console.error(err) : console.log(`Your ${data.title} README.md file has been created.`)
    );
}
// TODO: Create a function to initialize app
function init() {
    // Asks the user questions to complete the markedown file
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        // Displays answers to questions
        console.log(answers);
        // Creates the markdown file based on the answers provided
        writeToFile('README.md', data);
    })
}

// Function call to initialize app
init();
