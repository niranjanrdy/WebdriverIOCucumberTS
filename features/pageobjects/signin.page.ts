class SignIn{
    get signInBtn() {return $(".login")}
    get emailTextBox() { return $('//input[@id="email_create"]') }
    get createaccountbtn() { return $('//*[@name="SubmitCreate"]') }
}
export default new SignIn()