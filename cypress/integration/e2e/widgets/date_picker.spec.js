import { BasePage } from '../../Objects/base_page'
import { DatePicker } from '../../Objects/Widgets/date_picker'

describe('Test DatePicker', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Widgets')
    basePage.goToSectionFromleftPanel('Date Picker')
  })

  it('Should select date from Selec Date panel', () => {
    const datePicker = new DatePicker()
    datePicker.clickDateInputFromPickerContainer()
    datePicker.selectPartOfDateInSelectDate('year', '2014')
    datePicker.selectPartOfDateInSelectDate('month', '2')
    datePicker.selectPartOfDateInSelectDate('day', '5')

    cy.get('#datePickerMonthYearInput')
      .should('be.visible')
      .and('have.value', '02/25/2014')
  })

  it('Should select date from Date And Time panel', () => {
    const datePicker = new DatePicker()
    datePicker.clickDateAndTimeContainer()
    datePicker.clearDateInDateAndTime()
    datePicker.putDateInDateAndTime('October 3, 2023 12:00 PM')

    cy.get('#dateAndTimePickerInput')
      .should('be.visible')
      .and('have.value', 'October 3, 2023 12:00 PM')
  })
})
