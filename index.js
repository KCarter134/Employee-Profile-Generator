const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generatePage = require("./src/pageTemplate.js")
const htmlPush = path.join(page, "profile.html");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const page = path.resolve(__dirname, "dist");

teamArray = [];

function displayInfo () {

    function createTeam () {
        inquirer.prompt([{
            type: "list",
            message: "Who is being added to the team?",
            name: "employeeAdd",
            choices: ["Manager", "Engineer", "Intern", "ALL FINISHED"]
        }]).then(function (userInput) {
            switch(userInput.employeeAdd) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    pageDisplay();
            }
        })
    }
    // add manager credentials to prompt
    function addManager() {
        inquirer.prompt ([

            {
                type: "input",
                name: "managerName",
                message: "What is the managers name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What is the managers employee ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the managers email address?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the managers office number?"
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });

    }


    function addEngineer() {
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },

            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's employee ID number?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?"
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });

    }

    function addIntern() {
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },

            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID number?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?"
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });

    }}
