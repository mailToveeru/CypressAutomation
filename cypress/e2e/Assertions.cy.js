
require('cypress-xpath')

describe('assertions', ()=>{

    it('implicit assertions', ()=>{

    cy.viewport(1366, 768) 
    cy.once('uncaught:exception', () => false);
    cy.visit("https://ticket.rakuten.co.jp")
    cy.url("https://ticket.rakuten.co.jp").should('contain','rakuten')
    cy.get("#desktop-logo-png").should('exist')
    cy.xpath("(//a[text()='アーティスト検索'])[2]").should('have.text','アーティスト検索')
    cy.get(".dashicons-facebook-alt").should('exist')
    cy.get(".dashicons-twitter").should('exist')
})

it('Explicit assertions', ()=>{

    cy.viewport(1366, 768) 
    cy.once('uncaught:exception', () => false);
    cy.visit("https://ticket.rakuten.co.jp")
   
    //Validate Music genre text
    let expectName = "音楽";
    cy.get("#mega-menu-item-119554 > a").then((element)=>{
       let actualName =  element.text()
        expect(actualName).to.equal(expectName)
    })

    //Validate Theatre or stage text
    let TheatreText = '演劇・ステージ・舞台';
   
   cy.get(".mega-menu-link[href='https://ticket.rakuten.co.jp/stage/']").then((TheatreElement)=>{
    let actualText = TheatreElement.text()
     expect(actualText).to.equal(TheatreText)        
   })

})

})
