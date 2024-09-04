// Function to render license badge based on user's choice
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
    }
    return '';
  }
  
  // Function to generate the markdown for the README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Questions
  If you have any questions, please feel free to contact me via:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  