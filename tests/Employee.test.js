const Employee = require('../lib/Employee')

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "tomomi";
    const e = new Employee("tomomi", "1", "tomomi@test.com");
    expect(e.getname()).toBe(name);
  });

