//function that returns license badge based on which license is passed in
//if there is no license, we want to return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return "";
}

//creating a function that returns the license link
//if there is no license, we want to return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

//Creating a function that returns the license section of README
//if there is no license, we want to return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    Licensed under ${license} license.`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contact](#contact)
    *[Contributors](#contributors)
    *[Testing](#testing)
    ${renderLicenseLink(data.license)}
    ## Description
    ${data.description}
    ## Installation 
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contact

    ## Contributors

`;
}

module.exports = generateMarkdown;
