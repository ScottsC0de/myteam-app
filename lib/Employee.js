// developer.mozilla.org definition of an object in JS
// In JavaScript, an object is a standalone entity, with properties and type. 
// Compare it with a cup, for example. A cup is an object, with properties.
// A cup has a color, a design, weight, a material it is made of, etc.
// The same way, JavaScript objects can have properties, which define their characteristics

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
        console.log(this.name)
    }

    getId() {
        return this.id;
        console.log(this.name)
    }

    getEmail() {
        return this.email;
        console.log(this.name)
    }
    getRole() {
        return "Employee";
    }
};

module.exports = Employee;

console.log(Employee);


//     setTeam() {
//         this.getName();
//     }
//     getName() {
//         inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     message: "Please enter your name",
//                     name: 'name',
//                     validate: val => /[a-z1-9]/gi.test(val),
//                 },
//             ])
//             .then(val => {
//                 if (val.name) {
//                     console.log(val)
//                 }
//                 this.getId();
//             });
//     }
//     getId() {
//         inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     message: "Please enter your company ID",
//                     name: 'id',
//                     validate: val => /[1-9]/gi.test(val),
//                 },
//             ])
//             .then(val => {
//                 if (val.id) {
//                     console.log(val)
//                 }
//                 this.getEmail();
//             });
//     }
//     getEmail() {
//         inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     message: "Please enter your email",
//                     name: 'email',
//                     validate: val => /[a-z1-9]/gi.test(val),
//                 },
//             ])
//             .then(val => {
//                 if (val.email) {
//                     console.log(val)
//                 }
//                 this.getRole();
//             });
//     }
//     getRole() {
//         inquirer
//             .prompt([
//                 {
//                     type: 'list',
//                     message: "Please select this employee's role",
//                     choices: ['Manager', 'Engineer', 'Intern'],
//                     name: 'role',
//                     // validate:
//                 },
//             ])
//             .then(val => {
//                 console.log(`${this.name} is a valid Employee!`)

//                 if (val.role == 'Manager') {
//                     setManager();
//                 } else if (val.role == 'Enginner') {
//                     setEngineer();
//                 } else if (val.role == 'Intern') {
//                     setIntern();
//                 } else {
//                     console.log('Please select an employee type');
//                     return;
//                 }
//             });
//     }