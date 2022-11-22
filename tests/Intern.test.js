const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should be an Intern object with user inputted Name, ID, email, and school", () => {
        const employeeTest = new Intern('Maggie Simpson', 3404, 'maggiesimpson@springfield.com', 'Springfield Coding Bootcamp');

        expect(employeeTest.getName()).toEqual('Maggie Simpson');
        expect(employeeTest.getId()).toEqual(3404);
        expect(employeeTest.getEmail()).toEqual('maggiesimpson@springfield.com');
        expect(employeeTest.getSchool()).toEqual('Springfield Coding Bootcamp');
    });
});

describe("Employee Role", () => {
    it("should return 'Intern'", () => {
        const employeeRole = new Intern();

        expect(employeeRole.getRole()).toBe('Intern');
    });
});
