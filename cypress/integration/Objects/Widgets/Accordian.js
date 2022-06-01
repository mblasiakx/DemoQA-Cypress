export default class Accordian{
    static GoToAccordian(){
        cy.get('.accordion > :nth-child(4)> .element-list > .menu-list > #item-0').click()
        cy.url().should('include', 'https://demoqa.com/accordian')
    }

    static CheckText(){
       //cy.get(' .accordianContainer > .accordion > .card > .collapse show > #section1Content > p').should('include', 'is')
       cy.contains('Where does it come from?').click() 
       cy.contains('Why do we use it?').click() 
       
    }

   
}