export default class CheckBox{
     goToCheckBoxSection(){
          cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
          //cy.wait(2000)
          //cy.get('.main-header').contains('Check Box').should('be.visible')

    }

     showCheckBoxes(){
        cy.get('.rct-option-expand-all > .rct-icon > path').click({force:true})
    }

     clickCheckBoxes(){
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click()
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click()
    cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon > path').click({force:true})
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click({force:true})

    }

   
    
}