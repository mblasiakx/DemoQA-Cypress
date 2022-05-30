import {link} from '../../../../config'
import BasePage from '../../../integration/Objects/BasePage'
import BrokenLinks from '../../../integration/Objects/Elements/BrokenLinks'
describe('Broken Links and Valid Links', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.GotoElements()
        BrokenLinks.GoToBrokenLinks()
    })
    
    it('Valid link',()=>{
        BrokenLinks.SelectLink('Click Here for Valid Link')
        BrokenLinks.CheckUrlForTab('demoqa.com')
    })

    it('Broken link',()=>{
        BrokenLinks.SelectLink('Click Here for Broken Link')
        BrokenLinks.CheckUrlForTab('the-internet.herokuapp.com/status_codes/500')    
    })
})