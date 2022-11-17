const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, officeNumber) {
        super(id, officeNumber)
        this.officeNumber = officeNumber;
    }
}
// getOfficeNumber();
// getRole();
module.exports = Manager;