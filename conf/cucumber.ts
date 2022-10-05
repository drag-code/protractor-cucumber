import { Config } from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    framework: "custom",
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    specs: [
        "../../cucumber/features/demo.feature"
    ],
    capabilities: {
        browserName: "firefox",
    },
    onComplete: () => {
        const options: reporter.Options = {
            theme: 'bootstrap',
            jsonFile: './cucumber/reports/report.json',
            output: './cucumber/reports/report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "1.0.0",
                "Test Environment": "STAGING",
                "Browser": "Firefox  105.0.2",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote",
                "Tester": "Esteban Alexis Arce Gomez"
            }
        };

        reporter.generate(options);
    },
    cucumberOpts: {
        // require step definitions
        format: "json:../../cucumber/reports/report.json",
        require: [
            '../cucumber/**/*.js' // accepts a glob
        ],
    }
};
