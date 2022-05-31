export default class BrowserWindows{
 static GoToBrowserWindows(){
     cy.contains('Browser Windows').click()
 }

 static OpenNewTab(){
     cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = 'https://demoqa.com/sample'
        }).as("popup")
      })
      cy.get('#tabButton').click()
      cy.get('@popup').should("be.called")
      //cy.go('back');
     // cy.url().should('include', 'demoqa.com/browser-windows')    

 }

 static OpenNewWindow(){
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = 'https://demoqa.com/sample'
        }).as("popup")
      })

      cy.get('#windowButton').click()
      cy.get('@popup').should("be.called")
 }

 static OpenNewWindowMessage(){
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = 'about:blank'
        }).as("popup")
      })

      cy.get('#messageWindowButton').click()
      cy.get('@popup').should("be.called")
 }
}

