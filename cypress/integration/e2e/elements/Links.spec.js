import {link} from '../../../../config'
import BasePage from '../../../integration/Objects/BasePage'
import Links from '.././../Objects/Elements/Links'
describe('Check Links',()=>{

    beforeEach(()=>{
        cy.visit(link)
        BasePage.GotoElements()
        Links.GoToLinksSection()
    })

    //it('Links opened in new tabs', ()=>{

    //})

    it('Links with sending api call', ()=>{

        //created
       
        //cy.get('#created').click()
        //cy.get('#linkWrapper > :nth-child(5) > #created').click()
        //cy.get('#linkWrapper').find('#created').click()
        //cy.get('#created').click()
        //cy.get('#linkWrapper')
        cy.contains('Created').click()

    })

    
})