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

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Do you confirm action?')
    })
    cy.on('window:confirm', () => true)
    cy.get('#confirmResult').should('have.text', 'You selected Ok')
  })

  it('Should open Propmt Alert', () => {
    const alert = new Alerts()
    alert.testAlert('prompt')

    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('This is a test text')
      cy.get('#promtButton').click()
    })
    cy.get('#promptResult').should(
      'have.text',
      'You entered This is a test text'
    )
  })
})
