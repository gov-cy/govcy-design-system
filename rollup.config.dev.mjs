import { nodeResolve } from '@rollup/plugin-node-resolve'
import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { govcy_uds_ver } from './prebuild.mjs'

// Define the common plugin for eslint-disable-next-line comment
const eslintDisablePlugin = {
  name: 'prepend-eslint-comment',
  generateBundle(_, bundle) {
    for (const fileName in bundle) {
      const bannerEndIndex = bundle[fileName].code.indexOf('*/') + 2
      const beforeBanner = bundle[fileName].code.substring(0, bannerEndIndex)
      const afterBanner = bundle[fileName].code
        .substring(bannerEndIndex)
        .trimStart()
      bundle[fileName].code =
        `${beforeBanner}\n// eslint-disable-next-line no-unused-vars\n${afterBanner}`
    }
  }
}

// Custom function to run Prettier and ESLint
function runPrettierAndESLint(outputFile) {
  // Run Prettier
  execSync(`npx prettier --write ${outputFile}`)
  // Run ESLint
  execSync(`npx eslint --fix ${outputFile}`)
}

// Function to copy files from one directory to another
export function copyFiles(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  fs.readdirSync(srcDir).forEach((file) => {
    const srcFile = path.join(srcDir, file)
    const destFile = path.join(destDir, file)

    fs.copyFileSync(srcFile, destFile)
  })
}

const outputConfigurations = [
  {
    input: './dev/js/govcy.uds.js',
    output: {
      file: './public/js/govcy.uds.js',
      format: 'iife',
      name: 'GOVCY',
      compact: true,
      banner: govcy_uds_ver
    }
  },
  {
    input: './dev/js/locales/govcy.datepicker.el.js',
    output: {
      file: './public/js/locales/govcy.datepicker.el.js',
      format: 'iife',
      name: 'govcyDatePickerLocale',
      compact: true,
      banner: govcy_uds_ver
    }
  },
  {
    input: './dev/js/locales/govcy.datepicker.en.js',
    output: {
      file: './public/js/locales/govcy.datepicker.en.js',
      format: 'iife',
      name: 'govcyDatePickerLocale',
      compact: true,
      banner: govcy_uds_ver
    }
  }
]

const rollupConfigurations = outputConfigurations.map((outputConfig) => ({
  ...outputConfig,
  plugins: [
    nodeResolve(),
    {
      name: 'run-prettier-eslint',
      writeBundle() {
        runPrettierAndESLint(outputConfig.output.file)
        copyFiles('./dev/img', './public/img')
      }
    },
    eslintDisablePlugin
  ]
}))

export default rollupConfigurations
