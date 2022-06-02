export default class BrokenLinks{
     goToBrokenLinks(){
             //go to Broken Links section
             cy.get(':nth-child(1) > .element-list > .menu-list > #item-6 > .text').click()
             //cy.wait(1000)        
    }

     selectLink(ButtonText){
        cy.get(ButtonText).click()
    }

     checkUrlForTab(UrlLink){
        cy.url().should('include', UrlLink) // check url of new opened tab
    }
}