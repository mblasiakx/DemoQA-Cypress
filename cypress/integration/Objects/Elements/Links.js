export class Links {
  get linkWrapper() {
    return cy.get('#linkWrapper')
  }
  get createdLink() {
    return this.linkWrapper.find('#created')
  }
  get noContnetLink() {
    return this.linkWrapper.find('#no-content')
  }
  get movedLink() {
    return this.linkWrapper.find('#moved')
  }
  get badRequestLink() {
    return this.linkWrapper.find('#bad-request')
  }
  get unauthorizedLink() {
    return this.linkWrapper.find('#unauthorized')
  }
  get forbiddenLink() {
    return this.linkWrapper.find('#forbidden')
  }
  get notFoundLink() {
    return this.linkWrapper.find('#invalid-url')
  }

  /*clickOnLinksToOpenInNewTab(linkId) {
    cy.get(linkId).invoke('removeAttr', 'target').click()

    cy.window().then((win) => {
      // only for buttons?
      cy.stub(win, 'open', (url) => {
        win.location.href = 'https://demoqa.com/'
      }).as('popup')
    })

    cy.get('#simpleLink').click()
    cy.get('@popup').should('be.called')
  }*/

  clickOnLinksToSendApiCall(link) {
    switch (link) {
      case 'created':
        return this.createdLink.click()
      case 'noContent':
        return this.noContnetLink.click()
      case 'moved':
        return this.movedLink.click()
      case 'badRequest':
        return this.badRequestLink.click()
      case 'unauthorized':
        return this.unauthorizedLink.click()
      case 'forbidden':
        return this.forbiddenLink.click()
      case 'notFound':
        return this.notFoundLink.click()
    }
  }
}
