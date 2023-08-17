
describe('Alerts', ()=>{

//add
    it.only('simple javascript alert', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()


        //to validate text in the alert window we have to use event concept as like below

        cy.on('window:alert', (window)=>{
             expect(window).to.contains('I am a JS Alert')
            })

        //cypress automatically close the alert using Ok button by default

        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    it('javascript confirm alert using, Ok button', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        //to validate text in the alert window we have to use event concept as like below

        cy.on('window:confirm', (window)=>{
             expect(window).to.contains('I am a JS Confirm')
            })

        //cypress automatically close the alert using Ok button by default

        cy.get("//p[@id='result']").should('have.text', 'You clicked: Ok')
    })

    it('javascript confirm alert using, cancel button', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        //to validate text in the alert window we have to use event concept as like below

        cy.on('window:confirm', (window)=>{
             expect(window).to.contains('I am a JS Confirm')
            })

         cy.on('window:confirm', ()=>false)
        
         cy.get("#result").should('have.text', 'You clicked: Cancel')
    })

    it('javascript prompt alert using, ok button', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((window)=>{

            cy.stub(window, 'prompt').returns('welcome');
        })
        
        cy.get("button[onclick='jsPrompt()']").click()
        
        //cypress automatically close the alert using Ok button by default

        cy.get("#result").should('have.text', 'You entered: welcome')

        
    })

    it('javascript authenticated alert using, username and password, approach - 1', ()=>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:{

                                                                   username: "admin",
                                                                   password :"admin"

                                                                         }
    })
     
        cy.url().should('include', "https://the-internet.herokuapp.com/basic_auth")

        cy.wait(5000)

        cy.get("div.example>p").should('have.contain', "Congratulations")
        
    })

    it.only('javascript authenticated alert using, username and password, approach - 2', ()=>{

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
     
        cy.url().should('include', "https://the-internet.herokuapp.com/basic_auth")

        cy.wait(2000)

        cy.get("div.example>p").should('have.contain', "Congratulations")
        
    })
})
