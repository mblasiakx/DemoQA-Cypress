import BasePage from '../../Objects/base_page'
import DatePicker from '../../Objects/Widgets/date_picker'
import {link} from '../../../../config'


describe('Test DatePicker', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.goToWidgets()
        DatePicker.goToDatePicker()
        })

        it('Select date in  DatePicker', ()=>{
            DatePicker.selectDate('1995', 'March')
        })

        
        it('Put date into  DatePicker', ()=>{
            DatePicker.putDateToFirsField('05/04/2021')
        })

        it('Put date into  DateAndTime', ()=>{
            DatePicker.putDateIntoDateAndTime('June 11, 2021 5:18 PM')
        })
        

        it('Select  DateAndTime', ()=>{
            DatePicker.selectDateAndTime()
        })

})