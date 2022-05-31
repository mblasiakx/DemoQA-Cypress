import {link} from '../../../../config'
import BasePage from '../../../integration/Objects/BasePage'
import Links from '.././../Objects/Elements/Links'
describe('Check Links',()=>{

    beforeEach(()=>{
        cy.visit(link)
        BasePage.GotoElements()
        Links.GoToLinksSection()
    })

    it('Check Api call', ()=>{
        Links.CheckLinks()
    })

    it('Open links in new tab', ()=>{
        Links.OpenLinksInNewTab()
    })

    
})

