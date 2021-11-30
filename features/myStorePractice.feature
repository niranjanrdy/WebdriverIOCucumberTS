Feature: AutomationTesting practice for Mystore


    Scenario: Creating a user accoount and adding product to the cart then placing the order
        Given I landed on automation pratices page
        When I click on sign-in button
        Then I landed on "AUTHENTICATION" Page
        When I provide email id click on create an account
        Then I land on "CREATE AN ACCOUNT" page
        When I fill personal infromation click register
        Then I should be landing on "MY ACCOUNT" page
        When I Click Women button
        Then I could see some products in women section
        And I Click that product add that into Cart
        Then I should see the pop-up message "Product successfully added to your shopping cart"
        And I will click on proceed to Checkout
        Then I Should be navigated to the page "SHOPPING-CART SUMMARY"
        When I click the Proceed to checkout botton of shopping cart summary page
        Then I should be navigated to address page having text "ADDRESSES"
        When I click the Proceed to checkout botton of Address Page
        Then I should be navigated to shipping page "SHIPPING"
        When I click the checkbox of Tnc box
        And I click the Proceed to checkout boutton of verification page
        Then I should be navigated to payment page contains header "PLEASE CHOOSE YOUR PAYMENT METHOD"
        When I select the payment method and click to proceed
        Then I should me navigate to order summary page "ORDER SUMMARY"
        When I click the confirm order button
        Then I will navigated to "ORDER CONFIRMATION"
        And I will receive message your order on My store is completed
