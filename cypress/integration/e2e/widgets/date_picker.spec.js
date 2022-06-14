import { BasePage } from '../../Objects/base_page'
import { DatePicker } from '../../Objects/Widgets/date_picker'
import { link } from '../../../../config'

describe('Test DatePicker', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Widgets')
    basePage.goToSectionFromleftPanel('Date Picker')
  })

  it('Should select date from Selec Date panel', () => {
    const datePicker = new DatePicker()
    datePicker.goToDateInputFromPickerContainer('#datePickerMonthYearInput')
    datePicker.selectDay('.react-datepicker__week', '5')
    datePicker.selectMonthAndYear('.react-datepicker__month-select', 'May')
    datePicker.selectMonthAndYear('.react-datepicker__year-select', '2019')
  })

  it('Should clear and put new date in Date And Time panel', () => {
    const datePicker = new DatePicker()
    datePicker.clearAndPutNewDateToDatePicker(
      '#dateAndTimePickerInput',
      'May 15, 2020 8:50 AM'
    )
  })
})
