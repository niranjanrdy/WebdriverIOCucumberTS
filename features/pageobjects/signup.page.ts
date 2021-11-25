class SignUp {
    async url() {
        await browser.url("http://automationpractice.com/index.php")
    }
    get signInBtn() {
        return $(".login")
    }
    get emailTextBox() {
        return $('//input[@id="email_create"]')
    }
    get createaccountbtn() {
        return $('//*[@name="SubmitCreate"]')
    }
    get signUpPageHeader(){
        return $(".page-heading")
    }
    get genderradio() {
        return $('//input[@id="id_gender2"]')
    }
    get fName() {
        return $('//input[@id="customer_firstname"]')
    }
    get lName() {
        return $('//input[@id="customer_lastname"]')
    }
    get password() {
        return $('//input[@id="passwd"]')
    }
    get dobdate() {
        return $('#days')
    }
    get dobmonth() {
        return $('#months')
    }
    get dobyear() {
        return $('#years')
    }
    get checkedbox() {
        return $('//input[@id="optin"]')
    }
    get addressFirstName() {
        return $('//input[@id="firstname"]')
    }
    get addressLastName() {
        return $('//input[@id="lastname"]')
    }
    get companyvalue() {
        return $('//input[@id="company"]')
    }
    get address1() {
        return $('//input[@name="address1"]')
    }
    get address2() {
        return $('//input[@name="address2"]')
    }
    get city() {
        return $('//input[@name="city"]')
    }
    get state() {
        return $('//select[@name="id_state"]')
    }
    get zipCode() {
        return $('//input[@name="postcode"]')
    }
    get country() {
        return $('//select[@name="id_country"]')
    }
    get phoneNumber() {
        return $('//input[@name="phone_mobile"]')
    }
    get addressAlias() {
        return $('//input[@id="alias"]')
    }
    get registerbtn() {
        return $('//button[@name="submitAccount"]')
    }
}
export default new SignUp()