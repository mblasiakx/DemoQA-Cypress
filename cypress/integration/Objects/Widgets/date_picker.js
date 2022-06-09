export class DatePicker {
  get datePickerContainer() {
    return cy.get('#datePickerContainer')
  }

  get datePickerOpened() {
    return cy.get('.react-datepicker')
  }

  goToDateInputFromPickerContainer(container) {
    return this.datePickerContainer.get(container).click()
  }

  selectMonthAndYear(container, date) {
    return this.datePickerOpened.get(container).select(date)
  }

  selectDay(container, day) {
    return this.datePickerOpened.get(container).contains(day).click()
  }

  clearAndPutNewDateToDatePicker(container, date) {
    return this.datePickerContainer.get(container).clear().type(date)
  }
}
