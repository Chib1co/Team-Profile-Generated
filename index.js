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
            var managerData = new Manager(data.name, data.id, data.email, data.officeNumber);
            manager.push(managerData);
            console.log(manager)
            chooseRole()
            break;
        case 'No':
            var managerData = new Manager(data.name, data.id, data.email, data.officeNumber);
            manager.push(managerData);
            console.log(manager)
            getMainHtml()
            generateManagerHtml()
            break;
            
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
                    var engineerData = new Engineer(data.name, data.id, data.email, data.github);
                    engineer.push(engineerData);
                    chooseRole()
                    break;
                    case 'No':
                    var engineerData = new Engineer(data.name, data.id, data.email, data.github);
                    engineer.push(engineerData);
                    getMainHtml()
                    generateEngineerHtml()
                    break;
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
                        var internData = new Intern(data.name, data.id, data.email, data.school);
                        intern.push(internData);
                        chooseRole()
                        break;
                    case 'No':
                        var internData = new Intern(data.name, data.id, data.email, data.school);
                        intern.push(internData);
                        getMainHtml() 
                        generateInternHtml()
                        break;                                            
                    }
                    })
                    
};


// add the answer data to an array or string
// 4. after adding the data, it comes back to first function
// 5. if user chooses to stop adding employees, then call a function that uses 
//all the data from the various prompts and use it to write a file


function getMainHtml() {
    const htmlPath = path.join(__dirname, "src", "html", "main.html");

    const html = fs.readFileSync(htmlPath, "utf-8");
    return html;
}
console.log(getMainHtml)

// function writeToFile(file, data) {
//     fs.writeFile(file, data, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Success!");
//     })
// }
function generateManagerHtml(){
for (let index = 0; index < manager.length; index++) {
    const eachManager = manager[index];
    console.log(eachManager)
    fs.writeFile(__dirname, "dist", "team.html", function (err) {
                 if (err) {
                     return console.log(err);
                 }
                 console.log("Success!");
             })
}
 };

 function generateEngineerHtml(){
    for (let index = 0; index < engineer.length; index++) {
        const eachEngineer = engineer[index];
        console.log(eachEngineer)
    }
     };

function generateInternHtml(){
        for (let index = 0; index < intern.length; index++) {
            const eachIntern = intern[index];
            console.log(eachIntern)
        }
         };
//     let result = htmlParser.replaceTemplate(
//         mainHtml,
//         "{{ name }}",
//         manager.name
//     );

//     result = htmlParser.replaceTemplate(mainHtml, "{{ email }}", manager.email);
//     result = htmlParser.replaceTemplate(mainHtml, "{{ id }}", manager.id);


// console.log(result);
// const outputPath = path.join(__dirname, "dist", "output.html");

// fs.writeFileSync(outputPath, result);
//     }
