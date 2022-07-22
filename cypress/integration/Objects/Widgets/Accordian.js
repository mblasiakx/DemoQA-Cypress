export class Accordian {
  get accordianContener() {
    return cy.get('#accordianContainer')
  }
  allSections(sectionName) {
    return this.accordianContener.contains(sectionName)
  }
  clickSection(sectionName) {
    return this.allSections(sectionName).click()
  }
  sectionContent(number) {
    return cy.get(`#section${number}Heading`)
  }
}
