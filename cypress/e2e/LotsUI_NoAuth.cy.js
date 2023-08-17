require('cypress-xpath')

describe("Validate all top page geners and sub genres", ()=>{

    before(()=>{

        cy.viewport(1366, 768) 
    
        cy.once('uncaught:exception', () => false);
    
        cy.visit("https://stg.ticket.rakuten.co.jp/lots/realots/events/15354/info/9430")
    
    })

    it('Validate the price details in rea lots', ()=>{


            /*************EVENT INFO SCREEN *********/

            // button click in first event info page
            cy.xpath("//button[contains(text(),'注意事項へ')]").should('be.visible').click();

            /*************AGREEMENT SCREEN *********/

            //button click in aggreement page
            cy.xpath("//button[contains(text(),'同意して抽選申し込みへ')]").should('be.visible').click();


            /*************SEAT SELECT SCREEN *********/

            //click on + icon to add the seat count
            cy.xpath("(//div[1]//button[3])[1]").should('be.visible').click();

            //price from seat select section
            cy.xpath("(//div[1]/span/strong)[1]").then((element)=>{
            let actualValue =  element.text()
            cy.log(actualValue);

            //price from right side panel
            cy.xpath("(//p[@title='Normal Seat product 1']//following::p)[1]").then((element)=>{
            let expectedValue =  element.text()
            cy.log(expectedValue);

            expect(actualValue).to.equal(expectedValue)

            //click button to navigate to pick up and payment section
            cy.xpath("//button[contains(text(),'引取・決済へ')]").should('be.visible').click();

            /**********PICKUP AND PAYMENT SCREEN */

            //click window pickup option
            cy.xpath("//p[text()='Window pickup']").should('be.visible').click();
      
            //Click window payment option
            cy.xpath("//p[text()='窓口受取']").should('be.visible').click();

           /** CREDIT CARD PAYMENT**/

        //    cy.wait(2000)

        //    cy.xpath("//p[contains(text(), 'Credit card payment')]").should('be.visible').click();

           
        //    cy.get('#new_card_name').type("PASSED");

        //    cy.wait(1000)

        //    //CREDIT CARD NUMBER
        //    cy.frameLoaded('#cardNumber > iframe')
          
        //    cy.xpath("//div[@id='cardNumber']//iframe")
        //      .should('be.visible')
        //      .then(($iframe) => {
        //        const $body = $iframe.contents().find('body')
       
        //     cy.wrap($body)
        //         .find("#card-number-element")
        //         .type('4567890003000008{enter}')
        //         })

        //   //DATE FIELD - Expiration month
        //   cy.frameLoaded('#expirationMonth > iframe')
          
        //   cy.xpath("//div[@id='expirationMonth']//iframe")
        //     .should('be.visible')
        //     .then(($iframe) => {
        //       const $body = $iframe.contents().find('body')
      
        //    cy.wrap($body)
        //        .find("#expiration-month-select-element")
        //        .select('10').should('have.value','10')
               
        //        })

        //   //DATE FIELD - Expiration Year
        //   cy.frameLoaded('#expirationYear > iframe')
          
        //   cy.xpath("//div[@id='expirationYear']//iframe")
        //     .should('be.visible')
        //     .then(($iframe) => {
        //       const $body = $iframe.contents().find('body')
      
        //    cy.wrap($body)
        //      .find("#expiration-year-select-element")
        //      .select('2024').should('have.value','2024')
               
        //  })

        //   //CVV number field
        //   cy.frameLoaded('#cvvUseNewCard > iframe')
          
        //   cy.xpath("//div[@id='cvvUseNewCard']//iframe")
        //     .should('be.visible')
        //     .then(($iframe) => {
        //       const $body = $iframe.contents().find('body')
      
        //    cy.wrap($body)
        //      .find("[name='cvv']")
        //      .type('123{enter}')
               
        //  })

         /** validate price in pickup and payment screen */

             //price from right side panel
             cy.xpath("(//p[@title='Normal Seat product 1']//following::p)[1]").should('be.visible')
             cy.xpath("(//p[@title='Normal Seat product 1']//following::p)[1]").then((element)=>{
             let priceInPickupAndPaymentScreen =  element.text()
             cy.log(priceInPickupAndPaymentScreen);
             expect(actualValue).to.equal(priceInPickupAndPaymentScreen);

             //Click button to navigate to customer info screen
            cy.xpath("//button[contains(text(),'購入者情報へ')]").should('be.visible').click();


             /********** CUSTOMER INFO SCREEN */

            cy.wait(3000)

             //Last name field
             cy.xpath("//input[@id=':rd:']").should('be.visible').click().clear().type('姓')

             //first name field
             cy.xpath("//input[@id=':re:']").should('be.visible').click().clear().type('名')

             //Last name kana field
             cy.xpath("//input[@id=':rf:']").should('be.visible').click().clear().type('カナ')

            //First name kana field
            cy.xpath("//input[@id=':rg:']").should('be.visible').click().clear().type('カナ')

            //Zip number field
            cy.xpath("//input[@id=':rh:']").should('be.visible').clear().type('1030001{enter}')

            cy.wait(1000)

            
             for(let i =0;i<=1;i++){

                 //Email 1 field
                cy.get("input[name='email_1']").should('be.visible').clear().type('mail@example.ne.jp')

                cy.wait(1000)
                //Email 2 field           
                cy.get("input[name='email_1_confirm']").should('be.visible').clear().type('mail@example.ne.jp')


             }
             
           //Telephone no field
            cy.xpath("//input[@id=':ro:']").should('be.visible').clear().type('0801234567{enter}')

            cy.xpath("//input[@name='sex' and @value='1']").check().should('be.checked');

            //password field
            cy.xpath("//input[@id=':rs:']").should('be.visible').clear().type('test1234')


            //price from right side panel
            cy.xpath("(//p[@title='Normal Seat product 1']//following::p)[1]").should('be.visible')
            cy.xpath("(//p[@title='Normal Seat product 1']//following::p)[1]").then((element)=>{
            let priceInCustomerInfoScreen =  element.text()
            cy.log(priceInCustomerInfoScreen);
            expect(actualValue).to.equal(priceInCustomerInfoScreen);

            //click button to navigate check customer screen
            cy.xpath("//button[contains(text(),'確認へ')]").should('be.visible').click();



            /******  CONFIRMATION SCREEN ******/

            //price from right side panel
            cy.xpath("(//p[@title='Normal Seat product 1']//following::p)[1]").should('be.visible')
            cy.xpath("(//p[@title='Normal Seat product 1']//following::p)[1]").then((element)=>{
            let priceInConfirmScreen =  element.text()
            cy.log(priceInConfirmScreen);
            expect(actualValue).to.equal(priceInConfirmScreen);

            cy.wait(2000)

            cy.scrollTo('bottom')

            cy.get(':nth-child(2) > .MuiButtonBase-root').click()

            /***** CHECK CONFIRM SCREEN */

            //enabling checkbox
            cy.get("input[type='checkbox']").check().should('be.checked');

            //clicking on button to redirected to finish screen

            cy.xpath("//button[contains(text(),'申し込む')]").should('be.visible').click();


            /**** FINISH SCREEN */

            //printing order id

            cy.xpath("//div[1]/p[3]/text()[3]").then((orderId)=>{

                let OrderId = orderId.text();

                cy.log(OrderId)

                })

            //validate Finish page header text

            cy.xpath("//p[text()='抽選申込を受付ました。']").should('be.visible').should('have.text', '抽選申込を受付ました。')
            
             })
             

            })
         })
        })

        
    })
    })

})
