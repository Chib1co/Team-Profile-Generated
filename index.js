const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const fs = requirer('fs');
const path = reqquire('path');

//internal files
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let employees = [];
//prompt user input
function teamMember() {
    // Ask questions to gather information about manager. Save to an manager object.
    

        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
                validate: confirmName
            },
            {
                type: "input",
                message: "What is your employee id?",
                name: "id",
                validate: confirmNumber 
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
                validate: validateEmail
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is your role?',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then(function (answers) {
            let employee = new Employee(answers.name, answers.id, answers.email, answers.role);
            engagementTeam.push(Employee)
            chooseMemberNext()
        })
        .catch(function(err) {
            console.log(err);
          });

        if ( employee.amswer.role === 'Engineer') {

            inquirer.prompt([
            {
                    type: "input",
                    message: "What is your your GitHub username?",
                    name: "github",
                    validate: confirmName
                }
            ])

                .then(function (answers) {
                    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    engagementTeam.push(engineer);
                    chooseMemberNext();
                })
                .catch(function(err) {
                    console.log(err);
                  });
                }
            

 

//adding more team member
          async function chooseMemberNext() {
            try {

                let teamChoice = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'team',
                        message: 'Which type of team member would you like to add',
                        choices: ['Manager', 'Engineer', 'Intern', 'I don/t want to add anymore team members.']
                    }
                ]);
            
          // Depending on the response, loop through questions to gather information and save to appropriate object
          

//generate a html based on the user input


function generateFile() {
    fs.writeFileSync(outputPath, render(employees),"utf-8")
}