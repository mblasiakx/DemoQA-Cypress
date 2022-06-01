import BasePage from '../../../integration/Objects/BasePage'
import DatePicker from '../../Objects/Widgets/DatePicker'
import {link} from '../../../../config'


describe('Test DatePicker', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.GoToWidgets()
        DatePicker.GoToDatePicker()
        })

        it('Select date in  DatePicker', ()=>{
            DatePicker.SelectDate('1995', 'March')
        })

        
        it('Put date into  DatePicker', ()=>{
            DatePicker.PutDateToFirsField('05/04/2021')
        })

        it('Put date into  DateAndTime', ()=>{
            DatePicker.PutDateIntoDateAndTime('June 11, 2021 5:18 PM')
        })
        

        it('Select  DateAndTime', ()=>{
            DatePicker.SelectDateAndTime()
        })

})