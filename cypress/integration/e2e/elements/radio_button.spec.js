import BasePage from '../../Objects/base_page'
import {RadioButton} from '../../Objects/Elements/radio_button'
import {link} from '../../../../config'
describe('Radio button', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.gotoElements()
        RadioButton.goToRadioButtonSection()

        })
    it('Test Radio button', ()=>{
    RadioButton.clickRadioButtons()

    })
})