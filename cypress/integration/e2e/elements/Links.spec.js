import { BasePage } from '../../Objects/base_page'
import { Links } from '../../Objects/Elements/links'
describe('Check Links', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Links')
  })

  it('Should open "created" link', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('created')

    links.linkInfoMessage.should('contain', 'Created').and('be.visible')
  })

  it('Should open "noContent" link', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('no content')

    links.linkInfoMessage.should('contain', 'No Content').and('be.visible')
  })

  it('Should open "moved" link', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('moved')

    links.linkInfoMessage.should('contain', 'Moved').and('be.visible')
  })

  it('Should open "bad request" link', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('bad request')

    links.linkInfoMessage.should('contain', 'Bad Request').and('be.visible')
  })

  it('Should open "unauthorized" link', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('unauthorized')

    links.linkInfoMessage.should('contain', 'Unauthorized').and('be.visible')
  })

  it('Should open "forbidden" link', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('forbidden')

    links.linkInfoMessage.should('contain', 'Forbidden').and('be.visible')
  })

  it('Should open "not found" link', () => {
    const links = new Links()
    links.clickOnLinksToSendApiCall('invalid-url')
  })
})
