
describe('tabs', ()=>{

    it('tabs handle using approach 1',()=>{

        cy.viewport(1366, 768) 

        cy.once('uncaught:exception', () => false);

        cy.visit("https://stg.ticket.rakuten.co.jp/")

        cy.get(".icon-box[href='https://ticket.faq.rakuten.net/']").invoke('removeAttr', 'target').click();

        cy.url().should('include', "https://ticket.faq.rakuten.net/s/")
        

        cy.go('back')
    })

    it('tabs handle using approach 2',()=>{

        cy.viewport(1366, 768) 

        cy.once('uncaught:exception', () => false);

        cy.visit("https://stg.ticket.rakuten.co.jp/")

        cy.get(".icon-box[href='https://ticket.faq.rakuten.net/']").then((link)=>{

         cy.request(link.prop('href')).its('status').should('eq', 200)

        })

       // cy.url().should('include', 'https://ticket.faq.rakuten.net/s/')
        

    })
})