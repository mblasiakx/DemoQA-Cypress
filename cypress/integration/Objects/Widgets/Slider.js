export default class Slider{
    static GoToSlider(){
        cy.get('.accordion > :nth-child(4)> .element-list > .menu-list > #item-3').click()
    }

    static ChangeSlider(){
        cy.get('.range-slider').invoke('val', '80').trigger('change')
    }
}