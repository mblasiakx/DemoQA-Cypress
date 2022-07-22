export class BrowserWindows {
  get windowObject() {
    return cy.window().its('open')
  }
  windowButtons(option) {
    return cy.get(`#${option}Button`)
  }
  openTabFromBrowserWindows(buttonOption) {
    return this.windowButtons(buttonOption).click()
  }
}
