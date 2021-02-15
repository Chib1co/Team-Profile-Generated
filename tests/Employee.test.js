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
// test("Can get employee name", () => {
//     const e1 = new Employee("tomomi", "1", "tomomi@test.com")
//     expect(e1.getname()).toBe("tomomi");
//   });
// test("Can employee ID", () => {
//     const e2 = new Employee("tomomi", "1", "tomomi@test.com")
//     expect(e2.getId()).toBe("1");
//   });
// test("Can employee email", () => {
//     const e3 = new Employee("tomomi", "1", "tomomi@test.com")
//     expect(e3.getEmail()).toBe("tomomi@test.com");
//   })

