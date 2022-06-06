import {BasePage} from '../../Objects/base_page'
import Modals from '../../Objects/Alers and Frame/modals'
import {link} from '../../../../config'

describe('Test Modals', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.goToAlertsAndFrame()
        Modals.goToModals()
        })

        it('Test Small and Large modals ', ()=>{
            Modals.testSmallModal()
            Modals.testLargeModal()
        })
 
})
