   describe('Покупка нового аватара для тренера', function () {               
    it('Покупка нового аватара для тренера', function () {   


         cy.visit('https://pokemonbattle.ru/login'); // переходим на сайт 

         cy.get('#k_email').type('USER_LOGIN'); // вводим правильный логин
         cy.get('#k_password').type('USER_PASSWORD') // вводим правильный пароль
         cy.get('.MuiButton-root').click();  // нажимаем кнопку войти

         cy.get('.header_card_trainer').click(); // нажимаемна аватар тренера
         
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем на кнопку смена аватара

         cy.get('.available > button').first().click();   // кликаем купить на покемона

         cy.get('.card_number').type('4111111111111111'); // вводим номер карты
         cy.get('.card_csv').type('125'); // вводим CVV карты
         cy.get('.card_date').type('12/34');// вводим срок действия карты месяц/год
         cy.get('.card_name').type('Irina Marunova'); // вводим имя владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем оплатить

         cy.get('.threeds_number').type('56456'); // вводим код из СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');  // проверяю, что вижу текст
     });
 });
