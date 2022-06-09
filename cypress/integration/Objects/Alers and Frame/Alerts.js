export class Alerts {
  testAlert(container) {
    cy.get(container).click()
    /*cy.on('window:alert', (text) => {
        expect(text).to.contains('You clicked a button');
      });*/
  }

  testConfirmButton() {
    cy.get('#confirmButton').click()
    /*cy.on('window:confirm', (text) => {
        expect(text).to.contains('Do you confirm action?');
      });

    cy.on('window:confirm', ()=>true)
    cy.get('#confirmResult').should('have.text', 'You selected Ok')*/
  }

  testPromptAlert() {
    /*  cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns('This is a test text')
        cy.get('#promtButton').click()
      })*/
    //cy.get('#promptResult').should('have.text', 'You entered This is a test text')
  }
}
