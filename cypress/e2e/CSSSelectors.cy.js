///<reference types = "Cypress" />

describe('css selector', ()=>{


    it('validate top page header text', ()=>{

        cy.viewport(1366, 768) 
        cy.once('uncaught:exception', () => false);
        cy.visit("https://stg.ticket.rakuten.co.jp").screenshot('TopPage')
        cy.title().should('eq', 'チケット情報・販売・購入・予約 | 楽天チケット')
        cy.get("li.menu-item.link.active-item > a").contains('トップ').screenshot('TopText')

    })


})