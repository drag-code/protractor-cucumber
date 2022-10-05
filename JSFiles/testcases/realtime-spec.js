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
const Alert_1 = __importDefault(require("../common/Alert"));
describe("Actions suite", function () {
    const homePage = require("../pom/HomePage");
    const shopPage = require("../pom/ShopPage");
    const dataSet = require("../../data/realtime-spec-data");
    const using = require("jasmine-data-provider");
    beforeEach(function () {
        const url = "https://qaclickacademy.github.io/protocommerce/";
        protractor_1.browser.get(url);
    });
    it("Test success message after fill form", () => __awaiter(this, void 0, void 0, function* () {
        yield homePage.setName("John");
        yield homePage.setEmail("John@doe.com");
        yield homePage.setPassword("John@doe.com");
        yield homePage.selectExample();
        yield homePage.selectGender();
        yield homePage.selectEmployeementStatus();
        yield homePage.setDob("1998-12-01");
        yield homePage.submit();
        yield homePage.wait(3000);
        expect(new Alert_1.default().getSuccessMessage()).toMatch(/.*Success! The Form has been submitted successfully!./g);
    }));
    using(dataSet.DataDriven, function (dset, description) {
        it(`Test two products are added to the cart: Added ${description}`, () => __awaiter(this, void 0, void 0, function* () {
            yield homePage.navbar.goToShop();
            yield shopPage.addProductsToCart(dset.products);
            yield shopPage.scrollTo(shopPage.getCheckoutLink());
            yield shopPage.wait(3000);
            expect(shopPage.getItemsInCartCount()).toContain(new String(dset.products.length));
        }));
    });
    it("Test error messages for required fields", () => __awaiter(this, void 0, void 0, function* () {
        const expectedErrors = ["Name is required", "Email is required"];
        yield homePage.clearRequiredFields();
        let actualErrors = yield new Alert_1.default().getErrorMessages();
        yield homePage.scrollTo(homePage.getName());
        yield homePage.wait(3000);
        expect(Promise.all(actualErrors.map((err) => err.getText()))).toEqual(expectedErrors);
    }));
    // it("Test products in cart sum is correct", async () => {
    //     element(by.linkText("Shop")).click();
    //     addProductToCart(["iphone X", "Samsung Note 8"]);
    //     element(by.partialLinkText("Checkout")).click();
    //     const productSum = await element
    //         .all(by.xpath("//button[@class = 'btn btn-danger']/ancestor::tr"))
    //         .reduce(async (acc: number, curr: ElementFinder) => {
    //             return (
    //                 acc +
    //                 Number(
    //                     (
    //                         await curr
    //                             .element(by.css("td:nth-child(4)"))
    //                             .getText()
    //                     ).replace("₹. ", "")
    //                 )
    //             );
    //         }, 0);
    //     expect(
    //         Number(
    //             (await element(by.css("td.text-right")).getText()).replace(
    //                 "₹. ",
    //                 ""
    //             )
    //         )
    //     ).toEqual(productSum);
    // });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhbHRpbWUtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RjYXNlcy9yZWFsdGltZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBQ2pFLDREQUFvQztBQUVwQyxRQUFRLENBQUMsZUFBZSxFQUFFO0lBQ3RCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQy9DLFVBQVUsQ0FBQztRQUNQLE1BQU0sR0FBRyxHQUFHLGlEQUFpRCxDQUFDO1FBQzlELG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEdBQVMsRUFBRTtRQUNsRCxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQyxNQUFNLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQixNQUFNLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QixNQUFNLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxNQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksZUFBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO0lBQzlHLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLElBQUksRUFBRSxXQUFXO1FBQ2pELEVBQUUsQ0FBQyxrREFBa0QsV0FBVyxFQUFFLEVBQUUsR0FBUyxFQUFFO1lBQzNFLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQyxNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFTLEVBQUU7UUFDckQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDckMsSUFBSSxZQUFZLEdBQUcsTUFBTSxJQUFJLGVBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEQsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUNqRSxjQUFjLENBQ2pCLENBQUM7SUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsMkRBQTJEO0lBQzNELDRDQUE0QztJQUM1Qyx3REFBd0Q7SUFDeEQsdURBQXVEO0lBQ3ZELHVDQUF1QztJQUN2Qyw2RUFBNkU7SUFDN0UsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixxQ0FBcUM7SUFDckMsa0VBQWtFO0lBQ2xFLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0Msb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwwRUFBMEU7SUFDMUUseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixNQUFNO0FBQ1YsQ0FBQyxDQUFDLENBQUMifQ==