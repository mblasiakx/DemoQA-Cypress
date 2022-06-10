export class BrowserWindows {
  openTabFromBrowserWindows(path, button) {
    cy.window().then((win) => {
      cy.stub(win, 'open', (url) => {
        win.location.href = path
      }).as('popup')
    })
    cy.get(button).click()
    //cy.get('@popup').should('be.called')
  }
}
