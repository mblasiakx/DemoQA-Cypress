export default class RadioButton{
    static GoToRadioButtonSection(){
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
        cy.get('.main-header').contains('Radio Button').should('be.visible')
    }
    
    static ClickRadioButtons(){
        cy.get(':nth-child(2) > .custom-control-label').click()
        //cy.wait(3000)
        cy.get(':nth-child(3) > .custom-control-label').click()
    }
    
        
      
      
    
}