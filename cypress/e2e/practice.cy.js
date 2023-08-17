require('cypress-xpath')

describe('Practice page', { testIsolation: false }, ()=>{

    beforeEach(()=>{

        cy.visit("https://www.letskodeit.com/practice");
        cy.title().should('eq', "Practice Page");
    
    })

    it('Test Radio buttons', ()=>{

    cy.get("#hondaradio").check().should('be.checked');

    //uncheck radio button is not valid scenario
    //cy.get("#bmwradio").uncheck().should('not.be.checked') //uncheck radio button is not working because as a user will select onother radio button insted of unchecking the radio button

    })


    it('Test check boxes', ()=>{
        
        cy.get("#bmwcheck").check().should('be.checked')
        cy.get("#benzcheck").uncheck().should('not.be.checked')


    })

    it.skip('Test new Window',()=>{

        cy.visit("https://www.letskodeit.com/practice").then(win=>{

        cy.stub(win, 'open').returns({}).as('open')
        
        })
         cy.get("#openwindow").click();
         cy.get('@open').should('have.been.called', '', "https://www.letskodeit.com/courses")
        })


     it('Test new Tab', ()=>{

         cy.get("#opentab").invoke('removeAttr', "target").click();
         cy.url().should('include', "https://www.letskodeit.com/courses")
        

      })

      it('Static dropdown', ()=>{

      cy.get("#carselect").select("Benz").should('have.value', "benz");

     })

     it.skip('Dynamic dropdown', ()=>{

        cy.visit("https://www.amazon.com/")

        cy.get("#twotabsearchtextbox").click().type("Samsung");
        cy.get(".s-suggestion-container > div").each(($element, index, list)=>{


            if($element.text()=='samsung galaxy s21'){

                cy.wrap($element).click();
            }
        })
    })

    it.only('Mouse over element', ()=>{

        cy.get("#mousehover").invoke('mouseover');
        cy.get(".mouse-hover-content").contains('Reload').click({ force: true });
    })
})

