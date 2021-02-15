const Intern = require('../lib/Intern')

test("Can get Intern7s school name", () => {
    const e = new Intern("tomomi", "1", "tomomi@test.com", "SCU")
    expect(e.getSchool()).toBe("SCU");
  });
