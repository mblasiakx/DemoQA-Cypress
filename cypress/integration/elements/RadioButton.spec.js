describe('Radio button', ()=>{
    it('Test Radio button', ()=>{
        cy.visit('https://demoqa.com/')

        //go to elements tab
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get('.main-header').contains('Elements').should('be.visible')

        //go to radio button
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
        cy.get('.main-header').contains('Radio Button').should('be.visible')

        //click radio buttons
      
        cy.get(':nth-child(2) > .custom-control-label').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .custom-control-label').click()
        
        

    })
})