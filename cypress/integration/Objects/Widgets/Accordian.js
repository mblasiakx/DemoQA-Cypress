export class Accordian {
  get accordianContener() {
    return cy.get('#accordianContainer')
  }
  get firstSection() {
    return this.accordianContener.contains('Why do we use it?')
  }
  get secondSection() {
    return this.accordianContener.contains('Where does it come from?')
  }
  get thirdSection() {
    return this.accordianContener.contains('What is Lorem Ipsum?')
  }

  clickSection(sectionName) {
    switch (sectionName) {
      case 'Why do we use it?':
        return this.firstSection.click()
      case 'Where does it come from?':
        return this.secondSection.click()
      case 'What is Lorem Ipsum?':
        return this.thirdSection.click()
    }
  }
}
