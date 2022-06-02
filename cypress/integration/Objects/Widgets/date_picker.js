export default class DatePicker{
    goToDatePicker(){
        cy.get('.accordion > :nth-child(4)> .element-list > .menu-list > #item-2').click()
    }

     selectDate(year, month){
        cy.get('#datePickerMonthYearInput').click()
        cy.get('.react-datepicker__year-select').select(year)
        cy.get('.react-datepicker__month-select').select(month)

    }

     putDateToFirsField(Dates){
        cy.get('#datePickerMonthYearInput').click()
        cy.get('#datePickerMonthYearInput').clear()
        cy.get('#datePickerMonthYearInput').type(Dates)
    }

     putDateIntoDateAndTime(DateAndTime){
        cy.get('#dateAndTimePickerInput').clear()
        cy.get('#dateAndTimePickerInput').type(DateAndTime)
        
    }

     selectDateAndTime(){
        cy.get('#dateAndTimePickerInput').click()
        cy.get('.react-datepicker__month-read-view').select('May')
        cy.get('.react-datepicker__year-read-view').select('2000')
        //cy.get('.react-datepicker__time-list-item').contains('15:00').click()
   

    }
}