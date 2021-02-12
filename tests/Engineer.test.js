const Engineer = require('../lib/Engineer')

//we use describe to define test suite
describe('Testing getGithub function', () => {
    describe('getGithub', () => {
        it('should should get github name', () => {
           const testGithubname = 'chib1co'
           const e = 'chib1co'
           const result = new Engineer().getname(testGithubname)

           expect(result).toEqual(e)  
        })
    })
})

