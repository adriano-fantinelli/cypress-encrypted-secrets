/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS

class LoginPage {
    fillInputUsername(usernameValue) {
        cy.get(el.usernameInput).type(usernameValue, { log: false })
    }

    fillInputPassword(passwordValue) {
        cy.get(el.passwordInput).type(passwordValue, { log: false })
    }

    clickLogInButton() {
        cy.get(el.logInButton).click()
    }
}
export default new LoginPage();
