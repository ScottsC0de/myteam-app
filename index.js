// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// npm init -y
// npm i inquirer@8.2.4

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: 'manager_name',
        },
        {
            type: 'input',
            message: 'Please enter your employee ID?',
            name: 'manager_id',
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'manager_email',
        },
        {
            type: 'input',
            message: 'Please enter your office number',
            name: 'manager_office_number',
        },
        {
            type: 'list',
            message: 'Add an engineer or intern to your page?',
            choices: ['Engineer', 'Intern'],
            name: 'employee_type',
        },
        {
            type: "input",
            name: "engineer_name",
            message: "Please enter engineer's name",
            when: (answers) => {
                if (answers.employee_type === "Engineer") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "engineer_id",
            message: "Please enter engineer's id",
            when: (answers) => {
                if (answers.employee_type === "Engineer") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "engineer_email",
            message: "Please enter engineer's email",
            when: (answers) => {
                if (answers.employee_type === "Engineer") {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "engineer_github",
            message: "Please enter engineer's github",
            when: (answers) => {
                if (answers.employee_type === "Engineer") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "intern_name",
            message: "Please enter intern's name",
            when: (answers) => {
                if (answers.employee_type === "Intern") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "intern_id",
            message: "Please enter intern's id",
            when: (answers) => {
                if (answers.employee_type === "Intern") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "intern_email",
            message: "Please enter intern's email",
            when: (answers) => {
                if (answers.employee_type === "Intern") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "intern_school",
            message: "Please enter intern's school",
            when: (answers) => {
                if (answers.employee_type === "Intern") {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to enter another employee?',
        }
    ]);



    // if (continue) {
        // ask employee_type
   // } else { end prompts }