const { defineConfig } = require('cypress')


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2',
    specPattern: 'cypress/integration/**/*.spec.js',
    supportFile: 'cypress/support/apis.js'
  }
})
