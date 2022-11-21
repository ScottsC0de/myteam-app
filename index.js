// npm init -y
// npm i inquirer@8.2.4

// where questions will be asked based on user input and the objects chosen
// step 1: import objects created in their respective files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import npm inquirer package and gain access to file system (fs)
const inquirer = require('inquirer');
const fs = require('fs');

// array where all employees will go 
// const myTeamArray = [];

// variable used to create each seperate employee
// const newEmployee = new Employee(employee_name, employee_role, employee_id, employee_email);

// newEmployee.setTeam();
function setTeam() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employee_name',
                message: "Please enter your employee's name:",
                // validate: names => /[a-z]/gi.test(names),
            },
            {
                type: 'input',
                name: 'employee_id',
                message: "Please enter your employee's ID number:",
                validate: ids => /[1-9]/gi.test(ids),
            },
            {
                type: 'input',
                name: 'employee_email',
                message: "Please enter your employee's email:",
            },
            {
                type: 'list',
                name: 'employee_role',
                message: "Please enter your employee's role:",
                choices: ['Manager', 'Engineer', 'Intern']
            },
        ])
        .then((answers) => {
            switch (answers.employee_role) {
                case 'Manager':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'office_number',
                                message: 'Please enter your office number:',
                                validate: numbers => /[1-9]/gi.test(numbers),
                            }
                        ]);
                    addAnotherEmployee();
                    break;
                case 'Engineer':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'github',
                                message: 'Please enter your GitHub username:',
                            }
                        ]);
                    addAnotherEmployee();
                    break;
                case 'Intern':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'school',
                                message: 'Please enter the name of your school:',
                            }
                        ]);
                    addAnotherEmployee();
                    break;
                default: 'Employee';
            };
        })
    function addAnotherEmployee() {
        inquirer
            .prompt[(
                {
                    type: 'confirm',
                    name: 'add_employee',
                    message: 'Would you like to add another employee?',
                    default: true,
                }
            )];
    }
}

setTeam();


// .catch(function(err) {
//     console.log(err);
//   });