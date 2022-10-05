import { by, element, ElementFinder, promise, WebElement } from "protractor";

class Alert {
    alertSuccessBox: ElementFinder;
    alertErrorBox: ElementFinder;
    constructor() {
        this.alertSuccessBox = element(by.css("div.alert-success"));
        this.alertErrorBox = element(by.css("div.alert-danger"));
    }

    public getSuccessMessage() {
        return this.alertSuccessBox.getText();
    }

    public getErrorMessage() {
        return this.alertSuccessBox.getText();
    }

    public getErrorMessages(): promise.Promise<WebElement[]> {
        return element
            .all(by.css("div.alert-danger"))
            .getWebElements()
    }
}

export default Alert;