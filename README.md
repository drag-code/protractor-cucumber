# protractor-cucumber

E2E automated website using protractor and cucumber

To run this project execute the following commands:

```
npm i
npm start
```

This will run all the test cases inside this project and it will generate a report with the test results. You can see this report under this path:
_testcases -> reports -> Report.html_

If you want to see a more detailed report of the test cases run `npm run cucumbertest`. Check it out under:
_cucumber -> reports -> Report.html_

This suite of test cases contains passed and failed test cases so you can see the difference between formats.

Reports were generated by using:
**protractor-jasmine2-html-reporter and cucumber-html-reporter** respectively
