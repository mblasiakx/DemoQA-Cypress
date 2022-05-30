import BasePage from '../../../integration/Objects/BasePage'
import BrowserWindows from '../../Objects/Alers and Frame/BrowserWindows'
import {link} from '../../../../config'
describe('Browser Windows tests', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.GoToAlertsAndFrame()
        BrowserWindows.GoToBrowserWindows()
        })

        it('Test New Tab', ()=>{
            BrowserWindows.OpenNewTab()
        })

        it('Test New Window', ()=>{
            BrowserWindows.OpenNewTab()
        })

        it('Test New Window Message', ()=>{
            BrowserWindows.OpenNewTab()
        })

        //dokonczyć ten test (it dla każdego buttona)
        // poprawić url w link w elements
        // 
        

})

