import { browser, Config } from 'protractor';

export let config: Config = {
    framework: "jasmine",
    directConnect: true,
    specs: ["../testcases/realtime-spec.js"],
    capabilities: {
        browserName: "chrome",
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './testcases/reports/',
                takeScreenshotsOnlyOnFailures: true,
                fileName: 'Report'
            })
        );
    },
    suites: {
        regression: ["../testcases/spec.js"]
    },
    // multiCapabilities: [
    //     {
    //         browserName: "firefox",
    //     },
    // ],
    jasmineNodeOpts: { defaultTimeoutInterval: 15000, showColors: true },
};
