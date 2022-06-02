import BasePage from '../../Objects/base_page'
import Accordian from '../../Objects/Widgets/accordian'
import {link} from '../../../../config'

describe('Test Accordian page', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.goToWidgets()
        Accordian.goToAccordian()
        })

        it('Test Text field ', ()=>{
            Accordian.goToAccordian()
            Accordian.checkText()
        })
})