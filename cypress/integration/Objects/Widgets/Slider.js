export class Slider {
  get sliderContainer() {
    return cy.get('#sliderContainer')
  }

  changeSlider(value) {
    return this.sliderContainer
      .get('.range-slider')
      .invoke('val', value)
      .trigger('change')
  }
}
