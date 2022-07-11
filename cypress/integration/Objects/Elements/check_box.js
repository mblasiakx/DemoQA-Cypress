export class CheckBox {
  get expandButton() {
    return cy.get('.rct-option-expand-all')
  }
  get allButtons() {
    return cy.get('.rct-text')
  }

  get homeButton() {
    return this.allButtons.contains('Home')
  }

  showAllButtons() {
    return this.expandButton.click()
  }

  clickSingleButton() {
    return this.homeButton.click()
  }
}
