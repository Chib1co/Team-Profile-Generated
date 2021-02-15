const Engineer = require('../lib/Engineer')

//we use describe to define test suite
// describe('Testing getGithub function', () => {
//     describe('getGithub', () => {
//         it('should should get github name', () => {
//            const testGithubname = 'chib1co'
//            const e = 'chib1co'
//            const result = new Engineer().getGithub(testGithubname)

//            expect(result).toEqual(e)  
//         })
//     })
// })

test("Can get office number", () => {
    const e = new Engineer("tomomi", "1", "tomomi@test.com", "chib1co")
    expect(e.getGithub()).toBe("chib1co");
  });