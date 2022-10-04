const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        MAILOSAUR_API_KEY: 'wDWIdUeNb7iESk2B',
    },
    failOnStatusCode: false,
    chromeWebSecurity: false,
    projectId: 'i5zqt8',
    defaultCommandTimeout: 100000,
    execTimeout: 100000,
    fixturesFolder: 'cypress/fixtures',
    pageLoadTimeout: 100000,
    requestTimeout: 9000,
    responseTimeout: 90000,
    screenshotsFolder: 'cypress/screenshots',
    taskTimeout: 60000,
    retries: 1,

    e2e: {

        setupNodeEvents(on, config) {
            return require('./cypress/plugins')(on, config)
        },
        baseUrl: 'https://platform.coopcommerce-staging.com/super',
        specPattern: 'cypress/e2e/**/*.*',
    },
})