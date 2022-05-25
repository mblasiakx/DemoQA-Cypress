describe('Practice Form', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/')

        //go to forms tab
        cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
        cy.get('.main-header').contains('Forms').should('be.visible')

        //go to Practice form section
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
        cy.wait(1000)
        cy.get('.main-header').contains('Practice Form').should('be.visible')
    })

    it('Proper form validation', ()=>{
        cy.get('.practice-form-wrapper').should('be.visible')
        //cy.get('#firstName').type('Name')

    })

  

    // TO OD :
    // Finish
})