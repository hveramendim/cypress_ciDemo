const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
//const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler); // Configura el preprocesador
      await addCucumberPreprocessorPlugin(on, config); // Agrega soporte para Cucumber

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Ruta para los archivos .feature
    baseUrl: "https://demoqa.com", // Cambia según tu entorno
    stepDefinitions: "cypress/support/step_definitions",
  },
});