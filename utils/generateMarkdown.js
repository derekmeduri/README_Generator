//function that returns license badge based on which license is passed in
//if there is no license, we want to return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
  }
  return "";
}

//creating a function that returns the license link
//if there is no license, we want to return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n- * [License](#License)\n`;
  }
  return "";
}

//Creating a function that returns the license section of README
//if there is no license, we want to return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    Licensed under ${license} License.`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

    ## Table of Contents
    
   - * [Description](#Description)

   - * [Installation](#Installation)

   -  * [Usage](#Usage)

   - * [Questions](#Questions)

   - * [Contributors](#Contributors)
    
   - * [Testing](#Testing)
    ${renderLicenseLink(data.license)}
    
    ## Description
    ${data.description}
   
    ## Installation 
    ${data.installation}
    
    ## Usage
    ${data.usage}
   
    ## Questions
      
    Please reach out if you have any questions regarding this application. 

    * Name - ${data.name}
    * Email - ${data.email}
    * GitHub - [${data.github}](https://github.com/${data.github}/)
    
    ## Contributors
    ${data.contributors}

    ## Testing
    ${data.test}

    ${renderLicenseSection(data.license)}
    `;
}

module.exports = generateMarkdown;
