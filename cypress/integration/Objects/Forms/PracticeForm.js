export default class PracticeForm{
    static GoToPracticeForm(){
       // cy.get('btn btn-light active').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    }

    static FillAllFields(name, surname, email, userNumber, BirthDate, Subject, CurrentAddress, Data1, City){
        cy.get('#firstName').type(name)
        cy.get('#lastName').type(surname)
        cy.get('#userEmail').type(email)
        cy.get('#genterWrapper > .col-md-9 >.custom-control> #gender-radio-1 ').check() //not working
        cy.get('#userNumber').type(userNumber)
        cy.get('#dateOfBirthInput').clear()
        cy.get('#dateOfBirthInput').type(BirthDate) // not working
        cy.get('.subjects-auto-complete__value-container').type(Subject)
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').check() // not working
        cy.get('#currentAddress').type(CurrentAddress)
        cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r > path').select(Data1) //not working
        cy.get('#stateCity-wrapper > :nth-child(3)').select(City) //not working
        cy.contains('Submit').click()
    }
}