import { BasePage } from '../../Objects/base_page'
import { BrowserWindows } from '../../Objects/Alers and Frame/browser_windows'
import { link } from '../../../../config'
describe('Browser Windows tests', () => {
  beforeEach(() => {
    cy.visit(link)
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows')
    basePage.goToSectionFromleftPanel('Browser Windows')
  })

  it('Should open New Tab', () => {
    //'https://demoqa.com/sample'   'about:blank'
    const browserWindow = new BrowserWindows()
    browserWindow.openTabFromBrowserWindows(
      'https://demoqa.com/sample',
      '#tabButton'
    )
  })

  it('Should open New Window', () => {
    const browserWindow = new BrowserWindows()
    browserWindow.openTabFromBrowserWindows(
      'https://demoqa.com/sample',
      '#windowButton'
    )
  })

  it('Should open New Window Message', () => {
    const browserWindow = new BrowserWindows()
    browserWindow.openTabFromBrowserWindows(
      'about:blank',
      '#messageWindowButton'
    )
  })
})
