// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License](https://img.shields.io/badge/license-${data.license}-blue)](https://img.shields.io/badge/license-${data.license}-blue)
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  * Contact me on [Github](http://www.github.com/${data.github})
  * Contact me by [email](mailto:${data.email}?subject=[Question]%20About%20${data.title})
  `;
}

module.exports = generateMarkdown;
