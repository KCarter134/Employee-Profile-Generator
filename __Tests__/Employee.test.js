const Employee = require("../lib/Employee");

test("Can get employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
    const name = "kyle";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email", () => {
    const testValue = "test@yahoo.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name", () => {
    const testValue = "kyle";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
