const Engineer = require('../lib/Engineer')

describe("Employee", () => {
    it("should be an Engineer object with user inputted Name, ID, email, and github", () => {
        const employeeTest = new Engineer('Marge Simpson', 3401, 'margesimpson@springfield.com', '@margesc0de');

        expect(employeeTest.getName()).toEqual('Marge Simpson');
        expect(employeeTest.getId()).toEqual(3401);
        expect(employeeTest.getEmail()).toEqual('margesimpson@springfield.com');
        expect(employeeTest.getGitHub()).toEqual('@margesc0de');
    });
});

describe("Employee Role", () => {
    it("should return 'Engineer'", () => {
        const employeeRole = new Engineer();

        expect(employeeRole.getRole()).toBe('Engineer');
    });
});
