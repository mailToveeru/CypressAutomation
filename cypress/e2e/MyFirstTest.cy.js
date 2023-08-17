

describe('My First Test', () => {


  before(()=>{

    cy.viewport(1366, 768) 

    cy.once('uncaught:exception', () => false);

    cy.visit("https://ticket.rakuten.co.jp")

    })
   
    it('test1', () => {

      cy.log("Validating tickets website page title")

      cy.title().should('eq', '楽天チケット チケット予約・イベント情報サイト')

    })

    it('test2', () => {
       
      cy.log("Validating tickets logo")

      cy.get("#desktop-logo-png").should('be.visible')

      cy.log("Validating tickets logo URL attribute")

      cy.get("#desktop-logo-png").should('have.attr', 'src', 'https://tsimg.azureedge.net/img/tickets-logo-3.svg')
 
    /*  cy.get("#desktop-logo-png").then('getAttrObject').should("include", { src : "https://tsimg.azureedge.net/img/tickets-logo-3.svg", 
                                                                                       class : "img-fluid", 
                                                                                       srcset : "https://tsimg.azureedge.net/img/tickets-logo-3.svg"
                                                                                  }
                                                                        ) */

      })

      
})

