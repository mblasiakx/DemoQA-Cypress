import {BasePage} from '../../Objects/base_page'
import BrowserWindows from '../../Objects/Alers and Frame/browser_windows'
import {link} from '../../../../config'
describe('Browser Windows tests', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.goToAlertsAndFrame()
        BrowserWindows.goToBrowserWindows()
        })

        it('Test New Tab', ()=>{
            BrowserWindows.openNewTab()
        })

        it('Test New Window', ()=>{
            BrowserWindows.openNewWindow()
        })

       // it('Test New Window Message', ()=>{
            //BrowserWindows.openNewWindowMessage()
        //})
     

})

