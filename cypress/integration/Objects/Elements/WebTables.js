export default class WebTables{
     static GoToWebTablesSection(){
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click()
     }

     static RemoveUser(){
            cy.get('#delete-record-3 > svg > path').click()
     }

     static EditUser(age, departament, salary){
        cy.get('#edit-record-2 > svg').click()
        cy.get('#age').clear()
        cy.get('#age').type(age)
        cy.get('#salary').clear()
        cy.get('#salary').type(salary)
        cy.get('#department').clear()
        cy.get('#department').type(departament)
        cy.get('#submit').click()
}

    static AddUser(name, surname, email, age, departament, salary){
        //add user
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(name)
        cy.get('#lastName').type(surname)
        cy.get('#userEmail').type(email)
        cy.get('#age').type(age)
        cy.get('#salary').type(salary)
        cy.get('#department').type(departament)
        cy.get('#submit').click()
        cy.get(':nth-child(3) > .rt-tr > :nth-child(1)').contains('NameTest').should('be.visible')
    }

     }

       