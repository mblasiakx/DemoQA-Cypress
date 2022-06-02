export default class Links{
     goToLinksSection(){
         cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
        //cy.wait(1000)
         cy.get('.main-header').contains('Links').should('be.visible')
    }

     openLinksInNewTab(){
        cy.get('#simpleLink').invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://demoqa.com/') // check url of new opened tab

        /*cy.window().then((win) => {  // only for buttons?
            cy.stub(win, 'open', url => {
              win.location.href = 'https://demoqa.com/'
            }).as("popup")
          })
    
          cy.get('#simpleLink').click()
          cy.get('@popup').should("be.called")*/
    }

     checkLinks(){
        cy.get('#created').click()
        cy.get('#linkResponse').should('be.visible').and('have.text', 'Link has responded with staus 201 and status text Created') 
        cy.get('#no-content').click()
        cy.get('#linkResponse').should('be.visible').and('have.text', 'Link has responded with staus 204 and status text No Content')
        cy.get('#moved').click()
        cy.get('#linkResponse').should('be.visible').and('have.text', 'Link has responded with staus 301 and status text Moved Permanently') 
        cy.get('#bad-request').click()
        cy.get('#linkResponse').should('be.visible').and('have.text', 'Link has responded with staus 400 and status text Bad Request')
        cy.get('#unauthorized').click()
        cy.get('#linkResponse').should('be.visible').and('have.text', 'Link has responded with staus 401 and status text Unauthorized')
        cy.get('#forbidden').click()
        cy.get('#linkResponse').should('be.visible').and('have.text', 'Link has responded with staus 403 and status text Forbidden') 
        cy.get('#invalid-url').click()
        cy.get('#linkResponse').should('be.visible').and('have.text', 'Link has responded with staus 404 and status text Not Found') 
    }
}



      