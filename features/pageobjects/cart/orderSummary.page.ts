class OrderSummaryPage{
    get orderSummaryPage(){return $(".page-heading")}

    get confirmOrder(){return $("//button[@class='button btn btn-default button-medium']/span")}
    async clickConfirmOrder(){
        await this.confirmOrder.click()
    }
}
export default new OrderSummaryPage