export class TextBox {
  get userForm() {
    return cy.get('#userForm')
  }

  putDataIntoUserForm(inputId, data) {
    return this.userForm.get(inputId).type(data)
  }

  submitUserForm() {
    return cy.get('#submit').click()
  }
}
