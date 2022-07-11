export class Modals {
  get openSmallModal() {
    return cy.get('#showSmallModal')
  }
  get openLargeModal() {
    return cy.get('#showLargeModal')
  }
  get closeSmallModal() {
    return cy.get('#closeSmallModal')
  }
  get closeLargeModal() {
    return cy.get('#closeLargeModal')
  }

  openModal(buttonOption) {
    switch (buttonOption) {
      case 'small':
        return this.openSmallModal.click()
      case 'large':
        return this.openLargeModal.click()
    }
  }

  closeModal(buttonOption) {
    switch (buttonOption) {
      case 'small':
        return this.closeSmallModal.click()
      case 'large':
        return this.closeLargeModal.click()
    }
  }
}
