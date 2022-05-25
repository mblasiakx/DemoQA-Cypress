import {link,text_box_name,text_box_email,text_box_current_address,text_box_pernamant_addres,text_box_incorrect_email
} from '../../../../config'
import BasePage from '../../../integration/Objects/BasePage'
import TextBox from '../../Objects/Elements/TextBox'

describe('Test text box in Elements tab', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.GotoElements()
        TextBox.GoToTextBoxSection()

        })

    it('Put correct data and submit', ()=>{
        
      TextBox.PutData(text_box_name, text_box_email,text_box_current_address,text_box_pernamant_addres)
      TextBox.SubmitForm()

    })

    /*it('Put incorrect email', ()=>{
        TextBox.PutData(text_box_name, text_box_incorrect_email, text_box_current_address,text_box_pernamant_addres)
        TextBox.SubmitForm()

    })*/




})