import { by, element, ElementFinder } from "protractor";
import Page from "../common/Page";

class HomePage extends Page {
    private nameInput: ElementFinder;
    private emailInput: ElementFinder;
    private passwordInput: ElementFinder;
    private exampleCheckBox: ElementFinder;
    private genderDropdown: ElementFinder;
    private employmentStatusRadioButton: ElementFinder;
    private dateOfBirthDateInput: ElementFinder;
    private submitButton: ElementFinder;
    private formBody: ElementFinder;

    constructor() {
        super();
        this.nameInput = element(by.name("name"));
        this.emailInput = element(by.name("email"));
        this.passwordInput = element(by.id("exampleInputPassword1"));
        this.exampleCheckBox = element(by.id("exampleCheck1"));
        this.genderDropdown = element(
            by.cssContainingText("#exampleFormControlSelect1 option", "Female")
        );
        this.employmentStatusRadioButton = element(by.id("inlineRadio2"));
        this.dateOfBirthDateInput = element(by.name("bday"));
        this.submitButton = element(by.buttonText("Submit"));
        this.formBody = element(by.tagName('body'));
    }


    public setName(v: string) {
        return this.nameInput.sendKeys(v);
    }

    public setEmail(v: string) {
        return this.emailInput.sendKeys(v);
    }

    public getEmail(): ElementFinder {
        return this.emailInput;
    }

    public getName(): ElementFinder {
        return this.nameInput;
    }

    public setPassword(v: string) {
        return this.passwordInput.sendKeys(v);
    }

    public getPassword(): ElementFinder {
        return this.passwordInput;
    }

    public selectExample() {
        return this.exampleCheckBox.click();
    }

    public selectGender() {
        return this.genderDropdown.click();
    }

    public selectEmployeementStatus() {
        return this.employmentStatusRadioButton.click();
    }

    public setDob(v: string) {
        return this.dateOfBirthDateInput.sendKeys(v);
    }

    public submit() {
        return this.submitButton.click();
    }

    public async clearRequiredFields() {
        await this.nameInput.sendKeys("");
        await this.emailInput.sendKeys("");
        await this.formBody.click();
        console.log("name");

    }
}

module.exports = new HomePage();