describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {  // 1
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст авторизация прошла успешно виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
       
})
 
   it('Верный логин и неверный пароль', function () {  //3
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажала войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст  виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя    

})
 
   it('Проверка, что в логине есть @', function () {  //5
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя    

    })
      

    it('Проверка восстановления пароля', function () {  //2
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#forgotEmailButton').click(); // нажала восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // нажала отправить код 
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя    

    })

    it('Неверный логин и верный пароль', function () {  //4
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dolnikof.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст  виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя    


         })

    it('Строчные буквы в логине', function () {  //6
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин, но со строчными буками
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст  виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя    

 })

 })



