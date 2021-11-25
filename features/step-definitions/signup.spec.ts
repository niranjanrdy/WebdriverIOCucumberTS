import { Given, When, Then } from "@cucumber/cucumber"
import signupPage from "../pageobjects/signup.page";

Given(/^I am in automtionpractice homepage$/, async () => {
await browser.url("http://automationpractice.com/index.php")});

When(/^I click on SignIn button$/,async () => {
    await signupPage.signInBtn.click()
});
When(/^I enter random email$/, async () => {
    await signupPage.emailTextBox.setValue("seleniumauto@automationtest.com")
});
When(/^I click on create account button$/, async () => {
    await signupPage.createaccountbtn.click()
});
Then(/^I should be navigated to signup page$/, async () => {
    await expect(signupPage.signUpPageHeader).toHaveText("CREATE AN ACCOUNT")
});

When(/^I enter all the fill data$/, async () => {
    await signupPage.fName.setValue("")
    await signupPage.lName.setValue("")
    await signupPage.password.setValue("")
    await signupPage.dobdate.selectByAttribute("value","")
    await signupPage.dobmonth.selectByAttribute("value","")
    await signupPage.dobyear.selectByAttribute("value","")
    await signupPage.addressFirstName.setValue("")
    await signupPage.addressLastName.setValue("")
    await signupPage.companyvalue.setValue("")
    await signupPage.address1.setValue("")
    await signupPage.address2.setValue("")
    await signupPage.city.setValue("")
    await signupPage.state.selectByAttribute("value","")
    await signupPage.zipCode.setValue("")
    await signupPage.country.selectByAttribute("value","")
    await signupPage.phoneNumber.setValue("")
});

When(/^I click on register button$/, async () => {
    await signupPage.registerbtn.click()
});
Then(/^I should navigated to some page$/, async () => {
    await browser.pause(7000)
});