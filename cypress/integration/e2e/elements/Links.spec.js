import {link} from '../../../../config'
import BasePage from '../../Objects/base_page'
import Links from '../../Objects/Elements/links'
describe('Check Links',()=>{

    beforeEach(()=>{
        cy.visit(link)
        BasePage.gotoElements()
        Links.goToLinksSection()
    })

    it('Check Api call', ()=>{
        Links.checkLinks()
    })

    it('Open links in new tab', ()=>{
        Links.openLinksInNewTab()
    })

    
})

