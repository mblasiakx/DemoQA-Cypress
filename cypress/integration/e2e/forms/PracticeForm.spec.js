import BasePage from '../../../integration/Objects/BasePage'
import PracticeForm from '../../Objects/Forms/PracticeForm'
import {link,first_name_practice,lastName_practice, userEmail_practice, userNumber_practice, dateOfBirthInput_practice, 
 Subject,currentAddress_practice, Date1_practice, stateCity_practice } from '../../../../config'

describe('Practice Form', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.GoToForms()
        PracticeForm.GoToPracticeForm()
    })

    it('Fill all fields in Practice Form',()=>{
        PracticeForm.FillAllFields(first_name_practice,lastName_practice, userEmail_practice, userNumber_practice, dateOfBirthInput_practice, 
            Subject,currentAddress_practice, Date1_practice, stateCity_practice) // to do
    })

  

})