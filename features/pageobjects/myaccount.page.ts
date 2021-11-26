class MyAccountPage{
    get myAccountHeader(){return $("//h1[text()='My Account']")}
}
export default new MyAccountPage()