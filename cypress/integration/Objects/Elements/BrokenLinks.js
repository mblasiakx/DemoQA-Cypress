export default class BrokenLinks{
    static GoToBrokenLinks(){
             //go to Broken Links section
             cy.get(':nth-child(1) > .element-list > .menu-list > #item-6 > .text').click()
             //cy.wait(1000)        
    }

    static SelectLink(ButtonText){
        cy.get(ButtonText).click()
    }

    static CheckUrlForTab(UrlLink){
        cy.url().should('include', UrlLink) // check url of new opened tab
    }
}