import header from '../../components/header'

class shaversPage {

    constructor() {
        this.header = header
    }

    selectShavers(name) {
        cy.contains('figcaption h3', name)
            .should('be.visible')
            .click()
    }

}

export default new shaversPage()