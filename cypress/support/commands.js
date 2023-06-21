// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import customCommandsLogin from "../pageObjectModel/customCommandsLogin"

Cypress.Commands.add('login', (username, password) => {
    customCommandsLogin.usernameField.type(username)
    customCommandsLogin.passwordField.type(password)
    customCommandsLogin.loginBtn.click()
})
//With session
Cypress.Commands.add('loginWithSession', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get("input[placeholder = 'Email']").type(username)
        cy.get("input[placeholder = 'Password']").type(password)
        cy.get("button[type = 'submit']").click()
        cy.get('nav > div > ul > li:nth-child(2) > a').should('be.visible').and('contain', 'New Post')
    })
})

import trendyolpage from "../pageObjectModel/trendyolpage"


Cypress.Commands.add('trendyolLogin',(username, password) => {

trendyolpage.navigate
trendyolpage.popUpAccept.click()
trendyolpage.girişyapButtonu.click()
trendyolpage.emailBox.type(username)
trendyolpage.passwordBox.type(password)
trendyolpage.loginButton.click()






})