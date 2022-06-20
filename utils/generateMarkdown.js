// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function to generate markdown for README
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue)
  

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
${data.contributefaq}


<a name='questions'></a>
## Questions? Please contact me here:
For additional questions, please contact [${data.github}](https://github.com/${data.github}) at ${data.email}

`;
}

module.exports = generateMarkdown;
