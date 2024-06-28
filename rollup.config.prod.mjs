import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { copyFiles } from './rollup.config.dev.mjs'
import { govcy_uds_ver } from './prebuild.mjs'

const outputConfigurations = [
  {
    input: './dev/js/govcy.uds.js',
    output: {
      file: './dist/js/govcy.uds.min.js',
      format: 'iife',
      name: 'GOVCY',
      compact: true,
      banner: govcy_uds_ver
    }
  },
  {
    input: './dev/js/locales/govcy.datepicker.el.js',
    output: {
      file: './dist/js/locales/govcy.datepicker.el.min.js',
      format: 'iife',
      name: 'govcyDatePickerLocale',
      compact: true,
      banner: govcy_uds_ver
    }
  },
  {
    input: './dev/js/locales/govcy.datepicker.en.js',
    output: {
      file: './dist/js/locales/govcy.datepicker.en.min.js',
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
    terser(),
    {
      name: 'copy-files',
      writeBundle() {
        copyFiles('./dev/img', './dist/img')
      }
    }
  ]
}))
console.log(govcy_uds_ver)
export default rollupConfigurations
