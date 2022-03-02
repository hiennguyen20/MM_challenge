const xpath = require('./xpath.js')

module.exports = {

    login(email, password) {
        cy.xpath(xpath.emailInput).type(email)
        cy.xpath(xpath.passwordInput).type(password)
        cy.xpath(xpath.loginButton).click()
    },

    verifyPassWordErrorMsgIsShowed() {
        cy.xpath(xpath.passwordErrorLabel).should('be.visible')
    }
}
