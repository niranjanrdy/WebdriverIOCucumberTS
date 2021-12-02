class PaymentPage{

    get paymentPageHeader(){
        return $(".page-heading")
    }
    get payByBankWire(){
        return $("//a[@class='bankwire']")
    }

    async clickPayByBankWire(){
        await this.payByBankWire.scrollIntoView()
        await this.payByBankWire.click()

    }

}
export default new PaymentPage()