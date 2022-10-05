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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const Alert_1 = __importDefault(require("../../common/Alert"));
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
let homePage = require("../../pom/HomePage");
(0, cucumber_1.Given)('User is in register page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://qaclickacademy.github.io/protocommerce/";
        yield protractor_1.browser.get(url);
    });
});
(0, cucumber_1.When)('User enters correct name {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.setName(string);
    });
});
(0, cucumber_1.When)(/^enters correct email (.+)$/, function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.setEmail(email);
    });
});
(0, cucumber_1.When)(/^enters correct password (.+)$/, function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.setPassword(password);
    });
});
(0, cucumber_1.When)(/^checks I love Icecream checkBox$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.selectExample();
    });
});
(0, cucumber_1.When)(/^selects valid gender$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.selectGender();
    });
});
(0, cucumber_1.When)(/^selects employeement status$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.selectEmployeementStatus();
    });
});
(0, cucumber_1.When)(/^enters correct dob (.+)$/, function (dob) {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.setDob(dob);
    });
});
(0, cucumber_1.When)(/^Clicks on submit button$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.submit();
    });
});
(0, cucumber_1.Then)(/^\"([^\"]*)\" is displayed$/, function (successtheformhasbeensubmittedsuccessfully) {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.wait(3000);
        expect(yield new Alert_1.default().getSuccessMessage()).to.match(new RegExp(".*" + successtheformhasbeensubmittedsuccessfully, "g"));
    });
});
(0, cucumber_1.When)(/^User leaves name and email fields blank$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.clearRequiredFields();
    });
});
(0, cucumber_1.Then)(/^\"([^\"]*)\" and \"([^\"]*)\" are displayed$/, function (nameisrequired, emailisrequired) {
    return __awaiter(this, void 0, void 0, function* () {
        let actualErrors = yield new Alert_1.default().getErrorMessages();
        yield homePage.scrollTo(homePage.getName());
        yield homePage.wait(3000);
        expect(yield Promise.all(actualErrors.map((err) => err.getText()))).to.eql([nameisrequired]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2N1Y3VtYmVyL3N0ZXBzL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQXFDO0FBQ3JDLCtEQUF1QztBQUN2QyxnREFBdUI7QUFDdkIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU3QyxJQUFBLGdCQUFLLEVBQUMsMEJBQTBCLEVBQUU7O1FBQzlCLE1BQU0sR0FBRyxHQUFHLGlEQUFpRCxDQUFDO1FBQzlELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLG1DQUFtQyxFQUFFLFVBQWdCLE1BQU07O1FBQzVELE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsNkJBQTZCLEVBQUUsVUFBZ0IsS0FBSzs7UUFDckQsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyxnQ0FBZ0MsRUFBRSxVQUFnQixRQUFROztRQUMzRCxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLG1DQUFtQyxFQUFFOztRQUN0QyxNQUFNLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsd0JBQXdCLEVBQUU7O1FBQzNCLE1BQU0sUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQywrQkFBK0IsRUFBRTs7UUFDbEMsTUFBTSxRQUFRLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsMkJBQTJCLEVBQUUsVUFBZ0IsR0FBRzs7UUFDakQsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQywyQkFBMkIsRUFBRTs7UUFDOUIsTUFBTSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLDZCQUE2QixFQUFFLFVBQWdCLDBDQUEwQzs7UUFDMUYsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLElBQUksZUFBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLDBDQUEwQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0gsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLDJDQUEyQyxFQUFFOztRQUM5QyxNQUFNLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQywrQ0FBK0MsRUFBRSxVQUFnQixjQUFjLEVBQUUsZUFBZTs7UUFDakcsSUFBSSxZQUFZLEdBQUcsTUFBTSxJQUFJLGVBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEQsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUN0RSxDQUFDLGNBQWMsQ0FBQyxDQUNuQixDQUFDO0lBQ04sQ0FBQztDQUFBLENBQUMsQ0FBQyJ9