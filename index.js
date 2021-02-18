const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//internal files
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//creating arrays
const employees = [];
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
        var managerData = new Manager(data.name, data.id, data.email, data.officeNumber);
         manager.push(managerData);
         employees.push(manager);
    switch(data.addAnother){
        case 'Yes':
            console.log(manager)
            chooseRole()
            break;
        case 'No':
            console.log(manager)
            getMainHtml()
            generateHtml()
            // generateManagerHtml()
            // generateEngineerHtml()
            // generateInternHtml()
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
                var engineerData = new Engineer(data.name, data.id, data.email, data.github);
                engineer.push(engineerData);
                employees.push(engineer);
            switch(data.addAnother){
                case 'Yes':
                    chooseRole()
                    break;
                    case 'No':
                        getMainHtml()
                        generateHtml()
                        // generateManagerHtml()
                        // generateEngineerHtml()
                        // generateInternHtml()
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
                    var internData = new Intern(data.name, data.id, data.email, data.school);
                        intern.push(internData);
                        employees.push(intern);
                switch(data.addAnother){
                    case 'Yes':                        
                        chooseRole()
                        break;
                    case 'No':
                        getMainHtml()
                        generateHtml()
                        // generateManagerHtml()
                        // generateEngineerHtml()
                        // generateInternHtml()
                        break;
                                                                 
                    }
                    })
                    
};

console.log(employees)
function generateHtml(){
    for (let index = 0; index < employees.length; index++) {
        const eachEmployee = employees[index];
    if(employees.getRole() === 'Manager'){
        let data = fs.readFileSync(`./src/html/managercard.html`, 'utf8')
        data = data.replace("nameHere", eachManager.name);
        data = data.replace("idHere", `ID: ${eachManager.id}`);
        data = data.replace("emailHere", `Email: <a href="mailto:${eachManager.email}">${eachManager.email}</a>`);
        data = data.replace("propertyHere", eachManager.officeNumber);
        fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
        console.log("manager Card appended");
    } else if(employees.getRole() === 'Engineer'){
        let data = fs.readFileSync(`./src/html/engineercard.html`, 'utf8')
        data = data.replace("nameHere", eachEngineer.name);
        data = data.replace("idHere", `ID: ${eachEngineer.id}`);
        data = data.replace("emailHere", `Email: <a href="mailto:${eachEngineer.email}">${eachEngineer.email}</a>`);
        data = data.replace("propertyHere", eachEngineer.github);
        fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
        console.log("Engineer Card appended");
    }else if(employees.getRole() === 'Intern'){
        let data = fs.readFileSync(`./src/html/interncard.html`, 'utf8')
        data = data.replace("nameHere", eachIntern.name);
        data = data.replace("idHere", `ID: ${eachIntern.id}`);
        data = data.replace("emailHere", `Email: <a href="mailto:${eachIntern.email}">${eachIntern.email}</a>`);
        data = data.replace("propertyHere", eachIntern.school);
        fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
        console.log("Intern Card appended");
    }
    }

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

// function generateHtml(){

//  function generateManagerHtml(){
// for (let index = 0; index < manager.length; index++) {
//     const eachManager = manager[index];
//     let data = fs.readFileSync(`./src/html/managercard.html`, 'utf8')
//     data = data.replace("nameHere", eachManager.name);
//     data = data.replace("idHere", `ID: ${eachManager.id}`);
//     data = data.replace("emailHere", `Email: <a href="mailto:${eachManager.email}">${eachManager.email}</a>`);
//     data = data.replace("propertyHere", eachManager.officeNumber);
//     fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
//     console.log("Card appended");
// }
//  }; 


//  function generateEngineerHtml(){
//     for (let index = 0; index < engineer.length; index++) {
//         const eachEngineer = engineer[index];
//         let data = fs.readFileSync(`./src/html/engineercard.html`, 'utf8')
//         data = data.replace("nameHere", eachEngineer.name);
//         data = data.replace("idHere", `ID: ${eachEngineer.id}`);
//         data = data.replace("emailHere", `Email: <a href="mailto:${eachEngineer.email}">${eachEngineer.email}</a>`);
//         data = data.replace("propertyHere", eachEngineer.github);
//         fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
//         console.log("Card appended");
//     }
//      };

// function generateInternHtml(){
//     for (let index = 0; index < intern.length; index++) {
//         const eachIntern = intern[index];
//         let data = fs.readFileSync(`./src/html/interncard.html`, 'utf8')
//         data = data.replace("nameHere", eachIntern.name);
//         data = data.replace("idHere", `ID: ${eachIntern.id}`);
//         data = data.replace("emailHere", `Email: <a href="mailto:${eachIntern.email}">${eachIntern.email}</a>`);
//         data = data.replace("propertyHere", eachIntern.school);
//         fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
//         console.log("Card appended");
//     }
// }


