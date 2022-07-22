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
  get linkInfoMessage() {
    return cy.get('#linkResponse')
  }
  clickOnLinksToSendApiCall(link) {
    switch (link) {
      case 'created':
        return this.createdLink.click()
      case 'no content':
        return this.noContnetLink.click()
      case 'moved':
        return this.movedLink.click()
      case 'bad request':
        return this.badRequestLink.click()
      case 'unauthorized':
        return this.unauthorizedLink.click()
      case 'forbidden':
        return this.forbiddenLink.click()
      case 'not found':
        return this.notFoundLink.click()
      default:
        throw new Error('No such element implemented!')
    }
  }
}
