export default class Modals{
     goToModals(){
        cy.get('.accordion > :nth-child(3)> .element-list > .menu-list > #item-4').click()
    }

     testSmallModal(){
        cy.get('#showSmallModal').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('#closeSmallModal').click()
    } 

     testLargeModal(){
        cy.get('#showLargeModal').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('#closeLargeModal').click() 
    } 
}