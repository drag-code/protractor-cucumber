import { Given, Then, When } from "@cucumber/cucumber";
import { browser } from "protractor";
import Alert from "../../common/Alert";
import chai from "chai"
let expect = chai.expect;
let homePage = require("../../pom/HomePage");

Given('User is in register page', async function () {
    const url = "https://qaclickacademy.github.io/protocommerce/";
    await browser.get(url);
});

When('User enters correct name {string}', async function (string) {
    await homePage.setName(string);
});

When(/^enters correct email (.+)$/, async function (email) {
    await homePage.setEmail(email);
});

When(/^enters correct password (.+)$/, async function (password) {
    await homePage.setPassword(password);
});

When(/^checks I love Icecream checkBox$/, async function () {
    await homePage.selectExample();
});

When(/^selects valid gender$/, async function () {
    await homePage.selectGender();
});

When(/^selects employeement status$/, async function () {
    await homePage.selectEmployeementStatus();
});

When(/^enters correct dob (.+)$/, async function (dob) {
    await homePage.setDob(dob);
});

When(/^Clicks on submit button$/, async function () {
    await homePage.submit();
});

Then(/^\"([^\"]*)\" is displayed$/, async function (successtheformhasbeensubmittedsuccessfully) {
    await homePage.wait(3000);
    expect(await new Alert().getSuccessMessage()).to.match(new RegExp(".*" + successtheformhasbeensubmittedsuccessfully, "g"));
});

When(/^User leaves name and email fields blank$/, async function () {
    await homePage.clearRequiredFields();
});

Then(/^\"([^\"]*)\" and \"([^\"]*)\" are displayed$/, async function (nameisrequired, emailisrequired) {
    let actualErrors = await new Alert().getErrorMessages();
    await homePage.scrollTo(homePage.getName());
    await homePage.wait(3000);
    expect(await Promise.all(actualErrors.map((err) => err.getText()))).to.eql(
        [nameisrequired]
    );
});