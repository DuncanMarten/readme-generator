// function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}
  [![License](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)
  
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
  [${data.license}](https://opensource.org/licenses/${data.license})

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
