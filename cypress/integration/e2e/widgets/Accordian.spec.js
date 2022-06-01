import BasePage from '../../../integration/Objects/BasePage'
import Accordian from '../../Objects/Widgets/Accordian'
import {link} from '../../../../config'

describe('Test Accordian page', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.GoToWidgets()
        Accordian.GoToAccordian()
        })

        it('Test Text field ', ()=>{
            Accordian.GoToAccordian()
            Accordian.CheckText()
        })
})