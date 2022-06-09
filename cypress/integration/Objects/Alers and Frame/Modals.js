export class Modals {
  openModal(container) {
    return cy.get(container).click()
  }

  closeModal(container) {
    return cy.get(container).click()
  }
}
