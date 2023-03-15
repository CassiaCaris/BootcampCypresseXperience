describe('login', () => {

    context('quando submeto o formulário', () => {

        it('deve logar com sucesso', () => {
            const user = {
                name: 'Cassia',
                email: 'cassia@yahoo.com',
                password: 'pwd123'
            }
    
            cy.visit('http://localhost:3000/')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)

            cy.get('button[type=submit]').click()

            cy.get('.logged-user div a').should('be.visible')
              .should('have.text', 'Olá, ' + user.name)
        })

        it('não deve logar com senha incorreta', () => {
            const user = {
                email: 'cassia@yahoo.com',
                password: '123456',
                mensage: 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            }
    
            cy.visit('http://localhost:3000/')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)

            cy.get('button[type=submit]').click()
            cy.get('.notice-container').should('be.visible')
              .find('.error p').should('have.text', user.mensage)
        })
        
        it('não deve logar com email não cadastrado', () => {
            const user = {
                email: 'cassia@gmail.com',
                password: 'pwd123',
                mensage: 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            }
    
            cy.visit('http://localhost:3000/')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)

            cy.get('button[type=submit]').click()
            cy.get('.notice-container').should('be.visible')
              .find('.error p').should('have.text', user.mensage)
        })

        it('não deve logar email inválido ', () => {
            const user = {
                email: 'gmail.com',
                password: 'pwd123',
                error: 'Informe um email válido'
            }
    
            cy.visit('http://localhost:3000/')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)

            cy.get('button[type=submit]').click()
            cy.get('.alert').should('be.visible')
              .find('.alert-error').should('have.text', user.error)
        })
        
        it('não deve ter senha inferior a 6 digitos', () => {
            const user = {
                email: 'cassia@gmail.com',
                password: '123',
                error: 'Pelo menos 6 caracteres'
            }
    
            cy.visit('http://localhost:3000/')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)

            cy.get('button[type=submit]').click()
            cy.get('.alert').should('be.visible')
              .find('.alert-error').should('have.text', user.error)
        })

        it('não deve logar com credenciais em branco', () => {
            const user = {
                emailErro: 'E-mail é obrigatório',
                passwrodErro: 'Senha é obrigatória'
            }
    
            cy.visit('http://localhost:3000/')

            cy.get('button[type=submit]').click()

            cy.get('.alert').should('be.visible')
              .find('.alert-error').should('have.text', user.emailErro + user.passwrodErro)
        })

    })

})