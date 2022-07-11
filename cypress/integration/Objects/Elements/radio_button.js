export class RadioButton {
  get parentOfRadioButtons() {
    return cy.contains('Do you like the site?').parent()
  }

  get yesButton() {
    return this.parentOfRadioButtons.find('div').contains('Yes')
  }

  get impressiveButton() {
    return this.parentOfRadioButtons.find('div').contains('Impressive')
  }

  checkRadioButton(buttnName) {
    switch (buttnName) {
      case 'Yes':
        return this.yesButton.click()

      case 'Impressive':
        return this.impressiveButton.click()
    }
  }
}
