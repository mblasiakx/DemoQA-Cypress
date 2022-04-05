describe('WebTables - add,edit and remove', ()=>{
    it('Go to Web Tables, remove user,edit user and add user', ()=>{
        cy.visit('https://demoqa.com/')

        //go to elements tab
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get('.main-header').contains('Elements').should('be.visible')

        //go to web tables
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click()

        //remove user
        cy.get('#delete-record-3 > svg > path').click()

        //edit user
        cy.get('#edit-record-2 > svg').click()
        cy.get('#age').clear()
        cy.get('#age').type('46')

        cy.get('#salary').clear()
        cy.get('#salary').type(15000)

        cy.get('#department').clear()
        cy.get('#department').type('Compliance2')
        cy.get('#submit').click()

        //add user
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('NameTest')
        cy.get('#lastName').type('Surname')
        cy.get('#userEmail').type('test@test.com')
        cy.get('#age').type(50)
        cy.get('#salary').type(5000)
        cy.get('#department').type('Departament')
        cy.get('#submit').click()
        cy.get(':nth-child(3) > .rt-tr > :nth-child(1)').contains('NameTest').should('be.visible')
    })
})