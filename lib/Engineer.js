// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:


const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer'
    }

    // * `github`&mdash;GitHub username
    // * `getGithub()`
    // * `getRole()`&mdash;overridden to return `'Engineer'`

}

module.exports = Engineer