import { Given, When, Then } from "@cucumber/cucumber"
import myaccountPage from "../pageobjects/myaccount.page";
import signinPage from "../pageobjects/signin.page";
import signupPage from "../pageobjects/signup.page";
import signupData from "../testdata/signup.json"
import randomData from "faker"

Given(/^I am in automtionpractice homepage$/, async () => {
await browser.url("http://automationpractice.com/index.php")});

When(/^I click on SignIn button$/,async () => {
    await signinPage.signInBtn.click()
});
When(/^I enter random email$/, async () => {
    await signinPage.emailTextBox.setValue(randomData.internet.email())
});
When(/^I click on create account button$/, async () => {
    await signinPage.createaccountbtn.click()
});
Then(/^I should be navigated to signup page$/, async () => {
    await expect(signupPage.signUpPageHeader).toHaveText("CREATE AN ACCOUNT")
});

When(/^I enter all the fill data$/, async () => {
    await signupPage.firstName.setValue(signupData.firstname)
    await signupPage.lastName.setValue(signupData.lastname)
    await signupPage.password.setValue(signupData.password)
    await signupPage.dobdate.selectByAttribute("value",signupData.DateOfBirth.day)
    await signupPage.dobmonth.selectByAttribute("value",signupData.DateOfBirth.Month)
    await signupPage.dobyear.selectByAttribute("value",signupData.DateOfBirth.Year)
    await signupPage.addressFirstName.setValue(signupData.Address.firstname)
    await signupPage.addressLastName.setValue(signupData.Address.lastname)
    await signupPage.companyvalue.setValue(signupData.Address.company)
    await signupPage.address1.setValue(signupData.Address.address1)
    await signupPage.address2.setValue(signupData.Address.address2)
    await signupPage.city.setValue(signupData.Address.City)
    await signupPage.state.selectByAttribute("value",signupData.Address.State)
    await signupPage.zipCode.setValue(signupData.Address.PostalCode)
    await signupPage.country.selectByAttribute("value",signupData.Address.Country)
    await signupPage.phoneNumber.setValue(signupData.Address.MobileNo)
    await signupPage.addressAlias.setValue(signupData.Address.AliasAddress)
});

When(/^I click on register button$/, async () => {
    await signupPage.registerbtn.click()
});
Then(/^I should navigated to My Account page$/, async () => {
    await expect(myaccountPage.myAccountHeader).toBeDisplayed
});