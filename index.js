// Import the required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Define the questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide the usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to generate README content based on user input
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me with the information below:

GitHub: [${answers.github}](https://github.com/${answers.github})  
Email: ${answers.email}
  `;
}

// Use Inquirer to prompt the user and then write the README file
inquirer.prompt(questions).then((answers) => {
  console.log('User Answers:', answers);  // Debug log
  const readmeContent = generateReadme(answers);
  console.log('Generated README Content:', readmeContent);  // Debug log
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Successfully created README.md!');
    }
  });
});
