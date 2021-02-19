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
         employees.push(managerData)
    switch(data.addAnother){
        case 'Yes':
            console.log(manager)
            chooseRole()
            break;
        case 'No':
            console.log(manager)
            // getMainHtml()
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
                employees.push(engineerData);
            switch(data.addAnother){
                case 'Yes':
                    chooseRole()
                    break;
                    case 'No':
                        // getMainHtml()
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
                        employees.push(internData);
                switch(data.addAnother){
                    case 'Yes':                        
                        chooseRole()
                        break;
                    case 'No':
                        // getMainHtml()
                        generateHtml()
                        // generateManagerHtml()
                        // generateEngineerHtml()
                        // generateInternHtml()
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
       fs.writeFileSync("./dist/output/team.html", htmlHead, err => { if (err) throw err; })
       console.log("head success");
    for (let index = 0; index < employees.length; index++) {
        if(employees[index].getRole() === 'Manager'){
    let managercardHtml = `<div class="container">
          <div class="row d-flex justify-content-center" id="teamContainer"></div>
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
                        <li class="list-group-item" id="email">${employees[index].email}</li>
                        <li class="list-group-item" id="property">${employees[index].officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>`
    fs.writeFileSync("./dist/output/team.html", managercardHtml, err => { if (err) throw err; })
      console.log("manager cards success")}
        else if(employees[index].getRole() === 'Engineer'){
            let engineercardHtml = `<div class="container">
            <div class="row d-flex justify-content-center" id="teamContainer"></div>
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
                          <li class="list-group-item" id="email">${employees[index].email}</li>
                          <li class="list-group-item" id="property">${employees[index].github}</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      </div>`
      fs.writeFileSync("./dist/output/team.html", engineercardHtml, err => { if (err) throw err; })
      console.log("engineer cards success")    
        }else if(employees[index].getRole() === 'Intern'){
        let interncardHtml = `<div class="container">
        <div class="row d-flex justify-content-center" id="teamContainer"></div>
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
                      <li class="list-group-item" id="email">${employees[index].email}</li>
                      <li class="list-group-item" id="property">${employees[index].school}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  </div>`
  fs.writeFileSync("./dist/output/team.html", interncardHtml, err => { if (err) throw err; })
  console.log("intern cards success")};
  let endHtml =`</body></html>`
  fs.writeFileSync("./dist/output/team.html", endHtml, err => { if (err) throw err; })
      console.log("end success");
}
};
      
    // if(employees[index].getRole() === 'Manager'){
    //  let managerCard = fs.readFileSync(`./src/html/managercard.html`, 'utf8')
    //     managerCard = `<div class="name">${employees[index].name}</div>`
    //     fs.appendFileSync("./dist/output/team.html", managerCard, err => { if (err) throw err; })
    //     console.log("manager Card appended");
    // } else if(employees[index].getRole() === 'Engineer'){
    //     let data = fs.readFileSync(`./src/html/engineercard.html`, 'utf8')
    //     data = data.replace("nameHere", eachEngineer.name);
    //     data = data.replace("idHere", `ID: ${eachEngineer.id}`);
    //     data = data.replace("emailHere", `Email: <a href="mailto:${eachEngineer.email}">${eachEngineer.email}</a>`);
    //     data = data.replace("propertyHere", eachEngineer.github);
    //     fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
    //     console.log("Engineer Card appended");
    // }else if(employees[index].getRole() === 'Intern'){
    //     let data = fs.readFileSync(`./src/html/interncard.html`, 'utf8')
    //     data = data.replace("nameHere", eachIntern.name);
    //     data = data.replace("idHere", `ID: ${eachIntern.id}`);
    //     data = data.replace("emailHere", `Email: <a href="mailto:${eachIntern.email}">${eachIntern.email}</a>`);
    //     data = data.replace("propertyHere", eachIntern.school);
    //     fs.appendFileSync("./dist/output/team.html", data, err => { if (err) throw err; })
    //     console.log("Intern Card appended");
    // }
    // }

// add the answer data to an array or string
// 4. after adding the data, it comes back to first function
// 5. if user chooses to stop adding employees, then call a function that uses 
//all the data from the various prompts and use it to write a file


// function getMainHtml() {
//     const htmlPath = path.join(__dirname, "src", "html", "main.html");

//     const html = fs.readFileSync(htmlPath, "utf-8");
//     return html;
// }
// console.log(getMainHtml)
// console.log(employees)

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


