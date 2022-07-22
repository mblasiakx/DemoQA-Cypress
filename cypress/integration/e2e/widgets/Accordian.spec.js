import { BasePage } from '../../Objects/base_page'
import { Accordian } from '../../Objects/Widgets/accordian'

describe('Test Accordian page', () => {
  before(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Widgets')
    basePage.goToSectionFromleftPanel('Accordian')
  })

  it('Should click "Why do we use it?" section ', () => {
    const accordian = new Accordian()
    accordian.clickSection('Why do we use it?')

    accordian.sectionContent('3').parent().find('p').should('be.visible')
  })

  it('Should click "Where does it come from?" section ', () => {
    const accordian = new Accordian()
    accordian.clickSection('Where does it come from?')

    accordian.sectionContent('2').parent().find('p').should('be.visible')
  })

  it('Should click "What is Lorem Ipsum?" section ', () => {
    const accordian = new Accordian()
    accordian.clickSection('What is Lorem Ipsum?')

    accordian.sectionContent('1').parent().find('p').should('be.visible')
  })
})
