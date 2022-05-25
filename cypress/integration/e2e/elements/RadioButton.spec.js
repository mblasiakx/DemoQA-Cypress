import BasePage from '../../../integration/Objects/BasePage'
import RadioButton from '../../Objects/Elements/RadioButto'
import {link} from '../../../../config'
describe('Radio button', ()=>{
    beforeEach(()=>{
        cy.visit(link)
        BasePage.GotoElements()
        RadioButton.GoToRadioButtonSection()

        })
    it('Test Radio button', ()=>{
    RadioButton.ClickRadioButtons()

    })
})