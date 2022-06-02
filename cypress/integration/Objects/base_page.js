 export default class BasePage{
    
     gotoElements(){
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
       
    }

     goToForms(){
       cy.get(':nth-child(2) > :nth-child(1) > .avatar > svg').click()
    }

    goToAlertsAndFrame(){
      cy.get(':nth-child(3) > :nth-child(1) > .avatar > svg').click()
    }

    goToWidgets(){
      cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click()
    }
   
 }
 
