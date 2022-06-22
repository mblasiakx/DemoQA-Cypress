export default class BrokenLinks {
  clickOnLink(ButtonText) {
    return cy.contains(ButtonText).click()
  }
}
