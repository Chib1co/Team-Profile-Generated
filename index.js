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
         employees.push(managerData)
    switch(data.addAnother){
        case 'Yes':
            chooseRole()
            break;
        case 'No':
            generateHtml()
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
                employees.push(engineerData);
            switch(data.addAnother){
                case 'Yes':
                    chooseRole()
                    break;
                    case 'No':
                        generateHtml()
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
                        employees.push(internData);
                switch(data.addAnother){
                    case 'Yes':                        
                        chooseRole()
                        break;
                    case 'No':
                        generateHtml()
                        break;
                                                                 
                    }
                    })
                    
};


function generateHtml(){
   let htmlHead = `<!DOCTYPE html>
   <html lang="en">
   
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
           integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
       <link rel="stylesheet" href="../team.css">
           <title>My Team</title>
   </head>
   
   <body>
       <header class="jumbotron jumbotron-fluid">
           <div class="container">
               <h1 class="display-4">
                   My Team
               </h1>
           </div>
       </header>`
    for (let index = 0; index < employees.length; index++) {
        if(employees[index].getRole() === 'Manager'){
    var managercardHtml = `<div class="container">
          <div class="row d-flex justify-content-center" id="teamContainer">
    <div class="col-4">
        <div class="card bg-danger border-light shadow mb-3" style="max-width: 18rem; height: 22rem;">
            <div class="card-header text-white">
                <h2 id="name">${employees[index].name}</h2>
                <h3 class="role">${employees[index].getRole()}</h3>
            </div>
            <div class="card-body bg-light align-content-center flex-wrap">
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="id">${employees[index].id}</li>
                        <li class="list-group-item" id="email"><a href="mailto:${employees[index].email}">${employees[index].email}</a></li>
                        <li class="list-group-item" id="property">${employees[index].officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
         } else if(employees[index].getRole() === 'Engineer'){
            var engineercardHtml = `
      <div class="col-4">
          <div class="card bg-danger border-light shadow mb-3" style="max-width: 18rem; height: 22rem;">
              <div class="card-header text-white">
                  <h2 id="name">${employees[index].name}</h2>
                  <h3 class="role">${employees[index].getRole()}</h3>
              </div>
              <div class="card-body bg-light align-content-center flex-wrap">
                  <div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item" id="id">${employees[index].id}</li>
                          <li class="list-group-item" id="email"><a href="mailto:${employees[index].email}">${employees[index].email}</a></li>
                          <li class="list-group-item" id="property"><a href="https://github.com/${employees[index].github}">${employees[index].github}</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>`
        }else if(employees[index].getRole() === 'Intern'){
        var interncardHtml = `
  <div class="col-md-4">
      <div class="card bg-danger border-light shadow mb-3" style="max-width: 18rem; height: 22rem;">
          <div class="card-header text-white">
              <h2 id="name">${employees[index].name}</h2>
              <h3 class="role">${employees[index].getRole()}</h3>
          </div>
          <div class="card-body bg-light align-content-center flex-wrap">
              <div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item" id="id">${employees[index].id}</li>
                      <li class="list-group-item" id="email"><a href="mailto:${employees[index].email}">${employees[index].email}</a></li>
                      <li class="list-group-item" id="property">${employees[index].school}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>`
        }
        
     }
     let endHtml =`</body></html>`
     let outputHtml = htmlHead.concat(managercardHtml, engineercardHtml, interncardHtml, endHtml);
     fs.writeFileSync("./dist/output/team.html", outputHtml, err => { if (err) throw err; })
     console.log("output success");

} ;    
   
// add the answer data to an array or string
// 4. after adding the data, it comes back to first function
// 5. if user chooses to stop adding employees, then call a function that uses 
//all the data from the various prompts and use it to write a file


