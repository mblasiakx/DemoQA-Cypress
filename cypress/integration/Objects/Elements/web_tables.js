export class WebTables {
  get webTablesWrapper() {
    return cy.get('.web-tables-wrapper')
  }

  get modalContent() {
    return cy.get('.modal-content')
  }

  removeUser(recordId) {
    return this.webTablesWrapper.get(recordId).click()
  }

  editUser(recordId, age, departament, salary) {
    this.webTablesWrapper.get(recordId).click()
    cy.get('#age').clear()
    cy.get('#age').type(age)
    cy.get('#salary').clear()
    cy.get('#salary').type(salary)
    cy.get('#department').clear()
    cy.get('#department').type(departament)
    cy.get('#submit').click()
  }

  addUser(name, surname, email, age, departament, salary) {
    this.webTablesWrapper.get('#addNewRecordButton').click()
    cy.get('#firstName').type(name)
    cy.get('#lastName').type(surname)
    cy.get('#userEmail').type(email)
    cy.get('#age').type(age)
    cy.get('#salary').type(salary)
    cy.get('#department').type(departament)
    cy.get('#submit').click()
  }
}
