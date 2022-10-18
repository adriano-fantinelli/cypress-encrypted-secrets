/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS

class LoginPage {
    fillInputUsername(usernameValue) {
        cy.get(el.usernameInput).type(usernameValue)
    }

    fillInputPassword(passwordValue) {
        cy.get(el.passwordInput).type(passwordValue)
    }

    clickLogInButton() {
        cy.get(el.logInButton).click()
    }
}
export default new LoginPage();
