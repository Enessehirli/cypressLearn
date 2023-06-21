import { amazonLogin } from "../../pageObjectModel/amazonHomepage";
const amazonLoginpom = new amazonLogin
describe('Amazon login testi', () => {

    it('Karaca sitesine login olunur', () => {
        amazonLoginpom.navigate()
        amazonLoginpom.popUpAccept()
        amazonLoginpom.hesabimButton()
        amazonLoginpom.emailBox()
        amazonLoginpom.devametButton()
        amazonLoginpom.passwordBox()
        amazonLoginpom.girisyapButton()
    });
    
    
});