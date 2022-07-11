export class BrowserWindows {
  get newTabButton() {
    return cy.get('#tabButton')
  }
  get newWindowButton() {
    return cy.get('#windowButton')
  }
  get newWindowMessageButton() {
    return cy.get('#messageWindowButton')
  }

  openTabFromBrowserWindows(buttonOption) {
    switch (buttonOption) {
      case 'tabButton':
        return this.newTabButton.click()
      case 'windowButton':
        return this.newWindowButton.click()
      case 'messageWindowButton':
        return this.newWindowMessageButton.click()
    }
  }
}
