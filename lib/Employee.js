// The first class is an `Employee` parent class with the following properties and methods:

// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.
// Finally, although it’s not a requirement, 
// consider adding validation to ensure that user input is in the proper format.

class Employee{
    constractor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getname(){
        return this.name;
    } 
    getId(){
        return this.id;

    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return Employee.getname;
    }

}

module.exports = Employee;