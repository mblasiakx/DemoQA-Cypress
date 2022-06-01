 export default class BasePage{
    
    static GotoElements(){
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
       
    }

    static GoToForms(){
       cy.get(':nth-child(2) > :nth-child(1) > .avatar > svg').click()
    }

    static GoToAlertsAndFrame(){
      cy.get(':nth-child(3) > :nth-child(1) > .avatar > svg').click()
    }

    static GoToWidgets(){
      cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click()
    }
   
 }
 
