import BasePage from '../../Objects/base_page'
import Alerts from '../../Objects/Alers and Frame/alerts'
import {link} from '../../../../config'
describe('Browser Windows tests', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.goToAlertsAndFrame()
        Alerts.goToAlerts()
        })

        it('Test All Alerts', ()=>{
            Alerts.testAlert()
            Alerts.testConfirmButton()
            Alerts.testPromptAlert()
        })



})