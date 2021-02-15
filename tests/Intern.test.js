const Intern = require('../lib/Intern')

//we use describe to define test suite
describe('Testing getSchool function', () => {
    describe('getSchool', () => {
        it('should should get school name', () => {
           const testSchool = 'SCU'
           const e = 'SCU'
           const result = new Intern().getSchool(testSchool)

           expect(result).toEqual("SCU")  
        })
    })
})

