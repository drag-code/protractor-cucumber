"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Page_1 = __importDefault(require("../common/Page"));
class HomePage extends Page_1.default {
    constructor() {
        super();
        this.nameInput = (0, protractor_1.element)(protractor_1.by.name("name"));
        this.emailInput = (0, protractor_1.element)(protractor_1.by.name("email"));
        this.passwordInput = (0, protractor_1.element)(protractor_1.by.id("exampleInputPassword1"));
        this.exampleCheckBox = (0, protractor_1.element)(protractor_1.by.id("exampleCheck1"));
        this.genderDropdown = (0, protractor_1.element)(protractor_1.by.cssContainingText("#exampleFormControlSelect1 option", "Female"));
        this.employmentStatusRadioButton = (0, protractor_1.element)(protractor_1.by.id("inlineRadio2"));
        this.dateOfBirthDateInput = (0, protractor_1.element)(protractor_1.by.name("bday"));
        this.submitButton = (0, protractor_1.element)(protractor_1.by.buttonText("Submit"));
        this.formBody = (0, protractor_1.element)(protractor_1.by.tagName('form-comp'));
    }
    setName(v) {
        return this.nameInput.sendKeys(v);
    }
    setEmail(v) {
        return this.emailInput.sendKeys(v);
    }
    getEmail() {
        return this.emailInput;
    }
    getName() {
        return this.nameInput;
    }
    setPassword(v) {
        return this.passwordInput.sendKeys(v);
    }
    getPassword() {
        return this.passwordInput;
    }
    selectExample() {
        return this.exampleCheckBox.click();
    }
    selectGender() {
        return this.genderDropdown.click();
    }
    selectEmployeementStatus() {
        return this.employmentStatusRadioButton.click();
    }
    setDob(v) {
        return this.dateOfBirthDateInput.sendKeys(v);
    }
    submit() {
        return this.submitButton.click();
    }
    clearRequiredFields() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nameInput.sendKeys("");
            yield this.emailInput.sendKeys("");
            yield this.formBody.click();
        });
    }
}
module.exports = new HomePage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wb20vSG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQsMERBQWtDO0FBRWxDLE1BQU0sUUFBUyxTQUFRLGNBQUk7SUFXdkI7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBQSxvQkFBTyxFQUN6QixlQUFFLENBQUMsaUJBQWlCLENBQUMsbUNBQW1DLEVBQUUsUUFBUSxDQUFDLENBQ3RFLENBQUM7UUFDRixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHTSxPQUFPLENBQUMsQ0FBUztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxRQUFRLENBQUMsQ0FBUztRQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxXQUFXLENBQUMsQ0FBUztRQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0sd0JBQXdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFTSxNQUFNLENBQUMsQ0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVZLG1CQUFtQjs7WUFDNUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7Q0FDSjtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9