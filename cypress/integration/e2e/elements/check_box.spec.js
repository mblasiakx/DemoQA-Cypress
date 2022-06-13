import { link } from '../../../../config'
import { BasePage } from '../../Objects/base_page'
import { CheckBox } from '../../Objects/Elements/check_box'
describe('Test Check box', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Check Box')
  })

  it('Should click expand and click each button', () => {
    const checkBox = new CheckBox()
    checkBox.showAllButtons()
    checkBox.clickSingleButton()
  })
})
