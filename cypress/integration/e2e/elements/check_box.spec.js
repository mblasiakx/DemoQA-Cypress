import {link} from '../../../../config'
import {BasePage} from '../../Objects/base_page'
import CheckBox from '../../Objects/Elements/check_box'
describe('Test Check box', ()=>{

    beforeEach(()=>{
        cy.visit(link)
        BasePage.gotoElements()
        CheckBox.goToCheckBoxSection()

        })

    it('Check box section in Elements tab',()=>{
      
        CheckBox.showCheckBoxes()
        CheckBox.clickCheckBoxes()  //click some checkboxes
    })
})