Feature: User Registration

@Regression
Scenario: Some errors are displayed when user leaves name and email fields blank
    Given User is in register page
    When User leaves name and email fields blank
    Then "Name is required" and "Email is required" are displayed

Scenario Outline: The user can register correctly
    Given User is in register page
    When User enters correct name "<name>"
    When enters correct email "<email>"
    When enters correct password "<password>"
    When checks I love Icecream checkBox
    When selects valid gender 
    When selects employeement status
    When enters correct dob "<dob>"
    When Clicks on submit button
    Then "Success! The Form has been submitted successfully!." is displayed

Examples:
    | name      | email         | password  | dob         |
    | John Doe  | John@doe.com  | john1223  | 1998-10-10  |