# myTeam App
Generate an HTML page for your software team

<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="github mascot with daft punk helmet on" width="200"/>

## 💡 Table of Contents

- [Description](#description-id)
- [Installation](#installation-id)
- [Usage](#usage-id)
- [Contributing](#contributing-id)
- [Tests](#tests-id)
- [Questions](#questions-id)

## <a id="description-id"></a>Description
This app was created to demonstrate the use of *Object-Oriented Programming*, or *OOP*, in the form of a Software Team Generator. This app uses node.js to run the inquirer npm package inside an index.js file that takes user input and places it into JavaScript object parameters. These objects were created in seperate files, and all the files were linked to ensure the apps functioning. The objects created in this project are titled 'Manager', 'Engineer', and 'Intern', which are all subclasses of an 'Employee' object. After the user has entered the information into the inquirer prompts, the data is then put into the objects of the respective role the user has chosen each employee to be. The app then generates an HTML page containing cards for each employee with their name, role, id, and email. If they are a manager, their office number is also shown. If they are an engineer, their github username is linked. If they are an intern, the name of their school is posted. Also, this app includes test files for each object, using the *Jest Testing Framework* to run the tests.

During this project, I learned how to create objects, extend them into subclasses, link object files, use inquirier more dynamically, and run tests using Jest commands. This code can be applied to future projects when I am dealing with OOP, inquirer, and jest. This project was similar to the last one in that we had to use the inquirer package as well as use the fs.writeFile() method to create an HTML file. The ReadMe.md file for this project was also created using our last project, the ReadMe Generator.
   
## <a id="installation-id"></a>Installation
To use this application, you must download node onto your local machine. Please visit https://nodejs.org/en/ to install. You will also need VSCode: (https://code.visualstudio.com/download), npm inquirer package: (run ‘npm i inquirer@8.2.4’ in your CLI), Jest Testing Framework: (run ‘npm i -D jest’ in your CLI), and a copy of my code: (https://github.com/ScottsC0de/myteam-app)
    
## <a id="usage-id"></a>Usage
With node installed, you can now run node commands on JavaScript files. To use this app, you must be in its file from the CLI or an app that allows you to run CLI commands. For this app, we used VSCode’s Integrated Terminal. If you are using VSCode, right click on the index.js file and click ‘Open In Integrated Terminal’. Run a node index.js command to begin creating your ReadMe file. Answer all prompts and watch the magic happen.

Full visual demonstration: https://youtu.be/a0Dp6FPVI6w
    
## <a id="contributing-id"></a>Contributing
n/a
    
## <a id="tests-id"></a>Tests
With jest installed, you can now run jest commands on JavaScript test files. Right click the file you would like to test, click 'Open In Integrated Terminal', and run the command npm test. All tests should pass.

If you missed it above, here is the full visual demonstration: https://youtu.be/a0Dp6FPVI6w


## <a id="questions-id"></a>Questions
You can check out my repositories here on my GitHub account: 
<a href="https://github.com/scottsc0de">scottsc0de</a>

AND

You can send an email to **Scott5902@gmail.com** with any questions!
