import { by, element, ElementFinder } from "protractor";

class Navbar {
    homeLink: ElementFinder;
    shopLink: ElementFinder;
    constructor() {
        this.homeLink = element(by.linkText('Home'));
        this.shopLink = element(by.linkText('Shop'));
    }

    public goToHome() {
        this.homeLink.click();
    }

    public goToShop() {
        return this.shopLink.click();
    }
}

export default Navbar;