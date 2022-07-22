import { BasePage } from '../../Objects/base_page'
import { BrowserWindows } from '../../Objects/Alers and Frame/browser_windows'
describe('Browser Windows tests', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
      },
    })

    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows')
    basePage.goToSectionFromleftPanel('Browser Windows')
  })
  it('Should open New Tab', () => {
    const browserWindow = new BrowserWindows()
    browserWindow.openTabFromBrowserWindows('tab')

    browserWindow.windowObject.should('be.called')
  })
  it('Should open New Window', () => {
    const browserWindow = new BrowserWindows()
    browserWindow.openTabFromBrowserWindows('window')

    browserWindow.windowObject.should('be.called')
  })
  it('Should open New Window Message', () => {
    const browserWindow = new BrowserWindows()
    browserWindow.openTabFromBrowserWindows('messageWindow')

    browserWindow.windowObject.should('be.called')
  })
})
