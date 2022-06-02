import {link} from '../../../../config'
import BasePage from '../../Objects/base_page'
import BrokenLinks from '../../Objects/Elements/broken_links'
describe('Broken Links and Valid Links', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.gotoElements()
        BrokenLinks.goToBrokenLinks()
    })
    
    it('Valid link',()=>{
        BrokenLinks.selectLink('Click Here for Valid Link')
        BrokenLinks.checkUrlForTab('demoqa.com')
    })

    it('Broken link',()=>{
        BrokenLinks.selectLink('Click Here for Broken Link')
        BrokenLinks.checkUrlForTab('the-internet.herokuapp.com/status_codes/500')    
    })
})