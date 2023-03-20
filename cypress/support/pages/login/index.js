
class LoginPage {

    constructor() {
        this.alertError = '.alert-error'
    }


    submit(email = null, password = null) {
        cy.visit('/')

        //confirma se os campos estão visivel
        cy.get('input[placeholder$=email]').as('email')
        cy.get('input[placeholder*=senha]').as('password')

        //caso esteja visivel e tenha informação a ser passada preencha o campo caso contrario deixa nulo
        if (email) {
            cy.get('@email').type(email)
        }
        if (password) {
            cy.get('@password').type(password)
        }

        //clica no botão "entrar"
        cy.get('button[type=submit]').click()
    }

    noticeShould(mensage) {
        cy.get('.notice-container').should('be.visible')
            .find('.error p').should('have.text', mensage)
    }

    alertShould() {
        cy.contains(this.alertError, "E-mail é obrigatório").should('be.visible')
        cy.contains(this.alertError, "Senha é obrigatória").should('be.visible')
        // cy.get('.alert-error').should('have.length', 2)
        // .and(($small)=> {
        //   expect($small.get(0).textContent).to.equal("E-mail é obrigatório")
        //   expect($small.get(1).textContent).to.equal("Senha é obrigatória")
        // }) 
    }

    alertShouldbe(error) {
        cy.get(this.alertError).should('be.visible').should('have.text', error)
    }
}

export default new LoginPage()
