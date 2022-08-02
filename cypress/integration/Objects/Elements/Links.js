export class Links {
  get linkWrapper() {
    return cy.get('#linkWrapper');
  }
  getLinkUrl(name) {
    return this.linkWrapper.find(`#${name}`);
  }
  get linkInfoMessage() {
    return cy.get('#linkResponse');
  }

  clickOnLinksToSendApiCall(link) {
    return this.getLinkUrl(link).click();
  }
}
