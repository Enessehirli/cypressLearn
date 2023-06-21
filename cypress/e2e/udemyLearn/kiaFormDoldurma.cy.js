import { kiaLogin } from "../../pageObjectModel/Kiapage";

const kiaPagepom = new kiaLogin
describe('Shopist.io sitesinden sepete ürün eklenir ve isimleri kaydedilir', () => {

it('siteye gidilir', () => {
    kiaPagepom.navigate()
    kiaPagepom.popUpAccept()
    kiaPagepom.nameBox()
    kiaPagepom.nameBox()
    kiaPagepom.lastNameBox()
    kiaPagepom.phoneNumber()
    kiaPagepom.emailBox()
    kiaPagepom.bayilik()
    kiaPagepom.şehir()
    kiaPagepom.kutucukAccept()
    kiaPagepom.kutuAccept()
    kiaPagepom.gönderButton()

    
});
    




});