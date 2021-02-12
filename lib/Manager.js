// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`




const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager'
    }



}

module.exports = Manager