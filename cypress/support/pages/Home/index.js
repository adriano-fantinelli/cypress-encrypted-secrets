/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS

class HomePage {
    validateWelcomeToTheAdministrationMessage() {
        cy.contains(el.welcomeToTheAdministration).should("exist")
    }

    validarUsernameText(usernameText) {
        cy.get(el.usernameText).should("have.text", usernameText)
    }
}
export default new HomePage();
