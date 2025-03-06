// tsdx.config.js
module.exports = {
  rollup(config, options) {
    // Set format to 'cjs' with interop
    if (options.format === 'cjs') {
      config.output = {
        ...config.output,
        exports: 'named',
        interop: 'compat',
      }
    }
    return config
  },
}
