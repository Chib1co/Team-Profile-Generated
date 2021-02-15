const Manager = require('../lib/Manager')



test("Can get office number", () => {
    const e = new Manager("tomomi", "1", "tomomi@test.com", "978876086")
    expect(e.getOfficeNumber()).toBe("978876086");
  });