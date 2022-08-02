export class BrokenLinks {
  getLink(text) {
    return cy.contains(text);
  }
  clickOnLink(selectedLink) {
    return this.getLink(selectedLink).invoke('attr', 'target', '_self').click();
  }
}
