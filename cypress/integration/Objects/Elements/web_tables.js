export default class WebTables{
      goToWebTablesSection(){
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click()
     }

     removeUser(){
            cy.get('#delete-record-3 > svg > path').click()
     }

      editUser(age, departament, salary){
        cy.get('#edit-record-2 > svg').click()
        cy.get('#age').clear()
        cy.get('#age').type(age)
        cy.get('#salary').clear()
        cy.get('#salary').type(salary)
        cy.get('#department').clear()
        cy.get('#department').type(departament)
        cy.get('#submit').click()
}

    addUser(name, surname, email, age, departament, salary){
        
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

       