const Manager = require('../lib/Manager')

//we use describe to define test suite
describe('Testing getOfficeNumber function', () => {
    describe('getOfficeNumber', () => {
        it('it should get officenumber', () => {
           const testNum = 100
           const e = 100
           const result = new Manager().getname(testNum)

           expect(result).toEqual(e)  
        })
    })
})
