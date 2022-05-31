export default class Alerts{
static GoToAlerts(){
    //cy.contains('Alerts').click()
    cy.get('.accordion > :nth-child(3)> .element-list > .menu-list > #item-1').click()
}

static TestAlert(){
    cy.get('#alertButton').click()
    cy.on('window:alert', (text) => {
        expect(text).to.contains('You clicked a button');
      });
}

static TestConfirmButton(){
    cy.get('#confirmButton').click()
    cy.on('window:confirm', (text) => {
        expect(text).to.contains('Do you confirm action?');
      });

    cy.on('window:confirm', ()=>true)
    cy.get('#confirmResult').should('have.text', 'You selected Ok')
}


static TestPromptAlert(){
    cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns('This is a test text')
        cy.get('#promtButton').click()
      })
      cy.get('#promptResult').should('have.text', 'You entered This is a test text')
}
}



