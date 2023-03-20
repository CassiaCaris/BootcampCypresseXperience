import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'

describe('login', () => {

    context('quando submeto o formulário', () => {

        it('deve logar com sucesso', () => {
            const user = {
                name: 'Cassia',
                email: 'cassia@yahoo.com',
                password: 'pwd123'
            }
    
            loginPage.submit(user.email,user.password)
            shaversPage.header.userShouldLoggedIn(user.name)
        })

        it('não deve logar com senha incorreta', () => {
            const user = {
                email: 'cassia@yahoo.com',
                password: '123456',
                mensage: 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            }
    
            loginPage.submit(user.email,user.password)
            loginPage.noticeShould(user.mensage)
            
        })
        
        it('não deve logar com email não cadastrado', () => {
            const user = {
                email: 'cassia@gmail.com',
                password: 'pwd123',
                mensage: 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            }
    
            loginPage.submit(user.email,user.password)
            loginPage.noticeShould(user.mensage)
        })

        it('não deve logar com credenciais em branco', () => {
                        
            loginPage.submit()
            loginPage.alertShould()
           
        })
      
        context('senha muito curta', () => {

            const passwords = [
                '1',
                '12',
                '123',
                '1234',
                '12345'
            ]
            
            passwords.forEach((p)=> {

                it(`Não deve logar com senha: ${p}`, ()=> {
                    const user = {
                        email: 'cassia@gmail.com'
                    }
            
                    loginPage.submit(user.email,p)
                    loginPage.alertShouldbe('Pelo menos 6 caracteres')
                    
                })
            })
        })

        context('email no formato incorreto', () => {

            const emails = [
                '@gmail.com',
                'teste&gmail.com',
                'teste@test',
                '@',
                'Test@',
                '121212',
                '@#@!%$&@a',
                'xpto123',
                'test'                
            ]

            emails.forEach((e)=> {
                it(`não deve logar email no formato: ${e}`, () => {
            
                    loginPage.submit(e,'pwd123')
                    loginPage.alertShouldbe('Informe um email válido')
          
                })
            })
        })    
    })    

})