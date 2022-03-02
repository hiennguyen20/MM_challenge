import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"
const loginPage = require('../pages/login/index.js')
const welcomePage = require('../pages/welcome/index.js')

When('I login with email: {string}, password: {string}', (email, password) => {
    loginPage.login(email, password)
})

Then('Verify that I have logged in successfully', () => {
    welcomePage.verifyLoginSuccessMsgIsShowed()
})

Then('Verify that the error message is showed', () => {
    loginPage.verifyPassWordErrorMsgIsShowed()
})
