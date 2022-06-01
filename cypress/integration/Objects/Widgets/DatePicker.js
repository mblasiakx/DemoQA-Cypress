export default class DatePicker{
    static GoToDatePicker(){
        cy.get('.accordion > :nth-child(4)> .element-list > .menu-list > #item-2').click()
    }

    static SelectDate(year, month){
        cy.get('#datePickerMonthYearInput').click()
        cy.get('.react-datepicker__year-select').select(year)
        cy.get('.react-datepicker__month-select').select(month)

    }

    static PutDateToFirsField(Dates){
        cy.get('#datePickerMonthYearInput').click()
        cy.get('#datePickerMonthYearInput').clear()
        cy.get('#datePickerMonthYearInput').type(Dates)
    }

    static PutDateIntoDateAndTime(DateAndTime){
        cy.get('#dateAndTimePickerInput').clear()
        cy.get('#dateAndTimePickerInput').type(DateAndTime)
        
    }

    static SelectDateAndTime(){
        cy.get('#dateAndTimePickerInput').click()
        cy.get('.react-datepicker__month-read-view').select('May')
        cy.get('.react-datepicker__year-read-view').select('2000')
        //cy.get('.react-datepicker__time-list-item').contains('15:00').click()
   

    }
}