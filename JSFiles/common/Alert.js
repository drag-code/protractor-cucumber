"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Alert {
    constructor() {
        this.alertSuccessBox = (0, protractor_1.element)(protractor_1.by.css("div.alert-success"));
        this.alertErrorBox = (0, protractor_1.element)(protractor_1.by.css("div.alert-danger"));
    }
    getSuccessMessage() {
        return this.alertSuccessBox.getText();
    }
    getErrorMessage() {
        return this.alertSuccessBox.getText();
    }
    getErrorMessages() {
        return protractor_1.element
            .all(protractor_1.by.css("div.alert-danger"))
            .getWebElements();
    }
}
exports.default = Alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tb24vQWxlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkU7QUFFN0UsTUFBTSxLQUFLO0lBR1A7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0saUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVNLGdCQUFnQjtRQUNuQixPQUFPLG9CQUFPO2FBQ1QsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUMvQixjQUFjLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxLQUFLLENBQUMifQ==