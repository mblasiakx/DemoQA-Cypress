import {link} from '../../../../config'
import BasePage from '../../../integration/Objects/BasePage'
import CheckBox from '../../Objects/Elements/CheckBox'
describe('Test Check box', ()=>{

    beforeEach(()=>{
        cy.visit(link)
        BasePage.GotoElements()
        CheckBox.GoToCheckBoxSection()

        })

    it('Check box section in Elements tab',()=>{
      
        CheckBox.ShowCheckBoxes()
        CheckBox.ClickCheckBoxes()  //click some checkboxes
    })
})