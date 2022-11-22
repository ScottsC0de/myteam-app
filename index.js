// npm init -y
// npm i inquirer@8.2.4

// where questions will be asked based on user input and the objects chosen
// import objects created in their respective files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import npm inquirer package and gain access to file system (fs)
const inquirer = require('inquirer');
const fs = require('fs');

// array where all employees will go 
// const myTeamArray = [];

function setTeam() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter your employee's name:",
                validate: names => /[a-z]/gi.test(names),
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter your employee's ID number:",
                validate: ids => /[1-9]/gi.test(ids),
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
        .then((answers) => {
            switch (answers.role) {
                case 'Manager':
                    console.log(answers.role)
                    // const { name, role, id, email, office_number } = managerInfo;
                    const newManager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.office_number);
                    const managerCard = createManagerCard(newManager);
                    fs.appendFile('./dist/index.html', managerCard, (err) =>
                        err ? console.log(err) : console.log(`Success! Added ${answers.name} to your Team!`)
                    );
                    break;
                case 'Engineer':
                    console.log(answers.role)
                    // const { name, role, id, email, github } = engineerInfo;
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
                    const engineerCard = createEngineerCard(newEngineer);
                    fs.appendFile('./dist/index.html', engineerCard, (err) =>
                        err ? console.log(err) : console.log(`Success! Added ${answers.name} to your Team!`)
                    );
                    break;
                case 'Intern':
                    console.log(answers.role)
                    // const { name, role, id, email, school } = internInfo;
                    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
                    const internCard = createInternCard(newIntern);
                    fs.appendFile('./dist/index.html', internCard, (err) =>
                        err ? console.log(err) : console.log(`Success! Added ${answers.name} to your Team!`)
                    );
                    break;
                default: 'Employee';
            };
        })
        .then(() => {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'add_employee',
                    message: 'Would you like to add another employee?',
                    default: false,
                }
            ])
                .then((answers) => {
                    // ternary operator
                    // if add_employee = yes run setTeam() else return
                    answers.add_employee ? setTeam() : false
                })
        })
};

setTeam();


// .catch(function(err) {
//     console.log(err);
//   });


const createManagerCard = ({ name, role, id, email, office_number }) =>
    `<section class="team-card text-center manager-box mb-5">
            <div class="card-info mt-3">
                <h2>Name: ${name}</h2>
                <p>${role}</p>
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a>a/p>
                <p>Office #: ${office_number}</p>
            </div>
        </section>`

const createEngineerCard = ({ name, role, id, email, github }) => `
        <section class="team-card text-center employee-box">
            <div class="card-info mt-3">
            <h2>Name: ${name}</h2>
            <p>${role}</p>
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a>a/p>
            <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
            </div>
        </section>
`
const createInternCard = ({ name, role, id, email, school }) => `
        <section class="team-card text-center employee-box">
            <div class="card-info mt-3">
            <h2>Name: ${name}</h2>
            <p>${role}</p>
            <p>ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a>a/p>
            <p>School: ${school}</p>
            </div>
        </section>
`

