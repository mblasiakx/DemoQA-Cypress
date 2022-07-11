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
    webTables.removeUser('1')

    //cy.get('.rt-tbody').find('.rt-tr').should('have.length', 2)
  })

  it('Should add user', () => {
    const webTables = new WebTables()
    webTables.goToAddUserForm()
    webTables.addAndEditUser('firstName', config['Web Tables'].User.name)
    webTables.addAndEditUser('lastName', config['Web Tables'].User.surname)
    webTables.addAndEditUser('email', config['Web Tables'].User.email)
    webTables.addAndEditUser('age', config['Web Tables'].User.age)
    webTables.addAndEditUser('salary', config['Web Tables'].User.salary)
    webTables.addAndEditUser('department', config['Web Tables'].User.department)
  })

  it(' Should edit user', () => {
    const webTables = new WebTables()
    webTables.goToEditUserPanel('1')
    webTables.addAndEditUser('firstName', config['Web Tables'].User.name)
    webTables.addAndEditUser('lastName', config['Web Tables'].User.surname)
    webTables.addAndEditUser('email', config['Web Tables'].User.email)
  })
})
