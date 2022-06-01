import BasePage from '../../../integration/Objects/BasePage'
import Modals from '../../Objects/Alers and Frame/Modals'
import {link} from '../../../../config'

describe('Test Modals', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.GoToAlertsAndFrame()
        Modals.GoToModals()
        })

        it('Test Small and Large modals ', ()=>{
            Modals.TestSmallModal()
            Modals.TestLargeModal()
        })
 
})
