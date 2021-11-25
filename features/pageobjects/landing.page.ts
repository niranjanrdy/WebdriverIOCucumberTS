class LandingPage{

  get headerElement(){
      return $('.heading')
  }
  get checkboxMenu(){
      return $("//a[text()='Checkboxes']")
  }
  get checkboxHeader(){
      return $("//h3")
  }
  get checkbox2Element () {
      return $("//*[@id='checkboxes']/input[2]")
  }
  async openApp(){
      await browser.maximizeWindow()
      await browser.url("https://the-internet.herokuapp.com/")
  }
  async clickOnCheckboxMenu(){
    await this.checkboxMenu.click()
  }
}
export default new LandingPage()