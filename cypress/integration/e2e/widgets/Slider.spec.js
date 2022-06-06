import {BasePage} from '../../Objects/base_page'
import Slider from '../../Objects/Widgets/slider'
import {link} from '../../../../config'

describe('Test Slider', ()=>{
    before(()=>{
        cy.visit(link)
        BasePage.goToWidgets()
        Slider.goToSlider()
        })

        it('Test Slider', ()=>{
            Slider.changeSlider()
        })

})