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
                message: "Please enter managers name"
            },

            {
                type: "input",
                name: "managerId",
                message: "Please enter managers employee ID number"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "Please enter managers email address"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter managers office number"
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
                message: "Please enter engineers name"
            },

            {
                type: "input",
                name: "engineerId",
                message: "Please enter engineers employee ID number"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter engineers email address"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter engineers GitHub username"
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
                message: "Please enter interns name"
            },

            {
                type: "input",
                name: "internId",
                message: "Please enter interns employee ID number"
            },

            {
                type: "input",
                name: "internEmail",
                message: "Please enter interns email address"
            },

            {
                type: "input",
                name: "internSchool",
                message: "Please enter interns school name"
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });

    }}
