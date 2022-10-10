const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: "6azsrs",
  env: {
    sampleApp: "http://localhost:3000/api",
    loginPath: "/login",
    allure: true
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,

  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
    video: false,
  },

  stepDefinitions: [
    "cypress/support/step_definitions/*.{js,ts}"
  ],

  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },    
    baseUrl: "http://localhost:3001/",
    specPattern: 'cypress/integration/**/*.feature'
  }
});
