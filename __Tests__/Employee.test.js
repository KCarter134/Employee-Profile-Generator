const Employee = require("../lib/Employee");

test("Created Employee Card", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Test name", () => {
    const name = "Kyle";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Test ID", () => {
    const id = 193045;
    const employeeInstance = new Employee("Kyle", id);
    expect(employeeInstance.id).toBe(id);
})

test("Test email", () => {
    const email = "kcarter3452@yahoo.com";
    const employeeInstance = new Employee("Kyle", 193045, email);
    expect(employeeInstance.email).toBe(email);
})