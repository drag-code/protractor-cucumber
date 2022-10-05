"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    framework: "jasmine",
    directConnect: true,
    specs: ["../testcases/realtime-spec.js"],
    capabilities: {
        browserName: "chrome",
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
        const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './testcases/reports/',
            takeScreenshotsOnlyOnFailures: true,
            fileName: 'Report'
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmYvY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNkM7QUFFbEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsS0FBSyxFQUFFLENBQUMsK0JBQStCLENBQUM7SUFDeEMsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxTQUFTLEVBQUU7UUFDUCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFFMUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FDeEIsSUFBSSxvQkFBb0IsQ0FBQztZQUNyQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLDZCQUE2QixFQUFFLElBQUk7WUFDbkMsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdkM7SUFDRCx1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsS0FBSztJQUNMLGVBQWUsRUFBRSxFQUFFLHNCQUFzQixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0NBQ3ZFLENBQUMifQ==