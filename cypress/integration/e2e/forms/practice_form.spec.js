import BasePage from '../../Objects/base_page'
import PracticeForm from '../../Objects/Forms/practice_form'
import {link,practiceFormFirstName ,practiceLastName, practiceUserEmail, practiceUserNumber, practiceDateOfBirthInput, 
    subjectData, practiceCurrentAddress, practiceState, practiceStateCity } from '../../../../config'

describe('Practice Form', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.goToForms()
        PracticeForm.goToPracticeForm()
    })

    it('Fill all fields in Practice Form',()=>{
        PracticeForm.fillAllFields(practiceFormFirstName ,practiceLastName, practiceUserEmail, practiceUserNumber, practiceDateOfBirthInput, 
            subjectData, practiceCurrentAddress, practiceState, practiceStateCity) // to do
    })

  

})