import { browser, element, by, ElementFinder } from "protractor";
import Alert from "../common/Alert";

describe("Actions suite", function () {
    const homePage = require("../pom/HomePage");
    const shopPage = require("../pom/ShopPage");
    const dataSet = require("../../data/realtime-spec-data");
    const using = require("jasmine-data-provider");
    beforeEach(function () {
        const url = "https://qaclickacademy.github.io/protocommerce/";
        browser.get(url);
    });

    it("Test success message after fill form", async () => {
        await homePage.setName("John");
        await homePage.setEmail("John@doe.com");
        await homePage.setPassword("John@doe.com");
        await homePage.selectExample();
        await homePage.selectGender();
        await homePage.selectEmployeementStatus();
        await homePage.setDob("1998-12-01");
        await homePage.submit();
        await homePage.wait(3000);
        expect(new Alert().getSuccessMessage()).toMatch(/.*Success! The Form has been submitted successfully!./g);
    });

    using(dataSet.DataDriven, function (dset, description) {
        it(`Test two products are added to the cart: Added ${description}`, async () => {
            await homePage.navbar.goToShop();
            await shopPage.addProductsToCart(dset.products);
            await shopPage.scrollTo(shopPage.getCheckoutLink());
            await shopPage.wait(3000);
            expect(shopPage.getItemsInCartCount()).toContain(new String(dset.products.length));
        });
    });

    it("Test error messages for required fields", async () => {
        const expectedErrors = ["Name is required", "Email is required"];
        await homePage.clearRequiredFields();
        let actualErrors = await new Alert().getErrorMessages();
        await homePage.scrollTo(homePage.getName());
        await homePage.wait(3000);
        expect(Promise.all(actualErrors.map((err) => err.getText()))).toEqual(
            expectedErrors
        );
    });

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
