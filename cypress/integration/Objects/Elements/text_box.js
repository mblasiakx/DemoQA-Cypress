
export default class TextBox{
    goToTextBoxSection(){
     cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
      //cy.wait(1000)
      //cy.get('.main-header').contains('Text Box').should('be.visible')
    } 
    
     putData(name, email, current_addres, pernament_addres){
          //test Text box section's form
          cy.get('#userName').type(name)
          cy.wait(1000)
          cy.get('#userEmail').type(email)
          cy.wait(1000)
          cy.get('#currentAddress').type(current_addres)
          cy.wait(1000)
          cy.get('#permanentAddress').type(pernament_addres)
          cy.wait(1000)
          
    }

     submitForm(){
        cy.get('#submit').click()
        //cy.wait(1000)
        //cy.get('.border').should('be.visible')
    }

  
    
}