class CartSummaryPage {

    get summaryPageHeader() { return $("#cart_title") }
    get cartProceedToCheckoutBtn() { return $(".button.btn.btn-default.standard-checkout.button-medium"); }
    async clickCartProceedToCheckBtn() {
        await this.cartProceedToCheckoutBtn.scrollIntoView()
        await this.cartProceedToCheckoutBtn.click();
    }
}
export default new CartSummaryPage()