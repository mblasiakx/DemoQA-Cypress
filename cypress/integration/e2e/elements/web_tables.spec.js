import { config } from '../../../../config'
import { BasePage } from '../../Objects/base_page'
import { WebTables } from '../../Objects/Elements/web_tables'
describe('WebTables - add,edit and remove', () => {
  beforeEach(() => {
    cy.visit('/')
    const basePage = new BasePage()
    basePage.goToSectionFromCategoryCards('Elements')
    basePage.goToSectionFromleftPanel('Web Tables')
  })

  it('Should remove user', () => {
    const webTables = new WebTables()
    webTables.removeUser('#delete-record-1')
  })

  it('Should add user', () => {
    const webTables = new WebTables()
    webTables.addUser(
      config['Web Tables'].User.name,
      config['Web Tables'].User.surname,
      config['Web Tables'].User.email,
      config['Web Tables'].User.age,
      config['Web Tables'].User.department,
      config['Web Tables'].User.salary
    )
  })

  it(' Should edit user', () => {
    const webTables = new WebTables()
    webTables.editUser(
      '#edit-record-1',
      config['Web Tables'].User.age,
      config['Web Tables'].User.department,
      config['Web Tables'].User.salary
    )
  })
})
