export class CheckBox {
  get expandButton() {
    //return get('.check-box-tree-wrapper')
    return cy.get('.rct-option-expand-all')
  }
  get allButtons() {
    return cy.get('.rct-text')
  }

  showAllButtons() {
    return this.expandButton.click()
  }

  clickSingleButton() {
    return this.allButtons.contains('Home').within(($elm) => {
      cy.get('.rct-checkbox').click()
    })
  }
}
