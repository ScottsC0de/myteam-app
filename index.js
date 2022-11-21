// npm init -y
// npm i inquirer@8.2.4

const Employee = require('./lib/Employee');

const employee = new Employee();

employee.setTeam();

// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: "What is your team manager's name?",
//             name: 'manager_name',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your employee ID?',
//             name: 'manager_id',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your email address',
//             name: 'manager_email',
//         },
//         {
//             type: 'input',
//             message: 'Please enter your office number',
//             name: 'manager_office_number',
//         },
//         {
//             type: 'list',
//             message: 'Add an engineer or intern to your page?',
//             choices: ['Engineer', 'Intern'],
//             name: 'employee_type',
//         },
//         {
//             type: "input",
//             name: "engineer_name",
//             message: "Please enter engineer's name",
//             when: (answers) => {
//                 if (answers.employee_type === "Engineer") {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "engineer_id",
//             message: "Please enter engineer's id",
//             when: (answers) => {
//                 if (answers.employee_type === "Engineer") {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "engineer_email",
//             message: "Please enter engineer's email",
//             when: (answers) => {
//                 if (answers.employee_type === "Engineer") {
//                     return true;
//                 }
//             }
//         }, {
//             type: "input",
//             name: "engineer_github",
//             message: "Please enter engineer's github",
//             when: (answers) => {
//                 if (answers.employee_type === "Engineer") {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "intern_name",
//             message: "Please enter intern's name",
//             when: (answers) => {
//                 if (answers.employee_type === "Intern") {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "intern_id",
//             message: "Please enter intern's id",
//             when: (answers) => {
//                 if (answers.employee_type === "Intern") {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "intern_email",
//             message: "Please enter intern's email",
//             when: (answers) => {
//                 if (answers.employee_type === "Intern") {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "intern_school",
//             message: "Please enter intern's school",
//             when: (answers) => {
//                 if (answers.employee_type === "Intern") {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: 'confirm',
//             name: 'continue',
//             message: 'Would you like to enter another employee?',
//         }
//     ]);



// .catch(function(err) {
//     console.log(err);
//   });

    // if (continue) {
        // ask employee_type
   // } else { end prompts }