Feature: Test login page
    Scenario Outline: Verify that a user cannot login with a wrong email address or password
        When I login with email: "<email>", password: "<password>"
        Then Verify that the error message is showed
        Examples:
            | email                   | password         |
            | a not existing email    | a password       | 
            | an invalid email        | a password       | 
            | a valid email           | a wrong password |

    Scenario: Verify that a user can login successfully
        When I login with email: "a valid email", password: "a correct password"
        Then Verify that I have logged in successfully
