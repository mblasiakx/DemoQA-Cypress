import { BasePage } from '../../Objects/base_page'
import { RadioButton } from '../../Objects/Elements/radio_button'
import { link } from '../../../../config'
describe('Radio button section test', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Radio Button')
  })
  it('Should click all radio buttons', () => {
    const radioButton = new RadioButton()
    radioButton.checkRadioButton('Yes')
    radioButton.checkRadioButton('Impressive')
    radioButton.checkRadioButton('No')
  })
})
