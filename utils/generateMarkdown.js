// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch(license) {
    case 'GPL':
      return `\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;
    case 'MIT':
      return `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
    case 'Apache':
      return `\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`
    case 'BSD':
      return `\n[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n`
    case 'GBU':
      return `\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`
    case 'EPL':
      return `\n[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)\n`
    default:
      return ' ';
  }
}

function renderLicenseLink(license) {
    if (license == 'None') {
    return ' ';
  }
  return '6. [License](#license)'
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }
  return `\n## License\n 
The Project is covered under the ${license} liscense. Please refer to the LICENSE in the repo.\n`;
}

function generateMarkdown(data) {
  let licenseData = renderLicenseSection(data.license);
  let badge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  return   (
`# ${data.title}

## Description

${data.description}
${badge}
## Table Of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Test](#test)
5. [Questions](#questions)
${licenseLink}

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Test

${data.test}
${licenseData}
## Questions

You can contact me reagarding any questions through my email or github below
github.com/${data.github}
${data.email}
`);
}

module.exports = generateMarkdown;
