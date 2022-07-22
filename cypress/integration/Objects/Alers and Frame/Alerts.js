export class Alerts {
  get buttonsPanel() {
    return cy.get('#javascriptAlertsWrapper')
  }
  get confirmAlertResult() {
    return cy.get('#confirmResult')
  }
  get promptAlertResult() {
    return cy.get('#promptResult')
  }
  getWindowConfirmClick() {
    return cy.on('window:confirm', () => true)
  }
  actionButton(option) {
    return this.buttonsPanel.find(`#${option}Button`)
  }
  testAlert(alertOption) {
    return this.actionButton(alertOption).click()
  }
}
