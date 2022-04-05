describe('Test Check box', ()=>{
    it('Go to Elements tab and check Check box section',()=>{
        cy.visit('https://demoqa.com/')

        //go to elements tab
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get('.main-header').contains('Elements').should('be.visible')

        //go to Check box section
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
        cy.wait(2000)
        cy.get('.main-header').contains('Check Box').should('be.visible')

        //show check boxes
        cy.wait(2000)
        cy.get('.rct-option-expand-all > .rct-icon > path').click({force:true})

        //click some checkboxes
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click()
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click()
        cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon > path').click({force:true})
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click({force:true})

    })
})