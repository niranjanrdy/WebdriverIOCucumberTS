class OrderCompletedPage{
    get orderCompletedHeader(){
        return $(".page-heading")
    }

    get confirmationMessage(){
        return $("//strong[text()='Your order on My Store is complete.']")
        
    }
}
export default new OrderCompletedPage()