export default class Slider{
     goToSlider(){
        cy.get('.accordion > :nth-child(4)> .element-list > .menu-list > #item-3').click()
    }

    changeSlider(){
        cy.get('.range-slider').invoke('val', '80').trigger('change')
    }
}