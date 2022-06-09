import { BasePage } from '../../Objects/base_page'
import { Slider } from '../../Objects/Widgets/slider'
import { link } from '../../../../config'

describe('Test Slider', () => {
  before(() => {
    cy.visit(link)
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Widgets')
    basePage.goToSectionFromleftPanel('Slider')
  })

  it('Should slider changes position', () => {
    const slider = new Slider()
    slider.changeSlider('90')
  })
})
