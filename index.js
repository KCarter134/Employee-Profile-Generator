const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/pageTemplate");

const display= [];

//List of questions to be displayed in HTML
const questions = [
    {
        type: "list",
        name: "memberType",
        message: "What role does the employee play?",
        choices: ["Manager", "Engineer", "Intern", "Finish"],
    },
];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is the engineer's github username?",
    },
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "Where did the intern go to school",
    },
];

// all functions to run the prompts are here
function manager() {
    inquirer.prompt(managerQuestions).then((res) => {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        display.push(manager);
        addTeamQuestions();
    });
}

function engineer() {
    inquirer.prompt(engineerQuestions).then((res) => {
        const engineer = new Engineer(res.name, res.id, res.email, res.githubUsername);
        display.push(engineer);
        addTeamQuestions();
    });
}

function intern() {
    inquirer.prompt(internQuestions).then((res) => {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        display.push(intern);
        addTeamQuestions();
    });
}

function addTeamQuestions() {
    inquirer.prompt(questions).then((res) => {
        switch (res.memberType) {
            case "Engineer":
                engineer();
                break;
            case "Intern":
                intern();
                break;
            case "Manager":
                manager();
                break;
            case "All Done":
                console.log("HTML has been created.")
                fs.writeFileSync("./dist/profile.html", generatePage(display));
        }
    });


}

function finish() {
    console.log("HTML has been created");
    addTeamQuestions();
}

finish();