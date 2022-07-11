export class BrokenLinks {
  get validLink() {
    return cy.contains('Click Here for Valid Link')
  }

  get brokenLink() {
    return cy.contains('Click Here for Broken Link')
  }

  clickOnLink(selectedLink) {
    switch (selectedLink) {
      case 'valid':
        return this.validLink.invoke('attr', 'target', '_self').click()
      case 'broken':
        return this.brokenLink.invoke('attr', 'target', '_self').click()
    }
  }
}
