export class RadioButton {
  get parentOfRadioButtons() {
    return cy.contains('Do you like the site?').parent()
  }
  get buttonInfo() {
    return cy.get('.text-success')
  }
  getButtonByName(name) {
    return this.parentOfRadioButtons.find('div').contains(name)
  }

  checkRadioButton(buttonName) {
    return this.getButtonByName(buttonName).click()
  }
}
