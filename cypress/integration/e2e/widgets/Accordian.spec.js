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

    cy.get('#section3Heading').parent().find('p').should('be.visible')
  })

  it('Should click "Where does it come from?" section ', () => {
    const accordian = new Accordian()
    accordian.clickSection('Where does it come from?')

    cy.get('#section2Content').parent().find('p').should('be.visible')
  })

  it('Should click "What is Lorem Ipsum?" section ', () => {
    const accordian = new Accordian()
    accordian.clickSection('What is Lorem Ipsum?')

    cy.get('#section1Content').parent().find('p').should('be.visible')
  })
})
