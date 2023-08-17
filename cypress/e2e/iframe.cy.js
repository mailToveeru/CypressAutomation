describe('test iframe', ()=>{

    it('test1', ()=>{

        cy.viewport(1366, 768) 
        cy.once('uncaught:exception', () => false);

        cy.visit("https://stg.ticket.rakuten.co.jp/")

        cy.frameLoaded("#twitter-widget-0");

        cy.iframe("#twitter-widget-0").should('be.visible');

        cy.iframe("#twitter-widget-0").xpath("(//span[text()='楽天チケット'])[1]").should('be.visible');
    
    })


})