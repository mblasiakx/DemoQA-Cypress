import {link,web_tables_name, web_tables_surnam, web_tables_email, web_tables_age, web_tables_departament,web_tables_salary} from '../../../../config'
import BasePage from '../../../integration/Objects/BasePage'
import WebTables from '../../../integration/Objects/Elements/WebTables'
describe('WebTables - add,edit and remove', ()=>{

    beforeEach(()=>{
        cy.visit(link)
        BasePage.GotoElements()
        WebTables.GoToWebTablesSection()

        })


    it('Go to Web Tables, remove user,edit user and add user', ()=>{
   
        WebTables.EditUser(web_tables_age, web_tables_departament,web_tables_salary)
        WebTables.AddUser(web_tables_name, web_tables_surnam, web_tables_email, web_tables_age, web_tables_departament,web_tables_salary)

        
    })
})