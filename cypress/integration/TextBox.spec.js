describe('Test text box', ()=>{
    it('Go to Elements tab and check Text box section', ()=>{
        cy.visit('https://demoqa.com/')

        //go to elements tab
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get('.main-header').contains('Elements').should('be.visible')

        //go to Text box section
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
        cy.wait(1000)
        cy.get('.main-header').contains('Text Box').should('be.visible')

        //test Text box section's form
        cy.get('#userName').type('Name')
        cy.wait(1000)
        cy.get('#userEmail').type('name@test.com')
        cy.wait(1000)
        cy.get('#currentAddress').type('Address 44')
        cy.wait(1000)
        cy.get('#permanentAddress').type('New Address 44')
        cy.wait(1000)
        cy.get('#submit').click()
        cy.wait(1000)
        cy.get('.border').should('be.visible')

    })
})