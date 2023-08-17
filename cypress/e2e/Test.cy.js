describe('test1',()=>{

it('Test on Amazon website',()=>{


    cy.visit("https://www.amazon.com/");

    cy.get("#twotabsearchtextbox").click().type("Samsung");

    cy.get(".s-suggestion-container").then(($element, index,list)=>{

        if($element.text()== "samsung galaxy s21 case")

        cy.wrap($element).click();

      })

     })

})