class MyAccountPage {
    get myAccountHeader() { return $("//h1[text()='My account']") }
    get womenMenu() { return $("//a[@title='Women']") }
    async clickOnWomenMenu() { await this.womenMenu.click() }
}
export default new MyAccountPage()