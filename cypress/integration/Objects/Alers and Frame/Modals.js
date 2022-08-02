export class Modals {
  get modalContent() {
    return cy.get('.modal-content');
  }

  useModal(option, size) {
    return cy.get(`#${option}${size}Modal`);
  }

  openModal(buttonSize) {
    return this.useModal('show', buttonSize).click();
  }
}
