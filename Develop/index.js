const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the application',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter application description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide steps required to install your application', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application',
            choices: ['MIT', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for the community to contribute to your application'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instruction of how to test your application'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ])
}

// function call to initialize program
init()
    .then();
