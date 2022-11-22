// npm init -y
// npm i inquirer@8.2.4

// import objects created in their respective files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import npm inquirer package and gain access to file system (fs)
const inquirer = require('inquirer');
const fs = require('fs');

// array where all employees will go 
const myTeamArray = [];

// main app function. asks questions and puts user answers into objects which are then stored in the myTeamArray
function setTeam() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter your employee's name:",
                validate: names => /[a-z]/gi.test(names), // so user types in letters for name
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter your employee's ID number:",
                validate: ids => /[1-9]/gi.test(ids),  // so user types in numbers for id
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your employee's email:",
            },
            {
                type: 'list',
                name: 'role',
                message: "Please enter your employee's role:",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'office_number',
                message: 'Please enter your office number:',
                validate: numbers => /[1-9]/gi.test(numbers),
                // only ask when previous question equals Manager
                when: (answers) => {
                    if (answers.role === "Manager") {
                        return true;
                    }
                },
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your github username:',
                when: (answers) => {
                    if (answers.role === "Engineer") {
                        return true;
                    }
                },
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the name of your school:',
                when: (answers) => {
                    if (answers.role === "Intern") {
                        return true;
                    }
                },
            }
        ])
        // put all answers into respective objects based off role prompt
        .then((answers) => {
            switch (answers.role) {
                case 'Manager':
                    // create object by matching params here with original object params
                    // "new" creates new Object
                    const newManager = new Manager(answers.name, answers.id, answers.email, answers.office_number);
                    myTeamArray.push(newManager);
                    break;
                case 'Engineer':
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    myTeamArray.push(newEngineer);
                    break;
                case 'Intern':
                    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    myTeamArray.push(newIntern);
                    break;
                default: 'Employee';
            };
        })
        // prompt to continue adding employee cards or terminate program
        .then(() => {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'add_employee',
                    message: 'Would you like to add another employee?',
                }
            ])
                .then((answers) => {
                    if (answers.add_employee) {
                        // run the prompt again
                        setTeam();
                    } else {
                        const renderedHtml = generateHtml(myTeamArray);

                        fs.writeFile('./dist/index.html', renderedHtml, /* <--- must be string */(err) =>
                            err ? console.log(err) : console.log(`Success! To see your new HTML file, right click index.html and click "Open In Default Browser"`)
                        )
                    };
                })
        })
};

// calling the main function
setTeam();

// the HTML file to be created
// using filter() inside object literal to select all members from their respective roles out of the myTeamArray
// based on their role, they are then placed into their respective generate functions below
const generateHtml = (myTeam) => (
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css">
    <title>myTeam App - Generate A Webpage For Your Software Team</title>
</head>

<body>

    <header class="text-center mb-5">
        <h1 class="mt-4">My Software Team</h1>
        <p>Generated by the myTeam App</p>
    </header>

    <main class="main-container d-flex justify-content-center align-items-center flex-column">

    ${myTeam.filter(member => member.getRole() === 'Manager').map(member => createManagerCard(member)).join('')}
    ${myTeam.filter(member => member.getRole() === 'Engineer').map(member => createEngineerCard(member)).join('')}
    ${myTeam.filter(member => member.getRole() === 'Intern').map(member => createInternCard(member)).join('')}

    </main>

</body>

</html>`
)

// functions used to make seperate employee cards based on role
// calling methods from object files that return the parameters entered from prompt
const createManagerCard = (manager) =>
    `<section class="team-card text-center manager-box mb-5">
            <div class="card-info mt-3">
                <h2 class="mb-3">${manager.getName()}</h2>
                <img src="../img/manager-icon.png" alt="manager icon; a folder with a gavel">
                <p><strong>${manager.getRole()}</strong></p>
                <p>ID: ${manager.getId()}</p>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Office #: ${manager.getOfficeNumber()}</p>
            </div>
        </section>`

const createEngineerCard = (engineer) => `
        <section class="team-card text-center employee-box mb-5">
            <div class="card-info mt-3">
            <h2 class="mb-4">${engineer.getName()}</h2>
            <img src="../img/engineer-icon.png" alt="employee icon; a blank screen with HTML open/close tags">
            <p><strong>${engineer.getRole()}</strong></p>
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></p>
            </div>
        </section>
`
const createInternCard = (intern) => `
        <section class="team-card text-center employee-box mb-5">
            <div class="card-info mt-3">
            <h2 class="mb-4">${intern.getName()}</h2>
            <img src="../img/intern-icon.png" alt="intern icon; a briefcase and graduation cap">
            <p><strong>${intern.getRole()}</strong></p>
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p>School: ${intern.getSchool()}</p>
            </div>
        </section>
`

