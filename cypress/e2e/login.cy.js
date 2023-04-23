import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'

import data from '../fixtures/users.json'

describe('login', () => {

    context('quando submeto o formulário', () => {

        it.only('deve logar com sucesso', () => {

            const user = data.success
            cy.createUser(user) 
            
            loginPage.submit(user.email, user.password)
            shaversPage.header.userShouldLoggedIn(user.name)
        })

        it('não deve logar com senha incorreta', () => {
            const user = data.invalid
            loginPage.submit(user.email, user.password)
            loginPage.noticeShould(user.mensage)

        })

        it('não deve logar com email não cadastrado', () => {
            const user = data.email
            loginPage.submit(user.email, user.password)
            loginPage.noticeShould(user.mensage)
        })

        it('não deve logar com credenciais em branco', () => {
            loginPage.submit()
            loginPage.alertShould()
        })

        context('senha muito curta', () => {

            data.shortpass.forEach((p) => {

                it(`Não deve logar com senha: ${p}`, () => {
                    const user = data.success
                    loginPage.submit(user.email, p)
                    loginPage.alertShouldbe('Pelo menos 6 caracteres')

                })
            })
        })

        context('email no formato incorreto', () => {

            data.invemails.forEach((e) => {
                it(`não deve logar email no formato: ${e}`, () => {

                    loginPage.submit(e, 'pwd123')
                    loginPage.alertShouldbe('Informe um email válido')

                })
            })
        })
    })

})