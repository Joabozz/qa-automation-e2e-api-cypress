const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/e2e_saucedemo.spec.js",
    supportFile: "cypress/support/e2e.js",
  }
});
