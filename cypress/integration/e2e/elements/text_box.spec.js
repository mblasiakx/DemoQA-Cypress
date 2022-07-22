import { config } from '../../../../config'
import { BasePage } from '../../Objects/base_page'
import { TextBox } from '../../Objects/Elements/text_box'

describe('Test Text Box in Elements tab', () => {
  before(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Text Box')
  })

  it('Should type correct data', () => {
    const textBox = new TextBox()
    textBox.putDataIntoUserForm('user', config['Text-box'].User.name)
    textBox.putDataIntoUserForm('email', config['Text-box'].User.email)
    textBox.putDataIntoUserForm(
      'current address',
      config['Text-box'].User.currentAddress
    )
    textBox.putDataIntoUserForm(
      'permanent address',
      config['Text-box'].User.pernamentAddress
    )

    textBox.userName
      .should('have.value', config['Text-box'].User.name)
      .and('be.visible')
    textBox.userEmail
      .should('have.value', config['Text-box'].User.email)
      .and('be.visible')
    textBox.currentAddress
      .should('have.value', config['Text-box'].User.currentAddress)
      .and('be.visible')
    textBox.permanentAddress
      .should('have.value', config['Text-box'].User.pernamentAddress)
      .and('be.visible')
  })

  it('Should submit form', () => {
    const textBox = new TextBox()
    textBox.submitUserForm()
  })
})
