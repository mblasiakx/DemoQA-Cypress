export class BasePage {
  get categoryCards() {
    return cy.get('.category-cards')
  }

  get leftPanel() {
    return cy.get('.left-pannel')
  }

  goToSectionFromCategoryCards(name) {
    return this.categoryCards.contains(name).click()
  }

  goToSectionFromleftPanel(name) {
    return this.leftPanel.contains(name).click()
  }
}
