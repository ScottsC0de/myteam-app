const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should be an Intern object with user inputted Name, ID, email, and school", () => {
        const employeeTest = new Intern('Scott', 23, 'Scott@scott.com', 'UConn Coding Bootcamp');

        expect(employeeTest).toBe('object');
        expect(employeeTest.name).toEqual('Scott');
        expect(employeeTest.id).toEqual(23);
        expect(employeeTest.email).toEqual('Scott@scott.com');
        expect(employeeTest.school).toEqual('UConn Coding Bootcamp');
    });
});

describe("Employee Role", () => {
    it("should return 'Intern'", () => {
        const employeeRole = new Intern();

        expect(employeeRole).getRole().toBe('Intern');
    });
});
