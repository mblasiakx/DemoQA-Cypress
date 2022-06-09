export class Accordian {
  get accordianContener() {
    return cy.get('#accordianContainer')
  }

  clickSection(sectionName) {
    return this.accordianContener.contains(sectionName).click()
  }
}
