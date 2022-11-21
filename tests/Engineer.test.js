const Engineer = require('../lib/Engineer')

describe("Employee", () => {
    it("should be an Engineer object with user inputted Name, ID, email, and github", () => {
        const employeeTest = new Engineer('Scott', 23, 'Scott5902@gmail.com', '@scottsc0de');

        expect(employeeTest).toBe('object');
        expect(employeeTest.name).toEqual('Scott');
        expect(employeeTest.id).toEqual(23);
        expect(employeeTest.email).toEqual('Scott5902@gmail.com');
        expect(employeeTest.github).toEqual('@scottsc0de');
    });
});

describe("Employee Role", () => {
    it("should return 'Engineer'", () => {
        const employeeRole = new Engineer();

        expect(employeeRole).getRole().toBe('Engineer');
    });
});
