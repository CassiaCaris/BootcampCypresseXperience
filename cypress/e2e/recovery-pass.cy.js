import fPPage from "../support/pages/forgot-pass"
import rpPage from "../support/pages/reset-pass"
import loginPage from "../support/pages/login"
import shavesPage from "../support/pages/shavers" 


describe('Esqueci minha senha', () => {


    it('deve poder solicitar o resgate de senha', () => {
        const user = {
            name: "Ana Catarina",
            email: "ana.catarina@yahoo.com",
            password: 'abc123',
            is_shaver: false
        }
        cy.createUser(user)

        fPPage.go()
        fPPage.submit(user.email)

        const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        fPPage.noticeShouldBe(message)
    })

    context('Quando o usuário solicita o resgate de senha', () => {
        const user = {
            name: "Catarina",
            email: "catarina@hotmail.com",
            password: 'pwd123',
            is_shaver: false
        }

        beforeEach(() => {
            cy.createUser(user)
            cy.recoveryPass(user.email)
            cy.getToken(user.email)
        })

        it('deve poder cadastrar uma nova senha', () => {
            rpPage.go(Cypress.env('token'))

            rpPage.submit('abc123', 'abc123')
            rpPage.noticeShouldBe('Agora você já pode logar com a sua nova senha secreta.')
            cy.log(Cypress.env('token'))
           

        })

        afterEach(()=> {
            loginPage.submit(user.email, 'abc123')
            shavesPage.header.userShouldLoggedIn(user.name)
        })
    })


})