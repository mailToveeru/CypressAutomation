require('cypress-xpath')

describe('Test BD application', ()=>{

 it('Test Case 1', ()=>{

 cy.viewport(1366, 768) 


 cy.visit("https://www.bd.com/en-us");

 cy.url().should('include', 'bd.com')

 cy.title().should('eq', "Advancing the world of health | BD");

 cy.xpath("//span[contains(text(), 'Solutions')]").invoke('mouseover'); 

 cy.xpath("(//span[contains(text(), 'Administrator')])[1]").invoke('mouseover');

 cy.xpath("(//li/a[text()='Ambulatory Surgery Center Solutions'])[1]").click();

 cy.url().should('include', "ambulatory-surgery-center-solutions");

})

})

