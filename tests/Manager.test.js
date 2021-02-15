const Manager = require('../lib/Manager')

//we use describe to define test suite
// describe('Testing getOfficeNumber function', () => {
//     describe('getOfficeNumber', () => {
//         it('it should get officenumber', () => {
//            const testNum = 100
//            const e = 100
//            const result = new Manager().getOfficeNumber(testNum)

//            expect(result).toEqual(e)  
//         })
//     })
// })

test("Can get office number", () => {
    const e = new Manager("tomomi", "1", "tomomi@test.com", "978876086")
    expect(e.getOfficeNumber()).toBe("978876086");
  });