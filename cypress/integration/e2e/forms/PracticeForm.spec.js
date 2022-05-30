import BasePage from '../../../integration/Objects/BasePage'
import PracticeForm from '../../Objects/Forms/PracticeForm'
import {link} from '../../../../config'

describe('Practice Form', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.GoToForms()
        PracticeForm.GoToPracticeForm()
    })

    it('Fill all fields in Practice Form',()=>{
        PracticeForm.FillAllFields() // do poprawy
    })

})