import {link,webTablesName, webTableSurname, webTablesEmail, webTablesAge, webTablesDepartament, webTablesSalary} from '../../../../config'
import BasePage from '../../Objects/base_page'
import WebTables from '../../Objects/Elements/web_tables'
describe('WebTables - add,edit and remove', ()=>{


    beforeEach(()=>{
        cy.visit(link)
        BasePage.gotoElements()
        WebTables.goToWebTablesSection()

        })


    it('Go to Web Tables, remove user,edit user and add user', ()=>{
   
        WebTables.editUser(webTablesAge, webTablesDepartament, webTablesSalary)
        WebTables.addUser(webTablesName, webTableSurname, webTablesEmail, webTablesAge, webTablesDepartament, webTablesSalary)

        
    })
})