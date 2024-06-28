const chromeLaunchConfig = {
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
}
const fs = require('fs')

//Read the JSON file
const data = fs.readFileSync('urls.json')
const json = JSON.parse(data)

//Construct the URLs
const urls = [json.base].concat(json.paths.map((path) => json.base + path))

module.exports = {
  defaults: {
    ignore: [],
    reporters: ['pa11y-ci-reporter-html'],
    runners: ['htmlcs'],
    includeNotices: false,
    includeWarnings: false,
    standard: 'WCAG2AA',
    timeout: 60000,
    chromeLaunchConfig: chromeLaunchConfig // Add the Chrome launch configuration here
  },

  urls: urls
}
