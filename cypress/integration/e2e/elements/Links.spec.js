import { link } from '../../../../config'
import { BasePage } from '../../Objects/base_page'
import { Links } from '../../Objects/Elements/links'
describe('Check Links', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Links')
  })

  /* it(' Should open links in new tab', () => {
    const links = new Links()
    links.clickOnLinksToOpenInNewTab('#simpleLink')
    links.clickOnLinksToOpenInNewTab('#dynamicLink')
  })*/

  it('Should open links and send api calls', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('#created')
    links.clickOnLinksToSendApiCall('#no-content')
    links.clickOnLinksToSendApiCall('#moved')
    links.clickOnLinksToSendApiCall('#bad-request')
    links.clickOnLinksToSendApiCall('#unauthorized')
    links.clickOnLinksToSendApiCall('#forbidden')
    links.clickOnLinksToSendApiCall('#invalid-url')
  })
})
