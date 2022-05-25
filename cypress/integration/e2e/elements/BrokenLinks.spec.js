describe('Broken Links and Valid Links', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/')

        //go to elements tab
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get('.main-header').contains('Elements').should('be.visible')

        //go to Broken Links section
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-6 > .text').click()
        cy.wait(1000)
        cy.get('.main-header').contains('Broken Links - Images').should('be.visible')
    })
    
    it('Valid link',()=>{
        //cy.get('[href="http://demoqa.com"]').contains('Click Here for Valid Link ').click()
        //cy.get('.col-md-6 > :nth-child(2)').find('[href="http://demoqa.com"]').click()


    })

    it('Broken link',()=>{
       // cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]').click()
    })
})