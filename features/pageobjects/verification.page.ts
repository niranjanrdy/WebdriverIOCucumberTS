class VerificationPage{
    get verificationPageHeader(){
        return $(".page-heading")
    }

    get agreeCheckBox(){
        return $("#cgv")
    }
    async clickAgreeCheckBox(){
        await this.agreeCheckBox.click()
    }

    get verificationPageCheckoutBtn(){
        return $("//button[@name='processCarrier']")
    }
    async clickonTnC(){
        await this.verificationPageCheckoutBtn.scrollIntoView()
        await this.verificationPageCheckoutBtn.click()
    }


}
export default new VerificationPage()