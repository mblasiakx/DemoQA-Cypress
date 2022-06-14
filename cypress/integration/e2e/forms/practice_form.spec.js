import { BasePage } from '../../Objects/base_page'
import { PracticeForm } from '../../Objects/Forms/practice_form'
import { config } from '../../../../config'

describe('Practice Form', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Forms')
    basePage.goToSectionFromleftPanel('Practice Form')
  })

  it('Should fill all fields and Submit', () => {
    const practiceForm = new PracticeForm()
    practiceForm.typeIntoFormElement(
      '#firstName',
      config['Practice Form'].User.name
    )
    practiceForm.typeIntoFormElement(
      '#lastName',
      config['Practice Form'].User.surname
    )
    practiceForm.typeIntoFormElement(
      '#userEmail',
      config['Practice Form'].User.email
    )
    practiceForm.typeIntoFormElement(
      '#userNumber',
      config['Practice Form'].User.number
    )
    practiceForm.typeIntoFormElement(
      '#currentAddress',
      config['Practice Form'].Address.currentAddress
    )
    practiceForm.selectButtonElement('[type="radio"]', 'Male')
    practiceForm.goToDateOfBirth('#dateOfBirthInput')
    practiceForm.selectDateFromDateOfBirth()
    practiceForm.selectButtonElement('#hobbies-checkbox-1', '1')
    practiceForm.selectStateAndCity(
      '#state',
      config['Practice Form'].Address.state
    )
    practiceForm.selectStateAndCity(
      '#city',
      config['Practice Form'].Address.stateCity
    )
    practiceForm.submitForm()
  })
})
