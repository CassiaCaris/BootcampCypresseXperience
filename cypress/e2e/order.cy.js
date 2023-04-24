import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'
import catalogPage from '../support/pages/catalog'
import orderPage from '../support/pages/order'
import data from "../fixtures/order.json"

describe('Solicitação de pedido', () => {

    context('Usuário deve estar logado', () => {

        const { customer, shaver, service } = data

        before(() => {
            cy.createUser(customer)
            cy.apiLogin(customer)
        })

        it('deve poder solicitar serviços', () => {
            shaversPage.selectShavers(shaver.name)
            catalogPage.hasShaver(shaver.name)
            catalogPage.selectService(service.description)
            catalogPage.hasTitle(service.description)
            catalogPage.confirm()
            orderPage.hasOrder()
        })
    })

})