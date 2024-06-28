import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read the package.json file and parse it to get the version
const packageJsonPath = path.resolve(__dirname, 'package.json')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
const version = packageJson.version

// Define the CSS comment with the version included
export const govcy_uds_ver = `/*!
 * gov.cy UDS v${version}
 */`

// Read the main.scss file
const mainScssPath = path.resolve(__dirname, 'dev/sass/main.scss')
let mainScss = readFileSync(mainScssPath, 'utf-8')

// Remove the existing comment
mainScss = mainScss.replace(/\/\*![\s\S]*?\*\//, '').trim()

// Add the banner at the top of the main.scss file
mainScss = `${govcy_uds_ver}\n\n${mainScss}`

// Write the updated main.scss file
writeFileSync(mainScssPath, mainScss)
