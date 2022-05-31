import BasePage from '../../../integration/Objects/BasePage'
import Alerts from '../../Objects/Alers and Frame/Alerts'
import {link} from '../../../../config'
describe('Browser Windows tests', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.GoToAlertsAndFrame()
        Alerts.GoToAlerts()
        })

        it('Test All Alerts', ()=>{
            Alerts.TestAlert()
            Alerts.TestConfirmButton()
            Alerts.TestPromptAlert()
        })



})