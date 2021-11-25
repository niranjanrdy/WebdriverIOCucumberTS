import {Given, When, Then} from "@cucumber/cucumber";
import landingPage from "../pageobjects/landing.page";

Given("I am on the landing page of herokuapp", async()=>{
    await landingPage.openApp()
    
})
Then("I should see a header text {string}", async(headerText)=>{
    console.log("Comment: "+headerText)
    // const headerElement = $('.heading')
    //expect(await headerElement.getText()).toEqual(headerText)
    await expect(landingPage.headerElement).toHaveText(headerText)
})

  When("I click on checkbox menu", async () => {
    //const checkboxMenu = $("//a[text()='Checkboxes']")
    await landingPage.clickOnCheckboxMenu()
  });

  Then("I should be navigated to checkbox page", async () => {
    //const checkboxHeader = $("//h3")
    await expect(landingPage.checkboxHeader).toBeDisplayed()
    await expect(browser).toHaveUrlContaining("checkboxes")
  });

  Then("I validate checkbox2 is selected", async () => {
    //const checkbox2Element = $("//*[@id='checkboxes']/input[2]")
    await expect(landingPage.checkbox2Element).toBeSelected()
    await browser.pause(5000)
  });