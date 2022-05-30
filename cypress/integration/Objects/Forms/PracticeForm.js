export default class PracticeForm{
    static GoToPracticeForm(){
       // cy.get('btn btn-light active').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    }

    static FillAllFields(){
        cy.get('#firstName').type('Test First Name')
        cy.get('#lastName').type('Test First LastName')
        cy.get('#userEmail').type('test@pl.com')
        cy.get('#genterWrapper > .col-md-9 >.custom-control> #gender-radio-1 ').check() //not working
        cy.get('#userNumber').type('123123123')
        cy.get('#dateOfBirthInput').clear()
        cy.get('#dateOfBirthInput').type('30 May 1999') // not working
        cy.get('.subjects-auto-complete__value-container').type('Subject')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').check() // not working
        cy.get('#currentAddress').type('test12345')
        cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r > path').select('NCR') //not working
        cy.get('#stateCity-wrapper > :nth-child(3)').select('Delhi') //not working
        cy.contains('Submit').click()
    }
}