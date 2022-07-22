export class CheckBox {
  get expandButton() {
    return cy.get('.rct-option-expand-all')
  }
  get allButtons() {
    return cy.get('.rct-text')
  }
  getOneButton(btn) {
    return this.allButtons.contains(btn)
  }

  showAllButtons() {
    return this.expandButton.click()
  }

  clickSingleButton(btn) {
    return this.getOneButton(btn).click()
  }
}
