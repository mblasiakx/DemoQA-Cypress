import { BasePage } from '../../Objects/base_page'
import { Alerts } from '../../Objects/Alers and Frame/alerts'
import { link } from '../../../../config'
describe('Browser Windows tests', () => {
  before(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows')
    basePage.goToSectionFromleftPanel('Alerts')
  })

  it('Should open Alert', () => {
    const alert = new Alerts()
    //alert.testAlert('#alertButton')
    alert.testConfirmButton()
  })

  /* it('Should open Confirm button', ()=>{
            Alerts.testConfirmButton()
        })

        it('Should open Propmt Alert', ()=>{
             Alerts.testPromptAlert()
        })*/
})
