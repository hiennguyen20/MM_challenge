const xpath = require('./xpath.js')

module.exports = {

    verifyLoginSuccessMsgIsShowed() {
        cy.xpath(xpath.loggedinSuccessfullyLabel).should('be.visible')
    }
}
