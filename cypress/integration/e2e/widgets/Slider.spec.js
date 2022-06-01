import BasePage from '../../../integration/Objects/BasePage'
import Slider from '../../Objects/Widgets/Slider'
import {link} from '../../../../config'

describe('Test Slider', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.GoToWidgets()
        Slider.GoToSlider()
        })

        it('Test Slider', ()=>{
            Slider.ChangeSlider()
        })

})