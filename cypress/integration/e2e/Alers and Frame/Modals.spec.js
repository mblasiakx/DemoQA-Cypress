import { BasePage } from '../../Objects/base_page'
import { Modals } from '../../Objects/Alers and Frame/modals'
import { link } from '../../../../config'

describe('Test Modals', () => {
  before(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows')
    basePage.goToSectionFromleftPanel('Modal Dialogs')
  })

  it('Should show and close small and large modals ', () => {
    const modals = new Modals()
    modals.openModal('#showSmallModal')
    modals.closeModal('#closeSmallModal')
    modals.openModal('#showLargeModal')
    modals.closeModal('#closeLargeModal')
  })
})
