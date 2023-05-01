const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const myModule = require('./utils/generateMarkdown');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of project: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the Description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter Installation Instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['None', 'GPL', 'MIT', 'EPL', 'GBU', 'BSD', 'Apache'],
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter Github name:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter Email:',
    },

  ])
}

function init() {
  promptUser()
  .then((answers) => writeFile('README.md', myModule(answers)))
  .then(() => console.log('Wrote to ReadMe.md'))
  .catch((err) => console.log(err))
}

init();
