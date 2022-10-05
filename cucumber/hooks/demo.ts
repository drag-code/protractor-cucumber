import { Before, After, Status } from "@cucumber/cucumber";
import { browser } from "protractor";

Before(async () => {
    await browser.manage().window().maximize();
});

Before({ tags: "@Regression" }, () => {
    console.log("Before regression test");
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});