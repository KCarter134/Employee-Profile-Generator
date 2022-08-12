const Engineer = require("../lib/Engineer");

test("Can set github account with the constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@yahoo.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@yahoo.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get github username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@yeahoo.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
