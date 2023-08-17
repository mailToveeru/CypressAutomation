import file from '../fixtures/genresInTopPage.json'

require('cypress-xpath')

describe("Validate all top page geners and sub genres", { testIsolation: false }, ()=>{

    beforeEach(()=>{

        cy.viewport(1366, 768) 
    
        cy.once('uncaught:exception', () => false);
    
        cy.visit("https://stg.ticket.rakuten.co.jp")
    
     })

            it('Validate the Top page header text', ()=>{

                cy.xpath("(//a[contains(@class,'menu-link')][contains(text(),'トップ')])[1]").should('be.visible')
                                                                                            .and('have.text', 'トップ')

            })

            
            it('Validate the Music genre header text', ()=>{

                cy.xpath("(//a[contains(@class,'menu-link')][contains(text(),'音楽')])[1]").should('be.visible')
                                                                                          .and('have.text', '音楽')
                                                                                          .and('have.attr', 'href')

            })

            it.only('Validate the Music sub genre header text', ()=>{

                cy.fixture('genresInTopPage').then((data)=>{
                
                cy.xpath("(//a[contains(@class,'menu-link')][contains(text(),'音楽')])[1]").trigger('mouseover')

                cy.xpath("(//ul[@class='menu-list'])[2]//li").should('have.length', 13);

                cy.xpath("(//ul[@class='menu-list'])[2]//li").each((item, index, list)=>{

                        cy.wrap(item).should('have.text', JSON.stringify(data.music[index]).replace("\"", '').replace("\"", ''));

                    })    
                })
            }) 
          

     })
    

