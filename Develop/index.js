// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const createReadME = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type:'input',
            message:'What is the title of the project?',
            name:'title',
        },
        {git
            type:'input',
            message: 'Describe what the project does?',
            name: 'Description',
        },
        {

            type:'input',
            message:'installation Instructions:',
            name:'installation',
        },
        {
            type: 'input',
            message:'How does one use it?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which liscenses do you need?',
            choices: [
                "Apache_2.0",
                "GPLv3",
                "MIT",
                "ISC",
                "None of the above",
            ],
            name: 'liscense',
        },
        {
            type:'input',
            message:'How you can contribute:',
            name: 'contributers',
        },
        {            
            type:'input',
            message:'Test Instructions:',
            name: 'testing',
        },
        {
            type:'input',
            message:'Github Username:',
            name: 'github',
        },
        {
            type:'input',
            message:'Email Address:',
            name: 'email',

        },
    ])



// activity 10
// TODO: Create a function to write README file
// inquirer.prompt()
.then((data) => {



    fs.writeFile("./newREADME.md", createReadME(data), (error) => {
        error ? console.error(error) : console.log("Success!");
    });
});

