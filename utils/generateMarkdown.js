// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
      return `![](https://img.shields.io/badge/license-${license}-blue)`
  }
  return ``
}


function renderLicenseLink(license) {
  if (license !== "none") {
  return `To read the license in its entirety, click here: [${license}](./LICENSE)`
  } else {
      return ``
  }
}


function renderLicenseSection(license) {
  if (license !== "none") {
    return `Content in this project is governed under the ${license} License.`
  } else {
      return ``
  }
}


// TODO: Create a function to generate markdown for README
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  # ${renderLicenseBadge(data.license)}

  ##Table of Contents
  * [Description](#description)
  * [Usage](#usefaq)
  * [Installation](#install)
  * [Testing](#test)
  * [License](#license)
  * [Contributing to This Repo](#contributefaq)
  * [Questions / Contact Details](#questions)
  
  <a name='description'></a>
  ## Description
  ${data.description}
  
  <a name='usefaq'></a>
  ## Usage
  ${data.usefaq}
  
  <a name='install'></a>
  ## Installation
  ${data.install}

  <a name='test'></a>
  ## Testing
  ${data.test}

  <a name='contributefaq'></a>
  ## Contributing to This Repo
  ${data.contributefaq}

  <a name='license'></a>
  ## License
  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)}


<a name='questions'></a>
## Questions? Please contact me here:
For additional questions, please contact [${data.github}](https://github.com/${data.github}) at ${data.email}

`;
}

module.exports = generateMarkdown;
