import { Given, When, Then } from "@cucumber/cucumber"
import myaccountPage from "../pageobjects/myaccount.page";
import SignUpPage from "../pageobjects/signUpPage";
import randomData from "faker"
import addProductPage from "../pageobjects/addProductToCart.page";
import CartSummaryPage from "../pageobjects/cartSummary.page"
import confirmAddressPage from "../pageobjects/confirmAddress.page";
import verificationPage from "../pageobjects/verification.page";
import paymentPage from "../pageobjects/payment.page";
import orderSummaryPage from "../pageobjects/orderSummary.page";
import orderCompletionPage from "../pageobjects/orderCompletion.page";
import landingPagePage from "../pageobjects/landingPage.page";
import AuthenticationPage from "../pageobjects/Authentication.page";


Given("I landed on automation pratices page", async () => {
    await landingPagePage.openPage();
})

When("I click on sign-in button", async () => {
    await landingPagePage.clickSignIn();
})
Then('I landed on {string} Page', async (headerText) => {
    await expect(browser).toHaveUrlContaining("authentication");
    await expect(AuthenticationPage.authenticationHeader).toHaveTextContaining(headerText);
})
When("I provide email id click on create an account", async () => {
    await AuthenticationPage.emailAddress();
    await AuthenticationPage.createAnAccountElement.click()
})
Then("I land on {string} page", async (headerText) => {
    await expect(SignUpPage.signupPageHeading).toHaveTextContaining(headerText);
})
When("I fill personal infromation click register", async () => {
    await SignUpPage.genderElement.click();
    await SignUpPage.firstName();
    await SignUpPage.lastName();
    await SignUpPage.password();
    await SignUpPage.days();
    await SignUpPage.months();
    await SignUpPage.years();
    await SignUpPage.clickLetterCheckBox();
    await SignUpPage.CheckBox2();
    await SignUpPage.address_firstName();
    await SignUpPage.address_lastName();
    await SignUpPage.company();
    await SignUpPage.address();
    await SignUpPage.address2();
    await SignUpPage.city();
    await SignUpPage.state();
    await SignUpPage.postalCode();
    await SignUpPage.country();
    await SignUpPage.additional();
    await SignUpPage.homePhone();
    await SignUpPage.mobilePhone();
    await SignUpPage.assignAddress();
    await SignUpPage.register();
})

Then("I should be landing on {string} page", async (headerText) => {
    await expect(browser).toHaveUrlContaining("my-account");
    await expect(myaccountPage.myAccountHeader).toHaveTextContaining(headerText);
})
When("I Click Women button", async () => {
    await myaccountPage.clickOnWomenMenu()
})
Then("I could see some products in women section", async () => {
    await expect(addProductPage.womenElement).toBeDisplayed
})
Then("I Click that product add that into Cart", async () => {
    await addProductPage.addToCart()
})
Then("I should see the pop-up message {string}", async (headerText) => {
    await expect(addProductPage.productAddedPopUp).toHaveTextContaining(headerText)
})
When("I will click on proceed to Checkout", async () => {
    await addProductPage.proceedToCheckout()
    await browser.pause(2000)
})
Then("I Should be navigated to the page {string}", async (headerText) => {
    await expect(CartSummaryPage.summaryPageHeader).toHaveTextContaining(headerText)
})
When("I click the Proceed to checkout botton of shopping cart summary page", async () => {
    await CartSummaryPage.clickCartProceedToCheckBtn();
})
Then("I should be navigated to address page having text {string}", async (headerText) => {
    await expect(confirmAddressPage.AddressPageHeader).toHaveTextContaining(headerText)
})
When("I click the Proceed to checkout botton of Address Page", async () => {
    await confirmAddressPage.CheckoutBtnAddressPage();
})

Then("I should be navigated to shipping page {string}", async (headerText) => {
    await expect(verificationPage.verificationPageHeader).toHaveTextContaining(headerText)
})
When("I click the checkbox of Tnc box", async () => {
    await verificationPage.clickAgreeCheckBox();
})
When("I click the Proceed to checkout boutton of verification page", async () => {
    await verificationPage.clickonTnC();
})
Then("I should be navigated to payment page contains header {string}", async (headerText) => {
    await expect(paymentPage.paymentPageHeader).toHaveTextContaining(headerText);
    await expect(browser).toHaveUrlContaining("order")
})
When("I select the payment method and click to proceed", async () => {
    await paymentPage.clickPayByBankWire();
    await browser.pause(2000);
})
Then("I should me navigate to order summary page {string}", async (headerText) => {
    await expect(orderSummaryPage.orderSummaryPage).toHaveTextContaining(headerText)
    await expect(browser).toHaveUrlContaining("payment")
})
When("I click the confirm order button", async () => {
    await orderSummaryPage.clickConfirmOrder();
})
Then("I will navigated to {string}", async (headerText) => {
    await expect(orderCompletionPage.orderCompletedHeader).toHaveTextContaining(headerText)
})
Then("I will receive message your order on My store is completed", async () => {
    await expect(orderCompletionPage.confirmationMessage).toBeDisplayed();
})