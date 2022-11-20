// const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    // put new parame in constructor when making subclass
    constructor(name, id, email, github) {
        // super has params from parent class
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.github
    }
}

module.exports = Engineer;