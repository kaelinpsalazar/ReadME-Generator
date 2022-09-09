// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

inquirer
    .prompt ([
    {
        type:'input',
        message:'What is the title of the project?',
        name:'title',
    },
    {
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

    }
])
.then(response =>{
    console.log(response)
    let readEl = `<img src = 'https://img.shields.io/badge/${response.liscense}-blue.svg'>
    <h1>${response.title}</h1>
    <h2>## Description</h2>
    <p>${response.description}</p>
    <h2>## How to install</h2>
    <p>${response.installation}</p>
    <h2>## How to use</h2>
    <p>${response.usage}</p>
    <h2>## How to contribute</h2>
    <p>${response.contributers}</p>
    <h2>##Test Instructions</h2>
    <p>${response.testing}</p>
    <h2>## Questions</h2>
    <p>You can reach out through my Github at: ${response.github}</p>
    <p>You can also reach out at my email at: ${response.email}</p>`



		fs.writeFile("README.md", readEl, error => console.log(error))
})
.catch(error => console.log(error))