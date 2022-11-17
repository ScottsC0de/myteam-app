const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, github) {
        super(id, github)
        this.github = github;
    }
}
// getGitHub();
// getRole();

module.exports = Engineer;