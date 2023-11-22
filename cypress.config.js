const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "LOGIN": "teste@teste",
    "SENHA": "1231"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1366,
    viewportHeight: 1080
  },
});
