const Engineer = require('../lib/Engineer')

)

test("Can get office number", () => {
    const e = new Engineer("tomomi", "1", "tomomi@test.com", "chib1co")
    expect(e.getGithub()).toBe("chib1co");
  });