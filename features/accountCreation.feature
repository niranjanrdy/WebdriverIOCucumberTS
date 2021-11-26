Feature: Create account for automationpractice


    Scenario: Test account creation
        Given I am in automtionpractice homepage
        When I click on SignIn button
        And I enter random email
        And I click on create account button
        Then I should be navigated to signup page
        When I enter all the fill data
        And I click on register button
        Then I should navigated to My Account page