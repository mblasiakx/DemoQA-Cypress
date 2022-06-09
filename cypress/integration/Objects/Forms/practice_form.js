import { createYield } from 'typescript'

export class PracticeForm {
  get practiceFormWrapper() {
    return cy.get('.practice-form-wrapper')
  }

  get datePicker() {
    return cy.get('.react-datepicker__month-container')
  }

  get stateAndCity() {
    return cy.get('#stateCity-wrapper')
  }

  typeIntoFormElement(selector, info) {
    return this.practiceFormWrapper.get(selector).type(info)
  }

  selectButtonElement(selector, info) {
    return this.practiceFormWrapper.get(selector).check(info)
  }

  goToDateOfBirth(select) {
    return this.practiceFormWrapper.get(select).click()
  }

  selectDateFromDateOfBirth() {
    return this.datePicker.get('.react-datepicker__week').first().last().click()
  }

  selectStateAndCity(select, state) {
    return this.stateAndCity.get(select).select(state)
  }

  submitForm() {
    this.practiceFormWrapper.get('#submit').click()
  }
}
