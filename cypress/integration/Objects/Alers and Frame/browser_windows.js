export default class BrowserWindows{
   goToBrowserWindows(){
     cy.contains('Browser Windows').click()
 }

    openNewTab(){
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

 openNewWindow(){
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = 'https://demoqa.com/sample'
        }).as("popup")
      })

      cy.get('#windowButton').click()
      cy.get('@popup').should("be.called")
 }

  openNewWindowMessage(){
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
          win.location.href = 'about:blank'
        }).as("popup")
      })

      cy.get('#messageWindowButton').click()
      cy.get('@popup').should("be.called")
 }
}

