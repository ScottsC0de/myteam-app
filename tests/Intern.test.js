const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should be an Intern object with user inputted Name, ID, email, and school", () => {
        const employeeTest = new Intern('Lisa Simpson', 3402, 'Lisasimpson@springfield.com', 'UConn Coding Bootcamp');

        // expect(employeeTest).toBe('object');
        expect(employeeTest.getName()).toEqual('Lisa Simpson');
        expect(employeeTest.getId()).toEqual(3402);
        expect(employeeTest.getEmail()).toEqual('Lisasimpson@springfield.com');
        expect(employeeTest.getSchool()).toEqual('UConn Coding Bootcamp');
    });
});

describe("Employee Role", () => {
    it("should return 'Intern'", () => {
        const employeeRole = new Intern();

        expect(employeeRole.getRole()).toBe('Intern');
    });
});
