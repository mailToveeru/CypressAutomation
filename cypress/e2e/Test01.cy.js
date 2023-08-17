describe('test1',()=>{

    it.only('Test on google website',()=>{
    
    
        cy.visit("https://www.google.com/");
    
        cy.get("#twotabsearchtextbox").click().type("Samsung");
    
        cy.get(".s-suggestion-container").then(($element, index,list)=>{
    
            if($element.text()== "samsung galaxy s21 case")
    
            cy.wrap($element).click();
    
          })
    
         })
    
    })