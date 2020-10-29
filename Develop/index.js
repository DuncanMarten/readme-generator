const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter name of application',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter application title!');
                return false;
            }
        }
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
        validate: instInput => {
            if (instInput) {
                return true;
            } else {
                console.log('Please enter application installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please enter application usage information!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: ['MIT', 'GPL-3.0', 'APACHE-2.0', 'MPL-2.0', 'EPL-2.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license for your application!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for the community to contribute to your application',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('Please enter application contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instruction of how to test your application',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter application test instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// function to write README file
const writeToFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
        }
    })
}

// function to initialize program
const init = () => {
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
