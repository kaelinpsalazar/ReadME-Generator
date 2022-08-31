// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require(inquirer);
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type:'input',
            message:'What is the title of the project?',
            name:'title',


            type:'input',
            message: 'Describe what the project does?',
            name: 'Description',

            type:'input',
            message:'installation Instructions:',
            name:'installation',

            type: 'input',
            message:'How does one use it?',
            name: 'usage',

            type: 'list',
            message: 'Which liscenses do you need?',
            choices: [
                "Apache 2.0",
                "GNU GPL v3",
                "MIT",
                "ISC",
                "None of the above",
            ],


            type:'input',
            message:'How you can contribute:',
            name: 'contributers',
            
            type:'input',
            message:'Test Instructions:',
            name: 'testing',

            type:'input',
            message:'Github Username:',
            name: 'github',

            type:'input',
            message:'Email Address:',
            name: 'email',

        }
    ])
// // What was your motivation?
// Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// What problem does it solve?
// What did you learn?
// What makes your project stand out?


// activity 10
// TODO: Create a function to write README file
.then((data) => {
    let userData = JSON.stringify(data)

    fs.writeFile("./readme-output/README.md", userData, (error) => {
        error ? console.error(error) : console.log("Success!");
    });
});

// File system 
// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
