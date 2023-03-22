class HomePage{
    navigate(url){
        cy.visit(url)
    }
    DateFilter(){
        cy.get('[data-test="transaction-list-filter-date-range-button"]')    
        .click({force:true})
}
    StartDate(){
        cy.get('[data-date="2023-03-07"]')
        .click()
    }
    EndDate(){
        cy.get('[data-date="2023-03-21"]')
        .click({force:true})
    }
    ClearFilter(){
        cy.get('[data-test="transaction-list-filter-date-clear-button"]')
        .click({force:true})
    }
    AmountFilter(){
        cy.get('[data-test="transaction-list-filter-amount-range-button"]')
        .click({force:true})
    }
    MinAmount(){
        cy.get('[data-index="0"]')
        .invoke('attr','style','left: 11%')
        .click()
    }
    MaxAmount(){
        cy.get('[data-index="1"]')
        .invoke('attr','style','right: 10%')
        .click()

    }
    CloseAmountFilter(){
        cy.get('[data-test="transaction-list"]')
        .click({force:true})
    }
    ClearAmount(){
        cy.get('[data-test="transaction-list-filter-amount-clear-button"]')
        .click()
    }
    listitemDetail(){
        cy.get('[data-test="transaction-item-mEYl_ZSc5Qqe"]')
        .click({force:true})
    }
    AddComment(){
        cy.get('#transaction-comment-input-mEYl_ZSc5Qqe')
        .click()
    }
    CreateATransaction(){
        cy.get('[data-test="nav-top-new-transaction"]')
        .click({force:true})
    }
    SearchUser(user){
        cy.get('[data-test="user-list-search-input"]')
        .click({force:true})
        .type(user)
    }
    SelectUser(){
        cy.contains('span','Arely Kertzmann')
        .click()
    }
    EnterTransferAmount(amount){
        cy.get('#amount')
        .type(amount)
    }
    EnterNote(note){
        cy.get('#transaction-create-description-input')
        .type(note)
    }
    PayTheAmount(){
        cy.get('[data-test="transaction-create-submit-payment"]')
        .click()
    }
    CreateAnotherTransaction(){
        cy.get('[data-test="new-transaction-create-another-transaction"]')
        .click()
    }
    GoToHome(){
        cy.get('[data-test="sidenav-home"]')
        .click()
    }
    OpenPostDetail(){
        cy.get('[data-test="transaction-item-4AvM8cN1DdS"]')        
        .click({force:true})
    }
    PostComment(postcomment){
        cy.get('[data-test="transaction-comment-input-4AvM8cN1DdS"]')       
        //.click({force:true})
        .type(postcomment)
        .type('{enter}')
    }
    LikeComment(){
        cy.get('[data-test="transaction-like-button-4AvM8cN1DdS"]')
        .click({force:true})
    }
}
export default HomePage