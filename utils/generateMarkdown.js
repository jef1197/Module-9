// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (!license) {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license == 'None') {
    return ' ';
  }
  return '6. [License](#license)'
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license == 'None') {
    return '\n  ## License\n';
  }
}

function generateMarkdown(data) {
  let licenseData = renderLicenseSection(data.license);
  let badege = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  return   `# ${data.title}
  ## Description

  ${data.description}

  ##  Table Of Contents
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
  `;
}

module.exports = generateMarkdown;
