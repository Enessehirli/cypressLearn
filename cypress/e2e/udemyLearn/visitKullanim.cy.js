import { Homepage } from "../../pageObjectModel/homepage";
const homapagePom = new Homepage
describe('Site visit', () => {
    it('Ilk test', () => {
        homapagePom.navigate()
        cy.title().should('eq', "Automation Exercise")
        cy.url().should('eq', 'https://automationexercise.com/')
    });

});