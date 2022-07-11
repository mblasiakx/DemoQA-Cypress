export class WebTables {
  get webTablesWrapper() {
    return cy.get('.web-tables-wrapper')
  }
  get firstElementDelete() {
    return this.webTablesWrapper.find('#delete-record-1')
  }
  get secoundElementDelete() {
    return this.webTablesWrapper.find('#delete-record-2')
  }
  get thirdElementDelete() {
    return this.webTablesWrapper.find('#delete-record-3')
  }
  get firstElementEdit() {
    return this.webTablesWrapper.find('#edit-record-1')
  }
  get secoundElementEdit() {
    return this.webTablesWrapper.find('#edit-record-2')
  }
  get thirdElementEdit() {
    return this.webTablesWrapper.find('#edit-record-3')
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

  removeUser(number) {
    switch (number) {
      case '1':
        return this.firstElementDelete.click()
      case '2':
        return this.secoundElementDelete.click()
      case '3':
        return this.thirdElementDelete.click()
    }
  }

  goToEditUserPanel(user) {
    switch (user) {
      case '1':
        return this.firstElementEdit.click()
      case '2':
        return this.secoundElementEdit.click()
      case '3':
        return this.thirdElementEdit.click()
    }
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
    }
  }

  submitForm() {
    return this.submitButton.click()
  }
}
