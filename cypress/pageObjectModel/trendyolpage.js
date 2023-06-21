class trendyolLogin {

get navigate(){
   return cy.visit('https://www.trendyol.com/')
}
get girişyapButtonu(){
    return cy.get('div#account-navigation-container div.link.account-user > p')
}

get popUpAccept(){
    return cy.get('#onetrust-accept-btn-handler')
}


get emailBox(){
    return cy.get('#login-email')
}


get passwordBox(){
    return cy.get('#login-password-input')
}

get loginButton(){
    return cy.get('div#login-register button[type="submit"]')
}

}
    

export default new trendyolLogin()