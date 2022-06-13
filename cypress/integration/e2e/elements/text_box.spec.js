import {
  link,
  textBoxName,
  textBoxEmail,
  textBoxCurrentAddress,
  textBoxPernamantAddress,
} from '../../../../config'
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
    textBox.putDataIntoUserForm('#userName', textBoxName)
    textBox.putDataIntoUserForm('#userEmail', textBoxEmail)
    textBox.putDataIntoUserForm('#currentAddress', textBoxCurrentAddress)
    textBox.putDataIntoUserForm('#permanentAddress', textBoxPernamantAddress)
    textBox.submitUserForm()
  })
})
