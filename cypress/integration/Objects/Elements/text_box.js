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
      case 'user':
        return this.userName.type(data)
      case 'email':
        return this.userEmail.type(data)
      case 'current address':
        return this.currentAddress.type(data)
      case 'permanent address':
        return this.permanentAddress.type(data)
      default:
        throw new Error('No such element implemented!')
    }
  }

  submitUserForm() {
    return this.submitButton.click()
  }
}
