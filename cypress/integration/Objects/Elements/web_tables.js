export class WebTables {
  get webTablesWrapper() {
    return cy.get('.web-tables-wrapper')
  }
  getElementOperation(operation, number) {
    return this.webTablesWrapper.find(`#${operation}-record-${number}`)
  }
  get userformEdit() {
    return cy.get('.modal-content')
  }
  get firstNameEdit() {
    return this.userformEdit.find('#firstName')
  }
  get lastNameEdit() {
    return this.userformEdit.find('#lastName')
  }
  get emailEdit() {
    return this.userformEdit.find('#userEmail')
  }
  get ageEdit() {
    return this.userformEdit.find('#age')
  }
  get salayEdit() {
    return this.userformEdit.find('#salary')
  }
  get departmentEdit() {
    return this.userformEdit.find('#department')
  }
  get submitButton() {
    return this.userformEdit.find('#submit')
  }
  get addUserButton() {
    return this.webTablesWrapper.find('#addNewRecordButton')
  }
  getSpecificElementFromList() {
    return cy.get('.rt-tbody > :nth-child(1)> :nth-child(1)>:nth-child(1)')
  }

  removeUser(number) {
    return this.getElementOperation('delete', number).click()
  }

  goToEditUserPanel(number) {
    return this.getElementOperation('edit', number).click()
  }

  goToAddUserForm() {
    return this.addUserButton.click()
  }

  addAndEditUser(field, info) {
    switch (field) {
      case 'firstName':
        return this.firstNameEdit.clear().type(info)
      case 'lastName':
        return this.lastNameEdit.clear().type(info)
      case 'email':
        return this.emailEdit.clear().type(info)
      case 'age':
        return this.ageEdit.clear().type(info)
      case 'salary':
        return this.salayEdit.clear().type(info)
      case 'department':
        return this.departmentEdit.clear().type(info)
      default:
        throw new Error('No such element implemented!')
    }
  }

  submitForm() {
    return this.submitButton.click()
  }
}
