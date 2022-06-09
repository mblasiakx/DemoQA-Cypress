import { BasePage } from '../../Objects/base_page'
import { Accordian } from '../../Objects/Widgets/accordian'
import { link } from '../../../../config'

describe('Test Accordian page', () => {
  before(() => {
    cy.visit(link)
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Widgets')
    basePage.goToSectionFromleftPanel('Accordian')
  })

  it('Should click each section ', () => {
    const accordian = new Accordian()
    accordian.clickSection('Why do we use it?')
    accordian.clickSection('Where does it come from?')
    accordian.clickSection('What is Lorem Ipsum?')
  })
})
