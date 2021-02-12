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
const teamMember = () => {
 inquirer.prompt([
// function teamMember(){
//     const questions = [
           {
                name: "name",
                type: "input",
                message: "What is your name?",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid name is required.");
                    }
                    return true;
                }
            },
            {
                name: "id",
                type: "input",
                message: "What is your employee id?",     
            },
            {
                name: "email",
                type: "input",
                message: "What is your email?",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid email is required.");
                    }
                    return true;
                }
            },
            {
                name: 'role',
                type: 'list',
                message: 'What is your role?',
                choices: ['manager', 'engineer', 'intern']
            },
     
        {
            when: list => {
                return list.role == "Manager"
            },
            name: "officeNumber",
            type: "input",
            message: "Enter your office number",
        },
        {
            when: list => {
                return list.role == "Engineer"
            },
            name: "github",
            type: "input",
            message: "Engineer, enter your github username:"
        },
        {
            when: list => {
                return list.role == "Intern"
            },
            name: "school",
            type: "input",
            message: "Enter the school name you graduated",
        }, 
        {
            name: "addAnother",
            type: "list",
            message: "Add another team member?",
            choices: ["Yes", "No"]
        },
    ])
    .then((answer) => {
        console.log(answer.name)
    })
    }; teamMember()

function buildTeamList(teamMember) {
    switch(list.role){
        case 'manager':
            console.log('this person is manager')
            break;
        case 'engineer':
           console.log('engineer')
           break;
        case('intern'):
            console.log('intern')
            break;
        default:
            console.log('please chose your role')

        // inquirer.prompt(teamMember).then(answer => {
        //     if (answer.role == "Engineer") {
        //         var newMember = new Engineer(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.github);
        //     }else if (answer.role == "Manager") {
        //         var newMember = new Manager(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.officeNumber);
        //     }  
        //     else {
        //         var newMember = new Intern(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.school);
        //     }
        //     teamList.push(newMember);
        //     if (employeeInfo.addAnother === "Yes") {
        //         console.log(" ");
        //         buildTeamList();
        //     } else {
        //         buildHtmlPage();
        //     }
        // })
    
    }
}; buildTeamList()
//    buildTeamList()         

//generate a html based on the user input


function generateFile() {
    fs.writeFileSync(outputPath, render(employees),"utf-8")
}