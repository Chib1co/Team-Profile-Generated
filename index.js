const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//internal files
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let employees = [];
//prompt user input
function teamMember() {
    // Ask questions to gather information about employees.

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
            },
     
        {
            when: list => {
                return list.role == "Manager"
            },
            type: "input",
            name: "officeNumber",
            message: "Enter your office number",
            validate: async (input) => {
                if (input == "" || /\s/.test(input)) {
                    return "Please enter a valid office number";
                }
                return true;
            }
        },
        {
            when: list => {
                return list.role == "Engineer"
            },
            type: "input",
            name: "github",
            message: "Engineer, enter your github username:",
            validate: async (input) => {
                if (input == "" || /\s/.test(input)) {
                    return "Please enter a valid GitHub username";
                }
                return true;
            }
        },
        {
            when: list => {
                return list.role == "Intern"
            },
            type: "input",
            name: "school",
            message: "Enter the school name you graduated",
            validate: async (input) => {
                if (input == "" || /\s/.test(input)) {
                    return "Please enter a valid school name";
                }
                return true;
            }
        },
        {
            type: "list",
            name: "addAnother",
            message: "Add another team member?",
            choices: ["Yes", "No"]
        }
    ]);
}
function buildTeamList() {
    inquire.prompt(teamMember).then(employeeInfo => {
        if (employeeInfo.role == "Engineer") {
            var newMember = new Engineer(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.github);
        }else if (employeeInfo.role == "Manager") {
            var newMember = new Manager(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.officeNumber);
        }  
        else {
            var newMember = new Intern(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.school);
        }
        teamList.push(newMember);
        if (employeeInfo.addAnother === "Yes") {
            console.log(" ");
            buildTeamList();
        } else {
            buildHtmlPage();
        }
    })
}
            


 // Depending on the response, loop through questions to gather information and save to appropriate object
          

//generate a html based on the user input


function generateFile() {
    fs.writeFileSync(outputPath, render(employees),"utf-8")
}