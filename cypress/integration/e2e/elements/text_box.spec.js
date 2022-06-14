import { config } from '../../../../config'
import { BasePage } from '../../Objects/base_page'
import { TextBox } from '../../Objects/Elements/text_box'

describe('Test Text Box in Elements tab', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Text Box')
  })

  it('Should type correct data and submit', () => {
    const textBox = new TextBox()
    textBox.putDataIntoUserForm('#userName', config['Text-box'].User.name)
    textBox.putDataIntoUserForm('#userEmail', config['Text-box'].User.email)
    textBox.putDataIntoUserForm(
      '#currentAddress',
      config['Text-box'].User.currentAddress
    )
    textBox.putDataIntoUserForm(
      '#permanentAddress',
      config['Text-box'].User.pernamentAddress
    )
    textBox.submitUserForm()
  })
})
