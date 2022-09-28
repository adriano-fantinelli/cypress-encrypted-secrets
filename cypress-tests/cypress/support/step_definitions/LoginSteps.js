import {
	Given,
	When,
	And,
	Then,
} from "@badeball/cypress-cucumber-preprocessor";

import BasePage from '../pages/Base'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'

Given(/^User is on Login page$/, () => {
	BasePage.visit()
});

Then(/^User fill Admin UI informations with (.*)$/, () => {
	LoginPage.fillInputUsername(Cypress.env("username"))
	LoginPage.fillInputPassword(Cypress.env("password"))
});

When(/^User click on LOGIN IN button$/, () => {
	LoginPage.clickLogInButton()
});

Then(/^User see Home page$/, () => {

});
