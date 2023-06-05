export class Homepage {
    navigate(){
        cy.visit('https://automationexercise.com/')
        return this;
    } 
}