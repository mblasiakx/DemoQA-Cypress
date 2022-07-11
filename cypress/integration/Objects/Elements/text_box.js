export class TextBox {
  get userForm() {
    return cy.get('#userForm')
  }

  get userName() {
    return this.userForm.find('#userName')
  }

  get userEmail() {
    return this.userForm.find('#userEmail')
  }

  get currentAddress() {
    return this.userForm.find('#currentAddress')
  }

  get permanentAddress() {
    return this.userForm.find('#permanentAddress')
  }

  get submitButton() {
    return this.userForm.find('.btn-primary')
  }

  putDataIntoUserForm(field, data) {
    switch (field) {
      case 'userName':
        return this.userName.type(data)
      case 'userEmail':
        return this.userEmail.type(data)
      case 'currentAddress':
        return this.currentAddress.type(data)
      case 'permanentAddress':
        return this.permanentAddress.type(data)
    }
  }

  submitUserForm() {
    return this.submitButton.click()
  }
}
