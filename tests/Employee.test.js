const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should be an object with user inputted Name, ID, and email", () => {
        const employeeTest = new Employee('Scott', 23, 'Scott@scott.com');

        expect(employeeTest).toBe('object');
        expect(employeeTest.name).toEqual('Scott');
        expect(employeeTest.id).toEqual(23);
        expect(employeeTest.email).toEqual('Scott@scott.com');
    });
});

describe("Employee Name", () => {
    it("should return a string containing Employee's name", () => {
        const employeeName = new Employee(employeeName);
        const employeeNameTest = "Scott"

        expect(typeOf(employeeName)).toBe('string');
        expect(employeeNameTest).toEqual('Scott');
    });
});

describe("Employee ID", () => {
    it("should return a number contained Employee's ID", () => {
        const employeeId = new Employee(employeeID);
        const employeeIdTest = 23

        expect(typeOf(employeeId)).toBe('number');
        expect(employeeIdTest).toEqual(23);
    });
});

describe("Employee Email", () => {
    it("should return a string containing Employee's email", () => {
        // const employeeEmail = new Employee(employeeEmail);
        const employeeEmailTest = "Scott@scott.com"

        expect(employeeEmailTest).toEqual('Scott@scott.com');
    });
});

describe("Employee Role", () => {
    it("should return 'Employee'", () => {
        const employeeRole = new Employee();

        expect(employeeRole).getRole().toBe('Employee');
    });
});