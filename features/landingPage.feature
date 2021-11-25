Feature: Landing page of internet herokuapp
  # Background: Login Step
  #   Given I am on the landing page of herokuapp

  # Scenario: As a user I validate landing page header

  #   Given I am on the landing page of herokuapp
  #   Then I should see a header text "Welcome to the-internet"

  Scenario: Validate checkbox
    Given  I am on the landing page of herokuapp
    When I click on checkbox menu
    Then I should be navigated to checkbox page
    Then I validate checkbox2 is selected
