import { BasePage } from '../../Objects/base_page'
import { Alerts } from '../../Objects/Alers and Frame/alerts'
import { link } from '../../../../config'
describe('Browser Windows tests', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows')
    basePage.goToSectionFromleftPanel(/^Alerts$/)
  })

  it('Should open Alert', () => {
    const alert = new Alerts()
    alert.testAlert('alert')

    cy.on('window:alert', (text) => {
      expect(text).to.contains('You clicked a button')
    })
  })

  it('Should open Confirm Alert', () => {
    const alert = new Alerts()
    alert.testAlert('confirm')
    alert.getWindowConfirmClick()

    alert.confirmAlertResult.should('have.text', 'You selected Ok')
  })

  it('Should open Propmt Alert', () => {
    const alert = new Alerts()
    alert.testAlert('promt')
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('This is a test text')
      cy.get('#promtButton').click()
    })

    alert.promptAlertResult.should(
      'have.text',
      'You entered This is a test text'
    )
  })
})
