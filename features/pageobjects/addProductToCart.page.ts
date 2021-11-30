class AddProductPage {
    get womenElement() { return $(".title_block") }
    get product() { return $("//img[@title='Faded Short Sleeve T-shirts']") }
    get addProduct() { return $("[data-id-product='1']") }
    async addToCart() {
        await this.product.scrollIntoView()
        await this.addProduct.click();
    }
    get productAddedPopUp() { return $("//h2") }
    get checkOutBtn() { return $("//a[@title='Proceed to checkout']") }
    async proceedToCheckout() {
        await this.checkOutBtn.click();
    }
}
export default new AddProductPage()