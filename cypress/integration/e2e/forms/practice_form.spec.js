import { BasePage } from '../../Objects/base_page'
import { PracticeForm } from '../../Objects/Forms/practice_form'
import { config } from '../../../../config'
import { addSyntheticLeadingComment } from 'typescript'

describe('Practice Form', () => {
  before(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Forms')
    basePage.goToSectionFromleftPanel('Practice Form')
  })

  it('Should fill all fields', () => {
    const practiceForm = new PracticeForm()
    practiceForm.typeIntoFormElement(
      'firstName',
      config['Practice Form'].User.name
    )
    practiceForm.typeIntoFormElement(
      'lastName',
      config['Practice Form'].User.surname
    )
    practiceForm.typeIntoFormElement(
      'email',
      config['Practice Form'].User.email
    )
    practiceForm.typeIntoFormElement('radio', 'Male')
    practiceForm.typeIntoFormElement(
      'mobile',
      config['Practice Form'].User.number
    )
    practiceForm.typeIntoFormElement(
      'subject',
      config['Practice Form'].Address.subjectData
    )
    practiceForm.typeIntoFormElement('hobbies', '1')
    practiceForm.typeIntoFormElement('hobbies', '2')
    practiceForm.typeIntoFormElement('hobbies', '3')
    practiceForm.typeIntoFormElement(
      'currentAddress',
      config['Practice Form'].Address.currentAddress
    )
    practiceForm.typeIntoFormElement(
      'state',
      config['Practice Form'].Address.state
    )
    practiceForm.typeIntoFormElement(
      'city',
      config['Practice Form'].Address.stateCity
    )

    cy.get('#firstName')
      .should('have.value', config['Practice Form'].User.name)
      .and('be.visible')
    cy.get('#lastName')
      .should('have.value', config['Practice Form'].User.surname)
      .and('be.visible')
    cy.get('#userEmail')
      .should('have.value', config['Practice Form'].User.email)
      .and('be.visible')
    cy.get('#userNumber')
      .should('have.value', config['Practice Form'].User.number)
      .and('be.visible')
    cy.get('#currentAddress')
      .should('have.value', config['Practice Form'].Address.currentAddress)
      .and('be.visible')
    cy.get('.custom-control-input').should('be.checked')
  })

  it('Should submit form', () => {
    const practiceForm = new PracticeForm()
    practiceForm.submitForm()
  })
})
