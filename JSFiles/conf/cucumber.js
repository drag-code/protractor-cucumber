"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
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
        const options = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25mL2N1Y3VtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUVBQW1EO0FBRXhDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixLQUFLLEVBQUU7UUFDSCxzQ0FBc0M7S0FDekM7SUFDRCxZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsU0FBUztLQUN6QjtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDYixNQUFNLE9BQU8sR0FBcUI7WUFDOUIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxNQUFNLEVBQUUsZ0NBQWdDO1lBQ3hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFFBQVEsRUFBRSwyQkFBMkI7YUFDeEM7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzNCLE1BQU0sRUFBRSx5Q0FBeUM7UUFDakQsT0FBTyxFQUFFO1lBQ0wscUJBQXFCLENBQUMsaUJBQWlCO1NBQzFDO0tBQ0o7Q0FDSixDQUFDIn0=