const Employee = require('../lib/Employee')

//we use describe to define test suite
describe('Testing getname function', () => {
    describe('getname', () => {
        it('should should get employee name', () => {
           const testname = 'tomomi'
           const e = 'tomomi'
           const result = new Employee().getname(testname)

           expect(result).toEqual(e)  
        })
    })
    describe('testing getId function', () => {
        it('it should give ID number', () => {
            const testid = 1;
            const e = 1;
            const result = new Employee().getId(testid);

            expect(result).toEqual(e)
        })
    })
    describe('testing getEmail function', () => {
        it('it should give email address', () => {
            const testEmail = 'xxxx@gmail.com';
            const e = 'xxxx@gmail.com';
            const result = new Employee.getEmail(testEmail);

            expect(result).toEqual(e)
        })
    })
})

