export default class BrokenLinks {
  clickOnLink(ButtonText) {
    return cy.contains(ButtonText).click()
  }

  checkUrlForTab(UrlLink) {
    return cy.url().should('include', UrlLink)
  }
}
