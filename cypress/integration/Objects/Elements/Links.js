export class Links {
  get linkWrapper() {
    return cy.get('#linkWrapper')
  }

  clickOnLinksToOpenInNewTab(linkId) {
    cy.get(linkId).invoke('removeAttr', 'target').click()
    //cy.url().should('eq', 'https://demoqa.com/') // check url of new opened tab

    /*cy.window().then((win) => {  // only for buttons?
            cy.stub(win, 'open', url => {
              win.location.href = 'https://demoqa.com/'
            }).as("popup")
          })
    
          cy.get('#simpleLink').click()
          cy.get('@popup').should("be.called")*/
  }

  clickOnLinksToSendApiCall(linkId) {
    return this.linkWrapper.get(linkId).click()
  }
}
