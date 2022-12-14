const Employee = require("./Employee");

// extends turns Engineer into subclass of Employee
class Engineer extends Employee {
    // put new parame in constructor when making subclass
    constructor(name, id, email, github) {
        // super has params from parent class
        super(name, id, email)
        this.github = github;
    }

    getGitHub() {
        return this.github
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;