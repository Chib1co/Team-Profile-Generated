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
            name: "addAnother",
            type: "list",
            message: "Add another team member?",
            choices: ["Yes", "No"]
        },
    ])
    .then(answers => {
        if(answers.role === 'manager'){
            runManagerQuestions()
        }
    })
    .then(data => {
        if(data.role === 'engineer'){
            runEngineerQuestions()
        }
    })
    .then(data => {
        if(data.role === 'Intern'){
            runInternQuestions()
        }
    });



 const runManagerQuestions = () => {
    inquirer.prompt([ 
    {                 
        name: "officeNumber",
        type: "input",
        message: "Enter your office number",
    }
    ])
    .then((answer) => {
        buildTeamList()
        getMainHtml()
    })
    } 
    };

 const runEngineerQuestions = () => {
        inquirer.prompt([ 
        {                 
            name: "github",
            type: "input",
            message: "Engineer, enter your github username:",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid email is required.");
                }
                return true;
            }
        }
        ])
        .then((answer) => {
            buildTeamList()
            getMainHtml()
        })
        }; 
        
const runInternrQuestions = () => {
            inquirer.prompt([ 
            {                 
                name: "school",
                type: "input",
                message: "Enter the school name you graduated",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid email is required.");
                    }
                    return true;
                }
            }
            ])
            .then((answer) => {
                buildTeamList()
                getMainHtml()
            })
            }; 
            
  
    teamMember()

    function buildTeamList(teamMember) {
        switch(list.role){
            case 'manager':
                var newMember = new Manager(teamMember.name, employees.length + 1, teamMember.id, teamMember.email, teamMember.officeNumber)
                break;
            case 'engineer':
                var newMember = new Engineer(teamMember.name, employees.length + 1, teamMember.id, teamMember.email, teamMember.github)
                break;
            case('intern'):
                var newMember = new Manager(teamMember.name, employees.length + 1, teamMember.id, teamMember.email, teamMember.school)
                break;
            default:
                console.log('please chose your role');
    
             employees.push(newMember)
        }
        switch(list.addAnother){
            case 'Yes':
                teamMember()
                break;
            case 'No':
                getMainHtml()
                break;

        }
         
    };
    //   buildTeamList()      

//generate a html based on the user input
function getMainHtml() {
    const htmlPath = path.join(__dirname, "src", "html", "main.html");

    const html = fs.readFileSync(htmlPath, "utf-8");
    return html;
}


// console.log(getMainHtml());

// const mainHtml = getMainHtml();
// const result = htmlParser.replaceTemplate(
//     mainHtml,
//     "{{ cards }}",
//     employees.role
// );
for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];


    let result = htmlParser.replaceTemplate(
        mainHtml,
        "{{ name }}",
        employees.name
    );

    result = htmlParser.replaceTemplate(mainHtml, "{{ email }}", employees.email);
    result = htmlParser.replaceTemplate(mainHtml, "{{ id }}", employees.id);


console.log(result);
const outputPath = path.join(__dirname, "dist", "output.html");

fs.writeFileSync(outputPath, result);
    };
