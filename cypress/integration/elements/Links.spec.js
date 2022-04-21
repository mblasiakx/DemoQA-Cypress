describe('Check Links',()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/')

        //go to elements tab
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get('.main-header').contains('Elements').should('be.visible')

        //go to Links section
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
        cy.wait(1000)
        cy.get('.main-header').contains('Links').should('be.visible')
    })

    //it('Links opened in new tabs', ()=>{

    //})

    it('Links with sending api call', ()=>{

        //created
       
        //cy.get('#created').click()
        //cy.get('#linkWrapper > :nth-child(5) > #created').click()
        //cy.get('#linkWrapper').find('#created').click()
        //cy.get('#created').click()
        //cy.get('#linkWrapper')
        cy.contains('Created').click()

    })


    //To do :
    //- jak chwytac linki zeby byly znajdowane
    // jak testowac url w nowej karcie + widok w  tym mowym oknie
})