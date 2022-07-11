import { config } from '../../../../config'
import { BasePage } from '../../Objects/base_page'
import { TextBox } from '../../Objects/Elements/text_box'

describe('Test Text Box in Elements tab', () => {
  const expectedTextBox = {
    userName: config['Text-box'].User.name,
    userEmail: config['Text-box'].User.email,
    //currentAddress: config['Text-box'].User.currentAddress,
    //pernamentAddress: config['Text-box'].User.pernamentAddress,
  }

  before(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Text Box')
  })

  it('Should type correct data', () => {
    const textBox = new TextBox()
    textBox.putDataIntoUserForm('userName', config['Text-box'].User.name)
    textBox.putDataIntoUserForm('userEmail', config['Text-box'].User.email)
    textBox.putDataIntoUserForm(
      'currentAddress',
      config['Text-box'].User.currentAddress
    )
    textBox.putDataIntoUserForm(
      'permanentAddress',
      config['Text-box'].User.pernamentAddress
    )

    /*cy.get('#userName')
      .invoke('text')
      .then((userNameValue) => {
        cy.get('#userEmail')
          .invoke('text')
          .then((userEmailValue) => {
            const currentTextBox = {
              userName: userNameValue,
              userEmail: userEmailValue,
            }
            expect(currentTextBox).to.be.eql(expectedTextBox)
          })
      })*/

    cy.get('#userName')
      .should('have.value', config['Text-box'].User.name)
      .and('be.visible')
    cy.get('#userEmail')
      .should('have.value', config['Text-box'].User.email)
      .and('be.visible')
    cy.get('#currentAddress')
      .should('have.value', config['Text-box'].User.currentAddress)
      .and('be.visible')
    cy.get('#permanentAddress')
      .should('have.value', config['Text-box'].User.pernamentAddress)
      .and('be.visible')
  })

  it('Should submit form', () => {
    const textBox = new TextBox()
    textBox.submitUserForm()
  })
})
