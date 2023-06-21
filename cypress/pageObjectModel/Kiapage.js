export class kiaLogin {

navigate(){cy.visit("https://teklif.kia.com.tr/")}

popUpAccept(){cy.get('div#cookieseal-banner button:nth-child(3)').click()}

nameBox(){cy.get('#fname').type('enes')}

lastNameBox(){cy.get('#lname').type('şehirli')}

phoneNumber(){cy.get('#hphone').type('05123456789')}

emailBox(){cy.get('#email').type('sehirlienes443@gmail.com')}

bayilik(){cy.get('li#dealerInfo div:nth-child(1) > span > span > div:nth-child(3) > div').click()}

şehir(){cy.get('li#dealerInfo div:nth-child(3) > ul > li:nth-child(4) > a').click()}

kutucukAccept(){cy.get('form[name="datainfo-comp-form"] div:nth-child(8) > span > label > span').click()}

kutuAccept(){cy.get('form[name="datainfo-comp-form"] div:nth-child(9) > span > label > span').click()}

gönderButton(){cy.get('div.step_ctrl > a > span').click()}

}