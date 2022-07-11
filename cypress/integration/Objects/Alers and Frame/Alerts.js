export class Alerts {
  get buttonsPanel() {
    return cy.get('#javascriptAlertsWrapper')
  }
  get alertButton() {
    return this.buttonsPanel.find('#alertButton')
  }
  get confirmButton() {
    return this.buttonsPanel.find('#confirmButton')
  }
  get promptButton() {
    return this.buttonsPanel.find('#promtButton')
  }

  testAlert(alertOption) {
    switch (alertOption) {
      case 'alert':
        return this.alertButton.click()
      case 'confirm':
        return this.confirmButton.click()
      case 'prompt':
        return this.promptButton.click()
    }
  }

  testPromptAlert() {
    /*  cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns('This is a test text')
        cy.get('#promtButton').click()
      })*/
    //cy.get('#promptResult').should('have.text', 'You entered This is a test text')
  }
}
