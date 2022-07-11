import { BasePage } from '../../Objects/base_page'
import { Modals } from '../../Objects/Alers and Frame/modals'
import { link } from '../../../../config'

describe('Test Modals', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows')
    basePage.goToSectionFromleftPanel('Modal Dialogs')
  })

  it('Should show small modal ', () => {
    const modals = new Modals()
    modals.openModal('small')

    cy.get('.modal-content').should('be.visible')
  })

  it('Should show and close large modal ', () => {
    const modals = new Modals()
    modals.openModal('large')

    cy.get('.modal-content').should('be.visible')
  })
})
