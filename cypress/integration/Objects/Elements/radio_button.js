export class RadioButton {
  get parentOfRadioButtons() {
    return cy.contains('Do you like the site?').parent()
  }

  checkRadioButton(name) {
    return this.parentOfRadioButtons.find('div').contains(name).click()
  }
}
