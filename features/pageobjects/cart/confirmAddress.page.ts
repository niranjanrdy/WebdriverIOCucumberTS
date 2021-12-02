class AddressConfirmPage{
    get AddressPageHeader(){
        return $(".page-heading");
    }

    get addressPageCheckoutBtn(){
        return $("//button[@name='processAddress']")
    }
    async CheckoutBtnAddressPage(){
        await this.addressPageCheckoutBtn.scrollIntoView()
        await this.addressPageCheckoutBtn.click();
    }

}
export default new AddressConfirmPage()