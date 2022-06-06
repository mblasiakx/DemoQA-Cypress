import {link,textBoxName,textBoxEmail,textBoxCurrentAddress,textBoxPernamantAddress,textBoxIncorrectEmail} from '../../../../config'
import {BasePage} from '../../Objects/base_page'
import TextBox from '../../Objects/Elements/text_box'



describe('Test text box in Elements tab', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.gotoElements()
        TextBox.goToTextBoxSection()

        })

    it('Put correct data and submit', ()=>{
        
      TextBox.putData(textBoxName,textBoxEmail,textBoxCurrentAddress,textBoxPernamantAddress,textBoxIncorrectEmail)
      TextBox.submitForm()

    })

    /*it('Put incorrect email', ()=>{
        TextBox.putData(text_box_name, text_box_incorrect_email, text_box_current_address,text_box_pernamant_addres)
        TextBox.submitForm()

    })*/




})