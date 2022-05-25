export default class Links{
    static GoToLinksSection(){
         cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
        //cy.wait(1000)
         cy.get('.main-header').contains('Links').should('be.visible')
    }
}



      