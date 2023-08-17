require('cypress-xpath')

describe('dropdown text',()=>{

    it('test1', ()=>{
        cy.viewport(1366, 768) 
        cy.once('uncaught:exception', () => false);
        cy.visit("https://ticket.rakuten.co.jp/")
        cy.xpath("//a[@aria-haspopup='true'][contains(text(),'音楽')]").trigger('mouseover')
        cy.xpath("(//a[@aria-haspopup='true'][contains(text(),'音楽')])[1]").should('be.visible').click()
    })

})