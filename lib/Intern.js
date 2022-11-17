const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, school) {
        super(id, school)
        this.school = school;
    }
}
// getSchool()
module.exports = Intern;