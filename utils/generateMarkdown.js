// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  <a name='license'></a>
  ## License
  The application is covered under a ${data.license} license.
  <a name='contributefaq'></a>
  ## Contributing to This Repo
  ${data.contributefaq}
  <a name='questions'></a>
  ## Questions / Contact Details
  If you have any questions or need to contact me about this app, I can reached either on Github or by email at [${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;
