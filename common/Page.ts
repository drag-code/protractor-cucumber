import { ElementFinder, by, element, browser } from 'protractor';
import Navbar from './Navbar';

class Page {
    private _navbar: Navbar;
    constructor() {
        this._navbar = new Navbar();
    }

    public get navbar(): Navbar {
        return this._navbar;
    }

    public executeScriptOn(script: string, element: ElementFinder) {
        return browser.executeScript(script, element);
    }

    public wait(miliseconds: number) {
        return browser.sleep(miliseconds);
    }

    public clearElement(element: ElementFinder) {
        return element.clear();
    }

    public scrollTo(element: ElementFinder) {
        return this.executeScriptOn("arguments[0].scrollIntoView(true)", element);
    }

}

export default Page;