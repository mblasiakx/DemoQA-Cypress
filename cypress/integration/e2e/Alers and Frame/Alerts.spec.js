import { BasePage } from '../../Objects/base_page'
import Alerts from '../../Objects/Alers and Frame/alerts'
import { link } from '../../../../config'
describe('Browser Windows tests', () => {
    before(() => {
        cy.visit(link)
        let base_page_obj = new BasePage()

        base_page_obj.goToAlertsAndFrame()

        //Alerts.goToAlerts()
    })

    it('Should open Alert', () => {
        Alerts.testAlert()
    })

    /* it('Should open Confirm button', ()=>{
            Alerts.testConfirmButton()
        })

        it('Should open Propmt Alert', ()=>{
             Alerts.testPromptAlert()
        })*/
})
