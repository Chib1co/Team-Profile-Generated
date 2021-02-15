const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//internal files
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//creating arrays
const manager = [];
const engineer = [];
const intern = [];



// 1 create one inquirer prompt to ask which role
// 2 .then navigate to each function depend on which role they choose
// 3. depend of the role, having different question and after they answered it,

const chooseRole = () => {
    inquirer.prompt([
    {
        name: 'role',
        type: 'list',
        message: 'What is your role?',
        choices: ['manager', 'engineer', 'intern']
        }
    ])
.then ((data) => {
    console.log(data.role)
switch(data.role){
    case 'manager':
        runManagerQuestions()
        break;
    case 'engineer':
        runEngineerQuestions()
        break;
    case 'intern':
        runInternQuestions()
        break;
}
    });
};
chooseRole();
//prompt user input
const runManagerQuestions = () => {
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
                name: "officeNumber",
                type: "input",
                message: "Enter your office number",
            },
            {
            name: "addAnother",
            type: "list",
            message: "Add another team member?",
            choices: ["Yes", "No"],
        },

    ])
    .then ((data) => {
        console.log(data.addAnother)
    switch(data.addAnother){
        case 'Yes':
            chooseRole()
            break;
        case 'No':
            console.log(data.name)
            console.log(data.id)
            console.log(data.email)
            console.log(data.officeNumber)
            return new Manager(manager.length + 1, data.name, data.id, data.email, data.officeNumber)
            
        }
});
};
 const runEngineerQuestions = () => {
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
                    name: "github",
                    type: "input",
                    message: "Engineer, enter your github username:",
                    validate: function (answer) {
                        if (answer.length < 1) {
                            return console.log("A valid email is required.");
                        }
                        return true;
                    }
                   },
                   {
                    name: "addAnother",
                    type: "list",
                    message: "Add another team member?",
                    choices: ["Yes", "No"],
                },
        
            ])
            .then ((data) => {
                console.log(data.addAnother)
            switch(data.addAnother){
                case 'Yes':
                    chooseRole()
                    break;
                    case 'No':
                        // console.log(data.name)
                        // console.log(data.id)
                        // console.log(data.email)
                        // console.log(data.github)   
                    return new Engineer(engineer.length + 1, data.name, data.id, data.email, data.github)
                    }
                })
            
};


 const runInternQuestions = () => {
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
                        name: "school",
                type: "input",
                message: "Enter the school name you graduated",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("A valid email is required.");
                    }
                    return true;
                }
                       },
                
                       {
                        name: "addAnother",
                        type: "list",
                        message: "Add another team member?",
                        choices: ["Yes", "No"],
                    },
            
                ])
                .then ((data) => {
                    console.log(data.addAnother)
                switch(data.addAnother){
                    case 'Yes':
                        chooseRole()
                        break;
                    case 'No':
                        console.log(data.name)
                        console.log(data.id)
                        console.log(data.email)
                        console.log(data.school)
                        return new Intern(intern.length + 1, data.name, data.id, data.email, data.school)
                            
                        }
                    })
                    
};
// add the answer data to an array or string
// 4. after adding the data, it comes back to first function
// 5. if user chooses to stop adding employees, then call a function that uses 
//all the data from the various prompts and use it to write a file

    // function buildTeamList(teamMember) {
    //     switch(answer.role){
    //         case 'manager':
    //             var newMember = new Manager(teamMember.name, employees.length + 1, teamMember.id, teamMember.email, teamMember.officeNumber)
    //             break;
    //         case 'engineer':
    //             var newMember = new Engineer(teamMember.name, employees.length + 1, teamMember.id, teamMember.email, teamMember.github)
    //             break;
    //         case('intern'):
    //             var newMember = new Intern(teamMember.name, employees.length + 1, teamMember.id, teamMember.email, teamMember.school)
    //             break;
    //         default:
    //             console.log('please chose your role');
    
    //          employees.push(newMember)
    //     }
    //     switch(list.addAnother){
    //         case 'Yes':
    //             teamMember()
    //             break;
    //         case 'No':
    //             getMainHtml()
    //             break;

    //     }
         
    // };
    

//generate a html based on the user input
// function getMainHtml() {
//     const htmlPath = path.join(__dirname, "src", "html", "main.html");

//     const html = fs.readFileSync(htmlPath, "utf-8");
//     return html;
// }


// console.log(getMainHtml());

// const mainHtml = getMainHtml();
// const result = htmlParser.replaceTemplate(
//     mainHtml,
//     "{{ cards }}",
//     employees.role
// );
// for (let index = 0; index < employees.length; index++) {
//     const employee = employees[index];


//     let result = htmlParser.replaceTemplate(
//         mainHtml,
//         "{{ name }}",
//         employees.name
//     );

//     result = htmlParser.replaceTemplate(mainHtml, "{{ email }}", employees.email);
//     result = htmlParser.replaceTemplate(mainHtml, "{{ id }}", employees.id);


// console.log(result);
// const outputPath = path.join(__dirname, "dist", "output.html");

// fs.writeFileSync(outputPath, result);
//     };