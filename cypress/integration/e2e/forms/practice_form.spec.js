import { BasePage } from '../../Objects/base_page'
import { PracticeForm } from '../../Objects/Forms/practice_form'
import {
  link,
  practiceFormFirstName,
  practiceLastName,
  practiceUserEmail,
  practiceUserNumber,
  practiceDateOfBirthInput,
  subjectData,
  practiceCurrentAddress,
  practiceState,
  practiceStateCity,
} from '../../../../config'

describe('Practice Form', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Forms')
    basePage.goToSectionFromleftPanel('Practice Form')
  })

  it('Should fill all fields and Submit', () => {
    const practiceForm = new PracticeForm()
    //practiceForm.typeIntoFormElement('#firstName', 'Name')
    //practiceForm.typeIntoFormElement('#lastName', 'Surname')
    // practiceForm.typeIntoFormElement('#userEmail', 'test@gmail.com')
    //practiceForm.typeIntoFormElement('#userNumber', '123321456')
    //practiceForm.typeIntoFormElement('#currentAddress', 'Current Address 111')
    // practiceForm.selectButtonElement('[type="radio"]', 'Male')
    //practiceForm.goToDateOfBirth('#dateOfBirthInput')
    //practiceForm.selectDateFromDateOfBirth()
    //practiceForm.selectButtonElement('#hobbies-checkbox-1', '1')
    //practiceForm.selectStateAndCity('#state', 'Haryana')
    practiceForm.submitForm()
  })
})
