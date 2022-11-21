const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should be a Manager object with user inputted Name, ID, email, and office number", () => {
        const employeeTest = new Manager('Scott', 23, 'Scott5902@gmail.com', 543);

        expect(employeeTest).toBe('object');
        expect(employeeTest.name).toEqual('Scott');
        expect(employeeTest.id).toEqual(23);
        expect(employeeTest.email).toEqual('Scott5902@gmail.com');
        expect(employeeTest.officeNumber).toEqual(543);
    });
});

describe("Employee Role", () => {
    it("should return 'Manager'", () => {
        const employeeRole = new Manager();

        expect(employeeRole).getRole().toBe('Manager');
    });
});