const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should be a Manager object with user inputted Name, ID, email, and office number", () => {
        const employeeTest = new Manager('Homer Simpson', 3400, 'homersimpson@springfield.com', 203);

        expect(employeeTest.getName()).toEqual('Homer Simpson');
        expect(employeeTest.getId()).toEqual(3400);
        expect(employeeTest.getEmail()).toEqual('homersimpson@springfield.com');
        expect(employeeTest.getOfficeNumber()).toEqual(203);
    });
});

describe("Employee Role", () => {
    it("should return 'Manager'", () => {
        const employeeRole = new Manager();

        expect(employeeRole.getRole()).toBe('Manager');
    });
});