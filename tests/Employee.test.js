const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should be an object with user inputted Name, ID, and email", () => {
        const employeeTest = new Employee('Bart Simpson', 3403, 'bartsimpson@gmail.com');

        expect(employeeTest.getName()).toEqual('Bart Simpson');
        expect(employeeTest.getId()).toEqual(3403);
        expect(employeeTest.getEmail()).toEqual('bartsimpson@gmail.com');
    });
});

describe("Employee Role", () => {
    it("should return 'Employee'", () => {
        const employeeRole = new Employee();

        expect(employeeRole.getRole()).toBe('Employee');
    });
});
