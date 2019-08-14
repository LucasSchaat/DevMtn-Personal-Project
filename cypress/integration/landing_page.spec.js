describe('Landing Page functionality', () => {
    const username = 'AutomatedTest'
    const password = '123LetsGo!'
    
    beforeEach( () => {
        cy.visit('http://localhost:3000/')
    })

    it('Login and Signup buttons exist', () => {
        cy.get('.nav-button')
        .should('exist')
    })

    it('Signup and Login redirection and input fields exist', () => {
        cy.get('.signup-button')
        .click()

        cy.get('.signup-input')
        .should('exist')

        cy.get('.login-button')
        .click()

        cy.get('.login-input')
        .should('exist')
    })

    it('Input values in Signup and Login, login and logout', () => {
        cy.get('.signup-button')
        .click()
        
        cy.get('.signup-username')
        .type(username)
        .should('have.value', username)

        cy.get('.signup-password')
        .type(password)
        .should('have.value', password)

        cy.get('.submit-signup-button')
        .should('exist')

        cy.get('.login-button')
        .should('exist')
        .click()

        cy.get('.login-username')
        .type(username)
        .should('have.value', username)

        cy.get('.login-password')
        .type(password)
        .should('have.value', password)

        cy.get('.submit-login-button')
        .should('exist')
        .click()

        cy.get('.logout-button')
        .should('exist')
        .click()
    })
})