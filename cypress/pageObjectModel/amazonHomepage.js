export class amazonLogin {

navigate(){
    cy.visit("https://www.amazon.com.tr/")
}
    popUpAccept() {
        cy.get('#sp-cc-accept').click()
    }
    hesabimButton(){
        cy.get('#nav-link-accountList-nav-line-1').click()
    }
    emailBox(){
        cy.get('#ap_email').type('sehirlienes443@gmail.com')
    }
    devametButton(){
        cy.get('#continue').click()
    }
    passwordBox(){
        cy.get('#ap_password').type('deneme123')
    }
    girisyapButton(){
        cy.get('#signInSubmit').click()
    }

}