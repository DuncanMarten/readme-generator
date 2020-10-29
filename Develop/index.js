const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter name of application'
    },
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
        choices: ['MIT', 'GPL-3.0', 'APACHE-2.0', 'MPL-2.0', 'EPL-2.0']
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
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) {
            console.log(err);
        }
    })
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
    .then(applicationData => {
        return generateMarkdown(applicationData);
    })
    .then(readme => {
        return writeToFile(readme);
    });
