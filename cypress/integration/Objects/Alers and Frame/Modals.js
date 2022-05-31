export default class Modals{
    static GoToModals(){
        cy.get('.accordion > :nth-child(3)> .element-list > .menu-list > #item-4').click()
    }

    static TestSmallModal(){
        cy.get('#showSmallModal').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('#closeSmallModal').click()
    } 

    static TestLargeModal(){
        cy.get('#showLargeModal').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('#closeLargeModal').click() 
    } 
}