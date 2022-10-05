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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Before)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.manage().window().maximize();
}));
(0, cucumber_1.Before)({ tags: "@Regression" }, () => {
    console.log("Before regression test");
});
(0, cucumber_1.After)(function (scenario) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = scenario.result) === null || _a === void 0 ? void 0 : _a.status) === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2N1Y3VtYmVyL2hvb2tzL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBMkQ7QUFDM0QsMkNBQXFDO0FBRXJDLElBQUEsaUJBQU0sRUFBQyxHQUFTLEVBQUU7SUFDZCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsaUJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxnQkFBSyxFQUFDLFVBQWdCLFFBQVE7OztRQUMxQixJQUFJLENBQUEsTUFBQSxRQUFRLENBQUMsTUFBTSwwQ0FBRSxNQUFNLE1BQUssaUJBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDOztDQUNKLENBQUMsQ0FBQyJ9